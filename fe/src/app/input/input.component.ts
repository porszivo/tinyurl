import { Component } from '@angular/core';
import { Tinyurl } from '../tinyurl';
import { HttpService } from '../http.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  title = 'tinyurl';
  shorten: Tinyurl;
  checkoutForm;

  test: string;

  constructor(private httpService: HttpService,
              private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      url: ''
    });
    this.shorten = new Tinyurl();
  }

  transform(value: any) {
    this.httpService.sendUrl(value.url)
      .subscribe(
        res => {
          this.shorten.key = res.headers.get('Location');
        }
      );
  }

}
