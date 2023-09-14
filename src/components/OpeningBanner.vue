<template>
  <div class="status_container">
    <div class="current-day-time">
      {{ timeUntilClosing }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDayIndex: -1, // Store the index of the current day (0 for Sunday, 1 for Monday, etc.)
      closingTime: '', // Store the closing time for the current day
      openingTime: '', // Store the closing time for the current day
      currentTime: '', // Store the closing time for the current day
      hourText: "hours",
      minuteText: "minutes",
      isTimeEarlier: false, // Flag to track if the closing time is earlier than the current time
      timeUntilClosing: '', // Store the time remaining until closing
      openingHours: [
        { day: 0, open: '12:00:00', close: '22:00:00' }, // Sunday
        { day: 1, open: '19:00:00', close: '22:00:00' }, // Monday
        { day: 2, open: '19:00:00', close: '23:00:00' }, // Tuesday
        { day: 3, open: '19:00:00', close: '23:00:00' }, // Wednesday
        { day: 4, open: '19:00:00', close: '23:00:00' }, // Thursday
        { day: 5, open: '19:00:00', close: '23:55:00' }, // Friday
        { day: 6, open: '12:00:00', close: '23:55:00' }, // Saturday
      ],
    };
  },
  created() {
    this.getCurrentDayIndex(); // Get the index of the current day (0 for Sunday, 1 for Monday, etc.)

    // Find the closing time for the current day
    const currentOpeningHours = this.openingHours.find((entry) => entry.day === this.currentDayIndex);
    if (currentOpeningHours) {
      this.closingTime = currentOpeningHours.close;
      this.openingTime = currentOpeningHours.open;

      if (this.openingTime == "Closed") {
         this.timeUntilClosing = `We are closed today`;

      } else {

      // Compare the closing time with the current time
      const currentTime = new Date();
      const hours = currentTime.getHours().toString().padStart(2, '0');
      const minutes = currentTime.getMinutes().toString().padStart(2, '0');
      const seconds = currentTime.getSeconds().toString().padStart(2, '0');
      this.currentTime = `${hours}:${minutes}:${seconds}`;
      const closingTimeParts = this.closingTime.split(':');
      const closingHour = parseInt(closingTimeParts[0]);
      const closingMinute = parseInt(closingTimeParts[1]);
      const openingTimeParts = this.openingTime.split(':');
      const openingHour = parseInt(openingTimeParts[0]);
      const openingMinute = parseInt(openingTimeParts[1]);
      const nowTimeParts = this.currentTime.split(':');
      const nowHour = parseInt(nowTimeParts[0]);
      const nowMinute = parseInt(nowTimeParts[1]);
      const nowTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), nowHour, nowMinute);
      const closingTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), closingHour, closingMinute);
      const openingTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), openingHour, openingMinute);

      // Calculate the time remaining until closing or the time since closing
      const timeRemaining = closingTime - nowTime;
      const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
      const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

      if (nowTime < closingTime && nowTime < openingTime) {
        this.timeUntilClosing = `We open in ${hoursRemaining} hours and ${minutesRemaining} minutes`;
      } else if (nowTime < closingTime) {
        if(hoursRemaining == 1) {
          this.hourText = "hour"
        }
        if(minutesRemaining == 1) {
          this.minuteText = "minute"
        }
        this.timeUntilClosing = `We close in ${hoursRemaining} ${this.hourText} and ${minutesRemaining} ${this.minuteText}`;
      } else {
        this.timeUntilClosing = `We closed ${hoursRemaining} ${this.hourText} and ${minutesRemaining} ${this.minuteText} ago`;
      }
      }
    }
  },
  methods: {
    getCurrentDayIndex() {
      // Get the current day index (0 for Sunday, 1 for Monday, etc.)
      const now = new Date();
      this.currentDayIndex = now.getDay(); // 0 for Sunday, 1 for Monday, etc.
      this.currentDay = this.getDayName(this.currentDayIndex); // Get the day name (e.g., "Sunday")
    },
    getDayName(dayIndex) {
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return daysOfWeek[dayIndex];
    },
  },
};
</script>

<style scoped>
.status_container {
    width: 100%;
    font-size: 1rem;
    padding: 10px 0;
    background: #155c00;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight:300;
}
</style>
