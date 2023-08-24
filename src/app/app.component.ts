import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaludNutricionAppService } from './core/services/salud-nutricion-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public saludNutricionAppService: SaludNutricionAppService, private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/inicio-sesion']);
  }

  salir() {
    this.saludNutricionAppService.logout();
  }
}
