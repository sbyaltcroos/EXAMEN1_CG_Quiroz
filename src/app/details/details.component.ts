import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(private msg: MessageService){}

  show(sev: string){
    this.msg.add({severity: sev as any, summary: 'Notificación', detail: 'Esto es una demo de Toast'});
  }
}
