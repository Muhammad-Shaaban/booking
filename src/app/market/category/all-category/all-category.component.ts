import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketService } from '../../../shared/market.service';
import { UsersService } from '../../../shared/users.service';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnInit {

  showOrHide = true;
  allCategory;

  constructor(private service: MarketService, private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.service.getAvilableCategory().subscribe(
      (res: any) => {
        this.allCategory = res.resCatigory as [];
        this.showOrHide = false;
      }
    );
  }

  addNewCategory(){
    this.router.navigate(['/market/categories/createNewCategory']);
  }

  editCayegory(id){
    this.router.navigate(['/market/categories/editCategory/' + id]);
  }

}
