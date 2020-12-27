import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlComponent } from './url/url.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  {path: '', component: InputComponent},
  {path: ':id', component: UrlComponent},
  {path: '**', redirectTo: '', component: InputComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
