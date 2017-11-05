import { Component, OnInit } from '@angular/core';

// {{servico}}
import { LoginService } from './../login.service';

// {{webservice rest}}
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  title: string;

  // {{servico}} // {{webservice rest}}
  constructor(private loginService: LoginService, private http: HttpClient) { }

  ngOnInit() {

    this.title = this.loginService.someMethod();

    interface UserResponse {
      login: string;
      bio: string;
      company: string;
    }

    // {{webservice rest}}
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);

      this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(data => {
        console.log("User Login: " + data.login);
        console.log("Bio: " + data.bio);
        console.log("Company: " + data.company);
      });

      
    });
  }

}
