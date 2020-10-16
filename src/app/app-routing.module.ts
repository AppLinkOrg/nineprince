import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
 // { path: '', loadChildren: './home/home.module#HomePageModule' },
  { path: '', loadChildren: './shudaima/shudaima.module#ShudaimaPageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },   
  { path: 'yuyue', loadChildren: './yuyue/yuyue.module#YuyuePageModule' },
  { path: 'bangdin', loadChildren: './bangdin/bangdin.module#BangdinPageModule' }, 
  { path: 'mine', loadChildren: './mine/mine.module#MinePageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'dindanqueren', loadChildren: './dindanqueren/dindanqueren.module#DindanquerenPageModule' },
  { path: 'orderlist', loadChildren: './orderlist/orderlist.module#OrderlistPageModule' },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
