import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFeed } from './update-feed';

describe('UpdateFeed', () => {
  let component: UpdateFeed;
  let fixture: ComponentFixture<UpdateFeed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFeed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFeed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
