import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';

import { AppHackerNewsService } from './services/app-hacker-news.service';
import { NewsFeedsComponent } from './components/news-feeds/news-feeds.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';

import { ShortDomainPipe } from './pipes/short-domain.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ChartComponent } from './components/chart/chart.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedsComponent,
    DateAgoPipe,
    ShortDomainPipe,
    PaginationComponent,
    ChartComponent,
    BookmarkComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [AppHackerNewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
