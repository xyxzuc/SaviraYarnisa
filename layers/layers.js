var wms_layers = [];

var format_shppenggunaanlahan_0 = new ol.format.GeoJSON();
var features_shppenggunaanlahan_0 = format_shppenggunaanlahan_0.readFeatures(json_shppenggunaanlahan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shppenggunaanlahan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shppenggunaanlahan_0.addFeatures(features_shppenggunaanlahan_0);
var lyr_shppenggunaanlahan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_shppenggunaanlahan_0, 
                style: style_shppenggunaanlahan_0,
                interactive: true,
                title: '<img src="styles/legend/shppenggunaanlahan_0.png" /> shp penggunaan lahan'
            });

lyr_shppenggunaanlahan_0.setVisible(true);
var layersList = [lyr_shppenggunaanlahan_0];
lyr_shppenggunaanlahan_0.set('fieldAliases', {'id': 'id', });
lyr_shppenggunaanlahan_0.set('fieldImages', {'id': '', });
lyr_shppenggunaanlahan_0.set('fieldLabels', {'id': 'no label', });
lyr_shppenggunaanlahan_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});