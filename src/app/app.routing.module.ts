import {PreloadAllModules, RouterModule, Routes} from '@angular/router'
import {NgModule} from '@angular/core'

/**
 *  lazy loading modules add
 *
 *  loadChildren: 'app/orders/orders.module#OrdersModule'
 */

export const routerConfig: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }, {
    path: 'content',
    loadChildren: './components/shared/shared.module#SharedModule'
  }, {
    path: '**',
    redirectTo: '/'
  },
]

// useHash supports github.io demo page, remove in your app
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routerConfig, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
