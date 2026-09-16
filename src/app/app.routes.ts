import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TyroUiForbidden, TyroUiNotFound } from 'tyrolium-ui';

export const routes: Routes = [
  { path: '',    component: Home },
  { path: '403', component: TyroUiForbidden },
  { path: '**',  component: TyroUiNotFound },
];
