//=============================================================================
// VisuStella MZ - Events & Movement Core
// VisuMZ_1_EventsMoveCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_EventsMoveCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EventsMoveCore = VisuMZ.EventsMoveCore || {};
VisuMZ.EventsMoveCore.version = 1.42;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.42] [EventsMoveCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Events_and_Movement_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Events & Movement Core plugin adds a lot of new functionality in terms
 * of event flexibility and movement options to RPG Maker MZ. These range from
 * adding in old capabilities from previous iterations of RPG Maker to more
 * mainstream techniques found in other game engines. Movement options are also
 * expanded to support 8-directional movement as well as sprite sheets provided
 * that the VisuStella 8 format is used.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Event commands expanded upon to include old and new functions.
 * * Event templates for Copying Events, Morphing Events, and Spawning Events.
 * * 8-directional movement option available and sprite sheet support.
 * * Aesthetics for tilting the sprite when dashing and having shadows below.
 * * Pathfinding support for event movement through custom Move Route commands.
 * * Advanced switches and variable support to run code automatically.
 * * Turn regular Switches and Variables into Self Switches and Self Variables.
 * * Put labels and icons over events.
 * * Allow numerous ways to trigger events, through clicking, proximity, or by
 *   usage of Regions.
 * * Change the hitbox sizes of events to larger in any direction.
 * * Synchronize event movement options to move when player/other events move.
 * * The ability for the player to turn in place.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Features: Advanced Switches and Variables
 * ============================================================================
 *
 * Switches and variables can now run JavaScript code and return values
 * instantly. While at first glance, this may seem no different from using
 * the Control Variables event command's Script option, this can be used to
 * instantly set up Switch and/or Variable conditions for Parallel Common
 * Events, Event Page Conditions, Enemy Skill Conditions, and Troop Page
 * Conditions instantly without needing to make an event command to do so.
 *
 * ---
 *
 * <JS> code </JS>
 * - Used for: Switch and Variable names
 * - Replace 'code' with JavaScript code on what value to return.
 *
 * ---
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 *
 * ============================================================================
 * Features: Self Switches and Variables
 * ============================================================================
 *
 * RPG Maker MZ by default has 4 Self Switches: A, B, C, D. For some types of
 * games, this isn't enough. This plugin gives you the ability convert regular
 * Switches into Self Switches so you could have more.
 *
 * Self Variables also do not exist in RPG Maker MZ by default. Just like with
 * Switches, you can turn regular Variables into Self Variables.
 *
 * ---
 *
 * <Self>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Self Switch/Variable.
 *
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Self> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that event.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Self Switch or Self Variable's
 * value, you can use the following script calls.
 * 
 *   ---
 * 
 *   Get Self Switch Values:
 * 
 *   getSelfSwitchValue(mapID, eventID, switchID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - This will return the true/false value of the Self Switch.
 *   - Example: getSelfSwitchValue(12, 34, 56)
 *   - Example: getSelfSwitchValue(12, 34, 'B')
 * 
 *   ---
 * 
 *   Get Self Variable Values:
 * 
 *   getSelfVariableValue(mapID, eventID, variableID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - This will return whatever stored value is found in the Self Variable.
 *   - Example: getSelfVariableValue(12, 34, 56)
 * 
 *   ---
 * 
 *   Set Self Switch Values:
 * 
 *   setSelfSwitchValue(mapID, eventID, switchID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - This will change the Self Switch's value to true/false.
 *     - Example: setSelfSwitchValue(12, 34, 56, false)
 *     - Example: setSelfSwitchValue(12, 34, 'B', true)
 * 
 *   ---
 * 
 *   Set Self Variable Values:
 * 
 *   setSelfVariableValue(mapID, eventID, variableID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - Replace 'value' with the value you want to set the Self Variable to.
 *   - Example: setSelfVariableValue(12, 34, 56, 88888)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: Map Switches and Variables
 * ============================================================================
 * 
 * Similar to Self Switches and Self Variables, Map Switches and Map Variables
 * are switches and variables that retain data based on the map the player is
 * currently located in. In other words, they're self switches and variables
 * but for maps instead!
 * 
 * These features do not exist in RPG Maker MZ by default. Just like with the
 * Self Switches and Self Variables, you can turn regular Switches or Variables
 * into Map Switches and Map Variables using the following name tag:
 * 
 * ---
 * 
 * <Map>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Map Switch/Variable.
 * 
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Map> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that map.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Map Switch or Map Variable's
 * value, you can use the following script calls:
 * 
 *   ---
 * 
 *   Get Map Switch Values:
 * 
 *   getMapSwitchValue(mapID, switchID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Example: getMapSwitchValue(4, 20)
 * 
 *   ---
 * 
 *   Get Variable Switch Values:
 * 
 *   getMapVariableValue(mapID, variableID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Example: getMapVariableValue(6, 9)
 * 
 *   ---
 * 
 *   Set Map Switch Values:
 * 
 *   setMapSwitchValue(mapID, switchID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - Example: setMapSwitchValue(4, 20, true)
 *   - Example: setMapSwitchValue(6, 9, false)
 * 
 *   ---
 * 
 *   Set Map Variable Values:
 * 
 *   setMapVariableValue(mapID, variableID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Replace 'value' with the value you want to set the Map Variable to.
 *   - Example: setMapVariableValue(6, 9, 420)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: VisuStella-Style 8-Directional Sprite Sheets
 * ============================================================================
 *
 * This plugin provides support for the VisuStella-Style 8-Directional Sprite
 * Sheets, also know as VS8. VS8 sprite sheets offer support for walking
 * frames, dashing frames, carrying frames, and emotes.
 *
 * ---
 *
 * To designate a sprite sheet as VS8, simply add [VS8] to the filename.
 * Something like Actor1.png would become Actor1_[VS8].png.
 *
 * ---
 *
 * VS8 sprites are formatted as such. Each block below is a set of 3 frames.
 *
 * Walk Down    Walk DL     Dash Down   Dash DL
 * Walk Left    Walk DR     Dash Left   Dash DR
 * Walk Right   Walk UL     Dash Right  Dash UL
 * Walk Up      Walk UR     Dash Up     Dash UR
 *
 * Carry Down   Carry DL    Ladder      Emotes 3
 * Carry Left   Carry DR    Rope        Emotes 4
 * Carry Right  Carry UL    Emotes 1    Emotes 5
 * Carry Up     Carry UR    Emotes 2    Emotes 6
 *
 * ---
 *
 * Here are how each of the emote sets are grouped from left to right.
 *
 * Emotes 1: Item, Hmph, Victory
 * Emotes 2: Hurt, Kneel, Collapse
 * Emotes 3: !, ?, Music Note
 * Emotes 4: Heart, Anger, Sweat
 * Emotes 5: Cobweb, ..., Light Bulb
 * Emotes 6: Sleep0, Sleep1, Sleep2
 *
 * ---
 *
 * ============================================================================
 * Features: Weighted Random Movement
 * ============================================================================
 * 
 * When creating events to place on the map, you can determine what type of
 * autonomous movement the event will have. When selecting "Random", the event
 * will move randomly across the map.
 * 
 * However, with the way "Random" movement works with the RPG Maker MZ default
 * code, the event is more likely to hit a wall and then hug the said wall as
 * it maps laps around the map's outer borders making it feel very unnatural
 * for any player who's been on the map long enough.
 * 
 * This is where "Weighted Random Movement" comes in. It changes up the random
 * movement behavior to function where the farther the event is, the more
 * likely the event is to step back towards its "home" position (aka where it
 * spawned upon loading the map). This is so that a housewife NPC doesn't
 * suddenly wander off into the middle of an army's training grounds on the
 * same town map.
 * 
 * The event will stay closer to its home value depending on how high the
 * weight's value is. There are a number of ways to adjust the weighted value.
 * 
 * ---
 * 
 * Plugin Parameters > Movement > Event Movement > Random Move Weight
 * 
 * This Plugin Parameter setting allows you to set the default weight for all
 * events with "Random" autonomous movement. It is set at a default value of
 * 0.10 to give the event an understandable degree of freedom.
 * 
 * Lower numbers give events more freedom to move. Larger numbers will make the
 * events stick closer to home.
 * 
 * Change this value to 0 to disable it.
 * 
 * ---
 * 
 * You can customize this individually per event by using Notetags and/or
 * Comment Tags for the events.
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * ============================================================================
 * Notetags and Comment Tags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * Some of these are comment tags. Comment tags are used for events to mark and
 * affect individual event pages rather than the whole event.
 *
 * === Map Notetags ===
 *
 * The following notetags are used for maps only. While some of these options
 * are also available in the Plugin Parameters, some of these notetags extend
 * usage to specific maps marked by these notetags as well.
 *
 * ---
 *
 * <Diagonal Movement: On>
 * <Diagonal Movement: Off>
 *
 * - Used for: Map Notetags
 * - Turns on/off diagonal movement for those maps.
 * - If notetag isn't present, use Plugin Parameter setting.
 *
 * ---
 *
 * <type Allow Region: x>
 * <type Allow Region: x, x, x>
 *
 * <type Forbid Region: x>
 * <type Forbid Region: x, x, x>
 *
 * <type Dock Region: x>
 * <type Dock Region: x, x, x>
 *
 * - Used for: Map Notetags
 * - Replace 'type' with 'All', 'Walk', 'Player', 'Event', 'Vehicle', 'Boat',
 *   'Ship', or 'Airship'.
 * - 'Allow' notetag variants allow that type to pass through them no matter
 *   what other passability settings are in place.
 * - 'Forbid' notetag variants forbid that type from passing through at all.
 * - 'Dock' notetag variants allow vehicles to dock there. Boats and ships must
 *   face the region direction while airships must land directly on top.
 *
 * ---
 *
 * <Save Event Locations>
 *
 * - Used for: Maps Notetags
 * - Saves the locations of all events on the map so that when you return to
 *   that map at a later point, the events will be in the position they were
 *   last in.
 *
 * ---
 * 
 * <Hide Player>
 * <Show Player>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player sprite. This is so you don't need to
 *   manually turn the setting on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - If the player sprite is hidden, so are the player's followers.
 * - If the player sprite is visible, the player's followers will still depend
 *   on their settings.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * <Hide Followers>
 * <Show Followers>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player's followers. This is so you don't
 *   need to manually turn them on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * === Page Comment Tags ===
 * 
 * The following comment tags are to be put inside of the pages of events,
 * troops, and common events for them to work!
 * 
 * ---
 * 
 * <Page Conditions>
 *   conditions
 *   conditions
 *   conditions
 * </Page Conditions>
 * 
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - This allows you to create custom page conditions that utilize the
 *   Conditional Branch event command to see if the additional page conditions
 *   are met.
 * 
 * ---
 * 
 * <Conditions Met>
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - If used between the <Page Conditions> and </Page Conditions> comment tag,
 *   upon reaching this part of event command list, the custom page conditions
 *   will be considered met.
 * 
 * ---
 * 
 * Example:
 * 
 * ◆Comment：<Page Conditions>
 * ◆If：Reid has equipped Potion Sword
 *   ◆Comment：If Reid has equipped the Potion Sword
 * ：       ：<Condition Met>
 *   ◆
 * ：End
 * ◆Comment：</Page Conditions>
 * 
 * If Reid has the "Potion Sword" weapon equipped, then the additional custom
 * page conditions are met and the event page will be present/active.
 * 
 * If this is a troop condition, the troop page event will activate.
 * 
 * If this is a common event, there will be a parallel common event active.
 * 
 * ---
 *
 * === Event and Event Page Notetags ===
 *
 * The following notetags have comment tag variants (with a few exceptions).
 * If a notetag is used for an event, it will affect the event constantly.
 * If a comment tag is used, it will only affect the page the comment tag is
 * on and only that page.
 *
 * ---
 *
 * <Activation Region: x>
 * <Activation Regions: x,x,x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   standing within a tile marked by a designated region.
 * - Replace 'x' with the regions you wish to remotely activate this event in.
 *   - Action Button: Player must press OK while being in the region.
 *   - Player/Event Touch: Player must step onto the region.
 *   - Autorun/Parallel: Player be in the region.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Activation Square: x>
 * <Activation Radius: x>
 * <Activation Row: x>
 * <Activation Column: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   within range of its activation type.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Radius: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Always Update Movement>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Events normally have to be within screen range for them to update their
 *   self movement. If this tag is present, the event is always updating.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Click Trigger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to activate upon being clicked on with the mouse.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Copy Event: Map x, Event y>
 * <Copy Event: x, y>
 *
 * <Copy Event: template>
 *
 * - Used for: Event Notetags ONLY
 * - Makes this event copy all of the event settings from a different event
 *   that can be found on a different map (as long as that map is registered
 *   inside of Plugin Parameters => Event Template Settings => Preloaded Maps).
 * - Replace 'x' with a number representing the copied event's Map ID.
 *   - If '0' is used for the Map ID, reference the current map.
 * - Replace 'y' with a number representing the copied event's Event ID.
 * - For the 'template' variant, replace 'template' with the name of the
 *   template made in Plugin Parameters => Event Template Settings =>
 *   Event Template List.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Custom Z: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number value to determine the event sprite's Z value
 *   relative to the tilemap.
 * - For reference from rmmz_core.js:
 *   - 0 : Lower tiles
 *   - 1 : Lower characters
 *   - 3 : Normal characters
 *   - 4 : Upper tiles
 *   - 5 : Upper characters
 *   - 6 : Airship shadow
 *   - 7 : Balloon
 *   - 8 : Animation
 *   - 9 : Destination
 * - You can use numbers below 0 and above 9.
 *   - Values under 0 go below the tilemap.
 *   - Values above 9 go above everything else on the tilemap.
 *   - These values do NOT go below or above other screen objects that are
 *     NOT attached to the tilemap layer such as parallaxes or weather or
 *     windows because that's simply not how z-axis work with sprite layers.
 * 
 * ---
 * 
 * <Exit Reset Self Data>
 * 
 * - Used for: Event Notetags ONLY
 * - When the player leaves the current map, all Self Switches and Self
 *   Variables related to this event will be reset.
 * 
 * ---
 *
 * <Hitbox Left: x>
 * <Hitbox Right: x>
 * <Hitbox Up: x>
 * <Hitbox Down: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number to extend the hitbox of the event by that many
 *   tiles towards the listed direction.
 * - Use multiples of this notetag to extend them to different directions.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with the Icon ID you wish to put above this event.
 * - This will not override any Icons designated to the ID through a
 *   Plugin Command.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon Buffer X: +x>
 * <Icon Buffer X: -x>
 *
 * <Icon Buffer Y: +x>
 * <Icon Buffer Y: -x>
 *
 * <Icon Buffer: +x, +y>
 * <Icon Buffer: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the icon on the envent by buffers.
 * - Replace 'x' and 'y' with the values to adjust the position buffers by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label: text>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - Text codes can be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label>
 * text
 * text
 * </Label>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - This can display multiple lines.
 * - Text codes can be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Range: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets a range requirement for the player to be in order for the event's
 *   label to appear.
 * - Replace 'x' with a number value depicting the range in tiles.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Offset X: +x>
 * <Label Offset X: -x>
 *
 * <Label Offset Y: +x>
 * <Label Offset Y: -x>
 *
 * <Label Offset: +x, +y>
 * <Label Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the label on the envent by offsets.
 * - Replace 'x' and 'y' with the values to adjust the position offsets by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Mirror Sprite>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event sprite's visual appearance is mirrored.
 * 
 * ---
 * 
 * <Move Only Region: x>
 * <Move Only Regions: x,x,x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the move range of this event to only the region(s) marked by the
 *   notetag(s) or comment tag(s).
 * - This will bypass terrain passability.
 * - This will not bypass event collision.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Move Synch Target: Player>
 *
 * <Move Synch Target: Event x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Synchronizes the movement of this event with a target (either the player
 *   or another event). This event will only move whenever the synchronized
 *   target moves.
 * - For 'Event x' variant, replace 'x' with the ID of the event to synch to.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Type: Random>
 * <Move Synch Type: Approach>
 * <Move Synch Type: Away>
 * <Move Synch Type: Custom>
 *
 * <Move Synch Type: Mimic>
 * <Move Synch Type: Reverse Mimic>
 *
 * <Move Synch Type: Mirror Horizontal>
 * <Move Synch Type: Mirror Vertical>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Choose the type of movement the event will have if it is synchronized to
 *   a target.
 *   - Random: Move to a random position.
 *   - Approach: Approaches target.
 *   - Away: Flees from target.
 *   - Custom: Follows a custom move route.
 *   - Mimic: Imitates the target's movement style.
 *   - Reverse Mimic: Does the opposite of the target's movement.
 *   - Mirror Horizontal: Moves as if a mirror is placed horizontally.
 *   - Mirror Vertical: Moves as if a mirror is placed vertically.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Delay: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is present, the event will wait a bit after each move before
 *   moving again.
 * - Replace 'x' with the number of movement instances in between.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Move Synch Distance Opacity: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the opacity of the event based on the distance between it and its
 *   move synched target. Closer means more opaque. Further away means more
 *   transparent.
 * - Replace 'x' with a number representing the opacity change per pixel
 *   distance away. 'x' can use decimal values like 1.05 and 1.5.
 * 
 * ---
 * 
 * <Picture Filename: filename>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Applies a picture graphic from the /img/pictures/ folder of your project.
 * - This graphic will be on top of the character sprite but below the event
 *   icon sprite.
 *   - The picture priority will be the same as the event's priority.
 *   - If it is "below characters", the player can walk on top of it.
 *   - If it is "above characters", the player will behind it.
 *   - If it is "same as characters", the priority will be based on the
 *     current relative Y position. This also means, if the picture is big
 *     enough, it can clip into the top of tree tiles and such.
 * - Replace 'filename' with a filename from the game project's /img/pictures/
 *   folder. This is case sensitive. Do NOT include the file extension.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Max Size: x>
 * <Picture Scale: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - If the "Max Size" or "Scale" supplementary notetags are used, the picture
 *   graphic will be scaled proportionally to fit either the exact pixel size
 *   for "Max Size" or the "Scale" ratio.
 *   - Both the "Max Size" and "Scale" notetags require the "Filename" notetag.
 * - Replace 'x' with a number value representing the exact pixel size for the
 *   "Max Size" notetag.
 * - Replace 'y' with a number value representing the scale on which to shrink
 *   or enlarge the picture. 100% is normal size. 50% is half size. 200% is
 *   double size.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Picture Offset X: +x>
 * <Picture Offset X: -x>
 *
 * <Picture Offset Y: +x>
 * <Picture Offset Y: -x>
 *
 * <Picture Offset: +x, +y>
 * <Picture Offset: -x, -y>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Offsets the X and Y position of the event picture relative to the event
 *   sprite's own position.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Wait Frames: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Requires VisuMZ_4_AnimatedPictures!
 * - "Wait Frames" is used with VisuMZ's Animated Pictures plugin. This
 *   determines the delay inbetween frame changes.
 * - Replace 'x' with a number representing the amount of frames to wait
 *   inbetween frame changes.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * ---
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * <Save Event Location>
 *
 * - Used for: Event Notetags ONLY
 * - Saves the locations of the event on the map so that when you return to
 *   that map at a later point, the event will be in the position it was
 *   last in.
 *
 * ---
 *
 * <Hide Shadow>
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Hides the shadow for the event.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Shadow Filename: filename>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replaces the shadow graphic used with 'filename' found in the
 *   img/system/ project folder.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Sprite Offset X: +x>
 * <Sprite Offset X: -x>
 *
 * <Sprite Offset Y: +x>
 * <Sprite Offset Y: -x>
 *
 * <Sprite Offset: +x, +y>
 * <Sprite Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes how much the event's sprite is visibly offset by.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Step Pattern: Left to Right>
 * <Step Pattern: Right to Left>
 *
 * <Step Pattern: Spin Clockwise>
 * <Step Pattern: Spin CW>
 *
 * <Step Pattern: Spin CounterClockwise>
 * <Step Pattern: Spin CCW>
 * <Step Pattern: Spin AntiClockwise>
 * <Step Pattern: Spin ACW>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the way the event animates if a tag is present.
 *   - Left to Right: Makes the event sprite's step behavior go from frame 0 to
 *     1 to 2, then back to 0 instead of looping backward.
 *   - Right to Left: Makes the event sprite's step behavior go from frame 2 to
 *     1 to 0, then back to 2 instead of looping forward.
 *   - Spin Clockwise: Makes the event sprite's step behavior spin CW.
 *   - Spin CounterClockwise: Makes the event sprite's step behavior spin CCW.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
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
 * === Auto Movement Plugin Commands ===
 * 
 * ---
 *
 * Auto Movement: Events
 * - Allow/stop events from auto movement.
 *
 *   Value:
 *   - Allow events to move automatically?
 *
 * ---
 * 
 * === Call Event Plugin Commands ===
 * 
 * ---
 *
 * Call Event: Remote Activation
 * - Runs the page of a different event remotely.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Page ID:
 *   - The page of the remote event to run.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Dash Plugin Commands ===
 * 
 * ---
 *
 * Dash Enable: Toggle
 * - Enable/Disable Dashing on maps.
 *
 *   Value:
 *   - What do you wish to change dashing to?
 *
 * ---
 * 
 * === Event Icon Plugin Commands ===
 * 
 * ---
 *
 * Event Icon: Change
 * - Change the icon that appears on an event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Event Icon: Delete
 * - Delete the icon that appears on an event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Event Label Plugin Commands ===
 * 
 * ---
 *
 * Event Label: Refresh
 * - Refresh all Event Labels on screen.
 * - This is used to refresh page conditions for map changes that don't
 *   force a refresh.
 *
 * ---
 *
 * Event Label: Visible
 * - Change the visibility of Event Labels.
 *
 *   Visibility:
 *   - What do you wish to change visibility to?
 *
 * ---
 * 
 * === Event Location Plugin Commands ===
 * 
 * ---
 *
 * Event Location: Save
 * - Memorize an event's map location so it reappears there the next time the
 *   map is loaded.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Delete
 * - Deletes an event's saved map location.
 * - The event will reappear at its default location.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *   
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Create
 * - Creates a custom spawn location for a specific map's event so it appears
 *   there the next time the map is loaded.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   X Coordinate:
 *   - The X coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - The Y coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Direction:
 *   - The direction the event will be facing.
 *
 *   Optional:
 *
 *     Page ID:
 *     - The page of the event to set the move route to.
 *     - You may use JavaScript code.
 *
 *     Move Route Index:
 *     - The point in the move route for this event to be at if the page ID
 *       matches the rest of the page conditions.
 *
 * ---
 * 
 * === Event Timer Plugin Commands ===
 * 
 * ---
 *
 * Event Timer: Change Speed
 * - Changes the timer frame decrease (or increase) speed.
 *
 *   Speed:
 *   - How many 1/60ths of a second does each frame increase or decrease by?
 *   - Negative decreases.
 *   - Positive increases.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Expire Event Assign
 * - Sets a Common Event to run upon expiration.
 * - Bypasses the default code if one is set.
 *
 *   Common Event ID:
 *   - Select the Common Event to run upon the timer's expiration.
 *
 * ---
 *
 * Event Timer: Expire Event Clear
 * - Clears any set to expire Common Event and instead, run the default
 *   Game_Timer expiration code.
 *
 * ---
 *
 * Event Timer: Frames Gain
 * - Chooses how many frames, seconds, minutes, or hours are gained or lost for
 *   the event timer.
 *
 *   Frames:
 *   - How many 1/60ths of a second are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - How many seconds are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - How many minutes are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - How many hours are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Frames Set
 * - Chooses how many frames, seconds, minutes, or hours are set for the event
 *   timer.
 *
 *   Frames:
 *   - Set frame count to this value.
 *   - Each frame is 1/60th of a second.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - Set seconds to this value.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - Set minutes to this value.
 *   - Each minute is 60 seconds.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - Set hours to this value.
 *   - Each hour is 60 minutes.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Pause
 * - Pauses the current event timer, but does not stop it.
 *
 * ---
 *
 * Event Timer: Resume
 * - Resumes the current event timer from the paused state.
 *
 * ---
 * 
 * === Follower Control Plugin Commands ===
 * 
 * ---
 *
 * Follower: Set Global Chase
 * - Disables all followers from chasing the player or reenables it.
 *
 *   Chase:
 *   - Sets all followers to chase the player or not.
 *
 * ---
 *
 * Follower: Set Target Chase
 * - Disables target follower from chasing the player or reenables it.
 *
 *   Follower ID:
 *   - Select which follower ID to disable/reenable chasing for.
 *
 *   Chase:
 *   - Sets target follower to chase its target or not.
 *
 * ---
 *
 * Follower: Set Control
 * - Sets the event commands to target a follower when "Player" is selected as
 *   the target.
 *
 *   Follower ID:
 *   - Select which follower ID to control.
 *   - 0 is the player.
 *
 * ---
 *
 * Follower: Reset
 * - Resets all follower controls. Event Commands that target the "Player"
 *   return to normal and followers chase again.
 *
 * ---
 * 
 * === Global Switch Plugin Commands ===
 * 
 * ---
 * 
 * Global Switch: Get Self Switch A B C D
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Letter:
 *   - Letter of the target event's Self Switch to obtain data from.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * Global Switch: Get Self Switch ID
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Switch ID:
 *   - The ID of the source switch.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * === Global Variable Plugin Commands ===
 * 
 * ---
 * 
 * Global Variable: Get Self Variable ID
 * - Gets the current stored value from a Self Variable and stores it onto a
 *   Global Variable.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Variable ID:
 *   - The ID of the source variable.
 * 
 *   -
 * 
 *   Target Variable ID:
 *   - The ID of the target variable.
 * 
 * ---
 * 
 * === Morph Event Plugin Commands ===
 * 
 * ---
 *
 * Morph Event: Change
 * - Runs the page of a different event remotely.
 *
 *   Step 1:
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Template Name:
 *     - Name of the target event template to morph into.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *     Preserve Morph:
 *     - Is the morph effect preserved?
 *     - Or does it expire upon leaving the map?
 *
 * ---
 *
 * Morph Event: Remove
 * - Remove the morph status of an event.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Remove Preservation:
 *   - Also remove the preservation effect?
 *
 * ---
 * 
 * === Player Icon Plugin Commands ===
 * 
 * ---
 *
 * Player Icon: Change
 * - Change the icon that appears on on the player.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Player Icon: Delete
 * - Delete the icon that appears on the player.
 *
 * ---
 * 
 * === Player Movement Plugin Commands ===
 * 
 * ---
 * 
 * Player Movement: Control
 * - Enable or disable player control over the player character's movement.
 * 
 *   Enable?:
 *   - Let the player control where the player character moves?
 * 
 * ---
 * 
 * Player Movement: Diagonal
 * - Override settings to for player diagonal movement.
 * 
 *   Setting:
 *   - How do you want to change diagonal movement?
 *   - Default: Whatever the Map Uses
 *   - Forcefully Disable Diagonal Movement
 *   - Forcefully Enable Diagonal Movement
 * 
 * ---
 * 
 * === Self Data Plugin Commands ===
 * 
 * ---
 * 
 * Self Data: Reset All
 * - Reset the Self Switch and Self Variable data of all events within the
 *   specified map.
 * 
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * === Self Switch Plugin Commands ===
 * 
 * ---
 *
 * Self Switch: A B C D
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Letter:
 *   - Letter of the target event's Self Switch to change.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 *
 * Self Switch: Switch ID
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Switch ID:
 *   - The ID of the target switch.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Self Variable Plugin Commands ===
 * 
 * ---
 *
 * Self Variable: Variable ID
 * - Change the Self Variable of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Variable ID:
 *   - The ID of the target variable.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Spawn Event Plugin Commands ===
 * 
 * ---
 *
 * Spawn Event: Spawn At X, Y
 * - Spawns desired event at X, Y location on the current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     X Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Y Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Region
 * - Spawns desired event at a random region-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Region ID(s):
 *     - Pick region(s) to spawn this event at.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Terrain Tag
 * - Spawns desired event at a random terrain tag-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Terrain Tag(s):
 *     - Pick terrain tag(s) to spawn this event at.
 *     - Insert numbers between 0 and 7.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Despawn Event ID
 * - Despawns the selected Event ID on the current map.
 *
 *   Event ID
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn At X, Y
 * - Despawns any spawned event(s) at X, Y location on the current map.
 *
 *   X Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn Region(s)
 * - Despawns the selected Region(s) on the current map.
 *
 *   Region ID(s):
 *   - Pick region(s) and despawn everything inside it.
 *
 * ---
 *
 * Spawn Event: Despawn Terrain Tag(s)
 * - Despawns the selected Terrain Tags(s) on the current map.
 *
 *   Terrain Tag(s):
 *   - Pick terrain tag(s) and despawn everything inside it.
 *   - Insert numbers between 0 and 7.
 *
 * ---
 *
 * Spawn Event: Despawn Everything
 * - Despawns all spawned events on the current map.
 *
 * ---
 *
 * ============================================================================
 * Move Route Custom Commands
 * ============================================================================
 *
 * Some custom commands have been added to the "Set Movement Route" event
 * command. These can be accessed by pressing the "Script..." command and
 * typing in the following, which don't need to be in code form.
 *
 * Keep in mind that since these are custom additions and RPG Maker MZ does not
 * allow plugins to modify the editor, the "Preview" button will not factor in
 * the effects of these commands.
 * 
 * If you wish to use a value from a variable, insert $gameVariables.value(x)
 * or \V[x] in place of the x in any of the below.
 * 
 * If you wish to use a value from a self variable, insert \SelfVar[x] in place
 * of the x in any of the below. This will only draw from the current event. If
 * you wish to draw data from outside event self variables, we recommend you
 * use the \V[x] variant after using the Plugin Commands to draw data from them
 * for the best accuracy.
 *
 * ---
 * 
 * Animation: x
 * - Replace 'x' with the ID of the animation to play on moving unit.
 *
 * ---
 * 
 * Balloon: name
 * - Replace 'name' with any of the following to play a balloon on that the
 *   target moving unit.
 * - '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep', 'User-Defined 1', 'User-Defined 2',
 *   'User-Defined 3', 'User-Defined 4', 'User-Defined 5'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: !
 *   - Balloon: Sleep
 *   - Balloon: Heart
 *
 * ---
 * 
 * Fade In: x
 * Fade Out: x
 * - Fades in/out the sprite's opacity.
 * - Fade In will continuously raise the opacity level until it reaches 255.
 * - Fade Out will continuously lower the opacity level until it reaches 0.
 * - Replace 'x' with the speed to fade in/out the sprite.
 * 
 * ---
 * 
 * Force Carry: On
 * Force Carry: Off
 * - For usage with the VS8 sprite sheet.
 * - Use ON to turn force carrying on.
 * - Use OFF to turn force carrying off.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Carry frames.
 * 
 * ---
 * 
 * Force Dash: On
 * Force Dash: Off
 * - Use ON to turn force dashing on.
 * - Use OFF to turn force dashing off.
 * - Forces dashing will prompt the player or event to be in the dashing state.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Dashing frames.
 * 
 * ---
 * 
 * Hug: Left
 * Hug: Right
 * - Causes the moving unit to hug the left/right side of the wall.
 *
 * ---
 * 
 * Index: x
 * - Replace 'x' with a number depicting the character index to change the
 *   moving unit's sprite to.
 *
 * ---
 * 
 * Index: +x
 * Index: -x
 * - Replace 'x' with the value to change the character index of the moving
 *   unit's sprite by.
 *
 * ---
 * 
 * Jump Forward: x
 * - Replace 'x' with the number of tiles for the unit to jump forward by.
 *
 * ---
 * 
 * Jump To: x, y
 * - Replace 'x' and 'y' with the coordinates for the unit to jump to.
 *
 * ---
 * 
 * Jump to Event: x
 * - Replace 'x' with the ID of the event for the unit to jump to.
 *
 * ---
 * 
 * Jump to Player
 * - Causes the moving unit to jump to the player.
 *
 * ---
 * 
 * Jump To Home
 * - Causes the event to jump to its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Move Lower Left Until Stop
 * Move Down Until Stop
 * Move Lower Right Until Stop
 * Move Left Until Stop
 * Move Right Until Stop
 * Move Upper Left Until Stop
 * Move Up Until Stop
 * Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events will stop moving before they make contact with the player.
 *
 * ---
 * 
 * Crash Move Lower Left Until Stop
 * Crash Move Down Until Stop
 * Crash Move Lower Right Until Stop
 * Crash Move Left Until Stop
 * Crash Move Right Until Stop
 * Crash Move Upper Left Until Stop
 * Crash Move Up Until Stop
 * Crash Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Player
 * - Moves the unit to the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Crash Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 * 
 * ---
 * 
 * Move Lower Left: x
 * Move Down: x
 * Move Lower Right: x
 * Move Left: x
 * Move Right: x
 * Move Upper Left: x
 * Move Up: x
 * Move Upper Right: x
 * - Replace 'x' with the number of times to move the unit by in the designated
 *   direction on the map.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Opacity: x%
 * - Replace 'x' with the percentage to change the unit's sprite opacity to.
 *
 * ---
 * 
 * Opacity: +x
 * Opacity: -x
 * - Replace 'x' with the increment to change the unit's sprite opacity by.
 *
 * ---
 *
 * Pattern Lock: x
 * - Replace 'x' with the step pattern to lock the unit's sprite to.
 *
 * ---
 *
 * Pattern Unlock
 * - Removes pattern lock effect.
 *
 * ---
 * 
 * Pose: name
 * - If using a VS8 sprite, this will cause the unit to strike a pose.
 * - Replace 'name' with any the following:
 * - 'Item', 'Hmph', 'Victory', 'Hurt', 'Kneel', 'Collapse',
 *   '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: Item
 *   - Balloon: Victory
 *   - Balloon: ?
 *
 * ---
 * 
 * Step Toward: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step towards.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Player
 * - Causes event to take one step towards the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Home
 * - Causes the event to take one step towards its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Step Away From: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step away from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Player
 * - Causes event to take one step away from the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Home
 * - Causes the event to take one step away from its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Turn To: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Event: x
 * - Replace 'x' with the ID of the event to turn the unit towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Player
 * - Causes the unit to turn towards the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Home
 * - Causes the event to turn towards its home position.
 * - This refers to the original position's X/Y on the map.
 * - The event will turn and face the tile that is its original X/Y location.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Away From: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Event: x
 * - Replace 'x' with the ID of the event to turn the unit away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Player
 * - Causes the unit to turn away from the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Home
 * - Causes the event to turn away from its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Lower Left
 * Turn Lower Right
 * Turn Upper Left
 * Turn Upper Right
 * - Causes the unit to turn to one of the diagonal directions.
 *
 * ---
 * 
 * Self Switch x: On
 * Self Switch x: Off
 * Self Switch x: Toggle
 * - Replace 'x' with 'A', 'B', 'C', 'D', or a <Self> Switch ID to adjust the
 *   unit's Self Switch.
 *
 * ---
 * 
 * Self Variable x: y
 * - Replace 'x' with a <Self> Variable ID to adjust the unit's Self Variable.
 * - Replace 'y' with a number value to set the Self Variable to.
 *
 * ---
 * 
 * Teleport To: x, y
 * - Replace 'x' and 'y' with the coordinates to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Event: x
 * - Replace 'x' with the ID of the event to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Player
 * - Instantly moves the unit to the player's location.
 *
 * ---
 * 
 * Teleport to Home
 * - Instantly teleports an event to its home position on the map.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * If none of the commands are detected above, then a script call will be ran.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Label Settings
 * ============================================================================
 *
 * Event Labels are small windows created to display text over an event's head.
 * They're set up using the <Label> notetags and/or comment tags. Event Labels
 * are a great way to instantly relay information about the event's role to
 * the player.
 *
 * ---
 *
 * Event Labels
 * 
 *   Sprite Based?:
 *   - Use sprite-based labels instead of legacy-window version.
 *   - Legacy-window version will not be supported in future.
 *   - Sprite-based labels are more memory efficient and work better
 *     compatibility-wise.
 * 
 *   Font Size:
 *   - The font size used for the Event Labels.
 * 
 *   Icon Size:
 *   - The size of the icons used in the Event Labels.
 * 
 *   Line Height:
 *   - The line height used for the Event Labels.
 * 
 *   Offset X:
 *   - Globally offset all labels horizontally by this amount.
 * 
 *   Offset Y:
 *   - Globally offset all labels vertically by this amount.
 * 
 *   Fade Speed:
 *   - Fade speed for labels.
 * 
 *   Visible Range:
 *   - Range the player has to be within the event to make its label visible.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Icon Settings
 * ============================================================================
 *
 * Icons can be displayed over an event's head through the <Icon> notetags
 * and/or comment tags. These can be used for a variety of things such as
 * making them look like they're carrying an item or to indicate they have a
 * specific role.
 *
 * ---
 *
 * Event Icon
 * 
 *   Buffer X:
 *   - Default X position buffer for event icons.
 * 
 *   Buffer Y:
 *   - Default Y position buffer for event icons.
 * 
 *   Blend Mode:
 *   - Default blend mode for even icons.
 *     - 0 - Normal
 *     - 1 - Additive
 *     - 2 - Multiply
 *     - 3 - Screen
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Template Settings
 * ============================================================================
 *
 * Event Templates allow you to store specific maps and/or event data to bring
 * out on need while having a premade set base. They're similar to prefabs but
 * aren't things that can be altered individually as one setting for an event
 * template will serve as a blueprint for all of them that use them.
 *
 * Event Templates are used for the <Copy Event> notetags, the Morph Event and
 * Spawn Event Plugin Commands.
 *
 * ---
 *
 * Settings
 * 
 *   Preloaded Maps:
 *   - A list of all the ID's of the maps that will be preloaded to serve as
 *     template maps for this plugin.
 *
 * ---
 *
 * Templates
 * - A list of all the Event Templates used by this project. Used for notetags
 *   and Plugin Commands.
 * 
 *     Name:
 *     - Name of the template. It'll be used as anchor points for notetags and
 *       Plugin Commands.
 * 
 *     Map ID:
 *     - ID of the map the template event is stored on.
 *     - This will automatically add this ID to preloaded list.
 * 
 *     Event ID:
 *     - ID of the event the template event is based on.
 * 
 *     JavaScript:
 *       JS: Pre-Copy:
 *       JS: Post-Copy:
 *       JS: Pre-Morph:
 *       JS: Post-Morph:
 *       JS: Pre-Spawn:
 *       JS: Post-Spawn:
 *       - Code that's ran during certain circumstances.
 *       - The code will occur at the same time as the ones listed in the main
 *         Event Template Settings Plugin Parameters. However, the ones listed
 *         in these individual entries will only occur for these specific
 *         templates and only if the templates are used.
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: Pre-Copy:
 *   JS: Post-Copy:
 *   JS: Pre-Morph:
 *   JS: Post-Morph:
 *   JS: Pre-Spawn:
 *   JS: Post-Spawn:
 *   - Code that's ran during certain circumstances.
 *   - These are global and are ran for all copies, morphs, and/or spawns.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Movement Settings
 * ============================================================================
 *
 * These plugin parameters allow you to control how movement works in your
 * game, toggling it from 4-directional to 8-directional, setting up rules to
 * stop self-movement from events while an event or message is present, and
 * other aesthetics such as tilting the sprite while dashing, setting shadows
 * beneath the sprites, and allow for turning in place.
 *
 * ---
 *
 * 8 Directional Movement
 * 
 *   Enable:
 *   - Allow 8-directional movement by default? Players can move diagonally.
 * 
 *   Strict Collision:
 *   - Enforce strict collission rules where the player must be able to pass
 *     both cardinal directions?
 * 
 *   Favor Horizontal:
 *   - Favor horizontal if cannot pass diagonally but can pass both
 *     horizontally and vertically?
 * 
 *   Slower Diagonals?
 *   - Enforce a slower movement speed when moving diagonally?
 * 
 *     Speed Multiplier
 *     - What's the multiplier to adjust movement speed when moving diagonally?
 *
 * ---
 *
 * Automatic Movement
 * 
 *   Stop During Events:
 *   - Stop automatic event movement while events are running.
 * 
 *   Stop During Messages:
 *   - Stop automatic event movement while a message is running.
 *
 * ---
 * 
 * Bitmap
 * 
 *   Smoothing:
 *   - Do you want to smooth or pixelate the map sprites?
 *   - Pixelating them is better for zooming and tilting.
 * 
 * ---
 *
 * Dash
 * 
 *   Dash Modifier:
 *   - Alters the dash speed modifier.
 * 
 *   Dash on Ladder?
 *   - Allow dashing while on a ladder or rope?
 * 
 *   Enable Dash Tilt?:
 *   - Tilt any sprites that are currently dashing?
 * 
 *     Tilt Left Amount:
 *     - Amount in radians when moving left (upper left, left, lower left).
 * 
 *     Tilt Right Amount:
 *     - Amount in radians when moving right (upper right, right, lower right).
 * 
 *     Tilt Vertical Amount:
 *     - Amount in radians when moving vertical (up, down).
 *
 * ---
 * 
 * Event Movement
 * 
 *   Random Move Weight:
 *   - Use numbers between 0 and 1.
 *   - Numbers closer to 1 stay closer to their home position.
 *   - 0 to disable it.
 * 
 *   Shift Y:
 *   - How many pixels should non-tile characters be shifted by?
 *   - Negative: up. Positive: down.
 * 
 * ---
 *
 * Shadows
 * 
 *   Show:
 *   - Show shadows on all events and player-related sprites.
 * 
 *   Default Filename:
 *   - Default filename used for shadows found in img/system/ folder.
 *
 * ---
 *
 * Turn in Place
 * 
 *   Enable:
 *   - When not dashing, player will turn in place before moving.
 *   - This only applies with keyboard inputs.
 * 
 *   Delay in Frames:
 *   - The number of frames to wait before moving.
 *
 * ---
 * 
 * Vehicle Speeds
 * 
 *   Boat Speed:
 *   - Allows you to adjust the base speed of the boat vehicle.
 * 
 *   Ship Speed:
 *   - Allows you to adjust the base speed of the ship vehicle.
 * 
 *   Airship Speed:
 *   - Allows you to adjust the base speed of the airship vehicle.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: VisuStella 8-Dir Settings
 * ============================================================================
 *
 * These are settings for sprite sheets using the VS8 format.
 * For more information on the VS8 format, look in the help section above.
 *
 * ---
 *
 * Balloon Icon Settings
 * 
 *   Auto-Balloon Poses:
 *   - Automatically pose VS8 sprites when using balloon icons.
 * 
 *   Balloon Offset X:
 *   - Offset balloon icons on VS8 sprites by x pixels.
 * 
 *   Balloon Offset Y:
 *   - Offset balloon icons on VS8 sprites by y pixels.
 *
 * ---
 *
 * Icons
 * 
 *   Auto Buffer:
 *   - Automatically buffer the X and Y coordinates of VS8 sprites?
 * 
 *   Use Carry Pose:
 *   - Use the carry pose when moving with an icon overhead.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Region Rulings
 * ============================================================================
 *
 * These settings allow you to decide the passability of the player, events,
 * and various vehicles through the usage of Regions.
 *
 * ---
 *
 * Allow Regions
 * 
 *   All Allow:
 *   Walk Allow:
 *   Player Allow:
 *   Event Allow:
 *   Vehicle Allow:
 *   Boat Allow:
 *   Ship Allow:
 *   Airship Allow:
 *   - Insert Region ID's where the affected unit type can enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Forbid Regions
 * 
 *   All Forbid:
 *   Walk Forbid:
 *   Player Forbid:
 *   Event Forbid:
 *   Vehicle Forbid:
 *   Boat Forbid:
 *   Ship Forbid:
 *   Airship Forbid:
 *   - Insert Region ID's where the affected unit type cannot enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Dock Regions
 * 
 *   Vehicle Dock:
 *   Boat Dock:
 *   Ship Dock:
 *   Airship Dock:
 *   - Insert Region ID's where the affected vehicle can dock
 *   - Region ID's range from 0 to 255.
 * 
 *   Only Region Dockable:
 *   - Vehicles are only able to dock at designated regions.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on OK Button
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that activate using
 * Regions when pressing the OK button while standing on top of them or in
 * front of them. These let you create near universally interactable objects
 * using Regions, such as rivers to start up fishing events or locations to
 * places items on.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * Target Tile
 * 
 *   Target Tile:
 *   - Which tile should be checked for Common Event on OK Button?
 *     - Tile in front of player.
 *     - Tile player is standing on top of.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on Touch
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that trigger when
 * stepping onto Region-marked tiles. These let you create custom effects that
 * will occur such as customized damage floors, traps, and/or events.
 * 
 * Areas marked with these regions will not allow random encounters to occur.
 * This is how RPG Maker works. Assuming you are not using plugins at all, by
 * putting on touch events all over the map, tiles with those on touch events
 * will not let random encounters trigger.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Terrain Tag Settings
 * ============================================================================
 *
 * Terrain Tags are used in Database => Tilesets to mark certain tiles and
 * give them unique properties through terrain tags.
 *
 * ---
 *
 * Terrain Tag ID's
 * 
 *   Rope:
 *   - Which terrain tag number to use for ropes?
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
 * Version 1.42: June 23, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added to <Copy Event: x, y> notetag help:
 * *** - If '0' is used for the Map ID, reference the current map.
 * * Feature Update!
 * ** Default MZ behavior would have "below characters" trigger events with
 *    only comments lock out facing "same as characters" trigger events. This
 *    is now bypassed. Update made by Arisu.
 * ** The <Copy Event: mapID, eventID> notetags now allow usage of '0' for the
 *    mapID to reference the current map. Update made by Arisu.
 * ** <Save Event Location> should now work more efficiently. Update by Arisu.
 * ** Dashing animations for followers will no longer look weird after having
 *    gathered up and then proceeding to dash. Update made by Irina.
 * * New Features!
 * ** New event notetag added by Arisu:
 * *** <Exit Reset Self Data>
 * **** When the player leaves the current map, all Self Switches and Self
 *      Variables related to this event will be reset.
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Self Data: Reset All
 * **** Reset the Self Switch and Self Variable data of all events within the
 *      specified map.
 * ** New Plugin Parameter added by Arisu and sponsored by Anon:
 * *** Plugin Params > Movement Settings > Dash > Dash on Ladder?
 * **** Allow dashing while on a ladder or rope?
 * 
 * Version 1.41: June 1, 2022
 * * Bug Fixes!
 * ** Parallel Process Common Events above 1000 should no longer crash the
 *    game. Bug fixed by Irina.
 * 
 * Version 1.40: May 19, 2022
 * * Bug Fixes!
 * ** Sprite Event Labels with distance properties will now work properly
 *    when changing from a non-met page condition to a met page condition.
 *    Fix made by Arisu.
 * 
 * Version 1.39: May 5, 2022
 * * Bug Fixes!
 * ** Save event location should now work properly with Set Event Location
 *    command. Fix made by Arisu.
 * ** Sprite Event Labels with distance properties will no longer be visible
 *    when constantly entering/exiting the Main Menu. Fix made by Arisu.
 * 
 * Version 1.38: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu and sponsored by Archeia:
 * *** Plugin Parameters > Movement Settings > Event Movement > Shift Y
 * **** How many pixels should non-tile characters be shifted by?
 * ** New Notetags added by Arisu and sponsored by Archeia:
 * *** <Picture Filename: filename>
 * **** applies a picture graphic from the /img/pictures/ folder of your
 *      game project.
 * **** This graphic will be on top of the character sprite but below the event
 *      icon sprite.
 * **** The picture priority will be the same as the event's priority. If it is
 *      "below characters", the player can walk on top of it. If it is "above
 *      characters", the player will behind it. If it is "same as characters",
 *      the priority will be based on the current relative Y position.
 * *** <Picture Max Size: x>
 * *** <Picture Scale: y%>
 * **** If the "Max Size" or "Scale" supplementary notetags are used, the
 *      picture graphic will be scaled proportionally to fit either the exact
 *      pixel size for "Max Size" or the "Scale" ratio.
 * *** <Picture Offset: +x, +y>
 * *** <Picture Offset: -x, -y>
 * **** Offsets the X and Y position of the event picture relative to the event
 *      sprite's own position.
 * *** <Picture Wait Frames: x>
 * **** Requires VisuMZ_4_AnimatedPictures! "Wait Frames" is used with VisuMZ's
 *      Animated Pictures plugin. This determines the delay inbetween
 *      frame changes.
 * 
 * Version 1.37: March 24, 2022
 * * Documentation Update!
 * ** Added extra clarity to "Turn to Home" Movement Command.
 * *** This refers to the original position's X/Y on the map.
 * *** The event will turn and face the tile that is its original X/Y location.
 * 
 * Version 1.36: March 17, 2022
 * * Bug Fixes!
 * ** "Turn To Home" movement command now properly faces the home position.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.35: March 3, 2022
 * * IMPORTANT! Compatibility Update!
 * ** Compatibility Update with RPG Maker MZ 1.4.4.
 * *** For some reason this update broke any saves made before 1.4.4 was
 *     updated and they cannot be loaded. The only way saves would load is if
 *     you made a safe after 1.4.4 was done. This should be fixed and saves
 *     made with 1.4.3 and before should now be working. Update made by Irina.
 * 
 * Version 1.34: February 17, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * New Features!
 * ** Arisu has created new event notetag/comment tags:
 * *** <Custom Z: x>
 * **** Replace 'x' with a number value to determine the event sprite's Z value
 *      relative to the tilemap.
 * **** View the helpfile for more information.
 * *** <Mirror Sprite>
 * **** The event sprite's visual appearance is mirrored.
 * *** <Move Synch Distance Opacity: x>
 * **** Changes the opacity of the event based on the distance between it and
 *      its move synched target. Closer means more opaque. Further away means
 *      more transparent.
 * ** Irina has created a more memory efficient version of Event Labels.
 * *** Plugin Parameters > Event Label Settings > Sprite Based?
 * **** Use sprite-based labels instead of legacy-window version.
 * **** Legacy-window version will not be supported in future.
 * 
 * Version 1.33: February 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu!
 * *** <Hide Player>
 * *** <Show Player>
 * **** Map Notetag. Forcefully hides or shows the player sprite. This is so
 *      you don't need to manually turn the setting on/off each time you enter
 *      a specific map.
 * *** <Hide Followers>
 * *** <Show Followers>
 * **** Map Notetag. Forcefully hides or shows the player's followers. This is
 *      so you don't need to manually turn them on/off each time you enter a
 *      specific map.
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Self Variable changes from custom move routes should no longer cause
 *    crashes. Fix made by Arisu.
 * ** Self Switch custom move route toggles should now work properly. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Better shadow tracking algorithm to remove any shadow twitching.
 *    Update made by Yanfly.
 * 
 * Version 1.31: January 6, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.30: November 25, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Map Switches and Map Variables added by Arisu:
 * *** Map Switches are self-switches for maps. Instead of using <Self>, use
 *     <Map> in the Switch name to designate it as a Map Switch. The ON/OFF
 *     data for that Switch will vary depending on the map the player is
 *     currently on.
 * *** Map Variables are self-variables for maps. Instead of using <Self>, use
 *     <Map> in the Variable name to designate it as a Map Switch. The number
 *     data for that Variable will vary depending on the map the player is
 *     currently on.
 * *** Script Calls have been added for these features as well.
 * **** See help file for them.
 * 
 * Version 1.29: October 7, 2021
 * * Bug Fixes!
 * ** Same map event spawning should now work properly without the need to add
 *    the current map ID to the preloaded map array. Update made by Arisu.
 * 
 * Version 1.28: September 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New move route commands added by Arisu:
 * *** Jump to Home
 * *** Move to Home
 * *** Crash Move to Home
 * *** Step Toward Home
 * *** Step Away From Home
 * *** Turn to Home
 * *** Turn Away From Home
 * *** Teleport to Home
 * **** These only work on events. Their actions should be reflective of what
 *      their command names suggest.
 * 
 * Version 1.27: September 17, 2021
 * * Bug Fixes!
 * ** Fixed event spawn templates so that they can work properly with Common
 *    Events. Fix made by Arisu.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** "Step Towards Player" custom command should now work properly. Fix made
 *    by Arisu.
 * ** Having multiple region restriction notetags for a map will no longer
 *    cause others to lock out. Fix made by Arisu.
 * 
 * Version 1.25: July 30, 2021
 * * Bug Fixes!
 * ** Fixed a problem that caused the 'setSelfSwitchValue' and
 *    'setSelfVariableValue' functions to not work properly. Fix made by Irina.
 * 
 * Version 1.24: June 4, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added extra clarification on which commands will go around the player
 *    character and which ones won't.
 * * New Move Route Custom Commands added by Arisu:
 * ** Crash Move (direction) Until Stop
 * ** Crash Move To: x, y
 * ** Crash Move To Event: x
 * *** These allow events to collide with the player character and trigger
 *     Event Touch events.
 * 
 * Version 1.23: May 21, 2021
 * * Bug Fixes!
 * ** Morphing by templates should no longer cause a crash. Fix made by Arisu.
 * 
 * Version 1.22: May 7, 2021
 * * Bug Fixes!
 * ** Plugin Commands for Event Label Visibility should now update without
 *    needing to take steps as per distance detection. Fix made by Arisu.
 * * Documentation Update!
 * ** Added clarity to "Common Event on Touch" Plugin Parameters.
 * *** Areas marked with these regions will not allow random encounters to
 *     occur. This is how RPG Maker works. Assuming you are not using plugins
 *     at all, by putting on touch events all over the map, tiles with those on
 *     touch events will not let random encounters trigger.
 * 
 * Version 1.21: March 12, 2021
 * * Bug Fixes!
 * ** Move until stop custom move routes should no longer cause crashes.
 *    Fix made by Arisu.
 * 
 * Version 1.20: February 26, 2021
 * * Bug Fixes!
 * ** Region Restrictions regarding Player Allow will no longer affect vehicle
 *    passability. Update made by Arisu.
 * 
 * Version 1.19: February 12, 2021
 * * Bug Fixes!
 * ** "Self Variable: Variable ID" plugin command's Map ID should now be able
 *    to use "0" to self reference the current map. Fix made by Olivia.
 * 
 * Version 1.18: February 5, 2021
 * * Bug Fixes!
 * ** Event icon plugin commands should now work properly. Fix made by Arisu.
 * * Documentation Update!
 * ** Added new "Features: Weighted Random Movement" section.
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Random Move Weight: x>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then the event will stick closer to their home location (where they are
 *      located upon spawning on the map). How close they stick to their home
 *      location will depend on the weighted 'x' value.
 * *** <True Random Move>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then that event will ignore the effects of weighted randomized
 *      movement.
 * ** New Plugin Commands added by Arisu and sponsored by AndyL:
 * *** Event Timer: Change Speed
 * *** Event Timer: Expire Event Assign
 * *** Event Timer: Expire Event Clear
 * *** Event Timer: Frames Gain
 * *** Event Timer: Frames Set
 * *** Event Timer: Pause
 * *** Event Timer: Resume
 * **** The above Plugin Commands allow you to control the game timer better.
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Movement > Event Movement > Random Move Weight
 * **** Use numbers between 0 and 1. Numbers closer to 1 stay closer to their
 *      home position.
 * 
 * Version 1.17: January 29, 2021
 * * Documentation Update!
 * ** Added "Do NOT insert quotes" to "Balloon: name" and "Pose: name".
 * ** Added Examples for extra clarification.
 * * Optimization Update!
 * ** When touch clicking an event on a map with multiple events, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.16: January 22, 2021
 * * Optimization Update!
 * ** When touch clicking multiple times on an impassable tile, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.15: January 1, 2021
 * * Bug Fixes!
 * ** Spawned events should now resume their automated self movement after
 *    being interacted with. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for updated features.
 * * Feature Updates!
 * ** Collission checks for the Spawn Event Plugin Commands now account for
 *    the spawning event's Hitbox, too. Update made by Yanfly.
 * ** Spawn Event Plugin Commands adds a new parameter "Success Switch ID" to
 *    check if the spawning has been successful or not.
 * * New Features!
 * ** New Plugin Commands added by Yanfly!
 * *** Spawn Event: Spawn At Terrain Tag
 * *** Spawn Event: Despawn Terrain Tag(s)
 * **** These function similar to their region counterparts except they target
 *      terrain tags instead.
 * 
 * Version 1.14: December 18, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for page index.
 *    Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the new features!
 * * New Features!
 * ** New Plugin Commands added by Irina.
 * *** Follower: Set Global Chase
 * *** Follower: Set Target Chase
 * *** Follower: Set Control
 * *** Follower: Reset
 * **** These plugin commands allow you to change whether or not the followers
 *      will chase their intended targets and/or shift control over their
 *      movement route from the "Player" to the target follower.
 * 
 * Version 1.13: December 4, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for one-screen maps.
 *    Fix made by Arisu.
 * 
 * Version 1.12: November 29, 2020
 * * Bug Fixes!
 * ** Click Triggers no longer work on erased events. Fix made by Arisu.
 * ** Erased events no longer have icons appear above their heads.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Initialization of the plugin's effects no only occur if the event's
 *    current page settings have been altered. Change made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 15, 2020
 * * Bug Fixes!
 * ** Morph plugin command should no longer cause crashes. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the updated features!
 * * Feature Updates!
 * ** Updates to these Plugin Commands made by Yanfly:
 * *** Call Event: Remote Activation
 * *** Event Icon: Change
 * *** Event Icon: Delete
 * *** Event Location: Create
 * *** Event Location: Delete
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * *** Morph Event: Change
 * *** Morph Event: Remove
 * *** Self Switch: A B C D
 * *** Self Switch: Switch ID
 * *** Self Variable: Variable ID
 * **** All of the above Plugin Commands can now use 0 for their Event ID's in
 *      order to refer to the running event's ID value.
 * 
 * Version 1.10: November 1, 2020
 * * Bug Fixes!
 * ** Spawned Event preserve function now works properly. Fix made by Arisu.
 * 
 * Version 1.09: October 25, 2020
 * * Documentation Update
 * ** Added clarity on the notetags and comment tags on when their effects
 *    are present.
 * * Feature Update!
 * ** Event icons now have an unsmoothing property to them to make them
 *    look better. Update made by Irina.
 * 
 * Version 1.08: October 11, 2020
 * * Compatibility Update
 * ** Added failsafes for better compatibility.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** Updated for the new features!
 * * Feature Update!
 * ** Data from deleted events will now be cleared and removed from maps if the
 *    events do not exist to prevent conflict with plugins from the VisuStella
 *    MZ library and other plugins. Feature added by Irina.
 * ** Move Route Custom Commands now support self variable values! If you wish
 *    to use a value from a self variable, insert \SelfVar[x] in place of the x
 *    in any of the below. This will only draw from the current event. If you 
 *    wish to draw data from outside event self variables, we recommend you
 *    use the \V[x] variant after using the Plugin Commands to draw data from
 *    them for the best accuracy.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly!
 * *** Movement > Bitmap > Smoothing
 * **** Do you want to smooth or pixelate the map sprites? Pixelating them is
 *      better for zooming and tilting.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Events & Movement Core no longer disables the Core Engine's Smart Event
 *    Collision plugin parameter. Fix made by Yanfly.
 * * Documentation Update!
 * ** Move Route Custom Commands updated with the new feature for inserting
 *    variable values.
 * * Feature Update!
 * ** Move Route Custom Commands now support $gameVariable.value(x) values.
 *    You can also just use \V[x] for variable values, too. Added by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** If player movement is disabled, mouse movement is disabled, too.
 *    Fix made by Arisu.
 * ** The region restriction notetags should be fixed and work again.
 *    Fix made by Arisu.
 * 
 * Version 1.04: September 13, 2020
 * * Feature Update!
 * * Some Move Route Custom Commands are updated to ignore spaces:
 * ** Jump To: x, y
 * ** Move To: x, y
 * ** Step Toward: x, y
 * ** Step Away From: x, y
 * ** Turn To: x, y
 * ** Turn Away From: x, y
 * ** Teleport To: x, y
 * *** These can now be written as x,y. There still needs to be a space between
 *     the : and x for parsing clarity, however.
 * *** Feature updated by Arisu with help from BlueMoon and Zeriab.
 * * New Features!
 * ** New 'Move Route Custom Commands' added by Arisu.
 * *** Fade In: x
 * *** Fade Out: x
 * *** Force Carry: On
 * *** Force Carry: Off
 * *** Force Dash: On
 * *** Force Dash: Off
 * ** New Plugin Commands added by Arisu.
 * *** Player Movement: Control
 * **** Enable or disable player control over the player character's movement.
 * *** Player Movement: Diagonal
 * **** Override settings to for player diagonal movement.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Sleeping pose is now fixed and working! Fix made by Yanfly.
 * * Documentation Update!
 * ** Extended "Features: Self Switches and Variables" to explain how to use
 *    script calls to grab self switch information.
 * * New Features!
 * ** New Plugin Commands added by Yanfly:
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * **** These plugin commands allow you to transfer data stored in a self
 *      switch or Self Variable into a global switch or global variable.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** <Diagonal Movement: Off> notetag now works properly. Fix made by Yanfly.
 * ** Plugin Command "Event Label: Visible" now works properly. Fix made by
 *    Shaz.
 * ** Custom Move Route commands should now be working properly. Fix made by
 *    Shaz.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Event Cache issues fixed upon loading a saved game. Fix made by Yanfly.
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
 * @command Separator_AutoMove
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutoMoveEvents
 * @text Auto Movement: Events
 * @desc Allow/stop events from auto movement.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Allow
 * @value Allow
 * @option Stop
 * @value Stop
 * @option Toggle
 * @value Toggle
 * @desc Allow events to move automatically?
 * @default Allow
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_CallEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallEvent
 * @text Call Event: Remote Activation
 * @desc Runs the page of a different event remotely.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to remotely run. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg PageId:eval
 * @text Page ID
 * @desc The page of the remote event to run.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_DashEnable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DashEnableToggle
 * @text Dash Enable: Toggle
 * @desc Enable/Disable Dashing on maps.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Enable
 * @value Enable
 * @option Disable
 * @value Disable
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change dashing to?
 * @default Enable
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconChange
 * @text Event Icon: Change
 * @desc Change the icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.  Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconDelete
 * @text Event Icon: Delete
 * @desc Delete the icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLabel
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelRefresh
 * @text Event Label: Refresh
 * @desc Refresh all Event Labels on screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelVisible
 * @text Event Label: Visible
 * @desc Change the visibility of Event Labels.
 *
 * @arg Visibility:str
 * @text Visibility
 * @type select
 * @option Visible
 * @value Visible
 * @option Hidden
 * @value Hidden
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change visibility to?
 * @default Visible
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLocation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationSave
 * @text Event Location: Save
 * @desc Memorize an event's map location so it reappears there
 * the next time the map is loaded.
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationCreate
 * @text Event Location: Create
 * @desc Creates a custom spawn location for a specific map's event
 * so it appears there the next time the map is loaded.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent MapId:eval
 * @desc The X coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent MapId:eval
 * @desc The Y coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Direction:num
 * @text Direction
 * @parent MapId:eval
 * @type select
 * @option 1 - Lower Left
 * @value 1
 * @option 2 - Down
 * @value 2
 * @option 3 - Lower Right
 * @value 3
 * @option 4 - Left
 * @value 4
 * @option 6 - Right
 * @value 6
 * @option 7 - Upper Left
 * @value 7
 * @option 8 - Up
 * @value 8
 * @option 9 - Upper Right
 * @value 9
 * @desc The direction the event will be facing.
 * @default 2
 *
 * @arg Optional
 *
 * @arg PageId:eval
 * @text Page ID
 * @parent Optional
 * @desc The page of the event to set the move route to.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg MoveRouteIndex:eval
 * @text Move Route Index
 * @parent Optional
 * @desc The point in the move route for this event to be at
 * if the page ID matches the rest of the page conditions.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationDelete
 * @text Event Location: Delete
 * @desc Deletes an event's saved map location.
 * The event will reappear at its default location.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventTimer
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireEvent
 * @text Event Timer: Expire Event Assign
 * @desc Sets a Common Event to run upon expiration.
 * Bypasses the default code if one is set.
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc Select the Common Event to run upon the timer's expiration.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerSpeed
 * @text Event Timer: Change Speed
 * @desc Changes the timer frame decrease (or increase) speed.
 *
 * @arg Speed:eval
 * @text Speed
 * @desc How many 1/60ths of a second does each frame increase or
 * decrease by? Negative decreases. Positive increases.
 * @default -1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireClear
 * @text Event Timer: Expire Event Clear
 * @desc Clears any set to expire Common Event and instead,
 * run the default Game_Timer expiration code.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesGain
 * @text Event Timer: Frames Gain
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are gained or lost for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc How many 1/60ths of a second are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc How many seconds are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc How many minutes are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc How many hours are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesSet
 * @text Event Timer: Frames Set
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are set for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc Set frame count to this value.
 * Each frame is 1/60th of a second. JavaScript allowed.
 * @default 0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc Set seconds to this value.
 * JavaScript allowed.
 * @default 0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc Set minutes to this value.
 * Each minute is 60 seconds. JavaScript allowed.
 * @default 0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc Set hours to this value.
 * Each hour is 60 minutes. JavaScript allowed.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerPause
 * @text Event Timer: Pause
 * @desc Pauses the current event timer, but does not stop it.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerResume
 * @text Event Timer: Resume
 * @desc Resumes the current event timer from the paused state.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Follower
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetGlobalChase
 * @text Follower: Set Global Chase
 * @desc Disables all followers from chasing the player
 * or reenables it.
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets all followers to chase the player or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetTargetChase
 * @text Follower: Set Target Chase
 * @desc Disables target follower from chasing the player
 * or reenables it.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to disable/reenable chasing for.
 * @default 1
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets target follower to chase its target or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetControl
 * @text Follower: Set Control
 * @desc Sets the event commands to target a follower when "Player"
 * is selected as the target.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to control.
 * 0 is the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerReset
 * @text Follower: Reset
 * @desc Resets all follower controls. Event Commands that target
 * the "Player" return to normal and followers chase again.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchABCD
 * @text Global Switch: Get Self Switch A B C D
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to obtain data from.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchID
 * @text Global Switch: Get Self Switch ID
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the source switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableGetSelfVariableID
 * @text Global Variable: Get Self Variable ID
 * @desc Gets the current stored value from a Self Variable and
 * stores it onto a Global Variable.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the source variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetVariableId:num
 * @text Target Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MorphEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventTo
 * @text Morph Event: Change
 * @desc Runs the page of a different event remotely.
 *
 * @arg Step1
 * @text Step 1: To Be Changed
 *
 * @arg Step1MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step1EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2
 * @text Step 2: Change Into
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step2
 * @desc Name of the target event template to morph into.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg Step2MapId:eval
 * @text Map ID
 * @parent Step2
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2EventId:eval
 * @text Event ID
 * @parent Step2
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2Preserve:eval
 * @text Preserve Morph
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the morph effect preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventRemove
 * @text Morph Event: Remove
 * @desc Remove the morph status of an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the event to remove morph from. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg RemovePreserve:eval
 * @text Remove Preservation
 * @parent Step2
 * @type boolean
 * @on Remove
 * @off Contain
 * @desc Also remove the preservation effect?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconChange
 * @text Player Icon: Change
 * @desc Change the icon that appears on on the player.
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconDelete
 * @text Player Icon: Delete
 * @desc Delete the icon that appears on the player.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerMovement
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementChange
 * @text Player Movement: Control
 * @desc Enable or disable player control over the player character's movement.
 *
 * @arg Enable:eval
 * @text Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Let the player control where the player character moves?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementDiagonal
 * @text Player Movement: Diagonal
 * @desc Override settings to for player diagonal movement.
 *
 * @arg Setting:str
 * @text Setting
 * @type select
 * @option Default: Whatever the Map Uses
 * @value default
 * @option Forcefully Disable Diagonal Movement
 * @value disable
 * @option Forcefully Enable Diagonal Movement
 * @value enable
 * @desc How do you want to change diagonal movement?
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfData
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfDataResetAll
 * @text Self Data: Reset All
 * @desc Reset the Self Switch and Self Variable data of all events
 * within the specified map.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchABCD
 * @text Self Switch: A B C D
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to change.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchID
 * @text Self Switch: Switch ID
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfVariableID
 * @text Self Variable: Variable ID
 * @desc Change the Self Variable of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Operation:str
 * @text Operation
 * @type select
 * @option = Set
 * @value =
 * @option + Add
 * @value +
 * @option - Subtract
 * @value -
 * @option * Multiply
 * @value *
 * @option / Divide
 * @value /
 * @option % Modulus
 * @value %
 * @desc Set the operation used.
 * @default =
 *
 * @arg Break2
 * @text -
 *
 * @arg Value:eval
 * @text Value
 * @desc Insert the value to modify the Self Variable by.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SpawnEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtXY
 * @text Spawn Event: Spawn At X, Y
 * @desc Spawns desired event at X, Y location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtRegion
 * @text Spawn Event: Spawn At Region
 * @desc Spawns desired event at a random region-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) to spawn this event at.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtTerrainTag
 * @text Spawn Event: Spawn At Terrain Tag
 * @desc Spawns desired event at a random terrain tag-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) to spawn this event at.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEventID
 * @text Spawn Event: Despawn Event ID
 * @desc Despawns the selected Event ID on the current map.
 *
 * @arg EventID:eval
 * @text Event ID
 * @type combo
 * @option $gameMap.firstSpawnedEventID()
 * @option $gameMap.lastSpawnedEventID()
 * @option 1001
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default $gameMap.lastSpawnedEventID()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnAtXY
 * @text Spawn Event: Despawn At X, Y
 * @desc Despawns any spawned event(s) at X, Y location on the current map.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnRegions
 * @text Spawn Event: Despawn Region(s)
 * @desc Despawns the selected Region(s) on the current map.
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) and despawn everything inside it.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnTerrainTags
 * @text Spawn Event: Despawn Terrain Tag(s)
 * @desc Despawns the selected Terrain Tags(s) on the current map.
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) and despawn everything inside it.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEverything
 * @text Spawn Event: Despawn Everything
 * @desc Despawns all spawned events on the current map.
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
 * @param EventsMoveCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Label:struct
 * @text Event Label Settings
 * @type struct<Label>
 * @desc Choose settings regarding the Event Labels.
 * @default {"FontSize:num":"22","IconSize:num":"26","LineHeight:num":"30","OffsetX:num":"0","OffsetY:num":"12","OpacitySpeed:num":"16","VisibleRange:num":"30"}
 *
 * @param Icon:struct
 * @text Event Icon Settings
 * @type struct<Icon>
 * @desc Choose settings regarding the Event Icons.
 * @default {"BufferX:num":"0","BufferY:num":"12","BlendMode:num":"0"}
 *
 * @param Template:struct
 * @text Event Template Settings
 * @type struct<Template>
 * @desc Choose settings regarding Event Templates.
 * @default {"Settings":"","PreloadMaps:arraynum":"[\"1\"]","Prefabs":"","List:arraystruct":"[]","JavaScript":"","PreCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\""}
 *
 * @param EventBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Movement:struct
 * @text Movement Settings
 * @type struct<Movement>
 * @desc Change the rules regarding movement in the game.
 * @default {"Dir8":"","EnableDir8:eval":"true","StrictCollision:eval":"true","FavorHorz:eval":"true","SlowerSpeed:eval":"false","DiagonalSpeedMultiplier:num":"0.85","AutoMove":"","StopAutoMoveEvents:eval":"true","StopAutoMoveMessages:eval":"true","Bitmap":"","BitmapSmoothing:eval":"false","Dash":"","DashModifier:num":"+1.0","EnableDashTilt:eval":"true","TiltLeft:num":"-0.15","TiltRight:num":"0.15","TiltVert:num":"0.05","EventMove":"","RandomMoveWeight:num":"0.10","Shadows":"","ShowShadows:eval":"true","DefaultShadow:str":"Shadow1","TurnInPlace":"","EnableTurnInPlace:eval":"false","TurnInPlaceDelay:num":"10","Vehicle":"","BoatSpeed:num":"4.0","ShipSpeed:num":"5.0","AirshipSpeed:num":"6.0"}
 *
 * @param VS8:struct
 * @text VisuStella 8-Dir Settings
 * @type struct<VS8>
 * @desc Choose settings regarding VisuStella 8-Directional Sprites.
 * @default {"Balloons":"","AutoBalloon:eval":"true","BalloonOffsetX:num":"0","BalloonOffsetY:num":"12","Icons":"","AutoBuffer:eval":"true","CarryPose:eval":"true"}
 *
 * @param MovementBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Region:struct
 * @text Region Rulings
 * @type struct<Region>
 * @desc Choose settings regarding regions.
 * @default {"Allow":"","AllAllow:arraynum":"[]","WalkAllow:arraynum":"[]","PlayerAllow:arraynum":"[]","EventAllow:arraynum":"[]","VehicleAllow:arraynum":"[]","BoatAllow:arraynum":"[]","ShipAllow:arraynum":"[]","AirshipAllow:arraynum":"[]","Forbid":"","AllForbid:arraynum":"[]","WalkForbid:arraynum":"[]","PlayerForbid:arraynum":"[]","EventForbid:arraynum":"[]","VehicleForbid:arraynum":"[]","BoatForbid:arraynum":"[]","ShipForbid:arraynum":"[]","AirshipForbid:arraynum":"[]","Dock":"","VehicleDock:arraynum":"[]","BoatDock:arraynum":"[]","BoatDockRegionOnly:eval":"false","ShipDock:arraynum":"[]","ShipDockRegionOnly:eval":"false","AirshipDock:arraynum":"[]","AirshipDockRegionOnly:eval":"false"}
 *
 * @param RegionOk:struct
 * @text Common Event on OK Button
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon pressing the
 * OK button while standing on top of designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param RegionOkTarget:str
 * @text Target Tile
 * @parent RegionOk:struct
 * @type select
 * @option Tile in front of player.
 * @value front
 * @option Tile player is standing on top of.
 * @value standing
 * @desc Which tile should be checked for
 * Common Event on OK Button?
 * @default front
 *
 * @param RegionTouch:struct
 * @text Common Event on Touch
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon stepping the tiles
 * marked by the designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param TerrainTag:struct
 * @text Terrain Tag Settings
 * @type struct<TerrainTag>
 * @desc Choose settings regarding terrain tags.
 * @default {"TerrainTag":"","Rope:num":"1"}
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
 * Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Label:
 *
 * @param SpriteBased:eval
 * @text Sprite Based?
 * @type boolean
 * @on Sprite-Based
 * @off Legacy-Window
 * @desc Use sprite-based labels instead of legacy-window version.
 * Legacy-window version will not be supported in future.
 * @default true
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc The font size used for the Event Labels.
 * @default 22
 *
 * @param IconSize:num
 * @text Icon Size
 * @type number
 * @min 1
 * @desc The size of the icons used in the Event Labels.
 * @default 26
 *
 * @param LineHeight:num
 * @text Line Height
 * @type number
 * @min 1
 * @desc The line height used for the Event Labels.
 * @default 26
 *
 * @param OffsetX:num
 * @text Offset X
 * @type number
 * @min 0
 * @desc Globally offset all labels horizontally by this amount.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @type number
 * @min 0
 * @desc Globally offset all labels vertically by this amount.
 * @default 12
 *
 * @param OpacitySpeed:num
 * @text Fade Speed
 * @type number
 * @min 1
 * @desc Fade speed for labels.
 * @default 16
 *
 * @param VisibleRange:num
 * @text Visible Range
 * @type number
 * @min 1
 * @desc Range the player has to be within the event to make its label visible.
 * @default 30
 *
 */
/* ----------------------------------------------------------------------------
 * Icon Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Icon:
 *
 * @param BufferX:num
 * @text Buffer X
 * @desc Default X position buffer for event icons.
 * @default 0
 *
 * @param BufferY:num
 * @text Buffer Y
 * @desc Default Y position buffer for event icons.
 * @default 12
 *
 * @param BlendMode:num
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
 * @desc Default blend mode for even icons.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Template Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Template:
 *
 * @param Settings
 *
 * @param PreloadMaps:arraynum
 * @text Preloaded Maps
 * @parent Settings
 * @type number[]
 * @desc A list of all the ID's of the maps that will be preloaded
 * to serve as template maps for this plugin.
 * @default ["1"]
 *
 * @param Templates
 *
 * @param List:arraystruct
 * @text Event Template List
 * @parent Templates
 * @type struct<EventTemplate>[]
 * @desc A list of all the Event Templates used by this project.
 * Used for notetags and Plugin Commands.
 * @default []
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Event Template
 * ----------------------------------------------------------------------------
 */
/*~struct~EventTemplate:
 *
 * @param Name:str
 * @text Name
 * @desc Name of the template. It'll be used as anchor points for
 * notetags and Plugin Commands.
 * @default Untitled
 *
 * @param MapID:num
 * @text Map ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the map the template event is stored on.
 * This will automatically add this ID to preloaded list.
 * @default 1
 *
 * @param EventID:num
 * @text Event ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the event the template event is based on.
 * @default 1
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Movement Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Movement:
 *
 * @param Dir8
 * @text 8 Directional Movement
 *
 * @param EnableDir8:eval
 * @text Enable
 * @parent Dir8
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Allow 8-directional movement by default? Players can move diagonally.
 * @default true
 *
 * @param StrictCollision:eval
 * @text Strict Collision
 * @parent Dir8
 * @type boolean
 * @on Strict
 * @off Flexible
 * @desc Enforce strict collission rules where the player must be able to pass both cardinal directions?
 * @default true
 *
 * @param FavorHorz:eval
 * @text Favor Horizontal
 * @parent StrictCollision:eval
 * @type boolean
 * @on Horizontal
 * @off Vertical
 * @desc Favor horizontal if cannot pass diagonally but can pass both horizontally and vertically?
 * @default true
 *
 * @param SlowerSpeed:eval
 * @text Slower Diagonals?
 * @parent Dir8
 * @type boolean
 * @on Slower
 * @off Normal
 * @desc Enforce a slower movement speed when moving diagonally?
 * @default false
 *
 * @param DiagonalSpeedMultiplier:num
 * @text Speed Multiplier
 * @parent SlowerSpeed:eval
 * @desc What's the multiplier to adjust movement speed when moving diagonally?
 * @default 0.85
 *
 * @param AutoMove
 * @text Automatic Movement
 *
 * @param StopAutoMoveEvents:eval
 * @text Stop During Events
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while events are running.
 * @default true
 *
 * @param StopAutoMoveMessages:eval
 * @text Stop During Messages
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while a message is running.
 * @default true
 *
 * @param Bitmap
 *
 * @param BitmapSmoothing:eval
 * @text Smoothing
 * @parent Bitmap
 * @type boolean
 * @on Smooth
 * @off Pixelated
 * @desc Do you want to smooth or pixelate the map sprites?
 * Pixelating them is better for zooming and tilting.
 * @default false
 *
 * @param Dash
 * @text Dash
 *
 * @param DashModifier:num
 * @text Dash Modifier
 * @parent Dash
 * @desc Alters the dash speed modifier.
 * @default +1.0
 *
 * @param DashOnLadder:eval
 * @text Dash On Ladder?
 * @parent Dash
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow dashing while on a ladder or rope?
 * @default false
 *
 * @param EnableDashTilt:eval
 * @text Enable Dash Tilt?
 * @parent Dash
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Tilt any sprites that are currently dashing?
 * @default true
 *
 * @param TiltLeft:num
 * @text Tilt Left Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving left (upper left, left, lower left).
 * @default -0.15
 *
 * @param TiltRight:num
 * @text Tilt Right Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving right (upper right, right, lower right).
 * @default 0.15
 *
 * @param TiltVert:num
 * @text Tilt Vertical Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving vertical (up, down).
 * @default 0.05
 * 
 * @param EventMove
 * @text Event Movement
 *
 * @param RandomMoveWeight:num
 * @text Random Move Weight
 * @parent EventMove
 * @desc Use numbers between 0 and 1. Numbers closer to 1 stay
 * closer to their home position. 0 to disable it.
 * @default 0.10
 *
 * @param ShiftY:num
 * @text Shift Y
 * @parent EventMove
 * @desc How many pixels should non-tile characters be shifted by?
 * Negative: up. Positive: down.
 * @default -6
 *
 * @param Shadows
 *
 * @param ShowShadows:eval
 * @text Show
 * @parent Shadows
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show shadows on all events and player-related sprites.
 * @default true
 *
 * @param DefaultShadow:str
 * @text Default Filename
 * @parent Shadows
 * @type file
 * @dir img/system/
 * @desc Default filename used for shadows found in img/system/ folder.
 * @default Shadow1
 *
 * @param TurnInPlace
 * @text Turn in Place
 *
 * @param EnableTurnInPlace:eval
 * @text Enable
 * @parent TurnInPlace
 * @type boolean
 * @on Turn in Place
 * @off Skip
 * @desc When not dashing, player will turn in place before moving.
 * This only applies with keyboard inputs.
 * @default false
 *
 * @param TurnInPlaceDelay:num
 * @text Delay in Frames
 * @parent TurnInPlace
 * @type number
 * @min 0
 * @desc The number of frames to wait before moving.
 * @default 10
 *
 * @param Vehicle
 * @text Vehicle Speeds
 *
 * @param BoatSpeed:num
 * @text Boat Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the boat vehicle.
 * @default 4.0
 *
 * @param ShipSpeed:num
 * @text Ship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the ship vehicle.
 * @default 5.0
 *
 * @param AirshipSpeed:num
 * @text Airship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the airship vehicle.
 * @default 6.0
 *
 */
/* ----------------------------------------------------------------------------
 * Region Rulings
 * ----------------------------------------------------------------------------
 */
/*~struct~Region:
 *
 * @param Allow
 * @text Allow Regions
 *
 * @param AllAllow:arraynum
 * @text All Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkAllow:arraynum
 * @text Walk Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerAllow:arraynum
 * @text Player Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventAllow:arraynum
 * @text Event Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleAllow:arraynum
 * @text Vehicle Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatAllow:arraynum
 * @text Boat Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipAllow:arraynum
 * @text Ship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipAllow:arraynum
 * @text Airship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Forbid
 * @text Forbid Regions
 *
 * @param AllForbid:arraynum
 * @text All Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkForbid:arraynum
 * @text Walk Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerForbid:arraynum
 * @text Player Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventForbid:arraynum
 * @text Event Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleForbid:arraynum
 * @text Vehicle Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where vehicles cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatForbid:arraynum
 * @text Boat Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipForbid:arraynum
 * @text Ship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipForbid:arraynum
 * @text Airship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Dock
 * @text Dock Regions
 *
 * @param VehicleDock:arraynum
 * @text Vehicle Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDock:arraynum
 * @text Boat Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent BoatDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Boats can only dock at designated regions.
 * @default false
 *
 * @param ShipDock:arraynum
 * @text Ship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent ShipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Ships can only dock at designated regions.
 * @default false
 *
 * @param AirshipDock:arraynum
 * @text Airship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent AirshipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Airships can only dock at designated regions.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Region Common Events
 * ----------------------------------------------------------------------------
 */
/*~struct~RegionCommonEvent:
 *
 * @param Region1:num
 * @text Region 1
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region2:num
 * @text Region 2
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region3:num
 * @text Region 3
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region4:num
 * @text Region 4
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region5:num
 * @text Region 5
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region6:num
 * @text Region 6
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region7:num
 * @text Region 7
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region8:num
 * @text Region 8
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region9:num
 * @text Region 9
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region10:num
 * @text Region 10
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region11:num
 * @text Region 11
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region12:num
 * @text Region 12
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region13:num
 * @text Region 13
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region14:num
 * @text Region 14
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region15:num
 * @text Region 15
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region16:num
 * @text Region 16
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region17:num
 * @text Region 17
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region18:num
 * @text Region 18
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region19:num
 * @text Region 19
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region20:num
 * @text Region 20
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region21:num
 * @text Region 21
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region22:num
 * @text Region 22
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region23:num
 * @text Region 23
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region24:num
 * @text Region 24
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region25:num
 * @text Region 25
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region26:num
 * @text Region 26
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region27:num
 * @text Region 27
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region28:num
 * @text Region 28
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region29:num
 * @text Region 29
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region30:num
 * @text Region 30
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region31:num
 * @text Region 31
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region32:num
 * @text Region 32
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region33:num
 * @text Region 33
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region34:num
 * @text Region 34
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region35:num
 * @text Region 35
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region36:num
 * @text Region 36
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region37:num
 * @text Region 37
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region38:num
 * @text Region 38
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region39:num
 * @text Region 39
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region40:num
 * @text Region 40
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region41:num
 * @text Region 41
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region42:num
 * @text Region 42
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region43:num
 * @text Region 43
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region44:num
 * @text Region 44
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region45:num
 * @text Region 45
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region46:num
 * @text Region 46
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region47:num
 * @text Region 47
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region48:num
 * @text Region 48
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region49:num
 * @text Region 49
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region50:num
 * @text Region 50
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region51:num
 * @text Region 51
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region52:num
 * @text Region 52
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region53:num
 * @text Region 53
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region54:num
 * @text Region 54
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region55:num
 * @text Region 55
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region56:num
 * @text Region 56
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region57:num
 * @text Region 57
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region58:num
 * @text Region 58
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region59:num
 * @text Region 59
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region60:num
 * @text Region 60
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region61:num
 * @text Region 61
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region62:num
 * @text Region 62
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region63:num
 * @text Region 63
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region64:num
 * @text Region 64
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region65:num
 * @text Region 65
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region66:num
 * @text Region 66
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region67:num
 * @text Region 67
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region68:num
 * @text Region 68
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region69:num
 * @text Region 69
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region70:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region71:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region72:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region73:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region74:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region75:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region76:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region77:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region78:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region79:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 90
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 91
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 92
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 93
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 94
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 95
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 96
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 97
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 98
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 99
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region100:num
 * @text Region 100
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region101:num
 * @text Region 101
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region102:num
 * @text Region 102
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region103:num
 * @text Region 103
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region104:num
 * @text Region 104
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region105:num
 * @text Region 105
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region106:num
 * @text Region 106
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region107:num
 * @text Region 107
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region108:num
 * @text Region 108
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region109:num
 * @text Region 109
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region110:num
 * @text Region 110
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region111:num
 * @text Region 111
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region112:num
 * @text Region 112
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region113:num
 * @text Region 113
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region114:num
 * @text Region 114
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region115:num
 * @text Region 115
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region116:num
 * @text Region 116
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region117:num
 * @text Region 117
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region118:num
 * @text Region 118
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region119:num
 * @text Region 119
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region120:num
 * @text Region 120
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region121:num
 * @text Region 121
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region122:num
 * @text Region 122
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region123:num
 * @text Region 123
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region124:num
 * @text Region 124
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region125:num
 * @text Region 125
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region126:num
 * @text Region 126
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region127:num
 * @text Region 127
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region128:num
 * @text Region 128
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region129:num
 * @text Region 129
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region130:num
 * @text Region 130
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region131:num
 * @text Region 131
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region132:num
 * @text Region 132
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region133:num
 * @text Region 133
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region134:num
 * @text Region 134
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region135:num
 * @text Region 135
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region136:num
 * @text Region 136
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region137:num
 * @text Region 137
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region138:num
 * @text Region 138
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region139:num
 * @text Region 139
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region140:num
 * @text Region 140
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region141:num
 * @text Region 141
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region142:num
 * @text Region 142
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region143:num
 * @text Region 143
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region144:num
 * @text Region 144
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region145:num
 * @text Region 145
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region146:num
 * @text Region 146
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region147:num
 * @text Region 147
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region148:num
 * @text Region 148
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region149:num
 * @text Region 149
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region150:num
 * @text Region 150
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region151:num
 * @text Region 151
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region152:num
 * @text Region 152
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region153:num
 * @text Region 153
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region154:num
 * @text Region 154
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region155:num
 * @text Region 155
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region156:num
 * @text Region 156
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region157:num
 * @text Region 157
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region158:num
 * @text Region 158
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region159:num
 * @text Region 159
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region160:num
 * @text Region 160
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region161:num
 * @text Region 161
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region162:num
 * @text Region 162
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region163:num
 * @text Region 163
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region164:num
 * @text Region 164
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region165:num
 * @text Region 165
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region166:num
 * @text Region 166
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region167:num
 * @text Region 167
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region168:num
 * @text Region 168
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region169:num
 * @text Region 169
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region170:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region171:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region172:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region173:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region174:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region175:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region176:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region177:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region178:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region179:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 190
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 191
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 192
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 193
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 194
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 195
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 196
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 197
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 198
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 199
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region200:num
 * @text Region 200
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region201:num
 * @text Region 201
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region202:num
 * @text Region 202
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region203:num
 * @text Region 203
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region204:num
 * @text Region 204
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region205:num
 * @text Region 205
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region206:num
 * @text Region 206
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region207:num
 * @text Region 207
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region208:num
 * @text Region 208
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region209:num
 * @text Region 209
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region210:num
 * @text Region 210
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region211:num
 * @text Region 211
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region212:num
 * @text Region 212
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region213:num
 * @text Region 213
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region214:num
 * @text Region 214
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region215:num
 * @text Region 215
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region216:num
 * @text Region 216
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region217:num
 * @text Region 217
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region218:num
 * @text Region 218
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region219:num
 * @text Region 219
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region220:num
 * @text Region 220
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region221:num
 * @text Region 221
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region222:num
 * @text Region 222
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region223:num
 * @text Region 223
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region224:num
 * @text Region 224
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region225:num
 * @text Region 225
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region226:num
 * @text Region 226
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region227:num
 * @text Region 227
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region228:num
 * @text Region 228
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region229:num
 * @text Region 229
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region230:num
 * @text Region 230
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region231:num
 * @text Region 231
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region232:num
 * @text Region 232
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region233:num
 * @text Region 233
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region234:num
 * @text Region 234
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region235:num
 * @text Region 235
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region236:num
 * @text Region 236
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region237:num
 * @text Region 237
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region238:num
 * @text Region 238
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region239:num
 * @text Region 239
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region240:num
 * @text Region 240
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region241:num
 * @text Region 241
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region242:num
 * @text Region 242
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region243:num
 * @text Region 243
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region244:num
 * @text Region 244
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region245:num
 * @text Region 245
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region246:num
 * @text Region 246
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region247:num
 * @text Region 247
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region248:num
 * @text Region 248
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region249:num
 * @text Region 249
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region250:num
 * @text Region 250
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region251:num
 * @text Region 251
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region252:num
 * @text Region 252
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region253:num
 * @text Region 253
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region254:num
 * @text Region 254
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region255:num
 * @text Region 255
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Terrain Tag Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TerrainTag:
 *
 * @param TerrainTag
 * @text Terrain Tag ID's
 *
 * @param Rope:num
 * @text Rope
 * @parent TerrainTag
 * @type number
 * @min 0
 * @max 7
 * @desc Which terrain tag number to use for ropes?
 * @default 1
 *
 */
/* ----------------------------------------------------------------------------
 * VisuStella 8-Dir Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VS8:
 *
 * @param Balloons
 * @text Balloon Icon Settings
 *
 * @param AutoBalloon:eval
 * @text Auto-Balloon Poses
 * @parent Balloons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically pose VS8 sprites when using balloon icons.
 * @default true
 *
 * @param BalloonOffsetX:num
 * @text Balloon Offset X
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by x pixels.
 * @default 0
 *
 * @param BalloonOffsetY:num
 * @text Balloon Offset Y
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by y pixels.
 * @default 10
 *
 * @param Icons
 * 
 * @param AutoBuffer:eval
 * @text Auto Buffer
 * @parent Icons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically buffer the X and Y coordinates of
 * VS8 sprites?
 * @default true
 * 
 * @param CarryPose:eval
 * @text Use Carry Pose
 * @parent Icons
 * @type boolean
 * @on Carry Pose
 * @off Normal
 * @desc Use the carry pose when moving with an icon overhead.
 * @default true
 *
 */
//=============================================================================

const _0x2a5e1a=_0x1a53;(function(_0x380951,_0x4f368a){const _0x57fa41=_0x1a53,_0x1447ff=_0x380951();while(!![]){try{const _0x31a0be=parseInt(_0x57fa41(0x4e0))/0x1+parseInt(_0x57fa41(0x194))/0x2+-parseInt(_0x57fa41(0x2fd))/0x3*(parseInt(_0x57fa41(0x472))/0x4)+-parseInt(_0x57fa41(0x1db))/0x5+-parseInt(_0x57fa41(0x187))/0x6+parseInt(_0x57fa41(0x316))/0x7+-parseInt(_0x57fa41(0x3ab))/0x8*(parseInt(_0x57fa41(0x2d5))/0x9);if(_0x31a0be===_0x4f368a)break;else _0x1447ff['push'](_0x1447ff['shift']());}catch(_0x738397){_0x1447ff['push'](_0x1447ff['shift']());}}}(_0x3be3,0x6512c));var label=_0x2a5e1a(0x2c1),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x47b392){const _0x4652c5=_0x2a5e1a;return _0x47b392[_0x4652c5(0xe2)]&&_0x47b392['description'][_0x4652c5(0x370)]('['+label+']');})[0x0];VisuMZ[label][_0x2a5e1a(0x14c)]=VisuMZ[label][_0x2a5e1a(0x14c)]||{},VisuMZ[_0x2a5e1a(0x22c)]=function(_0x5dd1d6,_0x45ac19){const _0x56ecd5=_0x2a5e1a;for(const _0x39a09c in _0x45ac19){if(_0x39a09c[_0x56ecd5(0x355)](/(.*):(.*)/i)){const _0x28e7df=String(RegExp['$1']),_0x4fb94b=String(RegExp['$2'])[_0x56ecd5(0x108)]()[_0x56ecd5(0x215)]();let _0x9954ad,_0x56fd92,_0x5304a0;switch(_0x4fb94b){case _0x56ecd5(0x2fa):_0x9954ad=_0x45ac19[_0x39a09c]!==''?Number(_0x45ac19[_0x39a09c]):0x0;break;case _0x56ecd5(0x300):_0x56fd92=_0x45ac19[_0x39a09c]!==''?JSON[_0x56ecd5(0x155)](_0x45ac19[_0x39a09c]):[],_0x9954ad=_0x56fd92[_0x56ecd5(0x1e5)](_0x268842=>Number(_0x268842));break;case _0x56ecd5(0xe5):_0x9954ad=_0x45ac19[_0x39a09c]!==''?eval(_0x45ac19[_0x39a09c]):null;break;case'ARRAYEVAL':_0x56fd92=_0x45ac19[_0x39a09c]!==''?JSON[_0x56ecd5(0x155)](_0x45ac19[_0x39a09c]):[],_0x9954ad=_0x56fd92[_0x56ecd5(0x1e5)](_0x11ff61=>eval(_0x11ff61));break;case _0x56ecd5(0x151):_0x9954ad=_0x45ac19[_0x39a09c]!==''?JSON[_0x56ecd5(0x155)](_0x45ac19[_0x39a09c]):'';break;case _0x56ecd5(0xcd):_0x56fd92=_0x45ac19[_0x39a09c]!==''?JSON['parse'](_0x45ac19[_0x39a09c]):[],_0x9954ad=_0x56fd92[_0x56ecd5(0x1e5)](_0x375026=>JSON[_0x56ecd5(0x155)](_0x375026));break;case _0x56ecd5(0x342):_0x9954ad=_0x45ac19[_0x39a09c]!==''?new Function(JSON[_0x56ecd5(0x155)](_0x45ac19[_0x39a09c])):new Function(_0x56ecd5(0x373));break;case'ARRAYFUNC':_0x56fd92=_0x45ac19[_0x39a09c]!==''?JSON[_0x56ecd5(0x155)](_0x45ac19[_0x39a09c]):[],_0x9954ad=_0x56fd92[_0x56ecd5(0x1e5)](_0x107514=>new Function(JSON[_0x56ecd5(0x155)](_0x107514)));break;case'STR':_0x9954ad=_0x45ac19[_0x39a09c]!==''?String(_0x45ac19[_0x39a09c]):'';break;case _0x56ecd5(0x452):_0x56fd92=_0x45ac19[_0x39a09c]!==''?JSON[_0x56ecd5(0x155)](_0x45ac19[_0x39a09c]):[],_0x9954ad=_0x56fd92[_0x56ecd5(0x1e5)](_0x2518c5=>String(_0x2518c5));break;case _0x56ecd5(0x32e):_0x5304a0=_0x45ac19[_0x39a09c]!==''?JSON[_0x56ecd5(0x155)](_0x45ac19[_0x39a09c]):{},_0x5dd1d6[_0x28e7df]={},VisuMZ[_0x56ecd5(0x22c)](_0x5dd1d6[_0x28e7df],_0x5304a0);continue;case _0x56ecd5(0x47f):_0x56fd92=_0x45ac19[_0x39a09c]!==''?JSON[_0x56ecd5(0x155)](_0x45ac19[_0x39a09c]):[],_0x9954ad=_0x56fd92[_0x56ecd5(0x1e5)](_0x41161c=>VisuMZ[_0x56ecd5(0x22c)]({},JSON[_0x56ecd5(0x155)](_0x41161c)));break;default:continue;}_0x5dd1d6[_0x28e7df]=_0x9954ad;}}return _0x5dd1d6;},(_0x5bafa0=>{const _0x5bc9d7=_0x2a5e1a,_0x9c873e=_0x5bafa0[_0x5bc9d7(0x2d4)];for(const _0x4391de of dependencies){if(!Imported[_0x4391de]){alert(_0x5bc9d7(0x294)[_0x5bc9d7(0x257)](_0x9c873e,_0x4391de)),SceneManager['exit']();break;}}const _0x21d040=_0x5bafa0['description'];if(_0x21d040[_0x5bc9d7(0x355)](/\[Version[ ](.*?)\]/i)){const _0x2c77ec=Number(RegExp['$1']);_0x2c77ec!==VisuMZ[label]['version']&&(alert(_0x5bc9d7(0x2db)[_0x5bc9d7(0x257)](_0x9c873e,_0x2c77ec)),SceneManager[_0x5bc9d7(0x1c1)]());}if(_0x21d040[_0x5bc9d7(0x355)](/\[Tier[ ](\d+)\]/i)){const _0x44659c=Number(RegExp['$1']);_0x44659c<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x5bc9d7(0x257)](_0x9c873e,_0x44659c,tier)),SceneManager[_0x5bc9d7(0x1c1)]()):tier=Math[_0x5bc9d7(0x203)](_0x44659c,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x5bc9d7(0x14c)],_0x5bafa0[_0x5bc9d7(0x1b3)]);})(pluginData),VisuMZ['OperateValues']=function(_0xc3cf5b,_0x492a48,_0x17a8ff){switch(_0x17a8ff){case'=':return _0x492a48;break;case'+':return _0xc3cf5b+_0x492a48;break;case'-':return _0xc3cf5b-_0x492a48;break;case'*':return _0xc3cf5b*_0x492a48;break;case'/':return _0xc3cf5b/_0x492a48;break;case'%':return _0xc3cf5b%_0x492a48;break;}return _0xc3cf5b;},PluginManager['registerCommand'](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x2f7),_0x10f4d9=>{const _0x3109e6=_0x2a5e1a;VisuMZ[_0x3109e6(0x22c)](_0x10f4d9,_0x10f4d9);switch(_0x10f4d9['Value']){case _0x3109e6(0x212):$gameSystem[_0x3109e6(0x128)](!![]);break;case _0x3109e6(0x329):$gameSystem[_0x3109e6(0x128)](![]);break;case _0x3109e6(0x113):$gameSystem[_0x3109e6(0x128)](!$gameSystem['isAllowEventAutoMovement']());break;}}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x460),_0x1f5e03=>{const _0x58393f=_0x2a5e1a;VisuMZ[_0x58393f(0x22c)](_0x1f5e03,_0x1f5e03);const _0x2a4dcf=$gameTemp[_0x58393f(0x4c3)](),_0xa236ba={'mapId':_0x1f5e03[_0x58393f(0x2c9)],'eventId':_0x1f5e03[_0x58393f(0x1b6)]||_0x2a4dcf[_0x58393f(0x1cc)](),'pageId':_0x1f5e03[_0x58393f(0x385)]};if(_0xa236ba[_0x58393f(0x35f)]<=0x0)_0xa236ba['mapId']=$gameMap?$gameMap[_0x58393f(0x35f)]():0x1;$gameTemp[_0x58393f(0x4c3)]()[_0x58393f(0x3df)](_0xa236ba);}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x378),_0x13dc6f=>{const _0x5f17f5=_0x2a5e1a;VisuMZ['ConvertParams'](_0x13dc6f,_0x13dc6f);switch(_0x13dc6f['Value']){case _0x5f17f5(0x3c0):$gameSystem['setDashingEnabled'](!![]);break;case _0x5f17f5(0x3e6):$gameSystem['setDashingEnabled'](![]);break;case _0x5f17f5(0x113):$gameSystem[_0x5f17f5(0x1d4)](!$gameSystem[_0x5f17f5(0x465)]());break;}}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x12b),_0x1572a0=>{const _0x11ea57=_0x2a5e1a;VisuMZ['ConvertParams'](_0x1572a0,_0x1572a0);const _0x4a9014=$gameTemp[_0x11ea57(0x4c3)]();_0x1572a0['MapId']=_0x1572a0[_0x11ea57(0x2c9)]||$gameMap[_0x11ea57(0x35f)](),$gameSystem['setEventIconDataKey'](_0x1572a0[_0x11ea57(0x2c9)],_0x1572a0[_0x11ea57(0x1b6)]||_0x4a9014['eventId'](),_0x1572a0['IconIndex'],_0x1572a0[_0x11ea57(0x25d)],_0x1572a0['IconBufferY'],_0x1572a0[_0x11ea57(0x1bf)]);}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x35d),_0x56d904=>{const _0xb598da=_0x2a5e1a;VisuMZ['ConvertParams'](_0x56d904,_0x56d904);const _0x1101c9=$gameTemp['getLastPluginCommandInterpreter']();_0x56d904[_0xb598da(0x2c9)]=_0x56d904['MapId']||$gameMap[_0xb598da(0x35f)](),$gameSystem[_0xb598da(0xf5)](_0x56d904[_0xb598da(0x2c9)],_0x56d904['EventId']||_0x1101c9['eventId']());}),PluginManager['registerCommand'](pluginData['name'],_0x2a5e1a(0x423),_0x260491=>{const _0x42d9f3=_0x2a5e1a;if($gameMap)for(const _0x818096 of $gameMap[_0x42d9f3(0x2eb)]()){_0x818096[_0x42d9f3(0x2ca)]();}}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x20a),_0x3e75f1=>{const _0x5d110f=_0x2a5e1a;VisuMZ['ConvertParams'](_0x3e75f1,_0x3e75f1);switch(_0x3e75f1[_0x5d110f(0x26e)]){case _0x5d110f(0x403):$gameSystem[_0x5d110f(0x254)](!![]);break;case _0x5d110f(0x19e):$gameSystem[_0x5d110f(0x254)](![]);break;case _0x5d110f(0x113):$gameSystem[_0x5d110f(0x254)](!$gameSystem['eventLabelsVisible']());break;}}),PluginManager[_0x2a5e1a(0x36d)](pluginData['name'],_0x2a5e1a(0xce),_0x35989d=>{const _0x520f0a=_0x2a5e1a;VisuMZ['ConvertParams'](_0x35989d,_0x35989d);const _0x4c9408=$gameTemp[_0x520f0a(0x4c3)]();if(!$gameMap)return;const _0x400d75=$gameMap[_0x520f0a(0x390)](_0x35989d[_0x520f0a(0x1b6)]||_0x4c9408[_0x520f0a(0x1cc)]());if(_0x400d75)_0x400d75[_0x520f0a(0x2b1)]();}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x175),_0x145e40=>{const _0x25bfc2=_0x2a5e1a;VisuMZ[_0x25bfc2(0x22c)](_0x145e40,_0x145e40);const _0x2ac450=$gameTemp['getLastPluginCommandInterpreter'](),_0x27d49d=_0x145e40['MapId']||$gameMap['mapId'](),_0x30c0c0=_0x145e40[_0x25bfc2(0x1b6)]||_0x2ac450[_0x25bfc2(0x1cc)](),_0x3e29f7=_0x145e40['PosX']||0x0,_0x340f65=_0x145e40[_0x25bfc2(0x469)]||0x0,_0x5e823c=_0x145e40[_0x25bfc2(0x13a)]||0x2,_0x19a453=((_0x145e40[_0x25bfc2(0x385)]||0x1)-0x1)[_0x25bfc2(0x374)](0x0,0x13),_0x566d51=_0x145e40['MoveRouteIndex']||0x0;$gameSystem[_0x25bfc2(0x482)](_0x27d49d,_0x30c0c0,_0x3e29f7,_0x340f65,_0x5e823c,_0x19a453,_0x566d51);}),PluginManager[_0x2a5e1a(0x36d)](pluginData['name'],_0x2a5e1a(0x441),_0x44dfee=>{const _0x5f373f=_0x2a5e1a;VisuMZ['ConvertParams'](_0x44dfee,_0x44dfee);const _0x592d1b=$gameTemp['getLastPluginCommandInterpreter'](),_0x1a8191=_0x44dfee[_0x5f373f(0x2c9)]||$gameMap[_0x5f373f(0x35f)](),_0x4b771d=_0x44dfee[_0x5f373f(0x1b6)]||_0x592d1b[_0x5f373f(0x1cc)]();$gameSystem[_0x5f373f(0x43c)](_0x1a8191,_0x4b771d);}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x143),_0x584cb9=>{const _0x2c6859=_0x2a5e1a;VisuMZ[_0x2c6859(0x22c)](_0x584cb9,_0x584cb9);const _0x343bae=_0x584cb9['CommonEventID'];$gameTimer[_0x2c6859(0x41a)](_0x343bae);}),PluginManager['registerCommand'](pluginData[_0x2a5e1a(0x2d4)],'EventTimerExpireClear',_0x53ff04=>{$gameTimer['setCommonEvent'](0x0);}),PluginManager[_0x2a5e1a(0x36d)](pluginData['name'],'EventTimerFramesGain',_0x2b455c=>{const _0x4f4865=_0x2a5e1a;if(!$gameTimer[_0x4f4865(0x438)]())return;VisuMZ[_0x4f4865(0x22c)](_0x2b455c,_0x2b455c);let _0x1f0115=0x0;_0x1f0115+=_0x2b455c['Frames'],_0x1f0115+=_0x2b455c['Seconds']*0x3c,_0x1f0115+=_0x2b455c['Minutes']*0x3c*0x3c,_0x1f0115+=_0x2b455c[_0x4f4865(0x359)]*0x3c*0x3c*0x3c,$gameTimer[_0x4f4865(0x11b)](_0x1f0115);}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x41c),_0xee1bd4=>{const _0x49b812=_0x2a5e1a;if(!$gameTimer[_0x49b812(0x438)]())return;VisuMZ[_0x49b812(0x22c)](_0xee1bd4,_0xee1bd4);let _0x22aed4=0x0;_0x22aed4+=_0xee1bd4[_0x49b812(0x1fd)],_0x22aed4+=_0xee1bd4['Seconds']*0x3c,_0x22aed4+=_0xee1bd4[_0x49b812(0x142)]*0x3c*0x3c,_0x22aed4+=_0xee1bd4['Hours']*0x3c*0x3c*0x3c,$gameTimer['setFrames'](_0x22aed4);}),PluginManager['registerCommand'](pluginData[_0x2a5e1a(0x2d4)],'EventTimerPause',_0x4b6018=>{const _0x416b73=_0x2a5e1a;if(!$gameTimer[_0x416b73(0x438)]())return;$gameTimer['pause']();}),PluginManager[_0x2a5e1a(0x36d)](pluginData['name'],_0x2a5e1a(0x391),_0x1a9e8b=>{const _0x2e3760=_0x2a5e1a;if(!$gameTimer[_0x2e3760(0x438)]())return;$gameTimer['resume']();}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x4b9),_0x4f4078=>{const _0x2bac9c=_0x2a5e1a;VisuMZ['ConvertParams'](_0x4f4078,_0x4f4078);const _0x25da6e=_0x4f4078[_0x2bac9c(0xc2)]||0x0;$gameTimer['changeSpeed'](_0x25da6e);}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],'FollowerSetGlobalChase',_0xd23cc1=>{const _0x5280e6=_0x2a5e1a;VisuMZ[_0x5280e6(0x22c)](_0xd23cc1,_0xd23cc1);const _0x29f3f4=!_0xd23cc1[_0x5280e6(0x23f)];$gameSystem[_0x5280e6(0x304)](_0x29f3f4);}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x2d0),_0x185624=>{const _0x21d7af=_0x2a5e1a;VisuMZ[_0x21d7af(0x22c)](_0x185624,_0x185624);const _0x5cf44e=(_0x185624['FollowerID']||0x0)-0x1,_0x53ae5e=!_0x185624[_0x21d7af(0x23f)],_0x3f7f9b=$gamePlayer[_0x21d7af(0x1ff)]()['follower'](_0x5cf44e);if(_0x3f7f9b)_0x3f7f9b[_0x21d7af(0x17e)](_0x53ae5e);}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x31f),_0x14bb55=>{const _0x40c6df=_0x2a5e1a;VisuMZ[_0x40c6df(0x22c)](_0x14bb55,_0x14bb55);const _0xb89c09=_0x14bb55['FollowerID'];$gameSystem['setControlledFollowerID'](_0xb89c09);}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0xf1),_0x5f5149=>{const _0x1d36f4=_0x2a5e1a;VisuMZ[_0x1d36f4(0x22c)](_0x5f5149,_0x5f5149),$gameSystem[_0x1d36f4(0x11f)](0x0),$gameSystem[_0x1d36f4(0x304)](![]);for(const _0x4b5458 of $gamePlayer[_0x1d36f4(0x1ff)]()['_data']){if(_0x4b5458)_0x4b5458['setChaseOff'](![]);}}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x49a),_0x43fa75=>{const _0x496d6b=_0x2a5e1a;VisuMZ[_0x496d6b(0x22c)](_0x43fa75,_0x43fa75);const _0x768432=$gameTemp[_0x496d6b(0x4c3)]();_0x43fa75[_0x496d6b(0x2c9)]=_0x43fa75['MapId']||$gameMap[_0x496d6b(0x35f)]();const _0x17dd8d=[_0x43fa75['MapId'],_0x43fa75[_0x496d6b(0x1b6)]||_0x768432['eventId'](),_0x43fa75['Letter']],_0x146de6=_0x43fa75[_0x496d6b(0x4ac)],_0x37bff4=$gameSelfSwitches[_0x496d6b(0x436)](_0x17dd8d)||![];$gameSwitches[_0x496d6b(0x166)](_0x146de6,_0x37bff4);}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],'SwitchGetSelfSwitchID',_0xb7a5dc=>{const _0x1c258a=_0x2a5e1a;VisuMZ[_0x1c258a(0x22c)](_0xb7a5dc,_0xb7a5dc);const _0x90cbe6=$gameTemp[_0x1c258a(0x4c3)]();_0xb7a5dc[_0x1c258a(0x2c9)]=_0xb7a5dc[_0x1c258a(0x2c9)]||$gameMap[_0x1c258a(0x35f)]();const _0x2f50ab=[_0xb7a5dc[_0x1c258a(0x2c9)],_0xb7a5dc[_0x1c258a(0x1b6)]||_0x90cbe6[_0x1c258a(0x1cc)](),'Self\x20Switch\x20%1'[_0x1c258a(0x257)](_0xb7a5dc[_0x1c258a(0x160)])],_0x4c1934=_0xb7a5dc[_0x1c258a(0x4ac)],_0x1c03fc=$gameSelfSwitches[_0x1c258a(0x436)](_0x2f50ab)||![];$gameSwitches[_0x1c258a(0x166)](_0x4c1934,_0x1c03fc);}),PluginManager[_0x2a5e1a(0x36d)](pluginData['name'],_0x2a5e1a(0xea),_0x592847=>{const _0x439af3=_0x2a5e1a;VisuMZ[_0x439af3(0x22c)](_0x592847,_0x592847);const _0x5dc8ec=$gameTemp[_0x439af3(0x4c3)]();_0x592847[_0x439af3(0x2c9)]=_0x592847[_0x439af3(0x2c9)]||$gameMap[_0x439af3(0x35f)]();const _0x2f7e71=[_0x592847[_0x439af3(0x2c9)],_0x592847[_0x439af3(0x1b6)]||_0x5dc8ec[_0x439af3(0x1cc)](),_0x439af3(0x1a6)[_0x439af3(0x257)](_0x592847['VariableId'])],_0x2f5ea4=_0x592847[_0x439af3(0x457)],_0x4d47fc=$gameSelfSwitches[_0x439af3(0x436)](_0x2f7e71)||![];$gameVariables[_0x439af3(0x166)](_0x2f5ea4,_0x4d47fc);}),PluginManager[_0x2a5e1a(0x36d)](pluginData['name'],_0x2a5e1a(0x3bb),_0x374859=>{const _0x2dbe96=_0x2a5e1a;VisuMZ[_0x2dbe96(0x22c)](_0x374859,_0x374859);if(!$gameMap)return;const _0x2af92e=$gameTemp['getLastPluginCommandInterpreter'](),_0x240416=_0x374859[_0x2dbe96(0x493)];_0x374859[_0x2dbe96(0x344)]=_0x374859[_0x2dbe96(0x344)]||$gameMap[_0x2dbe96(0x35f)](),_0x374859['Step2MapId']=_0x374859[_0x2dbe96(0x3b7)]||$gameMap['mapId'](),_0x374859['TemplateName']=_0x374859[_0x2dbe96(0x131)]['toUpperCase']()[_0x2dbe96(0x215)]();if(!_0x240416&&_0x374859[_0x2dbe96(0x344)]!==$gameMap[_0x2dbe96(0x35f)]())return;if($gameMap['mapId']()===_0x374859[_0x2dbe96(0x344)]){const _0x57fb7a=$gameMap[_0x2dbe96(0x390)](_0x374859['Step1EventId']||_0x2af92e[_0x2dbe96(0x1cc)]());if(!_0x57fb7a)return;_0x374859[_0x2dbe96(0x131)]!=='UNTITLED'?_0x57fb7a[_0x2dbe96(0x200)](_0x374859[_0x2dbe96(0x131)]):_0x57fb7a[_0x2dbe96(0x424)](_0x374859[_0x2dbe96(0x3b7)],_0x374859['Step2EventId']||_0x2af92e[_0x2dbe96(0x1cc)]());}_0x240416&&$gameSystem['savePreservedMorphEventDataKey'](_0x374859[_0x2dbe96(0x344)],_0x374859['Step1EventId'],_0x374859['TemplateName'],_0x374859[_0x2dbe96(0x3b7)],_0x374859[_0x2dbe96(0x416)]);}),PluginManager['registerCommand'](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x1d7),_0x424950=>{const _0x257726=_0x2a5e1a;VisuMZ[_0x257726(0x22c)](_0x424950,_0x424950);if(!$gameMap)return;const _0x43f730=$gameTemp[_0x257726(0x4c3)]();_0x424950[_0x257726(0x2c9)]=_0x424950[_0x257726(0x2c9)]||$gameMap[_0x257726(0x35f)]();if($gameMap[_0x257726(0x35f)]()===_0x424950[_0x257726(0x2c9)]){const _0x3cc5bf=$gameMap['event'](_0x424950[_0x257726(0x1b6)]||_0x43f730[_0x257726(0x1cc)]());_0x3cc5bf[_0x257726(0x198)]();}_0x424950[_0x257726(0x456)]&&$gameSystem[_0x257726(0x4d4)](_0x424950[_0x257726(0x2c9)],_0x424950[_0x257726(0x1b6)]||_0x43f730[_0x257726(0x1cc)]());}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x333),_0x18e206=>{const _0x1ece20=_0x2a5e1a;VisuMZ[_0x1ece20(0x22c)](_0x18e206,_0x18e206),$gameSystem['setEventIconData']($gamePlayer,_0x18e206['IconIndex'],_0x18e206['IconBufferX'],_0x18e206['IconBufferY'],_0x18e206['IconBlendMode']);}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x4bb),_0x424108=>{const _0xdab477=_0x2a5e1a;VisuMZ[_0xdab477(0x22c)](_0x424108,_0x424108),$gameSystem[_0xdab477(0x3dd)]($gamePlayer);}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x18d),_0x4366ac=>{const _0x1fc175=_0x2a5e1a;VisuMZ[_0x1fc175(0x22c)](_0x4366ac,_0x4366ac),$gameSystem[_0x1fc175(0x4cc)](!_0x4366ac[_0x1fc175(0x3c0)]);}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x3ce),_0x12c721=>{const _0x1b4836=_0x2a5e1a;VisuMZ[_0x1b4836(0x22c)](_0x12c721,_0x12c721),$gameSystem[_0x1b4836(0x3bc)](_0x12c721[_0x1b4836(0x349)]);}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x40a),_0x81c4f0=>{const _0x279582=_0x2a5e1a;VisuMZ['ConvertParams'](_0x81c4f0,_0x81c4f0);const _0x136994=_0x81c4f0[_0x279582(0x2c9)]||$gameMap[_0x279582(0x35f)]();$gameSelfSwitches[_0x279582(0x124)](_0x136994);}),PluginManager[_0x2a5e1a(0x36d)](pluginData['name'],'SelfSwitchABCD',_0x1d8485=>{const _0x58aa17=_0x2a5e1a;VisuMZ[_0x58aa17(0x22c)](_0x1d8485,_0x1d8485);const _0x59e1b8=$gameTemp[_0x58aa17(0x4c3)]();_0x1d8485[_0x58aa17(0x2c9)]=_0x1d8485[_0x58aa17(0x2c9)]||$gameMap['mapId']();const _0x5bb964=[_0x1d8485[_0x58aa17(0x2c9)],_0x1d8485['EventId']||_0x59e1b8['eventId'](),_0x1d8485['Letter']];switch(_0x1d8485[_0x58aa17(0x12c)]){case'ON':$gameSelfSwitches['setValue'](_0x5bb964,!![]);break;case _0x58aa17(0x2e2):$gameSelfSwitches['setValue'](_0x5bb964,![]);break;case _0x58aa17(0x113):$gameSelfSwitches[_0x58aa17(0x166)](_0x5bb964,!$gameSelfSwitches[_0x58aa17(0x436)](_0x5bb964));break;}}),PluginManager['registerCommand'](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x331),_0x428afa=>{const _0x39ecc6=_0x2a5e1a;VisuMZ[_0x39ecc6(0x22c)](_0x428afa,_0x428afa);const _0x2aa41f=$gameTemp[_0x39ecc6(0x4c3)]();_0x428afa[_0x39ecc6(0x2c9)]=_0x428afa[_0x39ecc6(0x2c9)]||$gameMap['mapId']();const _0x538d81=[_0x428afa['MapId'],_0x428afa['EventId']||_0x2aa41f[_0x39ecc6(0x1cc)](),_0x39ecc6(0x2c4)[_0x39ecc6(0x257)](_0x428afa[_0x39ecc6(0x160)])];switch(_0x428afa[_0x39ecc6(0x12c)]){case'ON':$gameSelfSwitches['setValue'](_0x538d81,!![]);break;case _0x39ecc6(0x2e2):$gameSelfSwitches['setValue'](_0x538d81,![]);break;case _0x39ecc6(0x113):$gameSelfSwitches['setValue'](_0x538d81,!$gameSelfSwitches[_0x39ecc6(0x436)](_0x538d81));break;}}),PluginManager['registerCommand'](pluginData['name'],'SelfVariableID',_0x19d547=>{const _0x4a285a=_0x2a5e1a;VisuMZ[_0x4a285a(0x22c)](_0x19d547,_0x19d547);const _0x2384a6=$gameTemp[_0x4a285a(0x4c3)]();_0x19d547['MapId']=_0x19d547[_0x4a285a(0x2c9)]||$gameMap[_0x4a285a(0x35f)]();const _0x167f7c=[_0x19d547[_0x4a285a(0x2c9)],_0x19d547[_0x4a285a(0x1b6)]||_0x2384a6[_0x4a285a(0x1cc)](),'Self\x20Variable\x20%1'[_0x4a285a(0x257)](_0x19d547[_0x4a285a(0x4e9)])],_0x9e4e3b=VisuMZ[_0x4a285a(0x31e)]($gameSelfSwitches[_0x4a285a(0x436)](_0x167f7c),_0x19d547[_0x4a285a(0x12c)],_0x19d547[_0x4a285a(0x49b)]);$gameSelfSwitches[_0x4a285a(0x166)](_0x167f7c,_0x9e4e3b);}),PluginManager[_0x2a5e1a(0x36d)](pluginData['name'],_0x2a5e1a(0x2c5),_0xb71987=>{const _0x339b25=_0x2a5e1a;VisuMZ[_0x339b25(0x22c)](_0xb71987,_0xb71987);const _0x2a2516=$gameTemp[_0x339b25(0x4c3)](),_0x46897f={'template':_0xb71987[_0x339b25(0x131)],'mapId':_0xb71987[_0x339b25(0x2c9)]||$gameMap['mapId'](),'eventId':_0xb71987['EventId']||_0x2a2516[_0x339b25(0x1cc)](),'x':_0xb71987[_0x339b25(0x1ac)],'y':_0xb71987[_0x339b25(0x469)],'spawnPreserved':_0xb71987[_0x339b25(0x309)],'spawnEventId':$gameMap[_0x339b25(0x2bf)]['length']+0x3e8},_0x5c9a3c=_0xb71987[_0x339b25(0x4ab)]||0x0;if(!VisuMZ[_0x339b25(0x1b0)][_0x46897f[_0x339b25(0x35f)]]&&_0x46897f[_0x339b25(0x35f)]!==$gameMap[_0x339b25(0x35f)]()){let _0x56674a=_0x339b25(0xe9)[_0x339b25(0x257)](_0x46897f[_0x339b25(0x35f)]);_0x56674a+=_0x339b25(0x41d),_0x56674a+=_0x339b25(0x26f),_0x56674a+='Plugin\x20Parameters\x20>\x20Event\x20Template\x20Settings\x20>\x0a',_0x56674a+=_0x339b25(0x237)[_0x339b25(0x257)](_0x46897f['mapId']),alert(_0x56674a);return;}const _0x45c85e=$gameMap[_0x339b25(0x19d)](_0x46897f,_0xb71987[_0x339b25(0x35a)],_0xb71987['Passability']);_0x5c9a3c&&$gameSwitches[_0x339b25(0x166)](_0x5c9a3c,!!_0x45c85e);}),PluginManager['registerCommand'](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x2b6),_0x3af2eb=>{const _0x5886fb=_0x2a5e1a;VisuMZ[_0x5886fb(0x22c)](_0x3af2eb,_0x3af2eb);const _0x280564=$gameTemp[_0x5886fb(0x4c3)](),_0xf6085a={'template':_0x3af2eb[_0x5886fb(0x131)],'mapId':_0x3af2eb[_0x5886fb(0x2c9)]||$gameMap[_0x5886fb(0x35f)](),'eventId':_0x3af2eb[_0x5886fb(0x1b6)]||_0x280564['eventId'](),'x':-0x1,'y':-0x1,'spawnPreserved':_0x3af2eb[_0x5886fb(0x309)],'spawnEventId':$gameMap[_0x5886fb(0x2bf)][_0x5886fb(0x396)]+0x3e8},_0x4fdc0f=_0x3af2eb['SuccessSwitchId']||0x0;if(!VisuMZ['PreloadedMaps'][_0xf6085a[_0x5886fb(0x35f)]]&&_0xf6085a['mapId']!==$gameMap['mapId']()){let _0x50bbdc=_0x5886fb(0xe9)[_0x5886fb(0x257)](_0xf6085a[_0x5886fb(0x35f)]);_0x50bbdc+=_0x5886fb(0x41d),_0x50bbdc+=_0x5886fb(0x26f),_0x50bbdc+=_0x5886fb(0x4a3),_0x50bbdc+=_0x5886fb(0x237)['format'](_0xf6085a[_0x5886fb(0x35f)]),alert(_0x50bbdc);return;}const _0x48fff6=$gameMap[_0x5886fb(0x118)](_0xf6085a,_0x3af2eb[_0x5886fb(0x47e)],_0x3af2eb['Collision'],_0x3af2eb[_0x5886fb(0x4c6)]);_0x4fdc0f&&$gameSwitches['setValue'](_0x4fdc0f,!!_0x48fff6);}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],'SpawnEventAtTerrainTag',_0x26ad8e=>{const _0x133ae9=_0x2a5e1a;VisuMZ[_0x133ae9(0x22c)](_0x26ad8e,_0x26ad8e);const _0x374054=$gameTemp[_0x133ae9(0x4c3)](),_0x163528={'template':_0x26ad8e[_0x133ae9(0x131)],'mapId':_0x26ad8e[_0x133ae9(0x2c9)]||$gameMap[_0x133ae9(0x35f)](),'eventId':_0x26ad8e[_0x133ae9(0x1b6)]||_0x374054['eventId'](),'x':-0x1,'y':-0x1,'spawnPreserved':_0x26ad8e[_0x133ae9(0x309)],'spawnEventId':$gameMap['_spawnedEvents']['length']+0x3e8},_0x963e51=_0x26ad8e[_0x133ae9(0x4ab)]||0x0;if(!VisuMZ[_0x133ae9(0x1b0)][_0x163528[_0x133ae9(0x35f)]]&&_0x163528[_0x133ae9(0x35f)]!==$gameMap[_0x133ae9(0x35f)]()){let _0x29fdcc=_0x133ae9(0xe9)[_0x133ae9(0x257)](_0x163528[_0x133ae9(0x35f)]);_0x29fdcc+=_0x133ae9(0x41d),_0x29fdcc+=_0x133ae9(0x26f),_0x29fdcc+='Plugin\x20Parameters\x20>\x20Event\x20Template\x20Settings\x20>\x0a',_0x29fdcc+=_0x133ae9(0x237)['format'](_0x163528[_0x133ae9(0x35f)]),alert(_0x29fdcc);return;}const _0x5b8bd5=$gameMap[_0x133ae9(0x11a)](_0x163528,_0x26ad8e['TerrainTags'],_0x26ad8e[_0x133ae9(0x35a)],_0x26ad8e['Passability']);_0x963e51&&$gameSwitches[_0x133ae9(0x166)](_0x963e51,!!_0x5b8bd5);}),PluginManager[_0x2a5e1a(0x36d)](pluginData['name'],_0x2a5e1a(0xd5),_0x47672b=>{const _0x2b1983=_0x2a5e1a;VisuMZ[_0x2b1983(0x22c)](_0x47672b,_0x47672b);const _0x364b09=$gameTemp[_0x2b1983(0x4c3)]();$gameMap[_0x2b1983(0x21f)](_0x47672b[_0x2b1983(0x145)]||_0x364b09[_0x2b1983(0x1cc)]());}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x1a4),_0x4d11a2=>{const _0x5d43a9=_0x2a5e1a;VisuMZ[_0x5d43a9(0x22c)](_0x4d11a2,_0x4d11a2);const _0x163702=_0x4d11a2['PosX'],_0x5bd229=_0x4d11a2[_0x5d43a9(0x469)];$gameMap[_0x5d43a9(0x1bd)](_0x163702,_0x5bd229);}),PluginManager[_0x2a5e1a(0x36d)](pluginData['name'],'SpawnEventDespawnRegions',_0xe65382=>{const _0xf83272=_0x2a5e1a;VisuMZ[_0xf83272(0x22c)](_0xe65382,_0xe65382),$gameMap['despawnRegions'](_0xe65382[_0xf83272(0x47e)]);}),PluginManager[_0x2a5e1a(0x36d)](pluginData['name'],_0x2a5e1a(0x32d),_0x1706af=>{const _0x3355b2=_0x2a5e1a;VisuMZ[_0x3355b2(0x22c)](_0x1706af,_0x1706af),$gameMap[_0x3355b2(0x4e3)](_0x1706af['TerrainTags']);}),PluginManager[_0x2a5e1a(0x36d)](pluginData[_0x2a5e1a(0x2d4)],_0x2a5e1a(0x37b),_0x1d61a4=>{const _0x50b7fb=_0x2a5e1a;VisuMZ[_0x50b7fb(0x22c)](_0x1d61a4,_0x1d61a4),$gameMap[_0x50b7fb(0x2a0)]();}),VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x3b9)]=Scene_Boot[_0x2a5e1a(0x357)][_0x2a5e1a(0x3a6)],Scene_Boot[_0x2a5e1a(0x357)][_0x2a5e1a(0x3a6)]=function(){const _0x2a2bf4=_0x2a5e1a;VisuMZ[_0x2a2bf4(0x2c1)]['Scene_Boot_onDatabaseLoaded']['call'](this),this[_0x2a2bf4(0x41e)](),this[_0x2a2bf4(0x2d7)]();if(VisuMZ['EventsMoveCore'][_0x2a2bf4(0x27e)])VisuMZ[_0x2a2bf4(0x2c1)][_0x2a2bf4(0x27e)][_0x2a2bf4(0x4a2)]();},VisuMZ[_0x2a5e1a(0x1b0)]=[],VisuMZ['EventTemplates']={},Scene_Boot['prototype']['process_VisuMZ_EventsMoveCore_LoadTemplateMaps']=function(){const _0x2130e3=_0x2a5e1a;if(DataManager[_0x2130e3(0x183)]()||DataManager[_0x2130e3(0x2ab)]())return;const _0x34a034=VisuMZ[_0x2130e3(0x2c1)][_0x2130e3(0x14c)][_0x2130e3(0x220)],_0x186921=_0x34a034['PreloadMaps']['slice'](0x0);for(const _0x42c6bb of _0x34a034[_0x2130e3(0x4cd)]){_0x42c6bb[_0x2130e3(0x3d4)]=_0x42c6bb[_0x2130e3(0x3d4)]['toUpperCase']()[_0x2130e3(0x215)](),VisuMZ[_0x2130e3(0x1cb)][_0x42c6bb[_0x2130e3(0x3d4)]]=_0x42c6bb;if(!_0x186921['includes'](_0x42c6bb[_0x2130e3(0x2b0)]))_0x186921[_0x2130e3(0x4b0)](_0x42c6bb['MapID']);}for(const _0x24d208 of _0x186921){if(VisuMZ[_0x2130e3(0x1b0)][_0x24d208])continue;const _0x50e074=_0x2130e3(0x1d3)[_0x2130e3(0x257)](_0x24d208[_0x2130e3(0x42e)](0x3)),_0x45be65=_0x2130e3(0x1d8)[_0x2130e3(0x257)](_0x24d208);DataManager['loadDataFile'](_0x45be65,_0x50e074),setTimeout(this[_0x2130e3(0x3f2)][_0x2130e3(0x2a1)](this,_0x24d208,_0x45be65),0x64);}},Scene_Boot['prototype']['VisuMZ_Setup_Preload_Map']=function(_0x282726,_0x15dbfc){const _0xded669=_0x2a5e1a;window[_0x15dbfc]?(VisuMZ['PreloadedMaps'][_0x282726]=window[_0x15dbfc],window[_0x15dbfc]=undefined):setTimeout(this[_0xded669(0x3f2)]['bind'](this,_0x282726,_0x15dbfc),0x64);},VisuMZ[_0x2a5e1a(0x397)]=[],VisuMZ['SelfSwitches']=[],VisuMZ[_0x2a5e1a(0x156)]=[],VisuMZ[_0x2a5e1a(0x1e2)]=[],VisuMZ[_0x2a5e1a(0x140)]=[],VisuMZ['MapVariables']=[],Scene_Boot[_0x2a5e1a(0x357)][_0x2a5e1a(0x2d7)]=function(){const _0x3d0471=_0x2a5e1a;for(let _0x3695cf=0x1;_0x3695cf<$dataSystem[_0x3d0471(0x163)][_0x3d0471(0x396)];_0x3695cf++){if($dataSystem[_0x3d0471(0x163)][_0x3695cf]['match'](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ[_0x3d0471(0x397)]['push'](_0x3695cf);if($dataSystem[_0x3d0471(0x163)][_0x3695cf][_0x3d0471(0x355)](/<SELF>/i))VisuMZ['SelfSwitches'][_0x3d0471(0x4b0)](_0x3695cf);if($dataSystem[_0x3d0471(0x163)][_0x3695cf][_0x3d0471(0x355)](/<MAP>/i))VisuMZ[_0x3d0471(0x156)][_0x3d0471(0x4b0)](_0x3695cf);}for(let _0x42752a=0x1;_0x42752a<$dataSystem[_0x3d0471(0x262)][_0x3d0471(0x396)];_0x42752a++){if($dataSystem[_0x3d0471(0x262)][_0x42752a][_0x3d0471(0x355)](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ['AdvancedVariables']['push'](_0x42752a);if($dataSystem[_0x3d0471(0x262)][_0x42752a][_0x3d0471(0x355)](/<SELF>/i))VisuMZ[_0x3d0471(0x140)][_0x3d0471(0x4b0)](_0x42752a);if($dataSystem[_0x3d0471(0x262)][_0x42752a]['match'](/<MAP>/i))VisuMZ[_0x3d0471(0x1f3)][_0x3d0471(0x4b0)](_0x42752a);}},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x27e)]={},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x27e)][_0x2a5e1a(0x4a2)]=function(){const _0x58137f=_0x2a5e1a;this[_0x58137f(0x2bc)]=new Game_CPCInterpreter(),this[_0x58137f(0xd1)]();},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x27e)]['determineCommonEventsWithCPC']=function(){const _0x597b4b=_0x2a5e1a;this['_commonEvents']=[];for(const _0x306d0c of $dataCommonEvents){if(!_0x306d0c)continue;VisuMZ[_0x597b4b(0x2c1)][_0x597b4b(0x27e)]['loadCPC'](_0x306d0c);if(_0x306d0c[_0x597b4b(0x233)][_0x597b4b(0x396)]>0x0)this['_commonEvents']['push'](_0x306d0c['id']);}},VisuMZ[_0x2a5e1a(0x2c1)]['CustomPageConditions'][_0x2a5e1a(0x470)]=function(_0x33f046,_0x41ce67,_0x321818){const _0x51eddd=_0x2a5e1a;return this[_0x51eddd(0x2bc)]['setup'](_0x33f046,_0x41ce67),_0x321818?this[_0x51eddd(0x2bc)][_0x51eddd(0x231)](_0x321818):this[_0x51eddd(0x2bc)][_0x51eddd(0x30d)](),this[_0x51eddd(0x2bc)]['_cpc'];},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x27e)]['loadCPC']=function(_0x46aa31){const _0x37e4a0=_0x2a5e1a;let _0x672d50=![];_0x46aa31[_0x37e4a0(0x233)]=[];for(const _0x452e97 of _0x46aa31['list']){if([0x6c,0x198][_0x37e4a0(0x370)](_0x452e97[_0x37e4a0(0x324)])){const _0x3fd0d6=_0x452e97[_0x37e4a0(0x1b3)][0x0];if(_0x3fd0d6[_0x37e4a0(0x355)](/<PAGE (?:CONDITION|CONDITIONS)>/i))_0x672d50=!![];else _0x3fd0d6[_0x37e4a0(0x355)](/<\/PAGE (?:CONDITION|CONDITIONS)>/i)&&(_0x672d50=![]);}_0x672d50&&_0x46aa31[_0x37e4a0(0x233)]['push'](_0x452e97);}},getSelfSwitchValue=function(_0x50906a,_0x99062d,_0x541036){const _0x2405d2=_0x2a5e1a;let _0x519ea8=[_0x50906a,_0x99062d,_0x2405d2(0x2c4)['format'](_0x541036)];return typeof _0x541036===_0x2405d2(0x23d)&&(_0x519ea8=[_0x50906a,_0x99062d,_0x541036[_0x2405d2(0x108)]()[_0x2405d2(0x215)]()]),$gameSelfSwitches[_0x2405d2(0x436)](_0x519ea8);},getMapSwitchValue=function(_0x5f3575,_0x3490b2){const _0x591287=_0x2a5e1a;let _0x596a89=[0x0,0x0,_0x591287(0x2aa)[_0x591287(0x257)](_0x5f3575,_0x3490b2)];return $gameSelfSwitches['value'](_0x596a89);},getMapVariableValue=function(_0x7f1f68,_0x16a315){const _0x5915ce=_0x2a5e1a;let _0x1249a4=[0x0,0x0,_0x5915ce(0x216)[_0x5915ce(0x257)](_0x7f1f68,_0x16a315)];return $gameSelfSwitches[_0x5915ce(0x436)](_0x1249a4);},getSelfVariableValue=function(_0x578e8e,_0x4742d8,_0x334e18){const _0x22515a=_0x2a5e1a,_0x43c9f3=[_0x578e8e,_0x4742d8,_0x22515a(0x1a6)['format'](_0x334e18)];return $gameSelfSwitches[_0x22515a(0x436)](_0x43c9f3);},setSelfSwitchValue=function(_0x3ea6a4,_0x59b366,_0x1d8dbc,_0x11b70a){const _0x538331=_0x2a5e1a;let _0x306979=[_0x3ea6a4,_0x59b366,_0x538331(0x2c4)[_0x538331(0x257)](_0x1d8dbc)];typeof _0x1d8dbc===_0x538331(0x23d)&&(_0x306979=[_0x3ea6a4,_0x59b366,_0x1d8dbc[_0x538331(0x108)]()[_0x538331(0x215)]()]),$gameSelfSwitches[_0x538331(0x166)](_0x306979,_0x11b70a);},setSelfVariableValue=function(_0xe1f14e,_0x324824,_0x2c7888,_0x424e7c){const _0x47991e=_0x2a5e1a,_0x20ee5f=[_0xe1f14e,_0x324824,'Self\x20Variable\x20%1'[_0x47991e(0x257)](_0x2c7888)];$gameSelfSwitches[_0x47991e(0x166)](_0x20ee5f,_0x424e7c);},setMapSwitchValue=function(_0x866967,_0xda2b65,_0x16dc0d){let _0x1a8bf4=[0x0,0x0,'Map\x20%1\x20Switch\x20%2'['format'](_0x866967,_0xda2b65)];$gameSelfSwitches['setValue'](_0x1a8bf4,_0x16dc0d);},setMapVariableValue=function(_0x46fe2c,_0x12e85f,_0x7d3ba1){const _0x1d2bd0=_0x2a5e1a;let _0x3c7938=[0x0,0x0,'Map\x20%1\x20Variable\x20%2'[_0x1d2bd0(0x257)](_0x46fe2c,_0x12e85f)];$gameSelfSwitches[_0x1d2bd0(0x166)](_0x3c7938,_0x7d3ba1);},DataManager[_0x2a5e1a(0x1a1)]=function(_0x50105c){const _0x80fd2e=_0x2a5e1a;if(SceneManager[_0x80fd2e(0x383)]['constructor']===Scene_Debug)return![];return VisuMZ[_0x80fd2e(0x397)][_0x80fd2e(0x370)](_0x50105c);},DataManager['isAdvancedVariable']=function(_0x4eed84){const _0x2475c2=_0x2a5e1a;if(SceneManager[_0x2475c2(0x383)]['constructor']===Scene_Debug)return![];return VisuMZ[_0x2475c2(0x1e2)][_0x2475c2(0x370)](_0x4eed84);},DataManager[_0x2a5e1a(0x404)]=function(_0x3e5f9c){const _0x556eac=_0x2a5e1a;if(SceneManager[_0x556eac(0x383)][_0x556eac(0x392)]===Scene_Debug)return![];return VisuMZ[_0x556eac(0x208)][_0x556eac(0x370)](_0x3e5f9c);},DataManager[_0x2a5e1a(0x126)]=function(_0x5da178){const _0x25f5e9=_0x2a5e1a;if(SceneManager[_0x25f5e9(0x383)][_0x25f5e9(0x392)]===Scene_Debug)return![];return VisuMZ[_0x25f5e9(0x140)][_0x25f5e9(0x370)](_0x5da178);},DataManager[_0x2a5e1a(0x235)]=function(_0x53c92e){const _0x55d1d9=_0x2a5e1a;if(BattleManager[_0x55d1d9(0x183)]())return![];return VisuMZ[_0x55d1d9(0x156)][_0x55d1d9(0x370)](_0x53c92e);},DataManager['isMapVariable']=function(_0x229544){const _0x1b0d62=_0x2a5e1a;if(BattleManager[_0x1b0d62(0x183)]())return![];return VisuMZ[_0x1b0d62(0x1f3)][_0x1b0d62(0x370)](_0x229544);},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x323)]=Game_Temp[_0x2a5e1a(0x357)]['setDestination'],Game_Temp[_0x2a5e1a(0x357)][_0x2a5e1a(0x272)]=function(_0x538c25,_0x55f01f){const _0x444d49=_0x2a5e1a;if(this[_0x444d49(0x46c)](_0x538c25,_0x55f01f))return;VisuMZ[_0x444d49(0x2c1)]['Game_Temp_setDestination'][_0x444d49(0x2ad)](this,_0x538c25,_0x55f01f);},Game_Temp['prototype'][_0x2a5e1a(0x46c)]=function(_0x3ac730,_0x1268df){const _0x335ff3=_0x2a5e1a,_0x1eed8e=$gameMap['eventsXy'](_0x3ac730,_0x1268df);for(const _0x25d9e2 of _0x1eed8e){if(_0x25d9e2&&_0x25d9e2[_0x335ff3(0x348)]())return _0x25d9e2[_0x335ff3(0x317)](),!![];}return![];},Game_Temp[_0x2a5e1a(0x357)][_0x2a5e1a(0x38b)]=function(_0x52561e){const _0x3c1fb0=_0x2a5e1a;this[_0x3c1fb0(0x34c)]=_0x52561e;},Game_Temp['prototype'][_0x2a5e1a(0x4c3)]=function(){const _0x506c5e=_0x2a5e1a;return this[_0x506c5e(0x34c)];},Game_Temp['prototype'][_0x2a5e1a(0x28d)]=function(_0x192bd7){this['_selfTarget']=_0x192bd7;},Game_Temp[_0x2a5e1a(0x357)][_0x2a5e1a(0x285)]=function(){this['_selfTarget']=undefined;},Game_Temp['prototype']['getSelfTarget']=function(){const _0x6eb76b=_0x2a5e1a;return this[_0x6eb76b(0x3d2)];},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x1e4)]=Game_System['prototype'][_0x2a5e1a(0x4a2)],Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x4a2)]=function(){const _0x386ac9=_0x2a5e1a;VisuMZ[_0x386ac9(0x2c1)][_0x386ac9(0x1e4)][_0x386ac9(0x2ad)](this),this[_0x386ac9(0x158)](),this[_0x386ac9(0x42b)]();},Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x158)]=function(){const _0x30b97c=_0x2a5e1a;this[_0x30b97c(0x320)]={'DashingEnable':!![],'EventAutoMovement':!![],'VisibleEventLabels':!![]},this[_0x30b97c(0x406)]={},this['_MapSpawnedEventData']=[],this[_0x30b97c(0x4dc)]={},this[_0x30b97c(0x1ed)]={},this[_0x30b97c(0xc4)]=![],this[_0x30b97c(0x147)]=_0x30b97c(0xd9);},Game_System['prototype'][_0x2a5e1a(0x465)]=function(){const _0x25fc49=_0x2a5e1a;if(this[_0x25fc49(0x320)]===undefined)this[_0x25fc49(0x158)]();if(this[_0x25fc49(0x320)]['DashingEnable']===undefined)this[_0x25fc49(0x158)]();return this['_EventsMoveCoreSettings'][_0x25fc49(0x1a9)];},Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x1d4)]=function(_0x6255c2){const _0x1086e3=_0x2a5e1a;if(this[_0x1086e3(0x320)]===undefined)this[_0x1086e3(0x158)]();if(this[_0x1086e3(0x320)][_0x1086e3(0x1a9)]===undefined)this[_0x1086e3(0x158)]();this[_0x1086e3(0x320)][_0x1086e3(0x1a9)]=_0x6255c2;},Game_System[_0x2a5e1a(0x357)]['isAllowEventAutoMovement']=function(){const _0x2625e8=_0x2a5e1a;if(this[_0x2625e8(0x320)]===undefined)this[_0x2625e8(0x158)]();if(this[_0x2625e8(0x320)][_0x2625e8(0x1f6)]===undefined)this[_0x2625e8(0x158)]();return this[_0x2625e8(0x320)][_0x2625e8(0x1f6)];},Game_System['prototype']['setAllowEventAutoMovement']=function(_0x45b532){const _0x5b6290=_0x2a5e1a;if(this['_EventsMoveCoreSettings']===undefined)this[_0x5b6290(0x158)]();if(this[_0x5b6290(0x320)][_0x5b6290(0x1f6)]===undefined)this[_0x5b6290(0x158)]();this[_0x5b6290(0x320)]['EventAutoMovement']=_0x45b532;},Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x258)]=function(){const _0x341f38=_0x2a5e1a;if(this[_0x341f38(0x320)]===undefined)this['initEventsMoveCore']();if(this[_0x341f38(0x320)]['VisibleEventLabels']===undefined)this[_0x341f38(0x158)]();return this['_EventsMoveCoreSettings'][_0x341f38(0x45b)];},Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x254)]=function(_0x56e44c){const _0x3535cd=_0x2a5e1a;if(this[_0x3535cd(0x320)]===undefined)this['initEventsMoveCore']();if(this[_0x3535cd(0x320)]['VisibleEventLabels']===undefined)this[_0x3535cd(0x158)]();this[_0x3535cd(0x320)]['VisibleEventLabels']=_0x56e44c;},Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x4c9)]=function(){const _0x309f82=_0x2a5e1a;return this[_0x309f82(0xc4)]===undefined&&(this[_0x309f82(0xc4)]=![]),this[_0x309f82(0xc4)];},Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x4cc)]=function(_0x407291){this['_DisablePlayerControl']=_0x407291;},Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x321)]=function(){const _0x19efc5=_0x2a5e1a;return this[_0x19efc5(0x147)];},Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x3bc)]=function(_0x2967d0){const _0x263d0c=_0x2a5e1a;this[_0x263d0c(0x147)]=String(_0x2967d0)[_0x263d0c(0x2c7)]()[_0x263d0c(0x215)]();},Game_System['prototype'][_0x2a5e1a(0x429)]=function(_0x303136){const _0x3ba14e=_0x2a5e1a;if(this[_0x3ba14e(0x406)]===undefined)this['initEventsMoveCore']();if(!_0x303136)return null;if(_0x303136===$gamePlayer)return this[_0x3ba14e(0x406)][_0x3ba14e(0x1e1)];else{const _0x32d2c0=VisuMZ[_0x3ba14e(0x2c1)][_0x3ba14e(0x14c)],_0x371d55='Map%1-Event%2'[_0x3ba14e(0x257)](_0x303136[_0x3ba14e(0x49f)],_0x303136[_0x3ba14e(0xc7)]);return this[_0x3ba14e(0x406)][_0x371d55]=this[_0x3ba14e(0x406)][_0x371d55]||{'iconIndex':0x0,'bufferX':_0x32d2c0[_0x3ba14e(0x346)][_0x3ba14e(0x3a2)],'bufferY':_0x32d2c0[_0x3ba14e(0x346)][_0x3ba14e(0x2e5)],'blendMode':_0x32d2c0['Icon']['BlendMode']},this[_0x3ba14e(0x406)][_0x371d55];}},Game_System[_0x2a5e1a(0x357)]['setEventIconData']=function(_0x20cd3f,_0x175a43,_0x5227cd,_0x551278,_0x39d3ff){const _0x3cac4a=_0x2a5e1a;if(this[_0x3cac4a(0x406)]===undefined)this[_0x3cac4a(0x158)]();const _0x406a5d=_0x20cd3f===$gamePlayer?_0x3cac4a(0x1e1):_0x3cac4a(0x246)['format'](_0x20cd3f[_0x3cac4a(0x49f)],_0x20cd3f[_0x3cac4a(0xc7)]);this['_EventIcons'][_0x406a5d]={'iconIndex':_0x175a43,'bufferX':_0x5227cd,'bufferY':_0x551278,'blendMode':_0x39d3ff};},Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x174)]=function(_0xe6406c,_0x2fb148,_0x55ead1,_0x4c09ff,_0x59385d,_0x57403c){const _0x509226=_0x2a5e1a;if(this['_EventIcons']===undefined)this[_0x509226(0x158)]();const _0x37d39c=_0x509226(0x246)[_0x509226(0x257)](_0xe6406c,_0x2fb148);this['_EventIcons'][_0x37d39c]={'iconIndex':_0x55ead1,'bufferX':_0x4c09ff,'bufferY':_0x59385d,'blendMode':_0x57403c};},Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x3dd)]=function(_0x5626ba){const _0x4794e1=_0x2a5e1a;if(this[_0x4794e1(0x406)]===undefined)this[_0x4794e1(0x158)]();if(!_0x5626ba)return null;_0x5626ba===$gamePlayer?delete this[_0x4794e1(0x406)]['Player']:this['deleteIconsOnEventsDataKey'](_0x5626ba['_mapId'],_0x5626ba[_0x4794e1(0xc7)]);},Game_System[_0x2a5e1a(0x357)]['deleteIconsOnEventsDataKey']=function(_0x3f390,_0x2a12f9){const _0xc623ac=_0x2a5e1a;if(this[_0xc623ac(0x406)]===undefined)this[_0xc623ac(0x158)]();const _0x540d4a=_0xc623ac(0x246)[_0xc623ac(0x257)](_0x3f390,_0x2a12f9);delete this['_EventIcons'][_0x540d4a];},Game_System['prototype'][_0x2a5e1a(0x170)]=function(_0xf11f1c){const _0x2f2666=_0x2a5e1a;if(this[_0x2f2666(0x1ed)]===undefined)this[_0x2f2666(0x158)]();if(!_0xf11f1c)return null;const _0x1eca09='Map%1-Event%2'[_0x2f2666(0x257)](_0xf11f1c[_0x2f2666(0x49f)],_0xf11f1c['_eventId']);return this['_SavedEventLocations'][_0x1eca09];},Game_System[_0x2a5e1a(0x357)]['saveEventLocation']=function(_0x631e24){const _0x344979=_0x2a5e1a;if(this[_0x344979(0x1ed)]===undefined)this['initEventsMoveCore']();if(!_0x631e24)return;const _0x534efd=_0x344979(0x246)[_0x344979(0x257)](_0x631e24[_0x344979(0x49f)],_0x631e24[_0x344979(0xc7)]);this[_0x344979(0x1ed)][_0x534efd]={'direction':_0x631e24[_0x344979(0x138)](),'x':Math[_0x344979(0x394)](_0x631e24['x']),'y':Math[_0x344979(0x394)](_0x631e24['y']),'pageIndex':_0x631e24[_0x344979(0xc1)],'moveRouteIndex':_0x631e24['_moveRouteIndex']};},Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x3b2)]=function(_0x36206c){const _0x1e9c27=_0x2a5e1a;if(this[_0x1e9c27(0x1ed)]===undefined)this[_0x1e9c27(0x158)]();if(!_0x36206c)return;this[_0x1e9c27(0x43c)](_0x36206c[_0x1e9c27(0x49f)],_0x36206c['_eventId']);},Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x43c)]=function(_0x18a1a3,_0x368631){const _0x53380c=_0x2a5e1a;if(this[_0x53380c(0x1ed)]===undefined)this[_0x53380c(0x158)]();const _0x395d64=_0x53380c(0x246)['format'](_0x18a1a3,_0x368631);delete this[_0x53380c(0x1ed)][_0x395d64];},Game_System[_0x2a5e1a(0x357)]['createSaveEventLocationData']=function(_0x40b523,_0x50f3c2,_0x290cd4,_0x18c49d,_0x50e17e,_0x1c644e,_0x5ed585){const _0x1b471d=_0x2a5e1a;if(this[_0x1b471d(0x1ed)]===undefined)this[_0x1b471d(0x158)]();const _0x2bfeb3=_0x1b471d(0x246)[_0x1b471d(0x257)](_0x40b523,_0x50f3c2);this[_0x1b471d(0x1ed)][_0x2bfeb3]={'direction':_0x50e17e,'x':Math[_0x1b471d(0x394)](_0x290cd4),'y':Math['round'](_0x18c49d),'pageIndex':_0x1c644e,'moveRouteIndex':_0x5ed585};},Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x30e)]=function(_0xe444ab){const _0x53463f=_0x2a5e1a;if(this[_0x53463f(0x4dc)]===undefined)this[_0x53463f(0x158)]();if(!_0xe444ab)return;const _0x7a2024='Map%1-Event%2'[_0x53463f(0x257)](_0xe444ab[_0x53463f(0x49f)],_0xe444ab[_0x53463f(0xc7)]);return this[_0x53463f(0x4dc)][_0x7a2024];},Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x2b3)]=function(_0x510ab2,_0xa1e1de,_0x966eab,_0x46fe73,_0x3a1f1f){const _0x57ee38=_0x2a5e1a;if(this[_0x57ee38(0x4dc)]===undefined)this[_0x57ee38(0x158)]();const _0x4635c5=_0x57ee38(0x246)['format'](_0x510ab2,_0xa1e1de);this[_0x57ee38(0x4dc)][_0x4635c5]={'template':_0x966eab,'mapId':_0x46fe73,'eventId':_0x3a1f1f};},Game_System['prototype'][_0x2a5e1a(0x4d4)]=function(_0x5aa2cd,_0x4262cb){const _0x36de9e=_0x2a5e1a;if(this[_0x36de9e(0x4dc)]===undefined)this['initEventsMoveCore']();const _0x3810b1=_0x36de9e(0x246)['format'](_0x5aa2cd,_0x4262cb);delete this[_0x36de9e(0x4dc)][_0x3810b1];},Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x4b7)]=function(_0x2cea63){const _0xdda09c=_0x2a5e1a;if(this[_0xdda09c(0x31a)]===undefined)this[_0xdda09c(0x158)]();return this[_0xdda09c(0x31a)][_0x2cea63]=this[_0xdda09c(0x31a)][_0x2cea63]||[],this[_0xdda09c(0x31a)][_0x2cea63];},Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x4c7)]=function(_0x56327a){const _0xf5d4d3=_0x2a5e1a,_0x3abc48=this['getMapSpawnedEventData'](_0x56327a);for(const _0x252b43 of _0x3abc48){if(!_0x252b43)continue;if(_0x252b43['_spawnPreserved'])continue;const _0x22ff39=_0x3abc48[_0xf5d4d3(0x1f9)](_0x252b43);_0x3abc48[_0x22ff39]=null;}},Game_System[_0x2a5e1a(0x357)]['initFollowerController']=function(){const _0x2af3d7=_0x2a5e1a;this[_0x2af3d7(0x292)]=0x0,this[_0x2af3d7(0x3dc)]=![];},Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x2c6)]=function(){const _0x12b789=_0x2a5e1a;if(this[_0x12b789(0x292)]===undefined)this[_0x12b789(0x42b)]();return this['_followerControlID'];},Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x11f)]=function(_0x5a2b4b){const _0x3f0d64=_0x2a5e1a;if(this[_0x3f0d64(0x292)]===undefined)this[_0x3f0d64(0x42b)]();this['_followerControlID']=_0x5a2b4b;;},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x21e)]=Game_Interpreter[_0x2a5e1a(0x357)][_0x2a5e1a(0x248)],Game_Interpreter[_0x2a5e1a(0x357)]['character']=function(_0x289e40){const _0x579119=_0x2a5e1a;if(!$gameParty[_0x579119(0x38d)]()&&_0x289e40<0x0){let _0x1ebc34=$gameSystem[_0x579119(0x2c6)]();if(_0x1ebc34>0x0)return $gamePlayer['followers']()[_0x579119(0x164)](_0x1ebc34-0x1);}return VisuMZ[_0x579119(0x2c1)][_0x579119(0x21e)]['call'](this,_0x289e40);},Game_System[_0x2a5e1a(0x357)][_0x2a5e1a(0x234)]=function(){if(this['_followerChaseOff']===undefined)this['initFollowerController']();return this['_followerChaseOff'];},Game_System[_0x2a5e1a(0x357)]['setStopFollowerChasing']=function(_0x2ab328){const _0xec615f=_0x2a5e1a;if(this[_0xec615f(0x3dc)]===undefined)this[_0xec615f(0x42b)]();this[_0xec615f(0x3dc)]=_0x2ab328;;},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0xd4)]=Game_Timer[_0x2a5e1a(0x357)][_0x2a5e1a(0x4a2)],Game_Timer[_0x2a5e1a(0x357)][_0x2a5e1a(0x4a2)]=function(){const _0x21967a=_0x2a5e1a;VisuMZ[_0x21967a(0x2c1)]['Game_Timer_initialize'][_0x21967a(0x2ad)](this),this[_0x21967a(0x158)]();},Game_Timer[_0x2a5e1a(0x357)][_0x2a5e1a(0x158)]=function(){const _0x12059a=_0x2a5e1a;this[_0x12059a(0x451)]=![],this[_0x12059a(0x449)]=-0x1,this[_0x12059a(0x190)]=0x0;},Game_Timer['prototype'][_0x2a5e1a(0x125)]=function(_0x1bd8fa){const _0x374c8e=_0x2a5e1a;if(!_0x1bd8fa)return;if(!this[_0x374c8e(0x302)])return;if(this['_paused'])return;if(this[_0x374c8e(0x33b)]<=0x0)return;if(this[_0x374c8e(0x449)]===undefined)this[_0x374c8e(0x158)]();this[_0x374c8e(0x33b)]+=this[_0x374c8e(0x449)],this[_0x374c8e(0x33b)]<=0x0&&this[_0x374c8e(0x284)]();},VisuMZ['EventsMoveCore'][_0x2a5e1a(0x268)]=Game_Timer[_0x2a5e1a(0x357)]['start'],Game_Timer[_0x2a5e1a(0x357)][_0x2a5e1a(0x311)]=function(_0x115183){const _0x4cb2c4=_0x2a5e1a;VisuMZ[_0x4cb2c4(0x2c1)][_0x4cb2c4(0x268)]['call'](this,_0x115183);if(this[_0x4cb2c4(0x451)]===undefined)this['initEventsMoveCore']();this[_0x4cb2c4(0x451)]=![];},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x2dc)]=Game_Timer[_0x2a5e1a(0x357)]['stop'],Game_Timer[_0x2a5e1a(0x357)][_0x2a5e1a(0x27f)]=function(){const _0x5be695=_0x2a5e1a;VisuMZ['EventsMoveCore'][_0x5be695(0x2dc)]['call'](this);if(this[_0x5be695(0x451)]===undefined)this[_0x5be695(0x158)]();this[_0x5be695(0x451)]=![];},Game_Timer[_0x2a5e1a(0x357)][_0x2a5e1a(0x42a)]=function(){const _0x22145d=_0x2a5e1a;if(this[_0x22145d(0x33b)]<=0x0)return;this[_0x22145d(0x451)]=!![],this[_0x22145d(0x302)]=!![];},Game_Timer['prototype'][_0x2a5e1a(0x2f3)]=function(){const _0xf671d2=_0x2a5e1a;if(this['_frames']<=0x0)return;this['_paused']=![],this[_0xf671d2(0x302)]=!![];},Game_Timer[_0x2a5e1a(0x357)][_0x2a5e1a(0x11b)]=function(_0x4bbbfe){const _0x5d51b9=_0x2a5e1a;this[_0x5d51b9(0x33b)]=this['_frames']||0x0,this[_0x5d51b9(0x33b)]+=_0x4bbbfe,this[_0x5d51b9(0x302)]=!![],this['_frames']=Math['max'](0x1,this['_frames']);},Game_Timer[_0x2a5e1a(0x357)]['setFrames']=function(_0x9dbaac){const _0x1aa4be=_0x2a5e1a;this[_0x1aa4be(0x33b)]=this['_frames']||0x0,this[_0x1aa4be(0x33b)]=_0x9dbaac,this[_0x1aa4be(0x302)]=!![],this[_0x1aa4be(0x33b)]=Math[_0x1aa4be(0x203)](0x1,this[_0x1aa4be(0x33b)]);},Game_Timer['prototype']['changeSpeed']=function(_0x2c86ff){const _0x33f579=_0x2a5e1a;this[_0x33f579(0x449)]=_0x2c86ff,this[_0x33f579(0x302)]=!![],_0x2c86ff>0x0&&(this[_0x33f579(0x33b)]=Math[_0x33f579(0x203)](this[_0x33f579(0x33b)],0x1));},Game_Timer[_0x2a5e1a(0x357)]['setCommonEvent']=function(_0x5eb6af){const _0x45b07e=_0x2a5e1a;if(this[_0x45b07e(0x190)]===undefined)this[_0x45b07e(0x158)]();this['_expireCommonEvent']=_0x5eb6af;},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x105)]=Game_Timer[_0x2a5e1a(0x357)][_0x2a5e1a(0x284)],Game_Timer[_0x2a5e1a(0x357)]['onExpire']=function(){const _0x4f9f9c=_0x2a5e1a;if(this[_0x4f9f9c(0x190)]===undefined)this[_0x4f9f9c(0x158)]();this[_0x4f9f9c(0x190)]?$gameTemp['reserveCommonEvent'](this[_0x4f9f9c(0x190)]):VisuMZ['EventsMoveCore'][_0x4f9f9c(0x105)]['call'](this);},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x2e7)]=Game_Message[_0x2a5e1a(0x357)][_0x2a5e1a(0x46e)],Game_Message[_0x2a5e1a(0x357)][_0x2a5e1a(0x46e)]=function(_0x560a6f){const _0xc3f756=_0x2a5e1a;VisuMZ[_0xc3f756(0x2c1)][_0xc3f756(0x2e7)][_0xc3f756(0x2ad)](this,_0x560a6f),this[_0xc3f756(0x4d3)]=$gameTemp[_0xc3f756(0x358)]();},Game_Message['prototype'][_0x2a5e1a(0x225)]=function(){const _0x4e32a6=_0x2a5e1a;$gameTemp['registerSelfTarget'](this[_0x4e32a6(0x4d3)]);},VisuMZ['EventsMoveCore'][_0x2a5e1a(0x289)]=Game_Switches[_0x2a5e1a(0x357)][_0x2a5e1a(0x436)],Game_Switches[_0x2a5e1a(0x357)][_0x2a5e1a(0x436)]=function(_0x5f2db4){const _0x1fc527=_0x2a5e1a;if(DataManager[_0x1fc527(0x1a1)](_0x5f2db4))return!!this['advancedValue'](_0x5f2db4);else{if(DataManager[_0x1fc527(0x404)](_0x5f2db4))return!!this['selfValue'](_0x5f2db4);else return DataManager[_0x1fc527(0x235)](_0x5f2db4)?!!this[_0x1fc527(0x12e)](_0x5f2db4):VisuMZ['EventsMoveCore'][_0x1fc527(0x289)][_0x1fc527(0x2ad)](this,_0x5f2db4);}},Game_Switches[_0x2a5e1a(0x2ef)]={},Game_Switches[_0x2a5e1a(0x357)][_0x2a5e1a(0x3a1)]=function(_0x4d5891){const _0x1e8e7d=_0x2a5e1a;if(!Game_Switches[_0x1e8e7d(0x2ef)][_0x4d5891]){$dataSystem['switches'][_0x4d5891][_0x1e8e7d(0x355)](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x3a0f1f='return\x20%1'[_0x1e8e7d(0x257)](String(RegExp['$1']));Game_Switches[_0x1e8e7d(0x2ef)][_0x4d5891]=new Function(_0x1e8e7d(0x4bf),_0x3a0f1f);}const _0x2da83a=$gameTemp[_0x1e8e7d(0x358)]()||this;return Game_Switches[_0x1e8e7d(0x2ef)][_0x4d5891][_0x1e8e7d(0x2ad)](_0x2da83a,_0x4d5891);},Game_Switches[_0x2a5e1a(0x357)]['selfValue']=function(_0x300cf6){const _0x2c05bc=_0x2a5e1a,_0x2bdd06=$gameTemp[_0x2c05bc(0x358)]()||this;if(_0x2bdd06[_0x2c05bc(0x392)]!==Game_Event)return VisuMZ[_0x2c05bc(0x2c1)]['Game_Switches_value'][_0x2c05bc(0x2ad)](this,_0x300cf6);else{const _0x48ce7c=[_0x2bdd06[_0x2c05bc(0x49f)],_0x2bdd06['_eventId'],_0x2c05bc(0x2c4)['format'](_0x300cf6)];return $gameSelfSwitches['value'](_0x48ce7c);}},Game_Switches['prototype'][_0x2a5e1a(0x12e)]=function(_0x402887){const _0x3dea84=_0x2a5e1a,_0x41dc0e=$gameMap?$gameMap['mapId']():0x0,_0x59af02=[0x0,0x0,_0x3dea84(0x2aa)[_0x3dea84(0x257)](_0x41dc0e,_0x402887)];return $gameSelfSwitches[_0x3dea84(0x436)](_0x59af02);},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x1f0)]=Game_Switches[_0x2a5e1a(0x357)][_0x2a5e1a(0x166)],Game_Switches[_0x2a5e1a(0x357)][_0x2a5e1a(0x166)]=function(_0x1961b0,_0x32e52e){const _0x532702=_0x2a5e1a;if(DataManager[_0x532702(0x404)](_0x1961b0))this[_0x532702(0x20c)](_0x1961b0,_0x32e52e);else DataManager[_0x532702(0x235)](_0x1961b0)?this[_0x532702(0x18b)](_0x1961b0,_0x32e52e):VisuMZ[_0x532702(0x2c1)][_0x532702(0x1f0)][_0x532702(0x2ad)](this,_0x1961b0,_0x32e52e);},Game_Switches['prototype']['setSelfValue']=function(_0x5bdd5e,_0x39c762){const _0x35c1a8=_0x2a5e1a,_0x2e8241=$gameTemp[_0x35c1a8(0x358)]()||this;if(_0x2e8241[_0x35c1a8(0x392)]!==Game_Event)VisuMZ[_0x35c1a8(0x2c1)][_0x35c1a8(0x1f0)]['call'](this,_0x5bdd5e,_0x39c762);else{const _0x792ccd=[_0x2e8241[_0x35c1a8(0x49f)],_0x2e8241[_0x35c1a8(0xc7)],_0x35c1a8(0x2c4)[_0x35c1a8(0x257)](_0x5bdd5e)];$gameSelfSwitches[_0x35c1a8(0x166)](_0x792ccd,_0x39c762);}},Game_Switches[_0x2a5e1a(0x357)][_0x2a5e1a(0x18b)]=function(_0x186454,_0x12e722){const _0x4f99a8=_0x2a5e1a,_0x35bb5c=$gameMap?$gameMap['mapId']():0x0,_0x7fdade=[0x0,0x0,'Map\x20%1\x20Switch\x20%2'[_0x4f99a8(0x257)](_0x35bb5c,_0x186454)];return $gameSelfSwitches[_0x4f99a8(0x166)](_0x7fdade,_0x12e722);},VisuMZ[_0x2a5e1a(0x2c1)]['Game_Variables_value']=Game_Variables[_0x2a5e1a(0x357)][_0x2a5e1a(0x436)],Game_Variables['prototype'][_0x2a5e1a(0x436)]=function(_0x268372){const _0x3f21c2=_0x2a5e1a;if(DataManager[_0x3f21c2(0xdb)](_0x268372))return this[_0x3f21c2(0x3a1)](_0x268372);else{if(DataManager[_0x3f21c2(0x126)](_0x268372))return this[_0x3f21c2(0x3d9)](_0x268372);else return DataManager['isMapVariable'](_0x268372)?this[_0x3f21c2(0x12e)](_0x268372):VisuMZ[_0x3f21c2(0x2c1)][_0x3f21c2(0x46b)][_0x3f21c2(0x2ad)](this,_0x268372);}},Game_Variables['advancedFunc']={},Game_Variables[_0x2a5e1a(0x357)]['advancedValue']=function(_0xe8f85f){const _0x3d0eb2=_0x2a5e1a;if(!Game_Variables['advancedFunc'][_0xe8f85f]){$dataSystem['variables'][_0xe8f85f]['match'](/<JS>\s*([\s\S]*)\s*<\/JS>/i);const _0x20e3d9=_0x3d0eb2(0x141)[_0x3d0eb2(0x257)](String(RegExp['$1']));Game_Variables[_0x3d0eb2(0x2ef)][_0xe8f85f]=new Function(_0x3d0eb2(0x4d5),_0x20e3d9);}const _0x175f5c=$gameTemp[_0x3d0eb2(0x358)]()||this;return Game_Variables[_0x3d0eb2(0x2ef)][_0xe8f85f][_0x3d0eb2(0x2ad)](_0x175f5c,_0xe8f85f);},Game_Variables['prototype'][_0x2a5e1a(0x3d9)]=function(_0xbb6fca){const _0x22118a=_0x2a5e1a,_0x16c544=$gameTemp[_0x22118a(0x358)]()||this;if(_0x16c544[_0x22118a(0x392)]!==Game_Event)return VisuMZ[_0x22118a(0x2c1)][_0x22118a(0x46b)][_0x22118a(0x2ad)](this,_0xbb6fca);else{const _0xa16f77=[_0x16c544['_mapId'],_0x16c544['_eventId'],_0x22118a(0x1a6)[_0x22118a(0x257)](_0xbb6fca)];return $gameSelfSwitches[_0x22118a(0x436)](_0xa16f77);}},Game_Variables[_0x2a5e1a(0x357)]['mapValue']=function(_0xabbc39){const _0x200a79=_0x2a5e1a,_0x399210=$gameMap?$gameMap[_0x200a79(0x35f)]():0x0,_0x44dda0=[0x0,0x0,_0x200a79(0x216)[_0x200a79(0x257)](_0x399210,_0xabbc39)];return $gameSelfSwitches[_0x200a79(0x436)](_0x44dda0)||0x0;},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x3c3)]=Game_Variables['prototype']['setValue'],Game_Variables[_0x2a5e1a(0x357)][_0x2a5e1a(0x166)]=function(_0x3ac44c,_0x3a6dd1){const _0x4be19c=_0x2a5e1a;if(DataManager[_0x4be19c(0x126)](_0x3ac44c))this[_0x4be19c(0x20c)](_0x3ac44c,_0x3a6dd1);else DataManager[_0x4be19c(0x37e)](_0x3ac44c)?this['setMapValue'](_0x3ac44c,_0x3a6dd1):VisuMZ['EventsMoveCore'][_0x4be19c(0x3c3)]['call'](this,_0x3ac44c,_0x3a6dd1);},Game_Variables[_0x2a5e1a(0x357)][_0x2a5e1a(0x20c)]=function(_0x55c680,_0x3a665e){const _0xa12af1=_0x2a5e1a,_0x1e2451=$gameTemp['getSelfTarget']()||this;if(_0x1e2451[_0xa12af1(0x392)]!==Game_Event)VisuMZ[_0xa12af1(0x2c1)][_0xa12af1(0x3c3)][_0xa12af1(0x2ad)](this,_0x55c680,_0x3a665e);else{const _0x41eb4d=[_0x1e2451['_mapId'],_0x1e2451['_eventId'],_0xa12af1(0x1a6)['format'](_0x55c680)];$gameSelfSwitches[_0xa12af1(0x166)](_0x41eb4d,_0x3a665e);}},Game_Variables[_0x2a5e1a(0x357)][_0x2a5e1a(0x18b)]=function(_0x16913e,_0x381e16){const _0x50ffc3=_0x2a5e1a,_0x46da4f=$gameMap?$gameMap[_0x50ffc3(0x35f)]():0x0,_0x4b11ca=[0x0,0x0,_0x50ffc3(0x216)[_0x50ffc3(0x257)](_0x46da4f,_0x16913e)];$gameSelfSwitches['setValue'](_0x4b11ca,_0x381e16);},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0xe4)]=Game_SelfSwitches[_0x2a5e1a(0x357)][_0x2a5e1a(0x436)],Game_SelfSwitches[_0x2a5e1a(0x357)][_0x2a5e1a(0x436)]=function(_0x1ed7e0){const _0x448aad=_0x2a5e1a;if(_0x1ed7e0[0x2][_0x448aad(0x355)](/(?:SELF|MAP)/i))return this['selfValue'](_0x1ed7e0);else{return VisuMZ[_0x448aad(0x2c1)][_0x448aad(0xe4)][_0x448aad(0x2ad)](this,_0x1ed7e0);;}},Game_SelfSwitches[_0x2a5e1a(0x357)][_0x2a5e1a(0x3d9)]=function(_0x33260c){const _0x302a59=_0x2a5e1a;return _0x33260c[0x2][_0x302a59(0x355)](/VAR/i)?this[_0x302a59(0x199)][_0x33260c]||0x0:!!this[_0x302a59(0x199)][_0x33260c];},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x4a5)]=Game_SelfSwitches['prototype'][_0x2a5e1a(0x166)],Game_SelfSwitches[_0x2a5e1a(0x357)][_0x2a5e1a(0x166)]=function(_0xb991b3,_0x29117d){const _0x18f251=_0x2a5e1a;_0xb991b3[0x2][_0x18f251(0x355)](/(?:SELF|MAP)/i)?this['setSelfValue'](_0xb991b3,_0x29117d):VisuMZ['EventsMoveCore'][_0x18f251(0x4a5)][_0x18f251(0x2ad)](this,_0xb991b3,_0x29117d);},Game_SelfSwitches[_0x2a5e1a(0x357)][_0x2a5e1a(0x20c)]=function(_0x3b6334,_0x513908){const _0x719e65=_0x2a5e1a;this['_data'][_0x3b6334]=_0x3b6334[0x2][_0x719e65(0x355)](/VAR/i)?_0x513908:!!_0x513908,this[_0x719e65(0x1d2)]();},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x100)]=Game_Player[_0x2a5e1a(0x357)][_0x2a5e1a(0x334)],Game_Player[_0x2a5e1a(0x357)][_0x2a5e1a(0x334)]=function(){const _0x430e06=_0x2a5e1a;(this[_0x430e06(0x148)]!==$gameMap[_0x430e06(0x35f)]()||this[_0x430e06(0x296)])&&$gameMap[_0x430e06(0x121)](),VisuMZ[_0x430e06(0x2c1)]['Game_Player_performTransfer']['call'](this);},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x121)]=function(){const _0x3ace64=_0x2a5e1a;this['_lastMapId']=this[_0x3ace64(0x35f)]();const _0x288f86=this['events']();for(const _0x369728 of _0x288f86){if(_0x369728)$gameSelfSwitches[_0x3ace64(0x2e4)](_0x369728);}},Game_SelfSwitches[_0x2a5e1a(0x357)]['resetSelfSwitchesForEvent']=function(_0x49838e){const _0x97499f=_0x2a5e1a;if(!_0x49838e)return;if(!_0x49838e[_0x97499f(0x390)]())return;const _0xcb5d03=_0x49838e[_0x97499f(0x390)]()[_0x97499f(0x3b8)]||'';if(_0xcb5d03[_0x97499f(0x355)](/<(?:EXIT RESET|EXIT|TEMP|TEMPORARY) (?:SELF|SELF SWITCH|SELF SWITCHES|SELF DATA)>/i)){const _0x128d91='%1,%2,'[_0x97499f(0x257)]($gameMap[_0x97499f(0x49f)],_0x49838e[_0x97499f(0xc7)]),_0x114c23=Object[_0x97499f(0x47a)](this[_0x97499f(0x199)])[_0x97499f(0x3b4)](_0x4a224d=>_0x4a224d[_0x97499f(0x3c6)](_0x128d91));while(_0x114c23[_0x97499f(0x396)]>0x0){const _0xb3a867=_0x114c23[_0x97499f(0x162)]();delete this[_0x97499f(0x199)][_0xb3a867];}}},Game_SelfSwitches['prototype'][_0x2a5e1a(0x124)]=function(_0x482ca6){const _0x28c86e=_0x2a5e1a,_0xfb1157='%1,'[_0x28c86e(0x257)]($gameMap[_0x28c86e(0x49f)]),_0x46e605=Object[_0x28c86e(0x47a)](this['_data'])['filter'](_0x3dd4f5=>_0x3dd4f5[_0x28c86e(0x3c6)](_0xfb1157));while(_0x46e605['length']>0x0){const _0x40201=_0x46e605[_0x28c86e(0x162)]();delete this[_0x28c86e(0x199)][_0x40201];}_0x482ca6===$gameMap[_0x28c86e(0x35f)]()&&$gameMap[_0x28c86e(0x228)]();},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x15c)]=Game_Enemy['prototype'][_0x2a5e1a(0x13f)],Game_Enemy['prototype'][_0x2a5e1a(0x13f)]=function(_0x9a61e1){const _0x28c7c7=_0x2a5e1a;$gameTemp[_0x28c7c7(0x28d)](this);const _0x3c095e=VisuMZ[_0x28c7c7(0x2c1)]['Game_Enemy_meetsSwitchCondition'][_0x28c7c7(0x2ad)](this,_0x9a61e1);return $gameTemp[_0x28c7c7(0x285)](),_0x3c095e;},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x242)]=Game_Troop[_0x2a5e1a(0x357)][_0x2a5e1a(0x20b)],Game_Troop['prototype']['meetsConditions']=function(_0x535c0f){const _0x14706f=_0x2a5e1a;$gameTemp[_0x14706f(0x28d)](this);const _0x4f3878=VisuMZ['EventsMoveCore'][_0x14706f(0x242)][_0x14706f(0x2ad)](this,_0x535c0f);return $gameTemp['clearSelfTarget'](),_0x4f3878;},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x43d)]=Game_Map['prototype'][_0x2a5e1a(0x270)],Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x270)]=function(_0x461492){const _0xeced49=_0x2a5e1a;this['removeTemporaryMapSpawnedEvents'](_0x461492),this[_0xeced49(0x411)](),VisuMZ[_0xeced49(0x2c1)][_0xeced49(0x43d)]['call'](this,_0x461492),this[_0xeced49(0x411)](),this[_0xeced49(0x287)](),this[_0xeced49(0x364)](),this[_0xeced49(0x2c8)](),this[_0xeced49(0xd0)](),this['setupPlayerVisibilityOverrides'](),this[_0xeced49(0x3a7)](),this[_0xeced49(0x411)]();},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x353)]=Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x2f8)],Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x2f8)]=function(){const _0x4a7305=_0x2a5e1a;VisuMZ[_0x4a7305(0x2c1)]['Game_Map_setupEvents']['call'](this),this['refreshIfNeeded']();},Game_Map[_0x2a5e1a(0x34d)]=0xc8,Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x3f8)]=function(){const _0x335ff9=_0x2a5e1a,_0x4c55fe=Game_Map[_0x335ff9(0x34d)];this[_0x335ff9(0x2cf)]=this['events']()[_0x335ff9(0x396)]>_0x4c55fe;if(this['_eventOverload']&&$gameTemp['isPlaytest']()){}},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x4d8)]=function(){const _0x56ad3b=_0x2a5e1a;return this[_0x56ad3b(0x2cf)];},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x411)]=function(){const _0x52606a=_0x2a5e1a;this[_0x52606a(0x4ed)]=undefined;},Game_Map[_0x2a5e1a(0x357)]['setupDiagonalSupport']=function(){const _0x4029ab=_0x2a5e1a;this[_0x4029ab(0x250)]=VisuMZ['EventsMoveCore']['Settings'][_0x4029ab(0x44f)][_0x4029ab(0x1dd)];const _0x487691=$dataMap[_0x4029ab(0x3b8)]||'';if(_0x487691['match'](/<DIAGONAL MOVEMENT: ON>/i))this[_0x4029ab(0x250)]=!![];else _0x487691[_0x4029ab(0x355)](/<DIAGONAL MOVEMENT: OFF>/i)&&(this[_0x4029ab(0x250)]=![]);},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x130)]=function(){const _0xf49e4c=_0x2a5e1a,_0x52672e=$gameSystem[_0xf49e4c(0x321)]();if(_0x52672e===_0xf49e4c(0x330))return!![];if(_0x52672e===_0xf49e4c(0x4b5))return![];if(this[_0xf49e4c(0x250)]===undefined)this[_0xf49e4c(0x287)]();return this[_0xf49e4c(0x250)];},Game_Map['prototype'][_0x2a5e1a(0x273)]=function(_0x8b60c,_0x40b179){const _0x3c725c=_0x2a5e1a;if([0x1,0x4,0x7][_0x3c725c(0x370)](_0x40b179))_0x8b60c-=0x1;if([0x3,0x6,0x9][_0x3c725c(0x370)](_0x40b179))_0x8b60c+=0x1;return this[_0x3c725c(0x299)](_0x8b60c);},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x1fc)]=function(_0x1238a8,_0x3db91f){const _0x2289d5=_0x2a5e1a;if([0x1,0x2,0x3][_0x2289d5(0x370)](_0x3db91f))_0x1238a8+=0x1;if([0x7,0x8,0x9][_0x2289d5(0x370)](_0x3db91f))_0x1238a8-=0x1;return this[_0x2289d5(0x408)](_0x1238a8);},Game_Map[_0x2a5e1a(0x357)]['absDistance']=function(_0x42cf77,_0x3e13dc,_0x69514e,_0xeaca81){const _0x191d1d=_0x2a5e1a;return Math[_0x191d1d(0x203)](Math['abs'](this[_0x191d1d(0x1a2)](_0x42cf77,_0x69514e)),Math[_0x191d1d(0x409)](this[_0x191d1d(0x34a)](_0x3e13dc,_0xeaca81)));},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x364)]=function(){const _0xdd5cd4=_0x2a5e1a,_0x17f406=VisuMZ[_0xdd5cd4(0x2c1)][_0xdd5cd4(0x14c)]['Region'],_0x397e9c={},_0x55c7fb=[_0xdd5cd4(0x212),_0xdd5cd4(0x29a),'Dock'],_0x160ec2=[_0xdd5cd4(0x129),_0xdd5cd4(0xcc),'Player',_0xdd5cd4(0x3d3),_0xdd5cd4(0xdd),_0xdd5cd4(0x3c5),'Ship','Airship'];for(const _0x51da18 of _0x55c7fb){for(const _0x372fde of _0x160ec2){const _0x4f7984=_0xdd5cd4(0xcb)[_0xdd5cd4(0x257)](_0x372fde,_0x51da18);_0x17f406[_0x4f7984]&&(_0x397e9c[_0x4f7984]=_0x17f406[_0x4f7984][_0xdd5cd4(0x109)](0x0));}}const _0x43ac6f=$dataMap[_0xdd5cd4(0x3b8)]||'',_0x45dd2e=_0x43ac6f['match'](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/gi);if(_0x45dd2e)for(const _0x4ff889 of _0x45dd2e){_0x4ff889[_0xdd5cd4(0x355)](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/i);let _0x1da174=String(RegExp['$1'])[_0xdd5cd4(0x2c7)]()[_0xdd5cd4(0x215)](),_0x341c92=String(RegExp['$2'])['toLowerCase']()[_0xdd5cd4(0x215)]();const _0x179908=JSON[_0xdd5cd4(0x155)]('['+RegExp['$3'][_0xdd5cd4(0x355)](/\d+/g)+']');_0x1da174=_0x1da174[_0xdd5cd4(0x288)](0x0)[_0xdd5cd4(0x108)]()+_0x1da174[_0xdd5cd4(0x109)](0x1),_0x341c92=_0x341c92[_0xdd5cd4(0x288)](0x0)[_0xdd5cd4(0x108)]()+_0x341c92[_0xdd5cd4(0x109)](0x1);const _0x258b2d=_0xdd5cd4(0xcb)[_0xdd5cd4(0x257)](_0x1da174,_0x341c92);if(_0x397e9c[_0x258b2d])_0x397e9c[_0x258b2d]=_0x397e9c[_0x258b2d][_0xdd5cd4(0x3cc)](_0x179908);}this[_0xdd5cd4(0x38e)]=_0x397e9c;},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x32a)]=function(_0xda4c69,_0x1bd8e9,_0x292065,_0x46a4f3){const _0xf61d60=_0x2a5e1a,_0x149189=this['roundXWithDirection'](_0xda4c69,_0x292065),_0x544748=this[_0xf61d60(0x1fc)](_0x1bd8e9,_0x292065),_0x1a3be5=this['regionId'](_0x149189,_0x544748),_0x5a655c=this['_regionRules'];if(_0x5a655c[_0xf61d60(0x4c4)][_0xf61d60(0x370)](_0x1a3be5))return!![];else{if(_0x46a4f3===_0xf61d60(0x1e8))return _0x5a655c[_0xf61d60(0x479)][_0xf61d60(0x370)](_0x1a3be5)||_0x5a655c['WalkAllow']['includes'](_0x1a3be5);else{if(_0x46a4f3==='event')return _0x5a655c[_0xf61d60(0x3d1)][_0xf61d60(0x370)](_0x1a3be5)||_0x5a655c['WalkAllow']['includes'](_0x1a3be5);else{if(_0x5a655c[_0xf61d60(0x1aa)]['includes'](_0x1a3be5))return!![];else{const _0x1c01be=_0xf61d60(0x259)[_0xf61d60(0x257)](_0x46a4f3[_0xf61d60(0x288)](0x0)[_0xf61d60(0x108)]()+_0x46a4f3['slice'](0x1));if(_0x5a655c[_0x1c01be])return _0x5a655c[_0x1c01be][_0xf61d60(0x370)](_0x1a3be5);}}}}return![];},Game_Map['prototype'][_0x2a5e1a(0x165)]=function(_0x18ea87,_0x27ffeb,_0xdf1cc4,_0x1e97f1){const _0x55feec=_0x2a5e1a,_0x50b0f7=this[_0x55feec(0x273)](_0x18ea87,_0xdf1cc4),_0x4fd896=this[_0x55feec(0x1fc)](_0x27ffeb,_0xdf1cc4),_0x5ba536=this[_0x55feec(0x351)](_0x50b0f7,_0x4fd896),_0x5bfd89=this[_0x55feec(0x38e)];if(_0x5bfd89[_0x55feec(0x120)][_0x55feec(0x370)](_0x5ba536))return!![];else{if(_0x1e97f1===_0x55feec(0x1e8))return _0x5bfd89[_0x55feec(0xc8)]['includes'](_0x5ba536)||_0x5bfd89['WalkForbid'][_0x55feec(0x370)](_0x5ba536);else{if(_0x1e97f1==='event')return _0x5bfd89[_0x55feec(0x484)][_0x55feec(0x370)](_0x5ba536)||_0x5bfd89[_0x55feec(0x4c8)][_0x55feec(0x370)](_0x5ba536);else{if(_0x5bfd89['VehicleForbid'][_0x55feec(0x370)](_0x5ba536))return!![];else{const _0xd9f2c6=_0x55feec(0x2af)[_0x55feec(0x257)](_0x1e97f1['charAt'](0x0)[_0x55feec(0x108)]()+_0x1e97f1[_0x55feec(0x109)](0x1));if(_0x5bfd89[_0xd9f2c6])return _0x5bfd89[_0xd9f2c6]['includes'](_0x5ba536);}}}}return![];},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x463)]=function(_0x4d23e9,_0x158f6e,_0x3b2338,_0x23b51b){const _0x3a342e=_0x2a5e1a;_0x3b2338=_0x23b51b===_0x3a342e(0x356)?0x5:_0x3b2338;const _0x555c25=this['roundXWithDirection'](_0x4d23e9,_0x3b2338),_0x7549b2=this[_0x3a342e(0x1fc)](_0x158f6e,_0x3b2338),_0x29d011=this[_0x3a342e(0x351)](_0x555c25,_0x7549b2),_0x16697d=this[_0x3a342e(0x38e)];if(_0x16697d[_0x3a342e(0x345)][_0x3a342e(0x370)](_0x29d011))return!![];else{const _0xfb45f2=_0x3a342e(0x25c)[_0x3a342e(0x257)](_0x23b51b['charAt'](0x0)[_0x3a342e(0x108)]()+_0x23b51b[_0x3a342e(0x109)](0x1));if(_0x16697d[_0xfb45f2])return _0x16697d[_0xfb45f2][_0x3a342e(0x370)](_0x29d011);}return![];},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0xe3)]=Game_Map['prototype'][_0x2a5e1a(0x2ca)],Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x2ca)]=function(){const _0x59ed61=_0x2a5e1a;VisuMZ[_0x59ed61(0x2c1)][_0x59ed61(0xe3)][_0x59ed61(0x2ad)](this),this['checkNeedForPeriodicRefresh']();},Game_Map['prototype'][_0x2a5e1a(0x1f1)]=function(){const _0x1ab08e=_0x2a5e1a;this[_0x1ab08e(0x2ae)]=![];if(this[_0x1ab08e(0x2eb)]()[_0x1ab08e(0xf9)](_0x1fc4c6=>_0x1fc4c6[_0x1ab08e(0x2bd)]())){this[_0x1ab08e(0x2ae)]=!![];return;}if(this['events']()[_0x1ab08e(0xf9)](_0x3aaccd=>_0x3aaccd[_0x1ab08e(0x17b)]())){this[_0x1ab08e(0x2ae)]=!![];return;}if(this[_0x1ab08e(0x207)]['some'](_0x35249c=>_0x35249c[_0x1ab08e(0x2bd)]())){this[_0x1ab08e(0x2ae)]=!![];return;}if(this[_0x1ab08e(0x207)][_0x1ab08e(0xf9)](_0x125ba2=>_0x125ba2[_0x1ab08e(0x17b)]())){this['_needsPeriodicRefresh']=!![];return;}},VisuMZ[_0x2a5e1a(0x2c1)]['Game_Map_update']=Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x125)],Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x125)]=function(_0xe0d9ab){const _0x5a6f71=_0x2a5e1a;this[_0x5a6f71(0x445)](),VisuMZ[_0x5a6f71(0x2c1)]['Game_Map_update'][_0x5a6f71(0x2ad)](this,_0xe0d9ab);},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x445)]=function(){const _0x13dd80=_0x2a5e1a;if(!this[_0x13dd80(0x2ae)])return;this[_0x13dd80(0x15b)]=this[_0x13dd80(0x15b)]||0x3c,this[_0x13dd80(0x15b)]--,this[_0x13dd80(0x15b)]<=0x0&&(this[_0x13dd80(0x228)](),this[_0x13dd80(0x15b)]=0x3c);},VisuMZ['EventsMoveCore']['Game_Map_isDashDisabled']=Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x1bb)],Game_Map[_0x2a5e1a(0x357)]['isDashDisabled']=function(){const _0x5efb8b=_0x2a5e1a;if(!$gameSystem[_0x5efb8b(0x465)]())return!![];return VisuMZ['EventsMoveCore'][_0x5efb8b(0x49c)][_0x5efb8b(0x2ad)](this);},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x2c8)]=function(){const _0x36cc5c=_0x2a5e1a;this[_0x36cc5c(0x1b5)]=![];const _0x45682f=$dataMap['note']||'';_0x45682f['match'](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this['_saveEventLocations']=!![]);},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x2e3)]=function(){const _0x21c8d3=_0x2a5e1a;if(this[_0x21c8d3(0x1b5)]===undefined)this[_0x21c8d3(0x2c8)]();return this[_0x21c8d3(0x1b5)];},Game_Map['prototype'][_0x2a5e1a(0x4c7)]=function(_0x2207e6){const _0x5c98d3=_0x2a5e1a;_0x2207e6!==this['mapId']()&&$gamePlayer&&$gameSystem[_0x5c98d3(0x4c7)](this['mapId']());},Game_Map['prototype'][_0x2a5e1a(0xd0)]=function(){const _0x3d1437=_0x2a5e1a;this[_0x3d1437(0x2bf)]=$gameSystem['getMapSpawnedEventData'](this[_0x3d1437(0x35f)]()),this['_needsRefresh']=!![];},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x36b)]=Game_Map['prototype'][_0x2a5e1a(0x2eb)],Game_Map[_0x2a5e1a(0x357)]['events']=function(){const _0x5abc50=_0x2a5e1a;if(this[_0x5abc50(0x4ed)])return this[_0x5abc50(0x4ed)];const _0x5c73c5=VisuMZ[_0x5abc50(0x2c1)][_0x5abc50(0x36b)][_0x5abc50(0x2ad)](this),_0x17eaa4=_0x5c73c5[_0x5abc50(0x3cc)](this[_0x5abc50(0x2bf)]||[]);return this['_eventCache']=_0x17eaa4['filter'](_0x34d4e3=>!!_0x34d4e3),this['_eventCache'];},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x3c9)]=Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x390)],Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x390)]=function(_0x4af6bf){const _0x296edd=_0x2a5e1a;return _0x4af6bf>=0x3e8?(_0x4af6bf-=0x3e8,this[_0x296edd(0x2bf)][_0x4af6bf]):VisuMZ['EventsMoveCore']['Game_Map_event'][_0x296edd(0x2ad)](this,_0x4af6bf);},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x4e8)]=function(_0x459d52){const _0x42a662=_0x2a5e1a,_0x2db2ee=this[_0x42a662(0x390)](_0x459d52);if(_0x2db2ee)_0x2db2ee[_0x42a662(0x347)]();},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x25f)]=function(){const _0x28909c=_0x2a5e1a,_0x33208c={'template':_0x28909c(0x266),'mapId':0x1,'eventId':0xc,'x':$gamePlayer['x']+0x1,'y':$gamePlayer['y']+0x1,'spawnPreserved':!![],'spawnEventId':this['_spawnedEvents'][_0x28909c(0x396)]+0x3e8};this[_0x28909c(0x313)](_0x33208c);},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x14a)]=function(_0x4aa578,_0x306283){const _0x5c19c4=_0x2a5e1a;if(this[_0x5c19c4(0x2b5)](_0x4aa578,_0x306283)[_0x5c19c4(0x396)]>0x0)return!![];if($gamePlayer['x']===_0x4aa578&&$gamePlayer['y']===_0x306283)return!![];if(this[_0x5c19c4(0x43b)]()[_0x5c19c4(0x2e6)](_0x4aa578,_0x306283))return!![];if(this[_0x5c19c4(0x243)]()[_0x5c19c4(0x2e6)](_0x4aa578,_0x306283))return!![];return![];},Game_Map['prototype'][_0x2a5e1a(0x3d0)]=function(_0x43cccc,_0x427191,_0x523eb1){const _0x260ba6=_0x2a5e1a;$gameTemp[_0x260ba6(0xe6)]=_0x43cccc;const _0x507a06=new Game_Event(_0x43cccc[_0x260ba6(0x35f)],_0x43cccc[_0x260ba6(0x1cc)]);$gameTemp[_0x260ba6(0xe6)]=undefined,_0x507a06['refresh']();let _0x483df2=_0x427191-_0x507a06[_0x260ba6(0x173)][_0x260ba6(0x1d1)],_0x1d22bc=_0x427191+_0x507a06[_0x260ba6(0x173)]['right'],_0x49a463=_0x523eb1-_0x507a06[_0x260ba6(0x173)]['up'],_0x9b74be=_0x523eb1+_0x507a06[_0x260ba6(0x173)]['down'];for(let _0x4b48f2=_0x483df2;_0x4b48f2<=_0x1d22bc;_0x4b48f2++){for(let _0x3b1acf=_0x49a463;_0x3b1acf<=_0x9b74be;_0x3b1acf++){if(this[_0x260ba6(0x14a)](_0x4b48f2,_0x3b1acf))return![];}}return!![];},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x313)]=function(_0x4beeaa){const _0x1fdd2d=_0x2a5e1a;$gameTemp['_spawnData']=_0x4beeaa;const _0x364178=new Game_Event(_0x4beeaa['mapId'],_0x4beeaa[_0x1fdd2d(0x1cc)]);$gameTemp[_0x1fdd2d(0xe6)]=undefined,this[_0x1fdd2d(0x2bf)][_0x1fdd2d(0x4b0)](_0x364178),_0x364178['setupSpawn'](_0x4beeaa),this[_0x1fdd2d(0x411)]();},Game_Map['prototype'][_0x2a5e1a(0x19d)]=function(_0x3a70f8,_0x29a3a0,_0x2ada7d){const _0x48b927=_0x2a5e1a,_0x37d699=_0x3a70f8[_0x48b927(0x384)][_0x48b927(0x108)]()[_0x48b927(0x215)]();if(_0x37d699!=='UNTITLED'){const _0x221964=VisuMZ[_0x48b927(0x1cb)][_0x37d699];_0x221964&&(_0x3a70f8[_0x48b927(0x35f)]=_0x221964[_0x48b927(0x2b0)],_0x3a70f8[_0x48b927(0x1cc)]=_0x221964['EventID']);}const _0x57aec3=_0x3a70f8['x'],_0x4353e7=_0x3a70f8['y'];if(!this[_0x48b927(0x29e)](_0x57aec3,_0x4353e7))return![];if(_0x29a3a0){if(this[_0x48b927(0x14a)](_0x57aec3,_0x4353e7))return![];if(!this[_0x48b927(0x3d0)](_0x3a70f8,_0x57aec3,_0x4353e7))return![];}if(_0x2ada7d){if(!this[_0x48b927(0x361)](_0x57aec3,_0x4353e7))return![];}return this[_0x48b927(0x313)](_0x3a70f8),!![];},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x118)]=function(_0x11d5ac,_0x1ff6c8,_0x20ff12,_0x3d5b33){const _0x25d449=_0x2a5e1a,_0x16843d=_0x11d5ac[_0x25d449(0x384)]['toUpperCase']()[_0x25d449(0x215)]();if(_0x16843d!=='UNTITLED'){const _0xc838ab=VisuMZ['EventTemplates'][_0x16843d];_0xc838ab&&(_0x11d5ac[_0x25d449(0x35f)]=_0xc838ab[_0x25d449(0x2b0)],_0x11d5ac[_0x25d449(0x1cc)]=_0xc838ab[_0x25d449(0x145)]);}const _0x16e1ac=[],_0x51abd9=this[_0x25d449(0x372)](),_0xcaaecd=this[_0x25d449(0x16c)]();for(let _0x5288e7=0x0;_0x5288e7<_0x51abd9;_0x5288e7++){for(let _0x4ba364=0x0;_0x4ba364<_0xcaaecd;_0x4ba364++){if(!_0x1ff6c8[_0x25d449(0x370)](this['regionId'](_0x5288e7,_0x4ba364)))continue;if(!this[_0x25d449(0x29e)](_0x5288e7,_0x4ba364))continue;if(_0x20ff12){if(this[_0x25d449(0x14a)](_0x5288e7,_0x4ba364))continue;if(!this['isSpawnHitboxCollisionOk'](_0x11d5ac,_0x5288e7,_0x4ba364))continue;}if(_0x3d5b33){if(!this['isPassableByAnyDirection'](_0x5288e7,_0x4ba364))continue;}_0x16e1ac[_0x25d449(0x4b0)]([_0x5288e7,_0x4ba364]);}}if(_0x16e1ac[_0x25d449(0x396)]>0x0){const _0x32a738=_0x16e1ac[Math['randomInt'](_0x16e1ac['length'])];return _0x11d5ac['x']=_0x32a738[0x0],_0x11d5ac['y']=_0x32a738[0x1],this['createSpawnedEventWithData'](_0x11d5ac),!![];}return![];},Game_Map['prototype'][_0x2a5e1a(0x11a)]=function(_0x4e3e38,_0x402b1e,_0x292b72,_0x1b115f){const _0xb9336a=_0x2a5e1a,_0x4224ad=_0x4e3e38[_0xb9336a(0x384)]['toUpperCase']()[_0xb9336a(0x215)]();if(_0x4224ad!=='UNTITLED'){const _0x513f65=VisuMZ[_0xb9336a(0x1cb)][_0x4224ad];_0x513f65&&(_0x4e3e38['mapId']=_0x513f65[_0xb9336a(0x2b0)],_0x4e3e38[_0xb9336a(0x1cc)]=_0x513f65[_0xb9336a(0x145)]);}const _0x667b03=[],_0x320c84=this[_0xb9336a(0x372)](),_0x19f2e2=this[_0xb9336a(0x16c)]();for(let _0x3e05af=0x0;_0x3e05af<_0x320c84;_0x3e05af++){for(let _0x54ca22=0x0;_0x54ca22<_0x19f2e2;_0x54ca22++){if(!_0x402b1e[_0xb9336a(0x370)](this[_0xb9336a(0x3f7)](_0x3e05af,_0x54ca22)))continue;if(!this[_0xb9336a(0x29e)](_0x3e05af,_0x54ca22))continue;if(_0x292b72){if(this[_0xb9336a(0x14a)](_0x3e05af,_0x54ca22))continue;if(!this[_0xb9336a(0x3d0)](_0x4e3e38,_0x3e05af,_0x54ca22))continue;}if(_0x1b115f){if(!this[_0xb9336a(0x361)](_0x3e05af,_0x54ca22))continue;}_0x667b03[_0xb9336a(0x4b0)]([_0x3e05af,_0x54ca22]);}}if(_0x667b03[_0xb9336a(0x396)]>0x0){const _0x29ce58=_0x667b03[Math['randomInt'](_0x667b03[_0xb9336a(0x396)])];return _0x4e3e38['x']=_0x29ce58[0x0],_0x4e3e38['y']=_0x29ce58[0x1],this['createSpawnedEventWithData'](_0x4e3e38),!![];}return![];},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x361)]=function(_0x21ced6,_0x3410c4){const _0x54a8e8=_0x2a5e1a;if(this[_0x54a8e8(0x184)](_0x21ced6,_0x3410c4,0x2))return!![];if(this[_0x54a8e8(0x184)](_0x21ced6,_0x3410c4,0x4))return!![];if(this[_0x54a8e8(0x184)](_0x21ced6,_0x3410c4,0x6))return!![];if(this['isPassable'](_0x21ced6,_0x3410c4,0x8))return!![];return![];},Game_Map['prototype']['despawnEventId']=function(_0x4dc313){const _0x1a12a3=_0x2a5e1a;if(_0x4dc313<0x3e8)return;if(!this[_0x1a12a3(0x2bf)])return;const _0x82b79c=this[_0x1a12a3(0x390)](_0x4dc313);_0x82b79c['locate'](-0x1,-0x1),_0x82b79c[_0x1a12a3(0x347)](),this[_0x1a12a3(0x2bf)][_0x4dc313-0x3e8]=null,this[_0x1a12a3(0x411)]();},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x102)]=function(){for(const _0x2bcb43 of this['_spawnedEvents']){if(_0x2bcb43)return _0x2bcb43;}return null;},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0xf2)]=function(){const _0xb2f8ab=_0x2a5e1a,_0x15d0fb=this['firstSpawnedEvent']();return _0x15d0fb?_0x15d0fb[_0xb2f8ab(0xc7)]:0x0;},Game_Map[_0x2a5e1a(0x357)]['lastSpawnedEvent']=function(){const _0x5c09e4=_0x2a5e1a,_0x2b50c6=this['_spawnedEvents']['slice'](0x0)[_0x5c09e4(0x22a)]();for(const _0x10f3b2 of _0x2b50c6){if(_0x10f3b2)return _0x10f3b2;}return null;},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x379)]=function(){const _0x1dc8b4=_0x2a5e1a,_0x36ec51=this[_0x1dc8b4(0x3fa)]();return _0x36ec51?_0x36ec51[_0x1dc8b4(0xc7)]:0x0;},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x1bd)]=function(_0x425bb6,_0x2af2dc){const _0xd60532=_0x2a5e1a,_0x1ba599=this[_0xd60532(0x2b5)](_0x425bb6,_0x2af2dc);for(const _0x517108 of _0x1ba599){if(!_0x517108)continue;if(_0x517108['isSpawnedEvent']())this[_0xd60532(0x21f)](_0x517108[_0xd60532(0xc7)]);}},Game_Map[_0x2a5e1a(0x357)]['despawnRegions']=function(_0x1eb626){const _0x1134bd=_0x2a5e1a;for(const _0x30885b of this[_0x1134bd(0x2bf)]){if(!_0x30885b)continue;_0x1eb626[_0x1134bd(0x370)](_0x30885b[_0x1134bd(0x351)]())&&this[_0x1134bd(0x21f)](_0x30885b[_0x1134bd(0xc7)]);}},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x4e3)]=function(_0x517d1e){const _0x26de94=_0x2a5e1a;for(const _0x44fbee of this[_0x26de94(0x2bf)]){if(!_0x44fbee)continue;_0x517d1e[_0x26de94(0x370)](_0x44fbee[_0x26de94(0x3f7)]())&&this[_0x26de94(0x21f)](_0x44fbee['_eventId']);}},Game_Map['prototype']['despawnEverything']=function(){const _0x19e0f4=_0x2a5e1a;for(const _0x4de7bb of this[_0x19e0f4(0x2bf)]){if(!_0x4de7bb)continue;this['despawnEventId'](_0x4de7bb[_0x19e0f4(0xc7)]);}},VisuMZ[_0x2a5e1a(0x2c1)]['Game_Map_unlockEvent']=Game_Map[_0x2a5e1a(0x357)]['unlockEvent'],Game_Map[_0x2a5e1a(0x357)]['unlockEvent']=function(_0x5d3907){const _0x373f63=_0x2a5e1a;VisuMZ[_0x373f63(0x2c1)][_0x373f63(0x217)][_0x373f63(0x2ad)](this,_0x5d3907);if(_0x5d3907>=0x3e8){const _0x2f5e81=this[_0x373f63(0x390)](_0x5d3907);if(_0x2f5e81)_0x2f5e81[_0x373f63(0x1c8)]();}},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x387)]=function(){const _0x4348bd=_0x2a5e1a;this['_forceShowPlayer']=![],this[_0x4348bd(0x3c7)]=![];if(!$dataMap)return;const _0x2baec6=$dataMap[_0x4348bd(0x3b8)]||'';if(_0x2baec6[_0x4348bd(0x355)](/<HIDE PLAYER>/i))this[_0x4348bd(0x249)]=![],this['_forceHidePlayer']=!![];else _0x2baec6[_0x4348bd(0x355)](/<SHOW PLAYER>/i)&&(this[_0x4348bd(0x249)]=!![],this[_0x4348bd(0x3c7)]=![]);},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x371)]=function(){const _0xd01d62=_0x2a5e1a;return this[_0xd01d62(0x249)]===undefined&&this[_0xd01d62(0x387)](),this['_forceShowPlayer'];},Game_Map[_0x2a5e1a(0x357)]['isPlayerForceHidden']=function(){const _0x2f706b=_0x2a5e1a;return this[_0x2f706b(0x3c7)]===undefined&&this[_0x2f706b(0x387)](),this['_forceHidePlayer'];},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x25a)]=Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x45e)],Game_CharacterBase[_0x2a5e1a(0x357)]['isTransparent']=function(){const _0xac2794=_0x2a5e1a;if(this===$gamePlayer){if($gameMap[_0xac2794(0x371)]())return![];if($gameMap[_0xac2794(0x450)]())return!![];}return VisuMZ[_0xac2794(0x2c1)][_0xac2794(0x25a)]['call'](this);},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x3a7)]=function(){const _0x5e3148=_0x2a5e1a;this['_forceShowFollower']=![],this[_0x5e3148(0x335)]=![];if(!$dataMap)return;const _0x37dc45=$dataMap['note']||'';if(_0x37dc45['match'](/<HIDE FOLLOWERS>/i))this[_0x5e3148(0x1a5)]=![],this[_0x5e3148(0x335)]=!![];else _0x37dc45['match'](/<SHOW FOLLOWERS>/i)&&(this[_0x5e3148(0x1a5)]=!![],this[_0x5e3148(0x335)]=![]);},Game_Map[_0x2a5e1a(0x357)]['areFollowersForceShown']=function(){const _0x12f59e=_0x2a5e1a;return this[_0x12f59e(0x1a5)]===undefined&&this[_0x12f59e(0x3a7)](),this[_0x12f59e(0x1a5)];},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x18f)]=function(){const _0x3b6324=_0x2a5e1a;return this[_0x3b6324(0x335)]===undefined&&this[_0x3b6324(0x3a7)](),this['_forceHideFollower'];},VisuMZ[_0x2a5e1a(0x2c1)]['Game_Followers_isVisible']=Game_Followers[_0x2a5e1a(0x357)][_0x2a5e1a(0x1cf)],Game_Followers[_0x2a5e1a(0x357)][_0x2a5e1a(0x1cf)]=function(){const _0x163be8=_0x2a5e1a;if($gameMap['areFollowersForceShown']())return!![];if($gameMap[_0x163be8(0x18f)]())return![];return VisuMZ[_0x163be8(0x2c1)]['Game_Followers_isVisible'][_0x163be8(0x2ad)](this);},Game_CommonEvent['prototype']['hasAdvancedSwitchVariable']=function(){const _0x2a1cea=_0x2a5e1a,_0x10db9d=this['event']();return this[_0x2a1cea(0x260)]()&&_0x10db9d[_0x2a1cea(0xbc)]>=0x1&&DataManager[_0x2a1cea(0x1a1)](_0x10db9d[_0x2a1cea(0x4bf)]);},Game_CommonEvent['prototype'][_0x2a5e1a(0x17b)]=function(){const _0x13472b=_0x2a5e1a;return VisuMZ['EventsMoveCore']['CustomPageConditions'][_0x13472b(0x207)][_0x13472b(0x370)](this[_0x13472b(0x4a0)]);},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x4cf)]=Game_CommonEvent['prototype'][_0x2a5e1a(0x260)],Game_CommonEvent[_0x2a5e1a(0x357)][_0x2a5e1a(0x260)]=function(){const _0x392ffc=_0x2a5e1a;if(VisuMZ[_0x392ffc(0x2c1)][_0x392ffc(0x4cf)][_0x392ffc(0x2ad)](this))return!![];else{const _0x5aa63e=this[_0x392ffc(0x390)]();return VisuMZ[_0x392ffc(0x2c1)]['CustomPageConditions'][_0x392ffc(0x470)](this['event']()[_0x392ffc(0x233)],this[_0x392ffc(0x4a0)],_0x5aa63e);}},VisuMZ[_0x2a5e1a(0x2c1)]['Game_Map_parallelCommonEvents']=Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x239)],Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x239)]=function(){const _0x19143f=_0x2a5e1a,_0x3d8006=VisuMZ[_0x19143f(0x2c1)]['Game_Map_parallelCommonEvents'][_0x19143f(0x2ad)](this),_0xadbde6=VisuMZ[_0x19143f(0x2c1)][_0x19143f(0x27e)][_0x19143f(0x207)][_0x19143f(0x1e5)](_0x4ff30a=>$dataCommonEvents[_0x4ff30a]);return _0x3d8006[_0x19143f(0x3cc)](_0xadbde6)[_0x19143f(0x3b4)]((_0x56da86,_0xd4b055,_0x54b2de)=>_0x54b2de[_0x19143f(0x1f9)](_0x56da86)===_0xd4b055);},Game_CharacterBase[_0x2a5e1a(0x2ac)]=VisuMZ['EventsMoveCore'][_0x2a5e1a(0x14c)][_0x2a5e1a(0x44f)][_0x2a5e1a(0x4b2)]??![],VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x261)]=Game_CharacterBase[_0x2a5e1a(0x357)]['initMembers'],Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x478)]=function(){const _0x5698bf=_0x2a5e1a;VisuMZ[_0x5698bf(0x2c1)]['Game_CharacterBase_initMembers'][_0x5698bf(0x2ad)](this),this[_0x5698bf(0x401)]();},Game_CharacterBase[_0x2a5e1a(0x357)]['initEventsMoveCoreSettings']=function(){const _0x3a0873=_0x2a5e1a;this['_patternLocked']=![],this[_0x3a0873(0x4de)](),this[_0x3a0873(0x11e)](),this[_0x3a0873(0x210)](),this[_0x3a0873(0x490)]();},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0xec)]=Game_CharacterBase['prototype'][_0x2a5e1a(0x3a5)],Game_CharacterBase[_0x2a5e1a(0x357)]['opacity']=function(){const _0x26b447=_0x2a5e1a;let _0x216382=VisuMZ[_0x26b447(0x2c1)]['Game_CharacterBase_opacity'][_0x26b447(0x2ad)](this);return _0x216382=this[_0x26b447(0x1e9)](_0x216382),_0x216382;},Game_CharacterBase['prototype'][_0x2a5e1a(0x1e9)]=function(_0x16b66d){return _0x16b66d;},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x352)]=function(){const _0x5a68cb=_0x2a5e1a;if(this[_0x5a68cb(0x392)]===Game_Player&&this[_0x5a68cb(0x3a9)]())return this[_0x5a68cb(0x15f)]()[_0x5a68cb(0x1c2)]()['match'](/\[VS8\]/i);else return Imported[_0x5a68cb(0x1df)]&&this[_0x5a68cb(0x4b1)]()?!![]:this[_0x5a68cb(0x1c2)]()['match'](/\[VS8\]/i);},VisuMZ['EventsMoveCore']['Game_CharacterBase_direction']=Game_CharacterBase[_0x2a5e1a(0x357)]['direction'],Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x138)]=function(){const _0x297ff4=_0x2a5e1a;if(!$dataMap)return this[_0x297ff4(0x20e)]||0x2;if(this[_0x297ff4(0x1a3)]()&&!this[_0x297ff4(0x3c4)]()&&this['isSpriteVS8dir']())return this[_0x297ff4(0x1eb)]();else{if(this['isOnLadder']()&&!this[_0x297ff4(0x3c4)]())return 0x8;else return this[_0x297ff4(0x4d7)]()&&this['isSpriteVS8dir']()?this[_0x297ff4(0xc3)]():VisuMZ[_0x297ff4(0x2c1)][_0x297ff4(0x211)][_0x297ff4(0x2ad)](this);}},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x2df)]=Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x3a3)],Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x3a3)]=function(_0x3561ae){const _0x49c614=_0x2a5e1a;if(!this[_0x49c614(0x352)]())_0x3561ae=this['correctFacingDirection'](_0x3561ae);VisuMZ['EventsMoveCore'][_0x49c614(0x2df)][_0x49c614(0x2ad)](this,_0x3561ae);},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x39b)]=function(_0x401372){const _0x2dba9f=_0x2a5e1a;if(_0x401372===0x1)return this[_0x2dba9f(0x153)](this['_x'],this['_y'],0x4)?0x4:0x2;if(_0x401372===0x3)return this[_0x2dba9f(0x153)](this['_x'],this['_y'],0x6)?0x6:0x2;if(_0x401372===0x7)return this['canPass'](this['_x'],this['_y'],0x4)?0x4:0x8;if(_0x401372===0x9)return this[_0x2dba9f(0x153)](this['_x'],this['_y'],0x6)?0x6:0x8;return _0x401372;},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x466)]=function(_0x59965b){const _0x16189a=_0x2a5e1a;return[0x1,0x3,0x5,0x7,0x9][_0x16189a(0x370)](_0x59965b);},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x1fa)]=function(){const _0x33c158=_0x2a5e1a;return this[_0x33c158(0x290)]||0x0;},VisuMZ[_0x2a5e1a(0x2c1)]['Game_CharacterBase_moveStraight']=Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x47b)],Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x47b)]=function(_0x40a32f){const _0x2abf6d=_0x2a5e1a;this[_0x2abf6d(0x290)]=_0x40a32f,VisuMZ[_0x2abf6d(0x2c1)]['Game_CharacterBase_moveStraight'][_0x2abf6d(0x2ad)](this,_0x40a32f);},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x1b7)]=function(_0x3ff81d){const _0x404067=_0x2a5e1a;if(!this['isDiagonalDirection'](_0x3ff81d))return this[_0x404067(0x47b)](_0x3ff81d);let _0x3c7d47=0x0,_0x34589a=0x0;switch(_0x3ff81d){case 0x1:_0x3c7d47=0x4,_0x34589a=0x2;break;case 0x3:_0x3c7d47=0x6,_0x34589a=0x2;break;case 0x7:_0x3c7d47=0x4,_0x34589a=0x8;break;case 0x9:_0x3c7d47=0x6,_0x34589a=0x8;break;}if(VisuMZ[_0x404067(0x2c1)]['Settings'][_0x404067(0x44f)][_0x404067(0x32b)]){if(!this[_0x404067(0x153)](this['_x'],this['_y'],_0x3c7d47))return this[_0x404067(0x47b)](_0x34589a);if(!this[_0x404067(0x153)](this['_x'],this['_y'],_0x34589a))return this[_0x404067(0x47b)](_0x3c7d47);if(!this['canPassDiagonally'](this['_x'],this['_y'],_0x3c7d47,_0x34589a)){let _0x18bf96=VisuMZ[_0x404067(0x2c1)][_0x404067(0x14c)]['Movement'][_0x404067(0x252)]?_0x3c7d47:_0x34589a;return this[_0x404067(0x47b)](_0x18bf96);}}this[_0x404067(0x290)]=_0x3ff81d,this[_0x404067(0x47c)](_0x3c7d47,_0x34589a);},VisuMZ['EventsMoveCore'][_0x2a5e1a(0x3e8)]=Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x432)],Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x432)]=function(){const _0x1558d7=_0x2a5e1a;let _0x4dcd3b=this[_0x1558d7(0x425)];return this['isDashing']()&&(_0x4dcd3b+=this[_0x1558d7(0x13c)]()),this['adjustDir8MovementSpeed'](_0x4dcd3b);},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x13c)]=function(){const _0x3b419b=_0x2a5e1a,_0x42ef3c=VisuMZ[_0x3b419b(0x2c1)][_0x3b419b(0x14c)][_0x3b419b(0x44f)];return _0x42ef3c['DashModifier']!==undefined?_0x42ef3c['DashModifier']:VisuMZ['EventsMoveCore'][_0x3b419b(0x3e8)]['call'](this)-this[_0x3b419b(0x425)];},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x4eb)]=function(_0x2ea61){const _0x4b5006=_0x2a5e1a,_0x56d290=VisuMZ['EventsMoveCore']['Settings'][_0x4b5006(0x44f)];if(!_0x56d290['SlowerSpeed'])return _0x2ea61;return[0x1,0x3,0x7,0x9][_0x4b5006(0x370)](this[_0x4b5006(0x290)])&&(_0x2ea61*=_0x56d290['DiagonalSpeedMultiplier']||0.01),_0x2ea61;},VisuMZ[_0x2a5e1a(0x2c1)]['Game_CharacterBase_isDashing']=Game_CharacterBase['prototype'][_0x2a5e1a(0x3cf)],Game_CharacterBase[_0x2a5e1a(0x357)]['isDashing']=function(){const _0x4c27ec=_0x2a5e1a;if(!Game_CharacterBase[_0x4c27ec(0x2ac)]&&this[_0x4c27ec(0x1a3)]())return![];if(this[_0x4c27ec(0x34b)])return!![];return VisuMZ[_0x4c27ec(0x2c1)][_0x4c27ec(0x3cd)][_0x4c27ec(0x2ad)](this);},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x2fb)]=function(){const _0x3ce855=_0x2a5e1a;return this[_0x3ce855(0x3cf)]()&&this[_0x3ce855(0x14b)]===0x0;},VisuMZ['EventsMoveCore'][_0x2a5e1a(0xd3)]=Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x336)],Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x336)]=function(){const _0x3148c4=_0x2a5e1a;return this[_0x3148c4(0x4d7)]()?this[_0x3148c4(0x33c)]():VisuMZ[_0x3148c4(0x2c1)][_0x3148c4(0xd3)]['call'](this);},VisuMZ['EventsMoveCore'][_0x2a5e1a(0x37c)]=Game_CharacterBase['prototype'][_0x2a5e1a(0x2e9)],Game_CharacterBase['prototype']['increaseSteps']=function(){const _0xabea85=_0x2a5e1a;VisuMZ['EventsMoveCore'][_0xabea85(0x37c)][_0xabea85(0x2ad)](this),this[_0xabea85(0x4de)]();},VisuMZ['EventsMoveCore']['Game_CharacterBase_characterIndex']=Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x32c)],Game_CharacterBase[_0x2a5e1a(0x357)]['characterIndex']=function(){const _0x54c836=_0x2a5e1a;if(this[_0x54c836(0x352)]())return this[_0x54c836(0x276)]();return VisuMZ[_0x54c836(0x2c1)][_0x54c836(0x39e)][_0x54c836(0x2ad)](this);},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x276)]=function(){const _0xc9d13c=_0x2a5e1a,_0x9c2fbc=this[_0xc9d13c(0x138)]();if(this['isJumping']()){if([0x2,0x4,0x6,0x8][_0xc9d13c(0x370)](_0x9c2fbc))return 0x4;if([0x1,0x3,0x7,0x9][_0xc9d13c(0x370)](_0x9c2fbc))return 0x5;}else{if(this['isOnLadder']())return 0x6;else{if(this[_0xc9d13c(0x4d7)]())return this[_0xc9d13c(0x40d)]();else{if(this['_forceCarrying']){if([0x2,0x4,0x6,0x8][_0xc9d13c(0x370)](_0x9c2fbc))return 0x4;if([0x1,0x3,0x7,0x9]['includes'](_0x9c2fbc))return 0x5;}else{if(this['hasEventIcon']()&&this[_0xc9d13c(0x191)]()){if([0x2,0x4,0x6,0x8][_0xc9d13c(0x370)](_0x9c2fbc))return 0x4;if([0x1,0x3,0x7,0x9][_0xc9d13c(0x370)](_0x9c2fbc))return 0x5;}else{if(this['isDashingAndMoving']()){if([0x2,0x4,0x6,0x8]['includes'](_0x9c2fbc))return 0x2;if([0x1,0x3,0x7,0x9]['includes'](_0x9c2fbc))return 0x3;}else{if([0x2,0x4,0x6,0x8][_0xc9d13c(0x370)](_0x9c2fbc))return 0x0;if([0x1,0x3,0x7,0x9][_0xc9d13c(0x370)](_0x9c2fbc))return 0x1;}}}}}}},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x191)]=function(){const _0x488f4a=_0x2a5e1a;return VisuMZ[_0x488f4a(0x2c1)]['Settings'][_0x488f4a(0x43a)][_0x488f4a(0x16e)];},Game_CharacterBase[_0x2a5e1a(0x357)]['isOnRope']=function(){const _0x1e2181=_0x2a5e1a;return this[_0x1e2181(0x1a3)]()&&this['terrainTag']()===VisuMZ[_0x1e2181(0x2c1)][_0x1e2181(0x14c)][_0x1e2181(0x27a)][_0x1e2181(0x154)];},Game_CharacterBase['prototype'][_0x2a5e1a(0x1eb)]=function(){const _0x1d4861=_0x2a5e1a;return this[_0x1d4861(0x39d)]()?0x4:0x2;},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x150)]=Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x125)],Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x125)]=function(){const _0x1764f2=_0x2a5e1a;VisuMZ[_0x1764f2(0x2c1)]['Game_CharacterBase_update'][_0x1764f2(0x2ad)](this),this[_0x1764f2(0x461)]();},Game_CharacterBase['prototype'][_0x2a5e1a(0x461)]=function(){const _0x4292ef=_0x2a5e1a;this[_0x4292ef(0x341)]=this['_poseDuration']||0x0;if(this[_0x4292ef(0x341)]>0x0){this['_poseDuration']--;if(this['_poseDuration']<=0x0&&this[_0x4292ef(0x4e4)]!==_0x4292ef(0x3b0))this['clearPose']();}},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x380)]=Game_CharacterBase[_0x2a5e1a(0x357)]['moveDiagonally'],Game_CharacterBase['prototype']['moveDiagonally']=function(_0x1de030,_0x54967f){const _0x4b0cbf=_0x2a5e1a;VisuMZ[_0x4b0cbf(0x2c1)][_0x4b0cbf(0x380)][_0x4b0cbf(0x2ad)](this,_0x1de030,_0x54967f);if(this['isSpriteVS8dir']())this[_0x4b0cbf(0x376)](_0x1de030,_0x54967f);},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x376)]=function(_0x33b7c5,_0x15a1e4){const _0x1966f8=_0x2a5e1a;if(_0x33b7c5===0x4&&_0x15a1e4===0x2)this['setDirection'](0x1);if(_0x33b7c5===0x6&&_0x15a1e4===0x2)this[_0x1966f8(0x3a3)](0x3);if(_0x33b7c5===0x4&&_0x15a1e4===0x8)this[_0x1966f8(0x3a3)](0x7);if(_0x33b7c5===0x6&&_0x15a1e4===0x8)this['setDirection'](0x9);},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x230)]=Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x4ea)],Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x4ea)]=function(){const _0x22e57d=_0x2a5e1a;if(this[_0x22e57d(0x4d7)]()&&this[_0x22e57d(0x319)]()===_0x22e57d(0x3b0))return!![];return VisuMZ[_0x22e57d(0x2c1)][_0x22e57d(0x230)][_0x22e57d(0x2ad)](this);},Game_CharacterBase['prototype'][_0x2a5e1a(0x185)]=function(_0x24e4dc,_0x59de69){const _0x232171=_0x2a5e1a;if(_0x24e4dc[_0x232171(0x355)](/Z/i))_0x24e4dc=_0x232171(0x3b0);if(_0x24e4dc[_0x232171(0x355)](/SLEEP/i))_0x24e4dc=_0x232171(0x3b0);this[_0x232171(0x352)]()&&(this[_0x232171(0x4e4)]=_0x24e4dc[_0x232171(0x108)]()[_0x232171(0x215)](),this['_poseDuration']=_0x59de69||Infinity);},Game_CharacterBase['prototype'][_0x2a5e1a(0x319)]=function(){const _0x290bbb=_0x2a5e1a;return this['isSpriteVS8dir']()?(this[_0x290bbb(0x4e4)]||'')['toUpperCase']()[_0x290bbb(0x215)]():''[_0x290bbb(0x108)]()[_0x290bbb(0x215)]();},Game_CharacterBase['prototype'][_0x2a5e1a(0x1af)]=function(_0x572628,_0x53b1ed){const _0xd56beb=_0x2a5e1a;if(this[_0xd56beb(0x352)]()){const _0x36c0b2=['',_0xd56beb(0x2f1),_0xd56beb(0x28f),_0xd56beb(0x4d2),_0xd56beb(0x48e),_0xd56beb(0x398),_0xd56beb(0x49e),_0xd56beb(0xbd),_0xd56beb(0x2b8),_0xd56beb(0x13e),_0xd56beb(0x3b0),'','','','',''][_0x572628];this['setPose'](_0x36c0b2,_0x53b1ed);}},Game_CharacterBase['prototype']['clearPose']=function(){const _0x3b6ada=_0x2a5e1a;this['_pose']='',this[_0x3b6ada(0x341)]=0x0;},Game_CharacterBase['prototype'][_0x2a5e1a(0x4d7)]=function(){const _0x58c869=_0x2a5e1a;return this[_0x58c869(0x352)]()&&!!this[_0x58c869(0x4e4)];},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x40d)]=function(){const _0x44b355=_0x2a5e1a,_0x4ec5f6=this[_0x44b355(0x4e4)][_0x44b355(0x108)]();switch(this['_pose']['toUpperCase']()[_0x44b355(0x215)]()){case'ITEM':case _0x44b355(0x1ea):case'VICTORY':case _0x44b355(0x1fe):case _0x44b355(0x4b3):case'COLLAPSE':return 0x6;break;default:return 0x7;break;}},Game_CharacterBase[_0x2a5e1a(0x357)]['getPosingCharacterDirection']=function(){const _0x213515=_0x2a5e1a;switch(this['_pose'][_0x213515(0x108)]()){case _0x213515(0x2f1):case _0x213515(0x28f):case _0x213515(0x4d2):case'!':case'?':return 0x2;break;case _0x213515(0x48e):case _0x213515(0x398):case'SWEAT':return 0x4;break;case _0x213515(0x196):case _0x213515(0x1ea):case _0x213515(0x395):case _0x213515(0xbd):case _0x213515(0x2b8):case _0x213515(0x13e):return 0x6;break;case'HURT':case _0x213515(0x4b3):case _0x213515(0x1d6):case'ZZZ':case _0x213515(0x366):return 0x8;break;default:return VisuMZ[_0x213515(0x2c1)][_0x213515(0x2df)][_0x213515(0x2ad)](this);break;}},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x33c)]=function(){const _0x3b6c81=_0x2a5e1a;switch(this['_pose'][_0x3b6c81(0x108)]()){case'ITEM':case _0x3b6c81(0x1fe):case _0x3b6c81(0x2f1):case'!':case _0x3b6c81(0x48e):case'COBWEB':return 0x0;break;case _0x3b6c81(0x1ea):case _0x3b6c81(0x4b3):case _0x3b6c81(0x28f):case'?':case'ANGER':case _0x3b6c81(0x2b8):return 0x1;break;case _0x3b6c81(0x395):case _0x3b6c81(0x1d6):case _0x3b6c81(0x4d2):case _0x3b6c81(0x49e):case _0x3b6c81(0x13e):return 0x2;break;default:return VisuMZ[_0x3b6c81(0x2c1)][_0x3b6c81(0xd3)][_0x3b6c81(0x2ad)](this);break;}},Game_CharacterBase[_0x2a5e1a(0x357)]['forceCarrying']=function(){this['_forceCarrying']=!![];},Game_CharacterBase['prototype']['clearCarrying']=function(){this['_forceCarrying']=![];},Game_CharacterBase['prototype']['forceDashing']=function(){const _0x2143f0=_0x2a5e1a;this[_0x2143f0(0x34b)]=!![];},Game_CharacterBase['prototype']['clearDashing']=function(){const _0x10df57=_0x2a5e1a;this[_0x10df57(0x34b)]=![];},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x3c2)]=function(){const _0x18f47c=_0x2a5e1a;if(this[_0x18f47c(0x19a)]())return![];if(this[_0x18f47c(0x1b9)])return![];if(this['_characterName']==='')return![];if(this[_0x18f47c(0x392)]===Game_Vehicle)return![];if(this[_0x18f47c(0x45e)]())return![];return!![];},Game_CharacterBase['prototype'][_0x2a5e1a(0x4c5)]=function(){const _0x13ecdf=_0x2a5e1a;if(this[_0x13ecdf(0x1a3)]())return!![];if(this[_0x13ecdf(0x392)]===Game_Player&&this['isInVehicle']())return!![];return![];},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x1c6)]=function(){const _0xeab6d1=_0x2a5e1a;return VisuMZ[_0xeab6d1(0x2c1)]['Settings']['Movement'][_0xeab6d1(0x4a1)];},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x426)]=function(){const _0x5e3f50=_0x2a5e1a;return this[_0x5e3f50(0x227)]();},Game_CharacterBase['prototype'][_0x2a5e1a(0x21a)]=function(){const _0x56341b=_0x2a5e1a,_0x20d1b7=$gameMap['tileHeight']();return Math[_0x56341b(0x2ee)](this[_0x56341b(0x42f)]()*_0x20d1b7+_0x20d1b7);},Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x4b8)]=function(_0x1e9832,_0x154160){const _0x56edae=_0x2a5e1a,_0x1e4f78=this[_0x56edae(0x3f9)](),_0x387264=$gameMap[_0x56edae(0x372)](),_0x13213d=[],_0x1d5b03=[],_0x426080=[],_0x4715af={};let _0xb9a52a=_0x4715af;if(this['x']===_0x1e9832&&this['y']===_0x154160)return 0x0;_0x4715af[_0x56edae(0x21c)]=null,_0x4715af['x']=this['x'],_0x4715af['y']=this['y'],_0x4715af['g']=0x0,_0x4715af['f']=$gameMap['distance'](_0x4715af['x'],_0x4715af['y'],_0x1e9832,_0x154160),_0x13213d[_0x56edae(0x4b0)](_0x4715af),_0x1d5b03['push'](_0x4715af['y']*_0x387264+_0x4715af['x']);while(_0x13213d[_0x56edae(0x396)]>0x0){let _0x5c5038=0x0;for(let _0x2baf31=0x0;_0x2baf31<_0x13213d[_0x56edae(0x396)];_0x2baf31++){_0x13213d[_0x2baf31]['f']<_0x13213d[_0x5c5038]['f']&&(_0x5c5038=_0x2baf31);}const _0x3547f4=_0x13213d[_0x5c5038],_0x3e1e01=_0x3547f4['x'],_0x36603c=_0x3547f4['y'],_0x1aa996=_0x36603c*_0x387264+_0x3e1e01,_0x539b77=_0x3547f4['g'];_0x13213d[_0x56edae(0x494)](_0x5c5038,0x1),_0x1d5b03[_0x56edae(0x494)](_0x1d5b03[_0x56edae(0x1f9)](_0x1aa996),0x1),_0x426080['push'](_0x1aa996);if(_0x3547f4['x']===_0x1e9832&&_0x3547f4['y']===_0x154160){_0xb9a52a=_0x3547f4;break;}if(_0x539b77>=_0x1e4f78)continue;const _0x2d7f7f=[0x0,0x4,0x0,0x6,0x4,0x0,0x6,0x4,0x0,0x6],_0x21b919=[0x0,0x2,0x2,0x2,0x0,0x0,0x0,0x8,0x8,0x8];for(let _0x3b57f4=0x1;_0x3b57f4<0xa;_0x3b57f4++){if(_0x3b57f4===0x5)continue;const _0x9f2e40=_0x3b57f4,_0x7f3420=_0x2d7f7f[_0x3b57f4],_0x2f4607=_0x21b919[_0x3b57f4],_0x3e75b7=$gameMap['roundXWithDirection'](_0x3e1e01,_0x9f2e40),_0x228f0d=$gameMap[_0x56edae(0x1fc)](_0x36603c,_0x9f2e40),_0x3e4b81=_0x228f0d*_0x387264+_0x3e75b7;if(_0x426080[_0x56edae(0x370)](_0x3e4b81))continue;if(this[_0x56edae(0x392)]===Game_Player&&VisuMZ[_0x56edae(0x2c1)][_0x56edae(0x14c)]['Movement'][_0x56edae(0x32b)]){if(!this[_0x56edae(0x153)](_0x3e1e01,_0x36603c,_0x7f3420))continue;if(!this['canPass'](_0x3e1e01,_0x36603c,_0x2f4607))continue;}if(!this[_0x56edae(0x2fc)](_0x3e1e01,_0x36603c,_0x7f3420,_0x2f4607))continue;const _0x141c13=_0x539b77+0x1,_0x1427b7=_0x1d5b03[_0x56edae(0x1f9)](_0x3e4b81);if(_0x1427b7<0x0||_0x141c13<_0x13213d[_0x1427b7]['g']){let _0xba9dcc={};_0x1427b7>=0x0?_0xba9dcc=_0x13213d[_0x1427b7]:(_0x13213d[_0x56edae(0x4b0)](_0xba9dcc),_0x1d5b03['push'](_0x3e4b81)),_0xba9dcc[_0x56edae(0x21c)]=_0x3547f4,_0xba9dcc['x']=_0x3e75b7,_0xba9dcc['y']=_0x228f0d,_0xba9dcc['g']=_0x141c13,_0xba9dcc['f']=_0x141c13+$gameMap[_0x56edae(0x3fc)](_0x3e75b7,_0x228f0d,_0x1e9832,_0x154160),(!_0xb9a52a||_0xba9dcc['f']-_0xba9dcc['g']<_0xb9a52a['f']-_0xb9a52a['g'])&&(_0xb9a52a=_0xba9dcc);}}}let _0x3ab5bb=_0xb9a52a;while(_0x3ab5bb[_0x56edae(0x21c)]&&_0x3ab5bb[_0x56edae(0x21c)]!==_0x4715af){_0x3ab5bb=_0x3ab5bb['parent'];}const _0x3e31d6=$gameMap[_0x56edae(0x1a2)](_0x3ab5bb['x'],_0x4715af['x']),_0xa0fbc2=$gameMap[_0x56edae(0x34a)](_0x3ab5bb['y'],_0x4715af['y']);if(_0x3e31d6<0x0&&_0xa0fbc2>0x0)return 0x1;if(_0x3e31d6>0x0&&_0xa0fbc2>0x0)return 0x3;if(_0x3e31d6<0x0&&_0xa0fbc2<0x0)return 0x7;if(_0x3e31d6>0x0&&_0xa0fbc2<0x0)return 0x9;if(_0xa0fbc2>0x0)return 0x2;if(_0x3e31d6<0x0)return 0x4;if(_0x3e31d6>0x0)return 0x6;if(_0xa0fbc2<0x0)return 0x8;const _0x2c94c8=this['deltaXFrom'](_0x1e9832),_0x4c0d73=this['deltaYFrom'](_0x154160);if(Math[_0x56edae(0x409)](_0x2c94c8)>Math[_0x56edae(0x409)](_0x4c0d73))return _0x2c94c8>0x0?0x4:0x6;else{if(_0x4c0d73!==0x0)return _0x4c0d73>0x0?0x8:0x2;}return 0x0;},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x458)]=Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x153)],Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x153)]=function(_0x5af87d,_0x13253b,_0x22d96b){const _0x4c7a5a=_0x2a5e1a;return this[_0x4c7a5a(0xca)]===_0x4c7a5a(0x356)?this[_0x4c7a5a(0x15f)]()[_0x4c7a5a(0x221)](_0x5af87d,_0x13253b,_0x22d96b):VisuMZ[_0x4c7a5a(0x2c1)][_0x4c7a5a(0x458)]['call'](this,_0x5af87d,_0x13253b,_0x22d96b);},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x210)]=function(){const _0x554cb6=_0x2a5e1a;this[_0x554cb6(0x365)]=0x0,this['_spriteOffsetY']=0x0;},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x3ee)]=Game_CharacterBase['prototype'][_0x2a5e1a(0x227)],Game_CharacterBase['prototype'][_0x2a5e1a(0x227)]=function(){const _0x348763=_0x2a5e1a;return VisuMZ[_0x348763(0x2c1)][_0x348763(0x3ee)][_0x348763(0x2ad)](this)+(this[_0x348763(0x365)]||0x0);},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x10b)]=Game_CharacterBase['prototype']['screenY'],Game_CharacterBase[_0x2a5e1a(0x357)]['screenY']=function(){const _0x156af8=_0x2a5e1a;return VisuMZ['EventsMoveCore'][_0x156af8(0x10b)][_0x156af8(0x2ad)](this)+(this[_0x156af8(0x44a)]||0x0);},Game_CharacterBase['DEFAULT_SHIFT_Y']=VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x14c)][_0x2a5e1a(0x44f)]['ShiftY']??-0x6,Game_CharacterBase[_0x2a5e1a(0x357)]['shiftY']=function(){const _0x17d12e=_0x2a5e1a;return this[_0x17d12e(0x4ce)]()?0x0:-Game_CharacterBase['DEFAULT_SHIFT_Y'];},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x490)]=function(){const _0x29e393=_0x2a5e1a;this[_0x29e393(0x244)]='';},VisuMZ['EventsMoveCore'][_0x2a5e1a(0x122)]=Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x2a4)],Game_CharacterBase['prototype'][_0x2a5e1a(0x2a4)]=function(){const _0x41d775=_0x2a5e1a;if(this[_0x41d775(0x453)])return;if(this[_0x41d775(0x4b6)]())return;VisuMZ['EventsMoveCore'][_0x41d775(0x122)][_0x41d775(0x2ad)](this);},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x4b6)]=function(){const _0x4836c5=_0x2a5e1a;if(!this[_0x4836c5(0x4ea)]()&&this['_stopCount']>0x0)return![];switch(String(this[_0x4836c5(0x244)])[_0x4836c5(0x108)]()[_0x4836c5(0x215)]()){case _0x4836c5(0x417):this[_0x4836c5(0x305)]+=0x1;if(this[_0x4836c5(0x305)]>0x2)this['setPattern'](0x0);break;case'RIGHT\x20TO\x20LEFT':this[_0x4836c5(0x305)]-=0x1;if(this['_pattern']<0x0)this[_0x4836c5(0x427)](0x2);break;case _0x4836c5(0x267):case'SPIN\x20CW':this[_0x4836c5(0x44e)]();break;case _0x4836c5(0x306):case _0x4836c5(0x2d8):case _0x4836c5(0x499):case'SPIN\x20ACW':this[_0x4836c5(0x38f)]();break;default:return![];}return!![];},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x429)]=function(){return $gameSystem['getEventIconData'](this);},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x213)]=function(){const _0x44a368=_0x2a5e1a,_0x1417bc=this[_0x44a368(0x429)]();if(!_0x1417bc)return![];return _0x1417bc[_0x44a368(0x447)]>0x0;},Game_CharacterBase['prototype'][_0x2a5e1a(0x439)]=function(){const _0x368481=_0x2a5e1a,_0x4e4375=this[_0x368481(0x138)]();return $gameMap['roundXWithDirection'](this['x'],_0x4e4375);},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x123)]=function(){const _0x2146ab=_0x2a5e1a,_0x2b0682=this['direction']();return $gameMap[_0x2146ab(0x1fc)](this['y'],_0x2b0682);},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x3b1)]=function(){const _0x3174c0=_0x2a5e1a,_0x3e22a9=this[_0x3174c0(0x1a7)](this[_0x3174c0(0x138)]());return $gameMap[_0x3174c0(0x273)](this['x'],_0x3e22a9);},Game_CharacterBase['prototype'][_0x2a5e1a(0x462)]=function(){const _0x583dee=_0x2a5e1a,_0x20ded6=this[_0x583dee(0x1a7)](this[_0x583dee(0x138)]());return $gameMap[_0x583dee(0x1fc)](this['y'],_0x20ded6);},Game_CharacterBase['prototype']['ccwX']=function(){const _0x255396=_0x2a5e1a,_0x1f508e=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this[_0x255396(0x138)]()];return $gameMap[_0x255396(0x273)](this['x'],_0x1f508e);},Game_CharacterBase[_0x2a5e1a(0x357)]['ccwY']=function(){const _0x1a2e20=_0x2a5e1a,_0xe6a80f=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this[_0x1a2e20(0x138)]()];return $gameMap[_0x1a2e20(0x1fc)](this['y'],_0xe6a80f);},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x271)]=function(){const _0x51aff4=_0x2a5e1a,_0x3e5244=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this[_0x51aff4(0x138)]()];return $gameMap['roundXWithDirection'](this['x'],_0x3e5244);},Game_CharacterBase[_0x2a5e1a(0x357)]['cwY']=function(){const _0x3e1dc9=_0x2a5e1a,_0x3dce19=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this[_0x3e1dc9(0x138)]()];return $gameMap[_0x3e1dc9(0x1fc)](this['y'],_0x3dce19);},VisuMZ['EventsMoveCore']['Game_Character_setMoveRoute']=Game_Character['prototype'][_0x2a5e1a(0x2cc)],Game_Character[_0x2a5e1a(0x357)]['setMoveRoute']=function(_0x5cfdc2){const _0x28c3de=_0x2a5e1a;route=JsonEx[_0x28c3de(0xf6)](_0x5cfdc2),VisuMZ[_0x28c3de(0x2c1)]['Game_Character_setMoveRoute'][_0x28c3de(0x2ad)](this,route);},VisuMZ['EventsMoveCore'][_0x2a5e1a(0x367)]=Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x4d0)],Game_Character[_0x2a5e1a(0x357)]['forceMoveRoute']=function(_0x126071){const _0x47dd68=_0x2a5e1a;route=JsonEx[_0x47dd68(0xf6)](_0x126071),VisuMZ[_0x47dd68(0x2c1)][_0x47dd68(0x367)][_0x47dd68(0x2ad)](this,route);},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x1b8)]=Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x322)],Game_Character[_0x2a5e1a(0x357)]['processMoveCommand']=function(_0xd50149){const _0x79bbbb=_0x2a5e1a,_0x1f943f=Game_Character,_0x2ee3a4=_0xd50149[_0x79bbbb(0x1b3)];if(_0xd50149[_0x79bbbb(0x324)]===_0x1f943f[_0x79bbbb(0x437)]){let _0x3d2c33=_0xd50149[_0x79bbbb(0x1b3)][0x0];_0x3d2c33=this[_0x79bbbb(0x39a)](_0x3d2c33),_0x3d2c33=this[_0x79bbbb(0x17f)](_0x3d2c33),this['processMoveCommandEventsMoveCore'](_0xd50149,_0x3d2c33);}else VisuMZ[_0x79bbbb(0x2c1)][_0x79bbbb(0x1b8)][_0x79bbbb(0x2ad)](this,_0xd50149);},Game_Character['prototype'][_0x2a5e1a(0x39a)]=function(_0x49c728){const _0x7df9af=_0x2a5e1a,_0xc8dc7b=/\$gameVariables\.value\((\d+)\)/gi,_0x93c076=/\\V\[(\d+)\]/gi;while(_0x49c728[_0x7df9af(0x355)](_0xc8dc7b)){_0x49c728=_0x49c728['replace'](_0xc8dc7b,(_0x41b921,_0x45a18b)=>$gameVariables['value'](parseInt(_0x45a18b)));}while(_0x49c728[_0x7df9af(0x355)](_0x93c076)){_0x49c728=_0x49c728[_0x7df9af(0x328)](_0x93c076,(_0x1070e8,_0x154e1b)=>$gameVariables[_0x7df9af(0x436)](parseInt(_0x154e1b)));}return _0x49c728;},Game_Character['prototype'][_0x2a5e1a(0x17f)]=function(_0x9618c){const _0x10b477=_0x2a5e1a,_0x3b33db=/\\SELFVAR\[(\d+)\]/gi;while(_0x9618c[_0x10b477(0x355)](_0x3b33db)){_0x9618c=_0x9618c['replace'](_0x3b33db,(_0x124113,_0x299a56)=>getSelfVariableValue(this[_0x10b477(0x49f)],this['_eventId'],parseInt(_0x299a56)));}return _0x9618c;},Game_Character[_0x2a5e1a(0x357)]['processMoveCommandEventsMoveCore']=function(_0x3e3622,_0x39449d){const _0xff5dfd=_0x2a5e1a;if(_0x39449d[_0xff5dfd(0x355)](/ANIMATION:[ ](\d+)/i))return this[_0xff5dfd(0xfa)](Number(RegExp['$1']));if(_0x39449d[_0xff5dfd(0x355)](/BALLOON:[ ](.*)/i))return this['processMoveRouteBalloon'](String(RegExp['$1']));if(_0x39449d[_0xff5dfd(0x355)](/FADE IN:[ ](\d+)/i))return this['processMoveRouteFadeIn'](Number(RegExp['$1']));if(_0x39449d[_0xff5dfd(0x355)](/FADE OUT:[ ](\d+)/i))return this['processMoveRouteFadeOut'](Number(RegExp['$1']));if(_0x39449d['match'](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:TRUE|ON)/i))return this['forceCarrying']();if(_0x39449d['match'](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:FALSE|OFF)/i))return this[_0xff5dfd(0xda)]();if(_0x39449d[_0xff5dfd(0x355)](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:TRUE|ON)/i))return this['forceDashing']();if(_0x39449d[_0xff5dfd(0x355)](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:FALSE|OFF)/i))return this[_0xff5dfd(0x11e)]();if(_0x39449d[_0xff5dfd(0x355)](/HUG:[ ]LEFT/i))return this['processMoveRouteHugWall'](_0xff5dfd(0x1d1));if(_0x39449d[_0xff5dfd(0x355)](/HUG:[ ]RIGHT/i))return this[_0xff5dfd(0x2e0)](_0xff5dfd(0x3e3));if(_0x39449d[_0xff5dfd(0x355)](/INDEX:[ ](\d+)/i))return this[_0xff5dfd(0x32f)](Number(RegExp['$1']));if(_0x39449d[_0xff5dfd(0x355)](/INDEX:[ ]([\+\-]\d+)/i)){const _0x3912d8=this['_characterIndex']+Number(RegExp['$1']);return this[_0xff5dfd(0x32f)](_0x3912d8);}if(_0x39449d[_0xff5dfd(0x355)](/JUMP FORWARD:[ ](\d+)/i))return this[_0xff5dfd(0xeb)](Number(RegExp['$1']));if(_0x39449d[_0xff5dfd(0x355)](/JUMP TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0xff5dfd(0x42d)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x39449d[_0xff5dfd(0x355)](/JUMP TO EVENT:[ ](\d+)/i)){const _0x4464c1=$gameMap['event'](Number(RegExp['$1']));return this[_0xff5dfd(0x282)](_0x4464c1);}if(_0x39449d[_0xff5dfd(0x355)](/JUMP TO PLAYER/i))return this[_0xff5dfd(0x282)]($gamePlayer);if(_0x39449d['match'](/JUMP TO HOME/i)&&this[_0xff5dfd(0x1cc)]){const _0x15c487=this['_randomHomeX'],_0x5063d2=this[_0xff5dfd(0x24a)];return this['processMoveRouteJumpTo'](_0x15c487,_0x5063d2);}if(_0x39449d[_0xff5dfd(0x355)](/MOVE[ ](.*)[ ]UNTIL STOP/i)){const _0x395777=String(RegExp['$1']),_0x19555e=this[_0xff5dfd(0x24c)](_0x39449d);return this[_0xff5dfd(0x3bf)](_0x395777,_0x19555e);}if(_0x39449d[_0xff5dfd(0x355)](/MOVE TO:\s*(\d+)\s*[, ]\s*(\d+)/i)){const _0x56e102=Number(RegExp['$1']),_0x3f9252=Number(RegExp['$2']),_0x3094ab=this[_0xff5dfd(0x24c)](_0x39449d);return this[_0xff5dfd(0x1ef)](_0x56e102,_0x3f9252,_0x3094ab);}if(_0x39449d[_0xff5dfd(0x355)](/MOVE TO EVENT:[ ](\d+)/i)){const _0x192512=$gameMap[_0xff5dfd(0x390)](Number(RegExp['$1'])),_0x11c309=this[_0xff5dfd(0x24c)](_0x39449d);return this[_0xff5dfd(0x34e)](_0x192512,_0x11c309);}if(_0x39449d['match'](/MOVE TO PLAYER/i)){const _0xf66c80=this['checkCollisionKeywords'](_0x39449d);return this['processMoveRouteMoveToCharacter']($gamePlayer,_0xf66c80);}if(_0x39449d[_0xff5dfd(0x355)](/MOVE TO HOME/i)&&this[_0xff5dfd(0x1cc)]){const _0x18bcbe=this[_0xff5dfd(0x3e1)],_0x56e781=this[_0xff5dfd(0x24a)],_0x3acc34=this[_0xff5dfd(0x24c)](_0x39449d);return this[_0xff5dfd(0x1ef)](_0x18bcbe,_0x56e781,_0x3acc34);}if(_0x39449d[_0xff5dfd(0x355)](/MOVE LOWER LEFT:[ ](\d+)/i))return this[_0xff5dfd(0x16f)](0x1,Number(RegExp['$1']));if(_0x39449d[_0xff5dfd(0x355)](/MOVE DOWN:[ ](\d+)/i))return this[_0xff5dfd(0x16f)](0x2,Number(RegExp['$1']));if(_0x39449d[_0xff5dfd(0x355)](/MOVE LOWER RIGHT:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x3,Number(RegExp['$1']));if(_0x39449d[_0xff5dfd(0x355)](/MOVE LEFT:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x4,Number(RegExp['$1']));if(_0x39449d[_0xff5dfd(0x355)](/MOVE RIGHT:[ ](\d+)/i))return this[_0xff5dfd(0x16f)](0x6,Number(RegExp['$1']));if(_0x39449d['match'](/MOVE UPPER LEFT:[ ](\d+)/i))return this[_0xff5dfd(0x16f)](0x7,Number(RegExp['$1']));if(_0x39449d[_0xff5dfd(0x355)](/MOVE UP:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x8,Number(RegExp['$1']));if(_0x39449d['match'](/MOVE UPPER RIGHT:[ ](\d+)/i))return this[_0xff5dfd(0x16f)](0x9,Number(RegExp['$1']));if(_0x39449d[_0xff5dfd(0x355)](/OPACITY:[ ](\d+)([%％])/i)){const _0x3179c6=Math[_0xff5dfd(0x394)](Number(RegExp['$1'])/0x64*0xff);return this[_0xff5dfd(0x137)](_0x3179c6[_0xff5dfd(0x374)](0x0,0xff));}if(_0x39449d[_0xff5dfd(0x355)](/OPACITY:[ ]([\+\-]\d+)([%％])/i)){const _0x49ee94=this[_0xff5dfd(0x431)]+Math['round'](Number(RegExp['$1'])/0x64*0xff);return this[_0xff5dfd(0x137)](_0x49ee94[_0xff5dfd(0x374)](0x0,0xff));}if(_0x39449d[_0xff5dfd(0x355)](/OPACITY:[ ]([\+\-]\d+)/i)){const _0x49e301=this[_0xff5dfd(0x431)]+Number(RegExp['$1']);return this[_0xff5dfd(0x137)](_0x49e301[_0xff5dfd(0x374)](0x0,0xff));}if(_0x39449d['match'](/PATTERN LOCK:[ ](\d+)/i))return this[_0xff5dfd(0x4af)](Number(RegExp['$1']));if(_0x39449d[_0xff5dfd(0x355)](/PATTERN UNLOCK/i))return this['_patternLocked']=![];if(_0x39449d[_0xff5dfd(0x355)](/POSE:[ ](.*)/i)){const _0x5d89be=String(RegExp['$1'])[_0xff5dfd(0x108)]()[_0xff5dfd(0x215)]();return this[_0xff5dfd(0x185)](_0x5d89be);}if(_0x39449d[_0xff5dfd(0x355)](/STEP TOWARD:\s*(\d+)\s*[, ]\s*(\d+)/i)){const _0x4b8efd=Number(RegExp['$1']),_0x47d128=Number(RegExp['$2']);return this[_0xff5dfd(0x256)](_0x4b8efd,_0x47d128);}if(_0x39449d['match'](/STEP TOWARD EVENT:[ ](\d+)/i)){const _0x4e7732=$gameMap[_0xff5dfd(0x390)](Number(RegExp['$1']));return this['processMoveRouteStepToCharacter'](_0x4e7732);}if(_0x39449d['match'](/STEP TOWARD PLAYER/i))return this[_0xff5dfd(0x476)]($gamePlayer);if(_0x39449d['match'](/STEP TOWARD HOME/i)&&this[_0xff5dfd(0x1cc)]){const _0x548cc1=this[_0xff5dfd(0x3e1)],_0x11ca83=this['_randomHomeY'];return this['processMoveRouteStepTo'](_0x548cc1,_0x11ca83);}if(_0x39449d[_0xff5dfd(0x355)](/STEP AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0xff5dfd(0x10d)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x39449d[_0xff5dfd(0x355)](/STEP AWAY FROM EVENT:[ ](\d+)/i)){const _0x87285d=$gameMap['event'](Number(RegExp['$1']));return this[_0xff5dfd(0x1bc)](_0x87285d);}if(_0x39449d[_0xff5dfd(0x355)](/STEP AWAY FROM PLAYER/i))return this[_0xff5dfd(0x1bc)]($gamePlayer);if(_0x39449d['match'](/STEP AWAY FROM HOME/i)&&this[_0xff5dfd(0x1cc)]){const _0x1e447c=this['_randomHomeX'],_0x1f7d44=this['_randomHomeY'];return this[_0xff5dfd(0x10d)](_0x1e447c,_0x1f7d44);}if(_0x39449d['match'](/TURN TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0xff5dfd(0x410)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x39449d[_0xff5dfd(0x355)](/TURN TO EVENT:[ ](\d+)/i)){const _0x1aa3f6=$gameMap[_0xff5dfd(0x390)](Number(RegExp['$1']));return this['turnTowardCharacter'](_0x1aa3f6);}if(_0x39449d[_0xff5dfd(0x355)](/TURN TO PLAYER/i))return this['turnTowardCharacter']($gamePlayer);if(_0x39449d['match'](/TURN TO HOME/i)&&this[_0xff5dfd(0x1cc)]){const _0x5e28e1=this[_0xff5dfd(0x3e1)],_0x3bf6e4=this['_randomHomeY'];return this['turnTowardPoint'](_0x5e28e1,_0x3bf6e4);}if(_0x39449d[_0xff5dfd(0x355)](/TURN AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0xff5dfd(0x35b)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x39449d[_0xff5dfd(0x355)](/TURN AWAY FROM EVENT:[ ](\d+)/i)){const _0x4b900b=$gameMap[_0xff5dfd(0x390)](Number(RegExp['$1']));return this[_0xff5dfd(0x2f4)](_0x4b900b);}if(_0x39449d['match'](/TURN AWAY FROM PLAYER/i))return this['turnAwayFromCharacter']($gamePlayer);if(_0x39449d[_0xff5dfd(0x355)](/TURN AWAY FROM HOME/i)&&this[_0xff5dfd(0x1cc)]){const _0x31c7eb=this[_0xff5dfd(0x3e1)],_0x26fb70=this[_0xff5dfd(0x24a)];return this['turnAwayFromPoint'](_0x31c7eb,_0x26fb70);}if(_0x39449d[_0xff5dfd(0x355)](/TURN LOWER LEFT/i))return this[_0xff5dfd(0x3a3)](0x1);if(_0x39449d[_0xff5dfd(0x355)](/TURN LOWER RIGHT/i))return this['setDirection'](0x3);if(_0x39449d[_0xff5dfd(0x355)](/TURN UPPER LEFT/i))return this['setDirection'](0x7);if(_0x39449d[_0xff5dfd(0x355)](/TURN UPPER RIGHT/i))return this[_0xff5dfd(0x3a3)](0x9);if(_0x39449d['match'](/Self Switch[ ](.*):[ ](.*)/i))return this[_0xff5dfd(0x16b)](RegExp['$1'],RegExp['$2']);if(_0x39449d[_0xff5dfd(0x355)](/Self Variable[ ](.*):[ ](.*)/i))return this[_0xff5dfd(0x3ef)](RegExp['$1'],RegExp['$2']);if(_0x39449d[_0xff5dfd(0x355)](/TELEPORT TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0xff5dfd(0x2c3)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x39449d[_0xff5dfd(0x355)](/TELEPORT TO EVENT:[ ](\d+)/i)){const _0x495d9c=$gameMap[_0xff5dfd(0x390)](Number(RegExp['$1']));return this[_0xff5dfd(0x3c8)](_0x495d9c);}if(_0x39449d[_0xff5dfd(0x355)](/TELEPORT TO PLAYER/i))return this['processMoveRouteTeleportToCharacter']($gamePlayer);if(_0x39449d[_0xff5dfd(0x355)](/TELEPORT TO HOME/i)&&this[_0xff5dfd(0x1cc)]){const _0x2d4bbd=this['_randomHomeX'],_0x5d3ca7=this['_randomHomeY'];return this[_0xff5dfd(0x2c3)](_0x2d4bbd,_0x5d3ca7);}try{VisuMZ['EventsMoveCore']['Game_Character_processMoveCommand'][_0xff5dfd(0x2ad)](this,_0x3e3622);}catch(_0x20dad7){if($gameTemp[_0xff5dfd(0x1dc)]())console['log'](_0x20dad7);}},Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0xfa)]=function(_0xc0e317){const _0x2a47fe=_0x2a5e1a;$gameTemp[_0x2a47fe(0xf4)]([this],_0xc0e317);},Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x4dd)]=function(_0x5597e8){const _0x1b204d=_0x2a5e1a;let _0x59aae4=0x0;switch(_0x5597e8[_0x1b204d(0x108)]()['trim']()){case'!':case'EXCLAMATION':_0x59aae4=0x1;break;case'?':case _0x1b204d(0x28f):_0x59aae4=0x2;break;case'MUSIC':case _0x1b204d(0x486):case _0x1b204d(0x4d2):case'MUSIC-NOTE':case'MUSICNOTE':_0x59aae4=0x3;break;case _0x1b204d(0x48e):case'LOVE':_0x59aae4=0x4;break;case _0x1b204d(0x398):_0x59aae4=0x5;break;case _0x1b204d(0x49e):_0x59aae4=0x6;break;case _0x1b204d(0xbd):case _0x1b204d(0xe0):case _0x1b204d(0x422):_0x59aae4=0x7;break;case'SILENCE':case _0x1b204d(0x1d0):_0x59aae4=0x8;break;case _0x1b204d(0x2bb):case _0x1b204d(0x495):case _0x1b204d(0x13e):case _0x1b204d(0x31b):case'LIGHTBULB':_0x59aae4=0x9;break;case'Z':case'ZZ':case _0x1b204d(0x3b0):case _0x1b204d(0x366):_0x59aae4=0xa;break;case _0x1b204d(0x201):_0x59aae4=0xb;break;case'USER-DEFINED\x202':_0x59aae4=0xc;break;case _0x1b204d(0x2cb):_0x59aae4=0xd;break;case _0x1b204d(0x487):_0x59aae4=0xe;break;case _0x1b204d(0x265):_0x59aae4=0xf;break;}$gameTemp[_0x1b204d(0x28c)](this,_0x59aae4);},Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x3de)]=function(_0x1b9a1d){const _0x2cd957=_0x2a5e1a;_0x1b9a1d+=this[_0x2cd957(0x431)],this[_0x2cd957(0x137)](_0x1b9a1d[_0x2cd957(0x374)](0x0,0xff));if(this[_0x2cd957(0x431)]<0xff)this[_0x2cd957(0x3c1)]--;},Game_Character['prototype'][_0x2a5e1a(0x418)]=function(_0x36f524){const _0x19d428=_0x2a5e1a;_0x36f524=this[_0x19d428(0x431)]-_0x36f524,this[_0x19d428(0x137)](_0x36f524['clamp'](0x0,0xff));if(this[_0x19d428(0x431)]>0x0)this['_moveRouteIndex']--;},Game_Character['prototype']['processMoveRouteHugWall']=function(_0x12e30d){const _0x323c48=_0x2a5e1a,_0x5bd996=[0x0,0x3,0x6,0x9,0x2,0x0,0x8,0x1,0x4,0x7],_0xc4c9a5=[0x0,0x7,0x4,0x1,0x8,0x0,0x2,0x9,0x6,0x3],_0x5135be=this[_0x323c48(0x138)](),_0x50a2ea=(_0x12e30d==='left'?_0x5bd996:_0xc4c9a5)[_0x5135be],_0x36e5a5=(_0x12e30d==='left'?_0xc4c9a5:_0x5bd996)[_0x5135be];if(this[_0x323c48(0x153)](this['x'],this['y'],_0x50a2ea))_0x12e30d===_0x323c48(0x1d1)?this[_0x323c48(0x38f)]():this[_0x323c48(0x44e)]();else!this['canPass'](this['x'],this['y'],this['direction']())&&(this['canPass'](this['x'],this['y'],_0x36e5a5)?_0x12e30d===_0x323c48(0x1d1)?this[_0x323c48(0x44e)]():this[_0x323c48(0x38f)]():this[_0x323c48(0x149)]());this[_0x323c48(0x153)](this['x'],this['y'],this['direction']())&&this[_0x323c48(0x33a)]();},Game_Character[_0x2a5e1a(0x357)]['processMoveRouteSetIndex']=function(_0x56b59d){const _0x4f1922=_0x2a5e1a;if(ImageManager[_0x4f1922(0x428)](this[_0x4f1922(0x45f)]))return;_0x56b59d=_0x56b59d[_0x4f1922(0x374)](0x0,0x7),this['setImage'](this['_characterName'],_0x56b59d);},Game_Character[_0x2a5e1a(0x357)]['processMoveRouteJumpForward']=function(_0x27d17e){const _0x55ad51=_0x2a5e1a;switch(this[_0x55ad51(0x138)]()){case 0x1:this['jump'](-_0x27d17e,_0x27d17e);break;case 0x2:this[_0x55ad51(0x4bc)](0x0,_0x27d17e);break;case 0x3:this[_0x55ad51(0x4bc)](_0x27d17e,_0x27d17e);break;case 0x4:this[_0x55ad51(0x4bc)](-_0x27d17e,0x0);break;case 0x6:this[_0x55ad51(0x4bc)](_0x27d17e,0x0);break;case 0x7:this[_0x55ad51(0x4bc)](-_0x27d17e,-_0x27d17e);break;case 0x8:this['jump'](0x0,-_0x27d17e);break;case 0x9:this[_0x55ad51(0x4bc)](_0x27d17e,-_0x27d17e);break;}},Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x42d)]=function(_0x20ec0d,_0x5d838e){const _0x568f7c=_0x2a5e1a,_0x15f81b=Math[_0x568f7c(0x394)](_0x20ec0d-this['x']),_0x31ccd8=Math['round'](_0x5d838e-this['y']);this[_0x568f7c(0x4bc)](_0x15f81b,_0x31ccd8);},Game_Character['prototype'][_0x2a5e1a(0x282)]=function(_0xcfd085){const _0x354aac=_0x2a5e1a;if(_0xcfd085)this[_0x354aac(0x42d)](_0xcfd085['x'],_0xcfd085['y']);},Game_Character['prototype'][_0x2a5e1a(0x256)]=function(_0x47a4e2,_0x592c7e,_0x3f32c9){const _0x412ebc=_0x2a5e1a;let _0x448c61=0x0;if(_0x3f32c9)$gameTemp[_0x412ebc(0x301)]=!![];$gameMap[_0x412ebc(0x130)]()?_0x448c61=this[_0x412ebc(0x4b8)](_0x47a4e2,_0x592c7e):_0x448c61=this[_0x412ebc(0x41b)](_0x47a4e2,_0x592c7e);if(_0x3f32c9)$gameTemp[_0x412ebc(0x301)]=![];this[_0x412ebc(0x1b7)](_0x448c61),this['setMovementSuccess'](!![]);},Game_Character[_0x2a5e1a(0x357)]['processMoveRouteStepToCharacter']=function(_0x4e70ed){const _0x56720a=_0x2a5e1a;if(_0x4e70ed)this[_0x56720a(0x256)](_0x4e70ed['x'],_0x4e70ed['y']);},Game_Character[_0x2a5e1a(0x357)]['processMoveRouteStepFrom']=function(_0x1505f5,_0x53d2e9){const _0x3e5b05=_0x2a5e1a,_0x1c66fe=this['deltaXFrom'](_0x1505f5),_0xb430d8=this[_0x3e5b05(0x474)](_0x53d2e9);},Game_Character['prototype']['checkCollisionKeywords']=function(_0x2d2903){const _0x35f3e1=_0x2a5e1a;if(_0x2d2903[_0x35f3e1(0x355)](/(?:CRASH|COLLIDE|COLLISION|ENCOUNTER|TOUCH)/i))return!![];else return _0x2d2903['match'](/(?:AVOID|EVADE|DODGE)/i)?![]:![];},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x2a8)]=Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x25e)],Game_Event[_0x2a5e1a(0x357)]['isCollidedWithPlayerCharacters']=function(_0x35733a,_0x37d2c2){const _0x1866f4=_0x2a5e1a;if($gameTemp[_0x1866f4(0x301)])return![];return VisuMZ['EventsMoveCore'][_0x1866f4(0x2a8)]['call'](this,_0x35733a,_0x37d2c2);},Game_Character['prototype'][_0x2a5e1a(0x3bf)]=function(_0x2c2968,_0x3cb7b3){const _0x355b33=_0x2a5e1a,_0x5a17e7=['','LOWER\x20LEFT',_0x355b33(0x3bd),_0x355b33(0x3f5),'LEFT','',_0x355b33(0x35e),_0x355b33(0x27b),'UP',_0x355b33(0x41f)],_0x4c8564=_0x5a17e7[_0x355b33(0x1f9)](_0x2c2968[_0x355b33(0x108)]()[_0x355b33(0x215)]());if(_0x4c8564<=0x0)return;if(_0x3cb7b3)$gameTemp['_moveAllowPlayerCollision']=!![];if(this[_0x355b33(0x153)](this['x'],this['y'],_0x4c8564)){if(_0x3cb7b3)$gameTemp[_0x355b33(0x301)]=![];this[_0x355b33(0x1b7)](_0x4c8564),this['_moveRouteIndex']-=0x1;}if(_0x3cb7b3)$gameTemp[_0x355b33(0x301)]=![];},Game_Character[_0x2a5e1a(0x357)]['processMoveRouteMoveTo']=function(_0x5b468c,_0x16cbc8,_0x4c865a){const _0x468d1d=_0x2a5e1a;this[_0x468d1d(0x256)](_0x5b468c,_0x16cbc8,_0x4c865a);if(this['x']!==_0x5b468c||this['y']!==_0x16cbc8)this['_moveRouteIndex']--;},Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x34e)]=function(_0x33d561,_0x426bca){const _0x5a20b7=_0x2a5e1a;if(_0x33d561)this[_0x5a20b7(0x1ef)](_0x33d561['x'],_0x33d561['y'],_0x426bca);},Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x16f)]=function(_0x2ed0de,_0x220be6){const _0x5ef7b6=_0x2a5e1a;_0x220be6=_0x220be6||0x0;const _0x46150b={'code':0x1,'indent':null,'parameters':[]};_0x46150b[_0x5ef7b6(0x324)]=[0x0,0x5,0x1,0x6,0x2,0x0,0x3,0x7,0x4,0x8][_0x2ed0de],this[_0x5ef7b6(0x430)][_0x5ef7b6(0x3ad)][this[_0x5ef7b6(0x3c1)]]['parameters'][0x0]='';while(_0x220be6--){this[_0x5ef7b6(0x430)]['list'][_0x5ef7b6(0x494)](this[_0x5ef7b6(0x3c1)]+0x1,0x0,_0x46150b);}},Game_Character['prototype'][_0x2a5e1a(0x4af)]=function(_0x248659){const _0x4d2253=_0x2a5e1a;this[_0x4d2253(0x453)]=!![],this[_0x4d2253(0x427)](_0x248659);},Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x16b)]=function(_0x103398,_0x2691a9){const _0x3c92e6=_0x2a5e1a;if(this===$gamePlayer)return;const _0xbc349a=[this['_mapId'],this[_0x3c92e6(0xc7)],'A'];_0x103398['match'](/\b[ABCD]\b/i)?_0xbc349a[0x2]=String(_0x103398)['charAt'](0x0)[_0x3c92e6(0x108)]()[_0x3c92e6(0x215)]():_0xbc349a[0x2]='Self\x20Switch\x20%1'[_0x3c92e6(0x257)](_0x103398);switch(_0x2691a9[_0x3c92e6(0x108)]()[_0x3c92e6(0x215)]()){case'ON':case _0x3c92e6(0x48a):$gameSelfSwitches[_0x3c92e6(0x166)](_0xbc349a,!![]);break;case'OFF':case'FALSE':$gameSelfSwitches[_0x3c92e6(0x166)](_0xbc349a,![]);break;case _0x3c92e6(0x29f):$gameSelfSwitches[_0x3c92e6(0x166)](_0xbc349a,!$gameSelfSwitches[_0x3c92e6(0x436)](_0xbc349a));break;}},Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x3ef)]=function(_0x1b6acc,_0x215926){const _0x496ad5=_0x2a5e1a;if(this===$gamePlayer)return;const _0x2f9593=[this['_mapId'],this['_eventId'],'Self\x20Variable\x20%1'[_0x496ad5(0x257)](_0x1b6acc)];$gameSelfSwitches[_0x496ad5(0x166)](_0x2f9593,Number(_0x215926));},Game_Character['prototype'][_0x2a5e1a(0x2c3)]=function(_0x39ba24,_0x3aff50){const _0x8c1aed=_0x2a5e1a;this[_0x8c1aed(0x1f7)](_0x39ba24,_0x3aff50);},Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x3c8)]=function(_0x37ea86){if(_0x37ea86)this['processMoveRouteTeleportTo'](_0x37ea86['x'],_0x37ea86['y']);},Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x44e)]=function(){const _0x134923=_0x2a5e1a;switch(this[_0x134923(0x138)]()){case 0x1:this[_0x134923(0x3a3)](0x7);break;case 0x2:this[_0x134923(0x3a3)](0x4);break;case 0x3:this[_0x134923(0x3a3)](0x1);break;case 0x4:this[_0x134923(0x3a3)](0x8);break;case 0x6:this[_0x134923(0x3a3)](0x2);break;case 0x7:this[_0x134923(0x3a3)](0x9);break;case 0x8:this[_0x134923(0x3a3)](0x6);break;case 0x9:this['setDirection'](0x3);break;}},Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x38f)]=function(){const _0x2e6b8e=_0x2a5e1a;switch(this['direction']()){case 0x1:this[_0x2e6b8e(0x3a3)](0x3);break;case 0x2:this[_0x2e6b8e(0x3a3)](0x6);break;case 0x3:this[_0x2e6b8e(0x3a3)](0x9);break;case 0x4:this[_0x2e6b8e(0x3a3)](0x2);break;case 0x6:this[_0x2e6b8e(0x3a3)](0x8);break;case 0x7:this[_0x2e6b8e(0x3a3)](0x1);break;case 0x8:this[_0x2e6b8e(0x3a3)](0x4);break;case 0x9:this[_0x2e6b8e(0x3a3)](0x7);break;}},Game_Character[_0x2a5e1a(0x357)]['getDirectionToPoint']=function(_0x17d5f8,_0x422313,_0x1b74cb){const _0x15add0=_0x2a5e1a,_0x2ddb4a=this[_0x15add0(0x3f1)](_0x17d5f8),_0x54bdbc=this[_0x15add0(0x474)](_0x422313);if($gameMap[_0x15add0(0x130)]()){if(_0x1b74cb||this['isSpriteVS8dir']()){if(_0x2ddb4a>0x0&&_0x54bdbc<0x0)return 0x1;if(_0x2ddb4a<0x0&&_0x54bdbc<0x0)return 0x3;if(_0x2ddb4a>0x0&&_0x54bdbc>0x0)return 0x7;if(_0x2ddb4a<0x0&&_0x54bdbc>0x0)return 0x9;}}if(Math[_0x15add0(0x409)](_0x2ddb4a)>Math[_0x15add0(0x409)](_0x54bdbc))return _0x2ddb4a>0x0?0x4:0x6;else{if(_0x54bdbc!==0x0)return _0x54bdbc>0x0?0x8:0x2;}return 0x0;},Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x2a7)]=function(_0x320b2d,_0x1282e9,_0x8c784){const _0x1d766b=_0x2a5e1a,_0x1c4c88=this[_0x1d766b(0x3f1)](_0x320b2d),_0x1b7675=this['deltaYFrom'](_0x1282e9);if($gameMap[_0x1d766b(0x130)]()){if(_0x8c784||this[_0x1d766b(0x352)]()){if(_0x1c4c88>0x0&&_0x1b7675<0x0)return 0x9;if(_0x1c4c88<0x0&&_0x1b7675<0x0)return 0x7;if(_0x1c4c88>0x0&&_0x1b7675>0x0)return 0x3;if(_0x1c4c88<0x0&&_0x1b7675>0x0)return 0x1;}}if(Math['abs'](_0x1c4c88)>Math[_0x1d766b(0x409)](_0x1b7675))return _0x1c4c88>0x0?0x6:0x4;else{if(_0x1b7675!==0x0)return _0x1b7675>0x0?0x2:0x8;}return 0x0;},Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x410)]=function(_0x202d9d,_0xb7c40d){const _0x568920=_0x2a5e1a,_0x59b585=this['getDirectionToPoint'](_0x202d9d,_0xb7c40d,!![]);if(_0x59b585)this[_0x568920(0x1b7)](_0x59b585);},Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x10d)]=function(_0x4a0d67,_0x19f462){const _0x33ac02=_0x2a5e1a,_0xbfef00=this[_0x33ac02(0x2a7)](_0x4a0d67,_0x19f462,!![]);if(_0xbfef00)this[_0x33ac02(0x1b7)](_0xbfef00);},Game_Character['prototype'][_0x2a5e1a(0x2be)]=function(_0x168348,_0x3ad717){const _0x1e502d=_0x2a5e1a,_0x2efafc=this[_0x1e502d(0x3e9)](_0x168348,_0x3ad717,![]);if(_0x2efafc)this[_0x1e502d(0x3a3)](_0x2efafc);},Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x35b)]=function(_0x137cf8,_0x5c1d36){const _0x17715b=_0x2a5e1a,_0xd6409a=this[_0x17715b(0x2a7)](_0x137cf8,_0x5c1d36,![]);if(_0xd6409a)this[_0x17715b(0x3a3)](_0xd6409a);},Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x263)]=function(_0x1f5eaf){if(_0x1f5eaf)this['moveTowardPoint'](_0x1f5eaf['x'],_0x1f5eaf['y']);},Game_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x1bc)]=function(_0x327c2a){const _0x5765fb=_0x2a5e1a;if(_0x327c2a)this[_0x5765fb(0x10d)](_0x327c2a['x'],_0x327c2a['y']);},Game_Character[_0x2a5e1a(0x357)]['turnTowardCharacter']=function(_0x30fcb4){const _0x51f721=_0x2a5e1a;if(_0x30fcb4)this[_0x51f721(0x2be)](_0x30fcb4['x'],_0x30fcb4['y']);},Game_Character['prototype'][_0x2a5e1a(0x2f4)]=function(_0x38e355){const _0x44e082=_0x2a5e1a;if(_0x38e355)this[_0x44e082(0x35b)](_0x38e355['x'],_0x38e355['y']);},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x119)]=Game_Player[_0x2a5e1a(0x357)]['isDashing'],Game_Player[_0x2a5e1a(0x357)][_0x2a5e1a(0x3cf)]=function(){const _0x29214c=_0x2a5e1a;if(!Game_CharacterBase[_0x29214c(0x2ac)]&&this[_0x29214c(0x1a3)]())return![];if(this[_0x29214c(0x34b)])return!![];return VisuMZ[_0x29214c(0x2c1)][_0x29214c(0x119)][_0x29214c(0x2ad)](this);},VisuMZ[_0x2a5e1a(0x2c1)]['Game_Player_getInputDirection']=Game_Player['prototype'][_0x2a5e1a(0x171)],Game_Player[_0x2a5e1a(0x357)][_0x2a5e1a(0x171)]=function(){const _0x355e9f=_0x2a5e1a;return $gameMap[_0x355e9f(0x130)]()?this[_0x355e9f(0x3ed)]():VisuMZ[_0x355e9f(0x2c1)][_0x355e9f(0x222)]['call'](this);},Game_Player[_0x2a5e1a(0x357)][_0x2a5e1a(0x3ed)]=function(){const _0x3f5c30=_0x2a5e1a;return Input[_0x3f5c30(0xef)];},Game_Player[_0x2a5e1a(0x357)][_0x2a5e1a(0x497)]=function(){const _0x4e61c0=_0x2a5e1a;if($gameSystem[_0x4e61c0(0x4c9)]())return 0x0;if(!this['isMoving']()&&this[_0x4e61c0(0x2a2)]()){let _0x25ce01=this[_0x4e61c0(0x171)]();if(_0x25ce01>0x0)$gameTemp[_0x4e61c0(0x269)]();else{if($gameTemp[_0x4e61c0(0xfd)]()){const _0x4a0974=$gameTemp[_0x4e61c0(0x3e4)](),_0x373ebb=$gameTemp['destinationY'](),_0x5e31c7=$gameMap[_0x4e61c0(0x130)](),_0x4a2fb8=$gameMap[_0x4e61c0(0x361)](_0x4a0974,_0x373ebb),_0xa76522=$gameMap['eventsXyNt'](_0x4a0974,_0x373ebb)[_0x4e61c0(0x396)]<=0x0;_0x5e31c7&&_0x4a2fb8&&_0xa76522?_0x25ce01=this[_0x4e61c0(0x4b8)](_0x4a0974,_0x373ebb):_0x25ce01=this[_0x4e61c0(0x41b)](_0x4a0974,_0x373ebb);}}_0x25ce01>0x0?(this[_0x4e61c0(0x1ec)]=this[_0x4e61c0(0x1ec)]||0x0,this[_0x4e61c0(0x471)]()?this['setDirection'](_0x25ce01):this[_0x4e61c0(0x369)](_0x25ce01),this[_0x4e61c0(0x1ec)]++):this['_inputTime']=0x0;}},Game_Player[_0x2a5e1a(0x357)]['isTurnInPlace']=function(){const _0x6536c3=_0x2a5e1a,_0x6cde5d=VisuMZ[_0x6536c3(0x2c1)]['Settings'][_0x6536c3(0x44f)];if(!_0x6cde5d[_0x6536c3(0x455)])return![];if($gameTemp[_0x6536c3(0xfd)]())return![];if(this[_0x6536c3(0x3cf)]()||this[_0x6536c3(0x48b)]()||this['isOnLadder']())return![];return this[_0x6536c3(0x1ec)]<_0x6cde5d['TurnInPlaceDelay'];},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x247)]=Game_Player[_0x2a5e1a(0x357)][_0x2a5e1a(0x369)],Game_Player['prototype'][_0x2a5e1a(0x369)]=function(_0x24c323){const _0xe6c40e=_0x2a5e1a;$gameMap[_0xe6c40e(0x130)]()?this[_0xe6c40e(0x1b7)](_0x24c323):VisuMZ[_0xe6c40e(0x2c1)][_0xe6c40e(0x247)][_0xe6c40e(0x2ad)](this,_0x24c323);},VisuMZ['EventsMoveCore']['Game_Player_isMapPassable']=Game_Player[_0x2a5e1a(0x357)]['isMapPassable'],Game_Player[_0x2a5e1a(0x357)][_0x2a5e1a(0x1ee)]=function(_0x2afc29,_0x4ef622,_0x4b3896){const _0x1afb3a=_0x2a5e1a;if($gameMap['isRegionAllowPass'](_0x2afc29,_0x4ef622,_0x4b3896,'player'))return this[_0x1afb3a(0x3a9)]()&&this[_0x1afb3a(0x15f)]()?this['vehicle']()[_0x1afb3a(0x1ee)](_0x2afc29,_0x4ef622,_0x4b3896):!![];if($gameMap['isRegionForbidPass'](_0x2afc29,_0x4ef622,_0x4b3896,_0x1afb3a(0x1e8)))return![];return VisuMZ[_0x1afb3a(0x2c1)][_0x1afb3a(0x193)][_0x1afb3a(0x2ad)](this,_0x2afc29,_0x4ef622,_0x4b3896);},VisuMZ['EventsMoveCore'][_0x2a5e1a(0x3aa)]=Game_Player['prototype'][_0x2a5e1a(0xd2)],Game_Player[_0x2a5e1a(0x357)][_0x2a5e1a(0xd2)]=function(_0x28f795){const _0x414ac1=_0x2a5e1a;VisuMZ[_0x414ac1(0x2c1)]['Game_Player_checkEventTriggerHere'][_0x414ac1(0x2ad)](this,_0x28f795);if(this[_0x414ac1(0x3f3)]()){this[_0x414ac1(0x4ae)](_0x28f795);if(_0x28f795['includes'](0x0)&&this[_0x414ac1(0x421)]()===_0x414ac1(0x443))this[_0x414ac1(0x274)](this['x'],this['y']);else(_0x28f795[_0x414ac1(0x370)](0x1)||_0x28f795[_0x414ac1(0x370)](0x2))&&this['startMapCommonEventOnTouch']();}},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x399)]=Game_Player[_0x2a5e1a(0x357)][_0x2a5e1a(0x3eb)],Game_Player[_0x2a5e1a(0x357)]['checkEventTriggerThere']=function(_0x25f371){const _0xdb35f=_0x2a5e1a;VisuMZ['EventsMoveCore']['Game_Player_checkEventTriggerThere']['call'](this,_0x25f371);if(this[_0xdb35f(0x3f3)]()&&_0x25f371[_0xdb35f(0x370)](0x0)&&this[_0xdb35f(0x421)]()===_0xdb35f(0x1b2)){const _0x1b745d=this['direction'](),_0x139bd8=$gameMap['roundXWithDirection'](this['x'],_0x1b745d),_0x210a5d=$gameMap[_0xdb35f(0x1fc)](this['y'],_0x1b745d);this[_0xdb35f(0x274)](_0x139bd8,_0x210a5d);}},Game_Player['prototype'][_0x2a5e1a(0x4ae)]=function(_0x118f15){const _0x45b345=_0x2a5e1a;if($gameMap[_0x45b345(0x26b)]())return;if($gameMap['isAnyEventStarting']())return;const _0xb84dad=$gameMap[_0x45b345(0x2eb)]();for(const _0x36dc3a of _0xb84dad){if(!_0x36dc3a)continue;if(!_0x36dc3a[_0x45b345(0x1b1)](_0x118f15))continue;if(this[_0x45b345(0x3d5)](_0x36dc3a))return _0x36dc3a['start']();if(this[_0x45b345(0x192)](_0x36dc3a))return _0x36dc3a['start']();}},Game_Player[_0x2a5e1a(0x357)]['meetActivationRegionConditions']=function(_0x4d9c50){const _0xd756d6=_0x2a5e1a;if($gameMap[_0xd756d6(0x26b)]())return![];if($gameMap[_0xd756d6(0x4aa)]())return![];return _0x4d9c50[_0xd756d6(0x4c1)]()[_0xd756d6(0x370)](this[_0xd756d6(0x351)]());},Game_Player[_0x2a5e1a(0x357)][_0x2a5e1a(0x192)]=function(_0x471abf){const _0x3d94fc=_0x2a5e1a;if($gameMap[_0x3d94fc(0x26b)]())return![];if($gameMap[_0x3d94fc(0x4aa)]())return![];if([_0x3d94fc(0x2ed),_0x3d94fc(0x10e)][_0x3d94fc(0x370)](_0x471abf[_0x3d94fc(0x18e)]()))return![];const _0x18c9c5=_0x471abf[_0x3d94fc(0x18e)](),_0x1fa2ed=_0x471abf['activationProximityDistance']();switch(_0x18c9c5){case _0x3d94fc(0x1e7):const _0x39b4fb=$gameMap[_0x3d94fc(0x3fc)](this['x'],this['y'],_0x471abf['x'],_0x471abf['y']);return _0x471abf[_0x3d94fc(0x4e7)]()>=_0x39b4fb;break;case _0x3d94fc(0x188):return _0x1fa2ed>=Math[_0x3d94fc(0x409)](_0x471abf[_0x3d94fc(0x3f1)](this['x']))&&_0x1fa2ed>=Math['abs'](_0x471abf[_0x3d94fc(0x474)](this['y']));break;case _0x3d94fc(0x4da):return _0x1fa2ed>=Math[_0x3d94fc(0x409)](_0x471abf[_0x3d94fc(0x474)](this['y']));break;case'column':return _0x1fa2ed>=Math[_0x3d94fc(0x409)](_0x471abf[_0x3d94fc(0x3f1)](this['x']));break;case'default':return![];break;}},Game_Player['prototype']['startMapCommonEventOnOK']=function(_0x2f9887,_0x268719){const _0x36be7e=_0x2a5e1a;if($gameMap[_0x36be7e(0x26b)]())return;if($gameMap[_0x36be7e(0x4aa)]())return;let _0x52ec2c=VisuMZ['EventsMoveCore']['Settings'][_0x36be7e(0xed)],_0x24361c=$gameMap['regionId'](_0x2f9887,_0x268719);const _0x31abd2=_0x36be7e(0x325)[_0x36be7e(0x257)](_0x24361c);_0x52ec2c[_0x31abd2]&&$gameTemp[_0x36be7e(0x2d1)](_0x52ec2c[_0x31abd2]);},Game_Player[_0x2a5e1a(0x357)][_0x2a5e1a(0x421)]=function(){const _0x41f155=_0x2a5e1a;return VisuMZ[_0x41f155(0x2c1)][_0x41f155(0x14c)][_0x41f155(0x293)];},Game_Player[_0x2a5e1a(0x357)]['startMapCommonEventOnTouch']=function(){const _0x2f9555=_0x2a5e1a;if($gameMap[_0x2f9555(0x26b)]())return;if($gameMap[_0x2f9555(0x4aa)]())return;let _0xddd142=VisuMZ['EventsMoveCore'][_0x2f9555(0x14c)][_0x2f9555(0x14f)];const _0x120837=_0x2f9555(0x325)[_0x2f9555(0x257)](this['regionId']());_0xddd142[_0x120837]&&$gameTemp[_0x2f9555(0x2d1)](_0xddd142[_0x120837]);},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x245)]=Game_Player[_0x2a5e1a(0x357)]['increaseSteps'],Game_Player[_0x2a5e1a(0x357)][_0x2a5e1a(0x2e9)]=function(){const _0x2ce84c=_0x2a5e1a;VisuMZ[_0x2ce84c(0x2c1)][_0x2ce84c(0x245)]['call'](this),VisuMZ[_0x2ce84c(0x314)](0x0);},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0xe7)]=Game_Follower['prototype'][_0x2a5e1a(0x4a2)],Game_Follower['prototype']['initialize']=function(_0x1b50ac){const _0x515f53=_0x2a5e1a;VisuMZ[_0x515f53(0x2c1)][_0x515f53(0xe7)][_0x515f53(0x2ad)](this,_0x1b50ac),this['_chaseOff']=![];},Game_Follower[_0x2a5e1a(0x357)][_0x2a5e1a(0x3cf)]=function(){const _0x4ae74f=_0x2a5e1a;if(this['_chaseOff'])return Game_Character[_0x4ae74f(0x357)][_0x4ae74f(0x3cf)]['call'](this);return $gamePlayer['isDashing']();},Game_Follower[_0x2a5e1a(0x357)][_0x2a5e1a(0x2fb)]=function(){const _0x19a436=_0x2a5e1a;if(this['_chaseOff'])return Game_Character[_0x19a436(0x357)][_0x19a436(0x2fb)]['call'](this);return $gamePlayer[_0x19a436(0x2fb)]()&&this[_0x19a436(0x1d5)];},Game_Follower['prototype'][_0x2a5e1a(0x432)]=function(){const _0x5f5b8b=_0x2a5e1a;return $gamePlayer[_0x5f5b8b(0x432)]();},Game_Follower[_0x2a5e1a(0x357)]['updateStop']=function(){const _0x5d1f8a=_0x2a5e1a;Game_Character[_0x5d1f8a(0x357)]['updateStop']['call'](this),this[_0x5d1f8a(0x14b)]>0x0&&(this[_0x5d1f8a(0x1d5)]=![]);},Game_Follower[_0x2a5e1a(0x357)][_0x2a5e1a(0x17e)]=function(_0xaf2892){this['_chaseOff']=_0xaf2892;},VisuMZ[_0x2a5e1a(0x2c1)]['Game_Follower_chaseCharacter']=Game_Follower['prototype'][_0x2a5e1a(0x37f)],Game_Follower['prototype']['chaseCharacter']=function(_0x347e7f){const _0x54982c=_0x2a5e1a;if(this[_0x54982c(0x177)])return;if($gameSystem['isStopFollowerChasing']())return;VisuMZ[_0x54982c(0x2c1)][_0x54982c(0x232)][_0x54982c(0x2ad)](this,_0x347e7f),this[_0x54982c(0x1d5)]=!![];},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x386)]=Game_Vehicle[_0x2a5e1a(0x357)]['isMapPassable'],Game_Vehicle[_0x2a5e1a(0x357)][_0x2a5e1a(0x1ee)]=function(_0x361c73,_0x4b6c52,_0x424f26){const _0x2bff50=_0x2a5e1a;if($gameMap[_0x2bff50(0x32a)](_0x361c73,_0x4b6c52,_0x424f26,this[_0x2bff50(0x3a8)]))return!![];if($gameMap[_0x2bff50(0x165)](_0x361c73,_0x4b6c52,_0x424f26,this['_type']))return![];return VisuMZ[_0x2bff50(0x2c1)][_0x2bff50(0x386)][_0x2bff50(0x2ad)](this,_0x361c73,_0x4b6c52,_0x424f26);},Game_Vehicle['prototype'][_0x2a5e1a(0x221)]=function(_0x214ec4,_0x52ba4b,_0x3391d7){const _0x4a3893=_0x2a5e1a;if($gameMap['isRegionAllowPass'](_0x214ec4,_0x52ba4b,_0x3391d7,this[_0x4a3893(0x3a8)]))return!![];if($gameMap['isRegionForbidPass'](_0x214ec4,_0x52ba4b,_0x3391d7,this[_0x4a3893(0x3a8)]))return![];return VisuMZ[_0x4a3893(0x2c1)]['Game_CharacterBase_canPass'][_0x4a3893(0x2ad)]($gamePlayer,_0x214ec4,_0x52ba4b,_0x3391d7);},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x3d8)]=Game_Vehicle[_0x2a5e1a(0x357)][_0x2a5e1a(0x139)],Game_Vehicle[_0x2a5e1a(0x357)][_0x2a5e1a(0x139)]=function(_0x466982,_0x5d9e6e,_0xb32815){const _0x2a6326=_0x2a5e1a;if($gameMap['isRegionDockable'](_0x466982,_0x5d9e6e,_0xb32815,this[_0x2a6326(0x3a8)]))return!![];const _0x105f88=this['_type']['charAt'](0x0)[_0x2a6326(0x108)]()+this['_type'][_0x2a6326(0x109)](0x1),_0x292f3d=_0x2a6326(0x483)[_0x2a6326(0x257)](_0x105f88);return VisuMZ[_0x2a6326(0x2c1)][_0x2a6326(0x14c)][_0x2a6326(0x47e)][_0x292f3d]?![]:VisuMZ[_0x2a6326(0x2c1)][_0x2a6326(0x3d8)]['call'](this,_0x466982,_0x5d9e6e,_0xb32815);},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x16d)]=Game_Vehicle[_0x2a5e1a(0x357)]['initMoveSpeed'],Game_Vehicle[_0x2a5e1a(0x357)][_0x2a5e1a(0x22d)]=function(){const _0xd8c2ac=_0x2a5e1a;VisuMZ['EventsMoveCore'][_0xd8c2ac(0x16d)]['call'](this);const _0x928f67=VisuMZ[_0xd8c2ac(0x2c1)][_0xd8c2ac(0x14c)][_0xd8c2ac(0x44f)];if(this[_0xd8c2ac(0x2d9)]()){if(_0x928f67[_0xd8c2ac(0x1c9)])this[_0xd8c2ac(0x1ad)](_0x928f67['BoatSpeed']);}else{if(this[_0xd8c2ac(0x339)]()){if(_0x928f67[_0xd8c2ac(0x382)])this[_0xd8c2ac(0x1ad)](_0x928f67[_0xd8c2ac(0x382)]);}else{if(this[_0xd8c2ac(0x253)]()){if(_0x928f67[_0xd8c2ac(0x389)])this[_0xd8c2ac(0x1ad)](_0x928f67['AirshipSpeed']);}}}},VisuMZ['EventsMoveCore'][_0x2a5e1a(0x3db)]=Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x4a2)],Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x4a2)]=function(_0x4add52,_0x4cfb19){const _0x18577c=_0x2a5e1a;VisuMZ[_0x18577c(0x2c1)][_0x18577c(0x3db)][_0x18577c(0x2ad)](this,_0x4add52,_0x4cfb19),this[_0x18577c(0x195)](),this[_0x18577c(0x30a)](),this[_0x18577c(0x40f)]();},Game_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x22b)]=function(_0x301e46,_0x28015e){const _0x4f8445=_0x2a5e1a;return _0x301e46===$gameMap[_0x4f8445(0x35f)]()?$dataMap[_0x4f8445(0x2eb)][_0x28015e]:VisuMZ[_0x4f8445(0x1b0)][_0x301e46][_0x4f8445(0x2eb)][_0x28015e];},VisuMZ['EventsMoveCore']['Game_Event_event']=Game_Event[_0x2a5e1a(0x357)]['event'],Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x390)]=function(){const _0x2cdf55=_0x2a5e1a;if(this[_0x2cdf55(0x4ec)]!==undefined){const _0x1fa3a9=this[_0x2cdf55(0x4ec)][_0x2cdf55(0x35f)],_0x3daf1f=this[_0x2cdf55(0x4ec)][_0x2cdf55(0x1cc)];return $gameMap[_0x2cdf55(0x22b)](_0x1fa3a9,_0x3daf1f);}if(this[_0x2cdf55(0x2da)]!==undefined){const _0x4ec19f=this['_eventCopyData']['mapId'],_0x36a43a=this[_0x2cdf55(0x2da)][_0x2cdf55(0x1cc)];return $gameMap['referEvent'](_0x4ec19f,_0x36a43a);}if(this[_0x2cdf55(0x3ff)]!==undefined){const _0x27c45a=this['_eventSpawnData']['mapId'],_0x1cb209=this[_0x2cdf55(0x3ff)]['eventId'];return $gameMap['referEvent'](_0x27c45a,_0x1cb209);}if($gameTemp[_0x2cdf55(0xe6)]!==undefined){const _0x460618=$gameTemp[_0x2cdf55(0xe6)]['mapId'],_0x40dded=$gameTemp[_0x2cdf55(0xe6)][_0x2cdf55(0x1cc)];return $gameMap[_0x2cdf55(0x22b)](_0x460618,_0x40dded);}return VisuMZ[_0x2cdf55(0x2c1)][_0x2cdf55(0x420)][_0x2cdf55(0x2ad)](this);},Game_Event[_0x2a5e1a(0x357)]['checkValidEventerMap']=function(_0x39ccb2,_0x36df84){const _0x2d2324=_0x2a5e1a;if(_0x39ccb2===0x0||_0x36df84===0x0)return![];if(!VisuMZ['PreloadedMaps'][_0x39ccb2]&&_0x39ccb2!==$gameMap[_0x2d2324(0x35f)]())return $gameTemp[_0x2d2324(0x1dc)]()&&console[_0x2d2324(0x338)]('ERROR:\x20Map\x20%1\x20has\x20not\x20been\x20preloaded\x20for\x20remove\x20usage.'['format'](_0x39ccb2)),![];return!![];},VisuMZ[_0x2a5e1a(0x2c1)]['Game_Event_start']=Game_Event['prototype'][_0x2a5e1a(0x311)],Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x311)]=function(){const _0x1cf541=_0x2a5e1a;VisuMZ[_0x1cf541(0x2c1)][_0x1cf541(0x13b)][_0x1cf541(0x2ad)](this),Imported['VisuMZ_1_MessageCore']&&Input['isPressed'](VisuMZ[_0x1cf541(0x498)]['Settings'][_0x1cf541(0x45d)]['FastForwardKey'])&&Input[_0x1cf541(0x2f6)]();},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x195)]=function(){const _0xef93e3=_0x2a5e1a,_0x515e6d=this[_0xef93e3(0x390)]()[_0xef93e3(0x3b8)];if(_0x515e6d==='')return;if(DataManager[_0xef93e3(0x183)]()||DataManager[_0xef93e3(0x2ab)]())return;const _0x2f6a0e=VisuMZ[_0xef93e3(0x2c1)][_0xef93e3(0x14c)][_0xef93e3(0x220)];let _0x4938dd=null,_0x2267e8=0x0,_0x14965e=0x0;if(_0x515e6d[_0xef93e3(0x355)](/<COPY EVENT:[ ]MAP[ ](\d+),[ ]EVENT[ ](\d+)>/i)){_0x2267e8=Number(RegExp['$1']),_0x14965e=Number(RegExp['$2']);if(_0x2267e8===0x0)_0x2267e8=$gameMap[_0xef93e3(0x35f)]();}else{if(_0x515e6d[_0xef93e3(0x355)](/<COPY EVENT:[ ](\d+),[ ](\d+)>/i)){_0x2267e8=Number(RegExp['$1']),_0x14965e=Number(RegExp['$2']);if(_0x2267e8===0x0)_0x2267e8=$gameMap[_0xef93e3(0x35f)]();}else{if(_0x515e6d['match'](/<COPY EVENT:[ ](.*?)>/i)){const _0x2e24d4=String(RegExp['$1'])[_0xef93e3(0x108)]()[_0xef93e3(0x215)]();_0x4938dd=VisuMZ[_0xef93e3(0x1cb)][_0x2e24d4];if(!_0x4938dd)return;_0x2267e8=_0x4938dd[_0xef93e3(0x2b0)],_0x14965e=_0x4938dd[_0xef93e3(0x145)];}}}if(!this[_0xef93e3(0x107)](_0x2267e8,_0x14965e))return;_0x2f6a0e[_0xef93e3(0x132)]['call'](this,_0x2267e8,_0x14965e,this);if(_0x4938dd)_0x4938dd[_0xef93e3(0x132)][_0xef93e3(0x2ad)](this,_0x2267e8,_0x14965e,this);this[_0xef93e3(0x2da)]={'mapId':_0x2267e8,'eventId':_0x14965e},this[_0xef93e3(0xc1)]=-0x2,this[_0xef93e3(0x2ca)](),_0x2f6a0e['PostCopyJS'][_0xef93e3(0x2ad)](this,_0x2267e8,_0x14965e,this);if(_0x4938dd)_0x4938dd['PostCopyJS']['call'](this,_0x2267e8,_0x14965e,this);$gameMap[_0xef93e3(0x411)]();},Game_Event['prototype'][_0x2a5e1a(0x30a)]=function(){const _0x5aba68=_0x2a5e1a,_0x459991=$gameSystem[_0x5aba68(0x30e)](this);if(!_0x459991)return;const _0x2371cd=_0x459991[_0x5aba68(0x384)][_0x5aba68(0x108)]()[_0x5aba68(0x215)]();_0x2371cd!=='UNTITLED'?this[_0x5aba68(0x200)](_0x2371cd,!![]):this['morphInto'](_0x459991[_0x5aba68(0x35f)],_0x459991[_0x5aba68(0x1cc)],!![]);},Game_Event['prototype']['morphInto']=function(_0xa65942,_0x464cb2,_0x4065dc){const _0x10199a=_0x2a5e1a;if(!this[_0x10199a(0x107)](_0xa65942,_0x464cb2))return;const _0xb97389=VisuMZ[_0x10199a(0x2c1)]['Settings'][_0x10199a(0x220)];if(!_0x4065dc)_0xb97389[_0x10199a(0x19b)][_0x10199a(0x2ad)](this,_0xa65942,_0x464cb2,this);this['_eventMorphData']={'mapId':_0xa65942,'eventId':_0x464cb2},this[_0x10199a(0xc1)]=-0x2,this[_0x10199a(0x2ca)]();if(!_0x4065dc)_0xb97389['PostMorphJS'][_0x10199a(0x2ad)](this,_0xa65942,_0x464cb2,this);$gameMap[_0x10199a(0x411)]();},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x200)]=function(_0x3fb070,_0x425318){const _0x5aff62=_0x2a5e1a;_0x3fb070=_0x3fb070[_0x5aff62(0x108)]()['trim']();const _0x1beabe=VisuMZ[_0x5aff62(0x1cb)][_0x3fb070];if(!_0x1beabe)return;const _0x3a93af=_0x1beabe['MapID'],_0x4a9c49=_0x1beabe[_0x5aff62(0x145)];if(!this[_0x5aff62(0x107)](_0x3a93af,_0x4a9c49))return;if(!_0x425318)_0x1beabe[_0x5aff62(0x19b)][_0x5aff62(0x2ad)](this,_0x3a93af,_0x4a9c49,this);this['morphInto'](_0x3a93af,_0x4a9c49,_0x425318);if(!_0x425318)_0x1beabe[_0x5aff62(0x340)][_0x5aff62(0x2ad)](this,_0x3a93af,_0x4a9c49,this);if($gameMap)$gameMap[_0x5aff62(0x411)]();},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x198)]=function(){const _0x326194=_0x2a5e1a;this[_0x326194(0x4ec)]=undefined,this['_pageIndex']=-0x2,this[_0x326194(0x2ca)]();},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x43f)]=function(_0x236880){const _0x1eb8c8=_0x2a5e1a,_0x337f61=VisuMZ[_0x1eb8c8(0x2c1)][_0x1eb8c8(0x14c)]['Template'],_0x5b7bef=_0x236880[_0x1eb8c8(0x384)]['toUpperCase']()[_0x1eb8c8(0x215)](),_0x2f4bc8=!['',_0x1eb8c8(0x17c)][_0x1eb8c8(0x370)](_0x5b7bef);let _0x2b0ed0=0x0,_0x82f5b6=0x0;if(_0x2f4bc8){const _0xf2b7f0=VisuMZ[_0x1eb8c8(0x1cb)][_0x5b7bef];if(!_0xf2b7f0)return;_0x2b0ed0=_0xf2b7f0[_0x1eb8c8(0x2b0)],_0x82f5b6=_0xf2b7f0[_0x1eb8c8(0x145)];}else _0x2b0ed0=_0x236880['mapId'],_0x82f5b6=_0x236880[_0x1eb8c8(0x1cc)];if(!this['checkValidEventerMap'](_0x2b0ed0,_0x82f5b6))return;if(_0x2f4bc8){const _0x414342=VisuMZ['EventTemplates'][_0x5b7bef];_0x414342[_0x1eb8c8(0x286)][_0x1eb8c8(0x2ad)](this,_0x2b0ed0,_0x82f5b6,this);}_0x337f61[_0x1eb8c8(0x286)][_0x1eb8c8(0x2ad)](this,_0x2b0ed0,_0x82f5b6,this),this['_eventSpawnData']=_0x236880,this[_0x1eb8c8(0xc1)]=-0x2,this[_0x1eb8c8(0x49f)]=$gameMap[_0x1eb8c8(0x35f)](),this['_eventId']=_0x236880[_0x1eb8c8(0x136)],this[_0x1eb8c8(0x3da)]=_0x236880['spawnPreserved'],this[_0x1eb8c8(0x1f7)](_0x236880['x'],_0x236880['y']),this['setDirection'](_0x236880[_0x1eb8c8(0x138)]),this[_0x1eb8c8(0x2ca)]();if(_0x2f4bc8){const _0x5cd8ee=VisuMZ['EventTemplates'][_0x5b7bef];if(!_0x5cd8ee)return;_0x5cd8ee[_0x1eb8c8(0x3e5)][_0x1eb8c8(0x2ad)](this,_0x2b0ed0,_0x82f5b6,this);}_0x337f61[_0x1eb8c8(0x3e5)]['call'](this,_0x2b0ed0,_0x82f5b6,this);const _0x33be35=SceneManager[_0x1eb8c8(0x383)];if(_0x33be35&&_0x33be35[_0x1eb8c8(0x229)])_0x33be35[_0x1eb8c8(0x229)]['createSpawnedEvent'](this);},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x30f)]=function(){const _0x1632fb=_0x2a5e1a;return!!this[_0x1632fb(0x3ff)];},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x311)]=function(){const _0x55076d=_0x2a5e1a;if(!this[_0x55076d(0x3ad)]())return;const _0x285432=this[_0x55076d(0x3ad)]()[_0x55076d(0x3b4)](_0x435167=>_0x435167['code']!==0x6c&&_0x435167[_0x55076d(0x324)]!==0x198);_0x285432['length']>0x1&&(this[_0x55076d(0x180)]=!![],this[_0x55076d(0x1b1)]([0x0,0x1,0x2])&&this['lock']());},VisuMZ['EventsMoveCore']['Game_Event_clearPageSettings']=Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x2f2)],Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x2f2)]=function(){const _0x245cb9=_0x2a5e1a;VisuMZ[_0x245cb9(0x2c1)][_0x245cb9(0x21d)]['call'](this),this[_0x245cb9(0x343)](),this[_0x245cb9(0x39f)]();},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x2f5)]=Game_Event['prototype'][_0x2a5e1a(0x1c4)],Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x1c4)]=function(){const _0x7a0e24=_0x2a5e1a;this[_0x7a0e24(0x38a)]=!![],VisuMZ['EventsMoveCore'][_0x7a0e24(0x2f5)][_0x7a0e24(0x2ad)](this),this['setupEventsMoveCoreEffects'](),this[_0x7a0e24(0x39f)](),this['_activationProximityAutoTriggerBypass']=![];},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x17a)]=function(){const _0x4df1c5=_0x2a5e1a;if(!this[_0x4df1c5(0x390)]())return;this[_0x4df1c5(0x343)](),this['setupEventsMoveCoreNotetags'](),this['setupEventsMoveCoreCommentTags'](),this['updateEventsMoveCoreTagChanges']();},Game_Event['prototype']['setupEventsMoveCoreNotetags']=function(){const _0x2e90ac=_0x2a5e1a,_0x15ce67=this[_0x2e90ac(0x390)]()[_0x2e90ac(0x3b8)];if(_0x15ce67==='')return;this[_0x2e90ac(0xfc)](_0x15ce67);},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x4db)]=function(){const _0xa7f5a6=_0x2a5e1a;if(!this[_0xa7f5a6(0x2b4)]())return;const _0x5f3235=this['list']();let _0x499615='';for(const _0x286d14 of _0x5f3235){if([0x6c,0x198][_0xa7f5a6(0x370)](_0x286d14['code'])){if(_0x499615!=='')_0x499615+='\x0a';_0x499615+=_0x286d14[_0xa7f5a6(0x1b3)][0x0];}}this['checkEventsMoveCoreStringTags'](_0x499615);},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x343)]=function(){const _0x499995=_0x2a5e1a,_0x39912e=VisuMZ[_0x499995(0x2c1)]['Settings'];this['_activationProximity']={'type':'none','distance':0x0,'regionList':[]},this[_0x499995(0x24b)]=![],this[_0x499995(0x2a5)](),this[_0x499995(0x413)]=![],this[_0x499995(0x28b)]=![],this['_addedHitbox']={'up':0x0,'down':0x0,'left':0x0,'right':0x0},this[_0x499995(0x400)]=$gameSystem['getEventIconData'](this),this['_labelWindow']={'text':'','visibleRange':_0x39912e['Label'][_0x499995(0x2dd)],'offsetX':_0x39912e[_0x499995(0xde)][_0x499995(0x169)],'offsetY':_0x39912e[_0x499995(0xde)][_0x499995(0x1fb)]},this[_0x499995(0x1f2)]=![],this['_moveOnlyRegions']=[],this[_0x499995(0x4d1)]={'target':-0x1,'type':'random','delay':0x1,'opacityDelta':0x0},this[_0x499995(0x283)]=_0x39912e[_0x499995(0x44f)][_0x499995(0x218)]??0x0,this[_0x499995(0x135)]=![],this[_0x499995(0x167)]={'visible':!![],'filename':_0x39912e[_0x499995(0x44f)][_0x499995(0x4a1)]},this[_0x499995(0x210)](),this['clearStepPattern']();},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0xfc)]=function(_0xe8c871){const _0x4ec529=_0x2a5e1a;if(_0xe8c871[_0x4ec529(0x355)](/<ACTIVATION[ ](?:REGION|REGIONS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i))this[_0x4ec529(0x3e2)][_0x4ec529(0x189)]=JSON[_0x4ec529(0x155)]('['+RegExp['$1'][_0x4ec529(0x355)](/\d+/g)+']'),this[_0x4ec529(0x3e2)][_0x4ec529(0x4e1)]='region';else _0xe8c871[_0x4ec529(0x355)](/<ACTIVATION[ ](.*?):[ ](\d+)>/i)&&(type=String(RegExp['$1'])[_0x4ec529(0x2c7)]()[_0x4ec529(0x215)](),this[_0x4ec529(0x3e2)][_0x4ec529(0x4e1)]=type,this[_0x4ec529(0x3e2)][_0x4ec529(0x3fc)]=Number(RegExp['$2']));_0xe8c871[_0x4ec529(0x355)](/<(?:ATTACH PICTURE|PICTURE) FILENAME:[ ](.*?)>/i)&&(this[_0x4ec529(0x295)]['filename']=String(RegExp['$1']));if(_0xe8c871[_0x4ec529(0x355)](/<(?:ATTACH PICTURE|PICTURE) BLEND MODE:[ ](.*?)>/i)){const _0x533ab8=String(RegExp['$1'])[_0x4ec529(0x108)]()['trim'](),_0xcabab4=[_0x4ec529(0xc0),_0x4ec529(0x412),_0x4ec529(0x159),_0x4ec529(0x17d)];this[_0x4ec529(0x295)][_0x4ec529(0x44b)]=_0xcabab4['indexOf'](_0x533ab8)[_0x4ec529(0x374)](0x0,0x3);}_0xe8c871[_0x4ec529(0x355)](/<(?:ATTACH PICTURE|PICTURE) (?:SIZE|MAX SIZE|MAX):[ ](\d+)>/i)&&(this[_0x4ec529(0x295)][_0x4ec529(0x467)]=Number(RegExp['$1']));_0xe8c871[_0x4ec529(0x355)](/<(?:ATTACH PICTURE|PICTURE) OFFSET X:[ ]([\+\-]\d+)>/i)&&(this['_attachPicture']['offsetX']=Number(RegExp['$1']));_0xe8c871[_0x4ec529(0x355)](/<(?:ATTACH PICTURE|PICTURE) OFFSET Y:[ ]([\+\-]\d+)>/i)&&(this['_attachPicture'][_0x4ec529(0x176)]=Number(RegExp['$1']));_0xe8c871[_0x4ec529(0x355)](/<(?:ATTACH PICTURE|PICTURE) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x4ec529(0x295)][_0x4ec529(0x2a6)]=Number(RegExp['$1']),this[_0x4ec529(0x295)]['offsetY']=Number(RegExp['$2']));_0xe8c871[_0x4ec529(0x355)](/<(?:ATTACH PICTURE|PICTURE) SCALE:[ ](\d+)([%％])>/i)&&(this[_0x4ec529(0x295)][_0x4ec529(0x103)]=Number(RegExp['$1'])*0.01);_0xe8c871['match'](/<ALWAYS UPDATE MOVEMENT>/i)&&(this['_alwaysUpdateMove']=!![]);_0xe8c871[_0x4ec529(0x355)](/<CLICK TRIGGER>/i)&&(this['_clickTrigger']=!![]);_0xe8c871[_0x4ec529(0x355)](/<CUSTOM Z:[ ](.*?)>/i)&&(this[_0x4ec529(0x28b)]=Number(RegExp['$1'])||0x0);const _0x1cf203=_0xe8c871[_0x4ec529(0x355)](/<HITBOX[ ](.*?):[ ](\d+)>/gi);if(_0x1cf203)for(const _0x3b720e of _0x1cf203){if(_0x3b720e[_0x4ec529(0x355)](/<HITBOX[ ](.*?):[ ](\d+)>/i)){const _0x1d939a=String(RegExp['$1'])['toLowerCase']()[_0x4ec529(0x215)](),_0x339519=Number(RegExp['$2']);this[_0x4ec529(0x173)][_0x1d939a]=_0x339519;}}_0xe8c871[_0x4ec529(0x355)](/<ICON:[ ](\d+)>/i)&&(this[_0x4ec529(0x400)][_0x4ec529(0x447)]=Number(RegExp['$1']));_0xe8c871[_0x4ec529(0x355)](/<ICON (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&(this[_0x4ec529(0x400)]['bufferX']=Number(RegExp['$1']));_0xe8c871['match'](/<ICON (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this['_eventIcon']['bufferY']=Number(RegExp['$1']));_0xe8c871[_0x4ec529(0x355)](/<ICON (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x4ec529(0x400)][_0x4ec529(0x2a3)]=Number(RegExp['$1']),this[_0x4ec529(0x400)][_0x4ec529(0x315)]=Number(RegExp['$2']));if(_0xe8c871[_0x4ec529(0x355)](/<ICON BLEND MODE:[ ](.*?)>/i)){const _0x3afc92=String(RegExp['$1'])[_0x4ec529(0x108)]()[_0x4ec529(0x215)](),_0x563937=[_0x4ec529(0xc0),_0x4ec529(0x412),_0x4ec529(0x159),_0x4ec529(0x17d)];this['_eventIcon'][_0x4ec529(0x44b)]=_0x563937[_0x4ec529(0x1f9)](_0x3afc92)['clamp'](0x0,0x3);}_0xe8c871['match'](/<LABEL:[ ](.*?)>/i)&&(this[_0x4ec529(0x144)]['text']=String(RegExp['$1'])[_0x4ec529(0x215)]());_0xe8c871['match'](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i)&&(this['_labelWindow'][_0x4ec529(0x146)]=String(RegExp['$1'])[_0x4ec529(0x215)]());_0xe8c871[_0x4ec529(0x355)](/<LABEL (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&(this[_0x4ec529(0x144)]['offsetX']=Number(RegExp['$1']));_0xe8c871[_0x4ec529(0x355)](/<LABEL (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this['_labelWindow'][_0x4ec529(0x176)]=Number(RegExp['$1']));_0xe8c871['match'](/<LABEL (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x4ec529(0x144)][_0x4ec529(0x2a6)]=Number(RegExp['$1']),this[_0x4ec529(0x144)]['offsetY']=Number(RegExp['$2']));$gameTemp[_0x4ec529(0x28d)](this);for(;;){if(this['_labelWindow'][_0x4ec529(0x146)][_0x4ec529(0x355)](/\\V\[(\d+)\]/gi))this[_0x4ec529(0x144)]['text']=this['_labelWindow'][_0x4ec529(0x146)][_0x4ec529(0x328)](/\\V\[(\d+)\]/gi,(_0x4012c2,_0x34adf0)=>$gameVariables[_0x4ec529(0x436)](parseInt(_0x34adf0)));else break;}$gameTemp[_0x4ec529(0x285)]();_0xe8c871['match'](/<LABEL RANGE:[ ](\d+)>/i)&&(this[_0x4ec529(0x144)][_0x4ec529(0x26d)]=Number(RegExp['$1']));_0xe8c871[_0x4ec529(0x355)](/<MIRROR SPRITE>/i)&&(this[_0x4ec529(0x1f2)]=!![]);if(_0xe8c871['match'](/<MOVE ONLY (?:REGION|REGIONS):[ ](\d+(?:\s*,\s*\d+)*)>/i)){const _0x4c99b6=JSON[_0x4ec529(0x155)]('['+RegExp['$1']['match'](/\d+/g)+']');this[_0x4ec529(0x116)]=this[_0x4ec529(0x116)]['concat'](_0x4c99b6),this[_0x4ec529(0x116)][_0x4ec529(0x3fb)](0x0);}if(_0xe8c871['match'](/<MOVE SYNCH TARGET:[ ](.*?)>/i)){const _0x5c0415=String(RegExp['$1']);if(_0x5c0415[_0x4ec529(0x355)](/PLAYER/i))this['_moveSynch'][_0x4ec529(0x303)]=0x0;else _0x5c0415[_0x4ec529(0x355)](/EVENT[ ](\d+)/i)&&(this['_moveSynch'][_0x4ec529(0x303)]=Number(RegExp['$1']));}_0xe8c871['match'](/<MOVE SYNCH TYPE:[ ](.*?)>/i)&&(this[_0x4ec529(0x4d1)][_0x4ec529(0x4e1)]=String(RegExp['$1'])['toLowerCase']()['trim']());_0xe8c871[_0x4ec529(0x355)](/<MOVE SYNCH DELAY:[ ](\d+)>/i)&&(this[_0x4ec529(0x4d1)][_0x4ec529(0x2ba)]=Number(RegExp['$1']));_0xe8c871['match'](/<MOVE SYNCH DISTANCE OPACITY:[ ](.*?)>/i)&&(this['_moveSynch'][_0x4ec529(0x44d)]=Number(RegExp['$1']));if(_0xe8c871[_0x4ec529(0x355)](/<TRUE RANDOM MOVE>/i))this[_0x4ec529(0x283)]=0x0;else _0xe8c871[_0x4ec529(0x355)](/<RANDOM MOVE WEIGHT:[ ](.*?)>/i)&&(this['_randomMoveWeight']=Number(RegExp['$1'])||0x0);_0xe8c871[_0x4ec529(0x355)](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this['_saveEventLocation']=!![]),_0xe8c871[_0x4ec529(0x355)](/<HIDE SHADOW>/i)&&(this['_shadowGraphic'][_0x4ec529(0x481)]=![]),_0xe8c871[_0x4ec529(0x355)](/<SHADOW FILENAME:[ ](.*?)>/i)&&(this[_0x4ec529(0x167)][_0x4ec529(0x42c)]=String(RegExp['$1'])),_0xe8c871[_0x4ec529(0x355)](/<SPRITE OFFSET X:[ ]([\+\-]\d+)>/i)&&(this[_0x4ec529(0x365)]=Number(RegExp['$1'])),_0xe8c871[_0x4ec529(0x355)](/<SPRITE OFFSET Y:[ ]([\+\-]\d+)>/i)&&(this[_0x4ec529(0x44a)]=Number(RegExp['$1'])),_0xe8c871[_0x4ec529(0x355)](/<SPRITE OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x4ec529(0x365)]=Number(RegExp['$1']),this[_0x4ec529(0x44a)]=Number(RegExp['$2'])),_0xe8c871[_0x4ec529(0x355)](/<STEP PATTERN:[ ](.*)>/i)&&(this['_stepPattern']=String(RegExp['$1'])[_0x4ec529(0x108)]()[_0x4ec529(0x215)]());},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x1c7)]=function(){const _0x200499=_0x2a5e1a;this[_0x200499(0x219)]();},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x3af)]=function(){const _0x268988=_0x2a5e1a;if(this[_0x268988(0x24b)])return!![];return Game_Character[_0x268988(0x357)]['isNearTheScreen'][_0x268988(0x2ad)](this);},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x182)]=Game_Event[_0x2a5e1a(0x357)]['updateSelfMovement'],Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x277)]=function(){const _0xe94a51=_0x2a5e1a;if(this[_0xe94a51(0x223)]())return;VisuMZ[_0xe94a51(0x2c1)][_0xe94a51(0x182)][_0xe94a51(0x2ad)](this),this[_0xe94a51(0x48b)]()&&VisuMZ[_0xe94a51(0x314)](this[_0xe94a51(0xc7)]);},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x223)]=function(){const _0x1ae288=_0x2a5e1a,_0x42a51b=VisuMZ[_0x1ae288(0x2c1)][_0x1ae288(0x14c)][_0x1ae288(0x44f)];if($gameMap[_0x1ae288(0x26b)]()&&_0x42a51b['StopAutoMoveEvents'])return!![];if($gameMessage[_0x1ae288(0x1ba)]()&&_0x42a51b['StopAutoMoveMessages'])return!![];if(!$gameSystem[_0x1ae288(0x226)]())return!![];if(this[_0x1ae288(0x2ff)]()>=0x0)return!![];return![];},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x219)]=function(){const _0x33b2b2=_0x2a5e1a,_0x3d6348=SceneManager[_0x33b2b2(0x383)][_0x33b2b2(0x229)];if(_0x3d6348){const _0x2b7c41=_0x3d6348[_0x33b2b2(0x3d7)](this);_0x2b7c41&&_0x2b7c41[_0x33b2b2(0x3ae)]&&_0x2b7c41['_shadowSprite']['_filename']!==this[_0x33b2b2(0x1c6)]()&&(_0x2b7c41['_shadowSprite'][_0x33b2b2(0x434)]=this[_0x33b2b2(0x1c6)](),_0x2b7c41[_0x33b2b2(0x3ae)]['bitmap']=ImageManager[_0x33b2b2(0x4a4)](_0x2b7c41[_0x33b2b2(0x3ae)][_0x33b2b2(0x434)]));}},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x1c6)]=function(){const _0x5817b2=_0x2a5e1a;return this[_0x5817b2(0x167)][_0x5817b2(0x42c)];},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x3c2)]=function(){const _0x130a88=_0x2a5e1a;if(!this[_0x130a88(0x167)][_0x130a88(0x481)])return![];return Game_CharacterBase[_0x130a88(0x357)]['isShadowVisible'][_0x130a88(0x2ad)](this);},Game_Event['prototype'][_0x2a5e1a(0x40b)]=function(){return this['_labelWindow']['text'];},Game_Event['prototype'][_0x2a5e1a(0x362)]=function(){const _0x2ade8c=_0x2a5e1a;return this[_0x2ade8c(0x144)][_0x2ade8c(0x26d)];},Game_Event['prototype'][_0x2a5e1a(0x1ee)]=function(_0x97f475,_0x1a7457,_0x3e9dc8){const _0x29ddd2=_0x2a5e1a;if(this[_0x29ddd2(0x127)]())return this[_0x29ddd2(0xf0)](_0x97f475,_0x1a7457,_0x3e9dc8);if($gameMap[_0x29ddd2(0x32a)](_0x97f475,_0x1a7457,_0x3e9dc8,_0x29ddd2(0x390)))return!![];if($gameMap['isRegionForbidPass'](_0x97f475,_0x1a7457,_0x3e9dc8,'event'))return![];return Game_Character[_0x29ddd2(0x357)][_0x29ddd2(0x1ee)][_0x29ddd2(0x2ad)](this,_0x97f475,_0x1a7457,_0x3e9dc8);},Game_Event['prototype'][_0x2a5e1a(0x127)]=function(){const _0x592fe1=_0x2a5e1a;if(this[_0x592fe1(0x116)]===undefined)this[_0x592fe1(0x343)]();return this[_0x592fe1(0x116)][_0x592fe1(0x396)]>0x0;},Game_Event[_0x2a5e1a(0x357)]['isMoveOnlyRegionPassable']=function(_0x41a407,_0x528a23,_0x39fbb1){const _0x15b9af=_0x2a5e1a,_0x2ad602=$gameMap[_0x15b9af(0x273)](_0x41a407,_0x39fbb1),_0xbc0a1c=$gameMap[_0x15b9af(0x1fc)](_0x528a23,_0x39fbb1),_0x13248a=$gameMap[_0x15b9af(0x351)](_0x2ad602,_0xbc0a1c);return this[_0x15b9af(0x116)][_0x15b9af(0x370)](_0x13248a);},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x2ea)]=Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x496)],Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x496)]=function(){const _0x35439b=_0x2a5e1a;return this[_0x35439b(0x33e)]=![],this['_CPCs']=![],this[_0x35439b(0x390)]()?VisuMZ[_0x35439b(0x2c1)][_0x35439b(0x2ea)][_0x35439b(0x2ad)](this):-0x1;},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x224)]=Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x20b)],Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x20b)]=function(_0x11cbe2){const _0xe518ef=_0x2a5e1a;this[_0xe518ef(0x2ec)](_0x11cbe2),$gameTemp[_0xe518ef(0x28d)](this);const _0x361d7a=VisuMZ[_0xe518ef(0x2c1)][_0xe518ef(0x224)][_0xe518ef(0x2ad)](this,_0x11cbe2);return $gameTemp[_0xe518ef(0x285)](),_0x361d7a;},Game_Event[_0x2a5e1a(0x357)]['hasAdvancedSwitchVariable']=function(){const _0x3af857=_0x2a5e1a;return this[_0x3af857(0x33e)];},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x2ec)]=function(_0x254f67){const _0x17f9ce=_0x2a5e1a,_0x2415c1=_0x254f67[_0x17f9ce(0x1f5)];if(_0x2415c1[_0x17f9ce(0xc5)]&&DataManager[_0x17f9ce(0x1a1)](_0x2415c1[_0x17f9ce(0x26c)]))this['_advancedSwitchVariable']=!![];else{if(_0x2415c1[_0x17f9ce(0x1d9)]&&DataManager[_0x17f9ce(0x1a1)](_0x2415c1[_0x17f9ce(0x106)]))this['_advancedSwitchVariable']=!![];else _0x2415c1['variableValid']&&DataManager[_0x17f9ce(0xdb)](_0x2415c1[_0x17f9ce(0x4d5)])&&(this[_0x17f9ce(0x33e)]=!![]);}},Game_Event[_0x2a5e1a(0x357)]['hasClickTrigger']=function(){const _0x2f6c1f=_0x2a5e1a;if(this[_0x2f6c1f(0x23a)])return![];return this[_0x2f6c1f(0x413)];},Game_Event['prototype'][_0x2a5e1a(0x317)]=function(){const _0x29027e=_0x2a5e1a;$gameTemp['clearDestination'](),this[_0x29027e(0x311)]();},Game_Event[_0x2a5e1a(0x357)]['pos']=function(_0x31cdd2,_0x558c41){const _0x2bdb7c=_0x2a5e1a;return this['_addedHitbox']?this['posEventsMoveCore'](_0x31cdd2,_0x558c41):Game_Character[_0x2bdb7c(0x357)][_0x2bdb7c(0x1ce)][_0x2bdb7c(0x2ad)](this,_0x31cdd2,_0x558c41);},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x1f8)]=function(_0x21b59f,_0x274d4a){const _0x116d3f=_0x2a5e1a;var _0x2c7c43=this['x']-this[_0x116d3f(0x173)]['left'],_0x31ea1f=this['x']+this[_0x116d3f(0x173)]['right'],_0x3f76ce=this['y']-this[_0x116d3f(0x173)]['up'],_0x284b08=this['y']+this[_0x116d3f(0x173)][_0x116d3f(0x236)];return _0x2c7c43<=_0x21b59f&&_0x21b59f<=_0x31ea1f&&_0x3f76ce<=_0x274d4a&&_0x274d4a<=_0x284b08;},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x153)]=function(_0x586eb9,_0x12d580,_0x5cd847){const _0x2d164b=_0x2a5e1a;for(let _0x2db038=-this[_0x2d164b(0x173)]['left'];_0x2db038<=this[_0x2d164b(0x173)][_0x2d164b(0x3e3)];_0x2db038++){for(let _0x3793f3=-this[_0x2d164b(0x173)]['up'];_0x3793f3<=this[_0x2d164b(0x173)][_0x2d164b(0x236)];_0x3793f3++){if(!Game_Character['prototype'][_0x2d164b(0x153)]['call'](this,_0x586eb9+_0x2db038,_0x12d580+_0x3793f3,_0x5cd847))return![];}}return!![];},Game_Event[_0x2a5e1a(0x357)]['isCollidedWithEvents']=function(_0x31045a,_0x11f412){const _0x4e3831=_0x2a5e1a;if(Imported['VisuMZ_0_CoreEngine']&&this[_0x4e3831(0x36c)]())return this[_0x4e3831(0x4bd)](_0x31045a,_0x11f412);else{const _0x44c3a7=$gameMap[_0x4e3831(0x2cd)](_0x31045a,_0x11f412)['filter'](_0x2d0807=>_0x2d0807!==this);return _0x44c3a7[_0x4e3831(0x396)]>0x0;}},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x4bd)]=function(_0x355cb8,_0x2863b2){const _0xeee9f2=_0x2a5e1a;if(!this[_0xeee9f2(0x39c)]())return![];else{const _0x8f87ff=$gameMap[_0xeee9f2(0x2cd)](_0x355cb8,_0x2863b2)[_0xeee9f2(0x3b4)](_0x3415c0=>_0x3415c0!==this&&_0x3415c0[_0xeee9f2(0x39c)]());return _0x8f87ff[_0xeee9f2(0x396)]>0x0;}},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x18e)]=function(){const _0x17c45a=_0x2a5e1a;return this['_activationProximity'][_0x17c45a(0x4e1)]||'none';},Game_Event[_0x2a5e1a(0x357)]['activationProximityDistance']=function(){const _0x244035=_0x2a5e1a;return this[_0x244035(0x3e2)]['distance']||0x0;},Game_Event['prototype'][_0x2a5e1a(0x4c1)]=function(){const _0x39f460=_0x2a5e1a;return this[_0x39f460(0x3e2)]['regionList']||[];},Game_Event['prototype'][_0x2a5e1a(0x2e9)]=function(){const _0xc6b6f4=_0x2a5e1a;Game_Character[_0xc6b6f4(0x357)][_0xc6b6f4(0x2e9)][_0xc6b6f4(0x2ad)](this);if([_0xc6b6f4(0x2ed),_0xc6b6f4(0x10e)][_0xc6b6f4(0x370)](this[_0xc6b6f4(0x18e)]()))return;$gamePlayer[_0xc6b6f4(0x4ae)]([0x2]);},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x485)]=Game_Event['prototype'][_0x2a5e1a(0x464)],Game_Event[_0x2a5e1a(0x357)]['checkEventTriggerAuto']=function(){const _0x2a708a=_0x2a5e1a;if(this[_0x2a708a(0x35c)]!==0x3)return;if(this['_activationProximityAutoTriggerBypass'])return;if(!this[_0x2a708a(0x36a)](![]))return;if(!this[_0x2a708a(0x181)](![]))return;VisuMZ[_0x2a708a(0x2c1)][_0x2a708a(0x485)]['call'](this);},VisuMZ['EventsMoveCore'][_0x2a5e1a(0x16a)]=Game_Event['prototype'][_0x2a5e1a(0x4c2)],Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x4c2)]=function(){const _0x1b7013=_0x2a5e1a;if(!this[_0x1b7013(0x2bc)])return;if(!this[_0x1b7013(0x36a)](!![]))return;if(!this[_0x1b7013(0x181)](!![]))return;VisuMZ[_0x1b7013(0x2c1)][_0x1b7013(0x16a)][_0x1b7013(0x2ad)](this);},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x36a)]=function(_0x46666c){const _0x111ffb=_0x2a5e1a;if(!_0x46666c&&$gameMap[_0x111ffb(0x26b)]())return![];if(!_0x46666c&&$gameMap[_0x111ffb(0x4aa)]())return![];if(this[_0x111ffb(0x4c1)]()<=0x0)return!![];return $gamePlayer[_0x111ffb(0x3d5)](this);},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x181)]=function(_0x6ce849){const _0x2adc6e=_0x2a5e1a;if(!_0x6ce849&&$gameMap[_0x2adc6e(0x26b)]())return![];if(!_0x6ce849&&$gameMap[_0x2adc6e(0x4aa)]())return![];if([_0x2adc6e(0x2ed),_0x2adc6e(0x10e)][_0x2adc6e(0x370)](this['activationProximityType']()))return!![];return $gamePlayer[_0x2adc6e(0x192)](this);},VisuMZ[_0x2a5e1a(0x314)]=function(_0x3cabc8){const _0x3ac31a=_0x2a5e1a;for(const _0x4eaca4 of $gameMap[_0x3ac31a(0x2eb)]()){if(!_0x4eaca4)continue;_0x4eaca4[_0x3ac31a(0x2ff)]()===_0x3cabc8&&_0x4eaca4[_0x3ac31a(0x3ac)]();}},VisuMZ[_0x2a5e1a(0x1ab)]=function(_0x3d20a2){if(_0x3d20a2===0x0)return $gamePlayer;return $gameMap['event'](_0x3d20a2);},Game_Event[_0x2a5e1a(0x357)]['moveSynchTarget']=function(){const _0x92f334=_0x2a5e1a;return this[_0x92f334(0x4d1)][_0x92f334(0x303)];},Game_Event[_0x2a5e1a(0x357)]['moveSynchType']=function(){const _0x9e1704=_0x2a5e1a;return this[_0x9e1704(0x4d1)][_0x9e1704(0x4e1)];},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x432)]=function(){const _0x2e87f3=_0x2a5e1a;if(this[_0x2e87f3(0x2ff)]()>=0x0){const _0x36f557=VisuMZ[_0x2e87f3(0x1ab)](this[_0x2e87f3(0x2ff)]());if(_0x36f557)return _0x36f557['realMoveSpeed']();}return Game_Character[_0x2e87f3(0x357)][_0x2e87f3(0x432)][_0x2e87f3(0x2ad)](this);},Game_Event['prototype']['updateMoveSynch']=function(){const _0x1d6334=_0x2a5e1a;this[_0x1d6334(0x4d1)][_0x1d6334(0x37d)]=this['_moveSynch']['timer']||0x0,this[_0x1d6334(0x4d1)][_0x1d6334(0x37d)]--;if(this['_moveSynch'][_0x1d6334(0x37d)]>0x0)return;this[_0x1d6334(0x4d1)][_0x1d6334(0x37d)]=this[_0x1d6334(0x4d1)][_0x1d6334(0x2ba)],this['processMoveSynch']();},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x1e9)]=function(_0x404c1c){const _0x26666a=_0x2a5e1a;if(this[_0x26666a(0x2ff)]()>=0x0){const _0x484e54=VisuMZ[_0x26666a(0x1ab)](this['moveSynchTarget']());if(_0x484e54){const _0x5e5b8a=$gameMap[_0x26666a(0x3fc)](this[_0x26666a(0x44c)],this[_0x26666a(0x3a0)],_0x484e54[_0x26666a(0x44c)],_0x484e54['_realY'])-0x1,_0x195ed6=Math[_0x26666a(0x4d9)]($gameMap['tileWidth'](),$gameMap['tileHeight']()),_0x3491c5=this[_0x26666a(0x4d1)][_0x26666a(0x44d)]||0x0;_0x404c1c-=Math[_0x26666a(0x203)](0x0,_0x5e5b8a)*_0x195ed6*_0x3491c5;}}return _0x404c1c;},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x36e)]=function(){const _0x4893e0=_0x2a5e1a;switch(this['moveSynchType']()){case _0x4893e0(0x3ba):this[_0x4893e0(0x459)]();break;case'approach':this[_0x4893e0(0x2f9)]();break;case _0x4893e0(0x4ad):this[_0x4893e0(0x114)]();break;case _0x4893e0(0x45c):this['processMoveSynchCustom']();break;case'mimic':case _0x4893e0(0x3fe):this[_0x4893e0(0x29c)]();break;case _0x4893e0(0x368):case _0x4893e0(0x46d):this[_0x4893e0(0x4a8)]();break;case _0x4893e0(0x1c5):case _0x4893e0(0x435):case _0x4893e0(0x38c):case _0x4893e0(0x202):this[_0x4893e0(0x377)]();break;case _0x4893e0(0x172):case _0x4893e0(0x133):case _0x4893e0(0x206):case _0x4893e0(0x101):this[_0x4893e0(0x327)]();break;default:this['processMoveSynchRandom']();break;}this['update']();},Game_Event['prototype']['processMoveSynchRandom']=function(){const _0x3797e5=_0x2a5e1a,_0x451eff=[0x2,0x4,0x6,0x8];$gameMap['isSupportDiagonalMovement']()&&_0x451eff['push'](0x1,0x3,0x7,0x9);const _0x52441f=[];for(const _0x4cf18b of _0x451eff){if(this[_0x3797e5(0x153)](this['x'],this['y'],_0x4cf18b))_0x52441f[_0x3797e5(0x4b0)](_0x4cf18b);}if(_0x52441f['length']>0x0){const _0x8efb10=_0x52441f[Math[_0x3797e5(0x1b4)](_0x52441f['length'])];this[_0x3797e5(0x1b7)](_0x8efb10);}},Game_Event[_0x2a5e1a(0x357)]['processMoveSynchApproach']=function(){const _0x4fc9c4=_0x2a5e1a,_0x5af546=VisuMZ[_0x4fc9c4(0x1ab)](this[_0x4fc9c4(0x2ff)]());this['moveTowardCharacter'](_0x5af546);},Game_Event[_0x2a5e1a(0x357)]['processMoveSynchAway']=function(){const _0x2faa45=_0x2a5e1a,_0x2ab379=VisuMZ[_0x2faa45(0x1ab)](this[_0x2faa45(0x2ff)]());this['moveAwayFromCharacter'](_0x2ab379);},Game_Event[_0x2a5e1a(0x357)]['processMoveSynchCustom']=function(){this['updateRoutineMove']();},Game_Event['prototype']['processMoveSynchMimic']=function(){const _0x1dc6eb=_0x2a5e1a,_0x3a45fa=VisuMZ['GetMoveSynchTarget'](this['moveSynchTarget']());this[_0x1dc6eb(0x1b7)](_0x3a45fa[_0x1dc6eb(0x1fa)]());},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x4a8)]=function(){const _0x1c5fdb=_0x2a5e1a,_0x44b0dc=VisuMZ[_0x1c5fdb(0x1ab)](this[_0x1c5fdb(0x2ff)]());this[_0x1c5fdb(0x1b7)](this['reverseDir'](_0x44b0dc[_0x1c5fdb(0x1fa)]()));},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x377)]=function(){const _0x10274a=_0x2a5e1a,_0x1258c5=VisuMZ[_0x10274a(0x1ab)](this[_0x10274a(0x2ff)]()),_0xc0ffba=[0x0,0x7,0x8,0x9,0x4,0x0,0x6,0x1,0x2,0x3][_0x1258c5[_0x10274a(0x1fa)]()];this[_0x10274a(0x1b7)](_0xc0ffba);},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x327)]=function(){const _0x3d348e=_0x2a5e1a,_0x3f3d95=VisuMZ[_0x3d348e(0x1ab)](this[_0x3d348e(0x2ff)]()),_0x597c42=[0x0,0x3,0x2,0x1,0x6,0x0,0x4,0x9,0x8,0x7][_0x3f3d95[_0x3d348e(0x1fa)]()];this[_0x3d348e(0x1b7)](_0x597c42);},Game_Event['prototype']['restoreSavedEventPosition']=function(){const _0x35dfc1=_0x2a5e1a,_0x15dd87=$gameSystem[_0x35dfc1(0x170)](this);if(!_0x15dd87)return;this[_0x35dfc1(0x23e)](_0x15dd87['x'],_0x15dd87['y']),this[_0x35dfc1(0x2d2)](),this['setDirection'](_0x15dd87[_0x35dfc1(0x138)]),this['_pageIndex']===_0x15dd87[_0x35dfc1(0x23c)]&&(this[_0x35dfc1(0x3c1)]=_0x15dd87[_0x35dfc1(0x2fe)]);},VisuMZ[_0x2a5e1a(0x2c1)]['Game_Event_update']=Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x125)],Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x125)]=function(){const _0x2ca018=_0x2a5e1a;VisuMZ[_0x2ca018(0x2c1)][_0x2ca018(0xe1)]['call'](this),this[_0x2ca018(0x168)]();},Game_Event['prototype'][_0x2a5e1a(0x31c)]=function(){const _0x511e19=_0x2a5e1a;Game_Character['prototype']['updateMove'][_0x511e19(0x2ad)](this),this['autosaveEventLocation']();},Game_Event['prototype'][_0x2a5e1a(0x419)]=function(){const _0x4e53c2=_0x2a5e1a;if($gameMap[_0x4e53c2(0x2e3)]())return!![];return this[_0x4e53c2(0x135)];},Game_Event['prototype'][_0x2a5e1a(0x39f)]=function(){const _0x1ee6ea=_0x2a5e1a;if(!this[_0x1ee6ea(0x419)]())return;this[_0x1ee6ea(0x2b1)]();},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x2b1)]=function(){const _0x2315c4=_0x2a5e1a;this[_0x2315c4(0x30c)]=!![];},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x168)]=function(){const _0x53d1e0=_0x2a5e1a;this['_requestSaveEventLocation']&&this[_0x53d1e0(0x310)]();},Game_Event['prototype'][_0x2a5e1a(0x310)]=function(){const _0x164af3=_0x2a5e1a;this[_0x164af3(0x30c)]=![],$gameSystem['saveEventLocation'](this);},Game_Event['prototype'][_0x2a5e1a(0xdf)]=function(){const _0x229f3f=_0x2a5e1a;$gameSystem[_0x229f3f(0x3b2)](this);},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x429)]=function(){const _0x23c9df=_0x2a5e1a;return $gameSystem[_0x23c9df(0x429)](this)?Game_Character[_0x23c9df(0x357)][_0x23c9df(0x429)]['call'](this):{'iconIndex':0x0,'bufferX':settings['Icon']['BufferX'],'bufferY':settings[_0x23c9df(0x346)][_0x23c9df(0x2e5)],'blendMode':settings[_0x23c9df(0x346)][_0x23c9df(0x18a)]};},Game_Event['prototype'][_0x2a5e1a(0x17b)]=function(){const _0x77c041=_0x2a5e1a;return this[_0x77c041(0x446)];},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x444)]=Game_Event['prototype'][_0x2a5e1a(0x20b)],Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x20b)]=function(_0x45e853){const _0x17b975=_0x2a5e1a,_0xde052a=VisuMZ[_0x17b975(0x2c1)][_0x17b975(0x444)]['call'](this,_0x45e853);if(!_0xde052a)return![];return this[_0x17b975(0x10c)](_0x45e853);},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x10c)]=function(_0x49ff6d){const _0x342d8c=_0x2a5e1a;VisuMZ[_0x342d8c(0x2c1)][_0x342d8c(0x27e)][_0x342d8c(0x23b)](_0x49ff6d),this[_0x342d8c(0x446)]=_0x49ff6d[_0x342d8c(0x233)]['length']>0x0;_0x49ff6d[_0x342d8c(0x233)]===undefined&&VisuMZ[_0x342d8c(0x2c1)]['CustomPageConditions'][_0x342d8c(0x23b)](_0x49ff6d);if(_0x49ff6d[_0x342d8c(0x233)][_0x342d8c(0x396)]>0x0)return $gameMap[_0x342d8c(0x390)](this['_eventId'])&&VisuMZ[_0x342d8c(0x2c1)][_0x342d8c(0x27e)][_0x342d8c(0x470)](_0x49ff6d[_0x342d8c(0x233)],this[_0x342d8c(0xc7)]);return!![];},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x297)]=Game_Troop[_0x2a5e1a(0x357)][_0x2a5e1a(0x20b)],Game_Troop[_0x2a5e1a(0x357)][_0x2a5e1a(0x20b)]=function(_0x1ae75e){const _0x330263=_0x2a5e1a;var _0x4dd03b=VisuMZ[_0x330263(0x2c1)][_0x330263(0x297)]['call'](this,_0x1ae75e);return _0x4dd03b&&this[_0x330263(0x33d)](_0x1ae75e);},Game_Troop[_0x2a5e1a(0x357)]['CPCsMet']=function(_0x2fb16b){const _0x29f440=_0x2a5e1a;_0x2fb16b[_0x29f440(0x233)]===undefined&&VisuMZ[_0x29f440(0x2c1)][_0x29f440(0x27e)]['loadCPC'](_0x2fb16b);if(_0x2fb16b[_0x29f440(0x233)]['length']>0x0)return VisuMZ[_0x29f440(0x2c1)][_0x29f440(0x27e)][_0x29f440(0x470)](_0x2fb16b['CPC'],0x0);return!![];},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x473)]=Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x1f7)],Game_Event['prototype']['locate']=function(_0x97cc28,_0x45154b){const _0x2aa0ee=_0x2a5e1a;VisuMZ['EventsMoveCore']['Game_Event_locate'][_0x2aa0ee(0x2ad)](this,_0x97cc28,_0x45154b),this[_0x2aa0ee(0x3e1)]=_0x97cc28,this[_0x2aa0ee(0x24a)]=_0x45154b,this['autosaveEventLocation']();},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x104)]=Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x11c)],Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x11c)]=function(){const _0x4cbcf4=_0x2a5e1a,_0x3032b2=$gameMap[_0x4cbcf4(0x3fc)](this['x'],this['y'],this[_0x4cbcf4(0x3e1)],this['_randomHomeY']),_0xfbf6ce=_0x3032b2*(this[_0x4cbcf4(0x283)]||0x0);Math['random']()>=_0xfbf6ce?VisuMZ[_0x4cbcf4(0x2c1)][_0x4cbcf4(0x104)][_0x4cbcf4(0x2ad)](this):this[_0x4cbcf4(0x3ec)]();},Game_Event[_0x2a5e1a(0x357)][_0x2a5e1a(0x3ec)]=function(){const _0x4461f0=_0x2a5e1a,_0x1afdcd=this[_0x4461f0(0x3f1)](this['_randomHomeX']),_0x304b8b=this[_0x4461f0(0x474)](this[_0x4461f0(0x24a)]);if(Math[_0x4461f0(0x409)](_0x1afdcd)>Math[_0x4461f0(0x409)](_0x304b8b))this['moveStraight'](_0x1afdcd>0x0?0x4:0x6),!this[_0x4461f0(0x3f0)]()&&_0x304b8b!==0x0&&this['moveStraight'](_0x304b8b>0x0?0x8:0x2);else _0x304b8b!==0x0&&(this[_0x4461f0(0x47b)](_0x304b8b>0x0?0x8:0x2),!this['isMovementSucceeded']()&&_0x1afdcd!==0x0&&this[_0x4461f0(0x47b)](_0x1afdcd>0x0?0x4:0x6));},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x2a5)]=function(){const _0x4f3275=_0x2a5e1a;this[_0x4f3275(0x295)]={'filename':'','blendMode':0x0,'maxSize':0x0,'offsetX':0x0,'offsetY':0x0,'scale':0x1};},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x312)]=function(){const _0x38c350=_0x2a5e1a;if(this[_0x38c350(0x295)]===undefined)this[_0x38c350(0x2a5)]();return this[_0x38c350(0x295)];},Game_CharacterBase[_0x2a5e1a(0x357)]['attachPictureFilename']=function(){const _0x5de19a=_0x2a5e1a;return this[_0x5de19a(0x312)]()[_0x5de19a(0x42c)]??'';},Game_CharacterBase['prototype'][_0x2a5e1a(0x2b2)]=function(){const _0x3582df=_0x2a5e1a;return this[_0x3582df(0x312)]()[_0x3582df(0x44b)]??0x0;},Game_CharacterBase['prototype'][_0x2a5e1a(0x492)]=function(){const _0x2b6fef=_0x2a5e1a;return this[_0x2b6fef(0x312)]()[_0x2b6fef(0x467)]??0x0;},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0xfb)]=function(){const _0x5243c2=_0x2a5e1a;return this[_0x5243c2(0x312)]()[_0x5243c2(0x2a6)]??0x0;},Game_CharacterBase[_0x2a5e1a(0x357)][_0x2a5e1a(0x40e)]=function(){const _0x1bd187=_0x2a5e1a;return this[_0x1bd187(0x312)]()['offsetY']??0x0;},Game_CharacterBase['prototype'][_0x2a5e1a(0x375)]=function(){const _0x512e92=_0x2a5e1a;return this[_0x512e92(0x312)]()[_0x512e92(0x103)]??0x1;},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x4ba)]=Game_Interpreter[_0x2a5e1a(0x357)][_0x2a5e1a(0x27c)],Game_Interpreter[_0x2a5e1a(0x357)][_0x2a5e1a(0x27c)]=function(){const _0x515d3a=_0x2a5e1a;if(this['_waitMode']===_0x515d3a(0x460)){if(window[this['_callEventMap']])this[_0x515d3a(0x468)]='',this['startCallEvent']();else return!![];}else return VisuMZ[_0x515d3a(0x2c1)][_0x515d3a(0x4ba)][_0x515d3a(0x2ad)](this);},VisuMZ['EventsMoveCore'][_0x2a5e1a(0x489)]=Game_Interpreter['prototype'][_0x2a5e1a(0x298)],Game_Interpreter['prototype']['executeCommand']=function(){const _0x1b8bf1=_0x2a5e1a,_0x3e8ac2=$gameMap&&this[_0x1b8bf1(0xc7)]?$gameMap[_0x1b8bf1(0x390)](this[_0x1b8bf1(0xc7)]):null;$gameTemp[_0x1b8bf1(0x28d)](_0x3e8ac2);const _0x4a9bc4=VisuMZ['EventsMoveCore'][_0x1b8bf1(0x489)]['call'](this);return $gameTemp[_0x1b8bf1(0x285)](),_0x4a9bc4;},VisuMZ['EventsMoveCore'][_0x2a5e1a(0x264)]=Game_Interpreter[_0x2a5e1a(0x357)]['command357'],Game_Interpreter[_0x2a5e1a(0x357)][_0x2a5e1a(0x178)]=function(_0x208f9d){const _0x4dd3a8=_0x2a5e1a;return $gameTemp['setLastPluginCommandInterpreter'](this),VisuMZ[_0x4dd3a8(0x2c1)][_0x4dd3a8(0x264)][_0x4dd3a8(0x2ad)](this,_0x208f9d);},Game_Interpreter[_0x2a5e1a(0x357)]['pluginCommandCallEvent']=function(_0x3d864e){const _0xc04327=_0x2a5e1a;this[_0xc04327(0x20f)]=_0x3d864e;const _0x4daf8f=_0xc04327(0x1d3)[_0xc04327(0x257)](_0x3d864e[_0xc04327(0x35f)][_0xc04327(0x42e)](0x3));this[_0xc04327(0x11d)]='$callEventMap'+Graphics['frameCount']+'_'+this[_0xc04327(0x1cc)](),DataManager[_0xc04327(0x3ea)](this[_0xc04327(0x11d)],_0x4daf8f),window[this[_0xc04327(0x11d)]]?this[_0xc04327(0x241)]():this[_0xc04327(0x3b6)]('CallEvent');},Game_Interpreter[_0x2a5e1a(0x357)]['startCallEvent']=function(){const _0x5b7a91=_0x2a5e1a,_0x2d4602=this[_0x5b7a91(0x20f)],_0xea8504=window[this[_0x5b7a91(0x11d)]],_0x3f6e52=_0xea8504['events'][_0x2d4602[_0x5b7a91(0x1cc)]];if(_0x3f6e52&&_0x3f6e52[_0x5b7a91(0x2c2)][_0x2d4602[_0x5b7a91(0x3be)]-0x1]){const _0x583c32=_0x3f6e52[_0x5b7a91(0x2c2)][_0x2d4602['pageId']-0x1]['list'];this[_0x5b7a91(0x251)](_0x583c32,this['eventId']());}window[this['_callEventMap']]=undefined,this[_0x5b7a91(0x11d)]=undefined,this[_0x5b7a91(0x20f)]=undefined;};function _0x3be3(){const _0x396c78=['setupSpawn','iconHeight','EventLocationDelete','_duration','standing','Game_Event_meetsConditionsCPC','updatePeriodicRefresh','_CPCs','iconIndex','Window_Message_startMessage','_speed','_spriteOffsetY','blendMode','_realX','opacityDelta','turnRight90','Movement','isPlayerForceHidden','_paused','ARRAYSTR','_patternLocked','itemPadding','EnableTurnInPlace','RemovePreserve','TargetVariableId','Game_CharacterBase_canPass','processMoveSynchRandom','_counter','VisibleEventLabels','custom','General','isTransparent','_characterName','CallEvent','updatePose','backY','isRegionDockable','checkEventTriggerAuto','isDashingEnabled','isDiagonalDirection','maxSize','_waitMode','PosY','updateEventIconSprite','Game_Variables_value','isEventClickTriggered','reverse\x20copy','add','_eventErased','metCPC','isTurnInPlace','76dcnUnh','Game_Event_locate','deltaYFrom','apply','processMoveRouteStepToCharacter','OpacitySpeed','initMembers','PlayerAllow','keys','moveStraight','moveDiagonally','_visiblePlayerY','Region','ARRAYSTRUCT','_attachPictureSprite','visible','createSaveEventLocationData','%1DockRegionOnly','EventForbid','Game_Event_checkEventTriggerAuto','NOTE','USER-DEFINED\x204','characterPatternYVS8','Game_Interpreter_executeCommand','TRUE','isMoving','_visiblePlayerX','initMembersEventsMoveCore','HEART','AutoBuffer','clearStepPattern','_eventPageIndex','attachPictureMaxSize','Step2Preserve','splice','BULB','findProperPageIndex','moveByInput','MessageCore','SPIN\x20ANTICLOCKWISE','SwitchGetSelfSwitchABCD','Operation','Game_Map_isDashDisabled','split','SWEAT','_mapId','_commonEventId','DefaultShadow','initialize','Plugin\x20Parameters\x20>\x20Event\x20Template\x20Settings\x20>\x0a','loadSystem','Game_SelfSwitches_setValue','opacitySpeed','isTargetEventValidForLabelWindow','processMoveSynchReverseMimic','_visibleEventX','isAnyEventStarting','SuccessSwitchId','TargetSwitchId','away','checkEventTriggerEventsMoveCore','processMoveRoutePatternLock','push','hasDragonbones','DashOnLadder','KNEEL','fittingHeight','disable','updatePatternEventsMoveCore','getMapSpawnedEventData','findDiagonalDirectionTo','EventTimerSpeed','Game_Interpreter_updateWaitMode','PlayerIconDelete','jump','checkSmartEventCollision','_tilemap','switchId','loadPicture','activationRegionList','updateParallel','getLastPluginCommandInterpreter','AllAllow','isShadowShrink','Passability','removeTemporaryMapSpawnedEvents','WalkForbid','isPlayerControlDisabled','_lastAttachPictureFilename','addChild','setPlayerControlDisable','List','isObjectCharacter','Game_CommonEvent_isActive','forceMoveRoute','_moveSynch','MUSIC\x20NOTE','_selfEvent','deletePreservedMorphEventDataKey','variableId','updateAttachPictureSprite','isPosing','isEventOverloaded','min','row','setupEventsMoveCoreCommentTags','_PreservedEventMorphData','processMoveRouteBalloon','clearPose','bitmap','804340zDqvHn','type','createLabelWindows','despawnTerrainTags','_pose','Sprite_Balloon_setup','iconSize','activationProximityDistance','eraseEvent','VariableId','hasStepAnime','adjustDir8MovementSpeed','_eventMorphData','_eventCache','trigger','COBWEB','Window_ScrollText_startMessage','_encounterEffectDuration','NORMAL','_pageIndex','Speed','getPosingCharacterDirection','_DisablePlayerControl','switch1Valid','contents','_eventId','PlayerForbid','addLoadListener','_vehicleType','%1%2','Walk','ARRAYJSON','EventLocationSave','resizeWindow','setupSpawnedEvents','determineCommonEventsWithCPC','checkEventTriggerHere','Game_CharacterBase_pattern','Game_Timer_initialize','SpawnEventDespawnEventID','_shadowOpacity','setFrame','move','default','clearCarrying','isAdvancedVariable','defaultFontSize','Vehicle','Label','deleteEventLocation','ANNOYED','Game_Event_update','status','Game_Map_refresh','Game_SelfSwitches_value','EVAL','_spawnData','Game_Follower_initialize','drawTextEx','You\x20do\x20not\x20have\x20Map\x20%1\x20added\x20to\x20the\x20list\x0a','VariableGetSelfVariableID','processMoveRouteJumpForward','Game_CharacterBase_opacity','RegionOk','windowPadding','dir8','isMoveOnlyRegionPassable','FollowerReset','firstSpawnedEventID','_eventScreenX','requestAnimation','deleteIconsOnEventsDataKey','makeDeepCopy','attachPictureFilename','Scene_Load_onLoadSuccess','some','processMoveRouteAnimation','attachPictureOffsetX','checkEventsMoveCoreStringTags','isDestinationValid','ShowShadows','lineHeight','Game_Player_performTransfer','vert\x20mirror','firstSpawnedEvent','scale','Game_Event_moveTypeRandom','Game_Timer_onExpire','switch2Id','checkValidEventerMap','toUpperCase','slice','createLabelWindowForTarget','Game_CharacterBase_screenY','meetsCPC','moveAwayFromPoint','region','_hidden','Sprite_Character_update','EnableDashTilt','Window_NumberInput_start','Toggle','processMoveSynchAway','onLoadAttachPicture','_moveOnlyRegions','drawText','prepareSpawnedEventAtRegion','Game_Player_isDashing','prepareSpawnedEventAtTerrainTag','gainFrames','moveTypeRandom','_callEventMap','clearDashing','setControlledFollowerID','AllForbid','resetExitSelfSwitches','Game_CharacterBase_updatePattern','frontY','resetSelfSwitchesForMap','update','isSelfVariable','hasMoveOnlyRegions','setAllowEventAutoMovement','All','Scene_Map_startEncounterEffect','EventIconChange','Value','_event','mapValue','IconSize','isSupportDiagonalMovement','TemplateName','PreCopyJS','vertical\x20mirror','Sprite_Character_setTileBitmap','_saveEventLocation','spawnEventId','setOpacity','direction','isLandOk','Direction','Game_Event_start','dashSpeedModifier','command108','LIGHT\x20BULB','meetsSwitchCondition','SelfVariables','return\x20%1','Minutes','EventTimerExpireEvent','_labelWindow','EventID','text','_PlayerDiagonalSetting','_newMapId','turn180','checkExistingEntitiesAt','_stopCount','Settings','_comments','createBitmap','RegionTouch','Game_CharacterBase_update','JSON','createAttachPictureSprite','canPass','Rope','parse','MapSwitches','_visibleEventY','initEventsMoveCore','MULTIPLY','updatePosition','_periodicRefreshTimer','Game_Enemy_meetsSwitchCondition','updateBitmapSmoothing','_proxyWindow','vehicle','SwitchId','resetFontSettings','shift','switches','follower','isRegionForbidPass','setValue','_shadowGraphic','updateSaveEventLocation','OffsetX','Game_Event_updateParallel','processMoveRouteSelfSwitch','height','Game_Vehicle_initMoveSpeed','CarryPose','processMoveRouteMoveRepeat','getSavedEventLocation','getInputDirection','mirror\x20vertical','_addedHitbox','setEventIconDataKey','EventLocationCreate','offsetY','_chaseOff','command357','needsUpdate','setupEventsMoveCoreEffects','hasCPCs','UNTITLED','SCREEN','setChaseOff','convertSelfVariableValuesInScriptCall','_starting','checkActivationProximity','Game_Event_updateSelfMovement','isBattleTest','isPassable','setPose','Game_Message_setNumberInput','4269864lWuhvl','square','regionList','BlendMode','setMapValue','drawIcon','PlayerMovementChange','activationProximityType','areFollowersForceHidden','_expireCommonEvent','useCarryPoseForIcons','meetActivationProximityConditions','Game_Player_isMapPassable','1478270AsHqty','setupCopyEvent','ITEM','BalloonOffsetY','removeMorph','_data','isTile','PreMorphJS','_labelWindows','prepareSpawnedEventAtXY','Hidden','_screenZoomScale','TiltVert','isAdvancedSwitch','deltaX','isOnLadder','SpawnEventDespawnAtXY','_forceShowFollower','Self\x20Variable\x20%1','reverseDir','zoomScale','DashingEnable','VehicleAllow','GetMoveSynchTarget','PosX','setMoveSpeed','_seconds','setBalloonPose','PreloadedMaps','isTriggerIn','front','parameters','randomInt','_saveEventLocations','EventId','executeMoveDir8','Game_Character_processMoveCommand','_isObjectCharacter','isBusy','isDashDisabled','moveAwayFromCharacter','despawnAtXY','isAutoBufferIcon','IconBlendMode','Window_EventItem_onOk','exit','characterName','_eventScreenY','setupPageSettings','mirror\x20horizontal','shadowFilename','updateEventsMoveCoreTagChanges','unlock','BoatSpeed','%1:%2','EventTemplates','eventId','LineHeight','pos','isVisible','...','left','onChange','Map%1.json','setDashingEnabled','_actuallyMoving','COLLAPSE','MorphEventRemove','$preloadedMap_%1','switch2Valid','createShadow','152510zPKTxq','isPlaytest','EnableDir8','anchor','VisuMZ_2_DragonbonesUnion','removeChild','Player','AdvancedVariables','updateScale','Game_System_initialize','map','_reflection','radius','player','adjustMoveSynchOpacityDelta','HMPH','directionOnLadderSpriteVS8dir','_inputTime','_SavedEventLocations','isMapPassable','processMoveRouteMoveTo','Game_Switches_setValue','checkNeedForPeriodicRefresh','_mirrorSprite','MapVariables','_selfTargetItemChoice','conditions','EventAutoMovement','locate','posEventsMoveCore','indexOf','lastMovedDirection','OffsetY','roundYWithDirection','Frames','HURT','followers','morphIntoTemplate','USER-DEFINED\x201','horz\x20mirror','max','AutoBalloon','Sprite_Balloon_updatePosition','mirror\x20vert','_commonEvents','SelfSwitches','_cacheSystemVisible','EventLabelVisible','meetsConditions','setSelfValue','_selfTargetNumberInput','_direction','_callEventData','clearSpriteOffsets','Game_CharacterBase_direction','Allow','hasEventIcon','setCharacterBitmap','trim','Map\x20%1\x20Variable\x20%2','Game_Map_unlockEvent','RandomMoveWeight','updateShadowChanges','shadowY','contentsOpacity','parent','Game_Event_clearPageSettings','Game_Interpreter_character','despawnEventId','Template','isAirshipPassable','Game_Player_getInputDirection','isPreventSelfMovement','Game_Event_meetsConditions','registerSelfEvent','isAllowEventAutoMovement','screenX','requestRefresh','_spriteset','reverse','referEvent','ConvertParams','initMoveSpeed','createCharacterShadow','fontSize','Game_CharacterBase_hasStepAnime','executeCommonEvent','Game_Follower_chaseCharacter','CPC','isStopFollowerChasing','isMapSwitch','down','Preloaded\x20Maps\x20and\x20add\x20in\x20Map\x20%1','TiltRight','parallelCommonEvents','_erased','loadCPC','pageIndex','string','setPosition','Chase','updateVS8BalloonOffsets','startCallEvent','Game_Troop_meetsConditions','ship','_stepPattern','Game_Player_increaseSteps','Map%1-Event%2','Game_Player_executeMove','character','_forceShowPlayer','_randomHomeY','_alwaysUpdateMove','checkCollisionKeywords','updateTilt','_target','updateAttachPictureBitmap','_diagonalSupport','setupChild','FavorHorz','isAirship','setEventLabelsVisible','Sprite_Character_setCharacterBitmap','processMoveRouteStepTo','format','eventLabelsVisible','%1Allow','Game_CharacterBase_isTransparent','absDistance','%1Dock','IconBufferX','isCollidedWithPlayerCharacters','setupSpawnTest','isActive','Game_CharacterBase_initMembers','variables','moveTowardCharacter','Game_Interpreter_PluginCommand','USER-DEFINED\x205','Button','SPIN\x20CLOCKWISE','Game_Timer_start','clearDestination','onLoadSuccess','isEventRunning','switch1Id','visibleRange','Visibility','Set\x20this\x20up\x20in\x20Events\x20&\x20Movement\x20Core\x27s\x0a','setup','cwX','setDestination','roundXWithDirection','startMapCommonEventOnOK','outlineColor','characterIndexVS8','updateSelfMovement','boxWidth','executeCommandCommonEvent','TerrainTag','UPPER\x20LEFT','updateWaitMode','screenY','CustomPageConditions','stop','_lastAttachPictureScale','setNumberInput','processMoveRouteJumpToCharacter','_randomMoveWeight','onExpire','clearSelfTarget','PreSpawnJS','setupDiagonalSupport','charAt','Game_Switches_value','setupAttachPictureBitmap','_customZ','requestBalloon','registerSelfTarget','createLowerLayer','QUESTION','_lastMovedDirection','smooth','_followerControlID','RegionOkTarget','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','_attachPicture','_needsMapReload','Game_Troop_meetsConditionsCPC','executeCommand','roundX','Forbid','getEventIconIndex','processMoveSynchMimic','drawing','isValid','TOGGLE','despawnEverything','bind','canMove','bufferX','updatePattern','clearAttachPictureSettings','offsetX','getDirectionFromPoint','Game_Event_isCollidedWithPlayerCharacters','fontFace','Map\x20%1\x20Switch\x20%2','isEventTest','ALLOW_LADDER_DASH','call','_needsPeriodicRefresh','%1Forbid','MapID','saveEventLocation','attachPictureBlendMode','savePreservedMorphEventDataKey','page','eventsXy','SpawnEventAtRegion','iconWidth','SILENCE','startMessage','delay','LIGHT','_interpreter','hasAdvancedSwitchVariable','turnTowardPoint','_spawnedEvents','updateVisibility','EventsMoveCore','pages','processMoveRouteTeleportTo','Self\x20Switch\x20%1','SpawnEventAtXY','getControlledFollowerID','toLowerCase','setupSaveEventLocations','MapId','refresh','USER-DEFINED\x203','setMoveRoute','eventsXyNt','updateEventsAndMovementCore','_eventOverload','FollowerSetTargetChase','reserveCommonEvent','refreshBushDepth','Spriteset_Map_createShadow','name','1359ENATnP','_characterSprites','process_VisuMZ_EventsMoveCore_Switches_Variables','SPIN\x20CCW','isBoat','_eventCopyData','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','Game_Timer_stop','VisibleRange','IconSet','Game_CharacterBase_setDirection','processMoveRouteHugWall','createProxyWindow','OFF','isSaveEventLocations','resetSelfSwitchesForEvent','BufferY','posNt','Game_Message_add','_cacheVisibility','increaseSteps','Game_Event_findProperPageIndex','events','checkAdvancedSwitchVariablePresent','none','floor','advancedFunc','create','EXCLAMATION','clearPageSettings','resume','turnAwayFromCharacter','Game_Event_setupPageSettings','clear','AutoMoveEvents','setupEvents','processMoveSynchApproach','NUM','isDashingAndMoving','canPassDiagonally','16335SZBovA','moveRouteIndex','moveSynchTarget','ARRAYNUM','_moveAllowPlayerCollision','_working','target','setStopFollowerChasing','_pattern','SPIN\x20COUNTERCLOCKWISE','isLabelVisible','Window_EventItem_onCancel','Preserve','setupMorphEvent','isRunning','_requestSaveEventLocation','execute','getPreservedMorphEventData','isSpawnedEvent','processSaveEventLocation','start','attachPictureSettings','createSpawnedEventWithData','MoveAllSynchTargets','bufferY','1816997yqfycY','onClickTrigger','rotation','getPose','_MapSpawnedEventData','LIGHT-BULB','updateMove','_eventLabelOffsetY','OperateValues','FollowerSetControl','_EventsMoveCoreSettings','getPlayerDiagonalSetting','processMoveCommand','Game_Temp_setDestination','code','Region%1','_cpc','processMoveSynchMirrorVert','replace','Stop','isRegionAllowPass','StrictCollision','characterIndex','SpawnEventDespawnTerrainTags','STRUCT','processMoveRouteSetIndex','enable','SelfSwitchID','updateOpacity','PlayerIconChange','performTransfer','_forceHideFollower','pattern','getAttachPictureBitmapHeight','log','isShip','moveForward','_frames','getPosingCharacterPattern','CPCsMet','_advancedSwitchVariable','_lastAttachPictureMaxSize','PostMorphJS','_poseDuration','FUNC','initEventsMoveCoreEffects','Step1MapId','VehicleDock','Icon','erase','hasClickTrigger','Setting','deltaY','_forceDashing','_lastPluginCommandInterpreter','_eventOverloadThreshold','processMoveRouteMoveToCharacter','setTileBitmap','SpriteBased','regionId','isSpriteVS8dir','Game_Map_setupEvents','textSizeEx','match','airship','prototype','getSelfTarget','Hours','Collision','turnAwayFromPoint','_trigger','EventIconDelete','RIGHT','mapId','onOk','isPassableByAnyDirection','labelWindowRange','Game_Message_setItemChoice','setupRegionRestrictions','_spriteOffsetX','SLEEP','Game_Character_forceMoveRoute','reverse\x20mimic','executeMove','checkRegionEventTrigger','Game_Map_events','isSmartEventCollisionOn','registerCommand','processMoveSynch','characterPatternYBasic','includes','isPlayerForceShown','width','return\x200','clamp','attachPictureScale','setDiagonalDirection','processMoveSynchMirrorHorz','DashEnableToggle','lastSpawnedEventID','setBackgroundType','SpawnEventDespawnEverything','Game_CharacterBase_increaseSteps','timer','isMapVariable','chaseCharacter','Game_CharacterBase_moveDiagonally','createSpawnedEvent','ShipSpeed','_scene','template','PageId','Game_Vehicle_isMapPassable','setupPlayerVisibilityOverrides','BitmapSmoothing','AirshipSpeed','_activationProximityAutoTriggerBypass','setLastPluginCommandInterpreter','mirror\x20horz','inBattle','_regionRules','turnLeft90','event','EventTimerResume','constructor','setItemChoice','round','VICTORY','length','AdvancedSwitches','ANGER','Game_Player_checkEventTriggerThere','convertVariableValuesInScriptCall','correctFacingDirection','isNormalPriority','isOnRope','Game_CharacterBase_characterIndex','autosaveEventLocation','_realY','advancedValue','BufferX','setDirection','startEncounterEffect','opacity','onDatabaseLoaded','setupFollowerVisibilityOverrides','_type','isInVehicle','Game_Player_checkEventTriggerHere','28792SWlTJk','updateMoveSynch','list','_shadowSprite','isNearTheScreen','ZZZ','backX','deleteSavedEventLocation','createIconSprite','filter','processOk','setWaitMode','Step2MapId','note','Scene_Boot_onDatabaseLoaded','random','MorphEventTo','setPlayerDiagonalSetting','DOWN','pageId','processMoveRouteMoveUntilStop','Enable','_moveRouteIndex','isShadowVisible','Game_Variables_setValue','isJumping','Boat','startsWith','_forceHidePlayer','processMoveRouteTeleportToCharacter','Game_Map_event','createShadows','_text','concat','Game_CharacterBase_isDashing','PlayerMovementDiagonal','isDashing','isSpawnHitboxCollisionOk','EventAllow','_selfTarget','Event','Name','meetActivationRegionConditions','Window_NumberInput_processOk','findTargetSprite','Game_Vehicle_isLandOk','selfValue','_spawnPreserved','Game_Event_initialize','_followerChaseOff','deleteIconsOnEventsData','processMoveRouteFadeIn','pluginCommandCallEvent','needsAttachPictureUpdate','_randomHomeX','_activationProximity','right','destinationX','PostSpawnJS','Disable','isEventsMoveCoreInvisible','Game_CharacterBase_realMoveSpeed','getDirectionToPoint','loadDataFile','checkEventTriggerThere','moveBackToRandomHome','getInputDir8','Game_CharacterBase_screenX','processMoveRouteSelfVariable','isMovementSucceeded','deltaXFrom','VisuMZ_Setup_Preload_Map','canStartLocalEvents','_eventIconSprite','LOWER\x20RIGHT','BalloonOffsetX','terrainTag','determineEventOverload','searchLimit','lastSpawnedEvent','remove','distance','createContents','copy','_eventSpawnData','_eventIcon','initEventsMoveCoreSettings','characterPatternY','Visible','isSelfSwitch','getAttachPictureBitmapWidth','_EventIcons','_eventLabelOffsetX','roundY','abs','SelfDataResetAll','labelWindowText','Spriteset_Map_createLowerLayer','getPosingCharacterIndex','attachPictureOffsetY','restoreSavedEventPosition','moveTowardPoint','clearEventCache','ADDITIVE','_clickTrigger','FontSize','_character','Step2EventId','LEFT\x20TO\x20RIGHT','processMoveRouteFadeOut','isSaveEventLocation','setCommonEvent','findDirectionTo','EventTimerFramesSet','of\x20Preloaded\x20Maps.\x0a\x0a','process_VisuMZ_EventsMoveCore_LoadTemplateMaps','UPPER\x20RIGHT','Game_Event_event','startMapCommonEventOnOKTarget','FRUSTRATION','EventLabelRefresh','morphInto','_moveSpeed','shadowX','setPattern','isBigCharacter','getEventIconData','pause','initFollowerController','filename','processMoveRouteJumpTo','padZero','scrolledY','_moveRoute','_opacity','realMoveSpeed','updateText','_filename','horizontal\x20mirror','value','ROUTE_SCRIPT','isWorking','frontX','VS8','boat','deleteSavedEventLocationKey','Game_Map_setup','autoEventIconBuffer'];_0x3be3=function(){return _0x396c78;};return _0x3be3();}function _0x1a53(_0x5ee4bb,_0x4fe2e9){const _0x3be3cd=_0x3be3();return _0x1a53=function(_0x1a53d1,_0x5e9205){_0x1a53d1=_0x1a53d1-0xbc;let _0x14dfd5=_0x3be3cd[_0x1a53d1];return _0x14dfd5;},_0x1a53(_0x5ee4bb,_0x4fe2e9);}function Game_CPCInterpreter(){const _0xeccf7e=_0x2a5e1a;this[_0xeccf7e(0x4a2)][_0xeccf7e(0x475)](this,arguments);};Game_CPCInterpreter[_0x2a5e1a(0x357)]=Object[_0x2a5e1a(0x2f0)](Game_Interpreter[_0x2a5e1a(0x357)]),Game_CPCInterpreter[_0x2a5e1a(0x357)]['constructor']=Game_CPCInterpreter,Game_CPCInterpreter['prototype']['clear']=function(){const _0x1c459d=_0x2a5e1a;Game_Interpreter[_0x1c459d(0x357)][_0x1c459d(0x2f6)][_0x1c459d(0x2ad)](this),this[_0x1c459d(0x326)]=![];},Game_CPCInterpreter['prototype'][_0x2a5e1a(0x30d)]=function(){const _0xc20d3d=_0x2a5e1a;while(this[_0xc20d3d(0x30b)]()){this['executeCommand']();}},Game_CPCInterpreter[_0x2a5e1a(0x357)]['executeCommonEvent']=function(_0xc2bbcf){const _0x554d8d=_0x2a5e1a;while(this[_0x554d8d(0x30b)]()){this['executeCommandCommonEvent'](_0xc2bbcf);}},Game_CPCInterpreter[_0x2a5e1a(0x357)][_0x2a5e1a(0x279)]=function(_0x3a2b72){const _0x5c980e=_0x2a5e1a,_0x30835e=_0x3a2b72;$gameTemp[_0x5c980e(0x28d)](_0x30835e);const _0x4c2e4e=VisuMZ[_0x5c980e(0x2c1)][_0x5c980e(0x489)]['call'](this);return $gameTemp[_0x5c980e(0x285)](),_0x4c2e4e;},Game_CPCInterpreter[_0x2a5e1a(0x357)]['command108']=function(_0xae8bf6){const _0xb49899=_0x2a5e1a;return Game_Interpreter[_0xb49899(0x357)][_0xb49899(0x13d)][_0xb49899(0x2ad)](this,_0xae8bf6),this[_0xb49899(0x14d)][_0xb49899(0xf9)](_0x4537cb=>_0x4537cb['match'](/<(?:CONDITION|CONDITIONS) MET>/i))&&(this[_0xb49899(0x326)]=!![]),!![];},VisuMZ['EventsMoveCore'][_0x2a5e1a(0x12a)]=Scene_Map['prototype'][_0x2a5e1a(0x3a4)],Scene_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x3a4)]=function(){const _0x121b7c=_0x2a5e1a;VisuMZ['EventsMoveCore'][_0x121b7c(0x12a)][_0x121b7c(0x2ad)](this),this[_0x121b7c(0x229)]['hideShadows']();},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0xf8)]=Scene_Load[_0x2a5e1a(0x357)][_0x2a5e1a(0x26a)],Scene_Load['prototype']['onLoadSuccess']=function(){const _0xedd74=_0x2a5e1a;if($gameMap)$gameMap[_0xedd74(0x411)]();VisuMZ[_0xedd74(0x2c1)][_0xedd74(0xf8)][_0xedd74(0x2ad)](this);},VisuMZ['EventsMoveCore']['Sprite_Character_initMembers']=Sprite_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x478)],Sprite_Character['prototype'][_0x2a5e1a(0x478)]=function(){const _0x3ec898=_0x2a5e1a;VisuMZ[_0x3ec898(0x2c1)]['Sprite_Character_initMembers']['call'](this),this[_0x3ec898(0x48d)](),this[_0x3ec898(0x152)](),this[_0x3ec898(0x3b3)]();},Sprite_Character[_0x2a5e1a(0x357)]['initMembersEventsMoveCore']=function(){const _0x4c83c0=_0x2a5e1a;this[_0x4c83c0(0xd6)]=0xff;},Sprite_Character['prototype'][_0x2a5e1a(0x152)]=function(){const _0x1a96da=_0x2a5e1a;this[_0x1a96da(0x480)]=new Sprite(),this[_0x1a96da(0x480)][_0x1a96da(0x1de)]['x']=0.5,this[_0x1a96da(0x480)][_0x1a96da(0x1de)]['y']=0x1,this[_0x1a96da(0x4cb)](this[_0x1a96da(0x480)]),this[_0x1a96da(0x4d6)]();},Sprite_Character[_0x2a5e1a(0x357)]['createIconSprite']=function(){const _0x371571=_0x2a5e1a;this['_eventIconSprite']=new Sprite(),this[_0x371571(0x3f4)][_0x371571(0x4df)]=ImageManager[_0x371571(0x4a4)](_0x371571(0x2de)),this[_0x371571(0x3f4)][_0x371571(0x4df)][_0x371571(0x291)]=![],this['_eventIconSprite']['setFrame'](0x0,0x0,0x0,0x0),this['_eventIconSprite'][_0x371571(0x1de)]['x']=0.5,this['_eventIconSprite'][_0x371571(0x1de)]['y']=0x1,this[_0x371571(0x4cb)](this[_0x371571(0x3f4)]);},Sprite_Character[_0x2a5e1a(0x357)]['isSpriteVS8dir']=function(){const _0x5945ae=_0x2a5e1a;return this[_0x5945ae(0x45f)]&&this['_characterName'][_0x5945ae(0x355)](/\[VS8\]/i);},Sprite_Character[_0x2a5e1a(0x357)]['isAutoBufferIcon']=function(){const _0x52e94c=_0x2a5e1a;return this[_0x52e94c(0x352)]()&&VisuMZ['EventsMoveCore'][_0x52e94c(0x14c)][_0x52e94c(0x43a)][_0x52e94c(0x48f)];},VisuMZ[_0x2a5e1a(0x2c1)]['Sprite_Character_update']=Sprite_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x125)],Sprite_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x125)]=function(){const _0x41c3f5=_0x2a5e1a;VisuMZ[_0x41c3f5(0x2c1)][_0x41c3f5(0x110)][_0x41c3f5(0x2ad)](this),this[_0x41c3f5(0x2ce)]();},Sprite_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x2c0)]=function(){const _0x14f669=_0x2a5e1a;Sprite['prototype'][_0x14f669(0x2c0)]['call'](this),this[_0x14f669(0x3e7)]()&&(this['visible']=![]);},Sprite_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x3e7)]=function(){const _0x49c6ee=_0x2a5e1a;if(this[_0x49c6ee(0x29b)]()>0x0)return![];if(this['_character']){if(this[_0x49c6ee(0x415)][_0x49c6ee(0xf7)]()!=='')return![];}return this['isEmptyCharacter']()||this[_0x49c6ee(0x415)]&&this[_0x49c6ee(0x415)]['isTransparent']();},Sprite_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x2ce)]=function(){const _0x201b8c=_0x2a5e1a;this[_0x201b8c(0x24d)](),this['updateShadow'](),this[_0x201b8c(0x46a)](),this['updateEventCustomZ'](),this['updateEventMirrorSprite'](),this[_0x201b8c(0x4d6)]();},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x134)]=Sprite_Character[_0x2a5e1a(0x357)]['setTileBitmap'],Sprite_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x34f)]=function(){const _0x49ffa5=_0x2a5e1a;VisuMZ['EventsMoveCore'][_0x49ffa5(0x134)][_0x49ffa5(0x2ad)](this),this[_0x49ffa5(0x4df)][_0x49ffa5(0xc9)](this[_0x49ffa5(0x15d)]['bind'](this));},VisuMZ['EventsMoveCore'][_0x2a5e1a(0x255)]=Sprite_Character['prototype'][_0x2a5e1a(0x214)],Sprite_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x214)]=function(){const _0x1e4562=_0x2a5e1a;VisuMZ[_0x1e4562(0x2c1)][_0x1e4562(0x255)]['call'](this),this[_0x1e4562(0x4df)][_0x1e4562(0xc9)](this[_0x1e4562(0x15d)]['bind'](this));},Sprite_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x15d)]=function(){const _0x2bb183=_0x2a5e1a;if(!this[_0x2bb183(0x4df)])return;this[_0x2bb183(0x4df)]['smooth']=!!VisuMZ[_0x2bb183(0x2c1)]['Settings'][_0x2bb183(0x44f)][_0x2bb183(0x388)];},VisuMZ[_0x2a5e1a(0x2c1)]['Sprite_Character_characterPatternY']=Sprite_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x402)],Sprite_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x402)]=function(){const _0x433a63=_0x2a5e1a;return this[_0x433a63(0x352)]()?this[_0x433a63(0x488)]():this[_0x433a63(0x36f)]();},Sprite_Character['prototype']['characterPatternYVS8']=function(){const _0x316687=_0x2a5e1a,_0x103508=this[_0x316687(0x415)][_0x316687(0x138)]();let _0x46c2ca=[0x2,0x2,0x2,0x4,0x4,0x2,0x6,0x6,0x8,0x8];return this[_0x316687(0x415)][_0x316687(0x1f2)]&&(_0x46c2ca=[0x2,0x4,0x2,0x2,0x6,0x2,0x4,0x8,0x8,0x6]),(_0x46c2ca[_0x103508]-0x2)/0x2;},Sprite_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x36f)]=function(){const _0x5382d9=_0x2a5e1a;let _0x48293c=this[_0x5382d9(0x415)][_0x5382d9(0x138)]();if(this[_0x5382d9(0x415)][_0x5382d9(0x1f2)]){if(_0x48293c===0x4)_0x48293c=0x6;else _0x48293c===0x6&&(_0x48293c=0x4);}return(_0x48293c-0x2)/0x2;},Sprite_Character['prototype'][_0x2a5e1a(0x24d)]=function(){const _0x35a70a=_0x2a5e1a;if(!VisuMZ[_0x35a70a(0x2c1)][_0x35a70a(0x14c)][_0x35a70a(0x44f)][_0x35a70a(0x111)])return;this[_0x35a70a(0x318)]=0x0;if(this['isAllowCharacterTilt']()){const _0x3190d6=VisuMZ[_0x35a70a(0x2c1)][_0x35a70a(0x14c)][_0x35a70a(0x44f)],_0x120c77=this[_0x35a70a(0x415)][_0x35a70a(0x138)]();let _0xab2678=0x0;if([0x1,0x4,0x7][_0x35a70a(0x370)](_0x120c77))_0xab2678=_0x3190d6['TiltLeft'];if([0x3,0x6,0x9]['includes'](_0x120c77))_0xab2678=_0x3190d6[_0x35a70a(0x238)];[0x2,0x8][_0x35a70a(0x370)](_0x120c77)&&(_0xab2678=[-_0x3190d6[_0x35a70a(0x1a0)],0x0,_0x3190d6[_0x35a70a(0x1a0)]][this[_0x35a70a(0x415)][_0x35a70a(0x336)]()]);if(this[_0x35a70a(0x1e6)])_0xab2678*=-0x1;this[_0x35a70a(0x318)]=_0xab2678;}},Sprite_Character['prototype']['isAllowCharacterTilt']=function(){const _0x130c1c=_0x2a5e1a;if(this['_dragonbones'])return![];return this[_0x130c1c(0x415)][_0x130c1c(0x2fb)]()&&!this[_0x130c1c(0x415)]['isOnLadder']()&&!this[_0x130c1c(0x415)][_0x130c1c(0x4d7)]()&&this[_0x130c1c(0x29b)]()===0x0;},Sprite_Character['prototype']['updateShadow']=function(){const _0x366770=_0x2a5e1a;if(!this[_0x366770(0x3ae)])return;this['_shadowSprite']['x']=this['_character'][_0x366770(0x426)](),this[_0x366770(0x3ae)]['y']=this[_0x366770(0x415)]['shadowY'](),this[_0x366770(0x3ae)][_0x366770(0x3a5)]=this[_0x366770(0x3a5)],this['_shadowSprite']['visible']=this[_0x366770(0x415)][_0x366770(0x3c2)](),this['_shadowSprite']['_hidden']=this[_0x366770(0x10f)],!this[_0x366770(0x415)][_0x366770(0x4c5)]()?(this['_shadowSprite'][_0x366770(0x103)]['x']=Math[_0x366770(0x4d9)](0x1,this[_0x366770(0x3ae)][_0x366770(0x103)]['x']+0.1),this[_0x366770(0x3ae)][_0x366770(0x103)]['y']=Math['min'](0x1,this[_0x366770(0x3ae)][_0x366770(0x103)]['y']+0.1)):(this[_0x366770(0x3ae)][_0x366770(0x103)]['x']=Math[_0x366770(0x203)](0x0,this['_shadowSprite'][_0x366770(0x103)]['x']-0.1),this[_0x366770(0x3ae)][_0x366770(0x103)]['y']=Math[_0x366770(0x203)](0x0,this[_0x366770(0x3ae)]['scale']['y']-0.1));},Sprite_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x46a)]=function(){const _0x56ad38=_0x2a5e1a;if(!this[_0x56ad38(0x3f4)])return;const _0x172c94=this[_0x56ad38(0x3f4)],_0x4ae443=this['getEventIconIndex']();if(_0x4ae443<=0x0)return _0x172c94['setFrame'](0x0,0x0,0x0,0x0);else{const _0x1f979f=ImageManager['iconWidth'],_0xd3bb3e=ImageManager[_0x56ad38(0x440)],_0x37f4b0=_0x4ae443%0x10*_0x1f979f,_0x25734b=Math[_0x56ad38(0x2ee)](_0x4ae443/0x10)*_0xd3bb3e;_0x172c94[_0x56ad38(0xd7)](_0x37f4b0,_0x25734b,_0x1f979f,_0xd3bb3e),this[_0x56ad38(0x481)]=!![];}const _0x4f61b8=this[_0x56ad38(0x415)]['getEventIconData']();this[_0x56ad38(0x1be)]()?this[_0x56ad38(0x43e)](_0x172c94):(_0x172c94['x']=_0x4f61b8?_0x4f61b8[_0x56ad38(0x2a3)]:0x0,_0x172c94['y']=_0x4f61b8?-this[_0x56ad38(0x16c)]+_0x4f61b8[_0x56ad38(0x315)]:0x0),_0x172c94[_0x56ad38(0x44b)]=_0x4f61b8?_0x4f61b8[_0x56ad38(0x44b)]:0x0,this['removeChild'](_0x172c94),this[_0x56ad38(0x4cb)](_0x172c94),_0x172c94['rotation']=-this[_0x56ad38(0x318)];},Sprite_Character[_0x2a5e1a(0x357)]['updateEventCustomZ']=function(){const _0x264e05=_0x2a5e1a;if(!this[_0x264e05(0x415)])return;if(this[_0x264e05(0x415)][_0x264e05(0x28b)]===undefined)return;if(this[_0x264e05(0x415)][_0x264e05(0x28b)]===![])return;this['z']=this[_0x264e05(0x415)]['_customZ'],this['z']<0x0?this[_0x264e05(0x3ae)]['z']=this['z']-0x1:this[_0x264e05(0x3ae)]['z']=0x0;},Sprite_Character[_0x2a5e1a(0x357)]['updateEventMirrorSprite']=function(){const _0x295aec=_0x2a5e1a;if(!this[_0x295aec(0x415)])return;let _0x2d5e95=!!this['_character'][_0x295aec(0x1f2)];this[_0x295aec(0x103)]['x']=Math[_0x295aec(0x409)](this[_0x295aec(0x103)]['x'])*(_0x2d5e95?-0x1:0x1);},Sprite_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x43e)]=function(_0x85f39d){const _0x1e6fc6=_0x2a5e1a;_0x85f39d['x']=0x0,_0x85f39d['y']=-this[_0x1e6fc6(0x16c)]+this['height']*0x2/0x5,this['_character']['pattern']()!==0x1&&(_0x85f39d['y']+=0x1);},Sprite_Character['prototype'][_0x2a5e1a(0x29b)]=function(){const _0x1b9a3c=_0x2a5e1a;if(!this['_character'])return 0x0;if(this[_0x1b9a3c(0x415)][_0x1b9a3c(0x23a)])return 0x0;const _0x519e97=this[_0x1b9a3c(0x415)][_0x1b9a3c(0x429)]();return _0x519e97?_0x519e97[_0x1b9a3c(0x447)]||0x0:0x0;},Sprite_Character['prototype'][_0x2a5e1a(0x4d6)]=function(){const _0x1b0a4c=_0x2a5e1a;if(!this['_attachPictureSprite'])return;if(!this['_character'])return;this[_0x1b0a4c(0x28a)](),this[_0x1b0a4c(0x24f)]();},Sprite_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x28a)]=function(){const _0x463e61=_0x2a5e1a;if(!this[_0x463e61(0x3e0)]())return;const _0x4f1a3e=this['_character'][_0x463e61(0x312)]();this['_lastAttachPictureFilename']=_0x4f1a3e[_0x463e61(0x42c)],this[_0x463e61(0x33f)]=_0x4f1a3e[_0x463e61(0x467)],this['_lastAttachPictureScale']=_0x4f1a3e['scale'];if(_0x4f1a3e['filename']!==''){const _0x286695=ImageManager[_0x463e61(0x4c0)](_0x4f1a3e[_0x463e61(0x42c)]);_0x286695['addLoadListener'](this[_0x463e61(0x115)]['bind'](this,_0x286695));}else this[_0x463e61(0x480)][_0x463e61(0x4df)]=new Bitmap(0x1,0x1);},Sprite_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x24f)]=function(){const _0x30281c=_0x2a5e1a,_0x471ef2=this[_0x30281c(0x480)];_0x471ef2['x']=this[_0x30281c(0x415)][_0x30281c(0xfb)](),_0x471ef2['y']=this[_0x30281c(0x415)][_0x30281c(0x40e)](),_0x471ef2[_0x30281c(0x44b)]=this[_0x30281c(0x415)][_0x30281c(0x2b2)]();},Sprite_Character[_0x2a5e1a(0x357)][_0x2a5e1a(0x3e0)]=function(){const _0x5570f7=_0x2a5e1a,_0xe185ac=this[_0x5570f7(0x415)]['attachPictureSettings']();if(_0xe185ac){if(this[_0x5570f7(0x4ca)]!==_0xe185ac[_0x5570f7(0x42c)])return!![];if(this[_0x5570f7(0x33f)]!==_0xe185ac[_0x5570f7(0x467)])return!![];if(this[_0x5570f7(0x280)]!==_0xe185ac['scale'])return!![];}return![];},Sprite_Character['prototype'][_0x2a5e1a(0x115)]=function(_0xf3567e){const _0x11392f=_0x2a5e1a,_0x4bb2af=this[_0x11392f(0x480)];_0x4bb2af[_0x11392f(0x4df)]=_0xf3567e;const _0x536865=this[_0x11392f(0x415)][_0x11392f(0x312)](),_0x5b68c1=_0x536865[_0x11392f(0x467)],_0x28c4d9=_0x536865[_0x11392f(0x103)];let _0x4d55c8=0x1;if(_0x5b68c1>0x0){let _0x506648=this[_0x11392f(0x405)]()||0x1,_0x15dc0d=this[_0x11392f(0x337)]()||0x1;const _0x13324c=Math[_0x11392f(0x203)](0x1,_0x506648,_0x15dc0d);_0x4d55c8=_0x5b68c1/_0x13324c;}_0x4d55c8*=_0x28c4d9,_0x4d55c8!==0x1&&(this[_0x11392f(0x480)][_0x11392f(0x4df)]['smooth']=!![]),_0x4bb2af['scale']['x']=_0x4d55c8,_0x4bb2af[_0x11392f(0x103)]['y']=_0x4d55c8,this['visible']=!![],this[_0x11392f(0x24f)]();},Sprite_Character['prototype'][_0x2a5e1a(0x405)]=function(){const _0x3e48bb=_0x2a5e1a,_0x1242d8=this[_0x3e48bb(0x480)];if(!_0x1242d8)return 0x0;return _0x1242d8[_0x3e48bb(0x4df)]['width'];},Sprite_Character['prototype'][_0x2a5e1a(0x337)]=function(){const _0x41ad26=_0x2a5e1a,_0x15ac4a=this[_0x41ad26(0x480)];if(!_0x15ac4a)return 0x0;return _0x15ac4a['bitmap'][_0x41ad26(0x16c)];},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x4e5)]=Sprite_Balloon[_0x2a5e1a(0x357)][_0x2a5e1a(0x270)],Sprite_Balloon[_0x2a5e1a(0x357)]['setup']=function(_0x3b958d,_0x88e42a){const _0x4f504c=_0x2a5e1a;VisuMZ[_0x4f504c(0x2c1)]['Sprite_Balloon_setup'][_0x4f504c(0x2ad)](this,_0x3b958d,_0x88e42a),VisuMZ[_0x4f504c(0x2c1)][_0x4f504c(0x14c)]['VS8'][_0x4f504c(0x204)]&&this['_target'][_0x4f504c(0x415)][_0x4f504c(0x1af)](_0x88e42a,this[_0x4f504c(0x442)]);},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x205)]=Sprite_Balloon['prototype']['updatePosition'],Sprite_Balloon['prototype'][_0x2a5e1a(0x15a)]=function(){const _0x3ebcb3=_0x2a5e1a;VisuMZ['EventsMoveCore'][_0x3ebcb3(0x205)][_0x3ebcb3(0x2ad)](this),this[_0x3ebcb3(0x240)]();},Sprite_Balloon[_0x2a5e1a(0x357)]['updateVS8BalloonOffsets']=function(){const _0x2712bf=_0x2a5e1a;this[_0x2712bf(0x24e)][_0x2712bf(0x415)][_0x2712bf(0x352)]()&&(this['x']+=VisuMZ[_0x2712bf(0x2c1)]['Settings'][_0x2712bf(0x43a)][_0x2712bf(0x3f6)],this['y']+=VisuMZ[_0x2712bf(0x2c1)][_0x2712bf(0x14c)]['VS8'][_0x2712bf(0x197)]);},Sprite_Timer[_0x2a5e1a(0x357)][_0x2a5e1a(0x14e)]=function(){const _0x372600=_0x2a5e1a;this['bitmap']=new Bitmap(Math['round'](Graphics['boxWidth']/0x2),0x30),this[_0x372600(0x4df)][_0x372600(0x2a9)]=this[_0x372600(0x2a9)](),this[_0x372600(0x4df)][_0x372600(0x22f)]=this[_0x372600(0x22f)](),this[_0x372600(0x4df)][_0x372600(0x275)]=ColorManager[_0x372600(0x275)]();},Sprite_Timer[_0x2a5e1a(0x357)]['timerText']=function(){const _0x496985=_0x2a5e1a,_0x5edc34=Math[_0x496985(0x2ee)](this[_0x496985(0x1ae)]/0x3c/0x3c),_0x35af5f=Math['floor'](this[_0x496985(0x1ae)]/0x3c)%0x3c,_0x481190=this[_0x496985(0x1ae)]%0x3c;let _0x17eddd=_0x35af5f[_0x496985(0x42e)](0x2)+':'+_0x481190['padZero'](0x2);if(_0x5edc34>0x0)_0x17eddd=_0x496985(0x1ca)[_0x496985(0x257)](_0x5edc34,_0x17eddd);return _0x17eddd;};function Sprite_EventLabel(){const _0x4ce09f=_0x2a5e1a;this[_0x4ce09f(0x4a2)](...arguments);}Sprite_EventLabel[_0x2a5e1a(0x357)]=Object[_0x2a5e1a(0x2f0)](Sprite[_0x2a5e1a(0x357)]),Sprite_EventLabel['prototype']['constructor']=Sprite_EventLabel,Sprite_EventLabel[_0x2a5e1a(0x357)][_0x2a5e1a(0x4a2)]=function(_0xc1a6e1){const _0x10c668=_0x2a5e1a;this[_0x10c668(0x12d)]=_0xc1a6e1,Sprite[_0x10c668(0x357)]['initialize'][_0x10c668(0x2ad)](this),this['initMembers'](),this['createProxyWindow']();},Sprite_EventLabel[_0x2a5e1a(0x357)][_0x2a5e1a(0x478)]=function(){const _0x46ba89=_0x2a5e1a;this[_0x46ba89(0x1de)]['x']=0.5,this['anchor']['y']=0x1;},Sprite_EventLabel[_0x2a5e1a(0x357)][_0x2a5e1a(0x2e1)]=function(){const _0x18b5aa=_0x2a5e1a,_0x16babf=new Rectangle(0x0,0x0,0x1,0x1);this[_0x18b5aa(0x15e)]=new Window_Base(_0x16babf),this['_proxyWindow']['padding']=0x0,this[_0x18b5aa(0x3a5)]=this[_0x18b5aa(0x307)]()?0xff:0x0;},Sprite_EventLabel['prototype'][_0x2a5e1a(0x125)]=function(){const _0x343c3b=_0x2a5e1a;Sprite[_0x343c3b(0x357)][_0x343c3b(0x125)][_0x343c3b(0x2ad)](this),this['updateText'](),this['updateScale'](),this[_0x343c3b(0x15a)](),this[_0x343c3b(0x332)]();},Sprite_EventLabel[_0x2a5e1a(0x357)][_0x2a5e1a(0x433)]=function(){const _0x337fe=_0x2a5e1a;this['_event'][_0x337fe(0x40b)]()!==this[_0x337fe(0x3cb)]&&(this[_0x337fe(0x3cb)]=this[_0x337fe(0x12d)][_0x337fe(0x40b)](),this[_0x337fe(0x2ca)]());},Sprite_EventLabel[_0x2a5e1a(0x357)][_0x2a5e1a(0x2ca)]=function(){const _0x4210ac=_0x2a5e1a;if(!this[_0x4210ac(0x15e)])return;this['resizeWindow'](),this[_0x4210ac(0x117)]();},Sprite_EventLabel[_0x2a5e1a(0x357)]['resizeWindow']=function(){const _0x8fbad5=_0x2a5e1a,_0x457117=this['_proxyWindow'][_0x8fbad5(0x354)](this[_0x8fbad5(0x3cb)]),_0x34a1db=this[_0x8fbad5(0x15e)][_0x8fbad5(0x454)](),_0x16bbff=_0x457117[_0x8fbad5(0x372)]+_0x34a1db*0x2,_0x2366d1=_0x457117['height'];this[_0x8fbad5(0x15e)][_0x8fbad5(0xd8)](0x0,0x0,_0x16bbff,_0x2366d1),this[_0x8fbad5(0x15e)][_0x8fbad5(0x3fd)](),this[_0x8fbad5(0x4df)]=this[_0x8fbad5(0x15e)]['contents'];},Sprite_EventLabel[_0x2a5e1a(0x357)]['drawText']=function(){const _0x4e8368=_0x2a5e1a,_0x29fc64=this['_proxyWindow']['itemPadding']();this[_0x4e8368(0x15e)][_0x4e8368(0xe8)](this['_text'],_0x29fc64,0x0);},Sprite_EventLabel['prototype'][_0x2a5e1a(0x1e3)]=function(){const _0x4dd295=_0x2a5e1a,_0x5dcc7d=VisuMZ[_0x4dd295(0x2c1)]['Settings'][_0x4dd295(0xde)][_0x4dd295(0x414)],_0x27efe5=$gameSystem['mainFontSize']()||0x1;this[_0x4dd295(0x103)]['x']=this[_0x4dd295(0x103)]['y']=_0x5dcc7d/_0x27efe5;},Sprite_EventLabel[_0x2a5e1a(0x357)][_0x2a5e1a(0x15a)]=function(){const _0x3c8ec4=_0x2a5e1a;if(!SceneManager['_scene'])return;if(!SceneManager[_0x3c8ec4(0x383)]['_spriteset'])return;const _0x59c574=SceneManager[_0x3c8ec4(0x383)][_0x3c8ec4(0x229)][_0x3c8ec4(0x3d7)](this[_0x3c8ec4(0x12d)]);if(!_0x59c574)return;this['x']=this[_0x3c8ec4(0x12d)]['screenX'](),this['x']+=this[_0x3c8ec4(0x12d)][_0x3c8ec4(0x144)]['offsetX'],this['y']=this['_event'][_0x3c8ec4(0x27d)]()-_0x59c574['height'],this['y']+=$gameSystem[_0x3c8ec4(0xee)]()*-0.5,this['y']+=this[_0x3c8ec4(0x12d)][_0x3c8ec4(0x144)][_0x3c8ec4(0x176)];},Sprite_EventLabel[_0x2a5e1a(0x357)][_0x2a5e1a(0x332)]=function(){const _0x2e3347=_0x2a5e1a;if(this[_0x2e3347(0x307)]())this['opacity']+=this['opacitySpeed']();else SceneManager[_0x2e3347(0x383)][_0x2e3347(0xbf)]>0x0?this['opacity']=0x0:this[_0x2e3347(0x3a5)]-=this[_0x2e3347(0x4a6)]();},Sprite_EventLabel[_0x2a5e1a(0x357)][_0x2a5e1a(0x307)]=function(){const _0x3549db=_0x2a5e1a;if(!$gameSystem[_0x3549db(0x258)]())return![];if(this[_0x3549db(0x12d)]?.[_0x3549db(0x23a)])return![];if(this[_0x3549db(0x12d)]&&this['_event'][_0x3549db(0xc1)]<0x0)return![];if(SceneManager[_0x3549db(0x383)][_0x3549db(0xbf)]>0x0)return![];const _0x1d6080=$gamePlayer['x'],_0x30b32c=$gamePlayer['y'],_0x2aae16=this['_event']['x'],_0x57662d=this[_0x3549db(0x12d)]['y'];if(this[_0x3549db(0x48c)]===_0x1d6080&&this[_0x3549db(0x47d)]===_0x30b32c&&this['_visibleEventX']===_0x2aae16&&this[_0x3549db(0x157)]===_0x57662d)return this[_0x3549db(0x2e8)];this['_visiblePlayerX']=$gamePlayer['x'],this['_visiblePlayerY']=$gamePlayer['y'],this[_0x3549db(0x4a9)]=this[_0x3549db(0x12d)]['x'],this[_0x3549db(0x157)]=this[_0x3549db(0x12d)]['y'];if($gameMap[_0x3549db(0x25b)](_0x1d6080,_0x30b32c,_0x2aae16,_0x57662d)>this[_0x3549db(0x12d)]['labelWindowRange']())return this[_0x3549db(0x2e8)]=![],![];return this[_0x3549db(0x2e8)]=!![],!![];},Sprite_EventLabel[_0x2a5e1a(0x357)]['opacitySpeed']=function(){const _0x538501=_0x2a5e1a;return VisuMZ[_0x538501(0x2c1)][_0x538501(0x14c)][_0x538501(0xde)][_0x538501(0x477)];},VisuMZ[_0x2a5e1a(0x2c1)]['Spriteset_Map_createLowerLayer']=Spriteset_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x28e)],Spriteset_Map['prototype']['createLowerLayer']=function(){const _0x1ce43f=_0x2a5e1a;VisuMZ[_0x1ce43f(0x2c1)][_0x1ce43f(0x40c)][_0x1ce43f(0x2ad)](this),this[_0x1ce43f(0x4e2)]();},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x2d3)]=Spriteset_Map['prototype']['createShadow'],Spriteset_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x1da)]=function(){const _0x3e5b3e=_0x2a5e1a;VisuMZ[_0x3e5b3e(0x2c1)][_0x3e5b3e(0x2d3)][_0x3e5b3e(0x2ad)](this),this[_0x3e5b3e(0x3ca)]();},Spriteset_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x3ca)]=function(){const _0x2d9fa2=_0x2a5e1a;if(!VisuMZ['EventsMoveCore'][_0x2d9fa2(0x14c)]['Movement'][_0x2d9fa2(0xfe)])return;for(const _0x55ab25 of this[_0x2d9fa2(0x2d6)]){this[_0x2d9fa2(0x22e)](_0x55ab25);}},Spriteset_Map['prototype']['createCharacterShadow']=function(_0x3ffe13){const _0x39dbe9=_0x2a5e1a;_0x3ffe13['_shadowSprite']=new Sprite(),_0x3ffe13[_0x39dbe9(0x3ae)][_0x39dbe9(0x434)]=_0x3ffe13[_0x39dbe9(0x415)][_0x39dbe9(0x1c6)](),_0x3ffe13[_0x39dbe9(0x3ae)][_0x39dbe9(0x4df)]=ImageManager[_0x39dbe9(0x4a4)](_0x3ffe13['_shadowSprite']['_filename']),_0x3ffe13[_0x39dbe9(0x3ae)][_0x39dbe9(0x1de)]['x']=0.5,_0x3ffe13[_0x39dbe9(0x3ae)][_0x39dbe9(0x1de)]['y']=0x1,_0x3ffe13[_0x39dbe9(0x3ae)]['z']=0x0,this['_tilemap']['addChild'](_0x3ffe13[_0x39dbe9(0x3ae)]);},Spriteset_Map[_0x2a5e1a(0x357)]['hideShadows']=function(){const _0x57a71b=_0x2a5e1a;if(!VisuMZ[_0x57a71b(0x2c1)]['Settings'][_0x57a71b(0x44f)][_0x57a71b(0xfe)])return;for(const _0x55a10e of this[_0x57a71b(0x2d6)]){this['_tilemap'][_0x57a71b(0x1e0)](_0x55a10e[_0x57a71b(0x3ae)]);}},Spriteset_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x4e2)]=function(){const _0x47d042=_0x2a5e1a;this['_labelWindows']=[];for(const _0x44e034 of $gameMap[_0x47d042(0x2eb)]()){this[_0x47d042(0x10a)](_0x44e034);}},Spriteset_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x10a)]=function(_0x5b3b2a){const _0x3712b9=_0x2a5e1a;if(!this[_0x3712b9(0x4a7)](_0x5b3b2a))return;let _0x3a455c;const _0x41c505=VisuMZ[_0x3712b9(0x2c1)][_0x3712b9(0x14c)][_0x3712b9(0xde)][_0x3712b9(0x350)]??!![];_0x3a455c=_0x41c505?new Sprite_EventLabel(_0x5b3b2a):new Window_EventLabel(_0x5b3b2a),_0x3a455c['z']=0x8,_0x3a455c['spriteId']=Sprite[_0x3712b9(0x45a)]++,this[_0x3712b9(0x4be)]['addChild'](_0x3a455c),this[_0x3712b9(0x19c)][_0x3712b9(0x4b0)](_0x3a455c);},Spriteset_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x4a7)]=function(_0x1cb3d8){const _0x442e90=_0x2a5e1a,_0x59f23b=_0x1cb3d8['event']();if(_0x59f23b[_0x442e90(0x3b8)]['match'](/<LABEL:[ ](.*?)>/i))return!![];if(_0x59f23b[_0x442e90(0x3b8)][_0x442e90(0x355)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];for(const _0x51aea5 of _0x59f23b[_0x442e90(0x2c2)]){let _0x5699cb='';for(const _0x29a5c2 of _0x51aea5[_0x442e90(0x3ad)]){[0x6c,0x198][_0x442e90(0x370)](_0x29a5c2[_0x442e90(0x324)])&&(_0x5699cb+=_0x29a5c2['parameters'][0x0]);}if(_0x5699cb[_0x442e90(0x355)](/<LABEL:[ ](.*?)>/i))return!![];if(_0x5699cb[_0x442e90(0x355)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];}return![];},Spriteset_Map[_0x2a5e1a(0x357)][_0x2a5e1a(0x381)]=function(_0x5213ce){const _0x1d55f5=_0x2a5e1a;this['_characterSprites']=this[_0x1d55f5(0x2d6)]||[];const _0x4e35b8=new Sprite_Character(_0x5213ce);this[_0x1d55f5(0x2d6)][_0x1d55f5(0x4b0)](_0x4e35b8),this['_tilemap']['addChild'](_0x4e35b8),this['createCharacterShadow'](_0x4e35b8),this[_0x1d55f5(0x10a)](_0x5213ce),_0x4e35b8['update']();},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x186)]=Game_Message['prototype'][_0x2a5e1a(0x281)],Game_Message[_0x2a5e1a(0x357)][_0x2a5e1a(0x281)]=function(_0x461a32,_0x4e9274){const _0x40c1fc=_0x2a5e1a;this[_0x40c1fc(0x20d)]=$gameTemp[_0x40c1fc(0x358)](),VisuMZ['EventsMoveCore'][_0x40c1fc(0x186)]['call'](this,_0x461a32,_0x4e9274);},VisuMZ[_0x2a5e1a(0x2c1)]['Window_NumberInput_start']=Window_NumberInput['prototype'][_0x2a5e1a(0x311)],Window_NumberInput[_0x2a5e1a(0x357)][_0x2a5e1a(0x311)]=function(){const _0x5ac977=_0x2a5e1a;$gameTemp['registerSelfTarget']($gameMessage['_selfTargetNumberInput']),VisuMZ[_0x5ac977(0x2c1)][_0x5ac977(0x112)][_0x5ac977(0x2ad)](this),$gameTemp[_0x5ac977(0x285)]();},VisuMZ['EventsMoveCore']['Window_NumberInput_processOk']=Window_NumberInput[_0x2a5e1a(0x357)][_0x2a5e1a(0x3b5)],Window_NumberInput[_0x2a5e1a(0x357)][_0x2a5e1a(0x3b5)]=function(){const _0xae52c7=_0x2a5e1a;$gameTemp['registerSelfTarget']($gameMessage['_selfTargetNumberInput']),VisuMZ[_0xae52c7(0x2c1)][_0xae52c7(0x3d6)][_0xae52c7(0x2ad)](this),$gameTemp[_0xae52c7(0x285)](),$gameMessage[_0xae52c7(0x20d)]=undefined;},VisuMZ['EventsMoveCore'][_0x2a5e1a(0x363)]=Game_Message['prototype'][_0x2a5e1a(0x393)],Game_Message[_0x2a5e1a(0x357)]['setItemChoice']=function(_0x3c6e49,_0x4c9cc9){const _0x973c97=_0x2a5e1a;this[_0x973c97(0x1f4)]=$gameTemp[_0x973c97(0x358)](),VisuMZ[_0x973c97(0x2c1)][_0x973c97(0x363)]['call'](this,_0x3c6e49,_0x4c9cc9);},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x1c0)]=Window_EventItem[_0x2a5e1a(0x357)]['onOk'],Window_EventItem[_0x2a5e1a(0x357)][_0x2a5e1a(0x360)]=function(){const _0x449e30=_0x2a5e1a;$gameTemp[_0x449e30(0x28d)]($gameMessage[_0x449e30(0x1f4)]),VisuMZ[_0x449e30(0x2c1)][_0x449e30(0x1c0)][_0x449e30(0x2ad)](this),$gameTemp['clearSelfTarget'](),$gameMessage[_0x449e30(0x1f4)]=undefined;},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x308)]=Window_EventItem[_0x2a5e1a(0x357)]['onCancel'],Window_EventItem[_0x2a5e1a(0x357)]['onCancel']=function(){const _0x2907f8=_0x2a5e1a;$gameTemp[_0x2907f8(0x28d)]($gameMessage[_0x2907f8(0x1f4)]),VisuMZ[_0x2907f8(0x2c1)][_0x2907f8(0x308)]['call'](this),$gameTemp[_0x2907f8(0x285)](),$gameMessage['_selfTargetItemChoice']=undefined;},VisuMZ[_0x2a5e1a(0x2c1)][_0x2a5e1a(0x448)]=Window_Message['prototype']['startMessage'],Window_Message[_0x2a5e1a(0x357)][_0x2a5e1a(0x2b9)]=function(){const _0x3b05ef=_0x2a5e1a;$gameMessage['registerSelfEvent'](),VisuMZ[_0x3b05ef(0x2c1)][_0x3b05ef(0x448)][_0x3b05ef(0x2ad)](this),$gameTemp[_0x3b05ef(0x285)]();},VisuMZ['EventsMoveCore'][_0x2a5e1a(0xbe)]=Window_ScrollText[_0x2a5e1a(0x357)]['startMessage'],Window_ScrollText['prototype']['startMessage']=function(){const _0x43724d=_0x2a5e1a;$gameMessage['registerSelfEvent'](),VisuMZ[_0x43724d(0x2c1)][_0x43724d(0xbe)][_0x43724d(0x2ad)](this),$gameTemp[_0x43724d(0x285)]();};function Window_EventLabel(){this['initialize'](...arguments);}Window_EventLabel['prototype']=Object['create'](Window_Base[_0x2a5e1a(0x357)]),Window_EventLabel[_0x2a5e1a(0x357)][_0x2a5e1a(0x392)]=Window_EventLabel,Window_EventLabel[_0x2a5e1a(0x357)][_0x2a5e1a(0x4a2)]=function(_0x1d7c3a){const _0x1a2064=_0x2a5e1a;this[_0x1a2064(0x12d)]=_0x1d7c3a;const _0x4a7ac6=new Rectangle(0x0,0x0,Graphics[_0x1a2064(0x278)]/0x4,this[_0x1a2064(0x4b4)](0x1));this[_0x1a2064(0x478)](),Window_Base[_0x1a2064(0x357)]['initialize'][_0x1a2064(0x2ad)](this,_0x4a7ac6),this[_0x1a2064(0x21b)]=0x0,this[_0x1a2064(0x37a)](0x2),this['_text']='';},Window_EventLabel[_0x2a5e1a(0x357)]['initMembers']=function(){const _0x4c2e44=_0x2a5e1a;this[_0x4c2e44(0x46f)]=![],this[_0x4c2e44(0x19f)]=$gameScreen[_0x4c2e44(0x1a8)](),this[_0x4c2e44(0xf3)]=this['_event']['screenX'](),this[_0x4c2e44(0x1c3)]=this[_0x4c2e44(0x12d)][_0x4c2e44(0x27d)](),this[_0x4c2e44(0x407)]=this[_0x4c2e44(0x12d)][_0x4c2e44(0x144)][_0x4c2e44(0x2a6)],this[_0x4c2e44(0x31d)]=this[_0x4c2e44(0x12d)][_0x4c2e44(0x144)][_0x4c2e44(0x176)],this[_0x4c2e44(0x491)]=this[_0x4c2e44(0x12d)][_0x4c2e44(0xc1)],this['_cacheVisibility']=this[_0x4c2e44(0x307)](),this['_cacheSystemVisible']=$gameSystem[_0x4c2e44(0x258)](),this[_0x4c2e44(0x48c)]=$gamePlayer['x'],this[_0x4c2e44(0x47d)]=$gamePlayer['y'],this[_0x4c2e44(0x4a9)]=this[_0x4c2e44(0x12d)]['x'],this['_visibleEventY']=this[_0x4c2e44(0x12d)]['y'];},Window_EventLabel[_0x2a5e1a(0x357)]['update']=function(){const _0x492714=_0x2a5e1a;Window_Base[_0x492714(0x357)][_0x492714(0x125)][_0x492714(0x2ad)](this);if(!this[_0x492714(0x179)]())return;this[_0x492714(0x433)](),this[_0x492714(0x1e3)](),this[_0x492714(0x15a)](),this[_0x492714(0x332)]();},Window_EventLabel[_0x2a5e1a(0x357)][_0x2a5e1a(0x179)]=function(){const _0x3122a1=_0x2a5e1a;if(!this[_0x3122a1(0x12d)])return![];if(!this[_0x3122a1(0x12d)][_0x3122a1(0x144)])return![];if(this[_0x3122a1(0x491)]!==this[_0x3122a1(0x12d)][_0x3122a1(0xc1)])return!![];if(this[_0x3122a1(0x12d)][_0x3122a1(0x23a)]&&!this[_0x3122a1(0x46f)])return!![];if(this[_0x3122a1(0x12d)][_0x3122a1(0x144)]['text']==='')return![];if(this[_0x3122a1(0x19f)]!==$gameScreen['zoomScale']())return!![];if(this[_0x3122a1(0xf3)]!==this[_0x3122a1(0x12d)][_0x3122a1(0x227)]())return!![];if(this[_0x3122a1(0x1c3)]!==this[_0x3122a1(0x12d)][_0x3122a1(0x27d)]())return!![];if(this[_0x3122a1(0x407)]!==this[_0x3122a1(0x12d)][_0x3122a1(0x144)][_0x3122a1(0x2a6)])return!![];if(this[_0x3122a1(0x31d)]!==this['_event']['_labelWindow'][_0x3122a1(0x176)])return!![];if(this['_visiblePlayerX']!==$gamePlayer['x'])return!![];if(this[_0x3122a1(0x47d)]!==$gamePlayer['y'])return!![];if(this[_0x3122a1(0x4a9)]!==this[_0x3122a1(0x12d)]['x'])return!![];if(this[_0x3122a1(0x157)]!==this[_0x3122a1(0x12d)]['y'])return!![];if(this[_0x3122a1(0x209)]!==$gameSystem[_0x3122a1(0x258)]())return!![];if(this['_cacheVisibility']&&this[_0x3122a1(0x21b)]<0xff)return!![];if(!this[_0x3122a1(0x2e8)]&&this[_0x3122a1(0x21b)]>0x0)return!![];if(SceneManager['_scene'][_0x3122a1(0xbf)]>0x0)return!![];return![];},Window_EventLabel[_0x2a5e1a(0x357)][_0x2a5e1a(0x433)]=function(){const _0x2ed8e7=_0x2a5e1a;this[_0x2ed8e7(0x12d)][_0x2ed8e7(0x40b)]()!==this['_text']&&(this['_text']=this[_0x2ed8e7(0x12d)][_0x2ed8e7(0x40b)](),this[_0x2ed8e7(0x2ca)]());},Window_EventLabel[_0x2a5e1a(0x357)]['updateScale']=function(){const _0x172354=_0x2a5e1a;this[_0x172354(0x103)]['x']=0x1/$gameScreen[_0x172354(0x1a8)](),this[_0x172354(0x103)]['y']=0x1/$gameScreen[_0x172354(0x1a8)](),this[_0x172354(0x19f)]=$gameScreen[_0x172354(0x1a8)]();},Window_EventLabel[_0x2a5e1a(0x357)]['updatePosition']=function(){const _0x237c0c=_0x2a5e1a;if(!SceneManager[_0x237c0c(0x383)])return;if(!SceneManager['_scene']['_spriteset'])return;const _0x47a8de=SceneManager[_0x237c0c(0x383)][_0x237c0c(0x229)][_0x237c0c(0x3d7)](this[_0x237c0c(0x12d)]);if(!_0x47a8de)return;this['x']=Math[_0x237c0c(0x394)](this[_0x237c0c(0x12d)][_0x237c0c(0x227)]()-Math['floor'](this[_0x237c0c(0x372)]*this[_0x237c0c(0x103)]['x']/0x2)),this['x']+=this['_event'][_0x237c0c(0x144)][_0x237c0c(0x2a6)],this['y']=this['_event']['screenY']()-_0x47a8de[_0x237c0c(0x16c)],this['y']+=Math['round']($gameSystem[_0x237c0c(0xee)]()*0.5),this['y']-=Math[_0x237c0c(0x394)](this[_0x237c0c(0x16c)]*this[_0x237c0c(0x103)]['y']),this['y']+=this[_0x237c0c(0x12d)]['_labelWindow'][_0x237c0c(0x176)],this[_0x237c0c(0x46f)]=this[_0x237c0c(0x12d)]['_erased'],this['_eventScreenX']=this[_0x237c0c(0x12d)][_0x237c0c(0x227)](),this[_0x237c0c(0x1c3)]=this[_0x237c0c(0x12d)][_0x237c0c(0x27d)](),this[_0x237c0c(0x407)]=this[_0x237c0c(0x12d)][_0x237c0c(0x144)][_0x237c0c(0x2a6)],this[_0x237c0c(0x31d)]=this[_0x237c0c(0x12d)][_0x237c0c(0x144)]['offsetY'],this['_eventPageIndex']=this['_event'][_0x237c0c(0xc1)],this[_0x237c0c(0x46f)]&&(this[_0x237c0c(0x21b)]=0x0);},Window_EventLabel[_0x2a5e1a(0x357)][_0x2a5e1a(0x332)]=function(){const _0x3734fa=_0x2a5e1a;if(this[_0x3734fa(0x307)]())this[_0x3734fa(0x21b)]+=this[_0x3734fa(0x4a6)]();else SceneManager[_0x3734fa(0x383)]['_encounterEffectDuration']>0x0?this[_0x3734fa(0x21b)]=0x0:this[_0x3734fa(0x21b)]-=this[_0x3734fa(0x4a6)]();},Window_EventLabel[_0x2a5e1a(0x357)][_0x2a5e1a(0x307)]=function(){const _0x5d4e57=_0x2a5e1a;if(!$gameSystem['eventLabelsVisible']())return![];if(this['_event']?.[_0x5d4e57(0x23a)])return![];if(SceneManager['_scene'][_0x5d4e57(0xbf)]>0x0)return![];const _0x3a65fb=$gamePlayer['x'],_0x39bfc1=$gamePlayer['y'],_0x32f3fe=this[_0x5d4e57(0x12d)]['x'],_0x3c9ca2=this[_0x5d4e57(0x12d)]['y'];if(this[_0x5d4e57(0x48c)]===_0x3a65fb&&this[_0x5d4e57(0x47d)]===_0x39bfc1&&this[_0x5d4e57(0x4a9)]===_0x32f3fe&&this[_0x5d4e57(0x157)]===_0x3c9ca2)return this[_0x5d4e57(0x2e8)];this['_visiblePlayerX']=$gamePlayer['x'],this[_0x5d4e57(0x47d)]=$gamePlayer['y'],this[_0x5d4e57(0x4a9)]=this[_0x5d4e57(0x12d)]['x'],this[_0x5d4e57(0x157)]=this[_0x5d4e57(0x12d)]['y'];if($gameMap[_0x5d4e57(0x25b)](_0x3a65fb,_0x39bfc1,_0x32f3fe,_0x3c9ca2)>this[_0x5d4e57(0x12d)][_0x5d4e57(0x362)]())return this['_cacheVisibility']=![],![];return this[_0x5d4e57(0x2e8)]=!![],!![];},Window_EventLabel[_0x2a5e1a(0x357)][_0x2a5e1a(0x4a6)]=function(){const _0x2ef509=_0x2a5e1a;return VisuMZ['EventsMoveCore'][_0x2ef509(0x14c)]['Label'][_0x2ef509(0x477)];},Window_EventLabel[_0x2a5e1a(0x357)]['resizeWindow']=function(){const _0x2938bd=_0x2a5e1a,_0x2d6155=this['textSizeEx'](this[_0x2938bd(0x3cb)]);this[_0x2938bd(0x372)]=_0x2d6155[_0x2938bd(0x372)]+($gameSystem['windowPadding']()+this['itemPadding']())*0x2,this[_0x2938bd(0x16c)]=Math[_0x2938bd(0x203)](this[_0x2938bd(0xff)](),_0x2d6155['height'])+$gameSystem['windowPadding']()*0x2,this[_0x2938bd(0x3fd)]();},Window_EventLabel[_0x2a5e1a(0x357)][_0x2a5e1a(0xff)]=function(){const _0x134c9e=_0x2a5e1a;return VisuMZ[_0x134c9e(0x2c1)]['Settings']['Label'][_0x134c9e(0x1cd)];},Window_EventLabel['prototype'][_0x2a5e1a(0x161)]=function(){const _0xa461df=_0x2a5e1a;Window_Base[_0xa461df(0x357)]['resetFontSettings'][_0xa461df(0x2ad)](this),this['contents'][_0xa461df(0x22f)]=this[_0xa461df(0xdc)]();},Window_EventLabel[_0x2a5e1a(0x357)]['defaultFontSize']=function(){const _0x3dfa46=_0x2a5e1a;return VisuMZ['EventsMoveCore'][_0x3dfa46(0x14c)][_0x3dfa46(0xde)][_0x3dfa46(0x414)];},Window_EventLabel[_0x2a5e1a(0x357)]['refresh']=function(){const _0x5e6b67=_0x2a5e1a;this[_0x5e6b67(0xcf)](),this[_0x5e6b67(0xc6)][_0x5e6b67(0x2f6)]();const _0xc25a62=this[_0x5e6b67(0x3cb)][_0x5e6b67(0x49d)](/[\r\n]+/);let _0x3ecfbe=0x0;for(const _0x2f3ba7 of _0xc25a62){const _0x4a94f0=this['textSizeEx'](_0x2f3ba7),_0x255693=Math['floor']((this['innerWidth']-_0x4a94f0[_0x5e6b67(0x372)])/0x2);this['drawTextEx'](_0x2f3ba7,_0x255693,_0x3ecfbe),_0x3ecfbe+=_0x4a94f0[_0x5e6b67(0x16c)];}},Window_EventLabel[_0x2a5e1a(0x357)]['processDrawIcon']=function(_0x1e7512,_0x1724d7){const _0x55a139=_0x2a5e1a;_0x1724d7[_0x55a139(0x29d)]&&this['drawIcon'](_0x1e7512,_0x1724d7['x']+0x2,_0x1724d7['y']),_0x1724d7['x']+=Math[_0x55a139(0x4d9)](this[_0x55a139(0x4e6)](),ImageManager['iconWidth'])+0x4;},Window_EventLabel['prototype'][_0x2a5e1a(0x18c)]=function(_0x120dc0,_0x1164ae,_0x4045ce){const _0x2f2266=_0x2a5e1a,_0x3a9f1a=ImageManager['loadSystem'](_0x2f2266(0x2de)),_0x59ca88=ImageManager[_0x2f2266(0x2b7)],_0x61f557=ImageManager['iconHeight'],_0x52129d=_0x120dc0%0x10*_0x59ca88,_0x49a394=Math['floor'](_0x120dc0/0x10)*_0x61f557,_0x6fea1c=Math[_0x2f2266(0x4d9)](this[_0x2f2266(0x4e6)]()),_0x4b6239=Math[_0x2f2266(0x4d9)](this[_0x2f2266(0x4e6)]());this[_0x2f2266(0xc6)]['blt'](_0x3a9f1a,_0x52129d,_0x49a394,_0x59ca88,_0x61f557,_0x1164ae,_0x4045ce,_0x6fea1c,_0x4b6239);},Window_EventLabel[_0x2a5e1a(0x357)]['iconSize']=function(){const _0x39ed34=_0x2a5e1a;return VisuMZ[_0x39ed34(0x2c1)][_0x39ed34(0x14c)][_0x39ed34(0xde)][_0x39ed34(0x12f)];};