import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketService } from '../../../shared/market.service';
import { UsersService } from '../../../shared/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ads-requested-details',
  templateUrl: './ads-requested-details.component.html',
  styleUrls: ['./ads-requested-details.component.css']
})
export class AdsRequestedDetailsComponent implements OnInit {

  showOrHide = true;
  adsDetails;
  adsID;

  constructor(private route: ActivatedRoute, private service: MarketService, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.adsID = this.route.snapshot.paramMap.get('id');

    this.service.getAdsDetails(this.adsID).subscribe(
      (res: any) => {
        this.adsDetails = res.AD;
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

        this.router.navigate(['/market/ads/requested-ads']);
      });
  }

  refuseAdsRequest(id){

    let data = {
      ADId: id
    };

    this.service.refuseAds(data).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 2000
        });

        this.router.navigate(['/market/ads/requested-ads']);
      });
  }

}
