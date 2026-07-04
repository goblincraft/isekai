import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { Realm } from '../../core/models/realm';

@Component({
  selector: 'app-create-realm-modal',
  imports: [
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
  ],
  templateUrl: './create-realm-modal.html',
  styleUrl: './create-realm-modal.css',
})
export class CreateRealmModal {
  realm: Partial<Realm> = {
    title: '',
    description: '',
    image: '',
  };

  constructor(private dialogRef: MatDialogRef<CreateRealmModal, Realm | undefined>) {}

  onSubmit(): void {
    if (!this.realm.title) {
      return;
    }

    const newRealm: Realm = {
      id: Date.now(),
      title: this.realm.title,
      description: this.realm.description ?? '',
      image: this.realm.image ?? '',
    };

    this.dialogRef.close(newRealm);
  }

  onCancel(): void {
    this.dialogRef.close(undefined);
  }
}
