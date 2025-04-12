export default {
  template: `
    <div>
        <button v-for="tag in tags" @click="$emit('update:modelValue', tag)" :class="{'border-blue-500 text-blue-500': tag == modelValue }">{{ tag }}</button>
    </div>
    `,

  props: {
    initialTags: Array,
    modelValue: String,
  },

  computed: {
    tags() {
      return ["all", ...new Set(this.initialTags)];
    },
  },
};