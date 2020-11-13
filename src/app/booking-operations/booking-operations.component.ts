import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketService } from '../shared/market.service';

@Component({
  selector: 'app-booking-operations',
  templateUrl: './booking-operations.component.html',
  styleUrls: ['./booking-operations.component.css']
})
export class BookingOperationsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/login']);
    }
  }

}
