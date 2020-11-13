import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketService } from '../../../shared/market.service';
import { UsersService } from '../../../shared/users.service';

@Component({
  selector: 'app-ads-details',
  templateUrl: './ads-details.component.html',
  styles: [
  ]
})
export class AdsDetailsComponent implements OnInit {

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

}
