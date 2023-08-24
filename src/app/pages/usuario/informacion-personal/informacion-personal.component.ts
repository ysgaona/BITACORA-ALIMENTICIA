import { Component } from '@angular/core';
import { SaludNutricionAppService } from 'src/app/core/services/salud-nutricion-app.service';
import { Informacion } from 'src/app/model/informacion/informacion';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.scss']
})
export class InformacionPersonalComponent {
  constructor(private saludNutricionAppService: SaludNutricionAppService) {}

  registroInformacion(genero: string, peso: string, edad: string): void {
    const informacion: Informacion = {
      genero: genero,
      peso: Number(peso),
      edad: Number(edad)
    };

    this.saludNutricionAppService.almacenarInfoPerso(informacion);
  }
}
