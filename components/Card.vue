<template>
  <div class="card_layout">
    <div class="card_img">
      <img src="../assets/images/food.jpg" alt="" />
    </div>
    <div class="card_content flex flex-col">
      <small class="lock card_small">Emmanuel Apabiekun - 04 jan 2022 </small>
      <div>
        <nuxt-link
          to="/_id"
          class="card_more justify-between items-baseline flex text-[1.2rem]"
        >
          <h1 class="card_title">Lorem ipsum</h1>
          <client-only>
            <font-awesome-icon
              icon="fa-solid fa-angles-right"
              class="card_arrow"
            />
          </client-only>
        </nuxt-link>
      </div>

      <h2 class="card_description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quis
        minima perspiciatis tenetur sint culpa?
      </h2>

      <div class="card_tags">
        <span class="text-[#ff8800]">Design</span>
        <span class="text-[#c300ff]">Research</span>
        <span class="text-[yellow]">Presentation</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.card_img img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
.card_title {
  text-transform: capitalize;
}
.card_arrow {
  transition: 0.4s;
  transform: translateX(0px);
}

.card_more:hover .card_arrow {
  transform: translateX(5px);
}
@media only screen and (max-width:1204px) {
    .card_content {
        gap: 1rem;
    }
}

@media screen and (max-width: 425px) {
  .card_img img {
    height: 300px;
  }
  .card_title {
    font-size: 22px;
  }
  .card_content{
    gap:1rem
  }
  .card_description{
    font-size: 19px;
  }
}
</style>