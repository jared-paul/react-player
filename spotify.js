
      var createReactPlayer = require('./lib/ReactPlayer').createReactPlayer
      var Player = require('./lib/players/Spotify').default
      module.exports = createReactPlayer([{
        key: 'spotify',
        canPlay: Player.canPlay,
        lazyPlayer: Player
      }])
    