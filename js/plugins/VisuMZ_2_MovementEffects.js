//=============================================================================
// VisuStella MZ - Movement Effects
// VisuMZ_2_MovementEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_MovementEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MovementEffects = VisuMZ.MovementEffects || {};
VisuMZ.MovementEffects.version = 1.04;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.04] [MovementEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Movement_Effects_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_EventsMoveCore
 * @orderAfter VisuMZ_1_EventsMoveCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Movement in RPG Maker MZ can be kind of dull. There's next to no way of
 * interacting with the map. This plugin adds various means of doing so to add
 * more life to the environment. Dust Clouds can kick up when running around.
 * Footprints can be left in the sand. Footsteps can be heard making different
 * sounds based on the flooring. Added movement abilities like Smart Blink,
 * Smart Jump, and Smart Rush allow players more fun traversal options. And to
 * top it off, a smooth scrolling camera will ease in the screen to focus on
 * the player character instead of being locked-on firmly. Motion blurs and
 * motion trails are also made available to further emphasize movement.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Dust Clouds can kick up off the ground whenever characters run, giving the
 *   player a better understanding of what's going on.
 * * Dust Clouds can be customized, using images or generated with different
 *   colors. These settings can be altered mid-game as well.
 * * Footprints can appear when stepping over specific tiles marked by declared
 *   terrain tags or regions. This can be used over imprintable terrain like
 *   dirt, sand, or snow.
 * * Footprints can be modified in how they appear with custom images or with
 *   generated images. These modifications will be based on the sprite sheet
 *   frame used to generate them for accuracy.
 * * Footstep sounds can be added to give player feedback whenever the player
 *   character or events move on the screen.
 * * Apply different footstep sounds to different tiles on the map marked by
 *   either regions or terrain tags.
 * * Footsteps coming from events can have a distance factor applied to them,
 *   making them sound softer the further away they are and playing on specific
 *   sides of a stereo speaker.
 * * Motion Blur effects can be used to create more impactful scenes. Apply
 *   them to any character on the map screen be it the player character,
 *   followers, or events via Plugin Command!
 * * Motion Trails can added to emphasize movement. These are also inherently a
 *   part of the new movement abilities.
 * * Newly added movement abilities that pay attention to the terrain and any
 *   implemented restrictions. These abilities include Smart Blink, Smart Jump,
 *   and Smart Rush.
 * * Directional Movement Speed Modifiers can be adjusted globally to make
 *   characters move faster or slower in certain directions. This can be used
 *   to create an illusion that it's harder to move against the wind in a storm
 *   than with.
 * * Smart Blink is a new movement ability that can be activated via Plugin
 *   Command! The player teleports forward a set distance, ignoring any walls
 *   and/or obstacles in between unless restrictions prohibit the player from
 *   doing so.
 * * Smart Jump is a new movement ability that can be activated via Plugin
 *   Command! The player jumps forward a distance as long as it does not
 *   interfere with obstacles. It can scale past pits and small gaps in height.
 *   Height maps can also be declared for some verticality on the map.
 * * Smart Rush is a new movement ability that can be activated via Plugin
 *   Command! The player charges forward extremely fast, possibly colliding
 *   with events, and possibly creating new interactions with its switch
 *   toggling nature.
 * * Smooth Camera is an added feature to smoothly adjust the camera as the
 *   player traverses across the game's maps. The scrolling speed goes slower
 *   or faster depending if the player is walking or dashing.
 * * Plugin Commands allow you to adjust Smooth Camera settings midway through
 *   the game.
 * * Map notetags can forcefully enable or disable Smooth Camera.
 * * Players that find certain effects added through this plugin annoying (such
 *   as footprints, footsteps, smooth camera, etc) can have them turned off via
 *   the Options menu.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * * VisuMZ_0_CoreEngine
 * * VisuMZ_1_EventsMoveCore
 * * Pixi JS Filters*
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 * 
 * *Note* You can download the Pixi JS Filters plugin library from the below
 * URL or from the Action Sequence Impact product page. Install it as a
 * Tier 0 plugin.
 * 
 * *Note2* Pixi JS Filters perform differently on different machines/devices.
 * Please understand that this is outside of VisuStella's control.
 * 
 * URL: https://filters.pixijs.download/v3.1.0/pixi-filters.js
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Dust Cloud-Related Notetags ===
 * 
 * ---
 * 
 * <Force Dust Cloud>
 * 
 * - Used for: Map Notetags
 * - Forces Dust Clouds to be kicked up whenever characters are dashing
 *   regardless of whatever settings are found in the Plugin Parameters for
 *   this particular map.
 * - Plugin Command changes won't bypass this notetag either.
 * - However, if the player turns off Dust Clouds in the options menu, then
 *   this setting will be turned off.
 * 
 * ---
 *
 * <No Dust Cloud>
 *
 * - Used for: Map Notetags
 * - This disables Dust Clouds from being kicked up whenever characters are
 *   dashing regardless of whatever settings are found in the Plugin Parameters
 *   for this particular map.
 * - Plugin Command changes won't bypass this notetag either.
 *
 * ---
 * 
 * === Footprints-Related Notetags ===
 * 
 * ---
 * 
 * <Footprint Region: x>
 * <Footprint Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - This declares which regions will have visible footprints when characters
 *   walk over those areas.
 * - Replace 'x' with a number (0 to 255) representing the region used to mark
 *   tiles that can have footprints.
 * - Insert multiple 'x' values to add multiple regions.
 * - If this notetag is used, ignore the default settings found in the
 *   Plugin Parameters.
 * 
 * ---
 * 
 * <No Footprint Region: x>
 * <No Footprint Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - This declares which regions CANNOT have footprints when characters walk
 *   over those areas.
 * - This is primarily used to offset the default settings found in the
 *   Plugin Parameters.
 * - Replace 'x' with a number (0 to 255) representing the region used to mark
 *   tiles that CANNOT have footprints.
 * - Insert multiple 'x' values to add multiple regions.
 * 
 * ---
 * 
 * <Region x Footprint Opacity: y>
 * 
 * - Used for: Map Notetags
 * - This changes the opacity of the footprints that spawn in region 'x' to
 *   have an opacity value of 'y' instead of the default settings found in the
 *   Plugin Parameters.
 * - Replace 'x' with a number (0 to 255) to indicate which region is being
 *   modified.
 * - Replace 'y' with a number (0 to 255) to represent the starting opacity
 *   value of the footprints made in that region.
 * 
 * ---
 * 
 * <Region x Footprint Duration: y>
 * 
 * - Used for: Map Notetags
 * - This changes the duration of the footprints that spawn in region 'x' to
 *   have a duration time of 'y' instead of the default settings found in the
 *   Plugin Parameters.
 * - Replace 'x' with a number (0 to 255) to indicate which region is being
 *   modified.
 * - Replace 'y' with a number in frames to represent the starting duration
 *   time of the footprints made in that region.
 * 
 * ---
 * 
 * <Footprint Terrain Tag: x>
 * <Footprint Terrain Tags: x, x, x>
 * 
 * - Used for: Map Notetags
 * - This declares which terrain tag marked tiles will have visible footprints
 *   when characters walk over those areas.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag used to
 *   mark tiles that can have footprints.
 * - Insert multiple 'x' values to add multiple terrain tags.
 * - If this notetag is used, ignore the default settings found in the
 *   Plugin Parameters.
 * 
 * ---
 * 
 * <No Footprint Terrain Tag: x>
 * <No Footprint Terrain Tags: x, x, x>
 * 
 * - Used for: Map Notetags
 * - This declares which terrain tag marked tiles CANNOT have footprints when
 *   characters walk over those areas.
 * - This is primarily used to offset the default settings found in the
 *   Plugin Parameters.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag used to
 *   mark tiles that CANNOT have footprints.
 * - Insert multiple 'x' values to add multiple terrain tags.
 * 
 * ---
 * 
 * <Terrain Tag x Footprint Opacity: y>
 * 
 * - Used for: Map Notetags
 * - This changes the opacity of the footprints that spawn in tiles with
 *   terrain tag 'x' to have an opacity value of 'y' instead of the default
 *   settings found in the Plugin Parameters.
 * - Replace 'x' with a number (0 to 7) to indicate which terrain tag is being
 *   modified.
 * - Replace 'y' with a number (0 to 255) to represent the starting opacity
 *   value of the footprints made in that tile.
 * 
 * ---
 * 
 * <Terrain Tag x Footprint Duration: y>
 * 
 * - Used for: Map Notetags
 * - This changes the duration of the footprints that spawn in tiles with
 *   terrain tag 'x' to have a duration time of 'y' instead of the default
 *   settings found in the Plugin Parameters.
 * - Replace 'x' with a number (0 to 7) to indicate which terrain tag is being
 *   modified.
 * - Replace 'y' with a number in frames to represent the starting duration
 *   time of the footprints made in that tile.
 * 
 * ---
 * 
 * <Disable Footprints>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - Prevents the character from being able to leave behind footprints.
 * 
 * ---
 * 
 * <Footprint d Pattern p Filename: filename>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - Allows you to set a specific image to be used in place of a generated
 *   footprint for 'd' direction 'p' pattern.
 * - Using this will bypass any settings made for generated footprints.
 * - Replace 'd' with text representing the direction the setting is for. Use
 *   any of the directions below:
 *   - down, left, right, up
 *   - lower left, lower right, upper left, upper right
 * - Replace 'p' with a number representing the pattern index. Patterns are
 *   the individual frames used in the sprite when walking.
 *   - By default, RPG Maker MZ sprites have the following patterns:
 *   - Left frame is pattern 0.
 *   - Center frame is pattern 1.
 *   - Right frame is pattern 2.
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 * - Examples:
 *   - <Footprint Down Pattern 0 Filename: FootprintDownA>
 *   - <Footprint Left Pattern 2 Filename: FootprintLeftB>
 *   - <Footprint Right Pattern 0 Filename: FootprintRightA>
 * 
 * ---
 * 
 * <Footprint d Pattern p Width: x>
 * <Footprint d Pattern p Height: y>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - For non-image generated footprints, these notetags let you set the width
 *   and/or height of the footprint for 'd' direction and 'p' pattern.
 * - Replace 'd' with text representing the direction the setting is for. Use
 *   any of the directions below:
 *   - down, left, right, up
 *   - lower left, lower right, upper left, upper right
 * - Replace 'p' with a number representing the pattern index. Patterns are
 *   the individual frames used in the sprite when walking.
 *   - By default, RPG Maker MZ sprites have the following patterns:
 *   - Left frame is pattern 0.
 *   - Center frame is pattern 1.
 *   - Right frame is pattern 2.
 * - Replace 'x' with a number representing the width of footprint in pixels.
 * - Replace 'y' with a number representing the height of footprint in pixels.
 * - Examples:
 *   - <Footprint Down Pattern 0 Width: 6>
 *   - <Footprint Left Pattern 2 Height: 4>
 * 
 * ---
 * 
 * <Footprint d Pattern p Offset: +x, +x>
 * <Footprint d Pattern p Offset: -x, -x>
 * <Footprint d Pattern p Offset: +x, -x>
 * <Footprint d Pattern p Offset: -x, +x>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - For non-image generated footprints, these notetags let you set the offsets
 *   X and Y of the footprint for 'd' direction and 'p' pattern.
 * - Replace 'd' with text representing the direction the setting is for. Use
 *   any of the directions below:
 *   - down, left, right, up
 *   - lower left, lower right, upper left, upper right
 * - Replace 'p' with a number representing the pattern index. Patterns are
 *   the individual frames used in the sprite when walking.
 *   - By default, RPG Maker MZ sprites have the following patterns:
 *   - Left frame is pattern 0.
 *   - Center frame is pattern 1.
 *   - Right frame is pattern 2.
 * - Replace 'x' and 'y' with numeric values the exact number of pixels to
 *   offset the footprint's x and y coordinates by.
 * - Examples:
 *   - <Footprint Up Pattern 0 Width: +4, +2>
 *   - <Footprint Right Pattern 2 Height: -6, -4>
 * 
 * ---
 * 
 * === Footsteps-Related Notetags ===
 * 
 * ---
 * 
 * <Force Footsteps>
 *
 * - Used for: Map Notetags
 * - Forces footstep sounds to be played whenever characters are walking on the
 *   screen, regardless of the settings found in the Plugin Parameters for the
 *   particular map.
 * - Plugin Command changes won't bypass this notetag either.
 * - However, if the player turns off Footstep Sounds in the options menu, then
 *   this setting will be turned off.
 * 
 * ---
 * 
 * <No Footsteps>
 *
 * - Used for: Map Notetags
 * - Prevents footstep sounds from being played whenever characters are walking
 *   on the screen, regardless of the settings found in the Plugin Parameters
 *   for the particular map.
 * - Plugin Command changes won't bypass this notetag either.
 * 
 * ---
 * 
 * <Region x Footstep Sound: filename>
 * <Region x Footstep Sound: filename, volume>
 * <Region x Footstep Sound: filename, volume, pitch>
 * <Region x Footstep Sound: filename, volume, pitch, pan>
 * 
 * - Used for: Map Notetags
 * - Causes a different sound effect to be played in place of the default
 *   footstep sound if a character walks on a map tile marked by region 'x'.
 * - Replace 'x' with a number (0-255) representing the region.
 * - Replace 'volume' with a number (0 to 100) representing the volume.
 * - Replace 'pitch' with a number (50 to 150) representing the pitch.
 * - Replace 'pan' with a number (-100 to 100) representing the pan.
 * - If 'volume', 'pitch', or 'pan' aren't present, then the values used for
 *   them will be based off the default settings in the Plugin Parameters.
 * - This will take priority over any terrain tags with unique footstep sounds.
 * 
 * ---
 * 
 * <No Region x Footsteps>
 * 
 * - Used for: Map Notetags
 * - No sound effects will be played when a character walks over a map tile
 *   marked by region 'x'.
 * - Replace 'x' with a number (0-255) representing the region.
 * 
 * ---
 * 
 * <Terrain Tag x Footsteps: filename>
 * <Terrain Tag x Footsteps: filename, volume>
 * <Terrain Tag x Footsteps: filename, volume, pitch>
 * <Terrain Tag x Footsteps: filename, volume, pitch, pan>
 * 
 * - Used for: Tileset Notetags
 * - Causes a different sound effect to be played in place of the default
 *   footstep sound if a character walks on a map tile with terrain tag 'x'.
 * - Replace 'x' with a number (0-7) representing the terrain tag.
 * - Replace 'volume' with a number (0 to 100) representing the volume.
 * - Replace 'pitch' with a number (50 to 150) representing the pitch.
 * - Replace 'pan' with a number (-100 to 100) representing the pan.
 * - If 'volume', 'pitch', or 'pan' aren't present, then the values used for
 *   them will be based off the default settings in the Plugin Parameters.
 * - This will have LESS priority than any regions with unique footstep sounds.
 * 
 * ---
 * 
 * <No Terrain Tag x Footsteps>
 * 
 * - Used for: Tileset Notetags
 * - No sound effects will be played when a character walks over a map tile
 *   marked by terrain tag 'x'.
 * - Replace 'x' with a number (0-7) representing the terrain tag.
 * 
 * ---
 * 
 * <Enable Footsteps>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - If actor or event footstep sounds are normally disabled, this will enable
 *   them when moving.
 * - Footstep sounds coming from actors will be given priority to the party
 *   leader first before anyone else.
 * 
 * ---
 * 
 * <Disable Footsteps>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - If actor or event footstep sounds are normally enabled, this will disable
 *   them when moving.
 * 
 * ---
 * 
 * <Footsteps Volume: x%>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - Changes the volume for any footstep sounds made by this actor/event.
 * - Replace 'x' with a number (0 to 100) representing the percentile modifier,
 *   a multiplicative rate from the usual footstep volume.
 * 
 * ---
 * 
 * <Footsteps Pitch: x%>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - Changes the pitch for any footstep sounds made by this actor/event.
 * - Replace 'x' with a number (0 to 100) representing the percentile modifier,
 *   a multiplicative rate from the usual footstep pitch.
 * 
 * ---
 * 
 * <Footsteps Frame: x>
 * <Footsteps Frames: x, x, x>
 * 
 * - Used for: Actor Notetags, Event Notetags, or Event Page Comment Tags
 * - For those using the "Sound by Frame?" Plugin Parameter, this will cause
 *   the footstep sounds to trigger whenever the sprite changes to the listed
 *   frame(s) in order to match up the sound with the image of the sprite
 *   stepping on the ground.
 * - This will override the setting found in the Plugin Parameters for this
 *   specific actor or event.
 * - Replace 'x' with a number representing the frame. Frames start at 0 and
 *   increase by 1 going left to right.
 * 
 * ---
 * 
 * === Smart Blink-Related Notetags ===
 * 
 * ---
 * 
 * <No Smart Blink>
 * 
 * - Used for: Map Notetags
 * - Prevents Smart Blink from being used at all on this map.
 * 
 * ---
 * 
 * <Smart Blink Non-Land Region: x>
 * <Smart Blink Non-Land Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Use this notetag to mark tiles on the map where Smart Blink cannot land.
 * - This is primarily used for things like rooftops, which if characters can
 *   land on there, can blink onto.
 * - Replace 'x' with a number (0 to 255) representing the region ID used to
 *   mark the non-landable tiles.
 *   - Insert multiple numbers to mark more regions.
 * - This will override the region settings found in the Plugin Parameters for
 *   this specific map.
 *   - However, it will not override custom settings found in Smart Blink
 *     Plugin Command.
 *   - The Smart Blink Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Blink Non-Land Terrain Tags: x>
 * <Smart Blink Non-Land Terrain Tags: x, x, x>
 * 
 * - Used for: Tileset Notetags
 * - Use this notetag to mark tiles on the map where Smart Blink cannot land.
 * - This is primarily used for things like rooftops, which if characters can
 *   land on there, can blink onto.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag ID used to
 *   mark the non-landable tiles.
 *   - Insert multiple numbers to mark more terrain tags.
 * - This will override the terrain tag settings found in the Plugin Parameters
 *   for this specific map.
 *   - However, it will not override custom settings found in Smart Blink
 *     Plugin Command.
 *   - The Smart Blink Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Blink Non-Pass Region: x>
 * <Smart Blink Non-Pass Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Use this notetag to mark tiles on the map where Smart Blink cannot pass.
 * - This is primarily used for things like barriers, preventing the player
 *   from being able to teleport past it or on it.
 * - Replace 'x' with a number (0 to 255) representing the region ID used to
 *   mark the non-passable tiles.
 *   - Insert multiple numbers to mark more regions.
 * - This will override the region settings found in the Plugin Parameters for
 *   this specific map.
 *   - However, it will not override custom settings found in Smart Blink
 *     Plugin Command.
 *   - The Smart Blink Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Blink Non-Pass Terrain Tags: x>
 * <Smart Blink Non-Pass Terrain Tags: x, x, x>
 * 
 * - Used for: Tileset Notetags
 * - Use this notetag to mark tiles on the map where Smart Blink cannot land.
 * - This is primarily used for things like barriers, preventing the player
 *   from being able to teleport past it or on it.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag ID used to
 *   mark the non-passable tiles.
 *   - Insert multiple numbers to mark more terrain tags.
 * - This will override the terrain tag settings found in the Plugin Parameters
 *   for this specific map.
 *   - However, it will not override custom settings found in Smart Blink
 *     Plugin Command.
 *   - The Smart Blink Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * === Smart Jump-Related Notetags ===
 * 
 * ---
 * 
 * <No Smart Jump>
 * 
 * - Used for: Map Notetags
 * - Prevents Smart Jump from being used at all on this map.
 * 
 * ---
 * 
 * <Smart Jump Non-Land Region: x>
 * <Smart Jump Non-Land Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Use this notetag to mark tiles on the map where Smart Jump cannot land.
 * - This is primarily used for things like rooftops, which if characters can
 *   land on there, can jump onto.
 * - Replace 'x' with a number (0 to 255) representing the region ID used to
 *   mark the non-landable tiles.
 *   - Insert multiple numbers to mark more regions.
 * - This will override the region settings found in the Plugin Parameters for
 *   this specific map.
 *   - However, it will not override custom settings found in Smart Jump
 *     Plugin Command.
 *   - The Smart Jump Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Jump Non-Land Terrain Tags: x>
 * <Smart Jump Non-Land Terrain Tags: x, x, x>
 * 
 * - Used for: Tileset Notetags
 * - Use this notetag to mark tiles on the map where Smart Jump cannot land.
 * - This is primarily used for things like rooftops, which if characters can
 *   land on there, can jump onto.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag ID used to
 *   mark the non-landable tiles.
 *   - Insert multiple numbers to mark more terrain tags.
 * - This will override the terrain tag settings found in the Plugin Parameters
 *   for this specific map.
 *   - However, it will not override custom settings found in Smart Jump
 *     Plugin Command.
 *   - The Smart Jump Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Jump Non-Pass Region: x>
 * <Smart Jump Non-Pass Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Use this notetag to mark tiles on the map where Smart Jump cannot pass.
 * - This is primarily used for things like barriers, preventing the player
 *   from being able to leap past it or on it.
 * - Replace 'x' with a number (0 to 255) representing the region ID used to
 *   mark the non-passable tiles.
 *   - Insert multiple numbers to mark more regions.
 * - This will override the region settings found in the Plugin Parameters for
 *   this specific map.
 *   - However, it will not override custom settings found in Smart Jump
 *     Plugin Command.
 *   - The Smart Jump Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Jump Non-Pass Terrain Tags: x>
 * <Smart Jump Non-Pass Terrain Tags: x, x, x>
 * 
 * - Used for: Tileset Notetags
 * - Use this notetag to mark tiles on the map where Smart Jump cannot land.
 * - This is primarily used for things like barriers, preventing the player
 *   from being able to leap past it or on it.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag ID used to
 *   mark the non-passable tiles.
 *   - Insert multiple numbers to mark more terrain tags.
 * - This will override the terrain tag settings found in the Plugin Parameters
 *   for this specific map.
 *   - However, it will not override custom settings found in Smart Jump
 *     Plugin Command.
 *   - The Smart Jump Plugin Command's restrictions will be added onto these.
 * 
 * ---
 * 
 * <Smart Jump Height-Based Regions: x, x>
 * <Smart Jump Height-Based Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Allows you to assign certain tiles to be marked as a specific height for
 *   Smart Jump to interact with.
 * - Replace 'x' with a number (0 to 255) representing the region ID to use as
 *   a height marker.
 *   - Insert multiple numbers to mark more regions.
 * - Height-Based Region interactions work as follows:
 *   - Players can jump from a height-based region to another height-based
 *     region of the same or lower value as long as that region is listed, too.
 *     - Regions listed: 10, 13, 15.
 *     - ie. The player can jump from Region 15 to 15.
 *     - ie. The player can jump from Region 15 to 13.
 *     - ie. The player can jump from Region 15 to 10.
 *     - ie. The player CANNOT jump from Region 13 to 15.
 *     - ie. The player CANNOT jump from Region 10 to 13.
 *     - ie. The player CANNOT jump from Region 10 to 15.
 *   - The lowest value number in the list is considered a "ledge" and the
 *     lowest possible level.
 *   - Players can jump in and out of the lowest level regions into non-height
 *     marked regions.
 *   - If the player is jumping towards the up, left, right directions, they
 *     cannot jump directly into a "ledge" region unless they are adjacent to
 *     the marked tile. A distance greater than 1 tile apart cannot be and the
 *     jump will be cut short.
 *   - If the player is jumping upward towards a "ledge", the player will jump
 *     directly onto the next available tile.
 *   - If the player is jumping towards the left or right directions into a
 *     "ledge" region, the player will "fall" a tile distance equal to the
 *     difference from the region height they're jumping from.
 *     - Regions listed: 10, 13, 15.
 *     - If the player is on Region 15 and jumps into a ledge (10), the player
 *       will drop 5 tiles downward.
 *     - If the player is on Region 13 and jumps into a ledge (10), the player
 *       will drop 3 tiles downward.
 *   - If the player is jumping downward towards a "ledge", the player will
 *     jump the full distance.
 *   - Examples:
 *     - <Smart Jump Height-Based Regions: 10, 13, 15>
 *       - Region 10 will be considered the "ledge" region.
 * 
 * Keep in mind that despite the fact that there is Height-Based Region support
 * for Smart Jump, maps in RPG Maker MZ are still inherently 2D. Therefore, not
 * everything will look correct for every jump-related scenario involving
 * region heights. You may need to make adjustments to maps that work best for
 * the limited 2D nature of mapping in order to adhere to what Height-Based
 * Region support can handle.
 * 
 * ---
 * 
 * <Smart Jump Non-Land>
 * 
 * - Used for: Event Notetags or Event Page Comment Tags
 * - Prevents the player from being able to land on this event.
 * 
 * ---
 * 
 * <Smart Jump Non-Pass>
 * <Illegal Jump>
 * 
 * - Used for: Event Notetags or Event Page Comment Tags
 * - Prevents the player from being able to leap past this event or on it.
 * 
 * ---
 * 
 * === Smart Rush-Related Notetags ===
 * 
 * ---
 * 
 * <No Smart Rush>
 * 
 * - Used for: Map Notetags
 * - Prevents Smart Rush from being used at all on this map.
 * 
 * ---
 * 
 * <Smart Rush Non-Crash Region: x>
 * <Smart Rush Non-Crash Region: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Prevents a screen shake crash effect when crashing into tiles marked by
 *   'x' region(s) after using a Smart Rush.
 * - This is primarily used for tiles such as water tiles so that it doesn't
 *   look like there's an invisible wall where the player is crashing into.
 * - Replace 'x' with a number (0 to 255) representing the region ID used to
 *   mark the non-crashable tiles.
 *   - Insert multiple numbers to mark more regions.
 * - This will override the region settings found in the Plugin Parameters for
 *   this specific map.
 * 
 * ---
 * 
 * <Smart Rush Non-Crash Terrain Tag: x>
 * <Smart Rush Non-Crash Terrain Tag: x, x, x>
 * 
 * - Used for: Tileset Notetags
 * - Prevents a screen shake crash effect when crashing into tiles marked by
 *   'x' terrain tag(s) after using a Smart Rush.
 * - This is primarily used for tiles such as water tiles so that it doesn't
 *   look like there's an invisible wall where the player is crashing into.
 * - Replace 'x' with a number (0 to 7) representing the terrain tag ID used to
 *   mark the non-crashable tiles.
 *   - Insert multiple numbers to mark more terrain tags.
 * - This will override the region settings found in the Plugin Parameters for
 *   this specific tileset.
 * 
 * ---
 * 
 * === Smooth Camera-Related Notetags ===
 * 
 * ---
 *
 * <Force Smooth Camera>
 *
 * - Used for: Map Notetags
 * - This forcefully enables Smooth Camera scrolling regardless of whatever
 *   settings are found in the Plugin Parameters for this particular map.
 * - Plugin Command changes won't bypass this notetag either.
 * - However, if the player turns off Smooth Camera scrolling in the options
 *   menu, then this setting will be turned off.
 *
 * ---
 *
 * <No Smooth Camera>
 *
 * - Used for: Map Notetags
 * - This disables Smooth Camera scrolling regardless of whatever settings are
 *   found in the Plugin Parameters for this particular map.
 * - Plugin Command changes won't bypass this notetag either.
 *
 * ---
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
 * === Dust Clouds Plugin Commands ===
 * 
 * ---
 * 
 * DUST CLOUDS: Enable/Disable
 * - Enable or Disable the Dust Clouds from spawning when dashing.
 * 
 *   Enable/Disable?:
 *   - Enables or Disables Dust Clouds.
 * 
 * ---
 * 
 * DUST CLOUDS: Change Settings
 * - Alter the existing Dust Clouds settings.
 * 
 *   Appearance:
 * 
 *     Filename:
 *     - Filename of the Dust Cloud. Leave empty if using none.
 * 
 *     Color:
 *     - Color of the dust cloud in #rrggbb format.
 *     - For generated dust clouds only.
 *     - Ignore if using image.
 * 
 *     Radius:
 *     - What is the max radius of this dust cloud?
 *     - For generated dust clouds only.
 *     - Ignore if using image.
 * 
 *     Fullness:
 *     - What is the fullness level (0.0 to 1.0)?
 *     - For generated dust clouds only.
 *     - Ignore if using image.
 * 
 *   Animation:
 * 
 *     Duration:
 *     - How many frames will a dust cloud remain on screen?
 * 
 *     Starting Opacity:
 *     - What is the starting opacity (0-255)?
 *     - Dust cloud opacity will gradually go to 0.
 * 
 *     Starting Scale:
 *     - What is the starting scale (0.0 to 1.0)?
 *     - Dust cloud scale will gradually go to 1.0.
 * 
 * ---
 * 
 * === Footprints and Footsteps Plugin Commands ===
 * 
 * ---
 * 
 * FOOTPRINTS: Enable/Disable
 * - Enable or Disable footprint marks from being made.
 * 
 *   Enable/Disable?:
 *   - Enables or Disables footprint marks.
 * 
 * ---
 * 
 * FOOTSTEPS: Enable/Disable
 * - Enable or Disable footstep sounds from being played.
 * 
 *   Enable/Disable?:
 *   - Enables or Disables footstep sounds.
 * 
 * ---
 * 
 * === Motion Blur Plugin Commands ===
 * 
 * ---
 * 
 * MOTION BLUR: Player
 * - Plays a Motion Blur on the player sprite.
 * - Requires Pixi JS Filters!
 * 
 *   Apply to Followers?:
 *   - Apply this motion blur effect to followers, too?
 * 
 *   Duration:
 *   - Play the Motion Blur effect for how many frames?
 *   - You may use JavaScript code.
 * 
 *   Angle Offset:
 *   - Offset the motion blur angle by this many degrees.
 *   - Original angle is based on facing direction.
 * 
 * ---
 * 
 * MOTION BLUR: Follower(s)
 * - Plays a Motion Blur on the follower sprite(s).
 * - Requires Pixi JS Filters!
 * 
 *   Follower Index(es):
 *   - Select which follower index(es) to affect.
 *   - Index values start at 0.
 * 
 *   Duration:
 *   - Play the Motion Blur effect for how many frames?
 *   - You may use JavaScript code.
 * 
 *   Angle Offset:
 *   - Offset the motion blur angle by this many degrees.
 *   - Original angle is based on facing direction.
 * 
 * ---
 * 
 * MOTION BLUR: Event(s)
 * - Plays a Motion Blur on event sprite(s).
 * - Requires Pixi JS Filters!
 * 
 *   Event ID(s):
 *   - Select which event(s) to affect.
 *   - Index values start at 0.
 * 
 *   Duration:
 *   - Play the Motion Blur effect for how many frames?
 *   - You may use JavaScript code.
 * 
 *   Angle Offset:
 *   - Offset the motion blur angle by this many degrees.
 *   - Original angle is based on facing direction.
 * 
 * ---
 * 
 * === Motion Trail Plugin Commands ===
 * 
 * ---
 * 
 * MOTION TRAIL: Change Settings For Player?
 * - Change Motion Trail settings for the player.
 * - This does NOT enable them. You must do that separately.
 * 
 *   Apply to Followers?:
 *   - Apply this change to followers, too?
 * 
 *   Delay:
 *   - How many frames to delay by when creating a motion trail?
 *   - The higher the delay, the less after images there are.
 * 
 *   Duration:
 *   - How many frames should the motion trail last?
 *   - What do you want to be its duration?
 * 
 *   Hue:
 *   - What do you want to be the hue for the motion trail?
 * 
 *   Starting Opacity:
 *   - What starting opacity value do you want for the motion trail?
 *   - Opacity values decrease over time.
 * 
 *   Tone:
 *   - What tone do you want for the motion trail?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 * ---
 * 
 * MOTION TRAIL: Change Settings For Follower(s)?
 * - Change Motion Trail settings for the follower(s).
 * - This does NOT enable them. You must do that separately.
 * 
 *   Follower Index(es):
 *   - Select which follower index(es) to affect.
 *   - Index values start at 0.
 * 
 *   Delay:
 *   - How many frames to delay by when creating a motion trail?
 *   - The higher the delay, the less after images there are.
 * 
 *   Duration:
 *   - How many frames should the motion trail last?
 *   - What do you want to be its duration?
 * 
 *   Hue:
 *   - What do you want to be the hue for the motion trail?
 * 
 *   Starting Opacity:
 *   - What starting opacity value do you want for the motion trail?
 *   - Opacity values decrease over time.
 * 
 *   Tone:
 *   - What tone do you want for the motion trail?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 * ---
 * 
 * MOTION TRAIL: Change Settings For Event(s)?
 * - Change Motion Trail settings for the event(s).
 * - This does NOT enable them. You must do that separately.
 * 
 *   Event ID(s):
 *   - Select which event(s) to affect.
 *   - Use "0" for "this event".
 * 
 *   Delay:
 *   - How many frames to delay by when creating a motion trail?
 *   - The higher the delay, the less after images there are.
 * 
 *   Duration:
 *   - How many frames should the motion trail last?
 *   - What do you want to be its duration?
 * 
 *   Hue:
 *   - What do you want to be the hue for the motion trail?
 * 
 *   Starting Opacity:
 *   - What starting opacity value do you want for the motion trail?
 *   - Opacity values decrease over time.
 * 
 *   Tone:
 *   - What tone do you want for the motion trail?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 * ---
 * 
 * MOTION TRAIL: Create For Player
 * - Immediately create a motion trail sprite for the player in the player's
 *   current position.
 * 
 *   Apply to Followers?:
 *   - Apply this effect to followers, too?
 * 
 * ---
 * 
 * MOTION TRAIL: Create For Follower(s)
 * - Immediately create a motion trail sprite for the follower(s) in the
 *   follower(s)'s current position.
 * 
 *   Follower Index(es):
 *   - Select which follower index(es) to affect.
 *   - Index values start at 0.
 * 
 * ---
 * 
 * MOTION TRAIL: Create For Event(s)
 * - Immediately create a motion trail sprite for the event(s) in the
 *   event(s)'s current position.
 * 
 *   Event ID(s):
 *   - Select which event(s) to affect.
 *   - Use "0" for "this event".
 * 
 * ---
 * 
 * MOTION TRAIL: Enable For Player?
 * - Enables/disables Motion Trails for player sprite.
 * 
 *   Apply to Followers?:
 *   - Apply this change to followers, too?
 * 
 *   Enable/Disable?
 *   - Enables or Disables Motion Trails.
 * 
 *   Immediately Create?
 *   - Immediately create a motion trail?
 *   - Requires "Enabled" setting to also be true.
 * 
 * ---
 * 
 * MOTION TRAIL: Enable For Follower(s)?
 * - Enables/disables Motion Trails for follower sprite(s).
 * 
 *   Follower Index(es):
 *   - Select which follower index(es) to affect.
 *   - Index values start at 0.
 * 
 *   Enable/Disable?
 *   - Enables or Disables Motion Trails.
 * 
 *   Immediately Create?
 *   - Immediately create a motion trail?
 *   - Requires "Enabled" setting to also be true.
 * 
 * ---
 * 
 * MOTION TRAIL: Enable For Event(s)?
 * - Enables/disables Motion Trails for event sprite(s).
 * 
 *   Event ID(s):
 *   - Select which event(s) to affect.
 *   - Use "0" for "this event".
 * 
 *   Enable/Disable?
 *   - Enables or Disables Motion Trails.
 * 
 *   Immediately Create?
 *   - Immediately create a motion trail?
 *   - Requires "Enabled" setting to also be true.
 * 
 * ---
 * 
 * === Smart Movement Plugin Commands ===
 * 
 * ---
 * 
 * SMART: Directional Move Speed Modifier
 * - Global!
 * - These settings allow you to adjust the movement speed modifiers when
 *   characters are facing certain directions.
 * - This can be used to help give a better illusion that in a storm (or such),
 *   it is harder to move against the wind than with.
 * 
 *   Standard Directions:
 * 
 *     Down Speed:
 *     Left Speed:
 *     Right Speed:
 *     Up Speed:
 *     - What is the movement speed modifier for this direction?
 *     - These affect all characters, from players to followers to events.
 *     - Moving slower goes down 1 speed level.
 *     - Moving faster goes up 1 speed level.
 * 
 *   Diagonal Directions:
 * 
 *     Lower Left:
 *     Lower Right:
 *     Upper Left:
 *     Upper Right:
 *     - What is the movement speed modifier for this direction?
 *     - These affect all characters, from players to followers to events.
 *     - Moving slower goes down 1 speed level.
 *     - Moving faster goes up 1 speed level.
 * 
 * ---
 * 
 * SMART: Smart Blink X Tiles
 * - Player uses "Smart Blink" to teleport forward a distance.
 * - If this is last listed command, this can collide with events.
 * 
 *   Mechanics:
 * 
 *     Distance:
 *     - How many tiles will the player teleport forward?
 *     - You may use JavaScript code.
 * 
 *     Cooldown:
 *     - How many frames must the player wait before reuse?
 *     - You may use JavaScript code.
 * 
 *     Common Event ID:
 *     - If the Smash Blink is successful, play this Common Event as a
 *       Once Parallel.
 *     - Use 0 for none.
 *     - This will NOT play if the player cannot Smart Blink.
 * 
 *   Restrictions:
 * 
 *     Non-Land Regions:
 *     - Which regions forbid Smart Blink from landing on it?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *     Non-Land Terrain Tags:
 *     - Which tags forbid Smart Blink from landing on it?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *     Non-Pass Regions:
 *     - Which regions will block Smart Blink from going further?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *     Non-Pass Terrain Tags:
 *     - Which tags will block Smart Blink from going further?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *   Visuals:
 * 
 *     Animation ID:
 *     - What animation do you wish to play on the player if the player can
 *       Smart Blink?
 *     - This will NOT play if the player cannot Smart Blink.
 * 
 *     Motion Trail Settings:
 *     - Adjust the motion trail settings for this Smart Movement.
 *     - For more details, look in the sub section below.
 * 
 *   Sound Effect:
 * 
 *     Filename:
 *     - Filename of the sound effect played for a successful Smart Blink.
 *     - This will NOT play if the player cannot Smart Blink.
 * 
 *     Volume:
 *     - Volume of the sound effect played for a successful Smart Blink.
 *     - This will NOT play if the player cannot Smart Blink.
 * 
 *     Pitch:
 *     - Pitch of the sound effect played for a successful Smart Blink.
 *     - This will NOT play if the player cannot Smart Blink.
 * 
 *     Pan:
 *     - Pan of the sound effect played for a successful Smart Blink.
 *     - This will NOT play if the player cannot Smart Blink.
 * 
 * ---
 * 
 * SMART: Smart Jump X Tiles
 * - Player uses "Smart Jump" to leap forward a distance.
 * - If this is last listed command, this can collide with events.
 * 
 *   Mechanics:
 * 
 *     Distance:
 *     - How many tiles will the player jump forward?
 *     - You may use JavaScript code.
 * 
 *     Cooldown:
 *     - How many frames must the player wait before reuse?
 *     - You may use JavaScript code.
 * 
 *     Common Event ID:
 *     - If the Smash Jump is successful, play this Common Event as a
 *       Once Parallel.
 *     - Use 0 for none.
 *     - This will NOT play if the player cannot Smart Jump.
 * 
 *   Restrictions:
 * 
 *     Non-Land Regions:
 *     - Which regions forbid Smart Jump from landing on it?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *     Non-Land Terrain Tags:
 *     - Which tags forbid Smart Jump from landing on it?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *     Non-Pass Regions:
 *     - Which regions will block Smart Jump from going further?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *     Non-Pass Terrain Tags:
 *     - Which tags will block Smart Jump from going further?
 *     - Adds to map, tileset, and Plugin Parameter settings.
 * 
 *   Visuals:
 * 
 *     Animation ID:
 *     - What animation do you wish to play on the player if the player can
 *       Smart Jump?
 *     - This will NOT play if the player cannot Smart Jump.
 * 
 *     Motion Trail Settings:
 *     - Adjust the motion trail settings for this Smart Movement.
 *     - For more details, look in the sub section below.
 * 
 *   Sound Effect:
 * 
 *     Filename:
 *     - Filename of the sound effect played for a successful Smart Jump.
 *     - This will NOT play if the player cannot Smart Jump.
 * 
 *     Volume:
 *     - Volume of the sound effect played for a successful Smart Jump.
 *     - This will NOT play if the player cannot Smart Jump.
 * 
 *     Pitch:
 *     - Pitch of the sound effect played for a successful Smart Jump.
 *     - This will NOT play if the player cannot Smart Jump.
 * 
 *     Pan:
 *     - Pan of the sound effect played for a successful Smart Jump.
 *     - This will NOT play if the player cannot Smart Jump.
 * 
 * ---
 * 
 * SMART: Smart Rush X Tiles
 * - Player uses "Smart Rush" to rush forward a distance.
 * - If this is last listed command, this can collide with events.
 * 
 *   Mechanics:
 * 
 *     Distance:
 *     - How many tiles will player charge forward?
 *     - You may use JavaScript code.
 * 
 *     Cooldown:
 *     - How many frames must the player wait before reuse?
 *     - You may use JavaScript code.
 * 
 *     Common Event ID:
 *     - If the Smash Rush is successful, play this Common Event as a
 *       Once Parallel.
 *     - Use 0 for none.
 *     - This will NOT play if the player cannot Smart Rush.
 * 
 *     Switch(es):
 *     - Which Switch(es) will turn ON during Smart Rush?
 *     - This Switch(es) will also turn OFF after.
 * 
 *   Visuals:
 * 
 *     Animation ID:
 *     - What animation do you wish to play on the player if the player can
 *       Smart Rush?
 *     - This will NOT play if the player cannot Smart Rush.
 * 
 *     Motion Trail Settings:
 *     - Adjust the motion trail settings for this Smart Movement.
 *     - For more details, look in the sub section below.
 * 
 *     Speed Rate:
 *     - How much faster is "Smart Rush" compared to Dashing?
 *     - You may use JavaScript code.
 * 
 *   Sound Effect:
 * 
 *     Filename:
 *     - Filename of the sound effect played for a successful Smart Rush.
 *     - This will NOT play if the player cannot Smart Rush.
 * 
 *     Volume:
 *     - Volume of the sound effect played for a successful Smart Rush.
 *     - This will NOT play if the player cannot Smart Rush.
 * 
 *     Pitch:
 *     - Pitch of the sound effect played for a successful Smart Rush.
 *     - This will NOT play if the player cannot Smart Rush.
 * 
 *     Pan:
 *     - Pan of the sound effect played for a successful Smart Rush.
 *     - This will NOT play if the player cannot Smart Rush.
 * 
 * ---
 * 
 * Motion Trail Settings
 * - These are sub-settings found for Smart Blink, Smart Jump, and Smart Rush.
 * 
 *   General:
 * 
 *     Override?:
 *     - Override Motion Trail settings temporarily?
 *     - Otherwise, use current player Motion Trail settings.
 * 
 *   Settings:
 * 
 *     Delay:
 *     - How many frames to delay by when creating a motion trail?
 *     - The higher the delay, the less after images there are.
 * 
 *     Duration:
 *     - How many frames should the motion trail last?
 *     - What do you want to be its duration?
 * 
 *     Hue:
 *     - What do you want to be the hue for the motion trail?
 * 
 *     Starting Opacity:
 *     - What starting opacity value do you want for the motion trail?
 *     - Opacity values decrease over time.
 * 
 *     Tone:
 *     - What tone do you want for the motion trail?
 *     - Format: [Red, Green, Blue, Gray]
 * 
 * ---
 * 
 * SMART: Wait for Smart Blink
 * - Waits for player to finish Smart Blinking before continuing.
 * 
 * ---
 * 
 * SMART: Wait for Smart Jump
 * - Waits for player to finish Smart Jumping before continuing.
 * 
 * ---
 * 
 * SMART: Wait for Smart Rush
 * - Waits for player to finish Smart Rushing before continuing.
 * 
 * ---
 * 
 * === Smooth Camera Plugin Commands ===
 * 
 * ---
 *
 * SMOOTH CAMERA: Enable/Disable
 * - Enable or Disable the Smooth Camera.
 *
 *   Enable/Disable?:
 *   - Enables or Disables Smooth Camera.
 *
 * ---
 *
 * SMOOTH CAMERA: Speed Change
 * - Change the scrolling speed for the Smooth Camera.
 *
 *   Walk Speed:
 *
 *     Horizontal Rate:
 *     - Horizontal walking scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 *     Vertical Rate:
 *     - Vertical walking scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 *   Dash Speed:
 *
 *     Horizontal Rate:
 *     - Horizontal dashing scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 *     Vertical Rate:
 *     - Vertical dashing scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Dust Cloud Settings
 * ============================================================================
 *
 * Dust Clouds can appear when the player (or any character) is dashing. The
 * spawned dust clouds have some randomness to them so not all of them are the
 * same size and scale. You can use images for custom dust clouds or use plugin
 * generated dust clouds for those who don't have custom images to use.
 *
 * ---
 *
 * Default
 * 
 *   Default Enabled?:
 *   - Are Dust Clouds enabled by default?
 * 
 * ---
 * 
 * Appearance:
 * 
 *   Filename:
 *   - Filename of the Dust Cloud. Leave empty if using none.
 * 
 *   Color:
 *   - Color of the dust cloud in #rrggbb format.
 *   - For generated dust clouds only.
 *   - Ignore if using image.
 * 
 *   Radius:
 *   - What is the max radius of this dust cloud?
 *   - For generated dust clouds only.
 *   - Ignore if using image.
 * 
 *   Fullness:
 *   - What is the fullness level (0.0 to 1.0)?
 *   - For generated dust clouds only.
 *   - Ignore if using image.
 * 
 * ---
 * 
 * Animation:
 * 
 *   Duration:
 *   - How many frames will a dust cloud remain on screen?
 * 
 *   Starting Opacity:
 *   - What is the starting opacity (0-255)?
 *   - Dust cloud opacity will gradually go to 0.
 * 
 *   Starting Scale:
 *   - What is the starting scale (0.0 to 1.0)?
 *   - Dust cloud scale will gradually go to 1.0.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Footprint Mark Settings
 * ============================================================================
 *
 * Footprint marks can appear on certain tiles probably marked by specific
 * regions and/or terrain tags. They will not appear normally unless you change
 * up the settings.
 *
 * ---
 *
 * General
 * 
 *   Default Enabled?:
 *   - Are footprint marks enabled by default?
 *
 * ---
 *
 * Appearance
 * 
 *   Opacity:
 *   - What is the starting opacity of the footprint?
 * 
 *   Duration:
 *   - How many frames will footprints remain on the screen
 *     before disappearing?
 * 
 *   Follower Variance:
 *   - What variance should followers have for their footprints?
 *   - This is to avoid them all stepping in the same place.
 *
 * ---
 *
 * Map Defaults
 * 
 *   Regions:
 *   - Which Regions will have footprints appear by default?
 * 
 *   Terrain Tags:
 *   - Which terrain tags will have footprints appear by default?
 *
 * ---
 *
 * Standard Directions
 * 
 *   Down:
 *   Left:
 *   Right:
 *   Up:
 *   - Settings used for footprints when facing moving direction.
 *   - For normal sprite sheets: 0 is left, 1 is center, 2 is right.
 *
 * ---
 *
 * Diagonal Directions
 * 
 *   Lower Left:
 *   Lower Right:
 *   Upper Left:
 *   Upper Right:
 *   - Settings used for footprints when facing moving direction.
 *   - For normal sprite sheets: 0 is left, 1 is center, 2 is right.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Footstep Sounds Settings
 * ============================================================================
 *
 * The following plugin parameters are used to modify the footstep sounds that
 * are played whenever characters move.
 *
 * ---
 *
 * General
 * 
 *   Default Enabled?:
 *   - Are footstep sounds enabled by default?
 * 
 *   Sound by Frame?:
 *   - Play footstep sounds at certain sprite frames or with each tile step?
 *   - For those who want the Yanfly Engine Plugins timing, set this to false.
 *   - On the flipside, setting it to true will cause footstep sounds to occur
 *     whenever the sprite sets its foot down (assuming you setup the frames
 *     correctly with the plugin parameter below).
 * 
 *     Audible Frame(s):
 *     - Which sprite sheet "frames" will play a sound?
 *     - Sprite sheet Frames start at 0.
 * 
 *   Walk Animation Modifier:
 *   - What is the rate at which animations play for walking?
 *   - This is to ensure the sound effects synch up.
 * 
 *   Dash Animation Modifier:
 *   - What is the rate at which animations play for dashing?
 *   - This is to ensure the sound effects synch up.
 *
 * ---
 *
 * Default Sound
 * 
 *   Filename:
 *   - Filename of the sound effect played.
 * 
 *   Volume:
 *   - Volume of the sound effect played.
 * 
 *   Pitch:
 *   - Pitch of the sound effect played.
 * 
 *   Pan:
 *   - Pan of the sound effect played.
 *
 * ---
 *
 * Distance
 * 
 *   Volume Modifier:
 *   - Modifier per tile distance away from the player.
 *   - Use a decimal value.
 * 
 *   Pitch Modifier:
 *   - Modifier per tile distance away from the player.
 *   - Use a decimal value.
 * 
 *   Pan Modifier:
 *   - Modifier per tile distance away from the player.
 *   - Use an integer value.
 *
 * ---
 *
 * Actor Modifiers
 * 
 *   Enabled for Actors?:
 *   - Are footstep sounds enabled for actors by default?
 * 
 *   Volume Modifier:
 *   - Volume modifier rate for actors.
 *   - Use a decimal value.
 * 
 *   Pitch Modifier:
 *   - Pitch modifier rate for actors.
 *   - Use a decimal value.
 *
 * ---
 *
 * Event Modifiers
 * 
 *   Enabled for Events?:
 *   - Are footstep sounds enabled for events by default?
 * 
 *   Volume Modifier:
 *   - Volume modifier rate for events.
 *   - Use a decimal value.
 * 
 *   Pitch Modifier:
 *   - Pitch modifier rate for events.
 *   - Use a decimal value.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Smart Blink Settings
 * ============================================================================
 *
 * Smart Blink is a Plugin Command launched action. The action will cause the
 * player to teleport forward (up to) a measured distance, bypassing any
 * obstacles and/or walls inbetween. If the Plugin Command is placed at the end
 * of the event list, then the player is able to trigger any other events on
 * the tile that the player has landed on.
 * 
 * Smart Blinking can be customized to not ignore all obstacles and/or walls.
 * In fact, through clever usage of Regions and/or Terrain Tags, game devs can
 * create areas that the player cannot teleport past (resulting in a barrier)
 * or a place that players cannot land on top of (such as rooftops). These
 * restrictions can be made on a global scale, on a map-basis, tileset-basis,
 * or even by Plugin Command-basis.
 * 
 * The Plugin Command best works when paired with a plugin like VisuStella MZ's
 * Button Common Events.
 * 
 * The Plugin Parameters below are the settings that are always static
 * throughout all Smart Blinks.
 *
 * ---
 * 
 * Mechanics
 * 
 *   Allow Diagonal Blink?:
 *   - Allow diagonal Smart Blinking?
 *   - VS8 Sprites only.
 *   - Does NOT work with standard RTP.
 *   - This is disabled by default due to how much distance a diagonal
 *     Smart Blink is able to cover.
 * 
 *   Floor to Ceiling?:
 *   - Allow blinking from floor to ceiling tiles?
 * 
 * ---
 *
 * Visual
 * 
 *   Blur Duration:
 *   - Requires PixiJS Filters!
 *   - How long will the motion blur last?
 * 
 *   Blur Angle Offset:
 *   - Requires PixiJS Filters!
 *   - Offset the motion blur angle by this many degrees.
 *   - Otherwise, the motion blur angle is equal to the direction the player is
 *     facing while blinking.
 *
 * ---
 *
 * Restrictions
 * 
 *   Non-Land Regions:
 *   - Which regions forbid Smart Blink from landing on it?
 *   - These are defaults, which can be replaced by notetags.
 * 
 *   Non-Land Terrain Tags:
 *   - Which tags forbid Smart Blink from landing on it?
 *   - These are defaults, which can be replaced by notetags.
 * 
 *   Non-Pass Regions:
 *   - Which regions will block Smart Blink from going further?
 *   - These are defaults, which can be replaced by notetags.
 * 
 *   Non-Pass Terrain Tags:
 *   - Which tags will block Smart Blink from going further?
 *   - These are defaults, which can be replaced by notetags.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Smart Jump Settings
 * ============================================================================
 *
 * Smart Jump is a Plugin Command launched action. The action will cause the
 * player to jump forward (up to) a measured distance, bypassing any obstacles
 * and/or walls inbetween. If the Plugin Command is placed at the end of the
 * event list, then the player is able to trigger any other events on the tile
 * that the player has landed on.
 * 
 * Smart Jumping can be customized to not ignore all obstacles and/or walls.
 * In fact, through clever usage of Regions and/or Terrain Tags, game devs can
 * create areas that the player cannot jump past (resulting in a barrier)
 * or a place that players cannot land on top of (such as rooftops). These
 * restrictions can be made on a global scale, on a map-basis, tileset-basis,
 * or even by Plugin Command-basis.
 * 
 * Smart Jump also has height based interactions, allowing the player to jump
 * from equal height "regions" to another, such as scaling a cliff. Players can
 * also jump from higher regions to lower regions (as long as both are marked
 * as Height-Based Regions). Here are how Height-Based Regions interact:
 * 
 *   - Players can jump from a height-based region to another height-based
 *     region of the same or lower value as long as that region is listed, too.
 *     - Regions listed: 10, 13, 15.
 *     - ie. The player can jump from Region 15 to 15.
 *     - ie. The player can jump from Region 15 to 13.
 *     - ie. The player can jump from Region 15 to 10.
 *     - ie. The player CANNOT jump from Region 13 to 15.
 *     - ie. The player CANNOT jump from Region 10 to 13.
 *     - ie. The player CANNOT jump from Region 10 to 15.
 * 
 *   - The lowest value number in the list is considered a "ledge" and the
 *     lowest possible level.
 * 
 *   - Players can jump in and out of the lowest level regions into non-height
 *     marked regions.
 * 
 *   - If the player is jumping towards the up, left, right directions, they
 *     cannot jump directly into a "ledge" region unless they are adjacent to
 *     the marked tile. A distance greater than 1 tile apart cannot be and the
 *     jump will be cut short.
 * 
 *   - If the player is jumping upward towards a "ledge", the player will jump
 *     directly onto the next available tile.
 * 
 *   - If the player is jumping towards the left or right directions into a
 *     "ledge" region, the player will "fall" a tile distance equal to the
 *     difference from the region height they're jumping from.
 *     - Regions listed: 10, 13, 15.
 *     - If the player is on Region 15 and jumps into a ledge (10), the player
 *       will drop 5 tiles downward.
 *     - If the player is on Region 13 and jumps into a ledge (10), the player
 *       will drop 3 tiles downward.
 * 
 *   - If the player is jumping downward towards a "ledge", the player will
 *     jump the full distance.
 * 
 * Keep in mind that despite the fact that there is Height-Based Region support
 * for Smart Jump, maps in RPG Maker MZ are still inherently 2D. Therefore, not
 * everything will look correct for every jump-related scenario involving
 * region heights. You may need to make adjustments to maps that work best for
 * the limited 2D nature of mapping in order to adhere to what Height-Based
 * Region support can handle.
 * 
 * The Plugin Command best works when paired with a plugin like VisuStella MZ's
 * Button Common Events.
 * 
 * When Smart Jumping, the player cannot jump from a floor tile to a ceiling
 * tiles (the top tiles of A4 tiles). The player also cannot jump over them to
 * reach the other side of the ceiling tile onto a floor tile.
 * 
 * The Plugin Parameters below are the settings that are always static
 * throughout all Smart Blinks.
 *
 * ---
 * 
 * Mechanics
 * 
 *   Allow Diagonal Jump?:
 *   - Allow diagonal Smart Jumping?
 *   - VS8 Sprites only.
 *   - Does NOT work with standard RTP.
 *   - This is disabled by default due to how much distance a diagonal
 *     Smart Jump is able to cover.
 * 
 *   Height-Based Regions:
 *   - Determine which regions are height-based.
 *   - The lowest value region will be a "ledge".
 * 
 * ---
 *
 * Restrictions
 * 
 *   Non-Land Regions:
 *   - Which regions forbid Smart Blink from landing on it?
 *   - These are defaults, which can be replaced by notetags.
 * 
 *   Non-Land Terrain Tags:
 *   - Which tags forbid Smart Blink from landing on it?
 *   - These are defaults, which can be replaced by notetags.
 * 
 *   Non-Pass Regions:
 *   - Which regions will block Smart Blink from going further?
 *   - These are defaults, which can be replaced by notetags.
 * 
 *   Non-Pass Terrain Tags:
 *   - Which tags will block Smart Blink from going further?
 *   - These are defaults, which can be replaced by notetags.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Smart Rush Settings
 * ============================================================================
 *
 * Smart Rush is a Plugin Command launched action. The action will cause the
 * player to rush forward at faster (normally) than dash speed. If the Plugin
 * Command is placed at the end of the event list, then the player is able to
 * collide with other events, possibly triggering them.
 * 
 * While rushing forward, any switches listed in the Plugin Command will be
 * turned to the ON position, then OFF position once the rushing is finished.
 * This means that any events that the player collides with can have a unique
 * interaction from being rushed into. Examples include making objects fall
 * from trees, breaking down locked doors, or smashing apart rubble.
 * 
 * The Plugin Command best works when paired with a plugin like VisuStella MZ's
 * Button Common Events.
 * 
 * When Smart Rushing into walls, solid objects, or events with a priority type
 * as "Same As Characters", the screen can shake when crashing. This does not
 * apply when crashing into water tiles.
 * 
 * The Plugin Parameters below are the settings that are always static
 * throughout all Smart Rushes.
 *
 * ---
 * 
 * Mechanics
 * 
 *   Allow Diagonal Rush?:
 *   - Allow diagonal Smart Rushing?
 *   - VS8 Sprites only.
 *   - Does NOT work with standard RTP.
 *   - This is disabled by default due to how much distance a diagonal
 *     Smart Rush is able to cover.
 *
 * Visual
 * 
 *   Blur Duration:
 *   - Requires PixiJS Filters!
 *   - How long will the motion blur last?
 * 
 *   Blur Angle Offset:
 *   - Requires PixiJS Filters!
 *   - Offset the motion blur angle by this many degrees.
 *   - Otherwise, the motion blur angle is equal to the direction the player is
 *     rushing at.
 *
 * ---
 *
 * Crash Shake
 * 
 *   Enable Crash Shake?:
 *   - Cause the screen to shake after crashing into an entity?
 *   - Entities can be walls or events.
 * 
 *   Power Rate:
 *   - The power modifier for the screen shake upon crashing into something.
 * 
 *   Speed Rate:
 *   - The speed modifier for the screen shake upon crashing into something.
 * 
 *   Shaking Duration:
 *   - How many frames will the screen shake last after crashing into
 *     something?
 *
 * ---
 * 
 * Non-Crash
 * 
 *   Regions:
 *   - When crashing into these region-marked tiles, do not shake the screen.
 *   - This is primarily used for tiles such as water tiles so that it doesn't
 *     look like there's an invisible wall where the player is crashing into.
 * 
 *   Terrain Tags:
 *   - When crashing into these terrain tagged tiles, do not shake the screen.
 *   - This is primarily used for tiles such as water tiles so that it doesn't
 *     look like there's an invisible wall where the player is crashing into.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Smooth Camera Scrolling Settings
 * ============================================================================
 *
 * Adjust the settings for smooth camera scrolling while the player moves.
 *
 * ---
 *
 * Default
 * 
 *   Default Enabled?:
 *   - Is the Smooth Camera enabled by default?
 *
 *   Walk Speed:
 *
 *     Horizontal Rate:
 *     - Horizontal walking scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 *     Vertical Rate:
 *     - Vertical walking scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 *   Dash Speed:
 *
 *     Horizontal Rate:
 *     - Horizontal dashing scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 *     Vertical Rate:
 *     - Vertical dashing scroll rate adjustment.
 *     - Lower: faster; Higher: slower
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters control the settings you see in the Options menu.
 * These are for players who might be bothered by some of the various features
 * found in the plugin and will grant them the ability to turn them on/off.
 *
 * ---
 *
 * Default
 * 
 *   Default Enabled?:
 *   - Is the Smooth Camera enabled by default?
 * 
 * ---
 *
 * Dust Cloud:
 * 
 *   Add Option?:
 *   - Add the 'Dust Clouds' option to the Options menu?
 * 
 *   Option Name:
 *   - Command name of the option.
 *
 * ---
 *
 * Smooth Camera:
 * 
 *   Add Option?:
 *   - Add the 'Smooth Scroll' option to the Options menu?
 * 
 *   Option Name:
 *   - Command name of the option.
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
 * * Arisu
 * * Olivia
 * * Irina
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.04: July 7, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Smart Blink > Mechanics > Floor to Ceiling?
 * **** Allow blinking from floor to ceiling tiles?
 * 
 * Version 1.03: June 30, 2022
 * * Bug Fixes!
 * ** Followers will no longer cause footstep sounds while in a vehicle.
 *    Fix made by Irina.
 * * Documentation Update
 * ** Added to: Plugin Parameters: Smart Rush Settings
 * *** When Smart Rushing into walls, solid objects, or events with a priority
 *     type as "Same As Characters", the screen can shake when crashing. This
 *     does not apply when crashing into water tiles.
 * ** Added to: Plugin Parameters: Smart Jump Settings
 * *** When Smart Jumping, the player cannot jump from a floor tile to a
 *     ceiling tiles (the top tiles of A4 tiles). The player also cannot jump
 *     over them to reach the other side of the ceiling tile onto a floor tile.
 * * Feature Update!
 * ** Smart Rush will no longer play a crash animation when targeting a water
 *    tile. Update made by Irina.
 * ** Smart Jump will no longer be able to jump over ceiling tiles if the
 *    player character is on a floor tile. Update made by Irina.
 * ** Smart Jump will no longer be able to jump onto ceiling tiles if the
 *    player character is on a floor tile. Update made by Irina.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.02: June 23, 2022
 * * Feature Update!
 * ** Smart Jump, Smart Rush, and Smart Blink are now temporarily disabled
 *    while followers are in the middle of gathering to reduce errors. Update
 *    made by Olivia.
 * 
 * Version 1.01: March 31, 2022
 * * Bug Fixes!
 * ** <Terrain Tag x Footsteps: filename> notetag should now work properly.
 *    Fix made by Arisu.
 * 
 * Version 1.00 Official Release Date: April 4, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_DustCloud
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_DustCloud
 * @text Category - Dust Clouds
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DustCloudEnableDisable
 * @text DUST CLOUDS: Enable/Disable
 * @desc Enable or Disable the Dust Clouds from spawning when dashing.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Dust Clouds ON
 * @off Dust Clouds OFF
 * @desc Enables or Disables Dust Clouds.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DustCloudChangeSettings
 * @text DUST CLOUDS: Change Settings
 * @desc Alter the existing Dust Clouds settings.
 * 
 * @arg Appearance
 * 
 * @arg filename:str
 * @text Filename
 * @parent Appearance
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename of the Dust Cloud. Leave empty if using none.
 * @default 
 *
 * @arg color:str
 * @text Color
 * @parent Appearance
 * @desc Color of the dust cloud in #rrggbb format.
 * For generated dust clouds only. Ignore if using image.
 * @default #ffffff
 *
 * @arg radius:num
 * @text Radius
 * @parent Appearance
 * @type number
 * @min 1
 * @desc What is the max radius of this dust cloud?
 * For generated dust clouds only. Ignore if using image.
 * @default 24
 *
 * @arg fullness:num
 * @text Fullness
 * @parent Appearance
 * @desc What is the fullness level (0.0 to 1.0)?
 * For generated dust clouds only. Ignore if using image.
 * @default 0.20
 * 
 * @arg Animation
 *
 * @arg wholeDuration:num
 * @text Duration
 * @parent Animation
 * @type number
 * @min 1
 * @desc How many frames will a dust cloud remain on screen?
 * @default 20
 *
 * @arg startOpacity:num
 * @text Starting Opacity
 * @parent Animation
 * @type number
 * @min 1
 * @max 255
 * @desc What is the starting opacity (0-255)?
 * Dust cloud opacity will gradually go to 0.
 * @default 192
 *
 * @arg startScale:num
 * @text Starting Scale
 * @parent Animation
 * @desc What is the starting scale (0.0 to 1.0)?
 * Dust cloud scale will gradually go to 1.0.
 * @default 0.2
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Footprints
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Footprints
 * @text Category - Footprints & Footsteps
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FootprintsEnableDisable
 * @text FOOTPRINTS: Enable/Disable
 * @desc Enable or Disable footprint marks from being made.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Footprint Marks ON
 * @off Footprint Marks OFF
 * @desc Enables or Disables footprint marks.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FootstepsEnableDisable
 * @text FOOTSTEPS: Enable/Disable
 * @desc Enable or Disable footstep sounds from being played.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Footstep Sounds ON
 * @off Footstep Sounds OFF
 * @desc Enables or Disables footstep sounds.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MotionBlur
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_MotionBlur
 * @text Category - Motion Blur
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionBlurPlayer
 * @text MOTION BLUR: Player
 * @desc Plays a Motion Blur on the player sprite.
 * Requires Pixi JS Filters!
 *
 * @arg ApplyFollowers:eval
 * @text Apply to Followers?
 * @type boolean
 * @on Apply
 * @off Ignore
 * @desc Apply this motion blur effect to followers, too?
 * @default true
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc Play the Motion Blur effect for how many frames?
 * You may use JavaScript code.
 * @default 30
 *
 * @arg AngleOffset:eval
 * @text Angle Offset
 * @desc Offset the motion blur angle by this many degrees.
 * Original angle is based on facing direction.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionBlurFollower
 * @text MOTION BLUR: Follower(s)
 * @desc Plays a Motion Blur on the follower sprite(s).
 * Requires Pixi JS Filters!
 *
 * @arg Index:arraynum
 * @text Follower Index(es)
 * @type number[]
 * @desc Select which follower index(es) to affect.
 * Index values start at 0.
 * @default ["0"]
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc Play the Motion Blur effect for how many frames?
 * You may use JavaScript code.
 * @default 30
 *
 * @arg AngleOffset:eval
 * @text Angle Offset
 * @desc Offset the motion blur angle by this many degrees.
 * Original angle is based on facing direction.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionBlurEvent
 * @text MOTION BLUR: Event(s)
 * @desc Plays a Motion Blur on event sprite(s).
 * Requires Pixi JS Filters!
 *
 * @arg EventID:arraynum
 * @text Event ID(s)
 * @type number[]
 * @desc Select which event(s) to affect.
 * Use "0" for "this event".
 * @default ["0"]
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc Play the Motion Blur effect for how many frames?
 * You may use JavaScript code.
 * @default 30
 *
 * @arg AngleOffset:eval
 * @text Angle Offset
 * @desc Offset the motion blur angle by this many degrees.
 * Original angle is based on facing direction.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MotionTrails
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_MotionTrails
 * @text Category - Motion Trails
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailSettingsChangePlayer
 * @text MOTION TRAIL: Change Settings For Player?
 * @desc Change Motion Trail settings for the player.
 * This does NOT enable them. You must do that separately.
 *
 * @arg ApplyFollowers:eval
 * @text Apply to Followers?
 * @type boolean
 * @on Apply
 * @off Ignore
 * @desc Apply this change to followers, too?
 * @default true
 *
 * @arg delay:num
 * @text Delay
 * @type number
 * @min 1
 * @desc How many frames to delay by when creating a motion trail?
 * The higher the delay, the less after images there are.
 * @default 4
 *
 * @arg duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should the motion trail last?
 * What do you want to be its duration?
 * @default 30
 *
 * @arg hue:num
 * @text Hue
 * @type number
 * @min 0
 * @max 255
 * @desc What do you want to be the hue for the motion trail?
 * @default 0
 *
 * @arg opacityStart:num
 * @text Starting Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc What starting opacity value do you want for the motion
 * trail? Opacity values decrease over time.
 * @default 128
 *
 * @arg tone:eval
 * @text Tone
 * @desc What tone do you want for the motion trail?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailSettingsChangeFollower
 * @text MOTION TRAIL: Change Settings For Follower(s)?
 * @desc Change Motion Trail settings for follower(s).
 * This does NOT enable them. You must do that separately.
 *
 * @arg Index:arraynum
 * @text Follower Index(es)
 * @type number[]
 * @desc Select which follower index(es) to affect.
 * Index values start at 0.
 * @default ["0"]
 *
 * @arg delay:num
 * @text Delay
 * @type number
 * @min 1
 * @desc How many frames to delay by when creating a motion trail?
 * The higher the delay, the less after images there are.
 * @default 4
 *
 * @arg duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should the motion trail last?
 * What do you want to be its duration?
 * @default 30
 *
 * @arg hue:num
 * @text Hue
 * @type number
 * @min 0
 * @max 255
 * @desc What do you want to be the hue for the motion trail?
 * @default 0
 *
 * @arg opacityStart:num
 * @text Starting Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc What starting opacity value do you want for the motion
 * trail? Opacity values decrease over time.
 * @default 128
 *
 * @arg tone:eval
 * @text Tone
 * @desc What tone do you want for the motion trail?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailSettingsChangeEvent
 * @text MOTION TRAIL: Change Settings For Event(s)?
 * @desc Change Motion Trail settings for event(s).
 * This does NOT enable them. You must do that separately.
 *
 * @arg EventID:arraynum
 * @text Event ID(s)
 * @type number[]
 * @desc Select which event(s) to affect.
 * Use "0" for "this event".
 * @default ["0"]
 *
 * @arg delay:num
 * @text Delay
 * @type number
 * @min 1
 * @desc How many frames to delay by when creating a motion trail?
 * The higher the delay, the less after images there are.
 * @default 4
 *
 * @arg duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should the motion trail last?
 * What do you want to be its duration?
 * @default 30
 *
 * @arg hue:num
 * @text Hue
 * @type number
 * @min 0
 * @max 255
 * @desc What do you want to be the hue for the motion trail?
 * @default 0
 *
 * @arg opacityStart:num
 * @text Starting Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc What starting opacity value do you want for the motion
 * trail? Opacity values decrease over time.
 * @default 128
 *
 * @arg tone:eval
 * @text Tone
 * @desc What tone do you want for the motion trail?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailCreateForPlayer
 * @text MOTION TRAIL: Create For Player
 * @desc Immediately create a motion trail sprite for the player
 * in the player's current position.
 *
 * @arg ApplyFollowers:eval
 * @text Apply to Followers?
 * @type boolean
 * @on Apply
 * @off Ignore
 * @desc Apply this effect to followers, too?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailCreateForFollower
 * @text MOTION TRAIL: Create For Follower(s)
 * @desc Immediately create a motion trail sprite for the follower(s)
 * in the follower(s)'s current position.
 *
 * @arg Index:arraynum
 * @text Follower Index(es)
 * @type number[]
 * @desc Select which follower index(es) to target.
 * Index values start at 0.
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailCreateForEvent
 * @text MOTION TRAIL: Create For Event(s)
 * @desc Immediately create a motion trail sprite for the event(s)
 * in the event(s)'s current position.
 *
 * @arg EventID:arraynum
 * @text Event ID(s)
 * @type number[]
 * @desc Select which event(s) to target.
 * Use "0" for "this event".
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailEnablePlayer
 * @text MOTION TRAIL: Enable For Player?
 * @desc Enables/disables Motion Trails for player sprite.
 *
 * @arg ApplyFollowers:eval
 * @text Apply to Followers?
 * @type boolean
 * @on Apply
 * @off Ignore
 * @desc Apply this change to followers, too?
 * @default true
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Motion Trails ON
 * @off Motion Trails OFF
 * @desc Enables or Disables Motion Trails.
 * @default true
 *
 * @arg ImmediateCreate:eval
 * @text Immediately Create?
 * @type boolean
 * @on Create
 * @off Ignore
 * @desc Immediately create a motion trail?
 * Requires "Enabled" setting to also be true.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailEnableFollower
 * @text MOTION TRAIL: Enable For Follower(s)?
 * @desc Plays a Motion Blur on the follower sprite(s).
 * Requires Pixi JS Filters!
 *
 * @arg Index:arraynum
 * @text Follower Index(es)
 * @type number[]
 * @desc Select which follower index(es) to affect.
 * Index values start at 0.
 * @default ["0"]
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Motion Trails ON
 * @off Motion Trails OFF
 * @desc Enables or Disables Motion Trails.
 * @default true
 *
 * @arg ImmediateCreate:eval
 * @text Immediately Create?
 * @type boolean
 * @on Create
 * @off Ignore
 * @desc Immediately create a motion trail?
 * Requires "Enabled" setting to also be true.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MotionTrailEnableEvent
 * @text MOTION TRAIL: Enable For Event(s)?
 * @desc Plays a Motion Blur on event sprite(s).
 * Requires Pixi JS Filters!
 *
 * @arg EventID:arraynum
 * @text Event ID(s)
 * @type number[]
 * @desc Select which event(s) to affect.
 * Use "0" for "this event".
 * @default ["0"]
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Motion Trails ON
 * @off Motion Trails OFF
 * @desc Enables or Disables Motion Trails.
 * @default true
 *
 * @arg ImmediateCreate:eval
 * @text Immediately Create?
 * @type boolean
 * @on Create
 * @off Ignore
 * @desc Immediately create a motion trail?
 * Requires "Enabled" setting to also be true.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SmartMove
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_SmartMove
 * @text Category - Smart Movements
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartDirMoveSpeedMod
 * @text SMART: Directional Move Speed Modifier
 * @desc Global! These settings allow you to adjust the movement speed
 * modifiers when characters are facing certain directions.
 * 
 * @arg Standard
 * @text Standard Directions
 *
 * @arg dir2:str
 * @text Down Speed
 * @parent Standard
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @arg dir4:str
 * @text Left Speed
 * @parent Standard
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @arg dir6:str
 * @text Right Speed
 * @parent Standard
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @arg dir8:str
 * @text Up Speed
 * @parent Standard
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 * 
 * @arg Diagonal
 * @text Diagonal Directions
 *
 * @arg dir1:str
 * @text Lower Left Speed
 * @parent Diagonal
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @arg dir3:str
 * @text Lower Right Speed
 * @parent Diagonal
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @arg dir7:str
 * @text Upper Left Speed
 * @parent Diagonal
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @arg dir9:str
 * @text Upper Right Speed
 * @parent Diagonal
 * @type select
 * @option slower
 * @option normal
 * @option faster
 * @desc What is the movement speed modifier for this direction?
 * @default normal
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartBlinkDistance
 * @text SMART: Smart Blink X Tiles
 * @desc Player uses "Smart Blink" to teleport forward a distance.
 * If this is last listed command, this can collide with events.
 * 
 * @arg Mechanics
 *
 * @arg Distance:eval
 * @text Distance
 * @parent Mechanics
 * @desc How many tiles will the player teleport forward?
 * You may use JavaScript code.
 * @default 5
 *
 * @arg Cooldown:eval
 * @text Cooldown
 * @parent Mechanics
 * @desc How many frames must the player wait before reuse?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg OnSuccessCommonEventID:eval
 * @text Common Event ID
 * @parent Mechanics
 * @type common_event
 * @desc If the Smash Blink is successful, play this Common Event
 * as a Once Parallel. Use 0 for none.
 * @default 0
 * 
 * @arg Restrict
 * @text Restrictions
 *
 * @arg NonLandableRegions:arraynum
 * @text Non-Land Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions forbid Smart Blink from landing on it?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 *
 * @arg NonLandableTerrainTags:arraynum
 * @text Non-Land Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags forbid Smart Blink from landing on it?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 *
 * @arg NonPassableRegions:arraynum
 * @text Non-Pass Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions will block Smart Blink from going further?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 *
 * @arg NonPassableTerrainTags:arraynum
 * @text Non-Pass Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags will block Smart Blink from going further?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 * 
 * @arg Visual
 * @text Visuals
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @parent Visual
 * @type animation
 * @desc What animation do you wish to play on the player
 * if the player can Smart Blink?
 * @default 0
 *
 * @arg MotionTrail:struct
 * @text Motion Trail Settings
 * @parent Visual
 * @type struct<MotionTrail>
 * @desc Adjust the motion trail settings for this Smart Movement.
 * @default {"General":"","enabled:eval":"true","Settings":"","delay:num":"4","duration:num":"60","hue:num":"0","opacityStart:num":"255","tone:eval":"[0, 192, 192, 128]"}
 * 
 * @arg SoundEffect
 * @text Sound Effect
 *
 * @arg sfxName:str
 * @text Filename
 * @parent SoundEffect
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played for a successful Smart Blink.
 * @default Flash2
 *
 * @arg sfxVolume:num
 * @text Volume
 * @parent SoundEffect
 * @type number
 * @max 100
 * @desc Volume of the sound effect played for a successful Smart Blink.
 * @default 50
 *
 * @arg sfxPitch:num
 * @text Pitch
 * @parent SoundEffect
 * @type number
 * @desc Pitch of the sound effect played for a successful Smart Blink.
 * @default 120
 *
 * @arg sfxPan:num
 * @text Pan
 * @parent SoundEffect
 * @desc Pan of the sound effect played for a successful Smart Blink.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartJumpDistance
 * @text SMART: Smart Jump X Tiles
 * @desc Player uses "Smart Jump" to leap forward a distance.
 * If this is last listed command, this can collide with events.
 * 
 * @arg Mechanics
 *
 * @arg Distance:eval
 * @text Distance
 * @parent Mechanics
 * @desc How many tiles will the player jump forward?
 * You may use JavaScript code.
 * @default 2
 *
 * @arg Cooldown:eval
 * @text Cooldown
 * @parent Mechanics
 * @desc How many frames must the player wait before reuse?
 * You may use JavaScript code.
 * @default 5
 *
 * @arg OnSuccessCommonEventID:eval
 * @text Common Event ID
 * @parent Mechanics
 * @type common_event
 * @desc If the Smash Jump is successful, play this Common Event
 * as a Once Parallel. Use 0 for none.
 * @default 0
 * 
 * @arg Restrict
 * @text Restrictions
 *
 * @arg NonLandableRegions:arraynum
 * @text Non-Land Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions forbid Smart Jump from landing on it?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 *
 * @arg NonLandableTerrainTags:arraynum
 * @text Non-Land Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags forbid Smart Jump from landing on it?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 *
 * @arg NonPassableRegions:arraynum
 * @text Non-Pass Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions will block Smart Jump from going further?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 *
 * @arg NonPassableTerrainTags:arraynum
 * @text Non-Pass Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags will block Smart Jump from going further?
 * Adds to map, tileset, and Plugin Parameter settings.
 * @default []
 * 
 * @arg Visual
 * @text Visuals
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @parent Visual
 * @type animation
 * @desc What animation do you wish to play on the player
 * if the player can Smart Jump?
 * @default 0
 *
 * @arg MotionTrail:struct
 * @text Motion Trail Settings
 * @parent Visual
 * @type struct<MotionTrail>
 * @desc Adjust the motion trail settings for this Smart Movement.
 * @default {"General":"","enabled:eval":"true","Settings":"","delay:num":"4","duration:num":"30","hue:num":"0","opacityStart:num":"128","tone:eval":"[0, 0, 0, 0]"}
 * 
 * @arg SoundEffect
 * @text Sound Effect
 *
 * @arg sfxName:str
 * @text Filename
 * @parent SoundEffect
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played for a successful Smart Jump.
 * @default Jump1
 *
 * @arg sfxVolume:num
 * @text Volume
 * @parent SoundEffect
 * @type number
 * @max 100
 * @desc Volume of the sound effect played for a successful Smart Jump.
 * @default 50
 *
 * @arg sfxPitch:num
 * @text Pitch
 * @parent SoundEffect
 * @type number
 * @desc Pitch of the sound effect played for a successful Smart Jump.
 * @default 120
 *
 * @arg sfxPan:num
 * @text Pan
 * @parent SoundEffect
 * @desc Pan of the sound effect played for a successful Smart Jump.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartRushDistance
 * @text SMART: Smart Rush X Tiles
 * @desc Player uses "Smart Rush" to rush forward a distance.
 * If this is last listed command, this can collide with events.
 * 
 * @arg Mechanics
 *
 * @arg Distance:eval
 * @text Distance
 * @parent Mechanics
 * @desc How many tiles will player charge forward?
 * You may use JavaScript code.
 * @default 5
 *
 * @arg Cooldown:eval
 * @text Cooldown
 * @parent Mechanics
 * @desc How many frames must the player wait before reuse?
 * You may use JavaScript code.
 * @default 30
 *
 * @arg OnSuccessCommonEventID:eval
 * @text Common Event ID
 * @parent Mechanics
 * @type common_event
 * @desc If the Smash Rush is successful, play this Common Event
 * as a Once Parallel. Use 0 for none.
 * @default 0
 *
 * @arg Switches:arraynum
 * @text Switch(es)
 * @parent Mechanics
 * @type switch[]
 * @desc Which Switch(es) will turn ON during Smart Rush?
 * This Switch(es) will also turn OFF after.
 * @default []
 * 
 * @arg Visual
 * @text Visuals
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @parent Visual
 * @type animation
 * @desc What animation do you wish to play on the player
 * if the player can Smart Rush?
 * @default 0
 *
 * @arg MotionTrail:struct
 * @text Motion Trail Settings
 * @parent Visual
 * @type struct<MotionTrail>
 * @desc Adjust the motion trail settings for this Smart Movement.
 * @default {"General":"","enabled:eval":"true","Settings":"","delay:num":"1","duration:num":"30","hue:num":"0","opacityStart:num":"128","tone:eval":"[192, 0, 192, 128]"}
 *
 * @arg SpeedRate:eval
 * @text Speed Rate
 * @parent Visual
 * @desc How much faster is "Smart Rush" compared to Dashing?
 * You may use JavaScript code.
 * @default 1.50
 * 
 * @arg SoundEffect
 * @text Sound Effect
 *
 * @arg sfxName:str
 * @text Filename
 * @parent SoundEffect
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played for a successful Smart Rush.
 * @default Wind1
 *
 * @arg sfxVolume:num
 * @text Volume
 * @parent SoundEffect
 * @type number
 * @max 100
 * @desc Volume of the sound effect played for a successful Smart Rush.
 * @default 50
 *
 * @arg sfxPitch:num
 * @text Pitch
 * @parent SoundEffect
 * @type number
 * @desc Pitch of the sound effect played for a successful Smart Rush.
 * @default 120
 *
 * @arg sfxPan:num
 * @text Pan
 * @parent SoundEffect
 * @desc Pan of the sound effect played for a successful Smart Rush.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartMoveWaitForSmartBlink
 * @text SMART: Wait for Smart Blink
 * @desc Waits for player to finish Smart Blinking before continuing.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartMoveWaitForSmartJump
 * @text SMART: Wait for Smart Jump
 * @desc Waits for player to finish Smart Jumping before continuing.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmartMoveWaitForSmartRush
 * @text SMART: Wait for Smart Rush
 * @desc Waits for player to finish Smart Rushing before continuing.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SmoothCamera
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_SmoothCamera
 * @text Category - Smooth Camera
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmoothCameraEnableDisable
 * @text SMOOTH CAMERA: Enable/Disable
 * @desc Enable or Disable the Smooth Camera.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Smooth Camera ON
 * @off Smooth Camera OFF
 * @desc Enables or Disables Smooth Camera.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SmoothCameraSpeedChange
 * @text SMOOTH CAMERA: Speed Change
 * @desc Change the scrolling speed for the Smooth Camera.
 *
 * @arg WalkSpeed
 * @text Walking Speed
 *
 * @arg HorzWalk:num
 * @text Horizontal Rate
 * @parent WalkSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Horizontal walking scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 24
 *
 * @arg VertWalk:num
 * @text Vertical Rate
 * @parent WalkSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Vertical walking scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 24
 *
 * @arg DashSpeed
 * @text Dashing Speed
 *
 * @arg HorzDash:num
 * @text Horizontal Rate
 * @parent DashSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Horizontal dashing scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 16
 *
 * @arg VertDash:num
 * @text Vertical Rate
 * @parent DashSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Vertical dashing scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 16
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
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
 * @param MovementEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param DustCloud:struct
 * @text Dust Cloud Settings
 * @type struct<DustCloud>
 * @desc Adjust the settings for kicked up dust clouds whenever a character is dashing.
 * @default {"Default":"","Enabled:eval":"true","Appearance":"","filename:str":"","color:str":"#ffffff","radius:num":"24","fullness:num":"0.20","Animation":"","wholeDuration:num":"20","startOpacity:num":"192","startScale:num":"0.2"}
 *
 * @param Footprints:struct
 * @text Footprint Marks Settings
 * @type struct<Footprints>
 * @desc Adjust the settings for footprint marks whenever characters walk on the map.
 * @default {"General":"","Enabled:eval":"true","Appearance":"","startOpacity:num":"64","wholeDuration:num":"600","followerVariance:num":"4","MapDefaults":"","DefaultRegions:arraynum":"[]","DefaultTerrainTags:arraynum":"[]","StandardDirections":"","dir2:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"6\\\",\\\"height:num\\\":\\\"8\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"-4\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"6\\\",\\\"height:num\\\":\\\"8\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+4\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","dir4:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"8\\\",\\\"height:num\\\":\\\"3\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"-6\\\",\\\"offsetY:num\\\":\\\"-4\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"8\\\",\\\"height:num\\\":\\\"3\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"-6\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","dir6:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"8\\\",\\\"height:num\\\":\\\"3\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+6\\\",\\\"offsetY:num\\\":\\\"-4\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"8\\\",\\\"height:num\\\":\\\"3\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+6\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","dir8:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"6\\\",\\\"height:num\\\":\\\"8\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+4\\\",\\\"offsetY:num\\\":\\\"-4\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"6\\\",\\\"height:num\\\":\\\"8\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"-4\\\",\\\"offsetY:num\\\":\\\"-4\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","DiagonalDirections":"","dir1:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","dir3:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","dir7:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}","dir9:struct":"{\"pattern0:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern1:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern2:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern3:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern4:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern5:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern6:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern7:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern8:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern9:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\",\"pattern10:struct\":\"{\\\"Appearance\\\":\\\"\\\",\\\"filename:str\\\":\\\"\\\",\\\"Generated\\\":\\\"\\\",\\\"width:num\\\":\\\"0\\\",\\\"height:num\\\":\\\"0\\\",\\\"Offsets\\\":\\\"\\\",\\\"offsetX:num\\\":\\\"+0\\\",\\\"offsetY:num\\\":\\\"+0\\\"}\"}"}
 *
 * @param Footsteps:struct
 * @text Footstep Sounds Settings
 * @type struct<Footsteps>
 * @desc Adjust the settings for the sounds footsteps make whenever characters walk on the map.
 * @default {"General":"","Enabled:eval":"true","SoundByFrame:eval":"true","Frames:arraynum":"[\"0\",\"2\"]","FrameDashModifier:num":"1.5","Default":"","name:str":"Blow2","volume:num":"10","pitch:num":"120","pan:num":"0","Distance":"","distanceVolumeModifier:num":"-0.50","distancePitchModifier:num":"-0.00","distancePanModifier:num":"5","Actor":"","actorEnabled:eval":"true","actorVolumeModifier:num":"1.00","actorPitchModifier:num":"1.00","Event":"","eventEnabled:eval":"true","eventVolumeModifier:num":"1.00","eventPitchModifier:num":"1.00"}
 *
 * @param SmartBlink:struct
 * @text Smart Blink Settings
 * @type struct<SmartBlink>
 * @desc Settings involving the Smart Blink movement ability.
 * @default {"Mechanics":"","allowDiagonal:eval":"false","Visual":"","BlurDuration:num":"30","AngleOffset:num":"-15","Restrict":"","NonLandableRegions:arraynum":"[]","NonLandableTerrainTags:arraynum":"[]","NonPassableRegions:arraynum":"[]","NonPassableTerrainTags:arraynum":"[]"}
 *
 * @param SmartJump:struct
 * @text Smart Jump Settings
 * @type struct<SmartJump>
 * @desc Settings involving the Smart Jump movement ability.
 * @default {"Mechanics":"","allowDiagonal:eval":"false","HeightBasedRegions:arraynum":"[]","Restrict":"","NonLandableRegions:arraynum":"[]","NonLandableTerrainTags:arraynum":"[]","NonPassableRegions:arraynum":"[]","NonPassableTerrainTags:arraynum":"[]"}
 *
 * @param SmartRush:struct
 * @text Smart Rush Settings
 * @type struct<SmartRush>
 * @desc Settings involving the Smart Rush movement ability.
 * @default {"Mechanics":"","allowDiagonal:eval":"false","Visual":"","BlurDuration:num":"30","AngleOffset:num":"15","Shake":"","Enable:eval":"true","ShakePowerRate:num":"3.0","ShakeSpeedRate:num":"3.0","ShakeDuration:num":"20","NonCrash":"","NonCrashRegions:arraynum":"[]","NonCrashTerrainTags:arraynum":"[]"}
 *
 * @param SmoothCamera:struct
 * @text Smooth Camera Scrolling
 * @type struct<SmoothCamera>
 * @desc Adjust the settings for smooth camera scrolling while the player moves.
 * @default {"Default":"","Enabled:eval":"true","WalkSpeed":"","HorzWalk:num":"24","VertWalk:num":"24","DashSpeed":"","HorzDash:num":"16","VertDash:num":"16"}
 *
 * @param Options:struct
 * @text Options Menu Settings
 * @type struct<Options>
 * @desc Options settings for this plugin's various features.
 * @default {"Options":"","AdjustRect:eval":"true","DustCloud":"","AddDustCloud:eval":"true","DustCloudName:str":"Dust Clouds","Footprints":"","AddFootprints:eval":"true","FootprintsName:str":"Footprint Marks","Footsteps":"","AddFootsteps:eval":"true","FootstepsName:str":"Footstep Sounds","SmoothCamera":"","AddSmoothCamera:eval":"true","SmoothCameraName:str":"Smooth Scroll"}
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
 * Dust Cloud Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~DustCloud:
 *
 * @param Default
 *
 * @param Enabled:eval
 * @text Default Enabled?
 * @parent Default
 * @type boolean
 * @on Dust Clouds ON
 * @off Dust Clouds OFF
 * @desc Are Dust Clouds enabled by default?
 * @default true
 * 
 * @param Appearance
 * 
 * @param filename:str
 * @text Filename
 * @parent Appearance
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename of the Dust Cloud. Leave empty if using none.
 * @default 
 *
 * @param color:str
 * @text Color
 * @parent Appearance
 * @desc Color of the dust cloud in #rrggbb format.
 * For generated dust clouds only. Ignore if using image.
 * @default #ffffff
 *
 * @param radius:num
 * @text Radius
 * @parent Appearance
 * @type number
 * @min 1
 * @desc What is the max radius of this dust cloud?
 * For generated dust clouds only. Ignore if using image.
 * @default 24
 *
 * @param fullness:num
 * @text Fullness
 * @parent Appearance
 * @desc What is the fullness level (0.0 to 1.0)?
 * For generated dust clouds only. Ignore if using image.
 * @default 0.20
 * 
 * @param Animation
 *
 * @param wholeDuration:num
 * @text Duration
 * @parent Animation
 * @type number
 * @min 1
 * @desc How many frames will a dust cloud remain on screen?
 * @default 20
 *
 * @param startOpacity:num
 * @text Starting Opacity
 * @parent Animation
 * @type number
 * @min 1
 * @max 255
 * @desc What is the starting opacity (0-255)?
 * Dust cloud opacity will gradually go to 0.
 * @default 192
 *
 * @param startScale:num
 * @text Starting Scale
 * @parent Animation
 * @desc What is the starting scale (0.0 to 1.0)?
 * Dust cloud scale will gradually go to 1.0.
 * @default 0.2
 *
 */
/* ----------------------------------------------------------------------------
 * Footprints Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Footprints:
 *
 * @param General
 *
 * @param Enabled:eval
 * @text Default Enabled?
 * @parent General
 * @type boolean
 * @on Footprint Marks ON
 * @off Footprint Marks OFF
 * @desc Are footprint marks enabled by default?
 * @default true
 *
 * @param Appearance
 *
 * @param startOpacity:num
 * @text Opacity
 * @parent Appearance
 * @type number
 * @min 1
 * @max 255
 * @desc What is the starting opacity of the footprint?
 * @default 64
 *
 * @param wholeDuration:num
 * @text Duration
 * @parent Appearance
 * @type number
 * @desc How many frames will footprints remain on the screen before disappearing?
 * @default 600
 *
 * @param followerVariance:num
 * @text Follower Variance
 * @parent Appearance
 * @type number
 * @desc What variance should followers have for their footprints?
 * This is to avoid them all stepping in the same place.
 * @default 4
 * 
 * @param MapDefaults
 * @text Map Defaults
 *
 * @param DefaultRegions:arraynum
 * @text Regions
 * @parent MapDefaults
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which Regions will have footprints appear by default?
 * @default []
 *
 * @param DefaultTerrainTags:arraynum
 * @text Terrain Tags
 * @parent MapDefaults
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which terrain tags will have footprints appear by default?
 * @default []
 * 
 * @param StandardDirections
 * @text Standard Directions
 * 
 * @param dir2:struct
 * @text Down
 * @parent StandardDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"6\",\"height:num\":\"8\",\"Offsets\":\"\",\"offsetX:num\":\"-4\",\"offsetY:num\":\"+0\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"6\",\"height:num\":\"8\",\"Offsets\":\"\",\"offsetX:num\":\"+4\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param dir4:struct
 * @text Left
 * @parent StandardDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"8\",\"height:num\":\"3\",\"Offsets\":\"\",\"offsetX:num\":\"-6\",\"offsetY:num\":\"-4\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"8\",\"height:num\":\"3\",\"Offsets\":\"\",\"offsetX:num\":\"-6\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param dir6:struct
 * @text Right
 * @parent StandardDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"8\",\"height:num\":\"3\",\"Offsets\":\"\",\"offsetX:num\":\"+6\",\"offsetY:num\":\"-4\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"8\",\"height:num\":\"3\",\"Offsets\":\"\",\"offsetX:num\":\"+6\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param dir8:struct
 * @text Up
 * @parent StandardDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"6\",\"height:num\":\"8\",\"Offsets\":\"\",\"offsetX:num\":\"+4\",\"offsetY:num\":\"-4\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"6\",\"height:num\":\"8\",\"Offsets\":\"\",\"offsetX:num\":\"-4\",\"offsetY:num\":\"-4\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param DiagonalDirections
 * @text Diagonal Directions
 * 
 * @param dir1:struct
 * @text Lower Left
 * @parent DiagonalDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param dir3:struct
 * @text Lower Right
 * @parent DiagonalDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param dir7:struct
 * @text Upper Left
 * @parent DiagonalDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 * 
 * @param dir9:struct
 * @text Upper Right
 * @parent DiagonalDirections
 * @type struct<FootprintPattern>
 * @desc Settings used for footprints when facing moving direction.
 * For normal sprite sheets: 0's left, 1's center, 2's right.
 * @default {"pattern0:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern1:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern2:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern3:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern4:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern5:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern6:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern7:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern8:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern9:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","pattern10:struct":"{\"Appearance\":\"\",\"filename:str\":\"\",\"Generated\":\"\",\"width:num\":\"0\",\"height:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}"}
 *
 */
/* ----------------------------------------------------------------------------
 * Footprint Pattern Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~FootprintPattern:
 * 
 * @param pattern0:struct
 * @text Pattern 0 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern1:struct
 * @text Pattern 1 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern2:struct
 * @text Pattern 2 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern3:struct
 * @text Pattern 3 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern4:struct
 * @text Pattern 4 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern5:struct
 * @text Pattern 5 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern6:struct
 * @text Pattern 6 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern7:struct
 * @text Pattern 7 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern8:struct
 * @text Pattern 8 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern9:struct
 * @text Pattern 9 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param pattern10:struct
 * @text Pattern 10 Settings
 * @type struct<FootprintPatternData>
 * @desc Settings used for footprints left behind with this sprite pattern.
 * @default {"Appearance":"","filename:str":"","Generated":"","width:num":"0","height:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 */
/* ----------------------------------------------------------------------------
 * Footprint Pattern Data Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~FootprintPatternData:
 *
 * @param Appearance
 *
 * @param filename:str
 * @text Filename
 * @parent Appearance
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for a footprint for this data.
 * If used, ignore generated footprint settings.
 * @default 
 *
 * @param Generated
 *
 * @param width:num
 * @text Width
 * @parent Generated
 * @type number
 * @desc What is the width of this footprint?
 * Ignore if using an image.
 * @default 0
 *
 * @param height:num
 * @text Height
 * @parent Generated
 * @type number
 * @desc What is the height of this footprint?
 * Ignore if using an image.
 * @default 0
 *
 * @param Offsets
 *
 * @param offsetX:num
 * @text Offset X
 * @parent Offsets
 * @desc Offset the X position of this footprint.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param offsetY:num
 * @text Offset Y
 * @parent Offsets
 * @desc Offset the Y position of this footprint.
 * Negative: up. Positive: down.
 * @default +0
 *
 */
/* ----------------------------------------------------------------------------
 * Footsteps Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Footsteps:
 *
 * @param General
 *
 * @param Enabled:eval
 * @text Default Enabled?
 * @parent General
 * @type boolean
 * @on Footstep Sounds ON
 * @off Footstep Sounds OFF
 * @desc Are footstep sounds enabled by default?
 * @default true
 *
 * @param SoundByFrame:eval
 * @text Sound by Frame?
 * @parent General
 * @type boolean
 * @on Sounds by Frames
 * @off Sounds by Steps
 * @desc Play footstep sounds at certain sprite frames or with each tile step?
 * @default true
 *
 * @param Frames:arraynum
 * @text Audible Frame(s)
 * @parent SoundByFrame:eval
 * @type number[]
 * @desc Which sprite sheet "frames" will play a sound?
 * Sprite sheet Frames start at 0.
 * @default ["0","2"]
 *
 * @param FrameWalkModifier:num
 * @text Walk Ani Modifier
 * @parent General
 * @desc What is the rate at which animations play for walking?
 * This is to ensure the sound effects synch up.
 * @default 1.0
 *
 * @param FrameDashModifier:num
 * @text Dash Ani Modifier
 * @parent General
 * @desc What is the rate at which animations play for dashing?
 * This is to ensure the sound effects synch up.
 * @default 1.5
 *
 * @param Default
 * @text Default Sound
 * 
 * @param name:str
 * @text Filename
 * @parent Default
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Blow2
 *
 * @param volume:num
 * @text Volume
 * @parent Default
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 10
 *
 * @param pitch:num
 * @text Pitch
 * @parent Default
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param pan:num
 * @text Pan
 * @parent Default
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Distance
 *
 * @param distanceVolumeModifier:num
 * @text Volume Modifier
 * @parent Distance
 * @desc Modifier per tile distance away from the player.
 * Use a decimal value.
 * @default -0.50
 *
 * @param distancePitchModifier:num
 * @text Pitch Modifier
 * @parent Distance
 * @desc Modifier per tile distance away from the player.
 * Use a decimal value.
 * @default -0.00
 *
 * @param distancePanModifier:num
 * @text Pan Modifier
 * @parent Distance
 * @desc Modifier per tile distance away from the player.
 * Use an integer value.
 * @default 5
 *
 * @param Actor
 * @text Actor Modifiers
 *
 * @param actorEnabled:eval
 * @text Enabled for Actors?
 * @parent Actor
 * @type boolean
 * @on Footstep Sounds ON
 * @off Footstep Sounds OFF
 * @desc Are footstep sounds enabled for actors by default?
 * @default true
 *
 * @param actorVolumeModifier:num
 * @text Volume Modifier
 * @parent Actor
 * @desc Volume modifier rate for actors.
 * Use a decimal value.
 * @default 1.00
 *
 * @param actorPitchModifier:num
 * @text Pitch Modifier
 * @parent Actor
 * @desc Pitch modifier rate for actors.
 * Use a decimal value.
 * @default 1.00
 *
 * @param Event
 * @text Event Modifiers
 *
 * @param eventEnabled:eval
 * @text Enabled for Events?
 * @parent Event
 * @type boolean
 * @on Footstep Sounds ON
 * @off Footstep Sounds OFF
 * @desc Are footstep sounds enabled for events by default?
 * @default true
 *
 * @param eventVolumeModifier:num
 * @text Volume Modifier
 * @parent Event
 * @desc Volume modifier rate for events.
 * Use a decimal value.
 * @default 1.00
 *
 * @param eventPitchModifier:num
 * @text Pitch Modifier
 * @parent Event
 * @desc Pitch modifier rate for events.
 * Use a decimal value.
 * @default 1.00
 *
 */
/* ----------------------------------------------------------------------------
 * Smart Blink Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SmartBlink:
 *
 * @param Mechanics
 *
 * @param allowDiagonal:eval
 * @text Allow Diagonal Blink?
 * @parent Mechanics
 * @type boolean
 * @on Allow for VS8-Only
 * @off Forbidden
 * @desc Allow diagonal Smart Blinking?
 * VS8 Sprites only. Does NOT work with standard RTP.
 * @default false
 *
 * @param floorToCeiling:eval
 * @text Floor to Ceiling?
 * @parent Mechanics
 * @type boolean
 * @on Allow
 * @off Forbidden
 * @desc Allow blinking from floor to ceiling tiles?
 * @default false
 * 
 * @param Visual
 *
 * @param BlurDuration:num
 * @text Blur Duration
 * @parent Visual
 * @type number
 * @min 1
 * @desc Requires PixiJS Filters! How long will the motion blur last?
 * @default 30
 *
 * @param AngleOffset:num
 * @text Blur Angle Offset
 * @parent Visual
 * @desc Requires PixiJS Filters! Offset the motion blur angle by this many degrees.
 * @default -15
 * 
 * @param Restrict
 * @text Restrictions
 *
 * @param NonLandableRegions:arraynum
 * @text Non-Land Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions forbid Smart Blink from landing on it?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 * @param NonLandableTerrainTags:arraynum
 * @text Non-Land Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags forbid Smart Blink from landing on it?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 * @param NonPassableRegions:arraynum
 * @text Non-Pass Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions will block Smart Blink from going further?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 * @param NonPassableTerrainTags:arraynum
 * @text Non-Pass Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags will block Smart Blink from going further?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Smart Jump Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SmartJump:
 *
 * @param Mechanics
 *
 * @param allowDiagonal:eval
 * @text Allow Diagonal Jump?
 * @parent Mechanics
 * @type boolean
 * @on Allow for VS8-Only
 * @off Forbidden
 * @desc Allow diagonal Smart Jumping?
 * VS8 Sprites only. Does NOT work with standard RTP.
 * @default false
 *
 * @param HeightBasedRegions:arraynum
 * @text Height-Based Regions
 * @parent Mechanics
 * @type number[]
 * @min 0
 * @max 255
 * @desc Determine which regions are height-based.
 * The lowest value region will be a "ledge".
 * @default []
 * 
 * @param Restrict
 * @text Restrictions
 *
 * @param NonLandableRegions:arraynum
 * @text Non-Land Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions forbid Smart Jump from landing on it?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 * @param NonLandableTerrainTags:arraynum
 * @text Non-Land Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags forbid Smart Jump from landing on it?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 * @param NonPassableRegions:arraynum
 * @text Non-Pass Regions
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 255
 * @desc Which regions will block Smart Jump from going further?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 * @param NonPassableTerrainTags:arraynum
 * @text Non-Pass Terrain Tags
 * @parent Restrict
 * @type number[]
 * @min 0
 * @max 7
 * @desc Which tags will block Smart Jump from going further?
 * These are defaults, which can be replaced by notetags.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Smart Rush Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SmartRush:
 *
 * @param Mechanics
 *
 * @param allowDiagonal:eval
 * @text Allow Diagonal Rush?
 * @parent Mechanics
 * @type boolean
 * @on Allow for VS8-Only
 * @off Forbidden
 * @desc Allow diagonal Smart Rush?
 * VS8 Sprites only. Does NOT work with standard RTP.
 * @default false
 *
 * @param Visual
 *
 * @param BlurDuration:num
 * @text Blur Duration
 * @parent Visual
 * @type number
 * @min 1
 * @desc Requires PixiJS Filters! How long will the motion blur last?
 * @default 30
 *
 * @param AngleOffset:num
 * @text Blur Angle Offset
 * @parent Visual
 * @desc Requires PixiJS Filters! Offset the motion blur angle by this many degrees.
 * @default 15
 *
 * @param Shake
 * @text Crash Shake
 *
 * @param Enable:eval
 * @text Enable Crash Shake?
 * @parent Shake
 * @type boolean
 * @on Enable Crash Shake
 * @off Disable Crash Shake
 * @desc Cause the screen to shake after crashing into an entity?
 * @default true
 *
 * @param ShakePowerRate:num
 * @text Power Rate
 * @parent Shake
 * @desc The power modifier for the screen shake upon crashing into something.
 * @default 3.0
 *
 * @param ShakeSpeedRate:num
 * @text Speed Rate
 * @parent Shake
 * @desc The speed modifier for the screen shake upon crashing into something.
 * @default 3.0
 *
 * @param ShakeDuration:num
 * @text Shaking Duration
 * @parent Shake
 * @type number
 * @min 1
 * @desc How many frames will the screen shake last after crashing into something?
 * @default 20
 *
 * @param NonCrash
 * @text Non-Crash
 *
 * @param NonCrashRegions:arraynum
 * @text Regions
 * @parent NonCrash
 * @type number[]
 * @min 1
 * @max 255
 * @desc When crashing into these region-marked tiles, do not shake the screen.
 * @default []
 *
 * @param NonCrashTerrainTags:arraynum
 * @text Terrain Tags
 * @parent NonCrash
 * @type number[]
 * @min 1
 * @max 7
 * @desc When crashing into these terrain tagged tiles, do not shake the screen.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Smooth Camera Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SmoothCamera:
 *
 * @param Default
 *
 * @param Enabled:eval
 * @text Default Enabled?
 * @parent Default
 * @type boolean
 * @on Smooth Camera ON
 * @off Smooth Camera OFF
 * @desc Is the Smooth Camera enabled by default?
 * @default true
 *
 * @param WalkSpeed
 * @text Walking Speed
 *
 * @param HorzWalk:num
 * @text Horizontal Rate
 * @parent WalkSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Horizontal walking scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 24
 *
 * @param VertWalk:num
 * @text Vertical Rate
 * @parent WalkSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Vertical walking scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 24
 *
 * @param DashSpeed
 * @text Dashing Speed
 *
 * @param HorzDash:num
 * @text Horizontal Rate
 * @parent DashSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Horizontal dashing scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 16
 *
 * @param VertDash:num
 * @text Vertical Rate
 * @parent DashSpeed
 * @type number
 * @min 1
 * @max 48
 * @desc Vertical dashing scroll rate adjustment.
 * Lower: faster; Higher: slower
 * @default 16
 *
 */
/* ----------------------------------------------------------------------------
 * Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Options:
 *
 * @param Options
 * @text Options
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param DustCloud
 * @text Dust Cloud
 *
 * @param AddDustCloud:eval
 * @text Add Option?
 * @parent DustCloud
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Dust Clouds' option to the Options menu?
 * @default true
 *
 * @param DustCloudName:str
 * @text Option Name
 * @parent DustCloud
 * @desc Command name of the option.
 * @default Dust Clouds
 *
 * @param Footprints
 * @text Footprint Marks
 *
 * @param AddFootprints:eval
 * @text Add Option?
 * @parent Footprints
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Footprint Marks' option to the Options menu?
 * @default true
 *
 * @param FootprintsName:str
 * @text Option Name
 * @parent Footprints
 * @desc Command name of the option.
 * @default Footprint Marks
 *
 * @param Footsteps
 * @text Footstep Sounds
 *
 * @param AddFootsteps:eval
 * @text Add Option?
 * @parent Footsteps
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Footstep Sounds' option to the Options menu?
 * @default true
 *
 * @param FootstepsName:str
 * @text Option Name
 * @parent Footsteps
 * @desc Command name of the option.
 * @default Footstep Sounds
 *
 * @param SmoothCamera
 * @text Smooth Camera
 *
 * @param AddSmoothCamera:eval
 * @text Add Option?
 * @parent SmoothCamera
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Smooth Scroll' option to the Options menu?
 * @default true
 *
 * @param SmoothCameraName:str
 * @text Option Name
 * @parent SmoothCamera
 * @desc Command name of the option.
 * @default Smooth Scroll
 *
 */
/* ----------------------------------------------------------------------------
 * Motion Trail Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MotionTrail:
 *
 * @param General
 *
 * @param enabled:eval
 * @text Override?
 * @parent General
 * @type boolean
 * @on Override Settings
 * @off Don't Override Settings
 * @desc Override Motion Trail settings temporarily?
 * @default true
 *
 * @param Settings
 *
 * @param delay:num
 * @text Delay
 * @parent Settings
 * @type number
 * @min 1
 * @desc How many frames to delay by when creating a motion trail?
 * The higher the delay, the less after images there are.
 * @default 4
 *
 * @param duration:num
 * @text Duration
 * @parent Settings
 * @type number
 * @min 1
 * @desc How many frames should the motion trail last?
 * What do you want to be its duration?
 * @default 30
 *
 * @param hue:num
 * @text Hue
 * @parent Settings
 * @type number
 * @min 0
 * @max 255
 * @desc What do you want to be the hue for the motion trail?
 * @default 0
 *
 * @param opacityStart:num
 * @text Starting Opacity
 * @parent Settings
 * @type number
 * @min 0
 * @max 255
 * @desc What starting opacity value do you want for the motion
 * trail? Opacity values decrease over time.
 * @default 128
 *
 * @param tone:eval
 * @text Tone
 * @parent Settings
 * @desc What tone do you want for the motion trail?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 */
//=============================================================================

function _0x4fb3(){const _0x20082d=['SmartDirMoveSpeedMod','#ffffff','frameCount','getSmoothCameraSpeed','fill','filters','description','10aOeajs','enabled','hKvOE','CkLJW','Duration','includes','straighten','findTargetSprite','FlzKG','SmartMoveWaitForSmartJump','_followers','lvYRm','right','fZLWE','_realY','checkPassage','SmartBlinkNonLandRegions','SmartJumpLedgeRegion','footstepsData','Footsteps','_jumpHeight','copyBitmapFrame','requestAnimation','DWyEH','playFootstepSound','IplsE','hiDlY','isCollidedWithCharacters','Game_CharacterBase_initMembers','_smartBlinkDistance','_smartBlinkRestrictions','62zgISOr','list','adjustY','length','regionId','Enable','VertDash','MotionTrailSettingsChangeEvent','canSmoothScroll','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','volume','setupRegionTerrainTagSmartBlink','straightenFacedDirection','wholeDuration','nonLand','Spriteset_Map_update','eventId','DeKYr','VvSXr','initMovementEffectsSmoothCamera','filename','Walk','dCsTi','sURbR','setFootstepSoundsEnabled','checkDustCloudChanges','_waitMode','Game_CharacterBase_increaseSteps','isSmartMoving','createIconSprite','isTileSmartJumpBreakable','_spriteset','canSmartBlink','_footsteps','SMART_BLINK_FLOOR_TO_CEILING','updateSmartBlinkCooldown','XGPdI','drawDustCloud','hue','roundYWithDirection','dustCloud','abs','Game_Map_setup','playFootsteps','initMovementEffectsVariables','createDustCloudBitmap','setupRegionTerrainTagSmartJump','FUNC','_smartJump','ForceDustCloud','setFootprintsEnabled','_opacityRate','SMART_RUSH_SHAKE_DURATION','Scene_Options_maxCommands','LMKxU','MotionTrailCreateForFollower','isScrolling','#000000','SmartBlinkNonPassRegions','qlRmh','setDirMoveSpeedMod','axsHa','parseTerrainTagBasedFootstepSounds','startSmartRushCrashWalkBack','NonFootprintTerrainTags','footprintDurationAtXy','eNZCO','setupRegionTerrainTagFootstepSounds','iIqEF','delay','SmartRushAntiCrashRegions','isTileSmartJumpCompatible','checkEventTriggerHere','origin','actorVolumeModifier','_followerOffsetY','TerrainTagFootprintOpacity','fillStyle','NonPassableRegions','uXpGR','STRUCT','_baseSprite','deltaYFrom','setupDuration','floorToCeiling','_realX','random','Frames','fVDZx','updateDustCloudSprite','RegExp','nonPass','WbFAm','updateMovementEffectsMotionTrails','isSmartBlinkEnabled','smartJumpMotionTrailData','initMovementEffectsFootstepSounds','_wasEventScrolling','yJtZD','event','SmartMoveWaitForSmartRush','LedgeJumpRegion','Sprite_Picture_updatePosition','isSmartJumpRegionLowestHeight','Ltkni','Izyji','udWDB','createMotionTrailSprite','kmnsA','_smartBlinkMotionTrailData','_jumpPeak','tileset','NgXjb','SmartJump','dir6','ASCKL','tFjXg','parseTerrainTagBasedFootprints','_regionFootstepSounds','ApplyFollowers','visibleFollowers','createMotionBlurMovementEffectsFilter','SmartRush','Game_CharacterBase_animationWait','_smartRushSwitches','_smartRushCooldown','rgba(0,0,0,0)','OaZnS','_cached_GeneratedFootprint_Image','blendMode','tone','SMART_RUSH_FILTER_ANGLE_OFFSET','MovementEffectsOptions','horz','_footprintMarksEnabled','eventsXy','zsFle','SmoothCameraSpeedChange','YesFootprintsEvent','addChild','GCJrN','_smartJumpCooldown','setup','scrollDown','AddFootsteps','BasvM','footprintOpacityAtXy','isSmartRushEnabled','direction','NoFootsteps','initMovementEffectsFootprintMarks','offsetX','SoundByFrame','isSmartRushCrashShake','addMovementEffectsFootprintsCommand','_smartRushSpeedRate','updateFootprintSprite','_scene','Avkmw','updateScrollSmoothCamera','isOnLadder','NonCrashTerrainTags','aqADw','isAnimationPlaying','_followerOffsetX','initRegionTerrainTagSmartRush','picture','lVkll','playSmartBlinkFilterEffect','_shiftY','TwtJY','canShowMotionTrails','createRadialGradient','smooth','BaxMr','parseDirectionText','makeData','getDirMoveSpeedMod','stringify','SpeedRate','MotionTrailEnableEvent','isTileSmartHeightJumpRegion','clearPageSettings','FrameDashModifier','_refresh','createDustCloudBasics','lower\x20right','SmartBlinkNonPassTerrainTags','endSmartRush','parseRegionBasedFootstepSounds','actorPitchModifier','ldJce','Enabled','vegbT','CaiVI','eventEnabled','sfxPitch','ceil','dir9','UasIq','loadPicture','isSceneMap','pitch','allowed','ARRAYFUNC','SmartBlinkNonLandTerrainTags','tileWidth','NonLandableTerrainTags','Settings','updateTilemap','beginPath','isTrueMapScrollLinked','split','remove','_dirMoveSpeedMod','_animationCount','TerrainTagFootprintDuration','AnimationID','updateOpacity','generatedFootprintBitmap','indexOf','isSmartJumpEnabled','_motionBlurMovementEffectsDuration','Spriteset_Map_updateTilemap','Footprints','Cooldown','parseRegionBasedFootprints','oGpqC','acMyt','scale','nBuqD','Game_System_initialize','updateFootprints','upper\x20right','_smartBlink','_smoothCamera','followers','startBattle','eTypy','DevVV','cUoTf','meetFootstepFrames','Switches','startScale','eaXSb','_stopCount','GibPz','NoSmartJump','deltaXFrom','actor','YUeKG','autotileType','canShowDustCloud','parseTerrainTagBasedSmartRush','updateAnimationCount','jump','eventVolumeModifier','isSmartJumping','NoFootstepsEvent','_motionTrailLastRealX','code','updateScroll','addCommand','SmartJumpNonLandTerrainTags','call','EVAL','_pictureContainer','DustCloudChangeSettings','smartRushMotionTrailData','_erased','dir%1','aGhxO','HeightBasedRegions','iQDpA','bJHiv','_tilemap','Sprite_Character_update','ConfigKeys','canSmartJump','VertWalk','ApplyFootstepSfxModifiers','TerrainTagFootstepSfx','_targetScaleX','distancePitchModifier','cUHBZ','startOpacity','dir7','SMART_RUSH_SHAKE_POWER_RATE','motionTrailData','createFootprintForTarget','Blow2','context','updateCharacterFrame','moveBySmartRush','isSmoothCameraEnabled','pattern','JJHUC','follower','leader','randomInt','setupRegionTerrainTagSmartRush','adjustX','UsURJ','_motionTrailSprites','SmoothCamera','addMovementEffectsSmoothCameraCommand','Game_Player_updateScroll','bAuAL','soundFrames','oeuPZ','format','OnSuccessCommonEventID','LdbtJ','substring','loadSystem','HtFja','hexToRgba','AdjustRect','createDustCloud','_motionBlurMovementEffectsAngleOffset','parseRegionBasedSmartBlink','footprints','updateSmartMovementCooldowns','ExDhD','addMovementEffectsDustCloudCommand','9tMzThW','sfxName','setMotionTrailSettings','sort','XRjIC','checkMovementEffectsStringTags','setupIconSprite','SMART_RUSH_FILTER_DURATION','smoothCamera','applyData','pattern%1','return\x200','LcKfo','_motionBlurMovementEffectsFilter','initRegionTerrainTagFootprints','sBLWT','psSGr','NoSmooth','regions','NonFootprintRegions','setValue','isInVehicle','isUsingSmoothCamera','getStraightenDiagonalDirection','Game_Map_changeTileset','rkRvH','SmartJumpNonPassTerrainTags','_frame','setupRegionTerrainTagFootprints','arc','isTileSmartJumpNonPassable','ARRAYJSON','isSmartMoveNonViableState','FootprintsFilename','isPassableByAnyDirection','_direction','iXbay','_footprintSprites','isTileSmartBlinkBreakable','iAkFs','_smartJumpMotionTrailData','QrOki','ARRAYSTR','measureSmartBlinkDistance','initMovementEffectsDirMoveSpeedMod','drawCircle','EventID','ConvertParams','AddFootprints','enableMotionTrails','makeDeepCopy','updateSmartRushCooldown','bitmap','isTileSmartJumpNonLandable','IkrUN','lower\x20left','notSmartJumpPassable','isMapScrollLinked','isDashing','isLadder','page','concat','_footstepCooldownDuration','NonPassableTerrainTags','MotionBlurPlayer','jzKzT','data','left','setupMovementEffectsVariables','HzCIh','ShakeSpeedRate','readFlag','HwwNt','VisuMZ_0_CoreEngine','isVisible','roundXWithDirection','push','isTransparent','JRhcw','parseTerrainTagBasedSmartBlink','NoRegionFootstepSfx','cfpOb','AddSmoothCamera','LjJbJ','meetFootprintFrames','dir2','ZXzWV','_smartRushMotionTrailData','upper\x20left','bind','parse','initRegionTerrainTagSmartBlink','_motionTrailLastRealY','dir1','_lastSmoothScrollX','canSmartRush','save','_duration','SMART_BLINK_FILTER_DURATION','dir4','_smartRush','FootprintRegions','FCGRB','registerCommand','startMotionBlurEffect','MotionTrail','_footstepSoundsEnabled','ForceFootsteps','SmartJumpNonPassRegions','_terrainTagFootstepSounds','_lastSmoothScrollY','MovementEffects','_ready','MmfEK','createSmartBlinkMotionTrailSprite','SmartJumpNonLandEvent','eecrF','lineTo','note','hasStepAnime','jumpHeight','centerY','updateDustClouds','color','Game_CharacterBase_updatePattern','reserveTransfer','opacity','opacityStart','Game_Player_isDashing','_eventIconSprite','notSmartJumpLandable','setupPageSettings','isMovementSucceeded','pZyaF','kwiYj','isPlayFootstepSoundsByFrame','YlAcW','updateSmartJumpState','_dustCloudBitmap','vmwaf','SmartJumpNonLandRegions','QWarl','54785pomvpq','sfxVolume','addMovementEffectsFootstepsCommand','isJumping','setHue','isSmartRushing','SmartJumpHeightBasedRegions','TYfqy','_motionTrailExpiredSprites','update','ncLpO','applyFootstepSoundTileChanges','canMakeFootprints','nzDQA','areMotionTrailsEnabled','xAkqB','createFootprintBasics','straightenDiagonal','Distance','654btfUIQ','terrainTags','4197909nNirdu','STR','canMakeFootstepSounds','areFollowersGathering','MotionBlurFilter','iIUHC','RegionFootprintDuration','setDirection','isTileSmartBlinkNonLandable','2912520ORfQdJ','setupMovementEffectsNotetags','terrainTag','Game_Event_setupPageSettings','setDustCloudData','XKRCK','BmQRV','wwCEq','_smartJumpRestriction','addMovementEffectsOptionCommands','SMART_RUSH_SHAKE_SPEED_RATE','createMotionTrailContainers','isTileSmartBlinkCompatible','MotionTrailCreateForPlayer','updateMotionBlurEffectFilter','_smartJumpRestrictions','_character','pan','setSmoothCameraSpeed','updateSmartJumpCooldown','playOnceParallelInterpreter','WOuQw','dir3','isTileSmartBlinkNonPassable','Game_Event_clearPageSettings','startSmartJump','isMoving','4743508DoEgDI','parameters','match','setSmartRushSwitch','MotionTrailSettingsChangeFollower','blXPt','ConfigManager_makeData','setupOpacity','initMovementEffectsMotionTrails','prototype','ConfigManager_applyData','updatePattern','ARRAYNUM','setWaitMode','GetDirAngle','clone','_dustCloud','Game_CharacterBase_straighten','_footprints','MotionTrailCreateForEvent','duration','NonLandableRegions','_dustCloudSprites','executeMove','changeTileset','initMembers','Dash','volumeRate','dir8','footprintsData','xYcWn','moveByInput','isPlayerSmartRushing','_smartBlinkCooldown','test','Game_CharacterBase_realMoveSpeed','actorEnabled','dOBKW','scrollUp','NoDustCloud','_smartJumpMode','SMART_BLINK_FILTER_ANGLE_OFFSET','rgba(','initialize','HorzWalk','AngleOffset','visible','42737lLgCbB','eBxMG','NCQWX','addGeneralOptions','SmoothCameraName','playSe','GdTXL','4228728oQxfcR','BKFgb','processSmartJumpHeightFactor','fullness','increaseSteps','tileHeight','scrollLeft','RegionFootprintOpacity','Game_Interpreter_updateWaitMode','vert','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','maxfZ','qFZPe','copyBasicProperties','ImmediateCreate','_smartRushMode','canCreateDustCloud','meetsSmartJumpHeightConditions','parseRegionBasedSmartJump','setupMovementEffectsCommentTags','_footprintsData','MotionTrailSettingsChangePlayer','addColorStop','allowDiagonal','Game_CharacterBase_updateAnimationCount','smartBlinkMotionTrailData','trim','FootprintsOffset','BlurDuration','createBitmap','children','toLowerCase','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','width','forbidden','jVxWb','pitchRate','_baseTexture','sfxPan','FootprintsEnableDisable','shiftY','down','setSmoothCameraEnabled','animationWait','trnQX','_targetScaleY','_bushDepth','Game_Picture_isMapScrollLinked','dFpYl','Options','TlMqd','create','eWhkU','FootstepsPitchRate','offsetY','LLyAy','constructor','dustCloudData','IconSet','applyMotionTrailData','velocity','FootprintsHeight','isInAirship','jUfjQ','anchor','exit','Window_Options_addGeneralOptions','SmartRushAntiCrashTerrainTags','footsteps','khiOb','realMoveSpeed','_customModified','join','parseTerrainTagBasedSmartJump','oGVNr','FootstepsName','name','pop','DustCloud','smartBlinkRelocate','isCeilingTile','getLastPluginCommandInterpreter','9414232NjajrA','MotionBlurFollower','smartBlink','removeChild','ARRAYSTRUCT','scrolledX','_pattern','height','Game_Player_moveByInput','map','ForceSmooth','max','UyytS','SmartBlink','clamp','createLowerLayer','synchronize','DefaultTerrainTags','initMovementEffectsDustCloud','CaavE','SMART_RUSH_SHAKE_ENABLED','smartRush','iIUFk','floor','initRegionTerrainTagFootstepSounds','Game_Follower_initialize','Index','_motionTrailSettings','vAGmI','EQnge','updateScrollLinkedPosition','randomizeAnimationCount','bnfve','jebNA','initRegionTerrainTagSmartJump','isHeightBasedRegion','radius','qmezG','VisuMZ_1_EventsMoveCore','_dustCloudData','distancePanModifier','NonCrashRegions','smartJump','measureSmartJumpDistance','updateSmoothScrollingContainer','Game_Player_reserveTransfer','Sprite_Character_initialize','YesFootstepsEvent','SmartRushDistance','updateWaitMode','NoSmartRush','iOewv','startSmartRushCrashShake','setColorTone','mRadialArcConstant','updatePosition','HorzDash','NoTerrainTagFootstepSfx','createFootprint'];_0x4fb3=function(){return _0x20082d;};return _0x4fb3();}function _0x4a1e(_0x3daf15,_0x92f1c){const _0x4fb3fb=_0x4fb3();return _0x4a1e=function(_0x4a1e88,_0x10325c){_0x4a1e88=_0x4a1e88-0x13f;let _0x11bb9c=_0x4fb3fb[_0x4a1e88];return _0x11bb9c;},_0x4a1e(_0x3daf15,_0x92f1c);}const _0x3124f3=_0x4a1e;(function(_0x23bc4b,_0x2a8e11){const _0x2dc793=_0x4a1e,_0x14d549=_0x23bc4b();while(!![]){try{const _0x1303ef=-parseInt(_0x2dc793(0x2cd))/0x1*(-parseInt(_0x2dc793(0x387))/0x2)+-parseInt(_0x2dc793(0x27a))/0x3+parseInt(_0x2dc793(0x283))/0x4+parseInt(_0x2dc793(0x265))/0x5*(-parseInt(_0x2dc793(0x278))/0x6)+parseInt(_0x2dc793(0x2d4))/0x7+parseInt(_0x2dc793(0x326))/0x8*(parseInt(_0x2dc793(0x1d7))/0x9)+parseInt(_0x2dc793(0x368))/0xa*(-parseInt(_0x2dc793(0x29e))/0xb);if(_0x1303ef===_0x2a8e11)break;else _0x14d549['push'](_0x14d549['shift']());}catch(_0x31b6f9){_0x14d549['push'](_0x14d549['shift']());}}}(_0x4fb3,0xc5838));var label=_0x3124f3(0x246),tier=tier||0x0,dependencies=[_0x3124f3(0x220),_0x3124f3(0x34c)],pluginData=$plugins['filter'](function(_0x24e564){const _0x1f11b3=_0x3124f3;return _0x24e564['status']&&_0x24e564[_0x1f11b3(0x367)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x3124f3(0x162)]=VisuMZ[label][_0x3124f3(0x162)]||{},VisuMZ[_0x3124f3(0x206)]=function(_0x3138ea,_0x56d5ec){const _0x3e7654=_0x3124f3;for(const _0x5e06e4 in _0x56d5ec){if(_0x5e06e4[_0x3e7654(0x2a0)](/(.*):(.*)/i)){const _0x48813c=String(RegExp['$1']),_0x3adf0e=String(RegExp['$2'])['toUpperCase']()[_0x3e7654(0x2ee)]();let _0x3f7ed7,_0x4ad8d1,_0x159461;switch(_0x3adf0e){case'NUM':_0x3f7ed7=_0x56d5ec[_0x5e06e4]!==''?Number(_0x56d5ec[_0x5e06e4]):0x0;break;case _0x3e7654(0x2aa):_0x4ad8d1=_0x56d5ec[_0x5e06e4]!==''?JSON[_0x3e7654(0x231)](_0x56d5ec[_0x5e06e4]):[],_0x3f7ed7=_0x4ad8d1[_0x3e7654(0x32f)](_0x1a81a8=>Number(_0x1a81a8));break;case _0x3e7654(0x19b):_0x3f7ed7=_0x56d5ec[_0x5e06e4]!==''?eval(_0x56d5ec[_0x5e06e4]):null;break;case'ARRAYEVAL':_0x4ad8d1=_0x56d5ec[_0x5e06e4]!==''?JSON['parse'](_0x56d5ec[_0x5e06e4]):[],_0x3f7ed7=_0x4ad8d1[_0x3e7654(0x32f)](_0xd51273=>eval(_0xd51273));break;case'JSON':_0x3f7ed7=_0x56d5ec[_0x5e06e4]!==''?JSON[_0x3e7654(0x231)](_0x56d5ec[_0x5e06e4]):'';break;case _0x3e7654(0x1f6):_0x4ad8d1=_0x56d5ec[_0x5e06e4]!==''?JSON[_0x3e7654(0x231)](_0x56d5ec[_0x5e06e4]):[],_0x3f7ed7=_0x4ad8d1[_0x3e7654(0x32f)](_0xb671a0=>JSON['parse'](_0xb671a0));break;case _0x3e7654(0x3b6):_0x3f7ed7=_0x56d5ec[_0x5e06e4]!==''?new Function(JSON[_0x3e7654(0x231)](_0x56d5ec[_0x5e06e4])):new Function(_0x3e7654(0x1e2));break;case _0x3e7654(0x15e):_0x4ad8d1=_0x56d5ec[_0x5e06e4]!==''?JSON[_0x3e7654(0x231)](_0x56d5ec[_0x5e06e4]):[],_0x3f7ed7=_0x4ad8d1[_0x3e7654(0x32f)](_0x455a1e=>new Function(JSON['parse'](_0x455a1e)));break;case _0x3e7654(0x27b):_0x3f7ed7=_0x56d5ec[_0x5e06e4]!==''?String(_0x56d5ec[_0x5e06e4]):'';break;case _0x3e7654(0x201):_0x4ad8d1=_0x56d5ec[_0x5e06e4]!==''?JSON[_0x3e7654(0x231)](_0x56d5ec[_0x5e06e4]):[],_0x3f7ed7=_0x4ad8d1[_0x3e7654(0x32f)](_0x3e25ec=>String(_0x3e25ec));break;case _0x3e7654(0x3d7):_0x159461=_0x56d5ec[_0x5e06e4]!==''?JSON[_0x3e7654(0x231)](_0x56d5ec[_0x5e06e4]):{},_0x3f7ed7=VisuMZ[_0x3e7654(0x206)]({},_0x159461);break;case _0x3e7654(0x32a):_0x4ad8d1=_0x56d5ec[_0x5e06e4]!==''?JSON[_0x3e7654(0x231)](_0x56d5ec[_0x5e06e4]):[],_0x3f7ed7=_0x4ad8d1[_0x3e7654(0x32f)](_0x4c8434=>VisuMZ[_0x3e7654(0x206)]({},JSON[_0x3e7654(0x231)](_0x4c8434)));break;default:continue;}_0x3138ea[_0x48813c]=_0x3f7ed7;}}return _0x3138ea;},(_0x1fe136=>{const _0x392d6e=_0x3124f3,_0x5614d6=_0x1fe136[_0x392d6e(0x320)];for(const _0x572d3f of dependencies){if(!Imported[_0x572d3f]){if(_0x392d6e(0x1db)!=='YvfGY'){alert(_0x392d6e(0x390)[_0x392d6e(0x1c8)](_0x5614d6,_0x572d3f)),SceneManager[_0x392d6e(0x315)]();break;}else return _0x5a6682['MovementEffects'][_0x392d6e(0x162)][_0x392d6e(0x37b)]['SoundByFrame'];}}const _0x4f3925=_0x1fe136[_0x392d6e(0x367)];if(_0x4f3925['match'](/\[Version[ ](.*?)\]/i)){if(_0x392d6e(0x2a3)!==_0x392d6e(0x2a3)){if(this[_0x392d6e(0x268)]())return;this[_0x392d6e(0x2c6)]=![];if(this[_0x392d6e(0x2e4)]()){let _0x409928=_0x2fe646[_0x392d6e(0x331)](_0x574fb0['ceil'](this[_0x392d6e(0x3f5)]/0x2),0x1);while(_0x409928--)this[_0x392d6e(0x1d0)]();}if(this[_0x392d6e(0x27c)]())this[_0x392d6e(0x380)]();_0x52f8bd(this[_0x392d6e(0x3cf)]['bind'](this,[0x1,0x2]),0x32);}else{const _0x5599e6=Number(RegExp['$1']);_0x5599e6!==VisuMZ[label]['version']&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x392d6e(0x1c8)](_0x5614d6,_0x5599e6)),SceneManager['exit']());}}if(_0x4f3925['match'](/\[Tier[ ](\d+)\]/i)){const _0x33b8d5=Number(RegExp['$1']);_0x33b8d5<tier?(alert(_0x392d6e(0x2f4)['format'](_0x5614d6,_0x33b8d5,tier)),SceneManager[_0x392d6e(0x315)]()):_0x392d6e(0x1e6)===_0x392d6e(0x298)?(_0x201cb4(_0x392d6e(0x2de)['format'](_0x4b7ddc,_0x37dbd)),_0x3bb467[_0x392d6e(0x315)]()):tier=Math[_0x392d6e(0x331)](_0x33b8d5,tier);}VisuMZ[_0x392d6e(0x206)](VisuMZ[label][_0x392d6e(0x162)],_0x1fe136[_0x392d6e(0x29f)]);})(pluginData),PluginManager['registerCommand'](pluginData[_0x3124f3(0x320)],'DustCloudEnableDisable',_0x4b3a6a=>{const _0x7af3d6=_0x3124f3;VisuMZ[_0x7af3d6(0x206)](_0x4b3a6a,_0x4b3a6a);const _0x14c7a2=_0x4b3a6a['Enable'];$gameSystem['dustCloudData']()['enabled']=_0x14c7a2;}),PluginManager['registerCommand'](pluginData[_0x3124f3(0x320)],_0x3124f3(0x19d),_0x5232db=>{const _0x341f6d=_0x3124f3;VisuMZ[_0x341f6d(0x206)](_0x5232db,_0x5232db);const _0x5f116c=JsonEx[_0x341f6d(0x209)](_0x5232db);_0x5f116c[_0x341f6d(0x369)]=$gameSystem[_0x341f6d(0x18e)](),$gameSystem[_0x341f6d(0x287)](_0x5f116c);}),PluginManager[_0x3124f3(0x23e)](pluginData['name'],_0x3124f3(0x2fb),_0x132641=>{const _0x170ed8=_0x3124f3;VisuMZ[_0x170ed8(0x206)](_0x132641,_0x132641);const _0x569aea=_0x132641[_0x170ed8(0x38c)];$gameSystem[_0x170ed8(0x3b9)](_0x569aea);}),PluginManager[_0x3124f3(0x23e)](pluginData['name'],'FootstepsEnableDisable',_0x1bb64d=>{const _0x1b96d1=_0x3124f3;VisuMZ[_0x1b96d1(0x206)](_0x1bb64d,_0x1bb64d);const _0x222cf1=_0x1bb64d['Enable'];$gameSystem[_0x1b96d1(0x39f)](_0x222cf1);}),PluginManager['registerCommand'](pluginData[_0x3124f3(0x320)],_0x3124f3(0x217),_0x2e6406=>{const _0xd0a4e6=_0x3124f3;if(!SceneManager[_0xd0a4e6(0x15b)]())return;const _0x417c7b=SceneManager[_0xd0a4e6(0x424)][_0xd0a4e6(0x3a6)];if(!_0x417c7b)return;VisuMZ[_0xd0a4e6(0x206)](_0x2e6406,_0x2e6406);const _0x5884eb=_0x2e6406[_0xd0a4e6(0x36c)]||0x1,_0x2a32d0=_0x2e6406['AngleOffset']||0x0;let _0x4f835b=[$gamePlayer];_0x2e6406[_0xd0a4e6(0x3fe)]&&('FFYtY'!==_0xd0a4e6(0x228)?_0x4f835b=_0x4f835b[_0xd0a4e6(0x214)]($gamePlayer[_0xd0a4e6(0x17e)]()[_0xd0a4e6(0x219)]()):this[_0xd0a4e6(0x421)]());for(const _0x58095d of _0x4f835b){if(!_0x58095d)continue;const _0x29d0aa=_0x417c7b[_0xd0a4e6(0x36f)](_0x58095d);_0x29d0aa&&_0x29d0aa[_0xd0a4e6(0x23f)](_0x5884eb,_0x2a32d0);}}),PluginManager[_0x3124f3(0x23e)](pluginData[_0x3124f3(0x320)],_0x3124f3(0x327),_0x47f8f7=>{const _0x124b38=_0x3124f3;if(!SceneManager[_0x124b38(0x15b)]())return;const _0x431313=SceneManager[_0x124b38(0x424)][_0x124b38(0x3a6)];if(!_0x431313)return;VisuMZ['ConvertParams'](_0x47f8f7,_0x47f8f7);const _0x48f4aa=_0x47f8f7[_0x124b38(0x36c)]||0x1,_0x4a6def=_0x47f8f7[_0x124b38(0x2cb)]||0x0,_0x1a2219=_0x47f8f7[_0x124b38(0x340)];let _0x1f077d=_0x1a2219['map'](_0x32ce82=>$gamePlayer['followers']()[_0x124b38(0x1bb)](_0x32ce82));for(const _0x27a1b2 of _0x1f077d){if(!_0x27a1b2)continue;const _0x262b0a=_0x431313[_0x124b38(0x36f)](_0x27a1b2);_0x262b0a&&_0x262b0a['startMotionBlurEffect'](_0x48f4aa,_0x4a6def);}}),PluginManager[_0x3124f3(0x23e)](pluginData['name'],'MotionBlurEvent',_0x6332a5=>{const _0x5d8248=_0x3124f3;if(!SceneManager[_0x5d8248(0x15b)]())return;const _0x463917=SceneManager[_0x5d8248(0x424)][_0x5d8248(0x3a6)];if(!_0x463917)return;VisuMZ['ConvertParams'](_0x6332a5,_0x6332a5);const _0x15cb5b=_0x6332a5[_0x5d8248(0x36c)]||0x1,_0x35ed5e=_0x6332a5[_0x5d8248(0x2cb)]||0x0,_0x3fdafd=_0x6332a5[_0x5d8248(0x205)],_0x5b4ca4=$gameTemp[_0x5d8248(0x325)]();let _0x20dfc6=_0x3fdafd['map'](_0x2b549f=>$gameMap[_0x5d8248(0x3ea)](_0x2b549f||_0x5b4ca4[_0x5d8248(0x397)]()));for(const _0x4cf47a of _0x20dfc6){if(!_0x4cf47a)continue;const _0x20ea5a=_0x463917[_0x5d8248(0x36f)](_0x4cf47a);_0x20ea5a&&_0x20ea5a[_0x5d8248(0x23f)](_0x15cb5b,_0x35ed5e);}}),PluginManager[_0x3124f3(0x23e)](pluginData[_0x3124f3(0x320)],_0x3124f3(0x290),_0x326982=>{const _0x1b79d3=_0x3124f3;if(!SceneManager[_0x1b79d3(0x15b)]())return;const _0x15052e=SceneManager[_0x1b79d3(0x424)][_0x1b79d3(0x3a6)];if(!_0x15052e)return;VisuMZ[_0x1b79d3(0x206)](_0x326982,_0x326982);let _0x3159ad=[$gamePlayer];_0x326982[_0x1b79d3(0x3fe)]&&(_0x1b79d3(0x3ef)===_0x1b79d3(0x3c9)?_0x38d1ca(this[_0x1b79d3(0x2a1)][_0x1b79d3(0x230)](this,![]),0x32):_0x3159ad=_0x3159ad['concat']($gamePlayer[_0x1b79d3(0x17e)]()[_0x1b79d3(0x219)]()));for(const _0x58e114 of _0x3159ad){if(_0x1b79d3(0x346)!==_0x1b79d3(0x200)){if(!_0x58e114)continue;const _0x15efe6=_0x15052e[_0x1b79d3(0x36f)](_0x58e114);if(_0x15efe6){if(_0x1b79d3(0x1e7)===_0x1b79d3(0x20d))return this[_0x1b79d3(0x3e6)]();else _0x15efe6['createMotionTrailSprite']();}}else{const _0x1c0ea2=this[_0x1b79d3(0x1b2)]();this['_duration']=_0x1c0ea2[_0x1b79d3(0x2b2)]||0x1,this[_0x1b79d3(0x269)](_0x1c0ea2['hue']),this['setColorTone'](_0x1c0ea2[_0x1b79d3(0x409)]),this[_0x1b79d3(0x3ba)]=(_0x1c0ea2['opacityStart']/0xff)[_0x1b79d3(0x334)](0x0,0x1),this[_0x1b79d3(0x255)]=(this['opacity']*this[_0x1b79d3(0x3ba)])[_0x1b79d3(0x334)](0x0,0xff);}}}),PluginManager[_0x3124f3(0x23e)](pluginData['name'],_0x3124f3(0x3be),_0xd10fb0=>{const _0x2f8632=_0x3124f3;if(!SceneManager['isSceneMap']())return;const _0x2689f4=SceneManager[_0x2f8632(0x424)]['_spriteset'];if(!_0x2689f4)return;VisuMZ[_0x2f8632(0x206)](_0xd10fb0,_0xd10fb0);const _0x314291=_0xd10fb0[_0x2f8632(0x340)];let _0x20e5c4=_0x314291[_0x2f8632(0x32f)](_0x364df6=>$gamePlayer[_0x2f8632(0x17e)]()[_0x2f8632(0x1bb)](_0x364df6));for(const _0x1e7b98 of _0x20e5c4){if(!_0x1e7b98)continue;const _0x556009=_0x2689f4[_0x2f8632(0x36f)](_0x1e7b98);_0x556009&&_0x556009['createMotionTrailSprite']();}}),PluginManager[_0x3124f3(0x23e)](pluginData[_0x3124f3(0x320)],_0x3124f3(0x2b1),_0x2b265d=>{const _0x12c573=_0x3124f3;if(!SceneManager['isSceneMap']())return;const _0x32f247=SceneManager[_0x12c573(0x424)][_0x12c573(0x3a6)];if(!_0x32f247)return;VisuMZ[_0x12c573(0x206)](_0x2b265d,_0x2b265d);const _0x5a9cc8=_0x2b265d['EventID'],_0xb355b8=$gameTemp[_0x12c573(0x325)]();let _0x270989=_0x5a9cc8[_0x12c573(0x32f)](_0x1cf2f4=>$gameMap['event'](_0x1cf2f4||_0xb355b8[_0x12c573(0x397)]()));for(const _0x198fe0 of _0x270989){if(_0x12c573(0x1a1)!==_0x12c573(0x39e)){if(!_0x198fe0)continue;const _0x528205=_0x32f247[_0x12c573(0x36f)](_0x198fe0);_0x528205&&_0x528205[_0x12c573(0x3f2)]();}else return this[_0x12c573(0x293)][_0x12c573(0x1b2)]();}}),PluginManager[_0x3124f3(0x23e)](pluginData['name'],'MotionTrailEnablePlayer',_0x8b563c=>{const _0x3b5262=_0x3124f3;if(!SceneManager[_0x3b5262(0x15b)]())return;VisuMZ[_0x3b5262(0x206)](_0x8b563c,_0x8b563c);const _0x572b2a=_0x8b563c['Enable'],_0x4e6574=_0x8b563c[_0x3b5262(0x2e2)];let _0x5159dc=[$gamePlayer];if(_0x8b563c['ApplyFollowers']){if(_0x3b5262(0x30b)!=='LLyAy'){const _0x3d16e8=this[_0x3b5262(0x293)]['x'],_0x467111=this['_character']['y'];this[_0x3b5262(0x255)]=_0x46bcac['footprintOpacityAtXy'](_0x3d16e8,_0x467111);}else _0x5159dc=_0x5159dc[_0x3b5262(0x214)]($gamePlayer['followers']()['data']());}for(const _0x5d6f3b of _0x5159dc){if(!_0x5d6f3b)continue;_0x5d6f3b[_0x3b5262(0x208)](_0x572b2a,_0x4e6574);}}),PluginManager['registerCommand'](pluginData[_0x3124f3(0x320)],'MotionTrailEnableFollower',_0x427226=>{const _0x335a39=_0x3124f3;if(!SceneManager[_0x335a39(0x15b)]())return;VisuMZ[_0x335a39(0x206)](_0x427226,_0x427226);const _0x3dd0e8=_0x427226['Enable'],_0xd1bcd3=_0x427226[_0x335a39(0x2e2)],_0x402bf2=_0x427226[_0x335a39(0x340)];let _0x483722=_0x402bf2['map'](_0x5e0b63=>$gamePlayer[_0x335a39(0x17e)]()[_0x335a39(0x1bb)](_0x5e0b63));for(const _0x5c3893 of _0x483722){if(!_0x5c3893)continue;_0x5c3893[_0x335a39(0x208)](_0x3dd0e8,_0xd1bcd3);}}),PluginManager['registerCommand'](pluginData[_0x3124f3(0x320)],_0x3124f3(0x146),_0xbaafe9=>{const _0x4ff7fc=_0x3124f3;if(!SceneManager['isSceneMap']())return;VisuMZ[_0x4ff7fc(0x206)](_0xbaafe9,_0xbaafe9);const _0x330cdd=_0xbaafe9[_0x4ff7fc(0x38c)],_0x259091=_0xbaafe9[_0x4ff7fc(0x2e2)],_0x4b2344=_0xbaafe9['EventID'],_0x3901d9=$gameTemp[_0x4ff7fc(0x325)]();let _0x3f1076=_0x4b2344[_0x4ff7fc(0x32f)](_0x3c69c0=>$gameMap[_0x4ff7fc(0x3ea)](_0x3c69c0||_0x3901d9[_0x4ff7fc(0x397)]()));for(const _0x552a37 of _0x3f1076){if(_0x4ff7fc(0x264)===_0x4ff7fc(0x1cd)){if(!this[_0x4ff7fc(0x213)]())return;const _0x4b7343=this[_0x4ff7fc(0x388)]();let _0x44388f='';for(const _0xb3f19 of _0x4b7343){if([0x6c,0x198]['includes'](_0xb3f19[_0x4ff7fc(0x196)])){if(_0x44388f!=='')_0x44388f+='\x0a';_0x44388f+=_0xb3f19[_0x4ff7fc(0x29f)][0x0];}}this[_0x4ff7fc(0x1dc)](_0x44388f);}else{if(!_0x552a37)continue;_0x552a37['enableMotionTrails'](_0x330cdd,_0x259091);}}}),PluginManager[_0x3124f3(0x23e)](pluginData[_0x3124f3(0x320)],_0x3124f3(0x2e9),_0x3065ba=>{const _0x92824c=_0x3124f3;if(!SceneManager[_0x92824c(0x15b)]())return;VisuMZ['ConvertParams'](_0x3065ba,_0x3065ba);const _0x2e4874={'enabled':![],'delay':_0x3065ba['delay']||0x1,'duration':_0x3065ba[_0x92824c(0x2b2)]||0x1,'hue':_0x3065ba['hue']||0x0,'opacityStart':_0x3065ba['opacityStart']||0x0,'tone':_0x3065ba[_0x92824c(0x409)]||[0x0,0x0,0x0,0x0]};let _0x59c96a=[$gamePlayer];if(_0x3065ba['ApplyFollowers']){if(_0x92824c(0x262)!==_0x92824c(0x262))return this[_0x92824c(0x2b0)][_0x92824c(0x255)][_0x92824c(0x279)][_0x573412];else _0x59c96a=_0x59c96a[_0x92824c(0x214)]($gamePlayer[_0x92824c(0x17e)]()[_0x92824c(0x219)]());}for(const _0x144586 of _0x59c96a){if(_0x92824c(0x3df)==='mvWDO'){_0x57276b[_0x92824c(0x206)](_0x40081f,_0x119a48);const _0x121171=_0x134f49[_0x92824c(0x38c)];_0x2d33b3['setSmoothCameraEnabled'](_0x121171);}else{if(!_0x144586)continue;_0x144586[_0x92824c(0x1d9)](_0x2e4874);}}}),PluginManager['registerCommand'](pluginData[_0x3124f3(0x320)],_0x3124f3(0x2a2),_0xd49c67=>{const _0x3984d9=_0x3124f3;if(!SceneManager[_0x3984d9(0x15b)]())return;VisuMZ['ConvertParams'](_0xd49c67,_0xd49c67);const _0x1a4bfa={'enabled':![],'delay':_0xd49c67[_0x3984d9(0x3cc)]||0x1,'duration':_0xd49c67[_0x3984d9(0x2b2)]||0x1,'hue':_0xd49c67[_0x3984d9(0x3ad)]||0x0,'opacityStart':_0xd49c67[_0x3984d9(0x256)]||0x0,'tone':_0xd49c67[_0x3984d9(0x409)]||[0x0,0x0,0x0,0x0]},_0x214e0e=_0xd49c67[_0x3984d9(0x340)];let _0x3bc84c=_0x214e0e[_0x3984d9(0x32f)](_0x354298=>$gamePlayer[_0x3984d9(0x17e)]()[_0x3984d9(0x1bb)](_0x354298));for(const _0x4b90f8 of _0x3bc84c){if(!_0x4b90f8)continue;_0x4b90f8[_0x3984d9(0x1d9)](_0x1a4bfa);}}),PluginManager[_0x3124f3(0x23e)](pluginData[_0x3124f3(0x320)],_0x3124f3(0x38e),_0x58b776=>{const _0x743a14=_0x3124f3;if(!SceneManager[_0x743a14(0x15b)]())return;VisuMZ[_0x743a14(0x206)](_0x58b776,_0x58b776);const _0x373e04={'enabled':![],'delay':_0x58b776[_0x743a14(0x3cc)]||0x1,'duration':_0x58b776['duration']||0x1,'hue':_0x58b776['hue']||0x0,'opacityStart':_0x58b776[_0x743a14(0x256)]||0x0,'tone':_0x58b776[_0x743a14(0x409)]||[0x0,0x0,0x0,0x0]},_0x1d0e66=_0x58b776[_0x743a14(0x205)],_0x12f227=$gameTemp[_0x743a14(0x325)]();let _0x1d5335=_0x1d0e66[_0x743a14(0x32f)](_0x968142=>$gameMap[_0x743a14(0x3ea)](_0x968142||_0x12f227[_0x743a14(0x397)]()));for(const _0xbbf24c of _0x1d5335){if(!_0xbbf24c)continue;_0xbbf24c['setMotionTrailSettings'](_0x373e04);}}),PluginManager[_0x3124f3(0x23e)](pluginData[_0x3124f3(0x320)],_0x3124f3(0x361),_0x1f2677=>{const _0xd1d566=_0x3124f3;if(!SceneManager['isSceneMap']())return;VisuMZ['ConvertParams'](_0x1f2677,_0x1f2677);const _0x972da9={'slower':-0x1,'normal':0x0,'faster':0x1};for(let _0x4e7006=0x1;_0x4e7006<0xa;_0x4e7006++){if(_0x4e7006===0x5)continue;const _0x5b25ad=_0xd1d566(0x1a0)[_0xd1d566(0x1c8)](_0x4e7006),_0x276f85=(_0x1f2677[_0x5b25ad]||'normal')[_0xd1d566(0x2f3)]()['trim'](),_0x284351=_0x972da9[_0x276f85]||0x0;$gameSystem[_0xd1d566(0x3c3)](_0x4e7006,_0x284351);}}),PluginManager[_0x3124f3(0x23e)](pluginData['name'],'SmartBlinkDistance',_0x202454=>{const _0x595a27=_0x3124f3;if(!SceneManager[_0x595a27(0x15b)]())return;VisuMZ[_0x595a27(0x206)](_0x202454,_0x202454);const _0x3ed57b=_0x202454['Distance']||0x1,_0x4a71b1=_0x202454[_0x595a27(0x173)]||0x1,_0x2d58c5=_0x202454[_0x595a27(0x1c9)]||0x0,_0x426585={'NonLandableRegions':_0x202454[_0x595a27(0x2b3)][_0x595a27(0x2ad)](),'NonLandableTerrainTags':_0x202454[_0x595a27(0x161)][_0x595a27(0x2ad)](),'NonPassableRegions':_0x202454['NonPassableRegions'][_0x595a27(0x2ad)](),'NonPassableTerrainTags':_0x202454['NonPassableTerrainTags'][_0x595a27(0x2ad)]()},_0x4c29f9=_0x202454['AnimationID']||0x0,_0x312308=_0x202454[_0x595a27(0x240)]||{'enabled':![]},_0x1e1596={'name':_0x202454['sfxName']||'','volume':_0x202454[_0x595a27(0x266)]||0x0,'pitch':_0x202454[_0x595a27(0x156)]||0x0,'pan':_0x202454[_0x595a27(0x2fa)]||0x0};if($gamePlayer[_0x595a27(0x328)](_0x3ed57b,_0x4a71b1,_0x426585,_0x312308)){_0x1e1596[_0x595a27(0x320)]!==''&&AudioManager[_0x595a27(0x2d2)](_0x1e1596);if(_0x4c29f9>0x0){if(_0x595a27(0x3d6)===_0x595a27(0x2f7)){const _0x16ba47=_0x4da74e[_0x595a27(0x239)],_0x569c84=_0x47d06a[_0x595a27(0x2c7)];_0x444c5d[_0x595a27(0x23f)](_0x16ba47,_0x569c84);}else $gameTemp['requestAnimation']([$gamePlayer],_0x4c29f9);}_0x2d58c5>0x0&&SceneManager[_0x595a27(0x424)][_0x595a27(0x297)](_0x2d58c5);}}),PluginManager[_0x3124f3(0x23e)](pluginData[_0x3124f3(0x320)],'SmartJumpDistance',_0xae6caf=>{const _0x394487=_0x3124f3;if(!SceneManager[_0x394487(0x15b)]())return;VisuMZ['ConvertParams'](_0xae6caf,_0xae6caf);const _0x3a5206=_0xae6caf[_0x394487(0x277)]||0x1,_0x26474f=_0xae6caf[_0x394487(0x173)]||0x1,_0x428baf=_0xae6caf[_0x394487(0x1c9)]||0x0,_0x885578={'NonLandableRegions':_0xae6caf['NonLandableRegions'][_0x394487(0x2ad)](),'NonLandableTerrainTags':_0xae6caf[_0x394487(0x161)][_0x394487(0x2ad)](),'NonPassableRegions':_0xae6caf[_0x394487(0x3d5)][_0x394487(0x2ad)](),'NonPassableTerrainTags':_0xae6caf[_0x394487(0x216)][_0x394487(0x2ad)]()},_0x405b97=_0xae6caf[_0x394487(0x16b)]||0x0,_0x9be0f5=_0xae6caf[_0x394487(0x240)]||{'enabled':![]},_0x396e69={'name':_0xae6caf['sfxName']||'','volume':_0xae6caf[_0x394487(0x266)]||0x0,'pitch':_0xae6caf[_0x394487(0x156)]||0x0,'pan':_0xae6caf[_0x394487(0x2fa)]||0x0};if($gamePlayer[_0x394487(0x350)](_0x3a5206,_0x26474f,_0x885578,_0x9be0f5)){_0x396e69[_0x394487(0x320)]!==''&&AudioManager[_0x394487(0x2d2)](_0x396e69);if(_0x405b97>0x0){if(_0x394487(0x308)!==_0x394487(0x308))return!![];else $gameTemp[_0x394487(0x37e)]([$gamePlayer],_0x405b97);}_0x428baf>0x0&&SceneManager[_0x394487(0x424)]['playOnceParallelInterpreter'](_0x428baf);}}),PluginManager[_0x3124f3(0x23e)](pluginData[_0x3124f3(0x320)],_0x3124f3(0x356),_0x30e105=>{const _0xbe2c2=_0x3124f3;if(!SceneManager[_0xbe2c2(0x15b)]())return;VisuMZ[_0xbe2c2(0x206)](_0x30e105,_0x30e105);const _0x26093b=_0x30e105[_0xbe2c2(0x277)]||0x1,_0x372a1a=_0x30e105[_0xbe2c2(0x173)]||0x1,_0x16b83a=_0x30e105[_0xbe2c2(0x1c9)]||0x0,_0xd24989=_0x30e105[_0xbe2c2(0x184)]||[],_0x46efc2=_0x30e105[_0xbe2c2(0x145)]||0x1,_0x32f8ab=_0x30e105[_0xbe2c2(0x16b)]||0x0,_0xf116c4=_0x30e105[_0xbe2c2(0x240)]||{'enabled':![]},_0x47fe58={'name':_0x30e105[_0xbe2c2(0x1d8)]||'','volume':_0x30e105['sfxVolume']||0x0,'pitch':_0x30e105[_0xbe2c2(0x156)]||0x0,'pan':_0x30e105[_0xbe2c2(0x2fa)]||0x0};$gamePlayer['smartRush'](_0x26093b,_0x372a1a,_0xd24989,_0x46efc2,_0xf116c4)&&(_0x47fe58['name']!==''&&AudioManager[_0xbe2c2(0x2d2)](_0x47fe58),_0x32f8ab>0x0&&$gameTemp[_0xbe2c2(0x37e)]([$gamePlayer],_0x32f8ab),_0x16b83a>0x0&&SceneManager[_0xbe2c2(0x424)]['playOnceParallelInterpreter'](_0x16b83a));}),PluginManager[_0x3124f3(0x23e)](pluginData[_0x3124f3(0x320)],'SmartMoveWaitForSmartBlink',_0x1a0320=>{const _0x535339=_0x3124f3;if(!SceneManager[_0x535339(0x15b)]())return;const _0x1152fa=$gameTemp[_0x535339(0x325)]();_0x1152fa[_0x535339(0x2ab)](_0x535339(0x328));}),PluginManager[_0x3124f3(0x23e)](pluginData['name'],_0x3124f3(0x371),_0x1c8259=>{const _0x5431e4=_0x3124f3;if(!SceneManager[_0x5431e4(0x15b)]())return;const _0xa5022=$gameTemp[_0x5431e4(0x325)]();_0xa5022['setWaitMode'](_0x5431e4(0x350));}),PluginManager[_0x3124f3(0x23e)](pluginData[_0x3124f3(0x320)],_0x3124f3(0x3eb),_0xbf17b7=>{const _0x12c7ad=_0x3124f3;if(!SceneManager['isSceneMap']())return;const _0xd0eee6=$gameTemp[_0x12c7ad(0x325)]();_0xd0eee6['setWaitMode'](_0x12c7ad(0x33b));}),PluginManager[_0x3124f3(0x23e)](pluginData[_0x3124f3(0x320)],'SmoothCameraEnableDisable',_0x566717=>{const _0x1be575=_0x3124f3;VisuMZ[_0x1be575(0x206)](_0x566717,_0x566717);const _0x7cb7ab=_0x566717[_0x1be575(0x38c)];$gameSystem[_0x1be575(0x2fe)](_0x7cb7ab);}),PluginManager[_0x3124f3(0x23e)](pluginData[_0x3124f3(0x320)],_0x3124f3(0x410),_0x299f08=>{const _0x3a7d77=_0x3124f3;VisuMZ[_0x3a7d77(0x206)](_0x299f08,_0x299f08),$gameSystem[_0x3a7d77(0x295)](_0x299f08[_0x3a7d77(0x2ca)],![],![]),$gameSystem[_0x3a7d77(0x295)](_0x299f08[_0x3a7d77(0x1a9)],!![],![]),$gameSystem[_0x3a7d77(0x295)](_0x299f08[_0x3a7d77(0x35e)],![],!![]),$gameSystem['setSmoothCameraSpeed'](_0x299f08['VertDash'],!![],!![]);}),VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x3e1)]={'CatchAll':/(?:SMOOTH|DASH|FOOT|REGION|TERRAIN|SMART|JUMP)>/i,'ForceSmooth':/<FORCE SMOOTH (?:CAMERA|SCROLL)>/i,'NoSmooth':/<NO SMOOTH (?:CAMERA|SCROLL)>/i,'ForceDustCloud':/<FORCE (?:DASH|DUST) (?:CLOUD|CLOUDS)>/i,'NoDustCloud':/<NO (?:DASH|DUST) (?:CLOUD|CLOUDS)>/i,'ForceFootsteps':/<FORCE (?:FOOTSTEPS|FOOTSTEP SOUNDS)>/i,'NoFootsteps':/<NO (?:FOOTSTEPS|FOOTSTEP SOUNDS)>/i,'RegionFootstepSfx':/<REGION (\d+) FOOTSTEP SOUND:[ ](.*)>/gi,'NoRegionFootstepSfx':/<NO REGION (\d+) FOOTSTEP SOUND>/gi,'FootprintRegions':/<FOOTPRINT (?:REGION|REGIONS):[ ](.*?)>/i,'NonFootprintRegions':/<NO FOOTPRINT (?:REGION|REGIONS):[ ](.*?)>/i,'RegionFootprintOpacity':/<REGION (\d+) FOOTPRINT OPACITY:[ ](\d+)>/gi,'RegionFootprintDuration':/<REGION (\d+) FOOTPRINT DURATION:[ ](\d+)>/gi,'NoSmartRush':/<NO SMART RUSH>/i,'SmartRushAntiCrashRegions':/<SMART RUSH NON-CRASH (?:REGION|REGIONS):[ ](.*?)>/i,'NoSmartBlink':/<NO SMART BLINK>/i,'SmartBlinkNonLandRegions':/<SMART BLINK NON-LAND (?:REGION|REGIONS):[ ](.*?)>/i,'SmartBlinkNonPassRegions':/<SMART BLINK NON-PASS (?:REGION|REGIONS):[ ](.*?)>/i,'NoSmartJump':/<NO SMART JUMP>/i,'SmartJumpNonLandRegions':/<SMART JUMP NON-LAND (?:REGION|REGIONS):[ ](.*?)>/i,'SmartJumpNonPassRegions':/<SMART JUMP NON-PASS (?:REGION|REGIONS):[ ](.*?)>/i,'SmartJumpHeightBasedRegions':/<SMART JUMP HEIGHT-BASED (?:REGION|REGIONS):[ ](.*?)>/i,'TerrainTagFootstepSfx':/<TERRAIN TAG (\d+) (?:FOOTSTEP SOUND|FOOTSTEPS):[ ](.*)>/gi,'NoTerrainTagFootstepSfx':/<NO TERRAIN TAG (\d+) (?:FOOTSTEP SOUND|FOOTSTEPS)>/gi,'FootprintTerrainTags':/<FOOTPRINT TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'NonFootprintTerrainTags':/<NO FOOTPRINT TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'TerrainTagFootprintOpacity':/<TERRAIN TAG (\d+) FOOTPRINT OPACITY:[ ](\d+)>/gi,'TerrainTagFootprintDuration':/<TERRAIN TAG (\d+) FOOTPRINT DURATION:[ ](\d+)>/gi,'SmartRushAntiCrashTerrainTags':/<SMART RUSH NON-CRASH TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'SmartBlinkNonLandTerrainTags':/<SMART BLINK NON-LAND TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'SmartBlinkNonPassTerrainTags':/<SMART BLINK NON-PASS TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'SmartJumpNonLandTerrainTags':/<SMART JUMP NON-LAND TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'SmartJumpNonPassTerrainTags':/<SMART JUMP NON-PASS TERRAIN (?:TAG|TAGS):[ ](.*?)>/i,'YesFootstepsEvent':/<(?:ALLOW|ENABLE) (?:FOOTSTEPS|FOOTSTEP SOUNDS)>/i,'NoFootstepsEvent':/<(?:NO|DISABLE) (?:FOOTSTEPS|FOOTSTEP SOUNDS)>/i,'FootstepsVolRate':/<(?:FOOTSTEPS|FOOTSTEP SOUNDS) VOLUME:[ ](\d+)([%％])>/i,'FootstepsPitchRate':/<(?:FOOTSTEPS|FOOTSTEP SOUNDS) PITCH:[ ](\d+)([%％])>/i,'FootstepsFrames':/<(?:FOOTSTEPS|FOOTSTEP SOUNDS) (?:FRAME|FRAMES):[ ](.*?)>/i,'YesFootprintsEvent':/<(?:ALLOW|ENABLE) FOOTPRINTS>/i,'NoFootprintsEvent':/<(?:NO|DISABLE) FOOTPRINTS>/i,'FootprintsFilename':/<(?:FOOTPRINT|FOOTPRINTS) (.*?) (?:FRAME|PATTERN) (\d+) FILENAME:[ ](.*?)>/gi,'FootprintsWidth':/<(?:FOOTPRINT|FOOTPRINTS) (.*?) (?:FRAME|PATTERN) (\d+) WIDTH:[ ](\d+)>/gi,'FootprintsHeight':/<(?:FOOTPRINT|FOOTPRINTS) (.*?) (?:FRAME|PATTERN) (\d+) HEIGHT:[ ](\d+)>/gi,'FootprintsOffset':/<(?:FOOTPRINT|FOOTPRINTS) (.*?) (?:FRAME|PATTERN) (\d+) OFFSET:[ ](.*?)>/gi,'SmartJumpNonLandEvent':/<(?:SMART JUMP NON-LAND|ILLEGAL JUMP)>/i,'SmartJumpNonPassEvent':/<(?:SMART JUMP NON-PASS|ILLEGAL JUMP)>/i},VisuMZ['MovementEffects'][_0x3124f3(0x1a7)]=[_0x3124f3(0x3af),_0x3124f3(0x1d3),_0x3124f3(0x318),_0x3124f3(0x1df)],((()=>{const _0x21c6b8=_0x3124f3;for(const _0xa7e3fe of VisuMZ[_0x21c6b8(0x246)]['ConfigKeys']){'ykPRp'===_0x21c6b8(0x1c7)?this['_smartJumpRestriction'][_0x21c6b8(0x395)]=!![]:ConfigManager[_0xa7e3fe]=!![];}})()),VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x2a4)]=ConfigManager[_0x3124f3(0x142)],ConfigManager['makeData']=function(){const _0x296c7e=_0x3124f3,_0xec7290=VisuMZ[_0x296c7e(0x246)][_0x296c7e(0x2a4)][_0x296c7e(0x19a)](this);for(const _0x122c5e of VisuMZ['MovementEffects'][_0x296c7e(0x1a7)]){_0xec7290[_0x122c5e]=this[_0x122c5e];}return _0xec7290;},VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x2a8)]=ConfigManager['applyData'],ConfigManager[_0x3124f3(0x1e0)]=function(_0x34a7f8){const _0x531f78=_0x3124f3;VisuMZ['MovementEffects'][_0x531f78(0x2a8)][_0x531f78(0x19a)](this,_0x34a7f8);for(const _0x3834a1 of VisuMZ['MovementEffects'][_0x531f78(0x1a7)]){this[_0x531f78(0x21e)](_0x34a7f8,_0x3834a1,!![]);}},TextManager[_0x3124f3(0x40b)]={'DustCloud':VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x162)][_0x3124f3(0x305)]['DustCloudName'],'Footprints':VisuMZ['MovementEffects'][_0x3124f3(0x162)][_0x3124f3(0x305)]['FootprintsName'],'Footsteps':VisuMZ['MovementEffects'][_0x3124f3(0x162)]['Options'][_0x3124f3(0x31f)],'SmoothCamera':VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x162)][_0x3124f3(0x305)][_0x3124f3(0x2d1)]},VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x3bc)]=Scene_Options[_0x3124f3(0x2a7)]['maxCommands'],Scene_Options['prototype']['maxCommands']=function(){const _0x21a07f=_0x3124f3;let _0x3a8a0d=VisuMZ[_0x21a07f(0x246)][_0x21a07f(0x3bc)]['call'](this);const _0x282c84=VisuMZ[_0x21a07f(0x246)][_0x21a07f(0x162)]['Options'];if(_0x282c84[_0x21a07f(0x1cf)]&&_0x282c84['AddDustCloud'])_0x3a8a0d++;if(_0x282c84[_0x21a07f(0x1cf)]&&_0x282c84[_0x21a07f(0x207)])_0x3a8a0d++;if(_0x282c84['AdjustRect']&&_0x282c84['AddFootsteps'])_0x3a8a0d++;if(_0x282c84['AdjustRect']&&_0x282c84[_0x21a07f(0x229)])_0x3a8a0d++;return _0x3a8a0d;},VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x316)]=Window_Options[_0x3124f3(0x2a7)][_0x3124f3(0x2d0)],Window_Options[_0x3124f3(0x2a7)][_0x3124f3(0x2d0)]=function(){const _0x41afd1=_0x3124f3;VisuMZ['MovementEffects'][_0x41afd1(0x316)]['call'](this),this[_0x41afd1(0x28c)]();},Window_Options['prototype'][_0x3124f3(0x28c)]=function(){const _0x3747a7=_0x3124f3;if(VisuMZ[_0x3747a7(0x246)][_0x3747a7(0x162)][_0x3747a7(0x305)]['AddDustCloud']){if(_0x3747a7(0x1f0)!=='oKbPb')this['addMovementEffectsDustCloudCommand']();else return![];}if(VisuMZ[_0x3747a7(0x246)][_0x3747a7(0x162)]['Options'][_0x3747a7(0x207)]){if('pZqvb'!=='pZqvb'){const _0x205b38=_0x41394b[_0x3747a7(0x40b)]['Footprints'],_0x3393fa=_0x3747a7(0x1d3);this['addCommand'](_0x205b38,_0x3393fa);}else this[_0x3747a7(0x421)]();}VisuMZ[_0x3747a7(0x246)][_0x3747a7(0x162)][_0x3747a7(0x305)][_0x3747a7(0x417)]&&this['addMovementEffectsFootstepsCommand'](),VisuMZ['MovementEffects'][_0x3747a7(0x162)][_0x3747a7(0x305)][_0x3747a7(0x229)]&&(_0x3747a7(0x3ab)==='XGPdI'?this[_0x3747a7(0x1c3)]():this[_0x3747a7(0x3f2)]());},Window_Options[_0x3124f3(0x2a7)][_0x3124f3(0x1d6)]=function(){const _0x3ef666=_0x3124f3,_0x2d69c4=TextManager[_0x3ef666(0x40b)][_0x3ef666(0x322)],_0x1058a5=_0x3ef666(0x3af);this[_0x3ef666(0x198)](_0x2d69c4,_0x1058a5);},Window_Options[_0x3124f3(0x2a7)][_0x3124f3(0x421)]=function(){const _0x2a66f4=_0x3124f3,_0xba8dd9=TextManager[_0x2a66f4(0x40b)][_0x2a66f4(0x172)],_0x35bddb=_0x2a66f4(0x1d3);this[_0x2a66f4(0x198)](_0xba8dd9,_0x35bddb);},Window_Options[_0x3124f3(0x2a7)][_0x3124f3(0x267)]=function(){const _0x13b0a0=_0x3124f3,_0x1fac01=TextManager['MovementEffectsOptions'][_0x13b0a0(0x37b)],_0x256fa9=_0x13b0a0(0x318);this['addCommand'](_0x1fac01,_0x256fa9);},Window_Options['prototype'][_0x3124f3(0x1c3)]=function(){const _0x224d6b=_0x3124f3,_0x33140f=TextManager[_0x224d6b(0x40b)]['SmoothCamera'],_0x4e76ea=_0x224d6b(0x1df);this[_0x224d6b(0x198)](_0x33140f,_0x4e76ea);},ImageManager[_0x3124f3(0x16d)]=function(){const _0x16f771=_0x3124f3;if(this['_cached_GeneratedFootprint_Image'])return this[_0x16f771(0x407)];const _0x3ca020=0x64,_0x54bb21=0x64,_0x478e8a=new Bitmap(_0x3ca020,_0x54bb21);return _0x478e8a['paintOpacity']=0xff,_0x478e8a[_0x16f771(0x204)](0x32,0x32,0x32,_0x16f771(0x3c0)),_0x478e8a[_0x16f771(0x31b)]=![],this[_0x16f771(0x407)]=_0x478e8a,this['_cached_GeneratedFootprint_Image'];},SoundManager[_0x3124f3(0x3b2)]=function(_0x55470b){const _0x2a7350=_0x3124f3,_0x172098=VisuMZ[_0x2a7350(0x246)][_0x2a7350(0x162)][_0x2a7350(0x37b)],_0x169ff5={'name':_0x172098[_0x2a7350(0x320)]??_0x2a7350(0x1b4),'volume':_0x172098['volume']??0xa,'pitch':_0x172098['pitch']??0x78,'pan':_0x172098[_0x2a7350(0x294)]??0x0};$gameMap[_0x2a7350(0x270)](_0x169ff5,_0x55470b);if(_0x169ff5==='')return;VisuMZ[_0x2a7350(0x246)][_0x2a7350(0x1aa)](_0x169ff5,_0x55470b),AudioManager[_0x2a7350(0x2d2)](_0x169ff5);},VisuMZ['MovementEffects']['ApplyFootstepSfxModifiers']=function(_0xa93138,_0x11ba2a){const _0x54e89e=_0x3124f3;if(!_0xa93138)return;if(!_0x11ba2a)return;if(_0x11ba2a[_0x54e89e(0x30c)]===Game_Event){const _0x185038=VisuMZ[_0x54e89e(0x246)]['Settings']['Footsteps'],_0x5bc804=$gamePlayer[_0x54e89e(0x18a)](_0x11ba2a['x']),_0x4bc7f3=$gamePlayer[_0x54e89e(0x3d9)](_0x11ba2a['y']),_0x4bd928=Math[_0x54e89e(0x3b0)](_0x5bc804)+Math[_0x54e89e(0x3b0)](_0x4bc7f3);_0x4bd928>0x0&&(_0xa93138['volume']+=_0x4bd928*_0x185038['distanceVolumeModifier'],_0xa93138[_0x54e89e(0x15c)]+=_0x4bd928*_0x185038[_0x54e89e(0x1ad)]),_0x5bc804!==0x0&&(_0xa93138['pan']-=_0x5bc804*_0x185038[_0x54e89e(0x34e)]);}const _0x20cd0b=_0x11ba2a[_0x54e89e(0x37a)]();if(_0x20cd0b){if(_0x54e89e(0x306)===_0x54e89e(0x306))_0xa93138['volume']*=_0x20cd0b[_0x54e89e(0x2b9)]??0x1,_0xa93138['pitch']*=_0x20cd0b[_0x54e89e(0x2f8)]??0x1;else{const _0x3ba7f6=_0x4258cd[_0x54e89e(0x246)][_0x54e89e(0x3e1)];if(!this[_0x54e89e(0x3f6)]())return;const _0x19d31b=this[_0x54e89e(0x3f6)]()[_0x54e89e(0x24d)]||'';_0x19d31b['match'](_0x3ba7f6['SmartRushAntiCrashTerrainTags'])&&(this[_0x54e89e(0x23b)][_0x54e89e(0x428)]=_0x5b14e8['$1'][_0x54e89e(0x166)](',')['map'](_0x411d21=>(_0x1db8a3(_0x411d21)||0x0)['clamp'](0x0,0x7)));}}_0xa93138[_0x54e89e(0x391)]=Math['max'](0x0,_0xa93138['volume']),_0xa93138[_0x54e89e(0x15c)]=Math['max'](0x0,_0xa93138['pitch']),_0xa93138[_0x54e89e(0x294)]=_0xa93138[_0x54e89e(0x294)][_0x54e89e(0x334)](-0x64,0x64);},TextManager[_0x3124f3(0x141)]=function(_0xb263c8){const _0x492e31=_0x3124f3;_0xb263c8=_0xb263c8[_0x492e31(0x2f3)]()[_0x492e31(0x2ee)]();switch(_0xb263c8){case _0x492e31(0x2fd):return 0x2;case _0x492e31(0x21a):return 0x4;case _0x492e31(0x374):return 0x6;case'up':return 0x8;case _0x492e31(0x20e):return 0x1;case _0x492e31(0x14c):return 0x3;case _0x492e31(0x22f):return 0x7;case _0x492e31(0x17b):return 0x9;}return Number(_0xb263c8)||0x0;},VisuMZ[_0x3124f3(0x246)]['BattleManager_startBattle']=BattleManager['startBattle'],BattleManager[_0x3124f3(0x17f)]=function(){const _0x43aaa8=_0x3124f3;VisuMZ[_0x43aaa8(0x246)]['BattleManager_startBattle'][_0x43aaa8(0x19a)](this),$gamePlayer&&$gamePlayer[_0x43aaa8(0x14e)]();},VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x179)]=Game_System[_0x3124f3(0x2a7)][_0x3124f3(0x2c9)],Game_System[_0x3124f3(0x2a7)][_0x3124f3(0x2c9)]=function(){const _0x1e1c3e=_0x3124f3;VisuMZ[_0x1e1c3e(0x246)][_0x1e1c3e(0x179)]['call'](this),this[_0x1e1c3e(0x39a)](),this[_0x1e1c3e(0x338)](),this[_0x1e1c3e(0x3e7)](),this[_0x1e1c3e(0x41d)](),this[_0x1e1c3e(0x203)]();},Game_System[_0x3124f3(0x2a7)]['initMovementEffectsSmoothCamera']=function(){const _0x3b4540=_0x3124f3,_0x29b32b=VisuMZ['MovementEffects']['Settings']['SmoothCamera'];this[_0x3b4540(0x17d)]={'enabled':_0x29b32b[_0x3b4540(0x152)],'horzWalk':_0x29b32b[_0x3b4540(0x2ca)][_0x3b4540(0x334)](0x1,0x30),'vertWalk':_0x29b32b[_0x3b4540(0x1a9)]['clamp'](0x1,0x30),'horzDash':_0x29b32b['HorzDash'][_0x3b4540(0x334)](0x1,0x30),'vertDash':_0x29b32b[_0x3b4540(0x38d)][_0x3b4540(0x334)](0x1,0x30)};},Game_System[_0x3124f3(0x2a7)][_0x3124f3(0x1b8)]=function(){const _0x90a636=_0x3124f3;if(this['_smoothCamera']===undefined)this[_0x90a636(0x39a)]();return this[_0x90a636(0x17d)]['enabled'];},Game_System[_0x3124f3(0x2a7)]['setSmoothCameraEnabled']=function(_0x11f733){const _0x3445e2=_0x3124f3;if(this[_0x3445e2(0x17d)]===undefined)this[_0x3445e2(0x39a)]();this[_0x3445e2(0x17d)][_0x3445e2(0x369)]=_0x11f733;},Game_System[_0x3124f3(0x2a7)][_0x3124f3(0x364)]=function(_0x43c038,_0x335be4){const _0x333dee=_0x3124f3;if(this['_smoothCamera']===undefined)this[_0x333dee(0x39a)]();const _0xfed720=(_0x43c038?_0x333dee(0x2dd):_0x333dee(0x40c))+(_0x335be4?_0x333dee(0x2b8):_0x333dee(0x39c));return this[_0x333dee(0x17d)][_0xfed720]['clamp'](0x1,0x30);},Game_System['prototype'][_0x3124f3(0x295)]=function(_0x469989,_0x22d775,_0x2b47c4){const _0x42e1c5=_0x3124f3;if(this[_0x42e1c5(0x17d)]===undefined)this['initMovementEffectsSmoothCamera']();const _0x117441=(_0x22d775?_0x42e1c5(0x2dd):_0x42e1c5(0x40c))+(_0x2b47c4?_0x42e1c5(0x2b8):_0x42e1c5(0x39c));this[_0x42e1c5(0x17d)][_0x117441]=_0x469989[_0x42e1c5(0x334)](0x1,0x30);},Game_System[_0x3124f3(0x2a7)][_0x3124f3(0x338)]=function(){const _0x3ade4f=_0x3124f3,_0xb27c7a=VisuMZ[_0x3ade4f(0x246)][_0x3ade4f(0x162)]['DustCloud'];this['_dustCloud']={'enabled':_0xb27c7a[_0x3ade4f(0x152)],'filename':_0xb27c7a[_0x3ade4f(0x39b)]||'','color':_0xb27c7a[_0x3ade4f(0x252)]||_0x3ade4f(0x362),'radius':_0xb27c7a[_0x3ade4f(0x34a)]||0x18,'fullness':_0xb27c7a[_0x3ade4f(0x2d7)]||0x0,'wholeDuration':_0xb27c7a[_0x3ade4f(0x394)]||0x14,'startOpacity':_0xb27c7a[_0x3ade4f(0x1af)]||0xc0,'startScale':_0xb27c7a[_0x3ade4f(0x185)]||0.2};},Game_System[_0x3124f3(0x2a7)]['dustCloudData']=function(){const _0x570030=_0x3124f3;if(this[_0x570030(0x2ae)]===undefined)this[_0x570030(0x338)]();return this[_0x570030(0x2ae)];},Game_System[_0x3124f3(0x2a7)][_0x3124f3(0x287)]=function(_0x5a58b4){const _0xf9de68=_0x3124f3;if(this['_dustCloud']===undefined)this[_0xf9de68(0x338)]();this[_0xf9de68(0x2ae)]=JsonEx['makeDeepCopy'](_0x5a58b4);},Game_System[_0x3124f3(0x2a7)][_0x3124f3(0x18e)]=function(){const _0x2c24f4=_0x3124f3;return this[_0x2c24f4(0x30d)]()[_0x2c24f4(0x369)];},Game_System[_0x3124f3(0x2a7)][_0x3124f3(0x3e7)]=function(){const _0xfcde0=_0x3124f3;this['_footstepSoundsEnabled']=VisuMZ['MovementEffects']['Settings'][_0xfcde0(0x37b)][_0xfcde0(0x152)];},Game_System[_0x3124f3(0x2a7)][_0x3124f3(0x27c)]=function(){const _0x5b36ef=_0x3124f3;if(this[_0x5b36ef(0x241)]===undefined)this[_0x5b36ef(0x3e7)]();return this[_0x5b36ef(0x241)];},Game_System[_0x3124f3(0x2a7)][_0x3124f3(0x39f)]=function(_0x554a00){const _0x459f89=_0x3124f3;if(this[_0x459f89(0x241)]===undefined)this[_0x459f89(0x3e7)]();this[_0x459f89(0x241)]=_0x554a00;},Game_System['prototype']['initMovementEffectsFootprintMarks']=function(){const _0x245874=_0x3124f3;this[_0x245874(0x40d)]=VisuMZ[_0x245874(0x246)]['Settings'][_0x245874(0x172)]['Enabled'];},Game_System[_0x3124f3(0x2a7)]['canMakeFootprints']=function(){const _0x2ebc5a=_0x3124f3;if(this[_0x2ebc5a(0x40d)]===undefined)this[_0x2ebc5a(0x41d)]();return this[_0x2ebc5a(0x40d)];},Game_System[_0x3124f3(0x2a7)]['setFootprintsEnabled']=function(_0x231192){const _0x106eff=_0x3124f3;if(this[_0x106eff(0x40d)]===undefined)this['initMovementEffectsFootprintMarks']();this[_0x106eff(0x40d)]=_0x231192;},Game_System[_0x3124f3(0x2a7)]['initMovementEffectsDirMoveSpeedMod']=function(){const _0x756df2=_0x3124f3;this[_0x756df2(0x168)]={'dir1':0x0,'dir2':0x0,'dir3':0x0,'dir4':0x0,'dir6':0x0,'dir7':0x0,'dir8':0x0,'dir9':0x0};},Game_System[_0x3124f3(0x2a7)][_0x3124f3(0x143)]=function(_0x54e49d){const _0xf5bbee=_0x3124f3;if(this['_dirMoveSpeedMod']===undefined)this[_0xf5bbee(0x203)]();const _0x4a2c0f=_0xf5bbee(0x1a0)[_0xf5bbee(0x1c8)](_0x54e49d);return this[_0xf5bbee(0x168)][_0x4a2c0f]||0x0;},Game_System['prototype'][_0x3124f3(0x3c3)]=function(_0xc1f5e3,_0x24da9d){const _0x38d766=_0x3124f3;if(this['_dirMoveSpeedMod']===undefined)this[_0x38d766(0x203)]();const _0xe2831a='dir%1'['format'](_0xc1f5e3);this[_0x38d766(0x168)][_0xe2831a]=_0x24da9d||0x0;},VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x303)]=Game_Picture[_0x3124f3(0x2a7)][_0x3124f3(0x210)],Game_Picture['prototype'][_0x3124f3(0x210)]=function(){return![];},Game_Picture[_0x3124f3(0x2a7)][_0x3124f3(0x165)]=function(){const _0x17d769=_0x3124f3;return VisuMZ['MovementEffects'][_0x17d769(0x303)][_0x17d769(0x19a)](this);},Game_Actor[_0x3124f3(0x2a7)][_0x3124f3(0x37a)]=function(){const _0x2abcf6=_0x3124f3;if(this['_footsteps']===undefined)this[_0x2abcf6(0x284)]();return this[_0x2abcf6(0x3a8)];},Game_Actor[_0x3124f3(0x2a7)][_0x3124f3(0x284)]=function(){const _0x2a4a1f=_0x3124f3;this[_0x2a4a1f(0x3b3)]();const _0x178005=this[_0x2a4a1f(0x18b)]()[_0x2a4a1f(0x24d)]||'';Game_Event[_0x2a4a1f(0x2a7)][_0x2a4a1f(0x1dc)][_0x2a4a1f(0x19a)](this,_0x178005);},Game_Actor[_0x3124f3(0x2a7)][_0x3124f3(0x3b3)]=function(){const _0x4b6daa=_0x3124f3;{if('wwCEq'===_0x4b6daa(0x28a)){const _0x4132fd=VisuMZ['MovementEffects'][_0x4b6daa(0x162)][_0x4b6daa(0x37b)];this[_0x4b6daa(0x3a8)]={'enabled':_0x4132fd[_0x4b6daa(0x2c2)],'volumeRate':_0x4132fd[_0x4b6daa(0x3d1)],'pitchRate':_0x4132fd['actorPitchModifier'],'soundFrames':_0x4132fd[_0x4b6daa(0x3de)][_0x4b6daa(0x2ad)]()};}else{const _0x449038=_0x119d4d['_duration'];_0x2be5fa[_0x4b6daa(0x255)]=_0x802131[_0x4b6daa(0x255)]*(_0x449038-0x1)/_0x449038,_0x162e6d[_0x4b6daa(0x238)]--;}}{if(_0x4b6daa(0x159)!=='KXBGz'){const _0x23a9ec=VisuMZ[_0x4b6daa(0x246)][_0x4b6daa(0x162)]['Footprints'];this[_0x4b6daa(0x2e8)]={'enabled':!![],'dir1':JSON[_0x4b6daa(0x231)](JSON[_0x4b6daa(0x144)](_0x23a9ec[_0x4b6daa(0x234)])),'dir2':JSON[_0x4b6daa(0x231)](JSON['stringify'](_0x23a9ec[_0x4b6daa(0x22c)])),'dir3':JSON[_0x4b6daa(0x231)](JSON[_0x4b6daa(0x144)](_0x23a9ec['dir3'])),'dir4':JSON[_0x4b6daa(0x231)](JSON['stringify'](_0x23a9ec[_0x4b6daa(0x23a)])),'dir6':JSON[_0x4b6daa(0x231)](JSON[_0x4b6daa(0x144)](_0x23a9ec['dir6'])),'dir7':JSON[_0x4b6daa(0x231)](JSON[_0x4b6daa(0x144)](_0x23a9ec[_0x4b6daa(0x1b0)])),'dir8':JSON['parse'](JSON[_0x4b6daa(0x144)](_0x23a9ec[_0x4b6daa(0x2ba)])),'dir9':JSON[_0x4b6daa(0x231)](JSON[_0x4b6daa(0x144)](_0x23a9ec['dir9']))};}else{if([0x6c,0x198]['includes'](_0x477d0d['code'])){if(_0x517eab!=='')_0x27fe1e+='\x0a';_0x4fa252+=_0x4d5bb9[_0x4b6daa(0x29f)][0x0];}}}},Game_Actor['prototype'][_0x3124f3(0x2bb)]=function(){const _0x1eb1ea=_0x3124f3;if(this[_0x1eb1ea(0x2e8)]===undefined)this['setupMovementEffectsNotetags']();return this[_0x1eb1ea(0x2e8)];},VisuMZ['MovementEffects'][_0x3124f3(0x3b1)]=Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x415)],Game_Map['prototype'][_0x3124f3(0x415)]=function(_0x49ad7e){const _0x5afd69=_0x3124f3;VisuMZ['MovementEffects']['Game_Map_setup']['call'](this,_0x49ad7e),this[_0x5afd69(0x3ca)](),this['setupRegionTerrainTagFootprints'](),this[_0x5afd69(0x1be)](),this[_0x5afd69(0x392)]();},VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x1ef)]=Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x2b6)],Game_Map['prototype'][_0x3124f3(0x2b6)]=function(_0xa3d4bb){const _0x4c6ac0=_0x3124f3;VisuMZ['MovementEffects'][_0x4c6ac0(0x1ef)][_0x4c6ac0(0x19a)](this,_0xa3d4bb),this[_0x4c6ac0(0x3ca)](),this[_0x4c6ac0(0x1f3)](),this[_0x4c6ac0(0x1be)](),this['setupRegionTerrainTagSmartBlink']();},Game_Map['prototype']['isCeilingTile']=function(_0x5a203d,_0x698fad){const _0x1bdd18=_0x3124f3,_0x298730=[0x50,0x51,0x52,0x53,0x54,0x55,0x56,0x57];_0x298730['push'](0x60,0x61,0x62,0x63,0x64,0x65,0x66,0x67),_0x298730[_0x1bdd18(0x223)](0x70,0x71,0x72,0x73,0x74,0x75,0x76,0x77);for(let _0xe40d3d=0x0;_0xe40d3d<0x5;_0xe40d3d++){const _0x2592fb=$gameMap[_0x1bdd18(0x18d)](_0x5a203d,_0x698fad,_0xe40d3d);if(_0x298730[_0x1bdd18(0x36d)](_0x2592fb))return!![];}return![];},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x1ed)]=function(){const _0x2b324=_0x3124f3;if(!ConfigManager[_0x2b324(0x1df)])return![];if($dataMap){const _0xe0bf08=VisuMZ[_0x2b324(0x246)][_0x2b324(0x3e1)],_0x1a1766=$dataMap['note']||'';if(_0x1a1766[_0x2b324(0x2a0)](_0xe0bf08[_0x2b324(0x330)]))return!![];else{if(_0x1a1766[_0x2b324(0x2a0)](_0xe0bf08[_0x2b324(0x1e8)]))return![];}}return $gameSystem[_0x2b324(0x1b8)]();},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x18e)]=function(){const _0x423f1a=_0x3124f3;if(!ConfigManager['dustCloud'])return![];if($dataMap){if(_0x423f1a(0x3e9)!==_0x423f1a(0x398)){const _0xc906bc=VisuMZ[_0x423f1a(0x246)]['RegExp'],_0x5a8911=$dataMap['note']||'';if(_0x5a8911[_0x423f1a(0x2a0)](_0xc906bc[_0x423f1a(0x3b8)]))return!![];else{if(_0x5a8911[_0x423f1a(0x2a0)](_0xc906bc[_0x423f1a(0x2c5)]))return![];}}else{if(this[_0x423f1a(0x17d)]===_0x2fe85e)this[_0x423f1a(0x39a)]();const _0x3bd80b=(_0x38f87b?_0x423f1a(0x2dd):_0x423f1a(0x40c))+(_0x58def1?_0x423f1a(0x2b8):'Walk');return this[_0x423f1a(0x17d)][_0x3bd80b]['clamp'](0x1,0x30);}}return $gameSystem[_0x423f1a(0x18e)]();},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x27c)]=function(){const _0x5db582=_0x3124f3;if(!ConfigManager[_0x5db582(0x318)])return![];if($dataMap){if(_0x5db582(0x399)===_0x5db582(0x399)){const _0x19d587=VisuMZ[_0x5db582(0x246)]['RegExp'],_0x1c39f1=$dataMap['note']||'';if(_0x1c39f1[_0x5db582(0x2a0)](_0x19d587[_0x5db582(0x242)])){if('sjzIq'==='AMPFb')_0x1ad085[_0x5db582(0x246)][_0x5db582(0x171)]['call'](this),this[_0x5db582(0x1a5)][_0x5db582(0x3d0)]['x']=_0x259007['ceil'](this[_0x5db582(0x1a5)][_0x5db582(0x3d0)]['x']),this['_tilemap'][_0x5db582(0x3d0)]['y']=_0x2fbbae[_0x5db582(0x157)](this['_tilemap'][_0x5db582(0x3d0)]['y']),this[_0x5db582(0x352)]();else return!![];}else{if(_0x1c39f1[_0x5db582(0x2a0)](_0x19d587[_0x5db582(0x41c)]))return![];}}else{if(this[_0x5db582(0x3b7)]===_0x1556c2)this['setupRegionTerrainTagSmartJump']();const _0x4bfcde=this[_0x5db582(0x3b7)]['HeightBasedRegions'][_0x5db582(0x16e)](_0x22ac26);return _0x4bfcde===0x0;}}return $gameSystem[_0x5db582(0x27c)]();},Game_Map['prototype'][_0x3124f3(0x3ca)]=function(){const _0x57a951=_0x3124f3;this[_0x57a951(0x33e)](),this[_0x57a951(0x14f)](),this[_0x57a951(0x3c5)]();},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x33e)]=function(){const _0x33c44e=_0x3124f3;this['_regionFootstepSounds']={},this[_0x33c44e(0x244)]={};},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x14f)]=function(){const _0x188ede=_0x3124f3;if(!$dataMap)return;const _0xa69a6e=VisuMZ[_0x188ede(0x246)][_0x188ede(0x162)]['Footsteps'],_0x10e849=VisuMZ['MovementEffects'][_0x188ede(0x3e1)],_0x217b42=$dataMap['note']||'',_0x5c4746=_0x217b42[_0x188ede(0x2a0)](_0x10e849['RegionFootstepSfx']);if(_0x5c4746)for(const _0x1c5438 of _0x5c4746){_0x1c5438[_0x188ede(0x2a0)](_0x10e849['RegionFootstepSfx']);const _0x1c04e5=Number(RegExp['$1'])['clamp'](0x0,0xff),_0x17d978=String(RegExp['$2'])['split'](',')[_0x188ede(0x32f)](_0x2a8694=>_0x2a8694[_0x188ede(0x2ee)]());this[_0x188ede(0x3fd)][_0x1c04e5]={'name':_0x17d978[0x0]||'','volume':Number(_0x17d978[0x1]??_0xa69a6e[_0x188ede(0x391)]),'pitch':Number(_0x17d978[0x2]??_0xa69a6e['pitch']),'pan':Number(_0x17d978[0x3]??_0xa69a6e['pan'])};}const _0x57edef=_0x217b42[_0x188ede(0x2a0)](_0x10e849[_0x188ede(0x227)]);if(_0x57edef)for(const _0x25fa63 of _0x57edef){_0x25fa63[_0x188ede(0x2a0)](_0x10e849[_0x188ede(0x227)]);const _0x45ed45=Number(RegExp['$1'])[_0x188ede(0x334)](0x0,0xff);this['_regionFootstepSounds'][_0x45ed45]={'name':'','volume':0x0,'pitch':0x0,'pan':0x0};}},Game_Map['prototype'][_0x3124f3(0x3c5)]=function(){const _0x5c8e7a=_0x3124f3;if(!this[_0x5c8e7a(0x3f6)]())return;const _0x400382=VisuMZ[_0x5c8e7a(0x246)][_0x5c8e7a(0x162)][_0x5c8e7a(0x37b)],_0x3f50eb=VisuMZ[_0x5c8e7a(0x246)][_0x5c8e7a(0x3e1)],_0x501b47=this['tileset']()[_0x5c8e7a(0x24d)]||'',_0x7d4d0c=_0x501b47['match'](_0x3f50eb[_0x5c8e7a(0x1ab)]);if(_0x7d4d0c)for(const _0x1c800a of _0x7d4d0c){_0x1c800a[_0x5c8e7a(0x2a0)](_0x3f50eb[_0x5c8e7a(0x1ab)]);const _0x5e698b=Number(RegExp['$1'])[_0x5c8e7a(0x334)](0x0,0xff),_0x430b8b=String(RegExp['$2'])[_0x5c8e7a(0x166)](',')[_0x5c8e7a(0x32f)](_0x343158=>_0x343158[_0x5c8e7a(0x2ee)]());this[_0x5c8e7a(0x244)][_0x5e698b]={'name':_0x430b8b[0x0]||'','volume':Number(_0x430b8b[0x1]??_0x400382['volume']),'pitch':Number(_0x430b8b[0x2]??_0x400382[_0x5c8e7a(0x15c)]),'pan':Number(_0x430b8b[0x3]??_0x400382['pan'])};}const _0x292715=_0x501b47[_0x5c8e7a(0x2a0)](_0x3f50eb[_0x5c8e7a(0x35f)]);if(_0x292715)for(const _0x5e3745 of _0x292715){_0x5e3745[_0x5c8e7a(0x2a0)](_0x3f50eb[_0x5c8e7a(0x35f)]);const _0x553b64=Number(RegExp['$1'])[_0x5c8e7a(0x334)](0x0,0x7);this[_0x5c8e7a(0x244)][_0x553b64]={'name':'','volume':0x0,'pitch':0x0,'pan':0x0};}},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x270)]=function(_0x115f7d,_0x2c8635){const _0x3c29c6=_0x3124f3;if(!_0x115f7d)return;if(!_0x2c8635)return;(this[_0x3c29c6(0x3fd)]===undefined||this[_0x3c29c6(0x244)]===undefined)&&this[_0x3c29c6(0x3ca)]();const _0x3fbbe3=_0x2c8635['x'],_0x4c32f0=_0x2c8635['y'],_0x5a7c2c=this[_0x3c29c6(0x38b)](_0x3fbbe3,_0x4c32f0),_0x5e52c8=this[_0x3c29c6(0x285)](_0x3fbbe3,_0x4c32f0),_0x464f7c=['name',_0x3c29c6(0x391),_0x3c29c6(0x15c),_0x3c29c6(0x294)];if(this[_0x3c29c6(0x244)][_0x5e52c8]){const _0x4b6290=this[_0x3c29c6(0x244)][_0x5e52c8];for(const _0x3612a4 of _0x464f7c){if(_0x3c29c6(0x37f)==='DWyEH')_0x115f7d[_0x3612a4]=_0x4b6290[_0x3612a4];else{_0x25d503[_0x3c29c6(0x2a0)](_0x20add9['NoTerrainTagFootstepSfx']);const _0x9c39ab=_0x19ccb8(_0x19e461['$1'])[_0x3c29c6(0x334)](0x0,0x7);this[_0x3c29c6(0x244)][_0x9c39ab]={'name':'','volume':0x0,'pitch':0x0,'pan':0x0};}}}if(this['_regionFootstepSounds'][_0x5a7c2c]){if(_0x3c29c6(0x153)==='IYnyy'){if(!this[_0x3c29c6(0x25e)]())return![];if(this[_0x3c29c6(0x24e)]()&&!this[_0x3c29c6(0x29d)]())return![];if(this['isJumping']())return![];if(this[_0x3c29c6(0x427)]())return![];const _0x4606d0=this[_0x3c29c6(0x37a)]()[_0x3c29c6(0x1c6)]??[];if(_0x4606d0['length']<=0x0)return!![];return _0x4606d0[_0x3c29c6(0x36d)](this[_0x3c29c6(0x1b9)]());}else{const _0x2c6b0b=this['_regionFootstepSounds'][_0x5a7c2c];for(const _0x18053c of _0x464f7c){_0x3c29c6(0x3c2)!=='qlRmh'?_0x571c4d[_0x3c29c6(0x23f)](_0x328adc,_0x10acc2):_0x115f7d[_0x18053c]=_0x2c6b0b[_0x18053c];}}}},Game_Map[_0x3124f3(0x2a7)]['canMakeFootprints']=function(_0x2e3491,_0x46539a){const _0x41417a=_0x3124f3;if(!ConfigManager[_0x41417a(0x1d3)])return![];if(!$gameSystem[_0x41417a(0x271)]())return![];if(this[_0x41417a(0x2b0)]===undefined)this[_0x41417a(0x1f3)]();const _0x5d2bfa=this[_0x41417a(0x38b)](_0x2e3491,_0x46539a),_0x28df8a=this[_0x41417a(0x285)](_0x2e3491,_0x46539a);if(this[_0x41417a(0x2b0)][_0x41417a(0x2f6)][_0x41417a(0x1e9)][_0x41417a(0x36d)](_0x5d2bfa))return![];if(this[_0x41417a(0x2b0)][_0x41417a(0x2f6)][_0x41417a(0x279)]['includes'](_0x28df8a))return![];if(this['_footprints'][_0x41417a(0x15d)][_0x41417a(0x1e9)]['includes'](_0x5d2bfa))return!![];if(this[_0x41417a(0x2b0)]['allowed'][_0x41417a(0x279)]['includes'](_0x28df8a))return!![];return![];},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x1f3)]=function(){const _0x294a1b=_0x3124f3;this[_0x294a1b(0x1e5)](),this[_0x294a1b(0x174)](),this['parseTerrainTagBasedFootprints']();},Game_Map[_0x3124f3(0x2a7)]['initRegionTerrainTagFootprints']=function(){const _0x178306=_0x3124f3,_0xc835f3=VisuMZ['MovementEffects'][_0x178306(0x162)][_0x178306(0x172)];this[_0x178306(0x2b0)]={'allowed':{'regions':_0xc835f3['DefaultRegions'][_0x178306(0x2ad)](),'terrainTags':_0xc835f3[_0x178306(0x337)]['clone']()},'forbidden':{'regions':[],'terrainTags':[]},'opacity':{'regions':{},'terrainTags':{}},'duration':{'regions':{},'terrainTags':{}}};},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x174)]=function(){const _0x5da356=_0x3124f3;if(!$dataMap)return;if(this['_footprints']===undefined)this[_0x5da356(0x1f3)]();const _0x4e09b1=VisuMZ[_0x5da356(0x246)][_0x5da356(0x3e1)],_0x17c5ed=$dataMap[_0x5da356(0x24d)]||'';if(_0x17c5ed[_0x5da356(0x2a0)](_0x4e09b1[_0x5da356(0x23c)])){if(_0x5da356(0x382)!=='GuhWR')this[_0x5da356(0x2b0)][_0x5da356(0x15d)][_0x5da356(0x1e9)]=RegExp['$1']['split'](',')[_0x5da356(0x32f)](_0x3c855e=>(Number(_0x3c855e)||0x0)[_0x5da356(0x334)](0x0,0xff));else{if(!_0x1263d8)return 0x2d;const _0x218941=_0x2b2e6e[_0x5da356(0x41b)]();if(_0x218941===0x6)return 0x0;if(_0x218941===0x9)return 0x2d;if(_0x218941===0x8)return 0x5a;if(_0x218941===0x7)return 0x87;if(_0x218941===0x4)return 0xb4;if(_0x218941===0x1)return 0xe1;if(_0x218941===0x2)return 0x10e;if(_0x218941===0x3)return 0x13b;return 0x2d;}}_0x17c5ed[_0x5da356(0x2a0)](_0x4e09b1[_0x5da356(0x1ea)])&&(this[_0x5da356(0x2b0)][_0x5da356(0x2f6)][_0x5da356(0x1e9)]=RegExp['$1']['split'](',')[_0x5da356(0x32f)](_0xe82c7a=>(Number(_0xe82c7a)||0x0)['clamp'](0x0,0xff)));const _0x3a886d=_0x17c5ed['match'](_0x4e09b1['RegionFootprintOpacity']);if(_0x3a886d)for(const _0x3eaeed of _0x3a886d){if(_0x5da356(0x1fe)===_0x5da356(0x25f))this[_0x5da356(0x3ca)]();else{_0x3eaeed['match'](_0x4e09b1[_0x5da356(0x2db)]);const _0xc51f3a=Number(RegExp['$1'])['clamp'](0x0,0xff),_0x1447c2=Number(RegExp['$2'])[_0x5da356(0x334)](0x0,0xff);this[_0x5da356(0x2b0)][_0x5da356(0x255)][_0x5da356(0x1e9)][_0xc51f3a]=_0x1447c2;}}const _0xdd679=_0x17c5ed['match'](_0x4e09b1[_0x5da356(0x280)]);if(_0xdd679)for(const _0x4ed942 of _0xdd679){if(_0x5da356(0x3fb)==='oitHf')this[_0x5da356(0x2b0)][_0x5da356(0x2f6)][_0x5da356(0x279)]=_0x31a71d['$1'][_0x5da356(0x166)](',')['map'](_0x120ecc=>(_0x1b59fa(_0x120ecc)||0x0)[_0x5da356(0x334)](0x0,0x7));else{_0x4ed942[_0x5da356(0x2a0)](_0x4e09b1[_0x5da356(0x280)]);const _0x310287=Number(RegExp['$1'])[_0x5da356(0x334)](0x0,0xff),_0x70ed02=Math[_0x5da356(0x331)](0x1,Number(RegExp['$2']));this[_0x5da356(0x2b0)]['duration'][_0x5da356(0x1e9)][_0x310287]=_0x70ed02;}}},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x3fc)]=function(){const _0x4af453=_0x3124f3;if(!this[_0x4af453(0x3f6)]())return;if(this['_footprints']===undefined)this[_0x4af453(0x1f3)]();const _0x1ef5c5=VisuMZ[_0x4af453(0x246)]['RegExp'],_0x4b7cba=this[_0x4af453(0x3f6)]()['note']||'';if(_0x4b7cba[_0x4af453(0x2a0)](_0x1ef5c5['FootprintTerrainTags'])){if(_0x4af453(0x300)!==_0x4af453(0x300)){if(_0x2e164c[_0xbd4bdd][_0x1cddf2]){if(_0x2f8924[_0x514e37][_0x2d4106][_0x4af453(0x39b)]!=='')return!![];if(_0x156ecd[_0x471ac7][_0x29e16d][_0x4af453(0x2f5)]>0x0)return!![];if(_0x34d806[_0x261751][_0xfd7579][_0x4af453(0x32d)]>0x0)return!![];}}else this['_footprints'][_0x4af453(0x15d)][_0x4af453(0x279)]=RegExp['$1'][_0x4af453(0x166)](',')[_0x4af453(0x32f)](_0xbc68f2=>(Number(_0xbc68f2)||0x0)['clamp'](0x0,0x7));}_0x4b7cba[_0x4af453(0x2a0)](_0x1ef5c5[_0x4af453(0x3c7)])&&(this[_0x4af453(0x2b0)][_0x4af453(0x2f6)][_0x4af453(0x279)]=RegExp['$1'][_0x4af453(0x166)](',')[_0x4af453(0x32f)](_0x581010=>(Number(_0x581010)||0x0)[_0x4af453(0x334)](0x0,0x7)));const _0x26e575=_0x4b7cba[_0x4af453(0x2a0)](_0x1ef5c5[_0x4af453(0x3d3)]);if(_0x26e575)for(const _0x15b1fe of _0x26e575){_0x15b1fe[_0x4af453(0x2a0)](_0x1ef5c5['TerrainTagFootprintOpacity']);const _0x4450cd=Number(RegExp['$1'])[_0x4af453(0x334)](0x0,0xff),_0x4cb62c=Number(RegExp['$2'])['clamp'](0x0,0xff);this[_0x4af453(0x2b0)][_0x4af453(0x255)]['terrainTags'][_0x4450cd]=_0x4cb62c;}const _0x459532=_0x4b7cba[_0x4af453(0x2a0)](_0x1ef5c5[_0x4af453(0x16a)]);if(_0x459532)for(const _0x43809a of _0x459532){if('miHcN'!==_0x4af453(0x2bc)){_0x43809a[_0x4af453(0x2a0)](_0x1ef5c5[_0x4af453(0x16a)]);const _0x2bed15=Number(RegExp['$1'])[_0x4af453(0x334)](0x0,0xff),_0x13735b=Math[_0x4af453(0x331)](0x1,Number(RegExp['$2']));this[_0x4af453(0x2b0)][_0x4af453(0x2b2)][_0x4af453(0x279)][_0x2bed15]=_0x13735b;}else this['createSmartBlinkMotionTrailSprite']();}},Game_Map['prototype'][_0x3124f3(0x419)]=function(_0x5847e9,_0x5254c3){const _0x5c6b43=_0x3124f3;if(this[_0x5c6b43(0x2b0)]===undefined)this['setupRegionTerrainTagFootprints']();const _0x4808a4=VisuMZ['MovementEffects'][_0x5c6b43(0x162)][_0x5c6b43(0x172)],_0xe65ec1=this[_0x5c6b43(0x38b)](_0x5847e9,_0x5254c3),_0x1799cb=this[_0x5c6b43(0x285)](_0x5847e9,_0x5254c3);if(this[_0x5c6b43(0x2b0)][_0x5c6b43(0x255)][_0x5c6b43(0x1e9)][_0xe65ec1]!==undefined)return this[_0x5c6b43(0x2b0)][_0x5c6b43(0x255)][_0x5c6b43(0x1e9)][_0xe65ec1];else{if(this['_footprints'][_0x5c6b43(0x255)]['terrainTags'][_0x1799cb]!==undefined)return'GibPz'!==_0x5c6b43(0x188)?1.0017453:this[_0x5c6b43(0x2b0)]['opacity']['terrainTags'][_0x1799cb];}return _0x4808a4[_0x5c6b43(0x1af)];},Game_Map[_0x3124f3(0x2a7)]['footprintDurationAtXy']=function(_0x1d1d1d,_0x292315){const _0x37133b=_0x3124f3;if(this[_0x37133b(0x2b0)]===undefined)this[_0x37133b(0x1f3)]();const _0x3ecc0e=VisuMZ[_0x37133b(0x246)][_0x37133b(0x162)][_0x37133b(0x172)],_0x1b1ab5=this['regionId'](_0x1d1d1d,_0x292315),_0x5df42e=this[_0x37133b(0x285)](_0x1d1d1d,_0x292315);if(this[_0x37133b(0x2b0)][_0x37133b(0x2b2)][_0x37133b(0x1e9)][_0x1b1ab5]!==undefined)return this[_0x37133b(0x2b0)][_0x37133b(0x2b2)][_0x37133b(0x1e9)][_0x1b1ab5];else{if(this[_0x37133b(0x2b0)][_0x37133b(0x2b2)][_0x37133b(0x279)][_0x5df42e]!==undefined){if(_0x37133b(0x1ca)==='LdbtJ')return this[_0x37133b(0x2b0)][_0x37133b(0x2b2)][_0x37133b(0x279)][_0x5df42e];else this[_0x37133b(0x414)]--;}}return _0x3ecc0e[_0x37133b(0x394)];},Game_Map['prototype']['setupRegionTerrainTagSmartRush']=function(){const _0x280f7c=_0x3124f3;this[_0x280f7c(0x42c)](),this['parseRegionBasedSmartRush'](),this[_0x280f7c(0x18f)]();},Game_Map['prototype'][_0x3124f3(0x42c)]=function(){const _0x184402=_0x3124f3,_0x421403=VisuMZ['MovementEffects'][_0x184402(0x162)][_0x184402(0x401)];this[_0x184402(0x23b)]={'enabled':!![],'NonCrashRegions':(_0x421403['NonCrashRegions']||[])[_0x184402(0x2ad)](),'NonCrashTerrainTags':(_0x421403[_0x184402(0x428)]||[])['clone']()};},Game_Map[_0x3124f3(0x2a7)]['parseRegionBasedSmartRush']=function(){const _0x42057f=_0x3124f3,_0x120d6a=VisuMZ['MovementEffects'][_0x42057f(0x3e1)],_0x49d41a=$dataMap[_0x42057f(0x24d)]||'';_0x49d41a[_0x42057f(0x2a0)](_0x120d6a[_0x42057f(0x358)])&&(this['_smartRush']['enabled']=![]),_0x49d41a[_0x42057f(0x2a0)](_0x120d6a[_0x42057f(0x3cd)])&&(this[_0x42057f(0x23b)][_0x42057f(0x34f)]=RegExp['$1'][_0x42057f(0x166)](',')[_0x42057f(0x32f)](_0x45a038=>(Number(_0x45a038)||0x0)['clamp'](0x0,0xff)));},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x18f)]=function(){const _0x33364d=_0x3124f3,_0x4f2019=VisuMZ[_0x33364d(0x246)]['RegExp'];if(!this[_0x33364d(0x3f6)]())return;const _0x59418b=this['tileset']()[_0x33364d(0x24d)]||'';_0x59418b[_0x33364d(0x2a0)](_0x4f2019[_0x33364d(0x317)])&&(this[_0x33364d(0x23b)][_0x33364d(0x428)]=RegExp['$1'][_0x33364d(0x166)](',')[_0x33364d(0x32f)](_0x14124f=>(Number(_0x14124f)||0x0)[_0x33364d(0x334)](0x0,0x7)));},Game_Map['prototype'][_0x3124f3(0x41a)]=function(){const _0x24c407=_0x3124f3;if(this[_0x24c407(0x23b)]===undefined)this[_0x24c407(0x1be)]();return this[_0x24c407(0x23b)][_0x24c407(0x369)];},Game_Map[_0x3124f3(0x2a7)]['isSmartRushCrashShakeTile']=function(_0x5eceb7,_0x8c3c,_0x4010b2){const _0x43a903=_0x3124f3,_0x446e02=this[_0x43a903(0x222)](_0x5eceb7,_0x4010b2),_0x558d38=this[_0x43a903(0x3ae)](_0x8c3c,_0x4010b2);if($gameMap[_0x43a903(0x377)](_0x446e02,_0x558d38,0x200))return![];if($gameMap['checkPassage'](_0x446e02,_0x558d38,0x400))return![];if(_0x446e02<0x0||_0x446e02>=this[_0x43a903(0x2f5)]())return![];if(_0x558d38<0x0||_0x558d38>=this[_0x43a903(0x32d)]())return![];const _0x3279b9=this[_0x43a903(0x38b)](_0x446e02,_0x558d38);if(this[_0x43a903(0x23b)][_0x43a903(0x34f)][_0x43a903(0x36d)](_0x3279b9))return![];const _0x17159e=this[_0x43a903(0x285)](_0x446e02,_0x558d38);if(this[_0x43a903(0x23b)][_0x43a903(0x428)][_0x43a903(0x36d)](_0x17159e))return![];return Game_Player[_0x43a903(0x33a)];},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x392)]=function(){const _0x249312=_0x3124f3;this[_0x249312(0x232)](),this[_0x249312(0x1d2)](),this['parseTerrainTagBasedSmartBlink']();},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x232)]=function(){const _0x37b80e=_0x3124f3,_0x428013=VisuMZ[_0x37b80e(0x246)][_0x37b80e(0x162)][_0x37b80e(0x333)];this[_0x37b80e(0x17c)]={'enabled':!![],'NonLandableRegions':(_0x428013[_0x37b80e(0x2b3)]||[])[_0x37b80e(0x2ad)](),'NonLandableTerrainTags':(_0x428013[_0x37b80e(0x161)]||[])[_0x37b80e(0x2ad)](),'NonPassableRegions':(_0x428013['NonPassableRegions']||[])['clone'](),'NonPassableTerrainTags':(_0x428013[_0x37b80e(0x216)]||[])[_0x37b80e(0x2ad)]()};},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x1d2)]=function(){const _0x405203=_0x3124f3,_0x4ed559=VisuMZ['MovementEffects'][_0x405203(0x3e1)],_0x116efe=$dataMap[_0x405203(0x24d)]||'';_0x116efe[_0x405203(0x2a0)](_0x4ed559['NoSmartBlink'])&&(this['_smartBlink'][_0x405203(0x369)]=![]),_0x116efe[_0x405203(0x2a0)](_0x4ed559[_0x405203(0x378)])&&(this['_smartBlink'][_0x405203(0x2b3)]=RegExp['$1']['split'](',')[_0x405203(0x32f)](_0x38466b=>(Number(_0x38466b)||0x0)['clamp'](0x0,0xff))),_0x116efe['match'](_0x4ed559[_0x405203(0x3c1)])&&(this[_0x405203(0x17c)][_0x405203(0x3d5)]=RegExp['$1'][_0x405203(0x166)](',')[_0x405203(0x32f)](_0x150194=>(Number(_0x150194)||0x0)[_0x405203(0x334)](0x0,0xff)));},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x226)]=function(){const _0x3aa317=_0x3124f3,_0x223e23=VisuMZ[_0x3aa317(0x246)][_0x3aa317(0x3e1)];if(!this[_0x3aa317(0x3f6)]())return;const _0x3dfc7f=this[_0x3aa317(0x3f6)]()[_0x3aa317(0x24d)]||'';_0x3dfc7f[_0x3aa317(0x2a0)](_0x223e23[_0x3aa317(0x15f)])&&(this['_smartBlink'][_0x3aa317(0x161)]=RegExp['$1']['split'](',')[_0x3aa317(0x32f)](_0x45c00f=>(Number(_0x45c00f)||0x0)['clamp'](0x0,0x7))),_0x3dfc7f[_0x3aa317(0x2a0)](_0x223e23[_0x3aa317(0x14d)])&&(this[_0x3aa317(0x17c)][_0x3aa317(0x216)]=RegExp['$1'][_0x3aa317(0x166)](',')[_0x3aa317(0x32f)](_0x3ecfbb=>(Number(_0x3ecfbb)||0x0)[_0x3aa317(0x334)](0x0,0x7)));},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x3e5)]=function(){const _0x34fab7=_0x3124f3;if(this[_0x34fab7(0x17c)]===undefined)this[_0x34fab7(0x392)]();return this[_0x34fab7(0x17c)][_0x34fab7(0x369)];},Game_Map['prototype'][_0x3124f3(0x29a)]=function(_0x5bf107,_0x69fca1){const _0x152cd1=_0x3124f3,_0x12b05a=this['regionId'](_0x5bf107,_0x69fca1),_0x5df0df=this[_0x152cd1(0x285)](_0x5bf107,_0x69fca1);if(this['_smartBlink']===undefined)this[_0x152cd1(0x392)]();if(this[_0x152cd1(0x17c)][_0x152cd1(0x3d5)][_0x152cd1(0x36d)](_0x12b05a))return!![];if(this[_0x152cd1(0x17c)]['NonPassableTerrainTags'][_0x152cd1(0x36d)](_0x5df0df))return!![];return![];},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x282)]=function(_0x387524,_0x5277f3){const _0x190bb7=_0x3124f3,_0x484951=this[_0x190bb7(0x38b)](_0x387524,_0x5277f3),_0x50fb34=this[_0x190bb7(0x285)](_0x387524,_0x5277f3);if(this[_0x190bb7(0x17c)]===undefined)this[_0x190bb7(0x392)]();if(this[_0x190bb7(0x17c)][_0x190bb7(0x2b3)][_0x190bb7(0x36d)](_0x484951))return!![];if(this[_0x190bb7(0x17c)][_0x190bb7(0x161)][_0x190bb7(0x36d)](_0x50fb34))return!![];return![];},Game_Map['prototype'][_0x3124f3(0x3b5)]=function(){const _0x21335c=_0x3124f3;this['initRegionTerrainTagSmartJump'](),this[_0x21335c(0x2e6)](),this[_0x21335c(0x31d)]();},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x348)]=function(){const _0x2b4f7b=_0x3124f3,_0x5f3980=VisuMZ[_0x2b4f7b(0x246)][_0x2b4f7b(0x162)][_0x2b4f7b(0x3f8)];this[_0x2b4f7b(0x3b7)]={'enabled':!![],'HeightBasedRegions':(_0x5f3980[_0x2b4f7b(0x1a2)]||[])[_0x2b4f7b(0x2ad)](),'NonLandableRegions':(_0x5f3980[_0x2b4f7b(0x2b3)]||[])[_0x2b4f7b(0x2ad)](),'NonLandableTerrainTags':(_0x5f3980[_0x2b4f7b(0x161)]||[])[_0x2b4f7b(0x2ad)](),'NonPassableRegions':(_0x5f3980[_0x2b4f7b(0x3d5)]||[])['clone'](),'NonPassableTerrainTags':(_0x5f3980[_0x2b4f7b(0x216)]||[])[_0x2b4f7b(0x2ad)]()};},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x2e6)]=function(){const _0x3034c6=_0x3124f3,_0x18b6bf=VisuMZ[_0x3034c6(0x246)]['RegExp'],_0x44b35c=$dataMap[_0x3034c6(0x24d)]||'';_0x44b35c[_0x3034c6(0x2a0)](_0x18b6bf[_0x3034c6(0x189)])&&(this[_0x3034c6(0x3b7)][_0x3034c6(0x369)]=![]);if(_0x44b35c[_0x3034c6(0x2a0)](_0x18b6bf[_0x3034c6(0x379)])){if(_0x3034c6(0x413)===_0x3034c6(0x178)){const _0x540df0=_0xd8291a(_0x1a2897['$1']);_0x540df0<_0x5ba064?(_0x4add20('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x3034c6(0x1c8)](_0x1f390e,_0x540df0,_0x425f52)),_0x5c5442[_0x3034c6(0x315)]()):_0x4984f6=_0x2842d9[_0x3034c6(0x331)](_0x540df0,_0x293aee);}else this[_0x3034c6(0x3b7)][_0x3034c6(0x3ec)]=Number(RegExp['$1'])['clamp'](0x0,0xff);}_0x44b35c[_0x3034c6(0x2a0)](_0x18b6bf[_0x3034c6(0x26b)])&&(this[_0x3034c6(0x3b7)]['HeightBasedRegions']=RegExp['$1'][_0x3034c6(0x166)](',')[_0x3034c6(0x32f)](_0x1a38e2=>(Number(_0x1a38e2)||0x0)[_0x3034c6(0x334)](0x0,0xff)),this[_0x3034c6(0x3b7)][_0x3034c6(0x1a2)][_0x3034c6(0x1da)]()),_0x44b35c[_0x3034c6(0x2a0)](_0x18b6bf[_0x3034c6(0x263)])&&(this['_smartJump']['NonLandableRegions']=RegExp['$1']['split'](',')['map'](_0x1c8fdf=>(Number(_0x1c8fdf)||0x0)['clamp'](0x0,0xff))),_0x44b35c[_0x3034c6(0x2a0)](_0x18b6bf[_0x3034c6(0x243)])&&(this[_0x3034c6(0x3b7)][_0x3034c6(0x3d5)]=RegExp['$1'][_0x3034c6(0x166)](',')[_0x3034c6(0x32f)](_0x236fa7=>(Number(_0x236fa7)||0x0)['clamp'](0x0,0xff)));},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x31d)]=function(){const _0x1313c5=_0x3124f3,_0x29ac7c=VisuMZ[_0x1313c5(0x246)][_0x1313c5(0x3e1)];if(!this[_0x1313c5(0x3f6)]())return;const _0xf01e51=this[_0x1313c5(0x3f6)]()['note']||'';if(_0xf01e51[_0x1313c5(0x2a0)](_0x29ac7c[_0x1313c5(0x199)])){if(_0x1313c5(0x24b)!==_0x1313c5(0x151))this['_smartJump']['NonLandableTerrainTags']=RegExp['$1']['split'](',')[_0x1313c5(0x32f)](_0x4398c3=>(Number(_0x4398c3)||0x0)[_0x1313c5(0x334)](0x0,0x7));else return this['smartRushMotionTrailData']();}_0xf01e51[_0x1313c5(0x2a0)](_0x29ac7c[_0x1313c5(0x1f1)])&&(_0x1313c5(0x418)===_0x1313c5(0x40f)?_0x1920ec[_0x4569bd]=_0x3572f9[_0x304f3a]:this[_0x1313c5(0x3b7)][_0x1313c5(0x216)]=RegExp['$1']['split'](',')[_0x1313c5(0x32f)](_0x3e6035=>(Number(_0x3e6035)||0x0)[_0x1313c5(0x334)](0x0,0x7)));},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x16f)]=function(){const _0x3b84cb=_0x3124f3;if(this[_0x3b84cb(0x3b7)]===undefined)this['setupRegionTerrainTagSmartJump']();return this[_0x3b84cb(0x3b7)][_0x3b84cb(0x369)];},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x147)]=function(_0x34c392,_0x3f5f89){const _0x276131=_0x3124f3;if(this['_smartJump']===undefined)this['setupRegionTerrainTagSmartJump']();const _0x4fa906=this[_0x276131(0x38b)](_0x34c392,_0x3f5f89);return this[_0x276131(0x349)](_0x4fa906);;},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x3ee)]=function(_0x18b3e1){const _0x3e01be=_0x3124f3;if(this[_0x3e01be(0x3b7)]===undefined)this[_0x3e01be(0x3b5)]();const _0x2eeabc=this[_0x3e01be(0x3b7)][_0x3e01be(0x1a2)][_0x3e01be(0x16e)](_0x18b3e1);return _0x2eeabc===0x0;},Game_Map[_0x3124f3(0x2a7)]['isHeightBasedRegion']=function(_0x4c43cb){const _0x3d2d99=_0x3124f3;if(this['_smartJump']===undefined)this[_0x3d2d99(0x3b5)]();return this[_0x3d2d99(0x3b7)]['HeightBasedRegions']['includes'](_0x4c43cb);},Game_Map[_0x3124f3(0x2a7)][_0x3124f3(0x2e5)]=function(_0x302180,_0x5cec2d,_0x2c8e4f){const _0x1a2e54=_0x3124f3,_0xb10997=$gamePlayer['regionId'](),_0xeb5a97=this['regionId'](_0x302180,_0x5cec2d);if(this[_0x1a2e54(0x349)](_0xb10997)){if(_0x1a2e54(0x34b)!=='qmezG'){this[_0x1a2e54(0x20b)]=this[_0x1a2e54(0x3d8)][_0x1a2e54(0x20b)];const _0x3a24e8=this[_0x1a2e54(0x3d8)][_0x1a2e54(0x302)];this[_0x1a2e54(0x3d8)][_0x1a2e54(0x302)]=0x0,this[_0x1a2e54(0x3d8)][_0x1a2e54(0x1b6)](),this[_0x1a2e54(0x1f2)]=_0x21d169[_0x1a2e54(0x231)](_0x17bd55[_0x1a2e54(0x144)](this['_baseSprite'][_0x1a2e54(0x1f2)])),this[_0x1a2e54(0x3d8)]['_bushDepth']=_0x3a24e8,this['_baseSprite'][_0x1a2e54(0x1b6)](),this[_0x1a2e54(0x14a)]();}else{const _0x38f22c=$gamePlayer[_0x1a2e54(0x41b)]();if(this[_0x1a2e54(0x3ee)](_0xb10997)&&this[_0x1a2e54(0x3ee)](_0xeb5a97)){if('lVkll'!==_0x1a2e54(0x42e)){const _0x254ba7=_0x412ca6['MovementEffects'][_0x1a2e54(0x2a4)][_0x1a2e54(0x19a)](this);for(const _0x794890 of _0x2dd1b3['MovementEffects'][_0x1a2e54(0x1a7)]){_0x254ba7[_0x794890]=this[_0x794890];}return _0x254ba7;}else return!![];}if(_0x38f22c!==0x2&&this[_0x1a2e54(0x3ee)](_0xeb5a97)){if('wNGIA'===_0x1a2e54(0x218)){if(this['hasStepAnime']()&&!this[_0x1a2e54(0x29d)]())return![];if(this[_0x1a2e54(0x268)]())return![];if(this[_0x1a2e54(0x427)]())return![];const _0x53bc7b=_0x1a2e54(0x1a0)['format'](this[_0x1a2e54(0x1fa)]),_0x5f3123='pattern%1'[_0x1a2e54(0x1c8)](this[_0x1a2e54(0x1b9)]()),_0x22aa38=this['footprintsData']();if(_0x22aa38[_0x53bc7b]){if(_0x22aa38[_0x53bc7b][_0x5f3123]){if(_0x22aa38[_0x53bc7b][_0x5f3123][_0x1a2e54(0x39b)]!=='')return!![];if(_0x22aa38[_0x53bc7b][_0x5f3123][_0x1a2e54(0x2f5)]>0x0)return!![];if(_0x22aa38[_0x53bc7b][_0x5f3123]['height']>0x0)return!![];}}return![];}else{if(_0x2c8e4f>=0x1)return![];}}if(this[_0x1a2e54(0x349)](_0xeb5a97))return _0xb10997>=_0xeb5a97;else{if(_0x1a2e54(0x339)!==_0x1a2e54(0x339))_0x373b6a[_0x1a2e54(0x246)][_0x1a2e54(0x1c4)][_0x1a2e54(0x19a)](this,_0x30c929,_0xe725d8);else{const _0x81732e=this[_0x1a2e54(0x3b7)][_0x1a2e54(0x1a2)][_0x1a2e54(0x16e)](_0xb10997);return _0x81732e<=0x0;}}}}if(this['isHeightBasedRegion'](_0xeb5a97)){const _0xf45e53=this[_0x1a2e54(0x3b7)][_0x1a2e54(0x1a2)][_0x1a2e54(0x16e)](_0xeb5a97);return _0xf45e53<=0x0;}else{if(_0x1a2e54(0x429)===_0x1a2e54(0x429))return!![];else this['updateScrollSmoothCamera'](_0x406cee,_0x3d7f90);}},Game_Map['prototype']['isTileSmartJumpNonPassable']=function(_0x5e4828,_0x590ac5){const _0x4830b6=_0x3124f3,_0x28ad69=this[_0x4830b6(0x38b)](_0x5e4828,_0x590ac5),_0x347376=this[_0x4830b6(0x285)](_0x5e4828,_0x590ac5);if(this[_0x4830b6(0x3b7)]===undefined)this[_0x4830b6(0x3b5)]();if(this['_smartJump']['NonPassableRegions'][_0x4830b6(0x36d)](_0x28ad69))return!![];if(this[_0x4830b6(0x3b7)]['NonPassableTerrainTags']['includes'](_0x347376))return!![];const _0xb7e043=this[_0x4830b6(0x40e)](_0x5e4828,_0x590ac5);for(const _0x45bae8 of _0xb7e043){if(_0x4830b6(0x381)!==_0x4830b6(0x381))return _0x137543[_0x4830b6(0x3e6)]();else{if(!_0x45bae8)continue;if(_0x45bae8[_0x4830b6(0x19f)])continue;if(_0x45bae8[_0x4830b6(0x20f)]())return!![];}}return![];},Game_Map['prototype'][_0x3124f3(0x20c)]=function(_0x57183f,_0xf09d03){const _0x17cc77=_0x3124f3,_0x3f5697=this[_0x17cc77(0x38b)](_0x57183f,_0xf09d03),_0x3b9bd5=this['terrainTag'](_0x57183f,_0xf09d03);if(this[_0x17cc77(0x3b7)]===undefined)this[_0x17cc77(0x3b5)]();if(this[_0x17cc77(0x3b7)]['NonLandableRegions']['includes'](_0x3f5697))return!![];if(this['_smartJump']['NonLandableTerrainTags'][_0x17cc77(0x36d)](_0x3b9bd5))return!![];const _0x2d88bf=this['eventsXy'](_0x57183f,_0xf09d03);for(const _0x315a69 of _0x2d88bf){if(!_0x315a69)continue;if(_0x315a69[_0x17cc77(0x19f)])continue;if(_0x315a69[_0x17cc77(0x259)]())return!![];}return![];},VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x384)]=Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x2b7)],Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x2b7)]=function(){const _0x2d5a4e=_0x3124f3;VisuMZ['MovementEffects'][_0x2d5a4e(0x384)][_0x2d5a4e(0x19a)](this),this[_0x2d5a4e(0x2a6)]();},VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x3a2)]=Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x2d8)],Game_CharacterBase['prototype'][_0x3124f3(0x2d8)]=function(){const _0x1569ab=_0x3124f3;VisuMZ[_0x1569ab(0x246)][_0x1569ab(0x3a2)][_0x1569ab(0x19a)](this);if(this[_0x1569ab(0x2e4)]())this[_0x1569ab(0x1d0)]();!this[_0x1569ab(0x25e)]()&&this['canMakeFootstepSounds']()&&this['playFootstepSound']();},VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x253)]=Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x2a9)],Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x2a9)]=function(){const _0x55c201=_0x3124f3;VisuMZ['MovementEffects'][_0x55c201(0x253)]['call'](this);if(this[_0x55c201(0x187)]>0x0)return;this['meetFootprintFrames']()&&this['canMakeFootprints']()&&(_0x55c201(0x343)!=='lTTmw'?this[_0x55c201(0x360)]():this['_smartJump']['NonPassableRegions']=_0x3e26ff['$1']['split'](',')[_0x55c201(0x32f)](_0x234544=>(_0x3974f4(_0x234544)||0x0)[_0x55c201(0x334)](0x0,0xff))),this[_0x55c201(0x183)]()&&this['canMakeFootstepSounds']()&&(_0x55c201(0x31e)!=='oGVNr'?(this[_0x55c201(0x3b7)][_0x55c201(0x1a2)]=_0x57ef41['$1'][_0x55c201(0x166)](',')[_0x55c201(0x32f)](_0x31d1fd=>(_0x30a9bc(_0x31d1fd)||0x0)[_0x55c201(0x334)](0x0,0xff)),this[_0x55c201(0x3b7)]['HeightBasedRegions'][_0x55c201(0x1da)]()):this[_0x55c201(0x380)]());},Game_CharacterBase['prototype'][_0x3124f3(0x2e4)]=function(){const _0xbc3c97=_0x3124f3;if(this['constructor']===Game_Follower&&!this['isVisible']())return![];if(this[_0xbc3c97(0x30c)]===Game_Player&&this['isInVehicle']())return![];if(!this[_0xbc3c97(0x211)]())return![];if(this['isTransparent']())return![];return $gameMap[_0xbc3c97(0x18e)]();},Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x1d0)]=function(){const _0x129a6d=_0x3124f3,_0x790b85=SceneManager[_0x129a6d(0x424)][_0x129a6d(0x3a6)];if(_0x790b85)_0x790b85['createDustCloudForTarget'](this);},Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x25e)]=function(){const _0x326146=_0x3124f3;return VisuMZ['MovementEffects'][_0x326146(0x162)]['Footsteps'][_0x326146(0x41f)];},VisuMZ['MovementEffects'][_0x3124f3(0x402)]=Game_CharacterBase['prototype'][_0x3124f3(0x2ff)],Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x2ff)]=function(){const _0x40c5e7=_0x3124f3;let _0x2da5a4=VisuMZ['MovementEffects'][_0x40c5e7(0x402)][_0x40c5e7(0x19a)](this);if(this[_0x40c5e7(0x29d)]()){const _0x1bc644=VisuMZ[_0x40c5e7(0x246)][_0x40c5e7(0x162)][_0x40c5e7(0x37b)]['FrameWalkModifier']??1.5;_0x2da5a4=Math[_0x40c5e7(0x157)](_0x2da5a4/Math[_0x40c5e7(0x331)](_0x1bc644,0x1));if(this[_0x40c5e7(0x211)]()){if('UyytS'===_0x40c5e7(0x332)){const _0x111cdd=VisuMZ['MovementEffects']['Settings']['Footsteps'][_0x40c5e7(0x149)]??1.5;_0x2da5a4=Math[_0x40c5e7(0x157)](_0x2da5a4/Math['max'](_0x111cdd,0x1));}else _0x26c543['requestAnimation']([_0x4a9d8c],_0xa36bc5);}}return _0x2da5a4;},Game_CharacterBase['prototype'][_0x3124f3(0x183)]=function(){const _0x14b59a=_0x3124f3;if(!this[_0x14b59a(0x25e)]())return![];if(this[_0x14b59a(0x24e)]()&&!this[_0x14b59a(0x29d)]())return![];if(this['isJumping']())return![];if(this['isOnLadder']())return![];const _0x20de19=this['footstepsData']()['soundFrames']??[];if(_0x20de19[_0x14b59a(0x38a)]<=0x0)return!![];return _0x20de19['includes'](this['pattern']());},Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x27c)]=function(){const _0x20a146=_0x3124f3;if(this['constructor']===Game_Follower&&!this[_0x20a146(0x221)]())return![];if(this[_0x20a146(0x30c)]===Game_Player&&this['isInVehicle']())return![];if(this[_0x20a146(0x30c)]===Game_Follower&&$gamePlayer['isInVehicle']())return![];if(this['isTransparent']())return![];return this[_0x20a146(0x37a)]()[_0x20a146(0x369)]&&$gameMap[_0x20a146(0x27c)]();},Game_Vehicle[_0x3124f3(0x2a7)][_0x3124f3(0x27c)]=function(){return![];},Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x380)]=function(){const _0x408015=_0x3124f3;SoundManager[_0x408015(0x3b2)](this);},Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x37a)]=function(){return{'enabled':!![],'volumeRate':0x1,'pitchRate':0x1};},Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x22b)]=function(){const _0x4e7ed7=_0x3124f3;if(this[_0x4e7ed7(0x24e)]()&&!this['isMoving']())return![];if(this['isJumping']())return![];if(this[_0x4e7ed7(0x427)]())return![];const _0x18c912=_0x4e7ed7(0x1a0)[_0x4e7ed7(0x1c8)](this['_direction']),_0x48d462=_0x4e7ed7(0x1e1)[_0x4e7ed7(0x1c8)](this[_0x4e7ed7(0x1b9)]()),_0x23d67e=this[_0x4e7ed7(0x2bb)]();if(_0x23d67e[_0x18c912]){if(_0x23d67e[_0x18c912][_0x48d462]){if(_0x4e7ed7(0x25d)===_0x4e7ed7(0x26f)){const _0x5ced0d=_0x158914[_0x4e7ed7(0x36f)](this);_0x5ced0d&&_0x5ced0d[_0x4e7ed7(0x3f2)]();}else{if(_0x23d67e[_0x18c912][_0x48d462][_0x4e7ed7(0x39b)]!=='')return!![];if(_0x23d67e[_0x18c912][_0x48d462]['width']>0x0)return!![];if(_0x23d67e[_0x18c912][_0x48d462][_0x4e7ed7(0x32d)]>0x0)return!![];}}}return![];},Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x271)]=function(){const _0x2f9933=_0x3124f3;if(this[_0x2f9933(0x30c)]===Game_Follower&&!this[_0x2f9933(0x221)]())return![];if(this[_0x2f9933(0x30c)]===Game_Player&&this[_0x2f9933(0x1ec)]())return![];if(this[_0x2f9933(0x224)]())return![];const _0x131584=this['x'],_0x23adbb=this['y'];return this[_0x2f9933(0x2bb)]()[_0x2f9933(0x369)]&&$gameMap[_0x2f9933(0x271)](_0x131584,_0x23adbb);},Game_CharacterBase[_0x3124f3(0x2a7)]['footprintsData']=function(){const _0x42f211=_0x3124f3,_0x212148=VisuMZ[_0x42f211(0x246)][_0x42f211(0x162)][_0x42f211(0x172)];return{'enabled':!![],'dir1':_0x212148[_0x42f211(0x234)],'dir2':_0x212148['dir2'],'dir3':_0x212148['dir3'],'dir4':_0x212148[_0x42f211(0x23a)],'dir6':_0x212148[_0x42f211(0x3f9)],'dir7':_0x212148[_0x42f211(0x1b0)],'dir8':_0x212148['dir8'],'dir9':_0x212148[_0x42f211(0x158)]};},Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x360)]=function(){const _0x5684e4=_0x3124f3,_0x493a15=SceneManager[_0x5684e4(0x424)][_0x5684e4(0x3a6)];if(_0x493a15)_0x493a15[_0x5684e4(0x1b3)](this);},Game_CharacterBase[_0x3124f3(0x2a7)]['initMovementEffectsMotionTrails']=function(){const _0x56556d=_0x3124f3;this[_0x56556d(0x341)]={'enabled':![],'delay':0x4,'duration':0x1e,'hue':0x0,'opacityStart':0x80,'tone':[0x0,0x0,0x0,0x0]};},Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x1b2)]=function(){const _0x2ae4b1=_0x3124f3;if(this[_0x2ae4b1(0x341)]===undefined)this[_0x2ae4b1(0x2a6)]();return this[_0x2ae4b1(0x341)];},Game_CharacterBase['prototype']['enableMotionTrails']=function(_0x36ae99,_0x54dbd1){const _0x438a45=_0x3124f3;this[_0x438a45(0x1b2)]()[_0x438a45(0x369)]=_0x36ae99;if(!SceneManager[_0x438a45(0x15b)]())return;if(!_0x36ae99)return;if(!_0x54dbd1)return;const _0x49db38=SceneManager[_0x438a45(0x424)][_0x438a45(0x3a6)];if(_0x49db38){if(_0x438a45(0x289)!==_0x438a45(0x289))return!![];else{const _0x5273e3=_0x49db38[_0x438a45(0x36f)](this);if(_0x5273e3){if(_0x438a45(0x342)!==_0x438a45(0x181))_0x5273e3[_0x438a45(0x3f2)]();else return'rgba(0,0,0,0)';}}}},Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x1d9)]=function(_0x13d5c3,_0x75ba05){const _0x5450e9=_0x3124f3,_0x1af1cf=this[_0x5450e9(0x1b2)]()[_0x5450e9(0x369)];this[_0x5450e9(0x341)]=JsonEx['makeDeepCopy'](_0x13d5c3);if(_0x75ba05)return;this[_0x5450e9(0x341)]['enabled']=_0x1af1cf;},VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x32e)]=Game_Player[_0x3124f3(0x2a7)]['moveByInput'],Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x2bd)]=function(){const _0x30b135=_0x3124f3;if(this[_0x30b135(0x26a)]())this[_0x30b135(0x1b7)]();else this['isSmartJumping']()?'eLUtX'!==_0x30b135(0x373)?this[_0x30b135(0x260)]():_0x3d31bf['startMotionBlurEffect'](_0x3acf7d,_0x441421):(VisuMZ[_0x30b135(0x246)][_0x30b135(0x32e)][_0x30b135(0x19a)](this),this[_0x30b135(0x1d4)]());},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x1d4)]=function(){const _0x120307=_0x3124f3;this[_0x120307(0x20a)](),this[_0x120307(0x3aa)](),this[_0x120307(0x296)]();},VisuMZ[_0x3124f3(0x246)]['Game_Player_updateScroll']=Game_Player['prototype']['updateScroll'],Game_Player['prototype'][_0x3124f3(0x197)]=function(_0x346fba,_0x2ba15c){const _0x21b3dd=_0x3124f3;this[_0x21b3dd(0x38f)]()?this[_0x21b3dd(0x426)](_0x346fba,_0x2ba15c):VisuMZ[_0x21b3dd(0x246)][_0x21b3dd(0x1c4)]['call'](this,_0x346fba,_0x2ba15c);},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x38f)]=function(){const _0xeba3a0=_0x3124f3;if(!$gameMap[_0xeba3a0(0x1ed)]())return![];if($gameMap[_0xeba3a0(0x3bf)]()){if(_0xeba3a0(0x319)!==_0xeba3a0(0x288))return this[_0xeba3a0(0x3e8)]=!![],this['_lastSmoothScrollX']=this['_realX'],this['_lastSmoothScrollY']=this['_realY'],![];else{if(!_0x4fc147['isSmartBlinkEnabled']())return![];if(this[_0xeba3a0(0x2bf)])return![];if(this[_0xeba3a0(0x3a3)]())return![];if(this[_0xeba3a0(0x1f7)]())return![];if(this['isTransparent']())return![];if(this[_0xeba3a0(0x27d)]())return![];return _0x552ca9>=0x1;}}if(this[_0xeba3a0(0x3e8)]){if(_0xeba3a0(0x36b)!==_0xeba3a0(0x36b))return!![];else{if(this[_0xeba3a0(0x235)]!==this[_0xeba3a0(0x3dc)]||this[_0xeba3a0(0x245)]!==this[_0xeba3a0(0x376)]){if(_0xeba3a0(0x1d5)!==_0xeba3a0(0x1d5)){if(!_0x25762a[_0xeba3a0(0x15b)]())return;const _0x1ef58f=_0x28279c['getLastPluginCommandInterpreter']();_0x1ef58f[_0xeba3a0(0x2ab)](_0xeba3a0(0x328));}else this[_0xeba3a0(0x3e8)]=![],this[_0xeba3a0(0x235)]=this['_realX'],this[_0xeba3a0(0x245)]=this[_0xeba3a0(0x376)];}return!this[_0xeba3a0(0x3e8)];}}return!![];},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x426)]=function(_0x10e801,_0x23257e){const _0x38a058=_0x3124f3,_0x4afe19=this['centerX'](),_0x31557e=this[_0x38a058(0x250)](),_0x2347d8=this[_0x38a058(0x32b)](),_0x55bfcd=this['scrolledY'](),_0x3c5105=this[_0x38a058(0x211)]()||this[_0x38a058(0x312)](),_0x2bd990=$gameSystem[_0x38a058(0x364)](![],_0x3c5105),_0x5f0860=$gameSystem[_0x38a058(0x364)](!![],_0x3c5105),_0x4473af=VisuMZ[_0x38a058(0x246)][_0x38a058(0x35c)]();if(_0x2347d8<_0x4afe19){const _0x5cc98b=_0x4afe19-_0x2347d8,_0x1cead6=_0x2bd990*_0x4473af,_0x389dc6=_0x5cc98b/(_0x1cead6||0.01);$gameMap[_0x38a058(0x2da)](_0x389dc6);}if(_0x2347d8>_0x4afe19){const _0x15b44b=_0x2347d8-_0x4afe19,_0x22d87c=_0x2bd990*_0x4473af,_0x24d9d8=_0x15b44b/(_0x22d87c||0.01);$gameMap['scrollRight'](_0x24d9d8);}if(_0x55bfcd>_0x31557e){const _0xda5c63=_0x55bfcd-_0x31557e,_0x473e18=_0x5f0860*_0x4473af,_0x3cef43=_0xda5c63/(_0x473e18||0.01);$gameMap['scrollDown'](_0x3cef43);}if(_0x55bfcd<_0x31557e){const _0x218e51=_0x31557e-_0x55bfcd,_0x16a1e1=_0x5f0860*_0x4473af,_0x2a06e5=_0x218e51/(_0x16a1e1||0.01);$gameMap[_0x38a058(0x2c4)](_0x2a06e5);}},VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x35c)]=function(){return 1.0017453;},VisuMZ['MovementEffects']['Game_CharacterBase_updateAnimationCount']=Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x190)],Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x190)]=function(){const _0x44b889=_0x3124f3;VisuMZ[_0x44b889(0x246)][_0x44b889(0x2ec)]['call'](this);if(this['_footstepCooldownDuration']){if(_0x44b889(0x248)===_0x44b889(0x274))return!![];else this['_footstepCooldownDuration']--;}},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x380)]=function(){const _0x3eb1a9=_0x3124f3;Game_Character[_0x3eb1a9(0x2a7)]['playFootstepSound']['call'](this),this[_0x3eb1a9(0x215)]=0x3c;},Game_Player['prototype'][_0x3124f3(0x37a)]=function(){const _0x2ef823=_0x3124f3;return $gameParty[_0x2ef823(0x1bc)]()?$gameParty[_0x2ef823(0x1bc)]()['footstepsData']():Game_Character['prototype']['footstepsData']['call'](this);},Game_Player[_0x3124f3(0x2a7)]['footprintsData']=function(){const _0x16b7d5=_0x3124f3;return $gameParty[_0x16b7d5(0x1bc)]()?$gameParty[_0x16b7d5(0x1bc)]()[_0x16b7d5(0x2bb)]():Game_Character[_0x16b7d5(0x2a7)][_0x16b7d5(0x2bb)][_0x16b7d5(0x19a)](this);},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x3a3)]=function(){return this['isSmartRushing']()||this['isSmartJumping']();},Game_Player[_0x3124f3(0x2a7)]['isSmartMoveNonViableState']=function(){const _0x39acd5=_0x3124f3;if(this['isJumping']())return!![];if(this['isInVehicle']())return!![];if(this[_0x39acd5(0x427)]())return!![];return![];},Game_Player['prototype'][_0x3124f3(0x393)]=function(_0x114e43){const _0x1f7ab3=_0x3124f3;if(!_0x114e43)return;if(_0x114e43[_0x1f7ab3(0x2eb)])return;const _0x30f5da=this[_0x1f7ab3(0x1ee)](_0x114e43);this[_0x1f7ab3(0x281)](_0x30f5da);},Game_Player['prototype'][_0x3124f3(0x1ee)]=function(_0x4055b7){const _0x5abe10=_0x3124f3;if(!_0x4055b7)return this[_0x5abe10(0x41b)]();if(_0x4055b7[_0x5abe10(0x2eb)])return this[_0x5abe10(0x41b)]();const _0x1e38d4=this[_0x5abe10(0x276)](this['direction'](),_0x4055b7);return _0x1e38d4;},Game_Player[_0x3124f3(0x2a7)]['straightenDiagonal']=function(_0x2912b1,_0x1636ae){const _0x4eed30=_0x3124f3;if(!_0x1636ae)return _0x2912b1;if(_0x1636ae[_0x4eed30(0x2eb)])return _0x2912b1;if(_0x2912b1===0x1)return 0x4;if(_0x2912b1===0x3)return 0x6;if(_0x2912b1===0x7)return 0x4;if(_0x2912b1===0x9)return 0x6;return _0x2912b1;},Game_Player[_0x3124f3(0x40a)]=VisuMZ['MovementEffects'][_0x3124f3(0x162)][_0x3124f3(0x401)][_0x3124f3(0x2cb)]||0x0,Game_Player[_0x3124f3(0x1de)]=VisuMZ[_0x3124f3(0x246)]['Settings'][_0x3124f3(0x401)][_0x3124f3(0x2f0)]||0x1,Game_Player[_0x3124f3(0x33a)]=VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x162)][_0x3124f3(0x401)]['Enable']||![],Game_Player[_0x3124f3(0x1b1)]=VisuMZ[_0x3124f3(0x246)]['Settings'][_0x3124f3(0x401)]['ShakePowerRate']||0x1,Game_Player['SMART_RUSH_SHAKE_SPEED_RATE']=VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x162)][_0x3124f3(0x401)][_0x3124f3(0x21d)]||0x1,Game_Player['SMART_RUSH_SHAKE_DURATION']=VisuMZ['MovementEffects'][_0x3124f3(0x162)][_0x3124f3(0x401)]['ShakeDuration']||0x1,Game_Player['prototype']['smartRush']=function(_0x29423e,_0x4c996c,_0x25d818,_0x355bed,_0x408e8c){const _0x5cd220=_0x3124f3;if(!this[_0x5cd220(0x236)]())return![];const _0x5236db=VisuMZ[_0x5cd220(0x246)]['Settings']['SmartRush'];return this[_0x5cd220(0x393)](_0x5236db),this[_0x5cd220(0x2e3)]=_0x29423e,this['_smartRushCooldown']=_0x4c996c||0x1,this[_0x5cd220(0x403)]=(_0x25d818||[])[_0x5cd220(0x2ad)](),this[_0x5cd220(0x422)]=_0x355bed||1.5,this['_smartRushMotionTrailData']=JsonEx[_0x5cd220(0x209)](_0x408e8c),this[_0x5cd220(0x2a1)](!![]),!![];},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x236)]=function(){const _0x3bd2c5=_0x3124f3;if(!$gameMap[_0x3bd2c5(0x41a)]())return![];if(this[_0x3bd2c5(0x404)])return![];if(this['isSmartMoving']())return![];if(this[_0x3bd2c5(0x1f7)]())return![];if(this[_0x3bd2c5(0x224)]())return![];if(this[_0x3bd2c5(0x27d)]())return![];const _0x50306d=VisuMZ[_0x3bd2c5(0x246)][_0x3bd2c5(0x162)]['SmartRush'],_0x1be461=this[_0x3bd2c5(0x1ee)](_0x50306d);return this['canPass'](this['x'],this['y'],_0x1be461);},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x26a)]=function(){const _0x120217=_0x3124f3;return this[_0x120217(0x2e3)]!==undefined&&this[_0x120217(0x2e3)]>0x0;},VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x257)]=Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x211)],Game_Player['prototype'][_0x3124f3(0x211)]=function(){const _0x3d2fad=_0x3124f3;if(this['isSmartRushing']())return!![];return VisuMZ[_0x3d2fad(0x246)][_0x3d2fad(0x257)][_0x3d2fad(0x19a)](this);},VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x2c1)]=Game_CharacterBase['prototype'][_0x3124f3(0x31a)],Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x31a)]=function(){const _0x5ac4e7=_0x3124f3;if(!this['isMoving']())return VisuMZ[_0x5ac4e7(0x246)][_0x5ac4e7(0x2c1)][_0x5ac4e7(0x19a)](this);let _0x506974=VisuMZ[_0x5ac4e7(0x246)][_0x5ac4e7(0x2c1)]['call'](this);return _0x506974+=$gameSystem[_0x5ac4e7(0x143)](this[_0x5ac4e7(0x1fa)])*0x1,this===$gamePlayer&&this[_0x5ac4e7(0x26a)]()&&(_0x506974*=this[_0x5ac4e7(0x422)]||1.5),Math['max'](0x1,_0x506974);},Game_Player['prototype'][_0x3124f3(0x1b7)]=function(){const _0x52b68c=_0x3124f3;if(this[_0x52b68c(0x29d)]())return;if(this['isJumping']())return;this[_0x52b68c(0x2b5)](this[_0x52b68c(0x41b)]()),this[_0x52b68c(0x25b)]()?'whDza'==='whDza'?(this[_0x52b68c(0x2e3)]=this['_smartRushMode']||0x1,this[_0x52b68c(0x2e3)]--):this['setupMovementEffectsVariables']():_0x52b68c(0x1ae)!==_0x52b68c(0x313)?(this[_0x52b68c(0x420)]()&&($gameScreen[_0x52b68c(0x35a)](this[_0x52b68c(0x2e3)]),this[_0x52b68c(0x3c6)]()),this[_0x52b68c(0x2e3)]=0x0):this[_0x52b68c(0x3a8)][_0x52b68c(0x1c6)]=_0x522c8f(_0x22251a['$1'])['split'](',')[_0x52b68c(0x32f)](_0x55b884=>_0x4282e9(_0x55b884)||0x0),this['isOnLadder']()&&(_0x52b68c(0x180)!==_0x52b68c(0x1fb)?this[_0x52b68c(0x2e3)]=0x0:_0x4a2c91[_0x52b68c(0x424)][_0x52b68c(0x297)](_0x42b203)),this['_smartRushMode']<=0x0&&setTimeout(this[_0x52b68c(0x2a1)]['bind'](this,![]),0x32);},Game_Player[_0x3124f3(0x2a7)]['endSmartRush']=function(){const _0x7f7e58=_0x3124f3;this[_0x7f7e58(0x2e3)]=0x0,setTimeout(this[_0x7f7e58(0x2a1)][_0x7f7e58(0x230)](this,![]),0x32);},Game_Screen[_0x3124f3(0x2a7)]['startSmartRushCrashShake']=function(_0x92fc71){const _0x177990=_0x3124f3,_0x2444a3=(_0x92fc71*Game_Player[_0x177990(0x1b1)])[_0x177990(0x334)](0x1,0x9),_0x5dbe2f=(_0x92fc71*Game_Player[_0x177990(0x28d)])['clamp'](0x1,0x9);this['startShake'](_0x2444a3,_0x5dbe2f,Game_Player[_0x177990(0x3bb)]);},Game_Player['prototype']['startSmartRushCrashWalkBack']=function(){const _0x6f58dc=_0x3124f3,_0x2c206f=this[_0x6f58dc(0x41b)](),_0x5cc1ac=((this[_0x6f58dc(0x422)]-0x1)*0x2)['clamp'](0.25,0.85),_0x49b8c9=((this['_smartRushSpeedRate']-0x1)*1.5)[_0x6f58dc(0x334)](0.15,0.3);if([0x1,0x4,0x7][_0x6f58dc(0x36d)](_0x2c206f))this[_0x6f58dc(0x3dc)]-=_0x5cc1ac;if([0x3,0x6,0x9][_0x6f58dc(0x36d)](_0x2c206f))this[_0x6f58dc(0x3dc)]+=_0x5cc1ac;if([0x7,0x8,0x9][_0x6f58dc(0x36d)](_0x2c206f))this[_0x6f58dc(0x376)]-=_0x5cc1ac;if([0x1,0x2,0x3][_0x6f58dc(0x36d)](_0x2c206f))this['_realY']+=_0x49b8c9;},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x420)]=function(){const _0x17072d=_0x3124f3;if(!Game_Player[_0x17072d(0x33a)])return![];const _0x25e03a=this[_0x17072d(0x41b)](),_0x4363bc=this['x'],_0x2d2957=this['y'];return $gameMap['isSmartRushCrashShakeTile'](_0x4363bc,_0x2d2957,_0x25e03a);},Game_Player[_0x3124f3(0x2a7)]['updateSmartRushCooldown']=function(){const _0x79e8f2=_0x3124f3;if(this[_0x79e8f2(0x404)]){if(_0x79e8f2(0x2cf)!==_0x79e8f2(0x2cf)){let _0x135d30='';if(/^#([A-Fa-f0-9]{3}){1,2}$/[_0x79e8f2(0x2c0)](_0x2b3e08)){_0x135d30=_0x57fad2[_0x79e8f2(0x1cb)](0x1)[_0x79e8f2(0x166)]('');_0x135d30[_0x79e8f2(0x38a)]===0x3&&(_0x135d30=[_0x135d30[0x0],_0x135d30[0x0],_0x135d30[0x1],_0x135d30[0x1],_0x135d30[0x2],_0x135d30[0x2]]);while(_0x135d30[_0x79e8f2(0x38a)]>0x6)_0x135d30[_0x79e8f2(0x321)]();return _0x135d30='0x'+_0x135d30[_0x79e8f2(0x31c)](''),'rgba('+[(_0x135d30>>0x10&0xff)[_0x79e8f2(0x334)](0x0,0xff),(_0x135d30>>0x8&0xff)[_0x79e8f2(0x334)](0x0,0xff),(_0x135d30&0xff)[_0x79e8f2(0x334)](0x0,0xff)][_0x79e8f2(0x31c)](',')+','+_0x5617b7['clamp'](0x0,0x1)+')';}else return _0x79e8f2(0x405);}else this[_0x79e8f2(0x404)]--;}},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x2a1)]=function(_0x26deab){const _0x243bcb=_0x3124f3;this[_0x243bcb(0x403)]=this['_smartRushSwitches']||[];for(const _0x4fa9ba of this[_0x243bcb(0x403)]){$gameSwitches[_0x243bcb(0x1eb)](_0x4fa9ba,_0x26deab);}!_0x26deab&&(this[_0x243bcb(0x2e3)]=0x0);},VisuMZ[_0x3124f3(0x246)]['Game_Player_reserveTransfer']=Game_Player[_0x3124f3(0x2a7)]['reserveTransfer'],Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x254)]=function(_0x1df41d,_0x209afe,_0x3a87ca,_0x48b233,_0x2e779d){const _0x59dc54=_0x3124f3;VisuMZ[_0x59dc54(0x246)][_0x59dc54(0x353)][_0x59dc54(0x19a)](this,_0x1df41d,_0x209afe,_0x3a87ca,_0x48b233,_0x2e779d),this[_0x59dc54(0x14e)]();},Game_Player['SMART_BLINK_FILTER_DURATION']=VisuMZ[_0x3124f3(0x246)]['Settings']['SmartBlink'][_0x3124f3(0x2f0)],Game_Player[_0x3124f3(0x2c7)]=VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x162)][_0x3124f3(0x333)][_0x3124f3(0x2cb)],Game_Player['SMART_BLINK_FLOOR_TO_CEILING']=VisuMZ[_0x3124f3(0x246)]['Settings'][_0x3124f3(0x333)][_0x3124f3(0x3db)]??![],Game_Player[_0x3124f3(0x2a7)]['smartBlink']=function(_0x3938b7,_0x3a5c31,_0x445fc1,_0x2a3fbb){const _0x460399=_0x3124f3;_0x445fc1=_0x445fc1||{'NonLandableRegions':[],'NonLandableTerrainTags':[],'NonPassableRegions':[],'NonPassableTerrainTags':[]},this[_0x460399(0x386)]=JsonEx[_0x460399(0x209)](_0x445fc1),_0x3938b7=this['measureSmartBlinkDistance'](_0x3938b7||0x1);if(!this[_0x460399(0x3a7)](_0x3938b7))return![];const _0x84e0ec=VisuMZ['MovementEffects']['Settings']['SmartBlink'];return this[_0x460399(0x393)](_0x84e0ec),this[_0x460399(0x385)]=_0x3938b7||0x1,this[_0x460399(0x2bf)]=_0x3a5c31||0x1,this[_0x460399(0x3f4)]=JsonEx['makeDeepCopy'](_0x2a3fbb),this['smartBlinkRelocate'](_0x3938b7),!![];},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x202)]=function(_0x5dd305){const _0x350561=_0x3124f3,_0xcb4778=this['_smartBlinkRestrictions'],_0x43d0d4=this['direction'](),_0xfcf56d=VisuMZ[_0x350561(0x246)]['Settings'][_0x350561(0x333)];this[_0x350561(0x393)](_0xfcf56d);const _0x2f9fac=this[_0x350561(0x41b)]();let _0x6cd134=0x0,_0x149d8b=this['x'],_0x5dbf8b=this['y'],_0x2c66ff=0x0,_0x179bb0=0x0;if([0x1,0x4,0x7][_0x350561(0x36d)](_0x2f9fac))_0x2c66ff=-0x1;if([0x3,0x6,0x9][_0x350561(0x36d)](_0x2f9fac))_0x2c66ff=0x1;if([0x7,0x8,0x9][_0x350561(0x36d)](_0x2f9fac))_0x179bb0=-0x1;if([0x1,0x2,0x3][_0x350561(0x36d)](_0x2f9fac))_0x179bb0=0x1;for(let _0x123fda=0x1;_0x123fda<=_0x5dd305;_0x123fda++){if('fKqRc'!==_0x350561(0x186)){_0x149d8b+=_0x2c66ff,_0x5dbf8b+=_0x179bb0;if(this[_0x350561(0x1fd)](_0x149d8b,_0x5dbf8b))break;if(this[_0x350561(0x28f)](_0x149d8b,_0x5dbf8b)){if(_0x350561(0x370)===_0x350561(0x3e3))for(const _0x1e6c1d of _0x24c4ea){_0x1e6c1d[_0x350561(0x2a0)](_0x7ca1f[_0x350561(0x16a)]);const _0x4b60c7=_0x288499(_0x2579f8['$1'])['clamp'](0x0,0xff),_0x488ac6=_0x106ef6['max'](0x1,_0x14e9a6(_0x503076['$2']));this[_0x350561(0x2b0)][_0x350561(0x2b2)]['terrainTags'][_0x4b60c7]=_0x488ac6;}else{_0x6cd134=_0x123fda;continue;}}const _0x52b5b0=$gameMap[_0x350561(0x38b)](_0x149d8b,_0x5dbf8b),_0x487956=$gameMap['terrainTag'](_0x149d8b,_0x5dbf8b);if(_0xcb4778['NonPassableRegions'][_0x350561(0x36d)](_0x52b5b0))break;if(_0xcb4778[_0x350561(0x216)][_0x350561(0x36d)](_0x487956))break;if($gameMap[_0x350561(0x29a)](_0x149d8b,_0x5dbf8b))break;if(_0xcb4778[_0x350561(0x2b3)]['includes'](_0x52b5b0))continue;if(_0xcb4778['NonLandableTerrainTags'][_0x350561(0x36d)](_0x487956))continue;if($gameMap[_0x350561(0x282)](_0x149d8b,_0x5dbf8b))continue;if(!$gameMap['isValid'](_0x149d8b,_0x5dbf8b))continue;if(this[_0x350561(0x383)](_0x149d8b,_0x5dbf8b))continue;if(!$gameMap['isPassableByAnyDirection'](_0x149d8b,_0x5dbf8b))continue;if(!Game_Player[_0x350561(0x3a9)]){if(!$gameMap[_0x350561(0x324)](this['x'],this['y'])&&$gameMap[_0x350561(0x324)](_0x149d8b,_0x5dbf8b))continue;}_0x6cd134=_0x123fda;}else this[_0x350561(0x170)]=_0x53a6c1[_0x350561(0x1de)],_0x341ea0=_0x246eb7[_0x350561(0x40a)];}return this[_0x350561(0x281)](_0x43d0d4),_0x6cd134;},Game_Player[_0x3124f3(0x2a7)]['isTileSmartBlinkBreakable']=function(_0xe1e592,_0xaf8e04){return![];},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x28f)]=function(_0x568d5a,_0x46ed59){return![];},Game_Player['prototype'][_0x3124f3(0x3a7)]=function(_0x25ea3f){const _0x584b03=_0x3124f3;if(!$gameMap[_0x584b03(0x3e5)]())return![];if(this[_0x584b03(0x2bf)])return![];if(this['isSmartMoving']())return![];if(this[_0x584b03(0x1f7)]())return![];if(this[_0x584b03(0x224)]())return![];if(this[_0x584b03(0x27d)]())return![];return _0x25ea3f>=0x1;},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x323)]=function(){const _0x545142=_0x3124f3,_0x17cd7b=this[_0x545142(0x385)],_0xe16cd9=this[_0x545142(0x41b)]();let _0x4ffd2d=this['x'],_0x2ed795=this['y'];if([0x1,0x4,0x7][_0x545142(0x36d)](_0xe16cd9))_0x4ffd2d+=-_0x17cd7b;if([0x3,0x6,0x9][_0x545142(0x36d)](_0xe16cd9))_0x4ffd2d+=_0x17cd7b;if([0x7,0x8,0x9][_0x545142(0x36d)](_0xe16cd9))_0x2ed795+=-_0x17cd7b;if([0x1,0x2,0x3][_0x545142(0x36d)](_0xe16cd9))_0x2ed795+=_0x17cd7b;this[_0x545142(0x2ed)]()[_0x545142(0x369)]&&this[_0x545142(0x249)]();Game_Character[_0x545142(0x2a7)]['locate'][_0x545142(0x19a)](this,_0x4ffd2d,_0x2ed795),this[_0x545142(0x372)][_0x545142(0x336)](_0x4ffd2d,_0x2ed795,this[_0x545142(0x41b)]());if(!$gameMap[_0x545142(0x1ed)]())this['center'](_0x4ffd2d,_0x2ed795);this[_0x545142(0x42f)](),setTimeout(this[_0x545142(0x3cf)]['bind'](this,[0x1,0x2]),0x32);},Game_Player[_0x3124f3(0x2a7)]['playSmartBlinkFilterEffect']=function(){const _0x15cf72=_0x3124f3,_0x39aaca=SceneManager[_0x15cf72(0x424)][_0x15cf72(0x3a6)];if(_0x39aaca){if(_0x15cf72(0x27f)===_0x15cf72(0x27f)){const _0x3ef6e9=this['followers']()[_0x15cf72(0x3ff)](),_0x11012b=[this][_0x15cf72(0x214)](_0x3ef6e9);for(const _0x56b7de of _0x11012b){const _0x473fc3=_0x39aaca['findTargetSprite'](_0x56b7de);if(_0x473fc3){const _0x1231de=Game_Player[_0x15cf72(0x239)],_0x3d299b=Game_Player[_0x15cf72(0x2c7)];_0x473fc3[_0x15cf72(0x23f)](_0x1231de,_0x3d299b);}}}else{const _0x2b850d=_0x47fcbd['MovementEffects'][_0x15cf72(0x162)][_0x15cf72(0x1c2)];this['_smoothCamera']={'enabled':_0x2b850d[_0x15cf72(0x152)],'horzWalk':_0x2b850d[_0x15cf72(0x2ca)]['clamp'](0x1,0x30),'vertWalk':_0x2b850d[_0x15cf72(0x1a9)][_0x15cf72(0x334)](0x1,0x30),'horzDash':_0x2b850d[_0x15cf72(0x35e)]['clamp'](0x1,0x30),'vertDash':_0x2b850d['VertDash'][_0x15cf72(0x334)](0x1,0x30)};}}},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x3aa)]=function(){const _0x1ca14d=_0x3124f3;this[_0x1ca14d(0x2bf)]&&this[_0x1ca14d(0x2bf)]--;},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x350)]=function(_0x1a30c6,_0x137b57,_0x59ecfc,_0x1809f2){const _0x376203=_0x3124f3;_0x59ecfc=_0x59ecfc||{'NonLandableRegions':[],'NonLandableTerrainTags':[],'NonPassableRegions':[],'NonPassableTerrainTags':[]},this[_0x376203(0x292)]=JsonEx[_0x376203(0x209)](_0x59ecfc);if(!this[_0x376203(0x1a8)]())return![];const _0x5a0ebf=VisuMZ[_0x376203(0x246)][_0x376203(0x162)]['SmartJump'];return this['straightenFacedDirection'](_0x5a0ebf),_0x1a30c6=this[_0x376203(0x351)](_0x1a30c6),this[_0x376203(0x2c6)]=!![],this[_0x376203(0x414)]=_0x137b57||0x1,this[_0x376203(0x1ff)]=JsonEx[_0x376203(0x209)](_0x1809f2),this[_0x376203(0x29c)](_0x1a30c6),!![];},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x1a8)]=function(){const _0x178117=_0x3124f3;if(!$gameMap[_0x178117(0x16f)]())return![];if(this[_0x178117(0x414)])return![];if(this[_0x178117(0x3a3)]())return![];if(this[_0x178117(0x1f7)]())return![];if(this[_0x178117(0x224)]())return![];if(this[_0x178117(0x27d)]())return![];return!![];},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x193)]=function(){return this['_smartJumpMode'];},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x351)]=function(_0x32bfe9){const _0x5288ef=_0x3124f3,_0x1d8c92=this[_0x5288ef(0x292)],_0x4f4247=this[_0x5288ef(0x41b)]();let _0x5b575e=0x0,_0x2e5b44=this['x'],_0x27d0a2=this['y'],_0x3c83eb=0x0,_0x5256fd=0x0;if([0x1,0x4,0x7][_0x5288ef(0x36d)](_0x4f4247))_0x3c83eb=-0x1;if([0x3,0x6,0x9][_0x5288ef(0x36d)](_0x4f4247))_0x3c83eb=0x1;if([0x7,0x8,0x9][_0x5288ef(0x36d)](_0x4f4247))_0x5256fd=-0x1;if([0x1,0x2,0x3][_0x5288ef(0x36d)](_0x4f4247))_0x5256fd=0x1;for(let _0x51baa6=0x1;_0x51baa6<=_0x32bfe9;_0x51baa6++){if(_0x5288ef(0x182)!==_0x5288ef(0x375)){_0x2e5b44+=_0x3c83eb,_0x27d0a2+=_0x5256fd;if(this['isTileSmartJumpBreakable'](_0x2e5b44,_0x27d0a2))break;if(this[_0x5288ef(0x3ce)](_0x2e5b44,_0x27d0a2)){_0x5b575e=_0x51baa6;continue;}if($gameMap[_0x5288ef(0x212)](_0x2e5b44,_0x27d0a2))break;const _0x571523=$gameMap['regionId'](_0x2e5b44,_0x27d0a2),_0xf1345e=$gameMap[_0x5288ef(0x285)](_0x2e5b44,_0x27d0a2);if(_0x1d8c92['NonPassableRegions']['includes'](_0x571523))break;if(_0x1d8c92[_0x5288ef(0x216)]['includes'](_0xf1345e))break;if($gameMap[_0x5288ef(0x1f5)](_0x2e5b44,_0x27d0a2))break;if(_0x1d8c92[_0x5288ef(0x2b3)][_0x5288ef(0x36d)](_0x571523))continue;if(_0x1d8c92['NonLandableTerrainTags'][_0x5288ef(0x36d)](_0xf1345e))continue;if($gameMap[_0x5288ef(0x20c)](_0x2e5b44,_0x27d0a2))continue;if(!$gameMap['isValid'](_0x2e5b44,_0x27d0a2))continue;if(this[_0x5288ef(0x383)](_0x2e5b44,_0x27d0a2))continue;if(!$gameMap['isPassableByAnyDirection'](_0x2e5b44,_0x27d0a2))continue;if(!$gameMap[_0x5288ef(0x2e5)](_0x2e5b44,_0x27d0a2,_0x5b575e))continue;_0x5b575e=_0x51baa6;}else{if(this[_0x5288ef(0x17d)]===_0x1bcef1)this[_0x5288ef(0x39a)]();this[_0x5288ef(0x17d)][_0x5288ef(0x369)]=_0xec67f3;}}return _0x5b575e;},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x3a5)]=function(_0x36953e,_0x3c78d7){const _0xce8a7f=_0x3124f3;if(!$gameMap[_0xce8a7f(0x324)](this['x'],this['y'])&&$gameMap[_0xce8a7f(0x324)](_0x36953e,_0x3c78d7)){if('jqsZn'===_0xce8a7f(0x272))_0x2c2da6['startMotionBlurEffect'](_0x2278da,_0x36b8a3);else return!![];}return![];},Game_Player['prototype'][_0x3124f3(0x3ce)]=function(_0x5105ee,_0x187e92){const _0x3d2aff=_0x3124f3;if(!$gameMap[_0x3d2aff(0x324)](this['x'],this['y'])&&$gameMap['isCeilingTile'](_0x5105ee,_0x187e92)){if(_0x3d2aff(0x431)!=='TwtJY')this[_0x3d2aff(0x3b7)][_0x3d2aff(0x2b3)]=_0x219604['$1'][_0x3d2aff(0x166)](',')['map'](_0x9cc5bb=>(_0x3d5049(_0x9cc5bb)||0x0)[_0x3d2aff(0x334)](0x0,0xff));else return![];}return![];},Game_Player['prototype']['startSmartJump']=function(_0x35f6ee){const _0x344cb7=_0x3124f3,_0x1dc332=this['direction']();let _0x165c92=0x0,_0xd1147=0x0;if([0x1,0x4,0x7][_0x344cb7(0x36d)](_0x1dc332))_0x165c92+=-_0x35f6ee;if([0x3,0x6,0x9][_0x344cb7(0x36d)](_0x1dc332))_0x165c92+=_0x35f6ee;if([0x7,0x8,0x9]['includes'](_0x1dc332))_0xd1147+=-_0x35f6ee;if([0x1,0x2,0x3][_0x344cb7(0x36d)](_0x1dc332))_0xd1147+=_0x35f6ee;_0xd1147=this[_0x344cb7(0x2d6)](_0x165c92,_0xd1147);const _0x1d1dc7=this[_0x344cb7(0x41b)]();this[_0x344cb7(0x191)](_0x165c92,_0xd1147),this[_0x344cb7(0x281)](_0x1d1dc7);},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x2d6)]=function(_0x368c52,_0x4ac545){const _0x196fc9=_0x3124f3;if(!$gameMap[_0x196fc9(0x147)](this['x'],this['y']))return _0x4ac545;if($gameMap[_0x196fc9(0x3ee)](this['x'],this['y']))return _0x4ac545;let _0x17294b=this['x']+_0x368c52,_0x535cfa=this['y']+_0x4ac545;if(!$gameMap[_0x196fc9(0x147)](_0x17294b,_0x535cfa))return _0x4ac545;const _0x1dc44a=this[_0x196fc9(0x38b)]();if($gameMap['isSmartJumpRegionLowestHeight'](_0x1dc44a))return _0x4ac545;let _0x594dc4=$gameMap[_0x196fc9(0x38b)](_0x17294b,_0x535cfa);if(!$gameMap[_0x196fc9(0x3ee)](_0x594dc4))return _0x4ac545;const _0xcc1427=this[_0x196fc9(0x41b)]();if(_0xcc1427===0x2)return _0x4ac545;if(_0xcc1427===0x8)return _0x4ac545;_0x4ac545+=_0x1dc44a-_0x594dc4;for(;;){const _0x2a691f=_0x17294b,_0x8041f4=this['y']+_0x4ac545,_0x35f083=$gameMap[_0x196fc9(0x38b)](_0x2a691f,_0x8041f4);if($gameMap[_0x196fc9(0x147)](_0x2a691f,_0x8041f4)&&!$gameMap[_0x196fc9(0x3ee)](_0x35f083)){_0x4ac545--;continue;}if($gameMap[_0x196fc9(0x1f9)](_0x2a691f,_0x8041f4))break;_0x4ac545--;if(_0x4ac545<=0x0)break;}return _0x4ac545;},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x260)]=function(){const _0x5d13f5=_0x3124f3;if(this['isJumping']())return;this[_0x5d13f5(0x2c6)]=![];if(this[_0x5d13f5(0x2e4)]()){let _0x33623e=Math['max'](Math['ceil'](this['_jumpPeak']/0x2),0x1);while(_0x33623e--)this[_0x5d13f5(0x1d0)]();}if(this[_0x5d13f5(0x27c)]())this[_0x5d13f5(0x380)]();setTimeout(this[_0x5d13f5(0x3cf)][_0x5d13f5(0x230)](this,[0x1,0x2]),0x32);},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x296)]=function(){this['_smartJumpCooldown']&&this['_smartJumpCooldown']--;},Game_Player[_0x3124f3(0x2a7)][_0x3124f3(0x2ed)]=function(){const _0x735f31=_0x3124f3;return this[_0x735f31(0x3f4)]||{'enabled':![]};},Game_Player[_0x3124f3(0x2a7)]['smartJumpMotionTrailData']=function(){const _0x205c70=_0x3124f3;return this[_0x205c70(0x1ff)]||{'enabled':![]};},Game_Player['prototype']['smartRushMotionTrailData']=function(){const _0x586cc9=_0x3124f3;return this[_0x586cc9(0x22e)]||{'enabled':![]};},Game_Player['prototype']['motionTrailData']=function(){const _0x1e0401=_0x3124f3;if(this[_0x1e0401(0x26a)]()&&this[_0x1e0401(0x19e)]()['enabled'])return this['smartRushMotionTrailData']();else{if(this['isSmartJumping']()&&this[_0x1e0401(0x3e6)]()[_0x1e0401(0x369)]){if(_0x1e0401(0x3cb)!=='iIqEF'){if(this[_0x1e0401(0x30c)]===_0x1f9642&&!this[_0x1e0401(0x221)]())return![];if(this[_0x1e0401(0x30c)]===_0x582f64&&this[_0x1e0401(0x1ec)]())return![];if(!this[_0x1e0401(0x211)]())return![];if(this[_0x1e0401(0x224)]())return![];return _0x286802[_0x1e0401(0x18e)]();}else return this[_0x1e0401(0x3e6)]();}}return Game_Character[_0x1e0401(0x2a7)]['motionTrailData']['call'](this);},Game_Player['prototype']['createSmartBlinkMotionTrailSprite']=function(){const _0xa3deb4=_0x3124f3,_0x207d97=SceneManager[_0xa3deb4(0x424)][_0xa3deb4(0x3a6)];if(!_0x207d97)return;const _0x458319=[this][_0xa3deb4(0x214)](this[_0xa3deb4(0x17e)]()[_0xa3deb4(0x219)]());for(const _0x31cde8 of _0x458319){if(!_0x31cde8)continue;oldData=JSON[_0xa3deb4(0x231)](JSON[_0xa3deb4(0x144)](_0x31cde8[_0xa3deb4(0x341)]||{'enabled':![]})),_0x31cde8[_0xa3deb4(0x1d9)](this[_0xa3deb4(0x2ed)]());const _0x5124a3=_0x207d97[_0xa3deb4(0x36f)](_0x31cde8);_0x5124a3&&_0x5124a3[_0xa3deb4(0x3f2)](),_0x31cde8['setMotionTrailSettings'](oldData);}},VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x33f)]=Game_Follower[_0x3124f3(0x2a7)][_0x3124f3(0x2c9)],Game_Follower['prototype'][_0x3124f3(0x2c9)]=function(_0x47191a){const _0xb4c9d=_0x3124f3;VisuMZ['MovementEffects']['Game_Follower_initialize']['call'](this,_0x47191a),this[_0xb4c9d(0x345)]();},VisuMZ['MovementEffects']['Game_CharacterBase_straighten']=Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x36e)],Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x36e)]=function(){const _0x307b6e=_0x3124f3;VisuMZ['MovementEffects']['Game_CharacterBase_straighten'][_0x307b6e(0x19a)](this),this[_0x307b6e(0x345)]();},Game_CharacterBase[_0x3124f3(0x2a7)][_0x3124f3(0x345)]=function(){},Game_Follower[_0x3124f3(0x2a7)][_0x3124f3(0x345)]=function(){const _0x127bcd=_0x3124f3;this[_0x127bcd(0x169)]=Math[_0x127bcd(0x1bd)](0xd);},Game_Follower['prototype'][_0x3124f3(0x380)]=function(){const _0x1cdd90=_0x3124f3;if($gamePlayer['_footstepCooldownDuration'])return;Game_Character[_0x1cdd90(0x2a7)][_0x1cdd90(0x380)][_0x1cdd90(0x19a)](this);},Game_Follower[_0x3124f3(0x2a7)][_0x3124f3(0x37a)]=function(){const _0x491293=_0x3124f3;return this['actor']()?this[_0x491293(0x18b)]()[_0x491293(0x37a)]():Game_Character['prototype'][_0x491293(0x37a)][_0x491293(0x19a)](this);},Game_Follower['prototype']['footprintsData']=function(){const _0x5d28d9=_0x3124f3;return this['actor']()?this['actor']()['footprintsData']():Game_Character[_0x5d28d9(0x2a7)][_0x5d28d9(0x2bb)][_0x5d28d9(0x19a)](this);},Game_Follower['prototype']['smartBlinkMotionTrailData']=function(){return $gamePlayer['smartBlinkMotionTrailData']();},Game_Follower[_0x3124f3(0x2a7)][_0x3124f3(0x3e6)]=function(){const _0x4bbb75=_0x3124f3;return $gamePlayer[_0x4bbb75(0x3e6)]();},Game_Follower[_0x3124f3(0x2a7)][_0x3124f3(0x19e)]=function(){const _0x55c0e1=_0x3124f3;return $gamePlayer[_0x55c0e1(0x19e)]();},Game_Follower[_0x3124f3(0x2a7)][_0x3124f3(0x1b2)]=function(){const _0x2d1e54=_0x3124f3;if($gamePlayer[_0x2d1e54(0x26a)]()&&this[_0x2d1e54(0x19e)]()[_0x2d1e54(0x369)])return this[_0x2d1e54(0x19e)]();else{if($gamePlayer[_0x2d1e54(0x193)]()&&this[_0x2d1e54(0x3e6)]()[_0x2d1e54(0x369)])return this['smartJumpMotionTrailData']();}return Game_Character[_0x2d1e54(0x2a7)]['motionTrailData'][_0x2d1e54(0x19a)](this);},VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x29b)]=Game_Event[_0x3124f3(0x2a7)][_0x3124f3(0x148)],Game_Event[_0x3124f3(0x2a7)][_0x3124f3(0x148)]=function(){const _0x39d439=_0x3124f3;VisuMZ[_0x39d439(0x246)]['Game_Event_clearPageSettings'][_0x39d439(0x19a)](this),this[_0x39d439(0x3b3)]();},VisuMZ['MovementEffects'][_0x3124f3(0x286)]=Game_Event[_0x3124f3(0x2a7)][_0x3124f3(0x25a)],Game_Event[_0x3124f3(0x2a7)][_0x3124f3(0x25a)]=function(){const _0x23d954=_0x3124f3;VisuMZ['MovementEffects'][_0x23d954(0x286)][_0x23d954(0x19a)](this),this['setupMovementEffectsVariables']();},Game_Event['prototype'][_0x3124f3(0x21b)]=function(){const _0x5957b7=_0x3124f3;if(!this[_0x5957b7(0x3ea)]())return;this[_0x5957b7(0x3b3)](),this[_0x5957b7(0x284)](),this['setupMovementEffectsCommentTags']();},Game_Event[_0x3124f3(0x2a7)]['setupMovementEffectsNotetags']=function(){const _0x19dbcf=_0x3124f3,_0x42095b=this[_0x19dbcf(0x3ea)]()[_0x19dbcf(0x24d)];if(_0x42095b==='')return;this[_0x19dbcf(0x1dc)](_0x42095b);},Game_Event[_0x3124f3(0x2a7)][_0x3124f3(0x2e7)]=function(){const _0x208b04=_0x3124f3;if(!this[_0x208b04(0x213)]())return;const _0x593a43=this[_0x208b04(0x388)]();let _0x59390d='';for(const _0x2af369 of _0x593a43){if(_0x208b04(0x3f0)!==_0x208b04(0x2d5)){if([0x6c,0x198][_0x208b04(0x36d)](_0x2af369[_0x208b04(0x196)])){if(_0x59390d!=='')_0x59390d+='\x0a';_0x59390d+=_0x2af369[_0x208b04(0x29f)][0x0];}}else{const _0x38cd0b=this[_0x208b04(0x36f)](_0x4f023f);if(!_0x38cd0b)return;this[_0x208b04(0x3a0)]();const _0x5aca34=this[_0x208b04(0x34d)],_0x4dff60=_0x5aca34[_0x208b04(0x185)],_0x101245=new _0x250f57();_0x101245[_0x208b04(0x20b)]=this[_0x208b04(0x261)],_0x101245[_0x208b04(0x255)]=_0x5aca34[_0x208b04(0x1af)],_0x101245[_0x208b04(0x238)]=_0x5aca34[_0x208b04(0x394)],_0x101245[_0x208b04(0x314)]['x']=0.5,_0x101245[_0x208b04(0x314)]['y']=0x1,_0x101245[_0x208b04(0x177)]['x']=(_0x5482ea[_0x208b04(0x3dd)]()*_0x4dff60)[_0x208b04(0x334)](0.01,0.99),_0x101245[_0x208b04(0x177)]['y']=(_0x91b9f7[_0x208b04(0x3dd)]()*_0x4dff60)[_0x208b04(0x334)](0.01,0.99),_0x101245['_targetScaleX']=0x1-(_0xe7298d[_0x208b04(0x3dd)]()*_0x4dff60*0x2)[_0x208b04(0x334)](0x0,0.8),_0x101245['_targetScaleY']=0x1-(_0x49aeca[_0x208b04(0x3dd)]()*_0x4dff60*0x2)[_0x208b04(0x334)](0x0,0.8);const _0x140ab5=0.25,_0x11d474=0.05;_0x101245['_realX']=_0x3e132f[_0x208b04(0x3dc)]+_0x32d85f[_0x208b04(0x3dd)]()*_0x140ab5+_0x101739[_0x208b04(0x3dd)]()*_0x140ab5-_0x140ab5,_0x101245[_0x208b04(0x376)]=_0x1012a2[_0x208b04(0x376)]+_0x64e0a5['random']()*_0x11d474+_0x39ecb1['random']()*_0x11d474-_0x11d474,_0x101245['z']=0x3,this[_0x208b04(0x2b4)][_0x208b04(0x223)](_0x101245),this[_0x208b04(0x1a5)]['addChild'](_0x101245);}}this[_0x208b04(0x1dc)](_0x59390d);},Game_Event[_0x3124f3(0x2a7)]['initMovementEffectsVariables']=function(){const _0x4cc259=_0x3124f3;{const _0x3bbf57=VisuMZ[_0x4cc259(0x246)][_0x4cc259(0x162)][_0x4cc259(0x37b)];this[_0x4cc259(0x3a8)]={'enabled':_0x3bbf57[_0x4cc259(0x155)],'volumeRate':_0x3bbf57[_0x4cc259(0x192)],'pitchRate':_0x3bbf57['eventPitchModifier'],'soundFrames':_0x3bbf57[_0x4cc259(0x3de)][_0x4cc259(0x2ad)]()};}{if(_0x4cc259(0x140)===_0x4cc259(0x140)){const _0x3601a0=VisuMZ[_0x4cc259(0x246)][_0x4cc259(0x162)][_0x4cc259(0x172)];this[_0x4cc259(0x2e8)]={'enabled':!![],'dir1':JSON['parse'](JSON['stringify'](_0x3601a0[_0x4cc259(0x234)])),'dir2':JSON[_0x4cc259(0x231)](JSON[_0x4cc259(0x144)](_0x3601a0[_0x4cc259(0x22c)])),'dir3':JSON[_0x4cc259(0x231)](JSON[_0x4cc259(0x144)](_0x3601a0[_0x4cc259(0x299)])),'dir4':JSON[_0x4cc259(0x231)](JSON['stringify'](_0x3601a0['dir4'])),'dir6':JSON[_0x4cc259(0x231)](JSON['stringify'](_0x3601a0[_0x4cc259(0x3f9)])),'dir7':JSON['parse'](JSON[_0x4cc259(0x144)](_0x3601a0[_0x4cc259(0x1b0)])),'dir8':JSON['parse'](JSON[_0x4cc259(0x144)](_0x3601a0[_0x4cc259(0x2ba)])),'dir9':JSON[_0x4cc259(0x231)](JSON['stringify'](_0x3601a0[_0x4cc259(0x158)]))};}else{const _0x3d4d3d=_0x110c9c[_0x4cc259(0x246)][_0x4cc259(0x162)][_0x4cc259(0x3f8)];this['_smartJump']={'enabled':!![],'HeightBasedRegions':(_0x3d4d3d[_0x4cc259(0x1a2)]||[])[_0x4cc259(0x2ad)](),'NonLandableRegions':(_0x3d4d3d[_0x4cc259(0x2b3)]||[])[_0x4cc259(0x2ad)](),'NonLandableTerrainTags':(_0x3d4d3d[_0x4cc259(0x161)]||[])[_0x4cc259(0x2ad)](),'NonPassableRegions':(_0x3d4d3d[_0x4cc259(0x3d5)]||[])[_0x4cc259(0x2ad)](),'NonPassableTerrainTags':(_0x3d4d3d[_0x4cc259(0x216)]||[])[_0x4cc259(0x2ad)]()};}}this[_0x4cc259(0x28b)]={'nonLand':![],'nonPass':![]};},Game_Event[_0x3124f3(0x2a7)][_0x3124f3(0x1dc)]=function(_0x32d880){const _0x2ffc97=_0x3124f3,_0x5c7852=VisuMZ[_0x2ffc97(0x246)]['RegExp'];if(!_0x32d880[_0x2ffc97(0x2a0)](_0x5c7852['CatchAll'])){if(_0x2ffc97(0x225)===_0x2ffc97(0x26c)){if(this[_0x2ffc97(0x26a)]())this['moveBySmartRush']();else this['isSmartJumping']()?this[_0x2ffc97(0x260)]():(_0x5f09bb[_0x2ffc97(0x246)]['Game_Player_moveByInput'][_0x2ffc97(0x19a)](this),this[_0x2ffc97(0x1d4)]());}else return;}if(_0x32d880[_0x2ffc97(0x2a0)](_0x5c7852[_0x2ffc97(0x355)]))_0x2ffc97(0x1c5)!==_0x2ffc97(0x1c5)?_0xbbfafb[_0x2ffc97(0x3f2)]():this[_0x2ffc97(0x3a8)][_0x2ffc97(0x369)]=!![];else{if(_0x32d880[_0x2ffc97(0x2a0)](_0x5c7852[_0x2ffc97(0x194)])){if(_0x2ffc97(0x1a4)!==_0x2ffc97(0x1a4))for(const _0x409c0f of _0x40f850){_0x409c0f['match'](_0x2adde2[_0x2ffc97(0x1ab)]);const _0x495bc0=_0x5066de(_0x30073c['$1'])[_0x2ffc97(0x334)](0x0,0xff),_0x4131c3=_0x2009dc(_0x20222c['$2'])['split'](',')[_0x2ffc97(0x32f)](_0x306c06=>_0x306c06[_0x2ffc97(0x2ee)]());this[_0x2ffc97(0x244)][_0x495bc0]={'name':_0x4131c3[0x0]||'','volume':_0x5ad21f(_0x4131c3[0x1]??_0x4a7f12[_0x2ffc97(0x391)]),'pitch':_0x235480(_0x4131c3[0x2]??_0x2d8912[_0x2ffc97(0x15c)]),'pan':_0x1a7631(_0x4131c3[0x3]??_0x34df80[_0x2ffc97(0x294)])};}else this[_0x2ffc97(0x3a8)][_0x2ffc97(0x369)]=![];}}_0x32d880['match'](_0x5c7852['FootstepsVolRate'])&&(this['_footsteps'][_0x2ffc97(0x2b9)]=Number(RegExp['$1'])*0.01);if(_0x32d880[_0x2ffc97(0x2a0)](_0x5c7852[_0x2ffc97(0x309)])){if(_0x2ffc97(0x3f3)===_0x2ffc97(0x2df)){if(!_0x1294e8[_0x2ffc97(0x366)][_0x2ffc97(0x27e)])return;if(this['_motionBlurMovementEffectsFilter'])return;this[_0x2ffc97(0x1e4)]=new _0x5c0e52[(_0x2ffc97(0x366))][(_0x2ffc97(0x27e))](),this[_0x2ffc97(0x170)]=0x0,this[_0x2ffc97(0x1d1)]=0x0,this['filters']=this[_0x2ffc97(0x366)]||[],this['filters']['push'](this['_motionBlurMovementEffectsFilter']);}else this[_0x2ffc97(0x3a8)][_0x2ffc97(0x2f8)]=Number(RegExp['$1'])*0.01;}if(_0x32d880['match'](_0x5c7852['FootstepsFrames'])){if('qZQGG'!=='qZQGG')for(const _0x145c77 of _0x139740){_0x145c77['match'](_0x24777f[_0x2ffc97(0x3d3)]);const _0x51fa7b=_0x476603(_0x225d45['$1'])[_0x2ffc97(0x334)](0x0,0xff),_0x2c3e1c=_0x181559(_0x3ec65e['$2'])['clamp'](0x0,0xff);this[_0x2ffc97(0x2b0)][_0x2ffc97(0x255)][_0x2ffc97(0x279)][_0x51fa7b]=_0x2c3e1c;}else this[_0x2ffc97(0x3a8)][_0x2ffc97(0x1c6)]=String(RegExp['$1'])[_0x2ffc97(0x166)](',')[_0x2ffc97(0x32f)](_0x59e0fc=>Number(_0x59e0fc)||0x0);}if(_0x32d880['match'](_0x5c7852[_0x2ffc97(0x411)]))this[_0x2ffc97(0x2e8)][_0x2ffc97(0x369)]=!![];else _0x32d880[_0x2ffc97(0x2a0)](_0x5c7852['NoFootprintsEvent'])&&(_0x2ffc97(0x1e3)!==_0x2ffc97(0x347)?this[_0x2ffc97(0x2e8)][_0x2ffc97(0x369)]=![]:(_0x383baf[_0x2ffc97(0x246)]['Game_Player_reserveTransfer'][_0x2ffc97(0x19a)](this,_0x2a532a,_0x359e6f,_0x24d465,_0x419583,_0x191360),this[_0x2ffc97(0x14e)]()));{const _0x1ab409=_0x2ffc97(0x1f8),_0x1c97b5=_0x32d880[_0x2ffc97(0x2a0)](_0x5c7852[_0x1ab409]);if(_0x1c97b5){if(_0x2ffc97(0x2c3)!==_0x2ffc97(0x2c3))return this[_0x2ffc97(0x19e)]();else for(const _0x415b8f of _0x1c97b5){if(_0x2ffc97(0x2d3)!==_0x2ffc97(0x36a)){_0x415b8f['match'](_0x5c7852[_0x1ab409]);const _0x47d9e0=RegExp['$1'],_0x30debe=RegExp['$2'],_0x4ee2fd=RegExp['$3'],_0x37f074='dir%1'[_0x2ffc97(0x1c8)](TextManager['parseDirectionText'](_0x47d9e0)),_0x4eac42=_0x2ffc97(0x1e1)[_0x2ffc97(0x1c8)](Number(_0x30debe)||0x0);this['_footprintsData'][_0x37f074][_0x4eac42][_0x2ffc97(0x39b)]=String(_0x4ee2fd)[_0x2ffc97(0x2ee)]();}else{if(_0x435b46>=0x1)return![];}}}}{const _0x1cb7e7='FootprintsWidth',_0x5aa9ba=_0x32d880[_0x2ffc97(0x2a0)](_0x5c7852[_0x1cb7e7]);if(_0x5aa9ba)for(const _0x104539 of _0x5aa9ba){if(_0x2ffc97(0x18c)!==_0x2ffc97(0x18c)){const _0x19bb86=new _0xbd1de4(this,this['_character']),_0x11a262=_0x47aee7['_scene'][_0x2ffc97(0x3a6)];_0x11a262[_0x2ffc97(0x1c1)][_0x2ffc97(0x223)](_0x19bb86),this[_0x2ffc97(0x195)]=this[_0x2ffc97(0x293)][_0x2ffc97(0x3dc)],this[_0x2ffc97(0x233)]=this[_0x2ffc97(0x293)][_0x2ffc97(0x376)];const _0xa9041b=_0x11a262[_0x2ffc97(0x1a5)];_0xa9041b['addChild'](_0x19bb86);}else{_0x104539[_0x2ffc97(0x2a0)](_0x5c7852[_0x1cb7e7]);const _0x338089=RegExp['$1'],_0x21603c=RegExp['$2'],_0x17c040=RegExp['$3'],_0x2c7df9='dir%1'[_0x2ffc97(0x1c8)](TextManager[_0x2ffc97(0x141)](_0x338089)),_0x2fcb16=_0x2ffc97(0x1e1)[_0x2ffc97(0x1c8)](Number(_0x21603c)||0x0);this[_0x2ffc97(0x2e8)][_0x2c7df9][_0x2fcb16][_0x2ffc97(0x2f5)]=Number(_0x17c040)||0x1;}}}{const _0x48b40d=_0x2ffc97(0x311),_0x5cba79=_0x32d880[_0x2ffc97(0x2a0)](_0x5c7852[_0x48b40d]);if(_0x5cba79)for(const _0x238ef9 of _0x5cba79){if(_0x2ffc97(0x3bd)!=='LMKxU'){if(_0x43c168[_0x2ffc97(0x26a)]())return!![];this[_0x2ffc97(0x3a1)]='';}else{_0x238ef9[_0x2ffc97(0x2a0)](_0x5c7852[_0x48b40d]);const _0x307541=RegExp['$1'],_0x1ca57c=RegExp['$2'],_0x29df82=RegExp['$3'],_0x5654e5=_0x2ffc97(0x1a0)[_0x2ffc97(0x1c8)](TextManager[_0x2ffc97(0x141)](_0x307541)),_0x144370='pattern%1'[_0x2ffc97(0x1c8)](Number(_0x1ca57c)||0x0);this[_0x2ffc97(0x2e8)][_0x5654e5][_0x144370][_0x2ffc97(0x32d)]=Number(_0x29df82)||0x1;}}}{if('vsrGr'!==_0x2ffc97(0x406)){const _0x121269=_0x2ffc97(0x2ef),_0x15e0cc=_0x32d880[_0x2ffc97(0x2a0)](_0x5c7852[_0x121269]);if(_0x15e0cc){if(_0x2ffc97(0x39d)!=='dCsTi')_0x5ed957[_0x2ffc97(0x246)]['Game_System_initialize'][_0x2ffc97(0x19a)](this),this[_0x2ffc97(0x39a)](),this[_0x2ffc97(0x338)](),this[_0x2ffc97(0x3e7)](),this[_0x2ffc97(0x41d)](),this[_0x2ffc97(0x203)]();else for(const _0x8f08f4 of _0x15e0cc){if(_0x2ffc97(0x304)===_0x2ffc97(0x304)){_0x8f08f4[_0x2ffc97(0x2a0)](_0x5c7852[_0x121269]);const _0x2c6686=RegExp['$1'],_0x243c46=RegExp['$2'],_0x4c2d6e=RegExp['$3'],_0x5cada3='dir%1'[_0x2ffc97(0x1c8)](TextManager[_0x2ffc97(0x141)](_0x2c6686)),_0x2ff5af=_0x2ffc97(0x1e1)[_0x2ffc97(0x1c8)](Number(_0x243c46)||0x0),_0x3ce9b0=_0x4c2d6e['split'](',')[_0x2ffc97(0x32f)](_0x2a20fc=>Number(_0x2a20fc)||0x0);this['_footprintsData'][_0x5cada3][_0x2ff5af][_0x2ffc97(0x41e)]=_0x3ce9b0[0x0]||0x0,this[_0x2ffc97(0x2e8)][_0x5cada3][_0x2ff5af][_0x2ffc97(0x30a)]=_0x3ce9b0[0x1]||0x0;}else{const _0x25c70b=_0x30bf87[_0x2ffc97(0x246)][_0x2ffc97(0x162)][_0x2ffc97(0x172)];this[_0x2ffc97(0x2b0)]={'allowed':{'regions':_0x25c70b['DefaultRegions'][_0x2ffc97(0x2ad)](),'terrainTags':_0x25c70b[_0x2ffc97(0x337)][_0x2ffc97(0x2ad)]()},'forbidden':{'regions':[],'terrainTags':[]},'opacity':{'regions':{},'terrainTags':{}},'duration':{'regions':{},'terrainTags':{}}};}}}}else{const _0x2bc1d4=_0x5c0677['MovementEffects'][_0x2ffc97(0x162)][_0x2ffc97(0x37b)];this[_0x2ffc97(0x3a8)]={'enabled':_0x2bc1d4[_0x2ffc97(0x2c2)],'volumeRate':_0x2bc1d4[_0x2ffc97(0x3d1)],'pitchRate':_0x2bc1d4[_0x2ffc97(0x150)],'soundFrames':_0x2bc1d4[_0x2ffc97(0x3de)][_0x2ffc97(0x2ad)]()};}}if(_0x32d880[_0x2ffc97(0x2a0)](_0x5c7852[_0x2ffc97(0x24a)])){if(_0x2ffc97(0x2e0)===_0x2ffc97(0x3fa)){_0x3b5531[_0x2ffc97(0x2a0)](_0x30bb09[_0x2ffc97(0x280)]);const _0x5c474b=_0x365b8f(_0x480b84['$1'])[_0x2ffc97(0x334)](0x0,0xff),_0x9b8d=_0x24b945[_0x2ffc97(0x331)](0x1,_0x4d593b(_0x2b5280['$2']));this[_0x2ffc97(0x2b0)][_0x2ffc97(0x2b2)][_0x2ffc97(0x1e9)][_0x5c474b]=_0x9b8d;}else this['_smartJumpRestriction'][_0x2ffc97(0x395)]=!![];}_0x32d880[_0x2ffc97(0x2a0)](_0x5c7852['SmartJumpNonPassEvent'])&&(this[_0x2ffc97(0x28b)][_0x2ffc97(0x3e2)]=!![]);},Game_Event[_0x3124f3(0x2a7)][_0x3124f3(0x37a)]=function(){const _0x567f28=_0x3124f3;return this[_0x567f28(0x3a8)]===undefined&&this['setupMovementEffectsVariables'](),this[_0x567f28(0x3a8)];},Game_Event[_0x3124f3(0x2a7)]['footprintsData']=function(){const _0x266107=_0x3124f3;return this[_0x266107(0x2e8)]===undefined&&this[_0x266107(0x21b)](),this[_0x266107(0x2e8)];},Game_Event[_0x3124f3(0x2a7)][_0x3124f3(0x259)]=function(){const _0x4a03bc=_0x3124f3;if(this[_0x4a03bc(0x28b)]===undefined)this[_0x4a03bc(0x21b)]();return this[_0x4a03bc(0x28b)][_0x4a03bc(0x395)];},Game_Event[_0x3124f3(0x2a7)][_0x3124f3(0x20f)]=function(){const _0x44e385=_0x3124f3;if(this[_0x44e385(0x28b)]===undefined)this['setupMovementEffectsVariables']();return this[_0x44e385(0x28b)][_0x44e385(0x3e2)];},VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x2dc)]=Game_Interpreter[_0x3124f3(0x2a7)][_0x3124f3(0x357)],Game_Interpreter[_0x3124f3(0x2a7)]['updateWaitMode']=function(){const _0x192e69=_0x3124f3;if(this[_0x192e69(0x3a1)]===_0x192e69(0x328)){if($gamePlayer[_0x192e69(0x42a)]())return!![];this[_0x192e69(0x3a1)]='';}else{if(this[_0x192e69(0x3a1)]===_0x192e69(0x350)){if(_0x192e69(0x1c0)===_0x192e69(0x33c)){if(this[_0x192e69(0x30c)]===_0x53451b&&!this[_0x192e69(0x221)]())return![];if(this[_0x192e69(0x30c)]===_0x1f8380&&this[_0x192e69(0x1ec)]())return![];if(this['isTransparent']())return![];const _0x43f7e2=this['x'],_0x411364=this['y'];return this[_0x192e69(0x2bb)]()[_0x192e69(0x369)]&&_0x228be1[_0x192e69(0x271)](_0x43f7e2,_0x411364);}else{if($gamePlayer['isSmartJumping']()){if('OxIiX'!==_0x192e69(0x3c4))return!![];else this[_0x192e69(0x16c)](),this[_0x192e69(0x35d)]();}this[_0x192e69(0x3a1)]='';}}else{if(this[_0x192e69(0x3a1)]===_0x192e69(0x33b)){if($gamePlayer['isSmartRushing']()){if(_0x192e69(0x1a3)===_0x192e69(0x176)){if(!this[_0x192e69(0x293)])return![];return this[_0x192e69(0x293)][_0x192e69(0x1b2)]()[_0x192e69(0x369)];}else return!![];}this[_0x192e69(0x3a1)]='';}}}return VisuMZ[_0x192e69(0x246)][_0x192e69(0x2dc)][_0x192e69(0x19a)](this);},VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x354)]=Sprite_Character[_0x3124f3(0x2a7)]['initialize'],Sprite_Character['prototype'][_0x3124f3(0x2c9)]=function(_0x5729f1){const _0x219144=_0x3124f3;VisuMZ[_0x219144(0x246)][_0x219144(0x354)][_0x219144(0x19a)](this,_0x5729f1);},VisuMZ[_0x3124f3(0x246)][_0x3124f3(0x1a6)]=Sprite_Character[_0x3124f3(0x2a7)][_0x3124f3(0x26e)],Sprite_Character[_0x3124f3(0x2a7)][_0x3124f3(0x26e)]=function(){const _0x52efb5=_0x3124f3;VisuMZ['MovementEffects']['Sprite_Character_update']['call'](this),this[_0x52efb5(0x291)](),this[_0x52efb5(0x3e4)]();},Sprite_Character[_0x3124f3(0x2a7)][_0x3124f3(0x400)]=function(){const _0x3ecb27=_0x3124f3;if(!PIXI[_0x3ecb27(0x366)]['MotionBlurFilter'])return;if(this[_0x3ecb27(0x1e4)])return;this['_motionBlurMovementEffectsFilter']=new PIXI['filters'][(_0x3ecb27(0x27e))](),this[_0x3ecb27(0x170)]=0x0,this['_motionBlurMovementEffectsAngleOffset']=0x0,this[_0x3ecb27(0x366)]=this[_0x3ecb27(0x366)]||[],this[_0x3ecb27(0x366)][_0x3ecb27(0x223)](this[_0x3ecb27(0x1e4)]);},Sprite_Character[_0x3124f3(0x2a7)][_0x3124f3(0x23f)]=function(_0x297de9,_0xa11ba4){const _0x3ebcf6=_0x3124f3;!this[_0x3ebcf6(0x1e4)]&&this[_0x3ebcf6(0x400)]();if(!this[_0x3ebcf6(0x1e4)])return;this[_0x3ebcf6(0x170)]=_0x297de9,this[_0x3ebcf6(0x1d1)]=_0xa11ba4;},Sprite_Character[_0x3124f3(0x2a7)][_0x3124f3(0x2be)]=function(){const _0x530aa7=_0x3124f3;if(!this['_character'])return![];if(this[_0x530aa7(0x293)]!==$gamePlayer&&this[_0x530aa7(0x293)][_0x530aa7(0x30c)]!==Game_Follower)return![];return $gamePlayer[_0x530aa7(0x26a)]();},Sprite_Character['prototype'][_0x3124f3(0x291)]=function(){const _0x529cb2=_0x3124f3;let _0x2d1181=this[_0x529cb2(0x1d1)];this[_0x529cb2(0x2be)]()&&(this[_0x529cb2(0x170)]=Game_Player[_0x529cb2(0x1de)],_0x2d1181=Game_Player[_0x529cb2(0x40a)]);if(this[_0x529cb2(0x170)]===undefined)return;if(this['_motionBlurMovementEffectsDuration']<=0x0)return;!this[_0x529cb2(0x1e4)]&&this['createMotionBlurMovementEffectsFilter']();if(!this[_0x529cb2(0x1e4)])return;const _0x1641a7=this['_motionBlurMovementEffectsFilter'];if(this['_motionBlurMovementEffectsDuration']-->0x0){let _0x1bf0eb=VisuMZ[_0x529cb2(0x246)][_0x529cb2(0x2ac)](this[_0x529cb2(0x293)]);_0x1bf0eb+=_0x2d1181;const _0x446b6a=this[_0x529cb2(0x170)][_0x529cb2(0x334)](0x0,0x1e);_0x1641a7[_0x529cb2(0x310)]['x']=_0x446b6a*Math['cos'](_0x1bf0eb*Math['PI']/0xb4),_0x1641a7[_0x529cb2(0x310)]['y']=-_0x446b6a*Math['sin'](_0x1bf0eb*Math['PI']/0xb4);}else _0x1641a7[_0x529cb2(0x310)]['x']=0x0,_0x1641a7['velocity']['y']=0x0,this[_0x529cb2(0x1d1)]=0x0;},VisuMZ[_0x3124f3(0x246)]['GetDirAngle']=function(_0x36b6ee){const _0x14bf28=_0x3124f3;if(!_0x36b6ee)return 0x2d;const _0x4be743=_0x36b6ee[_0x14bf28(0x41b)]();if(_0x4be743===0x6)return 0x0;if(_0x4be743===0x9)return 0x2d;if(_0x4be743===0x8)return 0x5a;if(_0x4be743===0x7)return 0x87;if(_0x4be743===0x4)return 0xb4;if(_0x4be743===0x1)return 0xe1;if(_0x4be743===0x2)return 0x10e;if(_0x4be743===0x3)return 0x13b;return 0x2d;},Sprite_Character[_0x3124f3(0x2a7)][_0x3124f3(0x432)]=function(){const _0x48e437=_0x3124f3;if(!SceneManager[_0x48e437(0x424)])return![];if(!SceneManager[_0x48e437(0x424)]['_spriteset'])return![];if(this[_0x48e437(0x30c)]!==Sprite_Character)return![];if(!this[_0x48e437(0x293)])return![];if(this[_0x48e437(0x293)][_0x48e437(0x19f)])return![];if(!this[_0x48e437(0x2cc)])return![];if(this[_0x48e437(0x255)]<=0x0)return![];if(!this[_0x48e437(0x1f2)])return![];if(!this[_0x48e437(0x20b)])return![];if(this[_0x48e437(0x1f2)][_0x48e437(0x2f5)]===this['bitmap'][_0x48e437(0x2f5)])return![];if(this['_motionTrailLastRealX']===this[_0x48e437(0x293)][_0x48e437(0x3dc)]&&this[_0x48e437(0x233)]===this[_0x48e437(0x293)]['_realY']){if(_0x48e437(0x359)===_0x48e437(0x21f)){const _0x397e63=_0x4d2007[_0x48e437(0x246)]['Settings'][_0x48e437(0x401)];this['_smartRush']={'enabled':!![],'NonCrashRegions':(_0x397e63['NonCrashRegions']||[])['clone'](),'NonCrashTerrainTags':(_0x397e63[_0x48e437(0x428)]||[])['clone']()};}else return![];}return!![];},Sprite_Character['prototype'][_0x3124f3(0x273)]=function(){const _0x133cf6=_0x3124f3;if(!this['_character'])return![];return this[_0x133cf6(0x293)][_0x133cf6(0x1b2)]()['enabled'];},Sprite_Character[_0x3124f3(0x2a7)][_0x3124f3(0x3e4)]=function(){const _0x117018=_0x3124f3;if(!this[_0x117018(0x432)]())return;if(!this[_0x117018(0x273)]())return;const _0x21d135=this[_0x117018(0x293)][_0x117018(0x1b2)](),_0x1205f0=_0x21d135[_0x117018(0x3cc)]||0x1;Graphics[_0x117018(0x363)]%_0x1205f0===0x0&&this[_0x117018(0x3f2)]();},Sprite_Character[_0x3124f3(0x2a7)][_0x3124f3(0x3f2)]=function(){const _0x4c3205=_0x3124f3,_0x75ce11=new Sprite_MapMotionTrail(this,this[_0x4c3205(0x293)]),_0x280c03=SceneManager['_scene']['_spriteset'];_0x280c03[_0x4c3205(0x1c1)][_0x4c3205(0x223)](_0x75ce11),this[_0x4c3205(0x195)]=this[_0x4c3205(0x293)][_0x4c3205(0x3dc)],this['_motionTrailLastRealY']=this[_0x4c3205(0x293)]['_realY'];const _0x7a7e21=_0x280c03[_0x4c3205(0x1a5)];_0x7a7e21['addChild'](_0x75ce11);};function Sprite_Footprint(){const _0x1f395f=_0x3124f3;this[_0x1f395f(0x2c9)](...arguments);}Sprite_Footprint[_0x3124f3(0x2a7)]=Object[_0x3124f3(0x307)](Sprite[_0x3124f3(0x2a7)]),Sprite_Footprint[_0x3124f3(0x2a7)][_0x3124f3(0x30c)]=Sprite_Footprint,Sprite_Footprint[_0x3124f3(0x2a7)][_0x3124f3(0x2c9)]=function(_0x263357){const _0x2c553a=_0x3124f3;this[_0x2c553a(0x293)]=_0x263357,Sprite[_0x2c553a(0x2a7)][_0x2c553a(0x2c9)][_0x2c553a(0x19a)](this),this[_0x2c553a(0x2b7)](),this[_0x2c553a(0x2f1)](),this['setupOpacity'](),this['setupDuration'](),this[_0x2c553a(0x35d)]();},Sprite_Footprint['prototype']['initMembers']=function(){const _0x4b90d1=_0x3124f3;this[_0x4b90d1(0x314)]['x']=0.5,this[_0x4b90d1(0x314)]['y']=0x1,this['z']=0x0,this[_0x4b90d1(0x3dc)]=this[_0x4b90d1(0x293)][_0x4b90d1(0x3dc)],this[_0x4b90d1(0x376)]=this['_character'][_0x4b90d1(0x376)],this[_0x4b90d1(0x1fa)]=this[_0x4b90d1(0x293)][_0x4b90d1(0x1fa)],this[_0x4b90d1(0x32c)]=this[_0x4b90d1(0x293)][_0x4b90d1(0x1b9)](),this['_shiftY']=this[_0x4b90d1(0x293)][_0x4b90d1(0x2fc)](),this[_0x4b90d1(0x42b)]=0x0,this[_0x4b90d1(0x3d2)]=0x0;if(this[_0x4b90d1(0x293)][_0x4b90d1(0x30c)]===Game_Follower){const _0x57b4a7=VisuMZ['MovementEffects'][_0x4b90d1(0x162)][_0x4b90d1(0x172)]['followerVariance']||0x0;this[_0x4b90d1(0x42b)]=Math[_0x4b90d1(0x1bd)](_0x57b4a7+0x1)+Math[_0x4b90d1(0x1bd)](_0x57b4a7+0x1)-_0x57b4a7,this['_followerOffsetY']=Math['randomInt'](_0x57b4a7+0x1)+Math[_0x4b90d1(0x1bd)](_0x57b4a7+0x1)-_0x57b4a7;}},Sprite_Footprint['prototype'][_0x3124f3(0x2bb)]=function(){const _0x4908be=_0x3124f3,_0x53e1f3=_0x4908be(0x1a0)[_0x4908be(0x1c8)](this[_0x4908be(0x1fa)]),_0x1f9e2a=_0x4908be(0x1e1)[_0x4908be(0x1c8)](this[_0x4908be(0x32c)]),_0x3f85db=this['_character'][_0x4908be(0x2bb)]();return _0x3f85db[_0x53e1f3][_0x1f9e2a];},Sprite_Footprint['prototype']['createBitmap']=function(){const _0x1273f6=_0x3124f3,_0x4e0b2a=this[_0x1273f6(0x2bb)]();_0x4e0b2a[_0x1273f6(0x39b)]!==''?_0x1273f6(0x23d)===_0x1273f6(0x22d)?this[_0x1273f6(0x3a8)]['volumeRate']=_0x3433d1(_0x3d18da['$1'])*0.01:(this[_0x1273f6(0x20b)]=ImageManager[_0x1273f6(0x15a)](_0x4e0b2a[_0x1273f6(0x39b)]),this[_0x1273f6(0x408)]=0x0):(this[_0x1273f6(0x20b)]=ImageManager[_0x1273f6(0x16d)](),this['scale']['x']=_0x4e0b2a[_0x1273f6(0x2f5)]*0.01,this[_0x1273f6(0x177)]['y']=_0x4e0b2a[_0x1273f6(0x32d)]*0.01,this[_0x1273f6(0x408)]=0x2);},Sprite_Footprint[_0x3124f3(0x2a7)][_0x3124f3(0x2a5)]=function(){const _0x3322b7=_0x3124f3,_0x2af69d=this[_0x3322b7(0x293)]['x'],_0x3dab91=this[_0x3322b7(0x293)]['y'];this[_0x3322b7(0x255)]=$gameMap['footprintOpacityAtXy'](_0x2af69d,_0x3dab91);},Sprite_Footprint[_0x3124f3(0x2a7)][_0x3124f3(0x3da)]=function(){const _0xa38776=_0x3124f3,_0x1aae9b=this[_0xa38776(0x293)]['x'],_0x3afe5d=this[_0xa38776(0x293)]['y'];this[_0xa38776(0x238)]=$gameMap[_0xa38776(0x3c8)](_0x1aae9b,_0x3afe5d);},Sprite_Footprint['prototype'][_0x3124f3(0x26e)]=function(){const _0x2cfe2b=_0x3124f3;Sprite[_0x2cfe2b(0x2a7)][_0x2cfe2b(0x26e)][_0x2cfe2b(0x19a)](this),this[_0x2cfe2b(0x35d)]();},Sprite_Footprint[_0x3124f3(0x2a7)]['updatePosition']=function(){const _0x35d262=_0x3124f3,_0x3d688b=$gameMap[_0x35d262(0x160)](),_0xd20849=$gameMap[_0x35d262(0x2d9)]();this['x']=Math[_0x35d262(0x33d)]($gameMap[_0x35d262(0x1bf)](this[_0x35d262(0x3dc)])*_0x3d688b+_0x3d688b/0x2),this['x']+=this[_0x35d262(0x2bb)]()[_0x35d262(0x41e)]+this['_followerOffsetX'],this['y']=Math['floor']($gameMap[_0x35d262(0x389)](this['_realY'])*_0xd20849+_0xd20849),this['y']+=this[_0x35d262(0x2bb)]()[_0x35d262(0x30a)]+this[_0x35d262(0x3d2)],this['y']-=this[_0x35d262(0x430)];};function Sprite_MapMotionTrail(){const _0x1969e2=_0x3124f3;this[_0x1969e2(0x2c9)](...arguments);}Sprite_MapMotionTrail[_0x3124f3(0x2a7)]=Object['create'](Sprite[_0x3124f3(0x2a7)]),Sprite_MapMotionTrail[_0x3124f3(0x2a7)][_0x3124f3(0x30c)]=Sprite_MapMotionTrail,Sprite_MapMotionTrail[_0x3124f3(0x2a7)]['initialize']=function(_0x4a3c5a,_0x246e48){const _0x33d3b5=_0x3124f3;this[_0x33d3b5(0x3d8)]=_0x4a3c5a,this['_character']=_0x246e48,Sprite[_0x33d3b5(0x2a7)][_0x33d3b5(0x2c9)][_0x33d3b5(0x19a)](this),this['copyBasicProperties'](),this[_0x33d3b5(0x37d)](),this[_0x33d3b5(0x30f)](),this['attachIconSprite'](),this[_0x33d3b5(0x247)]=!![];},Sprite_MapMotionTrail[_0x3124f3(0x2a7)][_0x3124f3(0x2e1)]=function(){const _0x3333e1=_0x3124f3,_0x5c1643=$gameMap[_0x3333e1(0x2d9)](),_0x1aa3b1=(_0x5c1643-0x1)/_0x5c1643;this[_0x3333e1(0x314)]['x']=this['_baseSprite']['anchor']['x'],this[_0x3333e1(0x314)]['y']=this['_baseSprite'][_0x3333e1(0x314)]['y'],this[_0x3333e1(0x255)]=this[_0x3333e1(0x3d8)][_0x3333e1(0x255)],this[_0x3333e1(0x177)]['x']=this['_baseSprite'][_0x3333e1(0x177)]['x'],this[_0x3333e1(0x177)]['y']=this[_0x3333e1(0x3d8)]['scale']['y'],this['x']=this[_0x3333e1(0x3d8)]['x'],this['y']=this[_0x3333e1(0x3d8)]['y'],this['z']=this['_baseSprite']['z'],this[_0x3333e1(0x3dc)]=this[_0x3333e1(0x293)]['_realX'],this[_0x3333e1(0x376)]=this[_0x3333e1(0x293)][_0x3333e1(0x376)],this[_0x3333e1(0x430)]=this[_0x3333e1(0x293)][_0x3333e1(0x2fc)](),this[_0x3333e1(0x37c)]=this['_character'][_0x3333e1(0x24f)]();},Sprite_MapMotionTrail[_0x3124f3(0x2a7)][_0x3124f3(0x37d)]=function(){const _0x236456=_0x3124f3;this['bitmap']=this[_0x236456(0x3d8)][_0x236456(0x20b)];const _0x1b912d=this[_0x236456(0x3d8)][_0x236456(0x302)];this['_baseSprite'][_0x236456(0x302)]=0x0,this['_baseSprite']['updateCharacterFrame'](),this['_frame']=JSON[_0x236456(0x231)](JSON[_0x236456(0x144)](this[_0x236456(0x3d8)][_0x236456(0x1f2)])),this[_0x236456(0x3d8)][_0x236456(0x302)]=_0x1b912d,this[_0x236456(0x3d8)]['updateCharacterFrame'](),this['_refresh']();},Sprite_MapMotionTrail[_0x3124f3(0x2a7)]['motionTrailData']=function(){const _0x3119c3=_0x3124f3;return this[_0x3119c3(0x293)]['motionTrailData']();},Sprite_MapMotionTrail[_0x3124f3(0x2a7)][_0x3124f3(0x30f)]=function(){const _0x610377=_0x3124f3,_0x325906=this[_0x610377(0x1b2)]();this[_0x610377(0x238)]=_0x325906[_0x610377(0x2b2)]||0x1,this[_0x610377(0x269)](_0x325906[_0x610377(0x3ad)]),this[_0x610377(0x35b)](_0x325906[_0x610377(0x409)]),this['_opacityRate']=(_0x325906[_0x610377(0x256)]/0xff)[_0x610377(0x334)](0x0,0x1),this[_0x610377(0x255)]=(this[_0x610377(0x255)]*this[_0x610377(0x3ba)])[_0x610377(0x334)](0x0,0xff);},Sprite_MapMotionTrail[_0x3124f3(0x2a7)]['attachIconSprite']=function(){const _0x3eca2f=_0x3124f3;this[_0x3eca2f(0x3a4)](),this[_0x3eca2f(0x1dd)]();},Sprite_MapMotionTrail[_0x3124f3(0x2a7)]['createIconSprite']=function(){const _0x118af5=_0x3124f3;this[_0x118af5(0x258)]=new Sprite(),this[_0x118af5(0x258)]['bitmap']=ImageManager[_0x118af5(0x1cc)](_0x118af5(0x30e)),this[_0x118af5(0x258)]['bitmap'][_0x118af5(0x13f)]=![],this['_eventIconSprite'][_0x118af5(0x314)]['x']=0.5,this[_0x118af5(0x258)]['anchor']['y']=0x1,this[_0x118af5(0x412)](this[_0x118af5(0x258)]);},Sprite_MapMotionTrail[_0x3124f3(0x2a7)][_0x3124f3(0x1dd)]=function(){const _0x3d7f34=_0x3124f3,_0x1d1f99=this['_eventIconSprite'],_0x168093=this[_0x3d7f34(0x3d8)][_0x3d7f34(0x258)];_0x1d1f99['x']=_0x168093['x'],_0x1d1f99['y']=_0x168093['y'],_0x1d1f99[_0x3d7f34(0x1f2)]=JSON[_0x3d7f34(0x231)](JSON[_0x3d7f34(0x144)](_0x168093[_0x3d7f34(0x1f2)])),_0x1d1f99[_0x3d7f34(0x14a)]();},Sprite_MapMotionTrail[_0x3124f3(0x2a7)][_0x3124f3(0x26e)]=function(){const _0x258552=_0x3124f3;Sprite[_0x258552(0x2a7)][_0x258552(0x26e)][_0x258552(0x19a)](this),this['_ready']&&(this[_0x258552(0x16c)](),this[_0x258552(0x35d)]());},Sprite_MapMotionTrail[_0x3124f3(0x2a7)]['updateOpacity']=function(){const _0x17ac73=_0x3124f3;if(this[_0x17ac73(0x238)]<=0x0)return;const _0x47de21=this[_0x17ac73(0x238)];this[_0x17ac73(0x255)]=(this[_0x17ac73(0x255)]*(_0x47de21-0x1)+0x0)/_0x47de21,this[_0x17ac73(0x238)]--;if(this[_0x17ac73(0x238)]<=0x0){if(_0x17ac73(0x1ba)==='JJHUC')this[_0x17ac73(0x255)]=0x0;else{const _0x49d2b4=this[_0x17ac73(0x3ea)]()['note'];if(_0x49d2b4==='')return;this[_0x17ac73(0x1dc)](_0x49d2b4);}}},Sprite_MapMotionTrail[_0x3124f3(0x2a7)][_0x3124f3(0x35d)]=function(){const _0x50a8d1=_0x3124f3,_0x58f672=$gameMap[_0x50a8d1(0x160)](),_0x5cc694=$gameMap[_0x50a8d1(0x2d9)]();this['x']=Math[_0x50a8d1(0x33d)]($gameMap[_0x50a8d1(0x1bf)](this[_0x50a8d1(0x3dc)])*_0x58f672+_0x58f672/0x2),this['y']=Math[_0x50a8d1(0x33d)]($gameMap['adjustY'](this[_0x50a8d1(0x376)])*_0x5cc694+_0x5cc694),this['y']-=this[_0x50a8d1(0x430)]+this[_0x50a8d1(0x37c)]+0.001;},VisuMZ[_0x3124f3(0x246)]['Spriteset_Map_createLowerLayer']=Spriteset_Map['prototype'][_0x3124f3(0x335)],Spriteset_Map[_0x3124f3(0x2a7)][_0x3124f3(0x335)]=function(){const _0x4058c8=_0x3124f3;VisuMZ[_0x4058c8(0x246)]['Spriteset_Map_createLowerLayer'][_0x4058c8(0x19a)](this),this[_0x4058c8(0x14b)](),this[_0x4058c8(0x275)](),this[_0x4058c8(0x28e)]();},VisuMZ['MovementEffects'][_0x3124f3(0x396)]=Spriteset_Map[_0x3124f3(0x2a7)][_0x3124f3(0x26e)],Spriteset_Map[_0x3124f3(0x2a7)][_0x3124f3(0x26e)]=function(){const _0x4fb407=_0x3124f3;VisuMZ[_0x4fb407(0x246)][_0x4fb407(0x396)][_0x4fb407(0x19a)](this),this[_0x4fb407(0x251)](),this[_0x4fb407(0x17a)](),this['updateMotionTrailSprites']();},VisuMZ[_0x3124f3(0x246)]['Spriteset_Map_updateTilemap']=Spriteset_Map['prototype'][_0x3124f3(0x163)],Spriteset_Map[_0x3124f3(0x2a7)][_0x3124f3(0x163)]=function(){const _0x234483=_0x3124f3;VisuMZ[_0x234483(0x246)][_0x234483(0x171)]['call'](this),this[_0x234483(0x1a5)][_0x234483(0x3d0)]['x']=Math[_0x234483(0x157)](this[_0x234483(0x1a5)]['origin']['x']),this[_0x234483(0x1a5)][_0x234483(0x3d0)]['y']=Math[_0x234483(0x157)](this['_tilemap'][_0x234483(0x3d0)]['y']),this[_0x234483(0x352)]();},Spriteset_Map['prototype'][_0x3124f3(0x352)]=function(){const _0x25d832=_0x3124f3;if(!this[_0x25d832(0x19c)])return;const _0x2d60c4=this[_0x25d832(0x19c)][_0x25d832(0x2f2)];for(const _0x38ed6a of _0x2d60c4){if(!_0x38ed6a)continue;if(!_0x38ed6a[_0x25d832(0x42d)]())continue;if(!_0x38ed6a[_0x25d832(0x42d)]()['isTrueMapScrollLinked']())continue;_0x38ed6a[_0x25d832(0x35d)]();}},VisuMZ['MovementEffects'][_0x3124f3(0x3ed)]=Sprite_Picture['prototype'][_0x3124f3(0x35d)],Sprite_Picture['prototype']['updatePosition']=function(){const _0x504cf2=_0x3124f3;VisuMZ[_0x504cf2(0x246)][_0x504cf2(0x3ed)][_0x504cf2(0x19a)](this),this[_0x504cf2(0x42d)]()['isTrueMapScrollLinked']()&&(_0x504cf2(0x21c)!==_0x504cf2(0x21c)?(_0x5ef8c2[_0x504cf2(0x246)][_0x504cf2(0x2af)][_0x504cf2(0x19a)](this),this[_0x504cf2(0x345)]()):this[_0x504cf2(0x344)]());},Sprite_Picture[_0x3124f3(0x2a7)]['updateScrollLinkedPosition']=function(){const _0x33b780=_0x3124f3;if(!SceneManager[_0x33b780(0x424)])return;if(!SceneManager['_scene'][_0x33b780(0x3a6)])return;const _0x4d9a36=SceneManager[_0x33b780(0x424)][_0x33b780(0x3a6)]['_tilemap'];if(!_0x4d9a36)return;this['x']-=Math[_0x33b780(0x33d)](_0x4d9a36[_0x33b780(0x3d0)]['x']),this['y']-=Math[_0x33b780(0x33d)](_0x4d9a36['origin']['y']);},Spriteset_Map[_0x3124f3(0x2a7)]['createDustCloudBasics']=function(){const _0x46932f=_0x3124f3;this[_0x46932f(0x2b4)]=this[_0x46932f(0x2b4)]||[];const _0x256b35=$gameSystem[_0x46932f(0x30d)]();this[_0x46932f(0x34d)]=JSON[_0x46932f(0x231)](JSON[_0x46932f(0x144)](_0x256b35)),this[_0x46932f(0x3b4)]();},Spriteset_Map[_0x3124f3(0x2a7)][_0x3124f3(0x3a0)]=function(){const _0xd9fb4d=_0x3124f3;if(!this[_0xd9fb4d(0x34d)])this[_0xd9fb4d(0x14b)]();else{const _0x36191f=$gameSystem[_0xd9fb4d(0x30d)]();JSON['stringify'](this[_0xd9fb4d(0x34d)])!==JSON[_0xd9fb4d(0x144)](_0x36191f)&&this[_0xd9fb4d(0x14b)]();}},Spriteset_Map[_0x3124f3(0x2a7)]['createDustCloudBitmap']=function(){const _0x41ee4e=_0x3124f3,_0x4a1889=this['_dustCloudData'];if(_0x4a1889[_0x41ee4e(0x39b)]!==''){if(_0x41ee4e(0x3f1)!==_0x41ee4e(0x3f1))return this[_0x41ee4e(0x3e8)]=!![],this[_0x41ee4e(0x235)]=this[_0x41ee4e(0x3dc)],this[_0x41ee4e(0x245)]=this[_0x41ee4e(0x376)],![];else this[_0x41ee4e(0x261)]=ImageManager['loadPicture'](_0x4a1889[_0x41ee4e(0x39b)]);}else{if('CaiVI'===_0x41ee4e(0x154)){const _0xdc5f21=_0x4a1889[_0x41ee4e(0x34a)],_0xd7c881=_0xdc5f21*0x2,_0x2ec650=new Bitmap(_0xd7c881,_0xd7c881),_0xc3c4e8=_0x4a1889[_0x41ee4e(0x252)],_0x37a62b=_0x4a1889['fullness'];_0x2ec650['drawDustCloud'](_0xdc5f21,_0xc3c4e8,_0x37a62b),this[_0x41ee4e(0x261)]=_0x2ec650;}else _0x3ad13d[_0x41ee4e(0x3f2)]();}},Bitmap['prototype'][_0x3124f3(0x3ac)]=function(_0x421124,_0x24a5fa,_0x22eba0){const _0x217834=_0x3124f3;_0x22eba0=_0x22eba0[_0x217834(0x334)](0x0,0x1);const _0x529c0c=this[_0x217834(0x1b5)],_0xcaba49=0x168*(Math['PI']/0xb4),_0x4bb63a=_0x421124*0x2,_0x35f805=_0x529c0c[_0x217834(0x433)](_0x421124,_0x421124,0x0,_0x421124,_0x421124,_0x421124),_0x4ab22a=ColorManager[_0x217834(0x1ce)](_0x24a5fa,0x1),_0x5dbf9e=ColorManager[_0x217834(0x1ce)](_0x24a5fa,0x0);_0x35f805[_0x217834(0x2ea)](0x0,_0x4ab22a),_0x35f805[_0x217834(0x2ea)](_0x22eba0,_0x4ab22a),_0x35f805[_0x217834(0x2ea)](0x1,_0x5dbf9e),_0x529c0c[_0x217834(0x237)](),_0x529c0c[_0x217834(0x3d4)]=_0x35f805,_0x529c0c[_0x217834(0x164)](),_0x529c0c['moveTo'](_0x421124,_0x421124),_0x529c0c[_0x217834(0x24c)](_0x4bb63a,_0x421124),_0x529c0c[_0x217834(0x1f4)](_0x421124,_0x421124,_0x421124,0x0,_0xcaba49),_0x529c0c[_0x217834(0x24c)](_0x421124,_0x421124),_0x529c0c[_0x217834(0x365)](),_0x529c0c['restore'](),this[_0x217834(0x2f9)]['update']();},ColorManager['hexToRgba']=function(_0x17249f,_0x28cf64){const _0x11c582=_0x3124f3;let _0x26d5d4='';if(/^#([A-Fa-f0-9]{3}){1,2}$/[_0x11c582(0x2c0)](_0x17249f)){_0x26d5d4=_0x17249f['substring'](0x1)[_0x11c582(0x166)]('');_0x26d5d4['length']===0x3&&(_0x11c582(0x22a)!==_0x11c582(0x22a)?this[_0x11c582(0x169)]=_0x2b7508[_0x11c582(0x1bd)](0xd):_0x26d5d4=[_0x26d5d4[0x0],_0x26d5d4[0x0],_0x26d5d4[0x1],_0x26d5d4[0x1],_0x26d5d4[0x2],_0x26d5d4[0x2]]);while(_0x26d5d4['length']>0x6)_0x26d5d4['pop']();return _0x26d5d4='0x'+_0x26d5d4[_0x11c582(0x31c)](''),_0x11c582(0x2c8)+[(_0x26d5d4>>0x10&0xff)[_0x11c582(0x334)](0x0,0xff),(_0x26d5d4>>0x8&0xff)['clamp'](0x0,0xff),(_0x26d5d4&0xff)['clamp'](0x0,0xff)]['join'](',')+','+_0x28cf64[_0x11c582(0x334)](0x0,0x1)+')';}else{if(_0x11c582(0x2ce)!==_0x11c582(0x2ce))this[_0x11c582(0x241)]=_0x45494a[_0x11c582(0x246)][_0x11c582(0x162)][_0x11c582(0x37b)][_0x11c582(0x152)];else return'rgba(0,0,0,0)';}},Spriteset_Map[_0x3124f3(0x2a7)]['createDustCloudForTarget']=function(_0x26f273){const _0x464f9e=_0x3124f3,_0x4fd71d=this['findTargetSprite'](_0x26f273);if(!_0x4fd71d)return;this['checkDustCloudChanges']();const _0x33f6ab=this[_0x464f9e(0x34d)],_0x21434f=_0x33f6ab[_0x464f9e(0x185)],_0x564c73=new Sprite();_0x564c73[_0x464f9e(0x20b)]=this['_dustCloudBitmap'],_0x564c73[_0x464f9e(0x255)]=_0x33f6ab[_0x464f9e(0x1af)],_0x564c73[_0x464f9e(0x238)]=_0x33f6ab[_0x464f9e(0x394)],_0x564c73[_0x464f9e(0x314)]['x']=0.5,_0x564c73[_0x464f9e(0x314)]['y']=0x1,_0x564c73[_0x464f9e(0x177)]['x']=(Math[_0x464f9e(0x3dd)]()*_0x21434f)[_0x464f9e(0x334)](0.01,0.99),_0x564c73['scale']['y']=(Math[_0x464f9e(0x3dd)]()*_0x21434f)[_0x464f9e(0x334)](0.01,0.99),_0x564c73['_targetScaleX']=0x1-(Math['random']()*_0x21434f*0x2)[_0x464f9e(0x334)](0x0,0.8),_0x564c73[_0x464f9e(0x301)]=0x1-(Math['random']()*_0x21434f*0x2)['clamp'](0x0,0.8);const _0x116fc7=0.25,_0x438481=0.05;_0x564c73['_realX']=_0x26f273['_realX']+Math['random']()*_0x116fc7+Math[_0x464f9e(0x3dd)]()*_0x116fc7-_0x116fc7,_0x564c73[_0x464f9e(0x376)]=_0x26f273[_0x464f9e(0x376)]+Math['random']()*_0x438481+Math[_0x464f9e(0x3dd)]()*_0x438481-_0x438481,_0x564c73['z']=0x3,this[_0x464f9e(0x2b4)][_0x464f9e(0x223)](_0x564c73),this[_0x464f9e(0x1a5)]['addChild'](_0x564c73);},Spriteset_Map['prototype'][_0x3124f3(0x251)]=function(){const _0x41dda6=_0x3124f3,_0xb8834c=[];for(const _0x2f33a2 of this[_0x41dda6(0x2b4)]){if('WptkJ'!==_0x41dda6(0x25c)){if(!_0x2f33a2)continue;this['updateDustCloudSprite'](_0x2f33a2);if(_0x2f33a2[_0x41dda6(0x238)]<=0x0)_0xb8834c[_0x41dda6(0x223)](_0x2f33a2);}else this[_0x41dda6(0x3b7)][_0x41dda6(0x161)]=_0x4ef74b['$1'][_0x41dda6(0x166)](',')['map'](_0x4509ff=>(_0x4f9795(_0x4509ff)||0x0)[_0x41dda6(0x334)](0x0,0x7));}for(const _0x9d371e of _0xb8834c){this[_0x41dda6(0x1a5)][_0x41dda6(0x329)](_0x9d371e),this[_0x41dda6(0x2b4)]['remove'](_0x9d371e);}},Spriteset_Map[_0x3124f3(0x2a7)][_0x3124f3(0x3e0)]=function(_0xed293f){const _0x1690bc=_0x3124f3,_0x5bd20e=_0xed293f['_duration'],_0x8a157b=$gameMap['tileWidth'](),_0x2d92dc=$gameMap['tileHeight']();_0xed293f['x']=Math[_0x1690bc(0x33d)]($gameMap[_0x1690bc(0x1bf)](_0xed293f[_0x1690bc(0x3dc)])*_0x8a157b+_0x8a157b/0x2),_0xed293f['y']=Math[_0x1690bc(0x33d)]($gameMap[_0x1690bc(0x389)](_0xed293f[_0x1690bc(0x376)])*_0x2d92dc+_0x2d92dc),_0xed293f[_0x1690bc(0x177)]['x']=(_0xed293f[_0x1690bc(0x177)]['x']*(_0x5bd20e-0x1)+_0xed293f[_0x1690bc(0x1ac)])/_0x5bd20e,_0xed293f[_0x1690bc(0x177)]['y']=(_0xed293f[_0x1690bc(0x177)]['y']*(_0x5bd20e-0x1)+_0xed293f[_0x1690bc(0x301)])/_0x5bd20e,_0xed293f[_0x1690bc(0x255)]=_0xed293f[_0x1690bc(0x255)]*(_0x5bd20e-0x1)/_0x5bd20e,_0xed293f[_0x1690bc(0x238)]--;},Spriteset_Map[_0x3124f3(0x2a7)][_0x3124f3(0x275)]=function(){const _0x470250=_0x3124f3;this[_0x470250(0x1fc)]=this[_0x470250(0x1fc)]||[];},Spriteset_Map[_0x3124f3(0x2a7)]['createFootprintForTarget']=function(_0x1a6fc1){const _0x5d07ba=_0x3124f3,_0x565920=this[_0x5d07ba(0x36f)](_0x1a6fc1);if(!_0x565920)return;const _0x1064bf=new Sprite_Footprint(_0x1a6fc1);this[_0x5d07ba(0x1fc)][_0x5d07ba(0x223)](_0x1064bf),this[_0x5d07ba(0x1a5)][_0x5d07ba(0x412)](_0x1064bf);},Spriteset_Map[_0x3124f3(0x2a7)]['updateFootprints']=function(){const _0x3c071c=_0x3124f3,_0x54acc8=[];for(const _0x4de5d0 of this[_0x3c071c(0x1fc)]){if(!_0x4de5d0)continue;this[_0x3c071c(0x423)](_0x4de5d0);if(_0x4de5d0[_0x3c071c(0x238)]<=0x0)_0x54acc8['push'](_0x4de5d0);}for(const _0x204719 of _0x54acc8){if(_0x3c071c(0x3f7)===_0x3c071c(0x3f7))this[_0x3c071c(0x1a5)][_0x3c071c(0x329)](_0x204719),this[_0x3c071c(0x1fc)][_0x3c071c(0x167)](_0x204719);else{_0x2b1d52[_0x3c071c(0x2a0)](_0x35245f[_0x3c071c(0x16a)]);const _0x54ddf5=_0x1037f9(_0x33a7fa['$1'])['clamp'](0x0,0xff),_0x5997ec=_0x34f9cd[_0x3c071c(0x331)](0x1,_0x2994d9(_0x360d20['$2']));this['_footprints'][_0x3c071c(0x2b2)]['terrainTags'][_0x54ddf5]=_0x5997ec;}}},Spriteset_Map[_0x3124f3(0x2a7)]['updateFootprintSprite']=function(_0x486d92){const _0x4bb6ed=_0x3124f3,_0x12ddad=_0x486d92[_0x4bb6ed(0x238)];_0x486d92['opacity']=_0x486d92['opacity']*(_0x12ddad-0x1)/_0x12ddad,_0x486d92[_0x4bb6ed(0x238)]--;},Spriteset_Map['prototype']['createMotionTrailContainers']=function(){const _0x341e19=_0x3124f3;this[_0x341e19(0x1c1)]=[],this[_0x341e19(0x26d)]=[];},Spriteset_Map[_0x3124f3(0x2a7)]['updateMotionTrailSprites']=function(){const _0x409aac=_0x3124f3;if(!this[_0x409aac(0x1c1)])return;for(const _0x397109 of this[_0x409aac(0x26d)]){if(_0x409aac(0x175)==='zYKZI'){_0xf5d563=_0x153d10['substring'](0x1)[_0x409aac(0x166)]('');_0x4a2f70[_0x409aac(0x38a)]===0x3&&(_0x1ee1a8=[_0x11bb22[0x0],_0x353d58[0x0],_0x2694fe[0x1],_0x484960[0x1],_0x419409[0x2],_0xd2d9b8[0x2]]);while(_0x4d4894['length']>0x6)_0x467776[_0x409aac(0x321)]();return _0x584078='0x'+_0x42ff89[_0x409aac(0x31c)](''),_0x409aac(0x2c8)+[(_0x5440b7>>0x10&0xff)[_0x409aac(0x334)](0x0,0xff),(_0x45eb2e>>0x8&0xff)[_0x409aac(0x334)](0x0,0xff),(_0x4fdc1e&0xff)[_0x409aac(0x334)](0x0,0xff)][_0x409aac(0x31c)](',')+','+_0x49f3f9[_0x409aac(0x334)](0x0,0x1)+')';}else{if(!_0x397109)continue;this[_0x409aac(0x26d)]['remove'](_0x397109),this[_0x409aac(0x1a5)][_0x409aac(0x329)](_0x397109);}}for(const _0x183319 of this['_motionTrailSprites']){if(_0x409aac(0x425)===_0x409aac(0x425)){if(!_0x183319)continue;if(_0x183319['opacity']>0x0)continue;this[_0x409aac(0x1c1)][_0x409aac(0x167)](_0x183319),this[_0x409aac(0x26d)][_0x409aac(0x223)](_0x183319);}else{const _0x280e7f=_0x3c18a6-_0x258c5a,_0x3437a3=_0x2a8ca7*_0x359661,_0x5cc92c=_0x280e7f/(_0x3437a3||0.01);_0x59cf42[_0x409aac(0x416)](_0x5cc92c);}}};