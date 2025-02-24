import { Component } from '@angular/core';
import { projectNewData, editingResources } from './data';;

@Component({
  selector: 'app-Gantt',
  templateUrl: './Gantt.component.html',
  styleUrls: ['./Gantt.component.css']
})
export class GanttComponent {
  title = 'my-angular-project';
  public data: object[] = projectNewData;
  public resources: object[] = editingResources;
  public editOptions: object ={
    allowEditing: true,
    allowAdding: true,
    mode: "Auto" //Change to dialog for Dialog editing.
  }
  public toolbarOptions: string[] = ['Add'];
  public resourceFields: object = {
    id: "resourceId",
    name: "resourceName"
  }
  public labelOptions: object = {
    rightLabel: "resources",
    taskLabel: "TaskName"
  }
  public columnSettings: object[] = [
    {field: "TaskID", headerText: "Task ID"},
    {field: "TaskName", headerText: "Task Name"},
    {field: "resources", headerText: "Resources", width:"200"},
    {field: "StartDate", headerText: "Start Date"},
    { field: 'EndDate', headerText: "End Date"},
    {field: "Duration", textAlign: "Right"},
  ]
  public taskSettings: object = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    child: "subtasks",
    dependency: "Predecessor",
    resourceInfo: "resources"
  }
}