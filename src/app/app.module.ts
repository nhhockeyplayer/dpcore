import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {ServiceWorkerModule} from '@angular/service-worker'
import {environment} from '../environments/environment'
import {HttpClientModule} from '@angular/common/http'
import {AppRoutingModule} from './app.routing.module'
import {ReactiveFormsModule} from '@angular/forms'
import {FlexLayoutModule} from '@angular/flex-layout'

import {ContentprojectionModule} from './components/shared/components/contentprojection/contentprojection.module'
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),

    RouterModule,
    AppRoutingModule,

    // MaterialModule,

    ContentprojectionModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
