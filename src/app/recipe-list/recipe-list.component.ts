import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe';
import { RecipeServiceService } from '../recipe-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(
    private router: Router,
    private recipeService: RecipeServiceService
    ){
  };

  onClick(recipe: Recipe) {
    this.recipeService.removeRecipe(recipe).subscribe(
      result => this.gotoRecipeList());
    window.location.reload();
  }

  gotoRecipeList(){
    this.router.navigate(['/recipes']);
  }

  ngOnInit() {
    this.recipeService.findAll().subscribe(data => {
      
      this.recipes = data;
      console.log(data);
    });
  }

}
