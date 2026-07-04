import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

import { RealmCard } from './components/realm-card/realm-card';
import { CreateRealmModal } from '../create-realm-modal/create-realm-modal';
import { Realm } from '../../core/models/realm';

@Component({
  selector: 'app-realm-navigator',
  imports: [
    RealmCard,
    MatButton,
  ],
  templateUrl: './realm-navigator.html',
  styleUrl: './realm-navigator.css',
})
export class RealmNavigator {
  realms: Realm[] = [
    {
      id: 1,
      title: 'Eldoria',
      description: 'A land of ancient forests and forgotten ruins.',
      image: 'https://placehold.co/150',
    },
    {
      id: 2,
      title: 'Nebula Station',
      description: 'A drifting research outpost beyond the outer rim.',
      image: 'https://placehold.co/150',
    },
  ];

  constructor(private dialog: MatDialog) {}

  openCreateRealmModal(): void {
    const dialogRef = this.dialog.open<CreateRealmModal, undefined, Realm | undefined>(CreateRealmModal);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.realms = [...this.realms, result];
      }
    });
  }
}
