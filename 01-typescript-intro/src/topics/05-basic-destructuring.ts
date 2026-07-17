

interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  songTitle: string;
  details:{};
}
interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  songTitle: 'Mess',
  details: {
    author: 'John Doe',
    year: 2020
  }
};


console.log('Audio Player', audioPlayer);

const { audioVolume, songDuration, songTitle, details } = audioPlayer;
const { author } = details as Details;

console.log('Audio Volume', audioVolume);
console.log('Song Duration', songDuration);
console.log('Song Title', songTitle);
console.log('Author', author);


const  dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ p1, p2, p3 ] = dbz;

console.log('Personaje 1:', p1);
console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);

export { };