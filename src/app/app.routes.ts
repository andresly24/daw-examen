
import { NgModule } from '@angular/core';



import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NoticiasComponent } from './noticias/noticias.component';


import { RouterModule, Routes } from '@angular/router';



export const routes: Routes = [
    {
        path:'inicio',
        component: InicioComponent
      },
      {
        path:'nosotros',
        component: NosotrosComponent
      },
      {
        path:'noticias',
        component: NoticiasComponent
      },
      
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    
  })
  export class AppRoutingModule { } 
  
