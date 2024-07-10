import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})

export class BigCardComponent {
  images = [
    'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3535-amd/media-gallery/black/notebook-inspiron-15-3535-nt-plastic-black-gallery-12.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=685&qlt=100,1&resMode=sharp2&size=685,402&chrss=full',
    'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3535-amd/media-gallery/black/notebook-inspiron-15-3535-nt-plastic-black-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=656&qlt=100,1&resMode=sharp2&size=656,402&chrss=full',
    'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3535-amd/media-gallery/black/notebook-inspiron-15-3535-nt-plastic-black-gallery-7.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=568&qlt=100,1&resMode=sharp2&size=568,402&chrss=full'
  ];
  currentIndex = 0;

  prevImage() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }
}
