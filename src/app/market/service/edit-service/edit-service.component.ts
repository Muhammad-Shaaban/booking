import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketService } from '../../../shared/market.service';
import Swal from 'sweetalert2';
import { UsersService } from '../../../shared/users.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  formData = {
    name: '',
    arb_name: '',
    image: '',
    ServiceId: ''
  };

  serviceID;
  imgUrl;

  constructor(private service: MarketService, private route: ActivatedRoute, private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.serviceID = this.route.snapshot.paramMap.get('id');

    this.service.getSingleService(this.serviceID).subscribe(
      (res: any) => {
        this.formData.name = res.Service.name;
        this.formData.arb_name = res.Service.arb_name;
        // this.formData.image = res.Service.image;
        this.formData.ServiceId = res.Service._id;
      }
    );
  }

  uploadFile(e){
    this.imgUrl = e.target.files[0];
  }


  updateService(){
    const form = new FormData();
    form.append('name', this.formData.name);
    form.append('arb_name', this.formData.arb_name);
    form.append('image', this.imgUrl);
    form.append('ServiceId', this.formData.ServiceId);

    this.service.editService(form).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 2000
        });

        this.router.navigate(['/market/services/all-services']);
      }
    );
  }

}
