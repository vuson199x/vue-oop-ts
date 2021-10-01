<template>
  <div class="container">
    <div class="flex_box">
      <div class="flex_items">
        <div class="pd-25px">
          <div class="form-data">
            <h2 class="text-center">Add to task</h2>
            <AddEditForm
              v-on:onCreateTask="onCreateTask"
              v-bind:dataUpdate="task.dataUpdate"
            />
          </div>
        </div>
      </div>
      <div class="flex_items table">
        <div class="pd-25px mb-2rem">
          <h2 class="text-center" style="margin-top: 2rem">
            To do List
          </h2>
          <div class="">
            <div v-if="task.dataTable.length > 0">
              <div
                class="box"
                v-for="(item, index) in task.dataTable"
                v-bind:key="index"
              >
                <div
                  class="row item-task border-none"
                  v-bind:class="{ borderDisplay: task.isVisile === item.id }"
                >
                  <div class="mt-10">{{ item.name }}</div>
                  <div>
                    <button
                      type="button"
                      class="btn btn-success"
                      v-on:click="onVisibleForm(item)"
                    >
                      Detail
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      v-on:click="onDeleteTask(item)"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div
                  class="form-data"
                  style="padding: 20px"
                  v-if="task.isVisible === item.id"
                >
                  <AddEditForm
                    v-on:onUpdateTask="onUpdateTask"
                    v-bind:dataUpdate="task.dataUpdate"
                  />
                </div>
              </div>
            </div>
            <div v-else>
              <div class="text-center mt-21vh">Dữ liệu rỗng</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TaskClass from "@/classes/TaskClass";
import AddEditForm from "@/components/AddEditForm.vue";
import { TaskCreate, TaskDelete, TaskList, TaskUpdate } from "@/model";
@Component({
  components: {
    AddEditForm,
  },
})
export default class Task extends Vue {
  task = new TaskClass([], "", "", "", "", 0, null);

  onVisibleForm(data: TaskList): void {
    this.task.onVisibleForm(data);
  }

  onDeleteTask(data: TaskDelete): void {
    this.task.onDeleteTask(data);
  }

  onCreateTask(data: TaskCreate): void {
    this.task.onCreateTask(data);
  }

  onUpdateTask(data: TaskUpdate): void {
    this.task.onUpdateTask(data);
  }

  handleDataTable(): void {
    const dataList = JSON.parse(localStorage.getItem("tasks") || "");
    this.task.dataTable = dataList ? dataList : [];
  }

  created(): void {
    this.handleDataTable();
  }
}
</script>

<style lang="css" scoped src="@/assets/style.css"></style>
