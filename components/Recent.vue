<template>
  <div class="recent_content relative ">
    <client-only>
    <small class="recent_heading flex"><font-awesome-icon icon="fa-solid fa-star" class="text-[#538eb1]" />Recent Blog</small></client-only>
    <div class="recent_layout grid">
      <div class="recent_card">
        <Card />
      </div>
      <div class="recent_sidecard flex flex-col">
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