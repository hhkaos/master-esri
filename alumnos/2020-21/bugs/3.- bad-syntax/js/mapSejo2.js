    var mapSejo;
    var tb;

/* INTRODUCIR TODOS LOS REQUIRE Y FUNCTIONS NECESARIOS PARA LAS DIFERENTES FUNCIONES, WIDGETS, ETC */   

    require([
        "esri/map",
        "esri/layers/ArcGISDynamicMapServiceLayer",
        "esri/geometry/Extent",

        "esri/dijit/Legend",
        "esri/dijit/Scalebar",                    
        "esri/dijit/Search",
        "esri/dijit/BasemapGallery",

        "esri/dijit/OverviewMap",

        "esri/toolbars/draw",
        "esri/graphic",

        "esri/symbols/SimpleFillSymbol",
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/SimpleMarkerSymbol",
        
        "esri/dijit/InfoWindow",
        

        "dojo/on",
        
        
        "dijit/layout/TabContainer",
        "dijit/layout/ContentPane",
        "dijit/layout/BorderContainer",
        "dojo/domReady!",
                
      ],
        function(
          Map,
          ArcGISDynamicServiceLayer,
          Extent,

          Legend,
          Scalebar,                         
          Search,
          BasemapGallery,

          OverviewMap,

          Draw,
          Graphic,
          
          SimpleFillSymbol, SimpleLineSymbol, SimpleMarkerSymbol,

          InfoWindow,
          
          on                    

        ) {
   
        
/* DEFINICIÓN DE LA EXTENSIÓN INICIAL DEL MAPA */

        var extInicial = new Extent ({
          "xmin":-100,
          "ymin":30,
          "xmax":-70,
          "ymax":75,
          "spatialReference":{"wkid":4326}
        });

/* CREACIÓN DEL MAPA */

        mapSejo = new Map( "map", {
          basemap:"topo",
          extent : extInicial
        });

        mapSejo.on("load",function(evt){
          mapSejo.resize();
          mapSejo.reposition(); 
        });

/* CARGAR EL SERVICIO DE MAPAS CON ARCGISDYNAMICSERVICELAYER */

        var lyrUSA = new ArcGISDynamicServiceLayer ("http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/",{
          opacity: 0.4});
        mapSejo.addLayers([lyrUSA]);

/* CREACION DEL WIDGET OVERVIEW */

        var overviewMapDijit = new OverviewMap ({
          map: mapSejo,
          visible: true,
          attachTo: "bottom-right",
        },);  
        overviewMapDijit.startup();


/* AÑADIR LA LEYENDA AL PANEL LEYENDA MEDIANTE LEGEND*/

        mapSejo.on("layers-add-result", function(){
          var dijitLeyenda = new Legend({
            map: mapSejo,
            arrangement: Legend.ALIGN_LEFT
          }, "legendDiv");
          dijitLeyenda.startup();
        });

/* CREACIÓN DEL WIDGET BARRA DE ESCALA CON SCALEBAR */        

        var barraEscala = new Scalebar ({
            map: mapSejo,
            scalebarUnit: "dual",
        });

/* CREACIÓN DEL WIDGET SEARCH CON SEARCH */

        var dijitSearch = new Search ({
          map: mapSejo,
          autoComplete: true
        }, "Buscar");           
        dijitSearch.startup();

/* CREACIÓN DEL WIDGET CON LOS MAPAS BASE, EN HTLM SE HA CREADO UN PANEL "GALERIA MAPA" */

        var basemapGallery = new BasemapGallery ({
                  showArcGISBasemaps: true,
                  map: mapSejo},"GaleriaMapa");
                basemapGallery.startup();
                });

/* HERRAMIENTA POLIGONO - comprobar - he eliminado el encabezado del ejercicio original
* No sé como enlazar el boton con la herramienta
* Tampoco consigo que la herramienta funcione
*/ 

        on(dojo.byId("progButtonNode"),"click",initDrawTool);
        
        function initDrawTool() {
          var tbDraw = new Draw(mapSejo);
          tbDraw.on("draw-end",displayPolygon);
          tbDraw.activate(Draw.POLYGON);
        }
      
        function displayPolygon(evt) {
          var geometryInput = evt.geometry;
                    
          var tbDrawSymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT, new Color([255, 255, 0]), 2), new Color([255, 255, 0, 0.2]));
                   
          mapSejo.graphics.clear();
      
          var graphicPolygon = new Graphic (geometryInput,tbDrawSymbol);
          mapSejo.graphics.add(graphicPolygon);
         } 


/* DEFINICIÓN DE SIMBOLOGIA */         
          
         function selectCities (geometryInput);

          var symbolSelected = new SimpleMarkerSymbol ({
            "type": "esriSMS",
                    "style": "esriSMSCircle",
                    "color": [255, 115, 0, 128],
                    "size": 6,
                    "outline": {
                        "color": [255, 0, 0, 214],
                        "width": 1
                    }
          });

          var queryCities = new Query();
          queryCities.geometry = geometryInput;


          lyrUSA.selectFeatures (queryCities, FeatureLayer.SELECTION_NEW);
/*


                // Call the next function
                selectQuakes(geometryInput);
            }

            function selectQuakes(geometryInput) {

                // Define symbol for selected features (using JSON syntax for improved readability!)
                var symbolSelected = new SimpleMarkerSymbol({
                    
                });


                /*
                 * Step: Set the selection symbol
                 */
                lyrQuakes.setSelectionSymbol(symbolSelected);


               
                /*
                 * Step: Wire the layer's selection complete event
                 */
                lyrQuakes.on("selection-complete", populateGrid);


                /*
                 * Step: Perform the selection
                 */
                lyrQuakes.selectFeatures(queryQuakes,FeatureLayer.SELECTION_NEW);

            }

            

*/         
      
        