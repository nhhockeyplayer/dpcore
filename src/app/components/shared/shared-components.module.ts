import {RouterModule, Routes} from '@angular/router'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {ModuleWithProviders} from '@angular/compiler/src/core'

import {HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {ContentprojectionComponent} from './components/contentprojection/contentprojection.component'
import {AkuminaIFrameComponent} from './components/akumina-frame/akumina-iframe.component'
import {
  MatCardModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule
} from '@angular/material'
import {FlexLayoutModule} from '@angular/flex-layout'

const routerConfig: Routes = [
  {path: 'contentprojection', component: ContentprojectionComponent, data: {title: 'Contentprojection'}},

]

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

    FlexLayoutModule,

    RouterModule,
    RouterModule.forChild(routerConfig),

    // MaterialModule

    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    ContentprojectionComponent,
    AkuminaIFrameComponent
  ],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

    RouterModule,

    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,

    ContentprojectionComponent,
    AkuminaIFrameComponent
  ]
})
export class SharedComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedComponentsModule,
      providers: []
    }
  }
}

