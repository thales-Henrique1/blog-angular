import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../data/dataFake';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {
  descricao: string = "";
  photoCover: string = "";
  private id: string | null = "0";

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => {
        this.id = value.get("id");
        this.setValuesToComponent(this.id);
      }
    );
  }

  setValuesToComponent(id: string | null): void {
    const result = dataFake.find(article => article.id === id);
    if (result) {
      this.descricao = result.descricao;
      this.photoCover = result.photoCover;
    }
  }
}
