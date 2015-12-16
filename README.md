Closure Compiler Externs for PIXI version 3.0.8

TODO:

- few type warnings to sort out ( problems related to externs file ):

   - Unknown type WebGLFrameBuffer ( I could not strip it out from source )

   - Unknown type DOMHighResTimeStamp ( I am not sure why CC is not recognizing this one )

   - Unknown type PIXI.loaders.ResourceLoader ( I could not strip it out from source )

   - Unknown type Font ( I am not sure what do do about this one )

- source code inconsistencies ( problems related probably to the source code, please correct me if I am wrong ):

   - mismatch of the generateTexture property type and the type of the property it overrides from superclass PIXI.DisplayObject
      in PIXI.Graphics.prototype.generateTexture = function ( resolution, scaleMode ){};
      - original: function (this:PIXI.Container, (PIXI.CanvasRenderer|PIXI.WebGLRenderer|null), number, number): (PIXI.Texture|null)
      - override: function (this:PIXI.Graphics, number, number, number=): (PIXI.Texture|null)

   - mismatch of the getBounds property type and the type of the property it overrides from superclass PIXI.DisplayObject
     in: PIXI.Sprite.prototype.getBounds = function (matrix){};
      - original: function (this:PIXI.Container): (PIXI.Rectangle|null)
      - override: function (this:PIXI.Sprite, (PIXI.Matrix|null)): (PIXI.Rectangle|null)

   - mismatch of the destroy property type and the type of the property it overrides from superclass PIXI.Texture
     in: PIXI.RenderTexture.prototype.destroy = function ( destroyBase ){};
      - original: function (this:PIXI.Texture, boolean=): ?
      - override: function (this:PIXI.RenderTexture, boolean): ?

