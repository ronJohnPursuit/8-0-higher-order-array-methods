/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns the song "Pink Elephants" from the song array, if it is in the array.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */
function findPinkElephantsByTimestreet(songs) {
  songs.find((song) => {
    if (song.title === "Pink Elephants"){
     titleFind = song
    }
  }
  )
  return titleFind
}

/**
 * Returns the first song in the list that is under three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */

// Want to find a better way how to solve this.
function findFirstSongUnderThreeMinutes(songs) {
  titleFind =[]
  songs.find((song) => {
    if (song.runtimeInSeconds < 180){
      titleFind.push(song) 
    }
  }
  )
  return titleFind[0]
}

/**
 * Returns the first song in the list where the song title equals the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */

// Want to find a better way how to solve this too

function findFirstTitleTrack(songs) {
titleFind =[]
songs.find((song) => {
  if (song.title === song.album){
    titleFind.push(song) 
  }
}
)
return titleFind[0]
}

module.exports = {
  findPinkElephantsByTimestreet,
  findFirstSongUnderThreeMinutes,
  findFirstTitleTrack,
};


