<template>
  <v-dialog max-width="600px">
    <v-btn flat slot="activator" class="success">Add Project</v-btn>
    <v-card>
      <v-card-title>
        <h2>New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
          <v-textarea label="Information" v-model="content" prepend-icon="edit"></v-textarea>

          <v-menu>
            <v-text-field
              :value="due"
              slot="activator"
              v-model="due"
              label="Date"
              prepend-icon="date_range"
              @blur="date = parseDate(due)"
              v-on="on"
            ></v-text-field>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-spacer></v-spacer>
          <v-btn flat class="success mx-8 mt-3" @click="submit">Add Project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      due: new Date().toISOString().substr(0, 10),
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"]
    };
  },
  methods: {
    submit() {
      console.log(this.title, this.content);
    }
  },
  computed: {
    parseDate(due) {
      if (!due) return null;

      const [month, day, year] = due.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>