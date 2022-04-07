<!-- Please remove this file from your project -->
<template>
  <div class="recent_content relative">
    <client-only>
    <h1 class="recent_heading"><font-awesome-icon icon="fa-solid fa-star" class="text-[#538eb1]" />Recent Blog</h1></client-only>
    <div class="recent_layout">
      <div class="recent_card">
        <Card />
      </div>
      <div class="recent_sidecard">
        <SideCard class="test" />
        <SideCard class="test" />
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/css/recent.css'
export default {
  name: 'Recent',
}
</script>

<style scoped>

</style>