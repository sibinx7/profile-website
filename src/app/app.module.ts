import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainRouterModule, pageComponents } from './routes/main.routes';

import { BlogService } from './home/blog/blog.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { YearSpanPipe } from './year-span.pipe';
import { ImageComponent } from './common/image/image.component';
import { EducationComponent } from './home/education/education.component';
import { BlogComponent } from './home/blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceComponent } from './service/service.component';
import { PostsComponent } from './posts/posts/posts.component';
import { PostComponent } from './posts/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    pageComponents,
    YearSpanPipe,
    ImageComponent,
    EducationComponent,
    BlogComponent,
    PortfolioComponent,
    ServiceComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    MainRouterModule,
    HttpModule
  ],
  providers: [ BlogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
