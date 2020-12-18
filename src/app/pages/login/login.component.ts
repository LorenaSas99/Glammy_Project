import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.email,this.password);
    this.http.post<any>('/api/TW_Project/cont.php', { email: this.email, password: this.password }).subscribe(data => {
       console.log(data);
    })     
  }

}
