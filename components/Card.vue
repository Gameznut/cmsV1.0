<template>
  <div class="card_content">
    <img
      class="h-[22rem] w-[100%] object-cover"
      src="../assets/images/food.jpg"
      alt=""
    />
    <div class="bg-[#f5f3f700]">
      <div class="flex flex-col">
        <small class="py-[1.3rem] block"
          >Emmanuel Apabiekun - 04 jan 2022
        </small>
        <div>
          <nuxt-link
            to="/_id"
            class="
              more
              justify-between
              items-baseline
              flex
              text-[1.2rem]
              rounded-xl
            "
          >
            <h1 class="text-[30px] font-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident.
            </h1>
            <font-awesome-icon icon="fa-solid fa-angles-right" class="arrow" />
          </nuxt-link>
        </div>

        <h2 class="test-[20px] text-[#adabab] my-[30px] description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
          quis minima perspiciatis tenetur sint culpa?
        </h2>

        <div>
          <span
            class="
              px-[.5rem]
              font-black
              bg-[#4df3f37c]
              py-[.3rem]
              rounded-lg
              text-[#ff8800]
            "
            >Design</span
          >
          <span
            class="
              px-[.5rem]
              font-black
              bg-[#28d68596]
              py-[.3rem]
              rounded-lg
              text-[#c300ff]
            "
            >Research</span
          >
          <span
            class="
              px-[.5rem]
              font-black
              bg-green-500
              py-[.3rem]
              rounded-lg
              text-[yellow]
            "
            >Presentation</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.arrow {
  transition: 0.4s;
  transform: translateX(0px);
}

.more:hover .arrow {
  transform: translateX(5px);
}

/* @media screen and (max-width: 320px) {
  .layout {
    flex-direction: column;
  }
  .card_content {
    margin: 0 1rem 0 0;
  }
  small {
    font-size: 20px;
  }
  .description {
    font-size: 25px;
  }
} */

@media screen and (max-width: 576px) {
  .layout {
    flex-direction: column;
  }
  .card_content {
    margin: 0 1rem 0 0;
  }
  small {
    font-size: 20px;
  }
  .description {
    font-size: 25px;
  }
}

/* @media screen and (min-width: 776px) {
  .layout {
    flex-direction: column;
  }
  .card_content {
    margin: 0 1rem 0 0;
  }
  small {
    font-size: 20px;
  }
  .description {
    font-size: 25px;
  }
} */
</style>