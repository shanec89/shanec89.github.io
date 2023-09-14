<template>
    <SponsorBanner
      logoFilename="barge.webp"
      companyName="ABC Company"
      competitionName="Division 1"
      background="#653648"
      textColor="#fff"
    />
</template>

<script>
import SponsorBanner from '@/components/SponsorBanner.vue'
export default {
  components: {
    SponsorBanner
  },
  props: {
    logoFilename: String, // URL to the company logo image
    competitionName: String, // Competition name they are sponsoring
    sponsorBackground: String, // Background colour
    textColor: String, // Background colour
  },
    computed: {
    fullLogoPath() {
      // Construct the full path to the logo using the logo filename
      return require(`@/assets/sponsors/${this.logoFilename}`);
    },
    setBackgroundColor() {
      // Construct the full path to the logo using the logo filename
      return (`background-color:${this.background};color:${this.textColor}`);
    },
  },
};
</script>

<style scoped>
.sponsor-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  height: 140px;
}

.logo_container {
    width: 100%;
    height: 50%;
}

.name_container {
    width: 100%;
    height: 50%;
}

.company-logo {
  height: -webkit-fill-available;
}

.competition-name {
  font-size: 2rem;
}
</style>
