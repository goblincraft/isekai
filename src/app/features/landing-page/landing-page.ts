import { Component } from '@angular/core';
import { RealmNavigator } from '../realm-navigator/realm-navigator';
import { UpdateFeed } from '../update-feed/update-feed';

@Component({
  selector: 'app-landing-page',
  imports: [
    RealmNavigator,
    UpdateFeed
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

}
