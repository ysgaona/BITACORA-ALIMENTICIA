import { Component } from '@angular/core';
import { SaludNutricionAppService } from 'src/app/core/services/salud-nutricion-app.service';
import { Usuario } from 'src/app/model/user/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  constructor(private saludNutricionAppService: SaludNutricionAppService) {}

  crearUsuario(username: string, password: string) {
    const usuario: Usuario = {
      username: username,
      password: password
    }
    this.saludNutricionAppService.registroUser(usuario);
  }
}
