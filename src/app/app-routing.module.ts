import { NgModule } from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import { CharacterComponent } from './pages/character/character.component';
import { CharactersComponent } from './pages/characters/characters.component';

const routes:Routes = [
  {path:'characters',component: CharactersComponent},
  {path:'character/:id',component: CharacterComponent},
  {path:'**',pathMatch:'full', redirectTo:'characters'}
  
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
