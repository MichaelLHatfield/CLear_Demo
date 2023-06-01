//=============================================================================
// VisuStella MZ - Core Engine
// VisuMZ_0_CoreEngine.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_0_CoreEngine = true;

var VisuMZ = VisuMZ || {};
VisuMZ.CoreEngine = VisuMZ.CoreEngine || {};
VisuMZ.CoreEngine.version = 1.65;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 0] [Version 1.65] [CoreEngine]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Core_Engine_VisuStella_MZ
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Core Engine plugin is designed to fix any bugs that may have slipped
 * past RPG Maker MZ's source code and to give game devs more control over
 * RPG Maker MZ's various features, ranging from mechanics to aesthetics to
 * quality of life improvements.
 *
 * Features include all (but not limited to) the following:
 *
 * * Bug fixes for the problems existing in the RPG Maker MZ base code.
 * * Failsafes added for Script Call related event commands.
 * * Lots of Quality of Life Settings that can be activated through the
 *   Plugin Parameters.
 * * Control over the various Text Colors used throughout the game.
 * * Change up the maximum amount of gold carried, give it an icon attached to
 *   the label, and include text for overlap specifics.
 * * Preload images as the game boots up.
 * * Add specific background images for menus found throughout the game.
 * * A button assist window will appear at the top or bottom of the screen,
 *   detailing which buttons do what when inside a menu. This feature can be
 *   turned off.
 * * Choose which in-game battler parameters to display inside menus (ie ATK,
 *   DEF, AGI, etc.) and determine their maximum values, along with plenty of
 *   notetags to give more control over parameter, x-parameter, s-parameter
 *   bonuses through equipment, states, and other trait objects.
 * * Control over how the UI objects appear (such as the menu button, cancel
 *   button, left/right actor switch buttons).
 * * Reposition actors and enemies if the battle resolution is larger.
 * * Allow class names and nicknames to support text codes when displayed.
 * * Determine how windows behave in the game, if they will mask other windows,
 *   their line height properties, and more.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 0 ------
 *
 * This plugin is a Tier 0 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ Plugin library.
 *
 * ============================================================================
 * Important Changes: Bug Fixes
 * ============================================================================
 *
 * This plugin also serves to fix various bugs found in RPG Maker MZ that have
 * been unaddressed or not yet taken care of. The following is a list of bugs
 * that have been fixed by this plugin:
 *
 * ---
 *
 * Attack Skill Trait
 *
 * Enemies are unaffected by the Attack Skill Trait. This means if they have
 * an Attack action, they will always use Attack over and over even if their
 * Attack Skill Trait has been changed. This plugin will change it up so that
 * the Attack skill will comply with whatever their Attack Skill Trait's skill
 * is set to.
 *
 * ---
 *
 * Auto Battle Actor Skill Usage
 *
 * If an actor with Auto Battle has access to a skill but not have any access
 * to that skill's type, that actor will still be able to use the skill during
 * Auto Battle despite the fact that the actor cannot use that skill during
 * manual input.
 *
 * ---
 * 
 * Auto Battle Attack Seal Bypass
 * 
 * By default, if the attack skill is sealed via a trait and an actor has
 * auto-battle, the action can still be used via auto-battle. This is now fixed
 * and actors should not be able to attack via auto-battle if their attack
 * ability is sealed.
 * 
 * ---
 * 
 * Auto Battle Lock Up
 * 
 * If an auto battle Actor fights against an enemy whose DEF/MDF is too high,
 * they will not use any actions at all. This can cause potential game freezing
 * and softlocks. This plugin will change that and have them default to a
 * regular Attack.
 * 
 * ---
 * 
 * Battle Forced End Action Crash
 * 
 * Depending on various circumstances, currently active battlers can be cleared
 * from the battle system at will due to a number of reasons. However, if it
 * just so happens that the targets are cleared, too, with actions remaining,
 * then a crash will follow up. This plugin will prevent that change. Fix made
 * by Olivia.
 * 
 * ---
 * 
 * Gamepad Repeat Input
 * 
 * Cleared inputs on gamepads do not have a downtime and will trigger the
 * following input frame. The causes problems with certain RPG Maker MZ menus
 * where the inputs have to be cleared as the next immediate frame will have
 * them inputted again. This plugin changes it so that whenever inputs are
 * cleared, there is a downtime equal to the keyboard clear frames before the
 * gamepad input is registered once more.
 * 
 * ---
 * 
 * Invisible Battle Sprites
 * 
 * If you removed a party member during battle and added that exact party
 * member back into the same slot, their sprite would appear invisible. The
 * VisuStella Core Engine will fix this problem and prevent it from happening.
 * 
 * ---
 * 
 * Instant Text Discrepancy for Window_Message
 * 
 * Window_Message displays text differently when it draws letters one by one
 * versus when the text is displayed instantly. This isn't noticeable with the
 * default font, but it's very visible when using something like Arial. The
 * error is due to Bitmap.measureTextWidth yielding a rounded value per letter
 * versus per word. The Core Engine will provide a bug fix that will single out
 * the cause and make it so that only Window_Message will not utilize any round
 * number values when determining the width of each letter, whether or not it
 * is shown instantly. This change will only affect Window_Message and not any
 * other window in order to prevent unintended side effects.
 * 
 * This can be disabled through the Plugin Parameters:
 * 
 * Plugin Parameters > QoL Settings > Misc > Font Width Fix
 * 
 * ---
 *
 * Move Picture, Origin Differences
 *
 * If a Show Picture event command is made with an Origin setting of
 * "Upper Left" and a Move Picture event command is made afterwards with an
 * Origin setting of "Center", RPG Maker MZ would originally have it instantly
 * jump into the new origin setting without making a clean transition between
 * them. This plugin will create that clean transition between origins.
 *
 * ---
 * 
 * Overly-Protective Substitute
 * 
 * When an ally with critical health is being targeted by a friendly non-
 * Certain Hit skill (such as a heal or buff) and another ally has the
 * substitute state, the other ally would "protect" the originally targeted
 * ally and take the heal or buff.
 * 
 * The new changed behavior is that now, substitute will not trigger for any
 * actions whose scope targets allies.
 * 
 * ---
 * 
 * Status Window Name Vertical Cutoffs
 * 
 * In the battle status windows, whenever actor names are displayed, the bitmap
 * used to display their name text do not extend vertically all the way,
 * causing letters like lowercase "Q" and "G" to be cut off, making them hard
 * to distinguish from one another. The Core Engine will remedy this by
 * extending the bitmap to allow enough room. Fix made by Irina.
 * 
 * ---
 * 
 * Termination Clear Effects
 * 
 * In RPG Maker MZ, requesting an animation while transitioning between
 * scenes, such as going from the map scene to the battle scene, can cause
 * crashes. This is because the animation queue does not take off immediately
 * and will likely register incorrect targets for the scene. This plugin will
 * forcefully clear any registered animations and balloon effects when
 * terminating a scene in order to prevent crashes.
 * 
 * ---
 * 
 * Timer Sprite
 * 
 * By default, RPG Maker MZ adds Sprite_Timer into its spriteset, either for
 * maps or for battles. There is one major problem with this: when spritesets
 * are affected by filters, zooms, and/or blurs, this hinders how readable the
 * timer sprite is, making the information perceived by the player to be much
 * harder than it needs to be. The Core Engine adds the sprite to the parent
 * scene instead of the spriteset to ensure it's unobscured by anything else.
 * 
 * ---
 * 
 * Unusable Battle Items
 * 
 * If any party member is able to use an item in battle, then all party members
 * are able to use said item, even if that party member is supposed to be
 * unable to use that item. This is now changed so that battle items are
 * checked on an individual basis and not on a party-wide basis.
 * 
 * ---
 * 
 * Window Arrows Sprite Tearing
 * 
 * If a window object in RPG Maker MZ were to have an odd number for width size
 * then the arrow elements found for the window would be positioned on a half
 * pixel, giving it a blurry look and also have sprite tearing issues. This is
 * now fixed by rounding the number to the nearest whole number.
 * 
 * ---
 * 
 * Window Client Area Scaling Bug
 * 
 * If the window has a scale value different from 1.0, the client area (the
 * interactable parts) will not scale properly and appear clipped out. This
 * is now fixed by adjusting the client area to the window's scale values and
 * rounding upward to the nearest whole number.
 * 
 * ---
 * 
 * Window Skin Bleeding
 * 
 * This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 * been set from 96 to 95. This results in the window skin bleeding past the
 * window's intended borders. The Core Engine now reverts this change to
 * prevent the bleeding effect from happening.
 * 
 * ---
 *
 * ============================================================================
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Scroll-Linked Pictures
 *
 * - If a Parallax has a ! at the start of its filename, it is bound to the map
 * scrolling. The same thing now happens with pictures. If a Picture has a ! at
 * the start of its filename, it is bound to the map's scrolling as well.
 *
 * ---
 *
 * Movement Route Scripts
 *
 * - If code in a Movement Route Script command fails, instead of crashing the
 * game, it will now act as if nothing happened except to display the cause of
 * the error inside the console.
 *
 * ---
 * 
 * Script Call Failsafes
 * 
 * - If code found in Conditional Branches, Control Variables, and/or Script
 * Calls fail to activate, instead of crashing the game, it will now act as if
 * nothing happened except to display the cause of the error inside the
 * console.
 * 
 * ---
 * 
 * Digit Grouping
 * 
 * - There exists an option to change how numbers are displayed and converted
 * in your game. This option can be enabled or disabled by going into the
 * Plugin Manager > VisuMZ_0_OptionsCore > Quality of Life Settings >
 * Digit Grouping and toggling on/off whichever ones you want.
 * 
 * - Digit Grouping will follow the rules of whatever country/locale the Plugin
 * Parameters are set to. If it's to default 'en-US', then 1234567.123456 will
 * become 1,234,567.123456. Set it to 'es-ES' and it becomes 1.234.567,123456
 * instead.
 * 
 * - This uses JavaScript's Number.toLocaleString() function and will therefore
 * follow whatever rules it has. This means if there are trailing zeroes at the
 * end of a decimal, it will cut them off. Numbers like 123.45000 will become
 * 123.45 instead. Excess numbers past 6 decimal places will be rounded. A
 * number like 0.123456789 will become 0.123457 instead.
 * 
 * - Numbers in between [ and ], < and > will be excluded from digit grouping
 * in order for text codes to be preserved accurately. \I[1234] will remain as
 * \I[1234].
 * 
 * - If you would like to enter in a number without digit grouping, surround it
 * with {{ and }}. Typing in {{1234567890}} will yield 1234567890.
 * 
 * ---
 * 
 * Show Scrolling Text, additional functionality
 * 
 * The event command "Show Scrolling Text" now has additional functionality as
 * long as the VisuStella MZ Core Engine is installed. If the game dev inserts
 * "// Script Call" (without the quotes) inside the scrolling text, then the
 * entirity of the Show Scrolling Text event command will be ran as a giant
 * script call event command.
 * 
 * The reason why this functionality is added is because the "Script..." event
 * command contains only 12 lines maximum. This means for any script call
 * larger than 12 lines of code cannot be done by normal means as each script
 * call is ran as a separate instance.
 * 
 * By repurposing the "Show Scrolling Text" event command to be able to
 * function as an extended "Script..." event command, such a thing is now
 * possible with less hassle and more lines to code with.
 * 
 * This effect does not occur if the Show Scrolling Text event command does not
 * have "// Script Call" in its contents.
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
 * === Actors-Related Notetags ===
 *
 * Parameter limits can be adjusted in the Plugin Parameters, but this won't
 * lift the ability to change the values of an actor's initial or max level
 * past the editor's limits. Instead, this must be done through the usage of
 * notetags to accomplish the feat.
 *
 * ---
 *
 * <Max Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's max level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * <Initial Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's initial level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * === Classes-Related Notetags ===
 *
 * As actor levels can now surpass 99 due to the notetag system, there may be
 * some skills you wish certain classes can learn upon reaching higher levels
 * past 99, too.
 *
 * ---
 * 
 * <Learn At Level: x>
 *
 * - Used for: Class Skill Learn Notetags
 * - Replace 'x' with an integer to determine the level this class will learn
 *   the associated skill at.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the class's database value.
 *
 * ---
 *
 * === Enemies-Related Notetags ===
 *
 * Enemies are now given levels. The levels don't do anything except to serve
 * as a container for a number value. This way, levels can be used in damage
 * formulas (ie. a.atk - b.level) without causing any errors. To give enemies
 * levels, use the notetags below. These notetags also allow you to adjust the
 * base parameters, EXP, and Gold past the database limitations.
 *
 * ---
 *
 * <Level: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's level.
 * - If no level is declared, the level will default to 1.
 *
 * ---
 *
 * <param: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to alter.
 *   - This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * - Replace 'x' with an integer to set an enemy's 'param' base value.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 *
 * <EXP: x>
 * <Gold: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's EXP or Gold values.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 * 
 * === Animations-Related Notetags ===
 * 
 * Animations in RPG Maker MZ are done by Effekseer and the animation system
 * has been revamped. However, the animations are only centered on the targets
 * now, and cannot be attached to the head or foot. Insert these tags into
 * the names of the animations in the database to adjust their positions.
 * 
 * ---
 * 
 * <Head>
 * <Foot>
 * 
 * - Used for: Animation Name Tags
 * - Will set the animation to anchor on top of the sprite (if <Head> is used)
 *   or at the bottom of the sprite (if <Foot> is used).
 * 
 * ---
 * 
 * <Anchor X: x>
 * <Anchor Y: y>
 * 
 * <Anchor: x, y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation at a specific point within the sprite based on
 *   the 'x' and 'y' values.
 * - Replace 'x' and 'y' with numeric values representing their positions based
 *   on a rate where 0.0 is the furthest left/up (x, y respectively) to 1.0 for
 *   the furthest right/down (x, y respectively).
 * 
 * Examples:
 * 
 * <Anchor X: 0.4>
 * <Anchor Y: 0.8>
 * 
 * <Anchor: 0.2, 0.9>
 * 
 * ---
 * 
 * <Offset X: +x>
 * <Offset X: -x>
 * <Offset Y: +y>
 * <Offset Y: -y>
 * 
 * <Offset: +x, +y>
 * <Offset: -x, -y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation to be offset by an exact number of pixels.
 * - This does the same the editor does, except it lets you input values
 *   greater than 999 and lower than -999.
 * - Replace 'x' and 'y' with numeric values the exact number of pixels to
 *   offset the animation's x and y coordinates by.
 * 
 * Examples:
 * 
 * <Offset X: +20>
 * <Offset Y: -50>
 * 
 * <Offset: +10, -30>
 * 
 * ---
 * 
 * <Mirror Offset X>
 * <No Mirror Offset X>
 * 
 * - Used for: Animation Name Tags
 * - If an animation is mirrored, you can choose to have the animation's Offset
 *   X value be mirrored, too (or not at all).
 * - If no name tag is discovered, this will use the setting found in the
 *   Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset X setting.
 * 
 * ---
 * 
 * <Rate: x>
 * 
 * - Used for: MV Animation Name Tags
 * - Allows you to adjust the update for this MV Animation.
 *   - Does NOT work with Effekseer animations.
 * - The lower the number, the faster.
 * - Replace 'x' with a number representing the animation update rate.
 *   - Default rate: 4.
 *   - Minimum rate: 1.
 *   - Maximum rate: 10.
 * 
 * ---
 *
 * === Quality of Life-Related Notetags ===
 *
 * By default, RPG Maker MZ does not offer an encounter step minimum after a
 * random encounter has finished. This means that one step immediately after
 * finishing a battle, the player can immediately enter another battle. The
 * Quality of Life improvement: Minimum Encounter Steps allows you to set a
 * buffer range between battles for the player to have some breathing room.
 *
 * ---
 *
 * <Minimum Encounter Steps: x>
 *
 * - Used for: Map Notetags
 * - Replace 'x' with the minimum number of steps before the player enters a
 *   random encounter on that map.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => Encounter Rate Min.
 *
 * ---
 *
 * Tile shadows are automatically added to certain tiles in the map editor.
 * These tile shadows may or may not fit some types of maps. You can turn them
 * on/off with the Quality of Life Plugin Parameters or you can override the
 * settings with the following notetags:
 *
 * ---
 *
 * <Show Tile Shadows>
 * <Hide Tile Shadows>
 *
 * - Used for: Map Notetags
 * - Use the respective notetag for the function you wish to achieve.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => No Tile Shadows.
 *
 * ---
 *
 * === Basic, X, and S Parameters-Related Notetags ===
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * behaviors and give boosts to trait objects in a more controlled manner.
 *
 * ---
 *
 * <param Plus: +x>
 * <param Plus: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Rate: x%>
 * <param Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'param' value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Flat: +x>
 * <param Flat: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Max: x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Sets max caps for the 'param' to be 'x'. If there are multiple max caps
 *   available to the unit, then the highest will be selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer to determine what the max cap should be.
 *
 * ---
 *
 * <xparam Plus: +x%>
 * <xparam Plus: -x%>
 *
 * <xparam Plus: +x.x>
 * <xparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Rate: x%>
 * <xparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'xparam' value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Flat: +x%>
 * <xparam Flat: -x%>
 *
 * <xparam Flat: +x.x>
 * <xparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <sparam Plus: +x%>
 * <sparam Plus: -x%>
 *
 * <sparam Plus: +x.x>
 * <sparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Rate: x%>
 * <sparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'sparam' value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Flat: +x%>
 * <sparam Flat: -x%>
 *
 * <sparam Flat: +x.x>
 * <sparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * === JavaScript Notetags: Basic, X, and S Parameters ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Basic, X, and S Parameters.
 *
 * ---
 *
 * <JS param Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' plus value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' rate value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' flat value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Max: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to determine what the max cap for 'param' should be. If there
 *   are multiple max caps available to the unit, then the highest is selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine the max cap for the
 *   desired parameter.
 *
 * ---
 *
 * <JS xparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' plus value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the X parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS xparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' rate value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the X parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS xparam Flat: code>
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' flat value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the X parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' plus value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the S parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' rate value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the S parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' flat value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the S parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 * 
 * === Battle Setting-Related Notetags ===
 * 
 * These tags will change the settings for battle regardless of how the battle
 * system is set up normally. Insert these tags in either the noteboxes of maps
 * or the names of troops for them to take effect. If both are present for a
 * specific battle, then priority goes to the setting found in the troop name.
 * 
 * ---
 * 
 * <FV>
 * <Front View>
 * <Battle View: FV>
 * <Battle View: Front View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to front view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/enemies/
 *   folder as they will used instead of the "sv_enemies" graphics.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <SV>
 * <Side View>
 * <Battle View: SV>
 * <Battle View: Side View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to side view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/sv_enemies/
 *   folder as they will used instead of the "enemies" graphics.
 * - Make sure your actors have "sv_actor" graphics attached to them.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <DTB>
 * <Battle System: DTB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the default battle system (DTB).
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <TPB Active>
 * <ATB Active>
 * <Battle System: TPB Active>
 * <Battle System: ATB Active>
 * 
 * <TPB Wait>
 * <ATB Wait>
 * <Battle System: TPB Wait>
 * <Battle System: ATB Wait>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the time progress battle system (TPB) or
 *   active turn battle system (ATB) if you have VisuMZ_2_BattleSystemATB
 *   installed for the game project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <BTB>
 * <Battle System: BTB>
 * 
 * <CTB>
 * <Battle System: CTB>
 * 
 * <ETB>
 * <Battle System: ETB>
 * 
 * <FTB>
 * <Battle System: FTB>
 * 
 * <OTB>
 * <Battle System: OTB>
 * 
 * <PTB>
 * <Battle System: PTB>
 * 
 * <STB>
 * <Battle System: STB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the respective battle system as long as you
 *   have those plugins installed in the current project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
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
 * === Animation Commands ===
 * 
 * ---
 * 
 * Animation: Play at Coordinate
 * - Plays an animation on the screen at a specific x, y coordinate even if
 *   there is no sprite attached.
 * 
 *   Animation ID:
 *   - Plays this animation.
 * 
 *   Coordinates:
 * 
 *     X:
 *     Y:
 *     - X/Y coordinate used for the animation.
 *       You may use JavaScript code.
 * 
 *   Mirror Animation?:
 *   - Mirror the animation?
 * 
 *   Mute Animation?:
 *   - Mute the animation?
 * 
 * ---
 * 
 * === Debug Plugin Commands ===
 * 
 * ---
 * 
 * Debug: Current Controller ID
 * - PLAY TEST ONLY.
 * - Shows current controller ID in debug console.
 * - If you press a key on the keyboard, this data will be erased.
 * - Also copies to computer clipboard if possible.
 * 
 * ---
 * 
 * === Export Plugin Commands ===
 * 
 * ---
 * 
 * Export: All Maps Text
 * - PLAY TEST ONLY. Exports all of the text from all maps,
 *   their events, event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: All Troops Text
 * - PLAY TEST ONLY. Exports all of the text from all troops,
 *   their event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: Current Map Text
 * - PLAY TEST ONLY. Exports all of the text on the current map,
 *   its events, the event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * Export: Current Troop Text
 * - PLAY TEST ONLY. Exports all of the text on the current troop,
 *   the troop's event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * === Game Plugin Commands ===
 * 
 * ---
 *
 * Game: Open URL
 * - Opens a website URL from the game.
 *
 *   URL:
 *   - Where do you want to take the player?
 *
 * ---
 * 
 * === Gold Plugin Commands ===
 * 
 * ---
 *
 * Gold: Gain/Lose
 * - Allows you to give/take more gold than the event editor limit.
 *
 *   Value:
 *   - How much gold should the player gain/lose?
 *   - Use negative values to remove gold.
 *
 * ---
 * 
 * === Map Plugin Commands ===
 * 
 * ---
 * 
 * Map: Once Parallel
 * - Plays a Common Event parallel to the event once without repeating itself
 *   when done.
 * - Map only!
 * 
 *   Common Event ID:
 *   - The ID of the parallel Common Event to play.
 *   - Does NOT repeat itself when finished.
 *   - When exiting map scene or changing maps, all Once Parallels are cleared.
 *   - Once Parallels are not retained upon reentering the scene or map.
 *   - Once Parallels are not stored in memory and cannot be saved.
 * 
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Coordinates Mode
 * - Play Test Mode only! Gets the coordinates of a specific picture as you
 *   move it across the screen.
 * 
 *   Picture ID: 
 *   - The ID of the pictures to track the coordinates of.
 * 
 * ---
 *
 * Picture: Easing Type
 * - Changes the easing type to a number of options.
 *
 *   Picture ID:
 *   - Which picture do you wish to apply this easing to?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 *   Instructions:
 *   - Insert this Plugin Command after a "Move Picture" event command.
 *   - Turn off "Wait for Completion" in the "Move Picture" event.
 *   - You may have to add in your own "Wait" event command after.
 *
 * ---
 * 
 * Picture: Erase All
 * - Erases all pictures on the screen because it's extremely tedious to do it
 *   one by one.
 * 
 * ---
 * 
 * Picture: Erase Range
 * - Erases all pictures within a range of numbers because it's extremely
 *   tedious to do it one by one.
 * 
 *   Starting ID:
 *   - The starting ID of the pictures to erase.
 * 
 *   Ending ID:
 *   - The ending ID of the pictures to erase.
 * 
 * ---
 * 
 * Picture: Show Icon
 * - Shows an icon instead of a picture image.
 * - The picture icon can be controlled like any other picture.
 * 
 *   General:
 *
 *     Picture ID Number:
 *     - What is the ID of the picture you wish to show at?
 *     - Use a number between 1 and 100.
 *     - You may use JavaScript code.
 *
 *     Icon Index:
 *     - Select the icon index to use for this picture.
 *     - You may use JavaScript code.
 *
 *     Smooth Icon?:
 *     - This will make the icon smoothed out or pixelated.
 * 
 *   Picture Settings:
 * 
 *     Position:
 *
 *       Origin:
 *       - What is the origin of this picture icon?
 *         - Upper Left
 *         - Center
 *
 *       Position X:
 *       - X coordinate of the picture.
 *       - You may use JavaScript code.
 *
 *       Position Y:
 *       - Y coordinate of the picture.
 *       - You may use JavaScript code.
 * 
 *     Scale:
 *
 *       Width %:
 *       - Horizontal scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 *
 *       Height %:
 *       - Vertical scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 * 
 *     Blend:
 *
 *       Opacity:
 *       - Insert a number to determine opacity level.
 *       - Use a number between 0 and 255.
 *       - You may use JavaScript code.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the picture?
 * 
 * ---
 * 
 * === Screen Shake Plugin Commands ===
 * 
 * ---
 * 
 * Screen Shake: Custom:
 * - Creates a custom screen shake effect and also sets the following uses of
 *   screen shake to this style.
 * 
 *   Shake Style:
 *   - Select shake style type.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   Power:
 *   - Power level for screen shake.
 * 
 *   Speed:
 *   - Speed level for screen shake.
 * 
 *   Duration:
 *   - Duration of screenshake.
 *   - You can use code as well.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * === Switch Plugin Commands ===
 * 
 * ---
 * 
 * Switches: Randomize ID(s)
 * - Select specific Switch ID's to randomize ON/OFF.
 * 
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 * 
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 * 
 * ---
 *
 * Switches: Randomize Range
 * - Select specific Switch ID Range to randomize ON/OFF.
 * - The ratio determines the ON/OFF distribution.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 *
 * ---
 *
 * Switches: Toggle ID(s)
 * - Select specific Switch ID's to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 *
 * ---
 *
 * Switches: Toggle Range
 * - Select specific Switch ID Range to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Battle System Change
 * - Switch to a different battle system in-game.
 * - Some battle systems REQUIRE their specific plugins!
 *
 *   Change To:
 *   - Choose which battle system to switch to.
 *     - Database Default (Use game database setting)
 *     - -
 *     - DTB: Default Turn Battle
 *     - TPB Active: Time Progress Battle (Active)
 *     - TPB Wait: Time Progress Battle (Wait)
 *     - -
 *     - BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *     - CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *     - OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *     - STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 *
 * ---
 * 
 * System: Load Images
 * - Allows you to (pre) load up images ahead of time.
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory?
 * 
 * ---
 *
 * System: Main Font Size
 * - Set the game's main font size.
 *
 *   Change To:
 *   - Change the font size to this number.
 *
 * ---
 *
 * System: Side View Battle
 * - Switch between Front View or Side View for battle.
 *
 *   Change To:
 *   - Choose which view type to switch to.
 *
 * ---
 *
 * System: Window Padding
 * - Change the game's window padding amount.
 *
 *   Change To:
 *   - Change the game's standard window padding to this value.
 *
 * ---
 * 
 * === Variable Plugin Commands ===
 * 
 * ---
 * 
 * Variable: JS Eval
 * - Pick a variable ID and value to alter through JS.
 * - Allows one line of code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 * ---
 * 
 * Variable: JS Block
 * - Pick a variable ID and value to alter through JS.
 * - Allows JS block code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Quality of Life Settings
 * ============================================================================
 *
 * A variety of (optional) settings and changes are added with the Core Engine
 * to improve the quality of life for both the game devs and players alike.
 *
 * ---
 *
 * Play Test
 * 
 *   New Game on Boot:
 *   - Automatically start a new game on Play Test?
 *   - Only enabled during Play Test.
 *
 *   No Play Test Mode:
 *   - Force the game to be out of Play Test mode when play testing.
 * 
 *   Open Console on Boot:
 *   - Open the Debug Console upon booting up your game?
 *   - Only enabled during Play Test.
 *
 *   F6: Toggle Sound:
 *   - F6 Key Function: Turn on all sound to 100% or to 0%, toggling between
 *     the two.
 *   - Only enabled during Play Test.
 *
 *   F7: Toggle Fast Mode:
 *   - F7 Key Function: Toggle fast mode.
 *   - Only enabled during Play Test.
 *
 *   New Game > Common Event:
 *   - Runs a common event each time a new game is started.
 *   - Only enabled during Play Test.
 *
 * ---
 * 
 * Battle Test
 * 
 *   Add Item Type:
 *   Add Weapon Type:
 *   Add Armor Type:
 *   - Add copies of each database item, weapon, and/or armor?
 *   - Effective only during battle test.
 * 
 *   Added Quantity:
 *   - Determines how many items are added during a battle test instead of
 *     the maximum amount.
 * 
 * ---
 *
 * Digit Grouping
 *
 *   Standard Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for standard text
 *     inside windows?
 *
 *   Ex Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for ex text,
 *     written through drawTextEx (like messages)?
 *
 *   Damage Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for in-battle
 *     damage sprites?
 *
 *   Gauge Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for visible gauge
 *     sprites such as HP, MP, and TP gauges?
 * 
 *   Country/Locale
 *   - Base the digit grouping on which country/locale?
 *   - This will follow all of the digit grouping rules found here:
 *     https://www.w3schools.com/JSREF/jsref_tolocalestring_number.asp
 *
 * ---
 *
 * Player Benefit
 *
 *   Encounter Rate Min:
 *   - Minimum number of steps the player can take without any
 *     random encounters.
 *
 *   Escape Always:
 *   - If the player wants to escape a battle, let them escape the battle
 *     with 100% chance.
 *
 *   Accuracy Formula:
 *   - Accuracy formula calculation change to
 *     Skill Hit% * (User HIT - Target EVA) for better results.
 *
 *   Accuracy Boost:
 *   - Boost HIT and EVA rates in favor of the player.
 *
 *   Level Up -> Full HP:
 *   Level Up -> Full MP:
 *   - Recovers full HP or MP when an actor levels up.
 *
 * ---
 * 
 * Picture-Related
 * 
 *   Anti-Zoom Pictures:
 *   - If on, prevents pictures from being affected by zoom.
 * 
 *   Picture Containers > Detach in Battle:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the battle scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
 * 
 *   Picture Containers > Detach in Map:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the map scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
 * 
 * ---
 *
 * Misc
 * 
 *   Animation: Mirror Offset X:
 *   - When animations are mirrored, mirror their Offset X values, too.
 *   - The animation name tags <Mirror Offset X> and <No Mirror Offset X> will
 *     override this effect for that specific animation.
 *
 *   Font Shadows:
 *   - If on, text uses shadows instead of outlines.
 *
 *   Font Smoothing:
 *   - If on, smoothes fonts shown in-game.
 * 
 *   Font Width Fix:
 *   - Fixes the font width issue with instant display non-monospaced fonts
 *     in the Message Window.
 *
 *   Key Item Protection:
 *   - If on, prevents Key Items from being able to be sold and from being
 *     able to be consumed.
 * 
 *   Map Name Text Code:
 *   - If on, map names will use text codes.
 *   - If off, only the raw map name will be used.
 *
 *   Modern Controls:
 *   - If on, allows usage of the Home/End buttons.
 *   - Home would scroll to the first item on a list.
 *   - End would scroll to the last item on a list.
 *   - Shift + Up would page up.
 *   - Shift + Down would page down.
 *
 *   MV Animation Rate:
 *   - Adjusts the rate at which MV animations play.
 *   - Default: 4.
 *   - Lower for faster.
 *   - Higher for slower.
 * 
 *   NewGame > CommonEvent:
 *   - Runs a common event each time a new game during any session is started.
 *   - Applies to all types of sessions, play test or not.
 *
 *   No Tile Shadows:
 *   - Removes tile shadows from being displayed in-game.
 *
 *   Pixel Image Rendering:
 *   - If on, pixelates the image rendering (for pixel games).
 *
 *   Require Focus?
 *   - Requires the game to be focused? If the game isn't focused, it will
 *     pause if it's not the active window.
 * 
 *   Shortcut Scripts:
 *   - Enables shortcut-based script variables and functions that can be used
 *     for script calls.
 *   - Shortcut list enabled for this is as follows:
 * 
 *     $commonEvent(id)
 *     - Queues a common event.
 *     - This does not interrupt the current event to run the desired common
 *       event. Any queued common events will run after the current event list
 *       has finished.
 *     - Replace 'id' with the ID of the common event you wish to queue.
 *     - Common events only run in the map scene and battle scene.
 * 
 *     $onceParallel(id)
 *     - Runs a common event in the background as a once parallel event.
 *     - Once parallel events will run in the background like a parallel
 *       process, except that it does not repeat after finishing.
 *     - Replace 'id' with the ID of the common event you wish to run.
 *     - Only works in the map scene and battle scene. Battle scene usage will
 *       require VisuMZ_1_BattleCore.
 * 
 *     $scene
 *     - Returns current scene.
 * 
 *     $spriteset
 *     - Returns current scene's spriteset if there is one.
 * 
 *     $subject
 *     - Returns last recorded identity of the battle's subject/user.
 * 
 *     $targets
 *     - Returns last recorded targets marked in battle.
 * 
 *     $target
 *     - Returns last recorded target marked in battle.
 *     - Works better with VisuMZ_1_BattleCore.
 * 
 *     $event
 *     - Returns currently initiated map event.
 *
 *   Smart Event Collision:
 *   - Makes events only able to collide with one another if they're
 *    'Same as characters' priority.
 * 
 *   Subfolder Name Purge:
 *   - Purge subfolder name from Plugin Parameters when reading data to let
 *     Plugin Commands work properly.
 *   - This is for plugins (such as the VisuMZ library) that utilize dynamic
 *     name registrations for Plugin Commands. Turn this on if you plan on
 *     using subfolders with VisuMZ plugins.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle System
 * ============================================================================
 * 
 * Choose which battle system to use for your game.
 * 
 * Some battle systems REQUIRE their specific plugins! This means if you do not
 * have the required battle system plugin installed, it will not change over.
 * The Core Engine plugin does not contain data for all of the battle systems
 * inside its code.
 * 
 * ---
 * 
 *   Database Default (Use game database setting)
 * 
 *   -
 * 
 *   DTB: Default Turn Battle
 *   TPB Active: Time Progress Battle (Active)
 *   TPB Wait: Time Progress Battle (Wait)
 * 
 *   -
 * 
 *   BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *   CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *   ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 *   FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 *   OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *   PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 *   STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * 
 *   -
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Color Settings
 * ============================================================================
 *
 * These settings allow you, the game dev, to have more control over which
 * colors appear for what conditions found in the game. You can use regular
 * numbers to use the colors predetermined by the game's Window Skin or you
 * can use the #rrggbb format for a hex color code.
 * 
 * If the game's Window Skin is changed mid-game, the colors used will still be
 * based off the default Window Skin's colors. This is due to storing them in a
 * cache and preventing extra processing and reduces lag.
 *
 * You can find out what hex codes belong to which color from this website:
 * https://htmlcolorcodes.com/
 *
 * ---
 *
 * Basic Colors
 * - These are colors that almost never change and are used globally throughout
 *   the in-game engine.
 *
 *   Normal:
 *   System:
 *   Crisis:
 *   Death:
 *   Gauge Back:
 *   HP Gauge:
 *   MP Gauge:
 *   MP Cost:
 *   Power Up:
 *   Power Down:
 *   CT Gauge:
 *   TP Gauge:
 *   Pending Color:
 *   EXP Gauge:
 *   MaxLv Gauge:
 *   - Use #rrggbb for custom colors or regular numbers
 *   for text colors from the Window Skin.
 *
 * ---
 *
 * Alpha Colors:
 * - These are colors that have a bit of transparency to them and are specified
 *   by the 'rgba(red, green, blue, alpha)' format.
 * - Replace 'red' with a number between 0-255 (integer).
 * - Replace 'green' with a number between 0-255 (integer).
 * - Replace 'blue' with a number between 0-255 (integer).
 * - Replace 'alpha' with a number between 0 and 1 (decimal).
 * 
 *   Window Font Outline:
 *   Gauge Number Outline:
 *   Dim Color:
 *   Item Back Color:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 *
 * ---
 *
 * Conditional Colors:
 * - These require a bit of JavaScript knowledge. These determine what colors
 *   to use under which situations and uses such as different values of HP, MP,
 *   TP, for comparing equipment, and determine damage popup colors.
 * 
 *   JS: Actor HP Color:
 *   JS: Actor MP Color:
 *   JS: Actor TP Color:
 *   - Code used for determining what HP, MP, or TP color to use for actors.
 *
 *   JS: Parameter Change:
 *   - Code used for determining whatcolor to use for parameter changes.
 *
 *   JS: Damage Colors:
 *   - Code used for determining what color to use for damage types.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gold Settings
 * ============================================================================
 *
 * Gold is the main currency in RPG Maker MZ. The settings provided here will
 * determine how Gold appears in the game and certain behaviors Gold has.
 *
 * ---
 *
 * Gold Settings
 *
 *   Gold Max:
 *   - Maximum amount of Gold the party can hold.
 *   - Default 99999999
 *
 *   Gold Font Size:
 *   - Font size used for displaying Gold inside Gold Windows.
 *   - Default: 26
 *
 *   Gold Icon:
 *   - Icon used to represent Gold.
 *   - Use 0 for no icon.
 *
 *   Gold Overlap:
 *   - Text used too much Gold to fit in the window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Image Loading
 * ============================================================================
 *
 * Not all images are loaded at once in-game. RPG Maker MZ uses asynchronous
 * loading which means images are loaded when needed. This may cause delays in
 * when you want certain images to appear. However, if an image is loaded
 * beforehand, they can be used immediately provided they aren't removed from
 * the image cache.
 *
 * ---
 *
 * Image Loading
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory upon starting
 *     up the game?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Keyboard Input Settings
 * ============================================================================
 *
 * Settings for the game that utilize keyboard input. These are primarily for
 * the name input scene (Scene_Name) and the number input event command. These
 * settings have only been tested on English keyboards and may or may not be
 * compatible with other languages, so please disable these features if they do
 * not fit in with your game.
 * 
 * If a controller is connected upon entering the name change scene, it will
 * use the default manual-entry mode instead of the keyboard-entry mode. If a
 * controller button is pressed during the keyboard-entry mode, it will
 * automatically switch to the manual-entry mode.
 * 
 * This plugin does not provide support for controllers that are undetected by
 * RPG Maker MZ's default controller support.
 *
 * ---
 * 
 * Controls
 * 
 *   WASD Movement:
 *   - Enables or disables WASD movement for your game project.
 *   - Moves the W page down button to E.
 * 
 *   R Button: Dash Toggle:
 *   - Enables or disables R button as an Always Dash option toggle.
 * 
 * ---
 *
 * Name Input
 * 
 *   Enable?:
 *   - Enables keyboard input for name entry.
 *   - Only tested with English keyboards.
 * 
 *   Default Mode:
 *   - Select default mode when entering the scene.
 *     - Default - Uses Arrow Keys to select letters.
 *     - Keyboard - Uses Keyboard to type in letters.
 * 
 *   QWERTY Layout:
 *   - Uses the QWERTY layout for manual entry.
 * 
 *   Keyboard Message:
 *   - The message displayed when allowing keyboard entry.
 *   - You may use text codes here.
 * 
 *   Banned Words:
 *   - Players cannot use these words for names.
 *   - These include words inside the names.
 *   - If a banned word is used, a buzzer sound will play.
 *
 * ---
 *
 * Number Input
 * 
 *   Enable?:
 *   - Enables keyboard input for number entry.
 *   - Only tested with English keyboards.
 *
 * ---
 * 
 * Button Assist
 * 
 *   Switch to Keyboard:
 *   - Text used to describe the keyboard switch.
 * 
 *   Switch To Manual:
 *   - Text used to describe the manual entry switch.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Background Settings
 * ============================================================================
 *
 * These settings in the Plugin Parameters allow you to adjust the background
 * images used for each of the scenes. The images will be taken from the game
 * project folders img/titles1/ and img/titles2/ to load into the game.
 *
 * These settings are only available to scenes found within the Main Menu, the
 * Shop scene, and the Actor Naming scene.
 *
 * ---
 *
 * Menu Background Settings:
 *
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Individual background settings for the scene.
 *
 *   Scene_Unlisted
 *   - Individual background settings for any scenes that aren't listed above.
 *
 * ---
 *
 * Background Settings
 *
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 *
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 *
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Button Assist Window
 * ============================================================================
 *
 * In most modern RPG's, there exist small windows on the screen which tell the
 * player what the control schemes are for that scene. This plugin gives you
 * the option to add that window to the menu scenes in the form of a Button
 * Assist Window.
 *
 * ---
 *
 * General
 * 
 *   Enable:
 *   - Enable the Menu Button Assist Window.
 * 
 *   Location:
 *   - Determine the location of the Button Assist Window.
 *   - Requires Plugin Parameters => UI => Side Buttons ON.
 *
 *   Background Type:
 *   - Select background type for this window.
 *
 * ---
 *
 * Text
 * 
 *   Text Format:
 *   - Format on how the buttons are displayed.
 *   - Text codes allowed. %1 - Key, %2 - Text
 * 
 *   Multi-Key Format:
 *   - Format for actions with multiple keys.
 *   - Text codes allowed. %1 - Key 1, %2 - Key 2
 * 
 *   OK Text:
 *   Cancel Text:
 *   Switch Actor Text:
 *   - Default text used to display these various actions.
 *
 * ---
 *
 * Keys
 * 
 *   Key: Unlisted Format:
 *   - If a key is not listed below, use this format.
 *   - Text codes allowed. %1 - Key
 * 
 *   Key: Up:
 *   Key: Down:
 *   Key: Left:
 *   Key: Right:
 *   Key: Shift:
 *   Key: Tab:
 *   Key: A through Z:
 *   - How this key is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Controller Button Assist Settings
 * ============================================================================
 *
 * These are sub-settings for the Button Assist Window Plugin Parameters. Where
 * the Button Assist Window Plugin Parameters are focused on keyboard entries,
 * these sections are focused on gamepad controllers.
 * 
 * Add multiple gamepads to the list to give them different button assist text.
 * If a gamepad is being used but not listed here, the button assist text will
 * default to the keyboard version.
 * 
 * For those looking for more information regarding controllers, visit this
 * site: https://gamepad-tester.com/
 *
 * ---
 *
 * ID Information
 * 
 *   Controller ID Name:
 *   - Exact string used for this controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - Example: Xbox 360 Controller (XInput STANDARD GAMEPAD)
 * 
 *   Similarity Match:
 *   - Partial string used to check for controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - This check occurs secondary to the exact name.
 *   - Example: Xbox
 *
 * ---
 *
 * Directions
 * 
 *   Up:
 *   Left:
 *   Right:
 *   Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * Actions
 * 
 *   OK:
 *   Cancel:
 *   Menu:
 *   Shift:
 *   Page Up:
 *   Page Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *   - *NOTE*: Controllers use a different mapping scheme from keyboards.
 *     - The "cancel" button is separate from the "menu" button though, for the
 *       majority of the button assist window help text, we'll be referring to
 *       the cancel button usually.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Layout Settings
 * ============================================================================
 *
 * These settings allow you to rearrange the positions of the scenes accessible
 * from the Main Menu, the Shop scene, and the Actor Naming scene. This will
 * require you to have some JavaScript knowledge to make the windows work the
 * way you would like.
 *
 * ---
 *
 * Menu Layout Settings
 *
 *   Scene_Title:
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Various options on adjusting the selected scene.
 *
 * ---
 *
 * Scene Window Settings
 *
 *   Background Type:
 *   - Selects the background type for the selected window.
 *   - Window
 *   - Dim
 *   - Transparent
 *
 *   JS: X, Y, W, H
 *   - Code used to determine the dimensions for the selected window.
 *
 * ---
 *
 * Scene_Title Settings
 * - The following are settings unique to Scene_Title.
 *
 * Title Screen
 *
 *   Document Title Format:
 *   - Format to display text in document title.
 *   - %1 - Main Title, %2 - Subtitle, %3 - Version
 *
 *   Subtitle:
 *   - Subtitle to be displayed under the title name.
 *   
 *   Version:
 *   - Version to be display in the title screen corner.
 *   
 *   JS: Draw Title:
 *   - Code used to draw the game title.
 *   
 *   JS: Draw Subtitle:
 *   - Code used to draw the game subtitle.
 *   
 *   JS: Draw Version:
 *   - Code used to draw the game version.
 *   
 *   Button Fade Speed:
 *   - Speed at which the buttons fade in at (1-255).
 *
 * ---
 *
 * Scene_GameEnd Settings
 * - The following are settings unique to Scene_GameEnd.
 *   
 *   Command Window List:
 *   - Window commands used by the title screen.
 *   - Add new commands here.
 *
 * ---
 *
 * Command Window List
 * - This is found under Scene_Title and Scene_GameEnd settings.
 *
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 * 
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 * 
 * ---
 *
 * Title Picture Buttons:
 * - This is found under Scene_Title settings.
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 *
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 *
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 *
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 *
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Parameter Settings
 * ============================================================================
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * their behaviors and give boosts to trait objects in a controlled manner.
 *
 * ---
 *
 * Parameter Settings
 *
 *   Displayed Parameters
 *   - A list of the parameters that will be displayed in-game.
 *   - Shown in the Equip Menu.
 *   - Shown in the Status Menu.
 *
 *   Extended Parameters
 *   - The list shown in extended scenes (for other VisuStella plugins).
 *
 * ---
 *
 * === Basic Parameters ===
 *
 * MHP - MaxHP
 * - This is the maximum health points value. The amount of health points (HP)
 * a battler has determines whether or not the battler is in a living state or
 * a dead state. If the HP value is above 0, then the battler is living. If it
 * is 0 or below, the battler is in a dead state unless the battler has a way
 * to counteract death (usually through immortality). When the battler takes
 * damage, it is usually dealt to the HP value and reduces it. If the battler
 * is healed, then the HP value is increased. The MaxHP value determines what's
 * the maximum amount the HP value can be held at, meaning the battler cannot
 * be healed past that point.
 *
 * MMP - MaxMP
 * - This is the maximum magic points value. Magic points (MP) are typically
 * used for the cost of skills and spells in battle. If the battler has enough
 * MP to fit the cost of the said skill, the battler is able to use the said
 * skill provided that all of the skill's other conditions are met. If not, the
 * battler is then unable to use the skill. Upon using a skill that costs MP,
 * the battler's MP is reduced. However, the battler's MP can be recovered and
 * results in a gain of MP. The MaxMP value determines what is the maximum
 * amount the MP value can be held at, meaning the battler cannot recover MP
 * past the MaxMP value.
 *
 * ATK - Attack
 * - This is the attack value of the battler. By default, this stat is used for
 * the purpose of damage calculations only, and is typically used to represent
 * the battler's physical attack power. Given normal damage formulas, higher
 * values mean higher damage output for physical attacks.
 *
 * DEF - Defense
 * - This is the defense value of the battler. By default, this stat is used
 * for the purpose of damage calculations only, and is typically used to
 * represent the battler's physical defense. Given normal damage formulas,
 * higher values mean less damage received from physical attacks.
 *
 * MAT - Magic Attack
 * - This is the magic attack value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical attack power. Given normal damage formulas,
 * higher values mean higher damage output for magical attacks.
 *
 * MDF - Magic Defense
 * - This is the magic defense value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical defense. Given normal damage formulas,
 * higher values mean less damage received from magical attacks.
 *
 * AGI - Agility
 * - This is the agility value of the battler. By default, this stat is used to
 * determine battler's position in the battle turn's order. Given a normal turn
 * calculation formula, the higher the value, the faster the battler is, and
 * the more likely the battler will have its turn earlier in a turn.
 *
 * LUK - Luck
 * - This is the luck value of the battler. By default, this stat is used to
 * affect the success rate of states, buffs, and debuffs applied by the battler
 * and received by the battler. If the user has a higher LUK value, the state,
 * buff, or debuff is more likely to succeed. If the target has a higher LUK
 * value, then the state, buff, or debuff is less likely to succeed.
 *
 * ---
 *
 * Basic Parameters
 *
 *   HP Crisis Rate:
 *   - HP Ratio at which a battler can be considered in crisis mode.
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 8 basic parameters:
 *   - MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 *
 * Parameter Caps:
 *
 *   MaxHP Cap:
 *   MaxMP Cap:
 *   ATK Cap:
 *   DEF Cap:
 *   MAT Cap:
 *   MDF Cap:
 *   AGI Cap:
 *   LUK Cap:
 *   - Formula used to determine the selected parameter's cap.
 *   - These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 *
 * ---
 *
 * === X Parameters ===
 *
 * HIT - Hit Rate%
 * - This determines the physical hit success rate of the any physical action.
 * All physical attacks make a check through the HIT rate to see if the attack
 * will connect. If the HIT value passes the randomizer check, the attack will
 * connect. If the HIT value fails to pass the randomizer check, the attack
 * will be considered a MISS.
 *
 * EVA - Evasion Rate%
 * - This determines the physical evasion rate against any incoming physical
 * actions. If the HIT value passes, the action is then passed to the EVA check
 * through a randomizer check. If the randomizer check passes, the physical
 * attack is evaded and will fail to connect. If the randomizer check passes,
 * the attempt to evade the action will fail and the action connects.
 *
 * CRI - Critical Hit Rate%
 * - Any actions that enable Critical Hits will make a randomizer check with
 * this number. If the randomizer check passes, extra damage will be carried
 * out by the initiated action. If the randomizer check fails, no extra damage
 * will be added upon the action.
 *
 * CEV - Critical Evasion Rate%
 * - This value is put against the Critical Hit Rate% in a multiplicative rate.
 * If the Critical Hit Rate is 90% and the Critical Evasion Rate is
 * 20%, then the randomizer check will make a check against 72% as the values
 * are calculated by the source code as CRI * (1 - CEV), therefore, with values
 * as 0.90 * (1 - 0.20) === 0.72.
 *
 * MEV - Magic Evasion Rate%
 * - Where EVA is the evasion rate against physical actions, MEV is the evasion
 * rate against magical actions. As there is not magical version of HIT, the
 * MEV value will always be bit against when a magical action is initiated. If
 * the randomizer check passes for MEV, the magical action will not connect. If
 * the randomizer check fails for MEV, the magical action will connect.
 *
 * MRF - Magic Reflect Rate%
 * - If a magical action connects and passes, there is a chance the magical
 * action can be bounced back to the caster. That chance is the Magic Reflect
 * Rate. If the randomizer check for the Magic Reflect Rate passes, then the
 * magical action is bounced back to the caster, ignoring the caster's Magic
 * Evasion Rate. If the randomizer check for the Magic Reflect Rate fails, then
 * the magical action will connect with its target.
 *
 * CNT - Counter Attack Rate%
 * - If a physical action connects and passes, there is a chance the physical
 * action can be avoided and a counter attack made by the user will land on the
 * attacking unit. This is the Counter Attack Rate. If the randomizer check for
 * the Counter Attack Rate passes, the physical action is evaded and the target
 * will counter attack the user. If the randomizer check fails, the physical
 * action will connect to the target.
 *
 * HRG - HP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxHP as gained HP with a 100% success rate.
 *
 * MRG - MP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxMP as gained MP with a 100% success rate.
 *
 * TRG - TP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxTP as gained TP with a 100% success rate.
 *
 * ---
 *
 * X Parameters
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 10 X parameters:
 *   - HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 *
 * Vocabulary
 *
 *   HIT:
 *   EVA:
 *   CRI:
 *   CEV:
 *   MEV:
 *   MRF:
 *   CNT:
 *   HRG:
 *   MRG:
 *   TRG:
 *   - In-game vocabulary used for the selected X Parameter.
 *
 * ---
 *
 * === S Parameters ===
 *
 * TGR - Target Rate
 * - Against the standard enemy, the Target Rate value determines the odds of
 * an enemy specifically targeting the user for a single target attack. At 0%,
 * the enemy will almost never target the user. At 100%, it will have normal
 * targeting opportunity. At 100%+, the user will have an increased chance of
 * being targeted.
 * *NOTE: For those using the Battle A.I. Core, any actions that have specific
 * target conditions will bypass the TGR rate.
 *
 * GRD - Guard Effect
 * - This is the effectiveness of guarding. This affects the guard divisor
 * value of 2. At 100% GRD, damage will become 'damage / (2 * 1.00)'. At 50%
 * GRD, damage will become 'damage / (2 * 0.50)'. At 200% GRD, damage will
 * become 'damage / (2 * 2.00)' and so forth.
 *
 * REC - Recovery Effect
 * - This is how effective heals are towards the user. The higher the REC rate,
 * the more the user is healed. If a spell were to heal for 100 and the user
 * has 300% REC, then the user is healed for 300 instead.
 *
 * PHA - Pharmacology
 * - This is how effective items are when used by the user. The higher the PHA
 * rate, the more effective the item effect. If the user is using a Potion that
 * recovers 100% on a target ally and the user has 300% PHA, then the target
 * ally will receive healing for 300 instead.
 *
 * MCR - MP Cost Rate
 * - This rate affects how much MP skills with an MP Cost will require to use.
 * If the user has 100% MCR, then the MP Cost will be standard. If the user has
 * 50% MCR, then all skills that cost MP will cost only half the required MP.
 * If the user has 200% MCR, then all skills will cost 200% their MP cost.
 *
 * TCR - TP Charge Rate
 * - This rate affects how much TP skills with an TP will charge when gaining
 * TP through various actions. At 100%, TP will charge normally. At 50%, TP
 * will charge at half speed. At 200%, TP will charge twice as fast.
 *
 * PDR - Physical Damage Rate
 * - This rate affects how much damage the user will take from physical damage.
 * If the user has 100% PDR, then the user takes the normal amount. If the user
 * has 50% PDR, then all physical damage dealt to the user is halved. If the
 * user has 200% PDR, then all physical damage dealt to the user is doubled.
 *
 * MDR - Magical Damage Rate
 * - This rate affects how much damage the user will take from magical damage.
 * If the user has 100% MDR, then the user takes the normal amount. If the user
 * has 50% MDR, then all magical damage dealt to the user is halved. If the
 * user has 200% MDR, then all magical damage dealt to the user is doubled.
 *
 * FDR - Floor Damage Rate
 * - On the field map, this alters how much damage the user will take when the
 * player walks over a tile that damages the party. The FDR value only affects
 * the damage dealt to the particular actor and not the whole party. If FDR is
 * at 100%, then the user takes the full damage. If FDR is at 50%, then only
 * half of the damage goes through. If FDR is at 200%, then floor damage is
 * doubled for that actor.
 *
 * EXR - Experience Rate
 * - This determines the amount of experience gain the user whenever the user
 * gains any kind of EXP. At 100% EXR, the rate of experience gain is normal.
 * At 50%, the experience gain is halved. At 200%, the experience gain for the
 * user is doubled.
 *
 * ---
 *
 * S Parameters
 *
 *   JS: Formula
 *   - Formula used to determine the total value all 10 S parameters:
 *   - TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 *
 * Vocabulary
 *
 *   TGR:
 *   GRD:
 *   REC:
 *   PHA:
 *   MCR:
 *   TCR:
 *   PDR:
 *   MDR:
 *   FDR:
 *   EXR:
 *   - In-game vocabulary used for the selected S Parameter.
 *
 * ---
 *
 * Icons
 * 
 *   Draw Icons?
 *   - Draw icons next to parameter names?
 *
 *   MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK:
 *   HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG:
 *   TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR:
 *   - Icon used for the selected parameter.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Custom Parameters Settings
 * ============================================================================
 *
 * As of version 1.07, you can add Custom Parameters to your game if RPG Maker
 * MZ's default set of parameters isn't enough for you. These parameters can
 * have variable functionality depending on how you code it. More importantly,
 * these are compatible with the VisuStella MZ menus and the VisuStella Core
 * Engine's Parameters settings.
 * 
 * For clarification, these settings do NOT create brand-new parameters for you
 * to use and add to your game nor are the bonuses supported by other plugins
 * in the VisuStella MZ library. These settings exist to function as a bridge
 * for non-VisuStella MZ plugins that have created their own parameter values
 * and to show them inside VisuStella menus.
 *
 * ---
 *
 * Custom Parameter
 * 
 *   Parameter Name:
 *   - What's the parameter's name?
 *   - Used for VisuStella MZ menus.
 * 
 *   Abbreviation:
 *   - What abbreviation do you want to use for the parameter?
 *   - Do not use special characters. Avoid numbers if possible.
 * 
 *   Icon:
 *   - What icon do you want to use to represent this parameter?
 *   - Used for VisuStella MZ menus.
 * 
 *   Type:
 *   - What kind of number value will be returned with this parameter?
 *     - Integer (Whole Numbers Only)
 *     - Float (Decimals are Allowed)
 * 
 *   JS: Value:
 *   - Run this code when this parameter is to be returned.
 *
 * ---
 * 
 * Instructions on Adding Custom Parameters to VisuStella Menus
 * 
 * In the Core Engine and Elements and Status Menu Core plugins, there are
 * plugin parameter fields for you to insert the parameters you want displayed
 * and visible to the player.
 * 
 * Insert in those the abbreviation of the custom parameter. For example, if
 * you want to add the "Strength" custom parameter and the abbreviation is
 * "str", then add "str" to the Core Engine/Elements and Status Menu Core's
 * plugin parameter field for "Strength" to appear in-game. Case does not
 * matter here so you can insert "str" or "STR" and it will register all the
 * same to make them appear in-game.
 * 
 * ---
 * 
 * Instructions on Using Custom Parameters as Mechanics
 * 
 * If you want to use a custom parameter in, say, a damage formula, refer to
 * the abbreviation you have set for the custom parameter. For example, if you
 * want to call upon the "Strength" custom parameter's value and its set
 * abbreviation is "str", then refer to it as such. This is case sensitive.
 * 
 * An example damage formula would be something like the following if using
 * "str" for "Strength" and "con" for "Constitution":
 * 
 *   a.str - b.con
 * 
 * These values are attached to the Game_Battlerbase prototype class.
 * 
 * ---
 * 
 * Instructions on Setting Custom Parameter Values
 * 
 * This requires JavaScript knowledge. There is no way around it. Whatever code
 * you insert into the "JS: Value" field will return the value desired. The
 * 'user' variable will refer to the Game_Battlerbase prototype object in which
 * the information is to be drawn from.
 * 
 * Depending on the "type" you've set for the Custom Parameter, the returned
 * value will be rounded using Math.round for integers and left alone if set as
 * a float number.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Resolution Settings
 * ============================================================================
 *
 * Alter various properties to make the game look better for varying screen
 * resolutions. This is mostly for RPG Maker MZ version 1.3.0 and up where the
 * Troops tab has been updated to match the screen resolution settings found in
 * the System 2 Database tab.
 *
 * ---
 *
 * Troops
 * 
 *   Reposition Actors:
 *   - Update the position of actors in battle if the screen resolution
 *     has changed to become larger than 816x624.
 *   - Ignore if using the VisuStella MZ Battle Core.
 *   - When using the VisuStella MZ Battle Core, adjust the position through
 *     Battle Core > Parameters > Actor Battler Settings > JS: Home Position
 *
 *   Reposition Enemies:
 *   - Update the position of enemies in battle if the screen resolution
 *     has changed to become larger than 816x624.
 * 
 *     For MZ 1.3.0+?:
 *     - Both this parameter and its parent parameter need to be on when using
 *       RPG Maker MZ 1.3.0+.
 *     - If the Core Script is below 1.3.0, this setting is ignored. This does
 *       not take into account what version the editor is on. Pay attention to
 *       that as the plugin will not auto adjust for it.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Shake Settings
 * ============================================================================
 *
 * Get more screen shake effects into your game!
 * 
 * These effects have been added by Aries of Sheratan!
 *
 * ---
 *
 * Settings
 * 
 *   Default Style:
 *   - The default style used for screen shakes.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   JS: Original Style:
 *   JS: Random Style
 *   JS: Horizontal Style
 *   JS: Vertical Style
 *   - This code gives you control over screen shake for this screen
 *     shake style.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Command List Settings
 * ============================================================================
 *
 * This plugin parameter allows you to adjust the commands that appear on the
 * title screen. Some JavaScript knowledge is needed.
 *
 * ---
 *
 * Title Command
 * 
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 * 
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Picture Buttons Settings
 * ============================================================================
 *
 * These allow you to insert picture buttons on your title screen that can
 * send users to various links on the internet when clicked.
 *
 * ---
 *
 * Settings
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 * 
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 * 
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 * 
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: UI Settings
 * ============================================================================
 *
 * In previous iterations of RPG Maker, the Core Engine would allow you to
 * change the screen resolution. In MZ, that functionality is provided by
 * default but a number of UI settings still remain. These settings allow you
 * adjust how certain in-game objects and menus are displayed.
 *
 * ---
 *
 * UI Area
 *
 *   Fade Speed:
 *   - Default fade speed for transitions.
 *
 *   Box Margin:
 *   - Set the margin in pixels for the screen borders.
 *
 *   Command Window Width:
 *   - Sets the width for standard Command Windows.
 *
 *   Bottom Help Window:
 *   - Put the Help Window at the bottom of the screen?
 *
 *   Right Aligned Menus:
 *   - Put most command windows to the right side of the screen.
 *
 *   Show Buttons:
 *   - Show clickable buttons in your game?
 * 
 *     Show Cancel Button:
 *     Show Menu Button:
 *     Show Page Up/Down:
 *     Show Number Buttons:
 *     - Show/hide these respective buttons if the above is enabled.
 *     - If 'Show Buttons' is false, these will be hidden no matter what.
 *
 *   Button Area Height:
 *   - Sets the height for the button area.
 *
 *   Bottom Buttons:
 *   - Put the buttons at the bottom of the screen?
 *
 *   Side Buttons:
 *   - Push buttons to the side of the UI if there is room.
 *
 * ---
 *
 * Larger Resolutions
 *
 * ---
 *
 * Menu Objects
 *
 *   Level -> EXP Gauge:
 *   - Draw an EXP Gauge under the drawn level.
 *
 *   Parameter Arrow:
 *   - The arrow used to show changes in the parameter values.
 *
 * ---
 *
 * Text Code Support
 *
 *   Class Names:
 *   - Make class names support text codes?
 *
 *   Nicknames:
 *   - Make nicknames support text codes?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Adjust the default settings of the windows in-game. This ranges from things
 * such as the line height (to better fit your font size) to the opacity level
 * (to fit your window skins).
 *
 * ---
 *
 * Window Defaults
 * 
 *   Line Height:
 *   - Default line height used for standard windows.
 * 
 *   Item Height Padding:
 *   - Default padding for selectable items.
 * 
 *   Item Padding:
 *   - Default line padding used for standard windows.
 * 
 *   Back Opacity:
 *   - Default back opacity used for standard windows.
 *   - As of version 1.3.0, this is no longer needed.
 *   - This will still work for lower versions.
 * 
 *   Translucent Opacity:
 *   - Default translucent opacity used for standard windows.
 * 
 *   Window Opening Speed:
 *   - Default open speed used for standard windows.
 *   - Default: 32 (Use a number between 0-255)
 * 
 *   Column Spacing:
 *   - Default column spacing for selectable windows.
 *   - Default: 8
 * 
 *   Row Spacing:
 *   - Default row spacing for selectable windows.
 *   - Default: 4
 *
 * ---
 * 
 * Selectable Items:
 * 
 *   Show Background?:
 *   - Selectable menu items have dark boxes behind them. Show them?
 * 
 *   Item Height Padding:
 *   - Default padding for selectable items.
 * 
 *   JS: Draw Background:
 *   - Code used to draw the background rectangle behind clickable menu objects
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: JS: Quick Functions
 * ============================================================================
 * 
 * WARNING: This feature is highly experimental! Use it at your own risk!
 * 
 * JavaScript Quick Functions allow you to quickly declare functions in the
 * global namespace for ease of access. It's so that these functions can be
 * used in Script Calls, Control Variable Script Inputs, Conditional Branch
 * Script Inputs, Damage Formulas, and more.
 * 
 * ---
 * 
 * JS: Quick Function
 * 
 *   Function Name:
 *   - The function's name in the global namespace.
 *   - Will not overwrite functions/variables of the same name.
 * 
 *   JS: Code:
 *   - Run this code when using the function.
 * 
 * ---
 * 
 * If you have a Function Name of "Example", then typing "Example()" in a
 * Script Call, Conditional Branch Script Input, or similar field will yield
 * whatever the code is instructed to return.
 * 
 * If a function or variable of a similar name already exists in the global
 * namespace, then the quick function will be ignored and not created.
 * 
 * If a quick function contains bad code that would otherwise crash the game,
 * a fail safe has been implemented to prevent it from doing so, display an
 * error log, and then return a 0 value.
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
 * Version 1.65: June 30, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Parameter Settings > Show Actor Level?
 * **** Show the actor level when displaying actors?
 * **** Used for most windows in-game.
 * 
 * Version 1.64: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Debug: Current Controller ID
 * **** PLAY TEST ONLY. Shows current controller ID in debug console.
 * **** Also copies to computer clipboard if possible.
 * ** New Plugin Parameters made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Subsettings for Button Assist Window: Controller Button Assist
 * **** These are sub-settings for the Button Assist Window Plugin Parameters.
 *      Where the Button Assist Window Plugin Parameters are focused on
 *      keyboard entries, these sections are focused on gamepad controllers.
 * **** Add multiple gamepads to the list to give them different button assist
 *      text. If a gamepad is being used but not listed here, the button assist
 *      text will default to the keyboard version.
 * 
 * Version 1.63: May 2, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > QoL Settings > Misc > Map Name Text Code
 * **** If on, map names will use text codes.
 * **** If off, only the raw map name will be used.
 * * Feature Update!
 * ** The map name text code change will no longer be on forcefully. It is now
 *    something that can be toggled by Plugin Parameters. Update by Irina.
 * 
 * Version 1.62: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu and sponsored by Archeia:
 * *** Variable: JS Eval
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows one line of code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * *** Variable: JS Block
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows JS block code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * ** Map names can now use text codes. Made by Arisu and sponsored by Archeia.
 * 
 * Version 1.61: April 21, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Battle Forced End Action Crash
 * **** Depending on various circumstances, currently active battlers can be
 *      cleared from the battle system at will due to a number of reasons.
 *      However, if it just so happens that the targets are cleared, too, with
 *      actions remaining, then a crash will follow up. This plugin will
 *      prevent that change. Fix made by Olivia.
 * 
 * Version 1.60: April 14, 2022
 * * Bug Fixes!
 * ** Number Input window will now respond to Home/End keys properly.
 *    Fix made by Olivia.
 * 
 * Version 1.59: April 7, 2022
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.4 compatibility update!
 * *** "Shutdown" command should now be more compatible with other aspects of
 *     the client when running from Node JS client on other OS's.
 * 
 * Version 1.58: March 24, 2022
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.57: March 3, 2022
 * * Compatibility Update!
 * ** The "Shutdown" command from the title screen should now be compatible
 *    with RPG Maker MZ 1.4.4 and up. Update made by Olivia.
 * 
 * Version 1.56: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New features added by Arisu and sponsored by Anon:
 * *** Plugin Parameters > QoL > Misc > Shortcut Scripts
 * **** Enables shortcut-based script variables and functions that can be used
 *      for script calls.
 * **** Shortcut list enabled for this is as follows:
 * ***** $commonEvent(id), $onceParallel(id), $scene, $spriteset, $subject, 
 *       $targets, $target, $event
 * ***** For more information on how to use them, review the help file.
 * 
 * Version 1.55: January 27, 2022
 * * Feature Update!
 * ** Once Parallels for the map are now able to update even while other events
 *    are running. Update made by Arisu.
 * 
 * Version 1.54: January 13, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Overly-Protective Substitute
 * *** When an ally with critical health is being targeted by a friendly non-
 *     Certain Hit skill (such as a heal or buff) and another ally has the
 *     substitute state, the other ally would "protect" the originally targeted
 *     ally and take the heal or buff.
 * *** The new changed behavior is that now, substitute will not trigger for
 *     any actions whose scope targets allies.
 * *** Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new MZ Bug: Overly-Protective Substitute.
 * * Feature Update!
 * ** Added a failsafe for those who did not update the plugin parameter
 *    settings and are using MV Animations.
 * 
 * Version 1.53: December 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetag added by Olivia:
 * *** <Rate: x>
 * **** Allows you to adjust the update for this MV Animation.
 * ***** Does NOT work with Effekseer animations.
 * **** The lower the number, the faster.
 * **** Replace 'x' with a number representing the animation update rate.
 * ***** Default rate: 4.
 * ***** Minimum rate: 1.
 * ***** Maximum rate: 10.
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > Qualify of Life Settings > MV Animation Rate
 * **** Adjusts the rate at which MV animations play.
 * **** Default: 4. Lower for faster. Higher for slower.
 * * Optimization Update!
 * ** MV Animations should run more optimized.
 * 
 * Version 1.52: December 16, 2021
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.0 compatibility update!
 * *** MV Animations played on screen level will now show up properly in the
 *     center of the screen.
 * 
 * Version 1.51: December 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** In the battle status windows, whenever actor names are displayed, the
 *     bitmap used to display their name text do not extend vertically all the
 *     way, causing letters like lowercase "Q" and "G" to be cut off, making
 *     them hard to distinguish from one another. The Core Engine will remedy
 *     this by extending the bitmap to allow enough room. Fix made by Irina.
 * 
 * Version 1.50: November 4, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** By default, if the attack skill is sealed via a trait and an actor has
 *     auto-battle, the action can still be used via auto-battle. This is now
 *     fixed and actors should not be able to attack via auto-battle if their
 *     attack ability is sealed. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.49: October 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Map: Once Parallel
 * **** Plays a Common Event parallel to the event once without repeating
 *      itself when done. Map only!
 * **** When exiting map scene or changing maps, all Once Parallels are cleared
 * **** Once Parallels are not retained upon reentering the scene or map.
 * **** Once Parallels are not stored in memory and cannot be saved.
 * 
 * Version 1.48: October 21, 2021
 * * Feature Update!
 * ** Bitmap.blt function will now have source coordinates and destination X
 *    and Y coordinates rounded to prevent blurring. Update made by Olivia.
 * 
 * Version 1.47: October 14, 2021
 * * Bug Fixes!
 * ** Prevents Number Input window from having a NaN value due to holding down
 *    the fast forward key. Fix made by Arisu.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Misc > Font Width Fix
 * **** Fixes the font width issue with non-monospaced fonts in the Message
 *      Window. This is now an optional fix.
 * 
 * Version 1.46: September 23, 2021
 * * Documentation Update!
 * ** Added line to Plugin Command: "System: Battle System Change":
 * *** Some battle systems REQUIRE their specific plugins!
 * ** Added lines to "Plugin Parameters: Battle System":
 * *** Some battle systems REQUIRE their specific plugins! This means if you do
 *     not have the required battle system plugin installed, it will not change
 *     over. The Core Engine plugin does not contain data for all of the battle
 *     systems inside its code.
 * 
 * Version 1.45: September 17, 2021
 * * Bug Fixes!
 * ** Fixed a problem with "Picture: Coordinates Mode" to properly utilize the
 *    correct picture ID. Fix made by Arisu.
 * ** RPG Maker MZ Bug Fix:
 * *** Instant Text Discrepancy for Window_Message
 * **** Window_Message displays text differently when it draws letters one by
 *      one versus when the text is displayed instantly. This isn't noticeable
 *      with the default font, but it's very visible when using something like
 *      Arial. The error is due to Bitmap.measureTextWidth yielding a rounded
 *      value per letter versus per word. The Core Engine will provide a bug
 *      fix that will single out the cause and make it so that only
 *      Window_Message will not utilize any round number values when
 *      determining the width of each letter, whether or not it is shown
 *      instantly. This change will only affect Window_Message and not any
 *      other window in order to prevent unintended side effects.
 * **** Fix made by Yanfly.
 * * Compatibility Update!
 * ** RPG Maker MZ 1.3.3 compatibility.
 * *** Updated how gauges are drawn.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.44: August 20, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Anon.
 * *** "Animation: Play at Coordinate"
 * **** Plays an animation on the screen at a specific x, y coordinate even if
 *      there is no sprite attached.
 * 
 * Version 1.43: July 23, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Archeia!
 * *** "Picture: Coordinates Mode"
 * **** Play Test Mode only!
 * **** Gets the coordinates of a specific picture as you move it across the
 *      screen.
 * **** Helpful for those who don't want to do guess work on the screen
 *      coordinates when it comes to placing down pictures.
 * 
 * Version 1.42: July 16, 2021
 * * Documentation Update
 * ** Added text to "Plugin Parameters: Color Settings" for clarification:
 * *** If the game's Window Skin is changed mid-game, the colors used will
 *     still be based off the default Window Skin's colors. This is due to
 *     storing them in a cache and preventing extra processing and reduces lag.
 * 
 * Version 1.41: July 2, 2021
 * * Compatibility Update
 * ** Further compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update
 * ** Added extra notes to "Important Changes: Bug Fixes" section for the
 *    "Window Skin Bleeding" bug:
 * *** This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Version 1.40: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update:
 * ** Plugin Parameters > Window Settings > Back Opacity
 * *** As of version 1.3.0, this is no longer needed.
 * *** This will still work for lower versions.
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** Window Skin Bleeding fix updated to newest version.
 * * New Plugin Parameters added:
 * ** Plugin Parmaeters > Screen Resolution Settings
 * *** These settings have been moved from the UI settings to be its own thing.
 * **** This is mostly for RPG Maker MZ version 1.3.0 and up where the Troops
 *      tab has been updated to match the screen resolution settings found in
 *      the System 2 Database tab.
 * *** Reposition Enemies > For MZ 1.3.0+?
 * **** Both of these plugin parameters need to be set to true in order for the
 *      repositioning to work for MZ v1.3.0.
 * **** If the Core Script is below 1.3.0, this setting is ignored. This does
 *      not take into account what version the editor is on. Pay attention to
 *      that as the plugin will not auto adjust for it.
 * 
 * Version 1.39: June 18, 2021
 * * Bug Fixes!
 * ** Number Inputs should now work with the controller if keyboard Number
 *    Input is enabled. Fix made by Olivia.
 * ** RPG Maker Bug: Termination Clear Effects
 * *** In RPG Maker MZ, requesting an animation while transitioning between
 *     scenes, such as going from the map scene to the battle scene, can cause
 *     crashes. This is because the animation queue does not take off
 *     immediately and will likely register incorrect targets for the scene.
 *     This plugin will forcefully clear any registered animations and balloon
 *     effects when terminating a scene in order to prevent crashes.
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** <Battle View: x> Troop Name tags can now work with comment tags.
 * ** <Battle System: x> Troop Name tags can now work with comment tags.
 * *** Updates made by Irina.
 * 
 * Version 1.38: June 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Caz!
 * *** Picture: Show Icon
 * **** Shows an icon instead of a picture image.
 * **** The picture icon can be controlled like any other picture.
 * 
 * Version 1.37: May 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Switches: Randomize ID(s)
 * *** Switches: Randomize Range
 * *** Switches: Toggle ID(s)
 * *** Switches: Toggle Range
 * **** These Plugin Commands allow you to randomize the ON/OFF positions of
 *      switches or toggle them so that they flip their ON/OFF status.
 * 
 * Version 1.36: May 14, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Export: All Maps Text
 * *** Export: All Troops Text
 * *** Export: Current Map Text
 * *** Export: Current Troop Text
 * **** Play Test Only Plugin Commands. These Plugin Commands are used for
 *      extracting all messages, show choices, comments, and scrolling text to
 *      parse and export them as a TXT file. Useful for getting a game's script
 *      to a voice actor or voice actress.
 * 
 * Version 1.35: May 7, 2021
 * * Documentation Update!
 * ** Added the following text to "Parameter Settings" Plugin Parameters for
 *    extra clarity regarding Parameter Caps:
 * *** These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 * 
 * Version 1.34: April 23, 2021
 * * Bug Fixes!
 * ** For the vanilla Equip Status window, custom parameters with integer
 *    values will now show up as integers and not percentiles. Fix by Olivia.
 * * Documentation Update!
 * ** Added clarity to the <param: x> notetag for enemies.
 * *** This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * 
 * Version 1.33: April 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Window Skin Bleeding
 * *** Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 *     been set from 96 to 95. This results in the window skin bleeding past
 *     the window's intended borders. The Core Engine now reverts this change
 *     to prevent the bleeding effect from happening.
 * * Feature Update!
 * ** "Encounter Rate Minimum" now has a valid minimum value of 1. Update made
 *    by Olivia.
 * 
 * Version 1.32: April 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Item Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Weapon Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Armor Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Added Quantity
 * **** By default, RPG Maker MZ only adds 99 of items and not weapons or armor
 *      making it awkward for testing specific battle mechanics. These settings
 *      allow you to add in custom amounts of items, weapons, and/or armors if
 *      you so wish.
 * 
 * Version 1.31: March 26, 2021
 * * Feature Update!
 * ** Title screen buttons will now become fully opaque when hovered over them
 *    instead of only when pressed. Update made by Yanfly.
 * 
 * Version 1.30: March 19, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Invisible Battle Sprites
 * *** If you removed a party member during battle and added that exact party
 *     member back into the same slot, their sprite would appear invisible. The
 *     VisuStella Core Engine will fix this problem and prevent it from
 *     happening. Fix made by Olivia.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset
 * **** When animations are mirrored, mirror their Offset X values, too.
 * ** New animation name tags added by Arisu:
 * *** <Mirror Offset X> and <No Mirror Offset X>
 * **** If these text tags are placed in an animation's name, it will cause the
 *      offset X value to be mirrored when the animation is mirrored or have it
 *      ignored despite being mirrored.
 * 
 * Version 1.29: March 12, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Interactable window client area does not conform to the
 *    window's declared scale when the scale is anything but 1.0. This will now
 *    be fixed through this plugin. Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** Name Input should be more controller-friendly. If a controller is
 *    connected upon entering the name change scene, it will use the default
 *    manual-entry mode instead of the keyboard-entry mode. If a controller
 *    button is pressed during the keyboard-entry mode, it will automatically
 *    switch to the manual-entry mode.
 * ** This plugin does not provide support for controllers that are undetected
 *    by RPG Maker MZ's default controller support.
 * ** This feature was already implemented since version 1.27 but wasn't
 *    documented so here we are. Update made by Irina.
 * 
 * Version 1.28: March 5, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: The arrows drawn by a window skin will no longer by
 *    placed on a half pixel when a window's size is an odd number. This would
 *    cause sprite tearing problems and look awful. Fix made by Irina.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * 
 * Version 1.27: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Moved "Show Scrolling Text, additional functionality" section from Bug
 *    Fixes to Major Changes as it was placed in the wrong section.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly.
 * *** Plugin Parameters > Keyboard Input > Name Input > Banned Words
 * **** Insert words you don't want your players to use for character names.
 * 
 * Version 1.26: February 19, 2021
 * * Bug Fixes!
 * ** Certain Plugin Parameters no longer have settings that restrict them to
 *    a maximum of 1. Fix made by Arisu.
 * * Feature Update!
 * ** Changed the default value for a New Game > Common Event upon Play Testing
 *    to 0 to prevent confusion. Update made by Arisu.
 * 
 * Version 1.25: February 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Show Scrolling Text, additional functionality added by Arisu
 * *** The event command "Show Scrolling Text" now has additional functionality
 *     as long as the VisuStella MZ Core Engine is installed. If the game dev
 *     inserts "// Script Call" (without the quotes) inside the scrolling text,
 *     then the entirity of the Show Scrolling Text event command will be ran
 *     as a giant script call event command.
 * *** The reason why this functionality is added is because the "Script..."
 *     event command contains only 12 lines maximum. This means for any script
 *     call larger than 12 lines of code cannot be done by normal means as each
 *     script call is ran as a separate instance.
 * *** By repurposing the "Show Scrolling Text" event command to be able to
 *     function as an extended "Script..." event command, such a thing is now
 *     possible with less hassle and more lines to code with.
 * *** This effect does not occur if the Show Scrolling Text event command does
 *     not have "// Script Call" in its contents.
 * 
 * Version 1.24: January 29, 2021
 * * Documentation Update!
 * ** Plugin Parameters: Custom Parameters Settings added the following note:
 * *** For clarification, these settings do NOT create brand-new parameters for
 *     you to use and add to your game nor are the bonuses supported by other
 *     plugins in the VisuStella MZ library. These settings exist to function
 *     as a bridge for non-VisuStella MZ plugins that have created their own
 *     parameter values and to show them inside VisuStella menus.
 * * Feature Update!
 * ** Default JS Plugin Parameter for the Title Command: "Shutdown" now has a
 *    note in it that reads: "Do NOT use this command with mobile devices or
 *    browser games. All it does is cause the game to display a blank, black
 *    canvas which the player is unable to do anything with. It does NOT force
 *    close the browser tab nor the app."
 * *** This is also why this command is disabled by default for any non-NodeJS
 *     client deployed game versions.
 * ** Disabled some bug fixes made by the Core Engine for the default RMMZ code
 *    base since the 1.1.1 version now contains those very same fixes.
 * 
 * Version 1.23: January 22, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: January 15, 2021
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Sprite_Timer is added to the spriteset for the parent
 *    scene, making it affected by any filers, zooms, and/or blurs, hindering
 *    its readability.
 * 
 * Version 1.21: January 8, 2021
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Keyboard Input > Controls > WASD Movement
 * *** Plugin Parameters > Keyboard Input > Controls > R Button: Dash Toggle
 * 
 * Version 1.20: January 1, 2021
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.19: December 25, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s) and feature updates!
 * * Bug Fixes!
 * ** Fixed typo inside of the comments inside the JS: Quick Functions.
 * * Feature Update!
 * ** Plugin Parameters > Color Settings > Outline Color is now renamed to
 *    Font Outline.
 * * New Features!
 * ** New Plugin Parameters added by Shaz!
 * *** Plugin Parameters > Color Settings > Gauge Number Outline
 * 
 * Version 1.18: December 18, 2020
 * * Bug Fixes!
 * ** Compatible string text from the Items and Equips Core will no longer
 *    register MaxHP and MaxMP as percentile values for the info window.
 * ** RPG Maker MZ Bug: Gamepads no longer go rapidfire after a cleared input.
 *    There is now a period of delay for gamepads after an input clear.
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * ** RPG Maker MV animations will no longer crash for unplayable sound
 *    effects. Fix made by Yanfly.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * New Features!
 * ** New Plugin Parameters added by Yanfly!
 * *** Plugin Parameters > Button Assist > Key: Shift
 * *** Plugin Parameters > Button Assist > Key: Tab
 * **** These let you assign text codes to the Shift and Tab buttons for the
 *      Button Assist windows.
 * *** Plugin Parameters > QoL Settings > Misc > NewGame > CommonEvent
 * **** For an all version (including non-play test) common event to start new
 *      games with.
 * 
 * Version 1.17: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.16: December 4, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Button Assist Window for the change name scene will now default to "Tab"
 *    for switching between both modes. Update made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > Keyboard Input > Default Mode
 * **** Select default mode when entering the scene.
 * 
 * Version 1.15: November 29, 2020
 * * Bug Fixes!
 * ** Pressing "Enter" in the change name scene while the actor's name is
 *    completely empty will no longer result in endless buzzer sounds. Fix made
 *    by Arisu.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** For the name change scene, the "Tab" key now also lets the user switch
 *    between the two modes. Update made by Yanfly.
 * * New Features!
 * ** Two new plugin parameters added to Keyboard Input:
 * *** "Switch To Keyboard" and "Switch To Manual"
 * **** These determine the text used for the button assist window when
 *      switching between the two modes. Update made by Yanfly.
 * **** Button Assist window now takes into consideration for these texts.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.14: November 22, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Command added by Yanfly!
 * *** System: Load Images
 * **** Allows you to (pre) load up images ahead of time.
 * 
 * Version 1.13: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.12: November 8, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Screen Shake Plugin Parameters and JS: Quick Function Plugin Parameters
 *    have been taken off experimental status.
 * * New Features!
 * ** New plugin parameters added by Arisu.
 * *** Plugin Parameters > Keyboard Input
 * **** Settings for the game that utilize keyboard input. These are primarily
 *      for the name input scene (Scene_Name) and the number input event
 *      command. These settings have only been tested on English keyboards and
 *      may or may not be compatible with other languages, so please disable
 *      these features if they do not fit in with your game.
 * 
 * Version 1.11: November 1, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Feature Update!
 * ** Bitmap smoothing now takes into consideration for rounding coordinates.
 *    Update made by Irina.
 * 
 * Version 1.10: October 25, 2020
 * * Feature Update!
 * ** Sprite animation location now adjusts position relative to the sprite's
 *    scale, too. Update made by Arisu.
 *
 * Version 1.09: October 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Auto Battle Lock Up. Fixed by Yanfly.
 * *** If an auto battle Actor fights against an enemy whose DEF/MDF is too
 *     high, they will not use any actions at all. This can cause potential
 *     game freezing and softlocks. This plugin will change that and have them
 *     default to a regular Attack.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.08: October 11, 2020
 * * Feature Update!
 * ** Altered sprite bitmaps via the various draw functions will now be marked
 *    as modified and will automatically purge themselves from graphical memory
 *    upon a sprite's removal to free up more resources. Change made by Yanfly.
 * ** Picture Sprite Origin anchors are now tied to the Game_Picture show and
 *    move commands instead of the Game_Interpretter commands. Change by Arisu.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** New documentation added for the new Plugin Parameter category:
 *    "Custom Parameters".
 * * New Features!
 * ** New Plugin Parameter "Custom Parameters" added by Yanfly.
 * *** Create custom parameters for your game! These will appear in
 *     VisuStella MZ menus.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Battler evasion pose can now occur if there is a miss. These were made
 *    separate in RPG Maker MZ and misses didn't enable the evasion pose. Fix
 *    made by Olivia.
 * * New Features!
 * ** New notetags for Maps and name tags for Troops added by Yanfly!
 * *** <Frontview>, <Sideview> to change the battle view for that specific map,
 *     or troop regardless of what other settings are.
 * *** <DTB>, <TPB Active>, <TPB Wait> to change the battle system for that
 *     specific map or troop regardless of what other settings are.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** <Level: x> notetag for enemies is now fixed! Fix made by Arisu.
 * * Documentation Update!
 * ** Documentation added for the new "System: Battle System Change" Plugin
 *    Command and removed the old "System: Set Time Progress Battle".
 * * Feature Update!
 * ** The Plugin Command "System: Set Time Progress Battle" has been replaced
 *    with "System: Battle System Change" instead. This is to accommodate
 *    future plugins that allow for different battle systems. Added by Yanfly.
 * *** If you have previously used "System: Set Time Progress Battle", please
 *     replace them. We apologize for the inconvenience.
 * * New Features!
 * ** In the Core Engine's plugin parameters, you can now set the Battle System
 *    used. This will default to whatever is the game database's setting. This
 *    feature is used for the future when new battle systems are made. Feature
 *    added by Yanfly.
 * 
 * Version 1.04: September 13, 2020
 * * Documentation Update!
 * ** Added new documentation for the "Title Command List" and Title Picture
 *    Buttons" plugin parameters. They now have a dedicated section each.
 * * Feature Updates!
 * ** Moved the "Title Command List" and "Title Picture Buttons" parameters
 *    from the Menu Layout > Title settings. They were far too hidden away and
 *    users had a hard time finding them. Update made by Yanfly.
 * *** Users who have customized these settings before will need to readjust
 *     them again. We apologize for the inconvenience.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Having QoL > Modern Controls disabled (why would you) used to prevent the
 *    down button from working. It works again. Fix made by Yanfly.
 * * New Feature!
 * ** Plugin default settings now come with a "Game End" option on the title
 *    screen. For those updating from version 1.02 or order, you can add this
 *    in by opening the Core Engine > Plugin Parameters > Menu Layout Settings
 *    > press "delete" on Scene_Title > open it up, then the new settings will
 *    fill in automatically.
 * * New Experimental Feature Added:
 * ** Screen Shake Settings added to the Plugin Parameters.
 * *** Screen Shake: Custom Plugin Command added!
 * *** Credit to Aries of Sheratan, who gave us permission to use her formula.
 * *** We'll be expanding on more screen shaking options in the future.
 * * Optimization Update
 * ** Digit Grouping now works more efficiently.
 * 
 * Version 1.02: August 30, 2020
 * * New Feature!
 * ** New Plugin Command: "Picture: Erase All". Added by Olivia.
 * *** Erases all pictures on the screen because it's extremely tedious to do
 *     it one by one.
 * ** New Plugin Command: "Picture: Erase Range"
 * *** Erases all pictures within a range of numbers because it's extremely
 *     tedious to do it one by one.
 * * Optimization Update
 * ** Added a more accurate means of parsing numbers for Digit Grouping.
 * ** Window_Base.prototype.textSizeEx now stores data to a cache.
 * * Documentation Update
 * ** Added a section to Major Changes: New Hard-Coded Features on
 *    Digit Grouping and explaining its intricacies.
 * ** Added a note to Plugin Parameters > UI > Reposition Actors to ignore the
 *    setting if using the Battle Core.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Digit grouping fixed to allow text codes to detect values larger than
 *    1000. Fix made by Olivia and Yanfly.
 * ** Param Plus, Rate, Flat notetags fixed. Fix made by Yanfly.
 * * New Experimental Feature Added:
 * ** JS: Quick Functions found in the Plugin Parameters
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Animation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AnimationPoint
 * @text Animation: Play at Coordinate
 * @desc Plays an animation on the screen at a specific x, y
 * coordinate even if there is no sprite attached.
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Plays this animation.
 * @default 1
 * 
 * @arg Coordinates
 *
 * @arg pointX:eval
 * @text X
 * @parent Coordinates
 * @desc X coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.width / 2
 *
 * @arg pointY:eval
 * @text Y
 * @parent Coordinates
 * @desc Y coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.height / 2
 *
 * @arg Mirror:eval
 * @text Mirror Animation?
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the animation?
 * @default false
 *
 * @arg Mute:eval
 * @text Mute Animation?
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the animation?
 * @default false
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Debug
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DebugConsoleLastControllerID
 * @text Debug: Current Controller ID
 * @desc PLAY TEST ONLY. Shows current controller ID in debug console.
 * Also copies to computer clipboard if possible.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Export
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ExportAllMapText
 * @text Export: All Maps Text
 * @desc PLAY TEST ONLY. Exports all of the text from all maps,
 * their events, event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportAllTroopText
 * @text Export: All Troops Text
 * @desc PLAY TEST ONLY. Exports all of the text from all troops,
 * their event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurMapText
 * @text Export: Current Map Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current map,
 * its events, the event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurTroopText
 * @text Export: Current Troop Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current troop,
 * the troop's event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Game
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OpenURL
 * @text Game: Open URL
 * @desc Opens a website URL from the game.
 *
 * @arg URL:str
 * @text URL
 * @desc Where do you want to take the player?
 * @default https://www.google.com/
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Gold
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GoldChange
 * @text Gold: Gain/Lose
 * @desc Allows you to give/take more gold than the event editor limit.
 *
 * @arg value:eval
 * @text Value
 * @desc How much gold should the player gain/lose?
 * Use negative values to remove gold. You may use JS.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Map
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapOnceParallel
 * @text Map: Once Parallel
 * @desc Plays a Common Event parallel to the event once without
 * repeating itself when done. Map only!
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc The ID of the parallel Common Event to play.
 * Does NOT repeat itself when finished.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Picture
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureCoordinatesMode
 * @text Picture: Coordinates Mode
 * @desc Play Test Mode only! Gets the coordinates of a specific
 * picture as you move it across the screen.
 *
 * @arg PictureID:num
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc The ID of the pictures to track the coordinates of.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEasingType
 * @text Picture: Easing Type
 * @desc Changes the easing type to a number of options.
 *
 * @arg pictureId:num
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Which picture do you wish to apply this easing to?
 * @default 1
 *
 * @arg easingType:str
 * @text Easing Type
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
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg LineBreak
 * @text ------------------------
 * @default --------------------------------
 *
 * @arg Instructions1
 * @text Instructions
 * @default Insert this Plugin Command after
 *
 * @arg Instructions2
 * @text -
 * @default a "Move Picture" event command.
 * 
 * @arg Instructions3
 * @text -
 * @default Turn off "Wait for Completion"
 *
 * @arg Instructions4
 * @text -
 * @default in the "Move Picture" event.
 *
 * @arg Instructions5
 * @text -
 * @default You may have to add in your own
 *
 * @arg Instructions6
 * @text -
 * @default "Wait" event command after.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseAll
 * @text Picture: Erase All
 * @desc Erases all pictures on the screen because it's extremely
 * tedious to do it one by one.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseRange
 * @text Picture: Erase Range
 * @desc Erases all pictures within a range of numbers because it's
 * extremely tedious to do it one by one.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type number
 * @min 1
 * @max 100
 * @desc The starting ID of the pictures to erase.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type number
 * @min 1
 * @max 100
 * @desc The ending ID of the pictures to erase.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command PictureShowIcon
 * @text Picture: Show Icon
 * @desc Shows an icon instead of a picture image.
 * The picture icon can be controlled like any other picture.
 * 
 * @arg General
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @parent General
 * @desc What is the ID of the picture you wish to show at? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg IconIndex:eval
 * @text Icon Index
 * @parent General
 * @desc Select the icon index to use for this picture.
 * You may use JavaScript code.
 * @default 23
 *
 * @arg Smooth:eval
 * @text Smooth Icon?
 * @parent General
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc This will make the icon smoothed out or pixelated.
 * @default false
 * 
 * @arg PictureSettings
 * @text Picture Settings
 *
 * @arg Settings:struct
 * @text Settings
 * @parent PictureSettings
 * @type struct<ShowPicture>
 * @desc Alter the settings for how the picture will be shown.
 * @default {"Position":"","Origin:num":"0","PositionX:eval":"0","PositionY:eval":"0","Scale":"","ScaleX:eval":"100","ScaleY:eval":"100","Blend":"","Opacity:eval":"255","BlendMode:num":"0"}
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_ScreenShake
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ScreenShake
 * @text Screen Shake: Custom
 * @desc Creates a custom screen shake effect and also sets
 * the following uses of screen shake to this style.
 *
 * @arg Type:str
 * @text Shake Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc Select shake style type.
 * @default random
 *
 * @arg Power:num
 * @text Power
 * @type number
 * @min 1
 * @max 9
 * @desc Power level for screen shake.
 * @default 5
 *
 * @arg Speed:num
 * @text Speed
 * @type number
 * @min 1
 * @max 9
 * @desc Speed level for screen shake.
 * @default 5
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of screenshake.
 * You can use code as well.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Switch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeOne
 * @text Switches: Randomize ID(s)
 * @desc Select specific Switch ID's to randomize ON/OFF.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeRange
 * @text Switches: Randomize Range
 * @desc Select specific Switch ID Range to randomize ON/OFF.
 * The ratio determines the ON/OFF distribution.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleOne
 * @text Switches: Toggle ID(s)
 * @desc Select specific Switch ID's to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleRange
 * @text Switches: Toggle Range
 * @desc Select specific Switch ID Range to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetBattleSystem
 * @text System: Battle System Change
 * @desc Switch to a different battle system in-game.
 * Some battle systems REQUIRE their specific plugins!
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB Wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to switch to.
 * @default database
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemLoadImages
 * @text System: Load Images
 * @desc Allows you to (pre) load up images ahead of time.
 *
 * @arg animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetFontSize
 * @text System: Main Font Size
 * @desc Set the game's main font size.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the font size to this number.
 * @default 26
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetSideView
 * @text System: Side View Battle
 * @desc Switch between Front View or Side View for battle.
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Front View
 * @value Front View
 * @option Side View
 * @value Side View
 * @option Toggle
 * @value Toggle
 * @desc Choose which view type to switch to.
 * @default Toggle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetWindowPadding
 * @text System: Window Padding
 * @desc Change the game's window padding amount.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the game's standard window padding to this value.
 * Default: 12
 * @default 12
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Variable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableEvalReference
 * @text Variable: JS Eval
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:eval
 * @text Variable ID
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 1
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:eval
 * @text Operand Modifier
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableJsBlock
 * @text Variable: JS Block
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:func
 * @text Variable ID
 * @type note
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet varID = 1;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn varID;"
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:func
 * @text Operand Modifier
 * @type note
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet value = 0;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn value;"
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
 * @param CoreEngine
 * @default Plugin Parameters
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param QoL:struct
 * @text Quality of Life Settings
 * @type struct<QoLSettings>
 * @desc Quality of Life settings for both developers and players.
 * @default {"PlayTest":"","NewGameBoot:eval":"false","ForceNoPlayTest:eval":"false","OpenConsole:eval":"true","F6key:eval":"true","F7key:eval":"true","NewGameCommonEvent:num":"0","DigitGrouping":"","DigitGroupingStandardText:eval":"true","DigitGroupingExText:eval":"true","DigitGroupingDamageSprites:eval":"true","DigitGroupingGaugeSprites:eval":"true","DigitGroupingLocale:str":"en-US","PlayerBenefit":"","EncounterRateMinimum:num":"10","EscapeAlways:eval":"true","ImprovedAccuracySystem:eval":"true","AccuracyBoost:eval":"true","LevelUpFullHp:eval":"true","LevelUpFullMp:eval":"true","Misc":"","AntiZoomPictures:eval":"true","AutoStretch:str":"stretch","FontShadows:eval":"false","FontSmoothing:eval":"true","KeyItemProtect:eval":"true","ModernControls:eval":"true","NoTileShadows:eval":"true","PixelateImageRendering:eval":"false","RequireFocus:eval":"true","SmartEventCollisionPriority:eval":"true"}
 * 
 * @param BattleSystem:str
 * @text Battle System
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to use for your game.
 * Some battle systems REQUIRE their specific plugins!
 * @default database
 *
 * @param Color:struct
 * @text Color Settings
 * @type struct<Color>
 * @desc Change the colors used for in-game text.
 * @default {"BasicColors":"","ColorNormal:str":"0","ColorSystem:str":"16","ColorCrisis:str":"17","ColorDeath:str":"18","ColorGaugeBack:str":"19","ColorHPGauge1:str":"20","ColorHPGauge2:str":"21","ColorMPGauge1:str":"22","ColorMPGauge2:str":"23","ColorMPCost:str":"23","ColorPowerUp:str":"24","ColorPowerDown:str":"25","ColorCTGauge1:str":"26","ColorCTGauge2:str":"27","ColorTPGauge1:str":"28","ColorTPGauge2:str":"29","ColorTPCost:str":"29","ColorPending:str":"#2a847d","ColorExpGauge1:str":"30","ColorExpGauge2:str":"31","ColorMaxLvGauge1:str":"14","ColorMaxLvGauge2:str":"6","AlphaColors":"","OutlineColor:str":"rgba(0, 0, 0, 0.6)","DimColor1:str":"rgba(0, 0, 0, 0.6)","DimColor2:str":"rgba(0, 0, 0, 0)","ItemBackColor1:str":"rgba(32, 32, 32, 0.5)","ItemBackColor2:str":"rgba(0, 0, 0, 0.5)","ConditionalColors":"","ActorHPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If the actor is dead, return death color.\\n} else if (actor.isDead()) {\\n    return this.deathColor();\\n\\n// If the actor is dying, return crisis color.\\n} else if (actor.isDying()) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorMPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If MP rate is below 25%, return crisis color.\\n} else if (actor.mpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorTPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If TP rate is below 25%, return crisis color.\\n} else if (actor.tpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ParamChange:func":"\"// Set the variables used in this function.\\nlet change = arguments[0];\\n\\n// If a positive change, use power up color.\\nif (change > 0) {\\n    return this.powerUpColor();\\n\\n// If a negative change, use power down color.\\n} else if (change < 0) {\\n    return this.powerDownColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","DamageColor:func":"\"// Set the variables used in this function.\\nlet colorType = arguments[0];\\n\\n// Check the value of the color type\\n// and return an appropriate color.\\nswitch (colorType) {\\n\\n    case 0: // HP damage\\n        return \\\"#ffffff\\\";\\n\\n    case 1: // HP recover\\n        return \\\"#b9ffb5\\\";\\n\\n    case 2: // MP damage\\n        return \\\"#bb88bb\\\";\\n\\n    case 3: // MP recover\\n        return \\\"#80b0ff\\\";\\n\\n    default:\\n        return \\\"#808080\\\";\\n}\""}
 *
 * @param Gold:struct
 * @text Gold Settings
 * @type struct<Gold>
 * @desc Change up how gold operates and is displayed in-game.
 * @default {"GoldMax:num":"999999999","GoldFontSize:num":"24","GoldIcon:num":"314","GoldOverlap:str":"A Lot","ItemStyle:eval":"true"}
 *
 * @param ImgLoad:struct
 * @text Image Loading
 * @type struct<ImgLoad>
 * @desc Game images that will be loaded upon booting up the game.
 * Use this responsibly!!!
 * @default {"animations:arraystr":"[]","battlebacks1:arraystr":"[]","battlebacks2:arraystr":"[]","characters:arraystr":"[]","enemies:arraystr":"[]","faces:arraystr":"[]","parallaxes:arraystr":"[]","pictures:arraystr":"[]","sv_actors:arraystr":"[]","sv_enemies:arraystr":"[]","system:arraystr":"[\"Balloon\",\"IconSet\"]","tilesets:arraystr":"[]","titles1:arraystr":"[]","titles2:arraystr":"[]"}
 *
 * @param KeyboardInput:struct
 * @text Keyboard Input
 * @type struct<KeyboardInput>
 * @desc Settings for the game that utilize keyboard input.
 * @default {"Controls":"","WASD:eval":"false","DashToggleR:eval":"false","NameInput":"","EnableNameInput:eval":"true","DefaultMode:str":"keyboard","QwertyLayout:eval":"true","NameInputMessage:eval":"\"Type in this character's name.\\nPress \\\\c[5]ENTER\\\\c[0] when you're done.\\n\\n-or-\\n\\nPress \\\\c[5]arrow keys\\\\c[0]/\\\\c[5]TAB\\\\c[0] to switch\\nto manual character entry.\\n\\nPress \\\\c[5]ESC\\\\c[0]/\\\\c[5]TAB\\\\c[0] to use to keyboard.\"","NumberInput":"","EnableNumberInput:eval":"true","ButtonAssist":"","Keyboard:str":"Keyboard","Manual:str":"Manual"}
 *
 * @param MenuBg:struct
 * @text Menu Background Settings
 * @type struct<MenuBg>
 * @desc Change how menu backgrounds look for each scene.
 * @default {"Scene_Menu:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Item:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Skill:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Equip:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Status:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Options:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Save:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Load:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_GameEnd:struct":"{\"SnapshotOpacity:num\":\"128\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Shop:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Name:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Unlisted:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}"}
 *
 * @param ButtonAssist:struct
 * @text Menu Button Assist Window
 * @type struct<ButtonAssist>
 * @desc Settings pertaining to the Button Assist window found in in-game menus.
 * @default {"General":"","Enable:eval":"true","Location:str":"bottom","BgType:num":"0","Text":"","TextFmt:str":"%1:%2","MultiKeyFmt:str":"%1/%2","OkText:str":"Select","CancelText:str":"Back","SwitchActorText:str":"Switch Ally","Keys":"","KeyUnlisted:str":"\\}❪%1❫\\{","KeyUP:str":"^","KeyDOWN:str":"v","KeyLEFT:str":"<<","KeyRIGHT:str":">>","KeySHIFT:str":"\\}❪SHIFT❫\\{","KeyTAB:str":"\\}❪TAB❫\\{","KeyA:str":"A","KeyB:str":"B","KeyC:str":"C","KeyD:str":"D","KeyE:str":"E","KeyF:str":"F","KeyG:str":"G","KeyH:str":"H","KeyI:str":"I","KeyJ:str":"J","KeyK:str":"K","KeyL:str":"L","KeyM:str":"M","KeyN:str":"N","KeyO:str":"O","KeyP:str":"P","KeyQ:str":"Q","KeyR:str":"R","KeyS:str":"S","KeyT:str":"T","KeyU:str":"U","KeyV:str":"V","KeyW:str":"W","KeyX:str":"X","KeyY:str":"Y","KeyZ:str":"Z"}
 *
 * @param ControllerButtons:arraystruct
 * @text Controller Button Assist
 * @parent ButtonAssist:struct
 * @type struct<ControllerButtons>[]
 * @desc Make different icons appear for the Button Assist window when using different controllers.
 * @default []
 *
 * @param MenuLayout:struct
 * @text Menu Layout Settings
 * @type struct<MenuLayout>
 * @desc Change how menu layouts look for each scene.
 * @default {"Title:struct":"{\"TitleScreen\":\"\",\"DocumentTitleFmt:str\":\"%1: %2 - Version %3\",\"Subtitle:str\":\"Subtitle\",\"Version:str\":\"0.00\",\"drawGameTitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = $dataSystem.gameTitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 8;\\\\nbitmap.fontSize = 72;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameSubtitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4 + 72;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = Scene_Title.subtitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 6;\\\\nbitmap.fontSize = 48;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameVersion:func\":\"\\\"const bitmap = this._gameTitleSprite.bitmap;\\\\nconst x = 0;\\\\nconst y = Graphics.height - 20;\\\\nconst width = Math.round(Graphics.width / 4);\\\\nconst height = 20;\\\\nconst c1 = ColorManager.dimColor1();\\\\nconst c2 = ColorManager.dimColor2();\\\\nconst text = 'Version ' + Scene_Title.version;\\\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 3;\\\\nbitmap.fontSize = 16;\\\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\\\\\"left\\\\\\\");\\\"\",\"CommandRect:func\":\"\\\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\\\nconst rows = this.commandWindowRows();\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ButtonFadeSpeed:num\":\"4\"}","MainMenu:struct":"{\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const width = this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight();\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ItemMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaBottom() - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SkillMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SkillTypeWindow\":\"\",\"SkillTypeBgType:num\":\"0\",\"SkillTypeRect:func\":\"\\\"const rows = 3;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this._skillTypeWindow.height;\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._statusWindow.y + this._statusWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","EquipMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = this.statusWidth();\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = this.statusWidth();\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SlotWindow\":\"\",\"SlotBgType:num\":\"0\",\"SlotRect:func\":\"\\\"const commandWindowRect = this.commandWindowRect();\\\\nconst x = this.statusWidth();\\\\nconst y = commandWindowRect.y + commandWindowRect.height;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"return this.slotWindowRect();\\\"\"}","StatusMenu:struct":"{\"ProfileWindow\":\"\",\"ProfileBgType:num\":\"0\",\"ProfileRect:func\":\"\\\"const width = Graphics.boxWidth;\\\\nconst height = this.profileHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.statusParamsWindowRect().y - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusParamsWindow\":\"\",\"StatusParamsBgType:num\":\"0\",\"StatusParamsRect:func\":\"\\\"const width = this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusEquipWindow\":\"\",\"StatusEquipBgType:num\":\"0\",\"StatusEquipRect:func\":\"\\\"const width = Graphics.boxWidth - this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = this.statusParamsWidth();\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","OptionsMenu:struct":"{\"OptionsWindow\":\"\",\"OptionsBgType:num\":\"0\",\"OptionsRect:func\":\"\\\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\\\nconst width = 400;\\\\nconst height = this.calcWindowHeight(n, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SaveMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","LoadMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","GameEnd:struct":"{\"CommandList:arraystruct\":\"[\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"toTitle\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.toTitle;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"cancel\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.cancel;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.popScene();\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const rows = 2;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ShopMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const wx = 0;\\\\nconst wy = this.helpAreaTop();\\\\nconst ww = Graphics.boxWidth;\\\\nconst wh = this.helpAreaHeight();\\\\nreturn new Rectangle(wx, wy, ww, wh);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = this._goldWindow.x;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"DummyWindow\":\"\",\"DummyBgType:num\":\"0\",\"DummyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._commandWindow.y + this._commandWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"NumberWindow\":\"\",\"NumberBgType:num\":\"0\",\"NumberRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this._dummyWindow.y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"BuyWindow\":\"\",\"BuyBgType:num\":\"0\",\"BuyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SellWindow\":\"\",\"SellBgType:num\":\"0\",\"SellRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height =\\\\n    this.mainAreaHeight() -\\\\n    this._commandWindow.height -\\\\n    this._categoryWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","NameMenu:struct":"{\"EditWindow\":\"\",\"EditBgType:num\":\"0\",\"EditRect:func\":\"\\\"const rows = 9;\\\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\\\nconst padding = $gameSystem.windowPadding();\\\\nconst width = 600;\\\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"InputWindow\":\"\",\"InputBgType:num\":\"0\",\"InputRect:func\":\"\\\"const x = this._editWindow.x;\\\\nconst y = this._editWindow.y + this._editWindow.height;\\\\nconst rows = 9;\\\\nconst width = this._editWindow.width;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}"}
 *
 * @param Param:struct
 * @text Parameter Settings
 * @type struct<Param>
 * @desc Change up the limits of parameters and how they're calculated.
 * @default {"DisplayedParams:arraystr":"[\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","ExtDisplayedParams:arraystr":"[\"MaxHP\",\"MaxMP\",\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","BasicParameters":"","CrisisRate:num":"0.25","BasicParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet paramId = arguments[0];\\nlet base = this.paramBase(paramId);\\nlet plus = this.paramPlus(paramId);\\nlet paramRate = this.paramRate(paramId);\\nlet buffRate = this.paramBuffRate(paramId);\\nlet flatBonus = this.paramFlatBonus(paramId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\\n\\n// Determine the limits\\nconst maxValue = this.paramMax(paramId);\\nconst minValue = this.paramMin(paramId);\\n\\n// Final value\\nreturn Math.round(value.clamp(minValue, maxValue));\"","BasicParamCaps":"","BasicActorParamCaps":"","BasicActorParamMax0:str":"9999","BasicActorParamMax1:str":"9999","BasicActorParamMax2:str":"999","BasicActorParamMax3:str":"999","BasicActorParamMax4:str":"999","BasicActorParamMax5:str":"999","BasicActorParamMax6:str":"999","BasicActorParamMax7:str":"999","BasicEnemyParamCaps":"","BasicEnemyParamMax0:str":"999999","BasicEnemyParamMax1:str":"9999","BasicEnemyParamMax2:str":"999","BasicEnemyParamMax3:str":"999","BasicEnemyParamMax4:str":"999","BasicEnemyParamMax5:str":"999","BasicEnemyParamMax6:str":"999","BasicEnemyParamMax7:str":"999","XParameters":"","XParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet xparamId = arguments[0];\\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\\nlet plus = this.xparamPlus(xparamId);\\nlet paramRate = this.xparamRate(xparamId);\\nlet flatBonus = this.xparamFlatBonus(xparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","XParamVocab":"","XParamVocab0:str":"Hit","XParamVocab1:str":"Evasion","XParamVocab2:str":"Critical Rate","XParamVocab3:str":"Critical Evade","XParamVocab4:str":"Magic Evade","XParamVocab5:str":"Magic Reflect","XParamVocab6:str":"Counter","XParamVocab7:str":"HP Regen","XParamVocab8:str":"MP Regen","XParamVocab9:str":"TP Regen","SParameters":"","SParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet sparamId = arguments[0];\\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\\nlet plus = this.sparamPlus(sparamId);\\nlet paramRate = this.sparamRate(sparamId);\\nlet flatBonus = this.sparamFlatBonus(sparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","SParamVocab":"","SParamVocab0:str":"Aggro","SParamVocab1:str":"Guard","SParamVocab2:str":"Recovery","SParamVocab3:str":"Item Effect","SParamVocab4:str":"MP Cost","SParamVocab5:str":"TP Charge","SParamVocab6:str":"Physical DMG","SParamVocab7:str":"Magical DMG","SParamVocab8:str":"Floor DMG","SParamVocab9:str":"EXP Gain","Icons":"","DrawIcons:eval":"true","IconParam0:str":"84","IconParam1:str":"165","IconParam2:str":"76","IconParam3:str":"81","IconParam4:str":"101","IconParam5:str":"133","IconParam6:str":"140","IconParam7:str":"87","IconXParam0:str":"102","IconXParam1:str":"82","IconXParam2:str":"78","IconXParam3:str":"82","IconXParam4:str":"171","IconXParam5:str":"222","IconXParam6:str":"77","IconXParam7:str":"72","IconXParam8:str":"72","IconXParam9:str":"72","IconSParam0:str":"5","IconSParam1:str":"128","IconSParam2:str":"72","IconSParam3:str":"176","IconSParam4:str":"165","IconSParam5:str":"164","IconSParam6:str":"76","IconSParam7:str":"79","IconSParam8:str":"141","IconSParam9:str":"73"}
 *
 * @param CustomParam:arraystruct
 * @text Custom Parameters
 * @parent Param:struct
 * @type struct<CustomParam>[]
 * @desc Create custom parameters for your game!
 * These will appear in VisuStella MZ menus.
 * @default ["{\"ParamName:str\":\"Strength\",\"Abbreviation:str\":\"str\",\"Icon:num\":\"77\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.atk * 0.75) + (user.def * 0.25);\\\"\"}","{\"ParamName:str\":\"Dexterity\",\"Abbreviation:str\":\"dex\",\"Icon:num\":\"82\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.agi * 0.75) + (user.atk * 0.25);\\\"\"}","{\"ParamName:str\":\"Constitution\",\"Abbreviation:str\":\"con\",\"Icon:num\":\"81\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.def * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Intelligence\",\"Abbreviation:str\":\"int\",\"Icon:num\":\"79\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mat * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Wisdom\",\"Abbreviation:str\":\"wis\",\"Icon:num\":\"72\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mdf * 0.75) + (user.luk * 0.25);\\\"\"}","{\"ParamName:str\":\"Charisma\",\"Abbreviation:str\":\"cha\",\"Icon:num\":\"84\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.luk * 0.75) + (user.agi * 0.25);\\\"\"}"]
 *
 * @param ScreenResolution:struct
 * @text Screen Resolution Settings
 * @type struct<ScreenResolution>
 * @desc Alter various properties to make the game look better for varying screen resolutions.
 * @default {"Troops":"","RepositionActors:eval":"true","RepositionEnemies:eval":"true","RepositionEnemies130:eval":"false"}
 *
 * @param ScreenShake:struct
 * @text Screen Shake Settings
 * @type struct<ScreenShake>
 * @desc Get more screen shake effects into your game!
 * @default {"DefaultStyle:str":"random","originalJS:func":"\"// Calculation\\nthis.x += Math.round($gameScreen.shake());\"","randomJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","horzJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","vertJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\""}
 *
 * @param TitleCommandList:arraystruct
 * @text Title Command List
 * @type struct<Command>[]
 * @desc Window commands used by the title screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"newGame\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.newGame;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandNewGame();\\\"\"}","{\"Symbol:str\":\"continue\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.continue_;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return DataManager.isAnySavefileExists();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandContinue();\\\"\"}","{\"Symbol:str\":\"options\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.options;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandOptions();\\\"\"}","{\"Symbol:str\":\"shutdown\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.gameEnd;\\\"\",\"ShowJS:func\":\"\\\"return Utils.isNwjs();\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager.exit();\\\\n\\\\n// Note!\\\\n// Do NOT use this command with mobile devices or\\\\n// browser games. All it does is cause the game to\\\\n// display a blank, black canvas which the player\\\\n// is unable to do anything with. It does NOT force\\\\n// close the browser tab nor the app.\\\"\"}"]
 *
 * @param TitlePicButtons:arraystruct
 * @text Title Picture Buttons
 * @type struct<TitlePictureButton>[]
 * @desc Buttons that can be inserted into the title screen.
 * Add new title buttons here.
 * @default []
 *
 * @param UI:struct
 * @text UI Settings
 * @type struct<UI>
 * @desc Change up various in-game UI aspects.
 * @default {"UIArea":"","FadeSpeed:num":"24","BoxMargin:num":"4","CommandWidth:num":"240","BottomHelp:eval":"false","RightMenus:eval":"true","ShowButtons:eval":"true","cancelShowButton:eval":"true","menuShowButton:eval":"true","pagedownShowButton:eval":"true","numberShowButton:eval":"true","ButtonHeight:num":"52","BottomButtons:eval":"false","SideButtons:eval":"true","MenuObjects":"","LvExpGauge:eval":"true","ParamArrow:str":"→","TextCodeSupport":"","TextCodeClassNames:eval":"true","TextCodeNicknames:eval":"true"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Adjust various in-game window settings.
 * @default {"WindowDefaults":"","EnableMasking:eval":"false","LineHeight:num":"36","SelectableItems":"","ShowItemBackground:eval":"true","ItemHeight:num":"8","DrawItemBackgroundJS:func":"\"const rect = arguments[0];\\nconst c1 = ColorManager.itemBackColor1();\\nconst c2 = ColorManager.itemBackColor2();\\nconst x = rect.x;\\nconst y = rect.y;\\nconst w = rect.width;\\nconst h = rect.height;\\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\\nthis.contentsBack.strokeRect(x, y, w, h, c1);\"","ItemPadding:num":"8","BackOpacity:num":"192","TranslucentOpacity:num":"160","OpenSpeed:num":"32","ColSpacing:num":"8","RowSpacing:num":"4"}
 *
 * @param jsQuickFunc:arraystruct
 * @text JS: Quick Functions
 * @type struct<jsQuickFunc>[]
 * @desc Create quick JavaScript functions available from the
 * global namespace. Use with caution and moderation!!!
 * @default ["{\"FunctionName:str\":\"Example\",\"CodeJS:json\":\"\\\"// Insert this as a function anywhere you can input code\\\\n// such as Script Calls or Conditional Branch Scripts.\\\\n\\\\n// Process Code\\\\nreturn 'Example';\\\"\"}","{\"FunctionName:str\":\"Bad  Code  Name\",\"CodeJS:json\":\"\\\"// If a function name has spaces in them, the spaces will\\\\n// be removed. \\\\\\\"Bad  Code  Name\\\\\\\" becomes \\\\\\\"BadeCodeName\\\\\\\".\\\\n\\\\n// Process Code\\\\nOhNoItsBadCode()\\\\n\\\\n// If a function has bad code, a fail safe will catch the\\\\n// error and display it in the console.\\\"\"}","{\"FunctionName:str\":\"RandomNumber\",\"CodeJS:json\":\"\\\"// This generates a random number from 0 to itself.\\\\n// Example: RandomNumber(10)\\\\n\\\\n// Process Code\\\\nconst number = (arguments[0] || 0) + 1;\\\\nreturn Math.floor(number * Math.random());\\\"\"}","{\"FunctionName:str\":\"RandomBetween\",\"CodeJS:json\":\"\\\"// This generates a random number between two arguments.\\\\n// Example: RandomNumber(5, 10)\\\\n\\\\n// Process Code\\\\nlet min = Math.min(arguments[0] || 0, arguments[1] || 0);\\\\nlet max = Math.max(arguments[0] || 0, arguments[1] || 0);\\\\nreturn Math.floor(Math.random() * (max - min + 1) + min);\\\"\"}","{\"FunctionName:str\":\"RandomFrom\",\"CodeJS:json\":\"\\\"// Selects a number from the list of inserted numbers.\\\\n// Example: RandomFrom(5, 10, 15, 20)\\\\n\\\\n// Process Code\\\\nreturn arguments[Math.randomInt(arguments.length)];\\\"\"}"]
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
 * Quality of Life Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~QoLSettings:
 *
 * @param PlayTest
 * @text Play Test
 *
 * @param NewGameBoot:eval
 * @text New Game on Boot
 * @parent PlayTest
 * @type boolean
 * @on Start New Game
 * @off Keep Title Screen
 * @desc Automatically start a new game on Play Test?
 * Only enabled during Play Test.
 * @default false
 *
 * @param ForceNoPlayTest:eval
 * @text No Play Test Mode
 * @parent PlayTest
 * @type boolean
 * @on Cancel Play Test
 * @off Keep Play Test
 * @desc Force the game to be out of Play Test mode when play testing.
 * @default false
 *
 * @param OpenConsole:eval
 * @text Open Console on Boot
 * @parent PlayTest
 * @type boolean
 * @on Open
 * @off Don't Open
 * @desc Open the Debug Console upon booting up your game?
 * Only enabled during Play Test.
 * @default true
 *
 * @param F6key:eval
 * @text F6: Toggle Sound
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F6 Key Function: Turn on all sound to 100% or to 0%,
 * toggling between the two.
 * @default true
 *
 * @param F7key:eval
 * @text F7: Toggle Fast Mode
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F7 Key Function: Toggle fast mode.
 * @default true
 *
 * @param NewGameCommonEvent:num
 * @text NewGame > CommonEvent
 * @parent PlayTest
 * @type common_event
 * @desc Runs a common event each time a new game during play test
 * session is started.
 * @default 0
 *
 * @param BattleTest
 * @text Battle Test
 *
 * @param BTestItems:eval
 * @text Add Item Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database item?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestWeapons:eval
 * @text Add Weapon Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database weapon?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestArmors:eval
 * @text Add Armor Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database armor?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestAddedQuantity:num
 * @text Added Quantity
 * @parent BattleTest
 * @type number
 * @min 1
 * @desc Determines how many items are added during a battle test instead of the maximum amount.
 * @default 90
 *
 * @param DigitGrouping
 * @text Digit Grouping
 *
 * @param DigitGroupingStandardText:eval
 * @text Standard Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * standard text inside windows?
 * @default true
 *
 * @param DigitGroupingExText:eval
 * @text Ex Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * ex text, written through drawTextEx (like messages)?
 * @default true
 *
 * @param DigitGroupingDamageSprites:eval
 * @text Damage Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * in-battle damage sprites?
 * @default true
 *
 * @param DigitGroupingGaugeSprites:eval
 * @text Gauge Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * visible gauge sprites such as HP, MP, and TP gauges?
 * @default true
 *
 * @param DigitGroupingLocale:str
 * @text Country/Locale
 * @parent DigitGrouping
 * @type combo
 * @option ar-SA
 * @option bn-BD
 * @option bn-IN
 * @option cs-CZ
 * @option da-DK
 * @option de-AT
 * @option de-CH
 * @option de-DE
 * @option el-GR
 * @option en-AU
 * @option en-CA
 * @option en-GB
 * @option en-IE
 * @option en-IN
 * @option en-NZ
 * @option en-US
 * @option en-ZA
 * @option es-AR
 * @option es-CL
 * @option es-CO
 * @option es-ES
 * @option es-MX
 * @option es-US
 * @option fi-FI
 * @option fr-BE
 * @option fr-CA
 * @option fr-CH
 * @option fr-FR
 * @option he-IL
 * @option hi-IN
 * @option hu-HU
 * @option id-ID
 * @option it-CH
 * @option it-IT
 * @option jp-JP
 * @option ko-KR
 * @option nl-BE
 * @option nl-NL
 * @option no-NO
 * @option pl-PL
 * @option pt-BR
 * @option pt-PT
 * @option ro-RO
 * @option ru-RU
 * @option sk-SK
 * @option sv-SE
 * @option ta-IN
 * @option ta-LK
 * @option th-TH
 * @option tr-TR
 * @option zh-CN
 * @option zh-HK
 * @option zh-TW
 * @desc Base the digit grouping on which country/locale?
 * @default en-US
 *
 * @param PlayerBenefit
 * @text Player Benefit
 *
 * @param EncounterRateMinimum:num
 * @text Encounter Rate Min
 * @parent PlayerBenefit
 * @min 1
 * @desc Minimum number of steps the player can take without any random encounters.
 * @default 10
 *
 * @param EscapeAlways:eval
 * @text Escape Always
 * @parent PlayerBenefit
 * @type boolean
 * @on Always
 * @off Default
 * @desc If the player wants to escape a battle, let them escape the battle with 100% chance.
 * @default true
 *
 * @param ImprovedAccuracySystem:eval
 * @text Accuracy Formula
 * @parent PlayerBenefit
 * @type boolean
 * @on Improve
 * @off Default
 * @desc Accuracy formula calculation change to
 * Skill Hit% * (User HIT - Target EVA) for better results.
 * @default true
 *
 * @param AccuracyBoost:eval
 * @text Accuracy Boost
 * @parent PlayerBenefit
 * @type boolean
 * @on Boost
 * @off Default
 * @desc Boost HIT and EVA rates in favor of the player.
 * @default true
 *
 * @param LevelUpFullHp:eval
 * @text Level Up -> Full HP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full HP when an actor levels up.
 * @default true
 *
 * @param LevelUpFullMp:eval
 * @text Level Up -> Full MP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full MP when an actor levels up.
 * @default true
 *
 * @param Pictures
 * @text Picture-Related
 *
 * @param AntiZoomPictures:eval
 * @text Anti-Zoom Pictures
 * @parent Pictures
 * @type boolean
 * @on Anti-Zoom
 * @off Normal
 * @desc If on, prevents pictures from being affected by zoom.
 * @default true
 * 
 * @param PictureContainers
 * @text Picture Containers
 * @parent Pictures
 *
 * @param DetachBattlePictureContainer:eval
 * @text Detach in Battle
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the battle scene.
 * @default false
 *
 * @param DetachMapPictureContainer:eval
 * @text Detach in Map
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the map scene.
 * @default false
 *
 * @param Misc
 * @text Misc
 *
 * @param AnimationMirrorOffset:eval
 * @text Ani: Mirror Offset
 * @parent Misc
 * @type boolean
 * @on Mirror
 * @off Don't Mirror
 * @desc When animations are mirrored,
 * mirror their Offset X values, too.
 * @default false
 *
 * @param AutoStretch:str
 * @text Auto-Stretch
 * @parent Misc
 * @type select
 * @option Default
 * @value default
 * @option Stretch
 * @value stretch
 * @option Normal
 * @value normal
 * @desc Automatically stretch the game to fit the size of the client?
 * @default default
 *
 * @param FontShadows:eval
 * @text Font Shadows
 * @parent Misc
 * @type boolean
 * @on Shadows
 * @off Outlines
 * @desc If on, text uses shadows instead of outlines.
 * @default false
 *
 * @param FontSmoothing:eval
 * @text Font Smoothing
 * @parent Misc
 * @type boolean
 * @on Smooth
 * @off None
 * @desc If on, smoothes fonts shown in-game.
 * @default true
 *
 * @param FontWidthFix:eval
 * @text Font Width Fix
 * @parent Misc
 * @type boolean
 * @on Fix
 * @off Default
 * @desc Fixes the font width issue with instant display
 * non-monospaced fonts in the Message Window.
 * @default true
 *
 * @param KeyItemProtect:eval
 * @text Key Item Protection
 * @parent Misc
 * @type boolean
 * @on Unsellable
 * @off Sellable
 * @desc If on, prevents Key Items from being able to be sold and from being able to be consumed.
 * @default true
 *
 * @param MapNameTextCode:eval
 * @text Map Name Text Code
 * @parent Misc
 * @type boolean
 * @on Text Codes
 * @off Raw Text
 * @desc If on, map names will use text codes.
 * If off, only the raw map name will be used.
 * @default true
 *
 * @param ModernControls:eval
 * @text Modern Controls
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Default
 * @desc If on, allows usage of the Home/End buttons as well as other modern configs. Affects other VisuStella plugins.
 * @default true
 *
 * @param MvAnimationRate:num
 * @text MV Animation Rate
 * @parent Misc
 * @min 1
 * @max 10
 * @desc Adjusts the rate at which MV animations play.
 * Default: 4. Lower for faster. Higher for slower.
 * @default 4
 *
 * @param NewGameCommonEventAll:num
 * @text NewGame > CommonEvent
 * @parent Misc
 * @type common_event
 * @desc Runs a common event each time a new game during any session is started.
 * @default 0
 *
 * @param NoTileShadows:eval
 * @text No Tile Shadows
 * @parent Misc
 * @type boolean
 * @on Disable Tile Shadows
 * @off Default
 * @desc Removes tile shadows from being displayed in-game.
 * @default false
 *
 * @param PixelateImageRendering:eval
 * @text Pixel Image Rendering
 * @parent Misc
 * @type boolean
 * @on Pixelate
 * @off Smooth
 * @desc If on, pixelates the image rendering (for pixel games).
 * @default false
 *
 * @param RequireFocus:eval
 * @text Require Focus?
 * @parent Misc
 * @type boolean
 * @on Require
 * @off No Requirement
 * @desc Requires the game to be focused? If the game isn't
 * focused, it will pause if it's not the active window.
 * @default true
 *
 * @param ShortcutScripts:eval
 * @text Shortcut Scripts
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables shortcut-based scripts.
 * View the helpfile for more information.
 * @default true
 *
 * @param SmartEventCollisionPriority:eval
 * @text Smart Event Collision
 * @parent Misc
 * @type boolean
 * @on Only Same Level
 * @off Default
 * @desc Makes events only able to collide with one another if they're 'Same as characters' priority.
 * @default true
 *
 * @param SubfolderParse:eval
 * @text Subfolder Name Purge
 * @parent Misc
 * @type boolean
 * @on Purge Subfolders Names
 * @off Don't Purge Name
 * @desc Purge subfolder name from Plugin Parameters when reading
 * data to let Plugin Commands work properly.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Color:
 *
 * @param BasicColors
 * @text Basic Colors
 *
 * @param ColorNormal:str
 * @text Normal
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ColorSystem:str
 * @text System
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 16
 *
 * @param ColorCrisis:str
 * @text Crisis
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param ColorDeath:str
 * @text Death
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param ColorGaugeBack:str
 * @text Gauge Back
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param ColorHPGauge1:str
 * @text HP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 20
 *
 * @param ColorHPGauge2:str
 * @text HP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 21
 *
 * @param ColorMPGauge1:str
 * @text MP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 22
 *
 * @param ColorMPGauge2:str
 * @text MP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorMPCost:str
 * @text MP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorPowerUp:str
 * @text Power Up
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorPowerDown:str
 * @text Power Down
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 25
 *
 * @param ColorCTGauge1:str
 * @text CT Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 26
 *
 * @param ColorCTGauge2:str
 * @text CT Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param ColorTPGauge1:str
 * @text TP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 28
 *
 * @param ColorTPGauge2:str
 * @text TP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorTPCost:str
 * @text TP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorPending:str
 * @text Pending Color
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #2a847d
 *
 * @param ColorExpGauge1:str
 * @text EXP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 30
 *
 * @param ColorExpGauge2:str
 * @text EXP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 31
 *
 * @param ColorMaxLvGauge1:str
 * @text MaxLv Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 14
 *
 * @param ColorMaxLvGauge2:str
 * @text MaxLv Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param AlphaColors
 * @text Alpha Colors
 *
 * @param OutlineColor:str
 * @text Window Font Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param OutlineColorGauge:str
 * @text Gauge Number Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 1.0)
 *
 * @param DimColor1:str
 * @text Dim Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param DimColor2:str
 * @text Dim Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0)
 *
 * @param ItemBackColor1:str
 * @text Item Back Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(32, 32, 32, 0.5)
 *
 * @param ItemBackColor2:str
 * @text Item Back Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.5)
 *
 * @param ConditionalColors
 * @text Conditional Colors
 *
 * @param ActorHPColor:func
 * @text JS: Actor HP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what HP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If the actor is dead, return death color.\n} else if (actor.isDead()) {\n    return this.deathColor();\n\n// If the actor is dying, return crisis color.\n} else if (actor.isDying()) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorMPColor:func
 * @text JS: Actor MP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what MP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If MP rate is below 25%, return crisis color.\n} else if (actor.mpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorTPColor:func
 * @text JS: Actor TP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what TP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If TP rate is below 25%, return crisis color.\n} else if (actor.tpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ParamChange:func
 * @text JS: Parameter Change
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining whatcolor to use for parameter changes.
 * @default "// Set the variables used in this function.\nlet change = arguments[0];\n\n// If a positive change, use power up color.\nif (change > 0) {\n    return this.powerUpColor();\n\n// If a negative change, use power down color.\n} else if (change < 0) {\n    return this.powerDownColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param DamageColor:func
 * @text JS: Damage Colors
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what color to use for damage types.
 * @default "// Set the variables used in this function.\nlet colorType = arguments[0];\n\n// Check the value of the color type\n// and return an appropriate color.\nswitch (colorType) {\n\n    case 0: // HP damage\n        return \"#ffffff\";\n\n    case 1: // HP recover\n        return \"#b9ffb5\";\n\n    case 2: // MP damage\n        return \"#bb88bb\";\n\n    case 3: // MP recover\n        return \"#80b0ff\";\n\n    default:\n        return \"#808080\";\n}"
 */
/* ----------------------------------------------------------------------------
 * Gold Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gold:
 *
 * @param GoldMax:num
 * @text Gold Max
 * @type num
 * @min 1
 * @desc Maximum amount of Gold the party can hold.
 * Default 99999999
 * @default 99999999
 *
 * @param GoldFontSize:num
 * @text Gold Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside Gold Windows.
 * Default: 26
 * @default 24
 *
 * @param GoldIcon:num
 * @text Gold Icon
 * @desc Icon used to represent Gold.
 * Use 0 for no icon.
 * @default 314
 *
 * @param GoldOverlap:str
 * @text Gold Overlap
 * @desc Text used too much Gold to fit in the window.
 * @default A Lot
 *
 * @param ItemStyle:eval
 * @text Item Style
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Draw gold in the item style?
 * ie: Icon, Label, Value
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Image Loading Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ImgLoad:
 *
 * @param animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default ["Balloon","IconSet"]
 *
 * @param tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Keyboard Input Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~KeyboardInput:
 *
 * @param Controls
 *
 * @param WASD:eval
 * @text WASD Movement
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables WASD movement for your game project.
 * Moves the W page down button to E.
 * @default false
 *
 * @param DashToggleR:eval
 * @text R Button: Dash Toggle
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables R button as an Always Dash option toggle.
 * @default false
 *
 * @param NameInput
 * @text Name Input
 *
 * @param EnableNameInput:eval
 * @text Enable?
 * @parent NameInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for name entry.
 * Only tested with English keyboards.
 * @default true
 * 
 * @param DefaultMode:str
 * @text Default Mode
 * @parent NameInput
 * @type select
 * @option Default - Uses Arrow Keys to select letters.
 * @value default
 * @option Keyboard - Uses Keyboard to type in letters.
 * @value keyboard
 * @desc Select default mode when entering the scene.
 * @default keyboard
 *
 * @param QwertyLayout:eval
 * @text QWERTY Layout
 * @parent NameInput
 * @type boolean
 * @on QWERTY Layout
 * @off ABCDEF Layout
 * @desc Uses the QWERTY layout for manual entry.
 * @default true
 *
 * @param NameInputMessage:eval
 * @text Keyboard Message
 * @parent NameInput
 * @type note
 * @desc The message displayed when allowing keyboard entry.
 * You may use text codes here.
 * @default "Type in this character's name.\nPress \\c[5]ENTER\\c[0] when you're done.\n\n-or-\n\nPress \\c[5]arrow keys\\c[0]/\\c[5]TAB\\c[0] to switch\nto manual character entry.\n\nPress \\c[5]ESC\\c[0]/\\c[5]TAB\\c[0] to use to keyboard."
 * 
 * @param BannedWords:arraystr
 * @text Banned Words
 * @parent NameInput
 * @type string[]
 * @desc Players cannot use these words for names.
 * These include words inside the names.
 * @default []
 *
 * @param NumberInput
 * @text Number Input
 *
 * @param EnableNumberInput:eval
 * @text Enable?
 * @parent NumberInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for number entry.
 * Only tested with English keyboards.
 * @default true
 *
 * @param ButtonAssist
 * @text Button Assist
 * 
 * @param Keyboard:str
 * @text Switch To Keyboard
 * @parent ButtonAssist
 * @desc Text used to describe the keyboard switch.
 * @default Keyboard
 * 
 * @param Manual:str
 * @text Switch To Manual
 * @parent ButtonAssist
 * @desc Text used to describe the manual entry switch.
 * @default Manual
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuBg:
 *
 * @param Scene_Menu:struct
 * @text Scene_Menu
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Item:struct
 * @text Scene_Item
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Skill:struct
 * @text Scene_Skill
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Equip:struct
 * @text Scene_Equip
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Status:struct
 * @text Scene_Status
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Options:struct
 * @text Scene_Options
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Save:struct
 * @text Scene_Save
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Load:struct
 * @text Scene_Load
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_GameEnd:struct
 * @text Scene_GameEnd
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"128","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Shop:struct
 * @text Scene_Shop
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Name:struct
 * @text Scene_Name
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Unlisted:struct
 * @text Scene_Unlisted
 * @type struct<BgSettings>
 * @desc The individual background settings for any scenes that aren't listed here.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Button Assist Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ButtonAssist:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Enable the Menu Button Assist Window.
 * @default true
 *
 * @param Location:str
 * @text Location
 * @parent General
 * @type select
 * @option Top of Screen
 * @value top
 * @option Bottom of Screen
 * @value bottom
 * @desc Determine the location of the Button Assist Window.
 * Requires Plugin Parameters => UI => Side Buttons ON.
 * @default bottom
 *
 * @param BgType:num
 * @text Background Type
 * @parent General
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param Text
 *
 * @param TextFmt:str
 * @text Text Format
 * @parent Text
 * @desc Format on how the buttons are displayed.
 * Text codes allowed. %1 - Key, %2 - Text
 * @default %1:%2
 *
 * @param MultiKeyFmt:str
 * @text Multi-Key Format
 * @parent Text
 * @desc Format for actions with multiple keys.
 * Text codes allowed. %1 - Key 1, %2 - Key 2
 * @default %1/%2
 *
 * @param OkText:str
 * @text OK Text
 * @parent Text
 * @desc Default text used to display OK Key Action.
 * Text codes allowed.
 * @default Select
 *
 * @param CancelText:str
 * @text Cancel Text
 * @parent Text
 * @desc Default text used to display Cancel Key Action.
 * Text codes allowed.
 * @default Back
 *
 * @param SwitchActorText:str
 * @text Switch Actor Text
 * @parent Text
 * @desc Default text used to display Switch Actor Action.
 * Text codes allowed.
 * @default Switch Ally
 *
 * @param Keys
 *
 * @param KeyUnlisted:str
 * @text Key: Unlisted Format
 * @parent Keys
 * @desc If a key is not listed below, use this format.
 * Text codes allowed. %1 - Key
 * @default \}❪%1❫\{
 *
 * @param KeyUP:str
 * @text Key: Up
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default ^
 *
 * @param KeyDOWN:str
 * @text Key: Down
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default v
 *
 * @param KeyLEFT:str
 * @text Key: Left
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default <<
 *
 * @param KeyRIGHT:str
 * @text Key: Right
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default >>
 *
 * @param KeySHIFT:str
 * @text Key: Shift
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪SHIFT❫\{
 *
 * @param KeyTAB:str
 * @text Key: Tab
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪TAB❫\{
 *
 * @param KeyA:str
 * @text Key: A
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default A
 *
 * @param KeyB:str
 * @text Key: B
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default B
 *
 * @param KeyC:str
 * @text Key: C
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default C
 *
 * @param KeyD:str
 * @text Key: D
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default D
 *
 * @param KeyE:str
 * @text Key: E
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default E
 *
 * @param KeyF:str
 * @text Key: F
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default F
 *
 * @param KeyG:str
 * @text Key: G
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default G
 *
 * @param KeyH:str
 * @text Key: H
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default H
 *
 * @param KeyI:str
 * @text Key: I
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default I
 *
 * @param KeyJ:str
 * @text Key: J
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default J
 *
 * @param KeyK:str
 * @text Key: K
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default K
 *
 * @param KeyL:str
 * @text Key: L
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default L
 *
 * @param KeyM:str
 * @text Key: M
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default M
 *
 * @param KeyN:str
 * @text Key: N
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default N
 *
 * @param KeyO:str
 * @text Key: O
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default O
 *
 * @param KeyP:str
 * @text Key: P
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default P
 *
 * @param KeyQ:str
 * @text Key: Q
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Q
 *
 * @param KeyR:str
 * @text Key: R
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default R
 *
 * @param KeyS:str
 * @text Key: S
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default S
 *
 * @param KeyT:str
 * @text Key: T
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default T
 *
 * @param KeyU:str
 * @text Key: U
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default U
 *
 * @param KeyV:str
 * @text Key: V
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default V
 *
 * @param KeyW:str
 * @text Key: W
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default W
 *
 * @param KeyX:str
 * @text Key: X
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default X
 *
 * @param KeyY:str
 * @text Key: Y
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Y
 *
 * @param KeyZ:str
 * @text Key: Z
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Z
 *
 */
/* ----------------------------------------------------------------------------
 * Controller Buttons Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ControllerButtons:
 *
 * @param ID
 * @text ID Information
 *
 * @param Name:str
 * @text Controller ID Name
 * @parent ID
 * @desc Exact string used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 *
 * @param Match:str
 * @text Similarity Match
 * @parent ID
 * @desc Similar text used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 * 
 * @param Directions
 *
 * @param up:str
 * @text Up
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param left:str
 * @text Left
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param right:str
 * @text Right
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param down:str
 * @text Down
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 * 
 * @param Actions
 *
 * @param ok:str
 * @text OK
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param cancel:str
 * @text Cancel
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param menu:str
 * @text Menu
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param shift:str
 * @text Shift
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pageup:str
 * @text Page Up
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pagedown:str
 * @text Page Down
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Layout Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuLayout:
 *
 * @param Title:struct
 * @text Scene_Title
 * @parent SceneSettings
 * @type struct<Title>
 * @desc Various options on adjusting the Title Scene.
 * @default {"TitleScreen":"","DocumentTitleFmt:str":"%1: %2 - Version %3","Subtitle:str":"Subtitle","Version:str":"0.00","drawGameTitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = $dataSystem.gameTitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 8;\\nbitmap.fontSize = 72;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameSubtitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4 + 72;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = Scene_Title.subtitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 6;\\nbitmap.fontSize = 48;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameVersion:func":"\"const bitmap = this._gameTitleSprite.bitmap;\\nconst x = 0;\\nconst y = Graphics.height - 20;\\nconst width = Math.round(Graphics.width / 4);\\nconst height = 20;\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\nconst text = 'Version ' + Scene_Title.version;\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 3;\\nbitmap.fontSize = 16;\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\"left\\\");\"","CommandRect:func":"\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\nconst rows = this.commandWindowRows();\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\nreturn new Rectangle(x, y, width, height);\"","ButtonFadeSpeed:num":"4"}
 *
 * @param MainMenu:struct
 * @text Scene_Menu
 * @parent SceneSettings
 * @type struct<MainMenu>
 * @desc Various options on adjusting the Main Menu Scene.
 * @default {"CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const width = this.mainCommandWidth();\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this.mainAreaHeight();\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ItemMenu:struct
 * @text Scene_Item
 * @parent SceneSettings
 * @type struct<ItemMenu>
 * @desc Various options on adjusting the Item Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaBottom() - y;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SkillMenu:struct
 * @text Scene_Skill
 * @parent SceneSettings
 * @type struct<SkillMenu>
 * @desc Various options on adjusting the Skill Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","SkillTypeWindow":"","SkillTypeBgType:num":"0","SkillTypeRect:func":"\"const rows = 3;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this._skillTypeWindow.height;\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._statusWindow.y + this._statusWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param EquipMenu:struct
 * @text Scene_Equip
 * @parent SceneSettings
 * @type struct<EquipMenu>
 * @desc Various options on adjusting the Equip Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = this.statusWidth();\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = this.statusWidth();\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SlotWindow":"","SlotBgType:num":"0","SlotRect:func":"\"const commandWindowRect = this.commandWindowRect();\\nconst x = this.statusWidth();\\nconst y = commandWindowRect.y + commandWindowRect.height;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"return this.slotWindowRect();\""}
 *
 * @param StatusMenu:struct
 * @text Scene_Status
 * @parent SceneSettings
 * @type struct<StatusMenu>
 * @desc Various options on adjusting the Status Menu Scene.
 * @default {"ProfileWindow":"","ProfileBgType:num":"0","ProfileRect:func":"\"const width = Graphics.boxWidth;\\nconst height = this.profileHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.statusParamsWindowRect().y - y;\\nreturn new Rectangle(x, y, width, height);\"","StatusParamsWindow":"","StatusParamsBgType:num":"0","StatusParamsRect:func":"\"const width = this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusEquipWindow":"","StatusEquipBgType:num":"0","StatusEquipRect:func":"\"const width = Graphics.boxWidth - this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = this.statusParamsWidth();\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param OptionsMenu:struct
 * @text Scene_Options
 * @parent SceneSettings
 * @type struct<OptionsMenu>
 * @desc Various options on adjusting the Options Menu Scene.
 * @default {"OptionsWindow":"","OptionsBgType:num":"0","OptionsRect:func":"\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\nconst width = 400;\\nconst height = this.calcWindowHeight(n, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SaveMenu:struct
 * @text Scene_Save
 * @parent SceneSettings
 * @type struct<SaveMenu>
 * @desc Various options on adjusting the Save Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param LoadMenu:struct
 * @text Scene_Load
 * @parent SceneSettings
 * @type struct<LoadMenu>
 * @desc Various options on adjusting the Load Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param GameEnd:struct
 * @text Scene_GameEnd
 * @parent SceneSettings
 * @type struct<GameEnd>
 * @desc Various options on adjusting the Game End Scene.
 * @default {"CommandList:arraystruct":"[\"{\\\"Symbol:str\\\":\\\"toTitle\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.toTitle;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"cancel\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.cancel;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.popScene();\\\\\\\"\\\"}\"]","CommandBgType:num":"0","CommandRect:func":"\"const rows = 2;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ShopMenu:struct
 * @text Scene_Shop
 * @parent SceneSettings
 * @type struct<ShopMenu>
 * @desc Various options on adjusting the Shop Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const wx = 0;\\nconst wy = this.helpAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = this.helpAreaHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = this._goldWindow.x;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","DummyWindow":"","DummyBgType:num":"0","DummyRect:func":"\"const x = 0;\\nconst y = this._commandWindow.y + this._commandWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","NumberWindow":"","NumberBgType:num":"0","NumberRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._dummyWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._dummyWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","BuyWindow":"","BuyBgType:num":"0","BuyRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SellWindow":"","SellBgType:num":"0","SellRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height =\\n    this.mainAreaHeight() -\\n    this._commandWindow.height -\\n    this._categoryWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param NameMenu:struct
 * @text Scene_Name
 * @parent SceneSettings
 * @type struct<NameMenu>
 * @desc Various options on adjusting the Actor Rename Scene.
 * @default {"EditWindow":"","EditBgType:num":"0","EditRect:func":"\"const rows = 9;\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\nconst padding = $gameSystem.windowPadding();\\nconst width = 600;\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","InputWindow":"","InputBgType:num":"0","InputRect:func":"\"const x = this._editWindow.x;\\nconst y = this._editWindow.y + this._editWindow.height;\\nconst rows = 9;\\nconst width = this._editWindow.width;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\""}
 *
 */
/* ----------------------------------------------------------------------------
 * Main Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MainMenu:
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.mainCommandWidth();\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this.mainAreaHeight();\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Item Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaBottom() - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SkillMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SkillTypeWindow
 * @text Skill Type Window
 *
 * @param SkillTypeBgType:num
 * @text Background Type
 * @parent SkillTypeWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SkillTypeRect:func
 * @text JS: X, Y, W, H
 * @parent SkillTypeWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 3;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this._skillTypeWindow.height;\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._statusWindow.y + this._statusWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._statusWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = this.statusWidth();\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this.statusWidth();\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SlotWindow
 * @text Slot Window
 *
 * @param SlotBgType:num
 * @text Background Type
 * @parent SlotWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SlotRect:func
 * @text JS: X, Y, W, H
 * @parent SlotWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const commandWindowRect = this.commandWindowRect();\nconst x = this.statusWidth();\nconst y = commandWindowRect.y + commandWindowRect.height;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.mainAreaHeight() - commandWindowRect.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "return this.slotWindowRect();"
 *
 */
/* ----------------------------------------------------------------------------
 * Status Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusMenu:
 *
 * @param ProfileWindow
 * @text Profile Window
 *
 * @param ProfileBgType:num
 * @text Background Type
 * @parent ProfileWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ProfileRect:func
 * @text JS: X, Y, W, H
 * @parent ProfileWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth;\nconst height = this.profileHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.statusParamsWindowRect().y - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusParamsWindow
 * @text Parameters Window
 *
 * @param StatusParamsBgType:num
 * @text Background Type
 * @parent StatusParamsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusParamsRect:func
 * @text JS: X, Y, W, H
 * @parent StatusParamsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusEquipWindow
 * @text Equipment Window
 *
 * @param StatusEquipBgType:num
 * @text Background Type
 * @parent StatusEquipWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusEquipRect:func
 * @text JS: X, Y, W, H
 * @parent StatusEquipWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = this.statusParamsWidth();\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Options Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~OptionsMenu:
 *
 * @param OptionsWindow
 * @text Options Window
 *
 * @param OptionsBgType:num
 * @text Background Type
 * @parent OptionsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param OptionsRect:func
 * @text JS: X, Y, W, H
 * @parent OptionsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\nconst width = 400;\nconst height = this.calcWindowHeight(n, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Save Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SaveMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Load Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LoadMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Game End Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GameEnd:
 *
 * @param CommandList:arraystruct
 * @text Command Window List
 * @type struct<Command>[]
 * @desc Window commands used by the Game End screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"toTitle\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.toTitle;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandToTitle();\\\"\"}","{\"Symbol:str\":\"cancel\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.cancel;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.popScene();\\\"\"}"]
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandList:arraystruct
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandList:arraystruct
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 2;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.helpAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = this.helpAreaHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = this._goldWindow.x;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param DummyWindow
 * @text Dummy Window
 *
 * @param DummyBgType:num
 * @text Background Type
 * @parent DummyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param DummyRect:func
 * @text JS: X, Y, W, H
 * @parent DummyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._commandWindow.y + this._commandWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._commandWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param NumberWindow
 * @text Number Window
 *
 * @param NumberBgType:num
 * @text Background Type
 * @parent NumberWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param NumberRect:func
 * @text JS: X, Y, W, H
 * @parent NumberWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusWidth();\nconst height = this._dummyWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._dummyWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param BuyWindow
 * @text Buy Window
 *
 * @param BuyBgType:num
 * @text Background Type
 * @parent BuyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param BuyRect:func
 * @text JS: X, Y, W, H
 * @parent BuyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SellWindow
 * @text Sell Window
 *
 * @param SellBgType:num
 * @text Background Type
 * @parent SellWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SellRect:func
 * @text JS: X, Y, W, H
 * @parent SellWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height =\n    this.mainAreaHeight() -\n    this._commandWindow.height -\n    this._categoryWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Name Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NameMenu:
 *
 * @param EditWindow
 * @text Edit Window
 *
 * @param EditBgType:num
 * @text Background Type
 * @parent EditWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param EditRect:func
 * @text JS: X, Y, W, H
 * @parent EditWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 9;\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\nconst padding = $gameSystem.windowPadding();\nconst width = 600;\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param InputWindow
 * @text Input Window
 *
 * @param InputBgType:num
 * @text Background Type
 * @parent InputWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param InputRect:func
 * @text JS: X, Y, W, H
 * @parent InputWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this._editWindow.x;\nconst y = this._editWindow.y + this._editWindow.height;\nconst rows = 9;\nconst width = this._editWindow.width;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Title Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Title:
 *
 * @param TitleScreen
 * @text Title Screen
 *
 * @param DocumentTitleFmt:str
 * @text Document Title Format
 * @parent TitleScreen
 * @desc Format to display text in document title.
 * %1 - Main Title, %2 - Subtitle, %3 - Version
 * @default %1: %2 - Version %3
 *
 * @param Subtitle:str
 * @text Subtitle
 * @parent TitleScreen
 * @desc Subtitle to be displayed under the title name.
 * @default Subtitle
 *
 * @param Version:str
 * @text Version
 * @parent TitleScreen
 * @desc Version to be display in the title screen corner.
 * @default 0.00
 *
 * @param drawGameTitle:func
 * @text JS: Draw Title
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game title.
 * @default "const x = 20;\nconst y = Graphics.height / 4;\nconst maxWidth = Graphics.width - x * 2;\nconst text = $dataSystem.gameTitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 8;\nbitmap.fontSize = 72;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameSubtitle:func
 * @text JS: Draw Subtitle
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game subtitle.
 * @default "const x = 20;\nconst y = Graphics.height / 4 + 72;\nconst maxWidth = Graphics.width - x * 2;\nconst text = Scene_Title.subtitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 6;\nbitmap.fontSize = 48;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameVersion:func
 * @text JS: Draw Version
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game version.
 * @default "const bitmap = this._gameTitleSprite.bitmap;\nconst x = 0;\nconst y = Graphics.height - 20;\nconst width = Math.round(Graphics.width / 4);\nconst height = 20;\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\nconst text = 'Version ' + Scene_Title.version;\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 3;\nbitmap.fontSize = 16;\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \"left\");"
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent TitleScreen
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const offsetX = $dataSystem.titleCommandWindow.offsetX;\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\nconst rows = this.commandWindowRows();\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\nconst y = Graphics.boxHeight - height - 96 + offsetY;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonFadeSpeed:num
 * @text Button Fade Speed
 * @parent TitleScreen
 * @type number
 * @min 1
 * @max 255
 * @desc Speed at which the buttons fade in at (1-255).
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Param:
 *
 * @param DisplayedParams:arraystr
 * @text Displayed Parameters
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc A list of the parameters that will be displayed in-game.
 * @default ["ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param ExtDisplayedParams:arraystr
 * @text Extended Parameters
 * @parent DisplayedParams:arraystr
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc The list shown in extended scenes (for other VisuStella plugins).
 * @default ["MaxHP","MaxMP","ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param BasicParameters
 * @text Basic Parameters
 *
 * @param ShowActorLevel:eval
 * @text Show Actor Level?
 * @parent BasicParameters
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the actor level when displaying actors?
 * Used for most windows in-game.
 * @default true
 *
 * @param CrisisRate:num
 * @text HP Crisis Rate
 * @parent BasicParameters
 * @desc HP Ratio at which a battler can be considered in crisis mode.
 * @default 0.25
 *
 * @param BasicParameterFormula:func
 * @text JS: Formula
 * @parent BasicParameters
 * @type note
 * @desc Formula used to determine the total value all 8 basic parameters: MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 * @default "// Determine the variables used in this calculation.\nlet paramId = arguments[0];\nlet base = this.paramBase(paramId);\nlet plus = this.paramPlus(paramId);\nlet paramRate = this.paramRate(paramId);\nlet buffRate = this.paramBuffRate(paramId);\nlet flatBonus = this.paramFlatBonus(paramId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\n\n// Determine the limits\nconst maxValue = this.paramMax(paramId);\nconst minValue = this.paramMin(paramId);\n\n// Final value\nreturn Math.round(value.clamp(minValue, maxValue));"
 *
 * @param BasicParamCaps
 * @text Parameter Caps
 * @parent BasicParameters
 *
 * @param BasicActorParamCaps
 * @text Actors
 * @parent BasicParamCaps
 *
 * @param BasicActorParamMax0:str
 * @text MaxHP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax1:str
 * @text MaxMP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax2:str
 * @text ATK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax3:str
 * @text DEF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax4:str
 * @text MAT Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax5:str
 * @text MDF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax6:str
 * @text AGI Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax7:str
 * @text LUK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamCaps
 * @text Enemies
 * @parent BasicParamCaps
 *
 * @param BasicEnemyParamMax0:str
 * @text MaxHP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999999
 *
 * @param BasicEnemyParamMax1:str
 * @text MaxMP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicEnemyParamMax2:str
 * @text ATK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax3:str
 * @text DEF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax4:str
 * @text MAT Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax5:str
 * @text MDF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax6:str
 * @text AGI Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax7:str
 * @text LUK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param XParameters
 * @text X Parameters
 *
 * @param XParameterFormula:func
 * @text JS: Formula
 * @parent XParameters
 * @type note
 * @desc Formula used to determine the total value all 10 X parameters: HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 * @default "// Determine the variables used in this calculation.\nlet xparamId = arguments[0];\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\nlet plus = this.xparamPlus(xparamId);\nlet paramRate = this.xparamRate(xparamId);\nlet flatBonus = this.xparamFlatBonus(xparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param XParamVocab
 * @text Vocabulary
 * @parent XParameters
 *
 * @param XParamVocab0:str
 * @text HIT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Hit
 *
 * @param XParamVocab1:str
 * @text EVA
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Evasion
 *
 * @param XParamVocab2:str
 * @text CRI
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Rate
 *
 * @param XParamVocab3:str
 * @text CEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Evade
 *
 * @param XParamVocab4:str
 * @text MEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Evade
 *
 * @param XParamVocab5:str
 * @text MRF
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Reflect
 *
 * @param XParamVocab6:str
 * @text CNT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Counter
 *
 * @param XParamVocab7:str
 * @text HRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default HP Regen
 *
 * @param XParamVocab8:str
 * @text MRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default MP Regen
 *
 * @param XParamVocab9:str
 * @text TRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default TP Regen
 *
 * @param SParameters
 * @text S Parameters
 *
 * @param SParameterFormula:func
 * @text JS: Formula
 * @parent SParameters
 * @type note
 * @desc Formula used to determine the total value all 10 S parameters: TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 * @default "// Determine the variables used in this calculation.\nlet sparamId = arguments[0];\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\nlet plus = this.sparamPlus(sparamId);\nlet paramRate = this.sparamRate(sparamId);\nlet flatBonus = this.sparamFlatBonus(sparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param SParamVocab
 * @text Vocabulary
 * @parent SParameters
 *
 * @param SParamVocab0:str
 * @text TGR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Aggro
 *
 * @param SParamVocab1:str
 * @text GRD
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Guard
 *
 * @param SParamVocab2:str
 * @text REC
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Recovery
 *
 * @param SParamVocab3:str
 * @text PHA
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Item Effect
 *
 * @param SParamVocab4:str
 * @text MCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default MP Cost
 *
 * @param SParamVocab5:str
 * @text TCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default TP Charge
 *
 * @param SParamVocab6:str
 * @text PDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Physical DMG
 *
 * @param SParamVocab7:str
 * @text MDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Magical DMG
 *
 * @param SParamVocab8:str
 * @text FDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Floor DMG
 *
 * @param SParamVocab9:str
 * @text EXR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default EXP Gain
 *
 * @param Icons
 * @text Icons
 *
 * @param DrawIcons:eval
 * @text Draw Icons?
 * @parent Icons
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Draw icons next to parameter names?
 * @default true
 *
 * @param IconParam0:str
 * @text MaxHP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 84
 *
 * @param IconParam1:str
 * @text MaxMP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconParam2:str
 * @text ATK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconParam3:str
 * @text DEF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 81
 *
 * @param IconParam4:str
 * @text MAT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 101
 *
 * @param IconParam5:str
 * @text MDF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 133
 *
 * @param IconParam6:str
 * @text AGI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 140
 *
 * @param IconParam7:str
 * @text LUK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 87
 *
 * @param IconXParam0:str
 * @text HIT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 102
 *
 * @param IconXParam1:str
 * @text EVA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam2:str
 * @text CRI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 78
 *
 * @param IconXParam3:str
 * @text CEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam4:str
 * @text MEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 171
 *
 * @param IconXParam5:str
 * @text MRF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 222
 *
 * @param IconXParam6:str
 * @text CNT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 77
 *
 * @param IconXParam7:str
 * @text HRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam8:str
 * @text MRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam9:str
 * @text TRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam0:str
 * @text TGR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 5
 *
 * @param IconSParam1:str
 * @text GRD
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 128
 *
 * @param IconSParam2:str
 * @text REC
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam3:str
 * @text PHA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 176
 *
 * @param IconSParam4:str
 * @text MCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconSParam5:str
 * @text TCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 164
 *
 * @param IconSParam6:str
 * @text PDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconSParam7:str
 * @text MDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 79
 *
 * @param IconSParam8:str
 * @text FDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 141
 *
 * @param IconSParam9:str
 * @text EXR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 73
 *
 */
/* ----------------------------------------------------------------------------
 * Commands Struct
 * ----------------------------------------------------------------------------
 */
/*~struct~Command:
 *
 * @param Symbol:str
 * @text Symbol
 * @desc The symbol used for this command.
 * @default Symbol
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc Displayed text used for this title command.
 * If this has a value, ignore the JS: Text version.
 * @default Untitled
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine string used for the displayed name.
 * @default "return 'Text';"
 *
 * @param ShowJS:func
 * @text JS: Show
 * @type note
 * @desc JavaScript code used to determine if the item is shown or not.
 * @default "return true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @type note
 * @desc JavaScript code used to determine if the item is enabled or not.
 * @default "return true;"
 *
 * @param ExtJS:func
 * @text JS: Ext
 * @type note
 * @desc JavaScript code used to determine any ext data that should be added.
 * @default "return null;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this command is selected.
 * @default ""
 *
 */
/* ----------------------------------------------------------------------------
 * Title Picture Buttons
 * ----------------------------------------------------------------------------
 */
/*~struct~TitlePictureButton:
 *
 * @param PictureFilename:str
 * @text Picture's Filename
 * @type file
 * @dir img/pictures/
 * @desc Filename used for the picture.
 * @default 
 *
 * @param ButtonURL:str
 * @text Button URL
 * @desc URL for the button to go to upon being clicked.
 * @default https://www.google.com/
 *
 * @param PositionJS:func
 * @text JS: Position
 * @type note
 * @desc JavaScript code that helps determine the button's Position.
 * @default "this.x = Graphics.width - this.bitmap.width - 20;\nthis.y = Graphics.height - this.bitmap.height - 20;"
 *
 * @param OnLoadJS:func
 * @text JS: On Load
 * @type note
 * @desc JavaScript code that runs once this button bitmap is loaded.
 * @default "this.opacity = 0;\nthis.visible = true;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this button is pressed.
 * @default "const url = this._data.ButtonURL;\nVisuMZ.openURL(url);"
 *
 */
/* ----------------------------------------------------------------------------
 * UI Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~UI:
 *
 * @param UIArea
 * @text UI Area
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @parent UIArea
 * @desc Default fade speed for transitions.
 * @default 24
 *
 * @param BoxMargin:num
 * @text Box Margin
 * @parent UIArea
 * @type number
 * @min 0
 * @desc Set the margin in pixels for the screen borders.
 * Default: 4
 * @default 4
 *
 * @param CommandWidth:num
 * @text Command Window Width
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the width for standard Command Windows.
 * Default: 240
 * @default 240
 *
 * @param BottomHelp:eval
 * @text Bottom Help Window
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the Help Window at the bottom of the screen?
 * @default false
 *
 * @param RightMenus:eval
 * @text Right Aligned Menus
 * @parent UIArea
 * @type boolean
 * @on Right
 * @off Left
 * @desc Put most command windows to the right side of the screen.
 * @default true
 *
 * @param ShowButtons:eval
 * @text Show Buttons
 * @parent UIArea
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show clickable buttons in your game?
 * This will affect all buttons.
 * @default true
 *
 * @param cancelShowButton:eval
 * @text Show Cancel Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show cancel button?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param menuShowButton:eval
 * @text Show Menu Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show main menu button from the map scene?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param pagedownShowButton:eval
 * @text Show Page Up/Down
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show page up/down buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param numberShowButton:eval
 * @text Show Number Buttons
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show number adjustment buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param ButtonHeight:num
 * @text Button Area Height
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the height for the button area.
 * Default: 52
 * @default 52
 *
 * @param BottomButtons:eval
 * @text Bottom Buttons
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the buttons at the bottom of the screen?
 * @default false
 *
 * @param SideButtons:eval
 * @text Side Buttons
 * @parent UIArea
 * @type boolean
 * @on Side
 * @off Normal
 * @desc Push buttons to the side of the UI if there is room.
 * @default true
 *
 * @param MenuObjects
 * @text Menu Objects
 *
 * @param LvExpGauge:eval
 * @text Level -> EXP Gauge
 * @parent MenuObjects
 * @type boolean
 * @on Draw Gauge
 * @off Keep As Is
 * @desc Draw an EXP Gauge under the drawn level.
 * @default true
 *
 * @param ParamArrow:str
 * @text Parameter Arrow
 * @parent MenuObjects
 * @desc The arrow used to show changes in the parameter values.
 * @default →
 *
 * @param TextCodeSupport
 * @text Text Code Support
 *
 * @param TextCodeClassNames:eval
 * @text Class Names
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make class names support text codes?
 * @default true
 *
 * @param TextCodeNicknames:eval
 * @text Nicknames
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make nicknames support text codes?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param WindowDefaults
 * @text Defaults
 *
 * @param EnableMasking:eval
 * @text Enable Masking
 * @parent WindowDefaults
 * @type boolean
 * @on Masking On
 * @off Masking Off
 * @desc Enable window masking (windows hide other windows behind 
 * them)? WARNING: Turning it on can obscure data.
 * @default false
 *
 * @param LineHeight:num
 * @text Line Height
 * @parent WindowDefaults
 * @desc Default line height used for standard windows.
 * Default: 36
 * @default 36
 *
 * @param ItemPadding:num
 * @text Item Padding
 * @parent WindowDefaults
 * @desc Default line padding used for standard windows.
 * Default: 8
 * @default 8
 *
 * @param BackOpacity:num
 * @text Back Opacity
 * @parent WindowDefaults
 * @desc Default back opacity used for standard windows.
 * Default: 192
 * @default 192
 *
 * @param TranslucentOpacity:num
 * @text Translucent Opacity
 * @parent WindowDefaults
 * @desc Default translucent opacity used for standard windows.
 * Default: 160
 * @default 160
 *
 * @param OpenSpeed:num
 * @text Window Opening Speed
 * @parent WindowDefaults
 * @desc Default open speed used for standard windows.
 * Default: 32 (Use a number between 0-255)
 * @default 32
 * @default 24
 *
 * @param ColSpacing:num
 * @text Column Spacing
 * @parent WindowDefaults
 * @desc Default column spacing for selectable windows.
 * Default: 8
 * @default 8
 *
 * @param RowSpacing:num
 * @text Row Spacing
 * @parent WindowDefaults
 * @desc Default row spacing for selectable windows.
 * Default: 4
 * @default 4
 * 
 * @param SelectableItems
 * @text Selectable Items
 *
 * @param ShowItemBackground:eval
 * @text Show Background?
 * @parent SelectableItems
 * @type boolean
 * @on Show Backgrounds
 * @off No backgrounds.
 * @desc Selectable menu items have dark boxes behind them. Show them?
 * @default true
 *
 * @param ItemHeight:num
 * @text Item Height Padding
 * @parent SelectableItems
 * @desc Default padding for selectable items.
 * Default: 8
 * @default 8
 *
 * @param DrawItemBackgroundJS:func
 * @text JS: Draw Background
 * @parent SelectableItems
 * @type note
 * @desc Code used to draw the background rectangle behind clickable menu objects
 * @default "const rect = arguments[0];\nconst c1 = ColorManager.itemBackColor1();\nconst c2 = ColorManager.itemBackColor2();\nconst x = rect.x;\nconst y = rect.y;\nconst w = rect.width;\nconst h = rect.height;\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\nthis.contentsBack.strokeRect(x, y, w, h, c1);"
 */
/* ----------------------------------------------------------------------------
 * Screen Resolution Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenResolution:
 *
 * @param Troops
 *
 * @param RepositionActors:eval
 * @text Reposition Actors
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of actors in battle if the screen resolution has changed. Ignore if using Battle Core.
 * @default true
 *
 * @param RepositionEnemies:eval
 * @text Reposition Enemies
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of enemies in battle if the screen resolution has changed.
 * @default true
 *
 * @param RepositionEnemies130:eval
 * @text For MZ 1.3.0+?
 * @parent RepositionEnemies:eval
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Both this parameter and its parent parameter need to be on when using RPG Maker MZ 1.3.0+.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Screen Shake Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenShake:
 *
 * @param DefaultStyle:str
 * @text Default Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc The default style used for screen shakes.
 * @default random
 *
 * @param originalJS:func
 * @text JS: Original Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\nthis.x += Math.round($gameScreen.shake());"
 *
 * @param randomJS:func
 * @text JS: Random Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param horzJS:func
 * @text JS: Horizontal Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param vertJS:func
 * @text JS: Vertical Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomParam:
 *
 * @param ParamName:str
 * @text Parameter Name
 * @desc What's the parameter's name?
 * Used for VisuStella MZ menus.
 * @default Untitled
 *
 * @param Abbreviation:str
 * @text Abbreviation
 * @parent ParamName:str
 * @desc What abbreviation do you want to use for the parameter?
 * Do not use special characters. Avoid numbers if possible.
 * @default unt
 *
 * @param Icon:num
 * @text Icon
 * @parent ParamName:str
 * @desc What icon do you want to use to represent this parameter?
 * Used for VisuStella MZ menus.
 * @default 160
 *
 * @param Type:str
 * @text Type
 * @parent ParamName:str
 * @type select
 * @option Integer (Whole Numbers Only)
 * @value integer
 * @option Float (Decimals are Allowed)
 * @value float
 * @desc What kind of number value will be returned with this parameter?
 * @default integer
 *
 * @param ValueJS:json
 * @text JS: Value
 * @type note
 * @desc Run this code when this parameter is to be returned.
 * @default "// Declare Constants\nconst user = this;\n\n// Calculations\nreturn 1;"
 *
 */
/* ----------------------------------------------------------------------------
 * Show Picture Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShowPicture:
 * 
 * @param Position
 *
 * @param Origin:num
 * @text Origin
 * @parent Position
 * @type select
 * @option 0 - Upper Left
 * @value 0
 * @option 1 - Center
 * @value 1
 * @desc What is the origin of this picture icon?
 * @default 0
 *
 * @param PositionX:eval
 * @text Position X
 * @parent Position
 * @desc X coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 *
 * @param PositionY:eval
 * @text Position Y
 * @parent Position
 * @desc Y coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 * 
 * @param Scale
 *
 * @param ScaleX:eval
 * @text Width %
 * @parent Scale
 * @desc Horizontal scale of the picture.
 * You may use JavaScript code.
 * @default 100
 *
 * @param ScaleY:eval
 * @text Height %
 * @parent Scale
 * @desc Vertical scale of the picture.
 * You may use JavaScript code.
 * @default 100
 * 
 * @param Blend
 *
 * @param Opacity:eval
 * @text Opacity
 * @parent Blend
 * @desc Insert a number to determine opacity level. Use a
 * number between 0 and 255. You may use JavaScript code.
 * @default 255
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @parent Blend
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the picture?
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * JS Quick Function Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~jsQuickFunc:
 *
 * @param FunctionName:str
 * @text Function Name
 * @desc The function's name in the global namespace.
 * Will not overwrite functions/variables of the same name.
 * @default Untitled
 *
 * @param CodeJS:json
 * @text JS: Code
 * @type note
 * @desc Run this code when using the function.
 * @default "// Insert this as a function anywhere you can input code\n// such as Script Calls or Conditional Branch Scripts.\n\n// Process Code\n"
 *
 */
//=============================================================================

const _0x5d57ff=_0x35e6;(function(_0x28146d,_0x1cbc5f){const _0x1ceef5=_0x35e6,_0x34d659=_0x28146d();while(!![]){try{const _0x119b0d=parseInt(_0x1ceef5(0x3d4))/0x1*(parseInt(_0x1ceef5(0x1d0))/0x2)+-parseInt(_0x1ceef5(0x3c0))/0x3+-parseInt(_0x1ceef5(0x858))/0x4+parseInt(_0x1ceef5(0x678))/0x5+parseInt(_0x1ceef5(0x8e5))/0x6*(parseInt(_0x1ceef5(0x5c1))/0x7)+parseInt(_0x1ceef5(0x912))/0x8*(-parseInt(_0x1ceef5(0x52b))/0x9)+-parseInt(_0x1ceef5(0x1f5))/0xa*(-parseInt(_0x1ceef5(0x6b6))/0xb);if(_0x119b0d===_0x1cbc5f)break;else _0x34d659['push'](_0x34d659['shift']());}catch(_0x36a9b4){_0x34d659['push'](_0x34d659['shift']());}}}(_0x3ae4,0x32c7b));var label='CoreEngine',tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x275f7f){const _0x42a628=_0x35e6;return _0x275f7f[_0x42a628(0x243)]&&_0x275f7f[_0x42a628(0x6d0)]['includes']('['+label+']');})[0x0];function _0x35e6(_0x5dc818,_0x33a20d){const _0x3ae4fd=_0x3ae4();return _0x35e6=function(_0x35e6b6,_0x42871f){_0x35e6b6=_0x35e6b6-0x17d;let _0x406742=_0x3ae4fd[_0x35e6b6];return _0x406742;},_0x35e6(_0x5dc818,_0x33a20d);}VisuMZ[label][_0x5d57ff(0x3d3)]=VisuMZ[label][_0x5d57ff(0x3d3)]||{},VisuMZ[_0x5d57ff(0x9c1)]=function(_0x452eff,_0x57de74){const _0x52cafb=_0x5d57ff;for(const _0x53dbca in _0x57de74){if(_0x52cafb(0x3c9)===_0x52cafb(0x3c9)){if(_0x53dbca[_0x52cafb(0x749)](/(.*):(.*)/i)){const _0x178f28=String(RegExp['$1']),_0x321be7=String(RegExp['$2'])['toUpperCase']()[_0x52cafb(0x7a8)]();let _0x8fff1c,_0x2c8c9d,_0x1115a5;switch(_0x321be7){case'NUM':_0x8fff1c=_0x57de74[_0x53dbca]!==''?Number(_0x57de74[_0x53dbca]):0x0;break;case _0x52cafb(0x307):_0x2c8c9d=_0x57de74[_0x53dbca]!==''?JSON[_0x52cafb(0x987)](_0x57de74[_0x53dbca]):[],_0x8fff1c=_0x2c8c9d[_0x52cafb(0x827)](_0x1b1088=>Number(_0x1b1088));break;case _0x52cafb(0x221):_0x8fff1c=_0x57de74[_0x53dbca]!==''?eval(_0x57de74[_0x53dbca]):null;break;case _0x52cafb(0x315):_0x2c8c9d=_0x57de74[_0x53dbca]!==''?JSON['parse'](_0x57de74[_0x53dbca]):[],_0x8fff1c=_0x2c8c9d[_0x52cafb(0x827)](_0x5509ec=>eval(_0x5509ec));break;case'JSON':_0x8fff1c=_0x57de74[_0x53dbca]!==''?JSON[_0x52cafb(0x987)](_0x57de74[_0x53dbca]):'';break;case _0x52cafb(0x1dc):_0x2c8c9d=_0x57de74[_0x53dbca]!==''?JSON[_0x52cafb(0x987)](_0x57de74[_0x53dbca]):[],_0x8fff1c=_0x2c8c9d[_0x52cafb(0x827)](_0x264712=>JSON['parse'](_0x264712));break;case _0x52cafb(0x3f3):_0x8fff1c=_0x57de74[_0x53dbca]!==''?new Function(JSON[_0x52cafb(0x987)](_0x57de74[_0x53dbca])):new Function(_0x52cafb(0x375));break;case'ARRAYFUNC':_0x2c8c9d=_0x57de74[_0x53dbca]!==''?JSON[_0x52cafb(0x987)](_0x57de74[_0x53dbca]):[],_0x8fff1c=_0x2c8c9d[_0x52cafb(0x827)](_0x320ee4=>new Function(JSON[_0x52cafb(0x987)](_0x320ee4)));break;case _0x52cafb(0x9b7):_0x8fff1c=_0x57de74[_0x53dbca]!==''?String(_0x57de74[_0x53dbca]):'';break;case _0x52cafb(0x810):_0x2c8c9d=_0x57de74[_0x53dbca]!==''?JSON[_0x52cafb(0x987)](_0x57de74[_0x53dbca]):[],_0x8fff1c=_0x2c8c9d[_0x52cafb(0x827)](_0x192675=>String(_0x192675));break;case _0x52cafb(0x527):_0x1115a5=_0x57de74[_0x53dbca]!==''?JSON[_0x52cafb(0x987)](_0x57de74[_0x53dbca]):{},_0x452eff[_0x178f28]={},VisuMZ['ConvertParams'](_0x452eff[_0x178f28],_0x1115a5);continue;case _0x52cafb(0x25f):_0x2c8c9d=_0x57de74[_0x53dbca]!==''?JSON['parse'](_0x57de74[_0x53dbca]):[],_0x8fff1c=_0x2c8c9d[_0x52cafb(0x827)](_0x20b887=>VisuMZ[_0x52cafb(0x9c1)]({},JSON[_0x52cafb(0x987)](_0x20b887)));break;default:continue;}_0x452eff[_0x178f28]=_0x8fff1c;}}else{const _0x307814=this['_viewportSize'],_0x158bf4=this[_0x52cafb(0x517)],_0xd61e17=this[_0x52cafb(0x4c1)]['offsetX']*(this[_0x52cafb(0x905)]?-0x1:0x1)-_0x307814/0x2,_0x48a295=this[_0x52cafb(0x4c1)][_0x52cafb(0x82d)]-_0x158bf4/0x2,_0x2f81f7=this[_0x52cafb(0x5c3)](_0x17056e);_0x3d0f2c['gl']['viewport'](_0xd61e17+_0x2f81f7['x'],_0x48a295+_0x2f81f7['y'],_0x307814,_0x158bf4);}}return _0x452eff;},VisuMZ['CoreEngine'][_0x5d57ff(0x86c)]=SceneManager[_0x5d57ff(0x8f1)],SceneManager[_0x5d57ff(0x8f1)]=function(){const _0x353efe=_0x5d57ff;VisuMZ[_0x353efe(0x909)][_0x353efe(0x86c)][_0x353efe(0x3dd)](this);if(Utils[_0x353efe(0x2a6)]>=_0x353efe(0x7c2)){if(_0x353efe(0x892)===_0x353efe(0x6b8))return _0xca8ba2[_0x353efe(0x604)][_0x353efe(0x31d)][_0x353efe(0x3dd)](this);else{if(typeof nw===_0x353efe(0x831))nw[_0x353efe(0x4f4)][_0x353efe(0x8d9)]();}}},(_0x414ece=>{const _0x3cc582=_0x5d57ff,_0x3ac662=_0x414ece[_0x3cc582(0x7e4)];for(const _0x59d296 of dependencies){if('yeRYG'===_0x3cc582(0x1ee))return this[_0x3cc582(0x564)]()?this[_0x3cc582(0x39d)]():0x0;else{if(!Imported[_0x59d296]){if(_0x3cc582(0x911)==='iRxgB')this[_0x3cc582(0x469)]=[],this[_0x3cc582(0x34d)]=[],this['_cacheScaleX']=this['scale']['x'],this[_0x3cc582(0x2f3)]=this['scale']['y'];else{alert(_0x3cc582(0x9ad)['format'](_0x3ac662,_0x59d296)),SceneManager[_0x3cc582(0x8f1)]();break;}}}}const _0x2f6740=_0x414ece[_0x3cc582(0x6d0)];if(_0x2f6740['match'](/\[Version[ ](.*?)\]/i)){const _0x22cc12=Number(RegExp['$1']);_0x22cc12!==VisuMZ[label][_0x3cc582(0x28d)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x3cc582(0x20a)](_0x3ac662,_0x22cc12)),SceneManager[_0x3cc582(0x8f1)]());}if(_0x2f6740[_0x3cc582(0x749)](/\[Tier[ ](\d+)\]/i)){if(_0x3cc582(0x551)!=='dUDzJ'){const _0x3d8255=Number(RegExp['$1']);if(_0x3d8255<tier){if(_0x3cc582(0x7d6)!=='UpsDA'){if(!this[_0x3cc582(0x4c1)]);const _0x1d07f8=this[_0x3cc582(0x4c1)][_0x3cc582(0x7e4)]||'';_0x1d07f8['match'](/<RATE:[ ](\d+)>/i)&&(this[_0x3cc582(0x417)]=(_0x4bc581(_0x72deff['$1'])||0x1)[_0x3cc582(0x9dc)](0x1,0xa));}else alert(_0x3cc582(0x2b6)[_0x3cc582(0x20a)](_0x3ac662,_0x3d8255,tier)),SceneManager[_0x3cc582(0x8f1)]();}else'pDheg'===_0x3cc582(0x82f)?tier=Math[_0x3cc582(0x8ee)](_0x3d8255,tier):(this[_0x3cc582(0x216)](_0x350fe8[_0x3cc582(0x756)]()),this[_0x3cc582(0x19d)](_0x1faf66,_0x2395d1,_0x428e4a,_0xcf24fd,_0x3cc582(0x24a)),_0x210871-=this[_0x3cc582(0x55b)](_0x507630)+0x6);}else this[_0x3cc582(0x69e)]=_0x28da1b;}VisuMZ[_0x3cc582(0x9c1)](VisuMZ[label][_0x3cc582(0x3d3)],_0x414ece['parameters']);})(pluginData),((()=>{const _0x31b4d8=_0x5d57ff;if(VisuMZ['CoreEngine']['Settings'][_0x31b4d8(0x1d2)][_0x31b4d8(0x25d)]??!![]){if(_0x31b4d8(0x204)!==_0x31b4d8(0x204))_0x3614d1['CoreEngine'][_0x31b4d8(0x93e)][_0x31b4d8(0x3dd)](this);else for(const _0x414052 in $plugins){const _0x5b1a1a=$plugins[_0x414052];_0x5b1a1a[_0x31b4d8(0x7e4)][_0x31b4d8(0x749)](/(.*)\/(.*)/i)&&(_0x5b1a1a[_0x31b4d8(0x7e4)]=String(RegExp['$2']['trim']()));}}})()),PluginManager[_0x5d57ff(0x5b6)](pluginData['name'],_0x5d57ff(0x1fc),_0x4d0516=>{const _0x908923=_0x5d57ff;if(!SceneManager[_0x908923(0x90c)])return;if(!SceneManager[_0x908923(0x90c)][_0x908923(0x928)])return;VisuMZ[_0x908923(0x9c1)](_0x4d0516,_0x4d0516);const _0x5ed99d=Math['round'](_0x4d0516[_0x908923(0x461)]),_0x59083b=Math[_0x908923(0x746)](_0x4d0516['pointY']);$gameTemp[_0x908923(0x589)](_0x5ed99d,_0x59083b,_0x4d0516[_0x908923(0x279)],_0x4d0516[_0x908923(0x21d)],_0x4d0516['Mute']);}),PluginManager[_0x5d57ff(0x5b6)](pluginData[_0x5d57ff(0x7e4)],_0x5d57ff(0x747),_0x8e7c2d=>{const _0xb58a61=_0x5d57ff;if(!$gameTemp[_0xb58a61(0x899)]())return;const _0x567c32=Input['getLastUsedGamepadType']();navigator[_0xb58a61(0x713)]&&navigator['clipboard'][_0xb58a61(0x6dc)](_0x567c32);}),PluginManager[_0x5d57ff(0x5b6)](pluginData['name'],_0x5d57ff(0x495),_0x3ce051=>{const _0x1e18d3=_0x5d57ff;if(!$gameTemp[_0x1e18d3(0x899)]())return;if(!Utils['isNwjs']())return;SceneManager['_scene']['_active']=![],VisuMZ[_0x1e18d3(0x909)][_0x1e18d3(0x8b9)]();}),PluginManager['registerCommand'](pluginData['name'],'ExportAllTroopText',_0x2da94c=>{const _0x2f1a13=_0x5d57ff;if(!$gameTemp[_0x2f1a13(0x899)]())return;if(!Utils['isNwjs']())return;SceneManager[_0x2f1a13(0x90c)][_0x2f1a13(0x2f2)]=![],VisuMZ[_0x2f1a13(0x909)][_0x2f1a13(0x9c3)]();}),PluginManager[_0x5d57ff(0x5b6)](pluginData[_0x5d57ff(0x7e4)],_0x5d57ff(0x4e8),_0x2f21f8=>{const _0x58e74e=_0x5d57ff;if(!$gameTemp['isPlaytest']())return;if(!Utils[_0x58e74e(0x2c4)]())return;if(!$gameMap)return;if($gameMap[_0x58e74e(0x93b)]()<=0x0)return;VisuMZ['ConvertParams'](_0x2f21f8,_0x2f21f8);const _0x2eb0ac=_0x58e74e(0x1ba)[_0x58e74e(0x20a)]($gameMap['mapId']()[_0x58e74e(0x7aa)](0x3)),_0x4a4910=VisuMZ['CoreEngine'][_0x58e74e(0x5d2)]($gameMap[_0x58e74e(0x93b)]());VisuMZ[_0x58e74e(0x909)][_0x58e74e(0x542)](_0x4a4910,_0x2eb0ac,!![]);}),PluginManager['registerCommand'](pluginData['name'],'ExportCurTroopText',_0x28a58e=>{const _0x13ab22=_0x5d57ff;if(!$gameTemp[_0x13ab22(0x899)]())return;if(!Utils[_0x13ab22(0x2c4)]())return;if(!$gameParty['inBattle']())return;VisuMZ[_0x13ab22(0x9c1)](_0x28a58e,_0x28a58e);const _0x3a5fc3=_0x13ab22(0x2f1)[_0x13ab22(0x20a)]($gameTroop[_0x13ab22(0x386)][_0x13ab22(0x7aa)](0x4)),_0x3ae40b=VisuMZ[_0x13ab22(0x909)][_0x13ab22(0x9a0)]($gameTroop['_troopId']);VisuMZ[_0x13ab22(0x909)]['ExportString'](_0x3ae40b,_0x3a5fc3,!![]);}),VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x542)]=function(_0x17d5c0,_0xe20980,_0x2e61e8){const _0x334690=_0x5d57ff,_0x263167=require('fs');let _0x26fc4e=_0x334690(0x361)[_0x334690(0x20a)](_0xe20980||'0');_0x263167[_0x334690(0x7b0)](_0x26fc4e,_0x17d5c0,_0x476c78=>{const _0x4f81ba=_0x334690;if(_0x476c78){if(_0x4f81ba(0x5b9)===_0x4f81ba(0x4ca)){if(_0x52fe9a[_0x4f81ba(0x1dd)]!==_0x1f115b)return _0x3a8c75[_0x4f81ba(0x909)]['UpdatePictureCoordinates']();return _0x48f2c7[_0x4f81ba(0x909)]['Game_Interpreter_updateWaitMode'][_0x4f81ba(0x3dd)](this);}else throw err;}else _0x2e61e8&&(_0x4f81ba(0x89c)!==_0x4f81ba(0x6ad)?alert(_0x4f81ba(0x888)['format'](_0x26fc4e)):_0x32cd91=this[_0x4f81ba(0x739)]());});},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x8b9)]=function(){const _0x515277=_0x5d57ff,_0x420053=[];for(const _0xf9d60e of $dataMapInfos){if('xmUeM'!==_0x515277(0x191)){if(!_0xf9d60e)continue;_0x420053[_0x515277(0x1e2)](_0xf9d60e['id']);}else{const _0x54238b=_0x515277(0x8a9);this[_0x515277(0x370)]=this[_0x515277(0x370)]||{};if(this[_0x515277(0x370)][_0x54238b])return this[_0x515277(0x370)][_0x54238b];const _0x1581d9=_0x187588[_0x515277(0x909)]['Settings'][_0x515277(0x5f4)][_0x515277(0x7d9)];return this[_0x515277(0x6fe)](_0x54238b,_0x1581d9);}}const _0xc901d4=_0x420053[_0x515277(0x929)]*0x64+Math[_0x515277(0x4e9)](0x64);alert(_0x515277(0x90b)[_0x515277(0x20a)](_0xc901d4)),this[_0x515277(0x80f)]=[],this[_0x515277(0x228)]=$dataMap;for(const _0x933e2d of _0x420053){VisuMZ['CoreEngine'][_0x515277(0x7df)](_0x933e2d);}setTimeout(VisuMZ[_0x515277(0x909)]['exportAllMapStrings'][_0x515277(0x487)](this),_0xc901d4);},VisuMZ['CoreEngine'][_0x5d57ff(0x7df)]=function(_0x47e3ba){const _0x5dcc53=_0x5d57ff,_0xd82231=_0x5dcc53(0x505)[_0x5dcc53(0x20a)](_0x47e3ba[_0x5dcc53(0x7aa)](0x3)),_0x10f816=new XMLHttpRequest(),_0x10687c=_0x5dcc53(0x42d)+_0xd82231;_0x10f816[_0x5dcc53(0x2a5)]('GET',_0x10687c),_0x10f816[_0x5dcc53(0x31f)](_0x5dcc53(0x8e0)),_0x10f816[_0x5dcc53(0x625)]=()=>this[_0x5dcc53(0x401)](_0x10f816,_0x47e3ba,_0xd82231,_0x10687c),_0x10f816['onerror']=()=>DataManager[_0x5dcc53(0x3c1)](_0x5dcc53(0x31c),_0xd82231,_0x10687c),_0x10f816['send']();},VisuMZ[_0x5d57ff(0x909)]['storeMapData']=function(_0x5ea187,_0x3d1c28,_0x2f9f08,_0x2c2ea1){const _0x512dde=_0x5d57ff;$dataMap=JSON[_0x512dde(0x987)](_0x5ea187[_0x512dde(0x516)]),DataManager['onLoad']($dataMap),this['_storedMapText'][_0x3d1c28]=VisuMZ['CoreEngine'][_0x512dde(0x5d2)](_0x3d1c28),$dataMap=this[_0x512dde(0x228)];},VisuMZ['CoreEngine'][_0x5d57ff(0x75a)]=function(){const _0x4ba210=_0x5d57ff,_0x3070e2=_0x4ba210(0x7de);this[_0x4ba210(0x80f)][_0x4ba210(0x277)](undefined)[_0x4ba210(0x277)]('')[_0x4ba210(0x277)](null);const _0x3da7de=this['_storedMapText'][_0x4ba210(0x5b7)]('\x0a\x0a\x0a\x0a\x0a')['trim']();VisuMZ[_0x4ba210(0x909)]['ExportString'](_0x3da7de,_0x3070e2,!![]),SceneManager['_scene'][_0x4ba210(0x2f2)]=!![];},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x5d2)]=function(_0x6f0998){const _0x613a9=_0x5d57ff;if(!$dataMap)return'';let _0x4a1167='█'[_0x613a9(0x7e1)](0x46)+'\x0a\x0a',_0x18c879='═'[_0x613a9(0x7e1)](0x46)+'\x0a\x0a',_0x1fda3c='';this[_0x613a9(0x1a7)]=0x0;for(const _0x286c47 of $dataMap[_0x613a9(0x557)]){if(!_0x286c47)continue;let _0x543b0a=_0x286c47['id'],_0xff101a=_0x286c47[_0x613a9(0x7e4)],_0x4a6e47=_0x286c47['pages'];for(const _0x579a5b of _0x4a6e47){const _0x1f6ccb=_0x4a6e47['indexOf'](_0x579a5b)+0x1;let _0x724af4=_0x18c879+_0x613a9(0x9cd),_0x1b53ab=VisuMZ[_0x613a9(0x909)][_0x613a9(0x439)](_0x579a5b[_0x613a9(0x6c4)]);if(_0x1b53ab[_0x613a9(0x929)]>0x0){if(_0x1fda3c['length']>0x0)_0x1fda3c+=_0x18c879+_0x613a9(0x5b5);else{if(_0x613a9(0x421)!==_0x613a9(0x421)){this['updateAnchor']();const _0xeeb0a3=this[_0x613a9(0x65b)];_0x3f5527[_0x613a9(0x909)][_0x613a9(0x575)]['call'](this),_0xeeb0a3>0x0&&this[_0x613a9(0x65b)]<=0x0&&(this['_x']=this['_targetX'],this['_y']=this[_0x613a9(0x538)],this[_0x613a9(0x473)]=this[_0x613a9(0x3f0)],this[_0x613a9(0x224)]=this[_0x613a9(0x8b7)],this[_0x613a9(0x5ca)]=this[_0x613a9(0x6ff)],this[_0x613a9(0x4be)]&&(this[_0x613a9(0x4be)]['x']=this[_0x613a9(0x55c)]['x'],this[_0x613a9(0x4be)]['y']=this[_0x613a9(0x55c)]['y']));}else{const _0x527e2d=$dataMapInfos[_0x6f0998][_0x613a9(0x7e4)];_0x1fda3c+=_0x4a1167+_0x613a9(0x2e5)[_0x613a9(0x20a)](_0x6f0998,_0x527e2d||_0x613a9(0x9d6))+_0x4a1167;}}_0x1fda3c+=_0x724af4[_0x613a9(0x20a)](_0x543b0a,_0xff101a,_0x1f6ccb,_0x1b53ab);}}}return _0x1fda3c['length']>0x0&&(_0x1fda3c+=_0x18c879),_0x1fda3c;},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x9c3)]=function(){const _0x2d930c=_0x5d57ff,_0x182c4f=$dataTroops[_0x2d930c(0x929)]*0xa+Math[_0x2d930c(0x4e9)](0xa);alert('Export\x20Troop\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)'[_0x2d930c(0x20a)](_0x182c4f));const _0x3aabd9=[];for(const _0x4ef3d9 of $dataTroops){if(!_0x4ef3d9)continue;const _0x1ba74a=_0x4ef3d9['id'];_0x3aabd9[_0x1ba74a]=VisuMZ[_0x2d930c(0x909)]['ExtractStrFromTroop'](_0x1ba74a);}setTimeout(VisuMZ[_0x2d930c(0x909)][_0x2d930c(0x902)][_0x2d930c(0x487)](this,_0x3aabd9),_0x182c4f);},VisuMZ['CoreEngine']['ExtractStrFromTroop']=function(_0x4ed980){const _0x1091aa=_0x5d57ff;if(!$dataTroops[_0x4ed980])return'';let _0x892dbb='█'[_0x1091aa(0x7e1)](0x46)+'\x0a\x0a',_0x3ebedf='═'[_0x1091aa(0x7e1)](0x46)+'\x0a\x0a',_0x311f3c='';this[_0x1091aa(0x1a7)]=0x0;const _0xa425b5=$dataTroops[_0x4ed980];let _0x5461af=_0xa425b5[_0x1091aa(0x40c)];for(const _0x7154c5 of _0x5461af){const _0x3b6afd=_0x5461af['indexOf'](_0x7154c5)+0x1;let _0x22f4a6=_0x3ebedf+'《《《\x20Page\x20%1\x20》》》\x0a%2\x0a',_0x21c906=VisuMZ[_0x1091aa(0x909)]['ExtractStrFromList'](_0x7154c5[_0x1091aa(0x6c4)]);_0x21c906['length']>0x0&&(_0x311f3c[_0x1091aa(0x929)]>0x0?_0x1091aa(0x9bd)===_0x1091aa(0x9bd)?_0x311f3c+=_0x3ebedf+'\x0a\x0a\x0a\x0a\x0a':this['setActorHomeRepositioned'](_0x59f23f):_0x311f3c+=_0x892dbb+_0x1091aa(0x683)[_0x1091aa(0x20a)](_0x4ed980,_0xa425b5[_0x1091aa(0x7e4)]||_0x1091aa(0x9d6))+_0x892dbb,_0x311f3c+=_0x22f4a6[_0x1091aa(0x20a)](_0x3b6afd,_0x21c906));}return _0x311f3c[_0x1091aa(0x929)]>0x0&&(_0x311f3c+=_0x3ebedf),_0x311f3c;},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x902)]=function(_0x5bc31d){const _0x3dbc90=_0x5d57ff,_0x1ba168=_0x3dbc90(0x966);_0x5bc31d[_0x3dbc90(0x277)](undefined)[_0x3dbc90(0x277)]('')[_0x3dbc90(0x277)](null);const _0x59f55e=_0x5bc31d[_0x3dbc90(0x5b7)](_0x3dbc90(0x5b5))[_0x3dbc90(0x7a8)]();VisuMZ[_0x3dbc90(0x909)][_0x3dbc90(0x542)](_0x59f55e,_0x1ba168,!![]),SceneManager[_0x3dbc90(0x90c)]['_active']=!![];},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x439)]=function(_0x45c754){const _0x37a072=_0x5d57ff;let _0x1d6342='\x0a'+'─'[_0x37a072(0x7e1)](0x46)+'\x0a',_0x26adf4='\x0a'+'┄'[_0x37a072(0x7e1)](0x46)+'\x0a',_0x25e03d='';for(const _0x41b5b3 of _0x45c754){if(!_0x41b5b3)continue;if(_0x41b5b3[_0x37a072(0x66a)]===0x65)'mIhEU'!=='uXoSy'?(_0x25e03d+=_0x1d6342+'\x0a',_0x25e03d+=_0x37a072(0x392),_0x41b5b3[_0x37a072(0x848)][0x4]!==''&&_0x41b5b3[_0x37a072(0x848)][0x4]!==undefined&&(_0x37a072(0x5a1)===_0x37a072(0x5a1)?_0x25e03d+=_0x37a072(0x569)[_0x37a072(0x20a)](_0x41b5b3['parameters'][0x4]):_0x53876a[_0x37a072(0x909)][_0x37a072(0x628)]['call'](this))):this['_pressed']||this[_0x37a072(0x41b)]?this[_0x37a072(0x663)]=0xff:(this[_0x37a072(0x663)]+=this[_0x37a072(0x206)]?this['fadeSpeed']():-0x1*this[_0x37a072(0x240)](),this[_0x37a072(0x663)]=_0x1171b9['min'](0xc0,this['opacity']));else{if(_0x41b5b3[_0x37a072(0x66a)]===0x191)_0x25e03d+=_0x37a072(0x27e)['format'](_0x41b5b3['parameters'][0x0]);else{if(_0x41b5b3['code']===0x192)_0x25e03d+=_0x1d6342,_0x25e03d+='%1〘Choice\x20%2〙\x20%3%1'[_0x37a072(0x20a)](_0x26adf4,_0x41b5b3[_0x37a072(0x848)][0x0]+0x1,_0x41b5b3[_0x37a072(0x848)][0x1]);else{if(_0x41b5b3[_0x37a072(0x66a)]===0x193)_0x25e03d+=_0x1d6342,_0x25e03d+=_0x37a072(0x2d6)[_0x37a072(0x20a)](_0x26adf4);else{if(_0x41b5b3['code']===0x194)_0x25e03d+=_0x1d6342,_0x25e03d+=_0x37a072(0x3cb)[_0x37a072(0x20a)](_0x26adf4);else{if(_0x41b5b3[_0x37a072(0x66a)]===0x69)_0x25e03d+=_0x1d6342+'\x0a',_0x25e03d+='〘Scrolling\x20Text〙\x0a';else{if(_0x41b5b3['code']===0x6c){if('LSYGu'!==_0x37a072(0x395))return _0x4804a2[_0x37a072(0x909)][_0x37a072(0x701)][_0x4aaa18];else _0x25e03d+=_0x1d6342+'\x0a',_0x25e03d+=_0x37a072(0x364)[_0x37a072(0x20a)](_0x41b5b3[_0x37a072(0x848)][0x0]);}else{if(_0x41b5b3['code']===0x198)_0x25e03d+=_0x37a072(0x27e)[_0x37a072(0x20a)](_0x41b5b3['parameters'][0x0]);else{if(_0x41b5b3[_0x37a072(0x66a)]===0x75){const _0x6a761e=$dataCommonEvents[_0x41b5b3[_0x37a072(0x848)][0x0]];if(_0x6a761e&&this[_0x37a072(0x1a7)]<=0xa){if(_0x37a072(0x94e)===_0x37a072(0x94e)){this[_0x37a072(0x1a7)]++;let _0x9e07dd=VisuMZ[_0x37a072(0x909)][_0x37a072(0x439)](_0x6a761e[_0x37a072(0x6c4)]);if(_0x9e07dd[_0x37a072(0x929)]>0x0){if('vWYGl'===_0x37a072(0x8bf))_0x25e03d+=_0x1d6342,_0x25e03d+=_0x26adf4,_0x25e03d+=_0x37a072(0x181)[_0x37a072(0x20a)](_0x6a761e['id'],_0x6a761e[_0x37a072(0x7e4)]),_0x25e03d+=_0x26adf4,_0x25e03d+=_0x9e07dd,_0x25e03d+=_0x26adf4,_0x25e03d+=_0x37a072(0x251)[_0x37a072(0x20a)](_0x6a761e['id'],_0x6a761e[_0x37a072(0x7e4)]),_0x25e03d+=_0x26adf4;else{const _0x59c8c3=this[_0x37a072(0x494)](_0x2d1a04),_0x1a0a78=_0x176d5c[_0x37a072(0x909)][_0x37a072(0x3d3)][_0x37a072(0x185)][_0x37a072(0x52e)][_0x19cdc7],_0xa9ba87=_0xc35924[_0x37a072(0x261)](_0x1a0a78),_0x3c8054=this[_0x37a072(0x2ef)][_0x37a072(0x624)](_0x1a0a78,!![]);this[_0x37a072(0x3da)](_0x59c8c3['x'],_0x59c8c3['y'],0xa0,_0x1a0a78,![]),this[_0x37a072(0x850)](),this['drawText'](_0x3c8054,_0x59c8c3['x']+0xa0,_0x59c8c3['y'],0x3c,_0x37a072(0x24a));}}this[_0x37a072(0x1a7)]--;}else return![];}}}}}}}}}}}return _0x25e03d[_0x37a072(0x929)]>0x0&&(_0x25e03d+=_0x1d6342),_0x25e03d;},PluginManager[_0x5d57ff(0x5b6)](pluginData[_0x5d57ff(0x7e4)],_0x5d57ff(0x323),_0x3e54c4=>{const _0x55f824=_0x5d57ff;VisuMZ[_0x55f824(0x9c1)](_0x3e54c4,_0x3e54c4);const _0xb79d56=_0x3e54c4[_0x55f824(0x485)];VisuMZ[_0x55f824(0x275)](_0xb79d56);}),PluginManager[_0x5d57ff(0x5b6)](pluginData['name'],_0x5d57ff(0x3f9),_0x258bdb=>{const _0xad85fa=_0x5d57ff;VisuMZ[_0xad85fa(0x9c1)](_0x258bdb,_0x258bdb);const _0x4b1d0c=_0x258bdb[_0xad85fa(0x84e)]||0x0;$gameParty['gainGold'](_0x4b1d0c);}),PluginManager[_0x5d57ff(0x5b6)](pluginData['name'],_0x5d57ff(0x54a),_0x168f50=>{const _0x496cb2=_0x5d57ff;if(!SceneManager[_0x496cb2(0x9d8)]())return;VisuMZ[_0x496cb2(0x9c1)](_0x168f50,_0x168f50);const _0x237b68=_0x168f50[_0x496cb2(0x78f)];SceneManager[_0x496cb2(0x90c)][_0x496cb2(0x42a)](_0x237b68);}),PluginManager[_0x5d57ff(0x5b6)](pluginData['name'],'PictureCoordinatesMode',_0x4de9a3=>{const _0x4b4157=_0x5d57ff;if(!$gameTemp[_0x4b4157(0x899)]())return;if(!Utils[_0x4b4157(0x2c4)]())return;VisuMZ[_0x4b4157(0x9c1)](_0x4de9a3,_0x4de9a3);const _0x17301d=_0x4de9a3[_0x4b4157(0x222)]||0x1;$gameTemp[_0x4b4157(0x1dd)]=_0x17301d;}),PluginManager[_0x5d57ff(0x5b6)](pluginData['name'],_0x5d57ff(0x529),_0x493366=>{const _0x43c61f=_0x5d57ff;VisuMZ['ConvertParams'](_0x493366,_0x493366);const _0x466025=_0x493366[_0x43c61f(0x88d)]||0x1,_0x13b54d=_0x493366['easingType']||_0x43c61f(0x868),_0x34ac63=$gameScreen[_0x43c61f(0x3a0)](_0x466025);_0x34ac63&&_0x34ac63['setEasingType'](_0x13b54d);}),PluginManager[_0x5d57ff(0x5b6)](pluginData['name'],_0x5d57ff(0x8b6),_0x47e7ed=>{const _0x512113=_0x5d57ff;for(let _0x48c170=0x1;_0x48c170<=0x64;_0x48c170++){if('JjQaH'!=='JjQaH'){const _0x1a1a87=this['_clientArea'][_0x512113(0x6c1)][_0x512113(0x6b9)](new _0x379473(0x0,0x0)),_0x4935a1=this[_0x512113(0x59c)][_0x512113(0x19e)];_0x4935a1['x']=_0x1a1a87['x']+this['origin']['x'],_0x4935a1['y']=_0x1a1a87['y']+this[_0x512113(0x3b6)]['y'],_0x4935a1['width']=_0x1c4ffb['ceil'](this[_0x512113(0x5df)]*this[_0x512113(0x672)]['x']),_0x4935a1['height']=_0x12cc3f['ceil'](this[_0x512113(0x92e)]*this[_0x512113(0x672)]['y']);}else $gameScreen[_0x512113(0x29d)](_0x48c170);}}),PluginManager[_0x5d57ff(0x5b6)](pluginData['name'],'PictureEraseRange',_0x40c05e=>{const _0x4eacd5=_0x5d57ff;VisuMZ[_0x4eacd5(0x9c1)](_0x40c05e,_0x40c05e);const _0x153be8=Math[_0x4eacd5(0x44a)](_0x40c05e[_0x4eacd5(0x9cb)],_0x40c05e['EndingID']),_0x45450a=Math[_0x4eacd5(0x8ee)](_0x40c05e[_0x4eacd5(0x9cb)],_0x40c05e['EndingID']);for(let _0x412f2f=_0x153be8;_0x412f2f<=_0x45450a;_0x412f2f++){'eliCV'!=='eliCV'?(this['_pictureContainer'][_0x4eacd5(0x672)]['x']=0x1/this['scale']['x'],this[_0x4eacd5(0x559)]['x']=-(this['x']/this[_0x4eacd5(0x672)]['x'])):$gameScreen[_0x4eacd5(0x29d)](_0x412f2f);}}),PluginManager[_0x5d57ff(0x5b6)](pluginData[_0x5d57ff(0x7e4)],'PictureShowIcon',_0x3e6697=>{const _0x149fe6=_0x5d57ff;VisuMZ[_0x149fe6(0x9c1)](_0x3e6697,_0x3e6697);const _0x1bff39=Math['round'](_0x3e6697[_0x149fe6(0x222)])[_0x149fe6(0x9dc)](0x1,0x64),_0x32d224=_0x3e6697[_0x149fe6(0x3d3)],_0x5ef035=_0x32d224[_0x149fe6(0x6f9)][_0x149fe6(0x9dc)](0x0,0x1),_0x26c6b2=Math[_0x149fe6(0x746)](_0x32d224[_0x149fe6(0x56f)]||0x0),_0x7f0ff3=Math['round'](_0x32d224[_0x149fe6(0x7db)]||0x0),_0x4de74a=Math[_0x149fe6(0x746)](_0x32d224[_0x149fe6(0x3d9)]||0x0),_0x42cb48=Math[_0x149fe6(0x746)](_0x32d224['ScaleY']||0x0),_0xb25d4b=Math[_0x149fe6(0x746)](_0x32d224[_0x149fe6(0x800)])[_0x149fe6(0x9dc)](0x0,0xff),_0x55408d=_0x32d224[_0x149fe6(0x8dd)],_0x22f4e8=_0x149fe6(0x903),_0x1c9374=_0x3e6697[_0x149fe6(0x2d5)]?'Smooth':_0x149fe6(0x81a),_0x1fb1e5=_0x22f4e8[_0x149fe6(0x20a)](_0x3e6697[_0x149fe6(0x823)],_0x1c9374);$gameScreen[_0x149fe6(0x201)](_0x1bff39,_0x1fb1e5,_0x5ef035,_0x26c6b2,_0x7f0ff3,_0x4de74a,_0x42cb48,_0xb25d4b,_0x55408d);}),PluginManager['registerCommand'](pluginData['name'],'ScreenShake',_0x121cb2=>{const _0x56ef4f=_0x5d57ff;VisuMZ[_0x56ef4f(0x9c1)](_0x121cb2,_0x121cb2);const _0xd5610f=_0x121cb2['Type']||_0x56ef4f(0x4ab),_0x378673=_0x121cb2[_0x56ef4f(0x9a9)]['clamp'](0x1,0x9),_0x50ee42=_0x121cb2[_0x56ef4f(0x4f9)][_0x56ef4f(0x9dc)](0x1,0x9),_0x4e79e3=_0x121cb2[_0x56ef4f(0x9d5)]||0x1,_0x532fa6=_0x121cb2[_0x56ef4f(0x32b)];$gameScreen[_0x56ef4f(0x283)](_0xd5610f),$gameScreen[_0x56ef4f(0x9ec)](_0x378673,_0x50ee42,_0x4e79e3);if(_0x532fa6){if(_0x56ef4f(0x5c4)!==_0x56ef4f(0x5c4))this[_0x56ef4f(0x4a6)]='';else{const _0x5ba20b=$gameTemp[_0x56ef4f(0x5d3)]();if(_0x5ba20b)_0x5ba20b[_0x56ef4f(0x32d)](_0x4e79e3);}}}),PluginManager['registerCommand'](pluginData[_0x5d57ff(0x7e4)],_0x5d57ff(0x4c7),_0x139b15=>{const _0xe97108=_0x5d57ff;if($gameParty['inBattle']())return;VisuMZ[_0xe97108(0x9c1)](_0x139b15,_0x139b15);const _0x120eab=_0x139b15['IDs'],_0x514775=(_0x139b15[_0xe97108(0x511)]||0x0)/0x64;for(const _0x17ae23 of _0x120eab){const _0x3faa95=Math['random']()<=_0x514775;$gameSwitches['setValue'](_0x17ae23,_0x3faa95);}}),PluginManager[_0x5d57ff(0x5b6)](pluginData['name'],_0x5d57ff(0x212),_0x502f62=>{const _0x44c888=_0x5d57ff;if($gameParty[_0x44c888(0x548)]())return;VisuMZ[_0x44c888(0x9c1)](_0x502f62,_0x502f62);const _0xd9bf53=Math[_0x44c888(0x44a)](_0x502f62[_0x44c888(0x9cb)],_0x502f62[_0x44c888(0x838)]),_0x6275c5=Math[_0x44c888(0x8ee)](_0x502f62[_0x44c888(0x9cb)],_0x502f62[_0x44c888(0x838)]),_0x1250d9=(_0x502f62[_0x44c888(0x511)]||0x0)/0x64;for(let _0x49ce91=_0xd9bf53;_0x49ce91<=_0x6275c5;_0x49ce91++){const _0x234147=Math[_0x44c888(0x4ab)]()<=_0x1250d9;$gameSwitches[_0x44c888(0x982)](_0x49ce91,_0x234147);}}),PluginManager[_0x5d57ff(0x5b6)](pluginData['name'],'SwitchToggleOne',_0x488804=>{const _0x1dce27=_0x5d57ff;if($gameParty[_0x1dce27(0x548)]())return;VisuMZ[_0x1dce27(0x9c1)](_0x488804,_0x488804);const _0x2eb920=_0x488804['IDs'];for(const _0x2de426 of _0x2eb920){const _0x394781=$gameSwitches[_0x1dce27(0x84e)](_0x2de426);$gameSwitches[_0x1dce27(0x982)](_0x2de426,!_0x394781);}}),PluginManager[_0x5d57ff(0x5b6)](pluginData[_0x5d57ff(0x7e4)],_0x5d57ff(0x841),_0x23baab=>{const _0x97cd34=_0x5d57ff;if($gameParty[_0x97cd34(0x548)]())return;VisuMZ[_0x97cd34(0x9c1)](_0x23baab,_0x23baab);const _0x4580ec=Math['min'](_0x23baab[_0x97cd34(0x9cb)],_0x23baab[_0x97cd34(0x838)]),_0x5b6d37=Math[_0x97cd34(0x8ee)](_0x23baab[_0x97cd34(0x9cb)],_0x23baab[_0x97cd34(0x838)]);for(let _0x9b2a2a=_0x4580ec;_0x9b2a2a<=_0x5b6d37;_0x9b2a2a++){if(_0x97cd34(0x6ac)!=='tkhtK')this['drawText'](this[_0x97cd34(0x84e)](),_0x5bfa18['x'],_0x4c3636['y'],_0x7a420f[_0x97cd34(0x961)],'right');else{const _0x55c4d6=$gameSwitches[_0x97cd34(0x84e)](_0x9b2a2a);$gameSwitches[_0x97cd34(0x982)](_0x9b2a2a,!_0x55c4d6);}}}),PluginManager[_0x5d57ff(0x5b6)](pluginData[_0x5d57ff(0x7e4)],_0x5d57ff(0x448),_0x11356e=>{const _0x175fc0=_0x5d57ff;VisuMZ[_0x175fc0(0x9c1)](_0x11356e,_0x11356e);const _0x4728a2=_0x11356e['option']||0x1;$gameSystem['setMainFontSize'](_0x4728a2);}),PluginManager[_0x5d57ff(0x5b6)](pluginData[_0x5d57ff(0x7e4)],_0x5d57ff(0x95a),_0x1af228=>{const _0x5352f2=_0x5d57ff;if($gameParty[_0x5352f2(0x548)]())return;VisuMZ['ConvertParams'](_0x1af228,_0x1af228);const _0x1bddfb=_0x1af228[_0x5352f2(0x405)];if(_0x1bddfb['match'](/Front/i))$gameSystem[_0x5352f2(0x8a2)](![]);else _0x1bddfb[_0x5352f2(0x749)](/Side/i)?$gameSystem['setSideView'](!![]):'GtNqh'===_0x5352f2(0x4f2)?this['_numberWindow']['setBackgroundType'](_0x494c47[_0x5352f2(0x604)][_0x5352f2(0x49b)]):$gameSystem['setSideView'](!$gameSystem[_0x5352f2(0x9eb)]());}),PluginManager[_0x5d57ff(0x5b6)](pluginData['name'],_0x5d57ff(0x95c),_0x72cbcf=>{const _0x137e57=_0x5d57ff;if($gameParty[_0x137e57(0x548)]())return;VisuMZ['ConvertParams'](_0x72cbcf,_0x72cbcf);const _0x3ba926=[_0x137e57(0x8b5),_0x137e57(0x882),'me','se'];for(const _0x1a2a5b of _0x3ba926){const _0x95600d=_0x72cbcf[_0x1a2a5b],_0x84ffda=_0x137e57(0x924)[_0x137e57(0x20a)](_0x1a2a5b);for(const _0x3ba479 of _0x95600d){AudioManager['createBuffer'](_0x84ffda,_0x3ba479);}}}),PluginManager[_0x5d57ff(0x5b6)](pluginData[_0x5d57ff(0x7e4)],_0x5d57ff(0x393),_0x432173=>{const _0x5ee50e=_0x5d57ff;if($gameParty[_0x5ee50e(0x548)]())return;VisuMZ[_0x5ee50e(0x9c1)](_0x432173,_0x432173);const _0x3aa616=[_0x5ee50e(0x93c),_0x5ee50e(0x862),'battlebacks2',_0x5ee50e(0x5d7),'enemies','faces',_0x5ee50e(0x2a8),_0x5ee50e(0x2f9),_0x5ee50e(0x7cf),_0x5ee50e(0x74b),'system',_0x5ee50e(0x24f),_0x5ee50e(0x458),_0x5ee50e(0x6c2)];for(const _0x3cd4e4 of _0x3aa616){if(_0x5ee50e(0x7d4)!==_0x5ee50e(0x56b)){const _0x5c0bb7=_0x432173[_0x3cd4e4],_0x2dad64='img/%1/'[_0x5ee50e(0x20a)](_0x3cd4e4);for(const _0x2a5b84 of _0x5c0bb7){_0x5ee50e(0x8d8)===_0x5ee50e(0x6cb)?_0xeb5b5[_0x5ee50e(0x3bd)]=!_0x2f19bc[_0x5ee50e(0x3bd)]:ImageManager['loadBitmap'](_0x2dad64,_0x2a5b84);}}else this['_forcedTroopView']='FV';}}),PluginManager[_0x5d57ff(0x5b6)](pluginData[_0x5d57ff(0x7e4)],_0x5d57ff(0x430),_0x363a50=>{const _0x3e10f0=_0x5d57ff;if($gameParty[_0x3e10f0(0x548)]())return;VisuMZ[_0x3e10f0(0x9c1)](_0x363a50,_0x363a50);const _0x2c863e=_0x363a50['option'][_0x3e10f0(0x658)]()['trim'](),_0x19b17c=VisuMZ[_0x3e10f0(0x909)][_0x3e10f0(0x6cc)](_0x2c863e);$gameSystem[_0x3e10f0(0x366)](_0x19b17c);}),VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x6cc)]=function(_0x319dfb){const _0x182649=_0x5d57ff;_0x319dfb=_0x319dfb||_0x182649(0x944),_0x319dfb=String(_0x319dfb)['toUpperCase']()[_0x182649(0x7a8)]();switch(_0x319dfb){case'DTB':return 0x0;case _0x182649(0x9cc):Imported[_0x182649(0x595)]&&(ConfigManager[_0x182649(0x340)]=!![]);return 0x1;case _0x182649(0x239):if(Imported['VisuMZ_1_OptionsCore']){if(_0x182649(0x413)!==_0x182649(0x9bc))ConfigManager[_0x182649(0x340)]=![];else{this[_0x182649(0x425)]=_0x118972[_0x182649(0x909)]['Settings'][_0x182649(0x1d2)][_0x182649(0x1ef)]||![];if(_0x34d478&&_0x45ddec[_0x182649(0x957)]){if(_0x413570[_0x182649(0x957)][_0x182649(0x749)](/<SHOW TILE SHADOWS>/i))this[_0x182649(0x425)]=![];if(_0x162efa['note'][_0x182649(0x749)](/<HIDE TILE SHADOWS>/i))this[_0x182649(0x425)]=!![];}}}return 0x2;case _0x182649(0x590):if(Imported['VisuMZ_2_BattleSystemCTB'])return'CTB';break;case _0x182649(0x1d8):if(Imported[_0x182649(0x65d)])return _0x182649(0x1d8);break;case'BTB':if(Imported[_0x182649(0x24b)])return _0x182649(0x949);break;case'FTB':if(Imported['VisuMZ_2_BattleSystemFTB'])return _0x182649(0x46c);break;case _0x182649(0x745):if(Imported[_0x182649(0x96e)]){if(_0x182649(0x5eb)!==_0x182649(0x5eb))_0x314a2f[_0x182649(0x909)][_0x182649(0x915)][_0x182649(0x3dd)](this);else return _0x182649(0x745);}break;case _0x182649(0x84a):if(Imported[_0x182649(0x9e8)])return _0x182649(0x84a);break;case _0x182649(0x407):if(Imported['VisuMZ_2_BattleSystemPTB'])return'PTB';break;}return $dataSystem['battleSystem'];},PluginManager['registerCommand'](pluginData['name'],'SystemSetWindowPadding',_0x1082a1=>{const _0x5b03de=_0x5d57ff;VisuMZ[_0x5b03de(0x9c1)](_0x1082a1,_0x1082a1);const _0x27474e=_0x1082a1[_0x5b03de(0x405)]||0x1;$gameSystem[_0x5b03de(0x92c)](_0x27474e);}),PluginManager[_0x5d57ff(0x5b6)](pluginData[_0x5d57ff(0x7e4)],_0x5d57ff(0x710),_0x45dece=>{const _0x443b57=_0x5d57ff;VisuMZ[_0x443b57(0x9c1)](_0x45dece,_0x45dece);const _0x56df1d=_0x45dece['id']||0x1,_0x35aee8=_0x45dece['operation'],_0x544831=_0x45dece[_0x443b57(0x5b0)]||0x0;let _0x288419=$gameVariables[_0x443b57(0x84e)](_0x56df1d)||0x0;switch(_0x35aee8){case'=':_0x288419=_0x544831;break;case'+':_0x288419+=_0x544831;break;case'-':_0x288419-=_0x544831;break;case'*':_0x288419*=_0x544831;break;case'/':_0x288419/=_0x544831;break;case'%':_0x288419%=_0x544831;break;}_0x288419=_0x288419||0x0,$gameVariables['setValue'](_0x56df1d,_0x288419);}),PluginManager[_0x5d57ff(0x5b6)](pluginData[_0x5d57ff(0x7e4)],_0x5d57ff(0x8c6),_0x2cc5ee=>{const _0x325d9a=_0x5d57ff;VisuMZ[_0x325d9a(0x9c1)](_0x2cc5ee,_0x2cc5ee);const _0x1d62de=_0x2cc5ee['id']()||0x1,_0x5cf66=_0x2cc5ee[_0x325d9a(0x34f)],_0x35dc41=_0x2cc5ee[_0x325d9a(0x5b0)]()||0x0;let _0x20b8d4=$gameVariables[_0x325d9a(0x84e)](_0x1d62de)||0x0;switch(_0x5cf66){case'=':_0x20b8d4=_0x35dc41;break;case'+':_0x20b8d4+=_0x35dc41;break;case'-':_0x20b8d4-=_0x35dc41;break;case'*':_0x20b8d4*=_0x35dc41;break;case'/':_0x20b8d4/=_0x35dc41;break;case'%':_0x20b8d4%=_0x35dc41;break;}_0x20b8d4=_0x20b8d4||0x0,$gameVariables['setValue'](_0x1d62de,_0x20b8d4);}),VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x341)]=Scene_Boot[_0x5d57ff(0x5cf)][_0x5d57ff(0x62a)],Scene_Boot[_0x5d57ff(0x5cf)][_0x5d57ff(0x62a)]=function(){const _0x23e009=_0x5d57ff;VisuMZ[_0x23e009(0x909)][_0x23e009(0x341)]['call'](this),this[_0x23e009(0x9b6)](),this[_0x23e009(0x53f)](),this['process_VisuMZ_CoreEngine_Settings'](),this['process_VisuMZ_CoreEngine_Functions'](),this[_0x23e009(0x69b)](),this['process_VisuMZ_CoreEngine_ControllerButtons'](),VisuMZ[_0x23e009(0x6a6)]();},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x640)]={},Scene_Boot[_0x5d57ff(0x5cf)][_0x5d57ff(0x9b6)]=function(){const _0x1c5fae=_0x5d57ff,_0x263c7b=[_0x1c5fae(0x9ae),_0x1c5fae(0x94c),_0x1c5fae(0x8fe),_0x1c5fae(0x47b),'MAT',_0x1c5fae(0x75f),_0x1c5fae(0x690),_0x1c5fae(0x78a)],_0x102de0=['HIT','EVA','CRI',_0x1c5fae(0x887),'MEV','MRF',_0x1c5fae(0x8e2),_0x1c5fae(0x1d7),_0x1c5fae(0x4bc),_0x1c5fae(0x30b)],_0x5846b8=[_0x1c5fae(0x815),_0x1c5fae(0x76e),_0x1c5fae(0x876),_0x1c5fae(0x5a8),_0x1c5fae(0x967),'TCR',_0x1c5fae(0x68e),'MDR','FDR','EXR'],_0x563aa6=[_0x263c7b,_0x102de0,_0x5846b8],_0x5619e4=[_0x1c5fae(0x8a8),_0x1c5fae(0x68c),_0x1c5fae(0x64b),_0x1c5fae(0x900),_0x1c5fae(0x630),_0x1c5fae(0x68a),_0x1c5fae(0x874),'Flat','Flat1','Flat2'];for(const _0x7d5a48 of _0x563aa6){if(_0x1c5fae(0x1b8)===_0x1c5fae(0x1b8)){let _0x42d617='';if(_0x7d5a48===_0x263c7b)_0x42d617=_0x1c5fae(0x261);if(_0x7d5a48===_0x102de0)_0x42d617=_0x1c5fae(0x3ef);if(_0x7d5a48===_0x5846b8)_0x42d617='sparam';for(const _0x5acf1c of _0x5619e4){if(_0x1c5fae(0x3af)===_0x1c5fae(0x84f)){const _0x3e7291=_0x37f7f6[_0x1c5fae(0x723)]();if(_0x3e7291)for(const _0x218249 of _0x3e7291){if(_0x218249&&_0x218249[_0x1c5fae(0x816)]){if(this[_0x1c5fae(0x62c)](_0x218249))return!![];if(this[_0x1c5fae(0x6ea)](_0x218249))return!![];}}}else{let _0xafe5f2=_0x1c5fae(0x8c8)['format'](_0x42d617,_0x5acf1c);VisuMZ[_0x1c5fae(0x909)][_0x1c5fae(0x640)][_0xafe5f2]=[],VisuMZ[_0x1c5fae(0x909)]['RegExp'][_0xafe5f2+'JS']=[];let _0x45d4c3=_0x1c5fae(0x666);if(['Plus','Flat'][_0x1c5fae(0x861)](_0x5acf1c))_0x45d4c3+=_0x1c5fae(0x8ab);else{if([_0x1c5fae(0x68c),_0x1c5fae(0x768)]['includes'](_0x5acf1c))_0x1c5fae(0x7a7)!==_0x1c5fae(0x6de)?_0x45d4c3+='([\x5c+\x5c-]\x5cd+)([%％])>':(_0x13483b['x']=_0x5eacf2[_0x1c5fae(0x746)](_0x44d227['x']),_0x4f7a03['y']=_0x1f1694[_0x1c5fae(0x746)](_0xea88f2['y']),_0xeaddfe[_0x1c5fae(0x961)]=_0x4a9414[_0x1c5fae(0x746)](_0x39440e[_0x1c5fae(0x961)]),_0x1940fd[_0x1c5fae(0x317)]=_0x1bc160[_0x1c5fae(0x746)](_0x314444[_0x1c5fae(0x317)]),this[_0x1c5fae(0x2bb)](),_0x3ebd33[_0x1c5fae(0x909)]['Window_Base_initialize'][_0x1c5fae(0x3dd)](this,_0x47a1a6),this[_0x1c5fae(0x908)]());else{if([_0x1c5fae(0x64b),'Flat2']['includes'](_0x5acf1c))_0x1c5fae(0x612)!=='ZiVdM'?_0x45d4c3+=_0x1c5fae(0x7cc):this[_0x1c5fae(0x80a)](_0xfcba2b,_0x1060a7,_0x116eb4,_0x408d90,_0x33e0df);else{if(_0x5acf1c==='Max'){if(_0x1c5fae(0x314)===_0x1c5fae(0x3f7)){const _0xfeff34=_0x502182[_0x1c5fae(0x427)]()[_0x1c5fae(0x7a8)](),_0x35d92f=_0x31aedd[_0x1c5fae(0x909)][_0x1c5fae(0x3ec)][_0xfeff34];if(!_0x35d92f)return this[_0x1c5fae(0x8e3)](_0x51c59d,_0x35f6fa);return _0x35d92f[_0x2a12d0]||this[_0x1c5fae(0x33e)](_0xcd3db5,_0x1b4e96);}else _0x45d4c3+='(\x5cd+)>';}else{if(_0x5acf1c===_0x1c5fae(0x68a))_0x45d4c3+=_0x1c5fae(0x39b);else _0x5acf1c===_0x1c5fae(0x874)&&(_0x1c5fae(0x793)===_0x1c5fae(0x793)?_0x45d4c3+=_0x1c5fae(0x3b3):this[_0x1c5fae(0x9ce)]+=_0x391ad1);}}}}for(const _0x335fea of _0x7d5a48){if(_0x1c5fae(0x897)!==_0x1c5fae(0x897)){if(_0x18bd3c)throw _0x4448bc;else _0x38a063&&_0x1947a9('Saved\x20file\x20as\x20%1\x20in\x20project\x20folder.'[_0x1c5fae(0x20a)](_0x80c738));}else{let _0x235f3a=_0x5acf1c[_0x1c5fae(0x470)](/[\d+]/g,'')[_0x1c5fae(0x658)]();const _0x50c932=_0x45d4c3['format'](_0x335fea,_0x235f3a);VisuMZ[_0x1c5fae(0x909)][_0x1c5fae(0x640)][_0xafe5f2][_0x1c5fae(0x1e2)](new RegExp(_0x50c932,'i'));const _0x25a4a7='<JS\x20%1\x20%2:[\x20](.*)>'[_0x1c5fae(0x20a)](_0x335fea,_0x235f3a);VisuMZ[_0x1c5fae(0x909)][_0x1c5fae(0x640)][_0xafe5f2+'JS'][_0x1c5fae(0x1e2)](new RegExp(_0x25a4a7,'i'));}}}}}else _0x46203f[_0x1c5fae(0x909)][_0x1c5fae(0x1e7)][_0x1c5fae(0x3dd)](this,_0x5fd470,_0x2b88ef,_0x43af36,_0x347b00);}},Scene_Boot[_0x5d57ff(0x5cf)][_0x5d57ff(0x53f)]=function(){const _0x4e2181=_0x5d57ff;if(VisuMZ[_0x4e2181(0x6a6)])return;},Scene_Boot[_0x5d57ff(0x5cf)][_0x5d57ff(0x2aa)]=function(){const _0x28ccfe=_0x5d57ff,_0x232779=VisuMZ[_0x28ccfe(0x909)][_0x28ccfe(0x3d3)];_0x232779[_0x28ccfe(0x1d2)][_0x28ccfe(0x8fd)]&&VisuMZ[_0x28ccfe(0x37e)](!![]);if(_0x232779[_0x28ccfe(0x1d2)]['ModernControls']){if(_0x28ccfe(0x6df)==='cnHmQ')Input[_0x28ccfe(0x8e6)][0x23]=_0x28ccfe(0x352),Input[_0x28ccfe(0x8e6)][0x24]=_0x28ccfe(0x4b0);else{if(!this[_0x28ccfe(0x1ec)]())return;const _0xaa90cc=this[_0x28ccfe(0x7bc)]();this[_0x28ccfe(0x35d)]=new _0x14a7aa(_0xaa90cc),this[_0x28ccfe(0x837)](this[_0x28ccfe(0x35d)]);}}if(_0x232779[_0x28ccfe(0x1d9)]){if(_0x28ccfe(0x835)!==_0x28ccfe(0x546)){const _0x3c4284=_0x232779[_0x28ccfe(0x1d9)];_0x3c4284[_0x28ccfe(0x18f)]=_0x3c4284['KeySHIFT']||_0x28ccfe(0x2ed),_0x3c4284['KeyTAB']=_0x3c4284[_0x28ccfe(0x367)]||_0x28ccfe(0x3cf);}else return _0x551e38[_0x28ccfe(0x909)]['UpdatePictureCoordinates']();}_0x232779['KeyboardInput'][_0x28ccfe(0x90e)]&&(_0x28ccfe(0x32e)===_0x28ccfe(0x32e)?(Input[_0x28ccfe(0x8e6)][0x57]='up',Input[_0x28ccfe(0x8e6)][0x41]=_0x28ccfe(0x60d),Input[_0x28ccfe(0x8e6)][0x53]=_0x28ccfe(0x6d2),Input[_0x28ccfe(0x8e6)][0x44]=_0x28ccfe(0x24a),Input[_0x28ccfe(0x8e6)][0x45]='pagedown'):_0x37c73a=_0x31ae22[_0x28ccfe(0x718)](_0x52072c)),_0x232779[_0x28ccfe(0x2e0)][_0x28ccfe(0x73b)]&&(Input[_0x28ccfe(0x8e6)][0x52]=_0x28ccfe(0x1c2)),_0x232779['Param'][_0x28ccfe(0x52e)]=_0x232779[_0x28ccfe(0x185)][_0x28ccfe(0x52e)]['map'](_0x572e8a=>_0x572e8a[_0x28ccfe(0x658)]()[_0x28ccfe(0x7a8)]()),_0x232779[_0x28ccfe(0x185)]['ExtDisplayedParams']=_0x232779[_0x28ccfe(0x185)]['ExtDisplayedParams']['map'](_0x173103=>_0x173103[_0x28ccfe(0x658)]()['trim']());},Scene_Boot[_0x5d57ff(0x5cf)]['process_VisuMZ_CoreEngine_Functions']=function(){const _0x54bd2c=_0x5d57ff;this[_0x54bd2c(0x4a7)]();},Scene_Boot[_0x5d57ff(0x5cf)]['process_VisuMZ_CoreEngine_jsQuickFunctions']=function(){const _0x2355ae=_0x5d57ff,_0x5b8dd6=VisuMZ[_0x2355ae(0x909)][_0x2355ae(0x3d3)][_0x2355ae(0x5af)];for(const _0x5b3642 of _0x5b8dd6){const _0x4436a1=_0x5b3642[_0x2355ae(0x940)][_0x2355ae(0x470)](/[ ]/g,''),_0x2a7d1f=_0x5b3642[_0x2355ae(0x8e9)];VisuMZ[_0x2355ae(0x909)][_0x2355ae(0x754)](_0x4436a1,_0x2a7d1f);}},VisuMZ[_0x5d57ff(0x909)]['createJsQuickFunction']=function(_0x478309,_0x1020ab){const _0x581292=_0x5d57ff;if(!!window[_0x478309]){if(_0x581292(0x99f)!=='NyJLG'){if($gameTemp['isPlaytest']())console['log'](_0x581292(0x41d)[_0x581292(0x20a)](_0x478309));}else this[_0x581292(0x2f5)](_0x480328);}const _0xb36710='\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%2\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27JS\x20Quick\x20Function\x20\x22%1\x22\x20Error!\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20'[_0x581292(0x20a)](_0x478309,_0x1020ab);window[_0x478309]=new Function(_0xb36710);},Scene_Boot[_0x5d57ff(0x5cf)]['process_VisuMZ_CoreEngine_CustomParameters']=function(){const _0x22bf82=_0x5d57ff,_0xc9f5fa=VisuMZ['CoreEngine'][_0x22bf82(0x3d3)][_0x22bf82(0x72b)];if(!_0xc9f5fa)return;for(const _0x840166 of _0xc9f5fa){if(!_0x840166)continue;VisuMZ[_0x22bf82(0x909)][_0x22bf82(0x6e5)](_0x840166);}},VisuMZ['CoreEngine'][_0x5d57ff(0x701)]={},VisuMZ[_0x5d57ff(0x909)]['CustomParamIcons']={},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x637)]={},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x35e)]={},VisuMZ[_0x5d57ff(0x909)]['createCustomParameter']=function(_0x43af73){const _0x2ff445=_0x5d57ff,_0x3fdab5=_0x43af73[_0x2ff445(0x5d0)],_0x252a75=_0x43af73[_0x2ff445(0x73a)],_0x837035=_0x43af73[_0x2ff445(0x8d2)],_0x3457b8=_0x43af73[_0x2ff445(0x2c1)],_0x49399e=new Function(_0x43af73[_0x2ff445(0x50e)]);VisuMZ['CoreEngine'][_0x2ff445(0x701)][_0x3fdab5[_0x2ff445(0x658)]()[_0x2ff445(0x7a8)]()]=_0x252a75,VisuMZ[_0x2ff445(0x909)]['CustomParamIcons'][_0x3fdab5[_0x2ff445(0x658)]()['trim']()]=_0x837035,VisuMZ['CoreEngine']['CustomParamType'][_0x3fdab5['toUpperCase']()['trim']()]=_0x3457b8,VisuMZ[_0x2ff445(0x909)][_0x2ff445(0x35e)][_0x3fdab5[_0x2ff445(0x658)]()['trim']()]=_0x3fdab5,Object[_0x2ff445(0x384)](Game_BattlerBase[_0x2ff445(0x5cf)],_0x3fdab5,{'get'(){const _0xaa5185=_0x2ff445,_0xabf95=_0x49399e[_0xaa5185(0x3dd)](this);return _0x3457b8===_0xaa5185(0x71b)?Math['round'](_0xabf95):_0xabf95;}});},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3ec)]={},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x34a)]={},Scene_Boot[_0x5d57ff(0x5cf)][_0x5d57ff(0x208)]=function(){const _0xb6f540=_0x5d57ff,_0x49b278=VisuMZ[_0xb6f540(0x909)][_0xb6f540(0x3d3)][_0xb6f540(0x3ec)];for(const _0x495cb7 of _0x49b278){const _0xad673c=(_0x495cb7[_0xb6f540(0x821)]||'')['toLowerCase']()[_0xb6f540(0x7a8)](),_0x1744e2=(_0x495cb7['Match']||'')[_0xb6f540(0x427)]()[_0xb6f540(0x7a8)]();VisuMZ[_0xb6f540(0x909)][_0xb6f540(0x3ec)][_0xad673c]=_0x495cb7,VisuMZ['CoreEngine'][_0xb6f540(0x34a)][_0x1744e2]=_0xad673c;}},VisuMZ[_0x5d57ff(0x6a6)]=function(){const _0x1d5f77=_0x5d57ff;for(const _0x566e4a of $dataActors){if(_0x1d5f77(0x5cb)==='jdtaA')this[_0x1d5f77(0x4be)]['x']=this[_0x1d5f77(0x86a)](this[_0x1d5f77(0x4be)]['x'],this[_0x1d5f77(0x55c)]['x']),this['_anchor']['y']=this[_0x1d5f77(0x86a)](this['_anchor']['y'],this[_0x1d5f77(0x55c)]['y']);else{if(_0x566e4a)VisuMZ['ParseActorNotetags'](_0x566e4a);}}for(const _0x561bb7 of $dataClasses){if(_0x561bb7)VisuMZ[_0x1d5f77(0x6c5)](_0x561bb7);}for(const _0x561582 of $dataSkills){if(_0x561582)VisuMZ[_0x1d5f77(0x3db)](_0x561582);}for(const _0x152732 of $dataItems){if(_0x152732)VisuMZ[_0x1d5f77(0x79a)](_0x152732);}for(const _0x4164ab of $dataWeapons){if(_0x1d5f77(0x6ee)===_0x1d5f77(0x6ee)){if(_0x4164ab)VisuMZ[_0x1d5f77(0x655)](_0x4164ab);}else return _0x3406ef['layoutSettings']['HelpRect'][_0x1d5f77(0x3dd)](this);}for(const _0x3172a3 of $dataArmors){if(_0x3172a3)VisuMZ[_0x1d5f77(0x59d)](_0x3172a3);}for(const _0x291b23 of $dataEnemies){if(_0x291b23)VisuMZ['ParseEnemyNotetags'](_0x291b23);}for(const _0x4118ec of $dataStates){if(_0x4118ec)VisuMZ['ParseStateNotetags'](_0x4118ec);}for(const _0x15e730 of $dataTilesets){if(_0x15e730)VisuMZ['ParseTilesetNotetags'](_0x15e730);}},VisuMZ[_0x5d57ff(0x43d)]=function(_0x41a186){},VisuMZ[_0x5d57ff(0x6c5)]=function(_0x276460){},VisuMZ['ParseSkillNotetags']=function(_0x51a98f){},VisuMZ[_0x5d57ff(0x79a)]=function(_0x3d7445){},VisuMZ[_0x5d57ff(0x655)]=function(_0x45608a){},VisuMZ[_0x5d57ff(0x59d)]=function(_0x47c52e){},VisuMZ['ParseEnemyNotetags']=function(_0x1384ba){},VisuMZ[_0x5d57ff(0x3fc)]=function(_0x312791){},VisuMZ['ParseTilesetNotetags']=function(_0x749717){},VisuMZ['CoreEngine'][_0x5d57ff(0x43d)]=VisuMZ[_0x5d57ff(0x43d)],VisuMZ[_0x5d57ff(0x43d)]=function(_0x145aa6){const _0xe6a94b=_0x5d57ff;VisuMZ[_0xe6a94b(0x909)][_0xe6a94b(0x43d)][_0xe6a94b(0x3dd)](this,_0x145aa6);const _0x525e6e=_0x145aa6[_0xe6a94b(0x957)];if(_0x525e6e[_0xe6a94b(0x749)](/<MAX LEVEL:[ ](\d+)>/i)){_0x145aa6[_0xe6a94b(0x695)]=Number(RegExp['$1']);if(_0x145aa6[_0xe6a94b(0x695)]===0x0)_0x145aa6[_0xe6a94b(0x695)]=Number[_0xe6a94b(0x6f6)];}_0x525e6e['match'](/<INITIAL LEVEL:[ ](\d+)>/i)&&(_0x145aa6[_0xe6a94b(0x59b)]=Math['min'](Number(RegExp['$1']),_0x145aa6[_0xe6a94b(0x695)]));},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x6c5)]=VisuMZ['ParseClassNotetags'],VisuMZ[_0x5d57ff(0x6c5)]=function(_0x3413b7){const _0x15d12e=_0x5d57ff;VisuMZ['CoreEngine'][_0x15d12e(0x6c5)]['call'](this,_0x3413b7);if(_0x3413b7[_0x15d12e(0x68f)])for(const _0x55191f of _0x3413b7[_0x15d12e(0x68f)]){_0x55191f[_0x15d12e(0x957)][_0x15d12e(0x749)](/<LEARN AT LEVEL:[ ](\d+)>/i)&&(_0x55191f[_0x15d12e(0x96f)]=Math[_0x15d12e(0x8ee)](Number(RegExp['$1']),0x1));}},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x653)]=VisuMZ[_0x5d57ff(0x653)],VisuMZ['ParseEnemyNotetags']=function(_0x3ccc33){const _0x2deca7=_0x5d57ff;VisuMZ[_0x2deca7(0x909)][_0x2deca7(0x653)][_0x2deca7(0x3dd)](this,_0x3ccc33),_0x3ccc33[_0x2deca7(0x96f)]=0x1;const _0x466759=_0x3ccc33[_0x2deca7(0x957)];if(_0x466759[_0x2deca7(0x749)](/<LEVEL:[ ](\d+)>/i))_0x3ccc33[_0x2deca7(0x96f)]=Number(RegExp['$1']);if(_0x466759['match'](/<MAXHP:[ ](\d+)>/i))_0x3ccc33['params'][0x0]=Number(RegExp['$1']);if(_0x466759[_0x2deca7(0x749)](/<MAXMP:[ ](\d+)>/i))_0x3ccc33[_0x2deca7(0x31e)][0x1]=Number(RegExp['$1']);if(_0x466759[_0x2deca7(0x749)](/<ATK:[ ](\d+)>/i))_0x3ccc33[_0x2deca7(0x31e)][0x2]=Number(RegExp['$1']);if(_0x466759[_0x2deca7(0x749)](/<DEF:[ ](\d+)>/i))_0x3ccc33[_0x2deca7(0x31e)][0x3]=Number(RegExp['$1']);if(_0x466759[_0x2deca7(0x749)](/<MAT:[ ](\d+)>/i))_0x3ccc33[_0x2deca7(0x31e)][0x4]=Number(RegExp['$1']);if(_0x466759[_0x2deca7(0x749)](/<MDF:[ ](\d+)>/i))_0x3ccc33[_0x2deca7(0x31e)][0x5]=Number(RegExp['$1']);if(_0x466759[_0x2deca7(0x749)](/<AGI:[ ](\d+)>/i))_0x3ccc33['params'][0x6]=Number(RegExp['$1']);if(_0x466759[_0x2deca7(0x749)](/<LUK:[ ](\d+)>/i))_0x3ccc33[_0x2deca7(0x31e)][0x7]=Number(RegExp['$1']);if(_0x466759[_0x2deca7(0x749)](/<EXP:[ ](\d+)>/i))_0x3ccc33[_0x2deca7(0x82e)]=Number(RegExp['$1']);if(_0x466759[_0x2deca7(0x749)](/<GOLD:[ ](\d+)>/i))_0x3ccc33[_0x2deca7(0x763)]=Number(RegExp['$1']);},VisuMZ[_0x5d57ff(0x909)]['Graphics_defaultStretchMode']=Graphics['_defaultStretchMode'],Graphics[_0x5d57ff(0x9ac)]=function(){const _0x16c416=_0x5d57ff;switch(VisuMZ['CoreEngine'][_0x16c416(0x3d3)][_0x16c416(0x1d2)][_0x16c416(0x597)]){case _0x16c416(0x656):return!![];case _0x16c416(0x4a1):return![];default:return VisuMZ['CoreEngine']['Graphics_defaultStretchMode'][_0x16c416(0x3dd)](this);}},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x8ff)]=Graphics[_0x5d57ff(0x89d)],Graphics[_0x5d57ff(0x89d)]=function(_0x46ffa6,_0x31e463,_0x1ee5e5=null){const _0x6ae2fe=_0x5d57ff;VisuMZ[_0x6ae2fe(0x909)][_0x6ae2fe(0x8ff)][_0x6ae2fe(0x3dd)](this,_0x46ffa6,_0x31e463,_0x1ee5e5),VisuMZ[_0x6ae2fe(0x37e)](![]);},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x267)]=Graphics[_0x5d57ff(0x87e)],Graphics[_0x5d57ff(0x87e)]=function(_0x58785d){const _0x2887db=_0x5d57ff;VisuMZ['CoreEngine'][_0x2887db(0x267)][_0x2887db(0x3dd)](this,_0x58785d),this['_centerElementCoreEngine'](_0x58785d);},Graphics[_0x5d57ff(0x965)]=function(_0x498ed8){const _0x3748c1=_0x5d57ff;VisuMZ[_0x3748c1(0x909)][_0x3748c1(0x3d3)][_0x3748c1(0x1d2)][_0x3748c1(0x5d4)]&&(_0x498ed8[_0x3748c1(0x886)]['font-smooth']=_0x3748c1(0x7e5));if(VisuMZ[_0x3748c1(0x909)][_0x3748c1(0x3d3)][_0x3748c1(0x1d2)][_0x3748c1(0x688)]){if('RbncO'!==_0x3748c1(0x62b))return _0x32949[_0x3748c1(0x909)][_0x3748c1(0x3d3)][_0x3748c1(0x990)][_0x3748c1(0x634)];else _0x498ed8[_0x3748c1(0x886)]['image-rendering']=_0x3748c1(0x85a);}const _0x392437=Math['max'](0x0,Math[_0x3748c1(0x9ca)](_0x498ed8[_0x3748c1(0x961)]*this[_0x3748c1(0x4b8)])),_0x2c301d=Math[_0x3748c1(0x8ee)](0x0,Math[_0x3748c1(0x9ca)](_0x498ed8[_0x3748c1(0x317)]*this['_realScale']));_0x498ed8[_0x3748c1(0x886)][_0x3748c1(0x961)]=_0x392437+'px',_0x498ed8[_0x3748c1(0x886)][_0x3748c1(0x317)]=_0x2c301d+'px';},VisuMZ[_0x5d57ff(0x909)]['Bitmap_initialize']=Bitmap['prototype'][_0x5d57ff(0x4d1)],Bitmap[_0x5d57ff(0x5cf)][_0x5d57ff(0x4d1)]=function(_0x299b87,_0x13b508){const _0x44120c=_0x5d57ff;VisuMZ[_0x44120c(0x909)][_0x44120c(0x1da)][_0x44120c(0x3dd)](this,_0x299b87,_0x13b508),this[_0x44120c(0x2f0)]=!(VisuMZ['CoreEngine']['Settings'][_0x44120c(0x1d2)]['PixelateImageRendering']??!![]);},Bitmap[_0x5d57ff(0x5cf)][_0x5d57ff(0x48c)]=function(){const _0x294f74=_0x5d57ff;this[_0x294f74(0x3c5)]=!![];},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x35f)]=Sprite[_0x5d57ff(0x5cf)][_0x5d57ff(0x543)],Sprite[_0x5d57ff(0x5cf)]['destroy']=function(){const _0x23d9ea=_0x5d57ff;VisuMZ[_0x23d9ea(0x909)][_0x23d9ea(0x35f)][_0x23d9ea(0x3dd)](this),this[_0x23d9ea(0x83c)]();},Sprite[_0x5d57ff(0x5cf)][_0x5d57ff(0x83c)]=function(){const _0x3f2f4e=_0x5d57ff;if(!this['bitmap'])return;if(!this[_0x3f2f4e(0x351)][_0x3f2f4e(0x3c5)])return;if(this[_0x3f2f4e(0x351)][_0x3f2f4e(0x935)]&&!this[_0x3f2f4e(0x8df)][_0x3f2f4e(0x935)][_0x3f2f4e(0x20f)]){if('CZWGY'!=='dyvPn')this['bitmap'][_0x3f2f4e(0x543)]();else return this['subject']()[_0x3f2f4e(0x286)]+0.05;}},VisuMZ['CoreEngine']['Bitmap_resize']=Bitmap[_0x5d57ff(0x5cf)][_0x5d57ff(0x58d)],Bitmap[_0x5d57ff(0x5cf)][_0x5d57ff(0x58d)]=function(_0x276ed1,_0x5189ad){const _0xc7950e=_0x5d57ff;VisuMZ['CoreEngine'][_0xc7950e(0x9c9)][_0xc7950e(0x3dd)](this,_0x276ed1,_0x5189ad),this[_0xc7950e(0x48c)]();},VisuMZ['CoreEngine'][_0x5d57ff(0x5c0)]=Bitmap[_0x5d57ff(0x5cf)][_0x5d57ff(0x801)],Bitmap[_0x5d57ff(0x5cf)]['blt']=function(_0x3d5971,_0x3b6298,_0x2bd171,_0x3286e2,_0x287ee0,_0x40204d,_0x13ed96,_0x2b0ac5,_0x18062b){const _0x3b0775=_0x5d57ff;_0x3b6298=Math[_0x3b0775(0x746)](_0x3b6298),_0x2bd171=Math[_0x3b0775(0x746)](_0x2bd171),_0x3286e2=Math[_0x3b0775(0x746)](_0x3286e2),_0x287ee0=Math['round'](_0x287ee0),_0x40204d=Math[_0x3b0775(0x746)](_0x40204d),_0x13ed96=Math[_0x3b0775(0x746)](_0x13ed96),VisuMZ[_0x3b0775(0x909)][_0x3b0775(0x5c0)]['call'](this,_0x3d5971,_0x3b6298,_0x2bd171,_0x3286e2,_0x287ee0,_0x40204d,_0x13ed96,_0x2b0ac5,_0x18062b),this[_0x3b0775(0x48c)]();},VisuMZ['CoreEngine']['Bitmap_clearRect']=Bitmap['prototype'][_0x5d57ff(0x580)],Bitmap[_0x5d57ff(0x5cf)]['clearRect']=function(_0x524f9e,_0x20e8f0,_0x229ac8,_0x3d4c8c){const _0x216206=_0x5d57ff;VisuMZ[_0x216206(0x909)]['Bitmap_clearRect']['call'](this,_0x524f9e,_0x20e8f0,_0x229ac8,_0x3d4c8c),this[_0x216206(0x48c)]();},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x422)]=Bitmap[_0x5d57ff(0x5cf)]['fillRect'],Bitmap[_0x5d57ff(0x5cf)][_0x5d57ff(0x4ae)]=function(_0x40a264,_0x91a37a,_0x12bd0a,_0x48135d,_0x5f058c){const _0x4c1c51=_0x5d57ff;VisuMZ[_0x4c1c51(0x909)][_0x4c1c51(0x422)]['call'](this,_0x40a264,_0x91a37a,_0x12bd0a,_0x48135d,_0x5f058c),this[_0x4c1c51(0x48c)]();},VisuMZ['CoreEngine'][_0x5d57ff(0x301)]=Bitmap[_0x5d57ff(0x5cf)][_0x5d57ff(0x445)],Bitmap[_0x5d57ff(0x5cf)][_0x5d57ff(0x445)]=function(_0x106a9e,_0x2c4829,_0x27fbad,_0x5315ef,_0x6c2751){const _0x452c3b=_0x5d57ff;VisuMZ['CoreEngine'][_0x452c3b(0x301)]['call'](this,_0x106a9e,_0x2c4829,_0x27fbad,_0x5315ef,_0x6c2751),this[_0x452c3b(0x48c)]();},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x462)]=Bitmap[_0x5d57ff(0x5cf)][_0x5d57ff(0x6ed)],Bitmap[_0x5d57ff(0x5cf)][_0x5d57ff(0x6ed)]=function(_0x457e5d,_0x270f6c,_0x46c626,_0x150cce,_0x3238fc,_0x44283a,_0x34c267){const _0x4d50df=_0x5d57ff;VisuMZ[_0x4d50df(0x909)][_0x4d50df(0x462)]['call'](this,_0x457e5d,_0x270f6c,_0x46c626,_0x150cce,_0x3238fc,_0x44283a,_0x34c267),this['markCoreEngineModified']();},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x9d9)]=Bitmap[_0x5d57ff(0x5cf)][_0x5d57ff(0x302)],Bitmap[_0x5d57ff(0x5cf)][_0x5d57ff(0x302)]=function(_0x209cea,_0x5de8e9,_0x395a10,_0x28ba7b){const _0x37346c=_0x5d57ff;_0x209cea=Math[_0x37346c(0x746)](_0x209cea),_0x5de8e9=Math[_0x37346c(0x746)](_0x5de8e9),_0x395a10=Math[_0x37346c(0x746)](_0x395a10),VisuMZ[_0x37346c(0x909)][_0x37346c(0x9d9)]['call'](this,_0x209cea,_0x5de8e9,_0x395a10,_0x28ba7b),this['markCoreEngineModified']();},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x563)]=Bitmap['prototype'][_0x5d57ff(0x2fb)],Bitmap[_0x5d57ff(0x5cf)][_0x5d57ff(0x2fb)]=function(_0x356eac){const _0x8b6c4c=_0x5d57ff;return Math['ceil'](VisuMZ[_0x8b6c4c(0x909)][_0x8b6c4c(0x563)][_0x8b6c4c(0x3dd)](this,_0x356eac));},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x70b)]=Bitmap[_0x5d57ff(0x5cf)]['drawText'],Bitmap[_0x5d57ff(0x5cf)][_0x5d57ff(0x19d)]=function(_0x3beba3,_0x320cf6,_0xd278ff,_0xabdefb,_0x35132f,_0x5e0e24){const _0x3a7d44=_0x5d57ff;_0x320cf6=Math['round'](_0x320cf6),_0xd278ff=Math['round'](_0xd278ff),_0xabdefb=Math[_0x3a7d44(0x746)](_0xabdefb),_0x35132f=Math[_0x3a7d44(0x746)](_0x35132f),VisuMZ[_0x3a7d44(0x909)]['Bitmap_drawText'][_0x3a7d44(0x3dd)](this,_0x3beba3,_0x320cf6,_0xd278ff,_0xabdefb,_0x35132f,_0x5e0e24),this[_0x3a7d44(0x48c)]();},VisuMZ['CoreEngine'][_0x5d57ff(0x1e7)]=Bitmap[_0x5d57ff(0x5cf)]['_drawTextOutline'],Bitmap[_0x5d57ff(0x5cf)][_0x5d57ff(0x5b1)]=function(_0x209439,_0x855f02,_0x9573f6,_0x24c635){const _0x2d550e=_0x5d57ff;if(VisuMZ[_0x2d550e(0x909)]['Settings'][_0x2d550e(0x1d2)][_0x2d550e(0x61f)]){if('SLPTE'==='qYwbi')return _0x1490f4[_0x2d550e(0x909)][_0x2d550e(0x3d3)]['UI'][_0x2d550e(0x9b1)];else this['_drawTextShadow'](_0x209439,_0x855f02,_0x9573f6,_0x24c635);}else VisuMZ[_0x2d550e(0x909)]['Bitmap_drawTextOutline'][_0x2d550e(0x3dd)](this,_0x209439,_0x855f02,_0x9573f6,_0x24c635);},Bitmap[_0x5d57ff(0x5cf)][_0x5d57ff(0x4ff)]=function(_0xe6cbd1,_0x4ee41f,_0xf8a199,_0x15629d){const _0x45c2c8=_0x5d57ff,_0x135dd5=this[_0x45c2c8(0x182)];_0x135dd5['fillStyle']=this[_0x45c2c8(0x308)],_0x135dd5['fillText'](_0xe6cbd1,_0x4ee41f+0x2,_0xf8a199+0x2,_0x15629d);},VisuMZ['CoreEngine']['Input_clear']=Input[_0x5d57ff(0x4a2)],Input['clear']=function(){const _0x1e681a=_0x5d57ff;VisuMZ[_0x1e681a(0x909)][_0x1e681a(0x2a4)][_0x1e681a(0x3dd)](this),this[_0x1e681a(0x9ce)]=undefined,this[_0x1e681a(0x8f2)]=undefined,this[_0x1e681a(0x834)]=Input[_0x1e681a(0x852)];},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x249)]=Input[_0x5d57ff(0x74d)],Input['update']=function(){const _0x4fd2e6=_0x5d57ff;VisuMZ['CoreEngine'][_0x4fd2e6(0x249)][_0x4fd2e6(0x3dd)](this);if(this['_gamepadWait'])this['_gamepadWait']--;},VisuMZ['CoreEngine'][_0x5d57ff(0x3a3)]=Input['_pollGamepads'],Input[_0x5d57ff(0x7da)]=function(){const _0x487e36=_0x5d57ff;if(this[_0x487e36(0x834)])return;VisuMZ[_0x487e36(0x909)][_0x487e36(0x3a3)][_0x487e36(0x3dd)](this);},VisuMZ['CoreEngine'][_0x5d57ff(0x51e)]=Input[_0x5d57ff(0x7d7)],Input['_setupEventHandlers']=function(){const _0x4c4e2d=_0x5d57ff;VisuMZ[_0x4c4e2d(0x909)]['Input_setupEventHandlers'][_0x4c4e2d(0x3dd)](this),document[_0x4c4e2d(0x5d9)](_0x4c4e2d(0x66b),this[_0x4c4e2d(0x4d8)][_0x4c4e2d(0x487)](this));},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x263)]=Input[_0x5d57ff(0x1c1)],Input[_0x5d57ff(0x1c1)]=function(_0x3ee5b2){const _0x59bb2e=_0x5d57ff;this[_0x59bb2e(0x8f2)]=_0x3ee5b2[_0x59bb2e(0x9c7)],VisuMZ[_0x59bb2e(0x909)]['Input_onKeyDown'][_0x59bb2e(0x3dd)](this,_0x3ee5b2),this[_0x59bb2e(0x76b)](null);},Input['_onKeyPress']=function(_0x109f27){this['_registerKeyInput'](_0x109f27);},Input[_0x5d57ff(0x86d)]=function(_0x233d29){const _0x4d0296=_0x5d57ff;this[_0x4d0296(0x8f2)]=_0x233d29[_0x4d0296(0x9c7)];let _0x39bf94=String[_0x4d0296(0x623)](_0x233d29[_0x4d0296(0x926)]);this['_inputString']===undefined?this[_0x4d0296(0x9ce)]=_0x39bf94:this[_0x4d0296(0x9ce)]+=_0x39bf94;},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x256)]=Input['_shouldPreventDefault'],Input[_0x5d57ff(0x42e)]=function(_0x8dd107){const _0x232fae=_0x5d57ff;if(_0x8dd107===0x8)return![];return VisuMZ[_0x232fae(0x909)][_0x232fae(0x256)][_0x232fae(0x3dd)](this,_0x8dd107);},Input['isSpecialCode']=function(_0x5ea084){const _0x10e2d4=_0x5d57ff;if(_0x5ea084[_0x10e2d4(0x749)](/backspace/i))return this['_inputSpecialKeyCode']===0x8;if(_0x5ea084[_0x10e2d4(0x749)](/enter/i))return this[_0x10e2d4(0x8f2)]===0xd;if(_0x5ea084[_0x10e2d4(0x749)](/escape/i))return this[_0x10e2d4(0x8f2)]===0x1b;},Input[_0x5d57ff(0x270)]=function(){const _0xc9c2ac=_0x5d57ff;return[0x30,0x31,0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39][_0xc9c2ac(0x48b)](this[_0xc9c2ac(0x8f2)]);},Input[_0x5d57ff(0x638)]=function(){const _0x3315b8=_0x5d57ff;return[0x25,0x26,0x27,0x28][_0x3315b8(0x48b)](this['_inputSpecialKeyCode']);},Input[_0x5d57ff(0x64c)]=function(){const _0x5f1164=_0x5d57ff;if(navigator[_0x5f1164(0x723)]){if(_0x5f1164(0x20d)===_0x5f1164(0x2e9))this[_0x5f1164(0x9a5)]=_0x5f1164(0x407);else{const _0x590e21=navigator[_0x5f1164(0x723)]();if(_0x590e21)for(const _0x165bf3 of _0x590e21){if(_0x165bf3&&_0x165bf3['connected']){if(_0x5f1164(0x812)==='zoIDa')return!![];else _0x4035e2[_0x5f1164(0x5cf)]['createBackground'][_0x5f1164(0x3dd)](this);}}}}return![];},Input[_0x5d57ff(0x4dc)]=function(){const _0x47b19e=_0x5d57ff;if(navigator[_0x47b19e(0x723)]){if(_0x47b19e(0x9d2)==='NMuew')_0x1ef9af+=_0x47b19e(0x569)['format'](_0x53e1e3[_0x47b19e(0x848)][0x4]);else{const _0x239f1f=navigator['getGamepads']();if(_0x239f1f)for(const _0x3c31ee of _0x239f1f){if(_0x47b19e(0x959)!==_0x47b19e(0x90f)){if(_0x3c31ee&&_0x3c31ee[_0x47b19e(0x816)]){if(this[_0x47b19e(0x62c)](_0x3c31ee))return!![];if(this[_0x47b19e(0x6ea)](_0x3c31ee))return!![];}}else _0x54e886+=_0x42c759(_0x2b65d2);}}}return![];},Input[_0x5d57ff(0x62c)]=function(_0x94c210){const _0x56f45d=_0x5d57ff,_0x43c2c1=_0x94c210[_0x56f45d(0x1c7)];for(let _0x3c1e3e=0x0;_0x3c1e3e<_0x43c2c1[_0x56f45d(0x929)];_0x3c1e3e++){if(_0x43c2c1[_0x3c1e3e]['pressed'])return!![];}return![];},Input[_0x5d57ff(0x6ea)]=function(_0x3a2cb3){const _0x2aa210=_0x5d57ff,_0x4ae901=_0x3a2cb3[_0x2aa210(0x680)],_0x24eb89=0.5;if(_0x4ae901[0x0]<-_0x24eb89)return!![];if(_0x4ae901[0x0]>_0x24eb89)return!![];if(_0x4ae901[0x1]<-_0x24eb89)return!![];if(_0x4ae901[0x1]>_0x24eb89)return!![];return![];},Input[_0x5d57ff(0x699)]=function(){const _0x415dfe=_0x5d57ff;return this[_0x415dfe(0x360)]||null;},Input['setLastGamepadUsed']=function(_0xbe8975){const _0xbc4922=_0x5d57ff;this[_0xbc4922(0x360)]=_0xbe8975;},VisuMZ['CoreEngine']['Input_updateGamepadState']=Input[_0x5d57ff(0x7c9)],Input['_updateGamepadState']=function(_0x1af594){const _0x114dfb=_0x5d57ff;VisuMZ['CoreEngine'][_0x114dfb(0x797)]['call'](this,_0x1af594),(this['isGamepadButtonPressed'](_0x1af594)||this[_0x114dfb(0x6ea)](_0x1af594))&&this['setLastGamepadUsed'](_0x1af594);},Input[_0x5d57ff(0x188)]=function(){const _0x33630b=_0x5d57ff;return this[_0x33630b(0x360)]?this[_0x33630b(0x360)]['id']:_0x33630b(0x576);},VisuMZ['CoreEngine'][_0x5d57ff(0x1ab)]=Tilemap['prototype'][_0x5d57ff(0x89f)],Tilemap[_0x5d57ff(0x5cf)][_0x5d57ff(0x89f)]=function(_0x4b2e3f,_0x3981b5,_0x131b91,_0x3e8a78){const _0x185c72=_0x5d57ff;if($gameMap&&$gameMap[_0x185c72(0x598)]())return;VisuMZ[_0x185c72(0x909)][_0x185c72(0x1ab)][_0x185c72(0x3dd)](this,_0x4b2e3f,_0x3981b5,_0x131b91,_0x3e8a78);},Tilemap[_0x5d57ff(0x4e7)][_0x5d57ff(0x5cf)][_0x5d57ff(0x5e2)]=function(){const _0x5178e6=_0x5d57ff;this[_0x5178e6(0x225)]();for(let _0x1da60d=0x0;_0x1da60d<Tilemap[_0x5178e6(0x65e)][_0x5178e6(0x521)];_0x1da60d++){const _0x2e8850=new PIXI[(_0x5178e6(0x53e))]();_0x2e8850['setSize'](0x800,0x800),VisuMZ[_0x5178e6(0x909)][_0x5178e6(0x3d3)]['QoL'][_0x5178e6(0x688)]&&('OupfD'!==_0x5178e6(0x38c)?this[_0x5178e6(0x9a5)]=_0x5178e6(0x46c):_0x2e8850[_0x5178e6(0x74f)]=PIXI[_0x5178e6(0x304)][_0x5178e6(0x92b)]),this[_0x5178e6(0x536)][_0x5178e6(0x1e2)](_0x2e8850);}},WindowLayer[_0x5d57ff(0x5cf)][_0x5d57ff(0x856)]=function(){const _0x49c512=_0x5d57ff;if(SceneManager&&SceneManager[_0x49c512(0x90c)]){if('JllDp'!==_0x49c512(0x3c8))return SceneManager[_0x49c512(0x90c)][_0x49c512(0x988)]();else this[_0x49c512(0x33d)]()&&_0x2183b7&&this[_0x49c512(0x568)]()===0x1&&this[_0x49c512(0x697)]()===0x0?this['smoothSelect'](this[_0x49c512(0x3c6)]()-0x1):_0x54ec95['CoreEngine'][_0x49c512(0x577)][_0x49c512(0x3dd)](this,_0x272aac);}else return!![];},VisuMZ[_0x5d57ff(0x909)]['WindowLayer_render']=WindowLayer[_0x5d57ff(0x5cf)][_0x5d57ff(0x755)],WindowLayer[_0x5d57ff(0x5cf)][_0x5d57ff(0x755)]=function render(_0x3ce0af){const _0x2aaa27=_0x5d57ff;this[_0x2aaa27(0x856)]()?_0x2aaa27(0x512)!==_0x2aaa27(0x520)?VisuMZ[_0x2aaa27(0x909)]['WindowLayer_render']['call'](this,_0x3ce0af):this[_0x2aaa27(0x214)](_0x5a1a67[_0x2aaa27(0x44a)](this[_0x2aaa27(0x697)](),0x0)):this[_0x2aaa27(0x3c3)](_0x3ce0af);},WindowLayer[_0x5d57ff(0x5cf)][_0x5d57ff(0x3c3)]=function render(_0x5564db){const _0x103fdd=_0x5d57ff;if(!this[_0x103fdd(0x206)])return;const _0xda4056=new PIXI[(_0x103fdd(0x995))](),_0x127c06=_0x5564db['gl'],_0x508c89=this[_0x103fdd(0x1cb)][_0x103fdd(0x51d)]();_0x5564db['framebuffer'][_0x103fdd(0x725)](),_0xda4056[_0x103fdd(0x948)]=this[_0x103fdd(0x948)],_0x5564db['batch'][_0x103fdd(0x3cc)](),_0x127c06[_0x103fdd(0x389)](_0x127c06[_0x103fdd(0x95e)]);while(_0x508c89['length']>0x0){const _0x5a3804=_0x508c89[_0x103fdd(0x93f)]();_0x5a3804[_0x103fdd(0x686)]&&_0x5a3804[_0x103fdd(0x206)]&&_0x5a3804[_0x103fdd(0x8d3)]>0x0&&(_0x127c06[_0x103fdd(0x74e)](_0x127c06[_0x103fdd(0x832)],0x0,~0x0),_0x127c06[_0x103fdd(0x9d1)](_0x127c06['KEEP'],_0x127c06[_0x103fdd(0x955)],_0x127c06[_0x103fdd(0x955)]),_0x5a3804['render'](_0x5564db),_0x5564db[_0x103fdd(0x7ec)][_0x103fdd(0x3cc)](),_0xda4056[_0x103fdd(0x4a2)](),_0x127c06[_0x103fdd(0x74e)](_0x127c06['ALWAYS'],0x1,~0x0),_0x127c06['stencilOp'](_0x127c06['REPLACE'],_0x127c06[_0x103fdd(0x3a4)],_0x127c06[_0x103fdd(0x3a4)]),_0x127c06[_0x103fdd(0x565)](_0x127c06[_0x103fdd(0x805)],_0x127c06['ONE']),_0xda4056[_0x103fdd(0x755)](_0x5564db),_0x5564db[_0x103fdd(0x7ec)]['flush'](),_0x127c06[_0x103fdd(0x565)](_0x127c06[_0x103fdd(0x24c)],_0x127c06[_0x103fdd(0x59f)]));}_0x127c06[_0x103fdd(0x934)](_0x127c06[_0x103fdd(0x95e)]),_0x127c06[_0x103fdd(0x4a2)](_0x127c06['STENCIL_BUFFER_BIT']),_0x127c06[_0x103fdd(0x980)](0x0),_0x5564db['batch']['flush']();for(const _0x5538e5 of this[_0x103fdd(0x1cb)]){!_0x5538e5[_0x103fdd(0x686)]&&_0x5538e5['visible']&&_0x5538e5['render'](_0x5564db);}_0x5564db[_0x103fdd(0x7ec)][_0x103fdd(0x3cc)]();},DataManager['isKeyItem']=function(_0x29a4ef){const _0x3ff078=_0x5d57ff;return this[_0x3ff078(0x6e0)](_0x29a4ef)&&_0x29a4ef[_0x3ff078(0x26c)]===0x2;},VisuMZ['CoreEngine'][_0x5d57ff(0x985)]=DataManager[_0x5d57ff(0x300)],DataManager[_0x5d57ff(0x300)]=function(){const _0x4cb6dd=_0x5d57ff;VisuMZ[_0x4cb6dd(0x909)][_0x4cb6dd(0x985)][_0x4cb6dd(0x3dd)](this),this[_0x4cb6dd(0x889)](),this[_0x4cb6dd(0x87a)]();},DataManager['reservePlayTestNewGameCommonEvent']=function(){const _0x553572=_0x5d57ff;if($gameTemp[_0x553572(0x899)]()){const _0xd28745=VisuMZ[_0x553572(0x909)]['Settings']['QoL']['NewGameCommonEvent'];if(_0xd28745>0x0)$gameTemp[_0x553572(0x7eb)](_0xd28745);}},DataManager[_0x5d57ff(0x87a)]=function(){const _0x4e82db=_0x5d57ff,_0x27fff8=VisuMZ[_0x4e82db(0x909)][_0x4e82db(0x3d3)][_0x4e82db(0x1d2)][_0x4e82db(0x218)]||0x0;if(_0x27fff8>0x0)$gameTemp[_0x4e82db(0x7eb)](_0x27fff8);},DataManager[_0x5d57ff(0x6e6)]=function(_0x45c717){const _0x1e01ff=_0x5d57ff,_0x4c09d8=$dataTroops[_0x45c717];if(!_0x4c09d8)return'';let _0x4f3328='';_0x4f3328+=_0x4c09d8[_0x1e01ff(0x7e4)];for(const _0x9dda3e of _0x4c09d8['pages']){if(_0x1e01ff(0x454)===_0x1e01ff(0x454))for(const _0x3a8ec2 of _0x9dda3e[_0x1e01ff(0x6c4)]){[0x6c,0x198][_0x1e01ff(0x861)](_0x3a8ec2[_0x1e01ff(0x66a)])&&(_0x4f3328+='\x0a',_0x4f3328+=_0x3a8ec2['parameters'][0x0]);}else{let _0xc52922=_0x1f5951[_0x4b4343],_0xadf6d5=this[_0x1e01ff(0x7d3)](_0xc52922)['width'],_0x15e717=_0x3ccb88[_0x1e01ff(0x9ca)]((this[_0x1e01ff(0x452)][_0x1e01ff(0x961)]-_0xadf6d5)/0x2);this[_0x1e01ff(0x76f)](_0xc52922,_0x15e717,_0x29ed12),_0xddade9+=this[_0x1e01ff(0x416)]();}}return _0x4f3328;};(VisuMZ[_0x5d57ff(0x909)]['Settings'][_0x5d57ff(0x1d2)][_0x5d57ff(0x3c4)]??!![])&&($scene=null,VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x626)]=Scene_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x2e3)],Scene_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x2e3)]=function(){VisuMZ['CoreEngine']['Scene_Base_create']['call'](this),$scene=this;},$spriteset=null,VisuMZ['CoreEngine'][_0x5d57ff(0x289)]=Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x268)],Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x268)]=function(){const _0x32a95e=_0x5d57ff;VisuMZ[_0x32a95e(0x909)][_0x32a95e(0x289)][_0x32a95e(0x3dd)](this),$spriteset=this[_0x32a95e(0x928)];},VisuMZ['CoreEngine'][_0x5d57ff(0x6a9)]=Scene_Battle[_0x5d57ff(0x5cf)][_0x5d57ff(0x268)],Scene_Battle['prototype']['createSpriteset']=function(){const _0x5768ab=_0x5d57ff;VisuMZ[_0x5768ab(0x909)][_0x5768ab(0x6a9)][_0x5768ab(0x3dd)](this),$spriteset=this[_0x5768ab(0x928)];},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x9d0)]=Scene_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x6c3)],Scene_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x6c3)]=function(){const _0x9d3d08=_0x5d57ff;VisuMZ[_0x9d3d08(0x909)][_0x9d3d08(0x9d0)][_0x9d3d08(0x3dd)](this),$spriteset=null,$subject=null,$targets=null,$target=null;},$subject=null,$targets=null,$target=null,VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x2ff)]=BattleManager['update'],BattleManager['update']=function(_0x2becb6){const _0x38e6b5=_0x5d57ff;VisuMZ['CoreEngine']['BattleManager_update'][_0x38e6b5(0x3dd)](this,_0x2becb6),$subject=this[_0x38e6b5(0x338)],$targets=this[_0x38e6b5(0x3a9)],$target=this['_target']||this[_0x38e6b5(0x3a9)][0x0];},$event=null,VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x9ab)]=Game_Event[_0x5d57ff(0x5cf)][_0x5d57ff(0x770)],Game_Event[_0x5d57ff(0x5cf)]['start']=function(){const _0x59bf11=_0x5d57ff;VisuMZ[_0x59bf11(0x909)][_0x59bf11(0x9ab)][_0x59bf11(0x3dd)](this),$event=this;},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x7dd)]=Scene_Map[_0x5d57ff(0x5cf)]['update'],Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x74d)]=function(){const _0x3999fc=_0x5d57ff;VisuMZ[_0x3999fc(0x909)][_0x3999fc(0x7dd)][_0x3999fc(0x3dd)](this),$gameMap[_0x3999fc(0x343)]();},Game_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x343)]=function(){const _0x4c055f=_0x5d57ff;if(!this[_0x4c055f(0x5ea)]()&&$event!==null){if('aWnIv'===_0x4c055f(0x56d)){_0x3fb064+=_0x498a72;if(_0x58aa67>=_0x4042ca)_0x102b00=_0x47a4ea-0x1;this[_0x4c055f(0x214)](_0x47569d);}else $event=null;}},$commonEvent=function(_0x306de3){if($gameTemp)$gameTemp['reserveCommonEvent'](_0x306de3);},$onceParallel=function(_0x566965){const _0x522fea=_0x5d57ff;if(SceneManager[_0x522fea(0x9d8)]())_0x522fea(0x36c)===_0x522fea(0x36c)?$scene[_0x522fea(0x42a)](_0x566965):this[_0x522fea(0x922)]=_0x54b0fa;else{if(SceneManager[_0x522fea(0x808)]()){if(Imported[_0x522fea(0x1fa)]){if(_0x522fea(0x4df)===_0x522fea(0x459))return!![];else $scene[_0x522fea(0x42a)](_0x566965);}else $gameTemp&&$gameTemp[_0x522fea(0x899)]()&&alert(_0x522fea(0x7f9));}else $gameTemp&&$gameTemp['isPlaytest']()&&alert('This\x20scene\x20cannot\x20utilize\x20a\x20Once\x20Parallel!');}});;StorageManager[_0x5d57ff(0x860)]=function(_0x3940ed){return new Promise((_0x46f98c,_0x23835a)=>{const _0x21fb8e=_0x35e6;if(_0x21fb8e(0x726)!==_0x21fb8e(0x501))try{if(_0x21fb8e(0x3cd)===_0x21fb8e(0x6d4))_0x51ce9c[_0x21fb8e(0x909)][_0x21fb8e(0x301)][_0x21fb8e(0x3dd)](this,_0x5e1e34,_0x1dfd72,_0x4be0dc,_0x140d4c,_0xd97ffe),this[_0x21fb8e(0x48c)]();else{const _0x3f0555=pako['deflate'](_0x3940ed,{'to':_0x21fb8e(0x336),'level':0x1});if(_0x3f0555['length']>=0xc350){}_0x46f98c(_0x3f0555);}}catch(_0x233371){_0x23835a(_0x233371);}else _0x191dd5&&_0x481eb9[_0x21fb8e(0x74d)]();});},TextManager['stringKeyMap']=['','','',_0x5d57ff(0x6c0),'','',_0x5d57ff(0x712),'',_0x5d57ff(0x579),_0x5d57ff(0x3ae),'','','CLEAR',_0x5d57ff(0x81f),_0x5d57ff(0x396),'',_0x5d57ff(0x35c),_0x5d57ff(0x46b),_0x5d57ff(0x5ba),_0x5d57ff(0x2e6),_0x5d57ff(0x94b),_0x5d57ff(0x67a),_0x5d57ff(0x95d),_0x5d57ff(0x918),_0x5d57ff(0x6c8),'HANJA','',_0x5d57ff(0x1df),_0x5d57ff(0x88c),_0x5d57ff(0x50d),_0x5d57ff(0x51f),_0x5d57ff(0x1c8),_0x5d57ff(0x491),'PGUP',_0x5d57ff(0x5b4),_0x5d57ff(0x3f1),_0x5d57ff(0x29a),_0x5d57ff(0x1eb),'UP',_0x5d57ff(0x6fc),_0x5d57ff(0x7cb),_0x5d57ff(0x42b),_0x5d57ff(0x938),_0x5d57ff(0x55d),_0x5d57ff(0x285),_0x5d57ff(0x46d),_0x5d57ff(0x8db),'','0','1','2','3','4','5','6','7','8','9',_0x5d57ff(0x993),_0x5d57ff(0x2e4),_0x5d57ff(0x30a),_0x5d57ff(0x219),_0x5d57ff(0x571),_0x5d57ff(0x775),'AT','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',_0x5d57ff(0x9d3),'',_0x5d57ff(0x61b),'',_0x5d57ff(0x327),_0x5d57ff(0x7fb),_0x5d57ff(0x203),'NUMPAD2',_0x5d57ff(0x89b),_0x5d57ff(0x23d),_0x5d57ff(0x8c7),_0x5d57ff(0x5e0),_0x5d57ff(0x8fa),_0x5d57ff(0x3b2),_0x5d57ff(0x7b1),_0x5d57ff(0x523),_0x5d57ff(0x720),_0x5d57ff(0x329),_0x5d57ff(0x3fa),_0x5d57ff(0x1aa),'DIVIDE','F1','F2','F3','F4','F5','F6','F7','F8','F9',_0x5d57ff(0x790),'F11',_0x5d57ff(0x252),_0x5d57ff(0x8c2),_0x5d57ff(0x70e),_0x5d57ff(0x25b),_0x5d57ff(0x27a),_0x5d57ff(0x846),_0x5d57ff(0x829),'F19',_0x5d57ff(0x9e7),_0x5d57ff(0x4cd),_0x5d57ff(0x518),_0x5d57ff(0x27f),'F24','','','','','','','','',_0x5d57ff(0x545),'SCROLL_LOCK',_0x5d57ff(0x50f),_0x5d57ff(0x7e2),'WIN_OEM_FJ_TOUROKU',_0x5d57ff(0x61c),_0x5d57ff(0x3fd),'','','','','','','','','',_0x5d57ff(0x96d),_0x5d57ff(0x8af),'DOUBLE_QUOTE',_0x5d57ff(0x50a),_0x5d57ff(0x870),_0x5d57ff(0x468),_0x5d57ff(0x1e8),_0x5d57ff(0x444),_0x5d57ff(0x7f0),_0x5d57ff(0x5f5),_0x5d57ff(0x2b7),_0x5d57ff(0x1f1),_0x5d57ff(0x91a),_0x5d57ff(0x81d),'OPEN_CURLY_BRACKET','CLOSE_CURLY_BRACKET',_0x5d57ff(0x773),'','','','',_0x5d57ff(0x842),_0x5d57ff(0x1d5),_0x5d57ff(0x703),'','',_0x5d57ff(0x2e4),_0x5d57ff(0x219),_0x5d57ff(0x1f9),'MINUS','PERIOD',_0x5d57ff(0x740),'BACK_QUOTE','','','','','','','','','','','','','','','','','','','','','','','','','','','OPEN_BRACKET',_0x5d57ff(0x5be),'CLOSE_BRACKET',_0x5d57ff(0x853),'',_0x5d57ff(0x1b6),_0x5d57ff(0x69c),'',_0x5d57ff(0x748),_0x5d57ff(0x769),'',_0x5d57ff(0x3ee),'','','WIN_OEM_RESET',_0x5d57ff(0x186),_0x5d57ff(0x8c4),_0x5d57ff(0x4d3),_0x5d57ff(0x973),_0x5d57ff(0x5f6),_0x5d57ff(0x849),_0x5d57ff(0x82c),_0x5d57ff(0x4da),_0x5d57ff(0x8ce),_0x5d57ff(0x960),_0x5d57ff(0x3d1),'WIN_OEM_BACKTAB',_0x5d57ff(0x9c0),_0x5d57ff(0x5fc),_0x5d57ff(0x5de),'EREOF','PLAY',_0x5d57ff(0x210),'',_0x5d57ff(0x7d0),_0x5d57ff(0x958),''],TextManager[_0x5d57ff(0x85f)]=VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3d3)][_0x5d57ff(0x1d9)][_0x5d57ff(0x8a3)],TextManager[_0x5d57ff(0x5c2)]=VisuMZ[_0x5d57ff(0x909)]['Settings']['ButtonAssist']['CancelText'],TextManager[_0x5d57ff(0x52f)]=VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3d3)]['ButtonAssist'][_0x5d57ff(0x641)],VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x4c3)]=TextManager[_0x5d57ff(0x261)],TextManager[_0x5d57ff(0x261)]=function(_0x422bd9){const _0x17d23f=_0x5d57ff;if(typeof _0x422bd9==='number')return VisuMZ['CoreEngine'][_0x17d23f(0x4c3)][_0x17d23f(0x3dd)](this,_0x422bd9);else{if(_0x17d23f(0x6a5)!==_0x17d23f(0x6a5))this[_0x17d23f(0x44e)]='SV';else return this['paramName'](_0x422bd9);}},TextManager[_0x5d57ff(0x737)]=function(_0x14dfaa){const _0x176ebc=_0x5d57ff;_0x14dfaa=String(_0x14dfaa||'')['toUpperCase']();const _0x5f4bfa=VisuMZ[_0x176ebc(0x909)][_0x176ebc(0x3d3)]['Param'];if(_0x14dfaa==='MAXHP')return $dataSystem[_0x176ebc(0x809)]['params'][0x0];if(_0x14dfaa===_0x176ebc(0x94c))return $dataSystem['terms'][_0x176ebc(0x31e)][0x1];if(_0x14dfaa===_0x176ebc(0x8fe))return $dataSystem['terms'][_0x176ebc(0x31e)][0x2];if(_0x14dfaa==='DEF')return $dataSystem['terms'][_0x176ebc(0x31e)][0x3];if(_0x14dfaa===_0x176ebc(0x362))return $dataSystem[_0x176ebc(0x809)][_0x176ebc(0x31e)][0x4];if(_0x14dfaa==='MDF')return $dataSystem[_0x176ebc(0x809)]['params'][0x5];if(_0x14dfaa===_0x176ebc(0x690))return $dataSystem[_0x176ebc(0x809)][_0x176ebc(0x31e)][0x6];if(_0x14dfaa===_0x176ebc(0x78a))return $dataSystem[_0x176ebc(0x809)][_0x176ebc(0x31e)][0x7];if(_0x14dfaa===_0x176ebc(0x591))return _0x5f4bfa[_0x176ebc(0x5d1)];if(_0x14dfaa==='EVA')return _0x5f4bfa[_0x176ebc(0x984)];if(_0x14dfaa===_0x176ebc(0x2ab))return _0x5f4bfa[_0x176ebc(0x951)];if(_0x14dfaa==='CEV')return _0x5f4bfa[_0x176ebc(0x6f5)];if(_0x14dfaa===_0x176ebc(0x847))return _0x5f4bfa['XParamVocab4'];if(_0x14dfaa===_0x176ebc(0x4a3))return _0x5f4bfa[_0x176ebc(0x757)];if(_0x14dfaa===_0x176ebc(0x8e2))return _0x5f4bfa['XParamVocab6'];if(_0x14dfaa===_0x176ebc(0x1d7))return _0x5f4bfa[_0x176ebc(0x376)];if(_0x14dfaa==='MRG')return _0x5f4bfa[_0x176ebc(0x772)];if(_0x14dfaa===_0x176ebc(0x30b))return _0x5f4bfa[_0x176ebc(0x64a)];if(_0x14dfaa===_0x176ebc(0x815))return _0x5f4bfa[_0x176ebc(0x618)];if(_0x14dfaa===_0x176ebc(0x76e))return _0x5f4bfa[_0x176ebc(0x5bd)];if(_0x14dfaa===_0x176ebc(0x876))return _0x5f4bfa[_0x176ebc(0x262)];if(_0x14dfaa===_0x176ebc(0x5a8))return _0x5f4bfa['SParamVocab3'];if(_0x14dfaa===_0x176ebc(0x967))return _0x5f4bfa[_0x176ebc(0x98a)];if(_0x14dfaa===_0x176ebc(0x8b1))return _0x5f4bfa['SParamVocab5'];if(_0x14dfaa===_0x176ebc(0x68e))return _0x5f4bfa['SParamVocab6'];if(_0x14dfaa===_0x176ebc(0x986))return _0x5f4bfa[_0x176ebc(0x94f)];if(_0x14dfaa===_0x176ebc(0x4d6))return _0x5f4bfa['SParamVocab8'];if(_0x14dfaa==='EXR')return _0x5f4bfa[_0x176ebc(0x3eb)];if(VisuMZ[_0x176ebc(0x909)][_0x176ebc(0x701)][_0x14dfaa])return VisuMZ[_0x176ebc(0x909)]['CustomParamNames'][_0x14dfaa];return'';},TextManager[_0x5d57ff(0x4b5)]=function(_0x39189c){const _0x574ab1=_0x5d57ff,_0x52fd56=Input[_0x574ab1(0x188)]();return _0x52fd56===_0x574ab1(0x576)?this[_0x574ab1(0x33e)](_0x39189c):'sStkq'!==_0x574ab1(0x796)?0x0:this[_0x574ab1(0x2d1)](_0x52fd56,_0x39189c);},TextManager[_0x5d57ff(0x33e)]=function(_0x1770dd){const _0x5d4ded=_0x5d57ff;if(_0x1770dd===_0x5d4ded(0x6f2))_0x1770dd=_0x5d4ded(0x472);if(_0x1770dd===_0x5d4ded(0x8f0))_0x1770dd=_0x5d4ded(0x472);let _0x2a0bfe=[];for(let _0x3ddf65 in Input['keyMapper']){if(_0x5d4ded(0x506)!=='OzUFS'){_0x3ddf65=Number(_0x3ddf65);if(_0x3ddf65>=0x60&&_0x3ddf65<=0x69)continue;if([0x12,0x20][_0x5d4ded(0x861)](_0x3ddf65))continue;if(_0x1770dd===Input[_0x5d4ded(0x8e6)][_0x3ddf65]){if('Ackxw'===_0x5d4ded(0x814)){if(this[_0x5d4ded(0x425)]===_0x38c8dc)this['setupCoreEngine']();return this[_0x5d4ded(0x425)];}else _0x2a0bfe[_0x5d4ded(0x1e2)](_0x3ddf65);}}else _0x3395e5[_0x5d4ded(0x2e8)](_0x5d4ded(0x7c3)),_0xe47dfb['log'](_0x35ae1d);}for(let _0x3a074a=0x0;_0x3a074a<_0x2a0bfe[_0x5d4ded(0x929)];_0x3a074a++){_0x2a0bfe[_0x3a074a]=TextManager[_0x5d4ded(0x431)][_0x2a0bfe[_0x3a074a]];}return this[_0x5d4ded(0x83a)](_0x2a0bfe);},TextManager['makeInputButtonString']=function(_0x34a913){const _0x2c460c=_0x5d57ff,_0x497a14=VisuMZ[_0x2c460c(0x909)][_0x2c460c(0x3d3)][_0x2c460c(0x1d9)],_0x3f8c1e=_0x497a14[_0x2c460c(0x482)],_0x430fc3=_0x34a913[_0x2c460c(0x8ef)](),_0x3f1fed=_0x2c460c(0x227)[_0x2c460c(0x20a)](_0x430fc3);return _0x497a14[_0x3f1fed]?_0x497a14[_0x3f1fed]:_0x3f8c1e[_0x2c460c(0x20a)](_0x430fc3);},TextManager[_0x5d57ff(0x3a8)]=function(_0x247af7,_0x55005b){const _0x1928dd=_0x5d57ff,_0x1ea7db=VisuMZ['CoreEngine'][_0x1928dd(0x3d3)]['ButtonAssist'],_0x210659=_0x1ea7db['MultiKeyFmt'],_0x10d9de=this[_0x1928dd(0x4b5)](_0x247af7),_0x1f3b9a=this[_0x1928dd(0x4b5)](_0x55005b);return _0x210659[_0x1928dd(0x20a)](_0x10d9de,_0x1f3b9a);},TextManager[_0x5d57ff(0x2d1)]=function(_0x2709fe,_0x311335){const _0x71db58=_0x5d57ff,_0x240ef2=_0x2709fe['toLowerCase']()[_0x71db58(0x7a8)](),_0xd9b9a4=VisuMZ[_0x71db58(0x909)][_0x71db58(0x3ec)][_0x240ef2];if(!_0xd9b9a4)return this['getControllerInputButtonMatch'](_0x2709fe,_0x311335);return _0xd9b9a4[_0x311335]||this[_0x71db58(0x33e)](_0x2709fe,_0x311335);},TextManager['getControllerInputButtonMatch']=function(_0x5193fe,_0x52b4){const _0x2bcfac=_0x5d57ff,_0x3dfa47=_0x5193fe[_0x2bcfac(0x427)]()[_0x2bcfac(0x7a8)]();for(const _0x1b6461 in VisuMZ[_0x2bcfac(0x909)]['ControllerMatches']){if(_0x2bcfac(0x436)===_0x2bcfac(0x27d))return _0x410f74[_0x2bcfac(0x909)][_0x2bcfac(0x3d3)][_0x2bcfac(0x1d2)]['KeyItemProtect']&&_0x854342['isKeyItem'](_0x4a6f8a)?![]:_0x30f344[_0x2bcfac(0x909)]['Window_ShopSell_isEnabled']['call'](this,_0x6444f3);else{if(_0x3dfa47[_0x2bcfac(0x861)](_0x1b6461)){if(_0x2bcfac(0x199)!==_0x2bcfac(0x975)){const _0x133731=VisuMZ[_0x2bcfac(0x909)][_0x2bcfac(0x34a)][_0x1b6461],_0x3b7823=VisuMZ[_0x2bcfac(0x909)][_0x2bcfac(0x3ec)][_0x133731];return _0x3b7823[_0x52b4]||this[_0x2bcfac(0x33e)](_0x52b4);}else _0x4c9592['prototype'][_0x2bcfac(0x74d)]['call'](this),this['updateData']();}}}return this[_0x2bcfac(0x33e)](_0x52b4);},VisuMZ['CoreEngine'][_0x5d57ff(0x298)]=ColorManager['loadWindowskin'],ColorManager['loadWindowskin']=function(){const _0x379d33=_0x5d57ff;VisuMZ[_0x379d33(0x909)][_0x379d33(0x298)][_0x379d33(0x3dd)](this),this[_0x379d33(0x370)]=this[_0x379d33(0x370)]||{};},ColorManager[_0x5d57ff(0x6fe)]=function(_0x1473e8,_0x1004aa){const _0x18d44a=_0x5d57ff;_0x1004aa=String(_0x1004aa),this['_colorCache']=this['_colorCache']||{};if(_0x1004aa[_0x18d44a(0x749)](/#(.*)/i)){if(_0x18d44a(0x778)!==_0x18d44a(0x778)){var _0x4d5f84=_0x47eddb(_0x57a81c['$1']);_0x4c3736+=_0x4d5f84;}else this[_0x18d44a(0x370)][_0x1473e8]=_0x18d44a(0x8dc)[_0x18d44a(0x20a)](String(RegExp['$1']));}else this[_0x18d44a(0x370)][_0x1473e8]=this[_0x18d44a(0x303)](Number(_0x1004aa));return this[_0x18d44a(0x370)][_0x1473e8];},ColorManager[_0x5d57ff(0x596)]=function(_0x4406ba){const _0x527276=_0x5d57ff;_0x4406ba=String(_0x4406ba);if(_0x4406ba[_0x527276(0x749)](/#(.*)/i))return _0x527276(0x8dc)['format'](String(RegExp['$1']));else{if(_0x527276(0x8c3)!=='WXdHw')return this['textColor'](Number(_0x4406ba));else{const _0x3ebaff=_0x16b04b[_0x527276(0x1dd)]||0x0;(_0x3ebaff<0x0||_0x3ebaff>0x64||_0x368c59[_0x527276(0x48a)]()||_0x54b605[_0x527276(0x47e)](_0x527276(0x6f2)))&&(_0x3b2127[_0x527276(0x1dd)]=_0x4809ea,_0xf70428[_0x527276(0x4a2)](),_0x34cc2b['clear']());const _0x40d5e5=_0x24aa23[_0x527276(0x3a0)](_0x3ebaff);return _0x40d5e5&&(_0x40d5e5['_x']=_0x448dc5['_x'],_0x40d5e5['_y']=_0x5323af['_y']),_0x5d6380[_0x527276(0x909)]['updatePictureCoordinates'](),_0xa73780[_0x527276(0x1dd)]!==_0x294d51;}}},ColorManager[_0x5d57ff(0x649)]=function(){const _0x5d4983=_0x5d57ff;this[_0x5d4983(0x370)]={};},ColorManager[_0x5d57ff(0x994)]=function(){const _0x447faf=_0x5d57ff,_0x4d3a60='_stored_normalColor';this[_0x447faf(0x370)]=this[_0x447faf(0x370)]||{};if(this[_0x447faf(0x370)][_0x4d3a60])return this[_0x447faf(0x370)][_0x4d3a60];const _0x41c6a6=VisuMZ[_0x447faf(0x909)][_0x447faf(0x3d3)][_0x447faf(0x5f4)]['ColorNormal'];return this[_0x447faf(0x6fe)](_0x4d3a60,_0x41c6a6);},ColorManager[_0x5d57ff(0x756)]=function(){const _0xf0e774=_0x5d57ff,_0x3f6ca6='_stored_systemColor';this[_0xf0e774(0x370)]=this[_0xf0e774(0x370)]||{};if(this[_0xf0e774(0x370)][_0x3f6ca6])return this[_0xf0e774(0x370)][_0x3f6ca6];const _0xe601ca=VisuMZ[_0xf0e774(0x909)][_0xf0e774(0x3d3)][_0xf0e774(0x5f4)]['ColorSystem'];return this['getColorDataFromPluginParameters'](_0x3f6ca6,_0xe601ca);},ColorManager[_0x5d57ff(0x9bf)]=function(){const _0x1e7cc0=_0x5d57ff,_0x926e61=_0x1e7cc0(0x936);this[_0x1e7cc0(0x370)]=this['_colorCache']||{};if(this[_0x1e7cc0(0x370)][_0x926e61])return this['_colorCache'][_0x926e61];const _0x405578=VisuMZ[_0x1e7cc0(0x909)][_0x1e7cc0(0x3d3)][_0x1e7cc0(0x5f4)][_0x1e7cc0(0x53a)];return this[_0x1e7cc0(0x6fe)](_0x926e61,_0x405578);},ColorManager[_0x5d57ff(0x864)]=function(){const _0x9432c7=_0x5d57ff,_0x1182cc=_0x9432c7(0x3d8);this[_0x9432c7(0x370)]=this[_0x9432c7(0x370)]||{};if(this['_colorCache'][_0x1182cc])return this[_0x9432c7(0x370)][_0x1182cc];const _0x1e43c6=VisuMZ[_0x9432c7(0x909)][_0x9432c7(0x3d3)][_0x9432c7(0x5f4)][_0x9432c7(0x2eb)];return this[_0x9432c7(0x6fe)](_0x1182cc,_0x1e43c6);},ColorManager[_0x5d57ff(0x402)]=function(){const _0x4a144d=_0x5d57ff,_0x57d90b=_0x4a144d(0x5c6);this[_0x4a144d(0x370)]=this['_colorCache']||{};if(this[_0x4a144d(0x370)][_0x57d90b])return this[_0x4a144d(0x370)][_0x57d90b];const _0x1d7123=VisuMZ['CoreEngine'][_0x4a144d(0x3d3)]['Color'][_0x4a144d(0x97a)];return this[_0x4a144d(0x6fe)](_0x57d90b,_0x1d7123);},ColorManager[_0x5d57ff(0x4ba)]=function(){const _0x18922f=_0x5d57ff,_0x4d5c01='_stored_hpGaugeColor1';this[_0x18922f(0x370)]=this[_0x18922f(0x370)]||{};if(this[_0x18922f(0x370)][_0x4d5c01])return this[_0x18922f(0x370)][_0x4d5c01];const _0x43f1ca=VisuMZ[_0x18922f(0x909)]['Settings'][_0x18922f(0x5f4)][_0x18922f(0x231)];return this[_0x18922f(0x6fe)](_0x4d5c01,_0x43f1ca);},ColorManager[_0x5d57ff(0x325)]=function(){const _0x7da04f=_0x5d57ff,_0x50d731=_0x7da04f(0x55a);this['_colorCache']=this[_0x7da04f(0x370)]||{};if(this['_colorCache'][_0x50d731])return this['_colorCache'][_0x50d731];const _0x2547ad=VisuMZ['CoreEngine'][_0x7da04f(0x3d3)]['Color']['ColorHPGauge2'];return this[_0x7da04f(0x6fe)](_0x50d731,_0x2547ad);},ColorManager[_0x5d57ff(0x347)]=function(){const _0x15efcd=_0x5d57ff,_0x1f5986=_0x15efcd(0x953);this[_0x15efcd(0x370)]=this[_0x15efcd(0x370)]||{};if(this[_0x15efcd(0x370)][_0x1f5986])return this['_colorCache'][_0x1f5986];const _0x1889e0=VisuMZ[_0x15efcd(0x909)][_0x15efcd(0x3d3)][_0x15efcd(0x5f4)][_0x15efcd(0x4ef)];return this[_0x15efcd(0x6fe)](_0x1f5986,_0x1889e0);},ColorManager[_0x5d57ff(0x235)]=function(){const _0x3f1251=_0x5d57ff,_0x288096=_0x3f1251(0x970);this['_colorCache']=this[_0x3f1251(0x370)]||{};if(this['_colorCache'][_0x288096])return this[_0x3f1251(0x370)][_0x288096];const _0x3c000c=VisuMZ[_0x3f1251(0x909)][_0x3f1251(0x3d3)][_0x3f1251(0x5f4)][_0x3f1251(0x96b)];return this[_0x3f1251(0x6fe)](_0x288096,_0x3c000c);},ColorManager[_0x5d57ff(0x475)]=function(){const _0x562002=_0x5d57ff,_0x45d89f=_0x562002(0x46f);this[_0x562002(0x370)]=this[_0x562002(0x370)]||{};if(this[_0x562002(0x370)][_0x45d89f])return this['_colorCache'][_0x45d89f];const _0x2880b3=VisuMZ[_0x562002(0x909)]['Settings'][_0x562002(0x5f4)][_0x562002(0x894)];return this['getColorDataFromPluginParameters'](_0x45d89f,_0x2880b3);},ColorManager[_0x5d57ff(0x98d)]=function(){const _0x369618=_0x5d57ff,_0x474594=_0x369618(0x4ee);this[_0x369618(0x370)]=this[_0x369618(0x370)]||{};if(this[_0x369618(0x370)][_0x474594])return this[_0x369618(0x370)][_0x474594];const _0x5f4301=VisuMZ[_0x369618(0x909)][_0x369618(0x3d3)][_0x369618(0x5f4)][_0x369618(0x419)];return this['getColorDataFromPluginParameters'](_0x474594,_0x5f4301);},ColorManager['powerDownColor']=function(){const _0x46eee4=_0x5d57ff,_0x2d5419=_0x46eee4(0x7a0);this[_0x46eee4(0x370)]=this[_0x46eee4(0x370)]||{};if(this[_0x46eee4(0x370)][_0x2d5419])return this['_colorCache'][_0x2d5419];const _0x3f57ff=VisuMZ[_0x46eee4(0x909)]['Settings'][_0x46eee4(0x5f4)][_0x46eee4(0x69f)];return this['getColorDataFromPluginParameters'](_0x2d5419,_0x3f57ff);},ColorManager['ctGaugeColor1']=function(){const _0x493639=_0x5d57ff,_0xfa0333='_stored_ctGaugeColor1';this[_0x493639(0x370)]=this[_0x493639(0x370)]||{};if(this[_0x493639(0x370)][_0xfa0333])return this[_0x493639(0x370)][_0xfa0333];const _0x294ce1=VisuMZ[_0x493639(0x909)]['Settings']['Color'][_0x493639(0x3b5)];return this[_0x493639(0x6fe)](_0xfa0333,_0x294ce1);},ColorManager['ctGaugeColor2']=function(){const _0x2c1410=_0x5d57ff,_0x25feb0='_stored_ctGaugeColor2';this['_colorCache']=this[_0x2c1410(0x370)]||{};if(this[_0x2c1410(0x370)][_0x25feb0])return this[_0x2c1410(0x370)][_0x25feb0];const _0x94d1c0=VisuMZ[_0x2c1410(0x909)][_0x2c1410(0x3d3)]['Color'][_0x2c1410(0x9e1)];return this['getColorDataFromPluginParameters'](_0x25feb0,_0x94d1c0);},ColorManager['tpGaugeColor1']=function(){const _0xf48692=_0x5d57ff,_0x4f6675=_0xf48692(0x9cf);this[_0xf48692(0x370)]=this['_colorCache']||{};if(this[_0xf48692(0x370)][_0x4f6675])return this[_0xf48692(0x370)][_0x4f6675];const _0x23de10=VisuMZ[_0xf48692(0x909)][_0xf48692(0x3d3)][_0xf48692(0x5f4)][_0xf48692(0x2b8)];return this[_0xf48692(0x6fe)](_0x4f6675,_0x23de10);},ColorManager['tpGaugeColor2']=function(){const _0x56306a=_0x5d57ff,_0x2288ec=_0x56306a(0x83b);this[_0x56306a(0x370)]=this[_0x56306a(0x370)]||{};if(this[_0x56306a(0x370)][_0x2288ec])return this[_0x56306a(0x370)][_0x2288ec];const _0x5aae70=VisuMZ[_0x56306a(0x909)][_0x56306a(0x3d3)][_0x56306a(0x5f4)][_0x56306a(0x5c9)];return this[_0x56306a(0x6fe)](_0x2288ec,_0x5aae70);},ColorManager['tpCostColor']=function(){const _0x674883=_0x5d57ff,_0x3e6de8='_stored_tpCostColor';this[_0x674883(0x370)]=this['_colorCache']||{};if(this['_colorCache'][_0x3e6de8])return this[_0x674883(0x370)][_0x3e6de8];const _0x230c19=VisuMZ[_0x674883(0x909)][_0x674883(0x3d3)][_0x674883(0x5f4)][_0x674883(0x7d9)];return this[_0x674883(0x6fe)](_0x3e6de8,_0x230c19);},ColorManager[_0x5d57ff(0x98c)]=function(){const _0x423dce=_0x5d57ff,_0x4a6283=_0x423dce(0x824);this['_colorCache']=this['_colorCache']||{};if(this[_0x423dce(0x370)][_0x4a6283])return this['_colorCache'][_0x4a6283];const _0x535112=VisuMZ[_0x423dce(0x909)]['Settings'][_0x423dce(0x5f4)][_0x423dce(0x7d9)];return this['getColorDataFromPluginParameters'](_0x4a6283,_0x535112);},ColorManager[_0x5d57ff(0x1fe)]=function(){const _0x1b6eb1=_0x5d57ff,_0x7894d1=_0x1b6eb1(0x1e3);this[_0x1b6eb1(0x370)]=this[_0x1b6eb1(0x370)]||{};if(this[_0x1b6eb1(0x370)][_0x7894d1])return this[_0x1b6eb1(0x370)][_0x7894d1];const _0x4c0505=VisuMZ[_0x1b6eb1(0x909)][_0x1b6eb1(0x3d3)]['Color']['ColorExpGauge1'];return this[_0x1b6eb1(0x6fe)](_0x7894d1,_0x4c0505);},ColorManager['expGaugeColor2']=function(){const _0x40888f=_0x5d57ff,_0x5ce613=_0x40888f(0x99c);this[_0x40888f(0x370)]=this[_0x40888f(0x370)]||{};if(this[_0x40888f(0x370)][_0x5ce613])return this[_0x40888f(0x370)][_0x5ce613];const _0x59f8e9=VisuMZ[_0x40888f(0x909)][_0x40888f(0x3d3)]['Color']['ColorExpGauge2'];return this[_0x40888f(0x6fe)](_0x5ce613,_0x59f8e9);},ColorManager[_0x5d57ff(0x6a4)]=function(){const _0x935eba=_0x5d57ff,_0x52fa04='_stored_maxLvGaugeColor1';this['_colorCache']=this['_colorCache']||{};if(this[_0x935eba(0x370)][_0x52fa04])return this[_0x935eba(0x370)][_0x52fa04];const _0x19b014=VisuMZ[_0x935eba(0x909)][_0x935eba(0x3d3)][_0x935eba(0x5f4)][_0x935eba(0x6eb)];return this[_0x935eba(0x6fe)](_0x52fa04,_0x19b014);},ColorManager[_0x5d57ff(0x1b5)]=function(){const _0x1563df=_0x5d57ff,_0x1f2c8e=_0x1563df(0x37c);this[_0x1563df(0x370)]=this[_0x1563df(0x370)]||{};if(this[_0x1563df(0x370)][_0x1f2c8e])return this['_colorCache'][_0x1f2c8e];const _0x1f55b5=VisuMZ[_0x1563df(0x909)][_0x1563df(0x3d3)][_0x1563df(0x5f4)][_0x1563df(0x70f)];return this[_0x1563df(0x6fe)](_0x1f2c8e,_0x1f55b5);},ColorManager['hpColor']=function(_0x4a36e5){const _0x1c6674=_0x5d57ff;return VisuMZ['CoreEngine'][_0x1c6674(0x3d3)][_0x1c6674(0x5f4)][_0x1c6674(0x87b)][_0x1c6674(0x3dd)](this,_0x4a36e5);},ColorManager['mpColor']=function(_0x41e7f8){const _0x355bec=_0x5d57ff;return VisuMZ[_0x355bec(0x909)]['Settings'][_0x355bec(0x5f4)][_0x355bec(0x3d6)][_0x355bec(0x3dd)](this,_0x41e7f8);},ColorManager[_0x5d57ff(0x198)]=function(_0x172bfe){const _0x137725=_0x5d57ff;return VisuMZ[_0x137725(0x909)]['Settings'][_0x137725(0x5f4)][_0x137725(0x6a7)][_0x137725(0x3dd)](this,_0x172bfe);},ColorManager[_0x5d57ff(0x63f)]=function(_0x5eea58){const _0x1ec0b1=_0x5d57ff;return VisuMZ[_0x1ec0b1(0x909)]['Settings']['Color'][_0x1ec0b1(0x49d)]['call'](this,_0x5eea58);},ColorManager[_0x5d57ff(0x4e3)]=function(_0x6d294a){const _0x19ea4f=_0x5d57ff;return VisuMZ[_0x19ea4f(0x909)][_0x19ea4f(0x3d3)][_0x19ea4f(0x5f4)]['DamageColor']['call'](this,_0x6d294a);},ColorManager[_0x5d57ff(0x308)]=function(){const _0x1ba666=_0x5d57ff;return VisuMZ[_0x1ba666(0x909)][_0x1ba666(0x3d3)][_0x1ba666(0x5f4)]['OutlineColor'];},ColorManager[_0x5d57ff(0x3df)]=function(){const _0x9ae04c=_0x5d57ff;return VisuMZ['CoreEngine']['Settings'][_0x9ae04c(0x5f4)]['OutlineColorDmg']||_0x9ae04c(0x586);},ColorManager[_0x5d57ff(0x293)]=function(){const _0xa5aca8=_0x5d57ff;return VisuMZ[_0xa5aca8(0x909)][_0xa5aca8(0x3d3)][_0xa5aca8(0x5f4)][_0xa5aca8(0x80e)]||_0xa5aca8(0x700);},ColorManager['dimColor1']=function(){const _0x3a9c20=_0x5d57ff;return VisuMZ[_0x3a9c20(0x909)][_0x3a9c20(0x3d3)][_0x3a9c20(0x5f4)][_0x3a9c20(0x681)];},ColorManager[_0x5d57ff(0x2dc)]=function(){const _0x23cc57=_0x5d57ff;return VisuMZ['CoreEngine']['Settings'][_0x23cc57(0x5f4)]['DimColor2'];},ColorManager[_0x5d57ff(0x8cc)]=function(){const _0x5d334e=_0x5d57ff;return VisuMZ[_0x5d334e(0x909)][_0x5d334e(0x3d3)][_0x5d334e(0x5f4)][_0x5d334e(0x78e)];},ColorManager[_0x5d57ff(0x44b)]=function(){const _0x205629=_0x5d57ff;return VisuMZ[_0x205629(0x909)]['Settings'][_0x205629(0x5f4)][_0x205629(0x660)];},SceneManager['_storedStack']=[],SceneManager[_0x5d57ff(0x808)]=function(){const _0x4040d1=_0x5d57ff;return this[_0x4040d1(0x90c)]&&this[_0x4040d1(0x90c)][_0x4040d1(0x8bb)]===Scene_Battle;},SceneManager[_0x5d57ff(0x9d8)]=function(){return this['_scene']&&this['_scene']['constructor']===Scene_Map;},SceneManager['isInstanceOfSceneMap']=function(){const _0x36cdd6=_0x5d57ff;return this[_0x36cdd6(0x90c)]&&this[_0x36cdd6(0x90c)]instanceof Scene_Map;},VisuMZ['CoreEngine'][_0x5d57ff(0x4d5)]=SceneManager['initialize'],SceneManager[_0x5d57ff(0x4d1)]=function(){const _0x470c41=_0x5d57ff;VisuMZ['CoreEngine'][_0x470c41(0x4d5)][_0x470c41(0x3dd)](this),this['initVisuMZCoreEngine']();},VisuMZ['CoreEngine'][_0x5d57ff(0x195)]=SceneManager[_0x5d57ff(0x5fb)],SceneManager['onKeyDown']=function(_0x4a1f64){const _0x3f8ed3=_0x5d57ff;if($gameTemp)this[_0x3f8ed3(0x57c)](_0x4a1f64);VisuMZ[_0x3f8ed3(0x909)]['SceneManager_onKeyDown'][_0x3f8ed3(0x3dd)](this,_0x4a1f64);},SceneManager[_0x5d57ff(0x57c)]=function(_0x6971f6){const _0x159621=_0x5d57ff;if(!_0x6971f6[_0x159621(0x8bc)]&&!_0x6971f6['altKey'])switch(_0x6971f6[_0x159621(0x9c7)]){case 0x54:this[_0x159621(0x17f)]();break;case 0x75:this['playTestF6']();break;case 0x76:if(Input[_0x159621(0x947)](_0x159621(0x93f))||Input[_0x159621(0x947)]('ctrl'))return;this[_0x159621(0x57e)]();break;}},SceneManager[_0x5d57ff(0x22d)]=function(){const _0x4f7cd7=_0x5d57ff;if($gameTemp[_0x4f7cd7(0x899)]()&&VisuMZ[_0x4f7cd7(0x909)][_0x4f7cd7(0x3d3)][_0x4f7cd7(0x1d2)][_0x4f7cd7(0x5e1)]){if(_0x4f7cd7(0x8eb)!==_0x4f7cd7(0x8eb)){if(_0x41725e[_0x4f7cd7(0x899)]())_0x5ab158['log'](_0xbe8daf);}else{ConfigManager[_0x4f7cd7(0x476)]!==0x0?(ConfigManager[_0x4f7cd7(0x952)]=0x0,ConfigManager['bgsVolume']=0x0,ConfigManager['meVolume']=0x0,ConfigManager[_0x4f7cd7(0x476)]=0x0):(ConfigManager['bgmVolume']=0x64,ConfigManager['bgsVolume']=0x64,ConfigManager[_0x4f7cd7(0x55f)]=0x64,ConfigManager[_0x4f7cd7(0x476)]=0x64);ConfigManager[_0x4f7cd7(0x18c)]();if(this['_scene'][_0x4f7cd7(0x8bb)]===Scene_Options){if('UDOLA'!==_0x4f7cd7(0x2e7)){if(this[_0x4f7cd7(0x90c)][_0x4f7cd7(0x49f)])this[_0x4f7cd7(0x90c)][_0x4f7cd7(0x49f)]['refresh']();if(this[_0x4f7cd7(0x90c)][_0x4f7cd7(0x37f)])this[_0x4f7cd7(0x90c)][_0x4f7cd7(0x37f)]['refresh']();}else{const _0x45169a=_0x4f7cd7(0x824);this['_colorCache']=this['_colorCache']||{};if(this[_0x4f7cd7(0x370)][_0x45169a])return this[_0x4f7cd7(0x370)][_0x45169a];const _0x887e4f=_0x3298a6[_0x4f7cd7(0x909)]['Settings'][_0x4f7cd7(0x5f4)][_0x4f7cd7(0x7d9)];return this['getColorDataFromPluginParameters'](_0x45169a,_0x887e4f);}}}}},SceneManager[_0x5d57ff(0x57e)]=function(){const _0x138ac9=_0x5d57ff;$gameTemp['isPlaytest']()&&VisuMZ[_0x138ac9(0x909)][_0x138ac9(0x3d3)][_0x138ac9(0x1d2)][_0x138ac9(0x709)]&&(_0x138ac9(0x226)===_0x138ac9(0x226)?$gameTemp[_0x138ac9(0x3bd)]=!$gameTemp['_playTestFastMode']:_0x476361+=_0xecbc2a[_0x138ac9(0x5cf)][_0x138ac9(0x416)]());},SceneManager[_0x5d57ff(0x17f)]=function(){const _0x3b7c7c=_0x5d57ff;if(!$gameTemp[_0x3b7c7c(0x899)]())return;if(!SceneManager[_0x3b7c7c(0x808)]())return;for(const _0x4881dd of $gameParty['members']()){if(!_0x4881dd)continue;_0x4881dd[_0x3b7c7c(0x9e6)](_0x4881dd[_0x3b7c7c(0x79d)]());}},SceneManager['initVisuMZCoreEngine']=function(){const _0x2ece32=_0x5d57ff;this[_0x2ece32(0x69e)]=![],this[_0x2ece32(0x5ae)]=!VisuMZ[_0x2ece32(0x909)][_0x2ece32(0x3d3)]['UI'][_0x2ece32(0x5ee)];},SceneManager[_0x5d57ff(0x514)]=function(_0x161f6b){const _0x389b47=_0x5d57ff;VisuMZ[_0x389b47(0x909)][_0x389b47(0x3d3)]['UI'][_0x389b47(0x23a)]&&(this[_0x389b47(0x69e)]=_0x161f6b);},SceneManager[_0x5d57ff(0x556)]=function(){return this['_sideButtonLayout'];},SceneManager[_0x5d57ff(0x95f)]=function(){const _0x331a63=_0x5d57ff;return this[_0x331a63(0x5ae)];},SceneManager[_0x5d57ff(0x1db)]=function(){const _0x3d1d87=_0x5d57ff;return this[_0x3d1d87(0x95f)]()||this[_0x3d1d87(0x556)]();},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x1ff)]=SceneManager[_0x5d57ff(0x890)],SceneManager['isGameActive']=function(){const _0x498365=_0x5d57ff;if(VisuMZ[_0x498365(0x909)][_0x498365(0x3d3)][_0x498365(0x1d2)]['RequireFocus'])return VisuMZ[_0x498365(0x909)][_0x498365(0x1ff)][_0x498365(0x3dd)](this);else{if(_0x498365(0x735)!==_0x498365(0x735))_0x5f40ab['CoreEngine'][_0x498365(0x8e7)][_0x498365(0x3dd)](this,_0x284c0b);else return!![];}},SceneManager[_0x5d57ff(0x6d7)]=function(_0x23e151){const _0x152358=_0x5d57ff;if(_0x23e151 instanceof Error)this[_0x152358(0x601)](_0x23e151);else _0x23e151 instanceof Array&&_0x23e151[0x0]===_0x152358(0x5c7)?this[_0x152358(0x1c0)](_0x23e151):'igdAV'!==_0x152358(0x682)?(this[_0x152358(0x8d3)]-=this[_0x152358(0x56c)](),this['isClosed']()&&(this[_0x152358(0x9df)]=![])):this[_0x152358(0x50b)](_0x23e151);this[_0x152358(0x86e)]();},VisuMZ['CoreEngine'][_0x5d57ff(0x84d)]=BattleManager[_0x5d57ff(0x88e)],BattleManager[_0x5d57ff(0x88e)]=function(){const _0x4c6c85=_0x5d57ff;if(VisuMZ[_0x4c6c85(0x909)][_0x4c6c85(0x3d3)][_0x4c6c85(0x1d2)]['EscapeAlways'])this[_0x4c6c85(0x3b7)]();else return _0x4c6c85(0x9b9)!==_0x4c6c85(0x9b9)?(_0x40a526=_0xefb835(_0x529f3c),_0x22627e[_0x4c6c85(0x749)](/#(.*)/i)?_0x4c6c85(0x8dc)[_0x4c6c85(0x20a)](_0x4c53df(_0xc2fc0a['$1'])):this[_0x4c6c85(0x303)](_0x1ad7a9(_0xd0bebb))):VisuMZ[_0x4c6c85(0x909)][_0x4c6c85(0x84d)]['call'](this);},BattleManager[_0x5d57ff(0x3b7)]=function(){const _0x32d68e=_0x5d57ff;return $gameParty[_0x32d68e(0x3f2)](),SoundManager[_0x32d68e(0x350)](),this[_0x32d68e(0x489)](),!![];},BattleManager[_0x5d57ff(0x3e6)]=function(){return $gameSystem['getBattleSystem']()>=0x1;},BattleManager[_0x5d57ff(0x1c9)]=function(){return $gameSystem['getBattleSystem']()===0x1;},VisuMZ['CoreEngine'][_0x5d57ff(0x2b2)]=Game_Temp[_0x5d57ff(0x5cf)][_0x5d57ff(0x4d1)],Game_Temp[_0x5d57ff(0x5cf)]['initialize']=function(){const _0x185d20=_0x5d57ff;VisuMZ['CoreEngine']['Game_Temp_initialize'][_0x185d20(0x3dd)](this),this['forceOutOfPlaytest'](),this[_0x185d20(0x7a9)](),this[_0x185d20(0x69a)]();},Game_Temp[_0x5d57ff(0x5cf)][_0x5d57ff(0x585)]=function(){const _0x5402e7=_0x5d57ff;if(VisuMZ[_0x5402e7(0x909)][_0x5402e7(0x3d3)][_0x5402e7(0x1d2)]['ForceNoPlayTest']){if(_0x5402e7(0x5ad)!==_0x5402e7(0x271))this[_0x5402e7(0x677)]=![];else try{const _0x5a814b=_0x1c8259[_0x5402e7(0x59e)](_0x5933e4,{'to':_0x5402e7(0x336),'level':0x1});if(_0x5a814b[_0x5402e7(0x929)]>=0xc350){}_0x459029(_0x5a814b);}catch(_0x5ca5db){_0x4f1481(_0x5ca5db);}}},Game_Temp[_0x5d57ff(0x5cf)][_0x5d57ff(0x3b9)]=function(_0x493d5f){const _0x4f1587=_0x5d57ff;this[_0x4f1587(0x8f3)]=_0x493d5f;},Game_Temp['prototype'][_0x5d57ff(0x5d3)]=function(){const _0x3b9e3e=_0x5d57ff;return this[_0x3b9e3e(0x8f3)];},Game_Temp[_0x5d57ff(0x5cf)][_0x5d57ff(0x7bb)]=function(){const _0x5daaf5=_0x5d57ff;this[_0x5daaf5(0x44e)]=undefined,this[_0x5daaf5(0x9a5)]=undefined;},Game_Temp[_0x5d57ff(0x5cf)][_0x5d57ff(0x7ba)]=function(_0x332556){const _0x6a8e1c=_0x5d57ff;$gameMap&&$dataMap&&$dataMap[_0x6a8e1c(0x957)]&&(_0x6a8e1c(0x40e)!==_0x6a8e1c(0x40e)?(_0x421241[_0x6a8e1c(0x880)](),this['requestMotion'](_0x6a8e1c(0x97e))):this[_0x6a8e1c(0x937)]($dataMap['note']));const _0x336d24=$dataTroops[_0x332556];if(_0x336d24){if(_0x6a8e1c(0x8ac)===_0x6a8e1c(0x8ac)){let _0x4a48ca=DataManager['createTroopNote'](_0x336d24['id']);this['parseForcedGameTroopSettingsCoreEngine'](_0x4a48ca);}else this[_0x6a8e1c(0x906)]['setBackgroundType'](_0x375339[_0x6a8e1c(0x604)][_0x6a8e1c(0x7e6)]);}},Game_Temp[_0x5d57ff(0x5cf)][_0x5d57ff(0x937)]=function(_0x2acefc){const _0x19cca0=_0x5d57ff;if(!_0x2acefc)return;if(_0x2acefc['match'](/<(?:FRONTVIEW|FRONT VIEW|FV)>/i))_0x19cca0(0x7b2)===_0x19cca0(0x7b2)?this[_0x19cca0(0x44e)]='FV':(this['_animationQueue']=[],this[_0x19cca0(0x428)]=[],this[_0x19cca0(0x578)]=[],this[_0x19cca0(0x75c)]=[]);else{if(_0x2acefc[_0x19cca0(0x749)](/<(?:SIDEVIEW|SIDE VIEW|SV)>/i)){if(_0x19cca0(0x7a3)==='mBHBB')return 0x3;else this[_0x19cca0(0x44e)]='SV';}else{if(_0x2acefc[_0x19cca0(0x749)](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){if(_0x19cca0(0x1f6)!==_0x19cca0(0x1f6))this[_0x19cca0(0x223)]=_0x83a46;else{const _0x614634=String(RegExp['$1']);if(_0x614634[_0x19cca0(0x749)](/(?:FRONTVIEW|FRONT VIEW|FV)/i))this[_0x19cca0(0x44e)]='FV';else _0x614634[_0x19cca0(0x749)](/(?:SIDEVIEW|SIDE VIEW|SV)/i)&&(this[_0x19cca0(0x44e)]='SV');}}}}if(_0x2acefc[_0x19cca0(0x749)](/<(?:DTB)>/i))this[_0x19cca0(0x9a5)]=0x0;else{if(_0x2acefc[_0x19cca0(0x749)](/<(?:TPB|ATB)[ ]ACTIVE>/i))this[_0x19cca0(0x9a5)]=0x1;else{if(_0x2acefc[_0x19cca0(0x749)](/<(?:TPB|ATB)[ ]WAIT>/i)){if(_0x19cca0(0x1ae)!==_0x19cca0(0x1ae))return _0x5d8b79[_0x19cca0(0x604)]['CommandRect'][_0x19cca0(0x3dd)](this);else this['_forcedBattleSys']=0x2;}else{if(_0x2acefc[_0x19cca0(0x749)](/<(?:CTB)>/i)){if(Imported[_0x19cca0(0x622)]){if(_0x19cca0(0x17e)!==_0x19cca0(0x17e)){var _0x1a63fb=_0x2e0bf2(_0x2fce45['$1']);if(_0x1a63fb===0x0)_0x1a63fb=_0x4335ae[_0x19cca0(0x6f6)];_0x1c1174=_0x59237f[_0x19cca0(0x8ee)](_0x250eed,_0x1a63fb);}else this[_0x19cca0(0x9a5)]=_0x19cca0(0x590);}}else{if(_0x2acefc['match'](/<(?:STB)>/i))Imported[_0x19cca0(0x65d)]&&(_0x19cca0(0x70a)==='hpvdi'?(this['setMoveEasingType'](_0x19cca0(0x868)),this[_0x19cca0(0x833)]=_0xad0831):this[_0x19cca0(0x9a5)]=_0x19cca0(0x1d8));else{if(_0x2acefc[_0x19cca0(0x749)](/<(?:BTB)>/i))Imported[_0x19cca0(0x24b)]&&(this['_forcedBattleSys']=_0x19cca0(0x949));else{if(_0x2acefc[_0x19cca0(0x749)](/<(?:FTB)>/i))Imported['VisuMZ_2_BattleSystemFTB']&&(_0x19cca0(0x378)===_0x19cca0(0x3d2)?(_0x49d2a5=_0x16a843[_0x19cca0(0x746)](_0x264160),_0x27fbac=_0x2433ec['round'](_0x532697),_0x3f0f5f=_0x198111[_0x19cca0(0x746)](_0x33885e),_0x9c63fd=_0x55124d[_0x19cca0(0x746)](_0x5bdcee),_0xc81902[_0x19cca0(0x909)]['Bitmap_drawText'][_0x19cca0(0x3dd)](this,_0x482e7b,_0x339dff,_0xbda084,_0x4d2bda,_0x151f8b,_0x17cdbe),this[_0x19cca0(0x48c)]()):this[_0x19cca0(0x9a5)]=_0x19cca0(0x46c));else{if(_0x2acefc[_0x19cca0(0x749)](/<(?:OTB)>/i))Imported['VisuMZ_2_BattleSystemOTB']&&(_0x19cca0(0x499)===_0x19cca0(0x499)?this[_0x19cca0(0x9a5)]=_0x19cca0(0x745):[0x6c,0x198]['includes'](_0xe76bac[_0x19cca0(0x66a)])&&(_0x49294b+='\x0a',_0x49f35c+=_0xb1374c[_0x19cca0(0x848)][0x0]));else{if(_0x2acefc['match'](/<(?:ETB)>/i))Imported[_0x19cca0(0x9e8)]&&(_0x19cca0(0x708)!==_0x19cca0(0x708)?_0x5709b8(_0x19cca0(0x7f9)):this[_0x19cca0(0x9a5)]='ETB');else{if(_0x2acefc['match'](/<(?:PTB)>/i)){if('eTfxh'==='eTfxh')Imported[_0x19cca0(0x57d)]&&(this['_forcedBattleSys']='PTB');else{if(_0x2e6470[_0x19cca0(0x548)]())return![];return this[_0x19cca0(0x7e4)]()&&this['name']()[_0x19cca0(0x2bc)](0x0)==='!';}}else{if(_0x2acefc['match'](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){const _0x4832c5=String(RegExp['$1']);if(_0x4832c5[_0x19cca0(0x749)](/DTB/i))_0x19cca0(0x480)!==_0x19cca0(0x920)?this[_0x19cca0(0x9a5)]=0x0:this['playCursorSound']();else{if(_0x4832c5[_0x19cca0(0x749)](/(?:TPB|ATB)[ ]ACTIVE/i))this[_0x19cca0(0x9a5)]=0x1;else{if(_0x4832c5[_0x19cca0(0x749)](/(?:TPB|ATB)[ ]WAIT/i))this[_0x19cca0(0x9a5)]=0x2;else{if(_0x4832c5['match'](/CTB/i))Imported[_0x19cca0(0x622)]&&(this['_forcedBattleSys']=_0x19cca0(0x590));else{if(_0x4832c5[_0x19cca0(0x749)](/STB/i))Imported['VisuMZ_2_BattleSystemSTB']&&(_0x19cca0(0x807)!==_0x19cca0(0x780)?this[_0x19cca0(0x9a5)]=_0x19cca0(0x1d8):this[_0x19cca0(0x764)]=_0x3cc60b[_0x19cca0(0x909)][_0x19cca0(0x3d3)]['Window'][_0x19cca0(0x337)]);else{if(_0x4832c5[_0x19cca0(0x749)](/BTB/i))Imported[_0x19cca0(0x24b)]&&(this[_0x19cca0(0x9a5)]='BTB');else{if(_0x4832c5[_0x19cca0(0x749)](/FTB/i))Imported['VisuMZ_2_BattleSystemFTB']&&(this[_0x19cca0(0x9a5)]=_0x19cca0(0x46c));else{if(_0x4832c5['match'](/OTB/i)){if(Imported['VisuMZ_2_BattleSystemOTB']){if('ebuUX'!==_0x19cca0(0x9a4)){this[_0x19cca0(0x1a7)]++;let _0x57ca05=_0x318e82[_0x19cca0(0x909)][_0x19cca0(0x439)](_0x286f17[_0x19cca0(0x6c4)]);_0x57ca05[_0x19cca0(0x929)]>0x0&&(_0x20b356+=_0x274518,_0xf1d40c+=_0x26bd84,_0x77a15a+=_0x19cca0(0x181)[_0x19cca0(0x20a)](_0x5c8860['id'],_0x5c454e[_0x19cca0(0x7e4)]),_0x5046cf+=_0x3b5539,_0x1015ab+=_0x57ca05,_0x5e282d+=_0x13cf58,_0x4abfbb+=_0x19cca0(0x251)[_0x19cca0(0x20a)](_0x2e42c9['id'],_0x2da747[_0x19cca0(0x7e4)]),_0x1768e0+=_0x33ff73),this['_commonEventLayers']--;}else this['_forcedBattleSys']=_0x19cca0(0x745);}}else{if(_0x4832c5[_0x19cca0(0x749)](/ETB/i)){if(_0x19cca0(0x78b)!==_0x19cca0(0x321)){if(Imported[_0x19cca0(0x9e8)]){if(_0x19cca0(0x1a3)!==_0x19cca0(0x792))this[_0x19cca0(0x9a5)]=_0x19cca0(0x84a);else{const _0x2eb353=_0x28aa5a[_0x19cca0(0x627)](_0x19cca0(0x96c)),_0x17c916=_0x8ef674[_0x19cca0(0x438)],_0x1c9db6=_0x7751a9[_0x19cca0(0x90d)],_0x13e283=_0x1fdddc%0x10*_0x17c916,_0x2f9163=_0x215c5f[_0x19cca0(0x9ca)](_0x1fb33c/0x10)*_0x1c9db6,_0x24ac2c=_0x1b9990,_0x18c6d9=_0x46aac8;this[_0x19cca0(0x452)][_0x19cca0(0x200)]['imageSmoothingEnabled']=_0x2e5d63,this[_0x19cca0(0x452)][_0x19cca0(0x801)](_0x2eb353,_0x13e283,_0x2f9163,_0x17c916,_0x1c9db6,_0x1ad46b,_0x4127e9,_0x24ac2c,_0x18c6d9),this['contents'][_0x19cca0(0x200)][_0x19cca0(0x883)]=!![];}}}else{const _0x5b765c=_0x3da3e1[_0x19cca0(0x680)],_0x557e33=0.5;if(_0x5b765c[0x0]<-_0x557e33)return!![];if(_0x5b765c[0x0]>_0x557e33)return!![];if(_0x5b765c[0x1]<-_0x557e33)return!![];if(_0x5b765c[0x1]>_0x557e33)return!![];return![];}}else{if(_0x4832c5[_0x19cca0(0x749)](/PTB/i)){if(Imported[_0x19cca0(0x57d)]){if(_0x19cca0(0x8ca)==='liQlD'){_0x3434f0[_0x19cca0(0x909)]['Scene_Battle_createSpriteset_detach'][_0x19cca0(0x3dd)](this);if(!_0x17e8b7['DETACH_PICTURE_CONTAINER'])return;const _0x37559a=this[_0x19cca0(0x928)];if(!_0x37559a)return;this[_0x19cca0(0x559)]=_0x37559a[_0x19cca0(0x559)];if(!this[_0x19cca0(0x559)])return;this[_0x19cca0(0x43b)](this['_pictureContainer']);}else this[_0x19cca0(0x9a5)]=_0x19cca0(0x407);}}}}}}}}}}}}}}}}}}}}}}},Game_Temp[_0x5d57ff(0x5cf)][_0x5d57ff(0x7a9)]=function(){const _0x166e2c=_0x5d57ff;this[_0x166e2c(0x428)]=[];},Game_Temp['prototype'][_0x5d57ff(0x2cc)]=function(_0x31fe1c,_0x46975f,_0x13806c,_0x3d68d6){const _0x558a04=_0x5d57ff;if(!this['showFauxAnimations']())return;_0x13806c=_0x13806c||![],_0x3d68d6=_0x3d68d6||![];if($dataAnimations[_0x46975f]){const _0x14d641={'targets':_0x31fe1c,'animationId':_0x46975f,'mirror':_0x13806c,'mute':_0x3d68d6};this[_0x558a04(0x428)]['push'](_0x14d641);for(const _0x2a549c of _0x31fe1c){if(_0x2a549c[_0x558a04(0x62d)]){if(_0x558a04(0x694)===_0x558a04(0x40a)){if(this['_mode']===_0x558a04(0x9d4)&&!_0x4473bb[_0x558a04(0x638)]())return;if(_0x34213d[_0x558a04(0x270)]())return;_0x2e9444['CoreEngine']['Window_NameInput_cursorDown'][_0x558a04(0x3dd)](this,_0x538be4),this[_0x558a04(0x372)](_0x558a04(0x18e));}else _0x2a549c[_0x558a04(0x62d)]();}}}},Game_Temp[_0x5d57ff(0x5cf)][_0x5d57ff(0x45d)]=function(){return!![];},Game_Temp[_0x5d57ff(0x5cf)][_0x5d57ff(0x761)]=function(){const _0x5d0c20=_0x5d57ff;return this['_fauxAnimationQueue'][_0x5d0c20(0x93f)]();},Game_Temp[_0x5d57ff(0x5cf)][_0x5d57ff(0x69a)]=function(){const _0x4a6ade=_0x5d57ff;this[_0x4a6ade(0x578)]=[];},Game_Temp[_0x5d57ff(0x5cf)][_0x5d57ff(0x589)]=function(_0x99ff71,_0x1088ac,_0x4fcf11,_0x1e4c8e,_0x4a5ef6){const _0x5f29b1=_0x5d57ff;if(!this[_0x5f29b1(0x927)]())return;_0x1e4c8e=_0x1e4c8e||![],_0x4a5ef6=_0x4a5ef6||![];if($dataAnimations[_0x4fcf11]){if(_0x5f29b1(0x931)===_0x5f29b1(0x830)){const _0x1648be=_0x18f496[_0x5f29b1(0x594)]()[_0x5f29b1(0x7e4)][_0x5f29b1(0x470)](/\\I\[(\d+)\]/gi,'');this['drawText'](_0x1648be,_0x241ca5,_0x575b64,_0x2d0758);}else{const _0x5af413={'x':_0x99ff71,'y':_0x1088ac,'animationId':_0x4fcf11,'mirror':_0x1e4c8e,'mute':_0x4a5ef6};this['_pointAnimationQueue']['push'](_0x5af413);}}},Game_Temp['prototype'][_0x5d57ff(0x927)]=function(){return!![];},Game_Temp[_0x5d57ff(0x5cf)][_0x5d57ff(0x1a6)]=function(){const _0x431e77=_0x5d57ff;return this[_0x431e77(0x578)][_0x431e77(0x93f)]();},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x7d5)]=Game_System[_0x5d57ff(0x5cf)]['initialize'],Game_System[_0x5d57ff(0x5cf)][_0x5d57ff(0x4d1)]=function(){const _0x577c15=_0x5d57ff;VisuMZ[_0x577c15(0x909)]['Game_System_initialize'][_0x577c15(0x3dd)](this),this[_0x577c15(0x728)]();},Game_System[_0x5d57ff(0x5cf)]['initCoreEngine']=function(){const _0x30acc0=_0x5d57ff;this['_CoreEngineSettings']={'SideView':$dataSystem[_0x30acc0(0x6bc)],'BattleSystem':this[_0x30acc0(0x537)](),'FontSize':$dataSystem['advanced']['fontSize'],'Padding':0xc};},Game_System['prototype'][_0x5d57ff(0x9eb)]=function(){const _0x919941=_0x5d57ff;if($gameTemp['_forcedTroopView']==='SV'){if(_0x919941(0x320)===_0x919941(0x320))return!![];else this['_x']=this['_targetX'],this['_y']=this['_targetY'],this[_0x919941(0x473)]=this[_0x919941(0x3f0)],this[_0x919941(0x224)]=this['_targetScaleY'],this['_opacity']=this[_0x919941(0x6ff)],this[_0x919941(0x4be)]&&(this['_anchor']['x']=this['_targetAnchor']['x'],this[_0x919941(0x4be)]['y']=this['_targetAnchor']['y']);}else{if($gameTemp[_0x919941(0x44e)]==='FV')return![];}if(this[_0x919941(0x802)]===undefined)this['initCoreEngine']();if(this[_0x919941(0x802)][_0x919941(0x51a)]===undefined)this[_0x919941(0x728)]();return this['_CoreEngineSettings'][_0x919941(0x51a)];},Game_System['prototype']['setSideView']=function(_0xe51b26){const _0x3e7edb=_0x5d57ff;if(this[_0x3e7edb(0x802)]===undefined)this[_0x3e7edb(0x728)]();if(this[_0x3e7edb(0x802)][_0x3e7edb(0x51a)]===undefined)this[_0x3e7edb(0x728)]();this[_0x3e7edb(0x802)][_0x3e7edb(0x51a)]=_0xe51b26;},Game_System['prototype']['resetBattleSystem']=function(){const _0x2720b4=_0x5d57ff;if(this[_0x2720b4(0x802)]===undefined)this[_0x2720b4(0x728)]();this[_0x2720b4(0x802)][_0x2720b4(0x845)]=this[_0x2720b4(0x537)]();},Game_System[_0x5d57ff(0x5cf)]['initialBattleSystem']=function(){const _0x58cfc4=_0x5d57ff,_0x120612=(VisuMZ['CoreEngine'][_0x58cfc4(0x3d3)][_0x58cfc4(0x845)]||_0x58cfc4(0x944))[_0x58cfc4(0x658)]()[_0x58cfc4(0x7a8)]();return VisuMZ[_0x58cfc4(0x909)]['CreateBattleSystemID'](_0x120612);},Game_System[_0x5d57ff(0x5cf)][_0x5d57ff(0x9b4)]=function(){const _0x2ebcda=_0x5d57ff;if($gameTemp[_0x2ebcda(0x9a5)]!==undefined)return $gameTemp[_0x2ebcda(0x9a5)];if(this['_CoreEngineSettings']===undefined)this[_0x2ebcda(0x728)]();if(this[_0x2ebcda(0x802)][_0x2ebcda(0x845)]===undefined)this['resetBattleSystem']();return this[_0x2ebcda(0x802)][_0x2ebcda(0x845)];},Game_System[_0x5d57ff(0x5cf)][_0x5d57ff(0x366)]=function(_0x234fc6){const _0x2563e6=_0x5d57ff;if(this[_0x2563e6(0x802)]===undefined)this[_0x2563e6(0x728)]();if(this[_0x2563e6(0x802)]['BattleSystem']===undefined)this[_0x2563e6(0x9bb)]();this['_CoreEngineSettings']['BattleSystem']=_0x234fc6;},Game_System['prototype']['mainFontSize']=function(){const _0x11c700=_0x5d57ff;if(this['_CoreEngineSettings']===undefined)this[_0x11c700(0x728)]();if(this[_0x11c700(0x802)][_0x11c700(0x72e)]===undefined)this[_0x11c700(0x728)]();return this['_CoreEngineSettings'][_0x11c700(0x72e)];},Game_System[_0x5d57ff(0x5cf)][_0x5d57ff(0x8f6)]=function(_0x402ffe){const _0x12da91=_0x5d57ff;if(this[_0x12da91(0x802)]===undefined)this[_0x12da91(0x728)]();if(this['_CoreEngineSettings'][_0x12da91(0x58f)]===undefined)this[_0x12da91(0x728)]();this[_0x12da91(0x802)]['FontSize']=_0x402ffe;},Game_System[_0x5d57ff(0x5cf)][_0x5d57ff(0x81b)]=function(){const _0x5d7360=_0x5d57ff;if(this[_0x5d7360(0x802)]===undefined)this[_0x5d7360(0x728)]();if(this['_CoreEngineSettings'][_0x5d7360(0x6a8)]===undefined)this[_0x5d7360(0x728)]();return this['_CoreEngineSettings'][_0x5d7360(0x6a8)];},Game_System[_0x5d57ff(0x5cf)]['setWindowPadding']=function(_0x39fa5b){const _0x5c8c25=_0x5d57ff;if(this[_0x5c8c25(0x802)]===undefined)this[_0x5c8c25(0x728)]();if(this[_0x5c8c25(0x802)][_0x5c8c25(0x58f)]===undefined)this['initCoreEngine']();this[_0x5c8c25(0x802)]['Padding']=_0x39fa5b;},VisuMZ['CoreEngine'][_0x5d57ff(0x3a6)]=Game_Screen[_0x5d57ff(0x5cf)]['initialize'],Game_Screen['prototype']['initialize']=function(){const _0x214a24=_0x5d57ff;VisuMZ['CoreEngine']['Game_Screen_initialize'][_0x214a24(0x3dd)](this),this['initCoreEngineScreenShake']();},Game_Screen['prototype'][_0x5d57ff(0x90a)]=function(){const _0x520f41=_0x5d57ff,_0x1a4d7f=VisuMZ[_0x520f41(0x909)][_0x520f41(0x3d3)]['ScreenShake'];this[_0x520f41(0x9a2)]=_0x1a4d7f?.[_0x520f41(0x7c0)]||_0x520f41(0x4ab);},Game_Screen['prototype'][_0x5d57ff(0x403)]=function(){const _0x4536b1=_0x5d57ff;if(this['_coreEngineShakeStyle']===undefined)this[_0x4536b1(0x90a)]();return this[_0x4536b1(0x9a2)];},Game_Screen[_0x5d57ff(0x5cf)][_0x5d57ff(0x283)]=function(_0x1e6414){const _0x5d3b13=_0x5d57ff;if(this['_coreEngineShakeStyle']===undefined)this[_0x5d3b13(0x90a)]();this[_0x5d3b13(0x9a2)]=_0x1e6414[_0x5d3b13(0x427)]()[_0x5d3b13(0x7a8)]();},Game_Picture[_0x5d57ff(0x5cf)]['isMapScrollLinked']=function(){const _0x5a3f06=_0x5d57ff;if($gameParty[_0x5a3f06(0x548)]())return![];return this[_0x5a3f06(0x7e4)]()&&this[_0x5a3f06(0x7e4)]()[_0x5a3f06(0x2bc)](0x0)==='!';},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x7f6)]=Game_Picture[_0x5d57ff(0x5cf)]['x'],Game_Picture['prototype']['x']=function(){const _0x17d4c5=_0x5d57ff;return this[_0x17d4c5(0x463)]()?this[_0x17d4c5(0x7ad)]():VisuMZ[_0x17d4c5(0x909)]['Game_Picture_x']['call'](this);},Game_Picture[_0x5d57ff(0x5cf)][_0x5d57ff(0x7ad)]=function(){const _0x59a9f1=_0x5d57ff,_0x48c93b=$gameMap[_0x59a9f1(0x593)]()*$gameMap[_0x59a9f1(0x363)]();return this['_x']-_0x48c93b;},VisuMZ[_0x5d57ff(0x909)]['Game_Picture_y']=Game_Picture[_0x5d57ff(0x5cf)]['y'],Game_Picture[_0x5d57ff(0x5cf)]['y']=function(){const _0x553f8a=_0x5d57ff;if(this[_0x553f8a(0x463)]())return this[_0x553f8a(0x21a)]();else{if('uBSJF'==='uBSJF')return VisuMZ[_0x553f8a(0x909)][_0x553f8a(0x48f)][_0x553f8a(0x3dd)](this);else this['_itemWindow']['setBackgroundType'](_0x248790[_0x553f8a(0x604)]['ItemBgType']);}},Game_Picture[_0x5d57ff(0x5cf)][_0x5d57ff(0x21a)]=function(){const _0x4b0394=_0x5d57ff,_0x397528=$gameMap['displayY']()*$gameMap[_0x4b0394(0x64e)]();return this['_y']-_0x397528;},Game_Picture[_0x5d57ff(0x5cf)]['setEasingType']=function(_0x185182){this['_coreEasingType']=_0x185182;},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x355)]=Game_Picture[_0x5d57ff(0x5cf)][_0x5d57ff(0x19b)],Game_Picture[_0x5d57ff(0x5cf)][_0x5d57ff(0x19b)]=function(_0x4ade2d){const _0x5175f0=_0x5d57ff;return this[_0x5175f0(0x679)]=this[_0x5175f0(0x679)]||0x0,[0x0,0x1,0x2,0x3][_0x5175f0(0x861)](this[_0x5175f0(0x679)])?VisuMZ['CoreEngine'][_0x5175f0(0x355)][_0x5175f0(0x3dd)](this,_0x4ade2d):_0x5175f0(0x37d)!==_0x5175f0(0x8cf)?VisuMZ[_0x5175f0(0x305)](_0x4ade2d,this[_0x5175f0(0x679)]):_0x185379[_0x5175f0(0x604)][_0x5175f0(0x53d)]['call'](this);},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x4e2)]=Game_Action['prototype'][_0x5d57ff(0x522)],Game_Action['prototype'][_0x5d57ff(0x522)]=function(_0x27cd79){const _0x482116=_0x5d57ff;return VisuMZ['CoreEngine']['Settings']['QoL']['ImprovedAccuracySystem']?this[_0x482116(0x77d)](_0x27cd79):VisuMZ['CoreEngine'][_0x482116(0x4e2)][_0x482116(0x3dd)](this,_0x27cd79);},Game_Action['prototype']['itemHitImprovedAccuracy']=function(_0xe3ff04){const _0x1190bc=_0x5d57ff,_0x22b475=this['itemSuccessRate'](_0xe3ff04),_0x17beea=this['subjectHitRate'](_0xe3ff04),_0x2ab021=this[_0x1190bc(0x4c5)](_0xe3ff04);return _0x22b475*(_0x17beea-_0x2ab021);},VisuMZ['CoreEngine']['Game_Action_itemEva']=Game_Action['prototype']['itemEva'],Game_Action[_0x5d57ff(0x5cf)]['itemEva']=function(_0x3bb6f3){const _0xb64b03=_0x5d57ff;return VisuMZ[_0xb64b03(0x909)][_0xb64b03(0x3d3)][_0xb64b03(0x1d2)][_0xb64b03(0x776)]?0x0:VisuMZ[_0xb64b03(0x909)][_0xb64b03(0x7ea)]['call'](this,_0x3bb6f3);},Game_Action['prototype'][_0x5d57ff(0x1bb)]=function(_0x567828){const _0xa446af=_0x5d57ff;return this[_0xa446af(0x287)]()[_0xa446af(0x184)]*0.01;},Game_Action[_0x5d57ff(0x5cf)][_0x5d57ff(0x5f1)]=function(_0x82ff47){const _0x4a9af3=_0x5d57ff;if(VisuMZ[_0x4a9af3(0x909)][_0x4a9af3(0x3d3)][_0x4a9af3(0x1d2)][_0x4a9af3(0x8b2)]&&this['isItem']())return 0x1;if(this['isPhysical']()){if('bGQWG'!==_0x4a9af3(0x41a))_0x4e63bd=_0x421980(_0x5cb04b['$1'])*_0x74f919[_0x4a9af3(0x961)],_0x598584=(0x1-_0x3e2dd8(_0x264589['$2']))*-_0x1de776;else{if(VisuMZ['CoreEngine']['Settings']['QoL'][_0x4a9af3(0x8b2)]&&this[_0x4a9af3(0x202)]()[_0x4a9af3(0x872)]())return _0x4a9af3(0x5d6)===_0x4a9af3(0x5d6)?this[_0x4a9af3(0x202)]()[_0x4a9af3(0x286)]+0.05:_0x5b8c2d[_0x4a9af3(0x909)][_0x4a9af3(0x3d3)][_0x4a9af3(0x5f4)][_0x4a9af3(0x80e)]||_0x4a9af3(0x700);else{if(_0x4a9af3(0x813)!==_0x4a9af3(0x813))this[_0x4a9af3(0x4ff)](_0x95675a,_0x2f18d3,_0x3ad369,_0x269cc4);else return this[_0x4a9af3(0x202)]()[_0x4a9af3(0x286)];}}}else{if(_0x4a9af3(0x474)==='IpiZq')return 0x1;else this['padding']=_0x237b25['_scene']['getButtonAssistLocation']()!=='button'?0x0:0x8;}},Game_Action['prototype'][_0x5d57ff(0x4c5)]=function(_0x2f247a){const _0x63880d=_0x5d57ff;if(this[_0x63880d(0x202)]()['isActor']()===_0x2f247a['isActor']())return 0x0;if(this[_0x63880d(0x492)]()){if(VisuMZ[_0x63880d(0x909)]['Settings'][_0x63880d(0x1d2)][_0x63880d(0x8b2)]&&_0x2f247a['isEnemy']())return _0x2f247a['eva']-0.05;else{if(_0x63880d(0x24e)===_0x63880d(0x760))this['_slotWindow']['setBackgroundType'](_0x337894[_0x63880d(0x604)][_0x63880d(0x3f8)]);else return _0x2f247a[_0x63880d(0x9db)];}}else{if(this[_0x63880d(0x229)]()){if(_0x63880d(0x373)===_0x63880d(0x729)){const _0x4108a8=_0x1aabae[_0x63880d(0x6b5)]();_0x4108a8>_0x15fbb0&&(_0x5216ad=_0x4108a8,this[_0x63880d(0x433)](_0x322462,_0x291f34));}else return _0x2f247a['mev'];}else return 0x0;}},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3ed)]=Game_Action['prototype'][_0x5d57ff(0x432)],Game_Action[_0x5d57ff(0x5cf)][_0x5d57ff(0x432)]=function(_0x37c089){const _0x1b1905=_0x5d57ff;VisuMZ[_0x1b1905(0x909)][_0x1b1905(0x3ed)][_0x1b1905(0x3dd)](this,_0x37c089);if(VisuMZ[_0x1b1905(0x909)][_0x1b1905(0x3d3)]['QoL'][_0x1b1905(0x776)])return;const _0x39509a=_0x37c089[_0x1b1905(0x41e)]();_0x39509a[_0x1b1905(0x566)]&&(0x1-this[_0x1b1905(0x97f)](_0x37c089)>this[_0x1b1905(0x522)](_0x37c089)&&(_0x39509a[_0x1b1905(0x566)]=![],_0x39509a[_0x1b1905(0x2c6)]=!![]));},VisuMZ[_0x5d57ff(0x909)]['Game_BattlerBase_initMembers']=Game_BattlerBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x3e5)],Game_BattlerBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x3e5)]=function(){const _0x562df7=_0x5d57ff;this[_0x562df7(0x4c4)]={},VisuMZ[_0x562df7(0x909)][_0x562df7(0x2c5)]['call'](this);},VisuMZ['CoreEngine'][_0x5d57ff(0x48d)]=Game_BattlerBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x345)],Game_BattlerBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x345)]=function(){const _0x26c28c=_0x5d57ff;this[_0x26c28c(0x4c4)]={},VisuMZ[_0x26c28c(0x909)][_0x26c28c(0x48d)]['call'](this);},Game_BattlerBase[_0x5d57ff(0x5cf)]['checkCacheKey']=function(_0x4f5528){const _0x579b15=_0x5d57ff;return this[_0x579b15(0x4c4)]=this[_0x579b15(0x4c4)]||{},this[_0x579b15(0x4c4)][_0x4f5528]!==undefined;},Game_BattlerBase['prototype'][_0x5d57ff(0x741)]=function(_0x3c7bf1){const _0x2bab8d=_0x5d57ff,_0x210771=(_0x5d0761,_0x590788)=>{const _0x3d8880=_0x35e6;if(!_0x590788)return _0x5d0761;if(_0x590788[_0x3d8880(0x957)][_0x3d8880(0x749)](VisuMZ[_0x3d8880(0x909)]['RegExp'][_0x3d8880(0x741)][_0x3c7bf1])){var _0x2b748e=Number(RegExp['$1']);_0x5d0761+=_0x2b748e;}if(_0x590788[_0x3d8880(0x957)]['match'](VisuMZ['CoreEngine'][_0x3d8880(0x640)][_0x3d8880(0x6b1)][_0x3c7bf1])){var _0x412bf1=String(RegExp['$1']);try{_0x5d0761+=eval(_0x412bf1);}catch(_0x25b308){if(_0x3d8880(0x654)==='bRFnB'){if($gameTemp[_0x3d8880(0x899)]())console[_0x3d8880(0x2e8)](_0x25b308);}else{this[_0x3d8880(0x452)]['clear']();const _0x1f4d07=_0x102435[_0x3d8880(0x1dd)],_0xf80d37=_0x456c49[_0x3d8880(0x3a0)](_0x1f4d07);if(!_0xf80d37)return;this[_0x3d8880(0x997)]=_0xf80d37[_0x3d8880(0x753)],this[_0x3d8880(0x844)]=_0xf80d37['_x'],this['_lastY']=_0xf80d37['_y'];const _0x49d301=_0x5b8a4d[_0x3d8880(0x8cc)]();this['contents'][_0x3d8880(0x4ae)](0x0,0x0,this[_0x3d8880(0x5df)],this[_0x3d8880(0x92e)],_0x49d301);const _0x1cb7a4=_0x3d8880(0x629)[_0x3d8880(0x20a)](_0xf80d37[_0x3d8880(0x753)]===0x0?_0x3d8880(0x6c7):'Center'),_0x4ea035=_0x3d8880(0x930)[_0x3d8880(0x20a)](_0xf80d37['_x']),_0x24055c='Y:\x20%1'[_0x3d8880(0x20a)](_0xf80d37['_y']),_0x110808='%1:\x20Exit\x20'[_0x3d8880(0x20a)](_0x23dcfc[_0x3d8880(0x4b5)]('cancel'));let _0x476e73=_0x25ed58[_0x3d8880(0x9ca)](this['innerWidth']/0x4);this[_0x3d8880(0x19d)](_0x1cb7a4,_0x476e73*0x0,0x0,_0x476e73),this[_0x3d8880(0x19d)](_0x4ea035,_0x476e73*0x1,0x0,_0x476e73,_0x3d8880(0x1cf)),this[_0x3d8880(0x19d)](_0x24055c,_0x476e73*0x2,0x0,_0x476e73,'center');const _0x373059=this['textSizeEx'](_0x110808)[_0x3d8880(0x961)],_0xc9761d=this[_0x3d8880(0x5df)]-_0x373059;this['drawTextEx'](_0x110808,_0xc9761d,0x0,_0x373059);}}}return _0x5d0761;};return this[_0x2bab8d(0x53b)]()[_0x2bab8d(0x535)](_0x210771,this[_0x2bab8d(0x36d)][_0x3c7bf1]);},Game_BattlerBase['prototype']['paramMax']=function(_0x20ef04){const _0x3c5744=_0x5d57ff;var _0xffcb67=_0x3c5744(0x232)+(this[_0x3c5744(0x872)]()?_0x3c5744(0x981):'Enemy')+_0x3c5744(0x9ba)+_0x20ef04;if(this[_0x3c5744(0x52a)](_0xffcb67))return this['_cache'][_0xffcb67];this[_0x3c5744(0x4c4)][_0xffcb67]=eval(VisuMZ[_0x3c5744(0x909)]['Settings'][_0x3c5744(0x185)][_0xffcb67]);const _0x5f1f84=(_0x3d75f2,_0x57063)=>{const _0x1a3e6b=_0x3c5744;if(!_0x57063)return _0x3d75f2;if(_0x57063[_0x1a3e6b(0x957)][_0x1a3e6b(0x749)](VisuMZ[_0x1a3e6b(0x909)][_0x1a3e6b(0x640)][_0x1a3e6b(0x6c6)][_0x20ef04])){var _0x5dc8cd=Number(RegExp['$1']);if(_0x5dc8cd===0x0)_0x5dc8cd=Number[_0x1a3e6b(0x6f6)];_0x3d75f2=Math[_0x1a3e6b(0x8ee)](_0x3d75f2,_0x5dc8cd);}if(_0x57063[_0x1a3e6b(0x957)][_0x1a3e6b(0x749)](VisuMZ[_0x1a3e6b(0x909)][_0x1a3e6b(0x640)][_0x1a3e6b(0x3e7)][_0x20ef04])){var _0x104448=String(RegExp['$1']);try{_0x3d75f2=Math[_0x1a3e6b(0x8ee)](_0x3d75f2,Number(eval(_0x104448)));}catch(_0x1403ac){if($gameTemp[_0x1a3e6b(0x899)]())console['log'](_0x1403ac);}}return _0x3d75f2;};if(this[_0x3c5744(0x4c4)][_0xffcb67]===0x0)this[_0x3c5744(0x4c4)][_0xffcb67]=Number['MAX_SAFE_INTEGER'];return this[_0x3c5744(0x4c4)][_0xffcb67]=this[_0x3c5744(0x53b)]()[_0x3c5744(0x535)](_0x5f1f84,this[_0x3c5744(0x4c4)][_0xffcb67]),this[_0x3c5744(0x4c4)][_0xffcb67];},Game_BattlerBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x2fd)]=function(_0x22af5d){const _0x199409=_0x5d57ff,_0x5a6e81=this['traitsPi'](Game_BattlerBase[_0x199409(0x28a)],_0x22af5d),_0x2b4bc4=(_0x5e9fa0,_0x5e3ea4)=>{const _0x31ac63=_0x199409;if(_0x31ac63(0x22f)==='NwFTQ'){if(!_0x5e3ea4)return _0x5e9fa0;if(_0x5e3ea4[_0x31ac63(0x957)][_0x31ac63(0x749)](VisuMZ[_0x31ac63(0x909)][_0x31ac63(0x640)]['paramRate1'][_0x22af5d])){var _0x5d0e64=Number(RegExp['$1'])/0x64;_0x5e9fa0*=_0x5d0e64;}if(_0x5e3ea4[_0x31ac63(0x957)][_0x31ac63(0x749)](VisuMZ['CoreEngine'][_0x31ac63(0x640)]['paramRate2'][_0x22af5d])){var _0x5d0e64=Number(RegExp['$1']);_0x5e9fa0*=_0x5d0e64;}if(_0x5e3ea4[_0x31ac63(0x957)][_0x31ac63(0x749)](VisuMZ[_0x31ac63(0x909)][_0x31ac63(0x640)][_0x31ac63(0x1c5)][_0x22af5d])){var _0x48c088=String(RegExp['$1']);try{_0x5e9fa0*=eval(_0x48c088);}catch(_0x336d1a){if($gameTemp[_0x31ac63(0x899)]())console[_0x31ac63(0x2e8)](_0x336d1a);}}return _0x5e9fa0;}else this[_0x31ac63(0x49f)]&&this[_0x31ac63(0x49f)][_0x31ac63(0x20c)](_0x44eba8[_0x31ac63(0x604)][_0x31ac63(0x84c)]);};return this[_0x199409(0x53b)]()[_0x199409(0x535)](_0x2b4bc4,_0x5a6e81);},Game_BattlerBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x635)]=function(_0x259636){const _0x29f8ed=_0x5d57ff,_0x2698a3=(_0x5919a8,_0x5de778)=>{const _0x395418=_0x35e6;if(!_0x5de778)return _0x5919a8;if(_0x5de778[_0x395418(0x957)][_0x395418(0x749)](VisuMZ['CoreEngine']['RegExp'][_0x395418(0x1a8)][_0x259636])){if('tlzfq'===_0x395418(0x29c)){var _0x2b5a81=Number(RegExp['$1']);_0x5919a8+=_0x2b5a81;}else _0x5b4ed6[_0x395418(0x909)][_0x395418(0x676)]['call'](this),this[_0x395418(0x311)](this[_0x395418(0x91b)]-0x1),_0x520b16[_0x395418(0x4a2)]();}if(_0x5de778[_0x395418(0x957)][_0x395418(0x749)](VisuMZ[_0x395418(0x909)][_0x395418(0x640)][_0x395418(0x614)][_0x259636])){if(_0x395418(0x736)===_0x395418(0x736)){var _0x429888=String(RegExp['$1']);try{_0x5919a8+=eval(_0x429888);}catch(_0x58df19){if($gameTemp[_0x395418(0x899)]())console[_0x395418(0x2e8)](_0x58df19);}}else this['_forcedBattleSys']='BTB';}return _0x5919a8;};return this[_0x29f8ed(0x53b)]()[_0x29f8ed(0x535)](_0x2698a3,0x0);},Game_BattlerBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x261)]=function(_0x12beee){const _0x5d5e72=_0x5d57ff;let _0x131fa4=_0x5d5e72(0x261)+_0x12beee+_0x5d5e72(0x299);if(this[_0x5d5e72(0x52a)](_0x131fa4))return this[_0x5d5e72(0x4c4)][_0x131fa4];return this[_0x5d5e72(0x4c4)][_0x131fa4]=Math[_0x5d5e72(0x746)](VisuMZ[_0x5d5e72(0x909)][_0x5d5e72(0x3d3)][_0x5d5e72(0x185)][_0x5d5e72(0x664)][_0x5d5e72(0x3dd)](this,_0x12beee)),this[_0x5d5e72(0x4c4)][_0x131fa4];},Game_BattlerBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x7a1)]=function(_0x5b6068){const _0xcf4f84=_0x5d57ff,_0x5774fb=(_0x579750,_0x51d287)=>{const _0x59f823=_0x35e6;if(!_0x51d287)return _0x579750;if(_0x51d287[_0x59f823(0x957)][_0x59f823(0x749)](VisuMZ[_0x59f823(0x909)][_0x59f823(0x640)][_0x59f823(0x1f8)][_0x5b6068])){if('jowtu'==='eZMEB')_0xb027f8['CoreEngine'][_0x59f823(0x51e)][_0x59f823(0x3dd)](this),_0x109e79[_0x59f823(0x5d9)](_0x59f823(0x66b),this[_0x59f823(0x4d8)][_0x59f823(0x487)](this));else{var _0x4ac391=Number(RegExp['$1'])/0x64;_0x579750+=_0x4ac391;}}if(_0x51d287[_0x59f823(0x957)][_0x59f823(0x749)](VisuMZ['CoreEngine']['RegExp'][_0x59f823(0x7ca)][_0x5b6068])){var _0x4ac391=Number(RegExp['$1']);_0x579750+=_0x4ac391;}if(_0x51d287[_0x59f823(0x957)][_0x59f823(0x749)](VisuMZ['CoreEngine'][_0x59f823(0x640)][_0x59f823(0x9a8)][_0x5b6068])){if('CDVEw'!==_0x59f823(0x36a))this['_helpWindow'][_0x59f823(0x20c)](_0x2f5b2c[_0x59f823(0x604)]['HelpBgType']);else{var _0x1d6fc4=String(RegExp['$1']);try{_0x579750+=eval(_0x1d6fc4);}catch(_0xe90667){if(_0x59f823(0x8fc)!=='pLzmh'){if($gameTemp[_0x59f823(0x899)]())console[_0x59f823(0x2e8)](_0xe90667);}else{let _0x14ccfa=_0x3383a1['round'](_0x5ee108[_0x59f823(0x961)]/0x2+0xc0);_0x14ccfa-=_0x466241[_0x59f823(0x9ca)]((_0x3491a4[_0x59f823(0x961)]-_0x14f692[_0x59f823(0x873)])/0x2),_0x14ccfa+=_0x53264b*0x20;let _0x421362=_0x18efa9[_0x59f823(0x317)]-0xc8-_0x52b270[_0x59f823(0x62e)]()*0x30;_0x421362-=_0x518e25['floor']((_0x47f226['height']-_0x4854eb[_0x59f823(0x6e2)])/0x2),_0x421362+=_0x44ffbf*0x30,this[_0x59f823(0x5cc)](_0x14ccfa,_0x421362);}}}}return _0x579750;};return this['traitObjects']()[_0xcf4f84(0x535)](_0x5774fb,0x0);},Game_BattlerBase[_0x5d57ff(0x5cf)]['xparamRate']=function(_0x654317){const _0x6b11d3=_0x5d57ff,_0xba818a=(_0x310c4f,_0x51c13e)=>{const _0x121522=_0x35e6;if('bHRbW'==='bHRbW'){if(!_0x51c13e)return _0x310c4f;if(_0x51c13e[_0x121522(0x957)][_0x121522(0x749)](VisuMZ[_0x121522(0x909)]['RegExp'][_0x121522(0x875)][_0x654317])){var _0x122a77=Number(RegExp['$1'])/0x64;_0x310c4f*=_0x122a77;}if(_0x51c13e[_0x121522(0x957)][_0x121522(0x749)](VisuMZ['CoreEngine']['RegExp'][_0x121522(0x4de)][_0x654317])){if(_0x121522(0x424)!==_0x121522(0x424))return this[_0x121522(0x2ef)][_0x121522(0x942)](_0x51588f);else{var _0x122a77=Number(RegExp['$1']);_0x310c4f*=_0x122a77;}}if(_0x51c13e[_0x121522(0x957)]['match'](VisuMZ[_0x121522(0x909)][_0x121522(0x640)][_0x121522(0x2f8)][_0x654317])){if(_0x121522(0x4d2)===_0x121522(0x1ac)){if(!this['isCursorMovable']())return;_0x557130['isNumpadPressed']()?this[_0x121522(0x20b)]():_0x1d0212[_0x121522(0x5cf)]['processCursorMove'][_0x121522(0x3dd)](this);}else{var _0x5548c6=String(RegExp['$1']);try{_0x121522(0x94a)===_0x121522(0x7b8)?this[_0x121522(0x9a5)]=_0x121522(0x46c):_0x310c4f*=eval(_0x5548c6);}catch(_0x577a53){if($gameTemp[_0x121522(0x899)]())console['log'](_0x577a53);}}}return _0x310c4f;}else return this[_0x121522(0x463)]()?this[_0x121522(0x7ad)]():_0x5216dc[_0x121522(0x909)][_0x121522(0x7f6)][_0x121522(0x3dd)](this);};return this[_0x6b11d3(0x53b)]()[_0x6b11d3(0x535)](_0xba818a,0x1);},Game_BattlerBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x9b0)]=function(_0x1bbbb7){const _0x3e2872=_0x5d57ff,_0x3714e9=(_0x2050c6,_0x2cfb54)=>{const _0x4e010e=_0x35e6;if(!_0x2cfb54)return _0x2050c6;if(_0x2cfb54[_0x4e010e(0x957)]['match'](VisuMZ[_0x4e010e(0x909)][_0x4e010e(0x640)][_0x4e010e(0x668)][_0x1bbbb7])){var _0x189d51=Number(RegExp['$1'])/0x64;_0x2050c6+=_0x189d51;}if(_0x2cfb54['note'][_0x4e010e(0x749)](VisuMZ[_0x4e010e(0x909)][_0x4e010e(0x640)][_0x4e010e(0x29e)][_0x1bbbb7])){if('Upfjk'!=='Kkbbn'){var _0x189d51=Number(RegExp['$1']);_0x2050c6+=_0x189d51;}else return _0x2afc57&&_0x44302e[_0x4e010e(0x90c)]?_0x585706['_scene'][_0x4e010e(0x988)]():!![];}if(_0x2cfb54[_0x4e010e(0x957)][_0x4e010e(0x749)](VisuMZ[_0x4e010e(0x909)][_0x4e010e(0x640)][_0x4e010e(0x2b1)][_0x1bbbb7])){var _0x1e3a19=String(RegExp['$1']);try{if('FHaZw'!==_0x4e010e(0x5dd))_0x2050c6+=eval(_0x1e3a19);else switch(_0x5af37b[_0x4e010e(0x909)][_0x4e010e(0x3d3)][_0x4e010e(0x1d2)][_0x4e010e(0x597)]){case _0x4e010e(0x656):return!![];case _0x4e010e(0x4a1):return![];default:return _0x26dd87[_0x4e010e(0x909)]['Graphics_defaultStretchMode']['call'](this);}}catch(_0x252361){if($gameTemp[_0x4e010e(0x899)]())console[_0x4e010e(0x2e8)](_0x252361);}}return _0x2050c6;};return this[_0x3e2872(0x53b)]()[_0x3e2872(0x535)](_0x3714e9,0x0);},Game_BattlerBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x3ef)]=function(_0x29d11c){const _0x344e04=_0x5d57ff;let _0x1eb568=_0x344e04(0x3ef)+_0x29d11c+_0x344e04(0x299);if(this[_0x344e04(0x52a)](_0x1eb568))return this['_cache'][_0x1eb568];return this[_0x344e04(0x4c4)][_0x1eb568]=VisuMZ[_0x344e04(0x909)][_0x344e04(0x3d3)][_0x344e04(0x185)]['XParameterFormula']['call'](this,_0x29d11c),this['_cache'][_0x1eb568];},Game_BattlerBase[_0x5d57ff(0x5cf)]['sparamPlus']=function(_0x406dbe){const _0x58afb6=_0x5d57ff,_0x365063=(_0x5da17a,_0x229be3)=>{const _0x128fb8=_0x35e6;if(_0x128fb8(0x99d)!==_0x128fb8(0x3bb)){if(!_0x229be3)return _0x5da17a;if(_0x229be3[_0x128fb8(0x957)][_0x128fb8(0x749)](VisuMZ[_0x128fb8(0x909)]['RegExp'][_0x128fb8(0x549)][_0x406dbe])){var _0x4f41f0=Number(RegExp['$1'])/0x64;_0x5da17a+=_0x4f41f0;}if(_0x229be3[_0x128fb8(0x957)]['match'](VisuMZ[_0x128fb8(0x909)][_0x128fb8(0x640)][_0x128fb8(0x42f)][_0x406dbe])){var _0x4f41f0=Number(RegExp['$1']);_0x5da17a+=_0x4f41f0;}if(_0x229be3['note'][_0x128fb8(0x749)](VisuMZ[_0x128fb8(0x909)]['RegExp'][_0x128fb8(0x28c)][_0x406dbe])){if(_0x128fb8(0x66d)===_0x128fb8(0x1de)){if(this['_CoreEngineSettings']===_0x41fee5)this['initCoreEngine']();if(this[_0x128fb8(0x802)]['BattleSystem']===_0x2f1d24)this[_0x128fb8(0x9bb)]();this[_0x128fb8(0x802)][_0x128fb8(0x845)]=_0x25569d;}else{var _0x26d6d4=String(RegExp['$1']);try{if(_0x128fb8(0x9c8)!==_0x128fb8(0x4af))_0x5da17a+=eval(_0x26d6d4);else{if(_0x24ccb0===0x8)return![];return _0x420187['CoreEngine'][_0x128fb8(0x256)][_0x128fb8(0x3dd)](this,_0x2a3fe7);}}catch(_0xc1e270){if($gameTemp[_0x128fb8(0x899)]())console['log'](_0xc1e270);}}}return _0x5da17a;}else{if(!this[_0x128fb8(0x460)])return![];return _0x5af30c['CoreEngine']['Settings'][_0x128fb8(0x2e0)][_0x128fb8(0x691)];}};return this['traitObjects']()[_0x58afb6(0x535)](_0x365063,0x0);},Game_BattlerBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x2a1)]=function(_0x10c50e){const _0x4c21f4=_0x5d57ff,_0x4e14b9=(_0x1e530c,_0x8ab9a)=>{const _0x6ac91=_0x35e6;if(!_0x8ab9a)return _0x1e530c;if(_0x8ab9a[_0x6ac91(0x957)][_0x6ac91(0x749)](VisuMZ[_0x6ac91(0x909)]['RegExp'][_0x6ac91(0x3be)][_0x10c50e])){var _0x3a780d=Number(RegExp['$1'])/0x64;_0x1e530c*=_0x3a780d;}if(_0x8ab9a['note'][_0x6ac91(0x749)](VisuMZ[_0x6ac91(0x909)]['RegExp']['sparamRate2'][_0x10c50e])){var _0x3a780d=Number(RegExp['$1']);_0x1e530c*=_0x3a780d;}if(_0x8ab9a[_0x6ac91(0x957)][_0x6ac91(0x749)](VisuMZ[_0x6ac91(0x909)][_0x6ac91(0x640)][_0x6ac91(0x38b)][_0x10c50e])){var _0x390ccf=String(RegExp['$1']);try{_0x1e530c*=eval(_0x390ccf);}catch(_0x15ffab){if($gameTemp[_0x6ac91(0x899)]())console[_0x6ac91(0x2e8)](_0x15ffab);}}return _0x1e530c;};return this['traitObjects']()[_0x4c21f4(0x535)](_0x4e14b9,0x1);},Game_BattlerBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x4b6)]=function(_0x9199af){const _0x1a6df3=(_0x53fa16,_0x3d2b00)=>{const _0x252187=_0x35e6;if(!_0x3d2b00)return _0x53fa16;if(_0x3d2b00['note'][_0x252187(0x749)](VisuMZ[_0x252187(0x909)][_0x252187(0x640)]['sparamFlat1'][_0x9199af])){var _0x193ee5=Number(RegExp['$1'])/0x64;_0x53fa16+=_0x193ee5;}if(_0x3d2b00[_0x252187(0x957)][_0x252187(0x749)](VisuMZ['CoreEngine']['RegExp'][_0x252187(0x1c6)][_0x9199af])){if('IMueE'===_0x252187(0x2d8)){var _0x193ee5=Number(RegExp['$1']);_0x53fa16+=_0x193ee5;}else _0x2d20e7['CoreEngine'][_0x252187(0x1da)][_0x252187(0x3dd)](this,_0xd62c3c,_0x158656),this[_0x252187(0x2f0)]=!(_0x1481ac['CoreEngine'][_0x252187(0x3d3)][_0x252187(0x1d2)][_0x252187(0x688)]??!![]);}if(_0x3d2b00['note'][_0x252187(0x749)](VisuMZ[_0x252187(0x909)]['RegExp'][_0x252187(0x34e)][_0x9199af])){if(_0x252187(0x443)!==_0x252187(0x29f)){var _0x36f0b6=String(RegExp['$1']);try{_0x53fa16+=eval(_0x36f0b6);}catch(_0x4ac13b){if('qUglY'!==_0x252187(0x254)){if($gameTemp[_0x252187(0x899)]())console[_0x252187(0x2e8)](_0x4ac13b);}else this['cursorPagedown']();}}else this[_0x252187(0x9a5)]=0x0;}return _0x53fa16;};return this['traitObjects']()['reduce'](_0x1a6df3,0x0);},Game_BattlerBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x6ef)]=function(_0x385678){const _0x447703=_0x5d57ff;let _0x5cd342=_0x447703(0x6ef)+_0x385678+_0x447703(0x299);if(this[_0x447703(0x52a)](_0x5cd342))return this[_0x447703(0x4c4)][_0x5cd342];return this[_0x447703(0x4c4)][_0x5cd342]=VisuMZ[_0x447703(0x909)][_0x447703(0x3d3)]['Param']['SParameterFormula']['call'](this,_0x385678),this['_cache'][_0x5cd342];},Game_BattlerBase['prototype']['paramValueByName']=function(_0x38a6e0,_0x2ba9aa){const _0x4a1e66=_0x5d57ff;if(typeof paramId===_0x4a1e66(0x486))return this['param'](_0x38a6e0);_0x38a6e0=String(_0x38a6e0||'')[_0x4a1e66(0x658)]();if(_0x38a6e0===_0x4a1e66(0x9ae))return this[_0x4a1e66(0x261)](0x0);if(_0x38a6e0===_0x4a1e66(0x94c))return this[_0x4a1e66(0x261)](0x1);if(_0x38a6e0==='ATK')return this[_0x4a1e66(0x261)](0x2);if(_0x38a6e0==='DEF')return this[_0x4a1e66(0x261)](0x3);if(_0x38a6e0===_0x4a1e66(0x362))return this['param'](0x4);if(_0x38a6e0===_0x4a1e66(0x75f))return this['param'](0x5);if(_0x38a6e0==='AGI')return this[_0x4a1e66(0x261)](0x6);if(_0x38a6e0==='LUK')return this['param'](0x7);if(_0x38a6e0===_0x4a1e66(0x591))return _0x2ba9aa?String(Math['round'](this['xparam'](0x0)*0x64))+'%':this[_0x4a1e66(0x3ef)](0x0);if(_0x38a6e0===_0x4a1e66(0x71a))return _0x2ba9aa?String(Math[_0x4a1e66(0x746)](this['xparam'](0x1)*0x64))+'%':this[_0x4a1e66(0x3ef)](0x1);if(_0x38a6e0===_0x4a1e66(0x2ab))return _0x2ba9aa?String(Math['round'](this[_0x4a1e66(0x3ef)](0x2)*0x64))+'%':this[_0x4a1e66(0x3ef)](0x2);if(_0x38a6e0===_0x4a1e66(0x887))return _0x2ba9aa?String(Math[_0x4a1e66(0x746)](this[_0x4a1e66(0x3ef)](0x3)*0x64))+'%':this[_0x4a1e66(0x3ef)](0x3);if(_0x38a6e0===_0x4a1e66(0x847))return _0x2ba9aa?String(Math['round'](this[_0x4a1e66(0x3ef)](0x4)*0x64))+'%':this[_0x4a1e66(0x3ef)](0x4);if(_0x38a6e0===_0x4a1e66(0x4a3))return _0x2ba9aa?String(Math[_0x4a1e66(0x746)](this['xparam'](0x5)*0x64))+'%':this[_0x4a1e66(0x3ef)](0x5);if(_0x38a6e0==='CNT')return _0x2ba9aa?String(Math[_0x4a1e66(0x746)](this[_0x4a1e66(0x3ef)](0x6)*0x64))+'%':this[_0x4a1e66(0x3ef)](0x6);if(_0x38a6e0==='HRG')return _0x2ba9aa?String(Math[_0x4a1e66(0x746)](this[_0x4a1e66(0x3ef)](0x7)*0x64))+'%':this[_0x4a1e66(0x3ef)](0x7);if(_0x38a6e0===_0x4a1e66(0x4bc))return _0x2ba9aa?String(Math[_0x4a1e66(0x746)](this[_0x4a1e66(0x3ef)](0x8)*0x64))+'%':this[_0x4a1e66(0x3ef)](0x8);if(_0x38a6e0===_0x4a1e66(0x30b))return _0x2ba9aa?String(Math[_0x4a1e66(0x746)](this[_0x4a1e66(0x3ef)](0x9)*0x64))+'%':this[_0x4a1e66(0x3ef)](0x9);if(_0x38a6e0==='TGR')return _0x2ba9aa?String(Math[_0x4a1e66(0x746)](this[_0x4a1e66(0x6ef)](0x0)*0x64))+'%':this['sparam'](0x0);if(_0x38a6e0===_0x4a1e66(0x76e))return _0x2ba9aa?String(Math[_0x4a1e66(0x746)](this[_0x4a1e66(0x6ef)](0x1)*0x64))+'%':this[_0x4a1e66(0x6ef)](0x1);if(_0x38a6e0===_0x4a1e66(0x876))return _0x2ba9aa?String(Math[_0x4a1e66(0x746)](this[_0x4a1e66(0x6ef)](0x2)*0x64))+'%':this[_0x4a1e66(0x6ef)](0x2);if(_0x38a6e0===_0x4a1e66(0x5a8))return _0x2ba9aa?String(Math['round'](this[_0x4a1e66(0x6ef)](0x3)*0x64))+'%':this[_0x4a1e66(0x6ef)](0x3);if(_0x38a6e0===_0x4a1e66(0x967))return _0x2ba9aa?String(Math[_0x4a1e66(0x746)](this[_0x4a1e66(0x6ef)](0x4)*0x64))+'%':this['sparam'](0x4);if(_0x38a6e0===_0x4a1e66(0x8b1))return _0x2ba9aa?String(Math[_0x4a1e66(0x746)](this[_0x4a1e66(0x6ef)](0x5)*0x64))+'%':this[_0x4a1e66(0x6ef)](0x5);if(_0x38a6e0===_0x4a1e66(0x68e))return _0x2ba9aa?String(Math[_0x4a1e66(0x746)](this['sparam'](0x6)*0x64))+'%':this[_0x4a1e66(0x6ef)](0x6);if(_0x38a6e0===_0x4a1e66(0x986))return _0x2ba9aa?String(Math[_0x4a1e66(0x746)](this[_0x4a1e66(0x6ef)](0x7)*0x64))+'%':this[_0x4a1e66(0x6ef)](0x7);if(_0x38a6e0===_0x4a1e66(0x4d6))return _0x2ba9aa?String(Math[_0x4a1e66(0x746)](this[_0x4a1e66(0x6ef)](0x8)*0x64))+'%':this[_0x4a1e66(0x6ef)](0x8);if(_0x38a6e0===_0x4a1e66(0x72a))return _0x2ba9aa?String(Math[_0x4a1e66(0x746)](this['sparam'](0x9)*0x64))+'%':this[_0x4a1e66(0x6ef)](0x9);if(VisuMZ['CoreEngine'][_0x4a1e66(0x35e)][_0x38a6e0]){if(_0x4a1e66(0x68b)!==_0x4a1e66(0x507)){const _0x17607c=VisuMZ['CoreEngine'][_0x4a1e66(0x35e)][_0x38a6e0],_0x172b7b=this[_0x17607c];return VisuMZ['CoreEngine'][_0x4a1e66(0x637)][_0x38a6e0]===_0x4a1e66(0x71b)?_0x172b7b:_0x4a1e66(0x415)!==_0x4a1e66(0x404)?_0x2ba9aa?String(Math[_0x4a1e66(0x746)](_0x172b7b*0x64))+'%':_0x172b7b:_0x2d4de8[_0x4a1e66(0x909)][_0x4a1e66(0x3d3)]['UI'][_0x4a1e66(0x779)];}else _0x2ba6de[_0x4a1e66(0x909)]['Settings'][_0x4a1e66(0x734)][_0x4a1e66(0x281)]['drawGameVersion']['call'](this);}return'';},Game_BattlerBase['prototype'][_0x5d57ff(0x732)]=function(){const _0x7af988=_0x5d57ff;return this[_0x7af988(0x2bd)]()&&this[_0x7af988(0x33f)]<this[_0x7af988(0x215)]*VisuMZ[_0x7af988(0x909)][_0x7af988(0x3d3)][_0x7af988(0x185)]['CrisisRate'];},Game_Battler[_0x5d57ff(0x5cf)][_0x5d57ff(0x804)]=function(){const _0x2696a7=_0x5d57ff;SoundManager[_0x2696a7(0x880)](),this[_0x2696a7(0x291)]('evade');},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x21c)]=Game_Actor[_0x5d57ff(0x5cf)][_0x5d57ff(0x5b8)],Game_Actor[_0x5d57ff(0x5cf)][_0x5d57ff(0x5b8)]=function(_0x40d57e){const _0x571a3e=_0x5d57ff;if(this[_0x571a3e(0x96f)]>0x63)return this[_0x571a3e(0x7ab)](_0x40d57e);return VisuMZ[_0x571a3e(0x909)][_0x571a3e(0x21c)][_0x571a3e(0x3dd)](this,_0x40d57e);},Game_Actor['prototype'][_0x5d57ff(0x7ab)]=function(_0x1fc8bd){const _0xb6dbf9=_0x5d57ff,_0xbdba85=this[_0xb6dbf9(0x594)]()[_0xb6dbf9(0x31e)][_0x1fc8bd][0x63],_0x137df9=this[_0xb6dbf9(0x594)]()[_0xb6dbf9(0x31e)][_0x1fc8bd][0x62];return _0xbdba85+(_0xbdba85-_0x137df9)*(this[_0xb6dbf9(0x96f)]-0x63);},VisuMZ[_0x5d57ff(0x909)]['Game_Actor_changeClass']=Game_Actor['prototype'][_0x5d57ff(0x6d3)],Game_Actor[_0x5d57ff(0x5cf)]['changeClass']=function(_0x491f2f,_0x4ede48){const _0x1721ad=_0x5d57ff;$gameTemp[_0x1721ad(0x4f3)]=!![],VisuMZ[_0x1721ad(0x909)]['Game_Actor_changeClass'][_0x1721ad(0x3dd)](this,_0x491f2f,_0x4ede48),$gameTemp[_0x1721ad(0x4f3)]=undefined;},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x7b7)]=Game_Actor['prototype'][_0x5d57ff(0x8f5)],Game_Actor['prototype']['levelUp']=function(){const _0x211ad0=_0x5d57ff;VisuMZ[_0x211ad0(0x909)][_0x211ad0(0x7b7)][_0x211ad0(0x3dd)](this);if(!$gameTemp[_0x211ad0(0x4f3)])this['levelUpRecovery']();},Game_Actor[_0x5d57ff(0x5cf)]['levelUpRecovery']=function(){const _0x53a5e6=_0x5d57ff;this['_cache']={};if(VisuMZ[_0x53a5e6(0x909)][_0x53a5e6(0x3d3)][_0x53a5e6(0x1d2)][_0x53a5e6(0x412)])this['_hp']=this[_0x53a5e6(0x215)];if(VisuMZ['CoreEngine'][_0x53a5e6(0x3d3)]['QoL'][_0x53a5e6(0x7e7)])this['_mp']=this[_0x53a5e6(0x533)];},Game_Actor[_0x5d57ff(0x5cf)][_0x5d57ff(0x39c)]=function(){const _0x3561a7=_0x5d57ff;if(this[_0x3561a7(0x6a0)]())return 0x1;const _0x4298a2=this[_0x3561a7(0x636)]()-this[_0x3561a7(0x9a1)](),_0x59d0be=this[_0x3561a7(0x913)]()-this[_0x3561a7(0x9a1)]();return(_0x59d0be/_0x4298a2)[_0x3561a7(0x9dc)](0x0,0x1);},Game_Actor[_0x5d57ff(0x5cf)][_0x5d57ff(0x53b)]=function(){const _0x1020b4=_0x5d57ff,_0x2f0f7c=Game_Battler['prototype'][_0x1020b4(0x53b)][_0x1020b4(0x3dd)](this);for(const _0x51efef of this[_0x1020b4(0x47c)]()){_0x51efef&&(_0x1020b4(0x2c7)!=='hVytk'?_0x2f0f7c[_0x1020b4(0x1e2)](_0x51efef):_0x4dc2f0['CoreEngine']['Game_Character_processMoveCommand'][_0x1020b4(0x3dd)](this,_0x54d4e6));}return _0x2f0f7c[_0x1020b4(0x1e2)](this[_0x1020b4(0x594)](),this[_0x1020b4(0x450)]()),_0x2f0f7c;},Object['defineProperty'](Game_Enemy[_0x5d57ff(0x5cf)],'level',{'get':function(){return this['getLevel']();},'configurable':!![]}),Game_Enemy[_0x5d57ff(0x5cf)][_0x5d57ff(0x9da)]=function(){const _0x453231=_0x5d57ff;return this['enemy']()[_0x453231(0x96f)];},Game_Enemy[_0x5d57ff(0x5cf)][_0x5d57ff(0x33a)]=function(){const _0x2096e7=_0x5d57ff;if(!this[_0x2096e7(0x513)]){if(_0x2096e7(0x6f3)!=='VyLfT'){this[_0x2096e7(0x331)]+=Math['round']((Graphics[_0x2096e7(0x317)]-0x270)/0x2),this['_screenY']-=Math[_0x2096e7(0x9ca)]((Graphics['height']-Graphics[_0x2096e7(0x6e2)])/0x2);if($gameSystem[_0x2096e7(0x9eb)]())this[_0x2096e7(0x2d0)]-=Math['floor']((Graphics['width']-Graphics['boxWidth'])/0x2);else{if(_0x2096e7(0x3ce)!==_0x2096e7(0x3ce))return'';else this['_screenX']+=Math[_0x2096e7(0x746)]((Graphics['boxWidth']-0x330)/0x2);}}else{if(_0xb2cd7a)_0x4f105d[_0x2096e7(0x653)](_0x1656b6);}}this['_repositioned']=!![];},Game_Party['prototype']['maxGold']=function(){const _0xb5c22b=_0x5d57ff;return VisuMZ[_0xb5c22b(0x909)]['Settings'][_0xb5c22b(0x211)]['GoldMax'];},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x7b6)]=Game_Party[_0x5d57ff(0x5cf)]['consumeItem'],Game_Party['prototype'][_0x5d57ff(0x456)]=function(_0x446e3c){const _0x5dc378=_0x5d57ff;if(VisuMZ['CoreEngine'][_0x5dc378(0x3d3)][_0x5dc378(0x1d2)][_0x5dc378(0x540)]&&DataManager[_0x5dc378(0x44f)](_0x446e3c))return;VisuMZ[_0x5dc378(0x909)]['Game_Party_consumeItem'][_0x5dc378(0x3dd)](this,_0x446e3c);},Game_Party[_0x5d57ff(0x5cf)]['setupBattleTestItems']=function(){const _0x1d9665=_0x5d57ff,_0x1c1582=VisuMZ['CoreEngine'][_0x1d9665(0x3d3)]['QoL'],_0x1d6a81=_0x1c1582['BTestAddedQuantity']??0x63;let _0x20dd8f=[];(_0x1c1582['BTestItems']??!![])&&(_0x1d9665(0x693)!==_0x1d9665(0x3f6)?_0x20dd8f=_0x20dd8f[_0x1d9665(0x73f)]($dataItems):_0x50b404=_0x1d9665(0x6d9)['format'](_0x44267d,_0x201115));(_0x1c1582[_0x1d9665(0x44c)]??!![])&&(_0x20dd8f=_0x20dd8f[_0x1d9665(0x73f)]($dataWeapons));if(_0x1c1582[_0x1d9665(0x196)]??!![]){if(_0x1d9665(0x58c)!==_0x1d9665(0x58c))return _0x3186cd[_0x1d9665(0x909)][_0x1d9665(0x3d3)]['QoL']['DigitGroupingDamageSprites'];else _0x20dd8f=_0x20dd8f['concat']($dataArmors);}for(const _0x2d9327 of _0x20dd8f){if(_0x1d9665(0x332)===_0x1d9665(0x296)){const _0xa90fac=_0x1d9665(0x650);this[_0x1d9665(0x370)]=this[_0x1d9665(0x370)]||{};if(this[_0x1d9665(0x370)][_0xa90fac])return this['_colorCache'][_0xa90fac];const _0x3d9cfd=_0x3a0dfe[_0x1d9665(0x909)][_0x1d9665(0x3d3)][_0x1d9665(0x5f4)][_0x1d9665(0x572)];return this[_0x1d9665(0x6fe)](_0xa90fac,_0x3d9cfd);}else{if(!_0x2d9327)continue;if(_0x2d9327['name'][_0x1d9665(0x7a8)]()<=0x0)continue;if(_0x2d9327[_0x1d9665(0x7e4)][_0x1d9665(0x749)](/-----/i))continue;this['gainItem'](_0x2d9327,_0x1d6a81);}}},VisuMZ['CoreEngine'][_0x5d57ff(0x73e)]=Game_Troop['prototype']['setup'],Game_Troop[_0x5d57ff(0x5cf)]['setup']=function(_0x4fe2fe){const _0x23ee54=_0x5d57ff;$gameTemp[_0x23ee54(0x7bb)](),$gameTemp['applyForcedGameTroopSettingsCoreEngine'](_0x4fe2fe),VisuMZ[_0x23ee54(0x909)][_0x23ee54(0x73e)][_0x23ee54(0x3dd)](this,_0x4fe2fe);},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x2a7)]=Game_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x534)],Game_Map['prototype'][_0x5d57ff(0x534)]=function(_0x5b9f55){const _0x2d6078=_0x5d57ff;VisuMZ[_0x2d6078(0x909)][_0x2d6078(0x2a7)][_0x2d6078(0x3dd)](this,_0x5b9f55),this['setupCoreEngine'](_0x5b9f55);},Game_Map['prototype'][_0x5d57ff(0x8d1)]=function(){const _0x1c8a05=_0x5d57ff;this[_0x1c8a05(0x425)]=VisuMZ['CoreEngine'][_0x1c8a05(0x3d3)][_0x1c8a05(0x1d2)][_0x1c8a05(0x1ef)]||![];if($dataMap&&$dataMap[_0x1c8a05(0x957)]){if($dataMap[_0x1c8a05(0x957)][_0x1c8a05(0x749)](/<SHOW TILE SHADOWS>/i))this[_0x1c8a05(0x425)]=![];if($dataMap[_0x1c8a05(0x957)][_0x1c8a05(0x749)](/<HIDE TILE SHADOWS>/i))this[_0x1c8a05(0x425)]=!![];}},Game_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x598)]=function(){const _0x2c52a1=_0x5d57ff;if(this[_0x2c52a1(0x425)]===undefined)this['setupCoreEngine']();return this['_hideTileShadows'];},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x787)]=Game_Character[_0x5d57ff(0x5cf)]['processMoveCommand'],Game_Character[_0x5d57ff(0x5cf)][_0x5d57ff(0x8f8)]=function(_0x23ef97){const _0x525c4f=_0x5d57ff;try{VisuMZ['CoreEngine'][_0x525c4f(0x787)][_0x525c4f(0x3dd)](this,_0x23ef97);}catch(_0x5cf014){if(_0x525c4f(0x22b)!==_0x525c4f(0x426)){if($gameTemp[_0x525c4f(0x899)]())console[_0x525c4f(0x2e8)](_0x5cf014);}else this[_0x525c4f(0x265)](_0xf38aab);}},Game_Player[_0x5d57ff(0x5cf)]['makeEncounterCount']=function(){const _0x13f63a=_0x5d57ff,_0x14f90f=$gameMap[_0x13f63a(0x2c3)]();this['_encounterCount']=Math[_0x13f63a(0x4e9)](_0x14f90f)+Math[_0x13f63a(0x4e9)](_0x14f90f)+this[_0x13f63a(0x657)]();},Game_Player['prototype'][_0x5d57ff(0x657)]=function(){const _0x300915=_0x5d57ff;if($dataMap&&$dataMap[_0x300915(0x957)]&&$dataMap[_0x300915(0x957)][_0x300915(0x749)](/<MINIMUM ENCOUNTER STEPS:[ ](\d+)>/i))return Number(RegExp['$1']);else{if(_0x300915(0x992)===_0x300915(0x6be))_0x2cda41['CoreEngine'][_0x300915(0x1b2)][_0x300915(0x3dd)](this);else return VisuMZ['CoreEngine'][_0x300915(0x3d3)]['QoL'][_0x300915(0x1d3)];}},VisuMZ['CoreEngine'][_0x5d57ff(0x71d)]=Game_Event['prototype'][_0x5d57ff(0x4ed)],Game_Event[_0x5d57ff(0x5cf)][_0x5d57ff(0x4ed)]=function(_0x2e9ea4,_0x22ab1e){const _0x528392=_0x5d57ff;if(this[_0x528392(0x71c)]()){if(_0x528392(0x80b)!=='OqAbj')return this[_0x528392(0x8ea)](_0x2e9ea4,_0x22ab1e);else{this[_0x528392(0x452)][_0x528392(0x4a2)]();if(_0x494c1d[_0x528392(0x8b8)]()){const _0x481f3d=this[_0x528392(0x5df)];this[_0x528392(0x447)](0x0,0x0,_0x481f3d,this[_0x528392(0x416)]());const _0x202dcd=this['textSizeEx'](_0x2f4a9c[_0x528392(0x8b8)]())[_0x528392(0x961)];this[_0x528392(0x76f)](_0xa4479b[_0x528392(0x8b8)](),_0x31348b[_0x528392(0x9ca)]((_0x481f3d-_0x202dcd)/0x2),0x0);}}}else return VisuMZ[_0x528392(0x909)]['Game_Event_isCollidedWithEvents'][_0x528392(0x3dd)](this,_0x2e9ea4,_0x22ab1e);},Game_Event[_0x5d57ff(0x5cf)][_0x5d57ff(0x71c)]=function(){const _0x5d9540=_0x5d57ff;return VisuMZ[_0x5d9540(0x909)][_0x5d9540(0x3d3)]['QoL'][_0x5d9540(0x26f)];},Game_Event[_0x5d57ff(0x5cf)][_0x5d57ff(0x8ea)]=function(_0x4c0190,_0x4e4314){const _0x1ff89d=_0x5d57ff;if(!this[_0x1ff89d(0x72d)]())return'NqvMg'!=='wlcel'?![]:_0x15137a;else{const _0x366380=$gameMap[_0x1ff89d(0x74c)](_0x4c0190,_0x4e4314)[_0x1ff89d(0x552)](_0x3fe9cf=>_0x3fe9cf[_0x1ff89d(0x72d)]());return _0x366380[_0x1ff89d(0x929)]>0x0;}},VisuMZ[_0x5d57ff(0x909)]['Game_Interpreter_command105']=Game_Interpreter[_0x5d57ff(0x5cf)]['command105'],Game_Interpreter[_0x5d57ff(0x5cf)][_0x5d57ff(0x5a4)]=function(_0x3f7548){const _0x6e3e76=_0x5d57ff,_0x3ba7be=this[_0x6e3e76(0x32f)]();if(_0x3ba7be[_0x6e3e76(0x749)](/\/\/[ ]SCRIPT[ ]CALL/i)){if(_0x6e3e76(0x1e4)===_0x6e3e76(0x1e4))return this['runCombinedScrollingTextAsCode'](_0x3ba7be);else _0x498a58=_0x4c3c77[_0x6e3e76(0x909)]['Scene_MenuBase_mainAreaHeight']['call'](this);}else return VisuMZ[_0x6e3e76(0x909)][_0x6e3e76(0x4d9)][_0x6e3e76(0x3dd)](this,_0x3f7548);},Game_Interpreter[_0x5d57ff(0x5cf)][_0x5d57ff(0x32f)]=function(){const _0x2b7ab6=_0x5d57ff;let _0x44ffa5='',_0x101acb=this[_0x2b7ab6(0x3aa)]+0x1;while(this[_0x2b7ab6(0x30f)][_0x101acb]&&this['_list'][_0x101acb][_0x2b7ab6(0x66a)]===0x195){_0x44ffa5+=this[_0x2b7ab6(0x30f)][_0x101acb][_0x2b7ab6(0x848)][0x0]+'\x0a',_0x101acb++;}return _0x44ffa5;},Game_Interpreter[_0x5d57ff(0x5cf)][_0x5d57ff(0x822)]=function(_0x3929cd){const _0x181da3=_0x5d57ff;try{eval(_0x3929cd);}catch(_0x416034){$gameTemp[_0x181da3(0x899)]()&&(console[_0x181da3(0x2e8)](_0x181da3(0x570)),console[_0x181da3(0x2e8)](_0x416034));}return!![];},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x8f4)]=Game_Interpreter[_0x5d57ff(0x5cf)]['command111'],Game_Interpreter[_0x5d57ff(0x5cf)]['command111']=function(_0x23adf4){const _0x121727=_0x5d57ff;try{if(_0x121727(0x6b4)!=='BXGYw')VisuMZ[_0x121727(0x909)][_0x121727(0x8f4)][_0x121727(0x3dd)](this,_0x23adf4);else{if(this[_0x121727(0x5ec)]===_0x121727(0x9d4)){this[_0x121727(0x452)][_0x121727(0x4a2)](),this['contentsBack'][_0x121727(0x4a2)](),this[_0x121727(0x850)]();let _0x354f76=_0x331ce7[_0x121727(0x909)][_0x121727(0x3d3)][_0x121727(0x2e0)][_0x121727(0x820)][_0x121727(0x643)]('\x0a'),_0x19e570=_0x354f76['length'],_0x1a2dff=(this['innerHeight']-_0x19e570*this[_0x121727(0x416)]())/0x2;for(let _0xe2a95f=0x0;_0xe2a95f<_0x19e570;++_0xe2a95f){let _0x514890=_0x354f76[_0xe2a95f],_0x552c9f=this[_0x121727(0x7d3)](_0x514890)['width'],_0xe7adad=_0x17aeb8[_0x121727(0x9ca)]((this[_0x121727(0x452)][_0x121727(0x961)]-_0x552c9f)/0x2);this[_0x121727(0x76f)](_0x514890,_0xe7adad,_0x1a2dff),_0x1a2dff+=this[_0x121727(0x416)]();}}else _0x5aedc7['CoreEngine']['Window_NameInput_refresh'][_0x121727(0x3dd)](this);}}catch(_0x1ceb99){$gameTemp[_0x121727(0x899)]()&&(console[_0x121727(0x2e8)](_0x121727(0x7c3)),console['log'](_0x1ceb99)),this[_0x121727(0x5ce)]();}return!![];},VisuMZ['CoreEngine'][_0x5d57ff(0x8e7)]=Game_Interpreter[_0x5d57ff(0x5cf)][_0x5d57ff(0x342)],Game_Interpreter['prototype'][_0x5d57ff(0x342)]=function(_0x312c45){const _0x415deb=_0x5d57ff;try{VisuMZ[_0x415deb(0x909)]['Game_Interpreter_command122']['call'](this,_0x312c45);}catch(_0x504e46){$gameTemp[_0x415deb(0x899)]()&&(console[_0x415deb(0x2e8)](_0x415deb(0x991)),console[_0x415deb(0x2e8)](_0x504e46));}return!![];},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x194)]=Game_Interpreter[_0x5d57ff(0x5cf)][_0x5d57ff(0x3ba)],Game_Interpreter[_0x5d57ff(0x5cf)][_0x5d57ff(0x3ba)]=function(){const _0x54c1a7=_0x5d57ff;try{VisuMZ[_0x54c1a7(0x909)][_0x54c1a7(0x194)]['call'](this);}catch(_0x12bb7d){if(_0x54c1a7(0x247)==='mUtrZ')$gameTemp['isPlaytest']()&&(console[_0x54c1a7(0x2e8)](_0x54c1a7(0x611)),console[_0x54c1a7(0x2e8)](_0x12bb7d));else return![];}return!![];},VisuMZ['CoreEngine']['Game_Interpreter_PluginCommand']=Game_Interpreter[_0x5d57ff(0x5cf)][_0x5d57ff(0x789)],Game_Interpreter[_0x5d57ff(0x5cf)][_0x5d57ff(0x789)]=function(_0xa54253){const _0xa102d3=_0x5d57ff;return $gameTemp['setLastPluginCommandInterpreter'](this),VisuMZ[_0xa102d3(0x909)]['Game_Interpreter_PluginCommand']['call'](this,_0xa54253);},Scene_Base[_0x5d57ff(0x5cf)]['fadeSpeed']=function(){const _0x5ee732=_0x5d57ff;return VisuMZ['CoreEngine']['Settings']['UI'][_0x5ee732(0x779)];},Scene_Base['prototype'][_0x5d57ff(0x564)]=function(){const _0x2d0f90=_0x5d57ff;return VisuMZ[_0x2d0f90(0x909)][_0x2d0f90(0x3d3)]['UI'][_0x2d0f90(0x855)];},Scene_Base[_0x5d57ff(0x5cf)]['isBottomButtonMode']=function(){const _0x5d9ce8=_0x5d57ff;return VisuMZ[_0x5d9ce8(0x909)][_0x5d9ce8(0x3d3)]['UI'][_0x5d9ce8(0x4dd)];},Scene_Base['prototype'][_0x5d57ff(0x397)]=function(){const _0x1058a=_0x5d57ff;return VisuMZ[_0x1058a(0x909)][_0x1058a(0x3d3)]['UI'][_0x1058a(0x707)];},Scene_Base['prototype'][_0x5d57ff(0x61d)]=function(){const _0x14cb3c=_0x5d57ff;return VisuMZ[_0x14cb3c(0x909)][_0x14cb3c(0x3d3)]['UI'][_0x14cb3c(0x70c)];},Scene_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x7cd)]=function(){const _0x1d7b3a=_0x5d57ff;return VisuMZ[_0x1d7b3a(0x909)][_0x1d7b3a(0x3d3)]['UI'][_0x1d7b3a(0x9b1)];},Scene_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x988)]=function(){const _0x4b3303=_0x5d57ff;return VisuMZ[_0x4b3303(0x909)][_0x4b3303(0x3d3)]['Window'][_0x4b3303(0x2f6)];},VisuMZ['CoreEngine']['Scene_Base_createWindowLayer']=Scene_Base['prototype'][_0x5d57ff(0x1b3)],Scene_Base[_0x5d57ff(0x5cf)]['createWindowLayer']=function(){const _0x2937a0=_0x5d57ff;VisuMZ[_0x2937a0(0x909)]['Scene_Base_createWindowLayer'][_0x2937a0(0x3dd)](this),this['createButtonAssistWindow'](),this[_0x2937a0(0x2e1)]['x']=Math[_0x2937a0(0x746)](this[_0x2937a0(0x2e1)]['x']),this[_0x2937a0(0x2e1)]['y']=Math[_0x2937a0(0x746)](this[_0x2937a0(0x2e1)]['y']);},Scene_Base['prototype'][_0x5d57ff(0x54f)]=function(){},Scene_Base['prototype'][_0x5d57ff(0x2af)]=function(){const _0x5242ca=_0x5d57ff;return TextManager[_0x5242ca(0x3a8)]('pageup',_0x5242ca(0x4f8));},Scene_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x5a7)]=function(){const _0x48f07a=_0x5d57ff;return TextManager[_0x48f07a(0x4b5)](_0x48f07a(0x5e7));},Scene_Base[_0x5d57ff(0x5cf)]['buttonAssistKey3']=function(){const _0x32c400=_0x5d57ff;return TextManager[_0x32c400(0x4b5)](_0x32c400(0x93f));},Scene_Base['prototype'][_0x5d57ff(0x67f)]=function(){const _0x38e9e7=_0x5d57ff;return TextManager[_0x38e9e7(0x4b5)]('ok');},Scene_Base[_0x5d57ff(0x5cf)]['buttonAssistKey5']=function(){const _0x18afe7=_0x5d57ff;return TextManager['getInputButtonString'](_0x18afe7(0x6f2));},Scene_Base['prototype']['buttonAssistText1']=function(){const _0x429f25=_0x5d57ff;return this['_pageupButton']&&this[_0x429f25(0x5c8)][_0x429f25(0x206)]?TextManager['buttonAssistSwitch']:'';},Scene_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x6a3)]=function(){return'';},Scene_Base[_0x5d57ff(0x5cf)]['buttonAssistText3']=function(){return'';},Scene_Base['prototype'][_0x5d57ff(0x4c2)]=function(){return TextManager['buttonAssistOk'];},Scene_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x406)]=function(){return TextManager['buttonAssistCancel'];},Scene_Base['prototype']['buttonAssistOffset1']=function(){return 0x0;},Scene_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x3b4)]=function(){return 0x0;},Scene_Base['prototype'][_0x5d57ff(0x7e0)]=function(){return 0x0;},Scene_Base['prototype'][_0x5d57ff(0x6b7)]=function(){return 0x0;},Scene_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x2c2)]=function(){return 0x0;},VisuMZ[_0x5d57ff(0x909)]['Scene_Boot_loadSystemImages']=Scene_Boot[_0x5d57ff(0x5cf)][_0x5d57ff(0x524)],Scene_Boot[_0x5d57ff(0x5cf)][_0x5d57ff(0x524)]=function(){const _0x425f1e=_0x5d57ff;VisuMZ[_0x425f1e(0x909)][_0x425f1e(0x879)][_0x425f1e(0x3dd)](this),this['loadGameImagesCoreEngine']();},Scene_Boot[_0x5d57ff(0x5cf)][_0x5d57ff(0x854)]=function(){const _0x4c6c36=_0x5d57ff,_0x5f7e4b=[_0x4c6c36(0x93c),'battlebacks1','battlebacks2','characters','enemies',_0x4c6c36(0x963),_0x4c6c36(0x2a8),_0x4c6c36(0x2f9),_0x4c6c36(0x7cf),_0x4c6c36(0x74b),'system',_0x4c6c36(0x24f),_0x4c6c36(0x458),_0x4c6c36(0x6c2)];for(const _0x26ce29 of _0x5f7e4b){const _0x19211b=VisuMZ['CoreEngine'][_0x4c6c36(0x3d3)][_0x4c6c36(0x497)][_0x26ce29],_0x8c7d79=_0x4c6c36(0x2ec)[_0x4c6c36(0x20a)](_0x26ce29);for(const _0x1ea6bc of _0x19211b){ImageManager[_0x4c6c36(0x244)](_0x8c7d79,_0x1ea6bc);}}},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x914)]=Scene_Boot[_0x5d57ff(0x5cf)]['startNormalGame'],Scene_Boot[_0x5d57ff(0x5cf)]['startNormalGame']=function(){const _0x5d8b37=_0x5d57ff;Utils[_0x5d8b37(0x840)]('test')&&VisuMZ[_0x5d8b37(0x909)][_0x5d8b37(0x3d3)][_0x5d8b37(0x1d2)][_0x5d8b37(0x54d)]?this[_0x5d8b37(0x47d)]():'CeAyF'!==_0x5d8b37(0x3bf)?this['_opening']=![]:VisuMZ[_0x5d8b37(0x909)][_0x5d8b37(0x914)][_0x5d8b37(0x3dd)](this);},Scene_Boot[_0x5d57ff(0x5cf)][_0x5d57ff(0x47d)]=function(){const _0x2948f2=_0x5d57ff;DataManager['setupNewGame'](),SceneManager[_0x2948f2(0x399)](Scene_Map);},Scene_Boot['prototype'][_0x5d57ff(0x258)]=function(){const _0x212085=_0x5d57ff,_0x1553e7=$dataSystem[_0x212085(0x4aa)][_0x212085(0x75d)],_0x164fd3=$dataSystem['advanced'][_0x212085(0x603)],_0x507dad=VisuMZ[_0x212085(0x909)][_0x212085(0x3d3)]['UI'][_0x212085(0x60e)];Graphics[_0x212085(0x873)]=_0x1553e7-_0x507dad*0x2,Graphics[_0x212085(0x6e2)]=_0x164fd3-_0x507dad*0x2,this[_0x212085(0x9b2)]();},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x324)]=Scene_Boot[_0x5d57ff(0x5cf)][_0x5d57ff(0x3fe)],Scene_Boot['prototype'][_0x5d57ff(0x3fe)]=function(){const _0x126288=_0x5d57ff;this['isFullDocumentTitle']()?this[_0x126288(0x245)]():_0x126288(0x6da)!==_0x126288(0x6da)?this[_0x126288(0x3c3)](_0x127139):VisuMZ[_0x126288(0x909)][_0x126288(0x324)][_0x126288(0x3dd)](this);},Scene_Boot[_0x5d57ff(0x5cf)][_0x5d57ff(0x932)]=function(){const _0x11bd10=_0x5d57ff;if(Scene_Title['subtitle']==='')return![];if(Scene_Title['subtitle']==='Subtitle')return![];if(Scene_Title['version']==='')return![];if(Scene_Title['version']===_0x11bd10(0x8a0))return![];return!![];},Scene_Boot['prototype']['makeDocumentTitle']=function(){const _0x5be5c7=_0x5d57ff,_0x3446f0=$dataSystem[_0x5be5c7(0x77c)],_0x1e5401=Scene_Title[_0x5be5c7(0x5e8)]||'',_0x26bd00=Scene_Title[_0x5be5c7(0x28d)]||'',_0x12fe2e=VisuMZ[_0x5be5c7(0x909)][_0x5be5c7(0x3d3)]['MenuLayout']['Title'][_0x5be5c7(0x567)],_0x1569f1=_0x12fe2e['format'](_0x3446f0,_0x1e5401,_0x26bd00);document[_0x5be5c7(0x50c)]=_0x1569f1;},Scene_Boot[_0x5d57ff(0x5cf)][_0x5d57ff(0x9b2)]=function(){const _0x173c51=_0x5d57ff;if(VisuMZ[_0x173c51(0x909)][_0x173c51(0x3d3)]['UI'][_0x173c51(0x23a)]){if('soQBr'!==_0x173c51(0x783)){const _0x130f32=Graphics['width']-Graphics[_0x173c51(0x873)]-VisuMZ[_0x173c51(0x909)][_0x173c51(0x3d3)]['UI'][_0x173c51(0x60e)]*0x2,_0x94390b=Sprite_Button[_0x173c51(0x5cf)][_0x173c51(0x92d)][_0x173c51(0x3dd)](this)*0x4;if(_0x130f32>=_0x94390b)SceneManager[_0x173c51(0x514)](!![]);}else{if(this['_CoreEngineSettings']===_0x2aa1ae)this['initCoreEngine']();if(this[_0x173c51(0x802)][_0x173c51(0x72e)]===_0x214f22)this[_0x173c51(0x728)]();return this[_0x173c51(0x802)]['FontSize'];}}},Scene_Title[_0x5d57ff(0x5e8)]=VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3d3)][_0x5d57ff(0x734)][_0x5d57ff(0x281)][_0x5d57ff(0x4b1)],Scene_Title['version']=VisuMZ['CoreEngine'][_0x5d57ff(0x3d3)][_0x5d57ff(0x734)][_0x5d57ff(0x281)][_0x5d57ff(0x26a)],Scene_Title[_0x5d57ff(0x7e9)]=VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3d3)][_0x5d57ff(0x670)],VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x9e3)]=Scene_Title[_0x5d57ff(0x5cf)][_0x5d57ff(0x388)],Scene_Title[_0x5d57ff(0x5cf)]['drawGameTitle']=function(){const _0x5dadc0=_0x5d57ff;VisuMZ[_0x5dadc0(0x909)][_0x5dadc0(0x3d3)]['MenuLayout']['Title'][_0x5dadc0(0x388)][_0x5dadc0(0x3dd)](this);if(Scene_Title[_0x5dadc0(0x5e8)]!==''&&Scene_Title[_0x5dadc0(0x5e8)]!==_0x5dadc0(0x4b1))this[_0x5dadc0(0x6bf)]();if(Scene_Title[_0x5dadc0(0x28d)]!==''&&Scene_Title[_0x5dadc0(0x28d)]!==_0x5dadc0(0x8a0))this[_0x5dadc0(0x316)]();},Scene_Title['prototype'][_0x5d57ff(0x6bf)]=function(){const _0x1afc71=_0x5d57ff;VisuMZ['CoreEngine'][_0x1afc71(0x3d3)]['MenuLayout']['Title'][_0x1afc71(0x6bf)][_0x1afc71(0x3dd)](this);},Scene_Title['prototype'][_0x5d57ff(0x316)]=function(){const _0x5a84e5=_0x5d57ff;VisuMZ[_0x5a84e5(0x909)][_0x5a84e5(0x3d3)][_0x5a84e5(0x734)][_0x5a84e5(0x281)][_0x5a84e5(0x316)][_0x5a84e5(0x3dd)](this);},Scene_Title[_0x5d57ff(0x5cf)][_0x5d57ff(0x9c5)]=function(){const _0x13b3d0=_0x5d57ff;this[_0x13b3d0(0x418)]();const _0x498e66=$dataSystem[_0x13b3d0(0x39e)]['background'],_0x33195d=this['commandWindowRect']();this[_0x13b3d0(0x8c5)]=new Window_TitleCommand(_0x33195d),this[_0x13b3d0(0x8c5)]['setBackgroundType'](_0x498e66);const _0x10e0a9=this[_0x13b3d0(0x357)]();this['_commandWindow'][_0x13b3d0(0x826)](_0x10e0a9['x'],_0x10e0a9['y'],_0x10e0a9[_0x13b3d0(0x961)],_0x10e0a9['height']),this[_0x13b3d0(0x837)](this[_0x13b3d0(0x8c5)]);},Scene_Title[_0x5d57ff(0x5cf)][_0x5d57ff(0x73d)]=function(){const _0x11d854=_0x5d57ff;return this[_0x11d854(0x8c5)]?_0x11d854(0x56e)!==_0x11d854(0x617)?this['_commandWindow']['maxItems']():this[_0x11d854(0x95f)]()||this[_0x11d854(0x556)]():VisuMZ['CoreEngine'][_0x11d854(0x3d3)]['TitleCommandList'][_0x11d854(0x929)];},Scene_Title['prototype']['commandWindowRect']=function(){const _0x535498=_0x5d57ff;return VisuMZ[_0x535498(0x909)][_0x535498(0x3d3)][_0x535498(0x734)]['Title'][_0x535498(0x40d)]['call'](this);},Scene_Title[_0x5d57ff(0x5cf)][_0x5d57ff(0x418)]=function(){const _0x3b694e=_0x5d57ff;for(const _0x4c0f13 of Scene_Title[_0x3b694e(0x7e9)]){const _0x54e0ba=new Sprite_TitlePictureButton(_0x4c0f13);this[_0x3b694e(0x43b)](_0x54e0ba);}},VisuMZ['CoreEngine'][_0x5d57ff(0x30e)]=Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x4d1)],Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x4d1)]=function(){const _0xa1423b=_0x5d57ff;VisuMZ['CoreEngine'][_0xa1423b(0x30e)][_0xa1423b(0x3dd)](this),$gameTemp['clearForcedGameTroopSettingsCoreEngine'](),this[_0xa1423b(0x481)]();},VisuMZ[_0x5d57ff(0x909)]['Scene_Map_updateMainMultiply']=Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x312)],Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x312)]=function(){const _0xb2154=_0x5d57ff;VisuMZ[_0xb2154(0x909)]['Scene_Map_updateMainMultiply'][_0xb2154(0x3dd)](this),$gameTemp['_playTestFastMode']&&!$gameMessage[_0xb2154(0x7c1)]()&&(this[_0xb2154(0x7dc)](),SceneManager['updateEffekseer']());},Scene_Map['prototype']['terminate']=function(){const _0x50d728=_0x5d57ff;Scene_Message['prototype'][_0x50d728(0x6c3)]['call'](this),!SceneManager[_0x50d728(0x782)](Scene_Battle)&&(this[_0x50d728(0x928)]['update'](),this[_0x50d728(0x544)][_0x50d728(0x989)](),this[_0x50d728(0x2e1)][_0x50d728(0x206)]=![],SceneManager[_0x50d728(0x453)]()),$gameScreen[_0x50d728(0x4e5)](),this[_0x50d728(0x481)]();},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x6fd)]=Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x645)],Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x645)]=function(){const _0x202f69=_0x5d57ff;VisuMZ[_0x202f69(0x909)][_0x202f69(0x6fd)][_0x202f69(0x3dd)](this),SceneManager[_0x202f69(0x556)]()&&this[_0x202f69(0x4e6)]();},Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x4e6)]=function(){const _0x381b8a=_0x5d57ff;this[_0x381b8a(0x724)]['x']=Graphics[_0x381b8a(0x873)]+0x4;},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x8a5)]=Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x6d8)],Scene_Map[_0x5d57ff(0x5cf)]['updateScene']=function(){const _0x4df3f6=_0x5d57ff;VisuMZ['CoreEngine'][_0x4df3f6(0x8a5)]['call'](this),this[_0x4df3f6(0x3bc)]();},Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x3bc)]=function(){const _0x3f6679=_0x5d57ff;if(Input[_0x3f6679(0x47e)]('dashToggle')){if(_0x3f6679(0x696)!==_0x3f6679(0x696))return'ETB';else ConfigManager[_0x3f6679(0x310)]=!ConfigManager[_0x3f6679(0x310)],ConfigManager[_0x3f6679(0x18c)]();}},VisuMZ[_0x5d57ff(0x909)]['Scene_Map_updateMain']=Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x7dc)],Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x7dc)]=function(){const _0x793ba7=_0x5d57ff;VisuMZ[_0x793ba7(0x909)]['Scene_Map_updateMain'][_0x793ba7(0x3dd)](this),this[_0x793ba7(0x56a)]();},Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x481)]=function(){const _0x404594=_0x5d57ff;this[_0x404594(0x35b)]=[];},Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x56a)]=function(){const _0x4f4091=_0x5d57ff;if(!this['_onceParallelInterpreters'])return;for(const _0x3a60a4 of this[_0x4f4091(0x35b)]){_0x3a60a4&&_0x3a60a4[_0x4f4091(0x74d)]();}},Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x42a)]=function(_0x4de275){const _0x4cafb5=_0x5d57ff,_0x2ffaca=$dataCommonEvents[_0x4de275];if(!_0x2ffaca)return;const _0x4593c6=new Game_OnceParallelInterpreter();this['addOnceParallelInterpreter'](_0x4593c6),_0x4593c6[_0x4cafb5(0x91c)](_0x4de275);},Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x9d7)]=function(_0x2cdb96){const _0x3d6fe4=_0x5d57ff;this[_0x3d6fe4(0x35b)]=this[_0x3d6fe4(0x35b)]||[],this[_0x3d6fe4(0x35b)][_0x3d6fe4(0x1e2)](_0x2cdb96);},Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x877)]=function(_0x5f5330){const _0x71af5=_0x5d57ff;this[_0x71af5(0x35b)]=this[_0x71af5(0x35b)]||[],this[_0x71af5(0x35b)][_0x71af5(0x277)](_0x5f5330);};function Game_OnceParallelInterpreter(){const _0x3619bf=_0x5d57ff;this[_0x3619bf(0x4d1)](...arguments);}Game_OnceParallelInterpreter[_0x5d57ff(0x5cf)]=Object[_0x5d57ff(0x2e3)](Game_Interpreter[_0x5d57ff(0x5cf)]),Game_OnceParallelInterpreter[_0x5d57ff(0x5cf)][_0x5d57ff(0x8bb)]=Game_OnceParallelInterpreter,Game_OnceParallelInterpreter['prototype'][_0x5d57ff(0x91c)]=function(_0x1f726a){const _0x542269=_0x5d57ff,_0x1a9f2c=$dataCommonEvents[_0x1f726a];_0x1a9f2c?this[_0x542269(0x534)](_0x1a9f2c[_0x542269(0x6c4)],0x0):this[_0x542269(0x6c3)]();},Game_OnceParallelInterpreter[_0x5d57ff(0x5cf)][_0x5d57ff(0x6c3)]=function(){const _0x3d0850=_0x5d57ff;if(!SceneManager['isSceneMap']())return;SceneManager['_scene'][_0x3d0850(0x877)](this),Game_Interpreter[_0x3d0850(0x5cf)][_0x3d0850(0x6c3)]['call'](this);},VisuMZ['CoreEngine'][_0x5d57ff(0x64f)]=Scene_MenuBase['prototype'][_0x5d57ff(0x659)],Scene_MenuBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x659)]=function(){const _0x5956ba=_0x5d57ff;let _0x45d7e8=0x0;return SceneManager[_0x5956ba(0x1db)]()?_0x45d7e8=this['helpAreaTopSideButtonLayout']():_0x45d7e8=VisuMZ['CoreEngine']['Scene_MenuBase_helpAreaTop'][_0x5956ba(0x3dd)](this),this[_0x5956ba(0x1ec)]()&&this[_0x5956ba(0x839)]()===_0x5956ba(0x76d)&&(_0x45d7e8+=Window_ButtonAssist[_0x5956ba(0x5cf)][_0x5956ba(0x416)]()),_0x45d7e8;},Scene_MenuBase[_0x5d57ff(0x5cf)]['helpAreaTopSideButtonLayout']=function(){const _0x29bb35=_0x5d57ff;if(this[_0x29bb35(0x564)]())return _0x29bb35(0x5ed)!==_0x29bb35(0x898)?this['mainAreaBottom']():_0x561261[_0x29bb35(0x67b)](_0x58d2bd['CoreEngine'][_0x29bb35(0x563)][_0x29bb35(0x3dd)](this,_0x4360a9));else{if(_0x29bb35(0x8d4)===_0x29bb35(0x19a))_0x1a2d1f[_0x29bb35(0x909)][_0x29bb35(0x626)]['call'](this),_0x10f4dc=this;else return 0x0;}},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x205)]=Scene_MenuBase[_0x5d57ff(0x5cf)]['mainAreaTop'],Scene_MenuBase['prototype']['mainAreaTop']=function(){const _0x2db0df=_0x5d57ff;if(SceneManager[_0x2db0df(0x1db)]()){if(_0x2db0df(0x3e2)!=='eSoyO')return this['mainAreaTopSideButtonLayout']();else{if(this[_0x2db0df(0x5ec)]==='keyboard'&&!_0x36b858[_0x2db0df(0x638)]())return;if(_0x4daee3[_0x2db0df(0x270)]())return;_0x590fce[_0x2db0df(0x909)]['Window_NameInput_cursorUp'][_0x2db0df(0x3dd)](this,_0x116173),this['switchModes']('default');}}else return VisuMZ[_0x2db0df(0x909)][_0x2db0df(0x205)]['call'](this);},Scene_MenuBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x434)]=function(){const _0x2ba396=_0x5d57ff;return!this[_0x2ba396(0x564)]()?this[_0x2ba396(0x968)]():0x0;},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x6a1)]=Scene_MenuBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x738)],Scene_MenuBase['prototype'][_0x5d57ff(0x738)]=function(){const _0x3cdf55=_0x5d57ff;let _0x2dbcb8=0x0;if(SceneManager[_0x3cdf55(0x1db)]())_0x2dbcb8=this[_0x3cdf55(0x7ef)]();else{if(_0x3cdf55(0x3ff)===_0x3cdf55(0x3ff))_0x2dbcb8=VisuMZ[_0x3cdf55(0x909)][_0x3cdf55(0x6a1)]['call'](this);else var _0x342265=_0x37abc3[_0x3cdf55(0x305)](_0x22f694*0x2-0x1,_0x3cdf55(0x45f))*0.5+0.5;}return this[_0x3cdf55(0x1ec)]()&&this[_0x3cdf55(0x839)]()!=='button'&&(_0x2dbcb8-=Window_ButtonAssist[_0x3cdf55(0x5cf)][_0x3cdf55(0x416)]()),_0x2dbcb8;},Scene_MenuBase['prototype'][_0x5d57ff(0x7ef)]=function(){const _0x2e4b81=_0x5d57ff;return Graphics[_0x2e4b81(0x6e2)]-this[_0x2e4b81(0x532)]();},VisuMZ[_0x5d57ff(0x909)]['Scene_MenuBase_createBackground']=Scene_MenuBase[_0x5d57ff(0x5cf)]['createBackground'],Scene_MenuBase[_0x5d57ff(0x5cf)]['createBackground']=function(){const _0x4cc7ea=_0x5d57ff;this['_backgroundFilter']=new PIXI['filters'][(_0x4cc7ea(0x5aa))](clamp=!![]),this[_0x4cc7ea(0x33b)]=new Sprite(),this['_backgroundSprite']['bitmap']=SceneManager['backgroundBitmap'](),this[_0x4cc7ea(0x33b)][_0x4cc7ea(0x59a)]=[this[_0x4cc7ea(0x1a2)]],this[_0x4cc7ea(0x43b)](this['_backgroundSprite']),this['setBackgroundOpacity'](0xc0),this[_0x4cc7ea(0x917)](this[_0x4cc7ea(0x58a)]()),this['createCustomBackgroundImages']();},Scene_MenuBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x58a)]=function(){const _0x1bf3b6=_0x5d57ff,_0x402980=String(this[_0x1bf3b6(0x8bb)][_0x1bf3b6(0x7e4)]),_0x1a3136=this[_0x1bf3b6(0x1f7)](_0x402980);return _0x1a3136?_0x1bf3b6(0x35a)!==_0x1bf3b6(0x9b3)?_0x1a3136['SnapshotOpacity']:_0x494c74[_0x1bf3b6(0x4b5)](_0x1bf3b6(0x5e7)):0xc0;},Scene_MenuBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x662)]=function(){const _0x3a00ee=_0x5d57ff,_0x5afbcc=String(this[_0x3a00ee(0x8bb)][_0x3a00ee(0x7e4)]),_0x5408de=this[_0x3a00ee(0x1f7)](_0x5afbcc);_0x5408de&&(_0x5408de[_0x3a00ee(0x65c)]!==''||_0x5408de[_0x3a00ee(0x584)]!=='')&&(this[_0x3a00ee(0x1bd)]=new Sprite(ImageManager[_0x3a00ee(0x817)](_0x5408de[_0x3a00ee(0x65c)])),this['_backSprite2']=new Sprite(ImageManager[_0x3a00ee(0x765)](_0x5408de[_0x3a00ee(0x584)])),this[_0x3a00ee(0x43b)](this[_0x3a00ee(0x1bd)]),this[_0x3a00ee(0x43b)](this[_0x3a00ee(0x383)]),this['_backSprite1'][_0x3a00ee(0x351)][_0x3a00ee(0x651)](this['adjustSprite'][_0x3a00ee(0x487)](this,this[_0x3a00ee(0x1bd)])),this[_0x3a00ee(0x383)][_0x3a00ee(0x351)][_0x3a00ee(0x651)](this[_0x3a00ee(0x7ee)]['bind'](this,this['_backSprite2'])));},Scene_MenuBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x1f7)]=function(_0x4a0f79){const _0x1f7519=_0x5d57ff;return VisuMZ[_0x1f7519(0x909)]['Settings']['MenuBg'][_0x4a0f79]||VisuMZ[_0x1f7519(0x909)][_0x1f7519(0x3d3)][_0x1f7519(0x1a0)][_0x1f7519(0x661)];},Scene_MenuBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x7ee)]=function(_0x4c7c86){const _0x1f5de1=_0x5d57ff;this[_0x1f5de1(0x550)](_0x4c7c86),this[_0x1f5de1(0x442)](_0x4c7c86);},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x881)]=Scene_MenuBase['prototype'][_0x5d57ff(0x377)],Scene_MenuBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x377)]=function(){const _0x63b2ad=_0x5d57ff;VisuMZ[_0x63b2ad(0x909)][_0x63b2ad(0x881)][_0x63b2ad(0x3dd)](this),SceneManager[_0x63b2ad(0x556)]()&&this[_0x63b2ad(0x6ba)]();},Scene_MenuBase['prototype']['moveCancelButtonSideButtonLayout']=function(){const _0x3c9234=_0x5d57ff;this[_0x3c9234(0x26b)]['x']=Graphics[_0x3c9234(0x873)]+0x4;},VisuMZ['CoreEngine']['Scene_MenuBase_createPageButtons']=Scene_MenuBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x1b1)],Scene_MenuBase[_0x5d57ff(0x5cf)]['createPageButtons']=function(){const _0x4f558e=_0x5d57ff;VisuMZ[_0x4f558e(0x909)][_0x4f558e(0x2db)]['call'](this),SceneManager['isSideButtonLayout']()&&this[_0x4f558e(0x7a2)]();},Scene_MenuBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x7a2)]=function(){const _0xda34cb=_0x5d57ff;this[_0xda34cb(0x5c8)]['x']=-0x1*(this[_0xda34cb(0x5c8)]['width']+this['_pagedownButton']['width']+0x8),this[_0xda34cb(0x79c)]['x']=-0x1*(this[_0xda34cb(0x79c)][_0xda34cb(0x961)]+0x4);},Scene_MenuBase['prototype'][_0x5d57ff(0x1ec)]=function(){const _0x2e7983=_0x5d57ff;return VisuMZ[_0x2e7983(0x909)][_0x2e7983(0x3d3)][_0x2e7983(0x1d9)][_0x2e7983(0x6af)];},Scene_MenuBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x839)]=function(){const _0x599296=_0x5d57ff;return SceneManager['isSideButtonLayout']()||SceneManager[_0x599296(0x95f)]()?VisuMZ[_0x599296(0x909)]['Settings']['ButtonAssist'][_0x599296(0x67e)]:_0x599296(0x5ac);},Scene_MenuBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x54f)]=function(){const _0x46ab9a=_0x5d57ff;if(!this[_0x46ab9a(0x1ec)]())return;const _0x3b9583=this[_0x46ab9a(0x7bc)]();this[_0x46ab9a(0x35d)]=new Window_ButtonAssist(_0x3b9583),this[_0x46ab9a(0x837)](this[_0x46ab9a(0x35d)]);},Scene_MenuBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x7bc)]=function(){const _0xdb3a98=_0x5d57ff;return this['getButtonAssistLocation']()===_0xdb3a98(0x5ac)?this[_0xdb3a98(0x74a)]():this['buttonAssistWindowSideRect']();},Scene_MenuBase['prototype'][_0x5d57ff(0x74a)]=function(){const _0x1e34b6=_0x5d57ff,_0x18f320=ConfigManager[_0x1e34b6(0x276)]?(Sprite_Button[_0x1e34b6(0x5cf)][_0x1e34b6(0x92d)]()+0x6)*0x2:0x0,_0x5e89b7=this['buttonY'](),_0x19709a=Graphics[_0x1e34b6(0x873)]-_0x18f320*0x2,_0x47a7aa=this[_0x1e34b6(0x7cd)]();return new Rectangle(_0x18f320,_0x5e89b7,_0x19709a,_0x47a7aa);},Scene_MenuBase['prototype']['buttonAssistWindowSideRect']=function(){const _0x3f046c=_0x5d57ff,_0x52c14a=Graphics[_0x3f046c(0x873)],_0x2ae494=Window_ButtonAssist[_0x3f046c(0x5cf)]['lineHeight'](),_0x22b207=0x0;let _0x2686fb=0x0;return this[_0x3f046c(0x839)]()===_0x3f046c(0x76d)?_0x3f046c(0x3c2)===_0x3f046c(0x3c2)?_0x2686fb=0x0:((this[_0x3f046c(0x8ec)]!==_0x2520a8||this[_0x3f046c(0x2ee)]!==_0x40fa32)&&(this[_0x3f046c(0x238)](_0x3f046c(0x868)),this[_0x3f046c(0x833)]=_0x302ff5),_0x5b1d71[_0x3f046c(0x909)][_0x3f046c(0x950)][_0x3f046c(0x3dd)](this,_0x233353,_0x12ac3e,_0x3cc10a)):_0x2686fb=Graphics[_0x3f046c(0x6e2)]-_0x2ae494,new Rectangle(_0x22b207,_0x2686fb,_0x52c14a,_0x2ae494);},Scene_Menu[_0x5d57ff(0x604)]=VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3d3)]['MenuLayout'][_0x5d57ff(0x43f)],VisuMZ[_0x5d57ff(0x909)]['Scene_Menu_create']=Scene_Menu[_0x5d57ff(0x5cf)][_0x5d57ff(0x2e3)],Scene_Menu[_0x5d57ff(0x5cf)]['create']=function(){const _0x94e9f7=_0x5d57ff;VisuMZ[_0x94e9f7(0x909)][_0x94e9f7(0x3e4)][_0x94e9f7(0x3dd)](this),this[_0x94e9f7(0x217)]();},Scene_Menu[_0x5d57ff(0x5cf)][_0x5d57ff(0x217)]=function(){const _0x4e203a=_0x5d57ff;this[_0x4e203a(0x8c5)]&&this['_commandWindow']['setBackgroundType'](Scene_Menu[_0x4e203a(0x604)][_0x4e203a(0x9c2)]);this[_0x4e203a(0x906)]&&this[_0x4e203a(0x906)][_0x4e203a(0x20c)](Scene_Menu['layoutSettings'][_0x4e203a(0x7e6)]);if(this[_0x4e203a(0x6d5)]){if('copVA'!==_0x4e203a(0x733))this[_0x4e203a(0x6d5)][_0x4e203a(0x20c)](Scene_Menu['layoutSettings'][_0x4e203a(0x871)]);else return this['_pointAnimationQueue']['shift']();}},Scene_Menu[_0x5d57ff(0x5cf)][_0x5d57ff(0x357)]=function(){const _0x4e2519=_0x5d57ff;return Scene_Menu[_0x4e2519(0x604)][_0x4e2519(0x40d)][_0x4e2519(0x3dd)](this);},Scene_Menu['prototype']['goldWindowRect']=function(){const _0x4b9f34=_0x5d57ff;return Scene_Menu[_0x4b9f34(0x604)]['GoldRect'][_0x4b9f34(0x3dd)](this);},Scene_Menu[_0x5d57ff(0x5cf)][_0x5d57ff(0x4e0)]=function(){const _0x29d188=_0x5d57ff;return Scene_Menu[_0x29d188(0x604)][_0x29d188(0x5fa)][_0x29d188(0x3dd)](this);},Scene_Item[_0x5d57ff(0x604)]=VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3d3)][_0x5d57ff(0x734)]['ItemMenu'],VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x61e)]=Scene_Item[_0x5d57ff(0x5cf)][_0x5d57ff(0x2e3)],Scene_Item['prototype'][_0x5d57ff(0x2e3)]=function(){const _0x223a3b=_0x5d57ff;VisuMZ[_0x223a3b(0x909)]['Scene_Item_create'][_0x223a3b(0x3dd)](this),this[_0x223a3b(0x217)]();},Scene_Item[_0x5d57ff(0x5cf)][_0x5d57ff(0x217)]=function(){const _0x45f1ac=_0x5d57ff;this['_helpWindow']&&this[_0x45f1ac(0x385)][_0x45f1ac(0x20c)](Scene_Item[_0x45f1ac(0x604)]['HelpBgType']),this[_0x45f1ac(0x280)]&&this['_categoryWindow'][_0x45f1ac(0x20c)](Scene_Item[_0x45f1ac(0x604)]['CategoryBgType']),this[_0x45f1ac(0x4b9)]&&this['_itemWindow'][_0x45f1ac(0x20c)](Scene_Item[_0x45f1ac(0x604)][_0x45f1ac(0x7f8)]),this[_0x45f1ac(0x1ca)]&&this[_0x45f1ac(0x1ca)][_0x45f1ac(0x20c)](Scene_Item['layoutSettings'][_0x45f1ac(0x8fb)]);},Scene_Item[_0x5d57ff(0x5cf)][_0x5d57ff(0x5da)]=function(){return Scene_Item['layoutSettings']['HelpRect']['call'](this);},Scene_Item[_0x5d57ff(0x5cf)][_0x5d57ff(0x18b)]=function(){const _0x572551=_0x5d57ff;return Scene_Item[_0x572551(0x604)][_0x572551(0x53d)]['call'](this);},Scene_Item[_0x5d57ff(0x5cf)][_0x5d57ff(0x7be)]=function(){const _0x294cd3=_0x5d57ff;return Scene_Item['layoutSettings'][_0x294cd3(0x54c)][_0x294cd3(0x3dd)](this);},Scene_Item[_0x5d57ff(0x5cf)][_0x5d57ff(0x273)]=function(){const _0x30bc14=_0x5d57ff;return Scene_Item[_0x30bc14(0x604)][_0x30bc14(0x31d)][_0x30bc14(0x3dd)](this);},Scene_Skill[_0x5d57ff(0x604)]=VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3d3)]['MenuLayout']['SkillMenu'],VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x515)]=Scene_Skill[_0x5d57ff(0x5cf)][_0x5d57ff(0x2e3)],Scene_Skill[_0x5d57ff(0x5cf)][_0x5d57ff(0x2e3)]=function(){const _0x25a6dc=_0x5d57ff;VisuMZ[_0x25a6dc(0x909)][_0x25a6dc(0x515)][_0x25a6dc(0x3dd)](this),this[_0x25a6dc(0x217)]();},Scene_Skill[_0x5d57ff(0x5cf)]['setCoreEngineUpdateWindowBg']=function(){const _0x3c05f8=_0x5d57ff;this[_0x3c05f8(0x385)]&&this[_0x3c05f8(0x385)][_0x3c05f8(0x20c)](Scene_Skill[_0x3c05f8(0x604)][_0x3c05f8(0x266)]);this['_skillTypeWindow']&&this[_0x3c05f8(0x93d)][_0x3c05f8(0x20c)](Scene_Skill[_0x3c05f8(0x604)][_0x3c05f8(0x945)]);this['_statusWindow']&&this[_0x3c05f8(0x6d5)][_0x3c05f8(0x20c)](Scene_Skill[_0x3c05f8(0x604)][_0x3c05f8(0x871)]);this[_0x3c05f8(0x4b9)]&&this['_itemWindow'][_0x3c05f8(0x20c)](Scene_Skill['layoutSettings'][_0x3c05f8(0x7f8)]);if(this[_0x3c05f8(0x1ca)]){if('LZJMM'===_0x3c05f8(0x547))this[_0x3c05f8(0x1ca)][_0x3c05f8(0x20c)](Scene_Skill[_0x3c05f8(0x604)][_0x3c05f8(0x8fb)]);else{if(this[_0x3c05f8(0x697)]()===this[_0x3c05f8(0x91b)]-0x1)return;_0x55405b['clear'](),this[_0x3c05f8(0x345)](),_0x1167fa[_0x3c05f8(0x5dc)](),this[_0x3c05f8(0x311)](this['_maxDigits']-0x1);}}},Scene_Skill[_0x5d57ff(0x5cf)][_0x5d57ff(0x5da)]=function(){const _0x13e7d0=_0x5d57ff;return Scene_Skill[_0x13e7d0(0x604)][_0x13e7d0(0x180)][_0x13e7d0(0x3dd)](this);},Scene_Skill[_0x5d57ff(0x5cf)]['skillTypeWindowRect']=function(){const _0x54bc59=_0x5d57ff;return Scene_Skill[_0x54bc59(0x604)][_0x54bc59(0x2dd)][_0x54bc59(0x3dd)](this);},Scene_Skill[_0x5d57ff(0x5cf)][_0x5d57ff(0x4e0)]=function(){const _0xdd7a6f=_0x5d57ff;return Scene_Skill[_0xdd7a6f(0x604)][_0xdd7a6f(0x5fa)][_0xdd7a6f(0x3dd)](this);},Scene_Skill[_0x5d57ff(0x5cf)][_0x5d57ff(0x7be)]=function(){const _0x5d3107=_0x5d57ff;return Scene_Skill[_0x5d3107(0x604)]['ItemRect'][_0x5d3107(0x3dd)](this);},Scene_Skill[_0x5d57ff(0x5cf)]['actorWindowRect']=function(){const _0x405b5f=_0x5d57ff;return Scene_Skill[_0x405b5f(0x604)][_0x405b5f(0x31d)][_0x405b5f(0x3dd)](this);},Scene_Equip[_0x5d57ff(0x604)]=VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3d3)][_0x5d57ff(0x734)][_0x5d57ff(0x38e)],VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x2ae)]=Scene_Equip[_0x5d57ff(0x5cf)][_0x5d57ff(0x2e3)],Scene_Equip[_0x5d57ff(0x5cf)]['create']=function(){const _0x237674=_0x5d57ff;VisuMZ['CoreEngine']['Scene_Equip_create'][_0x237674(0x3dd)](this),this[_0x237674(0x217)]();},Scene_Equip['prototype'][_0x5d57ff(0x217)]=function(){const _0x303ee0=_0x5d57ff;if(this[_0x303ee0(0x385)]){if('eUYUG'!=='eGdEz')this[_0x303ee0(0x385)][_0x303ee0(0x20c)](Scene_Equip[_0x303ee0(0x604)][_0x303ee0(0x266)]);else{const _0x4cb2cb=_0x4cc3b9[_0x303ee0(0x4aa)][_0x303ee0(0x75d)],_0x5625aa=_0x54e34d[_0x303ee0(0x4aa)][_0x303ee0(0x603)],_0xf1aea9=_0x524847[_0x303ee0(0x909)][_0x303ee0(0x3d3)]['UI']['BoxMargin'];_0x1b44bf['boxWidth']=_0x4cb2cb-_0xf1aea9*0x2,_0x1683e5[_0x303ee0(0x6e2)]=_0x5625aa-_0xf1aea9*0x2,this[_0x303ee0(0x9b2)]();}}this[_0x303ee0(0x6d5)]&&this['_statusWindow']['setBackgroundType'](Scene_Equip['layoutSettings']['StatusBgType']);this[_0x303ee0(0x8c5)]&&this['_commandWindow'][_0x303ee0(0x20c)](Scene_Equip[_0x303ee0(0x604)][_0x303ee0(0x9c2)]);this[_0x303ee0(0x478)]&&(_0x303ee0(0x22e)==='YPQSx'?this[_0x303ee0(0x478)][_0x303ee0(0x20c)](Scene_Equip['layoutSettings'][_0x303ee0(0x3f8)]):this['cursorDown'](_0x28a04c[_0x303ee0(0x47e)](_0x303ee0(0x6d2))));if(this[_0x303ee0(0x4b9)]){if(_0x303ee0(0x573)===_0x303ee0(0x573))this['_itemWindow'][_0x303ee0(0x20c)](Scene_Equip[_0x303ee0(0x604)][_0x303ee0(0x7f8)]);else{const _0x332f6f=this[_0x303ee0(0x8ba)],_0x43ae25=_0x33ffb8[_0x303ee0(0x8ee)](0x0,this['_width']-_0x332f6f*0x2),_0x127f49=_0x4e4c5d[_0x303ee0(0x8ee)](0x0,this['_height']-_0x332f6f*0x2),_0xf0c925=this['_backSprite'],_0x247161=_0xf0c925[_0x303ee0(0x1cb)][0x0];_0xf0c925['bitmap']=this[_0x303ee0(0x7c7)],_0xf0c925[_0x303ee0(0x335)](0x0,0x0,0x60,0x60),_0xf0c925[_0x303ee0(0x826)](_0x332f6f,_0x332f6f),_0xf0c925[_0x303ee0(0x672)]['x']=_0x43ae25/0x60,_0xf0c925['scale']['y']=_0x127f49/0x60,_0x247161[_0x303ee0(0x351)]=this[_0x303ee0(0x7c7)],_0x247161['setFrame'](0x0,0x60,0x60,0x60),_0x247161['move'](0x0,0x0,_0x43ae25,_0x127f49),_0x247161[_0x303ee0(0x672)]['x']=0x1/_0xf0c925[_0x303ee0(0x672)]['x'],_0x247161['scale']['y']=0x1/_0xf0c925[_0x303ee0(0x672)]['y'],_0xf0c925[_0x303ee0(0x7a4)](this[_0x303ee0(0x43e)]);}}},Scene_Equip[_0x5d57ff(0x5cf)][_0x5d57ff(0x5da)]=function(){const _0x1431fb=_0x5d57ff;return Scene_Equip[_0x1431fb(0x604)][_0x1431fb(0x180)][_0x1431fb(0x3dd)](this);},Scene_Equip['prototype'][_0x5d57ff(0x4e0)]=function(){const _0x589b0a=_0x5d57ff;return Scene_Equip[_0x589b0a(0x604)][_0x589b0a(0x5fa)][_0x589b0a(0x3dd)](this);},Scene_Equip[_0x5d57ff(0x5cf)][_0x5d57ff(0x357)]=function(){const _0x1e1bfd=_0x5d57ff;return Scene_Equip[_0x1e1bfd(0x604)][_0x1e1bfd(0x40d)]['call'](this);},Scene_Equip['prototype'][_0x5d57ff(0x2de)]=function(){const _0x54942d=_0x5d57ff;return Scene_Equip['layoutSettings'][_0x54942d(0x4a9)]['call'](this);},Scene_Equip[_0x5d57ff(0x5cf)][_0x5d57ff(0x7be)]=function(){const _0x2ddfe7=_0x5d57ff;return Scene_Equip[_0x2ddfe7(0x604)][_0x2ddfe7(0x54c)][_0x2ddfe7(0x3dd)](this);},Scene_Status['layoutSettings']=VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3d3)][_0x5d57ff(0x734)][_0x5d57ff(0x39a)],VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x70d)]=Scene_Status[_0x5d57ff(0x5cf)][_0x5d57ff(0x2e3)],Scene_Status[_0x5d57ff(0x5cf)][_0x5d57ff(0x2e3)]=function(){const _0x3482ff=_0x5d57ff;VisuMZ[_0x3482ff(0x909)]['Scene_Status_create'][_0x3482ff(0x3dd)](this),this['setCoreEngineUpdateWindowBg']();},Scene_Status['prototype'][_0x5d57ff(0x217)]=function(){const _0x18cfde=_0x5d57ff;this[_0x18cfde(0x83d)]&&(_0x18cfde(0x7b3)!=='RMLQd'?this[_0x18cfde(0x83d)][_0x18cfde(0x20c)](Scene_Status[_0x18cfde(0x604)]['ProfileBgType']):_0x59b164=!_0xbec619);this[_0x18cfde(0x6d5)]&&this['_statusWindow'][_0x18cfde(0x20c)](Scene_Status[_0x18cfde(0x604)][_0x18cfde(0x871)]);this['_statusParamsWindow']&&('jOeZT'!==_0x18cfde(0x47a)?this[_0x18cfde(0x4fc)][_0x18cfde(0x20c)](Scene_Status['layoutSettings'][_0x18cfde(0x891)]):this[_0x18cfde(0x19d)](_0x2b0e2b[_0x18cfde(0x909)]['Settings'][_0x18cfde(0x211)][_0x18cfde(0x923)],_0x5eea2a,_0x93800a,_0x275472,_0x18cfde(0x24a)));if(this['_statusEquipWindow']){if('zBcLq'!==_0x18cfde(0x2f7))this[_0x18cfde(0x599)][_0x18cfde(0x20c)](Scene_Status[_0x18cfde(0x604)][_0x18cfde(0x6aa)]);else return _0x456cc1['CoreEngine'][_0x18cfde(0x3d3)][_0x18cfde(0x5f4)][_0x18cfde(0x9e9)];}},Scene_Status[_0x5d57ff(0x5cf)]['profileWindowRect']=function(){const _0x9776e4=_0x5d57ff;return Scene_Status[_0x9776e4(0x604)]['ProfileRect'][_0x9776e4(0x3dd)](this);},Scene_Status[_0x5d57ff(0x5cf)][_0x5d57ff(0x4e0)]=function(){const _0x3f74ba=_0x5d57ff;return Scene_Status[_0x3f74ba(0x604)][_0x3f74ba(0x5fa)][_0x3f74ba(0x3dd)](this);},Scene_Status['prototype'][_0x5d57ff(0x5bc)]=function(){const _0x47856e=_0x5d57ff;return Scene_Status[_0x47856e(0x604)]['StatusParamsRect'][_0x47856e(0x3dd)](this);},Scene_Status['prototype'][_0x5d57ff(0x9c4)]=function(){const _0x5ab272=_0x5d57ff;return Scene_Status[_0x5ab272(0x604)][_0x5ab272(0x220)]['call'](this);},Scene_Options[_0x5d57ff(0x604)]=VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3d3)][_0x5d57ff(0x734)][_0x5d57ff(0x4f5)],VisuMZ['CoreEngine'][_0x5d57ff(0x257)]=Scene_Options[_0x5d57ff(0x5cf)][_0x5d57ff(0x2e3)],Scene_Options[_0x5d57ff(0x5cf)][_0x5d57ff(0x2e3)]=function(){const _0xd0c6fb=_0x5d57ff;VisuMZ['CoreEngine'][_0xd0c6fb(0x257)][_0xd0c6fb(0x3dd)](this),this[_0xd0c6fb(0x217)]();},Scene_Options[_0x5d57ff(0x5cf)][_0x5d57ff(0x217)]=function(){const _0x4d2fae=_0x5d57ff;this['_optionsWindow']&&this['_optionsWindow'][_0x4d2fae(0x20c)](Scene_Options['layoutSettings']['OptionsBgType']);},Scene_Options[_0x5d57ff(0x5cf)][_0x5d57ff(0x25e)]=function(){const _0x3f9301=_0x5d57ff;return Scene_Options[_0x3f9301(0x604)]['OptionsRect'][_0x3f9301(0x3dd)](this);},Scene_Save[_0x5d57ff(0x604)]=VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3d3)][_0x5d57ff(0x734)][_0x5d57ff(0x2b5)],Scene_Save[_0x5d57ff(0x5cf)][_0x5d57ff(0x2e3)]=function(){const _0x261934=_0x5d57ff;Scene_File['prototype'][_0x261934(0x2e3)][_0x261934(0x3dd)](this),this[_0x261934(0x217)]();},Scene_Save[_0x5d57ff(0x5cf)][_0x5d57ff(0x217)]=function(){const _0x23beca=_0x5d57ff;this[_0x23beca(0x385)]&&(_0x23beca(0x600)===_0x23beca(0x5a3)?(_0x1e93e3[_0x23beca(0x5cf)]['create'][_0x23beca(0x3dd)](this),this['setCoreEngineUpdateWindowBg']()):this[_0x23beca(0x385)]['setBackgroundType'](Scene_Save[_0x23beca(0x604)][_0x23beca(0x266)]));if(this[_0x23beca(0x37f)]){if(_0x23beca(0x743)!=='OjzPV'){if(_0x215368[_0x23beca(0x899)]())_0x2ca6fe[_0x23beca(0x2e8)](_0x235028);}else this[_0x23beca(0x37f)][_0x23beca(0x20c)](Scene_Save[_0x23beca(0x604)][_0x23beca(0x582)]);}},Scene_Save[_0x5d57ff(0x5cf)]['helpWindowRect']=function(){const _0x1ce7df=_0x5d57ff;return Scene_Save['layoutSettings'][_0x1ce7df(0x180)][_0x1ce7df(0x3dd)](this);},Scene_Save['prototype']['listWindowRect']=function(){const _0xe4f8c3=_0x5d57ff;return Scene_Save[_0xe4f8c3(0x604)][_0xe4f8c3(0x1bc)][_0xe4f8c3(0x3dd)](this);},Scene_Load[_0x5d57ff(0x604)]=VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3d3)][_0x5d57ff(0x734)][_0x5d57ff(0x2cf)],Scene_Load[_0x5d57ff(0x5cf)][_0x5d57ff(0x2e3)]=function(){const _0x17a479=_0x5d57ff;Scene_File[_0x17a479(0x5cf)][_0x17a479(0x2e3)][_0x17a479(0x3dd)](this),this[_0x17a479(0x217)]();},Scene_Load[_0x5d57ff(0x5cf)][_0x5d57ff(0x217)]=function(){const _0x30bb02=_0x5d57ff;this[_0x30bb02(0x385)]&&this[_0x30bb02(0x385)][_0x30bb02(0x20c)](Scene_Load['layoutSettings'][_0x30bb02(0x266)]);if(this[_0x30bb02(0x37f)]){if('tCOGB'===_0x30bb02(0x9ea))this[_0x30bb02(0x37f)][_0x30bb02(0x20c)](Scene_Load[_0x30bb02(0x604)]['ListBgType']);else{const _0x38cbc2=_0x13d96a[_0x2b0721];if(!_0x38cbc2)return;const _0x3528ef=new _0x45ec24();this[_0x30bb02(0x9d7)](_0x3528ef),_0x3528ef[_0x30bb02(0x91c)](_0x474a33);}}},Scene_Load['prototype'][_0x5d57ff(0x5da)]=function(){const _0x3f7410=_0x5d57ff;return Scene_Load[_0x3f7410(0x604)]['HelpRect'][_0x3f7410(0x3dd)](this);},Scene_Load['prototype']['listWindowRect']=function(){const _0x1a3547=_0x5d57ff;return Scene_Load[_0x1a3547(0x604)][_0x1a3547(0x1bc)][_0x1a3547(0x3dd)](this);},Scene_GameEnd[_0x5d57ff(0x604)]=VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3d3)]['MenuLayout'][_0x5d57ff(0x390)],VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x51b)]=Scene_GameEnd[_0x5d57ff(0x5cf)][_0x5d57ff(0x2b3)],Scene_GameEnd[_0x5d57ff(0x5cf)][_0x5d57ff(0x2b3)]=function(){const _0x54da8a=_0x5d57ff;Scene_MenuBase[_0x54da8a(0x5cf)][_0x54da8a(0x2b3)][_0x54da8a(0x3dd)](this);},Scene_GameEnd[_0x5d57ff(0x5cf)]['createCommandWindow']=function(){const _0x33ed8b=_0x5d57ff,_0x22a2d5=this[_0x33ed8b(0x357)]();this['_commandWindow']=new Window_GameEnd(_0x22a2d5),this[_0x33ed8b(0x8c5)][_0x33ed8b(0x81c)]('cancel',this[_0x33ed8b(0x87f)]['bind'](this)),this['addWindow'](this[_0x33ed8b(0x8c5)]),this[_0x33ed8b(0x8c5)][_0x33ed8b(0x20c)](Scene_GameEnd[_0x33ed8b(0x604)][_0x33ed8b(0x9c2)]);},Scene_GameEnd[_0x5d57ff(0x5cf)]['commandWindowRect']=function(){const _0x1eacba=_0x5d57ff;return Scene_GameEnd[_0x1eacba(0x604)][_0x1eacba(0x40d)][_0x1eacba(0x3dd)](this);},Scene_Shop[_0x5d57ff(0x604)]=VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3d3)][_0x5d57ff(0x734)][_0x5d57ff(0x187)],VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3b0)]=Scene_Shop['prototype'][_0x5d57ff(0x2e3)],Scene_Shop[_0x5d57ff(0x5cf)]['create']=function(){const _0x46ea07=_0x5d57ff;VisuMZ[_0x46ea07(0x909)][_0x46ea07(0x3b0)][_0x46ea07(0x3dd)](this),this[_0x46ea07(0x217)]();},Scene_Shop[_0x5d57ff(0x5cf)]['setCoreEngineUpdateWindowBg']=function(){const _0x4cedfa=_0x5d57ff;if(this['_helpWindow']){if(_0x4cedfa(0x73c)===_0x4cedfa(0x73c))this[_0x4cedfa(0x385)][_0x4cedfa(0x20c)](Scene_Shop[_0x4cedfa(0x604)][_0x4cedfa(0x266)]);else return _0x233dc6['getBattleSystem']()===0x1;}this[_0x4cedfa(0x906)]&&(_0x4cedfa(0x500)===_0x4cedfa(0x785)?this[_0x4cedfa(0x7fe)]():this[_0x4cedfa(0x906)][_0x4cedfa(0x20c)](Scene_Shop[_0x4cedfa(0x604)][_0x4cedfa(0x7e6)]));if(this[_0x4cedfa(0x8c5)]){if(_0x4cedfa(0x9dd)==='XSGwO')this['_commandWindow'][_0x4cedfa(0x20c)](Scene_Shop[_0x4cedfa(0x604)][_0x4cedfa(0x9c2)]);else{if(typeof _0x4f6ad3===_0x4cedfa(0x831))_0x50437c['App'][_0x4cedfa(0x8d9)]();}}this['_dummyWindow']&&this[_0x4cedfa(0x806)][_0x4cedfa(0x20c)](Scene_Shop[_0x4cedfa(0x604)][_0x4cedfa(0x6cd)]);if(this[_0x4cedfa(0x79f)]){if('vKFTd'===_0x4cedfa(0x916))this[_0x4cedfa(0x79f)][_0x4cedfa(0x20c)](Scene_Shop[_0x4cedfa(0x604)][_0x4cedfa(0x49b)]);else{const _0x4d9b00=_0x34e5a5[_0x44a13a];if(!_0x4d9b00)return'';let _0x51da22='';_0x51da22+=_0x4d9b00[_0x4cedfa(0x7e4)];for(const _0x57da70 of _0x4d9b00[_0x4cedfa(0x40c)]){for(const _0x151d95 of _0x57da70['list']){[0x6c,0x198]['includes'](_0x151d95['code'])&&(_0x51da22+='\x0a',_0x51da22+=_0x151d95[_0x4cedfa(0x848)][0x0]);}}return _0x51da22;}}this[_0x4cedfa(0x6d5)]&&this['_statusWindow'][_0x4cedfa(0x20c)](Scene_Shop['layoutSettings'][_0x4cedfa(0x871)]);this['_buyWindow']&&('fpbAI'!==_0x4cedfa(0x719)?this['_buyWindow'][_0x4cedfa(0x20c)](Scene_Shop[_0x4cedfa(0x604)][_0x4cedfa(0x4ea)]):_0x3e4b85[_0x4cedfa(0x33a)]());this[_0x4cedfa(0x280)]&&(_0x4cedfa(0x192)!==_0x4cedfa(0x4ce)?this[_0x4cedfa(0x280)][_0x4cedfa(0x20c)](Scene_Shop[_0x4cedfa(0x604)][_0x4cedfa(0x190)]):_0x244c70[_0x4cedfa(0x29d)](_0x3fccc4));if(this['_sellWindow']){if(_0x4cedfa(0x498)===_0x4cedfa(0x498))this[_0x4cedfa(0x919)][_0x4cedfa(0x20c)](Scene_Shop['layoutSettings']['SellBgType']);else{_0x4a9c6e['ConvertParams'](_0x4f7cf2,_0x3d5843);const _0x2b9601=_0x2d5891[_0x4cedfa(0x88d)]||0x1,_0x3188b3=_0x3be457['easingType']||_0x4cedfa(0x868),_0x168732=_0x1dc724[_0x4cedfa(0x3a0)](_0x2b9601);_0x168732&&_0x168732[_0x4cedfa(0x85d)](_0x3188b3);}}},Scene_Shop[_0x5d57ff(0x5cf)][_0x5d57ff(0x5da)]=function(){const _0xbc1271=_0x5d57ff;return Scene_Shop[_0xbc1271(0x604)][_0xbc1271(0x180)]['call'](this);},Scene_Shop[_0x5d57ff(0x5cf)][_0x5d57ff(0x89e)]=function(){const _0x4f94f8=_0x5d57ff;return Scene_Shop[_0x4f94f8(0x604)]['GoldRect']['call'](this);},Scene_Shop[_0x5d57ff(0x5cf)][_0x5d57ff(0x357)]=function(){const _0x12be04=_0x5d57ff;return Scene_Shop[_0x12be04(0x604)][_0x12be04(0x40d)]['call'](this);},Scene_Shop[_0x5d57ff(0x5cf)]['dummyWindowRect']=function(){const _0xbc838a=_0x5d57ff;return Scene_Shop[_0xbc838a(0x604)][_0xbc838a(0x45a)][_0xbc838a(0x3dd)](this);},Scene_Shop[_0x5d57ff(0x5cf)][_0x5d57ff(0x665)]=function(){const _0x27363d=_0x5d57ff;return Scene_Shop[_0x27363d(0x604)][_0x27363d(0x4f1)][_0x27363d(0x3dd)](this);},Scene_Shop[_0x5d57ff(0x5cf)][_0x5d57ff(0x4e0)]=function(){const _0x15a214=_0x5d57ff;return Scene_Shop[_0x15a214(0x604)]['StatusRect'][_0x15a214(0x3dd)](this);},Scene_Shop[_0x5d57ff(0x5cf)][_0x5d57ff(0x1ce)]=function(){const _0x378dc5=_0x5d57ff;return Scene_Shop[_0x378dc5(0x604)][_0x378dc5(0x828)]['call'](this);},Scene_Shop[_0x5d57ff(0x5cf)][_0x5d57ff(0x18b)]=function(){const _0x3d71f6=_0x5d57ff;return Scene_Shop[_0x3d71f6(0x604)][_0x3d71f6(0x53d)][_0x3d71f6(0x3dd)](this);},Scene_Shop['prototype'][_0x5d57ff(0x5d5)]=function(){const _0x1f1343=_0x5d57ff;return Scene_Shop[_0x1f1343(0x604)][_0x1f1343(0x75b)][_0x1f1343(0x3dd)](this);},Scene_Name[_0x5d57ff(0x604)]=VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3d3)]['MenuLayout'][_0x5d57ff(0x8b0)],VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x6ae)]=Scene_Name[_0x5d57ff(0x5cf)][_0x5d57ff(0x2e3)],Scene_Name['prototype'][_0x5d57ff(0x2e3)]=function(){const _0x31cc01=_0x5d57ff;VisuMZ['CoreEngine'][_0x31cc01(0x6ae)][_0x31cc01(0x3dd)](this),this[_0x31cc01(0x217)]();},Scene_Name[_0x5d57ff(0x5cf)][_0x5d57ff(0x217)]=function(){const _0x217f27=_0x5d57ff;this['_editWindow']&&this[_0x217f27(0x9e4)][_0x217f27(0x20c)](Scene_Name[_0x217f27(0x604)][_0x217f27(0x7f1)]),this[_0x217f27(0x460)]&&this['_inputWindow'][_0x217f27(0x20c)](Scene_Name['layoutSettings'][_0x217f27(0x75e)]);},Scene_Name[_0x5d57ff(0x5cf)][_0x5d57ff(0x532)]=function(){return 0x0;},Scene_Name[_0x5d57ff(0x5cf)][_0x5d57ff(0x999)]=function(){const _0x7c5841=_0x5d57ff;return Scene_Name[_0x7c5841(0x604)][_0x7c5841(0x962)][_0x7c5841(0x3dd)](this);},Scene_Name[_0x5d57ff(0x5cf)][_0x5d57ff(0x250)]=function(){const _0x1b1436=_0x5d57ff;return Scene_Name[_0x1b1436(0x604)][_0x1b1436(0x76c)][_0x1b1436(0x3dd)](this);},Scene_Name['prototype'][_0x5d57ff(0x691)]=function(){const _0x47c2c8=_0x5d57ff;if(!this[_0x47c2c8(0x460)])return![];return VisuMZ[_0x47c2c8(0x909)][_0x47c2c8(0x3d3)][_0x47c2c8(0x2e0)]['EnableNameInput'];},Scene_Name['prototype'][_0x5d57ff(0x2af)]=function(){const _0x5c859d=_0x5d57ff;return this[_0x5c859d(0x691)]()?TextManager[_0x5c859d(0x4b5)](_0x5c859d(0x5e7)):Scene_MenuBase['prototype']['buttonAssistKey1'][_0x5c859d(0x3dd)](this);},Scene_Name[_0x5d57ff(0x5cf)][_0x5d57ff(0x610)]=function(){const _0x38c505=_0x5d57ff;if(this[_0x38c505(0x691)]()){const _0x38643f=VisuMZ[_0x38c505(0x909)][_0x38c505(0x3d3)]['KeyboardInput'];return this[_0x38c505(0x460)][_0x38c505(0x5ec)]===_0x38c505(0x9d4)?_0x38c505(0x5c5)===_0x38c505(0x583)?_0x467576[_0x38c505(0x909)][_0x38c505(0x3d3)]['Window']['ColSpacing']:_0x38643f[_0x38c505(0x576)]||_0x38c505(0x576):_0x38643f[_0x38c505(0x731)]||_0x38c505(0x731);}else return Scene_MenuBase[_0x38c505(0x5cf)]['buttonAssistText1'][_0x38c505(0x3dd)](this);},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x1b2)]=Scene_Name[_0x5d57ff(0x5cf)][_0x5d57ff(0x4b2)],Scene_Name[_0x5d57ff(0x5cf)][_0x5d57ff(0x4b2)]=function(){const _0x41ea8e=_0x5d57ff;this['doesNameContainBannedWords']()?'NgHlK'===_0x41ea8e(0x2ba)?this[_0x41ea8e(0x1e0)]():this[_0x41ea8e(0x417)]=(_0x5e3197(_0x291e05['$1'])||0x1)[_0x41ea8e(0x9dc)](0x1,0xa):VisuMZ[_0x41ea8e(0x909)]['Scene_Name_onInputOk'][_0x41ea8e(0x3dd)](this);},Scene_Name[_0x5d57ff(0x5cf)][_0x5d57ff(0x6f4)]=function(){const _0x2a8ad2=_0x5d57ff,_0x48bef2=VisuMZ[_0x2a8ad2(0x909)]['Settings'][_0x2a8ad2(0x2e0)];if(!_0x48bef2)return![];const _0x25077b=_0x48bef2[_0x2a8ad2(0x67d)];if(!_0x25077b)return![];const _0x22f172=this['_editWindow'][_0x2a8ad2(0x7e4)]()[_0x2a8ad2(0x427)]();for(const _0x39de61 of _0x25077b){if(_0x2a8ad2(0x23f)!==_0x2a8ad2(0x979)){if(_0x22f172[_0x2a8ad2(0x861)](_0x39de61[_0x2a8ad2(0x427)]()))return!![];}else{var _0x487dc7=_0x35cb03(_0x1696ff['$1'])/0x64;_0x1e984c+=_0x487dc7;}}return![];},Scene_Name['prototype'][_0x5d57ff(0x1e0)]=function(){const _0x21691b=_0x5d57ff;SoundManager[_0x21691b(0x4a8)]();},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x1d1)]=Scene_Battle[_0x5d57ff(0x5cf)][_0x5d57ff(0x74d)],Scene_Battle[_0x5d57ff(0x5cf)][_0x5d57ff(0x74d)]=function(){const _0x20e33d=_0x5d57ff;VisuMZ[_0x20e33d(0x909)][_0x20e33d(0x1d1)][_0x20e33d(0x3dd)](this);if($gameTemp[_0x20e33d(0x3bd)])this[_0x20e33d(0x925)]();},Scene_Battle[_0x5d57ff(0x5cf)][_0x5d57ff(0x925)]=function(){const _0x494265=_0x5d57ff;!BattleManager[_0x494265(0x78d)]()&&!this[_0x494265(0x46a)]&&!$gameMessage['isBusy']()&&(this[_0x494265(0x46a)]=!![],this[_0x494265(0x74d)](),SceneManager[_0x494265(0x803)](),this[_0x494265(0x46a)]=![]);},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x983)]=Scene_Battle['prototype'][_0x5d57ff(0x377)],Scene_Battle[_0x5d57ff(0x5cf)]['createCancelButton']=function(){const _0x26fe47=_0x5d57ff;VisuMZ[_0x26fe47(0x909)][_0x26fe47(0x983)][_0x26fe47(0x3dd)](this),SceneManager[_0x26fe47(0x556)]()&&this['repositionCancelButtonSideButtonLayout']();},Scene_Battle[_0x5d57ff(0x5cf)][_0x5d57ff(0x5a5)]=function(){const _0x16e8f6=_0x5d57ff;this[_0x16e8f6(0x26b)]['x']=Graphics[_0x16e8f6(0x873)]+0x4,this[_0x16e8f6(0x83f)]()?_0x16e8f6(0x18d)==='CpcbZ'?_0x14767c*=_0x57ad40(_0x1545e3):this[_0x16e8f6(0x26b)]['y']=Graphics[_0x16e8f6(0x6e2)]-this['buttonAreaHeight']():this[_0x16e8f6(0x26b)]['y']=0x0;},VisuMZ['CoreEngine'][_0x5d57ff(0x6ce)]=Sprite_Button[_0x5d57ff(0x5cf)][_0x5d57ff(0x4d1)],Sprite_Button[_0x5d57ff(0x5cf)]['initialize']=function(_0x538f26){const _0x2eafae=_0x5d57ff;VisuMZ[_0x2eafae(0x909)][_0x2eafae(0x6ce)][_0x2eafae(0x3dd)](this,_0x538f26),this['initButtonHidden']();},Sprite_Button[_0x5d57ff(0x5cf)][_0x5d57ff(0x255)]=function(){const _0x265ca9=_0x5d57ff,_0x27dbe2=VisuMZ['CoreEngine'][_0x265ca9(0x3d3)]['UI'];this[_0x265ca9(0x1d6)]=![];switch(this['_buttonType']){case'cancel':this[_0x265ca9(0x1d6)]=!_0x27dbe2['cancelShowButton'];break;case _0x265ca9(0x4bb):case _0x265ca9(0x4f8):this[_0x265ca9(0x1d6)]=!_0x27dbe2[_0x265ca9(0x1fb)];break;case _0x265ca9(0x6d2):case'up':case _0x265ca9(0x673):case _0x265ca9(0x8be):case'ok':this['_isButtonHidden']=!_0x27dbe2[_0x265ca9(0x269)];break;case _0x265ca9(0x8f0):this['_isButtonHidden']=!_0x27dbe2[_0x265ca9(0x781)];break;}},VisuMZ[_0x5d57ff(0x909)]['Sprite_Button_updateOpacity']=Sprite_Button[_0x5d57ff(0x5cf)][_0x5d57ff(0x414)],Sprite_Button[_0x5d57ff(0x5cf)]['updateOpacity']=function(){const _0x4f527c=_0x5d57ff;SceneManager[_0x4f527c(0x95f)]()||this['_isButtonHidden']?this[_0x4f527c(0x3e1)]():VisuMZ[_0x4f527c(0x909)]['Sprite_Button_updateOpacity'][_0x4f527c(0x3dd)](this);},Sprite_Button[_0x5d57ff(0x5cf)][_0x5d57ff(0x3e1)]=function(){const _0x23a198=_0x5d57ff;this[_0x23a198(0x206)]=![],this[_0x23a198(0x663)]=0x0,this['x']=Graphics[_0x23a198(0x961)]*0xa,this['y']=Graphics[_0x23a198(0x317)]*0xa;},VisuMZ['CoreEngine']['Sprite_Battler_startMove']=Sprite_Battler[_0x5d57ff(0x5cf)][_0x5d57ff(0x85e)],Sprite_Battler[_0x5d57ff(0x5cf)][_0x5d57ff(0x85e)]=function(_0x1064fe,_0x2278f3,_0x69c137){const _0x195ef2=_0x5d57ff;if(this[_0x195ef2(0x8ec)]!==_0x1064fe||this[_0x195ef2(0x2ee)]!==_0x2278f3){if(_0x195ef2(0x97d)==='MMHUr'){if(this['_CoreEngineSettings']===_0x1c6d21)this['initCoreEngine']();if(this[_0x195ef2(0x802)][_0x195ef2(0x58f)]===_0x229d31)this[_0x195ef2(0x728)]();this[_0x195ef2(0x802)]['FontSize']=_0x7dcdda;}else this[_0x195ef2(0x238)](_0x195ef2(0x868)),this[_0x195ef2(0x833)]=_0x69c137;}VisuMZ[_0x195ef2(0x909)][_0x195ef2(0x950)][_0x195ef2(0x3dd)](this,_0x1064fe,_0x2278f3,_0x69c137);},Sprite_Battler['prototype'][_0x5d57ff(0x238)]=function(_0x486eb8){const _0x2cd97e=_0x5d57ff;this[_0x2cd97e(0x223)]=_0x486eb8;},Sprite_Battler[_0x5d57ff(0x5cf)]['updateMove']=function(){const _0x3a2150=_0x5d57ff;if(this[_0x3a2150(0x4d7)]<=0x0)return;const _0x1e2fc4=this[_0x3a2150(0x4d7)],_0x534f6c=this[_0x3a2150(0x833)],_0x59c241=this[_0x3a2150(0x223)];this['_offsetX']=this[_0x3a2150(0x86a)](this[_0x3a2150(0x28f)],this[_0x3a2150(0x8ec)],_0x1e2fc4,_0x534f6c,_0x59c241),this[_0x3a2150(0x811)]=this['applyEasing'](this[_0x3a2150(0x811)],this[_0x3a2150(0x2ee)],_0x1e2fc4,_0x534f6c,_0x59c241),this[_0x3a2150(0x4d7)]--;if(this[_0x3a2150(0x4d7)]<=0x0)this['onMoveEnd']();},Sprite_Battler[_0x5d57ff(0x5cf)][_0x5d57ff(0x86a)]=function(_0x482f5a,_0x55ff04,_0x5138bb,_0x22ed5e,_0x5f3fd5){const _0x2a119a=_0x5d57ff,_0x29de49=VisuMZ[_0x2a119a(0x305)]((_0x22ed5e-_0x5138bb)/_0x22ed5e,_0x5f3fd5||_0x2a119a(0x868)),_0x586a9d=VisuMZ[_0x2a119a(0x305)]((_0x22ed5e-_0x5138bb+0x1)/_0x22ed5e,_0x5f3fd5||_0x2a119a(0x868)),_0x174081=(_0x482f5a-_0x55ff04*_0x29de49)/(0x1-_0x29de49);return _0x174081+(_0x55ff04-_0x174081)*_0x586a9d;},VisuMZ['CoreEngine'][_0x5d57ff(0x60c)]=Sprite_Actor[_0x5d57ff(0x5cf)][_0x5d57ff(0x34b)],Sprite_Actor[_0x5d57ff(0x5cf)][_0x5d57ff(0x34b)]=function(_0x1eb4e2){const _0x2f1662=_0x5d57ff;if(VisuMZ[_0x2f1662(0x909)][_0x2f1662(0x3d3)]['UI'][_0x2f1662(0x702)]){if('iVjGT'!==_0x2f1662(0x921)){const _0x2f0bbe=_0x3e0a8d[_0x2f1662(0x9ca)]((_0x215cb3-0x2)*_0x4ecc02),_0x2fb5f8=_0x596835[_0x2f1662(0x5cf)][_0x2f1662(0x730)][_0x2f1662(0x3dd)](this),_0x5de4e8=_0x3dc614+this[_0x2f1662(0x416)]()-_0x2fb5f8-0x2;this[_0x2f1662(0x452)][_0x2f1662(0x4ae)](_0x29bad8,_0x5de4e8,_0x77f554,_0x2fb5f8,_0x494b42[_0x2f1662(0x402)]()),this[_0x2f1662(0x452)][_0x2f1662(0x6ed)](_0x15babd+0x1,_0x5de4e8+0x1,_0x2f0bbe,_0x2fb5f8-0x2,_0x4f2b5e,_0x479cb8);}else this['setActorHomeRepositioned'](_0x1eb4e2);}else VisuMZ[_0x2f1662(0x909)][_0x2f1662(0x60c)][_0x2f1662(0x3dd)](this,_0x1eb4e2);},Sprite_Actor[_0x5d57ff(0x5cf)][_0x5d57ff(0x3a1)]=function(_0x2868df){const _0x4b1a6c=_0x5d57ff;let _0x634d53=Math[_0x4b1a6c(0x746)](Graphics[_0x4b1a6c(0x961)]/0x2+0xc0);_0x634d53-=Math[_0x4b1a6c(0x9ca)]((Graphics[_0x4b1a6c(0x961)]-Graphics['boxWidth'])/0x2),_0x634d53+=_0x2868df*0x20;let _0x38d59a=Graphics[_0x4b1a6c(0x317)]-0xc8-$gameParty[_0x4b1a6c(0x62e)]()*0x30;_0x38d59a-=Math[_0x4b1a6c(0x9ca)]((Graphics[_0x4b1a6c(0x317)]-Graphics[_0x4b1a6c(0x6e2)])/0x2),_0x38d59a+=_0x2868df*0x30,this[_0x4b1a6c(0x5cc)](_0x634d53,_0x38d59a);},Sprite_Actor[_0x5d57ff(0x5cf)][_0x5d57ff(0x767)]=function(){const _0x3ced7f=_0x5d57ff;this[_0x3ced7f(0x85e)](0x4b0,0x0,0x78);},Sprite_Animation[_0x5d57ff(0x5cf)][_0x5d57ff(0x91e)]=function(_0x30edce){this['_muteSound']=_0x30edce;},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x6c9)]=Sprite_Animation[_0x5d57ff(0x5cf)][_0x5d57ff(0x88a)],Sprite_Animation[_0x5d57ff(0x5cf)][_0x5d57ff(0x88a)]=function(){const _0x5a20f3=_0x5d57ff;if(this[_0x5a20f3(0x519)])return;VisuMZ['CoreEngine'][_0x5a20f3(0x6c9)]['call'](this);},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x1c3)]=Sprite_Animation['prototype'][_0x5d57ff(0x359)],Sprite_Animation['prototype']['setViewport']=function(_0xfd7168){const _0x5be81c=_0x5d57ff;this[_0x5be81c(0x3b8)]()?this[_0x5be81c(0x2f5)](_0xfd7168):VisuMZ['CoreEngine']['Sprite_Animation_setViewport'][_0x5be81c(0x3dd)](this,_0xfd7168);},Sprite_Animation[_0x5d57ff(0x5cf)]['isAnimationOffsetXMirrored']=function(){const _0x3a5fa0=_0x5d57ff;if(!this[_0x3a5fa0(0x4c1)])return![];const _0x362089=this['_animation'][_0x3a5fa0(0x7e4)]||'';if(_0x362089[_0x3a5fa0(0x749)](/<MIRROR OFFSET X>/i))return!![];if(_0x362089[_0x3a5fa0(0x749)](/<NO MIRROR OFFSET X>/i))return![];return VisuMZ[_0x3a5fa0(0x909)][_0x3a5fa0(0x3d3)]['QoL'][_0x3a5fa0(0x7ce)];},Sprite_Animation[_0x5d57ff(0x5cf)][_0x5d57ff(0x2f5)]=function(_0x4efe2a){const _0x1451a2=_0x5d57ff,_0x58d9c3=this[_0x1451a2(0x517)],_0x38ed19=this[_0x1451a2(0x517)],_0x4d20f8=this[_0x1451a2(0x4c1)][_0x1451a2(0x671)]*(this[_0x1451a2(0x905)]?-0x1:0x1)-_0x58d9c3/0x2,_0x16c9e4=this[_0x1451a2(0x4c1)][_0x1451a2(0x82d)]-_0x38ed19/0x2,_0x3659a0=this[_0x1451a2(0x5c3)](_0x4efe2a);_0x4efe2a['gl']['viewport'](_0x4d20f8+_0x3659a0['x'],_0x16c9e4+_0x3659a0['y'],_0x58d9c3,_0x38ed19);},Sprite_Animation[_0x5d57ff(0x5cf)][_0x5d57ff(0x369)]=function(_0x3fd3aa){const _0x1e2344=_0x5d57ff;if(_0x3fd3aa[_0x1e2344(0x54e)]){}const _0x36591c=this[_0x1e2344(0x4c1)][_0x1e2344(0x7e4)];let _0x5ae5e1=_0x3fd3aa[_0x1e2344(0x317)]*_0x3fd3aa['scale']['y'],_0x33ce0a=0x0,_0x200864=-_0x5ae5e1/0x2;if(_0x36591c['match'](/<(?:HEAD|HEADER|TOP)>/i))_0x200864=-_0x5ae5e1;if(_0x36591c[_0x1e2344(0x749)](/<(?:FOOT|FOOTER|BOTTOM)>/i))_0x200864=0x0;if(this[_0x1e2344(0x4c1)][_0x1e2344(0x5bf)])_0x200864=0x0;if(_0x36591c['match'](/<(?:LEFT)>/i))_0x33ce0a=-_0x3fd3aa[_0x1e2344(0x961)]/0x2;if(_0x36591c[_0x1e2344(0x749)](/<(?:RIGHT)>/i))_0x33ce0a=_0x3fd3aa[_0x1e2344(0x961)]/0x2;_0x36591c[_0x1e2344(0x749)](/<ANCHOR X:[ ](\d+\.?\d*)>/i)&&(_0x33ce0a=Number(RegExp['$1'])*_0x3fd3aa[_0x1e2344(0x961)]);_0x36591c['match'](/<ANCHOR Y:[ ](\d+\.?\d*)>/i)&&(_0x200864=(0x1-Number(RegExp['$1']))*-_0x5ae5e1);_0x36591c['match'](/<ANCHOR:[ ](\d+\.?\d*),[ ](\d+\.?\d*)>/i)&&(_0x33ce0a=Number(RegExp['$1'])*_0x3fd3aa[_0x1e2344(0x961)],_0x200864=(0x1-Number(RegExp['$2']))*-_0x5ae5e1);if(_0x36591c[_0x1e2344(0x749)](/<OFFSET X:[ ]([\+\-]\d+)>/i))_0x33ce0a+=Number(RegExp['$1']);if(_0x36591c[_0x1e2344(0x749)](/<OFFSET Y:[ ]([\+\-]\d+)>/i))_0x200864+=Number(RegExp['$1']);_0x36591c[_0x1e2344(0x749)](/<OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(_0x33ce0a+=Number(RegExp['$1']),_0x200864+=Number(RegExp['$2']));const _0x8a8219=new Point(_0x33ce0a,_0x200864);return _0x3fd3aa[_0x1e2344(0x42c)](),_0x3fd3aa[_0x1e2344(0x6c1)][_0x1e2344(0x6b9)](_0x8a8219);},Sprite_AnimationMV[_0x5d57ff(0x5cf)]['setupRate']=function(){const _0x17c410=_0x5d57ff;this['_rate']=VisuMZ['CoreEngine']['Settings']['QoL']['MvAnimationRate']??0x4,this['setupCustomRateCoreEngine'](),this[_0x17c410(0x417)]=this[_0x17c410(0x417)][_0x17c410(0x9dc)](0x1,0xa);},Sprite_AnimationMV[_0x5d57ff(0x5cf)]['setupCustomRateCoreEngine']=function(){const _0x2386b7=_0x5d57ff;if(!this[_0x2386b7(0x4c1)]);const _0xd3d3f0=this[_0x2386b7(0x4c1)][_0x2386b7(0x7e4)]||'';_0xd3d3f0[_0x2386b7(0x749)](/<RATE:[ ](\d+)>/i)&&(_0x2386b7(0x4b4)===_0x2386b7(0x4b4)?this[_0x2386b7(0x417)]=(Number(RegExp['$1'])||0x1)[_0x2386b7(0x9dc)](0x1,0xa):(this[_0x2386b7(0x400)]=_0x11ab14['CoreEngine'][_0x2386b7(0x3d3)][_0x2386b7(0x1d2)]['DigitGroupingStandardText'],this[_0x2386b7(0x922)]=_0x536f9c[_0x2386b7(0x909)][_0x2386b7(0x3d3)][_0x2386b7(0x1d2)]['DigitGroupingExText']));},Sprite_AnimationMV[_0x5d57ff(0x5cf)][_0x5d57ff(0x91e)]=function(_0x2774dd){const _0x5fd46f=_0x5d57ff;this[_0x5fd46f(0x519)]=_0x2774dd;},VisuMZ[_0x5d57ff(0x909)]['Sprite_AnimationMV_processTimingData']=Sprite_AnimationMV[_0x5d57ff(0x5cf)][_0x5d57ff(0x8f7)],Sprite_AnimationMV[_0x5d57ff(0x5cf)]['processTimingData']=function(_0x8981db){const _0x3b19f6=_0x5d57ff;this[_0x3b19f6(0x519)]&&(_0x8981db=JsonEx['makeDeepCopy'](_0x8981db),_0x8981db['se']&&('IXyOY'!==_0x3b19f6(0x8cd)?(_0x5f4935<_0x711c44-_0x538184||_0xe8f092&&_0x5729a4===0x1)&&this[_0x3b19f6(0x214)]((_0x4c9504+_0xfc69a4)%_0x28c81d):_0x8981db['se']['volume']=0x0)),VisuMZ[_0x3b19f6(0x909)][_0x3b19f6(0x67c)][_0x3b19f6(0x3dd)](this,_0x8981db);},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x37a)]=Sprite_AnimationMV['prototype'][_0x5d57ff(0x353)],Sprite_AnimationMV['prototype'][_0x5d57ff(0x353)]=function(){const _0x5b1f91=_0x5d57ff;VisuMZ[_0x5b1f91(0x909)]['Sprite_AnimationMV_updatePosition'][_0x5b1f91(0x3dd)](this);if(this[_0x5b1f91(0x4c1)][_0x5b1f91(0x26e)]===0x3){if('togDh'===_0x5b1f91(0x41f))return _0xb78490[_0x5b1f91(0x909)][_0x5b1f91(0x3d3)]['QoL']['ModernControls'];else{if(this['x']===0x0)this['x']=Math[_0x5b1f91(0x746)](Graphics[_0x5b1f91(0x961)]/0x2);if(this['y']===0x0)this['y']=Math[_0x5b1f91(0x746)](Graphics[_0x5b1f91(0x317)]/0x2);}}},Sprite_Damage[_0x5d57ff(0x5cf)][_0x5d57ff(0x94d)]=function(_0x40fa7e){const _0x3f96a5=_0x5d57ff;let _0x49e346=Math[_0x3f96a5(0x588)](_0x40fa7e)[_0x3f96a5(0x2f4)]();this['useDigitGrouping']()&&(_0x3f96a5(0x647)===_0x3f96a5(0x2c0)?(this['_playtestF7Looping']=!![],this[_0x3f96a5(0x74d)](),_0x136d9d[_0x3f96a5(0x803)](),this['_playtestF7Looping']=![]):_0x49e346=VisuMZ[_0x3f96a5(0x718)](_0x49e346));const _0x288e6e=this[_0x3f96a5(0x48e)](),_0x41a8c1=Math['floor'](_0x288e6e*0.75);for(let _0x5af8c2=0x0;_0x5af8c2<_0x49e346[_0x3f96a5(0x929)];_0x5af8c2++){if(_0x3f96a5(0x6f1)===_0x3f96a5(0x6f1)){const _0x9cc1f4=this[_0x3f96a5(0x5a9)](_0x41a8c1,_0x288e6e);_0x9cc1f4[_0x3f96a5(0x351)][_0x3f96a5(0x19d)](_0x49e346[_0x5af8c2],0x0,0x0,_0x41a8c1,_0x288e6e,_0x3f96a5(0x1cf)),_0x9cc1f4['x']=(_0x5af8c2-(_0x49e346[_0x3f96a5(0x929)]-0x1)/0x2)*_0x41a8c1,_0x9cc1f4['dy']=-_0x5af8c2;}else{_0x5f5aa3=_0x57f7ee(_0x3c8620)['toUpperCase']();const _0x43ff5b=_0x156846['CoreEngine']['Settings'][_0x3f96a5(0x185)];if(_0x54449b==='MAXHP')return _0x43ff5b['IconParam0'];if(_0x300f9e==='MAXMP')return _0x43ff5b[_0x3f96a5(0x259)];if(_0x12a352==='ATK')return _0x43ff5b[_0x3f96a5(0x68d)];if(_0x24c115==='DEF')return _0x43ff5b[_0x3f96a5(0x349)];if(_0x57738a===_0x3f96a5(0x362))return _0x43ff5b[_0x3f96a5(0x5ef)];if(_0x301b66===_0x3f96a5(0x75f))return _0x43ff5b[_0x3f96a5(0x2a3)];if(_0x17473f==='AGI')return _0x43ff5b['IconParam6'];if(_0x2030c5==='LUK')return _0x43ff5b[_0x3f96a5(0x8de)];if(_0x1d9096===_0x3f96a5(0x591))return _0x43ff5b[_0x3f96a5(0x4bf)];if(_0x22a3f5===_0x3f96a5(0x71a))return _0x43ff5b[_0x3f96a5(0x85c)];if(_0x123017===_0x3f96a5(0x2ab))return _0x43ff5b[_0x3f96a5(0x295)];if(_0x29b355===_0x3f96a5(0x887))return _0x43ff5b[_0x3f96a5(0x526)];if(_0x2caa36==='MEV')return _0x43ff5b[_0x3f96a5(0x1b9)];if(_0x4bd14a==='MRF')return _0x43ff5b[_0x3f96a5(0x998)];if(_0x5ae8be==='CNT')return _0x43ff5b[_0x3f96a5(0x64d)];if(_0x5be435===_0x3f96a5(0x1d7))return _0x43ff5b['IconXParam7'];if(_0x2c35f9==='MRG')return _0x43ff5b['IconXParam8'];if(_0x46c2fc===_0x3f96a5(0x30b))return _0x43ff5b[_0x3f96a5(0x288)];if(_0x435b2e==='TGR')return _0x43ff5b['IconSParam0'];if(_0x4a79fd===_0x3f96a5(0x76e))return _0x43ff5b[_0x3f96a5(0x6f0)];if(_0x498136==='REC')return _0x43ff5b[_0x3f96a5(0x71f)];if(_0x5ed11a===_0x3f96a5(0x5a8))return _0x43ff5b['IconSParam3'];if(_0x52c48d===_0x3f96a5(0x967))return _0x43ff5b[_0x3f96a5(0x4ac)];if(_0x4cacd2==='TCR')return _0x43ff5b['IconSParam5'];if(_0x4d96d5===_0x3f96a5(0x68e))return _0x43ff5b[_0x3f96a5(0x237)];if(_0x29736e==='MDR')return _0x43ff5b['IconSParam7'];if(_0x10a24d===_0x3f96a5(0x4d6))return _0x43ff5b[_0x3f96a5(0x4f0)];if(_0x33569b===_0x3f96a5(0x72a))return _0x43ff5b[_0x3f96a5(0x689)];if(_0x195c3b[_0x3f96a5(0x909)][_0x3f96a5(0x644)][_0x126e17])return _0x3e8c52[_0x3f96a5(0x909)][_0x3f96a5(0x644)][_0x1c6183]||0x0;return 0x0;}}},Sprite_Damage['prototype']['useDigitGrouping']=function(){const _0x21cdca=_0x5d57ff;return VisuMZ[_0x21cdca(0x909)][_0x21cdca(0x3d3)]['QoL'][_0x21cdca(0x692)];},Sprite_Damage[_0x5d57ff(0x5cf)][_0x5d57ff(0x313)]=function(){return ColorManager['outlineColorDmg']();},VisuMZ[_0x5d57ff(0x909)]['Sprite_Gauge_gaugeRate']=Sprite_Gauge[_0x5d57ff(0x5cf)][_0x5d57ff(0x648)],Sprite_Gauge[_0x5d57ff(0x5cf)][_0x5d57ff(0x648)]=function(){const _0x230954=_0x5d57ff;return VisuMZ[_0x230954(0x909)][_0x230954(0x2be)][_0x230954(0x3dd)](this)[_0x230954(0x9dc)](0x0,0x1);},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x30c)]=Sprite_Gauge[_0x5d57ff(0x5cf)][_0x5d57ff(0x8f9)],Sprite_Gauge[_0x5d57ff(0x5cf)][_0x5d57ff(0x8f9)]=function(){const _0x23e97f=_0x5d57ff;let _0x473b48=VisuMZ[_0x23e97f(0x909)][_0x23e97f(0x30c)][_0x23e97f(0x3dd)](this);return _0x473b48;},Sprite_Gauge['prototype'][_0x5d57ff(0x356)]=function(){const _0x55eaaf=_0x5d57ff;let _0x454343=this[_0x55eaaf(0x8f9)]();this['useDigitGrouping']()&&(_0x454343=VisuMZ[_0x55eaaf(0x718)](_0x454343));const _0x9ac393=this[_0x55eaaf(0x365)]()-0x1,_0x35063a=this[_0x55eaaf(0x3b1)]?this[_0x55eaaf(0x3b1)]():this[_0x55eaaf(0x4b7)]();this[_0x55eaaf(0x66c)](),this['bitmap'][_0x55eaaf(0x19d)](_0x454343,0x0,0x0,_0x9ac393,_0x35063a,_0x55eaaf(0x24a));},Sprite_Gauge[_0x5d57ff(0x5cf)]['valueOutlineWidth']=function(){return 0x3;},Sprite_Gauge[_0x5d57ff(0x5cf)][_0x5d57ff(0x49a)]=function(){const _0x32d51c=_0x5d57ff;return VisuMZ['CoreEngine'][_0x32d51c(0x3d3)]['QoL']['DigitGroupingGaugeSprites'];},Sprite_Gauge[_0x5d57ff(0x5cf)][_0x5d57ff(0x313)]=function(){const _0x1cd8dc=_0x5d57ff;return ColorManager[_0x1cd8dc(0x293)]();},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x69d)]=Sprite_Picture[_0x5d57ff(0x5cf)]['loadBitmap'],Sprite_Picture['prototype'][_0x5d57ff(0x244)]=function(){const _0x157e36=_0x5d57ff;if(this[_0x157e36(0x6ec)]['match'](/VisuMZ CoreEngine PictureIcon (\d+)/i)){if(_0x157e36(0x437)==='ytvjg'){return _0xe1f6d['prototype']['itemHeight'][_0x157e36(0x3dd)](this)+_0x2d710d[_0x157e36(0x909)][_0x157e36(0x3d3)][_0x157e36(0x990)][_0x157e36(0x36f)];;}else this['loadIconBitmap'](Number(RegExp['$1']));}else VisuMZ[_0x157e36(0x909)][_0x157e36(0x69d)][_0x157e36(0x3dd)](this);},Sprite_Picture['prototype'][_0x5d57ff(0x96a)]=function(_0x440422){const _0x4e2f09=_0x5d57ff,_0x2d710e=ImageManager[_0x4e2f09(0x438)],_0x51aa93=ImageManager[_0x4e2f09(0x90d)],_0x5144b6=this[_0x4e2f09(0x6ec)]['match'](/SMOOTH/i);this[_0x4e2f09(0x351)]=new Bitmap(_0x2d710e,_0x51aa93);const _0x3a22cc=ImageManager[_0x4e2f09(0x627)](_0x4e2f09(0x96c)),_0x428b3c=_0x440422%0x10*_0x2d710e,_0x5240d7=Math[_0x4e2f09(0x9ca)](_0x440422/0x10)*_0x51aa93;this['bitmap']['smooth']=_0x5144b6,this['bitmap'][_0x4e2f09(0x801)](_0x3a22cc,_0x428b3c,_0x5240d7,_0x2d710e,_0x51aa93,0x0,0x0,_0x2d710e,_0x51aa93);};function Sprite_TitlePictureButton(){this['initialize'](...arguments);}Sprite_TitlePictureButton[_0x5d57ff(0x5cf)]=Object[_0x5d57ff(0x2e3)](Sprite_Clickable['prototype']),Sprite_TitlePictureButton[_0x5d57ff(0x5cf)]['constructor']=Sprite_TitlePictureButton,Sprite_TitlePictureButton[_0x5d57ff(0x5cf)]['initialize']=function(_0x24ac76){const _0x4ddf16=_0x5d57ff;Sprite_Clickable[_0x4ddf16(0x5cf)][_0x4ddf16(0x4d1)][_0x4ddf16(0x3dd)](this),this[_0x4ddf16(0x711)]=_0x24ac76,this[_0x4ddf16(0x98f)]=null,this['setup']();},Sprite_TitlePictureButton[_0x5d57ff(0x5cf)][_0x5d57ff(0x534)]=function(){const _0x35ee3d=_0x5d57ff;this['x']=Graphics[_0x35ee3d(0x961)],this['y']=Graphics['height'],this[_0x35ee3d(0x206)]=![],this[_0x35ee3d(0x411)]();},Sprite_TitlePictureButton[_0x5d57ff(0x5cf)][_0x5d57ff(0x411)]=function(){const _0x295837=_0x5d57ff;this[_0x295837(0x351)]=ImageManager['loadPicture'](this[_0x295837(0x711)][_0x295837(0x264)]),this['bitmap'][_0x295837(0x651)](this[_0x295837(0x17d)]['bind'](this));},Sprite_TitlePictureButton['prototype']['onButtonImageLoad']=function(){const _0x52d29c=_0x5d57ff;this[_0x52d29c(0x711)][_0x52d29c(0x715)][_0x52d29c(0x3dd)](this),this[_0x52d29c(0x711)][_0x52d29c(0x3f5)]['call'](this),this[_0x52d29c(0x98e)](this['_data'][_0x52d29c(0x843)][_0x52d29c(0x487)](this));},Sprite_TitlePictureButton[_0x5d57ff(0x5cf)][_0x5d57ff(0x74d)]=function(){const _0x37000a=_0x5d57ff;Sprite_Clickable[_0x37000a(0x5cf)][_0x37000a(0x74d)][_0x37000a(0x3dd)](this),this['updateOpacity'](),this[_0x37000a(0x9a6)]();},Sprite_TitlePictureButton[_0x5d57ff(0x5cf)][_0x5d57ff(0x240)]=function(){const _0x36b550=_0x5d57ff;return VisuMZ[_0x36b550(0x909)][_0x36b550(0x3d3)][_0x36b550(0x734)][_0x36b550(0x281)][_0x36b550(0x530)];},Sprite_TitlePictureButton['prototype'][_0x5d57ff(0x414)]=function(){const _0x50ca0c=_0x5d57ff;this[_0x50ca0c(0x278)]||this[_0x50ca0c(0x41b)]?'FzcUP'===_0x50ca0c(0x560)?this[_0x50ca0c(0x663)]=0xff:(_0x5362ae['CoreEngine']['Graphics_printError'][_0x50ca0c(0x3dd)](this,_0x5172f7,_0xe8df89,_0x2e3210),_0x4222c2['ShowDevTools'](![])):_0x50ca0c(0x528)!==_0x50ca0c(0x528)?_0x302664+='(\x5cd+)([%％])>':(this['opacity']+=this['visible']?this[_0x50ca0c(0x240)]():-0x1*this[_0x50ca0c(0x240)](),this[_0x50ca0c(0x663)]=Math['min'](0xc0,this[_0x50ca0c(0x663)]));},Sprite_TitlePictureButton[_0x5d57ff(0x5cf)][_0x5d57ff(0x98e)]=function(_0x58cac6){const _0x25d0d6=_0x5d57ff;this[_0x25d0d6(0x98f)]=_0x58cac6;},Sprite_TitlePictureButton[_0x5d57ff(0x5cf)][_0x5d57ff(0x26d)]=function(){const _0x2cef0b=_0x5d57ff;if(this[_0x2cef0b(0x98f)]){if(_0x2cef0b(0x867)!==_0x2cef0b(0x867)){var _0x322ec8=_0x49de2b(_0x4895e0['$1'])/0x64;_0xc18548+=_0x322ec8;}else this[_0x2cef0b(0x98f)]();}},VisuMZ[_0x5d57ff(0x909)]['Spriteset_Base_initialize']=Spriteset_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x4d1)],Spriteset_Base[_0x5d57ff(0x5cf)]['initialize']=function(){const _0x4b5d78=_0x5d57ff;VisuMZ[_0x4b5d78(0x909)][_0x4b5d78(0x4bd)][_0x4b5d78(0x3dd)](this),this[_0x4b5d78(0x866)]();},Spriteset_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x866)]=function(){const _0x16dd47=_0x5d57ff;this[_0x16dd47(0x469)]=[],this[_0x16dd47(0x34d)]=[],this['_cacheScaleX']=this[_0x16dd47(0x672)]['x'],this[_0x16dd47(0x2f3)]=this[_0x16dd47(0x672)]['y'];},VisuMZ[_0x5d57ff(0x909)]['Spriteset_Base_destroy']=Spriteset_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x543)],Spriteset_Base[_0x5d57ff(0x5cf)]['destroy']=function(_0x5ea937){const _0xa1542f=_0x5d57ff;this['removeAllFauxAnimations'](),this[_0xa1542f(0x30d)](),VisuMZ[_0xa1542f(0x909)][_0xa1542f(0x8a4)][_0xa1542f(0x3dd)](this,_0x5ea937);},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x449)]=Spriteset_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x74d)],Spriteset_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x74d)]=function(){const _0x2acd0f=_0x5d57ff;VisuMZ[_0x2acd0f(0x909)][_0x2acd0f(0x449)][_0x2acd0f(0x3dd)](this),this[_0x2acd0f(0x40f)](),this['updateFauxAnimations'](),this[_0x2acd0f(0x8e4)]();},Spriteset_Base['prototype'][_0x5d57ff(0x40f)]=function(){const _0x41c3b2=_0x5d57ff;if(!VisuMZ[_0x41c3b2(0x909)]['Settings']['QoL'][_0x41c3b2(0x5f9)])return;if(this[_0x41c3b2(0x92a)]===this[_0x41c3b2(0x672)]['x']&&this[_0x41c3b2(0x2f3)]===this[_0x41c3b2(0x672)]['y'])return;this[_0x41c3b2(0x1a1)](),this[_0x41c3b2(0x92a)]=this[_0x41c3b2(0x672)]['x'],this[_0x41c3b2(0x2f3)]=this[_0x41c3b2(0x672)]['y'];},Spriteset_Base[_0x5d57ff(0x5cf)]['adjustPictureAntiZoom']=function(){const _0x57ec37=_0x5d57ff;if(SceneManager[_0x57ec37(0x9d8)]()&&Spriteset_Map[_0x57ec37(0x466)])return;else{if(SceneManager[_0x57ec37(0x808)]()&&Spriteset_Battle['DETACH_PICTURE_CONTAINER'])return;}this[_0x57ec37(0x672)]['x']!==0x0&&(_0x57ec37(0x28b)!==_0x57ec37(0x28b)?_0x57b31d=_0x504ac6[_0x57ec37(0x718)](_0x539636):(this['_pictureContainer'][_0x57ec37(0x672)]['x']=0x1/this[_0x57ec37(0x672)]['x'],this['_pictureContainer']['x']=-(this['x']/this[_0x57ec37(0x672)]['x'])));if(this[_0x57ec37(0x672)]['y']!==0x0){if(_0x57ec37(0x79b)!==_0x57ec37(0x79b))return _0x4c5dd5[_0x57ec37(0x604)][_0x57ec37(0x40d)]['call'](this);else this[_0x57ec37(0x559)][_0x57ec37(0x672)]['y']=0x1/this[_0x57ec37(0x672)]['y'],this[_0x57ec37(0x559)]['y']=-(this['y']/this[_0x57ec37(0x672)]['y']);}},VisuMZ[_0x5d57ff(0x909)]['Spriteset_Base_updatePosition']=Spriteset_Base['prototype'][_0x5d57ff(0x353)],Spriteset_Base['prototype'][_0x5d57ff(0x353)]=function(){const _0x2f0fb6=_0x5d57ff;VisuMZ[_0x2f0fb6(0x909)][_0x2f0fb6(0x5f0)][_0x2f0fb6(0x3dd)](this),this[_0x2f0fb6(0x339)]();},Spriteset_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x339)]=function(){const _0x31ad4a=_0x5d57ff;if(!$gameScreen)return;if($gameScreen[_0x31ad4a(0x976)]<=0x0)return;this['x']-=Math[_0x31ad4a(0x746)]($gameScreen[_0x31ad4a(0x884)]());const _0x3a5b68=$gameScreen[_0x31ad4a(0x403)]();switch($gameScreen[_0x31ad4a(0x403)]()){case'original':this[_0x31ad4a(0x80c)]();break;case'horizontal':this[_0x31ad4a(0x5cd)]();break;case _0x31ad4a(0x7f2):this[_0x31ad4a(0x6f7)]();break;default:this[_0x31ad4a(0x284)]();break;}},Spriteset_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x80c)]=function(){const _0x59ef65=_0x5d57ff,_0x56c2c6=VisuMZ[_0x59ef65(0x909)]['Settings'][_0x59ef65(0x2df)];if(_0x56c2c6&&_0x56c2c6[_0x59ef65(0x25c)]){if(_0x59ef65(0x7ae)===_0x59ef65(0x18a))_0x5a94c7=_0x1d3ced['round'](_0x4b3768),_0x349106=_0x32def3['round'](_0x5e2579),_0x500c2e[_0x59ef65(0x909)]['Window_StatusBase_drawActorSimpleStatus'][_0x59ef65(0x3dd)](this,_0x53017e,_0x42293a,_0xaae76a);else return _0x56c2c6['originalJS'][_0x59ef65(0x3dd)](this);}this['x']+=Math[_0x59ef65(0x746)]($gameScreen[_0x59ef65(0x884)]());},Spriteset_Base['prototype']['updatePositionCoreEngineShakeRand']=function(){const _0x38b9d2=_0x5d57ff,_0x1e7507=VisuMZ['CoreEngine'][_0x38b9d2(0x3d3)]['ScreenShake'];if(_0x1e7507&&_0x1e7507[_0x38b9d2(0x2ce)])return _0x1e7507[_0x38b9d2(0x2ce)][_0x38b9d2(0x3dd)](this);const _0x5df913=$gameScreen[_0x38b9d2(0x639)]*0.75,_0x19db49=$gameScreen['_shakeSpeed']*0.6,_0x157fb8=$gameScreen[_0x38b9d2(0x976)];this['x']+=Math[_0x38b9d2(0x746)](Math[_0x38b9d2(0x4e9)](_0x5df913)-Math[_0x38b9d2(0x4e9)](_0x19db49))*(Math['min'](_0x157fb8,0x1e)*0.5),this['y']+=Math['round'](Math[_0x38b9d2(0x4e9)](_0x5df913)-Math['randomInt'](_0x19db49))*(Math[_0x38b9d2(0x44a)](_0x157fb8,0x1e)*0.5);},Spriteset_Base[_0x5d57ff(0x5cf)]['updatePositionCoreEngineShakeHorz']=function(){const _0x3c3cff=_0x5d57ff,_0x436be9=VisuMZ[_0x3c3cff(0x909)][_0x3c3cff(0x3d3)][_0x3c3cff(0x2df)];if(_0x436be9&&_0x436be9['horzJS'])return _0x436be9[_0x3c3cff(0x706)][_0x3c3cff(0x3dd)](this);const _0x31e6d8=$gameScreen['_shakePower']*0.75,_0x1eb4b8=$gameScreen[_0x3c3cff(0x606)]*0.6,_0x74c4fc=$gameScreen[_0x3c3cff(0x976)];this['x']+=Math[_0x3c3cff(0x746)](Math[_0x3c3cff(0x4e9)](_0x31e6d8)-Math[_0x3c3cff(0x4e9)](_0x1eb4b8))*(Math[_0x3c3cff(0x44a)](_0x74c4fc,0x1e)*0.5);},Spriteset_Base[_0x5d57ff(0x5cf)]['updatePositionCoreEngineShakeVert']=function(){const _0x211b95=_0x5d57ff,_0x5884b6=VisuMZ['CoreEngine']['Settings']['ScreenShake'];if(_0x5884b6&&_0x5884b6[_0x211b95(0x714)])return _0x5884b6[_0x211b95(0x714)][_0x211b95(0x3dd)](this);const _0x27f988=$gameScreen['_shakePower']*0.75,_0x3920c3=$gameScreen[_0x211b95(0x606)]*0.6,_0x22ff7f=$gameScreen[_0x211b95(0x976)];this['y']+=Math[_0x211b95(0x746)](Math['randomInt'](_0x27f988)-Math['randomInt'](_0x3920c3))*(Math[_0x211b95(0x44a)](_0x22ff7f,0x1e)*0.5);},Spriteset_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x553)]=function(){const _0x3ed84e=_0x5d57ff;for(const _0xfb72a5 of this[_0x3ed84e(0x469)]){!_0xfb72a5['isPlaying']()&&(_0x3ed84e(0x2d9)===_0x3ed84e(0x4c6)?_0x4151db[_0x3ed84e(0x62d)]&&_0x4c0aef[_0x3ed84e(0x62d)]():this[_0x3ed84e(0x8e8)](_0xfb72a5));}this[_0x3ed84e(0x4c9)]();},Spriteset_Base['prototype'][_0x5d57ff(0x4c9)]=function(){const _0x43f274=_0x5d57ff;for(;;){const _0x1eed1a=$gameTemp[_0x43f274(0x761)]();if(_0x1eed1a)'XebTO'===_0x43f274(0x964)?this[_0x43f274(0x6bd)](_0x1327ba):this[_0x43f274(0x6bd)](_0x1eed1a);else break;}},Spriteset_Base['prototype'][_0x5d57ff(0x6bd)]=function(_0x16fa8b){const _0x5e8889=_0x5d57ff,_0x19f98e=$dataAnimations[_0x16fa8b[_0x5e8889(0x798)]],_0x1dafd2=_0x16fa8b[_0x5e8889(0x752)],_0x28c4ef=_0x16fa8b[_0x5e8889(0x646)],_0x57f5d7=_0x16fa8b['mute'];let _0x12fcb9=this[_0x5e8889(0x36b)]();const _0x5a3d19=this['animationNextDelay']();if(this['isAnimationForEach'](_0x19f98e))for(const _0x4255a0 of _0x1dafd2){this['createFauxAnimationSprite']([_0x4255a0],_0x19f98e,_0x28c4ef,_0x12fcb9,_0x57f5d7),_0x12fcb9+=_0x5a3d19;}else{if('QjwZC'===_0x5e8889(0x91f))this[_0x5e8889(0x80a)](_0x1dafd2,_0x19f98e,_0x28c4ef,_0x12fcb9,_0x57f5d7);else{const _0x5ca3ca=_0x346acd['CoreEngine'][_0x5e8889(0x3d3)]['jsQuickFunc'];for(const _0x4d35d8 of _0x5ca3ca){const _0x49daae=_0x4d35d8[_0x5e8889(0x940)][_0x5e8889(0x470)](/[ ]/g,''),_0x2b79f2=_0x4d35d8[_0x5e8889(0x8e9)];_0x20fe1c[_0x5e8889(0x909)][_0x5e8889(0x754)](_0x49daae,_0x2b79f2);}}}},Spriteset_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x80a)]=function(_0x4ab961,_0x403671,_0x150188,_0x2e8678,_0xd11c6b){const _0x4784dd=_0x5d57ff,_0x10c339=this[_0x4784dd(0x9a7)](_0x403671),_0x44ad8c=new(_0x10c339?Sprite_AnimationMV:Sprite_Animation)(),_0x16556a=this[_0x4784dd(0x1cc)](_0x4ab961);this['animationShouldMirror'](_0x4ab961[0x0])&&(_0x150188=!_0x150188),_0x44ad8c[_0x4784dd(0x939)]=_0x4ab961,_0x44ad8c[_0x4784dd(0x534)](_0x16556a,_0x403671,_0x150188,_0x2e8678),_0x44ad8c[_0x4784dd(0x91e)](_0xd11c6b),this['_effectsContainer'][_0x4784dd(0x43b)](_0x44ad8c),this['_fauxAnimationSprites']['push'](_0x44ad8c);},Spriteset_Base['prototype'][_0x5d57ff(0x8e8)]=function(_0x3cd519){const _0x562ccd=_0x5d57ff;this['_fauxAnimationSprites']['remove'](_0x3cd519),this[_0x562ccd(0x38d)][_0x562ccd(0x230)](_0x3cd519);for(const _0x510013 of _0x3cd519[_0x562ccd(0x939)]){_0x562ccd(0x330)===_0x562ccd(0x7a6)?_0x4ed44e[_0x562ccd(0x909)]['Settings'][_0x562ccd(0x1d2)][_0x562ccd(0x60f)]&&(this[_0x562ccd(0x677)]=![]):_0x510013['endAnimation']&&('aJYaw'===_0x562ccd(0x904)?_0x510013[_0x562ccd(0x32c)]():this[_0x562ccd(0x599)][_0x562ccd(0x20c)](_0xc69bd6['layoutSettings'][_0x562ccd(0x6aa)]));}_0x3cd519[_0x562ccd(0x543)]();},Spriteset_Base['prototype']['removeAllFauxAnimations']=function(){const _0xcbac0c=_0x5d57ff;for(const _0x42b58e of this[_0xcbac0c(0x469)]){if(_0xcbac0c(0x72f)===_0xcbac0c(0x5f7)){_0x2767a0['CoreEngine'][_0xcbac0c(0x43d)]['call'](this,_0x28740d);const _0xd612d2=_0x311298[_0xcbac0c(0x957)];if(_0xd612d2[_0xcbac0c(0x749)](/<MAX LEVEL:[ ](\d+)>/i)){_0x5224[_0xcbac0c(0x695)]=_0x367a15(_0x556d51['$1']);if(_0x4f5c70[_0xcbac0c(0x695)]===0x0)_0x50f9a8[_0xcbac0c(0x695)]=_0x1fd43c[_0xcbac0c(0x6f6)];}_0xd612d2[_0xcbac0c(0x749)](/<INITIAL LEVEL:[ ](\d+)>/i)&&(_0x436851[_0xcbac0c(0x59b)]=_0x262f31[_0xcbac0c(0x44a)](_0x1271d6(_0x10d85c['$1']),_0x239a9f[_0xcbac0c(0x695)]));}else this[_0xcbac0c(0x8e8)](_0x42b58e);}},Spriteset_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x309)]=function(){const _0x13e2ac=_0x5d57ff;return this[_0x13e2ac(0x469)][_0x13e2ac(0x929)]>0x0;},Spriteset_Base[_0x5d57ff(0x5cf)]['updatePointAnimations']=function(){const _0x38dccc=_0x5d57ff;for(const _0x132105 of this[_0x38dccc(0x34d)]){!_0x132105[_0x38dccc(0x1e9)]()&&this[_0x38dccc(0x265)](_0x132105);}this[_0x38dccc(0x1f2)]();},Spriteset_Base['prototype'][_0x5d57ff(0x1f2)]=function(){const _0x1dbec1=_0x5d57ff;for(;;){if('SXTQB'===_0x1dbec1(0x209))this[_0x1dbec1(0x8c5)][_0x1dbec1(0x20c)](_0x69d870[_0x1dbec1(0x604)][_0x1dbec1(0x9c2)]);else{const _0x1e7020=$gameTemp[_0x1dbec1(0x1a6)]();if(_0x1e7020)this[_0x1dbec1(0x2d2)](_0x1e7020);else{if(_0x1dbec1(0x4e4)!==_0x1dbec1(0x3a2))break;else this[_0x1dbec1(0x96a)](_0x326150(_0x3d99d9['$1']));}}}},Spriteset_Base[_0x5d57ff(0x5cf)]['createPointAnimation']=function(_0x43023b){const _0x4dd4dd=_0x5d57ff,_0x399dba=$dataAnimations[_0x43023b[_0x4dd4dd(0x798)]],_0x56570d=this[_0x4dd4dd(0x97b)](_0x43023b),_0x254bc2=_0x43023b[_0x4dd4dd(0x646)],_0x23d684=_0x43023b[_0x4dd4dd(0x189)];let _0x3af0ac=this[_0x4dd4dd(0x36b)]();const _0x53c264=this[_0x4dd4dd(0x451)]();if(this[_0x4dd4dd(0x721)](_0x399dba)){if(_0x4dd4dd(0x4a0)!==_0x4dd4dd(0x7fd))for(const _0x15ff88 of _0x56570d){_0x4dd4dd(0x95b)===_0x4dd4dd(0x374)?this[_0x4dd4dd(0x9df)]&&(this[_0x4dd4dd(0x8d3)]-=this['openingSpeed'](),this[_0x4dd4dd(0x282)]()&&(this[_0x4dd4dd(0x9df)]=![])):(this[_0x4dd4dd(0x5a2)]([_0x15ff88],_0x399dba,_0x254bc2,_0x3af0ac,_0x23d684),_0x3af0ac+=_0x53c264);}else this[_0x4dd4dd(0x663)]=0xff;}else{if(_0x4dd4dd(0x5a0)!==_0x4dd4dd(0x2ac))this[_0x4dd4dd(0x5a2)](_0x56570d,_0x399dba,_0x254bc2,_0x3af0ac,_0x23d684);else for(const _0x32be90 of _0xd42c64[_0x4dd4dd(0x3e0)]){if(_0x32be90[_0x4dd4dd(0x825)][_0x4dd4dd(0x3dd)](this)){const _0x55e700=_0x32be90[_0x4dd4dd(0x996)];let _0x59436d=_0x32be90[_0x4dd4dd(0x1ad)];if(['',_0x4dd4dd(0x20e)][_0x4dd4dd(0x861)](_0x59436d))_0x59436d=_0x32be90['TextJS'][_0x4dd4dd(0x3dd)](this);const _0x3509c4=_0x32be90[_0x4dd4dd(0x759)][_0x4dd4dd(0x3dd)](this),_0x429206=_0x32be90[_0x4dd4dd(0x561)][_0x4dd4dd(0x3dd)](this);this[_0x4dd4dd(0x88b)](_0x59436d,_0x55e700,_0x3509c4,_0x429206),this[_0x4dd4dd(0x81c)](_0x55e700,_0x32be90[_0x4dd4dd(0x843)][_0x4dd4dd(0x487)](this,_0x429206));}}}},Spriteset_Base[_0x5d57ff(0x5cf)]['createPointAnimationTargets']=function(_0x13f279){const _0x36b46b=_0x5d57ff,_0x2a15c5=new Sprite_Clickable();_0x2a15c5['x']=_0x13f279['x'],_0x2a15c5['y']=_0x13f279['y'],_0x2a15c5['z']=0x64;const _0x15b218=this[_0x36b46b(0x5db)]();return _0x15b218[_0x36b46b(0x43b)](_0x2a15c5),[_0x2a15c5];},Spriteset_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x5db)]=function(){return this;},Spriteset_Map['prototype'][_0x5d57ff(0x5db)]=function(){return this['_tilemap']||this;},Spriteset_Battle[_0x5d57ff(0x5cf)][_0x5d57ff(0x5db)]=function(){return this['_battleField']||this;},Spriteset_Base['prototype']['createPointAnimationSprite']=function(_0x3b9062,_0x4bfa82,_0xe350ae,_0x309e7c,_0x1ace15){const _0x38b298=_0x5d57ff,_0x26d9a4=this[_0x38b298(0x9a7)](_0x4bfa82),_0x2f6288=new(_0x26d9a4?Sprite_AnimationMV:Sprite_Animation)();_0x2f6288[_0x38b298(0x939)]=_0x3b9062,_0x2f6288[_0x38b298(0x534)](_0x3b9062,_0x4bfa82,_0xe350ae,_0x309e7c),_0x2f6288[_0x38b298(0x91e)](_0x1ace15),this['_effectsContainer']['addChild'](_0x2f6288),this[_0x38b298(0x34d)][_0x38b298(0x1e2)](_0x2f6288);},Spriteset_Base[_0x5d57ff(0x5cf)]['removePointAnimation']=function(_0x355942){const _0x3fcd42=_0x5d57ff;this[_0x3fcd42(0x34d)][_0x3fcd42(0x277)](_0x355942),this[_0x3fcd42(0x38d)][_0x3fcd42(0x230)](_0x355942);for(const _0x5d40bf of _0x355942['targetObjects']){_0x5d40bf[_0x3fcd42(0x32c)]&&_0x5d40bf[_0x3fcd42(0x32c)]();const _0x5c99f2=this['getPointAnimationLayer']();if(_0x5c99f2)_0x5c99f2[_0x3fcd42(0x230)](_0x5d40bf);}_0x355942[_0x3fcd42(0x543)]();},Spriteset_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x30d)]=function(){const _0x1b1204=_0x5d57ff;for(const _0x5c567d of this[_0x1b1204(0x34d)]){if('aOBMG'!==_0x1b1204(0x24d))return _0x14ff55[_0x1b1204(0x604)][_0x1b1204(0x40d)][_0x1b1204(0x3dd)](this);else this[_0x1b1204(0x265)](_0x5c567d);}},Spriteset_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x6e7)]=function(){const _0x3f51b0=_0x5d57ff;return this[_0x3f51b0(0x34d)][_0x3f51b0(0x929)]>0x0;},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x51c)]=Spriteset_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x8ad)],Spriteset_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x8ad)]=function(){const _0x48efc7=_0x5d57ff;return VisuMZ[_0x48efc7(0x909)][_0x48efc7(0x51c)][_0x48efc7(0x3dd)](this)||this[_0x48efc7(0x6e7)]();},Spriteset_Map[_0x5d57ff(0x466)]=VisuMZ[_0x5d57ff(0x909)]['Settings']['QoL']['DetachMapPictureContainer']||![],VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x272)]=Scene_Map['prototype'][_0x5d57ff(0x268)],Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x268)]=function(){const _0x212699=_0x5d57ff;VisuMZ[_0x212699(0x909)][_0x212699(0x272)][_0x212699(0x3dd)](this);if(!Spriteset_Map[_0x212699(0x466)])return;const _0x3a4ceb=this['_spriteset'];if(!_0x3a4ceb)return;this[_0x212699(0x559)]=_0x3a4ceb[_0x212699(0x559)];if(!this[_0x212699(0x559)])return;this[_0x212699(0x43b)](this[_0x212699(0x559)]);},Spriteset_Battle[_0x5d57ff(0x466)]=VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3d3)][_0x5d57ff(0x1d2)][_0x5d57ff(0x394)]||![],VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x742)]=Scene_Battle['prototype'][_0x5d57ff(0x268)],Scene_Battle[_0x5d57ff(0x5cf)][_0x5d57ff(0x268)]=function(){const _0x375474=_0x5d57ff;VisuMZ[_0x375474(0x909)]['Scene_Battle_createSpriteset_detach'][_0x375474(0x3dd)](this);if(!Spriteset_Battle[_0x375474(0x466)])return;const _0x17311a=this[_0x375474(0x928)];if(!_0x17311a)return;this[_0x375474(0x559)]=_0x17311a['_pictureContainer'];if(!this[_0x375474(0x559)])return;this[_0x375474(0x43b)](this['_pictureContainer']);},Spriteset_Battle[_0x5d57ff(0x5cf)]['createBackground']=function(){const _0x443bae=_0x5d57ff;this[_0x443bae(0x1a2)]=new PIXI['filters'][(_0x443bae(0x5aa))](clamp=!![]),this['_backgroundSprite']=new Sprite(),this['_backgroundSprite'][_0x443bae(0x351)]=SceneManager['backgroundBitmap'](),this[_0x443bae(0x33b)][_0x443bae(0x59a)]=[this[_0x443bae(0x1a2)]],this[_0x443bae(0x23e)]['addChild'](this[_0x443bae(0x33b)]);},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x8b4)]=Spriteset_Battle[_0x5d57ff(0x5cf)][_0x5d57ff(0x605)],Spriteset_Battle[_0x5d57ff(0x5cf)][_0x5d57ff(0x605)]=function(){const _0x3419f6=_0x5d57ff;this['coreEngineRepositionEnemies']()&&this[_0x3419f6(0x4d0)](),VisuMZ[_0x3419f6(0x909)][_0x3419f6(0x8b4)][_0x3419f6(0x3dd)](this);},Spriteset_Battle[_0x5d57ff(0x5cf)][_0x5d57ff(0x9aa)]=function(){const _0x4765d4=_0x5d57ff,_0x442e8d=VisuMZ[_0x4765d4(0x909)][_0x4765d4(0x3d3)][_0x4765d4(0x53c)];if(!_0x442e8d)return![];if(Utils[_0x4765d4(0x2a6)]>=_0x4765d4(0x6dd)&&!_0x442e8d[_0x4765d4(0x1e6)])return![];return _0x442e8d['RepositionEnemies'];},Spriteset_Battle[_0x5d57ff(0x5cf)][_0x5d57ff(0x4d0)]=function(){const _0x17494e=_0x5d57ff;for(member of $gameTroop[_0x17494e(0x49c)]()){member[_0x17494e(0x33a)]();}},VisuMZ[_0x5d57ff(0x909)]['Window_Base_initialize']=Window_Base['prototype'][_0x5d57ff(0x4d1)],Window_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x4d1)]=function(_0x4d477f){const _0x1edd8a=_0x5d57ff;_0x4d477f['x']=Math[_0x1edd8a(0x746)](_0x4d477f['x']),_0x4d477f['y']=Math[_0x1edd8a(0x746)](_0x4d477f['y']),_0x4d477f[_0x1edd8a(0x961)]=Math[_0x1edd8a(0x746)](_0x4d477f['width']),_0x4d477f[_0x1edd8a(0x317)]=Math[_0x1edd8a(0x746)](_0x4d477f[_0x1edd8a(0x317)]),this[_0x1edd8a(0x2bb)](),VisuMZ['CoreEngine']['Window_Base_initialize'][_0x1edd8a(0x3dd)](this,_0x4d477f),this[_0x1edd8a(0x908)]();},Window_Base[_0x5d57ff(0x5cf)]['initDigitGrouping']=function(){const _0xea1087=_0x5d57ff;this[_0xea1087(0x400)]=VisuMZ[_0xea1087(0x909)][_0xea1087(0x3d3)][_0xea1087(0x1d2)]['DigitGroupingStandardText'],this[_0xea1087(0x922)]=VisuMZ[_0xea1087(0x909)][_0xea1087(0x3d3)][_0xea1087(0x1d2)][_0xea1087(0x946)];},Window_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x416)]=function(){const _0x24947a=_0x5d57ff;return VisuMZ[_0x24947a(0x909)][_0x24947a(0x3d3)][_0x24947a(0x990)][_0x24947a(0x193)];},Window_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x508)]=function(){const _0x343ef7=_0x5d57ff;return VisuMZ[_0x343ef7(0x909)][_0x343ef7(0x3d3)][_0x343ef7(0x990)][_0x343ef7(0x6e1)];},Window_Base['prototype'][_0x5d57ff(0x8a1)]=function(){const _0x31d5d2=_0x5d57ff;$gameSystem[_0x31d5d2(0x581)]?this[_0x31d5d2(0x764)]=$gameSystem[_0x31d5d2(0x581)]():this[_0x31d5d2(0x764)]=VisuMZ[_0x31d5d2(0x909)]['Settings'][_0x31d5d2(0x990)]['BackOpacity'];},Window_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x504)]=function(){const _0x43ac4d=_0x5d57ff;return VisuMZ[_0x43ac4d(0x909)][_0x43ac4d(0x3d3)][_0x43ac4d(0x990)][_0x43ac4d(0x260)];},Window_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x56c)]=function(){const _0x526b81=_0x5d57ff;return VisuMZ[_0x526b81(0x909)][_0x526b81(0x3d3)][_0x526b81(0x990)]['OpenSpeed'];},VisuMZ[_0x5d57ff(0x909)]['Window_Base_update']=Window_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x74d)],Window_Base[_0x5d57ff(0x5cf)]['update']=function(){const _0x4178c2=_0x5d57ff;VisuMZ[_0x4178c2(0x909)]['Window_Base_update'][_0x4178c2(0x3dd)](this),this[_0x4178c2(0x751)]();},Window_Base['prototype']['updateOpen']=function(){const _0x122306=_0x5d57ff;this[_0x122306(0x1b7)]&&(this[_0x122306(0x8d3)]+=this[_0x122306(0x56c)](),this[_0x122306(0x6ab)]()&&(this[_0x122306(0x1b7)]=![]));},Window_Base[_0x5d57ff(0x5cf)]['updateClose']=function(){const _0x264ad2=_0x5d57ff;if(this[_0x264ad2(0x9df)]){if(_0x264ad2(0x38a)!==_0x264ad2(0x722))this['openness']-=this[_0x264ad2(0x56c)](),this[_0x264ad2(0x282)]()&&(this[_0x264ad2(0x9df)]=![]);else return this[_0x264ad2(0x737)](_0x4fe4d0);}},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x76a)]=Window_Base['prototype'][_0x5d57ff(0x19d)],Window_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x19d)]=function(_0x13c91c,_0x282286,_0x4777c5,_0x201d95,_0x1b4455){const _0x4d82e8=_0x5d57ff;if(this['useDigitGrouping']())_0x13c91c=VisuMZ[_0x4d82e8(0x718)](_0x13c91c);VisuMZ[_0x4d82e8(0x909)][_0x4d82e8(0x76a)][_0x4d82e8(0x3dd)](this,_0x13c91c,_0x282286,_0x4777c5,_0x201d95,_0x1b4455);},Window_Base['prototype']['useDigitGrouping']=function(){const _0x4617a2=_0x5d57ff;return this[_0x4617a2(0x400)];},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3e8)]=Window_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x8b3)],Window_Base[_0x5d57ff(0x5cf)]['createTextState']=function(_0x1760ac,_0x4a8ca7,_0x4609fa,_0x244e6f){const _0x388c00=_0x5d57ff;var _0x53f0d5=VisuMZ[_0x388c00(0x909)][_0x388c00(0x3e8)][_0x388c00(0x3dd)](this,_0x1760ac,_0x4a8ca7,_0x4609fa,_0x244e6f);if(this['useDigitGroupingEx']())_0x53f0d5[_0x388c00(0x79e)]=VisuMZ[_0x388c00(0x718)](_0x53f0d5[_0x388c00(0x79e)]);return _0x53f0d5;},Window_Base[_0x5d57ff(0x5cf)]['useDigitGroupingEx']=function(){const _0x513896=_0x5d57ff;return this[_0x513896(0x922)];},Window_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x5e3)]=function(_0x345578){const _0x53b773=_0x5d57ff;this[_0x53b773(0x400)]=_0x345578;},Window_Base[_0x5d57ff(0x5cf)]['enableDigitGroupingEx']=function(_0x27fb56){this['_digitGroupingEx']=_0x27fb56;},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3d7)]=Window_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x371)],Window_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x371)]=function(_0x4b5cc2,_0x27a835,_0x17eebe){const _0x1609ea=_0x5d57ff;_0x27a835=Math[_0x1609ea(0x746)](_0x27a835),_0x17eebe=Math[_0x1609ea(0x746)](_0x17eebe),VisuMZ['CoreEngine'][_0x1609ea(0x3d7)][_0x1609ea(0x3dd)](this,_0x4b5cc2,_0x27a835,_0x17eebe);},VisuMZ['CoreEngine'][_0x5d57ff(0x4e1)]=Window_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x863)],Window_Base[_0x5d57ff(0x5cf)]['drawFace']=function(_0x52cef5,_0x101c35,_0x544d81,_0x360dc7,_0x67427b,_0x12ccf4){const _0x4bc509=_0x5d57ff;_0x67427b=_0x67427b||ImageManager[_0x4bc509(0x348)],_0x12ccf4=_0x12ccf4||ImageManager[_0x4bc509(0x9e5)],_0x544d81=Math[_0x4bc509(0x746)](_0x544d81),_0x360dc7=Math[_0x4bc509(0x746)](_0x360dc7),_0x67427b=Math[_0x4bc509(0x746)](_0x67427b),_0x12ccf4=Math[_0x4bc509(0x746)](_0x12ccf4),VisuMZ['CoreEngine']['Window_Base_drawFace'][_0x4bc509(0x3dd)](this,_0x52cef5,_0x101c35,_0x544d81,_0x360dc7,_0x67427b,_0x12ccf4);},VisuMZ['CoreEngine'][_0x5d57ff(0x99a)]=Window_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x368)],Window_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x368)]=function(_0x43c63e,_0xdb2ea2,_0x5860c6,_0x5476d4){const _0x34697a=_0x5d57ff;_0x5860c6=Math[_0x34697a(0x746)](_0x5860c6),_0x5476d4=Math['round'](_0x5476d4),VisuMZ[_0x34697a(0x909)][_0x34697a(0x99a)][_0x34697a(0x3dd)](this,_0x43c63e,_0xdb2ea2,_0x5860c6,_0x5476d4);},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x1bf)]=Window_Selectable[_0x5d57ff(0x5cf)]['itemRect'],Window_Selectable[_0x5d57ff(0x5cf)][_0x5d57ff(0x25a)]=function(_0x5e61d4){const _0x24b987=_0x5d57ff;let _0x32436b=VisuMZ['CoreEngine'][_0x24b987(0x1bf)][_0x24b987(0x3dd)](this,_0x5e61d4);return _0x32436b['x']=Math['round'](_0x32436b['x']),_0x32436b['y']=Math[_0x24b987(0x746)](_0x32436b['y']),_0x32436b[_0x24b987(0x961)]=Math[_0x24b987(0x746)](_0x32436b[_0x24b987(0x961)]),_0x32436b[_0x24b987(0x317)]=Math[_0x24b987(0x746)](_0x32436b[_0x24b987(0x317)]),_0x32436b;},VisuMZ['CoreEngine'][_0x5d57ff(0x5f8)]=Window_StatusBase['prototype']['drawActorSimpleStatus'],Window_StatusBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x60b)]=function(_0x106d1b,_0x40463f,_0x361d84){const _0x14e31d=_0x5d57ff;_0x40463f=Math[_0x14e31d(0x746)](_0x40463f),_0x361d84=Math[_0x14e31d(0x746)](_0x361d84),VisuMZ['CoreEngine']['Window_StatusBase_drawActorSimpleStatus']['call'](this,_0x106d1b,_0x40463f,_0x361d84);},Window_Base[_0x5d57ff(0x5cf)]['initCoreEasing']=function(){const _0x74f60e=_0x5d57ff;this['_coreEasing']={'duration':0x0,'wholeDuration':0x0,'type':'LINEAR','targetX':this['x'],'targetY':this['y'],'targetScaleX':this[_0x74f60e(0x672)]['x'],'targetScaleY':this['scale']['y'],'targetOpacity':this[_0x74f60e(0x663)],'targetBackOpacity':this[_0x74f60e(0x764)],'targetContentsOpacity':this['contentsOpacity']};},Window_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x751)]=function(){const _0x10a751=_0x5d57ff;if(!this[_0x10a751(0x727)])return;if(this[_0x10a751(0x727)][_0x10a751(0x762)]<=0x0)return;this['x']=this[_0x10a751(0x49e)](this['x'],this[_0x10a751(0x727)]['targetX']),this['y']=this[_0x10a751(0x49e)](this['y'],this[_0x10a751(0x727)][_0x10a751(0x34c)]),this[_0x10a751(0x672)]['x']=this[_0x10a751(0x49e)](this[_0x10a751(0x672)]['x'],this['_coreEasing'][_0x10a751(0x92f)]),this[_0x10a751(0x672)]['y']=this['applyCoreEasing'](this[_0x10a751(0x672)]['y'],this[_0x10a751(0x727)]['targetScaleY']),this[_0x10a751(0x663)]=this['applyCoreEasing'](this[_0x10a751(0x663)],this[_0x10a751(0x727)]['targetOpacity']),this[_0x10a751(0x764)]=this['applyCoreEasing'](this[_0x10a751(0x764)],this[_0x10a751(0x727)]['targetBackOpacity']),this[_0x10a751(0x6e3)]=this[_0x10a751(0x49e)](this[_0x10a751(0x6e3)],this[_0x10a751(0x727)][_0x10a751(0x608)]),this[_0x10a751(0x727)][_0x10a751(0x762)]--;},Window_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x49e)]=function(_0x530298,_0x57692d){const _0x47c588=_0x5d57ff;if(!this[_0x47c588(0x727)])return _0x57692d;const _0x9a119a=this[_0x47c588(0x727)][_0x47c588(0x762)],_0x2a89c6=this['_coreEasing'][_0x47c588(0x1ed)],_0x47a1cf=this[_0x47c588(0x290)]((_0x2a89c6-_0x9a119a)/_0x2a89c6),_0x5e5a0e=this[_0x47c588(0x290)]((_0x2a89c6-_0x9a119a+0x1)/_0x2a89c6),_0x2da6fc=(_0x530298-_0x57692d*_0x47a1cf)/(0x1-_0x47a1cf);return _0x2da6fc+(_0x57692d-_0x2da6fc)*_0x5e5a0e;},Window_Base['prototype']['calcCoreEasing']=function(_0x252466){const _0x145ed2=_0x5d57ff;if(!this['_coreEasing'])return _0x252466;return VisuMZ[_0x145ed2(0x305)](_0x252466,this['_coreEasing'][_0x145ed2(0x40b)]||_0x145ed2(0x54b));},Window_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x7ed)]=function(_0x4e26c7,_0x7b8fba){const _0x1fb66b=_0x5d57ff;if(!this[_0x1fb66b(0x727)])return;this['x']=this['_coreEasing'][_0x1fb66b(0x65f)],this['y']=this[_0x1fb66b(0x727)]['targetY'],this[_0x1fb66b(0x672)]['x']=this[_0x1fb66b(0x727)][_0x1fb66b(0x92f)],this[_0x1fb66b(0x672)]['y']=this[_0x1fb66b(0x727)][_0x1fb66b(0x5e6)],this[_0x1fb66b(0x663)]=this[_0x1fb66b(0x727)]['targetOpacity'],this[_0x1fb66b(0x764)]=this[_0x1fb66b(0x727)][_0x1fb66b(0x45b)],this[_0x1fb66b(0x6e3)]=this['_coreEasing'][_0x1fb66b(0x608)],this[_0x1fb66b(0x7ac)](_0x4e26c7,_0x7b8fba,this['x'],this['y'],this['scale']['x'],this[_0x1fb66b(0x672)]['y'],this[_0x1fb66b(0x663)],this[_0x1fb66b(0x764)],this[_0x1fb66b(0x6e3)]);},Window_Base['prototype']['setupCoreEasing']=function(_0x377ff2,_0x43e570,_0x3fd3cf,_0x5abfa4,_0x3f25ae,_0x1977e9,_0x362c4e,_0x1a5c2e,_0x150450){const _0x15bbfa=_0x5d57ff;this[_0x15bbfa(0x727)]={'duration':_0x377ff2,'wholeDuration':_0x377ff2,'type':_0x43e570,'targetX':_0x3fd3cf,'targetY':_0x5abfa4,'targetScaleX':_0x3f25ae,'targetScaleY':_0x1977e9,'targetOpacity':_0x362c4e,'targetBackOpacity':_0x1a5c2e,'targetContentsOpacity':_0x150450};},Window_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x956)]=function(_0x4521ac,_0x5ab373,_0x40c1be,_0x4178a0,_0x4ba3d0){const _0x2579bd=_0x5d57ff;this[_0x2579bd(0x8d6)](),this[_0x2579bd(0x452)]['fontSize']=VisuMZ['CoreEngine'][_0x2579bd(0x3d3)][_0x2579bd(0x211)]['GoldFontSize'];const _0xa5741=VisuMZ['CoreEngine'][_0x2579bd(0x3d3)]['Gold']['GoldIcon'];if(_0xa5741>0x0&&_0x5ab373===TextManager[_0x2579bd(0x65a)]){if(_0x2579bd(0x4b3)!==_0x2579bd(0x4b3))_0x3780e6['atbActive']=![];else{const _0x144630=_0x4178a0+(this[_0x2579bd(0x416)]()-ImageManager[_0x2579bd(0x90d)])/0x2;this['drawIcon'](_0xa5741,_0x40c1be+(_0x4ba3d0-ImageManager[_0x2579bd(0x438)]),_0x144630),_0x4ba3d0-=ImageManager[_0x2579bd(0x438)]+0x4;}}else{if('WppnO'===_0x2579bd(0x63a))this[_0x2579bd(0x216)](ColorManager['systemColor']()),this[_0x2579bd(0x19d)](_0x5ab373,_0x40c1be,_0x4178a0,_0x4ba3d0,_0x2579bd(0x24a)),_0x4ba3d0-=this[_0x2579bd(0x55b)](_0x5ab373)+0x6;else return _0x255eb4[_0x2579bd(0x909)]['Settings']['UI']['CommandWidth'];}this[_0x2579bd(0x850)]();const _0x138564=this[_0x2579bd(0x55b)](this[_0x2579bd(0x400)]?VisuMZ['GroupDigits'](_0x4521ac):_0x4521ac);_0x138564>_0x4ba3d0?this['drawText'](VisuMZ[_0x2579bd(0x909)][_0x2579bd(0x3d3)][_0x2579bd(0x211)]['GoldOverlap'],_0x40c1be,_0x4178a0,_0x4ba3d0,'right'):this[_0x2579bd(0x19d)](_0x4521ac,_0x40c1be,_0x4178a0,_0x4ba3d0,_0x2579bd(0x24a)),this[_0x2579bd(0x8d6)]();},Window_Base['prototype'][_0x5d57ff(0x297)]=function(_0x4170e2,_0x48d7bf,_0x5ad21d,_0x576f64,_0x4a1468){const _0x39a390=_0x5d57ff,_0x3b1dad=ImageManager[_0x39a390(0x627)](_0x39a390(0x96c)),_0x692b64=ImageManager[_0x39a390(0x438)],_0x1ffbd8=ImageManager[_0x39a390(0x90d)],_0x1a0801=_0x4170e2%0x10*_0x692b64,_0x4f828c=Math[_0x39a390(0x9ca)](_0x4170e2/0x10)*_0x1ffbd8,_0x36d45f=_0x576f64,_0x40e844=_0x576f64;this[_0x39a390(0x452)]['_context']['imageSmoothingEnabled']=_0x4a1468,this[_0x39a390(0x452)][_0x39a390(0x801)](_0x3b1dad,_0x1a0801,_0x4f828c,_0x692b64,_0x1ffbd8,_0x48d7bf,_0x5ad21d,_0x36d45f,_0x40e844),this[_0x39a390(0x452)][_0x39a390(0x200)][_0x39a390(0x883)]=!![];},Window_Base[_0x5d57ff(0x5cf)]['drawGauge']=function(_0x3ffd26,_0x4a06cb,_0x407719,_0x4d8432,_0x14aa26,_0x1a89a0){const _0x46ad6e=_0x5d57ff,_0x476eb4=Math[_0x46ad6e(0x9ca)]((_0x407719-0x2)*_0x4d8432),_0x27ed7f=Sprite_Gauge['prototype'][_0x46ad6e(0x730)]['call'](this),_0xe9bdb5=_0x4a06cb+this[_0x46ad6e(0x416)]()-_0x27ed7f-0x2;this[_0x46ad6e(0x452)]['fillRect'](_0x3ffd26,_0xe9bdb5,_0x407719,_0x27ed7f,ColorManager[_0x46ad6e(0x402)]()),this[_0x46ad6e(0x452)][_0x46ad6e(0x6ed)](_0x3ffd26+0x1,_0xe9bdb5+0x1,_0x476eb4,_0x27ed7f-0x2,_0x14aa26,_0x1a89a0);},Window_Selectable[_0x5d57ff(0x5cf)]['cursorDown']=function(_0x5001b9){const _0x31f2d8=_0x5d57ff;let _0x3e9a0a=this[_0x31f2d8(0x697)]();const _0x248ba0=this[_0x31f2d8(0x3c6)](),_0x57f21f=this[_0x31f2d8(0x568)]();if(this['isUseModernControls']()&&(_0x3e9a0a<_0x248ba0||_0x5001b9&&_0x57f21f===0x1)){if(_0x31f2d8(0x705)!==_0x31f2d8(0x705))this['_registerKeyInput'](_0x435423);else{_0x3e9a0a+=_0x57f21f;if(_0x3e9a0a>=_0x248ba0)_0x3e9a0a=_0x248ba0-0x1;this['smoothSelect'](_0x3e9a0a);}}else!this[_0x31f2d8(0x33d)]()&&((_0x3e9a0a<_0x248ba0-_0x57f21f||_0x5001b9&&_0x57f21f===0x1)&&this[_0x31f2d8(0x214)]((_0x3e9a0a+_0x57f21f)%_0x248ba0));},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x62f)]=Window_Selectable['prototype']['cursorDown'],Window_Selectable[_0x5d57ff(0x5cf)][_0x5d57ff(0x7fa)]=function(_0x1fa0c8){const _0x39804d=_0x5d57ff;if(this[_0x39804d(0x33d)]()&&_0x1fa0c8&&this['maxCols']()===0x1&&this[_0x39804d(0x697)]()===this[_0x39804d(0x3c6)]()-0x1)this[_0x39804d(0x214)](0x0);else{if(_0x39804d(0x869)===_0x39804d(0x869))VisuMZ['CoreEngine']['Window_Selectable_cursorDown'][_0x39804d(0x3dd)](this,_0x1fa0c8);else{if(_0x428137['inBattle']())return;_0x4ad08e['ConvertParams'](_0x2a8dcb,_0xfab26c);const _0x25a643=_0x5194ba[_0x39804d(0x405)];if(_0x25a643[_0x39804d(0x749)](/Front/i))_0x3067a1[_0x39804d(0x8a2)](![]);else _0x25a643['match'](/Side/i)?_0xe37b9[_0x39804d(0x8a2)](!![]):_0x5f7158['setSideView'](!_0x163e6b[_0x39804d(0x9eb)]());}}},Window_Selectable[_0x5d57ff(0x5cf)][_0x5d57ff(0x477)]=function(_0x34e6b6){const _0x38f0aa=_0x5d57ff;let _0x5501bb=Math[_0x38f0aa(0x8ee)](0x0,this[_0x38f0aa(0x697)]());const _0x3fdf54=this[_0x38f0aa(0x3c6)](),_0x3e32f1=this['maxCols']();if(this[_0x38f0aa(0x33d)]()&&_0x5501bb>0x0||_0x34e6b6&&_0x3e32f1===0x1){_0x5501bb-=_0x3e32f1;if(_0x5501bb<=0x0)_0x5501bb=0x0;this[_0x38f0aa(0x214)](_0x5501bb);}else!this[_0x38f0aa(0x33d)]()&&('wiJIC'!=='wiJIC'?(_0x4ef003[_0x38f0aa(0x909)]['Scene_MenuBase_createCancelButton'][_0x38f0aa(0x3dd)](this),_0x3a939b['isSideButtonLayout']()&&this['moveCancelButtonSideButtonLayout']()):(_0x5501bb>=_0x3e32f1||_0x34e6b6&&_0x3e32f1===0x1)&&this[_0x38f0aa(0x214)]((_0x5501bb-_0x3e32f1+_0x3fdf54)%_0x3fdf54));},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x577)]=Window_Selectable[_0x5d57ff(0x5cf)][_0x5d57ff(0x477)],Window_Selectable['prototype'][_0x5d57ff(0x477)]=function(_0x356986){const _0x55160a=_0x5d57ff;this[_0x55160a(0x33d)]()&&_0x356986&&this['maxCols']()===0x1&&this[_0x55160a(0x697)]()===0x0?this['smoothSelect'](this[_0x55160a(0x3c6)]()-0x1):_0x55160a(0x7e8)!==_0x55160a(0x7e8)?this[_0x55160a(0x452)][_0x55160a(0x48e)]<=0x60&&(this[_0x55160a(0x452)]['fontSize']+=0x6):VisuMZ['CoreEngine'][_0x55160a(0x577)][_0x55160a(0x3dd)](this,_0x356986);},Window_Selectable[_0x5d57ff(0x5cf)][_0x5d57ff(0x33d)]=function(){const _0x30fca9=_0x5d57ff;return VisuMZ[_0x30fca9(0x909)][_0x30fca9(0x3d3)][_0x30fca9(0x1d2)][_0x30fca9(0x382)];},VisuMZ[_0x5d57ff(0x909)]['Window_Selectable_processCursorMove']=Window_Selectable[_0x5d57ff(0x5cf)][_0x5d57ff(0x3ac)],Window_Selectable[_0x5d57ff(0x5cf)][_0x5d57ff(0x3ac)]=function(){const _0x5cd1b2=_0x5d57ff;this['isUseModernControls']()?(this[_0x5cd1b2(0x78c)](),this['processCursorHomeEndTrigger']()):_0x5cd1b2(0x562)===_0x5cd1b2(0x562)?VisuMZ[_0x5cd1b2(0x909)][_0x5cd1b2(0x2a2)][_0x5cd1b2(0x3dd)](this):this[_0x5cd1b2(0x385)][_0x5cd1b2(0x20c)](_0x567f7f['layoutSettings'][_0x5cd1b2(0x266)]);},Window_Selectable[_0x5d57ff(0x5cf)][_0x5d57ff(0x8d7)]=function(){return!![];},Window_Selectable[_0x5d57ff(0x5cf)]['processCursorMoveModernControls']=function(){const _0x4bc7d4=_0x5d57ff;if(this['isCursorMovable']()){const _0x54bbf8=this[_0x4bc7d4(0x697)]();Input[_0x4bc7d4(0x63e)](_0x4bc7d4(0x6d2))&&(Input[_0x4bc7d4(0x947)](_0x4bc7d4(0x93f))&&this[_0x4bc7d4(0x8d7)]()?'RHQTQ'!=='ZaOUz'?this[_0x4bc7d4(0x1a4)]():this['doesNameContainBannedWords']()?this[_0x4bc7d4(0x1e0)]():_0x4b2c58['CoreEngine'][_0x4bc7d4(0x1b2)]['call'](this):this[_0x4bc7d4(0x7fa)](Input['isTriggered'](_0x4bc7d4(0x6d2))));Input[_0x4bc7d4(0x63e)]('up')&&(Input[_0x4bc7d4(0x947)]('shift')&&this[_0x4bc7d4(0x8d7)]()?this[_0x4bc7d4(0x86b)]():_0x4bc7d4(0x77a)===_0x4bc7d4(0x5ff)?_0x4d7d2f['initialLevel']=_0x3ca939[_0x4bc7d4(0x44a)](_0x302d51(_0x344060['$1']),_0x1bceaa['maxLevel']):this['cursorUp'](Input[_0x4bc7d4(0x47e)]('up')));Input[_0x4bc7d4(0x63e)]('right')&&this[_0x4bc7d4(0x574)](Input[_0x4bc7d4(0x47e)](_0x4bc7d4(0x24a)));if(Input['isRepeated'](_0x4bc7d4(0x60d))){if(_0x4bc7d4(0x3ad)!==_0x4bc7d4(0x3ad))return _0xba2e0d[_0x4bc7d4(0x909)]['Settings'][_0x4bc7d4(0x5f4)][_0x4bc7d4(0x3e3)]||_0x4bc7d4(0x586);else this[_0x4bc7d4(0x87d)](Input[_0x4bc7d4(0x47e)](_0x4bc7d4(0x60d)));}!this[_0x4bc7d4(0x84b)](_0x4bc7d4(0x4f8))&&Input[_0x4bc7d4(0x63e)](_0x4bc7d4(0x4f8))&&this[_0x4bc7d4(0x1a4)]();if(!this[_0x4bc7d4(0x84b)](_0x4bc7d4(0x4bb))&&Input[_0x4bc7d4(0x63e)](_0x4bc7d4(0x4bb))){if('TOiis'!==_0x4bc7d4(0x322))return _0x5e6c98[_0x4bc7d4(0x5cf)]['textWidth']['call'](this,_0x1946af);else this['cursorPageup']();}if(this[_0x4bc7d4(0x697)]()!==_0x54bbf8){if('ZaAVc'!==_0x4bc7d4(0x446))this[_0x4bc7d4(0x954)]();else return this;}}},Window_Selectable[_0x5d57ff(0x5cf)][_0x5d57ff(0x3d5)]=function(){const _0x162106=_0x5d57ff;if(this[_0x162106(0x420)]()){if('MhXQM'===_0x162106(0x86f)){const _0x53cc2a=this[_0x162106(0x697)]();Input['isTriggered'](_0x162106(0x4b0))&&this['smoothSelect'](Math['min'](this[_0x162106(0x697)](),0x0)),Input['isTriggered'](_0x162106(0x352))&&(_0x162106(0x27c)===_0x162106(0x27c)?this[_0x162106(0x214)](Math['max'](this[_0x162106(0x697)](),this[_0x162106(0x3c6)]()-0x1)):(this[_0x162106(0x5c8)]['x']=-0x1*(this[_0x162106(0x5c8)][_0x162106(0x961)]+this[_0x162106(0x79c)][_0x162106(0x961)]+0x8),this[_0x162106(0x79c)]['x']=-0x1*(this[_0x162106(0x79c)][_0x162106(0x961)]+0x4))),this[_0x162106(0x697)]()!==_0x53cc2a&&this['playCursorSound']();}else return _0x541a80['CoreEngine'][_0x162106(0x3d3)]['UI']['RightMenus'];}},VisuMZ[_0x5d57ff(0x909)]['Window_Selectable_processTouch']=Window_Selectable[_0x5d57ff(0x5cf)][_0x5d57ff(0x9a6)],Window_Selectable['prototype']['processTouch']=function(){const _0x3ada0e=_0x5d57ff;if(this[_0x3ada0e(0x33d)]())_0x3ada0e(0x464)!=='fTnzW'?(_0x147938[_0x3ada0e(0x909)][_0x3ada0e(0x985)][_0x3ada0e(0x3dd)](this),this[_0x3ada0e(0x889)](),this[_0x3ada0e(0x87a)]()):this[_0x3ada0e(0x22a)]();else{if(_0x3ada0e(0x241)==='bcWzi')VisuMZ['CoreEngine']['Window_Selectable_processTouch'][_0x3ada0e(0x3dd)](this);else return this['refresh']();}},Window_Selectable[_0x5d57ff(0x5cf)]['processTouchModernControls']=function(){const _0x30879a=_0x5d57ff;VisuMZ[_0x30879a(0x909)][_0x30879a(0x915)][_0x30879a(0x3dd)](this);},Window_Selectable[_0x5d57ff(0x5cf)]['colSpacing']=function(){const _0x3abf0e=_0x5d57ff;return VisuMZ[_0x3abf0e(0x909)][_0x3abf0e(0x3d3)][_0x3abf0e(0x990)]['ColSpacing'];},Window_Selectable[_0x5d57ff(0x5cf)]['rowSpacing']=function(){const _0x227474=_0x5d57ff;return VisuMZ[_0x227474(0x909)][_0x227474(0x3d3)][_0x227474(0x990)][_0x227474(0x977)];},Window_Selectable[_0x5d57ff(0x5cf)]['itemHeight']=function(){const _0x54998b=_0x5d57ff;return Window_Scrollable[_0x54998b(0x5cf)]['itemHeight']['call'](this)+VisuMZ[_0x54998b(0x909)]['Settings'][_0x54998b(0x990)]['ItemHeight'];;},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x60a)]=Window_Selectable['prototype'][_0x5d57ff(0x57a)],Window_Selectable[_0x5d57ff(0x5cf)]['drawBackgroundRect']=function(_0x3f1295){const _0x376cbf=_0x5d57ff,_0x4a7b40=VisuMZ[_0x376cbf(0x909)][_0x376cbf(0x3d3)][_0x376cbf(0x990)];if(_0x4a7b40[_0x376cbf(0x242)]===![])return;_0x4a7b40[_0x376cbf(0x555)]?_0x4a7b40[_0x376cbf(0x555)][_0x376cbf(0x3dd)](this,_0x3f1295):VisuMZ[_0x376cbf(0x909)][_0x376cbf(0x60a)][_0x376cbf(0x3dd)](this,_0x3f1295);},VisuMZ['CoreEngine'][_0x5d57ff(0x91d)]=Window_Gold[_0x5d57ff(0x5cf)][_0x5d57ff(0x345)],Window_Gold[_0x5d57ff(0x5cf)][_0x5d57ff(0x345)]=function(){const _0x4b3915=_0x5d57ff;if(this[_0x4b3915(0x77b)]()){if('kHiPF'!==_0x4b3915(0x45e))return _0x2ad7b2['CoreEngine'][_0x4b3915(0x3d3)][_0x4b3915(0x5f4)][_0x4b3915(0x681)];else this[_0x4b3915(0x554)]();}else VisuMZ[_0x4b3915(0x909)][_0x4b3915(0x91d)]['call'](this);},Window_Gold[_0x5d57ff(0x5cf)][_0x5d57ff(0x77b)]=function(){const _0xa68450=_0x5d57ff;if(TextManager[_0xa68450(0x65a)]!==this[_0xa68450(0x65a)]())return![];return VisuMZ[_0xa68450(0x909)][_0xa68450(0x3d3)][_0xa68450(0x211)]['ItemStyle'];},Window_Gold['prototype'][_0x5d57ff(0x554)]=function(){const _0x42b8c6=_0x5d57ff;this[_0x42b8c6(0x8d6)](),this[_0x42b8c6(0x452)][_0x42b8c6(0x4a2)](),this['contents'][_0x42b8c6(0x48e)]=VisuMZ[_0x42b8c6(0x909)]['Settings'][_0x42b8c6(0x211)]['GoldFontSize'];const _0x5cd6e6=VisuMZ['CoreEngine'][_0x42b8c6(0x3d3)][_0x42b8c6(0x211)][_0x42b8c6(0x306)],_0x418870=this[_0x42b8c6(0x494)](0x0);if(_0x5cd6e6>0x0){const _0x55cad8=_0x418870['y']+(this[_0x42b8c6(0x416)]()-ImageManager[_0x42b8c6(0x90d)])/0x2;this[_0x42b8c6(0x371)](_0x5cd6e6,_0x418870['x'],_0x55cad8);const _0x319fb5=ImageManager['iconWidth']+0x4;_0x418870['x']+=_0x319fb5,_0x418870[_0x42b8c6(0x961)]-=_0x319fb5;}this['changeTextColor'](ColorManager[_0x42b8c6(0x756)]()),this[_0x42b8c6(0x19d)](this[_0x42b8c6(0x65a)](),_0x418870['x'],_0x418870['y'],_0x418870[_0x42b8c6(0x961)],_0x42b8c6(0x60d));const _0x58a61e=this[_0x42b8c6(0x55b)](this[_0x42b8c6(0x65a)]())+0x6;;_0x418870['x']+=_0x58a61e,_0x418870[_0x42b8c6(0x961)]-=_0x58a61e,this[_0x42b8c6(0x850)]();const _0x29ad37=this[_0x42b8c6(0x84e)](),_0x1a5bf3=this[_0x42b8c6(0x55b)](this[_0x42b8c6(0x400)]?VisuMZ[_0x42b8c6(0x718)](this[_0x42b8c6(0x84e)]()):this['value']());if(_0x1a5bf3>_0x418870[_0x42b8c6(0x961)])this[_0x42b8c6(0x19d)](VisuMZ[_0x42b8c6(0x909)]['Settings'][_0x42b8c6(0x211)][_0x42b8c6(0x923)],_0x418870['x'],_0x418870['y'],_0x418870[_0x42b8c6(0x961)],_0x42b8c6(0x24a));else{if(_0x42b8c6(0x4f6)!==_0x42b8c6(0x4f6)){const _0x2622e4=_0xf5eb8d[_0x42b8c6(0x90c)];if(!_0x2622e4)return;!_0x2622e4[_0x42b8c6(0x607)]&&(_0x1afeb5[_0x42b8c6(0x907)](),_0x2622e4[_0x42b8c6(0x607)]=new _0x12628c(),_0x2622e4[_0x42b8c6(0x43b)](_0x2622e4['_pictureCoordinatesWindow'])),_0x4fdcfa[_0x42b8c6(0x1dd)]===_0x4b6fd2&&(_0x3217e8[_0x42b8c6(0x609)](),_0x2622e4['removeChild'](_0x2622e4[_0x42b8c6(0x607)]),_0x2622e4[_0x42b8c6(0x607)]=_0x1d9727);}else this[_0x42b8c6(0x19d)](this['value'](),_0x418870['x'],_0x418870['y'],_0x418870[_0x42b8c6(0x961)],_0x42b8c6(0x24a));}this[_0x42b8c6(0x8d6)]();},Window_StatusBase[_0x5d57ff(0x5cf)]['drawParamText']=function(_0x26b935,_0x4a59e5,_0x50e46d,_0x344e3c,_0x5e5c53){const _0x169580=_0x5d57ff;_0x344e3c=String(_0x344e3c||'')[_0x169580(0x658)]();if(VisuMZ[_0x169580(0x909)]['Settings'][_0x169580(0x185)]['DrawIcons']){const _0x476476=VisuMZ[_0x169580(0x4db)](_0x344e3c);_0x5e5c53?(this[_0x169580(0x297)](_0x476476,_0x26b935,_0x4a59e5,this[_0x169580(0x6ca)]()),_0x50e46d-=this['gaugeLineHeight']()+0x2,_0x26b935+=this['gaugeLineHeight']()+0x2):(this[_0x169580(0x371)](_0x476476,_0x26b935+0x2,_0x4a59e5+0x2),_0x50e46d-=ImageManager[_0x169580(0x438)]+0x4,_0x26b935+=ImageManager[_0x169580(0x438)]+0x4);}const _0x13852e=TextManager[_0x169580(0x261)](_0x344e3c);this[_0x169580(0x8d6)](),this[_0x169580(0x216)](ColorManager[_0x169580(0x756)]()),_0x5e5c53?_0x169580(0x971)!==_0x169580(0x82b)?(this['contents'][_0x169580(0x48e)]=this[_0x169580(0x1a9)](),this[_0x169580(0x452)][_0x169580(0x19d)](_0x13852e,_0x26b935,_0x4a59e5,_0x50e46d,this[_0x169580(0x6ca)](),'left')):(_0x1ecd35=_0x200601,this['setAction'](_0x62e593,_0x4dd8fa)):_0x169580(0x717)!==_0x169580(0x717)?_0xcd9f73[_0x169580(0x947)](_0x169580(0x93f))&&this[_0x169580(0x8d7)]()?this[_0x169580(0x86b)]():this[_0x169580(0x477)](_0xf784d0['isTriggered']('up')):this[_0x169580(0x19d)](_0x13852e,_0x26b935,_0x4a59e5,_0x50e46d),this[_0x169580(0x8d6)]();},Window_StatusBase['prototype'][_0x5d57ff(0x1a9)]=function(){const _0x36844b=_0x5d57ff;return $gameSystem[_0x36844b(0x333)]()-0x8;},Window_StatusBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x37b)]=function(_0x384bd8,_0x2f28df,_0x14d414,_0x5195be){const _0x2dd1d2=_0x5d57ff;_0x5195be=_0x5195be||0xa8,this[_0x2dd1d2(0x850)]();if(VisuMZ[_0x2dd1d2(0x909)]['Settings']['UI'][_0x2dd1d2(0x58b)]){if(_0x2dd1d2(0x619)==='gZVZc')this[_0x2dd1d2(0x76f)](_0x384bd8[_0x2dd1d2(0x594)]()[_0x2dd1d2(0x7e4)],_0x2f28df,_0x14d414,_0x5195be);else return _0x5b6f25=_0x1401cf(_0x20680d),this[_0x2dd1d2(0x370)]=this[_0x2dd1d2(0x370)]||{},_0x89a1f3['match'](/#(.*)/i)?this[_0x2dd1d2(0x370)][_0x351dc8]=_0x2dd1d2(0x8dc)[_0x2dd1d2(0x20a)](_0x486c51(_0xb3a096['$1'])):this['_colorCache'][_0x5eda28]=this[_0x2dd1d2(0x303)](_0x47a3e7(_0x370f5b)),this[_0x2dd1d2(0x370)][_0x7f652b];}else{if(_0x2dd1d2(0x8ed)!==_0x2dd1d2(0x8ed))_0xddd407[_0x2dd1d2(0x4a2)](),this[_0x2dd1d2(0x2a9)]();else{const _0x128c9c=_0x384bd8[_0x2dd1d2(0x594)]()[_0x2dd1d2(0x7e4)]['replace'](/\\I\[(\d+)\]/gi,'');this[_0x2dd1d2(0x19d)](_0x128c9c,_0x2f28df,_0x14d414,_0x5195be);}}},Window_StatusBase[_0x5d57ff(0x5cf)]['drawActorNickname']=function(_0x5a26cf,_0x380b03,_0x177f83,_0x4b87d7){const _0x53048d=_0x5d57ff;_0x4b87d7=_0x4b87d7||0x10e,this[_0x53048d(0x850)]();if(VisuMZ['CoreEngine'][_0x53048d(0x3d3)]['UI']['TextCodeNicknames'])'udymV'===_0x53048d(0x509)?(this[_0x53048d(0x345)](),_0x175f72[_0x53048d(0x4f7)](),this['_mode']===_0x53048d(0x18e)?this[_0x53048d(0x311)](0x0):this[_0x53048d(0x311)](-0x1)):this[_0x53048d(0x76f)](_0x5a26cf[_0x53048d(0x5fe)](),_0x380b03,_0x177f83,_0x4b87d7);else{const _0x24109e=_0x5a26cf['nickname']()[_0x53048d(0x470)](/\\I\[(\d+)\]/gi,'');this[_0x53048d(0x19d)](_0x5a26cf['nickname'](),_0x380b03,_0x177f83,_0x4b87d7);}},VisuMZ['CoreEngine'][_0x5d57ff(0x7b4)]=Window_StatusBase[_0x5d57ff(0x5cf)]['drawActorLevel'],Window_StatusBase[_0x5d57ff(0x5cf)][_0x5d57ff(0x3ea)]=function(_0x42c360,_0x14d3ce,_0x2da234){const _0x45dc5c=_0x5d57ff;if(VisuMZ[_0x45dc5c(0x909)][_0x45dc5c(0x3d3)][_0x45dc5c(0x185)][_0x45dc5c(0x6a2)]===![])return;if(this[_0x45dc5c(0x7a5)]())this['drawActorExpGauge'](_0x42c360,_0x14d3ce,_0x2da234);VisuMZ[_0x45dc5c(0x909)][_0x45dc5c(0x7b4)]['call'](this,_0x42c360,_0x14d3ce,_0x2da234);},Window_StatusBase['prototype']['isExpGaugeDrawn']=function(){const _0x576943=_0x5d57ff;return VisuMZ['CoreEngine'][_0x576943(0x3d3)]['UI']['LvExpGauge'];},Window_StatusBase['prototype'][_0x5d57ff(0x8c1)]=function(_0x300767,_0x264d5e,_0x21d7ad){const _0x110f3f=_0x5d57ff;if(!_0x300767)return;if(!_0x300767[_0x110f3f(0x872)]())return;const _0x49434=0x80,_0x128e30=_0x300767[_0x110f3f(0x39c)]();let _0x38b70a=ColorManager['expGaugeColor1'](),_0x472240=ColorManager['expGaugeColor2']();if(_0x128e30>=0x1){if(_0x110f3f(0x8c0)!=='CrXIq'){if(!this[_0x110f3f(0x4c1)])return![];const _0x4a3b84=this[_0x110f3f(0x4c1)][_0x110f3f(0x7e4)]||'';if(_0x4a3b84['match'](/<MIRROR OFFSET X>/i))return!![];if(_0x4a3b84[_0x110f3f(0x749)](/<NO MIRROR OFFSET X>/i))return![];return _0x3c70d4[_0x110f3f(0x909)][_0x110f3f(0x3d3)][_0x110f3f(0x1d2)][_0x110f3f(0x7ce)];}else _0x38b70a=ColorManager[_0x110f3f(0x6a4)](),_0x472240=ColorManager['maxLvGaugeColor2']();}this['drawGauge'](_0x264d5e,_0x21d7ad,_0x49434,_0x128e30,_0x38b70a,_0x472240);},Window_EquipStatus[_0x5d57ff(0x5cf)]['drawAllParams']=function(){const _0x16b762=_0x5d57ff;let _0x552054=0x0;for(const _0x3d3a54 of VisuMZ[_0x16b762(0x909)][_0x16b762(0x3d3)][_0x16b762(0x185)][_0x16b762(0x52e)]){const _0x741d58=this['itemPadding'](),_0x4357c6=this[_0x16b762(0x19f)](_0x552054);this[_0x16b762(0x8d5)](_0x741d58,_0x4357c6,_0x3d3a54),_0x552054++;}},Window_EquipStatus[_0x5d57ff(0x5cf)][_0x5d57ff(0x6fa)]=function(_0x56acef,_0x4eacdc,_0x44d642){const _0x3cd335=_0x5d57ff,_0x3cfadd=this[_0x3cd335(0x675)]()-this['itemPadding']()*0x2;this[_0x3cd335(0x3da)](_0x56acef,_0x4eacdc,_0x3cfadd,_0x44d642,![]);},Window_EquipStatus[_0x5d57ff(0x5cf)]['drawCurrentParam']=function(_0x30b5ac,_0x22196c,_0x55ec25){const _0xf4094b=_0x5d57ff,_0x218575=this[_0xf4094b(0x7d2)]();this[_0xf4094b(0x850)](),this[_0xf4094b(0x19d)](this[_0xf4094b(0x2ef)]['paramValueByName'](_0x55ec25,!![]),_0x30b5ac,_0x22196c,_0x218575,_0xf4094b(0x24a));},Window_EquipStatus['prototype'][_0x5d57ff(0x818)]=function(_0x1bbe1e,_0x52d33f){const _0x40dc84=_0x5d57ff,_0x45a7f3=this['rightArrowWidth']();this[_0x40dc84(0x216)](ColorManager[_0x40dc84(0x756)]());const _0x5b32ed=VisuMZ[_0x40dc84(0x909)][_0x40dc84(0x3d3)]['UI'][_0x40dc84(0x895)];this[_0x40dc84(0x19d)](_0x5b32ed,_0x1bbe1e,_0x52d33f,_0x45a7f3,'center');},Window_EquipStatus['prototype'][_0x5d57ff(0x6bb)]=function(_0x5da972,_0x51dc3a,_0x463817){const _0x4dc575=_0x5d57ff,_0x32e641=this[_0x4dc575(0x7d2)](),_0xc1bec=this[_0x4dc575(0x7c6)][_0x4dc575(0x624)](_0x463817),_0x24ffb6=_0xc1bec-this[_0x4dc575(0x2ef)][_0x4dc575(0x624)](_0x463817);this[_0x4dc575(0x216)](ColorManager[_0x4dc575(0x63f)](_0x24ffb6)),this[_0x4dc575(0x19d)](this[_0x4dc575(0x7c6)]['paramValueByName'](_0x463817,!![]),_0x5da972,_0x51dc3a,_0x32e641,_0x4dc575(0x24a));},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x531)]=Window_EquipItem['prototype'][_0x5d57ff(0x615)],Window_EquipItem[_0x5d57ff(0x5cf)][_0x5d57ff(0x615)]=function(_0x4be97d){const _0x2c99fd=_0x5d57ff;if(_0x4be97d&&this['_actor']){if(_0x2c99fd(0x85b)!==_0x2c99fd(0x85b)){if(!this[_0x2c99fd(0x35b)])return;for(const _0x281b8a of this[_0x2c99fd(0x35b)]){_0x281b8a&&_0x281b8a[_0x2c99fd(0x74d)]();}}else return this[_0x2c99fd(0x2ef)][_0x2c99fd(0x942)](_0x4be97d);}else{if(_0x2c99fd(0x9b8)!==_0x2c99fd(0x9b8)){if(_0x20d2ae)this[_0x2c99fd(0x57c)](_0x251198);_0x2a9e0a['CoreEngine'][_0x2c99fd(0x195)][_0x2c99fd(0x3dd)](this,_0x1a2a4b);}else return VisuMZ[_0x2c99fd(0x909)][_0x2c99fd(0x531)]['call'](this,_0x4be97d);}},Window_StatusParams[_0x5d57ff(0x5cf)]['maxItems']=function(){const _0x279f0f=_0x5d57ff;return VisuMZ[_0x279f0f(0x909)][_0x279f0f(0x3d3)][_0x279f0f(0x185)][_0x279f0f(0x52e)][_0x279f0f(0x929)];},Window_StatusParams[_0x5d57ff(0x5cf)][_0x5d57ff(0x8d5)]=function(_0x13528b){const _0xf00eec=_0x5d57ff,_0x4d2571=this[_0xf00eec(0x494)](_0x13528b),_0x20bf4d=VisuMZ['CoreEngine'][_0xf00eec(0x3d3)]['Param'][_0xf00eec(0x52e)][_0x13528b],_0x1e3c09=TextManager[_0xf00eec(0x261)](_0x20bf4d),_0x4adc62=this['_actor']['paramValueByName'](_0x20bf4d,!![]);this['drawParamText'](_0x4d2571['x'],_0x4d2571['y'],0xa0,_0x20bf4d,![]),this[_0xf00eec(0x850)](),this[_0xf00eec(0x19d)](_0x4adc62,_0x4d2571['x']+0xa0,_0x4d2571['y'],0x3c,_0xf00eec(0x24a));};if(VisuMZ[_0x5d57ff(0x909)]['Settings'][_0x5d57ff(0x2e0)][_0x5d57ff(0x691)]){VisuMZ['CoreEngine'][_0x5d57ff(0x3d3)][_0x5d57ff(0x2e0)][_0x5d57ff(0x43c)]&&(Window_NameInput[_0x5d57ff(0x19c)]=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','\x27','`','Z','X','C','V','B','N','M',',','.','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l',':','~','z','x','c','v','b','n','m','\x22',';','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','(',')','<','>','[',']','-','_','/','\x20','Page','OK']);;VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x423)]=Window_NameInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x4d1)],Window_NameInput['prototype']['initialize']=function(_0x13b984){const _0x2abadf=_0x5d57ff;this[_0x2abadf(0x5ec)]=this[_0x2abadf(0x750)](),VisuMZ[_0x2abadf(0x909)][_0x2abadf(0x423)][_0x2abadf(0x3dd)](this,_0x13b984);if(this[_0x2abadf(0x5ec)]===_0x2abadf(0x18e))'kzKFn'===_0x2abadf(0x63c)?this[_0x2abadf(0x311)](0x0):(this[_0x2abadf(0x4c4)]={},_0x201ecc[_0x2abadf(0x909)][_0x2abadf(0x2c5)][_0x2abadf(0x3dd)](this));else{if(_0x2abadf(0x613)===_0x2abadf(0x541)){const _0x25ac01=this['context'];_0x25ac01[_0x2abadf(0x4a5)]=this['outlineColor'],_0x25ac01[_0x2abadf(0x685)](_0x4beb94,_0x995ffd+0x2,_0x1121d7+0x2,_0x1e67e9);}else Input[_0x2abadf(0x4a2)](),this[_0x2abadf(0x2a9)]();}},Window_NameInput['prototype'][_0x5d57ff(0x750)]=function(){const _0x194068=_0x5d57ff;if(Input['isGamepadConnected']())return _0x194068(0x18e);return VisuMZ[_0x194068(0x909)][_0x194068(0x3d3)][_0x194068(0x2e0)][_0x194068(0x32a)]||_0x194068(0x9d4);},VisuMZ[_0x5d57ff(0x909)]['Window_NameInput_processHandling']=Window_NameInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x587)],Window_NameInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x587)]=function(){const _0x428417=_0x5d57ff;if(!this[_0x428417(0x6ab)]())return;if(!this[_0x428417(0x391)])return;if(this[_0x428417(0x5ec)]==='keyboard'&&Input['isGamepadTriggered']())_0x428417(0x488)!==_0x428417(0x6d6)?this[_0x428417(0x372)]('default'):this[_0x428417(0x9e4)][_0x428417(0x20c)](_0x549933[_0x428417(0x604)][_0x428417(0x7f1)]);else{if(Input[_0x428417(0x978)](_0x428417(0x440)))Input[_0x428417(0x4a2)](),this[_0x428417(0x248)]();else{if(Input[_0x428417(0x47e)](_0x428417(0x5e7))){Input[_0x428417(0x4a2)]();if(this['_mode']===_0x428417(0x9d4)){if(_0x428417(0x8bd)!==_0x428417(0x3ab))this[_0x428417(0x372)](_0x428417(0x18e));else{const _0x17f34e=this[_0x428417(0x3a0)]();!_0x17f34e[_0x428417(0x2e2)]()?_0x4ea0b4[_0x428417(0x909)][_0x428417(0x45c)][_0x428417(0x3dd)](this):(this[_0x428417(0x2e2)]['x']=_0x17f34e['anchor']()['x'],this[_0x428417(0x2e2)]['y']=_0x17f34e[_0x428417(0x2e2)]()['y']);}}else this[_0x428417(0x372)](_0x428417(0x9d4));}else{if(this[_0x428417(0x5ec)]===_0x428417(0x9d4)){if(_0x428417(0x2b4)!==_0x428417(0x2b4)){let _0x151e79=this[_0x428417(0x697)]();const _0x5a2ab0=this[_0x428417(0x3c6)](),_0x286bc8=this[_0x428417(0x568)]();if(this[_0x428417(0x33d)]()&&(_0x151e79<_0x5a2ab0||_0x224c01&&_0x286bc8===0x1)){_0x151e79+=_0x286bc8;if(_0x151e79>=_0x5a2ab0)_0x151e79=_0x5a2ab0-0x1;this[_0x428417(0x214)](_0x151e79);}else!this[_0x428417(0x33d)]()&&((_0x151e79<_0x5a2ab0-_0x286bc8||_0x330954&&_0x286bc8===0x1)&&this[_0x428417(0x214)]((_0x151e79+_0x286bc8)%_0x5a2ab0));}else this[_0x428417(0x465)]();}else Input['isSpecialCode'](_0x428417(0x472))?(Input[_0x428417(0x4a2)](),this['switchModes'](_0x428417(0x9d4))):VisuMZ[_0x428417(0x909)]['Window_NameInput_processHandling']['call'](this);}}}},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x93e)]=Window_NameInput[_0x5d57ff(0x5cf)]['processTouch'],Window_NameInput['prototype']['processTouch']=function(){const _0x59aca7=_0x5d57ff;if(!this['isOpenAndActive']())return;if(this['_mode']===_0x59aca7(0x9d4)){if(TouchInput[_0x59aca7(0x47e)]()&&this[_0x59aca7(0x621)]())'Nzjji'==='Nzjji'?this[_0x59aca7(0x372)](_0x59aca7(0x18e)):this[_0x59aca7(0x910)]();else TouchInput[_0x59aca7(0x48a)]()&&this[_0x59aca7(0x372)]('default');}else _0x59aca7(0x7c8)!=='dodya'?VisuMZ[_0x59aca7(0x909)]['Window_NameInput_processTouch'][_0x59aca7(0x3dd)](this):this['initialize'](...arguments);},Window_NameInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x465)]=function(){const _0x40a3c7=_0x5d57ff;if(Input[_0x40a3c7(0x978)]('enter'))'eGGQq'==='eGGQq'?(Input[_0x40a3c7(0x4a2)](),this[_0x40a3c7(0x97c)]()):this[_0x40a3c7(0x280)][_0x40a3c7(0x20c)](_0xf071ec[_0x40a3c7(0x604)][_0x40a3c7(0x190)]);else{if(Input[_0x40a3c7(0x9ce)]!==undefined){let _0x403365=Input['_inputString'],_0x3e0c75=_0x403365[_0x40a3c7(0x929)];for(let _0x2ae19a=0x0;_0x2ae19a<_0x3e0c75;++_0x2ae19a){this[_0x40a3c7(0x9e4)][_0x40a3c7(0x795)](_0x403365[_0x2ae19a])?'JgCdC'===_0x40a3c7(0x98b)?this[_0x40a3c7(0x26b)]['x']=_0x11d26f[_0x40a3c7(0x873)]+0x4:SoundManager[_0x40a3c7(0x4f7)]():SoundManager[_0x40a3c7(0x4a8)]();}Input[_0x40a3c7(0x4a2)]();}}},Window_NameInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x372)]=function(_0x273125){const _0x305e2b=_0x5d57ff;let _0x512a56=this[_0x305e2b(0x5ec)];this['_mode']=_0x273125,_0x512a56!==this[_0x305e2b(0x5ec)]&&(this['refresh'](),SoundManager['playOk'](),this[_0x305e2b(0x5ec)]==='default'?this[_0x305e2b(0x311)](0x0):this[_0x305e2b(0x311)](-0x1));},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x246)]=Window_NameInput[_0x5d57ff(0x5cf)]['cursorDown'],Window_NameInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x7fa)]=function(_0x47197e){const _0x4a8281=_0x5d57ff;if(this[_0x4a8281(0x5ec)]===_0x4a8281(0x9d4)&&!Input[_0x4a8281(0x638)]())return;if(Input[_0x4a8281(0x270)]())return;VisuMZ[_0x4a8281(0x909)][_0x4a8281(0x246)][_0x4a8281(0x3dd)](this,_0x47197e),this['switchModes'](_0x4a8281(0x18e));},VisuMZ[_0x5d57ff(0x909)]['Window_NameInput_cursorUp']=Window_NameInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x477)],Window_NameInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x477)]=function(_0x9346db){const _0x164106=_0x5d57ff;if(this[_0x164106(0x5ec)]==='keyboard'&&!Input['isArrowPressed']())return;if(Input[_0x164106(0x270)]())return;VisuMZ['CoreEngine'][_0x164106(0x4fe)][_0x164106(0x3dd)](this,_0x9346db),this[_0x164106(0x372)](_0x164106(0x18e));},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x6db)]=Window_NameInput[_0x5d57ff(0x5cf)]['cursorRight'],Window_NameInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x574)]=function(_0x14c56c){const _0x36b325=_0x5d57ff;if(this['_mode']===_0x36b325(0x9d4)&&!Input[_0x36b325(0x638)]())return;if(Input['isNumpadPressed']())return;VisuMZ[_0x36b325(0x909)][_0x36b325(0x6db)][_0x36b325(0x3dd)](this,_0x14c56c),this['switchModes'](_0x36b325(0x18e));},VisuMZ['CoreEngine'][_0x5d57ff(0x901)]=Window_NameInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x87d)],Window_NameInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x87d)]=function(_0x48df8a){const _0x28a2be=_0x5d57ff;if(this[_0x28a2be(0x5ec)]===_0x28a2be(0x9d4)&&!Input[_0x28a2be(0x638)]())return;if(Input[_0x28a2be(0x270)]())return;VisuMZ[_0x28a2be(0x909)]['Window_NameInput_cursorLeft'][_0x28a2be(0x3dd)](this,_0x48df8a),this[_0x28a2be(0x372)](_0x28a2be(0x18e));},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x9a3)]=Window_NameInput['prototype'][_0x5d57ff(0x1a4)],Window_NameInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x1a4)]=function(){const _0x4d113c=_0x5d57ff;if(this[_0x4d113c(0x5ec)]===_0x4d113c(0x9d4))return;if(Input['isNumpadPressed']())return;VisuMZ['CoreEngine'][_0x4d113c(0x9a3)]['call'](this),this[_0x4d113c(0x372)](_0x4d113c(0x18e));},VisuMZ['CoreEngine']['Window_NameInput_cursorPageup']=Window_NameInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x86b)],Window_NameInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x86b)]=function(){const _0x1a0e4d=_0x5d57ff;if(this['_mode']===_0x1a0e4d(0x9d4))return;if(Input['isNumpadPressed']())return;VisuMZ[_0x1a0e4d(0x909)][_0x1a0e4d(0x398)][_0x1a0e4d(0x3dd)](this),this[_0x1a0e4d(0x372)](_0x1a0e4d(0x18e));},VisuMZ['CoreEngine'][_0x5d57ff(0x77e)]=Window_NameInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x345)],Window_NameInput['prototype'][_0x5d57ff(0x345)]=function(){const _0x38711c=_0x5d57ff;if(this[_0x38711c(0x5ec)]==='keyboard'){if(_0x38711c(0x941)===_0x38711c(0x2b9))_0x11c44c(_0x38711c(0x2b6)[_0x38711c(0x20a)](_0x4c5043,_0xa7b219,_0x309df0)),_0x162328[_0x38711c(0x8f1)]();else{this[_0x38711c(0x452)][_0x38711c(0x4a2)](),this[_0x38711c(0x1fd)][_0x38711c(0x4a2)](),this[_0x38711c(0x850)]();let _0x19675f=VisuMZ[_0x38711c(0x909)][_0x38711c(0x3d3)][_0x38711c(0x2e0)][_0x38711c(0x820)][_0x38711c(0x643)]('\x0a'),_0x30c500=_0x19675f[_0x38711c(0x929)],_0x5bc970=(this[_0x38711c(0x92e)]-_0x30c500*this[_0x38711c(0x416)]())/0x2;for(let _0x3147ec=0x0;_0x3147ec<_0x30c500;++_0x3147ec){if(_0x38711c(0x8ae)!==_0x38711c(0x8ae)){var _0x930b0e=_0x364ef3(_0x379b7e['$1']);_0x3ff1e0*=_0x930b0e;}else{let _0x4a8b2f=_0x19675f[_0x3147ec],_0x502798=this[_0x38711c(0x7d3)](_0x4a8b2f)[_0x38711c(0x961)],_0x53529a=Math[_0x38711c(0x9ca)]((this[_0x38711c(0x452)][_0x38711c(0x961)]-_0x502798)/0x2);this['drawTextEx'](_0x4a8b2f,_0x53529a,_0x5bc970),_0x5bc970+=this[_0x38711c(0x416)]();}}}}else{if('CljVg'!==_0x38711c(0x969))VisuMZ['CoreEngine'][_0x38711c(0x77e)][_0x38711c(0x3dd)](this);else{const _0x37c747=_0x424742[_0x38711c(0x84e)](_0x58c6ad);_0x4c89e0[_0x38711c(0x982)](_0x4da4bb,!_0x37c747);}}};};VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x234)]=Window_ShopSell[_0x5d57ff(0x5cf)]['isEnabled'],Window_ShopSell[_0x5d57ff(0x5cf)][_0x5d57ff(0x615)]=function(_0x140573){const _0x301b00=_0x5d57ff;return VisuMZ[_0x301b00(0x909)][_0x301b00(0x3d3)][_0x301b00(0x1d2)][_0x301b00(0x540)]&&DataManager[_0x301b00(0x44f)](_0x140573)?'XCqzw'===_0x301b00(0x687)?_0x8c86d7[_0x301b00(0x909)][_0x301b00(0x3d3)][_0x301b00(0x734)][_0x301b00(0x281)][_0x301b00(0x530)]:![]:_0x301b00(0x5b2)===_0x301b00(0x5b2)?VisuMZ[_0x301b00(0x909)]['Window_ShopSell_isEnabled'][_0x301b00(0x3dd)](this,_0x140573):_0x2ab5f8[_0x301b00(0x576)]||'Keyboard';},Window_NumberInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x33d)]=function(){return![];};VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3d3)][_0x5d57ff(0x2e0)][_0x5d57ff(0x4cc)]&&(VisuMZ[_0x5d57ff(0x909)]['Window_NumberInput_start']=Window_NumberInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x770)],Window_NumberInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x770)]=function(){const _0x4843c0=_0x5d57ff;VisuMZ[_0x4843c0(0x909)][_0x4843c0(0x676)][_0x4843c0(0x3dd)](this),this[_0x4843c0(0x311)](this[_0x4843c0(0x91b)]-0x1),Input['clear']();},VisuMZ[_0x5d57ff(0x909)]['Window_NumberInput_processDigitChange']=Window_NumberInput[_0x5d57ff(0x5cf)]['processDigitChange'],Window_NumberInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x87c)]=function(){const _0x5e59cc=_0x5d57ff;if(!this[_0x5e59cc(0x387)]())return;if(Input['isNumpadPressed']()){if(_0x5e59cc(0x346)!=='kdCWE')this['processKeyboardDigitChange']();else return _0x5852c3['status']&&_0x20539d['description'][_0x5e59cc(0x861)]('['+_0x2290ad+']');}else{if(Input['isSpecialCode'](_0x5e59cc(0x440)))this[_0x5e59cc(0x7c4)]();else{if(Input[_0x5e59cc(0x8f2)]===0x2e)this[_0x5e59cc(0x910)]();else{if(Input[_0x5e59cc(0x8f2)]===0x24){if(_0x5e59cc(0x7b5)===_0x5e59cc(0x7b5))this[_0x5e59cc(0x4c8)]();else{_0x5f0bc9['ConvertParams'](_0x4dfc9f,_0xa58e1e);const _0x115b19=_0x430cdb[_0x5e59cc(0x746)](_0x76dafc[_0x5e59cc(0x222)])[_0x5e59cc(0x9dc)](0x1,0x64),_0x2be6ab=_0x4dcbee['Settings'],_0x8b78dd=_0x2be6ab[_0x5e59cc(0x6f9)][_0x5e59cc(0x9dc)](0x0,0x1),_0x39c153=_0x541d00['round'](_0x2be6ab[_0x5e59cc(0x56f)]||0x0),_0x470efc=_0x38b5e4['round'](_0x2be6ab[_0x5e59cc(0x7db)]||0x0),_0x2d9532=_0x44b3f7['round'](_0x2be6ab[_0x5e59cc(0x3d9)]||0x0),_0x2da753=_0x5573d6[_0x5e59cc(0x746)](_0x2be6ab['ScaleY']||0x0),_0x1844f1=_0x24e076[_0x5e59cc(0x746)](_0x2be6ab[_0x5e59cc(0x800)])['clamp'](0x0,0xff),_0x4119b6=_0x2be6ab[_0x5e59cc(0x8dd)],_0x5d7f16=_0x5e59cc(0x903),_0x4cbead=_0x3262f5[_0x5e59cc(0x2d5)]?'Smooth':'Pixelated',_0x3985cd=_0x5d7f16[_0x5e59cc(0x20a)](_0x50ed13[_0x5e59cc(0x823)],_0x4cbead);_0x311e3[_0x5e59cc(0x201)](_0x115b19,_0x3985cd,_0x8b78dd,_0x39c153,_0x470efc,_0x2d9532,_0x2da753,_0x1844f1,_0x4119b6);}}else Input[_0x5e59cc(0x8f2)]===0x23?_0x5e59cc(0x5f3)!==_0x5e59cc(0x21f)?this[_0x5e59cc(0x7fe)]():this[_0x5e59cc(0x4a2)]():VisuMZ[_0x5e59cc(0x909)][_0x5e59cc(0x5d8)][_0x5e59cc(0x3dd)](this);}}}},Window_NumberInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x3ac)]=function(){const _0x1151d3=_0x5d57ff;if(!this[_0x1151d3(0x420)]())return;Input[_0x1151d3(0x270)]()?this[_0x1151d3(0x20b)]():Window_Selectable[_0x1151d3(0x5cf)][_0x1151d3(0x3ac)][_0x1151d3(0x3dd)](this);},Window_NumberInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x3d5)]=function(){},Window_NumberInput[_0x5d57ff(0x5cf)]['processKeyboardDigitChange']=function(){const _0x786ebc=_0x5d57ff;if(String(this[_0x786ebc(0x502)])[_0x786ebc(0x929)]>=this[_0x786ebc(0x91b)])return;const _0xa0622b=Number(String(this[_0x786ebc(0x502)])+Input[_0x786ebc(0x9ce)]);if(isNaN(_0xa0622b))return;this[_0x786ebc(0x502)]=_0xa0622b;const _0x274a8c='9'[_0x786ebc(0x7e1)](this['_maxDigits']);this['_number']=this[_0x786ebc(0x502)][_0x786ebc(0x9dc)](0x0,_0x274a8c),Input[_0x786ebc(0x4a2)](),this[_0x786ebc(0x345)](),SoundManager[_0x786ebc(0x5dc)](),this['select'](this['_maxDigits']-0x1);},Window_NumberInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x7c4)]=function(){const _0x4a02a2=_0x5d57ff;this[_0x4a02a2(0x502)]=Number(String(this[_0x4a02a2(0x502)])['slice'](0x0,-0x1)),this['_number']=Math[_0x4a02a2(0x8ee)](0x0,this['_number']),Input['clear'](),this[_0x4a02a2(0x345)](),SoundManager[_0x4a02a2(0x5dc)](),this[_0x4a02a2(0x311)](this[_0x4a02a2(0x91b)]-0x1);},Window_NumberInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x910)]=function(){const _0x41e952=_0x5d57ff;this[_0x41e952(0x502)]=Number(String(this[_0x41e952(0x502)])['substring'](0x1)),this[_0x41e952(0x502)]=Math[_0x41e952(0x8ee)](0x0,this[_0x41e952(0x502)]),Input[_0x41e952(0x4a2)](),this[_0x41e952(0x345)](),SoundManager[_0x41e952(0x5dc)](),this[_0x41e952(0x311)](this[_0x41e952(0x91b)]-0x1);},Window_NumberInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x4c8)]=function(){const _0x1c69f5=_0x5d57ff;if(this[_0x1c69f5(0x697)]()===0x0)return;Input['clear'](),this[_0x1c69f5(0x345)](),SoundManager['playCursor'](),this['select'](0x0);},Window_NumberInput[_0x5d57ff(0x5cf)][_0x5d57ff(0x7fe)]=function(){const _0x34f4c9=_0x5d57ff;if(this['index']()===this['_maxDigits']-0x1)return;Input[_0x34f4c9(0x4a2)](),this['refresh'](),SoundManager[_0x34f4c9(0x5dc)](),this[_0x34f4c9(0x311)](this[_0x34f4c9(0x91b)]-0x1);});;VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x441)]=Window_MapName[_0x5d57ff(0x5cf)][_0x5d57ff(0x345)],Window_MapName[_0x5d57ff(0x5cf)][_0x5d57ff(0x345)]=function(){const _0x5ad370=_0x5d57ff;if(VisuMZ[_0x5ad370(0x909)][_0x5ad370(0x3d3)]['QoL'][_0x5ad370(0x7bd)]){if('PNrco'!==_0x5ad370(0x326))this[_0x5ad370(0x89a)]();else return _0x231977[_0x5ad370(0x604)][_0x5ad370(0x40d)][_0x5ad370(0x3dd)](this);}else VisuMZ[_0x5ad370(0x909)]['Window_MapName_refresh']['call'](this);},Window_MapName[_0x5d57ff(0x5cf)]['refreshWithTextCodeSupport']=function(){const _0x433e76=_0x5d57ff;this[_0x433e76(0x452)][_0x433e76(0x4a2)]();if($gameMap[_0x433e76(0x8b8)]()){const _0x3a5deb=this[_0x433e76(0x5df)];this[_0x433e76(0x447)](0x0,0x0,_0x3a5deb,this[_0x433e76(0x416)]());const _0x58f6cd=this[_0x433e76(0x7d3)]($gameMap[_0x433e76(0x8b8)]())[_0x433e76(0x961)];this['drawTextEx']($gameMap[_0x433e76(0x8b8)](),Math[_0x433e76(0x9ca)]((_0x3a5deb-_0x58f6cd)/0x2),0x0);}},Window_TitleCommand[_0x5d57ff(0x3e0)]=VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3d3)]['TitleCommandList'],Window_TitleCommand[_0x5d57ff(0x5cf)][_0x5d57ff(0x479)]=function(){const _0xe31cb5=_0x5d57ff;this[_0xe31cb5(0x429)]();},Window_TitleCommand[_0x5d57ff(0x5cf)][_0x5d57ff(0x429)]=function(){const _0x1d7967=_0x5d57ff;for(const _0x40cc43 of Window_TitleCommand[_0x1d7967(0x3e0)]){if(_0x1d7967(0x71e)===_0x1d7967(0x23b)){const _0x3c7adf=_0x3a7e7a['CoreEngine']['Settings'][_0x1d7967(0x2df)];if(_0x3c7adf&&_0x3c7adf[_0x1d7967(0x714)])return _0x3c7adf[_0x1d7967(0x714)][_0x1d7967(0x3dd)](this);const _0x58a980=_0xc5a80e[_0x1d7967(0x639)]*0.75,_0x261882=_0x12b767['_shakeSpeed']*0.6,_0x2d4b03=_0x5c087f[_0x1d7967(0x976)];this['y']+=_0x50af4e['round'](_0x2b8534[_0x1d7967(0x4e9)](_0x58a980)-_0x16befc[_0x1d7967(0x4e9)](_0x261882))*(_0x54d7e0[_0x1d7967(0x44a)](_0x2d4b03,0x1e)*0.5);}else{if(_0x40cc43[_0x1d7967(0x825)][_0x1d7967(0x3dd)](this)){const _0x209874=_0x40cc43[_0x1d7967(0x996)];let _0x5375fb=_0x40cc43['TextStr'];if(['',_0x1d7967(0x20e)]['includes'](_0x5375fb))_0x5375fb=_0x40cc43[_0x1d7967(0x684)]['call'](this);const _0x396b95=_0x40cc43[_0x1d7967(0x759)]['call'](this),_0x352249=_0x40cc43[_0x1d7967(0x561)][_0x1d7967(0x3dd)](this);this[_0x1d7967(0x88b)](_0x5375fb,_0x209874,_0x396b95,_0x352249),this[_0x1d7967(0x81c)](_0x209874,_0x40cc43[_0x1d7967(0x843)][_0x1d7967(0x487)](this,_0x352249));}}}},Window_GameEnd[_0x5d57ff(0x3e0)]=VisuMZ['CoreEngine'][_0x5d57ff(0x3d3)][_0x5d57ff(0x734)][_0x5d57ff(0x390)][_0x5d57ff(0x6d1)],Window_GameEnd['prototype'][_0x5d57ff(0x479)]=function(){const _0x50bcb1=_0x5d57ff;this[_0x50bcb1(0x429)]();},Window_GameEnd[_0x5d57ff(0x5cf)][_0x5d57ff(0x429)]=function(){const _0x51da5b=_0x5d57ff;for(const _0x516aaa of Window_GameEnd[_0x51da5b(0x3e0)]){if(_0x516aaa[_0x51da5b(0x825)][_0x51da5b(0x3dd)](this)){if(_0x51da5b(0x409)!==_0x51da5b(0x409))_0x5add8a*=_0x5c1581(_0xfd1fa6);else{const _0x77244b=_0x516aaa[_0x51da5b(0x996)];let _0x3a4b41=_0x516aaa[_0x51da5b(0x1ad)];if(['','Untitled'][_0x51da5b(0x861)](_0x3a4b41))_0x3a4b41=_0x516aaa[_0x51da5b(0x684)][_0x51da5b(0x3dd)](this);const _0x2e6537=_0x516aaa[_0x51da5b(0x759)][_0x51da5b(0x3dd)](this),_0x2ce53d=_0x516aaa[_0x51da5b(0x561)][_0x51da5b(0x3dd)](this);this[_0x51da5b(0x88b)](_0x3a4b41,_0x77244b,_0x2e6537,_0x2ce53d),this[_0x51da5b(0x81c)](_0x77244b,_0x516aaa[_0x51da5b(0x843)][_0x51da5b(0x487)](this,_0x2ce53d));}}}};function Window_ButtonAssist(){const _0x1edc7b=_0x5d57ff;this[_0x1edc7b(0x4d1)](...arguments);}Window_ButtonAssist[_0x5d57ff(0x5cf)]=Object['create'](Window_Base[_0x5d57ff(0x5cf)]),Window_ButtonAssist[_0x5d57ff(0x5cf)][_0x5d57ff(0x8bb)]=Window_ButtonAssist,Window_ButtonAssist[_0x5d57ff(0x5cf)][_0x5d57ff(0x4d1)]=function(_0x13f894){const _0x2f92b1=_0x5d57ff;this[_0x2f92b1(0x711)]={},Window_Base[_0x2f92b1(0x5cf)][_0x2f92b1(0x4d1)][_0x2f92b1(0x3dd)](this,_0x13f894),this[_0x2f92b1(0x20c)](VisuMZ['CoreEngine']['Settings']['ButtonAssist']['BgType']||0x0),this[_0x2f92b1(0x345)]();},Window_ButtonAssist[_0x5d57ff(0x5cf)][_0x5d57ff(0x7f5)]=function(){const _0xb807aa=_0x5d57ff;this[_0xb807aa(0x452)][_0xb807aa(0x48e)]<=0x60&&(this[_0xb807aa(0x452)][_0xb807aa(0x48e)]+=0x6);},Window_ButtonAssist[_0x5d57ff(0x5cf)][_0x5d57ff(0x616)]=function(){const _0x298f22=_0x5d57ff;this[_0x298f22(0x452)][_0x298f22(0x48e)]>=0x18&&(this[_0x298f22(0x452)][_0x298f22(0x48e)]-=0x6);},Window_ButtonAssist[_0x5d57ff(0x5cf)][_0x5d57ff(0x74d)]=function(){const _0x464555=_0x5d57ff;Window_Base[_0x464555(0x5cf)][_0x464555(0x74d)][_0x464555(0x3dd)](this),this[_0x464555(0x47f)]();},Window_ButtonAssist[_0x5d57ff(0x5cf)][_0x5d57ff(0x6e9)]=function(){const _0x2ad058=_0x5d57ff;this[_0x2ad058(0x799)]=SceneManager[_0x2ad058(0x90c)][_0x2ad058(0x839)]()!=='button'?0x0:0x8;},Window_ButtonAssist[_0x5d57ff(0x5cf)][_0x5d57ff(0x47f)]=function(){const _0x50e40b=_0x5d57ff,_0x4ff343=SceneManager[_0x50e40b(0x90c)];for(let _0x3a560c=0x1;_0x3a560c<=0x5;_0x3a560c++){if(this[_0x50e40b(0x711)]['key%1'[_0x50e40b(0x20a)](_0x3a560c)]!==_0x4ff343[_0x50e40b(0x5e5)[_0x50e40b(0x20a)](_0x3a560c)]())return this['refresh']();if(this['_data'][_0x50e40b(0x1be)['format'](_0x3a560c)]!==_0x4ff343[_0x50e40b(0x328)[_0x50e40b(0x20a)](_0x3a560c)]())return this[_0x50e40b(0x345)]();}},Window_ButtonAssist[_0x5d57ff(0x5cf)][_0x5d57ff(0x345)]=function(){const _0x9eeb5=_0x5d57ff;this[_0x9eeb5(0x452)]['clear']();for(let _0x14b73=0x1;_0x14b73<=0x5;_0x14b73++){this[_0x9eeb5(0x39f)](_0x14b73);}},Window_ButtonAssist[_0x5d57ff(0x5cf)][_0x5d57ff(0x39f)]=function(_0x1f154c){const _0x22409b=_0x5d57ff,_0xf2f812=this['innerWidth']/0x5,_0x37770e=SceneManager[_0x22409b(0x90c)],_0x1c2b17=_0x37770e[_0x22409b(0x5e5)[_0x22409b(0x20a)](_0x1f154c)](),_0x4420a8=_0x37770e[_0x22409b(0x328)[_0x22409b(0x20a)](_0x1f154c)]();this['_data'][_0x22409b(0x183)[_0x22409b(0x20a)](_0x1f154c)]=_0x1c2b17,this[_0x22409b(0x711)][_0x22409b(0x1be)[_0x22409b(0x20a)](_0x1f154c)]=_0x4420a8;if(_0x1c2b17==='')return;if(_0x4420a8==='')return;const _0x5036ff=_0x37770e['buttonAssistOffset%1'[_0x22409b(0x20a)](_0x1f154c)](),_0xec4a50=this['itemPadding'](),_0x39850d=_0xf2f812*(_0x1f154c-0x1)+_0xec4a50+_0x5036ff,_0x107c88=VisuMZ[_0x22409b(0x909)][_0x22409b(0x3d3)][_0x22409b(0x1d9)][_0x22409b(0x318)];this[_0x22409b(0x76f)](_0x107c88[_0x22409b(0x20a)](_0x1c2b17,_0x4420a8),_0x39850d,0x0,_0xf2f812-_0xec4a50*0x2);},VisuMZ[_0x5d57ff(0x909)]['Game_Interpreter_updateWaitMode']=Game_Interpreter[_0x5d57ff(0x5cf)][_0x5d57ff(0x7c5)],Game_Interpreter[_0x5d57ff(0x5cf)][_0x5d57ff(0x7c5)]=function(){const _0x17ac52=_0x5d57ff;if($gameTemp[_0x17ac52(0x1dd)]!==undefined)return VisuMZ['CoreEngine'][_0x17ac52(0x93a)]();return VisuMZ[_0x17ac52(0x909)][_0x17ac52(0x974)]['call'](this);},VisuMZ['CoreEngine']['UpdatePictureCoordinates']=function(){const _0xcf2e83=_0x5d57ff,_0x58a1b7=$gameTemp['_pictureCoordinatesMode']||0x0;(_0x58a1b7<0x0||_0x58a1b7>0x64||TouchInput[_0xcf2e83(0x48a)]()||Input[_0xcf2e83(0x47e)](_0xcf2e83(0x6f2)))&&($gameTemp[_0xcf2e83(0x1dd)]=undefined,Input[_0xcf2e83(0x4a2)](),TouchInput[_0xcf2e83(0x4a2)]());const _0x1d2064=$gameScreen[_0xcf2e83(0x3a0)](_0x58a1b7);return _0x1d2064&&(_0x1d2064['_x']=TouchInput['_x'],_0x1d2064['_y']=TouchInput['_y']),VisuMZ[_0xcf2e83(0x909)][_0xcf2e83(0x5e9)](),$gameTemp[_0xcf2e83(0x1dd)]!==undefined;},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x5e9)]=function(){const _0x18ba28=_0x5d57ff,_0x339fc6=SceneManager['_scene'];if(!_0x339fc6)return;!_0x339fc6[_0x18ba28(0x607)]&&(SoundManager[_0x18ba28(0x907)](),_0x339fc6['_pictureCoordinatesWindow']=new Window_PictureCoordinates(),_0x339fc6[_0x18ba28(0x43b)](_0x339fc6[_0x18ba28(0x607)]));if($gameTemp['_pictureCoordinatesMode']===undefined){if(_0x18ba28(0x758)!=='XTrkK')SoundManager[_0x18ba28(0x609)](),_0x339fc6[_0x18ba28(0x230)](_0x339fc6[_0x18ba28(0x607)]),_0x339fc6[_0x18ba28(0x607)]=undefined;else return _0x1b1f30['actor']()[_0x18ba28(0x851)](_0x3eedc5);}};function Window_PictureCoordinates(){const _0x3eb529=_0x5d57ff;this[_0x3eb529(0x4d1)](...arguments);}Window_PictureCoordinates[_0x5d57ff(0x5cf)]=Object[_0x5d57ff(0x2e3)](Window_Base['prototype']),Window_PictureCoordinates['prototype']['constructor']=Window_PictureCoordinates,Window_PictureCoordinates[_0x5d57ff(0x5cf)][_0x5d57ff(0x4d1)]=function(){const _0x57c321=_0x5d57ff;this[_0x57c321(0x997)]=_0x57c321(0x72c),this[_0x57c321(0x844)]=_0x57c321(0x72c),this[_0x57c321(0x5ab)]='nah';const _0xc913af=this[_0x57c321(0x294)]();Window_Base[_0x57c321(0x5cf)][_0x57c321(0x4d1)][_0x57c321(0x3dd)](this,_0xc913af),this[_0x57c321(0x20c)](0x2);},Window_PictureCoordinates[_0x5d57ff(0x5cf)][_0x5d57ff(0x294)]=function(){const _0x2fe7a0=_0x5d57ff;let _0xbcbd97=0x0,_0x138860=Graphics[_0x2fe7a0(0x317)]-this[_0x2fe7a0(0x416)](),_0x4846ba=Graphics['width'],_0x5240ed=this[_0x2fe7a0(0x416)]();return new Rectangle(_0xbcbd97,_0x138860,_0x4846ba,_0x5240ed);},Window_PictureCoordinates['prototype'][_0x5d57ff(0x6e9)]=function(){const _0x572015=_0x5d57ff;this[_0x572015(0x799)]=0x0;},Window_PictureCoordinates[_0x5d57ff(0x5cf)][_0x5d57ff(0x74d)]=function(){const _0x469ae3=_0x5d57ff;Window_Base[_0x469ae3(0x5cf)][_0x469ae3(0x74d)][_0x469ae3(0x3dd)](this),this[_0x469ae3(0x4ad)]();},Window_PictureCoordinates['prototype']['updateData']=function(){const _0x1f42b6=_0x5d57ff;if(!this[_0x1f42b6(0x408)]())return;this[_0x1f42b6(0x345)]();},Window_PictureCoordinates[_0x5d57ff(0x5cf)]['needsUpdate']=function(){const _0x1b1ae9=_0x5d57ff,_0x291254=$gameTemp[_0x1b1ae9(0x1dd)],_0x399c41=$gameScreen[_0x1b1ae9(0x3a0)](_0x291254);if(_0x399c41){if(_0x1b1ae9(0x7e3)!==_0x1b1ae9(0x471))return this[_0x1b1ae9(0x997)]!==_0x399c41[_0x1b1ae9(0x753)]||this[_0x1b1ae9(0x844)]!==_0x399c41['_x']||this[_0x1b1ae9(0x5ab)]!==_0x399c41['_y'];else{if(!this[_0x1b1ae9(0x408)]())return;this[_0x1b1ae9(0x345)]();}}else{if(_0x1b1ae9(0x80d)===_0x1b1ae9(0x38f))this['refreshWithTextCodeSupport']();else return![];}},Window_PictureCoordinates[_0x5d57ff(0x5cf)]['refresh']=function(){const _0x17d6a9=_0x5d57ff;this[_0x17d6a9(0x452)][_0x17d6a9(0x4a2)]();const _0x8c4318=$gameTemp['_pictureCoordinatesMode'],_0x15aab2=$gameScreen[_0x17d6a9(0x3a0)](_0x8c4318);if(!_0x15aab2)return;this[_0x17d6a9(0x997)]=_0x15aab2[_0x17d6a9(0x753)],this[_0x17d6a9(0x844)]=_0x15aab2['_x'],this[_0x17d6a9(0x5ab)]=_0x15aab2['_y'];const _0x3b4d67=ColorManager[_0x17d6a9(0x8cc)]();this[_0x17d6a9(0x452)][_0x17d6a9(0x4ae)](0x0,0x0,this['innerWidth'],this[_0x17d6a9(0x92e)],_0x3b4d67);const _0x2a3603='\x20Origin:\x20%1'[_0x17d6a9(0x20a)](_0x15aab2[_0x17d6a9(0x753)]===0x0?_0x17d6a9(0x6c7):'Center'),_0x17c57b=_0x17d6a9(0x930)['format'](_0x15aab2['_x']),_0x4b9dec=_0x17d6a9(0x2ea)['format'](_0x15aab2['_y']),_0x29be77=_0x17d6a9(0x674)['format'](TextManager[_0x17d6a9(0x4b5)](_0x17d6a9(0x6f2)));let _0x3053da=Math['floor'](this[_0x17d6a9(0x5df)]/0x4);this[_0x17d6a9(0x19d)](_0x2a3603,_0x3053da*0x0,0x0,_0x3053da),this[_0x17d6a9(0x19d)](_0x17c57b,_0x3053da*0x1,0x0,_0x3053da,_0x17d6a9(0x1cf)),this[_0x17d6a9(0x19d)](_0x4b9dec,_0x3053da*0x2,0x0,_0x3053da,_0x17d6a9(0x1cf));const _0x536583=this[_0x17d6a9(0x7d3)](_0x29be77)[_0x17d6a9(0x961)],_0x4aec72=this[_0x17d6a9(0x5df)]-_0x536583;this[_0x17d6a9(0x76f)](_0x29be77,_0x4aec72,0x0,_0x536583);},VisuMZ[_0x5d57ff(0x37e)]=function(_0x5613b6){const _0x342963=_0x5d57ff;if(Utils['isOptionValid'](_0x342963(0x602))){var _0x2c5d8a=require(_0x342963(0x1c4))[_0x342963(0x990)][_0x342963(0x5e4)]();SceneManager[_0x342963(0x2d3)]();if(_0x5613b6)setTimeout(_0x2c5d8a[_0x342963(0x2fe)][_0x342963(0x487)](_0x2c5d8a),0x190);}},VisuMZ[_0x5d57ff(0x305)]=function(_0x5079af,_0x16339a){const _0x487b29=_0x5d57ff;_0x16339a=_0x16339a['toUpperCase']();var _0x46e987=1.70158,_0x247b96=0.7;switch(_0x16339a){case _0x487b29(0x54b):return _0x5079af;case _0x487b29(0x236):return-0x1*Math[_0x487b29(0x63d)](_0x5079af*(Math['PI']/0x2))+0x1;case _0x487b29(0x1f0):return Math[_0x487b29(0x61a)](_0x5079af*(Math['PI']/0x2));case _0x487b29(0x9de):return-0.5*(Math['cos'](Math['PI']*_0x5079af)-0x1);case _0x487b29(0x7d8):return _0x5079af*_0x5079af;case _0x487b29(0x8a7):return _0x5079af*(0x2-_0x5079af);case _0x487b29(0x558):return _0x5079af<0.5?0x2*_0x5079af*_0x5079af:-0x1+(0x4-0x2*_0x5079af)*_0x5079af;case _0x487b29(0x1e1):return _0x5079af*_0x5079af*_0x5079af;case _0x487b29(0x457):var _0x1c0a62=_0x5079af-0x1;return _0x1c0a62*_0x1c0a62*_0x1c0a62+0x1;case _0x487b29(0x483):return _0x5079af<0.5?0x4*_0x5079af*_0x5079af*_0x5079af:(_0x5079af-0x1)*(0x2*_0x5079af-0x2)*(0x2*_0x5079af-0x2)+0x1;case'INQUART':return _0x5079af*_0x5079af*_0x5079af*_0x5079af;case _0x487b29(0x1b4):var _0x1c0a62=_0x5079af-0x1;return 0x1-_0x1c0a62*_0x1c0a62*_0x1c0a62*_0x1c0a62;case'INOUTQUART':var _0x1c0a62=_0x5079af-0x1;return _0x5079af<0.5?0x8*_0x5079af*_0x5079af*_0x5079af*_0x5079af:0x1-0x8*_0x1c0a62*_0x1c0a62*_0x1c0a62*_0x1c0a62;case _0x487b29(0x5fd):return _0x5079af*_0x5079af*_0x5079af*_0x5079af*_0x5079af;case _0x487b29(0x4fa):var _0x1c0a62=_0x5079af-0x1;return 0x1+_0x1c0a62*_0x1c0a62*_0x1c0a62*_0x1c0a62*_0x1c0a62;case _0x487b29(0x943):var _0x1c0a62=_0x5079af-0x1;return _0x5079af<0.5?0x10*_0x5079af*_0x5079af*_0x5079af*_0x5079af*_0x5079af:0x1+0x10*_0x1c0a62*_0x1c0a62*_0x1c0a62*_0x1c0a62*_0x1c0a62;case _0x487b29(0x274):if(_0x5079af===0x0){if(_0x487b29(0x836)!==_0x487b29(0x2da))return 0x0;else _0xfbdcdd[_0x487b29(0x909)][_0x487b29(0x3d3)]['QoL']['MapNameTextCode']?this[_0x487b29(0x89a)]():_0x2ea11c[_0x487b29(0x909)][_0x487b29(0x441)]['call'](this);}return Math[_0x487b29(0x7ff)](0x2,0xa*(_0x5079af-0x1));case _0x487b29(0x21b):if(_0x5079af===0x1){if(_0x487b29(0x52c)!==_0x487b29(0x52c))this['_number']=_0x29120b(_0x3a214e(this[_0x487b29(0x502)])[_0x487b29(0x379)](0x1)),this['_number']=_0x21acbe[_0x487b29(0x8ee)](0x0,this[_0x487b29(0x502)]),_0x285ece[_0x487b29(0x4a2)](),this['refresh'](),_0xddf2c4[_0x487b29(0x5dc)](),this[_0x487b29(0x311)](this[_0x487b29(0x91b)]-0x1);else return 0x1;}return-Math[_0x487b29(0x7ff)](0x2,-0xa*_0x5079af)+0x1;case _0x487b29(0x1cd):if(_0x5079af===0x0||_0x5079af===0x1)return _0x5079af;var _0x127854=_0x5079af*0x2,_0xc9ca11=_0x127854-0x1;if(_0x127854<0x1)return'dwkiv'!=='DWOwT'?0.5*Math[_0x487b29(0x7ff)](0x2,0xa*_0xc9ca11):_0x3d14a9[_0x487b29(0x293)]();return 0.5*(-Math[_0x487b29(0x7ff)](0x2,-0xa*_0xc9ca11)+0x2);case'INCIRC':var _0x127854=_0x5079af/0x1;return-0x1*(Math['sqrt'](0x1-_0x127854*_0x5079af)-0x1);case _0x487b29(0x669):var _0x1c0a62=_0x5079af-0x1;return Math[_0x487b29(0x642)](0x1-_0x1c0a62*_0x1c0a62);case _0x487b29(0x63b):var _0x127854=_0x5079af*0x2,_0xc9ca11=_0x127854-0x2;if(_0x127854<0x1){if(_0x487b29(0x21e)===_0x487b29(0x57b))this[_0x487b29(0x214)](0x0);else return-0.5*(Math['sqrt'](0x1-_0x127854*_0x127854)-0x1);}return 0.5*(Math[_0x487b29(0x642)](0x1-_0xc9ca11*_0xc9ca11)+0x1);case _0x487b29(0x3a7):return _0x5079af*_0x5079af*((_0x46e987+0x1)*_0x5079af-_0x46e987);case'OUTBACK':var _0x127854=_0x5079af/0x1-0x1;return _0x127854*_0x127854*((_0x46e987+0x1)*_0x127854+_0x46e987)+0x1;break;case _0x487b29(0x774):var _0x127854=_0x5079af*0x2,_0x299b7b=_0x127854-0x2,_0x4b11e2=_0x46e987*1.525;if(_0x127854<0x1){if(_0x487b29(0x43a)==='jACMX')return 0.5*_0x127854*_0x127854*((_0x4b11e2+0x1)*_0x127854-_0x4b11e2);else{const _0x4192da=_0x2d4b0c[_0x3a5bc0];_0x4192da?this[_0x487b29(0x534)](_0x4192da[_0x487b29(0x6c4)],0x0):this[_0x487b29(0x6c3)]();}}return 0.5*(_0x299b7b*_0x299b7b*((_0x4b11e2+0x1)*_0x299b7b+_0x4b11e2)+0x2);case _0x487b29(0x8a6):if(_0x5079af===0x0||_0x5079af===0x1)return _0x5079af;var _0x127854=_0x5079af/0x1,_0xc9ca11=_0x127854-0x1,_0x27fb45=0x1-_0x247b96,_0x4b11e2=_0x27fb45/(0x2*Math['PI'])*Math['asin'](0x1);return-(Math['pow'](0x2,0xa*_0xc9ca11)*Math[_0x487b29(0x61a)]((_0xc9ca11-_0x4b11e2)*(0x2*Math['PI'])/_0x27fb45));case _0x487b29(0x36e):var _0x27fb45=0x1-_0x247b96,_0x127854=_0x5079af*0x2;if(_0x5079af===0x0||_0x5079af===0x1)return _0x5079af;var _0x4b11e2=_0x27fb45/(0x2*Math['PI'])*Math[_0x487b29(0x5bb)](0x1);return Math['pow'](0x2,-0xa*_0x127854)*Math[_0x487b29(0x61a)]((_0x127854-_0x4b11e2)*(0x2*Math['PI'])/_0x27fb45)+0x1;case _0x487b29(0x1b0):var _0x27fb45=0x1-_0x247b96;if(_0x5079af===0x0||_0x5079af===0x1)return _0x487b29(0x55e)!==_0x487b29(0x55e)?_0x14e207['CoreEngine']['Settings'][_0x487b29(0x1d2)][_0x487b29(0x1d3)]:_0x5079af;var _0x127854=_0x5079af*0x2,_0xc9ca11=_0x127854-0x1,_0x4b11e2=_0x27fb45/(0x2*Math['PI'])*Math[_0x487b29(0x5bb)](0x1);if(_0x127854<0x1){if(_0x487b29(0x4eb)===_0x487b29(0x4eb))return-0.5*(Math[_0x487b29(0x7ff)](0x2,0xa*_0xc9ca11)*Math[_0x487b29(0x61a)]((_0xc9ca11-_0x4b11e2)*(0x2*Math['PI'])/_0x27fb45));else{if(this['useDigitGrouping']())_0xe968f7=_0x4c1428['GroupDigits'](_0x4211f4);_0x4460f5[_0x487b29(0x909)]['Window_Base_drawText'][_0x487b29(0x3dd)](this,_0x5202f4,_0x4bf7d9,_0x1590e8,_0x1abc93,_0x564307);}}return Math[_0x487b29(0x7ff)](0x2,-0xa*_0xc9ca11)*Math[_0x487b29(0x61a)]((_0xc9ca11-_0x4b11e2)*(0x2*Math['PI'])/_0x27fb45)*0.5+0x1;case _0x487b29(0x31a):var _0x127854=_0x5079af/0x1;if(_0x127854<0x1/2.75){if(_0x487b29(0x6cf)===_0x487b29(0x7f4))_0x4e0759['CoreEngine'][_0x487b29(0x298)]['call'](this),this['_colorCache']=this[_0x487b29(0x370)]||{};else return 7.5625*_0x127854*_0x127854;}else{if(_0x127854<0x2/2.75){var _0x299b7b=_0x127854-1.5/2.75;return 7.5625*_0x299b7b*_0x299b7b+0.75;}else{if(_0x127854<2.5/2.75){var _0x299b7b=_0x127854-2.25/2.75;return 7.5625*_0x299b7b*_0x299b7b+0.9375;}else{var _0x299b7b=_0x127854-2.625/2.75;return 7.5625*_0x299b7b*_0x299b7b+0.984375;}}}case'INBOUNCE':var _0x4a5884=0x1-VisuMZ['ApplyEasing'](0x1-_0x5079af,'outbounce');return _0x4a5884;case _0x487b29(0x41c):if(_0x5079af<0.5){if(_0x487b29(0x6b0)===_0x487b29(0x6b0))var _0x4a5884=VisuMZ['ApplyEasing'](_0x5079af*0x2,'inbounce')*0.5;else _0x2ce4ca=_0x177179['RevertPreserveNumbers'](_0x389bb1);}else var _0x4a5884=VisuMZ['ApplyEasing'](_0x5079af*0x2-0x1,'outbounce')*0.5+0.5;return _0x4a5884;default:return _0x5079af;}},VisuMZ[_0x5d57ff(0x4db)]=function(_0x3c0204){const _0x1c01ab=_0x5d57ff;_0x3c0204=String(_0x3c0204)[_0x1c01ab(0x658)]();const _0x5bd70d=VisuMZ['CoreEngine']['Settings']['Param'];if(_0x3c0204===_0x1c01ab(0x9ae))return _0x5bd70d[_0x1c01ab(0x539)];if(_0x3c0204===_0x1c01ab(0x94c))return _0x5bd70d['IconParam1'];if(_0x3c0204===_0x1c01ab(0x8fe))return _0x5bd70d[_0x1c01ab(0x68d)];if(_0x3c0204===_0x1c01ab(0x47b))return _0x5bd70d[_0x1c01ab(0x349)];if(_0x3c0204===_0x1c01ab(0x362))return _0x5bd70d[_0x1c01ab(0x5ef)];if(_0x3c0204===_0x1c01ab(0x75f))return _0x5bd70d['IconParam5'];if(_0x3c0204===_0x1c01ab(0x690))return _0x5bd70d[_0x1c01ab(0x358)];if(_0x3c0204===_0x1c01ab(0x78a))return _0x5bd70d[_0x1c01ab(0x8de)];if(_0x3c0204===_0x1c01ab(0x591))return _0x5bd70d['IconXParam0'];if(_0x3c0204===_0x1c01ab(0x71a))return _0x5bd70d[_0x1c01ab(0x85c)];if(_0x3c0204===_0x1c01ab(0x2ab))return _0x5bd70d['IconXParam2'];if(_0x3c0204===_0x1c01ab(0x887))return _0x5bd70d[_0x1c01ab(0x526)];if(_0x3c0204===_0x1c01ab(0x847))return _0x5bd70d[_0x1c01ab(0x1b9)];if(_0x3c0204===_0x1c01ab(0x4a3))return _0x5bd70d['IconXParam5'];if(_0x3c0204===_0x1c01ab(0x8e2))return _0x5bd70d[_0x1c01ab(0x64d)];if(_0x3c0204===_0x1c01ab(0x1d7))return _0x5bd70d['IconXParam7'];if(_0x3c0204===_0x1c01ab(0x4bc))return _0x5bd70d['IconXParam8'];if(_0x3c0204==='TRG')return _0x5bd70d[_0x1c01ab(0x288)];if(_0x3c0204===_0x1c01ab(0x815))return _0x5bd70d[_0x1c01ab(0x4a4)];if(_0x3c0204===_0x1c01ab(0x76e))return _0x5bd70d['IconSParam1'];if(_0x3c0204===_0x1c01ab(0x876))return _0x5bd70d['IconSParam2'];if(_0x3c0204===_0x1c01ab(0x5a8))return _0x5bd70d['IconSParam3'];if(_0x3c0204===_0x1c01ab(0x967))return _0x5bd70d[_0x1c01ab(0x4ac)];if(_0x3c0204==='TCR')return _0x5bd70d[_0x1c01ab(0x2d7)];if(_0x3c0204===_0x1c01ab(0x68e))return _0x5bd70d[_0x1c01ab(0x237)];if(_0x3c0204===_0x1c01ab(0x986))return _0x5bd70d['IconSParam7'];if(_0x3c0204===_0x1c01ab(0x4d6))return _0x5bd70d['IconSParam8'];if(_0x3c0204===_0x1c01ab(0x72a))return _0x5bd70d[_0x1c01ab(0x689)];if(VisuMZ['CoreEngine'][_0x1c01ab(0x644)][_0x3c0204])return VisuMZ['CoreEngine'][_0x1c01ab(0x644)][_0x3c0204]||0x0;return 0x0;},VisuMZ[_0x5d57ff(0x44d)]=function(_0x397eb7,_0x15d247,_0x1cc213){const _0x19f381=_0x5d57ff;if(_0x1cc213===undefined&&_0x397eb7%0x1===0x0)return _0x397eb7;if(_0x1cc213!==undefined&&['MAXHP',_0x19f381(0x94c),_0x19f381(0x8fe),_0x19f381(0x47b),'MAT',_0x19f381(0x75f),_0x19f381(0x690),_0x19f381(0x78a)][_0x19f381(0x861)](String(_0x1cc213)[_0x19f381(0x658)]()['trim']()))return _0x397eb7;_0x15d247=_0x15d247||0x0;if(VisuMZ[_0x19f381(0x909)][_0x19f381(0x35e)][_0x1cc213])return VisuMZ[_0x19f381(0x909)]['CustomParamType'][_0x1cc213]===_0x19f381(0x71b)?_0x397eb7:_0x19f381(0x972)===_0x19f381(0x3ca)?_0x19f381(0x745):String((_0x397eb7*0x64)[_0x19f381(0x510)](_0x15d247))+'%';return String((_0x397eb7*0x64)[_0x19f381(0x510)](_0x15d247))+'%';},VisuMZ[_0x5d57ff(0x718)]=function(_0x55c0ea){const _0x1407e3=_0x5d57ff;_0x55c0ea=String(_0x55c0ea);if(!_0x55c0ea)return _0x55c0ea;if(typeof _0x55c0ea!==_0x1407e3(0x336))return _0x55c0ea;const _0x5a782=VisuMZ[_0x1407e3(0x909)][_0x1407e3(0x3d3)][_0x1407e3(0x1d2)][_0x1407e3(0x6e8)]||_0x1407e3(0x66e),_0xacbf35={'maximumFractionDigits':0x6};_0x55c0ea=_0x55c0ea[_0x1407e3(0x470)](/\[(.*?)\]/g,(_0x33181f,_0x56d659)=>{const _0x433492=_0x1407e3;if('BVNWR'!==_0x433492(0x5f2))this['startAutoNewGame']();else return VisuMZ[_0x433492(0x8e1)](_0x56d659,'[',']');}),_0x55c0ea=_0x55c0ea['replace'](/<(.*?)>/g,(_0x58d1f3,_0x56ddcb)=>{const _0x1f4220=_0x1407e3;if(_0x1f4220(0x2d4)==='IZYIp')return VisuMZ[_0x1f4220(0x8e1)](_0x56ddcb,'<','>');else{const _0xcceca3='_stored_mpGaugeColor2';this['_colorCache']=this[_0x1f4220(0x370)]||{};if(this[_0x1f4220(0x370)][_0xcceca3])return this[_0x1f4220(0x370)][_0xcceca3];const _0x25a519=_0x308144[_0x1f4220(0x909)][_0x1f4220(0x3d3)][_0x1f4220(0x5f4)]['ColorMPGauge2'];return this[_0x1f4220(0x6fe)](_0xcceca3,_0x25a519);}}),_0x55c0ea=_0x55c0ea['replace'](/\{\{(.*?)\}\}/g,(_0xd95512,_0x39fdde)=>{const _0x1bf56c=_0x1407e3;return VisuMZ[_0x1bf56c(0x8e1)](_0x39fdde,'','');}),_0x55c0ea=_0x55c0ea[_0x1407e3(0x470)](/(\d+\.?\d*)/g,(_0xfd5dd2,_0x23bcb2)=>{const _0x392527=_0x1407e3;let _0x326d22=_0x23bcb2;if(_0x326d22[0x0]==='0')return _0x326d22;if(_0x326d22[_0x326d22['length']-0x1]==='.'){if(_0x392527(0x490)===_0x392527(0x490))return Number(_0x326d22)[_0x392527(0x698)](_0x5a782,_0xacbf35)+'.';else this[_0x392527(0x360)]=_0x26ef06;}else return _0x326d22[_0x326d22[_0x392527(0x929)]-0x1]===','?_0x392527(0x58e)!==_0x392527(0x3fb)?Number(_0x326d22)[_0x392527(0x698)](_0x5a782,_0xacbf35)+',':this['textColor'](_0x4b6ab8(_0x2dd4a2)):Number(_0x326d22)[_0x392527(0x698)](_0x5a782,_0xacbf35);});let _0x49e784=0x3;while(_0x49e784--){_0x1407e3(0x57f)===_0x1407e3(0x57f)?_0x55c0ea=VisuMZ['RevertPreserveNumbers'](_0x55c0ea):this['contents']['fontSize']+=0x6;}return _0x55c0ea;},VisuMZ[_0x5d57ff(0x8e1)]=function(_0x5dfe6a,_0x48455a,_0x53aab2){const _0x35f686=_0x5d57ff;return _0x5dfe6a=_0x5dfe6a[_0x35f686(0x470)](/(\d)/gi,(_0x6839aa,_0x4d55c8)=>_0x35f686(0x4d4)[_0x35f686(0x20a)](Number(_0x4d55c8))),_0x35f686(0x1ea)['format'](_0x5dfe6a,_0x48455a,_0x53aab2);},VisuMZ[_0x5d57ff(0x716)]=function(_0x129ee2){const _0x700a5b=_0x5d57ff;return _0x129ee2=_0x129ee2[_0x700a5b(0x470)](/PRESERVCONVERSION\((\d+)\)/gi,(_0x2f3d2d,_0x44a02b)=>Number(parseInt(_0x44a02b))),_0x129ee2;},VisuMZ[_0x5d57ff(0x275)]=function(_0x191e84){const _0x2d258f=_0x5d57ff;SoundManager[_0x2d258f(0x4f7)]();if(!Utils[_0x2d258f(0x2c4)]()){const _0xbc4ee2=window['open'](_0x191e84,_0x2d258f(0x3a5));}else{const _0x255a56=process[_0x2d258f(0x380)]==_0x2d258f(0x933)?_0x2d258f(0x2a5):process['platform']=='win32'?_0x2d258f(0x770):'xdg-open';require(_0x2d258f(0x771))[_0x2d258f(0x99e)](_0x255a56+'\x20'+_0x191e84);}},VisuMZ[_0x5d57ff(0x88f)]=function(_0x4771cd,_0x1e4639){const _0xd3854d=_0x5d57ff;if(!_0x4771cd)return'';const _0x38be09=_0x4771cd[_0xd3854d(0x7bf)]||_0x4771cd['id'];let _0x111de0='';_0x4771cd['initialLevel']!==undefined&&_0x4771cd[_0xd3854d(0x5fe)]!==undefined&&(_0x111de0='Actor-%1-%2'[_0xd3854d(0x20a)](_0x38be09,_0x1e4639));_0x4771cd[_0xd3854d(0x3de)]!==undefined&&_0x4771cd['learnings']!==undefined&&(_0xd3854d(0x9e2)!==_0xd3854d(0x381)?_0x111de0=_0xd3854d(0x6d9)[_0xd3854d(0x20a)](_0x38be09,_0x1e4639):(this['_onceParallelInterpreters']=this[_0xd3854d(0x35b)]||[],this[_0xd3854d(0x35b)][_0xd3854d(0x1e2)](_0x37baee)));_0x4771cd[_0xd3854d(0x496)]!==undefined&&_0x4771cd[_0xd3854d(0x4cf)]!==undefined&&(_0x111de0=_0xd3854d(0x777)[_0xd3854d(0x20a)](_0x38be09,_0x1e4639));if(_0x4771cd['itypeId']!==undefined&&_0x4771cd[_0xd3854d(0x9af)]!==undefined){if(_0xd3854d(0x7f3)!==_0xd3854d(0x2c9))_0x111de0=_0xd3854d(0x292)[_0xd3854d(0x20a)](_0x38be09,_0x1e4639);else{const _0x3f8358=_0x16beef[_0xd3854d(0x909)]['Settings']['ButtonAssist'],_0x5a65e0=_0x3f8358[_0xd3854d(0x2ca)],_0x46e49e=this[_0xd3854d(0x4b5)](_0x3669cd),_0x2678e6=this[_0xd3854d(0x4b5)](_0x3849be);return _0x5a65e0['format'](_0x46e49e,_0x2678e6);}}_0x4771cd[_0xd3854d(0x7b9)]!==undefined&&_0x4771cd[_0xd3854d(0x525)]===0x1&&(_0x111de0=_0xd3854d(0x744)[_0xd3854d(0x20a)](_0x38be09,_0x1e4639));_0x4771cd[_0xd3854d(0x81e)]!==undefined&&_0x4771cd[_0xd3854d(0x525)]>0x1&&(_0x111de0=_0xd3854d(0x1d4)[_0xd3854d(0x20a)](_0x38be09,_0x1e4639));if(_0x4771cd[_0xd3854d(0x633)]!==undefined&&_0x4771cd[_0xd3854d(0x435)]!==undefined){if(_0xd3854d(0x1af)===_0xd3854d(0x1af))_0x111de0=_0xd3854d(0x6e4)[_0xd3854d(0x20a)](_0x38be09,_0x1e4639);else{this[_0xd3854d(0x469)]['remove'](_0x1c9aec),this['_effectsContainer']['removeChild'](_0x22f847);for(const _0x33f728 of _0x22c21f[_0xd3854d(0x939)]){_0x33f728['endAnimation']&&_0x33f728[_0xd3854d(0x32c)]();}_0x14987e['destroy']();}}return _0x4771cd['autoRemovalTiming']!==undefined&&_0x4771cd['maxTurns']!==undefined&&(_0x111de0='State-%1-%2'[_0xd3854d(0x20a)](_0x38be09,_0x1e4639)),_0x111de0;},Game_Picture[_0x5d57ff(0x5cf)][_0x5d57ff(0x2e2)]=function(){const _0x5d3399=_0x5d57ff;return this[_0x5d3399(0x4be)];},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x4fd)]=Game_Picture[_0x5d57ff(0x5cf)][_0x5d57ff(0x8c9)],Game_Picture['prototype'][_0x5d57ff(0x8c9)]=function(){const _0x13a179=_0x5d57ff;VisuMZ[_0x13a179(0x909)][_0x13a179(0x4fd)][_0x13a179(0x3dd)](this),this[_0x13a179(0x4be)]={'x':0x0,'y':0x0},this[_0x13a179(0x55c)]={'x':0x0,'y':0x0};},VisuMZ['CoreEngine'][_0x5d57ff(0x575)]=Game_Picture[_0x5d57ff(0x5cf)][_0x5d57ff(0x1f4)],Game_Picture[_0x5d57ff(0x5cf)][_0x5d57ff(0x1f4)]=function(){const _0x2e4cfc=_0x5d57ff;this[_0x2e4cfc(0x791)]();const _0x335e66=this['_duration'];VisuMZ[_0x2e4cfc(0x909)][_0x2e4cfc(0x575)]['call'](this),_0x335e66>0x0&&this[_0x2e4cfc(0x65b)]<=0x0&&(_0x2e4cfc(0x503)!==_0x2e4cfc(0x2bf)?(this['_x']=this['_targetX'],this['_y']=this['_targetY'],this[_0x2e4cfc(0x473)]=this[_0x2e4cfc(0x3f0)],this['_scaleY']=this[_0x2e4cfc(0x8b7)],this['_opacity']=this[_0x2e4cfc(0x6ff)],this[_0x2e4cfc(0x4be)]&&(this[_0x2e4cfc(0x4be)]['x']=this['_targetAnchor']['x'],this['_anchor']['y']=this['_targetAnchor']['y'])):this[_0x2e4cfc(0x4b9)][_0x2e4cfc(0x20c)](_0x48c17e[_0x2e4cfc(0x604)][_0x2e4cfc(0x7f8)]));},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x3dc)]=Game_Picture[_0x5d57ff(0x5cf)]['show'],Game_Picture['prototype'][_0x5d57ff(0x455)]=function(_0x1c7776,_0x5b8c07,_0x21193e,_0x275ca7,_0x25f5d1,_0xf62f66,_0x107ea8,_0x428213){const _0x4d27e5=_0x5d57ff;VisuMZ[_0x4d27e5(0x909)][_0x4d27e5(0x3dc)][_0x4d27e5(0x3dd)](this,_0x1c7776,_0x5b8c07,_0x21193e,_0x275ca7,_0x25f5d1,_0xf62f66,_0x107ea8,_0x428213),this['setAnchor']([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x5b8c07]||{'x':0x0,'y':0x0});},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x632)]=Game_Picture['prototype']['move'],Game_Picture[_0x5d57ff(0x5cf)][_0x5d57ff(0x826)]=function(_0x18aadd,_0x27f49b,_0xe78905,_0x2fe67b,_0x477e7,_0x107cb5,_0x369722,_0x103967,_0x35b13d){const _0x467c08=_0x5d57ff;VisuMZ[_0x467c08(0x909)][_0x467c08(0x632)][_0x467c08(0x3dd)](this,_0x18aadd,_0x27f49b,_0xe78905,_0x2fe67b,_0x477e7,_0x107cb5,_0x369722,_0x103967,_0x35b13d),this['setTargetAnchor']([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x18aadd]||{'x':0x0,'y':0x0});},Game_Picture[_0x5d57ff(0x5cf)][_0x5d57ff(0x791)]=function(){const _0x52ed1f=_0x5d57ff;this[_0x52ed1f(0x65b)]>0x0&&(this[_0x52ed1f(0x4be)]['x']=this[_0x52ed1f(0x86a)](this[_0x52ed1f(0x4be)]['x'],this[_0x52ed1f(0x55c)]['x']),this['_anchor']['y']=this[_0x52ed1f(0x86a)](this[_0x52ed1f(0x4be)]['y'],this[_0x52ed1f(0x55c)]['y']));},Game_Picture['prototype'][_0x5d57ff(0x66f)]=function(_0x2683e2){const _0xd04c73=_0x5d57ff;this[_0xd04c73(0x4be)]=_0x2683e2,this[_0xd04c73(0x55c)]=JsonEx[_0xd04c73(0x4fb)](this[_0xd04c73(0x4be)]);},Game_Picture[_0x5d57ff(0x5cf)][_0x5d57ff(0x6b2)]=function(_0x4bc28a){const _0x5a3a68=_0x5d57ff;this[_0x5a3a68(0x55c)]=_0x4bc28a;},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x45c)]=Sprite_Picture['prototype']['updateOrigin'],Sprite_Picture['prototype'][_0x5d57ff(0x77f)]=function(){const _0x2e63bf=_0x5d57ff,_0x16cd3c=this[_0x2e63bf(0x3a0)]();!_0x16cd3c[_0x2e63bf(0x2e2)]()?_0x2e63bf(0x344)!==_0x2e63bf(0x786)?VisuMZ[_0x2e63bf(0x909)]['Sprite_Picture_updateOrigin']['call'](this):(_0x402075[_0x2e63bf(0x8e6)][0x57]='up',_0x1a0643[_0x2e63bf(0x8e6)][0x41]=_0x2e63bf(0x60d),_0x5acd04[_0x2e63bf(0x8e6)][0x53]=_0x2e63bf(0x6d2),_0x3ac1b5[_0x2e63bf(0x8e6)][0x44]=_0x2e63bf(0x24a),_0x15300c[_0x2e63bf(0x8e6)][0x45]=_0x2e63bf(0x4f8)):(this[_0x2e63bf(0x2e2)]['x']=_0x16cd3c['anchor']()['x'],this['anchor']['y']=_0x16cd3c[_0x2e63bf(0x2e2)]()['y']);},Game_Action['prototype'][_0x5d57ff(0x8da)]=function(_0x3d8533){const _0x5de684=_0x5d57ff;if(_0x3d8533){const _0x3443f6=_0x3d8533[_0x5de684(0x2fa)];if(_0x3443f6===0x1&&this['subject']()[_0x5de684(0x5b3)]()!==0x1){if(_0x5de684(0x652)!=='foEAU')this[_0x5de684(0x467)]();else{if(!this[_0x5de684(0x727)])return;this['x']=this[_0x5de684(0x727)][_0x5de684(0x65f)],this['y']=this[_0x5de684(0x727)][_0x5de684(0x34c)],this[_0x5de684(0x672)]['x']=this[_0x5de684(0x727)]['targetScaleX'],this[_0x5de684(0x672)]['y']=this[_0x5de684(0x727)][_0x5de684(0x5e6)],this[_0x5de684(0x663)]=this[_0x5de684(0x727)][_0x5de684(0x46e)],this[_0x5de684(0x764)]=this['_coreEasing'][_0x5de684(0x45b)],this['contentsOpacity']=this[_0x5de684(0x727)][_0x5de684(0x608)],this[_0x5de684(0x7ac)](_0x58e2c5,_0x3067ca,this['x'],this['y'],this[_0x5de684(0x672)]['x'],this[_0x5de684(0x672)]['y'],this[_0x5de684(0x663)],this[_0x5de684(0x764)],this['contentsOpacity']);}}else{if(_0x3443f6===0x2&&this[_0x5de684(0x202)]()['guardSkillId']()!==0x2){if(_0x5de684(0x197)!==_0x5de684(0x592))this['setGuard']();else{const _0x9a4729=_0x3e1623[_0x5de684(0x276)]?(_0x105b3f[_0x5de684(0x5cf)][_0x5de684(0x92d)]()+0x6)*0x2:0x0,_0x2ab460=this[_0x5de684(0x410)](),_0x1fdf0a=_0x571788[_0x5de684(0x873)]-_0x9a4729*0x2,_0x25c03d=this[_0x5de684(0x7cd)]();return new _0x2d0ee0(_0x9a4729,_0x2ab460,_0x1fdf0a,_0x25c03d);}}else this['setSkill'](_0x3443f6);}}else{if(_0x5de684(0x6fb)===_0x5de684(0x6fb))this[_0x5de684(0x4a2)]();else return this['mainAreaTopSideButtonLayout']();}},Game_Actor['prototype'][_0x5d57ff(0x794)]=function(){const _0x409f9c=_0x5d57ff;return this['skills']()[_0x409f9c(0x552)](_0x48f436=>this[_0x409f9c(0x851)](_0x48f436)&&this[_0x409f9c(0x766)]()[_0x409f9c(0x861)](_0x48f436['stypeId']));},Window_Base[_0x5d57ff(0x5cf)][_0x5d57ff(0x4cb)]=function(){const _0x40c3f4=_0x5d57ff;this['_dimmerSprite']=new Sprite(),this[_0x40c3f4(0x6b3)][_0x40c3f4(0x351)]=new Bitmap(0x0,0x0),this[_0x40c3f4(0x6b3)]['x']=0x0,this[_0x40c3f4(0x893)](this['_dimmerSprite']);},Window_Base['prototype'][_0x5d57ff(0x8aa)]=function(){const _0x4f75b1=_0x5d57ff;if(this['_dimmerSprite']){if('YFWhE'!==_0x4f75b1(0x1a5)){const _0x35b0bb=this[_0x4f75b1(0x6b3)]['bitmap'],_0x43420f=this[_0x4f75b1(0x961)],_0x13b11d=this['height'],_0x403d4b=this['padding'],_0x5a5a0f=ColorManager[_0x4f75b1(0x83e)](),_0x3bab60=ColorManager['dimColor2']();_0x35b0bb['resize'](_0x43420f,_0x13b11d),_0x35b0bb[_0x4f75b1(0x6ed)](0x0,0x0,_0x43420f,_0x403d4b,_0x3bab60,_0x5a5a0f,!![]),_0x35b0bb['fillRect'](0x0,_0x403d4b,_0x43420f,_0x13b11d-_0x403d4b*0x2,_0x5a5a0f),_0x35b0bb[_0x4f75b1(0x6ed)](0x0,_0x13b11d-_0x403d4b,_0x43420f,_0x403d4b,_0x5a5a0f,_0x3bab60,!![]),this[_0x4f75b1(0x6b3)][_0x4f75b1(0x335)](0x0,0x0,_0x43420f,_0x13b11d);}else return _0x362f22[_0x4f75b1(0x909)]['Settings'][_0x4f75b1(0x1d2)][_0x4f75b1(0x8b2)]&&_0x2b6dfd['isEnemy']()?_0x5ac2a5[_0x4f75b1(0x9db)]-0.05:_0x21b720['eva'];}},Game_Actor['prototype'][_0x5d57ff(0x896)]=function(){const _0x529a20=_0x5d57ff;for(let _0x5e8723=0x0;_0x5e8723<this[_0x529a20(0x3d0)]();_0x5e8723++){if(_0x529a20(0x4ec)===_0x529a20(0x2b0)){const _0x33c324=_0x529a20(0x2ad);this['_colorCache']=this[_0x529a20(0x370)]||{};if(this['_colorCache'][_0x33c324])return this['_colorCache'][_0x33c324];const _0x4f7aa8=_0x10fbdf['CoreEngine']['Settings'][_0x529a20(0x5f4)][_0x529a20(0x9e1)];return this[_0x529a20(0x6fe)](_0x33c324,_0x4f7aa8);}else{const _0x19c2c2=this[_0x529a20(0x319)]();let _0x35c62b=Number[_0x529a20(0x2c8)];this['setAction'](_0x5e8723,_0x19c2c2[0x0]);for(const _0x27e609 of _0x19c2c2){if(_0x529a20(0x5a6)!==_0x529a20(0x8cb)){const _0xc05ca6=_0x27e609[_0x529a20(0x6b5)]();_0xc05ca6>_0x35c62b&&(_0x35c62b=_0xc05ca6,this[_0x529a20(0x433)](_0x5e8723,_0x27e609));}else this[_0x529a20(0x519)]=_0x5067bc;}}}this[_0x529a20(0x3e9)](_0x529a20(0x8d0));},Window_BattleItem[_0x5d57ff(0x5cf)][_0x5d57ff(0x615)]=function(_0x4355df){const _0x1e4b50=_0x5d57ff;if(BattleManager[_0x1e4b50(0x450)]())return BattleManager['actor']()[_0x1e4b50(0x851)](_0x4355df);else{if(_0x1e4b50(0x2fc)!==_0x1e4b50(0x4c0))return Window_ItemList[_0x1e4b50(0x5cf)]['isEnabled'][_0x1e4b50(0x3dd)](this,_0x4355df);else _0x1dd129[_0x1e4b50(0x8a2)](!![]);}},VisuMZ['CoreEngine'][_0x5d57ff(0x667)]=Scene_Map[_0x5d57ff(0x5cf)][_0x5d57ff(0x268)],Scene_Map['prototype'][_0x5d57ff(0x268)]=function(){const _0x6dfd65=_0x5d57ff;VisuMZ[_0x6dfd65(0x909)][_0x6dfd65(0x667)][_0x6dfd65(0x3dd)](this);const _0x4fb477=this[_0x6dfd65(0x928)][_0x6dfd65(0x859)];if(_0x4fb477)this[_0x6dfd65(0x43b)](_0x4fb477);},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x9e0)]=Scene_Battle['prototype'][_0x5d57ff(0x268)],Scene_Battle[_0x5d57ff(0x5cf)][_0x5d57ff(0x268)]=function(){const _0x48bfbc=_0x5d57ff;VisuMZ[_0x48bfbc(0x909)][_0x48bfbc(0x9e0)][_0x48bfbc(0x3dd)](this);const _0xec2543=this[_0x48bfbc(0x928)][_0x48bfbc(0x859)];if(_0xec2543)this[_0x48bfbc(0x43b)](_0xec2543);},Sprite_Actor['prototype'][_0x5d57ff(0x74d)]=function(){const _0x4c4042=_0x5d57ff;Sprite_Battler[_0x4c4042(0x5cf)]['update'][_0x4c4042(0x3dd)](this),this[_0x4c4042(0x2a0)]();if(this[_0x4c4042(0x2ef)])this[_0x4c4042(0x620)]();else this[_0x4c4042(0x4a6)]!==''&&(_0x4c4042(0x3f4)===_0x4c4042(0x3f4)?this['_battlerName']='':this[_0x4c4042(0x1e5)]());},Window['prototype'][_0x5d57ff(0x52d)]=function(){const _0x23aaf6=_0x5d57ff,_0x1dbd18=this[_0x23aaf6(0x9c6)],_0x6a9fd9=this[_0x23aaf6(0x29b)],_0x301acd=0x18,_0x26448b=_0x301acd/0x2,_0x37d7ca=0x60+_0x301acd,_0x43b46d=0x0+_0x301acd;this['_downArrowSprite']['bitmap']=this['_windowskin'],this[_0x23aaf6(0x784)][_0x23aaf6(0x2e2)]['x']=0.5,this[_0x23aaf6(0x784)][_0x23aaf6(0x2e2)]['y']=0.5,this['_downArrowSprite'][_0x23aaf6(0x335)](_0x37d7ca+_0x26448b,_0x43b46d+_0x26448b+_0x301acd,_0x301acd,_0x26448b),this[_0x23aaf6(0x784)]['move'](Math[_0x23aaf6(0x746)](_0x1dbd18/0x2),Math[_0x23aaf6(0x746)](_0x6a9fd9-_0x26448b)),this[_0x23aaf6(0x1f3)]['bitmap']=this['_windowskin'],this[_0x23aaf6(0x1f3)][_0x23aaf6(0x2e2)]['x']=0.5,this[_0x23aaf6(0x1f3)][_0x23aaf6(0x2e2)]['y']=0.5,this[_0x23aaf6(0x1f3)]['setFrame'](_0x37d7ca+_0x26448b,_0x43b46d,_0x301acd,_0x26448b),this['_upArrowSprite'][_0x23aaf6(0x826)](Math[_0x23aaf6(0x746)](_0x1dbd18/0x2),Math[_0x23aaf6(0x746)](_0x26448b));},Window['prototype'][_0x5d57ff(0x207)]=function(){const _0x447688=_0x5d57ff,_0x3b0cd9=0x90,_0x177b9e=0x60,_0x3428cd=0x18;this[_0x447688(0x99b)][_0x447688(0x351)]=this[_0x447688(0x7c7)],this[_0x447688(0x99b)][_0x447688(0x2e2)]['x']=0.5,this[_0x447688(0x99b)][_0x447688(0x2e2)]['y']=0x1,this[_0x447688(0x99b)][_0x447688(0x826)](Math[_0x447688(0x746)](this[_0x447688(0x9c6)]/0x2),this[_0x447688(0x29b)]),this[_0x447688(0x99b)][_0x447688(0x335)](_0x3b0cd9,_0x177b9e,_0x3428cd,_0x3428cd),this[_0x447688(0x99b)]['alpha']=0xff;},Window[_0x5d57ff(0x5cf)]['_updateFilterArea']=function(){const _0x565e47=_0x5d57ff,_0x362826=this['_clientArea'][_0x565e47(0x6c1)][_0x565e47(0x6b9)](new Point(0x0,0x0)),_0x5eb393=this[_0x565e47(0x59c)][_0x565e47(0x19e)];_0x5eb393['x']=_0x362826['x']+this['origin']['x'],_0x5eb393['y']=_0x362826['y']+this[_0x565e47(0x3b6)]['y'],_0x5eb393['width']=Math['ceil'](this['innerWidth']*this['scale']['x']),_0x5eb393['height']=Math[_0x565e47(0x67b)](this[_0x565e47(0x92e)]*this[_0x565e47(0x672)]['y']);},Window[_0x5d57ff(0x5cf)]['_refreshBack']=function(){const _0x5a5561=_0x5d57ff,_0x3582b7=this['_margin'],_0x18499c=Math[_0x5a5561(0x8ee)](0x0,this[_0x5a5561(0x9c6)]-_0x3582b7*0x2),_0x1ed899=Math[_0x5a5561(0x8ee)](0x0,this[_0x5a5561(0x29b)]-_0x3582b7*0x2),_0x1d92ff=this[_0x5a5561(0x27b)],_0x3413f2=_0x1d92ff[_0x5a5561(0x1cb)][0x0];_0x1d92ff[_0x5a5561(0x351)]=this[_0x5a5561(0x7c7)],_0x1d92ff[_0x5a5561(0x335)](0x0,0x0,0x60,0x60),_0x1d92ff[_0x5a5561(0x826)](_0x3582b7,_0x3582b7),_0x1d92ff[_0x5a5561(0x672)]['x']=_0x18499c/0x60,_0x1d92ff['scale']['y']=_0x1ed899/0x60,_0x3413f2['bitmap']=this[_0x5a5561(0x7c7)],_0x3413f2[_0x5a5561(0x335)](0x0,0x60,0x60,0x60),_0x3413f2[_0x5a5561(0x826)](0x0,0x0,_0x18499c,_0x1ed899),_0x3413f2['scale']['x']=0x1/_0x1d92ff['scale']['x'],_0x3413f2['scale']['y']=0x1/_0x1d92ff[_0x5a5561(0x672)]['y'],_0x1d92ff[_0x5a5561(0x7a4)](this[_0x5a5561(0x43e)]);},Game_Temp[_0x5d57ff(0x5cf)][_0x5d57ff(0x704)]=function(){const _0x3d3415=_0x5d57ff;this[_0x3d3415(0x7af)]=[],this['_fauxAnimationQueue']=[],this[_0x3d3415(0x578)]=[],this['_balloonQueue']=[];},VisuMZ[_0x5d57ff(0x909)]['Scene_Base_terminateAnimationClearBugFix']=Scene_Base['prototype'][_0x5d57ff(0x6c3)],Scene_Base['prototype'][_0x5d57ff(0x6c3)]=function(){const _0x1f0816=_0x5d57ff;if($gameTemp)$gameTemp[_0x1f0816(0x704)]();VisuMZ[_0x1f0816(0x909)][_0x1f0816(0x819)][_0x1f0816(0x3dd)](this);},Bitmap[_0x5d57ff(0x5cf)]['measureTextWidthNoRounding']=function(_0x25255f){const _0x45d5c0=_0x5d57ff,_0x74824b=this['context'];_0x74824b[_0x45d5c0(0x18c)](),_0x74824b['font']=this['_makeFontNameText']();const _0x989e61=_0x74824b[_0x45d5c0(0x213)](_0x25255f)['width'];return _0x74824b[_0x45d5c0(0x878)](),_0x989e61;},Window_Message['prototype'][_0x5d57ff(0x55b)]=function(_0x2bf66b){const _0x442476=_0x5d57ff;if(this[_0x442476(0x33c)]()){if('hUjpn'!==_0x442476(0x6f8))this[_0x442476(0x5a5)]();else return this['contents'][_0x442476(0x28e)](_0x2bf66b);}else{if(_0x442476(0x7d1)===_0x442476(0x7d1))return Window_Base['prototype'][_0x442476(0x55b)]['call'](this,_0x2bf66b);else{const _0x5e2bc0=_0x4fceeb['eventsXyNt'](_0x51b26b,_0x124dd9)[_0x442476(0x552)](_0x470a6e=>_0x470a6e[_0x442476(0x72d)]());return _0x5e2bc0[_0x442476(0x929)]>0x0;}}},Window_Message['prototype']['useFontWidthFix']=function(){const _0x485901=_0x5d57ff;return VisuMZ[_0x485901(0x909)]['Settings'][_0x485901(0x1d2)][_0x485901(0x7f7)]??!![];},VisuMZ[_0x5d57ff(0x909)]['Game_Action_numRepeats']=Game_Action[_0x5d57ff(0x5cf)][_0x5d57ff(0x334)],Game_Action[_0x5d57ff(0x5cf)][_0x5d57ff(0x334)]=function(){const _0x16ffa7=_0x5d57ff;return this[_0x16ffa7(0x287)]()?VisuMZ['CoreEngine'][_0x16ffa7(0x857)]['call'](this):0x0;},VisuMZ[_0x5d57ff(0x909)][_0x5d57ff(0x31b)]=Game_Action[_0x5d57ff(0x5cf)][_0x5d57ff(0x467)],Game_Action[_0x5d57ff(0x5cf)][_0x5d57ff(0x467)]=function(){const _0x11fc54=_0x5d57ff;if(this[_0x11fc54(0x202)]()&&this[_0x11fc54(0x202)]()[_0x11fc54(0x354)]())VisuMZ['CoreEngine'][_0x11fc54(0x31b)]['call'](this);else{if(_0x11fc54(0x233)==='NiHsH'){const _0x1952bb=_0x434646(this[_0x11fc54(0x8bb)][_0x11fc54(0x7e4)]),_0x203a06=this[_0x11fc54(0x1f7)](_0x1952bb);_0x203a06&&(_0x203a06[_0x11fc54(0x65c)]!==''||_0x203a06['BgFilename2']!=='')&&(this[_0x11fc54(0x1bd)]=new _0x3884a4(_0x2e6072['loadTitle1'](_0x203a06[_0x11fc54(0x65c)])),this[_0x11fc54(0x383)]=new _0x3a0b10(_0x5dc7fd['loadTitle2'](_0x203a06[_0x11fc54(0x584)])),this[_0x11fc54(0x43b)](this[_0x11fc54(0x1bd)]),this[_0x11fc54(0x43b)](this[_0x11fc54(0x383)]),this[_0x11fc54(0x1bd)]['bitmap'][_0x11fc54(0x651)](this[_0x11fc54(0x7ee)]['bind'](this,this[_0x11fc54(0x1bd)])),this['_backSprite2']['bitmap'][_0x11fc54(0x651)](this[_0x11fc54(0x7ee)][_0x11fc54(0x487)](this,this[_0x11fc54(0x383)])));}else this['clear']();}},Sprite_Name[_0x5d57ff(0x5cf)][_0x5d57ff(0x4b7)]=function(){return 0x24;},Sprite_Name['prototype'][_0x5d57ff(0x23c)]=function(){const _0x418d01=_0x5d57ff,_0x175f31=this[_0x418d01(0x7e4)](),_0x152115=this[_0x418d01(0x365)](),_0x5a92fe=this['bitmapHeight']();this['setupFont'](),this[_0x418d01(0x351)][_0x418d01(0x4a2)](),this[_0x418d01(0x351)]['drawTextTopAligned'](_0x175f31,0x0,0x0,_0x152115,_0x5a92fe,_0x418d01(0x60d));},Bitmap[_0x5d57ff(0x5cf)][_0x5d57ff(0x9b5)]=function(_0x17be2d,_0x248bc0,_0x3d7765,_0x531f66,_0x4b9f4c,_0x3c1ef6){const _0x27271d=_0x5d57ff,_0xd66590=this[_0x27271d(0x182)],_0x3d6e66=_0xd66590[_0x27271d(0x2cb)];_0x531f66=_0x531f66||0xffffffff;let _0x55cbc2=_0x248bc0,_0x228c05=Math[_0x27271d(0x746)](_0x3d7765+0x18/0x2+this[_0x27271d(0x48e)]*0.35);_0x3c1ef6==='center'&&(_0x55cbc2+=_0x531f66/0x2),_0x3c1ef6===_0x27271d(0x24a)&&(_0x55cbc2+=_0x531f66),_0xd66590['save'](),_0xd66590[_0x27271d(0x3c7)]=this['_makeFontNameText'](),_0xd66590[_0x27271d(0x493)]=_0x3c1ef6,_0xd66590[_0x27271d(0x788)]=_0x27271d(0x7fc),_0xd66590[_0x27271d(0x2cb)]=0x1,this[_0x27271d(0x5b1)](_0x17be2d,_0x55cbc2,_0x228c05,_0x531f66),_0xd66590['globalAlpha']=_0x3d6e66,this[_0x27271d(0x82a)](_0x17be2d,_0x55cbc2,_0x228c05,_0x531f66),_0xd66590['restore'](),this[_0x27271d(0x935)][_0x27271d(0x74d)]();},VisuMZ['CoreEngine'][_0x5d57ff(0x484)]=BattleManager[_0x5d57ff(0x22c)],BattleManager[_0x5d57ff(0x22c)]=function(_0x5984dc){const _0xc2a106=_0x5d57ff;if(this['_action']['isForFriend']())return![];return VisuMZ[_0xc2a106(0x909)][_0xc2a106(0x484)][_0xc2a106(0x3dd)](this,_0x5984dc);},BattleManager[_0x5d57ff(0x9be)]=function(){const _0x42295e=_0x5d57ff;if(this[_0x42295e(0x338)])this[_0x42295e(0x631)][_0x42295e(0x9be)](this[_0x42295e(0x338)]);this[_0x42295e(0x885)]=_0x42295e(0x2cd),this[_0x42295e(0x338)]&&this['_subject'][_0x42295e(0x3d0)]()===0x0&&(_0x42295e(0x253)===_0x42295e(0x865)?_0x4e1466[_0x42295e(0x909)]['Settings']['UI'][_0x42295e(0x23a)]&&(this[_0x42295e(0x69e)]=_0x4ada66):(this['endBattlerActions'](this[_0x42295e(0x338)]),this[_0x42295e(0x338)]=null));};function _0x3ae4(){const _0x893097=['ActorBgType','pVdvX','OpenConsole','ATK','Graphics_printError','Max','Window_NameInput_cursorLeft','exportAllTroopStrings','VisuMZ\x20CoreEngine\x20PictureIcon\x20%1\x20%2','aJYaw','_mirror','_goldWindow','playLoad','initCoreEasing','CoreEngine','initCoreEngineScreenShake','Export\x20Map\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)','_scene','iconHeight','WASD','ZbGWn','processKeyboardDelete','mbTbt','64XqCUhe','currentExp','Scene_Boot_startNormalGame','Window_Selectable_processTouch','vKFTd','setBackgroundOpacity','JUNJA','_sellWindow','PIPE','_maxDigits','setCommonEvent','Window_Gold_refresh','setMute','QjwZC','IewQV','iVjGT','_digitGroupingEx','GoldOverlap','%1/','updatePlayTestF7','charCode','showPointAnimations','_spriteset','length','_cacheScaleX','NEAREST','setWindowPadding','blockWidth','innerHeight','targetScaleX','X:\x20%1','UFedM','isFullDocumentTitle','darwin','disable','_baseTexture','_stored_crisisColor','parseForcedGameTroopSettingsCoreEngine','PRINT','targetObjects','UpdatePictureCoordinates','mapId','animations','_skillTypeWindow','Window_NameInput_processTouch','shift','FunctionName','cTtPK','canEquip','INOUTQUINT','DATABASE','SkillTypeBgType','DigitGroupingExText','isPressed','transform','BTB','zoCyW','CAPSLOCK','MAXMP','createDigits','NEzxG','SParamVocab7','Sprite_Battler_startMove','XParamVocab2','bgmVolume','_stored_mpGaugeColor1','playCursorSound','KEEP','drawCurrencyValue','note','WIN_OEM_CLEAR','RQCFo','SystemSetSideView','JaLki','SystemLoadAudio','EISU','STENCIL_TEST','areButtonsHidden','WIN_OEM_AUTO','width','EditRect','faces','XriiU','_centerElementCoreEngine','AllTroops','MCR','helpAreaBottom','TbaHU','loadIconBitmap','ColorMPGauge2','IconSet','CIRCUMFLEX','VisuMZ_2_BattleSystemOTB','level','_stored_mpGaugeColor2','qPRkL','KIjiE','WIN_OEM_PA3','Game_Interpreter_updateWaitMode','wlDTJ','_shakeDuration','RowSpacing','isSpecialCode','vcZij','ColorGaugeBack','createPointAnimationTargets','onNameOk','vAWPM','evade','itemEva','clearStencil','Actor','setValue','Scene_Battle_createCancelButton','XParamVocab1','DataManager_setupNewGame','MDR','parse','isWindowMaskingEnabled','hide','SParamVocab4','FIfZj','pendingColor','powerUpColor','setClickHandler','_clickHandler','Window','Control\x20Variables\x20Script\x20Error','VMhWo','COLON','normalColor','Graphics','Symbol','_lastOrigin','IconXParam5','editWindowRect','Window_Base_drawCharacter','_pauseSignSprite','_stored_expGaugeColor2','bomPj','exec','nircb','ExtractStrFromTroop','currentLevelExp','_coreEngineShakeStyle','Window_NameInput_cursorPagedown','ebuUX','_forcedBattleSys','processTouch','isMVAnimation','xparamPlusJS','Power','coreEngineRepositionEnemies','Game_Event_start','_defaultStretchMode','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','MAXHP','consumable','xparamFlatBonus','ButtonHeight','determineSideButtonLayoutValid','pnrln','getBattleSystem','drawTextTopAligned','process_VisuMZ_CoreEngine_RegExp','STR','QHiGc','BLmdN','ParamMax','resetBattleSystem','zvPcq','VXiue','endAction','crisisColor','ATTN','ConvertParams','CommandBgType','ExportStrFromAllTroops','statusEquipWindowRect','createCommandWindow','_width','keyCode','oKnhJ','Bitmap_resize','floor','StartID','TPB\x20ACTIVE','《《《\x20Event\x20%1:\x20%2,\x20Page\x20%3\x20》》》\x0a%4\x0a','_inputString','_stored_tpGaugeColor1','Scene_Base_terminate','stencilOp','fYKqV','OS_KEY','keyboard','Duration','Unnamed','addOnceParallelInterpreter','isSceneMap','Bitmap_drawCircle','getLevel','eva','clamp','XSGwO','INOUTSINE','_closing','Scene_Battle_createSpritesetFix','ColorCTGauge2','MxJtj','Scene_Title_drawGameTitle','_editWindow','faceHeight','gainSilentTp','F20','VisuMZ_2_BattleSystemETB','DimColor2','tCOGB','isSideView','startShake','onButtonImageLoad','qNmsY','playTestCtrlT','HelpRect','〘Common\x20Event\x20%1:\x20%2〙\x20Start','context','key%1','successRate','Param','WIN_OEM_JUMP','ShopMenu','getLastUsedGamepadType','mute','bKNUn','categoryWindowRect','save','Vngsx','default','KeySHIFT','CategoryBgType','TlSNQ','IycTq','LineHeight','Game_Interpreter_command355','SceneManager_onKeyDown','BTestArmors','Xbknm','tpColor','pjrlS','DGQak','calcEasing','LATIN1','drawText','filterArea','paramY','MenuBg','adjustPictureAntiZoom','_backgroundFilter','TBMxV','cursorPagedown','TgTmE','retrievePointAnimation','_commonEventLayers','paramFlat','smallParamFontSize','DECIMAL','Tilemap_addShadow','IgKoK','TextStr','wsxOp','qWVPD','INOUTELASTIC','createPageButtons','Scene_Name_onInputOk','createWindowLayer','OUTQUART','maxLvGaugeColor2','META','_opening','LaPTx','IconXParam4','Map%1','itemSuccessRate','ListRect','_backSprite1','text%1','Window_Selectable_itemRect','catchLoadError','_onKeyDown','dashToggle','Sprite_Animation_setViewport','nw.gui','paramRateJS','sparamFlat2','buttons','MODECHANGE','isActiveTpb','_actorWindow','children','makeTargetSprites','INOUTEXPO','buyWindowRect','center','2ScHUtO','Scene_Battle_update','QoL','EncounterRateMinimum','Armor-%1-%2','VOLUME_DOWN','_isButtonHidden','HRG','STB','ButtonAssist','Bitmap_initialize','areButtonsOutsideMainUI','ARRAYJSON','_pictureCoordinatesMode','NHlft','ESC','onInputBannedWords','INCUBIC','push','_stored_expGaugeColor1','EqCuN','setGuard','RepositionEnemies130','Bitmap_drawTextOutline','AMPERSAND','isPlaying','%2%1%3','LEFT','isMenuButtonAssistEnabled','wholeDuration','qUBWJ','NoTileShadows','OUTSINE','PLUS','processPointAnimationRequests','_upArrowSprite','updateMove','90FroFEB','RYzVw','getCustomBackgroundSettings','xparamPlus1','COMMA','VisuMZ_1_BattleCore','pagedownShowButton','AnimationPoint','contentsBack','expGaugeColor1','SceneManager_isGameActive','_context','showPicture','subject','NUMPAD1','aEQns','Scene_MenuBase_mainAreaTop','visible','_refreshPauseSign','process_VisuMZ_CoreEngine_ControllerButtons','wOVbe','format','processKeyboardDigitChange','setBackgroundType','FsJBi','Untitled','destroyed','ZOOM','Gold','SwitchRandomizeRange','measureText','smoothSelect','mhp','changeTextColor','setCoreEngineUpdateWindowBg','NewGameCommonEventAll','EQUALS','yScrollLinkedOffset','OUTEXPO','Game_Actor_paramBase','Mirror','yKHyC','XEPdx','StatusEquipRect','EVAL','PictureID','_moveEasingType','_scaleY','_destroyInternalTextures','aaHRH','Key%1','_currentMap','isMagical','processTouchModernControls','YRAKd','checkSubstitute','playTestF6','YPQSx','NwFTQ','removeChild','ColorHPGauge1','Basic','yCTfo','Window_ShopSell_isEnabled','mpGaugeColor2','INSINE','IconSParam6','setMoveEasingType','TPB\x20WAIT','SideButtons','AjYIn','redraw','NUMPAD4','_baseSprite','iIqea','fadeSpeed','bcWzi','ShowItemBackground','status','loadBitmap','makeDocumentTitle','Window_NameInput_cursorDown','mUtrZ','processBack','Input_update','right','VisuMZ_2_BattleSystemBTB','ONE','aOBMG','dlezT','tilesets','inputWindowRect','〘Common\x20Event\x20%1:\x20%2〙\x20End','F12','xBafb','TUJve','initButtonHidden','Input_shouldPreventDefault','Scene_Options_create','adjustBoxSize','IconParam1','itemRect','F15','originalJS','SubfolderParse','optionsWindowRect','ARRAYSTRUCT','TranslucentOpacity','param','SParamVocab2','Input_onKeyDown','PictureFilename','removePointAnimation','HelpBgType','Graphics_centerElement','createSpriteset','numberShowButton','Version','_cancelButton','itypeId','onClick','position','SmartEventCollisionPriority','isNumpadPressed','kAXXW','Scene_Map_createSpriteset_detach','actorWindowRect','INEXPO','openURL','touchUI','remove','_pressed','AnimationID','F16','_backSprite','MWemn','LgPsk','%1\x0a','F23','_categoryWindow','Title','isClosed','setCoreEngineScreenShakeStyle','updatePositionCoreEngineShakeRand','PRINTSCREEN','hit','item','IconXParam9','Scene_Map_createSpriteset','TRAIT_PARAM','dyYgI','sparamPlusJS','version','measureTextWidthNoRounding','_offsetX','calcCoreEasing','requestMotion','Item-%1-%2','outlineColorGauge','windowRect','IconXParam2','uAtvK','drawIconBySize','ColorManager_loadWindowskin','Total','HOME','_height','tlzfq','erasePicture','xparamFlat2','ZASfZ','updateShadow','sparamRate','Window_Selectable_processCursorMove','IconParam5','Input_clear','open','RPGMAKER_VERSION','Game_Map_setup','parallaxes','deselect','process_VisuMZ_CoreEngine_Settings','CRI','vYRgG','_stored_ctGaugeColor2','Scene_Equip_create','buttonAssistKey1','mbWDa','xparamFlatJS','Game_Temp_initialize','createBackground','kNisN','SaveMenu','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','ASTERISK','ColorTPGauge1','ZamKR','NgHlK','initDigitGrouping','charAt','isAlive','Sprite_Gauge_gaugeRate','rtqFJ','kCJGj','Type','buttonAssistOffset5','encounterStep','isNwjs','Game_BattlerBase_initMembers','evaded','beCdq','MIN_SAFE_INTEGER','hhKzF','MultiKeyFmt','globalAlpha','requestFauxAnimation','turn','randomJS','LoadMenu','_screenX','getControllerInputButtonString','createPointAnimation','showDevTools','IZYIp','Smooth','%1〘Choice\x20Cancel〙%1','IconSParam5','IMueE','erPAm','KPaKz','Scene_MenuBase_createPageButtons','dimColor2','SkillTypeRect','slotWindowRect','ScreenShake','KeyboardInput','_windowLayer','anchor','create','SEMICOLON','〖〖〖\x20Map\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a','PAUSE','TWhHn','log','moYsH','Y:\x20%1','ColorDeath','img/%1/','\x5c}❪SHIFT❫\x5c{','_targetOffsetY','_actor','_smooth','Troop%1','_active','_cacheScaleY','toString','setViewportCoreEngineFix','EnableMasking','EXbrS','xparamRateJS','pictures','skillId','measureTextWidth','KWZov','paramRate','focus','BattleManager_update','setupNewGame','Bitmap_strokeRect','drawCircle','textColor','SCALE_MODES','ApplyEasing','GoldIcon','ARRAYNUM','outlineColor','isFauxAnimationPlaying','LESS_THAN','TRG','Sprite_Gauge_currentValue','removeAllPointAnimations','Scene_Map_initialize','_list','alwaysDash','select','updateMainMultiply','valueOutlineColor','fSeBT','ARRAYEVAL','drawGameVersion','height','TextFmt','makeActionList','OUTBOUNCE','Game_Action_setAttack','$dataMap','ActorRect','params','overrideMimeType','cMTuA','ULqBM','TOiis','OpenURL','Scene_Boot_updateDocumentTitle','hpGaugeColor2','wMOMK','SLEEP','buttonAssistText%1','SEPARATOR','DefaultMode','Wait','endAnimation','wait','RWwCB','getCombinedScrollingText','fiXOW','_screenY','yddbD','mainFontSize','numRepeats','setFrame','string','BackOpacity','_subject','updatePositionCoreEngine','moveRelativeToResolutionChange','_backgroundSprite','useFontWidthFix','isUseModernControls','getKeyboardInputButtonString','_hp','atbActive','Scene_Boot_onDatabaseLoaded','command122','updateCurrentEvent','zEzRK','refresh','McKto','mpGaugeColor1','faceWidth','IconParam3','ControllerMatches','setActorHome','targetY','_pointAnimationSprites','sparamFlatJS','operation','playEscape','bitmap','end','updatePosition','canAttack','Game_Picture_calcEasing','drawValue','commandWindowRect','IconParam6','setViewport','kCYer','_onceParallelInterpreters','SHIFT','_buttonAssistWindow','CustomParamAbb','Sprite_destroy','_lastGamepad','Exported_Script_%1.txt','MAT','tileWidth','》Comment《\x0a%1\x0a','bitmapWidth','setBattleSystem','KeyTAB','drawCharacter','targetSpritePosition','CDVEw','animationBaseDelay','xwJoR','_paramPlus','OUTELASTIC','ItemHeight','_colorCache','drawIcon','switchModes','ZpBMy','qeQtk','return\x200','XParamVocab7','createCancelButton','uLVCs','substring','Sprite_AnimationMV_updatePosition','drawActorClass','_stored_maxLvGaugeColor2','SeOPA','ShowDevTools','_listWindow','platform','OGIgn','ModernControls','_backSprite2','defineProperty','_helpWindow','_troopId','isOpenAndActive','drawGameTitle','enable','ZHEAE','sparamRateJS','OupfD','_effectsContainer','EquipMenu','pBMMV','GameEnd','active','〘Show\x20Text〙\x0a','SystemLoadImages','DetachBattlePictureContainer','LSYGu','ENTER_SPECIAL','isRightInputMode','Window_NameInput_cursorPageup','goto','StatusMenu','(\x5cd+)([%％])>','expRate','mainAreaBottom','titleCommandWindow','drawSegment','picture','setActorHomeRepositioned','RBqhR','Input_pollGamepads','REPLACE','_blank','Game_Screen_initialize','INBACK','getInputMultiButtonStrings','_targets','_index','fbFEb','processCursorMove','IQaZD','TAB','VqMaj','Scene_Shop_create','textHeight','NUMPAD8','(\x5cd+\x5c.?\x5cd+)>','buttonAssistOffset2','ColorCTGauge1','origin','processAlwaysEscape','isAnimationOffsetXMirrored','setLastPluginCommandInterpreter','command355','FJBaU','updateDashToggle','_playTestFastMode','sparamRate1','CeAyF','801216VGrJaQ','onXhrError','EQLcl','renderNoMask','ShortcutScripts','_customModified','maxItems','font','npmvo','iukZL','RukLO','%1〘End\x20Choice\x20Selection〙%1','flush','VOiem','KkpIQ','\x5c}❪TAB❫\x5c{','numActions','WIN_OEM_ENLW','ZacCL','Settings','171629IvRyVp','processCursorHomeEndTrigger','ActorMPColor','Window_Base_drawIcon','_stored_deathColor','ScaleX','drawParamText','ParseSkillNotetags','Game_Picture_show','call','expParams','outlineColorDmg','_commandList','hideButtonFromView','hSajQ','OutlineColorDmg','Scene_Menu_create','initMembers','isTpb','paramMaxJS','Window_Base_createTextState','setActionState','drawActorLevel','SParamVocab9','ControllerButtons','Game_Action_updateLastTarget','WIN_ICO_CLEAR','xparam','_targetScaleX','END','performEscape','FUNC','BVcWx','PositionJS','jqGcC','ANlOa','SlotBgType','GoldChange','SUBTRACT','aWJXG','ParseStateNotetags','WIN_OEM_FJ_ROYA','updateDocumentTitle','MEeUz','_digitGrouping','storeMapData','gaugeBackColor','getCoreEngineScreenShakeStyle','uiaxI','option','buttonAssistText5','PTB','needsUpdate','SbvAc','cnTBm','type','pages','CommandRect','jCMQk','updatePictureAntiZoom','buttonY','setupButtonImage','LevelUpFullHp','bQtHd','updateOpacity','rovmG','lineHeight','_rate','createTitleButtons','ColorPowerUp','bGQWG','_hovered','INOUTBOUNCE','WARNING:\x20%1\x20has\x20already\x20been\x20declared\x0aand\x20cannot\x20be\x20used\x20as\x20a\x20Quick\x20JS\x20Function','result','TjtgY','isCursorMovable','QSxjn','Bitmap_fillRect','Window_NameInput_initialize','jjubn','_hideTileShadows','FBTmr','toLowerCase','_fauxAnimationQueue','makeCoreEngineCommandList','playOnceParallelInterpreter','SELECT','updateTransform','data/','_shouldPreventDefault','sparamPlus2','SystemSetBattleSystem','stringKeyMap','updateLastTarget','setAction','mainAreaTopSideButtonLayout','battlerHue','WYbrU','pgRjF','iconWidth','ExtractStrFromList','jACMX','addChild','QwertyLayout','ParseActorNotetags','_colorTone','MainMenu','backspace','Window_MapName_refresh','centerSprite','JRiET','UNDERSCORE','strokeRect','pAiaU','drawBackground','SystemSetFontSize','Spriteset_Base_update','min','itemBackColor2','BTestWeapons','ConvertNumberToString','_forcedTroopView','isKeyItem','actor','animationNextDelay','contents','snapForBackground','PbOOs','show','consumeItem','OUTCUBIC','titles1','OsIoO','DummyRect','targetBackOpacity','Sprite_Picture_updateOrigin','showFauxAnimations','kHiPF','outbounce','_inputWindow','pointX','Bitmap_gradientFillRect','isMapScrollLinked','fTnzW','processKeyboardHandling','DETACH_PICTURE_CONTAINER','setAttack','PERCENT','_fauxAnimationSprites','_playtestF7Looping','CTRL','FTB','INSERT','targetOpacity','_stored_mpCostColor','replace','UASqb','escape','_scaleX','IpiZq','mpCostColor','seVolume','cursorUp','_slotWindow','makeCommandList','ZsmEk','DEF','equips','startAutoNewGame','isTriggered','updateKeyText','HwSvp','clearOnceParallelInterpreters','KeyUnlisted','INOUTCUBIC','BattleManager_checkSubstitute','URL','number','bind','Vwyxi','onEscapeSuccess','isCancelled','contains','markCoreEngineModified','Game_BattlerBase_refresh','fontSize','Game_Picture_y','tgdKO','SPACE','isPhysical','textAlign','itemLineRect','ExportAllMapText','stypeId','ImgLoad','ptSyE','qoIBq','useDigitGrouping','NumberBgType','members','ParamChange','applyCoreEasing','_optionsWindow','jyhkC','normal','clear','MRF','IconSParam0','fillStyle','_battlerName','process_VisuMZ_CoreEngine_jsQuickFunctions','playBuzzer','SlotRect','advanced','random','IconSParam4','updateData','fillRect','oqyUh','home','Subtitle','onInputOk','BIPYM','riZTp','getInputButtonString','sparamFlatBonus','bitmapHeight','_realScale','_itemWindow','hpGaugeColor1','pageup','MRG','Spriteset_Base_initialize','_anchor','IconXParam0','aJxwN','_animation','buttonAssistText4','TextManager_param','_cache','targetEvaRate','CfuPZ','SwitchRandomizeOne','processKeyboardHome','processFauxAnimationRequests','BHDCo','createDimmerSprite','EnableNumberInput','F21','yAhPF','requiredWtypeId1','repositionEnemiesByResolution','initialize','QgUHZ','WIN_OEM_PA2','PRESERVCONVERSION(%1)','SceneManager_initialize','FDR','_movementDuration','_onKeyPress','Game_Interpreter_command105','WIN_OEM_FINISH','GetParamIcon','isGamepadTriggered','BottomButtons','xparamRate2','OTpmk','statusWindowRect','Window_Base_drawFace','Game_Action_itemHit','damageColor','BlRUg','clearZoom','moveMenuButtonSideButtonLayout','Renderer','ExportCurMapText','randomInt','BuyBgType','OAhNf','hYgMc','isCollidedWithEvents','_stored_powerUpColor','ColorMPGauge1','IconSParam8','NumberRect','OBHHA','_changingClass','App','OptionsMenu','XadAZ','playOk','pagedown','Speed','OUTQUINT','makeDeepCopy','_statusParamsWindow','Game_Picture_initBasic','Window_NameInput_cursorUp','_drawTextShadow','EnBhU','LAGrB','_number','vhCVZ','translucentOpacity','Map%1.json','exCgP','EViaF','itemPadding','JShPB','HASH','catchUnknownError','title','NONCONVERT','ValueJS','WIN_OEM_FJ_JISHO','toFixed','Chance','oFvsT','_repositioned','setSideButtonLayout','Scene_Skill_create','responseText','_viewportSize','F22','_muteSound','SideView','Scene_GameEnd_createBackground','Spriteset_Base_isAnimationPlaying','clone','Input_setupEventHandlers','ACCEPT','bNEPG','MAX_GL_TEXTURES','itemHit','MULTIPLY','loadSystemImages','etypeId','IconXParam3','STRUCT','shmoh','PictureEasingType','checkCacheKey','200295clshii','zTdVX','_refreshArrows','DisplayedParams','buttonAssistSwitch','ButtonFadeSpeed','Window_EquipItem_isEnabled','helpAreaHeight','mmp','setup','reduce','_internalTextures','initialBattleSystem','_targetY','IconParam0','ColorCrisis','traitObjects','ScreenResolution','CategoryRect','BaseTexture','process_VisuMZ_CoreEngine_Notetags','KeyItemProtect','LSsMp','ExportString','destroy','_mapNameWindow','NUM_LOCK','FhTZf','LZJMM','inBattle','sparamPlus1','MapOnceParallel','LINEAR','ItemRect','NewGameBoot','_mainSprite','createButtonAssistWindow','scaleSprite','PsBku','filter','updateFauxAnimations','drawGoldItemStyle','DrawItemBackgroundJS','isSideButtonLayout','events','INOUTQUAD','_pictureContainer','_stored_hpGaugeColor2','textWidth','_targetAnchor','EXECUTE','pijfR','meVolume','FzcUP','ExtJS','WrCWz','Bitmap_measureTextWidth','isBottomHelpMode','blendFunc','missed','DocumentTitleFmt','maxCols','【%1】\x0a','updateOnceParallelInterpreters','Nqkkd','openingSpeed','GpoYr','vHyHb','PositionX','Show\x20Scrolling\x20Text\x20Script\x20Error','GREATER_THAN','ColorSystem','CKiDT','cursorRight','Game_Picture_updateMove','Keyboard','Window_Selectable_cursorUp','_pointAnimationQueue','BACKSPACE','drawBackgroundRect','cXqYT','onKeyDownKeysF6F7','VisuMZ_2_BattleSystemPTB','playTestF7','SoXKZ','clearRect','windowOpacity','ListBgType','YayVQ','BgFilename2','forceOutOfPlaytest','rgba(0,\x200,\x200,\x200.7)','processHandling','abs','requestPointAnimation','getBackgroundOpacity','TextCodeClassNames','TSecs','resize','mEpTE','TimeProgress','CTB','HIT','aPKyQ','displayX','currentClass','VisuMZ_1_OptionsCore','getColor','AutoStretch','areTileShadowsHidden','_statusEquipWindow','filters','initialLevel','_clientArea','ParseArmorNotetags','deflate','ONE_MINUS_SRC_ALPHA','RCiCS','IcRMD','createPointAnimationSprite','vmgjA','command105','repositionCancelButtonSideButtonLayout','mnlGf','buttonAssistKey2','PHA','createChildSprite','BlurFilter','_lastY','button','gPjYI','_hideButtons','jsQuickFunc','operand','_drawTextOutline','jSZRL','attackSkillId','PGDN','\x0a\x0a\x0a\x0a\x0a','registerCommand','join','paramBase','dUMER','ALT','asin','statusParamsWindowRect','SParamVocab1','BACK_SLASH','alignBottom','Bitmap_blt','436807YQwbTb','buttonAssistCancel','targetPosition','lJziU','KnPWR','_stored_gaugeBackColor','LoadError','_pageupButton','ColorTPGauge2','_opacity','fZuJk','setHome','updatePositionCoreEngineShakeHorz','skipBranch','prototype','Abbreviation','XParamVocab0','ExtractStrFromMap','getLastPluginCommandInterpreter','FontSmoothing','sellWindowRect','QquPk','characters','Window_NumberInput_processDigitChange','addEventListener','helpWindowRect','getPointAnimationLayer','playCursor','NJouB','EXSEL','innerWidth','NUMPAD6','F6key','_createInternalTextures','enableDigitGrouping','get','buttonAssistKey%1','targetScaleY','tab','subtitle','updatePictureCoordinates','isEventRunning','iwLKg','_mode','zqSwI','ShowButtons','IconParam4','Spriteset_Base_updatePosition','subjectHitRate','BVNWR','sIFja','Color','CLOSE_PAREN','WIN_OEM_WSCTRL','IwGvr','Window_StatusBase_drawActorSimpleStatus','AntiZoomPictures','StatusRect','onKeyDown','CRSEL','INQUINT','nickname','OwSTb','NWlba','catchNormalError','test','uiAreaHeight','layoutSettings','createEnemies','_shakeSpeed','_pictureCoordinatesWindow','targetContentsOpacity','playCancel','Window_Selectable_drawBackgroundRect','drawActorSimpleStatus','Sprite_Actor_setActorHome','left','BoxMargin','ForceNoPlayTest','buttonAssistText1','Script\x20Call\x20Error','GPYcE','DsTZg','paramFlatJS','isEnabled','makeFontSmaller','LTOPu','SParamVocab0','gZVZc','sin','CONTEXT_MENU','WIN_OEM_FJ_LOYA','mainCommandWidth','Scene_Item_create','FontShadows','updateMotion','isTouchedInsideFrame','VisuMZ_2_BattleSystemCTB','fromCharCode','paramValueByName','onload','Scene_Base_create','loadSystem','Sprite_Button_updateOpacity','\x20Origin:\x20%1','onDatabaseLoaded','RbncO','isGamepadButtonPressed','startAnimation','maxBattleMembers','Window_Selectable_cursorDown','Rate','_logWindow','Game_Picture_move','dropItems','OpenSpeed','paramFlatBonus','nextLevelExp','CustomParamType','isArrowPressed','_shakePower','WppnO','INOUTCIRC','kzKFn','cos','isRepeated','paramchangeTextColor','RegExp','SwitchActorText','sqrt','split','CustomParamIcons','createMenuButton','mirror','lDjen','gaugeRate','clearCachedKeys','XParamVocab9','Plus2','isGamepadConnected','IconXParam6','tileHeight','Scene_MenuBase_helpAreaTop','_stored_systemColor','addLoadListener','aNIwv','ParseEnemyNotetags','bRFnB','ParseWeaponNotetags','stretch','encounterStepsMinimum','toUpperCase','helpAreaTop','currencyUnit','_duration','BgFilename1','VisuMZ_2_BattleSystemSTB','Layer','targetX','ItemBackColor2','Scene_Unlisted','createCustomBackgroundImages','opacity','BasicParameterFormula','numberWindowRect','<%1\x20%2:[\x20]','Scene_Map_createSpritesetFix','xparamFlat1','OUTCIRC','code','keypress','setupValueFont','HYlxj','en-US','setAnchor','TitlePicButtons','offsetX','scale','down2','%1:\x20Exit\x20','paramX','Window_NumberInput_start','_isPlaytest','365635JqoPmH','_coreEasingType','KANA','ceil','Sprite_AnimationMV_processTimingData','BannedWords','Location','buttonAssistKey4','axes','DimColor1','igdAV','〖〖〖\x20Troop\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a','TextJS','fillText','_isWindow','DDUEh','PixelateImageRendering','IconSParam9','Rate1','lkKqb','Plus1','IconParam2','PDR','learnings','AGI','EnableNameInput','DigitGroupingDamageSprites','cPTce','svlXZ','maxLevel','euPJW','index','toLocaleString','getLastGamepadUsed','createPointAnimationQueue','process_VisuMZ_CoreEngine_CustomParameters','ALTGR','Sprite_Picture_loadBitmap','_sideButtonLayout','ColorPowerDown','isMaxLevel','Scene_MenuBase_mainAreaHeight','ShowActorLevel','buttonAssistText2','maxLvGaugeColor1','KXPiO','ParseAllNotetags','ActorTPColor','Padding','Scene_Battle_createSpriteset','StatusEquipBgType','isOpen','tkhtK','nBiAg','Scene_Name_create','Enable','CayEA','paramPlusJS','setTargetAnchor','_dimmerSprite','ivUsD','evaluate','259512jSboka','buttonAssistOffset4','mFIgn','apply','moveCancelButtonSideButtonLayout','drawNewParam','optSideView','createFauxAnimation','KrVKD','drawGameSubtitle','CANCEL','worldTransform','titles2','terminate','list','ParseClassNotetags','paramMax','Upper\x20Left','FINAL','Sprite_Animation_processSoundTimings','gaugeLineHeight','pOOcp','CreateBattleSystemID','DummyBgType','Sprite_Button_initialize','wEhsn','description','CommandList','down','changeClass','rQkCa','_statusWindow','ziZCd','catchException','updateScene','Class-%1-%2','UmdMB','Window_NameInput_cursorRight','writeText','1.3.0','RqKFs','cnHmQ','isItem','ItemPadding','boxHeight','contentsOpacity','Enemy-%1-%2','createCustomParameter','createTroopNote','isPointAnimationPlaying','DigitGroupingLocale','updatePadding','isGamepadAxisMoved','ColorMaxLvGauge1','_pictureName','gradientFillRect','oRGaL','sparam','IconSParam1','qpMkW','cancel','jHxYq','doesNameContainBannedWords','XParamVocab3','MAX_SAFE_INTEGER','updatePositionCoreEngineShakeVert','hUjpn','Origin','drawParamName','cQBHO','RIGHT','Scene_Map_createMenuButton','getColorDataFromPluginParameters','_targetOpacity','rgba(0,\x200,\x200,\x201.0)','CustomParamNames','RepositionActors','VOLUME_UP','sceneTerminationClearEffects','xfzaw','horzJS','RightMenus','qfnov','F7key','DHPxb','Bitmap_drawText','CommandWidth','Scene_Status_create','F14','ColorMaxLvGauge2','VariableEvalReference','_data','HELP','clipboard','vertJS','OnLoadJS','RevertPreserveNumbers','dQBAU','GroupDigits','Vjcaw','EVA','integer','isSmartEventCollisionOn','Game_Event_isCollidedWithEvents','uYPax','IconSParam2','ADD','isAnimationForEach','ncBWI','getGamepads','_menuButton','forceStencil','ZGKKJ','_coreEasing','initCoreEngine','ztPaV','EXR','CustomParam','nah','isNormalPriority','FontSize','oMBWy','gaugeHeight','Manual','isDying','mnpyu','MenuLayout','lVaTf','DZmYb','paramName','mainAreaHeight','helpAreaTopSideButtonLayout','ParamName','DashToggleR','gcjtb','commandWindowRows','Game_Troop_setup','concat','SLASH','paramPlus','Scene_Battle_createSpriteset_detach','OjzPV','Weapon-%1-%2','OTB','round','DebugConsoleLastControllerID','WIN_ICO_HELP','match','buttonAssistWindowButtonRect','sv_enemies','eventsXyNt','update','stencilFunc','scaleMode','defaultInputMode','updateCoreEasing','targets','_origin','createJsQuickFunction','render','systemColor','XParamVocab5','xbQGE','EnableJS','exportAllMapStrings','SellRect','_balloonQueue','uiAreaWidth','InputBgType','MDF','VtELt','retrieveFauxAnimation','duration','gold','backOpacity','loadTitle2','skillTypes','retreat','Flat1','WIN_ICO_00','Window_Base_drawText','setLastGamepadUsed','InputRect','top','GRD','drawTextEx','start','child_process','XParamVocab8','TILDE','INOUTBACK','QUESTION_MARK','ImprovedAccuracySystem','Skill-%1-%2','ezZoV','FadeSpeed','LqumD','isItemStyle','gameTitle','itemHitImprovedAccuracy','Window_NameInput_refresh','updateOrigin','FgSJU','menuShowButton','isNextScene','LoiIn','_downArrowSprite','xhWYY','lcxuX','Game_Character_processMoveCommand','textBaseline','command357','LUK','TFWcR','processCursorMoveModernControls','isInputting','ItemBackColor1','CommonEventID','F10','updateAnchor','jcSPF','gcvAE','usableSkills','add','sStkq','Input_updateGamepadState','animationId','padding','ParseItemNotetags','xZCnp','_pagedownButton','maxTp','text','_numberWindow','_stored_powerDownColor','xparamPlus','movePageButtonSideButtonLayout','XbBIa','setColorTone','isExpGaugeDrawn','pZvLl','bSKYF','trim','createFauxAnimationQueue','padZero','paramBaseAboveLevel99','setupCoreEasing','xScrollLinkedOffset','UTCcU','_animationQueue','writeFile','NUMPAD9','DlGot','hKLhL','Window_StatusBase_drawActorLevel','hVIRi','Game_Party_consumeItem','Game_Actor_levelUp','LyopO','wtypeId','applyForcedGameTroopSettingsCoreEngine','clearForcedGameTroopSettingsCoreEngine','buttonAssistWindowRect','MapNameTextCode','itemWindowRect','baseId','DefaultStyle','isBusy','1.4.4','Conditional\x20Branch\x20Script\x20Error','processKeyboardBackspace','updateWaitMode','_tempActor','_windowskin','tLLEJ','_updateGamepadState','xparamPlus2','DOWN','([\x5c+\x5c-]\x5cd+\x5c.?\x5cd+)>','buttonAreaHeight','AnimationMirrorOffset','sv_actors','PA1','CXtQT','paramWidth','textSizeEx','nYxQf','Game_System_initialize','UpsDA','_setupEventHandlers','INQUAD','ColorTPCost','_pollGamepads','PositionY','updateMain','Scene_Map_update','AllMaps','loadMapData','buttonAssistOffset3','repeat','WIN_OEM_FJ_MASSHOU','eHNbG','name','none','GoldBgType','LevelUpFullMp','qZuHR','pictureButtons','Game_Action_itemEva','reserveCommonEvent','batch','anchorCoreEasing','adjustSprite','mainAreaHeightSideButtonLayout','OPEN_PAREN','EditBgType','vertical','QPxvt','Zsjfu','makeFontBigger','Game_Picture_x','FontWidthFix','ItemBgType','Once\x20Parallel\x20for\x20Battle\x20requires\x20VisuMZ_1_BattleCore!','cursorDown','NUMPAD0','alphabetic','icfga','processKeyboardEnd','pow','Opacity','blt','_CoreEngineSettings','updateEffekseer','performMiss','ZERO','_dummyWindow','qkyje','isSceneBattle','terms','createFauxAnimationSprite','FOuGv','updatePositionCoreEngineShakeOriginal','LCGsn','OutlineColorGauge','_storedMapText','ARRAYSTR','_offsetY','zoIDa','KCrQX','YeswG','TGR','connected','loadTitle1','drawRightArrow','Scene_Base_terminateAnimationClearBugFix','Pixelated','windowPadding','setHandler','HYPHEN_MINUS','atypeId','ENTER','NameInputMessage','Name','runCombinedScrollingTextAsCode','IconIndex','_stored_pendingColor','ShowJS','move','map','BuyRect','F18','_drawTextBody','JnNNg','WIN_OEM_ATTN','offsetY','exp','pDheg','fvFLs','object','EQUAL','_movementWholeDuration','_gamepadWait','nXEIv','UEWcP','addWindow','EndingID','getButtonAssistLocation','makeInputButtonString','_stored_tpGaugeColor2','destroyCoreEngineMarkedBitmaps','_profileWindow','dimColor1','isBottomButtonMode','isOptionValid','SwitchToggleRange','VOLUME_MUTE','CallHandlerJS','_lastX','BattleSystem','F17','MEV','parameters','WIN_OEM_CUSEL','ETB','isHandled','OptionsBgType','BattleManager_processEscape','value','Oqrkj','resetTextColor','canUse','keyRepeatWait','QUOTE','loadGameImagesCoreEngine','BottomHelp','isMaskingEnabled','Game_Action_numRepeats','463928FhgMPB','_timerSprite','pixelated','ncSSO','IconXParam1','setEasingType','startMove','buttonAssistOk','jsonToZip','includes','battlebacks1','drawFace','deathColor','TgOzX','initMembersCoreEngine','taeMR','Linear','Xlxtz','applyEasing','cursorPageup','SceneManager_exit','_registerKeyInput','stop','MhXQM','DOLLAR','StatusBgType','isActor','boxWidth','Rate2','xparamRate1','REC','removeOnceParallelInterpreter','restore','Scene_Boot_loadSystemImages','reserveNewGameCommonEvent','ActorHPColor','processDigitChange','cursorLeft','_centerElement','popScene','playMiss','Scene_MenuBase_createCancelButton','bgs','imageSmoothingEnabled','shake','_phase','style','CEV','Saved\x20file\x20as\x20%1\x20in\x20project\x20folder.','reservePlayTestNewGameCommonEvent','processSoundTimings','addCommand','CONVERT','pictureId','processEscape','createKeyJS','isGameActive','StatusParamsBgType','hqVIr','addChildToBack','ColorMPCost','ParamArrow','makeAutoBattleActions','riEph','jPwGW','isPlaytest','refreshWithTextCodeSupport','NUMPAD3','VbrqR','printError','goldWindowRect','_addShadow','0.00','updateBackOpacity','setSideView','OkText','Spriteset_Base_destroy','Scene_Map_updateScene','INELASTIC','OUTQUAD','Plus','_stored_tpCostColor','refreshDimmerBitmap','([\x5c+\x5c-]\x5cd+)>','JhoYi','isAnimationPlaying','IUkMB','EXCLAMATION','NameMenu','TCR','AccuracyBoost','createTextState','Spriteset_Battle_createEnemies','bgm','PictureEraseAll','_targetScaleY','displayName','ExportStrFromAllMaps','_margin','constructor','ctrlKey','lWKAr','up2','vWYGl','CrXIq','drawActorExpGauge','F13','qlfqA','WIN_OEM_PA1','_commandWindow','VariableJsBlock','NUMPAD5','%1%2','initBasic','MOBWF','rMxGS','itemBackColor1','IXyOY','WIN_OEM_COPY','MqQlk','waiting','setupCoreEngine','Icon','openness','FrjZC','drawItem','resetFontSettings','allowShiftScrolling','opnys','quit','setEnemyAction','DELETE','#%1','BlendMode','IconParam7','_bitmap','application/json','PreserveNumbers','CNT','getControllerInputButtonMatch','updatePointAnimations','30rhoUGx','keyMapper','Game_Interpreter_command122','removeFauxAnimation','CodeJS','checkSmartEventCollision','XbxAQ','_targetOffsetX','eJnbF','max','pop','menu','exit','_inputSpecialKeyCode','_lastPluginCommandInterpreter','Game_Interpreter_command111','levelUp','setMainFontSize','processTimingData','processMoveCommand','currentValue','NUMPAD7'];_0x3ae4=function(){return _0x893097;};return _0x3ae4();}