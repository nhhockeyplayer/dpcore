import {RouterModule, Routes} from '@angular/router'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {ContentprojectionModule} from './components/contentprojection/contentprojection.module'
import {ContentprojectorService} from './services/contentprojector/contentprojector.service'
import {ModuleWithProviders} from '@angular/compiler/src/core'
import {ContentprojectorModule} from './services/contentprojector/contentprojector.module'

const routerConfig: Routes = [
  {
    path: 'contentprojector',
    loadChildren: './services/contentprojector/contentprojector.module'
  },
  {
    path: 'contentprojection',
    loadChildren: './components/contentprojection/contentprojection.module'
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    RouterModule,
    RouterModule.forChild(routerConfig),

    ContentprojectorModule,
    ContentprojectionModule
  ],
  declarations: [
    // ContentprojectorModule,
    // ContentprojectionModule
  ],
  exports: [
    ContentprojectorModule,
    ContentprojectionModule,

    RouterModule

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

// export default SharedModule
