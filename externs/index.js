/** @typedef {number} */
var Handle;

/** @typedef {number} */
var Hash;

/** @typedef {number} */
var HashOrString;

/** @typedef {!Array<?>} */
var RGB;

/** @typedef {!Array<?>} */
var RGBA;

/** @typedef {!Array<?>} */
var Array3d;

/** @typedef {!Array<?>} */
var Array2d;

/** @typedef {{blips: !BlipMpPool, browsers: !BrowserMpPool, cameras: !CameraMpPool, checkpoints: !CheckpointMpPool, colshapes: !ColshapeMpPool, discord: !DiscordMp, events: !EventMpPool, game: {app: !GameAppMp, audio: !GameAudioMp, brain: !GameBrainMp, cam: !GameCamMp, controls: !GameControlsMp, cutscene: !GameCutsceneMp, datafile: !GameDatafileMp, decisionevent: !GameDecisioneventMp, decorator: !GameDecoratorMp, dlc1: !GameDlc1Mp, dlc2: !GameDlc2Mp, entity: !GameEntityMp, fire: !GameFireMp, gameplay: !GameGameplayMp, graphics: !GameGraphicsMp, interior: !GameInteriorMp, itemset: !GameItemsetMp, mobile: !GameMobileMp, object: !GameObjectMp, pathfind: !GamePathfindMp, ped: !GamePedMp, player: !GamePlayerMp, rope: !GameRopeMp, script: !GameScriptMp, stats: !GameStatsMp, streaming: !GameStreamingMp, system: !GameSystemMp, time: !GameTimeMp, ui: !GameUiMp, unk: !GameUnkMp, recorder: !GameRecorderMp, vehicle: !GameVehicleMp, water: !GameWaterMp, weapon: !GameWeaponMp, worldprobe: !GameWorldprobeMp, zone: !GameZoneMp, invoke: function(string, ...?): ?, joaat: ?}, gui: {chat: !GuiChatMp, cursor: !GuiCursorMp, execute: function(string): void, takeScreenshot: function(string, number, number, number): void}, keys: !KeysMp, labels: !TextLabelMpPool, markers: !MarkerMpPool, nametags: !NametagsMp, objects: !ObjectMpPool, peds: !PedMpPool, pickups: !PickupMpPool, players: !PlayerMpPool, raycasting: !RaycastingMp, storage: !StorageMp, Vector3: function(new: (?), number, number, number): ?, vehicles: !VehicleMpPool, voiceChat: !VoiceChatMp}} */
var Mp;

/** @typedef {{app: !GameAppMp, audio: !GameAudioMp, brain: !GameBrainMp, cam: !GameCamMp, controls: !GameControlsMp, cutscene: !GameCutsceneMp, datafile: !GameDatafileMp, decisionevent: !GameDecisioneventMp, decorator: !GameDecoratorMp, dlc1: !GameDlc1Mp, dlc2: !GameDlc2Mp, entity: !GameEntityMp, fire: !GameFireMp, gameplay: !GameGameplayMp, graphics: !GameGraphicsMp, interior: !GameInteriorMp, itemset: !GameItemsetMp, mobile: !GameMobileMp, object: !GameObjectMp, pathfind: !GamePathfindMp, ped: !GamePedMp, player: !GamePlayerMp, rope: !GameRopeMp, script: !GameScriptMp, stats: !GameStatsMp, streaming: !GameStreamingMp, system: !GameSystemMp, time: !GameTimeMp, ui: !GameUiMp, unk: !GameUnkMp, recorder: !GameRecorderMp, vehicle: !GameVehicleMp, water: !GameWaterMp, weapon: !GameWeaponMp, worldprobe: !GameWorldprobeMp, zone: !GameZoneMp, invoke: function(string, ...?): ?, joaat: ?}} */
var GameMp;

/** @typedef {{chat: !GuiChatMp, cursor: !GuiCursorMp, execute: function(string): void, takeScreenshot: function(string, number, number, number): void}} */
var GuiMp;
/**
 * @extends {EntityMp}
 * @record
 * @struct
 */
function BlipMp() {}

/**
 * @return {void}
 */
BlipMp.prototype.addTextComponentSubstringName = function() {};

/**
 * @return {boolean}
 */
BlipMp.prototype.doesExist = function() {};

/**
 * @return {void}
 */
BlipMp.prototype.endTextCommandSetName = function() {};

/**
 * @return {number}
 */
BlipMp.prototype.getAlpha = function() {};

/**
 * @return {number}
 */
BlipMp.prototype.getColour = function() {};

/**
 * @return {function(new: (?), number, number, number): ?}
 */
BlipMp.prototype.getCoords = function() {};

/**
 * @return {!BlipMp}
 */
BlipMp.prototype.getFirstInfoId = function() {};

/**
 * @return {number}
 */
BlipMp.prototype.getHudColour = function() {};

/**
 * @return {number}
 */
BlipMp.prototype.getInfoIdDisplay = function() {};

/**
 * @return {number}
 */
BlipMp.prototype.getInfoIdEntityIndex = function() {};

/**
 * @return {!PickupMp}
 */
BlipMp.prototype.getInfoIdPickupIndex = function() {};

/**
 * @return {number}
 */
BlipMp.prototype.getInfoIdType = function() {};

/**
 * @return {!BlipMp}
 */
BlipMp.prototype.getNextInfoId = function() {};

/**
 * @return {number}
 */
BlipMp.prototype.getSprite = function() {};

/**
 * @return {void}
 */
BlipMp.prototype.hideNumberOn = function() {};

/**
 * @return {boolean}
 */
BlipMp.prototype.isFlashing = function() {};

/**
 * @return {boolean}
 */
BlipMp.prototype.isMissionCreator = function() {};

/**
 * @return {boolean}
 */
BlipMp.prototype.isOnMinimap = function() {};

/**
 * @return {boolean}
 */
BlipMp.prototype.isShortRange = function() {};

/**
 * @return {void}
 */
BlipMp.prototype.pulse = function() {};

/**
 * @param {number|string} alpha_or_alphaLevel
 * @param {boolean=} skin
 * @return {void}
 */
BlipMp.prototype.setAlpha = function(alpha_or_alphaLevel, skin) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
BlipMp.prototype.setAsFriendly = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
BlipMp.prototype.setAsMissionCreator = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
BlipMp.prototype.setAsShortRange = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
BlipMp.prototype.setBright = function(toggle) {};

/**
 * @param {number} index
 * @return {void}
 */
BlipMp.prototype.setCategory = function(index) {};

/**
 * @param {number} color
 * @return {void}
 */
BlipMp.prototype.setColour = function(color) {};

/**
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @return {void}
 */
BlipMp.prototype.setCoords = function(posX, posY, posZ) {};

/**
 * @param {number} displayId
 * @return {void}
 */
BlipMp.prototype.setDisplay = function(displayId) {};

/**
 * @param {number} opacity
 * @param {number} duration
 * @return {void}
 */
BlipMp.prototype.setFade = function(opacity, duration) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
BlipMp.prototype.setFlashes = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
BlipMp.prototype.setFlashesAlternate = function(toggle) {};

/**
 * @param {?} p1
 * @return {void}
 */
BlipMp.prototype.setFlashInterval = function(p1) {};

/**
 * @param {number} duration
 * @return {void}
 */
BlipMp.prototype.setFlashTimer = function(duration) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
BlipMp.prototype.setHighDetail = function(toggle) {};

/**
 * @param {string} gxtEntry
 * @return {void}
 */
BlipMp.prototype.setNameFromTextFile = function(gxtEntry) {};

/**
 * @param {!PlayerMp} player
 * @return {void}
 */
BlipMp.prototype.setNameToPlayerName = function(player) {};

/**
 * @param {number} priority
 * @return {void}
 */
BlipMp.prototype.setPriority = function(priority) {};

/**
 * @param {number} rotation
 * @return {void}
 */
BlipMp.prototype.setRotation = function(rotation) {};

/**
 * @param {boolean} enabled
 * @return {void}
 */
BlipMp.prototype.setRoute = function(enabled) {};

/**
 * @param {number} colour
 * @return {void}
 */
BlipMp.prototype.setRouteColour = function(colour) {};

/**
 * @param {number} scale
 * @return {void}
 */
BlipMp.prototype.setScale = function(scale) {};

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {void}
 */
BlipMp.prototype.setSecondaryColour = function(r, g, b) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
BlipMp.prototype.setShowCone = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
BlipMp.prototype.setShowHeadingIndicator = function(toggle) {};

/**
 * @param {number} spriteId
 * @return {void}
 */
BlipMp.prototype.setSprite = function(spriteId) {};

/**
 * @param {number} number
 * @return {void}
 */
BlipMp.prototype.showNumberOn = function(number) {};
/**
 * @record
 * @struct
 */
function EntityMp() {}
/** @type {number} */
EntityMp.prototype.alpha;
/** @type {number} */
EntityMp.prototype.dimension;
/** @type {number} */
EntityMp.prototype.model;
/** @type {function(new: (?), number, number, number): ?} */
EntityMp.prototype.position;
/** @type {?} */
EntityMp.prototype.handle;
/** @type {number} */
EntityMp.prototype.id;
/** @type {number} */
EntityMp.prototype.remoteId;
/** @type {string} */
EntityMp.prototype.type;

/**
 * @param {number} forceType
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} xRot
 * @param {number} yRot
 * @param {number} zRot
 * @param {number} boneIndex
 * @param {number} isRel
 * @param {boolean} p9
 * @param {boolean} highForce
 * @param {boolean} p11
 * @param {boolean} p12
 * @return {void}
 */
EntityMp.prototype.applyForceTo = function(forceType, x, y, z, xRot, yRot, zRot, boneIndex, isRel, p9, highForce, p11, p12) {};

/**
 * @param {number} forceType
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} p4
 * @param {boolean} isRel
 * @param {boolean} highForce
 * @param {boolean} p7
 * @return {void}
 */
EntityMp.prototype.applyForceToCenterOfMass = function(forceType, x, y, z, p4, isRel, highForce, p7) {};

/**
 * @param {number} entity
 * @param {number} boneIndex
 * @param {number} xPos
 * @param {number} yPos
 * @param {number} zPos
 * @param {number} xRot
 * @param {number} yRot
 * @param {number} zRot
 * @param {boolean} p8
 * @param {boolean} useSoftPinning
 * @param {boolean} collision
 * @param {boolean} isPed
 * @param {number} vertexIndex
 * @param {boolean} fixedRot
 * @return {void}
 */
EntityMp.prototype.attachTo = function(entity, boneIndex, xPos, yPos, zPos, xRot, yRot, zRot, p8, useSoftPinning, collision, isPed, vertexIndex, fixedRot) {};

/**
 * @param {number} entity
 * @param {number} boneIndex1
 * @param {number} boneIndex2
 * @param {number} xPos1
 * @param {number} yPos1
 * @param {number} zPos1
 * @param {number} xPos2
 * @param {number} yPos2
 * @param {number} zPos2
 * @param {number} xRot
 * @param {number} yRot
 * @param {number} zRot
 * @param {number} breakForce
 * @param {boolean} fixedRot
 * @param {boolean} p14
 * @param {boolean} collision
 * @param {boolean} p16
 * @param {number} p17
 * @return {void}
 */
EntityMp.prototype.attachToPhysically = function(entity, boneIndex1, boneIndex2, xPos1, yPos1, zPos1, xPos2, yPos2, zPos2, xRot, yRot, zRot, breakForce, fixedRot, p14, collision, p16, p17) {};

/**
 * @return {void}
 */
EntityMp.prototype.clearLastDamage = function() {};

/**
 * @return {void}
 */
EntityMp.prototype.destroy = function() {};

/**
 * @param {boolean} p0
 * @param {boolean} collision
 * @return {void}
 */
EntityMp.prototype.detach = function(p0, collision) {};

/**
 * @param {function(new: (?), number, number, number): ?} position
 * @return {number}
 */
EntityMp.prototype.dist = function(position) {};

/**
 * @param {function(new: (?), number, number, number): ?} position
 * @return {number}
 */
EntityMp.prototype.distSquared = function(position) {};

/**
 * @param {boolean} p0
 * @return {boolean}
 */
EntityMp.prototype.doesBelongToThisScript = function(p0) {};

/**
 * @return {boolean}
 */
EntityMp.prototype.doesExist = function() {};

/**
 * @return {boolean}
 */
EntityMp.prototype.doesHaveDrawable = function() {};

/**
 * @return {boolean}
 */
EntityMp.prototype.doesHavePhysics = function() {};

/**
 * @return {void}
 */
EntityMp.prototype.forceAiAndAnimationUpdate = function() {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
EntityMp.prototype.freezePosition = function(toggle) {};

/**
 * @return {number}
 */
EntityMp.prototype.getAlpha = function() {};

/**
 * @param {string} animDict
 * @param {string} animName
 * @return {number}
 */
EntityMp.prototype.getAnimCurrentTime = function(animDict, animName) {};

/**
 * @param {string} animDict
 * @param {string} animName
 * @return {number}
 */
EntityMp.prototype.getAnimTotalTime = function(animDict, animName) {};

/**
 * @return {number}
 */
EntityMp.prototype.getAttachedTo = function() {};

/**
 * @param {string} boneName
 * @return {number}
 */
EntityMp.prototype.getBoneIndexByName = function(boneName) {};

/**
 * @return {function(new: (?), number, number, number): ?}
 */
EntityMp.prototype.getCollisionNormalOfLastHitFor = function() {};

/**
 * @param {boolean} alive
 * @return {function(new: (?), number, number, number): ?}
 */
EntityMp.prototype.getCoords = function(alive) {};

/**
 * @return {function(new: (?), number, number, number): ?}
 */
EntityMp.prototype.getForwardVector = function() {};

/**
 * @return {number}
 */
EntityMp.prototype.getForwardX = function() {};

/**
 * @return {number}
 */
EntityMp.prototype.getForwardY = function() {};

/**
 * @return {number}
 */
EntityMp.prototype.getHeading = function() {};

/**
 * @return {number}
 */
EntityMp.prototype.getHealth = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} atTop
 * @param {boolean} inWorldCoords
 * @return {number}
 */
EntityMp.prototype.getHeight = function(x, y, z, atTop, inWorldCoords) {};

/**
 * @return {number}
 */
EntityMp.prototype.getHeightAboveGround = function() {};

/**
 * @return {number}
 */
EntityMp.prototype.getLastMaterialHitBy = function() {};

/**
 * @return {number}
 */
EntityMp.prototype.getLodDist = function() {};

/**
 * @param {function(new: (?), number, number, number): ?} rightVector
 * @param {function(new: (?), number, number, number): ?} forwardVector
 * @param {function(new: (?), number, number, number): ?} upVector
 * @param {function(new: (?), number, number, number): ?} position
 * @return {{rightVector: function(new: (?), number, number, number): ?, forwardVector: ?, upVector: ?, position: ?}}
 */
EntityMp.prototype.getMatrix = function(rightVector, forwardVector, upVector, position) {};

/**
 * @return {number}
 */
EntityMp.prototype.getMaxHealth = function() {};

/**
 * @return {number}
 */
EntityMp.prototype.getModel = function() {};

/**
 * @return {number}
 */
EntityMp.prototype.getNearestPlayerTo = function() {};

/**
 * @param {number} team
 * @return {number}
 */
EntityMp.prototype.getNearestPlayerToOnTeam = function(team) {};

/**
 * @return {number}
 */
EntityMp.prototype.getObjectIndexFromIndex = function() {};

/**
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @return {function(new: (?), number, number, number): ?}
 */
EntityMp.prototype.getOffsetFromGivenWorldCoords = function(posX, posY, posZ) {};

/**
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @return {function(new: (?), number, number, number): ?}
 */
EntityMp.prototype.getOffsetFromInWorldCoords = function(offsetX, offsetY, offsetZ) {};

/**
 * @return {number}
 */
EntityMp.prototype.getPedIndexFromIndex = function() {};

/**
 * @return {number}
 */
EntityMp.prototype.getPhysicsHeading = function() {};

/**
 * @return {number}
 */
EntityMp.prototype.getPitch = function() {};

/**
 * @return {number}
 */
EntityMp.prototype.getPopulationType = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} w
 * @return {function(new: (function(new: (?), number, number, number): ?), number, number, number, number): ?}
 */
EntityMp.prototype.getQuaternion = function(x, y, z, w) {};

/**
 * @return {number}
 */
EntityMp.prototype.getRoll = function() {};

/**
 * @param {number} rotationOrder
 * @return {function(new: (?), number, number, number): ?}
 */
EntityMp.prototype.getRotation = function(rotationOrder) {};

/**
 * @return {function(new: (?), number, number, number): ?}
 */
EntityMp.prototype.getRotationVelocity = function() {};

/**
 * @param {number} script
 * @return {number}
 */
EntityMp.prototype.getScript = function(script) {};

/**
 * @return {number}
 */
EntityMp.prototype.getSpeed = function() {};

/**
 * @param {boolean} relative
 * @return {function(new: (?), number, number, number): ?}
 */
EntityMp.prototype.getSpeedVector = function(relative) {};

/**
 * @return {number}
 */
EntityMp.prototype.getSubmergedLevel = function() {};

/**
 * @return {number}
 */
EntityMp.prototype.getType = function() {};

/**
 * @return {number}
 */
EntityMp.prototype.getUprightValue = function() {};

/**
 * @param {string} value
 * @return {?}
 */
EntityMp.prototype.getVariable = function(value) {};

/**
 * @return {number}
 */
EntityMp.prototype.getVehicleIndexFromIndex = function() {};

/**
 * @return {function(new: (?), number, number, number): ?}
 */
EntityMp.prototype.getVelocity = function() {};

/**
 * @param {number} boneIndex
 * @return {function(new: (?), number, number, number): ?}
 */
EntityMp.prototype.getWorldPositionOfBone = function(boneIndex) {};

/**
 * @param {number} actionHash
 * @return {boolean}
 */
EntityMp.prototype.hasAnimEventFired = function(actionHash) {};

/**
 * @param {string} animDict
 * @param {string} animName
 * @param {number} p2
 * @return {boolean}
 */
EntityMp.prototype.hasAnimFinished = function(animDict, animName, p2) {};

/**
 * @param {number} entity
 * @param {boolean} p1
 * @return {boolean}
 */
EntityMp.prototype.hasBeenDamagedBy = function(entity, p1) {};

/**
 * @return {boolean}
 */
EntityMp.prototype.hasBeenDamagedByAnyObject = function() {};

/**
 * @return {boolean}
 */
EntityMp.prototype.hasBeenDamagedByAnyPed = function() {};

/**
 * @return {boolean}
 */
EntityMp.prototype.hasBeenDamagedByAnyVehicle = function() {};

/**
 * @param {number} entity
 * @param {number} traceType
 * @return {boolean}
 */
EntityMp.prototype.hasClearLosTo = function(entity, traceType) {};

/**
 * @param {number} entity
 * @return {boolean}
 */
EntityMp.prototype.hasClearLosToInFront = function(entity) {};

/**
 * @return {boolean}
 */
EntityMp.prototype.hasCollidedWithAnything = function() {};

/**
 * @return {boolean}
 */
EntityMp.prototype.hasCollisionLoadedAround = function() {};

/**
 * @return {boolean}
 */
EntityMp.prototype.isAMission = function() {};

/**
 * @return {boolean}
 */
EntityMp.prototype.isAnObject = function() {};

/**
 * @return {boolean}
 */
EntityMp.prototype.isAPed = function() {};

/**
 * @param {number} entity
 * @param {number} xSize
 * @param {number} ySize
 * @param {number} zSize
 * @param {boolean} p4
 * @param {boolean} p5
 * @param {number} p6
 * @return {boolean}
 */
EntityMp.prototype.isAt = function(entity, xSize, ySize, zSize, p4, p5, p6) {};

/**
 * @param {number} xPos
 * @param {number} yPos
 * @param {number} zPos
 * @param {number} xSize
 * @param {number} ySize
 * @param {number} zSize
 * @param {boolean} p6
 * @param {boolean} p7
 * @param {number} p8
 * @return {boolean}
 */
EntityMp.prototype.isAtCoord = function(xPos, yPos, zPos, xSize, ySize, zSize, p6, p7, p8) {};

/**
 * @return {boolean}
 */
EntityMp.prototype.isAttached = function() {};

/**
 * @param {number} to
 * @return {boolean}
 */
EntityMp.prototype.isAttachedTo = function(to) {};

/**
 * @return {boolean}
 */
EntityMp.prototype.isAttachedToAnyObject = function() {};

/**
 * @return {boolean}
 */
EntityMp.prototype.isAttachedToAnyPed = function() {};

/**
 * @return {boolean}
 */
EntityMp.prototype.isAttachedToAnyVehicle = function() {};

/**
 * @return {boolean}
 */
EntityMp.prototype.isAVehicle = function() {};

/**
 * @return {boolean}
 */
EntityMp.prototype.isCollisonDisabled = function() {};

/**
 * @return {boolean}
 */
EntityMp.prototype.isDead = function() {};

/**
 * @return {boolean}
 */
EntityMp.prototype.isInAir = function() {};

/**
 * @param {number} originX
 * @param {number} originY
 * @param {number} originZ
 * @param {number} edgeX
 * @param {number} edgeY
 * @param {number} edgeZ
 * @param {number} angle
 * @param {boolean} p7
 * @param {boolean} p8
 * @param {?} p9
 * @return {boolean}
 */
EntityMp.prototype.isInAngledArea = function(originX, originY, originZ, edgeX, edgeY, edgeZ, angle, p7, p8, p9) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {boolean} p6
 * @param {boolean} p7
 * @param {?} p8
 * @return {boolean}
 */
EntityMp.prototype.isInArea = function(x1, y1, z1, x2, y2, z2, p6, p7, p8) {};

/**
 * @return {boolean}
 */
EntityMp.prototype.isInWater = function() {};

/**
 * @param {string} zone
 * @return {boolean}
 */
EntityMp.prototype.isInZone = function(zone) {};

/**
 * @return {boolean}
 */
EntityMp.prototype.isOccluded = function() {};

/**
 * @return {boolean}
 */
EntityMp.prototype.isOnScreen = function() {};

/**
 * @param {string} animDict
 * @param {string} animName
 * @param {number} p2
 * @return {boolean}
 */
EntityMp.prototype.isPlayingAnim = function(animDict, animName, p2) {};

/**
 * @return {boolean}
 */
EntityMp.prototype.isStatic = function() {};

/**
 * @param {number} targetEntity
 * @return {boolean}
 */
EntityMp.prototype.isTouching = function(targetEntity) {};

/**
 * @param {number} modelHash
 * @return {boolean}
 */
EntityMp.prototype.isTouchingModel = function(modelHash) {};

/**
 * @param {number} angle
 * @return {boolean}
 */
EntityMp.prototype.isUpright = function(angle) {};

/**
 * @return {boolean}
 */
EntityMp.prototype.isUpsidedown = function() {};

/**
 * @return {boolean}
 */
EntityMp.prototype.isVisible = function() {};

/**
 * @return {boolean}
 */
EntityMp.prototype.isVisibleToScript = function() {};

/**
 * @return {boolean}
 */
EntityMp.prototype.isWaitingForWorldCollision = function() {};

/**
 * @param {string} animName
 * @param {string} propName
 * @param {number} p2
 * @param {boolean} p3
 * @param {boolean} p4
 * @param {boolean} p5
 * @param {number} delta
 * @param {?} bitset
 * @return {boolean}
 */
EntityMp.prototype.playAnim = function(animName, propName, p2, p3, p4, p5, delta, bitset) {};

/**
 * @param {number} syncedScene
 * @param {string} animation
 * @param {string} propName
 * @param {number} p3
 * @param {number} p4
 * @param {?} p5
 * @param {number} p6
 * @return {boolean}
 */
EntityMp.prototype.playSynchronizedAnim = function(syncedScene, animation, propName, p3, p4, p5, p6) {};

/**
 * @return {void}
 */
EntityMp.prototype.processAttachments = function() {};

/**
 * @return {void}
 */
EntityMp.prototype.resetAlpha = function() {};

/**
 * @param {number} alpha_or_alphaLevel
 * @param {boolean=} skin
 * @return {void}
 */
EntityMp.prototype.setAlpha = function(alpha_or_alphaLevel, skin) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
EntityMp.prototype.setAlwaysPrerender = function(toggle) {};

/**
 * @param {string} animDict
 * @param {string} animName
 * @param {number} time
 * @return {void}
 */
EntityMp.prototype.setAnimCurrentTime = function(animDict, animName, time) {};

/**
 * @param {string} animDict
 * @param {string} animName
 * @param {number} speedMultiplier
 * @return {void}
 */
EntityMp.prototype.setAnimSpeed = function(animDict, animName, speedMultiplier) {};

/**
 * @param {boolean} p0
 * @param {boolean} byThisScript
 * @return {void}
 */
EntityMp.prototype.setAsMission = function(p0, byThisScript) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
EntityMp.prototype.setCanBeDamaged = function(toggle) {};

/**
 * @param {boolean} p0
 * @param {?} p1
 * @return {void}
 */
EntityMp.prototype.setCanBeDamagedByRelationshipGroup = function(p0, p1) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
EntityMp.prototype.setCanBeTargetedWithoutLos = function(toggle) {};

/**
 * @param {boolean} toggle
 * @param {boolean} keepPhysics
 * @return {void}
 */
EntityMp.prototype.setCollision = function(toggle, keepPhysics) {};

/**
 * @param {number} xPos
 * @param {number} yPos
 * @param {number} zPos
 * @param {boolean} xAxis
 * @param {boolean} yAxis
 * @param {boolean} zAxis
 * @param {boolean} clearArea
 * @return {void}
 */
EntityMp.prototype.setCoords = function(xPos, yPos, zPos, xAxis, yAxis, zAxis, clearArea) {};

/**
 * @param {number} xPos
 * @param {number} yPos
 * @param {number} zPos
 * @param {number} xAxis
 * @param {number} yAxis
 * @param {number} zAxis
 * @param {boolean} clearArea
 * @return {void}
 */
EntityMp.prototype.setCoords2 = function(xPos, yPos, zPos, xAxis, yAxis, zAxis, clearArea) {};

/**
 * @param {number} xPos
 * @param {number} yPos
 * @param {number} zPos
 * @param {number} xAxis
 * @param {number} yAxis
 * @param {number} zAxis
 * @return {void}
 */
EntityMp.prototype.setCoordsNoOffset = function(xPos, yPos, zPos, xAxis, yAxis, zAxis) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
EntityMp.prototype.setDynamic = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
EntityMp.prototype.setHasGravity = function(toggle) {};

/**
 * @param {number} heading
 * @return {void}
 */
EntityMp.prototype.setHeading = function(heading) {};

/**
 * @param {number} health
 * @return {void}
 */
EntityMp.prototype.setHealth = function(health) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
EntityMp.prototype.setInvincible = function(toggle) {};

/**
 * @param {boolean} p0
 * @param {number} p1
 * @return {void}
 */
EntityMp.prototype.setIsTargetPriority = function(p0, p1) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
EntityMp.prototype.setLights = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
EntityMp.prototype.setLoadCollisionFlag = function(toggle) {};

/**
 * @param {number} value
 * @return {void}
 */
EntityMp.prototype.setLodDist = function(value) {};

/**
 * @param {number} value
 * @return {void}
 */
EntityMp.prototype.setMaxHealth = function(value) {};

/**
 * @param {number} speed
 * @return {void}
 */
EntityMp.prototype.setMaxSpeed = function(speed) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
EntityMp.prototype.setMotionBlur = function(toggle) {};

/**
 * @param {number} entity
 * @param {boolean} collision
 * @return {void}
 */
EntityMp.prototype.setNoCollision = function(entity, collision) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
EntityMp.prototype.setOnlyDamagedByPlayer = function(toggle) {};

/**
 * @param {boolean} p0
 * @param {?} p1
 * @return {void}
 */
EntityMp.prototype.setOnlyDamagedByRelationshipGroup = function(p0, p1) {};

/**
 * @param {boolean} bulletProof
 * @param {boolean} fireProof
 * @param {boolean} explosionProof
 * @param {boolean} collisionProof
 * @param {boolean} meleeProof
 * @param {boolean} p5
 * @param {boolean} p6
 * @param {boolean} drownProof
 * @return {void}
 */
EntityMp.prototype.setProofs = function(bulletProof, fireProof, explosionProof, collisionProof, meleeProof, p5, p6, drownProof) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} w
 * @return {void}
 */
EntityMp.prototype.setQuaternion = function(x, y, z, w) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
EntityMp.prototype.setRecordsCollisions = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
EntityMp.prototype.setRenderScorched = function(toggle) {};

/**
 * @param {number} pitch
 * @param {number} roll
 * @param {number} yaw
 * @param {number} rotationOrder
 * @param {boolean} p4
 * @return {void}
 */
EntityMp.prototype.setRotation = function(pitch, roll, yaw, rotationOrder, p4) {};

/**
 * @param {number} state
 * @return {void}
 */
EntityMp.prototype.setTrafficlightOverride = function(state) {};

/**
 * @param {string} key
 * @param {?} value
 * @return {?}
 */
EntityMp.prototype.setVariable = function(key, value) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
EntityMp.prototype.setVelocity = function(x, y, z) {};

/**
 * @param {boolean} toggle
 * @param {boolean} p1
 * @return {void}
 */
EntityMp.prototype.setVisible = function(toggle, p1) {};

/**
 * @param {string} animation
 * @param {string} animGroup
 * @param {number} p2
 * @return {void}
 */
EntityMp.prototype.stopAnim = function(animation, animGroup, p2) {};

/**
 * @param {number} p0
 * @param {boolean} p1
 * @return {boolean}
 */
EntityMp.prototype.stopSynchronizedAnim = function(p0, p1) {};
/**
 * @extends {EntityMp}
 * @record
 * @struct
 */
function CheckpointMp() {}
/**
 * @extends {EntityMp}
 * @record
 * @struct
 */
function ColshapeMp() {}
/**
 * @extends {EntityMp}
 * @record
 * @struct
 */
function MarkerMp() {}
/**
 * @extends {EntityMp}
 * @record
 * @struct
 */
function ObjectMp() {}

/**
 * @return {boolean}
 */
ObjectMp.prototype.hasBeenBroken = function() {};

/**
 * @return {boolean}
 */
ObjectMp.prototype.isVisible = function() {};

/**
 * @return {void}
 */
ObjectMp.prototype.markForDeletion = function() {};

/**
 * @return {boolean}
 */
ObjectMp.prototype.placeOnGroundProperly = function() {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
ObjectMp.prototype.setActivatePhysicsAsSoonAsItIsUnfrozen = function(toggle) {};

/**
 * @param {number} weight
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} gravity
 * @param {number} p6
 * @param {number} p7
 * @param {number} p8
 * @param {number} p9
 * @param {number} buoyancy
 * @return {void}
 */
ObjectMp.prototype.setPhysicsParams = function(weight, p1, p2, p3, p4, gravity, p6, p7, p8, p9, buoyancy) {};

/**
 * @param {boolean} targettable
 * @return {void}
 */
ObjectMp.prototype.setTargettable = function(targettable) {};

/**
 * @param {number} toX
 * @param {number} toY
 * @param {number} toZ
 * @param {number} speedX
 * @param {number} speedY
 * @param {number} speedZ
 * @param {boolean} collision
 * @return {boolean}
 */
ObjectMp.prototype.slide = function(toX, toY, toZ, speedX, speedY, speedZ, collision) {};
/**
 * @extends {EntityMp}
 * @record
 * @struct
 */
function PedMp() {}
/** @type {function(new: (?), number, number, number): ?} */
PedMp.prototype.spawnPosition;
/**
 * @extends {EntityMp}
 * @record
 * @struct
 */
function PickupMp() {}
/**
 * @extends {EntityMp}
 * @record
 * @struct
 */
function PlayerMp() {}
/** @type {number} */
PlayerMp.prototype.armour;
/** @type {number} */
PlayerMp.prototype.eyeColour;
/** @type {number} */
PlayerMp.prototype.hairColour;
/** @type {number} */
PlayerMp.prototype.hairHighlightColour;
/** @type {number} */
PlayerMp.prototype.heading;
/** @type {number} */
PlayerMp.prototype.health;
/** @type {string} */
PlayerMp.prototype.name;
/** @type {boolean} */
PlayerMp.prototype.voiceAutoVolume;
/** @type {number} */
PlayerMp.prototype.voiceVolume;
/** @type {?} */
PlayerMp.prototype.voice3d;
/** @type {number} */
PlayerMp.prototype.weapon;
/** @type {string} */
PlayerMp.prototype.action;
/** @type {boolean} */
PlayerMp.prototype.aimTarget;
/** @type {string} */
PlayerMp.prototype.ip;
/** @type {boolean} */
PlayerMp.prototype.isAiming;
/** @type {boolean} */
PlayerMp.prototype.isClimbing;
/** @type {boolean} */
PlayerMp.prototype.isEnteringVehicle;
/** @type {boolean} */
PlayerMp.prototype.isInCover;
/** @type {boolean} */
PlayerMp.prototype.isJumping;
/** @type {boolean} */
PlayerMp.prototype.isLeavingVehicle;
/** @type {boolean} */
PlayerMp.prototype.isVoiceActive;
/** @type {number} */
PlayerMp.prototype.ping;
/** @type {number} */
PlayerMp.prototype.seat;
/** @type {!VehicleMp} */
PlayerMp.prototype.vehicle;

/**
 * @param {number} ped2
 * @return {void}
 */
PlayerMp.prototype.addVehicleSubtaskAttack = function(ped2) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
PlayerMp.prototype.addVehicleSubtaskAttackCoord = function(x, y, z) {};

/**
 * @param {number} boneIndex
 * @param {number} xRot
 * @param {number} yRot
 * @param {number} zRot
 * @param {string} woundType
 * @return {void}
 */
PlayerMp.prototype.applyBlood = function(boneIndex, xRot, yRot, zRot, woundType) {};

/**
 * @param {?} p1
 * @param {number} p2
 * @param {number} p3
 * @param {?} p4
 * @return {void}
 */
PlayerMp.prototype.applyBloodByZone = function(p1, p2, p3, p4) {};

/**
 * @param {?} p1
 * @param {number} p2
 * @param {number} p3
 * @param {?} p4
 * @return {void}
 */
PlayerMp.prototype.applyBloodDamageByZone = function(p1, p2, p3, p4) {};

/**
 * @param {?} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {?} p6
 * @param {number} p7
 * @param {?} p8
 * @return {void}
 */
PlayerMp.prototype.applyBloodSpecific = function(p1, p2, p3, p4, p5, p6, p7, p8) {};

/**
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {number} p7
 * @param {boolean} p8
 * @param {string} p9
 * @return {void}
 */
PlayerMp.prototype.applyDamageDecal = function(p1, p2, p3, p4, p5, p6, p7, p8, p9) {};

/**
 * @param {string} damagePack
 * @param {number} damage
 * @param {number} mult
 * @return {void}
 */
PlayerMp.prototype.applyDamagePack = function(damagePack, damage, mult) {};

/**
 * @param {number} damageAmount
 * @param {boolean} p2
 * @return {void}
 */
PlayerMp.prototype.applyDamageTo = function(damageAmount, p2) {};

/**
 * @param {number} target
 * @return {boolean}
 */
PlayerMp.prototype.canInCombatSeeTarget = function(target) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.canKnockOffVehicle = function() {};

/**
 * @param {number} ped
 * @return {boolean}
 */
PlayerMp.prototype.canPedHear = function(ped) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.canRagdoll = function() {};

/**
 * @param {number} ped
 * @param {boolean} b2
 * @param {boolean} b3
 * @return {void}
 */
PlayerMp.prototype.changePed = function(ped, b2, b3) {};

/**
 * @return {void}
 */
PlayerMp.prototype.clearAllProps = function() {};

/**
 * @param {number} stance
 * @param {number} p2
 * @return {void}
 */
PlayerMp.prototype.clearAlternateMovementAnim = function(stance, p2) {};

/**
 * @return {void}
 */
PlayerMp.prototype.clearBloodDamage = function() {};

/**
 * @param {number} p1
 * @return {void}
 */
PlayerMp.prototype.clearBloodDamageByZone = function(p1) {};

/**
 * @param {number} p1
 * @param {string} p2
 * @return {void}
 */
PlayerMp.prototype.clearDamageDecalByZone = function(p1, p2) {};

/**
 * @return {void}
 */
PlayerMp.prototype.clearDecorations = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.clearDriveByClipsetOverride = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.clearDrivebyTaskUnderneathDrivingTask = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.clearFacialDecorations = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.clearFacialIdleAnimOverride = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.clearHasDamagedAtLeastOneNonAnimalPed = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.clearHasDamagedAtLeastOnePed = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.clearLastDamageBone = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.clearParachuteModelOverride = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.clearParachutePackModelOverride = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.clearParachuteVariationOverride = function() {};

/**
 * @param {number} propId
 * @return {void}
 */
PlayerMp.prototype.clearProp = function(propId) {};

/**
 * @return {void}
 */
PlayerMp.prototype.clearSecondaryTask = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.clearTasks = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.clearTasksImmediately = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.clearWantedLevel = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.clearWetness = function() {};

/**
 * @param {number} heading
 * @param {boolean} networkHandle
 * @param {boolean} pedHandle
 * @return {number}
 */
PlayerMp.prototype.clone = function(heading, networkHandle, pedHandle) {};

/**
 * @param {number} ped2
 * @return {void}
 */
PlayerMp.prototype.cloneToTarget = function(ped2) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.controlMountedWeapon = function() {};

/**
 * @param {number} weaponHash
 * @return {void}
 */
PlayerMp.prototype.explodeHead = function(weaponHash) {};

/**
 * @param {number} motionStateHash
 * @param {boolean} p2
 * @param {boolean} p3
 * @param {boolean} p4
 * @return {boolean}
 */
PlayerMp.prototype.forceMotionState = function(motionStateHash, p2, p3, p4) {};

/**
 * @return {void}
 */
PlayerMp.prototype.forceToOpenParachute = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getAccuracy = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getAlertness = function() {};

/**
 * @param {number} weapon
 * @return {number}
 */
PlayerMp.prototype.getAmmoInClip = function(weapon) {};

/**
 * @return {number}
 */
PlayerMp.prototype.getArmour = function() {};

/**
 * @param {number} boneId
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @return {function(new: (?), number, number, number): ?}
 */
PlayerMp.prototype.getBoneCoords = function(boneId, offsetX, offsetY, offsetZ) {};

/**
 * @param {number} boneId
 * @return {number}
 */
PlayerMp.prototype.getBoneIndex = function(boneId) {};

/**
 * @return {number}
 */
PlayerMp.prototype.getCauseOfDeath = function() {};

/**
 * @param {number} ped
 * @param {number} p1
 * @return {number}
 */
PlayerMp.prototype.getCombatFloat = function(ped, p1) {};

/**
 * @return {number}
 */
PlayerMp.prototype.getCombatMovement = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getCombatRange = function() {};

/**
 * @param {number} flagId
 * @param {boolean} p2
 * @return {boolean}
 */
PlayerMp.prototype.getConfigFlag = function(flagId, p2) {};

/**
 * @return {number}
 */
PlayerMp.prototype.getCurrentStealthNoise = function() {};

/**
 * @param {number} p1
 * @param {number} p2
 * @return {function(new: (?), number, number, number): ?}
 */
PlayerMp.prototype.getDeadPickupCoords = function(p1, p2) {};

/**
 * @return {number}
 */
PlayerMp.prototype.getDecorationsState = function() {};

/**
 * @param {boolean} p1
 * @return {function(new: (?), number, number, number): ?}
 */
PlayerMp.prototype.getDefensiveAreaPosition = function(p1) {};

/**
 * @return {number}
 */
PlayerMp.prototype.getDesiredMoveBlendRatio = function() {};

/**
 * @param {number} componentId
 * @return {number}
 */
PlayerMp.prototype.getDrawableVariation = function(componentId) {};

/**
 * @return {number}
 */
PlayerMp.prototype.getEnveffScale = function() {};

/**
 * @param {boolean} worldSpace
 * @return {function(new: (?), number, number, number): ?}
 */
PlayerMp.prototype.getExtractedDisplacement = function(worldSpace) {};

/**
 * @param {boolean} p1
 * @return {void}
 */
PlayerMp.prototype.getFloodInvincibility = function(p1) {};

/**
 * @return {number}
 */
PlayerMp.prototype.getGroup = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getGroupIndex = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.getHasReserveParachute = function() {};

/**
 * @param {{shapeFirst: number, shapeSecond: number, shapeThird: number, skinFirst: number, skinSecond: number, skinThird: number, shapeMix: number, skinMix: number, thirdMix: number}} headBlendData
 * @return {void}
 */
PlayerMp.prototype.getHeadBlendData = function(headBlendData) {};

/**
 * @param {number} overlayID
 * @return {number}
 */
PlayerMp.prototype.getHeadOverlayValue = function(overlayID) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.getInvincible = function() {};

/**
 * @param {number} taskNumber
 * @return {boolean}
 */
PlayerMp.prototype.getIsTaskActive = function(taskNumber) {};

/**
 * @return {number}
 */
PlayerMp.prototype.getJackTarget = function() {};

/**
 * @param {number} outBone
 * @return {number}
 */
PlayerMp.prototype.getLastDamageBone = function(outBone) {};

/**
 * @return {number}
 */
PlayerMp.prototype.getMaxArmour = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getMaxHealth = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getMeleeTargetFor = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getMoney = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getMount = function() {};

/**
 * @return {string}
 */
PlayerMp.prototype.getName = function() {};

/**
 * @param {?} p1
 * @param {?} p2
 * @return {?}
 */
PlayerMp.prototype.getNavmeshRouteDistanceRemaining = function(p1, p2) {};

/**
 * @param {number} sizeAndPeds
 * @param {number} ignore
 * @return {number}
 */
PlayerMp.prototype.getNearbyPeds = function(sizeAndPeds, ignore) {};

/**
 * @param {number} sizeAndVehs
 * @return {number}
 */
PlayerMp.prototype.getNearbyVehicles = function(sizeAndVehs) {};

/**
 * @param {number} componentId
 * @return {number}
 */
PlayerMp.prototype.getNumberOfDrawableVariations = function(componentId) {};

/**
 * @param {number} propId
 * @return {number}
 */
PlayerMp.prototype.getNumberOfPropDrawableVariations = function(propId) {};

/**
 * @param {number} propId
 * @param {number} drawableId
 * @return {number}
 */
PlayerMp.prototype.getNumberOfPropTextureVariations = function(propId, drawableId) {};

/**
 * @param {number} componentId
 * @param {number} drawableId
 * @return {number}
 */
PlayerMp.prototype.getNumberOfTextureVariations = function(componentId, drawableId) {};

/**
 * @param {number} componentId
 * @return {number}
 */
PlayerMp.prototype.getPaletteVariation = function(componentId) {};

/**
 * @return {number}
 */
PlayerMp.prototype.getParachuteLandingType = function() {};

/**
 * @param {number} tintIndex
 * @return {number}
 */
PlayerMp.prototype.getParachutePackTintIndex = function(tintIndex) {};

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {{r: number, g: number, b: number}}
 */
PlayerMp.prototype.getParachuteSmokeTrailColor = function(r, g, b) {};

/**
 * @return {number}
 */
PlayerMp.prototype.getParachuteState = function() {};

/**
 * @param {number} tintIndex
 * @return {number}
 */
PlayerMp.prototype.getParachuteTintIndex = function(tintIndex) {};

/**
 * @return {number}
 */
PlayerMp.prototype.getPed = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getPedScriptIndex = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getPhoneGestureAnimCurrentTime = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getPhoneGestureAnimTotalTime = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getPlayerIsFollowing = function() {};

/**
 * @param {number} componentId
 * @return {number}
 */
PlayerMp.prototype.getPropIndex = function(componentId) {};

/**
 * @param {number} componentId
 * @return {number}
 */
PlayerMp.prototype.getPropTextureIndex = function(componentId) {};

/**
 * @param {number} bone
 * @return {number}
 */
PlayerMp.prototype.getRagdollBoneIndex = function(bone) {};

/**
 * @param {number} ped2
 * @return {void}
 */
PlayerMp.prototype.getRelationshipBetweens = function(ped2) {};

/**
 * @return {number}
 */
PlayerMp.prototype.getRelationshipGroupDefaultHash = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getRelationshipGroupHash = function() {};

/**
 * @param {number} tintIndex
 * @return {number}
 */
PlayerMp.prototype.getReserveParachuteTintIndex = function(tintIndex) {};

/**
 * @param {number} flagId
 * @return {boolean}
 */
PlayerMp.prototype.getResetFlag = function(flagId) {};

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {{r: number, g: number, b: number}}
 */
PlayerMp.prototype.getRgbColour = function(r, g, b) {};

/**
 * @param {number} taskHash
 * @return {number}
 */
PlayerMp.prototype.getScriptTaskStatus = function(taskHash) {};

/**
 * @return {number}
 */
PlayerMp.prototype.getSeatIsTryingToEnter = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getSequenceProgress = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getsJacker = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getSourceOfDeath = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getSprintStaminaRemaining = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getSprintTimeRemaining = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getTeam = function() {};

/**
 * @param {number} componentId
 * @return {number}
 */
PlayerMp.prototype.getTextureVariation = function(componentId) {};

/**
 * @return {number}
 */
PlayerMp.prototype.getTimeOfDeath = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getType = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getUnderwaterTimeRemaining = function() {};

/**
 * @param {boolean} getLastVehicle
 * @return {number}
 */
PlayerMp.prototype.getVehicleIsIn = function(getLastVehicle) {};

/**
 * @return {number}
 */
PlayerMp.prototype.getVehicleIsTryingToEnter = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getVehicleIsUsing = function() {};

/**
 * @param {?} attribute
 * @return {?}
 */
PlayerMp.prototype.getVoiceAttribute = function(attribute) {};

/**
 * @return {function(new: (?), number, number, number): ?}
 */
PlayerMp.prototype.getWantedCentrePosition = function() {};

/**
 * @return {number}
 */
PlayerMp.prototype.getWantedLevel = function() {};

/**
 * @param {boolean} cannotRemove
 * @param {number} helmetFlag
 * @param {number} textureIndex
 * @return {void}
 */
PlayerMp.prototype.giveHelmet = function(cannotRemove, helmetFlag, textureIndex) {};

/**
 * @return {void}
 */
PlayerMp.prototype.giveNmMessage = function() {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.giveRagdollControl = function(toggle) {};

/**
 * @param {number} weapon
 * @param {number} ammo
 * @param {boolean} equipNow
 * @return {void}
 */
PlayerMp.prototype.giveWeapon = function(weapon, ammo, equipNow) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.hasBeenSpottedInStolenVehicle = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.hasDamagedAtLeastOneNonAnimalPed = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.hasDamagedAtLeastOnePed = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.hasHeadBlendFinished = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.hasLeftTheWorld = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.hasTeleportFinished = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.hasUseScenarioTask = function() {};

/**
 * @param {?} p1
 * @param {boolean} p2
 * @return {void}
 */
PlayerMp.prototype.hideBloodDamageByZone = function(p1, p2) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isActiveInScenario = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isAimingFromCover = function() {};

/**
 * @param {boolean} atArresting
 * @return {boolean}
 */
PlayerMp.prototype.isBeingArrested = function(atArresting) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isBeingJacked = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isBeingStealthKilled = function() {};

/**
 * @param {number} p1
 * @return {boolean}
 */
PlayerMp.prototype.isBeingStunned = function(p1) {};

/**
 * @param {number} componentId
 * @param {number} drawableId
 * @param {number} textureId
 * @return {boolean}
 */
PlayerMp.prototype.isComponentVariationValid = function(componentId, drawableId, textureId) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isControlOn = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isConversationDead = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isCuffed = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isDead = function() {};

/**
 * @param {boolean} p1
 * @return {boolean}
 */
PlayerMp.prototype.isDeadOrDying = function(p1) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isDiving = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isDoingDriveby = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isDrivebyTaskUnderneathDrivingTask = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isDucking = function() {};

/**
 * @param {number} evadingEntity
 * @return {boolean}
 */
PlayerMp.prototype.isEvasiveDiving = function(evadingEntity) {};

/**
 * @param {number} otherPed
 * @param {number} angle
 * @return {boolean}
 */
PlayerMp.prototype.isFacingPed = function(otherPed, angle) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isFalling = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isFatallyInjured = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isFleeing = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isFreeAiming = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isFreeForAmbientTask = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isGettingIntoAVehicle = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isGettingUp = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isGoingIntoCover = function() {};

/**
 * @param {number} groupId
 * @return {boolean}
 */
PlayerMp.prototype.isGroupMember = function(groupId) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isHangingOnToVehicle = function() {};

/**
 * @param {number} entity
 * @return {boolean}
 */
PlayerMp.prototype.isHeadtracking = function(entity) {};

/**
 * @param {number} ped2
 * @return {boolean}
 */
PlayerMp.prototype.isHeadtrackingPed = function(ped2) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isHuman = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isHurt = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isInAnyBoat = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isInAnyHeli = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isInAnyPlane = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isInAnyPoliceVehicle = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isInAnySub = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isInAnyTaxi = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isInAnyTrain = function() {};

/**
 * @param {boolean} atGetIn
 * @return {boolean}
 */
PlayerMp.prototype.isInAnyVehicle = function(atGetIn) {};

/**
 * @param {number} target
 * @return {boolean}
 */
PlayerMp.prototype.isInCombat = function(target) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isInCoverFacingLeft = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isInFlyingVehicle = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isInGroup = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isInjured = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isInMeleeCombat = function() {};

/**
 * @param {number} modelHash
 * @return {boolean}
 */
PlayerMp.prototype.isInModel = function(modelHash) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isInParachuteFreeFall = function() {};

/**
 * @param {number} vehicle
 * @param {boolean} atGetIn
 * @return {boolean}
 */
PlayerMp.prototype.isInVehicle = function(vehicle, atGetIn) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isInWrithe = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isJacking = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isJumpingOutOfVehicle = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isMale = function() {};

/**
 * @param {number} modelHash
 * @return {boolean}
 */
PlayerMp.prototype.isModel = function(modelHash) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isMountedWeaponTaskUnderneathDrivingTask = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isMoveBlendRatioRunning = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isMoveBlendRatioSprinting = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isMoveBlendRatioStill = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isMoveBlendRatioWalking = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isOnAnyBike = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isOnFoot = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isOnMount = function() {};

/**
 * @param {number} vehicle
 * @return {boolean}
 */
PlayerMp.prototype.isOnSpecificVehicle = function(vehicle) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isOnVehicle = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isPerformingStealthKill = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isPlantingBomb = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isPlaying = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isPlayingPhoneGestureAnim = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isPressingHorn = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isProne = function() {};

/**
 * @param {number} componentId
 * @param {number} drawableId
 * @param {number} TextureId
 * @return {boolean}
 */
PlayerMp.prototype.isPropValid = function(componentId, drawableId, TextureId) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isRagdoll = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isReadyForCutscene = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isReloading = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isRidingTrain = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isRunning = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isRunningArrestTask = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isRunningMobilePhoneTask = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isRunningRagdollTask = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isScriptControlOn = function() {};

/**
 * @param {string} animDict
 * @param {string} anim
 * @return {boolean}
 */
PlayerMp.prototype.isScriptedScenarioUsingConditionalAnim = function(animDict, anim) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isShooting = function() {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {boolean} p7
 * @param {boolean} p8
 * @return {boolean}
 */
PlayerMp.prototype.isShootingInArea = function(x1, y1, z1, x2, y2, z2, p7, p8) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isSittingInAnyVehicle = function() {};

/**
 * @param {number} vehicle
 * @return {boolean}
 */
PlayerMp.prototype.isSittingInVehicle = function(vehicle) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isSprinting = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isStill = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isStopped = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isStrafing = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isSwimming = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isSwimmingUnderWater = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isTargettingAnything = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isTracked = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isTrackedVisible = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isTryingToEnterALockedVehicle = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isUsingActionMode = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isUsingAnyScenario = function() {};

/**
 * @param {string} scenario
 * @return {boolean}
 */
PlayerMp.prototype.isUsingScenario = function(scenario) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isVaulting = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isWalking = function() {};

/**
 * @param {number} wantedLevel
 * @return {boolean}
 */
PlayerMp.prototype.isWantedLevelGreater = function(wantedLevel) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.isWearingHelmet = function() {};

/**
 * @param {boolean} p1
 * @param {boolean} p2
 * @param {boolean} p3
 * @param {boolean} p4
 * @return {void}
 */
PlayerMp.prototype.knockOffProp = function(p1, p2, p3, p4) {};

/**
 * @return {void}
 */
PlayerMp.prototype.knockOffVehicle = function() {};

/**
 * @param {string} animDict
 * @param {string} animName
 * @return {void}
 */
PlayerMp.prototype.playAnimOnRunningScenario = function(animDict, animName) {};

/**
 * @param {string} animName
 * @param {string} animDict
 * @return {void}
 */
PlayerMp.prototype.playFacialAnim = function(animName, animDict) {};

/**
 * @param {number} radius
 * @return {void}
 */
PlayerMp.prototype.registerHatedTargetsAround = function(radius) {};

/**
 * @return {number}
 */
PlayerMp.prototype.registerheadshot = function() {};

/**
 * @param {number} target
 * @return {void}
 */
PlayerMp.prototype.registerTarget = function(target) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.removeDefensiveArea = function(toggle) {};

/**
 * @return {void}
 */
PlayerMp.prototype.removeFromGroup = function() {};

/**
 * @param {boolean} p2
 * @return {void}
 */
PlayerMp.prototype.removeHelmet = function(p2) {};

/**
 * @return {void}
 */
PlayerMp.prototype.removePreferredCoverSet = function() {};

/**
 * @param {number} weapon
 * @return {void}
 */
PlayerMp.prototype.removeWeapon = function(weapon) {};

/**
 * @return {void}
 */
PlayerMp.prototype.removeAllWeapons = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.resetArrestState = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.resetInputGait = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.resetInVehicleContext = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.resetLastVehicle = function() {};

/**
 * @param {number} p1
 * @return {void}
 */
PlayerMp.prototype.resetMovementClipset = function(p1) {};

/**
 * @return {void}
 */
PlayerMp.prototype.resetRagdollTimer = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.resetStamina = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.resetStrafeClipset = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.resetVisibleDamage = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.resetWeaponMovementClipset = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.resurrect = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.reviveInjured = function() {};

/**
 * @param {number} accuracy
 * @return {void}
 */
PlayerMp.prototype.setAccuracy = function(accuracy) {};

/**
 * @param {number} value
 * @return {void}
 */
PlayerMp.prototype.setAlertness = function(value) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setAllowedToDuck = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setAllowVehiclesOverride = function(toggle) {};

/**
 * @param {number} stance
 * @param {string} animDictionary
 * @param {string} animationName
 * @param {number} p4
 * @param {boolean} p5
 * @return {void}
 */
PlayerMp.prototype.setAlternateMovementAnim = function(stance, animDictionary, animationName, p4, p5) {};

/**
 * @param {number} weapon
 * @param {number} ammo
 * @return {void}
 */
PlayerMp.prototype.setAmmoInClip = function(weapon, ammo) {};

/**
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {number} p7
 * @param {boolean} p8
 * @param {boolean} p9
 * @return {void}
 */
PlayerMp.prototype.setAngledDefensiveArea = function(p1, p2, p3, p4, p5, p6, p7, p8, p9) {};

/**
 * @param {number} amount
 * @return {void}
 */
PlayerMp.prototype.setArmour = function(amount) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setAsCop = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setAsEnemy = function(toggle) {};

/**
 * @param {number} groupId
 * @return {void}
 */
PlayerMp.prototype.setAsGroupLeader = function(groupId) {};

/**
 * @param {number} groupId
 * @return {void}
 */
PlayerMp.prototype.setAsGroupMember = function(groupId) {};

/**
 * @param {?} p1
 * @param {?} p2
 * @param {number} p3
 * @param {number} p4
 * @return {void}
 */
PlayerMp.prototype.setBlendFromParents = function(p1, p2, p3, p4) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setBlockingOfNonTemporaryEvents = function(toggle) {};

/**
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @return {void}
 */
PlayerMp.prototype.setBoundsOrientation = function(p1, p2, p3, p4, p5) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanArmIk = function(toggle) {};

/**
 * @param {boolean} toggle
 * @param {boolean} p2
 * @return {void}
 */
PlayerMp.prototype.setCanAttackFriendly = function(toggle, p2) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanBeDraggedOut = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanBeHassledByGangs = function(toggle) {};

/**
 * @param {number} state
 * @return {void}
 */
PlayerMp.prototype.setCanBeKnockedOffVehicle = function(state) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanBeShotInVehicle = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanBeTargetedWhenInjured = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanBeTargetedWithoutLos = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanBeTargetted = function(toggle) {};

/**
 * @param {number} player
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanBeTargettedByPlayer = function(player, toggle) {};

/**
 * @param {number} team
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanBeTargettedByTeam = function(team, toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanCowerInCover = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanDoDriveBy = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanEvasiveDive = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanHeadIk = function(toggle) {};

/**
 * @param {boolean} enabled
 * @return {void}
 */
PlayerMp.prototype.setCanLeaveParachuteSmokeTrail = function(enabled) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanLegIk = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanPeekInCover = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanPlayAmbientAnims = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanPlayAmbientBaseAnims = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanPlayGestureAnims = function(toggle) {};

/**
 * @param {boolean} p1
 * @param {boolean} p2
 * @return {void}
 */
PlayerMp.prototype.setCanPlayVisemeAnims = function(p1, p2) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanRagdoll = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanRagdollFromPlayerImpact = function(toggle) {};

/**
 * @param {boolean} p1
 * @param {boolean} p2
 * @return {void}
 */
PlayerMp.prototype.setCanSmashGlass = function(p1, p2) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanSwitchWeapon = function(toggle) {};

/**
 * @param {number} groupHandle
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanTeleportToGroupLeader = function(groupHandle, toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanTorsoIk = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanUseAutoConversationLookat = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setCanUseCover = function(toggle) {};

/**
 * @param {number} value
 * @return {void}
 */
PlayerMp.prototype.setCapsule = function(value) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setClothPinFrames = function(toggle) {};

/**
 * @param {number} p1
 * @return {void}
 */
PlayerMp.prototype.setCombatAbility = function(p1) {};

/**
 * @param {number} attributeIndex
 * @param {boolean} enabled
 * @return {void}
 */
PlayerMp.prototype.setCombatAttributes = function(attributeIndex, enabled) {};

/**
 * @param {number} combatType
 * @param {number} p2
 * @return {void}
 */
PlayerMp.prototype.setCombatFloat = function(combatType, p2) {};

/**
 * @param {number} combatMovement
 * @return {void}
 */
PlayerMp.prototype.setCombatMovement = function(combatMovement) {};

/**
 * @param {number} p1
 * @return {void}
 */
PlayerMp.prototype.setCombatRange = function(p1) {};

/**
 * @param {number} componentId
 * @param {number} drawableId
 * @param {number} textureId
 * @param {number} paletteId
 * @return {void}
 */
PlayerMp.prototype.setComponentVariation = function(componentId, drawableId, textureId, paletteId) {};

/**
 * @param {number} flagId
 * @param {boolean} value
 * @return {void}
 */
PlayerMp.prototype.setConfigFlag = function(flagId, value) {};

/**
 * @param {boolean} toggle
 * @param {number} possiblyFlags
 * @return {void}
 */
PlayerMp.prototype.setControl = function(toggle, possiblyFlags) {};

/**
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @return {void}
 */
PlayerMp.prototype.setCoordsKeepVehicle = function(posX, posY, posZ) {};

/**
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @return {void}
 */
PlayerMp.prototype.setCoordsNoGang = function(posX, posY, posZ) {};

/**
 * @param {string} p1
 * @return {void}
 */
PlayerMp.prototype.setCowerHash = function(p1) {};

/**
 * @param {number} collection
 * @param {number} overlay
 * @return {void}
 */
PlayerMp.prototype.setDecoration = function(collection, overlay) {};

/**
 * @return {void}
 */
PlayerMp.prototype.setDefaultComponentVariation = function() {};

/**
 * @param {number} attachPed
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {number} p7
 * @param {number} p8
 * @param {boolean} p9
 * @param {boolean} p10
 * @return {void}
 */
PlayerMp.prototype.setDefensiveAreaAttachedToPed = function(attachPed, p2, p3, p4, p5, p6, p7, p8, p9, p10) {};

/**
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {boolean} p4
 * @return {void}
 */
PlayerMp.prototype.setDefensiveAreaDirection = function(p1, p2, p3, p4) {};

/**
 * @param {?} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {boolean} p6
 * @return {void}
 */
PlayerMp.prototype.setDefensiveSphereAttachedToPed = function(p1, p2, p3, p4, p5, p6) {};

/**
 * @param {number} heading
 * @return {void}
 */
PlayerMp.prototype.setDesiredHeading = function(heading) {};

/**
 * @param {number} p1
 * @return {void}
 */
PlayerMp.prototype.setDesiredMoveBlendRatio = function(p1) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setDiesInSinkingVehicle = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setDiesInstantlyInWater = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setDiesInVehicle = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setDiesInWater = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setDiesWhenInjured = function(toggle) {};

/**
 * @param {string} clipset
 * @return {void}
 */
PlayerMp.prototype.setDriveByClipsetOverride = function(clipset) {};

/**
 * @param {number} ability
 * @return {void}
 */
PlayerMp.prototype.setDriverAbility = function(ability) {};

/**
 * @param {number} aggressiveness
 * @return {void}
 */
PlayerMp.prototype.setDriverAggressiveness = function(aggressiveness) {};

/**
 * @param {number} cruiseSpeed
 * @return {void}
 */
PlayerMp.prototype.setDriveTaskCruiseSpeed = function(cruiseSpeed) {};

/**
 * @param {number} drivingStyle
 * @return {void}
 */
PlayerMp.prototype.setDriveTaskDrivingStyle = function(drivingStyle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setDucking = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setEnableBoundAnkles = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setEnableEnveffScale = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setEnableHandcuffs = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setEnableScuba = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setEnableWeaponBlocking = function(toggle) {};

/**
 * @param {number} value
 * @return {void}
 */
PlayerMp.prototype.setEnveffScale = function(value) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setEveryoneIgnore = function(toggle) {};

/**
 * @return {number}
 */
PlayerMp.prototype.setExclusivePhoneRelationships = function() {};

/**
 * @param {number} index
 * @return {void}
 */
PlayerMp.prototype.setEyeColor = function(index) {};

/**
 * @param {number} index
 * @param {number} scale
 * @return {void}
 */
PlayerMp.prototype.setFaceFeature = function(index, scale) {};

/**
 * @param {number} collection
 * @param {number} overlay
 * @return {void}
 */
PlayerMp.prototype.setFacialDecoration = function(collection, overlay) {};

/**
 * @param {string} animName
 * @param {string} animDict
 * @return {void}
 */
PlayerMp.prototype.setFacialIdleAnimOverride = function(animName, animDict) {};

/**
 * @param {number} patternHash
 * @return {void}
 */
PlayerMp.prototype.setFiringPattern = function(patternHash) {};

/**
 * @param {number} attributes
 * @param {boolean} p2
 * @return {void}
 */
PlayerMp.prototype.setFleeAttributes = function(attributes, p2) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setForcedAim = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setForcedZoom = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setForceSkipAimIntro = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setGeneratesDeadBodyEvents = function(toggle) {};

/**
 * @param {?} p1
 * @return {void}
 */
PlayerMp.prototype.setGestureGroup = function(p1) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setGetOutUpsideDownVehicle = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setGravity = function(toggle) {};

/**
 * @param {number} index
 * @return {void}
 */
PlayerMp.prototype.setGroupMemberPassengerIndex = function(index) {};

/**
 * @param {number} colorID
 * @param {number} highlightColorID
 * @return {void}
 */
PlayerMp.prototype.setHairColor = function(colorID, highlightColorID) {};

/**
 * @return {void}
 */
PlayerMp.prototype.setHasReserveParachute = function() {};

/**
 * @param {number} shapeFirstID
 * @param {number} shapeSecondID
 * @param {number} shapeThirdID
 * @param {number} skinFirstID
 * @param {number} skinSecondID
 * @param {number} skinThirdID
 * @param {number} shapeMix
 * @param {number} skinMix
 * @param {number} thirdMix
 * @param {boolean} isParent
 * @return {void}
 */
PlayerMp.prototype.setHeadBlendData = function(shapeFirstID, shapeSecondID, shapeThirdID, skinFirstID, skinSecondID, skinThirdID, shapeMix, skinMix, thirdMix, isParent) {};

/**
 * @param {number} overlayID
 * @param {number} index
 * @param {number} opacity
 * @param {number} firstColor
 * @param {number} secondColor
 * @return {void}
 */
PlayerMp.prototype.setHeadOverlay = function(overlayID, index, opacity, firstColor, secondColor) {};

/**
 * @param {number} overlayID
 * @param {number} colorType
 * @param {number} colorID
 * @param {number} secondColorID
 * @return {void}
 */
PlayerMp.prototype.setHeadOverlayColor = function(overlayID, colorType, colorID, secondColorID) {};

/**
 * @param {number} regenRate
 * @return {void}
 */
PlayerMp.prototype.setHealthRechargeMultiplier = function(regenRate) {};

/**
 * @param {number} value
 * @return {void}
 */
PlayerMp.prototype.setHearingRange = function(value) {};

/**
 * @param {boolean} canWearHelmet
 * @return {void}
 */
PlayerMp.prototype.setHelmet = function(canWearHelmet) {};

/**
 * @param {number} helmetFlag
 * @return {void}
 */
PlayerMp.prototype.setHelmetFlag = function(helmetFlag) {};

/**
 * @param {number} propIndex
 * @return {void}
 */
PlayerMp.prototype.setHelmetPropIndex = function(propIndex) {};

/**
 * @param {number} textureIndex
 * @return {void}
 */
PlayerMp.prototype.setHelmetTextureIndex = function(textureIndex) {};

/**
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @return {void}
 */
PlayerMp.prototype.setHighFallTask = function(p1, p2, p3) {};

/**
 * @param {number} value
 * @return {void}
 */
PlayerMp.prototype.setIdRange = function(value) {};

/**
 * @param {number} p1
 * @param {number} targetPed
 * @param {number} boneLookAt
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {?} p7
 * @param {number} duration
 * @param {number} duration1
 * @return {void}
 */
PlayerMp.prototype.setIkTarget = function(p1, targetPed, boneLookAt, x, y, z, p7, duration, duration1) {};

/**
 * @param {number} vehicle
 * @param {number} seatIndex
 * @return {void}
 */
PlayerMp.prototype.setIntoVehicle = function(vehicle, seatIndex) {};

/**
 * @param {number} context
 * @return {void}
 */
PlayerMp.prototype.setInVehicleContext = function(context) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setInvincible = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setKeepTask = function(toggle) {};

/**
 * @param {number} mode
 * @return {void}
 */
PlayerMp.prototype.setLegIkMode = function(mode) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setLockon = function(toggle) {};

/**
 * @param {number} range
 * @return {void}
 */
PlayerMp.prototype.setLockonRangeOverride = function(range) {};

/**
 * @param {number} multiplier
 * @return {void}
 */
PlayerMp.prototype.setLodMultiplier = function(multiplier) {};

/**
 * @param {number} value
 * @return {void}
 */
PlayerMp.prototype.setMaxArmour = function(value) {};

/**
 * @param {number} value
 * @return {void}
 */
PlayerMp.prototype.setMaxHealth = function(value) {};

/**
 * @param {number} value
 * @return {void}
 */
PlayerMp.prototype.setMaxMoveBlendRatio = function(value) {};

/**
 * @param {number} value
 * @return {void}
 */
PlayerMp.prototype.setMaxTimeInWater = function(value) {};

/**
 * @param {number} value
 * @return {void}
 */
PlayerMp.prototype.setMaxTimeUnderwater = function(value) {};

/**
 * @return {void}
 */
PlayerMp.prototype.setMayNotEnterAnyVehicle = function() {};

/**
 * @param {number} vehicle
 * @return {void}
 */
PlayerMp.prototype.setMayOnlyEnterThisVehicle = function(vehicle) {};

/**
 * @param {number} modifier
 * @return {void}
 */
PlayerMp.prototype.setMeleeWeaponDamageModifier = function(modifier) {};

/**
 * @param {number} ms
 * @return {void}
 */
PlayerMp.prototype.setMinGroundTimeForStungun = function(ms) {};

/**
 * @param {number} value
 * @return {void}
 */
PlayerMp.prototype.setMinMoveBlendRatio = function(value) {};

/**
 * @param {number} model
 * @return {void}
 */
PlayerMp.prototype.setModel = function(model) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setModelIsSuppressed = function(toggle) {};

/**
 * @param {number} amount
 * @return {void}
 */
PlayerMp.prototype.setMoney = function(amount) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setMotionBlur = function(toggle) {};

/**
 * @param {number} targetEntity
 * @param {?} p2
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
PlayerMp.prototype.setMountedWeaponTarget = function(targetEntity, p2, x, y, z) {};

/**
 * @return {void}
 */
PlayerMp.prototype.setMoveAnimsBlendOut = function() {};

/**
 * @param {string} clipSet
 * @param {number} p2
 * @return {void}
 */
PlayerMp.prototype.setMovementClipset = function(clipSet, p2) {};

/**
 * @param {number} value
 * @return {void}
 */
PlayerMp.prototype.setMoveRateOverride = function(value) {};

/**
 * @param {string} name
 * @return {void}
 */
PlayerMp.prototype.setNameDebug = function(name) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setNeverLeavesGroup = function(toggle) {};

/**
 * @param {number} multiplier
 * @return {void}
 */
PlayerMp.prototype.setNoiseMultiplier = function(multiplier) {};

/**
 * @param {number} model
 * @return {void}
 */
PlayerMp.prototype.setParachuteModelOverride = function(model) {};

/**
 * @param {number} model
 * @return {void}
 */
PlayerMp.prototype.setParachutePackModelOverride = function(model) {};

/**
 * @param {number} tintIndex
 * @return {void}
 */
PlayerMp.prototype.setParachutePackTintIndex = function(tintIndex) {};

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {void}
 */
PlayerMp.prototype.setParachuteSmokeTrailColor = function(r, g, b) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
PlayerMp.prototype.setParachuteTaskTarget = function(x, y, z) {};

/**
 * @param {number} thrust
 * @return {void}
 */
PlayerMp.prototype.setParachuteTaskThrust = function(thrust) {};

/**
 * @param {number} tintIndex
 * @return {void}
 */
PlayerMp.prototype.setParachuteTintIndex = function(tintIndex) {};

/**
 * @param {number} p1
 * @param {?} p2
 * @param {?} p3
 * @param {boolean} p4
 * @return {void}
 */
PlayerMp.prototype.setParachuteVariationOverride = function(p1, p2, p3, p4) {};

/**
 * @param {boolean} avoidFire
 * @return {void}
 */
PlayerMp.prototype.setPathAvoidFire = function(avoidFire) {};

/**
 * @param {boolean} Toggle
 * @return {void}
 */
PlayerMp.prototype.setPathCanDropFromHeight = function(Toggle) {};

/**
 * @param {boolean} Toggle
 * @return {void}
 */
PlayerMp.prototype.setPathCanUseClimbovers = function(Toggle) {};

/**
 * @param {boolean} Toggle
 * @return {void}
 */
PlayerMp.prototype.setPathCanUseLadders = function(Toggle) {};

/**
 * @param {boolean} avoidWater
 * @return {void}
 */
PlayerMp.prototype.setPathPreferToAvoidWater = function(avoidWater) {};

/**
 * @param {boolean} mayEnterWater
 * @return {void}
 */
PlayerMp.prototype.setPathsWidthPlant = function(mayEnterWater) {};

/**
 * @param {boolean} pinned
 * @param {number} i
 * @return {void}
 */
PlayerMp.prototype.setPinnedDown = function(pinned, i) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setPlaysHeadOnHornAnimWhenDiesInVehicle = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setPoliceIgnore = function(toggle) {};

/**
 * @param {?} itemSet
 * @return {void}
 */
PlayerMp.prototype.setPreferredCoverSet = function(itemSet) {};

/**
 * @param {number} lookAt
 * @return {void}
 */
PlayerMp.prototype.setPrimaryLookat = function(lookAt) {};

/**
 * @param {number} componentId
 * @param {number} drawableId
 * @param {number} TextureId
 * @param {boolean} attach
 * @return {void}
 */
PlayerMp.prototype.setPropIndex = function(componentId, drawableId, TextureId, attach) {};

/**
 * @param {number} flag
 * @return {void}
 */
PlayerMp.prototype.setRagdollFlag = function(flag) {};

/**
 * @return {void}
 */
PlayerMp.prototype.setRagdollForceFall = function() {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setRagdollOnCollision = function(toggle) {};

/**
 * @param {boolean} p1
 * @return {void}
 */
PlayerMp.prototype.setRandomComponentVariation = function(p1) {};

/**
 * @return {void}
 */
PlayerMp.prototype.setRandomProps = function() {};

/**
 * @param {number} hash
 * @return {void}
 */
PlayerMp.prototype.setRelationshipGroupDefaultHash = function(hash) {};

/**
 * @param {number} hash
 * @return {void}
 */
PlayerMp.prototype.setRelationshipGroupHash = function(hash) {};

/**
 * @param {number} tintIndex
 * @return {void}
 */
PlayerMp.prototype.setReserveParachuteTintIndex = function(tintIndex) {};

/**
 * @param {number} flagId
 * @param {boolean} doReset
 * @return {void}
 */
PlayerMp.prototype.setResetFlag = function(flagId, doReset) {};

/**
 * @param {number} flags
 * @return {void}
 */
PlayerMp.prototype.setResetFlagPreferRearSeats = function(flags) {};

/**
 * @param {number} flag
 * @return {void}
 */
PlayerMp.prototype.setResetRagdollFlag = function(flag) {};

/**
 * @param {number} p1
 * @return {void}
 */
PlayerMp.prototype.setScriptedAnimSeatOffset = function(p1) {};

/**
 * @param {number} value
 * @return {void}
 */
PlayerMp.prototype.setSeeingRange = function(value) {};

/**
 * @param {number} shootRate
 * @return {void}
 */
PlayerMp.prototype.setShootRate = function(shootRate) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setShootsAtCoord = function(x, y, z, toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setSimulateAiming = function(toggle) {};

/**
 * @param {number} multiplier
 * @return {void}
 */
PlayerMp.prototype.setSneakingNoiseMultiplier = function(multiplier) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {boolean} p5
 * @param {boolean} p6
 * @return {void}
 */
PlayerMp.prototype.setSphereDefensiveArea = function(x, y, z, radius, p5, p6) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setSprint = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setStayInVehicleWhenJacked = function(toggle) {};

/**
 * @param {boolean} p1
 * @param {string} action
 * @return {void}
 */
PlayerMp.prototype.setStealthMovement = function(p1, action) {};

/**
 * @param {number} value
 * @return {void}
 */
PlayerMp.prototype.setStealthPerceptionModifier = function(value) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setSteersAroundObjects = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setSteersAroundPeds = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setSteersAroundVehicles = function(toggle) {};

/**
 * @param {string} clipSet
 * @return {void}
 */
PlayerMp.prototype.setStrafeClipset = function(clipSet) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setSuffersCriticalHits = function(toggle) {};

/**
 * @param {number} sweat
 * @return {void}
 */
PlayerMp.prototype.setSweat = function(sweat) {};

/**
 * @param {number} responseType
 * @return {void}
 */
PlayerMp.prototype.setTargetLossResponse = function(responseType) {};

/**
 * @param {number} flag
 * @param {boolean} set
 * @return {void}
 */
PlayerMp.prototype.setTaskVehicleChaseBehaviorFlag = function(flag, set) {};

/**
 * @param {number} distance
 * @return {void}
 */
PlayerMp.prototype.setTaskVehicleChaseIdealPursuitDistance = function(distance) {};

/**
 * @param {number} team
 * @return {void}
 */
PlayerMp.prototype.setTeam = function(team) {};

/**
 * @param {number} radius
 * @param {number} maxFriends
 * @return {void}
 */
PlayerMp.prototype.setToInformRespectedFriends = function(radius, maxFriends) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.setToLoadCover = function(toggle) {};

/**
 * @param {number} time1
 * @param {number} time2
 * @param {number} ragdollType
 * @param {boolean} p4
 * @param {boolean} p5
 * @param {boolean} p6
 * @return {boolean}
 */
PlayerMp.prototype.setToRagdoll = function(time1, time2, ragdollType, p4, p5, p6) {};

/**
 * @param {boolean} p1
 * @param {?} p2
 * @param {string} action
 * @return {void}
 */
PlayerMp.prototype.setUsingActionMode = function(p1, p2, action) {};

/**
 * @param {number} damageAmount
 * @return {void}
 */
PlayerMp.prototype.setVehicleDamageModifier = function(damageAmount) {};

/**
 * @param {number} modifier
 * @return {void}
 */
PlayerMp.prototype.setVehicleDefenseModifier = function(modifier) {};

/**
 * @param {number} angle
 * @return {void}
 */
PlayerMp.prototype.setVisualFieldCenterAngle = function(angle) {};

/**
 * @param {number} value
 * @return {void}
 */
PlayerMp.prototype.setVisualFieldMaxAngle = function(value) {};

/**
 * @param {number} angle
 * @return {void}
 */
PlayerMp.prototype.setVisualFieldMaxElevationAngle = function(angle) {};

/**
 * @param {number} value
 * @return {void}
 */
PlayerMp.prototype.setVisualFieldMinAngle = function(value) {};

/**
 * @param {number} angle
 * @return {void}
 */
PlayerMp.prototype.setVisualFieldMinElevationAngle = function(angle) {};

/**
 * @param {number} range
 * @return {void}
 */
PlayerMp.prototype.setVisualFieldPeripheralRange = function(range) {};

/**
 * @param {?} attribute
 * @param {?} value
 * @return {void}
 */
PlayerMp.prototype.setVoiceAttribute = function(attribute, value) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
PlayerMp.prototype.setWantedCentrePosition = function(x, y, z) {};

/**
 * @param {number} wantedLevel
 * @param {boolean} disableNoMission
 * @return {void}
 */
PlayerMp.prototype.setWantedLevel = function(wantedLevel, disableNoMission) {};

/**
 * @param {number} wantedLevel
 * @param {boolean} p2
 * @return {void}
 */
PlayerMp.prototype.setWantedLevelNoDrop = function(wantedLevel, p2) {};

/**
 * @param {boolean} p1
 * @return {void}
 */
PlayerMp.prototype.setWantedLevelNow = function(p1) {};

/**
 * @param {number} damageAmount
 * @return {void}
 */
PlayerMp.prototype.setWeaponDamageModifier = function(damageAmount) {};

/**
 * @param {number} modifier
 * @return {void}
 */
PlayerMp.prototype.setWeaponDefenseModifier = function(modifier) {};

/**
 * @param {string} clipSet
 * @return {void}
 */
PlayerMp.prototype.setWeaponMovementClipset = function(clipSet) {};

/**
 * @return {void}
 */
PlayerMp.prototype.setWetnessEnabledThisFrame = function() {};

/**
 * @param {number} height
 * @return {void}
 */
PlayerMp.prototype.setWetnessHeight = function(height) {};

/**
 * @param {?} p1
 * @param {boolean} p2
 * @return {void}
 */
PlayerMp.prototype.stopAnimPlayback = function(p1, p2) {};

/**
 * @param {string} animDictionary
 * @param {string} animationName
 * @param {number} p3
 * @return {void}
 */
PlayerMp.prototype.stopAnimTask = function(animDictionary, animationName, p3) {};

/**
 * @return {void}
 */
PlayerMp.prototype.stopWeaponFiringWhenDropped = function() {};

/**
 * @param {number} heading
 * @param {number} timeout
 * @return {void}
 */
PlayerMp.prototype.taskAchieveHeading = function(heading, timeout) {};

/**
 * @param {number} entity
 * @param {number} duration
 * @param {boolean} p3
 * @return {void}
 */
PlayerMp.prototype.taskAimGunAt = function(entity, duration, p3) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} time
 * @param {boolean} p5
 * @param {boolean} p6
 * @return {void}
 */
PlayerMp.prototype.taskAimGunAtCoord = function(x, y, z, time, p5, p6) {};

/**
 * @param {number} scriptTask
 * @param {boolean} p2
 * @param {boolean} p3
 * @return {void}
 */
PlayerMp.prototype.taskAimGunScripted = function(scriptTask, p2, p3) {};

/**
 * @param {number} target
 * @return {void}
 */
PlayerMp.prototype.taskArrest = function(target) {};

/**
 * @param {number} boat
 * @param {?} p2
 * @param {?} p3
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {?} p7
 * @param {number} maxSpeed
 * @param {?} p9
 * @param {number} p10
 * @param {?} p11
 * @return {void}
 */
PlayerMp.prototype.taskBoatMission = function(boat, p2, p3, x, y, z, p7, maxSpeed, p9, p10, p11) {};

/**
 * @param {number} target
 * @param {?} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {number} p7
 * @return {void}
 */
PlayerMp.prototype.taskChatTo = function(target, p2, p3, p4, p5, p6, p7) {};

/**
 * @return {void}
 */
PlayerMp.prototype.taskClearLookAt = function() {};

/**
 * @param {boolean} unused
 * @return {void}
 */
PlayerMp.prototype.taskClimb = function(unused) {};

/**
 * @param {number} p1
 * @return {void}
 */
PlayerMp.prototype.taskClimbLadder = function(p1) {};

/**
 * @param {number} targetPed
 * @param {number} p2
 * @param {number} p3
 * @return {void}
 */
PlayerMp.prototype.taskCombat = function(targetPed, p2, p3) {};

/**
 * @param {number} radius
 * @param {number} p2
 * @return {void}
 */
PlayerMp.prototype.taskCombatHatedTargetsAround = function(radius, p2) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {?} p5
 * @return {void}
 */
PlayerMp.prototype.taskCombatHatedTargetsInArea = function(x, y, z, radius, p5) {};

/**
 * @param {number} duration
 * @return {void}
 */
PlayerMp.prototype.taskCower = function(duration) {};

/**
 * @param {number} targetPed
 * @param {?} p2
 * @param {number} targetX
 * @param {number} targetY
 * @param {number} targetZ
 * @param {number} p6
 * @param {?} p7
 * @param {boolean} p8
 * @param {number} firingPattern
 * @return {void}
 */
PlayerMp.prototype.taskDriveBy = function(targetPed, p2, targetX, targetY, targetZ, p6, p7, p8, firingPattern) {};

/**
 * @param {number} vehicle
 * @param {number} timeout
 * @param {number} seat
 * @param {number} speed
 * @param {number} p5
 * @param {?} p6
 * @return {void}
 */
PlayerMp.prototype.taskEnterVehicle = function(vehicle, timeout, seat, speed, p5, p6) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} speed
 * @param {number} timeout
 * @param {number} stoppingRange
 * @param {boolean} persistFollowing
 * @param {number} unk
 * @return {void}
 */
PlayerMp.prototype.taskFollowNavMeshToCoord = function(x, y, z, speed, timeout, stoppingRange, persistFollowing, unk) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} speed
 * @param {number} timeout
 * @param {number} unkFloat
 * @param {number} unkInt
 * @param {number} unkX
 * @param {number} unkY
 * @param {number} unkZ
 * @param {number} unk2
 * @return {void}
 */
PlayerMp.prototype.taskFollowNavMeshToCoordAdvanced = function(x, y, z, speed, timeout, unkFloat, unkInt, unkX, unkY, unkZ, unk2) {};

/**
 * @param {number} speed
 * @param {number} unknown
 * @return {void}
 */
PlayerMp.prototype.taskFollowPointRoute = function(speed, unknown) {};

/**
 * @param {number} entity
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @param {number} movementSpeed
 * @param {number} timeout
 * @param {number} stoppingRange
 * @param {boolean} persistFollowing
 * @return {void}
 */
PlayerMp.prototype.taskFollowToOffsetOf = function(entity, offsetX, offsetY, offsetZ, movementSpeed, timeout, stoppingRange, persistFollowing) {};

/**
 * @param {number} state
 * @param {boolean} p2
 * @return {void}
 */
PlayerMp.prototype.taskForceMotionState = function(state, p2) {};

/**
 * @param {number} boat
 * @return {void}
 */
PlayerMp.prototype.taskGetOffBoat = function(boat) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} speed
 * @param {number} timeout
 * @param {number} targetHeading
 * @param {number} distanceToSlide
 * @return {void}
 */
PlayerMp.prototype.taskGoStraightToCoord = function(x, y, z, speed, timeout, targetHeading, distanceToSlide) {};

/**
 * @param {number} target
 * @param {number} distanceToStopAt
 * @param {number} StartAimingDist
 * @return {void}
 */
PlayerMp.prototype.taskGotoAiming = function(target, distanceToStopAt, StartAimingDist) {};

/**
 * @param {number} gotoX
 * @param {number} gotoY
 * @param {number} gotoZ
 * @param {number} aimNearX
 * @param {number} aimNearY
 * @param {number} aimNearZ
 * @param {number} speed
 * @param {boolean} shoot
 * @param {number} unknown1
 * @param {number} unknown2
 * @param {boolean} unkTrue
 * @param {number} unknown3
 * @param {boolean} heading
 * @param {number} firingPattern
 * @return {void}
 */
PlayerMp.prototype.taskGoToCoordAndAimAtHatedEntitiesNearCoord = function(gotoX, gotoY, gotoZ, aimNearX, aimNearY, aimNearZ, speed, shoot, unknown1, unknown2, unkTrue, unknown3, heading, firingPattern) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} speed
 * @param {?} p5
 * @param {boolean} p6
 * @param {number} walkingStyle
 * @param {number} p8
 * @return {void}
 */
PlayerMp.prototype.taskGoToCoordAnyMeans = function(x, y, z, speed, p5, p6, walkingStyle, p8) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} speed
 * @param {?} p5
 * @param {boolean} p6
 * @param {number} walkingStyle
 * @param {number} p8
 * @param {?} p9
 * @param {?} p10
 * @param {?} p11
 * @return {void}
 */
PlayerMp.prototype.taskGoToCoordAnyMeansExtraParams = function(x, y, z, speed, p5, p6, walkingStyle, p8, p9, p10, p11) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} speed
 * @param {?} p5
 * @param {boolean} p6
 * @param {number} walkingStyle
 * @param {number} p8
 * @param {?} p9
 * @param {?} p10
 * @param {?} p11
 * @param {?} p12
 * @return {void}
 */
PlayerMp.prototype.taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed = function(x, y, z, speed, p5, p6, walkingStyle, p8, p9, p10, p11, p12) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} aimAtX
 * @param {number} aimAtY
 * @param {number} aimAtZ
 * @param {number} moveSpeed
 * @param {boolean} p8
 * @param {number} p9
 * @param {number} p10
 * @param {boolean} p11
 * @param {?} flags
 * @param {boolean} p13
 * @param {number} firingPattern
 * @return {void}
 */
PlayerMp.prototype.taskGoToCoordWhileAimingAtCoord = function(x, y, z, aimAtX, aimAtY, aimAtZ, moveSpeed, p8, p9, p10, p11, flags, p13, firingPattern) {};

/**
 * @param {?} p1
 * @param {?} p2
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} duration
 * @return {void}
 */
PlayerMp.prototype.taskGotoOffset = function(p1, p2, x, y, z, duration) {};

/**
 * @param {number} entityToWalkTo
 * @param {number} entityToAimAt
 * @param {number} speed
 * @param {boolean} shootatEntity
 * @param {number} p5
 * @param {number} p6
 * @param {boolean} p7
 * @param {boolean} p8
 * @param {number} firingPattern
 * @return {void}
 */
PlayerMp.prototype.taskGoToWhileAimingAtEntity = function(entityToWalkTo, entityToAimAt, speed, shootatEntity, p5, p6, p7, p8, firingPattern) {};

/**
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @return {void}
 */
PlayerMp.prototype.taskGuardCurrentPosition = function(p1, p2, p3) {};

/**
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {?} p6
 * @param {number} p7
 * @param {number} p8
 * @param {number} p9
 * @param {number} p10
 * @return {void}
 */
PlayerMp.prototype.taskGuardSphereDefensiveArea = function(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) {};

/**
 * @param {number} duration
 * @param {number} facingPed
 * @param {number} p3
 * @param {boolean} p4
 * @return {void}
 */
PlayerMp.prototype.taskHandsUp = function(duration, facingPed, p3, p4) {};

/**
 * @param {number} entityToFollow
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
PlayerMp.prototype.taskHeliChase = function(entityToFollow, x, y, z) {};

/**
 * @param {number} vehicle
 * @param {?} p2
 * @param {number} pedToFollow
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} mode
 * @param {number} speed
 * @param {number} radius
 * @param {number} angle
 * @param {number} p11
 * @param {number} height
 * @param {number} p13
 * @param {number} p14
 * @return {void}
 */
PlayerMp.prototype.taskHeliMission = function(vehicle, p2, pedToFollow, posX, posY, posZ, mode, speed, radius, angle, p11, height, p13, p14) {};

/**
 * @param {boolean} unused
 * @return {void}
 */
PlayerMp.prototype.taskJump = function(unused) {};

/**
 * @param {number} p1
 * @param {number} p2
 * @return {void}
 */
PlayerMp.prototype.taskLeaveAnyVehicle = function(p1, p2) {};

/**
 * @param {number} vehicle
 * @param {number} flags
 * @return {void}
 */
PlayerMp.prototype.taskLeaveVehicle = function(vehicle, flags) {};

/**
 * @param {number} lookAt
 * @param {number} duration
 * @param {number} unknown1
 * @param {number} unknown2
 * @return {void}
 */
PlayerMp.prototype.taskLookAt = function(lookAt, duration, unknown1, unknown2) {};

/**
 * @param {string} task
 * @param {number} multiplier
 * @param {boolean} p3
 * @param {string} animDict
 * @param {number} flags
 * @return {void}
 */
PlayerMp.prototype.taskMoveNetwork = function(task, multiplier, p3, animDict, flags) {};

/**
 * @param {string} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {number} p7
 * @param {?} p8
 * @param {number} p9
 * @param {boolean} p10
 * @param {string} animDict
 * @param {number} flags
 * @return {void}
 */
PlayerMp.prototype.taskMoveNetworkAdvanced = function(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, animDict, flags) {};

/**
 * @param {number} vehicle
 * @param {number} timeOut
 * @param {number} doorIndex
 * @param {number} speed
 * @return {void}
 */
PlayerMp.prototype.taskOpenVehicleDoor = function(vehicle, timeOut, doorIndex, speed) {};

/**
 * @param {boolean} p1
 * @return {void}
 */
PlayerMp.prototype.taskParachute = function(p1) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
PlayerMp.prototype.taskParachuteToTarget = function(x, y, z) {};

/**
 * @param {string} p1
 * @param {?} p2
 * @param {boolean} p3
 * @param {boolean} p4
 * @return {void}
 */
PlayerMp.prototype.taskPatrol = function(p1, p2, p3, p4) {};

/**
 * @param {number} ms
 * @return {void}
 */
PlayerMp.prototype.taskPause = function(ms) {};

/**
 * @param {number} taskSequence
 * @return {void}
 */
PlayerMp.prototype.taskPerformSequence = function(taskSequence) {};

/**
 * @param {number} entityToFollow
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
PlayerMp.prototype.taskPlaneChase = function(entityToFollow, x, y, z) {};

/**
 * @param {number} plane
 * @param {number} runwayStartX
 * @param {number} runwayStartY
 * @param {number} runwayStartZ
 * @param {number} runwayEndX
 * @param {number} runwayEndY
 * @param {number} runwayEndZ
 * @return {void}
 */
PlayerMp.prototype.taskPlaneLand = function(plane, runwayStartX, runwayStartY, runwayStartZ, runwayEndX, runwayEndY, runwayEndZ) {};

/**
 * @param {number} plane
 * @param {number} targetVehicle
 * @param {number} targetPed
 * @param {number} destinationX
 * @param {number} destinationY
 * @param {number} destinationZ
 * @param {number} p7
 * @param {number} physicsSpeed
 * @param {number} p9
 * @param {number} p10
 * @param {number} maxAltitude
 * @param {number} minAltitude
 * @return {void}
 */
PlayerMp.prototype.taskPlaneMission = function(plane, targetVehicle, targetPed, destinationX, destinationY, destinationZ, p7, physicsSpeed, p9, p10, maxAltitude, minAltitude) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} heading
 * @return {void}
 */
PlayerMp.prototype.taskPlantBomb = function(x, y, z, heading) {};

/**
 * @param {string} animDictionary
 * @param {string} animationName
 * @param {number} speed
 * @param {number} speedMultiplier
 * @param {number} duration
 * @param {number} flag
 * @param {number} playbackRate
 * @param {boolean} lockX
 * @param {boolean} lockY
 * @param {boolean} lockZ
 * @return {void}
 */
PlayerMp.prototype.taskPlayAnim = function(animDictionary, animationName, speed, speedMultiplier, duration, flag, playbackRate, lockX, lockY, lockZ) {};

/**
 * @param {string} animDict
 * @param {string} animName
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {number} speed
 * @param {number} speedMultiplier
 * @param {number} duration
 * @param {?} flag
 * @param {number} animTime
 * @param {?} p14
 * @param {?} p15
 * @return {void}
 */
PlayerMp.prototype.taskPlayAnimAdvanced = function(animDict, animName, posX, posY, posZ, rotX, rotY, rotZ, speed, speedMultiplier, duration, flag, animTime, p14, p15) {};

/**
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {number} p4
 * @param {number} p5
 * @param {boolean} p6
 * @param {boolean} p7
 * @return {void}
 */
PlayerMp.prototype.taskPlayPhoneGestureAnimation = function(p1, p2, p3, p4, p5, p6, p7) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {?} timeout
 * @param {boolean} p5
 * @param {number} p6
 * @param {boolean} p7
 * @param {boolean} p8
 * @param {!Object} p9
 * @param {boolean} p10
 * @return {void}
 */
PlayerMp.prototype.taskPutDirectlyIntoCover = function(x, y, z, timeout, p5, p6, p7, p8, p9, p10) {};

/**
 * @param {number} meleeTarget
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {boolean} p5
 * @return {void}
 */
PlayerMp.prototype.taskPutDirectlyIntoMelee = function(meleeTarget, p2, p3, p4, p5) {};

/**
 * @param {number} p1
 * @return {void}
 */
PlayerMp.prototype.taskRappelFromHeli = function(p1) {};

/**
 * @param {number} fleeTarget
 * @return {void}
 */
PlayerMp.prototype.taskReactAndFlee = function(fleeTarget) {};

/**
 * @param {boolean} doReload
 * @return {void}
 */
PlayerMp.prototype.taskReloadWeapon = function(doReload) {};

/**
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {number} p4
 * @param {number} p5
 * @return {void}
 */
PlayerMp.prototype.taskScriptedAnimation = function(p1, p2, p3, p4, p5) {};

/**
 * @param {number} target
 * @param {number} duration
 * @param {boolean} p3
 * @return {void}
 */
PlayerMp.prototype.taskSeekCoverFrom = function(target, duration, p3) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {?} p7
 * @param {boolean} p8
 * @return {void}
 */
PlayerMp.prototype.taskSeekCoverToCoords = function(x1, y1, z1, x2, y2, z2, p7, p8) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
PlayerMp.prototype.taskSetBlockingOfNonTemporaryEvents = function(toggle) {};

/**
 * @param {number} p1
 * @return {void}
 */
PlayerMp.prototype.taskSetDecisionMaker = function(p1) {};

/**
 * @param {number} eventHandle
 * @return {void}
 */
PlayerMp.prototype.taskShockingEventReact = function(eventHandle) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} duration
 * @param {number} firingPattern
 * @return {void}
 */
PlayerMp.prototype.taskShootAtCoord = function(x, y, z, duration, firingPattern) {};

/**
 * @param {number} vehicle
 * @return {void}
 */
PlayerMp.prototype.taskShuffleToNextVehicleSeat = function(vehicle) {};

/**
 * @return {void}
 */
PlayerMp.prototype.taskSkyDive = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} heading
 * @param {number} p5
 * @return {void}
 */
PlayerMp.prototype.taskSlideToCoord = function(x, y, z, heading, p5) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} heading
 * @param {number} p5
 * @param {number} p6
 * @return {void}
 */
PlayerMp.prototype.taskSlideToCoordHdgRate = function(x, y, z, heading, p5, p6) {};

/**
 * @param {number} fleeTarget
 * @param {number} distance
 * @param {?} fleeTime
 * @param {boolean} p4
 * @param {boolean} p5
 * @return {void}
 */
PlayerMp.prototype.taskSmartFlee = function(fleeTarget, distance, fleeTime, p4, p5) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} distance
 * @param {number} time
 * @param {boolean} p6
 * @param {boolean} p7
 * @return {void}
 */
PlayerMp.prototype.taskSmartFleeCoord = function(x, y, z, distance, time, p6, p7) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} heading
 * @param {string} scenarioName
 * @return {void}
 */
PlayerMp.prototype.taskStandGuard = function(x, y, z, heading, scenarioName) {};

/**
 * @param {number} time
 * @return {void}
 */
PlayerMp.prototype.taskStandStill = function(time) {};

/**
 * @param {string} scenarioName
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} heading
 * @param {?} p6
 * @param {boolean} p7
 * @param {boolean} p8
 * @return {void}
 */
PlayerMp.prototype.taskStartScenarioAtPosition = function(scenarioName, x, y, z, heading, p6, p7, p8) {};

/**
 * @param {string} scenarioName
 * @param {number} unkDelay
 * @param {boolean} playEnterAnim
 * @return {void}
 */
PlayerMp.prototype.taskStartScenarioInPlace = function(scenarioName, unkDelay, playEnterAnim) {};

/**
 * @return {void}
 */
PlayerMp.prototype.taskStayInCover = function() {};

/**
 * @param {number} target
 * @param {number} killType
 * @param {number} p3
 * @param {boolean} p4
 * @return {void}
 */
PlayerMp.prototype.taskStealthKill = function(target, killType, p3, p4) {};

/**
 * @return {void}
 */
PlayerMp.prototype.taskStopPhoneGestureAnimation = function() {};

/**
 * @param {boolean} p1
 * @return {void}
 */
PlayerMp.prototype.taskSwapWeapon = function(p1) {};

/**
 * @param {string} anim
 * @param {string} p2
 * @param {string} p3
 * @param {string} p4
 * @param {number} p5
 * @param {number} vehicle
 * @param {number} p7
 * @param {number} p8
 * @return {void}
 */
PlayerMp.prototype.taskSweepAim = function(anim, p2, p3, p4, p5, vehicle, p7, p8) {};

/**
 * @param {number} scene
 * @param {string} animDictionary
 * @param {string} animationName
 * @param {number} speed
 * @param {number} speedMultiplier
 * @param {number} duration
 * @param {number} flag
 * @param {number} playbackRate
 * @param {?} p9
 * @return {void}
 */
PlayerMp.prototype.taskSynchronizedScene = function(scene, animDictionary, animationName, speed, speedMultiplier, duration, flag, playbackRate, p9) {};

/**
 * @param {number} entity
 * @param {number} duration
 * @return {void}
 */
PlayerMp.prototype.taskTurnToFace = function(entity, duration) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} duration
 * @return {void}
 */
PlayerMp.prototype.taskTurnToFaceCoord = function(x, y, z, duration) {};

/**
 * @param {number} p1
 * @return {void}
 */
PlayerMp.prototype.taskUseMobilePhone = function(p1) {};

/**
 * @param {number} duration
 * @return {void}
 */
PlayerMp.prototype.taskUseMobilePhoneTimed = function(duration) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {?} p5
 * @return {void}
 */
PlayerMp.prototype.taskUseNearestScenarioToCoordWarp = function(x, y, z, radius, p5) {};

/**
 * @param {number} target
 * @return {void}
 */
PlayerMp.prototype.taskVehicleAimAt = function(target) {};

/**
 * @param {number} targetEnt
 * @return {void}
 */
PlayerMp.prototype.taskVehicleChase = function(targetEnt) {};

/**
 * @param {number} vehicle
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} speed
 * @param {?} p6
 * @param {number} vehicleModel
 * @param {number} drivingMode
 * @param {number} stopRange
 * @param {number} p10
 * @return {void}
 */
PlayerMp.prototype.taskVehicleDriveToCoord = function(vehicle, x, y, z, speed, p6, vehicleModel, drivingMode, stopRange, p10) {};

/**
 * @param {number} vehicle
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} speed
 * @param {number} driveMode
 * @param {number} stopRange
 * @return {void}
 */
PlayerMp.prototype.taskVehicleDriveToCoordLongrange = function(vehicle, x, y, z, speed, driveMode, stopRange) {};

/**
 * @param {number} vehicle
 * @param {number} speed
 * @param {number} drivingStyle
 * @return {void}
 */
PlayerMp.prototype.taskVehicleDriveWander = function(vehicle, speed, drivingStyle) {};

/**
 * @param {number} vehicle
 * @param {number} targetVehicle
 * @param {number} mode
 * @param {number} speed
 * @param {number} drivingStyle
 * @param {number} minDistance
 * @param {number} p7
 * @param {number} noRoadsDistance
 * @return {void}
 */
PlayerMp.prototype.taskVehicleEscort = function(vehicle, targetVehicle, mode, speed, drivingStyle, minDistance, p7, noRoadsDistance) {};

/**
 * @param {number} vehicle
 * @param {number} targetEntity
 * @param {number} drivingStyle
 * @param {number} speed
 * @param {number} minDistance
 * @return {void}
 */
PlayerMp.prototype.taskVehicleFollow = function(vehicle, targetEntity, drivingStyle, speed, minDistance) {};

/**
 * @param {number} vehicle
 * @param {string} WPRecording
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {number} p7
 * @param {boolean} p8
 * @param {number} p9
 * @return {void}
 */
PlayerMp.prototype.taskVehicleFollowWaypointRecording = function(vehicle, WPRecording, p3, p4, p5, p6, p7, p8, p9) {};

/**
 * @param {number} vehicle
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} speed
 * @param {number} behaviorFlag
 * @param {number} stoppingRange
 * @return {void}
 */
PlayerMp.prototype.taskVehicleGotoNavmesh = function(vehicle, x, y, z, speed, behaviorFlag, stoppingRange) {};

/**
 * @param {number} vehicle
 * @param {number} entityToFollow
 * @param {number} targetSpeed
 * @param {number} p4
 * @param {number} radius
 * @param {number} altitude
 * @param {number} p7
 * @return {void}
 */
PlayerMp.prototype.taskVehicleHeliProtect = function(vehicle, entityToFollow, targetSpeed, p4, radius, altitude, p7) {};

/**
 * @param {number} vehicle
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} p5
 * @param {number} p6
 * @param {number} p7
 * @param {number} p8
 * @param {number} p9
 * @param {boolean} p10
 * @return {void}
 */
PlayerMp.prototype.taskVehicleMissionCoorsTarget = function(vehicle, x, y, z, p5, p6, p7, p8, p9, p10) {};

/**
 * @param {number} vehicle
 * @param {number} pedTarget
 * @param {number} mode
 * @param {number} maxSpeed
 * @param {number} drivingStyle
 * @param {number} minDistance
 * @param {number} p7
 * @param {boolean} p8
 * @return {void}
 */
PlayerMp.prototype.taskVehicleMissionTarget = function(vehicle, pedTarget, mode, maxSpeed, drivingStyle, minDistance, p7, p8) {};

/**
 * @param {number} vehicle
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} heading
 * @param {number} mode
 * @param {number} radius
 * @param {boolean} keepEngineOn
 * @return {void}
 */
PlayerMp.prototype.taskVehiclePark = function(vehicle, x, y, z, heading, mode, radius, keepEngineOn) {};

/**
 * @param {number} target
 * @param {number} p2
 * @return {void}
 */
PlayerMp.prototype.taskVehicleShootAt = function(target, p2) {};

/**
 * @param {number} vehicle
 * @param {number} action
 * @param {number} time
 * @return {void}
 */
PlayerMp.prototype.taskVehicleTempAction = function(vehicle, action, time) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {number} minimalLength
 * @param {number} timeBetweenWalks
 * @return {void}
 */
PlayerMp.prototype.taskWanderInArea = function(x, y, z, radius, minimalLength, timeBetweenWalks) {};

/**
 * @param {number} p1
 * @param {number} p2
 * @return {void}
 */
PlayerMp.prototype.taskWanderStandard = function(p1, p2) {};

/**
 * @param {number} vehicle
 * @param {number} seat
 * @return {void}
 */
PlayerMp.prototype.taskWarpIntoVehicle = function(vehicle, seat) {};

/**
 * @param {number} target
 * @param {number} time
 * @param {number} p3
 * @return {void}
 */
PlayerMp.prototype.taskWrithe = function(target, time, p3) {};

/**
 * @return {void}
 */
PlayerMp.prototype.uncuff = function() {};

/**
 * @return {void}
 */
PlayerMp.prototype.unregisterheadshot = function() {};

/**
 * @param {number} shapeMix
 * @param {number} skinMix
 * @param {number} thirdMix
 * @return {void}
 */
PlayerMp.prototype.updateHeadBlendData = function(shapeMix, skinMix, thirdMix) {};

/**
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {boolean} p5
 * @return {void}
 */
PlayerMp.prototype.updateTaskAimGunScriptedTarget = function(p1, p2, p3, p4, p5) {};

/**
 * @param {number} duration
 * @return {void}
 */
PlayerMp.prototype.updateTaskHandsUpDuration = function(duration) {};

/**
 * @param {number} entity
 * @return {void}
 */
PlayerMp.prototype.updateTaskSweepAim = function(entity) {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.wasKilledByStealth = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.wasKilledByTakedown = function() {};

/**
 * @return {boolean}
 */
PlayerMp.prototype.wasSkeletonUpdated = function() {};
/**
 * @extends {EntityMp}
 * @record
 * @struct
 */
function TextLabelMp() {}
/** @type {!Array<?>} */
TextLabelMp.prototype.color;
/** @type {number} */
TextLabelMp.prototype.drawDistance;
/** @type {boolean} */
TextLabelMp.prototype.los;
/** @type {string} */
TextLabelMp.prototype.text;
/**
 * @extends {EntityMp}
 * @record
 * @struct
 */
function VehicleMp() {}
/** @type {number} */
VehicleMp.prototype.gear;
/** @type {number} */
VehicleMp.prototype.rpm;
/** @type {number} */
VehicleMp.prototype.steeringAngle;

/**
 * @return {void}
 */
VehicleMp.prototype.addUpsidedownCheck = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.areAllWindowsIntact = function() {};

/**
 * @param {number} cargobob
 * @param {number} p1
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
VehicleMp.prototype.attachToCargobob = function(cargobob, p1, x, y, z) {};

/**
 * @param {number} vehicle
 * @param {boolean} rear
 * @param {number} hookOffsetX
 * @param {number} hookOffsetY
 * @param {number} hookOffsetZ
 * @return {void}
 */
VehicleMp.prototype.attachToTowTruck = function(vehicle, rear, hookOffsetX, hookOffsetY, hookOffsetZ) {};

/**
 * @param {number} trailer
 * @param {number} radius
 * @return {void}
 */
VehicleMp.prototype.attachToTrailer = function(trailer, radius) {};

/**
 * @param {?} p0
 * @return {boolean}
 */
VehicleMp.prototype.canShuffleSeat = function(p0) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.cargobobMagnetGrab = function(toggle) {};

/**
 * @return {void}
 */
VehicleMp.prototype.clearCustomPrimaryColour = function() {};

/**
 * @return {void}
 */
VehicleMp.prototype.clearCustomSecondaryColour = function() {};

/**
 * @return {void}
 */
VehicleMp.prototype.closeBombBayDoors = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.detachFromAnyCargobob = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.detachFromAnyTowTruck = function() {};

/**
 * @param {number} cargobob
 * @return {void}
 */
VehicleMp.prototype.detachFromCargobob = function(cargobob) {};

/**
 * @param {number} vehicle
 * @return {void}
 */
VehicleMp.prototype.detachFromTowTruck = function(vehicle) {};

/**
 * @return {void}
 */
VehicleMp.prototype.detachFromTrailer = function() {};

/**
 * @return {void}
 */
VehicleMp.prototype.detachWindscreen = function() {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.disableImpactExplosionActivation = function(toggle) {};

/**
 * @param {boolean} p0
 * @param {boolean} p1
 * @return {void}
 */
VehicleMp.prototype.disablePlaneAileron = function(p0, p1) {};

/**
 * @param {number} extraId
 * @return {boolean}
 */
VehicleMp.prototype.doesExtraExist = function(extraId) {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.doesHaveRoof = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.doesHaveStuckVehicleCheck = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.doesHaveWeapon = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
VehicleMp.prototype.ejectJb700Roof = function(x, y, z) {};

/**
 * @param {number} state
 * @return {void}
 */
VehicleMp.prototype.enableCargobobHook = function(state) {};

/**
 * @param {boolean} isAudible
 * @param {boolean} isInvisble
 * @return {void}
 */
VehicleMp.prototype.explode = function(isAudible, isInvisble) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
VehicleMp.prototype.explodeInCutscene = function(p0) {};

/**
 * @param {number} index
 * @return {void}
 */
VehicleMp.prototype.fixWindow = function(index) {};

/**
 * @return {number}
 */
VehicleMp.prototype.getAcceleration = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getAttachedToCargobob = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getAttachedToTowTruck = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.getBoatAnchor = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getBodyHealth = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getBodyHealth2 = function() {};

/**
 * @return {function(new: (?), number, number, number): ?}
 */
VehicleMp.prototype.getCargobobHookPosition = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getCauseOfDestruction = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getClass = function() {};

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {{r: number, g: number, b: number}}
 */
VehicleMp.prototype.getColor = function(r, g, b) {};

/**
 * @return {number}
 */
VehicleMp.prototype.getColourCombination = function() {};

/**
 * @param {number} colorPrimary
 * @param {number} colorSecondary
 * @return {{colorPrimary: number, colorSecondary: number}}
 */
VehicleMp.prototype.getColours = function(colorPrimary, colorSecondary) {};

/**
 * @return {number}
 */
VehicleMp.prototype.getConvertibleRoofState = function() {};

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {{r: number, g: number, b: number}}
 */
VehicleMp.prototype.getCustomPrimaryColour = function(r, g, b) {};

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {{r: number, g: number, b: number}}
 */
VehicleMp.prototype.getCustomSecondaryColour = function(r, g, b) {};

/**
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @return {function(new: (?), number, number, number): ?}
 */
VehicleMp.prototype.getDeformationAtPos = function(offsetX, offsetY, offsetZ) {};

/**
 * @return {number}
 */
VehicleMp.prototype.getDirtLevel = function() {};

/**
 * @param {number} door
 * @return {number}
 */
VehicleMp.prototype.getDoorAngleRatio = function(door) {};

/**
 * @return {number}
 */
VehicleMp.prototype.getDoorLockStatus = function() {};

/**
 * @param {number} player
 * @return {boolean}
 */
VehicleMp.prototype.getDoorsLockedForPlayer = function(player) {};

/**
 * @return {number}
 */
VehicleMp.prototype.getEngineHealth = function() {};

/**
 * @param {number} pearlescentColor
 * @param {number} wheelColor
 * @return {{pearlescentColor: number, wheelColor: number}}
 */
VehicleMp.prototype.getExtraColours = function(pearlescentColor, wheelColor) {};

/**
 * @return {number}
 */
VehicleMp.prototype.getHeliEngineHealth = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getHeliMainRotorHealth = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getHeliTailRotorHealth = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.getIsEngineRunning = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.getIsLeftHeadlightDamaged = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.getIsPrimaryColourCustom = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.getIsRightHeadlightDamaged = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.getIsSecondaryColourCustom = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getLandingGearState = function() {};

/**
 * @param {number} seatIndex
 * @return {number}
 */
VehicleMp.prototype.getLastPedInSeat = function(seatIndex) {};

/**
 * @return {number}
 */
VehicleMp.prototype.getLayoutHash = function() {};

/**
 * @param {boolean} lightsOn
 * @param {boolean} highbeamsOn
 * @return {{lightsOn: boolean, highbeamsOn: boolean}}
 */
VehicleMp.prototype.getLightsState = function(lightsOn, highbeamsOn) {};

/**
 * @return {number}
 */
VehicleMp.prototype.getLivery = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getLiveryCount = function() {};

/**
 * @param {number} liveryIndex
 * @return {string}
 */
VehicleMp.prototype.getLiveryName = function(liveryIndex) {};

/**
 * @return {number}
 */
VehicleMp.prototype.getMaxBreaking = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getMaxNumberOfPassengers = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getMaxTraction = function() {};

/**
 * @param {number} modType
 * @return {number}
 */
VehicleMp.prototype.getMod = function(modType) {};

/**
 * @param {number} paintType
 * @param {number} color
 * @param {number} p2
 * @return {{paintType: number, color: number, p2: number}}
 */
VehicleMp.prototype.getModColor1 = function(paintType, color, p2) {};

/**
 * @param {boolean} p0
 * @return {string}
 */
VehicleMp.prototype.getModColor1TextLabel = function(p0) {};

/**
 * @param {number} paintType
 * @param {number} color
 * @return {{paintType: number, color: number, p2: number}}
 */
VehicleMp.prototype.getModColor2 = function(paintType, color) {};

/**
 * @return {string}
 */
VehicleMp.prototype.getModColor2TextLabel = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getModKit = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getModKitType = function() {};

/**
 * @param {number} modType
 * @param {number} modIndex
 * @return {?}
 */
VehicleMp.prototype.getModModifierValue = function(modType, modIndex) {};

/**
 * @param {number} modType
 * @return {string}
 */
VehicleMp.prototype.getModSlotName = function(modType) {};

/**
 * @param {number} modType
 * @param {number} modValue
 * @return {string}
 */
VehicleMp.prototype.getModTextLabel = function(modType, modValue) {};

/**
 * @param {number} modType
 * @return {boolean}
 */
VehicleMp.prototype.getModVariation = function(modType) {};

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {{r: number, g: number, b: number}}
 */
VehicleMp.prototype.getNeonLightsColour = function(r, g, b) {};

/**
 * @return {number}
 */
VehicleMp.prototype.getNumberOfColours = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getNumberOfPassengers = function() {};

/**
 * @return {string}
 */
VehicleMp.prototype.getNumberPlateText = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getNumberPlateTextIndex = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getNumModKits = function() {};

/**
 * @param {number} modType
 * @return {number}
 */
VehicleMp.prototype.getNumMods = function(modType) {};

/**
 * @param {number} entity
 * @return {boolean}
 */
VehicleMp.prototype.getOwner = function(entity) {};

/**
 * @return {number}
 */
VehicleMp.prototype.getPaintFade = function() {};

/**
 * @param {number} index
 * @return {number}
 */
VehicleMp.prototype.getPedInSeat = function(index) {};

/**
 * @param {number} doorIndex
 * @return {number}
 */
VehicleMp.prototype.getPedUsingDoor = function(doorIndex) {};

/**
 * @return {number}
 */
VehicleMp.prototype.getPetrolTankHealth = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getPlateType = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getSuspensionHeight = function() {};

/**
 * @param {number} vehicle
 * @return {number}
 */
VehicleMp.prototype.getTrailer = function(vehicle) {};

/**
 * @param {number} cariage
 * @return {number}
 */
VehicleMp.prototype.getTrainCarriage = function(cariage) {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.getTyresCanBurst = function() {};

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {{r: number, g: number, b: number}}
 */
VehicleMp.prototype.getTyreSmokeColor = function(r, g, b) {};

/**
 * @param {number} vehicle
 * @return {number}
 */
VehicleMp.prototype.getVehicleTrailer = function(vehicle) {};

/**
 * @return {number}
 */
VehicleMp.prototype.getWheelType = function() {};

/**
 * @return {number}
 */
VehicleMp.prototype.getWindowTint = function() {};

/**
 * @param {boolean} p0
 * @return {boolean}
 */
VehicleMp.prototype.isAConvertible = function(p0) {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.isAlarmActivated = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.isAnySeatEmpty = function() {};

/**
 * @param {number} vehicleAttached
 * @return {boolean}
 */
VehicleMp.prototype.isAttachedToCargobob = function(vehicleAttached) {};

/**
 * @param {number} vehicle
 * @return {boolean}
 */
VehicleMp.prototype.isAttachedToTowTruck = function(vehicle) {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.isAttachedToTrailer = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.isBig = function() {};

/**
 * @param {boolean} front
 * @return {boolean}
 */
VehicleMp.prototype.isBumberBrokenOff = function(front) {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.isCargobobHookActive = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.isCargobobMagnetActive = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.isDamaged = function() {};

/**
 * @param {number} doorId
 * @return {boolean}
 */
VehicleMp.prototype.isDoorDamaged = function(doorId) {};

/**
 * @param {boolean} p0
 * @return {boolean}
 */
VehicleMp.prototype.isDriveable = function(p0) {};

/**
 * @param {number} extraId
 * @return {boolean}
 */
VehicleMp.prototype.isExtraTurnedOn = function(extraId) {};

/**
 * @param {boolean} p0
 * @param {boolean} p1
 * @param {boolean} p2
 * @return {boolean}
 */
VehicleMp.prototype.isHeliPartBroken = function(p0, p1, p2) {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.isHighDetail = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.isInBurnout = function() {};

/**
 * @param {number} model
 * @return {boolean}
 */
VehicleMp.prototype.isModel = function(model) {};

/**
 * @param {number} index
 * @return {boolean}
 */
VehicleMp.prototype.isNeaonLightEnabled = function(index) {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.isOnAllWheels = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.isSearchlightOn = function() {};

/**
 * @param {number} seatIndex
 * @return {boolean}
 */
VehicleMp.prototype.isSeatFree = function(seatIndex) {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.isSirenOn = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.isSirenSoundOn = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.isStolen = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.isStopped = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.isStoppedAtTrafficLights = function() {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.isStuckOnRoof = function() {};

/**
 * @param {number} p0
 * @param {number} p1
 * @return {boolean}
 */
VehicleMp.prototype.isStuckTimerUp = function(p0, p1) {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.isTaxiLightOn = function() {};

/**
 * @param {number} modType
 * @return {boolean}
 */
VehicleMp.prototype.isToggleModOn = function(modType) {};

/**
 * @param {number} wheelId
 * @param {boolean} completely
 * @return {boolean}
 */
VehicleMp.prototype.isTyreBurst = function(wheelId, completely) {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.isVisible = function() {};

/**
 * @param {number} windowIndex
 * @return {boolean}
 */
VehicleMp.prototype.isWindowIntact = function(windowIndex) {};

/**
 * @param {boolean} p0
 * @param {number} yaw
 * @param {number} pitch
 * @param {number} roll
 * @return {void}
 */
VehicleMp.prototype.jitter = function(p0, yaw, pitch, roll) {};

/**
 * @param {boolean} instantlyLower
 * @return {void}
 */
VehicleMp.prototype.lowerConvertibleRoof = function(instantlyLower) {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.movable = function() {};

/**
 * @return {void}
 */
VehicleMp.prototype.openBombBayDoors = function() {};

/**
 * @param {boolean} instantlyRaise
 * @return {void}
 */
VehicleMp.prototype.raiseConvertibleRoof = function(instantlyRaise) {};

/**
 * @return {void}
 */
VehicleMp.prototype.releasePreloadMods = function() {};

/**
 * @return {void}
 */
VehicleMp.prototype.removeHighDetailModel = function() {};

/**
 * @param {number} modType
 * @return {void}
 */
VehicleMp.prototype.removeMod = function(modType) {};

/**
 * @return {void}
 */
VehicleMp.prototype.removeUpsidedownCheck = function() {};

/**
 * @param {number} windowIndex
 * @return {void}
 */
VehicleMp.prototype.removeWindow = function(windowIndex) {};

/**
 * @return {void}
 */
VehicleMp.prototype.requestHighDetailModel = function() {};

/**
 * @param {boolean} reset
 * @return {void}
 */
VehicleMp.prototype.resetStuckTimer = function(reset) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.resetWheels = function(toggle) {};

/**
 * @return {void}
 */
VehicleMp.prototype.retractCargobobHook = function() {};

/**
 * @param {number} windowIndex
 * @return {void}
 */
VehicleMp.prototype.rollDownWindow = function(windowIndex) {};

/**
 * @return {void}
 */
VehicleMp.prototype.rollDownWindows = function() {};

/**
 * @param {number} windowIndex
 * @return {void}
 */
VehicleMp.prototype.rollUpWindow = function(windowIndex) {};

/**
 * @param {boolean} state
 * @return {void}
 */
VehicleMp.prototype.setAlarm = function(state) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setAllowNoPassengersLockon = function(toggle) {};

/**
 * @param {boolean} p0
 * @param {boolean} p1
 * @param {boolean} p2
 * @return {void}
 */
VehicleMp.prototype.setAllsSpawns = function(p0, p1, p2) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {void}
 */
VehicleMp.prototype.setAutomaticallyAttaches = function(p0, p1) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
VehicleMp.prototype.setBikeLeanAngle = function(x, y) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setBoatAnchor = function(toggle) {};

/**
 * @param {number} value
 * @return {void}
 */
VehicleMp.prototype.setBodyHealth = function(value) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setBreakLights = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setBurnout = function(toggle) {};

/**
 * @param {boolean} state
 * @return {void}
 */
VehicleMp.prototype.setCanBeTargetted = function(state) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setCanBeUsedByFleeingPeds = function(toggle) {};

/**
 * @param {boolean} state
 * @return {void}
 */
VehicleMp.prototype.setCanBeVisiblyDamaged = function(state) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setCanBreak = function(toggle) {};

/**
 * @param {boolean} state
 * @return {void}
 */
VehicleMp.prototype.setCanRespray = function(state) {};

/**
 * @param {number} p0
 * @return {void}
 */
VehicleMp.prototype.setCeilingHeight = function(p0) {};

/**
 * @param {number} numCombos
 * @return {void}
 */
VehicleMp.prototype.setColourCombination = function(numCombos) {};

/**
 * @param {number} colorPrimary
 * @param {number} colorSecondary
 * @return {void}
 */
VehicleMp.prototype.setColours = function(colorPrimary, colorSecondary) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
VehicleMp.prototype.setConvertibleRoof = function(p0) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setCreatesMoneyPickupsWhenExploded = function(toggle) {};

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {void}
 */
VehicleMp.prototype.setCustomPrimaryColour = function(r, g, b) {};

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {void}
 */
VehicleMp.prototype.setCustomSecondaryColour = function(r, g, b) {};

/**
 * @param {number} xOffset
 * @param {number} yOffset
 * @param {number} zOffset
 * @param {number} damage
 * @param {number} radius
 * @param {boolean} p5
 * @return {void}
 */
VehicleMp.prototype.setDamage = function(xOffset, yOffset, zOffset, damage, radius, p5) {};

/**
 * @return {void}
 */
VehicleMp.prototype.setDeformationFixed = function() {};

/**
 * @param {number} dirtLevel
 * @return {void}
 */
VehicleMp.prototype.setDirtLevel = function(dirtLevel) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setDisablePetrolTankDamage = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setDisablePetrolTankFires = function(toggle) {};

/**
 * @param {number} doorIndex
 * @param {boolean} isBreakable
 * @return {void}
 */
VehicleMp.prototype.setDoorBreakable = function(doorIndex, isBreakable) {};

/**
 * @param {number} doorIndex
 * @param {boolean} createDoorObject
 * @return {void}
 */
VehicleMp.prototype.setDoorBroken = function(doorIndex, createDoorObject) {};

/**
 * @param {number} doorIndex
 * @param {number} speed
 * @param {number} angle
 * @return {void}
 */
VehicleMp.prototype.setDoorControl = function(doorIndex, speed, angle) {};

/**
 * @param {number} doorIndex
 * @param {boolean} p1
 * @param {boolean} p2
 * @param {boolean} p3
 * @return {void}
 */
VehicleMp.prototype.setDoorLatched = function(doorIndex, p1, p2, p3) {};

/**
 * @param {number} doorIndex
 * @param {boolean} loose
 * @param {boolean} openInstantly
 * @return {void}
 */
VehicleMp.prototype.setDoorOpen = function(doorIndex, loose, openInstantly) {};

/**
 * @param {number} doorIndex
 * @param {boolean} closeInstantly
 * @return {void}
 */
VehicleMp.prototype.setDoorShut = function(doorIndex, closeInstantly) {};

/**
 * @param {number} doorLockStatus
 * @return {void}
 */
VehicleMp.prototype.setDoorsLocked = function(doorLockStatus) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setDoorsLockedForAllPlayers = function(toggle) {};

/**
 * @param {number} player
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setDoorsLockedForPlayer = function(player, toggle) {};

/**
 * @param {number} team
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setDoorsLockedForTeam = function(team, toggle) {};

/**
 * @param {boolean} closeInstantly
 * @return {void}
 */
VehicleMp.prototype.setDoorsShut = function(closeInstantly) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setEngineCanDegrade = function(toggle) {};

/**
 * @param {number} health
 * @return {void}
 */
VehicleMp.prototype.setEngineHealth = function(health) {};

/**
 * @param {boolean} value
 * @param {boolean} instantly
 * @param {boolean} otherwise
 * @return {void}
 */
VehicleMp.prototype.setEngineOn = function(value, instantly, otherwise) {};

/**
 * @param {number} value
 * @return {void}
 */
VehicleMp.prototype.setEnginePowerMultiplier = function(value) {};

/**
 * @param {number} value
 * @return {void}
 */
VehicleMp.prototype.setEngineTorqueMultiplier = function(value) {};

/**
 * @param {number} ped
 * @param {number} p1
 * @return {void}
 */
VehicleMp.prototype.setExclusiveDriver = function(ped, p1) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setExplodesOnHighExplosionDamage = function(toggle) {};

/**
 * @param {number} extraId
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setExtra = function(extraId, toggle) {};

/**
 * @param {number} pearlescentColor
 * @param {number} wheelColor
 * @return {void}
 */
VehicleMp.prototype.setExtraColours = function(pearlescentColor, wheelColor) {};

/**
 * @return {void}
 */
VehicleMp.prototype.setFixed = function() {};

/**
 * @param {number} speed
 * @return {void}
 */
VehicleMp.prototype.setForwardSpeed = function(speed) {};

/**
 * @param {number} friction
 * @return {void}
 */
VehicleMp.prototype.setFrictionOverride = function(friction) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setFullbeam = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setGravity = function(toggle) {};

/**
 * @param {number} distance
 * @param {boolean} killEngine
 * @param {boolean} unknown
 * @return {void}
 */
VehicleMp.prototype.setHalt = function(distance, killEngine, unknown) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setHandbrake = function(toggle) {};

/**
 * @param {string} typeName
 * @param {(string|number)} value
 * @return {void}
 */
VehicleMp.prototype.setHandling = function(typeName, value) {};

/**
 * @param {boolean} owned
 * @return {void}
 */
VehicleMp.prototype.setHasBeenOwnedByPlayer = function(owned) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setHasStrongAxles = function(toggle) {};

/**
 * @return {void}
 */
VehicleMp.prototype.setHeliBladesFullSpeed = function() {};

/**
 * @param {number} speed
 * @return {void}
 */
VehicleMp.prototype.setHeliBladeSpeed = function(speed) {};

/**
 * @param {number} multiplier
 * @return {void}
 */
VehicleMp.prototype.setHelicopterRollPitchYawMult = function(multiplier) {};

/**
 * @param {number} turnSignal
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setIndicatorLights = function(turnSignal, toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setInteriorLight = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setIsConsideredByPlayer = function(toggle) {};

/**
 * @param {boolean} isStolen
 * @return {void}
 */
VehicleMp.prototype.setIsStolen = function(isStolen) {};

/**
 * @param {boolean} state
 * @return {void}
 */
VehicleMp.prototype.setIsWanted = function(state) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setJetEngineOn = function(toggle) {};

/**
 * @param {number} state
 * @return {void}
 */
VehicleMp.prototype.setLandingGear = function(state) {};

/**
 * @param {number} multiplier
 * @return {void}
 */
VehicleMp.prototype.setLightMultiplier = function(multiplier) {};

/**
 * @param {(number|boolean)} state
 * @return {void}
 */
VehicleMp.prototype.setLights = function(state) {};

/**
 * @param {number} livery
 * @return {void}
 */
VehicleMp.prototype.setLivery = function(livery) {};

/**
 * @param {number} multiplier
 * @return {void}
 */
VehicleMp.prototype.setLodMultiplier = function(multiplier) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
VehicleMp.prototype.setMissionTrainCoords = function(x, y, z) {};

/**
 * @param {number} modType
 * @param {number} modIndex
 * @return {void}
 */
VehicleMp.prototype.setMod = function(modType, modIndex) {};

/**
 * @param {number} paintType
 * @param {number} color
 * @param {number} p2
 * @return {void}
 */
VehicleMp.prototype.setModColor1 = function(paintType, color, p2) {};

/**
 * @param {number} paintType
 * @param {number} color
 * @return {void}
 */
VehicleMp.prototype.setModColor2 = function(paintType, color) {};

/**
 * @param {number} modKit
 * @return {void}
 */
VehicleMp.prototype.setModKit = function(modKit) {};

/**
 * @param {string} name
 * @return {void}
 */
VehicleMp.prototype.setNameDebug = function(name) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setNeedsToBeHotwired = function(toggle) {};

/**
 * @param {number} index
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setNeonLightEnabled = function(index, toggle) {};

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {void}
 */
VehicleMp.prototype.setNeonLightsColour = function(r, g, b) {};

/**
 * @param {string} plateText
 * @return {void}
 */
VehicleMp.prototype.setNumberPlateText = function(plateText) {};

/**
 * @param {number} plateIndex
 * @return {void}
 */
VehicleMp.prototype.setNumberPlateTextIndex = function(plateIndex) {};

/**
 * @return {boolean}
 */
VehicleMp.prototype.setOnGroundProperly = function() {};

/**
 * @param {boolean} killDriver
 * @param {boolean} explodeOnImpact
 * @return {void}
 */
VehicleMp.prototype.setOutOfControl = function(killDriver, explodeOnImpact) {};

/**
 * @param {number} fade
 * @return {void}
 */
VehicleMp.prototype.setPaintFade = function(fade) {};

/**
 * @param {?} p0
 * @return {boolean}
 */
VehicleMp.prototype.setPedEnabledBikeRingtone = function(p0) {};

/**
 * @param {number} vehicleComponent
 * @param {number} destroyType
 * @return {void}
 */
VehicleMp.prototype.setPedTargettableDestory = function(vehicleComponent, destroyType) {};

/**
 * @param {number} fix
 * @return {void}
 */
VehicleMp.prototype.setPetrolTankHealth = function(fix) {};

/**
 * @param {number} height
 * @return {void}
 */
VehicleMp.prototype.setPlaneMinHeightAboveGround = function(height) {};

/**
 * @param {number} flag
 * @return {void}
 */
VehicleMp.prototype.setPlaybackToUseAi = function(flag) {};

/**
 * @return {void}
 */
VehicleMp.prototype.setPlayersLast = function() {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setProvidesCover = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setReduceGrip = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setRenderTrainAsDerailed = function(toggle) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
VehicleMp.prototype.setRudderBroken = function(p0) {};

/**
 * @param {boolean} toggle
 * @param {boolean} canBeUsedByAI
 * @return {void}
 */
VehicleMp.prototype.setSearchlight = function(toggle, canBeUsedByAI) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setSilent = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setSiren = function(toggle) {};

/**
 * @param {number} value
 * @return {void}
 */
VehicleMp.prototype.setSteerBias = function(value) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setStrong = function(toggle) {};

/**
 * @param {boolean} state
 * @return {void}
 */
VehicleMp.prototype.setTaxiLight = function(state) {};

/**
 * @param {number} ped
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setTimedExplosion = function(ped, toggle) {};

/**
 * @param {number} height
 * @return {void}
 */
VehicleMp.prototype.setTowTruckCraneHeight = function(height) {};

/**
 * @param {number} speed
 * @return {void}
 */
VehicleMp.prototype.setTrainCruiseSpeed = function(speed) {};

/**
 * @param {number} speed
 * @return {void}
 */
VehicleMp.prototype.setTrainSpeed = function(speed) {};

/**
 * @param {number} tyreIndex
 * @param {boolean} onRim
 * @param {number} p2
 * @return {void}
 */
VehicleMp.prototype.setTyreBurst = function(tyreIndex, onRim, p2) {};

/**
 * @param {number} tyreIndex
 * @return {void}
 */
VehicleMp.prototype.setTyreFixed = function(tyreIndex) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setTyresCanBurst = function(toggle) {};

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {void}
 */
VehicleMp.prototype.setTyreSmokeColor = function(r, g, b) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setUndriveable = function(toggle) {};

/**
 * @param {boolean} enabled
 * @return {void}
 */
VehicleMp.prototype.setWheelsCanBreak = function(enabled) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.setWheelsCanBreakOffWhenBlowUp = function(toggle) {};

/**
 * @param {number} wheelType
 * @return {void}
 */
VehicleMp.prototype.setWheelType = function(wheelType) {};

/**
 * @param {number} tint
 * @return {void}
 */
VehicleMp.prototype.setWindowTint = function(tint) {};

/**
 * @param {number} index
 * @return {void}
 */
VehicleMp.prototype.smashWindow = function(index) {};

/**
 * @return {void}
 */
VehicleMp.prototype.startAlarm = function() {};

/**
 * @param {number} duration
 * @param {number} model
 * @param {boolean} forever
 * @return {void}
 */
VehicleMp.prototype.startHorn = function(duration, model, forever) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.steerUnlockBias = function(toggle) {};

/**
 * @param {number} modType
 * @param {boolean} toggle
 * @return {void}
 */
VehicleMp.prototype.toggleMod = function(modType, toggle) {};

/**
 * @return {void}
 */
VehicleMp.prototype.trackVisibility = function() {};

/**
 * @param {?} p0
 * @return {boolean}
 */
VehicleMp.prototype.wasCounterActivated = function(p0) {};
/**
 * @record
 * @struct
 */
function BrowserMp() {}
/** @type {boolean} */
BrowserMp.prototype.active;
/** @type {string} */
BrowserMp.prototype.url;

/**
 * @return {void}
 */
BrowserMp.prototype.destroy = function() {};

/**
 * @param {string} code
 * @return {void}
 */
BrowserMp.prototype.execute = function(code) {};

/**
 * @return {void}
 */
BrowserMp.prototype.markAsChat = function() {};

/**
 * @param {boolean} ignoreCache
 * @return {void}
 */
BrowserMp.prototype.reload = function(ignoreCache) {};
/**
 * @record
 * @struct
 */
function CameraMp() {}
/** @type {number} */
CameraMp.prototype.handle;

/**
 * @param {string} p0
 * @param {string} p1
 * @param {string} p2
 * @param {number} p3
 * @return {void}
 */
CameraMp.prototype.animatedShake = function(p0, p1, p2, p3) {};

/**
 * @param {number} entity
 * @param {number} boneIndex_or_xOffset
 * @param {number} xPos_or_yOffset
 * @param {number} yPos_or_zOffset
 * @param {number|boolean} zPos_or_isRelative
 * @param {number=} xRot
 * @param {number=} yRot
 * @param {number=} zRot
 * @param {boolean=} p8
 * @param {boolean=} useSoftPinning
 * @param {boolean=} collision
 * @param {boolean=} isPed
 * @param {number=} vertexIndex
 * @param {boolean=} fixedRot
 * @return {void}
 */
CameraMp.prototype.attachTo = function(entity, boneIndex_or_xOffset, xPos_or_yOffset, yPos_or_zOffset, zPos_or_isRelative, xRot, yRot, zRot, p8, useSoftPinning, collision, isPed, vertexIndex, fixedRot) {};

/**
 * @param {number} ped
 * @param {number} boneIndex
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} heading
 * @return {void}
 */
CameraMp.prototype.attachToPedBone = function(ped, boneIndex, x, y, z, heading) {};

/**
 * @param {boolean=} destroy
 * @return {void}
 */
CameraMp.prototype.destroy = function(destroy) {};

/**
 * @return {void}
 */
CameraMp.prototype.detach = function() {};

/**
 * @return {boolean}
 */
CameraMp.prototype.doesExist = function() {};

/**
 * @return {number}
 */
CameraMp.prototype.getAnimCurrentPhase = function() {};

/**
 * @return {function(new: (?), number, number, number): ?}
 */
CameraMp.prototype.getCoord = function() {};

/**
 * @return {function(new: (?), number, number, number): ?}
 */
CameraMp.prototype.getDirection = function() {};

/**
 * @return {number}
 */
CameraMp.prototype.getFarClip = function() {};

/**
 * @return {number}
 */
CameraMp.prototype.getFarDof = function() {};

/**
 * @return {number}
 */
CameraMp.prototype.getFov = function() {};

/**
 * @return {number}
 */
CameraMp.prototype.getNearClip = function() {};

/**
 * @param {number} p0
 * @return {function(new: (?), number, number, number): ?}
 */
CameraMp.prototype.getRot = function(p0) {};

/**
 * @return {number}
 */
CameraMp.prototype.getSplinePhase = function() {};

/**
 * @return {boolean}
 */
CameraMp.prototype.isActive = function() {};

/**
 * @return {boolean}
 */
CameraMp.prototype.isInterpolating = function() {};

/**
 * @param {string} animName
 * @param {string} animDictionary
 * @return {boolean}
 */
CameraMp.prototype.isPlayingAnim = function(animName, animDictionary) {};

/**
 * @return {boolean}
 */
CameraMp.prototype.isRendering = function() {};

/**
 * @return {boolean}
 */
CameraMp.prototype.isShaking = function() {};

/**
 * @param {string} animName
 * @param {string} animDictionary_or_propName
 * @param {number} x_or_p2
 * @param {number|boolean} y_or_p3
 * @param {number|boolean} z_or_p4
 * @param {number|boolean} xRot_or_p5
 * @param {number} yRot_or_delta
 * @param {number|?} zRot_or_bitset
 * @param {boolean=} p8
 * @param {number=} p9
 * @return {void|boolean}
 */
CameraMp.prototype.playAnim = function(animName, animDictionary_or_propName, x_or_p2, y_or_p3, z_or_p4, xRot_or_p5, yRot_or_delta, zRot_or_bitset, p8, p9) {};

/**
 * @param {!EntityMp} entity
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @param {boolean} p4
 * @return {void}
 */
CameraMp.prototype.pointAt = function(entity, offsetX, offsetY, offsetZ, p4) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
CameraMp.prototype.pointAtCoord = function(x, y, z) {};

/**
 * @param {number} ped
 * @param {number} boneIndex
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} heading
 * @return {void}
 */
CameraMp.prototype.pointAtPedBone = function(ped, boneIndex, x, y, z, heading) {};

/**
 * @param {boolean} active
 * @return {void}
 */
CameraMp.prototype.setActive = function(active) {};

/**
 * @param {number} camFrom
 * @param {number} duration
 * @param {number} easeLocation
 * @param {number} easeRotation
 * @return {void}
 */
CameraMp.prototype.setActiveWithInterp = function(camFrom, duration, easeLocation, easeRotation) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
CameraMp.prototype.setAffectsAiming = function(toggle) {};

/**
 * @param {number} phase
 * @return {void}
 */
CameraMp.prototype.setAnimCurrentPhase = function(phase) {};

/**
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @return {void}
 */
CameraMp.prototype.setCoord = function(posX, posY, posZ) {};

/**
 * @param {string} name
 * @return {void}
 */
CameraMp.prototype.setDebugName = function(name) {};

/**
 * @param {number} p1
 * @return {void}
 */
CameraMp.prototype.setDofFnumberOfLens = function(p1) {};

/**
 * @param {number} p0
 * @return {void}
 */
CameraMp.prototype.setDofFocusDistanceBias = function(p0) {};

/**
 * @param {number} p0
 * @return {void}
 */
CameraMp.prototype.setDofMaxNearInFocusDistance = function(p0) {};

/**
 * @param {number} p0
 * @return {void}
 */
CameraMp.prototype.setDofMaxNearInFocuxDistanceBlendLevel = function(p0) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @return {void}
 */
CameraMp.prototype.setDofPlanes = function(p0, p1, p2, p3) {};

/**
 * @param {number} dofStrength
 * @return {void}
 */
CameraMp.prototype.setDofStrength = function(dofStrength) {};

/**
 * @param {number} farClip
 * @return {void}
 */
CameraMp.prototype.setFarClip = function(farClip) {};

/**
 * @param {number} farDof
 * @return {void}
 */
CameraMp.prototype.setFarDof = function(farDof) {};

/**
 * @param {number} fieldOfView
 * @return {void}
 */
CameraMp.prototype.setFov = function(fieldOfView) {};

/**
 * @param {boolean} p1
 * @return {void}
 */
CameraMp.prototype.setInheritRollVehicle = function(p1) {};

/**
 * @param {number} strength
 * @return {void}
 */
CameraMp.prototype.setMotionBlurStrength = function(strength) {};

/**
 * @param {number} nearClip
 * @return {void}
 */
CameraMp.prototype.setNearClip = function(nearClip) {};

/**
 * @param {number} nearDof
 * @return {void}
 */
CameraMp.prototype.setNearDof = function(nearDof) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} xRot
 * @param {number} yRot
 * @param {number} zRot
 * @param {number} fov
 * @param {number} duration
 * @param {number} p8
 * @param {number} p9
 * @param {number} p10
 * @return {void}
 */
CameraMp.prototype.setParams = function(x, y, z, xRot, yRot, zRot, fov, duration, p8, p9, p10) {};

/**
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {number} p3
 * @return {void}
 */
CameraMp.prototype.setRot = function(rotX, rotY, rotZ, p3) {};

/**
 * @param {number} amplitude
 * @return {void}
 */
CameraMp.prototype.setShakeAmplitude = function(amplitude) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
CameraMp.prototype.setUseShallowDofMode = function(toggle) {};

/**
 * @param {string} type
 * @param {number} amplitude
 * @return {void}
 */
CameraMp.prototype.shake = function(type, amplitude) {};

/**
 * @return {void}
 */
CameraMp.prototype.stopPointing = function() {};

/**
 * @param {boolean} p0
 * @return {void}
 */
CameraMp.prototype.stopShaking = function(p0) {};
/**
 * @record
 * @struct
 */
function DiscordMp() {}

/**
 * @param {string} status
 * @param {string} state
 * @return {void}
 */
DiscordMp.prototype.update = function(status, state) {};
/**
 * @record
 * @struct
 */
function KeysMp() {}

/**
 * @param {number} keyCode
 * @param {boolean} keyHold
 * @param {!Function} handler
 * @return {void}
 */
KeysMp.prototype.bind = function(keyCode, keyHold, handler) {};

/**
 * @param {number} keyCode
 * @return {boolean}
 */
KeysMp.prototype.isUp = function(keyCode) {};

/**
 * @param {number} keyCode
 * @return {boolean}
 */
KeysMp.prototype.isDown = function(keyCode) {};

/**
 * @param {number} keyCode
 * @param {boolean} keyHold
 * @param {!Function=} handler
 * @return {void}
 */
KeysMp.prototype.unbind = function(keyCode, keyHold, handler) {};
/**
 * @record
 * @struct
 */
function NametagsMp() {}
/** @type {boolean} */
NametagsMp.prototype.enabled;

/**
 * @param {...?} value
 * @return {void}
 */
NametagsMp.prototype.set = function(value) {};

/**
 * @param {...?} value
 * @return {void}
 */
NametagsMp.prototype.update = function(value) {};
/**
 * @record
 * @struct
 */
function RaycastingMp() {}

/**
 * @param {function(new: (?), number, number, number): ?} startPos
 * @param {function(new: (?), number, number, number): ?} endPos
 * @param {number=} ignoreEntity
 * @param {number=} flags
 * @return {{entity: !EntityMp, position: function(new: (?), number, number, number): ?, surfaceNormal: ?}}
 */
RaycastingMp.prototype.testPointToPoint = function(startPos, endPos, ignoreEntity, flags) {};

/**
 * @param {function(new: (?), number, number, number): ?} startPos
 * @param {function(new: (?), number, number, number): ?} endPos
 * @param {number} radius
 * @param {number=} ignoreEntity
 * @param {!Array<number>=} flags
 * @return {{entity: !EntityMp, position: function(new: (?), number, number, number): ?, surfaceNormal: ?}}
 */
RaycastingMp.prototype.testCapsule = function(startPos, endPos, radius, ignoreEntity, flags) {};
/**
 * @record
 * @struct
 */
function StorageMp() {}
/** @type {!Object<string,?>} */
StorageMp.prototype.data;

/**
 * @return {void}
 */
StorageMp.prototype.flush = function() {};
/**
 * @record
 * @struct
 */
function VoiceChatMp() {}
/** @type {boolean} */
VoiceChatMp.prototype.muted;
/** @type {boolean} */
VoiceChatMp.prototype.isAllowed;

/**
 * @param {?} param
 * @return {?}
 */
VoiceChatMp.prototype.getPreprocessingParam = function(param) {};

/**
 * @param {?} param
 * @param {?} value
 * @return {void}
 */
VoiceChatMp.prototype.setPreprocessingParam = function(param, value) {};
/**
 * @record
 * @struct
 */
function GameAppMp() {}

/**
 * @param {string} appName
 * @return {boolean}
 */
GameAppMp.prototype.appDeleteAppData = function(appName) {};

/**
 * @param {string} property
 * @return {number}
 */
GameAppMp.prototype.appGetFloat = function(property) {};

/**
 * @param {string} property
 * @return {string}
 */
GameAppMp.prototype.appGetString = function(property) {};

/**
 * @param {string} property
 * @return {number}
 */
GameAppMp.prototype.appGetInt = function(property) {};

/**
 * @param {string} property
 * @return {boolean}
 */
GameAppMp.prototype.appHasSyncedData = function(property) {};

/**
 * @param {string} appName
 * @return {void}
 */
GameAppMp.prototype.appSetApp = function(appName) {};

/**
 * @param {string} blockName
 * @return {void}
 */
GameAppMp.prototype.appSetBlock = function(blockName) {};

/**
 * @param {string} property
 * @param {number} value
 * @return {void}
 */
GameAppMp.prototype.appSetFloat = function(property, value) {};

/**
 * @param {string} property
 * @param {number} value
 * @return {void}
 */
GameAppMp.prototype.appSetInt = function(property, value) {};

/**
 * @param {string} property
 * @param {string} value
 * @return {void}
 */
GameAppMp.prototype.appSetString = function(property, value) {};
/**
 * @record
 * @struct
 */
function GameAudioMp() {}

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @param {boolean} p5
 * @param {boolean} p6
 * @param {boolean} p7
 * @param {boolean} p8
 * @param {?} p9
 * @param {boolean} p10
 * @param {boolean} p11
 * @param {boolean} p12
 * @return {void}
 */
GameAudioMp.prototype.addLineToConversation = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {string} p2
 * @return {void}
 */
GameAudioMp.prototype.addPedToConversation = function(p0, p1, p2) {};

/**
 * @param {string} eventName
 * @return {boolean}
 */
GameAudioMp.prototype.cancelMusicEvent = function(eventName) {};

/**
 * @param {?} p0
 * @param {boolean} p1
 * @return {void}
 */
GameAudioMp.prototype.clearAmbientZoneListState = function(p0, p1) {};

/**
 * @param {?} p0
 * @param {boolean} p1
 * @return {void}
 */
GameAudioMp.prototype.clearAmbientZoneState = function(p0, p1) {};

/**
 * @param {number} station
 * @return {number}
 */
GameAudioMp.prototype.findRadioStationIndex = function(station) {};

/**
 * @param {string} radioStation
 * @return {void}
 */
GameAudioMp.prototype.freezeRadioStation = function(radioStation) {};

/**
 * @param {number} soundId
 * @return {number}
 */
GameAudioMp.prototype.getNetworkIdFromSoundId = function(soundId) {};

/**
 * @param {?} p0
 * @return {number}
 */
GameAudioMp.prototype.getNumberOfPassengerVoiceVariations = function(p0) {};

/**
 * @param {string} p0
 * @param {number} p1
 * @return {void}
 */
GameAudioMp.prototype.getPlayerHeadsetSoundAlternate = function(p0, p1) {};

/**
 * @param {number} radioStation
 * @return {string}
 */
GameAudioMp.prototype.getRadioStationName = function(radioStation) {};

/**
 * @param {number} netId
 * @return {number}
 */
GameAudioMp.prototype.getSoundIdFromNetworkId = function(netId) {};

/**
 * @param {string} p0
 * @param {number} p1
 * @return {void}
 */
GameAudioMp.prototype.getSynchronizedAudioEventPositionThisFrame = function(p0, p1) {};

/**
 * @param {number} vehicle
 * @return {number}
 */
GameAudioMp.prototype.getVehicleDefaultHorn = function(vehicle) {};

/**
 * @param {number} soundId
 * @return {boolean}
 */
GameAudioMp.prototype.hasSoundFinished = function(soundId) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {void}
 */
GameAudioMp.prototype.hintAmbientAudioBank = function(p0, p1) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {void}
 */
GameAudioMp.prototype.hintScriptAudioBank = function(p0, p1) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @return {void}
 */
GameAudioMp.prototype.interruptConversation = function(p0, p1, p2) {};

/**
 * @param {string} alarmName
 * @return {boolean}
 */
GameAudioMp.prototype.isAlarmPlayer = function(alarmName) {};

/**
 * @param {number} p0
 * @return {boolean}
 */
GameAudioMp.prototype.isAmbientSpeechPlaying = function(p0) {};

/**
 * @param {string} ambientZone
 * @return {boolean}
 */
GameAudioMp.prototype.isAmbientZoneEnabled = function(ambientZone) {};

/**
 * @param {string} scene
 * @return {boolean}
 */
GameAudioMp.prototype.isAudioSceneActive = function(scene) {};

/**
 * @param {?} p0
 * @return {boolean}
 */
GameAudioMp.prototype.isScriptedSpeechPlaying = function(p0) {};

/**
 * @param {string} streamName
 * @param {string} soundSet
 * @return {boolean}
 */
GameAudioMp.prototype.loadStream = function(streamName, soundSet) {};

/**
 * @param {string} streamName
 * @param {number} startOffset
 * @param {string} soundSet
 * @return {boolean}
 */
GameAudioMp.prototype.loadStreamWithStartOffset = function(streamName, startOffset, soundSet) {};

/**
 * @param {?} p0
 * @return {void}
 */
GameAudioMp.prototype.overrideTrevorRage = function(p0) {};

/**
 * @param {?} p0
 * @param {boolean} p1
 * @return {void}
 */
GameAudioMp.prototype.overrideUnderwaterStream = function(p0, p1) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameAudioMp.prototype.pauseScriptedConversation = function(p0) {};

/**
 * @param {string} p0
 * @param {string} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {string} p5
 * @return {void}
 */
GameAudioMp.prototype.playAmbientSpeechAtCoords = function(p0, p1, p2, p3, p4, p5) {};

/**
 * @param {number} p0
 * @param {string} speechName
 * @param {string} voiceName
 * @param {string} speechParam
 * @param {boolean} p4
 * @return {void}
 */
GameAudioMp.prototype.playAmbientSpeechWithVoice = function(p0, speechName, voiceName, speechParam, p4) {};

/**
 * @param {boolean} play
 * @return {void}
 */
GameAudioMp.prototype.playEndCreditsMusic = function(play) {};

/**
 * @param {string} audioName
 * @return {void}
 */
GameAudioMp.prototype.playMissionCompleteAudio = function(audioName) {};

/**
 * @param {number} painId
 * @param {number} p1
 * @param {number} p2
 * @return {void}
 */
GameAudioMp.prototype.playPain = function(painId, p1, p2) {};

/**
 * @param {string} ringtoneName
 * @param {number} ped
 * @param {boolean} p2
 * @return {void}
 */
GameAudioMp.prototype.playPedRingtone = function(ringtoneName, ped, p2) {};

/**
 * @param {string} name
 * @param {number} p1
 * @return {void}
 */
GameAudioMp.prototype.playPoliceReport = function(name, p1) {};

/**
 * @param {number} soundId
 * @param {string} audioName
 * @param {string} audioRef
 * @param {boolean} p3
 * @param {?} p4
 * @param {boolean} p5
 * @return {void}
 */
GameAudioMp.prototype.playSound = function(soundId, audioName, audioRef, p3, p4, p5) {};

/**
 * @param {number} soundId
 * @param {string} audioName
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {string} audioRef
 * @param {boolean} p6
 * @param {?} p7
 * @param {boolean} p8
 * @return {void}
 */
GameAudioMp.prototype.playSoundFromCoord = function(soundId, audioName, x, y, z, audioRef, p6, p7, p8) {};

/**
 * @param {number} soundId
 * @param {string} audioName
 * @param {number} entity
 * @param {string} audioRef
 * @param {boolean} p4
 * @param {?} p5
 * @return {void}
 */
GameAudioMp.prototype.playSoundFromEntity = function(soundId, audioName, entity, audioRef, p4, p5) {};

/**
 * @param {number} soundId
 * @param {string} audioName
 * @param {string} audioRef
 * @param {boolean} p3
 * @return {void}
 */
GameAudioMp.prototype.playSoundFrontend = function(soundId, audioName, audioRef, p3) {};

/**
 * @param {number} object
 * @return {void}
 */
GameAudioMp.prototype.playStreamFromObject = function(object) {};

/**
 * @param {?} p0
 * @return {boolean}
 */
GameAudioMp.prototype.playSynchronizedAudioEvent = function(p0) {};

/**
 * @param {boolean} p0
 * @param {boolean} p1
 * @param {boolean} p2
 * @param {boolean} p3
 * @return {void}
 */
GameAudioMp.prototype.preloadScriptConversation = function(p0, p1, p2, p3) {};

/**
 * @param {boolean} p0
 * @param {boolean} p1
 * @return {void}
 */
GameAudioMp.prototype.preloadScriptPhoneConversation = function(p0, p1) {};

/**
 * @param {string} alarmName
 * @return {boolean}
 */
GameAudioMp.prototype.prepareAlarm = function(alarmName) {};

/**
 * @param {string} eventName
 * @return {boolean}
 */
GameAudioMp.prototype.prepareMusicEvent = function(eventName) {};

/**
 * @param {string} p0
 * @param {?} p1
 * @return {void}
 */
GameAudioMp.prototype.prepareSynchronizedAudioEvent = function(p0, p1) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {boolean}
 */
GameAudioMp.prototype.prepareSynchronizedAudioEventForScene = function(p0, p1) {};

/**
 * @param {?} p0
 * @return {void}
 */
GameAudioMp.prototype.registerScriptWithAudio = function(p0) {};

/**
 * @param {string} audioBank
 * @return {void}
 */
GameAudioMp.prototype.releasedNamedScriptAudioBank = function(audioBank) {};

/**
 * @param {number} soundId
 * @return {void}
 */
GameAudioMp.prototype.releaseSoundId = function(soundId) {};

/**
 * @param {string} p0
 * @param {boolean} p1
 * @return {boolean}
 */
GameAudioMp.prototype.requestAmbientAudioBank = function(p0, p1) {};

/**
 * @param {string} p0
 * @param {boolean} p1
 * @return {boolean}
 */
GameAudioMp.prototype.requestMissionAudioBank = function(p0, p1) {};

/**
 * @param {string} p0
 * @param {boolean} p1
 * @return {boolean}
 */
GameAudioMp.prototype.requestScriptAudioBank = function(p0, p1) {};

/**
 * @param {?} p0
 * @return {void}
 */
GameAudioMp.prototype.resetPedAudioFlags = function(p0) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameAudioMp.prototype.setAggressiveHorns = function(toggle) {};

/**
 * @param {?} p0
 * @param {boolean} p1
 * @param {boolean} p2
 * @return {void}
 */
GameAudioMp.prototype.setAmbientZoneListState = function(p0, p1, p2) {};

/**
 * @param {string} ambientZone
 * @param {boolean} p1
 * @param {boolean} p2
 * @return {void}
 */
GameAudioMp.prototype.setAmbientZoneListStatePersistent = function(ambientZone, p1, p2) {};

/**
 * @param {?} p0
 * @param {boolean} p1
 * @param {boolean} p2
 * @return {void}
 */
GameAudioMp.prototype.setAmbientZoneState = function(p0, p1, p2) {};

/**
 * @param {string} ambientZone
 * @param {boolean} p1
 * @param {boolean} p2
 * @return {void}
 */
GameAudioMp.prototype.setAmbientZoneStatePersistent = function(ambientZone, p1, p2) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {void}
 */
GameAudioMp.prototype.setAnimalMood = function(p0, p1) {};

/**
 * @param {string} flagName
 * @param {boolean} toggle
 * @return {void}
 */
GameAudioMp.prototype.setAudioFlag = function(flagName, toggle) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {number} p2
 * @return {void}
 */
GameAudioMp.prototype.setAudioSceneVariable = function(p0, p1, p2) {};

/**
 * @param {string} p0
 * @return {void}
 */
GameAudioMp.prototype.setCutsceneAudioOverride = function(p0) {};

/**
 * @param {string} emitterName
 * @param {string} radioStation
 * @return {void}
 */
GameAudioMp.prototype.setEmitterRadioStation = function(emitterName, radioStation) {};

/**
 * @param {boolean} active
 * @return {void}
 */
GameAudioMp.prototype.setFrontendRadioActive = function(active) {};

/**
 * @param {boolean} active
 * @return {void}
 */
GameAudioMp.prototype.setGpsActive = function(active) {};

/**
 * @param {string} radioStation
 * @return {void}
 */
GameAudioMp.prototype.setInitialPlayerStation = function(radioStation) {};

/**
 * @param {boolean} p0
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {number} x3
 * @param {number} y3
 * @param {number} z3
 * @return {void}
 */
GameAudioMp.prototype.setMicrophonePosition = function(p0, x1, y1, z1, x2, y2, z2, x3, y3, z3) {};

/**
 * @param {boolean} state
 * @return {void}
 */
GameAudioMp.prototype.setMobilePhoneRadioState = function(state) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameAudioMp.prototype.setMobileRadioEnabledDuringGameplay = function(toggle) {};

/**
 * @param {number} playerPed
 * @param {boolean} disabled
 * @return {void}
 */
GameAudioMp.prototype.setPlayerAngry = function(playerPed, disabled) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameAudioMp.prototype.setRadioAutoUnfreeze = function(p0) {};

/**
 * @param {number} radioStation
 * @return {void}
 */
GameAudioMp.prototype.setRadioToStationIndex = function(radioStation) {};

/**
 * @param {string} stationName
 * @return {void}
 */
GameAudioMp.prototype.setRadioToStationName = function(stationName) {};

/**
 * @param {string} radioStation
 * @param {string} radioTrack
 * @return {void}
 */
GameAudioMp.prototype.setRadioTrack = function(radioStation, radioTrack) {};

/**
 * @param {string} emitterName
 * @param {boolean} toggle
 * @return {void}
 */
GameAudioMp.prototype.setStaticEmitterEnabled = function(emitterName, toggle) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameAudioMp.prototype.setUserRadioControlEnabled = function(p0) {};

/**
 * @param {number} soundId
 * @param {?} p1
 * @param {number} p2
 * @return {void}
 */
GameAudioMp.prototype.setVariableOnSound = function(soundId, p1, p2) {};

/**
 * @param {string} p0
 * @param {number} p1
 * @return {void}
 */
GameAudioMp.prototype.setVariableOnStream = function(p0, p1) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
GameAudioMp.prototype.specialFrontendEqual = function(x, y, z) {};

/**
 * @param {string} alarmName
 * @param {boolean} p2
 * @return {void}
 */
GameAudioMp.prototype.startAlarm = function(alarmName, p2) {};

/**
 * @param {string} sceneName
 * @return {boolean}
 */
GameAudioMp.prototype.startAudioScene = function(sceneName) {};

/**
 * @param {boolean} p0
 * @param {boolean} p1
 * @param {boolean} p2
 * @param {boolean} p3
 * @return {void}
 */
GameAudioMp.prototype.startScriptConversation = function(p0, p1, p2, p3) {};

/**
 * @param {boolean} p0
 * @param {boolean} p1
 * @return {void}
 */
GameAudioMp.prototype.startScriptPhoneConversation = function(p0, p1) {};

/**
 * @param {string} alarmName
 * @param {boolean} toggle
 * @return {void}
 */
GameAudioMp.prototype.stopAlarm = function(alarmName, toggle) {};

/**
 * @param {boolean} stop
 * @return {void}
 */
GameAudioMp.prototype.stopAllAlarms = function(stop) {};

/**
 * @param {string} scene
 * @return {void}
 */
GameAudioMp.prototype.stopAudioScene = function(scene) {};

/**
 * @param {number} p0
 * @return {void}
 */
GameAudioMp.prototype.stopCurrentPlayerAmbientSpeech = function(p0) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameAudioMp.prototype.stopScriptedConversation = function(p0) {};

/**
 * @param {number} soundId
 * @return {void}
 */
GameAudioMp.prototype.stopSound = function(soundId) {};

/**
 * @param {?} p0
 * @return {boolean}
 */
GameAudioMp.prototype.stopSynchronizedAudioEvent = function(p0) {};

/**
 * @param {string} eventName
 * @return {boolean}
 */
GameAudioMp.prototype.triggerMusicEvent = function(eventName) {};

/**
 * @param {string} radioStation
 * @return {void}
 */
GameAudioMp.prototype.unfreezeRadioStation = function(radioStation) {};

/**
 * @param {number} newsStory
 * @return {void}
 */
GameAudioMp.prototype.unlockMissionNewsStory = function(newsStory) {};
/**
 * @record
 * @struct
 */
function GameBrainMp() {}

/**
 * @param {string} name
 * @param {number} model
 * @param {number} p2
 * @param {number} p3
 * @return {void}
 */
GameBrainMp.prototype.addScriptToRandom = function(name, model, p2, p3) {};

/**
 * @param {number} brainSet
 * @return {void}
 */
GameBrainMp.prototype.disableScriptBrainSet = function(brainSet) {};

/**
 * @param {number} brainSet
 * @return {void}
 */
GameBrainMp.prototype.enableScriptBrainSet = function(brainSet) {};

/**
 * @param {number} object
 * @return {boolean}
 */
GameBrainMp.prototype.isObjectWithinBrainActivationRange = function(object) {};

/**
 * @param {string} stringName
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @return {void}
 */
GameBrainMp.prototype.registerObjectScriptBrain = function(stringName, p1, p2, p3, p4, p5) {};

/**
 * @param {?} p0
 * @param {number} p1
 * @param {?} p2
 * @return {void}
 */
GameBrainMp.prototype.registerWorldPointScriptBrain = function(p0, p1, p2) {};
/**
 * @record
 * @struct
 */
function GameCamMp() {}

/**
 * @param {number} camera
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} xRot
 * @param {number} yRot
 * @param {number} zRot
 * @param {number} length
 * @param {number} p8
 * @param {number} p9
 * @return {void}
 */
GameCamMp.prototype.addCamSplineNode = function(camera, x, y, z, xRot, yRot, zRot, length, p8, p9) {};

/**
 * @param {number} p0
 * @param {number} distance
 * @return {void}
 */
GameCamMp.prototype.animateGameplayCamZoom = function(p0, distance) {};

/**
 * @param {number} minimum
 * @param {number} maximum
 * @return {void}
 */
GameCamMp.prototype.clampGameplayCamPitch = function(minimum, maximum) {};

/**
 * @param {number} minimum
 * @param {number} maximum
 * @return {void}
 */
GameCamMp.prototype.clampGameplayCamYaw = function(minimum, maximum) {};

/**
 * @param {string} camName
 * @param {boolean} p1
 * @return {number}
 */
GameCamMp.prototype.createCam = function(camName, p1) {};

/**
 * @param {number} camHash
 * @param {boolean} p1
 * @return {number}
 */
GameCamMp.prototype.createCamera = function(camHash, p1) {};

/**
 * @param {number} camHash
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {number} fov
 * @param {boolean} p8
 * @param {?} p9
 * @return {number}
 */
GameCamMp.prototype.createCameraWithParams = function(camHash, posX, posY, posZ, rotX, rotY, rotZ, fov, p8, p9) {};

/**
 * @param {string} camName
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {number} fov
 * @param {boolean} p8
 * @param {?} p9
 * @return {number}
 */
GameCamMp.prototype.createCamWithParams = function(camName, posX, posY, posZ, rotX, rotY, rotZ, fov, p8, p9) {};

/**
 * @param {?} p0
 * @param {number} p1
 * @param {?} p2
 * @param {number} entity
 * @return {void}
 */
GameCamMp.prototype.createCinematicShot = function(p0, p1, p2, entity) {};

/**
 * @param {boolean} destroy
 * @return {void}
 */
GameCamMp.prototype.destroyAllCams = function(destroy) {};

/**
 * @param {number} duration
 * @return {void}
 */
GameCamMp.prototype.doScreenFadeIn = function(duration) {};

/**
 * @param {number} duration
 * @return {void}
 */
GameCamMp.prototype.doScreenFadeOut = function(duration) {};

/**
 * @param {number} cam
 * @return {boolean}
 */
GameCamMp.prototype.getCamSplineNodeIndex = function(cam) {};

/**
 * @param {?} p0
 * @return {number}
 */
GameCamMp.prototype.getCamSplineNodePhase = function(p0) {};

/**
 * @return {number}
 */
GameCamMp.prototype.getGameplayCamRelativeHeading = function() {};

/**
 * @param {number} p0
 * @return {function(new: (?), number, number, number): ?}
 */
GameCamMp.prototype.getGameplayCamRot = function(p0) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameCamMp.prototype.getIsMultiplayerBrief = function(p0) {};

/**
 * @param {?} p0
 * @return {boolean}
 */
GameCamMp.prototype.isCamSplinePaused = function(p0) {};

/**
 * @param {?} p0
 * @return {boolean}
 */
GameCamMp.prototype.isCinematicShotActive = function(p0) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @return {boolean}
 */
GameCamMp.prototype.isSphereVisible = function(x, y, z, radius) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {number} p2
 * @param {number} p3
 * @return {void}
 */
GameCamMp.prototype.overrideCamSplineMotionBlur = function(p0, p1, p2, p3) {};

/**
 * @param {number} cam
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @return {void}
 */
GameCamMp.prototype.overrideCamSplineVelocity = function(cam, p1, p2, p3) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {string} animName
 * @param {string} animDictionary
 * @return {boolean}
 */
GameCamMp.prototype.playSynchronizedCamAnim = function(p0, p1, animName, animDictionary) {};

/**
 * @param {boolean} render
 * @param {boolean} ease
 * @param {number} easeTime
 * @param {boolean} p3
 * @param {boolean} p4
 * @return {void}
 */
GameCamMp.prototype.renderScriptCams = function(render, ease, easeTime, p3, p4) {};

/**
 * @param {number} p0
 * @return {void}
 */
GameCamMp.prototype.setCamEffect = function(p0) {};

/**
 * @param {number} cam
 * @param {number} timeDuration
 * @return {void}
 */
GameCamMp.prototype.setCamSplineDuration = function(cam, timeDuration) {};

/**
 * @param {number} cam
 * @param {number} p1
 * @return {void}
 */
GameCamMp.prototype.setCamSplinePhase = function(cam, p1) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameCamMp.prototype.setCinematicButtonActive = function(p0) {};

/**
 * @param {number} p0
 * @return {void}
 */
GameCamMp.prototype.setCinematicCamShakeAmplitude = function(p0) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameCamMp.prototype.setCinematicModeActive = function(p0) {};

/**
 * @param {string} p0
 * @param {number} p1
 * @return {void}
 */
GameCamMp.prototype.setFollowPedCamCutsceneChat = function(p0, p1) {};

/**
 * @param {number} viewMode
 * @return {void}
 */
GameCamMp.prototype.setFollowPedCamViewMode = function(viewMode) {};

/**
 * @param {number} viewMode
 * @return {void}
 */
GameCamMp.prototype.setFollowVehicleCamViewMode = function(viewMode) {};

/**
 * @param {number} zoomLevel
 * @return {void}
 */
GameCamMp.prototype.setFollowVehicleCamZoomLevel = function(zoomLevel) {};

/**
 * @param {number} pitch
 * @return {void}
 */
GameCamMp.prototype.setGameplayCamRawPitch = function(pitch) {};

/**
 * @param {number} yaw
 * @return {void}
 */
GameCamMp.prototype.setGameplayCamRawYaw = function(yaw) {};

/**
 * @param {number} heading
 * @return {void}
 */
GameCamMp.prototype.setGameplayCamRelativeHeading = function(heading) {};

/**
 * @param {number} x
 * @param {number} p1
 * @return {void}
 */
GameCamMp.prototype.setGameplayCamRelativePitch = function(x, p1) {};

/**
 * @param {number} amplitude
 * @return {void}
 */
GameCamMp.prototype.setGameplayCamShakeAmplitude = function(amplitude) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {?} p3
 * @param {?} p4
 * @param {?} p5
 * @param {?} p6
 * @return {void}
 */
GameCamMp.prototype.setGameplayCoordHint = function(p0, p1, p2, p3, p4, p5, p6) {};

/**
 * @param {?} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {boolean} p4
 * @param {?} p5
 * @param {?} p6
 * @param {?} p7
 * @param {?} p8
 * @return {void}
 */
GameCamMp.prototype.setGameplayEntityHint = function(p0, p1, p2, p3, p4, p5, p6, p7, p8) {};

/**
 * @param {number} fov
 * @return {void}
 */
GameCamMp.prototype.setGameplayHintFov = function(fov) {};

/**
 * @param {?} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {boolean} p4
 * @param {?} p5
 * @param {?} p6
 * @param {?} p7
 * @return {void}
 */
GameCamMp.prototype.setGameplayObjectHint = function(p0, p1, p2, p3, p4, p5, p6, p7) {};

/**
 * @param {number} p0
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {boolean} p4
 * @param {?} p5
 * @param {?} p6
 * @param {?} p7
 * @return {void}
 */
GameCamMp.prototype.setGameplayPedHint = function(p0, x1, y1, z1, p4, p5, p6, p7) {};

/**
 * @param {?} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {boolean} p4
 * @param {?} p5
 * @param {?} p6
 * @param {?} p7
 * @return {void}
 */
GameCamMp.prototype.setGameplayVehicleHint = function(p0, p1, p2, p3, p4, p5, p6, p7) {};

/**
 * @param {boolean} p0
 * @param {boolean} p1
 * @return {void}
 */
GameCamMp.prototype.setTimeIdleDrop = function(p0, p1) {};

/**
 * @param {boolean} p0
 * @param {number} p1
 * @return {void}
 */
GameCamMp.prototype.setWidescreenBorders = function(p0, p1) {};

/**
 * @param {string} p0
 * @param {number} p1
 * @return {void}
 */
GameCamMp.prototype.shakeCinematicCam = function(p0, p1) {};

/**
 * @param {string} shakeName
 * @param {number} intensity
 * @return {void}
 */
GameCamMp.prototype.shakeGameplayCam = function(shakeName, intensity) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameCamMp.prototype.stopCinematicCamShaking = function(p0) {};

/**
 * @param {?} p0
 * @return {void}
 */
GameCamMp.prototype.stopCinematicShot = function(p0) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameCamMp.prototype.stopGameplayCamShaking = function(p0) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameCamMp.prototype.stopGameplayHint = function(p0) {};
/**
 * @record
 * @struct
 */
function GameControlsMp() {}
/** @type {boolean} */
GameControlsMp.prototype.useDefaultVehicleEntering;

/**
 * @param {number} inputGroup
 * @return {void}
 */
GameControlsMp.prototype.disableAllControlActions = function(inputGroup) {};

/**
 * @param {number} inputGroup
 * @param {number} control
 * @param {boolean} disable
 * @return {void}
 */
GameControlsMp.prototype.disableControlAction = function(inputGroup, control, disable) {};

/**
 * @param {number} inputGroup
 * @return {void}
 */
GameControlsMp.prototype.enableAllControlActions = function(inputGroup) {};

/**
 * @param {number} inputGroup
 * @param {number} control
 * @param {boolean} enable
 * @return {void}
 */
GameControlsMp.prototype.enableControlAction = function(inputGroup, control, enable) {};

/**
 * @param {number} inputGroup
 * @param {number} control
 * @param {boolean} p2
 * @return {string}
 */
GameControlsMp.prototype.getControlActionName = function(inputGroup, control, p2) {};

/**
 * @param {number} inputGroup
 * @param {number} control
 * @return {number}
 */
GameControlsMp.prototype.getControlNormal = function(inputGroup, control) {};

/**
 * @param {number} inputGroup
 * @param {number} control
 * @return {number}
 */
GameControlsMp.prototype.getControlValue = function(inputGroup, control) {};

/**
 * @param {number} inputGroup
 * @param {number} control
 * @return {number}
 */
GameControlsMp.prototype.getDisabledControlNormal = function(inputGroup, control) {};

/**
 * @param {number} inputGroup
 * @param {number} control
 * @return {boolean}
 */
GameControlsMp.prototype.isControlEnabled = function(inputGroup, control) {};

/**
 * @param {number} inputGroup
 * @param {number} control
 * @return {boolean}
 */
GameControlsMp.prototype.isControlJustPressed = function(inputGroup, control) {};

/**
 * @param {number} inputGroup
 * @param {number} control
 * @return {boolean}
 */
GameControlsMp.prototype.isControlJustReleased = function(inputGroup, control) {};

/**
 * @param {number} inputGroup
 * @param {number} control
 * @return {boolean}
 */
GameControlsMp.prototype.isControlPressed = function(inputGroup, control) {};

/**
 * @param {number} inputGroup
 * @param {number} control
 * @return {boolean}
 */
GameControlsMp.prototype.isControlReleased = function(inputGroup, control) {};

/**
 * @param {number} inputGroup
 * @param {number} control
 * @return {boolean}
 */
GameControlsMp.prototype.isDisabledControlJustPressed = function(inputGroup, control) {};

/**
 * @param {number} inputGroup
 * @param {number} control
 * @return {boolean}
 */
GameControlsMp.prototype.isDisabledControlJustReleased = function(inputGroup, control) {};

/**
 * @param {number} inputGroup
 * @param {number} control
 * @return {boolean}
 */
GameControlsMp.prototype.isDisabledControlPressed = function(inputGroup, control) {};

/**
 * @param {number} inputGroup
 * @return {boolean}
 */
GameControlsMp.prototype.isInputDisabled = function(inputGroup) {};

/**
 * @param {number} inputGroup
 * @return {boolean}
 */
GameControlsMp.prototype.isInputJustDisabled = function(inputGroup) {};

/**
 * @param {number} inputGroup
 * @param {number} control
 * @param {number} amount
 * @return {boolean}
 */
GameControlsMp.prototype.setControlNormal = function(inputGroup, control, amount) {};

/**
 * @param {number} inputGroup
 * @param {number} control
 * @return {void}
 */
GameControlsMp.prototype.setInputExclusive = function(inputGroup, control) {};

/**
 * @param {number} p0
 * @param {number} duration
 * @param {number} frequency
 * @return {void}
 */
GameControlsMp.prototype.setPadShake = function(p0, duration, frequency) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameControlsMp.prototype.setPlayerpadShakesWhenControllerDisabled = function(toggle) {};

/**
 * @param {?} p0
 * @return {void}
 */
GameControlsMp.prototype.stopPadShake = function(p0) {};
/**
 * @record
 * @struct
 */
function GameCutsceneMp() {}

/**
 * @param {string} cutsceneEntName
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} modelHash
 * @return {void}
 */
GameCutsceneMp.prototype.setCutscenePedPropVariation = function(cutsceneEntName, p1, p2, p3, modelHash) {};

/**
 * @param {string} cutsceneEntName
 * @param {number} modelHash
 * @return {!EntityMp}
 */
GameCutsceneMp.prototype.getEntityIndexOfCutsceneEntity = function(cutsceneEntName, modelHash) {};

/**
 * @param {number} p0
 * @return {void}
 */
GameCutsceneMp.prototype.startCutscene = function(p0) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} p3
 * @return {void}
 */
GameCutsceneMp.prototype.startCutsceneAtCoords = function(x, y, z, p3) {};

/**
 * @param {string} cutsceneName
 * @return {boolean}
 */
GameCutsceneMp.prototype.hasThisCutsceneLoaded = function(cutsceneName) {};

/**
 * @param {string} cutsceneEntName
 * @param {number} modelHash
 * @return {boolean}
 */
GameCutsceneMp.prototype.doesCutsceneEntityExist = function(cutsceneEntName, modelHash) {};

/**
 * @param {string} cutsceneEntName
 * @param {number} modelHash
 * @return {boolean}
 */
GameCutsceneMp.prototype.canSetExitStateForRegisteredEntity = function(cutsceneEntName, modelHash) {};

/**
 * @param {string} cutsceneEntName
 * @param {number} modelHash
 * @return {boolean}
 */
GameCutsceneMp.prototype.canSetEnterForRegisteredEntity = function(cutsceneEntName, modelHash) {};

/**
 * @param {string} cutsceneName
 * @param {number} p1
 * @return {void}
 */
GameCutsceneMp.prototype.requestCutscene = function(cutsceneName, p1) {};

/**
 * @param {boolean} p0
 * @param {boolean} p1
 * @param {boolean} p2
 * @param {boolean} p3
 * @return {void}
 */
GameCutsceneMp.prototype.setCutsceneFadeValues = function(p0, p1, p2, p3) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @return {void}
 */
GameCutsceneMp.prototype.setCutsceneTriggerArea = function(p0, p1, p2, p3, p4, p5) {};

/**
 * @param {boolean} p0
 * @return {boolean}
 */
GameCutsceneMp.prototype.canSetExitStateForCamera = function(p0) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @return {void}
 */
GameCutsceneMp.prototype.setCutsceneOrigin = function(p0, p1, p2, p3, p4) {};

/**
 * @param {string} cutsceneEntName
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} modelHash
 * @return {void}
 */
GameCutsceneMp.prototype.setCutscenePedComponentVariation = function(cutsceneEntName, p1, p2, p3, modelHash) {};

/**
 * @param {string} cutsceneEntName
 * @param {number} modelHash
 * @return {!EntityMp}
 */
GameCutsceneMp.prototype.getEntityIndexOfRegisteredEntity = function(cutsceneEntName, modelHash) {};

/**
 * @param {string} cutsceneName
 * @param {number} p1
 * @param {number} p2
 * @return {void}
 */
GameCutsceneMp.prototype.requestCutscene2 = function(cutsceneName, p1, p2) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameCutsceneMp.prototype.stopCutscene = function(p0) {};

/**
 * @param {number} cutscenePed
 * @param {string} cutsceneEntName
 * @param {number} p2
 * @param {number} modelHash
 * @param {number} p4
 * @return {void}
 */
GameCutsceneMp.prototype.registerEntityForCutscene = function(cutscenePed, cutsceneEntName, p2, modelHash, p4) {};
/**
 * @record
 * @struct
 */
function GameDatafileMp() {}

/**
 * @param {?} arrayData
 * @param {boolean} value
 * @return {void}
 */
GameDatafileMp.prototype.arrayValueAddBoolean = function(arrayData, value) {};

/**
 * @param {?} arrayData
 * @param {number} value
 * @return {void}
 */
GameDatafileMp.prototype.arrayValueAddFloat = function(arrayData, value) {};

/**
 * @param {?} arrayData
 * @param {number} value
 * @return {void}
 */
GameDatafileMp.prototype.arrayValueAddInteger = function(arrayData, value) {};

/**
 * @param {?} arrayData
 * @return {void}
 */
GameDatafileMp.prototype.arrayValueAddObject = function(arrayData) {};

/**
 * @param {?} arrayData
 * @param {string} value
 * @return {void}
 */
GameDatafileMp.prototype.arrayValueAddString = function(arrayData, value) {};

/**
 * @param {?} arrayData
 * @param {number} valueX
 * @param {number} valueY
 * @param {number} valueZ
 * @return {void}
 */
GameDatafileMp.prototype.arrayValueAddVector3 = function(arrayData, valueX, valueY, valueZ) {};

/**
 * @param {?} arrayData
 * @param {number} arrayIndex
 * @return {boolean}
 */
GameDatafileMp.prototype.arrayValueGetBoolean = function(arrayData, arrayIndex) {};

/**
 * @param {?} arrayData
 * @param {number} arrayIndex
 * @return {number}
 */
GameDatafileMp.prototype.arrayValueGetFloat = function(arrayData, arrayIndex) {};

/**
 * @param {?} arrayData
 * @param {number} arrayIndex
 * @return {number}
 */
GameDatafileMp.prototype.arrayValueGetInteger = function(arrayData, arrayIndex) {};

/**
 * @param {?} arrayData
 * @param {number} arrayIndex
 * @return {?}
 */
GameDatafileMp.prototype.arrayValueGetObject = function(arrayData, arrayIndex) {};

/**
 * @param {?} arrayData
 * @return {number}
 */
GameDatafileMp.prototype.arrayValueGetSize = function(arrayData) {};

/**
 * @param {?} arrayData
 * @param {number} arrayIndex
 * @return {string}
 */
GameDatafileMp.prototype.arrayValueGetString = function(arrayData, arrayIndex) {};

/**
 * @param {?} arrayData
 * @param {number} arrayIndex
 * @return {number}
 */
GameDatafileMp.prototype.arrayValueGetType = function(arrayData, arrayIndex) {};

/**
 * @param {?} arrayData
 * @param {number} arraayIndex
 * @return {function(new: (?), number, number, number): ?}
 */
GameDatafileMp.prototype.arrayValueGetVector3 = function(arrayData, arraayIndex) {};

/**
 * @param {string} filename
 * @return {boolean}
 */
GameDatafileMp.prototype.loadUgcFile = function(filename) {};

/**
 * @param {?} objectData
 * @param {string} key
 * @return {void}
 */
GameDatafileMp.prototype.objectValueAddArray = function(objectData, key) {};

/**
 * @param {?} arrayData
 * @param {string} key
 * @param {boolean} value
 * @return {void}
 */
GameDatafileMp.prototype.objectValueAddBoolean = function(arrayData, key, value) {};

/**
 * @param {?} objectData
 * @param {string} key
 * @param {number} value
 * @return {void}
 */
GameDatafileMp.prototype.objectValueAddFloat = function(objectData, key, value) {};

/**
 * @param {?} objectData
 * @param {string} key
 * @param {number} value
 * @return {void}
 */
GameDatafileMp.prototype.objectValueAddInteger = function(objectData, key, value) {};

/**
 * @param {?} objectData
 * @param {string} key
 * @return {void}
 */
GameDatafileMp.prototype.objectValueAddObject = function(objectData, key) {};

/**
 * @param {?} objectData
 * @param {string} key
 * @param {string} value
 * @return {void}
 */
GameDatafileMp.prototype.objectValueAddString = function(objectData, key, value) {};

/**
 * @param {?} objectData
 * @param {string} key
 * @param {number} valueX
 * @param {number} valueY
 * @param {number} valueZ
 * @return {void}
 */
GameDatafileMp.prototype.objectValueAddVector3 = function(objectData, key, valueX, valueY, valueZ) {};

/**
 * @param {?} objectData
 * @param {string} key
 * @return {?}
 */
GameDatafileMp.prototype.objectValueGetArray = function(objectData, key) {};

/**
 * @param {?} objectData
 * @param {string} key
 * @return {boolean}
 */
GameDatafileMp.prototype.objectValueGetBoolean = function(objectData, key) {};

/**
 * @param {?} objectData
 * @param {string} key
 * @return {number}
 */
GameDatafileMp.prototype.objectValueGetFloat = function(objectData, key) {};

/**
 * @param {?} objectData
 * @param {string} key
 * @return {number}
 */
GameDatafileMp.prototype.objectValueGetInteger = function(objectData, key) {};

/**
 * @param {?} objectData
 * @param {string} key
 * @return {void}
 */
GameDatafileMp.prototype.objectValueGetObject = function(objectData, key) {};

/**
 * @param {?} objectData
 * @param {string} key
 * @return {string}
 */
GameDatafileMp.prototype.objectValueGetString = function(objectData, key) {};

/**
 * @param {?} objectData
 * @param {string} key
 * @return {number}
 */
GameDatafileMp.prototype.objectValueGetType = function(objectData, key) {};

/**
 * @param {?} objectData
 * @param {string} key
 * @return {function(new: (?), number, number, number): ?}
 */
GameDatafileMp.prototype.objectValueGetVector3 = function(objectData, key) {};
/**
 * @record
 * @struct
 */
function GameDecisioneventMp() {}

/**
 * @param {number} type
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} duration
 * @return {!GameScriptMp}
 */
GameDecisioneventMp.prototype.addShockingEventAtPosition = function(type, x, y, z, duration) {};

/**
 * @param {number} type
 * @param {number} entity
 * @param {number} duration
 * @return {!GameScriptMp}
 */
GameDecisioneventMp.prototype.addShockingEventForEntity = function(type, entity, duration) {};

/**
 * @param {number} name
 * @param {number} type
 * @return {void}
 */
GameDecisioneventMp.prototype.blockDecisionMakerEvent = function(name, type) {};

/**
 * @param {number} name
 * @param {number} type
 * @return {void}
 */
GameDecisioneventMp.prototype.clearDecisionMakerEventResponse = function(name, type) {};

/**
 * @param {number} type
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @return {boolean}
 */
GameDecisioneventMp.prototype.isShockingEventInSphere = function(type, x, y, z, radius) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameDecisioneventMp.prototype.removeAllShockingEvents = function(p0) {};

/**
 * @param {!GameScriptMp} event
 * @return {boolean}
 */
GameDecisioneventMp.prototype.removeShockingEvent = function(event) {};

/**
 * @param {number} type
 * @return {void}
 */
GameDecisioneventMp.prototype.suppressShockingEvent = function(type) {};

/**
 * @param {number} name
 * @param {number} type
 * @return {void}
 */
GameDecisioneventMp.prototype.unblockDecisionMakerEvent = function(name, type) {};
/**
 * @record
 * @struct
 */
function GameDecoratorMp() {}

/**
 * @param {string} propertyName
 * @param {number} type
 * @return {boolean}
 */
GameDecoratorMp.prototype.decorIsRegisteredAsType = function(propertyName, type) {};

/**
 * @param {string} propertyName
 * @param {number} type
 * @return {void}
 */
GameDecoratorMp.prototype.decorRegister = function(propertyName, type) {};
/**
 * @record
 * @struct
 */
function GameDlc1Mp() {}

/**
 * @param {number} dlcVehicleIndex
 * @param {?} outData
 * @return {boolean}
 */
GameDlc1Mp.prototype.getDlcVehicleData = function(dlcVehicleIndex, outData) {};

/**
 * @param {number} p0
 * @return {number}
 */
GameDlc1Mp.prototype.getDlcVehicleFlags = function(p0) {};

/**
 * @param {number} dlcVehicleIndex
 * @return {number}
 */
GameDlc1Mp.prototype.getDlcVehicleModel = function(dlcVehicleIndex) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {{attachBone: number, padding1: number, bActiveByDefault: number, padding2: number, unk: number, padding3: number, componentHash: number, padding4: number, unk2: number, padding5: number, componentCost: number, padding6: number, nameLabel: string, descLabel: string}} componentDataPtr
 * @return {boolean}
 */
GameDlc1Mp.prototype.getDlcWeaponComponentData = function(p0, p1, componentDataPtr) {};

/**
 * @param {number} dlcWeaponIndex
 * @param {{emptyCheck: number, padding1: number, weaponHash: number, padding2: number, unk: number, padding3: number, weaponCost: number, padding4: number, ammoCost: number, padding5: number, ammoType: number, padding6: number, defaultClipSize: number, padding7: number, nameLabel: string, descLabel: string, desc2Label: string, upperCaseNameLabel: string}} outData
 * @return {boolean}
 */
GameDlc1Mp.prototype.getDlcWeaponData = function(dlcWeaponIndex, outData) {};

/**
 * @param {number} componentHash
 * @param {number} componentId
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @return {void}
 */
GameDlc1Mp.prototype.getForcedComponent = function(componentHash, componentId, p2, p3, p4) {};

/**
 * @param {number} dlcWeaponIndex
 * @return {number}
 */
GameDlc1Mp.prototype.getNumDlcWeaponComponents = function(dlcWeaponIndex) {};

/**
 * @param {number} componentHash
 * @return {number}
 */
GameDlc1Mp.prototype.getNumForcedComponents = function(componentHash) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {boolean} p3
 * @param {number} p4
 * @param {number} componentId
 * @return {number}
 */
GameDlc1Mp.prototype.getNumPropsFromOutfit = function(p0, p1, p2, p3, p4, componentId) {};

/**
 * @param {?} outfit
 * @param {number} slot
 * @param {?} item
 * @return {boolean}
 */
GameDlc1Mp.prototype.getPropFromOutfit = function(outfit, slot, item) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {void}
 */
GameDlc1Mp.prototype.getShopPedComponent = function(p0, p1) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {void}
 */
GameDlc1Mp.prototype.getShopPedOutfit = function(p0, p1) {};

/**
 * @param {number} componentId
 * @param {number} outComponent
 * @return {number}
 */
GameDlc1Mp.prototype.getShopPedQueryComponent = function(componentId, outComponent) {};

/**
 * @param {?} p0
 * @param {{mask: number, torso: number, pants: number, parachute: number, shoes: number, misc1: number, tops1: number, armour: number, crew: number, tops2: number, hat: number, glasses: number, earpiece: number, maskTexture: number, torsoTexture: number, pantsTexture: number, parachuteTexture: number, shoesTexture: number, misc1Texture: number, tops1Texture: number, armourTexture: number, crewTexture: number, tops2Texture: number, hatTexture: number, glassesTexture: number, earpiceTexture: number}} outfit
 * @return {void}
 */
GameDlc1Mp.prototype.getShopPedQueryOutput = function(p0, outfit) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {void}
 */
GameDlc1Mp.prototype.getShopPedQueryProp = function(p0, p1) {};

/**
 * @param {number} componentHash
 * @param {number} componentId
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @return {void}
 */
GameDlc1Mp.prototype.getVariantComponent = function(componentHash, componentId, p2, p3, p4) {};

/**
 * @param {number} outComponent
 * @return {number}
 */
GameDlc1Mp.prototype.initShopPedComponent = function(outComponent) {};

/**
 * @param {number} outProp
 * @return {number}
 */
GameDlc1Mp.prototype.initShopPedProp = function(outProp) {};

/**
 * @param {number} dlcData
 * @return {boolean}
 */
GameDlc1Mp.prototype.isDlcDataEmpty = function(dlcData) {};
/**
 * @record
 * @struct
 */
function GameDlc2Mp() {}

/**
 * @param {number} dlcHash
 * @return {boolean}
 */
GameDlc2Mp.prototype.isDlcPresent = function(dlcHash) {};

/**
 * @param {?} variable
 * @param {?} unused
 * @return {boolean}
 */
GameDlc2Mp.prototype.nullify = function(variable, unused) {};
/**
 * @record
 * @struct
 */
function GameEntityMp() {}

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {?} p3
 * @param {number} modelHash
 * @param {boolean} p5
 * @return {void}
 */
GameEntityMp.prototype.createForcedObject = function(x, y, z, p3, modelHash, p5) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {number} model
 * @param {boolean} p5
 * @return {void}
 */
GameEntityMp.prototype.createModelHide = function(x, y, z, radius, model, p5) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {number} model
 * @param {boolean} p5
 * @return {void}
 */
GameEntityMp.prototype.createModelHideExcludingScriptObjects = function(x, y, z, radius, model, p5) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {number} originalModel
 * @param {number} newModel
 * @param {boolean} p6
 * @return {void}
 */
GameEntityMp.prototype.createModelSwap = function(x, y, z, radius, originalModel, newModel, p6) {};

/**
 * @param {string} animDictionary
 * @param {string} animName
 * @param {string} p2
 * @param {?} p3
 * @param {?} p4
 * @return {boolean}
 */
GameEntityMp.prototype.findAnimEventPhase = function(animDictionary, animName, p2, p3, p4) {};

/**
 * @param {string} animDict
 * @param {string} animName
 * @return {number}
 */
GameEntityMp.prototype.getEntityAnimDuration = function(animDict, animName) {};

/**
 * @param {number} handle
 * @return {boolean}
 */
GameEntityMp.prototype.isAnEntity = function(handle) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {?} p4
 * @param {?} p5
 * @param {?} p6
 * @param {?} p7
 * @param {number} p8
 * @param {number} p9
 * @param {?} p10
 * @param {number} p11
 * @return {boolean}
 */
GameEntityMp.prototype.playSynchronizedMapEntityAnim = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @return {void}
 */
GameEntityMp.prototype.removeForcedObject = function(p0, p1, p2, p3, p4) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @param {?} p5
 * @return {void}
 */
GameEntityMp.prototype.removeModelHide = function(p0, p1, p2, p3, p4, p5) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {number} originModel
 * @param {number} newModel
 * @param {boolean} p6
 * @return {void}
 */
GameEntityMp.prototype.removeModelSwap = function(x, y, z, radius, originModel, newModel, p6) {};

/**
 * @param {number} object
 * @return {void}
 */
GameEntityMp.prototype.setObjectAsNoLongerNeeded = function(object) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {?} p4
 * @param {number} p5
 * @return {boolean}
 */
GameEntityMp.prototype.stopSynchronizedMapEntityAnim = function(p0, p1, p2, p3, p4, p5) {};

/**
 * @param {number} hash
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} p4
 * @return {boolean}
 */
GameEntityMp.prototype.wouldEntityBeOccluded = function(hash, x, y, z, p4) {};
/**
 * @record
 * @struct
 */
function GameFireMp() {}

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} explosionType
 * @param {number} explosionFx
 * @param {number} damageScale
 * @param {boolean} isAudible
 * @param {boolean} isInvisible
 * @param {number} cameraShake
 * @return {void}
 */
GameFireMp.prototype.addSpecfxExplosion = function(x, y, z, explosionType, explosionFx, damageScale, isAudible, isInvisible, cameraShake) {};

/**
 * @param {function(new: (?), number, number, number): ?} outPosition
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {function(new: (?), number, number, number): ?}
 */
GameFireMp.prototype.getClosestFirePos = function(outPosition, x, y, z) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @return {number}
 */
GameFireMp.prototype.getNumberOfFiresInRange = function(x, y, z, radius) {};

/**
 * @param {number} explosionType
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {number} radius
 * @return {!EntityMp}
 */
GameFireMp.prototype.getPedInsideExplosionArea = function(explosionType, x1, y1, z1, x2, y2, z2, radius) {};

/**
 * @param {number} explosionType
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {number} angle
 * @return {boolean}
 */
GameFireMp.prototype.isExplosionInAngledArea = function(explosionType, x1, y1, z1, x2, y2, z2, angle) {};

/**
 * @param {number} explosionType
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @return {boolean}
 */
GameFireMp.prototype.isExplosionInArea = function(explosionType, x1, y1, z1, x2, y2, z2) {};

/**
 * @param {number} explosionType
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @return {boolean}
 */
GameFireMp.prototype.isExplosionInSphere = function(explosionType, x, y, z, radius) {};

/**
 * @param {number} fireHandle
 * @return {void}
 */
GameFireMp.prototype.removeScriptFire = function(fireHandle) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} maxChildren
 * @param {boolean} isGasFire
 * @return {number}
 */
GameFireMp.prototype.startScriptFire = function(x, y, z, maxChildren, isGasFire) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @return {void}
 */
GameFireMp.prototype.stopFireInRange = function(x, y, z, radius) {};
/**
 * @record
 * @struct
 */
function GameGameplayMp() {}

/**
 * @param {number} value
 * @return {number}
 */
GameGameplayMp.prototype.absf = function(value) {};

/**
 * @param {number} value
 * @return {number}
 */
GameGameplayMp.prototype.absi = function(value) {};

/**
 * @param {number} p0
 * @return {number}
 */
GameGameplayMp.prototype.acos = function(p0) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} p3
 * @param {?} p4
 * @return {number}
 */
GameGameplayMp.prototype.addHospitalRestart = function(x, y, z, p3, p4) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {?} p4
 * @return {void}
 */
GameGameplayMp.prototype.addPoliceRestart = function(p0, p1, p2, p3, p4) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {number} p7
 * @param {number} p8
 * @param {number} p9
 * @param {number} p10
 * @param {number} p11
 * @param {number} p12
 * @param {number} p13
 * @param {number} p14
 * @param {?} p15
 * @param {?} p16
 * @return {number}
 */
GameGameplayMp.prototype.addStuntJump = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {number} p7
 * @param {number} p8
 * @param {number} p9
 * @param {number} p10
 * @param {number} p11
 * @param {number} p12
 * @param {number} p13
 * @param {number} p14
 * @param {number} p15
 * @param {number} p16
 * @param {?} p17
 * @param {?} p18
 * @return {number}
 */
GameGameplayMp.prototype.addStuntJumpAngled = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18) {};

/**
 * @param {string} string1
 * @param {string} string2
 * @return {boolean}
 */
GameGameplayMp.prototype.areStringsEqual = function(string1, string2) {};

/**
 * @param {number} p0
 * @return {number}
 */
GameGameplayMp.prototype.asin = function(p0) {};

/**
 * @param {number} p0
 * @return {number}
 */
GameGameplayMp.prototype.atan = function(p0) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @return {number}
 */
GameGameplayMp.prototype.atan2 = function(p0, p1) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {void}
 */
GameGameplayMp.prototype.beginReplayStats = function(p0, p1) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {boolean} p7
 * @param {boolean} p8
 * @param {boolean} p9
 * @param {boolean} p10
 * @param {boolean} p11
 * @return {void}
 */
GameGameplayMp.prototype.clearAngledAreaOfVehicles = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11) {};

/**
 * @param {number} X
 * @param {number} Y
 * @param {number} Z
 * @param {number} radius
 * @param {boolean} p4
 * @param {boolean} ignoreCopCars
 * @param {boolean} ignoreObjects
 * @param {boolean} p7
 * @return {void}
 */
GameGameplayMp.prototype.clearArea = function(X, Y, Z, radius, p4, ignoreCopCars, ignoreObjects, p7) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {number} flags
 * @return {void}
 */
GameGameplayMp.prototype.clearAreaOfCops = function(x, y, z, radius, flags) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {boolean} p4
 * @param {boolean} p5
 * @param {boolean} p6
 * @param {boolean} p7
 * @return {void}
 */
GameGameplayMp.prototype.clearAreaOfEverything = function(x, y, z, radius, p4, p5, p6, p7) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {number} flags
 * @return {void}
 */
GameGameplayMp.prototype.clearAreaOfObjects = function(x, y, z, radius, flags) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {number} flags
 * @return {void}
 */
GameGameplayMp.prototype.clearAreaOfPeds = function(x, y, z, radius, flags) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {number} flags
 * @return {void}
 */
GameGameplayMp.prototype.clearAreaOfProjectiles = function(x, y, z, radius, flags) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {boolean} p4
 * @param {boolean} p5
 * @param {boolean} p6
 * @param {boolean} p7
 * @param {boolean} p8
 * @return {void}
 */
GameGameplayMp.prototype.clearAreaOfVehicles = function(x, y, z, radius, p4, p5, p6, p7, p8) {};

/**
 * @param {number} address
 * @param {number} offset
 * @return {number}
 */
GameGameplayMp.prototype.clearBit = function(address, offset) {};

/**
 * @param {string} str1
 * @param {string} str2
 * @param {boolean} matchCase
 * @param {number} maxLength
 * @return {number}
 */
GameGameplayMp.prototype.compareStrings = function(str1, str2, matchCase, maxLength) {};

/**
 * @param {number} p0
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {number} outIncident
 * @return {number}
 */
GameGameplayMp.prototype.createIncident = function(p0, p2, p3, p4, p5, p6, outIncident) {};

/**
 * @param {number} p0
 * @param {!EntityMp} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} outIncident
 * @return {number}
 */
GameGameplayMp.prototype.createIncidentWithEntity = function(p0, p1, p2, p3, outIncident) {};

/**
 * @param {number} incidentId
 * @return {number}
 */
GameGameplayMp.prototype.deleteIncident = function(incidentId) {};

/**
 * @param {number} p0
 * @return {void}
 */
GameGameplayMp.prototype.deleteStuntJump = function(p0) {};

/**
 * @param {boolean} disableRespawn
 * @return {void}
 */
GameGameplayMp.prototype.disableAutomaticRespawn = function(disableRespawn) {};

/**
 * @param {number} hospitalIndex
 * @param {boolean} toggle
 * @return {void}
 */
GameGameplayMp.prototype.disableHospitalRestart = function(hospitalIndex, toggle) {};

/**
 * @param {number} policeIndex
 * @param {boolean} toggle
 * @return {void}
 */
GameGameplayMp.prototype.disablePoliceRestart = function(policeIndex, toggle) {};

/**
 * @param {number} p0
 * @return {void}
 */
GameGameplayMp.prototype.disableStuntJumpSet = function(p0) {};

/**
 * @param {number} p0
 * @param {string} windowTitle
 * @param {string} p2
 * @param {string} defaultText
 * @param {string} defaultConcat1
 * @param {string} defaultConcat2
 * @param {string} defaultConcat3
 * @param {number} maxInputLength
 * @return {void}
 */
GameGameplayMp.prototype.displayOnscreenKeyboard = function(p0, windowTitle, p2, defaultText, defaultConcat1, defaultConcat2, defaultConcat3, maxInputLength) {};

/**
 * @param {number} dispatchType
 * @param {boolean} toggle
 * @return {void}
 */
GameGameplayMp.prototype.enableDispatchService = function(dispatchType, toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGameplayMp.prototype.enableMpDlcMaps = function(toggle) {};

/**
 * @param {number} p0
 * @return {void}
 */
GameGameplayMp.prototype.enableStuntJumpSet = function(p0) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {number} distance
 * @param {function(new: (?), number, number, number): ?} spawnPoint
 * @return {function(new: (?), number, number, number): ?}
 */
GameGameplayMp.prototype.findSpawnPointInDirection = function(x1, y1, z1, x2, y2, z2, distance, spawnPoint) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
GameGameplayMp.prototype.getAngleBetween2dVectors = function(x1, y1, x2, y2) {};

/**
 * @param {number} vars
 * @param {number} rangeStart
 * @param {number} rangeEnd
 * @return {number}
 */
GameGameplayMp.prototype.getBitsInRange = function(vars, rangeStart, rangeEnd) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {boolean} useZ
 * @return {number}
 */
GameGameplayMp.prototype.getDistanceBetweenCoords = function(x1, y1, z1, x2, y2, z2, useZ) {};

/**
 * @param {number} stackSize
 * @return {number}
 */
GameGameplayMp.prototype.getFreeStackSlotsCount = function(stackSize) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} groundZ
 * @param {boolean} unk
 * @return {number}
 */
GameGameplayMp.prototype.getGroundZFor3dCoord = function(x, y, z, groundZ, unk) {};

/**
 * @param {string} value
 * @return {number}
 */
GameGameplayMp.prototype.getHashKey = function(value) {};

/**
 * @param {number} dx
 * @param {number} dy
 * @return {number}
 */
GameGameplayMp.prototype.getHeadingFromVector2d = function(dx, dy) {};

/**
 * @param {number} modelHash
 * @param {function(new: (?), number, number, number): ?} minimum
 * @param {function(new: (?), number, number, number): ?} maximum
 * @return {{minimum: function(new: (?), number, number, number): ?, maximum: ?}}
 */
GameGameplayMp.prototype.getModelDimensions = function(modelHash, minimum, maximum) {};

/**
 * @param {number} profileSetting
 * @return {number}
 */
GameGameplayMp.prototype.getProfileSetting = function(profileSetting) {};

/**
 * @param {number} startRange
 * @param {number} endRange
 * @return {number}
 */
GameGameplayMp.prototype.getRandomFloatInRange = function(startRange, endRange) {};

/**
 * @param {number} startRange
 * @param {number} endRange
 * @return {number}
 */
GameGameplayMp.prototype.getRandomIntInRange = function(startRange, endRange) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {number} progress_or_time
 * @return {number}
 */
GameGameplayMp.prototype.getWeatherTypeTransition = function(p0, p1, progress_or_time) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {boolean} p4
 * @param {boolean} p5
 * @return {boolean}
 */
GameGameplayMp.prototype.hasBulletImpactedInArea = function(p0, p1, p2, p3, p4, p5) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {boolean} p6
 * @param {boolean} p7
 * @return {boolean}
 */
GameGameplayMp.prototype.hasBulletImpactedInBox = function(p0, p1, p2, p3, p4, p5, p6, p7) {};

/**
 * @param {number} hash
 * @param {number} amount
 * @return {boolean}
 */
GameGameplayMp.prototype.hasButtonCombinationJustBeenEntered = function(hash, amount) {};

/**
 * @param {number} hash
 * @return {boolean}
 */
GameGameplayMp.prototype.hasCheatStringJustBeenEntered = function(hash) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGameplayMp.prototype.ignoreNextRestart = function(toggle) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {boolean} p6
 * @param {boolean} p7
 * @param {boolean} p8
 * @param {boolean} p9
 * @param {boolean} p10
 * @param {?} p11
 * @param {boolean} p12
 * @return {boolean}
 */
GameGameplayMp.prototype.isAreaOccupied = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12) {};

/**
 * @param {number} address
 * @param {number} offset
 * @return {boolean}
 */
GameGameplayMp.prototype.isBitSet = function(address, offset) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {boolean} p7
 * @return {boolean}
 */
GameGameplayMp.prototype.isBulletInAngledArea = function(p0, p1, p2, p3, p4, p5, p6, p7) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {boolean} p4
 * @return {boolean}
 */
GameGameplayMp.prototype.isBulletInArea = function(p0, p1, p2, p3, p4) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {boolean} p6
 * @return {boolean}
 */
GameGameplayMp.prototype.isBulletInBox = function(p0, p1, p2, p3, p4, p5, p6) {};

/**
 * @param {number} incidentId
 * @return {number}
 */
GameGameplayMp.prototype.isIncidentValid = function(incidentId) {};

/**
 * @param {string} weatherType
 * @return {boolean}
 */
GameGameplayMp.prototype.isNextWeatherType = function(weatherType) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {?} p6
 * @return {boolean}
 */
GameGameplayMp.prototype.isPointObscuredByAMissionEntity = function(p0, p1, p2, p3, p4, p5, p6) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {boolean} p4
 * @param {boolean} p5
 * @param {boolean} p6
 * @param {boolean} p7
 * @param {boolean} p8
 * @param {?} p9
 * @param {boolean} p10
 * @return {boolean}
 */
GameGameplayMp.prototype.isPositionOccupied = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) {};

/**
 * @param {string} weatherType
 * @return {boolean}
 */
GameGameplayMp.prototype.isPrevWeatherType = function(weatherType) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {boolean} ownedByPlayer
 * @return {boolean}
 */
GameGameplayMp.prototype.isProjectileInArea = function(x1, y1, z1, x2, y2, z2, ownedByPlayer) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {?} p7
 * @param {boolean} p8
 * @return {boolean}
 */
GameGameplayMp.prototype.isProjectileTypeInAngledArea = function(p0, p1, p2, p3, p4, p5, p6, p7, p8) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {number} type
 * @param {boolean} p7
 * @return {boolean}
 */
GameGameplayMp.prototype.isProjectileTypeInArea = function(x1, y1, z1, x2, y2, z2, type, p7) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @return {boolean}
 */
GameGameplayMp.prototype.isSniperBulletInArea = function(x1, y1, z1, x2, y2, z2) {};

/**
 * @param {string} string
 * @return {boolean}
 */
GameGameplayMp.prototype.isStringNull = function(string) {};

/**
 * @param {string} string
 * @return {boolean}
 */
GameGameplayMp.prototype.isStringNullOrEmpty = function(string) {};

/**
 * @param {boolean} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {boolean} p5
 * @param {number} p6
 * @param {number} p7
 * @return {boolean}
 */
GameGameplayMp.prototype.overrideSaveHouse = function(p0, p1, p2, p3, p4, p5, p6, p7) {};

/**
 * @param {?} p0
 * @param {string} name
 * @return {void}
 */
GameGameplayMp.prototype.registerBoolToSave = function(p0, name) {};

/**
 * @param {?} p0
 * @param {string} name
 * @return {void}
 */
GameGameplayMp.prototype.registerEnumToSave = function(p0, name) {};

/**
 * @param {?} p0
 * @param {string} name
 * @return {void}
 */
GameGameplayMp.prototype.registerFloatToSave = function(p0, name) {};

/**
 * @param {?} p0
 * @param {string} name
 * @return {void}
 */
GameGameplayMp.prototype.registerIntToSave = function(p0, name) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {?} p4
 * @param {?} p5
 * @param {?} p6
 * @return {void}
 */
GameGameplayMp.prototype.registerSaveHouse = function(p0, p1, p2, p3, p4, p5, p6) {};

/**
 * @param {?} p0
 * @param {string} name
 * @return {void}
 */
GameGameplayMp.prototype.registerTextLabelToSave = function(p0, name) {};

/**
 * @param {?} p0
 * @return {void}
 */
GameGameplayMp.prototype.removeDispatchSpawnBlockingArea = function(p0) {};

/**
 * @param {number} address
 * @param {number} offset
 * @return {number}
 */
GameGameplayMp.prototype.setBit = function(address, offset) {};

/**
 * @param {number} vars
 * @param {number} rangeStart
 * @param {number} rangeEnd
 * @param {number} p3
 * @return {number}
 */
GameGameplayMp.prototype.setBitsInRange = function(vars, rangeStart, rangeEnd, p3) {};

/**
 * @param {string} type
 * @param {number} transitionTime
 * @return {void}
 */
GameGameplayMp.prototype.setCloudHatTransition = function(type, transitionTime) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGameplayMp.prototype.setCreditsActive = function(toggle) {};

/**
 * @param {number} p0
 * @return {void}
 */
GameGameplayMp.prototype.setDispatchIdealSpawnDistance = function(p0) {};

/**
 * @param {?} p0
 * @param {number} p1
 * @return {void}
 */
GameGameplayMp.prototype.setDispatchTimeBetweenSpawnAttempts = function(p0, p1) {};

/**
 * @param {?} p0
 * @param {number} p1
 * @return {void}
 */
GameGameplayMp.prototype.setDispatchTimeBetweenSpawnAttemptsMultiplier = function(p0, p1) {};

/**
 * @return {void}
 */
GameGameplayMp.prototype.setExplosiveAmmoThisFrame = function() {};

/**
 * @return {void}
 */
GameGameplayMp.prototype.setExplosiveMeleeThisFrame = function() {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGameplayMp.prototype.setFadeInAfterDeathArrest = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGameplayMp.prototype.setFadeInAfterLoad = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGameplayMp.prototype.setFadeOutAfterArrest = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGameplayMp.prototype.setFadeOutAfterDeath = function(toggle) {};

/**
 * @param {number} fakeWantedLevel
 * @return {void}
 */
GameGameplayMp.prototype.setFakeWantedLevel = function(fakeWantedLevel) {};

/**
 * @return {void}
 */
GameGameplayMp.prototype.setFireAmmoThisFrame = function() {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGameplayMp.prototype.setGamePaused = function(toggle) {};

/**
 * @param {number} level
 * @return {void}
 */
GameGameplayMp.prototype.setGravityLevel = function(level) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGameplayMp.prototype.setMinigameInProgress = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGameplayMp.prototype.setMissionFlag = function(toggle) {};

/**
 * @param {string} weatherType
 * @return {void}
 */
GameGameplayMp.prototype.setOverrideWeather = function(weatherType) {};

/**
 * @param {number} intensity
 * @return {void}
 */
GameGameplayMp.prototype.setRainFxIntensity = function(intensity) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameGameplayMp.prototype.setRandomEventFlag = function(p0) {};

/**
 * @param {number} time
 * @return {void}
 */
GameGameplayMp.prototype.setRandomSeed = function(time) {};

/**
 * @param {?} p0
 * @param {boolean} p1
 * @param {boolean} p2
 * @return {void}
 */
GameGameplayMp.prototype.setSaveHouse = function(p0, p1, p2) {};

/**
 * @param {boolean} unk
 * @return {void}
 */
GameGameplayMp.prototype.setSaveMenuActive = function(unk) {};

/**
 * @return {void}
 */
GameGameplayMp.prototype.setSuperJumpThisFrame = function() {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGameplayMp.prototype.setThisScriptCanBePaused = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGameplayMp.prototype.setThisScriptCanRemoveBlipsCreatedByAnyScript = function(toggle) {};

/**
 * @param {number} time
 * @return {void}
 */
GameGameplayMp.prototype.setTimeScale = function(time) {};

/**
 * @param {number} flag
 * @return {void}
 */
GameGameplayMp.prototype.setUnkMapFlag = function(flag) {};

/**
 * @param {string} weatherType
 * @return {void}
 */
GameGameplayMp.prototype.setWeatherTypeNow = function(weatherType) {};

/**
 * @param {string} weatherType
 * @return {void}
 */
GameGameplayMp.prototype.setWeatherTypeNowPersist = function(weatherType) {};

/**
 * @param {string} weatherType
 * @param {number} time
 * @return {void}
 */
GameGameplayMp.prototype.setWeatherTypeOverTime = function(weatherType, time) {};

/**
 * @param {string} weatherType
 * @return {void}
 */
GameGameplayMp.prototype.setWeatherTypePersist = function(weatherType) {};

/**
 * @param {number} sourceWeather
 * @param {number} targetWeather
 * @param {number} transitionTime
 * @return {void}
 */
GameGameplayMp.prototype.setWeatherTypeTransition = function(sourceWeather, targetWeather, transitionTime) {};

/**
 * @param {number} p0
 * @return {void}
 */
GameGameplayMp.prototype.setWind = function(p0) {};

/**
 * @param {number} direction
 * @return {void}
 */
GameGameplayMp.prototype.setWindDirection = function(direction) {};

/**
 * @param {number} speed
 * @return {void}
 */
GameGameplayMp.prototype.setWindSpeed = function(speed) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {number} damage
 * @param {boolean} p7
 * @param {number} weaponHash
 * @param {number} ownerPed
 * @param {boolean} isAudible
 * @param {boolean} isInvisible
 * @param {number} speed
 * @return {void}
 */
GameGameplayMp.prototype.shootSingleBulletBetweenCoords = function(x1, y1, z1, x2, y2, z2, damage, p7, weaponHash, ownerPed, isAudible, isInvisible, speed) {};

/**
 * @param {?} p0
 * @param {number} p1
 * @param {string} arrayName
 * @return {void}
 */
GameGameplayMp.prototype.startSaveArray = function(p0, p1, arrayName) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {boolean} p2
 * @return {void}
 */
GameGameplayMp.prototype.startSaveData = function(p0, p1, p2) {};

/**
 * @param {?} p0
 * @param {number} p1
 * @param {string} structName
 * @return {void}
 */
GameGameplayMp.prototype.startSaveStruct = function(p0, p1, structName) {};

/**
 * @param {string} string
 * @param {number} outInteger
 * @return {number}
 */
GameGameplayMp.prototype.stringToInt = function(string, outInteger) {};

/**
 * @param {number} p0
 * @return {number}
 */
GameGameplayMp.prototype.tan = function(p0) {};

/**
 * @param {string} scriptName
 * @return {void}
 */
GameGameplayMp.prototype.terminateAllScriptsWithThisName = function(scriptName) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGameplayMp.prototype.usingMissionCreator = function(toggle) {};
/**
 * @record
 * @struct
 */
function GameGraphicsMp() {}

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {number} p7
 * @param {number} p8
 * @param {number} p9
 * @param {number} p10
 * @param {number} p11
 * @param {number} p12
 * @param {number} p13
 * @param {number} p14
 * @param {number} p15
 * @param {number} p16
 * @param {boolean} p17
 * @param {boolean} p18
 * @param {boolean} p19
 * @return {number}
 */
GameGraphicsMp.prototype.addDecal = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} groundLvl
 * @param {number} width
 * @param {number} transparency
 * @return {void}
 */
GameGraphicsMp.prototype.addPetrolDecal = function(x, y, z, groundLvl, width, transparency) {};

/**
 * @param {string} componentType
 * @return {void}
 */
GameGraphicsMp.prototype.beginTextComponent = function(componentType) {};

/**
 * @param {number} scaleform
 * @param {string} functionName
 * @param {number} param1
 * @param {number} param2
 * @param {number} param3
 * @param {number} param4
 * @param {number} param5
 * @return {void}
 */
GameGraphicsMp.prototype.callScaleformMovieFunctionFloatParams = function(scaleform, functionName, param1, param2, param3, param4, param5) {};

/**
 * @param {number} scaleform
 * @param {string} functionName
 * @param {number} floatParam1
 * @param {number} floatParam2
 * @param {number} floatParam3
 * @param {number} floatParam4
 * @param {number} floatParam5
 * @param {string} stringParam1
 * @param {string} stringParam2
 * @param {string} stringParam3
 * @param {string} stringParam4
 * @param {string} stringParam5
 * @return {void}
 */
GameGraphicsMp.prototype.callScaleformMovieFunctionMixedParams = function(scaleform, functionName, floatParam1, floatParam2, floatParam3, floatParam4, floatParam5, stringParam1, stringParam2, stringParam3, stringParam4, stringParam5) {};

/**
 * @param {number} scaleform
 * @param {string} functionName
 * @param {string} param1
 * @param {string} param2
 * @param {string} param3
 * @param {string} param4
 * @param {string} param5
 * @return {void}
 */
GameGraphicsMp.prototype.callScaleformMovieFunctionStringParams = function(scaleform, functionName, param1, param2, param3, param4, param5) {};

/**
 * @param {number} scaleform
 * @param {string} method
 * @return {void}
 */
GameGraphicsMp.prototype.callScaleformMovieMethod = function(scaleform, method) {};

/**
 * @param {number} type
 * @param {number} posX1
 * @param {number} posY1
 * @param {number} posZ1
 * @param {number} posX2
 * @param {number} posY2
 * @param {number} posZ2
 * @param {number} radius
 * @param {number} colorR
 * @param {number} colorG
 * @param {number} colorB
 * @param {number} alpha
 * @param {number} reserved
 * @return {number}
 */
GameGraphicsMp.prototype.createCheckpoint = function(type, posX1, posY1, posZ1, posX2, posY2, posZ2, radius, colorR, colorG, colorB, alpha, reserved) {};

/**
 * @param {number} point
 * @return {void}
 */
GameGraphicsMp.prototype.destroyTrackedPoint = function(point) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGraphicsMp.prototype.disableVehicleDistantlights = function(toggle) {};

/**
 * @param {number} ptfxHandle
 * @return {boolean}
 */
GameGraphicsMp.prototype.doesParticleFxLoopedExist = function(ptfxHandle) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} alpha
 * @return {void}
 */
GameGraphicsMp.prototype.drawBox = function(x1, y1, z1, x2, y2, z2, r, g, b, alpha) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} alpha
 * @return {void}
 */
GameGraphicsMp.prototype.drawDebugBox = function(x1, y1, z1, x2, y2, z2, r, g, b, alpha) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} size
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} alpha
 * @return {void}
 */
GameGraphicsMp.prototype.drawDebugCross = function(x, y, z, size, r, g, b, alpha) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} alpha
 * @return {void}
 */
GameGraphicsMp.prototype.drawDebugLine = function(x1, y1, z1, x2, y2, z2, r, g, b, alpha) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {number} r1
 * @param {number} g1
 * @param {number} b1
 * @param {number} r2
 * @param {number} g2
 * @param {number} b2
 * @param {number} alpha1
 * @param {number} alpha2
 * @return {void}
 */
GameGraphicsMp.prototype.drawDebugLineWithTwoColours = function(x1, y1, z1, x2, y2, z2, r1, g1, b1, r2, g2, b2, alpha1, alpha2) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} alpha
 * @return {void}
 */
GameGraphicsMp.prototype.drawDebugSphere = function(x, y, z, radius, r, g, b, alpha) {};

/**
 * @param {string} text
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} alpha
 * @return {void}
 */
GameGraphicsMp.prototype.drawDebugText = function(text, x, y, z, r, g, b, alpha) {};

/**
 * @param {string} text
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} alpha
 * @return {void}
 */
GameGraphicsMp.prototype.drawDebugText2d = function(text, x, y, z, r, g, b, alpha) {};

/**
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} colorR
 * @param {number} colorG
 * @param {number} colorB
 * @param {number} range
 * @param {number} intensity
 * @return {void}
 */
GameGraphicsMp.prototype.drawLightWithRange = function(posX, posY, posZ, colorR, colorG, colorB, range, intensity) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} range
 * @param {number} intensity
 * @param {number} shadow
 * @return {void}
 */
GameGraphicsMp.prototype.drawLightWithRangeAndShadow = function(x, y, z, r, g, b, range, intensity, shadow) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} alpha
 * @return {void}
 */
GameGraphicsMp.prototype.drawLine = function(x1, y1, z1, x2, y2, z2, r, g, b, alpha) {};

/**
 * @param {number} type
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} dirX
 * @param {number} dirY
 * @param {number} dirZ
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {number} scaleX
 * @param {number} scaleY
 * @param {number} scaleZ
 * @param {number} colorR
 * @param {number} colorG
 * @param {number} colorB
 * @param {number} alpha
 * @param {boolean} bobUpAndDown
 * @param {boolean} faceCamera
 * @param {number} p19
 * @param {boolean} rotate
 * @param {string} textureDict
 * @param {string} textureName
 * @param {boolean} drawOnEnts
 * @return {void}
 */
GameGraphicsMp.prototype.drawMarker = function(type, posX, posY, posZ, dirX, dirY, dirZ, rotX, rotY, rotZ, scaleX, scaleY, scaleZ, colorR, colorG, colorB, alpha, bobUpAndDown, faceCamera, p19, rotate, textureDict, textureName, drawOnEnts) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {number} x3
 * @param {number} y3
 * @param {number} z3
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} alpha
 * @return {void}
 */
GameGraphicsMp.prototype.drawPoly = function(x1, y1, z1, x2, y2, z2, x3, y3, z3, r, g, b, alpha) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @return {void}
 */
GameGraphicsMp.prototype.drawRect = function(x, y, width, height, r, g, b, a) {};

/**
 * @param {number} scaleformHandle
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 * @param {number} p9
 * @return {void}
 */
GameGraphicsMp.prototype.drawScaleformMovie = function(scaleformHandle, x, y, width, height, red, green, blue, alpha, p9) {};

/**
 * @param {number} scaleform
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {number} p7
 * @param {number} p8
 * @param {number} p9
 * @param {number} scaleX
 * @param {number} scaleY
 * @param {number} scaleZ
 * @param {?} p13
 * @return {void}
 */
GameGraphicsMp.prototype.drawScaleformMovie3d = function(scaleform, posX, posY, posZ, rotX, rotY, rotZ, p7, p8, p9, scaleX, scaleY, scaleZ, p13) {};

/**
 * @param {number} scaleform
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {number} p7
 * @param {number} p8
 * @param {number} p9
 * @param {number} scaleX
 * @param {number} scaleY
 * @param {number} scaleZ
 * @param {?} p13
 * @return {void}
 */
GameGraphicsMp.prototype.drawScaleformMovie3dNonAdditive = function(scaleform, posX, posY, posZ, rotX, rotY, rotZ, p7, p8, p9, scaleX, scaleY, scaleZ, p13) {};

/**
 * @param {number} scaleform
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 * @param {boolean} unk
 * @return {void}
 */
GameGraphicsMp.prototype.drawScaleformMovieFullscreen = function(scaleform, red, green, blue, alpha, unk) {};

/**
 * @param {number} scaleform1
 * @param {number} scaleform2
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 * @return {void}
 */
GameGraphicsMp.prototype.drawScaleformMovieFullscreenMasked = function(scaleform1, scaleform2, red, green, blue, alpha) {};

/**
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} dirX
 * @param {number} dirY
 * @param {number} dirZ
 * @param {number} colorR
 * @param {number} colorG
 * @param {number} colorB
 * @param {number} distance
 * @param {number} brightness
 * @param {number} roundness
 * @param {number} radius
 * @param {number} falloff
 * @return {void}
 */
GameGraphicsMp.prototype.drawSpotLight = function(posX, posY, posZ, dirX, dirY, dirZ, colorR, colorG, colorB, distance, brightness, roundness, radius, falloff) {};

/**
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} dirX
 * @param {number} dirY
 * @param {number} dirZ
 * @param {number} colorR
 * @param {number} colorG
 * @param {number} colorB
 * @param {number} distance
 * @param {number} brightness
 * @param {number} roundness
 * @param {number} radius
 * @param {number} falloff
 * @param {number} shadow
 * @return {void}
 */
GameGraphicsMp.prototype.drawSpotLightWithShadow = function(posX, posY, posZ, dirX, dirY, dirZ, colorR, colorG, colorB, distance, brightness, roundness, radius, falloff, shadow) {};

/**
 * @param {string} textureDict
 * @param {string} textureName
 * @param {number} screenX
 * @param {number} screenY
 * @param {number} scaleX
 * @param {number} scaleY
 * @param {number} heading
 * @param {number} colorR
 * @param {number} colorG
 * @param {number} colorB
 * @param {number} alpha
 * @return {void}
 */
GameGraphicsMp.prototype.drawSprite = function(textureDict, textureName, screenX, screenY, scaleX, scaleY, heading, colorR, colorG, colorB, alpha) {};

/**
 * @param {string} text
 * @param {!Array<?>} position
 * @param {{font: number, centre: boolean, color: !Array<?>, scale: !Array<?>, outline: boolean}=} data
 * @return {void}
 */
GameGraphicsMp.prototype.drawText = function(text, position, data) {};

/**
 * @param {number} xPos
 * @param {number} yPos
 * @param {number} xScale
 * @param {number} yScale
 * @param {number} rotation
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} alpha
 * @return {void}
 */
GameGraphicsMp.prototype.drawTvChannel = function(xPos, yPos, xScale, yScale, rotation, r, g, b, alpha) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGraphicsMp.prototype.enableAlienBloodVfx = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGraphicsMp.prototype.enableClownBloodVfx = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGraphicsMp.prototype.enableMovieSubtitles = function(toggle) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @return {void}
 */
GameGraphicsMp.prototype.fadeDecalsInRange = function(p0, p1, p2, p3, p4) {};

/**
 * @param {number} decal
 * @return {number}
 */
GameGraphicsMp.prototype.getDecalWashLevel = function(decal) {};

/**
 * @return {number}
 */
GameGraphicsMp.prototype.getSafeZoneSize = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @return {{x: number, y: number}}
 */
GameGraphicsMp.prototype.getScreenActiveResolution = function(x, y) {};

/**
 * @param {boolean} b
 * @return {number}
 */
GameGraphicsMp.prototype.getScreenAspectRatio = function(b) {};

/**
 * @param {string} effectName
 * @return {number}
 */
GameGraphicsMp.prototype.getScreenEffectIsActive = function(effectName) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {{x: number, y: number}}
 */
GameGraphicsMp.prototype.getScreenResolution = function(x, y) {};

/**
 * @param {string} textureDict
 * @param {string} textureName
 * @return {function(new: (?), number, number, number): ?}
 */
GameGraphicsMp.prototype.getTextureResolution = function(textureDict, textureName) {};

/**
 * @param {number} componentIndex
 * @return {boolean}
 */
GameGraphicsMp.prototype.hasHudScaleformLoaded = function(componentIndex) {};

/**
 * @param {string} scaleformName
 * @return {boolean}
 */
GameGraphicsMp.prototype.hasNamedScaleformMovieLoaded = function(scaleformName) {};

/**
 * @param {number} scaleformHandle
 * @return {boolean}
 */
GameGraphicsMp.prototype.hasScaleformContainerMovieLoadedIntoParent = function(scaleformHandle) {};

/**
 * @param {number} scaleformHandle
 * @return {boolean}
 */
GameGraphicsMp.prototype.hasScaleformMovieLoaded = function(scaleformHandle) {};

/**
 * @param {string} textureDict
 * @return {boolean}
 */
GameGraphicsMp.prototype.hasStreamedTextureDictLoaded = function(textureDict) {};

/**
 * @param {number} decal
 * @return {boolean}
 */
GameGraphicsMp.prototype.isDecalAlive = function(decal) {};

/**
 * @param {number} point
 * @return {boolean}
 */
GameGraphicsMp.prototype.isTrackedPointVisible = function(point) {};

/**
 * @param {string} movieMeshSetName
 * @return {number}
 */
GameGraphicsMp.prototype.loadMovieMeshSet = function(movieMeshSetName) {};

/**
 * @param {number} tvChannel
 * @return {boolean}
 */
GameGraphicsMp.prototype.loadTvChannel = function(tvChannel) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {void}
 */
GameGraphicsMp.prototype.moveVehicleDecals = function(p0, p1) {};

/**
 * @param {string} text
 * @return {void}
 */
GameGraphicsMp.prototype.notify = function(text) {};

/**
 * @param {number} scaleform
 * @param {string} functionName
 * @return {boolean}
 */
GameGraphicsMp.prototype.pushScaleformMovieFunction = function(scaleform, functionName) {};

/**
 * @param {number} componentIndex
 * @param {string} functionName
 * @return {boolean}
 */
GameGraphicsMp.prototype.pushScaleformMovieFunctionFromHudComponent = function(componentIndex, functionName) {};

/**
 * @param {string} functionName
 * @return {boolean}
 */
GameGraphicsMp.prototype.pushScaleformMovieFunctionN = function(functionName) {};

/**
 * @return {void}
 */
GameGraphicsMp.prototype.popScaleformMovieFunctionVoid = function() {};

/**
 * @param {boolean} value
 * @return {void}
 */
GameGraphicsMp.prototype.pushScaleformMovieFunctionParameterBool = function(value) {};

/**
 * @param {number} value
 * @return {void}
 */
GameGraphicsMp.prototype.pushScaleformMovieFunctionParameterFloat = function(value) {};

/**
 * @param {number} value
 * @return {void}
 */
GameGraphicsMp.prototype.pushScaleformMovieFunctionParameterInt = function(value) {};

/**
 * @param {string} value
 * @return {void}
 */
GameGraphicsMp.prototype.pushScaleformMovieFunctionParameterString = function(value) {};

/**
 * @param {number} movieMeshSet
 * @return {void}
 */
GameGraphicsMp.prototype.releaseMovieMeshSet = function(movieMeshSet) {};

/**
 * @param {number} decal
 * @return {void}
 */
GameGraphicsMp.prototype.removeDecal = function(decal) {};

/**
 * @param {number} obj
 * @return {void}
 */
GameGraphicsMp.prototype.removeDecalsFromObject = function(obj) {};

/**
 * @param {number} obj
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
GameGraphicsMp.prototype.removeDecalsFromObjectFacing = function(obj, x, y, z) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} range
 * @return {void}
 */
GameGraphicsMp.prototype.removeDecalsInRange = function(x, y, z, range) {};

/**
 * @param {number} ptfxHandle
 * @param {boolean} p1
 * @return {void}
 */
GameGraphicsMp.prototype.removeParticleFx = function(ptfxHandle, p1) {};

/**
 * @param {number} X
 * @param {number} Y
 * @param {number} Z
 * @param {number} radius
 * @return {void}
 */
GameGraphicsMp.prototype.removeParticleFxInRange = function(X, Y, Z, radius) {};

/**
 * @param {number} componentIndex
 * @return {void}
 */
GameGraphicsMp.prototype.requestHudScaleform = function(componentIndex) {};

/**
 * @param {string} scaleformName
 * @return {number}
 */
GameGraphicsMp.prototype.requestScaleformMovie = function(scaleformName) {};

/**
 * @param {string} scaleformName
 * @return {number}
 */
GameGraphicsMp.prototype.requestScaleformMovie3 = function(scaleformName) {};

/**
 * @param {string} scaleformName
 * @return {number}
 */
GameGraphicsMp.prototype.requestScaleformMovieInstance = function(scaleformName) {};

/**
 * @param {string} textureDict
 * @param {boolean} p1
 * @return {void}
 */
GameGraphicsMp.prototype.requestStreamedTextureDict = function(textureDict, p1) {};

/**
 * @param {!Array<?>} screenPosition
 * @param {boolean=} useRaycast
 * @return {function(new: (?), number, number, number): ?}
 */
GameGraphicsMp.prototype.screen2dToWorld3d = function(screenPosition, useRaycast) {};

/**
 * @param {number} layer
 * @return {void}
 */
GameGraphicsMp.prototype.set2dLayer = function(layer) {};

/**
 * @param {boolean} enable
 * @return {void}
 */
GameGraphicsMp.prototype.setBlackout = function(enable) {};

/**
 * @param {boolean} enabled
 * @return {void}
 */
GameGraphicsMp.prototype.setDebugLinesAndSpheresDrawingActive = function(enabled) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {?} p3
 * @return {void}
 */
GameGraphicsMp.prototype.setDrawOrigin = function(x, y, z, p3) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGraphicsMp.prototype.setFarShadowsSuppressed = function(toggle) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} fadeIn
 * @param {number} duration
 * @param {number} fadeOut
 * @return {void}
 */
GameGraphicsMp.prototype.setFlash = function(p0, p1, fadeIn, duration, fadeOut) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGraphicsMp.prototype.setForcePedFootstepsTracks = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGraphicsMp.prototype.setForceVehicleTrails = function(toggle) {};

/**
 * @param {boolean} enabled
 * @return {void}
 */
GameGraphicsMp.prototype.setFrozenRenderingDisabled = function(enabled) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGraphicsMp.prototype.setNightvision = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGraphicsMp.prototype.setNoiseoveride = function(toggle) {};

/**
 * @param {number} value
 * @return {void}
 */
GameGraphicsMp.prototype.setNoisinessoveride = function(value) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameGraphicsMp.prototype.setParticleFxBloodScale = function(p0) {};

/**
 * @param {?} p0
 * @param {boolean} p1
 * @return {void}
 */
GameGraphicsMp.prototype.setParticleFxCamInsideNonplayerVehicle = function(p0, p1) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameGraphicsMp.prototype.setParticleFxCamInsideVehicle = function(p0) {};

/**
 * @param {number} ptfxHandle
 * @param {number} alpha
 * @return {void}
 */
GameGraphicsMp.prototype.setParticleFxLoopedAlpha = function(ptfxHandle, alpha) {};

/**
 * @param {number} ptfxHandle
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {boolean} p4
 * @return {void}
 */
GameGraphicsMp.prototype.setParticleFxLoopedColour = function(ptfxHandle, r, g, b, p4) {};

/**
 * @param {number} ptfxHandle
 * @param {string} propertyName
 * @param {number} amount
 * @param {boolean} Id
 * @return {void}
 */
GameGraphicsMp.prototype.setParticleFxLoopedEvolution = function(ptfxHandle, propertyName, amount, Id) {};

/**
 * @param {number} ptfxHandle
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @return {void}
 */
GameGraphicsMp.prototype.setParticleFxLoopedOffsets = function(ptfxHandle, x, y, z, rotX, rotY, rotZ) {};

/**
 * @param {number} ptfxHandle
 * @param {number} range
 * @return {void}
 */
GameGraphicsMp.prototype.setParticleFxLoopedRange = function(ptfxHandle, range) {};

/**
 * @param {number} ptfxHandle
 * @param {number} scale
 * @return {void}
 */
GameGraphicsMp.prototype.setParticleFxLoopedScale = function(ptfxHandle, scale) {};

/**
 * @param {number} alpha
 * @return {void}
 */
GameGraphicsMp.prototype.setParticleFxNonLoopedAlpha = function(alpha) {};

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {void}
 */
GameGraphicsMp.prototype.setParticleFxNonLoopedColour = function(r, g, b) {};

/**
 * @param {?} p0
 * @return {void}
 */
GameGraphicsMp.prototype.setParticleFxShootoutBoat = function(p0) {};

/**
 * @param {string} name
 * @return {void}
 */
GameGraphicsMp.prototype.setPtfxAssetNextCall = function(name) {};

/**
 * @param {string} oldAsset
 * @param {string} newAsset
 * @return {void}
 */
GameGraphicsMp.prototype.setPtfxAssetOldToNew = function(oldAsset, newAsset) {};

/**
 * @param {number} scaleformHandle
 * @return {number}
 */
GameGraphicsMp.prototype.setScaleformMovieAsNoLongerNeeded = function(scaleformHandle) {};

/**
 * @param {number} scaleform
 * @param {boolean} toggle
 * @return {void}
 */
GameGraphicsMp.prototype.setScaleformMovieToUseSystemTime = function(scaleform, toggle) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
GameGraphicsMp.prototype.setScreenDrawPosition = function(x, y) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGraphicsMp.prototype.setSeethrough = function(toggle) {};

/**
 * @param {string} textureDict
 * @return {void}
 */
GameGraphicsMp.prototype.setStreamedTextureDictAsNoLongerNeeded = function(textureDict) {};

/**
 * @param {string} modifierName
 * @return {void}
 */
GameGraphicsMp.prototype.setTimecycleModifier = function(modifierName) {};

/**
 * @param {number} strength
 * @return {void}
 */
GameGraphicsMp.prototype.setTimecycleModifierStrength = function(strength) {};

/**
 * @param {number} point
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @return {void}
 */
GameGraphicsMp.prototype.setTrackedPointInfo = function(point, x, y, z, radius) {};

/**
 * @param {string} modifierName
 * @param {number} transition
 * @return {void}
 */
GameGraphicsMp.prototype.setTransitionTimecycleModifier = function(modifierName, transition) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameGraphicsMp.prototype.setTvAudioFrontend = function(toggle) {};

/**
 * @param {number} channel
 * @return {void}
 */
GameGraphicsMp.prototype.setTvChannel = function(channel) {};

/**
 * @param {number} volume
 * @return {void}
 */
GameGraphicsMp.prototype.setTvVolume = function(volume) {};

/**
 * @param {number} scaleform
 * @return {string}
 */
GameGraphicsMp.prototype.sittingTv = function(scaleform) {};

/**
 * @param {string} effectName
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} xRot
 * @param {number} yRot
 * @param {number} zRot
 * @param {number} scale
 * @param {boolean} xAxis
 * @param {boolean} yAxis
 * @param {boolean} zAxis
 * @param {boolean} p11
 * @return {number}
 */
GameGraphicsMp.prototype.startParticleFxLoopedAtCoord = function(effectName, x, y, z, xRot, yRot, zRot, scale, xAxis, yAxis, zAxis, p11) {};

/**
 * @param {string} effectName
 * @param {number} entity
 * @param {number} xOffset
 * @param {number} yOffset
 * @param {number} zOffset
 * @param {number} xRot
 * @param {number} yRot
 * @param {number} zRot
 * @param {number} scale
 * @param {boolean} xAxis
 * @param {boolean} yAxis
 * @param {boolean} zAxis
 * @return {number}
 */
GameGraphicsMp.prototype.startParticleFxLoopedOnEntity = function(effectName, entity, xOffset, yOffset, zOffset, xRot, yRot, zRot, scale, xAxis, yAxis, zAxis) {};

/**
 * @param {string} effectName
 * @param {number} entity
 * @param {number} xOffset
 * @param {number} yOffset
 * @param {number} zOffset
 * @param {number} xRot
 * @param {number} yRot
 * @param {number} zRot
 * @param {number} scale
 * @param {boolean} xAxis
 * @param {boolean} yAxis
 * @param {boolean} zAxis
 * @return {number}
 */
GameGraphicsMp.prototype.startParticleFxLoopedOnEntity2 = function(effectName, entity, xOffset, yOffset, zOffset, xRot, yRot, zRot, scale, xAxis, yAxis, zAxis) {};

/**
 * @param {string} effectName
 * @param {number} entity
 * @param {number} xOffset
 * @param {number} yOffset
 * @param {number} zOffset
 * @param {number} xRot
 * @param {number} yRot
 * @param {number} zRot
 * @param {number} boneIndex
 * @param {number} scale
 * @param {boolean} xAxis
 * @param {boolean} yAxis
 * @param {boolean} zAxis
 * @return {number}
 */
GameGraphicsMp.prototype.startParticleFxLoopedOnEntityBone = function(effectName, entity, xOffset, yOffset, zOffset, xRot, yRot, zRot, boneIndex, scale, xAxis, yAxis, zAxis) {};

/**
 * @param {string} effectName
 * @param {number} entity
 * @param {number} xOffset
 * @param {number} yOffset
 * @param {number} zOffset
 * @param {number} xRot
 * @param {number} yRot
 * @param {number} zRot
 * @param {number} boneIndex
 * @param {number} scale
 * @param {boolean} xAxis
 * @param {boolean} yAxis
 * @param {boolean} zAxis
 * @return {number}
 */
GameGraphicsMp.prototype.startParticleFxLoopedOnEntityBone2 = function(effectName, entity, xOffset, yOffset, zOffset, xRot, yRot, zRot, boneIndex, scale, xAxis, yAxis, zAxis) {};

/**
 * @param {string} effectName
 * @param {number} ped
 * @param {number} xOffset
 * @param {number} yOffset
 * @param {number} zOffset
 * @param {number} xRot
 * @param {number} yRot
 * @param {number} zRot
 * @param {number} boneIndex
 * @param {number} scale
 * @param {boolean} xAxis
 * @param {boolean} yAxis
 * @param {boolean} zAxis
 * @return {number}
 */
GameGraphicsMp.prototype.startParticleFxLoopedOnPedBone = function(effectName, ped, xOffset, yOffset, zOffset, xRot, yRot, zRot, boneIndex, scale, xAxis, yAxis, zAxis) {};

/**
 * @param {string} effectName
 * @param {number} xPos
 * @param {number} yPos
 * @param {number} zPos
 * @param {number} xRot
 * @param {number} yRot
 * @param {number} zRot
 * @param {number} scale
 * @param {boolean} xAxis
 * @param {boolean} yAxis
 * @param {boolean} zAxis
 * @return {boolean}
 */
GameGraphicsMp.prototype.startParticleFxNonLoopedAtCoord = function(effectName, xPos, yPos, zPos, xRot, yRot, zRot, scale, xAxis, yAxis, zAxis) {};

/**
 * @param {string} effectName
 * @param {number} xPos
 * @param {number} yPos
 * @param {number} zPos
 * @param {number} xRot
 * @param {number} yRot
 * @param {number} zRot
 * @param {number} scale
 * @param {boolean} xAxis
 * @param {boolean} yAxis
 * @param {boolean} zAxis
 * @return {boolean}
 */
GameGraphicsMp.prototype.startParticleFxNonLoopedAtCoord2 = function(effectName, xPos, yPos, zPos, xRot, yRot, zRot, scale, xAxis, yAxis, zAxis) {};

/**
 * @param {string} effectName
 * @param {number} entity
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {number} scale
 * @param {boolean} axisX
 * @param {boolean} axisY
 * @param {boolean} axisZ
 * @return {boolean}
 */
GameGraphicsMp.prototype.startParticleFxNonLoopedOnEntity = function(effectName, entity, offsetX, offsetY, offsetZ, rotX, rotY, rotZ, scale, axisX, axisY, axisZ) {};

/**
 * @param {string} effectName
 * @param {number} entity
 * @param {number} xOffset
 * @param {number} yOffset
 * @param {number} zOffset
 * @param {number} xRot
 * @param {number} yRot
 * @param {number} zRot
 * @param {number} boneIndex
 * @param {number} scale
 * @param {boolean} xAxis
 * @param {boolean} yAxis
 * @param {boolean} zAxis
 * @return {boolean}
 */
GameGraphicsMp.prototype.startParticleFxNonLoopedOnEntity2 = function(effectName, entity, xOffset, yOffset, zOffset, xRot, yRot, zRot, boneIndex, scale, xAxis, yAxis, zAxis) {};

/**
 * @param {string} effectName
 * @param {number} ped
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {number} boneIndex
 * @param {number} scale
 * @param {boolean} axisX
 * @param {boolean} axisY
 * @param {boolean} axisZ
 * @return {boolean}
 */
GameGraphicsMp.prototype.startParticleFxNonLoopedOnPedBone = function(effectName, ped, offsetX, offsetY, offsetZ, rotX, rotY, rotZ, boneIndex, scale, axisX, axisY, axisZ) {};

/**
 * @param {string} effectName
 * @param {number} ped
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {number} boneIndex
 * @param {number} scale
 * @param {boolean} axisX
 * @param {boolean} axisY
 * @param {boolean} axisZ
 * @return {boolean}
 */
GameGraphicsMp.prototype.startParticleFxNonLoopedOnPedBone2 = function(effectName, ped, offsetX, offsetY, offsetZ, rotX, rotY, rotZ, boneIndex, scale, axisX, axisY, axisZ) {};

/**
 * @param {string} effectName
 * @param {number} duration
 * @param {boolean} looped
 * @return {void}
 */
GameGraphicsMp.prototype.startScreenEffect = function(effectName, duration, looped) {};

/**
 * @param {number} ptfxHandle
 * @param {boolean} p1
 * @return {void}
 */
GameGraphicsMp.prototype.stopParticleFxLooped = function(ptfxHandle, p1) {};

/**
 * @param {string} effectName
 * @return {void}
 */
GameGraphicsMp.prototype.stopScreenEffect = function(effectName) {};

/**
 * @param {number} transitionTime
 * @return {boolean}
 */
GameGraphicsMp.prototype.transitionFromBlurred = function(transitionTime) {};

/**
 * @param {number} transitionTime
 * @return {boolean}
 */
GameGraphicsMp.prototype.transitionToBlurred = function(transitionTime) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @return {void}
 */
GameGraphicsMp.prototype.washDecalsInRange = function(p0, p1, p2, p3, p4) {};

/**
 * @param {number} worldX
 * @param {number} worldY
 * @param {number} worldZ
 * @return {{x: number, y: number}}
 */
GameGraphicsMp.prototype.world3dToScreen2d = function(worldX, worldY, worldZ) {};
/**
 * @record
 * @struct
 */
function GameInteriorMp() {}

/**
 * @param {!PickupMp} pickup
 * @param {string} roomName
 * @return {void}
 */
GameInteriorMp.prototype.addPickupToInteriorRoomByName = function(pickup, roomName) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
GameInteriorMp.prototype.areCoordsCollidingWithExterior = function(x, y, z) {};

/**
 * @param {number} interiorId
 * @param {boolean} toggle
 * @return {void}
 */
GameInteriorMp.prototype.capInterior = function(interiorId, toggle) {};

/**
 * @param {number} interiorId
 * @param {boolean} toggle
 * @return {void}
 */
GameInteriorMp.prototype.disableInterior = function(interiorId, toggle) {};

/**
 * @param {number} interiorId
 * @param {string} propName
 * @return {void}
 */
GameInteriorMp.prototype.disableInteriorProp = function(interiorId, propName) {};

/**
 * @param {number} interiorId
 * @param {string} propName
 * @return {void}
 */
GameInteriorMp.prototype.enableInteriorProp = function(interiorId, propName) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
GameInteriorMp.prototype.getInteriorAtCoords = function(x, y, z) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {string} interiorType
 * @return {number}
 */
GameInteriorMp.prototype.getInteriorAtCoordsWithType = function(x, y, z, interiorType) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
GameInteriorMp.prototype.getInteriorFromCollision = function(x, y, z) {};

/**
 * @param {number} interiorId
 * @return {number}
 */
GameInteriorMp.prototype.getInteriorGroupId = function(interiorId) {};

/**
 * @param {number} interiorId
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {function(new: (?), number, number, number): ?}
 */
GameInteriorMp.prototype.getOffsetFromInteriorInWorldCoords = function(interiorId, x, y, z) {};

/**
 * @param {number|string} mapObjectHash
 * @return {void}
 */
GameInteriorMp.prototype.hideMapObjectThisFrame = function(mapObjectHash) {};

/**
 * @param {number} interiorId
 * @return {boolean}
 */
GameInteriorMp.prototype.isInteriorCapped = function(interiorId) {};

/**
 * @param {number} interiorId
 * @return {boolean}
 */
GameInteriorMp.prototype.isInteriorDisabled = function(interiorId) {};

/**
 * @param {number} interiorId
 * @param {string} propName
 * @return {boolean}
 */
GameInteriorMp.prototype.isInteriorPropEnabled = function(interiorId, propName) {};

/**
 * @param {number} interiorId
 * @return {boolean}
 */
GameInteriorMp.prototype.isInteriorReady = function(interiorId) {};

/**
 * @param {number} interiorId
 * @return {boolean}
 */
GameInteriorMp.prototype.isValidInterior = function(interiorId) {};

/**
 * @param {number} interiorId
 * @return {void}
 */
GameInteriorMp.prototype.refreshInterior = function(interiorId) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} unk
 * @return {number}
 */
GameInteriorMp.prototype.unkGetInteriorAtCoords = function(x, y, z, unk) {};

/**
 * @param {number} interiorId
 * @return {void}
 */
GameInteriorMp.prototype.unpinInterior = function(interiorId) {};
/**
 * @record
 * @struct
 */
function GameItemsetMp() {}

/**
 * @param {number} itemset
 * @param {?} p1
 * @return {boolean}
 */
GameItemsetMp.prototype.addToItemset = function(itemset, p1) {};

/**
 * @param {number} itemset
 * @return {void}
 */
GameItemsetMp.prototype.cleanItemset = function(itemset) {};

/**
 * @param {boolean} p0
 * @return {number}
 */
GameItemsetMp.prototype.createItemset = function(p0) {};

/**
 * @param {number} itemset
 * @return {void}
 */
GameItemsetMp.prototype.destroyItemset = function(itemset) {};

/**
 * @param {number} itemset
 * @param {?} p1
 * @return {?}
 */
GameItemsetMp.prototype.getIndexedItemInItemset = function(itemset, p1) {};

/**
 * @param {number} itemset
 * @return {number}
 */
GameItemsetMp.prototype.getItemsetSize = function(itemset) {};

/**
 * @param {number} itemset
 * @param {?} p1
 * @return {boolean}
 */
GameItemsetMp.prototype.isInItemset = function(itemset, p1) {};

/**
 * @param {number} itemset
 * @return {boolean}
 */
GameItemsetMp.prototype.isItemsetValid = function(itemset) {};

/**
 * @param {number} itemset
 * @param {?} p1
 * @return {void}
 */
GameItemsetMp.prototype.removeFromItemset = function(itemset, p1) {};
/**
 * @record
 * @struct
 */
function GameMobileMp() {}

/**
 * @param {boolean} p0
 * @param {boolean} p1
 * @return {void}
 */
GameMobileMp.prototype.cellCamActivate = function(p0, p1) {};

/**
 * @param {number} phoneType
 * @return {void}
 */
GameMobileMp.prototype.createMobilePhone = function(phoneType) {};

/**
 * @param {function(new: (?), number, number, number): ?} position
 * @return {function(new: (?), number, number, number): ?}
 */
GameMobileMp.prototype.getMobilePhonePosition = function(position) {};

/**
 * @param {number} renderId
 * @return {number}
 */
GameMobileMp.prototype.getMobilePhoneRenderId = function(renderId) {};

/**
 * @param {function(new: (?), number, number, number): ?} rotation
 * @param {?} p1
 * @return {function(new: (?), number, number, number): ?}
 */
GameMobileMp.prototype.getMobilePhoneRotation = function(rotation, p1) {};

/**
 * @param {number} direction
 * @return {void}
 */
GameMobileMp.prototype.moveFinger = function(direction) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameMobileMp.prototype.scriptIsMovingMobilePhoneOffscreen = function(toggle) {};

/**
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @return {void}
 */
GameMobileMp.prototype.setMobilePhonePosition = function(posX, posY, posZ) {};

/**
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {?} p3
 * @return {void}
 */
GameMobileMp.prototype.setMobilePhoneRotation = function(rotX, rotY, rotZ, p3) {};

/**
 * @param {number} scale
 * @return {void}
 */
GameMobileMp.prototype.setMobilePhoneScale = function(scale) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameMobileMp.prototype.setPhoneLean = function(toggle) {};
/**
 * @record
 * @struct
 */
function GameObjectMp() {}

/**
 * @param {number} doorHash
 * @param {number} modelHash
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} p5
 * @param {number} p6
 * @param {number} p7
 * @return {void}
 */
GameObjectMp.prototype.addDoorToSystem = function(doorHash, modelHash, x, y, z, p5, p6, p7) {};

/**
 * @param {number} pickupHash
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} p4
 * @param {number} value
 * @param {number} modelHash
 * @param {boolean} p7
 * @param {boolean} p8
 * @return {!PickupMp}
 */
GameObjectMp.prototype.createAmbientPickup = function(pickupHash, posX, posY, posZ, p4, value, modelHash, p7, p8) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} value
 * @param {number} amount
 * @param {number} model
 * @return {void}
 */
GameObjectMp.prototype.createMoneyPickups = function(x, y, z, value, amount, model) {};

/**
 * @param {number} modelHash
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} networkHandle
 * @param {boolean} createHandle
 * @param {boolean} dynamic
 * @return {number}
 */
GameObjectMp.prototype.createObject = function(modelHash, x, y, z, networkHandle, createHandle, dynamic) {};

/**
 * @param {number} modelHash
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} networkHandle
 * @param {boolean} createHandle
 * @param {boolean} dynamic
 * @return {number}
 */
GameObjectMp.prototype.createObjectNoOffset = function(modelHash, x, y, z, networkHandle, createHandle, dynamic) {};

/**
 * @param {number} pickupHash
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} p4
 * @param {number} value
 * @param {boolean} p6
 * @param {number} modelHash
 * @return {!PickupMp}
 */
GameObjectMp.prototype.createPickup = function(pickupHash, posX, posY, posZ, p4, value, p6, modelHash) {};

/**
 * @param {number} pickupHash
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {number} flag
 * @param {number} amount
 * @param {?} p9
 * @param {boolean} p10
 * @param {number} modelHash
 * @return {!PickupMp}
 */
GameObjectMp.prototype.createPickupRotate = function(pickupHash, posX, posY, posZ, rotX, rotY, rotZ, flag, amount, p9, p10, modelHash) {};

/**
 * @param {number} pickupHash
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} placeOnGround
 * @param {number} modelHash
 * @return {!PickupMp}
 */
GameObjectMp.prototype.createPortablePickup = function(pickupHash, x, y, z, placeOnGround, modelHash) {};

/**
 * @param {number} pickupHash
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} placeOnGround
 * @param {number} modelHash
 * @return {!PickupMp}
 */
GameObjectMp.prototype.createPortablePickup2 = function(pickupHash, x, y, z, placeOnGround, modelHash) {};

/**
 * @param {number} object
 * @return {number}
 */
GameObjectMp.prototype.deleteObject = function(object) {};

/**
 * @param {number} doorHash
 * @return {boolean}
 */
GameObjectMp.prototype.doesDoorExist = function(doorHash) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {number} hash
 * @param {boolean} p5
 * @return {boolean}
 */
GameObjectMp.prototype.doesObjectOfTypeExistAtCoords = function(x, y, z, radius, hash, p5) {};

/**
 * @param {?} p0
 * @return {boolean}
 */
GameObjectMp.prototype.doesPickupExist = function(p0) {};

/**
 * @param {?} p0
 * @return {boolean}
 */
GameObjectMp.prototype.doesPickupObjectExist = function(p0) {};

/**
 * @param {number} doorHash
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} locked
 * @param {number} p5
 * @param {number} p6
 * @param {number} p7
 * @return {void}
 */
GameObjectMp.prototype.doorControl = function(doorHash, x, y, z, locked, p5, p6, p7) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {number} modelHash
 * @param {boolean} isMissing
 * @param {boolean} p6
 * @param {boolean} p7
 * @return {number}
 */
GameObjectMp.prototype.getClosestObjectOfType = function(x, y, z, radius, modelHash, isMissing, p6, p7) {};

/**
 * @param {?} p0
 * @param {boolean} p1
 * @return {number}
 */
GameObjectMp.prototype.getObjectFragmentDamageHealth = function(p0, p1) {};

/**
 * @param {number} xPos
 * @param {number} yPos
 * @param {number} zPos
 * @param {number} heading
 * @param {number} xOffset
 * @param {number} yOffset
 * @param {number} zOffset
 * @return {function(new: (?), number, number, number): ?}
 */
GameObjectMp.prototype.getObjectOffsetFromCoords = function(xPos, yPos, zPos, heading, xOffset, yOffset, zOffset) {};

/**
 * @param {?} p0
 * @return {number}
 */
GameObjectMp.prototype.getPickupCoords = function(p0) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {?} p3
 * @param {?} p4
 * @return {function(new: (?), number, number, number): ?}
 */
GameObjectMp.prototype.getSafePickupCoords = function(x, y, z, p3, p4) {};

/**
 * @param {number} type
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} locked
 * @param {number} heading
 * @return {{locked: boolean, heading: boolean}}
 */
GameObjectMp.prototype.getStateOfClosestDoorOfType = function(type, x, y, z, locked, heading) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} modelHash
 * @param {?} p5
 * @return {boolean}
 */
GameObjectMp.prototype.hasClosestObjectOfTypeBeenBroken = function(p0, p1, p2, p3, modelHash, p5) {};

/**
 * @param {?} p0
 * @return {boolean}
 */
GameObjectMp.prototype.hasPickupBeenCollected = function(p0) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} colorIndex
 * @return {void}
 */
GameObjectMp.prototype.highlightPlacementCoords = function(x, y, z, colorIndex) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} range
 * @param {boolean} p4
 * @return {boolean}
 */
GameObjectMp.prototype.isAnyObjectNearPoint = function(x, y, z, range, p4) {};

/**
 * @param {number} door
 * @return {boolean}
 */
GameObjectMp.prototype.isDoorClosed = function(door) {};

/**
 * @param {?} garage
 * @param {boolean} p1
 * @param {number} p2
 * @return {boolean}
 */
GameObjectMp.prototype.isGarageEmpty = function(garage, p1, p2) {};

/**
 * @param {number} objectHash
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} range
 * @return {boolean}
 */
GameObjectMp.prototype.isObjectNearPoint = function(objectHash, x, y, z, range) {};

/**
 * @param {number} pickupHash
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @return {boolean}
 */
GameObjectMp.prototype.isPickupWithinRadius = function(pickupHash, x, y, z, radius) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {number} p7
 * @param {number} p8
 * @param {number} p9
 * @param {boolean} p10
 * @param {boolean} p11
 * @return {boolean}
 */
GameObjectMp.prototype.isPointInAngledArea = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11) {};

/**
 * @param {?} p0
 * @return {void}
 */
GameObjectMp.prototype.removeAllPickupsOfType = function(p0) {};

/**
 * @param {number} doorHash
 * @return {void}
 */
GameObjectMp.prototype.removeDoorFromSystem = function(doorHash) {};

/**
 * @param {!PickupMp} pickup
 * @return {void}
 */
GameObjectMp.prototype.removePickup = function(pickup) {};

/**
 * @param {number} doorHash
 * @param {number} limit
 * @param {boolean} p2
 * @param {boolean} p3
 * @return {void}
 */
GameObjectMp.prototype.setDoorAccelerationLimit = function(doorHash, limit, p2, p3) {};

/**
 * @param {number} doorHash
 * @param {number} ajar
 * @param {boolean} p2
 * @param {boolean} p3
 * @return {void}
 */
GameObjectMp.prototype.setDoorAjarAngle = function(doorHash, ajar, p2, p3) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @return {void}
 */
GameObjectMp.prototype.setForceObjectThisFrame = function(p0, p1, p2, p3) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {void}
 */
GameObjectMp.prototype.setPickupRegenerationTime = function(p0, p1) {};

/**
 * @param {number} type
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} locked
 * @param {number} heading
 * @param {boolean} p6
 * @return {void}
 */
GameObjectMp.prototype.setStateOfClosestDoorOfType = function(type, x, y, z, locked, heading, p6) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @return {void}
 */
GameObjectMp.prototype.setTeamPickupObject = function(p0, p1, p2) {};

/**
 * @param {?} p0
 * @return {void}
 */
GameObjectMp.prototype.trackObjectVisibility = function(p0) {};
/**
 * @record
 * @struct
 */
function GamePathfindMp() {}

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {boolean} p7
 * @param {?} p8
 * @return {void}
 */
GamePathfindMp.prototype.addNavmeshBlockingObject = function(p0, p1, p2, p3, p4, p5, p6, p7, p8) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @return {void}
 */
GamePathfindMp.prototype.addNavmeshRequiredRegion = function(p0, p1, p2) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @return {number}
 */
GamePathfindMp.prototype.calculateTravelDistanceBetweenPoints = function(x1, y1, z1, x2, y2, z2) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @param {?} p5
 * @param {?} p6
 * @return {void}
 */
GamePathfindMp.prototype.disableNavmeshInArea = function(p0, p1, p2, p3, p4, p5, p6) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {?} p3
 * @param {number} p4
 * @param {number} vehicle
 * @param {number} p6
 * @return {{p4: number, vehicle: number, p6: number}}
 */
GamePathfindMp.prototype.generateDirectionsToCoord = function(x, y, z, p3, p4, vehicle, p6) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {function(new: (?), number, number, number): ?} outPosition
 * @param {number} unknown1
 * @param {number} unknown2
 * @return {function(new: (?), number, number, number): ?}
 */
GamePathfindMp.prototype.getClosestMajorVehicleNode = function(x, y, z, outPosition, unknown1, unknown2) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {number} p7
 * @param {number} p8
 * @param {number} p9
 * @param {boolean} p10
 * @return {boolean}
 */
GamePathfindMp.prototype.getClosestRoad = function(x, y, z, p3, p4, p5, p6, p7, p8, p9, p10) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {function(new: (?), number, number, number): ?} outPosition
 * @param {number} nodeType
 * @param {number} p5
 * @param {number} p6
 * @return {function(new: (?), number, number, number): ?}
 */
GamePathfindMp.prototype.getClosestVehicleNode = function(x, y, z, outPosition, nodeType, p5, p6) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {function(new: (?), number, number, number): ?} outPosition
 * @param {number} outHeading
 * @param {number} nodeType
 * @param {number} p6
 * @param {number} p7
 * @return {{outPosition: function(new: (?), number, number, number): ?, outHeading: number}}
 */
GamePathfindMp.prototype.getClosestVehicleNodeWithHeading = function(x, y, z, outPosition, outHeading, nodeType, p6, p7) {};

/**
 * @param {number} nodeID
 * @return {boolean}
 */
GamePathfindMp.prototype.getIsSlowRoadFlag = function(nodeID) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} nthClosest
 * @param {function(new: (?), number, number, number): ?} outPosition
 * @param {?} unknown1
 * @param {?} unknown2
 * @param {?} unknown3
 * @return {function(new: (?), number, number, number): ?}
 */
GamePathfindMp.prototype.getNthClosestVehicleNode = function(x, y, z, nthClosest, outPosition, unknown1, unknown2, unknown3) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} desiredX
 * @param {number} desiredY
 * @param {number} desiredZ
 * @param {number} nthClosest
 * @param {function(new: (?), number, number, number): ?} outPosition
 * @param {number} outHeading
 * @param {number} nodetype
 * @param {?} p10
 * @param {?} p11
 * @return {{outPosition: function(new: (?), number, number, number): ?, outHeading: number}}
 */
GamePathfindMp.prototype.getNthClosestVehicleNodeFavourDirection = function(x, y, z, desiredX, desiredY, desiredZ, nthClosest, outPosition, outHeading, nodetype, p10, p11) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} nth
 * @param {number} nodetype
 * @param {number} p5
 * @param {number} p6
 * @return {number}
 */
GamePathfindMp.prototype.getNthClosestVehicleNodeId = function(x, y, z, nth, nodetype, p5, p6) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} nthClosest
 * @param {function(new: (?), number, number, number): ?} outPosition
 * @param {number} outHeading
 * @param {?} p6
 * @param {number} p7
 * @param {number} p8
 * @return {function(new: (?), number, number, number): ?}
 */
GamePathfindMp.prototype.getNthClosestVehicleNodeIdWithHeading = function(x, y, z, nthClosest, outPosition, outHeading, p6, p7, p8) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} nthClosest
 * @param {function(new: (?), number, number, number): ?} outPosition
 * @param {number} heading
 * @param {?} unknown1
 * @param {number} unknown2
 * @param {number} unknown3
 * @param {number} unknown4
 * @return {{outPosition: function(new: (?), number, number, number): ?, heading: number, unknown1: ?}}
 */
GamePathfindMp.prototype.getNthClosestVehicleNodeWithHeading = function(x, y, z, nthClosest, outPosition, heading, unknown1, unknown2, unknown3, unknown4) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {boolean} p4
 * @param {boolean} p5
 * @param {boolean} p6
 * @param {function(new: (?), number, number, number): ?} outPosition
 * @param {number} heading
 * @return {{outPosition: function(new: (?), number, number, number): ?, outHeading: number}}
 */
GamePathfindMp.prototype.getRandomVehicleNode = function(x, y, z, radius, p4, p5, p6, outPosition, heading) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} onGround
 * @param {function(new: (?), number, number, number): ?} outPosition
 * @param {number} flags
 * @return {function(new: (?), number, number, number): ?}
 */
GamePathfindMp.prototype.getSafeCoordForPed = function(x, y, z, onGround, outPosition, flags) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} streetName
 * @param {number} crossingRoad
 * @return {{streetName: number, crossingRoad: number}}
 */
GamePathfindMp.prototype.getStreetNameAtCoord = function(x, y, z, streetName, crossingRoad) {};

/**
 * @param {number} nodeID
 * @return {boolean}
 */
GamePathfindMp.prototype.getSupportsGpsRouteFlag = function(nodeID) {};

/**
 * @param {number} nodeId
 * @param {function(new: (?), number, number, number): ?} outPosition
 * @return {function(new: (?), number, number, number): ?}
 */
GamePathfindMp.prototype.getVehicleNodePosition = function(nodeId, outPosition) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} density
 * @param {number} flags
 * @return {{density: number, flags: number}}
 */
GamePathfindMp.prototype.getVehicleNodeProperties = function(x, y, z, density, flags) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @return {boolean}
 */
GamePathfindMp.prototype.isNavmeshLoadedInArea = function(x1, y1, z1, x2, y2, z2) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} vehicle
 * @return {boolean}
 */
GamePathfindMp.prototype.isPointOnRoad = function(x, y, z, vehicle) {};

/**
 * @param {number} vehicleNodeId
 * @return {boolean}
 */
GamePathfindMp.prototype.isVehicleNodeIdValid = function(vehicleNodeId) {};

/**
 * @param {boolean} keepInMemory
 * @return {boolean}
 */
GamePathfindMp.prototype.loadAllPathNodes = function(keepInMemory) {};

/**
 * @param {?} p0
 * @return {void}
 */
GamePathfindMp.prototype.removeNavmeshBlockingObject = function(p0) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @param {?} p5
 * @return {void}
 */
GamePathfindMp.prototype.setGpsDisabledZone = function(p0, p1, p2, p3, p4, p5) {};

/**
 * @param {boolean} ignore
 * @return {void}
 */
GamePathfindMp.prototype.setIgnoreNoGpsFlag = function(ignore) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @param {?} p5
 * @return {void}
 */
GamePathfindMp.prototype.setPedPathsBackToOriginal = function(p0, p1, p2, p3, p4, p5) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {boolean} unknown
 * @return {void}
 */
GamePathfindMp.prototype.setPedPathsInArea = function(x1, y1, z1, x2, y2, z2, unknown) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @param {?} p5
 * @return {void}
 */
GamePathfindMp.prototype.setRoadsBackToOriginal = function(p0, p1, p2, p3, p4, p5) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {number} p6
 * @return {void}
 */
GamePathfindMp.prototype.setRoadsBackToOriginalInAngledArea = function(x1, y1, z1, x2, y2, z2, p6) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {number} angle
 * @param {boolean} unknown1
 * @param {boolean} unknown2
 * @param {boolean} unknown3
 * @return {void}
 */
GamePathfindMp.prototype.setRoadsInAngledArea = function(x1, y1, z1, x2, y2, z2, angle, unknown1, unknown2, unknown3) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {boolean} unknown1
 * @param {boolean} unknown2
 * @return {void}
 */
GamePathfindMp.prototype.setRoadsInArea = function(x1, y1, z1, x2, y2, z2, unknown1, unknown2) {};

/**
 * @param {?} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {number} p7
 * @param {?} p8
 * @return {void}
 */
GamePathfindMp.prototype.updateNavmeshBlockingObject = function(p0, p1, p2, p3, p4, p5, p6, p7, p8) {};
/**
 * @record
 * @struct
 */
function GamePedMp() {}

/**
 * @param {string} name
 * @param {number} groupHash
 * @return {number}
 */
GamePedMp.prototype.addRelationshipGroup = function(name, groupHash) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {boolean} p6
 * @param {boolean} p7
 * @param {boolean} p8
 * @param {boolean} p9
 * @return {void}
 */
GamePedMp.prototype.addScenarioBlockingArea = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {};

/**
 * @param {number} sceneId
 * @param {number} entity
 * @param {number} boneIndexId
 * @return {void}
 */
GamePedMp.prototype.attachSynchronizedSceneToEntity = function(sceneId, entity, boneIndexId) {};

/**
 * @param {boolean} unk
 * @return {boolean}
 */
GamePedMp.prototype.canCreateRandomPed = function(unk) {};

/**
 * @param {?} p0
 * @param {number} p1
 * @return {void}
 */
GamePedMp.prototype.clearPedAlternateWalkAnim = function(p0, p1) {};

/**
 * @param {number} relationship
 * @param {number} group1
 * @param {number} group2
 * @return {void}
 */
GamePedMp.prototype.clearRelationshipBetweenGroups = function(relationship, group1, group2) {};

/**
 * @param {number} unused
 * @return {number}
 */
GamePedMp.prototype.createGroup = function(unused) {};

/**
 * @param {boolean} startImmediately
 * @param {number} messageId
 * @return {void}
 */
GamePedMp.prototype.createNmMessage = function(startImmediately, messageId) {};

/**
 * @param {number} pedType
 * @param {number} modelHash
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} heading
 * @param {boolean} networkHandle
 * @param {boolean} pedHandle
 * @return {number}
 */
GamePedMp.prototype.createPed = function(pedType, modelHash, x, y, z, heading, networkHandle, pedHandle) {};

/**
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @return {number}
 */
GamePedMp.prototype.createRandomPed = function(posX, posY, posZ) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} roll
 * @param {number} pitch
 * @param {number} yaw
 * @param {number} p6
 * @return {number}
 */
GamePedMp.prototype.createSynchronizedScene = function(x, y, z, roll, pitch, yaw, p6) {};

/**
 * @param {number} sceneId
 * @return {void}
 */
GamePedMp.prototype.detachSynchronizedScene = function(sceneId) {};

/**
 * @param {number} scene
 * @return {void}
 */
GamePedMp.prototype.disposeSynchronizedScene = function(scene) {};

/**
 * @param {number} groupId
 * @return {boolean}
 */
GamePedMp.prototype.doesGroupExist = function(groupId) {};

/**
 * @param {string} animDict
 * @param {string} animName
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} xRot
 * @param {number} yRot
 * @param {number} zRot
 * @param {number} p8
 * @param {number} p9
 * @return {function(new: (?), number, number, number): ?}
 */
GamePedMp.prototype.getAnimInitialOffsetPosition = function(animDict, animName, x, y, z, xRot, yRot, zRot, p8, p9) {};

/**
 * @param {string} animDict
 * @param {string} animName
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} xRot
 * @param {number} yRot
 * @param {number} zRot
 * @param {number} p8
 * @param {number} p9
 * @return {function(new: (?), number, number, number): ?}
 */
GamePedMp.prototype.getAnimInitialOffsetRotation = function(animDict, animName, x, y, z, xRot, yRot, zRot, p8, p9) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {boolean} p4
 * @param {boolean} p5
 * @param {number} outPed
 * @param {boolean} p7
 * @param {boolean} p8
 * @param {number} pedType
 * @return {number}
 */
GamePedMp.prototype.getClosestPed = function(x, y, z, radius, p4, p5, outPed, p7, p8, pedType) {};

/**
 * @param {number} type
 * @return {number}
 */
GamePedMp.prototype.getFirstParentIdForPedType = function(type) {};

/**
 * @param {number} groupId
 * @param {?} unknown
 * @param {number} sizeInMembers
 * @return {number}
 */
GamePedMp.prototype.getGroupSize = function(groupId, unknown, sizeInMembers) {};

/**
 * @param {number} overlayId
 * @return {number}
 */
GamePedMp.prototype.getNumHeadOverlayValues = function(overlayId) {};

/**
 * @param {number} type
 * @return {number}
 */
GamePedMp.prototype.getNumParentPedsOfType = function(type) {};

/**
 * @param {number} handle
 * @return {string}
 */
GamePedMp.prototype.getPeadheadshotTxdString = function(handle) {};

/**
 * @param {number} groupId
 * @return {number}
 */
GamePedMp.prototype.getPedAsGroupLeader = function(groupId) {};

/**
 * @param {number} groupId
 * @param {number} memberNumber
 * @return {number}
 */
GamePedMp.prototype.getPedAsGroupMember = function(groupId, memberNumber) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} xRadius
 * @param {number} yRadius
 * @param {number} zRadius
 * @param {number} pedType
 * @return {number}
 */
GamePedMp.prototype.getRandomPedAtCoord = function(x, y, z, xRadius, yRadius, zRadius, pedType) {};

/**
 * @param {number} group1
 * @param {number} group2
 * @return {number}
 */
GamePedMp.prototype.getRelationshipBetweenGroups = function(group1, group2) {};

/**
 * @param {number} sceneId
 * @return {number}
 */
GamePedMp.prototype.getSynchronizedScenePhase = function(sceneId) {};

/**
 * @param {number} sceneId
 * @return {number}
 */
GamePedMp.prototype.getSynchronizedSceneRate = function(sceneId) {};

/**
 * @param {number} collection
 * @param {number} overlay
 * @return {number}
 */
GamePedMp.prototype.getTattooZone = function(collection, overlay) {};

/**
 * @param {string} asset
 * @return {boolean}
 */
GamePedMp.prototype.hasActionModeAssetLoaded = function(asset) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {boolean}
 */
GamePedMp.prototype.hasPedReceivedEvent = function(p0, p1) {};

/**
 * @param {string} asset
 * @return {boolean}
 */
GamePedMp.prototype.hasStealthModeAssetLoaded = function(asset) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @return {boolean}
 */
GamePedMp.prototype.isAnyPedNearPoint = function(x, y, z, radius) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {boolean} p6
 * @param {boolean} p7
 * @return {boolean}
 */
GamePedMp.prototype.isAnyPedShootingInArea = function(x1, y1, z1, x2, y2, z2, p6, p7) {};

/**
 * @param {number} colorId
 * @return {boolean}
 */
GamePedMp.prototype.isAValidBlushColor = function(colorId) {};

/**
 * @param {number} colorId
 * @return {boolean}
 */
GamePedMp.prototype.isAValidHairColor = function(colorId) {};

/**
 * @param {number} colorId
 * @return {boolean}
 */
GamePedMp.prototype.isAValidLipstickColor = function(colorId) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @return {boolean}
 */
GamePedMp.prototype.isCopPedInArea3d = function(x1, y1, z1, x2, y2, z2) {};

/**
 * @param {number} handle
 * @return {boolean}
 */
GamePedMp.prototype.isPedheadshotReady = function(handle) {};

/**
 * @param {number} handle
 * @return {number}
 */
GamePedMp.prototype.isPedheadshotValid = function(handle) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {boolean}
 */
GamePedMp.prototype.isPedRespondingToEvent = function(p0, p1) {};

/**
 * @param {number} sceneId
 * @return {boolean}
 */
GamePedMp.prototype.isSynchronizedSceneLooped = function(sceneId) {};

/**
 * @param {number} sceneId
 * @return {boolean}
 */
GamePedMp.prototype.isSynchronizedSceneRunning = function(sceneId) {};

/**
 * @param {string} asset
 * @return {void}
 */
GamePedMp.prototype.removeActionModeAsset = function(asset) {};

/**
 * @param {number} groupId
 * @return {void}
 */
GamePedMp.prototype.removeGroup = function(groupId) {};

/**
 * @param {number} groupHash
 * @return {void}
 */
GamePedMp.prototype.removeRelationshipGroup = function(groupHash) {};

/**
 * @param {?} p0
 * @param {boolean} p1
 * @return {void}
 */
GamePedMp.prototype.removeScenarioBlockingArea = function(p0, p1) {};

/**
 * @param {string} asset
 * @return {void}
 */
GamePedMp.prototype.removeStealthModeAsset = function(asset) {};

/**
 * @param {string} asset
 * @return {void}
 */
GamePedMp.prototype.requestActionModeAsset = function(asset) {};

/**
 * @param {string} asset
 * @return {void}
 */
GamePedMp.prototype.requestStealthModeAsset = function(asset) {};

/**
 * @param {number} groupHandle
 * @return {void}
 */
GamePedMp.prototype.resetGroupFormationDefaultSpacing = function(groupHandle) {};

/**
 * @param {number} modifier
 * @return {void}
 */
GamePedMp.prototype.setAiMeleeWeaponDamageModifier = function(modifier) {};

/**
 * @param {number} value
 * @return {void}
 */
GamePedMp.prototype.setAiWeaponDamageModifier = function(value) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GamePedMp.prototype.setCreateRandomCops = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GamePedMp.prototype.setCreateRandomCopsNotOnScenarios = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GamePedMp.prototype.setCreateRandomCopsOnScenarios = function(toggle) {};

/**
 * @param {number} groupId
 * @param {number} formationType
 * @return {void}
 */
GamePedMp.prototype.setGroupFormation = function(groupId, formationType) {};

/**
 * @param {number} groupId
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @return {void}
 */
GamePedMp.prototype.setGroupFormationSpacing = function(groupId, p1, p2, p3) {};

/**
 * @param {number} groundHandle
 * @param {number} separationRange
 * @return {void}
 */
GamePedMp.prototype.setGroupSeparationRange = function(groundHandle, separationRange) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {number} p3
 * @param {boolean} p4
 * @return {void}
 */
GamePedMp.prototype.setPedAlternateWalkAnim = function(p0, p1, p2, p3, p4) {};

/**
 * @param {number} multiplier
 * @return {void}
 */
GamePedMp.prototype.setPedDensityMultiplierThisFrame = function(multiplier) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @return {void}
 */
GamePedMp.prototype.setPedNonCreationArea = function(x1, y1, z1, x2, y2, z2) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {void}
 */
GamePedMp.prototype.setPedReserveParachuteTintIndex = function(p0, p1) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @param {?} p5
 * @param {?} p6
 * @param {?} p7
 * @param {?} p8
 * @param {?} p9
 * @param {?} p10
 * @param {?} p11
 * @param {?} p12
 * @param {?} p13
 * @return {boolean}
 */
GamePedMp.prototype.setPedToRagdollWithFall = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13) {};

/**
 * @param {number} relationship
 * @param {number} group1
 * @param {number} group2
 * @return {void}
 */
GamePedMp.prototype.setRelationshipBetweenGroups = function(relationship, group1, group2) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @return {void}
 */
GamePedMp.prototype.setScenarioPedDensityMultiplierThisFrame = function(p0, p1) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @return {void}
 */
GamePedMp.prototype.setScenarioPedsSpawnInSphereArea = function(p0, p1, p2, p3, p4) {};

/**
 * @param {boolean} value
 * @return {void}
 */
GamePedMp.prototype.setScenarioPedsToBeReturnedByNextCommand = function(value) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
GamePedMp.prototype.setScriptedConversionCoordThisFrame = function(x, y, z) {};

/**
 * @param {number} sceneId
 * @param {boolean} toggle
 * @return {void}
 */
GamePedMp.prototype.setSynchronizedSceneLooped = function(sceneId, toggle) {};

/**
 * @param {number} sceneId
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} roll
 * @param {number} pitch
 * @param {number} yaw
 * @param {boolean} p7
 * @return {void}
 */
GamePedMp.prototype.setSynchronizedSceneOrigin = function(sceneId, x, y, z, roll, pitch, yaw, p7) {};

/**
 * @param {number} sceneId
 * @param {number} phase
 * @return {void}
 */
GamePedMp.prototype.setSynchronizedScenePhase = function(sceneId, phase) {};

/**
 * @param {number} sceneId
 * @param {number} rate
 * @return {void}
 */
GamePedMp.prototype.setSynchronizedSceneRate = function(sceneId, rate) {};

/**
 * @param {?} p0
 * @param {boolean} p1
 * @return {void}
 */
GamePedMp.prototype.setTimeExclusiveDisplayTexture = function(p0, p1) {};
/**
 * @record
 * @struct
 */
function GamePlayerMp() {}

/**
 * @return {boolean}
 */
GamePlayerMp.prototype.arePlayerFlashingStarsAboutToDrop = function() {};

/**
 * @return {boolean}
 */
GamePlayerMp.prototype.arePlayerStarsGreyedOut = function() {};

/**
 * @return {boolean}
 */
GamePlayerMp.prototype.canPlayerStartMission = function() {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GamePlayerMp.prototype.disablePlayerFiring = function(toggle) {};

/**
 * @return {void}
 */
GamePlayerMp.prototype.disablePlayerVehicleRewards = function() {};

/**
 * @param {boolean} unk
 * @return {void}
 */
GamePlayerMp.prototype.displaySystemSigninUi = function(unk) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GamePlayerMp.prototype.enableSpecialAbility = function(toggle) {};

/**
 * @param {number} cleanupFlags
 * @return {void}
 */
GamePlayerMp.prototype.forceCleanup = function(cleanupFlags) {};

/**
 * @param {string} name
 * @param {number} cleanupFlags
 * @return {void}
 */
GamePlayerMp.prototype.forceCleanupForAllThreadsWithThisName = function(name, cleanupFlags) {};

/**
 * @param {number} id
 * @param {number} cleanupFlags
 * @return {void}
 */
GamePlayerMp.prototype.forceCleanupForThreadWithThisId = function(id, cleanupFlags) {};

/**
 * @param {number} entity
 * @return {boolean}
 */
GamePlayerMp.prototype.getEntityPlayerIsFreeAimingAt = function(entity) {};

/**
 * @param {number} entity
 * @return {boolean}
 */
GamePlayerMp.prototype.getPlayerTargetEntity = function(entity) {};

/**
 * @return {number}
 */
GamePlayerMp.prototype.getTimeSincePlayerDroveAgainstTraffic = function() {};

/**
 * @return {number}
 */
GamePlayerMp.prototype.getTimeSincePlayerDroveOnPavement = function() {};

/**
 * @return {number}
 */
GamePlayerMp.prototype.getTimeSincePlayerHitPed = function() {};

/**
 * @return {number}
 */
GamePlayerMp.prototype.getTimeSincePlayerHitVehicle = function() {};

/**
 * @return {boolean}
 */
GamePlayerMp.prototype.getWantedLevelRadius = function() {};

/**
 * @param {number} wantedLevel
 * @return {number}
 */
GamePlayerMp.prototype.getWantedLevelThreshold = function(wantedLevel) {};

/**
 * @param {number} achievement
 * @return {boolean}
 */
GamePlayerMp.prototype.giveAchievementToPlayer = function(achievement) {};

/**
 * @param {number} achievement
 * @return {boolean}
 */
GamePlayerMp.prototype.hasAchievementBeenPassed = function(achievement) {};

/**
 * @param {number} cleanupFlags
 * @return {boolean}
 */
GamePlayerMp.prototype.hasForceCleanupOccurred = function(cleanupFlags) {};

/**
 * @param {number} value
 * @return {number}
 */
GamePlayerMp.prototype.intToParticipantindex = function(value) {};

/**
 * @param {number} value
 * @return {number}
 */
GamePlayerMp.prototype.intToPlayerindex = function(value) {};

/**
 * @param {number} entity
 * @return {boolean}
 */
GamePlayerMp.prototype.isPlayerFreeAimingAtEntity = function(entity) {};

/**
 * @param {number} entity
 * @return {boolean}
 */
GamePlayerMp.prototype.isPlayerTargettingEntity = function(entity) {};

/**
 * @return {boolean}
 */
GamePlayerMp.prototype.isSpecialAbilityActive = function() {};

/**
 * @return {boolean}
 */
GamePlayerMp.prototype.isSpecialAbilityEnabled = function() {};

/**
 * @return {boolean}
 */
GamePlayerMp.prototype.isSpecialAbilityMeterFull = function() {};

/**
 * @param {number} playerModel
 * @return {boolean}
 */
GamePlayerMp.prototype.isSpecialAbilityUnlocked = function(playerModel) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {number} p7
 * @return {void}
 */
GamePlayerMp.prototype.playerAttachVirtualBound = function(p0, p1, p2, p3, p4, p5, p6, p7) {};

/**
 * @param {number} crimeType
 * @param {number} wantedLvlThresh
 * @return {void}
 */
GamePlayerMp.prototype.reportCrime = function(crimeType, wantedLvlThresh) {};

/**
 * @param {number} p1
 * @return {void}
 */
GamePlayerMp.prototype.reserveEntityExplodesOnHighExplosionCombo = function(p1) {};

/**
 * @return {void}
 */
GamePlayerMp.prototype.resetWantedLevelDifficulty = function() {};

/**
 * @param {number} p1
 * @return {void}
 */
GamePlayerMp.prototype.restorePlayerStamina = function(p1) {};

/**
 * @param {number} multiplier
 * @return {void}
 */
GamePlayerMp.prototype.setAirDragMultiplierForPlayersVehicle = function(multiplier) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GamePlayerMp.prototype.setAllRandomPedsFlee = function(toggle) {};

/**
 * @return {void}
 */
GamePlayerMp.prototype.setAllRandomPedsFleeThisFrame = function() {};

/**
 * @return {void}
 */
GamePlayerMp.prototype.setAreasGeneratorOrientation = function() {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GamePlayerMp.prototype.setAutoGiveParachuteWhenEnterPlane = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GamePlayerMp.prototype.setDisableAmbientMeleeMove = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GamePlayerMp.prototype.setDispatchCopsForPlayer = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GamePlayerMp.prototype.setHudAnimStopLevel = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GamePlayerMp.prototype.setIgnoreLowPriorityShockingEvents = function(toggle) {};

/**
 * @param {number} maxWantedLevel
 * @return {void}
 */
GamePlayerMp.prototype.setMaxWantedLevel = function(maxWantedLevel) {};

/**
 * @param {number} modifier
 * @return {void}
 */
GamePlayerMp.prototype.setMeleeWeaponDefenseModifier = function(modifier) {};

/**
 * @param {number} value
 * @return {void}
 */
GamePlayerMp.prototype.setPlayerClothLockCounter = function(value) {};

/**
 * @param {number} index
 * @return {void}
 */
GamePlayerMp.prototype.setPlayerClothPackageIndex = function(index) {};

/**
 * @param {number} targetMode
 * @return {void}
 */
GamePlayerMp.prototype.setPlayerTargetingMode = function(targetMode) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GamePlayerMp.prototype.setPoliceRadarBlips = function(toggle) {};

/**
 * @param {number} multiplier
 * @return {void}
 */
GamePlayerMp.prototype.setRunSprintMultiplierForPlayer = function(multiplier) {};

/**
 * @param {number} multiplier
 * @return {void}
 */
GamePlayerMp.prototype.setSpecialAbilityMultiplier = function(multiplier) {};

/**
 * @param {number} multiplier
 * @return {void}
 */
GamePlayerMp.prototype.setSwimMultiplierForPlayer = function(multiplier) {};

/**
 * @param {number} difficulty
 * @return {void}
 */
GamePlayerMp.prototype.setWantedLevelDifficulty = function(difficulty) {};

/**
 * @param {number} multiplier
 * @return {void}
 */
GamePlayerMp.prototype.setWantedLevelMultiplier = function(multiplier) {};

/**
 * @param {number} amount
 * @param {number} gaitType
 * @param {number} speed
 * @param {boolean} p4
 * @param {boolean} p5
 * @return {void}
 */
GamePlayerMp.prototype.simulatePlayerInputGait = function(amount, gaitType, speed, p4, p5) {};

/**
 * @param {number} p1
 * @param {boolean} p2
 * @return {void}
 */
GamePlayerMp.prototype.specialAbilityChargeAbsolute = function(p1, p2) {};

/**
 * @param {boolean} p1
 * @return {void}
 */
GamePlayerMp.prototype.specialAbilityChargeContinuous = function(p1) {};

/**
 * @param {boolean} p1
 * @param {boolean} p2
 * @return {void}
 */
GamePlayerMp.prototype.specialAbilityChargeLarge = function(p1, p2) {};

/**
 * @param {boolean} p1
 * @param {boolean} p2
 * @return {void}
 */
GamePlayerMp.prototype.specialAbilityChargeMedium = function(p1, p2) {};

/**
 * @param {number} normalizedValue
 * @param {boolean} p2
 * @return {void}
 */
GamePlayerMp.prototype.specialAbilityChargeNormalized = function(normalizedValue, p2) {};

/**
 * @param {boolean} p1
 * @param {boolean} p2
 * @return {void}
 */
GamePlayerMp.prototype.specialAbilityChargeSmall = function(p1, p2) {};

/**
 * @return {void}
 */
GamePlayerMp.prototype.specialAbilityDeactivate = function() {};

/**
 * @return {void}
 */
GamePlayerMp.prototype.specialAbilityDeactivateFast = function() {};

/**
 * @param {boolean} p1
 * @return {void}
 */
GamePlayerMp.prototype.specialAbilityDepleteMeter = function(p1) {};

/**
 * @param {boolean} p1
 * @return {void}
 */
GamePlayerMp.prototype.specialAbilityFillMeter = function(p1) {};

/**
 * @param {number} playerModel
 * @return {void}
 */
GamePlayerMp.prototype.specialAbilityLock = function(playerModel) {};

/**
 * @return {void}
 */
GamePlayerMp.prototype.specialAbilityReset = function() {};

/**
 * @param {number} playerModel
 * @return {void}
 */
GamePlayerMp.prototype.specialAbilityUnlock = function(playerModel) {};

/**
 * @param {number} duration
 * @return {void}
 */
GamePlayerMp.prototype.startFiringAmnesty = function(duration) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} heading
 * @param {boolean} p5
 * @param {boolean} p6
 * @param {boolean} p7
 * @return {void}
 */
GamePlayerMp.prototype.startPlayerTeleport = function(x, y, z, heading, p5, p6, p7) {};
/**
 * @record
 * @struct
 */
function GameRecorderMp() {}

/**
 * @return {boolean}
 */
GameRecorderMp.prototype.isRecording = function() {};

/**
 * @param {number} mode
 * @return {void}
 */
GameRecorderMp.prototype.start = function(mode) {};

/**
 * @param {boolean} save
 * @return {void}
 */
GameRecorderMp.prototype.stop = function(save) {};
/**
 * @record
 * @struct
 */
function GameRopeMp() {}

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {number} length
 * @param {number} ropeType
 * @param {number} maxLength
 * @param {number} minLength
 * @param {number} p10
 * @param {boolean} p11
 * @param {boolean} p12
 * @param {boolean} rigid
 * @param {number} p14
 * @param {boolean} breakWhenShot
 * @param {?} unkPtr
 * @return {number}
 */
GameRopeMp.prototype.addRope = function(x, y, z, rotX, rotY, rotZ, length, ropeType, maxLength, minLength, p10, p11, p12, rigid, p14, breakWhenShot, unkPtr) {};

/**
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} vecX
 * @param {number} vecY
 * @param {number} vecZ
 * @param {number} impulse
 * @return {void}
 */
GameRopeMp.prototype.applyImpulseToCloth = function(posX, posY, posZ, vecX, vecY, vecZ, impulse) {};

/**
 * @param {number} rope
 * @param {number} ent1
 * @param {number} ent2
 * @param {number} ent1_x
 * @param {number} ent1_y
 * @param {number} ent1_z
 * @param {number} ent2_x
 * @param {number} ent2_y
 * @param {number} ent2_z
 * @param {number} length
 * @param {boolean} p10
 * @param {boolean} p11
 * @param {?} p12
 * @param {?} p13
 * @return {void}
 */
GameRopeMp.prototype.attachEntitiesToRope = function(rope, ent1, ent2, ent1_x, ent1_y, ent1_z, ent2_x, ent2_y, ent2_z, length, p10, p11, p12, p13) {};

/**
 * @param {number} rope
 * @param {number} entity
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} p5
 * @return {void}
 */
GameRopeMp.prototype.attachRopeToEntity = function(rope, entity, x, y, z, p5) {};

/**
 * @param {?} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {number} p7
 * @param {number} p8
 * @param {?} p9
 * @param {boolean} p10
 * @return {void}
 */
GameRopeMp.prototype.breakEntityGlass = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) {};

/**
 * @param {number} rope
 * @return {?}
 */
GameRopeMp.prototype.deleteChildRope = function(rope) {};

/**
 * @param {number} rope
 * @return {void}
 */
GameRopeMp.prototype.deleteRope = function(rope) {};

/**
 * @param {number} rope
 * @param {number} entity
 * @return {void}
 */
GameRopeMp.prototype.detachRopeFromEntity = function(rope, entity) {};

/**
 * @param {number} rope
 * @return {number}
 */
GameRopeMp.prototype.doesRopeExist = function(rope) {};

/**
 * @param {number} rope
 * @return {function(new: (?), number, number, number): ?}
 */
GameRopeMp.prototype.getCgoffset = function(rope) {};

/**
 * @param {number} rope
 * @return {void}
 */
GameRopeMp.prototype.getRopeLastVertexCoord = function(rope) {};

/**
 * @param {number} rope
 * @return {number}
 */
GameRopeMp.prototype.getRopeLength = function(rope) {};

/**
 * @param {number} rope
 * @param {number} vertex
 * @return {?}
 */
GameRopeMp.prototype.getRopeVertexCoord = function(rope, vertex) {};

/**
 * @param {number} rope
 * @return {number}
 */
GameRopeMp.prototype.getRopeVertexCount = function(rope) {};

/**
 * @param {number} rope
 * @param {string} rope_preset
 * @return {?}
 */
GameRopeMp.prototype.loadRopeData = function(rope, rope_preset) {};

/**
 * @param {number} rope
 * @param {number} vertex
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
GameRopeMp.prototype.pinRopeVertex = function(rope, vertex, x, y, z) {};

/**
 * @param {number} rope
 * @return {void}
 */
GameRopeMp.prototype.ropeConvertToSimple = function(rope) {};

/**
 * @param {number} rope
 * @param {boolean} toggle
 * @return {number}
 */
GameRopeMp.prototype.ropeDrawShadowEnabled = function(rope, toggle) {};

/**
 * @param {number} rope
 * @param {number} length
 * @return {?}
 */
GameRopeMp.prototype.ropeForceLength = function(rope, length) {};

/**
 * @param {number} rope
 * @param {boolean} length
 * @return {?}
 */
GameRopeMp.prototype.ropeResetLength = function(rope, length) {};

/**
 * @param {number} rope
 * @return {void}
 */
GameRopeMp.prototype.ropeSetUpdatePinverts = function(rope) {};

/**
 * @param {number} rope
 * @return {void}
 */
GameRopeMp.prototype.setCgAtBoundcenter = function(rope) {};

/**
 * @param {number} rope
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
GameRopeMp.prototype.setCgoffset = function(rope, x, y, z) {};

/**
 * @param {number} rope
 * @param {number} vertex
 * @param {number} value
 * @return {void}
 */
GameRopeMp.prototype.setDamping = function(rope, vertex, value) {};

/**
 * @param {number} rope
 * @param {boolean} enabled
 * @return {void}
 */
GameRopeMp.prototype.setDisableBreaking = function(rope, enabled) {};

/**
 * @param {number} object
 * @param {boolean} toggle
 * @return {void}
 */
GameRopeMp.prototype.setDisableFragDamage = function(object, toggle) {};

/**
 * @param {number} rope
 * @return {void}
 */
GameRopeMp.prototype.startRopeUnwindingFront = function(rope) {};

/**
 * @param {number} rope
 * @return {void}
 */
GameRopeMp.prototype.startRopeWinding = function(rope) {};

/**
 * @param {number} rope
 * @return {void}
 */
GameRopeMp.prototype.stopRopeUnwindingFront = function(rope) {};

/**
 * @param {number} rope
 * @return {void}
 */
GameRopeMp.prototype.stopRopeWinding = function(rope) {};

/**
 * @param {number} rope
 * @param {number} vertex
 * @return {?}
 */
GameRopeMp.prototype.unpinRopeVertex = function(rope, vertex) {};
/**
 * @record
 * @struct
 */
function GameScriptMp() {}

/**
 * @param {string} scriptName
 * @return {boolean}
 */
GameScriptMp.prototype.doesScriptExist = function(scriptName) {};

/**
 * @param {number} p0
 * @param {number} eventIndex
 * @return {number}
 */
GameScriptMp.prototype.getEventAtIndex = function(p0, eventIndex) {};

/**
 * @param {number} p0
 * @param {number} eventIndex
 * @param {number} eventData
 * @param {number} p3
 * @return {number}
 */
GameScriptMp.prototype.getEventdata = function(p0, eventIndex, eventData, p3) {};

/**
 * @param {number} p0
 * @param {number} eventIndex
 * @return {boolean}
 */
GameScriptMp.prototype.getEventExists = function(p0, eventIndex) {};

/**
 * @param {number} p0
 * @return {number}
 */
GameScriptMp.prototype.getNumberOfEvents = function(p0) {};

/**
 * @param {number} scriptHash
 * @return {number}
 */
GameScriptMp.prototype.getNumberOfInstancesOfStreamedScript = function(scriptHash) {};

/**
 * @param {number} threadId
 * @return {string}
 */
GameScriptMp.prototype.getThreadName = function(threadId) {};

/**
 * @param {string} scriptName
 * @return {boolean}
 */
GameScriptMp.prototype.hasScriptLoaded = function(scriptName) {};

/**
 * @param {number} scriptHash
 * @return {boolean}
 */
GameScriptMp.prototype.hasStreamedScriptLoaded = function(scriptHash) {};

/**
 * @param {number} scriptHash
 * @return {boolean}
 */
GameScriptMp.prototype.isStreamedScriptRunning = function(scriptHash) {};

/**
 * @param {number} threadId
 * @return {boolean}
 */
GameScriptMp.prototype.isThreadActive = function(threadId) {};

/**
 * @param {string} scriptName
 * @return {void}
 */
GameScriptMp.prototype.requestScript = function(scriptName) {};

/**
 * @param {number} scriptHash
 * @return {void}
 */
GameScriptMp.prototype.requestStreamedScript = function(scriptHash) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameScriptMp.prototype.setNoLoadingScreen = function(toggle) {};

/**
 * @param {string} scriptName
 * @return {void}
 */
GameScriptMp.prototype.setScriptAsNoLongerNeeded = function(scriptName) {};

/**
 * @param {number} scriptHash
 * @return {void}
 */
GameScriptMp.prototype.setStreamedScriptAsNoLongerNeeded = function(scriptHash) {};

/**
 * @param {number} threadId
 * @return {void}
 */
GameScriptMp.prototype.terminateThread = function(threadId) {};

/**
 * @param {number} p0
 * @param {function(new: (?), number, number, number): ?} argsStruct
 * @param {number} argsStructSize
 * @param {number} bitset
 * @return {function(new: (?), number, number, number): ?}
 */
GameScriptMp.prototype.triggerScriptEvent = function(p0, argsStruct, argsStructSize, bitset) {};
/**
 * @record
 * @struct
 */
function GameStatsMp() {}

/**
 * @param {?} p0
 * @param {?} p1
 * @return {boolean}
 */
GameStatsMp.prototype.leaderboards2ReadByHandle = function(p0, p1) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @return {boolean}
 */
GameStatsMp.prototype.leaderboards2ReadByRadius = function(p0, p1, p2) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @return {boolean}
 */
GameStatsMp.prototype.leaderboards2ReadByRank = function(p0, p1, p2) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @param {?} p5
 * @param {?} p6
 * @return {boolean}
 */
GameStatsMp.prototype.leaderboards2ReadByRow = function(p0, p1, p2, p3, p4, p5, p6) {};

/**
 * @param {?} p0
 * @param {number} p1
 * @param {?} p2
 * @return {boolean}
 */
GameStatsMp.prototype.leaderboards2ReadByScoreFloat = function(p0, p1, p2) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @return {boolean}
 */
GameStatsMp.prototype.leaderboards2ReadByScoreInt = function(p0, p1, p2) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {boolean} p3
 * @param {?} p4
 * @param {?} p5
 * @return {boolean}
 */
GameStatsMp.prototype.leaderboards2ReadFriendsByRow = function(p0, p1, p2, p3, p4, p5) {};

/**
 * @param {?} p0
 * @return {boolean}
 */
GameStatsMp.prototype.leaderboards2WriteData = function(p0) {};

/**
 * @param {?} p0
 * @return {boolean}
 */
GameStatsMp.prototype.leaderboardsCacheDataRow = function(p0) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @return {boolean}
 */
GameStatsMp.prototype.leaderboardsGetCacheDataRow = function(p0, p1, p2) {};

/**
 * @param {?} p0
 * @return {boolean}
 */
GameStatsMp.prototype.leaderboardsGetCacheExists = function(p0) {};

/**
 * @param {?} p0
 * @return {?}
 */
GameStatsMp.prototype.leaderboardsGetCacheTime = function(p0) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @return {?}
 */
GameStatsMp.prototype.leaderboardsGetColumnId = function(p0, p1, p2) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @return {?}
 */
GameStatsMp.prototype.leaderboardsGetColumnType = function(p0, p1, p2) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {?}
 */
GameStatsMp.prototype.leaderboardsGetNumberOfColumns = function(p0, p1) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @return {?}
 */
GameStatsMp.prototype.leaderboardsReadClear = function(p0, p1, p2) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @return {boolean}
 */
GameStatsMp.prototype.leaderboardsReadPending = function(p0, p1, p2) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @return {boolean}
 */
GameStatsMp.prototype.leaderboardsReadSuccessful = function(p0, p1, p2) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @return {void}
 */
GameStatsMp.prototype.playstatsAwardXp = function(p0, p1, p2) {};

/**
 * @param {string} cheat
 * @return {void}
 */
GameStatsMp.prototype.playstatsCheatApplied = function(cheat) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @return {void}
 */
GameStatsMp.prototype.playstatsClothChange = function(p0, p1, p2, p3, p4) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {void}
 */
GameStatsMp.prototype.playstatsFriendActivity = function(p0, p1) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @param {?} p5
 * @param {?} p6
 * @return {void}
 */
GameStatsMp.prototype.playstatsMatchStarted = function(p0, p1, p2, p3, p4, p5, p6) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @return {void}
 */
GameStatsMp.prototype.playstatsMissionCheckpoint = function(p0, p1, p2, p3) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {boolean} p3
 * @param {boolean} p4
 * @param {boolean} p5
 * @return {void}
 */
GameStatsMp.prototype.playstatsMissionOver = function(p0, p1, p2, p3, p4, p5) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {boolean} p3
 * @return {void}
 */
GameStatsMp.prototype.playstatsMissionStarted = function(p0, p1, p2, p3) {};

/**
 * @param {?} p0
 * @return {void}
 */
GameStatsMp.prototype.playstatsNpcInvite = function(p0) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @return {void}
 */
GameStatsMp.prototype.playstatsOddjobDone = function(p0, p1, p2) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @return {void}
 */
GameStatsMp.prototype.playstatsPropChange = function(p0, p1, p2, p3) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @return {void}
 */
GameStatsMp.prototype.playstatsRaceCheckpoint = function(p0, p1, p2, p3, p4) {};

/**
 * @param {?} p0
 * @return {void}
 */
GameStatsMp.prototype.playstatsRankUp = function(p0) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @return {void}
 */
GameStatsMp.prototype.playstatsShopItem = function(p0, p1, p2, p3, p4) {};

/**
 * @param {number} scaleformHash
 * @param {number} p1
 * @return {void}
 */
GameStatsMp.prototype.playstatsWebsiteVisited = function(scaleformHash, p1) {};

/**
 * @param {number} statSlot
 * @return {?}
 */
GameStatsMp.prototype.statClearSlotForReload = function(statSlot) {};

/**
 * @param {?} p0
 * @return {?}
 */
GameStatsMp.prototype.statDeleteSlot = function(p0) {};

/**
 * @param {number} statHash
 * @param {boolean} outValue
 * @param {?} p2
 * @return {boolean}
 */
GameStatsMp.prototype.statGetBool = function(statHash, outValue, p2) {};

/**
 * @param {number} statName
 * @param {number} mask
 * @param {number} p2
 * @return {boolean}
 */
GameStatsMp.prototype.statGetBoolMasked = function(statName, mask, p2) {};

/**
 * @param {number} statHash
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @return {boolean}
 */
GameStatsMp.prototype.statGetDate = function(statHash, p1, p2, p3) {};

/**
 * @param {number} statHash
 * @param {number} outValue
 * @param {?} p2
 * @return {number}
 */
GameStatsMp.prototype.statGetFloat = function(statHash, outValue, p2) {};

/**
 * @param {number} statHash
 * @param {number} outValue
 * @param {number} p2
 * @return {number}
 */
GameStatsMp.prototype.statGetInt = function(statHash, outValue, p2) {};

/**
 * @param {number} statName
 * @return {string}
 */
GameStatsMp.prototype.statGetLicensePlate = function(statName) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @return {boolean}
 */
GameStatsMp.prototype.statGetMaskedInt = function(p0, p1, p2, p3, p4) {};

/**
 * @param {number} statName
 * @return {number}
 */
GameStatsMp.prototype.statGetNumberOfDays = function(statName) {};

/**
 * @param {number} statName
 * @return {number}
 */
GameStatsMp.prototype.statGetNumberOfHours = function(statName) {};

/**
 * @param {number} statName
 * @return {number}
 */
GameStatsMp.prototype.statGetNumberOfMinutes = function(statName) {};

/**
 * @param {number} statName
 * @return {number}
 */
GameStatsMp.prototype.statGetNumberOfSeconds = function(statName) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @return {boolean}
 */
GameStatsMp.prototype.statGetPos = function(p0, p1, p2, p3, p4) {};

/**
 * @param {number} statHash
 * @param {number} p1
 * @return {string}
 */
GameStatsMp.prototype.statGetString = function(statHash, p1) {};

/**
 * @param {?} p0
 * @return {string}
 */
GameStatsMp.prototype.statGetUserId = function(p0) {};

/**
 * @param {number} statName
 * @param {number} value
 * @return {void}
 */
GameStatsMp.prototype.statIncrement = function(statName, value) {};

/**
 * @param {number} p0
 * @return {boolean}
 */
GameStatsMp.prototype.statLoad = function(p0) {};

/**
 * @param {?} p0
 * @return {boolean}
 */
GameStatsMp.prototype.statLoadPending = function(p0) {};

/**
 * @param {number} p0
 * @param {boolean} p1
 * @param {number} p2
 * @return {boolean}
 */
GameStatsMp.prototype.statSave = function(p0, p1, p2) {};

/**
 * @param {number} statName
 * @param {boolean} value
 * @param {boolean} save
 * @return {boolean}
 */
GameStatsMp.prototype.statSetBool = function(statName, value, save) {};

/**
 * @param {number} statName
 * @param {boolean} value
 * @param {number} mask
 * @param {boolean} save
 * @return {boolean}
 */
GameStatsMp.prototype.statSetBoolMasked = function(statName, value, mask, save) {};

/**
 * @param {number} statName
 * @param {boolean} p1
 * @return {boolean}
 */
GameStatsMp.prototype.statSetCurrentPosixTime = function(statName, p1) {};

/**
 * @param {number} statName
 * @param {{year: number, month: number, day: number, hour: number, minute: number, second: number, milisecond: number}} value
 * @param {number} numFields
 * @param {boolean} save
 * @return {void}
 */
GameStatsMp.prototype.statSetDate = function(statName, value, numFields, save) {};

/**
 * @param {number} statName
 * @param {number} value
 * @param {boolean} save
 * @return {boolean}
 */
GameStatsMp.prototype.statSetFloat = function(statName, value, save) {};

/**
 * @param {number} statName
 * @param {string} value
 * @param {boolean} save
 * @return {boolean}
 */
GameStatsMp.prototype.statSetGxtLabel = function(statName, value, save) {};

/**
 * @param {number} statName
 * @param {number} value
 * @param {boolean} save
 * @return {boolean}
 */
GameStatsMp.prototype.statSetInt = function(statName, value, save) {};

/**
 * @param {number} statName
 * @param {string} str
 * @return {boolean}
 */
GameStatsMp.prototype.statSetLicensePlate = function(statName, str) {};

/**
 * @param {number} statName
 * @param {?} p1
 * @param {?} p2
 * @param {number} p3
 * @param {boolean} save
 * @return {boolean}
 */
GameStatsMp.prototype.statSetMaskedInt = function(statName, p1, p2, p3, save) {};

/**
 * @param {number} statName
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} save
 * @return {boolean}
 */
GameStatsMp.prototype.statSetPos = function(statName, x, y, z, save) {};

/**
 * @param {number} profileSetting
 * @param {number} value
 * @return {void}
 */
GameStatsMp.prototype.statSetProfileSetting = function(profileSetting, value) {};

/**
 * @param {number} statName
 * @param {string} value
 * @param {boolean} save
 * @return {boolean}
 */
GameStatsMp.prototype.statSetString = function(statName, value, save) {};

/**
 * @param {number} statName
 * @param {string} value
 * @param {boolean} save
 * @return {boolean}
 */
GameStatsMp.prototype.statSetUserId = function(statName, value, save) {};

/**
 * @param {?} p0
 * @return {boolean}
 */
GameStatsMp.prototype.statSlotIsLoaded = function(p0) {};
/**
 * @record
 * @struct
 */
function GameStreamingMp() {}

/**
 * @param {string} animDict
 * @return {boolean}
 */
GameStreamingMp.prototype.doesAnimDictExist = function(animDict) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @return {number}
 */
GameStreamingMp.prototype.getIdealPlayerSwitchType = function(x1, y1, z1, x2, y2, z2) {};

/**
 * @param {string} animDict
 * @return {boolean}
 */
GameStreamingMp.prototype.hasAnimDictLoaded = function(animDict) {};

/**
 * @param {string} animSet
 * @return {boolean}
 */
GameStreamingMp.prototype.hasAnimSetLoaded = function(animSet) {};

/**
 * @param {string} clipSet
 * @return {boolean}
 */
GameStreamingMp.prototype.hasClipSetLoaded = function(clipSet) {};

/**
 * @param {number} model
 * @return {boolean}
 */
GameStreamingMp.prototype.hasCollisionForModelLoaded = function(model) {};

/**
 * @param {number} model
 * @return {boolean}
 */
GameStreamingMp.prototype.hasModelLoaded = function(model) {};

/**
 * @param {string} fxName
 * @return {boolean}
 */
GameStreamingMp.prototype.hasNamedPtfxAssetLoaded = function(fxName) {};

/**
 * @param {string} iplName
 * @return {boolean}
 */
GameStreamingMp.prototype.isIplActive = function(iplName) {};

/**
 * @param {number} model
 * @return {boolean}
 */
GameStreamingMp.prototype.isModelAVehicle = function(model) {};

/**
 * @param {number} model
 * @return {boolean}
 */
GameStreamingMp.prototype.isModelInCdimage = function(model) {};

/**
 * @param {number} model
 * @return {boolean}
 */
GameStreamingMp.prototype.isModelValid = function(model) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {void}
 */
GameStreamingMp.prototype.loadScene = function(x, y, z) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {?} p7
 * @return {boolean}
 */
GameStreamingMp.prototype.newLoadSceneStart = function(p0, p1, p2, p3, p4, p5, p6, p7) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {?} p4
 * @return {boolean}
 */
GameStreamingMp.prototype.newLoadSceneStartSafe = function(p0, p1, p2, p3, p4) {};

/**
 * @param {?} p0
 * @return {void}
 */
GameStreamingMp.prototype.prefetchSrl = function(p0) {};

/**
 * @param {string} animDict
 * @return {void}
 */
GameStreamingMp.prototype.removeAnimDict = function(animDict) {};

/**
 * @param {string} animSet
 * @return {void}
 */
GameStreamingMp.prototype.removeAnimSet = function(animSet) {};

/**
 * @param {string} clipSet
 * @return {void}
 */
GameStreamingMp.prototype.removeClipSet = function(clipSet) {};

/**
 * @param {string} iplName
 * @return {void}
 */
GameStreamingMp.prototype.removeIpl = function(iplName) {};

/**
 * @param {string} fxName
 * @return {void}
 */
GameStreamingMp.prototype.removeNamedPtfxAsset = function(fxName) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @return {void}
 */
GameStreamingMp.prototype.requestAdditionalCollisionAtCoord = function(p0, p1, p2) {};

/**
 * @param {string} animDict
 * @return {void}
 */
GameStreamingMp.prototype.requestAnimDict = function(animDict) {};

/**
 * @param {string} animSet
 * @return {void}
 */
GameStreamingMp.prototype.requestAnimSet = function(animSet) {};

/**
 * @param {string} clipSet
 * @return {void}
 */
GameStreamingMp.prototype.requestClipSet = function(clipSet) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {?}
 */
GameStreamingMp.prototype.requestCollisionAtCoord = function(x, y, z) {};

/**
 * @param {number} model
 * @return {void}
 */
GameStreamingMp.prototype.requestCollisionForModel = function(model) {};

/**
 * @param {string} iplName
 * @return {void}
 */
GameStreamingMp.prototype.requestIpl = function(iplName) {};

/**
 * @param {number} model
 * @param {!Function=} cb
 * @return {void}
 */
GameStreamingMp.prototype.requestModel = function(model, cb) {};

/**
 * @param {number} model
 * @return {void}
 */
GameStreamingMp.prototype.requestModel2 = function(model) {};

/**
 * @param {string} fxName
 * @return {void}
 */
GameStreamingMp.prototype.requestNamedPtfxAsset = function(fxName) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameStreamingMp.prototype.setDitchPoliceModels = function(toggle) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @return {void}
 */
GameStreamingMp.prototype.setFocusArea = function(x, y, z, offsetX, offsetY, offsetZ) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameStreamingMp.prototype.setGamePausesForStreaming = function(toggle) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} ground
 * @return {void}
 */
GameStreamingMp.prototype.setHdArea = function(x, y, z, ground) {};

/**
 * @param {number} interiorID
 * @param {boolean} toggle
 * @return {void}
 */
GameStreamingMp.prototype.setInteriorActive = function(interiorID, toggle) {};

/**
 * @param {number} model
 * @return {void}
 */
GameStreamingMp.prototype.setModelAsNoLongerNeeded = function(model) {};

/**
 * @param {number} p0
 * @return {void}
 */
GameStreamingMp.prototype.setPedPopulationBudget = function(p0) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @param {number} p7
 * @param {?} p8
 * @return {void}
 */
GameStreamingMp.prototype.setPlayerSwitchLocation = function(p0, p1, p2, p3, p4, p5, p6, p7, p8) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameStreamingMp.prototype.setReducePedModelBudget = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameStreamingMp.prototype.setReduceVehicleModelBudget = function(toggle) {};

/**
 * @param {number} p0
 * @return {void}
 */
GameStreamingMp.prototype.setSrlTime = function(p0) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameStreamingMp.prototype.setStreaming = function(toggle) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} rad
 * @param {?} p4
 * @param {?} p5
 * @return {?}
 */
GameStreamingMp.prototype.setUnkCameraSettings = function(x, y, z, rad, p4, p5) {};

/**
 * @param {number} p0
 * @return {void}
 */
GameStreamingMp.prototype.setVehiclePopulationBudget = function(p0) {};

/**
 * @param {number} from
 * @param {number} to
 * @param {number} flags
 * @param {number} switchType
 * @return {void}
 */
GameStreamingMp.prototype.startPlayerSwitch = function(from, to, flags, switchType) {};
/**
 * @record
 * @struct
 */
function GameSystemMp() {}

/**
 * @param {number} value
 * @return {number}
 */
GameSystemMp.prototype.ceil = function(value) {};

/**
 * @param {number} value
 * @return {number}
 */
GameSystemMp.prototype.cos = function(value) {};

/**
 * @param {number} value
 * @return {number}
 */
GameSystemMp.prototype.floor = function(value) {};

/**
 * @param {number} base
 * @param {number} exponent
 * @return {number}
 */
GameSystemMp.prototype.pow = function(base, exponent) {};

/**
 * @param {number} value
 * @return {number}
 */
GameSystemMp.prototype.round = function(value) {};

/**
 * @param {number} value
 * @return {void}
 */
GameSystemMp.prototype.settimera = function(value) {};

/**
 * @param {number} value
 * @return {void}
 */
GameSystemMp.prototype.settimerb = function(value) {};

/**
 * @param {number} value
 * @param {number} bitShift
 * @return {number}
 */
GameSystemMp.prototype.shiftLeft = function(value, bitShift) {};

/**
 * @param {number} value
 * @param {number} bitShift
 * @return {number}
 */
GameSystemMp.prototype.shiftRight = function(value, bitShift) {};

/**
 * @param {number} value
 * @return {number}
 */
GameSystemMp.prototype.sin = function(value) {};

/**
 * @param {number} value
 * @return {number}
 */
GameSystemMp.prototype.sqrt = function(value) {};

/**
 * @param {string} scriptName
 * @param {number} stackSize
 * @return {number}
 */
GameSystemMp.prototype.startNewScript = function(scriptName, stackSize) {};

/**
 * @param {string} scriptName
 * @param {?} args
 * @param {number} argCount
 * @param {number} stackSize
 * @return {number}
 */
GameSystemMp.prototype.startNewScriptWithArgs = function(scriptName, args, argCount, stackSize) {};

/**
 * @param {number} scriptHash
 * @param {number} stackSize
 * @return {number}
 */
GameSystemMp.prototype.startNewStreamedScript = function(scriptHash, stackSize) {};

/**
 * @param {number} scriptHash
 * @param {?} args
 * @param {number} argCount
 * @param {number} stackSize
 * @return {number}
 */
GameSystemMp.prototype.startNewStreamedScriptWithArgs = function(scriptHash, args, argCount, stackSize) {};

/**
 * @param {number} value
 * @return {number}
 */
GameSystemMp.prototype.toFloat = function(value) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @return {number}
 */
GameSystemMp.prototype.vdist = function(x1, y1, z1, x2, y2, z2) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @return {number}
 */
GameSystemMp.prototype.vdist2 = function(x1, y1, z1, x2, y2, z2) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @return {number}
 */
GameSystemMp.prototype.vmag = function(p0, p1, p2) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @return {number}
 */
GameSystemMp.prototype.vmag2 = function(p0, p1, p2) {};

/**
 * @param {number} ms
 * @return {void}
 */
GameSystemMp.prototype.wait = function(ms) {};
/**
 * @record
 * @struct
 */
function GameTimeMp() {}

/**
 * @param {number} hour
 * @param {number} minute
 * @param {number} second
 * @return {void}
 */
GameTimeMp.prototype.addToClockTime = function(hour, minute, second) {};

/**
 * @param {number} hour
 * @param {number} minute
 * @param {number} second
 * @return {void}
 */
GameTimeMp.prototype.advanceClockTimeTo = function(hour, minute, second) {};

/**
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @param {number} hour
 * @param {number} minute
 * @param {number} second
 * @return {{year: number, month: number, day: number, hour: number, minute: number, second: number}}
 */
GameTimeMp.prototype.getLocalTime = function(year, month, day, hour, minute, second) {};

/**
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @param {number} hour
 * @param {number} minute
 * @param {number} second
 * @return {{year: number, month: number, day: number, hour: number, minute: number, second: number}}
 */
GameTimeMp.prototype.getLocalTimeGmt = function(year, month, day, hour, minute, second) {};

/**
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @param {number} hour
 * @param {number} minute
 * @param {number} second
 * @return {{year: number, month: number, day: number, hour: number, minute: number, second: number}}
 */
GameTimeMp.prototype.getPosixTime = function(year, month, day, hour, minute, second) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameTimeMp.prototype.pauseClock = function(toggle) {};

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {void}
 */
GameTimeMp.prototype.setClockDate = function(day, month, year) {};

/**
 * @param {number} hour
 * @param {number} minute
 * @param {number} second
 * @return {void}
 */
GameTimeMp.prototype.setClockTime = function(hour, minute, second) {};
/**
 * @record
 * @struct
 */
function GameUiMp() {}

/**
 * @param {number} menuhash
 * @param {boolean} Toggle_Pause
 * @param {number} p2
 * @return {void}
 */
GameUiMp.prototype.activateFrontendMenu = function(menuhash, Toggle_Pause, p2) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {!BlipMp}
 */
GameUiMp.prototype.addBlipForCoord = function(x, y, z) {};

/**
 * @param {!PickupMp} pickup
 * @return {!BlipMp}
 */
GameUiMp.prototype.addBlipForPickup = function(pickup) {};

/**
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 * @return {!BlipMp}
 */
GameUiMp.prototype.addBlipForRadius = function(posX, posY, posZ, radius) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameUiMp.prototype.addNextMessageToPreviousBriefs = function(p0) {};

/**
 * @param {number} value
 * @param {number} decimalPlaces
 * @return {void}
 */
GameUiMp.prototype.addTextComponentFloat = function(value, decimalPlaces) {};

/**
 * @param {number} value
 * @return {void}
 */
GameUiMp.prototype.addTextComponentInteger = function(value) {};

/**
 * @param {string} labelName
 * @return {void}
 */
GameUiMp.prototype.addTextComponentItemString = function(labelName) {};

/**
 * @param {number} cashAmount
 * @param {boolean} p1
 * @return {void}
 */
GameUiMp.prototype.addTextComponentSubstringCash = function(cashAmount, p1) {};

/**
 * @param {number} gxtEntryHash
 * @return {void}
 */
GameUiMp.prototype.addTextComponentSubstringLocalized = function(gxtEntryHash) {};

/**
 * @param {string} text
 * @return {void}
 */
GameUiMp.prototype.addTextComponentSubstringPlayerName = function(text) {};

/**
 * @param {number} timestamp
 * @param {number} flags
 * @return {void}
 */
GameUiMp.prototype.addTextComponentSubstringTime = function(timestamp, flags) {};

/**
 * @param {string} website
 * @return {void}
 */
GameUiMp.prototype.addTextComponentSubstringWebsite = function(website) {};

/**
 * @param {number} headDisplayId
 * @return {boolean}
 */
GameUiMp.prototype.addTrevorRandomModifier = function(headDisplayId) {};

/**
 * @param {string} gxtentry
 * @return {void}
 */
GameUiMp.prototype.beginTextCommandSetBlipName = function(gxtentry) {};

/**
 * @param {number} p0
 * @param {boolean} p1
 * @return {void}
 */
GameUiMp.prototype.clearAdditionalText = function(p0, p1) {};

/**
 * @param {?} p0
 * @param {boolean} p1
 * @return {void}
 */
GameUiMp.prototype.clearFloatingHelp = function(p0, p1) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameUiMp.prototype.clearHelp = function(toggle) {};

/**
 * @param {string} p0
 * @return {void}
 */
GameUiMp.prototype.clearThisPrint = function(p0) {};

/**
 * @param {boolean} display
 * @return {void}
 */
GameUiMp.prototype.displayAmmoThisFrame = function(display) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameUiMp.prototype.displayAreaName = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameUiMp.prototype.displayCash = function(toggle) {};

/**
 * @param {?} p0
 * @param {boolean} loop
 * @param {boolean} beep
 * @param {number} shape
 * @return {void}
 */
GameUiMp.prototype.displayHelpTextFromStringLabel = function(p0, loop, beep, shape) {};

/**
 * @param {string} message
 * @param {boolean} p1
 * @return {void}
 */
GameUiMp.prototype.displayHelpTextThisFrame = function(message, p1) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameUiMp.prototype.displayHud = function(toggle) {};

/**
 * @param {boolean} Toggle
 * @return {?}
 */
GameUiMp.prototype.displayRadar = function(Toggle) {};

/**
 * @param {string} gxt
 * @return {boolean}
 */
GameUiMp.prototype.doesTextBlockExist = function(gxt) {};

/**
 * @param {string} gxt
 * @return {boolean}
 */
GameUiMp.prototype.doesTextLabelExist = function(gxt) {};

/**
 * @param {boolean} blink
 * @param {boolean} p1
 * @return {number}
 */
GameUiMp.prototype.drawNotification = function(blink, p1) {};

/**
 * @param {boolean} blink
 * @param {boolean} p1
 * @return {number}
 */
GameUiMp.prototype.drawNotification2 = function(blink, p1) {};

/**
 * @param {boolean} blink
 * @param {boolean} p1
 * @return {number}
 */
GameUiMp.prototype.drawNotification3 = function(blink, p1) {};

/**
 * @param {boolean} blink
 * @param {boolean} p1
 * @return {number}
 */
GameUiMp.prototype.drawNotification4 = function(blink, p1) {};

/**
 * @param {number} time
 * @param {boolean} p1
 * @return {void}
 */
GameUiMp.prototype.drawSubtitleTimed = function(time, p1) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
GameUiMp.prototype.drawText = function(x, y) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameUiMp.prototype.enableDeathbloodSeethrough = function(p0) {};

/**
 * @param {?} p0
 * @return {void}
 */
GameUiMp.prototype.flashAbilityBar = function(p0) {};

/**
 * @param {boolean} p0
 * @return {?}
 */
GameUiMp.prototype.flashWantedDisplay = function(p0) {};

/**
 * @param {number} p0
 * @return {function(new: (?), number, number, number): ?}
 */
GameUiMp.prototype.getBlipInfoIdCoord = function(p0) {};

/**
 * @param {number} hudIndex
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @return {{hudIndex: number, r: number, g: number, b: number, a: number}}
 */
GameUiMp.prototype.getHudColour = function(hudIndex, r, g, b, a) {};

/**
 * @param {number} componentIndex
 * @return {number}
 */
GameUiMp.prototype.getHudComponentPosition = function(componentIndex) {};

/**
 * @param {string} labelName
 * @return {string}
 */
GameUiMp.prototype.getLabelText = function(labelName) {};

/**
 * @param {string} string
 * @return {number}
 */
GameUiMp.prototype.getLengthOfLiteralString = function(string) {};

/**
 * @param {string} gxt
 * @return {number}
 */
GameUiMp.prototype.getLengthOfStringWithThisTextLabel = function(gxt) {};

/**
 * @param {string} p0
 * @return {?}
 */
GameUiMp.prototype.getNamedRendertargetRenderId = function(p0) {};

/**
 * @param {number} hash
 * @return {string}
 */
GameUiMp.prototype.getStreetNameFromHashKey = function(hash) {};

/**
 * @param {number} size
 * @param {number} font
 * @return {number}
 */
GameUiMp.prototype.getTextScaleHeight = function(size, font) {};

/**
 * @param {boolean} p0
 * @return {number}
 */
GameUiMp.prototype.getTextScreenWidth = function(p0) {};

/**
 * @param {string} text
 * @param {number} position
 * @param {number} length
 * @return {string}
 */
GameUiMp.prototype.getTextSubstring = function(text, position, length) {};

/**
 * @param {string} text
 * @param {number} position
 * @param {number} length
 * @param {number} maxLength
 * @return {string}
 */
GameUiMp.prototype.getTextSubstringSafe = function(text, position, length, maxLength) {};

/**
 * @param {string} text
 * @param {number} startPosition
 * @param {number} endPosition
 * @return {string}
 */
GameUiMp.prototype.getTextSubstringSlice = function(text, startPosition, endPosition) {};

/**
 * @param {number} slot
 * @return {boolean}
 */
GameUiMp.prototype.hasAdditionalTextLoaded = function(slot) {};

/**
 * @param {number} headDisplayId
 * @return {boolean}
 */
GameUiMp.prototype.hasHeadDisplayLoaded = function(headDisplayId) {};

/**
 * @param {string} gxt
 * @param {number} slot
 * @return {boolean}
 */
GameUiMp.prototype.hasThisAdditionalTextLoaded = function(gxt, slot) {};

/**
 * @param {number} componentIndex
 * @return {void}
 */
GameUiMp.prototype.hideHudComponentThisFrame = function(componentIndex) {};

/**
 * @param {number} componentIndex
 * @return {void}
 */
GameUiMp.prototype.hideScriptedHudComponentThisFrame = function(componentIndex) {};

/**
 * @param {?} p0
 * @param {boolean} p1
 * @return {void}
 */
GameUiMp.prototype.hideSpecialAbilityLockonOperation = function(p0, p1) {};

/**
 * @param {number} componentIndex
 * @return {boolean}
 */
GameUiMp.prototype.isHudComponentActive = function(componentIndex) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @return {boolean}
 */
GameUiMp.prototype.isMinimapAreaRevealed = function(x, y, radius) {};

/**
 * @param {number} hash
 * @return {boolean}
 */
GameUiMp.prototype.isNamedRendertargetLinked = function(hash) {};

/**
 * @param {string} p0
 * @return {boolean}
 */
GameUiMp.prototype.isNamedRendertargetRegistered = function(p0) {};

/**
 * @return {boolean}
 */
GameUiMp.prototype.isPauseMenuActive = function() {};

/**
 * @param {number} componentIndex
 * @return {boolean}
 */
GameUiMp.prototype.isScriptedHudComponentActive = function(componentIndex) {};

/**
 * @param {number} p0
 * @return {boolean}
 */
GameUiMp.prototype.isStreamingAdditionalText = function(p0) {};

/**
 * @param {boolean} p0
 * @param {?} p1
 * @return {void}
 */
GameUiMp.prototype.keyHudColour = function(p0, p1) {};

/**
 * @param {number} hash
 * @return {void}
 */
GameUiMp.prototype.linkNamedRendertarget = function(hash) {};

/**
 * @param {number} angle
 * @return {void}
 */
GameUiMp.prototype.lockMinimapAngle = function(angle) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
GameUiMp.prototype.lockMinimapPosition = function(x, y) {};

/**
 * @param {number} hash
 * @return {void}
 */
GameUiMp.prototype.objectDecalToggle = function(hash) {};

/**
 * @param {string} p0
 * @param {boolean} p1
 * @return {boolean}
 */
GameUiMp.prototype.registerNamedRendertarget = function(p0, p1) {};

/**
 * @param {?} p0
 * @return {boolean}
 */
GameUiMp.prototype.releaseNamedRendertarget = function(p0) {};

/**
 * @param {number} blip
 * @return {void}
 */
GameUiMp.prototype.removeBlip = function(blip) {};

/**
 * @param {number} notifactionId
 * @return {void}
 */
GameUiMp.prototype.removeNotification = function(notifactionId) {};

/**
 * @param {string} gxt
 * @param {number} slot
 * @return {void}
 */
GameUiMp.prototype.requestAdditionalText = function(gxt, slot) {};

/**
 * @param {string} gxt
 * @param {number} slot
 * @return {void}
 */
GameUiMp.prototype.requestAdditionalText2 = function(gxt, slot) {};

/**
 * @param {number} componentIndex
 * @return {void}
 */
GameUiMp.prototype.resetHudComponentValues = function(componentIndex) {};

/**
 * @param {number} p0
 * @return {void}
 */
GameUiMp.prototype.respondingAsTemp = function(p0) {};

/**
 * @param {number} menuHash
 * @param {number} p1
 * @return {void}
 */
GameUiMp.prototype.restartFrontendMenu = function(menuHash, p1) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @return {void}
 */
GameUiMp.prototype.setAbilityBarValue = function(p0, p1) {};

/**
 * @param {number} spriteId
 * @return {void}
 */
GameUiMp.prototype.setCursorSprite = function(spriteId) {};

/**
 * @param {boolean} active
 * @return {void}
 */
GameUiMp.prototype.setFrontendActive = function(active) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @return {void}
 */
GameUiMp.prototype.setGpsFlags = function(p0, p1) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameUiMp.prototype.setGpsFlashes = function(toggle) {};

/**
 * @param {number} headDisplayId
 * @param {number} sprite
 * @param {boolean} toggle
 * @return {void}
 */
GameUiMp.prototype.setHeadDisplayFlag = function(headDisplayId, sprite, toggle) {};

/**
 * @param {number} headDisplayId
 * @param {string} string
 * @return {void}
 */
GameUiMp.prototype.setHeadDisplayString = function(headDisplayId, string) {};

/**
 * @param {number} headDisplayId
 * @param {number} wantedlvl
 * @return {void}
 */
GameUiMp.prototype.setHeadDisplayWanted = function(headDisplayId, wantedlvl) {};

/**
 * @param {number} componentIndex
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @return {void}
 */
GameUiMp.prototype.setHudColour = function(componentIndex, r, g, b, a) {};

/**
 * @param {number} componentIndex
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
GameUiMp.prototype.setHudComponentPosition = function(componentIndex, x, y) {};

/**
 * @param {string} string
 * @return {void}
 */
GameUiMp.prototype.setLoadingPromptTextEntry = function(string) {};

/**
 * @param {number} altitude
 * @param {boolean} p1
 * @return {void}
 */
GameUiMp.prototype.setMinimapAttitudeIndicatorLevel = function(altitude, p1) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameUiMp.prototype.setMinimapBlockWaypoint = function(toggle) {};

/**
 * @param {number} p0
 * @param {boolean} p1
 * @param {number} p2
 * @return {?}
 */
GameUiMp.prototype.setMinimapComponent = function(p0, p1, p2) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameUiMp.prototype.setMinimapRevealed = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameUiMp.prototype.setMinimapVisible = function(toggle) {};

/**
 * @param {boolean} p0
 * @param {string} name
 * @return {void}
 */
GameUiMp.prototype.setMissionName = function(p0, name) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @return {void}
 */
GameUiMp.prototype.setMultiplayerHudCash = function(p0, p1) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
GameUiMp.prototype.setNewWaypoint = function(x, y) {};

/**
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 * @return {void}
 */
GameUiMp.prototype.setNotificationFlashColor = function(red, green, blue, alpha) {};

/**
 * @param {string} picName1
 * @param {string} picName2
 * @param {boolean} flash
 * @param {number} iconType
 * @param {string} sender
 * @param {string} subject
 * @return {number}
 */
GameUiMp.prototype.setNotificationMessage = function(picName1, picName2, flash, iconType, sender, subject) {};

/**
 * @param {string} picName1
 * @param {string} picName2
 * @param {boolean} flash
 * @param {number} iconType
 * @param {string} sender
 * @param {string} subject
 * @param {number} duration
 * @param {string} clanTag
 * @return {number}
 */
GameUiMp.prototype.setNotificationMessageClanTag = function(picName1, picName2, flash, iconType, sender, subject, duration, clanTag) {};

/**
 * @param {string} picName1
 * @param {string} picName2
 * @param {boolean} flash
 * @param {number} iconType1
 * @param {string} sender
 * @param {string} subject
 * @param {number} duration
 * @param {string} clanTag
 * @param {number} iconType2
 * @param {number} p9
 * @return {number}
 */
GameUiMp.prototype.setNotificationMessageClanTag2 = function(picName1, picName2, flash, iconType1, sender, subject, duration, clanTag, iconType2, p9) {};

/**
 * @param {string} type
 * @return {void}
 */
GameUiMp.prototype.setNotificationTextEntry = function(type) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameUiMp.prototype.setPauseMenuActive = function(toggle) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
GameUiMp.prototype.setPlayerBlipPositionThisFrame = function(x, y) {};

/**
 * @param {number} cash
 * @param {number} bank
 * @return {void}
 */
GameUiMp.prototype.setPlayerCashChange = function(cash, bank) {};

/**
 * @param {number} interior
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} p4
 * @return {void}
 */
GameUiMp.prototype.setRadarAsInteriorThisFrame = function(interior, x, y, z, p4) {};

/**
 * @param {boolean} toggleBigMap
 * @param {boolean} showFullMap
 * @return {void}
 */
GameUiMp.prototype.setRadarBigmapEnabled = function(toggleBigMap, showFullMap) {};

/**
 * @param {number} zoomLevel
 * @return {void}
 */
GameUiMp.prototype.setRadarZoom = function(zoomLevel) {};

/**
 * @param {number} zoomLevel
 * @return {void}
 */
GameUiMp.prototype.setRadarZoomLevelThisFrame = function(zoomLevel) {};

/**
 * @param {boolean} align
 * @return {void}
 */
GameUiMp.prototype.setTextCentre = function(align) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameUiMp.prototype.setTextChatUnk = function(p0) {};

/**
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 * @return {void}
 */
GameUiMp.prototype.setTextColour = function(red, green, blue, alpha) {};

/**
 * @param {string} inputType
 * @return {void}
 */
GameUiMp.prototype.setTextComponentFormat = function(inputType) {};

/**
 * @param {number} distance
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @return {void}
 */
GameUiMp.prototype.setTextDropshadow = function(distance, r, g, b, a) {};

/**
 * @param {number} p0
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @return {void}
 */
GameUiMp.prototype.setTextEdge = function(p0, r, g, b, a) {};

/**
 * @param {string} text
 * @return {void}
 */
GameUiMp.prototype.setTextEntry = function(text) {};

/**
 * @param {string} p0
 * @return {void}
 */
GameUiMp.prototype.setTextEntry2 = function(p0) {};

/**
 * @param {string} text
 * @return {void}
 */
GameUiMp.prototype.setTextEntryForWidth = function(text) {};

/**
 * @param {number} fontType
 * @return {void}
 */
GameUiMp.prototype.setTextFont = function(fontType) {};

/**
 * @param {string} entry
 * @return {void}
 */
GameUiMp.prototype.setTextGxtEntry = function(entry) {};

/**
 * @param {number} justifyType
 * @return {void}
 */
GameUiMp.prototype.setTextJustification = function(justifyType) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameUiMp.prototype.setTextLeading = function(p0) {};

/**
 * @param {boolean} p0
 * @return {void}
 */
GameUiMp.prototype.setTextProportional = function(p0) {};

/**
 * @param {number} renderId
 * @return {void}
 */
GameUiMp.prototype.setTextRenderId = function(renderId) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameUiMp.prototype.setTextRightJustify = function(toggle) {};

/**
 * @param {number} sizex
 * @param {number} sizey
 * @return {void}
 */
GameUiMp.prototype.setTextScale = function(sizex, sizey) {};

/**
 * @param {number} start
 * @param {number} end
 * @return {void}
 */
GameUiMp.prototype.setTextWrap = function(start, end) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {boolean}
 */
GameUiMp.prototype.setUseridsUihidden = function(p0, p1) {};

/**
 * @param {string} entryLine1
 * @param {number} instructionalKey
 * @param {string} entryLine2
 * @param {boolean} p3
 * @param {?} p4
 * @param {?} p5
 * @param {?} p6
 * @param {boolean} background
 * @return {void}
 */
GameUiMp.prototype.setWarningMessage = function(entryLine1, instructionalKey, entryLine2, p3, p4, p5, p6, background) {};

/**
 * @param {string} entryHeader
 * @param {string} entryLine1
 * @param {number} instructionalKey
 * @param {string} entryLine2
 * @param {boolean} p4
 * @param {?} p5
 * @param {?} p6
 * @param {?} p7
 * @param {boolean} background
 * @return {void}
 */
GameUiMp.prototype.setWarningMessage2 = function(entryHeader, entryLine1, instructionalKey, entryLine2, p4, p5, p6, p7, background) {};

/**
 * @param {string} entryHeader
 * @param {string} entryLine1
 * @param {?} instructionalKey
 * @param {string} entryLine2
 * @param {?} p4
 * @param {?} p5
 * @param {?} p6
 * @param {?} p7
 * @param {?} p8
 * @param {boolean} p9
 * @return {void}
 */
GameUiMp.prototype.setWarningMessage3 = function(entryHeader, entryLine1, instructionalKey, entryLine2, p4, p5, p6, p7, p8, p9) {};

/**
 * @param {?} p0
 * @return {void}
 */
GameUiMp.prototype.setWidescreenFormat = function(p0) {};

/**
 * @param {number} componentIndex
 * @return {void}
 */
GameUiMp.prototype.showHudComponentThisFrame = function(componentIndex) {};

/**
 * @param {number} busySpinnerType
 * @return {void}
 */
GameUiMp.prototype.showLoadingPrompt = function(busySpinnerType) {};

/**
 * @param {boolean} forcedShow
 * @return {void}
 */
GameUiMp.prototype.showWeaponWheel = function(forcedShow) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameUiMp.prototype.toggleStealthRadar = function(toggle) {};
/**
 * @record
 * @struct
 */
function GameUnkMp() {}

/**
 * @param {boolean} p0
 * @return {void}
 */
GameUnkMp.prototype.getBroadcastFinishedLosSound = function(p0) {};
/**
 * @record
 * @struct
 */
function GameVehicleMp() {}

/**
 * @param {?} p0
 * @param {number} p1
 * @param {?} p2
 * @param {boolean} p3
 * @param {boolean} p4
 * @param {boolean} p5
 * @param {?} p6
 * @return {void}
 */
GameVehicleMp.prototype.addVehicleStuckCheckWithWarp = function(p0, p1, p2, p3, p4, p5, p6) {};

/**
 * @param {number} variation
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} direction
 * @return {number}
 */
GameVehicleMp.prototype.createMissionTrain = function(variation, x, y, z, direction) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} heading
 * @param {number} p4
 * @param {number} p5
 * @param {number} modelHash
 * @param {number} p7
 * @param {number} p8
 * @param {number} p9
 * @param {number} p10
 * @param {boolean} p11
 * @param {boolean} p12
 * @param {boolean} p13
 * @param {boolean} p14
 * @param {boolean} p15
 * @param {number} p16
 * @return {number}
 */
GameVehicleMp.prototype.createScriptVehicleGenerator = function(x, y, z, heading, p4, p5, modelHash, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16) {};

/**
 * @param {number} modelHash
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} heading
 * @param {boolean} networkHandle
 * @param {boolean} vehiclehandle
 * @return {?}
 */
GameVehicleMp.prototype.createVehicle = function(modelHash, x, y, z, heading, networkHandle, vehiclehandle) {};

/**
 * @param {number} train
 * @return {number}
 */
GameVehicleMp.prototype.deleteMissionTrain = function(train) {};

/**
 * @param {number} vehicleGenerator
 * @return {void}
 */
GameVehicleMp.prototype.deleteScriptVehicleGenerator = function(vehicleGenerator) {};

/**
 * @param {boolean} disabled
 * @param {number} weaponHash
 * @param {number} vehicle
 * @param {number} owner
 * @return {void}
 */
GameVehicleMp.prototype.disableVehicleWeapon = function(disabled, weaponHash, vehicle, owner) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameVehicleMp.prototype.displayDistantVehicles = function(toggle) {};

/**
 * @param {number} vehicleGenerator
 * @return {boolean}
 */
GameVehicleMp.prototype.doesScriptVehicleGeneratorExist = function(vehicleGenerator) {};

/**
 * @param {string} decorator
 * @return {boolean}
 */
GameVehicleMp.prototype.doesVehicleExistWithDecorator = function(decorator) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {number} modelHash
 * @param {number} flags
 * @return {number}
 */
GameVehicleMp.prototype.getClosestVehicle = function(x, y, z, radius, modelHash, flags) {};

/**
 * @param {?} p0
 * @return {?}
 */
GameVehicleMp.prototype.getCurrentPlaybackForVehicle = function(p0) {};

/**
 * @param {number} modelHash
 * @return {string}
 */
GameVehicleMp.prototype.getDisplayNameFromVehicleModel = function(modelHash) {};

/**
 * @param {number} p0
 * @param {boolean} p1
 * @return {number}
 */
GameVehicleMp.prototype.getNumModColors = function(p0, p1) {};

/**
 * @param {?} p0
 * @return {number}
 */
GameVehicleMp.prototype.getPositionInRecording = function(p0) {};

/**
 * @param {?} p0
 * @param {number} p1
 * @param {?} p2
 * @return {number}
 */
GameVehicleMp.prototype.getPositionOfVehicleRecordingAtTime = function(p0, p1, p2) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @return {number}
 */
GameVehicleMp.prototype.getRandomVehicleBackBumperInSphere = function(p0, p1, p2, p3, p4, p5, p6) {};

/**
 * @param {number} p0
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @param {number} p4
 * @param {number} p5
 * @param {number} p6
 * @return {number}
 */
GameVehicleMp.prototype.getRandomVehicleFrontBumperInSphere = function(p0, p1, p2, p3, p4, p5, p6) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @param {number} modelHash
 * @param {number} flags
 * @return {number}
 */
GameVehicleMp.prototype.getRandomVehicleInSphere = function(x, y, z, radius, modelHash, flags) {};

/**
 * @param {boolean} p0
 * @param {number} modelHash
 * @param {number} p2
 * @return {{modelHash: number, p2: number}}
 */
GameVehicleMp.prototype.getRandomVehicleModelInMemory = function(p0, modelHash, p2) {};

/**
 * @param {?} p0
 * @param {number} p1
 * @param {?} p2
 * @return {number}
 */
GameVehicleMp.prototype.getRotationOfVehicleRecordingAtTime = function(p0, p1, p2) {};

/**
 * @param {?} p0
 * @return {number}
 */
GameVehicleMp.prototype.getTimePositionInRecording = function(p0) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {?}
 */
GameVehicleMp.prototype.getTotalDurationOfVehicleRecording = function(p0, p1) {};

/**
 * @param {?} p0
 * @return {number}
 */
GameVehicleMp.prototype.getTotalDurationOfVehicleRecordingId = function(p0) {};

/**
 * @param {number} modelHash
 * @return {number}
 */
GameVehicleMp.prototype.getVehicleClassFromName = function(modelHash) {};

/**
 * @param {?} p0
 * @return {number}
 */
GameVehicleMp.prototype.getVehicleClassMaxAcceleration = function(p0) {};

/**
 * @param {?} p0
 * @return {number}
 */
GameVehicleMp.prototype.getVehicleClassMaxAgility = function(p0) {};

/**
 * @param {?} p0
 * @return {number}
 */
GameVehicleMp.prototype.getVehicleClassMaxBraking = function(p0) {};

/**
 * @param {?} p0
 * @return {number}
 */
GameVehicleMp.prototype.getVehicleClassMaxTraction = function(p0) {};

/**
 * @param {number} modelHash
 * @return {number}
 */
GameVehicleMp.prototype.getVehicleModelAcceleration = function(modelHash) {};

/**
 * @param {number} modelHash
 * @return {number}
 */
GameVehicleMp.prototype.getVehicleModelMaxBraking = function(modelHash) {};

/**
 * @param {number} modelHash
 * @return {number}
 */
GameVehicleMp.prototype.getVehicleModelMaxNumberOfPassengers = function(modelHash) {};

/**
 * @param {number} modelHash
 * @return {number}
 */
GameVehicleMp.prototype.getVehicleModelMaxSpeed = function(modelHash) {};

/**
 * @param {number} modelHash
 * @return {number}
 */
GameVehicleMp.prototype.getVehicleModelMaxTraction = function(modelHash) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {?}
 */
GameVehicleMp.prototype.getVehicleRecordingId = function(p0, p1) {};

/**
 * @param {?} p0
 * @return {boolean}
 */
GameVehicleMp.prototype.hasPreloadModsFinished = function(p0) {};

/**
 * @param {number} vehicleAsset
 * @return {boolean}
 */
GameVehicleMp.prototype.hasVehicleAssetLoaded = function(vehicleAsset) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {boolean}
 */
GameVehicleMp.prototype.hasVehicleRecordingBeenLoaded = function(p0, p1) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} radius
 * @return {boolean}
 */
GameVehicleMp.prototype.isAnyVehicleNearPoint = function(x, y, z, radius) {};

/**
 * @param {number} x1
 * @param {number} x2
 * @param {number} y1
 * @param {number} y2
 * @param {number} z1
 * @param {number} z2
 * @return {boolean}
 */
GameVehicleMp.prototype.isCopVehicleInArea3d = function(x1, x2, y1, y2, z1, z2) {};

/**
 * @param {?} p0
 * @return {boolean}
 */
GameVehicleMp.prototype.isPlaybackGoingOnForVehicle = function(p0) {};

/**
 * @param {?} p0
 * @return {boolean}
 */
GameVehicleMp.prototype.isPlaybackUsingAiGoingOnForVehicle = function(p0) {};

/**
 * @param {number} model
 * @return {boolean}
 */
GameVehicleMp.prototype.isThisModelABicycle = function(model) {};

/**
 * @param {number} model
 * @return {boolean}
 */
GameVehicleMp.prototype.isThisModelABike = function(model) {};

/**
 * @param {number} model
 * @return {boolean}
 */
GameVehicleMp.prototype.isThisModelABoat = function(model) {};

/**
 * @param {number} model
 * @return {boolean}
 */
GameVehicleMp.prototype.isThisModelACar = function(model) {};

/**
 * @param {number} model
 * @return {boolean}
 */
GameVehicleMp.prototype.isThisModelAHeli = function(model) {};

/**
 * @param {number} model
 * @return {boolean}
 */
GameVehicleMp.prototype.isThisModelAnEmergencyBoat = function(model) {};

/**
 * @param {number} model
 * @return {boolean}
 */
GameVehicleMp.prototype.isThisModelAPlane = function(model) {};

/**
 * @param {number} model
 * @return {boolean}
 */
GameVehicleMp.prototype.isThisModelAQuadbike = function(model) {};

/**
 * @param {number} model
 * @return {boolean}
 */
GameVehicleMp.prototype.isThisModelATrain = function(model) {};

/**
 * @param {string} garageName
 * @param {number} vehicle
 * @return {boolean}
 */
GameVehicleMp.prototype.isVehicleInGarageArea = function(garageName, vehicle) {};

/**
 * @param {?} p0
 * @return {void}
 */
GameVehicleMp.prototype.pausePlaybackRecordedVehicle = function(p0) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @return {void}
 */
GameVehicleMp.prototype.preloadVehicleMod = function(p0, p1, p2) {};

/**
 * @param {number} vehicleAsset
 * @return {void}
 */
GameVehicleMp.prototype.removeVehicleAsset = function(vehicleAsset) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {void}
 */
GameVehicleMp.prototype.removeVehicleRecording = function(p0, p1) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {?} unk
 * @return {void}
 */
GameVehicleMp.prototype.removeVehiclesFromGeneratorsInArea = function(x1, y1, z1, x2, y2, z2, unk) {};

/**
 * @param {?} p0
 * @return {void}
 */
GameVehicleMp.prototype.removeVehicleStuckCheck = function(p0) {};

/**
 * @param {number} vehicleHash
 * @param {number} vehicleAsset
 * @return {void}
 */
GameVehicleMp.prototype.requestVehicleAsset = function(vehicleHash, vehicleAsset) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {void}
 */
GameVehicleMp.prototype.requestVehicleRecording = function(p0, p1) {};

/**
 * @param {boolean} active
 * @return {void}
 */
GameVehicleMp.prototype.setAllLowPriorityVehicleGeneratorsActive = function(active) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {boolean} p6
 * @param {boolean} p7
 * @return {void}
 */
GameVehicleMp.prototype.setAllVehicleGeneratorsActiveInArea = function(x1, y1, z1, x2, y2, z2, p6, p7) {};

/**
 * @param {?} p0
 * @param {number} p1
 * @param {number} p2
 * @param {boolean} p3
 * @return {void}
 */
GameVehicleMp.prototype.setCargobobHookPosition = function(p0, p1, p2, p3) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameVehicleMp.prototype.setFarDrawVehicles = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {?}
 */
GameVehicleMp.prototype.setGarbageTrucks = function(toggle) {};

/**
 * @param {number} train
 * @param {boolean} p1
 * @return {number}
 */
GameVehicleMp.prototype.setMissionTrainAsNoLongerNeeded = function(train, p1) {};

/**
 * @param {number} value
 * @return {?}
 */
GameVehicleMp.prototype.setNumberOfParkedVehicles = function(value) {};

/**
 * @param {number} multiplier
 * @return {void}
 */
GameVehicleMp.prototype.setParkedVehicleDensityMultiplierThisFrame = function(multiplier) {};

/**
 * @param {?} p0
 * @param {number} speed
 * @return {?}
 */
GameVehicleMp.prototype.setPlaybackSpeed = function(p0, speed) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {boolean} p3
 * @return {void}
 */
GameVehicleMp.prototype.setPlaybackToUseAiTryToRevertBackLater = function(p0, p1, p2, p3) {};

/**
 * @param {boolean} toggle
 * @return {?}
 */
GameVehicleMp.prototype.setRandomBoats = function(toggle) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameVehicleMp.prototype.setRandomTrains = function(toggle) {};

/**
 * @param {number} multiplier
 * @return {void}
 */
GameVehicleMp.prototype.setRandomVehicleDensityMultiplierThisFrame = function(multiplier) {};

/**
 * @param {?} vehicleGenerator
 * @param {boolean} enabled
 * @return {void}
 */
GameVehicleMp.prototype.setScriptVehicleGenerator = function(vehicleGenerator, enabled) {};

/**
 * @param {number} multiplier
 * @return {void}
 */
GameVehicleMp.prototype.setVehicleDensityMultiplierThisFrame = function(multiplier) {};

/**
 * @param {number} model
 * @param {boolean} suppressed
 * @return {void}
 */
GameVehicleMp.prototype.setVehicleModelIsSuppressed = function(model, suppressed) {};

/**
 * @param {number} driver
 * @param {number} entity
 * @param {number} xTarget
 * @param {number} yTarget
 * @param {number} zTarget
 * @return {void}
 */
GameVehicleMp.prototype.setVehicleShootAtTarget = function(driver, entity, xTarget, yTarget, zTarget) {};

/**
 * @param {?} p0
 * @param {number} p1
 * @return {void}
 */
GameVehicleMp.prototype.skipTimeInPlaybackRecordedVehicle = function(p0, p1) {};

/**
 * @param {?} p0
 * @return {void}
 */
GameVehicleMp.prototype.skipToEndAndStopPlaybackRecordedVehicle = function(p0) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {boolean} p3
 * @return {void}
 */
GameVehicleMp.prototype.startPlaybackRecordedVehicle = function(p0, p1, p2, p3) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {number} p3
 * @param {?} p4
 * @return {void}
 */
GameVehicleMp.prototype.startPlaybackRecordedVehicleUsingAi = function(p0, p1, p2, p3, p4) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @param {?} p2
 * @param {?} p3
 * @param {?} p4
 * @param {?} p5
 * @return {void}
 */
GameVehicleMp.prototype.startPlaybackRecordedVehicleWithFlags = function(p0, p1, p2, p3, p4, p5) {};

/**
 * @param {?} p0
 * @return {void}
 */
GameVehicleMp.prototype.stopPlaybackRecordedVehicle = function(p0) {};

/**
 * @param {number} intersectionId
 * @param {boolean} state
 * @return {?}
 */
GameVehicleMp.prototype.switchTrainTrack = function(intersectionId, state) {};

/**
 * @param {?} p0
 * @return {void}
 */
GameVehicleMp.prototype.unpausePlaybackRecordedVehicle = function(p0) {};
/**
 * @record
 * @struct
 */
function GameWaterMp() {}

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} height
 * @return {number}
 */
GameWaterMp.prototype.getWaterHeight = function(x, y, z, height) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} height
 * @return {number}
 */
GameWaterMp.prototype.getWaterHeightNoWaves = function(x, y, z, height) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @param {number} height
 * @return {void}
 */
GameWaterMp.prototype.modifyWater = function(x, y, radius, height) {};

/**
 * @param {number} intensity
 * @return {void}
 */
GameWaterMp.prototype.setWavesIntensity = function(intensity) {};

/**
 * @param {number} startX
 * @param {number} startY
 * @param {number} startZ
 * @param {number} endX
 * @param {number} endY
 * @param {number} endZ
 * @param {?} p6
 * @param {?} p7s
 * @return {boolean}
 */
GameWaterMp.prototype.testProbeAgainstAllWater = function(startX, startY, startZ, endX, endY, endZ, p6, p7s) {};

/**
 * @param {number} startX
 * @param {number} startY
 * @param {number} startZ
 * @param {number} endX
 * @param {number} endY
 * @param {number} endZ
 * @param {boolean} p6
 * @return {boolean}
 */
GameWaterMp.prototype.testProbeAgainstWater = function(startX, startY, startZ, endX, endY, endZ, p6) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {?} p3
 * @param {?} p4
 * @return {boolean}
 */
GameWaterMp.prototype.testVerticalProbeAgainstAllWater = function(x, y, z, p3, p4) {};
/**
 * @record
 * @struct
 */
function GameWeaponMp() {}

/**
 * @param {number} weaponHash
 * @return {boolean}
 */
GameWeaponMp.prototype.canUseWeaponOnParachute = function(weaponHash) {};

/**
 * @param {number} weaponHash
 * @param {number} ammoCount
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {boolean} showWorldModel
 * @param {number} heading
 * @param {?} p7
 * @return {number}
 */
GameWeaponMp.prototype.createWeaponObject = function(weaponHash, ammoCount, x, y, z, showWorldModel, heading, p7) {};

/**
 * @param {number} weaponHash
 * @param {number} componentHash
 * @return {boolean}
 */
GameWeaponMp.prototype.doesWeaponTakeWeaponComponent = function(weaponHash, componentHash) {};

/**
 * @param {boolean} toggle
 * @return {void}
 */
GameWeaponMp.prototype.enableLaserSightRendering = function(toggle) {};

/**
 * @param {number} weaponHash
 * @return {number}
 */
GameWeaponMp.prototype.getWeaponClipSize = function(weaponHash) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {boolean}
 */
GameWeaponMp.prototype.getWeaponComponentHudStats = function(p0, p1) {};

/**
 * @param {number} componentHash
 * @return {number}
 */
GameWeaponMp.prototype.getWeaponComponentTypeModel = function(componentHash) {};

/**
 * @param {number} weaponHash
 * @return {number}
 */
GameWeaponMp.prototype.getWeaponDamageType = function(weaponHash) {};

/**
 * @param {number} weaponHash
 * @param {{hudDamage: number, hudSpeed: number, hudCapacity: number, hudAccuracy: number, hudRange: number}} data
 * @return {boolean}
 */
GameWeaponMp.prototype.getWeaponHudStats = function(weaponHash, data) {};

/**
 * @param {!EntityMp} weapon
 * @return {number}
 */
GameWeaponMp.prototype.getWeaponObjectTintIndex = function(weapon) {};

/**
 * @param {number} weaponHash
 * @return {number}
 */
GameWeaponMp.prototype.getWeaponTintCount = function(weaponHash) {};

/**
 * @param {number} weaponHash
 * @return {number}
 */
GameWeaponMp.prototype.getWeapontypeGroup = function(weaponHash) {};

/**
 * @param {number} weaponHash
 * @return {number}
 */
GameWeaponMp.prototype.getWeapontypeModel = function(weaponHash) {};

/**
 * @param {number} weaponHash
 * @return {number}
 */
GameWeaponMp.prototype.getWeapontypeSlot = function(weaponHash) {};

/**
 * @param {number} weaponObject
 * @param {number} addonHash
 * @return {void}
 */
GameWeaponMp.prototype.giveWeaponComponentToWeaponObject = function(weaponObject, addonHash) {};

/**
 * @param {number} weaponObject
 * @param {number} ped
 * @return {void}
 */
GameWeaponMp.prototype.giveWeaponObjectToPed = function(weaponObject, ped) {};

/**
 * @param {number} driver
 * @param {number} vehicle
 * @param {number} weapon
 * @param {?} p3
 * @return {boolean}
 */
GameWeaponMp.prototype.hasVehicleGotProjectileAttached = function(driver, vehicle, weapon, p3) {};

/**
 * @param {number} weaponHash
 * @return {boolean}
 */
GameWeaponMp.prototype.hasWeaponAssetLoaded = function(weaponHash) {};

/**
 * @param {number} weapon
 * @param {number} addonHash
 * @return {boolean}
 */
GameWeaponMp.prototype.hasWeaponGotWeaponComponent = function(weapon, addonHash) {};

/**
 * @param {number} weaponHash
 * @return {boolean}
 */
GameWeaponMp.prototype.isWeaponValid = function(weaponHash) {};

/**
 * @param {number} weaponhash
 * @param {boolean} p1
 * @return {void}
 */
GameWeaponMp.prototype.removeAllProjectilesOfType = function(weaponhash, p1) {};

/**
 * @param {number} weaponHash
 * @return {void}
 */
GameWeaponMp.prototype.removeWeaponAsset = function(weaponHash) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {void}
 */
GameWeaponMp.prototype.removeWeaponComponentFromWeaponObject = function(p0, p1) {};

/**
 * @param {number} weaponHash
 * @param {number} p1
 * @param {number} p2
 * @return {void}
 */
GameWeaponMp.prototype.requestWeaponAsset = function(weaponHash, p1, p2) {};

/**
 * @param {number} weaponObject
 * @return {void}
 */
GameWeaponMp.prototype.requestWeaponHighDetailModel = function(weaponObject) {};

/**
 * @param {number} distance
 * @return {void}
 */
GameWeaponMp.prototype.setFlashLightFadeDistance = function(distance) {};

/**
 * @param {?} p0
 * @param {?} p1
 * @return {void}
 */
GameWeaponMp.prototype.setPedAmmoToDrop = function(p0, p1) {};

/**
 * @param {!EntityMp} weapon
 * @param {number} tint
 * @return {void}
 */
GameWeaponMp.prototype.setWeaponObjectTintIndex = function(weapon, tint) {};
/**
 * @record
 * @struct
 */
function GameWorldprobeMp() {}

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {number} flags
 * @param {!EntityMp} ignoreEntity
 * @param {number} p8
 * @return {number}
 */
GameWorldprobeMp.prototype.castRayPointToPoint = function(x1, y1, z1, x2, y2, z2, flags, ignoreEntity, p8) {};

/**
 * @param {number} rayHandle
 * @param {boolean} hit
 * @param {function(new: (?), number, number, number): ?} endCoords
 * @param {function(new: (?), number, number, number): ?} surfaceNormal
 * @param {!EntityMp} entityHit
 * @return {{hit: boolean, endCoords: function(new: (?), number, number, number): ?, surfaceNormal: ?, entityHit: !EntityMp}}
 */
GameWorldprobeMp.prototype.getShapeTestResult = function(rayHandle, hit, endCoords, surfaceNormal, entityHit) {};

/**
 * @param {number} rayHandle
 * @param {boolean} hit
 * @param {function(new: (?), number, number, number): ?} endCoords
 * @param {function(new: (?), number, number, number): ?} surfaceNormal
 * @param {number} materialHash
 * @param {!EntityMp} entityHit
 * @return {{hit: boolean, endCoords: function(new: (?), number, number, number): ?, surfaceNormal: ?, materialHash: number, entityHit: !EntityMp}}
 */
GameWorldprobeMp.prototype.getShapeTestResultEx = function(rayHandle, hit, endCoords, surfaceNormal, materialHash, entityHit) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {?} p9
 * @param {?} p10
 * @param {!EntityMp} ignoreEntity
 * @param {?} p12
 * @return {number}
 */
GameWorldprobeMp.prototype.startShapeTestBox = function(x1, y1, z1, x2, y2, z2, rotX, rotY, rotZ, p9, p10, ignoreEntity, p12) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {number} radius
 * @param {number} flags
 * @param {!EntityMp} ignoreEntity
 * @param {number} p9
 * @return {number}
 */
GameWorldprobeMp.prototype.startShapeTestCapsule = function(x1, y1, z1, x2, y2, z2, radius, flags, ignoreEntity, p9) {};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @param {number} flags
 * @param {!EntityMp} ignoreEntity
 * @param {number} p8
 * @return {number}
 */
GameWorldprobeMp.prototype.startShapeTestLosProbe = function(x1, y1, z1, x2, y2, z2, flags, ignoreEntity, p8) {};
/**
 * @record
 * @struct
 */
function GameZoneMp() {}

/**
 * @param {number} scheduleId
 * @return {void}
 */
GameZoneMp.prototype.clearPopscheduleOverrideVehicleModel = function(scheduleId) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number|string}
 */
GameZoneMp.prototype.getHashOfMapAreaAtCoords = function(x, y, z) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
GameZoneMp.prototype.getZoneAtCoords = function(x, y, z) {};

/**
 * @param {string} zoneName
 * @return {number}
 */
GameZoneMp.prototype.getZoneFromNameId = function(zoneName) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {string}
 */
GameZoneMp.prototype.getNameOfZone = function(x, y, z) {};

/**
 * @param {number} zoneId
 * @return {number}
 */
GameZoneMp.prototype.getZonePopschedule = function(zoneId) {};

/**
 * @param {number} zoneId
 * @return {number}
 */
GameZoneMp.prototype.getZoneScumminess = function(zoneId) {};

/**
 * @param {number} scheduleId
 * @param {number|string} vehicleHash
 * @return {void}
 */
GameZoneMp.prototype.overridePopscheduleVehicleModel = function(scheduleId, vehicleHash) {};

/**
 * @param {number} zoneId
 * @param {boolean} toggle
 * @return {void}
 */
GameZoneMp.prototype.setZoneEnabled = function(zoneId, toggle) {};
/**
 * @record
 * @struct
 */
function GuiChatMp() {}
/** @type {boolean} */
GuiChatMp.prototype.colors;
/** @type {boolean} */
GuiChatMp.prototype.safe;

/**
 * @param {boolean} state
 * @return {void}
 */
GuiChatMp.prototype.activate = function(state) {};

/**
 * @param {string} text
 * @return {void}
 */
GuiChatMp.prototype.push = function(text) {};

/**
 * @param {boolean} state
 * @return {void}
 */
GuiChatMp.prototype.show = function(state) {};
/**
 * @record
 * @struct
 */
function GuiCursorMp() {}
/** @type {!Array<?>} */
GuiCursorMp.prototype.position;
/** @type {boolean} */
GuiCursorMp.prototype.visible;

/**
 * @param {boolean} state
 * @param {boolean} freezeControls
 * @return {void}
 */
GuiCursorMp.prototype.show = function(state, freezeControls) {};
/**
 * @extends {EntityMpPool}
 * @record
 * @struct
 */
function BlipMpPool() {}

/**
 * @param {number} sprite
 * @param {function(new: (?), number, number, number): ?} position
 * @param {{alpha: number, color: number, dimension: number, drawDistance: number, name: string, rotation: number, scale: number, shortRange: boolean}=} options
 * @return {!BlipMp}
 */
BlipMpPool.prototype.new = function(sprite, position, options) {};
/**
 * @extends {EntityMpPool}
 * @record
 * @struct
 */
function BrowserMpPool() {}

/**
 * @param {string} url
 * @return {!BrowserMp}
 */
BrowserMpPool.prototype.new = function(url) {};
/**
 * @extends {EntityMpPool}
 * @record
 * @struct
 */
function CameraMpPool() {}

/**
 * @param {string} name
 * @param {function(new: (?), number, number, number): ?=} position
 * @param {function(new: (?), number, number, number): ?=} rotation
 * @param {number=} fov
 * @return {!CameraMp}
 */
CameraMpPool.prototype.new = function(name, position, rotation, fov) {};
/**
 * @extends {EntityMpPool}
 * @record
 * @struct
 */
function CheckpointMpPool() {}

/**
 * @param {number} type
 * @param {function(new: (?), number, number, number): ?} position
 * @param {number} radius
 * @param {{color: !Array<?>, dimension: number, direction: function(new: (?), number, number, number): ?, visible: boolean}=} options
 * @return {!CheckpointMp}
 */
CheckpointMpPool.prototype.new = function(type, position, radius, options) {};
/**
 * @extends {EntityMpPool}
 * @record
 * @struct
 */
function ColshapeMpPool() {}

/**
 * @param {number} x
 * @param {number} y
 * @param {number} range
 * @return {!ColshapeMp}
 */
ColshapeMpPool.prototype.newCircle = function(x, y, range) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} width
 * @param {number} depth
 * @param {number} height
 * @return {!ColshapeMp}
 */
ColshapeMpPool.prototype.newCuboid = function(x, y, z, width, depth, height) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @return {!ColshapeMp}
 */
ColshapeMpPool.prototype.newRectangle = function(x, y, width, height) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} range
 * @return {!ColshapeMp}
 */
ColshapeMpPool.prototype.newSphere = function(x, y, z, range) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} range
 * @param {number} height
 * @return {!ColshapeMp}
 */
ColshapeMpPool.prototype.newTube = function(x, y, z, range, height) {};
/**
 * @template TEntity
 * @record
 * @struct
 */
function EntityMpPool() {}
/** @type {number} */
EntityMpPool.prototype.length;
/** @type {number} */
EntityMpPool.prototype.size;

/**
 * @param {function(...?): void} fn
 * @param {...?} args
 * @return {void}
 */
EntityMpPool.prototype.apply = function(fn, args) {};

/**
 * @param {number} index
 * @return {TEntity}
 */
EntityMpPool.prototype.at = function(index) {};

/**
 * @param {number} handle
 * @return {TEntity}
 */
EntityMpPool.prototype.atHandle = function(handle) {};

/**
 * @param {number} remoteId
 * @return {TEntity}
 */
EntityMpPool.prototype.atRemoteId = function(remoteId) {};

/**
 * @param {(number|TEntity)} entity
 * @return {boolean}
 */
EntityMpPool.prototype.exists = function(entity) {};

/**
 * @param {function(TEntity): void} fn
 * @return {void}
 */
EntityMpPool.prototype.forEach = function(fn) {};

/**
 * @param {function(new: (?), number, number, number): ?} position
 * @param {number} range
 * @param {function(TEntity): void} fn
 * @return {void}
 */
EntityMpPool.prototype.forEachInRange = function(position, range, fn) {};

/**
 * @param {function(new: (?), number, number, number): ?} position
 * @param {number} range
 * @param {number} dimension
 * @param {function(TEntity): void} fn
 * @return {void}
 */
EntityMpPool.prototype.forEachInDimension = function(position, range, dimension, fn) {};

/**
 * @param {function(TEntity): void} fn
 * @return {void}
 */
EntityMpPool.prototype.forEachInStreamRange = function(fn) {};

/**
 * @return {!Array<TEntity>}
 */
EntityMpPool.prototype.toArray = function() {};
/**
 * @record
 * @struct
 */
function EventMpPool() {}

/**
 * @param {string} keyName
 * @param {function(...?): void} callback
 * @return {void}
 */
EventMpPool.prototype.addDataHandler = function(keyName, callback) {};

/**
 * @param {string|!Object<string,function(...?): void>} eventName_or_events
 * @param {function(...?): void=} callback
 * @return {void}
 */
EventMpPool.prototype.add = function(eventName_or_events, callback) {};

/**
 * @param {string} eventName
 * @param {...?} args
 * @return {void}
 */
EventMpPool.prototype.call = function(eventName, args) {};

/**
 * @param {string} eventName
 * @param {...?} args
 * @return {void}
 */
EventMpPool.prototype.callRemote = function(eventName, args) {};

/**
 * @param {string|!Array<string>} eventName_or_eventNames
 * @param {function(...?): void=} handler
 * @return {void}
 */
EventMpPool.prototype.remove = function(eventName_or_eventNames, handler) {};
/**
 * @extends {EntityMpPool}
 * @record
 * @struct
 */
function MarkerMpPool() {}

/**
 * @param {number} type
 * @param {function(new: (?), number, number, number): ?} position
 * @param {number} scale
 * @param {{bobUpAndDown: boolean, color: !Array<?>, dimension: number, direction: function(new: (?), number, number, number): ?, rotation: ?, visible: boolean}=} options
 * @return {!MarkerMp}
 */
MarkerMpPool.prototype.new = function(type, position, scale, options) {};
/**
 * @extends {EntityMpPool}
 * @record
 * @struct
 */
function ObjectMpPool() {}

/**
 * @param {number} model
 * @param {function(new: (?), number, number, number): ?} position
 * @param {{alpha: number, dimension: number, rotation: function(new: (?), number, number, number): ?}=} options
 * @return {!ObjectMp}
 */
ObjectMpPool.prototype.new = function(model, position, options) {};
/**
 * @extends {EntityMpPool}
 * @record
 * @struct
 */
function PedMpPool() {}

/**
 * @param {number} model
 * @param {function(new: (?), number, number, number): ?} position
 * @param {number} heading
 * @param {function(!PedMp): void=} streamInEventHandler
 * @param {number=} dimension
 * @return {!PedMp}
 */
PedMpPool.prototype.new = function(model, position, heading, streamInEventHandler, dimension) {};
/**
 * @extends {EntityMpPool}
 * @record
 * @struct
 */
function PickupMpPool() {}

/**
 * @param {...?} args
 * @return {!PickupMp}
 */
PickupMpPool.prototype.new = function(args) {};
/**
 * @extends {EntityMpPool}
 * @record
 * @struct
 */
function PlayerMpPool() {}
/** @type {!PlayerMp} */
PlayerMpPool.prototype.local;
/**
 * @extends {EntityMpPool}
 * @record
 * @struct
 */
function TextLabelMpPool() {}

/**
 * @param {string} text
 * @param {function(new: (?), number, number, number): ?} position
 * @param {{color: !Array<?>, dimension: number, drawDistance: number, font: number, los: boolean}=} options
 * @return {!TextLabelMp}
 */
TextLabelMpPool.prototype.new = function(text, position, options) {};
/**
 * @extends {EntityMpPool}
 * @record
 * @struct
 */
function VehicleMpPool() {}

/**
 * @param {number} model
 * @param {function(new: (?), number, number, number): ?} position
 * @param {{alpha: number, color: !Array<?>, dimension: number, engine: boolean, heading: number, locked: boolean, numberPlate: string}=} options
 * @return {!VehicleMp}
 */
VehicleMpPool.prototype.new = function(model, position, options) {};

/** @typedef {function(new: (?), number, number, number): ?} */
var Vector3Mp;

/** @typedef {function(new: (function(new: (?), number, number, number): ?), number, number, number, number): ?} */
var QuaternionMp;

/** @typedef {{entity: !EntityMp, position: function(new: (?), number, number, number): ?, surfaceNormal: ?}} */
var RaycastResult;
/** @type {{blips: !BlipMpPool, browsers: !BrowserMpPool, cameras: !CameraMpPool, checkpoints: !CheckpointMpPool, colshapes: !ColshapeMpPool, discord: !DiscordMp, events: !EventMpPool, game: {app: !GameAppMp, audio: !GameAudioMp, brain: !GameBrainMp, cam: !GameCamMp, controls: !GameControlsMp, cutscene: !GameCutsceneMp, datafile: !GameDatafileMp, decisionevent: !GameDecisioneventMp, decorator: !GameDecoratorMp, dlc1: !GameDlc1Mp, dlc2: !GameDlc2Mp, entity: !GameEntityMp, fire: !GameFireMp, gameplay: !GameGameplayMp, graphics: !GameGraphicsMp, interior: !GameInteriorMp, itemset: !GameItemsetMp, mobile: !GameMobileMp, object: !GameObjectMp, pathfind: !GamePathfindMp, ped: !GamePedMp, player: !GamePlayerMp, rope: !GameRopeMp, script: !GameScriptMp, stats: !GameStatsMp, streaming: !GameStreamingMp, system: !GameSystemMp, time: !GameTimeMp, ui: !GameUiMp, unk: !GameUnkMp, recorder: !GameRecorderMp, vehicle: !GameVehicleMp, water: !GameWaterMp, weapon: !GameWeaponMp, worldprobe: !GameWorldprobeMp, zone: !GameZoneMp, invoke: function(string, ...?): ?, joaat: ?}, gui: {chat: !GuiChatMp, cursor: !GuiCursorMp, execute: function(string): void, takeScreenshot: function(string, number, number, number): void}, keys: !KeysMp, labels: !TextLabelMpPool, markers: !MarkerMpPool, nametags: !NametagsMp, objects: !ObjectMpPool, peds: !PedMpPool, pickups: !PickupMpPool, players: !PlayerMpPool, raycasting: !RaycastingMp, storage: !StorageMp, Vector3: function(new: (?), number, number, number): ?, vehicles: !VehicleMpPool, voiceChat: !VoiceChatMp}} */
var mp;
