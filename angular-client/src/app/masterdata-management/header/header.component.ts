import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isHeaderMenuClose: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  toggleHeaderMenu(){
    this.isHeaderMenuClose = !this.isHeaderMenuClose;
  }

  handlerLogout(){
    // TODO implement logout logic
    this.router.navigate(["/"]);
  }

}
