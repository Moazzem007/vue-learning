import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },

  template: `
  <section class="space-y-6">
    <assignment-list title="In Progress" :assignments="filters.inprogress"></assignment-list>
    <assignment-list title="Completed Assignments" :assignments="filters.completed"></assignment-list>
    <assignment-create @add="add" ></assignment-create>
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
        { name: "Finish Project", complete: false, id: 1, tag: "science" },
        { name: "Read Chapter 4", complete: false, id: 2, tag: "math" },
        { name: "Turn in Homework", complete: false, id: 3, tag: "math" },
      ],

      newAssignment: [

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

  methods: {
    add(name){
      this.assignments.push({
        name: name,
        complete: false,
        id: this.assignments.length + 1,
      });
      // this.newAssignment = '';
    }
  }
};
