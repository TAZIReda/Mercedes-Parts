import { Component, OnInit } from '@angular/core';
import { PrimeIcons,MenuItem } from 'primeng/api';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'frontend';
  countries!: any[] ;

    form = new FormGroup({
    selectedCountry: new FormControl(null)
    });

    selectedCountry: { name: string, code: string } | null = null;

  ngOnInit() {
      this.countries = [
          { name: 'Login', code: 'AU' },
          { name: 'Logout', code: 'BR' },
          { name: 'Register', code: 'CN' }
      ];
  }

}
