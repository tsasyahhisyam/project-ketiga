import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { RecipeDetailComponent } from "../app/recipe/recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "../app/recipe/recipe-detail/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "../app/recipe/recipe-detail/recipe-list/recipe-item/recipe-item.component";
import { ShoppingEditComponent } from "../app/shopping-list/shopping-edit/shopping-edit.component";
import { DropdownDirective } from '../app/shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    ShoppingListComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
