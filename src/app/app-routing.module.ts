import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/landing-page/home/home.component';
import { ConnectionComponent } from './components/landing-page/connection/connection.component';
import { ToDoListComponent } from './components/user/to-do-list/to-do-list.component';
import { ToDoAjoutComponent } from './components/user/to-do-ajout/to-do-ajout.component';
import { ToDoModifierComponent } from './components/user/to-do-modifier/to-do-modifier.component';
import { InscriptionComponent } from './components/landing-page/inscription/inscription.component';
import { NavbarComponent } from './components/landing-page/navbar/navbar.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './components/admin/admin/admin.component';
import { UserGuard } from './guards/user.guard';
import { AdminGuard } from './guards/admin.guard';


const routes: Routes = [
  {
    path: '',  
    component: NavbarComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate:[AdminGuard]
      },
      
      {
        path: 'inscription',
        component: InscriptionComponent,
        canActivate:[AuthGuard]
      }, {
        path:'to-do-list',
         component:ToDoListComponent,
         canActivate:[UserGuard]

       },
       {
        path:'to-do-ajout',
         component:ToDoAjoutComponent,
         canActivate:[UserGuard]

       }, {
        path:'to-do-modif',
         component:ToDoModifierComponent,
         canActivate:[UserGuard]

       },
       {
        path: 'login',
        component: ConnectionComponent,
        canActivate:[AuthGuard]
      }
       
    ]

  }, 
  
 
  /*
  {
    path:'home',
    component:HomeComponent
  },

  {
   path:'connection',
    component:ConnectionComponent
  },
  {
    path:'inscription',
     component:InscriptionComponent
   },
  {
    path:'to-do-list',
     component:ToDoListComponent
   },
   {
    path:'to-do-ajout',
     component:ToDoAjoutComponent
   }, {
    path:'to-do-modif',
     component:ToDoModifierComponent
   }
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
