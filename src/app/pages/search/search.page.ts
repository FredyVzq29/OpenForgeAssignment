import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  value_to_search:string = '';
  request = null;
  user_data:any = null;

  constructor(
    private userService:UserService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if(this.request != null) this.request.unsubscribe();
  }

  searchUser(){
    if(this.value_to_search.trim() == '')this.showToast("The value to search is empty");
    else{
      this.request = this.userService.getUserDetail(this.value_to_search).subscribe(
        res=>{
          let response = res;
          this.user_data = response;
          
          console.log(this.user_data);
          if(this.user_data.bio == null) this.user_data.bio = 'Unassigned bio';
          if(this.user_data.name == null) this.user_data.name = 'Unassigned name';
          if(this.user_data.company == null) this.user_data.company = 'Unassigned company';
        },err=>{
          console.log(err);
        }
      );
    }
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

}
