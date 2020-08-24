import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHackerNewsService } from './services/app-hacker-news.service';
import { NewsFeedsComponent } from './components/news-feeds/news-feeds.component';

@NgModule({
  declarations: [AppComponent, NewsFeedsComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AppHackerNewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
