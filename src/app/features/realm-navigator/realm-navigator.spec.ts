import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { of } from 'rxjs';

import { RealmNavigator } from './realm-navigator';
import { CreateRealmModal } from '../create-realm-modal/create-realm-modal';
import { Realm } from '../../core/models/realm';

describe('RealmNavigator', () => {
  let component: RealmNavigator;
  let fixture: ComponentFixture<RealmNavigator>;
  let dialogRefSpy: { afterClosed: ReturnType<typeof vi.fn>; close: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    dialogRefSpy = {
      afterClosed: vi.fn(),
      close: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [RealmNavigator],
      providers: [
        {
          provide: MatDialog,
          useValue: {
            open: vi.fn().mockReturnValue(dialogRefSpy),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RealmNavigator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open CreateRealmModal when the button is clicked', () => {
    dialogRefSpy.afterClosed.mockReturnValue(of(undefined));

    component.openCreateRealmModal();

    const dialog = TestBed.inject(MatDialog);
    expect(dialog.open).toHaveBeenCalledWith(CreateRealmModal);
  });

  it('should append a new realm when the dialog returns one', () => {
    const newRealm: Realm = {
      id: 3,
      title: 'Test Realm',
      description: 'Test description',
      image: 'http://example.com/image.png',
    };
    dialogRefSpy.afterClosed.mockReturnValue(of(newRealm));

    component.openCreateRealmModal();

    expect(component.realms).toContain(newRealm);
  });

  it('should not change realms when the dialog is cancelled', () => {
    const originalRealms = component.realms;
    dialogRefSpy.afterClosed.mockReturnValue(of(undefined));

    component.openCreateRealmModal();

    expect(component.realms).toEqual(originalRealms);
  });
});
