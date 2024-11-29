import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTemplateComponent } from './ui/templates/main-template/main-template.component';

const routes: Routes = [{
  path: '',
  component: MainTemplateComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
