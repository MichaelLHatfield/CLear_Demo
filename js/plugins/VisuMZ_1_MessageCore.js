//=============================================================================
// VisuStella MZ - Message Core
// VisuMZ_1_MessageCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_MessageCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MessageCore = VisuMZ.MessageCore || {};
VisuMZ.MessageCore.version = 1.37;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.37] [MessageCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Message_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Message Core plugin extends and builds upon the message functionality of
 * RPG Maker MZ and allows you, the game dev, to customize the workflow for
 * your game's message system.
 *
 * Features include all (but not limited to) the following:
 *
 * * Control over general message settings.
 * * Auto-Color key words and/or database entries.
 * * Increases the text codes available to perform newer functions/effects.
 * * Ability for you to implement custom Text Code actions.
 * * Ability for you to implement custom Text code string replacements.
 * * Invoke a macro system to speed up the dev process.
 * * Add a Text Speed option to the Options menu.
 * * Add the ever so useful Word Wrap to your message system.
 * * Extend the choice selection process to your liking.
 * * The ability to enable/disable as well as show/hide certain choices.
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 * 
 * Dim Background Extension
 * 
 * Before, when using the Dim Background as a part of a Show Text event, its
 * size is only the same as the message window's width itself. This looked
 * really ugly because it had hard edges cutting off while gradients are seen
 * elsewhere. To make it look better, we extended the dimmed background to span
 * the width of the screen instead.
 * 
 * ---
 * 
 * Extended Messages
 * 
 * If you decide to expand the size of the message window to allow for more
 * rows to be displayed, you can type in the data for them by chaining together
 * Show Message events. They will take data from each other and display them in
 * the same message window as long as there are enough rows.
 * 
 * ---
 *
 * Extended Choice Lists
 * 
 * Choice lists can be extended by just chaining one Choice List event after
 * the other in succession along the same indentation. They do not extend if
 * there is any event other than a Choice List option between them on the same
 * indentation level.
 *
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. Some of
 * these are original text codes provided by RPG Maker MZ, while others are
 * new text codes added through this plugin. You may even add your own text
 * codes through the plugin parameters.
 *
 * === RPG Maker MZ Text Codes ===
 *
 * The following are text codes that come with RPG Maker MZ. These text codes
 * cannot be edited through the Plugin Parameters.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \V[x]                Replaced by the value of variable 'x'.
 * \N[x]                Replaced by the name of actor 'x'.
 * \P[x]                Replaced by the name of party member 'x'.
 * \C[x]                Draw the subsequent text with window skin color 'x'.
 * \I[x]                Draw icon 'x'.
 *
 * \PX[x]               Moves text x position to 'x'.
 * \PY[x]               Moves text y position to 'y'.
 *
 * \G                   Replaced by the currency unit.
 *
 * \{                   Increase the text font size by one step.
 * \}                   Decrease the text font size by one step.
 * \FS[x]               Changes the text font size to 'x'.
 *
 * \\                   Replaced by the backslash character.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \$                   Opens the gold window.
 * \.                   Waits a 1/4 second.
 * \|                   Waits a full second.
 * \!                   Waits for button input.
 * \>                   Display remaining text on same line all at once.
 * \<                   Cancel the effect that displays text all at once.
 * \^                   Do not wait for input after displaying text to move on.
 *
 * ---
 *
 * === Message Core Hard-Coded Text Codes ===
 *
 * The following text codes are hard-coded into VisuStella MZ Message Core's
 * code. These text codes cannot be edited through the Plugin Parameters.
 * 
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * <b>                  Makes subsequent text bold.
 * </b>                 Removes bold from subsequent text.
 * <i>                  Makes subsequent text italic.
 * </i>                 Removes italic from subsequent text.
 * 
 * <left>               Makes subsequent text left-aligned.
 * </left>              Removes left-alignment for subsequent text.
 * <center>             Makes subsequent text center-aligned.
 * </center>            Removes center-alignment for subsequent text.
 * <right>              Makes subsequent text right-aligned.
 * </right>             Removes right-alignment for subsequent text.
 *
 * Note1: Use at line-start.
 *
 * <ColorLock>          Text codes can't change text color for subsequent text.
 * </ColorLock>         Removes Color Lock property.
 *
 * <WordWrap>           Enables Word Wrap for this window. *Note2*
 * </WordWrap>          Disables Word Wrap for this window. *Note2*
 * <br>                 Adds a line break. Requires Word Wrap enabled.
 * <line break>         Adds a line break. Requires Word Wrap enabled.
 *
 * Note2: Some windows cannot use Word Wrap such as the Choice Window.
 *
 * \picture<x>          Draws picture x (filename) at current text position.
 * \CenterPicture<x>    Draws picture x (filename) centered at the window.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \CommonEvent[x]      Runs common event x when text code is reached.
 * \Wait[x]             Makes the message wait x frames before continuing.
 * 
 * <Next Page>          Ends the current message page at this line. This is
 *                      used for messages when rows are at 5 or above and the
 *                      message lines don't match the amount. This is used to
 *                      prevent grabbing message windows from following message
 *                      events. Any lines following <Next Page> in the same
 *                      message event will be ignored.
 * 
 * <Auto>               Resizes message window dimensions to fit text. *Note3*
 * <Auto Width>         Resizes message window width to fit text. *Note3*
 * <Auto Height>        Resizes message window height to fit text. *Note3*
 * 
 * <Auto Actor: x>      Resizes message window and positions it over actor x
 *                      sprite's head. *Note3*
 * <Auto Party: x>      Resizes message window and positions it over party
 *                      member x sprite's head. *Note3*
 * <Auto Player>        Map-Only. Resizes message window and positions it over
 *                      the player sprite's head. *Note3*
 * <Auto Event: x>      Map-Only. Resizes message window and positions it over
 *                      event x sprite's head. *Note3*
 * <Auto Enemy: x>      Battle-Only. Resizes message window and positions it
 *                      over enemy x sprite's head. *Note3*
 *
 * Note3: Upon using these text codes, the message window's settings will be
 * reset for the upcoming message. These effects do not work with Word Wrap.
 *
 * ---
 *
 * ----------------------------   ---------------------------------------------
 * Text Code                      Effect (Battle Only)
 * ----------------------------   ---------------------------------------------
 * <Current Battle Target>        Replaces text code with the current target of
 *                                an action in battle.
 * <Current Battle User>          Replaces text code with the currently active
 *                                user in battle.
 * <Current Battle Action>        Replaces text code with the current battle
 *                                action's name with an icon in front.
 * <Current Battle Action Name>   Replaces text code with the current battle
 *                                action's name without an icon.
 * 
 * If there is no battle, no target, no user, or no action, then the text code
 * will just be replaced with no text.
 * 
 * These text codes are NOT recommended to be used inside of Help Descriptions.
 * They are best used with "Show Text" event commands.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Effect (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * <Show>                         Choice is always shown.
 * <Show Switch: x>               Choice shown if switch x is ON.
 * <Show Switches: x,x,x>         Choice shown if the x switches are all ON.
 * <Show All Switches: x,x,x>     Choice shown if the x switches are all ON.
 * <Show Any Switches: x,x,x>     Choice shown if any of x switches are ON.
 *
 * <Hide>                         Choice is always hidden.
 * <Hide Switch: x>               Choice hidden if switch x is ON.
 * <Hide Switches: x,x,x>         Choice hidden if the x switches are all ON.
 * <Hide All Switches: x,x,x>     Choice hidden if the x switches are all ON.
 * <Hide Any Switches: x,x,x>     Choice hidden if any of x switches are ON.
 *
 * <Enable>                       Choice is always enabled.
 * <Enable Switch: x>             Choice enabled if switch x is ON.
 * <Enable Switches: x,x,x>       Choice enabled if the x switches are all ON.
 * <Enable All Switches: x,x,x>   Choice enabled if the x switches are all ON.
 * <Enable Any Switches: x,x,x>   Choice enabled if any of x switches are ON.
 *
 * <Disable>                      Choice is always disabled.
 * <Disable Switch: x>            Choice disabled if switch x is ON.
 * <Disable Switches: x,x,x>      Choice disabled if the x switches are all ON.
 * <Disable All Switches: x,x,x>  Choice disabled if the x switches are all ON.
 * <Disable Any Switches: x,x,x>  Choice disabled if any of x switches are ON.
 * 
 * <Choice Width: x>              Sets the minimum text area width to x.
 *                                Applies to whole choice window.
 * <Choice Indent: x>             Sets the indent to x value. Applies to
 *                                current choice selection only.
 *
 * ---
 *
 * -----------------  ---------------------------------------------------------
 * Text Code          Effect (Name Window Only)
 * -----------------  ---------------------------------------------------------
 * <Left>             Positions the name box window to the left.
 * <Center>           Positions the name box window to the center.
 * <Right>            Positions the name box window to the right.
 * <Position: x>      Replace 'x' with a number from 0 to 10. This positions
 *                    the name box window on the screen relative to the
 *                    position of the value 'x' represents.
 * \NormalBG          Changes background type of window to normal type.
 * \DimBG             Changes background type of window to dim type.
 * \TransparentBG     Changes background type of window to transparent type.
 *
 * ---
 * 
 * -------------------------------   ------------------------------------------
 * Text Code                         Effect (Message Window Only)
 * -------------------------------   ------------------------------------------
 * 
 * <Position: x, y, width, height>   Forces the message window to exact listed
 *                                   coordinates and dimensions. Replace each
 *                                   of the arguments with numbers. *Note*
 * 
 * <Coordinates: x, y>               Forces the message window to the exact
 *                                   listed coordinates. Replace each of the
 *                                   arguments with numbers. *Note*
 * 
 * <Dimensions: width, height>       Forces the message window size to the
 *                                   exact listed dimensions. Replace each of
 *                                   the arguments with numbers. *Note*
 * 
 * <Offset: +x, +y>                  Quickly adjust the message window offset
 * <Offset: -x, -y>                  values to the x and y amounts. The values
 * <Offset: +x, -y>                  will replace the previous offset settings
 * <Offset: -x, +y>                  if there were any.
 * 
 * *NOTE* These text codes do not work with Word Wrap.
 * 
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Requires VisuMZ_0_CoreEngine)
 * ------------------   -------------------------------------------------------
 * <Up Button>          Display's VisuMZ_0_CoreEngine's button assist text.
 * <Left Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * <Right Button>       Display's VisuMZ_0_CoreEngine's button assist text.
 * <Down Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * <Ok Button>          Display's VisuMZ_0_CoreEngine's button assist text.
 * <Cancel Button>      Display's VisuMZ_0_CoreEngine's button assist text.
 * <Shift Button>       Display's VisuMZ_0_CoreEngine's button assist text.
 * <Menu Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * <Page Up Button>     Display's VisuMZ_0_CoreEngine's button assist text.
 * <Page Down Button>   Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * ---
 *
 * === Message Core Customizable Text Codes ===
 *
 * The following text codes can be altered through the Message Core's various
 * Plugin Parameters to adjust replacements and actions.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \Class[x]            Draws class x's icon (if have) and name.
 * \ClassName[x]        Draws class x's name only.
 *
 * \Skill[x]            Draws skill x's icon (if have) and name.
 * \SkillName[x]        Draws skill x's name only.
 *
 * \Item[x]             Draws item x's icon (if have) and name.
 * \ItemName[x]         Draws item x's name only.
 * \ItemQuantity[x]     Inserts the number of item x's owned by the party.
 *
 * \Weapon[x]           Draws weapon x's icon (if have) and name.
 * \WeaponName[x]       Draws weapon x's name only.
 * \WeaponQuantity[x]   Inserts the number of weapon x's owned by the party.
 *
 * \Armor[x]            Draws armor x's icon (if have) and name.
 * \ArmorName[x]        Draws armor x's name only.
 * \ArmorQuantity[x]    Inserts the number of armor x's owned by the party.
 *
 * \LastGainObj         Draws the icon + name of the last party-gained object.
 * \LastGainObjName     Draws the name of the last party-gained object.
 * \LastGainObjQuantity Inserts the quantity of the last party-gained object.
 *
 * \State[x]            Draws state x's icon (if have) and name.
 * \StateName[x]        Draws state x's name only.
 *
 * \Enemy[x]            Draws enemy x's icon (if have) and name.
 * \EnemyName[x]        Draws enemy x's name only.
 *
 * \Troop[x]            Draws troop x's icon (if have) and name.
 * \TroopName[x]        Draws troop x's name only.
 *
 * \TroopMember[x]      Draws troop member x's icon (if have) and name. *Note1*
 * \TroopNameMember[x]  Draws troop member x's name only. *Note1*
 * 
 * Note1: Only works in battle.
 *
 * \NormalBG            Changes background type of window to normal type.
 * \DimBG               Changes background type of window to dim type.
 * \TransparentBG       Changes background type of window to transparent type.
 *
 * \FontChange<x>       Changes font face to x font name.
 * \ResetFont           Resets font settings.
 *
 * \ResetColor          Resets color settings.
 * \HexColor<x>         Changes text color to x hex color (ie. #123abc).
 * \OutlineColor[x]     Changes outline color to text color x.
 * \OutlineHexColor<x>  Changes outline color to x hex color (ie. #123abc).
 * \OutlineWidth[x]     Changes outline width to x thickness.
 * 
 * \WindowMoveTo<?>     Moves window to exact coordinates. *Note2*
 * \WindowMoveBy<?>     Moves window by relative values. *Note2*
 * \WindowReset         Resets window position to original position.
 *
 * Note2: Replace '?' with the following format:
 *   targetX, targetY, targetWidth, targetHeight, duration, easingType
 *   Only targetX and targetY are required arguments. These will only alter the
 *   window dimensions when the text has arrived at that point. They will not
 *   alter the window preemptively. This is not used as a window positioner.
 *   Use the <Position: x, y, width, height> text code for that.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \ActorFace[x]        Inserts actor x's face into the Message Window.
 * \PartyFace[x]        Inserts party member x's face into the Message Window.
 * \ChangeFace<x,y>     Changes message face to x filename, y index.
 * \FaceIndex[x]        Changes message face index to x.
 *
 * \TextDelay[x]        Sets delay in frames between characters to x frames.
 * 
 * ---
 * 
 * As these text codes can be added, removed, and/or altered, their functions
 * may or may not be the same depending on how you've altered them. VisuStella
 * is not responsible for any errors caused by changes made to pre-made text
 * codes nor any new text codes they did not make.
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
 * === Message Plugin Commands ===
 * 
 * ---
 *
 * Message: Properties
 *   Change the various properties of the Message Window.
 *
 *   Rows:
 *   - Change the number of Message Window rows.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Width: 
 *   - Change the Message Window width in pixels.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Word Wrap:
 *   - Enable or disable Word Wrap for the Message Window?
 *
 * ---
 * 
 * Message: X/Y Offsets
 * - Change the X and Y Offsets of the Message Window.
 * - The offset value(s) will be saved and stored.
 * 
 *   Offset X:
 *   - Offset Message Window horizontally.
 *   - Negative: Left; Positive: Right
 *   - Message Window coordinates are still restricted via clamping.
 * 
 *   Offset Y:
 *   - Offset Message Window vertically.
 *   - Negative: Up; Positive: Down
 *   - Message Window coordinates are still restricted via clamping.
 * 
 * ---
 * 
 * === Choice Plugin Commands ===
 * 
 * ---
 *
 * Choice: Properties
 *   Change the properties found in the Show Choices event command.
 *
 *   Line Height:
 *   - Change the line height for the show choices.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Max Rows:
 *   - Maximum number of choice rows to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Max Columns:
 *   - Maximum number of choice columns to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Text Alignment:
 *   - Text alignment for Show Choice window.
 *
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Change Text
 * - Change text for target picture(s) to show.
 * - You may use text codes.
 * - Text will adapt to picture's properties.
 * - Settings will be erased if picture is erased.
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to set text to.
 * 
 *   Padding:
 *   - How much padding from the sides should there be?
 * 
 *   Text:
 * 
 *     Upper Left:
 *     Upper Center:
 *     Upper Right:
 *     Middle Left:
 *     Middle Center:
 *     Middle Right:
 *     Lower Left:
 *     Lower Center:
 *     Lower Right:
 *     - The text that's aligned to this picture's side.
 *     - You may use text codes.
 * 
 * ---
 * 
 * Picture: Erase Text
 * - Erase all text for target picture(s).
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to erase text for.
 * 
 * ---
 * 
 * Picture: Refresh Text
 * - Refreshes the text used for all on-screen pictures.
 * - To be used if any dynamic text codes are updated like \n[x].
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings involving the message system. These settings range from
 * adjust how the Message Window looks to more intricate settings like how
 * some of the default text codes work.
 *
 * ---
 *
 * Message Window
 *
 *   Default Rows:
 *   - Default number of rows to display for the Message Window.
 *
 *   Default Width:
 *   - Default Message Window width in pixels.
 *
 *   Fast Forward Key:
 *   - This is the key used for fast forwarding messages.
 *   - WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 *
 *   Text Delay:
 *   - How many frames to wait between characters drawn?
 *   - Use 0 for instant.
 * 
 *   Offset X:
 *   Offset Y:
 *   - Offset Message Window horizontally or vertically.
 *   - Horizontal: Left; Positive: Right
 *   - Veritcal: Negative: Up; Positive: Down
 * 
 *   Stretch Dimmed BG:
 *   - Stretch dimmed window background to fit the whole screen.
 * 
 *   Default Outline Width:
 *   - Changes the default outline width to this many pixels thick.
 *
 * ---
 *
 * Name Box Window
 *
 *   Default Color:
 *   - Default color for the Name Box Window's text.
 *
 *   Offset X:
 *   - How much to offset the name box window X by
 *     (as long as it doesn't go offscreen).
 *
 *   Offset Y:
 *   - How much to offset the name box window Y by
 *     (as long as it doesn't go offscreen).
 *
 * ---
 *
 * Choice List Window
 *
 *   Line Height:
 *   - What is the default line height for Show Choices?
 *
 *   Max Rows:
 *   - Maximum number of rows to visibly display?
 *
 *   Max Columns:
 *   - Maximum number of columns to visibly display?
 *
 *   Text Alignment:
 *   - Default alignment for Show Choice window.
 *
 * ---
 *
 * Default Text Codes
 *
 *   Relative \PX \PY:
 *   - Make \PX[x] and \PY[x] adjust relative starting position than
 *     exact coordinates.
 *
 *   \{ Maximum:
 *   - Determine the maximum size that \{ can reach.
 *
 *   \} Minimum:
 *   - Determine the minimum size that \} can reach.
 *
 *   \{ Change \}
 *   - How much does \{ and \} change font size by?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Auto-Color Settings
 * ============================================================================
 *
 * For certain windows such as the Message Window, Help Window, and Choice
 * Window, Auto-Color is enabled to automatically highlight and color certain
 * database entries, keywords, and just about anything you, the game dev, wants
 * to be automatically colored. This is done to avoid typing out \C[6]Jack\C[0]
 * every time Jack's name is written out as it will be automatically colored in
 * those specific windows.
 *
 * The Plugin Parameters will give you full reign over which database entries
 * and keywords you want to be automatically colored as long as they follow a
 * few rules:
 * 
 * -----------------
 * Auto-Color Rules:
 * -----------------
 *
 * 1. Database names and keywords are case sensitive.
 *    This means if "Potion" is a marked keyword, typing out "potion" will not
 *    prompt the auto-color to highlight "potion". You must add the lowercase
 *    version of the word into the keyword list if you want it to count.
 *
 * 2. Database names and keywords are exact size (for Roman languages)
 *    This means if "Potion" is a marked keyword, typing out "potions" will not
 *    prompt the auto-color to highlight "potions". You must type out all of
 *    the variations of the words you want affected into the keyword list to
 *    prompt the auto-color highlight.
 * 
 *    This does not apply to Japanese, Korean, or Chinese languages.
 *
 * 3. Possessive cases and other language symbols aren't counted.
 *    Symbols such as periods, commas, quotes, parentheses, and similar symbols
 *    do no count towards Rule 2. This means if "Potion" is a marked keyword,
 *    the typing out "(Potion)" will still highlight the "Potion" part of the
 *    word according to the auto-color.
 * 
 * 4. Names with special characters like !, ?, [, ], etc. will be ignored.
 *    These cause conflicts with how auto-colors are detected.
 *
 * ---
 *
 * Database Highlighting
 *
 *   Actors:
 *   Classes:
 *   Skills:
 *   Items:
 *   Weapons:
 *   Armors:
 *   Enemies:
 *   States:
 *   - Any usage of a the selected database entry's name is auto-colored with
 *     the text code number.
 *   - Use 0 to not auto-color.
 *
 * ---
 *
 * Word Highlighting
 *
 *   \C[x]: Color
 *   - These are lists of all the words that will be automatically colored with
 *     the x text color.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Actions
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * performing actions. These actions can be done through each JavaScript or by
 * a common event (if it is used in the Message Window). Adequate knowledge of
 * both is recommended before attempting to modify and/or add new Text Code
 * Actions to the Plugin Parameters.
 *
 * Each of the Text Code Actions are formatted in such a way:
 *
 * ---
 *
 * Text Code Action
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   Common Event:
 *   - Select a common event to run when this text code is used in a message.
 *
 *   JS: Action:
 *   - JavaScript code used to perform an action when this text code appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Replacements
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * replacing the text codes with text data. Text data can be replaced with
 * an exact exchange of text or dynamically through JavaScript. Adding a new
 * Text Code Replacement is done through the Plugin Parameters.
 *
 * Each of the Text Code Replacements are formatted in such a way:
 *
 * ---
 *
 * Text Code Replacement
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   STR: Text:
 *   - The text that will appear if this match appears.
 *     If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     match appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Macros
 * ============================================================================
 *
 * Text macros are used in similar fashion to text codes replacements to
 * replace themselves with text data. The primary difference is that macros are
 * made in a different format with no conditional argument modifiers (ie the
 * [x] that follows a text code).
 *
 * To use a text macro, type in the matching keyword between two [brackets] and
 * it will be replaced by the string data or run the JavaScript code found in
 * the Plugin Parameter settings.
 *
 * For example, if you have the text macro "Leader", made to return the party
 * leader's name, you can type in [Leader] in the Message Window and it will be
 * replaced with the party leader's name. The output can also output text codes
 * into the resulting text.
 * 
 * This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 * Use the method stated before with the brackets to [MacroName] instead.
 *
 * Each of the Text Macros are formatted in such a way:
 *
 * ---
 *
 * Text Macro
 *
 *   Match:
 *   - This is what needs to be matched in order for this macro to work.
 *   - In [Leader], this would be the 'Leader' text.
 *
 *   STR: Text:
 *   - The replacement text that will appear from the macro.
 *   - If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     macro appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Speed Option Settings
 * ============================================================================
 *
 * Modern RPG's on the market have the option to adjust the message speed rate
 * for players. These Plugin Parameters allow you to add that option to the
 * Options Menu as well.
 *
 * ---
 *
 * Text Speed Option Settings
 *
 *   Add Option?:
 *   - Add the 'Text Speed' option to the Options menu?
 *
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 *
 *   Option Name:
 *   - Command name of the option.
 *
 *   Default Value:
 *   - 1 - 10, slowest to fastest.
 *   - 11 is instant value.
 *
 *   Instant Speed:
 *   - Text to show "instant" text.
 *
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: Word Wrap Settings
 * ============================================================================
 *
 * Word wrap is a property that will cause any overflowing text to wrap around
 * and move into the next line. This property can only be enabled inside text
 * that accept text codes, such as the Message Window and Help Window. However,
 * word wrap is disabled for the Choice Window due to the nature of the Choice
 * Window's base properties.
 *
 * Word wrap can be enabled or disabled in three ways. One is by using the text
 * code <WordWrap> to enable it or </WordWrap> to disable it. The second method
 * is by enabling it with the Plugin Command: 'Message: Properties'. The third
 * method is by enabling it by default with the Plugin Parameters.
 * 
 * Word wrap only supports left-to-right alphabetical languages that utilize
 * spaces. It does not support any Asian languages that do not utilize spaces,
 * such as Chinese, Japanese, Korean, etc.
 *
 * ---
 *
 * Enable Word Wrap
 *
 *   Message Window:
 *   - Automatically enable Word Wrap for this window?
 *
 *   Help Window:
 *   - Automatically enable Word Wrap for this window?
 *
 * ---
 *
 * Rules
 *
 *   Link Break -> Space:
 *   - Convert manually placed (non tagged) line breaks with spaces?
 *   - Line breaks must be inserted using the <br> text code.
 *
 *   Tight Wrap:
 *   - If a face graphic is present in a message, word wrap will be tighter.
 * 
 *   End Padding:
 *   - Add extra padding to your window to make text wrap further away from the
 *     end of the window.
 *   - This will default to 0.
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
 * Version 1.37: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Picture texts with \v[x] text codes are now updated automatically.
 * ** This is the only dynamic text code that updates this way for optimization
 *    purposes and to prevent overabundant CPU usage.
 * ** Everything else will require the new Plugin Command.
 * * New Features!
 * ** New Plugin Command added by Irina:
 * *** Picture: Refresh Text
 * **** Refreshes the text used for all on-screen pictures.
 * **** To be used if any dynamic text codes are updated like \n[x].
 * * New Features!
 * ** New text codes added by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** <Up Button>, <Left Button>, <Right Button>, <Down Button>
 * *** <Ok Button>, <Cancel Button>, <Shift Button>, <Menu Button>
 * *** <Page Up Button>, <Page Down Button>
 * **** Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * Version 1.36: April 7, 2022
 * * Feature Update!
 * ** Auto size related text codes should now automatically disable word wrap
 *    effects as they should have before. Update made by Irina.
 * 
 * Version 1.35: March 31, 2022
 * * Bug Fixes!
 * ** Bug fixed where if autosizing is used and it goes from a message that is
 *    shorter to longer, an extra key press is needed. This should no longer be
 *    the case. Fix made by Irina.
 * 
 * Version 1.34: February 24, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Choice Window Text Codes made by Irina and sponsored by AndyL:
 * *** <Choice Width: x>
 * **** Sets the minimum text area width to x. Applies to whole choice window.
 * *** <Choice Indent: x>
 * **** Sets the indent to x value. Applies to current choice selection only.
 * 
 * Version 1.33: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Picture: Change Text
 * **** This new plugin command allows you to place text on top of pictures
 *      (usually in the form of empty pages or cards) to function as stationary
 *      or other uses. Text codes are allowed.
 * **** Text codes are supported.
 * *** Picture: Erase Text
 * **** Removes text from target picture(s).
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Extra Show Choice notetags will now be properly hidden. Fix by Irina.
 * * Compatibility Update!
 * ** Self Switches are now made compatible with work with Show Choices. Update
 *    made by Irina.
 * 
 * Version 1.31: December 9, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New hard-coded message-only text code added by Irina:
 * *** <Next Page>
 * **** Ends the current message page at this line. This is used for messages
 *      when rows are at 5 or above and the message lines don't match the
 *      amount. This is used to prevent grabbing message windows from following
 *      message events. Any lines following <Next Page> in the same message
 *      event will be ignored.
 * 
 * Version 1.30: November 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for removed "Center Window X" bit.
 * * Feature Update!
 * ** Message: Properties now has "Center Window X?" removed
 * *** Changes will now be automatically centered.
 * *** This change is made for the new Plugin Command added for offsets which
 *     more or less replaces them.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Puddor:
 * *** Message: X/Y Offsets
 * **** Change the X and Y Offsets of the Message Window.
 * **** The offset value(s) will be saved and stored.
 * ** New Plugin Parameters added by Irina and sponsored by Puddor:
 * *** Plugin Parameters > General Settings > Message Window > Offset X
 * *** Plugin Parameters > General Settings > Message Window > Offset Y
 * **** Allows you to offset the horizontal and/or vertical positions of the
 *      message window accordingly.
 * ** New Text Codes added by Irina and sponsored by Puddor:
 * *** <Offset: +x, +y>
 * *** <Offset: -x, -y>
 * *** <Offset: +x, -y>
 * *** <Offset: -x, +y>
 * **** Quickly adjust the message window offset values to the x and y amounts.
 *      The values will replace the previous offset settings if there were any.
 * 
 * Version 1.29: October 21, 2021
 * * Feature Update
 * ** Word Wrap flags are now properly adjusted when converting macros and
 *    adding bypasses towards regular messages. Update by Irina.
 * 
 * Version 1.28: October 14, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.27: October 7, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** Macros should now work properly with any \x<n> based text codes.
 *    Fix made by Irina.
 * 
 * Version 1.25: August 27, 2021
 * * Feature Update!
 * ** Macros should now work with the <WordWrap> text code. Update by Irina.
 * 
 * Version 1.24: August 20, 2021
 * * Feature Update!
 * ** Macros should now work with window placement and resize options.
 *    Update made by Irina.
 * ** Macros should now work with choice-related enable and visibility options.
 *    Update made by Irina.
 * 
 * Version 1.23: July 16, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Word Wrap Settings > End Padding
 * **** Add extra padding to your window to make text wrap further away from
 *      the end of the window. This will default to 0.
 * 
 * Version 1.22: July 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Text Codes added by Irina and sponsored by AndyL:
 * *** <Current Battle Target>
 * *** <Current Battle User>
 * **** Replaces the text code with the current target or current user's name
 *      in-battle. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * *** <Current Battle Action>
 * *** <Current Battle Action Name>
 * **** Replaces the text code with the current battle action's name with the
 *      icon or without it respectively. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * 
 * Version 1.21: June 4, 2021
 * * Documentation Update!
 * ** Added extra note to the new <Position: x, y, width, height> text codes
 *    that they do not work with Word Wrap.
 * * Feature Update!
 * ** Added fail safe for preventing Common Events that don't exist from being
 *    ran at all by the Message Window. Added by Arisu.
 * 
 * Version 1.20: May 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added additional clarity for \WindowMoveTo<?> and \WindowMoveBy<?> and
 *    \WindowReset text codes with "Note 2".
 * *** Replace '?' with the following format: targetX, targetY, targetWidth,
 *     targetHeight, duration, easingType. Only targetX and targetY are
 *     required arguments. These will only alter the window dimensions when the
 *     text has arrived at that point. They will not alter the window
 *     preemptively. This is not used as a window positioner. Use the
 *     <Position: x, y, width, height> text code for that.
 * * New Features!
 * ** New hard-coded text codes added for Message Window Only. Added by Irina.
 * *** <Position: x, y, width, height>
 * *** <Coordinates: x, y>
 * *** <Dimensions: width, height>
 * 
 * Version 1.19: May 14, 2021
 * * Feature Updates!
 * ** <br> line breaks can now be used by Show Choices. Make sure that there is
 *    enough room to contain the text through Plugin Commands. Update by Irina.
 * 
 * Version 1.18: April 30, 2021
 * * Bug Fixes!
 * ** Moving windows with 0 duration via text code should now instantly move
 *    the windows to the desired location with no delay. Fix made by Olivia.
 * 
 * Version 1.17: April 9, 2021
 * * Feature Update!
 * ** <Auto> text codes for message windows will round up calculations for the
 *    message width to the nearest even number for better calculations.
 * 
 * Version 1.16: April 2, 2021
 * * Bug Fixes!
 * ** \CommonEvent[x] text code will no longer run upon message window size
 *    calculation. Fix made by Arisu.
 * * Documentation Update!
 * ** Added further clarification for "Text Macros" section.
 * *** This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 *     Use the method stated before with the brackets to [MacroName] instead.
 * 
 * Version 1.15: March 5, 2021
 * * Bug Fixes!
 * ** Hidden choices by switches will no longer count towards the maximum line
 *    count for Show Choice options. Fix made by Irina.
 * 
 * Version 1.14: February 12, 2021
 * * Bug Fixes!
 * ** Auto positioned messages in battle will no longer cover the battler in
 *    question. Fix made by Irina.
 * 
 * Version 1.13: February 5, 2021
 * * Bug Fixes!
 * ** Choice List Window with a dimmed background should now have a more
 *    consistent sized dim sprite. Fix made by Irina.
 * 
 * Version 1.12: January 22, 2021
 * * Feature Update!
 * ** Name Box Window Default Color is now disabled by default to 0 because
 *    users do not understand why their names are showing up yellow and did not
 *    bother reading the documentation. If users want this feature turned on,
 *    they will have to do it manually from now on. Update made by Irina.
 * 
 * Version 1.11: January 15, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.10: January 8, 2021
 * * Bug Fixes!
 * ** <Auto Actor: x> and <Auto Party: x> text codes should now work properly.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Auto Color Plugin Parameters now have their default settings set to 0.
 *    This is due to an influx of "bug reports" from users who do not
 *    understand how this feature works, and the VisuStella team has decided it
 *    is better for the feature to default to an inactive state until users
 *    decide to search and utilize it themselves. Update made by Irina.
 * 
 * Version 1.09: January 1, 2021
 * * Feature Update!
 * ** Auto-color no longer applies to database names that are only numbers.
 *    Auto-color entries that are only numbers will also be ignored. This is to
 *    prevent breaking the text code parsing. Update made by Yanfly.
 * 
 * Version 1.08: November 15, 2020
 * * Documentation Update!
 * ** Some text codes left for the Name Box Window have been accidentally left
 *    out. These text codes allow for the positioning of the Name Box Window.
 *    Also, added to this section are the \NormalBG, \DimBG, and \TransparentBG
 *    text codes since people have been asking for how to change the name box
 *    window's background, but have skimmed over those text codes in different
 *    sections of the help file.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: November 8, 2020
 * * Bug Fixes!
 * ** When using auto size functions, the message pause symbol will no longer
 *    appear semi-transparent the whole time. Fix made by Irina.
 * 
 * Version 1.06: October 25, 2020
 * * Documentation Update!
 * ** Added a warning message to the Fast Forward Key plugin parameter:
 * *** WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 * ** Updated help file for new features.
 * * Feature Update!
 * ** The default Fast Forward Key setting has now been changed from "Shift" to
 *    "Page Down". Change made by Yanfly
 * * New Feature!
 * ** New Plugin Parameter added by Irina.
 * *** Plugin Parameters > General > Default Outline Width
 * **** Changes the default outline width to this many pixels thick.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Setting an actor's autocolor will now disable it from \N[x] and \P[x]
 *    text codes. Fix made by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** Auto Position text codes not place positions properly if the screen width
 *    and height differ from the box width and box height. Fix made by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Word wrap no longer affects specific battle messages. Fix made by Irina.
 * ** Word wrap now updates properly after using the 'Message: Properties'
 *    Plugin Command. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Autoplacement of the name box window now takes its offset Y setting into
 *    account before sending it to the bottom of the message window. Fix made
 *    by Yanfly.
 * ** Added automatic feature setting to turn off word wrap when using the
 *    auto-size and auto-position text codes. This is because the auto-size and
 *    auto-position effects don't work properly with Word Wrap based on how
 *    they both clash when adjusting the window settings. Fix made by Irina.
 * ** New message pages after auto-sizing no longer put out empty messages.
 *    Fix made by Irina and Shiro.
 * * Documentation Update!
 * ** Extended the note for auto-size and auto-position text codes to include
 *    that they do not work with Word Wrap. Added by Irina.
 * 
 * Version 1.02: August 30, 2020
 * * New Features!
 * ** Added new hard-coded text codes for auto-sizing and auto-positioning:
 * *** <Auto>, <Auto Width>, <Auto Height>
 * *** <Auto Actor: x>, <Auto Party: x>, <Auto Enemy: x>
 * *** <Auto Player>, <Auto Actor: x>, <Auto Party: x>, <Auto Event: x>
 * **** New features added by Irina.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** </Wordwrap> now works.
 * ** \ActorFace[x] text code now fixed.
 * *** Users updating from version 1.00 will need to fix this problem by either
 *     removing the plugin from the Plugin Manager list and reinstalling it, or
 *     going to Plugin Parameters > Text Code Replacements > ActorFace >
 *     JS: Text > and changing "$gameActors.actor(1)" to
 *     "$gameActors.actor(actorId)"
 * ** Actors with empty names would cause auto hightlight problems. Fixed!
 * ** Auto-colors now ignore names with special characters like !, ?, [, ], and
 *    so on.
 * ** Line break spacing fixed.
 * * New Features!
 * ** Wordwrap now works with <left>, <center> and <right> alignment tags.
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
 * @command MessageWindowProperties
 * @text Message: Properties
 * @desc Change the various properties of the Message Window.
 *
 * @arg Rows:num
 * @text Rows
 * @type number
 * @min 0
 * @desc Change the number of Message Window rows.
 * Leave at 0 to keep it unchanged.
 * @default 4
 *
 * @arg Width:num
 * @text Width
 * @type number
 * @min 0
 * @desc Change the Message Window width in pixels.
 * Leave at 0 to keep it unchanged.
 * @default 816
 *
 * @arg WordWrap:str
 * @text Word Wrap
 * @type select
 * @option No Change
 * @value No Change
 * @option Enable
 * @value true
 * @option Disable
 * @value false
 * @desc Enable or disable Word Wrap for the Message Window?
 * @default No Change
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MessageWindowXyOffsets
 * @text Message: X/Y Offsets
 * @desc Change the X and Y Offsets of the Message Window.
 * The offset value(s) will be saved and stored.
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChoiceWindowProperties
 * @text Choices: Properties
 * @desc Change the properties found in the Show Choices event command.
 *
 * @arg LineHeight:num
 * @text Line Height
 * @type number
 * @min 0
 * @desc Change the line height for the show choices.
 * Leave at 0 to keep this unchanged.
 * @default 36
 *
 * @arg MaxRows:num
 * @text Max Rows
 * @type number
 * @min 0
 * @desc Maximum number of choice rows to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 8
 *
 * @arg MaxCols:num
 * @text Max Columns
 * @type number
 * @min 0
 * @desc Maximum number of choice columns to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 1
 *
 * @arg TextAlign:str
 * @text Text Alignment
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Text alignment for Show Choice window.
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextChange
 * @text Picture: Change Text
 * @desc Change text for target picture(s) to show.
 * You may use text codes.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID(s) of the picture(s) to set text to.
 * @default ["1"]
 *
 * @arg Padding:eval
 * @text Padding
 * @parent PictureIDs:arraynum
 * @desc How much padding from the sides should there be?
 * @default $gameSystem.windowPadding()
 * 
 * @arg Text
 *
 * @arg upperleft:json
 * @text Upper Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg up:json
 * @text Upper Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg upperright:json
 * @text Upper Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg left:json
 * @text Middle Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg center:json
 * @text Middle Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg right:json
 * @text Middle Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerleft:json
 * @text Lower Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg down:json
 * @text Lower Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerright:json
 * @text Lower Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextErase
 * @text Picture: Erase Text
 * @desc Erase all text for target picture(s).
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID(s) of the picture(s) to erase text for.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextRefresh
 * @text Picture: Refresh Text
 * @desc Refreshes the text used for all on-screen pictures.
 * To be used if any dynamic text codes are updated like \n[x].
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
 * @param MessageCore
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
 * @desc General settings involving the message system.
 * @default {"MessageWindow":"","MessageRows:num":"4","MessageWidth:num":"816","FastForwardKey:str":"pagedown","MessageTextDelay:num":"1","StretchDimmedBg:eval":"true","DefaultOutlineWidth:num":"3","NameBoxWindow":"","NameBoxWindowDefaultColor:num":"0","NameBoxWindowOffsetX:num":"0","NameBoxWindowOffsetY:num":"0","ChoiceListWindow":"","ChoiceWindowLineHeight:num":"36","ChoiceWindowMaxRows:num":"8","ChoiceWindowMaxCols:num":"1","ChoiceWindowTextAlign:str":"default","DefaultTextCodes":"","RelativePXPY:eval":"true","FontBiggerCap:eval":"108","FontSmallerCap:eval":"12","FontChangeValue:eval":"12"}
 *
 * @param AutoColor:struct
 * @text Auto-Color Settings
 * @type struct<AutoColor>
 * @desc Automatically color certain keywords a specific way.
 * @default {"DatabaseHighlighting":"","Actors:str":"0","Classes:str":"0","Skills:str":"0","Items:str":"0","Weapons:str":"0","Armors:str":"0","Enemies:str":"0","States:str":"0","WordHighlighting":"","TextColor1:arraystr":"[]","TextColor2:arraystr":"[]","TextColor3:arraystr":"[]","TextColor4:arraystr":"[]","TextColor5:arraystr":"[]","TextColor6:arraystr":"[]","TextColor7:arraystr":"[]","TextColor8:arraystr":"[]","TextColor9:arraystr":"[]","TextColor10:arraystr":"[]","TextColor11:arraystr":"[]","TextColor12:arraystr":"[]","TextColor13:arraystr":"[]","TextColor14:arraystr":"[]","TextColor15:arraystr":"[]","TextColor16:arraystr":"[]","TextColor17:arraystr":"[]","TextColor18:arraystr":"[]","TextColor19:arraystr":"[]","TextColor20:arraystr":"[]","TextColor21:arraystr":"[]","TextColor22:arraystr":"[]","TextColor23:arraystr":"[]","TextColor24:arraystr":"[]","TextColor25:arraystr":"[]","TextColor26:arraystr":"[]","TextColor27:arraystr":"[]","TextColor28:arraystr":"[]","TextColor29:arraystr":"[]","TextColor30:arraystr":"[]","TextColor31:arraystr":"[]"}
 *
 * @param TextCodeActions:arraystruct
 * @text Text Code Actions
 * @type struct<TextCodeAction>[]
 * @desc Text codes that perform actions.
 * @default ["{\"Match:str\":\"ChangeFace\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const filename = data[0].trim();\\\\n    const index = parseInt(data[1] || '0');\\\\n    $gameMessage.setFaceImage(filename, index);\\\\n    this.loadMessageFace();\\\\n    const rtl = $gameMessage.isRTL();\\\\n    const width = ImageManager.faceWidth;\\\\n    const height = this.innerHeight;\\\\n    const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n    this.contents.clearRect(x, 0, width, height);\\\\n    this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n}\\\"\"}","{\"Match:str\":\"FaceIndex\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst index = this.obtainEscapeParam(textState);\\\\nif (textState.drawing) {\\\\n    const filename = $gameMessage.faceName();\\\\n    $gameMessage.setFaceImage(filename, index);\\\\n    this.loadMessageFace();\\\\n    const rtl = $gameMessage.isRTL();\\\\n    const width = ImageManager.faceWidth;\\\\n    const height = this.innerHeight;\\\\n    const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n    this.contents.clearRect(x, 0, width, height);\\\\n    this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n}\\\"\"}","{\"Match:str\":\"TextDelay\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst delay = this.obtainEscapeParam(textState);\\\\nif (textState.drawing && this.constructor === Window_Message) {\\\\n    this.setTextDelay(delay);\\\\n}\\\"\"}","{\"Match:str\":\"NormalBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(0);\\\\n}\\\"\"}","{\"Match:str\":\"DimBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(1);\\\\n}\\\"\"}","{\"Match:str\":\"TransparentBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(2);\\\\n}\\\"\"}","{\"Match:str\":\"FontChange\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst fontName = this.obtainEscapeString(textState);\\\\nthis.contents.fontFace = fontName;\\\"\"}","{\"Match:str\":\"ResetFont\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetFontSettings();\\\"\"}","{\"Match:str\":\"ResetColor\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetTextColor();\\\"\"}","{\"Match:str\":\"HexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeTextColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineColor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst colorIndex = this.obtainEscapeParam(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(ColorManager.textColor(colorIndex));\\\\n}\\\"\"}","{\"Match:str\":\"OutlineHexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineWidth\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst width = this.obtainEscapeParam(textState);\\\\nif (textState.drawing) {\\\\n    this.contents.outlineWidth = width;\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveTo\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : this.x;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : this.y;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : this.width;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : this.height;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveTo(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveBy\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : 0;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : 0;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : 0;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : 0;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveBy(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowReset\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    const frames = 20;\\\\n    const easingType = 0;\\\\n    this.resetRect(frames, easingType);\\\\n}\\\"\"}"]
 *
 * @param TextCodeReplace:arraystruct
 * @text Text Code Replacements
 * @type struct<TextCodeReplace>[]
 * @desc Text codes that replace themselves with text.
 * @default ["{\"Match:str\":\"ActorFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const actorId = parseInt(arguments[1]);\\\\nconst actor = $gameActors.actor(actorId);\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"PartyFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const index = parseInt(arguments[1]) - 1;\\\\nconst actor = $gameParty.members()[index];\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"Class\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ClassName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Skill\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"SkillName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Item\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"Weapon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"LastGainObj\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = true;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjName\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = false;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjQuantity\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"return this.lastGainedObjectQuantity();\\\"\"}","{\"Match:str\":\"Armor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"State\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"StateName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Enemy\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"EnemyName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Troop\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMember\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMemberName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}"]
 *
 * @param TextMacros:arraystruct
 * @text Text Macros
 * @type struct<TextMacro>[]
 * @desc Macros that are used to quickly write batches of text.
 * @default ["{\"Match:str\":\"Example Macro\",\"TextStr:str\":\"This is the text that will be displayed when you type [Example Macro].\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}","{\"Match:str\":\"Leader\",\"TextStr:str\":\"\\\\P[1]\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}"]
 *
 * @param TextSpeed:struct
 * @text Text Speed Option Settings
 * @type struct<TextSpeed>
 * @desc Text Speed Options Menu settings.
 * @default {"AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Text Speed","Default:num":"10","Instant:str":"Instant"}
 *
 * @param WordWrap:struct
 * @text Word Wrap Settings
 * @type struct<WordWrap>
 * @desc Settings involving Word Wrap.
 * @default {"EnableWordWrap":"","MessageWindow:eval":"false","HelpWindow:eval":"false","Rules":"","LineBreakSpace:eval":"true","TightWrap:eval":"false","EndPadding:num":"0"}
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
 * @param MessageWindow
 * @text Message Window
 *
 * @param MessageRows:num
 * @text Default Rows
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default number of rows to display for the Message Window.
 * @default 4
 *
 * @param MessageWidth:num
 * @text Default Width
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default Message Window width in pixels.
 * @default 816
 *
 * @param FastForwardKey:str
 * @text Fast Forward Key
 * @parent MessageWindow
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for fast forwarding messages.
 * @default pagedown
 *
 * @param MessageTextDelay:num
 * @text Text Delay
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc How many frames to wait between characters drawn?
 * Use 0 for instant.
 * @default 1
 *
 * @param MsgWindowOffsetX:num
 * @text Offset X
 * @parent MessageWindow
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @param MsgWindowOffsetY:num
 * @text Offset Y
 * @parent MessageWindow
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
 *
 * @param StretchDimmedBg:eval
 * @text Stretch Dimmed BG
 * @parent MessageWindow
 * @type boolean
 * @on Stretch
 * @off Don't
 * @desc Stretch dimmed window background to fit the whole screen.
 * @default true
 *
 * @param DefaultOutlineWidth:num
 * @text Default Outline Width
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc Changes the default outline width to this many pixels thick.
 * @default 3
 *
 * @param NameBoxWindow
 * @text Name Box Window
 *
 * @param NameBoxWindowDefaultColor:num
 * @text Default Color
 * @parent NameBoxWindow
 * @min 0
 * @max 31
 * @desc Default color for the Name Box Window's text.
 * @default 0
 *
 * @param NameBoxWindowOffsetX:num
 * @text Offset X
 * @parent NameBoxWindow
 * @desc How much to offset the name box window X by (as long as it doesn't go offscreen).
 * @default +0
 *
 * @param NameBoxWindowOffsetY:num
 * @text Offset Y
 * @parent NameBoxWindow
 * @desc How much to offset the name box window Y by (as long as it doesn't go offscreen).
 * @default +0
 *
 * @param ChoiceListWindow
 * @text Choice List Window
 *
 * @param ChoiceWindowLineHeight:num
 * @text Line Height
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc What is the default line height for Show Choices?
 * @default 36
 *
 * @param ChoiceWindowMaxRows:num
 * @text Max Rows
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of rows to visibly display?
 * @default 8
 *
 * @param ChoiceWindowMaxCols:num
 * @text Max Columns
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of columns to visibly display?
 * @default 1
 *
 * @param ChoiceWindowTextAlign:str
 * @text Text Alignment
 * @parent ChoiceListWindow
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Default alignment for Show Choice window.
 * @default default
 *
 * @param DefaultTextCodes
 * @text Default Text Codes
 *
 * @param RelativePXPY:eval
 * @text Relative \PX \PY
 * @parent DefaultTextCodes
 * @type boolean
 * @on Better
 * @off Normal
 * @desc Make \PX[x] and \PY[x] adjust relative starting position than exact coordinates.
 * @default true
 *
 * @param FontBiggerCap:eval
 * @text \{ Maximum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the maximum size that \{ can reach.
 * @default 108
 *
 * @param FontSmallerCap:eval
 * @text \} Minimum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the minimum size that \} can reach.
 * @default 12
 *
 * @param FontChangeValue:eval
 * @text \{ Change \}
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc How much does \{ and \} change font size by?
 * @default 12
 *
 */
/* ----------------------------------------------------------------------------
 * Auto Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AutoColor:
 *
 * @param DatabaseHighlighting
 * @text Database Highlighting
 *
 * @param Actors:str
 * @text Actors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Actor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Classes:str
 * @text Classes
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Class's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Skills:str
 * @text Skills
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Skill's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Items:str
 * @text Items
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Item's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Weapons:str
 * @text Weapons
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Weapon's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Armors:str
 * @text Armors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Armor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Enemies:str
 * @text Enemies
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Enemy's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param States:str
 * @text States
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a State's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param WordHighlighting
 * @text Word Highlighting
 *
 * @param TextColor1:arraystr
 * @text \C[1]: Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor2:arraystr
 * @text \C[2]: Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor3:arraystr
 * @text \C[3]: Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor4:arraystr
 * @text \C[4]: Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor5:arraystr
 * @text \C[5]: Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor6:arraystr
 * @text \C[6]: Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor7:arraystr
 * @text \C[7]: Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor8:arraystr
 * @text \C[8]: Light Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor9:arraystr
 * @text \C[9]: Dark Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor10:arraystr
 * @text \C[10]: Dark Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor11:arraystr
 * @text \C[11]: Dark Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor12:arraystr
 * @text \C[12]: Dark Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor13:arraystr
 * @text \C[13]: Dark Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor14:arraystr
 * @text \C[14]: Solid Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor15:arraystr
 * @text \C[15]: Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor16:arraystr
 * @text \C[16]: System Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor17:arraystr
 * @text \C[17]: Crisis Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor18:arraystr
 * @text \C[18]: Dead Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor19:arraystr
 * @text \C[19]: Outline Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor20:arraystr
 * @text \C[20]: HP Orange 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor21:arraystr
 * @text \C[21]: HP Orange 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor22:arraystr
 * @text \C[22]: MP Blue 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor23:arraystr
 * @text \C[23]: MP Blue 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor24:arraystr
 * @text \C[24]: Param Up Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor25:arraystr
 * @text \C[25]: Param Down Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor26:arraystr
 * @text \C[26]: System Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor27:arraystr
 * @text \C[27]: System Pink
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor28:arraystr
 * @text \C[28]: TP Green 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor29:arraystr
 * @text \C[29]: TP Green 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor30:arraystr
 * @text \C[30]: EXP Purple 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor31:arraystr
 * @text \C[31]: EXP Purple 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Actions
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeAction:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param CommonEvent:num
 * @text Common Event
 * @type common_event
 * @desc Select a common event to run when this text code is used in a message.
 * @default 0
 *
 * @param ActionJS:func
 * @text JS: Action
 * @type note
 * @desc JavaScript code used to perform an action when this text code appears.
 * @default "const textState = arguments[0];"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Replacements
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeReplace:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The text that will appear if this match appears.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this match appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Macro
 * ----------------------------------------------------------------------------
 */
/*~struct~TextMacro:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this macro to work.
 * @default Key
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The replacement text that will appear from the macro.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this macro appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Speed Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TextSpeed:
 *
 * @param AddOption:eval
 * @text Add Option?
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Text Speed' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @desc Command name of the option.
 * @default Text Speed
 *
 * @param Default:num
 * @text Default Value
 * @type number
 * @min 1
 * @max 11
 * @desc 1 - 10, slowest to fastest.
 * 11 is instant value.
 * @default 10
 *
 * @param Instant:str
 * @text Instant Speed
 * @desc Text to show "instant" text.
 * @default Instant
 *
 */
/* ----------------------------------------------------------------------------
 * Word Wrap Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~WordWrap:
 *
 * @param EnableWordWrap
 * @text Enable Word Wrap
 *
 * @param MessageWindow:eval
 * @text Message Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param HelpWindow:eval
 * @text Help Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param Rules
 * @text Rules
 *
 * @param LineBreakSpace:eval
 * @text Link Break -> Space
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Convert manually placed (non tagged) line breaks with spaces?
 * @default true
 *
 * @param TightWrap:eval
 * @text Tight Wrap
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc If a face graphic is present in a message, word wrap will be tighter.
 * @default false
 *
 * @param EndPadding:num
 * @text End Padding
 * @parent Rules
 * @type number
 * @desc Add extra padding to your window to make text wrap further away from the end of the window.
 * @default 0
 *
 */
//=============================================================================

const _0x2c6443=_0x4523;(function(_0x4fd395,_0x3ef93c){const _0x3fd72d=_0x4523,_0x498f02=_0x4fd395();while(!![]){try{const _0x52b983=parseInt(_0x3fd72d(0x390))/0x1*(-parseInt(_0x3fd72d(0x2e5))/0x2)+-parseInt(_0x3fd72d(0x239))/0x3*(-parseInt(_0x3fd72d(0x41a))/0x4)+-parseInt(_0x3fd72d(0x364))/0x5*(parseInt(_0x3fd72d(0x3ce))/0x6)+-parseInt(_0x3fd72d(0x321))/0x7+parseInt(_0x3fd72d(0x3d5))/0x8*(-parseInt(_0x3fd72d(0x3bd))/0x9)+-parseInt(_0x3fd72d(0x23a))/0xa*(parseInt(_0x3fd72d(0x45c))/0xb)+parseInt(_0x3fd72d(0x1f0))/0xc*(parseInt(_0x3fd72d(0x35f))/0xd);if(_0x52b983===_0x3ef93c)break;else _0x498f02['push'](_0x498f02['shift']());}catch(_0x4a972f){_0x498f02['push'](_0x498f02['shift']());}}}(_0x4ea5,0x3d64a));var label=_0x2c6443(0x3ca),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x2c6443(0x30f)](function(_0x490305){return _0x490305['status']&&_0x490305['description']['includes']('['+label+']');})[0x0];VisuMZ[label][_0x2c6443(0x306)]=VisuMZ[label][_0x2c6443(0x306)]||{},VisuMZ[_0x2c6443(0x2ea)]=function(_0x563750,_0x5536c1){const _0x339d4e=_0x2c6443;for(const _0x11a8e8 in _0x5536c1){if(_0x11a8e8[_0x339d4e(0x22e)](/(.*):(.*)/i)){const _0x21212a=String(RegExp['$1']),_0x583f57=String(RegExp['$2'])[_0x339d4e(0x42f)]()['trim']();let _0x3dc57a,_0x309dc3,_0x86f408;switch(_0x583f57){case'NUM':_0x3dc57a=_0x5536c1[_0x11a8e8]!==''?Number(_0x5536c1[_0x11a8e8]):0x0;break;case _0x339d4e(0x434):_0x309dc3=_0x5536c1[_0x11a8e8]!==''?JSON[_0x339d4e(0x38f)](_0x5536c1[_0x11a8e8]):[],_0x3dc57a=_0x309dc3[_0x339d4e(0x3c9)](_0x1be9f3=>Number(_0x1be9f3));break;case _0x339d4e(0x2a4):_0x3dc57a=_0x5536c1[_0x11a8e8]!==''?eval(_0x5536c1[_0x11a8e8]):null;break;case _0x339d4e(0x3a7):_0x309dc3=_0x5536c1[_0x11a8e8]!==''?JSON['parse'](_0x5536c1[_0x11a8e8]):[],_0x3dc57a=_0x309dc3[_0x339d4e(0x3c9)](_0x57ab50=>eval(_0x57ab50));break;case _0x339d4e(0x354):_0x3dc57a=_0x5536c1[_0x11a8e8]!==''?JSON['parse'](_0x5536c1[_0x11a8e8]):'';break;case _0x339d4e(0x245):_0x309dc3=_0x5536c1[_0x11a8e8]!==''?JSON[_0x339d4e(0x38f)](_0x5536c1[_0x11a8e8]):[],_0x3dc57a=_0x309dc3['map'](_0x20d456=>JSON['parse'](_0x20d456));break;case'FUNC':_0x3dc57a=_0x5536c1[_0x11a8e8]!==''?new Function(JSON[_0x339d4e(0x38f)](_0x5536c1[_0x11a8e8])):new Function(_0x339d4e(0x2f2));break;case _0x339d4e(0x3af):_0x309dc3=_0x5536c1[_0x11a8e8]!==''?JSON[_0x339d4e(0x38f)](_0x5536c1[_0x11a8e8]):[],_0x3dc57a=_0x309dc3[_0x339d4e(0x3c9)](_0x1bc646=>new Function(JSON[_0x339d4e(0x38f)](_0x1bc646)));break;case _0x339d4e(0x422):_0x3dc57a=_0x5536c1[_0x11a8e8]!==''?String(_0x5536c1[_0x11a8e8]):'';break;case _0x339d4e(0x252):_0x309dc3=_0x5536c1[_0x11a8e8]!==''?JSON[_0x339d4e(0x38f)](_0x5536c1[_0x11a8e8]):[],_0x3dc57a=_0x309dc3[_0x339d4e(0x3c9)](_0x197d07=>String(_0x197d07));break;case _0x339d4e(0x227):_0x86f408=_0x5536c1[_0x11a8e8]!==''?JSON[_0x339d4e(0x38f)](_0x5536c1[_0x11a8e8]):{},_0x563750[_0x21212a]={},VisuMZ[_0x339d4e(0x2ea)](_0x563750[_0x21212a],_0x86f408);continue;case'ARRAYSTRUCT':_0x309dc3=_0x5536c1[_0x11a8e8]!==''?JSON[_0x339d4e(0x38f)](_0x5536c1[_0x11a8e8]):[],_0x3dc57a=_0x309dc3[_0x339d4e(0x3c9)](_0x18fa0b=>VisuMZ[_0x339d4e(0x2ea)]({},JSON[_0x339d4e(0x38f)](_0x18fa0b)));break;default:continue;}_0x563750[_0x21212a]=_0x3dc57a;}}return _0x563750;},(_0x101558=>{const _0x893bf4=_0x2c6443,_0x3bc8d7=_0x101558[_0x893bf4(0x206)];for(const _0x4c10bb of dependencies){if(!Imported[_0x4c10bb]){alert(_0x893bf4(0x1ec)[_0x893bf4(0x233)](_0x3bc8d7,_0x4c10bb)),SceneManager[_0x893bf4(0x454)]();break;}}const _0x272c64=_0x101558[_0x893bf4(0x2e7)];if(_0x272c64[_0x893bf4(0x22e)](/\[Version[ ](.*?)\]/i)){const _0x347718=Number(RegExp['$1']);_0x347718!==VisuMZ[label]['version']&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x893bf4(0x233)](_0x3bc8d7,_0x347718)),SceneManager[_0x893bf4(0x454)]());}if(_0x272c64[_0x893bf4(0x22e)](/\[Tier[ ](\d+)\]/i)){const _0x3aa92f=Number(RegExp['$1']);_0x3aa92f<tier?(alert(_0x893bf4(0x22a)[_0x893bf4(0x233)](_0x3bc8d7,_0x3aa92f,tier)),SceneManager[_0x893bf4(0x454)]()):tier=Math['max'](_0x3aa92f,tier);}VisuMZ[_0x893bf4(0x2ea)](VisuMZ[label][_0x893bf4(0x306)],_0x101558[_0x893bf4(0x1fc)]);})(pluginData),PluginManager[_0x2c6443(0x3e8)](pluginData[_0x2c6443(0x206)],_0x2c6443(0x1e1),_0x31c736=>{const _0x4b63e0=_0x2c6443;VisuMZ[_0x4b63e0(0x2ea)](_0x31c736,_0x31c736);const _0x10476a=_0x31c736[_0x4b63e0(0x368)]||$gameSystem[_0x4b63e0(0x3d9)]()||0x1,_0x189712=_0x31c736[_0x4b63e0(0x258)]||$gameSystem[_0x4b63e0(0x31d)]()||0x1,_0x23e82d=_0x31c736[_0x4b63e0(0x41d)]||$gameSystem['getChoiceListMaxColumns']()||0x1,_0x499f00=_0x31c736[_0x4b63e0(0x29f)][_0x4b63e0(0x2e8)]()||_0x4b63e0(0x43c);$gameSystem[_0x4b63e0(0x2dc)](_0x10476a),$gameSystem[_0x4b63e0(0x39d)](_0x189712),$gameSystem[_0x4b63e0(0x34c)](_0x23e82d),$gameSystem[_0x4b63e0(0x3d0)](_0x499f00);}),PluginManager[_0x2c6443(0x3e8)](pluginData[_0x2c6443(0x206)],_0x2c6443(0x3eb),_0x889376=>{const _0x2e100f=_0x2c6443;VisuMZ[_0x2e100f(0x2ea)](_0x889376,_0x889376);const _0x3d6f9f=_0x889376[_0x2e100f(0x32d)]||$gameSystem[_0x2e100f(0x38c)]()||0x1,_0x425e4e=_0x889376[_0x2e100f(0x3c4)]||$gameSystem[_0x2e100f(0x3e2)]()||0x1;$gameTemp[_0x2e100f(0x322)]=!![];const _0xb104a=_0x889376['WordWrap'][_0x2e100f(0x2e8)]();$gameSystem[_0x2e100f(0x310)](_0x3d6f9f),$gameSystem['setMessageWindowWidth'](_0x425e4e);['true','false'][_0x2e100f(0x315)](_0xb104a)&&$gameSystem[_0x2e100f(0x2ba)](eval(_0xb104a));const _0x23d721=SceneManager[_0x2e100f(0x3f3)][_0x2e100f(0x3b5)];_0x23d721&&(_0x23d721[_0x2e100f(0x450)](),_0x23d721[_0x2e100f(0x288)](),_0x23d721[_0x2e100f(0x26f)]());}),PluginManager[_0x2c6443(0x3e8)](pluginData[_0x2c6443(0x206)],_0x2c6443(0x2f1),_0xe5a3a=>{const _0x3cba67=_0x2c6443;VisuMZ[_0x3cba67(0x2ea)](_0xe5a3a,_0xe5a3a),$gameSystem[_0x3cba67(0x277)](_0xe5a3a[_0x3cba67(0x37f)],_0xe5a3a[_0x3cba67(0x323)]);const _0x57398f=SceneManager['_scene'][_0x3cba67(0x3b5)];_0x57398f&&(_0x57398f['resetWordWrap'](),_0x57398f[_0x3cba67(0x288)](),_0x57398f[_0x3cba67(0x26f)]());}),PluginManager[_0x2c6443(0x3e8)](pluginData['name'],_0x2c6443(0x20a),_0x145c8f=>{const _0xdffb37=_0x2c6443;VisuMZ['ConvertParams'](_0x145c8f,_0x145c8f);const _0x4885f9=_0x145c8f['PictureIDs']||[],_0x3b1f4c=_0x145c8f[_0xdffb37(0x383)]||0x0,_0xd1837b=[_0xdffb37(0x44b),'up',_0xdffb37(0x3a4),_0xdffb37(0x3ba),_0xdffb37(0x3f1),_0xdffb37(0x287),_0xdffb37(0x265),'down','lowerright'];for(const _0x4cffc5 of _0x4885f9){$gameScreen[_0xdffb37(0x213)](_0x4cffc5,_0x3b1f4c);for(const _0x13dd5d of _0xd1837b){if(_0x145c8f[_0x13dd5d]===undefined)continue;$gameScreen['setPictureText'](_0x4cffc5,_0x145c8f[_0x13dd5d],_0x13dd5d);}}}),PluginManager[_0x2c6443(0x3e8)](pluginData[_0x2c6443(0x206)],_0x2c6443(0x2b0),_0xc06aa3=>{const _0x3b59e3=_0x2c6443;VisuMZ[_0x3b59e3(0x2ea)](_0xc06aa3,_0xc06aa3);const _0x59f595=_0xc06aa3[_0x3b59e3(0x45b)]||[];for(const _0x37b557 of _0x59f595){$gameScreen['eraseAllPictureTexts'](_0x37b557),$gameScreen[_0x3b59e3(0x1dd)](_0x37b557);}}),PluginManager[_0x2c6443(0x3e8)](pluginData[_0x2c6443(0x206)],_0x2c6443(0x37b),_0x4f2d93=>{$gameScreen['requestPictureTextRefreshAll']();}),VisuMZ['MessageCore']['Scene_Boot_onDatabaseLoaded']=Scene_Boot[_0x2c6443(0x272)]['onDatabaseLoaded'],Scene_Boot['prototype'][_0x2c6443(0x373)]=function(){const _0x4563aa=_0x2c6443;VisuMZ[_0x4563aa(0x3ca)][_0x4563aa(0x441)][_0x4563aa(0x369)](this),this[_0x4563aa(0x2bc)](),this['process_VisuMZ_MessageCore_TextCodes_Replace'](),this[_0x4563aa(0x3cb)](),this[_0x4563aa(0x3da)]();},VisuMZ[_0x2c6443(0x3ca)]['SortObjectByKeyLength']=function(_0x51b2bc){const _0x3f6593=_0x2c6443,_0x109ade=VisuMZ[_0x3f6593(0x3ca)][_0x3f6593(0x306)][_0x51b2bc];_0x109ade[_0x3f6593(0x2dd)]((_0x4e1809,_0x5ad132)=>{const _0x5dd3d5=_0x3f6593;if(!_0x4e1809||!_0x5ad132)return-0x1;return _0x5ad132[_0x5dd3d5(0x3e5)][_0x5dd3d5(0x2f8)]-_0x4e1809[_0x5dd3d5(0x3e5)][_0x5dd3d5(0x2f8)];});},Scene_Boot[_0x2c6443(0x272)][_0x2c6443(0x2bc)]=function(){const _0x4af972=_0x2c6443;VisuMZ[_0x4af972(0x3ca)][_0x4af972(0x249)]('TextCodeActions');for(const _0x5ae62a of VisuMZ[_0x4af972(0x3ca)][_0x4af972(0x306)][_0x4af972(0x3f8)]){_0x5ae62a[_0x4af972(0x3e5)]=_0x5ae62a[_0x4af972(0x3e5)][_0x4af972(0x42f)](),_0x5ae62a[_0x4af972(0x2a8)]=new RegExp('\x1b'+_0x5ae62a[_0x4af972(0x3e5)],'gi'),_0x5ae62a[_0x4af972(0x3b7)]='\x1b'+_0x5ae62a[_0x4af972(0x3e5)];if(_0x5ae62a[_0x4af972(0x2b3)]==='')_0x5ae62a[_0x4af972(0x3b7)]+=_0x4af972(0x3f6);}},Scene_Boot[_0x2c6443(0x272)][_0x2c6443(0x3c1)]=function(){const _0x306223=_0x2c6443;VisuMZ['MessageCore'][_0x306223(0x249)](_0x306223(0x351));for(const _0x3ea36a of VisuMZ[_0x306223(0x3ca)][_0x306223(0x306)]['TextCodeReplace']){_0x3ea36a[_0x306223(0x2a8)]=new RegExp('\x1b'+_0x3ea36a[_0x306223(0x3e5)]+_0x3ea36a[_0x306223(0x2b3)],'gi'),_0x3ea36a[_0x306223(0x3b8)]!==''&&_0x3ea36a['TextStr']!=='Undefined'?_0x3ea36a[_0x306223(0x3b7)]=new Function(_0x306223(0x1e9)+_0x3ea36a[_0x306223(0x3b8)][_0x306223(0x39e)](/\\/g,'\x1b')+'\x27'):_0x3ea36a[_0x306223(0x3b7)]=_0x3ea36a[_0x306223(0x241)];}},Scene_Boot[_0x2c6443(0x272)][_0x2c6443(0x3cb)]=function(){const _0x4d4874=_0x2c6443;for(const _0xc6f3b1 of VisuMZ[_0x4d4874(0x3ca)]['Settings'][_0x4d4874(0x22d)]){_0xc6f3b1[_0x4d4874(0x2a8)]=new RegExp('\x5c['+_0xc6f3b1[_0x4d4874(0x3e5)]+'\x5c]','gi'),_0xc6f3b1[_0x4d4874(0x3b8)]!==''&&_0xc6f3b1[_0x4d4874(0x3b8)]!==_0x4d4874(0x426)?_0xc6f3b1[_0x4d4874(0x3b7)]=new Function(_0x4d4874(0x1e9)+_0xc6f3b1[_0x4d4874(0x3b8)][_0x4d4874(0x39e)](/\\/g,'\x1b')+'\x27'):_0xc6f3b1['textCodeResult']=_0xc6f3b1[_0x4d4874(0x241)];}},Scene_Boot[_0x2c6443(0x272)]['process_VisuMZ_MessageCore_AutoColor']=function(){const _0x4f5d18=_0x2c6443,_0x4c98af=VisuMZ['MessageCore'][_0x4f5d18(0x306)]['AutoColor'];!VisuMZ[_0x4f5d18(0x45d)]&&(VisuMZ[_0x4f5d18(0x3ca)][_0x4f5d18(0x1fe)]($dataClasses,_0x4c98af[_0x4f5d18(0x21d)]),VisuMZ[_0x4f5d18(0x3ca)][_0x4f5d18(0x1fe)]($dataSkills,_0x4c98af[_0x4f5d18(0x28f)]),VisuMZ['MessageCore'][_0x4f5d18(0x1fe)]($dataItems,_0x4c98af['Items']),VisuMZ[_0x4f5d18(0x3ca)]['AddAutoColor']($dataWeapons,_0x4c98af['Weapons']),VisuMZ[_0x4f5d18(0x3ca)][_0x4f5d18(0x1fe)]($dataArmors,_0x4c98af['Armors']),VisuMZ[_0x4f5d18(0x3ca)][_0x4f5d18(0x1fe)]($dataEnemies,_0x4c98af[_0x4f5d18(0x22b)]),VisuMZ[_0x4f5d18(0x3ca)]['AddAutoColor']($dataStates,_0x4c98af['States'])),VisuMZ[_0x4f5d18(0x3ca)]['CreateAutoColorRegExpLists']();},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x224)]=['V','N','P','C','I','PX','PY','G','{','}','<','>','FS','\x5c','$','.','|','!','<','>','^',_0x2c6443(0x3de),_0x2c6443(0x3a1),'<I>',_0x2c6443(0x31c),_0x2c6443(0x1f9),_0x2c6443(0x3fc),'<CENTER>',_0x2c6443(0x27b),_0x2c6443(0x3d3),_0x2c6443(0x2f9),_0x2c6443(0x44c),_0x2c6443(0x366),_0x2c6443(0x2da),_0x2c6443(0x29c),_0x2c6443(0x289),_0x2c6443(0x343),_0x2c6443(0x455),_0x2c6443(0x3a6),_0x2c6443(0x2ca),_0x2c6443(0x27a),_0x2c6443(0x38b),_0x2c6443(0x274),_0x2c6443(0x2b2),'HIDE','ENABLE',_0x2c6443(0x349),_0x2c6443(0x1e0),_0x2c6443(0x2b1),'ALL',_0x2c6443(0x25d)],VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x1fe)]=function(_0x2fdc77,_0x3f529a){if(_0x3f529a<=0x0)return;const _0x47cf58=_0x2fdc77;for(const _0x52bf37 of _0x47cf58){if(!_0x52bf37)continue;VisuMZ['MessageCore']['CreateAutoColorFor'](_0x52bf37,_0x3f529a);}},VisuMZ['MessageCore'][_0x2c6443(0x247)]=function(){const _0x13fd1f=_0x2c6443;VisuMZ[_0x13fd1f(0x3ca)][_0x13fd1f(0x374)]=[];for(let _0x572bfa=0x1;_0x572bfa<=0x1f;_0x572bfa++){const _0x276e0f=_0x13fd1f(0x210)[_0x13fd1f(0x233)](_0x572bfa),_0x3f014e=VisuMZ[_0x13fd1f(0x3ca)]['Settings'][_0x13fd1f(0x237)][_0x276e0f];_0x3f014e[_0x13fd1f(0x2dd)]((_0x4996d1,_0x13b647)=>{const _0x56856d=_0x13fd1f;if(!_0x4996d1||!_0x13b647)return-0x1;return _0x13b647[_0x56856d(0x2f8)]-_0x4996d1[_0x56856d(0x2f8)];}),this[_0x13fd1f(0x28b)](_0x3f014e,_0x572bfa);}},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x28b)]=function(_0x499607,_0xeb7a20){const _0x14efc5=_0x2c6443;for(const _0x5ff641 of _0x499607){if(_0x5ff641[_0x14efc5(0x2f8)]<=0x0)continue;if(/^\d+$/[_0x14efc5(0x24f)](_0x5ff641))continue;let _0x2b5d9c=VisuMZ[_0x14efc5(0x3ca)][_0x14efc5(0x386)](_0x5ff641);if(_0x5ff641[_0x14efc5(0x22e)](/[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g))var _0x324419=new RegExp(_0x2b5d9c,'i');else var _0x324419=new RegExp('\x5cb'+_0x2b5d9c+'\x5cb','g');VisuMZ[_0x14efc5(0x3ca)]['AutoColorRegExp']['push']([_0x324419,_0x14efc5(0x2cb)[_0x14efc5(0x233)](_0xeb7a20,_0x5ff641)]);}},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x386)]=function(_0x2f4eb8){const _0x3334c1=_0x2c6443;return _0x2f4eb8=_0x2f4eb8[_0x3334c1(0x39e)](/(\W)/gi,(_0x406532,_0x5a1c52)=>'\x5c%1'[_0x3334c1(0x233)](_0x5a1c52)),_0x2f4eb8;},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x29e)]=VisuMZ[_0x2c6443(0x29e)],VisuMZ['ParseClassNotetags']=function(_0x3cdd08){const _0x37a9f0=_0x2c6443;VisuMZ[_0x37a9f0(0x3ca)][_0x37a9f0(0x29e)][_0x37a9f0(0x369)](this,_0x3cdd08);const _0x2f73c6=VisuMZ['MessageCore'][_0x37a9f0(0x306)][_0x37a9f0(0x237)];VisuMZ[_0x37a9f0(0x3ca)]['CreateAutoColorFor'](_0x3cdd08,_0x2f73c6[_0x37a9f0(0x21d)]);},VisuMZ['MessageCore'][_0x2c6443(0x1f3)]=VisuMZ[_0x2c6443(0x1f3)],VisuMZ['ParseSkillNotetags']=function(_0x142725){const _0x392c64=_0x2c6443;VisuMZ[_0x392c64(0x3ca)][_0x392c64(0x1f3)]['call'](this,_0x142725);const _0x424e53=VisuMZ[_0x392c64(0x3ca)][_0x392c64(0x306)][_0x392c64(0x237)];VisuMZ[_0x392c64(0x3ca)][_0x392c64(0x2c6)](_0x142725,_0x424e53[_0x392c64(0x28f)]);},0x7,VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x28e)]=VisuMZ[_0x2c6443(0x28e)],VisuMZ[_0x2c6443(0x28e)]=function(_0x37b53e){const _0x41008e=_0x2c6443;VisuMZ[_0x41008e(0x3ca)][_0x41008e(0x28e)]['call'](this,_0x37b53e);const _0x59cbf1=VisuMZ[_0x41008e(0x3ca)][_0x41008e(0x306)][_0x41008e(0x237)];VisuMZ[_0x41008e(0x3ca)]['CreateAutoColorFor'](_0x37b53e,_0x59cbf1[_0x41008e(0x212)]);},VisuMZ['MessageCore'][_0x2c6443(0x34a)]=VisuMZ['ParseWeaponNotetags'],VisuMZ[_0x2c6443(0x34a)]=function(_0x1e215c){const _0x577d2f=_0x2c6443;VisuMZ[_0x577d2f(0x3ca)][_0x577d2f(0x34a)]['call'](this,_0x1e215c);const _0x565f43=VisuMZ['MessageCore'][_0x577d2f(0x306)][_0x577d2f(0x237)];VisuMZ[_0x577d2f(0x3ca)][_0x577d2f(0x2c6)](_0x1e215c,_0x565f43[_0x577d2f(0x2b8)]);},VisuMZ[_0x2c6443(0x3ca)]['ParseArmorNotetags']=VisuMZ[_0x2c6443(0x448)],VisuMZ[_0x2c6443(0x448)]=function(_0x399545){const _0x57a973=_0x2c6443;VisuMZ[_0x57a973(0x3ca)][_0x57a973(0x448)][_0x57a973(0x369)](this,_0x399545);const _0x580d0e=VisuMZ[_0x57a973(0x3ca)][_0x57a973(0x306)]['AutoColor'];VisuMZ[_0x57a973(0x3ca)][_0x57a973(0x2c6)](_0x399545,_0x580d0e[_0x57a973(0x404)]);},VisuMZ['MessageCore'][_0x2c6443(0x230)]=VisuMZ[_0x2c6443(0x230)],VisuMZ[_0x2c6443(0x230)]=function(_0x12f7e2){const _0x120a6e=_0x2c6443;VisuMZ[_0x120a6e(0x3ca)]['ParseEnemyNotetags'][_0x120a6e(0x369)](this,_0x12f7e2);const _0x1a49ee=VisuMZ[_0x120a6e(0x3ca)]['Settings'][_0x120a6e(0x237)];VisuMZ['MessageCore'][_0x120a6e(0x2c6)](_0x12f7e2,_0x1a49ee[_0x120a6e(0x22b)]);},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x318)]=VisuMZ[_0x2c6443(0x318)],VisuMZ[_0x2c6443(0x318)]=function(_0x40f762){const _0x2b6fce=_0x2c6443;VisuMZ[_0x2b6fce(0x3ca)][_0x2b6fce(0x318)][_0x2b6fce(0x369)](this,_0x40f762);const _0x460d3a=VisuMZ[_0x2b6fce(0x3ca)][_0x2b6fce(0x306)][_0x2b6fce(0x237)];VisuMZ[_0x2b6fce(0x3ca)][_0x2b6fce(0x2c6)](_0x40f762,_0x460d3a[_0x2b6fce(0x342)]);},VisuMZ[_0x2c6443(0x3ca)]['CreateAutoColorFor']=function(_0x50c279,_0xbd27f){const _0x3d0e5b=_0x2c6443;if(_0xbd27f<=0x0)return;const _0x203955=VisuMZ[_0x3d0e5b(0x3ca)][_0x3d0e5b(0x306)][_0x3d0e5b(0x237)]['TextColor'+_0xbd27f];let _0x29a611=_0x50c279[_0x3d0e5b(0x206)][_0x3d0e5b(0x3bf)]();if(/^\d+$/[_0x3d0e5b(0x24f)](_0x29a611))return;if(VisuMZ[_0x3d0e5b(0x3ca)]['AutoColorBypassList']['includes'](_0x29a611[_0x3d0e5b(0x42f)]()))return;_0x29a611=_0x29a611['replace'](/\\I\[(\d+)\]/gi,''),_0x29a611=_0x29a611['replace'](/\x1bI\[(\d+)\]/gi,'');if(_0x29a611[_0x3d0e5b(0x2f8)]<=0x0)return;if(_0x29a611['match'](/-----/i))return;_0x203955[_0x3d0e5b(0x3f0)](_0x29a611);},SceneManager[_0x2c6443(0x360)]=function(){const _0x5b1c77=_0x2c6443;return this[_0x5b1c77(0x3f3)]&&this[_0x5b1c77(0x3f3)][_0x5b1c77(0x42a)]===Scene_Battle;},SceneManager[_0x2c6443(0x464)]=function(){const _0x35577e=_0x2c6443;return this[_0x35577e(0x3f3)]&&this[_0x35577e(0x3f3)][_0x35577e(0x42a)]===Scene_Map;},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x2b5)]=TextManager['message'],TextManager[_0x2c6443(0x226)]=function(_0x585ace){const _0x561ee=_0x2c6443,_0x248630=[_0x561ee(0x396),_0x561ee(0x440),_0x561ee(0x2b7),_0x561ee(0x218),_0x561ee(0x254),_0x561ee(0x2f6),'escapeStart',_0x561ee(0x438),_0x561ee(0x220),'obtainItem'];let _0x2a69ae=VisuMZ[_0x561ee(0x3ca)]['TextManager_message'][_0x561ee(0x369)](this,_0x585ace);return _0x248630[_0x561ee(0x315)](_0x585ace)&&(_0x2a69ae=_0x561ee(0x343)+_0x2a69ae),_0x2a69ae;},ConfigManager['textSpeed']=VisuMZ[_0x2c6443(0x3ca)]['Settings'][_0x2c6443(0x412)]['Default'],VisuMZ['MessageCore'][_0x2c6443(0x414)]=ConfigManager[_0x2c6443(0x403)],ConfigManager[_0x2c6443(0x403)]=function(){const _0x1b1867=_0x2c6443,_0x53dd6c=VisuMZ[_0x1b1867(0x3ca)][_0x1b1867(0x414)]['call'](this);return _0x53dd6c[_0x1b1867(0x1f1)]=this['textSpeed'],_0x53dd6c;},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x3ec)]=ConfigManager[_0x2c6443(0x388)],ConfigManager[_0x2c6443(0x388)]=function(_0x51cd76){const _0x31b27e=_0x2c6443;VisuMZ[_0x31b27e(0x3ca)][_0x31b27e(0x3ec)][_0x31b27e(0x369)](this,_0x51cd76),_0x31b27e(0x1f1)in _0x51cd76?this[_0x31b27e(0x1f1)]=Number(_0x51cd76['textSpeed'])[_0x31b27e(0x2de)](0x1,0xb):this[_0x31b27e(0x1f1)]=VisuMZ[_0x31b27e(0x3ca)][_0x31b27e(0x306)][_0x31b27e(0x412)]['Default'];},TextManager[_0x2c6443(0x417)]=VisuMZ['MessageCore'][_0x2c6443(0x306)][_0x2c6443(0x412)][_0x2c6443(0x457)],TextManager[_0x2c6443(0x2e9)]=VisuMZ['MessageCore'][_0x2c6443(0x306)]['TextSpeed'][_0x2c6443(0x2fd)],VisuMZ['MessageCore'][_0x2c6443(0x2ae)]=Game_System[_0x2c6443(0x272)]['initialize'],Game_System[_0x2c6443(0x272)][_0x2c6443(0x2bf)]=function(){const _0x25750e=_0x2c6443;VisuMZ[_0x25750e(0x3ca)][_0x25750e(0x2ae)][_0x25750e(0x369)](this),this['initMessageCore']();},Game_System[_0x2c6443(0x272)][_0x2c6443(0x216)]=function(){const _0x309a0d=_0x2c6443,_0x1c23ad=VisuMZ[_0x309a0d(0x3ca)][_0x309a0d(0x306)][_0x309a0d(0x40d)],_0x29b93e=VisuMZ[_0x309a0d(0x3ca)][_0x309a0d(0x306)][_0x309a0d(0x389)];this['_MessageCoreSettings']={'messageRows':_0x1c23ad['MessageRows'],'messageWidth':_0x1c23ad[_0x309a0d(0x30c)],'messageWordWrap':_0x29b93e[_0x309a0d(0x43b)],'helpWordWrap':_0x29b93e[_0x309a0d(0x270)],'choiceLineHeight':_0x1c23ad[_0x309a0d(0x24c)],'choiceRows':_0x1c23ad[_0x309a0d(0x1e5)],'choiceCols':_0x1c23ad[_0x309a0d(0x34b)],'choiceTextAlign':_0x1c23ad[_0x309a0d(0x302)]},this[_0x309a0d(0x439)]===undefined&&(this[_0x309a0d(0x439)]=_0x1c23ad[_0x309a0d(0x231)],this[_0x309a0d(0x41c)]=_0x1c23ad[_0x309a0d(0x338)]);},Game_System[_0x2c6443(0x272)][_0x2c6443(0x38c)]=function(){const _0x141a8c=_0x2c6443;if(this[_0x141a8c(0x3b4)]===undefined)this[_0x141a8c(0x216)]();if(this['_MessageCoreSettings'][_0x141a8c(0x44f)]===undefined)this[_0x141a8c(0x216)]();return this[_0x141a8c(0x3b4)]['messageRows'];},Game_System['prototype'][_0x2c6443(0x310)]=function(_0x48a794){const _0x13ef51=_0x2c6443;if(this['_MessageCoreSettings']===undefined)this[_0x13ef51(0x216)]();if(this['_MessageCoreSettings'][_0x13ef51(0x44f)]===undefined)this[_0x13ef51(0x216)]();this['_MessageCoreSettings'][_0x13ef51(0x44f)]=_0x48a794||0x1;},Game_System[_0x2c6443(0x272)]['getMessageWindowWidth']=function(){const _0x7795b5=_0x2c6443;if(this['_MessageCoreSettings']===undefined)this[_0x7795b5(0x216)]();if(this[_0x7795b5(0x3b4)][_0x7795b5(0x21c)]===undefined)this[_0x7795b5(0x216)]();return this['_MessageCoreSettings'][_0x7795b5(0x21c)];},Game_System['prototype'][_0x2c6443(0x429)]=function(_0x1b96e0){const _0x113180=_0x2c6443;if(this['_MessageCoreSettings']===undefined)this['initMessageCore']();if(this[_0x113180(0x3b4)]['messageWidth']===undefined)this['initMessageCore']();_0x1b96e0=Math[_0x113180(0x219)](_0x1b96e0);if(_0x1b96e0%0x2!==0x0)_0x1b96e0+=0x1;this[_0x113180(0x3b4)][_0x113180(0x21c)]=_0x1b96e0||0x2;},Game_System[_0x2c6443(0x272)][_0x2c6443(0x45f)]=function(){const _0x580cf0=_0x2c6443;if(this[_0x580cf0(0x3b4)]===undefined)this['initMessageCore']();if(this[_0x580cf0(0x3b4)][_0x580cf0(0x32b)]===undefined)this[_0x580cf0(0x216)]();return this['_MessageCoreSettings']['messageWordWrap'];},Game_System[_0x2c6443(0x272)][_0x2c6443(0x2ba)]=function(_0x1c1545){const _0x419d73=_0x2c6443;if(this[_0x419d73(0x3b4)]===undefined)this[_0x419d73(0x216)]();if(this[_0x419d73(0x3b4)]['messageWordWrap']===undefined)this[_0x419d73(0x216)]();this[_0x419d73(0x3b4)][_0x419d73(0x32b)]=_0x1c1545;},Game_System[_0x2c6443(0x272)][_0x2c6443(0x350)]=function(){const _0x442740=_0x2c6443;if(this['_messageOffsetX']===undefined){const _0x11f13b=VisuMZ['MessageCore'][_0x442740(0x306)]['General'];this['_messageOffsetX']=_0x11f13b[_0x442740(0x231)],this[_0x442740(0x41c)]=_0x11f13b['MsgWindowOffsetY'];}return{'x':this[_0x442740(0x439)]||0x0,'y':this[_0x442740(0x41c)]||0x0};},Game_System['prototype'][_0x2c6443(0x277)]=function(_0x5db708,_0x28c29c){const _0x28e9d5=_0x2c6443;if(this['_MessageCoreSettings']===undefined)this['initMessageCore']();this['_messageOffsetX']=_0x5db708,this[_0x28e9d5(0x41c)]=_0x28c29c;},Game_System[_0x2c6443(0x272)][_0x2c6443(0x3be)]=function(){const _0xd7162b=_0x2c6443;if(this[_0xd7162b(0x3b4)]===undefined)this[_0xd7162b(0x216)]();if(this[_0xd7162b(0x3b4)][_0xd7162b(0x312)]===undefined)this[_0xd7162b(0x216)]();return this[_0xd7162b(0x3b4)]['helpWordWrap'];},Game_System[_0x2c6443(0x272)]['setHelpWindowWordWrap']=function(_0x18df86){const _0x3dedd1=_0x2c6443;if(this[_0x3dedd1(0x3b4)]===undefined)this[_0x3dedd1(0x216)]();if(this[_0x3dedd1(0x3b4)][_0x3dedd1(0x312)]===undefined)this[_0x3dedd1(0x216)]();this[_0x3dedd1(0x3b4)][_0x3dedd1(0x312)]=_0x18df86;},Game_System['prototype'][_0x2c6443(0x3d9)]=function(){const _0x4d69e5=_0x2c6443;if(this[_0x4d69e5(0x3b4)]===undefined)this[_0x4d69e5(0x216)]();if(this[_0x4d69e5(0x3b4)][_0x4d69e5(0x1ea)]===undefined)this['initMessageCore']();return this[_0x4d69e5(0x3b4)]['choiceLineHeight'];},Game_System[_0x2c6443(0x272)][_0x2c6443(0x2dc)]=function(_0x440d20){const _0xe050db=_0x2c6443;if(this[_0xe050db(0x3b4)]===undefined)this[_0xe050db(0x216)]();if(this[_0xe050db(0x3b4)][_0xe050db(0x1ea)]===undefined)this[_0xe050db(0x216)]();this[_0xe050db(0x3b4)][_0xe050db(0x1ea)]=_0x440d20||0x1;},Game_System['prototype'][_0x2c6443(0x31d)]=function(){const _0x1676f8=_0x2c6443;if(this[_0x1676f8(0x3b4)]===undefined)this['initMessageCore']();if(this['_MessageCoreSettings'][_0x1676f8(0x29a)]===undefined)this[_0x1676f8(0x216)]();return this[_0x1676f8(0x3b4)]['choiceRows'];},Game_System[_0x2c6443(0x272)][_0x2c6443(0x39d)]=function(_0x4ba02a){const _0x4048dd=_0x2c6443;if(this['_MessageCoreSettings']===undefined)this[_0x4048dd(0x216)]();if(this[_0x4048dd(0x3b4)][_0x4048dd(0x29a)]===undefined)this[_0x4048dd(0x216)]();this['_MessageCoreSettings']['choiceRows']=_0x4ba02a||0x1;},Game_System[_0x2c6443(0x272)][_0x2c6443(0x2ef)]=function(){const _0x23d125=_0x2c6443;if(this[_0x23d125(0x3b4)]===undefined)this[_0x23d125(0x216)]();if(this[_0x23d125(0x3b4)][_0x23d125(0x37a)]===undefined)this['initMessageCore']();return this[_0x23d125(0x3b4)][_0x23d125(0x37a)];},Game_System[_0x2c6443(0x272)][_0x2c6443(0x34c)]=function(_0x4b60a0){const _0x351377=_0x2c6443;if(this['_MessageCoreSettings']===undefined)this[_0x351377(0x216)]();if(this[_0x351377(0x3b4)][_0x351377(0x37a)]===undefined)this['initMessageCore']();this[_0x351377(0x3b4)][_0x351377(0x37a)]=_0x4b60a0||0x1;},Game_System[_0x2c6443(0x272)]['getChoiceListTextAlign']=function(){const _0x14d999=_0x2c6443;if(this[_0x14d999(0x3b4)]===undefined)this[_0x14d999(0x216)]();if(this[_0x14d999(0x3b4)][_0x14d999(0x229)]===undefined)this[_0x14d999(0x216)]();return this[_0x14d999(0x3b4)]['choiceTextAlign'];},Game_System['prototype'][_0x2c6443(0x3d0)]=function(_0x2de2ff){const _0x5e27bf=_0x2c6443;if(this['_MessageCoreSettings']===undefined)this[_0x5e27bf(0x216)]();if(this[_0x5e27bf(0x3b4)][_0x5e27bf(0x229)]===undefined)this['initMessageCore']();this[_0x5e27bf(0x3b4)]['choiceTextAlign']=_0x2de2ff[_0x5e27bf(0x2e8)]();},VisuMZ['MessageCore'][_0x2c6443(0x356)]=Game_Screen[_0x2c6443(0x272)][_0x2c6443(0x3a5)],Game_Screen[_0x2c6443(0x272)]['clearPictures']=function(){const _0x45b74a=_0x2c6443;VisuMZ['MessageCore'][_0x45b74a(0x356)]['call'](this),this[_0x45b74a(0x43d)]();},Game_Screen[_0x2c6443(0x272)][_0x2c6443(0x43d)]=function(){const _0x3d40b7=_0x2c6443;this[_0x3d40b7(0x267)]=[],this[_0x3d40b7(0x2fa)]=[],this[_0x3d40b7(0x2e4)]=[];},Game_Screen['prototype'][_0x2c6443(0x348)]=function(_0x4f913a){const _0x4efbf3=_0x2c6443;if(this[_0x4efbf3(0x267)]===undefined)this[_0x4efbf3(0x43d)]();const _0x3411ac=this['realPictureId'](_0x4f913a);return this[_0x4efbf3(0x267)][_0x3411ac]=this[_0x4efbf3(0x267)][_0x3411ac]||{},this[_0x4efbf3(0x267)][_0x3411ac];},Game_Screen['prototype'][_0x2c6443(0x3e1)]=function(_0x54dda7,_0x468608){const _0x469086=_0x2c6443;return _0x468608=_0x468608['toLowerCase']()[_0x469086(0x3bf)](),this['getPictureTextData'](_0x54dda7)[_0x468608]||'';},Game_Screen[_0x2c6443(0x272)]['setPictureText']=function(_0x12444b,_0x449e2a,_0x20bfe2){const _0x30d97d=_0x2c6443;_0x20bfe2=_0x20bfe2[_0x30d97d(0x2e8)]()['trim'](),this[_0x30d97d(0x348)](_0x12444b)[_0x20bfe2]=_0x449e2a||'';},Game_Screen[_0x2c6443(0x272)][_0x2c6443(0x34f)]=function(_0x56337f){const _0x12e36d=_0x2c6443;if(this[_0x12e36d(0x267)]===undefined)this[_0x12e36d(0x43d)]();const _0x8096c=this[_0x12e36d(0x445)](_0x56337f);this[_0x12e36d(0x267)][_0x8096c]=null;},Game_Screen['prototype'][_0x2c6443(0x3c8)]=function(_0x1088ae){const _0x1620e9=_0x2c6443;if(this[_0x1620e9(0x267)]===undefined)this[_0x1620e9(0x43d)]();const _0x4369a3=this[_0x1620e9(0x445)](_0x1088ae);return this[_0x1620e9(0x2fa)][_0x4369a3]||0x0;},Game_Screen[_0x2c6443(0x272)]['setPictureTextBuffer']=function(_0x5263a1,_0x4a2afb){const _0x18b7cb=_0x2c6443;if(this[_0x18b7cb(0x267)]===undefined)this['clearAllPictureTexts']();const _0x31508c=this[_0x18b7cb(0x445)](_0x5263a1);this[_0x18b7cb(0x2fa)][_0x31508c]=Math['max'](0x0,_0x4a2afb);},Game_Screen[_0x2c6443(0x272)][_0x2c6443(0x1dd)]=function(_0x296ab1){const _0x31718c=_0x2c6443;if(this[_0x31718c(0x267)]===undefined)this[_0x31718c(0x43d)]();const _0x31b004=this[_0x31718c(0x445)](_0x296ab1);this['_pictureTextBuffer'][_0x31b004]=undefined;},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x251)]=Game_Screen[_0x2c6443(0x272)][_0x2c6443(0x40a)],Game_Screen[_0x2c6443(0x272)][_0x2c6443(0x40a)]=function(_0x212a5f){const _0x2a165c=_0x2c6443;VisuMZ['MessageCore'][_0x2a165c(0x251)][_0x2a165c(0x369)](this,_0x212a5f),this[_0x2a165c(0x34f)](_0x212a5f),this[_0x2a165c(0x1dd)](_0x212a5f),this[_0x2a165c(0x344)](_0x212a5f);},Game_Screen[_0x2c6443(0x272)]['requestPictureTextRefreshAll']=function(){const _0x457793=_0x2c6443;for(const _0x5d5c67 of this[_0x457793(0x460)]){if(_0x5d5c67){let _0x218a34=this[_0x457793(0x460)][_0x457793(0x1e6)](_0x5d5c67);this['requestPictureTextRefresh'](_0x218a34);}}},Game_Screen['prototype'][_0x2c6443(0x344)]=function(_0x435d66){const _0x1806c3=_0x2c6443;this[_0x1806c3(0x2e4)]=this[_0x1806c3(0x2e4)]||[],this[_0x1806c3(0x2e4)]['push'](_0x435d66);},Game_Screen[_0x2c6443(0x272)][_0x2c6443(0x304)]=function(_0x577a79){const _0x44e42a=_0x2c6443;return this['_pictureTextRefresh']=this['_pictureTextRefresh']||[],this['_pictureTextRefresh'][_0x44e42a(0x315)](_0x577a79);},Game_Screen[_0x2c6443(0x272)][_0x2c6443(0x281)]=function(_0x9a5460){const _0x2d8eff=_0x2c6443;this[_0x2d8eff(0x2e4)]=this['_pictureTextRefresh']||[],this[_0x2d8eff(0x2e4)][_0x2d8eff(0x3b3)](_0x9a5460);},VisuMZ['MessageCore']['Game_Party_initialize']=Game_Party['prototype'][_0x2c6443(0x2bf)],Game_Party['prototype'][_0x2c6443(0x2bf)]=function(){const _0x2eb4bf=_0x2c6443;VisuMZ[_0x2eb4bf(0x3ca)]['Game_Party_initialize']['call'](this),this[_0x2eb4bf(0x216)]();},Game_Party['prototype'][_0x2c6443(0x216)]=function(){const _0x2a2fb4=_0x2c6443;this[_0x2a2fb4(0x299)]={'type':0x0,'id':0x0,'quantity':0x0};},Game_Party['prototype'][_0x2c6443(0x420)]=function(){const _0x449782=_0x2c6443;if(this['_lastGainedItemData']===undefined)this['initMessageCore']();return this[_0x449782(0x299)];},Game_Party[_0x2c6443(0x272)]['setLastGainedItemData']=function(_0x143a95,_0x1a0054){const _0x26e97d=_0x2c6443;if(this[_0x26e97d(0x299)]===undefined)this[_0x26e97d(0x216)]();if(!_0x143a95)return;if(DataManager[_0x26e97d(0x430)](_0x143a95))this[_0x26e97d(0x299)]['type']=0x0;else{if(DataManager[_0x26e97d(0x394)](_0x143a95))this[_0x26e97d(0x299)][_0x26e97d(0x3fd)]=0x1;else DataManager[_0x26e97d(0x1fd)](_0x143a95)&&(this[_0x26e97d(0x299)][_0x26e97d(0x3fd)]=0x2);}this[_0x26e97d(0x299)]['id']=_0x143a95['id'],this[_0x26e97d(0x299)]['quantity']=_0x1a0054;},VisuMZ[_0x2c6443(0x3ca)]['Game_Party_gainItem']=Game_Party[_0x2c6443(0x272)][_0x2c6443(0x431)],Game_Party[_0x2c6443(0x272)][_0x2c6443(0x431)]=function(_0x314380,_0x31f591,_0x160757){const _0x4d53a5=_0x2c6443;VisuMZ[_0x4d53a5(0x3ca)]['Game_Party_gainItem'][_0x4d53a5(0x369)](this,_0x314380,_0x31f591,_0x160757),_0x31f591>0x0&&this[_0x4d53a5(0x295)](_0x314380,_0x31f591);},VisuMZ['MessageCore'][_0x2c6443(0x425)]=Game_Map[_0x2c6443(0x272)][_0x2c6443(0x2bf)],Game_Map['prototype'][_0x2c6443(0x2bf)]=function(){const _0x11dcee=_0x2c6443;VisuMZ['MessageCore'][_0x11dcee(0x425)]['call'](this),this[_0x11dcee(0x340)]=[];},VisuMZ['MessageCore'][_0x2c6443(0x407)]=Game_Map[_0x2c6443(0x272)][_0x2c6443(0x221)],Game_Map[_0x2c6443(0x272)]['setupEvents']=function(){const _0xdaa84a=_0x2c6443;VisuMZ[_0xdaa84a(0x3ca)]['Game_Map_setupEvents'][_0xdaa84a(0x369)](this),this[_0xdaa84a(0x340)]=[];},VisuMZ[_0x2c6443(0x3ca)]['Game_Map_updateEvents']=Game_Map[_0x2c6443(0x272)][_0x2c6443(0x32c)],Game_Map[_0x2c6443(0x272)][_0x2c6443(0x32c)]=function(){const _0x35d174=_0x2c6443;VisuMZ[_0x35d174(0x3ca)]['Game_Map_updateEvents']['call'](this),this[_0x35d174(0x39a)]();},Game_Map['prototype'][_0x2c6443(0x405)]=function(_0x4c69f1){const _0xa0d98b=_0x2c6443;if(!$dataCommonEvents[_0x4c69f1])return;this['_messageCommonEvents']=this[_0xa0d98b(0x340)]||[];const _0x127b19=this[_0xa0d98b(0x2e2)][_0xa0d98b(0x261)],_0x599381=new Game_MessageCommonEvent(_0x4c69f1,_0x127b19);this[_0xa0d98b(0x340)][_0xa0d98b(0x3f0)](_0x599381);},Game_Map['prototype'][_0x2c6443(0x39a)]=function(){const _0xc98724=_0x2c6443;this[_0xc98724(0x340)]=this[_0xc98724(0x340)]||[];for(const _0x86fb79 of this[_0xc98724(0x340)]){!_0x86fb79[_0xc98724(0x2e2)]?this['_messageCommonEvents'][_0xc98724(0x3b3)](_0x86fb79):_0x86fb79[_0xc98724(0x282)]();}},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x381)]=Game_Map[_0x2c6443(0x272)][_0x2c6443(0x293)],Game_Map[_0x2c6443(0x272)][_0x2c6443(0x293)]=function(){VisuMZ['MessageCore']['Game_Map_refresh']['call'](this),$gameScreen['requestPictureTextRefreshAll']();},Game_Interpreter[_0x2c6443(0x272)][_0x2c6443(0x313)]=function(_0x43c121){const _0x5c1714=_0x2c6443;if($gameMessage[_0x5c1714(0x3a8)]())return![];return this[_0x5c1714(0x2d4)](_0x43c121),this[_0x5c1714(0x38a)](_0x43c121),this[_0x5c1714(0x3ee)](_0x43c121),this[_0x5c1714(0x43e)](_0x5c1714(0x226)),!![];},Game_Interpreter['prototype'][_0x2c6443(0x2d4)]=function(_0x3c98bf){const _0x574b6c=_0x2c6443;$gameMessage[_0x574b6c(0x3a2)](_0x3c98bf[0x0],_0x3c98bf[0x1]),$gameMessage[_0x574b6c(0x30e)](_0x3c98bf[0x2]),$gameMessage[_0x574b6c(0x3bb)](_0x3c98bf[0x3]),$gameMessage[_0x574b6c(0x3e9)](_0x3c98bf[0x4]);},Game_Interpreter['prototype'][_0x2c6443(0x38a)]=function(_0x2def48){const _0x128040=_0x2c6443;while(this[_0x128040(0x3b0)]()){this[_0x128040(0x2a7)]++;if(this[_0x128040(0x427)]()[_0x128040(0x209)]===0x191){let _0x56de2a=this[_0x128040(0x427)]()['parameters'][0x0];_0x56de2a=VisuMZ['MessageCore']['ParseAddedText'](_0x56de2a),$gameMessage[_0x128040(0x400)](_0x56de2a);}if(this['isBreakShowTextCommands']())break;}},Game_Interpreter['prototype'][_0x2c6443(0x3b0)]=function(){const _0x524dc9=_0x2c6443;return this[_0x524dc9(0x285)]()===0x65&&$gameSystem[_0x524dc9(0x38c)]()>0x4?!![]:this['nextEventCode']()===0x191;},VisuMZ[_0x2c6443(0x3ca)]['ParseAddedText']=function(_0x48fbad){return _0x48fbad=_0x48fbad['replace'](/<(?:NEXT PAGE|NEXTPAGE)>/gi,''),_0x48fbad;},Game_Interpreter[_0x2c6443(0x272)][_0x2c6443(0x260)]=function(){const _0x32320e=_0x2c6443;if(this['currentCommand']()&&this[_0x32320e(0x427)]()[_0x32320e(0x1fc)][0x0][_0x32320e(0x22e)](/<(?:NEXT PAGE|NEXTPAGE)>/gi))return!![];return $gameMessage[_0x32320e(0x370)]['length']>=$gameSystem[_0x32320e(0x38c)]()&&this[_0x32320e(0x285)]()!==0x191;},Game_Interpreter[_0x2c6443(0x272)]['prepareShowTextFollowups']=function(_0x16f410){const _0x3b018b=_0x2c6443;switch(this[_0x3b018b(0x285)]()){case 0x66:this[_0x3b018b(0x2a7)]++,this[_0x3b018b(0x2a5)](this[_0x3b018b(0x427)]()['parameters']);break;case 0x67:this[_0x3b018b(0x2a7)]++,this[_0x3b018b(0x205)](this[_0x3b018b(0x427)]()[_0x3b018b(0x1fc)]);break;case 0x68:this[_0x3b018b(0x2a7)]++,this[_0x3b018b(0x2ed)](this['currentCommand']()['parameters']);break;}},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x437)]=Game_Interpreter[_0x2c6443(0x272)][_0x2c6443(0x2a5)],Game_Interpreter['prototype'][_0x2c6443(0x2a5)]=function(_0x2c266c){const _0x128dc7=_0x2c6443;_0x2c266c=this['addContinuousShowChoices'](),VisuMZ[_0x128dc7(0x3ca)][_0x128dc7(0x437)]['call'](this,_0x2c266c);},Game_Interpreter[_0x2c6443(0x272)][_0x2c6443(0x3c2)]=function(){const _0x27ac68=_0x2c6443,_0x12e684=this[_0x27ac68(0x2a7)],_0x252a59=[];let _0x247302=0x0;this[_0x27ac68(0x2a7)]++;while(this['_index']<this[_0x27ac68(0x3ae)][_0x27ac68(0x2f8)]){if(this[_0x27ac68(0x427)]()[_0x27ac68(0x36f)]===this[_0x27ac68(0x215)]){if(this['currentCommand']()[_0x27ac68(0x209)]===0x194&&this[_0x27ac68(0x285)]()!==0x66)break;else{if(this[_0x27ac68(0x427)]()[_0x27ac68(0x209)]===0x66)this[_0x27ac68(0x2ac)](_0x247302,this['currentCommand'](),_0x12e684),this[_0x27ac68(0x2a7)]-=0x2;else this[_0x27ac68(0x427)]()[_0x27ac68(0x209)]===0x192&&(this[_0x27ac68(0x427)]()[_0x27ac68(0x1fc)][0x0]=_0x247302,_0x247302++);}}this[_0x27ac68(0x2a7)]++;}return this[_0x27ac68(0x2a7)]=_0x12e684,this[_0x27ac68(0x427)]()[_0x27ac68(0x1fc)];},Game_Interpreter[_0x2c6443(0x272)][_0x2c6443(0x2ac)]=function(_0x1703ca,_0x24de2f,_0x10b38b){const _0x5aaf5d=_0x2c6443;this['adjustShowChoiceDefault'](_0x1703ca,_0x24de2f,_0x10b38b),this[_0x5aaf5d(0x36c)](_0x1703ca,_0x24de2f,_0x10b38b),this[_0x5aaf5d(0x284)](_0x24de2f,_0x10b38b);},Game_Interpreter[_0x2c6443(0x272)][_0x2c6443(0x456)]=function(_0x531085,_0xdd9d4b,_0x126e43){const _0xed09c=_0x2c6443;if(_0xdd9d4b[_0xed09c(0x1fc)][0x2]<0x0)return;const _0x2e5b5c=_0xdd9d4b[_0xed09c(0x1fc)][0x2]+_0x531085;this[_0xed09c(0x3ae)][_0x126e43]['parameters'][0x2]=_0x2e5b5c;},Game_Interpreter[_0x2c6443(0x272)]['adjustShowChoiceCancel']=function(_0xa361fc,_0x5d2f4c,_0xef56d7){const _0x3104f0=_0x2c6443;if(_0x5d2f4c[_0x3104f0(0x1fc)][0x1]>=0x0){var _0x252793=_0x5d2f4c[_0x3104f0(0x1fc)][0x1]+_0xa361fc;this[_0x3104f0(0x3ae)][_0xef56d7][_0x3104f0(0x1fc)][0x1]=_0x252793;}else _0x5d2f4c[_0x3104f0(0x1fc)][0x1]===-0x2&&(this['_list'][_0xef56d7][_0x3104f0(0x1fc)][0x1]=_0x5d2f4c['parameters'][0x1]);},Game_Interpreter[_0x2c6443(0x272)][_0x2c6443(0x284)]=function(_0x269f2e,_0x3e1aef){const _0x1867a0=_0x2c6443;for(const _0x583289 of _0x269f2e['parameters'][0x0]){this['_list'][_0x3e1aef][_0x1867a0(0x1fc)][0x0][_0x1867a0(0x3f0)](_0x583289);}this[_0x1867a0(0x3ae)][_0x1867a0(0x266)](this[_0x1867a0(0x2a7)]-0x1,0x2);};function Game_MessageCommonEvent(){const _0x49a985=_0x2c6443;this[_0x49a985(0x2bf)](...arguments);}function _0x4523(_0x46361d,_0x5818ff){const _0x4ea5c9=_0x4ea5();return _0x4523=function(_0x4523f0,_0x55c716){_0x4523f0=_0x4523f0-0x1dc;let _0x37e3b6=_0x4ea5c9[_0x4523f0];return _0x37e3b6;},_0x4523(_0x46361d,_0x5818ff);}Game_MessageCommonEvent[_0x2c6443(0x272)]['initialize']=function(_0x2f21dd,_0x2cacf5){const _0x58b212=_0x2c6443;this[_0x58b212(0x2bd)]=_0x2f21dd,this[_0x58b212(0x261)]=_0x2cacf5||0x0,this['refresh']();},Game_MessageCommonEvent['prototype'][_0x2c6443(0x3ef)]=function(){return $dataCommonEvents[this['_commonEventId']];},Game_MessageCommonEvent[_0x2c6443(0x272)][_0x2c6443(0x2c5)]=function(){return this['event']()['list'];},Game_MessageCommonEvent[_0x2c6443(0x272)][_0x2c6443(0x293)]=function(){const _0x62c08c=_0x2c6443;this[_0x62c08c(0x2e2)]=new Game_Interpreter(),this['_interpreter'][_0x62c08c(0x298)](this[_0x62c08c(0x2c5)](),this['_eventId']);},Game_MessageCommonEvent['prototype'][_0x2c6443(0x282)]=function(){const _0x5dde0d=_0x2c6443;this['_interpreter']&&(this['_interpreter'][_0x5dde0d(0x23f)]()?this[_0x5dde0d(0x2e2)][_0x5dde0d(0x282)]():this[_0x5dde0d(0x3a3)]());},Game_MessageCommonEvent[_0x2c6443(0x272)][_0x2c6443(0x3a3)]=function(){const _0x5de903=_0x2c6443;this[_0x5de903(0x2e2)]=null;},Scene_Message[_0x2c6443(0x272)][_0x2c6443(0x3e0)]=function(){const _0x3140e5=_0x2c6443,_0x7a84db=Math['min'](Graphics[_0x3140e5(0x327)],$gameSystem[_0x3140e5(0x3e2)]()),_0x2fea3b=$gameSystem[_0x3140e5(0x38c)](),_0xcda90a=this[_0x3140e5(0x411)](_0x2fea3b,![]),_0x284524=(Graphics[_0x3140e5(0x200)]-_0x7a84db)/0x2,_0x255f65=0x0;return new Rectangle(_0x284524,_0x255f65,_0x7a84db,_0xcda90a);},VisuMZ['MessageCore'][_0x2c6443(0x3bc)]=Scene_Options[_0x2c6443(0x272)][_0x2c6443(0x28a)],Scene_Options[_0x2c6443(0x272)][_0x2c6443(0x28a)]=function(){const _0x3b3798=_0x2c6443;let _0x10bac3=VisuMZ['MessageCore'][_0x3b3798(0x3bc)][_0x3b3798(0x369)](this);const _0x4ae6af=VisuMZ[_0x3b3798(0x3ca)][_0x3b3798(0x306)];if(_0x4ae6af[_0x3b3798(0x412)][_0x3b3798(0x326)]&&_0x4ae6af[_0x3b3798(0x412)]['AdjustRect'])_0x10bac3++;return _0x10bac3;},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x45a)]=Sprite_Picture[_0x2c6443(0x272)][_0x2c6443(0x461)],Sprite_Picture[_0x2c6443(0x272)][_0x2c6443(0x461)]=function(){const _0x264ac3=_0x2c6443;VisuMZ['MessageCore'][_0x264ac3(0x45a)][_0x264ac3(0x369)](this),this[_0x264ac3(0x1f5)]();},VisuMZ[_0x2c6443(0x3ca)]['Sprite_Picture_update']=Sprite_Picture['prototype'][_0x2c6443(0x282)],Sprite_Picture[_0x2c6443(0x272)][_0x2c6443(0x282)]=function(){const _0x4f1595=_0x2c6443;VisuMZ[_0x4f1595(0x3ca)]['Sprite_Picture_update'][_0x4f1595(0x369)](this),this[_0x4f1595(0x371)]();},Sprite_Picture[_0x2c6443(0x272)][_0x2c6443(0x371)]=function(){const _0x285762=_0x2c6443;if(!this[_0x285762(0x1e7)])return;this[_0x285762(0x1ee)](),this[_0x285762(0x337)](),this[_0x285762(0x3e6)](),this[_0x285762(0x21a)]();},Sprite_Picture[_0x2c6443(0x272)][_0x2c6443(0x1f5)]=function(){const _0x50a10d=_0x2c6443;if(this[_0x50a10d(0x395)])return;if(this[_0x50a10d(0x2cf)])return;const _0x4c73b6=new Rectangle(0x0,0x0,0x0,0x0);this[_0x50a10d(0x395)]=new Window_Base(_0x4c73b6),this[_0x50a10d(0x395)]['padding']=0x0,this['_pictureTextSprite']=new Sprite(),this[_0x50a10d(0x35d)](this[_0x50a10d(0x2cf)],0x0),this[_0x50a10d(0x26d)]=0x0,this['_pictureTextHeight']=0x0,this[_0x50a10d(0x418)]={};},Sprite_Picture[_0x2c6443(0x272)][_0x2c6443(0x1ee)]=function(){const _0x4ab884=_0x2c6443;if(!this[_0x4ab884(0x395)])return;if(this['_pictureTextWidth']===this[_0x4ab884(0x327)]&&this['_pictureTextHeight']===this[_0x4ab884(0x3c3)])return;this[_0x4ab884(0x26d)]=this[_0x4ab884(0x327)],this[_0x4ab884(0x421)]=this[_0x4ab884(0x3c3)],this[_0x4ab884(0x418)]={},this['_pictureTextWindow'][_0x4ab884(0x29d)](0x0,0x0,this[_0x4ab884(0x327)],this[_0x4ab884(0x3c3)]);},Sprite_Picture[_0x2c6443(0x272)][_0x2c6443(0x337)]=function(){const _0xe17989=_0x2c6443;if(!this[_0xe17989(0x2cf)])return;this[_0xe17989(0x2cf)][_0xe17989(0x246)]['x']=this[_0xe17989(0x246)]['x'],this[_0xe17989(0x2cf)][_0xe17989(0x246)]['y']=this[_0xe17989(0x246)]['y'];},Sprite_Picture[_0x2c6443(0x272)][_0x2c6443(0x3e6)]=function(){const _0x1b87e4=_0x2c6443;if(!this[_0x1b87e4(0x395)])return;if(!this[_0x1b87e4(0x2e6)]())return;const _0xc59337=['upperleft','up',_0x1b87e4(0x3a4),_0x1b87e4(0x3ba),_0x1b87e4(0x3f1),_0x1b87e4(0x287),_0x1b87e4(0x265),'down',_0x1b87e4(0x275)];this['_pictureTextWindow'][_0x1b87e4(0x26f)]();for(const _0x40332c of _0xc59337){this[_0x1b87e4(0x1f2)](_0x40332c);}},Sprite_Picture[_0x2c6443(0x272)][_0x2c6443(0x2e6)]=function(){const _0x4753cc=_0x2c6443;if($gameScreen[_0x4753cc(0x304)](this[_0x4753cc(0x30a)]))return!![];const _0x2a3bdc=[_0x4753cc(0x44b),'up',_0x4753cc(0x3a4),'left',_0x4753cc(0x3f1),_0x4753cc(0x287),'lowerleft','down',_0x4753cc(0x275)];for(const _0x44fe57 of _0x2a3bdc){const _0x467ca1=$gameScreen[_0x4753cc(0x3e1)](this[_0x4753cc(0x30a)],_0x44fe57);if(this[_0x4753cc(0x418)][_0x44fe57]===_0x467ca1)continue;return!![];}return![];},Sprite_Picture['prototype'][_0x2c6443(0x1f2)]=function(_0x527f2c){const _0x1e891c=_0x2c6443;$gameScreen['clearPictureTextRefresh'](this[_0x1e891c(0x30a)]);const _0x319cef=$gameScreen[_0x1e891c(0x3e1)](this[_0x1e891c(0x30a)],_0x527f2c);this[_0x1e891c(0x418)][_0x527f2c]=_0x319cef;const _0x2aea41=this['_pictureTextWindow'][_0x1e891c(0x1f7)](_0x319cef);let _0x18e588=$gameScreen[_0x1e891c(0x3c8)](this[_0x1e891c(0x30a)]),_0x45b1c8=_0x18e588,_0x168230=_0x18e588;if(['up','center',_0x1e891c(0x256)][_0x1e891c(0x315)](_0x527f2c))_0x45b1c8=Math['floor']((this[_0x1e891c(0x327)]-_0x2aea41['width'])/0x2);else[_0x1e891c(0x3a4),'right','lowerright'][_0x1e891c(0x315)](_0x527f2c)&&(_0x45b1c8=Math['floor'](this[_0x1e891c(0x327)]-_0x2aea41[_0x1e891c(0x327)]-_0x18e588));if([_0x1e891c(0x3ba),'center',_0x1e891c(0x287)]['includes'](_0x527f2c))_0x168230=Math[_0x1e891c(0x301)]((this['height']-_0x2aea41[_0x1e891c(0x3c3)])/0x2);else[_0x1e891c(0x265),'down',_0x1e891c(0x275)][_0x1e891c(0x315)](_0x527f2c)&&(_0x168230=Math[_0x1e891c(0x301)](this['height']-_0x2aea41[_0x1e891c(0x3c3)]-_0x18e588));this[_0x1e891c(0x395)][_0x1e891c(0x451)](_0x319cef,_0x45b1c8,_0x168230);},Sprite_Picture[_0x2c6443(0x272)][_0x2c6443(0x21a)]=function(){const _0x5c77b3=_0x2c6443;if(!this[_0x5c77b3(0x395)])return;if(!this[_0x5c77b3(0x2cf)])return;this['_pictureTextSprite']['bitmap']=this[_0x5c77b3(0x395)]['contents'];},VisuMZ[_0x2c6443(0x3ca)]['Window_Base_initialize']=Window_Base['prototype']['initialize'],Window_Base[_0x2c6443(0x272)][_0x2c6443(0x2bf)]=function(_0x1deaf5){const _0x240373=_0x2c6443;this[_0x240373(0x216)](_0x1deaf5),VisuMZ[_0x240373(0x3ca)][_0x240373(0x325)][_0x240373(0x369)](this,_0x1deaf5);},Window_Base['prototype'][_0x2c6443(0x216)]=function(_0x41c5df){const _0x5854d8=_0x2c6443;this[_0x5854d8(0x3d8)](),this[_0x5854d8(0x450)](),this['registerResetRect'](_0x41c5df);},Window_Base['prototype'][_0x2c6443(0x3d8)]=function(){const _0x4b2201=_0x2c6443;this[_0x4b2201(0x28d)]('default');},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x28d)]=function(_0x2d400f){this['_textAlignment']=_0x2d400f;},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x3ea)]=function(){return this['_textAlignment'];},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x2e1)]=Window_Base[_0x2c6443(0x272)][_0x2c6443(0x1f7)],Window_Base[_0x2c6443(0x272)][_0x2c6443(0x1f7)]=function(_0x3608b4){const _0x50d3b8=_0x2c6443;return this[_0x50d3b8(0x450)](),VisuMZ[_0x50d3b8(0x3ca)][_0x50d3b8(0x2e1)]['call'](this,_0x3608b4);},Window_Base['prototype'][_0x2c6443(0x3f7)]=function(_0x109c0e){const _0x592c63=_0x2c6443;return VisuMZ['MessageCore'][_0x592c63(0x2e1)][_0x592c63(0x369)](this,_0x109c0e);},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x379)]=Window_Base[_0x2c6443(0x272)][_0x2c6443(0x2d3)],Window_Base[_0x2c6443(0x272)][_0x2c6443(0x2d3)]=function(_0x49b0c1){const _0x300c1b=_0x2c6443;VisuMZ['MessageCore'][_0x300c1b(0x379)]['call'](this,_0x49b0c1);if(_0x49b0c1['drawing'])this['setTextAlignment'](_0x300c1b(0x43c));},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x450)]=function(){const _0x5b2108=_0x2c6443;this[_0x5b2108(0x240)](![]);},Window_Base['prototype'][_0x2c6443(0x3cf)]=function(){const _0x48f4ba=_0x2c6443;return this[_0x48f4ba(0x458)];},Window_Base['prototype']['setWordWrap']=function(_0xc5df1c){const _0x47e3bc=_0x2c6443;return this[_0x47e3bc(0x458)]=_0xc5df1c,'';},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x32e)]=function(_0x248abd){const _0x22a231=_0x2c6443;this[_0x22a231(0x23e)]=JsonEx['makeDeepCopy'](_0x248abd);},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x3d4)]=function(){const _0x22d729=_0x2c6443;this[_0x22d729(0x305)][_0x22d729(0x329)]=$gameSystem[_0x22d729(0x372)](),this[_0x22d729(0x305)][_0x22d729(0x27e)]=$gameSystem['mainFontSize'](),this[_0x22d729(0x305)][_0x22d729(0x3b2)]=![],this['contents'][_0x22d729(0x2a9)]=![],this['resetTextColor']();},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x2f7)]=function(){const _0x23c13d=_0x2c6443;this[_0x23c13d(0x361)](ColorManager['normalColor']()),this['changeOutlineColor'](ColorManager[_0x23c13d(0x2c1)]());const _0x51863c=VisuMZ[_0x23c13d(0x3ca)][_0x23c13d(0x306)][_0x23c13d(0x40d)];_0x51863c[_0x23c13d(0x31e)]===undefined&&(_0x51863c[_0x23c13d(0x31e)]=0x3),this[_0x23c13d(0x305)][_0x23c13d(0x30b)]=_0x51863c[_0x23c13d(0x31e)],this[_0x23c13d(0x311)](![]);},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x311)]=function(_0x22676d){const _0x2c1b82=_0x2c6443;this[_0x2c1b82(0x37c)]=_0x22676d;},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x409)]=function(){const _0x4e041e=_0x2c6443;return this[_0x4e041e(0x37c)];},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x25c)]=function(){return![];},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x393)]=function(){const _0x36a81e=_0x2c6443,_0x5f67cd=[_0x36a81e(0x329),_0x36a81e(0x27e),_0x36a81e(0x3b2),_0x36a81e(0x2a9),_0x36a81e(0x365),_0x36a81e(0x3d7),_0x36a81e(0x30b),_0x36a81e(0x44e)];let _0x9f04ce={};for(const _0x1da8b9 of _0x5f67cd){_0x9f04ce[_0x1da8b9]=this[_0x36a81e(0x305)][_0x1da8b9];}return _0x9f04ce;},Window_Base['prototype']['returnPreservedFontSettings']=function(_0x31a477){const _0x29abf7=_0x2c6443;for(const _0xb1248 in _0x31a477){this[_0x29abf7(0x305)][_0xb1248]=_0x31a477[_0xb1248];}},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x303)]=Window_Base[_0x2c6443(0x272)]['update'],Window_Base['prototype'][_0x2c6443(0x282)]=function(){const _0x16c2ec=_0x2c6443;VisuMZ['MessageCore'][_0x16c2ec(0x303)]['call'](this),this[_0x16c2ec(0x3c6)]();},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x2cd)]=function(){return![];},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x3c6)]=function(){const _0x7789d7=_0x2c6443;this[_0x7789d7(0x392)]>0x0&&(this[_0x7789d7(0x2cd)]()&&(this['x']=this[_0x7789d7(0x259)](this['x'],this[_0x7789d7(0x32a)]),this['y']=this[_0x7789d7(0x259)](this['y'],this[_0x7789d7(0x25b)]),this[_0x7789d7(0x327)]=this[_0x7789d7(0x259)](this[_0x7789d7(0x327)],this[_0x7789d7(0x264)]),this[_0x7789d7(0x3c3)]=this[_0x7789d7(0x259)](this[_0x7789d7(0x3c3)],this[_0x7789d7(0x34d)]),this[_0x7789d7(0x2ce)]()),this['_moveDuration']--);},Window_Base[_0x2c6443(0x272)]['clampPlacementPosition']=function(_0x5ab9d0,_0x39f053){const _0x48af46=_0x2c6443;!_0x5ab9d0&&(this['width']=Math[_0x48af46(0x291)](this['width'],Graphics[_0x48af46(0x327)]),this['height']=Math['min'](this['height'],Graphics['height']));if(!_0x39f053){const _0x532ccf=-(Math[_0x48af46(0x301)](Graphics['width']-Graphics[_0x48af46(0x200)])/0x2),_0x23af8f=_0x532ccf+Graphics[_0x48af46(0x327)]-this[_0x48af46(0x327)],_0x1fc605=-(Math['floor'](Graphics['height']-Graphics[_0x48af46(0x382)])/0x2),_0x51a7a7=_0x1fc605+Graphics['height']-this[_0x48af46(0x3c3)];this['x']=this['x'][_0x48af46(0x2de)](_0x532ccf,_0x23af8f),this['y']=this['y']['clamp'](_0x1fc605,_0x51a7a7);}},Window_Base[_0x2c6443(0x272)]['applyMoveEasing']=function(_0x226774,_0x5e816e){const _0x5e0349=_0x2c6443,_0x4d8425=this[_0x5e0349(0x392)],_0x383839=this[_0x5e0349(0x347)],_0x3170b3=this[_0x5e0349(0x1f4)]((_0x383839-_0x4d8425)/_0x383839),_0x8b6af5=this[_0x5e0349(0x1f4)]((_0x383839-_0x4d8425+0x1)/_0x383839),_0x4b2e3f=(_0x226774-_0x5e816e*_0x3170b3)/(0x1-_0x3170b3);return _0x4b2e3f+(_0x5e816e-_0x4b2e3f)*_0x8b6af5;},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x1f4)]=function(_0xc9a326){const _0x10c995=_0x2c6443,_0xa9886e=0x2;switch(this[_0x10c995(0x2c9)]){case 0x0:return _0xc9a326;case 0x1:return this[_0x10c995(0x1fa)](_0xc9a326,_0xa9886e);case 0x2:return this[_0x10c995(0x276)](_0xc9a326,_0xa9886e);case 0x3:return this[_0x10c995(0x402)](_0xc9a326,_0xa9886e);default:return Imported[_0x10c995(0x452)]?VisuMZ[_0x10c995(0x259)](_0xc9a326,this['_moveEasingType']):_0xc9a326;}},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x26e)]=function(_0x598179,_0x2a4ccf,_0xbce5ad,_0x317f3f,_0x474dc6,_0x1679e0){const _0x47eac0=_0x2c6443;this[_0x47eac0(0x32a)]=_0x598179,this[_0x47eac0(0x25b)]=_0x2a4ccf,this[_0x47eac0(0x264)]=_0xbce5ad||this[_0x47eac0(0x327)],this[_0x47eac0(0x34d)]=_0x317f3f||this[_0x47eac0(0x3c3)],this[_0x47eac0(0x392)]=_0x474dc6||0x1;if(this[_0x47eac0(0x392)]<=0x0)this['_moveDuration']=0x1;this[_0x47eac0(0x347)]=this[_0x47eac0(0x392)],this[_0x47eac0(0x2c9)]=_0x1679e0||0x0;if(_0x474dc6<=0x0)this['updateMove']();},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x3ff)]=function(_0x474e22,_0x48f98b,_0x1f01f2,_0x24b810,_0x1b291d,_0x143b83){const _0x486e29=_0x2c6443;this[_0x486e29(0x32a)]=this['x']+_0x474e22,this['_moveTargetY']=this['y']+_0x48f98b,this[_0x486e29(0x264)]=this[_0x486e29(0x327)]+(_0x1f01f2||0x0),this[_0x486e29(0x34d)]=this[_0x486e29(0x3c3)]+(_0x24b810||0x0),this[_0x486e29(0x392)]=_0x1b291d||0x1;if(this[_0x486e29(0x392)]<=0x0)this[_0x486e29(0x392)]=0x1;this[_0x486e29(0x347)]=this['_moveDuration'],this[_0x486e29(0x2c9)]=_0x143b83||0x0;if(_0x1b291d<=0x0)this[_0x486e29(0x3c6)]();},Window_Base[_0x2c6443(0x272)]['resetRect']=function(_0x46cff9,_0x40063e){const _0x5a5796=_0x2c6443;this[_0x5a5796(0x26e)](this[_0x5a5796(0x23e)]['x'],this[_0x5a5796(0x23e)]['y'],this[_0x5a5796(0x23e)][_0x5a5796(0x327)],this[_0x5a5796(0x23e)][_0x5a5796(0x3c3)],_0x46cff9,_0x40063e);},VisuMZ['MessageCore'][_0x2c6443(0x320)]=Window_Base[_0x2c6443(0x272)][_0x2c6443(0x361)],Window_Base[_0x2c6443(0x272)][_0x2c6443(0x361)]=function(_0x2f941f){const _0x35a3e1=_0x2c6443;if(this[_0x35a3e1(0x409)]())return;_0x2f941f=_0x2f941f[_0x35a3e1(0x39e)](/\,/g,''),this[_0x35a3e1(0x44d)]=this['_textColorStack']||[],this[_0x35a3e1(0x44d)][_0x35a3e1(0x3b9)](this[_0x35a3e1(0x305)][_0x35a3e1(0x365)]),VisuMZ['MessageCore'][_0x35a3e1(0x320)][_0x35a3e1(0x369)](this,_0x2f941f);},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x387)]=function(_0x366b40){const _0x288cfa=_0x2c6443;this[_0x288cfa(0x385)](_0x366b40);if(this[_0x288cfa(0x409)]())return;_0x366b40[_0x288cfa(0x33c)]&&(this[_0x288cfa(0x44d)]=this['_textColorStack']||[],this[_0x288cfa(0x305)]['textColor']=this[_0x288cfa(0x44d)][_0x288cfa(0x297)]()||ColorManager['normalColor']());},Window_Base['prototype'][_0x2c6443(0x1ef)]=function(_0x45249d){const _0x41a1ed=_0x2c6443;return _0x45249d=this['convertTextMacros'](_0x45249d),_0x45249d=this['convertBackslashCharacters'](_0x45249d),_0x45249d=this[_0x41a1ed(0x2d1)](_0x45249d),_0x45249d=this['convertButtonAssistEscapeCharacters'](_0x45249d),_0x45249d=this[_0x41a1ed(0x2af)](_0x45249d),_0x45249d=this['convertShowChoiceEscapeCodes'](_0x45249d),_0x45249d=this['convertFontSettingsEscapeCharacters'](_0x45249d),_0x45249d=this[_0x41a1ed(0x1ed)](_0x45249d),_0x45249d=this['convertLockColorsEscapeCharacters'](_0x45249d),_0x45249d=this[_0x41a1ed(0x446)](_0x45249d),_0x45249d=this['convertHardcodedEscapeReplacements'](_0x45249d),_0x45249d=this[_0x41a1ed(0x202)](_0x45249d),_0x45249d=this[_0x41a1ed(0x232)](_0x45249d),_0x45249d=this[_0x41a1ed(0x2c4)](_0x45249d),_0x45249d=this[_0x41a1ed(0x2d1)](_0x45249d),_0x45249d=this[_0x41a1ed(0x35c)](_0x45249d),_0x45249d=this[_0x41a1ed(0x3ac)](_0x45249d),_0x45249d;},Window_Base['prototype'][_0x2c6443(0x20c)]=function(_0x34e4f6){const _0xd7f6b8=_0x2c6443;this['_textMacroFound']=![];for(const _0x3d0f48 of VisuMZ['MessageCore']['Settings'][_0xd7f6b8(0x22d)]){_0x34e4f6[_0xd7f6b8(0x22e)](_0x3d0f48['textCodeCheck'])&&(this[_0xd7f6b8(0x34e)]=!![],_0x34e4f6=_0x34e4f6[_0xd7f6b8(0x39e)](_0x3d0f48[_0xd7f6b8(0x2a8)],_0x3d0f48[_0xd7f6b8(0x3b7)]['bind'](this)));}return _0x34e4f6;},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x244)]=function(_0x4c77df){const _0x3a3763=_0x2c6443;return _0x4c77df=_0x4c77df[_0x3a3763(0x39e)](/\\/g,'\x1b'),_0x4c77df=_0x4c77df[_0x3a3763(0x39e)](/\x1b\x1b/g,'\x5c'),_0x4c77df;},Window_Base[_0x2c6443(0x272)]['convertVariableEscapeCharacters']=function(_0x4457eb){const _0x812de=_0x2c6443;for(;;){if(_0x4457eb['match'](/\\V\[(\d+)\]/gi))_0x4457eb=_0x4457eb['replace'](/\\V\[(\d+)\]/gi,(_0x4d7441,_0x3e78ab)=>this['convertBackslashCharacters'](String($gameVariables[_0x812de(0x27c)](parseInt(_0x3e78ab)))));else{if(_0x4457eb[_0x812de(0x22e)](/\x1bV\[(\d+)\]/gi))_0x4457eb=_0x4457eb[_0x812de(0x39e)](/\x1bV\[(\d+)\]/gi,(_0x1aaf73,_0x1b8dd2)=>this['convertBackslashCharacters'](String($gameVariables['value'](parseInt(_0x1b8dd2)))));else break;}}return _0x4457eb;},Window_Base[_0x2c6443(0x272)]['convertButtonAssistEscapeCharacters']=function(_0x4866bf){const _0xcd6b13=_0x2c6443;return Imported[_0xcd6b13(0x452)]&&(_0x4866bf=_0x4866bf[_0xcd6b13(0x39e)](/<Up (?:KEY|BUTTON)>/gi,this[_0xcd6b13(0x242)]('up')),_0x4866bf=_0x4866bf[_0xcd6b13(0x39e)](/<Left (?:KEY|BUTTON)>/gi,this[_0xcd6b13(0x242)](_0xcd6b13(0x3ba))),_0x4866bf=_0x4866bf[_0xcd6b13(0x39e)](/<Right (?:KEY|BUTTON)>/gi,this[_0xcd6b13(0x242)](_0xcd6b13(0x287))),_0x4866bf=_0x4866bf[_0xcd6b13(0x39e)](/<Down (?:KEY|BUTTON)>/gi,this['convertButtonAssistText']('down')),_0x4866bf=_0x4866bf[_0xcd6b13(0x39e)](/<Ok (?:KEY|BUTTON)>/gi,this[_0xcd6b13(0x242)]('ok')),_0x4866bf=_0x4866bf[_0xcd6b13(0x39e)](/<Cancel (?:KEY|BUTTON)>/gi,this[_0xcd6b13(0x242)]('cancel')),_0x4866bf=_0x4866bf[_0xcd6b13(0x39e)](/<Menu (?:KEY|BUTTON)>/gi,this[_0xcd6b13(0x242)](_0xcd6b13(0x3b6))),_0x4866bf=_0x4866bf[_0xcd6b13(0x39e)](/<Shift (?:KEY|BUTTON)>/gi,this[_0xcd6b13(0x242)](_0xcd6b13(0x297))),_0x4866bf=_0x4866bf[_0xcd6b13(0x39e)](/<(?:PAGEUP|PAGE UP) (?:KEY|BUTTON)>/gi,this[_0xcd6b13(0x242)]('pageup')),_0x4866bf=_0x4866bf['replace'](/<(?:PAGEDOWN|PAGEDN|PAGE DOWN) (?:KEY|BUTTON)>/gi,this[_0xcd6b13(0x242)]('pagedown'))),_0x4866bf;},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x242)]=function(_0x20e9eb){const _0x2066af=_0x2c6443;let _0x2848cc=TextManager[_0x2066af(0x3c0)](_0x20e9eb)||'';return _0x2848cc=this['convertBackslashCharacters'](_0x2848cc),_0x2848cc=this[_0x2066af(0x2d1)](_0x2848cc),_0x2848cc[_0x2066af(0x3bf)]();},Window_Base[_0x2c6443(0x272)]['preConvertEscapeCharacters']=function(_0x768da){const _0x179a47=_0x2c6443;return this[_0x179a47(0x271)](),_0x768da;},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x2c4)]=function(_0x5b3c39){return _0x5b3c39;},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x3f4)]=function(_0x44cb1d){const _0x46a243=_0x2c6443;return _0x44cb1d=_0x44cb1d[_0x46a243(0x39e)](/<(?:SHOW|HIDE|DISABLE|ENABLE)>/gi,''),_0x44cb1d=_0x44cb1d[_0x46a243(0x39e)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi,''),_0x44cb1d=_0x44cb1d[_0x46a243(0x39e)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:ALL|ANY)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi,''),_0x44cb1d=_0x44cb1d['replace'](/<CHOICE WIDTH:[ ](\d+)>/gi,''),_0x44cb1d=_0x44cb1d[_0x46a243(0x39e)](/<CHOICE INDENT:[ ](\d+)>/gi,''),_0x44cb1d;},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x235)]=function(_0x1b2ac7){const _0x51c9d8=_0x2c6443;return _0x1b2ac7=_0x1b2ac7[_0x51c9d8(0x39e)](/<B>/gi,'\x1bBOLD[1]'),_0x1b2ac7=_0x1b2ac7[_0x51c9d8(0x39e)](/<\/B>/gi,_0x51c9d8(0x3a0)),_0x1b2ac7=_0x1b2ac7[_0x51c9d8(0x39e)](/<I>/gi,_0x51c9d8(0x39c)),_0x1b2ac7=_0x1b2ac7[_0x51c9d8(0x39e)](/<\/I>/gi,_0x51c9d8(0x2a6)),_0x1b2ac7;},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x1ed)]=function(_0x1fa2d1){const _0x4f7698=_0x2c6443;return _0x1fa2d1=_0x1fa2d1[_0x4f7698(0x39e)](/<LEFT>/gi,_0x4f7698(0x1df)),_0x1fa2d1=_0x1fa2d1[_0x4f7698(0x39e)](/<\/LEFT>/gi,_0x4f7698(0x2a1)),_0x1fa2d1=_0x1fa2d1[_0x4f7698(0x39e)](/<CENTER>/gi,'\x1bTEXTALIGNMENT[2]'),_0x1fa2d1=_0x1fa2d1[_0x4f7698(0x39e)](/<\/CENTER>/gi,_0x4f7698(0x2a1)),_0x1fa2d1=_0x1fa2d1[_0x4f7698(0x39e)](/<RIGHT>/gi,_0x4f7698(0x38e)),_0x1fa2d1=_0x1fa2d1['replace'](/<\/RIGHT>/gi,'\x1bTEXTALIGNMENT[0]'),_0x1fa2d1;},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x33d)]=function(_0x100bbb){const _0x10d747=_0x2c6443;return _0x100bbb=_0x100bbb[_0x10d747(0x39e)](/<COLORLOCK>/gi,'\x1bCOLORLOCK[1]'),_0x100bbb=_0x100bbb[_0x10d747(0x39e)](/<\/COLORLOCK>/gi,_0x10d747(0x462)),_0x100bbb=_0x100bbb['replace'](/\(\(\(/gi,'\x1bCOLORLOCK[1]'),_0x100bbb=_0x100bbb[_0x10d747(0x39e)](/\)\)\)/gi,_0x10d747(0x462)),_0x100bbb;},Window_Base[_0x2c6443(0x272)]['convertBaseEscapeCharacters']=function(_0xc4f925){const _0x589af3=_0x2c6443;return _0xc4f925=_0xc4f925[_0x589af3(0x39e)](/\x1bN\[(\d+)\]/gi,(_0x39d5b5,_0x28aa69)=>this[_0x589af3(0x234)](parseInt(_0x28aa69))),_0xc4f925=_0xc4f925[_0x589af3(0x39e)](/\x1bP\[(\d+)\]/gi,(_0x3b2be4,_0x4c6595)=>this[_0x589af3(0x296)](parseInt(_0x4c6595))),_0xc4f925=_0xc4f925[_0x589af3(0x39e)](/\x1bG/gi,TextManager[_0x589af3(0x40c)]),_0xc4f925;},Window_Base['prototype'][_0x2c6443(0x3e3)]=function(_0x110f82){const _0x569bb8=_0x2c6443;return _0x110f82=_0x110f82[_0x569bb8(0x39e)](/\<(?:BATTLE|CURRENT BATTLE) TARGET\>/gi,this[_0x569bb8(0x20f)]()),_0x110f82=_0x110f82[_0x569bb8(0x39e)](/\<(?:BATTLE|CURRENT BATTLE) (?:USER|SUBJECT)\>/gi,this[_0x569bb8(0x39f)]()),_0x110f82=_0x110f82[_0x569bb8(0x39e)](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION)\>/gi,this[_0x569bb8(0x23b)](!![])),_0x110f82=_0x110f82['replace'](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION) NAME\>/gi,this[_0x569bb8(0x23b)](![])),_0x110f82;},Window_Base['prototype'][_0x2c6443(0x20f)]=function(){const _0x56662f=_0x2c6443;if(!SceneManager[_0x56662f(0x360)]())return'';if(BattleManager['_target'])return BattleManager[_0x56662f(0x357)][_0x56662f(0x206)]();if(BattleManager[_0x56662f(0x424)][0x0])return BattleManager['_targets'][0x0]['name']();return'';},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x39f)]=function(){const _0x9e1d2f=_0x2c6443;if(!SceneManager['isSceneBattle']())return'';let _0x3ff15c=null;return _0x3ff15c=BattleManager['_subject'],!_0x3ff15c&&BattleManager[_0x9e1d2f(0x22c)]()&&(_0x3ff15c=BattleManager[_0x9e1d2f(0x3fe)]()),_0x3ff15c?_0x3ff15c[_0x9e1d2f(0x206)]():'';},Window_Base[_0x2c6443(0x272)]['battleActionName']=function(_0x203695){const _0x2a4d46=_0x2c6443;if(!SceneManager[_0x2a4d46(0x360)]())return'';let _0x41688b=BattleManager['_action']||null;!_0x41688b&&BattleManager['isInputting']()&&(_0x41688b=BattleManager[_0x2a4d46(0x444)]());if(_0x41688b&&_0x41688b['item']()){let _0x2bc0cf='';if(_0x203695)_0x2bc0cf+=_0x2a4d46(0x435)[_0x2a4d46(0x233)](_0x41688b[_0x2a4d46(0x367)]()[_0x2a4d46(0x3e4)]);return _0x2bc0cf+=_0x41688b['item']()[_0x2a4d46(0x206)],_0x2bc0cf;}return'';},Window_Base[_0x2c6443(0x272)]['convertMessageCoreEscapeActions']=function(_0x2e7052){const _0x2a4eae=_0x2c6443;for(const _0x24a316 of VisuMZ[_0x2a4eae(0x3ca)][_0x2a4eae(0x306)][_0x2a4eae(0x3f8)]){_0x2e7052[_0x2a4eae(0x22e)](_0x24a316[_0x2a4eae(0x2a8)])&&(_0x2e7052=_0x2e7052[_0x2a4eae(0x39e)](_0x24a316['textCodeCheck'],_0x24a316['textCodeResult']),_0x2e7052=this[_0x2a4eae(0x2d1)](_0x2e7052));}return _0x2e7052;},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x232)]=function(_0x2e61d0){const _0x5881d5=_0x2c6443;for(const _0x2a7d44 of VisuMZ[_0x5881d5(0x3ca)][_0x5881d5(0x306)][_0x5881d5(0x351)]){_0x2e61d0['match'](_0x2a7d44[_0x5881d5(0x2a8)])&&(_0x2e61d0=_0x2e61d0[_0x5881d5(0x39e)](_0x2a7d44['textCodeCheck'],_0x2a7d44[_0x5881d5(0x3b7)]['bind'](this)),_0x2e61d0=this['convertVariableEscapeCharacters'](_0x2e61d0));}return _0x2e61d0;},Window_Base[_0x2c6443(0x272)]['actorName']=function(_0x565f0f){const _0x53c4b6=_0x2c6443,_0x77f6f5=_0x565f0f>=0x1?$gameActors[_0x53c4b6(0x3fe)](_0x565f0f):null,_0x2722d1=_0x77f6f5?_0x77f6f5[_0x53c4b6(0x206)]():'',_0x117eef=Number(VisuMZ[_0x53c4b6(0x3ca)][_0x53c4b6(0x306)][_0x53c4b6(0x237)][_0x53c4b6(0x1e3)]);return this['isAutoColorAffected']()&&_0x117eef!==0x0?'\x1bC[%1]%2\x1bPREVCOLOR[0]'[_0x53c4b6(0x233)](_0x117eef,_0x2722d1):_0x2722d1;},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x296)]=function(_0x4b74de){const _0x5628c9=_0x2c6443,_0x4f8995=_0x4b74de>=0x1?$gameParty[_0x5628c9(0x31f)]()[_0x4b74de-0x1]:null,_0x463a71=_0x4f8995?_0x4f8995[_0x5628c9(0x206)]():'',_0x41948c=Number(VisuMZ['MessageCore']['Settings'][_0x5628c9(0x237)][_0x5628c9(0x1e3)]);return this[_0x5628c9(0x25c)]()&&_0x41948c!==0x0?_0x5628c9(0x2cb)[_0x5628c9(0x233)](_0x41948c,_0x463a71):_0x463a71;},Window_Base['prototype'][_0x2c6443(0x35c)]=function(_0x424d5a){const _0x1f84ec=_0x2c6443;return this[_0x1f84ec(0x25c)]()&&(_0x424d5a=this[_0x1f84ec(0x334)](_0x424d5a),_0x424d5a=this[_0x1f84ec(0x442)](_0x424d5a)),_0x424d5a;},Window_Base['prototype'][_0x2c6443(0x334)]=function(_0x14774d){const _0x52303b=_0x2c6443;for(autoColor of VisuMZ[_0x52303b(0x3ca)][_0x52303b(0x374)]){_0x14774d=_0x14774d[_0x52303b(0x39e)](autoColor[0x0],autoColor[0x1]);}return _0x14774d;},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x463)]=function(){const _0x4a372a=_0x2c6443;this[_0x4a372a(0x333)]=[];},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x271)]=function(){const _0x492e5d=_0x2c6443;this[_0x492e5d(0x463)]();const _0x1b8e87=VisuMZ[_0x492e5d(0x3ca)][_0x492e5d(0x306)][_0x492e5d(0x237)],_0x56627c=_0x1b8e87[_0x492e5d(0x1e3)];if(_0x56627c<=0x0)return;for(const _0x27042f of $gameActors[_0x492e5d(0x286)]){if(!_0x27042f)continue;const _0x37671b=_0x27042f[_0x492e5d(0x206)]();if(_0x37671b['trim']()[_0x492e5d(0x2f8)]<=0x0)continue;if(/^\d+$/[_0x492e5d(0x24f)](_0x37671b))continue;if(_0x37671b[_0x492e5d(0x22e)](/-----/i))continue;let _0x55661d=VisuMZ[_0x492e5d(0x3ca)][_0x492e5d(0x386)](_0x37671b);const _0x509249=new RegExp('\x5cb'+_0x55661d+'\x5cb','g'),_0x2b9da6=_0x492e5d(0x2cb)['format'](_0x56627c,_0x37671b);this[_0x492e5d(0x333)]['push']([_0x509249,_0x2b9da6]);}},Window_Base['prototype']['processActorNameAutoColorChanges']=function(_0x33e9a6){const _0x26daca=_0x2c6443;this[_0x26daca(0x333)]===undefined&&this[_0x26daca(0x271)]();for(autoColor of this[_0x26daca(0x333)]){_0x33e9a6=_0x33e9a6[_0x26daca(0x39e)](autoColor[0x0],autoColor[0x1]);}return _0x33e9a6;},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x41b)]=function(_0x30db53,_0xfb042e,_0x240aa8){const _0x45927f=_0x2c6443;if(!_0x30db53)return'';const _0x5aa6cf=_0x30db53[_0xfb042e];let _0x5454bb='';if(_0x5aa6cf&&_0x240aa8&&_0x5aa6cf[_0x45927f(0x3e4)]){const _0x3bd57c=_0x45927f(0x2ad);_0x5454bb=_0x3bd57c[_0x45927f(0x233)](_0x5aa6cf['iconIndex'],_0x5aa6cf[_0x45927f(0x206)]);}else _0x5aa6cf?_0x5454bb=_0x5aa6cf[_0x45927f(0x206)]:_0x5454bb='';return this[_0x45927f(0x25c)]()&&(_0x5454bb=this[_0x45927f(0x33f)](_0x5454bb,_0x30db53)),_0x5454bb;},Window_Base['prototype']['lastGainedObjectName']=function(_0x147cb6){const _0x1adcf0=_0x2c6443,_0x5709b9=$gameParty[_0x1adcf0(0x420)]();if(_0x5709b9['id']<0x0)return'';let _0x2c65d1=null;if(_0x5709b9[_0x1adcf0(0x3fd)]===0x0)_0x2c65d1=$dataItems[_0x5709b9['id']];if(_0x5709b9[_0x1adcf0(0x3fd)]===0x1)_0x2c65d1=$dataWeapons[_0x5709b9['id']];if(_0x5709b9[_0x1adcf0(0x3fd)]===0x2)_0x2c65d1=$dataArmors[_0x5709b9['id']];if(!_0x2c65d1)return'';return _0x147cb6?_0x1adcf0(0x2ad)[_0x1adcf0(0x233)](_0x2c65d1[_0x1adcf0(0x3e4)],_0x2c65d1['name']):_0x2c65d1[_0x1adcf0(0x206)];},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x2fe)]=function(){const _0x568620=_0x2c6443,_0x169a73=$gameParty['getLastGainedItemData']();if(_0x169a73['id']<=0x0)return'';return _0x169a73[_0x568620(0x443)];},Window_Base['prototype']['applyDatabaseAutoColor']=function(_0x15bd7a,_0x4d3503){const _0x11bae1=_0x2c6443,_0x49359c=VisuMZ['MessageCore'][_0x11bae1(0x306)][_0x11bae1(0x237)];let _0xd84c9a=0x0;if(_0x4d3503===$dataActors)_0xd84c9a=_0x49359c[_0x11bae1(0x1e3)];if(_0x4d3503===$dataClasses)_0xd84c9a=_0x49359c[_0x11bae1(0x21d)];if(_0x4d3503===$dataSkills)_0xd84c9a=_0x49359c[_0x11bae1(0x28f)];if(_0x4d3503===$dataItems)_0xd84c9a=_0x49359c[_0x11bae1(0x212)];if(_0x4d3503===$dataWeapons)_0xd84c9a=_0x49359c[_0x11bae1(0x2b8)];if(_0x4d3503===$dataArmors)_0xd84c9a=_0x49359c[_0x11bae1(0x404)];if(_0x4d3503===$dataEnemies)_0xd84c9a=_0x49359c[_0x11bae1(0x22b)];if(_0x4d3503===$dataStates)_0xd84c9a=_0x49359c[_0x11bae1(0x342)];return _0xd84c9a>0x0&&(_0x15bd7a=_0x11bae1(0x2cb)['format'](_0xd84c9a,_0x15bd7a)),_0x15bd7a;},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x3ac)]=function(_0x19c9be){const _0x20c318=_0x2c6443;_0x19c9be=_0x19c9be[_0x20c318(0x39e)](/<(?:WORDWRAP|WORD WRAP)>/gi,(_0x249455,_0x17ce1d)=>this['setWordWrap'](!![])),_0x19c9be=_0x19c9be[_0x20c318(0x39e)](/<(?:NOWORDWRAP|NO WORD WRAP)>/gi,(_0x49c417,_0x707d1e)=>this['setWordWrap'](![])),_0x19c9be=_0x19c9be[_0x20c318(0x39e)](/<\/(?:WORDWRAP|WORD WRAP)>/gi,(_0x4da249,_0xd322fd)=>this['setWordWrap'](![]));if(_0x19c9be[_0x20c318(0x22e)](Window_Message[_0x20c318(0x2be)]))this[_0x20c318(0x240)](![]);else _0x19c9be[_0x20c318(0x22e)](Window_Message['_autoPosRegExp'])&&this[_0x20c318(0x240)](![]);if(!this[_0x20c318(0x3cf)]())return _0x19c9be;if(_0x19c9be[_0x20c318(0x2f8)]<=0x0)return _0x19c9be;return VisuMZ['MessageCore'][_0x20c318(0x306)][_0x20c318(0x389)]['LineBreakSpace']?(_0x19c9be=_0x19c9be['replace'](/[\n\r]+/g,'\x20'),_0x19c9be=_0x19c9be[_0x20c318(0x39e)](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a')):(_0x19c9be=_0x19c9be[_0x20c318(0x39e)](/[\n\r]+/g,''),_0x19c9be=_0x19c9be[_0x20c318(0x39e)](/<(?:BR|LINEBREAK)>/gi,'\x0a')),_0x19c9be=this[_0x20c318(0x2e0)](_0x19c9be),_0x19c9be=_0x19c9be[_0x20c318(0x419)]('\x20')[_0x20c318(0x201)](_0x20c318(0x3d1)),_0x19c9be=_0x19c9be[_0x20c318(0x39e)](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x19c9be=_0x19c9be[_0x20c318(0x39e)](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x19c9be;},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x2e0)]=function(_0x58c0f4){return _0x58c0f4;},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x3cd)]=Window_Base[_0x2c6443(0x272)][_0x2c6443(0x2b6)],Window_Base[_0x2c6443(0x272)][_0x2c6443(0x2b6)]=function(_0x234b89){const _0x5433ca=_0x2c6443;VisuMZ[_0x5433ca(0x3ca)]['Window_Base_processNewLine'][_0x5433ca(0x369)](this,_0x234b89),this[_0x5433ca(0x3c5)](_0x234b89);},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x40e)]=Window_Base[_0x2c6443(0x272)]['processControlCharacter'],Window_Base[_0x2c6443(0x272)]['processControlCharacter']=function(_0x590737,_0x5a550a){const _0x25f38a=_0x2c6443;VisuMZ[_0x25f38a(0x3ca)]['Window_Base_processControlCharacter']['call'](this,_0x590737,_0x5a550a),_0x5a550a===_0x25f38a(0x3d1)&&this[_0x25f38a(0x2a2)](_0x590737);},Window_Base[_0x2c6443(0x272)]['obtainEscapeString']=function(_0x4582e7){const _0x5a9062=_0x2c6443;var _0x567308=/^\<(.*?)\>/['exec'](_0x4582e7[_0x5a9062(0x428)]['slice'](_0x4582e7[_0x5a9062(0x317)]));return _0x567308?(_0x4582e7[_0x5a9062(0x317)]+=_0x567308[0x0]['length'],String(_0x567308[0x0][_0x5a9062(0x377)](0x1,_0x567308[0x0]['length']-0x1))):'';},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x332)]=Window_Base[_0x2c6443(0x272)][_0x2c6443(0x3fb)],Window_Base[_0x2c6443(0x272)][_0x2c6443(0x3fb)]=function(_0x2b97b4,_0x58baa0){const _0x29ceed=_0x2c6443;switch(_0x2b97b4){case'C':_0x58baa0[_0x29ceed(0x33c)]?VisuMZ[_0x29ceed(0x3ca)][_0x29ceed(0x332)]['call'](this,_0x2b97b4,_0x58baa0):this[_0x29ceed(0x385)](_0x58baa0);break;case'I':case'{':case'}':VisuMZ[_0x29ceed(0x3ca)]['Window_Base_processEscapeCharacter'][_0x29ceed(0x369)](this,_0x2b97b4,_0x58baa0);break;case'FS':this[_0x29ceed(0x2a0)](_0x58baa0);break;case'PX':this['processPxTextCode'](_0x58baa0);break;case'PY':this[_0x29ceed(0x447)](_0x58baa0);break;case _0x29ceed(0x433):this[_0x29ceed(0x3b1)](this[_0x29ceed(0x385)](_0x58baa0));break;case _0x29ceed(0x27a):this[_0x29ceed(0x31a)](_0x58baa0);break;case _0x29ceed(0x42b):this[_0x29ceed(0x331)](_0x58baa0);break;case _0x29ceed(0x38b):this[_0x29ceed(0x380)](_0x58baa0);break;case _0x29ceed(0x39b):this['processFontChangeItalic'](this[_0x29ceed(0x385)](_0x58baa0));break;case _0x29ceed(0x2ca):this[_0x29ceed(0x26a)](_0x58baa0);break;case _0x29ceed(0x1dc):this[_0x29ceed(0x387)](_0x58baa0);break;case _0x29ceed(0x3f9):this[_0x29ceed(0x20b)](_0x58baa0);break;case _0x29ceed(0x274):this[_0x29ceed(0x1eb)](_0x58baa0);break;case _0x29ceed(0x26b):this[_0x29ceed(0x2a2)](_0x58baa0);break;default:this[_0x29ceed(0x38d)](_0x2b97b4,_0x58baa0);}},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x38d)]=function(_0x17c962,_0x5a620b){const _0x5ef2cd=_0x2c6443;for(const _0x2af9bb of VisuMZ[_0x5ef2cd(0x3ca)][_0x5ef2cd(0x306)][_0x5ef2cd(0x3f8)]){if(_0x2af9bb[_0x5ef2cd(0x3e5)]===_0x17c962){if(_0x2af9bb[_0x5ef2cd(0x2b3)]==='')this[_0x5ef2cd(0x385)](_0x5a620b);_0x2af9bb['ActionJS'][_0x5ef2cd(0x369)](this,_0x5a620b);if(this[_0x5ef2cd(0x42a)]===Window_Message){const _0x59f5d3=_0x2af9bb[_0x5ef2cd(0x2c8)]||0x0;if(_0x59f5d3>0x0)this[_0x5ef2cd(0x43f)](_0x59f5d3);}}}},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x35b)]=function(){const _0x234d72=_0x2c6443;this['contents'][_0x234d72(0x27e)]+=VisuMZ[_0x234d72(0x3ca)][_0x234d72(0x306)][_0x234d72(0x40d)][_0x234d72(0x2cc)],this['contents'][_0x234d72(0x27e)]=Math[_0x234d72(0x291)](this[_0x234d72(0x305)][_0x234d72(0x27e)],VisuMZ['MessageCore'][_0x234d72(0x306)][_0x234d72(0x40d)]['FontBiggerCap']);},Window_Base['prototype']['makeFontSmaller']=function(){const _0x2e88fe=_0x2c6443;this[_0x2e88fe(0x305)][_0x2e88fe(0x27e)]-=VisuMZ[_0x2e88fe(0x3ca)][_0x2e88fe(0x306)][_0x2e88fe(0x40d)][_0x2e88fe(0x2cc)],this[_0x2e88fe(0x305)][_0x2e88fe(0x27e)]=Math[_0x2e88fe(0x2d6)](this[_0x2e88fe(0x305)][_0x2e88fe(0x27e)],VisuMZ[_0x2e88fe(0x3ca)][_0x2e88fe(0x306)][_0x2e88fe(0x40d)][_0x2e88fe(0x207)]);},Window_Base[_0x2c6443(0x272)]['processFsTextCode']=function(_0x297776){const _0x489d61=_0x2c6443,_0xf6ea9d=this[_0x489d61(0x385)](_0x297776);this[_0x489d61(0x305)][_0x489d61(0x27e)]=_0xf6ea9d[_0x489d61(0x2de)](VisuMZ['MessageCore'][_0x489d61(0x306)][_0x489d61(0x40d)][_0x489d61(0x207)],VisuMZ[_0x489d61(0x3ca)][_0x489d61(0x306)]['General'][_0x489d61(0x355)]);},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x2f0)]=function(_0x456591){const _0x435684=_0x2c6443;let _0x2d07db=this[_0x435684(0x305)]['fontSize'];const _0x304071=/\x1b({|}|FS)(\[(\d+)])?/gi;for(;;){const _0x301e95=_0x304071[_0x435684(0x3ed)](_0x456591);if(!_0x301e95)break;const _0x581b32=String(_0x301e95[0x1])[_0x435684(0x42f)]();if(_0x581b32==='{')this[_0x435684(0x35b)]();else{if(_0x581b32==='}')this[_0x435684(0x352)]();else _0x581b32==='FS'&&(this[_0x435684(0x305)][_0x435684(0x27e)]=parseInt(_0x301e95[0x3])[_0x435684(0x2de)](VisuMZ[_0x435684(0x3ca)][_0x435684(0x306)][_0x435684(0x40d)][_0x435684(0x207)],VisuMZ[_0x435684(0x3ca)]['Settings'][_0x435684(0x40d)][_0x435684(0x355)]));}this['contents']['fontSize']>_0x2d07db&&(_0x2d07db=this[_0x435684(0x305)]['fontSize']);}return _0x2d07db;},Window_Base[_0x2c6443(0x272)]['processPxTextCode']=function(_0x2521c3){const _0x510913=_0x2c6443;_0x2521c3['x']=this[_0x510913(0x385)](_0x2521c3),VisuMZ[_0x510913(0x3ca)][_0x510913(0x306)]['General'][_0x510913(0x324)]&&(_0x2521c3['x']+=_0x2521c3['startX']);},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x447)]=function(_0x2c7727){const _0x4920a6=_0x2c6443;_0x2c7727['y']=this[_0x4920a6(0x385)](_0x2c7727),VisuMZ['MessageCore']['Settings'][_0x4920a6(0x40d)][_0x4920a6(0x324)]&&(_0x2c7727['y']+=_0x2c7727[_0x4920a6(0x273)]);},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x3b1)]=function(_0x2b83cb){const _0x30fe9a=_0x2c6443;this[_0x30fe9a(0x305)][_0x30fe9a(0x3b2)]=!!_0x2b83cb;},Window_Base['prototype'][_0x2c6443(0x2ee)]=function(_0x45a953){const _0xb5ab6d=_0x2c6443;this['contents'][_0xb5ab6d(0x2a9)]=!!_0x45a953;},Window_Base[_0x2c6443(0x272)]['processTextAlignmentChange']=function(_0x3d91f7){const _0x1197df=_0x2c6443,_0x510fdb=this[_0x1197df(0x385)](_0x3d91f7);if(!_0x3d91f7['drawing'])return;switch(_0x510fdb){case 0x0:this[_0x1197df(0x28d)](_0x1197df(0x43c));return;case 0x1:this[_0x1197df(0x28d)]('left');break;case 0x2:this['setTextAlignment'](_0x1197df(0x3f1));break;case 0x3:this['setTextAlignment'](_0x1197df(0x287));break;}this[_0x1197df(0x3c5)](_0x3d91f7);},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x3c5)]=function(_0x5f5160){const _0x4841f9=_0x2c6443;if(!_0x5f5160[_0x4841f9(0x33c)])return;if(_0x5f5160[_0x4841f9(0x2a3)])return;if(this['getTextAlignment']()===_0x4841f9(0x43c))return;let _0x1e9d46=_0x5f5160[_0x4841f9(0x428)][_0x4841f9(0x1e6)](_0x4841f9(0x3e7),_0x5f5160[_0x4841f9(0x317)]+0x1),_0x45f636=_0x5f5160[_0x4841f9(0x428)][_0x4841f9(0x1e6)]('\x0a',_0x5f5160[_0x4841f9(0x317)]+0x1);if(_0x1e9d46<0x0)_0x1e9d46=_0x5f5160[_0x4841f9(0x428)]['length']+0x1;if(_0x45f636>0x0)_0x1e9d46=Math[_0x4841f9(0x291)](_0x1e9d46,_0x45f636);const _0x1ee7dc=_0x5f5160['text'][_0x4841f9(0x294)](_0x5f5160['index'],_0x1e9d46),_0x50307e=this[_0x4841f9(0x375)](_0x1ee7dc)['width'],_0x16f097=_0x5f5160[_0x4841f9(0x327)]||this[_0x4841f9(0x300)]-0x8,_0x3c048c=this[_0x4841f9(0x42a)]===Window_Message&&$gameMessage[_0x4841f9(0x1fb)]()!=='';switch(this[_0x4841f9(0x3ea)]()){case _0x4841f9(0x3ba):_0x5f5160['x']=_0x5f5160[_0x4841f9(0x449)];break;case _0x4841f9(0x3f1):_0x5f5160['x']=_0x5f5160['startX'],_0x5f5160['x']+=Math[_0x4841f9(0x301)]((_0x16f097-_0x50307e)/0x2);_0x3c048c&&(_0x5f5160['x']-=_0x5f5160[_0x4841f9(0x449)]/0x2);break;case _0x4841f9(0x287):_0x5f5160['x']=_0x16f097-_0x50307e+_0x5f5160[_0x4841f9(0x449)];_0x3c048c&&(_0x5f5160['x']-=_0x5f5160[_0x4841f9(0x449)]);break;}},Window_Base['prototype'][_0x2c6443(0x375)]=function(_0x17b482){const _0x5923ec=_0x2c6443;_0x17b482=_0x17b482[_0x5923ec(0x39e)](/\x1b!/g,''),_0x17b482=_0x17b482[_0x5923ec(0x39e)](/\x1b\|/g,''),_0x17b482=_0x17b482['replace'](/\x1b\./g,'');const _0x580a13=this[_0x5923ec(0x21f)](_0x17b482,0x0,0x0,0x0),_0x5acaa8=this['getPreservedFontSettings']();return _0x580a13['drawing']=![],this['processAllText'](_0x580a13),this[_0x5923ec(0x2c0)](_0x5acaa8),{'width':_0x580a13[_0x5923ec(0x36d)],'height':_0x580a13[_0x5923ec(0x36b)]};},Window_Base[_0x2c6443(0x21e)]=VisuMZ['MessageCore']['Settings'][_0x2c6443(0x389)][_0x2c6443(0x2f5)]||0x0,Window_Base[_0x2c6443(0x272)]['processWrapBreak']=function(_0x4c71db){const _0x18d893=_0x2c6443,_0x399284=(_0x4c71db[_0x18d893(0x2a3)]?-0x1:0x1)*this[_0x18d893(0x33b)]('\x20');_0x4c71db['x']+=_0x399284;if(this[_0x18d893(0x385)](_0x4c71db)>0x0)_0x4c71db['x']+=_0x399284;if(_0x4c71db['rtl'])return;let _0x44e5f2=_0x4c71db[_0x18d893(0x428)][_0x18d893(0x1e6)]('\x1bWrapBreak[0]',_0x4c71db['index']+0x1),_0x33bf19=_0x4c71db['text'][_0x18d893(0x1e6)]('\x0a',_0x4c71db[_0x18d893(0x317)]+0x1);if(_0x44e5f2<0x0)_0x44e5f2=_0x4c71db[_0x18d893(0x428)]['length']+0x1;if(_0x33bf19>0x0)_0x44e5f2=Math[_0x18d893(0x291)](_0x44e5f2,_0x33bf19);const _0x32c2b0=_0x4c71db['text'][_0x18d893(0x294)](_0x4c71db[_0x18d893(0x317)],_0x44e5f2),_0x4b5e36=this[_0x18d893(0x26c)](_0x32c2b0)[_0x18d893(0x327)];let _0x418d00=_0x4c71db[_0x18d893(0x327)]||this['innerWidth'];_0x418d00-=Window_Base['WORD_WRAP_PADDING'];if(this[_0x18d893(0x42a)]===Window_Message){const _0xcf8b99=$gameMessage[_0x18d893(0x1fb)]()===''?0x0:ImageManager[_0x18d893(0x415)]+0x14;_0x418d00-=_0xcf8b99,VisuMZ[_0x18d893(0x3ca)][_0x18d893(0x306)][_0x18d893(0x389)][_0x18d893(0x436)]&&(_0x418d00-=_0xcf8b99);}let _0x5da61b=![];if(_0x4c71db['x']+_0x4b5e36>_0x4c71db['startX']+_0x418d00)_0x5da61b=!![];if(_0x4b5e36===0x0)_0x5da61b=!![];_0x5da61b&&(_0x4c71db[_0x18d893(0x428)]=_0x4c71db[_0x18d893(0x428)][_0x18d893(0x377)](0x0,_0x4c71db[_0x18d893(0x317)])+'\x0a'+_0x4c71db[_0x18d893(0x428)][_0x18d893(0x35e)](_0x4c71db[_0x18d893(0x317)]));},Window_Base[_0x2c6443(0x272)]['textSizeExWordWrap']=function(_0x5cc610){const _0x1d36e5=_0x2c6443,_0x5cd152=this[_0x1d36e5(0x21f)](_0x5cc610,0x0,0x0,0x0),_0x1a36da=this['getPreservedFontSettings']();return _0x5cd152[_0x1d36e5(0x33c)]=![],this['setWordWrap'](![]),this[_0x1d36e5(0x2d3)](_0x5cd152),this[_0x1d36e5(0x240)](!![]),this[_0x1d36e5(0x2c0)](_0x1a36da),{'width':_0x5cd152[_0x1d36e5(0x36d)],'height':_0x5cd152['outputHeight']};},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x380)]=function(_0x178e6e){return this['obtainEscapeParam'](_0x178e6e);},Window_Base['prototype'][_0x2c6443(0x26a)]=function(_0x5c3c38){const _0x47feb5=_0x2c6443,_0xf7f805=this[_0x47feb5(0x214)](_0x5c3c38)[_0x47feb5(0x419)](',');if(!_0x5c3c38[_0x47feb5(0x33c)])return;const _0x17d8df=_0xf7f805[0x0][_0x47feb5(0x3bf)](),_0xe5b430=_0xf7f805[0x1]||0x0,_0x10852c=_0xf7f805[0x2]||0x0,_0x1a4ccb=ImageManager[_0x47feb5(0x22f)](_0x17d8df),_0x270063=this[_0x47feb5(0x305)]['paintOpacity'];_0x1a4ccb[_0x47feb5(0x253)](this[_0x47feb5(0x20d)][_0x47feb5(0x345)](this,_0x1a4ccb,_0x5c3c38['x'],_0x5c3c38['y'],_0xe5b430,_0x10852c,_0x270063));},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x20d)]=function(_0x13acb9,_0x1ed376,_0x379949,_0x5c27be,_0x4e251a,_0x4276bd){const _0x48a303=_0x2c6443;_0x5c27be=_0x5c27be||_0x13acb9[_0x48a303(0x327)],_0x4e251a=_0x4e251a||_0x13acb9[_0x48a303(0x3c3)],this[_0x48a303(0x339)][_0x48a303(0x44e)]=_0x4276bd,this[_0x48a303(0x339)][_0x48a303(0x25f)](_0x13acb9,0x0,0x0,_0x13acb9['width'],_0x13acb9[_0x48a303(0x3c3)],_0x1ed376,_0x379949,_0x5c27be,_0x4e251a),this[_0x48a303(0x339)]['paintOpacity']=0xff;},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x31a)]=function(_0x2baccb){const _0x41a65a=_0x2c6443,_0x49427c=this[_0x41a65a(0x214)](_0x2baccb)[_0x41a65a(0x419)](',');if(!_0x2baccb['drawing'])return;const _0x22029d=_0x49427c[0x0][_0x41a65a(0x3bf)](),_0x5c797f=ImageManager[_0x41a65a(0x22f)](_0x22029d),_0x59d17c=JsonEx[_0x41a65a(0x2ff)](_0x2baccb),_0x8ad179=this['contents'][_0x41a65a(0x44e)];_0x5c797f['addLoadListener'](this[_0x41a65a(0x30d)][_0x41a65a(0x345)](this,_0x5c797f,_0x59d17c,_0x8ad179));},Window_Base['prototype'][_0x2c6443(0x30d)]=function(_0x180d2b,_0x2e2b36,_0x595293){const _0x29291f=_0x2c6443,_0x1190e0=_0x2e2b36['width']||this[_0x29291f(0x300)],_0x22541d=this[_0x29291f(0x2a7)]!==undefined?this[_0x29291f(0x3aa)]():this[_0x29291f(0x257)],_0x13d7c8=_0x1190e0/_0x180d2b['width'],_0x142a2e=_0x22541d/_0x180d2b[_0x29291f(0x3c3)],_0x53f5f0=Math[_0x29291f(0x291)](_0x13d7c8,_0x142a2e,0x1),_0x1a2a2b=this['_index']!==undefined?(this['itemRectWithPadding'](0x0)['height']-this[_0x29291f(0x24e)]())/0x2:0x0,_0x52615c=_0x180d2b[_0x29291f(0x327)]*_0x53f5f0,_0x2511cc=_0x180d2b[_0x29291f(0x3c3)]*_0x53f5f0,_0x35da26=Math['floor']((_0x1190e0-_0x52615c)/0x2)+_0x2e2b36[_0x29291f(0x449)],_0x5f0eb2=Math[_0x29291f(0x301)]((_0x22541d-_0x2511cc)/0x2)+_0x2e2b36[_0x29291f(0x273)]-_0x1a2a2b*0x2;this[_0x29291f(0x339)]['paintOpacity']=_0x595293,this[_0x29291f(0x339)][_0x29291f(0x25f)](_0x180d2b,0x0,0x0,_0x180d2b[_0x29291f(0x327)],_0x180d2b[_0x29291f(0x3c3)],_0x35da26,_0x5f0eb2,_0x52615c,_0x2511cc),this[_0x29291f(0x339)][_0x29291f(0x44e)]=0xff;},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x331)]=function(_0x15c797){const _0x3c1be9=_0x2c6443,_0x4d3854=this[_0x3c1be9(0x385)](_0x15c797);if(_0x15c797[_0x3c1be9(0x33c)])this['setColorLock'](_0x4d3854>0x0);},Window_Base[_0x2c6443(0x272)][_0x2c6443(0x1eb)]=function(_0x49f3ca){const _0x204315=_0x2c6443,_0x55c41e=this['obtainEscapeParam'](_0x49f3ca);this[_0x204315(0x42a)]===Window_Message&&_0x49f3ca['drawing']&&this[_0x204315(0x398)](_0x55c41e);},Window_Help[_0x2c6443(0x272)][_0x2c6443(0x450)]=function(){const _0x193b24=_0x2c6443;this[_0x193b24(0x240)]($gameSystem['isHelpWindowWordWrap']());},Window_Help[_0x2c6443(0x272)][_0x2c6443(0x25c)]=function(){return!![];},VisuMZ['MessageCore'][_0x2c6443(0x335)]=Window_Help['prototype'][_0x2c6443(0x293)],Window_Help[_0x2c6443(0x272)]['refresh']=function(){const _0x4f9637=_0x2c6443;this[_0x4f9637(0x463)](),VisuMZ['MessageCore']['Window_Help_refresh'][_0x4f9637(0x369)](this),this['resetWordWrap']();},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x31b)]=Window_Options['prototype'][_0x2c6443(0x314)],Window_Options[_0x2c6443(0x272)]['addGeneralOptions']=function(){const _0x3fe389=_0x2c6443;VisuMZ['MessageCore'][_0x3fe389(0x31b)]['call'](this),this[_0x3fe389(0x3f2)]();},Window_Options['prototype'][_0x2c6443(0x3f2)]=function(){const _0x3f3279=_0x2c6443;VisuMZ[_0x3f3279(0x3ca)][_0x3f3279(0x306)][_0x3f3279(0x412)][_0x3f3279(0x326)]&&this[_0x3f3279(0x358)]();},Window_Options[_0x2c6443(0x272)][_0x2c6443(0x358)]=function(){const _0x1a82c4=_0x2c6443,_0x2ac41e=TextManager[_0x1a82c4(0x417)],_0x3b5d40=_0x1a82c4(0x1f1);this[_0x1a82c4(0x42d)](_0x2ac41e,_0x3b5d40);},VisuMZ['MessageCore']['Window_Options_statusText']=Window_Options[_0x2c6443(0x272)]['statusText'],Window_Options[_0x2c6443(0x272)][_0x2c6443(0x2f3)]=function(_0x5a4285){const _0x5572d2=_0x2c6443,_0x12bc8e=this[_0x5572d2(0x307)](_0x5a4285);if(_0x12bc8e===_0x5572d2(0x1f1))return this[_0x5572d2(0x3ab)]();return VisuMZ['MessageCore'][_0x5572d2(0x432)][_0x5572d2(0x369)](this,_0x5a4285);},VisuMZ['MessageCore'][_0x2c6443(0x222)]=Window_Options[_0x2c6443(0x272)][_0x2c6443(0x40f)],Window_Options[_0x2c6443(0x272)][_0x2c6443(0x40f)]=function(_0xa2279f){const _0x25d1c6=_0x2c6443;if(_0xa2279f===_0x25d1c6(0x1f1))return!![];return VisuMZ[_0x25d1c6(0x3ca)][_0x25d1c6(0x222)][_0x25d1c6(0x369)](this,_0xa2279f);},Window_Options[_0x2c6443(0x272)][_0x2c6443(0x3ab)]=function(){const _0x3e6d4e=_0x2c6443,_0x21d786=this[_0x3e6d4e(0x292)](_0x3e6d4e(0x1f1));return _0x21d786>0xa?TextManager[_0x3e6d4e(0x2e9)]:_0x21d786;},VisuMZ['MessageCore']['Window_Options_changeVolume']=Window_Options['prototype']['changeVolume'],Window_Options['prototype'][_0x2c6443(0x3a9)]=function(_0x1b2288,_0x3b656c,_0x1ed5d7){const _0x24fe9d=_0x2c6443;if(_0x1b2288===_0x24fe9d(0x1f1))return this[_0x24fe9d(0x42c)](_0x1b2288,_0x3b656c,_0x1ed5d7);VisuMZ[_0x24fe9d(0x3ca)][_0x24fe9d(0x353)]['call'](this,_0x1b2288,_0x3b656c,_0x1ed5d7);},Window_Options[_0x2c6443(0x272)]['changeTextSpeed']=function(_0xd7ad82,_0x20313c,_0x49da48){const _0xc167f0=_0x2c6443,_0x501486=this[_0xc167f0(0x292)](_0xd7ad82),_0x43fa5f=0x1,_0x45b793=_0x501486+(_0x20313c?_0x43fa5f:-_0x43fa5f);_0x45b793>0xb&&_0x49da48?this['changeValue'](_0xd7ad82,0x1):this[_0xc167f0(0x217)](_0xd7ad82,_0x45b793[_0xc167f0(0x2de)](0x1,0xb));},Window_Message[_0x2c6443(0x272)]['contentsHeight']=function(){const _0x11b011=_0x2c6443;let _0x601313=Window_Base['prototype']['contentsHeight']['call'](this);return _0x601313-=this[_0x11b011(0x225)](),_0x601313;},Window_Message[_0x2c6443(0x272)]['refreshDimmerBitmap']=function(){const _0x183872=_0x2c6443;Window_Base['prototype']['refreshDimmerBitmap'][_0x183872(0x369)](this),VisuMZ[_0x183872(0x3ca)][_0x183872(0x306)][_0x183872(0x40d)][_0x183872(0x2b9)]&&this['stretchDimmerSprite']();},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x2fc)]=function(){const _0xb0c171=_0x2c6443;this['_dimmerSprite']['x']=Math[_0xb0c171(0x3fa)](this[_0xb0c171(0x327)]/0x2),this[_0xb0c171(0x3d6)][_0xb0c171(0x246)]['x']=0.5,this['_dimmerSprite'][_0xb0c171(0x408)]['x']=Graphics[_0xb0c171(0x327)];},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x44a)]=Window_Message[_0x2c6443(0x272)][_0x2c6443(0x316)],Window_Message[_0x2c6443(0x272)][_0x2c6443(0x316)]=function(){const _0x513159=_0x2c6443;VisuMZ[_0x513159(0x3ca)][_0x513159(0x44a)][_0x513159(0x369)](this),this[_0x513159(0x463)](),this[_0x513159(0x450)](),this['setColorLock'](![]),this['setTextAlignment'](_0x513159(0x43c)),this['setTextDelay'](VisuMZ['MessageCore'][_0x513159(0x306)]['General'][_0x513159(0x41e)]);},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x450)]=function(){const _0x51f804=_0x2c6443;this[_0x51f804(0x240)]($gameSystem[_0x51f804(0x45f)]());},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x25c)]=function(){return!![];},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x3f5)]=function(_0x32f21b){const _0x4dfbfb=_0x2c6443,_0x19420a=0xb-ConfigManager[_0x4dfbfb(0x1f1)];_0x32f21b=Math[_0x4dfbfb(0x3fa)](_0x32f21b*_0x19420a),this[_0x4dfbfb(0x2d2)]=_0x32f21b,this[_0x4dfbfb(0x3c7)]=_0x32f21b;},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x32f)]=Window_Message[_0x2c6443(0x272)]['isTriggered'],Window_Message[_0x2c6443(0x272)]['isTriggered']=function(){const _0x5c0e4a=_0x2c6443;return VisuMZ[_0x5c0e4a(0x3ca)][_0x5c0e4a(0x32f)][_0x5c0e4a(0x369)](this)||Input[_0x5c0e4a(0x248)](VisuMZ[_0x5c0e4a(0x3ca)]['Settings'][_0x5c0e4a(0x40d)][_0x5c0e4a(0x23c)]);},VisuMZ['MessageCore'][_0x2c6443(0x416)]=Window_Message[_0x2c6443(0x272)][_0x2c6443(0x279)],Window_Message[_0x2c6443(0x272)][_0x2c6443(0x279)]=function(){const _0x1cca73=_0x2c6443;let _0x4a1f68=this['y'];this['x']=Math[_0x1cca73(0x3fa)]((Graphics[_0x1cca73(0x200)]-this[_0x1cca73(0x327)])/0x2),VisuMZ[_0x1cca73(0x3ca)][_0x1cca73(0x416)]['call'](this);if(this[_0x1cca73(0x37d)])this['y']=_0x4a1f68;this['updateXyOffsets'](),this[_0x1cca73(0x2e3)](),this['clampPlacementPosition']();},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x1f6)]=Window_Message[_0x2c6443(0x272)][_0x2c6443(0x3dc)],Window_Message['prototype']['newPage']=function(_0x11d327){const _0x3160ed=_0x2c6443;this[_0x3160ed(0x43a)](_0x11d327),this[_0x3160ed(0x2d0)](_0x11d327),VisuMZ['MessageCore'][_0x3160ed(0x1f6)]['call'](this,_0x11d327),this['createContents']();},Window_Message['prototype']['convertNewPageTextStateMacros']=function(_0x345dd7){const _0x10fe6f=_0x2c6443;if(!_0x345dd7)return;this[_0x10fe6f(0x2c7)]=![],_0x345dd7[_0x10fe6f(0x428)]=this['convertTextMacros'](_0x345dd7[_0x10fe6f(0x428)]),this['_textMacroFound']&&(_0x345dd7[_0x10fe6f(0x428)]=this[_0x10fe6f(0x3ac)](_0x345dd7['text']),this[_0x10fe6f(0x2c7)]=!![]);},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x3ac)]=function(_0x518abe){const _0x5dfd9b=_0x2c6443;if(this[_0x5dfd9b(0x2c7)])return _0x518abe;return Window_Base[_0x5dfd9b(0x272)][_0x5dfd9b(0x3ac)][_0x5dfd9b(0x369)](this,_0x518abe);},Window_Message[_0x2c6443(0x272)]['onNewPageMessageCore']=function(_0x5ccf18){const _0x147fd5=_0x2c6443;this[_0x147fd5(0x3db)](_0x5ccf18),this[_0x147fd5(0x3cc)](_0x5ccf18),this['updateDimensions']();},VisuMZ[_0x2c6443(0x3ca)]['Window_Message_terminateMessage']=Window_Message['prototype'][_0x2c6443(0x319)],Window_Message[_0x2c6443(0x272)][_0x2c6443(0x319)]=function(){const _0x548f81=_0x2c6443;VisuMZ[_0x548f81(0x3ca)][_0x548f81(0x453)][_0x548f81(0x369)](this),this[_0x548f81(0x316)]();if(this[_0x548f81(0x406)])this['messagePositionReset']();},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x288)]=function(){const _0x33c64d=_0x2c6443;this[_0x33c64d(0x327)]=$gameSystem['getMessageWindowWidth']()+this['addedWidth']();;this['width']=Math[_0x33c64d(0x291)](Graphics[_0x33c64d(0x327)],this[_0x33c64d(0x327)]);const _0x34483a=$gameSystem[_0x33c64d(0x38c)]();this[_0x33c64d(0x3c3)]=SceneManager[_0x33c64d(0x3f3)][_0x33c64d(0x411)](_0x34483a,![])+this[_0x33c64d(0x225)](),this[_0x33c64d(0x3c3)]=Math[_0x33c64d(0x291)](Graphics['height'],this[_0x33c64d(0x3c3)]);if($gameTemp[_0x33c64d(0x322)])this['resetPositionX']();},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x204)]=function(){return 0x0;},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x225)]=function(){return 0x0;},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x2aa)]=function(){const _0x322e33=_0x2c6443;this['x']=(Graphics[_0x322e33(0x200)]-this[_0x322e33(0x327)])/0x2,$gameTemp[_0x322e33(0x322)]=undefined,this[_0x322e33(0x2ce)]();},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x3c6)]=function(){const _0x8627da=_0x2c6443,_0xd34cc9={'x':this['x'],'y':this['y']};Window_Base[_0x8627da(0x272)]['updateMove']['call'](this),this[_0x8627da(0x399)](_0xd34cc9);},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x2cd)]=function(){return!![];},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x399)]=function(_0x3d4215){const _0x113c29=_0x2c6443;this['_nameBoxWindow']&&(this[_0x113c29(0x41f)]['x']+=this['x']-_0x3d4215['x'],this[_0x113c29(0x41f)]['y']+=this['y']-_0x3d4215['y']);},Window_Message[_0x2c6443(0x272)]['resetRect']=function(_0x31fb42,_0x1bbdd4){const _0x36e34e=_0x2c6443;this[_0x36e34e(0x26e)](this[_0x36e34e(0x23e)]['x'],this[_0x36e34e(0x33e)]*(Graphics[_0x36e34e(0x382)]-this['height'])/0x2,this[_0x36e34e(0x23e)][_0x36e34e(0x327)],this[_0x36e34e(0x23e)][_0x36e34e(0x3c3)],_0x31fb42,_0x1bbdd4);},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x380)]=function(_0x1f952a){const _0xf4f08e=_0x2c6443,_0x456fda=Window_Base['prototype'][_0xf4f08e(0x380)][_0xf4f08e(0x369)](this,_0x1f952a);_0x1f952a[_0xf4f08e(0x33c)]&&this['launchMessageCommonEvent'](_0x456fda);},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x43f)]=function(_0x4d7e26){const _0x40f819=_0x2c6443;if($gameParty['inBattle']()){}else $gameMap[_0x40f819(0x405)](_0x4d7e26);},Window_Message[_0x2c6443(0x272)]['processCharacter']=function(_0x499e89){const _0x1b6c49=_0x2c6443;this[_0x1b6c49(0x2d2)]--,this[_0x1b6c49(0x2d2)]<=0x0&&(this['onProcessCharacter'](_0x499e89),Window_Base[_0x1b6c49(0x272)][_0x1b6c49(0x2d5)][_0x1b6c49(0x369)](this,_0x499e89));},Window_Message[_0x2c6443(0x272)]['onProcessCharacter']=function(_0x1be0ed){const _0x11910a=_0x2c6443;this[_0x11910a(0x2d2)]=this['_textDelay'];if(this[_0x11910a(0x3c7)]<=0x0)this['_showFast']=!![];},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x1e2)]=Window_Message[_0x2c6443(0x272)][_0x2c6443(0x3fb)],Window_Message['prototype'][_0x2c6443(0x3fb)]=function(_0x26432d,_0x4d8a34){const _0x42c84b=_0x2c6443;!_0x4d8a34[_0x42c84b(0x33c)]?Window_Base[_0x42c84b(0x272)][_0x42c84b(0x3fb)][_0x42c84b(0x369)](this,_0x26432d,_0x4d8a34):VisuMZ[_0x42c84b(0x3ca)]['Window_Message_processEscapeCharacter'][_0x42c84b(0x369)](this,_0x26432d,_0x4d8a34);},VisuMZ['MessageCore'][_0x2c6443(0x391)]=Window_Message[_0x2c6443(0x272)][_0x2c6443(0x1de)],Window_Message['prototype'][_0x2c6443(0x1de)]=function(_0x41eb43){const _0x463d93=_0x2c6443;if(this['_currentAutoSize'])return![];return VisuMZ['MessageCore'][_0x463d93(0x391)][_0x463d93(0x369)](this,_0x41eb43);},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x3db)]=function(_0x2d96c6){const _0x172886=_0x2c6443;let _0x48ddb6=_0x2d96c6['text'];this[_0x172886(0x376)]={};if(this[_0x172886(0x3cf)]())return _0x48ddb6;_0x48ddb6=_0x48ddb6[_0x172886(0x39e)](/<POSITION:[ ]*(.*)>/gi,(_0x29bce9,_0x4091b7)=>{const _0x1f6c06=_0x172886,_0x2ce164=_0x4091b7[_0x1f6c06(0x419)](',')['map'](_0x5b005b=>Number(_0x5b005b)||0x0);if(_0x2ce164[0x0]!==undefined)this['_forcedPosition']['x']=Number(_0x2ce164[0x0]);if(_0x2ce164[0x1]!==undefined)this[_0x1f6c06(0x376)]['y']=Number(_0x2ce164[0x1]);if(_0x2ce164[0x2]!==undefined)this['_forcedPosition']['width']=Number(_0x2ce164[0x2]);if(_0x2ce164[0x3]!==undefined)this[_0x1f6c06(0x376)][_0x1f6c06(0x3c3)]=Number(_0x2ce164[0x3]);return'';}),_0x48ddb6=_0x48ddb6[_0x172886(0x39e)](/<COORDINATES:[ ]*(.*)>/gi,(_0xb4b80c,_0x417d28)=>{const _0x4b1b04=_0x417d28['split'](',')['map'](_0x1fda3f=>Number(_0x1fda3f)||0x0);if(_0x4b1b04[0x0]!==undefined)this['_forcedPosition']['x']=Number(_0x4b1b04[0x0]);if(_0x4b1b04[0x1]!==undefined)this['_forcedPosition']['y']=Number(_0x4b1b04[0x1]);return'';}),_0x48ddb6=_0x48ddb6[_0x172886(0x39e)](/<DIMENSIONS:[ ]*(.*)>/gi,(_0x5b236d,_0x41c25a)=>{const _0x1839b5=_0x172886,_0x3e3725=_0x41c25a['split'](',')['map'](_0x1908f9=>Number(_0x1908f9)||0x0);if(_0x3e3725[0x0]!==undefined)this[_0x1839b5(0x376)][_0x1839b5(0x327)]=Number(_0x3e3725[0x2]);if(_0x3e3725[0x1]!==undefined)this[_0x1839b5(0x376)][_0x1839b5(0x3c3)]=Number(_0x3e3725[0x3]);return'';}),_0x48ddb6=_0x48ddb6[_0x172886(0x39e)](/<OFFSET:[ ]*(.*)>/gi,(_0x303e03,_0x5df8fd)=>{const _0x14cc1b=_0x172886,_0x398832=_0x5df8fd[_0x14cc1b(0x419)](',')[_0x14cc1b(0x3c9)](_0x1ae229=>Number(_0x1ae229)||0x0);let _0x104963=_0x398832[0x0]||0x0,_0x354a5d=_0x398832[0x1]||0x0;return $gameSystem['setMessageWindowXyOffsets'](_0x104963,_0x354a5d),'';}),_0x2d96c6[_0x172886(0x428)]=_0x48ddb6;},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x2ec)]=function(){const _0x5d03e9=_0x2c6443,_0xba2027=$gameSystem[_0x5d03e9(0x350)]();this['x']+=_0xba2027['x'],this['y']+=_0xba2027['y'];},Window_Message['prototype'][_0x2c6443(0x2e3)]=function(){const _0x4af785=_0x2c6443;this[_0x4af785(0x376)]=this['_forcedPosition']||{};const _0x1c4b00=['x','y',_0x4af785(0x327),_0x4af785(0x3c3)];for(const _0x14e452 of _0x1c4b00){this[_0x4af785(0x376)][_0x14e452]!==undefined&&(this[_0x14e452]=Number(this[_0x4af785(0x376)][_0x14e452]));}},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x3cc)]=function(_0x4f7ac8){const _0x19b602=_0x2c6443;this[_0x19b602(0x423)]=![];let _0x5bf3cf=_0x4f7ac8[_0x19b602(0x428)];_0x5bf3cf=_0x5bf3cf['replace'](/<(?:AUTO|AUTOSIZE|AUTO SIZE)>/gi,()=>{const _0x2ceda6=_0x19b602;return this[_0x2ceda6(0x268)](_0x5bf3cf,!![],!![]),this[_0x2ceda6(0x208)]('none'),'';}),_0x5bf3cf=_0x5bf3cf[_0x19b602(0x39e)](/<(?:AUTOWIDTH|AUTO WIDTH)>/gi,()=>{const _0x5a3cbc=_0x19b602;return this[_0x5a3cbc(0x268)](_0x5bf3cf,!![],![]),this['processAutoPosition']('none'),'';}),_0x5bf3cf=_0x5bf3cf['replace'](/<(?:AUTOHEIGHT|AUTO HEIGHT)>/gi,()=>{const _0x54ed5a=_0x19b602;return this[_0x54ed5a(0x268)](_0x5bf3cf,![],!![]),this[_0x54ed5a(0x208)]('none'),'';});if(SceneManager[_0x19b602(0x360)]())_0x5bf3cf=_0x5bf3cf[_0x19b602(0x39e)](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,(_0x54b6c7,_0x2ec8fd)=>{const _0x311374=_0x19b602;return this[_0x311374(0x268)](_0x5bf3cf,!![],!![]),this[_0x311374(0x208)](_0x311374(0x308),Number(_0x2ec8fd)||0x1),'';}),_0x5bf3cf=_0x5bf3cf[_0x19b602(0x39e)](/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,(_0xc10fd4,_0x185791)=>{const _0x4c3721=_0x19b602;return this[_0x4c3721(0x268)](_0x5bf3cf,!![],!![]),this['processAutoPosition']('battle\x20party',Number(_0x185791)||0x0),'';}),_0x5bf3cf=_0x5bf3cf[_0x19b602(0x39e)](/<(?:AUTOENEMY|AUTO ENEMY):[ ](.*?)>/gi,(_0x45c9d2,_0x49a0c6)=>{const _0x4c86b0=_0x19b602;return this['processAutoSize'](_0x5bf3cf,!![],!![]),this[_0x4c86b0(0x208)](_0x4c86b0(0x2bb),Number(_0x49a0c6)||0x0),'';});else SceneManager[_0x19b602(0x464)]()&&(_0x5bf3cf=_0x5bf3cf[_0x19b602(0x39e)](/<(?:AUTOPLAYER|AUTO PLAYER)>/gi,(_0x59de29,_0x2a6139)=>{const _0x5c56ef=_0x19b602;return this[_0x5c56ef(0x268)](_0x5bf3cf,!![],!![]),this[_0x5c56ef(0x208)](_0x5c56ef(0x397),0x0),'';}),_0x5bf3cf=_0x5bf3cf['replace'](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,(_0x1e01ef,_0x35f633)=>{const _0x28184f=_0x19b602;return this[_0x28184f(0x268)](_0x5bf3cf,!![],!![]),this['processAutoPosition'](_0x28184f(0x346),Number(_0x35f633)||0x1),'';}),_0x5bf3cf=_0x5bf3cf[_0x19b602(0x39e)](/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,(_0x3718c6,_0x3a3401)=>{const _0x4dd0e6=_0x19b602;return this[_0x4dd0e6(0x268)](_0x5bf3cf,!![],!![]),this[_0x4dd0e6(0x208)](_0x4dd0e6(0x3df),Number(_0x3a3401)||0x0),'';}),_0x5bf3cf=_0x5bf3cf['replace'](/<(?:AUTOEVENT|AUTO EVENT):[ ](.*?)>/gi,(_0x39d81a,_0xbf26da)=>{const _0x456fe1=_0x19b602;return this[_0x456fe1(0x268)](_0x5bf3cf,!![],!![]),this[_0x456fe1(0x208)](_0x456fe1(0x2eb),Number(_0xbf26da)||0x0),'';}));_0x4f7ac8[_0x19b602(0x428)]=_0x5bf3cf;},Window_Message[_0x2c6443(0x2be)]=/<(?:AUTO|AUTOSIZE|AUTO SIZE|AUTOWIDTH|AUTO WIDTH|AUTOHEIGHT|AUTO HEIGHT|AUTOPLAYER|AUTO PLAYER)>/gi,Window_Message[_0x2c6443(0x2f4)]=/<(?:AUTOPARTY|AUTO PARTY|AUTOPLAYER|AUTO PLAYER|AUTOEVENT|AUTO EVENT|AUTOENEMY|AUTO ENEMY|AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,Window_Message['prototype'][_0x2c6443(0x268)]=function(_0x20386a,_0x58df3,_0x43b708){const _0x5ce2ce=_0x2c6443;_0x20386a=_0x20386a[_0x5ce2ce(0x39e)](Window_Message['_autoSizeRegexp'],''),_0x20386a=_0x20386a[_0x5ce2ce(0x39e)](Window_Message[_0x5ce2ce(0x2f4)],''),this[_0x5ce2ce(0x1ff)]=!![],this['_currentAutoSize']=!![],this[_0x5ce2ce(0x240)](![]);const _0x1f2ccc=this[_0x5ce2ce(0x3f7)](_0x20386a);if(_0x58df3){let _0x1ef78a=_0x1f2ccc[_0x5ce2ce(0x327)]+$gameSystem[_0x5ce2ce(0x2d7)]()*0x2+0x6;const _0x3412e9=$gameMessage[_0x5ce2ce(0x1fb)]()!=='',_0x4083a6=ImageManager['faceWidth'],_0x51a20c=0x14;_0x1ef78a+=_0x3412e9?_0x4083a6+_0x51a20c:0x4;if(_0x1ef78a%0x2!==0x0)_0x1ef78a+=0x1;$gameSystem[_0x5ce2ce(0x429)](_0x1ef78a);}if(_0x43b708){let _0x153b33=Math[_0x5ce2ce(0x219)](_0x1f2ccc[_0x5ce2ce(0x3c3)]/this[_0x5ce2ce(0x24e)]());$gameSystem[_0x5ce2ce(0x310)](_0x153b33);}this['updateAutoSizePosition'](),this['_refreshPauseSign'](),this[_0x5ce2ce(0x1ff)]=![],this['_messagePositionReset']=!![];},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x283)]=function(){const _0x3928f5=_0x2c6443;this[_0x3928f5(0x288)](),this['updatePlacement'](),this[_0x3928f5(0x2aa)](),this[_0x3928f5(0x263)](),this[_0x3928f5(0x305)][_0x3928f5(0x3a3)](),this[_0x3928f5(0x26f)]();},Window_Message['prototype'][_0x2c6443(0x208)]=function(_0x44f580,_0x5a472f){const _0x866c9e=_0x2c6443;switch(_0x44f580[_0x866c9e(0x2e8)]()[_0x866c9e(0x3bf)]()){case _0x866c9e(0x308):this[_0x866c9e(0x37d)]=$gameActors['actor'](_0x5a472f);break;case _0x866c9e(0x328):this[_0x866c9e(0x37d)]=$gameParty[_0x866c9e(0x31f)]()[_0x5a472f-0x1];break;case _0x866c9e(0x2bb):this[_0x866c9e(0x37d)]=$gameTroop['members']()[_0x5a472f-0x1];break;case _0x866c9e(0x397):this[_0x866c9e(0x37d)]=$gamePlayer;break;case _0x866c9e(0x346):const _0x14053d=$gameActors[_0x866c9e(0x3fe)](_0x5a472f)['index']();_0x14053d===0x0?this[_0x866c9e(0x37d)]=$gamePlayer:this[_0x866c9e(0x37d)]=$gamePlayer[_0x866c9e(0x2df)]()[_0x866c9e(0x20e)](_0x14053d-0x1);break;case _0x866c9e(0x3df):_0x5a472f===0x1?this['_autoPositionTarget']=$gamePlayer:this[_0x866c9e(0x37d)]=$gamePlayer[_0x866c9e(0x2df)]()[_0x866c9e(0x20e)](_0x5a472f-0x2);break;case _0x866c9e(0x2eb):this[_0x866c9e(0x37d)]=$gameMap[_0x866c9e(0x3ef)](_0x5a472f);break;}this[_0x866c9e(0x37d)]&&this[_0x866c9e(0x290)]();},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x236)]=Window_Message[_0x2c6443(0x272)][_0x2c6443(0x1f8)],Window_Message[_0x2c6443(0x272)]['synchronizeNameBox']=function(){const _0x45829c=_0x2c6443;this[_0x45829c(0x290)](),VisuMZ[_0x45829c(0x3ca)][_0x45829c(0x236)][_0x45829c(0x369)](this);},Window_Message['prototype'][_0x2c6443(0x290)]=function(){const _0x52a1e2=_0x2c6443;if(!this[_0x52a1e2(0x37d)])return;const _0x2b089f=SceneManager[_0x52a1e2(0x3f3)];if(!_0x2b089f)return;if(!_0x2b089f[_0x52a1e2(0x384)])return;const _0x16e6c5=_0x2b089f['_spriteset']['findTargetSprite'](this[_0x52a1e2(0x37d)]);if(!_0x16e6c5)return;let _0x433d50=_0x16e6c5['x'];_0x433d50-=this['width']/0x2,_0x433d50-=(Graphics['width']-Graphics['boxWidth'])/0x2,_0x433d50+=this[_0x52a1e2(0x2b4)]();let _0x422adf=_0x16e6c5['y'];_0x422adf-=this[_0x52a1e2(0x3c3)],_0x422adf-=(Graphics[_0x52a1e2(0x3c3)]-Graphics[_0x52a1e2(0x382)])/0x2,_0x422adf+=this[_0x52a1e2(0x243)](),_0x422adf-=_0x16e6c5[_0x52a1e2(0x3c3)]+0x8;const _0x3b284e=$gameSystem['getMessageWindowXyOffsets']();_0x433d50+=_0x3b284e['x'],_0x422adf+=_0x3b284e['y'],this['x']=Math['round'](_0x433d50),this['y']=Math[_0x52a1e2(0x3fa)](_0x422adf),this['clampPlacementPosition'](!![],![]),this[_0x52a1e2(0x376)]=this['_forcedPosition']||{},this[_0x52a1e2(0x376)]['x']=this['x'],this[_0x52a1e2(0x376)]['y']=this['y'],this[_0x52a1e2(0x376)][_0x52a1e2(0x327)]=this[_0x52a1e2(0x327)],this[_0x52a1e2(0x376)][_0x52a1e2(0x3c3)]=this['height'],this['_nameBoxWindow']['updatePlacement']();},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x2b4)]=function(){return 0x0;},Window_Message['prototype'][_0x2c6443(0x243)]=function(){return 0x0;},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x3ad)]=function(){const _0x57df0c=_0x2c6443;this[_0x57df0c(0x406)]=![],this[_0x57df0c(0x37d)]=undefined,$gameSystem[_0x57df0c(0x216)](),this['updateAutoSizePosition'](),this[_0x57df0c(0x23d)]=0x0;},Window_Message['prototype'][_0x2c6443(0x2af)]=function(_0x34f12c){const _0x294d92=_0x2c6443;return Window_Base[_0x294d92(0x272)][_0x294d92(0x2af)]['call'](this,_0x34f12c);},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x2c4)]=function(_0x21473c){const _0x1eb2fe=_0x2c6443;return Window_Base['prototype'][_0x1eb2fe(0x2c4)]['call'](this,_0x21473c);},Window_Message[_0x2c6443(0x272)]['flushTextState']=function(_0x2769d6){const _0x48ef9f=_0x2c6443;this['preFlushTextState'](_0x2769d6),Window_Base[_0x48ef9f(0x272)]['flushTextState']['call'](this,_0x2769d6),this[_0x48ef9f(0x28c)](_0x2769d6);},Window_Message['prototype'][_0x2c6443(0x2c3)]=function(_0x17dbb1){},Window_Message[_0x2c6443(0x272)][_0x2c6443(0x28c)]=function(_0x2ecb6f){},Window_NameBox[_0x2c6443(0x272)]['isAutoColorAffected']=function(){return![];},Window_NameBox[_0x2c6443(0x272)][_0x2c6443(0x2f7)]=function(){const _0x1c15f5=_0x2c6443;Window_Base[_0x1c15f5(0x272)]['resetTextColor']['call'](this),this['changeTextColor'](this[_0x1c15f5(0x3dd)]());},Window_NameBox['prototype'][_0x2c6443(0x3dd)]=function(){const _0x2c3a89=_0x2c6443,_0xf46350=VisuMZ[_0x2c3a89(0x3ca)][_0x2c3a89(0x306)][_0x2c3a89(0x40d)]['NameBoxWindowDefaultColor'];return ColorManager[_0x2c3a89(0x365)](_0xf46350);},VisuMZ['MessageCore'][_0x2c6443(0x280)]=Window_NameBox[_0x2c6443(0x272)][_0x2c6443(0x279)],Window_NameBox[_0x2c6443(0x272)]['updatePlacement']=function(){const _0x40f09a=_0x2c6443;VisuMZ[_0x40f09a(0x3ca)][_0x40f09a(0x280)]['call'](this),this[_0x40f09a(0x269)](),this[_0x40f09a(0x459)](),this[_0x40f09a(0x2ce)](),this[_0x40f09a(0x336)]();},Window_NameBox['prototype'][_0x2c6443(0x2af)]=function(_0x4df9e7){const _0x2efb11=_0x2c6443;return _0x4df9e7=_0x4df9e7[_0x2efb11(0x39e)](/<LEFT>/gi,this['setRelativePosition']['bind'](this,0x0)),_0x4df9e7=_0x4df9e7['replace'](/<CENTER>/gi,this[_0x2efb11(0x238)]['bind'](this,0x5)),_0x4df9e7=_0x4df9e7[_0x2efb11(0x39e)](/<RIGHT>/gi,this['setRelativePosition']['bind'](this,0xa)),_0x4df9e7=_0x4df9e7[_0x2efb11(0x39e)](/<POSITION:[ ](\d+)>/gi,(_0x3fed41,_0x56edd0)=>this['setRelativePosition'](parseInt(_0x56edd0))),_0x4df9e7=_0x4df9e7['replace'](/<\/LEFT>/gi,''),_0x4df9e7=_0x4df9e7[_0x2efb11(0x39e)](/<\/CENTER>/gi,''),_0x4df9e7=_0x4df9e7[_0x2efb11(0x39e)](/<\/RIGHT>/gi,''),Window_Base[_0x2efb11(0x272)]['preConvertEscapeCharacters'][_0x2efb11(0x369)](this,_0x4df9e7);},Window_NameBox[_0x2c6443(0x272)][_0x2c6443(0x238)]=function(_0x2024fd){const _0x5b1f7e=_0x2c6443;return this[_0x5b1f7e(0x33a)]=_0x2024fd,'';},Window_NameBox['prototype']['updateRelativePosition']=function(){const _0x952228=_0x2c6443;if($gameMessage[_0x952228(0x250)]())return;this[_0x952228(0x33a)]=this[_0x952228(0x33a)]||0x0;const _0x18b78f=this[_0x952228(0x3b5)],_0x20f19a=Math[_0x952228(0x301)](_0x18b78f['width']*this[_0x952228(0x33a)]/0xa);this['x']=_0x18b78f['x']+_0x20f19a-Math[_0x952228(0x301)](this[_0x952228(0x327)]/0x2),this['x']=this['x']['clamp'](_0x18b78f['x'],_0x18b78f['x']+_0x18b78f['width']-this[_0x952228(0x327)]);},Window_NameBox[_0x2c6443(0x272)][_0x2c6443(0x459)]=function(){const _0x17d704=_0x2c6443;if($gameMessage[_0x17d704(0x250)]())return;this['_relativePosition']=this[_0x17d704(0x33a)]||0x0;const _0x132618=VisuMZ[_0x17d704(0x3ca)][_0x17d704(0x306)]['General'][_0x17d704(0x341)],_0x491507=VisuMZ[_0x17d704(0x3ca)][_0x17d704(0x306)][_0x17d704(0x40d)][_0x17d704(0x309)],_0x4e1aee=(0x5-this['_relativePosition'])/0x5;this['x']+=Math[_0x17d704(0x301)](_0x132618*_0x4e1aee),this['y']+=_0x491507;},Window_NameBox[_0x2c6443(0x272)]['updateOverlappingY']=function(){const _0x27f0de=_0x2c6443,_0x16c71f=this['_messageWindow'],_0x160f81=_0x16c71f['y'],_0x235d56=VisuMZ[_0x27f0de(0x3ca)][_0x27f0de(0x306)][_0x27f0de(0x40d)]['NameBoxWindowOffsetY'];_0x160f81>this['y']&&_0x160f81<this['y']+this[_0x27f0de(0x3c3)]-_0x235d56&&(this['y']=_0x16c71f['y']+_0x16c71f[_0x27f0de(0x3c3)]);},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x378)]=Window_NameBox[_0x2c6443(0x272)][_0x2c6443(0x293)],Window_NameBox['prototype'][_0x2c6443(0x293)]=function(){const _0x21dc35=_0x2c6443;this[_0x21dc35(0x33a)]=0x0,VisuMZ['MessageCore']['Window_NameBox_refresh'][_0x21dc35(0x369)](this);},Window_ChoiceList['prototype'][_0x2c6443(0x3cf)]=function(){return![];},Window_ChoiceList[_0x2c6443(0x272)]['isAutoColorAffected']=function(){return!![];},Window_ChoiceList['prototype']['itemHeight']=function(){const _0x1871dd=_0x2c6443;return $gameSystem[_0x1871dd(0x3d9)]()+0x8;},Window_ChoiceList['prototype'][_0x2c6443(0x29b)]=function(){const _0x2ffea7=_0x2c6443;return $gameSystem[_0x2ffea7(0x2ef)]();},Window_ChoiceList['prototype'][_0x2c6443(0x362)]=function(){const _0x47c79c=_0x2c6443;this[_0x47c79c(0x293)](),this['selectDefault'](),this['open'](),this[_0x47c79c(0x25a)]();},Window_ChoiceList[_0x2c6443(0x272)]['refresh']=function(){const _0x244d31=_0x2c6443;this[_0x244d31(0x410)](),this[_0x244d31(0x2db)](),this[_0x244d31(0x3b5)]&&(this['updatePlacement'](),this[_0x244d31(0x1e4)]()),this['createContents'](),this[_0x244d31(0x413)](),this[_0x244d31(0x35a)](),Window_Selectable[_0x244d31(0x272)][_0x244d31(0x293)]['call'](this);},Window_ChoiceList[_0x2c6443(0x272)][_0x2c6443(0x2db)]=function(){const _0x3ebcd6=_0x2c6443,_0x535299=$gameMessage[_0x3ebcd6(0x24a)]();let _0x1d9d79=0x0;for(let _0x63e3be of _0x535299){_0x63e3be=this['convertChoiceMacros'](_0x63e3be);if(this[_0x3ebcd6(0x2d8)](_0x63e3be)){const _0x1b5eb3=this[_0x3ebcd6(0x45e)](_0x63e3be),_0x3aa2a2=this[_0x3ebcd6(0x363)](_0x63e3be);this[_0x3ebcd6(0x42d)](_0x1b5eb3,_0x3ebcd6(0x36e),_0x3aa2a2,_0x1d9d79);}_0x1d9d79++;}},Window_ChoiceList['prototype']['convertChoiceMacros']=function(_0x3b6298){const _0xa807de=_0x2c6443;return Window_Base[_0xa807de(0x272)][_0xa807de(0x20c)]['call'](this,_0x3b6298);},Window_ChoiceList['prototype'][_0x2c6443(0x2d8)]=function(_0x3177c2){const _0x2a55c5=_0x2c6443;if(Imported[_0x2a55c5(0x278)])$gameMessage[_0x2a55c5(0x24d)]();if(_0x3177c2[_0x2a55c5(0x22e)](/<HIDE>/i))return![];if(_0x3177c2['match'](/<SHOW>/i))return!![];if(_0x3177c2[_0x2a55c5(0x22e)](/<SHOW[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x24bb60=RegExp['$1'][_0x2a55c5(0x419)](',')[_0x2a55c5(0x3c9)](_0x226c51=>Number(_0x226c51)||0x0);for(const _0x583f32 of _0x24bb60){if(!$gameSwitches[_0x2a55c5(0x27c)](_0x583f32))return![];}return!![];}if(_0x3177c2[_0x2a55c5(0x22e)](/<SHOW ALL[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x3faefe=RegExp['$1'][_0x2a55c5(0x419)](',')['map'](_0x4b75fb=>Number(_0x4b75fb)||0x0);for(const _0x27fe13 of _0x3faefe){if(!$gameSwitches['value'](_0x27fe13))return![];}return!![];}if(_0x3177c2[_0x2a55c5(0x22e)](/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x717f44=RegExp['$1'][_0x2a55c5(0x419)](',')['map'](_0x207726=>Number(_0x207726)||0x0);for(const _0x396c6c of _0x717f44){if($gameSwitches['value'](_0x396c6c))return!![];}return![];}if(_0x3177c2[_0x2a55c5(0x22e)](/<HIDE[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x4e5792=RegExp['$1']['split'](',')['map'](_0x4b4fa1=>Number(_0x4b4fa1)||0x0);for(const _0x2b228f of _0x4e5792){if(!$gameSwitches[_0x2a55c5(0x27c)](_0x2b228f))return!![];}return![];}if(_0x3177c2[_0x2a55c5(0x22e)](/<HIDE ALL[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x3c7748=RegExp['$1'][_0x2a55c5(0x419)](',')[_0x2a55c5(0x3c9)](_0xfe7777=>Number(_0xfe7777)||0x0);for(const _0x6066bb of _0x3c7748){if(!$gameSwitches[_0x2a55c5(0x27c)](_0x6066bb))return!![];}return![];}if(_0x3177c2['match'](/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x589d95=RegExp['$1'][_0x2a55c5(0x419)](',')[_0x2a55c5(0x3c9)](_0x5f444a=>Number(_0x5f444a)||0x0);for(const _0x87fe29 of _0x589d95){if($gameSwitches[_0x2a55c5(0x27c)](_0x87fe29))return![];}return!![];}return!![];},Window_ChoiceList[_0x2c6443(0x272)]['parseChoiceText']=function(_0x46c4d4){const _0x3ff7b5=_0x2c6443;let _0x10809e=_0x46c4d4;return _0x10809e=_0x10809e[_0x3ff7b5(0x39e)](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x10809e=_0x10809e[_0x3ff7b5(0x39e)](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x10809e;},Window_ChoiceList[_0x2c6443(0x272)][_0x2c6443(0x363)]=function(_0x41b893){const _0x3f357a=_0x2c6443;if(Imported[_0x3f357a(0x278)])$gameMessage[_0x3f357a(0x24d)]();if(_0x41b893[_0x3f357a(0x22e)](/<DISABLE>/i))return![];if(_0x41b893['match'](/<ENABLE>/i))return!![];if(_0x41b893[_0x3f357a(0x22e)](/<ENABLE[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x1d5677=RegExp['$1'][_0x3f357a(0x419)](',')['map'](_0x4f5cef=>Number(_0x4f5cef)||0x0);for(const _0x41cdc7 of _0x1d5677){if(!$gameSwitches[_0x3f357a(0x27c)](_0x41cdc7))return![];}return!![];}if(_0x41b893[_0x3f357a(0x22e)](/<ENABLE ALL[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x218940=RegExp['$1']['split'](',')[_0x3f357a(0x3c9)](_0x317065=>Number(_0x317065)||0x0);for(const _0x1269f6 of _0x218940){if(!$gameSwitches[_0x3f357a(0x27c)](_0x1269f6))return![];}return!![];}if(_0x41b893[_0x3f357a(0x22e)](/<ENABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x2a32bd=RegExp['$1'][_0x3f357a(0x419)](',')[_0x3f357a(0x3c9)](_0x1fb82c=>Number(_0x1fb82c)||0x0);for(const _0x1dda77 of _0x2a32bd){if($gameSwitches['value'](_0x1dda77))return!![];}return![];}if(_0x41b893[_0x3f357a(0x22e)](/<DISABLE[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x5d25d8=RegExp['$1'][_0x3f357a(0x419)](',')['map'](_0x41d352=>Number(_0x41d352)||0x0);for(const _0x5d7b39 of _0x5d25d8){if(!$gameSwitches[_0x3f357a(0x27c)](_0x5d7b39))return!![];}return![];}if(_0x41b893[_0x3f357a(0x22e)](/<DISABLE ALL[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x5092a1=RegExp['$1'][_0x3f357a(0x419)](',')[_0x3f357a(0x3c9)](_0x2423d1=>Number(_0x2423d1)||0x0);for(const _0xa7f64a of _0x5092a1){if(!$gameSwitches['value'](_0xa7f64a))return!![];}return![];}if(_0x41b893[_0x3f357a(0x22e)](/<DISABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x57ea47=RegExp['$1'][_0x3f357a(0x419)](',')[_0x3f357a(0x3c9)](_0x4022d2=>Number(_0x4022d2)||0x0);for(const _0x6c4a6a of _0x57ea47){if($gameSwitches[_0x3f357a(0x27c)](_0x6c4a6a))return![];}return!![];}return!![];},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x27d)]=Window_ChoiceList[_0x2c6443(0x272)][_0x2c6443(0x279)],Window_ChoiceList[_0x2c6443(0x272)][_0x2c6443(0x279)]=function(){const _0x3c8bfa=_0x2c6443;VisuMZ[_0x3c8bfa(0x3ca)][_0x3c8bfa(0x27d)][_0x3c8bfa(0x369)](this),this['clampPlacementPosition']();},Window_ChoiceList[_0x2c6443(0x272)][_0x2c6443(0x1e4)]=function(){const _0x372524=_0x2c6443;if(!this[_0x372524(0x42e)])return;const _0x3c1833=0x8,_0x44490e=this['_cancelButton'],_0x4a92d5=this['x']+this[_0x372524(0x327)],_0xa2b604=Math[_0x372524(0x301)]((Graphics[_0x372524(0x327)]-Graphics[_0x372524(0x200)])/0x2);_0x4a92d5>=Graphics[_0x372524(0x200)]+_0xa2b604-_0x44490e[_0x372524(0x327)]+_0x3c1833?_0x44490e['x']=-_0x44490e['width']-_0x3c1833:_0x44490e['x']=this['width']+_0x3c1833,_0x44490e['y']=this['height']/0x2-_0x44490e[_0x372524(0x3c3)]/0x2;},VisuMZ[_0x2c6443(0x3ca)][_0x2c6443(0x25e)]=Window_ChoiceList[_0x2c6443(0x272)][_0x2c6443(0x255)],Window_ChoiceList[_0x2c6443(0x272)][_0x2c6443(0x255)]=function(){const _0x39a62d=_0x2c6443;return this[_0x39a62d(0x3b5)]?this[_0x39a62d(0x3d2)]():VisuMZ[_0x39a62d(0x3ca)][_0x39a62d(0x25e)][_0x39a62d(0x369)](this);},Window_ChoiceList['prototype'][_0x2c6443(0x3d2)]=function(){const _0x4335c5=_0x2c6443,_0x214f21=$gameMessage[_0x4335c5(0x262)]();if(_0x214f21===0x1)return(Graphics[_0x4335c5(0x200)]-this[_0x4335c5(0x2c2)]())/0x2;else return _0x214f21===0x2?this[_0x4335c5(0x3b5)]['x']+this[_0x4335c5(0x3b5)][_0x4335c5(0x327)]-this[_0x4335c5(0x2c2)]():this['_messageWindow']['x'];},Window_ChoiceList[_0x2c6443(0x272)]['windowWidth']=function(){const _0x2dd904=_0x2c6443,_0x4583fa=(this[_0x2dd904(0x24b)]()+this[_0x2dd904(0x37e)]())*this['maxCols']()+this['padding']*0x2;return Math[_0x2dd904(0x291)](_0x4583fa,Graphics[_0x2dd904(0x327)]);},Window_ChoiceList[_0x2c6443(0x272)][_0x2c6443(0x203)]=function(){const _0x2e3a7c=_0x2c6443,_0x2d7a62=$gameMessage['choices']()[_0x2e3a7c(0x3c9)](_0x14cf1e=>this['convertChoiceMacros'](_0x14cf1e))[_0x2e3a7c(0x30f)](_0x406fe6=>this[_0x2e3a7c(0x2d8)](_0x406fe6)),_0x57e78f=Math[_0x2e3a7c(0x219)](_0x2d7a62[_0x2e3a7c(0x2f8)]/this[_0x2e3a7c(0x29b)]());return Math[_0x2e3a7c(0x2d6)](0x1,Math[_0x2e3a7c(0x291)](_0x57e78f,this['maxLines']()));},Window_ChoiceList[_0x2c6443(0x272)]['maxLines']=function(){const _0x510592=_0x2c6443,_0x1dc7e8=this['_messageWindow'],_0x5a6207=_0x1dc7e8?_0x1dc7e8['y']:0x0,_0x5a9898=_0x1dc7e8?_0x1dc7e8[_0x510592(0x3c3)]:0x0,_0x4b593c=Graphics['boxHeight']/0x2;return _0x5a6207<_0x4b593c&&_0x5a6207+_0x5a9898>_0x4b593c?0x4:$gameSystem[_0x510592(0x31d)]();},Window_ChoiceList[_0x2c6443(0x272)][_0x2c6443(0x24b)]=function(){const _0x2f3a57=_0x2c6443;let _0x218893=this[_0x2f3a57(0x2fb)]();for(const _0xe391fc of this[_0x2f3a57(0x3ae)]){const _0xcc4c58=_0xe391fc['name'],_0x1b83f9=this[_0x2f3a57(0x223)](_0xcc4c58),_0xd24d21=this[_0x2f3a57(0x1f7)](_0xcc4c58)[_0x2f3a57(0x327)]+_0x1b83f9,_0x5419e8=Math['ceil'](_0xd24d21)+this[_0x2f3a57(0x27f)]()*0x2;_0x218893=Math[_0x2f3a57(0x2d6)](_0x218893,_0x5419e8);}return _0x218893;},Window_ChoiceList[_0x2c6443(0x272)]['getStartingChoiceWidth']=function(){const _0x468713=_0x2c6443;let _0x32aedc=0x60;const _0x26c1d1=$gameMessage[_0x468713(0x24a)]();for(const _0x35f380 of _0x26c1d1){_0x35f380[_0x468713(0x22e)](/<CHOICE WIDTH:[ ](\d+)>/gi)&&(_0x32aedc=Math[_0x468713(0x2d6)](_0x32aedc,Number(RegExp['$1'])));}return _0x32aedc;},Window_ChoiceList[_0x2c6443(0x272)][_0x2c6443(0x1e8)]=function(_0x6acfd3){const _0x10552a=_0x2c6443,_0x4ae744=this[_0x10552a(0x40b)](_0x6acfd3),_0x500f38=$gameSystem[_0x10552a(0x228)]()!=='default'?_0x10552a(0x36a)[_0x10552a(0x233)]($gameSystem['getChoiceListTextAlign']()):'',_0x12d9cc=_0x500f38+this[_0x10552a(0x2d9)](_0x6acfd3);this[_0x10552a(0x330)](this[_0x10552a(0x211)](_0x6acfd3));const _0x2fa3b0=this[_0x10552a(0x1f7)](_0x12d9cc)[_0x10552a(0x3c3)],_0x5351fe=_0x4ae744['x']+this[_0x10552a(0x223)](_0x12d9cc),_0x42e0d5=Math[_0x10552a(0x2d6)](_0x4ae744['y'],_0x4ae744['y']+Math[_0x10552a(0x3fa)]((_0x4ae744[_0x10552a(0x3c3)]-_0x2fa3b0)/0x2));this[_0x10552a(0x451)](_0x12d9cc,_0x5351fe,_0x42e0d5,_0x4ae744[_0x10552a(0x327)]);},Window_ChoiceList['prototype'][_0x2c6443(0x223)]=function(_0xb8192){const _0x27432a=_0x2c6443;let _0xfb11b0=0x0;return _0xb8192[_0x27432a(0x22e)](/<CHOICE INDENT:[ ](\d+)>/gi)&&(_0xfb11b0=Number(RegExp['$1'])),_0xfb11b0;},Window_ChoiceList['prototype'][_0x2c6443(0x401)]=function(){const _0x55739a=_0x2c6443;$gameMessage[_0x55739a(0x21b)](this[_0x55739a(0x2ab)]()),this['_messageWindow']['terminateMessage'](),this[_0x55739a(0x359)]();};function _0x4ea5(){const _0x846207=['addMessageCoreCommands','_scene','convertShowChoiceEscapeCodes','setTextDelay','[0]','textSizeExRaw','TextCodeActions','TEXTALIGNMENT','round','processEscapeCharacter','</LEFT>','type','actor','moveBy','add','callOkHandler','easeInOut','makeData','Armors','addMessageCommonEvent','_messagePositionReset','Game_Map_setupEvents','scale','isColorLocked','erasePicture','itemRectWithPadding','currencyUnit','General','Window_Base_processControlCharacter','isVolumeSymbol','clearCommandList','calcWindowHeight','TextSpeed','updateBackground','ConfigManager_makeData','faceWidth','Window_Message_updatePlacement','messageCoreTextSpeed','_pictureTextCache','split','3340DcPlCK','databaseObjectName','_messageOffsetY','MaxCols','MessageTextDelay','_nameBoxWindow','getLastGainedItemData','_pictureTextHeight','STR','_currentAutoSize','_targets','Game_Map_initialize','Undefined','currentCommand','text','setMessageWindowWidth','constructor','COLORLOCK','changeTextSpeed','addCommand','_cancelButton','toUpperCase','isItem','gainItem','Window_Options_statusText','BOLD','ARRAYNUM','\x1bI[%1]','TightWrap','Game_Interpreter_setupChoices','obtainExp','_messageOffsetX','convertNewPageTextStateMacros','MessageWindow','default','clearAllPictureTexts','setWaitMode','launchMessageCommonEvent','emerge','Scene_Boot_onDatabaseLoaded','processActorNameAutoColorChanges','quantity','inputtingAction','realPictureId','convertBaseEscapeCharacters','processPyTextCode','ParseArmorNotetags','startX','Window_Message_clearFlags','upperleft','<COLORLOCK>','_textColorStack','paintOpacity','messageRows','resetWordWrap','drawTextEx','VisuMZ_0_CoreEngine','Window_Message_terminateMessage','exit','<BR>','adjustShowChoiceDefault','Name','_wordWrap','updateOffsetPosition','Sprite_Picture_updateBitmap','PictureIDs','964403CSrJGy','ParseAllNotetags','parseChoiceText','isMessageWindowWordWrap','_pictures','updateBitmap','\x1bCOLORLOCK[0]','clearActorNameAutoColor','isSceneMap','PREVCOLOR','erasePictureTextBuffer','needsNewPage','\x1bTEXTALIGNMENT[1]','SWITCH','ChoiceWindowProperties','Window_Message_processEscapeCharacter','Actors','placeCancelButton','ChoiceWindowMaxRows','indexOf','visible','drawItem','return\x20\x27','choiceLineHeight','processCustomWait','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','convertTextAlignmentEscapeCharacters','resizePictureText','convertEscapeCharacters','336wIwYbL','textSpeed','drawPictureTextZone','ParseSkillNotetags','calcMoveEasing','createPictureText','Window_Message_newPage','textSizeEx','synchronizeNameBox','<LEFT>','easeIn','faceName','parameters','isArmor','AddAutoColor','_autoSizeCheck','boxWidth','join','convertMessageCoreEscapeActions','numVisibleRows','addedWidth','setupNumInput','name','FontSmallerCap','processAutoPosition','code','PictureTextChange','processTextAlignmentChange','convertTextMacros','drawBackPicture','follower','battleTargetName','TextColor%1','isCommandEnabled','Items','setPictureTextBuffer','obtainEscapeString','_indent','initMessageCore','changeValue','surprise','ceil','attachPictureText','onChoice','messageWidth','Classes','WORD_WRAP_PADDING','createTextState','obtainGold','setupEvents','Window_Options_isVolumeSymbol','getChoiceIndent','AutoColorBypassList','addedHeight','message','STRUCT','getChoiceListTextAlign','choiceTextAlign','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Enemies','isInputting','TextMacros','match','loadPicture','ParseEnemyNotetags','MsgWindowOffsetX','convertMessageCoreEscapeReplacements','format','actorName','convertFontSettingsEscapeCharacters','Window_Message_synchronizeNameBox','AutoColor','setRelativePosition','393WOWBMt','10ZyLEMA','battleActionName','FastForwardKey','openness','_resetRect','isRunning','setWordWrap','TextJS','convertButtonAssistText','autoPositionOffsetY','convertBackslashCharacters','ARRAYJSON','anchor','CreateAutoColorRegExpLists','isPressed','SortObjectByKeyLength','choices','maxChoiceWidth','ChoiceWindowLineHeight','registerSelfEvent','lineHeight','test','isRTL','Game_Screen_erasePicture','ARRAYSTR','addLoadListener','victory','windowX','down','innerHeight','MaxRows','applyMoveEasing','activate','_moveTargetY','isAutoColorAffected','ANY','Window_ChoiceList_windowX','blt','isBreakShowTextCommands','_eventId','choicePositionType','updateTransform','_moveTargetWidth','lowerleft','splice','_pictureText','processAutoSize','updateRelativePosition','processDrawPicture','WRAPBREAK','textSizeExWordWrap','_pictureTextWidth','moveTo','createContents','HelpWindow','registerActorNameAutoColorChanges','prototype','startY','WAIT','lowerright','easeOut','setMessageWindowXyOffsets','VisuMZ_1_EventsMoveCore','updatePlacement','CENTERPICTURE','</CENTER>','value','Window_ChoiceList_updatePlacement','fontSize','itemPadding','Window_NameBox_updatePlacement','clearPictureTextRefresh','update','updateAutoSizePosition','addExtraShowChoices','nextEventCode','_data','right','updateDimensions','<WORDWRAP>','maxCommands','CreateAutoColorRegExpListEntries','postFlushTextState','setTextAlignment','ParseItemNotetags','Skills','updateAutoPosition','min','getConfigValue','refresh','substring','setLastGainedItemData','partyMemberName','shift','setup','_lastGainedItemData','choiceRows','maxCols',')))','move','ParseClassNotetags','TextAlign','processFsTextCode','\x1bTEXTALIGNMENT[0]','processWrapBreak','rtl','EVAL','setupChoices','\x1bITALIC[0]','_index','textCodeCheck','fontItalic','resetPositionX','currentExt','adjustShowChoiceExtension','\x1bi[%1]%2','Game_System_initialize','preConvertEscapeCharacters','PictureTextErase','SWITCHES','SHOW','Type','autoPositionOffsetX','TextManager_message','processNewLine','preemptive','Weapons','StretchDimmedBg','setMessageWindowWordWrap','battle\x20enemy','process_VisuMZ_MessageCore_TextCodes_Action','_commonEventId','_autoSizeRegexp','initialize','returnPreservedFontSettings','outlineColor','windowWidth','preFlushTextState','postConvertEscapeCharacters','list','CreateAutoColorFor','_macroBypassWordWrap','CommonEvent','_moveEasingType','PICTURE','\x1bC[%1]%2\x1bPREVCOLOR[0]','FontChangeValue','canMove','clampPlacementPosition','_pictureTextSprite','onNewPageMessageCore','convertVariableEscapeCharacters','_textDelayCount','processAllText','prepareShowTextCommand','processCharacter','max','windowPadding','isChoiceVisible','commandName','(((','makeCommandList','setChoiceListLineHeight','sort','clamp','followers','addWrapBreakAfterPunctuation','Window_Base_textSizeEx','_interpreter','updateForcedPlacement','_pictureTextRefresh','31462vbuEMW','anyPictureTextChanges','description','toLowerCase','instantTextSpeed','ConvertParams','map\x20event','updateXyOffsets','setupItemChoice','processFontChangeItalic','getChoiceListMaxColumns','maxFontSizeInLine','MessageWindowXyOffsets','return\x200','statusText','_autoPosRegExp','EndPadding','defeat','resetTextColor','length','</RIGHT>','_pictureTextBuffer','getStartingChoiceWidth','stretchDimmerSprite','Instant','lastGainedObjectQuantity','makeDeepCopy','innerWidth','floor','ChoiceWindowTextAlign','Window_Base_update','needsPictureTextRefresh','contents','Settings','commandSymbol','battle\x20actor','NameBoxWindowOffsetY','_pictureId','outlineWidth','MessageWidth','drawBackCenteredPicture','setBackground','filter','setMessageWindowRows','setColorLock','helpWordWrap','command101','addGeneralOptions','includes','clearFlags','index','ParseStateNotetags','terminateMessage','processDrawCenteredPicture','Window_Options_addGeneralOptions','</I>','getChoiceListMaxRows','DefaultOutlineWidth','members','Window_Base_changeTextColor','790657LLSQcx','_centerMessageWindow','OffsetY','RelativePXPY','Window_Base_initialize','AddOption','width','battle\x20party','fontFace','_moveTargetX','messageWordWrap','updateEvents','Rows','registerResetRect','Window_Message_isTriggered','changePaintOpacity','processColorLock','Window_Base_processEscapeCharacter','_autoColorActorNames','processStoredAutoColorChanges','Window_Help_refresh','updateOverlappingY','anchorPictureText','MsgWindowOffsetY','contentsBack','_relativePosition','textWidth','drawing','convertLockColorsEscapeCharacters','_positionType','applyDatabaseAutoColor','_messageCommonEvents','NameBoxWindowOffsetX','States','</WORDWRAP>','requestPictureTextRefresh','bind','map\x20actor','_wholeMoveDuration','getPictureTextData','DISABLE','ParseWeaponNotetags','ChoiceWindowMaxCols','setChoiceListMaxColumns','_moveTargetHeight','_textMacroFound','eraseAllPictureTexts','getMessageWindowXyOffsets','TextCodeReplace','makeFontSmaller','Window_Options_changeVolume','JSON','FontBiggerCap','Game_Screen_clearPictures','_target','addMessageCoreTextSpeedCommand','close','refreshDimmerBitmap','makeFontBigger','processAutoColorWords','addChildAt','substr','453635SPrBVl','isSceneBattle','changeTextColor','start','isChoiceEnabled','1180cRSdVP','textColor','</COLORLOCK>','item','LineHeight','call','<%1>','outputHeight','adjustShowChoiceCancel','outputWidth','choice','indent','_texts','updatePictureText','mainFontFace','onDatabaseLoaded','AutoColorRegExp','textSizeExTextAlignment','_forcedPosition','slice','Window_NameBox_refresh','Window_Base_processAllText','choiceCols','PictureTextRefresh','_colorLock','_autoPositionTarget','colSpacing','OffsetX','processCommonEvent','Game_Map_refresh','boxHeight','Padding','_spriteset','obtainEscapeParam','ConvertTextAutoColorRegExpFriendly','processPreviousColor','applyData','WordWrap','addContinuousShowTextCommands','COMMONEVENT','getMessageWindowRows','processMessageCoreEscapeActions','\x1bTEXTALIGNMENT[3]','parse','26QbfGOv','Window_Message_needsNewPage','_moveDuration','getPreservedFontSettings','isWeapon','_pictureTextWindow','levelUp','map\x20player','startWait','updateNameBoxMove','updateMessageCommonEvents','ITALIC','\x1bITALIC[1]','setChoiceListMaxRows','replace','battleUserName','\x1bBOLD[0]','</B>','setFaceImage','clear','upperright','clearPictures','<LINE\x20BREAK>','ARRAYEVAL','isBusy','changeVolume','itemHeight','textSpeedStatusText','prepareWordWrapEscapeCharacters','messagePositionReset','_list','ARRAYFUNC','isContinuePrepareShowTextCommands','processFontChangeBold','fontBold','remove','_MessageCoreSettings','_messageWindow','menu','textCodeResult','TextStr','unshift','left','setPositionType','Scene_Options_maxCommands','9MCUGKh','isHelpWindowWordWrap','trim','getInputButtonString','process_VisuMZ_MessageCore_TextCodes_Replace','addContinuousShowChoices','height','Width','processTextAlignmentX','updateMove','_textDelay','getPictureTextBuffer','map','MessageCore','process_VisuMZ_MessageCore_TextMacros','prepareAutoSizeEscapeCharacters','Window_Base_processNewLine','1662mqfqDM','isWordWrapEnabled','setChoiceListTextAlign','\x1bWrapBreak[0]','messageCoreWindowX','<RIGHT>','resetFontSettings','1279816wSplzE','_dimmerSprite','outLineColor','initTextAlignement','getChoiceListLineHeight','process_VisuMZ_MessageCore_AutoColor','prepareForcedPositionEscapeCharacters','newPage','defaultColor','<B>','map\x20party','messageWindowRect','getPictureText','getMessageWindowWidth','convertHardcodedEscapeReplacements','iconIndex','Match','drawPictureText','\x1bTEXTALIGNMENT','registerCommand','setSpeakerName','getTextAlignment','MessageWindowProperties','ConfigManager_applyData','exec','prepareShowTextFollowups','event','push','center'];_0x4ea5=function(){return _0x846207;};return _0x4ea5();}