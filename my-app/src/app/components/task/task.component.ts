import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const dados = nav?.extras.state;
    console.log(dados);
  }

  ngOnInit(): void {}

  addTask() {
    // console.log(this.task.value);
    // console.log(this.descricao.value);
    // console.log(this.responsavel.value);
    // console.log(this.dt_inicio.value);
    // console.log(this.dt_fim.value);
    // console.log(this.tasks);

    this.task.setValue('');
  }

  removeTask() {}
}
