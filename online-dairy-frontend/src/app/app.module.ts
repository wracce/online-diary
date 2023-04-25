import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';
import { NoteCardComponent } from './pages/notes-page/notes-page-src/components/note-card/note-card.component';
import { NgxEditorModule } from 'ngx-editor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardViewerComponent } from './pages/notes-page/notes-page-src/components/card-viewer/card-viewer.component';
import { ClickStopPropagationDirective } from './shared/directives/click-stop-propagation.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardEditorComponent } from './pages/notes-page/notes-page-src/components/card-editor/card-editor.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SanitizeHtmlPipe } from './shared/pipes/sanitize-html.pipe';
import { FilterNotesPipe } from './pages/notes-page/notes-page-src/pipes/filter-notes.pipe';
import { DateAgoPipe } from './pages/notes-page/notes-page-src/pipes/date-ago.pipe';
import { DiaryPageComponent } from './pages/diary-page/diary-page.component';
import { DayRecordComponent } from './pages/diary-page/diary-page-src/components/day-record/day-record.component';
import { DayCardComponent } from './pages/diary-page/diary-page-src/components/day-card/day-card.component';
import { PreRecordsPipe } from './pages/diary-page/diary-page-src/pipes/pre-records.pipe';
import { DisableControlDirective } from './pages/diary-page/diary-page-src/directives/disable-control.directive';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';


registerLocaleData(localeRu, 'ru');
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesPageComponent,
    NoteCardComponent,
    CardViewerComponent,
    ClickStopPropagationDirective,
    CardEditorComponent,
    SanitizeHtmlPipe,
    FilterNotesPipe,
    DateAgoPipe,
    DiaryPageComponent,
    DayRecordComponent,
    DayCardComponent,
    PreRecordsPipe,
    DisableControlDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEditorModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMasonryModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxEditorModule.forRoot({
      locals: {
        // menu
        bold: 'Жирный',
        italic: 'Курсив',
        code: 'Код',
        blockquote: 'Цитата',
        underline: 'Подчеркивание',
        strike: 'Зачеркивание',
        bullet_list: 'Перечисления',
        ordered_list: 'Пронумерованный список',
        heading: 'Заколовки',
        h1: 'Заголовок 1',
        h2: 'Заголовок 2',
        h3: 'Заголовок 3',
        h4: 'Заголовок 4',
        h5: 'Заголовок 5',
        h6: 'Заголовок 6',
        align_left: 'Левое выравнивание',
        align_center: 'Центральное выравнивание',
        align_right: 'Правое выравнивание',
        align_justify: 'Равномерное выравнивание',
        text_color: 'Цвет текта',
        background_color: 'Цвет фона',

        // popups, forms, others...
        url: 'URL',
        text: 'Текст',
        openInNewTab: 'Открыть отдельно',
        insert: 'Добавить',
        altText: 'Другой текст',
        title: 'Заголовок',
        remove: 'Убрать выделение',
        link: 'Доабвить ссылку'
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [

  ]
})
export class AppModule { }
