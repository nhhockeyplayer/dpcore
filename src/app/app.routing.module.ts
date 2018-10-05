import {PreloadAllModules, RouterModule, Routes} from '@angular/router'
import {ContentprojectionComponent} from './components/shared/components/contentprojection/contentprojection.component'
import {NgModule} from '@angular/core'

/**
 *  lazy loading modules add
 *
 *  loadChildren: 'app/orders/orders.module#OrdersModule'
 */

// one of the goals of the data resolver is to retrieve the data so that the data is already available when the target
// component gets created.
//
// think about implementing resolver
//

export const routerConfig: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }, {
    path: 'content',
    loadChildren: './components/shared/shared.module'
    // component: ContentprojectionComponent,
    // data: {title: 'Content Projection'}
  }, {
    path: '**',
    redirectTo: '/'
  },
]

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routerConfig, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
