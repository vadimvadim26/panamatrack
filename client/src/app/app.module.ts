import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import { ContentComponent } from './content/content.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import { LinkcreatorComponent } from './linkcreator/linkcreator.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import {TokenInterceptor} from "./shared/classes/token.interceptor";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { OffercreatorComponent } from './offercreator/offercreator.component';
import { OffertoolsComponent } from './offertools/offertools.component';
import { PrelandingcreatorComponent } from './prelandingcreator/prelandingcreator.component';
import { UserPageComponent } from './user-page/user-page.component';
import { LinksPageComponent } from './links-page/links-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { DomaincreatorComponent } from './domaincreator/domaincreator.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from "@angular/material/radio";
import {MatDialogModule} from '@angular/material/dialog';
import { DomnsetstatComponent } from './domnsetstat/domnsetstat.component';
import {MatBadgeModule} from '@angular/material/badge';
import {AllscriptsComponent} from "./allscripts/allscripts.component";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContentComponent,
    LinkcreatorComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    RegisterPageComponent,
    DashboardPageComponent,
    LoaderComponent,
    OffercreatorComponent,
    OffertoolsComponent,
    PrelandingcreatorComponent,
    UserPageComponent,
    AllscriptsComponent,
    LinksPageComponent,
    DomaincreatorComponent,
    DomnsetstatComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatListModule,
        MatCardModule,
        MatDividerModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatChipsModule,
        MatTabsModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatExpansionModule,
        ClipboardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDialogModule,
        MatTooltipModule,
        MatBadgeModule,
        MatPaginatorModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
