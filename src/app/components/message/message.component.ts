import { Component, OnInit } from '@angular/core';

import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  messages = [];

  constructor(public messageService: MessagesService) {}

  getMessages() {
    this.messages = this.messageService.messages;
  }

  ngOnInit() {
    this.getMessages();
  }
}
