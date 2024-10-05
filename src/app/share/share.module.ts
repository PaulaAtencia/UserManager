import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ManagerComponent } from './components/manager/manager.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [UserInfoComponent, ManagerComponent, WelcomeComponent],
  imports: [
    CommonModule,
    IonicModule,

  ],
  exports: [UserInfoComponent, ManagerComponent, WelcomeComponent]
})
export class ShareModule { }
