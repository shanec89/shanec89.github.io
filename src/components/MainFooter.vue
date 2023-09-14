<template>
  <footer class="footer">
  <div class="beers">
   <img class="hero" src="../assets/brands/sky.png" alt="Sky Sports" />
  <img class="brand_logo" src="../assets/brands/carlsberg.png" alt="Carlsberg" />
  <img class="brand_logo" src="../assets/brands/sanmiguel.png" alt="San Miguel"/>
  <img class="brand_logo"  src="../assets/brands/kronenbourg.png" alt="Kronenbourg"/>
  <img class="brand_logo" src="../assets/brands/hobgoblin.png" alt="Hobgoblin"/>
  <img class="brand_logo" src="../assets/brands/guiness.png" alt="Guinness"/>
  <img class="brand_logo"  src="../assets/brands/dmf.png" alt="Dead Mans Fingers"/>
   <img class="brand_logo" src="../assets/brands/whitley.png" alt="Whitley Neill"/>
  <img class="brand_logo" src="../assets/brands/botonist.webp" alt="The Botonist"/>
  <img class="brand_logo"  src="../assets/brands/fevertree.png" alt="Fever Tree"/>
  </div>
  <div class="bottom-content">
  <div class="social-media">
    <a href="https://www.facebook.com/cranwellpsc" target="_blank" rel="noopener">
    <i class="fab fa-facebook"></i>
  </a>

  <!-- Instagram Icon -->
  <a href="https://www.instagram.com/cranwellparishsocial" target="_blank" rel="noopener">
    <i class="fab fa-instagram"></i>
  </a>

  <a href="https://www.google.com/maps/dir/53.0342574,-0.4605396/cranwell+social+club/@53.0357251,-0.4648304,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x48783f64e344ccdb:0xde7af99678b427c5!2m2!1d-0.4639701!2d53.0370554?entry=ttu" target="_blank" rel="noopener"><i class="fas fa-map-marker-alt"></i></a>

  </div>
  <span>© 2023 All Rights Reserved | Cranwell Parish Social Club</span>
  </div>
  </footer>
</template>

<script>


export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  components: {
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.beers {
    width: 96%;
  
    padding: 2%;
}

img.brand_logo {
display: inline-flex;
    width: 28%;
    vertical-align: middle;
    padding: 2%;
}

footer.footer {
    width: 100%;
}
.bottom-content {
    color: #9f7944;
    background: white;
    font-family: 'Roboto', sans-serif;
    font-weight:300;
}
.bottom-content span {
    font-size:12px;
    padding-bottom:5px;
}
.social-media a, .social-media i {
    color: #cd9656;
    font-size: 2.8rem;
    display: inline-block;
    margin: 10px 20px 5px;
}
</style>
