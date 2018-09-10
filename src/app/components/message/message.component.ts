import { Component, OnInit } from '@angular/core';

import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  constructor(public messageService: MessagesService) {}

  ngOnInit() {}
}
