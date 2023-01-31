import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterApgeComponent } from './pages/register-apge/register-apge.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

import { AngularFireModule } from '@angular/fire/compat';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { MatTableModule } from '@angular/material/table';  
import { MatChipsModule } from '@angular/material/chips'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RegisterApgeComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideAuth(() => getAuth()),
    MatTableModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [FormBuilder,ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
