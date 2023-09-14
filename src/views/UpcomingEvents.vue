<template>
<h1> Our Upcoming Events</h1>

    <EventBanner
      logoFilename="membershipdraw.png"
      eventName="Membership Draw"
      eventDate="Every Friday"
      eventTime="9pm"
    />

    <EventBanner
      logoFilename="meatdraw.gif"
      eventName="Meat Draw"
      eventDate="Every Friday"
      eventTime="10pm"
    />
        <EventBanner
      logoFilename="quiz.gif"
      eventName="Quiz Night"
      eventDate="16/09/2023"
      eventTime="8:30pm"
    />
</template>

<script>
import EventBanner from '@/components/EventBanner.vue'

export default {
  name: 'UpcomingEvents',
    components: {
      EventBanner
  }
}
</script>

<style>
img.hero {
    width: 100%;
}
h1 {
    font-family: 'Roboto', sans-serif;
    font-weight:300;
}
</style>
