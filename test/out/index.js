(function () {
'use strict';

/**
 * This is the default playground.
 * You should see a bunny spinning in the right preview pane.
 * Feel free to use this as a starting point for you own playground!
 */

// Create our application instance
var app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x2c3e50
});
document.body.appendChild(app.view);

// Load the bunny texture
app.loader.add('bunny', 'https://pixijs.io/examples/examples/assets/bunny.png').load(startup);

function startup()
{
    var bunny = new PIXI.Sprite(app.loader.resources["bunny"].texture);

    // Center the sprite's anchor point
    bunny.anchor.set(0.5);

    // Move the sprite to the center of the screen
    bunny.x = app.renderer.width / 2;
    bunny.y = app.renderer.height / 2;

    app.stage.addChild(bunny);
}

}());