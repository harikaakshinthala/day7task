
// Q.NO 1:Get all the countries from the Asia continent /region using the Filter function

var request=new XMLHttpRequest();
request.open("Get","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data)
    var res=result.filter((ele)=>ele.region==="Asia")
    var res1=res.map((ele)=>ele.name.common)
    console.log(res1);
}

//OUTPUT:['Maldives', 'Pakistan', 'Malaysia', 'Uzbekistan', 'Singapore', 'Qatar', 'Kazakhstan', 'Bahrain', 
//'India', 'Macau', 'Syria', 'Kyrgyzstan', 'Palestine', 'Timor-Leste', 'Taiwan', 'South Korea', 'Iraq', 'Cambodia', 
//'Sri Lanka', 'Israel', 'Tajikistan', 'Azerbaijan', 'Georgia', 'China', 'Thailand', 'Indonesia', 'Turkmenistan', 'Turkey',
//'Iran', 'Lebanon', 'Philippines', 'Kuwait', 'Oman', 'Afghanistan', 'Armenia', 'Bangladesh', 'Laos', 'Nepal', 'Myanmar', 
//'United Arab Emirates','Bhutan', 'Jordan', 'Vietnam', 'Brunei', 'Japan', 'Hong Kong', 'Saudi Arabia', 'North Korea', 
//'Mongolia', 'Yemen']

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//Q.NO 2: Get all the countries with a population of less than 2 lakhs using Filter function

var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload= function(){
    var data=request.response
    var result=JSON.parse(data)
    var res=result.filter((ele)=>ele.population<200000)
    var res1=res.map((ele)=>ele.name.common);
    console.log(res1);
}

//OUTPUT:(62) ['Aruba', 'Wallis and Futuna', 'Åland Islands', 'Pitcairn Islands', 'Seychelles', 'French Southern and
// Antarctic Lands', 'Christmas Island', 'Saint Martin', 'Heard Island and McDonald Islands', 'Antarctica', 'Greenland',
// 'British Indian Ocean Territory', 'Saint Lucia', 'Niue', 'Saint Barthélemy', 'Grenada', 'Isle of Man', 'Curaçao', 
//'Dominica', 'Faroe Islands', 'Montserrat', 'Cook Islands', 'Bermuda', 'San Marino', 'Cayman Islands', 
//'Cocos (Keeling) Islands', 'United States Virgin Islands', 'Norfolk Island', 'Nauru', 'Bouvet Island', 'Micronesia', 
//'American Samoa', 'Anguilla', 'Marshall Islands', 'Kiribati', 'Northern Mariana Islands', 'Guam', 'Gibraltar', 
//'Vatican City', 'Jersey', 'Tuvalu', 'Saint Helena, Ascension and Tristan da Cunha', 'Samoa', 'Guernsey', 'Tonga',
// 'Saint Kitts and Nevis', 'Falkland Islands', 'Palau', 'Turks and Caicos Islands', 'British Virgin Islands', 
//'Liechtenstein', 'Andorra', 'Tokelau', 'Sint Maarten', 'United States Minor Outlying Islands', 'Antigua and Barbuda',
// 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'South Georgia', 'Caribbean Netherlands', 'Monaco',
// 'Svalbard and Jan Mayen'](62) ['Aruba', 'Wallis and Futuna', 'Åland Islands', 'Pitcairn Islands', 'Seychelles', 
//'French Southern and Antarctic Lands', 'Christmas Island', 'Saint Martin', 'Heard Island and McDonald Islands', 
//'Antarctica', 'Greenland', 'British Indian Ocean Territory', 'Saint Lucia', 'Niue', 'Saint Barthélemy', 'Grenada',
// 'Isle of Man', 'Curaçao', 'Dominica', 'Faroe Islands', 'Montserrat', 'Cook Islands', 'Bermuda', 'San Marino', 
//'Cayman Islands', 'Cocos (Keeling) Islands', 'United States Virgin Islands', 'Norfolk Island', 'Nauru', 'Bouvet Island',
// 'Micronesia', 'American Samoa', 'Anguilla', 'Marshall Islands', 'Kiribati', 'Northern Mariana Islands', 'Guam', 
//'Gibraltar', 'Vatican City', 'Jersey', 'Tuvalu', 'Saint Helena, Ascension and Tristan da Cunha', 'Samoa', 'Guernsey',
// 'Tonga', 'Saint Kitts and Nevis', 'Falkland Islands', 'Palau', 'Turks and Caicos Islands', 'British Virgin Islands',
// 'Liechtenstein', 'Andorra', 'Tokelau', 'Sint Maarten', 'United States Minor Outlying Islands', 'Antigua and Barbuda', 
//'Saint Pierre and Miquelon','Saint Vincent and the Grenadines', 'South Georgia', 'Caribbean Netherlands', 'Monaco', 
//'Svalbard and Jan Mayen']

//-------------------------------------------------------------------------------------------------------------------

//Q.NO 3: Print the following details name, capital, flag using forEach function


var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var data=request.response;
    var result=JSON.parse(data);
    var res=result.forEach((ele)=>{
        console.log(`Name: ${ele.name}, "Capital": ${ele.capital}, "Flag": ${ele.flag}`)
    })
}
//----------------------------------------------------------------------------------------------------------------------


//Q.NO 4:Print the total population of countries using reduce function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data)
    var res=result.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res)
}

//OUTPUT: 7777721563

//------------------------------------------------------------------------------------------------------------------

//Q.NO 5:Print the country which uses US Dollars as currency.


//THIS IS MY REFERENCE-------------------------------------
// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://restcountries.com/v3.1/all")
// xhr.send();
// xhr.onload = () => {
//     let data = JSON.parse(xhr.response)
   
//     let answer = data.filter((ele) => (ele.currencies !== undefined))
    
//     let realanswer = answer.filter((ele) =>  {
//     for (let key in ele.currencies) {
//         if(ele.currencies[key].name === "United States dollar"){
//       return ele
//       }
//     }
//     })
//     console.log( realanswer[0].name.common)
// }----------------------------------------------------------



var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3/all");
request.send();
request.onload = function(){
    var data=request.response
  var result=JSON.parse(data);
  var res=result.filter((ele)=>ele.currencies !=="United States dollar")
  var res1=res.filter((ele)=>{
    for(var i in ele.currencies){
        if(ele.currencies[i].name === "United States dollar"){
            console.log(ele.name.common)
        }
        }
  })
  
}


//OUT PUT:
 //El Salvador
 //Cambodia
 //Turks and Caicos Islands
 //American Samoa
 //Caribbean Netherlands
 //Palau
 //Panama
 //Ecuador
 //British Virgin Islands
 //British Indian Ocean Territory
 //Marshall Islands
 //Timor-Leste
 //United States Minor Outlying Islands
 //Puerto Rico
 //Guam
 //United States
 //Bahamas
 //Northern Mariana Islands
 //Micronesia
 //United States Virgin Islands
















