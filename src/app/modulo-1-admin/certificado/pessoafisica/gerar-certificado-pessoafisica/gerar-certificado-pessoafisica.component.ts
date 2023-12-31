import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gerar-certificado-pessoafisica',
  templateUrl: './gerar-certificado-pessoafisica.component.html',
  styleUrls: ['./gerar-certificado-pessoafisica.component.css']
})
export class GerarCertificadoPessoafisicaComponent implements OnInit{

  certificado: any [] = []

 
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    //capturando o id enviado na URL
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //consultando o produto através do id
    this.httpClient.get('http://localhost:8082/api/matriculas/' + id)
      .subscribe({
        next: (data: any) => {
          // Certifique-se de que 'certificado' seja uma matriz
          this.certificado = Array.isArray(data) ? data : [data];
             
          


        },
        error: (e) => {
          console.log(e);
        }
      });
  }
  
 
  printPage() {
    window.print();
  }

}