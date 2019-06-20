import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  recipe : Recipe;

  constructor(private route: ActivatedRoute,
     private router: Router,
     private recipeService: RecipeServiceService) { 
       this.recipe = new Recipe();
     }
  onSubmit(){
    this.recipeService.save(this.recipe).subscribe(
      result => this.gotoRecipeList()
    )
  }

  gotoRecipeList(){
    this.router.navigate(['/recipes']);
  }


  ngOnInit() {
  }

}
