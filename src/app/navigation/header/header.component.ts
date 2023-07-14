import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 @Output('sidenavToggle') sidenavToggle = new EventEmitter<void>();

  onToggleSidenav(){
    this.sidenavToggle.emit();
  }
}
