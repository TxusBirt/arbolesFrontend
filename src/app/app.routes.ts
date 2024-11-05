import { Routes } from '@angular/router';
import { MostrarAtributosComponent } from './mostrar-atributos/mostrar-atributos.component';
import { MapGeoserverWFSComponent } from './map-geoserver-wfs/map-geoserver-wfs.component';
import { MapGeoserverWMSComponent } from './map-geoserver-wms/map-geoserver-wms.component';

export const routes: Routes = [
    { path: "lista", component:MostrarAtributosComponent },
    { path: "mapaWFS", component:MapGeoserverWFSComponent },
    { path: "mapaWMS", component:MapGeoserverWMSComponent },
];
