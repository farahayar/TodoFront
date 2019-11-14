import { Component, OnInit,Input } from '@angular/core';
import { Todo } from '../../../models/todo';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { TodoService } from '../../../services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-to-do-modifier',
  templateUrl: './to-do-modifier.component.html',
  styleUrls: ['./to-do-modifier.component.css']
})
export class ToDoModifierComponent implements OnInit {

  todo :Todo;
  title:String;
  des:String;
  formModif: FormGroup;
  constructor(private t:Title,private _ts: TodoService, router: Router, fb: FormBuilder,private toastr:ToastrService) {
    this.t.setTitle("Todo Modif");


    this.formModif = fb.group({

      titre: new FormControl("", [
        Validators.required,
        Validators.minLength(2)
      ]),
      description: new FormControl("", [
        Validators.minLength(2)
      ])
    })

  }

  get titre() {
    return this.formModif.get('titre');
  }
  get description() {
    return this.formModif.get('description');
  }


  ngOnInit() {

    let t =localStorage.getItem('todoModif');
    console.log("zzzzzzzzz"+t);
    
    this._ts.afficheTodoModif(t).subscribe((res)=>{
      this.title=res.title;
      this.des=res.description;
    })

  }


  Modifier(){
    let data=this.formModif.value;
    let id =localStorage.getItem('todoModif');
    let todo = new Todo(data.titre, data.description);
    console.log(todo.description);
    this._ts.modifTodos(todo,id).subscribe((res)=>{
      this.toastr.success("Todo modifiee");
    },(err)=>{
      this.toastr.error("Modification non reussit")
    })
  }
}
