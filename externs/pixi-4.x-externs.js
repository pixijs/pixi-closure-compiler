/**
 * @fileoverview Externs to use for PIXI
 * @externs
 */
var PIXI = {};

/**
 * @typedef {Object}
 */
var EventEmitter;

/**
 * @typedef {number}
 */
var DOMHighResTimeStamp;

/**
 * @typedef {{
 *   name: string,
 *   url: Array<string>,
 *   options: ?
 * }}
 */
var Resource;

/**
 * @type {number}
 */
Resource.prototype.progressChunk;

/**
 * @enum {string}
 */
Resource.XHR_RESPONSE_TYPE = {
    DEFAULT: {},
    BUFFER: {},
    BLOB: {},
    DOCUMENT: {},
    JSON: {},
    TEXT: {},
};

/**
 * @enum {string}
 */
Resource.LOAD_TYPE = {
    XHR: {},
    IMAGE: {},
    AUDIO: {},
    VIDEO: {}
};

/**
 * @enum {string}
 */
Resource.TYPE = {
    UNKNOWN: {},
    JSON: {},
    XML: {},
    IMAGE: {},
    AUDIO: {},
    VIDEO: {},
    TEXT: {}
};

/**
 * @type {Object}
 */
PIXI.TRANSFORM_MODE = {};

/**
 * @memberOf PIXI
 * @type {number}
 */
PIXI.TRANSFORM_MODE.STATIC;

/**
 * @memberOf PIXI
 * @type {number}
 */
PIXI.TRANSFORM_MODE.DYNAMIC;

/**
 * @memberOf PIXI
 * @type {string}
 */
PIXI.VERSION;

/**
 * @memberOf PIXI
 * @type {number}
 */
PIXI.PI_2;

/**
 * @memberOf PIXI
 * @type {number}
 */
PIXI.RAD_TO_DEG;

/**
 * @memberOf PIXI
 * @type {number}
 */
PIXI.DEG_TO_RAD;


/**
 * @deprecated
 */
PIXI.TARGET_FPMS;

/**
 * @memberOf PIXI
 * @type {Object}
 */
PIXI.RENDERER_TYPE = {
    UNKNOWN: {},
    WEBGL: {},
    CANVAS: {}
};

/**
 * @memberOf PIXI
 * @type {Object}
 */
PIXI.WRAP_MODES = {
    REPEAT: {}
};

/**
 * @memberOf PIXI
 * @type {Object}
 */
PIXI.BLEND_MODES = {
    NORMAL: {},
    ADD: {},
    MULTIPLY: {},
    SCREEN: {},
    OVERLAY: {},
    DARKEN: {},
    LIGHTEN: {},
    COLOR_DODGE: {},
    COLOR_BURN: {},
    HARD_LIGHT: {},
    SOFT_LIGHT: {},
    DIFFERENCE: {},
    EXCLUSION: {},
    HUE: {},
    SATURATION: {},
    COLOR: {},
    LUMINOSITY: {}
};

/**
 * @memberOf PIXI
 * @type {Object}
 */
PIXI.DRAW_MODES = {
    POINTS: {},
    LINES: {},
    LINE_LOOP: {},
    LINE_STRIP: {},
    TRIANGLES: {},
    TRIANGLE_STRIP: {},
    TRIANGLE_FAN: {}
};

/**
 * @memberOf PIXI
 * @enum {number}
 */
PIXI.SCALE_MODES = {    
    LINEAR: {},
    NEAREST: {}
};

/**
 * @deprecated
 */
PIXI.RETINA_PREFIX;

/**
 * @deprecated
 */
PIXI.RESOLUTION;

/**
 * @deprecated
 */
PIXI.FILTER_RESOLUTION;

/**
 * @deprecated
 */
PIXI.DEFAULT_RENDER_OPTIONS;

/**
 * @memberOf PIXI
 * @enum {number}
 */
PIXI.SHAPES = {
    POLY: {},
    RECT: {},
    CIRC: {},
    ELIP: {},
    RREC: {}
};

/**
 * @deprecated
 */
PIXI.SPRITE_BATCH_SIZE;

/**
 * @enum {string}
 */
PIXI.PRECISION = {
    LOW: {},
    MEDIUM: {},
    HIGH: {}
};

PIXI.SCALE_MODES

/**
 * @type {Object}
 */
PIXI.settings = {};

/**
 * @memberOf PIXI.settings
 * @type {number}
 */
PIXI.settings.TARGET_FPMS;

/**
 * @memberOf PIXI.settings
 * @type {RegExp}
 */
PIXI.settings.RETINA_PREFIX;

/**
 * @memberOf PIXI.settings
 * @type {number}
 */
PIXI.settings.RESOLUTION;

/**
 * @memberOf PIXI.settings
 * @type {boolean}
 */
PIXI.settings.MIPMAP_TEXTURES;

/**
 * @memberOf PIXI.settings
 * @type {number}
 */
PIXI.settings.FILTER_RESOLUTION;

/**
 * @memberOf PIXI.settings
 * @type {number}
 */
PIXI.settings.SPRITE_MAX_TEXTURES;

/**
 * @memberOf PIXI.settings
 * @type {number}
 */
PIXI.settings.SPRITE_BATCH_SIZE;

/**
 * @memberOf PIXI.settings
 * @type {Object}
 */
PIXI.settings.RENDER_OPTIONS = {
    view: {},
    antialias: {},
    forceFXAA: {},
    autoResize: {},
    transparent: {},
    backgroundColor: {},
    clearBeforeRender: {},
    preserveDrawingBuffer: {},
    roundPixels: {},
    width: {},
    height: {},
    legacy: {},
}

/**
 * @memberOf PIXI.settings
 */
PIXI.settings.TRANSFORM_MODE;

/**
 * @memberOf PIXI.settings
 */
PIXI.settings.GC_MODES;

/**
 * @memberOf PIXI.settings
 * @type {number}
 */
PIXI.settings.GC_MAX_IDLE;

/**
 * @memberOf PIXI.settings
 * @type {number}
 */
PIXI.settings.GC_MAX_CHECK_COUNT;

/**
 * @memberOf PIXI.settings
 */
PIXI.settings.WRAP_MODE;

/**
 * @memberOf PIXI.settings
 * @type {PIXI.SCALE_MODES}
 */
PIXI.settings.SCALE_MODE;

/**
 * @memberOf PIXI.settings
 * @type {PIXI.PRECISION}
 */
PIXI.settings.PRECISION_VERTEX;

/**
 * @memberOf PIXI.settings
 * @type {PIXI.PRECISION}
 */
PIXI.settings.PRECISION_FRAGMENT;

/**
 * @memberOf PIXI.settings
 * @type {boolean}
 */
PIXI.settings.CAN_UPLOAD_SAME_BUFFER;

/**
 * @memberOf PIXI.settings
 * @type {number}
 */
PIXI.settings.MESH_CANVAS_PADDING;

/**
 * @return {PIXI.WebGLRenderer|PIXI.CanvasRenderer}
 */
PIXI.autoDetectRenderer = function(){};

/**
 * @constructor
 * @memberOf PIXI
 * @param {WebGLRenderingContext} gl
 * @param {string|Array<string>} vertexSrc
 * @param {string|Array<string>} fragmentSrc
 * @param {Object} [attributeLocations]
 * @param {string} [precision]
 */
PIXI.Shader = function(gl, vertexSrc, fragmentSrc, attributeLocations, precision){};

/**
 * @constructor
 * @memberOf PIXI
 * @extends PIXI.Shader
 * @param {string} [vertexSrc]
 * @param {string} [fragmentSrc]
 * @param {Object} [uniformData]
 */
PIXI.Filter = function(vertexSrc, fragmentSrc, uniformData){};

/**
 * @constructor
 * @memberOf PIXI
 * @param {WebGLRenderingContext} gl
 * @param {Object} state
 */
PIXI.Quad = function(gl, state){};

/**
 * @constructor
 * @memberOf PIXI
 * @param {WebGLRenderingContext} gl
 * @param {number} [width=0]
 * @param {number} [height=0]
 * @param {number} [scaleMode]
 * @param {number} [resolution]
 * @param {boolean} [root]
 */
PIXI.RenderTarget = function(gl, width, height, scaleMode, resolution, root){};

/**
 * @constructor
 * @memberOf PIXI
 * @param {PIXI.WebGLRenderer} renderer
 */
PIXI.TextureManager = function(renderer){};

/**
 * @param {PIXI.BaseTexture|PIXI.Texture} texture
 * @param {boolean} [skipRemove]
 */
PIXI.TextureManager.prototype.destroyTexture = function(texture, skipRemove){};

/**
 *
 * @type {Object}
 */
PIXI.utils = {};

/**
 * @typedef {{
 *     width: number,
 *     height: number
 * }}
 */
PIXI.utils.Size;

/**
 * @typedef {{
 *     mediaType: string,
 *     subType: string,
 *     encoding: string,
 *     data: ?
 * }}
 */
PIXI.utils.DecomposedDataUri;

/**
 * @deprecated
 */
PIXI.utils._saidHello = function(){};

/**
 * @function skipHello
 * @memberOf PIXI.utils
 */
PIXI.utils.prototype.skipHello = function(){};

/**
 * @memberOf PIXI.utils
 * @function pluginTarget
 */
PIXI.utils.pluginTarget;

/**
 * @memberOf PIXI.utils
 * @return {number}
 */
PIXI.utils.prototype.uid = function(){};

/**
 * @memberOf PIXI.utils
 * @param {number} hex
 * @param  {Array<number>} [out=Array]
 * @return {Array<number>}
 */
PIXI.utils.prototype.hex2rgb = function(hex, out){};

/**
 * @memberOf PIXI.utils
 * @param {number} hex
 * @return {string}
 */
PIXI.utils.prototype.hex2string = function(hex){};

/**
 * @memberOf PIXI.utils
 * @param {Array<number>} rgb
 * @return {number}
 */
PIXI.utils.prototype.rgb2hex = function(rgb){};

/**
 * @memberOf PIXI.utils
 * @param {string} url
 * @param {number} [defaultValue=1]
 * @return {number}
 */
PIXI.utils.prototype.getResolutionOfUrl = function(url, defaultValue){};

/**
 * @typedef {Object} PIXI.utils.DecomposedDataUri
 */
/**
 * @memberOf PIXI.utils
 * @param {string} dataUri
 * @return {PIXI.utils.DecomposedDataUri|undefined}
 */
PIXI.utils.prototype.decomposeDataUri = function(dataUri){};

/**
 * @memberOf PIXI.utils
 * @param {string} url
 * @return {string|undefined}
 */
PIXI.utils.prototype.getUrlFileExtension = function(url){};

/**
 * @typedef {Object} PIXI.utils.Size
 */
/**
 * @memberOf PIXI.utils
 * @param {string} svgString
 * @return {PIXI.utils.Size|undefined}
 */
PIXI.utils.prototype.getSvgSize = function(svgString){};

/**
 * @memberOf PIXI.utils
 */
PIXI.utils.prototype.skipHello = function(){};

/**
 * @memberOf PIXI.utils
 * @param {string} type
 */
PIXI.utils.prototype.sayHello = function(type){};

/**
 * @memberOf PIXI.utils
 * @return {boolean}
 */
PIXI.utils.prototype.isWebGLSupported = function(){};


/**
 * @memberOf PIXI.utils
 * @type {Object}
 */
PIXI.utils.prototype.isMobile;

/**
 * @memberOf PIXI.utils
 * @private
 */
PIXI.utils.TextureCache;

/**
 * @memberOf PIXI.utils
 * @private
 */
PIXI.utils.BaseTextureCache;

/**
 * @memberOf PIXI.utils
 * @returns {number}
 */
PIXI.utils.sign = function(){};

PIXI.utils.mixins = {};

/**
 * @memberOf PIXI.utils.mixins
 * @private
 */
PIXI.utils.mixins.performMixins = function(){};

/**
 * @memberOf PIXI.utils.mixins
 * @private
 */
PIXI.utils.mixins.delayMixin = function(){};

/**
 * @constructor
 * @memberOf PIXI
 */
PIXI.TransformBase = function(){};
PIXI.TransformBase.prototype.IDENTITY;

/**
 * @constructor
 * @extends PIXI.TransformBase
 * @memberOf PIXI
 */
PIXI.TransformStatic = function(){};

/**
 * @type {number}
 */
PIXI.TransformStatic.prototype.rotation;

/**
 * @param {PIXI.Matrix} matrix
 */
PIXI.TransformStatic.prototype.setFromMatrix = function(matrix){};

/**
 * @param {PIXI.Transform} parentTransform
 */
PIXI.TransformStatic.prototype.updateTransform = function(parentTransform){};
PIXI.TransformStatic.prototype.updateLocalTransform = function(){};

/**
 * @constructor
 * @extends PIXI.TransformBase
 * @memberOf PIXI
 */
PIXI.Transform = function(){};

/**
 * @param {PIXI.Transform} parentTransform
 */
PIXI.Transform.prototype.updateTransform = function(parentTransform){};
PIXI.Transform.prototype.updateLocalTransform = function(){};

/**
 * @param {PIXI.Matrix} matrix
 */
PIXI.Transform.prototype.setFromMatrix = function(matrix){};

/**
 * @type {number}
 */
PIXI.Transform.prototype.rotation;

/**
 * @constructor
 * @extends EventEmitter
 * @memberOf PIXI
 * @param {PIXI.Rectangle} [frame]
 * @param {PIXI.Rectangle} [orig]
 * @param {PIXI.Rectangle} [trim]
 * @param {number} [rotate]
 * @param {PIXI.Point} [anchor]
 */
PIXI.Texture = function(baseTexture, frame, orig, trim, rotate, anchor){};

/**
 * @type {PIXI.Rectangle}
 */
PIXI.Texture.prototype.frame;

/**
 * @type {number}
 */
PIXI.Texture.prototype.rotate;

/**
 * @type {number}
 */
PIXI.Texture.prototype.width;

/**
 * @type {number}
 */
PIXI.Texture.prototype.height;

PIXI.Texture.EMPTY;
PIXI.Texture.WHITE;

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
 * @param {string} videoUrl
 * @param {number} scaleMode
 * @return {PIXI.Texture}
 */
PIXI.Texture.fromVideoUrl = function (videoUrl, scaleMode) {};

/**
 * @param {HTMLVideoElement|string} video
 * @param {number} [scaleMode]
 * @param {boolean} [crossorigin]
 * @param {boolean} [autoPlay]
 * @return {PIXI.Texture}
 */
PIXI.Texture.fromVideo = function (video, scaleMode, crossorigin, autoPlay) {};

/**
 * @param {number|string|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|PIXI.BaseTexture} source
 * @return {PIXI.Texture}
 */
PIXI.Texture.from = function (source) {};

/**
 * @param {HTMLImageElement|HTMLCanvasElement} source
 * @param {String} imageUrl
 * @param {String} [name]
 * @return {PIXI.Texture}
 */
PIXI.Texture.fromLoader = function (source, imageUrl, name) {};

/**
 * @param {PIXI.Texture} texture
 * @param {string} id
 */
PIXI.Texture.addToCache = function (texture, id) {};

/**
 * @param {string|PIXI.Texture} texture
 * @return {PIXI.Texture|null}
 */
PIXI.Texture.removeFromCache = function (texture){};

/**
 * @return {PIXI.Texture}
 */
PIXI.Texture.prototype.createWhiteTexture = function(){};

/**
 * @param {boolean=} destroyBase
 */
PIXI.Texture.prototype.destroy = function(destroyBase) {};

/**
 * @type {PIXI.BaseTexture}
 */
PIXI.Texture.prototype.baseTexture;

/**
 * @constructor
 * @extends PIXI.Texture
 * @memberOf PIXI
 * @param {PIXI.BaseRenderTexture} baseRenderTexture
 * @param {PIXI.Rectangle} [frame]
 */
PIXI.RenderTexture = function(baseRenderTexture, frame){};

/**
 * @constructor
 * @param {HTMLImageElement|HTMLCanvasElement} [source]
 * @param {number} [scaleMode=PIXI.settings.SCALE_MODE]
 * @param {number} [resolution=1]
 */
PIXI.BaseTexture = function(source, scaleMode, resolution){};

/**
 * @private
 * @type {boolean}
 */
PIXI.BaseTexture.prototype.isPowerOfTwo;

/**
 * @constructor
 * @extends PIXI.BaseTexture
 * @memberOf PIXI
 * @param {number} [width=100]
 * @param {number} [height=100]
 * @param {number} [scaleMode=PIXI.settings.SCALE_MODE]
 * @param {number} [resolution=1]
 */
PIXI.BaseRenderTexture = function(width = 100, height = 100, scaleMode, resolution){};

/**
 * @constructor
 * @memberOf PIXI
 * @param {number} [a=1]
 * @param {number} [b=0]
 * @param {number} [c=0]
 * @param {number} [d=1]
 * @param {number} [tx=0]
 * @param {number} [ty=0]
 */
PIXI.Matrix = function(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0){};

/**
 * @param array
 */
PIXI.Matrix.prototype.fromArray = function(array){};

/**
 * @param {boolean} transpose
 * @param {Array<number>} [out=Array]
 * @return {Array<number>}
 */
PIXI.Matrix.prototype.toArray = function(transpose, out){};

/**
 * @param {PIXI.Point} pos
 * @param {PIXI.Point} [newPos]
 * @return {PIXI.Point}
 */
PIXI.Matrix.prototype.apply = function(pos, newPos){};

/**
 * @param {PIXI.Point} pos
 * @param {PIXI.Point} [newPos]
 * @return {PIXI.Point}
 */
PIXI.Matrix.prototype.applyInverse = function(pos, newPos){};

/**
 * @param {number} x
 * @param {number} y
 * @return {PIXI.Matrix}
 */
PIXI.Matrix.prototype.translate = function(x, y){};

/**
 * @param {number} x
 * @param {number} y
 * @return {PIXI.Matrix}
 */
PIXI.Matrix.prototype.scale = function(x, y){};

/**
 * @param {number} angle
 * @return {PIXI.Matrix}
 */
PIXI.Matrix.prototype.rotate = function(angle){};

/**
 * @param {PIXI.Matrix} matrix
 * @return {PIXI.Matrix}
 */
PIXI.Matrix.prototype.append = function(matrix){};

/**
 * @return {PIXI.Matrix}
 */
PIXI.Matrix.prototype.invert = function(){};

/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} pivotX
 * @param {number} pivotY
 * @param {number} scaleX
 * @param {number} scaleY
 * @param {number} rotation
 * @param {number} skewX
 * @param {number} skewY
 * @return {PIXI.Matrix}
 */
PIXI.Matrix.prototype.setTransform = function(x, y, pivotX, pivotY, scaleX, scaleY, rotation, skewX, skewY){};

/**
 * @constructor
 * @memberOf PIXI
 * @param {Function} cb
 * @param {Object} scope
 * @param {number} [x=0]
 * @param {number} [y=0]
 */
PIXI.ObservablePoint = function(cb, scope, x = 0, y = 0){};

/**
 * @type {number}
 */
PIXI.ObservablePoint.prototype.x;

/**
 * @type {number}
 */
PIXI.ObservablePoint.prototype.y;

/**
 * @param {number} x
 * @param {number} y
 */
PIXI.ObservablePoint.prototype.set = function(x, y){};

/**
 * @param {PIXI.Point|PIXI.ObservablePoint} point
 */
PIXI.ObservablePoint.prototype.copy = function(point){};

/**
 * @param {PIXI.Point|PIXI.ObservablePoint} p
 * @returns {boolean}
 */
PIXI.ObservablePoint.prototype.equals = function(p){};

/**
 * @constructor
 * @memberOf PIXI
 */
PIXI.DisplayObject = function(){};

/**
 * @type {boolean}
 * @memberOf PIXI.DisplayObject
 */
PIXI.DisplayObject.prototype.cacheAsBitmap;

/**
 * @type {PIXI.Rectangle|PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.RoundedRectangle}
 * @memberOf PIXI.DisplayObject
 */
PIXI.DisplayObject.prototype.hitArea;

/**
 * @memberOf PIXI.DisplayObject
 */
PIXI.DisplayObject.prototype.interactiveChildren;

/**
 @type {PIXI.Point|PIXI.ObservablePoint}
 */
PIXI.DisplayObject.prototype.pivot;

/**
 @type {number}
 */
PIXI.DisplayObject.prototype.x;

/**
 @type {number}
 */
PIXI.DisplayObject.prototype.y;

/**
 @type {PIXI.Point|PIXI.ObservablePoint}
 */
PIXI.DisplayObject.prototype.position;

/**
 @type {PIXI.ObservablePoint}
 */
PIXI.DisplayObject.prototype.skew;

/**
 @type {PIXI.Point|PIXI.ObservablePoint}
 */
PIXI.DisplayObject.prototype.scale;

/**
 @type {PIXI.Point|PIXI.ObservablePoint}
 */
PIXI.DisplayObject.prototype.position;

/**
 @type {number}
 */
PIXI.DisplayObject.prototype.rotation;

/**
 @type {PIXI.Graphics|PIXI.Sprite}
 */
PIXI.DisplayObject.prototype.mask;

/**
 @type {PIXI.Matrix}
 */
PIXI.DisplayObject.prototype.worldTransform;

/**
 @type {PIXI.Matrix}
 */
PIXI.DisplayObject.prototype.localTransform;

/**
 * @param {PIXI.Rectangle} rect
 * @return {PIXI.Rectangle}
 */
PIXI.DisplayObject.prototype.getLocalBounds = function(rect){};

/**
 * @param {PIXI.Point} position
 * @param {PIXI.Point} [point]
 * @param {boolean} [skipUpdate=false]
 * @return {PIXI.Point}
 */
PIXI.DisplayObject.prototype.toGlobal = function(position, point, skipUpdate = false){};

/**
 * @param {PIXI.Point} position
 * @param {PIXI.DisplayObject} [from]
 * @param {PIXI.Point} [point]
 * @param {boolean} [skipUpdate=false]
 * @return {PIXI.Point}
 */
PIXI.DisplayObject.prototype.toLocal = function(position, from, point, skipUpdate){};

/**
 * @param {PIXI.Container} container
 * @return {PIXI.Container}
 */
PIXI.DisplayObject.prototype.setParent = function(container){};

/**
 * @param {boolean} skipUpdate
 * @param {PIXI.Rectangle} rect
 * @return {PIXI.Rectangle}
 */
PIXI.DisplayObject.prototype.getBounds = function(skipUpdate, rect){};

PIXI.DisplayObject.prototype.destroy = function(){};

/**
 * @constructor
 * @memberOf PIXI
 * @param {number} [x=0]
 * @param {number} [y=0]
 */
PIXI.Point = function(x = 0, y = 0){};

/**
 * @constructor
 * @memberOf PIXI
 * @param {number} [x=0]
 * @param {number} [y=0]
 * @param {number} [width=0]
 * @param {number} [height=0]
 */
PIXI.Rectangle = function(x = 0, y = 0, width = 0, height = 0){};

/**
 * @type {number}
 */
PIXI.Rectangle.prototype.left;

/**
 * @type {number}
 */
PIXI.Rectangle.prototype.right;

/**
 * @type {number}
 */
PIXI.Rectangle.prototype.top;

/**
 * @type {number}
 */
PIXI.Rectangle.prototype.bottom;

/**
 * @param {PIXI.Rectangle} rectangle
 * @return {PIXI.Rectangle}
 */
PIXI.Rectangle.prototype.copy = function(rectangle){};

/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
PIXI.Rectangle.prototype.contains = function(x, y){};

/**
 * @param {number} paddingX
 * @param {number} [paddingY]
 */
PIXI.Rectangle.prototype.pad = function(paddingX, paddingY){};

/**
 * @param {PIXI.Rectangle} rectangle
 */
PIXI.Rectangle.prototype.fit = function(rectangle){};

/**
 * @param {PIXI.Rectangle} rectangle
 */
PIXI.Rectangle.prototype.enlarge = function(rectangle){};

/**
 * @param {number} [resolution=1]
 * @param {number} [eps=0.001]
 */
PIXI.Rectangle.prototype.ceil = function(resolution = 1, eps = 0.001){};

PIXI.Rectangle.EMPTY;

/**
 * @constructor
 * @memberOf PIXI
 * @param {number} [x=0]
 * @param {number} [y=0]
 * @param {number} [radius=0]
 */
PIXI.Circle = function(x = 0, y = 0, radius = 0){};

/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
PIXI.Circle.prototype.contains = function(x, y){};

/**
 * @return {PIXI.Rectangle}
 */
PIXI.Circle.prototype.getBounds = function(){};

/**
 * @constructor
 * @memberOf PIXI
 * @param {number} [x=0]
 * @param {number} [y=0]
 * @param {number} [halfWidth=0]
 * @param {number} [halfHeight=0]
 */
PIXI.Ellipse = function(x = 0, y = 0, halfWidth = 0, halfHeight = 0){};

/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
PIXI.Ellipse.prototype.contains = function(x, y){};

/**
 * @return {PIXI.Rectangle}
 */
PIXI.Ellipse.prototype.getBounds = function(){};

/**
 * @constructor
 * @memberOf PIXI
 * @param {Array<PIXI.Point>|Array<number>} points
 */
PIXI.Polygon = function(points){};

/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
PIXI.Polygon.prototype.contains = function(x, y){};

/**
 * @constructor
 * @memberOf PIXI
 * @param {number} [x=0]
 * @param {number} [y=0]
 * @param {number} [width=0]
 * @param {number} [height=0]
 * @param {number} [radius=20]
 */
PIXI.RoundedRectangle = function(x = 0, y = 0, width = 0, height = 0, radius = 20){};

/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
PIXI.RoundedRectangle.prototype.contains = function(x, y){};

PIXI.Matrix = function(){}

/**
 * @constructor
 * @extends PIXI.DisplayObject
 * @memberOf PIXI
 */
PIXI.Container = function(){};

/**
 @type {PIXI.Point|PIXI.ObservablePoint}
 */
PIXI.Container.prototype.pivot;

/**
 @type {PIXI.ObservablePoint}
 */
PIXI.Container.prototype.skew;

/**
 * @param {...PIXI.DisplayObject} child
 * @return {PIXI.DisplayObject}
 */
PIXI.Container.prototype.addChild = function(child){};

/**
 * @param {PIXI.DisplayObject} child
 * @param {number} index
 * @return {PIXI.DisplayObject}
 */
PIXI.Container.prototype.addChildAt = function(child, index){};

/**
 * @param {number} index
 * @return {PIXI.DisplayObject}
 */
PIXI.Container.prototype.getChildAt = function(index){};

/**
 * @param {...PIXI.DisplayObject} child
 * @return {PIXI.DisplayObject}
 */
PIXI.Container.prototype.removeChild = function(child){};

/**
 * @param {number} index
 * @return {PIXI.DisplayObject}
 */
PIXI.Container.prototype.removeChildAt = function(index){};

/**
 * @param {number} [beginIndex=0]
 * @param {number} [endIndex=this.children.length]
 * @returns {Array}
 */
PIXI.Container.prototype.removeChildren = function(beginIndex = 0, endIndex){};

/**
 * @param {PIXI.DisplayObject} child
 * @param {number} index
 */
PIXI.Container.prototype.setChildIndex = function(child, index){};

/**
 * @param {PIXI.DisplayObject} child
 * @return {number}
 */
PIXI.Container.prototype.getChildIndex = function(child){};

/**
 * @method getChildByName
 * @memberOf PIXI.Container
 * @param {string} name
 * @return {PIXI.DisplayObject}
 */
PIXI.Container.prototype.getChildByName = function(name){};

/**
 * @param {PIXI.DisplayObject} child
 * @param {PIXI.DisplayObject} child2
 */
PIXI.Container.prototype.swapChildren = function(child, child2){};

/**
 * @param {PIXI.CanvasRenderer} renderer
 */
PIXI.Container.prototype.renderCanvas = function(renderer){};

/**
 * @param {Object|boolean} [options]
 */
PIXI.Container.prototype.destroy = function(options){};

/**
 * @type {PIXI.Graphics|PIXI.Sprite}
 */
PIXI.Container.prototype.mask;

/**
 * @type {Array<PIXI.Filter>}
 */
PIXI.Container.prototype.filters;

/**
 * @type {Array}
 */
PIXI.Container.prototype.children;

/**
 * @type {number}
 */
PIXI.Container.prototype.width;

/**
 * @type {number}
 */
PIXI.Container.prototype.height;

/**
 * @constructor
 * @memberOf PIXI
 * @private
 * @param {PIXI.CanvasRenderer} renderer
 */
PIXI.CanvasGraphicsRenderer = function(renderer){};

/**
 * @constructor
 * @extends PIXI.Container
 * @param {boolean} [nativeLines=false]
 */
PIXI.Graphics = function(nativeLines = false){};

/**
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.clone = function(){};

/**
 * @param {number} [color=0]
 * @param {number} [alpha=1]
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.beginFill = function(color = 0, alpha = 1){};

/**
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.endFill = function(){};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.drawRect = function(x, y, width, height){};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {number} radius
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.drawRoundedRect = function(x, y, width, height, radius){};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.drawCircle = function(x, y, radius){};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.drawEllipse = function(x, y, width, height){};

/**
 * @param {Array<number>|Array<PIXI.Point>|PIXI.Polygon} path
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.drawPolygon = function(path){};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} points
 * @param {number} radius
 * @param {number} [innerRadius]
 * @param {number} [rotation=0]
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.drawStar = function(x, y, points, radius, innerRadius, rotation = 0){};

/**
 * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape
 * @return {PIXI.GraphicsData}
 */
PIXI.Graphics.prototype.drawShape = function(shape){};

/**
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.clear = function(){};

/**
 * @returns {boolean}
 */
PIXI.Graphics.prototype.isFastRect = function(){};

/**
 * @param {PIXI.Point} point
 * @return {boolean}
 */
PIXI.Graphics.prototype.containsPoint = function(point){};

/**
 * @param {number} x
 * @param {number} y
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.moveTo = function(x, y){};

/**
 * @param {number} x
 * @param {number} y
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.lineTo = function(x, y){};

/**
 * @param {number} cpX
 * @param {number} cpY
 * @param {number} toX
 * @param {number} toY
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.quadraticCurveTo = function(cpX, cpY, toX, toY){};

/**
 * @param {number} cpX
 * @param {number} cpY
 * @param {number} cpX2
 * @param {number} cpY2
 * @param {number} toX
 * @param {number} toY
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.bezierCurveTo = function(cpX, cpY, cpX2, cpY2, toX, toY){};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} radius
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.arcTo = function(x1, y1, x2, y2, radius){};

/**
 * @param {number} cx
 * @param {number} cy
 * @param {number} radius
 * @param {number} startAngle
 * @param {number} endAngle
 * @param {boolean} [anticlockwise=false]
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.arc = function(cx, cy, radius, startAngle, endAngle, anticlockwise = false){};

/**
 * @param {number} [lineWidth=0]
 * @param {number} [color=0]
 * @param {number} [alpha=1]
 * @param {number} [alignment=0.5]
 * @return {PIXI.Graphics}
 */
PIXI.Graphics.prototype.lineStyle = function(lineWidth = 0, color = 0, alpha = 1, alignment = 0.5){};

/**
 * @constructor
 * @memberOf PIXI
 * @param {number} lineWidth
 * @param {number} lineColor
 * @param {number} lineAlpha
 * @param {number} fillColor
 * @param {number} fillAlpha
 * @param {boolean} fill
 * @param {boolean} nativeLines
 * @param {PIXI.Circle|PIXI.Rectangle|PIXI.Ellipse|PIXI.Polygon} shape
 * @param {number} lineAlignment
 */
PIXI.GraphicsData = function(lineWidth, lineColor, lineAlpha, fillColor, fillAlpha, fill, nativeLines, shape, lineAlignment){};

/**
 * @param {PIXI.Rectangle|PIXI.Circle} shape
 */
PIXI.GraphicsData.prototype.addHole = function(shape){};

/**
 * @constructor
 * @memberOf PIXI
 * @param {Object} [style]
 */
PIXI.TextStyle = function(style){};

/**
 * @type {string}
 */
PIXI.TextStyle.prototype.align;

/**
 * @type {boolean}
 */
PIXI.TextStyle.prototype.breakWords;

/**
 * @type {boolean}
 */
PIXI.TextStyle.prototype.dropShadow;

/**
 * @type {number}
 */
PIXI.TextStyle.prototype.dropShadowAlpha;

/**
 * @type {number}
 */
PIXI.TextStyle.prototype.dropShadowAngle;

/**
 * @type {number}
 */
PIXI.TextStyle.prototype.dropShadowBlur;

/**
 * @type {string|number}
 */
PIXI.TextStyle.prototype.dropShadowColor;

/**
 * @type {number}
 */
PIXI.TextStyle.prototype.dropShadowDistance;

/**
 * @type {string|Array<string>|number|Array<number>|CanvasGradient|CanvasPattern}
 */
PIXI.TextStyle.prototype.fill;

/**
 * @type {number}
 */
PIXI.TextStyle.prototype.fillGradientType;

/**
 * @type {Array<number>}
 */
PIXI.TextStyle.prototype.fillGradientStops;

/**
 * @type {string|Array<string>}
 */
PIXI.TextStyle.prototype.fontFamily;

/**
 * @type {number|string}
 */
PIXI.TextStyle.prototype.fontSize;

/**
 * @type {string}
 */
PIXI.TextStyle.prototype.fontStyle;

/**
 * @type {string}
 */
PIXI.TextStyle.prototype.fontVariant;

/**
 * @type {string}
 */
PIXI.TextStyle.prototype.fontWeight;

/**
 * @type {number}
 */
PIXI.TextStyle.prototype.letterSpacing;

/**
 * @type {number}
 */
PIXI.TextStyle.prototype.lineHeight;

/**
 * @type {number}
 */
PIXI.TextStyle.prototype.leading;

/**
 * @type {string}
 */
PIXI.TextStyle.prototype.lineJoin;

/**
 * @type {number}
 */
PIXI.TextStyle.prototype.miterLimit;

/**
 * @type {number}
 */
PIXI.TextStyle.prototype.padding;

/**
 * @type {string|number}
 */
PIXI.TextStyle.prototype.stroke;

/**
 * @type {number}
 */
PIXI.TextStyle.prototype.strokeThickness;

/**
 * @type {string}
 */
PIXI.TextStyle.prototype.textBaseline;

/**
 * @type {boolean}
 */
PIXI.TextStyle.prototype.trim;

/**
 * @type {string}
 */
PIXI.TextStyle.prototype.whiteSpace;

/**
 * @type {boolean}
 */
PIXI.TextStyle.prototype.wordWrap;

/**
 * @type {number}
 */
PIXI.TextStyle.prototype.wordWrapWidth;

/**
 * @return {string}
 */
PIXI.TextStyle.prototype.toFontString = function(){};

/**
 * @private
 * @param {number|Array<number>} color
 * @return {string}
 */
PIXI.TextStyle.prototype.getSingleColor = function(color){};

/**
 * @private
 * @param {number|Array<number>} color
 * @return {string}
 */
PIXI.TextStyle.prototype.getColor = function(color){};

/**
 * @private
 * @param {Array} array1
 * @param {Array} array2
 * @return {boolean}
 */
PIXI.TextStyle.prototype.areArraysEqual = function(array1, array2){};

/**
 * @private
 * @param {Object} target
 * @param {Object} source
 * @param {string} propertyObj
 */
PIXI.TextStyle.prototype.deepCopyProperties = function(target, source, propertyObj){};

/**
 * @param texture
 * @constructor
 * @extends PIXI.Container
 * @memberOf PIXI
 */
PIXI.Sprite = function(texture){};

/**
 * @param {PIXI.Rectangle} rect
 * @return {PIXI.Rectangle}
 */
PIXI.Sprite.prototype.getLocalBounds = function(rect){};

/**
 * @param {PIXI.Point} points
 * @return {boolean}
 */
PIXI.Sprite.prototype.containsPoint = function(points){};

/**
 * @param {Object|boolean} [options]
 */
PIXI.Sprite.prototype.destroy = function(options){};

/**
 * @type {PIXI.Texture}
 */
PIXI.Sprite.prototype.texture;

/**
 * @type {number}
 */
PIXI.Sprite.prototype.width;

/**
 * @type {number}
 */
PIXI.Sprite.prototype.height;

/**
 * @type {PIXI.ObservablePoint}
 */
PIXI.Sprite.prototype.anchor;

/**
 * @type {number}
 */
PIXI.Sprite.prototype.blendMode;

/**
 * @type {number}
 * @default 0xFFFFFF
 */
PIXI.Sprite.prototype.tint;

/**
 * @constructor
 * @extends PIXI.Sprite
 * @memberOf PIXI
 * @param {string} text
 * @param {Object|PIXI.TextStyle} [style]
 * @param {HTMLCanvasElement} [canvas]
 */
PIXI.Text = function(text, style, canvas){};

/**
 * @type {number}
 */
PIXI.Text.prototype.width;

/**
 * @type {number}
 */
PIXI.Text.prototype.height;

/**
 * @type {Object|PIXI.TextStyle}
 */
PIXI.Text.prototype.style;

/**
 * @memberOf PIXI
 * @constructor
 * @param {Object} [options]
 */
PIXI.Application = function(options){};

/**
 * @type {PIXI.WebGLRenderer|PIXI.CanvasRenderer}
 */
PIXI.Application.prototype.renderer;

/**
 * @type {HTMLCanvasElement}
 */
PIXI.Application.prototype.view;

/**
 * @type {PIXI.Rectangle}
 */
PIXI.Application.prototype.screen;

/**
 * @type {PIXI.Container}
 */
PIXI.Application.prototype.stage;


PIXI.Application.prototype.loader;


/**
 * @constructor
 * @extends EventEmitter
 * @memberOf PIXI
 */
PIXI.SystemRenderer = function(){};

/**
 * @type {number}
 */
PIXI.SystemRenderer.prototype.width;

/**
 * @type {number}
 */
PIXI.SystemRenderer.prototype.height;

/**
 * @type {number}
 */
PIXI.SystemRenderer.prototype.backgroundColor;

/**
 * @param {PIXI.DisplayObject} displayObject
 * @param {number} scaleMode
 * @param {number} resolution
 * @param {PIXI.Rectangle} [region]
 * @return {PIXI.Texture}
 */
PIXI.SystemRenderer.prototype.generateTexture = function(displayObject, scaleMode, resolution, region){};

/**
 * @param {boolean} [removeView]
 */
PIXI.SystemRenderer.prototype.destroy = function(removeView){};

/**
 * @constructor
 * @memberOf PIXI
 * @extends PIXI.SystemRenderer
 */
PIXI.WebGLRenderer = function(){};

/**
 * @param {PIXI.DisplayObject} displayObject
 * @param {PIXI.RenderTexture} renderTexture
 * @param {boolean} [clear]
 * @param {PIXI.Matrix} [transform]
 * @param {boolean} [skipUpdateTransform]
 */
PIXI.WebGLRenderer.prototype.render = function(displayObject, renderTexture, clear, transform, skipUpdateTransform){};

/**
 * @param {number} screenWidth
 * @param {number} screenHeight
 */
PIXI.WebGLRenderer.prototype.resize = function(screenWidth, screenHeight){};

/**
 * @param {PIXI.Texture} texture
 * @param {number} location
 * @param {boolean} forceLocation
 * @return {number}
 */
PIXI.WebGLRenderer.prototype.bindTexture = function(texture, location, forceLocation){};

/**
 * @param {PIXI.Texture} texture
 * @return {PIXI.WebGLRenderer}
 */
PIXI.WebGLRenderer.prototype.unbindTexture = function(texture){};

/**
 * @constructor
 * @memberOf PIXI
 * @extends PIXI.SystemRenderer
 */
PIXI.CanvasRenderer = function(){};

/**
 * @constructor
 * @memberOf PIXI
 */
PIXI.Bounds = function(){};

/**
 * @return {boolean}
 */
PIXI.Bounds.prototype.isEmpty = function(){};

PIXI.Bounds.prototype.clear = function(){};

/**
 * @param {PIXI.Rectangle} rect
 * @returns {PIXI.Rectangle}
 */
PIXI.Bounds.prototype.getRectangle = function(rect){};

/**
 * @param {PIXI.Point} point
 */
PIXI.Bounds.prototype.addPoint = function(point){};

/**
 * @param {Array<number>} vertices
 */
PIXI.Bounds.prototype.addQuad = function(vertices){};

/**
 * @param {PIXI.TransformBase} transform
 * @param {number} x0
 * @param {number} y0
 * @param {number} x1
 * @param {number} y1
 */
PIXI.Bounds.prototype.addFrame = function(transform, x0, y0, x1, y1){};

/**
 * @param {PIXI.TransformBase} transform
 * @param {Float32Array} vertices
 * @param {number} beginOffset
 * @param {number} endOffset
 */
PIXI.Bounds.prototype.addVertices = function(transform, vertices, beginOffset, endOffset){};

/**
 * @param {PIXI.Bounds} bounds
 */
PIXI.Bounds.prototype.addBounds = function(bounds){};

/**
 * @param {PIXI.Bounds} bounds
 * @param {PIXI.Bounds} mask
 */
PIXI.Bounds.prototype.addBoundsMask = function(bounds, mask){};

/**
 * @param {PIXI.Bounds} bounds
 * @param {PIXI.Rectangle} area
 */
PIXI.Bounds.prototype.addBoundsArea = function(bounds, area){};

/**
 *
 * @type {Object}
 */
PIXI.loaders = {}

/**
 * @constructor
 * @memberof PIXI.loaders
 * @param {string} [baseUrl='']
 * @param {number} [concurrency=10]
 */
PIXI.loaders.Loader = function(baseUrl, concurrency){};

/**
 * @type {Array<string>}
 */
PIXI.loaders.Loader.prototype.resources;

/**
 * @type {number}
 */
PIXI.loaders.Loader.prototype.concurrency;

/**
 * @type {boolean}
 */
PIXI.loaders.Loader.prototype.loading;

/**
 * @type {number}
 */
PIXI.loaders.Loader.prototype.progress;

/**
 * @type {string}
 */
PIXI.loaders.Loader.prototype.baseUrl;

/**
 * @type {Resource}
 */
PIXI.loaders.Loader.Resource;

/**
 * @return {PIXI.loaders.Loader}
 */
PIXI.loaders.Loader.prototype.add = function(){};

/**
 * @return {PIXI.loaders.Loader}
 */
PIXI.loaders.Loader.prototype.pre = function(){};

/**
 * @return {PIXI.loaders.Loader}
 */
PIXI.loaders.Loader.prototype.use = function(){};

/**
 * @return {PIXI.loaders.Loader}
 */
PIXI.loaders.Loader.prototype.reset = function(){};

/**
 * @param {string} eventType
 * @param {Function=} callback
 */
PIXI.loaders.Loader.prototype.once = function(eventType, callback){};

/**
 * @param {Function=} callback
 * @return {PIXI.loaders.Loader}
 */
PIXI.loaders.Loader.prototype.load = function(callback){};

/**
 * @type {Object}
 */
PIXI.interaction = {};

/**
 * @constructor
 * @memberOf PIXI.interaction
 */
PIXI.interaction.InteractionData = function () {};

/**
 * @type {PIXI.Point}
 */
PIXI.interaction.InteractionData.prototype.global;

/**
 * @type {MouseEvent|TouchEvent|PointerEvent}
 */
PIXI.interaction.InteractionData.prototype.originalEvent;

/**
 * @type {PIXI.DisplayObject}
 */
PIXI.interaction.InteractionData.prototype.target;

/**
 * @param {PIXI.DisplayObject} displayObject
 * @param {PIXI.Point} [point]
 * @param {PIXI.Point} [globalPos]
 * @return {PIXI.Point}
 */
PIXI.interaction.InteractionData.prototype.getLocalPosition = function(displayObject, point, globalPos){};

/**
 * @constructor
 * @extends EventEmitter
 * @memberOf PIXI.interaction
 * @param {PIXI.CanvasRenderer|PIXI.WebGLRenderer} renderer
 * @param {Object} [options]
 */
PIXI.interaction.InteractionManager = function(renderer, options){};

/**
 * @type {boolean}
 */
PIXI.interaction.InteractionManager.prototype.autoPreventDefault;

/**
 * @type {number}
 */
PIXI.interaction.InteractionManager.prototype.interactionFrequency;

/**
 * @type {PIXI.interaction.InteractionData}
 */
PIXI.interaction.InteractionManager.prototype.mouse;

/**
 * @type {Object}
 */
PIXI.interaction.InteractionManager.prototype.eventData;

/**
 * @type {Function}
 */
PIXI.interaction.InteractionManager.prototype.onPointerUp;

/**
 * @type {Function}
 */
PIXI.interaction.InteractionManager.prototype.onPointerCancel;

/**
 * @type {Function}
 */
PIXI.interaction.InteractionManager.prototype.onPointerDown;

/**
 * @type {Function}
 */
PIXI.interaction.InteractionManager.prototype.onPointerMove;

/**
 * @type {Function}
 */
PIXI.interaction.InteractionManager.prototype.onPointerOut;

/**
 * @type {Function}
 */
PIXI.interaction.InteractionManager.prototype.onPointerOver;

/**
 * @type {Object}
 * @memberOf PIXI.interaction
 */
PIXI.interaction.interactiveTarget = {};

/**
 * @type {boolean}
 * @memberOf PIXI.DisplayObject
 */
PIXI.interaction.interactiveTarget.interactive;

/**
 * @type {boolean}
 * @memberof PIXI.Container
 */
PIXI.interaction.interactiveTarget.interactiveChildren;

/**
 * @type {string}
 */
PIXI.interaction.interactiveTarget.cursor;

/**
 * @type {boolean}
 * @memberOf PIXI.DisplayObject
 */
PIXI.interaction.interactiveTarget.prototype.buttonMode;

/**
 * @type {Object}
 */
PIXI.extras = {};

/**
 * @typedef {{
 *     texture: PIXI.Texture,
 *     time: number
 * }}
 */
PIXI.extras.AnimatedSprite.FrameObject;

/**
 * @constructor
 * @extends PIXI.Sprite
 * @memberOf PIXI.extras
 * @param {Array<PIXI.Texture>|Array<PIXI.extras.AnimatedSprite.FrameObject>} textures
 * @param {boolean} [autoUpdate=true]
 */
PIXI.extras.AnimatedSprite = function(textures, autoUpdate){};
PIXI.extras.AnimatedSprite.prototype.stop = function(){};
PIXI.extras.AnimatedSprite.prototype.play = function(){};

/**
 * @param {number} frameNumber
 */
PIXI.extras.AnimatedSprite.prototype.gotoAndStop = function(frameNumber){};

/**
 * @type {number}
 */
PIXI.extras.AnimatedSprite.prototype.totalFrames;

/**
 * @type {Array<PIXI.Texture>}
 */
PIXI.extras.AnimatedSprite.prototype.textures;

/**
 * @type {number}
 */
PIXI.extras.AnimatedSprite.prototype.currentFrame;

/**
 * @param {number} frameNumber
 */
PIXI.extras.AnimatedSprite.prototype.gotoAndPlay = function(frameNumber){};

/**
 * @type {Function}
 */
PIXI.extras.AnimatedSprite.prototype.onFrameChange;

/**
 * @type {Function}
 */
PIXI.extras.AnimatedSprite.prototype.onLoop;

/**
 * @type {Function}
 */
PIXI.extras.AnimatedSprite.prototype.onComplete;

/**
 * @type {boolean}
 */
PIXI.extras.AnimatedSprite.prototype.playing;

/**
 * @type {boolean}
 */
PIXI.extras.AnimatedSprite.prototype.loop;

/**
 * @type {boolean}
 */
PIXI.extras.AnimatedSprite.prototype.animationSpeed;

/**
 * @param {Object|boolean} [options]
 */
PIXI.extras.AnimatedSprite.prototype.destroy = function(options){};

/**+
 * @constructor
 * @extends PIXI.Container
 * @memberof PIXI.extras
 * @param {string} text
 * @param {Object} style
 */
PIXI.extras.BitmapText = function(text, style = {}){};

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.alpha;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.textWidth;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.textHeight;

/**
 * @type {string}
 */
PIXI.extras.BitmapText.prototype.text;

/**
 * @type {PIXI.Point | number}
 */
PIXI.extras.BitmapText.prototype.anchor;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.maxWidth;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.maxHeight;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.letterSpacing;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.maxLineHeight;

/**
 * @type {string|Object}
 */
PIXI.extras.BitmapText.prototype.font;

/**
 * @type {string}
 */
PIXI.extras.BitmapText.prototype.align;

/**
 * @type {number}
 */
PIXI.extras.BitmapText.prototype.tint;

/**
 * @return {PIXI.Rectangle}
 */
PIXI.extras.BitmapText.prototype.getLocalBounds = function(){};

/**
 * @private
 */
PIXI.extras.BitmapText.prototype.updateText = function(){};

/**
 * @private
 */
PIXI.extras.BitmapText.prototype.updateTransform = function(){};

/**
 * @constructor
 * @extends PIXI.Sprite
 * @memberOf PIXI.extras
 * @param {PIXI.Texture} texture
 * @param {number} [width=100]
 * @param {number} [height=100]
 */
PIXI.extras.TilingSprite = function(texture, width = 100, height = 100){};

/**
 * @type {number}
 */
PIXI.extras.TilingSprite.prototype.clampMargin;

/**
 * @type {PIXI.ObservablePoint}
 */
PIXI.extras.TilingSprite.prototype.tileScale;

/**
 * @type {PIXI.ObservablePoint}
 */
PIXI.extras.TilingSprite.prototype.tilePosition;

/**
 * @param {PIXI.Rectangle} rect
 * @return {PIXI.Rectangle}
 */
PIXI.extras.TilingSprite.prototype.getLocalBounds = function(rect){};

/**
 * @param {PIXI.Point} point
 * @return {boolean}
 */
PIXI.extras.TilingSprite.prototype.containsPoint = function(point){};

/**
 * @param {Object|boolean} [options]
 */
PIXI.extras.TilingSprite.prototype.destroy = function(options){};

/**
 * @type {Object}
 */
PIXI.filters = {};

/**
 * @constructor
 * @extends PIXI.Filter
 * @memberOf PIXI.filters
 * @param {number} strength
 * @param {number} quality
 * @param {number} resolution
 * @param {number} [kernelSize=5]
 */
PIXI.filters.BlurFilter = function(strength, quality, resolution, kernelSize){};

/**
 * @constructor
 * @extends PIXI.Filter
 * @memberOf PIXI.filters
 * @param {number} [alpha=1]
 */
PIXI.filters.AlphaFilter = function(alpha = 1.0){};

/**
 * @constructor
 * @extends PIXI.Filter
 * @memberOf PIXI.filters
 * @param {PIXI.Sprite} sprite
 * @param {number} scale
 */
PIXI.filters.DisplacementFilter = function(sprite, scale){};

/**
 * @type {PIXI.Texture}
 */
PIXI.filters.DisplacementFilter.prototype.map;

/**
 * @constructor
 * @extends PIXI.Filter
 * @memberOf PIXI.filters
 */
PIXI.filters.ColorMatrixFilter = function(){};

/**
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.blackAndWhite = function(multiply){};

/**
 * @param {number} rotation
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.hue = function(rotation, multiply){};

/**
 * @param {number} amount
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.contrast = function(amount, multiply){};

/**
 * @param {number} amount
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.saturate = function(amount, multiply){};
PIXI.filters.ColorMatrixFilter.prototype.desaturate = function(){};

/**
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.negative = function(multiply){};

/**
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.sepia = function(multiply){};

/**
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.technicolor = function(multiply){};

/**
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.polaroid = function(multiply){};

/**
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.toBGR = function(multiply){};

/**
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.kodachrome = function(multiply){};

/**
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.browni = function(multiply){};

/**
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.vintage = function(multiply){};

/**
 * @param {number} desaturation
 * @param {number} toned
 * @param {string} lightColor
 * @param {string} darkColor
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.colorTone = function(desaturation, toned, lightColor, darkColor, multiply){};

/**
 * @param {number} intensity
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.night = function(intensity, multiply){};

/**
 * @param {number} amount
 * @param {boolean} multiply
 */
PIXI.filters.ColorMatrixFilter.prototype.predator = function(amount, multiply){};

/**
 * @type {Object}
 */
PIXI.ticker = {};

/**
 * @type {PIXI.ticker.Ticker}
 * @memberOf PIXI.ticker
 */
PIXI.ticker.shared;

/**
 * @constructor
 * @memberOf PIXI.ticker
 * @param {Function} fn
 * @param {Function} [context]
 * @param {number} [priority]
 * @param {boolean} [once]
 */
PIXI.ticker.TickerListener = function(fn, context = null, priority = 0, once = false){};

/**
 * @param {Function} fn
 * @param {Function} context
 * @return {boolean}
 */
PIXI.ticker.TickerListener.prototype.match = function(fn, context){};

/**
 * @param {number} deltaTime
 * @return {PIXI.ticker.TickerListener}
 */
PIXI.ticker.TickerListener.prototype.emit = function(deltaTime){};

/**
 * @param {PIXI.ticker.TickerListener} previous
 */
PIXI.ticker.TickerListener.prototype.connect = function(previous){};

/**
 * @param {boolean} [hard]
 * @return {PIXI.ticker.TickerListener}
 */
PIXI.ticker.TickerListener.prototype.destroy = function(hard = false){};

/**
 * @constructor
 * @memberOf PIXI.ticker
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
 * type {Object}
 */
PIXI.mesh = {};

/**
 * @constructor
 * @extends PIXI.Container
 * @memberOf PIXI.mesh
 * @param {PIXI.Texture} texture
 * @param {Float32Array} [vertices]
 * @param {Float32Array} [uvs]
 * @param {Uint16Array} [indices]
 * @param {number} [drawMode]
 */
PIXI.mesh.Mesh = function(texture, vertices, uvs, indices, drawMode){};

/**
 * @type {PIXI.Texture}
 */
PIXI.mesh.Mesh.prototype.texture;

/**
 * @type {number}
 */
PIXI.mesh.Mesh.prototype.tint;

/**
 * @param {Object|boolean} [options]
 */
PIXI.mesh.Mesh.prototype.destroy = function(options){};

/**
 * @type {number}
 */
PIXI.mesh.Mesh.DRAW_MODES.TRIANGLES;

/**
 * @type {number}
 */
PIXI.mesh.Mesh.DRAW_MODES.TRIANGLE_MESH;

/**
 * @constructor
 * @extends PIXI.mesh.Mesh
 * @memberOf PIXI.mesh
 * @param {PIXI.Texture} texture
 * @param {Array<PIXI.Point>} points
 */
PIXI.mesh.Rope = function(texture, points){};

/**
 * @constructor
 * @extends PIXI.mesh.Mesh
 * @memberOf PIXI.mesh
 * @param {PIXI.Texture} texture
 * @param {number} [verticesX]
 * @param {number} [verticesY]
 */
PIXI.mesh.Plane = function(texture, verticesX, verticesY){};

/**
 * @constructor
 * @extends PIXI.mesh.Plane
 * @memberOf PIXI.mesh
 * @param {PIXI.Texture} texture
 * @param {number} [leftWidth]
 * @param {number} [topHeight]
 * @param {number} [rightWidth]
 * @param {number} [bottomHeight]
 */
PIXI.mesh.NineSlicePlane = function(texture, leftWidth, topHeight, rightWidth, bottomHeight){};

/**
 * @type {number}
 */
PIXI.mesh.NineSlicePlane.prototype.width;

/**
 * @type {number}
 */
PIXI.mesh.NineSlicePlane.prototype.height;

/**
 * @type {number}
 */
PIXI.mesh.NineSlicePlane.prototype.leftWidth;

/**
 * @type {number}
 */
PIXI.mesh.NineSlicePlane.prototype.rightWidth;

/**
 * @type {number}
 */
PIXI.mesh.NineSlicePlane.prototype.topHeight;

/**
 * @type {number}
 */
PIXI.mesh.NineSlicePlane.prototype.bottomHeight;

/**
 * @constructor
 * @memberOf PIXI
 * @param {PIXI.CanvasRenderer} renderer
 */
PIXI.MeshSpriteRenderer = function(renderer){};

/**
 * @param {PIXI.mesh.Mesh} mesh
 */
PIXI.MeshSpriteRenderer.prototype.render = function(mesh){};

/**
 * @type {Object}
 */
PIXI.particles = {};

/**
 * @constructor
 * @extends PIXI.Container
 * @memberOf PIXI.particles
 * @param {number} [maxSize]
 * @param {Object} [properties]
 * @param {number} [batchSize]
 * @param {boolean} [autoResize]
 */
PIXI.particles.ParticleContainer = function(maxSize, properties, batchSize, autoResize = false){};

/**
 * @type {number}
 */
PIXI.particles.ParticleContainer.prototype.tint;

/**
 * @param {Object} properties
 */
PIXI.particles.ParticleContainer.prototype.setProperties = function(properties){};

/**
 * @param {Object|boolean} [options]
 */
PIXI.particles.ParticleContainer.prototype.destroy = function(options){};

/**
 * @constructor
 * @extends PIXI.Shader
 * @memberOf PIXI
 * @param {PIXI.Shader} gl
 */
PIXI.ParticleShader = function(gl){};




