import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CategoryPipe } from './category.pipe';
import { routing } from './app.routing';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { PostDetailComponent } from './post-detail/post-detail.component'


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MarketplaceComponent,
    CategoryPipe,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
