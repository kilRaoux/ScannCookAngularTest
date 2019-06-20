import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Recipe} from '../app/recipe';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class RecipeServiceService {
  private recipeUrl: string;
  private removeRecipeUrl: string;
  constructor(private http: HttpClient) { 
    this.recipeUrl = "http://localhost:8090/recipes";
    this.removeRecipeUrl = "http://localhost:8090/recipe/remove";
  }

  public findAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl);
  }

  public save(recipe: Recipe){
    return this.http.post<Recipe>(this.recipeUrl, recipe);
  }

  public removeRecipe(recipe: Recipe){
    return this.http.post<string>(this.removeRecipeUrl, recipe);
  }
}
