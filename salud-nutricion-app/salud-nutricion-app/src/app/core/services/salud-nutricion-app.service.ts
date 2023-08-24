import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/user/usuario';
import { Informacion } from 'src/app/model/informacion/informacion';

@Injectable({
  providedIn: 'root'
})
export class SaludNutricionAppService {
  private productosURL: string = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario: Usuario): void {
    this.http.post<{ access_token: string }>(this.productosURL+'/login', {
      username: usuario.username,
      password: usuario.password
    })
    .pipe(map(response => {
        localStorage.setItem('authToken', response.access_token);
      })
    ).subscribe();
    this.router.navigate(['/informacion-personal']);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/inicio-sesion']);
  }

  almacenarInfoPerso(informacion: Informacion): void {
    this.http.post(this.productosURL+'/info', {
      genero: informacion.genero,
      peso: informacion.peso,
      edad: informacion.edad
    }).subscribe( () => {
      alert('Información almacenada con éxito')
    });
  }

  registroUser(usuario: Usuario): void {
    this.http.post(this.productosURL+'/user', {
      username: usuario.username,
      password: usuario.password
    }).subscribe( () => {
      alert('Usuario creado con éxito')
    });
    this.router.navigate(['/inicio-sesion']);
  }
}
