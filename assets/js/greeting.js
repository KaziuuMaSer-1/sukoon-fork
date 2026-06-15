// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │  ├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings with a highly polished letter-by-letter typewriter effect

const today = new Date();
const hour = today.getHours();
const name = CONFIG.name;

const gree1 = `${CONFIG.greetingNight}\xa0`;
const gree2 = `${CONFIG.greetingMorning}\xa0`;
const gree3 = `${CONFIG.greetingAfternoon}\xa0`;
const gree4 = `${CONFIG.greetingEvening}\xa0`;

let greetingText = '';
if (hour >= 23 || hour < 6) {
	greetingText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
	greetingText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
	greetingText = gree3 + name;
} else {
	greetingText = gree4 + name;
}

const typeWriter = (element, text, speed = 40) => {
	// Setup text span and dynamic inline caret
	element.innerHTML = '<span id="greeting-text"></span><span id="caret" class="typewriter-caret"></span>';
	const textSpan = document.getElementById('greeting-text');
	const caretSpan = document.getElementById('caret');
	
	let i = 0;
	const type = () => {
		if (i < text.length) {
			const char = text.charAt(i);
			textSpan.innerText += char;
			i++;
			
			// Natural human speed variations (jitter)
			let delay = speed + (Math.random() * 16 - 8);
			
			// Add natural pauses at punctuation marks
			if (char === ',' || char === '!' || char === '.') {
				delay = 300;
			}
			
			setTimeout(type, delay);
		} else {
			// Finished typing: keep blinking for 1.2 seconds, then fade out
			setTimeout(() => {
				caretSpan.classList.add('done');
			}, 1200);
		}
	};
	
	type();
};

typeWriter(document.getElementById('greetings'), greetingText, 40);
