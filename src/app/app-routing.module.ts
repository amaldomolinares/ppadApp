import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  {
    path: 'menu',
    loadChildren: './pages/menu/menu.module#MenuPageModule'
  },
    {
      path: 'home',
    loadChildren: './pages/orders/orders.module#OrdersPageModule'
    },
    {
      path: 'vehicles',
      loadChildren: './pages/vehicles/vehicles.module#VehiclesPageModule'
    },
    {
      path: 'details-vehicle',
      loadChildren: './pages/vehicle/details-vehicle/details-vehicle.module#DetailsVehiclePageModule'
    },
  {
    path: 'addnewcar',
    loadChildren: './pages/vehicle/addnewcar/addnewcar.module#AddnewcarPageModule'
  },
  {
    path: 'details-order/:id',
    loadChildren: './pages/order/details-order/details-order.module#DetailsOrderPageModule' 
  },
  {
    path: 'new-order',
    loadChildren: './pages/order/new-order/new-order.module#NewOrderPageModule' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
