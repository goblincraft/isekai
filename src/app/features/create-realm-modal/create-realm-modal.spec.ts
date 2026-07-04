import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRealmModal } from './create-realm-modal';

describe('CreateRealmModal', () => {
  let component: CreateRealmModal;
  let fixture: ComponentFixture<CreateRealmModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRealmModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRealmModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
