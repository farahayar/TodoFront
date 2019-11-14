import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { User } from '../../../models/user'
import { UserServicesService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  subsform: FormGroup;
  user: User;


  constructor(private t:Title,private fb: FormBuilder, private _us: UserServicesService, private toastr: ToastrService,private router:Router) {
    this.t.setTitle("Inscription");

    this.subsform = fb.group(
      {
        nom: new FormControl("", [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z]+')
        ]),
        prenom: new FormControl("", [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z]+')
        ]),
        tel: new FormControl("", [
          Validators.required,
          Validators.pattern('[0-9]+'),
          Validators.minLength(8)

        ]),
        email: new FormControl("",
          [
            Validators.required,
            Validators.email
          ]),
        motDePass: new FormControl("", [
          Validators.required,
          Validators.minLength(6)
        ]),
        ReMotDePass: new FormControl("", [
          Validators.required,
        ])
      }
    );
  }

  get nom() {
    return this.subsform.get('nom');
  }
  get prenom() {
    return this.subsform.get('prenom');
  }

  get tel() {
    return this.subsform.get('tel');
  }
  get email() {
    return this.subsform.get('email');
  }

  get pass() {
    return this.subsform.get('motDePass');
  }

  get confirmPass() {
    return this.subsform.get('ReMotDePass');
  }

  ngOnInit() {
    this.user = new User();
    if (this._us.isLoggedUser()) {
      this.router.navigate(['/to-do-list'])
    }
    else {
      if (this._us.isLoggedAdmin()) {
        this.router.navigate(['/admin'])

      }
    }
  }

  inscription() {
    // console.log(this.subsform.value);
    let data = this.subsform.value;
    let user = new User(data.nom,data.prenom,data.tel,data.email,data.motDePass);
    

    this._us.userIncription(user).subscribe((res) => {

      this.toastr.success('user ajouté');

      setTimeout(()=>{
        this.router.navigate(['/to-do-list']);
      },2000);

    }, (err) => {
      this.toastr.error('erreur d ajout');

      console.log(err);
    });
  }




}


