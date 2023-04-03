import { Component } from '@angular/core';
import {
  faCoins,
  faMarsAndVenus,
  faFilter,
  faSignature,
} from '@fortawesome/free-solid-svg-icons';
import {
  perfume1Img,
  perfume2Img,
  perfume3Img,
  perfume4Img,
  perfume5Img,
  perfume6Img,
} from './image.constants';
import { CartService, Gender, Product } from 'mf-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  faCoins = faCoins;
  faMarsVenus = faMarsAndVenus;
  faFilter = faFilter;
  faSignature = faSignature;

  perfume1Img: string = perfume1Img;
  perfume2Img: string = perfume2Img;
  perfume3Img: string = perfume3Img;
  perfume4Img: string = perfume4Img;
  perfume5Img: string = perfume5Img;
  perfume6Img: string = perfume6Img;

  products: Product[] = [
    {
      id: 1,
      brand: 'Yves S. Laurent',
      name: "La nuit de l'homme",
      size: 60,
      price: 89.99,
      gender: Gender.Men,
      image: perfume1Img,
    },
    {
      id: 2,
      brand: 'Chanel',
      name: 'Bleu de Chanel',
      size: 50,
      price: 85.99,
      gender: Gender.Men,
      image: perfume2Img,
    },
    {
      id: 3,
      brand: 'Yves S. Laurent',
      name: 'Le Parfum',
      size: 100,
      price: 109.99,
      gender: Gender.Men,
      image: perfume3Img,
    },
    {
      id: 4,
      brand: 'Giorgio Armani',
      name: 'My way',
      size: 30,
      price: 79.99,
      gender: Gender.Women,
      image: perfume4Img,
    },
    {
      id: 1,
      brand: 'Gucci',
      name: 'Bamboo',
      size: 60,
      price: 89.99,
      gender: Gender.Women,
      image: perfume5Img,
    },
    {
      id: 1,
      brand: 'Lancôme',
      name: 'La Nuit Trésor',
      size: 100,
      price: 129.99,
      gender: Gender.Women,
      image: perfume6Img,
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.add(product);
  }
}
