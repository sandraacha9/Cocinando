import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductVO } from '../../../model/product/product-vo.model';
import { CustomerService } from '../../../core/services/customer/customer.service';

@Component({
  selector: 'app-product-mini-detail',
  templateUrl: './product-mini-detail.component.html',
  styleUrls: ['./product-mini-detail.component.scss']
})
export class ProductMiniDetailComponent implements OnInit {
  @Input() product: ProductVO;
  @Input() quantity?: number;

  @Output('selectProductEvent') selectProductEvent = new EventEmitter();

  constructor(
    private customerService: CustomerService,
  ) {}

  ngOnInit() {
  }
  
  switchProduct() {
    this.selectProductEvent.emit();
  }

  isRegistered(): boolean {
    return this.customerService.isRegistered();
  }
}
