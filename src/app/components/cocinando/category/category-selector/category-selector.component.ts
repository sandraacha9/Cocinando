import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';

import { NGXLogger } from 'ngx-logger';
import { CategoryVO } from '../../../../model/category/category-vo.model';
import { CategoryService } from '../../../../core/services/category/category.service';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent implements OnInit {
  @Output('selectCategoryEvent') selectCategoryEvent = new EventEmitter();

  categories: CategoryVO[];
  selectedCategoryId: number;

  constructor(
    private logger: NGXLogger,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.logger.trace('[CategorySelectorComponent] - ngOnInit');

    // on category id change
    this.categoryService.onCurrentSelectedCategoryChange.subscribe(
      categoryId => (this.selectedCategoryId = categoryId)
    );

    // subscribe of service get categories
    this.categoryService.onCategoryChange.subscribe(
      categories => (this.categories = categories)
    );
  }

  selectCategory() {
    this.selectCategoryEvent.emit();
  }
}
