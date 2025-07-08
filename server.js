import express from 'express'
import * as fs from 'fs';

import { songs } from './public/js/classes/music.js';


const port = 3000;
const app = express();
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const runApp = _ => {
    console.log(`Server listening on port ${port.toLocaleString('en')}`);
    //  saveSongs(songs);
}
app.listen(port, _ => runApp());

function saveSongs(songs) {

    const jsonSongs = JSON.stringify(songs, null, 2);

    fs.writeFile("public/js/json/songs.json", jsonSongs, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file', err);
        } else {
            console.log('Data written to file');
        }
    });

}



