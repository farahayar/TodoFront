import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { User } from '../../../models/user'
import { UserServicesService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { log } from 'util';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users = [];
  

  constructor(private t:Title,private _us: UserServicesService, private tr: ToastrService) {
    this.t.setTitle("Admin");

   }

  ngOnInit() {
    this._us.getUsers().subscribe((res) => {
      this.users = res;

    })

  }

  activerUser(user) {
    console.log(user._id);

    this._us.activateUser(user._id).subscribe((res) => {
      this.users = res;

      this.tr.success("sa7it!");
     // this.ngOnInit();
    }, (err) => {
      this.tr.error("pfff!");
    })

  }

}
