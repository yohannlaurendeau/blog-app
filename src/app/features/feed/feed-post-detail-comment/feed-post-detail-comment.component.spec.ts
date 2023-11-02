import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPostDetailCommentComponent } from './feed-post-detail-comment.component';

describe('FeedPostDetailCommentComponent', () => {
  let component: FeedPostDetailCommentComponent;
  let fixture: ComponentFixture<FeedPostDetailCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedPostDetailCommentComponent]
    });
    fixture = TestBed.createComponent(FeedPostDetailCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
