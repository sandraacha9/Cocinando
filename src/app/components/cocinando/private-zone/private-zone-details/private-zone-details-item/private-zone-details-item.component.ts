import { Component, OnInit, Input, ChangeDetectorRef  } from '@angular/core';
import { ProductVO } from '../../../../../model/product/product-vo.model';
//import { OrdersService } from '../../../../../core/services/orders/orders.service';

@Component({
  selector: 'app-private-zone-details-item',
  templateUrl: './private-zone-details-item.component.html',
  styleUrls: ['./private-zone-details-item.component.scss']
})
export class PrivateZoneDetailsItemComponent implements OnInit {
  @Input() product: ProductVO;
  @Input() quantity: number;
  @Input() index: number;
  @Input() total: string;
  isGift: boolean;

  public summaryProduct: number;

  constructor(
    private changeRef: ChangeDetectorRef,
    //private ordersService: OrdersService
  ) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  public ngDoCheck(): void {
    this.changeRef.detectChanges();
  }

}
