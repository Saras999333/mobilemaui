//const options = {
//    // Required: API key
//    key: 'av5v5IW8jN99te7NY8SCUOn6jWG3yT5u',
//    // Put additional console output
//    overlay: 'waves',
//    verbose: false,
//    zoom: 2,
//    lat: 14,
//    lon: 24,
//};

//// Initialize Windy API
//windyInit(options, windyAPI => {
//    const { map, broadcast, store }: any = windyAPI;
//    map.dragging.disable();
//    delete map.dragging._draggable;
//    map.options.worldCopyJump = false;
//    map.dragging.enable();

//    const { map } = windyAPI;
//    // .map is instance of Leaflet map

//    L.popup()
//        .setLatLng([50.4, 14.3])
//        .setContent('Hello World')
//        .openOn(map);
//});