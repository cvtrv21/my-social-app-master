import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-social-app';

  public state = true

  public toggleButton() : boolean {
    return this.state = false;
  }
}
