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

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedsComponent,
    DateAgoPipe,
    ShortDomainPipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [AppHackerNewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
