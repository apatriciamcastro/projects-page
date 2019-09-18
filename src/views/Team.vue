<template>
  <div class="team">
    <h1 class="subheading grey--text">Operating Systems Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="80" class="grey lighten-2">
                <img :src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: "João Dantas", role: "Head", avatar: '/avatar-joao.jpg' },
        { name: "Filipe Gonçalves", role: "Backend Developer" , avatar: '/avatar-filipe.jpg'},
        { name: "Ivo Gonçalves", role: "Fullstack Developer", avatar: '/avatar-ivo.jpg' },
        { name: "Ivo Petiz", role: "Backend Developer", avatar: '/avatar-petiz.jpg' },
        { name: "Jorge Fernandes", role: "Junior Backend Developer", avatar: '/avatar-jorge.jpg' },
        { name: "Patrícia Castro", role: "Junior Frontend Developer", avatar: '/avatar-patricia.jpg' },
        { name: "Tiago Moreira", role: "Frontend Developer", avatar: '/avatar-tiago.jpg' }
      ]
    };
  }
};
</script>
