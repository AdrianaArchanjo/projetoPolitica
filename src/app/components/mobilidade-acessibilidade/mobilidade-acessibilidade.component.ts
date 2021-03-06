import { Component, OnInit } from '@angular/core';
import { PoliticaApiService } from 'src/app/services/politica-api.service';
import { PoliticaModel } from 'src/app/services/politica-model';

@Component({
  selector: 'app-mobilidade-acessibilidade',
  templateUrl: './mobilidade-acessibilidade.component.html',
  styleUrls: ['./mobilidade-acessibilidade.component.css']
})
export class MobilidadeAcessibilidadeComponent implements OnInit {

  listaPolitica: PoliticaModel[];

  constructor( private politicaApi: PoliticaApiService ) { }

  ngOnInit(): void {
    this.politicaApi.listPolitica().subscribe((lista) =>
    {
      this.listaPolitica = lista.filter(a => a.tags[0] === "Mobilidade Urbana",);
    });
  }
}


