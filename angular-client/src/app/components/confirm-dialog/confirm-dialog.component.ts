import { Component, OnInit, Input } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(public uiService: UIService) {
  }

  ngOnInit(): void {
  }

  getDisplayStyle() {
    return this.uiService.isShowConfirmModel ? 'block' : 'none';
  }

  handlerConfirmNo() {
    this.uiService.isConfirmSubject.next(false);
    this.uiService.isShowConfirmModel = false;
  }

  handlerConfirmYes() {
    this.uiService.isConfirmSubject.next(true);
    this.uiService.isShowConfirmModel = false;
  }
}
