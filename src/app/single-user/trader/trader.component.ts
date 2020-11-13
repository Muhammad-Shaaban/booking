import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SingleUserService } from '../../shared/single-user.service';
import Swal from 'sweetalert2';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.css']
})
export class TraderComponent implements OnInit {

  traderID;
  traderInfo = null;
  showOrHide = true;

  constructor(private route: ActivatedRoute,
              private service: SingleUserService,
              private router: Router,
              private userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.traderID = this.route.snapshot.paramMap.get('id');

    this.service.getSingleUser(this.traderID).subscribe(
      (res: any) => {
        this.traderInfo = res.user;
        this.showOrHide = false;
      }, err => {}
    );
  }

  blockUnBlock(id, blocking){
    let data = {
      userId: id,
      block: blocking,
      status: 'treder'
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
      }
    );
  }

  sendNotification(userType){
    this.router.navigate(['/singleUser/send-notification/' + userType + '/' + this.traderID]);
  }

}
