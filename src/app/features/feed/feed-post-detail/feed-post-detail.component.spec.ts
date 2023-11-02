import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPostDetailComponent } from './feed-post-detail.component';

describe('FeedPostDetailComponent', () => {
  let component: FeedPostDetailComponent;
  let fixture: ComponentFixture<FeedPostDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedPostDetailComponent]
    });
    fixture = TestBed.createComponent(FeedPostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
