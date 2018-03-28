import { Component, OnInit } from '@angular/core';
import {SiteRank} from './SiteRank';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  response : Map<string, number>;

  constructor(private http:HttpClient) {}

  ngOnInit() {
  }

  public selected(event: Event){
    this.getSiteRank(event).subscribe(data => {
      this.response = data;
    });
    

  }

  getSiteRank(event: Event): Observable<Map<string,number>>{
    return this.http.get<Map<string,number>>('http://localhost:8080/ranksite-1/'+(<HTMLInputElement>event.target).value);
  }
  public getKeys()
  {
    if(this.response)
    {
      return Object.keys(this.response);
    }
  }
}
