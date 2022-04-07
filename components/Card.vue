<template>
  <div class="card_layout">
    <div class="card_img">
      <img src="../assets/images/food.jpg" alt="" />
    </div>

    <div class="bg-[#f5f3f700]">
      <div class="card_content">
        <small class="lock card_small">Emmanuel Apabiekun - 04 jan 2022 </small>
        <div>
          <nuxt-link
            to="/_id"
            class="
              card_more
              justify-between
              items-baseline
              flex
              text-[1.2rem]
              rounded-xl
            "
          >
            <h1 class="text-[30px] font-black card_title">Lorem ipsum</h1>
            <font-awesome-icon
              icon="fa-solid fa-angles-right"
              class="card_arrow"
            />
          </nuxt-link>
        </div>

        <h2 class="card_description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
          quis minima perspiciatis tenetur sint culpa?
        </h2>

        <div class="card_tags">
          <span class="text-[#ff8800]">Design</span>
          <span class="text-[#c300ff]">Research</span>
          <span class="text-[yellow]">Presentation</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.card_layout {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.card_content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.card_arrow {
  transition: 0.4s;
  transform: translateX(0px);
}

.card_more:hover .card_arrow {
  transform: translateX(5px);
}

.card_description {
  font-size: 17px;
}

.card_img img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.card_tags {
  display: flex;
  gap: 1rem;
}

@media screen and (max-width: 576px) {
  .card_layout {
    margin: 0 10px 0 0;
  }
  .card_small {
    font-size: 20px;
  }
  .card_description {
    font-size: 25px;
  }
}

@media screen and (min-width: 776px) and (max-width: 912px) {
  .card_img img {
    width: 100%;
    height: 250px;
  }
  
  .card_description{
      font-size: 12px;

  }
}

@media screen and (min-width: 912px) {
  .card_small {
    font-size: 20px;
  }
  .card_title {
    font-size: 25px;
  }
}
</style>