function rotateGun(e) {
    //deduce X coordinates
    var xPos = e.clientX;

    //we need to work out where the mouse cursor is as a percentage of the screen's width
    //we'll work this out by dividing the current X position by the overall screen width (newWidth variable)
    var currentXPositionPercentage = xPos / newWidth;

    //we want to apply this to the max amount of rotation which is 50 however the starting rotation is -15 not 0
    var amountToRotate = -15 + (currentXPositionPercentage * 50);
    //let's rotate the gun!
    $('#SZ0_1').css('transform', 'rotate('+amountToRotate+'deg)');
}

// movement for our bubble zombie
function bubbleZombie_flyAway(whichOne) {
    // update the score
    current_score++;
    updateScore();

    var $zombiex = $('#bubble_zombie' + whichOne);

    // first it should animate upwards with a bounce
    $zombiex.animate({
        // bring our zombie up the screen
        // top: '-=' + 100 * ratio + 'px'
        top: '-=' + 50 * ratio + 'px'
    }, {
        easing: 'easeOutElastic',
        duration: 400,
        complete: function() {
            // now the final animation where the bubble zombie disappears into space
            $(this).delay(150).animate({
                // slowly turn the alpha down
                opacity: '-=' + 1
            }, {
                easing: 'easeOutQuint',
                duration: 1000,
                step: function(now, fx) {
                    // at each step we can adjust the scale to make it look smaller
                    if(fx.prop == 'opacity' && fx.pos >= 0.1) {
                        // work out the amount to scale
                        var xx = 0.5 / (fx.pos);

                        // apply the scale
                        $(this).css('transform', 'scale(' + xx +  ')');
                    }
                },
                complete: function() {
                    // finally let's make the zombie come towards the screen again
                    SZ_animateZombie(whichOne);
                }
            });
        }
    });
}