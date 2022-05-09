import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonContent } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/core/models/IUser';
import { UserService } from 'src/app/services/user.service';
import { usersListLoaded } from 'src/app/state/actions/users.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  request = null;

  since:number = 0;
  users_list_:any = [];
  page:number = 1;
  
  title_page:string = '';

  constructor(
    private userService:UserService,
    private store: Store<any>,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.title_page = "User list page " + this.page;
    this.getList();
  }

  ngOnDestroy() {
    if(this.request != null) this.request.unsubscribe();
  }

  //Getting data from server using the UserService (called from ngOnInit)
  getList(){
    this.request = this.userService.getUsersList(this.since).subscribe(
      (res:any)=>{
        res.forEach(v => {
          let obj:IUser = {
            'login':v.login,
            'avatar_url':v.avatar_url,
            'id':v.id
          }
          this.users_list_.push(obj);
        });
        this.since = this.users_list_[this.users_list_.length-1].id;
        this.store.dispatch(usersListLoaded({users:this.users_list_}));
      },err=>{
        console.log(err);
        this.showAlert(err.message);
      });
  }

  //Mehod executed by the infinite scroll
  loadData(event) {
    setTimeout(() =>{
      event.target.complete();
      if(this.users_list_.length == 200) {
        this.users_list_ = [];
        this.content.scrollToTop();
        this.page ++;
        this.title_page = "User list page " + this.page;
      }
      this.getList();
    },3000)
  }

  async showAlert(err) {
    const alert = await this.alertController.create({
      header: 'Ups!',
      subHeader: 'An unexpected error occurred',
      message: err,
      buttons: ['OK']
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
  }


}
