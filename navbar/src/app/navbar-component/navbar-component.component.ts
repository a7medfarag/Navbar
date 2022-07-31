import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  collapsed = true;
  showed = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleCollapsed(): void {    
    console.log(this.collapsed);
    this.showed = !this.showed;
    this.collapsed = !this.collapsed;
  }
  closeToggle(){
    this.collapsed = false
    this.showed = false
  }
}
