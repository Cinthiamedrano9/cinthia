import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MidescripcionpersonalComponent } from './pages/midescripcionpersonal/midescripcionpersonal.component';
import { LugardenacimientoComponent } from './pages/lugardenacimiento/lugardenacimiento.component';
import { MismetaspropuestasComponent } from './pages/mismetaspropuestas/mismetaspropuestas.component';

const routes: Routes =[ 

  {
  path:'midescripcionpersonal',
  component: MidescripcionpersonalComponent

   },

   {
    path:'lugardenacimiento',
    component: LugardenacimientoComponent
  
     },

     {
      path:'mismetaspropuestas',
      component: MismetaspropuestasComponent
    
       },


       {
        path:'**',
        redirectTo:'midescripcionpersonal'
      
         },



]



@NgModule({
  declarations: [],
exports: [
  RouterModule
],

  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
