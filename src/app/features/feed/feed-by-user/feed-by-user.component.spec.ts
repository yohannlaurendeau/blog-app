import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedByUserComponent } from './feed-by-user.component';

describe('FeedByUserComponent', () => {
  let component: FeedByUserComponent;
  let fixture: ComponentFixture<FeedByUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedByUserComponent]
    });
    fixture = TestBed.createComponent(FeedByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
