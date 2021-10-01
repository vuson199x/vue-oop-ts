<template>
  <form @submit.prevent="onSubmitForm">
    <div>
      <label>Name</label>
      <input
        type="text"
        class="form-control"
        name="name"
        v-model="formValue.name"
        placeholder="Add new Task"
      />
    </div>
    <div>
      <label>Description</label>
      <textarea
        class="form-control"
        name="description"
        rows="12"
        cols="50"
        placeholder="Desciption..."
        v-model="formValue.description"
      ></textarea>
    </div>
    <div>
      <label>Priority</label>
      <select class="form-select" name="priority" v-model="formValue.priority">
        <option value="0">Low</option>
        <option value="1">Normal</option>
        <option value="2">High</option>
      </select>
    </div>
    <button type="submit" class="btn btn-success btn-form">
      Save
    </button>
  </form>
</template>

<script lang="ts">
import { TaskCreate, TaskList, TaskUpdate } from "@/model";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class AddEditForm extends Vue {
  @Prop({ default: null, type: Object, required: false }) dataUpdate: any;
  formValue: TaskList = {
    id: "0",
    name: "",
    description: "",
    priority: 1,
  };

  onSubmitForm(): void {
    if (!this.dataUpdate) {
      console.log("onCreateTask", this.dataUpdate);
      const data: TaskCreate = {
        name: this.formValue.name,
        description: this.formValue.description,
        priority: this.formValue.priority,
      };
      this.$emit("onCreateTask", data);
      this.formValue.name = "";
      this.formValue.id = "0";
      this.formValue.description = "";
      this.formValue.priority = 1;
    } else {
      const data: TaskUpdate = {
        id: this.formValue.id,
        name: this.formValue.name,
        description: this.formValue.description,
        priority: this.formValue.priority,
      };
      this.$emit("onUpdateTask", data);
      this.formValue.name = "";
      this.formValue.id = "0";
      this.formValue.description = "";
      this.formValue.priority = 1;
    }
  }

  created(): void {
    this.formValue.id = this.dataUpdate ? this.dataUpdate.id : "";
    this.formValue.name = this.dataUpdate ? this.dataUpdate.name : "";
    this.formValue.description = this.dataUpdate
      ? this.dataUpdate.description
      : "";
    this.formValue.priority = this.dataUpdate ? this.dataUpdate.priority : 1;
  }
}
</script>

<style lang="css" scoped src="@/assets/style.css"></style>
