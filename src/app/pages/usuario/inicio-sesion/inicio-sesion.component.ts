import { Component } from '@angular/core';
import { SaludNutricionAppService } from 'src/app/core/services/salud-nutricion-app.service';
import { Usuario } from 'src/app/model/user/usuario';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent {

  constructor(private saludNutricionAppService: SaludNutricionAppService) {}

  loginUsuario(username: string, password: string): void {
    const usuario: Usuario = {
      username: username,
      password: password
    };

    this.saludNutricionAppService.login(usuario);
  }
}
