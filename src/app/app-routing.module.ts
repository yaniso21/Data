import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NavebarComponent } from './navebar/navebar.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {path : "form", component : FormComponent},
  {path : "navebar", component : NavebarComponent},
  {path : "register", component : RegisterComponent},
  {path :"user", component : UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
