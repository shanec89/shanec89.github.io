<template>
  <div class="event-banner">
  <div class="logo_container">
    <img :src="fullLogoPath" :alt="eventName + ' Logo'" class="event-img" />
    </div>
    <div class="details_container">
    <div class="date_container">
    <div class="event-date">{{ eventDate }}</div>
    <div class="event-time">{{ eventTime }}</div>
    </div>
    <div class="name_container">
    <div class="event-name">{{ eventName }}</div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logoFilename: String, // URL to the company logo image
    eventName: String, // Company name
    eventDate: String, // Company name
    eventTime: String, // Company name
  },
    computed: {
    fullLogoPath() {
      // Construct the full path to the logo using the logo filename
      return require(`@/assets/events/${this.logoFilename}`);
    }
  },
};
</script>

<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&family=Roboto:wght@300;400;500;700&display=swap');

.event-banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    background: #f2f2f2;
    color: #302326;
    margin-top:5px;
    margin-bottom:10px;
}

.logo_container {
   width: 100%;
}

.details_container {
    width: 100%;
    padding: 5px;

}

.date_container {
    display: inline-block;
    text-indent: 20px;
    float: left;
    width: fit-content;
    padding-right:20px;
    height: -webkit-fill-available;
    border-right: 1px solid #c4c0c0;
}

.name_container {
    height: -webkit-fill-available;
    text-align: left;
}

.event-img {
  width: 100%;
}

.event-name {
    display: inline-flex;
    font-size: 1.5rem;
    height: 35px;
    line-height: 35px;
    padding-left:20px;
    font-family: 'Roboto', sans-serif;
    font-weight:300;
}


.event-date, .event-time {
    font-size: 0.9rem;
    font-weight: 500;
    display: block;
    text-align: left;
    font-family: 'Roboto', sans-serif;
}
</style>
