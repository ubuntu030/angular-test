import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  isCollapsed = false;
  // collapse!: boolean;
  // isAnimated!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
