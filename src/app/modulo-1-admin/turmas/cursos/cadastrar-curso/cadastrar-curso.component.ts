import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-cadastrar-curso',
  templateUrl: './cadastrar-curso.component.html',
  styleUrls: ['./cadastrar-curso.component.css']
})
export class CadastrarCursoComponent {

  mensagem: string = '';


  constructor(
    private httpClient: HttpClient
  ) {}
  formCurso = new FormGroup({
    curso: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    conteudo: new FormControl('', [Validators.required]),
    modelo_certificado: new FormControl('', [Validators.required]),
    campo_especifico: new FormControl('', [Validators.required]),
    tituloautorizacao: new FormControl('', [Validators.required]),
    itemdaautorizacao: new FormControl('', [Validators.required]),
    conteudodaautorizacao: new FormControl('', [Validators.required]),
	
      });

      get form(): any {
        return this.formCurso.controls;
      }

      onSubmit(): void {
        this.httpClient
        .post('http://localhost:8082/api/cursos',
        this.formCurso.value
       

       )

        .subscribe({
          next: (data: any) => {
            this.mensagem = `Curso cadastrado com sucesso!`;

          },
          error: (e) => {

            console.log(e.error);

          }
        })

      
}
}
