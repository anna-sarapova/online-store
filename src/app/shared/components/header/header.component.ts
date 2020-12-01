import {Component, OnInit} from '@angular/core';
import {LinkModel} from "../../../core/models/link.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public links: LinkModel[];

  constructor() {
  }

  ngOnInit(): void {
    this.initLinks();
  }

  private initLinks(): void {
    this.links = [
      {name: 'Home', route: '/home'},
      {name: 'Categories'},
      {name: 'Offers'},
      {name: 'Contacts'}
    ];
  }

}
