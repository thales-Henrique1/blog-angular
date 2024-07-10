import { Component } from '@angular/core';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { FichaTecnicaComponent } from '../../components/ficha-tecnica/ficha-tecnica.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BigCardComponent,    
    MenuTitleComponent,
    FichaTecnicaComponent

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

