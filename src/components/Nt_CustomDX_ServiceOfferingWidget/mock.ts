
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
        countryCode: 'AU',
        isMajor: true
      },
      {
        name: 'Canada',
        countryCode: 'CA',
        isMajor: true
      },
      {
        name: 'Europe',
        countryCode: 'EU',
        isMajor: true
      },
      {
        name: 'Malaysia',
        countryCode: 'MY',
        isMajor: true
      },
      {
        name: 'Netherlands',
        countryCode: 'NL',
        isMajor: true
      },
      {
        name: 'Singapore',
        countryCode: 'SG',
        isMajor: true
      },
      {
        name: 'Armenia',
        countryCode: 'AM',
        isMajor: false
      },
      {
        name: 'Austria',
        countryCode: 'AT',
        isMajor: false
      },
      {
        name: 'Azerbaijan',
        countryCode: 'AZ',
        isMajor: false
      },
      {
        name: 'Bahamas',
        countryCode: 'BS',
        isMajor: false
      },
      {
        name: 'Bahrain',
        countryCode: 'BH',
        isMajor: false
      },
      {
        name: 'Bangladesh',
        countryCode: 'BD',
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
        countryCode: 'SG',
        isActive: true,
        pyGUID: 'mock-service-1'
      },
      {
        name: 'Financial Markets',
        serviceId: 'FM',
        iconSource: 'fa-solid fa-sack-dollar',
        countryCode: 'SG',
        isActive: true,
        pyGUID: 'mock-service-2'
      },
      {
        name: 'Fund Administration',
        serviceId: 'FA',
        iconSource: 'fa-solid fa-circle-dollar-to-slot',
        countryCode: 'MY',
        isActive: true,
        pyGUID: 'mock-service-3'
      },
      {
        name: 'Trust Management',
        serviceId: 'TM',
        iconSource: 'fa-solid fa-handshake-angle',
        countryCode: 'CA',
        isActive: true,
        pyGUID: 'mock-service-4'
      }
    ],
    fields: {}
  }
};
export default configProps;
