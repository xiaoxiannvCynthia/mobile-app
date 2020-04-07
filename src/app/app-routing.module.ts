import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardService } from './guard.service';




const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'todoslist',
    loadChildren: () => import('./todoslist/todoslist.module').then( m => m.TodoslistPageModule),
    canActivate : [GuardService]
  },
  {
    path: 'addtodo',
    loadChildren: () => import('./addtodo/addtodo.module').then( m => m.AddtodoPageModule),
    canActivate : [GuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    
  },
  {
    path: 'registre',
    loadChildren: () => import('./registre/registre.module').then( m => m.RegistrePageModule)
  },
  {
    path: 'all-todo',
    loadChildren: () => import('./all-todo/all-todo.module').then( m => m.AllTodoPageModule),
    canActivate : [GuardService]

  },
  {
    path: 'add-list',
    loadChildren: () => import('./add-list/add-list.module').then( m => m.AddListPageModule),
    canActivate : [GuardService]

  },
  {
    path: 'person-list',
    loadChildren: () => import('./person-list/person-list.module').then( m => m.PersonListPageModule)
  },
  {
    path: 'dousers',
    loadChildren: () => import('./dousers/dousers.module').then( m => m.DousersPageModule),
    canActivate : [GuardService]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
