import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // Dodajte ostale poti tukaj
  { path: '', redirectTo: '/login', pathMatch: 'full' }  // Privzeta pot, ki preusmeri na stran za prijavo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
