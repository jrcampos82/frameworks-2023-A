import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  task = new FormControl('');
  descricao = new FormControl('');
  responsavel = new FormControl('');
  dt_inicio = new FormControl('');
  dt_fim = new FormControl('');

  tasks: Task[] = []; //  criar um array de Task vazio

  constructor(private router: Router, private taskService: TaskService) {
    // const nav = this.router.getCurrentNavigation();
    // const dados = nav?.extras.state;
    // console.log(dados);
  }

  addTask() {
    const t = this.taskToObject();

    this.taskService.tasks.push(t); // p adicionar a nova task no array tasks
    this.limpar();
    setTimeout(() => {
      this.router.navigateByUrl('/dashboard');
    }, 1000);
  }

  limpar() {
    // limpar as caixas de texto
    this.task.setValue('');
    this.descricao.setValue('');
    this.responsavel.setValue('');
    this.dt_inicio.setValue('');
    this.dt_fim.setValue('');
  }

  taskToObject() {
    const t = new Task();
    t.name = this.task.value!;
    t.description = this.descricao.value!;
    t.responsavel = this.responsavel.value!;
    t.startDate = new Date(this.dt_inicio.value!);
    t.endDate = new Date(this.dt_fim.value!);
    return t;
  }
  removeTask() {}
}
