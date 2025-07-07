import { Song } from './music.js';

export function showSongHtml(songs: Song[]) {
    let html = '';
    songs.forEach(song => {
        const artistDiv = song.artist.map(artist => `<ul class="list-group list-group-flush">
    <li class="list-group-item">${artist}</li>
  </ul>`).join().replaceAll(',', '');

        html += `      <div class="col-sm-6 col-md-4 mt-3">
                <div class="card" style="width: 18rem;">
  <img src="${song.image}" class="card-img-top" alt="${song.title} by ${song.artist.join()}">
  <div class="card-body">
    <h5 class="card-title">${song.title}</h5>
    <p class="card-text">${song.release_year} </p>
  </div>
  ${artistDiv}
 
</div>
                
    </div>
`;

    });
    return html;
}