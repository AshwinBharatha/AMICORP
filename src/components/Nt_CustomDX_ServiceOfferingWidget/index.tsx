import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { withConfiguration } from '@pega/cosmos-react-core';
import type { PConnFieldProps } from '../shared/PConnProps';
import '../shared/create-nonce';

import StyledNtCustomDxServiceOfferingWidgetWrapper from './styles';

interface NtCustomDxServiceOfferingWidgetProps extends PConnFieldProps {
  datasource?: {
    source?: Array<Record<string, any>>;
  };
  header?: string;
}

interface CountryItem {
  name: string;
  countryCode: string;
  isMajor: boolean;
}

const COUNTRY_LIST_DATAVIEW = 'D_ActiveCountryList';

const COUNTRY_LIST_PAGE_SIZE = 100;

const COUNTRY_LIST_QUERY = {
  distinctResultsOnly: true,
  select: [
    { field: 'CountryCode' },
    { field: 'Name' },
    { field: 'IsMajor' },
    { field: 'IsActive' }
  ]
} as const;


function getPCore(): any {
  return typeof globalThis !== 'undefined' ? (globalThis as Record<string, unknown>).PCore : undefined;
}

const TOP_STAGES = [
  { id: 1 as const, label: 'Services' },
  { id: 2 as const, label: 'Details' },
  { id: 3 as const, label: 'Packages' },
  { id: 4 as const, label: 'Payment' }
];

const LEFT_STEPS = [
  { id: 1 as const, title: 'Jurisdiction', subtitle: 'Choose the jurisdiction.' },
  { id: 2 as const, title: 'Services', subtitle: 'Select services to get started.' },
  { id: 3 as const, title: 'Products', subtitle: 'Choose the products of your choice.' },
  { id: 4 as const, title: 'Add on Services', subtitle: 'Find the additional services that fits your needs.' }
];

const getCountryCode = (item: Record<string, any>): string => {
  const code =
    item.CountryCode ??
    item.countryCode ??
    item.pyCountryCode ??
    item.code ??
    '';
  return String(code).trim();
};

const getCountryName = (item: Record<string, any>): string => {
  return (
    item.name ||
    item.countryName ||
    item.country ||
    item.pyLabel ||
    item.pyCountry ||
    item.Country ||
    item.Name ||
    ''
  );
};

const getIsMajor = (item: Record<string, any>): boolean => {
  const flag =
    item.IsMajor ?? item.isMajor ?? item.pyIsMajor ?? item.major ?? item.isPrimary;
  if (typeof flag === 'string') {
    return flag.toLowerCase() === 'true' || flag === 'Y' || flag === '1';
  }
  return Boolean(flag === true);
};

function IconSearch() {
  return (
    <svg className='search-icon' width='18' height='18' viewBox='0 0 24 24' aria-hidden>
      <path
        fill='currentColor'
        d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
      />
    </svg>
  );
}

function mapRowsToCountryItems(sourceItems: Record<string, any>[]): CountryItem[] {
  const uniqueKeys = new Set<string>();
  const result: CountryItem[] = [];

  for (const item of sourceItems) {
    const name = getCountryName(item).trim();
    if (!name) {
      continue;
    }
    const code = getCountryCode(item).trim();
    const key = (code || name).toLowerCase();
    if (uniqueKeys.has(key)) {
      continue;
    }
    uniqueKeys.add(key);
    result.push({
      name,
      countryCode: code || name,
      isMajor: getIsMajor(item)
    });
  }

  result.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
  return result;
}

async function fetchAllCountryListRows(getContextName: () => string): Promise<Record<string, any>[]> {
  const pcore = getPCore();
  const getDataAsync = pcore?.getDataPageUtils?.()?.getDataAsync;
  if (typeof getDataAsync !== 'function') {
    return [];
  }

  const context = (() => {
    try {
      return getContextName?.() || '';
    } catch {
      return '';
    }
  })();

  const getRowsFromResponse = (response: any): Record<string, any>[] => {
    if (Array.isArray(response)) {
      return response;
    }
    if (Array.isArray(response?.data)) {
      return response.data;
    }
    if (Array.isArray(response?.pxResults)) {
      return response.pxResults;
    }
    return [];
  };

  try {
    const combined: Record<string, any>[] = [];
    let pageNumber = 1;

    while (true) {
      const paging = { pageNumber, pageSize: COUNTRY_LIST_PAGE_SIZE };
      const response = await getDataAsync(
        COUNTRY_LIST_DATAVIEW,
        context,
        {},
        paging,
        { ...COUNTRY_LIST_QUERY }
      );

      const chunk = getRowsFromResponse(response);
      combined.push(...chunk);
      if (chunk.length < COUNTRY_LIST_PAGE_SIZE) {
        break;
      }
      pageNumber += 1;
    }

    return combined;
  } catch (pagedError) {
    // Some environments expose a different getDataAsync signature; fallback to simpler calls.
    const fallbackCalls = [
      () => getDataAsync(COUNTRY_LIST_DATAVIEW, context),
      () => getDataAsync(COUNTRY_LIST_DATAVIEW),
      () => getDataAsync(COUNTRY_LIST_DATAVIEW, context, {})
    ];

    let lastError: unknown = pagedError;
    for (const call of fallbackCalls) {
      try {
        const response = await call();
        return getRowsFromResponse(response);
      } catch (error) {
        lastError = error;
      }
    }

    throw lastError;
  }
}

function IconCheck({ small }: { small?: boolean }) {
  return (
    <svg
      className={small ? 'icon-check icon-check--sm' : 'icon-check'}
      width={small ? 10 : 12}
      height={small ? 10 : 12}
      viewBox='0 0 24 24'
      aria-hidden
    >
      <path fill='currentColor' d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' />
    </svg>
  );
}

function NtCustomDxServiceOfferingWidget(props: NtCustomDxServiceOfferingWidgetProps) {
  const { datasource, header = 'Choose your JURISDICTION', getPConnect } = props;
  const getPConnectRef = useRef(getPConnect);
  getPConnectRef.current = getPConnect;

  const [searchValue, setSearchValue] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [topStage, setTopStage] = useState<1 | 2 | 3 | 4>(1);
  const [leftStep, setLeftStep] = useState<1 | 2 | 3 | 4>(1);
  const [navError, setNavError] = useState('');
  const [portalTab, setPortalTab] = useState<'started' | 'callback'>('started');
  const [datapageCountries, setDatapageCountries] = useState<CountryItem[] | null | 'loading'>(null);
  const [datapageError, setDatapageError] = useState('');

  const hasJurisdiction = Boolean(selectedCountry.trim());

  useEffect(() => {
    if (process.env.NODE_ENV === 'test') {
      return;
    }

    const pcore = getPCore();
    if (!pcore?.getDataPageUtils?.()?.getDataAsync) {
      return;
    }

    let cancelled = false;
    setDatapageCountries('loading');
    setDatapageError('');

    fetchAllCountryListRows(() => getPConnectRef.current().getContextName())
      .then(rows => {
        if (cancelled) {
          return;
        }
        setDatapageError('');
        setDatapageCountries(mapRowsToCountryItems(rows));
      })
      .catch(err => {
        console.error(err);
        if (!cancelled) {
          setDatapageError('Could not load countries from the server.');
          setDatapageCountries(null);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const countries = useMemo<CountryItem[]>(() => {
    if (datapageCountries !== null && datapageCountries !== 'loading') {
      return datapageCountries;
    }
    if (datapageCountries === 'loading') {
      return [];
    }

    const sourceItems = datasource?.source || [];
    return mapRowsToCountryItems(sourceItems);
  }, [datasource, datapageCountries]);

  const majorCountries = useMemo(() => countries.filter(item => item.isMajor), [countries]);

  const filteredCountries = useMemo(() => {
    const searchText = searchValue.trim().toLowerCase();
    if (!searchText) {
      return countries;
    }
    return countries.filter(item => item.name.toLowerCase().includes(searchText));
  }, [countries, searchValue]);

  const handleTopStageClick = useCallback(
    (stageId: 1 | 2 | 3 | 4) => {
      setNavError('');
      if (stageId > 1 && !hasJurisdiction) {
        setNavError('Please select a jurisdiction before continuing to the next stage.');
        return;
      }
      setTopStage(stageId);
    },
    [hasJurisdiction]
  );

  const handleLeftStepClick = useCallback(
    (stepId: 1 | 2 | 3 | 4) => {
      setNavError('');
      if (stepId > 1 && !hasJurisdiction) {
        setNavError('Please select a jurisdiction to access this step.');
        return;
      }
      setTopStage(1);
      setLeftStep(stepId);
    },
    [hasJurisdiction]
  );

  const handleSelectCountry = useCallback((name: string) => {
    setSelectedCountry(name);
    setNavError('');
    setTopStage(1);
    setLeftStep(prev => (prev === 1 ? 2 : prev));
  }, []);

  const handleFooterNext = useCallback(() => {
    setNavError('');
    if (topStage === 1) {
      if (leftStep === 1) {
        if (!hasJurisdiction) {
          setNavError('Please select a jurisdiction to continue.');
          return;
        }
        setLeftStep(2);
        return;
      }
      if (leftStep === 2) {
        setLeftStep(3);
        return;
      }
      if (leftStep === 3) {
        setLeftStep(4);
        return;
      }
      if (leftStep === 4) {
        if (!hasJurisdiction) {
          setNavError('Please select a jurisdiction to continue.');
          return;
        }
        setTopStage(2);
        return;
      }
    }
    if (topStage === 2) {
      setTopStage(3);
      return;
    }
    if (topStage === 3) {
      setTopStage(4);
    }
  }, [topStage, leftStep, hasJurisdiction]);

  const handleFooterPrevious = useCallback(() => {
    setNavError('');
    if (topStage === 1) {
      if (leftStep > 1) {
        setLeftStep((leftStep - 1) as 1 | 2 | 3 | 4);
      }
      return;
    }
    if (topStage === 2) {
      setTopStage(1);
      setLeftStep(4);
      return;
    }
    if (topStage === 3) {
      setTopStage(2);
      return;
    }
    if (topStage === 4) {
      setTopStage(3);
    }
  }, [topStage, leftStep]);

  const isFirstScreen = topStage === 1 && leftStep === 1;
  const showPrevious = !isFirstScreen;

  const isNextDisabled = (topStage === 1 && leftStep === 1 && !hasJurisdiction) || topStage === 4;

  const primaryActionLabel =
    topStage === 1 && leftStep === 4 ? 'Move to Details' : 'Next';

  const renderSampleScreen = (title: string, body: string) => (
    <div className='sample-screen'>
      <h3 className='sample-screen-title'>{title}</h3>
      <p className='sample-screen-body'>{body}</p>
      {selectedCountry ? (
        <p className='sample-screen-meta'>
          Selected jurisdiction: <strong>{selectedCountry}</strong>
        </p>
      ) : null}
    </div>
  );

  const renderMainContent = () => {
    if (topStage === 1 && leftStep === 1) {
      return (
        <>
          <h3 className='content-heading'>{header}</h3>
          {navError ? <div className='nav-error' role='alert'>{navError}</div> : null}
            <div className='search-row'>
            <input
              type='text'
              value={searchValue}
              onChange={event => setSearchValue(event.target.value)}
              placeholder='Search'
              aria-label='Search country'
            />
            <div className='search-addon'>
              <button type='button' className='search-trigger' aria-label='Search'>
                <IconSearch />
              </button>
            </div>
          </div>

          {datapageCountries === 'loading' ? (
            <p className='countries-loading' role='status'>
              Loading countries…
            </p>
          ) : null}
          {datapageError && countries.length === 0 ? (
            <div className='nav-error countries-fetch-error' role='alert'>
              {datapageError} Showing the configured list if available.
            </div>
          ) : null}

          <h4 className='section-label'>Major Countries</h4>
          <div className='country-grid'>
            {majorCountries.map(item => (
              <button
                key={`major-${item.countryCode}`}
                type='button'
                className={`country-btn ${selectedCountry === item.name ? 'selected' : ''}`}
                onClick={() => handleSelectCountry(item.name)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <h4 className='section-label'>All Countries</h4>
          <div className='country-grid-scroll' role='region' aria-label='All countries scrollable list'>
            <div className='country-grid country-grid--scroll-inner'>
              {filteredCountries.map(item => (
                <button
                  key={`all-${item.countryCode}`}
                  type='button'
                  className={`country-btn ${selectedCountry === item.name ? 'selected' : ''}`}
                  onClick={() => handleSelectCountry(item.name)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </>
      );
    }

    if (topStage === 1 && leftStep === 2) {
      return renderSampleScreen(
        'Services',
        'Sample screen: choose the services for your incorporation. Replace this content with your real services UI.'
      );
    }
    if (topStage === 1 && leftStep === 3) {
      return renderSampleScreen(
        'Products',
        'Sample screen: pick product packages. Replace this content with your product catalog.'
      );
    }
    if (topStage === 1 && leftStep === 4) {
      return renderSampleScreen(
        'Add on Services',
        'Sample screen: optional add-ons. Replace this content with your add-on offerings.'
      );
    }
    if (topStage === 2) {
      return renderSampleScreen(
        'Details',
        'Sample screen: capture company and contact details. Replace with your Details stage UI.'
      );
    }
    if (topStage === 3) {
      return renderSampleScreen(
        'Packages',
        'Sample screen: review and select a package. Replace with your Packages stage UI.'
      );
    }
    return renderSampleScreen(
      'Payment',
      'Sample screen: payment and confirmation. Replace with your Payment stage UI.'
    );
  };

  return (
    <StyledNtCustomDxServiceOfferingWidgetWrapper>
      <div className='case-card'>
        <div className='portal-tabs' role='tablist' aria-label='Portal actions'>
          <div className={`portal-tab-group ${portalTab === 'started' ? 'is-active' : ''}`}>
            <button
              type='button'
              role='tab'
              aria-selected={portalTab === 'started'}
              className={`portal-tab portal-tab--started ${portalTab === 'started' ? 'is-selected' : ''}`}
              onClick={() => setPortalTab('started')}
            >
              GET STARTED
            </button>
            {portalTab === 'started' ? <span className='portal-tab-caret' aria-hidden /> : null}
          </div>
          <button
            type='button'
            role='tab'
            aria-selected={portalTab === 'callback'}
            className={`portal-tab portal-tab--callback ${portalTab === 'callback' ? 'is-selected' : ''}`}
            onClick={() => setPortalTab('callback')}
          >
            REQUEST CALLBACK
          </button>
        </div>

        <div className='stage-row'>
          <div className='stage-box'>
            <nav className='top-stepper' aria-label='Checkout stages'>
              {TOP_STAGES.map((stage, index) => (
                <div key={stage.id} className='top-stepper-segment'>
                  <button
                    type='button'
                    className={`top-stepper-node ${topStage === stage.id ? 'active' : ''} ${topStage > stage.id ? 'complete' : ''}`}
                    onClick={() => handleTopStageClick(stage.id)}
                    aria-current={topStage === stage.id ? 'step' : undefined}
                    aria-label={`Step ${stage.id}: ${stage.label}`}
                  >
                    <span className='top-stepper-circle'>{stage.id}</span>
                    <span className='top-stepper-label'>{stage.label}</span>
                  </button>
                  {index < TOP_STAGES.length - 1 ? <div className='top-stepper-line' aria-hidden /> : null}
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div className='layout'>
          <aside className='left-nav' aria-label='Service steps'>
            <ul className='left-nav-list'>
              {LEFT_STEPS.map((step, index) => {
                const isActive = topStage === 1 && leftStep === step.id;
                const isComplete = topStage === 1 && leftStep > step.id;
                const isBlocked = step.id > 1 && !hasJurisdiction;
                const connectorBlue = isComplete;
                return (
                  <li key={step.id} className='left-nav-row'>
                    <button
                      type='button'
                      className={`left-nav-item ${isActive ? 'active' : ''} ${isComplete ? 'complete' : ''} ${isBlocked ? 'blocked' : ''}`}
                      onClick={() => handleLeftStepClick(step.id)}
                      aria-current={isActive ? 'step' : undefined}
                    >
                      <span className='left-nav-rail'>
                        {isActive && (
                          <span className='left-nav-marker left-nav-marker--square'>
                            <IconCheck />
                          </span>
                        )}
                        {!isActive && isComplete && (
                          <span className='left-nav-marker left-nav-marker--circle left-nav-marker--done'>
                            <IconCheck small />
                          </span>
                        )}
                        {!isActive && !isComplete && (
                          <span className='left-nav-marker left-nav-marker--circle left-nav-marker--pending' />
                        )}
                        {index < LEFT_STEPS.length - 1 ? (
                          <span className={`left-nav-connector ${connectorBlue ? 'is-blue' : ''}`} />
                        ) : null}
                      </span>
                      <span className='left-nav-text'>
                        <span className='left-nav-title'>{step.title}</span>
                        <span className='left-nav-subtitle'>{step.subtitle}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          <div className='main-column'>
            <section className='content'>
              {(topStage !== 1 || leftStep !== 1) && navError ? (
                <div className='nav-error' role='alert'>{navError}</div>
              ) : null}
              {renderMainContent()}
            </section>

            <footer className='content-footer'>
              {showPrevious ? (
                <button type='button' className='btn-prev' onClick={handleFooterPrevious}>
                  Previous
                </button>
              ) : null}
              <button type='button' className='btn-next' onClick={handleFooterNext} disabled={isNextDisabled}>
                {primaryActionLabel}
              </button>
            </footer>
          </div>
        </div>
      </div>
    </StyledNtCustomDxServiceOfferingWidgetWrapper>
  );
}

export default withConfiguration(NtCustomDxServiceOfferingWidget);
