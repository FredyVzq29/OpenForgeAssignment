import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-user',
  templateUrl: './item-user.component.html',
  styleUrls: ['./item-user.component.scss'],
})
export class ItemUserComponent implements OnInit {
  @Input() user_obj: any ;
  
  constructor() { }

  ngOnInit() {}

}
