// for navigator language
//var lang = window.navigator.language;
// you can change the language
var lang = 'en';

//change weather params here:
//units: metric or imperial
var weatherParams = {
    'q':'Quarouble,France',
    'units':'metric',
    'lang':lang,
    'APPID':'7bb74970c25c619069da67f691a784dd' // YOUR_FREE_OPENWEATHER_API_KEY
};

var feed = 'https://news.google.it/news?cf=all&hl=it&pz=1&ned=it&output=rss';
var feed = 'http://www.lavoixdunord.fr/feed/27/default_destination_block_accueil';
//var feed = 'http://www.nu.nl/feeds/rss/opmerkelijk.rss';
//var feed = 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml';

// compliments:
var morning = [
            'Good morning, handsome!',
            'Enjoy your day!',
            'How was your sleep?'
        ];
        
var afternoon = [
            'Hello, beauty!',
            'You look sexy!',
            'Looking good today!'
        ];
       
var evening = [
            'Wow, you look hot!',
            'You look nice!',
            'Hi, sexy!'
        ];