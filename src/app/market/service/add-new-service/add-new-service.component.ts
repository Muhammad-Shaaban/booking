import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketService } from '../../../shared/market.service';
import Swal from 'sweetalert2';
import { from } from 'rxjs';
import { UsersService } from '../../../shared/users.service';

@Component({
  selector: 'app-add-new-service',
  templateUrl: './add-new-service.component.html',
  styleUrls: ['./add-new-service.component.css']
})
export class AddNewServiceComponent implements OnInit {

  formData = {
    name: '',
    arb_name: '',
    image: ''
  };

  imgUrl;

  constructor(private service: MarketService, private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }
  }

  uploadFile(event){
    this.imgUrl = event.target.files[0];
  }

  addService(){
    const form = new FormData();
    form.append('name', this.formData.name);
    form.append('arb_name', this.formData.arb_name);
    form.append('image', this.imgUrl);

    this.service.createService(form).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 2000
        });

        this.router.navigate(['/market/services/all-services']);
      }, err => {console.log(err)}
    );
  }

}
