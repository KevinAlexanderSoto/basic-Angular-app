import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterFormComponent } from './components/character-form/character-form.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CharactersListComponent,
    CharacterFormComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
