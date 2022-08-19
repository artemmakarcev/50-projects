/* const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSongs();

    document.getElementById(sound).play();
  });

  document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
} */

const mySounds = [
  'arcade-retro-changing-tab-206',
  'boxing-punch-2051',
  'deep-horror-drum-556',
  'drum-bass-hit-2294',
  'futuristic-bass-hit-2303',
  'game-ball-tap-2073',
  'hand-tribal-drum-562',
  'martial-arts-fast-punch-2047',
  'player-jumping-in-a-video-game-2043',
  'quick-jump-arcade-game-239',
  'retro-arcade-casino-notification-211',
  'soft-horror-hit-drum-564',
  'toy-drums-and-bell-ding-560',
  'tribal-dry-drum-558',
  'unlock-game-notification-253',
  'applause',
  'boo',
  'gasp',
  'tada',
  'victory',
  'wrong',
];

const myBtn = document.getElementById('myButtons');

mySounds.forEach((sound) => {
  const audio = document.createElement('audio');
  audio.id = sound;
  audio.src = `sounds/${sound}.wav`;
  myBtn.appendChild(audio);
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  btn.addEventListener('click', () => {
    mySounds.forEach((sound) => {
      const song = document.getElementById(sound);

      song.pause();
      song.currentTime = 0;
    });

    document.getElementById(sound).play();
  });
  document.getElementById('myButtons').appendChild(btn);
});
