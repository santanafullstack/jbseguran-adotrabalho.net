import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar-faturamento-pf',
  templateUrl: './cadastrar-faturamento-pf.component.html',
  styleUrls: ['./cadastrar-faturamento-pf.component.css']
})
export class CadastrarFaturamentoPfComponent {

  mensagem: string = '';

  formFaturamentopf: FormGroup;


  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {
    this.formFaturamentopf = this.formBuilder.group({
  pessoafisica : new FormControl('', [Validators.required]),
  cpf : new FormControl('', [Validators.required]),
  data_inicio : new FormControl('', [Validators.required]),
  data_fim : new FormControl('', [Validators.required]),
    });
  }


 

  

     get form(): any {
       return this.formFaturamentopf.controls;
     }

     onSubmit(): void {
      if (this.formFaturamentopf.valid) {
        // Formate as datas para o formato ISO 8601
        const dataInicio = this.formatDate(this.formFaturamentopf.value.data_inicio);
        const dataFim = this.formatDate(this.formFaturamentopf.value.data_fim);
          this.formFaturamentopf.patchValue({
          data_inicio: dataInicio,
          data_fim: dataFim
        });
    
        // Enviar o formulário para o endpoint
        this.httpClient
          .post('http://localhost:8082/api/faturamentopf',this.formFaturamentopf.value)
          .subscribe({
            next: (data: any) => {
              this.mensagem = `Faturamento cadastrado com sucesso!`;
              // Limpar o formulário ou realizar ações adicionais, se necessário
             this.formFaturamentopf.reset();
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

printPage() {
  window.print();
}





}

