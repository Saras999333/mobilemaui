// Initialize Windy API
windyInit(options, windyAPI => {
    const { map, broadcast, store }: any = windyAPI;
    map.dragging.disable();
    delete map.dragging._draggable;
    map.options.worldCopyJump = false;
    map.dragging.enable();

    const { map } = windyAPI;
    // .map is instance of Leaflet map
    L.popup()
        .setLatLng([50.4, 14.3])
        .setContent('Hello World')
        .openOn(map);
});
