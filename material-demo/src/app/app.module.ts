import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule, MatChipsModule, MatDialogModule, MatIconModule, MatProgressSpinnerModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseService } from './course.service';
import { MdComponentsModule } from './md-components.module';


@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent
  ],
  // entryComponents: [
  //   // all components that are added dynamically
  //   EditCourseComponent
  // ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MdComponentsModule
  ],
  providers: [
    // register course service
    CourseService,
    // {provide: CourseService, useClass:CourseService},
    // { provide: DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
