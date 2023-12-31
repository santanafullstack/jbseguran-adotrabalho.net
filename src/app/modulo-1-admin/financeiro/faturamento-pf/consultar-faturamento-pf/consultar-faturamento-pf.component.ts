import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ConsultarFaturamentoPf } from 'src/app/models/consultar-faturamentopf';

@Component({
  selector: 'app-consultar-faturamento-pf',
  templateUrl: './consultar-faturamento-pf.component.html',
  styleUrls: ['./consultar-faturamento-pf.component.css']
})
export class ConsultarFaturamentoPfComponent  implements OnInit, AfterViewInit{

  @ViewChild('content') popupview!: ElementRef;

  
  faturamento: ConsultarFaturamentoPf| null = null;
  faturamentoSelecionado: any = null;
  faturamentopf: any [] = []
  Invoiceheader: any;
  invoiceno: any;
  dtoptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  pagina: number = 1; 
  filtro: any = { matriculas: '' }; 
  itensPorPagina = 10;
  paginaAtual: number = 1; 
  
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,

  ) {
  }


  exibirMatriculas(faturamento: any) {
    this.faturamentoSelecionado = faturamento;
                 }


  ngAfterViewInit(): void {
    $(document).ready(() => {
      const table = $('#myTable').DataTable({
        
        language: {
          url: 'https://cdn.datatables.net/plug-ins/1.11.6/i18n/Portuguese-Brasil.json'
        }
      });
      
    });
  }
  
  ngOnInit(): void {

    this.httpClient.get('http://localhost:8082/api/faturamentopf')
    .subscribe({ //capturando o retorno da API
      next: (data) => { //recebe o retorno de sucesso da API
        this.dtTrigger.next(null);
        this.faturamentopf = data as any[];
      },
      error: (e) => { //recebe o retorno de erro da API
        console.log(e);
      }
    });
    this.dtoptions = {
      pagingType: 'full_numbers',
      searching: true,
      lengthChange: false,
      language: {
        searchPlaceholder: 'Text Customer'
      }
    };
    
  }


  onDelete(id: number, pessoafisica: string): void {
    if(window.confirm('Deseja realmente excluir o Faturamento selecionado?\n' + pessoafisica)) {
      //enviando uma reqquisição para o serviço de exclusão da API
      this.httpClient.delete('http://localhost:8082/api/faturamentopf/' + id)
        .subscribe({
          next: (data: any) => {
            this.ngOnInit();
          },
          error: (e) => {
          }
        })
    }
  }
  
}
