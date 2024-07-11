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
export class ConteudoComponent {
  descricao: string = "";
  photoCover: string = "";
  private id: string | null = "0";

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => {
        this.id = value.get("Id");
        this.setValuesToComponent(this.id);
      }
    );
  }

  setValuesToComponent(id: string | null): void {
    const result = dataFake.filter(article => article.Id === id);
    if (result) {
      this.descricao = result[0].descricao;
      this.photoCover = result[0].photoCover;
    }
  }
}
