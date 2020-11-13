import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketService } from '../../../shared/market.service';
import { UsersService } from '../../../shared/users.service';

@Component({
  selector: 'app-all-top-views',
  templateUrl: './all-top-views.component.html',
  styleUrls: ['./all-top-views.component.css']
})
export class AllTopViewsComponent implements OnInit {

  showOrHide = true;
  allTopViews;

  constructor(private service: MarketService, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.getLoadedData();
  }

  getLoadedData(){
    this.service.getAllTopViews().subscribe(
      (res: any) => {
        this.allTopViews = res.mostview as [];
        this.showOrHide = false;
      }
    );
  }
}
