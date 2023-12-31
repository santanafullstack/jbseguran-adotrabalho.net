import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import 'select2'; // Adicione esta importação
import { NgSelectConfig } from '@ng-select/ng-select';
@Component({
  selector: 'app-cadastrar-turmas',
  templateUrl: './cadastrar-turmas.component.html',
  styleUrls: ['./cadastrar-turmas.component.css']
})
export class CadastrarTurmasComponent implements OnInit {

  @ViewChild('planoSelect') planoSelect!: ElementRef;



  mensagem: string = '';
  formTurmas: FormGroup;
  cursos: any [] = []
  unidades: any [] = []


  ngOnInit(): void {
    this.httpClient.get('http://localhost:8082/api/cursos'
    )
    .subscribe({ 
      next: (data) => { 
        this.cursos = data as any[];

      },
      error: (e) => { //recebe o retorno de erro da API
        console.log(e);
      }
    });

    this.httpClient.get('http://localhost:8082/api/unidadedetreinamento')
    .subscribe({ 
      next: (data) => { 
        this.unidades = data as any[];
      },
      error: (e) => { //recebe o retorno de erro da API
        console.log(e);
      }
    });

  }


  constructor(
    private httpClient: HttpClient,
     private formBuilder: FormBuilder,
     private config: NgSelectConfig

     ) {
    this.formTurmas = this.formBuilder.group({
      idCurso: ['', [Validators.required]],
      idUnidadeDeTreinamento: ['', [Validators.required]],
      datainicio: ['', [Validators.required]],
      datafim: ['', [Validators.required]],
      cargahoraria: ['', Validators.required],
      modalidade: ['', Validators.required],
      status: ['', Validators.required],
      descricao: ['', Validators.required],
      diasespecificos: ['', Validators.required],
      tipo: ['', Validators.required],
      nivel: ['', Validators.required],
      validade: ['', Validators.required],
      dia: ['', Validators.required],
      mes: ['', Validators.required],
      ano: ['', Validators.required],
      primeirodia: ['', Validators.required],
      segundodia: ['', Validators.required],
      terceirodia: ['', Validators.required],
      quartodia: ['', Validators.required],
      quintodia: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.formTurmas.valid) {
      // Formate as datas para o formato ISO 8601
      const dataInicio = this.formatDate(this.formTurmas.value.datainicio);
      const dataFim = this.formatDate(this.formTurmas.value.datafim);
  
      // Atualize as datas no objeto do formulário
      this.formTurmas.patchValue({
        datainicio: dataInicio,
        datafim: dataFim
      });
  
      // Enviar o formulário para o endpoint
      this.httpClient
        .post('http://localhost:8082/api/turmas', this.formTurmas.value)
        .subscribe({
          next: (data: any) => {
            this.mensagem = `Turma cadastrada com sucesso!`;
            // Limpar o formulário ou realizar ações adicionais, se necessário
            this.formTurmas.reset();
          },
          error: (e) => {
            console.log(e.error);
            // Realizar ações de tratamento de erro, se necessário
          }
        });
    } else {
      // Realize alguma ação ou exiba uma mensagem de erro se o formulário for inválido
    }
  }
  
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date.toISOString(); // Formatar para ISO 8601
    } else {
      console.error('Data inválida:', dateString);
      return ''; // Ou outra ação apropriada
    }
  }
}  