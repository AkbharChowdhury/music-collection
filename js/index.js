import { songs, showSongHtml } from './music.js';
import { Counter } from './counter.js';

const songDiv = document.querySelector('#song-list');
const recordDiv = document.querySelector('#record-text');

songDiv.innerHTML = '';
const mySongs = songs;
const RECORD_PER_PAGE = 2;

// const TOTAL_NUM_PAGES = Math.ceil(mySongs.length / RECORD_PER_PAGE);
const TOTAL_SONGS = mySongs.length;
let counter = new Counter(RECORD_PER_PAGE);

const firstNSongs = getSongList();
console.table(firstNSongs)



function showRecordText(num) {
    recordDiv.textContent = `Showing ${num} of ${TOTAL_SONGS} songs`;
}



function getSongList() {
    const startIndex = counter.getValue();
    counter.incrementCounter()
    const endIndex = counter.getValue();
    const nextSetOfSongs = songs.slice(startIndex, endIndex);
    const numSongsText = nextSetOfSongs.length < RECORD_PER_PAGE ? mySongs.length : endIndex;
    showRecordText(numSongsText)
    return nextSetOfSongs;

}




songDiv.insertAdjacentHTML('beforeend', showSongHtml(firstNSongs));
const showMoreButton = document.querySelector('#show-more');
showMoreButton.addEventListener('click', _ => {
    let nextSetOfSongs = getSongList();
    songDiv.insertAdjacentHTML('beforeend', showSongHtml(nextSetOfSongs))
    if (nextSetOfSongs.length < RECORD_PER_PAGE) {
        showMoreButton.style.display = 'none'
    }

});



