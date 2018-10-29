<template>
  <panel title="Projects">
    <div
      v-for="project in projects"
      :key="project.id"
      class="mt-2 project"
    >
    <EditableRecord
      :isEditMode="project.isEditMode"
      :title="project.title"
      @onInput="setProjectTitle({
          project,
          title: $event,
        })"
        @onEdit="setEditMode(project)"
        @onSave="saveProject(project)"
        @onDelete="deleteProject(project)"
        @onClick="projectClicked(project)" />
    </div>
    <CreateRecord
      placeholder="My project name..."
      @onInput="setNewProjectName"
      :value="newProjectName"
      @create="createProject" />
  </panel>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import CreateRecord from '@/components/CreateRecord.vue';
import EditableRecord from '@/components/EditableRecord.vue';

export default {
  components: {
    CreateRecord,
    EditableRecord,
  },
  mounted() {
    this.fetchProjects();
  },
  computed: {
    ...mapState('projects', [
      'newProjectName',
      'projects',
    ]),
  },
  methods: {
    projectClicked(project) {
      this.setCurrentProject(project);
      this.fetchTasksForProject(project);
    },
    ...mapMutations('projects', [
      'setNewProjectName',
      'setEditMode',
      'setProjectTitle',
      'setCurrentProject',
    ]),
    ...mapActions('projects', [
      'createProject',
      'fetchProjects',
      'saveProject',
      'deleteProject',
    ]),
    ...mapActions('tasks', [
      'fetchTasksForProject',
    ]),
  },
};
</script>

<style scoped>
.project {
  font-size: 24px;
}
.icon {
  cursor: pointer;
}
.icon:hover {
  color: #333;
}
</style>
