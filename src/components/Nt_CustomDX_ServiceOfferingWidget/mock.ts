
// @ts-nocheck
const configProps = {
  label: 'Service offering widget',
  header: 'Choose your JURISDICTION',
  countryDataPageName: 'D_ActiveCountryList',
  serviceDataPageName: 'D_GetServiceByCountry',
  datasource: {
    source: [
      {
        name: 'Australia',
        CountryCode: 'AU',
        isMajor: true
      },
      {
        name: 'Canada',
        CountryCode: 'CA',
        isMajor: true
      },
      {
        name: 'Europe',
        CountryCode: 'EU',
        isMajor: true
      },
      {
        name: 'Malaysia',
        CountryCode: 'MY',
        isMajor: true
      },
      {
        name: 'Netherlands',
        CountryCode: 'NL',
        isMajor: true
      },
      {
        name: 'Singapore',
        CountryCode: 'SG',
        isMajor: true
      },
      {
        name: 'Armenia',
        CountryCode: 'AM',
        isMajor: false
      },
      {
        name: 'Austria',
        CountryCode: 'AT',
        isMajor: false
      },
      {
        name: 'Azerbaijan',
        CountryCode: 'AZ',
        isMajor: false
      },
      {
        name: 'Bahamas',
        CountryCode: 'BS',
        isMajor: false
      },
      {
        name: 'Bahrain',
        CountryCode: 'BH',
        isMajor: false
      },
      {
        name: 'Bangladesh',
        CountryCode: 'BD',
        isMajor: false
      }
    ],
    fields: {}
  },
  serviceDatasource: {
    source: [
      {
        name: 'Company Management',
        serviceId: 'CM',
        iconSource: 'fa-solid fa-building-user',
        CountryCode: 'SG',
        isActive: true,
        pyGUID: 'mock-service-1'
      },
      {
        name: 'Financial Markets',
        serviceId: 'FM',
        iconSource: 'fa-solid fa-sack-dollar',
        CountryCode: 'SG',
        isActive: true,
        pyGUID: 'mock-service-2'
      },
      {
        name: 'Fund Administration',
        serviceId: 'FA',
        iconSource: 'fa-solid fa-circle-dollar-to-slot',
        CountryCode: 'MY',
        isActive: true,
        pyGUID: 'mock-service-3'
      },
      {
        name: 'Trust Management',
        serviceId: 'TM',
        iconSource: 'fa-solid fa-handshake-angle',
        CountryCode: 'CA',
        isActive: true,
        pyGUID: 'mock-service-4'
      },
      {
        name: 'European Corporate Services',
        serviceId: 'EU-CS',
        iconSource: 'fa-solid fa-building-user',
        CountryCode: 'EU',
        isActive: true,
        pyGUID: 'mock-service-5'
      }
    ],
    fields: {}
  }
};
export default configProps;
