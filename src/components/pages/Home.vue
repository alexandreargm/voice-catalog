<template>
  <div class="layout">
    <Header>

    </Header>

    <!--  -->
    <Main>

    </Main>

    <Drawer>

    </Drawer>
  </div>
</template>

<script>
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
