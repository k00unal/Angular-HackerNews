import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHackerNewsService } from './services/app-hacker-news.service';
import { NewsFeedsComponent } from './components/news-feeds/news-feeds.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { VoteCountChartsComponent } from './components/vote-count-charts/vote-count-charts.component';
import { ShortDomainPipe } from './pipes/short-domain.pipe';

@NgModule({
  declarations: [AppComponent, NewsFeedsComponent, DateAgoPipe, VoteCountChartsComponent, ShortDomainPipe],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AppHackerNewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
