const topBarCenterText = `PD1BER - JO22xe`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "HOME_PD1BER", "https://pd1ber.wixsite.com/ham-radio", "1"],
  
  ["2196F3", "CODEPLUGS", "https://pd1ber.wixsite.com/pd1ber-tv", "1"],
  [
    "2196F3",
    "RADIO_L.O.V",
    "https://radiolovdelokaleom.wixsite.com/stream",
    "1"],
  ["2196F3", "TE KOOP", "https://pd1ber.wixsite.com/ham-radio-kringloop", "1"],
  [
    "2196F3",
    "HAMQTH.COM",
    "https://www.hamqth.com/PD1BER",
    "1"],
  ["2196F3", "QRZCQ.COM", "https://www.qrzcq.com/call/PD1BER", "1"],
  [
    "2196F3",
    "MAPFORHAM",
    "https://www.mapforham.com/om/pd1ber.html",
    "1"],
  ["2196F3", "FACEBOOK", "https://www.facebook.com/pd1ber/", "1"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=52.1879&lon=5.9310&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
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
  ["pd1ber logo", "https://media.licdn.com/dms/image/C5603AQGGlcsxupBEFw/profile-displayphoto-shrink_200_200/0/1563965350301?e=2147483647&v=beta&t=yJRA1-zXvfWe92S7fooutUxrN_LSQ94DcrVDW2W6-Ds"],
  [
    "ISS TRACKER",
    "http://wsn.spaceflight.esa.int/iss/index_portal.php",
  ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
  ],
  [
    "ISS & RS-44 POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909",
  ],
  [
    "SEISMIC ACTIVITY",
    "https://ds.iris.edu/seismon/views/eveday_big//imgs/topMap.eveday_big.gif",
  ],
  [
    "CQ ZONE",
    "https://www.mapability.com/ei8ic/maps/CQ_Zones_01.png",
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
  ],
  [
    "LIGHTNING LOCAL",
    "https://www.blitzortung.org/en/Images/image_b_ny.png",
  ],
  ["GREY LINE", "https://www.timeanddate.com/scripts/sunmap.php?iso=now"],
  [
    "MUF",
    "https://prop.kc2g.com/renders/current/mufd-normal-now.svg"],
  ["10M PROPAGATION", "https://www.tvcomm.co.uk/g7izu/Autosave/NA_ES_AutoSave.JPG"],
  ["HF PROPAGATION",
  "https://www.hamqsl.com/solar101vhf.php",
  "https://www.hamqsl.com/solar100sc.php",
  "https://www.hamqsl.com/solarpich.php"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [11200,10000,11000,10100,10200,10500,10300,10600,10400,10700,10900,10800];
