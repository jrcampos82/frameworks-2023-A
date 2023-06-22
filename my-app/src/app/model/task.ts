export class Task {
  name: string;
  description: string;
  responsavel: string;
  startDate: Date;
  endDate: Date;

  constructor() {
    this.name = '';
    this.description = '';
    this.responsavel = '';
    this.startDate = new Date();
    this.endDate = new Date();
  }
}
