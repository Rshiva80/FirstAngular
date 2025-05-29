import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-first-angular-app-test';
  count = 0;

  handleCounter(val: string) {
    if (val == 'plus') {
      this.count = this.count + 1;
    } else if (val == 'minus') {
      if(this.count > 0){
        this.count = this.count - 1
      }
    } else this.count = 0;
  }
}
