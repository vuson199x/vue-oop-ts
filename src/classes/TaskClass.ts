import { TaskCreate, TaskDelete, TaskList, TaskUpdate } from "@/model";
import BaseClass from "./BaseClass";

export default class TaskClass extends BaseClass {
  private _dataTable: TaskList[];
  private _dataUpdate: any;

  constructor(
    dataTable: TaskList[],
    isVisible: string,
    id: string,
    name: string,
    description: string,
    priority: number,
    dataUpdate: any
  ) {
    super(isVisible, id, name, description, priority);
    this._dataTable = dataTable;
    this._dataUpdate = dataUpdate;
  }

  public get dataTable(): TaskList[] {
    return this._dataTable;
  }

  public set dataTable(v: TaskList[]) {
    this._dataTable = v;
  }
  public get dataUpdate(): TaskList[] {
    return this._dataUpdate;
  }

  public set dataUpdate(v: TaskList[]) {
    this._dataUpdate = v;
  }

  public onVisibleForm(data: TaskList): void {
    this._dataUpdate = data === this._dataUpdate ? null : data;
    super.isVisible = data.id === super.isVisible ? "" : data.id;
  }

  public onCreateTask(data: TaskCreate): void {
    console.log("data", data);
    if (data.name) {
      const obj = {
        id: super.randomId(),
        ...data,
      };
      this._dataTable.push(obj);
      localStorage.setItem("tasks", JSON.stringify(this._dataTable));
    } else {
      alert("Vui lòng nhập tên");
    }
  }

  public onUpdateTask(data: TaskUpdate): void {
    const val = this._dataTable.map((item: TaskList) => {
      if (item.id === data.id) {
        return {
          id: data.id,
          name: data.name,
          description: data.description,
          priority: data.priority,
        };
      } else {
        return item;
      }
    });
    this._dataTable = [...val];
    localStorage.setItem("tasks", JSON.stringify(this._dataTable));
    super.isVisible = "";
  }

  public onDeleteTask(data: TaskDelete): void {
    const newTable = this._dataTable.filter(
      (item: TaskList) => item.id !== data.id
    );
    this._dataTable = [...newTable];
    localStorage.setItem("tasks", JSON.stringify(this._dataTable));
  }
}
