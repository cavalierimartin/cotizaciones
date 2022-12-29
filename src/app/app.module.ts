import { HttpClientModule } from '@angular/common/http';

//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

// environment
import { environment } from '../environments/environment';

// Components
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { UpdateProductComponent } from './components/products/update-product/update-product.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { LoadingBlockComponent } from './components/common/loading-block/loading-block.component';
import { HeaderBarComponent } from './components/common/header-bar/header-bar.component';
import { FooterBarComponent } from './components/common/footer-bar/footer-bar.component';
import { SideBarComponent } from './components/common/side-bar/side-bar.component';
import { TextComponent } from './components/inputs/text/text.component';
import { SelectComponent } from './components/inputs/select/select.component';
import { ColorsComponent } from './components/inputs/colors/colors.component';
import { RadioComponent } from './components/inputs/radio/radio.component';
import { NumberComponent } from './components/inputs/number/number.component';
import { CheckboxComponent } from './components/inputs/checkbox/checkbox.component';
import { DateComponent } from './components/inputs/date/date.component';
import { DateTimeComponent } from './components/inputs/date-time/date-time.component';
import { FileComponent } from './components/inputs/file/file.component';
import { TextareaComponent } from './components/inputs/textarea/textarea.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthService } from './services/auth.service';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    UpdateProductComponent,
    ProductCardComponent,
    LoadingBlockComponent,
    HeaderBarComponent,
    FooterBarComponent,
    SideBarComponent,
    TextComponent,
    SelectComponent,
    ColorsComponent,
    RadioComponent,
    NumberComponent,
    CheckboxComponent,
    DateComponent,
    DateTimeComponent,
    FileComponent,
    TextareaComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'cotizaciones'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
