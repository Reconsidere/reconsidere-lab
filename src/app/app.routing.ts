import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { ProfileComponent } from './profile/profile.component';
import { StartcenterComponent } from './startcenter/startcenter.component';

export const routes: Routes = [
  { path: '', component: StartcenterComponent },
  { path: 'profile', component: ProfileComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(routes);