import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  spinner = false;
  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private route: Router,
    private toastr: ToastrService) {
    this.usuarioForm = this.fb.group({
      matricula: ["", [Validators.required, Validators.minLength(5)]]
    })
   }

  ngOnInit(): void {
    sessionStorage.setItem('usuario', "none");
  }

  buscarUsuario(){

    this.spinner = true;

    if(this.usuarioForm.invalid){
      this.spinner = false;
      return;
    }
    
    const matricula = this.usuarioForm.get('matricula')?.value;

    this.usuarioService.buscarUsuario(matricula).subscribe(data => {
      if(data.length > 0){
        this.spinner = false;
        sessionStorage.setItem('usuario', "init");
        this.route.navigateByUrl('resultado');
      }
      else{
        this.spinner = false;
        this.toastr.error("No se encontró esta matrícula.", "Error", {
          progressBar: true,
          timeOut: 5000
        })
        return;
      }
    })
  }

  estiloInput(inputName: string): string{
    let resp = "";

    if(this.usuarioForm.get(inputName)?.invalid && this.usuarioForm.get(inputName)?.touched)
      resp ="red";
    else if(this.usuarioForm.get(inputName)?.valid && this.usuarioForm.get(inputName)?.touched) 
      resp = "green";
    else
      resp = "black";
    
    return resp;
  }

}
