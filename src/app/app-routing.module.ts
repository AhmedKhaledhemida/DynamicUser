import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdataComponent } from './userdata/userdata.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
const routes: Routes = [
{
  path:"",component:UserdataComponent
},
      {path: 'user/:id', component: UserinfoComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
