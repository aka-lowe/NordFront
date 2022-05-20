import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Injectable()
export class TriangleService {
  constructor(private http:HttpClient) {}

  public static vibes = 'http://localhost:8081/?';

  async fetchType(aVal: string | undefined, bVal: string | undefined, cVal: string | undefined) {
    try{
     TriangleService.vibes = 'http://localhost:8081/?sideA='+aVal+'&sideB='+bVal+'&sideC='+cVal;

      const data: any = this.http.get(TriangleService.vibes);
      return data;
    } catch (error) {
      console.error("Error occurred:" + error);
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TriangleService],
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'NordFront';
  public trType: any = {};

  constructor(private triangleService: TriangleService, public fb:FormBuilder, private route: ActivatedRoute, private router: Router ) { }
      public sideForm =this.fb.group({
        sideA: [''],
        sideB: [''],
        sideC: ['']
      });
  ngOnInit() {
    this.triangleService.fetchType(this.sideForm.controls['sideA'].value, this.sideForm.controls['sideB'].value, this.sideForm.controls['sideC'].value).then(data => {
      this.trType = data;
    }) ;
  }
  

}
@Injectable()
export class ResString {
  constructor(private appcomp:AppComponent) {}
  getType() {
    return this.appcomp.trType 
  }

  
}


