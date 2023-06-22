import { Component, OnInit } from '@angular/core';

import { Task } from '../../model/task';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user = 'Beto';
  tasks: Task[] = [];
  constructor(private router: Router, private taskService: TaskService) {}
  //------------------------------------------
  ngOnInit(): void {
    this.loadTasks();
    console.log(this.tasks)
  }
  //------------------------------------------
  loadTasks() {
    console.log('Carregar as tasks');
    this.tasks = this.taskService.tasks
  }
  //------------------------------------------
  addTask() {
    this.router.navigateByUrl('/task', {
      state: this.tasks,
    });
  }
  //------------------------------------------
}
