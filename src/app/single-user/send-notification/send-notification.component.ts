import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SingleUserService } from '../../shared/single-user.service';
import Swal from 'sweetalert2';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.css']
})
export class SendNotificationComponent implements OnInit {

  formData = {
    msg: '',
    title: ''
  };

  userID;
  userType;

  constructor(private route: ActivatedRoute,
              private service: SingleUserService,
              private router: Router,
              private userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.userID = this.route.snapshot.paramMap.get('id');
    this.userType = this.route.snapshot.paramMap.get('userType');

    console.log(this.userType);
  }

  sendNotification(){
    let data = {
      userId: '',
      type: '',
      msg: this.formData.msg,
      title: this.formData.title
    };

    if (this.userType === 'allCustomer') {
      data.type = 'Customer';

    } else if (this.userType === 'allTraders') {
      data.type = 'Treader';

    } else {
      data.userId = this.userID;
      data.type = this.userType;
    }

    this.service.sendNotificationToUsers(data).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 2000
        });

        this.router.navigate(['/Users/customers']);
      }, err => {console.log(err)}
    );

  }

}
