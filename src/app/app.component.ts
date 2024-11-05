import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from "./map/map.component";
import { MapGeoserverWMSComponent } from './map-geoserver-wms/map-geoserver-wms.component';
import { MapGeoserverWFSComponent } from './map-geoserver-wfs/map-geoserver-wfs.component';
import { MostrarAtributosComponent } from './mostrar-atributos/mostrar-atributos.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapComponent, MapGeoserverWMSComponent, MapGeoserverWFSComponent, MostrarAtributosComponent, RouterLink ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'arbolesFrontend';
}
