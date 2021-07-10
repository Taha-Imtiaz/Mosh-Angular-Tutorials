import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatIconModule, MatInputModule, MatNativeDateModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatTabsModule, MatTooltipModule } from '@angular/material';

@NgModule({
//  export material modules
  exports:[
     // include checkbox module to include checkbox
     MatCheckboxModule,
     // radio button module
     MatRadioModule,
     // select module
     MatSelectModule,
     // input module
     MatInputModule,
     // date picker module
     MatDatepickerModule,
     // native date module
     MatNativeDateModule,
     // icon module
     MatIconModule,
     // button module
     MatButtonModule,
     // chips module
     MatChipsModule,
     // progress spinner
     MatProgressSpinnerModule,
     // tooltip module
     MatTooltipModule,
     // tab module
     MatTabsModule,
     // dialog module
     MatDialogModule,
 ]
})
export class MdComponentsModule { }
