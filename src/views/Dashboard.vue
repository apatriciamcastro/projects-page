<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Button</v-btn>
        </template>
        <span>Tooltip</span>
      </v-tooltip>

      <v-layout row class="mb-3">
        <v-tooltip></v-tooltip>
        <v-btn small flat color="grey" @click="sortBy('title')">
          <v-icon left small>folder</v-icon>
          <span class="caption text-lowercase">by project title</span>
        </v-btn>

        <v-btn small flat color="grey" @click="sortBy('status')">
          <v-icon left small>check_circle_outline</v-icon>
          <span class="caption text-lowercase">by Status</span>
        </v-btn>

        <v-btn small flat color="grey" @click="sortBy('person')">
          <v-icon left small>person</v-icon>
          <span class="caption text-lowercase">by person</span>
        </v-btn>
      </v-layout>

      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>

          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip
                small
                :class="`${project.status} white--text caption my-2`"
              >{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
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
          person: "The Net Ninja",
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
          person: "Gouken",
          due: "20th Oct 2018",
          status: "Overdue",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a auctor odio, sed viverra nibh. Maecenas eros nibh, pharetra non arcu et, pretium consequat purus. Ut eros dolor, pulvinar ac tempus at, malesuada pretium leo. "
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>
<style>
.project.Complete {
  border-left: 4px solid #3cd1c2;
}

.project.Ongoing {
  border-left: 4px solid orange;
}

.project.Overdue {
  border-left: 4px solid tomato;
}

.v-chip.Complete {
  background: #3cd1c2;
}

.v-chip.Ongoing {
  background: #ffaa2c;
}

.v-chip.Overdue {
  background: #f83e70;
}
</style>