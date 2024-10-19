import { NgModule } from '@angular/core';

import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCtegoriesComponent } from './list-ctegories/list-ctegories.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsQCategoryComponent } from './products-qcategory/products-qcategory.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'apropos',
    loadChildren: () => import('./apropos/apropos.module').then(m => m.AproposModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {path:"home",component :HomeComponent,children: [
    { path: 'getdetails', component: DetailsCategoryComponent,
    }
    ]},
  
  {path:"",redirectTo :"home",pathMatch:'full'},//yhez automat lghady ki yhel
  //pathparam
  {path:"details/:id",component:ProductsCategoryComponent},
 //queryparam
  {path:"details",component:ProductsQCategoryComponent},
  {path:"**",component :NotFoundComponent}//dima felkher
 
];

@NgModule({
  declarations: [],
  imports: [
   
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
