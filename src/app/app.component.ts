import { Component,OnInit } from '@angular/core';
import {of, from} from 'rxjs'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  ngOnInit(){
    of(2,3,6,8).subscribe(console.log);

    from([5,10,15,20]).subscribe(
      item => console.log(`printing ... ${item}`),
      error => console.log(`error occured ${error}`),
      () => console.log('complete')
    );
  }
}
