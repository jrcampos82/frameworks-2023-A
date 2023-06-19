export class Task {
  name: string;
  description: string;
  responsavel: string;
  startDate: number;
  endDate: number;
  constructor() {
    this.name = '';
    this.description = '';
    this.responsavel = '';
    this.startDate = 0;
    this.endDate = 0;
  }
}
