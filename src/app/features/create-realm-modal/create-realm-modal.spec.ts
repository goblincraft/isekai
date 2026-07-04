import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { CreateRealmModal } from './create-realm-modal';
import { Realm } from '../../core/models/realm';

describe('CreateRealmModal', () => {
  let component: CreateRealmModal;
  let fixture: ComponentFixture<CreateRealmModal>;
  let dialogRefSpy: { close: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    dialogRefSpy = { close: vi.fn() };

    await TestBed.configureTestingModule({
      imports: [CreateRealmModal],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateRealmModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close with a new realm on submit', () => {
    component.realm.title = 'New Realm';
    component.realm.description = 'A new realm';
    component.realm.image = 'http://example.com/image.png';

    component.onSubmit();

    expect(dialogRefSpy.close).toHaveBeenCalledWith(
      expect.objectContaining<Partial<Realm>>({
        title: 'New Realm',
        description: 'A new realm',
        image: 'http://example.com/image.png',
      })
    );
  });

  it('should not close on submit when title is empty', () => {
    component.realm.title = '';
    component.onSubmit();
    expect(dialogRefSpy.close).not.toHaveBeenCalled();
  });

  it('should close with undefined on cancel', () => {
    component.onCancel();
    expect(dialogRefSpy.close).toHaveBeenCalledWith(undefined);
  });
});
