import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmCard } from './realm-card';

describe('RealmCard', () => {
  let component: RealmCard;
  let fixture: ComponentFixture<RealmCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealmCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealmCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
