<template>
  <panel :title="currentProject.title + ' - Tasks'">
    <div
      class="task mt-2"
      v-for="task in tasks"
      :key="task.id">

      <EditableRecord
        :isEditMode="task.isEditMode"
        :title="task.description"
        :completed="task.completed"
        @onInput="setTaskDescription({
          task,
          description: $event,
        })"
        @onEdit="setEditMode(task)"
        @onSave="saveTask(task)"
        @onDelete="deleteTask(task)">
        <v-icon
          @click="checkClicked(task)">
          {{ task.completed ? 'check_box' : 'check_box_outline_blank' }}
        </v-icon>
      </EditableRecord>
    </div>

    <CreateRecord
      placeholder="I need to ...."
      @onInput="setNewTaskName"
      :value="newTaskName"
      @create="createTask"
    />

  </panel>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import CreateRecord from '@/components/CreateRecord.vue';
import EditableRecord from '@/components/EditableRecord.vue';

export default {
  components: {
    CreateRecord,
    EditableRecord,
  },
  computed: {
    ...mapState('tasks', [
      'tasks',
      'newTaskName',
    ]),
    ...mapState('projects', [
      'currentProject',
    ]),
  },
  methods: {
    ...mapActions('tasks', [
      'createTask',
      'deleteTask',
      'saveTask',
    ]),
    ...mapMutations('tasks', [
      'setNewTaskName',
      'setTaskDescription',
      'setEditMode',
      'toggleCompleted',
    ]),
    checkClicked(task) {
      this.toggleCompleted(task);
      this.saveTask(task);
    },
  },
};
</script>

<style scoped>
.task {
  font-size: 24px;
}
</style>
