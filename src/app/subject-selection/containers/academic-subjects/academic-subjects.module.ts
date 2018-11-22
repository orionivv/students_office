import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicSubjectsComponent } from './academic-subjects.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {SubjectCardModule} from '../../components/subject-card/subject-card.module';
import {PlaceholderCardModule} from '../../components/placeholder-card/placeholder-card.module';
import {EmptyListModule} from '../../components/empty-list/empty-list.module';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    SubjectCardModule,
    PlaceholderCardModule,
    EmptyListModule
  ],
  declarations: [AcademicSubjectsComponent]
})
export class AcademicSubjectsModule { }

