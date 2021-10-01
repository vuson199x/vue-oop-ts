import { TaskCreate, TaskDelete, TaskList, TaskUpdate } from "@/model";

export default abstract class BaseClass {
  private _isVisible;
  private _id;
  private _name;
  private _description;
  private _priority;

  constructor(
    isVisible: string,
    id: string,
    name: string,
    description: string,
    priority: number
  ) {
    this._isVisible = isVisible;
    this._id = id;
    this._name = name;
    this._description = description;
    this._priority = priority;
  }

  public get isVisible(): string {
    return this._isVisible;
  }

  public set isVisible(v: string) {
    this._isVisible = v;
  }

  public get id(): string {
    return this._id;
  }

  public set id(v: string) {
    this._id = v;
  }

  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    this._name = v;
  }

  public get description(): string {
    return this._description;
  }

  public set description(v: string) {
    this._description = v;
  }

  public get priority(): number {
    return this._priority;
  }

  public set priority(v: number) {
    this._priority = v;
  }

  public randomId(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  public abstract onVisibleForm(data: TaskList): void;

  public onCreateTask(data: TaskCreate): void {
    console.log("onCreateTask");
  }

  public onUpdateTask(data: TaskUpdate): void {
    console.log("onUpdateTask");
  }
  public onDeleteTask(data: TaskDelete): void {
    console.log("onDeleteTask");
  }
}
