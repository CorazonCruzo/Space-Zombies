// stop function for allow us to process sprite sheets
function setup_SpriteSheet(divName, imageName, noOfFrames, widthX, heightX) {
    // need the ratio of the container's width/height
    var imageOrgRatio = $(divName).height() / $(divName).width();

    // need to ensure the trailing decimals
    var ratio2 = Math.round(ratio * 10) / 10;

    // check that the width is completely divisible by the no of frames
    var newDivisible = Math.round((widthX  * ratio2) / noOfFrames);

    // the new width will be the number of frames multiplied by our new divisible
    var newWidthX = newDivisible * noOfFrames;

    //also the new height will be our ratio times the height of the div containing our image
    var newHeightX = heightX * ratio2;

    //apply our new width and height
    $(divName).css('width', newWidthX);
    $(divName).css('height', newHeightX);

    //set background image to our div
    $(divName).css('background-image', 'url('+imageName+')');

    //set background size (need to multiply width by the number of frames)
    $(divName).css('background-size', newWidthX * noOfFrames + 'px ' + newHeightX + 'px');
}

// setup the Gun
function setup_gun_SS() {
    setup_SpriteSheet('#SZ0_1', 'images/SZ_gun_SS.png', 28, 150, 150);

    // need to access a special function in ss.js file
    $('#SZ0_1').animateSprite({
        fps: 10,
        animations: {
            static: [0],
            reload: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
            fire: [24,25,26,27,28]
        },
        duration: 50,
        loop: false,
        complete: function() {
            // use complete() only when you set animations with loop === false
            //alert('animation end!');
            // allow click on reset button for animate gun after end of animation
            canIClick = 0;
        }
    })
}

// setup a newly created zombie
function setup_zombie_SS(whichOne) {
    // let's identify what type of zombie we should create
    var type_zombie = [1,2,3,1,2,3];

    // let's setup a speed for each type of zombie
    var speed_zombie = [100, 50, 150];

    // first let's setup our zombie SS

    setup_SpriteSheet('#zombie' + whichOne, 'images/zombiesSS_' + type_zombie[whichOne - 1] + '.png', 9, 20, 20);

    // need to access a special function in our ss.js

    $('#zombie' + whichOne).animateSprite({
        fps: 10,
        animations: {
            static: [0,1,2,3,4,5,6,7]
        },
        duration: speed_zombie[type_zombie[whichOne - 1] - 1],
        loop: true,
        complete: function() {
            // use complete() only when you set animations with loop === false
            //alert('animation end!');
        }
    });

    // setup a bubble zombie SS
    setup_SpriteSheet('#bubble_zombie' + whichOne, 'images/SZ_bubble.png', 3, 20, 20);

    // need to access to special func in ss.js
    $('#bubble_zombie' + whichOne).animateSprite({
        fps: 10,
        animations:  {
            z1: [type_zombie[whichOne - 1] - 1]
        },
        duration: 1,
        loop:  false,
        complete: function() {
            //
        }
    });

    // not to forget our special effects SS
    setup_SpriteSheet('#zombie_effect' + whichOne, 'images/SZ_effect_ss.png', 4, 13, 15);

    // need to access a special func in ss.js
    $('#zombie_effect' + whichOne).animateSprite({
        fps: 10,
        animations: {
            z1: [0,1,2,3]
        },
        loop: false,
        complete: function() {
            $('#zombie_effect' + whichOne).css({opacity: 0});
        }
    })
}


