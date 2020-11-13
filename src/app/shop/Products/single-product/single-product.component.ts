import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from '../../../shared/shop.service';
import { UsersService } from '../../../shared/users.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  prodID;
  prodInfo;
  showOrHide = true;

  constructor(private service: ShopService, private route: ActivatedRoute, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.prodID = this.route.snapshot.paramMap.get('id');

    this.service.getSingleProduct(this.prodID).subscribe(
      (res: any) => {
        this.prodInfo = res.product;
        this.showOrHide = false;
      }
    );
  }

}
