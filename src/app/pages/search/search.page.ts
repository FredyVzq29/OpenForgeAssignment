import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/core/models/IUser';
import { userDetailLoaded } from 'src/app/state/actions/users.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  value_to_search:string = '';
  request = null;
  user_data:any = null;

  value_pre_search = '';

  constructor(
    private userService:UserService,
    private toastController: ToastController,
    private store: Store<any>,
    private activedRoute:ActivatedRoute,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.value_pre_search = this.activedRoute.snapshot.paramMap.get('search');
    if(this.value_pre_search != '0'){
      this.value_to_search = this.value_pre_search;
      this.searchUser();
    }
  }

  ngOnDestroy() {
    if(this.request != null) this.request.unsubscribe();
  }

  searchUser(){
    if(this.value_to_search.trim() == '')this.showToast("The value to search is empty");
    else{
      this.request = this.userService.getUserDetail(this.value_to_search).subscribe(
        res=>{
          this.user_data = res;
          this.store.dispatch(userDetailLoaded({user:this.createObject()}));
        },err=>{
          console.log(err);
          this.showAlert(err.message);
        }
      );
    }
  }

  createObject():IUser{
    let user_obj:IUser ={
      avatar_url: this.user_data.avatar_url,
      login: this.user_data.login,
      bio: this.user_data.bio,
      blog: this.user_data.blog,
      company: this.user_data.company,
      id: this.user_data.id,
      location:this.user_data.location,
      public_repos:this.user_data.public_repos,
      name:this.user_data.name
    }
    return user_obj;
  }

  async showToast(message){
    const toast = await this.toastController.create({
      header: 'Ups!',
      message: message,
      position: 'top',
      duration: 2000
      
    });
    toast.present();
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
