import { Component, input, OnChanges, SimpleChanges } from '@angular/core';
import { ButtonModule } from "primeng/button";

@Component({
  selector: 'app-message',
  imports: [ButtonModule],
  templateUrl: './message.html',
  styleUrl: './message.css'
})
export class Message implements OnChanges {
hidden: boolean = false;
message = input<string>();
ngOnChanges(changes: SimpleChanges): void {
 if (changes['message'] && changes['message'].currentValue.length > 0) {
    this.hidden = false;
 }
}


}
