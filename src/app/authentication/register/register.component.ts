import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/users.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service: UsersService, private route: Router) { }

  ngOnInit(): void {
    this.service.user = {
      email: '',
      password: ''
    };
  }


  rgister(){
    this.service.signup().subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 2000
        });

        this.route.navigate(['/main']);
      },
      (err: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: err.error.message,
          showConfirmButton: false,
          timer: 2000
        });
      }
    );
  }
}
