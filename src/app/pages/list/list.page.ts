import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonContent } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadUsersList } from 'src/app/state/actions/users.actions';
import { selectList } from 'src/app/state/selectors/users.selector';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  since:number = 0;
  
  users_list$:Observable<any> = new Observable();
  users_:any = [];
  page:number = 1;
  
  title_page:string = '';

  constructor(
    private store: Store<any>,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.title_page = "User list page " + this.page;
    this.users_list$ = this.store.select(selectList);
  
    this.getList();
  }

  ngOnDestroy() {
  }

  //Getting data from server using the action loadUserList
  getList(){
    this.users_list$.subscribe(
      res=>{
        this.users_ = res;
      },err=>{
        this.showAlert(err);
      }
    )
    this.store.dispatch(loadUsersList({since:this.since}));
  }

  //Mehod executed by the infinite scroll
  loadData(event) {
    this.since = this.users_[this.users_.length - 1].id;
    console.log(this.since)
    setTimeout(() =>{
      event.target.complete();
      if(this.users_.length == 400) {
        this.users_ = [];
        this.content.scrollToTop();
        this.page ++;
        this.title_page = "User list page " + this.page;
      }
      this.getList();
    },3000)
  }

  //Show alert if there is an error
  async showAlert(err) {
    const alert = await this.alertController.create({
      header: 'Ups!',
      subHeader: 'An unexpected error occurred',
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }


}
