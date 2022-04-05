<template>
  <nav id="nav" class="p-[10px] nav text-[20px] text-[#e9e968] bg-[#1e1e3d]">
    <div class="container flex items-center justify-between">
      <nuxt-link class="text-[30px]" to="/">Foosion</nuxt-link>
      <div class="text-[#eedee1]" id="navbarResponsive">
        <ul class="flex">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/about">About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/admin">Admin</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/logout"
              ><font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
              Logout</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/register">Register</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
    
<script setup>
function scrollheader() {
  const nav = document.getElementById("nav");
  if (scrollY >= 50) {
    nav.classList.add("scroll-nav");
  } else {
    nav.classList.remove("scroll-nav");
  }
}
if (process.browser) {
   window.addEventListener("scroll", scrollheader);
}
</script>

<style scoped>
.nav-item {
  padding-left: 40px;
}
.nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  transition: .4s;
}
.scroll-nav{
  opacity: .0;
}

</style>