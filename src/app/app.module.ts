import { TimeoutService } from './services/timeout.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TrialComponent } from './components/trial/trial.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { UserIdleModule } from 'angular-user-idle';

import { PipelineModalComponent } from './components/home/pipeline-modal/pipeline-modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeMenuBtnComponent } from './components/home-menu-btn/home-menu-btn.component';
import { TimeoutModalComponent } from './components/timeout-modal/timeout-modal.component';
import { AttractorComponent } from './components/attractor/attractor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TrialComponent,
    FooterComponent,
    PipelineModalComponent,
    HomeMenuBtnComponent,
    TimeoutModalComponent,
    AttractorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    // RouterModule.forRoot(APP_ROUTES, {
    //   useHash: true
    // }),
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    UserIdleModule.forRoot({
      idle: 0,
      timeout: 90,
      // timeout: 15,
      ping: 0
    }),
  ],
  entryComponents: [
    TimeoutModalComponent
  ],
  providers: [
    TimeoutService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
