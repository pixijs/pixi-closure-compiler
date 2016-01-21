//TODO - add missing types
//TODO - correct all unrecognised types

var PIXI = {};

/**
 * The DOMHighResTimeStamp type is a double and is used to store a time value. 
 * @constructor
 */
var DOMHighResTimeStamp = function () {};

/**
 * @constructor
 */
var WebGLFrameBuffer = function () {};
/**
 * @constructor
 */
var WebGLRenderBuffer = function () {};


/**
 * Manages the state and loading of a single resource represented by
 * a single URL.
 *
 * @class
 * @param {string} name The name of the resource to load.
 * @param {string|Array<string>} url The url for this resource, for audio/video loads you can pass an array of sources.
 * @param {Object=} options The options for the load.
 */
var Resource=function (name, url, options) {}


/**
 * @enum {number}
 */
PIXI.BLEND_MODES = {
    NORMAL: 0,
    ADD: 1,
    MULTIPLY: 2,
    SCREEN: 3,
    OVERLAY: 4,
    DARKEN: 5,
    LIGHTEN: 6,
    COLOR_DODGE: 7,
    COLOR_BURN: 8,
    HARD_LIGHT: 9,
    SOFT_LIGHT: 10,
    DIFFERENCE: 11,
    EXCLUSION: 12,
    HUE: 13,
    SATURATION: 14,
    COLOR: 15,
    LUMINOSITY: 16
};

/**
 * @type {number}
 */
PIXI.DEG_TO_RAD;

/**
 * @enum {number}
 */
PIXI.DRAW_MODES = {
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6
};

/**
 * @type {PIXI.loaders.Loader}
 */
PIXI.loader;

/**
 * @type {number}
 */
PIXI.PI_2;

/**
 * @type {number}
 */
PIXI.RAD_TO_DEG;

/**
 * @enum {number}
 */
PIXI.RENDERER_TYPE = {
    UNKNOWN: 0,
    WEBGL: 1,
    CANVAS: 2
};

/**
 * @type {string}
 */
PIXI.RETINA_PREFIX;

/**
 * @enum {number}
 */
PIXI.SCALE_MODES = {
    DEFAULT: 0,
    LINEAR: 0,
    NEAREST: 1
};

/**
 * @enum {number}
 */
PIXI.SHAPES = {
    POLY: 0,
    RECT: 1,
    CIRC: 2,
    ELIP: 3,
    RREC: 4
};

/**
 * @type {number}
 */
PIXI.TARGET_FPMS;

/**
 * @type {string}
 */
PIXI.VERSION;

/** @typedef {{
 *        view: (HTMLCanvasElement|undefined),
 *        transparent: (boolean|undefined),
 *        antialias: (boolean|undefined),
 *        preserveDrawingBuffer: (boolean|undefined),
 *        resolution: (number|undefined)
 *      }}
 */
var PixiDetectRendererOptions;

/** 
 * @param {number} width
 * @param {number} height
 * @param {PixiDetectRendererOptions=} options
 * @param {boolean=} noWebGL
 * @return {PIXI.WebGLRenderer|PIXI.CanvasRenderer} Returns WebGL renderer if available, otherwise CanvasRenderer
 */
PIXI.autoDetectRenderer = function (width, height, options, noWebGL) {};

/*---------------------------------------------------------------------------------------------------------
*                                            PIXI.extras
--------------------------------------------------------------------------------------------------------*/

PIXI.extras = {};

/** @typedef {{
 *        name: (string|undefined),
 *        size: (number|undefined)
 *      }}
 */
var PixiFontStyleOptions;

/** @typedef {{
 *        font: (string|PixiFontStyleOptions),
 *        align: (string|undefined),
 *        tint: (number|undefined)
 *      }}
 */
var PixiBitmapTextStyleOptions;

/** 
 * @constructor
 * @extends {PIXI.Container}
 * @param {string} text
 * @param {PixiBitmapTextStyleOptions} style
 */
PIXI.extras.BitmapText = function (text, style) {};

/**
 * @type {string}
 */
PIXI.extras.BitmapText.prototype.align;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.alpha;

/**
 * @type {boolean}
 */
PIXI.extras.BitmapText.prototype.cacheAsBitmap;

/**
 * @type {Array.<PIXI.DisplayObject>}
 */
PIXI.extras.BitmapText.prototype.children;

/**
 * @type {boolean}
 */
PIXI.extras.BitmapText.prototype.dirty;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.extras.BitmapText.prototype.filterArea;

/**
 * @type {Array.<PIXI.AbstractFilter>}
 */
PIXI.extras.BitmapText.prototype.filters;

/**
 * @type {string|PixiFontStyleOptions}
 */
PIXI.extras.BitmapText.prototype.font;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.height;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.maxLineHeight;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.maxWidth;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.maxWidth;

/**
 * @type {PIXI.Container}
 */
PIXI.extras.BitmapText.prototype.parent;

/**
 * @type {PIXI.Point}
 */
PIXI.extras.BitmapText.prototype.pivot;

/**
 * @type {PIXI.Point}
 */
PIXI.extras.BitmapText.prototype.position;

/**
 * @type {boolean}
 */
PIXI.extras.BitmapText.prototype.renderable;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.rotation;

/**
 * @type {PIXI.Point}
 */
PIXI.extras.BitmapText.prototype.scale;

/**
 * @type {string}
 */
PIXI.extras.BitmapText.prototype.text;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.textHeight;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.textWidth;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.tint;

/**
 * @type {boolean}
 */
PIXI.extras.BitmapText.prototype.visible;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.width;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.width;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.worldAlpha;

/**
 * @type {boolean}
 */
PIXI.extras.BitmapText.prototype.worldVisible;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.x;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.y;

/**
 * @return {PIXI.Rectangle}
 */
PIXI.extras.BitmapText.prototype.getLocalBounds = function () {};

/**
 * @typedef {{
 *        texture: PIXI.Texture,
 *        time: number
 *      }}
 */
var PixiMovieClipTextures;

/** 
 * @constructor
 * @extends {PIXI.Sprite}
 * @param {Array.<PIXI.Texture>|Array.<PixiMovieClipTextures>} textures
 */
PIXI.extras.MovieClip = function (textures) {};

/**
 * @type {number}
 */
PIXI.extras.MovieClip.prototype.alpha;

/**
 * @type {PIXI.Point}
 */
PIXI.extras.MovieClip.prototype.anchor;

/**
 * @type {number}
 */
PIXI.extras.MovieClip.prototype.animationSpeed;

/**
 * @type {number}
 */
PIXI.extras.MovieClip.prototype.blendMode;

/**
 * @type {boolean}
 */
PIXI.extras.MovieClip.prototype.cacheAsBitmap;

/**
 * @type {number}
 */
PIXI.extras.MovieClip.prototype.cachedTint;

/**
 * @type {Array.<PIXI.DisplayObject>}
 */
PIXI.extras.MovieClip.prototype.children;

/**
 * @type {number}
 */
PIXI.extras.MovieClip.prototype.currentFrame;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.extras.MovieClip.prototype.filterArea;

/**
 * @type {Array.<PIXI.AbstractFilter>}
 */
PIXI.extras.MovieClip.prototype.filters;

/**
 * @type {number}
 */
PIXI.extras.MovieClip.prototype.height;

/**
 * @type {boolean}
 */
PIXI.extras.MovieClip.prototype.loop;

/**
* @type {function()|undefined}
*/
PIXI.extras.MovieClip.prototype.onComplete;

/**
 * @type {PIXI.Container}
 */
PIXI.extras.MovieClip.prototype.parent;

/**
 * @type {PIXI.Point}
 */
PIXI.extras.MovieClip.prototype.pivot;

/**
 * @type {boolean}
 */
PIXI.extras.MovieClip.prototype.playing;

/**
 * @type {PIXI.Point}
 */
PIXI.extras.MovieClip.prototype.position;

/**
 * @type {boolean}
 */
PIXI.extras.MovieClip.prototype.renderable;

/**
 * @type {number}
 */
PIXI.extras.MovieClip.prototype.rotation;

/**
 * @type {PIXI.Point}
 */
PIXI.extras.MovieClip.prototype.scalePIXI;

/**
 * @type {PIXI.AbstractFilter|PIXI.Shader}
 */
PIXI.extras.MovieClip.prototype.shader;

/**
 * @type {PIXI.Texture}
 */
PIXI.extras.MovieClip.prototype.texture;

/**
 * @type {Array.<PIXI.Texture>}
 */
PIXI.extras.MovieClip.prototype.textures;

/**
 * @type {number}
 */
PIXI.extras.MovieClip.prototype.tint;

/**
 * @type {number}
 */
PIXI.extras.MovieClip.prototype.totalFrames;

/**
 * @type {boolean}
 */
PIXI.extras.MovieClip.prototype.visible;

/**
 * @type {number}
 */
PIXI.extras.MovieClip.prototype.width;

/**
 * @type {number}
 */
PIXI.extras.MovieClip.prototype.worldAlpha;

/**
 * @type {PIXI.Matrix}
 */
PIXI.extras.MovieClip.prototype.worldTransform;

/**
 * @type {boolean}
 */
PIXI.extras.MovieClip.prototype.worldVisible;

/**
 * @type {number}
 */
PIXI.extras.MovieClip.prototype.x;

/**
 * @type {number}
 */
PIXI.extras.MovieClip.prototype.y;

/**
 * @param {Array.<string>} frames
 */
PIXI.extras.MovieClip.fromFrames = function (frames) {};

/**
 * @param {Array.<string>} images
 */
PIXI.extras.MovieClip.fromImages = function (images) {};

/**
 * @param {number} frameNumber
 */
PIXI.extras.MovieClip.prototype.gotoAndPlay = function (frameNumber) {};

/**
 * @param {number} frameNumber
 */
PIXI.extras.MovieClip.prototype.gotoAndStop = function (frameNumber) {};

PIXI.extras.MovieClip.prototype.play = function () {};

PIXI.extras.MovieClip.prototype.stop = function () {};

/** 
 * @constructor
 * @extends {PIXI.Sprite}
 * @param {PIXI.Texture} texture
 * @param {number} width
 * @param {number} height
 */
PIXI.extras.TilingSprite = function (texture, width, height) {};

/**
 *  @type {number}
 */
PIXI.extras.TilingSprite.prototype.alpha;

/**
 *  @type {PIXI.Point}
 */
PIXI.extras.TilingSprite.prototype.anchor;

/**
 *  @type {number}
 */
PIXI.extras.TilingSprite.prototype.blendMode;

/**
 *  @type {boolean}
 */
PIXI.extras.TilingSprite.prototype.cacheAsBitmap;

/**
 *  @type {number}
 */
PIXI.extras.TilingSprite.prototype.cachedTint;

/**
 *  @type {Array.<PIXI.DisplayObject>}
 */
PIXI.extras.TilingSprite.prototype.children;

/**
 *  @type {PIXI.Rectangle}
 */
PIXI.extras.TilingSprite.prototype.filterArea;

/**
 *  @type {Array.<PIXI.AbstractFilter>}
 */
PIXI.extras.TilingSprite.prototype.filters;

/**
 * @type {number}
 */
PIXI.extras.TilingSprite.prototype.height;

/**
 *  @type {PIXI.Graphics|PIXI.Sprite}
 */
PIXI.extras.TilingSprite.prototype.mask;

/**
 *  @type {PIXI.Container}
 */
PIXI.extras.TilingSprite.prototype.parent;

/**
 *  @type {PIXI.Point}
 */
PIXI.extras.TilingSprite.prototype.pivot;

/**
 *  @type {PIXI.Point}
 */
PIXI.extras.TilingSprite.prototype.position;

/**
 *  @type {boolean}
 */
PIXI.extras.TilingSprite.prototype.renderable;

/**
 *  @type {number}
 */
PIXI.extras.TilingSprite.prototype.rotation;

/**
 *  @type {PIXI.Point}
 */
PIXI.extras.TilingSprite.prototype.scale;

/**
 *  @type {PIXI.AbstractFilter|PIXI.Shader}
 */
PIXI.extras.TilingSprite.prototype.shader;

/**
 *  @type {PIXI.Texture}
 */
PIXI.extras.TilingSprite.prototype.texture;

/**
 *  @type {PIXI.Point}
 */
PIXI.extras.TilingSprite.prototype.tilePosition;

/**
 *  @type {PIXI.Point}
 */
PIXI.extras.TilingSprite.prototype.tileScale;

/**
 *  @type {number}
 */
PIXI.extras.TilingSprite.prototype.tint;

/**
 *  @type {boolean}
 */
PIXI.extras.TilingSprite.prototype.visible;

/**
 * @type {number}
 */
PIXI.extras.TilingSprite.prototype.width;

/**
 *  @type {number}
 */
PIXI.extras.TilingSprite.prototype.worldAlpha;

/**
 *  @type {PIXI.Matrix}
 */
PIXI.extras.TilingSprite.prototype.worldTransform;

/**
 *  @type {boolean}
 */
PIXI.extras.TilingSprite.prototype.worldVisible;

/**
 *  @type {number}
 */
PIXI.extras.TilingSprite.prototype.x;

/**
 *  @type {number}
 */
PIXI.extras.TilingSprite.prototype.y;

/**
 * @param {string} frameId
 * @param {number} width
 * @param {number} height
 * @return {PIXI.extras.TilingSprite}
 */
PIXI.extras.TilingSprite.fromFrame = function (frameId, width, height) {};

/**
 * @param {string} imageId
 * @param {number} width
 * @param {number} height
 * @param {boolean=} crossorigin
 * @param {number=} scaleMode
 * @return {PIXI.extras.TilingSprite}
 */
PIXI.extras.TilingSprite.fromImage = function (imageId, width, height, crossorigin, scaleMode) {};

/**
 * @param {PIXI.Point} point
 */
PIXI.extras.TilingSprite.prototype.containsPoint = function (point) {};

PIXI.extras.TilingSprite.prototype.destroy = function () {};

/**
 * @return {PIXI.Rectangle}
 */
PIXI.extras.TilingSprite.prototype.getBounds = function () {};

/*---------------------------------------------------------------------------------------------------------
*                                            PIXI.filters
--------------------------------------------------------------------------------------------------------*/

PIXI.filters = {};

/**
 * @class
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.AsciiFilter = function () {};

/**
 * @type {number}
 */
PIXI.filters.AsciiFilter.prototype.padding;

/**
 * @type {number}
 */
PIXI.filters.AsciiFilter.prototype.size;

/**
 * @type {Object}
 */
PIXI.filters.AsciiFilter.prototype.uniforms;

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.BloomFilter = function () {};

/**
 * @type {number}
 */
PIXI.filters.BloomFilter.prototype.blur;

/**
 * @type {number}
 */
PIXI.filters.BloomFilter.prototype.blurX;

/**
 * @type {number}
 */
PIXI.filters.BloomFilter.prototype.blurY;

/**
 * @type {number}
 */
PIXI.filters.BloomFilter.prototype.padding;

/**
 * @type {Object}
 */
PIXI.filters.BloomFilter.prototype.uniforms;

/** 
 * @constructor
 * @param {number} dirX
 * @param {number} dirY
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.BlurDirFilter = function (dirX, dirY) {};

/**
 * @type {number}
 */
PIXI.filters.BlurDirFilter.prototype.blur;

/**
 * @type {number}
 */
PIXI.filters.BlurDirFilter.prototype.dirX;

/**
 * @type {number}
 */
PIXI.filters.BlurDirFilter.prototype.dirY;

/**
 * @type {number}
 */
PIXI.filters.BlurDirFilter.prototype.padding;

/**
 * @type {number}
 */
PIXI.filters.BlurDirFilter.prototype.passes;

/**
 * @type {Object}
 */
PIXI.filters.BlurDirFilter.prototype.uniforms;

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.BlurFilter = function () {};

/**
 * @type {number}
 */
PIXI.filters.BlurFilter.prototype.blur;

/**
 * @type {number}
 */
PIXI.filters.BlurFilter.prototype.blurX;

/**
 * @type {number}
 */
PIXI.filters.BlurFilter.prototype.blurY;

/**
 * @type {number}
 */
PIXI.filters.BlurFilter.prototype.padding;

/**
 * @type {Object}
 */
PIXI.filters.BlurFilter.prototype.uniforms;

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.BlurXFilter = function () {};

/**
 * @type {number}
 */
PIXI.filters.BlurXFilter.prototype.blur;

/**
 * @type {number}
 */
PIXI.filters.BlurXFilter.prototype.padding;

/**
 * @type {number}
 */
PIXI.filters.BlurXFilter.prototype.passes;

/**
 * @type {Object}
 */
PIXI.filters.BlurXFilter.prototype.uniforms;

/**
 * @class
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.BlurYFilter = function () {};

/**
 * @type {number}
 */
PIXI.filters.BlurYFilter.prototype.blur;

/**
 * @type {number}
 */
PIXI.filters.BlurYFilter.prototype.dirX;

/**
 * @type {number}
 */
PIXI.filters.BlurYFilter.prototype.padding;

/**
 * @type {number}
 */
PIXI.filters.BlurYFilter.prototype.passes;

/**
 * @type {Object}
 */
PIXI.filters.BlurYFilter.prototype.uniforms;

/**
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.BlurYTintFilter = function () {};

/**
 * @type {number}
 */
PIXI.filters.BlurYTintFilter.prototype.blur;

/**
 * @type {number}
 */
PIXI.filters.BlurYTintFilter.prototype.padding;

/**
 * @type {Object}
 */
PIXI.filters.BlurYTintFilter.prototype.uniforms;

/**
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.ColorMatrixFilter = function () {};

/**
 * @type {Array.<number>}
 */
PIXI.filters.ColorMatrixFilter.prototype.matrix;

/**
 * @type {number}
 */

PIXI.filters.ColorMatrixFilter.prototype.padding;
/**
 * @type {Object}
 */
PIXI.filters.ColorMatrixFilter.prototype.uniforms;

/**
 * @param {Array.<number>} matrix
 * @return m {Array.<number>}
 */
PIXI.filters.ColorMatrixFilter.prototype._colorMatrix = function (matrix) {};

/**
 * @param {Array.<number>} matrix
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype._loadMatrix = function (matrix, multiply) {};

/**
 * @param {Array.<number>} out
 * @param {Array.<number>} a
 * @param {Array.<number>} b
 * @returns out {Array.<number>}
 */
PIXI.filters.ColorMatrixFilter.prototype._multiply = function (out, a, b) {};

/**
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.blackAndWhite = function (multiply) {};

/**
 * @param {number} b
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.brightness = function (b, multiply) {};

/**
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.browni = function (multiply) {};

/**
 * TODO - to remove? exists in pixi source, but not in http://pixijs.github.io/docs *
 * @param {number} desaturation
 * @param {number} toned
 * @param {string} lightColor
 * @param {string} darkColor
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.colorTone = function (desaturation, toned, lightColor, darkColor, multiply) {};
/**
 * @param {number} amount
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.contrast = function (amount, multiply) {};

/**
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.desaturate = function (multiply) {};

/**
 * @param {number} scale
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.greyscale = function (scale, multiply) {};

/**
 * @param {number} rotation
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.hue = function (rotation, multiply) {};

/**
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.kodachrome = function (multiply) {};

/**
 * TODO - to remove? exists in pixi source, but not in http://pixijs.github.io/docs *
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.lsd = function (multiply) {};

/**
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.negative = function (multiply) {};

/**
 * TODO - to remove? exists in pixi source, but not in http://pixijs.github.io/docs *
 * @param {number} intensity
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.night = function (intensity, multiply) {};

/**
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.polaroid = function (multiply) {};

/**
 * TODO - to remove? exists in pixi source, but not in http://pixijs.github.io/docs *
 * @param {number} amount
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.predator = function (amount, multiply) {};

/**
 * TODO - to remove? exists in pixi source, but not in http://pixijs.github.io/docs *
 * */
PIXI.filters.ColorMatrixFilter.prototype.reset = function () {};

/**
 * @param {number} amount
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.saturate = function (amount, multiply) {};

/**
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.sepia = function (multiply) {};

/**
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.technicolor = function (multiply) {};

/**
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.toBGR = function (multiply) {};

/**
 * TODO - to remove? exists in pixi source, but not in http://pixijs.github.io/docs *
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.vintage = function (multiply) {};

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.ColorStepFilter = function () {};


/**
 * @type {number}
 */
PIXI.filters.ColorStepFilter.prototype.step;

/**
 * @type {number|Object}
 */
PIXI.filters.ColorStepFilter.prototype.padding;

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 * @param {Array.<number>} matrix
 * @param {number} width
 * @param {number} height
 */
PIXI.filters.ConvolutionFilter = function (matrix, width, height) {};

/**
 * @type {number}
 */
PIXI.filters.ConvolutionFilter.prototype.height;

/**
 * @type {Array.<number>}
 */
PIXI.filters.ConvolutionFilter.prototype.matrix;

/**
 * @type {number}
 */
PIXI.filters.ConvolutionFilter.prototype.padding;

/**
 * @type {Object}
 */
PIXI.filters.ConvolutionFilter.prototype.uniforms;

/**
 * @type {number}
 */
PIXI.filters.ConvolutionFilter.prototype.width;

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.CrossHatchFilter = function () {};

/**
 * @type {number}
 */
PIXI.filters.CrossHatchFilter.prototype.padding;

/**
 * @type {Object}
 */
PIXI.filters.CrossHatchFilter.prototype.uniforms;

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 * @param {PIXI.Sprite} sprite
 * @param {number} scale
 */
PIXI.filters.DisplacementFilter = function (sprite, scale) {};

/**
 * @type {PIXI.Texture}
 */
PIXI.filters.DisplacementFilter.prototype.map;

/**
 * @type {number}
 */
PIXI.filters.DisplacementFilter.prototype.padding;

/**
 * @type {Object}
 */
PIXI.filters.DisplacementFilter.prototype.uniforms;

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.DotScreenFilter = function () {};

/**
 * @type {number}
 */
PIXI.filters.DotScreenFilter.prototype.angle;

/**
 * @type {number}
 */
PIXI.filters.DotScreenFilter.prototype.padding;

/**
 * @type {number}
 */
PIXI.filters.DotScreenFilter.prototype.scale;

/**
 * @type {Object}
 */
PIXI.filters.DotScreenFilter.prototype.uniforms;

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.DropShadowFilter = function () {};

/**
 * @type {number}
 */
PIXI.filters.DropShadowFilter.prototype.alpha;

/**
 * @type {number}
 */
PIXI.filters.DropShadowFilter.prototype.angle;

/**
 * @type {number}
 */
PIXI.filters.DropShadowFilter.prototype.blur;

/**
 * @type {number}
 */
PIXI.filters.DropShadowFilter.prototype.blurX;

/**
 * @type {number}
 */
PIXI.filters.DropShadowFilter.prototype.blurY;

/**
 * @type {number}
 */
PIXI.filters.DropShadowFilter.prototype.color;

/**
 * @type {number}
 */
PIXI.filters.DropShadowFilter.prototype.distance;

/**
 * @type {number}
 */
PIXI.filters.DropShadowFilter.prototype.padding;

/**
 * @type {Object}
 */
PIXI.filters.DropShadowFilter.prototype.uniforms;

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.GrayFilter = function () {};

/**
 * @type {number}
 */
PIXI.filters.GrayFilter.prototype.gray;

/**
 * @type {number}
 */
PIXI.filters.GrayFilter.prototype.padding;

/**
 * @type {Object}
 */
PIXI.filters.GrayFilter.prototype.uniforms;

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.InvertFilter = function () {};

/**
 * @type {number}
 */
PIXI.filters.InvertFilter.prototype.invert;

/**
 * @type {number}
 */
PIXI.filters.InvertFilter.prototype.padding;

/**
 * @type {Object}
 */
PIXI.filters.InvertFilter.prototype.uniforms;

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.NoiseFilter = function () {};

/**
 * @type {number}
 */
PIXI.filters.NoiseFilter.prototype.noise;

/**
 * @type {number}
 */
PIXI.filters.NoiseFilter.prototype.padding;

/**
 * @type {Object}
 */
PIXI.filters.NoiseFilter.prototype.uniforms;

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.PixelateFilter = function () {};

/**
 * @type {number}
 */
PIXI.filters.PixelateFilter.prototype.padding;
/**
 * @type {PIXI.Point}
 */
PIXI.filters.PixelateFilter.prototype.size;

/**
 * @type {Object}
 */
PIXI.filters.PixelateFilter.prototype.uniforms;

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.RGBSplitFilter = function () {};

/**
 * @type {PIXI.Point}
 */
PIXI.filters.RGBSplitFilter.prototype.blue;

/**
 * @type {PIXI.Point}
 */
PIXI.filters.RGBSplitFilter.prototype.green;

/**
 * @type {number}
 */
PIXI.filters.RGBSplitFilter.prototype.padding;

/**
 * @type {PIXI.Point}
 */
PIXI.filters.RGBSplitFilter.prototype.red;

/**
 * @type {Object}
 */
PIXI.filters.RGBSplitFilter.prototype.uniforms;

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.SepiaFilter = function () {};

/**
 * @type {number}
 */
PIXI.filters.SepiaFilter.prototype.padding;

/**
 * @type {number}
 */
PIXI.filters.SepiaFilter.prototype.sepia;

/**
 * @type {Object}
 */
PIXI.filters.SepiaFilter.prototype.uniforms;

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.ShockwaveFilter = function () {};

/**
 * @type {Object.<string, number>}
 */
PIXI.filters.ShockwaveFilter.prototype.center;

/**
 * @type {number}
 */
PIXI.filters.ShockwaveFilter.prototype.padding;

/**
 * @type {Object.<string, number>}
 */
PIXI.filters.ShockwaveFilter.prototype.params;

/**
 * @type {number}
 */
PIXI.filters.ShockwaveFilter.prototype.time;

/**
 * @type {Object}
 */
PIXI.filters.ShockwaveFilter.prototype.uniforms;

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.SmartBlurFilter = function () {};
/**
 * @type {number}
 */
PIXI.filters.SmartBlurFilter.prototype.padding;

/**
 * @type {Object}
 */
PIXI.filters.SmartBlurFilter.prototype.uniforms;

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.TiltShiftAxisFilter = function () {};

/**
 * @type {number}
 */
PIXI.filters.TiltShiftAxisFilter.prototype.blur;

/**
 * @type {PIXI.Point}
 */
PIXI.filters.TiltShiftAxisFilter.prototype.end;

/**
 * @type {number}
 */
PIXI.filters.TiltShiftAxisFilter.prototype.gradientBlur;

/**
 * @type {number}
 */
PIXI.filters.TiltShiftAxisFilter.prototype.padding;

/**
 * @type {PIXI.Point}
 */
PIXI.filters.TiltShiftAxisFilter.prototype.start;

/**
 * @type {Object}
 */
PIXI.filters.TiltShiftAxisFilter.prototype.uniforms;

PIXI.filters.TiltShiftAxisFilter.prototype.updateDelta = function () {};

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.TiltShiftFilter = function () {};

/**
 * @type {number}
 */
PIXI.filters.TiltShiftFilter.prototype.blur;

/**
 * @type {number}
 */
PIXI.filters.TiltShiftFilter.prototype.end;

/**
 * @type {number}
 */
PIXI.filters.TiltShiftFilter.prototype.gradientBlur;

/**
 * @type {number}
 */
PIXI.filters.TiltShiftFilter.prototype.padding;

/**
 * @type {number}
 */
PIXI.filters.TiltShiftFilter.prototype.start;

/**
 * @type {Object}
 */
PIXI.filters.TiltShiftFilter.prototype.uniforms;

/** 
 * @constructor
 * @extends {PIXI.filters.TiltShiftAxisFilter}
 */
PIXI.filters.TiltShiftXFilter = function () {};

PIXI.filters.TiltShiftXFilter.prototype.updateDelta = function () {};

/** 
 * @constructor
 * @extends {PIXI.filters.TiltShiftAxisFilter}
 */
PIXI.filters.TiltShiftYFilter = function () {};

PIXI.filters.TiltShiftYFilter.prototype.updateDelta = function () {};

/** 
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.filters.TwistFilter = function () {};

/**
 * @type {number}
 */
PIXI.filters.TwistFilter.prototype.angle;

/**
 * @type {PIXI.Point}
 */
PIXI.filters.TwistFilter.prototype.offset;

/**
 * @type {number}
 */
PIXI.filters.TwistFilter.prototype.padding;

/**
 * @type {number}
 */
PIXI.filters.TwistFilter.prototype.radius;

/**
 * @type {Object}
 */
PIXI.filters.TwistFilter.prototype.uniforms;

/*---------------------------------------------------------------------------------------------------------
*                                            PIXI.interaction
--------------------------------------------------------------------------------------------------------*/

PIXI.interaction = {};

/** 
 * @constructor
 */
PIXI.interaction.InteractionData = function () {};

/**
 * @type {PIXI.Point}
 */
PIXI.interaction.InteractionData.prototype.global;

/**
 * @type {Event}
 */
PIXI.interaction.InteractionData.prototype.originalEvent;

/**
 * @type {PIXI.Sprite}
 */
PIXI.interaction.InteractionData.prototype.target;

/**
 * TODO - to remove globalPos? - exists in the source but not in http://pixijs.github.io/docs/PIXI.interaction.InteractionData.html
 *
 * @param {PIXI.DisplayObject} displayObject
 * @param {PIXI.Point=} point
 * @param {PIXI.Point=} globalPos
 * @return {PIXI.Point}
 */
PIXI.interaction.InteractionData.prototype.getLocalPosition = function (displayObject, point, globalPos) {};

/**
 * @typedef {{
 *        autoPreventDefault: (boolean|undefined),
 *        interactionFrequency: (number|undefined)
 *      }}
 */
var InteractionManagerOptions;

/** 
 * @constructor
 * @param {PIXI.CanvasRenderer|PIXI.WebGLRenderer} renderer
 * @param {InteractionManagerOptions=} options
 */
PIXI.interaction.InteractionManager = function (renderer, options) {};

/**
 * @type {boolean}
 */
PIXI.interaction.InteractionManager.prototype.autoPreventDefault;

/**
 * The css style of the cursor that is being used
 * @type {string}
 */
PIXI.interaction.InteractionManager.prototype.currentCursorStyle;

/**
 * @type {Object}
 */
PIXI.interaction.InteractionManager.prototype.eventData;

/**
 * @type {number}
 */
PIXI.interaction.InteractionManager.prototype.interactionFrequency;

/**
 * @type {Array.<PIXI.interaction.InteractionData>}
 */
PIXI.interaction.InteractionManager.prototype.interactiveDataPool;

/**
 * @type {number}
 */
PIXI.interaction.InteractionManager.prototype.last;

/**
 * @type {PIXI.interaction.InteractionData}
 */
PIXI.interaction.InteractionManager.prototype.mouse;

/**
 * @type {Function}
 */
PIXI.interaction.InteractionManager.prototype.onMouseDown;

/**
 * @type {Function}
 */
PIXI.interaction.InteractionManager.prototype.onMouseMove;

/**
 * @type {Function}
 */
PIXI.interaction.InteractionManager.prototype.onMouseOut;

/**
 * @type {Function}
 */
PIXI.interaction.InteractionManager.prototype.onMouseUp;

/**
 * @type {Function}
 */
PIXI.interaction.InteractionManager.prototype.onTouchEnd;

/**
 * @type {Function}
 */
PIXI.interaction.InteractionManager.prototype.onTouchMove;

/**
 * @type {Function}
 */
PIXI.interaction.InteractionManager.prototype.onTouchStart;

/**
 * @type {PIXI.SystemRenderer}
 */
PIXI.interaction.InteractionManager.prototype.renderer;

/**
 * @type {number}
 */
PIXI.interaction.InteractionManager.prototype.resolution;

PIXI.interaction.InteractionManager.prototype.destroy = function () {};

/**
 * @param  {PIXI.Point} point
 * @param  {number} x
 * @param  {number} y
 */
PIXI.interaction.InteractionManager.prototype.mapPositionToPoint = function (point, x, y) {};

/**
 * @param  {PIXI.Point} point
 * @param  {PIXI.Container|PIXI.Sprite|PIXI.extras.TilingSprite} displayObject
 * @param  {Function} func
 * @param  {boolean} hitTest
 * @param  {boolean} interactive
 * @return {boolean}
 */
PIXI.interaction.InteractionManager.prototype.processInteractive = function (point, displayObject, func, hitTest, interactive) {};

/**
 * @param {number} deltaTime
 */
PIXI.interaction.InteractionManager.prototype.update = function (deltaTime) {};

/*---------------------------------------------------------------------------------------------------------
*                                            PIXI.loaders
--------------------------------------------------------------------------------------------------------*/

PIXI.loaders = {};

/**
 * @constructor
 * @param {string=} baseUrl
 * @param {number=} concurrency
 */
PIXI.loaders.ResourceLoader = function (baseUrl, concurrency) {};
/** 
 * @constructor
 * @extends PIXI.loaders.ResourceLoader
 * @param {string=} baseUrl
 * @param {number=} concurrency
 */
PIXI.loaders.Loader = function (baseUrl, concurrency) {};

/** @typedef {{
 *        crossOrigin: (boolean|undefined),
 *        loadType: (string|undefined),
 *        xhrType: (string|undefined)
 *      }}
 */
var PixiLoaderOptions;

/**
 * @param {string=} name
 * @param {string=} url
 * @param {PixiLoaderOptions=} options
 * @param {Function=} callback
 * @return {PIXI.loaders.Loader}
 */
PIXI.loaders.Loader.prototype.add = PIXI.loaders.Loader.prototype.enqueue = function (name, url, options, callback) {};

/**
 * @param {string} eventType
 * @param {Function=} callback
 */
PIXI.loaders.Loader.prototype.once = function (eventType, callback) {};

/**
 * @return {PIXI.loaders.Loader}
 */
PIXI.loaders.Loader.prototype.reset = function () {};

/**
 * @fires start
 * @param {Function=} callback
 * @return {PIXI.loaders.Loader}
 */
PIXI.loaders.Loader.prototype.load = function (callback) {};

/** @type {string} */
PIXI.loaders.Loader.LOAD_TYPE;

/** @type {string} */
PIXI.loaders.Loader.XHR_READY_STATE;

/** @type {string} */
PIXI.loaders.Loader.XHR_RESPONSE_TYPE;


/**
 * All the resources for this loader keyed by name.
 *
 * @member {object<string, Resource>}
 */
PIXI.loaders.resources = {};

/*---------------------------------------------------------------------------------------------------------
*                                            PIXI.mesh
--------------------------------------------------------------------------------------------------------*/

PIXI.mesh = {};

/** 
 * @constructor
 * @extends {PIXI.Container}
 * @param {PIXI.Texture} texture
 * @param {Float32Array=} vertices
 * @param {Float32Array=} uvs
 * @param {Uint16Array=} indices
 * @param {number=} drawMode
 */
PIXI.mesh.Mesh = function (texture, vertices, uvs, indices, drawMode) {};

/**
 * @enum {number}
 */
PIXI.mesh.PIXI.DRAW_MODES = {
    TRIANGLE_MESH: 0,
    TRIANGLES: 1
};

/**
 * @type {number}
 */
PIXI.mesh.Mesh.prototype.alpha;

/**
 * @type {number}
 */
PIXI.mesh.Mesh.prototype.blendMode;

/**
 * @type {boolean}
 */
PIXI.mesh.Mesh.prototype.cacheAsBitmap;

/**
 * @type {number}
 */
PIXI.mesh.Mesh.prototype.canvasPadding;

/**
 * @type {Array.<PIXI.DisplayObject>}
 */
PIXI.mesh.Mesh.prototype.children;

/**
 * @type {boolean}
 */
PIXI.mesh.Mesh.prototype.dirty;

/**
 * @type {number}
 */
PIXI.mesh.Mesh.prototype.drawMode;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.mesh.Mesh.prototype.filterArea;

/**
 * @type {Array.<PIXI.AbstractFilter>}
 */
PIXI.mesh.Mesh.prototype.filters;

/**
 * @type {number}
 */
PIXI.mesh.Mesh.prototype.height;

/**
 * @type {PIXI.Graphics|PIXI.Sprite}
 */
PIXI.mesh.Mesh.prototype.mask;

/**
 * @type {PIXI.Container}
 */
PIXI.mesh.Mesh.prototype.parent;

/**
 * @type {PIXI.Point}
 */
PIXI.mesh.Mesh.prototype.pivot;

/**
 * @type {PIXI.Point}
 */
PIXI.mesh.Mesh.prototype.position;

/**
 * @type {boolean}
 */
PIXI.mesh.Mesh.prototype.renderable;

/**
 * @type {number}
 */
PIXI.mesh.Mesh.prototype.rotation;

/**
 * @type {PIXI.Point}
 */
PIXI.mesh.Mesh.prototype.scale;

/**
 * @type {PIXI.Texture}
 */
PIXI.mesh.Mesh.prototype.texture;

/**
 * @type {Float32Array}
 */
PIXI.mesh.Mesh.prototype.uvs;

/**
 * @type {Float32Array}
 */
PIXI.mesh.Mesh.prototype.vertices;

/**
 * @type {boolean}
 */
PIXI.mesh.Mesh.prototype.visible;

/**
 * @type {number}
 */
PIXI.mesh.Mesh.prototype.width;

/**
 * @type {number}
 */
PIXI.mesh.Mesh.prototype.worldAlpha;

/**
 * @type {PIXI.Matrix}
 */
PIXI.mesh.Mesh.prototype.worldTransform;

/**
 * @type {boolean}
 */
PIXI.mesh.Mesh.prototype.worldVisible;

/**
 * @type {number}
 */
PIXI.mesh.Mesh.prototype.x;

/**
 * @type {number}
 */
PIXI.mesh.Mesh.prototype.y;

/**
 * TODO - to remove? exists in source but not in http://pixijs.github.io/docs/PIXI.mesh.Mesh.html
 * @type {Uint16Array}
 */
PIXI.mesh.Mesh.prototype.indices;

/**
 * @param {PIXI.Point} point
 * @return {boolean}
 */
PIXI.mesh.Mesh.prototype.containsPoint = function (point) {};

/**
 * @param {PIXI.Matrix=} matrix
 * @return {PIXI.Rectangle}
 */
PIXI.mesh.Mesh.prototype.getBounds = function (matrix) {};

/** 
 * @constructor
 * @extends {PIXI.Shader}
 * @param {PIXI.ShaderManager} shaderManager
 */
PIXI.mesh.MeshShader = function (shaderManager) {};

/**
 * @type {string}
 */
PIXI.mesh.MeshShader.prototype.fragmentSrc;

/**
 * @type {string}
 */
PIXI.mesh.MeshShader.prototype.vertexSrc;

/**
 * @constructor
 * @extends {PIXI.mesh.Mesh}
 * @param {PIXI.Texture} texture
 * @param {Array.<PIXI.Point>} points
 *
 */
PIXI.mesh.Rope = function (texture, points) {};

/**
 * @type {number}
 */
PIXI.mesh.Rope.prototype.alpha;

/**
 * @type {number}
 */
PIXI.mesh.Rope.prototype.blendMode;

/**
 * @type {boolean}
 */
PIXI.mesh.Rope.prototype.cacheAsBitmap;

/**
 * @type {number}
 */
PIXI.mesh.Rope.prototype.canvasPadding;

/**
 * @type {Array.<PIXI.DisplayObject>}
 */
PIXI.mesh.Rope.prototype.children;

/**
 * @type {boolean}
 */
PIXI.mesh.Rope.prototype.dirty;

/**
 * @type {number}
 */
PIXI.mesh.Rope.prototype.drawMode;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.mesh.Rope.prototype.filterArea;

/**
 * @type {Array.<PIXI.AbstractFilter>}
 */
PIXI.mesh.Rope.prototype.filters;

/**
 * @type {number}
 */
PIXI.mesh.Rope.prototype.height;

/**
 * @type {PIXI.Graphics|PIXI.Sprite}
 */
PIXI.mesh.Rope.prototype.mask;

/**
 * @type {PIXI.Container}
 */
PIXI.mesh.Rope.prototype.parent;

/**
 * @type {PIXI.Point}
 */
PIXI.mesh.Rope.prototype.pivot;

/**
 * @type {PIXI.Point}
 */
PIXI.mesh.Rope.prototype.position;

/**
 * @type {boolean}
 */
PIXI.mesh.Rope.prototype.renderable;

/**
 * @type {number}
 */
PIXI.mesh.Rope.prototype.rotation;

/**
 * @type {PIXI.Point}
 */
PIXI.mesh.Rope.prototype.scale;

/**
 * @type {PIXI.Texture}
 */
PIXI.mesh.Rope.prototype.texture;

/**
 * @type {Float32Array}
 */
PIXI.mesh.Rope.prototype.uvs;

/**
 * @type {Float32Array}
 */
PIXI.mesh.Rope.prototype.vertices;

/**
 * @type {boolean}
 */
PIXI.mesh.Rope.prototype.visible;

/**
 * @type {number}
 */
PIXI.mesh.Rope.prototype.width;

/**
 * @type {number}
 */
PIXI.mesh.Rope.prototype.worldAlpha;

/**
 * @type {PIXI.Matrix}
 */
PIXI.mesh.Rope.prototype.worldTransform;

/**
 * @type {boolean}
 */
PIXI.mesh.Rope.prototype.worldVisible;

/**
 * @type {number}
 */
PIXI.mesh.Rope.prototype.x;

/**
 * @type {number}
 */
PIXI.mesh.Rope.prototype.y;

PIXI.mesh.Rope.prototype.refresh = function () {};

/*---------------------------------------------------------------------------------------------------------
*                                            PIXI.ticker
--------------------------------------------------------------------------------------------------------*/

PIXI.ticker = {};

/**
 * @constructor
 */
PIXI.ticker.Ticker = function () {};

/**
 * @type {boolean}
 */
PIXI.ticker.Ticker.prototype.autoStart;

/**
 * @type {number}
 */
PIXI.ticker.Ticker.prototype.deltaTime;

/**
 * @type {DOMHighResTimeStamp|number}
 */
PIXI.ticker.Ticker.prototype.elapsedMS;

/**
 * @type {DOMHighResTimeStamp|number}
 */
PIXI.ticker.Ticker.prototype.lastTime;

/**
 * @type {number}
 */
PIXI.ticker.Ticker.prototype.speed;

/**
 * @type {boolean}
 */
PIXI.ticker.Ticker.prototype.started;

/**
 * @type {number}
 */
PIXI.ticker.Ticker.prototype.FPS;

/**
 * @type {number}
 */
PIXI.ticker.Ticker.prototype.minFPS;

/**
 * @param {Function} fn
 * @param {Function=} context
 * @returns {PIXI.ticker.Ticker}
 */
PIXI.ticker.Ticker.prototype.add = function add(fn, context) {};

/**
 * @param {Function} fn
 * @param {Function} context
 * @returns {PIXI.ticker.Ticker}
 */
PIXI.ticker.Ticker.prototype.addOnce = function addOnce(fn, context) {};

/**
 * @param {Function=} fn
 * @param {Function=} context
 * @returns {PIXI.ticker.Ticker}
 */
PIXI.ticker.Ticker.prototype.remove = function remove(fn, context) {};

PIXI.ticker.Ticker.prototype.start = function start() {};

PIXI.ticker.Ticker.prototype.stop = function stop() {};

/**
 * @param {DOMHighResTimeStamp|number} currentTime
 */
PIXI.ticker.Ticker.prototype.update = function update(currentTime) {};

/*---------------------------------------------------------------------------------------------------------
*                                            PIXI
--------------------------------------------------------------------------------------------------------*/

/**
 * @constructor
 * @param {string|Array.<string>} vertexSrc
 * @param {string|Array.<string>} fragmentSrc
 * @param {Object} uniforms
 */
PIXI.AbstractFilter = function (vertexSrc, fragmentSrc, uniforms) {};

/**
 * @type {number}
 */
PIXI.AbstractFilter.prototype.padding;

/**
 * @type {Object}
 */
PIXI.AbstractFilter.prototype.uniforms;

/**
 * @param {PIXI.WebGLRenderer} renderer
 * @param {PIXI.RenderTarget} input
 * @param {PIXI.RenderTarget} output
 * @param {boolean} clear
 */
PIXI.AbstractFilter.prototype.applyFilter = function (renderer, input, output, clear) {};

/**
 * @param {PIXI.WebGLRenderer} renderer
 */
PIXI.AbstractFilter.prototype.getShader = function (renderer) {};

PIXI.AbstractFilter.prototype.syncUniform = function (uniform) {};

/**
 * @constructor
 * @param {Image|HTMLCanvasElement} source
 * @param {number=} scaleMode
 * @param {number=} resolution
 */
PIXI.BaseTexture = function (source, scaleMode, resolution) {};

/**
 * @type {boolean}
 */
PIXI.BaseTexture.prototype.hasLoaded;

/**
 * @type {number}
 */
PIXI.BaseTexture.prototype.height;

/**
 * @type {string}
 */
PIXI.BaseTexture.prototype.imageUrl;

/**
 * @type {boolean}
 */
PIXI.BaseTexture.prototype.isLoading;

/**
 * @type {boolean}
 */
PIXI.BaseTexture.prototype.mipmap;

/**
 * @type {boolean}
 */
PIXI.BaseTexture.prototype.premultipliedAlpha;

/**
 * @type {number}
 */
PIXI.BaseTexture.prototype.realHeight;

/**
 * @type {number}
 */
PIXI.BaseTexture.prototype.realWidth;

/**
 * @type {number}
 */
PIXI.BaseTexture.prototype.resolution;

/**
 * @type {number}
 */
PIXI.BaseTexture.prototype.scaleMode;

/**
 * @type {Image|HTMLCanvasElement}
 */
PIXI.BaseTexture.prototype.source;

/**
 * @type {number}
 */
PIXI.BaseTexture.prototype.width;

/**
 * @param {HTMLCanvasElement} canvas
 * @param {number} scaleMode
 * @return PIXI.BaseTexture
 */
PIXI.BaseTexture.fromCanvas = function (canvas, scaleMode) {};

/**
 * @param {string} imageUrl
 * @param {boolean=} crossorigin
 * @param {number=} scaleMode
 * @return PIXI.BaseTexture
 */
PIXI.BaseTexture.fromImage = function (imageUrl, crossorigin, scaleMode) {};

PIXI.BaseTexture.prototype.destroy = function () {};

PIXI.BaseTexture.prototype.dispose = function () {};

/**
 * @protected
 * @param {Image|HTMLCanvasElement} source
 */
PIXI.BaseTexture.prototype.loadSource = function (source) {};

PIXI.BaseTexture.prototype.update = function () {};

/**
 * @param {string} newSrc
 */
PIXI.BaseTexture.prototype.updateSourceImage = function (newSrc) {};

/*
 * TODO ? - Add events:  'error' and 'loaded' ? - http://pixijs.github.io/docs/PIXI.BaseTexture.html
 */

/**
 * @constructor
 * @extends {PIXI.WebGLManager}
 * @param {PIXI.WebGLRenderer} renderer
 */
PIXI.BlendModeManager = function (renderer) {};

/**
 * @type {number}
 */
PIXI.BlendModeManager.prototype.currentBlendMode;

/**
 * @param {number} blendMode
 */
PIXI.BlendModeManager.prototype.setBlendMode = function (blendMode) {};

/**
 * @constructor
 * @param {number} width
 * @param {number} height
 */
PIXI.CanvasBuffer = function (width, height) {};

/**
 * @type {HTMLCanvasElement}
 */
PIXI.CanvasBuffer.prototype.canvas;

/**
 * @type {CanvasRenderingContext2D}
 */
PIXI.CanvasBuffer.prototype.context;

/**
 * @type {number}
 */
PIXI.CanvasBuffer.prototype.height;

/**
 * @type {number}
 */
PIXI.CanvasBuffer.prototype.width;

PIXI.CanvasBuffer.prototype.destroy = function () {};

/**
 * @param {number} width
 * @param {number} height
 */
PIXI.CanvasBuffer.prototype.resize = function (width, height) {};

PIXI.CanvasGraphics = {};

/**
 * @constructor
 */
PIXI.CanvasMaskManager = function () {};

/**
 * @param {PIXI.WebGLRenderer|PIXI.CanvasRenderer} renderer
 */
PIXI.CanvasMaskManager.prototype.popMask = function (renderer) {};

/**
 * @param {Object} maskData
 * @param {PIXI.WebGLRenderer|PIXI.CanvasRenderer} renderer
 */
PIXI.CanvasMaskManager.prototype.pushMask = function (maskData, renderer) {};

PIXI.CanvasMaskManager.prototype.destroy = function () {};

/**
 * @constructor
 * @extends {PIXI.SystemRenderer}
 * @param {number=} width
 * @param {number=} height
 * @param {SystemRendererOptions=} options
 */
PIXI.CanvasRenderer = function (width, height, options) {};

/**
 * @type {boolean}
 */
PIXI.CanvasRenderer.prototype.autoResize;

/**
 * @type {number}
 */
PIXI.CanvasRenderer.prototype.backgroundColor;

/**
 * @type {Object.<string,*>}
 */
PIXI.CanvasRenderer.prototype.blendModes;

/**
 * @type {boolean}
 */
PIXI.CanvasRenderer.prototype.clearBeforeRender;

/**
 * @type {CanvasRenderingContext2D}
 */
PIXI.CanvasRenderer.prototype.context;

/**
 * @type {number}
 */
PIXI.CanvasRenderer.prototype.height;

/**
 * @type {PIXI.CanvasMaskManager}
 */
PIXI.CanvasRenderer.prototype.maskManager;

/**
 * @type {boolean}
 */
PIXI.CanvasRenderer.prototype.preserveDrawingBuffer;

/**
 * @type {boolean}
 */
PIXI.CanvasRenderer.prototype.refresh;

/**
 * @type {number}
 */
PIXI.CanvasRenderer.prototype.resolution;

/**
 * @type {boolean}
 */
PIXI.CanvasRenderer.prototype.roundPixels;

/**
 * @type {string}
 */
PIXI.CanvasRenderer.prototype.smoothProperty;

/**
 * @type {boolean}
 */
PIXI.CanvasRenderer.prototype.transparentboolean;

/**
 * @type {number}
 */
PIXI.CanvasRenderer.prototype.type;

/**
 * @type {HTMLCanvasElement}
 */
PIXI.CanvasRenderer.prototype.view;

/**
 * @type {number}
 */
PIXI.CanvasRenderer.prototype.width;

/**
 * @param {boolean=} removeView
 */
PIXI.CanvasRenderer.prototype.destroy = function (removeView) {};

/**
 * @param {PIXI.DisplayObject} object
 */
PIXI.CanvasRenderer.prototype.render = function (object) {};

/**
 */
PIXI.CanvasTinter = {};

/** @type {number} */
PIXI.CanvasTinter.cacheStepsPerColorChannel;

/** @type {boolean} */
PIXI.CanvasTinter.canUseMultiply;

/** @type {boolean} */
PIXI.CanvasTinter.convertTintToImage;

/** @type {*} */
PIXI.CanvasTinter.tintMethod;

/**
 * @param {PIXI.Sprite} sprite
 * @param {number} color
 * @return {HTMLCanvasElement}
 */
PIXI.CanvasTinter.getTintedTexture = function (sprite, color) {};

/**
 * @param {number} color
 */
PIXI.CanvasTinter.roundColor = function (color) {};

/**
 * @param {PIXI.Texture} texture
 * @param {number} color
 * @param {HTMLCanvasElement} canvas
 */
PIXI.CanvasTinter.tintWithMultiply = function (texture, color, canvas) {};

/**
 * @param {PIXI.Texture} texture
 * @param {number} color
 * @param {HTMLCanvasElement} canvas
 */
PIXI.CanvasTinter.tintWithOverlay = function (texture, color, canvas) {};

/**
 * @param {PIXI.Texture} texture
 * @param {number} color
 * @param {HTMLCanvasElement} canvas
 */
PIXI.CanvasTinter.tintWithPerPixel = function (texture, color, canvas) {};

/**
 * @constructor
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 */
PIXI.Circle = function (x, y, radius) {};

/**
 * @type {number}
 */
PIXI.Circle.prototype.radius;

/**
 * @type {number}
 */
PIXI.Circle.prototype.type;

/**
 * @type {number}
 */
PIXI.Circle.prototype.x;

/**
 * @type {number}
 */
PIXI.Circle.prototype.y;

/**
 * @return {PIXI.Circle}
 */
PIXI.Circle.prototype.clone = function () {};

/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
PIXI.Circle.prototype.contains = function (x, y) {};

/**
 * @return {PIXI.Rectangle}
 */
PIXI.Circle.prototype.getBounds = function () {};

/**
 * @constructor
 * @extends {PIXI.Shader}
 * @param {PIXI.ShaderManager} shaderManager
 */
PIXI.ComplexPrimitiveShader = function (shaderManager) {};

/**
 * @type {string}
 */
PIXI.ComplexPrimitiveShader.prototype.fragmentSrc;

/**
 * @type {string}
 */
PIXI.ComplexPrimitiveShader.prototype.vertexSrc;

/**
 * @constructor
 * @extends {PIXI.DisplayObject}
 */
PIXI.Container = function () {};

/**
 * @type {number}
 */
PIXI.Container.prototype.alpha;

/**
 * @type {boolean}
 */
PIXI.Container.prototype.cacheAsBitmap;

/**
 * @type {Array.<PIXI.DisplayObject>}
 */
PIXI.Container.prototype.children;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.Container.prototype.filterArea;

/**
 * @type {Array.<PIXI.AbstractFilter>}
 */
PIXI.Container.prototype.filters;

/**
 * @type {number}
 */
PIXI.Container.prototype.height;

/**
 * @type {PIXI.Graphics|PIXI.Sprite}
 */
PIXI.Container.prototype.mask;

/**
 * @type {PIXI.Container}
 */
PIXI.Container.prototype.parent;

/**
 * @type {PIXI.Point}
 */
PIXI.Container.prototype.pivot;

/**
 * @type {PIXI.Point}
 */
PIXI.Container.prototype.position;

/**
 * @type {boolean}
 */
PIXI.Container.prototype.renderable;

/**
 * @type {number}
 */
PIXI.Container.prototype.rotation;

/**
 * @type {PIXI.Point}
 */
PIXI.Container.prototype.scale;

/**
 * @type {boolean}
 */
PIXI.Container.prototype.visible;

/**
 * @type {number}
 */
PIXI.Container.prototype.width;

/**
 * @type {number}
 */
PIXI.Container.prototype.worldAlpha;

/**
 * @type {PIXI.Matrix}
 */
PIXI.Container.prototype.worldTransform;

/**
 * @type {boolean}
 */
PIXI.Container.prototype.worldVisible;

/**
 * @type {number}
 */
PIXI.Container.prototype.x;

/**
 * @type {number}
 */
PIXI.Container.prototype.y;

/**
 * @param {PIXI.DisplayObject} child
 * @return {PIXI.DisplayObject}
 */
PIXI.Container.prototype.addChild = function (child) {};

/**
 * @param {PIXI.DisplayObject} child
 * @param {number} index
 * @return {PIXI.DisplayObject}
 */
PIXI.Container.prototype.addChildAt = function (child, index) {};

/**
 * @param {boolean=} destroyChildren
 */
PIXI.Container.prototype.destroy = function (destroyChildren) {};

/**
 * @param {PIXI.CanvasRenderer|PIXI.WebGLRenderer} renderer
 * @param {number} resolution
 * @param {number} scaleMode
 * @return {PIXI.Texture}
 */
PIXI.Container.prototype.generateTexture = function (renderer, resolution, scaleMode) {};

/**
 * @return {PIXI.Rectangle}
 */
PIXI.Container.prototype.getBounds = function () {};

/**
 * @param {number} index
 * @return {PIXI.DisplayObject}
 */
PIXI.Container.prototype.getChildAt = function (index) {};

/**
 * @param {PIXI.DisplayObject} child
 * @return {number}
 */
PIXI.Container.prototype.getChildIndex = function (child) {};

/**
 * @return {PIXI.Rectangle}
 */
PIXI.Container.prototype.getLocalBounds = function () {};

/**
 * @param {PIXI.DisplayObject} child
 * @return {PIXI.DisplayObject}
 */
PIXI.Container.prototype.removeChild = function (child) {};

/**
 * @param {number} index
 * @return {PIXI.DisplayObject}
 */
PIXI.Container.prototype.removeChildAt = function (index) {};

/**
 * @param {number} beginIndex
 * @param {number} endIndex
 */
PIXI.Container.prototype.removeChildren = function (beginIndex, endIndex) {};

/**
 * @param {PIXI.CanvasRenderer} renderer
 */
PIXI.Container.prototype.renderCanvas = function (renderer) {};

/**
 * @param {PIXI.WebGLRenderer} renderer
 */
PIXI.Container.prototype.renderWebGL = function (renderer) {};

/**
 * @param {PIXI.DisplayObject} child
 * @param {number} index
 */
PIXI.Container.prototype.setChildIndex = function (child, index) {};

/**
 * @param {PIXI.DisplayObject} child
 * @param {PIXI.DisplayObject} child2
 */
PIXI.Container.prototype.swapChildren = function (child, child2) {};

/**
 * @constructor
 * @extends {PIXI.EventEmitter}
 */
PIXI.DisplayObject = function () {};

/**
 * @type {number}
 */
PIXI.DisplayObject.prototype.alpha;

/**
 * @type {boolean}
 */
PIXI.DisplayObject.prototype.cacheAsBitmap;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.DisplayObject.prototype.filterArea;

/**
 * @type {Array.<PIXI.AbstractFilter>}
 */
PIXI.DisplayObject.prototype.filters;

/**
 * @type {PIXI.Graphics|PIXI.Sprite}
 */
PIXI.DisplayObject.prototype.mask;

/**
 * @type {PIXI.Container}
 */
PIXI.DisplayObject.prototype.parent;

/**
 * @type {PIXI.Point}
 */
PIXI.DisplayObject.prototype.pivot;

/**
 * @type {PIXI.Point}
 */
PIXI.DisplayObject.prototype.position;

/**
 * @type {boolean}
 */
PIXI.DisplayObject.prototype.renderable;

/**
 * @type {number}
 */
PIXI.DisplayObject.prototype.rotation;

/**
 * @type {PIXI.Point}
 */
PIXI.DisplayObject.prototype.scale;

/**
 * @type {boolean}
 */
PIXI.DisplayObject.prototype.visible;

/**
 * @type {number}
 */
PIXI.DisplayObject.prototype.worldAlpha;

/**
 * @type {PIXI.Matrix}
 */
PIXI.DisplayObject.prototype.worldTransform;

/**
 * @type {boolean}
 */
PIXI.DisplayObject.prototype.worldVisible;

/**
 * @type {number}
 */
PIXI.DisplayObject.prototype.x;

/**
 * @type {number}
 */
PIXI.DisplayObject.prototype.y;

PIXI.DisplayObject.prototype.destroy = function () {};

/**
 * @param {PIXI.CanvasRenderer|PIXI.WebGLRenderer} renderer
 * @param {number} scaleMode
 * @param {number=} resolution
 * @return {PIXI.Texture}
 */
PIXI.DisplayObject.prototype.generateTexture = function (renderer, scaleMode, resolution) {};

/**
 * @param {PIXI.Matrix=} matrix
 * @return {PIXI.Rectangle}
 */
PIXI.DisplayObject.prototype.getBounds = function (matrix) {};

/**
 * @return {PIXI.Rectangle}
 */
PIXI.DisplayObject.prototype.getLocalBounds = function () {};
/**
* @param {PIXI.Point=} point the point to write the global value to. If null a new point will be returned
* @return {PIXI.Point}
*/
PIXI.DisplayObject.prototype.getGlobalPosition = function (point) {};
/**
 * @param {PIXI.Container} container
 * @return {PIXI.Container}
 */
PIXI.DisplayObject.prototype.setParent = function (container) {};

/**
 * @param {PIXI.Point} position
 * @return {PIXI.Point}
 */
PIXI.DisplayObject.prototype.toGlobal = function (position) {};

/**
 * @param {PIXI.Point} position
 * @param {PIXI.DisplayObject} from
 * @return {PIXI.Point}
 */
PIXI.DisplayObject.prototype.toLocal = function (position, from) {};

/**
 * @constructor
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 */
PIXI.Ellipse = function (x, y, width, height) {};

/**
 * @type {number}
 */
PIXI.Ellipse.prototype.height;

/**
 * @type {number}
 */
PIXI.Ellipse.prototype.type;

/**
 * @type {number}
 */
PIXI.Ellipse.prototype.width;

/**
 * @type {number}
 */
PIXI.Ellipse.prototype.x;

/**
 * @type {number}
 */
PIXI.Ellipse.prototype.y;

/**
 * @return {PIXI.Ellipse}
 */
PIXI.Ellipse.prototype.clone = function () {};

/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
PIXI.Ellipse.prototype.contains = function (x, y) {};

/**
 * @return {PIXI.Rectangle}
 */
PIXI.Ellipse.prototype.getBounds = function () {};

/**
 * @constructor
 * @extends {PIXI.WebGLManager}
 * @param {PIXI.WebGLRenderer} renderer
 */
PIXI.FilterManager = function (renderer) {};

/**
 * @type {PIXI.Rectangle}
 */
PIXI.FilterManager.prototype.currentFrame;

/**
 * @type {Array.<Object>}
 */
PIXI.FilterManager.prototype.filterStack;

/**
 * @type {PIXI.WebGLRenderer}
 */
PIXI.FilterManager.prototype.renderer;

/**
 * @type {Array<PIXI.RenderTarget>}
 */
PIXI.FilterManager.prototype.texturePool;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.FilterManager.prototype.textureSize;

PIXI.FilterManager.prototype.destroy = function () {};

/**
 * @param {boolean} clear
 * @return {PIXI.RenderTarget}
 */
PIXI.FilterManager.prototype.getRenderTarget = function (clear) {};

PIXI.FilterManager.prototype.onContextChange = function () {};

PIXI.FilterManager.prototype.popFilter = function () {};

/**
 * @param {PIXI.DisplayObject} target
 * @param {Array<PIXI.AbstractFilter>} filters
 */
PIXI.FilterManager.prototype.pushFilter = function (target, filters) {};

/**
 * @param {*} filterStack
 */
PIXI.FilterManager.prototype.setFilterStack = function (filterStack) {};

/**
 * TODO - to remove? - exists in pixi source but not in http://pixijs.github.io/docs/PIXI.FilterManager.html
 * @param {PIXI.RenderTarget} renderTarget
 */
PIXI.FilterManager.prototype.returnRenderTarget = function (renderTarget) {};

/**
 * TODO - to remove? - exists in pixi source but not in http://pixijs.github.io/docs/PIXI.FilterManager.html
 * @param {PIXI.Shader} shader
 * @param {PIXI.RenderTarget} inputTarget
 * @param {PIXI.RenderTarget} outputTarget
 * @param {boolean} clear
 */
PIXI.FilterManager.prototype.applyFilter = function (shader, inputTarget, outputTarget, clear) {};

/**
 * TODO - to remove? - exists in pixi source but not in http://pixijs.github.io/docs/PIXI.FilterManager.html
 * @param {PIXI.Rectangle} filterArea
 * @param {PIXI.Sprite} sprite
 * @param {PIXI.Matrix} outputMatrix
 */
PIXI.FilterManager.prototype.calculateMappedMatrix = function (filterArea, sprite, outputMatrix) {};

/**
 * TODO - to remove? - exists in pixi source but not in http://pixijs.github.io/docs/PIXI.FilterManager.html
 * @param {PIXI.Rectangle} filterArea
 */
PIXI.FilterManager.prototype.capFilterArea = function (filterArea) {};

/**
 * TODO - to remove? - exists in pixi source but not in http://pixijs.github.io/docs/PIXI.FilterManager.html
 * @param {number} width
 * @param {number} height
 */
PIXI.FilterManager.prototype.resize = function (width, height) {};

/**
 * @constructor
 * @extends {PIXI.AbstractFilter}
 */
PIXI.FXAAFilter = function () {};

/**
 * @type {number}
 */
PIXI.FXAAFilter.prototype.padding;

/**
 * @type {Object}
 */
PIXI.FXAAFilter.prototype.uniforms;

/**
 * @param {PIXI.WebGLRenderer} renderer
 * @param {PIXI.RenderTarget} input
 * @param {PIXI.RenderTarget} output
 */
PIXI.FXAAFilter.prototype.applyFilter = function (renderer, input, output) {};

/**
 * @constructor
 * @extends {PIXI.Container}
 */
PIXI.Graphics = function () {};

/**
 * @type {number}
 */
PIXI.Graphics.prototype.alpha;

/**
 * @type {number}
 */
PIXI.Graphics.prototype.blendMode;

/**
 * @type {number}
 */
PIXI.Graphics.prototype.boundsPadding;

/**
 * @type {boolean}
 */
PIXI.Graphics.prototype.cacheAsBitmap;

/**
 * @type {number}
 */
PIXI.Graphics.prototype.fillAlpha;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.Graphics.prototype.filterArea;

/**
 * @type {Array.<PIXI.AbstractFilter>}
 */
PIXI.Graphics.prototype.filters;

/**
 * @type {number}
 */
PIXI.Graphics.prototype.height;

/**
 * @type {boolean}
 */
PIXI.Graphics.prototype.isMask;

/**
 * @type {string}
 */
PIXI.Graphics.prototype.lineColor;

/**
 * @type {number}
 */
PIXI.Graphics.prototype.lineWidth;

/**
 * @type {PIXI.Graphics|PIXI.Sprite}
 */
PIXI.Graphics.prototype.mask;

/**
 * @type {PIXI.Container}
 */
PIXI.Graphics.prototype.parent;

/**
 * @type {PIXI.Point}
 */
PIXI.Graphics.prototype.pivot;

/**
 * @type {PIXI.Point}
 */
PIXI.Graphics.prototype.position;

/**
 * @type {boolean}
 */
PIXI.Graphics.prototype.renderable;

/**
 * @type {number}
 */
PIXI.Graphics.prototype.rotation;

/**
 * @type {PIXI.Point}
 */
PIXI.Graphics.prototype.scale;

/**
 * @type {number}
 */
PIXI.Graphics.prototype.tint;

/**
 * @type {boolean}
 */
PIXI.Graphics.prototype.visible;

/**
 * @type {number}
 */
PIXI.Graphics.prototype.width;

/**
 * @type {number}
 */
PIXI.Graphics.prototype.worldAlpha;

/**
 * @type {PIXI.Matrix}
 */
PIXI.Graphics.prototype.worldTransform;

/**
 * @type {boolean}
 */
PIXI.Graphics.prototype.worldVisible;

/**
 * @type {number}
 */
PIXI.Graphics.prototype.x;

/**
 * @type {number}
 */
PIXI.Graphics.prototype.y;

/**
 * @param {number} cx
 * @param {number} cy
 * @param {number} radius
 * @param {number} startAngle
 * @param {number} endAngle
 * @param {boolean=} anticlockwise
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.arc = function (cx, cy, radius, startAngle, endAngle, anticlockwise) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} radius
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.arcTo = function (x1, y1, x2, y2, radius) {};

/**
 * @param {number} color
 * @param {number} alpha
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.beginFill = function (color, alpha) {};

/**
 * @param {number} cpX
 * @param {number} cpY
 * @param {number} cpX2
 * @param {number} cpY2
 * @param {number} toX
 * @param {number} toY
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.bezierCurveTo = function (cpX, cpY, cpX2, cpY2, toX, toY) {};

/**
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.clear = function () {};

/**
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.clone = function () {};

/**
 * @param {PIXI.Point} point
 * @return {boolean}
 */
PIXI.Graphics.prototype.containsPoint = function (point) {};

PIXI.Graphics.prototype.destroy = function () {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.drawCircle = function (x, y, radius) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.drawEllipse = function (x, y, width, height) {};

/**
 * @param {Array.<number>|Array.<PIXI.Point>} path
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.drawPolygon = function (path) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.drawRect = function (x, y, width, height) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {number} radius
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.drawRoundedRect = function (x, y, width, height, radius) {};

/**
 * @param {PIXI.Circle|PIXI.Rectangle|PIXI.Ellipse|PIXI.Polygon} shape
 * @return {PIXI.GraphicsData}
 */
PIXI.Graphics.prototype.drawShape = function (shape) {};

/**
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.endFill = function () {};

/**
 * @param {number} resolution
 * @param {number} scaleMode
 * @return {PIXI.Texture}
 */
PIXI.Graphics.prototype.generateTexture = function (resolution, scaleMode) {};

/**
 * @param {PIXI.Matrix=} matrix
 * @return {PIXI.Rectangle}
 */
PIXI.Graphics.prototype.getBounds = function (matrix) {};

/**
 * @param {number} lineWidth
 * @param {number} color
 * @param {number} alpha
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.lineStyle = function (lineWidth, color, alpha) {};
/**
 * @param {number} x
 * @param {number} y
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.lineTo = function (x, y) {};
/**
 * @param {number} x
 * @param {number} y
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.moveTo = function (x, y) {};
/**
 * @param {number} cpX
 * @param {number} cpY
 * @param {number} toX
 * @param {number} toY
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.quadraticCurveTo = function (cpX, cpY, toX, toY) {};

PIXI.Graphics.prototype.updateLocalBounds = function () {};

/**
 * @constructor
 * @param {number} lineWidth
 * @param {number} lineColor
 * @param {number} lineAlpha
 * @param {number} fillColor
 * @param {number} fillAlpha
 * @param {boolean} fill
 * @param {PIXI.Circle|PIXI.Rectangle|PIXI.Ellipse|PIXI.Polygon} shape
 */
PIXI.GraphicsData = function (lineWidth, lineColor, lineAlpha, fillColor, fillAlpha, fill, shape) {};

/**
 * @type {number}
 */
PIXI.GraphicsData.prototype.fillColor;

/**
 * @type {number}
 */
PIXI.GraphicsData.prototype.fillAlpha;

/**
 * @type {boolean}
 */
PIXI.GraphicsData.prototype.fill;

/**
 * @type {number}
 */
PIXI.GraphicsData.prototype.lineWidth;

/**
 * @type {number}
 */
PIXI.GraphicsData.prototype.lineColor;

/**
 * @type {number}
 */
PIXI.GraphicsData.prototype.lineAlpha;

/**
 * @type {PIXI.Circle|PIXI.Rectangle|PIXI.Ellipse|PIXI.Polygon}
 */
PIXI.GraphicsData.prototype.shape;

/**
 * @type {number}
 */
PIXI.GraphicsData.prototype.type;

/**
 * @return {PIXI.GraphicsData}
 */
PIXI.GraphicsData.prototype.clone = function () {};

PIXI.GraphicsData.prototype.destroy = function () {};

/**
 * @constructor
 * @param {PIXI.WebGLRenderer} renderer
 */
PIXI.MaskManager = function (renderer) {};

/**
 * @param {PIXI.RenderTarget} target
 * @param {Array.<*>} maskData
 */
PIXI.MaskManager.prototype.popMask = function (target, maskData) {};

PIXI.MaskManager.prototype.popSpriteMask = function () {};
/**
 * @param {PIXI.RenderTarget} target
 * @param {Array.<*>} maskData
 */
PIXI.MaskManager.prototype.popStencilMask = function (target, maskData) {};

/**
 * @param {PIXI.RenderTarget} target
 * @param {Array.<*>} maskData
 */
PIXI.MaskManager.prototype.pushMask = function (target, maskData) {};

/**
 * @param {PIXI.RenderTarget} target
 * @param {Array.<*>} maskData
 */
PIXI.MaskManager.prototype.pushSpriteMask = function (target, maskData) {};

/**
 * @param {PIXI.RenderTarget} target
 * @param {Array.<*>} maskData
 */
PIXI.MaskManager.prototype.pushStencilMask = function (target, maskData) {};

/**
 * @constructor
 */
PIXI.Matrix = function () {};

/**
 * @type {PIXI.Matrix}
 * @const
 */
PIXI.Matrix.IDENTITY;

/**
 * @type {PIXI.Matrix}
 * @const
 */
PIXI.Matrix.TEMP_MATRIX;

/**
 * @type {number}
 */
PIXI.Matrix.prototype.a;

/**
 * @type {number}
 */
PIXI.Matrix.prototype.b;

/**
 * @type {number}
 */
PIXI.Matrix.prototype.c;

/**
 * @type {number}
 */
PIXI.Matrix.prototype.d;

/**
 * @type {number}
 */
PIXI.Matrix.prototype.tx;

/**
 * @type {number}
 */
PIXI.Matrix.prototype.ty;

/**
 * @param {PIXI.Matrix} matrix
 * @return {PIXI.Matrix}
 */
PIXI.Matrix.prototype.append = function (matrix) {};

/**
 * @param {PIXI.Point} pos
 * @param {PIXI.Point} [newPos]
 * @return {PIXI.Point}
 */
PIXI.Matrix.prototype.apply = function (pos, newPos) {};

/**
 * @param {PIXI.Point} pos
 * @param {PIXI.Point} [newPos]
 * @return {PIXI.Point}
 */
PIXI.Matrix.prototype.applyInverse = function (pos, newPos) {};

/**
 * @return {PIXI.Matrix}
 */
PIXI.Matrix.prototype.clone = function () {};

/**
 * @return {PIXI.Matrix}
 */
PIXI.Matrix.prototype.copy = function (matrix) {};

/**
 * @param {Array.<number>} array
 */
PIXI.Matrix.prototype.fromArray = function (array) {};

/**
 * @return {PIXI.Matrix}
 */
PIXI.Matrix.prototype.identity = function () {};

/**
 * @return {PIXI.Matrix}
 */
PIXI.Matrix.prototype.invert = function () {};

/**
 * @param {PIXI.Matrix} matrix
 * @return {PIXI.Matrix}
 */
PIXI.Matrix.prototype.prepend = function (matrix) {};

/**
 * @param {number} angle
 * @return {PIXI.Matrix}
 */
PIXI.Matrix.prototype.rotate = function (angle) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {PIXI.Matrix}
 */
PIXI.Matrix.prototype.scale = function (x, y) {};

/**
 * @param {boolean} transpose
 * @param {*} out
 * @return {Array.<number>}
 */
PIXI.Matrix.prototype.toArray = function (transpose, out) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {PIXI.Matrix}
 */
PIXI.Matrix.prototype.translate = function (x, y) {};

/**
 * @constructor
 * @extends {PIXI.WebGLManager}
 * @param {PIXI.WebGLRenderer} renderer
 */
PIXI.ObjectRenderer = function (renderer) {};

/**
 * @type {PIXI.WebGLRenderer}
 */
PIXI.ObjectRenderer.prototype.renderer;


PIXI.ObjectRenderer.prototype.flush = function () {};

/**
 * @param {PIXI.DisplayObject} object
 */
PIXI.ObjectRenderer.prototype.render = function (object) {};

PIXI.ObjectRenderer.prototype.start = function () {};

PIXI.ObjectRenderer.prototype.stop = function () {};

/** @typedef {{
 *        scale: (boolean|undefined),
 *        position: (boolean|undefined),
 *        rotation: (boolean|undefined),
 *        uvs: (boolean|undefined),
 *        alpha: (boolean|undefined)
 *      }}
 */
var ParticleContainerProperties;

/**
 * @constructor
 * @extends {PIXI.Container}
 * @param {number=} maxSize
 * @param {ParticleContainerProperties=} properties
 * @param {number=} batchSize
 */
PIXI.ParticleContainer = function (maxSize, properties, batchSize) {};

/**
 * @type {number}
 */
PIXI.ParticleContainer.prototype.alpha;

/**
 * @type {number}
 */
PIXI.ParticleContainer.prototype.blendMode;

/**
 * @type {boolean}
 */
PIXI.ParticleContainer.prototype.cacheAsBitmap;

/**
 * @type {Array.<PIXI.DisplayObject>}
 */
PIXI.ParticleContainer.prototype.children;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.ParticleContainer.prototype.filterArea;

/**
 * @type {Array.<PIXI.AbstractFilter>}
 */
PIXI.ParticleContainer.prototype.filters;

/**
 * @type {number}
 */
PIXI.ParticleContainer.prototype.height;

/**
 * @type {boolean}
 */
PIXI.ParticleContainer.prototype.interactiveChildren;

/**
 * @type {PIXI.Graphics|PIXI.Sprite}
 */
PIXI.ParticleContainer.prototype.mask;

/**
 * @type {PIXI.Container}
 */
PIXI.ParticleContainer.prototype.parent;

/**
 * @type {PIXI.Point}
 */
PIXI.ParticleContainer.prototype.pivot;

/**
 * @type {PIXI.Point}
 */
PIXI.ParticleContainer.prototype.position;

/**
 * @type {boolean}
 */
PIXI.ParticleContainer.prototype.renderable;

/**
 * @type {number}
 */
PIXI.ParticleContainer.prototype.rotation;

/**
 * @type {boolean}
 */
PIXI.ParticleContainer.prototype.roundPixels;

/**
 * @type {PIXI.Point}
 */
PIXI.ParticleContainer.prototype.scale;

/**
 * @type {boolean}
 */
PIXI.ParticleContainer.prototype.visible;

/**
 * @type {number}
 */
PIXI.ParticleContainer.prototype.width;

/**
 * @type {number}
 */
PIXI.ParticleContainer.prototype.worldAlpha;

/**
 * @type {PIXI.Matrix}
 */
PIXI.ParticleContainer.prototype.worldTransform;

/**
 * @type {boolean}
 */
PIXI.ParticleContainer.prototype.worldVisible;

/**
 * @type {number}
 */
PIXI.ParticleContainer.prototype.x;

/**
 * @type {number}
 */
PIXI.ParticleContainer.prototype.y;

/**
 * @param {boolean=} destroyChildren
 */
PIXI.ParticleContainer.prototype.destroy = function (destroyChildren) {};

/**
 * @param {Object} properties
 */
PIXI.ParticleContainer.prototype.setProperties = function (properties) {};

/**
 * @constructor
 * @extends {PIXI.TextureShader}
 * @param {PIXI.ShaderManager} shaderManager
 */
PIXI.ParticleShader = function (shaderManager) {};

/**
 * @type {string}
 */
PIXI.ParticleShader.prototype.fragmentSrc;

/**
 * @type {string}
 */
PIXI.ParticleShader.prototype.vertexSrc;

/**
 * @constructor
 * @param {number=} x
 * @param {number=} y
 */
PIXI.Point = function (x, y) {};

/**
 * @type {number}
 */
PIXI.Point.prototype.x;

/**
 * @type {number}
 */
PIXI.Point.prototype.y;

/**
 * @return {PIXI.Point}
 */
PIXI.Point.prototype.clone = function () {};

/**
 * @param {PIXI.Point} p
 */
PIXI.Point.prototype.copy = function (p) {};

/**
 * @param {PIXI.Point} p
 * @returns {boolean}
 */
PIXI.Point.prototype.equals = function (p) {};

/**
 * @param {number=} x
 * @param {number=} y
 */
PIXI.Point.prototype.set = function (x, y) {};

/**
 * @constructor
 * @param {Array<PIXI.Point>|Array<number>|PIXI.Point|number} points
 */
PIXI.Polygon = function (points) {};

/**
 * @type {Array.<number>}
 */
PIXI.Polygon.prototype.points;

/**
 * @type {number}
 */
PIXI.Polygon.prototype.type;

/**
 * @return {PIXI.Polygon}
 */
PIXI.Polygon.prototype.clone = function () {};

/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
PIXI.Polygon.prototype.contains = function (x, y) {};

/**
 * @constructor
 * @extends {PIXI.Shader}
 * @param {PIXI.ShaderManager} shaderManager
 */
PIXI.PrimitiveShader = function (shaderManager) {};

/**
 * @type {string}
 */
PIXI.PrimitiveShader.prototype.fragmentSrc;

/**
 * @type {string}
 */
PIXI.PrimitiveShader.prototype.vertexSrc;

/**
 * @constructor
 * @param {WebGLRenderingContext} gl
 */
PIXI.Quad = function (gl) {};

/**
 * @type {Float32Array}
 */
PIXI.Quad.prototype.colors;

/**
 * @type {Float32Array}
 */
PIXI.Quad.prototype.uvs;

/**
 * @type {Float32Array}
 */
PIXI.Quad.prototype.vertices;

/**
 * @param {PIXI.Rectangle} rect
 * @param {PIXI.Rectangle} rect2
 */
PIXI.Quad.prototype.map = function (rect, rect2) {};

PIXI.Quad.prototype.upload = function () {};

/**
 * @constructor
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 */
PIXI.Rectangle = function (x, y, width, height) {};

/**
 * @const
 */
PIXI.Rectangle.EMPTY;

/**
 * @type {number}
 */
PIXI.Rectangle.prototype.height;

/**
 * @type {number}
 */
PIXI.Rectangle.prototype.type;

/**
 * @type {number}
 */
PIXI.Rectangle.prototype.width;

/**
 * @type {number}
 */
PIXI.Rectangle.prototype.x;

/**
 * @type {number}
 */
PIXI.Rectangle.prototype.y;

/**
 * @return {PIXI.Rectangle} a copy of the rectangle
 */
PIXI.Rectangle.prototype.clone = function () {};

/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
PIXI.Rectangle.prototype.contains = function (x, y) {};

/**
 * @constructor
 * @param {WebGLRenderingContext} gl
 * @param {number} width
 * @param {number} height
 * @param {number} scaleMode
 * @param {number} resolution
 * @param {boolean} root
 */
PIXI.RenderTarget = function (gl, width, height, scaleMode, resolution, root) {};

/**
 * @type {Array.<Object>}
 */
PIXI.RenderTarget.prototype.filterStack;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.RenderTarget.prototype.frame;



/**
 * @type {WebGLFrameBuffer}
 */
PIXI.RenderTarget.prototype.frameBuffer;

/**
 * @type {WebGLRenderingContext}
 */
PIXI.RenderTarget.prototype.gl;

/**
 * @type {PIXI.Matrix}
 */
PIXI.RenderTarget.prototype.projectionMatrix;

/**
 * @type {number}
 */
PIXI.RenderTarget.prototype.resolution;

/**
 * @type {boolean}
 */
PIXI.RenderTarget.prototype.root;

/**
 * @type {number}
 */
PIXI.RenderTarget.prototype.scaleMode;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.RenderTarget.prototype.size;

/**
 * @type {WebGLRenderBuffer}
 */
PIXI.RenderTarget.prototype.stencilBuffer;

/**
 * @type {PIXI.StencilMaskStack}
 */
PIXI.RenderTarget.prototype.stencilMaskStack;

/**
 * @type {PIXI.Texture}
 */
PIXI.RenderTarget.prototype.texture;

/**
 * @type {PIXI.Matrix}
 */
PIXI.RenderTarget.prototype.transform;

PIXI.RenderTarget.prototype.activate = function () {};

PIXI.RenderTarget.prototype.attachStencilBuffer = function () {};

PIXI.RenderTarget.prototype.calculateProjection = function (projectionFrame) {};

/**
 * @param {boolean=} bind
 */
PIXI.RenderTarget.prototype.clear = function (bind) {};

PIXI.RenderTarget.prototype.destroy = function () {};

/**
 * @param {Number} width
 * @param {Number} height
 */
PIXI.RenderTarget.prototype.resize = function (width, height) {};


/**
 * @constructor
 * @extends {PIXI.Texture}
 * @param {PIXI.CanvasRenderer|PIXI.WebGLRenderer} renderer
 * @param {number=} width
 * @param {number=} height
 * @param {number=} scaleMode
 * @param {number=} resolution
 */
PIXI.RenderTexture = function (renderer, width, height, scaleMode, resolution) {};

/**
 * @type {PIXI.BaseTexture}
 */
PIXI.RenderTexture.prototype.baseTexture;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.RenderTexture.prototype.crop;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.RenderTexture.prototype.frame;

/**
 * @type {number}
 */
PIXI.RenderTexture.prototype.height;

/**
 * @type {boolean}
 */
PIXI.RenderTexture.prototype.noFrame;

/**
 * @type {PIXI.CanvasRenderer|PIXI.WebGLRenderer}
 */
PIXI.RenderTexture.prototype.renderer;

/**
 * @type {boolean}
 */
PIXI.RenderTexture.prototype.requiresUpdate;

/**
 * @type {number}
 */
PIXI.RenderTexture.prototype.resolution;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.RenderTexture.prototype.trim;

/**
 * @type {boolean}
 */
PIXI.RenderTexture.prototype.valid;

/**
 * @type {number}
 */
PIXI.RenderTexture.prototype.width;

PIXI.RenderTexture.prototype.clear = function () {};

/**
 * @param {boolean=} destroyBase
 */
PIXI.RenderTexture.prototype.destroy = function (destroyBase) {};

/**
 * @return {string}
 */
PIXI.RenderTexture.prototype.getBase64 = function () {};

/**
 * @return {HTMLCanvasElement}
 */
PIXI.RenderTexture.prototype.getCanvas = function () {};

/**
 * @return {Image}
 */
PIXI.RenderTexture.prototype.getImage = function () {};

/**
 * @param {number} x
 * @param {number} y
 * @return {Uint8ClampedArray}
 */
PIXI.RenderTexture.prototype.getPixel = function (x, y) {};

/**
 * @return {Uint8ClampedArray}
 */
PIXI.RenderTexture.prototype.getPixels = function () {};

/**
 * @param {PIXI.DisplayObject} displayObject
 * @param {PIXI.Matrix=} matrix
 * @param {boolean=} clear
 * @param {boolean=} updateTransform
 */
PIXI.RenderTexture.prototype.render = function (displayObject, matrix, clear, updateTransform) {};

/**
 * @param {number} width
 * @param {number} height
 * @param {boolean} updateBase
 */
PIXI.RenderTexture.prototype.resize = function (width, height, updateBase) {};

/**
 * @constructor
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {number} radius
 */
PIXI.RoundedRectangle = function (x, y, width, height, radius) {};

/**
 * @type {number}
 */
PIXI.RoundedRectangle.prototype.height;

/**
 * @type {number}
 */
PIXI.RoundedRectangle.prototype.radius;

/**
 * @type {number}
 */
PIXI.RoundedRectangle.prototype.type;

/**
 * @type {number}
 */
PIXI.RoundedRectangle.prototype.width;

/**
 * @type {number}
 */
PIXI.RoundedRectangle.prototype.x;

/**
 * @type {number}
 */
PIXI.RoundedRectangle.prototype.y;

/**
 * @return {PIXI.RoundedRectangle}
 */
PIXI.RoundedRectangle.prototype.clone = function () {};

/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
PIXI.RoundedRectangle.prototype.contains = function (x, y) {};

/**
 * @constructor
 * @param {PIXI.ShaderManager} shaderManager
 * @param {string=} vertexSrc
 * @param {string=} fragmentSrc
 * @param {Object=} uniforms
 * @param {Object=} attributes
 */
PIXI.Shader = function (shaderManager, vertexSrc, fragmentSrc, uniforms, attributes) {};

/**
 * @type {string}
 */
PIXI.Shader.prototype.fragmentSrc;

/**
 * @type {WebGLRenderingContext}
 */
PIXI.Shader.prototype.gl;

/**
 * @type {WebGLProgram}
 */
PIXI.Shader.prototype.program;

/**
 * @type {number}
 */
PIXI.Shader.prototype.uid;

/**
 * @type {PIXI.ShaderManager}
 */
PIXI.Shader.prototype.shaderManager;

/**
 * @type {string}
 */
PIXI.Shader.prototype.vertexSrc;

PIXI.Shader.prototype.destroy = function () {};

PIXI.Shader.prototype.initSampler2D = function () {};

PIXI.Shader.prototype.syncUniforms = function () {};

/**
 * @param {Object} uniform
 */
PIXI.Shader.prototype.syncUniform = function (uniform) {};

/**
 * TODO - to remove? in pixi source but not in http://pixijs.github.io/docs/PIXI.Shader.html
 */
PIXI.Shader.prototype.init = function () {};

/**
 * TODO - to remove? in pixi source but not in http://pixijs.github.io/docs/PIXI.Shader.html
 * @param {string} keys
 */
PIXI.Shader.prototype.cacheUniformLocations = function (keys) {};

/**
 * TODO - to remove? in pixi source but not in http://pixijs.github.io/docs/PIXI.Shader.html
 * @param {string} keys
 */
PIXI.Shader.prototype.cacheAttributeLocations = function (keys) {};

/**
 * TODO - to remove? in pixi source but not in http://pixijs.github.io/docs/PIXI.Shader.html
 * @return {*}
 */
PIXI.Shader.prototype.compile = function () {};

/**
 * @constructor
 * @extends {PIXI.WebGLManager}
 * @param {PIXI.WebGLRenderer} renderer
 */
PIXI.ShaderManager = function (renderer) {};

/**
 * @type {Array.<*>}
 */
PIXI.ShaderManager.prototype.attribState;

/**
 * @type {number}
 */
PIXI.ShaderManager.prototype.maxAttibs;

/**
 * @type {PIXI.WebGLRenderer}
 */
PIXI.ShaderManager.prototype.renderer;

/**
 * @type {Array.<*>}
 */
PIXI.ShaderManager.prototype.stack;

/**
 * @type {Array.<*>}
 */
PIXI.ShaderManager.prototype.tempAttribState;

PIXI.ShaderManager.prototype.destroy = function () {};

PIXI.ShaderManager.prototype.onContextChange = function () {};

/**
 * @param {Array.<*>} attribs
 */
PIXI.ShaderManager.prototype.setAttribs = function (attribs) {};

/**
 * @param {PIXI.Shader} shader
 */
PIXI.ShaderManager.prototype.setShader = function (shader) {};

/**
 * @constructor
 * @extends {PIXI.Container}
 * @param {PIXI.Texture=} texture Defaults to PIXI.Texture.EMPTY
 */
PIXI.Sprite = function (texture) {};

/**
 * @type {number}
 */
PIXI.Sprite.prototype.alpha;

/**
 * @type {PIXI.Point}
 */
PIXI.Sprite.prototype.anchor;

/**
 * @type {number}
 */
PIXI.Sprite.prototype.blendMode;

/**
 * @type {boolean}
 */
PIXI.Sprite.prototype.cacheAsBitmap;

/**
 * @type {number}
 */
PIXI.Sprite.prototype.cachedTint;

/**
 * @type {Array.<PIXI.DisplayObject>}
 */
PIXI.Sprite.prototype.children;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.Sprite.prototype.filterArea;

/**
 * @type {Array.<PIXI.AbstractFilter>}
 */
PIXI.Sprite.prototype.filters;

/**
 * @type {number}
 */
PIXI.Sprite.prototype.height;

/**
 * @type {PIXI.Graphics|PIXI.Sprite}
 */
PIXI.Sprite.prototype.mask;

/**
 * @type {PIXI.Container}
 */
PIXI.Sprite.prototype.parent;

/**
 * @type {PIXI.Point}
 */
PIXI.Sprite.prototype.pivot;

/**
 * @type {PIXI.Point}
 */
PIXI.Sprite.prototype.position;

/**
 * @type {boolean}
 */
PIXI.Sprite.prototype.renderable;

/**
 * @type {number}
 */
PIXI.Sprite.prototype.rotation;

/**
 * @type {PIXI.Point}
 */
PIXI.Sprite.prototype.scale;

/**
 * @type {PIXI.AbstractFilter|PIXI.Shader}
 */
PIXI.Sprite.prototype.shader;

/**
 * @type {PIXI.Texture}
 */
PIXI.Sprite.prototype.texture;

/**
 * @type {number}
 */
PIXI.Sprite.prototype.tint;

/**
 * @type {boolean}
 */
PIXI.Sprite.prototype.visible;

/**
 * @type {number}
 */
PIXI.Sprite.prototype.width;

/**
 * @type {number}
 */
PIXI.Sprite.prototype.worldAlpha;

/**
 * @type {PIXI.Matrix}
 */
PIXI.Sprite.prototype.worldTransform;

/**
 * @type {boolean}
 */
PIXI.Sprite.prototype.worldVisible;

/**
 * @type {number}
 */
PIXI.Sprite.prototype.x;

/**
 * @type {number}
 */
PIXI.Sprite.prototype.y;

/**
 * @param {string} frameId
 * @return {PIXI.Sprite}
 */
PIXI.Sprite.fromFrame = function (frameId) {};

/**
 * @param {string} imageId
 * @param {boolean=} crossorigin
 * @param {number=} scaleMode
 * @return {PIXI.Sprite}
 */
PIXI.Sprite.fromImage = function (imageId, crossorigin, scaleMode) {};

/**
 * @param {PIXI.Point} point
 * @return {boolean}
 */
PIXI.Sprite.prototype.containsPoint = function (point) {};

/**
 * @param {boolean=} destroyTexture
 * @param {boolean=} destroyBaseTexture
 */
PIXI.Sprite.prototype.destroy = function (destroyTexture, destroyBaseTexture) {};

/**
 * @param {PIXI.Matrix=} matrix
 * @return {PIXI.Rectangle} the framing rectangle
 */
PIXI.Sprite.prototype.getBounds = function (matrix) {};

PIXI.Sprite.prototype.getLocalBounds = function () {};

/**
 * @constructor
 * @extends {PIXI.AbstractFilter}
 * @param {PIXI.Sprite} sprite
 */
PIXI.SpriteMaskFilter = function (sprite) {};

/**
 * @type {PIXI.Texture}
 */
PIXI.SpriteMaskFilter.prototype.map;

/**
 * @type {PIXI.Point}
 */
PIXI.SpriteMaskFilter.prototype.offset;

/**
 * @type {number}
 */
PIXI.SpriteMaskFilter.prototype.padding;

/**
 * @type {Object}
 */
PIXI.SpriteMaskFilter.prototype.uniformsobject;

/**
 * @param {PIXI.WebGLRenderer} renderer
 * @param {PIXI.RenderTarget} input
 * @param {PIXI.RenderTarget} output
 */
PIXI.SpriteMaskFilter.prototype.applyFilter = function (renderer, input, output) {};

/**
 * @constructor
 */
PIXI.StencilMaskStack = function () {};

/**
 * @type {number}
 */
PIXI.StencilMaskStack.prototype.count;

/**
 * @type {boolean}
 */
PIXI.StencilMaskStack.prototype.reverse;

/**
 * @type {Array.<*>}
 */
PIXI.StencilMaskStack.prototype.stencilStack;

/**
 * @typedef {{
 *        view: (HTMLCanvasElement|undefined),
 *        transparent: (boolean|undefined),
 *        autoResize: (boolean|undefined),
 *        antialias: (boolean|undefined),
 *        resolution: (number|undefined),
 *        clearBeforeRender: (boolean|undefined),
 *        backgroundColor: (number|undefined),
 *        preserveDrawingBuffer: (boolean|undefined),
 *        roundPixels: (boolean|undefined)
 *      }}
 */
var SystemRendererOptions;

/**
 * @constructor
 * @param {string} system
 * @param {number=} width
 * @param {number=} height
 * @param {SystemRendererOptions=} options
 */
PIXI.SystemRenderer = function (system, width, height, options) {};

/**
 * @type {boolean}
 */
PIXI.SystemRenderer.prototype.autoResize;

/**
 * @type {number}
 */
PIXI.SystemRenderer.prototype.backgroundColor;

/**
 * @type {Object.<string, *>}
 */
PIXI.SystemRenderer.prototype.blendModes;

/**
 * @type {boolean}
 */
PIXI.SystemRenderer.prototype.clearBeforeRender;

/**
 * @type {number}
 */
PIXI.SystemRenderer.prototype.height;

/**
 * @type {boolean}
 */
PIXI.SystemRenderer.prototype.preserveDrawingBuffer;

/**
 * @type {number}
 */
PIXI.SystemRenderer.prototype.resolution;

/**
 * @type {boolean}
 */
PIXI.SystemRenderer.prototype.transparent;

/**
 * @type {number}
 */
PIXI.SystemRenderer.prototype.type;

/**
 * @type {HTMLCanvasElement}
 */
PIXI.SystemRenderer.prototype.view;

/**
 * @type {number}
 */
PIXI.SystemRenderer.prototype.width;

/**
 * TODO - to remove? - exists in source, but not in http://pixijs.github.io/docs/PIXI.SystemRenderer.html
 * @type {boolean}
 */
PIXI.SystemRenderer.prototype.roundPixels;

/**
 * @param {boolean} [removeView=false]
 */
PIXI.SystemRenderer.prototype.destroy = function (removeView) {};

/**
 * @param {number} width
 * @param {number} height
 */
PIXI.SystemRenderer.prototype.resize = function (width, height) {};

/** @typedef {{
 *        font: (string|undefined),
 *        fill: (number|string|undefined),
 *        align: (string|undefined),
 *        stroke: (number|string|undefined),
 *        strokeThickness: (number|undefined),
 *        wordWrap: (boolean|undefined),
 *        wordWrapWidth: (number|undefined),
 *        lineHeight: (number|undefined),
 *        dropShadow: (boolean|undefined),
 *        dropShadowColor: (string|undefined),
 *        dropShadowAngle: (number|undefined),
 *        dropShadowDistance: (number|undefined),
 *        padding: (number|undefined),
 *        textBaseline: (string|undefined),
 *        lineJoin: (string|undefined),
 *        miterLimit: (number|undefined)
 *      }}
 */
var PixiTextStyleOptions;

/**
 * @constructor
 * @extends {PIXI.Sprite}
 * @param {string} text
 * @param {PixiTextStyleOptions=} style
 */
PIXI.Text = function (text, style) {};

/**
 * @type {number}
 */
PIXI.Text.prototype.alpha;

/**
 * @type {PIXI.Point}
 */
PIXI.Text.prototype.anchor;

/**
 * @type {number}
 */
PIXI.Text.prototype.blendMode;

/**
 * @type {boolean}
 */
PIXI.Text.prototype.cacheAsBitmap;

/**
 * @type {number}
 */
PIXI.Text.prototype.cachedTint;

/**
 * @type {HTMLCanvasElement}
 */
PIXI.Text.prototype.canvas;

/**
 * @type {Array.<PIXI.DisplayObject>}
 */
PIXI.Text.prototype.children;

/**
 * @type {HTMLCanvasElement}
 */
PIXI.Text.prototype.context;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.Text.prototype.filterArea;

/**
 * @type {Array.<PIXI.AbstractFilter>}
 */
PIXI.Text.prototype.filters;

/**
 * @type {number}
 */
PIXI.Text.prototype.height;

/**
 * @type {PIXI.Graphics|PIXI.Sprite}
 */
PIXI.Text.prototype.mask;

/**
 * @type {PIXI.Container}
 */
PIXI.Text.prototype.parent;

/**
 * @type {PIXI.Point}
 */
PIXI.Text.prototype.pivot;

/**
 * @type {PIXI.Point}
 */
PIXI.Text.prototype.position;

/**
 * @type {boolean}
 */
PIXI.Text.prototype.renderable;

/**
 * @type {number}
 */
PIXI.Text.prototype.resolution;

/**
 * @type {number}
 */
PIXI.Text.prototype.rotation;

/**
 * @type {PIXI.Point}
 */
PIXI.Text.prototype.scale;

/**
 * @type {PIXI.AbstractFilter|PIXI.Shader}
 */
PIXI.Text.prototype.shader;

/**
 * @type {PixiTextStyleOptions}
 */
PIXI.Text.prototype.style;

/**
 * @type {string}
 */
PIXI.Text.prototype.text;

/**
 * @type {PIXI.Texture}
 */
PIXI.Text.prototype.texture;

/**
 * @type {number}
 */
PIXI.Text.prototype.tint;

/**
 * @type {boolean}
 */
PIXI.Text.prototype.visible;

/**
 * @type {number}
 */
PIXI.Text.prototype.width;

/**
 * @type {number}
 */
PIXI.Text.prototype.x;

/**
 * @type {number}
 */
PIXI.Text.prototype.y;

/**
 * @param {boolean=} destroyBaseTexture
 */
PIXI.Text.prototype.destroy = function (destroyBaseTexture) {};

/**
 * @param {PIXI.Matrix=} matrix
 * @return {PIXI.Rectangle}
 */
PIXI.Text.prototype.getBounds = function (matrix) {};

/**
 * @param {PIXI.WebGLRenderer} renderer
 */
PIXI.Text.prototype.renderWebGL = function (renderer) {};

/**
 * @constructor
 * @param {PIXI.BaseTexture} baseTexture
 * @param {PIXI.Rectangle=} frame
 * @param {PIXI.Rectangle=} crop
 * @param {PIXI.Rectangle=} trim
 * @param {boolean=} rotate
 */
PIXI.Texture = function (baseTexture, frame, crop, trim, rotate) {};

/**
 * @const
 */
PIXI.Texture.EMPTY;

/**
 * @type {PIXI.BaseTexture}
 */
PIXI.Texture.prototype.baseTexture;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.Texture.prototype.crop;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.Texture.prototype.frame;

/**
 * @type {number}
 */
PIXI.Texture.prototype.height;

/**
 * TODO - Found in source but not in docs. Needs to be added to docs: http://pixijs.github.io/docs/PIXI.Texture.html
 * @type {boolean}
 */
PIXI.Texture.prototype.interactive;

/**
 * @type {boolean}
 */
PIXI.Texture.prototype.noFrame;

/**
 * @type {boolean}
 */
PIXI.Texture.prototype.requiresUpdate;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.Texture.prototype.trim;

/**
 * @type {boolean}
 */
PIXI.Texture.prototype.valid;

/**
 * @type {number}
 */
PIXI.Texture.prototype.width;

/**
 * @param {PIXI.Texture} texture
 * @param {string} id
 */
PIXI.Texture.addTextureToCache = function (texture, id) {};

/**
 * @param {HTMLCanvasElement} canvas
 * @param {number} scaleMode
 * @return {PIXI.Texture}
 */
PIXI.Texture.fromCanvas = function (canvas, scaleMode) {};

/**
 * @param {string} frameId
 * @return {PIXI.Texture}
 */
PIXI.Texture.fromFrame = function (frameId) {};

/**
 * @param {string} imageUrl
 * @param {boolean=} crossorigin
 * @param {number=} scaleMode
 * @return {PIXI.Texture}
 */
PIXI.Texture.fromImage = function (imageUrl, crossorigin, scaleMode) {};

/**
 * @param {HTMLVideoElement} video
 * @param {number} scaleMode
 * @return {PIXI.Texture}
 */
PIXI.Texture.fromVideo = function (video, scaleMode) {};

/**
 * @param {string} videoUrl
 * @param {number} scaleMode
 * @return {PIXI.Texture}
 */
PIXI.Texture.fromVideoUrl = function (videoUrl, scaleMode) {};

/**
 * @param {string} id
 * @return {PIXI.Texture}
 */
PIXI.Texture.removeTextureFromCache = function (id) {};

/**
 * @return {PIXI.Texture}
 */
PIXI.Texture.prototype.clone = function () {};

/**
 * @param {boolean=} destroyBase
 */
PIXI.Texture.prototype.destroy = function (destroyBase) {};

PIXI.Texture.prototype.update = function () {};

/**
 * @constructor
 * @extends {PIXI.Shader}
 * @param {PIXI.ShaderManager} shaderManager
 * @param {string=} vertexSrc
 * @param {string=} fragmentSrc
 * @param {Object=} customUniforms
 * @param {*=} customAttributes
 */
PIXI.TextureShader = function (shaderManager, vertexSrc, fragmentSrc, customUniforms, customAttributes) {};

/**
 * @const
 */
PIXI.TextureShader.prototype.defaultVertexSrc;

/**
 * @const
 */
PIXI.TextureShader.prototype.defaultFragmentSrc;

/**
 * @type {string}
 */
PIXI.TextureShader.prototype.fragmentSrc;

/**
 * @type {string}
 */
PIXI.TextureShader.prototype.vertexSrc;

/** @typedef {{
 *        src: string,
 *        mime: string
 *      }}
 */
var PixiVideoSource;

/**
 * @constructor
 * @extends {PIXI.BaseTexture}
 * @param {HTMLVideoElement} source
 * @param {number=} scaleMode
 */
PIXI.VideoBaseTexture = function (source, scaleMode) {};

/**
 * @type {boolean}
 */
PIXI.VideoBaseTexture.prototype.autoUpdate;

/**
 * @type {boolean}
 */
PIXI.VideoBaseTexture.prototype.mipmap;

/**
 * @type {boolean}
 */
PIXI.VideoBaseTexture.prototype.premultipliedAlpha;

/**
 * @type {number}
 */
PIXI.VideoBaseTexture.prototype.resolution;

/**
 * @type {number}
 */
PIXI.VideoBaseTexture.prototype.scaleMode;

/**
 * @param {string|Object|Array.<string>|Array.<PixiVideoSource>} videoSrc
 * @param {number} scaleMode
 * @return {PIXI.VideoBaseTexture}
 */
PIXI.VideoBaseTexture.fromUrl = function (videoSrc, scaleMode) {};

/**
 * @param {HTMLVideoElement} video
 * @param {number} scaleMode
 * @return {PIXI.VideoBaseTexture}
 */
PIXI.VideoBaseTexture.fromVideo = function (video, scaleMode) {};

PIXI.VideoBaseTexture.prototype.destroy = function () {};

/**
 * @constructor
 * @param {PIXI.WebGLRenderer} renderer
 */
PIXI.WebGLManager = function (renderer) {};

/**
 * @type {PIXI.WebGLRenderer}
 */
PIXI.WebGLManager.prototype.renderer;

PIXI.WebGLManager.prototype.destroy = function () {};

PIXI.WebGLManager.prototype.onContextChange = function () {};

/**
 * @constructor
 * @param {PIXI.WebGLRenderer} renderer
 */
PIXI.WebGLMaskManager = function (renderer) {};

/**
 * @param {PIXI.Graphics} graphics
 * @param {Array.<*>} webGLData
 */
PIXI.WebGLMaskManager.prototype.bindGraphics = function (graphics, webGLData) {};

PIXI.WebGLMaskManager.prototype.destroy = function () {};

/**
 * @param {Array.<*>} maskData
 */
PIXI.WebGLMaskManager.prototype.popMask = function (maskData) {};

/**
 * @param {PIXI.Graphics} graphics
 * @param {Array.<*>} webGLData
 */
PIXI.WebGLMaskManager.prototype.popStencil = function (graphics, webGLData) {};

/**
 * @param {Array.<*>} maskData
 */
PIXI.WebGLMaskManager.prototype.pushMask = function (maskData) {};

/**
 * @param {PIXI.Graphics} graphics
 * @param {Array.<*>} webGLData
 */
PIXI.WebGLMaskManager.prototype.pushStencil = function (graphics, webGLData) {};

/**
 * @param {PIXI.StencilMaskStack} stencilMaskStack
 */
PIXI.WebGLMaskManager.prototype.setMaskStack = function (stencilMaskStack) {};

/**
 * @constructor
 * @extends {PIXI.SystemRenderer}
 * @param {number=} width
 * @param {number=} height
 * @param {SystemRendererOptions=} options
 */
PIXI.WebGLRenderer = function (width, height, options) {};

/**
 * @type {boolean}
 */
PIXI.WebGLRenderer.prototype.autoResize;

/**
 * @type {number}
 */
PIXI.WebGLRenderer.prototype.backgroundColor;

/**
 * @type {PIXI.BlendModeManager}
 */
PIXI.WebGLRenderer.prototype.blendModeManager;

/**
 * @type {Object}
 */
PIXI.WebGLRenderer.prototype.blendModes;

/**
 * @type {boolean}
 */
PIXI.WebGLRenderer.prototype.clearBeforeRender;

/**
 * @type {PIXI.ObjectRenderer}
 */
PIXI.WebGLRenderer.prototype.currentRenderer;

/**
 * @type {PIXI.RenderTarget}
 */
PIXI.WebGLRenderer.prototype.currentRenderTarget;

/**
 * @type {number}
 */
PIXI.WebGLRenderer.prototype.drawCount;

/**
 * @type {PIXI.FilterManager}
 */
PIXI.WebGLRenderer.prototype.filterManager;

/**
 * @type {number}
 */
PIXI.WebGLRenderer.prototype.height;

/**
 * @type {PIXI.MaskManager}
 */
PIXI.WebGLRenderer.prototype.maskManager;

/**
 * @type {boolean}
 */
PIXI.WebGLRenderer.prototype.preserveDrawingBuffer;

/**
 * @type {number}
 */
PIXI.WebGLRenderer.prototype.resolution;

/**
 * @type {PIXI.ShaderManager}
 */
PIXI.WebGLRenderer.prototype.shaderManager;

/**
 * Manages the stencil buffer
 * @constructor
 * @param {PIXI.WebGLRenderer} renderer 
 */
PIXI.StencilManager = function (renderer) {};

/**
 * @type {PIXI.StencilManager}
 */
PIXI.WebGLRenderer.prototype.stencilManager;

/**
 * @type {boolean}
 */
PIXI.WebGLRenderer.prototype.transparent;

/**
 * @type {number}
 */
PIXI.WebGLRenderer.prototype.type;

/**
 * @type {HTMLCanvasElement}
 */
PIXI.WebGLRenderer.prototype.view;

/**
 * @type {number}
 */
PIXI.WebGLRenderer.prototype.width;

/**
 * @param {boolean} [removeView=false]
 */
PIXI.WebGLRenderer.prototype.destroy = function (removeView) {};

/**
 * @param {PIXI.BaseTexture|PIXI.Texture} texture
 */
PIXI.WebGLRenderer.prototype.destroyTexture = function (texture) {};

/**
 * @param {PIXI.DisplayObject} object
 */
PIXI.WebGLRenderer.prototype.render = function (object) {};

/**
 * @param {PIXI.DisplayObject} displayObject
 * @param {PIXI.RenderTarget} renderTarget
 * @param {*} clear
 */
PIXI.WebGLRenderer.prototype.renderDisplayObject = function (displayObject, renderTarget, clear) {};

/**
 * @param {number} width
 * @param {number} height
 */
PIXI.WebGLRenderer.prototype.resize = function (width, height) {};

/**
 * @param {PIXI.ObjectRenderer} objectRenderer
 */
PIXI.WebGLRenderer.prototype.setObjectRenderer = function (objectRenderer) {};

/**
 * @param {PIXI.RenderTarget} renderTarget
 */
PIXI.WebGLRenderer.prototype.setRenderTarget = function (renderTarget) {};

/**
 * @param {PIXI.BaseTexture|PIXI.Texture} texture
 */
PIXI.WebGLRenderer.prototype.updateTexture = function (texture) {};

/*---------------------------------------------------------------------------------------------------------
*                     THESE ARE NEEDED BECAUSE ARE EXTENDED ABOVE
--------------------------------------------------------------------------------------------------------*/

/** 
 * @constructor
 */
PIXI.EventEmitter = function () {};

/**
 * @param {string} event
 * @param {Boolean} exists
 * @returns {Array|Boolean}
 */
PIXI.EventEmitter.prototype.listeners = function listeners(event, exists) {};

/**
 * @param {string} event
 * @param {*} a1
 * @param {*} a2
 * @param {*} a3
 * @param {*} a4
 * @param {*} a5
 * @returns {Boolean}
 */
PIXI.EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {};

/**
 * @param {string} event
 * @param {Function} fn
 * @param {*=} context
 */
PIXI.EventEmitter.prototype.on = function on(event, fn, context) {};

/**
 * @param {string} event
 * @param {Function} fn
 * @param {*=} context
 */
PIXI.EventEmitter.prototype.addListener = function on(event, fn, context) {};

/**
 * @param {string} event
 * @param {Function} fn
 * @param {*=} context
 */
PIXI.EventEmitter.prototype.once = function once(event, fn, context) {};

/**
 * @param {string} event
 * @param {Function} fn
 * @param {*=} context
 * @param {Boolean=} once
 */
PIXI.EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {};

/**
 * @param {string} event
 * @param {Function} fn
 * @param {*=} context
 * @param {Boolean=} once
 */
PIXI.EventEmitter.prototype.off = function removeListener(event, fn, context, once) {};

/**
 * @param {string} event The event want to remove all listeners for.
 */
PIXI.EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {};

/** @type {String|boolean} */
PIXI.EventEmitter.prefixed;


/*---------------------------------------------------------------------------------------------------------
*                                            PIXI.utils
--------------------------------------------------------------------------------------------------------*/

PIXI.utils = {};
/**
 * @type {Object.<string,PIXI.Texture>}
 */
PIXI.utils.TextureCache = {};
/**
 * @type {Object.<string,PIXI.BaseTexture>}
 */
PIXI.utils.BaseTextureCache = {};
