import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SingleUserService } from '../../shared/single-user.service';
import Swal from 'sweetalert2';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerID;
  customerInfo = null;
  showOrHide = true;

  constructor(private route: ActivatedRoute,
              private service: SingleUserService,
              private router: Router,
              private userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.customerID = this.route.snapshot.paramMap.get('id');
    this.getCustomerInfo();
  }

  getCustomerInfo (){
    this.service.getSingleUser(this.customerID).subscribe(
      (res: any) => {
        this.customerInfo = res.user;
        this.showOrHide = false;
      }, err => {}
    );
  }

  blockUnBlock(id, blocking){
    let data = {
      userId: id,
      block: blocking,
      status: 'customer'
    };

    this.service.blockUser(data).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.msg,
          showConfirmButton: false,
          timer: 2000
        });

        this.getCustomerInfo();
      }
    );
  }

  sendNotification(userType){
    this.router.navigate(['/singleUser/send-notification/' + userType + '/' + this.customerID]);
  }


}
