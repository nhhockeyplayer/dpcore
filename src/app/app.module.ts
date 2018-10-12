import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {HttpClientModule} from '@angular/common/http'
import {AppRoutingModule} from './app.routing.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {RouterModule} from '@angular/router'
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations'

import {CommonModule} from '@angular/common'
import {UnSafePipe} from './components/shared/pipes/unsafe.pipe'
import {SharedServicesModule} from './components/shared/shared-services.module'
import {SharedComponentsModule} from './components/shared/shared-components.module'
import {
  MatCardModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule
} from '@angular/material'
import {BrowserModule} from '@angular/platform-browser'

@NgModule({
  declarations: [
    AppComponent,
    UnSafePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,  // disables animations !!!
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    CommonModule,

    SharedComponentsModule.forRoot(),
    SharedServicesModule.forRoot(),

    RouterModule,
    AppRoutingModule,

    // MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
