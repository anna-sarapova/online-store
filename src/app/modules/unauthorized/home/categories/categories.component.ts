import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/core/models/category.modes';
import { LinkModel } from 'src/app/core/models/link.model';
import { CategoryService } from 'src/app/core/services/category.service';
import { SpeechService } from 'src/app/core/services/speech.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent extends SpeechService implements OnInit {
  public categories: CategoryModel[];
  public links: LinkModel[];

  constructor( private categoryService: CategoryService) {
    super();
  }

  ngOnInit(): void {
    this.getCategories();
    this.initLinks();
  }



  private initLinks(): void {
    this.links = [];
    this.getCategories().forEach(category => {
      this.links.push({ name: category.name });
    });
  }

  public getCategories(): CategoryModel[] {
    this.categoryService.loadCategories().subscribe(result => {
      this.categories = result;
      return result;
    });
    return [];
  }

}
