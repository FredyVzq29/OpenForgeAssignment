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
    hidden : 'no',
    clearcache : 'yes',
    clearsessioncache : 'yes',
    closebuttoncaption : 'Close',
    disallowoverscroll : 'no',
    toolbar : 'yes',
    enableViewportScale : 'no',
    presentationstyle : 'pagesheet',
    fullscreen : 'yes'
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
