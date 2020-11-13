import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketService } from '../../../shared/market.service';
import { UsersService } from '../../../shared/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-requested-ads',
  templateUrl: './requested-ads.component.html',
  styleUrls: ['./requested-ads.component.css']
})
export class RequestedADSComponent implements OnInit {

  showOrHide = true;
  allAds;

  constructor(private service: MarketService, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.service.getRequestedAds().subscribe(
      (res: any) => {
        this.allAds = res.ads as [];
        this.showOrHide = false;
      }
    );

  }


  acceptAdsRequest(id){

    this.showOrHide = true;

    this.service.acceptedAds(id).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 2000
        });

        this.service.getRequestedAds().subscribe(
          (res2: any) => {
            this.allAds = res2.ads as [];
            this.showOrHide = false;
          }
        );
      }, err=>{console.log(err)}
    );
  }

}
