import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavService } from './shared/sidenav.service';
import { UserService } from './shared/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostService } from './shared/post.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from './shared/auth.service';
import { CommentService } from './shared/comment.service';
import { CommonModule } from '@angular/common';
import { ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { CoreModule } from './core/core.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    FormsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [SidenavService,UserService,HttpClient,PostService,AuthService,CommentService, ScreenTrackingService,UserTrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
