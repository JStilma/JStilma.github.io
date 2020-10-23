var countryNames  = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra",
"Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina",
"Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas (the)", "Bahrain",
"Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda",
"Bhutan", "Bolivia (Plurinational State of)", "Bonaire, Sint Eustatius and Saba",
"Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory (the)",
"Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
"Cameroon", "Canada", "Cayman Islands (the)", "Central African Republic (the)", "Chad",
"Chile", "China", "Christmas Island", "Cocos (Keeling) Islands (the)", "Colombia",
"Comoros (the)", "Congo (the Democratic Republic of the)", "Congo (the)",
"Cook Islands (the)", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus",
"Czechia", "Côte d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic (the)",
"Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
"Eswatini", "Ethiopia", "Falkland Islands (the) [Malvinas]", "Faroe Islands (the)",
"Fiji", "Finland", "France", "French Guiana", "French Polynesia",
"French Southern Territories (the)", "Gabon", "Gambia (the)", "Georgia",
"Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe",
"Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
"Heard Island and McDonald Islands", "Holy See (the)", "Honduras", "Hong Kong",
"Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq",
"Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan",
"Kazakhstan", "Kenya", "Kiribati", "Korea (the Democratic People's Republic of)", "Korea (the Republic of)",
"Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic (the)", "Latvia",
"Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
"Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
"Marshall Islands (the)", "Martinique", "Mauritania", "Mauritius", "Mayotte",
"Mexico", "Micronesia (Federated States of)", "Moldova (the Republic of)", "Monaco",
"Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar",
"Namibia", "Nauru", "Nepal", "Netherlands (the)", "New Caledonia", "New Zealand",
"Nicaragua", "Niger (the)", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands (the)",
"Norway", "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama",
"Papua New Guinea", "Paraguay", "Peru", "Philippines (the)", "Pitcairn", "Poland", "Portugal",
"Puerto Rico", "Qatar", "Republic of North Macedonia", "Romania", "Russian Federation (the)",
"Rwanda", "Réunion", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha",
"Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)",
"Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa",
"San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
"Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch part)", "Slovakia",
"Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands",
"South Sudan", "Spain", "Sri Lanka", "Sudan (the)", "Suriname", "Svalbard and Jan Mayen",
"Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan",
"Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo",
"Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
"Turkmenistan", "Turks and Caicos Islands (the)", "Tuvalu", "Uganda", "Ukraine",
"United Arab Emirates (the)", "United Kingdom of Great Britain and Northern Ireland (the)",
"United States Minor Outlying Islands (the)", "United States of America (the)",
"Uruguay", "Uzbekistan", "Vanuatu", "Venezuela (Bolivarian Republic of)",
"Viet Nam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna",
"Western Sahara", "Yemen", "Zambia", "Zimbabwe", "Åland Islands"];

var countryCode = ["AF",	"AX",	"AL",	"DZ",	"AS",	
"AD",	"AO",	"AI",	"AQ",	"AG",	"AR",	"AM",	"AW",	
"AU",	"AT",	"AZ",	"BS",	"BH",	"BD",	"BB",	"BY",	
"BE",	"BZ",	"BJ",	"BM",	"BT",	"BO",	"BQ",	"BA",	
"BW",	"BV",	"BR",	"IO",	"BN",	"BG",	"BF",	"BI",	
"CV",	"KH",	"CM",	"CA",	"KY",	"CF",	"TD",	"CL",	
"CN",	"CX",	"CC",	"CO",	"KM",	"CG",	"CD",	"CK",	
"CR",	"CI",	"HR",	"CU",	"CW",	"CY",	"CZ",	"DK",	
"DJ",	"DM",	"DO",	"EC",	"EG",	"SV",	"GQ",	"ER",	
"EE",	"SZ",	"ET",	"FK",	"FO",	"FJ",	"FI",	"FR",	
"GF",	"PF",	"TF",	"GA",	"GM",	"GE",	"DE",	"GH",	
"GI",	"GR",	"GL",	"GD",	"GP",	"GU",	"GT",	"GG",	
"GN",	"GW",	"GY",	"HT",	"HM",	"VA",	"HN",	"HK",	
"HU",	"IS",	"IN",	"ID",	"IR",	"IQ",	"IE",	"IM",	
"IL",	"IT",	"JM",	"JP",	"JE",	"JO",	"KZ",	"KE",	
"KI",	"KP",	"KR",	"KW",	"KG",	"LA",	"LV",	"LB",	
"LS",	"LR",	"LY",	"LI",	"LT",	"LU",	"MO",	"MG",	
"MW",	"MY",	"MV",	"ML",	"MT",	"MH",	"MQ",	"MR",	
"MU",	"YT",	"MX",	"FM",	"MD",	"MC",	"MN",	"ME",	
"MS",	"MA",	"MZ",	"MM",	"NA",	"NR",	"NP",	"NL",	
"NC",	"NZ",	"NI",	"NE",	"NG",	"NU",	"NF",	"MK",	
"MP",	"NO",	"OM",	"PK",	"PW",	"PS",	"PA",	"PG",	
"PY",	"PE",	"PH",	"PN",	"PL",	"PT",	"PR",	"QA",	
"RE",	"RO",	"RU",	"RW",	"BL",	"SH",	"KN",	"LC",	
"MF",	"PM",	"VC",	"WS",	"SM",	"ST",	"SA",	"SN",	
"RS",	"SC",	"SL",	"SG",	"SX",	"SK",	"SI",	"SB",	
"SO",	"ZA",	"GS",	"SS",	"ES",	"LK",	"SD",	"SR",	
"SJ",	"SE",	"CH",	"SY",	"TW",	"TJ",	"TZ",	"TH",	
"TL",	"TG",	"TK",	"TO",	"TT",	"TN",	"TR",	"TM",	
"TC",	"TV",	"UG",	"UA",	"AE",	"GB",	"US",	"UM",	
"UY",	"UZ",	"VU",	"VE",	"VN",	"VG",	"VI",	"WF",
"EH",	"YE",	"ZM",	"ZW"];

var namelist = [];
var namelistContainer = document.createElement("div");
var namelistElement = document.createElement("ol");

var namelistCount = namelist.length;
var itemList;
var used = []
var randomCountry, usedCountry = Infinity;
var x, y1, y2, z1, z2;


namelistElement.className = "countries";
const countButton = document.querySelector("button");
countButton.addEventListener('click', showCountries);
function showCountries()
//countButton.onclick = function randomCountries()
{
    document.querySelector(".content").appendChild(namelistContainer);
    namelistContainer.appendChild(namelistElement);

    for(x = 0; x < 25; x++)
    {
        randomCountry = Math.floor(Math.random() * countryCode.length);

        if(randomCountry == usedCountry)
        {
            continue;
        }
        else
    {


        y1 = document.createElement("cont");
        y2 = document.createTextNode(countryNames[randomCountry] + ", ");
        y1.appendChild(y2);
        y1.className = "Country";

        z1 = document.createElement("cont2");
        z2 = document.createTextNode(countryCode[randomCountry]);
        z1.appendChild(z2);
        z1.className = "Country code";

        itemList = document.createElement("li");
        itemList.appendChild(y1);
        itemList.appendChild(z1);
        namelistElement.appendChild(itemList);

        used += countryNames[randomCountry];

        usedCountry = randomCountry;
    }

    }

    var unused = countryNames;

    unused = unused.filter(function(a) {return !used.includes(a)})
    console.log(unused);
    used = [];
}


