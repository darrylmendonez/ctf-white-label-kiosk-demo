// import { AttractorComponent } from './components/attractor/attractor.component';
import { HomeComponent } from './components/home/home.component';
import { TrialComponent } from './components/trial/trial.component';

export const APP_ROUTES = [
  // {
  //   path: '',
  //   component: AttractorComponent,
  //   pathMatch: 'full'
  // },
  // { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'trial/:trialParams', component: TrialComponent },
  { path: '**', redirectTo: '', component: HomeComponent },
];
