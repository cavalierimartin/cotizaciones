import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { UpdateProductComponent } from './components/products/update-product/update-product.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'productos',
    children: [
      {
        path: '',
        component: ProductsListComponent
      },
      {
        path: 'actualizar/:productId',
        component: UpdateProductComponent,
      },
      {
        path: 'actualizar',
        component: UpdateProductComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
  { path: 'sign-in', component: SignInComponent },
  { path: 'registro-usuario', component: SignUpComponent },
  { path: 'olivde-mi-contrseña', component: ForgotPasswordComponent },
  { path: 'verificar-email', component: VerifyEmailComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'productos',
  },
  {
    path: '**',
    redirectTo: 'productos',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
