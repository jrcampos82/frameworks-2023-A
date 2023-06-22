import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  
  tasks: Task[] = []; //  criar um array de Task vazio
  constructor() {}
}
