import { Component, OnInit } from '@angular/core';
import { SupportService } from '../../shared/support.service';
import Swal from 'sweetalert2';
import { UsersService } from '../../shared/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support-messages',
  templateUrl: './support-messages.component.html',
  styleUrls: ['./support-messages.component.css']
})
export class SupportMessagesComponent implements OnInit {

  totalRecords: number;
  totalPages;
  allSupportMessage;
  showNextandPrev = false;
  showOrHide = true;

  constructor(public service: SupportService, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.getNumberOfPages();

    this.service.getSupportMesssageFromUssrPagi().subscribe(
      (res: any) => {
        this.allSupportMessage = res.support as [];
        this.showOrHide = false;
      }
    );
  }

  // Get Number of Page
  getNumberOfPages() {
    // get all products in curent category
    this.service.getSupportMesssageFromUssr().subscribe(
     (count: any) => {
       this.totalRecords = count.TotaNum;

       // Build Pagination
       this.totalPages = this.totalRecords / 10;

       // Check Number of buttons that will be show to user
       if (this.totalPages < 1) {
         this.totalPages = 1;
       } else {
         this.totalPages = Math.ceil(this.totalPages);
       }


       // show or hide Next & Previous Button
       this.showNextandPrev = this.totalPages > 5 ? true : false;

     }
   );
 }

 // Pagination ==>
  // Generate Page numbers
  paginationGenerate(page: number) {
    var items: number[] = [];
    for(var i = 1; i <= page; i++){
      items.push(i);
    }
    return items;
  }

  getNextPage(pageNumber: number) {
    this.service.pageNumber = pageNumber;
    this.showOrHide = true;

    this.service.getSupportMesssageFromUssrPagi().subscribe(
      (res: any) => {this.allSupportMessage = res.support as []; this.showOrHide = false; }
    );
  }

  goNext() {
    this.service.pageNumber += 1;
    this.showOrHide = true;

    this.service.getSupportMesssageFromUssrPagi().subscribe(
      (res: any) => {this.allSupportMessage = res.support as []; this.showOrHide = false; }
    );
  }

  goPrev() {
    this.service.pageNumber -= 1;
    this.showOrHide = true;

    this.service.getSupportMesssageFromUssrPagi().subscribe(
      (res: any) => {this.allSupportMessage = res.support as []; this.showOrHide = false; }
    );
  }

  answerMessage(messageID){
    let msm = prompt('What is your Answer for this message ? ');
    let data = {
      id: messageID,
      answer: msm.valueOf()
    };

    this.service.answerSupport(data).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Success !',
          showConfirmButton: false,
          timer: 2000
        });

        this.service.getSupportMesssageFromUssrPagi().subscribe(
          (res2: any) => {
            this.allSupportMessage = res2.support as [];
            this.showOrHide = false;
          }
        );
      }
    );

  }

}
