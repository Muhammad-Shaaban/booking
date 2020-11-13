import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketService } from '../../shared/market.service';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-single-booking',
  templateUrl: './single-booking.component.html',
  styleUrls: ['./single-booking.component.css']
})
export class SingleBookingComponent implements OnInit {

  showOrHide = true;
  bookingOperID;
  item;

  constructor(private userService: UsersService,
              private router: Router,
              private route: ActivatedRoute,
              private marketService: MarketService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.bookingOperID = this.route.snapshot.paramMap.get('id');

    this.marketService.getSingleBookingOperation(this.bookingOperID).subscribe(
      (res: any) => {
        this.item = res.operation;
        this.showOrHide = false;
      }
    );
  }

}
