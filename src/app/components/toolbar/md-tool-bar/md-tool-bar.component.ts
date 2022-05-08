import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-md-tool-bar',
  templateUrl: './md-tool-bar.component.html',
  styleUrls: ['./md-tool-bar.component.scss'],
})
export class MdToolBarComponent implements OnInit {
  @Input() page_name:string;
  constructor() { }

  ngOnInit() {}

}
