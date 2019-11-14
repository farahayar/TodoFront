import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TodoService } from '../../../services/todo.service';
import { Todo } from '../../../models/todo';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NavbarComponent } from '../../landing-page/navbar/navbar.component';



@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  todos = [];
  dones = [];
  constructor(private t: Title, private toastr: ToastrService, private _ts: TodoService, private router: Router) {
    this.t.setTitle("Todo Liste");

  }

  ngOnInit() {
    // liaison avec back-end
    let token = localStorage.getItem("token");

    this._ts.showTodos().subscribe((res) => { this.todos = res; }, (err) => { });
    this._ts.showDones().subscribe((res) => { this.dones = res; }, (err) => { });

  }

  delete(todo) {
    let index = this.todos.indexOf(todo);
    let id = (todo._id);
    console.log(id);
    let nom = todo.title;
    this._ts.deleteTodos(id).subscribe((res) => {

      this.toastr.success(nom + " deleted");
      this.todos.splice(id, 1);



    }, (err) => {
      this.toastr.error(err);
      console.log(err);

    });
  }

  deletee(done) {
    let index = this.dones.indexOf(done);

    let id = done._id;
    let nom = done.title;
    this._ts.deleteTodos(id).subscribe((res) => {

      this.toastr.success(nom + " deleted");
      this.dones.splice(index, 1);





    }, (err) => {
      this.toastr.error(err);
      console.log(err);

    });
  }

  tansfer(todo) {

    let index = this.todos.indexOf(todo);
    let id = todo._id;

    console.log(id + "HERE IS THE ID");

    this._ts.isDone(id).subscribe((res) => {

      this.toastr.success("DONE");
      this.todos.splice(index, 1);
      this.dones.push(todo);


    }, (err) => {
      this.toastr.error(err);
      console.log(err);

    });
  }

  modifier(todo) {

    localStorage.setItem('todoModif', todo._id);
    this.router.navigateByUrl('/to-do-modif');


  }


}
