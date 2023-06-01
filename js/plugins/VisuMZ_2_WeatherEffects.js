//=============================================================================
// VisuStella MZ - Weather Effects
// VisuMZ_2_WeatherEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_WeatherEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.WeatherEffects = VisuMZ.WeatherEffects || {};
VisuMZ.WeatherEffects.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.02] [WeatherEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Weather_Effects_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * RPG Maker MZ didn't come with too many weather effects. Only three: rain,
 * storm, and snow. This plugin will ramp that number up a considerable amount
 * and revise the way the original three weathers look, too. These new weather
 * patterns will help breathe life into your game for various scenarios and/or
 * cutscenes. The added control and customization options mean you can alter
 * their behaviors to your liking.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Assign multiple weathers up to a max of 20. For maps, there are 10 layers
 *   on top of the map and another 10 layers behind the tilemap (but above the
 *   parallax layer).
 * * Set certain maps to not show any weather through notetags. This allows you
 *   to avoid having to turn on and off your weather settings.
 * * The basic RPG Maker MZ weather patterns (Rain, Storm, and Snow) have been
 *   recreated to look better than before.
 * * Plugin Commands allow for game devs to place the newly added weather types
 *   with intricate levels of customization.
 * * Customization options available for weather patterns include spawn numbers
 *   control, spawn location control, opacity easing, trajectory properties,
 *   coloring options, overlay dimmer control, and more!
 * * There are 10 weather patterns for each of the 8-themed elements, alongside
 *   lots of preset icon-related weather patterns for over 80+ weather pattern
 *   types to choose from.
 * * More basic and easier to use directional flying icon weather patterns of
 *   varying speeds can be used to ease yourself into how weather patterns can
 *   be customized.
 * * Newly added weather patterns come with their own generated sprites.
 *   There's no need to use custom images or such unless you want to. Custom
 *   images can come in the form of icons or pictures. Some generated sprites
 *   include many variances (such as Snowflakes).
 * * Weather layers can now be placed on top of the map or below the map, aka
 *   between the tilemap and parallax layer.
 * * Plugin Commands allow the player to clear multiple weather layers, adjust
 *   the power of multiple weather layers, memorize, and even replay multiple
 *   weather layer patterns in a go.
 * * Up to 20 layers can be used for weather, all of each having different
 *   settings. 10 layers for above the map. 10 layers for below the map. This
 *   can be utilized to create more detailed weather effects than ever before.
 * * Common Events can be linked up with weather patterns, launching parallel
 *   whenever a weather particular respawns, allowing for special effects like
 *   screen flashes and/or playing sounds. This allows devs to match up certain
 *   weather patterns like thunder sounds and flashes with thunder bolts.
 * * A new option "Weather Density" has been added. The amount of weather
 *   sprites on screen can be tuned downward in order to reduce frame drops for
 *   players with weaker computers.
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
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them. Other things listed here are also worthy of
 * mentioning.
 *
 * ---
 *
 * Weather System Overwrite
 * 
 * As one would expect out of a plugin focused around changing weather effects,
 * the whole RPG Maker MZ weather system has been revamped. This means that a
 * lot of the default functions related to weather have been overwritten in
 * order to fulfill the demands of the plugin. Such demands include having more
 * control over the individual weather particles to the way the sprites are
 * handled and how the data persists for their behaviors.
 *
 * ---
 * 
 * Weather Layers
 * 
 * There are now multiple weather layers, allowing you to have multiple weather
 * patterns on simultaneously. Amongst the layers, there are upper and lower
 * layer types, too.
 * 
 * Upper layers are what RPG Maker MZ has, they exist above the tilemap. The
 * lower layers are new and exist below the tilemap but above the parallax
 * layer.
 * 
 * As such, weather effects below the tilemap won't be visible unless you are
 * using transparent tiles. This can be applied to windows or cliff tiles (for
 * some of these, you'll have to modify the tiles yourself). This effect can be
 * used to give a sense of depth, such as transparent windows observing a large
 * blizzard happening outside.
 * 
 * ---
 * 
 * Generated Weather Sprite Graphics
 * 
 * The default generated weather sprite graphics have been overwritten in favor
 * of better looking ones that we've made. Due to a technique that we've
 * created for this plugin, the generated weather sprites will also appear more
 * plentiful while keeping raw sprite counts low.
 * 
 * For those wondering, the "Rain", "Storm", and "Snow" weather types are the
 * default RPG Maker MZ weathers that we have changed. They can be accessed
 * through the usual event commands, or they can be accessed through Plugin
 * Commands.
 * 
 * Accessing these weather patterns through Plugin Commands gives you, the game
 * dev, more control over how they behave compared to the minimal control that
 * the default RPG Maker MZ event commands have.
 * 
 * ---
 * 
 * Custom Icons and Custom Pictures
 * 
 * If you plan on using custom icons or custom pictures, you might find it odd
 * that there is less volume of the weather sprite on the screen compared to
 * the generated graphics. This is due to a custering replication technique we
 * use for the sprite textures that make them appear more plentiful. To remedy
 * this, adjust the weight values for the icon variations and picture
 * variations to be higher than that of the generated sprites.
 * 
 * When designing custom icons and/or custom pictures for weather sprite
 * purposes, design them facing right at "0 degrees". This way, the angle will
 * align better and you can avoid using the "Visual Angle Offset" if you are
 * unfamiliar or troubled by offsets.
 * 
 * ---
 * 
 * RPG Maker MZ Tints
 * 
 * Weather patterns placed on the below tileset layer will be covered by RPG
 * Maker MZ's default tint layer, thus, affected by it. However, there's
 * nothing we can do about that one unlike the darkness overlay provided by the
 * Lighting Effects plugin where there's a workaround. Either you use the
 * Lighting Effects darkness overlay or you play work around tint usage in
 * regards to below tileset layer.
 * 
 * Weather patterns placed above the tileset layer will NOT be affected by RPG
 * Maker MZ's default tint layer nor will it be affected by the darkness
 * overlay from the Lighting Effects plugin. This is because not all effects
 * should be affected by it. If you do want to apply a tint to you, you can do
 * so via the custom settings and apply the tint manually. It's not applied
 * from the getgo because it's more efficient to make the upper weather sprites
 * unaffected first and applied later than the opposite.
 * 
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * Battle Core
 *
 * Those with the Battle Core can have weather effects show up in battle, too.
 * This does not happen without it. This is because the Battle Core has
 * provided the code infrastructure to support battle weather and this plugin
 * ties in with that code infrastructure better.
 *
 * ---
 *
 * ============================================================================
 * Keeping FPS Stable
 * ============================================================================
 * 
 * As this is a plugin that adds special effects to your game, you do have to
 * be mindful about how you use the various Weather Effects features or else
 * your game will face FPS drops.
 *
 * ---
 * 
 * Here are a few things to keep in mind:
 * 
 * 1. Hues and tones are expensive to process graphically. Using a lot of hue
 *    and/or tone variations on lots of weather sprites at the same time can
 *    eat up a chunk of the player's FPS. If you do plan on using hue and/or
 *    tone variations, keep the sprite count low by either using lower power
 *    settings or less sprites on the screen.
 * 
 * 2. Yes, this plugin provides 20 layers (10 for upper and 10 for lower), but
 *    that doesn't mean you should use all 20 at the same time at max power. Be
 *    moderate in how many weather layers you use at a time. Just because there
 *    is an option for the player to adjust the weather density doesn't mean it
 *    should be okay to go wild with weather layers.
 * 
 * 3. The majority of the default settings should be safe to use on their own,
 *    but that also suggests that they're used by themselves. You can usually
 *    combine three or four default weather patterns together across different
 *    layers, but do exercise restraint when customizing the settings from
 *    their default values and using more layers at a time.
 * 
 * 4. Avoid having too many sprites on the screen at once. Each weather sprite
 *    adds to the number of processes the game has to keep track of and update
 *    each individual frame. Especially weather patterns with sprites that
 *    alter light or affect it. While the plugin is optimized to allow handling
 *    of a decently large number of sprites within the hundreds, do not go
 *    overboard and use them with modesty.
 * 
 * 5. If you choose to not pre-render generated sprites at the start of the
 *    game, some weather patterns may take a bit of processing power to render
 *    generated sprites on the spot especially if there are a lot of sprites to
 *    work with. The pre-render option is the most ideal to use if you plan on
 *    using generated sprites. If you intend to use mostly icons or custom
 *    pictures, pre-rendering at the start of the game can be turned off.
 * 
 * ---
 * 
 * We are NOT responsible for irresponsible usage of this plugin that pushes
 * graphical processing to absolute limitations.
 * 
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_2_LightingEffects
 * 
 * Weather patterns placed on the lower layer will be affected by the darkness
 * overlay that the VisuStella MZ Lighting Effects plugin utilizes. This means
 * that even the supposively "brighter" weather patterns will be dimmed out
 * (such as the Flame Wall or Aurora to name a few). To deal with this, use the
 * Lighting Effects plugin's "Auto-Light Regions" and mark the parallax visible
 * tiles with those said regions.
 * 
 * Weather patterns placed on the upper layer will not be affected by the
 * darkness overlay in order to allow the weather have better contrast in
 * addition to following RPG Maker MZ's decision to not have weather affected
 * by tints either. If you want to tint the upper layer weather, you can add
 * the tint manually through the weather pattern's custom Image Settings and
 * apply a hue.
 * 
 * ---
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
 * === Convenience-Related Notetags ===
 * 
 * ---
 *
 * <No Weather>
 *
 * - Used for: Map Notetags
 * - Sets the map to not show any weather effects regardless of what's actually
 *   being set currently. Weather effects will resume once the player leaves
 *   the map and enters one that does not forbid weather effects.
 * - This is useful for indoor maps when you don't want to turn weather effects
 *   on and off constantly.
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
 * === Basic Plugin Commands ===
 * 
 * ---
 * 
 * BASIC: Adjust Weather Power
 * - Adjusts the power of the target weather layer(s).
 * 
 *   Layer(s):
 *   - Which weather layer(s) do you wish to adjust?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Adjust weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 * 
 *   Power:
 *   - Adjust power by how much?
 *   - Caps at 1 and 9.
 *   - You may use JavaScript code.
 * 
 *   Duration:
 *   - How many frames to fully adjust the weather?
 *   - You may use JavaScript code.
 * 
 *   Wait For Completion?
 *   - Wait for weather to completely adjust before moving on with the next
 *     event command?
 * 
 * ---
 *
 * BASIC: Clear Weather
 * - Clears out target weather layer(s).
 *
 *   Layer(s):
 *   - Which weather layer(s) do you wish to clear?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Clear weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 *
 *   Duration:
 *   - How many frames to fully clear the weather?
 *   - You may use JavaScript code.
 * 
 *   Wait For Completion?
 *   - Wait for weather to completely adjust before moving on with the next
 *     event command?
 *
 * ---
 * 
 * BASIC: Memorize Weather
 * - Memorizes the settings for target weather pattern(s) so that you can
 *   reuse it later.
 *
 *   Layer(s):
 *   - Which weather layer(s) do you wish to save?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Save weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 * 
 * ---
 * 
 * BASIC: Replay Memorized Weather
 * - Replays target memorized weather pattern(s).
 *
 *   Layer(s):
 *   - Which weather layer(s) do you wish to replay?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Replay weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 * 
 *   Duration:
 *   - How many frames to fully replay the weather?
 *   - You may use JavaScript code.
 * 
 *   Wait For Completion?:
 *   - Wait for weather to completely replay before moving on with the next
 *     event command?
 * 
 * ---
 * 
 * === Weather Pattern-Related Plugin Commands ===
 * 
 * ---
 *
 * Weather Pattern
 * - All weather patterns provided by this plugin use the following format.
 * Yes, all of them. This is to ensure that there is familiarity when modifying
 * one weather pattern and then moving to another and reducing the amount of
 * time needed to fiddle around with each of them. As such, the parameters will
 * affect each weather pattern the same exact way.
 * 
 *   ---
 *
 *   Main Settings:
 *
 *     Power:
 *     - What weather power do you wish to apply?
 *     - Use values between 1 and 9.
 *     - You may use JavaScript code.
 *
 *     Duration:
 *     - How many frames to fully change the weather?
 *     - You may use JavaScript code.
 *
 *     Wait For Completion?:
 *     - Wait for weather to completely change before moving on with the next
 *       event command?
 * 
 *   ---
 * 
 *   Layer Settings
 *
 *     Layer(s):
 *     - Which weather layer(s) do you wish to apply changes?
 *     - Use values between 1 and 10.
 *     - You may use JavaScript code.
 *
 *     Upper/Lower?:
 *     - Play the weather pattern above the tileset or below it?
 *     - You can select "both" to affect both.
 * 
 *   ---
 * 
 *   Customization
 *
 *     Custom Settings:
 *     - Adjust the custom settings involving this weather.
 *     - More information below:
 *
 * ---
 *
 * Custom Settings
 * - Each weather pattern's "Custom Settings" will have each of the following
 * options available to it.
 *
 *   Sprite Settings:
 *   - The general settings involving the weather sprites.
 *
 *   Dimmer Overlay:
 *   - Settings involving the dimmer overlay cast over the screen.
 *
 *   Image Settings:
 *   - Settings for the images used for the weather sprites.
 *   - Weathers with multiple images will be picked at random.
 *
 *   Special Effects:
 *   - Specialized effects that are turned on for specific weather types can
 *     be found here.
 *
 *   Trajectory Settings:
 *   - Settings used to determine the trajectory a weather sprite will take
 *     and how they behave on it.
 *
 * ---
 *
 * Sprite Settings
 * - The general settings involving the weather sprites.
 *
 *   Lifespan:
 *   - Lifespan of each weather sprite in frames.
 *
 *     Variance:
 *     - What variance is there to each lifespan value?
 *
 *     Spawn Location X:
 *     - What x location should the weather sprites appear?
 *
 *       Offset X:
 *       - Offset the spawn location by this many pixels.
 *       - Negative: left. Positive: right.
 *
 *     Spawn Location Y:
 *     - What y location should the weather sprites appear?
 *
 *       Offset Y:
 *       - Offset the spawn location by this many pixels.
 *       - Negative: up. Positive: down.
 *
 *     Map Bound?:
 *     - Do the weather sprites move with the map scrolling?
 *
 *   Starting Opacity:
 *   - Starting opacity of each weather sprite in frames.
 *
 *     Variance:
 *     - What variance is there to each starting opacity value?
 *
 *     Easing Type:
 *     - Select which easing type you wish to apply for opacity.
 *
 *     Fade In Time:
 *     - How many frames does it take for the sprite to fade in?
 *     - Use 0 to start immediately at full opacity.
 *
 *   Scale:
 *   - What is the scale of the sprite?
 *   - 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 *
 *     Variance:
 *     - What variance is there to the main scale value?
 *
 *     Ratio X:
 *     Ratio Y:
 *     - What is the ratio of this sprite's scale X/Y?
 *     - 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 *
 *   Total Sprite Minimum:
 *   - What is the minimum number of sprites on the screen?
 *
 *     Total Per Power:
 *     - Increase the total number of sprites per power by this.
 *     - Lowest power is 1.
 *     - Highest power is 9.
 *
 * ---
 *
 * Dimmer Overlay
 * - Settings involving the dimmer overlay cast over the screen.
 *
 *   Color:
 *   - Dimmer color. This uses #rrggbb format.
 *   - Check your color here: https://htmlcolorcodes.com/
 *
 *   Opacity Minimum:
 *   - What is the minimum opacity value for the dimmer?
 *
 *     Opacity Per Power:
 *     - What is the total opacity value per power for the dimmer?
 *
 * ---
 *
 * Image Settings
 * - Settings for the images used for the weather sprites.
 * - Weathers with multiple images will be picked at random.
 *
 *   Generated Image?:
 *   - Include the plugin-generated image for this weather type?
 *
 *     Weight:
 *     - What is the random weight?
 *     - The higher the value, the more likely this is to be used
 *       when randomized.
 *
 *   Icon(s):
 *   - Which icons do you wish to include for the images to appear as?
 *   - When using icons, icons are best made when aligned to the right at
 *     "0 degrees". This is for settings like angle alignment tracking.
 *
 *     Weight:
 *     - What is the random weight?
 *     - The higher the value, the more likely this is to be used
 *       when randomized.
 *
 *   Picture(s):
 *   - Which pictures do you wish to include for the images to appear as?
 *   - When using pictures, pictures are best made when aligned to the right at
 *     "0 degrees". This is for settings like angle alignment tracking.
 *
 *     Weight:
 *     - What is the random weight?
 *     - The higher the value, the more likely this is to be used
 *       when randomized.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the weather sprite?
 *
 *   Hue Variations:
 *   - What hue variations will be randomly selected from?
 *   - Use a value between 0 and 360.
 *
 *   Tone Variations:
 *   - What tone variations will be randomly selected from?
 *   - Format for each: [Red, Green, Blue, Gray]
 * 
 *   *NOTE*
 * 
 *   Hues and tones are expensive to process graphically. Using a lot of hue
 *   and/or tone variations on lots of weather sprites at the same time can
 *   eat up a chunk of the player's FPS. If you do plan on using hue and/or
 *   tone variations, keep the sprite count low by either using lower power
 *   settings or less sprites on the screen.
 *
 * ---
 *
 * Special Effects
 * - Specialized effects that are turned on for specific weather types can
 * be found here.
 *
 *   Allow Visible Player?:
 *   - Make the player more visible by reducing the opacity of nearby weather
 *     sprites?
 *
 *   Flat Fluttering?:
 *   - Is the object flat and flutters in the wind?
 *   - Or does the object have volume and doesn't?
 *
 *   Longevity:
 *   - Weather effects with longevity don't expire until the weather pattern
 *     type is changed.
 *
 *   Hue Sway Range:
 *   - How much should the hue sway back and forth?
 *   - JavaScript code can be used.
 *
 *     Hue Sway Speed:
 *     - What speed does the angle sway?
 *     - Lower is slower.
 *     - Higher is faster.
 *     - JavaScript code can be used.
 *
 *   Respawn Common Event:
 *   - Play a specific Common Event when this event respawns?
 *   - The Common Event will run as a Once Parallel.
 *
 *   Respawn Delay Minimum:
 *   - Is there a delay to the respawn?
 *   - This is how many frames the sprite must wait before respawning.
 *
 *     RNG Delay Per Power:
 *     - How many randomized frames of delay per power must be waited?
 *
 *   Scale In:
 *   - What scale ratio should the sprite spawn in at?
 *   - Use 1.0 for regular ratios.
 *   - You may use JavaScript.
 *
 *     Duration:
 *     - How many frames should the scale in effect take?
 *     - Scale in will always head towards 1.0.
 *
 *   Scale Out:
 *   - What scale ratio should the sprite despawn out at?
 *   - Use 1.0 for regular ratios.
 *   - You may use JavaScript.
 *
 *     Duration:
 *     - How many frames should the scale out effect take?
 *     - Scale in will usually head from 1.0.
 *
 *   Custom Finish:
 *
 *     Fireworks Finish?:
 *     - At the end of the weather particle's lifespan, finish up with a
 *       fireworks explosion?
 *
 *     Sparkle Finish?:
 *     - At the end of the weather particle's lifespan, finish up with a
 *       fabulous spinning sparkle effect?
 *
 * ---
 *
 * Trajectory Settings
 * - Settings used to determine the trajectory a weather sprite will take
 *   and how they behave on it.
 *
 *   Trajectory Type:
 *   - What trajectory type is used?
 *     - Both Map and Battle
 *       - Straight
 *       - Frozen
 *     - Map Only
 *       - Player-Locked
 *       - Follower-Locked
 *       - Event-Locked
 *     - Battle Only
 *       - Actor-Locked
 *       - Enemy-Locked
 *       - User-Locked
 *       - Target-Locked
 * 
 *     Locked ID/Index:
 *     - For locked trajectories only. Input the follower index.
 *     - Or ID of event, actor, enemy.
 *
 *     Offset X (Locked):
 *     - For locked trajectories only.
 *     - Negative: left. Positive: right.
 *
 *     Offset Y (Locked):
 *     - For locked trajectories only.
 *     - Negative: up. Positive: down.
 *
 *   Speed:
 *   - What speed is the sprite moving at? Lower is slower.
 *   - Higher is faster.
 *   - JavaScript code can be used.
 *
 *     Speed Variance:
 *     - What variance is there to the speed value?
 *
 *   Angle:
 *   - What angle (0 to 360) is the sprite moving toward?
 *   - JavaScript code can be used.
 *
 *     Align Angle?:
 *     - Should the sprite rotate itself according to the angle it is moving at
 *       across the screen?
 *
 *     Angle Variance:
 *     - What variance is there to the base angle?
 *
 *     Visual Angle Offset:
 *     - Offset the visual by this many degrees. Used for images that aren't
 *       made aligned with 0 degrees facing left.
 *
 *     Angle Arc:
 *     - How should the trajectory arc when the sprite moves?
 *     - JavaScript code can be used.
 *
 *     Angle Sway Range:
 *     - How much should the angle sway as the sprite moves?
 *     - JavaScript code can be used.
 *
 *       Angle Sway Speed:
 *       - What speed does the angle sway? Lower is slower.
 *       - Higher is faster.
 *       - JavaScript code can be used.
 *
 *   Spin Speed:
 *   - What speed do the sprites spin?
 *   - JavaScript code can be used.
 *   - Some generated weather pattern sprites use the clustering replication
 *     technique. This allows the weather pattern to appear more full and have
 *     higher volume while keeping sprite counts low. As such, not all weather
 *     patterns will spin the way you expect. This is not a bug.
 *
 *     Spin Speed Variance:
 *     - What variance is there to the spin speed?
 *
 *     Reverse Spin?:
 *     - Can the spin go in the reverse direction?
 *
 *   X Sway Range:
 *   Y Sway Range:
 *   - How much should the X/Y value sway as the sprite moves?
 *   - JavaScript code can be used.
 *
 *     Sway Speed:
 *     - What speed does the sway move? Lower is slower.
 *     - Higher is faster. JavaScript code can be used.
 *
 * ---
 * 
 * === Weather Pattern-Type Plugin Commands ===
 * 
 * Each of the weather patterns below all use the same plugin command structure
 * as listed in the section above. They are separated in various themes to help
 * better organize them and quickly find them. Each weather pattern has their
 * own generated image type that they use.
 * 
 * ---
 * 
 * Fire-Themed
 * 
 *   FIRE: Embers:
 *   - Oh, Ember, you will remember. So warm and tender.
 *   - Embers rise off from the ground upward.
 *
 *   FIRE: Fireflies:
 *   - Take my love, take my land, take me where I cannot stand.
 *   - Fireflies will spawn and float around.
 *
 *   FIRE: Firestorm:
 *   - This is fine.
 *   - Rain fiery bolts of flames from the heavens!
 *
 *   FIRE: Fireworks:
 *   - You just gotta ignite the light and let it shine!
 *   - A shot of fire flies up and blows up into a flower.
 *
 *   FIRE: Flame Haze:
 *   - Flaming Hair Blazing Eyes!
 *   - A fiery smoke clouds the screen!
 *
 *   FIRE: Flame Wall:
 *   - Is it me, or is it hot in here? Oh, it's me.
 *   - A wall of flames appears on the bottom part of the screen.
 *
 *   FIRE: Heat Clouds:
 *   - Fiery conglomerations of clouds.
 *   - Heat clouds scorch the top of the screen.
 *
 *   FIRE: Meteor Shower:
 *   - Clustering wishes will become a new shining star!
 *   - A nonstop swarm of meteors fall in the night sky.
 *
 *   FIRE: Shooting Stars:
 *   - Make a wish! A wholesome one, please.
 *   - Shooting stars appear over the horizon of the night sky.
 *
 *   FIRE: Sunlight Beams:
 *   - Aka crepuscular rays. Makes any day brighter!
 *   - Sun beams shine down from the heavens.
 * 
 * ---
 *
 * Ice-Themed
 *
 *   ICE: Arctic Gleam:
 *   - Oh, erie bluish glow of the arctic.
 *   - Illuminate the frozen land below!
 *
 *   ICE: Aurora Borealis:
 *   - Also known as the Northern Lights.
 *   - Auroras dance across the top of the screen.
 *
 *   ICE: Blizzard:
 *   - Let it go, let it go! Can't hold it back anymore!
 *   - Concentrated snowfall covers the screen.
 *
 *   ICE: Diamond Dust:
 *   - Diamond dust falls from the skies.
 *   - Slightly illuminated ice particles descend from above.
 *
 *   ICE: Glistening Ice:
 *   - Walkin' on thin ice!
 *   - Ice particles sparkle from all around.
 *
 *   ICE: Ice Fog:
 *   - Yo! VIP! Let's Kick it!
 *   - Frozen fog covers the whole screen.
 *
 *   ICE: Sleet:
 *   - Slightly heavier and more solid than snow!
 *   - Frozen ice crystals snow down from above.
 *
 *   ICE: Snow:
 *   - Brace yourselves! Winter is coming!
 *   - Snow falls from the sky and flutters downward.
 *
 *   ICE: Snow Clouds:
 *   - Icy gatherings of clouds ready to deliver snow.
 *   - Snow clouds blanket the top of the screen.
 *
 *   ICE: Snowflakes:
 *   - Snowflake! Snowflake! Little snowflake!
 *   - Generated snowflakes will have random patterns.
 *
 * ---
 *
 * Thunder-Themed
 *
 *   THUNDER: Discharge:
 *   - Danger! Danger! High voltage!
 *   - Electricity discharges from the sides of the screen.
 *
 *   THUNDER: Plasma Bolt:
 *   - A horizontal bolt of electricity! From left to right!
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Plasma Surge:
 *   - The windows are becoming stained with a nostalgic color.
 *   - Nonstop plasma bolts flood the screen.
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Purple Haze:
 *   - Purple haze all around. Don't know if I'm coming up or down.
 *   - A purple fog blankets the whole screen.
 *
 *   THUNDER: Spider Lightning:
 *   - Nothing to do with spiders.
 *   - Bolts expand outwards from a target.
 *
 *   THUNDER: Static Charge:
 *   - Snap! Crackle! Pop!
 *   - Highly charged target emits static.
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Thunder Bolt:
 *   - More than just an expensive charging cable. Giant bolt flashes
 *     from above!
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Thunder Clouds:
 *   - These thunderclouds, oh no, no!
 *   - Thunder-ready clouds fly atop the top of the screen.
 *
 *   THUNDER: Thunder Surge:
 *   - When you walk away, you don't hear me say.
 *   - Nonstop thunder bolts scour the skies.
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Ultraviolet Beams:
 *   - Get out some of that SPF 100+!
 *   - (This is NOT real UV Light!)
 *   - Ultraviolet lights are coming from the sky!
 *
 * ---
 *
 * Water-Themed
 *
 *   WATER: Bubbles Rising:
 *   - Let's not burst your bubble!
 *   - Bubbles will rise up towards the top of the screen.
 *
 *   WATER: Cloud Burst:
 *   - A sudden massive deluge of rain!
 *   - A near vertical storm of massive volume.
 *
 *   WATER: Dripping Water:
 *   - Leaky ceilings? It's time to call a plumber.
 *   - Water droplets drip from above.
 *
 *   WATER: Mist:
 *   - Not to be confused with the video game. That has a Y.
 *   - A suspended mist covers the screen.
 *
 *   WATER: Rain:
 *   - Rain, rain, go away! Come again some other day!
 *   - Raindrops will fall from the sky all over the screen.
 *
 *   WATER: Rain Clouds:
 *   - It's raining men! Hallelujah! It's raining men, amen!
 *   - Rain-filled clouds hover menacingly at the top of the screen.
 *
 *   WATER: Rainbow Arch:
 *   - Somewhere over the rainbow~
 *   - A large rainbow arch appears in the corner of the screen.
 *
 *   WATER: Rising Steam:
 *   - Take more photos to train your selfie steam!
 *   - Steam vapor clouds rise from below.
 *
 *   WATER: Soap Bubbles:
 *   - I will try to blow a bubble that will last all day.
 *   - Soap bubbles float and hover around.
 *
 *   WATER: Storm:
 *   - A MIGHTY storm!
 *   - Large and long raindrops fall from the sky creating a storm.
 *
 * ---
 *
 * Earth-Themed
 *
 *   EARTH: Acid Rain:
 *   - Real acid rain doesn't glow in the dark.
 *   - But this one sure does.
 *
 *   EARTH: Crumbling Cave:
 *   - Do NOT grab any suspiciously placed rubies.
 *   - Bits and pieces of the cave ceiling crumble.
 *
 *   EARTH: Dust Clouds:
 *   - Darkened dust covers the surroundings!
 *   - Dust clouds will fill up the screen.
 *
 *   EARTH: Dust Storm:
 *   - Happens in places other than Nashville.
 *   - Darkened dust launches across the screen.
 *
 *   EARTH: House Dust:
 *   - Floating white dust particles with nowhere to go.
 *   - So they'll just make themselves at home.
 *
 *   EARTH: Pollution Clouds:
 *   - Absolutely disgusting colored pollution clouds.
 *   - Pollution clouds cover the top of the screen.
 *
 *   EARTH: Radioactive Beams:
 *   - Alert! Alert! Alert! Nuclear green lights!
 *   - Nuclear green lights irradiate from the clouds.
 *
 *   EARTH: Sand Clouds:
 *   - Straight from the Pyramids of Giza!
 *   - Sand clouds will surround everything!
 *
 *   EARTH: Sandstorm:
 *   - Darude! Sandstorm!
 *   - Sand blasts across the screen from one end to the other.
 *
 *   EARTH: Toxic Gas:
 *   - More toxic than the comments section of social media!
 *   - A foggy green gas blankets the screen.
 *
 * ---
 *
 * Wind-Themed
 *
 *   WIND: Autumn Leaves:
 *   - Red, yellow, orange, brown leaves are falling all around.
 *   - See them dance in the cool, fall air. 
 *
 *   WIND: Balloons:
 *   - You and I in a little toy shop, buy a bag balloons with the money
 *     we've got.
 *
 *   WIND: Cherry Blossoms:
 *   - The emblem of love and good luck.
 *   - Cherry blossom petals flutter down from above.
 *
 *   WIND: Dandelion Seeds:
 *   - Floating on the air. Never seem to care.
 *   - Dandelion seeds will flow up into the air.
 *
 *   WIND: Grassy Gust:
 *   - A gust of wind!
 *   - From right to left, grass flies with it.
 *   - Best when paired with a Tempest.
 *
 *   WIND: Green Leaves:
 *   - Leaf me alone!
 *   - Green leaves fall above, spinning round and round.
 *
 *   WIND: Pollen:
 *   - Bless you! Gesundheit! Salute!
 *   - A cloud of pollen grains travel about the screen.
 *
 *   WIND: Tempest:
 *   - Brought to you by a friendly slime.
 *   - Powerful gusts of wind blast across the screen.
 *
 *   WIND: White Clouds:
 *   - Not the main character from Final Fantasy VII.
 *   - Fluffy white clouds slowly drift across the upper screen.
 *
 *   WIND: Xtreme Speed:
 *   - Gotta go fast! Speedlines whip past!
 *   - Works best below the tileset layer.
 *
 * ---
 *
 * Light-Themed
 *
 *   LIGHT: Confetti:
 *   - Party like it's 1999!
 *   - Confetti of differing shapes drop from the sky.
 *
 *   LIGHT: Lens Flare:
 *   - Relive the amateur days from Photoshop!
 *   - A lens flare descends from the upper corner of the sky!
 *
 *   LIGHT: Light Burst:
 *   - Sometimes also known as Sun Bursts.
 *   - CAUTION: Bright lights!
 *   - Bright white light bursts out from a target.
 *
 *   LIGHT: Light Orbs:
 *   - Show me the light!
 *   - Light orbs fly round and round.
 *
 *   LIGHT: Pastel Brume:
 *   - Cute pastel colors forming a foggy brume.
 *   - Various bright colors cover the screen.
 *
 *   LIGHT: Prism Burst:
 *   - More color than a bag of candy!
 *   - CAUTION: Bright lights!
 *   - Lights of all colors expand out from a target.
 *
 *   LIGHT: Prismatic Gleam:
 *   - Our seven lights spring to the task!
 *   - Colors of all sorts shine from the skies high above.
 *
 *   LIGHT: Rainbow Clouds:
 *   - Colorful clouds dot the heavens.
 *   - Multi-colored clouds slowly drift across the upper screen.
 *
 *   LIGHT: Rainbow Orbs:
 *   - Taste the rainbow!
 *   - Multi-colored rainbow orbs spawn in and float about.
 *
 *   LIGHT: Star Fall:
 *   - You're a star. You're one in a million.
 *   - Stars fall out of the night sky spinning round and round.
 *
 * ---
 *
 * Dark-Themed
 *
 *   DARK: Ash Debris:
 *   - Gotta ketchum all.
 *   - Pieces of ash debris flutter through the air.
 *
 *   DARK: Ashfall:
 *   - But unlike thunder, this didn’t stop. It went on and on.
 *   - Volcanic ash pieces descend from the skies above.
 *
 *   DARK: Blood Rain:
 *   - It's actually a real phenomenon.
 *   - However, it's not really blood.
 *
 *   DARK: Dark Orbs:
 *   - Hello darkness, my old friend.
 *   - Dark orbs circle about the screen.
 *
 *   DARK: Fumes:
 *   - Don't inhale any!
 *   - Dark fume clouds plume from below.
 *
 *   DARK: Moonlight Beams:
 *   - Moonlight is the smuggler's enemy.
 *   - Light the path in the night sky by moonshine.
 *
 *   DARK: Shadow Siphon:
 *   - Drain all of the light! CAUTION: Dark lights!
 *   - Light from around is all drained into one area.
 *
 *   DARK: Smog:
 *   - Smoking is bad, mkay?
 *   - Smokey fog (aka Smog) cover the whole screen.
 *
 *   DARK: Smoke Clouds:
 *   - Accompanied by factories owned by evil corporations.
 *   - Smoke clouds blot out the sun.
 *
 *   DARK: Sootfall:
 *   - Try not to build a snowman out of this.
 *   - Smoke-contaminated snow falls from the sky.
 *
 * ---
 *
 * Icons-Related
 *
 *   SLOW: Flying Icons ↑:
 *   MEDIUM: Flying Icons ↑:
 *   FAST: Flying Icons ↑:
 *   - Icons fly to the top at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↗:
 *   MEDIUM: Flying Icons ↗:
 *   FAST: Flying Icons ↗:
 *   - Icons fly upper right at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons →:
 *   MEDIUM: Flying Icons →:
 *   FAST: Flying Icons →:
 *   - Icons fly to the right at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↘:
 *   MEDIUM: Flying Icons ↘:
 *   FAST: Flying Icons ↘:
 *   - Icons fly lower right at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↓:
 *   MEDIUM: Flying Icons ↓:
 *   FAST: Flying Icons ↓:
 *   - Icons fly to the bottom at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↙:
 *   MEDIUM: Flying Icons ↙:
 *   FAST: Flying Icons ↙:
 *   - Icons fly lower left at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ←:
 *   MEDIUM: Flying Icons ←:
 *   FAST: Flying Icons ←:
 *   - Icons fly to the left at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↖:
 *   MEDIUM: Flying Icons ↖:
 *   FAST: Flying Icons ↖:
 *   - Icons fly upper left at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ●:
 *   MEDIUM: Flying Icons ●:
 *   FAST: Flying Icons ●:
 *   - Icons hover at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General Settings for the Weather Effects plugin. There aren't too many
 * settings to adjust here as the majority of the customization options exist
 * within each weather pattern-related Plugin Command instead. However, the
 * options here allow you to control what the weather patterns do not.
 *
 * ---
 * 
 * General Settings
 * 
 *   Pre-Render Generated?:
 *   - Pre-render generated images for weather patterns?
 *   - This reduces lag for on-demand weather patterns.
 * 
 *     # of Variations:
 *     - How many variations of each rendered weather pattern do you want?
 * 
 *   Smooth Icons?
 *   - Smooth out the icons used for weather sprites?
 *   - Or keep them pixelated?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Settings
 * ============================================================================
 *
 * There is only one option added through this plugin and it's an option that
 * allows the player to adjust what % of weather sprites are visible on the
 * screen at a time. This is helpful for those who may have weaker computers or
 * those who may find the weather patterns to be a bit intrusive at times.
 * 
 * The number of minimum weather sprites will always be shown. The number of
 * added sprites based on power will be what the weather density value affects.
 * 
 * If you are using the Options Core, the settings found in the Options Core
 * need to be managed instead of these as these will be overwritten in favor of
 * what the Options Core will offer.
 *
 * ---
 * 
 * Options
 * 
 *   Add Option?:
 *   - Add the 'Weather Density' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
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
 * * Olivia
 * * Arisu
 * * Irina
 * * Yanfly
 * * Aries
 * 
 * Creazilla Open-Source
 * * Many of the canvas drawings are made by various artists under Creazilla.
 * * These are under the Creazilla Open-Source License.
 * * They are free for personal and commercial use. No attribution required.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.02: June 2, 2022
 * * Bug Fixes!
 * ** "ICE: Aurora Borealis" default values are now fixed to properly convey
 *    proper verticality and angle. If you have the "ICE: Aurora Borealis"
 *    Plugin Command already in place, delete it and replace it with a new one
 *    for the newer default values. Fix made by Irina.
 * * Documentation Update!
 * ** Updated descriptions for "Upper/Lower?" parameters to the following:
 * *** In battle, they are above the battlers and behind the battlebacks.
 * * Feature Update!
 * ** In battle, the "lower" layer is now moved to behind the battlebacks.
 *    Update made by Irina.
 * 
 * Version 1.01: March 31, 2022
 * * Bug Fixes!
 * ** Fixed a problem that caused any weather effects on layers 9 and 10 to
 *    cancel each other out. Fix made by Irina.
 * 
 * Version 1.00 Official Release Date: April 6, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Basic
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Basic
 * @text Category - Basic
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicAdjustWeatherPower
 * @text BASIC: Adjust Weather Power
 * @desc Adjusts the power of the target weather layer(s).
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to adjust?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Adjust weather layer(s) from the upper or lower layers?
 * @default upper
 * 
 * @arg Power:eval
 * @text Power
 * @desc Adjust power by how much? Caps at 1 and 9.
 * You may use JavaScript code.
 * @default +1
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc How many frames to fully adjust the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely adjust before moving on
 * with the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicClearWeather
 * @text BASIC: Clear Weather
 * @desc Clears out target weather layer(s).
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to clear?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1","2","3","4","5","6","7","8","9","10"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Clear weather layer(s) from the upper or lower layers?
 * @default both
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc How many frames to fully clear the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely clear before moving on
 * with the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicMemorizeWeather
 * @text BASIC: Memorize Weather
 * @desc Memorizes the settings for target weather pattern(s) so
 * that you can reuse it later.
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to save?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1","2","3","4","5","6","7","8","9","10"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc save weather layer(s) from the upper or lower layers?
 * @default both
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicReplayMemory
 * @text BASIC: Replay Memorized Weather
 * @desc Replays target memorized weather pattern(s).
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to replay?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1","2","3","4","5","6","7","8","9","10"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Replay weather layer(s) from the upper or lower layers?
 * @default both
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc How many frames to fully replay the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely replay before moving on
 * with the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Fire
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Fire
 * @text Category - Fire-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Embers
 * @text FIRE: Embers
 * @desc Oh, Ember, you will remember. So warm and tender.
 * Embers rise off from the ground upward.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Fireflies
 * @text FIRE: Fireflies
 * @desc Take my love, take my land, take me where I cannot stand.
 * Fireflies will spawn and float around.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Firestorm
 * @text FIRE: Firestorm
 * @desc This is fine.
 * Rain fiery bolts of flames from the heavens!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"245\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Fireworks
 * @text FIRE: Fireworks
 * @desc You just gotta ignite the light and let it shine!
 * A shot of fire flies up and blows up into a flower.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"20\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"lower 70%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"245\",\"opacityVariance:num\":\"10\",\"opacityEasingType:str\":\"InCirc\",\"opacityFadeInTime:num\":\"4\",\"scale:num\":\"0.8\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"5\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[\\\"30\\\",\\\"60\\\",\\\"90\\\",\\\"120\\\",\\\"150\\\",\\\"180\\\",\\\"210\\\",\\\"240\\\",\\\"270\\\",\\\"300\\\",\\\"330\\\"]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"true\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_FlameHaze
 * @text FIRE: Flame Haze
 * @desc Flaming Hair Blazing Eyes!
 * A fiery smoke clouds the screen!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"12\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#f26c4f\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.2\",\"speedVariance:eval\":\"0.3\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_FlameWall
 * @text FIRE: Flame Wall
 * @desc Is it me, or is it hot in here? Oh, it's me.
 * A wall of flames appears on the bottom part of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"lower 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.5\",\"totalMinimum:num\":\"50\",\"totalPerPower:num\":\"25\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"32\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"32\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_HeatClouds
 * @text FIRE: Heat Clouds
 * @desc Fiery conglomerations of clouds.
 * Heat clouds scorch the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"160\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_MeteorShower
 * @text FIRE: Meteor Shower
 * @desc Clustering wishes will become a new shining star!
 * A nonstop swarm of meteors fall in the night sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"6\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"0.6\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"15\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"true\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"4\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"3\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_ShootingStar
 * @text FIRE: Shooting Stars
 * @desc Make a wish! A wholesome one, please.
 * Shooting stars appear over the horizon of the night sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"6\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"0.8\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"300\",\"respawnDelayRngPerPower:eval\":\"-30\",\"sparkleFinish:eval\":\"true\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"4\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"3\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_SunBeams
 * @text FIRE: Sunlight Beams
 * @desc Aka crepuscular rays. Makes any day brighter!
 * Sun beams shine down from the heavens.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Ice
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Ice
 * @text Category - Ice-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_ArcticBeam
 * @text ICE: Arctic Gleam
 * @desc Oh, erie bluish glow of the arctic.
 * Illuminate the frozen land below!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Aurora
 * @text ICE: Aurora Borealis
 * @desc Also known as the Northern Lights.
 * Auroras dance across the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper border\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"32\",\"scale:num\":\"0.90\",\"scaleVariance:num\":\"0.10\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"1\",\"ySwaySpeed:eval\":\"0.005\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Blizzard
 * @text ICE: Blizzard
 * @desc Let it go, let it go! Can't hold it back anymore!
 * Concentrated snowfall covers the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"200\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#cccccc\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"12\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"16\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"205\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"12\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_DiamondDust
 * @text ICE: Diamond Dust
 * @desc Diamond dust falls from the skies.
 * Slightly illuminated ice particles descend from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#c69c6d\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_GlisteningIce
 * @text ICE: Glistening Ice
 * @desc Walkin' on thin ice!
 * Ice particles sparkle from all around.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"45\",\"lifespanVariance:num\":\"15\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuad\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"4\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"90\",\"respawnDelayRngPerPower:eval\":\"-6\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"2\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_IceFog
 * @text ICE: Ice Fog
 * @desc Yo! VIP! Let's Kick it!
 * Frozen fog covers the whole screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"8\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00e1e1\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Sleet
 * @text ICE: Sleet
 * @desc Slightly heavier and more solid than snow!
 * Frozen ice crystals snow down from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"140\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"8\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"220\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Snow
 * @text ICE: Snow
 * @desc Brace yourselves! Winter is coming!
 * Snow falls from the sky and flutters downward.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"160\",\"opacityVariance:num\":\"20\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"220\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_SnowClouds
 * @text ICE: Snow Clouds
 * @desc Icy gatherings of clouds ready to deliver snow.
 * Snow clouds blanket the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00e1e1\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Snowflakes
 * @text ICE: Snowflakes
 * @desc Snowflake! Snowflake! Little snowflake!
 * Generated snowflakes will have random patterns.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"220\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"5\",\"totalPerPower:num\":\"5\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"230\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"2\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Thunder
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Thunder
 * @text Category - Thunder-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Discharge
 * @text THUNDER: Discharge
 * @desc Danger! Danger! High voltage!
 * Electricity discharges from the sides of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"sides 10%\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"0.5\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.5\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"300\",\"respawnDelayRngPerPower:eval\":\"-30\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"45\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_PlasmaBolt
 * @text THUNDER: Plasma Bolt
 * @desc A horizontal bolt of electricity! From left to right!
 * Best used with a Respawn Common Event.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"center screen\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"either 40%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"600\",\"respawnDelayRngPerPower:eval\":\"-60\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_PlasmaSurge
 * @text THUNDER: Plasma Surge
 * @desc The windows are becoming stained with a nostalgic color.
 * Nonstop plasma bolts flood the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"center screen\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"either 40%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"30\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_PurpleHaze
 * @text THUNDER: Purple Haze
 * @desc Purple haze all around. Don't know if I'm coming up or down.
 * A purple fog blankets the whole screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"96\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#8560a8\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_SpiderLightning
 * @text THUNDER: Spider Lightning
 * @desc Nothing to do with spiders.
 * Bolts expand outwards from a target.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"5\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-8\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_StaticCharge
 * @text THUNDER: Static Charge
 * @desc Snap! Crackle! Pop!
 * Highly charged target emits static.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"0.5\",\"scaleVariance:num\":\"0.25\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.5\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"300\",\"respawnDelayRngPerPower:eval\":\"-30\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-12\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Thunderbolt
 * @text THUNDER: Thunder Bolt
 * @desc More than just an expensive charging cable. Giant bolt
 * flashes from above! Best used with a Respawn Common Event.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"sides 30%\",\"spawnLocationY:str\":\"middle screen\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"600\",\"respawnDelayRngPerPower:eval\":\"-60\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Thunderclouds
 * @text THUNDER: Thunder Clouds
 * @desc These thunderclouds, oh no, no!
 * Thunder-ready clouds fly atop the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#605ca8\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Thundersurge
 * @text THUNDER: Thunder Surge
 * @desc When you walk away, you don't hear me say.
 * Nonstop thunder bolts scour the skies.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"sides 30%\",\"spawnLocationY:str\":\"middle screen\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"30\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_UltravioletBeams
 * @text THUNDER: Ultraviolet Beams
 * @desc Get out some of that SPF 100+! (This is NOT real UV Light!)
 * Ultraviolet lights are coming from the sky!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Water
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Water
 * @text Category - Water-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Bubbles
 * @text WATER: Bubbles Rising
 * @desc Let's not burst your bubble!
 * Bubbles will rise up towards the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00aaaa\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_CloudBurst
 * @text WATER: Cloud Burst
 * @desc A sudden massive deluge of rain!
 * A near vertical storm of massive volume.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"4\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#303030\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"8\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"18\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_DrippingWater
 * @text WATER: Dripping Water
 * @desc Leaky ceilings? It's time to call a plumber.
 * Water droplets drip from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"3\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"60\",\"respawnDelayRngPerPower:eval\":\"-6\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Mist
 * @text WATER: Mist
 * @desc Not to be confused with the video game. That has a Y.
 * A suspended mist covers the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Rain
 * @text WATER: Rain
 * @desc Rain, rain, go away! Come again some other day!
 * Raindrops will fall from the sky all over the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#505050\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"angle:eval\":\"255\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_RainClouds
 * @text WATER: Rain Clouds
 * @desc It's raining men! Hallelujah! It's raining men, amen!
 * Rain-filled clouds hover menacingly at the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#505050\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_RainbowArch
 * @text WATER: Rainbow Arch
 * @desc Somewhere over the rainbow~
 * A large rainbow arch appears in the corner of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"right border\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"lower border\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"12\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.30\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"1\",\"totalPerPower:num\":\"0\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"6\",\"angleSwaySpeed:eval\":\"0.0025\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_RisingSteam
 * @text WATER: Rising Steam
 * @desc Take more photos to train your selfie steam!
 * Steam vapor clouds rise from below.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"120\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"0.5\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"4\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"90\",\"respawnDelayRngPerPower:eval\":\"-9\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.0\",\"scaleInDuration:eval\":\"45\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_SoapBubbles
 * @text WATER: Soap Bubbles
 * @desc I will try to blow a bubble that will last all day.
 * Soap bubbles float and hover around.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"20\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.0\",\"scaleInDuration:eval\":\"30\",\"scaleOut:eval\":\"0.0\",\"scaleOutDuration:eval\":\"30\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.005\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.005\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Storm
 * @text WATER: Storm
 * @desc A MIGHTY storm!
 * Large and long raindrops fall from the sky creating a storm.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#404040\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"16\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"245\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Earth
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Earth
 * @text Category - Earth-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_AcidRain
 * @text EARTH: Acid Rain
 * @desc Real acid rain doesn't glow in the dark.
 * But this one sure does.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"120\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#c4df9b\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"255\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_CrumblingCave
 * @text EARTH: Crumbling Cave
 * @desc Do NOT grab any suspiciously placed rubies.
 * Bits and pieces of the cave ceiling crumble.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper border\",\"mapBound:eval\":\"false\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"OutQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.00\",\"scaleVariance:num\":\"0.00\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.5\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"8\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"8\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_DustClouds
 * @text EARTH: Dust Clouds
 * @desc Darkened dust covers the surroundings!
 * Dust clouds will fill up the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"72\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#a67c52\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_DustStorm
 * @text EARTH: Dust Storm
 * @desc Happens in places other than Nashville.
 * Darkened dust launches across the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#a67c52\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_HouseDust
 * @text EARTH: House Dust
 * @desc Floating white dust particles with nowhere to go.
 * So they'll just make themselves at home.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.0025\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.0025\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_PollutionClouds
 * @text EARTH: Pollution Clouds
 * @desc Absolutely disgusting colored pollution clouds.
 * Pollution clouds cover the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_RadioactiveBeams
 * @text EARTH: Radioactive Beams
 * @desc Alert! Alert! Alert! Nuclear green lights!
 * Nuclear green lights irradiate from the clouds.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#00ff00\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_SandClouds
 * @text EARTH: Sand Clouds
 * @desc Straight from the Pyramids of Giza!
 * Sand clouds will surround everything!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"12\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#c69c6d\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_Sandstorm
 * @text EARTH: Sandstorm
 * @desc Darude! Sandstorm!
 * Sand blasts across the screen from one end to the other.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocation:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#c69c6d\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_ToxicGas
 * @text EARTH: Toxic Gas
 * @desc More toxic than the comments section of social media!
 * A foggy green gas blankets the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"type:str":"straight","lockedOffsetX:eval":"+0","lockedOffsetY:eval":"+0","speed:eval":"1.2","speedVariance:eval":"0.3","angle:eval":"180","alignAngle:eval":"false","angleVariance:eval":"2","angleOffset:eval":"+0","angleArc:eval":"+0","angleSwayRange:eval":"0","angleSwaySpeed:eval":"0.01","spinSpeed:eval":"+0","spinSpeedVariance:eval":"0","reverseSpin:eval":"false","xSwayRange:eval":"0","xSwaySpeed:eval":"0.01","ySwayRange:eval":"0","ySwaySpeed:eval":"0.01"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Wind
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Wind
 * @text Category - Wind-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_AutumnLeaves
 * @text WIND: Autumn Leaves
 * @desc Red, yellow, orange, brown leaves are falling all around.
 * See them dance in the cool, fall air. 
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.40\",\"scaleVariance:num\":\"0.10\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_Balloons
 * @text WIND: Balloons
 * @desc You and I in a little toy shop,
 * buy a bag balloons with the money we've got.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.8\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.5\",\"scaleInDuration:eval\":\"30\",\"scaleOut:eval\":\"1.5\",\"scaleOutDuration:eval\":\"30\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"74\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"+15\",\"angleArc:eval\":\"0\",\"angleSwayRange:eval\":\"6\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_CherryBlossoms
 * @text WIND: Cherry Blossoms
 * @desc The emblem of love and good luck.
 * Cherry blossom petals flutter down from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuint\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.40\",\"scaleVariance:num\":\"0.15\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"320\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2.5\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_DandelionSeeds
 * @text WIND: Dandelion Seeds
 * @desc Floating on the air. Never seem to care.
 * Dandelion seeds will flow up into the air.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.15\",\"scaleVariance:num\":\"0.05\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"30\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"-45\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_GrassyGust
 * @text WIND: Grassy Gust
 * @desc A gust of wind! From right to left, grass flies with it.
 * Best when paired with a Tempest.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuint\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.40\",\"scaleVariance:num\":\"0.15\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"320\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2.5\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_GreenLeaves
 * @text WIND: Green Leaves
 * @desc Leaf me alone!
 * Green leaves fall above, spinning round and round.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InCubic\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.30\",\"scaleVariance:num\":\"0.10\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"310\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2.5\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_Pollen
 * @text WIND: Pollen
 * @desc Bless you! Gesundheit! Salute!
 * A cloud of pollen grains travel about the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"48\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#fff799\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"15\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"8\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_Tempest
 * @text WIND: Tempest
 * @desc Brought to you by a friendly slime.
 * Powerful gusts of wind blast across the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.4\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#505050\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_WhiteClouds
 * @text WIND: White Clouds
 * @desc Not the main character from Final Fantasy VII.
 * Fluffy white clouds slowly drift across the upper screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_XtremeSpeed
 * @text WIND: Xtreme Speed
 * @desc Gotta go fast! Speedlines whip past!
 * Works best below the tileset layer.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"middle screen\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"100\",\"opacityVariance:num\":\"28\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"2.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"2.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"15\",\"totalPerPower:num\":\"3\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"24\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Light
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Light
 * @text Category - Light-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_Confetti
 * @text LIGHT: Confetti
 * @desc Party like it's 1999!
 * Confetti of differing shapes drop from the sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"0.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"40\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_LensFlare
 * @text LIGHT: Lens Flare
 * @desc Relive the amateur days from Photoshop!
 * A lens flare descends from the upper corner of the sky!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"left 10%\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"upper 10%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"1\",\"totalPerPower:num\":\"0\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"6\",\"angleSwaySpeed:eval\":\"0.0025\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_LightBurst
 * @text LIGHT: Light Burst
 * @desc Sometimes also known as Sun Bursts. CAUTION: Bright lights!
 * Bright white light bursts out from a target.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"12\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"2\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.50\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.05\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-16\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_LightOrbs
 * @text LIGHT: Light Orbs
 * @desc Show me the light!
 * Light orbs fly round and round.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.5\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_PastelBrume
 * @text LIGHT: Pastel Brume
 * @desc Cute pastel colors forming a foggy brume.
 * Various bright colors cover the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.2\",\"speedVariance:eval\":\"0.3\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_PrismBurst
 * @text LIGHT: Prism Burst
 * @desc More color than a bag of candy! CAUTION: Bright lights!
 * Lights of all colors expand out from a target.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"12\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"2\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.50\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.05\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-16\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_PrismBeams
 * @text LIGHT: Prismatic Gleam
 * @desc Our seven lights spring to the task!
 * Colors of all sorts shine from the skies high above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_RainbowClouds
 * @text LIGHT: Rainbow Clouds
 * @desc Colorful clouds dot the heavens.
 * Multi-colored clouds slowly drift across the upper screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 30%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"32\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_RainbowOrbs
 * @text LIGHT: Rainbow Orbs
 * @desc Taste the rainbow!
 * Multi-colored rainbow orbs spawn in and float about.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.5\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_Stars
 * @text LIGHT: Star Fall
 * @desc You're a star. You're one in a million.
 * Stars fall out of the night sky spinning round and round.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"5\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"-3\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Dark
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Dark
 * @text Category - Dark-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_AshDebris
 * @text DARK: Ash Debris
 * @desc Gotta ketchum all.
 * Pieces of ash debris flutter through the air.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocation:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"180\",\"opacityVariance:num\":\"40\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"45\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"-3\",\"spinSpeedVariance:eval\":\"2\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_Ashfall
 * @text DARK: Ashfall
 * @desc But unlike thunder, this didn’t stop. It went on and on.
 * Volcanic ash pieces descend from the skies above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"180\",\"opacityVariance:num\":\"40\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"215\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_BloodRain
 * @text DARK: Blood Rain
 * @desc It's actually a real phenomenon.
 * However, it's not really blood.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#cc0000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"angle:eval\":\"255\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_DarkOrbs
 * @text DARK: Dark Orbs
 * @desc Hello darkness, my old friend.
 * Dark orbs circle about the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.5\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"2\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_Fumes
 * @text DARK: Fumes
 * @desc Don't inhale any!
 * Dark fume clouds plume from below.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"120\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"0.8\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"4\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"90\",\"respawnDelayRngPerPower:eval\":\"-9\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.0\",\"scaleInDuration:eval\":\"45\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_MoonBeams
 * @text DARK: Moonlight Beams
 * @desc Moonlight is the smuggler's enemy.
 * Light the path in the night sky by moonshine.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#d0bbee\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_ShadowBurst
 * @text DARK: Shadow Siphon
 * @desc Drain all of the light! CAUTION: Dark lights!
 * Light from around is all drained into one area.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"10\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.50\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.05\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"0.1\",\"scaleOutDuration:eval\":\"20\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-16\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_SmokeFog
 * @text DARK: Smog
 * @desc Smoking is bad, mkay?
 * Smokey fog (aka Smog) cover the whole screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#222222\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"12\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_SmokeClouds
 * @text DARK: Smoke Clouds
 * @desc Accompanied by factories owned by evil corporations.
 * Smoke clouds blot out the sun.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00e1e1\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_Sootfall
 * @text DARK: Sootfall
 * @desc Try not to build a snowman out of this.
 * Smoke-contaminated snow falls from the sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"160\",\"opacityVariance:num\":\"20\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"220\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Icons1
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Icons1
 * @text Category - Icons (Slow)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Up
 * @text SLOW: Flying Icons ↑
 * @desc Icons fly to the top at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_UpperRight
 * @text SLOW: Flying Icons ↗
 * @desc Icons fly upper right at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"45\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Right
 * @text SLOW: Flying Icons →
 * @desc Icons fly to the right at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_LowerRight
 * @text SLOW: Flying Icons ↘
 * @desc Icons fly lower right at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Down
 * @text SLOW: Flying Icons ↓
 * @desc Icons fly to the bottom at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_LowerLeft
 * @text SLOW: Flying Icons ↙
 * @desc Icons fly lower left at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Left
 * @text SLOW: Flying Icons ←
 * @desc Icons fly to the left at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_UpperLeft
 * @text SLOW: Flying Icons ↖
 * @desc Icons fly upper left at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"135\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Mid
 * @text SLOW: Flying Icons ●
 * @desc Icons hover at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"10\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"1\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"1\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Icons2
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Icons2
 * @text Category - Icons (Medium)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Up
 * @text MEDIUM: Flying Icons ↑
 * @desc Icons fly to the top at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_UpperRight
 * @text MEDIUM: Flying Icons ↗
 * @desc Icons fly upper right at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"45\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Right
 * @text MEDIUM: Flying Icons →
 * @desc Icons fly to the right at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_LowerRight
 * @text MEDIUM: Flying Icons ↘
 * @desc Icons fly lower right at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Down
 * @text MEDIUM: Flying Icons ↓
 * @desc Icons fly to the bottom at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_LowerLeft
 * @text MEDIUM: Flying Icons ↙
 * @desc Icons fly lower left at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Left
 * @text MEDIUM: Flying Icons ←
 * @desc Icons fly to the left at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_UpperLeft
 * @text MEDIUM: Flying Icons ↖
 * @desc Icons fly upper left at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"135\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Mid
 * @text MEDIUM: Flying Icons ●
 * @desc Icons hover at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"10\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Icons3
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Icons3
 * @text Category - Icons (Fast)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Up
 * @text FAST: Flying Icons ↑
 * @desc Icons fly to the top at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_UpperRight
 * @text FAST: Flying Icons ↗
 * @desc Icons fly upper right at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"45\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Right
 * @text FAST: Flying Icons →
 * @desc Icons fly to the right at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_LowerRight
 * @text FAST: Flying Icons ↘
 * @desc Icons fly lower right at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Down
 * @text FAST: Flying Icons ↓
 * @desc Icons fly to the bottom at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_LowerLeft
 * @text FAST: Flying Icons ↙
 * @desc Icons fly lower left at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Left
 * @text FAST: Flying Icons ←
 * @desc Icons fly to the left at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_UpperLeft
 * @text FAST: Flying Icons ↖
 * @desc Icons fly upper left at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"135\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Mid
 * @text FAST: Flying Icons ●
 * @desc Icons hover at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"10\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"4\",\"ySwaySpeed:eval\":\"0.01\"}"}
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
 * @param WeatherEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc General Settings for the Weather Effects plugin.
 * @default {"PreRenderGenImg:eval":"true","RenderVariations:num":"16","SmoothIcons:eval":"true"}
 *
 * @param Options:struct
 * @text Options Settings
 * @type struct<Options>
 * @desc Options Settings for the Weather Effects plugin.
 * @default {"Options":"","AddWeatherDensityOption:eval":"true","AdjustRect:eval":"true","Name:str":"Weather Density"}
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
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param PreRenderGenImg:eval
 * @text Pre-Render Generated?
 * @type boolean
 * @on Pre-render
 * @off Render when needed
 * @desc Pre-render generated images for weather patterns?
 * This reduces lag for on-demand weather patterns.
 * @default true
 *
 * @param RenderVariations:num
 * @text # of Variations
 * @parent PreRenderGenImg:eval
 * @min 1
 * @desc How many variations of each rendered weather pattern do you want?
 * @default 16
 *
 * @param SmoothIcons:eval
 * @text Smooth Icons?
 * @type boolean
 * @on Smooth
 * @off Pixelated
 * @desc Smooth out the icons used for weather sprites?
 * Or keep them pixelated?
 * @default true
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
 * @param AddWeatherDensityOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Weather Density' option to the Options menu?
 * @default true
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
 * @param Name:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Weather Density
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Custom:
 *
 * @param sprite:struct
 * @text Sprite Settings
 * @type struct<Sprite>
 * @desc The general settings involving the weather sprites.
 * @default {"lifespan:num":"60","lifespanVariance:num":"0","spawnLocationX:str":"random","spawnLocationY:str":"random","mapBound:eval":"true","opacity:num":"255","opacityVariance:num":"0","scale:num":"1.0","scaleVariance:num":"0","totalMinimum:num":"20","totalPerPower:num":"5"}
 *
 * @param dimmer:struct
 * @text Dimmer Overlay
 * @type struct<Dimmer>
 * @desc Settings involving the dimmer overlay cast over the screen.
 * @default {"color:str":"#000000","opacityMinimum:num":"0","opacityPerPower:num":"0"}
 *
 * @param image:struct
 * @text Image Settings
 * @type struct<Image>
 * @desc Settings for the images used for the weather sprites.
 * Weathers with multiple images will be picked at random.
 * @default {"generated:eval":"true","generatedWeight:num":"1","icons:arraynum":"[]","iconsWeight:num":"16","pictures:arraystr":"[]","picturesWeight:num":"16","blendMode:num":"0","hueVariations:arraynum":"[]","toneVariations:arrayeval":"[]"}
 *
 * @param flags:struct
 * @text Special Effects
 * @type struct<Flags>
 * @desc Specialized effects that are turned on for specific weather
 * types can be found here.
 * @default {"alwaysVisiblePlayer:eval":"false"}
 *
 * @param trajectory:struct
 * @text Trajectory Settings
 * @type struct<Trajectory>
 * @desc Settings used to determine the trajectory a weather sprite
 * will take and how they behave on it.
 * @default {"type:str":"straight","speed:eval":"1","angle:eval":"0","alignAngle:eval":"true","angleVariance:eval":"0","angleOffset:eval":"+0","angleSwayRange:eval":"0","angleSwaySpeed:eval":"0.01","xSwayRange:eval":"0","xSwaySpeed:eval":"0.01","ySwayRange:eval":"0","ySwaySpeed:eval":"0.01"}
 *
 */
/* ----------------------------------------------------------------------------
 * Sprite Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sprite:
 *
 * @param lifespan:num
 * @text Lifespan
 * @desc Lifespan of each weather sprite in frames.
 * @default 60
 *
 * @param lifespanVariance:num
 * @text Variance
 * @parent lifespan:num
 * @desc What variance is there to each lifespan value?
 * @default 0
 *
 * @param spawnLocationX:str
 * @text Spawn Location X
 * @type select
 * @option - 
 * @option random
 * @option - 
 * @option left border
 * @option left 10%
 * @option left 20%
 * @option left 30%
 * @option left 40%
 * @option left 50%
 * @option left 60%
 * @option left 70%
 * @option left 80%
 * @option left 90%
 * @option - 
 * @option center screen
 * @option center 10%
 * @option center 20%
 * @option center 30%
 * @option center 40%
 * @option center 50%
 * @option center 60%
 * @option center 70%
 * @option center 80%
 * @option center 90%
 * @option - 
 * @option right border
 * @option right 10%
 * @option right 20%
 * @option right 30%
 * @option right 40%
 * @option right 50%
 * @option right 60%
 * @option right 70%
 * @option right 80%
 * @option right 90%
 * @option - 
 * @option sides border
 * @option sides 10%
 * @option sides 20%
 * @option sides 30%
 * @option sides 40%
 * @option - 
 * @desc What x location should the weather sprites appear?
 * @default random
 * 
 * @param spawnOffsetX:eval
 * @text Offset X
 * @parent spawnLocationX:str
 * @desc Offset the spawn location by this many pixels.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param spawnLocationY:str
 * @text Spawn Location Y
 * @type select
 * @option - 
 * @option random
 * @option - 
 * @option upper border
 * @option upper 10%
 * @option upper 20%
 * @option upper 30%
 * @option upper 40%
 * @option upper 50%
 * @option upper 60%
 * @option upper 70%
 * @option upper 80%
 * @option upper 90%
 * @option - 
 * @option middle screen
 * @option middle 10%
 * @option middle 20%
 * @option middle 30%
 * @option middle 40%
 * @option middle 50%
 * @option middle 60%
 * @option middle 70%
 * @option middle 80%
 * @option middle 90%
 * @option - 
 * @option - 
 * @option lower border
 * @option lower 10%
 * @option lower 20%
 * @option lower 30%
 * @option lower 40%
 * @option lower 50%
 * @option lower 60%
 * @option lower 70%
 * @option lower 80%
 * @option lower 90%
 * @option - 
 * @option either border
 * @option either 10%
 * @option either 20%
 * @option either 30%
 * @option either 40%
 * @option - 
 * @desc What y location should the weather sprites appear?
 * @default random
 * 
 * @param spawnOffsetY:eval
 * @text Offset Y
 * @parent spawnLocationY:str
 * @desc Offset the spawn location by this many pixels.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param mapBound:eval
 * @text Map Bound?
 * @parent spawnLocation:str
 * @type boolean
 * @on Moves with Map
 * @off Screen-Locked
 * @desc Do the weather sprites move with the map scrolling?
 * @default true
 *
 * @param opacity:num
 * @text Starting Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Starting opacity of each weather sprite in frames.
 * @default 255
 *
 * @param opacityVariance:num
 * @text Variance
 * @parent opacity:num
 * @desc What variance is there to each starting opacity value?
 * @default 0
 *
 * @param opacityEasingType:str
 * @text Easing Type
 * @parent opacity:num
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply for opacity.
 * @default Linear
 *
 * @param opacityFadeInTime:num
 * @text Fade In Time
 * @parent opacity:num
 * @type number
 * @desc How many frames does it take for the sprite to fade in?
 * Use 0 to start immediately at full opacity.
 * @default 16
 *
 * @param scale:num
 * @text Scale
 * @desc What is the scale of the sprite?
 * 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 * @default 1.0
 *
 * @param scaleVariance:num
 * @text Variance
 * @parent scale:num
 * @desc What variance is there to the main scale value?
 * @default 0
 *
 * @param scaleRatioX:num
 * @text Ratio X
 * @parent scale:num
 * @desc What is the ratio of this sprite's scale X?
 * 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 * @default 1.0
 *
 * @param scaleRatioY:num
 * @text Ratio Y
 * @parent scale:num
 * @desc What is the ratio of this sprite's scale Y?
 * 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 * @default 1.0
 *
 * @param totalMinimum:num
 * @text Total Sprite Minimum
 * @desc What is the minimum number of sprites on the screen?
 * @default 20
 *
 * @param totalPerPower:num
 * @text Total Per Power
 * @parent totalMinimum:num
 * @desc Increase the total number of sprites per power by this.
 * Lowest power is 1. Highest power is 9.
 * @default 5
 *
 */
/* ----------------------------------------------------------------------------
 * Dimmer Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Dimmer:
 *
 * @param color:str
 * @text Color
 * @desc Dimmer color. This uses #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #000000
 *
 * @param opacityMinimum:num
 * @text Opacity Minimum
 * @parent totalMinimum:num
 * @desc What is the minimum opacity value for the dimmer?
 * @default 0
 *
 * @param opacityPerPower:num
 * @text Opacity Per Power
 * @parent opacityMinimum:num
 * @desc What is the total opacity value per power for the dimmer?
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Image Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Image:
 *
 * @param generated:eval
 * @text Generated Image?
 * @type boolean
 * @on Include
 * @off Exclude
 * @desc Include the plugin-generated image for this weather type?
 * @default true
 *
 * @param generatedWeight:num
 * @text Weight
 * @parent generated:eval
 * @type number
 * @min 1
 * @desc What is the random weight? The higher the value, the more
 * likely this is to be used when randomized.
 * @default 1
 *
 * @param icons:arraynum
 * @text Icon(s)
 * @type string[]
 * @desc Which icons do you wish to include for the images to appear as?
 * @default []
 *
 * @param iconsWeight:num
 * @text Weight
 * @parent icons:arraynum
 * @type number
 * @min 1
 * @desc What is the random weight? The higher the value, the more
 * likely this is to be used when randomized.
 * @default 1
 *
 * @param pictures:arraystr
 * @text Picture(s)
 * @type file[]
 * @dir img/pictures/
 * @require 1
 * @desc Which pictures do you wish to include for the images to appear as?
 * @default []
 *
 * @param picturesWeight:num
 * @text Weight
 * @parent pictures:arraystr
 * @type number
 * @min 1
 * @desc What is the random weight? The higher the value, the more
 * likely this is to be used when randomized.
 * @default 1
 *
 * @param blendMode:num
 * @text Blend Mode
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the weather sprite?
 * @default 0
 *
 * @param hueVariations:arraynum
 * @text Hue Variations
 * @type number[]
 * @min 0
 * @max 360
 * @desc What hue variations will be randomly selected from?
 * Use a value between 0 and 360.
 * @default ["0"]
 *
 * @param toneVariations:arrayeval
 * @text Tone Variations
 * @type string[]
 * @desc What tone variations will be randomly selected from?
 * Format for each: [Red, Green, Blue, Gray]
 * @default ["[0,0,0,0]"]
 *
 */
/* ----------------------------------------------------------------------------
 * Special Flags Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Flags:
 *
 * @param alwaysVisiblePlayer:eval
 * @text Allow Visible Player?
 * @type boolean
 * @on Visible
 * @off Ignore
 * @desc Make the player more visible by reducing the
 * opacity of nearby weather sprites?
 * @default false
 *
 * @param flatFlutter:eval
 * @text Flat Fluttering?
 * @type boolean
 * @on Object is Flat
 * @off Object has Volume
 * @desc Is the object flat and flutters in the wind?
 * Or does the object have volume and doesn't?
 * @default false
 *
 * @param longevity:eval
 * @text Longevity
 * @type boolean
 * @on Lasts Until Changed
 * @off Normal
 * @desc Weather effects with longevity don't expire until
 * the weather pattern type is changed.
 * @default false
 *
 * @param hueSwayRange:eval
 * @text Hue Sway Range
 * @desc How much should the hue sway back and forth?
 * JavaScript code can be used.
 * @default 0
 *
 * @param hueSwaySpeed:eval
 * @text Hue Sway Speed
 * @parent hueSwayRange:eval
 * @desc What speed does the angle sway? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 * @param respawnCommonEventID:num
 * @text Respawn Common Event
 * @type common_event
 * @desc Play a specific Common Event when this event respawns?
 * The Common Event will run as a Once Parallel.
 * @default 0
 *
 * @param respawnDelayMin:eval
 * @text Respawn Delay Minimum
 * @desc Is there a delay to the respawn? This is how many
 * frames the sprite must wait before respawning.
 * @default 0
 *
 * @param respawnDelayRngPerPower:eval
 * @text RNG Delay Per Power
 * @parent respawnDelayMin:eval
 * @desc How many randomized frames of delay per power must be waited?
 * @default +0
 *
 * @param scaleIn:eval
 * @text Scale In
 * @desc What scale ratio should the sprite spawn in at?
 * Use 1.0 for regular ratios. You may use JavaScript.
 * @default 1.0
 *
 * @param scaleInDuration:eval
 * @text Duration
 * @parent scaleIn:eval
 * @desc How many frames should the scale in effect take?
 * Scale in will always head towards 1.0.
 * @default 10
 *
 * @param scaleOut:eval
 * @text Scale Out
 * @desc What scale ratio should the sprite despawn out at?
 * Use 1.0 for regular ratios. You may use JavaScript.
 * @default 1.0
 *
 * @param scaleOutDuration:eval
 * @text Duration
 * @parent scaleOut:eval
 * @desc How many frames should the scale out effect take?
 * Scale in will usually head from 1.0.
 * @default 10
 * 
 * @param CustomFinish
 * @text Custom Finish
 *
 * @param fireworksFinish:eval
 * @text Fireworks Finish?
 * @parent CustomFinish
 * @type boolean
 * @on Show me fireworks!
 * @off It's not right!
 * @desc At the end of the weather particle's lifespan,
 * finish up with a fireworks explosion?
 * @default false
 *
 * @param sparkleFinish:eval
 * @text Sparkle Finish?
 * @parent CustomFinish
 * @type boolean
 * @on Sparkle YES!
 * @off NO! No Sparkle!
 * @desc At the end of the weather particle's lifespan,
 * finish up with a fabulous spinning sparkle effect?
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Trajectory Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Trajectory:
 *
 * @param type:str
 * @text Trajectory Type
 * @type select
 * @option -
 * @option Straight: Follows the trajectory
 * @value straight
 * @option Frozen: Does not follow a trajectory
 * @value frozen
 * @option -
 * @option Player-Locked: Map only! Center of sprite is locked on player
 * @value player
 * @option Follower-Locked: Map only! Center of sprite is locked on target follower
 * @value follower
 * @option Event-Locked: Map only! Center of sprite is locked on target event
 * @value event
 * @option -
 * @option Actor-Locked: Battle only! Center of sprite is locked on target actor
 * @value actor
 * @option Enemy-Locked: Battle only! Center of sprite is locked on target enemy
 * @value enemy
 * @option User-Locked: Battle only! Center of sprite is locked on current user
 * @value user
 * @option Target-Locked: Battle only! Center of sprite is locked on current target
 * @value target
 * @option -
 * @desc What trajectory type is used?
 * @default straight
 * 
 * @param lockedID:eval
 * @text Locked ID/Index
 * @parent type:str
 * @desc For locked trajectories only. Input the follower index.
 * Or ID of event, actor, enemy.
 * @default 0
 * 
 * @param lockedOffsetX:eval
 * @text Offset X (Locked)
 * @parent type:str
 * @desc For locked trajectories only.
 * Negative: left. Positive: right.
 * @default +0
 * 
 * @param lockedOffsetY:eval
 * @text Offset Y (Locked)
 * @parent type:str
 * @desc For locked trajectories only.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param speed:eval
 * @text Speed
 * @desc What speed is the sprite moving at? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 1
 *
 * @param speedVariance:eval
 * @text Speed Variance
 * @parent speed:eval
 * @desc What variance is there to the speed value?
 * @default 0
 *
 * @param angle:eval
 * @text Angle
 * @desc What angle (0 to 360) is the sprite moving toward?
 * JavaScript code can be used.
 * @default 0
 *
 * @param alignAngle:eval
 * @text Align Angle?
 * @parent angle:eval
 * @type boolean
 * @on Rotates to Align
 * @off Does Not Rotate
 * @desc Should the sprite rotate itself according to the angle
 * it is moving at across the screen?
 * @default true
 *
 * @param angleVariance:eval
 * @text Angle Variance
 * @parent angle:eval
 * @desc What variance is there to the base angle?
 * @default 0
 *
 * @param angleOffset:eval
 * @text Visual Angle Offset
 * @parent angle:eval
 * @desc Offset the visual by this many degrees. Used for images
 * that aren't made aligned with 0 degrees facing left.
 * @default +0
 *
 * @param angleArc:eval
 * @text Angle Arc
 * @desc How should the trajectory arc when the sprite moves?
 * JavaScript code can be used.
 * @default +0
 *
 * @param angleSwayRange:eval
 * @text Angle Sway Range
 * @desc How much should the angle sway as the sprite moves?
 * JavaScript code can be used.
 * @default 0
 *
 * @param angleSwaySpeed:eval
 * @text Angle Sway Speed
 * @parent angleSwayRange:eval
 * @desc What speed does the angle sway? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 * @param spinSpeed:eval
 * @text Spin Speed
 * @desc What speed do the sprites spin?
 * JavaScript code can be used.
 * @default +0
 *
 * @param spinSpeedVariance:eval
 * @text Spin Speed Variance
 * @parent spinSpeed:eval
 * @desc What variance is there to the spin speed?
 * @default 0
 *
 * @param reverseSpin:eval
 * @text Reverse Spin?
 * @parent spinSpeed:eval
 * @type boolean
 * @on Can Reverse Spin
 * @off No Reverse Spin
 * @desc Can the spin go in the reverse direction?
 * @default false
 *
 * @param xSwayRange:eval
 * @text X Sway Range
 * @desc How much should the X value sway as the sprite moves?
 * JavaScript code can be used.
 * @default 0
 *
 * @param xSwaySpeed:eval
 * @text X Sway Speed
 * @parent xSwayRange:eval
 * @desc What speed does the sway move? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 * @param ySwayRange:eval
 * @text Y Sway Range
 * @desc How much should the Y value sway as the sprite moves?
 * JavaScript code can be used.
 * @default 0
 *
 * @param ySwaySpeed:eval
 * @text Y Sway Speed
 * @parent ySwayRange:eval
 * @desc What speed does the sway move? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 */
//=============================================================================

function _0x2c1e(_0x3bf5da,_0x3f85a9){const _0xecb62=_0xecb6();return _0x2c1e=function(_0x2c1ed3,_0x3354c3){_0x2c1ed3=_0x2c1ed3-0xa0;let _0x59a2d5=_0xecb62[_0x2c1ed3];return _0x59a2d5;},_0x2c1e(_0x3bf5da,_0x3f85a9);}const _0x217234=_0x2c1e;(function(_0x4fe162,_0x5d9aa0){const _0xf931be=_0x2c1e,_0x4d26fc=_0x4fe162();while(!![]){try{const _0xc98bc=-parseInt(_0xf931be(0x37d))/0x1+parseInt(_0xf931be(0x260))/0x2+-parseInt(_0xf931be(0x1af))/0x3*(-parseInt(_0xf931be(0x37e))/0x4)+-parseInt(_0xf931be(0x11e))/0x5*(parseInt(_0xf931be(0x507))/0x6)+-parseInt(_0xf931be(0x17a))/0x7+parseInt(_0xf931be(0x1c0))/0x8*(parseInt(_0xf931be(0x4f3))/0x9)+parseInt(_0xf931be(0x380))/0xa;if(_0xc98bc===_0x5d9aa0)break;else _0x4d26fc['push'](_0x4d26fc['shift']());}catch(_0x4f1836){_0x4d26fc['push'](_0x4d26fc['shift']());}}}(_0xecb6,0xb4f3a));var label=_0x217234(0xd0),tier=tier||0x0,dependencies=[_0x217234(0x440)],pluginData=$plugins[_0x217234(0x175)](function(_0x3cc28){const _0x14fd89=_0x217234;return _0x3cc28[_0x14fd89(0x216)]&&_0x3cc28[_0x14fd89(0x496)][_0x14fd89(0x4a8)]('['+label+']');})[0x0];VisuMZ[label][_0x217234(0x21c)]=VisuMZ[label][_0x217234(0x21c)]||{},VisuMZ[_0x217234(0x44a)]=function(_0x12b1d9,_0x13349a){const _0x4834a5=_0x217234;for(const _0x376f83 in _0x13349a){if('jfulX'===_0x4834a5(0x2da)){if(_0x376f83['match'](/(.*):(.*)/i)){const _0x4871d6=String(RegExp['$1']),_0x3bfd47=String(RegExp['$2'])[_0x4834a5(0x195)]()[_0x4834a5(0x4f1)]();let _0x4ed7ff,_0x338291,_0x718778;switch(_0x3bfd47){case'NUM':_0x4ed7ff=_0x13349a[_0x376f83]!==''?Number(_0x13349a[_0x376f83]):0x0;break;case _0x4834a5(0x262):_0x338291=_0x13349a[_0x376f83]!==''?JSON[_0x4834a5(0x2b9)](_0x13349a[_0x376f83]):[],_0x4ed7ff=_0x338291[_0x4834a5(0x486)](_0x770a4b=>Number(_0x770a4b));break;case _0x4834a5(0x1f1):_0x4ed7ff=_0x13349a[_0x376f83]!==''?eval(_0x13349a[_0x376f83]):null;break;case'ARRAYEVAL':_0x338291=_0x13349a[_0x376f83]!==''?JSON[_0x4834a5(0x2b9)](_0x13349a[_0x376f83]):[],_0x4ed7ff=_0x338291[_0x4834a5(0x486)](_0x39930a=>eval(_0x39930a));break;case _0x4834a5(0x14e):_0x4ed7ff=_0x13349a[_0x376f83]!==''?JSON[_0x4834a5(0x2b9)](_0x13349a[_0x376f83]):'';break;case _0x4834a5(0x327):_0x338291=_0x13349a[_0x376f83]!==''?JSON[_0x4834a5(0x2b9)](_0x13349a[_0x376f83]):[],_0x4ed7ff=_0x338291[_0x4834a5(0x486)](_0x4694a0=>JSON['parse'](_0x4694a0));break;case _0x4834a5(0x2a2):_0x4ed7ff=_0x13349a[_0x376f83]!==''?new Function(JSON[_0x4834a5(0x2b9)](_0x13349a[_0x376f83])):new Function('return\x200');break;case _0x4834a5(0x2a0):_0x338291=_0x13349a[_0x376f83]!==''?JSON[_0x4834a5(0x2b9)](_0x13349a[_0x376f83]):[],_0x4ed7ff=_0x338291[_0x4834a5(0x486)](_0x2892a2=>new Function(JSON[_0x4834a5(0x2b9)](_0x2892a2)));break;case _0x4834a5(0x290):_0x4ed7ff=_0x13349a[_0x376f83]!==''?String(_0x13349a[_0x376f83]):'';break;case _0x4834a5(0x3ab):_0x338291=_0x13349a[_0x376f83]!==''?JSON[_0x4834a5(0x2b9)](_0x13349a[_0x376f83]):[],_0x4ed7ff=_0x338291[_0x4834a5(0x486)](_0xd879f8=>String(_0xd879f8));break;case _0x4834a5(0x154):_0x718778=_0x13349a[_0x376f83]!==''?JSON[_0x4834a5(0x2b9)](_0x13349a[_0x376f83]):{},_0x4ed7ff=VisuMZ[_0x4834a5(0x44a)]({},_0x718778);break;case _0x4834a5(0xb3):_0x338291=_0x13349a[_0x376f83]!==''?JSON['parse'](_0x13349a[_0x376f83]):[],_0x4ed7ff=_0x338291['map'](_0x1f7602=>VisuMZ['ConvertParams']({},JSON[_0x4834a5(0x2b9)](_0x1f7602)));break;default:continue;}_0x12b1d9[_0x4871d6]=_0x4ed7ff;}}else _0x2cd6b0[_0x4834a5(0x44a)](_0x3b7f4c,_0x2b3472),_0x534831[_0x4834a5(0x19c)]=_0x4834a5(0x4a3),_0x570b8e[_0x4834a5(0xd0)][_0x4834a5(0x42a)](_0x81b76d);}return _0x12b1d9;},(_0x709685=>{const _0x15b1e3=_0x217234,_0x5d7be2=_0x709685[_0x15b1e3(0x318)];for(const _0x359ea4 of dependencies){if(!Imported[_0x359ea4]){if(_0x15b1e3(0x3ba)!==_0x15b1e3(0x3ba)){this[_0x15b1e3(0x2ed)]=!![];if(_0x48a351==='generated')this['loadGeneratedBitmap']();else{if(_0x3c6315==='icons')this['loadIconsetBitmap']();else _0x141b43===_0x15b1e3(0x4a9)&&this['loadPictureBitmap']();}}else{alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'['format'](_0x5d7be2,_0x359ea4)),SceneManager['exit']();break;}}}const _0x3f9c30=_0x709685[_0x15b1e3(0x496)];if(_0x3f9c30[_0x15b1e3(0x15c)](/\[Version[ ](.*?)\]/i)){const _0xe7fe34=Number(RegExp['$1']);_0xe7fe34!==VisuMZ[label][_0x15b1e3(0x36d)]&&(alert(_0x15b1e3(0x205)[_0x15b1e3(0x126)](_0x5d7be2,_0xe7fe34)),SceneManager['exit']());}if(_0x3f9c30[_0x15b1e3(0x15c)](/\[Tier[ ](\d+)\]/i)){const _0x703853=Number(RegExp['$1']);if(_0x703853<tier){if(_0x15b1e3(0x31a)!==_0x15b1e3(0x4c5))alert(_0x15b1e3(0x481)[_0x15b1e3(0x126)](_0x5d7be2,_0x703853,tier)),SceneManager[_0x15b1e3(0x3da)]();else return _0x86636b['random']()*_0x36e9fa+_0x4fe5bf[_0x15b1e3(0xc9)]()*_0x40a3f8-_0x3ab3eb;}else'uzVdG'!==_0x15b1e3(0x447)?tier=Math[_0x15b1e3(0x49e)](_0x703853,tier):(_0x57a10a['ConvertParams'](_0x33c89a,_0x353758),_0x15b943[_0x15b1e3(0x19c)]='radioactivebeam',_0x50ceac[_0x15b1e3(0xd0)][_0x15b1e3(0x42a)](_0x528d6d));}VisuMZ['ConvertParams'](VisuMZ[label]['Settings'],_0x709685['parameters']);})(pluginData),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],'BasicAdjustWeatherPower',_0x59bc36=>{const _0x38cab6=_0x217234;VisuMZ[_0x38cab6(0x44a)](_0x59bc36,_0x59bc36);const _0x231632=_0x59bc36[_0x38cab6(0x317)][_0x38cab6(0x486)](_0x5f4006=>(Number(_0x5f4006)||0x1)[_0x38cab6(0xeb)](0x1,0xa)),_0x3cf34a=_0x59bc36['UpperLower'],_0x17d648=_0x59bc36[_0x38cab6(0x288)]||0x0,_0x149027=_0x59bc36[_0x38cab6(0xc8)]||0x1;for(const _0x494c7f of _0x231632){if(_0x38cab6(0xb6)!==_0x38cab6(0x13b))['upper',_0x38cab6(0x140)][_0x38cab6(0x4a8)](_0x3cf34a)&&$gameScreen[_0x38cab6(0x2ee)](_0x494c7f,![],_0x17d648,_0x149027),[_0x38cab6(0xae),_0x38cab6(0x140)][_0x38cab6(0x4a8)](_0x3cf34a)&&$gameScreen[_0x38cab6(0x2ee)](_0x494c7f,!![],_0x17d648,_0x149027);else{if(!this['_dimmerSprite'])return;this[_0x38cab6(0x349)](),this[_0x38cab6(0x394)]();}}if(_0x59bc36['WaitForCompletion']){const _0x21350b=$gameTemp[_0x38cab6(0x168)]();_0x21350b&&_0x21350b[_0x38cab6(0xef)](_0x149027||0x1);}}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x417),_0xb12e6=>{const _0x1cac9c=_0x217234;VisuMZ['ConvertParams'](_0xb12e6,_0xb12e6);const _0x4b28a3=_0xb12e6[_0x1cac9c(0x317)][_0x1cac9c(0x486)](_0xb09d1a=>(Number(_0xb09d1a)||0x1)['clamp'](0x1,0xa)),_0x59decb=_0xb12e6['UpperLower'],_0x322168=_0xb12e6['Duration']||0x1;for(const _0x344605 of _0x4b28a3){if(_0x1cac9c(0x133)==='RibVR'){if([_0x1cac9c(0x1f2),'both'][_0x1cac9c(0x4a8)](_0x59decb)){if(_0x1cac9c(0x25a)!==_0x1cac9c(0x25a)){if(_0x46d1a4['isSceneBattle']())return;this[_0x1cac9c(0x501)]['x']=_0x17b0f6[_0x1cac9c(0x40a)]()*_0x1379f5['tileWidth'](),this[_0x1cac9c(0x501)]['y']=_0x6b1d40['displayY']()*_0x2e3d82[_0x1cac9c(0x50a)]();}else $gameScreen['clearWeatherLayerData'](_0x344605,![],_0x322168);}[_0x1cac9c(0xae),'both']['includes'](_0x59decb)&&$gameScreen[_0x1cac9c(0x289)](_0x344605,!![],_0x322168);}else _0x17e385['stroke']();}if(_0xb12e6[_0x1cac9c(0x2e6)]){if(_0x1cac9c(0xf4)!==_0x1cac9c(0xf4)){const _0x55576f=_0x45b066[_0x1cac9c(0xc1)](_0x9f2e21-_0x58e5c4*0x2)+_0x30df8d,_0x24172b=_0x4927e3['randomInt'](_0x2ab189-_0x48d233*0x2)+_0x4d32d3,_0xed8547=_0x2dfb0e[_0x1cac9c(0xc1)](_0xedb8dc)+0x1,_0x1bf21d=_0x3c1eaa[_0x22ce8a[_0x1cac9c(0x1ae)](_0x44525c[_0x1cac9c(0xc9)]()*_0x9e833b[_0x1cac9c(0x497)])];_0x57ce0a[_0x1cac9c(0x19f)]=_0x3ea4bb[_0x1cac9c(0xc1)](0x40)+0xc0,_0x3a0688['drawCircle'](_0x55576f,_0x24172b,_0xed8547,_0x1bf21d);}else{const _0x438504=$gameTemp[_0x1cac9c(0x168)]();_0x438504&&_0x438504[_0x1cac9c(0xef)](_0x322168||0x1);}}}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x28e),_0x43b629=>{const _0x1bdd47=_0x217234;VisuMZ[_0x1bdd47(0x44a)](_0x43b629,_0x43b629);const _0x1fc6fb=_0x43b629[_0x1bdd47(0x317)][_0x1bdd47(0x486)](_0x2235e8=>(Number(_0x2235e8)||0x1)['clamp'](0x1,0xa)),_0x3e0d59=_0x43b629[_0x1bdd47(0x511)],_0x39db22=_0x43b629[_0x1bdd47(0xc8)]||0x1;for(const _0x7de9b1 of _0x1fc6fb){[_0x1bdd47(0x1f2),_0x1bdd47(0x140)]['includes'](_0x3e0d59)&&$gameScreen[_0x1bdd47(0x1a4)](_0x7de9b1,![]),[_0x1bdd47(0xae),_0x1bdd47(0x140)][_0x1bdd47(0x4a8)](_0x3e0d59)&&$gameScreen[_0x1bdd47(0x1a4)](_0x7de9b1,!![]);}}),PluginManager[_0x217234(0x3df)](pluginData['name'],_0x217234(0x122),_0x28c136=>{const _0x382f5e=_0x217234;VisuMZ[_0x382f5e(0x44a)](_0x28c136,_0x28c136);const _0x286941=_0x28c136['Layer']['map'](_0x1f3b94=>(Number(_0x1f3b94)||0x1)[_0x382f5e(0xeb)](0x1,0xa)),_0x36d07a=_0x28c136[_0x382f5e(0x511)],_0x12a6df=_0x28c136[_0x382f5e(0xc8)]||0x1;for(const _0x4caf9b of _0x286941){if(_0x382f5e(0x13d)!==_0x382f5e(0x1be))[_0x382f5e(0x1f2),'both'][_0x382f5e(0x4a8)](_0x36d07a)&&(_0x382f5e(0x2e2)===_0x382f5e(0x4c8)?(_0x23ec95['ConvertParams'](_0x4223de,_0x413aa3),_0xb7a467[_0x382f5e(0x19c)]='darkorbs',_0x2495f3['WeatherEffects'][_0x382f5e(0x42a)](_0x579aa9)):$gameScreen[_0x382f5e(0x42c)](_0x4caf9b,![],_0x12a6df)),['lower','both'][_0x382f5e(0x4a8)](_0x36d07a)&&$gameScreen[_0x382f5e(0x42c)](_0x4caf9b,!![],_0x12a6df);else return _0x4fb3df*(0xb4/_0x4a25cb['PI']);}if(_0x28c136[_0x382f5e(0x2e6)]){if(_0x382f5e(0x202)!==_0x382f5e(0x258)){const _0x3c6fdb=$gameTemp[_0x382f5e(0x168)]();_0x3c6fdb&&_0x3c6fdb[_0x382f5e(0xef)](_0x12a6df||0x1);}else _0x242780[_0x382f5e(0x42c)](_0x34a4f4,!![],_0x58cf8f);}}),PluginManager[_0x217234(0x3df)](pluginData['name'],_0x217234(0x13c),_0x2b0a98=>{const _0x236feb=_0x217234;VisuMZ[_0x236feb(0x44a)](_0x2b0a98,_0x2b0a98),_0x2b0a98['type']='embers',VisuMZ[_0x236feb(0xd0)][_0x236feb(0x42a)](_0x2b0a98);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x233),_0x31198c=>{const _0x23f4f7=_0x217234;VisuMZ[_0x23f4f7(0x44a)](_0x31198c,_0x31198c),_0x31198c[_0x23f4f7(0x19c)]='fireflies',VisuMZ['WeatherEffects'][_0x23f4f7(0x42a)](_0x31198c);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x3e9),_0x56c622=>{const _0xf22269=_0x217234;VisuMZ[_0xf22269(0x44a)](_0x56c622,_0x56c622),_0x56c622[_0xf22269(0x19c)]=_0xf22269(0x355),VisuMZ[_0xf22269(0xd0)][_0xf22269(0x42a)](_0x56c622);}),PluginManager[_0x217234(0x3df)](pluginData['name'],_0x217234(0x2af),_0x30ae5f=>{const _0x5a6b71=_0x217234;VisuMZ[_0x5a6b71(0x44a)](_0x30ae5f,_0x30ae5f),_0x30ae5f[_0x5a6b71(0x19c)]=_0x5a6b71(0x2a5),VisuMZ[_0x5a6b71(0xd0)][_0x5a6b71(0x42a)](_0x30ae5f);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],_0x217234(0x1c8),_0x3409ed=>{const _0x2e134b=_0x217234;VisuMZ[_0x2e134b(0x44a)](_0x3409ed,_0x3409ed),_0x3409ed[_0x2e134b(0x19c)]=_0x2e134b(0x521),VisuMZ[_0x2e134b(0xd0)][_0x2e134b(0x42a)](_0x3409ed);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],_0x217234(0x1a0),_0x4cf7b1=>{const _0xf1850e=_0x217234;VisuMZ[_0xf1850e(0x44a)](_0x4cf7b1,_0x4cf7b1),_0x4cf7b1['type']=_0xf1850e(0x41e),VisuMZ[_0xf1850e(0xd0)]['applyPluginCmdSettings'](_0x4cf7b1);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x454),_0x41bf7e=>{const _0x18f7f0=_0x217234;VisuMZ[_0x18f7f0(0x44a)](_0x41bf7e,_0x41bf7e),_0x41bf7e[_0x18f7f0(0x19c)]=_0x18f7f0(0x335),VisuMZ['WeatherEffects'][_0x18f7f0(0x42a)](_0x41bf7e);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0xb9),_0x42501e=>{const _0x246e87=_0x217234;VisuMZ[_0x246e87(0x44a)](_0x42501e,_0x42501e),_0x42501e[_0x246e87(0x19c)]='meteorshower',VisuMZ[_0x246e87(0xd0)][_0x246e87(0x42a)](_0x42501e);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],_0x217234(0x2bd),_0x135a96=>{const _0x4c1a9e=_0x217234;VisuMZ['ConvertParams'](_0x135a96,_0x135a96),_0x135a96[_0x4c1a9e(0x19c)]=_0x4c1a9e(0x4af),VisuMZ[_0x4c1a9e(0xd0)][_0x4c1a9e(0x42a)](_0x135a96);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x1ed),_0x5ae65c=>{const _0x5a97c0=_0x217234;VisuMZ[_0x5a97c0(0x44a)](_0x5ae65c,_0x5ae65c),_0x5ae65c[_0x5a97c0(0x19c)]=_0x5a97c0(0x13f),VisuMZ[_0x5a97c0(0xd0)][_0x5a97c0(0x42a)](_0x5ae65c);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],'Ice_ArcticBeam',_0x4829fc=>{const _0x4fcd0d=_0x217234;VisuMZ[_0x4fcd0d(0x44a)](_0x4829fc,_0x4829fc),_0x4829fc[_0x4fcd0d(0x19c)]=_0x4fcd0d(0x1d7),VisuMZ['WeatherEffects'][_0x4fcd0d(0x42a)](_0x4829fc);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x2a7),_0x378e4e=>{const _0x363f22=_0x217234;VisuMZ[_0x363f22(0x44a)](_0x378e4e,_0x378e4e),_0x378e4e[_0x363f22(0x19c)]='aurora',VisuMZ[_0x363f22(0xd0)]['applyPluginCmdSettings'](_0x378e4e);}),PluginManager[_0x217234(0x3df)](pluginData['name'],'Ice_Blizzard',_0x1a2045=>{const _0x323709=_0x217234;VisuMZ['ConvertParams'](_0x1a2045,_0x1a2045),_0x1a2045['type']=_0x323709(0x4fa),VisuMZ[_0x323709(0xd0)][_0x323709(0x42a)](_0x1a2045);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x436),_0x501d81=>{const _0x3f546d=_0x217234;VisuMZ[_0x3f546d(0x44a)](_0x501d81,_0x501d81),_0x501d81['type']='diamonddust',VisuMZ['WeatherEffects'][_0x3f546d(0x42a)](_0x501d81);}),PluginManager[_0x217234(0x3df)](pluginData['name'],_0x217234(0x143),_0x15cddb=>{const _0x364784=_0x217234;VisuMZ[_0x364784(0x44a)](_0x15cddb,_0x15cddb),_0x15cddb[_0x364784(0x19c)]='glistening',VisuMZ[_0x364784(0xd0)][_0x364784(0x42a)](_0x15cddb);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],_0x217234(0x463),_0x5c3865=>{const _0x288960=_0x217234;VisuMZ[_0x288960(0x44a)](_0x5c3865,_0x5c3865),_0x5c3865[_0x288960(0x19c)]='icefog',VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x5c3865);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x455),_0x416df2=>{const _0x907288=_0x217234;VisuMZ[_0x907288(0x44a)](_0x416df2,_0x416df2),_0x416df2[_0x907288(0x19c)]='sleet',VisuMZ[_0x907288(0xd0)][_0x907288(0x42a)](_0x416df2);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x14c),_0x2ec9a8=>{const _0x59bc48=_0x217234;VisuMZ[_0x59bc48(0x44a)](_0x2ec9a8,_0x2ec9a8),_0x2ec9a8[_0x59bc48(0x19c)]=_0x59bc48(0x3b0),VisuMZ['WeatherEffects'][_0x59bc48(0x42a)](_0x2ec9a8);}),PluginManager['registerCommand'](pluginData['name'],_0x217234(0xd6),_0x34218b=>{const _0x2957fb=_0x217234;VisuMZ[_0x2957fb(0x44a)](_0x34218b,_0x34218b),_0x34218b[_0x2957fb(0x19c)]=_0x2957fb(0x2b8),VisuMZ[_0x2957fb(0xd0)][_0x2957fb(0x42a)](_0x34218b);}),PluginManager[_0x217234(0x3df)](pluginData['name'],_0x217234(0x17f),_0x5df46e=>{const _0x31057e=_0x217234;VisuMZ['ConvertParams'](_0x5df46e,_0x5df46e),_0x5df46e[_0x31057e(0x19c)]='snowflakes',VisuMZ[_0x31057e(0xd0)][_0x31057e(0x42a)](_0x5df46e);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x28f),_0x3b16c8=>{const _0x44ce66=_0x217234;VisuMZ[_0x44ce66(0x44a)](_0x3b16c8,_0x3b16c8),_0x3b16c8['type']='discharge',VisuMZ[_0x44ce66(0xd0)][_0x44ce66(0x42a)](_0x3b16c8);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],'Thunder_PlasmaBolt',_0x594d65=>{const _0x34aa87=_0x217234;VisuMZ[_0x34aa87(0x44a)](_0x594d65,_0x594d65),_0x594d65[_0x34aa87(0x19c)]=_0x34aa87(0x17e),VisuMZ[_0x34aa87(0xd0)][_0x34aa87(0x42a)](_0x594d65);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],_0x217234(0x296),_0x251da7=>{const _0x1cf6d5=_0x217234;VisuMZ[_0x1cf6d5(0x44a)](_0x251da7,_0x251da7),_0x251da7['type']=_0x1cf6d5(0x4e2),VisuMZ[_0x1cf6d5(0xd0)][_0x1cf6d5(0x42a)](_0x251da7);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],'Thunder_PurpleHaze',_0x512ae7=>{const _0x21685c=_0x217234;VisuMZ[_0x21685c(0x44a)](_0x512ae7,_0x512ae7),_0x512ae7[_0x21685c(0x19c)]='purplehaze',VisuMZ[_0x21685c(0xd0)][_0x21685c(0x42a)](_0x512ae7);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x16c),_0x627a81=>{const _0x597863=_0x217234;VisuMZ[_0x597863(0x44a)](_0x627a81,_0x627a81),_0x627a81['type']='spiderbolt',VisuMZ[_0x597863(0xd0)][_0x597863(0x42a)](_0x627a81);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],_0x217234(0x34d),_0x4866dd=>{const _0xf66633=_0x217234;VisuMZ[_0xf66633(0x44a)](_0x4866dd,_0x4866dd),_0x4866dd[_0xf66633(0x19c)]=_0xf66633(0x108),VisuMZ[_0xf66633(0xd0)][_0xf66633(0x42a)](_0x4866dd);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x24e),_0x25fb37=>{const _0x313feb=_0x217234;VisuMZ[_0x313feb(0x44a)](_0x25fb37,_0x25fb37),_0x25fb37[_0x313feb(0x19c)]='staticcharge',VisuMZ[_0x313feb(0xd0)][_0x313feb(0x42a)](_0x25fb37);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x343),_0x2b6dba=>{const _0x1cdcab=_0x217234;VisuMZ[_0x1cdcab(0x44a)](_0x2b6dba,_0x2b6dba),_0x2b6dba[_0x1cdcab(0x19c)]='thunderclouds',VisuMZ[_0x1cdcab(0xd0)][_0x1cdcab(0x42a)](_0x2b6dba);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x27e),_0x5c7dea=>{const _0x9d0421=_0x217234;VisuMZ[_0x9d0421(0x44a)](_0x5c7dea,_0x5c7dea),_0x5c7dea['type']=_0x9d0421(0x3c3),VisuMZ[_0x9d0421(0xd0)]['applyPluginCmdSettings'](_0x5c7dea);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],'Thunder_UltravioletBeams',_0x468b36=>{const _0x572800=_0x217234;VisuMZ[_0x572800(0x44a)](_0x468b36,_0x468b36),_0x468b36[_0x572800(0x19c)]=_0x572800(0xad),VisuMZ[_0x572800(0xd0)]['applyPluginCmdSettings'](_0x468b36);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],_0x217234(0x331),_0x9c2ddc=>{const _0x3ae75f=_0x217234;VisuMZ[_0x3ae75f(0x44a)](_0x9c2ddc,_0x9c2ddc),_0x9c2ddc[_0x3ae75f(0x19c)]=_0x3ae75f(0x51a),VisuMZ['WeatherEffects'][_0x3ae75f(0x42a)](_0x9c2ddc);}),PluginManager['registerCommand'](pluginData['name'],'Water_CloudBurst',_0x483ff3=>{const _0x5ae6ec=_0x217234;VisuMZ[_0x5ae6ec(0x44a)](_0x483ff3,_0x483ff3),_0x483ff3[_0x5ae6ec(0x19c)]='cloudburst',VisuMZ[_0x5ae6ec(0xd0)][_0x5ae6ec(0x42a)](_0x483ff3);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x26f),_0x3f5d9d=>{const _0x4bb6cb=_0x217234;VisuMZ['ConvertParams'](_0x3f5d9d,_0x3f5d9d),_0x3f5d9d['type']=_0x4bb6cb(0x15b),VisuMZ['WeatherEffects'][_0x4bb6cb(0x42a)](_0x3f5d9d);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x267),_0xf3d032=>{const _0x3b0c3b=_0x217234;VisuMZ['ConvertParams'](_0xf3d032,_0xf3d032),_0xf3d032[_0x3b0c3b(0x19c)]=_0x3b0c3b(0x274),VisuMZ['WeatherEffects'][_0x3b0c3b(0x42a)](_0xf3d032);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x48f),_0xdf931=>{const _0x3c7870=_0x217234;VisuMZ['ConvertParams'](_0xdf931,_0xdf931),_0xdf931[_0x3c7870(0x19c)]=_0x3c7870(0x3b9),VisuMZ[_0x3c7870(0xd0)]['applyPluginCmdSettings'](_0xdf931);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],'Water_RainbowArch',_0x5bcbf2=>{const _0x5e1b67=_0x217234;VisuMZ['ConvertParams'](_0x5bcbf2,_0x5bcbf2),_0x5bcbf2['type']=_0x5e1b67(0x425),VisuMZ[_0x5e1b67(0xd0)][_0x5e1b67(0x42a)](_0x5bcbf2);}),PluginManager[_0x217234(0x3df)](pluginData['name'],_0x217234(0x315),_0x2b8bb0=>{const _0x3bef6f=_0x217234;VisuMZ[_0x3bef6f(0x44a)](_0x2b8bb0,_0x2b8bb0),_0x2b8bb0[_0x3bef6f(0x19c)]='rainclouds',VisuMZ[_0x3bef6f(0xd0)]['applyPluginCmdSettings'](_0x2b8bb0);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],_0x217234(0x129),_0x47292d=>{const _0x1d902a=_0x217234;VisuMZ[_0x1d902a(0x44a)](_0x47292d,_0x47292d),_0x47292d[_0x1d902a(0x19c)]=_0x1d902a(0x238),VisuMZ[_0x1d902a(0xd0)][_0x1d902a(0x42a)](_0x47292d);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0xf9),_0x489142=>{const _0x6456f=_0x217234;VisuMZ[_0x6456f(0x44a)](_0x489142,_0x489142),_0x489142[_0x6456f(0x19c)]='soapbubbles',VisuMZ['WeatherEffects'][_0x6456f(0x42a)](_0x489142);}),PluginManager[_0x217234(0x3df)](pluginData['name'],_0x217234(0x203),_0x3576aa=>{const _0x4940ba=_0x217234;VisuMZ['ConvertParams'](_0x3576aa,_0x3576aa),_0x3576aa[_0x4940ba(0x19c)]='storm',VisuMZ[_0x4940ba(0xd0)]['applyPluginCmdSettings'](_0x3576aa);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],'Earth_AcidRain',_0x4f0431=>{const _0x587018=_0x217234;VisuMZ[_0x587018(0x44a)](_0x4f0431,_0x4f0431),_0x4f0431['type']=_0x587018(0x3a4),VisuMZ[_0x587018(0xd0)][_0x587018(0x42a)](_0x4f0431);}),PluginManager[_0x217234(0x3df)](pluginData['name'],_0x217234(0x30e),_0x25510d=>{const _0x3de097=_0x217234;VisuMZ['ConvertParams'](_0x25510d,_0x25510d),_0x25510d[_0x3de097(0x19c)]=_0x3de097(0xfc),VisuMZ[_0x3de097(0xd0)][_0x3de097(0x42a)](_0x25510d);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],'Earth_DustClouds',_0x51783c=>{const _0x3b436b=_0x217234;VisuMZ['ConvertParams'](_0x51783c,_0x51783c),_0x51783c[_0x3b436b(0x19c)]='dustclouds',VisuMZ[_0x3b436b(0xd0)][_0x3b436b(0x42a)](_0x51783c);}),PluginManager[_0x217234(0x3df)](pluginData['name'],_0x217234(0x1b3),_0x43501d=>{const _0x274bd6=_0x217234;VisuMZ[_0x274bd6(0x44a)](_0x43501d,_0x43501d),_0x43501d[_0x274bd6(0x19c)]=_0x274bd6(0x4dd),VisuMZ[_0x274bd6(0xd0)][_0x274bd6(0x42a)](_0x43501d);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x271),_0x13847c=>{const _0xe60ae2=_0x217234;VisuMZ['ConvertParams'](_0x13847c,_0x13847c),_0x13847c[_0xe60ae2(0x19c)]=_0xe60ae2(0x472),VisuMZ[_0xe60ae2(0xd0)][_0xe60ae2(0x42a)](_0x13847c);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x360),_0x3cc77b=>{const _0xb25fea=_0x217234;VisuMZ['ConvertParams'](_0x3cc77b,_0x3cc77b),_0x3cc77b[_0xb25fea(0x19c)]=_0xb25fea(0xdc),VisuMZ[_0xb25fea(0xd0)][_0xb25fea(0x42a)](_0x3cc77b);}),PluginManager[_0x217234(0x3df)](pluginData['name'],_0x217234(0x1fb),_0x1f3c3c=>{const _0x216d79=_0x217234;VisuMZ[_0x216d79(0x44a)](_0x1f3c3c,_0x1f3c3c),_0x1f3c3c[_0x216d79(0x19c)]='radioactivebeam',VisuMZ[_0x216d79(0xd0)][_0x216d79(0x42a)](_0x1f3c3c);}),PluginManager[_0x217234(0x3df)](pluginData['name'],_0x217234(0x3be),_0x2005d3=>{const _0x2c67c7=_0x217234;VisuMZ[_0x2c67c7(0x44a)](_0x2005d3,_0x2005d3),_0x2005d3[_0x2c67c7(0x19c)]=_0x2c67c7(0x4b4),VisuMZ[_0x2c67c7(0xd0)][_0x2c67c7(0x42a)](_0x2005d3);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0xdd),_0x157738=>{const _0x174b7a=_0x217234;VisuMZ[_0x174b7a(0x44a)](_0x157738,_0x157738),_0x157738[_0x174b7a(0x19c)]=_0x174b7a(0x2a8),VisuMZ[_0x174b7a(0xd0)][_0x174b7a(0x42a)](_0x157738);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0xf2),_0x14f158=>{const _0x2d7783=_0x217234;VisuMZ['ConvertParams'](_0x14f158,_0x14f158),_0x14f158[_0x2d7783(0x19c)]='toxicgas',VisuMZ[_0x2d7783(0xd0)]['applyPluginCmdSettings'](_0x14f158);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],'Wind_AutumnLeaves',_0x499469=>{const _0xd9cef5=_0x217234;VisuMZ[_0xd9cef5(0x44a)](_0x499469,_0x499469),_0x499469[_0xd9cef5(0x19c)]=_0xd9cef5(0x2d0),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x499469);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x254),_0x345a00=>{const _0x31cec4=_0x217234;VisuMZ[_0x31cec4(0x44a)](_0x345a00,_0x345a00),_0x345a00[_0x31cec4(0x19c)]=_0x31cec4(0x49d),VisuMZ[_0x31cec4(0xd0)][_0x31cec4(0x42a)](_0x345a00);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],'Wind_CherryBlossoms',_0x3ade38=>{const _0x347c23=_0x217234;VisuMZ[_0x347c23(0x44a)](_0x3ade38,_0x3ade38),_0x3ade38[_0x347c23(0x19c)]=_0x347c23(0x2cd),VisuMZ[_0x347c23(0xd0)][_0x347c23(0x42a)](_0x3ade38);}),PluginManager[_0x217234(0x3df)](pluginData['name'],_0x217234(0x1ff),_0x3b71ce=>{const _0x36d172=_0x217234;VisuMZ[_0x36d172(0x44a)](_0x3b71ce,_0x3b71ce),_0x3b71ce[_0x36d172(0x19c)]=_0x36d172(0x391),VisuMZ[_0x36d172(0xd0)]['applyPluginCmdSettings'](_0x3b71ce);}),PluginManager['registerCommand'](pluginData['name'],'Wind_GrassyGust',_0x124996=>{const _0x5660f1=_0x217234;VisuMZ[_0x5660f1(0x44a)](_0x124996,_0x124996),_0x124996[_0x5660f1(0x19c)]=_0x5660f1(0xee),VisuMZ[_0x5660f1(0xd0)][_0x5660f1(0x42a)](_0x124996);}),PluginManager[_0x217234(0x3df)](pluginData['name'],'Wind_GreenLeaves',_0x297004=>{const _0x262c99=_0x217234;VisuMZ[_0x262c99(0x44a)](_0x297004,_0x297004),_0x297004[_0x262c99(0x19c)]=_0x262c99(0x119),VisuMZ[_0x262c99(0xd0)][_0x262c99(0x42a)](_0x297004);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0xb8),_0x54c4ea=>{const _0x8242c8=_0x217234;VisuMZ[_0x8242c8(0x44a)](_0x54c4ea,_0x54c4ea),_0x54c4ea['type']=_0x8242c8(0x106),VisuMZ[_0x8242c8(0xd0)][_0x8242c8(0x42a)](_0x54c4ea);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],'Wind_Tempest',_0x843ac3=>{const _0x58faa4=_0x217234;VisuMZ[_0x58faa4(0x44a)](_0x843ac3,_0x843ac3),_0x843ac3['type']=_0x58faa4(0x24b),VisuMZ[_0x58faa4(0xd0)][_0x58faa4(0x42a)](_0x843ac3);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],'Wind_WhiteClouds',_0x41cfff=>{const _0x1a1a4c=_0x217234;VisuMZ[_0x1a1a4c(0x44a)](_0x41cfff,_0x41cfff),_0x41cfff['type']=_0x1a1a4c(0x345),VisuMZ['WeatherEffects'][_0x1a1a4c(0x42a)](_0x41cfff);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],'Wind_XtremeSpeed',_0x223575=>{const _0x4418d5=_0x217234;VisuMZ[_0x4418d5(0x44a)](_0x223575,_0x223575),_0x223575[_0x4418d5(0x19c)]=_0x4418d5(0x1bd),VisuMZ[_0x4418d5(0xd0)]['applyPluginCmdSettings'](_0x223575);}),PluginManager[_0x217234(0x3df)](pluginData['name'],_0x217234(0xd8),_0x1e354d=>{const _0x124a04=_0x217234;VisuMZ['ConvertParams'](_0x1e354d,_0x1e354d),_0x1e354d[_0x124a04(0x19c)]=_0x124a04(0xe1),VisuMZ[_0x124a04(0xd0)][_0x124a04(0x42a)](_0x1e354d);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],_0x217234(0x51b),_0x1ef89c=>{const _0x46df19=_0x217234;VisuMZ[_0x46df19(0x44a)](_0x1ef89c,_0x1ef89c),_0x1ef89c[_0x46df19(0x19c)]=_0x46df19(0x4d8),VisuMZ[_0x46df19(0xd0)][_0x46df19(0x42a)](_0x1ef89c);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x44f),_0x11ccc3=>{const _0x156317=_0x217234;VisuMZ[_0x156317(0x44a)](_0x11ccc3,_0x11ccc3),_0x11ccc3[_0x156317(0x19c)]=_0x156317(0x4d3),VisuMZ[_0x156317(0xd0)][_0x156317(0x42a)](_0x11ccc3);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x450),_0x14868e=>{const _0x208eb2=_0x217234;VisuMZ[_0x208eb2(0x44a)](_0x14868e,_0x14868e),_0x14868e[_0x208eb2(0x19c)]=_0x208eb2(0x4f4),VisuMZ[_0x208eb2(0xd0)][_0x208eb2(0x42a)](_0x14868e);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x26b),_0x20facd=>{const _0x45ed52=_0x217234;VisuMZ['ConvertParams'](_0x20facd,_0x20facd),_0x20facd[_0x45ed52(0x19c)]='pastelbrume',VisuMZ[_0x45ed52(0xd0)][_0x45ed52(0x42a)](_0x20facd);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],'Light_PrismBurst',_0x3d10c4=>{const _0x2ad398=_0x217234;VisuMZ['ConvertParams'](_0x3d10c4,_0x3d10c4),_0x3d10c4['type']=_0x2ad398(0x160),VisuMZ[_0x2ad398(0xd0)][_0x2ad398(0x42a)](_0x3d10c4);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0xb1),_0x3d62f1=>{const _0x6b224b=_0x217234;VisuMZ[_0x6b224b(0x44a)](_0x3d62f1,_0x3d62f1),_0x3d62f1[_0x6b224b(0x19c)]=_0x6b224b(0x2fb),VisuMZ['WeatherEffects'][_0x6b224b(0x42a)](_0x3d62f1);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x19a),_0x11c75c=>{const _0x382c80=_0x217234;VisuMZ[_0x382c80(0x44a)](_0x11c75c,_0x11c75c),_0x11c75c[_0x382c80(0x19c)]=_0x382c80(0x413),VisuMZ['WeatherEffects'][_0x382c80(0x42a)](_0x11c75c);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],_0x217234(0xd4),_0x21191=>{const _0x1d28fd=_0x217234;VisuMZ[_0x1d28fd(0x44a)](_0x21191,_0x21191),_0x21191[_0x1d28fd(0x19c)]=_0x1d28fd(0x448),VisuMZ[_0x1d28fd(0xd0)][_0x1d28fd(0x42a)](_0x21191);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],'Light_Stars',_0x7bf698=>{const _0x5b5863=_0x217234;VisuMZ[_0x5b5863(0x44a)](_0x7bf698,_0x7bf698),_0x7bf698['type']=_0x5b5863(0x424),VisuMZ['WeatherEffects'][_0x5b5863(0x42a)](_0x7bf698);}),PluginManager[_0x217234(0x3df)](pluginData['name'],_0x217234(0x1c1),_0x369520=>{const _0x51cd06=_0x217234;VisuMZ['ConvertParams'](_0x369520,_0x369520),_0x369520[_0x51cd06(0x19c)]=_0x51cd06(0x38d),VisuMZ[_0x51cd06(0xd0)][_0x51cd06(0x42a)](_0x369520);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x2ae),_0x5e1359=>{const _0x47b4f0=_0x217234;VisuMZ[_0x47b4f0(0x44a)](_0x5e1359,_0x5e1359),_0x5e1359[_0x47b4f0(0x19c)]=_0x47b4f0(0x4da),VisuMZ[_0x47b4f0(0xd0)][_0x47b4f0(0x42a)](_0x5e1359);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x282),_0x1c0613=>{const _0x203b45=_0x217234;VisuMZ[_0x203b45(0x44a)](_0x1c0613,_0x1c0613),_0x1c0613[_0x203b45(0x19c)]='bloodrain',VisuMZ[_0x203b45(0xd0)][_0x203b45(0x42a)](_0x1c0613);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],'Dark_DarkOrbs',_0x407394=>{const _0x2ac6a6=_0x217234;VisuMZ[_0x2ac6a6(0x44a)](_0x407394,_0x407394),_0x407394[_0x2ac6a6(0x19c)]=_0x2ac6a6(0x38e),VisuMZ[_0x2ac6a6(0xd0)][_0x2ac6a6(0x42a)](_0x407394);}),PluginManager['registerCommand'](pluginData['name'],_0x217234(0x198),_0x5a0f5e=>{const _0x15ca1c=_0x217234;VisuMZ['ConvertParams'](_0x5a0f5e,_0x5a0f5e),_0x5a0f5e[_0x15ca1c(0x19c)]='fumes',VisuMZ[_0x15ca1c(0xd0)]['applyPluginCmdSettings'](_0x5a0f5e);}),PluginManager['registerCommand'](pluginData['name'],_0x217234(0x3a7),_0x585054=>{const _0x36e3c3=_0x217234;VisuMZ[_0x36e3c3(0x44a)](_0x585054,_0x585054),_0x585054['type']='moonbeams',VisuMZ[_0x36e3c3(0xd0)][_0x36e3c3(0x42a)](_0x585054);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],'Dark_ShadowBurst',_0x490e30=>{const _0x3a3083=_0x217234;VisuMZ['ConvertParams'](_0x490e30,_0x490e30),_0x490e30[_0x3a3083(0x19c)]=_0x3a3083(0x46d),VisuMZ['WeatherEffects'][_0x3a3083(0x42a)](_0x490e30);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x33f),_0x4647ca=>{const _0x48d115=_0x217234;VisuMZ[_0x48d115(0x44a)](_0x4647ca,_0x4647ca),_0x4647ca['type']=_0x48d115(0xed),VisuMZ[_0x48d115(0xd0)][_0x48d115(0x42a)](_0x4647ca);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],'Dark_SmokeClouds',_0x3014fe=>{const _0x1992fb=_0x217234;VisuMZ[_0x1992fb(0x44a)](_0x3014fe,_0x3014fe),_0x3014fe[_0x1992fb(0x19c)]=_0x1992fb(0x180),VisuMZ[_0x1992fb(0xd0)][_0x1992fb(0x42a)](_0x3014fe);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],_0x217234(0xa3),_0x389ad7=>{const _0x4db7f2=_0x217234;VisuMZ[_0x4db7f2(0x44a)](_0x389ad7,_0x389ad7),_0x389ad7[_0x4db7f2(0x19c)]=_0x4db7f2(0x135),VisuMZ['WeatherEffects'][_0x4db7f2(0x42a)](_0x389ad7);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0xc7),_0x508da4=>{const _0x4877f4=_0x217234;VisuMZ[_0x4877f4(0x44a)](_0x508da4,_0x508da4),_0x508da4['type']='slow_icons_2',VisuMZ[_0x4877f4(0xd0)][_0x4877f4(0x42a)](_0x508da4);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0xf5),_0x3b4c06=>{const _0x5aec83=_0x217234;VisuMZ[_0x5aec83(0x44a)](_0x3b4c06,_0x3b4c06),_0x3b4c06[_0x5aec83(0x19c)]=_0x5aec83(0x44e),VisuMZ[_0x5aec83(0xd0)][_0x5aec83(0x42a)](_0x3b4c06);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x285),_0x27ac94=>{const _0x41e607=_0x217234;VisuMZ[_0x41e607(0x44a)](_0x27ac94,_0x27ac94),_0x27ac94['type']=_0x41e607(0x2b4),VisuMZ[_0x41e607(0xd0)][_0x41e607(0x42a)](_0x27ac94);}),PluginManager[_0x217234(0x3df)](pluginData['name'],_0x217234(0x433),_0x59257d=>{const _0x4db35f=_0x217234;VisuMZ[_0x4db35f(0x44a)](_0x59257d,_0x59257d),_0x59257d[_0x4db35f(0x19c)]=_0x4db35f(0x1c2),VisuMZ[_0x4db35f(0xd0)][_0x4db35f(0x42a)](_0x59257d);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x46a),_0x4e8811=>{const _0x431260=_0x217234;VisuMZ[_0x431260(0x44a)](_0x4e8811,_0x4e8811),_0x4e8811[_0x431260(0x19c)]=_0x431260(0x3a2),VisuMZ[_0x431260(0xd0)][_0x431260(0x42a)](_0x4e8811);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x14d),_0x26c08e=>{const _0x2319ae=_0x217234;VisuMZ[_0x2319ae(0x44a)](_0x26c08e,_0x26c08e),_0x26c08e[_0x2319ae(0x19c)]='slow_icons_1',VisuMZ['WeatherEffects'][_0x2319ae(0x42a)](_0x26c08e);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x4f9),_0x36bc65=>{const _0x281c27=_0x217234;VisuMZ[_0x281c27(0x44a)](_0x36bc65,_0x36bc65),_0x36bc65[_0x281c27(0x19c)]=_0x281c27(0x3ad),VisuMZ[_0x281c27(0xd0)][_0x281c27(0x42a)](_0x36bc65);}),PluginManager[_0x217234(0x3df)](pluginData['name'],_0x217234(0x4b1),_0x11b10f=>{const _0x3d0166=_0x217234;VisuMZ[_0x3d0166(0x44a)](_0x11b10f,_0x11b10f),_0x11b10f[_0x3d0166(0x19c)]=_0x3d0166(0x22f),VisuMZ[_0x3d0166(0xd0)]['applyPluginCmdSettings'](_0x11b10f);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],'Slow_Icons_Mid',_0x42b361=>{const _0x5429f8=_0x217234;VisuMZ['ConvertParams'](_0x42b361,_0x42b361),_0x42b361[_0x5429f8(0x19c)]='slow_icons_5',VisuMZ[_0x5429f8(0xd0)]['applyPluginCmdSettings'](_0x42b361);}),PluginManager[_0x217234(0x3df)](pluginData['name'],'Medium_Icons_Up',_0x99cf01=>{const _0x5ba082=_0x217234;VisuMZ[_0x5ba082(0x44a)](_0x99cf01,_0x99cf01),_0x99cf01[_0x5ba082(0x19c)]=_0x5ba082(0x131),VisuMZ[_0x5ba082(0xd0)][_0x5ba082(0x42a)](_0x99cf01);}),PluginManager[_0x217234(0x3df)](pluginData['name'],'Medium_Icons_UpperRight',_0x12b8e1=>{const _0x58eed2=_0x217234;VisuMZ[_0x58eed2(0x44a)](_0x12b8e1,_0x12b8e1),_0x12b8e1[_0x58eed2(0x19c)]=_0x58eed2(0x26c),VisuMZ[_0x58eed2(0xd0)][_0x58eed2(0x42a)](_0x12b8e1);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],'Medium_Icons_Right',_0x3f98e1=>{const _0x362016=_0x217234;VisuMZ[_0x362016(0x44a)](_0x3f98e1,_0x3f98e1),_0x3f98e1[_0x362016(0x19c)]=_0x362016(0x471),VisuMZ[_0x362016(0xd0)][_0x362016(0x42a)](_0x3f98e1);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],'Medium_Icons_LowerRight',_0x28aa50=>{const _0x420321=_0x217234;VisuMZ[_0x420321(0x44a)](_0x28aa50,_0x28aa50),_0x28aa50[_0x420321(0x19c)]='medium_icons_3',VisuMZ[_0x420321(0xd0)]['applyPluginCmdSettings'](_0x28aa50);}),PluginManager[_0x217234(0x3df)](pluginData['name'],_0x217234(0x3e0),_0x4ee8b4=>{const _0x278fdb=_0x217234;VisuMZ[_0x278fdb(0x44a)](_0x4ee8b4,_0x4ee8b4),_0x4ee8b4[_0x278fdb(0x19c)]=_0x278fdb(0x131),VisuMZ[_0x278fdb(0xd0)][_0x278fdb(0x42a)](_0x4ee8b4);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0xf6),_0x31d4fa=>{const _0x49312a=_0x217234;VisuMZ[_0x49312a(0x44a)](_0x31d4fa,_0x31d4fa),_0x31d4fa[_0x49312a(0x19c)]='medium_icons_1',VisuMZ[_0x49312a(0xd0)]['applyPluginCmdSettings'](_0x31d4fa);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],_0x217234(0x2db),_0x21c876=>{const _0x4c7efa=_0x217234;VisuMZ[_0x4c7efa(0x44a)](_0x21c876,_0x21c876),_0x21c876[_0x4c7efa(0x19c)]=_0x4c7efa(0xcb),VisuMZ[_0x4c7efa(0xd0)][_0x4c7efa(0x42a)](_0x21c876);}),PluginManager['registerCommand'](pluginData['name'],_0x217234(0x120),_0x210b66=>{const _0x5726e3=_0x217234;VisuMZ[_0x5726e3(0x44a)](_0x210b66,_0x210b66),_0x210b66[_0x5726e3(0x19c)]=_0x5726e3(0x4a4),VisuMZ[_0x5726e3(0xd0)][_0x5726e3(0x42a)](_0x210b66);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],_0x217234(0x48c),_0x5a3d91=>{const _0xd3484f=_0x217234;VisuMZ[_0xd3484f(0x44a)](_0x5a3d91,_0x5a3d91),_0x5a3d91[_0xd3484f(0x19c)]=_0xd3484f(0x146),VisuMZ[_0xd3484f(0xd0)]['applyPluginCmdSettings'](_0x5a3d91);}),PluginManager[_0x217234(0x3df)](pluginData['name'],_0x217234(0x264),_0xe1cbeb=>{const _0x5e4ea3=_0x217234;VisuMZ[_0x5e4ea3(0x44a)](_0xe1cbeb,_0xe1cbeb),_0xe1cbeb[_0x5e4ea3(0x19c)]=_0x5e4ea3(0x2fc),VisuMZ[_0x5e4ea3(0xd0)]['applyPluginCmdSettings'](_0xe1cbeb);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x458),_0x181376=>{const _0x26bd1d=_0x217234;VisuMZ[_0x26bd1d(0x44a)](_0x181376,_0x181376),_0x181376[_0x26bd1d(0x19c)]=_0x26bd1d(0x25d),VisuMZ['WeatherEffects'][_0x26bd1d(0x42a)](_0x181376);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],_0x217234(0x115),_0x4a17a3=>{const _0x15c5a2=_0x217234;VisuMZ[_0x15c5a2(0x44a)](_0x4a17a3,_0x4a17a3),_0x4a17a3['type']=_0x15c5a2(0x4a3),VisuMZ['WeatherEffects'][_0x15c5a2(0x42a)](_0x4a17a3);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],_0x217234(0x1f7),_0x524f38=>{const _0x139abf=_0x217234;VisuMZ['ConvertParams'](_0x524f38,_0x524f38),_0x524f38[_0x139abf(0x19c)]=_0x139abf(0x20a),VisuMZ[_0x139abf(0xd0)][_0x139abf(0x42a)](_0x524f38);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x29c),_0x197439=>{const _0x3291b3=_0x217234;VisuMZ[_0x3291b3(0x44a)](_0x197439,_0x197439),_0x197439[_0x3291b3(0x19c)]=_0x3291b3(0x2fc),VisuMZ[_0x3291b3(0xd0)]['applyPluginCmdSettings'](_0x197439);}),PluginManager['registerCommand'](pluginData[_0x217234(0x318)],'Fast_Icons_LowerLeft',_0x2f8996=>{const _0x37f1eb=_0x217234;VisuMZ[_0x37f1eb(0x44a)](_0x2f8996,_0x2f8996),_0x2f8996['type']='fast_icons_1',VisuMZ[_0x37f1eb(0xd0)][_0x37f1eb(0x42a)](_0x2f8996);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x1b1),_0x3c24a5=>{const _0x9a1168=_0x217234;VisuMZ[_0x9a1168(0x44a)](_0x3c24a5,_0x3c24a5),_0x3c24a5[_0x9a1168(0x19c)]=_0x9a1168(0x368),VisuMZ[_0x9a1168(0xd0)]['applyPluginCmdSettings'](_0x3c24a5);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],'Fast_Icons_UpperLeft',_0x4e4234=>{const _0xfeca8c=_0x217234;VisuMZ[_0xfeca8c(0x44a)](_0x4e4234,_0x4e4234),_0x4e4234['type']=_0xfeca8c(0x4d1),VisuMZ[_0xfeca8c(0xd0)][_0xfeca8c(0x42a)](_0x4e4234);}),PluginManager[_0x217234(0x3df)](pluginData[_0x217234(0x318)],_0x217234(0x2c7),_0x4f3769=>{const _0x48e696=_0x217234;VisuMZ[_0x48e696(0x44a)](_0x4f3769,_0x4f3769),_0x4f3769['type']='fast_icons_5',VisuMZ['WeatherEffects'][_0x48e696(0x42a)](_0x4f3769);}),VisuMZ[_0x217234(0xd0)][_0x217234(0x2ff)]={'NoWeather':/<NO WEATHER>/gi},Weather[_0x217234(0x2ef)]=0xa,VisuMZ[_0x217234(0xd0)][_0x217234(0x468)]=Weather[_0x217234(0x406)][_0x217234(0xb5)],Weather['prototype']['update']=function(){const _0x11fca2=_0x217234;this[_0x11fca2(0x1b6)](),VisuMZ['WeatherEffects']['Weather_update']['call'](this);},Weather[_0x217234(0x406)][_0x217234(0xd7)]=function(){const _0x468ea3=_0x217234;this['_rainBitmap']=new Bitmap(0x1,0x1),this[_0x468ea3(0x49b)]=new Bitmap(0x1,0x1),this['_snowBitmap']=new Bitmap(0x1,0x1);},Weather[_0x217234(0x406)][_0x217234(0x446)]=function(){const _0x2f6b51=_0x217234;if(!this[_0x2f6b51(0x15a)])return;this[_0x2f6b51(0x349)](),this[_0x2f6b51(0x394)]();},Weather[_0x217234(0x406)][_0x217234(0x416)]=function(){const _0x4c6f23=_0x217234,_0x3bdeb7=this[_0x4c6f23(0x50d)]();while(this[_0x4c6f23(0x3f7)][_0x4c6f23(0x497)]<_0x3bdeb7)this[_0x4c6f23(0x3cc)]();while(this[_0x4c6f23(0x3f7)][_0x4c6f23(0x497)]>_0x3bdeb7)this[_0x4c6f23(0xa1)]();for(const _0x19e111 of this['_sprites']){if(_0x4c6f23(0x356)!==_0x4c6f23(0x356)){const _0x600078=this[_0x4c6f23(0x50d)]();while(this[_0x4c6f23(0x3f7)][_0x4c6f23(0x497)]<_0x600078)this[_0x4c6f23(0x3cc)]();while(this['_sprites'][_0x4c6f23(0x497)]>_0x600078)this[_0x4c6f23(0xa1)]();for(const _0x42e2ef of this[_0x4c6f23(0x3f7)]){_0x42e2ef[_0x4c6f23(0xb5)]();}}else _0x19e111['update']();}},Weather[_0x217234(0x406)]['_addSprite']=function(){const _0xaad331=_0x217234,_0x4f3d70=new Sprite_WeatherParticle(this,this[_0xaad331(0x3f7)][_0xaad331(0x497)]);this[_0xaad331(0x3f7)]['push'](_0x4f3d70),this[_0xaad331(0x457)](_0x4f3d70);},Weather[_0x217234(0x406)][_0x217234(0x2de)]=function(){},Weather['prototype'][_0x217234(0x3d0)]=function(_0x2351aa,_0x479a42){const _0x389fec=_0x217234;this[_0x389fec(0x114)]=_0x2351aa,this[_0x389fec(0x2be)]=_0x479a42||![];},Weather['prototype'][_0x217234(0x506)]=function(){const _0x37786c=_0x217234;return $gameScreen[_0x37786c(0x211)](this['_layerID'],this[_0x37786c(0x2be)]);},Weather['prototype']['updateData']=function(){const _0x53d548=_0x217234,_0x5425d9=this[_0x53d548(0x506)]();if(!_0x5425d9)return;this[_0x53d548(0x19c)]=_0x5425d9[_0x53d548(0x19c)],this['power']=_0x5425d9[_0x53d548(0x13a)];if($gameMap&&$gameMap['isNoWeather']()){if('Hhpej'!==_0x53d548(0x3a1)){var _0x3de5a4=_0x475347[_0x59e470],_0x55b919=_0x235452[_0x2690c6+0x1],_0x5b8c6e=(_0x3de5a4['y']+_0x55b919['y'])/0x2,_0x1fce9e=_0x5b8c6e+(_0xac331b[_0x53d548(0xc9)]()*0x2-0x1)*_0x57f26c;_0x24aeb1[_0x53d548(0x441)](_0x3de5a4,{'x':(_0x3de5a4['x']+_0x55b919['x'])/0x2,'y':_0x1fce9e});}else this[_0x53d548(0x13a)]=0x0;}},Weather[_0x217234(0x406)][_0x217234(0x47b)]=function(){const _0x33b2bc=_0x217234;if(SceneManager[_0x33b2bc(0x100)]())return;this['origin']['x']=$gameMap['displayX']()*$gameMap['tileWidth'](),this[_0x33b2bc(0x501)]['y']=$gameMap[_0x33b2bc(0x219)]()*$gameMap['tileHeight']();},Weather[_0x217234(0x406)][_0x217234(0x349)]=function(){const _0x529fe=_0x217234;if(this['data']()[_0x529fe(0x19c)]===_0x529fe(0x193))return;if(this['_lastDimmerColor']===this[_0x529fe(0x506)]()[_0x529fe(0x50b)]['color'])return;const _0x4c6681=this[_0x529fe(0x506)]()[_0x529fe(0x298)];let _0x41cf26=this[_0x529fe(0x506)]()[_0x529fe(0x50b)][_0x529fe(0x27d)];this[_0x529fe(0x2c3)]=_0x41cf26;if(_0x4c6681>0x0){if(_0x529fe(0x176)!=='frwSb'){const _0x26fe1a=[this['_dimmerSprite']['_red'],this[_0x529fe(0x15a)][_0x529fe(0x2c4)],this[_0x529fe(0x15a)][_0x529fe(0x405)]],_0x3e7674=ColorManager['hexToArray'](_0x41cf26);for(let _0x3cbf98=0x0;_0x3cbf98<0x3;_0x3cbf98++){_0x26fe1a[_0x3cbf98]=Math[_0x529fe(0x2e4)]((_0x26fe1a[_0x3cbf98]*(_0x4c6681-0x1)+_0x3e7674[_0x3cbf98])/_0x4c6681);}this[_0x529fe(0x2c3)]=ColorManager['arrayToHex'](_0x26fe1a);}else{const _0x25a45d=_0x3da694/_0x986829,_0x1a8a81=this[_0x529fe(0x469)];_0x1a8a81['save'](),_0x1a8a81[_0x529fe(0x23f)](0x1,_0x25a45d),this[_0x529fe(0x431)](_0x246c4f,_0x469129/_0x25a45d,_0x474e72,0x168,_0x2bb86d,_0x2bc116,_0x4b3077,0x0),_0x1a8a81[_0x529fe(0x235)](),this[_0x529fe(0x504)][_0x529fe(0xb5)]();}}const _0x2ed05c=ColorManager[_0x529fe(0x42d)](this[_0x529fe(0x2c3)]);this[_0x529fe(0x15a)][_0x529fe(0x488)](_0x2ed05c[0x0]||0x0,_0x2ed05c[0x1]||0x0,_0x2ed05c[0x2]||0x0);},Weather[_0x217234(0x406)][_0x217234(0x394)]=function(){const _0x3ebedd=_0x217234,_0x3d370b=this[_0x3ebedd(0x506)]()[_0x3ebedd(0x298)],_0x588fe8=this[_0x3ebedd(0x506)]()[_0x3ebedd(0x50b)];let _0x37969c=_0x588fe8['opacityMinimum']+_0x588fe8[_0x3ebedd(0x4e1)]*this[_0x3ebedd(0x506)]()[_0x3ebedd(0xaa)];if(this[_0x3ebedd(0x13a)]<=0x0)_0x37969c=0x0;let _0x389c8a=_0x37969c;_0x3d370b>0x0&&(_0x389c8a=(this[_0x3ebedd(0x15a)][_0x3ebedd(0x36f)]*(_0x3d370b-0x1)+_0x37969c)/_0x3d370b),$gameMap&&$gameMap['isNoWeather']()&&(_0x389c8a=0x0),this[_0x3ebedd(0x15a)][_0x3ebedd(0x36f)]=_0x389c8a;},Weather['prototype'][_0x217234(0x50d)]=function(){const _0x2a5f14=_0x217234;if($gameMap&&$gameMap[_0x2a5f14(0x138)]())return 0x0;if(this[_0x2a5f14(0x13a)]<0x1)return 0x0;const _0x1c5d9a=this[_0x2a5f14(0x506)](),_0x1e19e0=_0x1c5d9a['sprite'][_0x2a5f14(0x292)]||0x0,_0x441125=_0x1c5d9a[_0x2a5f14(0x165)][_0x2a5f14(0x2cb)]||0x0,_0x62ec53=(ConfigManager[_0x2a5f14(0xb7)]??0x64)/0x64,_0x277488=Math[_0x2a5f14(0x186)](this[_0x2a5f14(0x13a)]*_0x441125*_0x62ec53)+_0x1e19e0;return Math[_0x2a5f14(0x186)](_0x277488);},ConfigManager[_0x217234(0xb7)]=0x64,VisuMZ[_0x217234(0xd0)][_0x217234(0x1a6)]=ConfigManager[_0x217234(0x452)],ConfigManager[_0x217234(0x452)]=function(){const _0x40068a=_0x217234,_0x31a94e=VisuMZ[_0x40068a(0xd0)][_0x40068a(0x1a6)][_0x40068a(0x399)](this);return _0x31a94e[_0x40068a(0xb7)]=this[_0x40068a(0xb7)],_0x31a94e;},VisuMZ['WeatherEffects'][_0x217234(0x3bd)]=ConfigManager[_0x217234(0x1c4)],ConfigManager[_0x217234(0x1c4)]=function(_0x1f874d){const _0x271e22=_0x217234;VisuMZ[_0x271e22(0xd0)]['ConfigManager_applyData'][_0x271e22(0x399)](this,_0x1f874d);if('weatherDensity'in _0x1f874d)this[_0x271e22(0xb7)]=_0x1f874d['weatherDensity'];else{if(_0x271e22(0x437)!=='ZbnRB'){if(this['_weatherIcons'])return this[_0x271e22(0x4f5)];return this['_weatherIcons']=_0x5020c8['load']('img/system/Iconset.png'),this[_0x271e22(0x4f5)][_0x271e22(0x250)]=_0x2fd3d9[_0x271e22(0x12c)],this[_0x271e22(0x4f5)];}else this[_0x271e22(0xb7)]=0x64;}},ImageManager[_0x217234(0xca)]=VisuMZ[_0x217234(0xd0)]['Settings']['General'][_0x217234(0x36c)],ImageManager[_0x217234(0x465)]=VisuMZ[_0x217234(0xd0)][_0x217234(0x21c)]['General'][_0x217234(0x4cc)]||0x10,ImageManager[_0x217234(0x12c)]=VisuMZ[_0x217234(0xd0)][_0x217234(0x21c)][_0x217234(0x474)][_0x217234(0x1a3)],ImageManager[_0x217234(0x297)]=![],ImageManager[_0x217234(0x1e4)]=['🐄','🐕','🐖','🐏','🐑','🐐','🐇','🐎','🐒','🐓','🦆','🐈','🐁','🐀','🦢','🐢'],VisuMZ[_0x217234(0xd0)][_0x217234(0x3f1)]=Scene_Boot['prototype'][_0x217234(0x32f)],Scene_Boot[_0x217234(0x406)][_0x217234(0x32f)]=function(){const _0x454ef7=_0x217234;VisuMZ['WeatherEffects'][_0x454ef7(0x3f1)][_0x454ef7(0x399)](this),ImageManager['prepareGeneratedWeatherImages']();},ImageManager['loadWeatherIcons']=function(){const _0x30c696=_0x217234;if(this[_0x30c696(0x4f5)])return this[_0x30c696(0x4f5)];return this[_0x30c696(0x4f5)]=Bitmap[_0x30c696(0x2c9)](_0x30c696(0x30a)),this[_0x30c696(0x4f5)]['smooth']=ImageManager[_0x30c696(0x12c)],this[_0x30c696(0x4f5)];},ImageManager[_0x217234(0x1a1)]=function(){const _0x86efe4=_0x217234;if(!ImageManager[_0x86efe4(0xca)])return;ImageManager[_0x86efe4(0x1b4)]();const _0x29f7c7=['none'];for(const _0x1a1b69 of _0x29f7c7){this[_0x86efe4(0x341)](_0x1a1b69);}let _0x1025ab=0x0;const _0x469989=['embers','fireflies',_0x86efe4(0x355),_0x86efe4(0x41e),'heatclouds',_0x86efe4(0x13f),_0x86efe4(0x521),_0x86efe4(0x2a5),_0x86efe4(0x4af),'blizzard',_0x86efe4(0x3b0),'snowflakes',_0x86efe4(0x2b8),_0x86efe4(0xbf),_0x86efe4(0x385),_0x86efe4(0x3f9),_0x86efe4(0x1d7),_0x86efe4(0x339),_0x86efe4(0x108),'purplehaze',_0x86efe4(0x3af),_0x86efe4(0xad),_0x86efe4(0x3b3),_0x86efe4(0x17e),_0x86efe4(0x4e2),_0x86efe4(0x51a),_0x86efe4(0x3b9),_0x86efe4(0x1d4),_0x86efe4(0xe8),_0x86efe4(0x274),'drip',_0x86efe4(0x173),'rainbowarch',_0x86efe4(0x2a8),_0x86efe4(0xdc),_0x86efe4(0x4dd),_0x86efe4(0x4de),_0x86efe4(0x4b4),_0x86efe4(0xfc),_0x86efe4(0x2cf),_0x86efe4(0x3a4),'radioactivebeam',_0x86efe4(0x472),_0x86efe4(0x2d0),_0x86efe4(0x2cd),_0x86efe4(0x119),_0x86efe4(0x391),_0x86efe4(0x345),_0x86efe4(0x106),_0x86efe4(0xee),_0x86efe4(0x1bd),_0x86efe4(0x49d),_0x86efe4(0x424),_0x86efe4(0x200),_0x86efe4(0x413),'rainboworbs',_0x86efe4(0x4f4),_0x86efe4(0xe1),_0x86efe4(0x2fb),_0x86efe4(0x4d8),'ashdebris',_0x86efe4(0x4da),_0x86efe4(0x135),'smokefog','darkorbs',_0x86efe4(0x388),_0x86efe4(0x151),_0x86efe4(0x180),'shadowburst','fumes','sparkle',_0x86efe4(0x12b),'icons'];_0x1025ab=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS'];while(_0x1025ab--){if(_0x86efe4(0x3c1)!==_0x86efe4(0x3c1))_0x25f350(_0x86efe4(0x205)[_0x86efe4(0x126)](_0x25b0ce,_0x570b1a)),_0x195b05['exit']();else for(const _0x78e7a8 of _0x469989){this[_0x86efe4(0x341)](_0x78e7a8);}}const _0x2c2751=['thunderbolt','thunderbolt','aurora',_0x86efe4(0x3f9),'aurora','aurora',_0x86efe4(0x4af),_0x86efe4(0x4af)];_0x1025ab=ImageManager[_0x86efe4(0x465)];while(_0x1025ab--){if(_0x86efe4(0x470)!==_0x86efe4(0x364))for(const _0x3f88ee of _0x2c2751){this[_0x86efe4(0x341)](_0x3f88ee);}else{const _0x50a1ac=this['_cached_WeatherEffects_PurpleHaze'];return _0x50a1ac[_0x50d693[_0x86efe4(0x1ae)](_0x1663a0['random']()*_0x50a1ac['length'])];}}},ImageManager['getGeneratedWeatherParticle']=function(_0x2c255d){const _0x3e59b0=_0x217234;_0x2c255d=_0x2c255d[_0x3e59b0(0x2f1)]()['trim']();switch(_0x2c255d){case'none':return this[_0x3e59b0(0x27b)]();case _0x3e59b0(0x3b9):return this[_0x3e59b0(0x117)]();case'storm':return this[_0x3e59b0(0x403)]();case'snow':return this[_0x3e59b0(0xbb)]();case _0x3e59b0(0x3eb):return this['weatherEffectsEmbers']();case _0x3e59b0(0x355):return this[_0x3e59b0(0x3e7)]();case _0x3e59b0(0x1fd):return this[_0x3e59b0(0x4e7)]();case'flamewall':return this['weatherEffectsFlameWall']();case'heatclouds':return this[_0x3e59b0(0x4ba)]();case _0x3e59b0(0x13f):return this['weatherEffectsSunBeams']();case _0x3e59b0(0x521):return this[_0x3e59b0(0x41d)]();case _0x3e59b0(0x2a5):return this[_0x3e59b0(0x2ec)]();case _0x3e59b0(0xfb):case _0x3e59b0(0x4af):return this[_0x3e59b0(0xe4)]();case'blizzard':return this['weatherEffectsBlizzard']();case'snowflakes':return this[_0x3e59b0(0x17b)]();case _0x3e59b0(0x2b8):return this[_0x3e59b0(0x38c)]();case _0x3e59b0(0xbf):return this[_0x3e59b0(0x4a2)]();case'diamonddust':return this[_0x3e59b0(0x4e4)]();case _0x3e59b0(0x3f9):return this['weatherEffectsAurora']();case _0x3e59b0(0x1d7):return this[_0x3e59b0(0x1de)]();case _0x3e59b0(0x339):return this['weatherEffectsSleet']();case'glistening':return this[_0x3e59b0(0x49f)]();case _0x3e59b0(0x108):case _0x3e59b0(0x3c3):case _0x3e59b0(0x17e):case'plasmasurge':case'discharge':return this[_0x3e59b0(0x41b)]();case _0x3e59b0(0x34a):return this[_0x3e59b0(0x4ef)]();case _0x3e59b0(0x3af):return this[_0x3e59b0(0x29b)]();case'ultraviolet':return this[_0x3e59b0(0xa8)]();case _0x3e59b0(0x3b3):case'staticcharge':return this[_0x3e59b0(0x3d9)]();case _0x3e59b0(0x51a):return this[_0x3e59b0(0x243)]();case _0x3e59b0(0xe8):return this['weatherEffectsRainClouds']();case'mist':case _0x3e59b0(0x238):return this[_0x3e59b0(0x395)]();case _0x3e59b0(0x15b):return this[_0x3e59b0(0xf1)]();case _0x3e59b0(0x173):return this[_0x3e59b0(0x459)]();case _0x3e59b0(0x329):return this['weatherEffectsCloudBurst']();case _0x3e59b0(0x425):return this[_0x3e59b0(0xde)]();case _0x3e59b0(0x2a8):return this[_0x3e59b0(0x328)]();case _0x3e59b0(0xdc):return this[_0x3e59b0(0x475)]();case _0x3e59b0(0x4dd):return this[_0x3e59b0(0x11c)]();case'dustclouds':return this[_0x3e59b0(0x2a1)]();case _0x3e59b0(0x4b4):return this[_0x3e59b0(0x427)]();case'crumblingcave':return this['weatherEffectsCrumblingCave']();case _0x3e59b0(0x2cf):return this[_0x3e59b0(0x169)]();case _0x3e59b0(0x3a4):return this['weatherEffectsAcidRain']();case _0x3e59b0(0xc6):return this[_0x3e59b0(0xe0)]();case _0x3e59b0(0x472):return this[_0x3e59b0(0x1f6)]();case _0x3e59b0(0x2d0):return this[_0x3e59b0(0x451)]();case _0x3e59b0(0x2cd):return this['weatherEffectsCherryBlossoms']();case _0x3e59b0(0x119):return this[_0x3e59b0(0x342)]();case'dandelionseeds':return this[_0x3e59b0(0x27f)]();case _0x3e59b0(0x345):return this[_0x3e59b0(0x478)]();case _0x3e59b0(0x106):return this[_0x3e59b0(0x401)]();case _0x3e59b0(0x24b):return this['weatherEffectsTempest']();case _0x3e59b0(0xee):return this[_0x3e59b0(0x46b)]();case'xtreme':return this[_0x3e59b0(0x485)]();case'balloons':return this[_0x3e59b0(0x3a5)]();case _0x3e59b0(0x424):return this[_0x3e59b0(0x3c5)]();case'pastelbrume':return this[_0x3e59b0(0x46f)]();case'rainbowclouds':return this['weatherEffectsRainbowClouds']();case _0x3e59b0(0x448):return this[_0x3e59b0(0x36a)]();case _0x3e59b0(0x4f4):return this[_0x3e59b0(0x182)]();case _0x3e59b0(0xe1):return this[_0x3e59b0(0xd2)]();case _0x3e59b0(0x4d3):return this['weatherEffectsSunBeams']();case _0x3e59b0(0x2fb):case _0x3e59b0(0x160):return this[_0x3e59b0(0x3d6)]();case'lensflare':return this[_0x3e59b0(0x14a)]();case _0x3e59b0(0x38d):return this[_0x3e59b0(0x2d6)]();case _0x3e59b0(0x4da):return this[_0x3e59b0(0x350)]();case _0x3e59b0(0x135):return this[_0x3e59b0(0x35d)]();case _0x3e59b0(0xed):return this[_0x3e59b0(0x26e)]();case'darkorbs':return this[_0x3e59b0(0x20b)]();case _0x3e59b0(0x388):return this[_0x3e59b0(0x39d)]();case _0x3e59b0(0x151):return this[_0x3e59b0(0x2ea)]();case'smokecloud':return this['weatherEffectsSmokeClouds']();case _0x3e59b0(0x46d):return this[_0x3e59b0(0x15e)]();case _0x3e59b0(0x3d3):return this[_0x3e59b0(0x277)]();case _0x3e59b0(0x4e0):return this[_0x3e59b0(0x49f)]();case'fireworksflower':return this['weatherEffectsFireworksFlower']();case _0x3e59b0(0x2e1):case _0x3e59b0(0x102):case'slow_icons_2':case _0x3e59b0(0x1c2):case _0x3e59b0(0x3ad):case'slow_icons_5':case _0x3e59b0(0x2b4):case _0x3e59b0(0x22f):case _0x3e59b0(0x35c):case'slow_icons_9':case _0x3e59b0(0x1b0):case _0x3e59b0(0x443):case'medium_icons_2':case _0x3e59b0(0x51e):case _0x3e59b0(0xcb):case _0x3e59b0(0x146):case _0x3e59b0(0x471):case _0x3e59b0(0x4a4):case _0x3e59b0(0x2b1):case'medium_icons_9':case _0x3e59b0(0x121):case'fast_icons_1':case _0x3e59b0(0x2fc):case _0x3e59b0(0x20a):case _0x3e59b0(0x368):case _0x3e59b0(0x3bf):case _0x3e59b0(0x4a3):case _0x3e59b0(0x4d1):case _0x3e59b0(0x4a5):case _0x3e59b0(0x25d):case _0x3e59b0(0x39a):return this[_0x3e59b0(0x32c)]();default:return this[_0x3e59b0(0xbb)]();}},ImageManager[_0x217234(0x359)]=function(){const _0x11ef37=_0x217234;return!this['_tempCanvas']&&(_0x11ef37(0x3bb)===_0x11ef37(0x322)?this[_0x11ef37(0x1dd)][_0x75ad70][_0x26bdce]=_0x2dabd0[_0x11ef37(0xd0)][_0x11ef37(0x4c3)]():this['_tempCanvas']=document['createElement'](_0x11ef37(0x265))),this[_0x11ef37(0x4df)];},ImageManager[_0x217234(0x375)]=function(_0x23fb9f,_0x5db067){const _0x1d380b=_0x217234,_0x3c4f6a=this[_0x1d380b(0x359)]();return _0x3c4f6a[_0x1d380b(0x4f7)]=_0x23fb9f,_0x3c4f6a[_0x1d380b(0x466)]=_0x5db067,_0x3c4f6a[_0x1d380b(0x2fd)]('2d');},ImageManager['weatherEffectsNone']=function(){const _0x2f92f1=_0x217234;if(this['_cached_WeatherEffects_None'])return this['_cached_WeatherEffects_None'];const _0x43cf87=new Bitmap(0x1,0x1);_0x43cf87[_0x2f92f1(0x492)]=![];if(ImageManager[_0x2f92f1(0x297)])console['log']('none');return this[_0x2f92f1(0x124)]=_0x43cf87,this[_0x2f92f1(0x124)];},ImageManager[_0x217234(0x117)]=function(){const _0x281ddf=_0x217234;if(this[_0x281ddf(0x361)]&&this[_0x281ddf(0x361)][_0x281ddf(0x497)]>=ImageManager[_0x281ddf(0x465)]){const _0x47decb=this[_0x281ddf(0x361)];return _0x47decb[Math[_0x281ddf(0x1ae)](Math[_0x281ddf(0xc9)]()*_0x47decb['length'])];}const _0x483f04=new Bitmap(0x1f4,0x1f4),_0x1c20fc=_0x281ddf(0x252),_0x333ea3=_0x281ddf(0x286),_0x43de1e=_0x483f04[_0x281ddf(0x4f7)],_0x7a7f76=_0x483f04[_0x281ddf(0x466)],_0x4e37c0=0x3c,_0x301669=_0x4e37c0/0x2,_0x4a8415=0x2;let _0x1e0d69=0x10;while(_0x1e0d69--){if('rjKWt'===_0x281ddf(0x236)){const _0x14b4cb=this[_0x281ddf(0x42d)](_0x4ad397)[_0x281ddf(0x486)](_0x1f053e=>_0x32b9a4[_0x281ddf(0x186)]((_0x23f00d(_0x1f053e)||0x0)*_0x52ad8f)[_0x281ddf(0xeb)](0x0,0xff));return this[_0x281ddf(0x21f)](_0x14b4cb);}else{const _0x2b42d4=Math[_0x281ddf(0xc1)](_0x43de1e-_0x4e37c0)+_0x4e37c0,_0x1611ee=Math['randomInt'](_0x7a7f76-_0x4a8415)+_0x4a8415;_0x483f04[_0x281ddf(0x19f)]=Math[_0x281ddf(0xc1)](0x40)+0xc0,_0x483f04[_0x281ddf(0x40d)](_0x2b42d4,_0x1611ee,_0x301669,0x2,_0x1c20fc,_0x333ea3),_0x483f04[_0x281ddf(0x249)](_0x2b42d4+_0x301669,_0x1611ee,_0x301669,0x2,_0x333ea3);}}_0x483f04[_0x281ddf(0x492)]=![];if(ImageManager[_0x281ddf(0x297)])console[_0x281ddf(0x2d4)]('rain');return this[_0x281ddf(0x361)]=this[_0x281ddf(0x361)]||[],this[_0x281ddf(0x361)][_0x281ddf(0x441)](_0x483f04),_0x483f04;},ImageManager[_0x217234(0x403)]=function(){const _0x29cf8f=_0x217234;if(this['_cached_WeatherEffects_Storm']&&this[_0x29cf8f(0x418)][_0x29cf8f(0x497)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0x29cf8f(0x419)===_0x29cf8f(0x419)){const _0x4ef2b9=this['_cached_WeatherEffects_Storm'];return _0x4ef2b9[Math[_0x29cf8f(0x1ae)](Math[_0x29cf8f(0xc9)]()*_0x4ef2b9[_0x29cf8f(0x497)])];}else this['x']-=this['_weatherParent']['origin']['x'],this['y']-=this[_0x29cf8f(0x18f)][_0x29cf8f(0x501)]['y'];}const _0x3e5406=new Bitmap(0x1f4,0x1f4),_0x347621=_0x29cf8f(0x252),_0x42f30f=_0x29cf8f(0x286),_0x406d6f=_0x3e5406[_0x29cf8f(0x4f7)],_0x373d93=_0x3e5406['height'],_0x323915=0x64,_0x5c113f=_0x323915/0x2,_0x31abef=0x2;let _0x4f027e=0x20;while(_0x4f027e--){const _0x4906e7=Math[_0x29cf8f(0xc1)](_0x406d6f-_0x323915)+_0x323915,_0x3b0f56=Math[_0x29cf8f(0xc1)](_0x373d93-_0x31abef)+_0x31abef;_0x3e5406[_0x29cf8f(0x19f)]=Math[_0x29cf8f(0xc1)](0x40)+0xc0,_0x3e5406[_0x29cf8f(0x40d)](_0x4906e7,_0x3b0f56,Math[_0x29cf8f(0x186)](_0x5c113f),_0x31abef,_0x347621,_0x42f30f),_0x3e5406[_0x29cf8f(0x249)](_0x4906e7+Math[_0x29cf8f(0x186)](_0x5c113f),_0x3b0f56,Math[_0x29cf8f(0x1ae)](_0x5c113f),_0x31abef,_0x42f30f);}_0x3e5406[_0x29cf8f(0x492)]=![];if(ImageManager[_0x29cf8f(0x297)])console[_0x29cf8f(0x2d4)]('storm');return this[_0x29cf8f(0x418)]=this['_cached_WeatherEffects_Storm']||[],this[_0x29cf8f(0x418)]['push'](_0x3e5406),_0x3e5406;},ImageManager[_0x217234(0xbb)]=function(){const _0x5cf545=_0x217234;if(this['_cached_WeatherEffects_Snow']&&this['_cached_WeatherEffects_Snow'][_0x5cf545(0x497)]>=ImageManager[_0x5cf545(0x465)]){if('FyyLj'===_0x5cf545(0x10d)){const _0x26aaa9=this[_0x5cf545(0x3a9)];return _0x26aaa9[Math['floor'](Math[_0x5cf545(0xc9)]()*_0x26aaa9[_0x5cf545(0x497)])];}else _0x39309d[_0x5cf545(0xef)](_0x31cf35||0x1);}const _0xab5a8e=new Bitmap(0x1f4,0x1f4),_0x19da46=_0xab5a8e[_0x5cf545(0x4f7)],_0x3a87e3=_0xab5a8e['height'],_0x49f27b=0x5;let _0x2ea9cd=0x10;while(_0x2ea9cd--){const _0x4886e6=Math[_0x5cf545(0xc1)](_0x19da46-_0x49f27b*0x2)+_0x49f27b,_0x339aa7=Math[_0x5cf545(0xc1)](_0x3a87e3-_0x49f27b*0x2)+_0x49f27b,_0xdc02c7=Math[_0x5cf545(0xc1)](_0x49f27b)+0x1;_0xab5a8e[_0x5cf545(0x19f)]=Math[_0x5cf545(0xc1)](0x40)+0xc0,_0xab5a8e['drawCircle'](_0x4886e6,_0x339aa7,_0xdc02c7,'white');}_0xab5a8e[_0x5cf545(0x492)]=![];if(ImageManager[_0x5cf545(0x297)])console[_0x5cf545(0x2d4)](_0x5cf545(0x3b0));return this[_0x5cf545(0x3a9)]=this['_cached_WeatherEffects_Snow']||[],this[_0x5cf545(0x3a9)][_0x5cf545(0x441)](_0xab5a8e),_0xab5a8e;},ImageManager[_0x217234(0x1c7)]=function(){const _0x36f65f=_0x217234;if(this[_0x36f65f(0x512)]&&this[_0x36f65f(0x512)][_0x36f65f(0x497)]>=ImageManager[_0x36f65f(0x465)]){if(_0x36f65f(0x45d)!==_0x36f65f(0x45d)){if(this[_0x36f65f(0x334)]&&this[_0x36f65f(0x334)][_0x36f65f(0x497)]>=_0x2aef6e[_0x36f65f(0x465)]){const _0x386bd2=this[_0x36f65f(0x334)];return _0x386bd2[_0x3aae40['floor'](_0x34b6f8['random']()*_0x386bd2[_0x36f65f(0x497)])];}const _0x3ce9d7=_0x4c0845[_0x36f65f(0xb2)][_0x36f65f(0x2f2)](),_0x5a8862=_0x3ce9d7[_0x4d2852[_0x36f65f(0x1ae)](_0x1aa572[_0x36f65f(0xc9)]()*_0x3ce9d7['length'])];_0x3ce9d7[_0x36f65f(0x4fc)](_0x5a8862);const _0x312a88=_0x3ce9d7[_0x120c3b[_0x36f65f(0x1ae)](_0x3c839f['random']()*_0x3ce9d7[_0x36f65f(0x497)])];_0x3ce9d7[_0x36f65f(0x4fc)](_0x312a88);const _0x581b22=_0x3ce9d7[_0x3a1cf5[_0x36f65f(0x1ae)](_0x1758e1[_0x36f65f(0xc9)]()*_0x3ce9d7[_0x36f65f(0x497)])];_0x3ce9d7[_0x36f65f(0x4fc)](_0x581b22);const _0x3c91fd=new _0x17374f(0x3e8,0x3e8);_0x3c91fd[_0x36f65f(0x2f9)](0x1f4,0x28a,0xaf,_0x581b22,0x10,0x14),_0x3c91fd[_0x36f65f(0x2f9)](0x1f4,0x1f4,0xc8,_0x5a8862,0x40,0x19),_0x3c91fd[_0x36f65f(0x2f9)](0x1f4,0x15e,0xa0,_0x312a88,0x10,0x14),_0x3c91fd[_0x36f65f(0x492)]=![];if(_0xb387f6[_0x36f65f(0x297)])_0x3aa529[_0x36f65f(0x2d4)](_0x36f65f(0x521));return this[_0x36f65f(0x334)]=this[_0x36f65f(0x334)]||[],this[_0x36f65f(0x334)][_0x36f65f(0x441)](_0x3c91fd),_0x3c91fd;}else{const _0xaa6d69=this[_0x36f65f(0x512)];return _0xaa6d69[Math[_0x36f65f(0x1ae)](Math[_0x36f65f(0xc9)]()*_0xaa6d69[_0x36f65f(0x497)])];}}const _0x49839b=new Bitmap(0x1f4,0x1f4),_0x408417=_0x49839b[_0x36f65f(0x4f7)],_0x3cc504=_0x49839b[_0x36f65f(0x466)],_0x1c2896=0x8;let _0x577af2=0x20;while(_0x577af2--){const _0x49f124=Math[_0x36f65f(0xc1)](_0x408417-_0x1c2896*0x2)+_0x1c2896,_0x5b854f=Math[_0x36f65f(0xc1)](_0x3cc504-_0x1c2896*0x2)+_0x1c2896,_0x1c7cf3=Math[_0x36f65f(0xc1)](_0x1c2896)+0x1;_0x49839b[_0x36f65f(0x19f)]=Math['randomInt'](0x40)+0xc0,_0x49839b[_0x36f65f(0x383)](_0x49f124,_0x5b854f,_0x1c7cf3,'white');}_0x49839b[_0x36f65f(0x492)]=![];if(ImageManager[_0x36f65f(0x297)])console[_0x36f65f(0x2d4)](_0x36f65f(0x4fa));return this[_0x36f65f(0x512)]=this[_0x36f65f(0x512)]||[],this[_0x36f65f(0x512)][_0x36f65f(0x441)](_0x49839b),_0x49839b;},ImageManager[_0x217234(0x243)]=function(){const _0x3f230c=_0x217234;if(this['_cached_WeatherEffects_Bubbles']&&this[_0x3f230c(0x407)][_0x3f230c(0x497)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x111458=this['_cached_WeatherEffects_Bubbles'];return _0x111458[Math[_0x3f230c(0x1ae)](Math['random']()*_0x111458[_0x3f230c(0x497)])];}const _0x104111=new Bitmap(0x1f4,0x1f4),_0x23a37e=_0x104111[_0x3f230c(0x4f7)],_0x207218=_0x104111[_0x3f230c(0x466)],_0xbb1d02=0xc;let _0x45b129=0x10;while(_0x45b129--){const _0x2e8377=Math[_0x3f230c(0xc1)](_0x23a37e-_0xbb1d02*0x2)+_0xbb1d02,_0x5c36c9=Math[_0x3f230c(0xc1)](_0x207218-_0xbb1d02*0x2)+_0xbb1d02,_0x4ddc0d=Math['randomInt'](_0xbb1d02/0x2)+_0xbb1d02/0x2;_0x104111[_0x3f230c(0x19f)]=Math[_0x3f230c(0xc1)](0x40)+0xc0,_0x104111[_0x3f230c(0x383)](_0x2e8377,_0x5c36c9,_0x4ddc0d,_0x3f230c(0x212)),_0x104111[_0x3f230c(0xfa)](_0x2e8377,_0x5c36c9,_0x4ddc0d-0x2),_0x104111[_0x3f230c(0x383)](_0x2e8377+_0x4ddc0d/0x3,_0x5c36c9-_0x4ddc0d/0x3,_0x4ddc0d/0x3,'white');}_0x104111[_0x3f230c(0x492)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x3f230c(0x51a));return this['_cached_WeatherEffects_Bubbles']=this[_0x3f230c(0x407)]||[],this[_0x3f230c(0x407)]['push'](_0x104111),_0x104111;},ImageManager[_0x217234(0x3c5)]=function(){const _0x5cbae1=_0x217234;if(this[_0x5cbae1(0x174)]&&ColorManager[_0x5cbae1(0x3f8)][_0x5cbae1(0x497)]<=0x0){const _0x394741=this[_0x5cbae1(0x174)];return _0x394741[Math['floor'](Math['random']()*_0x394741[_0x5cbae1(0x497)])];}const _0x2b3e32=new Bitmap(0x18,0x18),_0x45a46d=ColorManager['WEATHER_STAR_COLORS'][_0x5cbae1(0x4d7)]();_0x2b3e32[_0x5cbae1(0x4a6)](0xc,0xc,_0x45a46d,_0x45a46d,0x5,0xc,0x6),_0x2b3e32[_0x5cbae1(0x492)]=![];if(ImageManager[_0x5cbae1(0x297)])console[_0x5cbae1(0x2d4)]('stars');return this['_cached_WeatherEffects_Stars']=this[_0x5cbae1(0x174)]||[],this[_0x5cbae1(0x174)][_0x5cbae1(0x441)](_0x2b3e32),_0x2b3e32;},ImageManager['weatherEffectsSnowflakes']=function(){const _0x34251a=_0x217234;if(this['_cached_WeatherEffects_Snowflakes']&&this[_0x34251a(0x1ee)][_0x34251a(0x497)]>=ImageManager[_0x34251a(0x465)]){if(_0x34251a(0x11f)!==_0x34251a(0x1e1)){const _0x5758fa=this[_0x34251a(0x1ee)];return _0x5758fa[Math[_0x34251a(0x1ae)](Math[_0x34251a(0xc9)]()*_0x5758fa[_0x34251a(0x497)])];}else _0x941170[_0x34251a(0x44a)](_0x327a52,_0x486378),_0x470f73[_0x34251a(0x19c)]=_0x34251a(0x3b3),_0x4ed168[_0x34251a(0xd0)][_0x34251a(0x42a)](_0x222ff9);}const _0x30ff5b=new Bitmap(0x64,0x64);_0x30ff5b[_0x34251a(0x302)](),_0x30ff5b[_0x34251a(0x492)]=![];if(ImageManager[_0x34251a(0x297)])console[_0x34251a(0x2d4)](_0x34251a(0x428));return this[_0x34251a(0x1ee)]=this['_cached_WeatherEffects_Snowflakes']||[],this[_0x34251a(0x1ee)][_0x34251a(0x441)](_0x30ff5b),_0x30ff5b;},ImageManager['weatherEffectsSandstorm']=function(){const _0x5efd23=_0x217234;if(this['_cached_WeatherEffects_Sandstorm']&&this[_0x5efd23(0x51d)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0x5efd23(0x4ea)!==_0x5efd23(0x4ea)){if(this[_0x5efd23(0x407)]&&this[_0x5efd23(0x407)][_0x5efd23(0x497)]>=_0x3ccc52[_0x5efd23(0x465)]){const _0x205d66=this[_0x5efd23(0x407)];return _0x205d66[_0x12a6ba[_0x5efd23(0x1ae)](_0x42e363[_0x5efd23(0xc9)]()*_0x205d66['length'])];}const _0x342643=new _0x5a977b(0x1f4,0x1f4),_0x3ba953=_0x342643[_0x5efd23(0x4f7)],_0x300dd3=_0x342643[_0x5efd23(0x466)],_0x5e480a=0xc;let _0xeab349=0x10;while(_0xeab349--){const _0x45e671=_0x27320c[_0x5efd23(0xc1)](_0x3ba953-_0x5e480a*0x2)+_0x5e480a,_0x488d85=_0x413138[_0x5efd23(0xc1)](_0x300dd3-_0x5e480a*0x2)+_0x5e480a,_0x422994=_0x529a6e['randomInt'](_0x5e480a/0x2)+_0x5e480a/0x2;_0x342643[_0x5efd23(0x19f)]=_0x585ed0[_0x5efd23(0xc1)](0x40)+0xc0,_0x342643[_0x5efd23(0x383)](_0x45e671,_0x488d85,_0x422994,_0x5efd23(0x212)),_0x342643[_0x5efd23(0xfa)](_0x45e671,_0x488d85,_0x422994-0x2),_0x342643[_0x5efd23(0x383)](_0x45e671+_0x422994/0x3,_0x488d85-_0x422994/0x3,_0x422994/0x3,_0x5efd23(0x320));}_0x342643[_0x5efd23(0x492)]=![];if(_0x2700b0[_0x5efd23(0x297)])_0xdd38ce[_0x5efd23(0x2d4)]('bubbles');return this[_0x5efd23(0x407)]=this[_0x5efd23(0x407)]||[],this[_0x5efd23(0x407)]['push'](_0x342643),_0x342643;}else{const _0x4990cf=this['_cached_WeatherEffects_Sandstorm'];return _0x4990cf[Math[_0x5efd23(0x1ae)](Math[_0x5efd23(0xc9)]()*_0x4990cf[_0x5efd23(0x497)])];}}const _0x596dc9=ColorManager[_0x5efd23(0x40e)][_0x5efd23(0x2f2)](),_0x5da9e3=1.5,_0x195126=ColorManager[_0x5efd23(0x44d)](_0x596dc9[Math[_0x5efd23(0x1ae)](Math[_0x5efd23(0xc9)]()*_0x596dc9[_0x5efd23(0x497)])],_0x5da9e3),_0x18a2b7=ColorManager[_0x5efd23(0x44d)](_0x596dc9[Math['floor'](Math['random']()*_0x596dc9[_0x5efd23(0x497)])],_0x5da9e3),_0x2edb9d=ColorManager['adjustHexColor'](_0x596dc9[Math[_0x5efd23(0x1ae)](Math[_0x5efd23(0xc9)]()*_0x596dc9[_0x5efd23(0x497)])],_0x5da9e3),_0x353bb3=new Bitmap(0x1f4,0x1f4);_0x353bb3[_0x5efd23(0x2f9)](0xfa,0x15e,0x4b,_0x195126,0x4,0x14),_0x353bb3['drawCloud'](0xfa,0xfa,0x64,_0x2edb9d,0x8,0x19),_0x353bb3[_0x5efd23(0x2f9)](0xfa,0xfa,0x3c,_0x18a2b7,0x4,0x14);const _0x16be11=_0x353bb3['width'],_0x22328a=_0x353bb3['height'],_0x1e633f=0x2;let _0x4d1665=0x40;while(_0x4d1665--){if(_0x5efd23(0x2bc)===_0x5efd23(0x2bc)){const _0x50f9bd=Math[_0x5efd23(0xc1)](_0x16be11-_0x1e633f*0x2)+_0x1e633f,_0x478531=Math[_0x5efd23(0xc1)](_0x22328a-_0x1e633f*0x2)+_0x1e633f;let _0x140bac=_0x596dc9[Math[_0x5efd23(0x1ae)](Math[_0x5efd23(0xc9)]()*_0x596dc9[_0x5efd23(0x497)])];_0x140bac=ColorManager[_0x5efd23(0x44d)](_0x140bac,_0x5da9e3);const _0x483e65=Math['randomInt'](_0x1e633f)+0x1;_0x353bb3['paintOpacity']=Math[_0x5efd23(0xc1)](0x40)+0xa0,_0x353bb3['drawCircle'](_0x50f9bd,_0x478531,_0x483e65,_0x140bac);}else _0x29ba3a[_0x5efd23(0x44a)](_0x219206,_0x5f1ea1),_0x5d085d[_0x5efd23(0x19c)]=_0x5efd23(0x4d1),_0x39ac52[_0x5efd23(0xd0)][_0x5efd23(0x42a)](_0x55795e);}_0x353bb3[_0x5efd23(0x492)]=![];if(ImageManager[_0x5efd23(0x297)])console['log'](_0x5efd23(0x2a8));return this['_cached_WeatherEffects_Sandstorm']=this[_0x5efd23(0x51d)]||[],this[_0x5efd23(0x51d)][_0x5efd23(0x441)](_0x353bb3),_0x353bb3;},ImageManager[_0x217234(0x461)]=function(){const _0x5ba5e0=_0x217234;if(this['_cached_WeatherEffects_Embers']&&this[_0x5ba5e0(0x4c1)][_0x5ba5e0(0x497)]>=ImageManager[_0x5ba5e0(0x465)]){if(_0x5ba5e0(0x453)!==_0x5ba5e0(0x453))_0x5e796d[_0x5ba5e0(0x44a)](_0x35a2f5,_0xc21910),_0x483067[_0x5ba5e0(0x19c)]=_0x5ba5e0(0x425),_0x20dac3[_0x5ba5e0(0xd0)][_0x5ba5e0(0x42a)](_0x1e3297);else{const _0x5ca758=this[_0x5ba5e0(0x4c1)];return _0x5ca758[Math[_0x5ba5e0(0x1ae)](Math[_0x5ba5e0(0xc9)]()*_0x5ca758[_0x5ba5e0(0x497)])];}}const _0x31e9ba=new Bitmap(0x1f4,0x1f4),_0x447e52=_0x31e9ba['width'],_0x52c883=_0x31e9ba[_0x5ba5e0(0x466)],_0x4b8b09=0x10;let _0x43aab2=0x10;while(_0x43aab2--){const _0x225858=Math[_0x5ba5e0(0xc1)](_0x447e52-_0x4b8b09*0x2)+_0x4b8b09,_0x49fa29=Math[_0x5ba5e0(0xc1)](_0x52c883-_0x4b8b09*0x2)+_0x4b8b09,_0x1d40c5=Math[_0x5ba5e0(0xc1)](_0x4b8b09/0x2)+0x2,_0xf378b8=ColorManager['arrayToHex']([0xff,Math['randomInt'](0x46),0x0]);_0x31e9ba[_0x5ba5e0(0x19f)]=Math[_0x5ba5e0(0xc1)](0x40),_0x31e9ba['drawCircle'](_0x225858,_0x49fa29,_0x1d40c5,_0xf378b8),_0x31e9ba[_0x5ba5e0(0x19f)]=Math['randomInt'](0x40)+0x40,_0x31e9ba[_0x5ba5e0(0x383)](_0x225858,_0x49fa29,_0x1d40c5/0x2,_0xf378b8),_0x31e9ba[_0x5ba5e0(0x19f)]=Math[_0x5ba5e0(0xc1)](0x40)+0xc0;const _0x2c4705=ColorManager[_0x5ba5e0(0x21f)]([0xff,Math[_0x5ba5e0(0xc1)](0x46)+0xb9,0x0]);_0x31e9ba[_0x5ba5e0(0x383)](_0x225858,_0x49fa29,_0x1d40c5/0x4,_0x2c4705),_0x31e9ba[_0x5ba5e0(0x383)](_0x225858,_0x49fa29,_0x1d40c5/0x8,_0x5ba5e0(0x3a0));}_0x31e9ba[_0x5ba5e0(0x492)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x5ba5e0(0x3eb));return this['_cached_WeatherEffects_Embers']=this[_0x5ba5e0(0x4c1)]||[],this[_0x5ba5e0(0x4c1)][_0x5ba5e0(0x441)](_0x31e9ba),_0x31e9ba;},ImageManager[_0x217234(0x2d6)]=function(){const _0x1bf367=_0x217234;if(this[_0x1bf367(0x1db)]&&this[_0x1bf367(0x1db)]['length']>=ImageManager[_0x1bf367(0x465)]){const _0x175421=this[_0x1bf367(0x1db)];return _0x175421[Math['floor'](Math[_0x1bf367(0xc9)]()*_0x175421[_0x1bf367(0x497)])];}const _0xb7d229=new Bitmap(0x12,0x12),_0x2b1cb4=_0xb7d229['width'],_0xd73000=_0xb7d229[_0x1bf367(0x466)],_0x4886dc=_0x2b1cb4/0x2-0x2,_0x541bd1=_0xd73000/0x2-0x2,_0x263f9c=[];_0x263f9c['push'](Math[_0x1bf367(0xc1)](_0x4886dc)+0x2,Math[_0x1bf367(0xc1)](_0x541bd1)+0x2),_0x263f9c[_0x1bf367(0x441)](_0x2b1cb4-Math[_0x1bf367(0xc1)](_0x4886dc)-0x2,Math['randomInt'](_0x541bd1)+0x2),_0x263f9c[_0x1bf367(0x441)](_0x2b1cb4-Math[_0x1bf367(0xc1)](_0x4886dc)-0x2,_0xd73000-Math['randomInt'](_0x541bd1)-0x2),_0x263f9c[_0x1bf367(0x441)](Math['randomInt'](_0x4886dc)+0x2,_0xd73000-Math[_0x1bf367(0xc1)](_0x541bd1)-0x2);const _0x9ec401=ColorManager[_0x1bf367(0x2ce)][_0x1bf367(0x2f2)](),_0x284ac3=_0x9ec401[Math['floor'](Math[_0x1bf367(0xc9)]()*_0x9ec401[_0x1bf367(0x497)])];_0xb7d229[_0x1bf367(0x34e)](_0x263f9c,_0x284ac3,_0x1bf367(0x19e),0x2,0xff,![]),_0xb7d229['_customModified']=![];if(ImageManager[_0x1bf367(0x297)])console[_0x1bf367(0x2d4)](_0x1bf367(0x38d));return this[_0x1bf367(0x1db)]=this[_0x1bf367(0x1db)]||[],this[_0x1bf367(0x1db)][_0x1bf367(0x441)](_0xb7d229),_0xb7d229;},ImageManager[_0x217234(0x3e7)]=function(){const _0x1a73e5=_0x217234;if(this[_0x1a73e5(0x420)]&&this[_0x1a73e5(0x420)][_0x1a73e5(0x497)]>=ImageManager[_0x1a73e5(0x465)]){if(_0x1a73e5(0x45e)!==_0x1a73e5(0x45e)){if(!this[_0x1a73e5(0x20c)])return;if(!this[_0x1a73e5(0x20c)][_0x1a73e5(0x45c)])return;const _0x15cc7a=this[_0x1a73e5(0x20c)][_0x1a73e5(0x45c)]||0x0;_0x2d1760[_0x1a73e5(0x278)][_0x1a73e5(0x1fa)](_0x15cc7a);}else{const _0x7f8827=this[_0x1a73e5(0x420)];return _0x7f8827[Math[_0x1a73e5(0x1ae)](Math[_0x1a73e5(0xc9)]()*_0x7f8827[_0x1a73e5(0x497)])];}}const _0x410a0e=new Bitmap(0x1f4,0x1f4),_0x282329=_0x410a0e['width'],_0x4fca68=_0x410a0e[_0x1a73e5(0x466)],_0xf28eb=0xc,_0x4efd5b=0x64;let _0x529670=0x4;while(_0x529670--){const _0x3f8475=Math[_0x1a73e5(0xc1)](_0x282329-_0x4efd5b*0x2)+_0x4efd5b*0x1,_0xcdcd54=Math[_0x1a73e5(0xc1)](_0x4fca68-_0xf28eb*0x8)+_0xf28eb*0x4,_0x318561=Math[_0x1a73e5(0xc1)](_0xf28eb*0x2/0x5)+_0xf28eb*0x2/0x5,_0x3c95af=Math[_0x1a73e5(0xc1)](_0x4efd5b*0x1/0x3)+_0x4efd5b*0x2/0x3;_0x410a0e[_0x1a73e5(0x515)](_0x3f8475,_0xcdcd54,_0x318561,_0x3c95af);}_0x410a0e[_0x1a73e5(0x492)]=![];if(ImageManager[_0x1a73e5(0x297)])console[_0x1a73e5(0x2d4)](_0x1a73e5(0x355));return this[_0x1a73e5(0x420)]=this[_0x1a73e5(0x420)]||[],this[_0x1a73e5(0x420)][_0x1a73e5(0x441)](_0x410a0e),_0x410a0e;},ImageManager[_0x217234(0x4e7)]=function(){const _0x22afd3=_0x217234;if(this[_0x22afd3(0x47d)]&&this['_cached_WeatherEffects_Fireflies'][_0x22afd3(0x497)]>=ImageManager[_0x22afd3(0x465)]){const _0x788e97=this['_cached_WeatherEffects_Fireflies'];return _0x788e97[Math['floor'](Math[_0x22afd3(0xc9)]()*_0x788e97[_0x22afd3(0x497)])];}const _0x1a5947=ColorManager[_0x22afd3(0x2e7)][_0x22afd3(0x2f2)](),_0x3bed06=_0x1a5947[Math[_0x22afd3(0x1ae)](Math['random']()*_0x1a5947[_0x22afd3(0x497)])];let _0x5634d5=Math[_0x22afd3(0xc1)](0x10)+0x10;if(_0x5634d5%0x2!==0x0)_0x5634d5+=0x1;const _0x50e06d=new Bitmap(_0x5634d5,_0x5634d5),_0x58811f=Math[_0x22afd3(0x1ae)](_0x5634d5/0x2);_0x50e06d['drawPolyArc'](_0x58811f,_0x58811f,_0x58811f,0x168,_0x3bed06,0x0,0x1,0x0),_0x50e06d[_0x22afd3(0x249)](_0x58811f-0x1,_0x58811f-0x1,0x2,0x2,_0x3bed06),_0x50e06d[_0x22afd3(0x492)]=![];if(ImageManager[_0x22afd3(0x297)])console[_0x22afd3(0x2d4)](_0x22afd3(0x1fd));return this['_cached_WeatherEffects_Fireflies']=this[_0x22afd3(0x47d)]||[],this[_0x22afd3(0x47d)][_0x22afd3(0x441)](_0x50e06d),_0x50e06d;},ImageManager['weatherEffectsThunderbolt']=function(){const _0x17d501=_0x217234;if(this['_cached_WeatherEffects_Thunderbolt']&&this[_0x17d501(0x16d)][_0x17d501(0x497)]>=ImageManager[_0x17d501(0x465)]*0x3){if('rhrep'===_0x17d501(0x21d)){const _0x305f77=this[_0x17d501(0x16d)];return _0x305f77[Math[_0x17d501(0x1ae)](Math[_0x17d501(0xc9)]()*_0x305f77[_0x17d501(0x497)])];}else _0x49bcbf[_0x17d501(0x1a4)](_0x623ed1,![]);}const _0x59f8d2=Math[_0x17d501(0x49e)]($dataSystem['advanced'][_0x17d501(0x31f)],$dataSystem[_0x17d501(0x397)][_0x17d501(0x2ac)])||0x1,_0x67e263=new Bitmap(_0x59f8d2,_0x59f8d2);_0x67e263[_0x17d501(0xe2)](),_0x67e263[_0x17d501(0x492)]=![];if(ImageManager[_0x17d501(0x297)])console[_0x17d501(0x2d4)](_0x17d501(0x108));return this[_0x17d501(0x16d)]=this[_0x17d501(0x16d)]||[],this[_0x17d501(0x16d)][_0x17d501(0x441)](_0x67e263),_0x67e263;},ImageManager['weatherEffectsSootfall']=function(){const _0x5d3ab6=_0x217234;if(this[_0x5d3ab6(0x505)]&&this['_cached_WeatherEffects_Sootfall'][_0x5d3ab6(0x497)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x46b47e=this[_0x5d3ab6(0x505)];return _0x46b47e[Math[_0x5d3ab6(0x1ae)](Math[_0x5d3ab6(0xc9)]()*_0x46b47e[_0x5d3ab6(0x497)])];}const _0x23d668=ColorManager['WEATHER_ASH_COLORS'][_0x5d3ab6(0x2f2)](),_0x2a3d8f=new Bitmap(0x1f4,0x1f4),_0x2b9831=_0x2a3d8f[_0x5d3ab6(0x4f7)],_0x5be46c=_0x2a3d8f[_0x5d3ab6(0x466)],_0x14ef31=0x5;let _0x18890c=0x8;while(_0x18890c--){if('oYkjx'!==_0x5d3ab6(0x1e7)){const _0x224da0=Math['randomInt'](_0x2b9831-_0x14ef31*0x2)+_0x14ef31,_0x3693ee=Math[_0x5d3ab6(0xc1)](_0x5be46c-_0x14ef31*0x2)+_0x14ef31,_0x46f380=Math[_0x5d3ab6(0xc1)](_0x14ef31)+0x1,_0x4c761b=_0x23d668[Math['floor'](Math[_0x5d3ab6(0xc9)]()*_0x23d668[_0x5d3ab6(0x497)])];_0x2a3d8f['paintOpacity']=Math['randomInt'](0x40)+0xc0,_0x2a3d8f[_0x5d3ab6(0x383)](_0x224da0,_0x3693ee,_0x46f380,_0x4c761b);}else this[_0x5d3ab6(0x21b)](...arguments);}_0x2a3d8f[_0x5d3ab6(0x492)]=![];if(ImageManager[_0x5d3ab6(0x297)])console[_0x5d3ab6(0x2d4)](_0x5d3ab6(0x135));return this[_0x5d3ab6(0x505)]=this[_0x5d3ab6(0x505)]||[],this['_cached_WeatherEffects_Sootfall'][_0x5d3ab6(0x441)](_0x2a3d8f),_0x2a3d8f;},ImageManager[_0x217234(0x350)]=function(){const _0x27a139=_0x217234;if(this[_0x27a139(0x163)]&&this[_0x27a139(0x163)][_0x27a139(0x497)]>=ImageManager[_0x27a139(0x465)]){if(_0x27a139(0x23c)!=='UUknq'){const _0x21364d=this['_cached_WeatherEffects_Ashfall'];return _0x21364d[Math[_0x27a139(0x1ae)](Math[_0x27a139(0xc9)]()*_0x21364d[_0x27a139(0x497)])];}else{if(this[_0x27a139(0x4b0)]&&_0xde58f1[_0x27a139(0x213)][_0x27a139(0x497)]<=0x0){const _0x435b31=this[_0x27a139(0x4b0)];return _0x435b31[_0xc725fd['floor'](_0x12f143[_0x27a139(0xc9)]()*_0x435b31[_0x27a139(0x497)])];}const _0x21cd4c=_0x376fd7[_0x27a139(0x213)]['pop'](),_0x3a95f8=new _0x1ac423(0x3e8,0x3e8),_0x3dd3d9=_0x3a95f8['width']/0x2;_0x3a95f8[_0x27a139(0x431)](_0x3dd3d9,_0x3dd3d9,_0x3dd3d9,0x168,_0x21cd4c,0x0,0x1,0x0),_0x3a95f8[_0x27a139(0x492)]=![];if(_0xd4686a[_0x27a139(0x297)])_0xfc8980[_0x27a139(0x2d4)](_0x27a139(0x46d));return this[_0x27a139(0x4b0)]=this[_0x27a139(0x4b0)]||[],this[_0x27a139(0x4b0)][_0x27a139(0x441)](_0x3a95f8),_0x3a95f8;}}const _0x1453c6=new Bitmap(0x18,0x18),_0x3c4e9a=_0x1453c6[_0x27a139(0x4f7)],_0x334411=_0x1453c6[_0x27a139(0x466)],_0x4fda43=_0x3c4e9a/0x2-0x2,_0x4f6a1a=_0x334411/0x2-0x2,_0x22680e=[];_0x22680e['push'](Math[_0x27a139(0xc1)](_0x4fda43)+0x2,Math['randomInt'](_0x4f6a1a)+0x2),_0x22680e[_0x27a139(0x441)](_0x3c4e9a-Math[_0x27a139(0xc1)](_0x4fda43)-0x2,Math[_0x27a139(0xc1)](_0x4f6a1a)+0x2),_0x22680e[_0x27a139(0x441)](_0x3c4e9a-Math[_0x27a139(0xc1)](_0x4fda43)-0x2,_0x334411-Math['randomInt'](_0x4f6a1a)-0x2),_0x22680e[_0x27a139(0x441)](Math[_0x27a139(0xc1)](_0x4fda43)+0x2,_0x334411-Math[_0x27a139(0xc1)](_0x4f6a1a)-0x2);const _0x992ad0=ColorManager[_0x27a139(0x2ce)]['clone'](),_0x20518c=_0x992ad0[Math[_0x27a139(0x1ae)](Math[_0x27a139(0xc9)]()*_0x992ad0[_0x27a139(0x497)])];_0x1453c6['drawMultiPointPolygon'](_0x22680e,_0x20518c,'black',0x2,0xff,![]),_0x1453c6[_0x27a139(0x492)]=![];if(ImageManager[_0x27a139(0x297)])console['log'](_0x27a139(0x4da));return this[_0x27a139(0x163)]=this['_cached_WeatherEffects_Ashfall']||[],this['_cached_WeatherEffects_Ashfall']['push'](_0x1453c6),_0x1453c6;},ImageManager['weatherEffectsFlameWall']=function(){const _0x572ce1=_0x217234;if(this['_cached_WeatherEffects_FlameWall']&&this[_0x572ce1(0x273)][_0x572ce1(0x497)]>=ImageManager[_0x572ce1(0x465)]){const _0x3ca281=this['_cached_WeatherEffects_FlameWall'];return _0x3ca281[Math[_0x572ce1(0x1ae)](Math['random']()*_0x3ca281[_0x572ce1(0x497)])];}const _0x572921=new Bitmap(0x258,0xc8),_0x4acd19=_0x572921[_0x572ce1(0x4f7)],_0x2492bc=_0x572921[_0x572ce1(0x466)],_0x262820=0x40;let _0x153e5=0x40;while(_0x153e5--){if(_0x572ce1(0x363)!==_0x572ce1(0x363))this['loadPictureBitmap']();else{const _0x2bb35a=Math['randomInt'](_0x4acd19-_0x262820*0x2)+_0x262820,_0x8d76b=Math[_0x572ce1(0xc1)](_0x2492bc-_0x262820*0x2)+_0x262820,_0x2c3a84=Math[_0x572ce1(0xc1)](_0x262820/0x2)+0x2,_0x338ae5=ColorManager[_0x572ce1(0x21f)]([0xff,Math[_0x572ce1(0xc1)](0x46),0x0]);_0x572921['paintOpacity']=Math[_0x572ce1(0xc1)](0x40),_0x572921[_0x572ce1(0x383)](_0x2bb35a,_0x8d76b,_0x2c3a84,_0x338ae5),_0x572921[_0x572ce1(0x19f)]=Math[_0x572ce1(0xc1)](0x40)+0x40,_0x572921['drawCircle'](_0x2bb35a,_0x8d76b,_0x2c3a84/0x2,_0x338ae5),_0x572921[_0x572ce1(0x19f)]=Math[_0x572ce1(0xc1)](0x40)+0xc0;const _0x262017=ColorManager[_0x572ce1(0x21f)]([0xff,Math[_0x572ce1(0xc1)](0x46)+0xb9,0x0]);_0x572921['drawCircle'](_0x2bb35a,_0x8d76b,_0x2c3a84/0x4,_0x262017),_0x572921[_0x572ce1(0x383)](_0x2bb35a,_0x8d76b,_0x2c3a84/0x8,'yellow'),_0x572921['drawCircle'](_0x2bb35a,_0x8d76b,_0x2c3a84/0xa,_0x572ce1(0x320));}}_0x572921[_0x572ce1(0x492)]=![];if(ImageManager[_0x572ce1(0x297)])console[_0x572ce1(0x2d4)](_0x572ce1(0x41e));return this[_0x572ce1(0x273)]=this[_0x572ce1(0x273)]||[],this[_0x572ce1(0x273)][_0x572ce1(0x441)](_0x572921),_0x572921;},ImageManager[_0x217234(0x451)]=function(){const _0x59c497=_0x217234;if(this[_0x59c497(0x284)]&&ColorManager[_0x59c497(0x4a1)][_0x59c497(0x497)]<=0x0){if('DCwBX'==='DCwBX'){const _0x3c2104=this[_0x59c497(0x284)];return _0x3c2104[Math[_0x59c497(0x1ae)](Math['random']()*_0x3c2104[_0x59c497(0x497)])];}else{if(this[_0x59c497(0xf0)]&&this['_cached_WeatherEffects_Thunderclouds'][_0x59c497(0x497)]>=_0x372d54[_0x59c497(0x465)]){const _0x4e83ce=this[_0x59c497(0xf0)];return _0x4e83ce[_0x5c92b1['floor'](_0x5aa4b7[_0x59c497(0xc9)]()*_0x4e83ce[_0x59c497(0x497)])];}let _0x309814=_0x56a3f4[_0x59c497(0x21f)]([_0x1feeaa['randomInt'](0x20)+0x10,0x18,_0x38c158['randomInt'](0x20)+0x10]),_0x2abb60=_0x4cb9d8[_0x59c497(0x21f)]([_0x987c5f[_0x59c497(0xc1)](0x30)+0x20,0x30,_0x5e388d['randomInt'](0x30)+0x20]),_0x152ab5=_0x587fe7[_0x59c497(0x21f)]([_0x45859b[_0x59c497(0xc1)](0x40)+0x30,0x60,_0x563c75[_0x59c497(0xc1)](0x40)+0x30]);const _0xa361ab=new _0x37abce(0x3e8,0x3e8);_0xa361ab['drawCloud'](0x1f4,0x28a,0xaf,_0x309814,0x10,0x14),_0xa361ab[_0x59c497(0x2f9)](0x1f4,0x1f4,0xc8,_0x152ab5,0x40,0x19),_0xa361ab[_0x59c497(0x2f9)](0x1f4,0x15e,0xa0,_0x2abb60,0x10,0x14),_0xa361ab[_0x59c497(0x492)]=![];if(_0x3a9e80[_0x59c497(0x297)])_0x5c332f[_0x59c497(0x2d4)]('thunderclouds');return this['_cached_WeatherEffects_Thunderclouds']=this[_0x59c497(0xf0)]||[],this['_cached_WeatherEffects_Thunderclouds']['push'](_0xa361ab),_0xa361ab;}}const _0x28bc76=ColorManager['WEATHER_AUTUMN_LEAVES_COLORS']['pop']();let _0x309950=ColorManager[_0x59c497(0x42d)](_0x28bc76);const _0x558e6f=[];while(_0x558e6f[_0x59c497(0x497)]<0x6){if(_0x59c497(0x46c)==='rQUEO'){const _0x25df19=ColorManager[_0x59c497(0x21f)](_0x309950);_0x558e6f['push'](_0x25df19),_0x309950=_0x309950[_0x59c497(0x486)](_0x13deff=>Math['ceil'](_0x13deff*0.85)[_0x59c497(0xeb)](0x0,0xff));}else{if(this[_0x59c497(0x273)]&&this[_0x59c497(0x273)][_0x59c497(0x497)]>=_0x569618[_0x59c497(0x465)]){const _0x366f6b=this[_0x59c497(0x273)];return _0x366f6b[_0x3bea44[_0x59c497(0x1ae)](_0x5d16fa[_0x59c497(0xc9)]()*_0x366f6b['length'])];}const _0x2d9a03=new _0x541e67(0x258,0xc8),_0x17a062=_0x2d9a03['width'],_0x4e873e=_0x2d9a03[_0x59c497(0x466)],_0x4bf061=0x40;let _0x35eb56=0x40;while(_0x35eb56--){const _0x3e4935=_0x4c8401[_0x59c497(0xc1)](_0x17a062-_0x4bf061*0x2)+_0x4bf061,_0x291e04=_0x1e9da0[_0x59c497(0xc1)](_0x4e873e-_0x4bf061*0x2)+_0x4bf061,_0x508b60=_0x1003d1['randomInt'](_0x4bf061/0x2)+0x2,_0x1da225=_0x5577fd[_0x59c497(0x21f)]([0xff,_0x3d7740[_0x59c497(0xc1)](0x46),0x0]);_0x2d9a03[_0x59c497(0x19f)]=_0x260da4[_0x59c497(0xc1)](0x40),_0x2d9a03[_0x59c497(0x383)](_0x3e4935,_0x291e04,_0x508b60,_0x1da225),_0x2d9a03[_0x59c497(0x19f)]=_0x4cc65a[_0x59c497(0xc1)](0x40)+0x40,_0x2d9a03[_0x59c497(0x383)](_0x3e4935,_0x291e04,_0x508b60/0x2,_0x1da225),_0x2d9a03['paintOpacity']=_0x55f750['randomInt'](0x40)+0xc0;const _0x3d4f45=_0xd69cdb['arrayToHex']([0xff,_0x2cd801[_0x59c497(0xc1)](0x46)+0xb9,0x0]);_0x2d9a03[_0x59c497(0x383)](_0x3e4935,_0x291e04,_0x508b60/0x4,_0x3d4f45),_0x2d9a03['drawCircle'](_0x3e4935,_0x291e04,_0x508b60/0x8,_0x59c497(0x3a0)),_0x2d9a03[_0x59c497(0x383)](_0x3e4935,_0x291e04,_0x508b60/0xa,_0x59c497(0x320));}_0x2d9a03[_0x59c497(0x492)]=![];if(_0x4fc9a7[_0x59c497(0x297)])_0x34ed1f[_0x59c497(0x2d4)]('flamewall');return this[_0x59c497(0x273)]=this[_0x59c497(0x273)]||[],this[_0x59c497(0x273)][_0x59c497(0x441)](_0x2d9a03),_0x2d9a03;}}_0x558e6f[_0x59c497(0x2fe)](),_0x558e6f[_0x59c497(0x441)](_0x558e6f[_0x59c497(0x1bf)]()),_0x558e6f[_0x59c497(0x441)](_0x558e6f[_0x59c497(0x1bf)]());const _0x2eb621=new Bitmap(0x64,0x60);_0x2eb621[_0x59c497(0x263)](_0x558e6f),_0x2eb621['_customModified']=![];if(ImageManager[_0x59c497(0x297)])console[_0x59c497(0x2d4)](_0x59c497(0x2d0));return this[_0x59c497(0x284)]=this['_cached_WeatherEffects_AutumnLeaves']||[],this[_0x59c497(0x284)][_0x59c497(0x441)](_0x2eb621),_0x2eb621;},ImageManager[_0x217234(0x1ec)]=function(){const _0x36e8da=_0x217234;if(this[_0x36e8da(0x387)]&&this[_0x36e8da(0x387)][_0x36e8da(0x497)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x1b2892=this[_0x36e8da(0x387)];return _0x1b2892[Math[_0x36e8da(0x1ae)](Math['random']()*_0x1b2892[_0x36e8da(0x497)])];}const _0x66c392=ColorManager[_0x36e8da(0x3e5)],_0x362056=ColorManager[_0x36e8da(0x518)],_0x573308=ColorManager[_0x36e8da(0x29f)],_0x3312f9=_0x66c392[Math['floor'](Math[_0x36e8da(0xc9)]()*_0x66c392[_0x36e8da(0x497)])],_0x38a34f=_0x362056[Math[_0x36e8da(0x1ae)](Math['random']()*_0x362056[_0x36e8da(0x497)])],_0xf1e8cf=_0x573308[Math[_0x36e8da(0x1ae)](Math['random']()*_0x573308[_0x36e8da(0x497)])],_0x11a8d7=new Bitmap(0x34,0x23);_0x11a8d7[_0x36e8da(0x291)](_0x3312f9,_0x38a34f,_0xf1e8cf),_0x11a8d7[_0x36e8da(0x492)]=![];if(ImageManager[_0x36e8da(0x297)])console[_0x36e8da(0x2d4)]('cherryblossoms');return this[_0x36e8da(0x387)]=this[_0x36e8da(0x387)]||[],this[_0x36e8da(0x387)][_0x36e8da(0x441)](_0x11a8d7),_0x11a8d7;},ImageManager[_0x217234(0x342)]=function(){const _0x59c7ee=_0x217234;if(this[_0x59c7ee(0x1c5)]&&ColorManager[_0x59c7ee(0x483)]['length']<=0x0){const _0xf71b42=this[_0x59c7ee(0x1c5)];return _0xf71b42[Math[_0x59c7ee(0x1ae)](Math[_0x59c7ee(0xc9)]()*_0xf71b42[_0x59c7ee(0x497)])];}const _0x4a3c0f=ColorManager[_0x59c7ee(0x483)][_0x59c7ee(0x4d7)]();let _0x4afd33=ColorManager[_0x59c7ee(0x42d)](_0x4a3c0f);const _0xdb94b=[];while(_0xdb94b[_0x59c7ee(0x497)]<0x6){const _0x3a44eb=ColorManager[_0x59c7ee(0x21f)](_0x4afd33);_0xdb94b['push'](_0x3a44eb),_0x4afd33=_0x4afd33['map'](_0x3414a9=>Math[_0x59c7ee(0x186)](_0x3414a9*0.85)['clamp'](0x0,0xff));}_0xdb94b[_0x59c7ee(0x2fe)](),_0xdb94b['push'](_0xdb94b['shift']()),_0xdb94b[_0x59c7ee(0x441)](_0xdb94b[_0x59c7ee(0x1bf)]());const _0x450d89=new Bitmap(0x64,0x60);_0x450d89[_0x59c7ee(0x3ff)](_0xdb94b),_0x450d89[_0x59c7ee(0x492)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x59c7ee(0x2d4)](_0x59c7ee(0x119));return this[_0x59c7ee(0x1c5)]=this[_0x59c7ee(0x1c5)]||[],this[_0x59c7ee(0x1c5)][_0x59c7ee(0x441)](_0x450d89),_0x450d89;},ImageManager[_0x217234(0x27f)]=function(){const _0x975555=_0x217234;if(this[_0x975555(0x4fd)]&&this[_0x975555(0x4fd)][_0x975555(0x497)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x26a9a3=this['_cached_WeatherEffects_DandelionSeeds'];return _0x26a9a3[Math['floor'](Math[_0x975555(0xc9)]()*_0x26a9a3[_0x975555(0x497)])];}const _0x605029=ColorManager['WEATHER_DANDELION1_COLORS'],_0xb3a3fe=ColorManager['WEATHER_DANDELION2_COLORS'],_0x28dd9f=ColorManager[_0x975555(0x123)],_0x5dbf8d=_0x605029[Math[_0x975555(0x1ae)](Math[_0x975555(0xc9)]()*_0x605029[_0x975555(0x497)])],_0x4dc679=_0xb3a3fe[Math[_0x975555(0x1ae)](Math['random']()*_0xb3a3fe[_0x975555(0x497)])],_0x43e8d8=_0x28dd9f[Math[_0x975555(0x1ae)](Math[_0x975555(0xc9)]()*_0x28dd9f['length'])],_0x240db7=new Bitmap(0x40,0x64);_0x240db7['drawDandelionSeed'](_0x5dbf8d,_0x4dc679,_0x43e8d8),_0x240db7[_0x975555(0x492)]=![];if(ImageManager[_0x975555(0x297)])console[_0x975555(0x2d4)](_0x975555(0x391));return this[_0x975555(0x4fd)]=this[_0x975555(0x4fd)]||[],this['_cached_WeatherEffects_DandelionSeeds']['push'](_0x240db7),_0x240db7;},ImageManager[_0x217234(0x478)]=function(){const _0x2a8bd2=_0x217234;if(this[_0x2a8bd2(0x12d)]&&this[_0x2a8bd2(0x12d)][_0x2a8bd2(0x497)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x5ac608=this[_0x2a8bd2(0x12d)];return _0x5ac608[Math[_0x2a8bd2(0x1ae)](Math[_0x2a8bd2(0xc9)]()*_0x5ac608[_0x2a8bd2(0x497)])];}const _0xc1ff31=ColorManager[_0x2a8bd2(0x2b0)],_0x42b7ad=ColorManager['WEATHER_CLOUD_BLUE_COLORS'],_0x45ef2f=ColorManager[_0x2a8bd2(0x3ac)],_0x2202e6=_0xc1ff31[Math[_0x2a8bd2(0x1ae)](Math['random']()*_0xc1ff31[_0x2a8bd2(0x497)])],_0x4cc11b=_0x42b7ad[Math[_0x2a8bd2(0x1ae)](Math[_0x2a8bd2(0xc9)]()*_0x42b7ad['length'])],_0x2fae51=_0x45ef2f[Math['floor'](Math['random']()*_0x45ef2f['length'])],_0x59d70e=new Bitmap(0x1f4,0x1f4);_0x59d70e['drawCloud'](0xfa,0x15e,0x4b,_0x2202e6,0x10,0x14),_0x59d70e[_0x2a8bd2(0x2f9)](0xfa,0xfa,0x64,_0x2fae51,0x40,0x19),_0x59d70e[_0x2a8bd2(0x2f9)](0xfa,0xfa,0x3c,_0x4cc11b,0x10,0x14),_0x59d70e[_0x2a8bd2(0x492)]=![];if(ImageManager[_0x2a8bd2(0x297)])console[_0x2a8bd2(0x2d4)]('smokefog');return this[_0x2a8bd2(0x12d)]=this[_0x2a8bd2(0x12d)]||[],this[_0x2a8bd2(0x12d)][_0x2a8bd2(0x441)](_0x59d70e),_0x59d70e;},ImageManager[_0x217234(0x26e)]=function(){const _0x2c4277=_0x217234;if(this['_cached_WeatherEffects_SmokeFog']&&this[_0x2c4277(0x220)]['length']>=ImageManager[_0x2c4277(0x465)]){const _0x30ff18=this['_cached_WeatherEffects_SmokeFog'];return _0x30ff18[Math['floor'](Math[_0x2c4277(0xc9)]()*_0x30ff18[_0x2c4277(0x497)])];}const _0x13331b=ColorManager[_0x2c4277(0x2ce)],_0x16e36f=_0x13331b[0x3],_0x271042=_0x13331b[0x2],_0x2ef016=_0x13331b[0x1],_0x35f0c1=new Bitmap(0x3e8,0x3e8);_0x35f0c1[_0x2c4277(0x2f9)](0x1f4,0x28a,0xaf,_0x16e36f,0x10,0x14),_0x35f0c1[_0x2c4277(0x2f9)](0x1f4,0x1f4,0xc8,_0x2ef016,0x40,0x19),_0x35f0c1[_0x2c4277(0x2f9)](0x1f4,0x15e,0xa0,_0x271042,0x10,0x14),_0x35f0c1['_customModified']=![];if(ImageManager[_0x2c4277(0x297)])console['log'](_0x2c4277(0xed));return this[_0x2c4277(0x220)]=this['_cached_WeatherEffects_SmokeFog']||[],this[_0x2c4277(0x220)]['push'](_0x35f0c1),_0x35f0c1;},ImageManager[_0x217234(0x475)]=function(){const _0x55e751=_0x217234;if(this[_0x55e751(0x384)]&&this[_0x55e751(0x384)][_0x55e751(0x497)]>=ImageManager[_0x55e751(0x465)]){const _0x148e58=this[_0x55e751(0x384)];return _0x148e58[Math['floor'](Math[_0x55e751(0xc9)]()*_0x148e58['length'])];}const _0x4e7d44=ColorManager[_0x55e751(0x40e)],_0x222023=0.75;let _0x1a6412=ColorManager['adjustHexColor'](_0x4e7d44[Math['floor'](Math['random']()*_0x4e7d44[_0x55e751(0x497)])],_0x222023),_0x3db6d7=ColorManager[_0x55e751(0x44d)](_0x4e7d44[Math['floor'](Math[_0x55e751(0xc9)]()*_0x4e7d44[_0x55e751(0x497)])],_0x222023),_0x58763e=ColorManager[_0x55e751(0x44d)](_0x4e7d44[Math[_0x55e751(0x1ae)](Math['random']()*_0x4e7d44[_0x55e751(0x497)])],_0x222023);const _0x3007a6=new Bitmap(0x1f4,0x1f4);_0x3007a6[_0x55e751(0x2f9)](0xfa,0x15e,0x4b,_0x1a6412,0x10,0x14),_0x3007a6['drawCloud'](0xfa,0xfa,0x64,_0x58763e,0x40,0x19),_0x3007a6[_0x55e751(0x2f9)](0xfa,0xfa,0x3c,_0x3db6d7,0x10,0x14),_0x3007a6[_0x55e751(0x492)]=![];if(ImageManager[_0x55e751(0x297)])console[_0x55e751(0x2d4)]('pollutionclouds');return this[_0x55e751(0x384)]=this[_0x55e751(0x384)]||[],this[_0x55e751(0x384)][_0x55e751(0x441)](_0x3007a6),_0x3007a6;},ImageManager[_0x217234(0x4ba)]=function(){const _0x19d73c=_0x217234;if(this['_cached_WeatherEffects_HeatClouds']&&this[_0x19d73c(0x2a4)][_0x19d73c(0x497)]>=ImageManager[_0x19d73c(0x465)]){const _0x579313=this['_cached_WeatherEffects_HeatClouds'];return _0x579313[Math[_0x19d73c(0x1ae)](Math[_0x19d73c(0xc9)]()*_0x579313['length'])];}const _0x487e5c=ColorManager['WEATHER_FLAME_COLORS'],_0x45c787=0.85;let _0x2bcd05=ColorManager[_0x19d73c(0x44d)](_0x487e5c[Math[_0x19d73c(0x1ae)](Math['random']()*_0x487e5c[_0x19d73c(0x497)])],_0x45c787),_0x55ca9f=ColorManager[_0x19d73c(0x44d)](_0x487e5c[Math[_0x19d73c(0x1ae)](Math[_0x19d73c(0xc9)]()*_0x487e5c[_0x19d73c(0x497)])],_0x45c787),_0x19b766=ColorManager[_0x19d73c(0x44d)](_0x487e5c[Math['floor'](Math['random']()*_0x487e5c['length'])],_0x45c787);const _0x1f1b88=new Bitmap(0x1f4,0x1f4);_0x1f1b88[_0x19d73c(0x2f9)](0xfa,0x15e,0x4b,_0x2bcd05,0x10,0x14),_0x1f1b88[_0x19d73c(0x2f9)](0xfa,0xfa,0x64,_0x19b766,0x40,0x19),_0x1f1b88[_0x19d73c(0x2f9)](0xfa,0xfa,0x3c,_0x55ca9f,0x10,0x14),_0x1f1b88[_0x19d73c(0x492)]=![];if(ImageManager[_0x19d73c(0x297)])console['log'](_0x19d73c(0x335));return this[_0x19d73c(0x2a4)]=this[_0x19d73c(0x2a4)]||[],this[_0x19d73c(0x2a4)][_0x19d73c(0x441)](_0x1f1b88),_0x1f1b88;},ImageManager[_0x217234(0x38c)]=function(){const _0x29f1a0=_0x217234;if(this[_0x29f1a0(0x26a)]&&this[_0x29f1a0(0x26a)][_0x29f1a0(0x497)]>=ImageManager[_0x29f1a0(0x465)]){if(_0x29f1a0(0x46e)!==_0x29f1a0(0x46e))this[_0x29f1a0(0x45a)]=_0x1f7d31[_0x29f1a0(0x1b4)](),this[_0x29f1a0(0x45a)]['addLoadListener'](this[_0x29f1a0(0x499)][_0x29f1a0(0x1a8)](this));else{const _0x17d3e1=this['_cached_WeatherEffects_SnowClouds'];return _0x17d3e1[Math[_0x29f1a0(0x1ae)](Math[_0x29f1a0(0xc9)]()*_0x17d3e1['length'])];}}const _0x206751=ColorManager[_0x29f1a0(0x300)],_0x361c55=1.2;let _0x2c9fc0=ColorManager[_0x29f1a0(0x44d)](_0x206751[Math[_0x29f1a0(0x1ae)](Math['random']()*_0x206751[_0x29f1a0(0x497)])],_0x361c55),_0x4c3eeb=ColorManager['adjustHexColor'](_0x206751[Math[_0x29f1a0(0x1ae)](Math['random']()*_0x206751[_0x29f1a0(0x497)])],_0x361c55),_0x45e774=ColorManager[_0x29f1a0(0x44d)](_0x206751[Math['floor'](Math['random']()*_0x206751[_0x29f1a0(0x497)])],_0x361c55);const _0x2116dd=new Bitmap(0x1f4,0x1f4);_0x2116dd['drawCloud'](0xfa,0x15e,0x4b,_0x2c9fc0,0x10,0x14),_0x2116dd[_0x29f1a0(0x2f9)](0xfa,0xfa,0x64,_0x45e774,0x40,0x19),_0x2116dd['drawCloud'](0xfa,0xfa,0x3c,_0x4c3eeb,0x10,0x14),_0x2116dd[_0x29f1a0(0x492)]=![];if(ImageManager[_0x29f1a0(0x297)])console[_0x29f1a0(0x2d4)](_0x29f1a0(0x2b8));return this[_0x29f1a0(0x26a)]=this[_0x29f1a0(0x26a)]||[],this[_0x29f1a0(0x26a)]['push'](_0x2116dd),_0x2116dd;},ImageManager[_0x217234(0x4a2)]=function(){const _0x1305cd=_0x217234;if(this[_0x1305cd(0x2ab)]&&this['_cached_WeatherEffects_IceFog'][_0x1305cd(0x497)]>=ImageManager[_0x1305cd(0x465)]){if(_0x1305cd(0x145)==='CxxHT'){const _0x22fe11=this[_0x1305cd(0x2ab)];return _0x22fe11[Math[_0x1305cd(0x1ae)](Math['random']()*_0x22fe11[_0x1305cd(0x497)])];}else return!this['_tempCanvas']&&(this['_tempCanvas']=_0x3511b1['createElement'](_0x1305cd(0x265))),this[_0x1305cd(0x4df)];}const _0x39fc3d=ColorManager[_0x1305cd(0x300)],_0x57221a=1.3;let _0x4f8f03=ColorManager[_0x1305cd(0x44d)](_0x39fc3d[Math[_0x1305cd(0x1ae)](Math[_0x1305cd(0xc9)]()*_0x39fc3d[_0x1305cd(0x497)])],_0x57221a),_0x572f52=ColorManager[_0x1305cd(0x44d)](_0x39fc3d[Math[_0x1305cd(0x1ae)](Math['random']()*_0x39fc3d[_0x1305cd(0x497)])],_0x57221a),_0x5e23d8=ColorManager[_0x1305cd(0x44d)](_0x39fc3d[Math[_0x1305cd(0x1ae)](Math[_0x1305cd(0xc9)]()*_0x39fc3d[_0x1305cd(0x497)])],_0x57221a);const _0x38a7a9=new Bitmap(0x3e8,0x3e8);_0x38a7a9[_0x1305cd(0x2f9)](0x1f4,0x28a,0xaf,_0x4f8f03,0x10,0x14),_0x38a7a9['drawCloud'](0x1f4,0x1f4,0xc8,_0x5e23d8,0x40,0x19),_0x38a7a9['drawCloud'](0x1f4,0x15e,0xa0,_0x572f52,0x10,0x14),_0x38a7a9[_0x1305cd(0x492)]=![];if(ImageManager[_0x1305cd(0x297)])console[_0x1305cd(0x2d4)](_0x1305cd(0xbf));return this[_0x1305cd(0x2ab)]=this[_0x1305cd(0x2ab)]||[],this['_cached_WeatherEffects_IceFog'][_0x1305cd(0x441)](_0x38a7a9),_0x38a7a9;},ImageManager[_0x217234(0x4ef)]=function(){const _0x20a8ff=_0x217234;if(this[_0x20a8ff(0x31d)]&&this['_cached_WeatherEffects_PurpleHaze'][_0x20a8ff(0x497)]>=ImageManager[_0x20a8ff(0x465)]){const _0x28b80f=this[_0x20a8ff(0x31d)];return _0x28b80f[Math['floor'](Math[_0x20a8ff(0xc9)]()*_0x28b80f[_0x20a8ff(0x497)])];}let _0x408c62=ColorManager[_0x20a8ff(0x21f)]([Math[_0x20a8ff(0xc1)](0x80)+0x80,0x18,Math[_0x20a8ff(0xc1)](0x80)+0x80]),_0x307720=ColorManager[_0x20a8ff(0x21f)]([Math[_0x20a8ff(0xc1)](0x80)+0x80,0x30,Math[_0x20a8ff(0xc1)](0x80)+0x80]),_0x229fa9=ColorManager[_0x20a8ff(0x21f)]([Math['randomInt'](0x80)+0x80,0x60,Math[_0x20a8ff(0xc1)](0x80)+0x80]);const _0x1ac99f=new Bitmap(0x3e8,0x3e8);_0x1ac99f[_0x20a8ff(0x2f9)](0x1f4,0x28a,0xaf,_0x408c62,0x10,0x14),_0x1ac99f[_0x20a8ff(0x2f9)](0x1f4,0x1f4,0xc8,_0x229fa9,0x40,0x19),_0x1ac99f[_0x20a8ff(0x2f9)](0x1f4,0x15e,0xa0,_0x307720,0x10,0x14),_0x1ac99f[_0x20a8ff(0x492)]=![];if(ImageManager[_0x20a8ff(0x297)])console['log']('purplehaze');return this[_0x20a8ff(0x31d)]=this['_cached_WeatherEffects_PurpleHaze']||[],this[_0x20a8ff(0x31d)]['push'](_0x1ac99f),_0x1ac99f;},ImageManager[_0x217234(0x29b)]=function(){const _0x4319cb=_0x217234;if(this[_0x4319cb(0xf0)]&&this[_0x4319cb(0xf0)][_0x4319cb(0x497)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0x4319cb(0xcc)!=='BitIE'){const _0x1a8d74=this[_0x4319cb(0xf0)];return _0x1a8d74[Math[_0x4319cb(0x1ae)](Math[_0x4319cb(0xc9)]()*_0x1a8d74[_0x4319cb(0x497)])];}else this[_0x4319cb(0x1e8)]=new _0x5d37ff(),this[_0x4319cb(0xa9)](this[_0x4319cb(0x1e8)],![]),this[_0x4319cb(0x457)](this[_0x4319cb(0x1e8)]);}let _0x2c371e=ColorManager[_0x4319cb(0x21f)]([Math[_0x4319cb(0xc1)](0x20)+0x10,0x18,Math['randomInt'](0x20)+0x10]),_0x3bf48a=ColorManager[_0x4319cb(0x21f)]([Math[_0x4319cb(0xc1)](0x30)+0x20,0x30,Math[_0x4319cb(0xc1)](0x30)+0x20]),_0x580a79=ColorManager[_0x4319cb(0x21f)]([Math['randomInt'](0x40)+0x30,0x60,Math[_0x4319cb(0xc1)](0x40)+0x30]);const _0x505ed9=new Bitmap(0x3e8,0x3e8);_0x505ed9[_0x4319cb(0x2f9)](0x1f4,0x28a,0xaf,_0x2c371e,0x10,0x14),_0x505ed9[_0x4319cb(0x2f9)](0x1f4,0x1f4,0xc8,_0x580a79,0x40,0x19),_0x505ed9[_0x4319cb(0x2f9)](0x1f4,0x15e,0xa0,_0x3bf48a,0x10,0x14),_0x505ed9[_0x4319cb(0x492)]=![];if(ImageManager[_0x4319cb(0x297)])console['log'](_0x4319cb(0x3af));return this['_cached_WeatherEffects_Thunderclouds']=this[_0x4319cb(0xf0)]||[],this[_0x4319cb(0xf0)][_0x4319cb(0x441)](_0x505ed9),_0x505ed9;},ImageManager['weatherEffectsRainClouds']=function(){const _0xb59b70=_0x217234;if(this[_0xb59b70(0x3c0)]&&this[_0xb59b70(0x3c0)]['length']>=ImageManager[_0xb59b70(0x465)]){if('ALSUk'!==_0xb59b70(0x1cd)){const _0x3214df=this['_cached_WeatherEffects_RainClouds'];return _0x3214df[Math[_0xb59b70(0x1ae)](Math['random']()*_0x3214df[_0xb59b70(0x497)])];}else{const _0x228ec2=[];for(var _0x12985c=0x0;_0x12985c<_0x4a0095[_0xb59b70(0x497)]-0x1;_0x12985c++){var _0x1238ca=_0x3d2370[_0x12985c],_0xbaed77=_0x39d071[_0x12985c+0x1],_0x3eb8a2=(_0x1238ca['y']+_0xbaed77['y'])/0x2,_0x4c1401=_0x3eb8a2+(_0x765aef[_0xb59b70(0xc9)]()*0x2-0x1)*_0x1eb612;_0x228ec2[_0xb59b70(0x441)](_0x1238ca,{'x':(_0x1238ca['x']+_0xbaed77['x'])/0x2,'y':_0x4c1401});}_0x228ec2[_0xb59b70(0x441)](_0x5c06bd[_0xb59b70(0x4d7)]()),_0x103d97=_0x228ec2,_0x55e0e2/=_0x1bc8fd,_0x51d2c2/=0x2;}}const _0x590969=Math[_0xb59b70(0xc1)](0x20)+0x40,_0x31df77=Math[_0xb59b70(0xc1)](0x20)+0x60,_0x30f44b=Math[_0xb59b70(0xc1)](0x20)+0x80;let _0x415e0d=ColorManager[_0xb59b70(0x21f)]([_0x590969,_0x590969,_0x590969]),_0x4a91c4=ColorManager[_0xb59b70(0x21f)]([_0x31df77,_0x31df77,_0x31df77]),_0x558c44=ColorManager[_0xb59b70(0x21f)]([_0x30f44b,_0x30f44b,_0x30f44b]);const _0x5ba6c7=new Bitmap(0x1f4,0x1f4);_0x5ba6c7[_0xb59b70(0x2f9)](0xfa,0x15e,0x4b,_0x415e0d,0x10,0x14),_0x5ba6c7[_0xb59b70(0x2f9)](0xfa,0xfa,0x64,_0x558c44,0x40,0x19),_0x5ba6c7[_0xb59b70(0x2f9)](0xfa,0xfa,0x3c,_0x4a91c4,0x10,0x14),_0x5ba6c7[_0xb59b70(0x492)]=![];if(ImageManager[_0xb59b70(0x297)])console['log'](_0xb59b70(0xe8));return this[_0xb59b70(0x3c0)]=this[_0xb59b70(0x3c0)]||[],this[_0xb59b70(0x3c0)]['push'](_0x5ba6c7),_0x5ba6c7;},ImageManager[_0x217234(0x395)]=function(){const _0x160d26=_0x217234;if(this[_0x160d26(0xa7)]&&this[_0x160d26(0xa7)]['length']>=ImageManager[_0x160d26(0x465)]){if(_0x160d26(0x39b)===_0x160d26(0x39b)){const _0x37f3eb=this[_0x160d26(0xa7)];return _0x37f3eb[Math[_0x160d26(0x1ae)](Math[_0x160d26(0xc9)]()*_0x37f3eb[_0x160d26(0x497)])];}else _0x2a1b6a(_0x160d26(0x481)[_0x160d26(0x126)](_0x483731,_0x4ab365,_0x402ff1)),_0x3b37a7[_0x160d26(0x3da)]();}const _0xcc28a0=ColorManager[_0x160d26(0x2b0)],_0x3d6a40=ColorManager[_0x160d26(0x42e)],_0x222741=ColorManager[_0x160d26(0x3ac)],_0x24aa47=_0xcc28a0[Math['floor'](Math['random']()*_0xcc28a0[_0x160d26(0x497)])],_0x3a9041=_0x3d6a40[Math[_0x160d26(0x1ae)](Math[_0x160d26(0xc9)]()*_0x3d6a40['length'])],_0x579cd7=_0x222741[Math['floor'](Math[_0x160d26(0xc9)]()*_0x222741['length'])],_0x5ffccc=new Bitmap(0x3e8,0x3e8);_0x5ffccc[_0x160d26(0x2f9)](0x1f4,0x28a,0xaf,_0x24aa47,0x10,0x14),_0x5ffccc[_0x160d26(0x2f9)](0x1f4,0x1f4,0xc8,_0x579cd7,0x40,0x19),_0x5ffccc[_0x160d26(0x2f9)](0x1f4,0x15e,0xa0,_0x3a9041,0x10,0x14),_0x5ffccc[_0x160d26(0x492)]=![];if(ImageManager[_0x160d26(0x297)])console[_0x160d26(0x2d4)](_0x160d26(0xed));return this['_cached_WeatherEffects_Mist']=this[_0x160d26(0xa7)]||[],this[_0x160d26(0xa7)][_0x160d26(0x441)](_0x5ffccc),_0x5ffccc;},ImageManager[_0x217234(0x11c)]=function(){const _0x30caba=_0x217234;if(this['_cached_WeatherEffects_DustStorm']&&this[_0x30caba(0xd5)][_0x30caba(0x497)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x38c637=this[_0x30caba(0xd5)];return _0x38c637[Math['floor'](Math[_0x30caba(0xc9)]()*_0x38c637['length'])];}const _0x29b713=ColorManager[_0x30caba(0x40e)][_0x30caba(0x2f2)](),_0x1044a7=_0x29b713[Math[_0x30caba(0x1ae)](Math[_0x30caba(0xc9)]()*_0x29b713[_0x30caba(0x497)])],_0x30e7cf=_0x29b713[Math['floor'](Math['random']()*_0x29b713[_0x30caba(0x497)])],_0x372f73=_0x29b713[Math[_0x30caba(0x1ae)](Math[_0x30caba(0xc9)]()*_0x29b713['length'])],_0x18a3b8=new Bitmap(0x1f4,0x1f4);_0x18a3b8['drawCloud'](0xfa,0x15e,0x4b,_0x1044a7,0x6,0x14),_0x18a3b8[_0x30caba(0x2f9)](0xfa,0xfa,0x64,_0x372f73,0xc,0x19),_0x18a3b8[_0x30caba(0x2f9)](0xfa,0xfa,0x3c,_0x30e7cf,0x6,0x14);const _0x3020c5=_0x18a3b8[_0x30caba(0x4f7)],_0x27e968=_0x18a3b8['height'],_0x65777f=0x2;let _0x56fd9f=0x80;while(_0x56fd9f--){const _0x16410f=Math[_0x30caba(0xc1)](_0x3020c5-_0x65777f*0x2)+_0x65777f,_0x19e9c7=Math[_0x30caba(0xc1)](_0x27e968-_0x65777f*0x2)+_0x65777f,_0x23c51c=_0x29b713[Math[_0x30caba(0x1ae)](Math[_0x30caba(0xc9)]()*_0x29b713[_0x30caba(0x497)])],_0x397da7=Math[_0x30caba(0xc1)](_0x65777f)+0x1;_0x18a3b8['paintOpacity']=Math['randomInt'](0x40)+0xc0,_0x18a3b8[_0x30caba(0x383)](_0x16410f,_0x19e9c7,_0x397da7,_0x23c51c);}_0x18a3b8['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x30caba(0x2d4)](_0x30caba(0x4dd));return this[_0x30caba(0xd5)]=this['_cached_WeatherEffects_DustStorm']||[],this[_0x30caba(0xd5)][_0x30caba(0x441)](_0x18a3b8),_0x18a3b8;},ImageManager['weatherEffectsDustClouds']=function(){const _0x37463c=_0x217234;if(this[_0x37463c(0x362)]&&this[_0x37463c(0x362)][_0x37463c(0x497)]>=ImageManager[_0x37463c(0x465)]){const _0x5d154a=this[_0x37463c(0x362)];return _0x5d154a[Math['floor'](Math[_0x37463c(0xc9)]()*_0x5d154a['length'])];}const _0x41317f=ColorManager[_0x37463c(0x40e)][_0x37463c(0x2f2)](),_0x33f974=1.5,_0x41f3d3=ColorManager['adjustHexColor'](_0x41317f[Math[_0x37463c(0x1ae)](Math[_0x37463c(0xc9)]()*_0x41317f[_0x37463c(0x497)])],_0x33f974),_0x316205=ColorManager[_0x37463c(0x44d)](_0x41317f[Math['floor'](Math['random']()*_0x41317f[_0x37463c(0x497)])],_0x33f974),_0x4bfe35=ColorManager[_0x37463c(0x44d)](_0x41317f[Math['floor'](Math[_0x37463c(0xc9)]()*_0x41317f[_0x37463c(0x497)])],_0x33f974),_0x378d04=new Bitmap(0x3e8,0x3e8);_0x378d04[_0x37463c(0x2f9)](0x1f4,0x28a,0xaf,_0x41f3d3,0x10,0x14),_0x378d04['drawCloud'](0x1f4,0x1f4,0xc8,_0x4bfe35,0x40,0x19),_0x378d04['drawCloud'](0x1f4,0x15e,0xa0,_0x316205,0x10,0x14),_0x378d04['_customModified']=![];if(ImageManager[_0x37463c(0x297)])console[_0x37463c(0x2d4)](_0x37463c(0x4de));return this[_0x37463c(0x362)]=this[_0x37463c(0x362)]||[],this['_cached_WeatherEffects_DustClouds']['push'](_0x378d04),_0x378d04;},ImageManager[_0x217234(0x427)]=function(){const _0x187856=_0x217234;if(this[_0x187856(0x398)]&&this[_0x187856(0x398)][_0x187856(0x497)]>=ImageManager[_0x187856(0x465)]){const _0x572cfc=this[_0x187856(0x398)];return _0x572cfc[Math[_0x187856(0x1ae)](Math[_0x187856(0xc9)]()*_0x572cfc['length'])];}const _0x173b81=ColorManager[_0x187856(0x40e)][_0x187856(0x2f2)](),_0x22fae1=1.8,_0x2f7430=ColorManager['adjustHexColor'](_0x173b81[Math[_0x187856(0x1ae)](Math[_0x187856(0xc9)]()*_0x173b81[_0x187856(0x497)])],_0x22fae1),_0x14575c=ColorManager[_0x187856(0x44d)](_0x173b81[Math[_0x187856(0x1ae)](Math[_0x187856(0xc9)]()*_0x173b81[_0x187856(0x497)])],_0x22fae1),_0xb521f1=ColorManager['adjustHexColor'](_0x173b81[Math[_0x187856(0x1ae)](Math['random']()*_0x173b81[_0x187856(0x497)])],_0x22fae1),_0x3a39ba=new Bitmap(0x3e8,0x3e8);_0x3a39ba[_0x187856(0x2f9)](0x1f4,0x28a,0xaf,_0x2f7430,0x10,0x14),_0x3a39ba['drawCloud'](0x1f4,0x1f4,0xc8,_0xb521f1,0x40,0x19),_0x3a39ba[_0x187856(0x2f9)](0x1f4,0x15e,0xa0,_0x14575c,0x10,0x14),_0x3a39ba[_0x187856(0x492)]=![];if(ImageManager[_0x187856(0x297)])console[_0x187856(0x2d4)]('sandclouds');return this['_cached_WeatherEffects_SandClouds']=this[_0x187856(0x398)]||[],this[_0x187856(0x398)][_0x187856(0x441)](_0x3a39ba),_0x3a39ba;},ImageManager['weatherEffectsPollen']=function(){const _0x58046f=_0x217234;if(this[_0x58046f(0x309)]&&this[_0x58046f(0x309)][_0x58046f(0x497)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){if(_0x58046f(0x248)!==_0x58046f(0x248))_0xa6cf48['save'](),_0x11954e['translate'](this[_0x58046f(0x16b)]*_0x16a59b/(this[_0x58046f(0x3d5)]+0x1),0x0),_0x5712b9[_0x58046f(0x23f)](0.5,0.5),_0x1e008a['save'](),_0x6ca235['rotate'](this['_flakeAngle']),this[_0x58046f(0x3ca)](_0x4fb155+0x1),_0x22324d[_0x58046f(0x235)](),_0x1fde01[_0x58046f(0xe3)](),_0xbd5229[_0x58046f(0x369)](-this[_0x58046f(0x118)]),this[_0x58046f(0x3ca)](_0x200700+0x1),_0x60e694[_0x58046f(0x235)](),_0xfefc7d[_0x58046f(0x235)]();else{const _0x1fbc38=this[_0x58046f(0x309)];return _0x1fbc38[Math['floor'](Math[_0x58046f(0xc9)]()*_0x1fbc38[_0x58046f(0x497)])];}}const _0x2287ae=ColorManager[_0x58046f(0x374)][_0x58046f(0x2f2)](),_0x1c9f90=0.8,_0x47b68f=ColorManager['adjustHexColor'](_0x2287ae[Math[_0x58046f(0x1ae)](Math[_0x58046f(0xc9)]()*_0x2287ae['length'])],_0x1c9f90),_0x2330d4=ColorManager['adjustHexColor'](_0x2287ae[Math[_0x58046f(0x1ae)](Math[_0x58046f(0xc9)]()*_0x2287ae[_0x58046f(0x497)])],_0x1c9f90),_0x460867=ColorManager[_0x58046f(0x44d)](_0x2287ae[Math[_0x58046f(0x1ae)](Math[_0x58046f(0xc9)]()*_0x2287ae[_0x58046f(0x497)])],_0x1c9f90),_0x483914=new Bitmap(0x1f4,0x1f4);_0x483914['drawCloud'](0xfa,0x15e,0x4b,_0x47b68f,0x4,0x14),_0x483914[_0x58046f(0x2f9)](0xfa,0xfa,0x64,_0x460867,0x8,0x19),_0x483914['drawCloud'](0xfa,0xfa,0x3c,_0x2330d4,0x4,0x14);const _0x5371da=_0x483914['width'],_0xa19fec=_0x483914[_0x58046f(0x466)],_0x3a5a45=0x2;let _0x48d105=0x20;while(_0x48d105--){if(_0x58046f(0x150)!==_0x58046f(0x306)){const _0x1370cf=Math['randomInt'](_0x5371da-_0x3a5a45*0x2)+_0x3a5a45,_0x1da85c=Math['randomInt'](_0xa19fec-_0x3a5a45*0x2)+_0x3a5a45;let _0x41a834=_0x2287ae[Math[_0x58046f(0x1ae)](Math[_0x58046f(0xc9)]()*_0x2287ae['length'])];_0x41a834=ColorManager[_0x58046f(0x44d)](_0x41a834,_0x1c9f90);const _0x378215=Math[_0x58046f(0xc1)](_0x3a5a45)+0x1;_0x483914[_0x58046f(0x19f)]=Math['randomInt'](0x40)+0xa0,_0x483914[_0x58046f(0x383)](_0x1370cf,_0x1da85c,_0x378215,_0x41a834);}else{const _0x4345d6=this[_0x58046f(0xa7)];return _0x4345d6[_0x27b977[_0x58046f(0x1ae)](_0x5a5b89[_0x58046f(0xc9)]()*_0x4345d6[_0x58046f(0x497)])];}}_0x483914[_0x58046f(0x492)]=![];if(ImageManager[_0x58046f(0x297)])console['log']('pollen');return this[_0x58046f(0x309)]=this['_cached_WeatherEffects_Pollen']||[],this[_0x58046f(0x309)]['push'](_0x483914),_0x483914;},ImageManager[_0x217234(0x169)]=function(){const _0x2c1cd0=_0x217234;if(this[_0x2c1cd0(0x222)]&&this[_0x2c1cd0(0x222)][_0x2c1cd0(0x497)]>=ImageManager[_0x2c1cd0(0x465)]){const _0x1c57d1=this['_cached_WeatherEffects_ToxicGas'];return _0x1c57d1[Math[_0x2c1cd0(0x1ae)](Math['random']()*_0x1c57d1[_0x2c1cd0(0x497)])];}const _0x36c719=_0x2c1cd0(0x33d),_0x5f0397=0.75,_0xc0cef7=ColorManager['adjustHexColor'](_0x36c719,_0x5f0397),_0x52b981=ColorManager[_0x2c1cd0(0x44d)](_0xc0cef7,_0x5f0397),_0x114d36=ColorManager[_0x2c1cd0(0x44d)](_0x52b981,_0x5f0397),_0x3ff796=new Bitmap(0x3e8,0x3e8);_0x3ff796[_0x2c1cd0(0x2f9)](0x1f4,0x28a,0xaf,_0x114d36,0x10,0x14),_0x3ff796['drawCloud'](0x1f4,0x1f4,0xc8,_0xc0cef7,0x40,0x19),_0x3ff796[_0x2c1cd0(0x2f9)](0x1f4,0x15e,0xa0,_0x52b981,0x10,0x14),_0x3ff796[_0x2c1cd0(0x492)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x2c1cd0(0x2d4)]('toxicgas');return this[_0x2c1cd0(0x222)]=this[_0x2c1cd0(0x222)]||[],this['_cached_WeatherEffects_ToxicGas'][_0x2c1cd0(0x441)](_0x3ff796),_0x3ff796;},ImageManager[_0x217234(0x46f)]=function(){const _0x45ceed=_0x217234;if(this[_0x45ceed(0x4b6)]&&ColorManager[_0x45ceed(0x2b3)][_0x45ceed(0x497)]<=0x0){if(_0x45ceed(0x16a)===_0x45ceed(0x16a)){const _0x4b8035=this['_cached_WeatherEffects_PastelBrume'];return _0x4b8035[Math['floor'](Math[_0x45ceed(0xc9)]()*_0x4b8035[_0x45ceed(0x497)])];}else{const _0x3128d9=_0x5ac275['screenX']()-this['x'],_0x4b1fe7=_0x5d93f9['screenY']()-this['y'],_0x5e9da2=_0x5a9bed[_0x45ceed(0x109)](_0x3128d9*_0x3128d9+_0x4b1fe7*_0x4b1fe7),_0x5e8a2b=0x5*_0x4f26ea[_0x45ceed(0x255)]();if(_0x5e9da2<=_0x5e8a2b)_0x4eadab*=0.15;}}const _0x5ccbcf=ColorManager[_0x45ceed(0x2b3)][_0x45ceed(0x4d7)](),_0x2b1aa7=0.85,_0x56dd52=ColorManager[_0x45ceed(0x44d)](_0x5ccbcf,_0x2b1aa7),_0xa4ed6=ColorManager['adjustHexColor'](_0x56dd52,_0x2b1aa7),_0xf4190d=ColorManager['adjustHexColor'](_0xa4ed6,_0x2b1aa7),_0x2745f7=new Bitmap(0x3e8,0x3e8);_0x2745f7[_0x45ceed(0x2f9)](0x1f4,0x28a,0xaf,_0xf4190d,0x10,0x14),_0x2745f7[_0x45ceed(0x2f9)](0x1f4,0x1f4,0xc8,_0x56dd52,0x40,0x19),_0x2745f7[_0x45ceed(0x2f9)](0x1f4,0x15e,0xa0,_0xa4ed6,0x10,0x14),_0x2745f7[_0x45ceed(0x492)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x45ceed(0x2d4)](_0x45ceed(0x200));return this[_0x45ceed(0x4b6)]=this[_0x45ceed(0x4b6)]||[],this['_cached_WeatherEffects_PastelBrume'][_0x45ceed(0x441)](_0x2745f7),_0x2745f7;},ImageManager['weatherEffectsRainbowClouds']=function(){const _0x54748e=_0x217234;if(this['_cached_WeatherEffects_RainbowClouds']&&ColorManager[_0x54748e(0x1da)][_0x54748e(0x497)]<=0x0){const _0x538baf=this[_0x54748e(0x31e)];return _0x538baf[Math[_0x54748e(0x1ae)](Math[_0x54748e(0xc9)]()*_0x538baf[_0x54748e(0x497)])];}const _0x15eccf=ColorManager[_0x54748e(0x1da)][_0x54748e(0x4d7)](),_0x584076=0.85,_0x343cf6=ColorManager[_0x54748e(0x44d)](_0x15eccf,_0x584076),_0x4282eb=ColorManager[_0x54748e(0x44d)](_0x343cf6,_0x584076),_0x1573ea=ColorManager[_0x54748e(0x44d)](_0x4282eb,_0x584076),_0x204c3a=new Bitmap(0x1f4,0x1f4);_0x204c3a['drawCloud'](0xfa,0x15e,0x4b,_0x1573ea,0x10,0x14),_0x204c3a[_0x54748e(0x2f9)](0xfa,0xfa,0x64,_0x343cf6,0x40,0x19),_0x204c3a[_0x54748e(0x2f9)](0xfa,0xfa,0x3c,_0x4282eb,0x10,0x14),_0x204c3a['_customModified']=![];if(ImageManager[_0x54748e(0x297)])console[_0x54748e(0x2d4)]('rainbowclouds');return this['_cached_WeatherEffects_RainbowClouds']=this[_0x54748e(0x31e)]||[],this[_0x54748e(0x31e)][_0x54748e(0x441)](_0x204c3a),_0x204c3a;},ImageManager[_0x217234(0x36a)]=function(){const _0x3efc6=_0x217234;if(this[_0x3efc6(0x148)]&&ColorManager[_0x3efc6(0xba)][_0x3efc6(0x497)]<=0x0){const _0x231435=this[_0x3efc6(0x148)];return _0x231435[Math[_0x3efc6(0x1ae)](Math[_0x3efc6(0xc9)]()*_0x231435[_0x3efc6(0x497)])];}const _0x46bfc8=ColorManager[_0x3efc6(0xba)][_0x3efc6(0x4d7)](),_0x1c79f4=0x20,_0x6a03b1=new Bitmap(_0x1c79f4,_0x1c79f4),_0x5e616b=Math[_0x3efc6(0x1ae)](_0x1c79f4/0x2);_0x6a03b1[_0x3efc6(0x431)](_0x5e616b,_0x5e616b,_0x5e616b,0x168,_0x46bfc8,0x0,0x1,0x0),_0x6a03b1[_0x3efc6(0x249)](_0x5e616b-0x1,_0x5e616b-0x1,0x2,0x2,_0x46bfc8),_0x6a03b1[_0x3efc6(0x492)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x3efc6(0x2d4)](_0x3efc6(0x448));return this[_0x3efc6(0x148)]=this[_0x3efc6(0x148)]||[],this[_0x3efc6(0x148)][_0x3efc6(0x441)](_0x6a03b1),_0x6a03b1;},ImageManager[_0x217234(0x182)]=function(){const _0x3668ce=_0x217234;if(this[_0x3668ce(0x1f0)]&&this[_0x3668ce(0x1f0)][_0x3668ce(0x497)]>=ImageManager[_0x3668ce(0x465)]){if('YHupc'===_0x3668ce(0x4fe))_0x2bc4c0[_0x3668ce(0x44a)](_0xe080ac,_0x4b066b),_0x16eb44['type']=_0x3668ce(0x1fd),_0x2e2049[_0x3668ce(0xd0)]['applyPluginCmdSettings'](_0x5c36c8);else{const _0x95c53b=this[_0x3668ce(0x1f0)];return _0x95c53b[Math[_0x3668ce(0x1ae)](Math[_0x3668ce(0xc9)]()*_0x95c53b[_0x3668ce(0x497)])];}}const _0xcb70d8=ColorManager[_0x3668ce(0x2bb)],_0x2981d8=_0xcb70d8[Math[_0x3668ce(0x1ae)](Math[_0x3668ce(0xc9)]()*_0xcb70d8[_0x3668ce(0x497)])];let _0x116647=Math['randomInt'](0x10)+0x10;if(_0x116647%0x2!==0x0)_0x116647+=0x1;const _0x1d03c3=new Bitmap(_0x116647,_0x116647),_0x120588=Math[_0x3668ce(0x1ae)](_0x116647/0x2);_0x1d03c3[_0x3668ce(0x431)](_0x120588,_0x120588,_0x120588,0x168,_0x2981d8,0x0,0x1,0x0),_0x1d03c3[_0x3668ce(0x249)](_0x120588-0x1,_0x120588-0x1,0x2,0x2,_0x2981d8),_0x1d03c3[_0x3668ce(0x492)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x3668ce(0x2d4)](_0x3668ce(0x4f4));return this[_0x3668ce(0x1f0)]=this[_0x3668ce(0x1f0)]||[],this[_0x3668ce(0x1f0)][_0x3668ce(0x441)](_0x1d03c3),_0x1d03c3;},ImageManager[_0x217234(0x20b)]=function(){const _0x3dcf07=_0x217234;if(this['_cached_WeatherEffects_DarkOrbs']&&this[_0x3dcf07(0x2f8)][_0x3dcf07(0x497)]>=ImageManager[_0x3dcf07(0x465)]){const _0x3deffa=this[_0x3dcf07(0x2f8)];return _0x3deffa[Math[_0x3dcf07(0x1ae)](Math[_0x3dcf07(0xc9)]()*_0x3deffa[_0x3dcf07(0x497)])];}const _0x1c64ae=ColorManager[_0x3dcf07(0x4b5)],_0xdd400c=_0x1c64ae[Math['floor'](Math[_0x3dcf07(0xc9)]()*_0x1c64ae[_0x3dcf07(0x497)])];let _0x4dff7a=Math[_0x3dcf07(0xc1)](0x10)+0x10;if(_0x4dff7a%0x2!==0x0)_0x4dff7a+=0x1;const _0x33ead8=new Bitmap(_0x4dff7a,_0x4dff7a),_0x277f6b=Math[_0x3dcf07(0x1ae)](_0x4dff7a/0x2);_0x33ead8[_0x3dcf07(0x431)](_0x277f6b,_0x277f6b,_0x277f6b,0x168,_0xdd400c,0x0,0x1,0x0),_0x33ead8[_0x3dcf07(0x249)](_0x277f6b-0x1,_0x277f6b-0x1,0x2,0x2,_0xdd400c),_0x33ead8[_0x3dcf07(0x492)]=![];if(ImageManager[_0x3dcf07(0x297)])console[_0x3dcf07(0x2d4)](_0x3dcf07(0x38e));return this[_0x3dcf07(0x2f8)]=this[_0x3dcf07(0x2f8)]||[],this[_0x3dcf07(0x2f8)]['push'](_0x33ead8),_0x33ead8;},ImageManager[_0x217234(0x4e4)]=function(){const _0x121339=_0x217234;if(this['_cached_WeatherEffects_DiamondDust']&&this[_0x121339(0x467)][_0x121339(0x497)]>=ImageManager[_0x121339(0x465)]){const _0x305d6a=this[_0x121339(0x467)];return _0x305d6a[Math[_0x121339(0x1ae)](Math['random']()*_0x305d6a[_0x121339(0x497)])];}const _0x155b72=ColorManager[_0x121339(0x300)],_0x5129c2=1.3;let _0xb9559c=ColorManager[_0x121339(0x44d)](_0x155b72[Math[_0x121339(0x1ae)](Math['random']()*_0x155b72['length'])],_0x5129c2),_0x27ac51=ColorManager[_0x121339(0x44d)](_0x155b72[Math['floor'](Math['random']()*_0x155b72[_0x121339(0x497)])],_0x5129c2),_0x1fb67c=ColorManager[_0x121339(0x44d)](_0x155b72[Math[_0x121339(0x1ae)](Math[_0x121339(0xc9)]()*_0x155b72[_0x121339(0x497)])],_0x5129c2);const _0x28b4d2=new Bitmap(0x1f4,0x1f4);_0x28b4d2[_0x121339(0x2f9)](0xfa,0x15e,0x4b,_0xb9559c,0x4,0x14),_0x28b4d2[_0x121339(0x2f9)](0xfa,0xfa,0x64,_0x1fb67c,0x8,0x19),_0x28b4d2[_0x121339(0x2f9)](0xfa,0xfa,0x3c,_0x27ac51,0x4,0x14);const _0x5905d9=_0x28b4d2['width'],_0x4fa50f=_0x28b4d2['height'],_0x3d4f79=0x2;let _0x5cc904=0x20;while(_0x5cc904--){if(_0x121339(0xf3)===_0x121339(0xf3)){const _0x4502d0=Math[_0x121339(0xc1)](_0x5905d9-_0x3d4f79*0x2)+_0x3d4f79,_0x59e727=Math[_0x121339(0xc1)](_0x4fa50f-_0x3d4f79*0x2)+_0x3d4f79;let _0x480a6c=_0x155b72[Math[_0x121339(0x1ae)](Math['random']()*_0x155b72[_0x121339(0x497)])];_0x480a6c=ColorManager[_0x121339(0x44d)](_0x480a6c,_0x5129c2);const _0x340500=Math[_0x121339(0xc1)](_0x3d4f79)+0x1;_0x28b4d2[_0x121339(0x19f)]=Math[_0x121339(0xc1)](0x40)+0xa0,_0x28b4d2[_0x121339(0x383)](_0x4502d0,_0x59e727,_0x340500,_0x480a6c);}else return _0x3312a8[_0x121339(0x1cb)](_0x8ca42e,_0x5b3af4);}const _0x1d2291=_0x3d4f79*0x3,_0x20dd6b=_0x1d2291/0x2;_0x5cc904=0x8;while(_0x5cc904--){if('ltnkc'==='vtsyW')this[_0x121339(0x341)](_0x328ae9);else{const _0x1ebd08=Math[_0x121339(0xc1)](_0x5905d9-_0x1d2291*0x2)+_0x1d2291,_0x361805=Math['randomInt'](_0x4fa50f-_0x1d2291*0x2)+_0x1d2291;let _0x278381=_0x155b72[Math[_0x121339(0x1ae)](Math[_0x121339(0xc9)]()*_0x155b72['length'])];_0x278381=ColorManager[_0x121339(0x44d)](_0x278381,_0x5129c2),_0x28b4d2[_0x121339(0x19f)]=Math[_0x121339(0xc1)](0x40)+0xa0,_0x28b4d2['drawStar'](_0x1ebd08,_0x361805,_0x278381,_0x278381,0x4,_0x1d2291,_0x20dd6b);}}_0x28b4d2[_0x121339(0x492)]=![];if(ImageManager[_0x121339(0x297)])console[_0x121339(0x2d4)](_0x121339(0x385));return this['_cached_WeatherEffects_DiamondDust']=this[_0x121339(0x467)]||[],this[_0x121339(0x467)]['push'](_0x28b4d2),_0x28b4d2;},ImageManager[_0x217234(0x25f)]=function(){const _0x542162=_0x217234;if(this[_0x542162(0x206)]&&this['_cached_WeatherEffects_CrumblingCave'][_0x542162(0x497)]>=ImageManager[_0x542162(0x465)]){const _0xa11777=this[_0x542162(0x206)];return _0xa11777[Math[_0x542162(0x1ae)](Math[_0x542162(0xc9)]()*_0xa11777[_0x542162(0x497)])];}const _0x4a8b71=ColorManager['WEATHER_EARTH_COLORS'],_0x46382c=_0x4a8b71[Math[_0x542162(0x1ae)](Math[_0x542162(0xc9)]()*_0x4a8b71[_0x542162(0x497)])],_0x4d8d47=_0x4a8b71[Math[_0x542162(0x1ae)](Math[_0x542162(0xc9)]()*_0x4a8b71['length'])],_0x480bc2=_0x4a8b71[Math[_0x542162(0x1ae)](Math['random']()*_0x4a8b71[_0x542162(0x497)])],_0x4e48ba=new Bitmap(0x1f4,0x1f4);_0x4e48ba[_0x542162(0x2f9)](0xfa,0x15e,0x4b,_0x46382c,0x4,0x14),_0x4e48ba['drawCloud'](0xfa,0xfa,0x64,_0x480bc2,0x8,0x19),_0x4e48ba[_0x542162(0x2f9)](0xfa,0xfa,0x3c,_0x4d8d47,0x4,0x14);const _0x119c2b=_0x4e48ba[_0x542162(0x4f7)],_0x53b600=_0x4e48ba[_0x542162(0x466)],_0xb07e18=0x4;let _0x3647bf=0x80;while(_0x3647bf--){const _0x3d224f=Math[_0x542162(0xc1)](_0x119c2b-_0xb07e18*0x2)+_0xb07e18,_0x3fe46d=Math[_0x542162(0xc1)](_0x53b600-_0xb07e18*0x2)+_0xb07e18;let _0x7803d2=_0x4a8b71[Math[_0x542162(0x1ae)](Math[_0x542162(0xc9)]()*_0x4a8b71[_0x542162(0x497)])];const _0x194538=Math['randomInt'](_0xb07e18)+0x1;_0x4e48ba['paintOpacity']=Math[_0x542162(0xc1)](0x40)+0xa0,_0x4e48ba['drawCircle'](_0x3d224f,_0x3fe46d,_0x194538,_0x7803d2);}_0x4e48ba['_customModified']=![];if(ImageManager[_0x542162(0x297)])console[_0x542162(0x2d4)](_0x542162(0xfc));return this[_0x542162(0x206)]=this['_cached_WeatherEffects_CrumblingCave']||[],this[_0x542162(0x206)]['push'](_0x4e48ba),_0x4e48ba;},ImageManager[_0x217234(0x48a)]=function(){const _0x46a135=_0x217234;if(this['_cached_WeatherEffects_Aurora']&&this['_cached_WeatherEffects_Aurora']['length']>=ImageManager[_0x46a135(0x465)]*0x5){if(_0x46a135(0x11a)!==_0x46a135(0x371)){const _0x1644a1=this[_0x46a135(0x251)];return _0x1644a1[Math[_0x46a135(0x1ae)](Math[_0x46a135(0xc9)]()*_0x1644a1['length'])];}else{const _0xe74324=_0x21612e(_0x6c4557['$1'])*0.01;_0x13d352+=_0x122c42[_0x46a135(0x1ae)](_0x3475e6[_0x46a135(0x466)]*_0xe74324);}}const _0x9786b9=Math['randomInt'](0xc0)+0x40,_0x571280=Math[_0x46a135(0xc1)](0xc0)+0x40,_0x5cec63=Math[_0x46a135(0xc1)](0xc0)+0x40,_0x15f9a2='rgba(%1,\x20%2,\x20%3,\x200)'[_0x46a135(0x126)](_0x9786b9,_0x571280,_0x5cec63),_0x23c618=_0x46a135(0x30c)[_0x46a135(0x126)](_0x9786b9,_0x571280,_0x5cec63),_0x5db4df=new Bitmap(0x1f4,0x1f4),_0x5e7a65=_0x5db4df[_0x46a135(0x4f7)],_0x44e418=_0x5db4df[_0x46a135(0x466)],_0x4ce4cc=Math[_0x46a135(0xc1)](0xf4240),_0xc73678=Math[_0x46a135(0xc9)]()*0.03+0.02;for(let _0x25f205=0x0;_0x25f205<_0x44e418;_0x25f205++){const _0xe7b751=(_0x25f205+_0x4ce4cc)*_0xc73678;let _0x5c7694=_0x5e7a65-Math[_0x46a135(0x1ae)](Math[_0x46a135(0x3ec)](_0xe7b751)*0xa)-0x28;const _0x4bef9d=_0x25f205;_0x5db4df[_0x46a135(0x19f)]=(0x1-Math[_0x46a135(0x113)](_0x25f205-_0x44e418/0x2)/(_0x44e418/0x2))*0xc0,_0x5db4df[_0x46a135(0x40d)](_0x5c7694,_0x4bef9d,Math[_0x46a135(0xc1)](0x14)+0xa,0x1,_0x23c618,_0x15f9a2);let _0x7f3d2b=Math[_0x46a135(0x186)](Math[_0x46a135(0x225)]((_0x25f205+_0x4ce4cc)*_0xc73678)*0x5)+0xa;_0x5c7694-=_0x7f3d2b,_0x5db4df[_0x46a135(0x40d)](_0x5c7694,_0x4bef9d,_0x7f3d2b,0x1,_0x23c618,_0x23c618),_0x7f3d2b=Math['ceil'](Math['cos']((_0x25f205+_0x4ce4cc)*_0xc73678)*0x3c)+0xa0,_0x5c7694-=_0x7f3d2b;const _0x435773=Math[_0x46a135(0xc1)](0x3c);_0x5c7694+=_0x435773,_0x5db4df[_0x46a135(0x40d)](_0x5c7694,_0x4bef9d,_0x7f3d2b-_0x435773,0x1,_0x15f9a2,_0x23c618);}_0x5db4df[_0x46a135(0x492)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x46a135(0x2d4)]('aurora');return this[_0x46a135(0x251)]=this[_0x46a135(0x251)]||[],this['_cached_WeatherEffects_Aurora']['push'](_0x5db4df),_0x5db4df;},ImageManager[_0x217234(0xe4)]=function(){const _0x350a92=_0x217234;if(this[_0x350a92(0xa0)]&&this[_0x350a92(0xa0)][_0x350a92(0x497)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']*0x3){if(_0x350a92(0x10c)===_0x350a92(0x3b2)){if(this['_cached_WeatherEffects_Fumes']&&this['_cached_WeatherEffects_Fumes']['length']>=_0x35bf15[_0x350a92(0x465)]){const _0x1d34f0=this[_0x350a92(0x28c)];return _0x1d34f0[_0x859547['floor'](_0x55bba7[_0x350a92(0xc9)]()*_0x1d34f0[_0x350a92(0x497)])];}let _0x5918a4=_0x171244[_0x350a92(0x2ce)];const _0x3926a5=_0x5918a4[_0x5663bb[_0x350a92(0x1ae)](_0x3e24ad[_0x350a92(0xc9)]()*_0x5918a4[_0x350a92(0x497)])];_0x5918a4=_0x15674b[_0x350a92(0x40e)];const _0x17218b=_0x5918a4[_0x1c8180[_0x350a92(0x1ae)](_0x12ca5a[_0x350a92(0xc9)]()*_0x5918a4[_0x350a92(0x497)])];_0x5918a4=_0x5dff37['WEATHER_CLOUD_WHITE_COLORS'];const _0x214988=_0x5918a4[_0x52452d[_0x350a92(0x1ae)](_0x1067e5[_0x350a92(0xc9)]()*_0x5918a4[_0x350a92(0x497)])],_0x45ab7e=new _0x5415a8(0x3e8,0x3e8);_0x45ab7e['drawCloud'](0x1f4,0x258,0xaf,_0x3926a5,0x40,0x14),_0x45ab7e['drawCloud'](0x1f4,0x1f4,0xc8,_0x214988,0x40,0x19),_0x45ab7e[_0x350a92(0x2f9)](0x1f4,0x1c2,0xa0,_0x17218b,0x40,0x1e),_0x45ab7e[_0x350a92(0x492)]=![];if(_0x5cf18b[_0x350a92(0x297)])_0x1b83d8[_0x350a92(0x2d4)](_0x350a92(0x3d3));return this[_0x350a92(0x28c)]=this[_0x350a92(0x28c)]||[],this[_0x350a92(0x28c)]['push'](_0x45ab7e),_0x45ab7e;}else{const _0x143a40=this['_cached_WeatherEffects_ShootingStars'];return _0x143a40[Math[_0x350a92(0x1ae)](Math[_0x350a92(0xc9)]()*_0x143a40[_0x350a92(0x497)])];}}const _0x672e09=Math[_0x350a92(0xc1)](0x80)+0x80,_0x5e2bde=Math[_0x350a92(0xc1)](0x80)+0x80,_0x2ca65e=Math[_0x350a92(0xc1)](0x80)+0x80,_0x200061='rgba(%1,\x20%2,\x20%3,\x200)'[_0x350a92(0x126)](_0x672e09,_0x5e2bde,_0x2ca65e),_0x4cc297=_0x350a92(0x30c)[_0x350a92(0x126)](_0x672e09,_0x5e2bde,_0x2ca65e),_0x537430=Math[_0x350a92(0xc1)](0x32)+0x32,_0x150ab1=0x4,_0x59e05a=new Bitmap(_0x537430*0x2,_0x150ab1);_0x59e05a[_0x350a92(0x40d)](0x0,0x0,_0x537430,_0x150ab1,_0x200061,_0x4cc297),_0x59e05a[_0x350a92(0x492)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x350a92(0x2d4)](_0x350a92(0x4af));return this[_0x350a92(0xa0)]=this[_0x350a92(0xa0)]||[],this[_0x350a92(0xa0)][_0x350a92(0x441)](_0x59e05a),_0x59e05a;},ImageManager[_0x217234(0x49f)]=function(){const _0x285e99=_0x217234;if(this[_0x285e99(0x3e2)]){if(_0x285e99(0x185)!==_0x285e99(0x185)){const _0x2687f5=this[_0x285e99(0xac)]();this[_0x285e99(0x10a)](_0x2687f5);}else return this[_0x285e99(0x3e2)];}const _0x2418e9=0x20,_0x2c8f7f=new Bitmap(_0x2418e9,_0x2418e9),_0x2937cc='#ffffff';_0x2c8f7f[_0x285e99(0x4a6)](_0x2418e9/0x2,_0x2418e9/0x2,_0x2937cc,_0x2937cc,0x4,_0x2418e9/0x2,_0x2418e9/0x8),_0x2c8f7f[_0x285e99(0x492)]=![];if(ImageManager[_0x285e99(0x297)])console['log'](_0x285e99(0x4e0));return this[_0x285e99(0x3e2)]=_0x2c8f7f,_0x2c8f7f;},ImageManager['weatherEffectsAcidRain']=function(){const _0x396436=_0x217234;if(this[_0x396436(0x1ea)]&&this[_0x396436(0x1ea)][_0x396436(0x497)]>=ImageManager[_0x396436(0x465)]){const _0x547b33=this[_0x396436(0x1ea)];return _0x547b33[Math['floor'](Math[_0x396436(0xc9)]()*_0x547b33[_0x396436(0x497)])];}const _0x267695=new Bitmap(0x1f4,0x1f4),_0x384732=_0x396436(0x312),_0x466947=_0x396436(0x4aa),_0x331683=_0x267695[_0x396436(0x4f7)],_0x43e84f=_0x267695['height'],_0x10f84f=0x3c,_0x52feeb=_0x10f84f/0x2,_0x5f0e88=0x2;let _0x39e3b2=0x10;while(_0x39e3b2--){const _0x21aba5=Math['randomInt'](_0x331683-_0x10f84f)+_0x10f84f,_0x2af42b=Math[_0x396436(0xc1)](_0x43e84f-_0x5f0e88)+_0x5f0e88;_0x267695[_0x396436(0x19f)]=Math[_0x396436(0xc1)](0x40)+0xc0,_0x267695['gradientFillRect'](_0x21aba5,_0x2af42b,_0x52feeb,0x2,_0x384732,_0x466947),_0x267695[_0x396436(0x249)](_0x21aba5+_0x52feeb,_0x2af42b,_0x52feeb,0x2,_0x466947);}_0x267695[_0x396436(0x492)]=![];if(ImageManager[_0x396436(0x297)])console['log']('acidrain');return this['_cached_WeatherEffects_AcidRain']=this['_cached_WeatherEffects_AcidRain']||[],this[_0x396436(0x1ea)]['push'](_0x267695),_0x267695;},ImageManager[_0x217234(0x39d)]=function(){const _0x56f3fc=_0x217234;if(this[_0x56f3fc(0x187)]&&this[_0x56f3fc(0x187)]['length']>=ImageManager[_0x56f3fc(0x465)]){const _0x49362c=this['_cached_WeatherEffects_BloodRain'];return _0x49362c[Math[_0x56f3fc(0x1ae)](Math[_0x56f3fc(0xc9)]()*_0x49362c[_0x56f3fc(0x497)])];}const _0x3ae339=new Bitmap(0x1f4,0x1f4),_0x4e87d6='rgba(255,64,64,0)',_0x4b2133=_0x56f3fc(0x45b),_0x198edb=_0x3ae339[_0x56f3fc(0x4f7)],_0x37a3ac=_0x3ae339['height'],_0x4586c7=0x64,_0x283e2f=_0x4586c7/0x2,_0x49db25=0x3;let _0x51b55c=0x10;while(_0x51b55c--){const _0x41f520=Math[_0x56f3fc(0xc1)](_0x198edb-_0x4586c7)+_0x4586c7,_0x45ba63=Math[_0x56f3fc(0xc1)](_0x37a3ac-_0x49db25)+_0x49db25;_0x3ae339[_0x56f3fc(0x19f)]=Math[_0x56f3fc(0xc1)](0x40)+0xc0,_0x3ae339[_0x56f3fc(0x40d)](_0x41f520,_0x45ba63,_0x283e2f,0x2,_0x4e87d6,_0x4b2133),_0x3ae339[_0x56f3fc(0x249)](_0x41f520+_0x283e2f,_0x45ba63,_0x283e2f,0x2,_0x4b2133);}_0x3ae339['_customModified']=![];if(ImageManager[_0x56f3fc(0x297)])console['log'](_0x56f3fc(0x388));return this['_cached_WeatherEffects_BloodRain']=this['_cached_WeatherEffects_BloodRain']||[],this[_0x56f3fc(0x187)]['push'](_0x3ae339),_0x3ae339;},ImageManager['weatherEffectsConfetti']=function(){const _0x393fea=_0x217234;if(this[_0x393fea(0x39c)]&&ColorManager[_0x393fea(0x2b3)][_0x393fea(0x497)]<=0x0){if(_0x393fea(0x4b7)!==_0x393fea(0x3cf)){const _0x23be6c=this['_cached_WeatherEffects_Confetti'];return _0x23be6c[Math['floor'](Math[_0x393fea(0xc9)]()*_0x23be6c[_0x393fea(0x497)])];}else{if(this[_0x393fea(0x2aa)]&&this[_0x393fea(0x2aa)][_0x393fea(0x497)]>=_0x36f754['WEATHER_EFFECTS_MAX_VARIATIONS']*0x3){const _0x37d2da=this[_0x393fea(0x2aa)];return _0x37d2da[_0x2fcc37[_0x393fea(0x1ae)](_0x5076fb[_0x393fea(0xc9)]()*_0x37d2da[_0x393fea(0x497)])];}const _0x35e68f=_0x393fea(0x252),_0x20cbc3=_0x393fea(0x286);let _0x1cae1d=_0x40c963[_0x393fea(0xc1)](0x1e)+0x1e;if(_0x1cae1d%0x2!==0x0)_0x1cae1d+=0x1;const _0x3a9366=0x2,_0x3432c4=new _0x7cdf40(_0x1cae1d,_0x3a9366);_0x3432c4[_0x393fea(0x19f)]=_0x4da6cd[_0x393fea(0xc1)](0x40)+0xc0,_0x3432c4[_0x393fea(0x40d)](0x0,0x0,_0x1cae1d/0x2,_0x3a9366,_0x35e68f,_0x20cbc3),_0x3432c4['fillRect'](_0x1cae1d/0x2,0x0,_0x1cae1d/0x2,_0x3a9366,_0x20cbc3),_0x3432c4[_0x393fea(0x492)]=![];if(_0x4f7b0d[_0x393fea(0x297)])_0x4b6a90[_0x393fea(0x2d4)](_0x393fea(0x10b));return this[_0x393fea(0x2aa)]=this[_0x393fea(0x2aa)]||[],this[_0x393fea(0x2aa)][_0x393fea(0x441)](_0x3432c4),_0x3432c4;}}this[_0x393fea(0x39c)]=this[_0x393fea(0x39c)]||[];const _0x155bd1=ColorManager[_0x393fea(0x4e3)]['pop'](),_0x28484b=_0x393fea(0x24d);{const _0x401928=0x8,_0x4359fa=new Bitmap(_0x401928*0x2,_0x401928*0x2);_0x4359fa[_0x393fea(0x383)](_0x401928,_0x401928,_0x401928,_0x28484b),_0x4359fa[_0x393fea(0x383)](_0x401928,_0x401928,_0x401928-0x1,_0x155bd1),_0x4359fa[_0x393fea(0x492)]=![],this[_0x393fea(0x39c)]['push'](_0x4359fa);}{const _0x2312b0=new Bitmap(0x10,0x8);_0x2312b0[_0x393fea(0x249)](0x0,0x0,0x10,0x8,_0x28484b),_0x2312b0[_0x393fea(0x249)](0x1,0x1,0xe,0x6,_0x155bd1),_0x2312b0[_0x393fea(0x492)]=![],this[_0x393fea(0x39c)][_0x393fea(0x441)](_0x2312b0);}const _0x4d6ced=new Bitmap(0x10,0x10);_0x4d6ced[_0x393fea(0x4a6)](0x8,0x8,_0x28484b,_0x28484b,0x5,0x8,0x4),_0x4d6ced[_0x393fea(0x4a6)](0x8,0x8,_0x155bd1,_0x155bd1,0x5,0x7,0x3),_0x4d6ced[_0x393fea(0x492)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x393fea(0x2d4)](_0x393fea(0xe1));return this['_cached_WeatherEffects_Confetti'][_0x393fea(0x441)](_0x4d6ced),_0x4d6ced;},ImageManager[_0x217234(0x3ed)]=function(){const _0x30320d=_0x217234;if(this['_cached_WeatherEffects_SunBeam']&&ColorManager[_0x30320d(0x266)][_0x30320d(0x497)]<=0x0){if(_0x30320d(0x421)===_0x30320d(0x2a6))_0x1dd304['replayMemorizedWeatherLayerData'](_0x595920,![],_0x44481e);else{const _0x261e5b=this['_cached_WeatherEffects_SunBeam'];return _0x261e5b[Math['floor'](Math[_0x30320d(0xc9)]()*_0x261e5b['length'])];}}const _0x4eeeec=ColorManager[_0x30320d(0x266)][_0x30320d(0x4d7)](),_0x535082=new Bitmap(0x3e8,0x3e8),_0x519d16=_0x535082[_0x30320d(0x4f7)]/0x2;return _0x535082[_0x30320d(0x431)](_0x519d16,_0x519d16,_0x519d16,0x168,_0x4eeeec,0x0,0x1,0x0),_0x535082[_0x30320d(0x492)]=![],this[_0x30320d(0x234)]=this[_0x30320d(0x234)]||[],this['_cached_WeatherEffects_SunBeam'][_0x30320d(0x441)](_0x535082),_0x535082;},ImageManager[_0x217234(0x3d6)]=function(){const _0x2551da=_0x217234;if(this[_0x2551da(0x489)]&&ColorManager[_0x2551da(0x32d)]['length']<=0x0){if(_0x2551da(0x340)!==_0x2551da(0x340)){if(this[_0x2551da(0x309)]&&this[_0x2551da(0x309)][_0x2551da(0x497)]>=_0x276e9e[_0x2551da(0x465)]){const _0x167549=this[_0x2551da(0x309)];return _0x167549[_0x4f3979[_0x2551da(0x1ae)](_0x47ae97[_0x2551da(0xc9)]()*_0x167549[_0x2551da(0x497)])];}const _0x1bb943=_0x32023e[_0x2551da(0x374)][_0x2551da(0x2f2)](),_0x34070a=0.8,_0xa82a4d=_0x43dc11['adjustHexColor'](_0x1bb943[_0x5cf270['floor'](_0x113375['random']()*_0x1bb943['length'])],_0x34070a),_0x7adaa6=_0x4a8a84[_0x2551da(0x44d)](_0x1bb943[_0x106502['floor'](_0x16e08e[_0x2551da(0xc9)]()*_0x1bb943[_0x2551da(0x497)])],_0x34070a),_0x180609=_0x3826d4['adjustHexColor'](_0x1bb943[_0x201416['floor'](_0x43d2f4[_0x2551da(0xc9)]()*_0x1bb943[_0x2551da(0x497)])],_0x34070a),_0x2e178e=new _0x3c0589(0x1f4,0x1f4);_0x2e178e['drawCloud'](0xfa,0x15e,0x4b,_0xa82a4d,0x4,0x14),_0x2e178e[_0x2551da(0x2f9)](0xfa,0xfa,0x64,_0x180609,0x8,0x19),_0x2e178e[_0x2551da(0x2f9)](0xfa,0xfa,0x3c,_0x7adaa6,0x4,0x14);const _0x4313bd=_0x2e178e[_0x2551da(0x4f7)],_0x11c1f0=_0x2e178e[_0x2551da(0x466)],_0x1df160=0x2;let _0x1cad1a=0x20;while(_0x1cad1a--){const _0x338d71=_0x74c46a[_0x2551da(0xc1)](_0x4313bd-_0x1df160*0x2)+_0x1df160,_0x217deb=_0x154c1f['randomInt'](_0x11c1f0-_0x1df160*0x2)+_0x1df160;let _0x47758a=_0x1bb943[_0x65662f['floor'](_0x4d16ea[_0x2551da(0xc9)]()*_0x1bb943['length'])];_0x47758a=_0x5bc591['adjustHexColor'](_0x47758a,_0x34070a);const _0x5bc8a2=_0x109424['randomInt'](_0x1df160)+0x1;_0x2e178e[_0x2551da(0x19f)]=_0x4d0125[_0x2551da(0xc1)](0x40)+0xa0,_0x2e178e[_0x2551da(0x383)](_0x338d71,_0x217deb,_0x5bc8a2,_0x47758a);}_0x2e178e[_0x2551da(0x492)]=![];if(_0x4a2f2a[_0x2551da(0x297)])_0xbc0626[_0x2551da(0x2d4)](_0x2551da(0x106));return this[_0x2551da(0x309)]=this[_0x2551da(0x309)]||[],this['_cached_WeatherEffects_Pollen'][_0x2551da(0x441)](_0x2e178e),_0x2e178e;}else{const _0x3ddd08=this[_0x2551da(0x489)];return _0x3ddd08[Math['floor'](Math[_0x2551da(0xc9)]()*_0x3ddd08['length'])];}}const _0x7d767=ColorManager[_0x2551da(0x32d)]['pop'](),_0x1ff474=new Bitmap(0x3e8,0x3e8),_0x40fc04=_0x1ff474[_0x2551da(0x4f7)]/0x2;return _0x1ff474[_0x2551da(0x431)](_0x40fc04,_0x40fc04,_0x40fc04,0x168,_0x7d767,0x0,0x1,0x0),_0x1ff474[_0x2551da(0x492)]=![],this['_cached_WeatherEffects_PrismBeams']=this[_0x2551da(0x489)]||[],this[_0x2551da(0x489)][_0x2551da(0x441)](_0x1ff474),_0x1ff474;},ImageManager[_0x217234(0x1de)]=function(){const _0x5d542d=_0x217234;if(this[_0x5d542d(0xa2)]&&ColorManager[_0x5d542d(0x4f0)][_0x5d542d(0x497)]<=0x0){const _0x398906=this['_cached_WeatherEffects_ArcticBeams'];return _0x398906[Math['floor'](Math[_0x5d542d(0xc9)]()*_0x398906[_0x5d542d(0x497)])];}let _0x554f11=ColorManager[_0x5d542d(0x4f0)]['pop']();_0x554f11=ColorManager[_0x5d542d(0x44d)](_0x554f11,1.2);const _0x30f508=new Bitmap(0x3e8,0x3e8),_0xc78b64=_0x30f508[_0x5d542d(0x4f7)]/0x2;return _0x30f508[_0x5d542d(0x431)](_0xc78b64,_0xc78b64,_0xc78b64,0x168,_0x554f11,0x0,0x1,0x0),_0x30f508['_customModified']=![],this[_0x5d542d(0xa2)]=this[_0x5d542d(0xa2)]||[],this['_cached_WeatherEffects_ArcticBeams'][_0x5d542d(0x441)](_0x30f508),_0x30f508;},ImageManager['weatherEffectsLensFlare']=function(){const _0x517828=_0x217234;if(this[_0x517828(0x18b)]&&this[_0x517828(0x18b)][_0x517828(0x497)]>=ImageManager[_0x517828(0x465)]){if(_0x517828(0x128)===_0x517828(0x128)){const _0x2d2dea=this['_cached_WeatherEffects_LensFlare'];return _0x2d2dea[Math[_0x517828(0x1ae)](Math[_0x517828(0xc9)]()*_0x2d2dea[_0x517828(0x497)])];}else return _0x38fc48[_0x517828(0xc1)](_0x253ef5+0x1)+_0x240616[_0x517828(0xc1)](_0x3dca8e+0x1)-_0x4f609c;}const _0x317a66=Math['max']($dataSystem['advanced'][_0x517828(0x31f)],$dataSystem['advanced']['screenHeight'])||0x1,_0x5472a7=Math[_0x517828(0x109)](_0x317a66*_0x317a66+_0x317a66*_0x317a66),_0x2e7dc0=Math[_0x517828(0xc1)](_0x5472a7*0x1/0x3)+_0x5472a7*0x2/0x3,_0xf8a9d=Math[_0x517828(0xc1)](0xc8)+0x64,_0x391a19=new Bitmap(_0x2e7dc0,_0xf8a9d*0x2);_0x391a19[_0x517828(0x249)](0x0,0x0,_0x2e7dc0,_0x2e7dc0,_0x517828(0x24d));const _0x68f7fb=_0x391a19['width']/0x2,_0x2749a1=_0x391a19[_0x517828(0x466)],_0xf91701=_0x68f7fb-_0xf8a9d,_0x11b3b5=_0x2749a1/0x2;let _0x4350bc=Math[_0x517828(0xc1)](0xa)+0x6;const _0x2619b7=_0xf91701/_0x4350bc;for(let _0xc76c63=0x0;_0xc76c63<_0x4350bc;_0xc76c63++){if(Math['random']()<0.4-_0xc76c63*0.04){if(_0x517828(0x432)===_0x517828(0x432))continue;else _0x1aedc0[_0x517828(0x44a)](_0xf2127e,_0x24601e),_0x3eca13[_0x517828(0x19c)]=_0x517828(0xe8),_0x2dfc20[_0x517828(0xd0)][_0x517828(0x42a)](_0x223927);}let _0x5928fd=Math[_0x517828(0xc1)](_0xf8a9d*(_0xc76c63*0.75)/_0x4350bc)+_0xf8a9d*0x1/_0x4350bc;const _0x1c7a66=_0x68f7fb+_0xc76c63*_0x2619b7;_0x391a19[_0x517828(0x19f)]=Math['randomInt'](0x40)+0xc0,_0x391a19[_0x517828(0x191)](_0x1c7a66,_0x11b3b5,_0x5928fd);}const _0x8cdd54=_0x2e7dc0-_0xf8a9d;_0x391a19['paintOpacity']=Math[_0x517828(0xc1)](0x10)+0x10,_0x391a19[_0x517828(0x1e5)](_0x8cdd54,_0x11b3b5,_0xf8a9d),_0x391a19[_0x517828(0x492)]=![];if(ImageManager[_0x517828(0x297)])console[_0x517828(0x2d4)](_0x517828(0x4d8));return this['_cached_WeatherEffects_LensFlare']=this[_0x517828(0x18b)]||[],this[_0x517828(0x18b)][_0x517828(0x441)](_0x391a19),_0x391a19;},ImageManager['weatherEffectsMoonBeams']=function(){const _0x4f5454=_0x217234;if(this[_0x4f5454(0x183)]&&ColorManager['WEATHER_MOON_BEAM_COLORS'][_0x4f5454(0x497)]<=0x0){if(_0x4f5454(0x3fd)!==_0x4f5454(0x4ce)){const _0x49ba83=this[_0x4f5454(0x183)];return _0x49ba83[Math[_0x4f5454(0x1ae)](Math[_0x4f5454(0xc9)]()*_0x49ba83[_0x4f5454(0x497)])];}else this[_0x4f5454(0x19c)]='sparkle',this['_lifespan']=_0x6e4f83['randomInt'](0x1e)+0x3c,this[_0x4f5454(0x3c4)]=this['_lifespan'],this[_0x4f5454(0x4ae)]=_0x4f5454(0x4e0),this[_0x4f5454(0x20c)]={},this[_0x4f5454(0x316)]=0x1,this[_0x4f5454(0x261)]=0x1,this[_0x4f5454(0x18e)]=0x1,this[_0x4f5454(0x36f)]=0xff,this[_0x4f5454(0x434)]=0xff,this[_0x4f5454(0x2e9)]=_0x4f5454(0x142),this[_0x4f5454(0x197)]=0x6,this['_opacityFadeInTimeWhole']=0x6,this[_0x4f5454(0x224)]=_0x4f5454(0x2cc),this[_0x4f5454(0x2c0)]=0x0,this[_0x4f5454(0xc0)]=0x0,this[_0x4f5454(0x1d5)]=0x0,this[_0x4f5454(0x42b)]=![],this[_0x4f5454(0x372)]=0x0,this['_angleArcTotal']=0x0,this['_angleSwayRange']=0x0,this[_0x4f5454(0x194)]=0x0,this[_0x4f5454(0x3dc)]=_0x5a7fd9[_0x4f5454(0xc1)](0x3)+0x2,this[_0x4f5454(0x3f6)]=0x0,this[_0x4f5454(0x336)]=0x0,this[_0x4f5454(0x2ed)]=!![],this[_0x4f5454(0x45a)]=_0x2cffd5[_0x4f5454(0x49f)](),this['bitmap']['addLoadListener'](this['setFullBitmapFrame'][_0x4f5454(0x1a8)](this)),this[_0x4f5454(0x22c)]=0x1,this[_0x4f5454(0xaf)]=0x0,this[_0x4f5454(0x513)]=[0x0,0x0,0x0,0x0],this[_0x4f5454(0x400)]();}let _0x516622=ColorManager[_0x4f5454(0x44b)][_0x4f5454(0x4d7)]();_0x516622=ColorManager[_0x4f5454(0x44d)](_0x516622,1.2);const _0x5eb0dd=new Bitmap(0x3e8,0x3e8),_0x134231=_0x5eb0dd[_0x4f5454(0x4f7)]/0x2;return _0x5eb0dd[_0x4f5454(0x431)](_0x134231,_0x134231,_0x134231,0x168,_0x516622,0x0,0x1,0x0),_0x5eb0dd[_0x4f5454(0x492)]=![],this['_cached_WeatherEffects_MoonBeam']=this[_0x4f5454(0x183)]||[],this[_0x4f5454(0x183)][_0x4f5454(0x441)](_0x5eb0dd),_0x5eb0dd;},ImageManager[_0x217234(0xa8)]=function(){const _0x3bd2f3=_0x217234;if(this['_cached_WeatherEffects_UvBeam']&&ColorManager[_0x3bd2f3(0x1ba)][_0x3bd2f3(0x497)]<=0x0){const _0x2f7cf5=this['_cached_WeatherEffects_UvBeam'];return _0x2f7cf5[Math[_0x3bd2f3(0x1ae)](Math['random']()*_0x2f7cf5[_0x3bd2f3(0x497)])];}const _0x2cadfa=ColorManager[_0x3bd2f3(0x1ba)][_0x3bd2f3(0x4d7)](),_0x1e539f=new Bitmap(0x3e8,0x3e8),_0x4cc10c=_0x1e539f[_0x3bd2f3(0x4f7)]/0x2;return _0x1e539f['drawPolyArc'](_0x4cc10c,_0x4cc10c,_0x4cc10c,0x168,_0x2cadfa,0x0,0x1,0x0),_0x1e539f[_0x3bd2f3(0x492)]=![],this[_0x3bd2f3(0x239)]=this[_0x3bd2f3(0x239)]||[],this[_0x3bd2f3(0x239)][_0x3bd2f3(0x441)](_0x1e539f),_0x1e539f;},ImageManager[_0x217234(0xe0)]=function(){const _0x2f463d=_0x217234;if(this[_0x2f463d(0x1ac)]&&ColorManager[_0x2f463d(0x24a)][_0x2f463d(0x497)]<=0x0){if(_0x2f463d(0x276)!==_0x2f463d(0x4e6)){const _0x21767f=this[_0x2f463d(0x1ac)];return _0x21767f[Math['floor'](Math[_0x2f463d(0xc9)]()*_0x21767f['length'])];}else{const _0x40a3ed=this[_0x2f463d(0x273)];return _0x40a3ed[_0x3f5220[_0x2f463d(0x1ae)](_0x53cb81[_0x2f463d(0xc9)]()*_0x40a3ed['length'])];}}const _0x25cb5d=ColorManager[_0x2f463d(0x24a)][_0x2f463d(0x4d7)](),_0x5d7b12=new Bitmap(0x3e8,0x3e8),_0x8ba8cd=_0x5d7b12['width']/0x2;return _0x5d7b12[_0x2f463d(0x431)](_0x8ba8cd,_0x8ba8cd,_0x8ba8cd,0x168,_0x25cb5d,0x0,0x1,0x0),_0x5d7b12[_0x2f463d(0x492)]=![],this['_cached_WeatherEffects_RadioactiveBeam']=this[_0x2f463d(0x1ac)]||[],this[_0x2f463d(0x1ac)]['push'](_0x5d7b12),_0x5d7b12;},ImageManager[_0x217234(0x1f6)]=function(){const _0x320525=_0x217234;if(this['_cached_WeatherEffects_HouseDust']&&this[_0x320525(0x464)][_0x320525(0x497)]>=ImageManager[_0x320525(0x465)]){const _0x3c8851=this['_cached_WeatherEffects_HouseDust'];return _0x3c8851[Math[_0x320525(0x1ae)](Math['random']()*_0x3c8851[_0x320525(0x497)])];}const _0x1428b9=new Bitmap(0x1f4,0x1f4),_0x19d40b=_0x1428b9[_0x320525(0x4f7)],_0x335393=_0x1428b9['height'],_0x57158f=ColorManager[_0x320525(0x3ac)][_0x320525(0x2f2)](),_0xc8034f=1.5,_0x49b9ab=0x1;let _0x2e95f5=0x20;while(_0x2e95f5--){const _0xd083f5=Math['randomInt'](_0x19d40b-_0x49b9ab*0x2)+_0x49b9ab,_0x359be5=Math[_0x320525(0xc1)](_0x335393-_0x49b9ab*0x2)+_0x49b9ab;let _0x50178f=_0x57158f[Math[_0x320525(0x1ae)](Math[_0x320525(0xc9)]()*_0x57158f['length'])];_0x50178f=ColorManager[_0x320525(0x44d)](_0x50178f,_0xc8034f);const _0x1c1c6c=Math[_0x320525(0xc1)](_0x49b9ab)+0x1;_0x1428b9['paintOpacity']=Math[_0x320525(0xc1)](0x40)+0xa0,_0x1428b9[_0x320525(0x383)](_0xd083f5,_0x359be5,_0x1c1c6c,_0x50178f);}_0x1428b9[_0x320525(0x492)]=![];if(ImageManager[_0x320525(0x297)])console['log'](_0x320525(0x472));return this[_0x320525(0x464)]=this[_0x320525(0x464)]||[],this[_0x320525(0x464)][_0x320525(0x441)](_0x1428b9),_0x1428b9;},ImageManager['weatherEffectsFlameHaze']=function(){const _0x1c6abc=_0x217234;if(this['_cached_WeatherEffects_FlameHaze']&&this[_0x1c6abc(0x334)][_0x1c6abc(0x497)]>=ImageManager[_0x1c6abc(0x465)]){const _0x35292e=this[_0x1c6abc(0x334)];return _0x35292e[Math[_0x1c6abc(0x1ae)](Math[_0x1c6abc(0xc9)]()*_0x35292e['length'])];}const _0x43c8c0=ColorManager[_0x1c6abc(0xb2)]['clone'](),_0x4c6679=_0x43c8c0[Math[_0x1c6abc(0x1ae)](Math[_0x1c6abc(0xc9)]()*_0x43c8c0[_0x1c6abc(0x497)])];_0x43c8c0[_0x1c6abc(0x4fc)](_0x4c6679);const _0x6632f2=_0x43c8c0[Math['floor'](Math[_0x1c6abc(0xc9)]()*_0x43c8c0['length'])];_0x43c8c0[_0x1c6abc(0x4fc)](_0x6632f2);const _0x3ece99=_0x43c8c0[Math[_0x1c6abc(0x1ae)](Math[_0x1c6abc(0xc9)]()*_0x43c8c0['length'])];_0x43c8c0[_0x1c6abc(0x4fc)](_0x3ece99);const _0x571eef=new Bitmap(0x3e8,0x3e8);_0x571eef['drawCloud'](0x1f4,0x28a,0xaf,_0x3ece99,0x10,0x14),_0x571eef['drawCloud'](0x1f4,0x1f4,0xc8,_0x4c6679,0x40,0x19),_0x571eef[_0x1c6abc(0x2f9)](0x1f4,0x15e,0xa0,_0x6632f2,0x10,0x14),_0x571eef['_customModified']=![];if(ImageManager[_0x1c6abc(0x297)])console[_0x1c6abc(0x2d4)](_0x1c6abc(0x521));return this['_cached_WeatherEffects_FlameHaze']=this['_cached_WeatherEffects_FlameHaze']||[],this[_0x1c6abc(0x334)][_0x1c6abc(0x441)](_0x571eef),_0x571eef;},ImageManager[_0x217234(0x3d9)]=function(){const _0x5552d7=_0x217234;if(this['_cached_WeatherEffects_Spiderbolt']&&this[_0x5552d7(0x1dc)][_0x5552d7(0x497)]>=ImageManager[_0x5552d7(0x465)]*0x3){const _0x25dbf4=this[_0x5552d7(0x1dc)];return _0x25dbf4[Math['floor'](Math[_0x5552d7(0xc9)]()*_0x25dbf4[_0x5552d7(0x497)])];}const _0x5acd50=Math[_0x5552d7(0x49e)]($dataSystem[_0x5552d7(0x397)]['screenWidth'],$dataSystem[_0x5552d7(0x397)]['screenHeight'])||0x1,_0x1f5df4=new Bitmap(_0x5acd50,_0x5acd50),_0xb175f2='#ffffff';_0x1f5df4[_0x5552d7(0x4a6)](_0x5acd50/0x2,_0x5acd50/0x2,_0xb175f2,_0xb175f2,0x4,0x10,0x4),_0x1f5df4[_0x5552d7(0x469)]['scale'](0.5,0.5),_0x1f5df4[_0x5552d7(0x469)][_0x5552d7(0x3de)](_0x5acd50,_0x5acd50/0x2),_0x1f5df4[_0x5552d7(0xe2)](),_0x1f5df4['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x5552d7(0x2d4)](_0x5552d7(0x3b3));return this[_0x5552d7(0x1dc)]=this['_cached_WeatherEffects_Spiderbolt']||[],this['_cached_WeatherEffects_Spiderbolt'][_0x5552d7(0x441)](_0x1f5df4),_0x1f5df4;},ImageManager[_0x217234(0xf1)]=function(){const _0x4e849c=_0x217234;if(this[_0x4e849c(0x2aa)]&&this['_cached_WeatherEffects_WaterDrop'][_0x4e849c(0x497)]>=ImageManager[_0x4e849c(0x465)]*0x3){const _0x2e1caa=this[_0x4e849c(0x2aa)];return _0x2e1caa[Math[_0x4e849c(0x1ae)](Math[_0x4e849c(0xc9)]()*_0x2e1caa['length'])];}const _0x12aec0=_0x4e849c(0x252),_0x2218e1=_0x4e849c(0x286);let _0x434587=Math[_0x4e849c(0xc1)](0x1e)+0x1e;if(_0x434587%0x2!==0x0)_0x434587+=0x1;const _0xea17da=0x2,_0x416af7=new Bitmap(_0x434587,_0xea17da);_0x416af7['paintOpacity']=Math[_0x4e849c(0xc1)](0x40)+0xc0,_0x416af7[_0x4e849c(0x40d)](0x0,0x0,_0x434587/0x2,_0xea17da,_0x12aec0,_0x2218e1),_0x416af7[_0x4e849c(0x249)](_0x434587/0x2,0x0,_0x434587/0x2,_0xea17da,_0x2218e1),_0x416af7[_0x4e849c(0x492)]=![];if(ImageManager[_0x4e849c(0x297)])console[_0x4e849c(0x2d4)]('waterdrop');return this[_0x4e849c(0x2aa)]=this[_0x4e849c(0x2aa)]||[],this[_0x4e849c(0x2aa)][_0x4e849c(0x441)](_0x416af7),_0x416af7;},ImageManager[_0x217234(0x459)]=function(){const _0x5c1f5b=_0x217234;if(this[_0x5c1f5b(0x370)]&&ColorManager[_0x5c1f5b(0x1c9)][_0x5c1f5b(0x497)]<=0x0){const _0xe66783=this[_0x5c1f5b(0x370)];return _0xe66783[Math[_0x5c1f5b(0x1ae)](Math[_0x5c1f5b(0xc9)]()*_0xe66783[_0x5c1f5b(0x497)])];}const _0x1fc60d=ColorManager[_0x5c1f5b(0x1c9)][_0x5c1f5b(0x4d7)](),_0x35b587=new Bitmap(0x18,0x18),_0x39ea1d=0xc,_0x28d4cf=_0x39ea1d/0x3;return _0x35b587[_0x5c1f5b(0x383)](_0x39ea1d,_0x39ea1d,_0x39ea1d,_0x1fc60d),_0x35b587['clearCircle'](_0x39ea1d,_0x39ea1d,_0x39ea1d-0x2),_0x35b587[_0x5c1f5b(0x383)](_0x39ea1d+_0x28d4cf,_0x39ea1d-_0x28d4cf,_0x28d4cf,'#ffffff'),_0x35b587[_0x5c1f5b(0x492)]=![],this[_0x5c1f5b(0x370)]=this['_cached_WeatherEffects_SoapBubbles']||[],this[_0x5c1f5b(0x370)]['push'](_0x35b587),_0x35b587;},ImageManager[_0x217234(0x230)]=function(){const _0x1d6aec=_0x217234;if(this[_0x1d6aec(0x3d4)]&&this[_0x1d6aec(0x3d4)][_0x1d6aec(0x497)]>=ImageManager[_0x1d6aec(0x465)]){if('ZWOwM'===_0x1d6aec(0x422)){const _0x3fb117=_0xc270f8(_0x5b8e67['$1'])*0.01;_0xfc6dc5+=_0x3a8c19[_0x1d6aec(0x1ae)](_0x38234c[_0x1d6aec(0x4f7)]*_0x3fb117);}else{const _0x13275b=this[_0x1d6aec(0x3d4)];return _0x13275b[Math[_0x1d6aec(0x1ae)](Math['random']()*_0x13275b[_0x1d6aec(0x497)])];}}const _0x4cc5a8=ColorManager[_0x1d6aec(0x2ce)],_0x2d75d9=_0x4cc5a8[0x3],_0x233b3d=_0x4cc5a8[0x2],_0x48f7e7=_0x4cc5a8[0x1],_0x51c31c=new Bitmap(0x1f4,0x1f4);_0x51c31c[_0x1d6aec(0x2f9)](0xfa,0x15e,0x4b,_0x2d75d9,0x10,0x14),_0x51c31c[_0x1d6aec(0x2f9)](0xfa,0xfa,0x64,_0x48f7e7,0x40,0x19),_0x51c31c[_0x1d6aec(0x2f9)](0xfa,0xfa,0x3c,_0x233b3d,0x10,0x14),_0x51c31c[_0x1d6aec(0x492)]=![];if(ImageManager[_0x1d6aec(0x297)])console['log'](_0x1d6aec(0x177));return this[_0x1d6aec(0x3d4)]=this[_0x1d6aec(0x3d4)]||[],this[_0x1d6aec(0x3d4)]['push'](_0x51c31c),_0x51c31c;},ImageManager[_0x217234(0x439)]=function(){const _0x2d8d97=_0x217234;if(this['_cached_WeatherEffects_Sleet']&&this[_0x2d8d97(0xa6)][_0x2d8d97(0x497)]>=ImageManager[_0x2d8d97(0x465)]){if(_0x2d8d97(0xcf)!==_0x2d8d97(0xcf)){const _0x188707=this[_0x2d8d97(0x469)],_0x204957=0xa,_0x2fbeeb=0x50,_0x3c7508={'x':_0x204957,'y':this[_0x2d8d97(0x466)]/0x2},_0x14b74f=0x8,_0x3da593=this[_0x2d8d97(0x4f7)]-_0x204957,_0x3a4243=_0x9c3b55[_0x2d8d97(0x367)]['clone'](),_0x2c896f=_0x3a4243[_0x28520b[_0x2d8d97(0x1ae)](_0x3c4095['random']()*_0x3a4243[_0x2d8d97(0x497)])],_0x46d80d=0x2,_0xcf7a7d=this[_0x2d8d97(0x4f7)]/0x5;_0x188707[_0x2d8d97(0x105)]=_0x2d8d97(0x1f4),_0x188707['strokeStyle']=_0x2c896f,_0x188707['shadowColor']=_0x2c896f,_0x188707[_0x2d8d97(0x134)]=_0x2c896f;let _0x2a3972=[],_0x2858a1=_0x3c7508['x']+_0x3da593;_0x2a3972['push']({'x':_0x3c7508['x'],'y':_0x3c7508['y']}),_0x2a3972[_0x2d8d97(0x441)]({'x':_0x3da593+(_0x20f01a[_0x2d8d97(0xc9)]()-0.9)*_0x2fbeeb,'y':_0x181f19[_0x2d8d97(0xc9)]()*(this[_0x2d8d97(0x466)]-0x64)+_0x2fbeeb});let _0x4de1f2=_0xcf7a7d;while(_0x2858a1>_0x14b74f){const _0xbd527d=[];for(var _0x5a1b3d=0x0;_0x5a1b3d<_0x2a3972[_0x2d8d97(0x497)]-0x1;_0x5a1b3d++){var _0x5eca12=_0x2a3972[_0x5a1b3d],_0x3334f3=_0x2a3972[_0x5a1b3d+0x1],_0x4f837a=(_0x5eca12['y']+_0x3334f3['y'])/0x2,_0x5efdbe=_0x4f837a+(_0x2d69e2[_0x2d8d97(0xc9)]()*0x2-0x1)*_0x4de1f2;_0xbd527d[_0x2d8d97(0x441)](_0x5eca12,{'x':(_0x5eca12['x']+_0x3334f3['x'])/0x2,'y':_0x5efdbe});}_0xbd527d[_0x2d8d97(0x441)](_0x2a3972[_0x2d8d97(0x4d7)]()),_0x2a3972=_0xbd527d,_0x4de1f2/=_0x46d80d,_0x2858a1/=0x2;}_0x188707[_0x2d8d97(0x105)]=_0x2d8d97(0x1f4),_0x188707[_0x2d8d97(0x171)]=0xf,_0x188707[_0x2d8d97(0x153)]();for(var _0x5a1b3d=0x0;_0x5a1b3d<_0x2a3972[_0x2d8d97(0x497)];_0x5a1b3d++){_0x188707[_0x2d8d97(0x35b)](_0x2a3972[_0x5a1b3d]['x'],_0x2a3972[_0x5a1b3d]['y']);}let _0x589ac3=0x3;while(_0x589ac3--)_0x188707[_0x2d8d97(0x1b7)]();_0x188707['restore'](),this['_baseTexture'][_0x2d8d97(0xb5)]();}else{const _0x2a70f9=this['_cached_WeatherEffects_Sleet'];return _0x2a70f9[Math[_0x2d8d97(0x1ae)](Math['random']()*_0x2a70f9[_0x2d8d97(0x497)])];}}const _0x3027b5=ColorManager['WEATHER_FROST_COLORS'],_0x1e339a=1.3;let _0x1114bb=ColorManager['adjustHexColor'](_0x3027b5[Math[_0x2d8d97(0x1ae)](Math[_0x2d8d97(0xc9)]()*_0x3027b5['length'])],_0x1e339a),_0x30cc66=ColorManager['adjustHexColor'](_0x3027b5[Math[_0x2d8d97(0x1ae)](Math[_0x2d8d97(0xc9)]()*_0x3027b5[_0x2d8d97(0x497)])],_0x1e339a),_0x97e4b2=ColorManager[_0x2d8d97(0x44d)](_0x3027b5[Math[_0x2d8d97(0x1ae)](Math[_0x2d8d97(0xc9)]()*_0x3027b5['length'])],_0x1e339a);const _0x1de83d=new Bitmap(0x1f4,0x1f4);_0x1de83d['drawCloud'](0xfa,0x15e,0x4b,_0x1114bb,0x4,0x14),_0x1de83d['drawCloud'](0xfa,0xfa,0x64,_0x97e4b2,0x8,0x19),_0x1de83d['drawCloud'](0xfa,0xfa,0x3c,_0x30cc66,0x4,0x14);const _0xd19d69=_0x1de83d[_0x2d8d97(0x4f7)],_0x181383=_0x1de83d['height'],_0x12d4a1=0x4;let _0x18ded6=0x10;while(_0x18ded6--){const _0x3a45a6=Math[_0x2d8d97(0xc1)](_0xd19d69-_0x12d4a1*0x2)+_0x12d4a1,_0x5d6952=Math['randomInt'](_0x181383-_0x12d4a1*0x2)+_0x12d4a1;let _0xc07aa7=_0x3027b5[Math[_0x2d8d97(0x1ae)](Math[_0x2d8d97(0xc9)]()*_0x3027b5[_0x2d8d97(0x497)])];_0xc07aa7=ColorManager[_0x2d8d97(0x44d)](_0xc07aa7,_0x1e339a),_0x1de83d[_0x2d8d97(0x19f)]=Math[_0x2d8d97(0xc1)](0x40)+0xc0,_0x1de83d[_0x2d8d97(0x4a6)](_0x3a45a6,_0x5d6952,_0xc07aa7,_0xc07aa7,0x4,_0x12d4a1,_0x12d4a1/0x2);}_0x1de83d['_customModified']=![];if(ImageManager[_0x2d8d97(0x297)])console[_0x2d8d97(0x2d4)](_0x2d8d97(0x2a8));return this[_0x2d8d97(0xa6)]=this['_cached_WeatherEffects_Sleet']||[],this['_cached_WeatherEffects_Sleet'][_0x2d8d97(0x441)](_0x1de83d),_0x1de83d;},ImageManager['weatherEffectsTempest']=function(){const _0x184c08=_0x217234;if(this[_0x184c08(0x3f5)]&&this[_0x184c08(0x3f5)][_0x184c08(0x497)]>=ImageManager[_0x184c08(0x465)]){const _0x52cce4=this[_0x184c08(0x3f5)];return _0x52cce4[Math['floor'](Math['random']()*_0x52cce4['length'])];}const _0x56df20=Math['randomInt'](0x20)+0x40,_0x3d4150=Math[_0x184c08(0xc1)](0x20)+0x60,_0x32e632=Math[_0x184c08(0xc1)](0x20)+0x80;let _0x49b65f=ColorManager[_0x184c08(0x21f)]([_0x56df20,_0x56df20,_0x56df20]),_0x8d273a=ColorManager['arrayToHex']([_0x3d4150,_0x3d4150,_0x3d4150]),_0x1c061a=ColorManager[_0x184c08(0x21f)]([_0x32e632,_0x32e632,_0x32e632]);const _0x1f86a5=new Bitmap(0x3e8,0x3e8);_0x1f86a5[_0x184c08(0x2f9)](0x1f4,0x28a,0xaf,_0x49b65f,0x10,0x14),_0x1f86a5[_0x184c08(0x2f9)](0x1f4,0x1f4,0xc8,_0x1c061a,0x40,0x19),_0x1f86a5[_0x184c08(0x2f9)](0x1f4,0x15e,0xa0,_0x8d273a,0x10,0x14),_0x1f86a5['_customModified']=![];if(ImageManager[_0x184c08(0x297)])console['log'](_0x184c08(0x24b));return this[_0x184c08(0x3f5)]=this[_0x184c08(0x3f5)]||[],this[_0x184c08(0x3f5)][_0x184c08(0x441)](_0x1f86a5),_0x1f86a5;},ImageManager[_0x217234(0x46b)]=function(){const _0x4bcad7=_0x217234;if(this[_0x4bcad7(0x408)]&&ColorManager['WEATHER_GRASSY_GUST_COLORS'][_0x4bcad7(0x497)]<=0x0){const _0x5483f8=this[_0x4bcad7(0x408)];return _0x5483f8[Math[_0x4bcad7(0x1ae)](Math['random']()*_0x5483f8['length'])];}const _0x3c32c8=ColorManager[_0x4bcad7(0x4c2)][_0x4bcad7(0x4d7)](),_0x2cb125=ColorManager[_0x4bcad7(0x44d)](_0x3c32c8,0.5),_0xaeace=0xc,_0x459676=0x4,_0x10209e=new Bitmap(_0xaeace,_0x459676);_0x10209e[_0x4bcad7(0x249)](0x0,0x0,_0xaeace,_0x459676/0x2,_0x3c32c8),_0x10209e[_0x4bcad7(0x249)](0x0,_0x459676/0x2,_0xaeace,_0x459676/0x2,_0x2cb125),_0x10209e[_0x4bcad7(0x492)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x4bcad7(0x2d4)]('grassyGust');return this[_0x4bcad7(0x408)]=this[_0x4bcad7(0x408)]||[],this[_0x4bcad7(0x408)][_0x4bcad7(0x441)](_0x10209e),_0x10209e;},ImageManager[_0x217234(0x485)]=function(){const _0x39e405=_0x217234;if(this['_cached_WeatherEffects_Xtreme']&&this[_0x39e405(0x210)][_0x39e405(0x497)]>=ImageManager[_0x39e405(0x465)]){if(_0x39e405(0xd3)==='zNdNg')_0x9b5e7b[_0x39e405(0x44a)](_0x53afc4,_0x237979),_0x2baa40[_0x39e405(0x19c)]=_0x39e405(0x3a2),_0x45fb5c[_0x39e405(0xd0)]['applyPluginCmdSettings'](_0x531496);else{const _0x57a50e=this['_cached_WeatherEffects_Xtreme'];return _0x57a50e[Math[_0x39e405(0x1ae)](Math['random']()*_0x57a50e['length'])];}}const _0x280fc7=_0x39e405(0x351),_0x565ce4='#6dcff6',_0x1c4685=_0x39e405(0x227),_0x469f62=0x1f4,_0x5c9551=new Bitmap(_0x469f62,_0x469f62);let _0x3df341=0x40;while(_0x3df341--){const _0x603087=Math[_0x39e405(0xc1)](0x32)+0xa,_0xa8058d=Math['randomInt'](0x32)+0x1b8,_0x21ea2b=Math['randomInt'](0x1e0)+0xa,_0x4d2dd7=(_0xa8058d-_0x603087)/0x2,_0x503a1e=Math[_0x39e405(0xc1)](0x3)+0x1c,_0x7b189a=ColorManager[_0x39e405(0x2eb)](_0x1c4685,0x0),_0x45019b=ColorManager[_0x39e405(0x2eb)](_0x1c4685,Math['random']());_0x5c9551[_0x39e405(0x40d)](_0x603087,_0x21ea2b,Math[_0x39e405(0x1ae)](_0x4d2dd7),_0x503a1e,_0x7b189a,_0x45019b),_0x5c9551[_0x39e405(0x40d)](_0x603087+Math['floor'](_0x4d2dd7),_0x21ea2b,Math[_0x39e405(0x186)](_0x4d2dd7),_0x503a1e,_0x45019b,_0x7b189a);}_0x3df341=0x20;while(_0x3df341--){const _0x346375=Math[_0x39e405(0xc1)](0x32)+0x64,_0x5931a8=Math[_0x39e405(0xc1)](0x32)+0x15e,_0x3b1039=Math['randomInt'](0x1e0)+0xa,_0x486d23=(_0x5931a8-_0x346375)/0x2,_0x2e4fdd=Math[_0x39e405(0xc1)](0x6)+0xa,_0x55f75d=ColorManager[_0x39e405(0x2eb)](_0x565ce4,0x0),_0x3c2d4a=ColorManager[_0x39e405(0x2eb)](_0x565ce4,Math['random']());_0x5c9551[_0x39e405(0x40d)](_0x346375,_0x3b1039,Math[_0x39e405(0x1ae)](_0x486d23),_0x2e4fdd,_0x55f75d,_0x3c2d4a),_0x5c9551[_0x39e405(0x40d)](_0x346375+Math[_0x39e405(0x1ae)](_0x486d23),_0x3b1039,Math[_0x39e405(0x186)](_0x486d23),_0x2e4fdd,_0x3c2d4a,_0x55f75d);}_0x3df341=0x10;while(_0x3df341--){if(_0x39e405(0x3f0)!==_0x39e405(0x508)){const _0x46f612=Math[_0x39e405(0xc1)](0x32)+0xa,_0x136923=Math[_0x39e405(0xc1)](0x32)+0x1b8,_0x2594cd=Math['randomInt'](0x1e0)+0xa,_0x37aace=(_0x136923-_0x46f612)/0x2,_0x443b07=Math[_0x39e405(0xc1)](0x6)+0x5,_0x18143c=ColorManager['hexToRgba'](_0x280fc7,0x0),_0x43e481=ColorManager[_0x39e405(0x2eb)](_0x280fc7,0x1);_0x5c9551['gradientFillRect'](_0x46f612,_0x2594cd,Math[_0x39e405(0x1ae)](_0x37aace),_0x443b07,_0x18143c,_0x43e481),_0x5c9551[_0x39e405(0x40d)](_0x46f612+Math['floor'](_0x37aace),_0x2594cd,Math[_0x39e405(0x186)](_0x37aace),_0x443b07,_0x43e481,_0x18143c);}else _0x4d51ec[_0x39e405(0x44a)](_0x3b1ae9,_0x4a1510),_0x1dcd73[_0x39e405(0x19c)]='pollutionclouds',_0xbf9ea5[_0x39e405(0xd0)][_0x39e405(0x42a)](_0x234aaf);}const _0x7923f0='rgba(255,255,255,0)',_0x1ccc10=_0x39e405(0x286),_0x5a1b9b=0xc8,_0x13af94=_0x5a1b9b/0x2,_0x4c4adc=0x6;_0x3df341=0x10;while(_0x3df341--){if('VgYXI'!=='VgYXI'){const _0x252fd8=_0x2ba519['randomInt'](0x32)+0xa,_0xd1595=_0x2a7131[_0x39e405(0xc1)](0x32)+0x1b8,_0x4fdc50=_0x27ff11[_0x39e405(0xc1)](0x1e0)+0xa,_0xd07c7a=(_0xd1595-_0x252fd8)/0x2,_0x15c335=_0x3dca3a[_0x39e405(0xc1)](0x6)+0x5,_0x488dcc=_0x2a7b47[_0x39e405(0x2eb)](_0x5d12f9,0x0),_0x3e15e3=_0xf2f20b[_0x39e405(0x2eb)](_0x5a4e27,0x1);_0x3a525a[_0x39e405(0x40d)](_0x252fd8,_0x4fdc50,_0x119c02[_0x39e405(0x1ae)](_0xd07c7a),_0x15c335,_0x488dcc,_0x3e15e3),_0x9ad3bc[_0x39e405(0x40d)](_0x252fd8+_0xec721e[_0x39e405(0x1ae)](_0xd07c7a),_0x4fdc50,_0x1e7835[_0x39e405(0x186)](_0xd07c7a),_0x15c335,_0x3e15e3,_0x488dcc);}else{const _0x47fa28=Math[_0x39e405(0xc1)](_0x469f62-_0x5a1b9b)+_0x5a1b9b,_0x1fddb1=Math[_0x39e405(0xc1)](_0x469f62-_0x4c4adc)+_0x4c4adc;_0x5c9551[_0x39e405(0x19f)]=Math[_0x39e405(0xc1)](0x40)+0xc0,_0x5c9551[_0x39e405(0x40d)](_0x47fa28,_0x1fddb1,_0x13af94,0x2,_0x7923f0,_0x1ccc10),_0x5c9551[_0x39e405(0x249)](_0x47fa28+_0x13af94,_0x1fddb1,_0x13af94,0x2,_0x1ccc10);}}_0x5c9551['_customModified']=![];if(ImageManager[_0x39e405(0x297)])console['log'](_0x39e405(0x1bd));return this['_cached_WeatherEffects_Xtreme']=this[_0x39e405(0x210)]||[],this[_0x39e405(0x210)][_0x39e405(0x441)](_0x5c9551),_0x5c9551;},ImageManager['weatherEffectsBalloons']=function(){const _0x114002=_0x217234;if(this[_0x114002(0x2f6)]&&ColorManager['WEATHER_BALLOON_COLORS'][_0x114002(0x497)]<=0x0){const _0x2ae4d9=this[_0x114002(0x2f6)];return _0x2ae4d9[Math['floor'](Math[_0x114002(0xc9)]()*_0x2ae4d9[_0x114002(0x497)])];}const _0x388132=ColorManager[_0x114002(0x166)]['pop'](),_0x1df7ed=ColorManager[_0x114002(0x44d)](_0x388132,0.8),_0x451bce=[_0x388132,_0x1df7ed],_0x2aadfe=new Bitmap(0x64,0x24);_0x2aadfe['drawBalloon'](_0x451bce),_0x2aadfe[_0x114002(0x492)]=![];if(ImageManager[_0x114002(0x297)])console[_0x114002(0x2d4)](_0x114002(0x1f8));return this['_cached_WeatherEffects_Balloons']=this[_0x114002(0x2f6)]||[],this[_0x114002(0x2f6)][_0x114002(0x441)](_0x2aadfe),_0x2aadfe;},ImageManager[_0x217234(0x2ec)]=function(){const _0x1ddf71=_0x217234;if(this[_0x1ddf71(0x23e)]&&this[_0x1ddf71(0x23e)]['length']>=ImageManager[_0x1ddf71(0x465)]){if(_0x1ddf71(0x338)!==_0x1ddf71(0x2d9)){const _0x467ace=this['_cached_WeatherEffects_Fireworks'];return _0x467ace[Math[_0x1ddf71(0x1ae)](Math[_0x1ddf71(0xc9)]()*_0x467ace[_0x1ddf71(0x497)])];}else{const _0xcda5f2=this[_0x1ddf71(0x361)];return _0xcda5f2[_0x5f6b24[_0x1ddf71(0x1ae)](_0x277ed3[_0x1ddf71(0xc9)]()*_0xcda5f2[_0x1ddf71(0x497)])];}}const _0x1202f4='#ff0000';let _0x3b31e8=Math[_0x1ddf71(0xc1)](0x32)+0x64;if(_0x3b31e8%0x2!==0x0)_0x3b31e8+=0x1;const _0x453bb8=new Bitmap(_0x3b31e8,0x8);_0x453bb8[_0x1ddf71(0x4cf)](_0x1202f4),_0x453bb8[_0x1ddf71(0x492)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x1ddf71(0x2a5));return this[_0x1ddf71(0x23e)]=this[_0x1ddf71(0x23e)]||[],this['_cached_WeatherEffects_Fireworks'][_0x1ddf71(0x441)](_0x453bb8),_0x453bb8;},ImageManager[_0x217234(0x4ad)]=function(){const _0x48d906=_0x217234;if(this[_0x48d906(0x25b)]&&this[_0x48d906(0x25b)][_0x48d906(0x497)]>=ImageManager[_0x48d906(0x465)]){if(_0x48d906(0x502)!==_0x48d906(0x1a5)){const _0x26162a=this[_0x48d906(0x25b)];return _0x26162a[Math['floor'](Math[_0x48d906(0xc9)]()*_0x26162a[_0x48d906(0x497)])];}else{const _0x4f884f=_0x13e6f1['getLastPluginCommandInterpreter']();_0x4f884f&&_0x4f884f[_0x48d906(0xef)](_0x31d96d||0x1);}}const _0x1385dd=_0x48d906(0xf7),_0x4df3eb=new Bitmap(0xc8,0xc8);_0x4df3eb[_0x48d906(0x352)](_0x1385dd),_0x4df3eb['_customModified']=![];if(ImageManager[_0x48d906(0x297)])console['log']('fireworksflower');return this[_0x48d906(0x25b)]=this[_0x48d906(0x25b)]||[],this['_cached_WeatherEffects_FireworksFlower'][_0x48d906(0x441)](_0x4df3eb),_0x4df3eb;},ImageManager[_0x217234(0x15e)]=function(){const _0x574d9b=_0x217234;if(this[_0x574d9b(0x4b0)]&&ColorManager[_0x574d9b(0x213)]['length']<=0x0){if(_0x574d9b(0x147)!==_0x574d9b(0x30b)){const _0x507ec1=this[_0x574d9b(0x4b0)];return _0x507ec1[Math['floor'](Math['random']()*_0x507ec1[_0x574d9b(0x497)])];}else{if(_0x1a0d7a===_0x574d9b(0xb7))return!![];return _0x3e7b4b['WeatherEffects']['Window_Options_isVolumeSymbol'][_0x574d9b(0x399)](this,_0x1811cd);}}const _0x1f0c8f=ColorManager['WEATHER_SHADOW_BURST_COLORS'][_0x574d9b(0x4d7)](),_0x1496a6=new Bitmap(0x3e8,0x3e8),_0x212e2c=_0x1496a6[_0x574d9b(0x4f7)]/0x2;_0x1496a6[_0x574d9b(0x431)](_0x212e2c,_0x212e2c,_0x212e2c,0x168,_0x1f0c8f,0x0,0x1,0x0),_0x1496a6[_0x574d9b(0x492)]=![];if(ImageManager[_0x574d9b(0x297)])console['log'](_0x574d9b(0x46d));return this[_0x574d9b(0x4b0)]=this['_cached_WeatherEffects_ShadowBurst']||[],this['_cached_WeatherEffects_ShadowBurst'][_0x574d9b(0x441)](_0x1496a6),_0x1496a6;},ImageManager[_0x217234(0x10e)]=function(){const _0x2c75f4=_0x217234;if(this[_0x2c75f4(0x396)]&&this[_0x2c75f4(0x396)][_0x2c75f4(0x497)]>=ImageManager[_0x2c75f4(0x465)]){const _0x141371=this['_cached_WeatherEffects_CloudBurst'];return _0x141371[Math[_0x2c75f4(0x1ae)](Math[_0x2c75f4(0xc9)]()*_0x141371[_0x2c75f4(0x497)])];}const _0x263a6e=new Bitmap(0x1f4,0x1f4);let _0x55003c=ColorManager[_0x2c75f4(0x21f)]([Math[_0x2c75f4(0xc1)](0x20)+0x10,0x18,Math['randomInt'](0x20)+0x10]),_0x46d665=ColorManager[_0x2c75f4(0x21f)]([Math[_0x2c75f4(0xc1)](0x30)+0x20,0x30,Math['randomInt'](0x30)+0x20]),_0x83eebc=ColorManager[_0x2c75f4(0x21f)]([Math[_0x2c75f4(0xc1)](0x40)+0x30,0x60,Math[_0x2c75f4(0xc1)](0x40)+0x30]);_0x263a6e[_0x2c75f4(0x2f9)](0xfa,0x15e,0x4b,_0x55003c,0x10,0x14),_0x263a6e[_0x2c75f4(0x2f9)](0xfa,0xfa,0x64,_0x83eebc,0x40,0x19),_0x263a6e[_0x2c75f4(0x2f9)](0xfa,0xfa,0x3c,_0x46d665,0x10,0x14);const _0x29822f=_0x2c75f4(0x252),_0x40bff0=_0x2c75f4(0x286),_0x1fbbdc=_0x263a6e[_0x2c75f4(0x4f7)],_0x586385=_0x263a6e[_0x2c75f4(0x466)],_0x37d8b4=0x64,_0x34a822=_0x37d8b4/0x2,_0x32da9b=0x2;let _0x5d686d=0x20;while(_0x5d686d--){const _0x379fa3=Math['randomInt'](_0x1fbbdc-_0x37d8b4)+_0x37d8b4,_0x3e56a6=Math['randomInt'](_0x586385-_0x32da9b)+_0x32da9b;_0x263a6e[_0x2c75f4(0x19f)]=Math[_0x2c75f4(0xc1)](0x40)+0xc0,_0x263a6e[_0x2c75f4(0x40d)](_0x379fa3,_0x3e56a6,Math['ceil'](_0x34a822),_0x32da9b,_0x29822f,_0x40bff0),_0x263a6e[_0x2c75f4(0x249)](_0x379fa3+Math[_0x2c75f4(0x186)](_0x34a822),_0x3e56a6,Math[_0x2c75f4(0x1ae)](_0x34a822),_0x32da9b,_0x40bff0);}_0x263a6e['_customModified']=![];if(ImageManager[_0x2c75f4(0x297)])console['log'](_0x2c75f4(0x329));return this[_0x2c75f4(0x396)]=this[_0x2c75f4(0x396)]||[],this[_0x2c75f4(0x396)][_0x2c75f4(0x441)](_0x263a6e),_0x263a6e;},ImageManager[_0x217234(0xde)]=function(){const _0x430bec=_0x217234;if(this[_0x430bec(0x23d)]){if(_0x430bec(0x313)===_0x430bec(0x45f))_0x26cad8=[_0x58e3c2[0x0],_0x22aeeb[0x0],_0x4bf9c1[0x1],_0x3467f9[0x1],_0x46b48c[0x2],_0x2f0b7e[0x2]];else return this[_0x430bec(0x23d)];}const _0x3eb78f=Math['max']($dataSystem[_0x430bec(0x397)][_0x430bec(0x31f)],$dataSystem[_0x430bec(0x397)][_0x430bec(0x2ac)])||0x1,_0x241e92=new Bitmap(_0x3eb78f,_0x3eb78f);_0x241e92[_0x430bec(0x491)](_0x3eb78f/0x2,_0x3eb78f/0x2,_0x3eb78f/0x2),_0x241e92[_0x430bec(0x492)]=![];if(ImageManager[_0x430bec(0x297)])console[_0x430bec(0x2d4)]('rainbowarch');return this['_cached_WeatherEffects_RainbowArch']=_0x241e92,_0x241e92;},ImageManager[_0x217234(0x32c)]=function(){const _0x1aa723=_0x217234;if(this['_cached_WeatherEffects_Icons']){const _0xffdd38=this[_0x1aa723(0x137)];return _0xffdd38[Math[_0x1aa723(0x1ae)](Math[_0x1aa723(0xc9)]()*_0xffdd38[_0x1aa723(0x497)])];}this[_0x1aa723(0x137)]=this[_0x1aa723(0x137)]||[];const _0x27d988=ImageManager[_0x1aa723(0x1e4)];for(const _0x48340b of _0x27d988){const _0x522a47=new Bitmap(ImageManager[_0x1aa723(0x1c3)],ImageManager[_0x1aa723(0x4e8)]);_0x522a47[_0x1aa723(0x37f)]=0x1c,_0x522a47[_0x1aa723(0x404)](_0x48340b,0x0,0x0,_0x522a47['width'],_0x522a47[_0x1aa723(0x466)],_0x1aa723(0x3fe)),_0x522a47[_0x1aa723(0x492)]=![],this[_0x1aa723(0x137)][_0x1aa723(0x441)](_0x522a47);}if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x1aa723(0x2e1));const _0x51d178=this[_0x1aa723(0x137)];return _0x51d178[Math[_0x1aa723(0x1ae)](Math['random']()*_0x51d178[_0x1aa723(0x497)])];},ImageManager[_0x217234(0x277)]=function(){const _0x5d1e16=_0x217234;if(this['_cached_WeatherEffects_Fumes']&&this[_0x5d1e16(0x28c)][_0x5d1e16(0x497)]>=ImageManager[_0x5d1e16(0x465)]){const _0x3670e9=this[_0x5d1e16(0x28c)];return _0x3670e9[Math[_0x5d1e16(0x1ae)](Math['random']()*_0x3670e9[_0x5d1e16(0x497)])];}let _0x226626=ColorManager[_0x5d1e16(0x2ce)];const _0x58d903=_0x226626[Math[_0x5d1e16(0x1ae)](Math['random']()*_0x226626[_0x5d1e16(0x497)])];_0x226626=ColorManager[_0x5d1e16(0x40e)];const _0x7855a9=_0x226626[Math[_0x5d1e16(0x1ae)](Math[_0x5d1e16(0xc9)]()*_0x226626[_0x5d1e16(0x497)])];_0x226626=ColorManager[_0x5d1e16(0x3ac)];const _0x32c683=_0x226626[Math[_0x5d1e16(0x1ae)](Math[_0x5d1e16(0xc9)]()*_0x226626[_0x5d1e16(0x497)])],_0x36c3ae=new Bitmap(0x3e8,0x3e8);_0x36c3ae[_0x5d1e16(0x2f9)](0x1f4,0x258,0xaf,_0x58d903,0x40,0x14),_0x36c3ae[_0x5d1e16(0x2f9)](0x1f4,0x1f4,0xc8,_0x32c683,0x40,0x19),_0x36c3ae[_0x5d1e16(0x2f9)](0x1f4,0x1c2,0xa0,_0x7855a9,0x40,0x1e),_0x36c3ae[_0x5d1e16(0x492)]=![];if(ImageManager[_0x5d1e16(0x297)])console['log']('fumes');return this[_0x5d1e16(0x28c)]=this[_0x5d1e16(0x28c)]||[],this[_0x5d1e16(0x28c)][_0x5d1e16(0x441)](_0x36c3ae),_0x36c3ae;},Bitmap[_0x217234(0x406)][_0x217234(0xfa)]=function(_0x280aaa,_0x1b073b,_0x3e6794){const _0x566e1a=_0x217234,_0x20c567=this[_0x566e1a(0x125)];_0x20c567[_0x566e1a(0xe3)](),_0x20c567[_0x566e1a(0x105)]=_0x566e1a(0x4ee),_0x20c567['beginPath'](),_0x20c567['arc'](_0x280aaa,_0x1b073b,_0x3e6794,0x0,0x2*Math['PI'],![]),_0x20c567['fill'](),_0x20c567[_0x566e1a(0x235)](),this[_0x566e1a(0x504)][_0x566e1a(0xb5)]();},Bitmap[_0x217234(0x406)][_0x217234(0x34e)]=function(_0x26e4a0,_0x31b837,_0x953b5d,_0x5c2a30,_0x3966fb,_0x5e23e6){const _0x49947f=_0x217234,_0x3e655a=this[_0x49947f(0x469)];_0x3e655a[_0x49947f(0xe3)](),_0x3e655a[_0x49947f(0x134)]=_0x31b837,_0x3e655a[_0x49947f(0x153)](),_0x3e655a['moveTo'](_0x26e4a0[0x0],_0x26e4a0[0x1]);for(var _0x1193dc=0x2;_0x1193dc<_0x26e4a0[_0x49947f(0x497)];_0x1193dc+=0x2){_0x3e655a[_0x49947f(0x35b)](_0x26e4a0[_0x1193dc],_0x26e4a0[_0x1193dc+0x1]);}_0x3e655a[_0x49947f(0x35b)](_0x26e4a0[0x0],_0x26e4a0[0x1]),_0x3e655a[_0x49947f(0x365)]=_0x953b5d,_0x3e655a['lineWidth']=_0x5c2a30,_0x5e23e6&&_0x3e655a[_0x49947f(0x1b7)](),_0x3e655a[_0x49947f(0x24c)]=_0x3966fb,_0x3e655a[_0x49947f(0x1cf)](),_0x3e655a[_0x49947f(0x24c)]=0x1,_0x3e655a['restore']();},Bitmap[_0x217234(0x406)]['drawPolyArc']=function(_0x386849,_0x442a11,_0x35a207,_0x26da25,_0xe2a1e5,_0x440386,_0x2bdcbe,_0x2d6994){const _0xeb5c71=_0x217234;_0x440386=_0x440386[_0xeb5c71(0xeb)](0.000001,0.999999);const _0x3d69e4=this[_0xeb5c71(0x125)];_0x3d69e4['save']();const _0x5325b8=_0x26da25*(Math['PI']/0xb4),_0x5ee8e4=_0x35a207*0x2;_0x3d69e4[_0xeb5c71(0x3de)](_0x386849-_0x35a207,_0x442a11-_0x35a207);const _0x134bd6=_0x3d69e4['createRadialGradient'](_0x35a207,_0x35a207,_0x2d6994,_0x35a207,_0x35a207,_0x35a207),_0x525c31=ColorManager[_0xeb5c71(0x2eb)](_0xe2a1e5,_0x2bdcbe/0x2),_0x3536fa=ColorManager[_0xeb5c71(0x2eb)](_0xe2a1e5,_0x2bdcbe),_0x4d3bc3=ColorManager[_0xeb5c71(0x2eb)](_0xe2a1e5,0x0);_0x134bd6['addColorStop'](0x0,_0x525c31),_0x134bd6[_0xeb5c71(0xda)](_0x440386/0x2,_0x3536fa),_0x134bd6['addColorStop'](_0x440386,_0x3536fa),_0x134bd6[_0xeb5c71(0xda)](0x1,_0x4d3bc3),_0x3d69e4[_0xeb5c71(0x134)]=_0x134bd6,_0x3d69e4['beginPath'](),_0x3d69e4[_0xeb5c71(0x2df)](_0x35a207,_0x35a207),_0x3d69e4[_0xeb5c71(0x35b)](_0x5ee8e4,_0x35a207),_0x3d69e4['arc'](_0x35a207,_0x35a207,_0x35a207,0x0,_0x5325b8),_0x3d69e4[_0xeb5c71(0x35b)](_0x35a207,_0x35a207),_0x3d69e4[_0xeb5c71(0x1cf)](),_0x3d69e4[_0xeb5c71(0xe3)](),_0x3d69e4[_0xeb5c71(0x235)](),this[_0xeb5c71(0x504)][_0xeb5c71(0xb5)]();},Bitmap[_0x217234(0x406)][_0x217234(0x40b)]=function(_0x1e3f81,_0x457233,_0x407e21,_0x4a1ebf,_0x1a2df1,_0x2cfb48,_0x428ccf){const _0x447968=_0x217234,_0x14053e=_0x4a1ebf/_0x407e21,_0x4a2db4=this[_0x447968(0x469)];_0x4a2db4[_0x447968(0xe3)](),_0x4a2db4[_0x447968(0x23f)](0x1,_0x14053e),this[_0x447968(0x431)](_0x1e3f81,_0x457233/_0x14053e,_0x407e21,0x168,_0x1a2df1,_0x2cfb48,_0x428ccf,0x0),_0x4a2db4[_0x447968(0x235)](),this[_0x447968(0x504)][_0x447968(0xb5)]();},Bitmap['prototype'][_0x217234(0x2f9)]=function(_0x26b04f,_0x38ea3e,_0x78525c,_0x119a88,_0x3e345d,_0x12c2b2){const _0x585257=_0x217234,_0x156edf=this[_0x585257(0x469)];_0x78525c=_0x78525c||0x1;const _0xe84a21=_0x78525c*0x3/0x5;_0x3e345d=_0x3e345d??0xff,_0x12c2b2=_0x12c2b2??0xa;const _0xbcb4c6=ColorManager[_0x585257(0x42d)](_0x119a88),_0x37bca5=_0x156edf[_0x585257(0x510)](_0xe84a21,_0xe84a21,0x0,_0xe84a21,_0xe84a21,_0xe84a21),_0x511157=_0x585257(0x167)[_0x585257(0x126)](_0xbcb4c6[0x0],_0xbcb4c6[0x1],_0xbcb4c6[0x2],_0x3e345d/0xff),_0x45fcb6='rgba(%1,%2,%3,%4)'['format'](_0xbcb4c6[0x0],_0xbcb4c6[0x1],_0xbcb4c6[0x2],0x0);_0x37bca5[_0x585257(0xda)](0x0,_0x511157),_0x37bca5['addColorStop'](0x1,_0x45fcb6);const _0x304639=_0xe84a21*0x2,_0x158940=ImageManager[_0x585257(0x375)](_0x304639,_0x304639);_0x158940[_0x585257(0x134)]=_0x37bca5,_0x158940[_0x585257(0x153)](),_0x158940['arc'](_0xe84a21,_0xe84a21,_0xe84a21,0x0,Math['PI']*0x2,!![]),_0x158940['fill']();for(let _0x56e663=0x0;_0x56e663<_0x12c2b2;_0x56e663++){if(_0x585257(0x295)!==_0x585257(0x1a9)){const _0x556129=Math[_0x585257(0xc9)]()*(Math['PI']*0x2),_0x4e8196=Math[_0x585257(0xc9)]()*Math[_0x585257(0x225)](_0x556129)*_0x78525c+(_0x26b04f-_0xe84a21),_0x4a9a07=Math[_0x585257(0xc9)]()*Math[_0x585257(0x3ec)](_0x556129)*_0x78525c+(_0x38ea3e-_0xe84a21);_0x156edf[_0x585257(0x2c5)](ImageManager[_0x585257(0x359)](),_0x4e8196,_0x4a9a07);}else{if(this['_cached_WeatherEffects_CrumblingCave']&&this[_0x585257(0x206)][_0x585257(0x497)]>=_0x1781d5[_0x585257(0x465)]){const _0x337c19=this['_cached_WeatherEffects_CrumblingCave'];return _0x337c19[_0x4bbd05[_0x585257(0x1ae)](_0x43aa83[_0x585257(0xc9)]()*_0x337c19[_0x585257(0x497)])];}const _0x32162a=_0x3480b0[_0x585257(0x40e)],_0x28a772=_0x32162a[_0x388fce[_0x585257(0x1ae)](_0x646144['random']()*_0x32162a[_0x585257(0x497)])],_0x1d6988=_0x32162a[_0x4fa983[_0x585257(0x1ae)](_0x4c62ea['random']()*_0x32162a['length'])],_0x4d33db=_0x32162a[_0xce8a7a['floor'](_0x1fea29['random']()*_0x32162a[_0x585257(0x497)])],_0x152773=new _0x386e0a(0x1f4,0x1f4);_0x152773[_0x585257(0x2f9)](0xfa,0x15e,0x4b,_0x28a772,0x4,0x14),_0x152773[_0x585257(0x2f9)](0xfa,0xfa,0x64,_0x4d33db,0x8,0x19),_0x152773[_0x585257(0x2f9)](0xfa,0xfa,0x3c,_0x1d6988,0x4,0x14);const _0x4e3adf=_0x152773[_0x585257(0x4f7)],_0x4389e3=_0x152773['height'],_0x2ac47d=0x4;let _0x2f8668=0x80;while(_0x2f8668--){const _0x500300=_0x43ab9a[_0x585257(0xc1)](_0x4e3adf-_0x2ac47d*0x2)+_0x2ac47d,_0x1ee576=_0x3f3c3f[_0x585257(0xc1)](_0x4389e3-_0x2ac47d*0x2)+_0x2ac47d;let _0x463aa6=_0x32162a[_0x3a4331[_0x585257(0x1ae)](_0x3bc122[_0x585257(0xc9)]()*_0x32162a['length'])];const _0x380807=_0x2fb7bb[_0x585257(0xc1)](_0x2ac47d)+0x1;_0x152773[_0x585257(0x19f)]=_0x5b9ed3[_0x585257(0xc1)](0x40)+0xa0,_0x152773[_0x585257(0x383)](_0x500300,_0x1ee576,_0x380807,_0x463aa6);}_0x152773[_0x585257(0x492)]=![];if(_0x4da916[_0x585257(0x297)])_0xb3c5ca[_0x585257(0x2d4)](_0x585257(0xfc));return this[_0x585257(0x206)]=this['_cached_WeatherEffects_CrumblingCave']||[],this[_0x585257(0x206)]['push'](_0x152773),_0x152773;}}},Bitmap[_0x217234(0x406)][_0x217234(0x4a6)]=function(_0x4b604c,_0x393749,_0x47b82c,_0x5a3fea,_0x13951d,_0x176515,_0x1a20ff,_0x2d2143){const _0x194e3f=_0x217234;_0x2d2143=_0x2d2143||0x3;const _0x158c3c=this[_0x194e3f(0x125)];let _0x17c8d1=Math['PI']/0x2*_0x2d2143,_0xdc57c7=_0x4b604c,_0x5a0be8=_0x393749,_0x5e5595=Math['PI']/_0x13951d;_0x158c3c[_0x194e3f(0xe3)](),_0x158c3c['beginPath'](),_0x158c3c[_0x194e3f(0x2df)](_0x4b604c,_0x393749-_0x176515);for(let _0x19eca6=0x0;_0x19eca6<_0x13951d;_0x19eca6++){if(_0x194e3f(0xce)!==_0x194e3f(0x189))_0xdc57c7=_0x4b604c+Math[_0x194e3f(0x3ec)](_0x17c8d1)*_0x176515,_0x5a0be8=_0x393749+Math[_0x194e3f(0x225)](_0x17c8d1)*_0x176515,_0x158c3c['lineTo'](_0xdc57c7,_0x5a0be8),_0x17c8d1+=_0x5e5595,_0xdc57c7=_0x4b604c+Math[_0x194e3f(0x3ec)](_0x17c8d1)*_0x1a20ff,_0x5a0be8=_0x393749+Math[_0x194e3f(0x225)](_0x17c8d1)*_0x1a20ff,_0x158c3c['lineTo'](_0xdc57c7,_0x5a0be8),_0x17c8d1+=_0x5e5595;else{const _0x10daec=this[_0x194e3f(0x3c0)];return _0x10daec[_0x42f4c2[_0x194e3f(0x1ae)](_0x36e994['random']()*_0x10daec[_0x194e3f(0x497)])];}}_0x158c3c[_0x194e3f(0x35b)](_0x4b604c,_0x393749-_0x176515),_0x158c3c[_0x194e3f(0x39e)](),_0x158c3c['lineWidth']=0x0,_0x158c3c['lineWidth']>0x1&&(_0x158c3c[_0x194e3f(0x332)]=_0x158c3c['lineWidth']-0x1,_0x158c3c[_0x194e3f(0x365)]=_0x5a3fea,_0x158c3c['stroke']()),_0x158c3c[_0x194e3f(0x134)]=_0x47b82c,_0x158c3c[_0x194e3f(0x1cf)](),_0x158c3c[_0x194e3f(0x235)](),this[_0x194e3f(0x504)][_0x194e3f(0xb5)]();},Bitmap['prototype'][_0x217234(0x302)]=function(){const _0x36276c=_0x217234,_0x82e014=0x6,_0x32f620=this[_0x36276c(0x125)],_0x7c6e9=this['width']/0x2,_0x4d3fc3=this[_0x36276c(0x466)]/0x2;this[_0x36276c(0x4d5)]=0x3,this[_0x36276c(0x3d5)]=0x2+Math[_0x36276c(0xc1)](0x2),this[_0x36276c(0x16b)]=Math[_0x36276c(0x490)](_0x7c6e9,_0x4d3fc3)*0x2/0x3,this[_0x36276c(0x118)]=Math['PI']*0x2*(Math[_0x36276c(0xc9)]()*0.15+0.7),this[_0x36276c(0x2d7)]=Math[_0x36276c(0x49e)](Math[_0x36276c(0x186)](this[_0x36276c(0x4f7)]/0xc),0x2),_0x32f620[_0x36276c(0x3de)](_0x7c6e9,_0x4d3fc3);for(let _0x4d90b5=0x0;_0x4d90b5<_0x82e014;_0x4d90b5++){this[_0x36276c(0x3ca)](0x0),_0x32f620[_0x36276c(0x369)](Math['PI']*0x2/_0x82e014);}},Bitmap[_0x217234(0x406)][_0x217234(0x3ca)]=function(_0x745247){const _0x5cc09e=_0x217234;if(_0x745247>this[_0x5cc09e(0x4d5)])return;const _0x3db472=this[_0x5cc09e(0x125)];_0x3db472[_0x5cc09e(0x365)]=_0x5cc09e(0x351),_0x3db472[_0x5cc09e(0x332)]=0x3,_0x3db472[_0x5cc09e(0x153)](),_0x3db472[_0x5cc09e(0x2df)](0x0,0x0),_0x3db472['lineTo'](0x0+this[_0x5cc09e(0x16b)],0x0),_0x3db472[_0x5cc09e(0x1b7)]();for(let _0x5e8b01=0x1;_0x5e8b01<this['_branches']+0x1;_0x5e8b01++){_0x3db472[_0x5cc09e(0xe3)](),_0x3db472[_0x5cc09e(0x3de)](this[_0x5cc09e(0x16b)]*_0x5e8b01/(this[_0x5cc09e(0x3d5)]+0x1),0x0),_0x3db472[_0x5cc09e(0x23f)](0.5,0.5),_0x3db472['save'](),_0x3db472[_0x5cc09e(0x369)](this[_0x5cc09e(0x118)]),this[_0x5cc09e(0x3ca)](_0x745247+0x1),_0x3db472[_0x5cc09e(0x235)](),_0x3db472[_0x5cc09e(0xe3)](),_0x3db472[_0x5cc09e(0x369)](-this[_0x5cc09e(0x118)]),this[_0x5cc09e(0x3ca)](_0x745247+0x1),_0x3db472[_0x5cc09e(0x235)](),_0x3db472['restore']();}},Bitmap[_0x217234(0x406)][_0x217234(0x515)]=function(_0x2d7e14,_0x3fca3a,_0x202ca0,_0x31db1b){const _0x1f872a=_0x217234;let _0x3200ef=0x1e,_0x3b39df=Math['floor'](_0x31db1b/0x6),_0x1fac0f=0x10;const _0x3b8218=(0xff-_0x1fac0f)/_0x3b39df,_0x321578=(0xff-_0x3200ef)/_0x3b39df,_0x414722=Math[_0x1f872a(0x1ae)](_0x31db1b/_0x3b39df),_0x23fb0d=_0x202ca0/0x10,_0x3b405c=_0x3fca3a;let _0x3fa9f7=Math[_0x1f872a(0xc1)](0xf4240),_0x2f432b=0x10,_0x36277b=_0x202ca0/0x2,_0x5afaf9=Math[_0x1f872a(0x49e)](0x4,_0x202ca0/0x10);_0x2d7e14-=_0x31db1b;while(_0x3b39df--){_0x3200ef+=_0x321578,_0x5afaf9+=_0x23fb0d,_0x1fac0f+=_0x3b8218,_0x2d7e14+=_0x414722,_0x3fca3a=_0x3b405c+Math[_0x1f872a(0x3ec)](_0x3fa9f7)*_0x36277b/0x2,_0x3fa9f7+=Math[_0x1f872a(0xc1)](_0x2f432b)+_0x2f432b/0x2,_0x31db1b-=_0x414722;if(_0x31db1b<=0x0)break;const _0x5310d4=_0x1f872a(0x3f2)[_0x1f872a(0x126)](_0x3200ef);this[_0x1f872a(0x19f)]=_0x1fac0f,this[_0x1f872a(0x383)](_0x2d7e14,_0x3fca3a,_0x5afaf9,_0x5310d4);}this[_0x1f872a(0x19f)]=0xf0,this[_0x1f872a(0x383)](_0x2d7e14,_0x3fca3a,_0x5afaf9*0x3/0x4,'white');},Bitmap[_0x217234(0x406)]['drawLightning']=function(){const _0x1a83db=_0x217234,_0x1766a7=this['_context'],_0x2fc6b0=0xa,_0x2cbb9d=0x50,_0x524bd0={'x':_0x2fc6b0,'y':this[_0x1a83db(0x466)]/0x2},_0x4e63b3=0x8,_0x5c2618=this['width']-_0x2fc6b0,_0x5b5682=ColorManager['WEATHER_LIGHTNING_COLORS'][_0x1a83db(0x2f2)](),_0x2c3f16=_0x5b5682[Math[_0x1a83db(0x1ae)](Math[_0x1a83db(0xc9)]()*_0x5b5682[_0x1a83db(0x497)])],_0x1948e6=0x2,_0x589641=this['width']/0x5;_0x1766a7[_0x1a83db(0x105)]=_0x1a83db(0x1f4),_0x1766a7[_0x1a83db(0x365)]=_0x2c3f16,_0x1766a7['shadowColor']=_0x2c3f16,_0x1766a7['fillStyle']=_0x2c3f16;let _0x5d9079=[],_0x5bf945=_0x524bd0['x']+_0x5c2618;_0x5d9079[_0x1a83db(0x441)]({'x':_0x524bd0['x'],'y':_0x524bd0['y']}),_0x5d9079[_0x1a83db(0x441)]({'x':_0x5c2618+(Math[_0x1a83db(0xc9)]()-0.9)*_0x2cbb9d,'y':Math[_0x1a83db(0xc9)]()*(this[_0x1a83db(0x466)]-0x64)+_0x2cbb9d});let _0x24565e=_0x589641;while(_0x5bf945>_0x4e63b3){const _0x68e0df=[];for(var _0x5f03cc=0x0;_0x5f03cc<_0x5d9079[_0x1a83db(0x497)]-0x1;_0x5f03cc++){var _0x18b2d2=_0x5d9079[_0x5f03cc],_0xcdf52e=_0x5d9079[_0x5f03cc+0x1],_0x312669=(_0x18b2d2['y']+_0xcdf52e['y'])/0x2,_0x226cef=_0x312669+(Math['random']()*0x2-0x1)*_0x24565e;_0x68e0df[_0x1a83db(0x441)](_0x18b2d2,{'x':(_0x18b2d2['x']+_0xcdf52e['x'])/0x2,'y':_0x226cef});}_0x68e0df['push'](_0x5d9079['pop']()),_0x5d9079=_0x68e0df,_0x24565e/=_0x1948e6,_0x5bf945/=0x2;}_0x1766a7['globalCompositeOperation']=_0x1a83db(0x1f4),_0x1766a7['shadowBlur']=0xf,_0x1766a7[_0x1a83db(0x153)]();for(var _0x5f03cc=0x0;_0x5f03cc<_0x5d9079[_0x1a83db(0x497)];_0x5f03cc++){'zEgxa'!==_0x1a83db(0x2dc)?(_0x773e28['ConvertParams'](_0x32754f,_0x24a0e2),_0x28d786[_0x1a83db(0x19c)]=_0x1a83db(0x26c),_0x283b54[_0x1a83db(0xd0)]['applyPluginCmdSettings'](_0x253f96)):_0x1766a7[_0x1a83db(0x35b)](_0x5d9079[_0x5f03cc]['x'],_0x5d9079[_0x5f03cc]['y']);}let _0x33d3d9=0x3;while(_0x33d3d9--)_0x1766a7[_0x1a83db(0x1b7)]();_0x1766a7[_0x1a83db(0x235)](),this['_baseTexture'][_0x1a83db(0xb5)]();},Bitmap[_0x217234(0x406)]['drawMapleLeaf']=function(_0x16c1cf){const _0x2a8662=_0x217234,_0x3c815f=this[_0x2a8662(0x469)];_0x16c1cf=_0x16c1cf||[_0x2a8662(0x12a),_0x2a8662(0x4db),'#fbec65',_0x2a8662(0x4ac)];const _0xe0e777=_0x16c1cf[0x4]||_0x2a8662(0x24d),_0x50f6e0=_0x16c1cf[0x5]||_0x2a8662(0x24d);_0x3c815f[_0x2a8662(0xe3)](),_0x3c815f['transform'](0x0,0.162467,-0.162467,0x0,101.142,-4.33347),_0x3c815f[_0x2a8662(0x134)]=_0x16c1cf[0x0],(_0x3c815f['beginPath'](),_0x3c815f['moveTo'](555.3,409.4),_0x3c815f[_0x2a8662(0x40f)](527.4,409.4,497.2,419.2,497.3,436.6),_0x3c815f['bezierCurveTo'](497.4,449.1,512.3,0x1d7,512.3,0x1d7),_0x3c815f['bezierCurveTo'](463.7,482.7,447.7,487.4,391.9,479.6),_0x3c815f[_0x2a8662(0x35b)](383.8,481.2),_0x3c815f[_0x2a8662(0x35b)](381.2,481.7),_0x3c815f[_0x2a8662(0x40f)](376.9,509.6,372.6,548.2,346.8,563.2),_0x3c815f[_0x2a8662(0x40f)](332.8,526.3,293.1,567.7,267.3,582.7),_0x3c815f[_0x2a8662(0x40f)](307.4,497.6,232.9,526.3,215.7,563.2),_0x3c815f[_0x2a8662(0x40f)](200.7,0x220,157.7,541.9,131.9,559.1),_0x3c815f['bezierCurveTo'](140.4,545.2,146.9,526.3,148.2,507.1),_0x3c815f[_0x2a8662(0x40f)](149.1,493.9,147.6,480.6,142.6,468.8),_0x3c815f[_0x2a8662(0x40f)](168.4,466.7,236.8,435.6,196.3,408.6),_0x3c815f[_0x2a8662(0x40f)](195.1,407.8,193.2,407.2,190.6,406.8),_0x3c815f[_0x2a8662(0x40f)](170.3,403.6,111.9,412.7,90.9,427.9),_0x3c815f[_0x2a8662(0x40f)](104.7,374.2,66.4,0x168,39.7,345.5),_0x3c815f[_0x2a8662(0x40f)](39.7,345.5,104.6,326.9,104.6,279.6),_0x3c815f[_0x2a8662(0x40f)](129.9,305.1,168.2,305.4,189.7,290.3),_0x3c815f['bezierCurveTo'](215.5,273.1,172.5,245.2,157.5,238.7),_0x3c815f[_0x2a8662(0x40f)](168.2,234.4,185.4,230.2,185.4,215.2),_0x3c815f['bezierCurveTo'](185.4,184.8,165.4,0x9d,146.1,0x8e),_0x3c815f[_0x2a8662(0x40f)](200.5,133.4,185.4,27.6,185.4,27.6),_0x3c815f['bezierCurveTo'](185.4,27.6,232.7,96.9,287.1,77.6),_0x3c815f[_0x2a8662(0x40f)](278.5,116.3,282.2,163.6,309.4,0xaa),_0x3c815f['bezierCurveTo'](319.9,172.5,346.7,161.4,346.7,161.4),_0x3c815f[_0x2a8662(0x40f)](343.2,202.2,345.5,215.3,369.4,215.3),_0x3c815f[_0x2a8662(0x40f)](392.3,215.3,413.3,0xaa,416.5,133.5),_0x3c815f['bezierCurveTo'](447.6,142.1,493.3,0x7e,527.7,89.4),_0x3c815f['bezierCurveTo'](527.2,90.9,502.6,170.4,533.7,206.5),_0x3c815f['bezierCurveTo'](504.5,211.4,477.2,236.8,474.1,0x100),_0x3c815f[_0x2a8662(0x40f)](0x1d8,269.2,481.3,279.6,509.4,278.3),_0x3c815f['bezierCurveTo'](512.3,278.2,515.3,277.9,518.6,277.5),_0x3c815f['bezierCurveTo'](510.4,326.9,593.3,323.5,593.3,323.5),_0x3c815f[_0x2a8662(0x40f)](561.3,347.2,541.7,0x172,555.3,409.4)),_0x3c815f[_0x2a8662(0x1cf)](),_0x3c815f[_0x2a8662(0x134)]=_0x16c1cf[0x1],(_0x3c815f['beginPath'](),_0x3c815f['moveTo'](509.7,278.3),_0x3c815f['bezierCurveTo'](501.6,295.2,497.9,314.1,492.3,332.2),_0x3c815f[_0x2a8662(0x40f)](482.3,364.8,462.5,0x18e,0x1ae,408.1),_0x3c815f[_0x2a8662(0x40f)](422.2,410.5,413.9,411.5,406.4,414.8),_0x3c815f[_0x2a8662(0x40f)](377.9,427.1,370.6,0x1d2,344.4,482.5),_0x3c815f[_0x2a8662(0x40f)](307.2,0x1fa,259.1,472.5,215.5,477.7),_0x3c815f['bezierCurveTo'](191.1,480.7,170.2,495.6,148.3,507.2),_0x3c815f[_0x2a8662(0x40f)](149.2,0x1ee,147.7,480.7,142.7,468.9),_0x3c815f['bezierCurveTo'](168.5,466.8,236.9,435.7,196.4,408.7),_0x3c815f[_0x2a8662(0x40f)](195.2,407.9,193.3,407.3,190.7,406.9),_0x3c815f[_0x2a8662(0x40f)](170.4,403.7,0x70,412.8,0x5b,0x1ac),_0x3c815f['bezierCurveTo'](104.8,374.3,66.5,360.1,39.8,345.6),_0x3c815f['bezierCurveTo'](39.8,345.6,104.7,0x147,104.7,279.7),_0x3c815f[_0x2a8662(0x40f)](0x82,305.2,168.3,305.5,189.8,290.4),_0x3c815f['bezierCurveTo'](215.6,273.2,172.6,245.3,157.6,238.8),_0x3c815f[_0x2a8662(0x40f)](168.3,234.5,185.5,230.3,185.5,215.3),_0x3c815f[_0x2a8662(0x40f)](185.5,184.9,165.5,157.1,146.2,142.1),_0x3c815f[_0x2a8662(0x40f)](200.6,133.5,185.5,27.7,185.5,27.7),_0x3c815f['bezierCurveTo'](185.5,27.7,232.8,0x61,287.2,77.7),_0x3c815f['bezierCurveTo'](278.6,116.4,282.3,163.7,309.5,170.1),_0x3c815f[_0x2a8662(0x40f)](0x140,172.6,346.8,161.5,346.8,161.5),_0x3c815f[_0x2a8662(0x40f)](343.3,202.3,345.6,215.4,369.5,215.4),_0x3c815f[_0x2a8662(0x40f)](392.4,215.4,413.4,170.1,416.6,133.6),_0x3c815f['bezierCurveTo'](447.7,142.2,493.4,126.1,527.8,89.5),_0x3c815f[_0x2a8662(0x40f)](527.3,0x5b,502.7,170.5,533.8,206.6),_0x3c815f['bezierCurveTo'](504.6,211.5,477.3,236.9,474.2,256.1),_0x3c815f[_0x2a8662(0x40f)](472.2,269.3,481.5,279.6,509.7,278.3)),_0x3c815f[_0x2a8662(0x1cf)](),_0x3c815f['fillStyle']=_0x16c1cf[0x2],(_0x3c815f[_0x2a8662(0x153)](),_0x3c815f[_0x2a8662(0x2df)](533.9,206.6),_0x3c815f[_0x2a8662(0x40f)](504.7,211.5,477.4,236.9,474.3,256.1),_0x3c815f[_0x2a8662(0x40f)](461.6,260.5,449.1,265.3,435.6,271.5),_0x3c815f[_0x2a8662(0x40f)](420.6,278.4,403.5,280.9,390.2,290.6),_0x3c815f[_0x2a8662(0x40f)](0x173,304.6,364.5,329.8,357.1,352.4),_0x3c815f[_0x2a8662(0x40f)](349.7,0x177,337.4,399.6,314.4,405.8),_0x3c815f[_0x2a8662(0x40f)](290.1,412.3,0x10a,395.2,0xf1,393.4),_0x3c815f[_0x2a8662(0x40f)](223.2,392.1,206.8,398.4,190.7,406.9),_0x3c815f[_0x2a8662(0x40f)](170.4,403.7,0x70,412.8,0x5b,0x1ac),_0x3c815f['bezierCurveTo'](104.8,374.3,66.5,360.1,39.8,345.6),_0x3c815f[_0x2a8662(0x40f)](39.8,345.6,104.7,0x147,104.7,279.7),_0x3c815f['bezierCurveTo'](0x82,305.2,168.3,305.5,189.8,290.4),_0x3c815f[_0x2a8662(0x40f)](215.6,273.2,172.6,245.3,157.6,238.8),_0x3c815f[_0x2a8662(0x40f)](168.3,234.5,185.5,230.3,185.5,215.3),_0x3c815f[_0x2a8662(0x40f)](185.5,184.9,165.5,157.1,146.2,142.1),_0x3c815f[_0x2a8662(0x40f)](200.6,133.5,185.5,27.7,185.5,27.7),_0x3c815f[_0x2a8662(0x40f)](185.5,27.7,232.8,0x61,287.2,77.7),_0x3c815f[_0x2a8662(0x40f)](278.6,116.4,282.3,163.7,309.5,170.1),_0x3c815f[_0x2a8662(0x40f)](0x140,172.6,346.8,161.5,346.8,161.5),_0x3c815f['bezierCurveTo'](343.3,202.3,345.6,215.4,369.5,215.4),_0x3c815f['bezierCurveTo'](392.4,215.4,413.4,170.1,416.6,133.6),_0x3c815f[_0x2a8662(0x40f)](447.7,142.2,493.4,126.1,527.8,89.5),_0x3c815f[_0x2a8662(0x40f)](527.4,0x5b,502.8,170.4,533.9,206.6)),_0x3c815f[_0x2a8662(0x1cf)](),_0x3c815f['fillStyle']=_0x16c1cf[0x3],(_0x3c815f[_0x2a8662(0x153)](),_0x3c815f['moveTo'](120.7,325.8),_0x3c815f[_0x2a8662(0x40f)](126.5,334.6,138.7,335.8,149.3,336.1),_0x3c815f[_0x2a8662(0x40f)](193.7,337.4,238.1,338.7,282.5,0x154),_0x3c815f[_0x2a8662(0x40f)](289.7,340.2,297.6,340.2,303.3,335.8),_0x3c815f[_0x2a8662(0x40f)](312.9,328.2,310.8,312.8,317.4,302.5),_0x3c815f[_0x2a8662(0x40f)](324.7,291.1,0x154,0x121,353.1,285.9),_0x3c815f[_0x2a8662(0x40f)](405.5,273.6,444.9,231.7,0x1e1,191.8),_0x3c815f[_0x2a8662(0x40f)](486.2,186.1,491.6,0xb4,493.5,172.5),_0x3c815f[_0x2a8662(0x40f)](498.1,154.8,479.9,137.4,461.6,136.9),_0x3c815f[_0x2a8662(0x40f)](443.3,136.5,426.8,0x94,414.2,161.3),_0x3c815f[_0x2a8662(0x40f)](401.7,174.6,398.5,197.8,383.5,208.2),_0x3c815f[_0x2a8662(0x40f)](368.5,218.6,339.2,214.6,325.5,202.5),_0x3c815f[_0x2a8662(0x40f)](317.3,195.2,313.8,184.1,307.6,0xaf),_0x3c815f['bezierCurveTo'](291.6,151.6,259.3,144.6,241.8,122.3),_0x3c815f[_0x2a8662(0x40f)](235.7,114.6,231.7,105.4,225.2,98.1),_0x3c815f['bezierCurveTo'](218.6,0x5b,0xd0,85.9,0xc7,89.8),_0x3c815f['bezierCurveTo'](186.5,95.3,186.2,112.6,188.1,126.1),_0x3c815f[_0x2a8662(0x40f)](192.5,0x9d,198.5,187.7,205.8,0xda),_0x3c815f[_0x2a8662(0x40f)](211.1,239.7,216.2,265.5,201.2,282.2),_0x3c815f['bezierCurveTo'](189.7,295.1,108.1,306.6,120.7,325.8)),_0x3c815f['fill'](),_0x3c815f['strokeStyle']=_0x50f6e0,_0x3c815f[_0x2a8662(0x332)]=0x5,(_0x3c815f['beginPath'](),_0x3c815f['moveTo'](555.3,409.4),_0x3c815f[_0x2a8662(0x40f)](527.4,409.4,497.2,419.2,497.3,436.6),_0x3c815f['bezierCurveTo'](497.4,449.1,512.3,0x1d7,512.3,0x1d7),_0x3c815f['bezierCurveTo'](463.7,482.7,447.7,487.4,391.9,479.6),_0x3c815f[_0x2a8662(0x35b)](383.8,481.2),_0x3c815f[_0x2a8662(0x35b)](381.2,481.7),_0x3c815f[_0x2a8662(0x40f)](376.9,509.6,372.6,548.2,346.8,563.2),_0x3c815f[_0x2a8662(0x40f)](332.8,526.3,293.1,567.7,267.3,582.7),_0x3c815f[_0x2a8662(0x40f)](307.4,497.6,232.9,526.3,215.7,563.2),_0x3c815f[_0x2a8662(0x40f)](200.7,0x220,157.7,541.9,131.9,559.1),_0x3c815f['bezierCurveTo'](146.3,535.7,154.9,497.6,142.6,468.8),_0x3c815f[_0x2a8662(0x40f)](168.4,466.7,236.8,435.6,196.3,408.6),_0x3c815f[_0x2a8662(0x40f)](185.6,401.4,114.6,410.7,0x5b,427.9),_0x3c815f[_0x2a8662(0x40f)](104.8,374.2,66.5,0x168,39.8,345.5),_0x3c815f[_0x2a8662(0x40f)](39.8,345.5,104.7,326.9,104.7,279.6),_0x3c815f[_0x2a8662(0x40f)](0x82,305.1,168.3,305.4,189.8,290.3),_0x3c815f[_0x2a8662(0x40f)](215.6,273.1,172.6,245.2,157.6,238.7),_0x3c815f[_0x2a8662(0x40f)](168.3,234.4,185.5,230.2,185.5,215.2),_0x3c815f[_0x2a8662(0x40f)](185.5,184.8,165.5,0x9d,146.2,0x8e),_0x3c815f['bezierCurveTo'](200.6,133.4,185.5,27.6,185.5,27.6),_0x3c815f[_0x2a8662(0x40f)](185.5,27.6,232.8,96.9,287.2,77.6),_0x3c815f['bezierCurveTo'](278.6,116.3,282.3,163.6,309.5,0xaa),_0x3c815f['bezierCurveTo'](0x140,172.5,346.8,161.4,346.8,161.4),_0x3c815f['bezierCurveTo'](343.3,202.2,345.6,215.3,369.5,215.3),_0x3c815f[_0x2a8662(0x40f)](392.4,215.3,413.4,0xaa,416.6,133.5),_0x3c815f[_0x2a8662(0x40f)](447.7,142.1,493.4,0x7e,527.8,89.4),_0x3c815f[_0x2a8662(0x40f)](527.3,90.9,502.7,170.4,533.8,206.5),_0x3c815f[_0x2a8662(0x40f)](482.3,215.2,437.1,287.1,518.8,277.4),_0x3c815f['bezierCurveTo'](510.6,326.8,593.5,323.4,593.5,323.4),_0x3c815f['bezierCurveTo'](561.3,347.2,541.7,0x172,555.3,409.4)),_0x3c815f['stroke'](),_0x3c815f['fillStyle']=_0xe0e777,(_0x3c815f[_0x2a8662(0x153)](),_0x3c815f[_0x2a8662(0x2df)](236.9,152.9),_0x3c815f[_0x2a8662(0x40f)](245.5,185.6,255.3,217.6,268.2,0xf9),_0x3c815f['bezierCurveTo'](281.4,281.1,296.5,312.4,310.8,344.1),_0x3c815f['bezierCurveTo'](338.4,0x195,369.3,464.6,393.1,527.2),_0x3c815f[_0x2a8662(0x40f)](0x18f,542.9,404.5,558.8,408.9,0x23f),_0x3c815f[_0x2a8662(0x40f)](0x19b,582.4,412.8,589.9,414.4,597.4),_0x3c815f[_0x2a8662(0x40f)](415.2,601.3,0x1a0,605.1,416.7,0x261),_0x3c815f[_0x2a8662(0x40f)](417.6,0x266,419.5,617.1,423.2,620.4),_0x3c815f[_0x2a8662(0x40f)](426.8,623.6,432.5,623.3,435.1,618.9),_0x3c815f[_0x2a8662(0x40f)](437.5,614.8,438.8,611.3,0x1b6,606.5),_0x3c815f[_0x2a8662(0x40f)](437.4,603.1,436.7,599.6,0x1b4,596.2),_0x3c815f[_0x2a8662(0x40f)](434.5,589.4,432.8,582.7,430.8,0x240),_0x3c815f[_0x2a8662(0x40f)](426.8,561.9,421.9,0x224,416.7,534.4),_0x3c815f[_0x2a8662(0x40f)](0x195,0x1f8,0x187,474.6,376.2,445.6),_0x3c815f[_0x2a8662(0x40f)](344.5,383.6,308.7,323.8,279.9,260.4),_0x3c815f[_0x2a8662(0x40f)](264.1,225.5,0xf8,189.7,237.6,152.8),_0x3c815f['bezierCurveTo'](237.5,152.3,236.7,152.5,236.9,152.9)),_0x3c815f[_0x2a8662(0x1cf)](),_0x3c815f[_0x2a8662(0x134)]=_0xe0e777,(_0x3c815f['beginPath'](),_0x3c815f[_0x2a8662(0x2df)](436.6,221.3),_0x3c815f[_0x2a8662(0x40f)](415.7,0xfa,403.1,0x11a,395.3,316.5),_0x3c815f[_0x2a8662(0x40f)](388.4,347.3,382.8,379.1,0x17c,410.6),_0x3c815f[_0x2a8662(0x40f)](378.2,430.6,377.5,0x1c3,378.3,471.1),_0x3c815f[_0x2a8662(0x40f)](378.6,477.6,388.6,477.7,388.5,471.1),_0x3c815f[_0x2a8662(0x40f)](388.2,453.4,387.8,435.8,388.7,418.1),_0x3c815f[_0x2a8662(0x40f)](389.4,0x194,390.9,389.9,392.1,375.8),_0x3c815f['bezierCurveTo'](395.2,341.9,398.1,308.4,409.7,276.1),_0x3c815f['bezierCurveTo'](416.6,256.9,426.2,238.9,437.7,222.1),_0x3c815f[_0x2a8662(0x40f)](438.3,221.2,437.1,220.6,436.6,221.3)),_0x3c815f[_0x2a8662(0x1cf)](),_0x3c815f[_0x2a8662(0x134)]=_0xe0e777,(_0x3c815f[_0x2a8662(0x153)](),_0x3c815f['moveTo'](0x86,344.4),_0x3c815f[_0x2a8662(0x40f)](209.5,355.1,275.3,397.6,335.7,441.6),_0x3c815f['bezierCurveTo'](343.7,447.4,351.6,453.3,359.4,459.2),_0x3c815f[_0x2a8662(0x40f)](363.3,462.2,367.2,465.1,371.2,468.1),_0x3c815f[_0x2a8662(0x40f)](375.2,471.1,378.3,474.1,383.4,474.6),_0x3c815f[_0x2a8662(0x40f)](385.5,474.8,387.6,472.1,386.8,470.1),_0x3c815f[_0x2a8662(0x40f)](383.8,462.7,374.4,0x1ca,368.1,453.5),_0x3c815f[_0x2a8662(0x40f)](360.9,448.2,353.6,442.9,346.3,437.7),_0x3c815f[_0x2a8662(0x40f)](330.9,426.7,315.3,416.1,299.1,406.2),_0x3c815f[_0x2a8662(0x40f)](266.5,386.3,232.2,368.6,195.8,356.6),_0x3c815f[_0x2a8662(0x40f)](175.6,349.9,155.1,345.9,133.9,343.9),_0x3c815f['bezierCurveTo'](133.7,343.9,133.6,344.4,0x86,344.4)),_0x3c815f[_0x2a8662(0x1cf)](),_0x3c815f['fillStyle']=_0xe0e777,(_0x3c815f[_0x2a8662(0x153)](),_0x3c815f[_0x2a8662(0x2df)](458.7,294.7),_0x3c815f[_0x2a8662(0x40f)](458.7,294.7,0x1c9,295.4,0x1c6,296.6),_0x3c815f[_0x2a8662(0x40f)](0x1c3,297.8,446.6,299.5,441.2,301.6),_0x3c815f['bezierCurveTo'](435.8,303.7,429.4,306.2,422.4,309.1),_0x3c815f['bezierCurveTo'](415.4,0x138,407.8,315.5,400.2,319.5),_0x3c815f[_0x2a8662(0x40f)](399.3,0x140,398.5,320.4,397.6,320.9),_0x3c815f['lineTo'](396.2,321.7),_0x3c815f[_0x2a8662(0x35b)](395.5,322.1),_0x3c815f[_0x2a8662(0x40f)](395.4,322.2,395.4,0x142,395.4,0x142),_0x3c815f[_0x2a8662(0x35b)](395.3,321.8),_0x3c815f[_0x2a8662(0x35b)](395.1,321.5),_0x3c815f[_0x2a8662(0x40f)](394.5,320.6,393.9,319.7,393.3,318.8),_0x3c815f[_0x2a8662(0x35b)](392.4,317.5),_0x3c815f['lineTo'](0x188,316.7),_0x3c815f[_0x2a8662(0x40f)](390.9,314.6,390.1,312.6,389.3,310.6),_0x3c815f[_0x2a8662(0x40f)](387.9,306.6,0x183,302.6,386.2,298.9),_0x3c815f['bezierCurveTo'](384.7,291.5,0x180,284.8,383.6,279.1),_0x3c815f[_0x2a8662(0x40f)](382.8,267.8,383.4,260.5,383.5,259.4),_0x3c815f[_0x2a8662(0x40f)](383.6,258.2,384.2,265.4,386.3,0x115),_0x3c815f[_0x2a8662(0x40f)](387.4,282.8,388.8,289.7,390.7,297.2),_0x3c815f[_0x2a8662(0x40f)](391.7,300.9,392.8,304.8,394.3,308.5),_0x3c815f[_0x2a8662(0x40f)](395.1,310.4,395.8,312.2,396.8,313.9),_0x3c815f[_0x2a8662(0x35b)](397.1,314.6),_0x3c815f['bezierCurveTo'](397.1,314.7,397.1,314.6,397.1,314.7),_0x3c815f[_0x2a8662(0x35b)](397.1,314.7),_0x3c815f[_0x2a8662(0x35b)](397.1,314.7),_0x3c815f[_0x2a8662(0x35b)](397.1,314.7),_0x3c815f['lineTo'](397.1,314.7),_0x3c815f['lineTo'](397.1,314.7),_0x3c815f[_0x2a8662(0x35b)](397.4,314.5),_0x3c815f[_0x2a8662(0x40f)](405.3,310.3,413.3,307.1,420.6,304.6),_0x3c815f[_0x2a8662(0x40f)](427.9,302.1,434.6,300.3,440.2,298.9),_0x3c815f[_0x2a8662(0x40f)](445.8,297.5,450.4,296.5,453.6,295.8),_0x3c815f[_0x2a8662(0x40f)](456.9,295.1,458.7,294.7,458.7,294.7)),_0x3c815f['fill'](),_0x3c815f['fillStyle']=_0xe0e777,(_0x3c815f[_0x2a8662(0x153)](),_0x3c815f[_0x2a8662(0x2df)](213.6,309.8),_0x3c815f[_0x2a8662(0x40f)](213.6,309.8,214.3,310.1,215.7,310.8),_0x3c815f[_0x2a8662(0x40f)](216.4,311.1,217.2,311.5,218.2,311.9),_0x3c815f[_0x2a8662(0x40f)](219.2,312.3,220.3,312.8,221.7,313.3),_0x3c815f[_0x2a8662(0x40f)](224.3,314.4,227.6,315.5,231.4,316.8),_0x3c815f[_0x2a8662(0x40f)](235.2,0x13e,239.6,319.4,244.4,320.8),_0x3c815f[_0x2a8662(0x40f)](254.1,323.6,265.8,326.5,278.7,330.5),_0x3c815f['bezierCurveTo'](285.1,332.6,291.8,334.9,298.6,0x152),_0x3c815f['bezierCurveTo'](305.4,0x155,312.2,344.8,318.5,349.8),_0x3c815f[_0x2a8662(0x40f)](319.9,350.9,321.2,0x160,322.5,353.2),_0x3c815f[_0x2a8662(0x40f)](323.1,353.8,323.8,354.4,324.4,354.9),_0x3c815f[_0x2a8662(0x40f)](0x145,355.5,325.6,356.1,326.1,356.7),_0x3c815f[_0x2a8662(0x40f)](326.4,0x165,326.7,357.3,0x147,357.6),_0x3c815f[_0x2a8662(0x35b)](327.1,357.7),_0x3c815f[_0x2a8662(0x35b)](327.1,357.7),_0x3c815f[_0x2a8662(0x35b)](327.1,357.7),_0x3c815f[_0x2a8662(0x35b)](327.1,357.7),_0x3c815f[_0x2a8662(0x35b)](327.1,357.8),_0x3c815f[_0x2a8662(0x40f)](327.1,357.9,327.2,357.9,327.2,0x166),_0x3c815f['bezierCurveTo'](327.2,0x166,327.2,0x166,327.3,357.9),_0x3c815f[_0x2a8662(0x35b)](327.3,357.8),_0x3c815f[_0x2a8662(0x35b)](327.3,357.8),_0x3c815f[_0x2a8662(0x35b)](327.3,357.8),_0x3c815f[_0x2a8662(0x35b)](327.3,357.7),_0x3c815f[_0x2a8662(0x35b)](327.3,357.4),_0x3c815f[_0x2a8662(0x35b)](327.4,356.2),_0x3c815f[_0x2a8662(0x40f)](327.5,354.6,327.6,0x161,327.7,351.5),_0x3c815f[_0x2a8662(0x40f)](327.8,349.9,0x148,348.4,328.1,346.9),_0x3c815f[_0x2a8662(0x40f)](328.7,340.8,329.6,335.1,330.5,329.7),_0x3c815f[_0x2a8662(0x40f)](332.3,318.9,334.3,309.4,335.8,301.5),_0x3c815f[_0x2a8662(0x40f)](0x153,285.6,340.2,275.5,340.5,273.7),_0x3c815f[_0x2a8662(0x40f)](340.6,272.8,340.6,274.8,340.5,279.2),_0x3c815f[_0x2a8662(0x40f)](340.3,283.6,339.8,290.3,338.8,298.8),_0x3c815f[_0x2a8662(0x40f)](337.9,307.3,336.4,317.5,0x14f,328.9),_0x3c815f[_0x2a8662(0x40f)](334.3,334.6,333.6,340.6,333.2,346.8),_0x3c815f[_0x2a8662(0x40f)](333.1,348.4,0x14d,349.9,332.9,351.5),_0x3c815f[_0x2a8662(0x40f)](332.8,353.1,332.7,354.7,332.7,356.3),_0x3c815f[_0x2a8662(0x40f)](332.7,357.3,332.6,358.3,332.6,359.3),_0x3c815f['bezierCurveTo'](332.5,360.9,332.6,362.6,332.5,364.2),_0x3c815f[_0x2a8662(0x40f)](332.5,367.5,332.4,370.8,332.4,374.2),_0x3c815f['bezierCurveTo'](330.5,371.7,328.7,369.1,326.6,366.6),_0x3c815f[_0x2a8662(0x40f)](325.6,365.3,324.6,364.1,323.6,362.8),_0x3c815f[_0x2a8662(0x35b)](322.8,361.8),_0x3c815f['bezierCurveTo'](322.6,361.6,322.5,361.5,322.4,361.4),_0x3c815f[_0x2a8662(0x35b)](321.6,360.6),_0x3c815f[_0x2a8662(0x40f)](321.1,360.1,320.6,359.5,0x140,0x167),_0x3c815f[_0x2a8662(0x35b)](318.3,357.5),_0x3c815f[_0x2a8662(0x40f)](317.2,356.5,0x13c,355.5,314.8,354.6),_0x3c815f['bezierCurveTo'](308.9,0x15e,302.5,346.4,296.1,343.3),_0x3c815f[_0x2a8662(0x40f)](289.7,340.2,283.2,337.7,276.9,335.4),_0x3c815f[_0x2a8662(0x40f)](264.4,330.9,252.9,327.3,243.3,323.8),_0x3c815f[_0x2a8662(0x40f)](238.5,322.1,234.2,320.4,230.5,318.8),_0x3c815f[_0x2a8662(0x40f)](226.8,317.2,223.6,315.7,221.1,314.4),_0x3c815f[_0x2a8662(0x40f)](219.8,313.8,218.7,313.1,217.8,312.6),_0x3c815f[_0x2a8662(0x40f)](216.8,312.1,0xd8,311.6,215.4,311.2),_0x3c815f['bezierCurveTo'](214.3,310.2,213.6,309.8,213.6,309.8)),_0x3c815f[_0x2a8662(0x1cf)](),_0x3c815f[_0x2a8662(0x134)]=_0xe0e777,(_0x3c815f[_0x2a8662(0x153)](),_0x3c815f[_0x2a8662(0x2df)](235.1,251.7),_0x3c815f[_0x2a8662(0x40f)](235.1,251.7,236.5,252.2,238.9,253.2),_0x3c815f[_0x2a8662(0x40f)](241.3,254.2,244.9,255.7,249.1,257.8),_0x3c815f['bezierCurveTo'](253.4,259.9,258.3,262.4,263.8,265.3),_0x3c815f[_0x2a8662(0x40f)](269.3,268.1,275.3,271.2,281.7,273.9),_0x3c815f[_0x2a8662(0x40f)](282.5,274.3,283.3,274.6,284.1,274.9),_0x3c815f[_0x2a8662(0x40f)](284.5,275.1,284.9,275.2,285.3,275.4),_0x3c815f[_0x2a8662(0x35b)](285.9,275.6),_0x3c815f['bezierCurveTo'](0x11e,275.6,285.9,275.6,285.9,275.6),_0x3c815f['lineTo'](0x11e,275.7),_0x3c815f[_0x2a8662(0x40f)](0x11e,275.7,0x11e,275.7,0x11e,275.6),_0x3c815f[_0x2a8662(0x35b)](0x11e,275.4),_0x3c815f[_0x2a8662(0x35b)](0x11e,0x113),_0x3c815f[_0x2a8662(0x40f)](286.1,274.2,286.2,273.5,286.3,272.8),_0x3c815f[_0x2a8662(0x40f)](286.5,271.1,286.8,269.5,287.2,0x10c),_0x3c815f[_0x2a8662(0x40f)](288.7,261.8,291.1,256.8,293.2,252.7),_0x3c815f[_0x2a8662(0x40f)](295.4,248.6,297.3,245.4,298.8,243.1),_0x3c815f[_0x2a8662(0x40f)](300.3,240.8,301.2,239.4,301.5,238.9),_0x3c815f[_0x2a8662(0x40f)](301.8,238.5,301.4,239.7,300.5,242.1),_0x3c815f[_0x2a8662(0x40f)](299.6,244.5,298.2,248.1,296.6,252.6),_0x3c815f[_0x2a8662(0x40f)](0x127,257.1,293.2,262.5,292.1,268.5),_0x3c815f['bezierCurveTo'](0x124,269.2,291.9,0x10e,291.8,270.8),_0x3c815f['bezierCurveTo'](291.7,271.6,291.6,272.3,291.6,273.1),_0x3c815f[_0x2a8662(0x40f)](291.6,273.5,291.6,273.9,291.5,274.3),_0x3c815f['lineTo'](291.5,274.9),_0x3c815f[_0x2a8662(0x40f)](291.5,275.1,291.5,275.2,291.5,275.6),_0x3c815f[_0x2a8662(0x40f)](291.5,277.1,291.5,278.5,291.5,0x118),_0x3c815f['bezierCurveTo'](291.5,280.8,291.5,281.7,291.5,282.5),_0x3c815f['lineTo'](291.5,283.1),_0x3c815f['lineTo'](291.5,283.4),_0x3c815f['lineTo'](291.5,283.5),_0x3c815f[_0x2a8662(0x35b)](291.4,283.5),_0x3c815f[_0x2a8662(0x35b)](291.3,283.4),_0x3c815f[_0x2a8662(0x35b)](290.1,0x11b),_0x3c815f[_0x2a8662(0x40f)](288.5,282.4,286.9,281.9,285.2,281.3),_0x3c815f[_0x2a8662(0x40f)](284.8,281.2,284.3,0x119,0x11c,280.9),_0x3c815f[_0x2a8662(0x35b)](283.3,280.6),_0x3c815f[_0x2a8662(0x35b)](0x11a,280.1),_0x3c815f['bezierCurveTo'](281.1,279.8,280.3,279.4,279.5,279.1),_0x3c815f[_0x2a8662(0x40f)](272.7,276.2,266.7,272.7,261.4,269.4),_0x3c815f[_0x2a8662(0x40f)](256.1,266.1,251.5,262.9,247.6,260.2),_0x3c815f['bezierCurveTo'](243.7,257.5,240.6,255.4,238.4,253.9),_0x3c815f['bezierCurveTo'](236.3,252.5,235.1,251.7,235.1,251.7)),_0x3c815f['fill'](),_0x3c815f[_0x2a8662(0x134)]=_0xe0e777,(_0x3c815f[_0x2a8662(0x153)](),_0x3c815f[_0x2a8662(0x2df)](235.1,0x1d7),_0x3c815f[_0x2a8662(0x40f)](235.1,0x1d7,237.1,469.6,240.8,466.9),_0x3c815f[_0x2a8662(0x40f)](244.5,464.3,249.8,460.6,256.5,456.2),_0x3c815f[_0x2a8662(0x40f)](263.3,451.8,271.4,446.8,281.1,442.1),_0x3c815f[_0x2a8662(0x40f)](281.7,441.8,282.3,441.5,282.9,441.2),_0x3c815f[_0x2a8662(0x40f)](283.5,440.9,284.1,440.6,284.8,440.4),_0x3c815f['bezierCurveTo'](286.1,439.8,287.3,439.3,288.6,438.7),_0x3c815f[_0x2a8662(0x40f)](291.2,437.7,293.9,436.6,296.7,435.7),_0x3c815f[_0x2a8662(0x40f)](299.5,434.7,302.4,0x1b2,305.3,433.1),_0x3c815f['bezierCurveTo'](308.3,432.4,311.3,431.7,314.4,431.2),_0x3c815f['bezierCurveTo'](317.5,430.6,320.5,430.3,323.5,0x1ae),_0x3c815f[_0x2a8662(0x40f)](324.2,429.9,0x145,429.9,325.7,429.8),_0x3c815f[_0x2a8662(0x35b)](326.3,429.8),_0x3c815f[_0x2a8662(0x40f)](326.4,429.8,326.4,429.8,326.4,429.8),_0x3c815f[_0x2a8662(0x35b)](326.4,429.8),_0x3c815f[_0x2a8662(0x35b)](326.4,429.8),_0x3c815f[_0x2a8662(0x35b)](326.4,429.8),_0x3c815f[_0x2a8662(0x40f)](326.5,429.8,326.5,429.8,326.5,429.8),_0x3c815f['bezierCurveTo'](326.5,429.8,326.5,429.8,326.5,429.7),_0x3c815f['bezierCurveTo'](326.2,429.2,0x146,428.6,325.7,428.1),_0x3c815f['bezierCurveTo'](325.1,426.9,324.5,425.7,323.9,424.5),_0x3c815f[_0x2a8662(0x40f)](322.7,422.1,321.4,419.8,320.2,417.6),_0x3c815f[_0x2a8662(0x40f)](317.7,413.1,315.2,0x199,312.8,405.2),_0x3c815f[_0x2a8662(0x40f)](311.5,403.3,310.4,401.5,309.2,399.7),_0x3c815f[_0x2a8662(0x40f)](0x134,0x18e,306.8,396.3,305.7,394.7),_0x3c815f[_0x2a8662(0x40f)](301.2,388.4,297.1,383.5,294.1,0x17c),_0x3c815f['bezierCurveTo'](0x123,376.5,289.1,374.4,288.5,373.8),_0x3c815f[_0x2a8662(0x40f)](287.9,373.2,289.6,374.5,292.9,377.3),_0x3c815f[_0x2a8662(0x40f)](293.7,0x17a,294.7,378.8,295.6,379.8),_0x3c815f[_0x2a8662(0x40f)](296.6,380.7,297.7,381.8,298.9,382.9),_0x3c815f[_0x2a8662(0x40f)](300.1,0x180,301.2,385.3,302.5,386.6),_0x3c815f[_0x2a8662(0x40f)](303.8,387.9,305.1,389.4,306.5,390.9),_0x3c815f['bezierCurveTo'](0x138,397.1,318.2,404.9,0x144,414.3),_0x3c815f[_0x2a8662(0x40f)](324.7,415.5,325.5,416.6,326.2,417.9),_0x3c815f[_0x2a8662(0x40f)](326.9,419.1,327.6,420.3,328.3,421.6),_0x3c815f['bezierCurveTo'](0x149,422.8,329.7,424.1,330.4,425.4),_0x3c815f[_0x2a8662(0x40f)](330.7,0x1aa,331.1,426.7,331.4,427.4),_0x3c815f[_0x2a8662(0x40f)](0x14c,428.6,332.6,429.9,333.2,431.2),_0x3c815f[_0x2a8662(0x35b)](334.1,433.1),_0x3c815f[_0x2a8662(0x35b)](334.5,434.1),_0x3c815f[_0x2a8662(0x35b)](334.7,434.6),_0x3c815f[_0x2a8662(0x35b)](334.8,434.7),_0x3c815f[_0x2a8662(0x35b)](334.8,434.8),_0x3c815f[_0x2a8662(0x40f)](334.8,434.8,334.8,434.8,334.7,434.8),_0x3c815f['lineTo'](334.4,434.8),_0x3c815f['bezierCurveTo'](0x14d,434.9,331.6,435.1,330.2,435.3),_0x3c815f[_0x2a8662(0x40f)](328.9,435.4,327.6,435.5,326.3,435.6),_0x3c815f[_0x2a8662(0x40f)](325.6,435.7,324.8,435.7,324.1,435.8),_0x3c815f[_0x2a8662(0x40f)](321.2,436.2,318.2,436.5,315.3,437.1),_0x3c815f[_0x2a8662(0x40f)](312.3,437.5,309.5,438.2,306.6,438.8),_0x3c815f[_0x2a8662(0x40f)](303.8,439.5,0x12d,440.2,298.3,441.1),_0x3c815f[_0x2a8662(0x40f)](295.6,441.9,0x125,442.9,290.4,443.7),_0x3c815f[_0x2a8662(0x40f)](289.1,444.2,287.9,444.7,286.6,445.2),_0x3c815f['bezierCurveTo'](0x11e,445.4,285.4,445.7,284.7,445.9),_0x3c815f[_0x2a8662(0x40f)](284.1,446.2,283.5,446.4,282.9,446.7),_0x3c815f['bezierCurveTo'](273.3,450.8,264.8,455.1,257.8,458.9),_0x3c815f[_0x2a8662(0x40f)](243.8,466.3,235.1,0x1d7,235.1,0x1d7)),_0x3c815f[_0x2a8662(0x1cf)](),_0x3c815f[_0x2a8662(0x134)]=_0xe0e777,(_0x3c815f[_0x2a8662(0x153)](),_0x3c815f['moveTo'](0xb1,376.4),_0x3c815f[_0x2a8662(0x40f)](0xb1,376.4,178.8,375.9,182.1,375.2),_0x3c815f[_0x2a8662(0x40f)](185.4,374.6,190.3,373.8,196.5,373.5),_0x3c815f[_0x2a8662(0x40f)](202.6,373.2,209.9,373.4,217.9,0x176),_0x3c815f['bezierCurveTo'](225.9,374.7,234.6,375.8,243.7,376.9),_0x3c815f[_0x2a8662(0x40f)](244.3,0x179,244.8,0x179,245.4,377.1),_0x3c815f[_0x2a8662(0x35b)](245.8,377.1),_0x3c815f[_0x2a8662(0x35b)](245.8,377.1),_0x3c815f[_0x2a8662(0x35b)](245.8,377.1),_0x3c815f[_0x2a8662(0x35b)](245.8,377.1),_0x3c815f[_0x2a8662(0x35b)](245.9,377.1),_0x3c815f[_0x2a8662(0x40f)](245.9,377.1,245.9,377.1,245.9,0x179),_0x3c815f['lineTo'](245.8,376.9),_0x3c815f['lineTo'](245.8,376.8),_0x3c815f[_0x2a8662(0x35b)](245.4,376.3),_0x3c815f[_0x2a8662(0x40f)](244.7,375.5,244.1,374.7,243.5,0x176),_0x3c815f[_0x2a8662(0x40f)](242.2,372.5,240.9,0x173,239.6,369.6),_0x3c815f[_0x2a8662(0x40f)](234.4,0x16c,229.3,359.3,224.9,355.4),_0x3c815f[_0x2a8662(0x40f)](216.1,347.6,210.3,342.8,209.4,0x156),_0x3c815f[_0x2a8662(0x40f)](208.9,341.6,210.3,342.3,213.1,0x158),_0x3c815f[_0x2a8662(0x40f)](215.9,345.7,220.1,348.3,225.3,351.9),_0x3c815f[_0x2a8662(0x40f)](230.4,355.5,236.4,0x168,242.6,365.6),_0x3c815f[_0x2a8662(0x40f)](243.4,366.3,244.1,0x16f,244.9,367.8),_0x3c815f[_0x2a8662(0x40f)](245.7,368.6,246.4,369.3,247.2,370.1),_0x3c815f[_0x2a8662(0x40f)](0xf8,370.9,248.7,371.7,249.4,372.5),_0x3c815f[_0x2a8662(0x35b)](0xfa,373.1),_0x3c815f[_0x2a8662(0x40f)](250.1,373.2,250.1,373.2,250.2,373.3),_0x3c815f[_0x2a8662(0x35b)](250.4,373.6),_0x3c815f['lineTo'](250.9,374.2),_0x3c815f[_0x2a8662(0x40f)](251.5,0x177,252.2,375.8,252.8,376.6),_0x3c815f[_0x2a8662(0x40f)](254.1,378.2,255.4,379.9,256.7,381.7),_0x3c815f['lineTo'](257.7,0x17f),_0x3c815f[_0x2a8662(0x35b)](258.2,383.7),_0x3c815f['lineTo'](258.3,383.9),_0x3c815f[_0x2a8662(0x35b)](258.3,383.9),_0x3c815f[_0x2a8662(0x35b)](258.3,383.9),_0x3c815f[_0x2a8662(0x35b)](258.2,383.9),_0x3c815f[_0x2a8662(0x35b)](257.8,383.9),_0x3c815f[_0x2a8662(0x40f)](256.7,383.8,255.6,383.7,254.6,383.6),_0x3c815f['bezierCurveTo'](252.4,383.4,250.2,383.2,0xf8,383.1),_0x3c815f['bezierCurveTo'](246.4,382.9,244.9,382.8,243.3,382.6),_0x3c815f[_0x2a8662(0x40f)](234.1,381.5,225.4,0x17c,217.6,378.8),_0x3c815f[_0x2a8662(0x40f)](209.7,377.6,202.7,376.7,196.7,376.3),_0x3c815f[_0x2a8662(0x40f)](190.7,375.9,185.9,375.9,182.5,0x178),_0x3c815f[_0x2a8662(0x40f)](178.9,376.3,0xb1,376.4,0xb1,376.4)),_0x3c815f[_0x2a8662(0x1cf)](),_0x3c815f[_0x2a8662(0x134)]=_0xe0e777,(_0x3c815f[_0x2a8662(0x153)](),_0x3c815f[_0x2a8662(0x2df)](458.7,346.3),_0x3c815f['bezierCurveTo'](458.7,346.3,456.7,347.4,0x1c5,349.4),_0x3c815f[_0x2a8662(0x40f)](449.4,351.5,444.2,354.6,438.1,0x167),_0x3c815f[_0x2a8662(0x40f)](432.1,363.4,425.3,369.1,418.2,375.9),_0x3c815f[_0x2a8662(0x40f)](411.1,382.7,403.7,390.6,396.1,399.1),_0x3c815f[_0x2a8662(0x40f)](0x18a,401.5,391.9,403.9,389.8,406.2),_0x3c815f['bezierCurveTo'](388.1,408.1,386.5,0x19a,384.8,411.8),_0x3c815f[_0x2a8662(0x35b)](383.6,413.2),_0x3c815f['lineTo'](383.4,413.4),_0x3c815f[_0x2a8662(0x35b)](383.3,413.5),_0x3c815f[_0x2a8662(0x35b)](383.3,413.4),_0x3c815f['lineTo'](383.2,412.9),_0x3c815f['lineTo'](0x17f,411.9),_0x3c815f[_0x2a8662(0x40f)](382.7,410.6,382.4,409.3,382.2,408.1),_0x3c815f[_0x2a8662(0x40f)](381.9,406.8,381.6,405.6,381.4,404.4),_0x3c815f['bezierCurveTo'](381.2,403.4,381.1,402.5,380.9,401.5),_0x3c815f[_0x2a8662(0x40f)](380.7,400.2,380.5,398.9,380.3,397.6),_0x3c815f[_0x2a8662(0x40f)](379.9,395.1,379.6,392.6,379.4,390.1),_0x3c815f[_0x2a8662(0x40f)](378.3,380.4,377.5,371.9,376.5,364.6),_0x3c815f[_0x2a8662(0x40f)](375.6,357.4,374.5,351.5,373.3,347.4),_0x3c815f['bezierCurveTo'](373.1,346.3,372.7,345.4,372.5,344.6),_0x3c815f['bezierCurveTo'](372.2,343.8,0x174,0x157,371.7,342.4),_0x3c815f[_0x2a8662(0x40f)](371.2,341.2,370.9,340.4,370.7,0x154),_0x3c815f[_0x2a8662(0x40f)](370.5,339.6,370.7,339.9,371.2,340.6),_0x3c815f[_0x2a8662(0x40f)](371.7,341.4,372.5,342.6,373.4,344.5),_0x3c815f[_0x2a8662(0x40f)](375.2,348.2,377.2,354.1,0x17b,361.7),_0x3c815f['bezierCurveTo'](380.8,369.3,382.4,378.4,384.1,388.5),_0x3c815f[_0x2a8662(0x40f)](384.5,0x187,0x181,393.6,385.4,396.2),_0x3c815f[_0x2a8662(0x40f)](385.6,397.5,385.9,398.8,386.1,400.1),_0x3c815f[_0x2a8662(0x40f)](386.5,0x192,386.4,401.3,386.4,401.5),_0x3c815f[_0x2a8662(0x35b)](386.4,401.5),_0x3c815f[_0x2a8662(0x35b)](386.4,401.5),_0x3c815f['lineTo'](386.5,401.4),_0x3c815f[_0x2a8662(0x35b)](386.9,400.9),_0x3c815f[_0x2a8662(0x35b)](0x183,400.8),_0x3c815f[_0x2a8662(0x35b)](387.5,400.2),_0x3c815f[_0x2a8662(0x35b)](388.9,398.6),_0x3c815f['bezierCurveTo'](389.8,397.5,390.8,396.5,391.7,395.4),_0x3c815f['bezierCurveTo'](399.4,386.8,407.1,378.9,414.8,372.4),_0x3c815f[_0x2a8662(0x40f)](422.4,365.8,429.9,360.6,436.4,356.7),_0x3c815f[_0x2a8662(0x40f)](0x1bb,352.8,448.6,350.3,452.5,348.7),_0x3c815f[_0x2a8662(0x40f)](454.5,347.9,0x1c8,347.4,0x1c9,0x15b),_0x3c815f[_0x2a8662(0x40f)](458.1,346.5,458.7,346.3,458.7,346.3)),_0x3c815f[_0x2a8662(0x1cf)](),_0x3c815f[_0x2a8662(0x235)](),this[_0x2a8662(0x504)]['update']();},Bitmap['prototype'][_0x217234(0x291)]=function(_0x21af0c,_0xbabc0a,_0x38c44f){const _0x1ebe7a=_0x217234,_0x41b71a=this[_0x1ebe7a(0x469)];_0x41b71a[_0x1ebe7a(0xe3)]();const _0x42f7c0=_0x41b71a['createLinearGradient'](0x0,this['height']/0x2,this[_0x1ebe7a(0x4f7)]/0x2,this['height']/0x2);_0x42f7c0[_0x1ebe7a(0xda)](0x0,_0x21af0c||_0x1ebe7a(0x155)),_0x42f7c0[_0x1ebe7a(0xda)](0x1,_0xbabc0a||_0x1ebe7a(0xdb)),_0x41b71a[_0x1ebe7a(0x134)]=_0x42f7c0,(_0x41b71a['beginPath'](),_0x41b71a[_0x1ebe7a(0x2df)](12.57908,31.191794),_0x41b71a['bezierCurveTo'](4.317875,26.790381,0x2,21.507626,0x2,21.507626),_0x41b71a[_0x1ebe7a(0x40f)](0x2,21.507626,5.544827,18.680225,7.844373,17.156388),_0x41b71a[_0x1ebe7a(0x40f)](5.6081,15.442017,2.28258,12.418619,2.28258,12.418619),_0x41b71a[_0x1ebe7a(0x40f)](2.28258,12.418619,4.929183,7.198899,13.612139,3.449718),_0x41b71a['bezierCurveTo'](30.630505,-3.805291,49.031689,18.529354,49.031689,18.529354),_0x41b71a[_0x1ebe7a(0x40f)](49.031689,18.529354,48.933179,18.511974,48.718891,18.575774),_0x41b71a[_0x1ebe7a(0x40f)](48.915856,18.610504,49.014335,18.627874,49.014335,18.627874),_0x41b71a['bezierCurveTo'](49.014335,18.627874,26.958007,38.905902,12.579092,31.191834)),_0x41b71a[_0x1ebe7a(0x1cf)](),_0x41b71a[_0x1ebe7a(0x3c2)]=_0x38c44f||_0x1ebe7a(0x24d),_0x41b71a[_0x1ebe7a(0x1b7)](),_0x41b71a[_0x1ebe7a(0xe3)](),_0x41b71a[_0x1ebe7a(0x235)](),this[_0x1ebe7a(0x504)][_0x1ebe7a(0xb5)]();},Bitmap['prototype'][_0x217234(0x3ff)]=function(_0x38def7){const _0xaa43da=_0x217234,_0x33a95e=this[_0xaa43da(0x469)];_0x38def7=_0x38def7||[_0xaa43da(0x33d),_0xaa43da(0x4c0),_0xaa43da(0x307),'#00aa00',_0xaa43da(0x32b),_0xaa43da(0x24d)],_0x33a95e[_0xaa43da(0xe3)](),_0x33a95e[_0xaa43da(0x28a)](0.044027,0.164312,-0.164312,0.044027,89.0097,-44.1852),_0x33a95e[_0xaa43da(0x134)]=_0x38def7[0x0],_0x33a95e[_0xaa43da(0x365)]=_0x38def7[0x5],_0x33a95e[_0xaa43da(0x332)]=0xc,(_0x33a95e[_0xaa43da(0x153)](),_0x33a95e['moveTo'](431.62,249.52),_0x33a95e[_0xaa43da(0x40f)](431.721833,257.349163,431.387983,265.177929,430.62,272.97),_0x33a95e[_0xaa43da(0x40f)](430.23,276.86,429.73,280.75,429.1,284.61),_0x33a95e[_0xaa43da(0x40f)](428.47,288.47,427.91,292.3,427.37,296.18),_0x33a95e[_0xaa43da(0x40f)](426.83,300.06,426.06,303.89,425.37,307.73),_0x33a95e[_0xaa43da(0x40f)](424.68,311.57,423.88,315.4,423.26,319.24),_0x33a95e[_0xaa43da(0x40f)](422.64,323.08,422.18,326.95,421.56,330.82),_0x33a95e['bezierCurveTo'](420.94,334.69,420.14,338.52,419.39,342.35),_0x33a95e['bezierCurveTo'](418.64,346.18,417.8,350.01,416.84,353.81),_0x33a95e[_0xaa43da(0x40f)](415.88,357.61,414.75,361.36,413.6,365.1),_0x33a95e[_0xaa43da(0x40f)](411.28,372.57,408.73,379.96,406.25,387.35),_0x33a95e[_0xaa43da(0x40f)](405.01,391.06,403.73,394.77,402.15,398.35),_0x33a95e[_0xaa43da(0x40f)](400.57,401.93,398.73,405.42,396.87,408.87),_0x33a95e[_0xaa43da(0x40f)](395.01,412.32,0x189,415.72,0x187,419.05),_0x33a95e[_0xaa43da(0x40f)](0x185,422.38,386.74,425.65,384.38,428.79),_0x33a95e[_0xaa43da(0x40f)](379.581436,434.992727,374.447096,440.928264,0x171,446.57),_0x33a95e['bezierCurveTo'](363.63,452.25,358.11,457.81,352.4,463.16),_0x33a95e['bezierCurveTo'](349.56,465.85,346.63,468.42,343.72,471.04),_0x33a95e[_0xaa43da(0x35b)](0x14f,478.86),_0x33a95e[_0xaa43da(0x35b)](326.28,486.68),_0x33a95e['lineTo'](321.9,490.58),_0x33a95e[_0xaa43da(0x40f)](320.42,491.87,318.9,493.12,317.31,494.31),_0x33a95e[_0xaa43da(0x40f)](314.158788,496.68913,310.840189,498.838031,307.38,500.74),_0x33a95e[_0xaa43da(0x40f)](305.65,501.74,303.88,502.55,302.15,503.43),_0x33a95e[_0xaa43da(0x35b)](296.92,506.07),_0x33a95e[_0xaa43da(0x40f)](293.43,507.82,289.92,509.53,286.29,511.07),_0x33a95e['bezierCurveTo'](282.677226,512.628282,278.985531,513.996813,275.23,515.17),_0x33a95e[_0xaa43da(0x40f)](271.49,516.37,267.75,517.45,0x108,518.58),_0x33a95e['bezierCurveTo'](260.227016,519.72514,256.38621,520.633574,252.5,521.3),_0x33a95e[_0xaa43da(0x40f)](248.595082,521.810403,244.66662,522.120808,240.73,522.23),_0x33a95e[_0xaa43da(0x35b)](234.87,522.46),_0x33a95e[_0xaa43da(0x35b)](231.93,522.57),_0x33a95e[_0xaa43da(0x40f)](231.042639,522.560274,230.157021,522.650849,229.29,522.84),_0x33a95e[_0xaa43da(0x35b)](229.29,522.84),_0x33a95e[_0xaa43da(0x35b)](229.12,522.84),_0x33a95e[_0xaa43da(0x35b)](228.9,522.84),_0x33a95e[_0xaa43da(0x40f)](226.0396,522.722573,223.221208,522.110173,220.57,521.03),_0x33a95e[_0xaa43da(0x35b)](220.44,520.98),_0x33a95e[_0xaa43da(0x40f)](219.08661,520.382693,217.816088,519.612985,216.66,518.69),_0x33a95e[_0xaa43da(0x40f)](216.085072,518.218253,215.537516,517.714102,215.02,517.18),_0x33a95e[_0xaa43da(0x35b)](213.61,515.56),_0x33a95e[_0xaa43da(0x35b)](213.51,515.44),_0x33a95e[_0xaa43da(0x35b)](213.44,515.27),_0x33a95e[_0xaa43da(0x35b)](213.44,515.22),_0x33a95e[_0xaa43da(0x40f)](212.708687,513.436313,211.887639,511.69075,210.98,509.99),_0x33a95e['bezierCurveTo'](210.09,508.23,209.21,506.46,208.39,504.65),_0x33a95e[_0xaa43da(0x40f)](206.643417,501.02829,205.395407,497.186707,204.68,493.23),_0x33a95e[_0xaa43da(0x40f)](204.146127,489.249079,204.125962,485.21606,204.62,481.23),_0x33a95e[_0xaa43da(0x40f)](205.081051,477.294323,205.748639,473.385598,206.62,469.52),_0x33a95e['bezierCurveTo'](207.49288,465.764819,207.886016,461.9141,207.79,458.06),_0x33a95e[_0xaa43da(0x40f)](207.513295,454.195646,206.860201,450.36751,205.84,446.63),_0x33a95e[_0xaa43da(0x40f)](204.99,443.31,204.17,439.98,203.25,436.68),_0x33a95e[_0xaa43da(0x40f)](203.12,436.2,202.99,435.68,202.85,435.26),_0x33a95e['lineTo'](199.49,0x1a8),_0x33a95e[_0xaa43da(0x35b)](196.33,412.63),_0x33a95e[_0xaa43da(0x40f)](195.241308,408.813871,194.412739,404.928284,193.85,0x191),_0x33a95e[_0xaa43da(0x40f)](192.79,393.13,192.48,385.3,192.02,377.41),_0x33a95e[_0xaa43da(0x40f)](191.77,369.41,192.93,361.55,194.4,353.82),_0x33a95e[_0xaa43da(0x35b)](196.71,342.26),_0x33a95e[_0xaa43da(0x40f)](197.47,338.41,198.18,334.55,198.81,330.69),_0x33a95e[_0xaa43da(0x40f)](199.44,326.83,200.07,322.93,200.45,319.07),_0x33a95e[_0xaa43da(0x40f)](200.83,315.21,0xc9,311.25,201.45,307.31),_0x33a95e[_0xaa43da(0x40f)](202.45,299.51,203.2,291.66,205.03,283.93),_0x33a95e['bezierCurveTo'](206.86,276.2,210.25,0x10d,212.78,261.6),_0x33a95e[_0xaa43da(0x40f)](215.47,254.2,218.06,246.79,220.78,239.41),_0x33a95e[_0xaa43da(0x40f)](222.24,235.74,223.88,232.16,225.46,228.56),_0x33a95e[_0xaa43da(0x40f)](227.04,224.96,228.46,221.33,0xe6,217.7),_0x33a95e[_0xaa43da(0x35b)](234.48,206.81),_0x33a95e[_0xaa43da(0x40f)](235.91,203.21,236.93,199.36,238.48,195.74),_0x33a95e[_0xaa43da(0x35b)](240.77,190.29),_0x33a95e[_0xaa43da(0x40f)](241.53,188.47,242.27,186.64,243.15,184.89),_0x33a95e[_0xaa43da(0x40f)](244.83,181.33,246.56,177.79,248.15,174.23),_0x33a95e['bezierCurveTo'](249.74,170.67,251.28,167.02,253.15,163.5),_0x33a95e[_0xaa43da(0x40f)](255.02,159.98,257.01,156.61,259.15,153.29),_0x33a95e[_0xaa43da(0x40f)](261.29,149.97,263.53,146.74,265.82,143.53),_0x33a95e[_0xaa43da(0x40f)](268.11,140.32,270.29,137.11,272.31,133.75),_0x33a95e[_0xaa43da(0x40f)](274.33,130.39,276.31,126.98,278.2,123.57),_0x33a95e[_0xaa43da(0x40f)](280.09,120.16,281.77,116.57,283.6,113.1),_0x33a95e[_0xaa43da(0x40f)](284.52,111.36,285.47,109.62,286.5,107.93),_0x33a95e[_0xaa43da(0x40f)](287.522434,106.213457,288.729617,104.61394,290.1,103.16),_0x33a95e[_0xaa43da(0x40f)](291.46,101.7,292.9,100.35,294.29,98.98),_0x33a95e['bezierCurveTo'](295.68,97.61,297.01,96.17,298.37,94.75),_0x33a95e[_0xaa43da(0x35b)](306.51,86.23),_0x33a95e[_0xaa43da(0x40f)](309.21,83.35,312.03,80.59,314.93,77.93),_0x33a95e['bezierCurveTo'](317.83,75.27,320.83,72.71,323.87,70.22),_0x33a95e[_0xaa43da(0x40f)](326.950045,67.806921,329.835603,65.155418,332.5,62.29),_0x33a95e['bezierCurveTo'](335.15434,59.416711,337.584777,56.344397,339.77,53.1),_0x33a95e[_0xaa43da(0x40f)](341.91,49.84,344.23,46.49,347.5,44.1),_0x33a95e[_0xaa43da(0x40f)](349.125878,42.9073,350.950982,42.013371,352.89,41.46),_0x33a95e['bezierCurveTo'](353.37,41.33,353.89,41.2,354.34,41.1),_0x33a95e[_0xaa43da(0x40f)](354.838027,40.968768,355.346669,40.881764,355.86,40.84),_0x33a95e['bezierCurveTo'](356.947139,40.805706,358.010866,41.160281,358.86,41.84),_0x33a95e['bezierCurveTo'](359.63952,42.468744,360.362298,43.164753,361.02,43.92),_0x33a95e[_0xaa43da(0x35b)](363.02,46.07),_0x33a95e['bezierCurveTo'](364.36,47.52,365.68,48.98,366.95,50.49),_0x33a95e[_0xaa43da(0x40f)](370.89,55.3,374.55,60.33,378.05,65.49),_0x33a95e[_0xaa43da(0x35b)](378.05,65.49),_0x33a95e[_0xaa43da(0x40f)](378.99,66.86,379.91,68.23,380.83,69.61),_0x33a95e[_0xaa43da(0x40f)](383.02,72.87,385.19,76.15,387.29,79.48),_0x33a95e[_0xaa43da(0x40f)](389.460572,82.779822,391.414679,86.217047,393.14,89.77),_0x33a95e[_0xaa43da(0x40f)](394.766901,93.373214,396.130474,97.089619,397.22,100.89),_0x33a95e['bezierCurveTo'](398.34,104.67,399.22,108.5,400.29,112.28),_0x33a95e[_0xaa43da(0x40f)](401.36,116.06,402.41,119.83,403.67,123.54),_0x33a95e[_0xaa43da(0x35b)](407.58,134.66),_0x33a95e[_0xaa43da(0x40f)](408.86,138.3,410.15,141.94,411.42,145.59),_0x33a95e[_0xaa43da(0x40f)](412.69,149.24,414.06,153.14,415.34,156.93),_0x33a95e['lineTo'](417.23,162.52),_0x33a95e['lineTo'](418.98,168.15),_0x33a95e[_0xaa43da(0x40f)](420.12,171.91,421.23,175.7,422.1,179.55),_0x33a95e[_0xaa43da(0x35b)](427.1,202.6),_0x33a95e[_0xaa43da(0x35b)](428.36,208.36),_0x33a95e['lineTo'](428.98,211.24),_0x33a95e[_0xaa43da(0x40f)](429.173333,212.22,429.333333,213.2,429.46,214.18),_0x33a95e['bezierCurveTo'](0x1ae,218.11,430.15,222.05,430.4,225.96),_0x33a95e[_0xaa43da(0x40f)](0x1af,233.79,431.51,241.64,431.62,249.52),_0x33a95e[_0xaa43da(0x1cf)]()),_0x33a95e[_0xaa43da(0x1b7)](),_0x33a95e[_0xaa43da(0x134)]=_0x38def7[0x1],(_0x33a95e['beginPath'](),_0x33a95e['moveTo'](285.75,360.45),_0x33a95e[_0xaa43da(0x35b)](317.05,277.5),_0x33a95e[_0xaa43da(0x35b)](329.05,225.84),_0x33a95e['lineTo'](340.79,165.58),_0x33a95e[_0xaa43da(0x35b)](0x15b,124.66),_0x33a95e[_0xaa43da(0x35b)](349.15,110.28),_0x33a95e[_0xaa43da(0x35b)](352.38,88.17),_0x33a95e[_0xaa43da(0x35b)](354.04,74.9),_0x33a95e[_0xaa43da(0x40f)](354.04,74.9,340.19,93.66,0x142,121.85),_0x33a95e[_0xaa43da(0x35b)](0x142,121.85),_0x33a95e['lineTo'](318.94,116.08),_0x33a95e['lineTo'](315.07,108.52),_0x33a95e[_0xaa43da(0x35b)](313.88,105.61),_0x33a95e[_0xaa43da(0x40f)](313.88,105.61,320.3,123.77,309.71,141.31),_0x33a95e[_0xaa43da(0x35b)](309.71,141.31),_0x33a95e['bezierCurveTo'](306.916667,145.83,304.09,150.496667,301.23,155.31),_0x33a95e[_0xaa43da(0x35b)](301.23,155.31),_0x33a95e['lineTo'](297.4,0x95),_0x33a95e['lineTo'](293.4,142.73),_0x33a95e['lineTo'](288.67,134.87),_0x33a95e[_0xaa43da(0x40f)](295.901876,148.194393,295.803749,164.294746,288.41,177.53),_0x33a95e['lineTo'](288.41,177.53),_0x33a95e[_0xaa43da(0x40f)](286.65,180.676667,284.896667,183.86,283.15,187.08),_0x33a95e[_0xaa43da(0x35b)](283.15,187.08),_0x33a95e[_0xaa43da(0x35b)](279.22,182.53),_0x33a95e[_0xaa43da(0x35b)](272.79,175.59),_0x33a95e['bezierCurveTo'](275.19,178.45,281.64,188.49,273.09,206.31),_0x33a95e[_0xaa43da(0x35b)](273.09,206.31),_0x33a95e[_0xaa43da(0x40f)](270.72,211.02,268.4,215.77,266.15,220.52),_0x33a95e['lineTo'](266.15,220.52),_0x33a95e[_0xaa43da(0x35b)](263.84,218.34),_0x33a95e['lineTo'](260.92,215.6),_0x33a95e['bezierCurveTo'](260.92,215.6,265.27,221.08,259.07,236.13),_0x33a95e[_0xaa43da(0x35b)](259.07,236.13),_0x33a95e['bezierCurveTo'](256.603333,241.836667,254.27,247.503333,252.07,253.13),_0x33a95e[_0xaa43da(0x35b)](252.07,253.13),_0x33a95e['lineTo'](247.51,249.29),_0x33a95e[_0xaa43da(0x35b)](244.92,0xf7),_0x33a95e[_0xaa43da(0x35b)](243.76,246.13),_0x33a95e[_0xaa43da(0x40f)](246.52,248.92,250.54,256.13,244.9,272.77),_0x33a95e[_0xaa43da(0x35b)](244.9,272.77),_0x33a95e['bezierCurveTo'](243.806667,275.85,242.716667,278.986667,241.63,282.18),_0x33a95e[_0xaa43da(0x35b)](241.63,282.18),_0x33a95e[_0xaa43da(0x35b)](237.21,0x114),_0x33a95e[_0xaa43da(0x35b)](233.81,271.77),_0x33a95e[_0xaa43da(0x35b)](230.81,267.86),_0x33a95e[_0xaa43da(0x40f)](233.81,272.45,239.7,285.52,232.29,310.91),_0x33a95e[_0xaa43da(0x35b)](232.29,310.91),_0x33a95e[_0xaa43da(0x40f)](231.623333,313.11,230.956667,315.326667,230.29,317.56),_0x33a95e['lineTo'](230.29,317.56),_0x33a95e[_0xaa43da(0x35b)](226.67,310.46),_0x33a95e[_0xaa43da(0x35b)](223.88,304.91),_0x33a95e[_0xaa43da(0x35b)](221.49,299.78),_0x33a95e[_0xaa43da(0x40f)](224.38,307.42,228.04,322.78,222.56,344.43),_0x33a95e[_0xaa43da(0x35b)](222.56,344.43),_0x33a95e[_0xaa43da(0x40f)](222.08,346.16,221.62,347.89,221.15,349.62),_0x33a95e[_0xaa43da(0x35b)](221.15,349.62),_0x33a95e['lineTo'](219.97,346.31),_0x33a95e[_0xaa43da(0x35b)](215.78,0x150),_0x33a95e[_0xaa43da(0x35b)](215.38,334.89),_0x33a95e[_0xaa43da(0x40f)](217.23,341.26,219.38,353.39,216.06,369.47),_0x33a95e['bezierCurveTo'](215.62,371.28,215.19,373.08,214.76,374.89),_0x33a95e[_0xaa43da(0x35b)](214.7,375.14),_0x33a95e['lineTo'](214.7,375.14),_0x33a95e[_0xaa43da(0x40f)](213.32,381.06,212.01,386.96,210.77,392.84),_0x33a95e[_0xaa43da(0x35b)](210.77,392.84),_0x33a95e[_0xaa43da(0x35b)](209.36,389.71),_0x33a95e[_0xaa43da(0x35b)](0xd0,386.2),_0x33a95e[_0xaa43da(0x35b)](207.12,383.09),_0x33a95e['lineTo'](206.37,378.74),_0x33a95e[_0xaa43da(0x40f)](208.034744,391.047293,208.034744,403.522707,206.37,415.83),_0x33a95e['bezierCurveTo'](205.89,418.61,205.43,421.37,205.01,424.12),_0x33a95e['bezierCurveTo'](205.005302,424.16989,205.005302,424.22011,205.01,424.27),_0x33a95e[_0xaa43da(0x35b)](205.01,424.27),_0x33a95e['bezierCurveTo'](204.343333,428.47,203.746667,432.623333,203.22,436.73),_0x33a95e['bezierCurveTo'](204.14,440.03,204.96,443.36,205.81,446.68),_0x33a95e[_0xaa43da(0x40f)](206.830201,450.41751,207.483295,454.245646,207.76,458.11),_0x33a95e[_0xaa43da(0x40f)](207.856016,461.9641,207.46288,465.814819,206.59,469.57),_0x33a95e[_0xaa43da(0x40f)](205.718639,473.435598,205.051051,477.344323,204.59,481.28),_0x33a95e[_0xaa43da(0x40f)](204.095962,485.26606,204.116127,489.299079,204.65,493.28),_0x33a95e[_0xaa43da(0x40f)](205.365407,497.236707,206.613417,501.07829,208.36,504.7),_0x33a95e[_0xaa43da(0x40f)](209.18,506.51,210.06,508.28,210.95,510.04),_0x33a95e['bezierCurveTo'](211.857639,511.74075,212.678687,513.486313,213.41,515.27),_0x33a95e[_0xaa43da(0x35b)](213.41,515.32),_0x33a95e[_0xaa43da(0x35b)](213.48,515.49),_0x33a95e['lineTo'](213.58,515.61),_0x33a95e[_0xaa43da(0x35b)](214.99,517.23),_0x33a95e[_0xaa43da(0x40f)](215.507516,517.764102,216.055072,518.268253,216.63,518.74),_0x33a95e['bezierCurveTo'](217.786088,519.662985,219.05661,520.432693,220.41,521.03),_0x33a95e['lineTo'](220.54,521.08),_0x33a95e[_0xaa43da(0x40f)](234.62,498.82,250.27,460.36,250.27,460.36)),_0x33a95e[_0xaa43da(0x1cf)](),_0x33a95e[_0xaa43da(0x134)]=_0x38def7[0x2],(_0x33a95e['beginPath'](),_0x33a95e[_0xaa43da(0x2df)](430.49,225.94),_0x33a95e['bezierCurveTo'](430.24,222.03,430.09,218.09,429.55,214.16),_0x33a95e[_0xaa43da(0x40f)](429.423333,213.18,429.263333,212.2,429.07,211.22),_0x33a95e['lineTo'](428.45,208.34),_0x33a95e[_0xaa43da(0x35b)](427.19,202.58),_0x33a95e[_0xaa43da(0x35b)](422.19,179.53),_0x33a95e[_0xaa43da(0x40f)](421.32,175.68,420.19,171.89,419.07,168.13),_0x33a95e['lineTo'](417.32,162.5),_0x33a95e[_0xaa43da(0x35b)](415.43,156.91),_0x33a95e[_0xaa43da(0x40f)](412.91,149.45,410.28,142.05,407.67,134.64),_0x33a95e[_0xaa43da(0x35b)](403.76,123.52),_0x33a95e[_0xaa43da(0x40f)](402.5,119.81,401.42,116.04,400.38,112.26),_0x33a95e['bezierCurveTo'](399.34,108.48,398.43,104.65,397.31,100.87),_0x33a95e['bezierCurveTo'](396.220474,97.069619,394.856901,93.353214,393.23,89.75),_0x33a95e[_0xaa43da(0x40f)](391.504679,86.197047,389.550572,82.759822,387.38,79.46),_0x33a95e['bezierCurveTo'](385.28,76.13,383.11,72.85,380.92,69.59),_0x33a95e[_0xaa43da(0x40f)](0x17c,68.21,379.08,66.84,378.14,65.47),_0x33a95e['bezierCurveTo'](387.8,80.8,395.04,109.72,396.47,149.27),_0x33a95e['lineTo'](376.1,161.86),_0x33a95e[_0xaa43da(0x40f)](379.85,159.59,396.59,0x96,396.69,160.27),_0x33a95e[_0xaa43da(0x40f)](396.75,167.25,396.633333,174.516667,396.34,182.07),_0x33a95e[_0xaa43da(0x35b)](370.5,194.47),_0x33a95e[_0xaa43da(0x40f)](379.58,190.47,396.45,184.53,395.5,196.63),_0x33a95e['bezierCurveTo'](395.39,198.23,395.27,199.84,395.15,201.46),_0x33a95e['lineTo'](389.25,207.26),_0x33a95e[_0xaa43da(0x35b)](383.25,212.74),_0x33a95e[_0xaa43da(0x40f)](383.25,212.74,380.25,215.38,375.87,218.98),_0x33a95e['bezierCurveTo'](390.22,209.39,393.47,215.75,392.87,224.41),_0x33a95e[_0xaa43da(0x40f)](392.15,230.37,391.323333,236.463333,390.39,242.69),_0x33a95e[_0xaa43da(0x35b)](374.29,253.84),_0x33a95e[_0xaa43da(0x40f)](381.29,249.93,389.62,247.84,387.03,262.84),_0x33a95e[_0xaa43da(0x40f)](386.036667,268.253333,384.96,273.74,383.8,279.3),_0x33a95e[_0xaa43da(0x35b)](378.4,282.68),_0x33a95e[_0xaa43da(0x35b)](368.4,288.48),_0x33a95e[_0xaa43da(0x35b)](351.28,0x12a),_0x33a95e['bezierCurveTo'](351.28,0x12a,382.89,280.72,379.45,298.88),_0x33a95e[_0xaa43da(0x40f)](378.51,302.88,377.51,306.896667,376.45,310.93),_0x33a95e[_0xaa43da(0x35b)](364.43,0x13d),_0x33a95e[_0xaa43da(0x35b)](354.48,321.41),_0x33a95e[_0xaa43da(0x40f)](363.55,317.83,375.77,314.48,373.1,323.71),_0x33a95e[_0xaa43da(0x40f)](373.01,324.03,372.93,324.35,372.84,324.71),_0x33a95e[_0xaa43da(0x40f)](371.506667,329.583333,370.066667,334.36,368.52,339.04),_0x33a95e[_0xaa43da(0x35b)](358.52,344.38),_0x33a95e[_0xaa43da(0x35b)](353.36,347.17),_0x33a95e[_0xaa43da(0x35b)](341.49,352.49),_0x33a95e[_0xaa43da(0x40f)](351.93,348.35,366.49,344.44,361.87,357.42),_0x33a95e[_0xaa43da(0x40f)](359.27,364.006667,356.51,370.406667,353.59,376.62),_0x33a95e[_0xaa43da(0x40f)](349.53,378.78,331.04,388.35,313.91,392.41),_0x33a95e[_0xaa43da(0x40f)](326.26,390.74,350.91,379.56,344.78,394.04),_0x33a95e[_0xaa43da(0x40f)](339.71,403.42,334.34,412.3,328.78,420.68),_0x33a95e['bezierCurveTo'](318.476689,423.18083,308.011191,424.958495,297.46,0x1aa),_0x33a95e[_0xaa43da(0x40f)](315.21,425.12,326.79,424.25,317.73,436.57),_0x33a95e[_0xaa43da(0x40f)](311.08,445.57,304.32,453.89,297.65,461.51),_0x33a95e[_0xaa43da(0x40f)](297.56,461.51,279.87,463.81,266.65,461.17),_0x33a95e['bezierCurveTo'](280.85,464.3,296.44,463.02,284.31,476.04),_0x33a95e['bezierCurveTo'](280.976667,479.5,277.703333,482.77,274.49,485.85),_0x33a95e[_0xaa43da(0x40f)](274.43,485.85,261.73,486.11,251.87,484.55),_0x33a95e[_0xaa43da(0x40f)](262.77,486.37,273.54,486.5,263.2,496.32),_0x33a95e[_0xaa43da(0x40f)](258.69,500.32,254.47,503.9,250.65,507.01),_0x33a95e[_0xaa43da(0x40f)](250.55,507.01,238.65,508.01,233.16,506.79),_0x33a95e['bezierCurveTo'](239.07,508.66,243.85,511.37,237.87,516.9),_0x33a95e[_0xaa43da(0x40f)](232.71,520.68,229.59,522.68,229.32,522.9),_0x33a95e[_0xaa43da(0x40f)](230.187021,522.710849,231.072639,522.620274,231.96,522.63),_0x33a95e['lineTo'](234.9,522.52),_0x33a95e[_0xaa43da(0x35b)](240.76,522.29),_0x33a95e[_0xaa43da(0x40f)](244.69662,522.180808,248.625082,521.870403,252.53,521.36),_0x33a95e[_0xaa43da(0x40f)](256.406968,520.679223,260.23773,519.757436,0x108,518.6),_0x33a95e[_0xaa43da(0x40f)](267.75,517.47,271.49,516.39,275.23,515.19),_0x33a95e[_0xaa43da(0x40f)](278.985531,514.016813,282.677226,512.648282,286.29,511.09),_0x33a95e[_0xaa43da(0x40f)](289.9,509.53,293.43,507.82,296.92,506.09),_0x33a95e['lineTo'](302.15,503.45),_0x33a95e[_0xaa43da(0x40f)](303.88,502.57,305.65,501.72,307.38,500.76),_0x33a95e['bezierCurveTo'](310.840189,498.858031,314.158788,496.70913,317.31,494.33),_0x33a95e[_0xaa43da(0x40f)](318.89,493.14,320.42,491.89,321.9,490.6),_0x33a95e['lineTo'](326.28,486.7),_0x33a95e['lineTo'](0x14f,478.88),_0x33a95e[_0xaa43da(0x35b)](343.72,471.06),_0x33a95e[_0xaa43da(0x40f)](346.63,468.44,349.56,465.87,352.4,463.18),_0x33a95e[_0xaa43da(0x40f)](358.11,457.83,363.63,452.27,0x171,446.59),_0x33a95e['bezierCurveTo'](374.436839,440.947476,379.561151,435.011953,384.35,428.81),_0x33a95e['bezierCurveTo'](386.71,425.67,388.93,422.42,390.97,419.07),_0x33a95e[_0xaa43da(0x40f)](393.01,415.72,394.97,412.36,396.89,408.92),_0x33a95e['bezierCurveTo'](398.81,405.48,400.57,402.02,402.17,398.4),_0x33a95e[_0xaa43da(0x40f)](403.77,394.78,405.03,391.08,406.27,387.4),_0x33a95e['bezierCurveTo'](408.75,380.01,411.27,372.62,413.62,365.15),_0x33a95e[_0xaa43da(0x40f)](414.77,361.41,415.89,357.67,416.86,353.86),_0x33a95e[_0xaa43da(0x40f)](417.83,350.05,418.64,346.24,419.41,342.4),_0x33a95e[_0xaa43da(0x40f)](420.18,338.56,420.96,334.75,421.58,330.87),_0x33a95e[_0xaa43da(0x40f)](422.2,326.99,422.68,323.13,423.28,319.29),_0x33a95e[_0xaa43da(0x40f)](423.88,315.45,424.7,311.61,425.39,307.78),_0x33a95e[_0xaa43da(0x40f)](426.08,303.95,426.9,300.12,427.39,296.23),_0x33a95e['bezierCurveTo'](427.88,292.34,428.44,288.51,429.12,284.66),_0x33a95e[_0xaa43da(0x40f)](429.8,280.81,430.25,276.91,430.64,273.02),_0x33a95e['bezierCurveTo'](431.407983,265.227929,431.741833,257.399163,431.64,249.57),_0x33a95e['bezierCurveTo'](431.51,241.64,0x1af,233.79,430.49,225.94)),_0x33a95e[_0xaa43da(0x1cf)](),_0x33a95e[_0xaa43da(0x134)]=_0x38def7[0x3],(_0x33a95e['beginPath'](),_0x33a95e[_0xaa43da(0x2df)](340.27,176.61),_0x33a95e[_0xaa43da(0x35b)](348.27,122.21),_0x33a95e[_0xaa43da(0x35b)](0x160,0x56),_0x33a95e[_0xaa43da(0x40f)](0x160,0x56,349.18,94.32,344.36,108.7),_0x33a95e[_0xaa43da(0x35b)](341.04,104.91),_0x33a95e[_0xaa43da(0x40f)](341.04,104.91,344.15,109.29,341.39,117.57),_0x33a95e['lineTo'](341.39,117.57),_0x33a95e[_0xaa43da(0x40f)](339.01,124.71,336.28,132.9,333.28,141.95),_0x33a95e[_0xaa43da(0x35b)](333.28,141.95),_0x33a95e[_0xaa43da(0x35b)](328.13,133.05),_0x33a95e['lineTo'](325.91,129.17),_0x33a95e[_0xaa43da(0x40f)](325.91,129.17,332.53,142.95,325.57,165.28),_0x33a95e['lineTo'](325.57,165.28),_0x33a95e[_0xaa43da(0x40f)](323.503333,171.573333,321.35,178.12,319.11,184.92),_0x33a95e[_0xaa43da(0x35b)](319.11,184.92),_0x33a95e[_0xaa43da(0x35b)](0x13b,177.71),_0x33a95e[_0xaa43da(0x35b)](308.25,166.82),_0x33a95e[_0xaa43da(0x40f)](314.733452,179.880969,315.811249,194.970124,311.25,208.82),_0x33a95e['lineTo'](311.25,208.82),_0x33a95e[_0xaa43da(0x40f)](310.103333,212.326667,308.946667,215.883333,307.78,219.49),_0x33a95e[_0xaa43da(0x35b)](307.78,219.49),_0x33a95e[_0xaa43da(0x35b)](300.16,0xd0),_0x33a95e[_0xaa43da(0x35b)](295.37,201.93),_0x33a95e[_0xaa43da(0x40f)](295.37,201.93,308.11,218.47,299.78,244.52),_0x33a95e['bezierCurveTo'](298.653333,248.04,297.516667,251.586667,296.37,255.16),_0x33a95e[_0xaa43da(0x35b)](296.37,255.16),_0x33a95e[_0xaa43da(0x35b)](290.64,0xf7),_0x33a95e[_0xaa43da(0x35b)](280.58,236.2),_0x33a95e[_0xaa43da(0x40f)](281.58,237.26,296.58,254.13,287.96,281.57),_0x33a95e[_0xaa43da(0x35b)](287.96,281.57),_0x33a95e[_0xaa43da(0x40f)](287.333333,283.53,286.71,285.496667,286.09,287.47),_0x33a95e[_0xaa43da(0x35b)](286.09,287.47),_0x33a95e[_0xaa43da(0x35b)](0x118,279.81),_0x33a95e[_0xaa43da(0x35b)](270.72,270.71),_0x33a95e[_0xaa43da(0x40f)](270.72,270.71,286.28,286.4,277.78,313.81),_0x33a95e[_0xaa43da(0x35b)](277.78,313.81),_0x33a95e[_0xaa43da(0x40f)](276.106667,319.143333,274.44,324.476667,272.78,329.81),_0x33a95e[_0xaa43da(0x35b)](272.78,329.81),_0x33a95e[_0xaa43da(0x35b)](265.2,315.89),_0x33a95e['lineTo'](259.75,307.61),_0x33a95e[_0xaa43da(0x40f)](267.679619,321.381348,269.795642,337.744541,265.63,353.08),_0x33a95e[_0xaa43da(0x35b)](264.63,356.41),_0x33a95e[_0xaa43da(0x35b)](264.63,356.41),_0x33a95e[_0xaa43da(0x35b)](264.63,356.41),_0x33a95e['bezierCurveTo'](263.683333,359.516667,262.74,362.62,261.8,365.72),_0x33a95e[_0xaa43da(0x35b)](261.8,365.72),_0x33a95e['lineTo'](255.48,357.92),_0x33a95e[_0xaa43da(0x35b)](248.69,349.01),_0x33a95e['bezierCurveTo'](248.69,349.01,261.56,365.87,253.9,392.1),_0x33a95e['lineTo'](253.9,392.1),_0x33a95e['bezierCurveTo'](252.566667,396.706667,251.233333,401.26,249.9,405.76),_0x33a95e[_0xaa43da(0x35b)](249.9,405.76),_0x33a95e[_0xaa43da(0x35b)](243.52,395.82),_0x33a95e[_0xaa43da(0x35b)](238.92,387.92),_0x33a95e[_0xaa43da(0x40f)](238.92,387.92,249.49,405.92,241.92,433.65),_0x33a95e[_0xaa43da(0x35b)](241.92,433.65),_0x33a95e[_0xaa43da(0x35b)](239.82,441.18),_0x33a95e[_0xaa43da(0x35b)](239.82,441.18),_0x33a95e[_0xaa43da(0x35b)](0xe9,429.68),_0x33a95e[_0xaa43da(0x40f)](0xe9,429.68,239.72,442.12,234.11,462.31),_0x33a95e['lineTo'](234.11,462.31),_0x33a95e['bezierCurveTo'](233.17,465.85,232.27,469.303333,231.41,472.67),_0x33a95e[_0xaa43da(0x35b)](227.3,467.28),_0x33a95e[_0xaa43da(0x40f)](227.3,467.28,230.97,473.84,228.38,484.69),_0x33a95e[_0xaa43da(0x35b)](228.38,484.69),_0x33a95e[_0xaa43da(0x40f)](225.19,497.69,222.71,508.99,221.15,518.02),_0x33a95e[_0xaa43da(0x40f)](0xf0,483.95,262.65,419.16,262.65,419.16),_0x33a95e[_0xaa43da(0x35b)](306.26,315.71),_0x33a95e['lineTo'](323.48,243.71)),_0x33a95e[_0xaa43da(0x1cf)](),_0x33a95e[_0xaa43da(0x134)]=_0x38def7[0x4],(_0x33a95e['beginPath'](),_0x33a95e[_0xaa43da(0x2df)](430.49,225.94),_0x33a95e[_0xaa43da(0x40f)](430.24,222.03,430.09,218.09,429.55,214.16),_0x33a95e[_0xaa43da(0x40f)](429.423333,213.18,429.263333,212.2,429.07,211.22),_0x33a95e[_0xaa43da(0x35b)](428.45,208.34),_0x33a95e[_0xaa43da(0x35b)](427.19,202.58),_0x33a95e[_0xaa43da(0x35b)](422.19,179.53),_0x33a95e[_0xaa43da(0x40f)](421.32,175.68,420.19,171.89,419.07,168.13),_0x33a95e[_0xaa43da(0x35b)](417.32,162.5),_0x33a95e[_0xaa43da(0x35b)](415.43,156.91),_0x33a95e['bezierCurveTo'](414.15,153.123333,412.843333,149.343333,411.51,145.57),_0x33a95e[_0xaa43da(0x40f)](412.03,148.49,448.2,358.03,321.91,490.57),_0x33a95e['lineTo'](326.29,486.67),_0x33a95e['lineTo'](335.01,478.85),_0x33a95e['lineTo'](343.73,471.03),_0x33a95e['bezierCurveTo'](346.64,468.41,349.57,465.84,352.41,463.15),_0x33a95e[_0xaa43da(0x40f)](358.12,457.8,363.64,452.24,369.01,446.56),_0x33a95e['bezierCurveTo'](374.446839,440.917476,379.571151,434.981953,384.36,428.78),_0x33a95e[_0xaa43da(0x40f)](386.72,425.64,388.94,422.39,390.98,419.04),_0x33a95e[_0xaa43da(0x40f)](393.02,415.69,394.98,412.33,396.9,408.89),_0x33a95e[_0xaa43da(0x40f)](398.82,405.45,400.58,401.99,402.18,398.37),_0x33a95e[_0xaa43da(0x40f)](403.78,394.75,405.04,391.05,406.28,387.37),_0x33a95e[_0xaa43da(0x40f)](408.76,379.98,411.28,372.59,413.63,365.12),_0x33a95e[_0xaa43da(0x40f)](414.78,361.38,415.9,357.64,416.87,353.83),_0x33a95e[_0xaa43da(0x40f)](417.84,350.02,418.65,346.21,419.42,342.37),_0x33a95e['bezierCurveTo'](420.19,338.53,420.97,334.72,421.59,330.84),_0x33a95e['bezierCurveTo'](422.21,326.96,422.69,323.1,423.29,319.26),_0x33a95e[_0xaa43da(0x40f)](423.89,315.42,424.71,311.58,425.4,307.75),_0x33a95e[_0xaa43da(0x40f)](426.09,303.92,426.91,300.09,427.4,296.2),_0x33a95e['bezierCurveTo'](427.89,292.31,428.45,288.48,429.13,284.63),_0x33a95e[_0xaa43da(0x40f)](429.81,280.78,430.26,276.88,430.65,272.99),_0x33a95e[_0xaa43da(0x40f)](431.417983,265.197929,431.751833,257.369163,431.65,249.54),_0x33a95e['bezierCurveTo'](431.51,241.64,0x1af,233.79,430.49,225.94)),_0x33a95e[_0xaa43da(0x1cf)](),_0x33a95e[_0xaa43da(0x134)]=_0x38def7[0x5],_0x33a95e[_0xaa43da(0x365)]=_0x38def7[0x5],_0x33a95e['lineWidth']=0.5,(_0x33a95e[_0xaa43da(0x153)](),_0x33a95e[_0xaa43da(0x2df)](299.66,335.53),_0x33a95e[_0xaa43da(0x40f)](309.681137,334.686744,319.615142,333.014353,329.36,330.53),_0x33a95e['bezierCurveTo'](339.199482,327.973836,348.817214,324.629701,358.12,320.53),_0x33a95e[_0xaa43da(0x40f)](362.786667,318.47,367.35,316.243333,371.81,313.85),_0x33a95e[_0xaa43da(0x40f)](376.27,311.456667,380.643333,308.883333,384.93,306.13),_0x33a95e[_0xaa43da(0x40f)](393.507021,300.696702,401.564499,294.483707,0x199,287.57),_0x33a95e[_0xaa43da(0x40f)](401.449487,294.326806,393.291566,300.372438,384.63,305.63),_0x33a95e[_0xaa43da(0x40f)](380.33,308.296667,375.93,310.79,371.43,313.11),_0x33a95e[_0xaa43da(0x40f)](366.93,315.43,362.353333,317.57,357.7,319.53),_0x33a95e[_0xaa43da(0x40f)](348.401624,323.448152,338.804247,326.614952,0x149,0x149),_0x33a95e[_0xaa43da(0x40f)](319.603472,331.243088,310.043265,332.734467,300.41,333.46),_0x33a95e[_0xaa43da(0x40f)](301.51,330.46,302.62,327.46,303.7,324.4),_0x33a95e[_0xaa43da(0x40f)](305.086667,320.546667,306.46,316.68,307.82,312.8),_0x33a95e['lineTo'](314.12,311.35),_0x33a95e[_0xaa43da(0x35b)](317.4,310.58),_0x33a95e[_0xaa43da(0x35b)](320.63,309.58),_0x33a95e[_0xaa43da(0x40f)](322.79,308.94,324.95,308.32,327.09,307.66),_0x33a95e['lineTo'](333.43,305.41),_0x33a95e['bezierCurveTo'](341.840722,302.350071,350.047426,298.756089,0x166,294.65),_0x33a95e[_0xaa43da(0x40f)](365.959278,290.559569,373.699792,286.056786,381.19,281.16),_0x33a95e['bezierCurveTo'](388.682119,276.281578,395.887358,270.976145,402.77,265.27),_0x33a95e['bezierCurveTo'](395.789265,270.841289,388.493886,276.006485,380.92,280.74),_0x33a95e[_0xaa43da(0x40f)](373.356854,285.469142,365.556654,289.808149,357.55,293.74),_0x33a95e['bezierCurveTo'](349.567396,297.696491,341.340718,301.140139,332.92,304.05),_0x33a95e['lineTo'](326.59,306.16),_0x33a95e[_0xaa43da(0x40f)](324.45,306.78,322.3,307.34,320.16,307.94),_0x33a95e[_0xaa43da(0x35b)](316.95,308.82),_0x33a95e[_0xaa43da(0x35b)](313.69,309.52),_0x33a95e[_0xaa43da(0x35b)](308.57,310.6),_0x33a95e[_0xaa43da(0x35b)](309.36,308.35),_0x33a95e[_0xaa43da(0x35b)](0x138,300.27),_0x33a95e[_0xaa43da(0x35b)](313.32,296.22),_0x33a95e[_0xaa43da(0x40f)](313.77,294.88,314.21,293.53,314.58,292.16),_0x33a95e[_0xaa43da(0x40f)](315.35,289.54,316.09,286.91,316.83,284.28),_0x33a95e[_0xaa43da(0x40f)](325.865827,281.447791,334.625259,277.799422,0x157,273.38),_0x33a95e['lineTo'](349.3,270.03),_0x33a95e[_0xaa43da(0x35b)](355.47,266.47),_0x33a95e[_0xaa43da(0x40f)](357.55,265.31,359.54,264.01,361.57,262.77),_0x33a95e[_0xaa43da(0x40f)](363.6,261.53,365.57,260.29,367.57,258.97),_0x33a95e[_0xaa43da(0x40f)](375.57,253.84,383.32,248.36,390.96,242.73),_0x33a95e[_0xaa43da(0x40f)](398.6,237.1,406.08,231.26,413.35,225.16),_0x33a95e[_0xaa43da(0x40f)](405.98,231.16,398.35,236.81,390.66,242.32),_0x33a95e[_0xaa43da(0x40f)](382.97,247.83,375.09,253.15,0x16f,258.13),_0x33a95e[_0xaa43da(0x40f)](0x16d,259.41,0x16b,260.6,360.93,261.81),_0x33a95e[_0xaa43da(0x40f)](358.86,263.02,356.93,264.26,354.79,265.38),_0x33a95e[_0xaa43da(0x35b)](348.58,268.83),_0x33a95e['lineTo'](342.29,0x110),_0x33a95e[_0xaa43da(0x40f)](334.311743,276.031109,326.005153,279.376494,317.46,0x11a),_0x33a95e['lineTo'](319.2,275.76),_0x33a95e[_0xaa43da(0x40f)](321.9,266.06,324.34,256.29,326.62,246.49),_0x33a95e[_0xaa43da(0x40f)](329.874304,245.741841,333.077493,244.786562,336.21,243.63),_0x33a95e[_0xaa43da(0x40f)](339.430957,242.413731,342.588325,241.035303,345.67,239.5),_0x33a95e['bezierCurveTo'](351.791575,236.396752,357.680318,232.854149,363.29,228.9),_0x33a95e[_0xaa43da(0x40f)](368.9,224.98,374.29,220.75,379.46,216.3),_0x33a95e[_0xaa43da(0x40f)](384.63,211.85,389.65,207.18,394.36,202.24),_0x33a95e[_0xaa43da(0x40f)](389.53,207.06,384.41,211.59,379.14,215.92),_0x33a95e[_0xaa43da(0x40f)](373.87416,220.243153,368.393882,224.298292,362.72,228.07),_0x33a95e[_0xaa43da(0x40f)](357.066914,231.866215,351.144545,235.245174,0x159,238.18),_0x33a95e[_0xaa43da(0x40f)](341.934973,239.618284,338.797427,240.896667,335.6,242.01),_0x33a95e[_0xaa43da(0x40f)](332.81442,242.95951,329.976369,243.747486,327.1,244.37),_0x33a95e[_0xaa43da(0x40f)](329.486667,233.97,331.696667,223.536667,333.73,213.07),_0x33a95e['lineTo'](393.36,182.9),_0x33a95e[_0xaa43da(0x35b)](334.11,211.14),_0x33a95e[_0xaa43da(0x35b)](334.44,209.48),_0x33a95e['bezierCurveTo'](336.66,197.92,338.73,186.326667,340.65,174.7),_0x33a95e['bezierCurveTo'](343.104938,174.985029,345.590493,174.84976,0x15c,174.3),_0x33a95e[_0xaa43da(0x40f)](350.54725,173.755679,353.050747,173.023682,355.49,172.11),_0x33a95e['bezierCurveTo'](360.323367,170.268226,365.033112,168.117108,369.59,165.67),_0x33a95e[_0xaa43da(0x40f)](374.16,163.25,378.59,160.67,0x17f,157.94),_0x33a95e['bezierCurveTo'](387.41,155.21,391.69,152.4,395.9,149.44),_0x33a95e[_0xaa43da(0x40f)](391.62,152.31,387.25,155.03,382.82,157.65),_0x33a95e[_0xaa43da(0x40f)](378.39,160.27,373.87,162.75,369.28,165.05),_0x33a95e[_0xaa43da(0x40f)](364.706245,167.379689,359.98636,169.410609,355.15,171.13),_0x33a95e[_0xaa43da(0x40f)](352.747367,171.981834,350.28365,172.650414,347.78,173.13),_0x33a95e[_0xaa43da(0x40f)](345.506501,173.59759,343.170462,173.678726,340.87,173.37),_0x33a95e[_0xaa43da(0x40f)](342.583333,163.07,344.193333,152.736667,345.7,142.37),_0x33a95e[_0xaa43da(0x40f)](345.78,141.83,345.85,141.29,345.93,140.74),_0x33a95e[_0xaa43da(0x40f)](347.937647,140.185143,349.849427,139.32872,351.6,138.2),_0x33a95e[_0xaa43da(0x40f)](353.402611,137.059465,355.129551,135.803509,356.77,134.44),_0x33a95e['bezierCurveTo'](360.020292,131.719246,363.108885,128.810959,366.02,125.73),_0x33a95e[_0xaa43da(0x40f)](368.95,122.67,371.76,119.51,374.48,116.28),_0x33a95e[_0xaa43da(0x40f)](377.2,113.05,379.86,109.75,382.4,106.38),_0x33a95e[_0xaa43da(0x40f)](379.79,109.7,377.07,112.93,374.29,116.11),_0x33a95e['bezierCurveTo'](371.51,119.29,368.63,122.38,365.65,125.37),_0x33a95e['bezierCurveTo'](362.693277,128.372353,359.564676,131.200448,356.28,133.84),_0x33a95e[_0xaa43da(0x40f)](354.645971,135.148027,352.925382,136.344087,351.13,137.42),_0x33a95e[_0xaa43da(0x40f)](349.573662,138.386994,347.891052,139.134074,346.13,139.64),_0x33a95e[_0xaa43da(0x40f)](347.616667,129.34,349.023333,119.006667,350.35,108.64),_0x33a95e[_0xaa43da(0x40f)](350.57,106.84,350.78,105.04,0x15f,103.24),_0x33a95e[_0xaa43da(0x40f)](353.772959,102.887322,356.382857,101.733546,358.51,99.92),_0x33a95e[_0xaa43da(0x40f)](360.689247,98.129763,362.646488,96.085235,364.34,93.83),_0x33a95e[_0xaa43da(0x40f)](366.045862,91.599723,367.605781,89.261516,369.01,86.83),_0x33a95e[_0xaa43da(0x40f)](370.424961,84.40499,371.713354,81.908312,372.87,79.35),_0x33a95e[_0xaa43da(0x40f)](371.664016,81.886654,370.328935,84.359892,368.87,86.76),_0x33a95e[_0xaa43da(0x40f)](367.43589,89.167971,365.84583,91.47957,364.11,93.68),_0x33a95e[_0xaa43da(0x40f)](362.402661,95.90958,360.431652,97.92424,358.24,99.68),_0x33a95e[_0xaa43da(0x40f)](356.181381,101.379613,353.679738,102.455215,351.03,102.78),_0x33a95e[_0xaa43da(0x40f)](351.48,99.13,351.94,95.48,352.36,91.78),_0x33a95e['bezierCurveTo'](352.91,87.02,353.45,82.26,353.84,77.48),_0x33a95e['bezierCurveTo'](353.9683,76.612156,354.041779,75.737088,354.06,74.86),_0x33a95e[_0xaa43da(0x35b)](354.06,74.86),_0x33a95e[_0xaa43da(0x40f)](353.767911,76.227538,353.547609,77.609429,353.4,0x4f),_0x33a95e[_0xaa43da(0x35b)](352.83,83.08),_0x33a95e[_0xaa43da(0x35b)](351.66,91.23),_0x33a95e[_0xaa43da(0x40f)](350.86,96.67,350.036667,102.1,349.19,107.52),_0x33a95e['bezierCurveTo'](348.96,0x6d,348.71,110.52,348.47,111.95),_0x33a95e['bezierCurveTo'](346.380877,110.605461,344.506467,108.953553,342.91,107.05),_0x33a95e['bezierCurveTo'](341.207134,104.948594,339.794484,102.627812,338.71,100.15),_0x33a95e[_0xaa43da(0x40f)](337.631198,97.658606,336.803763,95.065754,336.24,92.41),_0x33a95e[_0xaa43da(0x40f)](335.652362,89.750891,335.317538,87.042163,335.24,84.32),_0x33a95e[_0xaa43da(0x40f)](335.239879,87.048686,335.501071,89.771113,336.02,92.45),_0x33a95e[_0xaa43da(0x40f)](336.526469,95.139226,337.296862,97.771962,338.32,100.31),_0x33a95e['bezierCurveTo'](339.364301,102.853909,340.746748,105.245442,342.43,107.42),_0x33a95e[_0xaa43da(0x40f)](344.096692,109.506877,346.080879,111.318967,348.31,112.79),_0x33a95e[_0xaa43da(0x40f)](346.85,121.876667,345.33,130.953333,343.75,140.02),_0x33a95e[_0xaa43da(0x40f)](342.99,144.34,342.21,148.64,341.43,152.95),_0x33a95e[_0xaa43da(0x40f)](338.9,149.65,336.59,146.14,334.35,142.6),_0x33a95e[_0xaa43da(0x40f)](331.84,138.6,329.43,134.6,327.08,130.48),_0x33a95e[_0xaa43da(0x40f)](322.413333,122.313333,317.893333,114.033333,313.52,105.64),_0x33a95e[_0xaa43da(0x40f)](317.68,114.12,321.98,122.51,326.52,130.8),_0x33a95e[_0xaa43da(0x40f)](328.773333,134.946667,331.106667,139.053333,333.52,143.12),_0x33a95e[_0xaa43da(0x40f)](335.853003,147.115524,338.396586,150.984307,341.14,154.71),_0x33a95e[_0xaa43da(0x40f)](338.08,171.43,334.79,188.09,331.14,204.71),_0x33a95e[_0xaa43da(0x35b)](330.93,205.64),_0x33a95e['bezierCurveTo'](330.54,204.77,330.14,203.92,329.7,203.09),_0x33a95e[_0xaa43da(0x35b)](328.46,200.64),_0x33a95e['lineTo'](327.15,198.24),_0x33a95e[_0xaa43da(0x40f)](326.29,196.63,325.4,195.04,324.5,193.46),_0x33a95e[_0xaa43da(0x40f)](323.6,191.88,322.71,190.29,321.78,188.72),_0x33a95e[_0xaa43da(0x40f)](318.13,182.42,314.34,176.21,310.55,0xaa),_0x33a95e[_0xaa43da(0x40f)](302.93,157.6,295.18,145.29,287.3,133.07),_0x33a95e['bezierCurveTo'](294.96,145.43,302.5,157.866667,309.92,170.38),_0x33a95e[_0xaa43da(0x40f)](313.61,176.65,317.28,182.92,320.82,189.27),_0x33a95e[_0xaa43da(0x40f)](321.72,190.85,322.59,192.44,323.46,194.04),_0x33a95e[_0xaa43da(0x40f)](324.33,195.64,325.19,197.23,326.02,198.84),_0x33a95e[_0xaa43da(0x35b)](327.28,201.25),_0x33a95e[_0xaa43da(0x35b)](328.46,203.69),_0x33a95e[_0xaa43da(0x40f)](329.2,205.12,329.79,206.59,330.4,208.05),_0x33a95e[_0xaa43da(0x40f)](328.27,217.66,326.14,227.26,323.83,236.82),_0x33a95e[_0xaa43da(0x40f)](323.31,0xef,322.77,241.17,322.23,243.35),_0x33a95e['bezierCurveTo'](319.523513,237.538154,316.457575,231.900567,313.05,226.47),_0x33a95e['bezierCurveTo'](309.17,220.21,304.89,214.22,300.51,208.33),_0x33a95e[_0xaa43da(0x40f)](296.13,202.44,291.51,196.75,286.74,191.14),_0x33a95e['bezierCurveTo'](281.97,185.53,277.13,180.05,272.07,174.74),_0x33a95e['bezierCurveTo'](277.01,180.16,281.74,185.74,286.36,191.46),_0x33a95e[_0xaa43da(0x40f)](290.98,197.18,295.45,202.95,299.7,208.92),_0x33a95e['bezierCurveTo'](303.95,214.89,308.06,220.92,311.76,227.24),_0x33a95e[_0xaa43da(0x40f)](315.459615,233.407716,318.695213,239.842143,321.44,246.49),_0x33a95e['bezierCurveTo'](319.56,253.903333,317.56,261.293333,315.44,268.66),_0x33a95e[_0xaa43da(0x35b)](311.15,283.19),_0x33a95e[_0xaa43da(0x40f)](310.43586,280.708811,309.577739,278.271346,308.58,275.89),_0x33a95e[_0xaa43da(0x40f)](307.125264,272.474241,305.455242,269.154237,303.58,265.95),_0x33a95e[_0xaa43da(0x40f)](299.85838,259.571158,295.67733,253.471705,291.07,247.7),_0x33a95e[_0xaa43da(0x40f)](286.51,241.91,281.65,236.37,276.59,231.03),_0x33a95e['bezierCurveTo'](271.53,225.69,266.29,220.53,260.8,215.63),_0x33a95e[_0xaa43da(0x40f)](266.18,220.63,271.29,225.93,276.22,231.37),_0x33a95e[_0xaa43da(0x40f)](281.15,236.81,285.87,242.45,290.27,248.31),_0x33a95e[_0xaa43da(0x40f)](294.711787,254.133096,298.722451,260.272753,302.27,266.68),_0x33a95e['bezierCurveTo'](304.033085,269.865329,305.586386,273.162337,306.92,276.55),_0x33a95e[_0xaa43da(0x40f)](308.270743,279.897749,309.298741,283.366825,309.99,286.91),_0x33a95e['lineTo'](308.34,292.3),_0x33a95e['lineTo'](305.78,0x12c),_0x33a95e[_0xaa43da(0x35b)](303.08,307.79),_0x33a95e['lineTo'](302.38,309.67),_0x33a95e[_0xaa43da(0x40f)](298.932766,303.588345,295.056269,297.760233,290.78,292.23),_0x33a95e[_0xaa43da(0x40f)](286.07,286.23,281.01,280.49,275.78,274.97),_0x33a95e[_0xaa43da(0x40f)](270.55,269.45,264.98,264.22,259.31,259.13),_0x33a95e[_0xaa43da(0x40f)](253.64,254.04,247.81,249.13,241.77,244.52),_0x33a95e[_0xaa43da(0x40f)](247.71,249.27,253.41,254.32,258.97,259.52),_0x33a95e['bezierCurveTo'](264.53,264.72,269.9,270.1,275.05,275.68),_0x33a95e[_0xaa43da(0x40f)](280.2,281.26,285.05,287.09,289.61,293.16),_0x33a95e[_0xaa43da(0x40f)](294.060285,299.171244,298.029271,305.524297,301.48,312.16),_0x33a95e[_0xaa43da(0x35b)](300.23,315.52),_0x33a95e[_0xaa43da(0x35b)](294.37,330.91),_0x33a95e['bezierCurveTo'](291.99,337.05,289.593333,343.18,287.18,349.3),_0x33a95e[_0xaa43da(0x40f)](283.87,347.64,281.89,344.1,279.84,340.74),_0x33a95e[_0xaa43da(0x40f)](277.68,337.04,275.63,333.25,273.58,329.46),_0x33a95e[_0xaa43da(0x35b)](270.51,323.78),_0x33a95e[_0xaa43da(0x40f)](269.42,321.9,268.41,319.98,267.26,318.16),_0x33a95e['lineTo'](265.57,315.39),_0x33a95e[_0xaa43da(0x35b)](263.81,312.67),_0x33a95e[_0xaa43da(0x40f)](262.66,310.84,261.45,309.06,260.24,307.27),_0x33a95e['bezierCurveTo'](255.4,300.13,250.33,293.15,245.14,286.27),_0x33a95e['bezierCurveTo'](239.95,279.39,234.66,272.58,229.25,265.87),_0x33a95e[_0xaa43da(0x40f)](234.53,272.683333,239.693333,279.58,244.74,286.56),_0x33a95e['bezierCurveTo'](249.79,293.56,254.74,300.56,259.41,307.82),_0x33a95e['bezierCurveTo'](260.58,309.63,261.75,311.43,262.86,313.27),_0x33a95e[_0xaa43da(0x35b)](264.55,316.01),_0x33a95e[_0xaa43da(0x35b)](266.18,318.79),_0x33a95e['bezierCurveTo'](267.29,320.63,268.25,322.55,269.29,324.42),_0x33a95e[_0xaa43da(0x35b)](272.29,330.16),_0x33a95e['bezierCurveTo'](274.29,333.99,276.29,337.82,278.36,341.61),_0x33a95e[_0xaa43da(0x40f)](279.408258,343.540652,280.580722,345.40123,281.87,347.18),_0x33a95e[_0xaa43da(0x40f)](282.552636,348.10872,283.345052,348.951501,284.23,349.69),_0x33a95e[_0xaa43da(0x40f)](284.930562,350.256711,285.687936,350.749339,286.49,351.16),_0x33a95e[_0xaa43da(0x40f)](282.943333,360.18,279.36,369.18,275.74,378.16),_0x33a95e['bezierCurveTo'](272.678992,375.756461,269.779399,373.154177,267.06,370.37),_0x33a95e[_0xaa43da(0x40f)](264.050646,367.3051,261.197054,364.091055,258.51,360.74),_0x33a95e[_0xaa43da(0x40f)](253.113167,354.032122,248.104966,347.02064,243.51,339.74),_0x33a95e[_0xaa43da(0x40f)](238.87,332.47,234.51,324.99,230.45,317.4),_0x33a95e[_0xaa43da(0x40f)](226.39,309.81,222.45,302.09,218.9,294.22),_0x33a95e[_0xaa43da(0x40f)](222.31,302.16,226.06,309.95,0xe6,317.63),_0x33a95e[_0xaa43da(0x40f)](233.94,325.31,238.15,332.88,242.66,340.27),_0x33a95e[_0xaa43da(0x40f)](247.134146,347.686959,252.028804,354.841974,257.32,361.7),_0x33a95e[_0xaa43da(0x40f)](259.967844,365.143315,262.791598,368.447708,265.78,371.6),_0x33a95e['bezierCurveTo'](268.633614,374.64481,271.697841,377.485151,274.95,380.1),_0x33a95e['bezierCurveTo'](270.03,392.36,265.07,404.6,260.07,416.82),_0x33a95e[_0xaa43da(0x40f)](257.405305,414.216058,254.944723,411.411128,252.71,408.43),_0x33a95e['bezierCurveTo'](250.19,405.11,247.84,401.65,245.61,398.11),_0x33a95e[_0xaa43da(0x40f)](241.18,391.02,237.18,383.63,233.44,376.11),_0x33a95e[_0xaa43da(0x40f)](229.7,368.59,226.22,360.96,222.93,353.23),_0x33a95e['bezierCurveTo'](219.64,345.5,216.5,337.71,213.62,329.82),_0x33a95e[_0xaa43da(0x40f)](216.34,337.77,219.33,345.63,222.47,353.43),_0x33a95e[_0xaa43da(0x40f)](225.61,361.23,228.95,368.94,232.54,376.55),_0x33a95e[_0xaa43da(0x40f)](236.13,384.16,0xf0,391.64,244.33,398.89),_0x33a95e[_0xaa43da(0x40f)](246.51,402.5,248.81,406.05,251.33,409.47),_0x33a95e[_0xaa43da(0x40f)](253.727855,412.797666,256.40415,415.915549,259.33,418.79),_0x33a95e['bezierCurveTo'](255.15,429.01,250.953333,439.226667,246.74,449.44),_0x33a95e['bezierCurveTo'](244.778777,447.210592,242.996576,444.829866,241.41,442.32),_0x33a95e[_0xaa43da(0x40f)](239.52,439.43,237.79,436.41,236.07,433.4),_0x33a95e[_0xaa43da(0x40f)](232.66,427.34,229.43,421.17,225.97,415.11),_0x33a95e[_0xaa43da(0x40f)](224.25,412.11,222.44,409.11,220.52,406.17),_0x33a95e[_0xaa43da(0x40f)](219.52,404.73,218.52,403.29,217.41,401.94),_0x33a95e[_0xaa43da(0x40f)](216.3,400.59,215.2,399.27,214.22,397.83),_0x33a95e[_0xaa43da(0x40f)](212.202342,395.007135,210.505222,391.96842,209.16,388.77),_0x33a95e[_0xaa43da(0x40f)](207.794006,385.579613,206.881803,382.213553,206.45,378.77),_0x33a95e[_0xaa43da(0x40f)](206.794245,382.246821,207.629204,385.657359,208.93,388.9),_0x33a95e[_0xaa43da(0x40f)](210.205438,392.159366,211.842331,395.265438,213.81,398.16),_0x33a95e['bezierCurveTo'](214.75,399.62,215.9,400.98,216.92,402.37),_0x33a95e[_0xaa43da(0x40f)](217.94,403.76,218.92,405.18,219.92,406.62),_0x33a95e[_0xaa43da(0x40f)](221.76,409.56,223.496667,412.56,225.13,415.62),_0x33a95e[_0xaa43da(0x40f)](228.43,421.74,231.51,427.98,234.79,434.14),_0x33a95e[_0xaa43da(0x40f)](236.44,437.21,238.1,440.29,239.96,443.27),_0x33a95e['bezierCurveTo'](241.69116,446.199586,243.700435,448.955642,245.96,451.5),_0x33a95e[_0xaa43da(0x40f)](245.73,452.05,245.51,452.61,245.28,453.16),_0x33a95e[_0xaa43da(0x35b)](235.65,476.16),_0x33a95e[_0xaa43da(0x40f)](233.234419,473.928115,231.116935,471.393856,229.35,468.62),_0x33a95e[_0xaa43da(0x35b)](227.86,466.23),_0x33a95e[_0xaa43da(0x35b)](226.53,463.74),_0x33a95e[_0xaa43da(0x40f)](226.07,462.92,225.7,462.05,225.29,461.2),_0x33a95e[_0xaa43da(0x40f)](224.88,460.35,224.47,459.5,224.12,458.62),_0x33a95e['bezierCurveTo'](222.637911,455.133693,221.349287,451.568275,220.26,447.94),_0x33a95e[_0xaa43da(0x40f)](219.17,444.3,218.19,440.63,217.46,436.94),_0x33a95e[_0xaa43da(0x40f)](218.03,440.71,218.84,444.43,219.78,448.12),_0x33a95e[_0xaa43da(0x40f)](220.651169,451.803459,221.726156,455.435715,0xdf,0x1cb),_0x33a95e['bezierCurveTo'](223.31,459.91,223.69,460.79,224.06,461.67),_0x33a95e['bezierCurveTo'](224.43,462.55,224.77,463.45,225.21,464.3),_0x33a95e[_0xaa43da(0x35b)](226.46,466.9),_0x33a95e[_0xaa43da(0x35b)](227.87,469.42),_0x33a95e[_0xaa43da(0x40f)](229.710692,472.611692,231.993268,475.527195,234.65,478.08),_0x33a95e[_0xaa43da(0x35b)](225.34,500.28),_0x33a95e[_0xaa43da(0x40f)](223.567784,498.932077,222.096411,497.229099,221.02,495.28),_0x33a95e[_0xaa43da(0x40f)](219.682772,492.949719,218.654152,490.455485,217.96,487.86),_0x33a95e[_0xaa43da(0x40f)](217.240155,485.235686,216.71539,482.561726,216.39,479.86),_0x33a95e[_0xaa43da(0x40f)](216.048256,477.146861,215.881245,474.414563,215.89,471.68),_0x33a95e[_0xaa43da(0x40f)](215.715019,474.420543,215.715019,477.169457,215.89,479.91),_0x33a95e['bezierCurveTo'](216.051088,482.664265,216.422166,485.402217,0xd9,488.1),_0x33a95e['bezierCurveTo'](217.563246,490.841192,218.473932,493.49932,219.71,496.01),_0x33a95e['bezierCurveTo'](220.864811,498.365539,222.524089,500.437928,224.57,502.08),_0x33a95e['lineTo'](194.12,574.71),_0x33a95e[_0xaa43da(0x40f)](193.118154,577.053783,193.766894,579.777055,195.717847,581.41742),_0x33a95e[_0xaa43da(0x40f)](197.6688,583.057785,200.463015,583.229356,202.6,581.84),_0x33a95e[_0xaa43da(0x40f)](203.294888,581.395101,203.885101,580.804888,204.33,580.11),_0x33a95e['bezierCurveTo'](204.537742,579.764552,204.718287,579.403462,204.87,579.03),_0x33a95e[_0xaa43da(0x35b)](205.26,578.03),_0x33a95e[_0xaa43da(0x35b)](211.54,562.23),_0x33a95e[_0xaa43da(0x35b)](224.09,530.63),_0x33a95e['lineTo'](233.09,507.93),_0x33a95e['bezierCurveTo'](237.58,508.07,242.09,508.14,246.55,507.93),_0x33a95e[_0xaa43da(0x40f)](251.01,507.72,255.72,507.44,260.27,506.93),_0x33a95e['bezierCurveTo'](264.82,506.42,269.38,505.81,273.89,505.03),_0x33a95e[_0xaa43da(0x40f)](278.4,504.25,282.89,503.32,287.31,502.14),_0x33a95e[_0xaa43da(0x40f)](282.85,503.14,278.31,503.91,273.81,504.53),_0x33a95e[_0xaa43da(0x40f)](269.31,505.15,264.74,505.63,260.19,505.93),_0x33a95e['bezierCurveTo'](255.64,506.23,251.08,506.42,246.52,506.4),_0x33a95e[_0xaa43da(0x40f)](242.29,506.4,238.07,506.21,233.87,505.94),_0x33a95e[_0xaa43da(0x35b)](242.87,483.17),_0x33a95e[_0xaa43da(0x40f)](247.748633,484.67415,252.779669,485.630046,257.87,486.02),_0x33a95e[_0xaa43da(0x35b)](261.81,486.28),_0x33a95e[_0xaa43da(0x35b)](265.75,486.37),_0x33a95e[_0xaa43da(0x40f)](267.06,486.37,268.38,486.37,269.69,486.37),_0x33a95e[_0xaa43da(0x40f)](0x10f,486.37,272.31,486.37,273.62,486.24),_0x33a95e[_0xaa43da(0x40f)](278.86,486.02,284.08,485.46,289.26,484.78),_0x33a95e['bezierCurveTo'](294.44,484.1,299.61,483.21,304.72,482.07),_0x33a95e[_0xaa43da(0x40f)](299.58,483.07,294.4,483.74,289.21,484.28),_0x33a95e[_0xaa43da(0x40f)](284.02,484.82,278.8,485.19,273.59,485.28),_0x33a95e[_0xaa43da(0x40f)](272.29,485.34,270.98,485.28,269.68,485.28),_0x33a95e[_0xaa43da(0x40f)](268.38,485.28,267.08,485.28,265.78,485.18),_0x33a95e[_0xaa43da(0x35b)](261.89,484.97),_0x33a95e[_0xaa43da(0x35b)](258.02,484.58),_0x33a95e[_0xaa43da(0x40f)](253.124193,484.047191,248.301856,482.977424,243.64,481.39),_0x33a95e[_0xaa43da(0x35b)](249.19,467.39),_0x33a95e[_0xaa43da(0x40f)](250.19,464.99,251.09,462.58,252.04,460.18),_0x33a95e[_0xaa43da(0x35b)](257.36,461.07),_0x33a95e[_0xaa43da(0x35b)](260.36,461.57),_0x33a95e['bezierCurveTo'](261.36,461.72,262.36,461.78,263.36,461.89),_0x33a95e['lineTo'](269.36,462.48),_0x33a95e[_0xaa43da(0x40f)](271.36,462.61,273.36,462.64,275.36,462.73),_0x33a95e[_0xaa43da(0x35b)](278.36,462.84),_0x33a95e[_0xaa43da(0x40f)](279.36,462.84,280.36,462.84,281.36,462.79),_0x33a95e['lineTo'](287.36,462.65),_0x33a95e[_0xaa43da(0x40f)](291.36,462.34,295.36,462.15,299.26,461.58),_0x33a95e['bezierCurveTo'](307.162025,460.627802,314.987783,459.124133,322.68,457.08),_0x33a95e[_0xaa43da(0x40f)](330.372552,455.087162,337.898555,452.499367,345.19,449.34),_0x33a95e[_0xaa43da(0x40f)](337.845928,452.34203,330.279858,454.769325,322.56,456.6),_0x33a95e[_0xaa43da(0x40f)](314.859048,458.475463,307.03677,459.812033,299.15,460.6),_0x33a95e[_0xaa43da(0x40f)](295.22,461.08,291.26,461.18,287.32,461.41),_0x33a95e[_0xaa43da(0x35b)](281.39,461.41),_0x33a95e[_0xaa43da(0x40f)](280.39,461.41,279.39,461.41,278.39,461.41),_0x33a95e[_0xaa43da(0x35b)](275.44,461.24),_0x33a95e['bezierCurveTo'](273.44,461.11,271.49,461.04,269.53,460.87),_0x33a95e[_0xaa43da(0x35b)](263.65,460.16),_0x33a95e[_0xaa43da(0x40f)](262.65,460.03,261.65,459.95,260.72,459.79),_0x33a95e[_0xaa43da(0x35b)](257.81,459.23),_0x33a95e[_0xaa43da(0x35b)](252.92,458.31),_0x33a95e[_0xaa43da(0x40f)](255.886667,450.803333,258.83,443.283333,261.75,435.75),_0x33a95e[_0xaa43da(0x35b)](264.75,427.87),_0x33a95e[_0xaa43da(0x35b)](271.61,0x1ac),_0x33a95e[_0xaa43da(0x35b)](275.28,428.06),_0x33a95e[_0xaa43da(0x40f)](276.5,428.06,277.72,427.99,278.95,427.95),_0x33a95e[_0xaa43da(0x35b)](286.28,427.7),_0x33a95e['lineTo'](293.59,427.1),_0x33a95e['lineTo'](297.24,426.8),_0x33a95e[_0xaa43da(0x35b)](300.88,426.33),_0x33a95e['bezierCurveTo'](303.3,426.01,305.73,425.73,308.15,425.38),_0x33a95e[_0xaa43da(0x40f)](312.96,424.55,317.79,423.82,322.56,422.75),_0x33a95e[_0xaa43da(0x40f)](332.11993,420.773435,341.569582,418.296698,350.87,415.33),_0x33a95e[_0xaa43da(0x40f)](360.149488,412.428191,369.248783,408.978807,378.12,0x195),_0x33a95e[_0xaa43da(0x40f)](369.169758,408.852543,359.996642,412.16515,350.65,414.92),_0x33a95e[_0xaa43da(0x40f)](341.325156,417.724595,331.858624,420.034482,322.29,421.84),_0x33a95e[_0xaa43da(0x40f)](317.53,422.84,312.7,423.47,307.9,424.21),_0x33a95e[_0xaa43da(0x40f)](305.49,424.52,303.07,424.76,300.66,425.03),_0x33a95e[_0xaa43da(0x35b)](297.03,425.43),_0x33a95e[_0xaa43da(0x35b)](293.4,425.68),_0x33a95e[_0xaa43da(0x35b)](286.13,426.14),_0x33a95e[_0xaa43da(0x35b)](278.85,426.27),_0x33a95e[_0xaa43da(0x40f)](277.64,426.27,276.42,426.33,275.21,426.27),_0x33a95e[_0xaa43da(0x35b)](271.57,426.14),_0x33a95e[_0xaa43da(0x35b)](265.44,425.92),_0x33a95e[_0xaa43da(0x35b)](273.9,404.05),_0x33a95e[_0xaa43da(0x35b)](276.44,397.42),_0x33a95e[_0xaa43da(0x40f)](281.770413,397.776303,287.120775,397.70608,292.44,397.21),_0x33a95e[_0xaa43da(0x40f)](297.9039,396.661021,303.32566,395.752383,308.67,394.49),_0x33a95e['bezierCurveTo'](319.304232,391.902545,329.68049,388.351187,339.67,383.88),_0x33a95e[_0xaa43da(0x40f)](349.660792,379.456497,359.372192,374.427141,368.75,368.82),_0x33a95e['bezierCurveTo'](378.143829,363.260838,387.208908,357.16403,395.9,350.56),_0x33a95e['bezierCurveTo'](387.113785,357.02045,377.965537,362.973489,368.5,368.39),_0x33a95e[_0xaa43da(0x40f)](359.068327,373.847301,349.313675,378.726297,339.29,0x17f),_0x33a95e[_0xaa43da(0x40f)](329.283202,387.286697,318.907086,390.653914,308.29,393.06),_0x33a95e[_0xaa43da(0x40f)](302.996377,394.226849,297.631313,395.041964,292.23,395.5),_0x33a95e['bezierCurveTo'](287.210705,395.884995,282.169295,395.884995,277.15,395.5),_0x33a95e[_0xaa43da(0x40f)](280.603333,386.466667,284.033333,377.43,287.44,368.39),_0x33a95e['bezierCurveTo'](291.168819,368.27132,294.884664,367.890379,298.56,367.25),_0x33a95e[_0xaa43da(0x40f)](302.456875,366.589762,306.315704,365.721859,310.12,364.65),_0x33a95e[_0xaa43da(0x40f)](317.703022,362.515407,325.149958,359.924007,332.42,356.89),_0x33a95e[_0xaa43da(0x40f)](339.7,353.89,346.83,350.58,353.85,347.05),_0x33a95e[_0xaa43da(0x40f)](360.87,343.52,367.77,339.76,374.5,335.72),_0x33a95e['bezierCurveTo'](367.69,339.62,360.7,343.21,353.63,346.6),_0x33a95e['bezierCurveTo'](346.56,349.99,339.36,353.14,332.05,355.96),_0x33a95e[_0xaa43da(0x40f)](324.766107,358.820936,317.315836,361.238684,309.74,363.2),_0x33a95e[_0xaa43da(0x40f)](305.963906,364.178842,302.138527,364.956602,298.28,365.53),_0x33a95e[_0xaa43da(0x40f)](294.938345,366.030666,291.568185,366.317915,288.19,366.39),_0x33a95e[_0xaa43da(0x40f)](291.443333,357.723333,294.666667,349.056667,297.86,340.39),_0x33a95e['bezierCurveTo'](298.49,338.79,299.06,337.16,299.66,335.53)),_0x33a95e[_0xaa43da(0x1cf)](),_0x33a95e[_0xaa43da(0x1b7)](),_0x33a95e[_0xaa43da(0x235)](),this['_baseTexture'][_0xaa43da(0xb5)]();},Bitmap['prototype'][_0x217234(0xe5)]=function(_0x1dd344,_0x39e133,_0x542d1b){const _0x2d9ec4=_0x217234,_0xc65ba9=this[_0x2d9ec4(0x469)];_0x1dd344=_0x1dd344||'#bbbbbb',_0x39e133=_0x39e133||_0x2d9ec4(0x268),_0x542d1b=_0x542d1b||_0x2d9ec4(0x351),_0xc65ba9[_0x2d9ec4(0xe3)](),_0xc65ba9[_0x2d9ec4(0x134)]=_0x1dd344,(_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9['lineWidth']=0.695966,_0xc65ba9['moveTo'](32.118356,32.638166),_0xc65ba9[_0x2d9ec4(0x40f)](36.363751,64.026251,27.872961,82.886942,27.872961,82.886942)),_0xc65ba9['fill'](),_0xc65ba9['stroke'](),_0xc65ba9[_0x2d9ec4(0x134)]=_0x39e133,(_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9['moveTo'](30.16965,77.249614),_0xc65ba9['bezierCurveTo'](31.491986,78.154371,30.16965,83.443715,27.107398,89.081043),_0xc65ba9[_0x2d9ec4(0x40f)](24.045146,94.718371,20.495717,98.546186,19.173381,97.64143),_0xc65ba9['bezierCurveTo'](17.851045,96.736674,19.173381,91.447329,22.235633,85.810001),_0xc65ba9[_0x2d9ec4(0x40f)](25.297885,80.172673,28.847314,76.344858,30.16965,77.249614)),_0xc65ba9['fill'](),_0xc65ba9['stroke'](),_0xc65ba9[_0x2d9ec4(0x134)]=_0x542d1b,_0xc65ba9[_0x2d9ec4(0x365)]=_0x542d1b,_0xc65ba9[_0x2d9ec4(0x332)]=0x5,(_0xc65ba9['save'](),_0xc65ba9['transform'](0.695966,0x0,0x0,0.695966,181.842,123.051),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](-242.3,-157.8),_0xc65ba9[_0x2d9ec4(0x35b)](-214.1,-130.5),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0xe3)](),_0xc65ba9[_0x2d9ec4(0x28a)](0.31266,0x0,0x0,0.32058,88.64,390.11),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9['moveTo'](-1050.5,-0x6a5),_0xc65ba9['bezierCurveTo'](-1079.4,-1729.8,-1102.2,-1750.4,-1078.2,-1725.7),_0xc65ba9[_0x2d9ec4(0x40f)](-1054.1,-0x6a5,-1052.9,-0x6a5,-1050.5,-0x6a5),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9['stroke'](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](-1048.5,-0x6a7),_0xc65ba9[_0x2d9ec4(0x40f)](-1077.4,-1731.8,-1100.2,-1752.4,-1076.2,-1727.7),_0xc65ba9['bezierCurveTo'](-1052.1,-0x6a7,-1050.9,-0x6a7,-1048.5,-0x6a7),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](-1050.5,-0x6a7),_0xc65ba9[_0x2d9ec4(0x40f)](-1079.4,-1731.8,-1102.2,-1752.4,-1078.2,-1727.7),_0xc65ba9[_0x2d9ec4(0x40f)](-1054.1,-0x6a7,-1052.9,-0x6a7,-1050.5,-0x6a7),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9['restore'](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9['moveTo'](-230.9,-162.8),_0xc65ba9[_0x2d9ec4(0x35b)](-215.2,-132.2),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0xe3)](),_0xc65ba9[_0x2d9ec4(0x28a)](0.22445,0.070054,-0.053362,0.28457,132.9,389.45),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](-1959.5,-1448.4),_0xc65ba9[_0x2d9ec4(0x40f)](-1988.4,-1477.2,-2011.2,-1497.8,-1987.2,-1473.1),_0xc65ba9[_0x2d9ec4(0x40f)](-1963.1,-1448.4,-1961.9,-1448.4,-1959.5,-1448.4),_0xc65ba9['fill'](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9['beginPath'](),_0xc65ba9['moveTo'](-1957.5,-1450.4),_0xc65ba9['bezierCurveTo'](-1986.4,-1479.2,-2009.2,-1499.8,-1985.2,-1475.1),_0xc65ba9[_0x2d9ec4(0x40f)](-1961.1,-1450.4,-1959.9,-1450.4,-1957.5,-1450.4),_0xc65ba9['fill'](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](-1959.5,-1450.4),_0xc65ba9[_0x2d9ec4(0x40f)](-1988.4,-1479.2,-2011.2,-1499.8,-1987.2,-1475.1),_0xc65ba9[_0x2d9ec4(0x40f)](-1963.1,-1450.4,-1961.9,-1450.4,-1959.5,-1450.4),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9['stroke'](),_0xc65ba9['restore'](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9['moveTo'](-217.8,-162.7),_0xc65ba9['lineTo'](-216.1,-133.5),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9['save'](),_0xc65ba9[_0x2d9ec4(0x28a)](0.22089,0.17769,-0.21484,0.15456,209.48,425.48),_0xc65ba9['beginPath'](),_0xc65ba9[_0x2d9ec4(0x2df)](-2652.9,-738.7),_0xc65ba9[_0x2d9ec4(0x40f)](-2681.8,-767.5,-2704.6,-788.1,-2680.6,-763.4),_0xc65ba9[_0x2d9ec4(0x40f)](-2656.5,-738.7,-2655.3,-738.7,-2652.9,-738.7),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](-2650.9,-740.7),_0xc65ba9['bezierCurveTo'](-2679.8,-769.5,-2702.6,-790.1,-2678.6,-765.4),_0xc65ba9[_0x2d9ec4(0x40f)](-2654.5,-740.7,-2653.3,-740.7,-2650.9,-740.7),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](-2652.9,-740.7),_0xc65ba9['bezierCurveTo'](-2681.8,-769.5,-2704.6,-790.1,-2680.6,-765.4),_0xc65ba9[_0x2d9ec4(0x40f)](-2656.5,-740.7,-2655.3,-740.7,-2652.9,-740.7),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9['stroke'](),_0xc65ba9['restore'](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](-196.4,-158.1),_0xc65ba9[_0x2d9ec4(0x35b)](-216.8,-133.7),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9['save'](),_0xc65ba9[_0x2d9ec4(0x28a)](-0.002675,0.26549,-0.23659,0.00452,270.1,476.54),_0xc65ba9['beginPath'](),_0xc65ba9[_0x2d9ec4(0x2df)](-2416.6,2007.2),_0xc65ba9[_0x2d9ec4(0x40f)](-2445.5,1978.4,-2468.3,1957.8,-2444.3,1982.5),_0xc65ba9[_0x2d9ec4(0x40f)](-2420.2,2007.2,-0x973,2007.2,-2416.6,2007.2),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9['beginPath'](),_0xc65ba9[_0x2d9ec4(0x2df)](-2414.6,2005.2),_0xc65ba9[_0x2d9ec4(0x40f)](-2443.5,1976.4,-2466.3,1955.8,-2442.3,1980.5),_0xc65ba9[_0x2d9ec4(0x40f)](-2418.2,2005.2,-0x971,2005.2,-2414.6,2005.2),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9['moveTo'](-2416.6,2005.2),_0xc65ba9[_0x2d9ec4(0x40f)](-2445.5,1976.4,-2468.3,1955.8,-2444.3,1980.5),_0xc65ba9[_0x2d9ec4(0x40f)](-2420.2,2005.2,-0x973,2005.2,-2416.6,2005.2),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9['restore'](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9['moveTo'](-246.9,-141.7),_0xc65ba9['lineTo'](-214.2,-131.4),_0xc65ba9['fill'](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0xe3)](),_0xc65ba9['transform'](0.24275,-0.15327,0.12697,0.28299,44.094,441.92),_0xc65ba9['beginPath'](),_0xc65ba9[_0x2d9ec4(0x2df)](-85.8,-2104.9),_0xc65ba9[_0x2d9ec4(0x40f)](-114.7,-2133.7,-137.5,-2154.3,-113.5,-2129.6),_0xc65ba9['bezierCurveTo'](-89.4,-2104.9,-88.2,-2104.9,-85.8,-2104.9),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](-83.8,-2106.9),_0xc65ba9[_0x2d9ec4(0x40f)](-112.7,-2135.7,-135.5,-2156.3,-111.5,-2131.6),_0xc65ba9[_0x2d9ec4(0x40f)](-87.4,-2106.9,-86.2,-2106.9,-83.8,-2106.9),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9['moveTo'](-85.8,-2106.9),_0xc65ba9['bezierCurveTo'](-114.7,-2135.7,-137.5,-2156.3,-113.5,-2131.6),_0xc65ba9[_0x2d9ec4(0x40f)](-89.4,-2106.9,-88.2,-2106.9,-85.8,-2106.9),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x235)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](-185.8,-142.3),_0xc65ba9[_0x2d9ec4(0x35b)](-218.5,-0x84),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9['save'](),_0xc65ba9[_0x2d9ec4(0x28a)](-0.24275,-0.15327,-0.12697,0.28299,270.99,441.28),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](2314.6,-804.9),_0xc65ba9['bezierCurveTo'](2285.7,-833.7,2262.9,-854.3,2286.9,-829.6),_0xc65ba9['bezierCurveTo'](0x907,-804.9,2312.2,-804.9,2314.6,-804.9),_0xc65ba9['fill'](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9['moveTo'](2316.6,-806.9),_0xc65ba9[_0x2d9ec4(0x40f)](2287.7,-835.7,2264.9,-856.3,2288.9,-831.6),_0xc65ba9[_0x2d9ec4(0x40f)](0x909,-806.9,2314.2,-806.9,2316.6,-806.9),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9['stroke'](),_0xc65ba9['beginPath'](),_0xc65ba9['moveTo'](2314.6,-806.9),_0xc65ba9['bezierCurveTo'](2285.7,-835.7,2262.9,-856.3,2286.9,-831.6),_0xc65ba9[_0x2d9ec4(0x40f)](0x907,-806.9,2312.2,-806.9,2314.6,-806.9),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x235)](),_0xc65ba9['beginPath'](),_0xc65ba9['moveTo'](-231.8,-129.4),_0xc65ba9[_0x2d9ec4(0x35b)](-213.2,-134.7),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0xe3)](),_0xc65ba9[_0x2d9ec4(0x28a)](0.023653,-0.076388,0.19356,0.018706,63.365,546.69),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](8238.8,-2522.6),_0xc65ba9[_0x2d9ec4(0x40f)](8209.9,-2551.4,8187.1,-0xa0c,8211.1,-2547.3),_0xc65ba9[_0x2d9ec4(0x40f)](8235.2,-2522.6,8236.4,-2522.6,8238.8,-2522.6),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9['beginPath'](),_0xc65ba9[_0x2d9ec4(0x2df)](8240.8,-2524.6),_0xc65ba9[_0x2d9ec4(0x40f)](8211.9,-2553.4,8189.1,-0xa0e,8213.1,-2549.3),_0xc65ba9[_0x2d9ec4(0x40f)](8237.2,-2524.6,8238.4,-2524.6,8240.8,-2524.6),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](8238.8,-2524.6),_0xc65ba9[_0x2d9ec4(0x40f)](8209.9,-2553.4,8187.1,-0xa0e,8211.1,-2549.3),_0xc65ba9[_0x2d9ec4(0x40f)](8235.2,-2524.6,8236.4,-2524.6,8238.8,-2524.6),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x235)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](-199.6,-0x80),_0xc65ba9[_0x2d9ec4(0x35b)](-218.2,-133.3),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9['save'](),_0xc65ba9[_0x2d9ec4(0x28a)](-0.023653,-0.076388,-0.19356,0.018706,252.97,548.1),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](9157.3,1228.3),_0xc65ba9[_0x2d9ec4(0x40f)](9128.4,1199.5,9105.6,1178.9,9129.6,1203.6),_0xc65ba9[_0x2d9ec4(0x40f)](9153.7,1228.3,9154.9,1228.3,9157.3,1228.3),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9['beginPath'](),_0xc65ba9['moveTo'](9159.3,1226.3),_0xc65ba9[_0x2d9ec4(0x40f)](9130.4,1197.5,9107.6,1176.9,9131.6,1201.6),_0xc65ba9[_0x2d9ec4(0x40f)](9155.7,1226.3,9156.9,1226.3,9159.3,1226.3),_0xc65ba9['fill'](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](9157.3,1226.3),_0xc65ba9['bezierCurveTo'](9128.4,1197.5,9105.6,1176.9,9129.6,1201.6),_0xc65ba9[_0x2d9ec4(0x40f)](9153.7,1226.3,9154.9,1226.3,9157.3,1226.3),_0xc65ba9[_0x2d9ec4(0x235)](),_0xc65ba9['beginPath'](),_0xc65ba9[_0x2d9ec4(0x2df)](-198.5,-126.8),_0xc65ba9[_0x2d9ec4(0x35b)](-217.1,-132.1),_0xc65ba9['fill'](),_0xc65ba9['stroke'](),_0xc65ba9[_0x2d9ec4(0xe3)](),_0xc65ba9[_0x2d9ec4(0x28a)](-0.023653,-0.076388,-0.19356,0.018706,254.11,549.29),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9['moveTo'](9157.3,1228.3),_0xc65ba9[_0x2d9ec4(0x40f)](9128.4,1199.5,9105.6,1178.9,9129.6,1203.6),_0xc65ba9['bezierCurveTo'](9153.7,1228.3,9154.9,1228.3,9157.3,1228.3),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](9159.3,1226.3),_0xc65ba9[_0x2d9ec4(0x40f)](9130.4,1197.5,9107.6,1176.9,9131.6,1201.6),_0xc65ba9[_0x2d9ec4(0x40f)](9155.7,1226.3,9156.9,1226.3,9159.3,1226.3),_0xc65ba9['fill'](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](9157.3,1226.3),_0xc65ba9[_0x2d9ec4(0x40f)](9128.4,1197.5,9105.6,1176.9,9129.6,1201.6),_0xc65ba9[_0x2d9ec4(0x40f)](9153.7,1226.3,9154.9,1226.3,9157.3,1226.3),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x235)](),_0xc65ba9['beginPath'](),_0xc65ba9[_0x2d9ec4(0x2df)](-215.6,-132.9),_0xc65ba9[_0x2d9ec4(0x35b)](-215.6,-128.2),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](-206.5,-160.9),_0xc65ba9[_0x2d9ec4(0x35b)](-215.4,-134.6),_0xc65ba9['fill'](),_0xc65ba9['stroke'](),_0xc65ba9[_0x2d9ec4(0xe3)](),_0xc65ba9[_0x2d9ec4(0x28a)](0.14296,0.24045,-0.25629,0.054271,247.7,457.79),_0xc65ba9['beginPath'](),_0xc65ba9[_0x2d9ec4(0x2df)](-2632.7,307.2),_0xc65ba9['bezierCurveTo'](-2661.6,278.4,-2684.4,257.8,-2660.4,282.5),_0xc65ba9[_0x2d9ec4(0x40f)](-2636.3,307.2,-2635.1,307.2,-2632.7,307.2),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9['beginPath'](),_0xc65ba9[_0x2d9ec4(0x2df)](-2630.7,305.2),_0xc65ba9[_0x2d9ec4(0x40f)](-2659.6,276.4,-2682.4,255.8,-2658.4,280.5),_0xc65ba9[_0x2d9ec4(0x40f)](-2634.3,305.2,-2633.1,305.2,-2630.7,305.2),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](-2632.7,305.2),_0xc65ba9[_0x2d9ec4(0x40f)](-2661.6,276.4,-2684.4,255.8,-2660.4,280.5),_0xc65ba9[_0x2d9ec4(0x40f)](-2636.3,305.2,-2635.1,305.2,-2632.7,305.2),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x235)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9['moveTo'](-188.1,-148.7),_0xc65ba9[_0x2d9ec4(0x35b)](-215.9,-0x87),_0xc65ba9['fill'](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9['save'](),_0xc65ba9[_0x2d9ec4(0x28a)](-0.097581,0.23264,-0.2229,-0.086065,286.11,525.8),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9['moveTo'](-1809.9,2931.2),_0xc65ba9[_0x2d9ec4(0x40f)](-1838.8,2902.4,-1861.6,2881.8,-1837.6,2906.5),_0xc65ba9[_0x2d9ec4(0x40f)](-1813.5,2931.2,-1812.3,2931.2,-1809.9,2931.2),_0xc65ba9['fill'](),_0xc65ba9['stroke'](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](-1807.9,2929.2),_0xc65ba9['bezierCurveTo'](-1836.8,2900.4,-1859.6,2879.8,-1835.6,2904.5),_0xc65ba9[_0x2d9ec4(0x40f)](-1811.5,2929.2,-1810.3,2929.2,-1807.9,2929.2),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9['stroke'](),_0xc65ba9['beginPath'](),_0xc65ba9[_0x2d9ec4(0x2df)](-1809.9,2929.2),_0xc65ba9['bezierCurveTo'](-1838.8,2900.4,-1861.6,2879.8,-1837.6,2904.5),_0xc65ba9[_0x2d9ec4(0x40f)](-1813.5,2929.2,-1812.3,2929.2,-1809.9,2929.2),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x235)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9['moveTo'](-183.8,-130.7),_0xc65ba9[_0x2d9ec4(0x35b)](-218.1,-134.1),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0xe3)](),_0xc65ba9['transform'](-0.17214,-0.22728,-0.2201,0.20074,299.56,495.11),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](2783.6,33.2),_0xc65ba9[_0x2d9ec4(0x40f)](2754.7,4.4,2731.9,-16.2,2755.9,8.5),_0xc65ba9['bezierCurveTo'](0xadc,33.2,2781.2,33.2,2783.6,33.2),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9['stroke'](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](2785.6,31.2),_0xc65ba9['bezierCurveTo'](2756.7,2.4,2733.9,-18.2,2757.9,6.5),_0xc65ba9[_0x2d9ec4(0x40f)](0xade,31.2,2783.2,31.2,2785.6,31.2),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9['stroke'](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9['moveTo'](2783.6,31.2),_0xc65ba9['bezierCurveTo'](2754.7,2.4,2731.9,-18.2,2755.9,6.5),_0xc65ba9['bezierCurveTo'](0xadc,31.2,2781.2,31.2,2783.6,31.2),_0xc65ba9['fill'](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x235)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](-231.5,-136.9),_0xc65ba9[_0x2d9ec4(0x35b)](-212.2,-134.5),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0xe3)](),_0xc65ba9[_0x2d9ec4(0x28a)](0.049479,-0.058228,0.17433,0.090128,67.628,508.86),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](5867.7,-3370.8),_0xc65ba9['bezierCurveTo'](5838.8,-3399.6,0x16b8,-3420.2,0x16d0,-3395.5),_0xc65ba9['bezierCurveTo'](0x16e8,-3370.8,5865.3,-3370.8,5867.7,-3370.8),_0xc65ba9['fill'](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](5869.7,-3372.8),_0xc65ba9[_0x2d9ec4(0x40f)](5840.8,-3401.6,0x16ba,-3422.2,0x16d2,-3397.5),_0xc65ba9[_0x2d9ec4(0x40f)](0x16ea,-3372.8,5867.3,-3372.8,5869.7,-3372.8),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9['beginPath'](),_0xc65ba9['moveTo'](5867.7,-3372.8),_0xc65ba9['bezierCurveTo'](5838.8,-3401.6,0x16b8,-3422.2,0x16d0,-3397.5),_0xc65ba9[_0x2d9ec4(0x40f)](0x16e8,-3372.8,5865.3,-3372.8,5867.7,-3372.8),_0xc65ba9['fill'](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x235)](),_0xc65ba9['beginPath'](),_0xc65ba9[_0x2d9ec4(0x2df)](-201.9,-123.4),_0xc65ba9[_0x2d9ec4(0x35b)](-217.4,-135.2),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0xe3)](),_0xc65ba9[_0x2d9ec4(0x28a)](0.005235,-0.076232,-0.18773,-0.057202,244.46,582.26),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](7327.3,2589.8),_0xc65ba9[_0x2d9ec4(0x40f)](7298.4,0xa01,7275.6,2540.4,7299.6,2565.1),_0xc65ba9['bezierCurveTo'](7323.6,2589.8,7324.9,2589.8,7327.3,2589.8),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](7329.3,2587.8),_0xc65ba9[_0x2d9ec4(0x40f)](7300.4,0x9ff,7277.6,2538.4,7301.6,2563.1),_0xc65ba9[_0x2d9ec4(0x40f)](7325.6,2587.8,7326.9,2587.8,7329.3,2587.8),_0xc65ba9['fill'](),_0xc65ba9['stroke'](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](7327.3,2587.8),_0xc65ba9['bezierCurveTo'](7298.4,0x9ff,7275.6,2538.4,7299.6,2563.1),_0xc65ba9[_0x2d9ec4(0x40f)](7323.6,2587.8,7324.9,2587.8,7327.3,2587.8),_0xc65ba9['fill'](),_0xc65ba9[_0x2d9ec4(0x1b7)](),_0xc65ba9[_0x2d9ec4(0x235)](),_0xc65ba9[_0x2d9ec4(0x153)](),_0xc65ba9[_0x2d9ec4(0x2df)](-0xd7,-133.8),_0xc65ba9[_0x2d9ec4(0x35b)](-216.7,-129.6),_0xc65ba9[_0x2d9ec4(0x1cf)](),_0xc65ba9['stroke']()),_0xc65ba9[_0x2d9ec4(0x235)](),this[_0x2d9ec4(0x504)][_0x2d9ec4(0xb5)]();},Bitmap['prototype'][_0x217234(0x191)]=function(_0x29242f,_0x1098a6,_0x124cf8){const _0x5da1c1=_0x217234,_0x5e2c88=this[_0x5da1c1(0x125)];_0x5e2c88[_0x5da1c1(0xe3)](),_0x5e2c88[_0x5da1c1(0x3de)](_0x29242f-_0x124cf8,_0x1098a6-_0x124cf8);const _0x379d76=0x168*(Math['PI']/0xb4),_0x262b75=ColorManager['WEATHER_PASTEL_COLORS'],_0x3a72e2=_0x262b75[Math['floor'](Math[_0x5da1c1(0xc9)]()*_0x262b75['length'])];let _0x39d0be=ColorManager['adjustHexColor'](_0x3a72e2,0.85);_0x39d0be=ColorManager[_0x5da1c1(0x2eb)](_0x39d0be,Math['random']()*0.4+0.2);let _0x31833d=ColorManager[_0x5da1c1(0x44d)](_0x3a72e2,0.85);_0x31833d=ColorManager[_0x5da1c1(0x2eb)](_0x31833d,Math[_0x5da1c1(0xc9)]()*0.2);const _0x1053ff=_0x5e2c88['createRadialGradient'](_0x124cf8,_0x124cf8,0xa,_0x124cf8,_0x124cf8,_0x124cf8);_0x1053ff[_0x5da1c1(0xda)](0x0,_0x39d0be),_0x1053ff[_0x5da1c1(0xda)](0x1,_0x31833d),_0x5e2c88[_0x5da1c1(0x134)]=_0x1053ff,_0x5e2c88[_0x5da1c1(0x153)](),_0x5e2c88[_0x5da1c1(0x2df)](_0x124cf8,_0x124cf8),_0x5e2c88[_0x5da1c1(0x35b)](length,_0x124cf8),_0x5e2c88['arc'](_0x124cf8,_0x124cf8,_0x124cf8,0x0,_0x379d76),_0x5e2c88[_0x5da1c1(0x35b)](_0x124cf8,_0x124cf8),_0x5e2c88[_0x5da1c1(0x1cf)](),_0x5e2c88['restore'](),this[_0x5da1c1(0x504)][_0x5da1c1(0xb5)]();},Bitmap['prototype']['drawRainbowLensFlare']=function(_0x5a0407,_0x18669a,_0x3fd082){const _0x478714=_0x217234,_0x11cb89=this[_0x478714(0x125)];_0x11cb89[_0x478714(0xe3)](),_0x11cb89[_0x478714(0x3de)](_0x5a0407-_0x3fd082,_0x18669a-_0x3fd082);const _0x1b1469=0x168*(Math['PI']/0xb4),_0x2c9790=Math[_0x478714(0xc1)](0x80),_0x449957=_0x478714(0x158)[_0x478714(0x126)](_0x2c9790),_0x1f747e=_0x478714(0x157)['format'](_0x2c9790),_0x1c6ff8=_0x478714(0x112)['format'](_0x2c9790),_0x2aa257='rgba(%1,255,255,1)'[_0x478714(0x126)](_0x2c9790),_0x5358b6='rgba(%1,255,%1,1)'['format'](_0x2c9790),_0x31d9a9='rgba(255,255,%1,1)'[_0x478714(0x126)](_0x2c9790),_0x30c439=_0x478714(0x2f4)[_0x478714(0x126)](_0x2c9790),_0x39e5ea=_0x478714(0x188)[_0x478714(0x126)](_0x2c9790),_0x50f7fd=_0x11cb89[_0x478714(0x510)](_0x3fd082,_0x3fd082,0xa,_0x3fd082,_0x3fd082,_0x3fd082);_0x50f7fd['addColorStop'](0x0,_0x449957),_0x50f7fd[_0x478714(0xda)](0.7,_0x449957),_0x50f7fd['addColorStop'](0.8,_0x1f747e),_0x50f7fd[_0x478714(0xda)](0.81,_0x1c6ff8),_0x50f7fd['addColorStop'](0.82,_0x2aa257),_0x50f7fd[_0x478714(0xda)](0.8225,_0x5358b6),_0x50f7fd[_0x478714(0xda)](0.8275,_0x31d9a9),_0x50f7fd[_0x478714(0xda)](0.85,_0x30c439),_0x50f7fd[_0x478714(0xda)](0.9,_0x39e5ea),_0x50f7fd['addColorStop'](0.95,_0x449957),_0x50f7fd[_0x478714(0xda)](0x1,_0x449957),_0x11cb89[_0x478714(0x134)]=_0x50f7fd,_0x11cb89[_0x478714(0x153)](),_0x11cb89[_0x478714(0x2df)](_0x3fd082,_0x3fd082),_0x11cb89['lineTo'](length,_0x3fd082),_0x11cb89['arc'](_0x3fd082,_0x3fd082,_0x3fd082,0x0,_0x1b1469),_0x11cb89['lineTo'](_0x3fd082,_0x3fd082),_0x11cb89[_0x478714(0x1cf)](),_0x11cb89[_0x478714(0x235)](),this[_0x478714(0x504)][_0x478714(0xb5)]();},Bitmap[_0x217234(0x406)]['drawBalloon']=function(_0x3aa4da){const _0x3e6290=_0x217234,_0x37232f=this[_0x3e6290(0x125)];_0x3aa4da=_0x3aa4da||['#ff0000','#880000'],_0x37232f['save'](),_0x37232f[_0x3e6290(0x28a)](0x0,0.11738,-0.11738,0x0,99.6785,-39.5524),_0x37232f[_0x3e6290(0x365)]=_0x3e6290(0x24d),_0x37232f[_0x3e6290(0x332)]=0xa;const _0x45e1e7=_0x37232f[_0x3e6290(0x1f3)](0x0,this['height'],this[_0x3e6290(0x4f7)]*0x2,this['height']*0x14);_0x45e1e7[_0x3e6290(0xda)](0x0,_0x3aa4da[0x0]),_0x45e1e7['addColorStop'](0x1,_0x3aa4da[0x1]),_0x37232f[_0x3e6290(0x134)]=_0x45e1e7,(_0x37232f['beginPath'](),_0x37232f[_0x3e6290(0x2df)](489.1,324.8),_0x37232f[_0x3e6290(0x40f)](492.6,324.4,516.9,356.8,515.5,360.1),_0x37232f['bezierCurveTo'](514.1,363.4,473.9,368.2,471.8,365.3),_0x37232f[_0x3e6290(0x40f)](469.7,362.5,485.6,325.2,489.1,324.8)),_0x37232f['fill'](),_0x37232f[_0x3e6290(0x1b7)](),(_0x37232f['beginPath'](),_0x37232f[_0x3e6290(0x2df)](622.6,156.7),_0x37232f['bezierCurveTo'](622.6,230.8,556.4,341.5,488.3,341.5),_0x37232f[_0x3e6290(0x40f)](418.2,341.5,0x162,230.8,0x162,156.7),_0x37232f['bezierCurveTo'](0x162,82.6,414.2,14.3,488.3,14.3),_0x37232f[_0x3e6290(0x40f)](562.4,14.3,622.6,82.6,622.6,156.7)),_0x37232f[_0x3e6290(0x1cf)](),_0x37232f[_0x3e6290(0x1b7)](),_0x37232f[_0x3e6290(0x332)]=0x5,(_0x37232f[_0x3e6290(0x153)](),_0x37232f[_0x3e6290(0x2df)](0x1de,0x156),_0x37232f[_0x3e6290(0x40f)](486.5,340.3,492.4,338.5,503.5,341.1),_0x37232f[_0x3e6290(0x40f)](482.2,561.7,393.8,609.5,366.7,789.6),_0x37232f['bezierCurveTo'](366.2,792.9,368.2,806.3,371.3,831.2)),_0x37232f[_0x3e6290(0x1b7)](),_0x37232f[_0x3e6290(0x235)](),this[_0x3e6290(0x19f)]=0x80,this[_0x3e6290(0x383)](this[_0x3e6290(0x4f7)]*0x7/0x8,this[_0x3e6290(0x466)]*0x1/0x4,0x4,'white');},Bitmap[_0x217234(0x406)]['drawFireworksMissile']=function(_0x125596){const _0x2e394c=_0x217234;_0x125596=_0x125596||_0x2e394c(0xf7);const _0x32504f=this['width']/0x2,_0x11bb92=this[_0x2e394c(0x466)]/0x2,_0x4ee38f=ColorManager[_0x2e394c(0x2eb)](_0x125596,0x0),_0x593172=ColorManager['hexToRgba'](_0x125596,0.8),_0x5d04b0=ColorManager[_0x2e394c(0x2eb)](_0x125596,0x1),_0x5abb5e=this[_0x2e394c(0x4f7)]/0x2,_0x3f4d35=0x4;this[_0x2e394c(0x40d)](0x0,_0x11bb92-_0x3f4d35,_0x5abb5e,_0x3f4d35*0x2,_0x4ee38f,_0x593172),this[_0x2e394c(0x383)](_0x32504f,_0x11bb92,_0x3f4d35,_0x5d04b0),this['drawCircle'](_0x32504f,_0x11bb92,_0x3f4d35-0x2,_0x2e394c(0x320));},Bitmap[_0x217234(0x406)][_0x217234(0x352)]=function(_0x1008c5){const _0x4bab6d=_0x217234,_0x1b9e77=this[_0x4bab6d(0x469)];_0x1008c5=_0x1008c5||'#ff0000';const _0x1af29a=this[_0x4bab6d(0x4f7)]/0x2,_0x90265b=this[_0x4bab6d(0x466)]/0x2,_0x21cb73=ColorManager[_0x4bab6d(0x2eb)](_0x1008c5,0x0),_0x2de7ac=ColorManager[_0x4bab6d(0x2eb)](_0x1008c5,0.25),_0x3a7d71=ColorManager[_0x4bab6d(0x2eb)](_0x1008c5,0x1),_0x6216e2=this[_0x4bab6d(0x4f7)]/0x2,_0xc898cf=0x4,_0x5a4274=Math[_0x4bab6d(0xc1)](0x3)+0xa;_0x1b9e77['translate'](_0x1af29a,_0x90265b);const _0x1379b5=Math[_0x4bab6d(0xc1)](0x3)+0x4;for(let _0x2782c1=0x0;_0x2782c1<_0x1379b5;_0x2782c1++){const _0x49e59e=_0x6216e2*((_0x1379b5-_0x2782c1)/_0x1379b5);let _0x34bde8=Math['randomInt'](0xa)+0x28;_0x34bde8/=_0x2782c1+0x1;for(let _0x1e20d5=0x0;_0x1e20d5<_0x34bde8;_0x1e20d5++){let _0x223221=Math[_0x4bab6d(0xc1)](Math[_0x4bab6d(0x2e4)](_0x49e59e/_0x5a4274))+_0x49e59e*(_0x5a4274-0x1)/_0x5a4274;const _0x5764d1=Math[_0x4bab6d(0xc1)](_0x223221/0x2);this[_0x4bab6d(0x40d)](_0x5764d1,-_0xc898cf,_0x223221-_0x5764d1,_0xc898cf*0x2,_0x21cb73,_0x2de7ac),this[_0x4bab6d(0x383)](_0x223221,0x0,_0xc898cf,_0x3a7d71),this[_0x4bab6d(0x383)](_0x223221,0x0,_0xc898cf-(Math[_0x4bab6d(0xc1)](0x2)-0x1),'white'),_0x1b9e77[_0x4bab6d(0x369)](Math['PI']*0x2/_0x34bde8);}}},Bitmap[_0x217234(0x406)]['drawRainbowArch']=function(_0x26cb92,_0x32749f,_0x5d2742){const _0x2418ad=_0x217234,_0x11de6a=this[_0x2418ad(0x125)];_0x11de6a[_0x2418ad(0xe3)](),_0x11de6a[_0x2418ad(0x3de)](_0x26cb92-_0x5d2742,_0x32749f-_0x5d2742);const _0x39b414=0x168*(Math['PI']/0xb4),_0x2ac738=Math[_0x2418ad(0xc1)](0x80),_0x176750=_0x2418ad(0x158)[_0x2418ad(0x126)](_0x2ac738),_0x18a36a=_0x2418ad(0x157)[_0x2418ad(0x126)](_0x2ac738),_0x2550f7='rgba(%1,%1,255,1)'['format'](_0x2ac738),_0x1bdfa9='rgba(%1,255,255,1)'[_0x2418ad(0x126)](_0x2ac738),_0x517c2b=_0x2418ad(0x22b)['format'](_0x2ac738),_0x38fbfa=_0x2418ad(0x4b9)[_0x2418ad(0x126)](_0x2ac738),_0x3db13a='rgba(255,%1,%1,1)'[_0x2418ad(0x126)](_0x2ac738),_0x5076d8=_0x2418ad(0x188)[_0x2418ad(0x126)](_0x2ac738),_0x334248=_0x11de6a[_0x2418ad(0x510)](_0x5d2742,_0x5d2742,0xa,_0x5d2742,_0x5d2742,_0x5d2742);_0x334248[_0x2418ad(0xda)](0x0,_0x176750),_0x334248[_0x2418ad(0xda)](0.15,_0x176750),_0x334248['addColorStop'](0.25,_0x18a36a),_0x334248[_0x2418ad(0xda)](0.3,_0x18a36a),_0x334248['addColorStop'](0.4,_0x2550f7),_0x334248[_0x2418ad(0xda)](0.45,_0x1bdfa9),_0x334248[_0x2418ad(0xda)](0.5,_0x1bdfa9),_0x334248[_0x2418ad(0xda)](0.55,_0x517c2b),_0x334248[_0x2418ad(0xda)](0.6,_0x38fbfa),_0x334248[_0x2418ad(0xda)](0.65,_0x38fbfa),_0x334248[_0x2418ad(0xda)](0.75,_0x3db13a),_0x334248[_0x2418ad(0xda)](0.85,_0x5076d8),_0x334248[_0x2418ad(0xda)](0.95,_0x176750),_0x334248[_0x2418ad(0xda)](0x1,_0x176750),_0x11de6a[_0x2418ad(0x134)]=_0x334248,_0x11de6a[_0x2418ad(0x153)](),_0x11de6a[_0x2418ad(0x2df)](_0x5d2742,_0x5d2742),_0x11de6a[_0x2418ad(0x35b)](length,_0x5d2742),_0x11de6a['arc'](_0x5d2742,_0x5d2742,_0x5d2742,0x0,_0x39b414),_0x11de6a[_0x2418ad(0x35b)](_0x5d2742,_0x5d2742),_0x11de6a['fill'](),_0x11de6a[_0x2418ad(0x235)](),this[_0x2418ad(0x504)]['update']();},TextManager['weatherDensity']=VisuMZ[_0x217234(0xd0)][_0x217234(0x21c)]['Options'][_0x217234(0x1f9)],ColorManager[_0x217234(0x2ce)]=[_0x217234(0x294),_0x217234(0x4c7),_0x217234(0x373),_0x217234(0x144)],ColorManager[_0x217234(0x366)]=['#a8c54a',_0x217234(0x503),_0x217234(0x4db),'#fbec65',_0x217234(0x4ac),_0x217234(0xa4),_0x217234(0xbd),'#c5302e',_0x217234(0x43a)],ColorManager[_0x217234(0x2b0)]=['#a1a1a1','#959595','#898989',_0x217234(0x1bc)],ColorManager[_0x217234(0x42e)]=[_0x217234(0x50f),_0x217234(0x4c9),_0x217234(0x4ab),_0x217234(0x3d2)],ColorManager['WEATHER_CLOUD_WHITE_COLORS']=[_0x217234(0x351),_0x217234(0x1b8),_0x217234(0x4b8)],ColorManager[_0x217234(0x15d)]=['#e6cab9',_0x217234(0x231),_0x217234(0x1a7),_0x217234(0x242)],ColorManager['WEATHER_DANDELION2_COLORS']=[_0x217234(0x310),_0x217234(0x4e9),_0x217234(0x4d9)],ColorManager[_0x217234(0x123)]=[_0x217234(0x351),_0x217234(0x1b8),'#e1e1e1','#fffde0',_0x217234(0x25e)],ColorManager[_0x217234(0x4b5)]=[_0x217234(0x24d),'#000044',_0x217234(0x29e),'#004400'],ColorManager[_0x217234(0x40e)]=[_0x217234(0x43d),_0x217234(0x192),_0x217234(0x4cd),_0x217234(0x381),'#603913'],ColorManager[_0x217234(0x2e7)]=[_0x217234(0x111),_0x217234(0xe9),_0x217234(0x23a),_0x217234(0x19b),_0x217234(0x1d2)],ColorManager[_0x217234(0xb2)]=[_0x217234(0x3b7),_0x217234(0x344),_0x217234(0x321),_0x217234(0x19b),'#f68e56','#f26c4f'],ColorManager[_0x217234(0x300)]=[_0x217234(0x2dd),_0x217234(0x1fc),_0x217234(0x2b7),_0x217234(0x337),_0x217234(0x3b4),_0x217234(0xc5)],ColorManager[_0x217234(0x2bb)]=['#ffffff','#ffffbb',_0x217234(0x386),_0x217234(0x324)],ColorManager[_0x217234(0x367)]=[_0x217234(0x4d4),_0x217234(0x4be),'#ddddff'],ColorManager['WEATHER_MOONLIGHT_COLORS']=[_0x217234(0x159),'#6dcff6',_0x217234(0x33c),_0x217234(0x390)],ColorManager['WEATHER_NATURE_GREEN_COLORS']=[_0x217234(0xff),'#92d450',_0x217234(0x223),_0x217234(0x24f),_0x217234(0x14f),_0x217234(0x15f)],ColorManager[_0x217234(0x389)]=['#ffaaaa',_0x217234(0xcd),_0x217234(0x494),_0x217234(0x18a),_0x217234(0x161),_0x217234(0x4bc),'#aaffff',_0x217234(0x519),'#aaaaff',_0x217234(0x444),_0x217234(0x42f),_0x217234(0x2b2),_0x217234(0x351)],ColorManager[_0x217234(0x374)]=[_0x217234(0x23a),'#fff799',_0x217234(0x149),'#998675',_0x217234(0x415),_0x217234(0x178),_0x217234(0xe9),_0x217234(0xe9),'#fff568',_0x217234(0x514),'#fff200',_0x217234(0x514)],ColorManager['WEATHER_PRIMARY_COLORS']=['#ffffff',_0x217234(0xf7),_0x217234(0x2f5),_0x217234(0x33d),_0x217234(0x280),_0x217234(0x20f),_0x217234(0x3cd),_0x217234(0x3b8),_0x217234(0xf7),_0x217234(0x33d),_0x217234(0x280)],ColorManager[_0x217234(0x244)]=[_0x217234(0x33d),'#acff3b',_0x217234(0x495),_0x217234(0x3e6),_0x217234(0x3ee)],ColorManager[_0x217234(0x3e5)]=['#faaacf',_0x217234(0x498),_0x217234(0x4ed),_0x217234(0x482),_0x217234(0x3ef)],ColorManager['WEATHER_SAKURA2_COLORS']=[_0x217234(0xdb),'#fde3d9',_0x217234(0xbc)],ColorManager[_0x217234(0x29f)]=[_0x217234(0x1bb),_0x217234(0x2c8),_0x217234(0x1d1)],ColorManager[_0x217234(0xa5)]=[_0x217234(0x351),_0x217234(0xfe),_0x217234(0x442),_0x217234(0x414)],ColorManager[_0x217234(0x460)]=[_0x217234(0x480),_0x217234(0x18c),'#a900ff',_0x217234(0x314)],ColorManager['WEATHER_ARCTIC_BEAM_COLORS']=ColorManager[_0x217234(0x300)][_0x217234(0x2f2)](),ColorManager['WEATHER_AUTUMN_LEAVES_COLORS']=ColorManager['WEATHER_AUTUMN_COLORS'][_0x217234(0x2f2)](),ColorManager[_0x217234(0x166)]=ColorManager[_0x217234(0x389)]['concat'](ColorManager[_0x217234(0x2ba)]),ColorManager[_0x217234(0x4e3)]=ColorManager[_0x217234(0x389)]['clone'](),ColorManager[_0x217234(0x4c2)]=ColorManager['WEATHER_NATURE_GREEN_COLORS'][_0x217234(0x2f2)](),ColorManager[_0x217234(0x483)]=ColorManager['WEATHER_NATURE_GREEN_COLORS']['clone'](),ColorManager[_0x217234(0x44b)]=ColorManager['WEATHER_MOONLIGHT_COLORS']['clone'](),ColorManager[_0x217234(0x2b3)]=ColorManager['WEATHER_PASTEL_COLORS']['clone'](),ColorManager[_0x217234(0x32d)]=ColorManager[_0x217234(0x2ba)][_0x217234(0x2f2)](),ColorManager[_0x217234(0x1da)]=ColorManager['WEATHER_PASTEL_COLORS'][_0x217234(0x2f2)](),ColorManager[_0x217234(0xba)]=ColorManager[_0x217234(0x2ba)][_0x217234(0x2f2)](),ColorManager['WEATHER_STAR_COLORS']=ColorManager[_0x217234(0x389)][_0x217234(0x2f2)](),ColorManager['WEATHER_RADIOACTIVE_COLORS']=ColorManager[_0x217234(0x244)][_0x217234(0x2f2)](),ColorManager[_0x217234(0x213)]=ColorManager['WEATHER_DARKNESS_COLORS'][_0x217234(0x2f2)](),ColorManager['WEATHER_SOAP_BUBBLE_COLORS']=ColorManager[_0x217234(0x389)][_0x217234(0x2f2)](),ColorManager[_0x217234(0x266)]=ColorManager[_0x217234(0xa5)][_0x217234(0x2f2)](),ColorManager[_0x217234(0x1ba)]=ColorManager[_0x217234(0x460)][_0x217234(0x2f2)](),ColorManager['hexToRgba']=function(_0x48252d,_0x51210a){const _0x102f9d=_0x217234;let _0x4feed3='';if(/^#([A-Fa-f0-9]{3}){1,2}$/['test'](_0x48252d)){_0x4feed3=_0x48252d['substring'](0x1)[_0x102f9d(0x4dc)]('');_0x4feed3['length']===0x3&&(_0x4feed3=[_0x4feed3[0x0],_0x4feed3[0x0],_0x4feed3[0x1],_0x4feed3[0x1],_0x4feed3[0x2],_0x4feed3[0x2]]);while(_0x4feed3[_0x102f9d(0x497)]>0x6)_0x4feed3[_0x102f9d(0x4d7)]();return _0x4feed3='0x'+_0x4feed3[_0x102f9d(0x116)](''),'rgba('+[(_0x4feed3>>0x10&0xff)[_0x102f9d(0xeb)](0x0,0xff),(_0x4feed3>>0x8&0xff)[_0x102f9d(0xeb)](0x0,0xff),(_0x4feed3&0xff)[_0x102f9d(0xeb)](0x0,0xff)]['join'](',')+','+_0x51210a[_0x102f9d(0xeb)](0x0,0x1)+')';}else return _0x102f9d(0x2f3);},ColorManager[_0x217234(0x42d)]=function(_0xfbb2c7){const _0x40540a=_0x217234;let _0x27cee6='';if(/^#([A-Fa-f0-9]{3}){1,2}$/[_0x40540a(0x509)](_0xfbb2c7)){if(_0x40540a(0x438)===_0x40540a(0x438)){_0x27cee6=_0xfbb2c7[_0x40540a(0x4c4)](0x1)['split']('');_0x27cee6[_0x40540a(0x497)]===0x3&&(_0x27cee6=[_0x27cee6[0x0],_0x27cee6[0x0],_0x27cee6[0x1],_0x27cee6[0x1],_0x27cee6[0x2],_0x27cee6[0x2]]);while(_0x27cee6['length']>0x6)_0x27cee6[_0x40540a(0x4d7)]();return _0x27cee6='0x'+_0x27cee6[_0x40540a(0x116)](''),[(_0x27cee6>>0x10&0xff)[_0x40540a(0xeb)](0x0,0xff),(_0x27cee6>>0x8&0xff)['clamp'](0x0,0xff),(_0x27cee6&0xff)[_0x40540a(0xeb)](0x0,0xff)];}else{if(this[_0x40540a(0x505)]&&this[_0x40540a(0x505)][_0x40540a(0x497)]>=_0x5d9dcb[_0x40540a(0x465)]){const _0x42d71e=this['_cached_WeatherEffects_Sootfall'];return _0x42d71e[_0x5c0813[_0x40540a(0x1ae)](_0x3c34ea[_0x40540a(0xc9)]()*_0x42d71e['length'])];}const _0x117e5e=_0x242310[_0x40540a(0x2ce)][_0x40540a(0x2f2)](),_0x18ebd6=new _0x1fc274(0x1f4,0x1f4),_0x2880ab=_0x18ebd6[_0x40540a(0x4f7)],_0x197e22=_0x18ebd6[_0x40540a(0x466)],_0x30843c=0x5;let _0xbaf843=0x8;while(_0xbaf843--){const _0x554dfa=_0x56c530[_0x40540a(0xc1)](_0x2880ab-_0x30843c*0x2)+_0x30843c,_0x38f1bd=_0x404089['randomInt'](_0x197e22-_0x30843c*0x2)+_0x30843c,_0x3d39be=_0x5cc305['randomInt'](_0x30843c)+0x1,_0x585680=_0x117e5e[_0x565091[_0x40540a(0x1ae)](_0x3e34ab[_0x40540a(0xc9)]()*_0x117e5e['length'])];_0x18ebd6[_0x40540a(0x19f)]=_0xb7dab[_0x40540a(0xc1)](0x40)+0xc0,_0x18ebd6[_0x40540a(0x383)](_0x554dfa,_0x38f1bd,_0x3d39be,_0x585680);}_0x18ebd6['_customModified']=![];if(_0x2b1407[_0x40540a(0x297)])_0x50390f[_0x40540a(0x2d4)](_0x40540a(0x135));return this[_0x40540a(0x505)]=this['_cached_WeatherEffects_Sootfall']||[],this[_0x40540a(0x505)][_0x40540a(0x441)](_0x18ebd6),_0x18ebd6;}}else return[0x0,0x0,0x0];},ColorManager[_0x217234(0x21f)]=function(_0x1e520b){const _0x511384=_0x217234;while(_0x1e520b['length']<0x3)_0x1e520b[_0x511384(0x441)](0x0);while(_0x1e520b[_0x511384(0x497)]>0x3)_0x1e520b[_0x511384(0x4d7)]();return'#'+_0x1e520b[_0x511384(0x486)](_0x4e572c=>_0x4e572c['clamp'](0x0,0xff)[_0x511384(0x323)](0x10)['padZero'](0x2))[_0x511384(0x116)]('');},ColorManager[_0x217234(0x44d)]=function(_0x486957,_0x5b8289){const _0x4ee50a=_0x217234,_0x39b18b=this['hexToArray'](_0x486957)[_0x4ee50a(0x486)](_0x35bfcf=>Math[_0x4ee50a(0x186)]((Number(_0x35bfcf)||0x0)*_0x5b8289)['clamp'](0x0,0xff));return this[_0x4ee50a(0x21f)](_0x39b18b);},SceneManager[_0x217234(0x100)]=function(){const _0x22a0a3=_0x217234;return this[_0x22a0a3(0x278)]&&this[_0x22a0a3(0x278)]['constructor']===Scene_Battle;},SceneManager[_0x217234(0x520)]=function(){const _0x1a7ed2=_0x217234;return this[_0x1a7ed2(0x278)]&&this[_0x1a7ed2(0x278)]instanceof Scene_Map;},VisuMZ[_0x217234(0xd0)][_0x217234(0x43c)]=Game_Screen[_0x217234(0x406)][_0x217234(0x172)],Game_Screen[_0x217234(0x406)][_0x217234(0x172)]=function(){const _0x4e7a26=_0x217234;VisuMZ[_0x4e7a26(0xd0)][_0x4e7a26(0x43c)][_0x4e7a26(0x399)](this),this[_0x4e7a26(0x232)]();},Game_Screen[_0x217234(0x406)][_0x217234(0x48d)]=function(){const _0x2a4934=_0x217234;if($gameMap&&$gameMap['isNoWeather']())return'none';return this[_0x2a4934(0x211)](0x1)[_0x2a4934(0x19c)]||_0x2a4934(0x193);},Game_Screen[_0x217234(0x406)][_0x217234(0x2d5)]=function(){const _0x196061=_0x217234;if($gameMap&&$gameMap[_0x196061(0x138)]())return 0x0;return this[_0x196061(0x211)](0x1)[_0x196061(0x13a)]||0x0;},Game_Screen[_0x217234(0x406)]['changeWeather']=function(_0x2a39b4,_0x2a764a,_0x2f9116){const _0x520fb6=_0x217234,_0xd0b49e=this[_0x520fb6(0x211)](0x1,![])[_0x520fb6(0x13a)],_0x14cf98=VisuMZ[_0x520fb6(0xd0)][_0x520fb6(0x4c3)]();if(!_0x14cf98)return;_0x14cf98['type']=_0x2a39b4,_0x14cf98[_0x520fb6(0x13a)]=_0xd0b49e,_0x14cf98['powerTarget']=_0x2a39b4===_0x520fb6(0x193)?0x0:_0x2a764a['clamp'](0x1,0x9),_0x14cf98[_0x520fb6(0x298)]=_0x2f9116,_0x2f9116<=0x0&&(_0x14cf98[_0x520fb6(0x13a)]=_0x14cf98['powerTarget']),VisuMZ[_0x520fb6(0xd0)][_0x520fb6(0x214)](_0x14cf98),this['setWeatherLayerData'](0x1,![],_0x14cf98);},Game_Screen['prototype'][_0x217234(0xd9)]=function(){const _0x5d6b94=_0x217234;if(this['_weatherLayers']===undefined)this[_0x5d6b94(0x232)]();for(let _0x438dff=0x1;_0x438dff<=Weather['MAX_LAYERS'];_0x438dff++){this[_0x5d6b94(0x445)](_0x438dff,!![]),this[_0x5d6b94(0x445)](_0x438dff,![]);}},Game_Screen[_0x217234(0x406)][_0x217234(0x232)]=function(){const _0x44ecad=_0x217234;this[_0x44ecad(0x1dd)]={'lower':[],'upper':[]};while(this[_0x44ecad(0x1dd)][_0x44ecad(0xae)][_0x44ecad(0x497)]<Weather[_0x44ecad(0x2ef)]){if(_0x44ecad(0x429)===_0x44ecad(0x2c6)){if(this[_0x44ecad(0x361)]&&this[_0x44ecad(0x361)][_0x44ecad(0x497)]>=_0x476361[_0x44ecad(0x465)]){const _0x4340d6=this[_0x44ecad(0x361)];return _0x4340d6[_0x485809[_0x44ecad(0x1ae)](_0x1f2ef8[_0x44ecad(0xc9)]()*_0x4340d6[_0x44ecad(0x497)])];}const _0x575216=new _0x4cc3f7(0x1f4,0x1f4),_0xfb6394=_0x44ecad(0x252),_0xb6b02e='rgba(255,255,255,1)',_0x2f752c=_0x575216[_0x44ecad(0x4f7)],_0x22fe4c=_0x575216[_0x44ecad(0x466)],_0x54c2d1=0x3c,_0x36b5aa=_0x54c2d1/0x2,_0x30346e=0x2;let _0x3629eb=0x10;while(_0x3629eb--){const _0x2a97ee=_0x450cac[_0x44ecad(0xc1)](_0x2f752c-_0x54c2d1)+_0x54c2d1,_0x1be2ce=_0x41aadf[_0x44ecad(0xc1)](_0x22fe4c-_0x30346e)+_0x30346e;_0x575216['paintOpacity']=_0x4ef4d2[_0x44ecad(0xc1)](0x40)+0xc0,_0x575216[_0x44ecad(0x40d)](_0x2a97ee,_0x1be2ce,_0x36b5aa,0x2,_0xfb6394,_0xb6b02e),_0x575216[_0x44ecad(0x249)](_0x2a97ee+_0x36b5aa,_0x1be2ce,_0x36b5aa,0x2,_0xb6b02e);}_0x575216[_0x44ecad(0x492)]=![];if(_0x30cd1c['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])_0x260b16['log'](_0x44ecad(0x3b9));return this['_cached_WeatherEffects_Rain']=this[_0x44ecad(0x361)]||[],this[_0x44ecad(0x361)][_0x44ecad(0x441)](_0x575216),_0x575216;}else this[_0x44ecad(0x1dd)][_0x44ecad(0xae)]['push'](VisuMZ[_0x44ecad(0xd0)][_0x44ecad(0x4c3)]());}while(this[_0x44ecad(0x1dd)][_0x44ecad(0x1f2)][_0x44ecad(0x497)]<Weather[_0x44ecad(0x2ef)]){this[_0x44ecad(0x1dd)]['upper']['push'](VisuMZ[_0x44ecad(0xd0)][_0x44ecad(0x4c3)]());}},Game_Screen['prototype'][_0x217234(0x289)]=function(_0xc69706,_0x29f3db,_0x399a84){const _0x320e9b=_0x217234;if(this[_0x320e9b(0x1dd)]===undefined)this[_0x320e9b(0x232)]();const _0x1f8a23=this[_0x320e9b(0x211)](_0xc69706,_0x29f3db),_0x38924f=_0xc69706['clamp'](0x1,Weather[_0x320e9b(0x2ef)])-0x1,_0x3396bb=_0x29f3db?_0x320e9b(0xae):_0x320e9b(0x1f2);_0x399a84=_0x399a84||0x0;const _0x3804f5=_0x1f8a23[_0x320e9b(0x13a)],_0x37ada0=VisuMZ[_0x320e9b(0xd0)][_0x320e9b(0x4c3)]();_0x37ada0[_0x320e9b(0x13a)]=_0x3804f5,_0x37ada0['duration']=_0x399a84,this['_weatherLayers'][_0x3396bb][_0x38924f]=_0x37ada0;},Game_Screen[_0x217234(0x406)]['adjustWeatherLayerPower']=function(_0x1aa4b0,_0x9e2d0e,_0x5a1956,_0xdf9ec3){const _0x2dc33d=_0x217234,_0x579099=this[_0x2dc33d(0x211)](_0x1aa4b0,_0x9e2d0e);_0x579099[_0x2dc33d(0x298)]=_0xdf9ec3||0x1,_0x579099[_0x2dc33d(0xaa)]=(_0x579099[_0x2dc33d(0xaa)]+_0x5a1956)['clamp'](0x1,0x9);},Game_Screen[_0x217234(0x406)][_0x217234(0x1a4)]=function(_0xa9c2b,_0x935bdc){const _0xa1bbdb=_0x217234,_0x58d22f=this['getWeatherLayerData'](_0xa9c2b,_0x935bdc),_0x2c4c74=_0x935bdc?_0xa1bbdb(0xae):_0xa1bbdb(0x1f2);this[_0xa1bbdb(0x3c9)]=this[_0xa1bbdb(0x3c9)]||{'lower':[],'upper':[]},this[_0xa1bbdb(0x3c9)][_0x2c4c74][_0xa9c2b]=JSON[_0xa1bbdb(0x2b9)](JSON[_0xa1bbdb(0x32e)](_0x58d22f));},Game_Screen['prototype'][_0x217234(0x42c)]=function(_0x58e4d7,_0x29243f,_0x2cc599){const _0x550341=_0x217234,_0x4e0b4d=_0x29243f?_0x550341(0xae):_0x550341(0x1f2);this['_memorizedWeatherData']=this[_0x550341(0x3c9)]||{'lower':[],'upper':[]};const _0x43482a=this[_0x550341(0x3c9)][_0x4e0b4d][_0x58e4d7]||VisuMZ[_0x550341(0xd0)][_0x550341(0x4c3)]();_0x43482a[_0x550341(0x298)]=_0x2cc599,_0x43482a[_0x550341(0xaa)]=_0x43482a[_0x550341(0x13a)],_0x43482a[_0x550341(0x13a)]=this[_0x550341(0x211)](_0x58e4d7,_0x29243f)['power'],this[_0x550341(0x1ef)](_0x58e4d7,_0x29243f,_0x43482a);},Game_Screen['prototype']['getWeatherLayerData']=function(_0x51afa6,_0x565372){const _0x55bf4e=_0x217234;if(this['_weatherLayers']===undefined)this[_0x55bf4e(0x232)]();const _0x4b19c8=_0x51afa6[_0x55bf4e(0xeb)](0x1,Weather[_0x55bf4e(0x2ef)])-0x1,_0x29b125=_0x565372?_0x55bf4e(0xae):_0x55bf4e(0x1f2);return!this[_0x55bf4e(0x1dd)][_0x29b125][_0x4b19c8]&&(this[_0x55bf4e(0x1dd)][_0x29b125][_0x4b19c8]=VisuMZ[_0x55bf4e(0xd0)][_0x55bf4e(0x4c3)]()),this[_0x55bf4e(0x1dd)][_0x29b125][_0x4b19c8];},Game_Screen['prototype'][_0x217234(0x1ef)]=function(_0x4a2940,_0x23a79f,_0x40b7a2){const _0x263c43=_0x217234;if(this['_weatherLayers']===undefined)this[_0x263c43(0x232)]();const _0x530cf0=_0x4a2940['clamp'](0x1,Weather['MAX_LAYERS'])-0x1,_0x361414=_0x23a79f?'lower':'upper';this[_0x263c43(0x1dd)][_0x361414][_0x530cf0]=JSON[_0x263c43(0x2b9)](JSON[_0x263c43(0x32e)](_0x40b7a2));},Game_Screen[_0x217234(0x406)][_0x217234(0x196)]=function(_0x350a43,_0x6542e9,_0x54c3b7){const _0x3f16c5=_0x217234;if(this[_0x3f16c5(0x1dd)]===undefined)this[_0x3f16c5(0x232)]();const _0x364483=this['getWeatherLayerData'](_0x350a43,_0x6542e9),_0x2219be=_0x350a43[_0x3f16c5(0xeb)](0x1,Weather[_0x3f16c5(0x2ef)])-0x1,_0x492b9c=_0x6542e9?_0x3f16c5(0xae):_0x3f16c5(0x1f2);_0x54c3b7[_0x3f16c5(0x13a)]=_0x364483[_0x3f16c5(0x13a)],this['_weatherLayers'][_0x492b9c][_0x2219be]=_0x54c3b7;},Game_Screen['prototype'][_0x217234(0x445)]=function(_0x18d120,_0x4aae08){const _0x52c7fc=_0x217234,_0x49affb=this[_0x52c7fc(0x211)](_0x18d120,_0x4aae08);if(!_0x49affb)return;_0x49affb[_0x52c7fc(0x298)]>0x0&&(this['updateWeatherLayerPower'](_0x49affb),this['updateWeatherLayerDuration'](_0x49affb));},Game_Screen['prototype']['updateWeatherLayerPower']=function(_0x5892d7){const _0x19d222=_0x217234,_0x2eddff=_0x5892d7[_0x19d222(0x298)],_0x48c3c4=_0x5892d7['powerTarget'];_0x5892d7[_0x19d222(0x13a)]=(_0x5892d7[_0x19d222(0x13a)]*(_0x2eddff-0x1)+_0x48c3c4)/_0x2eddff;},Game_Screen[_0x217234(0x406)][_0x217234(0x308)]=function(_0x51d0f1){const _0x53f702=_0x217234;_0x51d0f1[_0x53f702(0x298)]--;if(_0x51d0f1[_0x53f702(0x298)]===0x0&&_0x51d0f1['powerTarget']===0x0){if(_0x53f702(0x358)!==_0x53f702(0x358)){const _0x525ce4=this['_context'];_0x37125f=_0x4186cb||[_0x53f702(0x12a),'#e0dd4c',_0x53f702(0x136),_0x53f702(0x4ac)];const _0x2dbfc5=_0x2974fd[0x4]||'#000000',_0xd1fdfa=_0x266542[0x5]||'#000000';_0x525ce4[_0x53f702(0xe3)](),_0x525ce4[_0x53f702(0x28a)](0x0,0.162467,-0.162467,0x0,101.142,-4.33347),_0x525ce4['fillStyle']=_0x14e1ef[0x0],(_0x525ce4[_0x53f702(0x153)](),_0x525ce4['moveTo'](555.3,409.4),_0x525ce4[_0x53f702(0x40f)](527.4,409.4,497.2,419.2,497.3,436.6),_0x525ce4[_0x53f702(0x40f)](497.4,449.1,512.3,0x1d7,512.3,0x1d7),_0x525ce4[_0x53f702(0x40f)](463.7,482.7,447.7,487.4,391.9,479.6),_0x525ce4['lineTo'](383.8,481.2),_0x525ce4[_0x53f702(0x35b)](381.2,481.7),_0x525ce4[_0x53f702(0x40f)](376.9,509.6,372.6,548.2,346.8,563.2),_0x525ce4[_0x53f702(0x40f)](332.8,526.3,293.1,567.7,267.3,582.7),_0x525ce4[_0x53f702(0x40f)](307.4,497.6,232.9,526.3,215.7,563.2),_0x525ce4[_0x53f702(0x40f)](200.7,0x220,157.7,541.9,131.9,559.1),_0x525ce4[_0x53f702(0x40f)](140.4,545.2,146.9,526.3,148.2,507.1),_0x525ce4['bezierCurveTo'](149.1,493.9,147.6,480.6,142.6,468.8),_0x525ce4[_0x53f702(0x40f)](168.4,466.7,236.8,435.6,196.3,408.6),_0x525ce4[_0x53f702(0x40f)](195.1,407.8,193.2,407.2,190.6,406.8),_0x525ce4[_0x53f702(0x40f)](170.3,403.6,111.9,412.7,90.9,427.9),_0x525ce4[_0x53f702(0x40f)](104.7,374.2,66.4,0x168,39.7,345.5),_0x525ce4[_0x53f702(0x40f)](39.7,345.5,104.6,326.9,104.6,279.6),_0x525ce4['bezierCurveTo'](129.9,305.1,168.2,305.4,189.7,290.3),_0x525ce4[_0x53f702(0x40f)](215.5,273.1,172.5,245.2,157.5,238.7),_0x525ce4['bezierCurveTo'](168.2,234.4,185.4,230.2,185.4,215.2),_0x525ce4[_0x53f702(0x40f)](185.4,184.8,165.4,0x9d,146.1,0x8e),_0x525ce4[_0x53f702(0x40f)](200.5,133.4,185.4,27.6,185.4,27.6),_0x525ce4[_0x53f702(0x40f)](185.4,27.6,232.7,96.9,287.1,77.6),_0x525ce4[_0x53f702(0x40f)](278.5,116.3,282.2,163.6,309.4,0xaa),_0x525ce4[_0x53f702(0x40f)](319.9,172.5,346.7,161.4,346.7,161.4),_0x525ce4['bezierCurveTo'](343.2,202.2,345.5,215.3,369.4,215.3),_0x525ce4[_0x53f702(0x40f)](392.3,215.3,413.3,0xaa,416.5,133.5),_0x525ce4[_0x53f702(0x40f)](447.6,142.1,493.3,0x7e,527.7,89.4),_0x525ce4[_0x53f702(0x40f)](527.2,90.9,502.6,170.4,533.7,206.5),_0x525ce4[_0x53f702(0x40f)](504.5,211.4,477.2,236.8,474.1,0x100),_0x525ce4[_0x53f702(0x40f)](0x1d8,269.2,481.3,279.6,509.4,278.3),_0x525ce4[_0x53f702(0x40f)](512.3,278.2,515.3,277.9,518.6,277.5),_0x525ce4[_0x53f702(0x40f)](510.4,326.9,593.3,323.5,593.3,323.5),_0x525ce4[_0x53f702(0x40f)](561.3,347.2,541.7,0x172,555.3,409.4)),_0x525ce4[_0x53f702(0x1cf)](),_0x525ce4[_0x53f702(0x134)]=_0x15346c[0x1],(_0x525ce4['beginPath'](),_0x525ce4[_0x53f702(0x2df)](509.7,278.3),_0x525ce4['bezierCurveTo'](501.6,295.2,497.9,314.1,492.3,332.2),_0x525ce4['bezierCurveTo'](482.3,364.8,462.5,0x18e,0x1ae,408.1),_0x525ce4[_0x53f702(0x40f)](422.2,410.5,413.9,411.5,406.4,414.8),_0x525ce4[_0x53f702(0x40f)](377.9,427.1,370.6,0x1d2,344.4,482.5),_0x525ce4[_0x53f702(0x40f)](307.2,0x1fa,259.1,472.5,215.5,477.7),_0x525ce4['bezierCurveTo'](191.1,480.7,170.2,495.6,148.3,507.2),_0x525ce4[_0x53f702(0x40f)](149.2,0x1ee,147.7,480.7,142.7,468.9),_0x525ce4['bezierCurveTo'](168.5,466.8,236.9,435.7,196.4,408.7),_0x525ce4[_0x53f702(0x40f)](195.2,407.9,193.3,407.3,190.7,406.9),_0x525ce4[_0x53f702(0x40f)](170.4,403.7,0x70,412.8,0x5b,0x1ac),_0x525ce4[_0x53f702(0x40f)](104.8,374.3,66.5,360.1,39.8,345.6),_0x525ce4[_0x53f702(0x40f)](39.8,345.6,104.7,0x147,104.7,279.7),_0x525ce4['bezierCurveTo'](0x82,305.2,168.3,305.5,189.8,290.4),_0x525ce4[_0x53f702(0x40f)](215.6,273.2,172.6,245.3,157.6,238.8),_0x525ce4[_0x53f702(0x40f)](168.3,234.5,185.5,230.3,185.5,215.3),_0x525ce4['bezierCurveTo'](185.5,184.9,165.5,157.1,146.2,142.1),_0x525ce4[_0x53f702(0x40f)](200.6,133.5,185.5,27.7,185.5,27.7),_0x525ce4[_0x53f702(0x40f)](185.5,27.7,232.8,0x61,287.2,77.7),_0x525ce4[_0x53f702(0x40f)](278.6,116.4,282.3,163.7,309.5,170.1),_0x525ce4[_0x53f702(0x40f)](0x140,172.6,346.8,161.5,346.8,161.5),_0x525ce4['bezierCurveTo'](343.3,202.3,345.6,215.4,369.5,215.4),_0x525ce4[_0x53f702(0x40f)](392.4,215.4,413.4,170.1,416.6,133.6),_0x525ce4['bezierCurveTo'](447.7,142.2,493.4,126.1,527.8,89.5),_0x525ce4[_0x53f702(0x40f)](527.3,0x5b,502.7,170.5,533.8,206.6),_0x525ce4['bezierCurveTo'](504.6,211.5,477.3,236.9,474.2,256.1),_0x525ce4[_0x53f702(0x40f)](472.2,269.3,481.5,279.6,509.7,278.3)),_0x525ce4['fill'](),_0x525ce4[_0x53f702(0x134)]=_0x329e1b[0x2],(_0x525ce4[_0x53f702(0x153)](),_0x525ce4[_0x53f702(0x2df)](533.9,206.6),_0x525ce4[_0x53f702(0x40f)](504.7,211.5,477.4,236.9,474.3,256.1),_0x525ce4[_0x53f702(0x40f)](461.6,260.5,449.1,265.3,435.6,271.5),_0x525ce4[_0x53f702(0x40f)](420.6,278.4,403.5,280.9,390.2,290.6),_0x525ce4[_0x53f702(0x40f)](0x173,304.6,364.5,329.8,357.1,352.4),_0x525ce4[_0x53f702(0x40f)](349.7,0x177,337.4,399.6,314.4,405.8),_0x525ce4[_0x53f702(0x40f)](290.1,412.3,0x10a,395.2,0xf1,393.4),_0x525ce4[_0x53f702(0x40f)](223.2,392.1,206.8,398.4,190.7,406.9),_0x525ce4[_0x53f702(0x40f)](170.4,403.7,0x70,412.8,0x5b,0x1ac),_0x525ce4[_0x53f702(0x40f)](104.8,374.3,66.5,360.1,39.8,345.6),_0x525ce4[_0x53f702(0x40f)](39.8,345.6,104.7,0x147,104.7,279.7),_0x525ce4[_0x53f702(0x40f)](0x82,305.2,168.3,305.5,189.8,290.4),_0x525ce4[_0x53f702(0x40f)](215.6,273.2,172.6,245.3,157.6,238.8),_0x525ce4[_0x53f702(0x40f)](168.3,234.5,185.5,230.3,185.5,215.3),_0x525ce4[_0x53f702(0x40f)](185.5,184.9,165.5,157.1,146.2,142.1),_0x525ce4['bezierCurveTo'](200.6,133.5,185.5,27.7,185.5,27.7),_0x525ce4[_0x53f702(0x40f)](185.5,27.7,232.8,0x61,287.2,77.7),_0x525ce4[_0x53f702(0x40f)](278.6,116.4,282.3,163.7,309.5,170.1),_0x525ce4[_0x53f702(0x40f)](0x140,172.6,346.8,161.5,346.8,161.5),_0x525ce4[_0x53f702(0x40f)](343.3,202.3,345.6,215.4,369.5,215.4),_0x525ce4[_0x53f702(0x40f)](392.4,215.4,413.4,170.1,416.6,133.6),_0x525ce4[_0x53f702(0x40f)](447.7,142.2,493.4,126.1,527.8,89.5),_0x525ce4[_0x53f702(0x40f)](527.4,0x5b,502.8,170.4,533.9,206.6)),_0x525ce4[_0x53f702(0x1cf)](),_0x525ce4['fillStyle']=_0x146565[0x3],(_0x525ce4['beginPath'](),_0x525ce4[_0x53f702(0x2df)](120.7,325.8),_0x525ce4[_0x53f702(0x40f)](126.5,334.6,138.7,335.8,149.3,336.1),_0x525ce4[_0x53f702(0x40f)](193.7,337.4,238.1,338.7,282.5,0x154),_0x525ce4['bezierCurveTo'](289.7,340.2,297.6,340.2,303.3,335.8),_0x525ce4[_0x53f702(0x40f)](312.9,328.2,310.8,312.8,317.4,302.5),_0x525ce4[_0x53f702(0x40f)](324.7,291.1,0x154,0x121,353.1,285.9),_0x525ce4['bezierCurveTo'](405.5,273.6,444.9,231.7,0x1e1,191.8),_0x525ce4[_0x53f702(0x40f)](486.2,186.1,491.6,0xb4,493.5,172.5),_0x525ce4['bezierCurveTo'](498.1,154.8,479.9,137.4,461.6,136.9),_0x525ce4[_0x53f702(0x40f)](443.3,136.5,426.8,0x94,414.2,161.3),_0x525ce4['bezierCurveTo'](401.7,174.6,398.5,197.8,383.5,208.2),_0x525ce4[_0x53f702(0x40f)](368.5,218.6,339.2,214.6,325.5,202.5),_0x525ce4[_0x53f702(0x40f)](317.3,195.2,313.8,184.1,307.6,0xaf),_0x525ce4[_0x53f702(0x40f)](291.6,151.6,259.3,144.6,241.8,122.3),_0x525ce4[_0x53f702(0x40f)](235.7,114.6,231.7,105.4,225.2,98.1),_0x525ce4[_0x53f702(0x40f)](218.6,0x5b,0xd0,85.9,0xc7,89.8),_0x525ce4[_0x53f702(0x40f)](186.5,95.3,186.2,112.6,188.1,126.1),_0x525ce4[_0x53f702(0x40f)](192.5,0x9d,198.5,187.7,205.8,0xda),_0x525ce4['bezierCurveTo'](211.1,239.7,216.2,265.5,201.2,282.2),_0x525ce4[_0x53f702(0x40f)](189.7,295.1,108.1,306.6,120.7,325.8)),_0x525ce4[_0x53f702(0x1cf)](),_0x525ce4[_0x53f702(0x365)]=_0xd1fdfa,_0x525ce4[_0x53f702(0x332)]=0x5,(_0x525ce4[_0x53f702(0x153)](),_0x525ce4[_0x53f702(0x2df)](555.3,409.4),_0x525ce4[_0x53f702(0x40f)](527.4,409.4,497.2,419.2,497.3,436.6),_0x525ce4[_0x53f702(0x40f)](497.4,449.1,512.3,0x1d7,512.3,0x1d7),_0x525ce4[_0x53f702(0x40f)](463.7,482.7,447.7,487.4,391.9,479.6),_0x525ce4[_0x53f702(0x35b)](383.8,481.2),_0x525ce4[_0x53f702(0x35b)](381.2,481.7),_0x525ce4[_0x53f702(0x40f)](376.9,509.6,372.6,548.2,346.8,563.2),_0x525ce4[_0x53f702(0x40f)](332.8,526.3,293.1,567.7,267.3,582.7),_0x525ce4[_0x53f702(0x40f)](307.4,497.6,232.9,526.3,215.7,563.2),_0x525ce4[_0x53f702(0x40f)](200.7,0x220,157.7,541.9,131.9,559.1),_0x525ce4[_0x53f702(0x40f)](146.3,535.7,154.9,497.6,142.6,468.8),_0x525ce4['bezierCurveTo'](168.4,466.7,236.8,435.6,196.3,408.6),_0x525ce4[_0x53f702(0x40f)](185.6,401.4,114.6,410.7,0x5b,427.9),_0x525ce4[_0x53f702(0x40f)](104.8,374.2,66.5,0x168,39.8,345.5),_0x525ce4['bezierCurveTo'](39.8,345.5,104.7,326.9,104.7,279.6),_0x525ce4[_0x53f702(0x40f)](0x82,305.1,168.3,305.4,189.8,290.3),_0x525ce4[_0x53f702(0x40f)](215.6,273.1,172.6,245.2,157.6,238.7),_0x525ce4[_0x53f702(0x40f)](168.3,234.4,185.5,230.2,185.5,215.2),_0x525ce4[_0x53f702(0x40f)](185.5,184.8,165.5,0x9d,146.2,0x8e),_0x525ce4[_0x53f702(0x40f)](200.6,133.4,185.5,27.6,185.5,27.6),_0x525ce4[_0x53f702(0x40f)](185.5,27.6,232.8,96.9,287.2,77.6),_0x525ce4[_0x53f702(0x40f)](278.6,116.3,282.3,163.6,309.5,0xaa),_0x525ce4['bezierCurveTo'](0x140,172.5,346.8,161.4,346.8,161.4),_0x525ce4[_0x53f702(0x40f)](343.3,202.2,345.6,215.3,369.5,215.3),_0x525ce4['bezierCurveTo'](392.4,215.3,413.4,0xaa,416.6,133.5),_0x525ce4['bezierCurveTo'](447.7,142.1,493.4,0x7e,527.8,89.4),_0x525ce4[_0x53f702(0x40f)](527.3,90.9,502.7,170.4,533.8,206.5),_0x525ce4['bezierCurveTo'](482.3,215.2,437.1,287.1,518.8,277.4),_0x525ce4[_0x53f702(0x40f)](510.6,326.8,593.5,323.4,593.5,323.4),_0x525ce4[_0x53f702(0x40f)](561.3,347.2,541.7,0x172,555.3,409.4)),_0x525ce4[_0x53f702(0x1b7)](),_0x525ce4[_0x53f702(0x134)]=_0x2dbfc5,(_0x525ce4[_0x53f702(0x153)](),_0x525ce4[_0x53f702(0x2df)](236.9,152.9),_0x525ce4[_0x53f702(0x40f)](245.5,185.6,255.3,217.6,268.2,0xf9),_0x525ce4[_0x53f702(0x40f)](281.4,281.1,296.5,312.4,310.8,344.1),_0x525ce4['bezierCurveTo'](338.4,0x195,369.3,464.6,393.1,527.2),_0x525ce4['bezierCurveTo'](0x18f,542.9,404.5,558.8,408.9,0x23f),_0x525ce4[_0x53f702(0x40f)](0x19b,582.4,412.8,589.9,414.4,597.4),_0x525ce4['bezierCurveTo'](415.2,601.3,0x1a0,605.1,416.7,0x261),_0x525ce4['bezierCurveTo'](417.6,0x266,419.5,617.1,423.2,620.4),_0x525ce4['bezierCurveTo'](426.8,623.6,432.5,623.3,435.1,618.9),_0x525ce4[_0x53f702(0x40f)](437.5,614.8,438.8,611.3,0x1b6,606.5),_0x525ce4['bezierCurveTo'](437.4,603.1,436.7,599.6,0x1b4,596.2),_0x525ce4[_0x53f702(0x40f)](434.5,589.4,432.8,582.7,430.8,0x240),_0x525ce4[_0x53f702(0x40f)](426.8,561.9,421.9,0x224,416.7,534.4),_0x525ce4[_0x53f702(0x40f)](0x195,0x1f8,0x187,474.6,376.2,445.6),_0x525ce4['bezierCurveTo'](344.5,383.6,308.7,323.8,279.9,260.4),_0x525ce4[_0x53f702(0x40f)](264.1,225.5,0xf8,189.7,237.6,152.8),_0x525ce4[_0x53f702(0x40f)](237.5,152.3,236.7,152.5,236.9,152.9)),_0x525ce4['fill'](),_0x525ce4[_0x53f702(0x134)]=_0x2dbfc5,(_0x525ce4[_0x53f702(0x153)](),_0x525ce4['moveTo'](436.6,221.3),_0x525ce4[_0x53f702(0x40f)](415.7,0xfa,403.1,0x11a,395.3,316.5),_0x525ce4['bezierCurveTo'](388.4,347.3,382.8,379.1,0x17c,410.6),_0x525ce4[_0x53f702(0x40f)](378.2,430.6,377.5,0x1c3,378.3,471.1),_0x525ce4[_0x53f702(0x40f)](378.6,477.6,388.6,477.7,388.5,471.1),_0x525ce4[_0x53f702(0x40f)](388.2,453.4,387.8,435.8,388.7,418.1),_0x525ce4[_0x53f702(0x40f)](389.4,0x194,390.9,389.9,392.1,375.8),_0x525ce4[_0x53f702(0x40f)](395.2,341.9,398.1,308.4,409.7,276.1),_0x525ce4['bezierCurveTo'](416.6,256.9,426.2,238.9,437.7,222.1),_0x525ce4[_0x53f702(0x40f)](438.3,221.2,437.1,220.6,436.6,221.3)),_0x525ce4['fill'](),_0x525ce4['fillStyle']=_0x2dbfc5,(_0x525ce4[_0x53f702(0x153)](),_0x525ce4[_0x53f702(0x2df)](0x86,344.4),_0x525ce4['bezierCurveTo'](209.5,355.1,275.3,397.6,335.7,441.6),_0x525ce4[_0x53f702(0x40f)](343.7,447.4,351.6,453.3,359.4,459.2),_0x525ce4[_0x53f702(0x40f)](363.3,462.2,367.2,465.1,371.2,468.1),_0x525ce4['bezierCurveTo'](375.2,471.1,378.3,474.1,383.4,474.6),_0x525ce4['bezierCurveTo'](385.5,474.8,387.6,472.1,386.8,470.1),_0x525ce4[_0x53f702(0x40f)](383.8,462.7,374.4,0x1ca,368.1,453.5),_0x525ce4[_0x53f702(0x40f)](360.9,448.2,353.6,442.9,346.3,437.7),_0x525ce4['bezierCurveTo'](330.9,426.7,315.3,416.1,299.1,406.2),_0x525ce4[_0x53f702(0x40f)](266.5,386.3,232.2,368.6,195.8,356.6),_0x525ce4['bezierCurveTo'](175.6,349.9,155.1,345.9,133.9,343.9),_0x525ce4[_0x53f702(0x40f)](133.7,343.9,133.6,344.4,0x86,344.4)),_0x525ce4[_0x53f702(0x1cf)](),_0x525ce4[_0x53f702(0x134)]=_0x2dbfc5,(_0x525ce4['beginPath'](),_0x525ce4['moveTo'](458.7,294.7),_0x525ce4[_0x53f702(0x40f)](458.7,294.7,0x1c9,295.4,0x1c6,296.6),_0x525ce4['bezierCurveTo'](0x1c3,297.8,446.6,299.5,441.2,301.6),_0x525ce4['bezierCurveTo'](435.8,303.7,429.4,306.2,422.4,309.1),_0x525ce4[_0x53f702(0x40f)](415.4,0x138,407.8,315.5,400.2,319.5),_0x525ce4['bezierCurveTo'](399.3,0x140,398.5,320.4,397.6,320.9),_0x525ce4[_0x53f702(0x35b)](396.2,321.7),_0x525ce4['lineTo'](395.5,322.1),_0x525ce4[_0x53f702(0x40f)](395.4,322.2,395.4,0x142,395.4,0x142),_0x525ce4[_0x53f702(0x35b)](395.3,321.8),_0x525ce4[_0x53f702(0x35b)](395.1,321.5),_0x525ce4[_0x53f702(0x40f)](394.5,320.6,393.9,319.7,393.3,318.8),_0x525ce4['lineTo'](392.4,317.5),_0x525ce4[_0x53f702(0x35b)](0x188,316.7),_0x525ce4[_0x53f702(0x40f)](390.9,314.6,390.1,312.6,389.3,310.6),_0x525ce4[_0x53f702(0x40f)](387.9,306.6,0x183,302.6,386.2,298.9),_0x525ce4[_0x53f702(0x40f)](384.7,291.5,0x180,284.8,383.6,279.1),_0x525ce4['bezierCurveTo'](382.8,267.8,383.4,260.5,383.5,259.4),_0x525ce4['bezierCurveTo'](383.6,258.2,384.2,265.4,386.3,0x115),_0x525ce4[_0x53f702(0x40f)](387.4,282.8,388.8,289.7,390.7,297.2),_0x525ce4['bezierCurveTo'](391.7,300.9,392.8,304.8,394.3,308.5),_0x525ce4[_0x53f702(0x40f)](395.1,310.4,395.8,312.2,396.8,313.9),_0x525ce4[_0x53f702(0x35b)](397.1,314.6),_0x525ce4[_0x53f702(0x40f)](397.1,314.7,397.1,314.6,397.1,314.7),_0x525ce4[_0x53f702(0x35b)](397.1,314.7),_0x525ce4['lineTo'](397.1,314.7),_0x525ce4[_0x53f702(0x35b)](397.1,314.7),_0x525ce4[_0x53f702(0x35b)](397.1,314.7),_0x525ce4[_0x53f702(0x35b)](397.1,314.7),_0x525ce4[_0x53f702(0x35b)](397.4,314.5),_0x525ce4[_0x53f702(0x40f)](405.3,310.3,413.3,307.1,420.6,304.6),_0x525ce4[_0x53f702(0x40f)](427.9,302.1,434.6,300.3,440.2,298.9),_0x525ce4['bezierCurveTo'](445.8,297.5,450.4,296.5,453.6,295.8),_0x525ce4[_0x53f702(0x40f)](456.9,295.1,458.7,294.7,458.7,294.7)),_0x525ce4[_0x53f702(0x1cf)](),_0x525ce4[_0x53f702(0x134)]=_0x2dbfc5,(_0x525ce4[_0x53f702(0x153)](),_0x525ce4[_0x53f702(0x2df)](213.6,309.8),_0x525ce4[_0x53f702(0x40f)](213.6,309.8,214.3,310.1,215.7,310.8),_0x525ce4[_0x53f702(0x40f)](216.4,311.1,217.2,311.5,218.2,311.9),_0x525ce4[_0x53f702(0x40f)](219.2,312.3,220.3,312.8,221.7,313.3),_0x525ce4[_0x53f702(0x40f)](224.3,314.4,227.6,315.5,231.4,316.8),_0x525ce4[_0x53f702(0x40f)](235.2,0x13e,239.6,319.4,244.4,320.8),_0x525ce4['bezierCurveTo'](254.1,323.6,265.8,326.5,278.7,330.5),_0x525ce4[_0x53f702(0x40f)](285.1,332.6,291.8,334.9,298.6,0x152),_0x525ce4[_0x53f702(0x40f)](305.4,0x155,312.2,344.8,318.5,349.8),_0x525ce4['bezierCurveTo'](319.9,350.9,321.2,0x160,322.5,353.2),_0x525ce4['bezierCurveTo'](323.1,353.8,323.8,354.4,324.4,354.9),_0x525ce4[_0x53f702(0x40f)](0x145,355.5,325.6,356.1,326.1,356.7),_0x525ce4['bezierCurveTo'](326.4,0x165,326.7,357.3,0x147,357.6),_0x525ce4['lineTo'](327.1,357.7),_0x525ce4[_0x53f702(0x35b)](327.1,357.7),_0x525ce4[_0x53f702(0x35b)](327.1,357.7),_0x525ce4[_0x53f702(0x35b)](327.1,357.7),_0x525ce4['lineTo'](327.1,357.8),_0x525ce4[_0x53f702(0x40f)](327.1,357.9,327.2,357.9,327.2,0x166),_0x525ce4[_0x53f702(0x40f)](327.2,0x166,327.2,0x166,327.3,357.9),_0x525ce4['lineTo'](327.3,357.8),_0x525ce4[_0x53f702(0x35b)](327.3,357.8),_0x525ce4[_0x53f702(0x35b)](327.3,357.8),_0x525ce4['lineTo'](327.3,357.7),_0x525ce4[_0x53f702(0x35b)](327.3,357.4),_0x525ce4[_0x53f702(0x35b)](327.4,356.2),_0x525ce4[_0x53f702(0x40f)](327.5,354.6,327.6,0x161,327.7,351.5),_0x525ce4[_0x53f702(0x40f)](327.8,349.9,0x148,348.4,328.1,346.9),_0x525ce4['bezierCurveTo'](328.7,340.8,329.6,335.1,330.5,329.7),_0x525ce4[_0x53f702(0x40f)](332.3,318.9,334.3,309.4,335.8,301.5),_0x525ce4[_0x53f702(0x40f)](0x153,285.6,340.2,275.5,340.5,273.7),_0x525ce4[_0x53f702(0x40f)](340.6,272.8,340.6,274.8,340.5,279.2),_0x525ce4[_0x53f702(0x40f)](340.3,283.6,339.8,290.3,338.8,298.8),_0x525ce4[_0x53f702(0x40f)](337.9,307.3,336.4,317.5,0x14f,328.9),_0x525ce4[_0x53f702(0x40f)](334.3,334.6,333.6,340.6,333.2,346.8),_0x525ce4[_0x53f702(0x40f)](333.1,348.4,0x14d,349.9,332.9,351.5),_0x525ce4[_0x53f702(0x40f)](332.8,353.1,332.7,354.7,332.7,356.3),_0x525ce4[_0x53f702(0x40f)](332.7,357.3,332.6,358.3,332.6,359.3),_0x525ce4[_0x53f702(0x40f)](332.5,360.9,332.6,362.6,332.5,364.2),_0x525ce4[_0x53f702(0x40f)](332.5,367.5,332.4,370.8,332.4,374.2),_0x525ce4[_0x53f702(0x40f)](330.5,371.7,328.7,369.1,326.6,366.6),_0x525ce4[_0x53f702(0x40f)](325.6,365.3,324.6,364.1,323.6,362.8),_0x525ce4['lineTo'](322.8,361.8),_0x525ce4[_0x53f702(0x40f)](322.6,361.6,322.5,361.5,322.4,361.4),_0x525ce4['lineTo'](321.6,360.6),_0x525ce4[_0x53f702(0x40f)](321.1,360.1,320.6,359.5,0x140,0x167),_0x525ce4[_0x53f702(0x35b)](318.3,357.5),_0x525ce4['bezierCurveTo'](317.2,356.5,0x13c,355.5,314.8,354.6),_0x525ce4[_0x53f702(0x40f)](308.9,0x15e,302.5,346.4,296.1,343.3),_0x525ce4[_0x53f702(0x40f)](289.7,340.2,283.2,337.7,276.9,335.4),_0x525ce4[_0x53f702(0x40f)](264.4,330.9,252.9,327.3,243.3,323.8),_0x525ce4[_0x53f702(0x40f)](238.5,322.1,234.2,320.4,230.5,318.8),_0x525ce4[_0x53f702(0x40f)](226.8,317.2,223.6,315.7,221.1,314.4),_0x525ce4[_0x53f702(0x40f)](219.8,313.8,218.7,313.1,217.8,312.6),_0x525ce4['bezierCurveTo'](216.8,312.1,0xd8,311.6,215.4,311.2),_0x525ce4[_0x53f702(0x40f)](214.3,310.2,213.6,309.8,213.6,309.8)),_0x525ce4['fill'](),_0x525ce4[_0x53f702(0x134)]=_0x2dbfc5,(_0x525ce4[_0x53f702(0x153)](),_0x525ce4['moveTo'](235.1,251.7),_0x525ce4[_0x53f702(0x40f)](235.1,251.7,236.5,252.2,238.9,253.2),_0x525ce4[_0x53f702(0x40f)](241.3,254.2,244.9,255.7,249.1,257.8),_0x525ce4['bezierCurveTo'](253.4,259.9,258.3,262.4,263.8,265.3),_0x525ce4['bezierCurveTo'](269.3,268.1,275.3,271.2,281.7,273.9),_0x525ce4[_0x53f702(0x40f)](282.5,274.3,283.3,274.6,284.1,274.9),_0x525ce4['bezierCurveTo'](284.5,275.1,284.9,275.2,285.3,275.4),_0x525ce4[_0x53f702(0x35b)](285.9,275.6),_0x525ce4[_0x53f702(0x40f)](0x11e,275.6,285.9,275.6,285.9,275.6),_0x525ce4[_0x53f702(0x35b)](0x11e,275.7),_0x525ce4[_0x53f702(0x40f)](0x11e,275.7,0x11e,275.7,0x11e,275.6),_0x525ce4[_0x53f702(0x35b)](0x11e,275.4),_0x525ce4[_0x53f702(0x35b)](0x11e,0x113),_0x525ce4[_0x53f702(0x40f)](286.1,274.2,286.2,273.5,286.3,272.8),_0x525ce4[_0x53f702(0x40f)](286.5,271.1,286.8,269.5,287.2,0x10c),_0x525ce4[_0x53f702(0x40f)](288.7,261.8,291.1,256.8,293.2,252.7),_0x525ce4[_0x53f702(0x40f)](295.4,248.6,297.3,245.4,298.8,243.1),_0x525ce4[_0x53f702(0x40f)](300.3,240.8,301.2,239.4,301.5,238.9),_0x525ce4[_0x53f702(0x40f)](301.8,238.5,301.4,239.7,300.5,242.1),_0x525ce4['bezierCurveTo'](299.6,244.5,298.2,248.1,296.6,252.6),_0x525ce4['bezierCurveTo'](0x127,257.1,293.2,262.5,292.1,268.5),_0x525ce4[_0x53f702(0x40f)](0x124,269.2,291.9,0x10e,291.8,270.8),_0x525ce4[_0x53f702(0x40f)](291.7,271.6,291.6,272.3,291.6,273.1),_0x525ce4[_0x53f702(0x40f)](291.6,273.5,291.6,273.9,291.5,274.3),_0x525ce4['lineTo'](291.5,274.9),_0x525ce4[_0x53f702(0x40f)](291.5,275.1,291.5,275.2,291.5,275.6),_0x525ce4['bezierCurveTo'](291.5,277.1,291.5,278.5,291.5,0x118),_0x525ce4[_0x53f702(0x40f)](291.5,280.8,291.5,281.7,291.5,282.5),_0x525ce4['lineTo'](291.5,283.1),_0x525ce4[_0x53f702(0x35b)](291.5,283.4),_0x525ce4['lineTo'](291.5,283.5),_0x525ce4[_0x53f702(0x35b)](291.4,283.5),_0x525ce4[_0x53f702(0x35b)](291.3,283.4),_0x525ce4[_0x53f702(0x35b)](290.1,0x11b),_0x525ce4['bezierCurveTo'](288.5,282.4,286.9,281.9,285.2,281.3),_0x525ce4[_0x53f702(0x40f)](284.8,281.2,284.3,0x119,0x11c,280.9),_0x525ce4['lineTo'](283.3,280.6),_0x525ce4[_0x53f702(0x35b)](0x11a,280.1),_0x525ce4[_0x53f702(0x40f)](281.1,279.8,280.3,279.4,279.5,279.1),_0x525ce4['bezierCurveTo'](272.7,276.2,266.7,272.7,261.4,269.4),_0x525ce4[_0x53f702(0x40f)](256.1,266.1,251.5,262.9,247.6,260.2),_0x525ce4[_0x53f702(0x40f)](243.7,257.5,240.6,255.4,238.4,253.9),_0x525ce4['bezierCurveTo'](236.3,252.5,235.1,251.7,235.1,251.7)),_0x525ce4[_0x53f702(0x1cf)](),_0x525ce4[_0x53f702(0x134)]=_0x2dbfc5,(_0x525ce4[_0x53f702(0x153)](),_0x525ce4[_0x53f702(0x2df)](235.1,0x1d7),_0x525ce4[_0x53f702(0x40f)](235.1,0x1d7,237.1,469.6,240.8,466.9),_0x525ce4[_0x53f702(0x40f)](244.5,464.3,249.8,460.6,256.5,456.2),_0x525ce4[_0x53f702(0x40f)](263.3,451.8,271.4,446.8,281.1,442.1),_0x525ce4[_0x53f702(0x40f)](281.7,441.8,282.3,441.5,282.9,441.2),_0x525ce4[_0x53f702(0x40f)](283.5,440.9,284.1,440.6,284.8,440.4),_0x525ce4[_0x53f702(0x40f)](286.1,439.8,287.3,439.3,288.6,438.7),_0x525ce4[_0x53f702(0x40f)](291.2,437.7,293.9,436.6,296.7,435.7),_0x525ce4[_0x53f702(0x40f)](299.5,434.7,302.4,0x1b2,305.3,433.1),_0x525ce4[_0x53f702(0x40f)](308.3,432.4,311.3,431.7,314.4,431.2),_0x525ce4[_0x53f702(0x40f)](317.5,430.6,320.5,430.3,323.5,0x1ae),_0x525ce4[_0x53f702(0x40f)](324.2,429.9,0x145,429.9,325.7,429.8),_0x525ce4[_0x53f702(0x35b)](326.3,429.8),_0x525ce4['bezierCurveTo'](326.4,429.8,326.4,429.8,326.4,429.8),_0x525ce4[_0x53f702(0x35b)](326.4,429.8),_0x525ce4[_0x53f702(0x35b)](326.4,429.8),_0x525ce4[_0x53f702(0x35b)](326.4,429.8),_0x525ce4[_0x53f702(0x40f)](326.5,429.8,326.5,429.8,326.5,429.8),_0x525ce4[_0x53f702(0x40f)](326.5,429.8,326.5,429.8,326.5,429.7),_0x525ce4[_0x53f702(0x40f)](326.2,429.2,0x146,428.6,325.7,428.1),_0x525ce4[_0x53f702(0x40f)](325.1,426.9,324.5,425.7,323.9,424.5),_0x525ce4[_0x53f702(0x40f)](322.7,422.1,321.4,419.8,320.2,417.6),_0x525ce4[_0x53f702(0x40f)](317.7,413.1,315.2,0x199,312.8,405.2),_0x525ce4[_0x53f702(0x40f)](311.5,403.3,310.4,401.5,309.2,399.7),_0x525ce4[_0x53f702(0x40f)](0x134,0x18e,306.8,396.3,305.7,394.7),_0x525ce4[_0x53f702(0x40f)](301.2,388.4,297.1,383.5,294.1,0x17c),_0x525ce4['bezierCurveTo'](0x123,376.5,289.1,374.4,288.5,373.8),_0x525ce4[_0x53f702(0x40f)](287.9,373.2,289.6,374.5,292.9,377.3),_0x525ce4[_0x53f702(0x40f)](293.7,0x17a,294.7,378.8,295.6,379.8),_0x525ce4[_0x53f702(0x40f)](296.6,380.7,297.7,381.8,298.9,382.9),_0x525ce4[_0x53f702(0x40f)](300.1,0x180,301.2,385.3,302.5,386.6),_0x525ce4[_0x53f702(0x40f)](303.8,387.9,305.1,389.4,306.5,390.9),_0x525ce4[_0x53f702(0x40f)](0x138,397.1,318.2,404.9,0x144,414.3),_0x525ce4[_0x53f702(0x40f)](324.7,415.5,325.5,416.6,326.2,417.9),_0x525ce4['bezierCurveTo'](326.9,419.1,327.6,420.3,328.3,421.6),_0x525ce4[_0x53f702(0x40f)](0x149,422.8,329.7,424.1,330.4,425.4),_0x525ce4['bezierCurveTo'](330.7,0x1aa,331.1,426.7,331.4,427.4),_0x525ce4[_0x53f702(0x40f)](0x14c,428.6,332.6,429.9,333.2,431.2),_0x525ce4['lineTo'](334.1,433.1),_0x525ce4[_0x53f702(0x35b)](334.5,434.1),_0x525ce4[_0x53f702(0x35b)](334.7,434.6),_0x525ce4['lineTo'](334.8,434.7),_0x525ce4[_0x53f702(0x35b)](334.8,434.8),_0x525ce4[_0x53f702(0x40f)](334.8,434.8,334.8,434.8,334.7,434.8),_0x525ce4[_0x53f702(0x35b)](334.4,434.8),_0x525ce4[_0x53f702(0x40f)](0x14d,434.9,331.6,435.1,330.2,435.3),_0x525ce4[_0x53f702(0x40f)](328.9,435.4,327.6,435.5,326.3,435.6),_0x525ce4['bezierCurveTo'](325.6,435.7,324.8,435.7,324.1,435.8),_0x525ce4[_0x53f702(0x40f)](321.2,436.2,318.2,436.5,315.3,437.1),_0x525ce4[_0x53f702(0x40f)](312.3,437.5,309.5,438.2,306.6,438.8),_0x525ce4[_0x53f702(0x40f)](303.8,439.5,0x12d,440.2,298.3,441.1),_0x525ce4[_0x53f702(0x40f)](295.6,441.9,0x125,442.9,290.4,443.7),_0x525ce4[_0x53f702(0x40f)](289.1,444.2,287.9,444.7,286.6,445.2),_0x525ce4[_0x53f702(0x40f)](0x11e,445.4,285.4,445.7,284.7,445.9),_0x525ce4['bezierCurveTo'](284.1,446.2,283.5,446.4,282.9,446.7),_0x525ce4['bezierCurveTo'](273.3,450.8,264.8,455.1,257.8,458.9),_0x525ce4[_0x53f702(0x40f)](243.8,466.3,235.1,0x1d7,235.1,0x1d7)),_0x525ce4[_0x53f702(0x1cf)](),_0x525ce4[_0x53f702(0x134)]=_0x2dbfc5,(_0x525ce4[_0x53f702(0x153)](),_0x525ce4[_0x53f702(0x2df)](0xb1,376.4),_0x525ce4[_0x53f702(0x40f)](0xb1,376.4,178.8,375.9,182.1,375.2),_0x525ce4['bezierCurveTo'](185.4,374.6,190.3,373.8,196.5,373.5),_0x525ce4[_0x53f702(0x40f)](202.6,373.2,209.9,373.4,217.9,0x176),_0x525ce4['bezierCurveTo'](225.9,374.7,234.6,375.8,243.7,376.9),_0x525ce4[_0x53f702(0x40f)](244.3,0x179,244.8,0x179,245.4,377.1),_0x525ce4['lineTo'](245.8,377.1),_0x525ce4[_0x53f702(0x35b)](245.8,377.1),_0x525ce4[_0x53f702(0x35b)](245.8,377.1),_0x525ce4[_0x53f702(0x35b)](245.8,377.1),_0x525ce4['lineTo'](245.9,377.1),_0x525ce4[_0x53f702(0x40f)](245.9,377.1,245.9,377.1,245.9,0x179),_0x525ce4[_0x53f702(0x35b)](245.8,376.9),_0x525ce4[_0x53f702(0x35b)](245.8,376.8),_0x525ce4[_0x53f702(0x35b)](245.4,376.3),_0x525ce4[_0x53f702(0x40f)](244.7,375.5,244.1,374.7,243.5,0x176),_0x525ce4['bezierCurveTo'](242.2,372.5,240.9,0x173,239.6,369.6),_0x525ce4[_0x53f702(0x40f)](234.4,0x16c,229.3,359.3,224.9,355.4),_0x525ce4[_0x53f702(0x40f)](216.1,347.6,210.3,342.8,209.4,0x156),_0x525ce4[_0x53f702(0x40f)](208.9,341.6,210.3,342.3,213.1,0x158),_0x525ce4[_0x53f702(0x40f)](215.9,345.7,220.1,348.3,225.3,351.9),_0x525ce4[_0x53f702(0x40f)](230.4,355.5,236.4,0x168,242.6,365.6),_0x525ce4['bezierCurveTo'](243.4,366.3,244.1,0x16f,244.9,367.8),_0x525ce4['bezierCurveTo'](245.7,368.6,246.4,369.3,247.2,370.1),_0x525ce4[_0x53f702(0x40f)](0xf8,370.9,248.7,371.7,249.4,372.5),_0x525ce4[_0x53f702(0x35b)](0xfa,373.1),_0x525ce4[_0x53f702(0x40f)](250.1,373.2,250.1,373.2,250.2,373.3),_0x525ce4[_0x53f702(0x35b)](250.4,373.6),_0x525ce4[_0x53f702(0x35b)](250.9,374.2),_0x525ce4[_0x53f702(0x40f)](251.5,0x177,252.2,375.8,252.8,376.6),_0x525ce4[_0x53f702(0x40f)](254.1,378.2,255.4,379.9,256.7,381.7),_0x525ce4[_0x53f702(0x35b)](257.7,0x17f),_0x525ce4[_0x53f702(0x35b)](258.2,383.7),_0x525ce4[_0x53f702(0x35b)](258.3,383.9),_0x525ce4['lineTo'](258.3,383.9),_0x525ce4[_0x53f702(0x35b)](258.3,383.9),_0x525ce4['lineTo'](258.2,383.9),_0x525ce4[_0x53f702(0x35b)](257.8,383.9),_0x525ce4[_0x53f702(0x40f)](256.7,383.8,255.6,383.7,254.6,383.6),_0x525ce4[_0x53f702(0x40f)](252.4,383.4,250.2,383.2,0xf8,383.1),_0x525ce4[_0x53f702(0x40f)](246.4,382.9,244.9,382.8,243.3,382.6),_0x525ce4[_0x53f702(0x40f)](234.1,381.5,225.4,0x17c,217.6,378.8),_0x525ce4[_0x53f702(0x40f)](209.7,377.6,202.7,376.7,196.7,376.3),_0x525ce4[_0x53f702(0x40f)](190.7,375.9,185.9,375.9,182.5,0x178),_0x525ce4[_0x53f702(0x40f)](178.9,376.3,0xb1,376.4,0xb1,376.4)),_0x525ce4[_0x53f702(0x1cf)](),_0x525ce4[_0x53f702(0x134)]=_0x2dbfc5,(_0x525ce4[_0x53f702(0x153)](),_0x525ce4[_0x53f702(0x2df)](458.7,346.3),_0x525ce4[_0x53f702(0x40f)](458.7,346.3,456.7,347.4,0x1c5,349.4),_0x525ce4[_0x53f702(0x40f)](449.4,351.5,444.2,354.6,438.1,0x167),_0x525ce4[_0x53f702(0x40f)](432.1,363.4,425.3,369.1,418.2,375.9),_0x525ce4[_0x53f702(0x40f)](411.1,382.7,403.7,390.6,396.1,399.1),_0x525ce4[_0x53f702(0x40f)](0x18a,401.5,391.9,403.9,389.8,406.2),_0x525ce4[_0x53f702(0x40f)](388.1,408.1,386.5,0x19a,384.8,411.8),_0x525ce4[_0x53f702(0x35b)](383.6,413.2),_0x525ce4[_0x53f702(0x35b)](383.4,413.4),_0x525ce4[_0x53f702(0x35b)](383.3,413.5),_0x525ce4['lineTo'](383.3,413.4),_0x525ce4[_0x53f702(0x35b)](383.2,412.9),_0x525ce4[_0x53f702(0x35b)](0x17f,411.9),_0x525ce4[_0x53f702(0x40f)](382.7,410.6,382.4,409.3,382.2,408.1),_0x525ce4['bezierCurveTo'](381.9,406.8,381.6,405.6,381.4,404.4),_0x525ce4[_0x53f702(0x40f)](381.2,403.4,381.1,402.5,380.9,401.5),_0x525ce4['bezierCurveTo'](380.7,400.2,380.5,398.9,380.3,397.6),_0x525ce4[_0x53f702(0x40f)](379.9,395.1,379.6,392.6,379.4,390.1),_0x525ce4[_0x53f702(0x40f)](378.3,380.4,377.5,371.9,376.5,364.6),_0x525ce4[_0x53f702(0x40f)](375.6,357.4,374.5,351.5,373.3,347.4),_0x525ce4[_0x53f702(0x40f)](373.1,346.3,372.7,345.4,372.5,344.6),_0x525ce4[_0x53f702(0x40f)](372.2,343.8,0x174,0x157,371.7,342.4),_0x525ce4[_0x53f702(0x40f)](371.2,341.2,370.9,340.4,370.7,0x154),_0x525ce4[_0x53f702(0x40f)](370.5,339.6,370.7,339.9,371.2,340.6),_0x525ce4[_0x53f702(0x40f)](371.7,341.4,372.5,342.6,373.4,344.5),_0x525ce4[_0x53f702(0x40f)](375.2,348.2,377.2,354.1,0x17b,361.7),_0x525ce4[_0x53f702(0x40f)](380.8,369.3,382.4,378.4,384.1,388.5),_0x525ce4[_0x53f702(0x40f)](384.5,0x187,0x181,393.6,385.4,396.2),_0x525ce4[_0x53f702(0x40f)](385.6,397.5,385.9,398.8,386.1,400.1),_0x525ce4['bezierCurveTo'](386.5,0x192,386.4,401.3,386.4,401.5),_0x525ce4['lineTo'](386.4,401.5),_0x525ce4[_0x53f702(0x35b)](386.4,401.5),_0x525ce4[_0x53f702(0x35b)](386.5,401.4),_0x525ce4[_0x53f702(0x35b)](386.9,400.9),_0x525ce4[_0x53f702(0x35b)](0x183,400.8),_0x525ce4[_0x53f702(0x35b)](387.5,400.2),_0x525ce4['lineTo'](388.9,398.6),_0x525ce4[_0x53f702(0x40f)](389.8,397.5,390.8,396.5,391.7,395.4),_0x525ce4[_0x53f702(0x40f)](399.4,386.8,407.1,378.9,414.8,372.4),_0x525ce4[_0x53f702(0x40f)](422.4,365.8,429.9,360.6,436.4,356.7),_0x525ce4[_0x53f702(0x40f)](0x1bb,352.8,448.6,350.3,452.5,348.7),_0x525ce4['bezierCurveTo'](454.5,347.9,0x1c8,347.4,0x1c9,0x15b),_0x525ce4['bezierCurveTo'](458.1,346.5,458.7,346.3,458.7,346.3)),_0x525ce4[_0x53f702(0x1cf)](),_0x525ce4[_0x53f702(0x235)](),this[_0x53f702(0x504)]['update']();}else _0x51d0f1[_0x53f702(0x19c)]='none';}},VisuMZ['WeatherEffects'][_0x217234(0x237)]=Game_Map[_0x217234(0x406)][_0x217234(0x164)],Game_Map[_0x217234(0x406)][_0x217234(0x164)]=function(_0x3059e7){const _0x5ace37=_0x217234;VisuMZ['WeatherEffects'][_0x5ace37(0x237)][_0x5ace37(0x399)](this,_0x3059e7),this[_0x5ace37(0x247)]();},Game_Map[_0x217234(0x406)][_0x217234(0x247)]=function(){const _0x55fd59=_0x217234;if(!$dataMap)return;if(!SceneManager[_0x55fd59(0x4f8)]())return;this[_0x55fd59(0x493)]=![];const _0x16f244=VisuMZ['WeatherEffects'][_0x55fd59(0x2ff)],_0x2031f2=$dataMap['note']||'';_0x2031f2[_0x55fd59(0x15c)](_0x16f244[_0x55fd59(0x3ea)])&&(this[_0x55fd59(0x493)]=!![]);},Game_Map['prototype'][_0x217234(0x138)]=function(){const _0x330eb4=_0x217234;if(this[_0x330eb4(0x493)]===undefined)this[_0x330eb4(0x247)]();return this[_0x330eb4(0x493)];},VisuMZ[_0x217234(0xd0)][_0x217234(0x378)]=Scene_Options[_0x217234(0x406)][_0x217234(0x3a6)],Scene_Options[_0x217234(0x406)][_0x217234(0x3a6)]=function(){const _0x5733bd=_0x217234;let _0x4a890e=VisuMZ['WeatherEffects'][_0x5733bd(0x378)][_0x5733bd(0x399)](this);const _0x165481=VisuMZ[_0x5733bd(0xd0)][_0x5733bd(0x21c)][_0x5733bd(0x1a2)];if(_0x165481[_0x5733bd(0x228)]&&_0x165481[_0x5733bd(0x41f)])_0x4a890e++;return _0x4a890e;};function _0xecb6(){const _0x1f1236=['_cached_WeatherEffects_Fireflies','_baseScale','scaleRatioY','#a700ff','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','#faacab','WEATHER_GREEN_LEAVES_COLORS','_baseTone','weatherEffectsXtremeSpeed','map','target','setColor','_cached_WeatherEffects_PrismBeams','weatherEffectsAurora','left\x2020%','Medium_Icons_Mid','weatherType','Spriteset_Map_createTilemap','Water_Rain','min','drawRainbowArch','_customModified','_noWeather','#ffffaa','#4dff65','description','length','#f49ac1','setupIconFrame','lower\x2010%','_stormBitmap','respawnDelayRngPerPower','balloons','max','weatherEffectsSparkle','rebornSpriteTone','WEATHER_AUTUMN_LEAVES_COLORS','weatherEffectsIceFog','fast_icons_6','medium_icons_7','fast_icons_8','drawStar','BCiLE','includes','pictures','rgba(128,255,128,1)','#9cdaf2','#fac159','weatherEffectsFireworksFlower','_lastType','shootingstars','_cached_WeatherEffects_ShadowBurst','Slow_Icons_UpperLeft','alignAngle','createBattleFieldContainer','sandclouds','WEATHER_DARKNESS_COLORS','_cached_WeatherEffects_PastelBrume','npVdK','#e1e1e1','rgba(255,255,%1,1)','weatherEffectsHeatClouds','DIyIt','#aaffcc','lower\x2050%','#ddffff','updateOpacity','#00dd00','_cached_WeatherEffects_Embers','WEATHER_GRASSY_GUST_COLORS','newLayer','substring','CpHev','updatePositionFailsafeTrajectory','#222222','EuieY','#b2e0f2','setFullBitmapFrame','JFCvI','RenderVariations','#8c6239','haLin','drawFireworksMissile','opacityEasingType','fast_icons_7','createNewWeatherSprites','lightburst','#ffddff','_maxLevel','applyPluginCmdSettingsLayers','pop','lensflare','#d58e6a','ashfall','#e0dd4c','split','duststorm','dustclouds','_tempCanvas','sparkle','opacityPerPower','plasmasurge','WEATHER_CONFETTI_COLORS','weatherEffectsDiamondDust','uGPEY','LpkKv','weatherEffectsFireflies','iconHeight','#ba7959','WRsoe','_lockedOffsetX','rebornFlags','#f5989d','destination-out','weatherEffectsPurpleHaze','WEATHER_ARCTIC_BEAM_COLORS','trim','left\x2070%','9jKuXMg','lightorbs','_weatherIcons','rebornSpriteImage','width','isSceneMap','Slow_Icons_Left','blizzard','isPressed','remove','_cached_WeatherEffects_DandelionSeeds','jSlFh','lifespan','processRespawnDelay','origin','fvESv','#a8c54a','_baseTexture','_cached_WeatherEffects_Sootfall','data','24BvKrnt','YXiGy','test','tileHeight','dimmer','rebornSpriteScale','maxSprites','lower\x20border','#cceaf6','createRadialGradient','UpperLower','_cached_WeatherEffects_Blizzard','_colorTone','#fff200','drawFireball','Linear','calculateScaleX','WEATHER_SAKURA2_COLORS','#aaccff','bubbles','Light_LensFlare','flags','_cached_WeatherEffects_Sandstorm','medium_icons_3','#505050','isInstanceOfSceneMap','flamehaze','_cached_WeatherEffects_ShootingStars','_removeSprite','_cached_WeatherEffects_ArcticBeams','Dark_Sootfall','#e6654c','WEATHER_SUNLIGHT_COLORS','_cached_WeatherEffects_Sleet','_cached_WeatherEffects_Mist','weatherEffectsUltravioletBeams','createNewWeatherLayers','powerTarget','rebornBitmap','randomizeBitmapType','ultraviolet','lower','_hue','lifespanVariance','Light_PrismBeams','WEATHER_FLAME_COLORS','ARRAYSTRUCT','left\x2030%','update','TGSVn','weatherDensity','Wind_Pollen','Fire_MeteorShower','WEATHER_RAINBOW_ORB_COLORS','weatherEffectsSnow','#fdedd9','#c5302e','updatePositionFinal','icefog','_baseAngle','randomInt','createTilemap','bAmbR','_subject','#949fc6','radioactivebeam','Slow_Icons_Up','Duration','random','WEATHER_EFFECTS_PRERENDER_GENERATED_IMAGES','medium_icons_4','jueDl','#ffccaa','zCyHr','eTsHm','WeatherEffects','middle\x2060%','weatherEffectsConfetti','JHyLG','Light_RainbowOrbs','_cached_WeatherEffects_DustStorm','Ice_SnowClouds','_createBitmaps','Light_Confetti','updateWeather','addColorStop','#fddbe2','pollutionclouds','Earth_Sandstorm','weatherEffectsRainbowArch','_angleSwayRng','weatherEffectsRadioactiveBeams','confetti','drawLightning','save','weatherEffectsShootingStars','drawDandelionSeed','copyPluginCmdCustomSettings','pOYWE','rainclouds','#fff568','hueSwaySpeed','clamp','applyPluginCmdSettingsBasic','smokefog','grassygust','wait','_cached_WeatherEffects_Thunderclouds','weatherEffectsWaterDrop','Earth_ToxicGas','vabPE','KMqVX','Slow_Icons_UpperRight','Medium_Icons_LowerLeft','#ff0000','calcEasing','Water_SoapBubbles','clearCircle','meteorshower','crumblingcave','upper\x2030%','#fcfade','#92d450','isSceneBattle','_trajectoryLockedID','slow_icons_1','_ySwayRng','frameCount','globalCompositeOperation','pollen','PCIwR','thunderbolt','sqrt','loadBitmapType','waterdrop','AvgxL','FyyLj','weatherEffectsCloudBurst','rebornSpawnLocation','_snowBitmap','#fff799','rgba(%1,%1,255,1)','abs','_layerID','Fast_Icons_Right','join','weatherEffectsRain','_flakeAngle','greenleaves','MKTyS','rebornInitialOpacity','weatherEffectsDustStorm','EcddS','1002005iaEIVx','cVRvh','Medium_Icons_UpperLeft','medium_icons_0','BasicReplayMemory','WEATHER_DANDELION3_COLORS','_cached_WeatherEffects_None','context','format','reverseSpin','dRgjN','Water_RisingSteam','#821d1c','fireworksflower','WEATHER_EFFECTS_SMOOTH_ICONS','_cached_WeatherEffects_WhiteClouds','processSparkleFinish','_lowerWeatherContainer','upper\x2080%','medium_icons_2','MakeVariance','RibVR','fillStyle','sootfall','#fbec65','_cached_WeatherEffects_Icons','isNoWeather','left\x2080%','power','TPTWn','Fire_Embers','MZGLl','_upperLayerSprites','sunbeams','both','rebornInitialTrajectoryData','InQuad','Ice_GlisteningIce','#444444','CxxHT','medium_icons_5','HGCcf','_cached_WeatherEffects_RainbowOrbs','#c4df9b','weatherEffectsLensFlare','right\x20border','Ice_Snow','Slow_Icons_LowerLeft','JSON','#55a743','zPRCd','moonbeams','calculateScaleY','beginPath','STRUCT','#faaacf','updatePositionTrajectory','rgba(128,%1,255,1)','rgba(%1,%1,%1,0)','#7accc8','_dimmerSprite','drip','match','WEATHER_DANDELION1_COLORS','weatherEffectsShadowBurst','#3d8b43','prismburst','#aaffaa','NCsHe','_cached_WeatherEffects_Ashfall','setup','sprite','WEATHER_BALLOON_COLORS','rgba(%1,%2,%3,%4)','getLastPluginCommandInterpreter','weatherEffectsToxicGas','rIUPS','_flakeRadius','Thunder_SpiderLightning','_cached_WeatherEffects_Thunderbolt','pERXN','Tapma','control','shadowBlur','clearWeather','soapbubbles','_cached_WeatherEffects_Stars','filter','OKPow','smokeclouds','#f69679','children','6928033pWdHCq','weatherEffectsSnowflakes','_flatFlutterRngY','center\x2090%','plasmabolt','Ice_Snowflakes','smokecloud','left\x2040%','weatherEffectsLightOrbs','_cached_WeatherEffects_MoonBeam','updateScale','LdvqP','ceil','_cached_WeatherEffects_BloodRain','rgba(255,%1,%1,0.5)','jXgGx','#ccffaa','_cached_WeatherEffects_LensFlare','#a800ff','replace','_scaleInOutRatio','_weatherParent','angleSwaySpeed','drawLensFlare','#a67c52','none','_spinAngle','toUpperCase','adaptWeatherLayerData','_opacityFadeInTime','Dark_Fumes','updateScaleInOutRatio','Light_RainbowClouds','#fbaf5d','type','_baseSprite','black','paintOpacity','Fire_FlameWall','prepareGeneratedWeatherImages','Options','SmoothIcons','memorizeWeatherLayerData','OKeBH','ConfigManager_makeData','#d2c8c5','bind','Yfrml','CZwDP','gdlSA','_cached_WeatherEffects_RadioactiveBeam','rgba(%1,255,255,1)','floor','2139492syCxkD','slow_icons_0','Fast_Icons_Left','AddWeatherDensityOption','Earth_DustStorm','loadWeatherIcons','center\x2060%','updateData','stroke','#ebebeb','_lockedOffsetY','WEATHER_UV_BEAM_COLORS','#d28fad','#7d7d7d','xtreme','oftek','shift','292408SQLdyd','Dark_AshDebris','slow_icons_3','iconWidth','applyData','_cached_WeatherEffects_GreenLeaves','opacityFadeInTime','weatherEffectsBlizzard','Fire_FlameHaze','WEATHER_SOAP_BUBBLE_COLORS','XwkQJ','ApplyEasing','_lifespan','Fumoh','_angleSwayRange','fill','right\x2020%','#d6967c','#fffbc7','updatePositionFrozenTrajectory','storm','_angleOffset','vGKWG','arcticbeam','center\x2080%','createFrontEnvironmentContainer','WEATHER_RAINBOW_CLOUD_COLORS','_cached_WeatherEffects_AshDebris','_cached_WeatherEffects_Spiderbolt','_weatherLayers','weatherEffectsArcticBeams','cgJgr','addCommand','pIZWb','xSwayRange','createBattleback','WEATHER_EFFECTS_ICON_GENERATED','drawRainbowLensFlare','lockedID','TQOAR','_upperWeatherContainer','uGPSU','_cached_WeatherEffects_AcidRain','applyPluginCmdSettingsWait','weatherEffectsCherryBlossoms','Fire_SunBeams','_cached_WeatherEffects_Snowflakes','setWeatherLayerData','_cached_WeatherEffects_LightOrbs','EVAL','upper','createLinearGradient','lighter','screenX','weatherEffectsHouseDust','Fast_Icons_LowerRight','balloon','Name','playOnceParallelInterpreter','Earth_RadioactiveBeams','#a1d2e5','fireflies','followers','Wind_DandelionSeeds','pastelbrume','updateOpacityFinal','Cbnyh','Water_Storm','scaleVariance','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','_cached_WeatherEffects_CrumblingCave','DegreesToRadian','angleOffset','loadGeneratedBitmap','fast_icons_3','weatherEffectsDarkOrbs','_flags','trajectory','rebornActions','#0000ff','_cached_WeatherEffects_Xtreme','getWeatherLayerData','cyan','WEATHER_SHADOW_BURST_COLORS','setupEventCommandData','center\x2050%','status','loadIconsetBitmap','createWeather','displayY','straight','initialize','Settings','rhrep','image','arrayToHex','_cached_WeatherEffects_SmokeFog','generated','_cached_WeatherEffects_ToxicGas','#8dc63f','_trajectoryType','sin','initMembers','#0072bc','AddOption','_flatFlutterSpeedY','updatePositionTrajectorySpin','rgba(%1,255,%1,1)','blendMode','rebornSprite','middle\x2010%','slow_icons_7','weatherEffectsSmokeClouds','#baa4b2','clearWeatherLayers','Fire_Fireflies','_cached_WeatherEffects_SunBeam','restore','ANaaK','Game_Map_setup','steam','_cached_WeatherEffects_UvBeam','#fdc689','rebornSpriteBlendMode','AUlSj','_cached_WeatherEffects_RainbowArch','_cached_WeatherEffects_Fireworks','scale','letUO','speedVariance','#b4a8b1','weatherEffectsBubbles','WEATHER_NUCLEAR_COLORS','event','flatFlutter','setupWeatherEffectNotetags','ofjHv','fillRect','WEATHER_RADIOACTIVE_COLORS','tempest','globalAlpha','#000000','Thunder_StaticCharge','#6aba49','smooth','_cached_WeatherEffects_Aurora','rgba(255,255,255,0)','fireworksFinish','Wind_Balloons','tileWidth','_xSwaySpeed','_xSwayRng','SJuvm','getWeatherLayerSprite','FSmly','_cached_WeatherEffects_FireworksFlower','parent','fast_icons_9','#fff2e4','weatherEffectsCrumblingCave','1730722KZVwYR','_scaleRatioY','ARRAYNUM','drawMapleLeaf','Fast_Icons_Up','canvas','WEATHER_SUNBEAM_COLORS','Water_Mist','#888800','loadPicture','_cached_WeatherEffects_SnowClouds','Light_PastelBrume','medium_icons_9','_flatFlutterRngX','weatherEffectsSmokeFog','Water_DrippingWater','scaleRatioX','Earth_HouseDust','FdMWN','_cached_WeatherEffects_FlameWall','mist','MakeFloatVariance','Lrraz','weatherEffectsFumes','_scene','kUpjs','iPGKu','weatherEffectsNone','updatePositionMapLockedTarget','color','Thunder_Thundersurge','weatherEffectsDandelionSeeds','#00ffff','screenY','Dark_BloodRain','upper\x2060%','_cached_WeatherEffects_AutumnLeaves','Slow_Icons_Right','rgba(255,255,255,1)','right\x2040%','Power','clearWeatherLayerData','transform','equals','_cached_WeatherEffects_Fumes','center\x2020%','BasicMemorizeWeather','Thunder_Discharge','STR','drawSakuraPetal','totalMinimum','Custom','#111111','lfNtC','Thunder_PlasmaSurge','WEATHER_EFFECTS_DEBUG_GENERATE_MSG','duration','lower\x2020%','center\x2010%','weatherEffectsThunderclouds','Fast_Icons_Down','alwaysVisiblePlayer','#440000','WEATHER_SAKURA3_COLORS','ARRAYFUNC','weatherEffectsDustClouds','FUNC','scaleOut','_cached_WeatherEffects_HeatClouds','fireworks','dbQcA','Ice_Aurora','sandstorm','right','_cached_WeatherEffects_WaterDrop','_cached_WeatherEffects_IceFog','screenHeight','uqpBa','Dark_Ashfall','Fire_Fireworks','WEATHER_CLOUD_DARK_COLORS','medium_icons_8','#ffaacc','WEATHER_PASTEL_BRUME_COLORS','slow_icons_6','left\x2090%','right\x2080%','#79bfdb','snowclouds','parse','WEATHER_PRIMARY_COLORS','WEATHER_LIGHT_COLORS','EYuus','Fire_ShootingStar','_lowerLayer','left','_speed','_lowerLayerSprites','%1Weight','_lastDimmerColor','_green','drawImage','vDoHC','Fast_Icons_Mid','#b87693','load','lower\x2040%','totalPerPower','frozen','cherryblossoms','WEATHER_ASH_COLORS','toxicgas','autumnleaves','middle\x2070%','right\x2010%','player','log','weatherPower','weatherEffectsAshDebris','_strokeWidth','middle\x2050%','kwsMM','jfulX','Medium_Icons_Left','zEgxa','#b8dfee','destroy','moveTo','RPzlc','icons','FAmWI','isVolumeSymbol','round','toneVariations','WaitForCompletion','WEATHER_FIREFLY_COLORS','JROCn','_opacityEasingType','weatherEffectsMoonBeams','hexToRgba','weatherEffectsFireworks','_notLoadedReady','adjustWeatherLayerPower','MAX_LAYERS','hueSwayRange','toLowerCase','clone','rgba(0,0,0,0)','rgba(255,%1,%1,1)','#ffff00','_cached_WeatherEffects_Balloons','addWeatherDensityCommand','_cached_WeatherEffects_DarkOrbs','drawCloud','isLongevityAffected','prismbeams','fast_icons_2','getContext','reverse','RegExp','WEATHER_FROST_COLORS','updateFlags','drawSnowflake','picturesWeight','Spriteset_Battle_createBattleback','updateWeatherLayers','ofTJa','#00bb00','updateWeatherLayerDuration','_cached_WeatherEffects_Pollen','img/system/Iconset.png','LAhDk','rgba(%1,\x20%2,\x20%3,\x201)','right\x2060%','Earth_CrumblingCave','bGSKC','#ea916d','AOgkk','rgba(128,255,128,0)','lezyd','#aa00ff','Water_RainClouds','_scaleRatioX','Layer','name','hueVariations','AjHpu','CsvSn','speed','_cached_WeatherEffects_PurpleHaze','_cached_WeatherEffects_RainbowClouds','screenWidth','white','#f7941d','yGfkM','toString','#ffbbff','lower\x2080%','right\x2090%','ARRAYJSON','weatherEffectsSandstorm','cloudburst','loadPictureBitmap','#008800','weatherEffectsIcons','WEATHER_PRISMBEAM_COLORS','stringify','loadSystemImages','scaleOutDuration','Water_Bubbles','lineWidth','left\x20border','_cached_WeatherEffects_FlameHaze','heatclouds','_ySwayRange','#bbc9f9','fnMeG','sleet','RadiansToDegrees','lower\x2070%','#7da7d9','#00ff00','Window_Options_addGeneralOptions','Dark_SmokeFog','LPSuF','getGeneratedWeatherParticle','weatherEffectsGreenLeaves','Thunder_Thunderclouds','#f26522','whiteclouds','rebornSpriteHue','anchor','angleVariance','updateDimmerColor','purplehaze','_target','rebornLifespan','Thunder_Thunderbolt','drawMultiPointPolygon','middle\x2020%','weatherEffectsAshfall','#ffffff','drawFireworksFlower','_hueSwayRng','rebornCommonEvent','firestorm','fEGHv','upper\x20border','lxKoi','getTemporaryCanvas','angleSwayRange','lineTo','slow_icons_8','weatherEffectsSootfall','_colorFilter','createLowerWeatherLayer','Earth_PollutionClouds','_cached_WeatherEffects_Rain','_cached_WeatherEffects_DustClouds','jbNin','aKleU','strokeStyle','WEATHER_AUTUMN_COLORS','WEATHER_LIGHTNING_COLORS','fast_icons_4','rotate','weatherEffectsRainbowOrbs','updateLifespan','PreRenderGenImg','version','Spriteset_Battle_createBattleFieldContainer','opacity','_cached_WeatherEffects_SoapBubbles','UCKmt','_angleArc','#333333','WEATHER_POLLEN_COLORS','getTemporaryContext','applyPluginCmdSettingsSpecificCases','longevity','Scene_Options_maxCommands','_flatFlutterDirX','actor','lower\x2030%','_targets','1240958ckGsoi','4OcfqDX','fontSize','21583830RZQtCx','#754c24','updatePositionStraightTrajectory','drawCircle','_cached_WeatherEffects_PollutionClouds','diamonddust','#bbffff','_cached_WeatherEffects_CherryBlossoms','bloodrain','WEATHER_PASTEL_COLORS','upper\x2090%','ZEMiu','weatherEffectsSnowClouds','ashdebris','darkorbs','user','#8393ca','dandelionseeds','mapBound','_respawnDelay','updateDimmerOpacity','weatherEffectsMist','_cached_WeatherEffects_CloudBurst','advanced','_cached_WeatherEffects_SandClouds','call','fast_icons_0','UsGTA','_cached_WeatherEffects_Confetti','weatherEffectsBloodRain','closePath','_flatFlutterSpeedX','yellow','Hhpej','slow_icons_2','processFireworksFinish','acidrain','weatherEffectsBalloons','maxCommands','Dark_MoonBeams','right\x2050%','_cached_WeatherEffects_Snow','_opacityFadeInTimeWhole','ARRAYSTR','WEATHER_CLOUD_WHITE_COLORS','slow_icons_4','Window_Options_isVolumeSymbol','thunderclouds','snow','addLoadListener','YvmQi','spiderbolt','#aabaf1','_originBound','_rainBitmap','#ed1c24','#ff8800','rain','lNDSl','aXHeI','respawnDelayMin','ConfigManager_applyData','Earth_SandClouds','fast_icons_5','_cached_WeatherEffects_RainClouds','nbQSS','strokeColor','thundersurge','_wholeLifespan','weatherEffectsStars','eventId','fzRsl','MOZcx','_memorizedWeatherData','drawSnowflakeLine','_ySwaySpeed','_addSprite','#ff00ff','spawnOffsetX','FNipq','setLayerData','setHue','#a3d2e5','fumes','_cached_WeatherEffects_SmokeClouds','_branches','weatherEffectsPrismBeams','addGeneralOptions','scaleIn','weatherEffectsSpiderbolt','exit','#404040','_spinSpeed','setFrame','translate','registerCommand','Medium_Icons_Down','center\x2040%','_cached_WeatherEffects_Sparkle','follower','_weather','WEATHER_SAKURA1_COLORS','#07ff7f','weatherEffectsFirestorm','InSine','Fire_Firestorm','NoWeather','embers','cos','weatherEffectsSunBeams','#13ffee','#fac4ad','MBxLT','Scene_Boot_loadSystemImages','rgba(255,\x20%1,\x200,\x201)','sparkleFinish','updatePositionBattleLockedTarget','_cached_WeatherEffects_Tempest','_xSwayRange','_sprites','WEATHER_STAR_COLORS','aurora','LnHwC','ySwayRange','scaleInDuration','BRzcO','center','drawTreeLeaf','removeUnusedColorFilter','weatherEffectsPollen','opacityMinimum','weatherEffectsStorm','drawText','_blue','prototype','_cached_WeatherEffects_Bubbles','_cached_WeatherEffects_GrassyGust','isDebugAllOption','displayX','drawOvalGradiantCircle','left\x2060%','gradientFillRect','WEATHER_EARTH_COLORS','bezierCurveTo','updateHueSway','VisuMZ_2_VisualBattleEnv','NbzPM','rainbowclouds','#fcecde','#efcba2','_updateAllSprites','BasicClearWeather','_cached_WeatherEffects_Storm','pBHWn','createUpperWeatherLayer','weatherEffectsThunderbolt','lower\x2060%','weatherEffectsFlameHaze','flamewall','AdjustRect','_cached_WeatherEffects_Firestorm','iiReq','jOPxj','index','stars','rainbowarch','create','weatherEffectsSandClouds','snowflakes','CsLDf','applyPluginCmdSettings','_alignAngle','replayMemorizedWeatherLayerData','hexToArray','WEATHER_CLOUD_BLUE_COLORS','#ffaaff','upper\x2040%','drawPolyArc','FAdrY','Slow_Icons_LowerRight','_realOpacity','iconsWeight','Ice_DiamondDust','ZbnRB','RjUfX','weatherEffectsSleet','#69822d','applyPluginCmdSettingsCustom','Game_Screen_clearWeather','#c69c6d','CuDoo','applyInverse','VisuMZ_0_CoreEngine','push','#fcf3de','medium_icons_1','#ccaaff','updateWeatherLayer','_updateDimmer','bWXNp','rainboworbs','#888888','ConvertParams','WEATHER_MOON_BEAM_COLORS','enemy','adjustHexColor','slow_icons_9','Light_LightBurst','Light_LightOrbs','weatherEffectsAutumnLeaves','makeData','wfIWW','Fire_HeatClouds','Ice_Sleet','_angleArcTotal','addChild','Fast_Icons_UpperRight','weatherEffectsSoapBubbles','bitmap','rgba(255,64,64,1)','respawnCommonEventID','XgVbR','guikT','jtGaF','WEATHER_ULTRAVIOLET_COLORS','weatherEffectsEmbers','lockedOffsetX','Ice_IceFog','_cached_WeatherEffects_HouseDust','WEATHER_EFFECTS_MAX_VARIATIONS','height','_cached_WeatherEffects_DiamondDust','Weather_update','_context','Slow_Icons_Down','weatherEffectsGrassyGust','rQUEO','shadowburst','nTiJd','weatherEffectsPastelBrume','AapRD','medium_icons_6','housedust','angle','General','weatherEffectsPollutionClouds','updatePositionTrajectorySway','updateOpacityEasing','weatherEffectsWhiteClouds','_angleSwaySpeed','middle\x2030%','updatePosition','opacityVariance'];_0xecb6=function(){return _0x1f1236;};return _0xecb6();}function Sprite_WeatherParticle(){const _0x514a7a=_0x217234;this[_0x514a7a(0x21b)](...arguments);}Sprite_WeatherParticle[_0x217234(0x406)]=Object[_0x217234(0x426)](Sprite[_0x217234(0x406)]),Sprite_WeatherParticle['prototype']['constructor']=Sprite_WeatherParticle,Sprite_WeatherParticle[_0x217234(0x406)]['initialize']=function(_0x34f6df,_0xc8275b){const _0x50ac2d=_0x217234;this[_0x50ac2d(0x18f)]=_0x34f6df,this['_debugID']=_0xc8275b,Sprite['prototype'][_0x50ac2d(0x21b)][_0x50ac2d(0x399)](this,this[_0x50ac2d(0x18f)]['viewport']),this[_0x50ac2d(0x226)](),this['rebornSprite']();},Sprite_WeatherParticle[_0x217234(0x406)]['initMembers']=function(){const _0x417815=_0x217234;this[_0x417815(0x36f)]=0x0,this['anchor']['x']=0.5,this[_0x417815(0x347)]['y']=0.5,this[_0x417815(0x393)]=0x0;},Sprite_WeatherParticle['prototype']['data']=function(){const _0x322e8e=_0x217234;return this[_0x322e8e(0x18f)]['data']();},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x423)]=function(){const _0x1a3061=_0x217234;if(!this[_0x1a3061(0x25c)])return-0x1;return this['parent'][_0x1a3061(0x179)]['indexOf'](this);},Sprite_WeatherParticle[_0x217234(0x406)]['rebornSprite']=function(){const _0x4a4210=_0x217234;this['rebornNewData'](),this[_0x4a4210(0x4f6)](),this[_0x4a4210(0x20e)]();},Sprite_WeatherParticle[_0x217234(0x406)]['rebornNewData']=function(){const _0x23a5c4=_0x217234;this[_0x23a5c4(0x19c)]=this['data']()[_0x23a5c4(0x19c)];if(this[_0x23a5c4(0x19c)]===_0x23a5c4(0x193))return;this[_0x23a5c4(0x34c)](),this[_0x23a5c4(0x4ec)](),this[_0x23a5c4(0x50c)](),this[_0x23a5c4(0x10f)](),this[_0x23a5c4(0x11b)](),this[_0x23a5c4(0x141)]();},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x34c)]=function(){const _0x55bce4=_0x217234;this[_0x55bce4(0x1cc)]=this['data']()[_0x55bce4(0x165)][_0x55bce4(0x4ff)];const _0x5def4b=this[_0x55bce4(0x506)]()['sprite'][_0x55bce4(0xb0)],_0x39d530=VisuMZ[_0x55bce4(0xd0)][_0x55bce4(0x132)](_0x5def4b);this[_0x55bce4(0x1cc)]=Math[_0x55bce4(0x49e)](0x1,Math[_0x55bce4(0x186)](this[_0x55bce4(0x1cc)]+_0x39d530)),this[_0x55bce4(0x3c4)]=this[_0x55bce4(0x1cc)];if(this['_lastType']!==this[_0x55bce4(0x19c)]){if(_0x55bce4(0x2ad)==='iRQHA'){const _0x2f2b9c=this[_0x55bce4(0xa2)];return _0x2f2b9c[_0x340393[_0x55bce4(0x1ae)](_0x319cd9['random']()*_0x2f2b9c['length'])];}else this['_lastType']=this['type'],this[_0x55bce4(0x1cc)]=Math[_0x55bce4(0xc1)](this[_0x55bce4(0x1cc)])+0x1;}},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x4ec)]=function(){const _0x2a4c6a=_0x217234;this[_0x2a4c6a(0x20c)]=JSON[_0x2a4c6a(0x2b9)](JSON[_0x2a4c6a(0x32e)](this[_0x2a4c6a(0x506)]()[_0x2a4c6a(0x51c)])),this['_hueSwayRng']=Math[_0x2a4c6a(0xc1)](0xf4240),this['_flatFlutterRngX']=Math[_0x2a4c6a(0xc1)](0xf4240),this[_0x2a4c6a(0x17c)]=Math['randomInt'](0xf4240),this[_0x2a4c6a(0x39f)]=Math[_0x2a4c6a(0xc9)]()*0.05+0.005,this[_0x2a4c6a(0x229)]=Math[_0x2a4c6a(0xc9)]()*0.05+0.005,this[_0x2a4c6a(0x379)]=Math[_0x2a4c6a(0xc9)]()<0.5;},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x50c)]=function(){const _0x55c172=_0x217234;this[_0x55c172(0x47e)]=this[_0x55c172(0x506)]()[_0x55c172(0x165)][_0x55c172(0x23f)]??0x1;const _0x4266fd=this[_0x55c172(0x506)]()[_0x55c172(0x165)][_0x55c172(0x204)]??0x0;this['_baseScale']+=VisuMZ[_0x55c172(0xd0)]['MakeFloatVariance'](_0x4266fd),this[_0x55c172(0x316)]=this[_0x55c172(0x506)]()['sprite'][_0x55c172(0x270)]??0x1,this[_0x55c172(0x261)]=this[_0x55c172(0x506)]()['sprite'][_0x55c172(0x47f)]??0x1,this[_0x55c172(0x18e)]=this[_0x55c172(0x506)]()[_0x55c172(0x51c)][_0x55c172(0x3d8)]??0x1,this[_0x55c172(0x23f)]['x']=this[_0x55c172(0x47e)]*this['_scaleRatioX']*this[_0x55c172(0x18e)],this[_0x55c172(0x23f)]['y']=this[_0x55c172(0x47e)]*this['_scaleRatioY']*this[_0x55c172(0x18e)];},Sprite_WeatherParticle[_0x217234(0x406)]['rebornSpawnLocation']=function(){const _0xae359c=_0x217234,_0x5662f3=0xc8;let _0x4cc39f=this[_0xae359c(0x506)]()[_0xae359c(0x165)]['spawnLocationX']||_0xae359c(0xc9);_0x4cc39f=_0x4cc39f[_0xae359c(0x18d)](/sides/i,Math[_0xae359c(0xc9)]()<0.5?_0xae359c(0x2bf):_0xae359c(0x2a9));let _0x5849fd=0x0;switch(_0x4cc39f[_0xae359c(0x2f1)]()['trim']()){case'random':this['ax']=Math[_0xae359c(0xc1)](Graphics[_0xae359c(0x4f7)]+_0x5662f3*0x2)-_0x5662f3;break;case _0xae359c(0x333):this['ax']=0x0;break;case'left\x2010%':case _0xae359c(0x48b):case _0xae359c(0xb4):case _0xae359c(0x181):case'left\x2050%':case _0xae359c(0x40c):case _0xae359c(0x4f2):case _0xae359c(0x139):case _0xae359c(0x2b5):if(_0x4cc39f['match'](/(\d+)([%％])/i)){const _0x5f4f2b=Number(RegExp['$1'])*0.01;_0x5849fd+=Math['floor'](Graphics[_0xae359c(0x4f7)]*_0x5f4f2b);}this['ax']=0x0+Math[_0xae359c(0xc1)](_0x5849fd)-Math[_0xae359c(0xc1)](_0x5662f3);break;case _0xae359c(0x14b):this['ax']=Graphics[_0xae359c(0x4f7)];break;case _0xae359c(0x2d2):case _0xae359c(0x1d0):case'right\x2030%':case _0xae359c(0x287):case _0xae359c(0x3a8):case _0xae359c(0x30d):case'right\x2070%':case _0xae359c(0x2b6):case _0xae359c(0x326):if(_0x4cc39f[_0xae359c(0x15c)](/(\d+)([%％])/i)){if(_0xae359c(0x107)==='PCIwR'){const _0x8f1ecd=Number(RegExp['$1'])*0.01;_0x5849fd+=Math[_0xae359c(0x1ae)](Graphics['width']*_0x8f1ecd);}else{const _0x2b9f6f=this[_0xae359c(0xa6)];return _0x2b9f6f[_0x4951d6[_0xae359c(0x1ae)](_0x378f79['random']()*_0x2b9f6f[_0xae359c(0x497)])];}}this['ax']=Graphics[_0xae359c(0x4f7)]-Math[_0xae359c(0xc1)](_0x5849fd)+Math[_0xae359c(0xc1)](_0x5662f3);break;case _0xae359c(0x29a):case'center\x2010%':case _0xae359c(0x28d):case'center\x2030%':case _0xae359c(0x3e1):case _0xae359c(0x215):case _0xae359c(0x1b5):case'center\x2070%':case _0xae359c(0x1d8):case _0xae359c(0x17d):if(_0x4cc39f[_0xae359c(0x15c)](/(\d+)([%％])/i)){if(_0xae359c(0x1ca)===_0xae359c(0x1ca)){const _0x820ff1=Number(RegExp['$1'])*0.01;_0x5849fd+=Math[_0xae359c(0x1ae)](Graphics['width']*_0x820ff1);}else _0x8052cf=0x0;}this['ax']=Graphics[_0xae359c(0x4f7)]/0x2+Math['randomInt'](_0x5849fd)+Math[_0xae359c(0xc1)](_0x5849fd)-_0x5849fd;break;default:this['ax']=Graphics[_0xae359c(0x4f7)]/0x2;break;}let _0xbdd816=this['data']()[_0xae359c(0x165)]['spawnLocationY']||_0xae359c(0xc9);_0xbdd816=_0xbdd816['replace'](/either/i,Math[_0xae359c(0xc9)]()<0.5?_0xae359c(0x1f2):'lower');let _0x40d316=0x0;switch(_0xbdd816['toLowerCase']()[_0xae359c(0x4f1)]()){case _0xae359c(0xc9):this['ay']=Math['randomInt'](Graphics['height']+_0x5662f3*0x2)-_0x5662f3;break;case _0xae359c(0x357):this['ay']=0x0;break;case'upper\x2010%':case'upper\x2020%':case _0xae359c(0xfd):case _0xae359c(0x430):case'upper\x2050%':case _0xae359c(0x283):case'upper\x2070%':case _0xae359c(0x130):case _0xae359c(0x38a):if(_0xbdd816[_0xae359c(0x15c)](/(\d+)([%％])/i)){const _0x55086d=Number(RegExp['$1'])*0.01;_0x40d316+=Math[_0xae359c(0x1ae)](Graphics[_0xae359c(0x466)]*_0x55086d);}this['ay']=0x0+Math[_0xae359c(0xc1)](_0x40d316)-Math[_0xae359c(0xc1)](_0x5662f3);break;case _0xae359c(0x50e):this['ay']=Graphics[_0xae359c(0x466)];break;case _0xae359c(0x49a):case _0xae359c(0x299):case _0xae359c(0x37b):case _0xae359c(0x2ca):case _0xae359c(0x4bd):case _0xae359c(0x41c):case _0xae359c(0x33b):case _0xae359c(0x325):case'lower\x2090%':if(_0xbdd816[_0xae359c(0x15c)](/(\d+)([%％])/i)){if('ujsZu'==='dBbPn'){const _0x1e0164=this[_0xae359c(0x163)];return _0x1e0164[_0x327493['floor'](_0x318514[_0xae359c(0xc9)]()*_0x1e0164[_0xae359c(0x497)])];}else{const _0x593ba0=Number(RegExp['$1'])*0.01;_0x40d316+=Math[_0xae359c(0x1ae)](Graphics[_0xae359c(0x466)]*_0x593ba0);}}this['ay']=Graphics[_0xae359c(0x466)]-Math['randomInt'](_0x40d316)+Math['randomInt'](_0x5662f3);break;case _0xae359c(0x22e):case _0xae359c(0x22e):case _0xae359c(0x34f):case _0xae359c(0x47a):case'middle\x2040%':case _0xae359c(0x2d8):case _0xae359c(0xd1):case _0xae359c(0x2d1):case'middle\x2080%':case'middle\x2090%':if(_0xbdd816[_0xae359c(0x15c)](/(\d+)([%％])/i)){const _0x5f5b24=Number(RegExp['$1'])*0.01;_0x40d316+=Math[_0xae359c(0x1ae)](Graphics[_0xae359c(0x466)]*_0x5f5b24);}this['ay']=Graphics[_0xae359c(0x466)]/0x2+Math[_0xae359c(0xc1)](_0x40d316)+Math['randomInt'](_0x40d316)-_0x40d316;break;default:this['ay']=Graphics[_0xae359c(0x466)]/0x2;break;}this['ax']+=this[_0xae359c(0x506)]()[_0xae359c(0x165)][_0xae359c(0x3ce)]||0x0,this['ay']+=this[_0xae359c(0x506)]()[_0xae359c(0x165)]['spawnOffsetY']||0x0,this[_0xae359c(0x3b5)]=this[_0xae359c(0x506)]()[_0xae359c(0x165)][_0xae359c(0x392)],this[_0xae359c(0x3b5)]&&(_0xae359c(0x4a7)!==_0xae359c(0x4a7)?(_0xd4024c[_0xae359c(0x44a)](_0x10b2d6,_0xad2656),_0x188fa5[_0xae359c(0x19c)]=_0xae359c(0x3b0),_0xd356c8[_0xae359c(0xd0)][_0xae359c(0x42a)](_0x48f8fb)):(this['ax']+=this[_0xae359c(0x18f)][_0xae359c(0x501)]['x'],this['ay']+=this['_weatherParent'][_0xae359c(0x501)]['y']));},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x11b)]=function(){const _0x3fd223=_0x217234;this['opacity']=this[_0x3fd223(0x506)]()['sprite']['opacity'];const _0x112d63=this[_0x3fd223(0x506)]()[_0x3fd223(0x165)]['opacityVariance'],_0x18f9c7=VisuMZ[_0x3fd223(0xd0)]['MakeVariance'](_0x112d63);this[_0x3fd223(0x36f)]=(this['opacity']+_0x18f9c7)['clamp'](0x0,0xff),this[_0x3fd223(0x434)]=this[_0x3fd223(0x36f)],this[_0x3fd223(0x2e9)]=this[_0x3fd223(0x506)]()[_0x3fd223(0x165)][_0x3fd223(0x4d0)]||_0x3fd223(0x516),this[_0x3fd223(0x197)]=this['data']()[_0x3fd223(0x165)][_0x3fd223(0x1c6)]||0x0,this[_0x3fd223(0x3aa)]=this['data']()[_0x3fd223(0x165)][_0x3fd223(0x1c6)]||0x0;},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x141)]=function(){const _0x36470c=_0x217234;this['_trajectoryType']=this[_0x36470c(0x506)]()[_0x36470c(0x20d)][_0x36470c(0x19c)]||_0x36470c(0x21a),this[_0x36470c(0x101)]=this[_0x36470c(0x506)]()[_0x36470c(0x20d)][_0x36470c(0x1e6)]||0x0,this['_lockedOffsetX']=this[_0x36470c(0x506)]()[_0x36470c(0x20d)][_0x36470c(0x462)]||0x0,this[_0x36470c(0x1b9)]=this[_0x36470c(0x506)]()[_0x36470c(0x20d)]['lockedOffsetY']||0x0,this[_0x36470c(0x2c0)]=this['data']()[_0x36470c(0x20d)][_0x36470c(0x31c)],this[_0x36470c(0x2c0)]+=VisuMZ['WeatherEffects'][_0x36470c(0x275)](this[_0x36470c(0x506)]()[_0x36470c(0x20d)][_0x36470c(0x241)]);if(this[_0x36470c(0x506)]()[_0x36470c(0x20d)]['speedVariance']!==0x0){if(this['_speed']===0x0)this[_0x36470c(0x2c0)]=Math['random']();}this['_baseAngle']=this[_0x36470c(0x506)]()[_0x36470c(0x20d)][_0x36470c(0x473)];const _0x39ba4d=this[_0x36470c(0x506)]()['trajectory'][_0x36470c(0x348)],_0x4ea465=VisuMZ[_0x36470c(0xd0)][_0x36470c(0x132)](_0x39ba4d);this['_baseAngle']=Math[_0x36470c(0x186)](this[_0x36470c(0xc0)]+_0x4ea465),this[_0x36470c(0x1d5)]=this[_0x36470c(0x506)]()['trajectory'][_0x36470c(0x208)],this[_0x36470c(0x42b)]=this['data']()[_0x36470c(0x20d)][_0x36470c(0x4b2)]??!![],this[_0x36470c(0x372)]=this[_0x36470c(0x506)]()[_0x36470c(0x20d)]['angleArc']??0x0,this[_0x36470c(0x456)]=0x0,this['_angleSwayRng']=Math[_0x36470c(0xc1)](0xf4240),this[_0x36470c(0x1ce)]=this[_0x36470c(0x506)]()[_0x36470c(0x20d)][_0x36470c(0x35a)],this[_0x36470c(0x479)]=this[_0x36470c(0x506)]()[_0x36470c(0x20d)][_0x36470c(0x190)],this[_0x36470c(0x194)]=0x0,this[_0x36470c(0x3dc)]=this[_0x36470c(0x506)]()[_0x36470c(0x20d)]['spinSpeed']||0x0;this[_0x36470c(0x3dc)]!==0x0&&(this[_0x36470c(0x194)]=Math['randomInt'](0x168));this[_0x36470c(0x3dc)]+=VisuMZ[_0x36470c(0xd0)][_0x36470c(0x132)](this[_0x36470c(0x506)]()['trajectory']['spinSpeedVariance']||0x0);if(this[_0x36470c(0x506)]()[_0x36470c(0x20d)][_0x36470c(0x127)]){if(_0x36470c(0x1d6)!==_0x36470c(0x1d6)){const _0xf8850d=this['data']()[_0x36470c(0x298)],_0x17f5bd=this[_0x36470c(0x506)]()[_0x36470c(0x50b)];let _0x4caa13=_0x17f5bd[_0x36470c(0x402)]+_0x17f5bd[_0x36470c(0x4e1)]*this[_0x36470c(0x506)]()['powerTarget'];if(this[_0x36470c(0x13a)]<=0x0)_0x4caa13=0x0;let _0xf8a7d4=_0x4caa13;_0xf8850d>0x0&&(_0xf8a7d4=(this[_0x36470c(0x15a)][_0x36470c(0x36f)]*(_0xf8850d-0x1)+_0x4caa13)/_0xf8850d),_0x3ad5cf&&_0x2cd81a['isNoWeather']()&&(_0xf8a7d4=0x0),this[_0x36470c(0x15a)]['opacity']=_0xf8a7d4;}else{if(Math[_0x36470c(0xc9)]()<0.5)this[_0x36470c(0x3dc)]*=-0x1;}}this[_0x36470c(0x257)]=Math[_0x36470c(0xc1)](0xf4240),this[_0x36470c(0x103)]=Math[_0x36470c(0xc1)](0xf4240),this[_0x36470c(0x3f6)]=this['data']()[_0x36470c(0x20d)][_0x36470c(0x1e2)],this['_xSwaySpeed']=this['data']()[_0x36470c(0x20d)]['xSwaySpeed'],this[_0x36470c(0x336)]=this[_0x36470c(0x506)]()[_0x36470c(0x20d)][_0x36470c(0x3fb)],this[_0x36470c(0x3cb)]=this['data']()['trajectory']['ySwaySpeed'];},Sprite_WeatherParticle[_0x217234(0x406)]['rebornSpriteImage']=function(){const _0x16e332=_0x217234;this['rebornBitmap'](),this[_0x16e332(0x23b)](),this[_0x16e332(0x346)](),this[_0x16e332(0x4a0)](),this[_0x16e332(0x400)]();},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0xab)]=function(){const _0x3204aa=this['randomizeBitmapType']();this['loadBitmapType'](_0x3204aa);},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0xac)]=function(){const _0x5ef966=_0x217234,_0x45a9fd=this['data']();let _0x236dc5=[],_0x42bc3f=0x0;_0x45a9fd[_0x5ef966(0x21e)]['generated']&&(_0x5ef966(0x4bb)!=='DIyIt'?(_0x1927c3[_0x5ef966(0x44a)](_0x3aad69,_0x4f6df5),_0x55a5dd[_0x5ef966(0x19c)]=_0x5ef966(0x102),_0xa7c009[_0x5ef966(0xd0)][_0x5ef966(0x42a)](_0x552402)):(_0x236dc5['push'](_0x5ef966(0x221)),_0x42bc3f+=_0x45a9fd[_0x5ef966(0x21e)]['generatedWeight']||0x1));_0x45a9fd[_0x5ef966(0x21e)][_0x5ef966(0x2e1)][_0x5ef966(0x497)]>0x0&&(_0x236dc5[_0x5ef966(0x441)](_0x5ef966(0x2e1)),_0x42bc3f+=_0x45a9fd[_0x5ef966(0x21e)][_0x5ef966(0x435)]||0x1);_0x45a9fd[_0x5ef966(0x21e)][_0x5ef966(0x4a9)][_0x5ef966(0x497)]>0x0&&(_0x236dc5[_0x5ef966(0x441)](_0x5ef966(0x4a9)),_0x42bc3f+=_0x45a9fd[_0x5ef966(0x21e)][_0x5ef966(0x303)]||0x1);let _0x41a3d6=Math['random']()*_0x42bc3f;for(const _0x490c22 of _0x236dc5){_0x41a3d6-=_0x45a9fd[_0x5ef966(0x21e)][_0x5ef966(0x2c2)[_0x5ef966(0x126)](_0x490c22)]||0x0;if(_0x41a3d6<=0x0)return _0x490c22;}return'generated';},Sprite_WeatherParticle[_0x217234(0x406)]['loadBitmapType']=function(_0x14ae72){const _0x229d14=_0x217234;this[_0x229d14(0x2ed)]=!![];if(_0x14ae72===_0x229d14(0x221))this['loadGeneratedBitmap']();else{if(_0x14ae72===_0x229d14(0x2e1))this[_0x229d14(0x217)]();else _0x14ae72==='pictures'&&this['loadPictureBitmap']();}},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x209)]=function(){const _0x1ecf17=_0x217234,_0x4c7bdb=this['data']()[_0x1ecf17(0x19c)][_0x1ecf17(0x2f1)]()['trim']();this[_0x1ecf17(0x45a)]=ImageManager[_0x1ecf17(0x341)](_0x4c7bdb),this[_0x1ecf17(0x45a)][_0x1ecf17(0x3b1)](this[_0x1ecf17(0x4ca)]['bind'](this));},Sprite_WeatherParticle['prototype'][_0x217234(0x4ca)]=function(){const _0x2d6e96=_0x217234;this[_0x2d6e96(0x2ed)]=![];const _0x3e5c2f=this[_0x2d6e96(0x45a)]['width'],_0x3db0f2=this[_0x2d6e96(0x45a)]['height'];this[_0x2d6e96(0x3dd)](0x0,0x0,_0x3e5c2f,_0x3db0f2);},Sprite_WeatherParticle['prototype'][_0x217234(0x217)]=function(){const _0x1501b9=_0x217234;this[_0x1501b9(0x45a)]=ImageManager['loadWeatherIcons'](),this[_0x1501b9(0x45a)][_0x1501b9(0x3b1)](this[_0x1501b9(0x499)][_0x1501b9(0x1a8)](this));},Sprite_WeatherParticle['prototype'][_0x217234(0x499)]=function(){const _0x125aae=_0x217234;this[_0x125aae(0x2ed)]=![];const _0x310c73=this[_0x125aae(0x506)]()['image'][_0x125aae(0x2e1)],_0x1ebbeb=_0x310c73[Math['floor'](Math[_0x125aae(0xc9)]()*_0x310c73[_0x125aae(0x497)])],_0x570c1f=ImageManager[_0x125aae(0x1c3)],_0x29782d=ImageManager[_0x125aae(0x4e8)],_0x1f31fe=_0x1ebbeb%0x10*_0x570c1f,_0x3cc634=Math['floor'](_0x1ebbeb/0x10)*_0x29782d;this[_0x125aae(0x3dd)](_0x1f31fe,_0x3cc634,_0x570c1f,_0x29782d);},Sprite_WeatherParticle['prototype'][_0x217234(0x32a)]=function(){const _0x3d4324=_0x217234,_0x531a05=this[_0x3d4324(0x506)]()[_0x3d4324(0x21e)]['pictures'],_0x5d412c=_0x531a05[Math[_0x3d4324(0x1ae)](Math['random']()*_0x531a05[_0x3d4324(0x497)])];this[_0x3d4324(0x45a)]=ImageManager[_0x3d4324(0x269)](_0x5d412c),this['bitmap'][_0x3d4324(0x3b1)](this[_0x3d4324(0x4ca)][_0x3d4324(0x1a8)](this));},Sprite_WeatherParticle['prototype'][_0x217234(0x23b)]=function(){const _0x42033a=_0x217234,_0x53f539=this['data']()[_0x42033a(0x21e)][_0x42033a(0x22c)];this[_0x42033a(0x22c)]=_0x53f539;},Sprite_WeatherParticle[_0x217234(0x406)]['rebornSpriteHue']=function(){const _0x38530f=_0x217234,_0xc0c46c=this[_0x38530f(0x506)]()[_0x38530f(0x21e)][_0x38530f(0x319)]||[];if(_0xc0c46c[_0x38530f(0x497)]<=0x0)_0xc0c46c[_0x38530f(0x441)](0x0);this['_baseHue']=_0xc0c46c[Math[_0x38530f(0x1ae)](Math[_0x38530f(0xc9)]()*_0xc0c46c[_0x38530f(0x497)])],this[_0x38530f(0x3d1)](this['_baseHue']);},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x4a0)]=function(){const _0x5ac1df=_0x217234,_0xc8a548=this[_0x5ac1df(0x506)]()[_0x5ac1df(0x21e)][_0x5ac1df(0x2e5)]||[];if(_0xc8a548['length']<=0x0)_0xc8a548['push']([0x0,0x0,0x0,0x0]);this[_0x5ac1df(0x484)]=_0xc8a548[Math[_0x5ac1df(0x1ae)](Math[_0x5ac1df(0xc9)]()*_0xc8a548[_0x5ac1df(0x497)])][_0x5ac1df(0x2f2)](),this['setColorTone'](this['_baseTone']);},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x400)]=function(){const _0x45525c=_0x217234;if(!this['filters'])return;if(!this[_0x45525c(0x35e)])return;if(this[_0x45525c(0xaf)]!==0x0)return;if(!this[_0x45525c(0x513)][_0x45525c(0x28b)]([0x0,0x0,0x0,0x0]))return;this['filters'][_0x45525c(0x4fc)](this[_0x45525c(0x35e)]),delete this['_colorFilter'];},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x20e)]=function(){const _0x293121=_0x217234;this[_0x293121(0x354)]();},Sprite_WeatherParticle['prototype']['rebornCommonEvent']=function(){const _0x325563=_0x217234;if(!this['_flags'])return;if(!this[_0x325563(0x20c)][_0x325563(0x45c)])return;const _0x351b3c=this[_0x325563(0x20c)]['respawnCommonEventID']||0x0;SceneManager[_0x325563(0x278)]['playOnceParallelInterpreter'](_0x351b3c);},Sprite_WeatherParticle['prototype'][_0x217234(0xb5)]=function(){const _0x551a36=_0x217234;Sprite[_0x551a36(0x406)][_0x551a36(0xb5)][_0x551a36(0x399)](this);if(this[_0x551a36(0x19c)]===_0x551a36(0x193))return;if(this[_0x551a36(0x2ed)])return;if(this[_0x551a36(0x393)]>0x0)return this[_0x551a36(0x197)]=0x0,this[_0x551a36(0x36f)]=0x0,this[_0x551a36(0x393)]--;this[_0x551a36(0x36b)](),this[_0x551a36(0x301)](),this[_0x551a36(0x184)](),this['updatePosition'](),this[_0x551a36(0x4bf)]();},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x36b)]=function(){const _0x48723=_0x217234;if(this['_lifespan']<=0x0)return this[_0x48723(0x22d)]();if(this[_0x48723(0x2fa)]()){this['_lifespan']=this['_wholeLifespan'];return;}this[_0x48723(0x1cc)]--;if(this[_0x48723(0x1cc)]<=0x0&&this[_0x48723(0x20c)]){if(this[_0x48723(0x20c)][_0x48723(0x253)]&&this['type']!==_0x48723(0x12b))return this[_0x48723(0x3a3)]();else{if(this[_0x48723(0x20c)][_0x48723(0x3f3)]&&this[_0x48723(0x19c)]!==_0x48723(0x4e0)){if(_0x48723(0x3c7)===_0x48723(0x38b)){const _0x41a99c=_0x2d873e(_0x314b32['$1']);_0x41a99c!==_0x539382[_0x215474][_0x48723(0x36d)]&&(_0x3f9a18('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x48723(0x126)](_0x4791b5,_0x41a99c)),_0xdee652[_0x48723(0x3da)]());}else return this[_0x48723(0x12e)]();}}if(this[_0x48723(0x20c)][_0x48723(0x3bc)]){if('uGPSU'!==_0x48723(0x1e9)){if(this['_cached_WeatherEffects_AcidRain']&&this[_0x48723(0x1ea)][_0x48723(0x497)]>=_0x524cbf[_0x48723(0x465)]){const _0x457b59=this[_0x48723(0x1ea)];return _0x457b59[_0x50daa3[_0x48723(0x1ae)](_0xd5e16e[_0x48723(0xc9)]()*_0x457b59[_0x48723(0x497)])];}const _0x38e373=new _0x16b33d(0x1f4,0x1f4),_0x75f8a8=_0x48723(0x312),_0x53521a=_0x48723(0x4aa),_0x381d6e=_0x38e373[_0x48723(0x4f7)],_0x563d36=_0x38e373[_0x48723(0x466)],_0x2090a7=0x3c,_0x1aab2f=_0x2090a7/0x2,_0x1b264e=0x2;let _0x15e9ff=0x10;while(_0x15e9ff--){const _0x1b6958=_0x151b6e[_0x48723(0xc1)](_0x381d6e-_0x2090a7)+_0x2090a7,_0x5c2457=_0x1838a5[_0x48723(0xc1)](_0x563d36-_0x1b264e)+_0x1b264e;_0x38e373[_0x48723(0x19f)]=_0x5400dc[_0x48723(0xc1)](0x40)+0xc0,_0x38e373[_0x48723(0x40d)](_0x1b6958,_0x5c2457,_0x1aab2f,0x2,_0x75f8a8,_0x53521a),_0x38e373['fillRect'](_0x1b6958+_0x1aab2f,_0x5c2457,_0x1aab2f,0x2,_0x53521a);}_0x38e373[_0x48723(0x492)]=![];if(_0x59143d[_0x48723(0x297)])_0x15a769['log']('acidrain');return this[_0x48723(0x1ea)]=this[_0x48723(0x1ea)]||[],this['_cached_WeatherEffects_AcidRain'][_0x48723(0x441)](_0x38e373),_0x38e373;}else this['processRespawnDelay']();}}},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x2fa)]=function(){const _0x53513f=_0x217234;if(!this[_0x53513f(0x20c)])return![];if(!this[_0x53513f(0x20c)][_0x53513f(0x377)])return![];return this['type']===this[_0x53513f(0x506)]()[_0x53513f(0x19c)];},Sprite_WeatherParticle['prototype']['processFireworksFinish']=function(){const _0x24fdf4=_0x217234;this[_0x24fdf4(0x19c)]='fireworks',this[_0x24fdf4(0x1cc)]=Math[_0x24fdf4(0xc1)](0x14)+0x50,this[_0x24fdf4(0x3c4)]=this[_0x24fdf4(0x1cc)],this[_0x24fdf4(0x4ae)]='fireworks',this['_flags']={'scaleIn':0x0,'scaleInDuration':0x64,'scaleOut':0x2,'scaleOutDuration':0x64},this[_0x24fdf4(0x316)]=0x1,this[_0x24fdf4(0x261)]=0x1,this[_0x24fdf4(0x18e)]=0x0,this[_0x24fdf4(0x36f)]=0xff,this['_realOpacity']=0xff,this[_0x24fdf4(0x2e9)]=_0x24fdf4(0x3e8),this[_0x24fdf4(0x197)]=0xa,this['_opacityFadeInTimeWhole']=0xa,this[_0x24fdf4(0x224)]=_0x24fdf4(0x21a),this[_0x24fdf4(0x2c0)]=0.05,this[_0x24fdf4(0xc0)]=0x10e,this['_angleOffset']=Math[_0x24fdf4(0xc1)](0x168),this[_0x24fdf4(0x42b)]=![],this[_0x24fdf4(0x372)]=0x0,this[_0x24fdf4(0x456)]=0x0,this[_0x24fdf4(0x1ce)]=0x0,this[_0x24fdf4(0x194)]=0x0,this[_0x24fdf4(0x3dc)]=0x0,this[_0x24fdf4(0x3f6)]=0x0,this[_0x24fdf4(0x336)]=0x0,this[_0x24fdf4(0x2ed)]=!![],this[_0x24fdf4(0x45a)]=ImageManager[_0x24fdf4(0x4ad)](),this[_0x24fdf4(0x45a)]['addLoadListener'](this[_0x24fdf4(0x4ca)][_0x24fdf4(0x1a8)](this)),this[_0x24fdf4(0x22c)]=0x1,this[_0x24fdf4(0x513)]=[0x0,0x0,0x0,0x0];},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x12e)]=function(){const _0x18adba=_0x217234;this['type']=_0x18adba(0x4e0),this[_0x18adba(0x1cc)]=Math[_0x18adba(0xc1)](0x1e)+0x3c,this['_wholeLifespan']=this['_lifespan'],this['_lastType']=_0x18adba(0x4e0),this[_0x18adba(0x20c)]={},this[_0x18adba(0x316)]=0x1,this[_0x18adba(0x261)]=0x1,this[_0x18adba(0x18e)]=0x1,this[_0x18adba(0x36f)]=0xff,this[_0x18adba(0x434)]=0xff,this[_0x18adba(0x2e9)]=_0x18adba(0x142),this[_0x18adba(0x197)]=0x6,this[_0x18adba(0x3aa)]=0x6,this['_trajectoryType']=_0x18adba(0x2cc),this['_speed']=0x0,this[_0x18adba(0xc0)]=0x0,this[_0x18adba(0x1d5)]=0x0,this[_0x18adba(0x42b)]=![],this[_0x18adba(0x372)]=0x0,this['_angleArcTotal']=0x0,this[_0x18adba(0x1ce)]=0x0,this[_0x18adba(0x194)]=0x0,this['_spinSpeed']=Math[_0x18adba(0xc1)](0x3)+0x2,this['_xSwayRange']=0x0,this['_ySwayRange']=0x0,this[_0x18adba(0x2ed)]=!![],this[_0x18adba(0x45a)]=ImageManager[_0x18adba(0x49f)](),this[_0x18adba(0x45a)][_0x18adba(0x3b1)](this[_0x18adba(0x4ca)]['bind'](this)),this[_0x18adba(0x22c)]=0x1,this[_0x18adba(0xaf)]=0x0,this[_0x18adba(0x513)]=[0x0,0x0,0x0,0x0],this[_0x18adba(0x400)]();},Sprite_WeatherParticle['prototype'][_0x217234(0x500)]=function(){const _0x212a82=_0x217234;this[_0x212a82(0x393)]=this[_0x212a82(0x20c)]['respawnDelayMin'];const _0x36820a=this['_flags'][_0x212a82(0x49c)],_0x51bbd2=this[_0x212a82(0x506)]()[_0x212a82(0x13a)],_0x597fbc=Math['randomInt'](_0x36820a*_0x51bbd2);this['_respawnDelay']+=_0x597fbc;},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x301)]=function(){const _0x51079e=_0x217234;if(this[_0x51079e(0x20c)]['hueSwayRange'])this[_0x51079e(0x410)]();},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x410)]=function(){const _0x2c639c=_0x217234,_0xefab07=Graphics['frameCount']+this[_0x2c639c(0x353)],_0x1084b9=this[_0x2c639c(0x20c)][_0x2c639c(0xea)],_0x3d1d34=this[_0x2c639c(0x20c)][_0x2c639c(0x2f0)]/0x2,_0x5426f1=this['_baseHue']+Math[_0x2c639c(0x3ec)](_0xefab07*_0x1084b9)*_0x3d1d34;this[_0x2c639c(0x3d1)](_0x5426f1);},Sprite_WeatherParticle['prototype'][_0x217234(0x184)]=function(){const _0x10c7ba=_0x217234;this['updateScaleInOutRatio'](),this[_0x10c7ba(0x23f)]['x']=this[_0x10c7ba(0x517)](),this[_0x10c7ba(0x23f)]['y']=this[_0x10c7ba(0x152)]();},Sprite_WeatherParticle['prototype'][_0x217234(0x199)]=function(){const _0x386400=_0x217234;if(this[_0x386400(0x20c)][_0x386400(0x330)]>this[_0x386400(0x1cc)]){const _0x414b37=this[_0x386400(0x1cc)],_0x20d700=this[_0x386400(0x20c)][_0x386400(0x2a3)]??0x1;_0x414b37<=0x1?this['_scaleInOutRatio']=_0x20d700:this['_scaleInOutRatio']=(this[_0x386400(0x18e)]*(_0x414b37-0x1)+_0x20d700)/_0x414b37;}else{if(this[_0x386400(0x20c)][_0x386400(0x3fc)]>this[_0x386400(0x3c4)]-this[_0x386400(0x1cc)]){const _0x546374=this[_0x386400(0x20c)]['scaleInDuration']-(this[_0x386400(0x3c4)]-this[_0x386400(0x1cc)]),_0x96e05=0x1;_0x546374<=0x1?this['_scaleInOutRatio']=_0x96e05:this[_0x386400(0x18e)]=(this[_0x386400(0x18e)]*(_0x546374-0x1)+_0x96e05)/_0x546374;}else{if(_0x386400(0x1df)===_0x386400(0x1df))this['_scaleInOutRatio']=0x1;else{const _0x40f386=this['_cached_WeatherEffects_SnowClouds'];return _0x40f386[_0x58fa0b[_0x386400(0x1ae)](_0x49a3e8[_0x386400(0xc9)]()*_0x40f386[_0x386400(0x497)])];}}}},Sprite_WeatherParticle['prototype'][_0x217234(0x517)]=function(){const _0x183167=_0x217234;let _0x49658a=this['_baseScale'];_0x49658a*=this[_0x183167(0x316)];if(this[_0x183167(0x20c)]['flatFlutter']&&this['_flatFlutterDirX']){const _0x4fccda=Graphics[_0x183167(0x104)]+this[_0x183167(0x26d)];_0x49658a*=Math[_0x183167(0x3ec)](_0x4fccda*this[_0x183167(0x39f)]);}return _0x49658a*=this[_0x183167(0x18e)],_0x49658a;},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x152)]=function(){const _0x48d970=_0x217234;let _0x59dad8=this['_baseScale'];_0x59dad8*=this[_0x48d970(0x261)];if(this[_0x48d970(0x20c)][_0x48d970(0x246)]&&!this['_flatFlutterDirX']){const _0x25fea9=Graphics[_0x48d970(0x104)]+this[_0x48d970(0x17c)];_0x59dad8*=Math[_0x48d970(0x3ec)](_0x25fea9*this[_0x48d970(0x229)]);}return _0x59dad8*=this[_0x48d970(0x18e)],_0x59dad8;},Sprite_WeatherParticle[_0x217234(0x406)]['updatePosition']=function(){const _0x3feffb=_0x217234;this['updatePositionTrajectory'](),this[_0x3feffb(0xbe)]();},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0xbe)]=function(){const _0x4424fc=_0x217234;this['x']=this['ax'],this['y']=this['ay'],this[_0x4424fc(0x3b5)]&&(this['x']-=this[_0x4424fc(0x18f)][_0x4424fc(0x501)]['x'],this['y']-=this['_weatherParent'][_0x4424fc(0x501)]['y']),this['x']=Math[_0x4424fc(0x186)](this['x']),this['y']=Math[_0x4424fc(0x186)](this['y']);},Sprite_WeatherParticle['prototype'][_0x217234(0x4bf)]=function(){const _0x504de3=_0x217234;this[_0x504de3(0x477)](),this[_0x504de3(0x201)]();},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x477)]=function(){const _0x28e8d1=_0x217234;if(this[_0x28e8d1(0x1cc)]<=0x0)return;if(this['_opacityFadeInTime']>0x0&&this['_lifespan']>this[_0x28e8d1(0x197)])return;if(this['isLongevityAffected']())return;const _0x276479=this[_0x28e8d1(0x2e9)]||_0x28e8d1(0x516);this[_0x28e8d1(0x434)]=this['applyEasing'](this['_realOpacity'],0x0,_0x276479);},Sprite_WeatherParticle[_0x217234(0x406)]['applyEasing']=function(_0x3b52ee,_0x3f3650,_0x2296c3){const _0x134b78=_0x217234,_0x7fbb9=this[_0x134b78(0x1cc)],_0x444866=this[_0x134b78(0x3c4)],_0x10ebdf=this[_0x134b78(0xf8)]((_0x444866-_0x7fbb9)/_0x444866,_0x2296c3),_0x54f2f2=this[_0x134b78(0xf8)]((_0x444866-_0x7fbb9+0x1)/_0x444866,_0x2296c3),_0x59461b=(_0x3b52ee-_0x3f3650*_0x10ebdf)/(0x1-_0x10ebdf);return _0x59461b+(_0x3f3650-_0x59461b)*_0x54f2f2;},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0xf8)]=function(_0x21ba3b,_0x5a319e){const _0x142ec7=_0x217234;return VisuMZ[_0x142ec7(0x1cb)](_0x21ba3b,_0x5a319e);},Sprite_WeatherParticle[_0x217234(0x406)]['opacityRate']=function(){const _0x1ec0a6=_0x217234;let _0x2cdba8=0x1;if(!SceneManager[_0x1ec0a6(0x100)]()){if('KYkKL'==='NggKf')return{'type':'none','power':0x0,'powerTarget':0x0,'duration':0x0,'sprite':{'lifespan':0x3c,'lifespanVariance':0x0,'spawnLocationX':_0x1ec0a6(0xc9),'spawnOffsetX':0x0,'spawnLocationY':_0x1ec0a6(0xc9),'spawnOffsetY':0x0,'mapBound':!![],'opacity':0xff,'opacityVariance':0x0,'opacityEasingType':'Linear','opacityFadeInTime':0x10,'scale':0x1,'scaleVariance':0x0,'scaleRatioX':0x1,'scaleRatioY':0x1,'totalMinimum':0x14,'totalPerPower':0x5},'dimmer':{'color':'#000000','opacityMinimum':0x0,'opacityPerPower':0x0},'image':{'generated':!![],'generatedWeight':0x1,'icons':[],'iconsWeight':0x10,'pictures':[],'picturesWeight':0x10,'blendMode':0x0,'hueVariations':[],'toneVariations':[]},'flags':{'alwaysVisiblePlayer':![],'flatFlutter':![],'hueSwayRange':0x0,'hueSwaySpeed':0.01,'longevity':![],'respawnCommonEventID':0x0,'respawnDelayMin':0x0,'respawnDelayRngPerPower':0x0,'scaleIn':0x1,'scaleInDuration':0xa,'scaleOut':0x1,'scaleOutDuration':0xa,'fireworksFinish':![],'sparkleFinish':![]},'trajectory':{'type':'straight','lockedID':0x0,'lockedOffsetX':0x0,'lockedOffsetY':0x0,'speed':0x1,'speedVariance':0x0,'angle':0x0,'alignAngle':!![],'angleOffset':0x0,'angleVariance':0x0,'angleArc':0x0,'angleSwayRange':0x0,'angleSwaySpeed':0.01,'spinSpeed':0x0,'spinSpeedVariance':0x0,'reverseSpin':![],'xSwayRange':0x0,'xSwaySpeed':0.01,'ySwayRange':0x0,'ySwaySpeed':0.01}};else{if(this['_flags'][_0x1ec0a6(0x29d)]&&!this[_0x1ec0a6(0x18f)][_0x1ec0a6(0x2be)]){const _0x4118ff=$gamePlayer[_0x1ec0a6(0x1f5)]()-this['x'],_0x4f4bd8=$gamePlayer[_0x1ec0a6(0x281)]()-this['y'],_0x482364=Math[_0x1ec0a6(0x109)](_0x4118ff*_0x4118ff+_0x4f4bd8*_0x4f4bd8),_0x320ad1=0x5*$gameMap[_0x1ec0a6(0x255)]();if(_0x482364<=_0x320ad1)_0x2cdba8*=0.15;}}}if(this[_0x1ec0a6(0x197)]>0x0){if('xPHdI'!==_0x1ec0a6(0x1aa)){const _0x48f6fc=this[_0x1ec0a6(0x3aa)]||0x1,_0x332d42=this[_0x1ec0a6(0x197)];_0x2cdba8*=(_0x48f6fc-_0x332d42)/_0x48f6fc,this[_0x1ec0a6(0x197)]--;}else{const _0x421501=this['_cached_WeatherEffects_Icons'];return _0x421501[_0x4c3cf2['floor'](_0x51bb83[_0x1ec0a6(0xc9)]()*_0x421501[_0x1ec0a6(0x497)])];}}return _0x2cdba8;},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x201)]=function(){const _0x5433ef=_0x217234,_0x48988c=this['opacityRate']();this[_0x5433ef(0x36f)]=Math['round'](this[_0x5433ef(0x434)]*_0x48988c);},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x156)]=function(){const _0x300837=_0x217234,_0xff93ca=this['updatePositionTrajectoryAngle']();switch(this[_0x300837(0x224)]){case'straight':this['updatePositionStraightTrajectory'](_0xff93ca);break;case _0x300837(0x2cc):this[_0x300837(0x1d3)](_0xff93ca);break;case _0x300837(0x2d3):case _0x300837(0x3e3):case _0x300837(0x245):this[_0x300837(0x27c)](_0xff93ca);break;case _0x300837(0x37a):case'enemy':case _0x300837(0x38f):case _0x300837(0x487):this['updatePositionBattleLockedTarget'](_0xff93ca);break;default:this[_0x300837(0x4c6)]();break;}this[_0x300837(0x22a)](),this[_0x300837(0x476)]();},Sprite_WeatherParticle[_0x217234(0x406)]['updatePositionTrajectoryAngle']=function(){const _0x53b26f=_0x217234;this[_0x53b26f(0x456)]+=this['_angleArc'];let _0x262588=this[_0x53b26f(0xc0)]+this[_0x53b26f(0x456)];const _0x4ccc4f=Graphics['frameCount']+this[_0x53b26f(0xdf)];return _0x262588+=Math['cos'](_0x4ccc4f*this[_0x53b26f(0x479)])*this[_0x53b26f(0x1ce)],this[_0x53b26f(0x473)]=-((this[_0x53b26f(0x42b)]?_0x262588:0x0)+this[_0x53b26f(0x1d5)]),_0x262588;},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x382)]=function(_0x4a69c8){const _0x9c00c5=_0x217234,_0x5f55c8=VisuMZ[_0x9c00c5(0xd0)][_0x9c00c5(0x207)](_0x4a69c8);this['ax']+=this[_0x9c00c5(0x2c0)]*Math[_0x9c00c5(0x3ec)](_0x5f55c8),this['ay']-=this[_0x9c00c5(0x2c0)]*Math[_0x9c00c5(0x225)](_0x5f55c8);},Sprite_WeatherParticle['prototype'][_0x217234(0x4c6)]=function(){const _0x533663=_0x217234;this['ax']=Graphics[_0x533663(0x4f7)]*0x64,this['ay']=Graphics[_0x533663(0x466)]*0x64;},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x1d3)]=function(_0x138a6b){},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x27c)]=function(_0x5a4261){const _0x41c078=_0x217234;let _0x898f8d=null;if(!SceneManager[_0x41c078(0x100)]())switch(this[_0x41c078(0x224)]){case _0x41c078(0x2d3):_0x898f8d=$gamePlayer;break;case _0x41c078(0x3e3):const _0x4acc6d=this[_0x41c078(0x101)];_0x898f8d=$gamePlayer[_0x41c078(0x1fe)]()[_0x41c078(0x3e3)](_0x4acc6d);break;case _0x41c078(0x245):const _0x14f99f=this['_trajectoryLockedID'];_0x898f8d=$gameMap[_0x41c078(0x245)](_0x14f99f);break;}if(_0x898f8d){if('iPGKu'===_0x41c078(0x27a)){this['ax']=_0x898f8d[_0x41c078(0x1f5)]()+this[_0x41c078(0x4eb)],this['ay']=_0x898f8d[_0x41c078(0x281)]()+this['_lockedOffsetY'];return;}else{if(this[_0x41c078(0x2c0)]===0x0)this[_0x41c078(0x2c0)]=_0x31e79b[_0x41c078(0xc9)]();}}this[_0x41c078(0x4c6)]();},Sprite_WeatherParticle['prototype'][_0x217234(0x3f4)]=function(_0x67af7a){const _0x4372ab=_0x217234;let _0x4b1da6=null;if(SceneManager['isSceneBattle']()){if(_0x4372ab(0x272)!==_0x4372ab(0x272)){let _0x40b4fb=_0xe5a860[_0x4372ab(0xc1)](_0x3e7e1c[_0x4372ab(0x2e4)](_0x5d5ade/_0x59f16d))+_0x2f0d67*(_0x3c7b76-0x1)/_0x32a8d4;const _0x680235=_0x1d0890[_0x4372ab(0xc1)](_0x40b4fb/0x2);this[_0x4372ab(0x40d)](_0x680235,-_0x1cc33c,_0x40b4fb-_0x680235,_0xac1800*0x2,_0x5baf75,_0x587254),this[_0x4372ab(0x383)](_0x40b4fb,0x0,_0x5f0496,_0x5d3a00),this[_0x4372ab(0x383)](_0x40b4fb,0x0,_0x220cb9-(_0x38392a[_0x4372ab(0xc1)](0x2)-0x1),'white'),_0x1660d6[_0x4372ab(0x369)](_0x1ac7c0['PI']*0x2/_0x2b9160);}else switch(this[_0x4372ab(0x224)]){case _0x4372ab(0x37a):const _0x14e028=this[_0x4372ab(0x101)];_0x4b1da6=$gameActors['actor'](_0x14e028);break;case _0x4372ab(0x44c):const _0x3aea7c=this[_0x4372ab(0x101)];_0x4b1da6=$gameTroop['members']()[_0x3aea7c];break;case _0x4372ab(0x38f):_0x4b1da6=BattleManager[_0x4372ab(0xc4)];break;case'target':_0x4b1da6=BattleManager[_0x4372ab(0x34b)];!_0x4b1da6&&BattleManager['_targets']&&(_0x4b1da6=BattleManager[_0x4372ab(0x37c)][0x0]);break;}}if(_0x4b1da6){if(_0x4372ab(0x1ab)===_0x4372ab(0x16f)){const _0x5616c1=this[_0x4372ab(0x125)];_0x5616c1[_0x4372ab(0xe3)](),_0x5616c1[_0x4372ab(0x3de)](_0x420fc3-_0x31e238,_0x5f01bb-_0x5a4c2b);const _0x1a03a5=0x168*(_0x56883a['PI']/0xb4),_0x470555=_0x371bae[_0x4372ab(0xc1)](0x80),_0xaaa83c=_0x4372ab(0x158)[_0x4372ab(0x126)](_0x470555),_0x47c5c0=_0x4372ab(0x157)[_0x4372ab(0x126)](_0x470555),_0x2bfa58=_0x4372ab(0x112)[_0x4372ab(0x126)](_0x470555),_0x3c30dd=_0x4372ab(0x1ad)['format'](_0x470555),_0x22a741=_0x4372ab(0x22b)[_0x4372ab(0x126)](_0x470555),_0x312832=_0x4372ab(0x4b9)[_0x4372ab(0x126)](_0x470555),_0x4c3f0f=_0x4372ab(0x2f4)[_0x4372ab(0x126)](_0x470555),_0x1757af=_0x4372ab(0x188)[_0x4372ab(0x126)](_0x470555),_0x2697b9=_0x5616c1[_0x4372ab(0x510)](_0x585acc,_0x48a377,0xa,_0x44ed32,_0x536697,_0x3b13b0);_0x2697b9[_0x4372ab(0xda)](0x0,_0xaaa83c),_0x2697b9[_0x4372ab(0xda)](0.15,_0xaaa83c),_0x2697b9[_0x4372ab(0xda)](0.25,_0x47c5c0),_0x2697b9[_0x4372ab(0xda)](0.3,_0x47c5c0),_0x2697b9[_0x4372ab(0xda)](0.4,_0x2bfa58),_0x2697b9['addColorStop'](0.45,_0x3c30dd),_0x2697b9[_0x4372ab(0xda)](0.5,_0x3c30dd),_0x2697b9['addColorStop'](0.55,_0x22a741),_0x2697b9[_0x4372ab(0xda)](0.6,_0x312832),_0x2697b9['addColorStop'](0.65,_0x312832),_0x2697b9['addColorStop'](0.75,_0x4c3f0f),_0x2697b9[_0x4372ab(0xda)](0.85,_0x1757af),_0x2697b9[_0x4372ab(0xda)](0.95,_0xaaa83c),_0x2697b9[_0x4372ab(0xda)](0x1,_0xaaa83c),_0x5616c1[_0x4372ab(0x134)]=_0x2697b9,_0x5616c1[_0x4372ab(0x153)](),_0x5616c1['moveTo'](_0x17d71b,_0xb6f074),_0x5616c1[_0x4372ab(0x35b)](_0x5416d6,_0x27ac88),_0x5616c1['arc'](_0x7abd69,_0x9d01,_0xe602d7,0x0,_0x1a03a5),_0x5616c1['lineTo'](_0x3b13e2,_0x2b6c07),_0x5616c1[_0x4372ab(0x1cf)](),_0x5616c1[_0x4372ab(0x235)](),this[_0x4372ab(0x504)][_0x4372ab(0xb5)]();}else{const _0x2a352c=SceneManager[_0x4372ab(0x278)]['_spriteset'];if(_0x2a352c){const _0x392d7c=_0x2a352c['findTargetSprite'](_0x4b1da6);if(_0x392d7c){const _0x24cd0c=new Point(_0x392d7c['x'],_0x392d7c['y']),_0x23f667=_0x392d7c['worldTransform'][_0x4372ab(0x43f)](_0x24cd0c);this['ax']=_0x392d7c['x']-_0x23f667['x']+this[_0x4372ab(0x4eb)],this['ay']=_0x392d7c['y']-_0x23f667['y']+this['_lockedOffsetY'];return;}}}}this[_0x4372ab(0x4c6)]();},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x22a)]=function(){const _0x103f6b=_0x217234;this[_0x103f6b(0x194)]+=this[_0x103f6b(0x3dc)],this[_0x103f6b(0x473)]+=this['_spinAngle'];},Sprite_WeatherParticle[_0x217234(0x406)][_0x217234(0x476)]=function(){const _0x2593e7=_0x217234,_0x28a555=Graphics[_0x2593e7(0x104)]+this[_0x2593e7(0x257)],_0x1a0f3c=Graphics['frameCount']+this[_0x2593e7(0x103)];this['ax']+=Math[_0x2593e7(0x3ec)](_0x28a555*this[_0x2593e7(0x256)])*this['_xSwayRange']/0x2,this['ay']+=Math[_0x2593e7(0x225)](_0x1a0f3c*this[_0x2593e7(0x3cb)])*this[_0x2593e7(0x336)]/0x2;},Spriteset_Base['prototype']['createWeather']=function(){const _0x50a7a2=_0x217234;if(this[_0x50a7a2(0x1e8)])this[_0x50a7a2(0x3e4)]=this['_upperWeatherContainer'][_0x50a7a2(0x179)][0x0];else{if(_0x50a7a2(0x412)!==_0x50a7a2(0xe7))this[_0x50a7a2(0x3e4)]=new Weather(),this[_0x50a7a2(0x457)](this[_0x50a7a2(0x3e4)]);else{this[_0x50a7a2(0x393)]=this[_0x50a7a2(0x20c)][_0x50a7a2(0x3bc)];const _0x1d527a=this[_0x50a7a2(0x20c)][_0x50a7a2(0x49c)],_0x4f2f6c=this[_0x50a7a2(0x506)]()[_0x50a7a2(0x13a)],_0x16c195=_0x383f7c['randomInt'](_0x1d527a*_0x4f2f6c);this[_0x50a7a2(0x393)]+=_0x16c195;}}},Spriteset_Base['prototype'][_0x217234(0xa9)]=function(_0x1f000e,_0x206339){const _0x4f213e=_0x217234;if(!_0x1f000e)return;const _0x5e367d=Weather[_0x4f213e(0x2ef)];for(let _0x11925e=0x1;_0x11925e<=_0x5e367d;_0x11925e++){const _0x5b1be7=VisuMZ[_0x4f213e(0xd0)][_0x4f213e(0x259)](_0x11925e,_0x206339);_0x1f000e[_0x4f213e(0x457)](_0x5b1be7);}},Spriteset_Base['prototype']['createLowerWeatherLayer']=function(){const _0x5b5ac7=_0x217234;this['_lowerWeatherContainer']=new Sprite(),this[_0x5b5ac7(0xa9)](this['_lowerWeatherContainer'],!![]),this[_0x5b5ac7(0x19d)][_0x5b5ac7(0x457)](this[_0x5b5ac7(0x12f)]);},Spriteset_Base['prototype']['createUpperWeatherLayer']=function(){const _0x196ba8=_0x217234;this['_upperWeatherContainer']=new Sprite(),this[_0x196ba8(0xa9)](this[_0x196ba8(0x1e8)],![]),this['addChild'](this[_0x196ba8(0x1e8)]);},Spriteset_Base['prototype'][_0x217234(0xd9)]=function(){const _0x5d19b4=_0x217234;this[_0x5d19b4(0x305)](!![]),this[_0x5d19b4(0x305)](![]);},Spriteset_Base['prototype'][_0x217234(0x305)]=function(_0x2e6cb0){const _0x936928=_0x217234,_0x157d0e=_0x2e6cb0?this[_0x936928(0x12f)]:this[_0x936928(0x1e8)];if(!_0x157d0e)return;for(const _0x1d31f8 of _0x157d0e['children']){if('fYEtO'===_0x936928(0x43e))_0xb4c6fe[_0x936928(0x44a)](_0x42de7d,_0x535984),_0x5225a7[_0x936928(0x19c)]=_0x936928(0x238),_0x35881e['WeatherEffects'][_0x936928(0x42a)](_0x588891);else{if(!_0x1d31f8)continue;_0x1d31f8[_0x936928(0x1b6)](),_0x1d31f8[_0x936928(0x47b)]();}}},VisuMZ['WeatherEffects'][_0x217234(0x48e)]=Spriteset_Map['prototype'][_0x217234(0xc2)],Spriteset_Map[_0x217234(0x406)][_0x217234(0xc2)]=function(){const _0xd9eda6=_0x217234;this['createLowerWeatherLayer'](),VisuMZ[_0xd9eda6(0xd0)]['Spriteset_Map_createTilemap'][_0xd9eda6(0x399)](this),this[_0xd9eda6(0x41a)]();},Spriteset_Map['prototype']['createWeather']=function(){const _0x576b4d=_0x217234;Spriteset_Base[_0x576b4d(0x406)][_0x576b4d(0x218)][_0x576b4d(0x399)](this);},Spriteset_Map[_0x217234(0x406)][_0x217234(0xd9)]=function(){const _0x14416a=_0x217234;Spriteset_Base[_0x14416a(0x406)][_0x14416a(0xd9)]['call'](this);},VisuMZ[_0x217234(0xd0)]['Spriteset_Battle_createBattleback']=Spriteset_Battle[_0x217234(0x406)][_0x217234(0x1e3)],Spriteset_Battle['prototype'][_0x217234(0x1e3)]=function(){const _0x340ad4=_0x217234;this['createLowerWeatherLayer'](),VisuMZ[_0x340ad4(0xd0)][_0x340ad4(0x304)]['call'](this);},VisuMZ['WeatherEffects'][_0x217234(0x36e)]=Spriteset_Battle[_0x217234(0x406)][_0x217234(0x4b3)],Spriteset_Battle[_0x217234(0x406)][_0x217234(0x4b3)]=function(){const _0xae2b5=_0x217234;VisuMZ['WeatherEffects'][_0xae2b5(0x36e)][_0xae2b5(0x399)](this),this[_0xae2b5(0x41a)]();},Spriteset_Battle[_0x217234(0x406)]['createLowerWeatherLayer']=function(){const _0x342bf7=_0x217234;Spriteset_Base[_0x342bf7(0x406)][_0x342bf7(0x35f)]['call'](this),this[_0x342bf7(0x19d)][_0x342bf7(0x457)](this[_0x342bf7(0x12f)]);},Spriteset_Battle[_0x217234(0x406)][_0x217234(0x41a)]=function(){const _0x17557e=_0x217234;Spriteset_Base[_0x17557e(0x406)][_0x17557e(0x41a)][_0x17557e(0x399)](this),this['_baseSprite'][_0x17557e(0x457)](this[_0x17557e(0x1e8)]);},Spriteset_Battle[_0x217234(0x406)][_0x217234(0x218)]=function(){const _0x9a7ff2=_0x217234;Imported[_0x9a7ff2(0x411)]&&(_0x9a7ff2(0x31b)!==_0x9a7ff2(0x31b)?(_0xd32f94[_0x9a7ff2(0x441)](_0x9a7ff2(0x2e1)),_0x3fcac1+=_0x508107['image'][_0x9a7ff2(0x435)]||0x1):this[_0x9a7ff2(0x1d9)]()),Spriteset_Base['prototype'][_0x9a7ff2(0x218)][_0x9a7ff2(0x399)](this);},Spriteset_Battle[_0x217234(0x406)][_0x217234(0xd9)]=function(){const _0x1c526a=_0x217234;Spriteset_Base[_0x1c526a(0x406)][_0x1c526a(0xd9)]['call'](this);},VisuMZ[_0x217234(0xd0)][_0x217234(0x33e)]=Window_Options['prototype']['addGeneralOptions'],Window_Options[_0x217234(0x406)][_0x217234(0x3d7)]=function(){const _0xec4cd6=_0x217234;VisuMZ[_0xec4cd6(0xd0)][_0xec4cd6(0x33e)][_0xec4cd6(0x399)](this),this[_0xec4cd6(0x2f7)]();},Window_Options[_0x217234(0x406)]['addWeatherDensityCommand']=function(){const _0x257099=_0x217234;if(!VisuMZ[_0x257099(0xd0)][_0x257099(0x21c)][_0x257099(0x1a2)][_0x257099(0x1b2)])return;const _0x1f37b0=TextManager[_0x257099(0xb7)],_0x2bf5f5=_0x257099(0xb7);this[_0x257099(0x1e0)](_0x1f37b0,_0x2bf5f5);},VisuMZ[_0x217234(0xd0)]['Window_Options_isVolumeSymbol']=Window_Options['prototype'][_0x217234(0x2e3)],Window_Options[_0x217234(0x406)]['isVolumeSymbol']=function(_0x1b0610){const _0x1ea53f=_0x217234;if(_0x1b0610==='weatherDensity')return!![];return VisuMZ['WeatherEffects'][_0x1ea53f(0x3ae)][_0x1ea53f(0x399)](this,_0x1b0610);},VisuMZ['WeatherEffects'][_0x217234(0x207)]=function(_0x644be0){return _0x644be0*(Math['PI']/0xb4);},VisuMZ[_0x217234(0xd0)][_0x217234(0x33a)]=function(_0x5def48){return _0x5def48*(0xb4/Math['PI']);},VisuMZ[_0x217234(0xd0)][_0x217234(0x132)]=function(_0x1de760){const _0x527e87=_0x217234;return Math['randomInt'](_0x1de760+0x1)+Math[_0x527e87(0xc1)](_0x1de760+0x1)-_0x1de760;},VisuMZ[_0x217234(0xd0)][_0x217234(0x275)]=function(_0x298d42){const _0x19a578=_0x217234;return Math[_0x19a578(0xc9)]()*_0x298d42+Math[_0x19a578(0xc9)]()*_0x298d42-_0x298d42;},VisuMZ[_0x217234(0xd0)][_0x217234(0x4d2)]=function(){const _0x531adb=_0x217234;this[_0x531adb(0x2c1)]=[],this[_0x531adb(0x13e)]=[];const _0xf09698=Weather['MAX_LAYERS'];let _0x335bec=!![];for(let _0x1dd74f=0x1;_0x1dd74f<=_0xf09698;_0x1dd74f++){const _0x4f9a58=new Weather();_0x4f9a58['setLayerData'](_0x1dd74f,_0x335bec),this['_lowerLayerSprites'][_0x531adb(0x441)](_0x4f9a58);}_0x335bec=![];for(let _0x5b8f43=0x1;_0x5b8f43<=_0xf09698;_0x5b8f43++){if(_0x531adb(0x162)!==_0x531adb(0x3c8)){const _0x3447ba=new Weather();_0x3447ba['setLayerData'](_0x5b8f43,_0x335bec),this[_0x531adb(0x13e)]['push'](_0x3447ba);}else{_0x3a486e['prototype'][_0x531adb(0xb5)][_0x531adb(0x399)](this);if(this[_0x531adb(0x19c)]===_0x531adb(0x193))return;if(this[_0x531adb(0x2ed)])return;if(this[_0x531adb(0x393)]>0x0)return this[_0x531adb(0x197)]=0x0,this[_0x531adb(0x36f)]=0x0,this[_0x531adb(0x393)]--;this['updateLifespan'](),this[_0x531adb(0x301)](),this['updateScale'](),this[_0x531adb(0x47b)](),this['updateOpacity']();}}},VisuMZ[_0x217234(0xd0)][_0x217234(0x259)]=function(_0x1f63cb,_0x48f3ec){const _0x1e080e=_0x217234;if(this[_0x1e080e(0x2c1)]===undefined)this[_0x1e080e(0x4d2)]();if(this['_upperLayerSprites']===undefined)this[_0x1e080e(0x4d2)]();_0x1f63cb=(_0x1f63cb||0x1)['clamp'](0x1,Weather[_0x1e080e(0x2ef)]);const _0xfd0be0=_0x1f63cb-0x1;return _0x48f3ec?this[_0x1e080e(0x2c1)][_0xfd0be0]:this[_0x1e080e(0x13e)][_0xfd0be0];},VisuMZ[_0x217234(0xd0)][_0x217234(0x4c3)]=function(){const _0x264b7a=_0x217234;return{'type':_0x264b7a(0x193),'power':0x0,'powerTarget':0x0,'duration':0x0,'sprite':{'lifespan':0x3c,'lifespanVariance':0x0,'spawnLocationX':_0x264b7a(0xc9),'spawnOffsetX':0x0,'spawnLocationY':_0x264b7a(0xc9),'spawnOffsetY':0x0,'mapBound':!![],'opacity':0xff,'opacityVariance':0x0,'opacityEasingType':_0x264b7a(0x516),'opacityFadeInTime':0x10,'scale':0x1,'scaleVariance':0x0,'scaleRatioX':0x1,'scaleRatioY':0x1,'totalMinimum':0x14,'totalPerPower':0x5},'dimmer':{'color':'#000000','opacityMinimum':0x0,'opacityPerPower':0x0},'image':{'generated':!![],'generatedWeight':0x1,'icons':[],'iconsWeight':0x10,'pictures':[],'picturesWeight':0x10,'blendMode':0x0,'hueVariations':[],'toneVariations':[]},'flags':{'alwaysVisiblePlayer':![],'flatFlutter':![],'hueSwayRange':0x0,'hueSwaySpeed':0.01,'longevity':![],'respawnCommonEventID':0x0,'respawnDelayMin':0x0,'respawnDelayRngPerPower':0x0,'scaleIn':0x1,'scaleInDuration':0xa,'scaleOut':0x1,'scaleOutDuration':0xa,'fireworksFinish':![],'sparkleFinish':![]},'trajectory':{'type':_0x264b7a(0x21a),'lockedID':0x0,'lockedOffsetX':0x0,'lockedOffsetY':0x0,'speed':0x1,'speedVariance':0x0,'angle':0x0,'alignAngle':!![],'angleOffset':0x0,'angleVariance':0x0,'angleArc':0x0,'angleSwayRange':0x0,'angleSwaySpeed':0.01,'spinSpeed':0x0,'spinSpeedVariance':0x0,'reverseSpin':![],'xSwayRange':0x0,'xSwaySpeed':0.01,'ySwayRange':0x0,'ySwaySpeed':0.01}};},VisuMZ[_0x217234(0xd0)][_0x217234(0x214)]=function(_0x51290c){const _0x243c20=_0x217234;if(!_0x51290c)return;_0x51290c[_0x243c20(0x165)][_0x243c20(0x36f)]=0xbe,_0x51290c[_0x243c20(0x165)][_0x243c20(0x47c)]=0x1e;if(_0x51290c[_0x243c20(0x19c)]===_0x243c20(0x3b9))'pNGBZ'!=='rPZht'?(_0x51290c[_0x243c20(0x165)][_0x243c20(0x4ff)]=0x24,_0x51290c[_0x243c20(0x165)][_0x243c20(0x36f)]=0x82,_0x51290c[_0x243c20(0x165)][_0x243c20(0x47c)]=0x1e,_0x51290c[_0x243c20(0x165)]['totalMinimum']=0x50,_0x51290c[_0x243c20(0x165)]['totalPerPower']=0x14,(_0x51290c[_0x243c20(0x50b)]['color']=_0x243c20(0x51f),_0x51290c[_0x243c20(0x50b)][_0x243c20(0x4e1)]=0x6,_0x51290c['trajectory'][_0x243c20(0x31c)]=0xc),_0x51290c[_0x243c20(0x20d)][_0x243c20(0x473)]=0xff,_0x51290c[_0x243c20(0x20d)]['angleVariance']=0x5):_0x28b8e9=_0x816e73[_0x243c20(0x49e)](_0x9ca36c,_0x25ed96);else{if(_0x51290c[_0x243c20(0x19c)]===_0x243c20(0x1d4))_0x51290c['sprite'][_0x243c20(0x4ff)]=0x1c,_0x51290c[_0x243c20(0x165)][_0x243c20(0x36f)]=0x82,_0x51290c[_0x243c20(0x165)][_0x243c20(0x47c)]=0x1e,_0x51290c[_0x243c20(0x165)]['totalMinimum']=0x78,_0x51290c[_0x243c20(0x165)][_0x243c20(0x2cb)]=0x28,(_0x51290c[_0x243c20(0x50b)][_0x243c20(0x27d)]=_0x243c20(0x3db),_0x51290c[_0x243c20(0x50b)][_0x243c20(0x4e1)]=0x6,_0x51290c['trajectory'][_0x243c20(0x31c)]=0x10),_0x51290c[_0x243c20(0x20d)][_0x243c20(0x473)]=0xf5,_0x51290c[_0x243c20(0x20d)][_0x243c20(0x348)]=0xa;else _0x51290c['type']===_0x243c20(0x3b0)&&(_0x51290c[_0x243c20(0x165)]['lifespan']=0x78,_0x51290c['sprite'][_0x243c20(0x36f)]=0xa0,_0x51290c[_0x243c20(0x165)][_0x243c20(0x47c)]=0x14,_0x51290c[_0x243c20(0x165)][_0x243c20(0x292)]=0x96,_0x51290c['sprite'][_0x243c20(0x2cb)]=0x28,(_0x51290c[_0x243c20(0x50b)][_0x243c20(0x27d)]=_0x243c20(0x449),_0x51290c[_0x243c20(0x50b)]['opacityPerPower']=0x6,_0x51290c[_0x243c20(0x20d)][_0x243c20(0x31c)]=0x2),_0x51290c[_0x243c20(0x20d)][_0x243c20(0x473)]=0xdc,_0x51290c[_0x243c20(0x20d)]['angleVariance']=0xf,_0x51290c[_0x243c20(0x20d)]['xSwayRange']=0x2,_0x51290c[_0x243c20(0x20d)]['xSwaySpeed']=0.01);}},VisuMZ[_0x217234(0xd0)][_0x217234(0x42a)]=function(_0x190da5){const _0x5538d7=_0x217234,_0x54465f=VisuMZ[_0x5538d7(0xd0)][_0x5538d7(0x4c3)]();this[_0x5538d7(0xec)](_0x54465f,_0x190da5),this['applyPluginCmdSettingsCustom'](_0x54465f,_0x190da5),this[_0x5538d7(0x376)](_0x54465f,_0x190da5),this[_0x5538d7(0x4d6)](_0x54465f,_0x190da5),this[_0x5538d7(0x1eb)](_0x54465f,_0x190da5);},VisuMZ[_0x217234(0xd0)][_0x217234(0x409)]=function(){const _0x547bfc=_0x217234;return![];if(!$gameTemp['isPlaytest']())return![];return Input[_0x547bfc(0x4fb)](_0x547bfc(0x170))&&Input[_0x547bfc(0x4fb)]('shift');},VisuMZ['WeatherEffects'][_0x217234(0xec)]=function(_0x2d581f,_0x893518){const _0x4d0c1d=_0x217234;_0x2d581f['type']=_0x893518['type']||_0x4d0c1d(0x193),_0x2d581f[_0x4d0c1d(0xaa)]=(_0x893518[_0x4d0c1d(0xaa)]||0x1)[_0x4d0c1d(0xeb)](0x1,0x9),this[_0x4d0c1d(0x409)]()&&(_0x4d0c1d(0x3fa)===_0x4d0c1d(0x3fa)?_0x2d581f[_0x4d0c1d(0xaa)]=0x9:(this[_0x4d0c1d(0x3b6)]=new _0xd7ca02(0x1,0x1),this['_stormBitmap']=new _0x356393(0x1,0x1),this[_0x4d0c1d(0x110)]=new _0x180830(0x1,0x1)));},VisuMZ[_0x217234(0xd0)][_0x217234(0x43b)]=function(_0x1f6941,_0x31e01b){const _0xf5e42c=_0x217234,_0x35d15c=[_0xf5e42c(0x165),_0xf5e42c(0x50b),'image',_0xf5e42c(0x51c),'trajectory'];for(const _0x10ec69 of _0x35d15c){if(_0xf5e42c(0x279)!==_0xf5e42c(0x16e)){if(!_0x1f6941[_0x10ec69])continue;if(!_0x31e01b[_0xf5e42c(0x293)][_0x10ec69])continue;this['copyPluginCmdCustomSettings'](_0x1f6941[_0x10ec69],_0x31e01b[_0xf5e42c(0x293)][_0x10ec69]);}else _0x56f9d5[_0xf5e42c(0x44a)](_0x28f188,_0x1a1012),_0x362186[_0xf5e42c(0x19c)]=_0xf5e42c(0x4de),_0x11c568[_0xf5e42c(0xd0)]['applyPluginCmdSettings'](_0x25cebb);}},VisuMZ[_0x217234(0xd0)][_0x217234(0xe6)]=function(_0x135187,_0x1ef7d9){const _0x28a357=_0x217234;for(const _0x4f5988 in _0x135187){if(_0x28a357(0x240)===_0x28a357(0x240)){if(_0x1ef7d9[_0x4f5988]===undefined)continue;_0x135187[_0x4f5988]=_0x1ef7d9[_0x4f5988];}else{const _0x316aa1=this[_0x28a357(0x2f8)];return _0x316aa1[_0x431e1a[_0x28a357(0x1ae)](_0x5a58d7['random']()*_0x316aa1['length'])];}}},VisuMZ[_0x217234(0xd0)][_0x217234(0x376)]=function(_0x39af4e,_0x3a6610){const _0x466f96=_0x217234;if(_0x39af4e['trajectory']['type']===_0x466f96(0x245)&&_0x39af4e[_0x466f96(0x20d)]['lockedID']<=0x0){if(_0x466f96(0x4cb)===_0x466f96(0x4cb)){const _0x13ffa4=$gameTemp[_0x466f96(0x168)]();_0x39af4e[_0x466f96(0x20d)]['lockedID']=_0x13ffa4[_0x466f96(0x3c6)]();}else{const _0x4d1509=this[_0x466f96(0x3d4)];return _0x4d1509[_0xc278a0['floor'](_0x483de7[_0x466f96(0xc9)]()*_0x4d1509[_0x466f96(0x497)])];}}},VisuMZ['WeatherEffects']['applyPluginCmdSettingsLayers']=function(_0x56d83a,_0x3fe153){const _0x2102a0=_0x217234;let _0x864fad=_0x3fe153[_0x2102a0(0x317)]['map'](_0x1c8da1=>(Number(_0x1c8da1)||0x1)['clamp'](0x1,0xa)),_0x14aaea=_0x3fe153[_0x2102a0(0x511)];_0x56d83a['duration']=_0x3fe153[_0x2102a0(0x298)]||0x1;if(this['isDebugAllOption']()){if(_0x2102a0(0x4e5)!==_0x2102a0(0x4e5)){const _0xa1a3de=this[_0x2102a0(0x1ac)];return _0xa1a3de[_0x13c895[_0x2102a0(0x1ae)](_0x259c66[_0x2102a0(0xc9)]()*_0xa1a3de[_0x2102a0(0x497)])];}else _0x864fad=[0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9,0xa],_0x14aaea=_0x2102a0(0x140);}for(const _0x280d76 of _0x864fad){if(_0x2102a0(0x30f)!==_0x2102a0(0x311)){if([_0x2102a0(0x1f2),'both'][_0x2102a0(0x4a8)](_0x14aaea)){if(_0x2102a0(0x2e0)===_0x2102a0(0xc3)){const _0x4e32be=this['_cached_WeatherEffects_DiamondDust'];return _0x4e32be[_0x1f4e26[_0x2102a0(0x1ae)](_0x1f9262[_0x2102a0(0xc9)]()*_0x4e32be[_0x2102a0(0x497)])];}else $gameScreen[_0x2102a0(0x196)](_0x280d76,![],_0x56d83a);}[_0x2102a0(0xae),_0x2102a0(0x140)][_0x2102a0(0x4a8)](_0x14aaea)&&$gameScreen[_0x2102a0(0x196)](_0x280d76,!![],_0x56d83a);}else{if(_0x2525b2&&_0x20f644[_0x2102a0(0x138)]())return 0x0;if(this[_0x2102a0(0x13a)]<0x1)return 0x0;const _0x919e57=this[_0x2102a0(0x506)](),_0x1ad7fd=_0x919e57[_0x2102a0(0x165)][_0x2102a0(0x292)]||0x0,_0x1165ae=_0x919e57[_0x2102a0(0x165)][_0x2102a0(0x2cb)]||0x0,_0x33dddc=(_0x33679d[_0x2102a0(0xb7)]??0x64)/0x64,_0x2fb217=_0x344b51[_0x2102a0(0x186)](this[_0x2102a0(0x13a)]*_0x1165ae*_0x33dddc)+_0x1ad7fd;return _0x28153e[_0x2102a0(0x186)](_0x2fb217);}}},VisuMZ['WeatherEffects'][_0x217234(0x1eb)]=function(_0x40a925,_0x1e94a2){const _0x2fe195=_0x217234;if(!_0x1e94a2['WaitForCompletion'])return;const _0x47fddc=$gameTemp[_0x2fe195(0x168)]();if(_0x47fddc){if(_0x2fe195(0x2e8)===_0x2fe195(0x11d)){const _0x20eb30=this['_cached_WeatherEffects_SmokeFog'];return _0x20eb30[_0x8821e1[_0x2fe195(0x1ae)](_0xd2b1[_0x2fe195(0xc9)]()*_0x20eb30[_0x2fe195(0x497)])];}else _0x47fddc[_0x2fe195(0xef)](_0x40a925['duration']||0x1);}};