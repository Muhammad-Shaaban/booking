import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from '../../../shared/shop.service';
import Swal from 'sweetalert2';
import { UsersService } from '../../../shared/users.service';

@Component({
  selector: 'app-all-promoa',
  templateUrl: './all-promoa.component.html',
  styleUrls: ['./all-promoa.component.css']
})
export class AllPromoaComponent implements OnInit {

  allPromos;
  showOrHide = true;

  constructor(private service: ShopService, private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.loadingData();
  }

  loadingData(){
    this.service.getAllPromos().subscribe(
      (res: any) => {
        this.allPromos = res.promos as [];
        this.showOrHide = false;
      }
    );
  }

  createPromo(){
    this.router.navigate(['/shop/promos/create-promo']);
  }

  editPromo(id){
    this.router.navigate(['/shop/promos/update-promo/' + id]);
  }

  deletePromo(id){
    let data = {
      PromoId: id
    };

    this.service.deletePromo(data).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.msg,
          showConfirmButton: false,
          timer: 2000
        });
        this.loadingData();
      }
    );
  }
}
