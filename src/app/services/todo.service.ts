import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/todo'
import { from } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private addTodoUrl = "http://localhost:3000/todo/todoAjout";

  private showTodosUrl = "http://localhost:3000/todo/userTodos";

  private deleteTodoUrl = "http://localhost:3000/todo/deleteTodo/";

  private modifTodoUrl = "http://localhost:3000/todo/todoModif/";

  private userDonesUrl = "http://localhost:3000/todo/userDones/";

  private isDoneUrl = "http://localhost:3000/todo/isDone/";

  private afficheTodoModifurl ="http://localhost:3000/todo//todoModifAffiche/";


  constructor(private http: HttpClient) { }


  addTodo(todo: Todo) {
    let t = localStorage.getItem('token');
    let header = new HttpHeaders({ "Authorization": t, "Content-Type": "application/json" });

    return this.http.post<any>(this.addTodoUrl, todo, { headers:  header });
  }

  showTodos() {

    let t = localStorage.getItem('token');
    let header = new HttpHeaders({ "Authorization": t, "Content-Type": "application/json" });


    return this.http.get<any>(this.showTodosUrl, { headers:  header });
  }

  showDones() {

    let t = localStorage.getItem('token');
    let header = new HttpHeaders({ "Authorization": t, "Content-Type": "application/json" });


    return this.http.get<any>(this.userDonesUrl, { headers:  header });

  }

  deleteTodos(id: string) {
    let t = localStorage.getItem('token');
    let header = new HttpHeaders({ "Authorization": t});

    return this.http.delete<any>(this.deleteTodoUrl+id, { headers:  header });
  }

  modifTodos(todo:Todo,id: string) {

    let t = localStorage.getItem('token');
    const httpOptions= { 
      headers : new HttpHeaders({ "Authorization": t})
    }
    return this.http.put<any>(this.modifTodoUrl+id, todo,httpOptions);

  }

  isDone(id: string) {

    let t = localStorage.getItem('token');
    const httpOptions= { 
      headers : new HttpHeaders({ "Authorization": t})
    }
    return this.http.put<any>(this.isDoneUrl+id,null,httpOptions);

  }

  afficheTodoModif(id :string)
  {
    let t = localStorage.getItem('token');

    const httpOptions= { 
      headers : new HttpHeaders({ "Authorization": t})
    }

    return this.http.get<any>(this.afficheTodoModifurl+id,httpOptions);

  }



}
