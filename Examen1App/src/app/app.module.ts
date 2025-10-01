import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { MenubarModule } from 'primeng/menubar';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  // No declarations: todos los componentes son standalone
  imports: [
    BrowserModule,
    FormsModule,
    MenubarModule,
    ImageModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    AccordionModule,
    ToastModule
  ],
  providers: [MessageService],
  // No bootstrap: la app se inicia con bootstrapApplication y un componente standalone
})
export class AppModule {}
