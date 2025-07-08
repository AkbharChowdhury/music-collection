import { songs } from './classes/music.js';
import { Counter } from './classes/counter.js';
import { showSongHtml } from './classes/card.js';
const songDiv = document.querySelector('#song-list');
const recordDiv = document.querySelector('#record-text');
songDiv.innerHTML = '';
const mySongs = songs;
const RECORD_PER_PAGE = 2;
const TOTAL_SONGS = mySongs.length;
const counter = new Counter(RECORD_PER_PAGE);
const firstNSongs = getSongList();
songDiv.insertAdjacentHTML('beforeend', showSongHtml(firstNSongs));
function showRecordText(num) {
    recordDiv.textContent = `Showing ${num} of ${TOTAL_SONGS} songs`;
}
function getSongList() {
    const startIndex = counter.getValue();
    counter.incrementCounter();
    const endIndex = counter.getValue();
    const nextSetOfSongs = songs.slice(startIndex, endIndex);
    const numSongsText = nextSetOfSongs.length < RECORD_PER_PAGE ? mySongs.length : endIndex;
    showRecordText(numSongsText);
    return nextSetOfSongs;
}
const showMoreButton = document.querySelector('#show-more');
showMoreButton.addEventListener('click', _ => {
    let nextSetOfSongs = getSongList();
    songDiv.insertAdjacentHTML('beforeend', showSongHtml(nextSetOfSongs));
    if (nextSetOfSongs.length < RECORD_PER_PAGE) {
        showMoreButton.style.display = 'none';
    }
});
