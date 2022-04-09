<template>
  <nav id="nav" class="navigation">
    <div class="container flex items-center justify-between">
      <nuxt-link class="logo" to="/">Foosion</nuxt-link>
      <input type="checkbox" name class="menu-btn" id="menu-btn" />
      <label for="menu-btn" class="menu-icon">
        <span class="nav-icon"></span>
      </label>

      <ul class="flex menu">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/about">About</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/admin">Admin</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/logout">
            <!-- <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" /> -->
            Logout
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/register">Register</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
    
<script setup>
function scrollheader() {
  const nav = document.getElementById('nav')
  if (scrollY >= 50) {
    nav.classList.add('scroll-nav')
  } else {
    nav.classList.remove('scroll-nav')
  }
}
if (process.browser) {
  window.addEventListener('scroll', scrollheader)
}
</script>

<style scoped>
.scroll-nav {
  opacity: 0;
}
.navigation {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  transition: 0.4s;
  padding: 10px;
  font-size: 25px;
  background-color: rgb(36, 224, 92);
  color: aquamarine;
}

.meu-icon,
.menu-btn {
  display: none;
}

@media screen and (max-width: 850px) {
  .navigation {
    justify-content: space-between;
  }

  .logo {
    font-size: 30px;
  }

  .navigation .menu {
    transform: translateY(-110vh);
    display: block;
    position: absolute;
    left: 0;
    top: 65px;
    background-color: rgb(36, 224, 92);
    width: 100%;
    padding: 0;
    margin: 0;
    height: 100vh;
    z-index: 100;
    transition: all ease 0.3s;
  }

  .navigation .menu li {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .navigation .menu li a {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 30px 20px;
    transition: all ease 0.3s;
  }

  .navigation .menu li a:hover {
    color: rgb(238, 229, 229);
    opacity: 1;
    background-color: rgb(40, 146, 165);
  }

  .menu-icon {
    display: block;
  }
  .navigation .menu-icon {
    cursor: pointer;
    float: right;
    padding: 5px;
    position: relative;
    user-select: none;
    z-index: 106;
  }

  .navigation .menu-icon .nav-icon {
    background-color: white;
    display: block;
    position: relative;
    height: 2px;
    transition: background 0.2s ease-out;
    width: 25px;
  }
  .navigation .menu-icon .nav-icon::before,
  .navigation .menu-icon .nav-icon::after {
    background-color: white;
    content: '';
    position: absolute;
    height: 100%;
    transition: all ease-out 0.2s;
    width: 100%;
  }

  .navigation .menu-icon .nav-icon::before {
    transform: rotate(0);
    top: 5px;
  }
  .navigation .menu-icon .nav-icon::after {
    transform: rotate(0);
    top: -5px;
  }

  .navigation .menu-icon:checked ~ .menu-icon .nav-icon,
  .navigation .menu-icon .nav-icon {
    background-color: transparent;
  }

  .navigation .menu-btn:checked ~ .menu-icon .nav-icon::before {
    transform: rotate(45deg);
    top: 0px;
  }

  .navigation .menu-btn:checked ~ .menu-icon .nav-icon::after {
    transform: rotate(-45deg);
    top: 0px;
  }

  .navigation .menu-btn:checked ~ .menu {
    transform: translateY(0);
  }
}
</style>