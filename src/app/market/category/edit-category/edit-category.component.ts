import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketService } from '../../../shared/market.service';
import Swal from 'sweetalert2';
import { UsersService } from '../../../shared/users.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  CategoryId;
  formData = {
    name: '',
    arb_name: '',
    CatId: ''
  };

  constructor(private service: MarketService, private route: ActivatedRoute, private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.CategoryId = this.route.snapshot.paramMap.get('id');

    this.service.getSingleCategory(this.CategoryId).subscribe(
      (res: any) => {
        this.formData.name = res.catigoryNae;
        this.formData.arb_name = res.arb_name;
        this.formData.CatId = res.id;
      }
    );
  }

  updateCategory(){
    this.service.updateCategpory(this.formData).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.msg,
          showConfirmButton: false,
          timer: 2000
        });

        this.router.navigate(['/market/categories/allCategory']);
      }
    );
  }

}
