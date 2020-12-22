var ratio_use = ratio;

//main function
function main_call_setupContent() {
    // main div
    $('#SZ_maincontent').css('width', 600 * ratio);
    $('#SZ_maincontent').css('height', 400 * ratio);

    // make sure it is half way
    $('#SZ_maincontent').css('left', ($(window).width() / 2) - ((600 * ratio) / 2));
    $('#SZ_maincontent').css('top', ($(window).height() / 2) - ((400 * ratio) / 2));

    // box1
    $('#box1').css('width', 631 * ratio);
    $('#box1').css('height', 457 * ratio);

    // make sure it is half way
    $('#box1').css('left', ($(window).width() / 2) - ((637 * ratio) / 2));
    $('#box1').css('top', ($(window).height() / 2) - ((457 * ratio) / 2));

    // logo
    $('#logo').css('width', 400 * ratio);
    $('#logo').css('height', 146 * ratio);

    // make sure it is half way
    $('#logo').css('left', 0);
    $('#logo').css('top', 0);

    //set original sizes of images and multiply its with our ratio
    var image_ids = ['#SZ0_1', '#SZ0_2', '#SZ0_3'];
    var image_sizes = [[153, 157], [470, 190], [410, 174]];

    for(var i = 0; i < image_ids.length; i++) {
        $(image_ids[i]).css('width', image_sizes[i][1] * ratio);
        $(image_ids[i]).css('height', image_sizes[i][2] * ratio);
    }

    // intro and game over
    if($(window).height() < $(window).width()) {
        ratio_use = $(window).height() / 800;
    }

    // apply this new ratio to our intro/game over
    $('#SZ0_4').css('width', 458 * ratio_use);
    $('#SZ0_4').css('height', 370 * ratio_use);
    $('#SZ0_4').css('left', 71 * ratio);

    // make sure it is half way
    $('#SZ0_4').css('top', ($(window).height() / 2) - ((400 * ratio_use) / 2));

    $('#textx').css('width', '100%');
    $('#textx').css('height', '50%');

    // any sprite sheets
    setup_gun_SS();

    // create all our 6 zombies
    for(var i = 1; i < 7; i++) {
        SZ_createZombie(i);
    }

    // call the intro
    start_end_game(0);
}

var gameEnded = 0;

// intro or game over of game
function start_end_game(whichOne) {
    // hide all elements
    for(var i = 0; i <  4; i++) {
        $('#SZ0_' + i).css({opacity: 0});
    }

    // hide the zombies
    for(var i = 1; i < 7; i++) {
        // we need to stop animations
        $('#zombie' + i).stop();
        $('#zombie' + i).css({opacity: 0});
        $('#bubble_zombie' + i).css({opacity:  0});

        // set the z-index for the zombie
        $('#zombie' +  i).css('z-index', i + 100);
    }

    if(whichOne == 0) {
        // START OF GAME!!!
        //change the background image
        $('#SZ0_4').css('background-image', 'url(images/splash_intro.png)');
    } else {
        // GAME OVER!!!
        // show the score
        $('#SZ0_3').css({opacity: 1});

        // change the background image
        $('#SZ0_4').css('background-image', 'url(images/splash_gameover.png)');
    }

    // make sure it is half way
    $('#SZ0_4').css('top', 0);

    // finally show the intro or game over image
    $('#SZ0_4').css({opacity: 1});

    // stop the user from firing
    gameEnded = 1;
}

// need to store the current score
var current_score = 0;

// we can call this func to update the score
function updateScore() {
    $('#textx').text(current_score);
}

// start the game
function startGame() {
    // reset the score
    current_score = 0;
    updateScore();

    // reset the z-index
    zindex_current = 0;

    // reload the gun
    current_shots = 0;

    // allow user to fire
    gameEnded = 0;

    // hide the intro or game over image
    $('#SZ0_4').css({opacity: 0});

    // make sure it is out of the way
    $('#SZ0_4').css('top', ($(window).height()));

    // show the elements
    for(  var i = 0; i < 4; i++) {
        $('#SZ0_' +  i).css({opacity: 1});
    }

    // hide the reload btn!
    $('#SZ0_2').css({opacity: 0});

    // show the zombies
    for( var i = 1; i < 7; i++) {
        // reset the zombie
        SZ_resetZombie(i, 0);
    }

    // ensure the score board is half opacity
    $('#SZ0_3').css({opacity: 0.5});
}