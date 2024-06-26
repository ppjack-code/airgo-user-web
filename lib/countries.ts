export interface IFlagEntry {
  country: string;
  alpha2: string;
  alpha3: string | null;
  numeric: string | null;
  phone: string | null;
  lang: string | null;
  langs: string[];
}

const countries: IFlagEntry[] = [
  {
    country: 'Andorra',
    alpha2: 'AD',
    alpha3: 'AND',
    numeric: '020',
    phone: '+376',
    lang: 'ca',
    langs: ['ca'],
  },
  {
    country: 'United Arab Emirates',
    alpha2: 'AE',
    alpha3: 'ARE',
    numeric: '784',
    phone: '+971',
    lang: 'ar',
    langs: ['ar'],
  },
  {
    country: 'African Union',
    alpha2: 'AFRUN',
    alpha3: null,
    numeric: null,
    phone: null,
    lang: null,
    langs: [],
  },
  {
    country: 'Antigua and Barbuda',
    alpha2: 'AG',
    alpha3: 'ATG',
    numeric: '028',
    phone: '+1-268',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Anguilla',
    alpha2: 'AI',
    alpha3: 'AIA',
    numeric: '660',
    phone: '+1-264',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Albania',
    alpha2: 'AL',
    alpha3: 'ALB',
    numeric: '008',
    phone: '+355',
    lang: 'sq',
    langs: ['sq'],
  },
  {
    country: 'Armenia',
    alpha2: 'AM',
    alpha3: 'ARM',
    numeric: '051',
    phone: '+374',
    lang: 'hy',
    langs: ['hy'],
  },
  {
    country: 'Amsterdam',
    alpha2: 'AMS',
    alpha3: null,
    numeric: null,
    phone: null,
    lang: null,
    langs: [],
  },
  {
    country: 'Angola',
    alpha2: 'AO',
    alpha3: 'AGO',
    numeric: '024',
    phone: '+244',
    lang: 'pt',
    langs: ['pt'],
  },
  {
    country: 'Antarctica',
    alpha2: 'AQ',
    alpha3: 'ATA',
    numeric: '010',
    phone: '+672',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Argentina',
    alpha2: 'AR',
    alpha3: 'ARG',
    numeric: '032',
    phone: '+54',
    lang: 'es',
    langs: ['es'],
  },
  {
    country: 'American Samoa',
    alpha2: 'AS',
    alpha3: 'ASM',
    numeric: '016',
    phone: '+1-684',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Austria',
    alpha2: 'AT',
    alpha3: 'AUT',
    numeric: '040',
    phone: '+43',
    lang: 'de',
    langs: ['de'],
  },
  {
    country: 'Australia',
    alpha2: 'AU',
    alpha3: 'AUS',
    numeric: '016',
    phone: '+61',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Aruba',
    alpha2: 'AW',
    alpha3: 'ABW',
    numeric: '533',
    phone: '+297',
    lang: 'nl',
    langs: ['nl'],
  },
  {
    country: 'Åland Islands',
    alpha2: 'AX',
    alpha3: 'ALA',
    numeric: '248',
    phone: '+358',
    lang: 'sv',
    langs: ['sv'],
  },
  {
    country: 'Azerbaijan',
    alpha2: 'AZ',
    alpha3: 'AZE',
    numeric: '031',
    phone: '+994',
    lang: 'az',
    langs: ['az'],
  },
  {
    country: 'Bosnia and Herzegovina',
    alpha2: 'BA',
    alpha3: 'BIH',
    numeric: '070',
    phone: '+387',
    lang: 'bs',
    langs: ['bs'],
  },
  {
    country: 'Barbados',
    alpha2: 'BB',
    alpha3: 'BRB',
    numeric: '052',
    phone: '+1-246',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Bangladesh',
    alpha2: 'BD',
    alpha3: 'BGD',
    numeric: '050',
    phone: '+880',
    lang: 'bn',
    langs: ['bn', 'en'],
  },
  {
    country: 'Belgium',
    alpha2: 'BE',
    alpha3: 'BEL',
    numeric: '056',
    phone: '+32',
    lang: 'nl',
    langs: ['nl', 'fr', 'de'],
  },
  {
    country: 'Burkina Faso',
    alpha2: 'BF',
    alpha3: 'BFA',
    numeric: '854',
    phone: '+226',
    lang: 'fr',
    langs: ['fr'],
  },
  {
    country: 'Bulgaria',
    alpha2: 'BG',
    alpha3: 'BGR',
    numeric: '100',
    phone: '+359',
    lang: 'bg',
    langs: ['bg'],
  },
  {
    country: 'Bahrain',
    alpha2: 'BH',
    alpha3: 'BHR',
    numeric: '048',
    phone: '+973',
    lang: 'ar',
    langs: ['ar'],
  },
  {
    country: 'Burundi',
    alpha2: 'BI',
    alpha3: 'BDI',
    numeric: '108',
    phone: '+257',
    lang: 'fr',
    langs: ['fr', 'rn', 'en'],
  },
  {
    country: 'Benin',
    alpha2: 'BJ',
    alpha3: 'BEN',
    numeric: '204',
    phone: '+229',
    lang: 'fr',
    langs: ['fr'],
  },
  {
    country: 'Saint Barthélemy',
    alpha2: 'BL',
    alpha3: 'BLM',
    numeric: '652',
    phone: '+590',
    lang: 'fr',
    langs: ['fr'],
  },
  {
    country: 'Bermuda',
    alpha2: 'BM',
    alpha3: 'BMU',
    numeric: '060',
    phone: '+1-441',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Brunei',
    alpha2: 'BN',
    alpha3: 'BRN',
    numeric: '096',
    phone: '+673',
    lang: 'ms',
    langs: ['ms', 'en'],
  },
  {
    country: 'Bolivia',
    alpha2: 'BO',
    alpha3: 'BOL',
    numeric: '068',
    phone: '+591',
    lang: 'es',
    langs: ['es', 'ay', 'qu'],
  },
  {
    country: 'Bonaire',
    alpha2: 'BQ-BO',
    alpha3: 'BES',
    numeric: '535',
    phone: '+599',
    lang: 'nl',
    langs: ['nl'],
  },
  {
    country: 'Saba',
    alpha2: 'BQ-SA',
    alpha3: null,
    numeric: null,
    phone: null,
    lang: null,
    langs: [],
  },
  {
    country: 'Sint Eustatius',
    alpha2: 'BQ-SE',
    alpha3: null,
    numeric: null,
    phone: null,
    lang: null,
    langs: [],
  },
  {
    country: 'Brazil',
    alpha2: 'BR',
    alpha3: 'BRA',
    numeric: '076',
    phone: '+55',
    lang: 'pt',
    langs: ['pt'],
  },
  {
    country: 'Bahamas',
    alpha2: 'BS',
    alpha3: 'BHS',
    numeric: '044',
    phone: '+1-242',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Bhutan',
    alpha2: 'BT',
    alpha3: 'BTN',
    numeric: '064',
    phone: '+975',
    lang: 'dz',
    langs: ['dz'],
  },
  {
    country: 'Botswana',
    alpha2: 'BW',
    alpha3: 'BWA',
    numeric: '072',
    phone: '+267',
    lang: 'en',
    langs: ['en', 'tn'],
  },
  {
    country: 'Belarus',
    alpha2: 'BY',
    alpha3: 'BLR',
    numeric: '112',
    phone: '+375',
    lang: 'be',
    langs: ['be', 'ru'],
  },
  {
    country: 'Belize',
    alpha2: 'BZ',
    alpha3: 'BLZ',
    numeric: '084',
    phone: '+501',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Canada',
    alpha2: 'CA',
    alpha3: 'CAN',
    numeric: '124',
    phone: '+1',
    lang: 'en',
    langs: ['en', 'fr'],
  },
  {
    country: 'Cocos Islands',
    alpha2: 'CC',
    alpha3: 'CCK',
    numeric: '166',
    phone: '+61',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Democratis Republic of Congo',
    alpha2: 'CD',
    alpha3: 'COD',
    numeric: '180',
    phone: '+243',
    lang: 'fr',
    langs: ['fr', 'ln', 'kg', 'sw', 'lu'],
  },
  {
    country: 'Central African Republic',
    alpha2: 'CF',
    alpha3: 'CAF',
    numeric: '140',
    phone: '+236',
    lang: 'fr',
    langs: ['fr', 'sg'],
  },
  {
    country: 'Congo',
    alpha2: 'CG',
    alpha3: 'COG',
    numeric: '178',
    phone: '+242',
    lang: 'fr',
    langs: ['fr'],
  },
  {
    country: 'Switzerland',
    alpha2: 'CH',
    alpha3: 'CHE',
    numeric: '756',
    phone: '+41',
    lang: 'de',
    langs: ['de', 'fr', 'it', 'rm'],
  },
  {
    country: "Côte d'Ivoire",
    alpha2: 'CI',
    alpha3: 'CIV',
    numeric: '384',
    phone: '+225',
    lang: 'fr',
    langs: ['fr'],
  },
  {
    country: 'Cook Island',
    alpha2: 'CK',
    alpha3: 'COK',
    numeric: '184',
    phone: '+682',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Chile',
    alpha2: 'CL',
    alpha3: 'CHL',
    numeric: '152',
    phone: '+56',
    lang: 'es',
    langs: ['es'],
  },
  {
    country: 'Cameroon',
    alpha2: 'CM',
    alpha3: 'CMR',
    numeric: '120',
    phone: '+237',
    lang: 'en',
    langs: ['en', 'fr'],
  },
  {
    country: 'China',
    alpha2: 'CN',
    alpha3: 'CHN',
    numeric: '156',
    phone: '+86',
    lang: 'zh',
    langs: ['zh'],
  },
  {
    country: 'Colombia',
    alpha2: 'CO',
    alpha3: 'COL',
    numeric: '170',
    phone: '+57',
    lang: 'es',
    langs: ['es'],
  },
  {
    country: 'Costa Rica',
    alpha2: 'CR',
    alpha3: 'CRI',
    numeric: '188',
    phone: '+506',
    lang: 'es',
    langs: ['es'],
  },
  {
    country: 'Cuba',
    alpha2: 'CU',
    alpha3: 'CUB',
    numeric: '192',
    phone: '+53',
    lang: 'es',
    langs: ['es'],
  },
  {
    country: 'Cape Verde',
    alpha2: 'CV',
    alpha3: 'CPV',
    numeric: '132',
    phone: '+238',
    lang: 'pt',
    langs: ['pt'],
  },
  {
    country: 'Curaçao',
    alpha2: 'CW',
    alpha3: 'CUW',
    numeric: '531',
    phone: '+599',
    lang: 'nl',
    langs: ['nl'],
  },
  {
    country: 'Christmas Island',
    alpha2: 'CX',
    alpha3: 'CXR',
    numeric: '162',
    phone: '+61',
    lang: 'en',
    langs: ['en', 'ms', 'zh'],
  },
  {
    country: 'Cyprus',
    alpha2: 'CY',
    alpha3: 'CYP',
    numeric: '196',
    phone: '+357',
    lang: 'el',
    langs: ['el', 'tr'],
  },
  {
    country: 'Czech Republic',
    alpha2: 'CZ',
    alpha3: 'CZE',
    numeric: '203',
    phone: '+420',
    lang: 'cs',
    langs: ['cs'],
  },
  {
    country: 'Germany',
    alpha2: 'DE',
    alpha3: 'DEU',
    numeric: '276',
    phone: '+49',
    lang: 'de',
    langs: ['de'],
  },
  {
    country: 'Djibouti',
    alpha2: 'DJ',
    alpha3: 'DJI',
    numeric: '262',
    phone: '+253',
    lang: 'fr',
    langs: ['fr', 'ar'],
  },
  {
    country: 'Denmark',
    alpha2: 'DK',
    alpha3: 'DNK',
    numeric: '208',
    phone: '+45',
    lang: 'da',
    langs: ['da'],
  },
  {
    country: 'Dominica',
    alpha2: 'DM',
    alpha3: 'DMA',
    numeric: '212',
    phone: '+1-767',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Dominican Republic',
    alpha2: 'DO',
    alpha3: 'DOM',
    numeric: '214',
    phone: '+1-809, +1-829, +1-849',
    lang: 'es',
    langs: ['es'],
  },
  {
    country: 'Ecuador',
    alpha2: 'EC',
    alpha3: 'ECU',
    numeric: '218',
    phone: '+593',
    lang: 'es',
    langs: ['es'],
  },
  {
    country: 'Estonia',
    alpha2: 'EE',
    alpha3: 'EST',
    numeric: '233',
    phone: '+372',
    lang: 'et',
    langs: ['et'],
  },
  {
    country: 'Egypt',
    alpha2: 'EG',
    alpha3: 'EGY',
    numeric: '818',
    phone: '+20',
    lang: 'ar',
    langs: ['ar'],
  },
  {
    country: 'Western Sahara',
    alpha2: 'EH',
    alpha3: 'ESH',
    numeric: '732',
    phone: '+212',
    lang: 'ar',
    langs: ['ar'],
  },
  {
    country: 'Eritrea',
    alpha2: 'ER',
    alpha3: 'ERI',
    numeric: '232',
    phone: '+291',
    lang: 'ti',
    langs: ['ti', 'ar', 'en'],
  },
  {
    country: 'Spain',
    alpha2: 'ES',
    alpha3: 'ESP',
    numeric: '724',
    phone: '+34',
    lang: 'es',
    langs: ['es'],
  },
  {
    country: 'Ethiopia',
    alpha2: 'ET',
    alpha3: 'ETH',
    numeric: '231',
    phone: '+251',
    lang: 'am',
    langs: ['am', 'en'],
  },
  {
    country: 'European Union',
    alpha2: 'EU',
    alpha3: null,
    numeric: null,
    phone: null,
    lang: null,
    langs: [],
  },
  {
    country: 'Finland',
    alpha2: 'FI',
    alpha3: 'FIN',
    numeric: '246',
    phone: '+358',
    lang: 'fi',
    langs: ['fi'],
  },
  {
    country: 'Fiji',
    alpha2: 'FJ',
    alpha3: 'FJI',
    numeric: '242',
    phone: '+679',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Falkland Islands',
    alpha2: 'FK',
    alpha3: 'FLK',
    numeric: '238',
    phone: '+500',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Micronesia (Federated States of)',
    alpha2: 'FM',
    alpha3: 'FSM',
    numeric: '583',
    phone: '+691',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Faroe Island',
    alpha2: 'FO',
    alpha3: 'FRO',
    numeric: '234',
    phone: '+298',
    lang: 'fo',
    langs: ['fo'],
  },
  {
    country: 'France',
    alpha2: 'FR',
    alpha3: 'FRA',
    numeric: '250',
    phone: '+33',
    lang: 'fr',
    langs: ['fr'],
  },
  {
    country: 'Gabon',
    alpha2: 'GA',
    alpha3: 'GAB',
    numeric: '266',
    phone: '+241',
    lang: 'fr',
    langs: ['fr'],
  },
  {
    country: 'England',
    alpha2: 'GB-ENG',
    alpha3: null,
    numeric: null,
    phone: null,
    lang: null,
    langs: [],
  },
  {
    country: 'Scotland',
    alpha2: 'GB-SCT',
    alpha3: null,
    numeric: null,
    phone: null,
    lang: null,
    langs: [],
  },
  {
    country: 'United Kingdom',
    alpha2: 'GB-UKM',
    alpha3: 'GBR',
    numeric: '836',
    phone: '+44',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Wales',
    alpha2: 'GB-WLS',
    alpha3: null,
    numeric: null,
    phone: null,
    lang: null,
    langs: [],
  },
  {
    country: 'Northern Ireland',
    alpha2: 'GB-NIR',
    alpha3: null,
    numeric: null,
    phone: null,
    lang: null,
    langs: [],
  },
  {
    country: 'Grenada',
    alpha2: 'GD',
    alpha3: 'GRD',
    numeric: '308',
    phone: '+1-473',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Georgia',
    alpha2: 'GE',
    alpha3: 'GEO',
    numeric: '268',
    phone: '+995',
    lang: 'ka',
    langs: ['ka'],
  },
  {
    country: 'French Guiana',
    alpha2: 'GF',
    alpha3: 'GUF',
    numeric: '254',
    phone: '+594',
    lang: 'fr',
    langs: ['fr'],
  },
  {
    country: 'Guernsey',
    alpha2: 'GG',
    alpha3: 'GGY',
    numeric: '831',
    phone: '+44-1481',
    lang: 'en',
    langs: ['en', 'fr'],
  },
  {
    country: 'Ghana',
    alpha2: 'GH',
    alpha3: 'GHA',
    numeric: '288',
    phone: '+233',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Gibraltar',
    alpha2: 'GI',
    alpha3: 'GIB',
    numeric: '292',
    phone: '+350',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Greenland',
    alpha2: 'GL',
    alpha3: 'GRL',
    numeric: '304',
    phone: '+299',
    lang: 'kl',
    langs: ['kl'],
  },
  {
    country: 'Gambia',
    alpha2: 'GM',
    alpha3: 'GMB',
    numeric: '270',
    phone: null,
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Guinea',
    alpha2: 'GN',
    alpha3: 'GIN',
    numeric: '324',
    phone: '+224',
    lang: 'fr',
    langs: ['fr'],
  },
  {
    country: 'Guadeloupe',
    alpha2: 'GP',
    alpha3: 'GLP',
    numeric: '312',
    phone: '+590',
    lang: 'fr',
    langs: ['fr'],
  },
  {
    country: 'Equatorial Guinea',
    alpha2: 'GQ',
    alpha3: 'GNQ',
    numeric: '226',
    phone: '+240',
    lang: 'es',
    langs: ['es', 'fr'],
  },
  {
    country: 'Greece',
    alpha2: 'GR',
    alpha3: 'GRC',
    numeric: '300',
    phone: '+30',
    lang: 'el',
    langs: ['el'],
  },
  {
    country: 'South Gerogia and the South Sandwich Islands',
    alpha2: 'GS',
    alpha3: 'SGS',
    numeric: '239',
    phone: '+500',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Guatemala',
    alpha2: 'GT',
    alpha3: 'GTM',
    numeric: '320',
    phone: '+502',
    lang: 'es',
    langs: ['es'],
  },
  {
    country: 'Guam',
    alpha2: 'GU',
    alpha3: 'GUM',
    numeric: '316',
    phone: '+1-671',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Guinea-Bissau',
    alpha2: 'GW',
    alpha3: 'GNB',
    numeric: '624',
    phone: '+245',
    lang: 'pt',
    langs: ['pt'],
  },
  {
    country: 'Guyana',
    alpha2: 'GY',
    alpha3: 'GUY',
    numeric: '328',
    phone: '+592',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Hong Kong',
    alpha2: 'HK',
    alpha3: 'HKG',
    numeric: '344',
    phone: '+852',
    lang: 'zh',
    langs: ['zh', 'en'],
  },
  {
    country: 'Heard Island and McDonald Islands',
    alpha2: 'HM',
    alpha3: 'HMD',
    numeric: '334',
    phone: '+672',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Honduras',
    alpha2: 'HN',
    alpha3: 'HND',
    numeric: '340',
    phone: '+504',
    lang: 'es',
    langs: ['es'],
  },
  {
    country: 'Croatia',
    alpha2: 'HR',
    alpha3: 'HRV',
    numeric: '191',
    phone: '+385',
    lang: 'hr',
    langs: ['hr'],
  },
  {
    country: 'Haiti',
    alpha2: 'HT',
    alpha3: 'HTI',
    numeric: '332',
    phone: '+509',
    lang: 'fr',
    langs: ['fr'],
  },
  {
    country: 'Hungary',
    alpha2: 'HU',
    alpha3: 'HUN',
    numeric: '348',
    phone: '+36',
    lang: 'hu',
    langs: ['hu'],
  },
  {
    country: 'Indonesia',
    alpha2: 'ID',
    alpha3: 'IDN',
    numeric: '360',
    phone: '+62',
    lang: 'id',
    langs: ['id'],
  },
  {
    country: 'Ireland',
    alpha2: 'IE',
    alpha3: 'IRL',
    numeric: '372',
    phone: '+353',
    lang: 'en',
    langs: ['en', 'ga'],
  },
  {
    country: 'Israel',
    alpha2: 'IL',
    alpha3: 'ISR',
    numeric: '376',
    phone: '+972',
    lang: 'he',
    langs: ['he'],
  },
  {
    country: 'Isle of Man',
    alpha2: 'IM',
    alpha3: 'IMN',
    numeric: '833',
    phone: '+44-1624',
    lang: 'en',
    langs: ['en', 'gv'],
  },
  {
    country: 'India',
    alpha2: 'IN',
    alpha3: 'IND',
    numeric: '356',
    phone: '+91',
    lang: 'hi',
    langs: ['hi', 'en'],
  },
  {
    country: 'British Indian Ocean Territory',
    alpha2: 'IO',
    alpha3: 'IOT',
    numeric: '086',
    phone: '+246',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Iraq',
    alpha2: 'IQ',
    alpha3: 'IRQ',
    numeric: '368',
    phone: '+964',
    lang: 'ar',
    langs: ['ar'],
  },
  {
    country: 'Iran',
    alpha2: 'IR',
    alpha3: 'IRN',
    numeric: '364',
    phone: '+98',
    lang: 'fa',
    langs: ['fa'],
  },
  {
    country: 'Iceland',
    alpha2: 'IS',
    alpha3: 'ISL',
    numeric: '352',
    phone: '+354',
    lang: 'is',
    langs: ['is'],
  },
  {
    country: 'Italy',
    alpha2: 'IT',
    alpha3: 'ITA',
    numeric: '380',
    phone: '+39',
    lang: 'it',
    langs: ['it'],
  },
  {
    country: 'Jersey',
    alpha2: 'JE',
    alpha3: 'JEY',
    numeric: '832',
    phone: '+44',
    lang: 'en',
    langs: ['en', 'jer'],
  },
  {
    country: 'Jamaica',
    alpha2: 'JM',
    alpha3: 'JAM',
    numeric: '388',
    phone: '+1-876',
    lang: 'en',
    langs: ['en', 'jam'],
  },
  {
    country: 'Jordan',
    alpha2: 'JO',
    alpha3: 'JOR',
    numeric: '400',
    phone: '+962',
    lang: 'ar',
    langs: ['ar'],
  },
  {
    country: 'Japan',
    alpha2: 'JP',
    alpha3: 'JPN',
    numeric: '392',
    phone: '+81',
    lang: 'ja',
    langs: ['ja'],
  },
  {
    country: 'Kenya',
    alpha2: 'KE',
    alpha3: 'KEN',
    numeric: '404',
    phone: '+254',
    lang: 'en',
    langs: ['en', 'sw'],
  },
  {
    country: 'Kyrgyzstan',
    alpha2: 'KG',
    alpha3: 'KGZ',
    numeric: '417',
    phone: '+996',
    lang: 'ky',
    langs: ['ky', 'ru'],
  },
  {
    country: 'Cambodia',
    alpha2: 'KH',
    alpha3: 'KHM',
    numeric: '116',
    phone: '+855',
    lang: 'km',
    langs: ['km'],
  },
  {
    country: 'Kiribati',
    alpha2: 'KI',
    alpha3: 'KIR',
    numeric: '296',
    phone: '+686',
    lang: 'en',
    langs: ['en', 'gil'],
  },
  {
    country: 'Comoros',
    alpha2: 'KM',
    alpha3: 'COM',
    numeric: '174',
    phone: '+269',
    lang: 'ar',
    langs: ['ar', 'fr', 'co'],
  },
  {
    country: 'Saint Kitts and Nevis',
    alpha2: 'KN-SK',
    alpha3: 'KNA',
    numeric: '659',
    phone: '+1-869',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: "Korea (the Democratic People's Republic of)",
    alpha2: 'KP',
    alpha3: 'PRK',
    numeric: '408',
    phone: '+850',
    lang: 'ko',
    langs: ['ko'],
  },
  {
    country: 'Korea (the Republic of)',
    alpha2: 'KR',
    alpha3: 'KOR',
    numeric: '410',
    phone: '+82',
    lang: 'ko',
    langs: ['ko'],
  },
  {
    country: 'Kuwait',
    alpha2: 'KW',
    alpha3: 'KWT',
    numeric: '414',
    phone: '+965',
    lang: 'ar',
    langs: ['ar'],
  },
  {
    country: 'Cayman Islands',
    alpha2: 'KY',
    alpha3: 'CYM',
    numeric: '136',
    phone: '+345',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Kazakhstan',
    alpha2: 'KZ',
    alpha3: 'KAZ',
    numeric: '398',
    phone: '+7-717',
    lang: 'kk',
    langs: ['kk', 'ru'],
  },
  {
    country: "Lao People's Democratic Republic (the)",
    alpha2: 'LA',
    alpha3: 'LAO',
    numeric: '418',
    phone: '+856',
    lang: 'lo',
    langs: ['lo'],
  },
  {
    country: 'Lebanon',
    alpha2: 'LB',
    alpha3: 'LBN',
    numeric: '422',
    phone: '+961',
    lang: 'ar',
    langs: ['ar'],
  },
  {
    country: 'Saint Lucia',
    alpha2: 'LC',
    alpha3: 'LCA',
    numeric: '662',
    phone: '+1-758',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Liechtenstein',
    alpha2: 'LI',
    alpha3: 'LIE',
    numeric: '438',
    phone: '+423',
    lang: 'de',
    langs: ['de'],
  },
  {
    country: 'Sri Lanka',
    alpha2: 'LK',
    alpha3: 'LKA',
    numeric: '144',
    phone: '+94',
    lang: 'si',
    langs: ['si', 'ta'],
  },
  {
    country: 'Liberia',
    alpha2: 'LR',
    alpha3: 'LBR',
    numeric: '430',
    phone: '+231',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Lesotho',
    alpha2: 'LS',
    alpha3: 'LSO',
    numeric: '426',
    phone: '+266',
    lang: 'en',
    langs: ['en', 'so'],
  },
  {
    country: 'Lithuania',
    alpha2: 'LT',
    alpha3: 'LTU',
    numeric: '440',
    phone: '+370',
    lang: 'lt',
    langs: ['lt'],
  },
  {
    country: 'Luxembourg',
    alpha2: 'LU',
    alpha3: 'LUX',
    numeric: '442',
    phone: '+352',
    lang: 'fr',
    langs: ['fr', 'de', 'lu'],
  },
  {
    country: 'Latvia',
    alpha2: 'LV',
    alpha3: 'LVA',
    numeric: '428',
    phone: '+371',
    lang: 'lv',
    langs: ['lv'],
  },
  {
    country: 'Libya',
    alpha2: 'LY',
    alpha3: 'LBY',
    numeric: '434',
    phone: '+218',
    lang: 'ar',
    langs: ['ar'],
  },
  {
    country: 'Morocco',
    alpha2: 'MA',
    alpha3: 'MAR',
    numeric: '504',
    phone: '+212',
    lang: 'ar',
    langs: ['ar'],
  },
  {
    country: 'Monaco',
    alpha2: 'MC',
    alpha3: 'MCO',
    numeric: '492',
    phone: '+377',
    lang: 'fr',
    langs: ['fr'],
  },
  {
    country: 'Moldova (the Republic of)',
    alpha2: 'MD',
    alpha3: 'MDA',
    numeric: '498',
    phone: '+373',
    lang: 'ro',
    langs: ['ro'],
  },
  {
    country: 'Montenegro',
    alpha2: 'ME',
    alpha3: 'MNE',
    numeric: '499',
    phone: '+382',
    lang: 'sr',
    langs: ['sr'],
  },
  {
    country: 'Saint Martin',
    alpha2: 'MF',
    alpha3: 'MAF',
    numeric: '663',
    phone: '+590',
    lang: 'fr',
    langs: ['fr', 'nl'],
  },
  {
    country: 'Madagascar',
    alpha2: 'MG',
    alpha3: 'MDG',
    numeric: '450',
    phone: '+261',
    lang: 'mg',
    langs: ['mg', 'fr'],
  },
  {
    country: 'Marshall Islands (the)',
    alpha2: 'MH',
    alpha3: 'MHL',
    numeric: '584',
    phone: '+692',
    lang: 'mh',
    langs: ['mh'],
  },
  {
    country: 'North Macedonia',
    alpha2: 'MK',
    alpha3: 'MKD',
    numeric: '807',
    phone: '+389',
    lang: 'mk',
    langs: ['mk'],
  },
  {
    country: 'Mali',
    alpha2: 'ML',
    alpha3: 'MLI',
    numeric: '466',
    phone: '+223',
    lang: 'bm',
    langs: ['bm'],
  },
  {
    country: 'Myanmar',
    alpha2: 'MM',
    alpha3: 'MMR',
    numeric: '104',
    phone: '+95',
    lang: 'my',
    langs: ['my'],
  },
  {
    country: 'Mongolia',
    alpha2: 'MN',
    alpha3: 'MNG',
    numeric: '496',
    phone: '+976',
    lang: 'mn',
    langs: ['mn'],
  },
  {
    country: 'Macao',
    alpha2: 'MO',
    alpha3: 'MAC',
    numeric: '446',
    phone: '+853',
    lang: 'pt',
    langs: ['pt', 'zh'],
  },
  {
    country: 'Northern Mariana Islands (the)',
    alpha2: 'MP',
    alpha3: 'MNP',
    numeric: '580',
    phone: '+1',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Martinique',
    alpha2: 'MQ',
    alpha3: 'MTQ',
    numeric: '474',
    phone: '+596',
    lang: 'fr',
    langs: ['fr', 'crp'],
  },
  {
    country: 'Mauritania',
    alpha2: 'MR',
    alpha3: 'MRT',
    numeric: '478',
    phone: '+222',
    lang: 'ar',
    langs: ['ar', 'fr', 'son'],
  },
  {
    country: 'Montserrat',
    alpha2: 'MS',
    alpha3: 'MSR',
    numeric: '500',
    phone: '+1-664',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Malta',
    alpha2: 'MT',
    alpha3: 'MLT',
    numeric: '470',
    phone: '+356',
    lang: 'mt',
    langs: ['mt', 'en'],
  },
  {
    country: 'Mauritius',
    alpha2: 'MU',
    alpha3: 'MUS',
    numeric: '480',
    phone: '+230',
    lang: 'en',
    langs: ['en', 'fr', 'bhoj', 'crp', 'malg'],
  },
  {
    country: 'Maldives',
    alpha2: 'MV',
    alpha3: 'MDV',
    numeric: '462',
    phone: '+960',
    lang: 'dv',
    langs: ['dv'],
  },
  {
    country: 'Malawi',
    alpha2: 'MW',
    alpha3: 'MWI',
    numeric: '454',
    phone: '+265',
    lang: 'ny',
    langs: ['ny', 'en', 'loz', 'swa', 'tum'],
  },
  {
    country: 'Mexico',
    alpha2: 'MX',
    alpha3: 'MEX',
    numeric: '484',
    phone: '+52',
    lang: 'es',
    langs: ['es'],
  },
  {
    country: 'Malaysia',
    alpha2: 'MY',
    alpha3: 'MYS',
    numeric: '458',
    phone: '+60',
    lang: 'ms',
    langs: ['ms', 'en', 'cn'],
  },
  {
    country: 'Mozambique',
    alpha2: 'MZ',
    alpha3: 'MOZ',
    numeric: '508',
    phone: '+258',
    lang: 'pt',
    langs: ['pt', 'swa'],
  },
  {
    country: 'Namibia',
    alpha2: 'NA',
    alpha3: 'NAM',
    numeric: '516',
    phone: '+264',
    lang: 'af',
    langs: ['af', 'en', 'oj', 'her', 'dt'],
  },
  {
    country: 'New Caledonia',
    alpha2: 'NC',
    alpha3: 'NCL',
    numeric: '540',
    phone: '+687',
    lang: 'fr',
    langs: ['fr', 'knl'],
  },
  {
    country: 'Niger',
    alpha2: 'NE',
    alpha3: 'NER',
    numeric: '562',
    phone: '+227',
    lang: 'fr',
    langs: ['fr', 'ha'],
  },
  {
    country: 'Norfolk Island',
    alpha2: 'NF',
    alpha3: 'NFK',
    numeric: '574',
    phone: '+672',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Nigeria',
    alpha2: 'NG',
    alpha3: 'NGA',
    numeric: '566',
    phone: '+234',
    lang: 'en',
    langs: ['en', 'yo', 'ha', 'ful', 'ig'],
  },
  {
    country: 'Nicaragua',
    alpha2: 'NI',
    alpha3: 'NIC',
    numeric: '558',
    phone: '+505',
    lang: 'es',
    langs: ['es'],
  },
  {
    country: 'Netherlands',
    alpha2: 'NL',
    alpha3: 'NLD',
    numeric: '528',
    phone: '+31',
    lang: 'nl',
    langs: ['nl'],
  },
  {
    country: 'Norway',
    alpha2: 'NO',
    alpha3: 'NOR',
    numeric: '578',
    phone: '+47',
    lang: 'no',
    langs: ['no', 'nno', 'smi'],
  },
  {
    country: 'Nepal',
    alpha2: 'NP',
    alpha3: 'NPL',
    numeric: '524',
    phone: '+977',
    lang: 'ne',
    langs: ['ne'],
  },
  {
    country: 'Nauru',
    alpha2: 'NR',
    alpha3: 'NRU',
    numeric: '520',
    phone: '+674',
    lang: 'na',
    langs: ['na', 'en'],
  },
  {
    country: 'Niue',
    alpha2: 'NU',
    alpha3: 'NIU',
    numeric: '570',
    phone: '+683',
    lang: 'niu',
    langs: ['niu', 'en'],
  },
  {
    country: 'New Zealand',
    alpha2: 'NZ',
    alpha3: 'NZL',
    numeric: '554',
    phone: '+64',
    lang: 'en',
    langs: ['en', 'mi'],
  },
  {
    country: 'Oman',
    alpha2: 'OM',
    alpha3: 'OMN',
    numeric: '512',
    phone: '+968',
    lang: 'ar',
    langs: ['ar'],
  },
  {
    country: 'Panama',
    alpha2: 'PA',
    alpha3: 'PAN',
    numeric: '591',
    phone: '+507',
    lang: 'es',
    langs: ['es'],
  },
  {
    country: 'Peru',
    alpha2: 'PE',
    alpha3: 'PER',
    numeric: '604',
    phone: '+51',
    lang: 'es',
    langs: ['es', 'qu'],
  },
  {
    country: 'French Polyesia',
    alpha2: 'PF',
    alpha3: 'PYF',
    numeric: '258',
    phone: '+689',
    lang: 'fr',
    langs: ['fr', 'ty'],
  },
  {
    country: 'Papua New Guinea',
    alpha2: 'PG',
    alpha3: 'PNG',
    numeric: '598',
    phone: '+675',
    lang: 'en',
    langs: ['en', 'to', 'hi', 'ho', 'pi'],
  },
  {
    country: 'Philippines (the)',
    alpha2: 'PH',
    alpha3: 'PHL',
    numeric: '608',
    phone: '+63',
    lang: 'fil',
    langs: ['fil', 'en', 'es'],
  },
  {
    country: 'Pakistan',
    alpha2: 'PK',
    alpha3: 'PAK',
    numeric: '586',
    phone: '+92',
    lang: 'ur',
    langs: ['ur', 'en', 'pa', 'sd', 'ps'],
  },
  {
    country: 'Poland',
    alpha2: 'PL',
    alpha3: 'POL',
    numeric: '616',
    phone: '+48',
    lang: 'pl',
    langs: ['pl'],
  },
  {
    country: 'Saint Pierre and Miquelon',
    alpha2: 'PM',
    alpha3: 'SPM',
    numeric: '666',
    phone: '+508',
    lang: 'fr',
    langs: ['fr'],
  },
  {
    country: 'Pitcairn',
    alpha2: 'PN',
    alpha3: 'PCN',
    numeric: '612',
    phone: '+64',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Puerto Rico',
    alpha2: 'PR',
    alpha3: 'PRI',
    numeric: '630',
    phone: '+1-787',
    lang: 'es',
    langs: ['es', 'en'],
  },
  {
    country: 'Palestine, State of',
    alpha2: 'PS',
    alpha3: 'PSE',
    numeric: '275',
    phone: '+970',
    lang: 'ar',
    langs: ['ar'],
  },
  {
    country: 'Portugal',
    alpha2: 'PT',
    alpha3: 'PRT',
    numeric: '620',
    phone: '+351',
    lang: 'pt',
    langs: ['pt'],
  },
  {
    country: 'Palau',
    alpha2: 'PW',
    alpha3: 'PLW',
    numeric: '585',
    phone: '+680',
    lang: 'en',
    langs: ['en', 'pau'],
  },
  {
    country: 'Paraguay',
    alpha2: 'PY',
    alpha3: 'PRY',
    numeric: '600',
    phone: '+595',
    lang: 'es',
    langs: ['es', 'gn'],
  },
  {
    country: 'Qatar',
    alpha2: 'QA',
    alpha3: 'QAT',
    numeric: '634',
    phone: '+974',
    lang: 'ar',
    langs: ['ar'],
  },
  {
    country: 'Rainbow',
    alpha2: 'RAINBOW',
    alpha3: null,
    numeric: null,
    phone: null,
    lang: null,
    langs: [],
  },
  {
    country: 'Réunion',
    alpha2: 'RE',
    alpha3: 'REU',
    numeric: '638',
    phone: '+262',
    lang: 'fr',
    langs: ['fr'],
  },
  {
    country: 'Romania',
    alpha2: 'RO',
    alpha3: 'ROU',
    numeric: '642',
    phone: '+40',
    lang: 'ro',
    langs: ['ro'],
  },
  {
    country: 'Serbia',
    alpha2: 'RS',
    alpha3: 'SRB',
    numeric: '688',
    phone: '+381',
    lang: 'sr',
    langs: ['sr'],
  },
  {
    country: 'Russian Federation (the)',
    alpha2: 'RU',
    alpha3: 'RUS',
    numeric: '643',
    phone: '+7',
    lang: 'ru',
    langs: ['ru'],
  },
  {
    country: 'Rwanda',
    alpha2: 'RW',
    alpha3: 'RWA',
    numeric: '646',
    phone: '+250',
    lang: 'rw',
    langs: ['rw', 'fr', 'en'],
  },
  {
    country: 'Saudi Arabia',
    alpha2: 'SA',
    alpha3: 'SAU',
    numeric: '682',
    phone: '+966',
    lang: 'ar',
    langs: ['ar'],
  },
  {
    country: 'Solomon Islands',
    alpha2: 'SB',
    alpha3: 'SLB',
    numeric: '090',
    phone: '+677',
    lang: 'en',
    langs: ['en', 'pi'],
  },
  {
    country: 'Seychelles',
    alpha2: 'SC',
    alpha3: 'SYC',
    numeric: '690',
    phone: '+248',
    lang: 'en',
    langs: ['en', 'fr', 'crs'],
  },
  {
    country: 'Sudan (the)',
    alpha2: 'SD',
    alpha3: 'SDN',
    numeric: '729',
    phone: '+249',
    lang: 'ar',
    langs: ['ar', 'en'],
  },
  {
    country: 'Sweden',
    alpha2: 'SE',
    alpha3: 'SWE',
    numeric: '752',
    phone: '+46',
    lang: 'sv',
    langs: ['sv'],
  },
  {
    country: 'Singapore',
    alpha2: 'SG',
    alpha3: 'SGP',
    numeric: '702',
    phone: '+65',
    lang: 'en',
    langs: ['en', 'ms', 'ta', 'ml'],
  },
  {
    country: 'Saint Helena, Ascension Island, Tristan da Cunha',
    alpha2: 'SH',
    alpha3: 'SHN',
    numeric: '654',
    phone: '+290',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Slovenia',
    alpha2: 'SI',
    alpha3: 'SVN',
    numeric: '705',
    phone: '+386',
    lang: 'sl',
    langs: ['sl'],
  },
  {
    country: 'Svalbard, Jan Mayen',
    alpha2: 'SJ',
    alpha3: 'SJM',
    numeric: '744',
    phone: '+47',
    lang: 'no',
    langs: ['no'],
  },
  {
    country: 'Slovakia',
    alpha2: 'SK',
    alpha3: 'SVK',
    numeric: '703',
    phone: '+421',
    lang: 'sk',
    langs: ['sk'],
  },
  {
    country: 'Sierra Leone',
    alpha2: 'SL',
    alpha3: 'SLE',
    numeric: '694',
    phone: '+232',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'San Marino',
    alpha2: 'SM',
    alpha3: 'SMR',
    numeric: '674',
    phone: '+378',
    lang: 'it',
    langs: ['it'],
  },
  {
    country: 'Senegal',
    alpha2: 'SN',
    alpha3: 'SEN',
    numeric: '686',
    phone: '+221',
    lang: 'fr',
    langs: ['fr'],
  },
  {
    country: 'Somalia',
    alpha2: 'SO',
    alpha3: 'SOM',
    numeric: '706',
    phone: '+252',
    lang: 'so',
    langs: ['so', 'ar'],
  },
  {
    country: 'Suriname',
    alpha2: 'SR',
    alpha3: 'SUR',
    numeric: '740',
    phone: '+597',
    lang: 'nl',
    langs: ['nl'],
  },
  {
    country: 'South Sudan',
    alpha2: 'SS',
    alpha3: 'SSD',
    numeric: '728',
    phone: '+211',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Sao Tome and Principe',
    alpha2: 'ST',
    alpha3: 'STP',
    numeric: '678',
    phone: '+239',
    lang: 'pt',
    langs: ['pt'],
  },
  {
    country: 'El Salvador',
    alpha2: 'SV',
    alpha3: 'SLV',
    numeric: '222',
    phone: '+503',
    lang: 'es',
    langs: ['es'],
  },
  {
    country: 'Sint Maarten',
    alpha2: 'SX',
    alpha3: 'SXM',
    numeric: '534',
    phone: '+599',
    lang: 'nl',
    langs: ['nl', 'en'],
  },
  {
    country: 'Syrian Arab Republic (the)',
    alpha2: 'SY',
    alpha3: 'SYR',
    numeric: '760',
    phone: '+963',
    lang: 'ar',
    langs: ['ar'],
  },
  {
    country: 'Eswatini',
    alpha2: 'SZ',
    alpha3: 'SWZ',
    numeric: '748',
    phone: '+268',
    lang: 'en',
    langs: ['en', 'ss'],
  },
  {
    country: 'Turks and Caicos Islands (the)',
    alpha2: 'TC',
    alpha3: 'TCA',
    numeric: '796',
    phone: '+1-649',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Chad',
    alpha2: 'TD',
    alpha3: 'TCD',
    numeric: '148',
    phone: '+235',
    lang: 'fr',
    langs: ['fr', 'ar'],
  },
  {
    country: 'French Southern Territories',
    alpha2: 'TF',
    alpha3: 'ATF',
    numeric: '260',
    phone: '+666',
    lang: 'fr',
    langs: ['fr'],
  },
  {
    country: 'Togo',
    alpha2: 'TG',
    alpha3: 'TGO',
    numeric: '768',
    phone: '+228',
    lang: 'fr',
    langs: ['fr'],
  },
  {
    country: 'Thailand',
    alpha2: 'TH',
    alpha3: 'THA',
    numeric: '764',
    phone: '+66',
    lang: 'th',
    langs: ['th'],
  },
  {
    country: 'Tajikistan',
    alpha2: 'TJ',
    alpha3: 'TJK',
    numeric: '762',
    phone: '+992',
    lang: 'tj',
    langs: ['tj'],
  },
  {
    country: 'Tokelau',
    alpha2: 'TK',
    alpha3: 'TKL',
    numeric: '772',
    phone: '+690',
    lang: 'to',
    langs: ['to', 'en'],
  },
  {
    country: 'Timor-Leste',
    alpha2: 'TL',
    alpha3: 'TLS',
    numeric: '626',
    phone: '+670',
    lang: 'pt',
    langs: ['pt', 'tet'],
  },
  {
    country: 'Turkmenistan',
    alpha2: 'TM',
    alpha3: 'TKM',
    numeric: '795',
    phone: '+993',
    lang: 'tk',
    langs: ['tk', 'ru'],
  },
  {
    country: 'Tunisia',
    alpha2: 'TN',
    alpha3: 'TUN',
    numeric: '788',
    phone: '+216',
    lang: 'ar',
    langs: ['ar', 'fr'],
  },
  {
    country: 'Tonga',
    alpha2: 'TO',
    alpha3: 'TON',
    numeric: '776',
    phone: '+676',
    lang: 'to',
    langs: ['to', 'en'],
  },
  {
    country: 'Turkey',
    alpha2: 'TR',
    alpha3: 'TUR',
    numeric: '792',
    phone: '+90',
    lang: 'tr',
    langs: ['tr'],
  },
  {
    country: 'Trinidad and Tobago',
    alpha2: 'TT',
    alpha3: 'TTO',
    numeric: '780',
    phone: '+1-868',
    lang: 'en',
    langs: ['en', 'es', 'hns'],
  },
  {
    country: 'Tuvalu',
    alpha2: 'TV',
    alpha3: 'TUV',
    numeric: '798',
    phone: '+688',
    lang: 'tvl',
    langs: ['tvl', 'en'],
  },
  {
    country: 'Taiwan',
    alpha2: 'TW',
    alpha3: 'TWN',
    numeric: '158',
    phone: '+886',
    lang: 'zh',
    langs: ['zh'],
  },
  {
    country: 'Tanzania, the United Republic of',
    alpha2: 'TZ',
    alpha3: 'TZA',
    numeric: '834',
    phone: '+255',
    lang: 'sw',
    langs: ['sw', 'en'],
  },
  {
    country: 'Ukraine',
    alpha2: 'UA',
    alpha3: 'UKR',
    numeric: '804',
    phone: '+380',
    lang: 'uk',
    langs: ['uk', 'ru'],
  },
  {
    country: 'Uganda',
    alpha2: 'UG',
    alpha3: 'UGA',
    numeric: '800',
    phone: '+256',
    lang: 'en',
    langs: ['en', 'sw', 'lu'],
  },
  {
    country: 'United States Minor Outlying Islands (the)',
    alpha2: 'UM',
    alpha3: 'UMI',
    numeric: '581',
    phone: '+1',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Union of South American Nations',
    alpha2: 'UNASUR',
    alpha3: null,
    numeric: null,
    phone: null,
    lang: null,
    langs: [],
  },
  {
    country: 'United States of America',
    alpha2: 'US',
    alpha3: 'USA',
    numeric: '840',
    phone: '+1',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Uruguay',
    alpha2: 'UY',
    alpha3: 'URY',
    numeric: '858',
    phone: '+598',
    lang: 'es',
    langs: ['es'],
  },
  {
    country: 'Uzbekistan',
    alpha2: 'UZ',
    alpha3: 'UZB',
    numeric: '860',
    phone: '+998',
    lang: 'uz',
    langs: ['uz', 'ru'],
  },
  {
    country: 'Holy See',
    alpha2: 'VA',
    alpha3: 'VAT',
    numeric: '336',
    phone: '+39',
    lang: 'it',
    langs: ['it', 'la'],
  },
  {
    country: 'Saint Vincent and the Grenadines',
    alpha2: 'VC',
    alpha3: 'VCT',
    numeric: '670',
    phone: '+1-784',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Venezuela (Bolivarian Republic of)',
    alpha2: 'VE',
    alpha3: 'VEN',
    numeric: '862',
    phone: '+58',
    lang: 'es',
    langs: ['es'],
  },
  {
    country: 'Virgin Islands (British)',
    alpha2: 'VG',
    alpha3: 'VGB',
    numeric: '092',
    phone: '+1-284',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Virgin Islands (U.S.)',
    alpha2: 'VI',
    alpha3: 'VIR',
    numeric: '850',
    phone: '+1-340',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Vietnam',
    alpha2: 'VN',
    alpha3: 'VNM',
    numeric: '704',
    phone: '+84',
    lang: 'vi',
    langs: ['vi'],
  },
  {
    country: 'Vanuatu',
    alpha2: 'VU',
    alpha3: 'VUT',
    numeric: '548',
    phone: '+678',
    lang: 'bi',
    langs: ['bi', 'en', 'fr'],
  },
  {
    country: 'Wallis and Futuna',
    alpha2: 'WF',
    alpha3: 'WLF',
    numeric: '876',
    phone: '+681',
    lang: 'fr',
    langs: ['fr'],
  },
  {
    country: 'Samoa',
    alpha2: 'WS',
    alpha3: 'WSM',
    numeric: '882',
    phone: '+685',
    lang: 'sm',
    langs: ['sm', 'en'],
  },
  {
    country: 'Yemen',
    alpha2: 'YE',
    alpha3: 'YEM',
    numeric: '887',
    phone: '+967',
    lang: 'ar',
    langs: ['ar'],
  },
  {
    country: 'South Africa',
    alpha2: 'ZA',
    alpha3: 'ZAF',
    numeric: '710',
    phone: '+27',
    lang: 'af',
    langs: ['af', 'en', 'zu', 'nso', 'xh', 'st'],
  },
  {
    country: 'Zambia',
    alpha2: 'ZM',
    alpha3: 'ZMB',
    numeric: '894',
    phone: '260',
    lang: 'en',
    langs: ['en'],
  },
  {
    country: 'Zimbabwe',
    alpha2: 'ZW',
    alpha3: 'ZWE',
    numeric: '716',
    phone: '263',
    lang: 'en',
    langs: ['en', 'sn'],
  },
  {
    country: 'Afghanistan',
    alpha2: 'AF',
    alpha3: 'AFG',
    numeric: '004',
    phone: '93',
    lang: 'ps',
    langs: ['ps'],
  },
  {
    country: 'Bouvet Island',
    alpha2: 'BV',
    alpha3: 'BVT',
    numeric: '074',
    phone: '47',
    lang: 'no',
    langs: ['no'],
  },
];

export default countries;

export function getCountry(lng: string) {
  const [lang, alpha2] = lng.split('-');
  return countries.find(
    (country) => country.alpha2 === alpha2 && country.lang === lang,
  );
}
