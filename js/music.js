export const songs = [
    {
        'title': 'Rockabye',
        'image': "https://cdn-images.dzcdn.net/images/cover/58b6ae3ff5e9dfc6f9e4d59862094528/1900x1900-000000-80-0-0.jpg",
        'artist': ['Clean Bandit', 'Anne-Marie'],
        'release_year' :  2018
    },

    {
        'title': 'Ciao Adios',
        'image': 'https://i.scdn.co/image/ab67616d0000b27338aae75dc37fb42457866ffd',
        'artist': ['Anne-Marie'],
        'release_year' :  2018
    },
     {
        'title': 'Look At Me Now',
        'image':'https://cdn-images.dzcdn.net/images/cover/1434831d5c3bad50928fc36b01e81522/1900x1900-000000-80-0-0.jpg',
        'artist': ['Brennan Savage'],
        'release_year' :  2016
    },

    {
        'title': 'El precio del poder',
        'image': 'https://i.ytimg.com/vi/A1t6J-exfes/maxresdefault.jpg',
        'artist': ['RVFV'],
        'release_year' :  2025
    },
     {
        'title': 'Gangnam Style',
        'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27tOTidf2N-eL4Q6jASSbD1C5cJ1R7nsERQ&s',
        'artist': ['PSY'],
        'release_year' :  2012
    },

];
export function showSongHtml(songs) {
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