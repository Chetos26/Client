import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CategoryComponent, DashboardComponent, ProductComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CategoryComponent, DashboardComponent, ProductComponent],
})
export class PagesModule {}
