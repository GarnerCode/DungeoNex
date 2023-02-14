import { NgModule } from '@angular/core';
import { CampaignThumbnailModule } from '../../components/campaign-thumbnail/campaign-thumbnail.module'
import { CampaignsPageComponent } from './components/campaigns-page.component';

@NgModule({
    declarations: [
        CampaignsPageComponent,
    ],
    imports: [
        CampaignThumbnailModule,
    ],
    exports: [
        CampaignsPageComponent,
    ],
})
export class CampaignsPageModule {}