/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns `true` if every song is over two minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */

function allSongsAreOverTwoMinutes(songs) {
   everySong = songs.every((song) => song.runtimeInSeconds > 120 
    )
    return everySong
}
/**
 * Returns `true` if any song is over four minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function anySongIsOverFourMinutes(songs) {
  anySong = songs.some((song) => song.runtimeInSeconds > 240)
  return anySong
}

/**
 * Returns `true` if any song is by the artist "Peanut". Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */

// "{ }" on line 40 "song.artist === "Peanut"" was causing falure , why ? i didnt have that issue wit line 28 " {song.runtimeInSeconds > 240} "

function anySongIsByPeanut(songs) {
  peanut = songs.some((song) =>  song.artist === "Peanut")
  return peanut
}
console.log(anySongIsByPeanut(exampleSongData))

module.exports = {
  allSongsAreOverTwoMinutes,
  anySongIsOverFourMinutes,
  anySongIsByPeanut,
};
