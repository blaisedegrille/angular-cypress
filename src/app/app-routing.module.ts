import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'test-component', component: TestComponent },
  { path: 'register-component', component: RegisterComponent },
  //{ path: 'home-component', component: HomeComponent },
  //{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
