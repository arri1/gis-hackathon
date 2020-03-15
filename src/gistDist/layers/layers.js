var wms_layers = [];


        var lyr_2gisMap_0 = new ol.layer.Tile({
            'title': '2gis Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> дороги'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> ЗУ'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> ОН'
            });

lyr_2gisMap_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_2gisMap_0,lyr__1,lyr__2,lyr__3];
lyr__1.set('fieldAliases', {'вид': 'вид', 'кад. номер': 'кад. номер', 'кад. кварт': 'кад. кварт', 'статус': 'статус', 'адрес': 'адрес', 'кат. земел': 'кат. земел', 'форма соб': 'форма соб', 'кад. стоим': 'кад. стоим', 'площадь': 'площадь', 'разр. исп': 'разр. исп', 'по док.': 'по док.', });
lyr__2.set('fieldAliases', {'id': 'id', 'кад.н�': 'кад.н�', 'катег': 'катег', 'адрес': 'адрес', 'общ.п�': 'общ.п�', 'форм.�': 'форм.�', 'стату': 'стату', 'кад.к�': 'кад.к�', 'кад.с�': 'кад.с�', });
lyr__3.set('fieldAliases', {'id': 'id', '�����': '�����', '���.���': '���.���', '����������': '����������', '���.������': '���.������', '��� �����.': '��� �����.', '����� ���': '����� ���', '������': '������', '���.����': '���.����', '���.�����': '���.�����', '���.����_1': '���.����_1', });
lyr__1.set('fieldImages', {'вид': '', 'кад. номер': '', 'кад. кварт': '', 'статус': '', 'адрес': '', 'кат. земел': '', 'форма соб': '', 'кад. стоим': '', 'площадь': '', 'разр. исп': '', 'по док.': '', });
lyr__2.set('fieldImages', {'id': '', 'кад.н�': '', 'катег': '', 'адрес': '', 'общ.п�': '', 'форм.�': '', 'стату': '', 'кад.к�': '', 'кад.с�': '', });
lyr__3.set('fieldImages', {'id': '', '�����': '', '���.���': '', '����������': '', '���.������': '', '��� �����.': '', '����� ���': '', '������': '', '���.����': '', '���.�����': '', '���.����_1': '', });
lyr__1.set('fieldLabels', {'вид': 'no label', 'кад. номер': 'no label', 'кад. кварт': 'no label', 'статус': 'no label', 'адрес': 'no label', 'кат. земел': 'no label', 'форма соб': 'no label', 'кад. стоим': 'no label', 'площадь': 'no label', 'разр. исп': 'no label', 'по док.': 'no label', });
lyr__2.set('fieldLabels', {'id': 'no label', 'кад.н�': 'no label', 'катег': 'no label', 'адрес': 'no label', 'общ.п�': 'no label', 'форм.�': 'no label', 'стату': 'no label', 'кад.к�': 'no label', 'кад.с�': 'no label', });
lyr__3.set('fieldLabels', {'id': 'inline label', '�����': 'inline label', '���.���': 'no label', '����������': 'inline label', '���.������': 'header label', '��� �����.': 'no label', '����� ���': 'no label', '������': 'no label', '���.����': 'no label', '���.�����': 'no label', '���.����_1': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});