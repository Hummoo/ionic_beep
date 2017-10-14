import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from '../../components/components.module';
import { ChannelChatPage } from './channel-chat';

@NgModule({
  declarations: [
    ChannelChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ChannelChatPage),
    ComponentsModule
  ],
})
export class ChannelChatPageModule { }
