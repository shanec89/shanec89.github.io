<template>
  <header class="header">
    <div class="logo">
    
    </div>
    <nav class="nav">
  <button class="menu-toggle" @click="toggleMenu">
    <font-awesome-icon :icon="isMenuOpen ? 'times' : 'bars'" />
  </button>
    </nav>
    <div class="menu-overlay" v-if="isMenuOpen" @click="toggleMenu"></div>
    <div class="menu" :class="{ 'menu-open': isMenuOpen }">
    <img class="menu_logo" src="../assets/logo.png" alt="Logo" />
      <ul>
        <li><router-link @click="toggleMenu" to="/">Home</router-link></li>
        <li><router-link @click="toggleMenu" to="/upcoming-events">Upcoming Events</router-link></li>
        <li><router-link @click="toggleMenu" to="/bar">The Bar</router-link></li>
        <li><router-link @click="toggleMenu" to="/food">Food</router-link></li>
        <li><router-link @click="toggleMenu" to="/sport">Pool, Darts & Golf</router-link></li>
        <li><router-link @click="toggleMenu" to="/livesport">Live Sport</router-link></li>
        <li><router-link @click="toggleMenu" to="/hire">Venue/Bar Hire</router-link></li>
        <li><router-link @click="toggleMenu" to="/contact">Contact Us</router-link></li>
        <li><a href="#">Sign In</a></li>
      </ul>
    </div>
    <div class="user-actions">
    <img class="header_logo" src="../assets/logo.png" alt="Logo" />
    </div>
  </header>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  color: #fff;
  border-bottom: 1px solid #c4c0c0;
}
.header_logo {
  width:200px;
}
.logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-left: 2.5rem;
}

.logo img {
  width: 200px;
  margin-right: 0.5rem;
}

img.menu_logo {
    width: 90%;
    padding: 5%;
}

nav.nav {
    position: absolute;
}
.nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav li {
  margin-right: 1rem;
}

.menu > ul > li {
    width: 100%;
    height: 40px;
    line-height: 40px;
    cursor:pointer;
    list-style-type: none;
}

.menu > ul > li > a {
    text-decoration:none;
    color: #9f7944;
}

.menu.menu-open > ul > li:hover {
    background:#f6f6f6;
}

.menu > ul {
    margin: 0;
    width: 100%;
    padding: 0;
    list-style-type: none;
}

.nav a {
  text-decoration: none;
  color: #fff;
}
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */

  z-index: 999; /* Place it above other content */
}

.menu {
    position: fixed;
    top: 0px;
    left: -300px;
    width: 300px;
    height: 100%;
    background-color: #fff;
    transition: left 0.3s ease;
    z-index: 1000;
}

.menu-open {
  left: 0; /* Slide in from the left when open */
}

.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #9f7944;
  padding: 0;
}

.user-actions {
  display: flex;
  align-items: center;
}

.sign-in-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .nav ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #333;
    width: 100%;
    padding: 1rem;
  }

  .nav ul.active {
    display: flex;
  }

  .nav li {
    margin-bottom: 1rem;
    text-align: center;
  }

  .menu-toggle {
    display: block;
  }
}
</style>
