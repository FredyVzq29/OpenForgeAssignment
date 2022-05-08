import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  request = null;

  since:number = 0;
  users_list:any = [];
  page:number = 1;
  
  title_page:string = '';

  constructor(
    private userService:UserService
  ) { }

  ngOnInit() {
    this.title_page = "User list page " + this.page;
    this.getList();
  }

  ngOnDestroy() {
    if(this.request != null) this.request.unsubscribe();
  }

  getList(){
    this.request = this.userService.getUsersList(this.since).subscribe(
      res=>{
        let list = res;
        this.users_list = this.users_list.concat(list)
        this.since = this.users_list[this.users_list.length-1].id;
        
      },err=>{
        console.log(err);
      }
    );
  }

  loadData(event) {
    setTimeout(() =>{
      event.target.complete();
      if(this.users_list.length == 200) {
        this.users_list = [];
        this.content.scrollToTop();
        this.page ++;
        this.title_page = "User list page " + this.page;
      }
      this.getList();
    },3000)
  }

}
