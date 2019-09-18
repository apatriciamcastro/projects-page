<template>
  <div class="projects">
    <h1 class="subheading grey--text">My Projects</h1>

    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
          <div slot="header">{{ project.title }}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">due by: {{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "Patrícia Castro",
          due: "1st Jan 2020",
          status: "Ongoing",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a auctor odio, sed viverra nibh. Maecenas eros nibh, pharetra non arcu et, pretium consequat purus. Ut eros dolor, pulvinar ac tempus at, malesuada pretium leo. "
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "Complete",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a auctor odio, sed viverra nibh. Maecenas eros nibh, pharetra non arcu et, pretium consequat purus. Ut eros dolor, pulvinar ac tempus at, malesuada pretium leo. "
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "Complete",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a auctor odio, sed viverra nibh. Maecenas eros nibh, pharetra non arcu et, pretium consequat purus. Ut eros dolor, pulvinar ac tempus at, malesuada pretium leo. "
        },
        {
          title: "Create community forum",
          person: "Patrícia Castro",
          due: "20th Oct 2018",
          status: "Overdue",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a auctor odio, sed viverra nibh. Maecenas eros nibh, pharetra non arcu et, pretium consequat purus. Ut eros dolor, pulvinar ac tempus at, malesuada pretium leo. "
        }
      ]
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person==='Patrícia Castro'
      });
    }
  }
};
</script>
