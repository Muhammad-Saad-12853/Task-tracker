import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Task } from "./task/task";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, Task,FormsModule],
  imports: [Task,FormsModule],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-tracker');
}
