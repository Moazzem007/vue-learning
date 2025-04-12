export default {
    template: `
    <form @submit.prevent="add">
        <input v-model="newAssignment" placeholder="New assignment..." name="text-black" />
        <button type="submit">Add</button>
    </form>
    `,

    props: {
        assignments: Array,
    },

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add(){
            this.$emit("add", this.newAssignment);
            // this.assignments.push({
            //   name: this.newAssignment,
            //   complete: false,
            //   id: this.assignments.length + 1,
            // });
            this.newAssignment = '';
          }
    },
}