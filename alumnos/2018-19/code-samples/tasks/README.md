# Tasks / Tareas

Todas las tareas realizan peticiones HTTP a los servicios REST y por tanto son asíncronas. Se pueden agrupar las tareas por la función que cumplen:

|Funcionalidad|Tarea|Tipo de servicio|
|---|---|---|
|Consulta|[IdentifyTask](https://developers.arcgis.com/javascript/3/jsapi/identifytask-amd.html)<br>[QueryTask](https://developers.arcgis.com/javascript/3/jsapi/querytask-amd.html)<br>[FindTask](https://developers.arcgis.com/javascript/3/jsapi/findtask-amd.html)|**[MapServer](https://developers.arcgis.com/rest/services-reference/map-service.htm)** (ej: [demographics sample](https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Census_USA/MapServer/), ...)
|Geocodificación|[Locator](https://developers.arcgis.com/javascript/3/jsapi/locator-amd.html)|**[GeocodeServer](http://enterprise.arcgis.com/en/server/latest/publish-services/linux/geocode-services.htm)** (ej: [World (GeocodeServer)](https://geocodedev.arcgis.com/arcgis/rest/services/World/GeocodeServer), ...)
|Análisis de redes|[RouteTask](https://developers.arcgis.com/javascript/3/jsapi/routetask-amd.html)<br>[ServiceAreaTask](https://developers.arcgis.com/javascript/3/jsapi/serviceareatask-amd.html)<br>[ClosestFacilityTask](https://developers.arcgis.com/javascript/3/jsapi/closestfacilitytask-amd.html)|**[NAServer](https://developers.arcgis.com/rest/services-reference/network-service.htm)** (ej: [network sample USA](https://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Network/USA/NAServer/Service Area), ...)
|Geoprocesamiento e impresión|[Geoprocessor](https://developers.arcgis.com/javascript/3/jsapi/geoprocessor-amd.html)<br>[PrintTask](https://developers.arcgis.com/javascript/3/jsapi/printtask-amd.html)|**[GPServer](http://enterprise.arcgis.com/en/server/latest/publish-services/linux/what-is-a-geoprocessing-service-.htm)** (ej: [Printing tools](https://sampleserver6.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer), [DriveTime](https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Network/ESRI_DriveTime_US/GPServer), [911Hotspots](https://sampleserver6.arcgisonline.com/arcgis/rest/services/911CallsHotspot/GPServer), [Viewshed](https://sampleserver6.arcgisonline.com/ArcGIS/rest/services/Elevation/ESRI_Elevation_World/GPServer?f=json), [Demographics](https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Population_World/GPServer), ...)
|Operaciones geométricas|[GeometryService](https://developers.arcgis.com/javascript/3/jsapi/geometryservice-amd.html)| **[GeometryServer](https://developers.arcgis.com/rest/services-reference/geometry-service.htm)** (ej: [sample geometry server](https://sampleserver6.arcgisonline.com/arcgis/rest/services/Utilities/Geometry/GeometryServer), ...)
|Renderizado|[GenerateRendererTask](https://developers.arcgis.com/javascript/3/jsapi/generaterenderertask-amd.html)|**[MapServer](https://developers.arcgis.com/rest/services-reference/map-service.htm)** (ej: [demographics sample](https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Census_USA/MapServer/), ...)

## Tutoriales:

* [Adding a task](https://developers.arcgis.com/javascript/3/jshelp/intro_firsttask.html)
* [Using QueryTask, Query, and FeatureSet](https://developers.arcgis.com/javascript/3/jshelp/intro_querytask.html)
* [Geoprocessing overview](https://developers.arcgis.com/javascript/3/jshelp/intro_gp_overview.html)

## Ejemplos de código

* [Ejemblo básico de QueryTask](./QueryTask.html) ([Live demo](https://hhkaos.github.io/master-esri/alumnos/2018-19/code-samples/tasks/QueryTask.html))
* [Ejemplo básico de Locator](./Locator.html) ([Live demo](https://hhkaos.github.io/master-esri/alumnos/2018-19/code-samples/tasks/Locator.html))
* [Ejemplo ServiceAreaTask básico](./ServiceAreaTask.html) ([Live demo](https://hhkaos.github.io/master-esri/alumnos/2018-19/code-samples/tasks/ServiceAreaTask.html))
