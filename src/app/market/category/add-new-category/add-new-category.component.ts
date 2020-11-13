import { Component, OnInit } from '@angular/core';
import { MarketService } from '../../../shared/market.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UsersService } from '../../../shared/users.service';

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.css']
})
export class AddNewCategoryComponent implements OnInit {

  formData = {
    name: '',
    arb_name: ''
  };

  constructor(private service: MarketService, private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }
  }

  addCategory(){
    this.service.createNewCategory(this.formData).subscribe(
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
