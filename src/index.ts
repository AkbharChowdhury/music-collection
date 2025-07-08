import { Song, fetchSongs } from './classes/music.js';
import { Counter } from './classes/counter.js';
import { showSongHtml } from './classes/card.js';


fetchSongs().then(data => {
    const allSongs: Song[] = data
    renderPage(allSongs)
});
function renderPage(songs: Song[]) {
    const songDiv = document.querySelector('#song-list') as HTMLDivElement;
    const recordDiv = document.querySelector('#record-text') as HTMLParagraphElement;

    songDiv.innerHTML = '';
    const mySongs: Song[] = songs;
    const RECORD_PER_PAGE: number = 2;

    const TOTAL_SONGS: number = mySongs.length;
    const counter = new Counter(RECORD_PER_PAGE);
    const firstNSongs: Song[] = getSongList();
    songDiv.insertAdjacentHTML('beforeend', showSongHtml(firstNSongs));

    function showRecordText(num: number) {
        recordDiv.textContent = `Showing ${num} of ${TOTAL_SONGS} songs`;
    }



    function getSongList(): Song[] {
        const startIndex: number = counter.getValue();
        counter.incrementCounter()
        const endIndex: number = counter.getValue();
        const nextSetOfSongs: Song[] = songs.slice(startIndex, endIndex);
        const numSongsText: number = nextSetOfSongs.length < RECORD_PER_PAGE ? mySongs.length : endIndex;
        showRecordText(numSongsText)
        return nextSetOfSongs;

    }




    const showMoreButton = document.querySelector('#show-more') as HTMLButtonElement;
    showMoreButton.addEventListener('click', _ => {
        let nextSetOfSongs: Song[] = getSongList();
        songDiv.insertAdjacentHTML('beforeend', showSongHtml(nextSetOfSongs))
        if (nextSetOfSongs.length < RECORD_PER_PAGE) {
            showMoreButton.style.display = 'none';
        }

    });



}



