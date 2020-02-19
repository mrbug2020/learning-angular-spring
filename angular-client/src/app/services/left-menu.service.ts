import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeftMenuService {

  isDashboard: boolean = true;
  isLeftMenuClose: boolean = false;

  constructor() { }
}
