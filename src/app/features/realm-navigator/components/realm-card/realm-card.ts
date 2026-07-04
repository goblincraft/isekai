import { Component, Input } from '@angular/core';
import { Realm } from '../../../../core/models/realm';

@Component({
  selector: 'app-realm-card',
  imports: [],
  templateUrl: './realm-card.html',
  styleUrl: './realm-card.css',
})
export class RealmCard {
  @Input() realm!: Realm;
}
