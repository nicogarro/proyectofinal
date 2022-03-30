import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { SocialComponent } from './social/social.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProgramoComponent } from './programo/programo.component'
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SocialComponent,
    PerfilComponent,
    ProgramoComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
