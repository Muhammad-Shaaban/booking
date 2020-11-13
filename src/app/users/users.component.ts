import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    // Check if user is not authenticated
    if (localStorage.getItem('token') === null) {
      this.route.navigate(['/login']);
    }
  }
}
