import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

import { NGXLogger } from 'ngx-logger';
import { CategoryVO } from './../../../model/category/category-vo.model';
import { CategoryGetHttpService } from '../../../services/category/service/category-get-http.service';
import { HttpErrorHandlerService } from '../http-error-handler/http-error-handler.service';

@Injectable()
export class CategoryService {
  // on change of categories
  private currentCategories: CategoryVO[] = null;
  private messageSource = new BehaviorSubject<CategoryVO[]>(
    this.currentCategories
  );
  onCategoryChange = this.messageSource.asObservable();

  // on change of selected category navegation
  private currentSelectedCategory: number = null;
  private messageSourceCurrentCategory = new BehaviorSubject<number>(
    this.currentSelectedCategory
  );
  onCurrentSelectedCategoryChange = this.messageSourceCurrentCategory.asObservable();

  // on change of selected sub category navegation
  private currentSelectedSubCategory: number = null;
  private messageSourceCurrentSubCategory = new BehaviorSubject<number>(
    this.currentSelectedSubCategory
  );
  onCurrentSelectedSubCategoryChange = this.messageSourceCurrentSubCategory.asObservable();

  constructor(
    private logger: NGXLogger,
    private categoryGetHttpService: CategoryGetHttpService,
    private httpErrorHandlerService: HttpErrorHandlerService
  ) {}

  load(language: string) {
    this.categoryGetHttpService
      .get(language)
      .subscribe(
        categories => this.setCategories(categories),
        error => this.httpErrorHandlerService.handler(error)
      );
  }

  /**
   * When loggin out - call to delete
   */
  delete() {
    this.setCategories(null);
    this.setCurrentSelectedCategory(null);
    this.setCurrentSelectedSubCategory(null);
  }

  private setCategories(categories: CategoryVO[]) {
    this.currentCategories = categories;
    this.messageSource.next(this.currentCategories);
  }

  public setCurrentSelectedCategory(categoryId: number) {
    this.currentSelectedCategory = categoryId;
    this.messageSourceCurrentCategory.next(this.currentSelectedCategory);
  }

  public setCurrentSelectedSubCategory(subcategoryId: number) {
    this.currentSelectedSubCategory = subcategoryId;
    this.messageSourceCurrentSubCategory.next(this.currentSelectedSubCategory);
  }
}
