import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideEditorComponent } from './side-editor/side-editor.component';

const routes: Routes = [
  {path:'equilateral', component: SideEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
