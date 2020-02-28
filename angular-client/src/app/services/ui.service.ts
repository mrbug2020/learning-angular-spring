import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';
import { AppConstant } from '../constants/app-constant';
import { BehaviorSubject, Subject } from 'rxjs';
import { ConfirmModelRef } from '../models/confirm-model-ref';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  isLeftMenuClose: boolean = false;
  lMenuItems: Array<MenuItem> = [];
  isConfirmSubject = new Subject<boolean>();
  confirmModelRef: ConfirmModelRef;
  isShowConfirmModel: boolean;
  defaultConfirm: any = {
    title: 'Title',
    content: 'Content',
    labelConfirmNo: 'Cancel',
    labelConfirmYes: 'Ok'
  };
  radioItems = [{ value: 1, label: 'Admin', checked: true }, { value: 2, label: 'Editor' }, { value: 3, label: 'Normal' }];
  userEmail: string;

  constructor() {
    this.confirmModelRef = this.defaultConfirm;
  }

  openConfirmModel(title?: any, content?: any, labelConfirmNo?: any, labelConfirmYes?: any) {
    this.confirmModelRef = Object.assign(this.defaultConfirm, {
      title: title ? title : this.defaultConfirm.title,
      content: content ? content : this.defaultConfirm.content,
      labelConfirmNo: labelConfirmNo ? labelConfirmNo : this.defaultConfirm.labelConfirmNo,
      labelConfirmYes: labelConfirmYes ? labelConfirmYes : this.defaultConfirm.labelConfirmYes
    })
    this.isShowConfirmModel = true;
    this.isConfirmSubject = new Subject<boolean>();
    return this.isConfirmSubject.asObservable();
  }

  initLMenuForUserGroupManag() {
    const userMenuItem: MenuItem = {
      key: 'UserManagement',
      label: 'User Management',
      path: AppConstant.USER_MANAGEMENT_URL,
      cssClass: 'lmenu_table'
    };
    const groupMenuItem: MenuItem = {
      key: 'GroupManagement',
      label: 'Group Management',
      path: AppConstant.GROUP_MANAGEMENT_URL,
      cssClass: 'lmenu_group'
    };
    this.lMenuItems = [userMenuItem, groupMenuItem];
  }

  getDisplayStyle(isDisplay: boolean): string {
    return isDisplay ? 'block' : 'none';
  }
}
