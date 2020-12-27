import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent {

  constructor(private activatedRoute: ActivatedRoute,
              private httpService: HttpService) {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get('id');
      this.httpService.get(id).subscribe(para => {
        console.log(para);
        window.location.href = para.url;
      });
    });
  }

}
