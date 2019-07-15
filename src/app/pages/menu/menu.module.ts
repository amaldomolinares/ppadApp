import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/vehicles',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'addnewcar',
        loadChildren: '../vehicle/addnewcar/addnewcar.module#AddnewcarPageModule'
      },
      {
        path: 'vehicles',
        loadChildren: '../vehicles/vehicles.module#VehiclesPageModule'
      },
      {
        path: 'addsupplier',
        loadChildren: '../supplier/add-supplier/add-supplier.module#AddSupplierPageModule'
      },
      {
        path: 'suppliers',
        loadChildren: '../supplier/suppliers/suppliers.module#SuppliersPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
