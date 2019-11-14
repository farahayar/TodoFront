import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/user'
import { UserServicesService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';




@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  connForm: FormGroup;
  user: User;
  token: string;
  isLogged: boolean = localStorage.getItem('token') != null;



  constructor(private t: Title, private fb: FormBuilder, private _us: UserServicesService, private toastr: ToastrService, private route: Router) {

    this.connForm = fb.group({
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      pass: new FormControl("", [
        Validators.required,

      ])
    })
    this.t.setTitle("Connexion");

  }


  get email() {
    return this.connForm.get('email');
  }
  get pass() {
    return this.connForm.get('pass');
  }
  ngOnInit() {
    //this.isLogged = localStorage.getItem('token') != null;
    /*if (this._us.isLoggedUser()) {
      this.route.navigate(['/to-do-list'])
    }
    else {
      
      
      if (this._us.isLoggedAdmin()) {
        console.log("aaaaaaaaaaaaa");
        this.route.navigate(['/admin'])

      }
    }
*/

  }

  connection() {

    let data = this.connForm.value;

    let user = new User(null, null, null, data.email, data.pass);

    this._us.userConnection(user).subscribe((res) => {

      this.toastr.success('connected');
      localStorage.setItem('token', res.token);
      console.log(res.token);
      if (this._us.isLoggedUser())
        this.route.navigateByUrl('/to-do-list');
      else
        this.route.navigateByUrl('/admin');

    }, (err) => {

      this.toastr.error(err.error.message);
      console.log(err);
    });

  }



}
