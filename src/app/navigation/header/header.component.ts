import { Component, EventEmitter, Output,OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
 @Output('sidenavToggle') sidenavToggle = new EventEmitter<void>();
 isAuthenticated = false;
 authSubscription: Subscription

  constructor(private authSerive:AuthService){}

  ngOnInit(): void {
    this.authSubscription =  this.authSerive.authChange.subscribe(authStatus=>{
        this.isAuthenticated = authStatus;
      })
  }

  onToggleSidenav(){
    this.sidenavToggle.emit();
  }
  onLogout(){
    this.authSerive.logout();
  }


ngOnDestroy(): void {
    this.authSubscription.unsubscribe()
}

}
