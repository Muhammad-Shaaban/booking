import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/users.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: UsersService, private route: Router) { }

  ngOnInit(): void {
    this.service.user = {
      email: '',
      password: ''
    };
  }

  onLogin() {
    this.service.login().subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Successfully Logedin',
          showConfirmButton: false,
          timer: 2000
        });
        this.route.navigate(['/main']);
        localStorage.setItem('token', res.token);
      },
      (err: any) => {
        if (err.status === 401) {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.error.message,
            showConfirmButton: false,
            timer: 2000
          });
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.error.message,
            showConfirmButton: false,
            timer: 2000
          });
        }

      }
    );
  }

}
