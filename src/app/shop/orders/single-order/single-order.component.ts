import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../../shared/shop.service';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {

  showOrHide = true;
  orderID;
  orderDetails;

  constructor(private service: ShopService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.orderID = this.route.snapshot.paramMap.get('id');

    this.service.getSingleOrder(this.orderID).subscribe(
      (res: any) => {
        this.orderDetails = res.order;
        console.log(this.orderDetails);
        this.showOrHide = false;
      }
    );
  }

}
