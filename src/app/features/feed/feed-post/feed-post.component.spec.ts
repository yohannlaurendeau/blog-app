import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPostComponent } from './feed-post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('FeedPostComponent', () => {
  let component: FeedPostComponent;
  let fixture: ComponentFixture<FeedPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[SharedModule,RouterModule.forRoot([])],
      declarations: [FeedPostComponent]
    });
    fixture = TestBed.createComponent(FeedPostComponent);
    component = fixture.componentInstance;
    component.post={
      userId:-1,
      id:-1,
      title:"",
      body:""
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should go to comments',() => {
    const router: Router = TestBed.get(Router);
    fixture.debugElement.query(By.css('button')).nativeElement.click();

  })
});
