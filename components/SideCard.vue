<template>
  <div class="side_card_layout">
    <div class="side_card_img">
      <img class="" src="../assets/images/food.jpg" alt="" />
    </div>

    <div class="side_card_layout_content">
      <small class="side_card_small">Emmanuel Apabiekun - 04 jan 2022 </small>
      <div>
        <nuxt-link to="/_id" class="side_card_more">
          <h1 class="side_card_title">Lorem ipsum dolor</h1>
          <client-only>
          <font-awesome-icon
            icon="fa-solid fa-angles-right"
            class="side_card_arrow"
          /></client-only>
        </nuxt-link>
      </div>

      <h2 class="side_card_description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quis
        minima perspiciatis tenetur sint culpa?
      </h2>

      <div class="side_card_tags">
        <span class="font-black text-[#ff8800]">Design</span>
        <span class="font-black text-[#c300ff]">Research</span>
        <span class="font-black text-[yellow]">Presentation</span>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/css/side-card.css'
export default {}
</script>

<style scoped>
</style>