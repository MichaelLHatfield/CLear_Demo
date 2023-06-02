//=============================================================================
// VisuStella MZ - Animated Map Destination
// VisuMZ_4_AnimatedMapDest.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_AnimatedMapDest = true;

var VisuMZ = VisuMZ || {};
VisuMZ.AnimatedMapDest = VisuMZ.AnimatedMapDest || {};
VisuMZ.AnimatedMapDest.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.02] [AnimatedMapDest]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Animated_Map_Destination_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * When the player clicks on the map, the player sets a destination for the
 * player character to move to. This destination is, by default, marked with a
 * white square sprite that flashes over and over. This aesthetic does not
 * necessarily fit every type of game project so this plugin will allow you to
 * customize it.
 *
 * You can change the way the square sprite looks, change it into a circle, use
 * an image file, or even use an animation file. There are various properties
 * for each of these settings, too.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Change the animated map destination sprite into a graphic of your choice
 *   ranging from squares, circles, images, and animations.
 * * Change the colors used for square and circle sprites.
 * * Select a custom image used for the image sprites.
 * * Or use an animation from the database of your choice.
 * * Change the scale and rotation speed of the map destination sprite.
 * * Be able to control these settings mid-game.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Alter Destination Type
 * - Alter the destination animation type.
 *
 *   Sprite Type:
 *   - Change the sprite type to this.
 *   - None - No effect
 *   - Animation - Uses an animation from the database
 *   - Circle - Drawn circle effect
 *   - Image - Uses a custom image from img/system/
 *   - Square - Default box-like effect
 *
 * ---
 *
 * System: Change Animation Settings
 * - Change settings used for a 'Animation' Sprite Type.
 * 
 *   Animation ID:
 *   - Select an animation to play.
 * 
 *   Mirror Animation?:
 *   - Mirror the animation played?
 * 
 *   Mute SFX?:
 *   - Mute any sound effects played by the animation?
 *
 * ---
 *
 * System: Change Circle Settings
 * - Change settings used for a 'Circle' Sprite Type.
 * 
 *   Hex Color:
 *   - Use #rrggbb for a hex color.
 * 
 *   Blend Mode:
 *   - The blend mode used for the sprite.
 * 
 *   Opacity Multiplier:
 *   - Alter the opacity of the sprite as it animates.
 * 
 *   Scale Multiplier:
 *   - Increase the size of this sprite by a scale.
 *   - Use a value of 1.0 for 100% scale.
 *
 * ---
 *
 * System: Change Image Settings
 * - Change settings used for a 'Image' Sprite Type.
 * 
 *   Filename:
 *   - Select an image from img/system/ to use as the sprite's bitmap.
 * 
 *   Blend Mode:
 *   - The blend mode used for the sprite.
 * 
 *   Opacity Multiplier:
 *   - Alter the opacity of the sprite as it animates.
 * 
 *   Rotate Speed:
 *   - Rotation speed for the sprite.
 *   - Use 0 for no rotation.
 * 
 *   Scale Multiplier:
 *   - Increase the size of this sprite by a scale.
 *   - Use a value of 1.0 for 100% scale.
 *
 * ---
 *
 * System: Change Square Settings
 * - Change settings used for a 'Square' Sprite Type.
 * 
 *   Hex Color:
 *   - Use #rrggbb for a hex color.
 * 
 *   Blend Mode:
 *   - The blend mode used for the sprite.
 * 
 *   Opacity Multiplier:
 *   - Alter the opacity of the sprite as it animates.
 * 
 *   Rotate Speed:
 *   - Rotation speed for the sprite.
 *   - Use 0 for no rotation.
 * 
 *   Scale Multiplier:
 *   - Increase the size of this sprite by a scale.
 *   - Use a value of 1.0 for 100% scale.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These plugin parameters allow you to adjust how the animated map destination
 * sprite appears in-game.
 *
 * ---
 *
 * Sprite Type
 * 
 *   None - No effect
 *   Square - Default box-like effect
 *   Circle - Drawn circle effect
 *   Image - Uses a custom image from img/system/
 *   Animation - Uses an animation from the database
 *   - This is the type of animated map destination used in-game.
 *
 * ---
 *
 * Animation Settings
 * - Settings used for a 'Animation' Sprite Type.
 * 
 *   Animation ID:
 *   - Select an animation to play.
 * 
 *   Mirror Animation?:
 *   - Mirror the animation played?
 * 
 *   Mute SFX?:
 *   - Mute any sound effects played by the animation?
 *
 * ---
 *
 * Circle Settings
 * - Settings used for a 'Circle' Sprite Type.
 * 
 *   Hex Color:
 *   - Use #rrggbb for a hex color.
 * 
 *   Blend Mode:
 *   - The blend mode used for the sprite.
 * 
 *   Opacity Multiplier:
 *   - Alter the opacity of the sprite as it animates.
 * 
 *   Scale Multiplier:
 *   - Increase the size of this sprite by a scale.
 *   - Use a value of 1.0 for 100% scale.
 *
 * ---
 *
 * Image Settings
 * - Settings used for a 'Image' Sprite Type.
 * 
 *   Filename:
 *   - Select an image from img/system/ to use as the sprite's bitmap.
 * 
 *   Blend Mode:
 *   - The blend mode used for the sprite.
 * 
 *   Opacity Multiplier:
 *   - Alter the opacity of the sprite as it animates.
 * 
 *   Rotate Speed:
 *   - Rotation speed for the sprite.
 *   - Use 0 for no rotation.
 * 
 *   Scale Multiplier:
 *   - Increase the size of this sprite by a scale.
 *   - Use a value of 1.0 for 100% scale.
 *
 * ---
 *
 * Square Settings
 * - Settings used for a 'Square' Sprite Type.
 * 
 *   Hex Color:
 *   - Use #rrggbb for a hex color.
 * 
 *   Blend Mode:
 *   - The blend mode used for the sprite.
 * 
 *   Opacity Multiplier:
 *   - Alter the opacity of the sprite as it animates.
 * 
 *   Rotate Speed:
 *   - Rotation speed for the sprite.
 *   - Use 0 for no rotation.
 * 
 *   Scale Multiplier:
 *   - Increase the size of this sprite by a scale.
 *   - Use a value of 1.0 for 100% scale.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.02: December 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MV animations will no longer crash for unplayable sound
 *    effects. Fix made by Yanfly.
 * 
 * Version 1.01: October 11, 2020
 * * Bug Fixes!
 * ** Image style will no longer be removed from cache upon changing scenes.
 *    Fix made by Yanfly.
 *
 * Version 1.00: October 2, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DestinationType
 * @text System: Alter Destination Type
 * @desc Alter the destination animation type.
 *
 * @arg SpriteType:str
 * @text Sprite Type
 * @type select
 * @option None - No effect
 * @value none
 * @option Animation - Uses an animation from the database
 * @value animation
 * @option Circle - Drawn circle effect
 * @value circle
 * @option Image - Uses a custom image from img/system/
 * @value image
 * @option Square - Default box-like effect
 * @value square
 * @desc Change the sprite type to this.
 * @default animation
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SetSettingsAnimation
 * @text System: Change Animation Settings
 * @desc Change settings used for a 'Animation' Sprite Type.
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @type animation
 * @desc Select an animation to play.
 * @default 12
 *
 * @arg Mirror:eval
 * @text Mirror Animation?
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the animation played?
 * @default false
 *
 * @arg Mute:eval
 * @text Mute SFX?
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute any sound effects played by the animation?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SetSettingsCircle
 * @text System: Change Circle Settings
 * @desc Change settings used for a 'Circle' Sprite Type.
 *
 * @arg HexColor:str
 * @text Hex Color
 * @desc Use #rrggbb for a hex color.
 * @default #ffffff
 *
 * @arg BlendMode:num
 * @text Blend Mode
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used for the sprite.
 * @default 1
 *
 * @arg OpacityMultiplier:num
 * @text Opacity Multiplier
 * @desc Alter the opacity of the sprite as it animates.
 * @default 1.0
 *
 * @arg ScaleMultiplier:num
 * @text Scale Multiplier
 * @desc Increase the size of this sprite by a scale.
 * Use a value of 1.0 for 100% scale.
 * @default 1.0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SetSettingsImage
 * @text System: Change Image Settings
 * @desc Change settings used for a 'Image' Sprite Type.
 *
 * @arg Filename:str
 * @text Filename
 * @type file
 * @dir img/system/
 * @desc Select an image from img/system/ to use as the sprite's bitmap.
 * @default 
 *
 * @arg BlendMode:num
 * @text Blend Mode
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used for the sprite.
 * @default 1
 *
 * @arg OpacityMultiplier:num
 * @text Opacity Multiplier
 * @desc Alter the opacity of the sprite as it animates.
 * @default 2.0
 *
 * @arg RotateSpeed:num
 * @text Rotate Speed
 * @desc Rotation speed for the sprite.
 * Use 0 for no rotation.
 * @default 0.1
 *
 * @arg ScaleMultiplier:num
 * @text Scale Multiplier
 * @desc Increase the size of this sprite by a scale.
 * Use a value of 1.0 for 100% scale.
 * @default 1.0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SetSettingsSquare
 * @text System: Change Square Settings
 * @desc Change settings used for a 'Square' Sprite Type.
 *
 * @arg HexColor:str
 * @text Hex Color
 * @desc Use #rrggbb for a hex color.
 * @default #ffffff
 *
 * @arg BlendMode:num
 * @text Blend Mode
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used for the sprite.
 * @default 1
 *
 * @arg OpacityMultiplier:num
 * @text Opacity Multiplier
 * @desc Alter the opacity of the sprite as it animates.
 * @default 1.0
 *
 * @arg RotateSpeed:num
 * @text Rotate Speed
 * @desc Rotation speed for the sprite.
 * Use 0 for no rotation.
 * @default 0.1
 *
 * @arg ScaleMultiplier:num
 * @text Scale Multiplier
 * @desc Increase the size of this sprite by a scale.
 * Use a value of 1.0 for 100% scale.
 * @default 1.0
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param AnimatedMapDest
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param SpriteType:str
 * @text Sprite Type
 * @type select
 * @option None - No effect
 * @value none
 * @option Animation - Uses an animation from the database
 * @value animation
 * @option Circle - Drawn circle effect
 * @value circle
 * @option Image - Uses a custom image from img/system/
 * @value image
 * @option Square - Default box-like effect
 * @value square
 * @desc This is the type of animated map destination used in-game.
 * @default animation
 *
 * @param Animation:struct
 * @text Animation Settings
 * @type struct<Animation>
 * @parent SpriteType:str
 * @desc Settings used for an 'Animation' Sprite Type.
 * @default {"AnimationID:num":"12","Mirror:eval":"false","Mute:eval":"true"}
 *
 * @param Circle:struct
 * @text Circle Settings
 * @type struct<Circle>
 * @parent SpriteType:str
 * @desc Settings used for a 'Circle' Sprite Type.
 * @default {"HexColor:str":"#ffffff","BlendMode:num":"1","OpacityMultiplier:num":"1.0","ScaleMultiplier:num":"1.0"}
 *
 * @param Image:struct
 * @text Image Settings
 * @type struct<Image>
 * @parent SpriteType:str
 * @desc Settings used for an 'Image' Sprite Type.
 * @default {"Filename:str":"","BlendMode:num":"1","OpacityMultiplier:num":"2.0","RotateSpeed:num":"0.1","ScaleMultiplier:num":"1.0"}
 *
 * @param Square:struct
 * @text Square Settings
 * @type struct<Square>
 * @parent SpriteType:str
 * @desc Settings used for a 'Square' Sprite Type.
 * @default {"HexColor:str":"#ffffff","BlendMode:num":"1","OpacityMultiplier:num":"1.0","RotateSpeed:num":"0.1","ScaleMultiplier:num":"1.0"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Square Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Square:
 *
 * @param HexColor:str
 * @text Hex Color
 * @desc Use #rrggbb for a hex color.
 * @default #ffffff
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used for the sprite.
 * @default 1
 *
 * @param OpacityMultiplier:num
 * @text Opacity Multiplier
 * @desc Alter the opacity of the sprite as it animates.
 * @default 1.0
 *
 * @param RotateSpeed:num
 * @text Rotate Speed
 * @desc Rotation speed for the sprite.
 * Use 0 for no rotation.
 * @default 0.1
 *
 * @param ScaleMultiplier:num
 * @text Scale Multiplier
 * @desc Increase the size of this sprite by a scale.
 * Use a value of 1.0 for 100% scale.
 * @default 1.0
 *
 */
/* ----------------------------------------------------------------------------
 * Circle Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Circle:
 *
 * @param HexColor:str
 * @text Hex Color
 * @desc Use #rrggbb for a hex color.
 * @default #ffffff
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used for the sprite.
 * @default 1
 *
 * @param OpacityMultiplier:num
 * @text Opacity Multiplier
 * @desc Alter the opacity of the sprite as it animates.
 * @default 1.0
 *
 * @param ScaleMultiplier:num
 * @text Scale Multiplier
 * @desc Increase the size of this sprite by a scale.
 * Use a value of 1.0 for 100% scale.
 * @default 1.0
 *
 */
/* ----------------------------------------------------------------------------
 * Image Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Image:
 *
 * @param Filename:str
 * @text Filename
 * @type file
 * @dir img/system/
 * @desc Select an image from img/system/ to use as the sprite's bitmap.
 * @default 
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used for the sprite.
 * @default 1
 *
 * @param OpacityMultiplier:num
 * @text Opacity Multiplier
 * @desc Alter the opacity of the sprite as it animates.
 * @default 2.0
 *
 * @param RotateSpeed:num
 * @text Rotate Speed
 * @desc Rotation speed for the sprite.
 * Use 0 for no rotation.
 * @default 0.1
 *
 * @param ScaleMultiplier:num
 * @text Scale Multiplier
 * @desc Increase the size of this sprite by a scale.
 * Use a value of 1.0 for 100% scale.
 * @default 1.0
 *
 */
/* ----------------------------------------------------------------------------
 * Animation Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Animation:
 *
 * @param AnimationID:num
 * @text Animation ID
 * @type animation
 * @desc Select an animation to play.
 * @default 12
 *
 * @param Mirror:eval
 * @text Mirror Animation?
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the animation played?
 * @default false
 *
 * @param Mute:eval
 * @text Mute SFX?
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute any sound effects played by the animation?
 * @default true
 *
 */
//=============================================================================

const _0x1ac4=['createEmptyBitmap','destroy','processDestinationAnimationRequests','fillAll','Circle','targets','setup','blendMode','MapDest','createImageBitmap','setMute','max','tileHeight','ConvertParams','opacity','ARRAYFUNC','iYlnT','csCaX','removeAllDestinationAnimations','trim','square','tileWidth','createDestinationAnimationSprite','exit','endAnimation','Spriteset_Base_initialize','nQtCS','shift','Spriteset_Base_destroy','isAnimationForEach','OpacityMultiplier','push','createDestinationAnimation','QpdNE','VwKtK','rotation','targetObjects','_muteSound','length','drawCircle','anchor','filter','Game_System_initialize','requestDestinationAnimation','description','_destinationAnimationSprites','xPedS','Mute','parameters','BlendMode','initAnimatedMapDest','JSON','_imageFilename','version','_destinationAnimationQueue','getAnimatedMapDestinationSettings','constructor','remove','status','cglaG','Hoocs','isDestinationAnimationPlaying','updateDestinationAnimations','parse','STRUCT','qtpjd','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','HexColor','image','IWxGc','Sprite_AnimationMV_processTimingData','addChild','prototype','_scene','updateAnimation','CrTqG','update','Mirror','Settings','createSquareBitmap','processSoundTimings','none','STR','return\x200','loadSystem','Image','updateAnimationType','updateScale','AnimationID','AnimatedMapDest','bitmap','Game_Temp_initialize','EVAL','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','updateOpacity','removeDestinationAnimation','isPlaying','FMNfr','vLBEt','name','Filename','ARRAYNUM','toLowerCase','_AnimatedMapDest','animationNextDelay','rotationSpeed','DestinationType','createCircleBitmap','GYbOY','ARRAYEVAL','scale','ARRAYSTRUCT','registerCommand','startAnimation','UpdateDestinationSprite','mirror','NUM','ZodMY','includes','match','FaEvh','ARRAYSTR','circle','isMVAnimation','animation','opacityMultiplier','scaleMultiplier','format','Sprite_Destination_updateAnimation','makeDeepCopy','MtWUU','call','RotateSpeed','FqcRa','SetSettingsCircle','Spriteset_Base_update','toUpperCase','ScaleMultiplier','animationShouldMirror','processTimingData','Animation','FUNC','dmUTS','initialize','_effectsContainer','_spriteset','createBitmap','createDefaults','createAnimationBitmap','SpriteType','removeChild','isSceneMap','map','updateRotation','Sprite_Animation_processSoundTimings'];(function(_0x268832,_0xa0c9a){const _0x1ac44a=function(_0x367927){while(--_0x367927){_0x268832['push'](_0x268832['shift']());}};_0x1ac44a(++_0xa0c9a);}(_0x1ac4,0x181));const _0x3679=function(_0x268832,_0xa0c9a){_0x268832=_0x268832-0x18f;let _0x1ac44a=_0x1ac4[_0x268832];return _0x1ac44a;};const _0x3e34e1=_0x3679;var label='AnimatedMapDest',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x3e34e1(0x208)](function(_0x55a8f2){const _0x591093=_0x3e34e1;return _0x55a8f2[_0x591093(0x219)]&&_0x55a8f2[_0x591093(0x20b)]['includes']('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label]['Settings']||{},VisuMZ[_0x3e34e1(0x1ec)]=function(_0x5eacc0,_0x101de9){const _0x25ec1e=_0x3e34e1;for(const _0x46e47c in _0x101de9){if(_0x25ec1e(0x1c9)!==_0x25ec1e(0x1c9)){function _0x483c84(){const _0x38acab=_0x25ec1e;!_0x42088d[_0x38acab(0x1a4)]()&&this[_0x38acab(0x1a3)](_0x538e62);}}else{if(_0x46e47c['match'](/(.*):(.*)/i)){if('cglaG'===_0x25ec1e(0x21a)){const _0x54e284=String(RegExp['$1']),_0x57df52=String(RegExp['$2'])[_0x25ec1e(0x1cc)]()[_0x25ec1e(0x1f2)]();let _0x97d198,_0x2e8621,_0x23538d;switch(_0x57df52){case _0x25ec1e(0x1b8):_0x97d198=_0x101de9[_0x46e47c]!==''?Number(_0x101de9[_0x46e47c]):0x0;break;case _0x25ec1e(0x1a9):_0x2e8621=_0x101de9[_0x46e47c]!==''?JSON[_0x25ec1e(0x21e)](_0x101de9[_0x46e47c]):[],_0x97d198=_0x2e8621['map'](_0x2db1b3=>Number(_0x2db1b3));break;case _0x25ec1e(0x1a0):_0x97d198=_0x101de9[_0x46e47c]!==''?eval(_0x101de9[_0x46e47c]):null;break;case _0x25ec1e(0x1b1):_0x2e8621=_0x101de9[_0x46e47c]!==''?JSON[_0x25ec1e(0x21e)](_0x101de9[_0x46e47c]):[],_0x97d198=_0x2e8621[_0x25ec1e(0x1dc)](_0x1b8268=>eval(_0x1b8268));break;case _0x25ec1e(0x212):_0x97d198=_0x101de9[_0x46e47c]!==''?JSON[_0x25ec1e(0x21e)](_0x101de9[_0x46e47c]):'';break;case'ARRAYJSON':_0x2e8621=_0x101de9[_0x46e47c]!==''?JSON[_0x25ec1e(0x21e)](_0x101de9[_0x46e47c]):[],_0x97d198=_0x2e8621[_0x25ec1e(0x1dc)](_0x358371=>JSON[_0x25ec1e(0x21e)](_0x358371));break;case _0x25ec1e(0x1d1):_0x97d198=_0x101de9[_0x46e47c]!==''?new Function(JSON[_0x25ec1e(0x21e)](_0x101de9[_0x46e47c])):new Function(_0x25ec1e(0x197));break;case _0x25ec1e(0x1ee):_0x2e8621=_0x101de9[_0x46e47c]!==''?JSON[_0x25ec1e(0x21e)](_0x101de9[_0x46e47c]):[],_0x97d198=_0x2e8621[_0x25ec1e(0x1dc)](_0x8be31b=>new Function(JSON[_0x25ec1e(0x21e)](_0x8be31b)));break;case _0x25ec1e(0x196):_0x97d198=_0x101de9[_0x46e47c]!==''?String(_0x101de9[_0x46e47c]):'';break;case _0x25ec1e(0x1bd):_0x2e8621=_0x101de9[_0x46e47c]!==''?JSON[_0x25ec1e(0x21e)](_0x101de9[_0x46e47c]):[],_0x97d198=_0x2e8621[_0x25ec1e(0x1dc)](_0x3eea45=>String(_0x3eea45));break;case _0x25ec1e(0x21f):_0x23538d=_0x101de9[_0x46e47c]!==''?JSON[_0x25ec1e(0x21e)](_0x101de9[_0x46e47c]):{},_0x97d198=VisuMZ['ConvertParams']({},_0x23538d);break;case _0x25ec1e(0x1b3):_0x2e8621=_0x101de9[_0x46e47c]!==''?JSON[_0x25ec1e(0x21e)](_0x101de9[_0x46e47c]):[],_0x97d198=_0x2e8621[_0x25ec1e(0x1dc)](_0x199124=>VisuMZ[_0x25ec1e(0x1ec)]({},JSON[_0x25ec1e(0x21e)](_0x199124)));break;default:continue;}_0x5eacc0[_0x54e284]=_0x97d198;}else{function _0x453f5d(){const _0x302b74=_0x25ec1e,_0x581375=_0x564456['tileWidth'](),_0x3c8d1f=_0x8ba1f7[_0x302b74(0x1eb)]();this['bitmap']=new _0x2a89d3(_0x581375,_0x3c8d1f);}}}}}return _0x5eacc0;},(_0x4517e7=>{const _0x10bec5=_0x3e34e1,_0x4ebdee=_0x4517e7[_0x10bec5(0x1a7)];for(const _0x59be65 of dependencies){if(!Imported[_0x59be65]){alert(_0x10bec5(0x221)[_0x10bec5(0x1c3)](_0x4ebdee,_0x59be65)),SceneManager[_0x10bec5(0x1f6)]();break;}}const _0x43d9b0=_0x4517e7['description'];if(_0x43d9b0[_0x10bec5(0x1bb)](/\[Version[ ](.*?)\]/i)){if(_0x10bec5(0x1ef)===_0x10bec5(0x201)){function _0x430cfc(){const _0x825e3e=_0x10bec5;_0x12dd5d[_0x825e3e(0x19d)][_0x825e3e(0x1f8)][_0x825e3e(0x1c7)](this),this[_0x825e3e(0x20c)]=[];}}else{const _0x2c824f=Number(RegExp['$1']);if(_0x2c824f!==VisuMZ[label][_0x10bec5(0x214)]){if(_0x10bec5(0x20d)===_0x10bec5(0x21b)){function _0x12d4e2(){const _0x34c8bc=_0x10bec5,_0x4d925a=this[_0x34c8bc(0x1bf)](_0x1a4f8d),_0x37ed6a=new(_0x4d925a?_0x3be372:_0x142fb8)(),_0x2a48b7=_0xc02d62;this['animationShouldMirror'](_0x4f4cdc[0x0])&&(_0x1b259b=!_0x50b50b),_0x37ed6a[_0x34c8bc(0x203)]=_0x4d639d,_0x37ed6a[_0x34c8bc(0x1e5)](_0x2a48b7,_0x4d1b9d,_0x38a94b,_0x4466b3),_0x37ed6a[_0x34c8bc(0x1e9)](_0x3e9ec2),this[_0x34c8bc(0x1d4)][_0x34c8bc(0x226)](_0x37ed6a),this['_destinationAnimationSprites']['push'](_0x37ed6a);}}else alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x10bec5(0x1c3)](_0x4ebdee,_0x2c824f)),SceneManager[_0x10bec5(0x1f6)]();}}}if(_0x43d9b0[_0x10bec5(0x1bb)](/\[Tier[ ](\d+)\]/i)){const _0x246e26=Number(RegExp['$1']);if(_0x246e26<tier)alert(_0x10bec5(0x1a1)[_0x10bec5(0x1c3)](_0x4ebdee,_0x246e26,tier)),SceneManager[_0x10bec5(0x1f6)]();else{if('ZodMY'!==_0x10bec5(0x1b9)){function _0x515e0d(){const _0x273e43=_0x10bec5;_0x3359f2[_0x273e43(0x1ec)](_0x4517c,_0x4299d2);const _0x3cd1d7=_0x11d5bf['getAnimatedMapDestinationSettings']();_0x3cd1d7['Square']=_0x3aacd3[_0x273e43(0x1c5)](_0x2783f6),_0x35b9f8[_0x273e43(0x19d)][_0x273e43(0x1b6)]();}}else tier=Math[_0x10bec5(0x1ea)](_0x246e26,tier);}}VisuMZ[_0x10bec5(0x1ec)](VisuMZ[label][_0x10bec5(0x192)],_0x4517e7[_0x10bec5(0x20f)]);})(pluginData),PluginManager[_0x3e34e1(0x1b4)](pluginData[_0x3e34e1(0x1a7)],_0x3e34e1(0x1ae),_0x5f1b35=>{const _0x42daa7=_0x3e34e1;VisuMZ[_0x42daa7(0x1ec)](_0x5f1b35,_0x5f1b35);const _0x39e05f=$gameSystem['getAnimatedMapDestinationSettings']();_0x39e05f[_0x42daa7(0x1d9)]=_0x5f1b35['SpriteType'],VisuMZ['AnimatedMapDest'][_0x42daa7(0x1b6)]();}),PluginManager['registerCommand'](pluginData[_0x3e34e1(0x1a7)],'SetSettingsSquare',_0x173d24=>{const _0x55f356=_0x3e34e1;VisuMZ['ConvertParams'](_0x173d24,_0x173d24);const _0x222d27=$gameSystem[_0x55f356(0x216)]();_0x222d27['Square']=JsonEx[_0x55f356(0x1c5)](_0x173d24),VisuMZ[_0x55f356(0x19d)]['UpdateDestinationSprite']();}),PluginManager[_0x3e34e1(0x1b4)](pluginData[_0x3e34e1(0x1a7)],_0x3e34e1(0x1ca),_0x5c52a5=>{const _0x37f7a6=_0x3e34e1;VisuMZ[_0x37f7a6(0x1ec)](_0x5c52a5,_0x5c52a5);const _0x39f4ec=$gameSystem['getAnimatedMapDestinationSettings']();_0x39f4ec[_0x37f7a6(0x1e3)]=JsonEx[_0x37f7a6(0x1c5)](_0x5c52a5),VisuMZ['AnimatedMapDest']['UpdateDestinationSprite']();}),PluginManager[_0x3e34e1(0x1b4)](pluginData[_0x3e34e1(0x1a7)],'SetSettingsImage',_0x49f60e=>{const _0x3e0b6b=_0x3e34e1;VisuMZ['ConvertParams'](_0x49f60e,_0x49f60e);const _0x2fe9b4=$gameSystem[_0x3e0b6b(0x216)]();_0x2fe9b4[_0x3e0b6b(0x199)]=JsonEx[_0x3e0b6b(0x1c5)](_0x49f60e),VisuMZ[_0x3e0b6b(0x19d)][_0x3e0b6b(0x1b6)]();}),PluginManager[_0x3e34e1(0x1b4)](pluginData[_0x3e34e1(0x1a7)],'SetSettingsAnimation',_0x30d408=>{const _0x2b47aa=_0x3e34e1;VisuMZ[_0x2b47aa(0x1ec)](_0x30d408,_0x30d408);const _0x20c1fb=$gameSystem[_0x2b47aa(0x216)]();_0x20c1fb[_0x2b47aa(0x1d0)]=JsonEx[_0x2b47aa(0x1c5)](_0x30d408),VisuMZ['AnimatedMapDest'][_0x2b47aa(0x1b6)]();}),VisuMZ[_0x3e34e1(0x19d)][_0x3e34e1(0x1b6)]=function(){const _0x5b1e21=_0x3e34e1;if(!SceneManager[_0x5b1e21(0x1db)]())return;const _0xc17ca=SceneManager[_0x5b1e21(0x228)];if(!_0xc17ca)return;const _0x2f461f=_0xc17ca['_spriteset'];if(!_0x2f461f)return;const _0x5bdbe6=_0x2f461f['_destinationSprite'];if(!_0x5bdbe6)return;_0x5bdbe6[_0x5b1e21(0x1d6)]();},SceneManager['isSceneMap']=function(){const _0x2afd19=_0x3e34e1;return this[_0x2afd19(0x228)]&&this[_0x2afd19(0x228)][_0x2afd19(0x217)]===Scene_Map;},VisuMZ[_0x3e34e1(0x19d)][_0x3e34e1(0x19f)]=Game_Temp['prototype']['initialize'],Game_Temp[_0x3e34e1(0x227)][_0x3e34e1(0x1d3)]=function(){const _0x2bc4bc=_0x3e34e1;VisuMZ[_0x2bc4bc(0x19d)][_0x2bc4bc(0x19f)][_0x2bc4bc(0x1c7)](this),this['createDestinationAnimationQueue']();},Game_Temp[_0x3e34e1(0x227)]['createDestinationAnimationQueue']=function(){const _0x513233=_0x3e34e1;this[_0x513233(0x215)]=[];},Game_Temp[_0x3e34e1(0x227)][_0x3e34e1(0x20a)]=function(_0x2042aa,_0x50b40d,_0x3017ae,_0x388ca6){const _0x5afc01=_0x3e34e1;_0x3017ae=_0x3017ae||![],_0x388ca6=_0x388ca6||![];if($dataAnimations[_0x50b40d]){const _0x346328={'targets':_0x2042aa,'animationId':_0x50b40d,'mirror':_0x3017ae,'mute':_0x388ca6};this['_destinationAnimationQueue']['push'](_0x346328);for(const _0xf2d2e9 of _0x2042aa){if(_0x5afc01(0x200)===_0x5afc01(0x200))_0xf2d2e9['startAnimation']&&_0xf2d2e9['startAnimation']();else{function _0x5079ae(){const _0x4fe419=_0x5afc01;this[_0x4fe419(0x1f5)](_0x5290c4,_0x519bcc,_0x1c059d,_0x270a7f);}}}}},Game_Temp[_0x3e34e1(0x227)]['retrieveDestinationAnimation']=function(){const _0x2e866a=_0x3e34e1;return this[_0x2e866a(0x215)][_0x2e866a(0x1fa)]();},VisuMZ[_0x3e34e1(0x19d)][_0x3e34e1(0x209)]=Game_System[_0x3e34e1(0x227)][_0x3e34e1(0x1d3)],Game_System[_0x3e34e1(0x227)][_0x3e34e1(0x1d3)]=function(){const _0x36829b=_0x3e34e1;VisuMZ['AnimatedMapDest'][_0x36829b(0x209)][_0x36829b(0x1c7)](this),this[_0x36829b(0x211)]();},Game_System[_0x3e34e1(0x227)][_0x3e34e1(0x211)]=function(){const _0x152af4=_0x3e34e1,_0x36d1c6=VisuMZ[_0x152af4(0x19d)][_0x152af4(0x192)];this[_0x152af4(0x1ab)]=JsonEx[_0x152af4(0x1c5)](_0x36d1c6);},Game_System[_0x3e34e1(0x227)][_0x3e34e1(0x216)]=function(){const _0x5d187c=_0x3e34e1;if(this[_0x5d187c(0x1ab)]===undefined)this[_0x5d187c(0x211)]();return this[_0x5d187c(0x1ab)];},Sprite_Animation[_0x3e34e1(0x227)]['setMute']=function(_0x24d060){const _0x1f32cc=_0x3e34e1;this[_0x1f32cc(0x204)]=_0x24d060;},VisuMZ[_0x3e34e1(0x19d)][_0x3e34e1(0x1de)]=Sprite_Animation[_0x3e34e1(0x227)][_0x3e34e1(0x194)],Sprite_Animation[_0x3e34e1(0x227)]['processSoundTimings']=function(){const _0x1c5828=_0x3e34e1;if(this[_0x1c5828(0x204)])return;VisuMZ[_0x1c5828(0x19d)][_0x1c5828(0x1de)][_0x1c5828(0x1c7)](this);},Sprite_AnimationMV[_0x3e34e1(0x227)][_0x3e34e1(0x1e9)]=function(_0x28eeb2){const _0x441582=_0x3e34e1;this[_0x441582(0x204)]=_0x28eeb2;},VisuMZ[_0x3e34e1(0x19d)]['Sprite_AnimationMV_processTimingData']=Sprite_AnimationMV[_0x3e34e1(0x227)][_0x3e34e1(0x1cf)],Sprite_AnimationMV['prototype'][_0x3e34e1(0x1cf)]=function(_0x52b19e){const _0x870266=_0x3e34e1;if(this[_0x870266(0x204)]){if(_0x870266(0x1c6)===_0x870266(0x1a6)){function _0x4a174d(){const _0x44f3d3=_0x870266,_0x37fd2f=_0x52aebf['getAnimatedMapDestinationSettings']()['Square'],_0x5e5827=_0x38e2e4[_0x44f3d3(0x1f4)](),_0x407993=_0x350e00[_0x44f3d3(0x1eb)](),_0x401105=_0x37fd2f[_0x44f3d3(0x222)];this[_0x44f3d3(0x19e)]=new _0x51028d(_0x5e5827,_0x407993),this[_0x44f3d3(0x19e)]['fillAll'](_0x401105),this[_0x44f3d3(0x1e6)]=_0x37fd2f[_0x44f3d3(0x210)],this[_0x44f3d3(0x1c1)]=_0x37fd2f[_0x44f3d3(0x1fd)],this[_0x44f3d3(0x1ad)]=_0x37fd2f['RotateSpeed'],this[_0x44f3d3(0x1c2)]=_0x37fd2f[_0x44f3d3(0x1cd)];}}else{_0x52b19e=JsonEx[_0x870266(0x1c5)](_0x52b19e);if(_0x52b19e['se']){if(_0x870266(0x224)!==_0x870266(0x1b0))_0x52b19e['se']['volume']=0x0;else{function _0x489134(){const _0x57b8a6=_0x870266;this[_0x57b8a6(0x19e)]&&this[_0x57b8a6(0x19e)][_0x57b8a6(0x1e0)]();}}}}}VisuMZ[_0x870266(0x19d)][_0x870266(0x225)][_0x870266(0x1c7)](this,_0x52b19e);},Sprite_Destination[_0x3e34e1(0x213)]=_0x3e34e1(0x1e7),Sprite_Destination[_0x3e34e1(0x227)][_0x3e34e1(0x1d6)]=function(){const _0x8966=_0x3e34e1;this['createDefaults']();const _0x165649=$gameSystem['getAnimatedMapDestinationSettings']();switch(_0x165649[_0x8966(0x1d9)][_0x8966(0x1aa)]()){case _0x8966(0x195):this['createEmptyBitmap']();break;case _0x8966(0x1f3):this[_0x8966(0x193)]();break;case _0x8966(0x1be):this[_0x8966(0x1af)]();break;case _0x8966(0x223):this[_0x8966(0x1e8)]();break;case _0x8966(0x1c0):this['createAnimationBitmap']();break;default:this[_0x8966(0x193)]();break;}},Sprite_Destination[_0x3e34e1(0x227)][_0x3e34e1(0x1d7)]=function(){const _0x2d257e=_0x3e34e1;this['blendMode']=0x0,this[_0x2d257e(0x1c1)]=0x1,this[_0x2d257e(0x1ad)]=0x0,this['scaleMultiplier']=0x1,this[_0x2d257e(0x207)]['x']=0.5,this[_0x2d257e(0x207)]['y']=0.5;},Sprite_Destination['prototype'][_0x3e34e1(0x1df)]=function(){const _0x4d6cb6=_0x3e34e1,_0x4394b0=$gameMap[_0x4d6cb6(0x1f4)](),_0xd2461e=$gameMap[_0x4d6cb6(0x1eb)]();this[_0x4d6cb6(0x19e)]=new Bitmap(_0x4394b0,_0xd2461e);},Sprite_Destination[_0x3e34e1(0x227)][_0x3e34e1(0x193)]=function(){const _0xe6558f=_0x3e34e1,_0x1778c8=$gameSystem[_0xe6558f(0x216)]()['Square'],_0x2395a6=$gameMap[_0xe6558f(0x1f4)](),_0x30b43e=$gameMap[_0xe6558f(0x1eb)](),_0x3c2329=_0x1778c8[_0xe6558f(0x222)];this[_0xe6558f(0x19e)]=new Bitmap(_0x2395a6,_0x30b43e),this[_0xe6558f(0x19e)][_0xe6558f(0x1e2)](_0x3c2329),this[_0xe6558f(0x1e6)]=_0x1778c8[_0xe6558f(0x210)],this['opacityMultiplier']=_0x1778c8[_0xe6558f(0x1fd)],this[_0xe6558f(0x1ad)]=_0x1778c8[_0xe6558f(0x1c8)],this[_0xe6558f(0x1c2)]=_0x1778c8[_0xe6558f(0x1cd)];},Sprite_Destination[_0x3e34e1(0x227)][_0x3e34e1(0x1af)]=function(){const _0x55f3c5=_0x3e34e1,_0x23f741=$gameSystem['getAnimatedMapDestinationSettings']()[_0x55f3c5(0x1e3)],_0x5d6495=$gameMap[_0x55f3c5(0x1f4)](),_0x57cbf=$gameMap[_0x55f3c5(0x1eb)](),_0x53d7b2=_0x23f741[_0x55f3c5(0x222)];this[_0x55f3c5(0x19e)]=new Bitmap(_0x5d6495,_0x57cbf),this[_0x55f3c5(0x19e)][_0x55f3c5(0x206)](_0x5d6495/0x2,_0x57cbf/0x2,_0x5d6495/0x2,_0x53d7b2),this[_0x55f3c5(0x1e6)]=_0x23f741[_0x55f3c5(0x210)],this[_0x55f3c5(0x1c1)]=_0x23f741[_0x55f3c5(0x1fd)],this['scaleMultiplier']=_0x23f741['ScaleMultiplier'];},Sprite_Destination[_0x3e34e1(0x227)]['createImageBitmap']=function(){const _0x27d6eb=_0x3e34e1;if($gameSystem['getAnimatedMapDestinationSettings']()[_0x27d6eb(0x199)]['Filename'][_0x27d6eb(0x205)]<=0x0)return this[_0x27d6eb(0x193)]();const _0x457377=$gameSystem['getAnimatedMapDestinationSettings']()['Image'];this['bitmap']=ImageManager[_0x27d6eb(0x198)](_0x457377[_0x27d6eb(0x1a8)]),this[_0x27d6eb(0x1e6)]=_0x457377[_0x27d6eb(0x210)],this[_0x27d6eb(0x1c1)]=_0x457377['OpacityMultiplier'],this[_0x27d6eb(0x1ad)]=_0x457377[_0x27d6eb(0x1c8)],this[_0x27d6eb(0x1c2)]=_0x457377[_0x27d6eb(0x1cd)];},Sprite_Destination[_0x3e34e1(0x227)][_0x3e34e1(0x1d8)]=function(){const _0x562430=_0x3e34e1,_0x40c485=$gameMap[_0x562430(0x1f4)](),_0x45e113=$gameMap[_0x562430(0x1eb)]();this[_0x562430(0x19e)]=new Bitmap(_0x40c485,_0x45e113);},VisuMZ[_0x3e34e1(0x19d)]['Sprite_Destination_updateAnimation']=Sprite_Destination[_0x3e34e1(0x227)][_0x3e34e1(0x229)],Sprite_Destination[_0x3e34e1(0x227)][_0x3e34e1(0x229)]=function(){const _0x4f8cd6=_0x3e34e1,_0x4eff98=$gameSystem[_0x4f8cd6(0x216)]();if(_0x4eff98[_0x4f8cd6(0x1d9)][_0x4f8cd6(0x1aa)]()===_0x4f8cd6(0x1c0)){if(_0x4f8cd6(0x1a5)===_0x4f8cd6(0x1a5))this['updateAnimationType']();else{function _0x2e0102(){_0x3794e1['endAnimation']();}}}else{if('csCaX'!==_0x4f8cd6(0x1f0)){function _0x4791e6(){const _0x2a9977=_0x4f8cd6,_0x3f4138={'targets':_0x3c1e4c,'animationId':_0x597fbc,'mirror':_0x44c582,'mute':_0x571bce};this[_0x2a9977(0x215)][_0x2a9977(0x1fe)](_0x3f4138);for(const _0x25f026 of _0x3351d1){_0x25f026[_0x2a9977(0x1b5)]&&_0x25f026[_0x2a9977(0x1b5)]();}}}else VisuMZ[_0x4f8cd6(0x19d)][_0x4f8cd6(0x1c4)][_0x4f8cd6(0x1c7)](this),this[_0x4f8cd6(0x1a2)](),this[_0x4f8cd6(0x19b)](),this[_0x4f8cd6(0x1dd)]();}},Sprite_Destination[_0x3e34e1(0x227)][_0x3e34e1(0x19a)]=function(){const _0x508c6a=_0x3e34e1,_0x3c83a7=SceneManager[_0x508c6a(0x228)]['_spriteset'];if(_0x3c83a7[_0x508c6a(0x21c)]())return;const _0x24a9ce=$gameSystem[_0x508c6a(0x216)]()[_0x508c6a(0x1d0)];$gameTemp['requestDestinationAnimation']([this],_0x24a9ce[_0x508c6a(0x19c)],_0x24a9ce[_0x508c6a(0x191)],_0x24a9ce[_0x508c6a(0x20e)]);},Sprite_Destination[_0x3e34e1(0x227)]['updateOpacity']=function(){const _0x4ba516=_0x3e34e1;this[_0x4ba516(0x1ed)]*=this[_0x4ba516(0x1c1)]||0x1;},Sprite_Destination[_0x3e34e1(0x227)][_0x3e34e1(0x19b)]=function(){const _0xec01fb=_0x3e34e1;this[_0xec01fb(0x1b2)]['x']*=this[_0xec01fb(0x1c2)]||0x1,this[_0xec01fb(0x1b2)]['y']=this['scale']['x'];},Sprite_Destination[_0x3e34e1(0x227)][_0x3e34e1(0x1dd)]=function(){const _0x565789=_0x3e34e1;this[_0x565789(0x202)]+=this[_0x565789(0x1ad)]||0x0;},Sprite_Destination['prototype'][_0x3e34e1(0x1e0)]=function(_0x52d49c){const _0x287e74=_0x3e34e1,_0x278a93=$gameSystem[_0x287e74(0x216)]();if(_0x278a93[_0x287e74(0x1d9)][_0x287e74(0x1aa)]()!==_0x287e74(0x223)){if(this[_0x287e74(0x19e)]){if(_0x287e74(0x18f)!==_0x287e74(0x18f)){function _0xbd86f7(){const _0x5f2102=_0x287e74;_0x70127=_0x1af13d||![],_0x14ff85=_0xb2e92f||![];if(_0x1da4f5[_0x20abf7]){const _0x3f4c71={'targets':_0xfa73c0,'animationId':_0x5715cc,'mirror':_0x2945bb,'mute':_0x52b78b};this[_0x5f2102(0x215)][_0x5f2102(0x1fe)](_0x3f4c71);for(const _0x57e6ff of _0x779898){_0x57e6ff[_0x5f2102(0x1b5)]&&_0x57e6ff[_0x5f2102(0x1b5)]();}}}}else this['bitmap'][_0x287e74(0x1e0)]();}}Sprite[_0x287e74(0x227)][_0x287e74(0x1e0)]['call'](this,_0x52d49c);},VisuMZ['AnimatedMapDest'][_0x3e34e1(0x1f8)]=Spriteset_Base[_0x3e34e1(0x227)][_0x3e34e1(0x1d3)],Spriteset_Base[_0x3e34e1(0x227)][_0x3e34e1(0x1d3)]=function(){const _0x182cbc=_0x3e34e1;VisuMZ['AnimatedMapDest'][_0x182cbc(0x1f8)]['call'](this),this[_0x182cbc(0x20c)]=[];},VisuMZ[_0x3e34e1(0x19d)]['Spriteset_Base_destroy']=Spriteset_Base[_0x3e34e1(0x227)][_0x3e34e1(0x1e0)],Spriteset_Base[_0x3e34e1(0x227)][_0x3e34e1(0x1e0)]=function(_0x1623cd){const _0x1f981f=_0x3e34e1;this[_0x1f981f(0x1f1)](),VisuMZ[_0x1f981f(0x19d)][_0x1f981f(0x1fb)][_0x1f981f(0x1c7)](this,_0x1623cd);},VisuMZ[_0x3e34e1(0x19d)][_0x3e34e1(0x1cb)]=Spriteset_Base['prototype'][_0x3e34e1(0x190)],Spriteset_Base[_0x3e34e1(0x227)][_0x3e34e1(0x190)]=function(){const _0x19e12d=_0x3e34e1;VisuMZ[_0x19e12d(0x19d)]['Spriteset_Base_update'][_0x19e12d(0x1c7)](this),this['updateDestinationAnimations']();},Spriteset_Base[_0x3e34e1(0x227)][_0x3e34e1(0x21d)]=function(){const _0x3615fc=_0x3e34e1;for(const _0x975c30 of this[_0x3615fc(0x20c)]){!_0x975c30[_0x3615fc(0x1a4)]()&&this[_0x3615fc(0x1a3)](_0x975c30);}this[_0x3615fc(0x1e1)]();},Spriteset_Base['prototype'][_0x3e34e1(0x1e1)]=function(){const _0x20048e=_0x3e34e1;for(;;){if(_0x20048e(0x1d2)!=='ljpbS'){const _0x4ea853=$gameTemp['retrieveDestinationAnimation']();if(_0x4ea853)this['createDestinationAnimation'](_0x4ea853);else break;}else{function _0x2153e6(){const _0x9096b5=_0x20048e;return _0x48e3de[_0x9096b5(0x219)]&&_0x24a281[_0x9096b5(0x20b)][_0x9096b5(0x1ba)]('['+_0x30853e+']');}}}},Spriteset_Base[_0x3e34e1(0x227)][_0x3e34e1(0x1ff)]=function(_0x1d6177){const _0x58643b=_0x3e34e1,_0x62afd9=$dataAnimations[_0x1d6177['animationId']],_0x3a7862=_0x1d6177[_0x58643b(0x1e4)],_0x1454e1=_0x1d6177[_0x58643b(0x1b7)],_0x4c7914=_0x1d6177['mute'];let _0x422ec8=this['animationBaseDelay']();const _0x2a7224=this[_0x58643b(0x1ac)]();if(this[_0x58643b(0x1fc)](_0x62afd9)){if(_0x58643b(0x1f9)===_0x58643b(0x220)){function _0x2535b5(){const _0x2bb565=_0x58643b;this[_0x2bb565(0x1ff)](_0x10270e);}}else for(const _0x100d61 of _0x3a7862){this[_0x58643b(0x1f5)]([_0x100d61],_0x62afd9,_0x1454e1,_0x422ec8,_0x4c7914),_0x422ec8+=_0x2a7224;}}else this[_0x58643b(0x1f5)](_0x3a7862,_0x62afd9,_0x1454e1,_0x422ec8);},Spriteset_Base[_0x3e34e1(0x227)][_0x3e34e1(0x1f5)]=function(_0x36cc17,_0xa5f48e,_0x2f0036,_0x3f4394,_0x4564ef){const _0x4398a9=_0x3e34e1,_0x460e3f=this['isMVAnimation'](_0xa5f48e),_0x566294=new(_0x460e3f?Sprite_AnimationMV:Sprite_Animation)(),_0x2b0eb0=_0x36cc17;this[_0x4398a9(0x1ce)](_0x36cc17[0x0])&&(_0x2f0036=!_0x2f0036),_0x566294[_0x4398a9(0x203)]=_0x36cc17,_0x566294[_0x4398a9(0x1e5)](_0x2b0eb0,_0xa5f48e,_0x2f0036,_0x3f4394),_0x566294['setMute'](_0x4564ef),this['_effectsContainer'][_0x4398a9(0x226)](_0x566294),this[_0x4398a9(0x20c)][_0x4398a9(0x1fe)](_0x566294);},Spriteset_Base[_0x3e34e1(0x227)][_0x3e34e1(0x1a3)]=function(_0x5d8f16){const _0x377176=_0x3e34e1;this[_0x377176(0x20c)][_0x377176(0x218)](_0x5d8f16),this[_0x377176(0x1d4)][_0x377176(0x1da)](_0x5d8f16);for(const _0x336a64 of _0x5d8f16[_0x377176(0x203)]){if(_0x377176(0x1bc)===_0x377176(0x1bc)){if(_0x336a64[_0x377176(0x1f7)]){if('HyYSU'!=='HyYSU'){function _0x5dcbd1(){const _0x494b7e=_0x377176;if(!_0x391c8c[_0x494b7e(0x1db)]())return;const _0x56b0c8=_0xca63eb[_0x494b7e(0x228)];if(!_0x56b0c8)return;const _0xe06b=_0x56b0c8[_0x494b7e(0x1d5)];if(!_0xe06b)return;const _0x218adb=_0xe06b['_destinationSprite'];if(!_0x218adb)return;_0x218adb[_0x494b7e(0x1d6)]();}}else _0x336a64['endAnimation']();}}else{function _0x320066(){const _0x318304=_0x377176;_0x1e00dc[_0x318304(0x19d)]['Game_System_initialize'][_0x318304(0x1c7)](this),this['initAnimatedMapDest']();}}}_0x5d8f16[_0x377176(0x1e0)]();},Spriteset_Base[_0x3e34e1(0x227)][_0x3e34e1(0x1f1)]=function(){const _0x134646=_0x3e34e1;for(const _0xeb9638 of this['_destinationAnimationSprites']){this[_0x134646(0x1a3)](_0xeb9638);}},Spriteset_Base[_0x3e34e1(0x227)][_0x3e34e1(0x21c)]=function(){const _0x1dbbad=_0x3e34e1;return this[_0x1dbbad(0x20c)][_0x1dbbad(0x205)]>0x0;};