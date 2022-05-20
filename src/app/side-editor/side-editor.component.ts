
import { Component, OnInit, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { ResString } from '../app.component';

@Component({
  selector: 'app-side-editor',
  templateUrl: './side-editor.component.html',
  styleUrls: ['./side-editor.component.css']
})
export class SideEditorComponent {
  constructor(private scom: ResString) {}
  data = this.scom.getType()
}


