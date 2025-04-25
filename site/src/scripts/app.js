const moment = require("moment") // For date formatting

import { createApp } from 'vue';
import GamesListAdvanced from './components/GamesListAdvanced.vue';

document.addEventListener('DOMContentLoaded', () => {
	// Get the current yeaer
	document.getElementById('is-year').innerHTML = moment().year();

	createApp({
	  components: {
		GamesListAdvanced
	  }
	}).mount('#app');
})
