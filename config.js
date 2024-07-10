const topBarCenterText = `PD1BER- JO22xe15`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/pd1ber", "1.7"],
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    "1",
  ],
  ["2196F3", "HF DX VIEW", "https://hf.dxview.org/", "1"],
  [
    "2196F3",
    "My last 20 QSO",
    "https://www.hrdlog.net/hrdlogframe.aspx?user=PD1BER&lastqso=10&qsomap=&options=viewonair;showmysig;" width="100%" height="500" scrolling="auto"",
    "1",
    "R",
  ],
  ["2196F3", "TIME IS", "https://time.is/Ugchelen", "1.2"],
  [
    "2196F3",
    "SDR FM RADO 3M",
    "http://77.162.198.96:8082/",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "HET WEER VAN VAN DAAG",
    "https://openweathermap.org/weathermap?basemap=map&cities=false&layer=radar&lat=52.1881&lon=5.9312&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=7.75,51.73,23041/loc=5.931,52.188",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  ["RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KNQA_loop.gif",
  ],
  [
    "My last 20 QSO",
    "https://www.hrdlog.net/hrdlogframe.aspx?user=PD1BER&lastqso=10&qsomap=&options=viewonair;showmysig;" width="100%" height="500" scrolling="auto"",
  ],
  [
    "ISS POSITION",
    "https://isstracker.pl/en?satId=25544",
  ],
  [
    "BUIEN ALARM",
    "https://www.buienalarm.nl/apeldoorn-gelderland-nederland/52.21,5.96944",
  ],
  [
    "SONDEHUB",
    "https://sondehub.org/#!mt=Mapnik&mz=8&qm=0&mc=52.1874,5.92987",
  ],
  [
    "AMATEUR SONDEHUB ",
    "https://amateur.sondehub.org/#!mt=Mapnik&mz=5&qm=1h&mc=52.1874,5.91064",
  ],
  [
    "LIGHTNING",
    "https://www.lightningmaps.org/?lang=nl#m=ses;t=3;s=0;o=0;b=0.00;ts=0;d=2;dl=8;dc=0;src=6;y=51.9341;x=5.5316;z=7;dn=1;tc=1;tr=1;",
  ],
  
  ["GREY LINE", "https://www.timeanddate.com/scripts/sunmap.php?iso=now"],
  [
    "LIVE MUF V7 MAPPING",
    "https://webcam.io/webcams/zaYAAz/full-day?repeat=1&delay_start=0&delay_end=1",
  ],
  ["10M PROPAGATION", "https://www.tvcomm.co.uk/g7izu/Autosave/NA_ES_AutoSave.JPG"],
  ["HF PROPAGATION",
  "https://www.hamqsl.com/solar101vhf.php",
  "https://www.hamqsl.com/solar100sc.php",
  "https://www.hamqsl.com/solarpich.php"],
  
  ],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [11200,10000,11000,10100,10200,10500,10300,10600,10400,10700,10900,10800];
