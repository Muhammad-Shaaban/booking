import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from '../../../shared/shop.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  allOrders;
  showOrHide = true;

  constructor(private service: ShopService, private router: Router) { }

  ngOnInit(): void {
   this.loadData();
  }

  loadData(){
    this.service.getAllOrders().subscribe(
      (res: any) => {
        this.allOrders = res.orders as [];
        console.log(this.allOrders);
        this.showOrHide = false;
      }
    );
  }

  setToDeliver(id){
    this.service.setOrderToDeliver(id).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 2000
        });

        this.loadData();
      }, err => {console.log(err)}
    );
  }


  getSingleOrder(orderID){
    this.router.navigate(['/shop/orders/single-order/' + orderID]);
  }

}
