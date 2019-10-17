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
    /** @type {PIXI.Sprite} */
    let bunny = new PIXI.Sprite(app.loader.resources["bunny"].texture);

    /** @type {PIXI.Sprite} */
    let bunny2 = new PIXI.Sprite(app.loader.resources["bunny"].texture);

    /**
     *
     * @type {PIXI.Container}
     */
    let container = new PIXI.Container();
    container.addChild(bunny);

    container.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
    container.pivot.x = 0.5;
    container.pivot.y = 0.5;

    container.skew.x = 0.5;
    container.skew.y = 1.0;

    app.stage.addChild(container);

    // Testing graphics
    // window["circle"] = new PIXI.Circle();
    // window["rectangle"] = new PIXI.Rectangle();
    // window["roundRect"] = new PIXI.RoundedRectangle();
    // window["ellipse"] = new PIXI.Ellipse();
    // window["polygon"] = new PIXI.Polygon([new PIXI.Point(0, 0)]);

    // Blend Modes
    bunny2.blendMode = PIXI.BLEND_MODES.ADD;

    // Center the sprite's anchor point
    bunny.anchor.set(0.5, 0.5);

    bunny.scale.x = 2.0;
    bunny.scale.y = 2.0;

    bunny2.scale.x = 3.0;
    bunny2.scale.y = 3.0;

    // Move the sprite to the center of the screen
    bunny.x = app.renderer.width / 2;
    bunny.y = app.renderer.height / 2;

    bunny2.position.x = 450;
    bunny2.position.y = 200;

    app.stage.addChild(bunny);
    app.stage.addChild(bunny2);

    // Testing Text and TextStyle
    const style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#ffffff', '#00ff99'], // gradient
        stroke: '#4a1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 440,
    });

    const richText = new PIXI.Text('Google Closure Test Externs', style);
    richText.x = 50;
    richText.y = 250;

    app.stage.addChild(richText);

    // Graphics
    const rect = new PIXI.Graphics();
    rect.beginFill(0xff0000 );
    rect.drawRect(0, 0, 50, 50);
    rect.endFill();
    rect.position.x = 0;
    rect.position.y = 0;

    rect.cacheAsBitmap = true;

    console.log("DEBBUGING");

    app.ticker.add((delta) =>
    {
        bunny.rotation += 0.1 * delta;
        bunny2.rotation += 0.1 * delta;
    });
}
