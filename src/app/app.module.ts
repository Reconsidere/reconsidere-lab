import {CalendarModule} from 'angular-calendar';
import { ScheduleComponent } from './schedule/schedule.component';
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule} from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UpdatesComponent } from './updates/updates.component';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import { ChartsModule } from 'ng2-charts';
import { StartcenterComponent } from './startcenter/startcenter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { ProdutionWidgetComponent } from './dashboard/prodution.widget.component';
import { ContaminationWidgetComponent } from './dashboard/contamination.widget.component';
import { PreselectionWidgetComponent } from './dashboard/preselection.widget.component';
import { NextcollectionWidgetComponent } from './dashboard/nextcollection.widget.component';
import { CultureWidgetComponent } from './dashboard/culture.widget.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminComponent } from './admin/admin.component';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthService } from '../services/auth.service';

import {NgbModule, NgbModalModule, NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthGuard } from '../guards/auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { CollectStepsComponent } from './collect-steps/collect-steps.component';
import { TransferredComponent } from './transferred/transferred.component';
import { TermFilterPipe } from '../pipes/term-filter.pipe';
import {NgxMaskModule} from 'ngx-mask';
import { TransitSchedulerComponent } from './transit-scheduler/transit-scheduler.component';
import { CodegenComponent } from './codegen/codegen.component';
import { SalesWidgetComponent } from './dashboard/sales.widget.component';
import { HouseholdsWidgetComponent } from './dashboard/households.widget.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    TransitSchedulerComponent,
    AppComponent,
    ToolbarComponent,
    MeasurementsComponent,
    UpdatesComponent,
    StartcenterComponent,
    ProfileComponent,
    DashboardComponent,
    ProdutionWidgetComponent,
    ContaminationWidgetComponent,
    NextcollectionWidgetComponent,
    PreselectionWidgetComponent,
    CultureWidgetComponent,
    AdminComponent,
    SignUpComponent,
    SignInComponent,
    LogoutComponent,
    ForgotpassComponent,
    CollectStepsComponent,
    TransferredComponent,
    TermFilterPipe,
    TransitSchedulerComponent,
    CodegenComponent,
    SalesWidgetComponent,
    HouseholdsWidgetComponent,
    ScheduleComponent
  ],
  imports: [
    NgbModule,
    NgxQRCodeModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    MatSidenavModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    AngularFireAuthModule,
    AngularFireModule,
    MatTooltipModule,
    MatMenuModule,
    MatTabsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatRadioModule,
    ChartsModule,
    MatTableModule,
    ProdutionWidgetComponent,
    ContaminationWidgetComponent,
    NextcollectionWidgetComponent,
    PreselectionWidgetComponent,
    CultureWidgetComponent,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ROUTING,
  ],
  providers: [AngularFireDatabase, AuthService, AuthGuard, {provide: APP_BASE_HREF, useValue: '/' }, NgbTabsetConfig],
  bootstrap: [AppComponent]
})
export class AppModule {
}
