import {Component, EventEmitter, Input, Output} from "@angular/core";
import { Task } from "./task.model";
import {CardComponent} from "../../shared/card/card.component";
import {DatePipe} from "@angular/common";
import {TaskService} from "../task.service";



@Component({
  selector: 'app-task',
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: 'task.component.html',
  styleUrl: 'task.component.css',
  standalone: true,
})
export class TaskComponent {
  @Input({required: true}) task!: Task
  @Output() complete = new EventEmitter<string>();
  constructor(private readonly taskService: TaskService) {
  }

  completeTask() {
    return this.taskService.removeTask(this.task.id);
  }
}
