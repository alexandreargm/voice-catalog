<template>
  <div id="app">
    <div class="layout">
      <Header>

      </Header>

      <!--  -->
      <Main>

      </Main>

      <Drawer>

      </Drawer>
    </div>
  </div>
</template>

<script>
import '@/assets/scss/main.scss'
import Main from '~/components/layout/Main.vue'
import Header from '~/components/layout/Header.vue'
import Drawer from '~/components/layout/Drawer.vue'

export default {
  components: {
    Header,
    Main,
    Drawer
  }
}
</script>
