import {RouterModule, Routes} from '@angular/router'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {ModuleWithProviders} from '@angular/compiler/src/core'

import {FlexLayoutModule} from '@angular/flex-layout'
import {HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations'

import {ContentprojectionComponent} from './components/contentprojection/contentprojection.component'
import {ContentprojectorService} from './services/singleton-services/contentprojector.service'
import {MaterialModule} from './packages/material/material.module'
import {AkuminaIFrameComponent} from './components/akumina-frame/akumina-iframe.component'

const routerConfig: Routes = [
  {path: 'contentprojection', component: ContentprojectionComponent, data: {title: 'Contentprojection'}},

]

@NgModule({
  imports: [
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    CommonModule,
    RouterModule,
    RouterModule.forChild(routerConfig),

    MaterialModule
  ],
  declarations: [
    ContentprojectionComponent,
    AkuminaIFrameComponent
  ],
  exports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    RouterModule,
    CommonModule,
    MaterialModule,

    ContentprojectionComponent,
    AkuminaIFrameComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ContentprojectorService]
    }
  }
}

