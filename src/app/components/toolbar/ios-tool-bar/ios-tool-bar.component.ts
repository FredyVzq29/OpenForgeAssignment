import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ios-tool-bar',
  templateUrl: './ios-tool-bar.component.html',
  styleUrls: ['./ios-tool-bar.component.scss'],
})
export class IosToolBarComponent implements OnInit {
  @Input() page_name:string;
  constructor() { }

  ngOnInit() {}

}
