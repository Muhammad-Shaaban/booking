import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../shared/policy.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-policies',
  templateUrl: './all-policies.component.html',
  styleUrls: ['./all-policies.component.css']
})
export class AllPoliciesComponent implements OnInit {

  formData = {
    POLICY: '',
    POLICY_EN: ''
  };

  constructor(private service: PolicyService) { }

  ngOnInit(): void {
    this.service.getPlicy().subscribe(
      (res: any) => {
        this.formData.POLICY = res.Policy[0].policy;
        this.formData.POLICY_EN = res.Policy[0].POLICY_EN;
      }
    );
  }

  editPolicy(){
    this.service.postPolicy(this.formData).subscribe(
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

}
