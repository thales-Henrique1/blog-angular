import { Component, input, Input } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-ficha-tecnica',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './ficha-tecnica.component.html',
  styleUrl: './ficha-tecnica.component.css'
})
export class FichaTecnicaComponent {
  descricao_processador:string ="AMD Ryzen™ 5 7520U com Radeon™ Graphics"
  @Input()
  descricao_assistencia_tecnica:string =""
  @Input()
  Id:string ="0"
}
/**/