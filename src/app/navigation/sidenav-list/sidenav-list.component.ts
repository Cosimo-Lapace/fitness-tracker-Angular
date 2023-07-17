import { Component, Input,OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
@Input()sidenav;
isAuthenticated = false;
authSubscription: Subscription


constructor(private authService:AuthService){}

ngOnInit(): void {
   this.authSubscription = this.authService.authChange.subscribe(authStatus =>{
    this.isAuthenticated = authStatus;
    })
}
onLogout(){
  this.sidenav.close();
  this.authService.logout();

}

  ngOnDestroy(): void {
      this.authSubscription.unsubscribe()
  }

}
