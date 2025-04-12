import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },

  template: `
  <section class="space-y-6">
    <assignment-list title="In Progress" :assignments="filters.inprogress"></assignment-list>
    <assignment-list title="Completed Assignments" :assignments="filters.completed"></assignment-list>
  </section>
    `,
  // export default {
  // components: {
  //     'app-button': AppButton,
  // }
  // }

  data() {
    return {
      assignments: [
        { name: "Finish Project", complete: false, id: 1 },
        { name: "Read Chapter 4", complete: false, id: 2 },
        { name: "Turn in Homework", complete: false, id: 3 },
      ],
    };
  },

  computed: {
    filters() {
        return {
            inprogress: this.assignments.filter((a) => !a.complete),
            completed: this.assignments.filter((a) => a.complete)
        }
    }
  },
};
