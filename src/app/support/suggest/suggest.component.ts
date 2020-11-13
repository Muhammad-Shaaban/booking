import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupportService } from '../../shared/support.service';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent implements OnInit {

  showOrHide = true;
  allSuggest;

  constructor(private service: SupportService, private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    if (this.userService.checkAuthIsExpires()){
      this.router.navigate(['/login']);
    }

    this.service.getSuggests().subscribe(
      (res: any) => {
        this.allSuggest = res.result as [];
        this.showOrHide = false;
      }
    );
  }

}
