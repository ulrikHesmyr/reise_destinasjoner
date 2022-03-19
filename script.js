//Venter til HTML er ferdig lastet inn før vi kjører scripten
window.addEventListener('DOMContentLoaded', init);

//Elementer hentet fra HTML-dokumentet
const getLandContainerEl = document.querySelector('#landListeEl');
const getsokLandInputEl = document.querySelector('#sokLandInput');
const getSkalReiseTilEl = document.querySelector('#skalReiseTil');

//DATA
let land = [];
if(!window.localStorage.getItem("lagredeData_reiseliste")){
    land = [ 
        {checked: false, name: 'Afghanistan', code: 'AF'}, 
        {checked: false, name: 'Åland Islands', code: 'AX'}, 
        {checked: false, name: 'Albania', code: 'AL'}, 
        {checked: false, name: 'Algeria', code: 'DZ'}, 
        {checked: false, name: 'American Samoa', code: 'AS'}, 
        {checked: false, name: 'Andorra', code: 'AD'}, 
        {checked: false, name: 'Angola', code: 'AO'}, 
        {checked: false, name: 'Anguilla', code: 'AI'}, 
        {checked: false, name: 'Antarctica', code: 'AQ'}, 
        {checked: false, name: 'Antigua and Barbuda', code: 'AG'}, 
        {checked: false, name: 'Argentina', code: 'AR'}, 
        {checked: false, name: 'Armenia', code: 'AM'}, 
        {checked: false, name: 'Aruba', code: 'AW'}, 
        {checked: false, name: 'Australia', code: 'AU'}, 
        {checked: false, name: 'Austria', code: 'AT'}, 
        {checked: false, name: 'Azerbaijan', code: 'AZ'}, 
        {checked: false, name: 'Bahamas', code: 'BS'}, 
        {checked: false, name: 'Bahrain', code: 'BH'}, 
        {checked: false, name: 'Bangladesh', code: 'BD'}, 
        {checked: false, name: 'Barbados', code: 'BB'}, 
        {checked: false, name: 'Belarus', code: 'BY'}, 
        {checked: false, name: 'Belgium', code: 'BE'}, 
        {checked: false, name: 'Belize', code: 'BZ'}, 
        {checked: false, name: 'Benin', code: 'BJ'}, 
        {checked: false, name: 'Bermuda', code: 'BM'}, 
        {checked: false, name: 'Bhutan', code: 'BT'}, 
        {checked: false, name: 'Bolivia', code: 'BO'}, 
        {checked: false, name: 'Bosnia and Herzegovina', code: 'BA'}, 
        {checked: false, name: 'Botswana', code: 'BW'}, 
        {checked: false, name: 'Bouvet Island', code: 'BV'}, 
        {checked: false, name: 'Brazil', code: 'BR'}, 
        {checked: false, name: 'British Indian Ocean Territory', code: 'IO'}, 
        {checked: false, name: 'Brunei Darussalam', code: 'BN'}, 
        {checked: false, name: 'Bulgaria', code: 'BG'}, 
        {checked: false, name: 'Burkina Faso', code: 'BF'}, 
        {checked: false, name: 'Burundi', code: 'BI'}, 
        {checked: false, name: 'Cambodia', code: 'KH'}, 
        {checked: false, name: 'Cameroon', code: 'CM'}, 
        {checked: false, name: 'Canada', code: 'CA'}, 
        {checked: false, name: 'Cape Verde', code: 'CV'}, 
        {checked: false, name: 'Cayman Islands', code: 'KY'}, 
        {checked: false, name: 'Central African Republic', code: 'CF'}, 
        {checked: false, name: 'Chad', code: 'TD'}, 
        {checked: false, name: 'Chile', code: 'CL'}, 
        {checked: false, name: 'China', code: 'CN'}, 
        {checked: false, name: 'Christmas Island', code: 'CX'}, 
        {checked: false, name: 'Cocos (Keeling) Islands', code: 'CC'}, 
        {checked: false, name: 'Colombia', code: 'CO'}, 
        {checked: false, name: 'Comoros', code: 'KM'}, 
        {checked: false, name: 'Congo', code: 'CG'}, 
        {checked: false, name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
        {checked: false, name: 'Cook Islands', code: 'CK'}, 
        {checked: false, name: 'Costa Rica', code: 'CR'}, 
        {checked: false, name: 'Cote D\'Ivoire', code: 'CI'}, 
        {checked: false, name: 'Croatia', code: 'HR'}, 
        {checked: false, name: 'Cuba', code: 'CU'}, 
        {checked: false, name: 'Cyprus', code: 'CY'}, 
        {checked: false, name: 'Czech Republic', code: 'CZ'}, 
        {checked: false, name: 'Denmark', code: 'DK'}, 
        {checked: false, name: 'Djibouti', code: 'DJ'}, 
        {checked: false, name: 'Dominica', code: 'DM'}, 
        {checked: false, name: 'Dominican Republic', code: 'DO'}, 
        {checked: false, name: 'Ecuador', code: 'EC'}, 
        {checked: false, name: 'Egypt', code: 'EG'}, 
        {checked: false, name: 'El Salvador', code: 'SV'}, 
        {checked: false, name: 'Equatorial Guinea', code: 'GQ'}, 
        {checked: false, name: 'Eritrea', code: 'ER'}, 
        {checked: false, name: 'Estonia', code: 'EE'}, 
        {checked: false, name: 'Ethiopia', code: 'ET'}, 
        {checked: false, name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
        {checked: false, name: 'Faroe Islands', code: 'FO'}, 
        {checked: false, name: 'Fiji', code: 'FJ'}, 
        {checked: false, name: 'Finland', code: 'FI'}, 
        {checked: false, name: 'France', code: 'FR'}, 
        {checked: false, name: 'French Guiana', code: 'GF'}, 
        {checked: false, name: 'French Polynesia', code: 'PF'}, 
        {checked: false, name: 'French Southern Territories', code: 'TF'}, 
        {checked: false, name: 'Gabon', code: 'GA'}, 
        {checked: false, name: 'Gambia', code: 'GM'}, 
        {checked: false, name: 'Georgia', code: 'GE'}, 
        {checked: false, name: 'Germany', code: 'DE'}, 
        {checked: false, name: 'Ghana', code: 'GH'}, 
        {checked: false, name: 'Gibraltar', code: 'GI'}, 
        {checked: false, name: 'Greece', code: 'GR'}, 
        {checked: false, name: 'Greenland', code: 'GL'}, 
        {checked: false, name: 'Grenada', code: 'GD'}, 
        {checked: false, name: 'Guadeloupe', code: 'GP'}, 
        {checked: false, name: 'Guam', code: 'GU'}, 
        {checked: false, name: 'Guatemala', code: 'GT'}, 
        {checked: false, name: 'Guernsey', code: 'GG'}, 
        {checked: false, name: 'Guinea', code: 'GN'}, 
        {checked: false, name: 'Guinea-Bissau', code: 'GW'}, 
        {checked: false, name: 'Guyana', code: 'GY'}, 
        {checked: false, name: 'Haiti', code: 'HT'}, 
        {checked: false, name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
        {checked: false, name: 'Holy See (Vatican City State)', code: 'VA'}, 
        {checked: false, name: 'Honduras', code: 'HN'}, 
        {checked: false, name: 'Hong Kong', code: 'HK'}, 
        {checked: false, name: 'Hungary', code: 'HU'}, 
        {checked: false, name: 'Iceland', code: 'IS'}, 
        {checked: false, name: 'India', code: 'IN'}, 
        {checked: false, name: 'Indonesia', code: 'ID'}, 
        {checked: false, name: 'Iran, Islamic Republic Of', code: 'IR'}, 
        {checked: false, name: 'Iraq', code: 'IQ'}, 
        {checked: false, name: 'Ireland', code: 'IE'}, 
        {checked: false, name: 'Isle of Man', code: 'IM'}, 
        {checked: false, name: 'Israel', code: 'IL'}, 
        {checked: false, name: 'Italy', code: 'IT'}, 
        {checked: false, name: 'Jamaica', code: 'JM'}, 
        {checked: false, name: 'Japan', code: 'JP'}, 
        {checked: false, name: 'Jersey', code: 'JE'}, 
        {checked: false, name: 'Jordan', code: 'JO'}, 
        {checked: false, name: 'Kazakhstan', code: 'KZ'}, 
        {checked: false, name: 'Kenya', code: 'KE'}, 
        {checked: false, name: 'Kiribati', code: 'KI'}, 
        {checked: false, name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
        {checked: false, name: 'Korea, Republic of', code: 'KR'}, 
        {checked: false, name: 'Kuwait', code: 'KW'}, 
        {checked: false, name: 'Kyrgyzstan', code: 'KG'}, 
        {checked: false, name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
        {checked: false, name: 'Latvia', code: 'LV'}, 
        {checked: false, name: 'Lebanon', code: 'LB'}, 
        {checked: false, name: 'Lesotho', code: 'LS'}, 
        {checked: false, name: 'Liberia', code: 'LR'}, 
        {checked: false, name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
        {checked: false, name: 'Liechtenstein', code: 'LI'}, 
        {checked: false, name: 'Lithuania', code: 'LT'}, 
        {checked: false, name: 'Luxembourg', code: 'LU'}, 
        {checked: false, name: 'Macao', code: 'MO'}, 
        {checked: false, name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
        {checked: false, name: 'Madagascar', code: 'MG'}, 
        {checked: false, name: 'Malawi', code: 'MW'}, 
        {checked: false, name: 'Malaysia', code: 'MY'}, 
        {checked: false, name: 'Maldives', code: 'MV'}, 
        {checked: false, name: 'Mali', code: 'ML'}, 
        {checked: false, name: 'Malta', code: 'MT'}, 
        {checked: false, name: 'Marshall Islands', code: 'MH'}, 
        {checked: false, name: 'Martinique', code: 'MQ'}, 
        {checked: false, name: 'Mauritania', code: 'MR'}, 
        {checked: false, name: 'Mauritius', code: 'MU'}, 
        {checked: false, name: 'Mayotte', code: 'YT'}, 
        {checked: false, name: 'Mexico', code: 'MX'}, 
        {checked: false, name: 'Micronesia, Federated States of', code: 'FM'}, 
        {checked: false, name: 'Moldova, Republic of', code: 'MD'}, 
        {checked: false, name: 'Monaco', code: 'MC'}, 
        {checked: false, name: 'Mongolia', code: 'MN'}, 
        {checked: false, name: 'Montserrat', code: 'MS'}, 
        {checked: false, name: 'Morocco', code: 'MA'}, 
        {checked: false, name: 'Mozambique', code: 'MZ'}, 
        {checked: false, name: 'Myanmar', code: 'MM'}, 
        {checked: false, name: 'Namibia', code: 'NA'}, 
        {checked: false, name: 'Nauru', code: 'NR'}, 
        {checked: false, name: 'Nepal', code: 'NP'}, 
        {checked: false, name: 'Netherlands', code: 'NL'}, 
        {checked: false, name: 'Netherlands Antilles', code: 'AN'}, 
        {checked: false, name: 'New Caledonia', code: 'NC'}, 
        {checked: false, name: 'New Zealand', code: 'NZ'}, 
        {checked: false, name: 'Nicaragua', code: 'NI'}, 
        {checked: false, name: 'Niger', code: 'NE'}, 
        {checked: false, name: 'Nigeria', code: 'NG'}, 
        {checked: false, name: 'Niue', code: 'NU'}, 
        {checked: false, name: 'Norfolk Island', code: 'NF'}, 
        {checked: false, name: 'Northern Mariana Islands', code: 'MP'}, 
        {checked: false, name: 'Norway', code: 'NO'}, 
        {checked: false, name: 'Oman', code: 'OM'}, 
        {checked: false, name: 'Pakistan', code: 'PK'}, 
        {checked: false, name: 'Palau', code: 'PW'}, 
        {checked: false, name: 'Palestinian Territory, Occupied', code: 'PS'}, 
        {checked: false, name: 'Panama', code: 'PA'}, 
        {checked: false, name: 'Papua New Guinea', code: 'PG'}, 
        {checked: false, name: 'Paraguay', code: 'PY'}, 
        {checked: false, name: 'Peru', code: 'PE'}, 
        {checked: false, name: 'Philippines', code: 'PH'}, 
        {checked: false, name: 'Pitcairn', code: 'PN'}, 
        {checked: false, name: 'Poland', code: 'PL'}, 
        {checked: false, name: 'Portugal', code: 'PT'}, 
        {checked: false, name: 'Puerto Rico', code: 'PR'}, 
        {checked: false, name: 'Qatar', code: 'QA'}, 
        {checked: false, name: 'Reunion', code: 'RE'}, 
        {checked: false, name: 'Romania', code: 'RO'}, 
        {checked: false, name: 'Russian Federation', code: 'RU'}, 
        {checked: false, name: 'RWANDA', code: 'RW'}, 
        {checked: false, name: 'Saint Helena', code: 'SH'}, 
        {checked: false, name: 'Saint Kitts and Nevis', code: 'KN'}, 
        {checked: false, name: 'Saint Lucia', code: 'LC'}, 
        {checked: false, name: 'Saint Pierre and Miquelon', code: 'PM'}, 
        {checked: false, name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
        {checked: false, name: 'Samoa', code: 'WS'}, 
        {checked: false, name: 'San Marino', code: 'SM'}, 
        {checked: false, name: 'Sao Tome and Principe', code: 'ST'}, 
        {checked: false, name: 'Saudi Arabia', code: 'SA'}, 
        {checked: false, name: 'Senegal', code: 'SN'}, 
        {checked: false, name: 'Serbia and Montenegro', code: 'CS'}, 
        {checked: false, name: 'Seychelles', code: 'SC'}, 
        {checked: false, name: 'Sierra Leone', code: 'SL'}, 
        {checked: false, name: 'Singapore', code: 'SG'}, 
        {checked: false, name: 'Slovakia', code: 'SK'}, 
        {checked: false, name: 'Slovenia', code: 'SI'}, 
        {checked: false, name: 'Solomon Islands', code: 'SB'}, 
        {checked: false, name: 'Somalia', code: 'SO'}, 
        {checked: false, name: 'South Africa', code: 'ZA'}, 
        {checked: false, name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
        {checked: false, name: 'Spain', code: 'ES'}, 
        {checked: false, name: 'Sri Lanka', code: 'LK'}, 
        {checked: false, name: 'Sudan', code: 'SD'}, 
        {checked: false, name: 'Suriname', code: 'SR'}, 
        {checked: false, name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
        {checked: false, name: 'Swaziland', code: 'SZ'}, 
        {checked: false, name: 'Sweden', code: 'SE'}, 
        {checked: false, name: 'Switzerland', code: 'CH'}, 
        {checked: false, name: 'Syrian Arab Republic', code: 'SY'}, 
        {checked: false, name: 'Taiwan, Province of China', code: 'TW'}, 
        {checked: false, name: 'Tajikistan', code: 'TJ'}, 
        {checked: false, name: 'Tanzania, United Republic of', code: 'TZ'}, 
        {checked: false, name: 'Thailand', code: 'TH'}, 
        {checked: false, name: 'Timor-Leste', code: 'TL'}, 
        {checked: false, name: 'Togo', code: 'TG'}, 
        {checked: false, name: 'Tokelau', code: 'TK'}, 
        {checked: false, name: 'Tonga', code: 'TO'}, 
        {checked: false, name: 'Trinidad and Tobago', code: 'TT'}, 
        {checked: false, name: 'Tunisia', code: 'TN'}, 
        {checked: false, name: 'Turkey', code: 'TR'}, 
        {checked: false, name: 'Turkmenistan', code: 'TM'}, 
        {checked: false, name: 'Turks and Caicos Islands', code: 'TC'}, 
        {checked: false, name: 'Tuvalu', code: 'TV'}, 
        {checked: false, name: 'Uganda', code: 'UG'}, 
        {checked: false, name: 'Ukraine', code: 'UA'}, 
        {checked: false, name: 'United Arab Emirates', code: 'AE'}, 
        {checked: false, name: 'United Kingdom', code: 'GB'}, 
        {checked: false, name: 'United States', code: 'US'}, 
        {checked: false, name: 'United States Minor Outlying Islands', code: 'UM'}, 
        {checked: false, name: 'Uruguay', code: 'UY'}, 
        {checked: false, name: 'Uzbekistan', code: 'UZ'}, 
        {checked: false, name: 'Vanuatu', code: 'VU'}, 
        {checked: false, name: 'Venezuela', code: 'VE'}, 
        {checked: false, name: 'Viet Nam', code: 'VN'}, 
        {checked: false, name: 'Virgin Islands, British', code: 'VG'}, 
        {checked: false, name: 'Virgin Islands, U.S.', code: 'VI'}, 
        {checked: false, name: 'Wallis and Futuna', code: 'WF'}, 
        {checked: false, name: 'Western Sahara', code: 'EH'}, 
        {checked: false, name: 'Yemen', code: 'YE'}, 
        {checked: false, name: 'Zambia', code: 'ZM'}, 
        {checked: false, name: 'Zimbabwe', code: 'ZW'} 
    ];
} else if(window.localStorage.getItem("lagredeData_reiseliste")){
    land = JSON.parse(window.localStorage.getItem("lagredeData_reiseliste"));
}


function init(){
    //Generer elementer for dataen
    displayData();

    //Legger til eventlisteners for input-feltet for å søke etter land
    getsokLandInputEl.addEventListener('input', () =>{
    
        sokefelt(getsokLandInputEl, document.querySelectorAll('.container'));
        
    })
    //Legger til eventlisteners for "legge til"- og "fjerne"-knappene
    getLandContainerEl.addEventListener('click', (event)=>{
        if(event.target.classList.contains('checkBox')){
            let currentLand = land.find(o => o.name.replace(/ /g, "") === `${event.target.parentElement.textContent.replace(/ /g, "")}`);
            currentLand.checked = true;
            window.localStorage.setItem("lagredeData_reiseliste", JSON.stringify(land));

            displayData();
            getsokLandInputEl.value = "";
        }
    })

    getSkalReiseTilEl.addEventListener('click', (event)=>{
        if(event.target.classList.contains('destroy')){
            let currentLand = land.find(o => o.name.replace(/ /g, "") === `${event.target.parentElement.textContent.replace(/ /g, "").replace("-", "")}`);
            currentLand.checked = false;
            window.localStorage.setItem("lagredeData_reiseliste", JSON.stringify(land));

            displayData();
            getsokLandInputEl.value = "";
        }
    })
}



function displayData(){
    //Når funksjonen blir tilkalt på nytt, så fjerner den elementene fra tidligere
    while(getLandContainerEl.hasChildNodes()){
        getLandContainerEl.removeChild(getLandContainerEl.firstChild);
    };
    while(getSkalReiseTilEl.hasChildNodes()){
        getSkalReiseTilEl.removeChild(getSkalReiseTilEl.firstChild);
    }
    //Genererer land
    for(let country of land){
        if(country.checked == false){
            
        let container = document.createElement('div');
        container.classList.add('container');
        container.classList.add('displayed');
        container.textContent = country.name;
        let checked = document.createElement('div');
        checked.classList.add('checkBox');
        container.appendChild(checked);
        
        getLandContainerEl.appendChild(container);
        

        } else if(country.checked == true){
            let container = document.createElement('div');
            container.classList.add('skalreise');
            container.textContent = `- ${country.name}`;
            let destroy = document.createElement('div');
            destroy.classList.add('destroy');
            container.appendChild(destroy);
            getSkalReiseTilEl.appendChild(container);
        }
    }
    


}


function sokefelt(inputEl, elementArray){
    for(let element of elementArray){
        const isMatching = inputEl.value.toLowerCase().includes(element.textContent.toLowerCase().substr(0, inputEl.value.length));
        element.classList.toggle('displayed', !isMatching);
        if(!element.classList.contains('displayed')){
            element.innerHTML = `<strong>${element.textContent.slice(0, inputEl.value.length)}</strong><div class="rest">${element.textContent.slice(inputEl.value.length, element.innerText.length)}</div> <div class="checkBox"></div>`;
            
        }
    }
    
    if(getLandContainerEl.innerText.length <= getsokLandInputEl.value.length){
        getsokLandInputEl.value = getLandContainerEl.innerText;
    }
    
}
