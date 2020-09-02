import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ServiceComponent} from './service/service.component';
import {PostsComponent} from './posts/posts/posts.component';
import {PostComponent} from './posts/post/post.component';
import {ProgressBarComponent} from './progress-bar.component';
import {ExperienceComponent} from './home/experience/experience.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {HireMeComponent} from './hire-me/hire-me.component';

export const mainRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'services',
    component: ServiceComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
  },
  {
    path: 'hire-me',
    component: HireMeComponent
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
  },
  { path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) }
];


@NgModule({
  imports: [
    RouterModule.forRoot(mainRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

export const pageComponents = [HomeComponent, ExperienceComponent, ProgressBarComponent];
