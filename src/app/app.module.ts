import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {ServiceWorkerModule} from '@angular/service-worker'
import {environment} from '../environments/environment'
import {HttpClientModule} from '@angular/common/http'
import {AppRoutingModule} from './app.routing.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {FlexLayoutModule} from '@angular/flex-layout'

import {RouterModule} from '@angular/router'

import {MaterialModule} from './components/shared/packages/material/material.module'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {SharedModule} from './components/shared/shared.module'
import {CommonModule} from '@angular/common'
import {UnSafePipe} from './components/shared/pipes/unsafe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    UnSafePipe
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    CommonModule,

    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),

    SharedModule.forRoot(),

    RouterModule,
    AppRoutingModule,

    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
