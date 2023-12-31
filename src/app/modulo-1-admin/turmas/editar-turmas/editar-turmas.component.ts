import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import 'select2'; // Adicione esta importação
import { NgSelectConfig } from '@ng-select/ng-select';



@Component({
  selector: 'app-editar-turmas',
  templateUrl: './editar-turmas.component.html',
  styleUrls: ['./editar-turmas.component.css']
})


export class EditarTurmasComponent implements OnInit {
  @ViewChild('planoSelect') planoSelect!: ElementRef;


  mensagem: string = '';
  formEdicaoTurmas: FormGroup;
  cursos: any [] = []
  unidades: any [] = []

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private config: NgSelectConfig

  ) {
    this.formEdicaoTurmas = this.formBuilder.group({
      idTurmas: ['', Validators.required],
      idcurso: ['', Validators.required],
      idUnidadedetreinamento: ['', Validators.required],
      datainicio: ['', Validators.required],
      datafim: ['', Validators.required],
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
  ngOnInit(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.httpClient.get('http://localhost:8082/api/turmas/' + id)
      .subscribe({
        next: (data: any) => {
          this.formEdicaoTurmas.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      })

      this.httpClient.get('http://localhost:8082/api/unidadedetreinamento')
      .subscribe({ 
        next: (data) => { 
          this.unidades = data as any[];
        },
        error: (e) => { //recebe o retorno de erro da API
          console.log(e);
        }
      });

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
  
  }

  onSubmit(): void {
    if (this.formEdicaoTurmas.valid) {
      // Formate as datas para o formato ISO 8601
      const dataInicio = this.formatDate(this.formEdicaoTurmas.value.datainicio);
      const dataFim = this.formatDate(this.formEdicaoTurmas.value.datafim);
  
      // Atualize as datas no objeto do formulário
      this.formEdicaoTurmas.patchValue({
        datainicio: dataInicio,
        datafim: dataFim
      });
  
      // Enviar o formulário para o endpoint
      this.httpClient
        .put('http://localhost:8082/api/turmas', this.formEdicaoTurmas.value)
        .subscribe({
          next: (data: any) => {
            this.mensagem = `Turma Atualizada com sucesso!`;
            // Limpar o formulário ou realizar ações adicionais, se necessário
            this.formEdicaoTurmas.reset();
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