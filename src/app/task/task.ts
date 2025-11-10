import { Component, signal } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Taskmodel } from '../model/task-model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task',
  imports: [FormsModule,CommonModule],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
taskiid:number=0;
taskname:string="";
taskdetails:string="";
tasks:any[]=[]
add(){
  if (this.taskname.trim() && this.taskdetails.trim()) {
      this.tasks.push({
        name: this.taskname,
        details: this.taskdetails
      });
       this.taskname = '';
      this.taskdetails = '';
    }

}
}