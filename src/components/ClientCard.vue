<template>
  <v-card class="mx-auto" color="white" elevation="0" light max-width="100%">
    <v-card-title class="pb-0">
      <v-icon left> mdi-twitter </v-icon>
      <span class="font-weight-light text-body-2">Twitter</span>
    </v-card-title>
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            :src="user[id].picture.thumbnail"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="font-weight-bold">{{ user[id].name.first }} {{ user[id].name.last }}</v-list-item-title>
          <v-list-item-title class="text--secondary">@{{ user[id].login.username }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
    <v-card-text class="pt-0 text-h6">
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem eius laboriosam inventore doloremque quo iste totam".
    </v-card-text>
    <v-card-actions>
      <v-list-item class="grow">
        <v-row align="center" justify="start">
          <v-icon class="mr-1"> mdi-heart </v-icon>
          <span class="mr-2 subheading">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1"> mdi-share-variant </v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
    props: ['users'],
    data() {
        return {
            user: this.users,
            id: Math.floor(Math.random() * 9)
        }
    },
}
</script>
