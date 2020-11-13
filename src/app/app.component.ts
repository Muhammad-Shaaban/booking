import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  direction;
  token;

  constructor(private route: Router, public translate: TranslateService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem('lang'));
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.token = true;
    } else {
      this.token = false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }

  regiter(){
    this.route.navigate(['/register']);
  }

  switchLang(lang) {
    if (lang === 'ar') {
      this.direction = 'rlt';
    } else {
      this.direction = 'ltr';
    }

    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

}
