import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../model/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private router: Router) {}

  task: Task = {
    name: 'beto',
    description: 'vitor',
    responsavel: 'beto',
    startDate: Date.now(),
    endDate: Date.now(),
  };
  user = 'Beto';

  tasks = this.task;

  addTask() {
    this.router.navigateByUrl('/task', {
      state: this.tasks,
    });
  }
}
