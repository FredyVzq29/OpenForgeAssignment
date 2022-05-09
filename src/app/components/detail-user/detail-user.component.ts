import { Component, OnInit } from '@angular/core';
import { InAppBrowser,InAppBrowserOptions} from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserDetail } from 'src/app/state/selectors/users.selector';


@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss'],
})
export class DetailUserComponent implements OnInit {
  data$:Observable<any> = new Observable();

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};
  constructor(private iab: InAppBrowser,private store:Store) { }

  ngOnInit() {
    this.data$ = this.store.select(selectUserDetail);
  }

  openWebView(url){
    let target = "_self";
    this.iab.create(url,target,this.options);
  }
}
