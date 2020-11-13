import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from '../../../shared/shop.service';
import Swal from 'sweetalert2';
import { UsersService } from '../../../shared/users.service';

@Component({
  selector: 'app-edit-promo',
  templateUrl: './edit-promo.component.html',
  styleUrls: ['./edit-promo.component.css']
})
export class EditPromoComponent implements OnInit {

  PromoID;

  formData = {
    name: '',
    descPercent: '',
    PromoId: ''
  };

  constructor(private service: ShopService, private route: ActivatedRoute, private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.PromoID = this.route.snapshot.paramMap.get('id');
    this.formData.PromoId = this.PromoID;
  }

  updatePromo(){
    this.service.updatePromo(this.formData).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.msg,
          showConfirmButton: false,
          timer: 2000
        });
        this.router.navigate(['/shop/promos/all-promos']);
      }

    );
  }

}
