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
      path: 'details-vehicle/:VehicleID',
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
  },
  {
    path: 'edit-order/:id',
    loadChildren: './pages/order/edit-order/edit-order.module#EditOrderPageModule'
  },
  {
    path: 'add-task',
    loadChildren: './pages/task/add-task/add-task.module#AddTaskPageModule'
  },
  {
    path: 'edit-task/:TaskID',
    loadChildren: './pages/task/edit-task/edit-task.module#EditTaskPageModule'
  },
  {
    path: 'details-task/:TaskID',
    loadChildren: './pages/task/details-task/details-task.module#DetailsTaskPageModule'
  },
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterPageModule'
  },
  {
    path: 'edit-vehicle/:VehicleID',
    loadChildren: './pages/vehicle/edit-vehicle/edit-vehicle.module#EditVehiclePageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
