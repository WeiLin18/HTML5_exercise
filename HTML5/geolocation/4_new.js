function doFirst(){
    let area = document.getElementById('map');
    let position = new google.maps.LatLng(25.0407411, 121.5484069);
    let options = {
        zoom: 14,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    let map = new google.maps.Map(area, options);

    // let marker = new google.maps.Marker({
    //     position: position,
    //     map: map,
    // });

    let marker = new google.maps.Marker({
        position,  
        map,
        icon: './customizedMap/logo/coffee.png',
        title: '這是哪裡?',
    });
}
window.addEventListener('load',doFirst);