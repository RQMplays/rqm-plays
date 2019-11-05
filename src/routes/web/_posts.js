const posts = [
  {
    title: 'Memory Game',
    slug: 'memory-game',
    phrases: `Here is a VanillaJS project I made while learning Javascript at school.
			It's a memory game with 3 different difficulty,
			changing the number of element's pairs there is.
			I played a lot with animation to make it more enjoyable.`,
    link: 'https://rqmdev.github.io/Memory/',
    img: 'memory-game.png',
    speed: 20
  },
  {
    title: 'Starcraft Clicker',
    slug: 'starcraft-clicker',
    phrases: `Here is my first Javascript project I made while learning Javascript at school.
			It's a Starcraft clicker inspired by the famous cookie clicker. Like Starcraft, u have two different ressources to gather.
			Upgrade your workers and ur ability to mine Vespene Gas and Minerals to finish the game with all of the achievements.`,
    link: 'https://rqmdev.github.io/Clicker/',
    img: 'starcraft-clicker.png',
    speed: 20
  },
  {
    title: 'Game Of Life(s)',
    slug: 'game-of-lives',
    phrases: `I made a little game of life project to take a grip on javascript, this is where I learned about mutability and reference by the way.
		To spice it up a bit, I created 3 type of different life(s) represented by different colors and set up some rules to how they behave in between them.
		The next step on this project would be to make it a multi-player game where every player control is own lifeform.
		Here u can still pause the game to draw some new lifeform in each different colors and test which kind of form live longer ;)`,
    link: 'https://rqmdev.github.io/GameOfLife/',
    img: 'game-of-lives.png',
    speed: 20
  },
  {
    title: 'Pomodoro',
    slug: 'pomodoro',
    phrases: `Do u know the pomodoro technique ?
		It's an effective way of working while still being able to have fresh idea.
		It uses a timer to set up short period of works, like 25 minutes for example.
		And after that u should take a shortbreak, like 5 minutes, and come back to work to get new and fresh ideas.
		I made this simple app as a advanced timer where u can schedule different work rythm and set specified the timer for each type of period ur in.
		It uses drag and drop for a better User Experience. I also played with opacity and animation to visualize time that goes by ;)`,
    link: 'https://rqmdev.github.io/Pomodoro/',
    img: 'pomodoro.png',
    speed: 20
  }
]

posts.forEach(post => {
  if (post.html) {
    post.html = post.html.replace(/^\t{3}/gm, '')
  }

  if (post.phrases) {
    post.phrases = post.phrases.split(' ')
  }

  if (post.phrases) {
    let cumulatedDelay = 0
    post.phrases = post.phrases.map(phrase => {
      const delay = cumulatedDelay
      cumulatedDelay += phrase.length * post.speed
      return { text: phrase, delay, speed: post.speed }
    })
  }
})

export default posts
