
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  slip: { id: number, advice: string} | null = null
  
  constructor(private http: HttpClient){}

ngOnInit():void {
  const url = 'https://cat-fact.herokuapp.com/facts';
  this.http. get<{ slip:{id: number, advice: string}}>(url).subscribe(retorno =>{
    this.slip = retorno.slip;
    // console.log(retorno)

  });

}



}
