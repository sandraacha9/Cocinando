import { Component, OnInit, OnDestroy } from '@angular/core';

import { CategoryService } from './../../../../core/services/category/category.service';
import { CategoryVO } from './../../../../model/category/category-vo.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-category-handler',
  templateUrl: './category-handler.component.html',
  styleUrls: ['./category-handler.component.scss']
})
export class CategoryHandlerComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  constructor(
    private categoryService: CategoryService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.subscription = new Subscription();
    this.loadCategories();
  }

  loadCategories() {
    this.subscription.add(
      this.categoryService.onCategoryChange.subscribe(categories => {
        if (categories != null) {
          this.categoryHandler(categories);
        }
      })
    );
  }

  categoryHandler(categories: CategoryVO[]) {
    const url = `/cocinando/category/${categories[0].categoryId}`;
    this.router.navigate([url]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
