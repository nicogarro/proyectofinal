import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkiilComponent } from './skiil/skiil.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BotoneditarComponent } from './botoneditar/botoneditar.component';


@NgModule({
  declarations: [
    AppComponent,
    
    PerfilComponent,
   
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkiilComponent,
    ProyectoComponent,
    FooterComponent,
    HeaderComponent,
    BotoneditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot ({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
