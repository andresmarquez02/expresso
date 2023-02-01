<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <div height="100%" class="white d-flex">
        <div tile class="ma-auto">
          <div class="mb-5 d-flex">
            <v-btn
              icon
              @click="setDialog()"
              color="grey darken-4"
              class="mx-auto"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <div class="d-flex">
            <div class="mx-auto">
              <v-form ref="formSearch" v-on:submit.prevent="search">
                <v-container>
                  <v-row style="width: 28rem">
                    <v-col cols="10">
                      <v-text-field
                        label="Search..."
                        outlined
                        dense
                        v-model="query"
                        :rules="rules"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                      <v-btn color="deep-purple lighten-1" elevation="1" text type="submit">
                        <span> <v-icon>mdi-magnify</v-icon> Search </span>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </div>
          </div>
        </div>
      </div>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
    props: ['dialog', 'setDialog'],
    data() {
        return {
            query: '',
            rules: [
              (value) => !!value || "The field is required",
            ],
        }
    },
    methods: {
        search(){
            this.$store.state.products = [];
            this.setDialog();
            this.$router.push({name: 'Search', params: {q: this.query}});
            this.$refs.formSearch.reset();
        }
    },
}
</script>
