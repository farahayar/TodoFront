import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/landing-page/navbar/navbar.component';
import { FooterComponent } from './components/landing-page/footer/footer.component';
import { ConnectionComponent } from './components/landing-page/connection/connection.component';
import { HomeComponent } from './components/landing-page/home/home.component';
import { InscriptionComponent } from './components/landing-page/inscription/inscription.component';
import { ToDoListComponent } from './components/user/to-do-list/to-do-list.component';
import { ToDoAjoutComponent } from './components/user/to-do-ajout/to-do-ajout.component';
import { ToDoModifierComponent } from './components/user/to-do-modifier/to-do-modifier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { UserServicesService } from './services/user.service';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './components/admin/admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ConnectionComponent,
    HomeComponent,
    InscriptionComponent,
    ToDoListComponent,
    ToDoAjoutComponent,
    ToDoModifierComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],

  providers: [
    UserServicesService,
    AuthGuard
  
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
