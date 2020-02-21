import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  isLeftMenuClose: boolean = false;
  lMenuItems: Array<MenuItem> = [];
  constructor() { }
}
