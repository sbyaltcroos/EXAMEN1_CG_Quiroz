import { Component } from '@angular/core';

import { ToastModule } from 'primeng/toast';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ToastModule, ImageModule, ButtonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [MessageService]
})
export class DetailsComponent {
  constructor(private msg: MessageService){}

  show(sev: string){
    this.msg.add({severity: sev as any, summary: 'Notificación', detail: 'Esto es una demo de Toast'});
  }
}
