/*
Filename: ComplexCode.js

This code is a complex implementation of a music player with multiple functionalities such as playlist management, visualization, and user interaction.

*/

// Array to store the list of songs
var playlist = [];

// Constructor for Song object
function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
}

// Add songs to the playlist
function addSong(title, artist, duration) {
  var song = new Song(title, artist, duration);
  playlist.push(song);
}

// Function to play a song
function playSong(song) {
  console.log("Playing: " + song.title + " by " + song.artist);
}

// Function to display the playlist
function displayPlaylist() {
  console.log("Playlist:");
  
  playlist.forEach(function(song, index) {
    console.log(index + 1 + ". " + song.title + " by " + song.artist);
  });
}

// Function to remove a song from the playlist
function removeSong(index) {
  if (index >= 0 && index < playlist.length) {
    var removedSong = playlist.splice(index, 1);
    console.log("Removed: " + removedSong[0].title + " by " + removedSong[0].artist);
  } else {
    console.log("Invalid index!");
  }
}

// Function to shuffle the playlist
function shufflePlaylist() {
  for (var i = playlist.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = playlist[i];
    playlist[i] = playlist[j];
    playlist[j] = temp;
  }
  
  console.log("Playlist shuffled!");
}

// Function to visualize the current playing song
function visualizeSong(song) {
  console.log("Visualizing: " + song.title);
  // Complex visualization code goes here...
}

// Function to handle user interaction
function handleUserInteraction() {
  var choice;
  
  do {
    console.log("1. Play a song");
    console.log("2. Display playlist");
    console.log("3. Add a song");
    console.log("4. Remove a song");
    console.log("5. Shuffle playlist");
    console.log("6. Exit");
    
    choice = parseInt(prompt("Enter your choice:"));
    
    switch (choice) {
      case 1:
        var index = parseInt(prompt("Enter the song index to play:"));
        if (index >= 1 && index <= playlist.length) {
          playSong(playlist[index - 1]);
          visualizeSong(playlist[index - 1]);
        } else {
          console.log("Invalid index!");
        }
        break;
      case 2:
        displayPlaylist();
        break;
      case 3:
        var title = prompt("Enter song title:");
        var artist = prompt("Enter song artist:");
        var duration = parseInt(prompt("Enter song duration (in seconds):"));
        addSong(title, artist, duration);
        break;
      case 4:
        var index = parseInt(prompt("Enter the song index to remove:"));
        removeSong(index - 1);
        break;
      case 5:
        shufflePlaylist();
        break;
      case 6:
        console.log("Exiting...");
        break;
      default:
        console.log("Invalid choice!");
        break;
    }
  } while (choice !== 6);
}

// Driver code
addSong("Song 1", "Artist 1", 180);
addSong("Song 2", "Artist 2", 210);
addSong("Song 3", "Artist 3", 240);
addSong("Song 4", "Artist 4", 195);
addSong("Song 5", "Artist 5", 220);

handleUserInteraction();