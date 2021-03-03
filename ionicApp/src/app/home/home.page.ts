import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor
  constructor(private http: HttpClient) {}
  send(){
    let newdate = new Date()
    if(this.valor == undefined){
      console.log("Não preencheu o valor")
    } else {
      console.log(newdate.getUTCMonth() + "," + newdate.getUTCFullYear())
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      })
      this.http.post("http://localhost:3000/", {
        headers: headers
      }).subscribe((res: any)=> {
        console.log(res)
      })
    }
    

  }
}
