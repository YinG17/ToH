import { Component, OnInit } from '@angular/core';

import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'hero-log',
  templateUrl: './hero-log.component.html',
  styleUrls: ['./hero-log.component.scss']
})
export class HeroLogComponent implements OnInit {
  constructor(public logService: MessagesService) {}

  ngOnInit() {}
}
