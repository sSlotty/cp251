jQuery(document).ready(function () {
    jQuery('#map').css('height', window.innerHeight);
});

const Rat =
    '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">สวนหลวง ร.9</h1>' +
    '<div id="bodyContent">' +
    '<p>เป็นสวนสาธารณะที่มีเนื้อที่ค่อนข้างกว้างอยู่ที่ประมาณ 500 ไร่ เป็นสถานที่พักผ่อนหย่อนใจและสถานที่ออกกำลังกายเหมาะสำหรับทุกเพศทุกวัย</p>' +
    '<p>ถนนเฉลิมพระเกียรติรัชกาลที่ 9 แขวง หนองบอน เขต ประเวศ กรุงเทพมหานคร 10250</p>' +
    '<a href="http://www.suanluangrama9.or.th/">www.suanluangrama9.or.th</a> ' +
    '.</p>' +
    '</div>' +
    '</div>';

const Icon =
    '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">สวนวชิรเบญจทัศ</h1>' +
    '<div id="bodyContent">' +
    '<p>สวนวชิรเบญจทัศ หรือที่นิยมเรียกว่า สวนรถไฟ เป็นสวนสาธารณะขนาดใหญ่ มีเนื้อที่กว่า 375 ไร่ มีเนื้อที่ติดกับสวนสาธารณะอีก 2 สวน คือ สวนสมเด็จพระนางเจ้าสิริกิติ์ฯ และสวนจตุจักร</p>' +
    '<p>ถนนกำแพงเพชร 3 แขวงจตุจักร เขตจตุจักร กรุงเทพมหานคร 10900</p>' +
    '<a href="https://travel.trueid.net/detail/vX3wMWO6Oxp">https://travel.trueid.net/สวนรถไฟ</a> ' +
    '.</p>' +
    '</div>' +
    '</div>';

const Sam =
    '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">สวนลุมพินี</h1>' +
    '<div id="bodyContent">' +
    '<p>หากต้องการพักผ่อนสบาย รื่นรมย์ไปด้วยธรรมชาติ เดินทางสะดวก หากกลัวรถติดก็มีทางเลือกคือนั่งรถไฟฟ้า ซึ่งเป็นระบบการขนส่งที่ช่วยประหยัดพลังงานและลดโลกร้อน</p>' +
    '<p>แขวงลุมพินี เขตปทุมวัน กรุงเทพมหานคร 10330</p>' +
    '<a href="https://travel.kapook.com/view21504.html">travel.kapook.com/สวนลุมพินี</a> ' +
    '.</p>' +
    '</div>' +
    '</div>';

const Fortune =
    '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">สวนเสรีไทย</h1>' +
    '<div id="bodyContent">' +
    '<p>สวนน้ำกว้างใหญ่แห่งนี้มีที่มาจากโครงการพระราชดำริของพระบาทสมเด็จพระเจ้าอยู่หัว เพื่อจุดประสงค์หลักในการเป็นบึงรับน้ำฝนขนาดใหญ่ด้านตะวันออกของกรุงเทพฯ เพื่อใช้ป้องกันแก้ไขปัญหาน้ำท่วม</p>' +
    '<p>43 ซอย เสรีไทย 41 แขวง คลองกุ่ม เขต บึงกุ่ม กรุงเทพมหานคร 10230</p>' +
    '<a href="https://cities.trueid.net/article/%E0%B8%A7%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B8%99%E0%B8%94%E0%B8%B5-%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%AA%E0%B8%A3%E0%B8%B5%E0%B9%84%E0%B8%97%E0%B8%A2-serithai-park-trueidintrend_161881">www.trueid.net/สวนเสรีไทย</a> ' +
    '.</p>' +
    '</div>' +
    '</div>';

const Siam =
    '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">สวนธนบุรีรมย์</h1>' +
    '<div id="bodyContent">' +
    '<p>สวนธนบุรีรมย์หรือที่รู้จักกันอย่างกว้างขวางว่าสวนธนเป็นสวนสาธารณะแห่งแรกในธนบุรีกรุงเทพมหานครประเทศไทย สวนสาธารณะมีพื้นที่สาธารณะเปิดโล่งต้นไม้และสนามเด็กเล่นที่หายาก มีเนื้อที่ทั้งหมด 63 ไร่</p>' +
    '<p>Mu 2, Pracha-uthit Road, Tung Kru District</p>' +
    '<a href="https://www.wongnai.com/reviews/04527a52aaab4ccdbb361aa99de5a15b">www.wongnai.com/สวนธนบุรีรมย์</a> ' +
    '.</p>' +
    '</div>' +
    '</div>';

var locations = [
    [Rat, 13.6882, 100.6660, 1],
    [Icon, 13.8124, 100.5541, 2],
    [Sam, 13.7336, 100.5422, 3],
    [Fortune, 13.7870, 100.6743, 4],
    [Siam, 13.6519, 100.4914, 5]
];

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: new google.maps.LatLng(13.736717, 100.523186),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i, mark;

const image = "https://www.flaticon.com/svg/static/icons/svg/561/561237.svg";
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

const pin = "https://www.flaticon.com/svg/static/icons/svg/561/561237.svg";
const locationButton = document.createElement("button");
locationButton.textContent = "Pin to Current Location";
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