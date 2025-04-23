import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiQueryComponent } from './Components/ai-query/ai-query.component';

const routes: Routes = [
  {path:"ai-query", component: AiQueryComponent},
  {path:"", redirectTo: "/ai-query", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
