import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketService } from '../../shared/market.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(public service: MarketService, private router: Router) { }

  ngOnInit(): void {
  }

  searchMarket(){
    this.router.navigate(['/market/search']);
  }

}
