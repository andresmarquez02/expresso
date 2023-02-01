<template>
  <div>
    <v-row class="mt-10 ma-0">
      <v-col class="col-12">
        <h2 class="font-weight-light">Stores Associated</h2>
        <hr class="m-1 deep-purple" style="height: 2px; width: 34px" />
      </v-col>
      <v-col cols="12">
        <v-card class="d-md-flex" elevation="0">
          <v-img min-height="100%" class="img-storeassociated" src="../assets/cart.jpg"></v-img>
          <div class="pl-4">
            <v-card-title>Coffe Andrew-Dev</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">4.5</div>
              </v-row>

              <div class="my-4 text-subtitle-1">Restaurant</div>

              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex
                molestias similique nulla porro harum quia omnis incidunt iure.
                Quas odit animi nostrum nesciunt consequuntur nisi nobis veniam,
                ducimus quibusdam!
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title class="pb-0">Open to</v-card-title>

            <v-card-text>
              <v-chip-group
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>5:30 AM</v-chip>
                <v-chip color="white">/</v-chip>
                <v-chip>7:30PM</v-chip>
              </v-chip-group>
            </v-card-text>
            <v-card-actions>
              <a
                href="https://andresmarquez02.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <v-btn color="deep-purple lighten-2" width="100%" text>
                  Visit Website
                </v-btn>
              </a>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-12 ma-0">
      <v-col cols="12" sm="6" md="3">
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-icon large color="deep-purple lighten-1">mdi-cart</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold"
              >Free Shipping</v-list-item-title
            >
            <v-list-item-subtitle>For all oder over $99</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-icon large color="deep-purple lighten-1"
              >mdi mdi-cash-usd</v-icon
            >
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold"
              >Money Back Guarantee</v-list-item-title
            >
            <v-list-item-subtitle>If good have Problem</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-icon large color="deep-purple lighten-1">mdi mdi-headset</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold"
              >Online Support 24/7</v-list-item-title
            >
            <v-list-item-subtitle>Dedicated support</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-icon large color="deep-purple lighten-1">mdi-lock</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold"
              >Payment Secure</v-list-item-title
            >
            <v-list-item-subtitle>100% secure payment</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </div>
</template>
