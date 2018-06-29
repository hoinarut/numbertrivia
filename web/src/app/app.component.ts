import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TriviaModel } from './trivia.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  number: number;
  trivia: TriviaModel = null;
  /**
   *
   */
  constructor(private http: HttpClient) {

  }

  getTrivia() {
    this.http.get<TriviaModel>(`http://localhost:5000/api/trivia/${this.number}`)
      .subscribe(
        res => {
          this.trivia = res;
          this.number = null;
        },
        err => {
          console.error(err);
        });
  }
}
