import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DindanquerenPage } from './dindanqueren.page';

const routes: Routes = [
  {
    path: '',
    component: DindanquerenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DindanquerenPage]
})
export class DindanquerenPageModule {}
