import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketService } from '../../../shared/market.service';
import { UsersService } from '../../../shared/users.service';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.css']
})
export class AllServicesComponent implements OnInit {

  showOrHide = true;
  allServices;

  constructor(private service: MarketService, private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.service.getServices().subscribe(
      (res: any) => {
        this.allServices = res.resServices as [];
        this.showOrHide = false;
      }
    );
  }

  addNewService() {
    this.router.navigate(['/market/services/createNewService']);
  }

  updateServcie(id){
    this.router.navigate(['/market/services/editService/' + id]);
  }

}
