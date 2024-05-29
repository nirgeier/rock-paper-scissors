/**
 * Open socket connection
 */
var Game = (function () {

  let
    // Create the socket connection
    //socket = io(),

    // List of play images
    cards = [
      'rocks',
      'paper',
      'scissors'];

  /** Simulate sleep function */
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /** Register Js handlers */
  function registerHandlers() {

    // Attach on click event
    $('.move')
      .on('click', function (e) {
        // Add the data-class for ui
        $('.move').attr('data-play', false)

        // Mark the user selection
        $(e.currentTarget).attr('data-play', true);

        // Update the chosen card
        $('[data-user-play]').css('background-image', 'url(/images/' + $(e.currentTarget).attr('data-card') + '.png)');
        play();
      })
  }

  async function play() {
    // Generate random number
    let random = Math.floor(Math.random() * 50);

    // Display random cards (like in slot machine)
    for (let i = 0; i < random; i++) {
      await sleep(100);
      $('[data-computer-play]').css('background-image', 'url(/images/' + cards[Math.floor(Math.random() * 3)] + '.png)');
    }

    // Call the python code for the game logic
    console.log('User: ' + $('[data-user-play]').css('background-image'))
    console.log('Computer: ' + $('[data-computer-play]').css('background-image'))
    // Mark the user selection
    $(`[data-play]`).removeAttr('data-play');

  }

  registerHandlers();

})();
