import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Injectable()
export class TriangleService {
  constructor(private http:HttpClient) {

  private static rest_url = "http://localhost:8081/?sideA='+this.sideA+'&sideB='+this.sideB'&sideC='+this.sideC+'";

  async fetchType() {
    try{
      const data: any = await this.http.get(TriangleService.rest_url).toPromise();
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
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NordFront';
  trType: any = {};

  constructor(private triangleService: TriangleService) { }
//       sideForm = new FormGroup({
//         sideA: new FormControl(''),
//         sideA: new FormControl(''),
//         sideA: new FormControl('')
//       });
  ngOnInit() {
    this.triangleService.fetchType().then(data => {
      this.trType = data;
    });
  }


}



// , formBuilder: FormBuilder
