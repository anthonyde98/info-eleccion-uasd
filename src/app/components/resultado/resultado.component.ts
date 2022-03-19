import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  usuario!: Usuario
  constructor(private usuarioService: UsuarioService, private router: Router) {
    if(sessionStorage['usuario'] === "none")
      this.router.navigateByUrl("inicio");

    this.usuario = {
      matricula: "", nombres: "", apellidos: "", carrera: "",
      escuela: "", facultad: "", vota: false, lugarVotacion: "", fecha: ""  
    }
   }

  ngOnInit(): void {
    if(sessionStorage['usuario'] === "init"){
      this.usuarioService.obtenerUsuario().subscribe(data => {
        data.forEach(dato => {
          this.usuario = dato;
          sessionStorage.setItem('usuario', JSON.stringify(this.usuario));
        })
      })
    }
    else{
      this.usuario = JSON.parse(sessionStorage.getItem('usuario') || '{}');
    }
  }
}
