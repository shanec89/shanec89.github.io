<template>
<OpeningBanner />
<img class="hero" src="../assets/hero.jpg" alt="Hero Banner" />

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
import OpeningBanner from '@/components/OpeningBanner.vue'
import EventBanner from '@/components/EventBanner.vue'

export default {
  name: 'HomePage',
    components: {
      EventBanner,
      OpeningBanner
  }
}
</script>

<style>
img.hero {
    width: 100%;
}
thead {
	background: #ccc;
	font-size: 1.1em;
}
.table tbody tr td {
  padding:1%;
  height:30px;
}

.table tbody tr:nth-child(even) {
	background: #f5f5f5;
}
.table tbody tr:nth-child(1) {
	background: #e3c900;
}

table.table.table-striped {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
}

th {
  padding:1%;
  height:30px;
  width: 11.6%;
}
th.name {
    width: 30%;
}
tr.divide {
    height: 10px;
}
</style>
