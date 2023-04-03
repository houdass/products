import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { productsRoutes } from './products.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, RouterModule.forChild(productsRoutes), FontAwesomeModule],
})
export class ProductsModule {}
