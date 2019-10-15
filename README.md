Closure Compiler Externs for PIXI version 4.x

New project structure.

externs
|
--------- pixi-3.0.8-externs.js
--------- pixi-4.x-externs.js
|
test
---------
        |
        libs ---- pixi.js / pixi.min.js
        out  ---- index.js (clousured)
        src  ---- index.js
        index.html

Test options ( in this case I used PIXI 4.8.6 )

To generate example, you can write:
1 - gulp gcc
2 - npm run build

To launch a browser for testing different params. You can write more.
3 - Launch any http-server for test index.html

TIPS:

You must use 'window' for test unused objects, for examples:
window["rectangle"] = new PIXI.Rectangle(); // test PIXI.Rectangle.

-------------------------------------------------------------------------------------------------------------

Closure Compiler Externs for PIXI version 3.0.8

TODO:

- few type warnings to sort out ( problems related to externs file ):


- source code inconsistencies
( problems related probably to the source code, issue reported here: [Issue#2304](https://github.com/pixijs/pixi.js/issues/2304)):


  - src/externs/pixi-3.0.8-externs.js:2745: WARNING - mismatch of the generateTexture property type and the type of the property it overrides from superclass PIXI.DisplayObject
 original: function (this:PIXI.DisplayObject, (PIXI.CanvasRenderer|PIXI.WebGLRenderer|null), number, number=): (PIXI.Texture|null)
 override: function (this:PIXI.Container, (PIXI.CanvasRenderer|PIXI.WebGLRenderer|null), number, number): (PIXI.Texture|null)
 PIXI.Container.prototype.generateTexture = function (renderer, resolution, scaleMode) {};
 ^

  - src/externs/pixi-3.0.8-externs.js:3360: WARNING - mismatch of the generateTexture property type and the type of the property it overrides from superclass PIXI.DisplayObject
 original: function (this:PIXI.Container, (PIXI.CanvasRenderer|PIXI.WebGLRenderer|null), number, number): (PIXI.Texture|null)
 override: function (this:PIXI.Graphics, number, number, number=): (PIXI.Texture|null)
 PIXI.Graphics.prototype.generateTexture = function (resolution, scaleMode) {};
 ^


