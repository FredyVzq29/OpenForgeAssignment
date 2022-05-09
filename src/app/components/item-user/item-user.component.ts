import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectList } from 'src/app/state/selectors/users.selector';

@Component({
  selector: 'app-item-user',
  templateUrl: './item-user.component.html',
  styleUrls: ['./item-user.component.scss'],
})
export class ItemUserComponent implements OnInit {

  users_list$:Observable<any> = new Observable();

  constructor(
    private store:Store,
    private router:Router
  ) { }

  ngOnInit() {
    this.users_list$ = this.store.select(selectList);
  }

  goToSearchPage(value){
    let navigateTo = '/tabs/search/' + value;
    this.router.navigateByUrl(navigateTo);
  }

}
