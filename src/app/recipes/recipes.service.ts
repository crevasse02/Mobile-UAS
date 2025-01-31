import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Nasi Goreng',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Nasi-Goreng.jpg',
      ingredients: ['Nasi', 'Bawang Putih', 'Kecap', 'Cabai']
    },
    {
      id: 'r2',
      title: 'Gado-gado',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Gado-gado_in_Jakarta.JPG',
      ingredients: ['Lontong', 'Tempe', 'Tahu', 'Timun']
    }
  ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find( recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !==recipeId;
    })
  }
}
