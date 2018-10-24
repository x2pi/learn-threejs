<template>

  <div id="app">
    <a  v-if = 'no' href ='/src/demo/00/index.html'></a>
    <v-toolbar  color="cyan" dark >
        <v-flex class="text-xs-center">
            <v-toolbar-title>{{title}}</v-toolbar-title>
          </v-flex>
    </v-toolbar>
    <v-app id="inspire" class='pt-3'>
      <v-layout row>


        <v-flex xs12 sm10 offset-sm1>
          <v-card>

            <v-list two-line>
              <template v-for="(item, index) in items">
                <v-subheader v-if="item.header" :key="item.header">
                  {{ item.header }}
                </v-subheader>



              <v-list-tile v-else :key="item.title"   :href="item.link" target="_blank" avatar @click="">

                  <v-list-tile-avatar>
                      {{ index }}
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
      
      title: 'Learn Threejs',
      items: [
        {
          link: '/src/demo/00/index.html',
          title: '',
          subtitle: ""
        },
        {
          link: '/demo/test.html',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        {
          link: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        }
      ]
    }
  }
}
</script>

<style lang="css">
  #app {
    color: #56b983;
  }
</style>