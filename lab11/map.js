jQuery(document).ready(function () {
    jQuery('#map').css('height', window.innerHeight);
});

const Rat =
    '<div id="content">' +
    '<div id="siteNotice">' + "</div>" +
    '<h1 id="firstHeading" class="firstHeading">THE STREET Ratchada</h1>' +
    '<div id="bodyContent">' +
    "<p>Bustling commercial complex featuring a variety of shops, casual restaurants & a 24/7 supermarket.</p>" +
    "<p>Address: 139 Ratchadaphisek Rd, Din Daeng, Bangkok 10400</p>" +
    '<a href="http://www.thestreetratchada.com/">' + "http://www.thestreetratchada.com/</a> " +
    "</div>" +
    "</div>";

const Icon =
    '<div id="content">' +
    '<div id="siteNotice">' + "</div>" +
    '<h1 id="firstHeading" class="firstHeading">ICONSIAM Shopping Mall</h1>' +
    '<div id="bodyContent">' +
    "<p>Vast, stylish mall with hundreds of high-end shops & restaurants, plus an indoor floating market.</p>" +
    "<p>Address: 299 Charoen Nakhon Rd, Khlong Ton Sai, Khlong San, Bangkok 10600</p>" +
    '<a href="https://www.iconsiam.com/">' + "https://www.iconsiam.com/</a> " +
    "</div>" +
    "</div>";

const Sam =
    '<div id="content">' +
    '<div id="siteNotice">' + "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Samyan Mitrtown</h1>' +
    '<div id="bodyContent">' +
    "<p>Contemporary mall & student hangout with a roof terrace, global food outlets, cinema & offices.</p>" +
    "<p>Address: 944 Rama IV Rd, Wang Mai, Pathum Wan District, Bangkok 10330</p>" +
    '<a href="https://www.samyan-mitrtown.com/">' + "https://www.samyan-mitrtown.com/</a> " +
    "</div>" +
    "</div>";

const Fortune =
    '<div id="content">' +
    '<div id="siteNotice">' + "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Fortune Town</h1>' +
    '<div id="bodyContent">' +
    "<p>Shopping mall specializing in computers & IT gear, photographic equipment & audio/visual components.</p>" +
    "<p>Address: 1, 3,5,7 Ratchadaphisek Rd, Din Daeng, Bangkok 10400</p>" +
    '<a href="https://www.facebook.com/FortuneTown/">' + "https://www.facebook.com/FortuneTown/</a> " +
    "</div>" +
    "</div>";

const Siam =
    '<div id="content">' +
    '<div id="siteNotice">' + "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Siam Paragon</h1>' +
    '<div id="bodyContent">' +
    "<p>Luxury Huge shopping center with high-end and famous boutiques, restaurants, aquariums, bowling and multiplexes.</p>" +
    "<p>Address: 991 Rama Low Road Pathum Wan Subdistrict Pathum Wan District Bangkok 10330</p>" +
    '<a href="https://www.siamparagon.co.th/">' + "https://www.siamparagon.co.th/</a> " +
    "</div>" +
    "</div>";

var locations = [
    [Rat, 13.770515, 100.572278, 1],
    [Icon, 13.726051, 100.510111, 2],
    [Sam, 13.733868, 100.527927, 3],
    [Fortune, 13.758512, 100.565121, 4],
    [Siam, 13.7460887, 100.5319794, 5]
];

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: new google.maps.LatLng(13.736717, 100.523186),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i, mark;

const image = "avatar.png";
for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: image
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));
}

const pin = "pointer.png";
const locationButton = document.createElement("button");
locationButton.textContent = "Pan to Current Location";
locationButton.classList.add("custom-map-control-button");
map.controls[google.maps.ControlPosition.TOP_CENTER].push(
    locationButton
);
locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                mark = new google.maps.Marker({
                    position: pos,
                    map: map,
                    icon: pin
                });
                map.setCenter(pos);
            },
            () => {
                handleLocationError(true, mark, map.getCenter());
            }
        );
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, mark, map.getCenter());
    }
});