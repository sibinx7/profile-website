import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ServiceComponent } from '../service/service.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { PostsComponent } from '../posts/posts/posts.component';
import { PostComponent } from '../posts/post/post.component';
import { ProgressBarComponent } from '../progress-bar.component';
import { ExperienceComponent } from '../home/experience/experience.component';


export const mainRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'portfolio/:id',
    component: PortfolioComponent
  },
  {
    path: 'services',
    component: ServiceComponent
  },
  {
    path: 'posts',
    children: [
      {
        path: '',
        component: PostsComponent
      },
      {
        path: ':id',
        component: PostComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(mainRoutes)
  ],
  exports: [RouterModule]
})

export class MainRouterModule {}

export const pageComponents = [ HomeComponent, ExperienceComponent, ProgressBarComponent ];
