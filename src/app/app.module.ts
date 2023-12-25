import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarModule } from 'primeng/toolbar';
import{ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
// import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { AdminComponent } from './components/admin/admin.component';
import { UsersComponent } from './components/user/users/users.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { PartsComponent } from './components/parts/parts/parts.component';
import { PartDetailsComponent } from './components/parts/part-details/part-details.component';
import { CreatePartComponent } from './components/parts/create-part/create-part.component';
import { HomeComponent } from './components/home/home.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PasswordModule } from 'primeng/password';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UsersComponent,
    UserDetailsComponent,
    RegisterComponent,
    LoginComponent,
    PartsComponent,
    PartDetailsComponent,
    CreatePartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    PasswordModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
