import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmNavigator } from './realm-navigator';

describe('RealmNavigator', () => {
  let component: RealmNavigator;
  let fixture: ComponentFixture<RealmNavigator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealmNavigator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealmNavigator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
