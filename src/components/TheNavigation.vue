<template>
  <nav id="nav">
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li class="links">
        <router-link to="/maps">
          Maps
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
#nav {
  display: flex;
  background-color: rgb(30, 29, 53);
}

#nav a {
  color: #b5c0ca;
  text-decoration: none;
  font-weight: bold;
}

#nav a.vue-school-active-class {
  color: #e09f26;
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
</style>
