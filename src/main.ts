import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { products } from './product';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app/product-list/product-list.component.html',
  styleUrls:['./app/product-list/product-list.component.css'],
})
export class App {
  name = 'Angular';
  products = [...products];
  share() {
    window.alert('The product has been shared!');
  }
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
}

bootstrapApplication(App);
