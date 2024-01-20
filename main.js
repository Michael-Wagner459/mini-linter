let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

var storyWords = story.split(' ')

var howManyWords = storyWords.length

console.log(howManyWords)

const betterWords = storyWords.filter(word => ! unnecessaryWords.includes(word))

let reallyCounter = 0
let veryCounter = 0
let basicallyCounter = 0

for (var i = 0; i < betterWords.length; i++) {
  if (betterWords[i] === 'really') {
    reallyCounter++;
  }
  else if (betterWords[i] === 'very') {
    veryCounter++;
  }
  else if (betterWords[i] === 'basically') {
    basicallyCounter++;
  }
}

let sentenceCount = 0;
const numberOfSentence = betterWords.forEach(words => {
  if (words.includes('.') || words.includes('!')) {
    sentenceCount += 1;
  };
});

var totalSums = `Your total word count is ${betterWords.length}. Your total sentence count is ${sentenceCount}. Finally, these are the amount of times you overused these words really: ${reallyCounter}, very: ${veryCounter}, and basically: ${basicallyCounter}.`

console.log(totalSums)

console.log(betterWords.join(' '))
