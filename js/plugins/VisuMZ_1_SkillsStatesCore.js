//=============================================================================
// VisuStella MZ - Skills & States Core
// VisuMZ_1_SkillsStatesCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_SkillsStatesCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SkillsStatesCore = VisuMZ.SkillsStatesCore || {};
VisuMZ.SkillsStatesCore.version = 1.32;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.32] [SkillsStatesCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Skills_and_States_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Skills & States Core plugin extends and builds upon the functionality of
 * RPG Maker MZ's inherent skill, state, and buff functionalities and allows
 * game devs to customize its various aspects.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Assigning multiple Skill Types to Skills.
 * * Making custom Skill Cost Types (such as HP, Gold, and Items).
 * * Allowing Skill Costs to become percentile-based or dynamic either directly
 *   through the Skills themselves or through trait-like notetags.
 * * Replacing gauges for different classes to display different types of
 *   Skill Cost Type resources.
 * * Hiding/Showing and enabling/disabling skills based on switches, learned
 *   skills, and code.
 * * Setting rulings for states, including if they're cleared upon death, how
 *   reapplying the state affects their turn count, and more.
 * * Allowing states to be categorized and affected by categories, too.
 * * Displaying turn counts on states drawn in the window or on sprites.
 * * Manipulation of state, buff, and debuff turns through skill and item
 *   effect notetags.
 * * Create custom damage over time state calculations through notetags.
 * * Allow database objects to apply passive states to its user.
 * * Passive states can have conditions before they become active as well.
 * * Updated Skill Menu Scene layout to fit more modern appearances.
 * * Added bonus if Items & Equips Core is installed to utilize the Shop Status
 *   Window to display skill data inside the Skill Menu.
 * * Control over various aspects of the Skill Menu Scene.
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
 * Action End Removal for States
 * 
 * - If your Plugin Parameter settings for "Action End Update" are enabled,
 * then "Action End" has been updated so that it actually applies per action
 * used instead of just being at the start of a battler's action set.
 * 
 * - However, there are side effects to this: if a state has the "Cannot Move"
 * restriction along with the "Action End" removal timing, then unsurprisingly,
 * the state will never wear off because it's now based on actual actions
 * ending. To offset this and remove confusion, "Action End" auto-removal
 * timings for states with "Cannot Move" restrictions will be turned into
 * "Turn End" auto-removal timings while the "Action End Update" is enabled.
 * 
 * - This automatic change won't make it behave like an "Action End" removal
 * timing would, but it's better than completely softlocking a battler.
 * 
 * ---
 *
 * Buff & Debuff Level Management
 *
 * - In RPG Maker MZ, buffs and debuffs when applied to one another will shift
 * the buff modifier level up or down. This plugin will add an extra change to
 * the mechanic by making it so that once the buff modifier level reaches a
 * neutral point, the buff or debuff is removed altogether and resets the buff
 * and debuff turn counter for better accuracy.
 *
 * ---
 *
 * Skill Costs
 *
 * - In RPG Maker MZ, skill costs used to be hard-coded. Now, all Skill Cost
 * Types are now moved to the Plugin Parameters, including MP and TP. This
 * means that from payment to checking for them, it's all done through the
 * options available.
 *
 * - By default in RPG Maker MZ, displayed skill costs would only display only
 * one type: TP if available, then MP. If a skill costs both TP and MP, then
 * only TP was displayed. This plugin changes that aspect by displaying all the
 * cost types available in order of the Plugin Parameter Skill Cost Types.
 *
 * - By default in RPG Maker MZ, displayed skill costs were only color-coded.
 * This plugin changes that aspect by displaying the Skill Cost Type's name
 * alongside the cost. This is to help color-blind players distinguish what
 * costs a skill has.
 *
 * ---
 *
 * Sprite Gauges
 *
 * - Sprite Gauges in RPG Maker MZ by default are hard-coded and only work for
 * HP, MP, TP, and Time (used for ATB). This plugin makes it possible for them
 * to be customized through the use of Plugin Parameters under the Skill Cost
 * Types and their related-JavaScript entries.
 *
 * ---
 * 
 * State Displays
 * 
 * - To put values onto states and display them separately from the state turns
 * you can use the following script calls.
 * 
 *   battler.getStateDisplay(stateId)
 *   - This returns whatever value is stored for the specified battler under
 *     that specific state value.
 *   - If there is no value to be returned it will return an empty string.
 * 
 *   battler.setStateDisplay(stateId, value)
 *   - This sets the display for the battler's specific state to whatever you
 *     declared as the value.
 *   - The value is best used as a number or a string.
 * 
 *   battler.clearStateDisplay(stateId)
 *   - This clears the display for the battler's specific state.
 *   - In short, this sets the stored display value to an empty string.
 * 
 * ---
 *
 * Window Functions Moved
 *
 * - Some functions found in RPG Maker MZ's default code for Window_StatusBase
 * and Window_SkillList are now moved to Window_Base to make the functions
 * available throughout all windows for usage.
 *
 * ---
 *
 * ============================================================================
 * Slip Damage Popup Clarification
 * ============================================================================
 * 
 * Slip Damage popups only show one popup for HP, MP, and TP each and it is the
 * grand total of all the states and effects combined regardless of the number
 * of states and effects on a battler. This is how it is in vanilla RPG Maker
 * MZ and this is how we intend for it to be with the VisuStella MZ library.
 * 
 * This is NOT a bug!
 * 
 * The reason we are not changing this is because it does not properly relay
 * information to the player accurately. When multiple popups appear, players
 * only have roughly a second and a half to calculate it all for any form of
 * information takeaway. We feel it is better suited for the player's overall
 * convenience to show a cummulative change and steer the experience towards a
 * more positive one.
 *
 * ============================================================================
 * Passive State Clarification
 * ============================================================================
 * 
 * This section will explain various misconceptions regarding passive states.
 * No, passive states do not work the same way as states code-wise. Yes, they
 * use the same effects as states mechanically, but there are differences.
 * 
 * ---
 * 
 * For those using the code "a.isStateAffected(10)" to check if a target is
 * affected by a state or not, this does NOT check passive states. This only
 * checks for states that were directly applied to the target.
 * 
 * This is NOT a bug.
 * 
 * Instead, use "a.states().includes($dataStates[10])" to check for them. This
 * code will search for both directly applied states and passive states alike.
 *
 * ---
 * 
 * As passive states are NOT considered directly applied to, they do NOT match
 * a Conditional Branch's state check as well. The Conditional Branch effect
 * checks for an affected state.
 * 
 * ---
 * 
 * Because passive states are NOT directly applied to a battler, the functions
 * of "addNewState", "addState", "eraseState", "removeState" do NOT apply to
 * passive states either. This means that any of the related JS notetags tied
 * to those functions will not occur either.
 * 
 * ---
 * 
 * Why are passive states not considered affected by? Let's look at it
 * differently. There are two ways to grant skills to actors. They can acquire
 * skills by levels/items/events or they can equip gear that temporarily grants
 * the skill in question.
 * 
 * Learning the skill is direct. Temporarily granting the skill is indirect.
 * These two factors have mechanical importance and require differentiation.
 * 
 * Regular states and passive states are the same way. Regular states are
 * directly applied, therefore, need to be distinguished in order for things
 * like state turns and steps, removal conditionals, and similar to matter at
 * all. Passive states are indirect and are therefore, unaffected by state
 * turns, steps, and removal conditions. These mechanical differences are
 * important for how RPG Maker works.
 * 
 * ---
 * 
 * Once again, it is NOT a bug that when using "a.isStateAffected(10)" to
 * check if a target has a passive state will return false.
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
 * === General Skill Notetags ===
 *
 * The following are general notetags that are skill-related.
 *
 * ---
 *
 * <Skill Type: x>
 * <Skill Types: x,x,x>
 *
 * <Skill Type: name>
 * <Skill Types: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Marks the skill to have multiple Skill Types, meaning they would appear
 *   under different skill types without needing to create duplicate skills.
 * - Replace 'x' with a number value representing the Skill Type's ID.
 * - If using 'name' notetag variant, replace 'name' with the Skill Type(s)
 *   name desired to be added.
 *
 * ---
 * 
 * <List Name: name>
 * 
 * - Used for: Skill Notetags
 * - Makes the name of the skill appear different when show in the skill list.
 * - Using \V[x] as a part of the name will display that variable.
 * 
 * ---
 *
 * === Skill Cost Notetags ===
 *
 * The following are notetags that can be used to adjust skill costs. Some of
 * these notetags are added through the Plugin Parameter: Skill Cost Types and
 * can be altered there. This also means that some of these notetags can have
 * their functionality altered and/or removed.
 *
 * ---
 *
 * <type Cost: x>
 * <type Cost: x%>
 *
 * - Used for: Skill Notetags
 * - These notetags are used to designate costs of custom or already existing
 *   types that cannot be made by the Database Editor.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'x' with a number value to determine the exact type cost value.
 *   This lets you bypass the Database Editor's limit of 9,999 MP and 100 TP.
 * - The 'x%' version is replaced with a percentile value to determine a cost
 *   equal to a % of the type's maximum quantity limit.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 *
 * Examples:
 *   <HP Cost: 500>
 *   <MP Cost: 25%>
 *   <Gold Cost: 3000>
 *   <Potion Cost: 5>
 *
 * ---
 *
 * <type Cost Max: x>
 * <type Cost Min: x>
 *
 * - Used for: Skill Notetags
 * - These notetags are used to ensure conditional and % costs don't become too
 *   large or too small.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'x' with a number value to determine the maximum or minimum values
 *   that the cost can be.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 *
 * Examples:
 *   <HP Cost Max: 1500>
 *   <MP Cost Min: 5>
 *   <Gold Cost Max: 10000>
 *   <Potion Cost Min: 3>
 *
 * ---
 *
 * <type Cost: +x>
 * <type Cost: -x>
 *
 * <type Cost: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - For % notetag variant: Replace 'x' with a number value to determine the
 *   rate to adjust the Skill Cost Type by as a flat value. This is applied
 *   before <type Cost: +x> and <type Cost: -x> notetags.
 * - For + and - notetag variants: Replace 'x' with a number value to determine
 *   how much to adjust the Skill Cost Type by as a flat value. This is applied
 *   after <type Cost: x%> notetags.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 *
 * Examples:
 *   <HP Cost: +20>
 *   <MP Cost: -10>
 *   <Gold Cost: 50%>
 *   <Potion Cost: 200%>
 *
 * ---
 *
 * <Custom Cost Text>
 *  text
 * </Custom Cost Text>
 *
 * - Used for: Skill Notetags
 * - Allows you to insert custom text into the skill's cost area towards the
 *   end of the costs.
 * - Replace 'text' with the text you wish to display.
 * - Text codes may be used.
 *
 * ---
 *
 * === JavaScript Notetags: Skill Costs ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine any dynamic Skill Cost Types used for particular skills.
 *
 * ---
 *
 * <JS type Cost>
 *  code
 *  code
 *  cost = code;
 * </JS type Cost>
 *
 * - Used for: Skill Notetags
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'code' to determine the type 'cost' of the skill.
 * - Insert the final type cost into the 'cost' variable.
 * - The 'user' variable refers to the user about to perform the skill.
 * - The 'skill' variable refers to the skill being used.
 * - Functionality for the notetag can be altered in the Plugin Parameters.
 *
 * ---
 *
 * === Gauge Replacement Notetags ===
 *
 * Certain classes can have their gauges swapped out for other Skill Cost
 * Types. This is especially helpful for the classes that don't utilize those
 * Skill Cost Types. You can mix and match them however you want.
 *
 * ---
 *
 * <Replace HP Gauge: type>
 * <Replace MP Gauge: type>
 * <Replace TP Gauge: type>
 *
 * - Used for: Class Notetags
 * - Replaces the HP (1st), MP (2nd), or TP (3rd) gauge with a different Skill
 *   Cost Type.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'type' with 'none' to not display any gauges there.
 * - The <Replace TP Gauge: type> will require 'Display TP in Window' setting
 *   to be on in the Database > System 1 tab.
 * - Functionality for the notetags can be altered by changes made to the
 *   Skill & States Core Plugin Parameters.
 *
 * ---
 *
 * === Skill Accessibility Notetags ===
 *
 * Sometimes, you don't want all skills to be visible whether it be to hide
 * menu-only skills during battle, until certain switches are turned ON/OFF, or
 * until certain skills have been learned.
 *
 * ---
 *
 * <Hide in Battle>
 * <Hide outside Battle>
 *
 * - Used for: Skill Notetags
 * - Makes the specific skill visible or hidden depending on whether or not the
 *   player is currently in battle.
 *
 * ---
 *
 * <Show Switch: x>
 *
 * <Show All Switches: x,x,x>
 * <Show Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's visibility.
 * - If 'All' notetag variant is used, skill will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, skill will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide Switch: x>
 *
 * <Hide All Switches: x,x,x>
 * <Hide Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's visibility.
 * - If 'All' notetag variant is used, skill will be shown until all switches
 *   are ON. Then, it would be hidden.
 * - If 'Any' notetag variant is used, skill will be hidden if any of the
 *   switches are ON. Otherwise, it would be shown.
 *
 * ---
 *
 * <Show if learned Skill: x>
 *
 * <Show if learned All Skills: x,x,x>
 * <Show if learned Any Skills: x,x,x>
 *
 * <Show if learned Skill: name>
 *
 * <Show if learned All Skills: name, name, name>
 * <Show if learned Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills learned.
 * - This does not apply to skills added by traits on actors, classes, any
 *   equipment, or states. These are not considered learned skills. They are
 *   considered temporary skills.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be hidden until all skills
 *   are learned. Then, it would be shown.
 * - If 'Any' notetag variant is used, skill will be shown if any of the skills
 *   are learned. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide if learned Skill: x>
 *
 * <Hide if learned All Skills: x,x,x>
 * <Hide if learned Any Skills: x,x,x>
 *
 * <Hide if learned Skill: name>
 *
 * <Hide if learned All Skills: name, name, name>
 * <Hide if learned Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills learned.
 * - This does not apply to skills added by traits on actors, classes, any
 *   equipment, or states. These are not considered learned skills. They are
 *   considered temporary skills.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be shown until all skills
 *   are learned. Then, it would be hidden.
 * - If 'Any' notetag variant is used, skill will be hidden if any of the
 *   skills are learned. Otherwise, it would be shown.
 *
 * ---
 *
 * <Show if has Skill: x>
 *
 * <Show if have All Skills: x,x,x>
 * <Show if have Any Skills: x,x,x>
 *
 * <Show if has Skill: name>
 *
 * <Show if have All Skills: name, name, name>
 * <Show if have Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills available.
 * - This applies to both skills that have been learned and/or temporarily
 *   added through traits on actors, classes, equipment, or states.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be hidden until all skills
 *   are learned. Then, it would be shown.
 * - If 'Any' notetag variant is used, skill will be shown if any of the skills
 *   are learned. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide if has Skill: x>
 *
 * <Hide if have All Skills: x,x,x>
 * <Hide if have Any Skills: x,x,x>
 *
 * <Hide if has Skill: name>
 *
 * <Hide if have All Skills: name, name, name>
 * <Hide if have Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills available.
 * - This applies to both skills that have been learned and/or temporarily
 *   added through traits on actors, classes, equipment, or states.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be shown until all skills
 *   are learned. Then, it would be hidden.
 * - If 'Any' notetag variant is used, skill will be hidden if any of the
 *   skills are learned. Otherwise, it would be shown.
 *
 * ---
 *
 * <Enable Switch: x>
 *
 * <Enable All Switches: x,x,x>
 * <Enable Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's enabled status.
 * - If 'All' notetag variant is used, skill will be disabled until all
 *   switches are ON. Then, it would be enabled.
 * - If 'Any' notetag variant is used, skill will be enabled if any of the
 *   switches are ON. Otherwise, it would be disabled.
 *
 * ---
 *
 * <Disable Switch: x>
 *
 * <Disable All Switches: x,x,x>
 * <Disable Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's enabled status.
 * - If 'All' notetag variant is used, skill will be enabled until all switches
 *   are ON. Then, it would be disabled.
 * - If 'Any' notetag variant is used, skill will be disabled if any of the
 *   switches are ON. Otherwise, it would be enabled.
 *
 * ---
 *
 * === JavaScript Notetags: Skill Accessibility ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine if a skill can be accessible visibly or through usage.
 *
 * ---
 *
 * <JS Skill Visible>
 *  code
 *  code
 *  visible = code;
 * </JS Skill Visible>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on JavaScript code.
 * - Replace 'code' to determine the type visibility of the skill.
 * - The 'visible' variable returns a boolean (true/false) to determine if the
 *   skill will be visible or not.
 * - The 'user' variable refers to the user with the skill.
 * - The 'skill' variable refers to the skill being checked.
 * - All other visibility conditions must be met for this code to count.
 *
 * ---
 *
 * <JS Skill Enable>
 *  code
 *  code
 *  enabled = code;
 * </JS Skill Enable>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the skill based on JavaScript code.
 * - Replace 'code' to determine the type enabled status of the skill.
 * - The 'enabled' variable returns a boolean (true/false) to determine if the
 *   skill will be enabled or not.
 * - The 'user' variable refers to the user with the skill.
 * - The 'skill' variable refers to the skill being checked.
 * - All other skill conditions must be met in order for this to code to count.
 *
 * ---
 *
 * === General State-Related Notetags ===
 *
 * The following notetags are centered around states, such as how their turn
 * counts are displayed, items and skills that affect state turns, if the state
 * can avoid removal by death state, etc.
 *
 * ---
 *
 * <No Death Clear>
 *
 * - Used for: State Notetags
 * - Prevents this state from being cleared upon death.
 * - This allows this state to be added to an already dead battler, too.
 *
 * ---
 *
 * <No Recover All Clear>
 *
 * - Used for: State Notetags
 * - Prevents this state from being cleared upon using the Recover All command.
 *
 * ---
 *
 * <Group Defeat>
 *
 * - Used for: State Notetags
 * - If an entire party is affected by states with the <Group Defeat> notetag,
 *   they are considered defeated.
 * - Usage for this includes party-wide petrification, frozen, etc.
 *
 * ---
 *
 * <Reapply Rules: Ignore>
 * <Reapply Rules: Reset>
 * <Reapply Rules: Greater>
 * <Reapply Rules: Add>
 *
 * - Used for: State Notetags
 * - Choose what kind of rules this state follows if the state is being applied
 *   to a target that already has the state. This affects turns specifically.
 * - 'Ignore' will bypass any turn changes.
 * - 'Reset' will recalculate the state's turns.
 * - 'Greater' will choose to either keep the current turn count if it's higher
 *   than the reset amount or reset it if the current turn count is lower.
 * - 'Add' will add the state's turn count to the applied amount.
 * - If this notetag isn't used, it will use the rules set in the States >
 *   Plugin Parameters.
 *
 * ---
 *
 * <Positive State>
 * <Negative State>
 *
 * - Used for: State Notetags
 * - Marks the state as a positive state or negative state, also altering the
 *   state's turn count color to match the Plugin Parameter settings.
 * - This also puts the state into either the 'Positive' category or
 *   'Negative' category.
 *
 * ---
 *
 * <Category: name>
 * <Category: name, name, name>
 *
 * - Used for: State Notetags
 * - Arranges states into certain/multiple categories.
 * - Replace 'name' with a category name to mark this state as.
 * - Insert multiples of this to mark the state with  multiple categories.
 *
 * ---
 *
 * <Categories>
 *  name
 *  name
 * </Categories>
 *
 * - Used for: State Notetags
 * - Arranges states into certain/multiple categories.
 * - Replace each 'name' with a category name to mark this state as.
 *
 * ---
 * 
 * <Resist State Category: name>
 * <Resist State Categories: name, name, name>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the affected battler resist the listed categories.
 * - Replace each 'name' with a category name to resist.
 *   - Insert multiple 'name' entries to add more categories.
 * - This works exactly like how state resistances work in-game. If a battler
 *   who was originally NOT resistant to "Poison" before gaining a
 *   poison-resistant trait, the "Poison" state will remain because it was
 *   applied before poison-resistance as enabled.
 * 
 * ---
 * 
 * <Resist State Categories>
 *  name
 *  name
 *  name
 * </Resist State Categories>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the affected battler resist the listed categories.
 * - Replace each 'name' with a category name to resist.
 *   - Insert multiple 'name' entries to add more categories.
 * - This works exactly like how state resistances work in-game. If a battler
 *   who was originally NOT resistant to "Poison" before gaining a
 *   poison-resistant trait, the "Poison" state will remain because it was
 *   applied before poison-resistance as enabled.
 * 
 * ---
 *
 * <State x Category Remove: y>
 * 
 * <State x Category Remove: All>
 *
 * - Used for: Skill, Item Notetags
 * - Allows the skill/item to remove 'y' states from specific category 'x'.
 * - Replace 'x' with a category name to remove from.
 * - Replace 'y' with the number of times to remove from that category.
 * - Use the 'All' variant to remove all of the states of that category.
 * - Insert multiples of this to remove different types of categories.
 *
 * ---
 * 
 * <Remove Other x States>
 * 
 * - Used for: State Notetags
 * - When the state with this notetag is added, remove other 'x' category
 *   states from the battler (except for the state being added).
 * - Replace 'x' with a category name to remove from.
 * - Insert multiples of this to remove different types of categories.
 * - Useful for thing state types like stances and forms that there is usually
 *   only one active at a time.
 * 
 * ---
 *
 * <Hide State Turns>
 *
 * - Used for: State Notetags
 * - Hides the state turns from being shown at all.
 * - This will by pass any Plugin Parameter settings.
 *
 * ---
 *
 * <Turn Color: x>
 * <Turn Color: #rrggbb>
 *
 * - Used for: State Notetags
 * - Hides the state turns from being shown at all.
 * - Determines the color of the state's turn count.
 * - Replace 'x' with a number value depicting a window text color.
 * - Replace 'rrggbb' with a hex color code for a more custom color.
 *
 * ---
 *
 * <State id Turns: +x>
 * <State id Turns: -x>
 *
 * <Set State id Turns: x>
 *
 * <State name Turns: +x>
 * <State name Turns: -x>
 *
 * <Set State name Turns: x>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is affected by state 'id' or state 'name', change the state
 *   turn duration for target.
 * - For 'id' variant, replace 'id' with the ID of the state to modify.
 * - For 'name' variant, replace 'name' with the name of the state to modify.
 * - Replace 'x' with the value you wish to increase, decrease, or set to.
 * - Insert multiples of this notetag to affect multiple states at once.
 *
 * ---
 *
 * <param Buff Turns: +x>
 * <param Buff Turns: -x>
 *
 * <Set param Buff Turns: x>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is affected by a 'param' buff, change that buff's turn
 *   duration for target.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter buff to modify.
 * - Replace 'x' with the value you wish to increase, decrease, or set to.
 * - Insert multiples of this notetag to affect multiple parameters at once.
 *
 * ---
 *
 * <param Debuff Turns: +x>
 * <param Debuff Turns: -x>
 *
 * <Set param Debuff Turns: x>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is affected by a 'param' debuff, change that debuff's turn
 *   duration for target.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter debuff to modify.
 * - Replace 'x' with the value you wish to increase, decrease, or set to.
 * - Insert multiples of this notetag to affect multiple parameters at once.
 *
 * ---
 *
 * === JavaScript Notetags: On Add/Erase/Expire ===
 *
 * Using JavaScript code, you can use create custom effects that occur when a
 * state has bee added, erased, or expired.
 * 
 * ---
 *
 * <JS On Add State>
 *  code
 *  code
 * </JS On Add State>
 *
 * - Used for: State Notetags
 * - When a state is added, run the code added by this notetag.
 * - The 'user' variable refers to the current active battler.
 * - The 'target' variable refers to the battler affected by this state.
 * - The 'origin' variable refers to the one who applied this state.
 * - The 'state' variable refers to the current state being affected.
 *
 * ---
 *
 * <JS On Erase State>
 *  code
 *  code
 * </JS On Erase State>
 *
 * - Used for: State Notetags
 * - When a state is erased, run the code added by this notetag.
 * - The 'user' variable refers to the current active battler.
 * - The 'target' variable refers to the battler affected by this state.
 * - The 'origin' variable refers to the one who applied this state.
 * - The 'state' variable refers to the current state being affected.
 *
 * ---
 *
 * <JS On Expire State>
 *  code
 *  code
 * </JS On Expire State>
 *
 * - Used for: State Notetags
 * - When a state has expired, run the code added by this notetag.
 * - The 'user' variable refers to the current active battler.
 * - The 'target' variable refers to the battler affected by this state.
 * - The 'origin' variable refers to the one who applied this state.
 * - The 'state' variable refers to the current state being affected.
 *
 * ---
 *
 * === JavaScript Notetags: Slip Damage/Healing ===
 *
 * Slip Damage, in RPG Maker vocabulary, refers to damage over time. The
 * following notetags allow you to perform custom slip damage/healing.
 *
 * ---
 *
 * <JS type Slip Damage>
 *  code
 *  code
 *  damage = code;
 * </JS type Slip Damage>
 *
 * - Used for: State Notetags
 * - Code used to determine how much slip damage is dealt to the affected unit
 *   during each regeneration phase.
 * - Replace 'type' with 'HP', 'MP', or 'TP'.
 * - Replace 'code' with the calculations on what to determine slip damage.
 * - The 'user' variable refers to the origin of the state.
 * - The 'target' variable refers to the affected unit receiving the damage.
 * - The 'state' variable refers to the current state being affected.
 * - The 'damage' variable is the finalized slip damage to be dealt.
 * - When these states are applied via action effects, the slip calculations
 *   are one time calculations made upon applying and the damage is cached to
 *   be used for future on regeneration calculations.
 * - For that reason, do not include game mechanics here such as adding states,
 *   buffs, debuffs, etc. as this notetag is meant for calculations only. Use
 *   the VisuStella Battle Core's <JS Pre-Regenerate> and <JS Post-Regenerate>
 *   notetags for game mechanics instead.
 * - Passive states and states with the <JS Slip Refresh> notetag are exempt
 *   from the one time calculation and recalculated each regeneration phase.
 *
 * ---
 *
 * <JS type Slip Heal>
 *  code
 *  code
 *  heal = code;
 * </JS type Slip Heal>
 *
 * - Used for: State Notetags
 * - Code used to determine how much slip healing is dealt to the affected unit
 *   during each regeneration phase.
 * - Replace 'type' with 'HP', 'MP', or 'TP'.
 * - Replace 'code' with the calculations on what to determine slip healing.
 * - The 'user' variable refers to the origin of the state.
 * - The 'target' variable refers to the affected unit receiving the healing.
 * - The 'state' variable refers to the current state being affected.
 * - The 'heal' variable is the finalized slip healing to be recovered.
 * - When these states are applied via action effects, the slip calculations
 *   are one time calculations made upon applying and the damage is cached to
 *   be used for future on regeneration calculations.
 * - For that reason, do not include game mechanics here such as adding states,
 *   buffs, debuffs, etc. as this notetag is meant for calculations only. Use
 *   the VisuStella Battle Core's <JS Pre-Regenerate> and <JS Post-Regenerate>
 *   notetags for game mechanics instead.
 * - Passive states and states with the <JS Slip Refresh> notetag are exempt
 *   from the one time calculation and recalculated each regeneration phase.
 *
 * ---
 * 
 * <JS Slip Refresh>
 * 
 * - Used for: State Notetags
 * - Refreshes the calculations made for the JS Slip Damage/Heal amounts at the
 *   start of each regeneration phase to allow for dynamic damage ranges.
 * 
 * ---
 *
 * === Passive State Notetags ===
 *
 * Passive States are states that are always applied to actors and enemies
 * provided that their conditions have been met. These can be granted through
 * database objects or through the Passive States Plugin Parameters.
 * 
 * ---
 * 
 * For those using the code "a.isStateAffected(10)" to check if a target is
 * affected by a state or not, this does NOT check passive states. This only
 * checks for states that were directly applied to the target.
 * 
 * This is NOT a bug.
 * 
 * Instead, use "a.states().includes($dataStates[10])" to check for them. This
 * code will search for both directly applied states and passive states alike.
 *
 * ---
 * 
 * As passive states are NOT considered directly applied to, they do NOT match
 * a Conditional Branch's state check as well. The Conditional Branch effect
 * checks for an affected state.
 * 
 * ---
 * 
 * Because passive states are NOT directly applied to a battler, the functions
 * of "addNewState", "addState", "eraseState", "removeState" do NOT apply to
 * passive states either. This means that any of the related JS notetags tied
 * to those functions will not occur either.
 * 
 * ---
 * 
 * Why are passive states not considered affected by? Let's look at it
 * differently. There are two ways to grant skills to actors. They can acquire
 * skills by levels/items/events or they can equip gear that temporarily grants
 * the skill in question.
 * 
 * Learning the skill is direct. Temporarily granting the skill is indirect.
 * These two factors have mechanical importance and require differentiation.
 * 
 * Regular states and passive states are the same way. Regular states are
 * directly applied, therefore, need to be distinguished in order for things
 * like state turns and steps, removal conditionals, and similar to matter at
 * all. Passive states are indirect and are therefore, unaffected by state
 * turns, steps, and removal conditions. These mechanical differences are
 * important for how RPG Maker works.
 * 
 * ---
 * 
 * Once again, it is NOT a bug that when using "a.isStateAffected(10)" to
 * check if a target has a passive state will return false.
 * 
 * ---
 *
 * <Passive State: x>
 * <Passive States: x,x,x>
 *
 * <Passive State: name>
 * <Passive States: name, name, name>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy Notetags
 * - Adds passive state(s) x to trait object, applying it to related actor or
 *   enemy unit(s).
 * - Replace 'x' with a number to determine which state to add as a passive.
 * - If using 'name' notetag variant, replace 'name' with the name of the
 *   state(s) to add as a passive.
 * - Note: If you plan on applying a passive state through a skill, it must be
 *   through a skill that has been learned by the target and not a skill that
 *   is given through a trait.
 *
 * ---
 *
 * <Passive Stackable>
 *
 * - Used for: State Notetags
 * - Makes it possible for this passive state to be added multiple times.
 * - Otherwise, only one instance of the passive state can be available.
 *
 * ---
 *
 * <Passive Condition Class: id>
 * <Passive Condition Classes: id, id, id>
 *
 * <Passive Condition Class: name>
 * <Passive Condition Classes: name, name, name>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the passive state based on the actor's
 *   current class. As long as the actor's current class matches one of the
 *   data entries, the passive condition is considered passed.
 * - For 'id' variant, replace 'id' with a number representing class's ID.
 * - For 'name' variant, replace 'name' with the class's name.
 *
 * ---
 *
 * <Passive Condition Multiclass: id>
 * <Passive Condition Multiclass: id, id, id>
 *
 * <Passive Condition Multiclass: name>
 * <Passive Condition Multiclass: name, name, name>
 *
 * - Used for: State Notetags
 * - Requires VisuMZ_2_ClassChangeSystem!
 * - Determines the passive condition of the passive state based on the actor's
 *   multiclasses. As long as the actor has any of the matching classes
 *   assigned as a multiclass, the passive condition is considered passed.
 * - For 'id' variant, replace 'id' with a number representing class's ID.
 * - For 'name' variant, replace 'name' with the class's name.
 *
 * ---
 *
 * <Passive Condition Switch ON: x>
 *
 * <Passive Condition All Switches ON: x,x,x>
 * <Passive Condition Any Switch ON: x,x,x>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the passive state based on switches.
 * - Replace 'x' with the switch ID to determine the state's passive condition.
 * - If 'All' notetag variant is used, conditions will not be met until all
 *   switches are ON. Then, it would be met.
 * - If 'Any' notetag variant is used, conditions will be met if any of the
 *   switches are ON. Otherwise, it would not be met.
 *
 * ---
 *
 * <Passive Condition Switch OFF: x>
 *
 * <Passive Condition All Switches OFF: x,x,x>
 * <Passive Condition Any Switch OFF: x,x,x>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the passive state based on switches.
 * - Replace 'x' with the switch ID to determine the state's passive condition.
 * - If 'All' notetag variant is used, conditions will not be met until all
 *   switches are OFF. Then, it would be met.
 * - If 'Any' notetag variant is used, conditions will be met if any of the
 *   switches are OFF. Otherwise, it would not be met.
 *
 * ---
 *
 * === JavaScript Notetags: Passive State ===
 *
 * The following is a notetag made for users with JavaScript knowledge to
 * determine if a passive state's condition can be met.
 *
 * ---
 *
 * <JS Passive Condition>
 *  code
 *  code
 *  condition = code;
 * </JS Passive Condition>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the state based on JavaScript code.
 * - Replace 'code' to determine if a passive state's condition has been met.
 * - The 'condition' variable returns a boolean (true/false) to determine if
 *   the passive state's condition is met or not.
 * - The 'user' variable refers to the user affected by the passive state.
 * - The 'state' variable refers to the passive state being checked.
 * - All other passive conditions must be met for this code to count.
 * 
 * **NOTE** Not everything can be used as a custom JS Passive Condition due to
 * limitations of the code. There are failsafe checks to prevent infinite loops
 * and some passive conditions will not register for this reason and the
 * conditional checks will behave as if the passive states have NOT been
 * applied for this reason. Such examples include the following:
 * 
 * - A passive state that requires another passive state
 * - A passive state that requires a trait effect from another state
 * - A passive state that requires a parameter value altered by another state
 * - A passive state that requires equipment to be worn but its equipment type
 *   access is provided by another state.
 * - Anything else that is similar in style.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Skill Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust various aspects of the game regarding skills
 * from the custom Skill Menu Layout to global custom effects made in code.
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Skill Menu Layout provided by this plugin?
 *   - This will automatically enable the Status Window.
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 *
 * Skill Type Window
 * 
 *   Style:
 *   - How do you wish to draw commands in the Skill Type Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Skill Type Window.
 *
 * ---
 *
 * List Window
 * 
 *   Columns:
 *   - Number of maximum columns.
 *
 * ---
 *
 * Shop Status Window
 * 
 *   Show in Skill Menu?:
 *   - Show the Shop Status Window in the Skill Menu?
 *   - This is enabled if the Updated Layout is on.
 * 
 *   Adjust List Window?:
 *   - Automatically adjust the Skill List Window in the Skill Menu if using
 *     the Shop Status Window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this Shop Status Window in the
 *     Skill Menu.
 *
 * ---
 *
 * Skill Types
 * 
 *   Hidden Skill Types:
 *   - Insert the ID's of the Skill Types you want hidden from view ingame.
 * 
 *   Hidden During Battle:
 *   - Insert the ID's of the Skill Types you want hidden during battle only.
 * 
 *   Icon: Normal Type:
 *   - Icon used for normal skill types that aren't assigned any icons.
 *   - To assign icons to skill types, simply insert \I[x] into the
 *     skill type's name in the Database > Types tab.
 * 
 *   Icon: Magic Type:
 *   - Icon used for magic skill types that aren't assigned any icons.
 *   - To assign icons to skill types, simply insert \I[x] into the
 *     skill type's name in the Database > Types tab.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: Skill Conditions:
 *   - JavaScript code for a global-wide skill condition check.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Skill Cost Types
 * ============================================================================
 *
 * Skill Cost Types are the resources that are used for your skills. These can
 * range from the default MP and TP resources to the newly added HP, Gold, and
 * Potion resources.
 *
 * ---
 *
 * Settings
 * 
 *   Name:
 *   - A name for this Skill Cost Type.
 * 
 *   Icon:
 *   - Icon used for this Skill Cost Type.
 *   - Use 0 for no icon.
 * 
 *   Font Color:
 *   - Text Color used to display this cost.
 *   - For a hex color, use #rrggbb with VisuMZ_1_MessageCore
 * 
 *   Font Size:
 *   - Font size used to display this cost.
 *
 * ---
 *
 * Cost Processing
 * 
 *   JS: Cost Calculation:
 *   - Code on how to calculate this resource cost for the skill.
 * 
 *   JS: Can Pay Cost?:
 *   - Code on calculating whether or not the user is able to pay the cost.
 * 
 *   JS: Paying Cost:
 *   - Code for if met, this is the actual process of paying of the cost.
 *
 * ---
 *
 * Window Display
 * 
 *   JS: Show Cost?:
 *   - Code for determining if the cost is shown or not.
 * 
 *   JS: Cost Text:
 *   - Code to determine the text (with Text Code support) used for the
 *     displayed cost.
 *
 * ---
 *
 * Gauge Display
 * 
 *   JS: Maximum Value:
 *   - Code to determine the maximum value used for this Skill Cost resource
 *     for gauges.
 * 
 *   JS: Current Value:
 *   - Code to determine the current value used for this Skill Cost resource
 *     for gauges.
 * 
 *   JS: Draw Gauge:
 *   - Code to determine how to draw the Skill Cost resource for this 
 *     gauge type.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General State Settings
 * ============================================================================
 *
 * These are general settings regarding RPG Maker MZ's state-related aspects
 * from how turns are reapplied to custom code that's ran whenever states are
 * added, erased, or expired.
 *
 * ---
 *
 * General
 * 
 *   Reapply Rules:
 *   - These are the rules when reapplying states.
 *   - Ignore: State doesn't get added.
 *   - Reset: Turns get reset.
 *   - Greater: Turns take greater value (current vs reset).
 *   - Add: Turns add upon existing turns.
 * 
 *   Maximum Turns:
 *   - Maximum number of turns to let states go up to.
 *   - This can be changed with the <Max Turns: x> notetag.
 * 
 *   Action End Update:
 *   - States with "Action End" auto-removal will also update turns at the end
 *     of each action instead of all actions.
 * 
 *   Turn End on Map:
 *   - Update any state and buff turns on the map after this many steps.
 *   - Use 0 to disable.
 *
 * ---
 *
 * Turn Display
 * 
 *   Show Turns?:
 *   - Display state turns on top of window icons and sprites?
 * 
 *   Turn Font Size:
 *   - Font size used for displaying turns.
 * 
 *   Offset X:
 *   - Offset the X position of the turn display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the turn display.
 * 
 *   Turn Font Size:
 *   - Font size used for displaying turns.
 * 
 *   Turn Color: Neutral:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Turn Color: Positive:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Turn Color: Negative:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * Data Display
 * 
 *   Show Data?:
 *   - Display state data on top of window icons and sprites?
 * 
 *   Data Font Size:
 *   - Font size used for displaying state data.
 * 
 *   Offset X:
 *   - Offset the X position of the state data display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the state data display.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: On Add State:
 *   - JavaScript code for a global-wide custom effect whenever a state
 *     is added.
 * 
 *   JS: On Erase State:
 *   - JavaScript code for a global-wide custom effect whenever a state
 *     is erased.
 * 
 *   JS: On Expire State:
 *   - JavaScript code for a global-wide custom effect whenever a state
 *     has expired.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Buff/Debuff Settings
 * ============================================================================
 *
 * Buffs and debuffs don't count as states by RPG Maker MZ's mechanics, but
 * they do function close enough for them to be added to this plugin for
 * adjusting. Change these settings to make buffs and debuffs work to your
 * game's needs.
 *
 * ---
 *
 * General
 * 
 *   Reapply Rules:
 *   - These are the rules when reapplying buffs/debuffs.
 *   - Ignore: Buff/Debuff doesn't get added.
 *   - Reset: Turns get reset.
 *   - Greater: Turns take greater value (current vs reset).
 *   - Add: Turns add upon existing turns.
 * 
 *   Maximum Turns:
 *   - Maximum number of turns to let buffs and debuffs go up to.
 *
 * ---
 *
 * Stacking
 * 
 *   Max Stacks: Buff:
 *   - Maximum number of stacks for buffs.
 * 
 *   Max Stacks: Debuff:
 *   - Maximum number of stacks for debuffs.
 * 
 *   JS: Buff/Debuff Rate:
 *   - Code to determine how much buffs and debuffs affect parameters.
 *
 * ---
 *
 * Turn Display
 * 
 *   Show Turns?:
 *   - Display buff and debuff turns on top of window icons and sprites?
 * 
 *   Turn Font Size:
 *   - Font size used for displaying turns.
 * 
 *   Offset X:
 *   - Offset the X position of the turn display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the turn display.
 * 
 *   Turn Color: Buffs:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Turn Color: Debuffs:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * Rate Display
 * 
 *   Show Rate?:
 *   - Display buff and debuff rate on top of window icons and sprites?
 * 
 *   Rate Font Size:
 *   - Font size used for displaying rate.
 * 
 *   Offset X:
 *   - Offset the X position of the rate display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the rate display.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: On Add Buff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     buff is added.
 * 
 *   JS: On Add Debuff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     debuff is added.
 * 
 *   JS: On Erase Buff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     buff is added.
 * 
 *   JS: On Erase Debuff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     debuff is added.
 * 
 *   JS: On Expire Buff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     buff is added.
 * 
 *   JS: On Expire Debuff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     debuff is added.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Passive State Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust passive states that can affect all actors and
 * enemies as well as have global conditions.
 * 
 * ---
 * 
 * For those using the code "a.isStateAffected(10)" to check if a target is
 * affected by a state or not, this does NOT check passive states. This only
 * checks for states that were directly applied to the target.
 * 
 * This is NOT a bug.
 * 
 * Instead, use "a.states().includes($dataStates[10])" to check for them. This
 * code will search for both directly applied states and passive states alike.
 *
 * ---
 * 
 * As passive states are NOT considered directly applied to, they do NOT match
 * a Conditional Branch's state check as well. The Conditional Branch effect
 * checks for an affected state.
 * 
 * ---
 * 
 * Because passive states are NOT directly applied to a battler, the functions
 * of "addNewState", "addState", "eraseState", "removeState" do NOT apply to
 * passive states either. This means that any of the related JS notetags tied
 * to those functions will not occur either.
 * 
 * ---
 * 
 * Why are passive states not considered affected by? Let's look at it
 * differently. There are two ways to grant skills to actors. They can acquire
 * skills by levels/items/events or they can equip gear that temporarily grants
 * the skill in question.
 * 
 * Learning the skill is direct. Temporarily granting the skill is indirect.
 * These two factors have mechanical importance and require differentiation.
 * 
 * Regular states and passive states are the same way. Regular states are
 * directly applied, therefore, need to be distinguished in order for things
 * like state turns and steps, removal conditionals, and similar to matter at
 * all. Passive states are indirect and are therefore, unaffected by state
 * turns, steps, and removal conditions. These mechanical differences are
 * important for how RPG Maker works.
 * 
 * ---
 * 
 * Once again, it is NOT a bug that when using "a.isStateAffected(10)" to
 * check if a target has a passive state will return false.
 * 
 * ---
 *
 * List
 * 
 *   Global Passives:
 *   - A list of passive states to affect actors and enemies.
 * 
 *   Actor-Only Passives:
 *   - A list of passive states to affect actors only.
 * 
 *   Enemy Passives:
 *   - A list of passive states to affect enemies only.
 *
 * ---
 * 
 * Cache
 * 
 *   Switch Refresh?:
 *   - Refresh all battle members when switches are changed in battle?
 *   - This is primarily used for passive state conditions involve parameters
 *     that do not update due to cached data until a refresh occurs.
 *   - If this is on, do not spam Switch changes during battle in order to
 *     prevent lag spikes.
 * 
 *   Variable Refresh?:
 *   - Refresh all battle members when variables are changed in battle?
 *   - This is primarily used for passive state conditions involve parameters
 *     that do not update due to cached data until a refresh occurs.
 *   - If this is on, do not spam Variable changes during battle in order to
 *     prevent lag spikes.
 * 
 * ---
 *
 * Global JS Effects
 * 
 *   JS: Condition Check:
 *   - JavaScript code for a global-wide passive condition check.
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
 * - Yanfly
 * - Arisu
 * - Olivia
 * - Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.32: June 16, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Passive State Settings > Cache > Switch Refresh?
 * *** Plugin Parameters > Passive State Settings > Cache > Variable Refresh?
 * **** Refresh all battle members when switches/variables are changed in
 *      battle?
 * **** This is primarily used for passive state conditions involve parameters
 *      that do not update due to cached data until a refresh occurs.
 * **** If this is on, do not spam Switch/Variable changes during battle in
 *      order to prevent lag spikes.
 * 
 * Version 1.31: April 28, 2022
 * * Bug Fixes!
 * ** Custom Slip Damage JS is now totalled correctly into regular slip damage
 *    totals for damage popups. Fix made by Olivia.
 * 
 * Version 1.30: April 14, 2022
 * * Feature Update!
 * ** Changed the state data removal timing to be after JS notetag effects
 *    take place in order for data such as origin data to remain intact. Update
 *    made by Irina.
 * 
 * Version 1.29: March 31, 2022
 * * Bug Fixes!
 * ** Fixed an error with <State x Category Remove: y> not countaing correctly
 *    unless the state count matched the exact amount. The notetag effect
 *    should work properly now. Fix made by Olivia.
 * 
 * Version 1.28: March 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** <State x Category Remove: All> updated to allow multiple cases in a
 *    single notebox. Updated by Arisu.
 * * New Features!
 * ** New Notetag added by Arisu and sponsored by Archeia!
 * *** <Remove Other x States>
 * **** When the state with this notetag is added, remove other 'x' category
 *      states from the battler (except for the state being added).
 * **** Useful for thing state types like stances and forms that there is
 *      usually only one active at a time.
 * 
 * Version 1.27: January 27, 2022
 * * Bug Fixes!
 * ** Custom JS Slip Damage/Healing values should now be recalculated on
 *    demand. Fix made by Olivia.
 * 
 * Version 1.26: January 20, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Conditional Passive Bypass check is now stronger to prevent even more
 *    infinite loops from happening. Update made by Olivia.
 * * New Features!
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > State Settings > General > Turn End on Map
 * **** Update any state and buff turns on the map after this many steps.
 * **** Use 0 to disable.
 * 
 * Version 1.25: November 11, 2021
 * * Bug Fixes!
 * ** Hidden skill notetags should no longer crash upon not detecting actors
 *    for learned skills. Fix made by Olivia.
 * 
 * Version 1.24: November 4, 2021
 * * Documentation Update!
 * ** Added section: "Slip Damage Popup Clarification"
 * *** Slip Damage popups only show one popup for HP, MP, and TP each and it is
 *     the grand total of all the states and effects combined regardless of the
 *     number of states and effects on a battler. This is how it is in vanilla
 *     RPG Maker MZ and this is how we intend for it to be with the VisuStella
 *     MZ library.
 * *** This is NOT a bug!
 * *** The reason we are not changing this is because it does not properly
 *     relay information to the player accurately. When multiple popups appear,
 *     players only have roughly a second and a half to calculate it all for
 *     any form of information takeaway. We feel it is better suited for the
 *     player's overall convenience to show a cummulative change and steer the
 *     experience towards a more positive one.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.23: September 17, 2021
 * * Compatibility Update!
 * ** RPG Maker MZ 1.3.3 compatibility.
 * *** Updated how gauges are drawn.
 * *** Skill Cost Types Plugin Parameters need to be updated for those who want
 *     the updated gauges. This can be done easily with the following steps:
 * **** Step 1: Create a new project.
 * **** Step 2: Install Skills and States Core version 1.23 into it.
 * **** Step 3: Copy the Plugin Parameter Settings for "Skill Cost Types".
 * **** Step 4: Return back to your original project.
 * **** Step 5: Paste Plugin Parameter Settings on top of "Skill Cost Types".
 * 
 * Version 1.22: August 6, 2021
 * * Documentation Update!
 * ** "Action End Removal for States" under Major Updates is changed to:
 * *** If your Plugin Parameter settings for "Action End Update" are enabled,
 *     then "Action End" has been updated so that it actually applies per
 *     action used instead of just being at the start of a battler's action
 *     set.
 * *** However, there are side effects to this: if a state has the "Cannot
 *     Move" restriction along with the "Action End" removal timing, then
 *     unsurprisingly, the state will never wear off because it's now based on
 *     actual actions ending. To offset this and remove confusion, "Action End"
 *     auto-removal timings for states with "Cannot Move" restrictions will be
 *     turned into "Turn End" auto-removal timings while the "Action End
 *     Update" is enabled.
 * *** This automatic change won't make it behave like an "Action End" removal
 *     timing would, but it's better than completely softlocking a battler.
 * * Feature Update!
 * ** Those using "Cannot Move" states with "Action End" auto-removal will now
 *    have be automatically converted into "Turn End" auto-removal if the
 *    plugin parameter "Action End Update" is set to true. Update by Irina.
 * 
 * Version 1.21: July 30, 2021
 * * Documentation Update!
 * ** Expanded "Action End Removal for States" section in Major Changes.
 * *** These changes have been in effect since Version 1.07 but have not been
 *     explained in excess detail in the documentation since.
 * **** Action End has been updated so that it actually applies per action used
 *      instead of just being at the start of a battler's action set. However,
 *      there are side effects to this: if a state has the "Cannot Move"
 *      restriction along with the "Action End" removal timing, then
 *      unsurprisingly, the state will never wear off because it's now based on
 *      actual actions ending. There are two solutions to this:
 * **** Don't make "Cannot Move" restriction states with "Action End". This is
 *      not a workaround. This is how the state removal is intended to work
 *      under the new change.
 * **** Go to the Skills & States Core Plugin Parameters, go to State
 *      Setttings, look for "Action End Update", and set it to false. You now
 *      reverted the removal timing system back to how it originally was in RPG
 *      Maker MZ's default battle system where it only updates based on an
 *      action set rather than per actual action ending.
 * 
 * Version 1.20: June 18, 2021
 * * Feature Update!
 * ** Updated automatic caching for conditional passive states to update more
 *    efficiently. Update made by Arisu.
 * 
 * Version 1.19: June 4, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.18: May 21, 2021
 * * Documentation Update
 * ** Added "Passive State Clarification" section.
 * *** As there is a lot of confusion regarding how passive states work and how
 *     people still miss the explanations found in the "Passive State Notetags"
 *     section AND the "Plugin Parameters: Passive State Settings", we are
 *     adding a third section to explain how they work.
 * *** All three sections will contain the full detailed explanation of how
 *     passive states work to clear common misconceptions about them.
 * 
 * Version 1.17: May 7, 2021
 * * Bug Fixes
 * ** State category removal is now usable outside of battle. Fix by Irina.
 * 
 * Version 1.16: April 30, 2021
 * * Bug Fixes!
 * ** When states with step removal have the <No Recover All Clear> or
 *    <No Death Clear> notetags, their step counter is no longer reset either.
 *    Fix made by Irina.
 * * New Features!
 * ** New notetag added by Arisu!
 * *** <List Name: name>
 * **** Makes the name of the skill appear different when show in the skill
 *      list. Using \V[x] as a part of the name will display that variable.
 * 
 * Version 1.15: March 19, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.14: March 12, 2021
 * * Bug Fixes!
 * ** Max HP Buff/Debuff should now display its turn counter. Fix by Yanfly.
 * * Documentation Update!
 * ** For the <JS Passive Condition>, we've added documentation on the
 *    limitations of passive conditions since they have been reported as bug
 *    reports, when in reality, they are failsafes to prevent infinite loops.
 *    Such limitations include the following:
 * *** A passive state that requires another passive state
 * *** A passive state that requires a trait effect from another state
 * *** A passive state that requires a parameter value altered by another state
 * *** A passive state that requires equipment to be worn but its equipment
 *     type access is provided by another state.
 * *** Anything else that is similar in style.
 * 
 * Version 1.13: February 26, 2021
 * * Documentation Update!
 * ** For <JS type Slip Damage> and <JS type Slip Heal> notetags, added the
 *    following notes:
 * *** When these states are applied via action effects, the slip calculations
 *     are one time calculations made upon applying and the damage is cached to
 *     be used for future on regeneration calculations.
 * *** For that reason, do not include game mechanics here such as adding
 *     states, buffs, debuffs, etc. as this notetag is meant for calculations
 *     only. Use the VisuStella Battle Core's <JS Pre-Regenerate> and
 *     <JS Post-Regenerate> notetags for game mechanics instead.
 * *** Passive states and states with the <JS Slip Refresh> notetag are exempt
 *     from the one time calculation and recalculated each regeneration phase.
 * * Feature Update!
 * ** Changed slip refresh requirements to entail <JS Slip Refresh> notetag for
 *    extra clarity. Update made by Olivia.
 * 
 * Version 1.12: February 19, 2021
 * * Feature Update
 * ** Changed the way passive state infinite stacking as a blanket coverage.
 *    Update made by Olivia.
 * 
 * Version 1.11: February 12, 2021
 * * Bug Fixes!
 * ** Added a check to prevent passive states from infinitely stacking. Fix
 *    made by Olivia.
 * 
 * Version 1.10: January 15, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added
 * *** Plugin Parameters > Skill Settings > Background Type
 * 
 * Version 1.09: January 1, 2021
 * * Bug Fixes!
 * ** Custom JS TP slip damage and healing should now work properly.
 *    Fix made by Yanfly.
 * 
 * Version 1.08: December 25, 2020
 * * Bug Fixes!
 * ** <JS On Add State> should no longer trigger multiple times for the death
 *    state. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for updated feature(s)!
 * * Feature Update!
 * ** <No Death Clear> can now allow the affected state to be added to an
 *    already dead battler. Update made by Yanfly.
 * 
 * Version 1.07: December 18, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New notetags added by Yanfly:
 * *** <Passive Condition Multiclass: id>
 * *** <Passive Condition Multiclass: id, id, id>
 * *** <Passive Condition Multiclass: name>
 * *** <Passive Condition Multiclass: name, name, name>
 * ** New Plugin Parameter added by Yanfly.
 * *** Plugin Parameters > States > General > Action End Update
 * **** States with "Action End" auto-removal will also update turns at the end
 *      of each action instead of all actions.
 * ***** Turn this off if you wish for state turn updates to function like they
 *       do by default for "Action End".
 * 
 * Version 1.06: December 4, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.05: November 15, 2020
 * * Bug Fixes!
 * ** The alignment of the Skill Type Window is now fixed and will reflect upon
 *    the default settings. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** <State x Category Remove: All> notetag added by Yanfly.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.04: September 27, 2020
 * * Documentation Update
 * ** "Use Updated Layout" plugin parameters now have the added clause:
 *    "This will override the Core Engine windows settings." to reduce
 *    confusion. Added by Irina.
 * 
 * Version 1.03: September 13, 2020
 * * Bug Fixes!
 * ** <JS type Slip Damage> custom notetags now work for passive states. Fix
 *    made by Olivia.
 * ** Setting the Command Window style to "Text Only" will no longer add in
 *    the icon text codes. Bug fixed by Yanfly.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** The JS Notetags for Add, Erase, and Expire states are now fixed. Fix made
 *    by Yanfly.
 * * Documentation Update!
 * ** <Show if learned Skill: x> and <Hide if learned Skill: x> notetags have
 *    the following added to their descriptions:
 * *** This does not apply to skills added by traits on actors, classes, any
 *     equipment, or states. These are not considered learned skills. They are
 *     considered temporary skills.
 * * New Features!
 * ** Notetags added by Yanfly:
 * *** <Show if has Skill: x>
 * *** <Show if have All Skills: x,x,x>
 * *** <Show if have Any Skills: x,x,x>
 * *** <Show if has Skill: name>
 * *** <Show if have All Skills: name, name, name>
 * *** <Show if have Any Skills: name, name, name>
 * *** <Hide if has Skill: x>
 * *** <Hide if have All Skills: x,x,x>
 * *** <Hide if have Any Skills: x,x,x>
 * *** <Hide if has Skill: name>
 * *** <Hide if have All Skills: name, name, name>
 * *** <Hide if have Any Skills: name, name, name>
 * *** These have been added to remove the confusion regarding learned skills
 *     as skills added through trait effects are not considered learned skills
 *     by RPG Maker MZ.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Passive states from Elements & Status Menu Core are now functional.
 *    Fix made by Olivia.
 * * Compatibility Update
 * ** Extended functions to allow for better compatibility.
 * * Updated documentation
 * ** Explains that passive states are not directly applied and are therefore
 *    not affected by code such as "a.isStateAffected(10)".
 * ** Instead, use "a.states().includes($dataStates[10])"
 * ** "Use #rrggbb for a hex color." lines now replaced with
 *    "For a hex color, use #rrggbb with VisuMZ_1_MessageCore"
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param SkillsStatesCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Skills:struct
 * @text Skill Settings
 * @type struct<Skills>
 * @desc Adjust general skill settings here.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","SkillTypeWindow":"","CmdStyle:str":"auto","CmdTextAlign:str":"left","ListWindow":"","ListWindowCols:num":"1","ShopStatusWindow":"","ShowShopStatus:eval":"true","SkillSceneAdjustSkillList:eval":"true","SkillMenuStatusRect:func":"\"const ww = this.shopStatusWidth();\\nconst wh = this._itemWindow.height;\\nconst wx = Graphics.boxWidth - this.shopStatusWidth();\\nconst wy = this._itemWindow.y;\\nreturn new Rectangle(wx, wy, ww, wh);\"","SkillTypes":"","HiddenSkillTypes:arraynum":"[]","BattleHiddenSkillTypes:arraynum":"[]","IconStypeNorm:num":"78","IconStypeMagic:num":"79","CustomJS":"","SkillConditionJS:func":"\"// Declare Variables\\nconst skill = arguments[0];\\nconst user = this;\\nconst target = this;\\nconst a = this;\\nconst b = this;\\nlet enabled = true;\\n\\n// Perform Checks\\n\\n\\n// Return boolean\\nreturn enabled;\""}
 *
 * @param Costs:arraystruct
 * @text Skill Cost Types
 * @parent Skills:struct
 * @type struct<Cost>[]
 * @desc A list of all the skill cost types added by this plugin
 * and the code that controls them in-game.
 * @default ["{\"Name:str\":\"HP\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"20\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\nif (note.match(/<HP COST:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost += Number(RegExp.$1);\\\\n}\\\\nif (note.match(/<HP COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * user.mhp / 100);\\\\n}\\\\nif (note.match(/<JS HP COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS HP COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<HP COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<HP COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<HP COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<HP COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nif (cost <= 0) {\\\\n    return true;\\\\n} else {\\\\n    return user._hp > cost;\\\\n}\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\nuser._hp -= cost;\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.hp;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.mhp;\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.hp;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.hpGaugeColor1();\\\\nconst color2 = ColorManager.hpGaugeColor2();\\\\nconst label = TextManager.hpA;\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Label\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = bitmapWidth;\\\\nconst lh = bitmapHeight;\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.hpColor(user);\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"MP\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"23\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\ncost = Math.floor(skill.mpCost * user.mcr);\\\\nif (note.match(/<MP COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * user.mmp / 100);\\\\n}\\\\nif (note.match(/<JS MP COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS MP COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<MP COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<MP COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<MP COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<MP COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn user._mp >= cost;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\nuser._mp -= cost;\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.mp;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.mmp;\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.mp;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.mpGaugeColor1();\\\\nconst color2 = ColorManager.mpGaugeColor2();\\\\nconst label = TextManager.mpA;\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Label\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = bitmapWidth;\\\\nconst lh = bitmapHeight;\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.mpColor(user);\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"TP\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"29\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\ncost = skill.tpCost;\\\\nif (note.match(/<TP COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * user.maxTp() / 100);\\\\n}\\\\nif (note.match(/<JS TP COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS TP COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<TP COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<TP COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<TP COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<TP COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn user._tp >= cost;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\nuser._tp -= cost;\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.tp;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.maxTp();\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.tp;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.tpGaugeColor1();\\\\nconst color2 = ColorManager.tpGaugeColor2();\\\\nconst label = TextManager.tpA;\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Label\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = bitmapWidth;\\\\nconst lh = bitmapHeight;\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.tpColor(user);\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"Gold\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"17\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\nif (note.match(/<GOLD COST:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost += Number(RegExp.$1);\\\\n}\\\\nif (note.match(/<GOLD COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * $gameParty.gold() / 100);\\\\n}\\\\nif (note.match(/<JS GOLD COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS GOLD COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<GOLD COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<GOLD COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<GOLD COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<GOLD COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn $gameParty.gold() >= cost;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\n$gameParty.loseGold(cost);\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.currencyUnit;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn $gameParty.maxGold();\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn $gameParty.gold();\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\n\\\\n// Draw Label\\\\nconst label = TextManager.currencyUnit;\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = sprite.bitmapWidth();\\\\nconst lh = sprite.bitmapHeight();\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = sprite.bitmapWidth() - 2;\\\\nconst vh = sprite.bitmapHeight();\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.normalColor();\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"Potion\",\"Settings\":\"\",\"Icon:num\":\"176\",\"FontColor:str\":\"0\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\nif (note.match(/<POTION COST:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost += Number(RegExp.$1);\\\\n}\\\\nif (note.match(/<JS POTION COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS POTION COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<POTION COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<POTION COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<POTION COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<POTION COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst item = $dataItems[7];\\\\n\\\\n// Return Boolean\\\\nif (user.isActor() && cost > 0) {\\\\n    return $gameParty.numItems(item) >= cost;\\\\n} else {\\\\n    return true;\\\\n}\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst item = $dataItems[7];\\\\n\\\\n// Process Payment\\\\nif (user.isActor()) {\\\\n    $gameParty.loseItem(item, cost);\\\\n}\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst item = $dataItems[7];\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = settings.Name;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '×%1'.format(cost);\\\\n\\\\n// Text: Add Icon\\\\ntext += '\\\\\\\\\\\\\\\\I[%1]'.format(item.iconIndex);\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst item = $dataItems[7];\\\\n\\\\n// Return value\\\\nreturn $gameParty.maxItems(item);\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst item = $dataItems[7];\\\\n\\\\n// Return value\\\\nreturn $gameParty.numItems(item);\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.textColor(30);\\\\nconst color2 = ColorManager.textColor(31);\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst item = $dataItems[7];\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Icon\\\\nconst iconIndex = item.iconIndex;\\\\nconst iconBitmap = ImageManager.loadSystem(\\\\\\\"IconSet\\\\\\\");\\\\nconst pw = ImageManager.iconWidth;\\\\nconst ph = ImageManager.iconHeight;\\\\nconst sx = (iconIndex % 16) * pw;\\\\nconst sy = Math.floor(iconIndex / 16) * ph;\\\\nbitmap.blt(iconBitmap, sx, sy, pw, ph, 0, 0, 24, 24);\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.normalColor();\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}"]
 *
 * @param BreakSkills
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param States:struct
 * @text State Settings
 * @type struct<States>
 * @desc Adjust general state settings here.
 * @default {"General":"","ReapplyRules:str":"greater","MaxTurns:num":"99","ActionEndUpdate:eval":"true","Turns":"","ShowTurns:eval":"true","TurnFontSize:num":"16","TurnOffsetX:num":"-4","TurnOffsetY:num":"-6","ColorNeutral:str":"0","ColorPositive:str":"24","ColorNegative:str":"27","Data":"","ShowData:eval":"true","DataFontSize:num":"12","DataOffsetX:num":"0","DataOffsetY:num":"8","CustomJS":"","onAddStateJS:func":"\"// Declare Variables\\nconst stateId = arguments[0];\\nconst origin = this.getStateOrigin(stateId);\\nconst state = $dataStates[stateId];\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\"","onEraseStateJS:func":"\"// Declare Variables\\nconst stateId = arguments[0];\\nconst origin = this.getStateOrigin(stateId);\\nconst state = $dataStates[stateId];\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onExpireStateJS:func":"\"// Declare Variables\\nconst stateId = arguments[0];\\nconst origin = this.getStateOrigin(stateId);\\nconst state = $dataStates[stateId];\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\""}
 *
 * @param Buffs:struct
 * @text Buff/Debuff Settings
 * @parent States:struct
 * @type struct<Buffs>
 * @desc Adjust general buff/debuff settings here.
 * @default {"General":"","ReapplyRules:str":"greater","MaxTurns:num":"99","Stacking":"","StackBuffMax:num":"2","StackDebuffMax:num":"2","MultiplierJS:func":"\"// Declare Variables\\nconst user = this;\\nconst paramId = arguments[0];\\nconst buffLevel = arguments[1];\\nlet rate = 1;\\n\\n// Perform Calculations\\nrate += buffLevel * 0.25;\\n\\n// Return Rate\\nreturn Math.max(0, rate);\"","Turns":"","ShowTurns:eval":"true","TurnFontSize:num":"16","TurnOffsetX:num":"-4","TurnOffsetY:num":"-6","ColorBuff:str":"24","ColorDebuff:str":"27","Data":"","ShowData:eval":"false","DataFontSize:num":"12","DataOffsetX:num":"0","DataOffsetY:num":"8","CustomJS":"","onAddBuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onAddDebuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onEraseBuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onEraseDebuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onExpireBuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onExpireDebuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\""}
 *
 * @param PassiveStates:struct
 * @text Passive States
 * @parent States:struct
 * @type struct<PassiveStates>
 * @desc Adjust passive state settings here.
 * @default {"List":"","Global:arraynum":"[]","Actor:arraynum":"[]","Enemy:arraynum":"[]","CustomJS":"","PassiveConditionJS:func":"\"// Declare Variables\\nconst state = arguments[0];\\nconst stateId = state.id;\\nconst user = this;\\nconst target = this;\\nconst a = this;\\nconst b = this;\\nlet condition = true;\\n\\n// Perform Checks\\n\\n\\n// Return boolean\\nreturn condition;\""}
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
 * General Skill Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Skills:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Skill Menu Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param SkillTypeWindow
 * @text Skill Type Window
 *
 * @param CmdStyle:str
 * @text Style
 * @parent SkillTypeWindow
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Skill Type Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent SkillTypeWindow
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Skill Type Window.
 * @default left
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListWindowCols:num
 * @text Columns
 * @parent ListWindow
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 1
 *
 * @param ShopStatusWindow
 * @text Shop Status Window
 *
 * @param ShowShopStatus:eval
 * @text Show in Skill Menu?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the Shop Status Window in the Skill Menu?
 * This is enabled if the Updated Layout is on.
 * @default true
 *
 * @param SkillSceneAdjustSkillList:eval
 * @text Adjust List Window?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the Skill List Window in the Skill Menu if using the Shop Status Window?
 * @default true
 *
 * @param SkillSceneStatusBgType:num
 * @text Background Type
 * @parent ShopStatusWindow
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
 * @param SkillMenuStatusRect:func
 * @text JS: X, Y, W, H
 * @parent ShopStatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this Shop Status Window in the Skill Menu.
 * @default "const ww = this.shopStatusWidth();\nconst wh = this._itemWindow.height;\nconst wx = Graphics.boxWidth - this.shopStatusWidth();\nconst wy = this._itemWindow.y;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param SkillTypes
 * @text Skill Types
 *
 * @param HiddenSkillTypes:arraynum
 * @text Hidden Skill Types
 * @parent SkillTypes
 * @type number[]
 * @min 1
 * @max 99
 * @desc Insert the ID's of the Skill Types you want hidden from view ingame.
 * @default []
 *
 * @param BattleHiddenSkillTypes:arraynum
 * @text Hidden During Battle
 * @parent SkillTypes
 * @type number[]
 * @min 1
 * @max 99
 * @desc Insert the ID's of the Skill Types you want hidden during battle only.
 * @default []
 *
 * @param IconStypeNorm:num
 * @text Icon: Normal Type
 * @parent SkillTypes
 * @desc Icon used for normal skill types that aren't assigned any icons.
 * @default 78
 *
 * @param IconStypeMagic:num
 * @text Icon: Magic Type
 * @parent SkillTypes
 * @desc Icon used for magic skill types that aren't assigned any icons.
 * @default 79
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param SkillConditionJS:func
 * @text JS: Skill Conditions
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide skill condition check.
 * @default "// Declare Variables\nconst skill = arguments[0];\nconst user = this;\nconst target = this;\nconst a = this;\nconst b = this;\nlet enabled = true;\n\n// Perform Checks\n\n\n// Return boolean\nreturn enabled;"
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Cost Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Cost:
 *
 * @param Name:str
 * @text Name
 * @desc A name for this Skill Cost Type.
 * @default Untitled
 *
 * @param Settings
 *
 * @param Icon:num
 * @text Icon
 * @parent Settings
 * @desc Icon used for this Skill Cost Type.
 * Use 0 for no icon.
 * @default 0
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Settings
 * @desc Text Color used to display this cost.
 * For a hex color, use #rrggbb with VisuMZ_1_MessageCore
 * @default 0
 *
 * @param FontSize:num
 * @text Font Size
 * @parent Settings
 * @type number
 * @min 1
 * @desc Font size used to display this cost.
 * @default 22
 *
 * @param Cost
 * @text Cost Processing
 *
 * @param CalcJS:func
 * @text JS: Cost Calculation
 * @parent Cost
 * @type note
 * @desc Code on how to calculate this resource cost for the skill.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nlet cost = 0;\n\n// Return cost value\nreturn Math.round(Math.max(0, cost));"
 *
 * @param CanPayJS:func
 * @text JS: Can Pay Cost?
 * @parent Cost
 * @type note
 * @desc Code on calculating whether or not the user is able to pay the cost.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\n\n// Return Boolean\nreturn true;"
 *
 * @param PayJS:func
 * @text JS: Paying Cost
 * @parent Cost
 * @type note
 * @desc Code for if met, this is the actual process of paying of the cost.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\n\n// Process Payment\n"
 *
 * @param Windows
 * @text Window Display
 *
 * @param ShowJS:func
 * @text JS: Show Cost?
 * @parent  Windows
 * @type note
 * @desc Code for determining if the cost is shown or not.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\n\n// Return Boolean\nreturn cost > 0;"
 *
 * @param TextJS:func
 * @text JS: Cost Text
 * @parent  Windows
 * @type note
 * @desc Code to determine the text (with Text Code support) used for the displayed cost.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\nconst settings = arguments[2];\nconst fontSize = settings.FontSize;\nconst color = settings.FontColor;\nconst name = settings.Name;\nconst icon = settings.Icon;\nlet text = '';\n\n// Text: Change Font Size\ntext += '\\\\FS[%1]'.format(fontSize);\n\n// Text: Add Color\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\n    text += '\\\\HexColor<#%1>'.format(String(RegExp.$1));\n} else {\n    text += '\\\\C[%1]'.format(color);\n}\n\n// Text: Add Cost\ntext += '%1 %2'.format(cost, name);\n\n// Text: Add Icon\nif (icon  > 0) {\n    text += '\\\\I[%1]'.format(icon);\n}\n\n// Return text\nreturn text;"
 *
 * @param Gauges
 * @text Gauge Display
 *
 * @param GaugeMaxJS:func
 * @text JS: Maximum Value
 * @parent  Gauges
 * @type note
 * @desc Code to determine the maximum value used for this Skill Cost resource for gauges.
 * @default "// Declare Variables\nconst user = this;\n\n// Return value\nreturn 0;"
 *
 * @param GaugeCurrentJS:func
 * @text JS: Current Value
 * @parent  Gauges
 * @type note
 * @desc Code to determine the current value used for this Skill Cost resource for gauges.
 * @default "// Declare Variables\nconst user = this;\n\n// Return value\nreturn 0;"
 *
 * @param GaugeDrawJS:func
 * @text JS: Draw Gauge
 * @parent  Gauges
 * @type note
 * @desc Code to determine how to draw the Skill Cost resource for this gauge type.
 * @default "// Declare Variables\nconst sprite = this;\nconst settings = sprite._costSettings;\nconst bitmap = sprite.bitmap;\nconst user = sprite._battler;\nconst currentValue = sprite.currentDisplayedValue();\n\n// Draw Gauge\nconst color1 = ColorManager.textColor(30);\nconst color2 = ColorManager.textColor(31);\nconst gx = 0;\nconst gy = sprite.bitmapHeight() - sprite.gaugeHeight();\nconst gw = sprite.bitmapWidth() - gx;\nconst gh = sprite.gaugeHeight();\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\n\n// Draw Label\nconst label = settings.Name;\nconst lx = 4;\nconst ly = 0;\nconst lw = sprite.bitmapWidth();\nconst lh = sprite.bitmapHeight();\nsprite.setupLabelFont();\nbitmap.paintOpacity = 255;\nbitmap.drawText(label, lx, ly, lw, lh, \"left\");\n\n// Draw Value\nconst vw = sprite.bitmapWidth() - 2;\nconst vh = sprite.bitmapHeight();\nsprite.setupValueFont();\nbitmap.textColor = ColorManager.normalColor();\nbitmap.drawText(currentValue, 0, 0, vw, vh, \"right\");"
 *
 */
/* ----------------------------------------------------------------------------
 * General State Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~States:
 *
 * @param General
 *
 * @param ReapplyRules:str
 * @text Reapply Rules
 * @parent General
 * @type select
 * @option Ignore: State doesn't get added.
 * @value ignore
 * @option Reset: Turns get reset.
 * @value reset
 * @option Greater: Turns take greater value (current vs reset).
 * @value greater
 * @option Add: Turns add upon existing turns.
 * @value add
 * @desc These are the rules when reapplying states.
 * @default greater
 *
 * @param MaxTurns:num
 * @text Maximum Turns
 * @parent General
 * @type number
 * @min 1
 * @desc Maximum number of turns to let states go up to.
 * This can be changed with the <Max Turns: x> notetag.
 * @default 9999
 *
 * @param ActionEndUpdate:eval
 * @text Action End Update
 * @parent General
 * @type boolean
 * @on Update Each Action
 * @off Don't Change
 * @desc States with "Action End" auto-removal will also update
 * turns at the end of each action instead of all actions.
 * @default true
 *
 * @param TurnEndOnMap:num
 * @text Turn End on Map
 * @parent General
 * @type number
 * @desc Update any state and buff turns on the map after
 * this many steps. Use 0 to disable.
 * @default 20
 *
 * @param Turns
 * @text Turn Display
 *
 * @param ShowTurns:eval
 * @text Show Turns?
 * @parent Turns
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display state turns on top of window icons and sprites?
 * @default true
 *
 * @param TurnFontSize:num
 * @text Turn Font Size
 * @parent Turns
 * @type number
 * @min 1
 * @desc Font size used for displaying turns.
 * @default 16
 *
 * @param TurnOffsetX:num
 * @text Offset X
 * @parent Turns
 * @desc Offset the X position of the turn display.
 * @default -4
 *
 * @param TurnOffsetY:num
 * @text Offset Y
 * @parent Turns
 * @desc Offset the Y position of the turn display.
 * @default -6
 *
 * @param TurnFontSize:num
 * @text Turn Font Size
 * @parent Turns
 * @desc Font size used for displaying turns.
 * @default 16
 *
 * @param ColorNeutral:str
 * @text Turn Color: Neutral
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ColorPositive:str
 * @text Turn Color: Positive
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorNegative:str
 * @text Turn Color: Negative
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param Data
 * @text Data Display
 *
 * @param ShowData:eval
 * @text Show Data?
 * @parent Data
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display state data on top of window icons and sprites?
 * @default true
 *
 * @param DataFontSize:num
 * @text Data Font Size
 * @parent Data
 * @type number
 * @min 1
 * @desc Font size used for displaying state data.
 * @default 12
 *
 * @param DataOffsetX:num
 * @text Offset X
 * @parent Data
 * @desc Offset the X position of the state data display.
 * @default 0
 *
 * @param DataOffsetY:num
 * @text Offset Y
 * @parent Data
 * @desc Offset the Y position of the state data display.
 * @default 8
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param onAddStateJS:func
 * @text JS: On Add State
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * state is added.
 * @default "// Declare Variables\nconst stateId = arguments[0];\nconst origin = this.getStateOrigin(stateId);\nconst state = $dataStates[stateId];\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onEraseStateJS:func
 * @text JS: On Erase State
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * state is erased.
 * @default "// Declare Variables\nconst stateId = arguments[0];\nconst origin = this.getStateOrigin(stateId);\nconst state = $dataStates[stateId];\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onExpireStateJS:func
 * @text JS: On Expire State
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * state has expired.
 * @default "// Declare Variables\nconst stateId = arguments[0];\nconst origin = this.getStateOrigin(stateId);\nconst state = $dataStates[stateId];\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * General Buff/Debuff Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Buffs:
 *
 * @param General
 *
 * @param ReapplyRules:str
 * @text Reapply Rules
 * @parent General
 * @type select
 * @option Ignore: Buff/Debuff doesn't get added.
 * @value ignore
 * @option Reset: Turns get reset.
 * @value reset
 * @option Greater: Turns take greater value (current vs reset).
 * @value greater
 * @option Add: Turns add upon existing turns.
 * @value add
 * @desc These are the rules when reapplying buffs/debuffs.
 * @default greater
 *
 * @param MaxTurns:num
 * @text Maximum Turns
 * @parent General
 * @type number
 * @min 1
 * @desc Maximum number of turns to let buffs and debuffs go up to.
 * @default 9999
 *
 * @param Stacking
 *
 * @param StackBuffMax:num
 * @text Max Stacks: Buff
 * @parent Stacking
 * @type number
 * @min 1
 * @desc Maximum number of stacks for buffs.
 * @default 2
 *
 * @param StackDebuffMax:num
 * @text Max Stacks: Debuff
 * @parent Stacking
 * @type number
 * @min 1
 * @desc Maximum number of stacks for debuffs.
 * @default 2
 *
 * @param MultiplierJS:func
 * @text JS: Buff/Debuff Rate
 * @parent Stacking
 * @type note
 * @desc Code to determine how much buffs and debuffs affect parameters.
 * @default "// Declare Variables\nconst user = this;\nconst paramId = arguments[0];\nconst buffLevel = arguments[1];\nlet rate = 1;\n\n// Perform Calculations\nrate += buffLevel * 0.25;\n\n// Return Rate\nreturn Math.max(0, rate);"
 *
 * @param Turns
 * @text Turns Display
 *
 * @param ShowTurns:eval
 * @text Show Turns?
 * @parent Turns
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display buff and debuff turns on top of window icons and sprites?
 * @default true
 *
 * @param TurnFontSize:num
 * @text Turn Font Size
 * @parent Turns
 * @type number
 * @min 1
 * @desc Font size used for displaying turns.
 * @default 16
 *
 * @param TurnOffsetX:num
 * @text Offset X
 * @parent Turns
 * @desc Offset the X position of the turn display.
 * @default -4
 *
 * @param TurnOffsetY:num
 * @text Offset Y
 * @parent Turns
 * @desc Offset the Y position of the turn display.
 * @default -6
 *
 * @param ColorBuff:str
 * @text Turn Color: Buffs
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorDebuff:str
 * @text Turn Color: Debuffs
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param Data
 * @text Rate Display
 *
 * @param ShowData:eval
 * @text Show Rate?
 * @parent Data
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display buff and debuff rate on top of window icons and sprites?
 * @default false
 *
 * @param DataFontSize:num
 * @text Rate Font Size
 * @parent Data
 * @type number
 * @min 1
 * @desc Font size used for displaying rate.
 * @default 12
 *
 * @param DataOffsetX:num
 * @text Offset X
 * @parent Data
 * @desc Offset the X position of the rate display.
 * @default 0
 *
 * @param DataOffsetY:num
 * @text Offset Y
 * @parent Data
 * @desc Offset the Y position of the rate display.
 * @default 8
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param onAddBuffJS:func
 * @text JS: On Add Buff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * buff is added.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onAddDebuffJS:func
 * @text JS: On Add Debuff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * debuff is added.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onEraseBuffJS:func
 * @text JS: On Erase Buff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * buff is erased.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onEraseDebuffJS:func
 * @text JS: On Erase Debuff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * debuff is erased.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onExpireBuffJS:func
 * @text JS: On Expire Buff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * buff has expired.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onExpireDebuffJS:func
 * @text JS: On Expire Debuff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * debuff has expired.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Passive State Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PassiveStates:
 *
 * @param List
 *
 * @param Global:arraynum
 * @text Global Passives
 * @parent List
 * @type state[]
 * @desc A list of passive states to affect actors and enemies.
 * @default []
 *
 * @param Actor:arraynum
 * @text Actor-Only Passives
 * @parent List
 * @type state[]
 * @desc A list of passive states to affect actors only.
 * @default []
 *
 * @param Enemy:arraynum
 * @text Enemy Passives
 * @parent List
 * @type state[]
 * @desc A list of passive states to affect enemies only.
 * @default []
 *
 * @param Cache
 *
 * @param RefreshCacheSwitch:eval
 * @text Switch Refresh?
 * @parent Cache
 * @type boolean
 * @on Refresh
 * @off No Changes
 * @desc Refresh all battle members when switches are changed in battle?
 * @default true
 *
 * @param RefreshCacheVar:eval
 * @text Variable Refresh?
 * @parent Cache
 * @type boolean
 * @on Refresh
 * @off No Changes
 * @desc Refresh all battle members when variables are changed in battle?
 * @default true
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param PassiveConditionJS:func
 * @text JS: Condition Check
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide passive condition check.
 * @default "// Declare Variables\nconst state = arguments[0];\nconst stateId = state.id;\nconst user = this;\nconst target = this;\nconst a = this;\nconst b = this;\nlet condition = true;\n\n// Perform Checks\n\n\n// Return boolean\nreturn condition;"
 *
 */
//=============================================================================

function _0x550c(){const _0x32b00f=['Parse_Notetags_State_Category','addState','drawItem','isSkillHidden','meetsPassiveStateConditionJS','format','_scene','createItemWindow','applyStateTurnManipulationEffects','Scene_Skill_helpWindowRect','Game_Variables_onChange','isStateRestrict','normalColor','Global','clear','<enemy-%1>','checkShowHideJS','states','MAXHP','shopStatusWindowRect','DisplayedParams','regenerateAll','_subject','_cache','passiveStates','scrollTo','getSkillTypes','Game_Actor_skillTypes','initMembersSkillsStatesCore','testApply','parameters','setActor','replace','drawTextEx','isPassiveStateStackable','success','onEraseStateGlobalJS','onExpireDebuffGlobalJS','getStateDisplay','process_VisuMZ_SkillsStatesCore_State_Notetags','buffTurns','drawExtendedSkillsStatesCoreStatus','_skillTypeWindow','isPlaytest','actor','Game_Unit_isAllDead','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20visible\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this._actor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','updateVisibility','makeResistedStateCategories','Buffs','_itemWindow','MaxTurns','Game_Battler_addState','shopStatusWindowRectSkillsStatesCore','isStateCategoryAffected','Parse_Notetags_State_PassiveJS','anchor','skillId','Sprite_StateIcon_loadBitmap','Game_BattlerBase_buffIconIndex','hide','Parse_Notetags_Skill_Cost','getStateData','onExpireStateGlobalJS','removeBuffsAuto','addDebuffTurns','RefreshCacheVar','mainAreaTop','LayoutStyle','length','isStateExpired','createSkillCostText','fontSize','prototype','slice','stateTpSlipHealJS','clearStatesWithStateRetain','convertGaugeTypeSkillsStatesCore','DataFontSize','drawActorStateTurns','concat','ALL','_currentTroopUniqueID','makeSuccess','PayJS','GroupDigits','groupDefeat','statusWidth','ANY','#%1','_skills','stypeId','isRightInputMode','Sprite_StateIcon_updateFrame','contents','textColor','return\x200','onEraseStateCustomJS','bitmap','MDF','user','onAddStateCustomJS','isBottomHelpMode','GaugeCurrentJS','<actor-%1>','isUseSkillsStatesCoreUpdatedLayout','addBuffTurns','onAddStateGlobalJS','alterSkillName','resetStateCounts','EVAL','onExpireStateCustomJS','slipHp','stateMaximumTurns','onAddDebuffGlobalJS','addStateTurns','hpDamage','setBuffTurns','meetsSkillConditions','_stypeIDs','onAddBuff','currentValue','drawActorIconsAllTurnCounters','floor','_statusWindow','untitled','Scene_Boot_onDatabaseLoaded','categories','updateStateTurns','States','uiInputPosition','toLowerCase','CheckIncompatibleStates','DataOffsetY','log','addDebuff','Skills','usableSkills','maxItems','icon','_costSettings','toUpperCase','drawSkillCost','isSkillCostShown','\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20%2\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20origin\x20=\x20this.getStateOrigin(stateId);\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20state\x20=\x20$dataStates[stateId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20origin;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20origin;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20%2\x20=\x20Math.round(Math.max(0,\x20%2)\x20*\x20%3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20this.setStateData(stateId,\x20\x27%4\x27,\x20%2);\x0a\x20\x20\x20\x20','setStateRetainType','Window_StatusBase_drawActorIcons','updateFrame','enemy','_stateOrigin','Game_BattlerBase_overwriteBuffTurns','passiveStateObjects','_stored_state-%1-color','Game_BattlerBase_states','shopStatusWidth','meetsPassiveStateConditionSwitches','itemTextAlign','_stored_debuffColor','Window_SkillList_updateHelp','ParseSkillNotetags','meetsSkillConditionsGlobalJS','removeStatesByCategory','getStateReapplyRulings','CheckVisibleSwitchNotetags','getClassIdWithName','setPassiveStateSlipDamageJS','MultiplierJS','_lastStatesActionEndFrameCount','initMembers','gainHp','gainMp','addCommand','isUseModernControls','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','onExpireState','_actor','ParseClassIDs','action','isStateAddable','onEraseDebuff','getStypeIdWithName','useDigitGrouping','match','_hidden','makeAdditionalSkillCostText','Game_Troop_setup','_stateMaxTurns','death','regenerateAllSkillsStatesCore','commandStyle','indexOf','_classIDs','createAllSkillCostText','isStateRemoved','refresh','clamp','isGroupDefeatStateAffected','includes','totalStateCategory','endAction','ShowTurns','getSkillIdWithName','drawItemStyleIconText','uiHelpPosition','removeBuff','add','addPassiveStatesTraitSets','multiclasses','skillMpCost','Window_SkillList_includes','HiddenSkillTypes','resetFontSettings','clearStateData','ColorDebuff','convertTargetToStateOriginKey','DataOffsetX','skillVisibleJS','clearStateOrigin','Sprite_Gauge_currentValue','applyStateCategoryRemovalEffects','removeStatesAuto','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','_passiveStateResults','27xFfVTN','Scene_Skill_itemWindowRect','item','gaugeRate','push','itemWindowRect','damage','onExpireDebuff','stateExpireJS','changeTextColor','outlineColor','Window_SkillStatus_refresh','<troop-%1>','Game_Battler_addDebuff','height','stateHpSlipDamageJS','setStypeId','isPartyAllAffectedByGroupDefeatStates','loadBitmap','getColor','ParseStateNotetags','_checkingTraitsSetSkillsStatesCore','commandName','isDebuffAffected','clearStates','isMaxBuffAffected','meetsSkillConditionsEnableJS','setStateTurns','isStateCategoryResisted','ColorNeutral','VisuMZ_1_ElementStatusCore','Costs','sort','learnSkill','_buffTurns','recover\x20all','initialize','VisuMZ_1_ItemsEquipsCore','Game_BattlerBase_decreaseBuff','StackDebuffMax','CanPayJS','SkillsStatesCore','testSkillStatesCoreNotetags','process_VisuMZ_SkillsStatesCore_Notetags','PassiveStates','eraseState','CheckVisibleBattleNotetags','setup','isStateAffected','meetsPassiveStateConditionClasses','Scene_Skill_skillTypeWindowRect','ReapplyRules','magicSkills','innerWidth','retrieveStateColor','meetsPassiveStateGlobalConditionJS','NEGATIVE','setStatusWindow','isLearnedSkill','isSkillUsableForAutoBattle','mainFontFace','109818iFLRME','Sprite_Gauge_gaugeRate','IconStypeMagic','_shopStatusWindow','filter','drawActorIcons','state','width','_buffs','STR','checkCacheKey','GaugeMaxJS','setStateDisplay','mainCommandWidth','updateTurnDisplaySprite','Parse_Notetags_Skill_JS','addWindow','isBuffExpired','allIcons','canUse','ARRAYNUM','stateTurns','name','TurnOffsetY','onAddState','checkSkillConditionsSwitchNotetags','updatedLayoutStyle','addBuff','getCurrentStateActiveUser','gradientFillRect','gaugeLineHeight','Sprite_Gauge_setup','onDatabaseLoaded','onChange','members','applyBuffTurnManipulationEffects','traitObjects','setBackgroundType','RefreshCacheSwitch','rgba(0,\x200,\x200,\x201)','increaseBuff','787266JsDtuR','Game_BattlerBase_initMembers','boxWidth','createShopStatusWindow','VisuMZ_1_MainMenuCore','aliveMembers','Game_Actor_forgetSkill','none','getStateIdWithName','_stateIDs','_result','ColorPositive','onAddDebuff','Window_SkillType_initialize','checkSkillTypeMatch','Window_SkillList_setActor','Game_BattlerBase_traitsSet','POSITIVE','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','addChild','CheckVisibleSkillNotetags','enemyId','isBuffAffected','Game_BattlerBase_eraseState','Game_BattlerBase_skillTpCost','canClearState','onRegenerateCustomStateDamageOverTime','isCommandEnabled','paySkillCost','createCommandNameWindow','Game_BattlerBase_isStateResist','statePassiveConditionJS','\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20origin\x20=\x20this.getStateOrigin(stateId);\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20state\x20=\x20$dataStates[stateId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this.getCurrentStateActiveUser();\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20origin;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','MAXMP','mainAreaHeight','setItem','setupSkillsStatesCore','_checkingVisuMzPassiveStateObjects','IconStypeNorm','statusWindowRect','traitsSet','canPaySkillCost','addPassiveStates','updateCommandNameWindow','inBattle','gainSilentTp','TurnOffsetX','itemWindowRectSkillsStatesCore','setDebuffTurns','TurnFontSize','textSizeEx','getCurrentStateOriginKey','LUK','Scene_Skill_statusWindowRect','recoverAll','stateData','menuActor','uiMenuStyle','_stateSteps','paramBuffRate','onAddBuffGlobalJS','text','removeStatesByCategoryAll','makeCommandName','onAddBuffJS','_skillIDs','iconIndex','stateEraseJS','_colorCache','helpWindowRectSkillsStatesCore','Settings','debuffTurns','_stateTurns','convertPassiveStates','drawActorStateData','onAddStateJS','Game_BattlerBase_recoverAll','Game_Battler_addBuff','onEraseBuff','updateStatesActionEnd','commandStyleCheck','eraseBuff','Game_Battler_regenerateAll','10FUMyhl','hasStateCategory','resetTextColor','ActionEndUpdate','call','isActor','stateColor','frameCount','isBuffPrevented','maxSlipDamage','buff','\x5cI[%1]%2','_states','slipMp','_checkingPassiveStates','EnableLayout','onExpireStateJS','actorId','onRemoveState','_battler','TextJS','ARRAYSTR','max','onAddDebuffJS','number','drawActorBuffRates','drawText','buffColor','allBattleMembers','buttonAssistSwitch','NUM','getColorDataFromPluginParameters','itemLineRect','hasState','197442OXjbLI','buffIconIndex','VisuMZ_0_CoreEngine','onExpireDebuffJS','skillTypes','drawIcon','Parse_Notetags_State_ApplyRemoveLeaveJS','keys','right','note','currentClass','SkillSceneAdjustSkillList','mpCost','_currentActor','applyDebuffTurnManipulationEffects','Game_BattlerBase_resetStateCounts','onExpireBuff','priority','drawActorBuffTurns','iconWidth','parse','statusWindowRectSkillsStatesCore','clearStateDisplay','drawItemStyleIcon','CmdTextAlign','getStateRetainType','skills','Game_BattlerBase_meetsSkillConditions','skill','applyItemUserEffect','_categoryWindow','skillEnableJS','changeOutlineColor','VisuMZ_2_ClassChangeSystem','redraw','Game_Battler_isStateAddable','redrawSkillsStatesCore','autoRemovalTiming','410469giqzpw','isSkillTypeMatchForUse','heal','isSceneBattle','Game_BattlerBase_increaseBuff','status','actions','removeOtherStatesOfSameCategory','die','colSpacing','shift','ParseAllNotetags','Sprite_Gauge_redraw','_stored_buffColor','createTurnDisplaySprite','drawFullGauge','StackBuffMax','stateMpSlipDamageJS','_phase','Game_BattlerBase_skillMpCost','decreaseBuff','reset','_stateDisplay','ARRAYFUNC','getCurrentTroopUniqueID','makeCurrentTroopUniqueID','remove','_tempBattler','center','calcWindowHeight','DEF','placeGauge','Scene_Skill_createItemWindow','opacity','isAlive','stateHpSlipHealJS','556094oXHgyF','drawParamText','helpWindowRect','itemAt','ShowData','allowCreateShopStatusWindow','skillCostSeparator','version','recalculateSlipDamageJS','skillTpCost','Name','stateTpSlipDamageJS','_stateRetainType','iconHeight','createPassiveStatesCache','skillTypeWindowRectSkillsStatesCore','index','onEraseBuffJS','getStateOriginByKey','onEraseDebuffGlobalJS','forgetSkill','onExpireBuffGlobalJS','commandNameWindowDrawText','Sprite_Gauge_initMembers','MAT','clearStateRetainType','BattleManager_endAction','_turnDisplaySprite','statesByCategory','addPassiveStatesByPluginParameters','applySkillsStatesCoreEffects','Game_Actor_learnSkill','test','debuffColor','trim','ConvertParams','Game_BattlerBase_refresh','SkillMenuStatusRect','Window_SkillList_maxCols','isStateResist','ignore','ShowShopStatus','ARRAYSTRUCT','Game_Action_applyItemUserEffect','onEraseBuffGlobalJS','Game_Action_testApply','iconText','commandNameWindowDrawBackground','stateCategoriesResisted','constructor','isBuffOrDebuffAffected','callUpdateHelp','lineHeight','split','_commandNameWindow','stateMpSlipHealJS','updateHelp','fontBold','meetsPassiveStateConditions','Window_StatusBase_placeGauge','currentValueSkillsStatesCore','AGI','stateAddJS','Game_Switches_onChange','currentMaxValueSkillsStatesCore','Game_BattlerBase_clearStates','greater','hasSkill','_stateData','slipTp','adjustItemWidthByShopStatus','stateId','CalcJS','map','removeState','619948vVcdaK','commandNameWindowCenter','1194384NxcUYN','helpAreaHeight','onAddStateMakeCustomSlipValues','_stypeId','exit','Game_BattlerBase_die','Sprite_Gauge_currentMaxValue','value','_tempActor'];_0x550c=function(){return _0x32b00f;};return _0x550c();}const _0x6967b=_0x33b7;(function(_0x121efd,_0x2734b8){const _0x160b9e=_0x33b7,_0x93b2e1=_0x121efd();while(!![]){try{const _0x3e487c=-parseInt(_0x160b9e(0x14a))/0x1+-parseInt(_0x160b9e(0x124))/0x2+parseInt(_0x160b9e(0x2e0))/0x3+-parseInt(_0x160b9e(0x1b9))/0x4*(-parseInt(_0x160b9e(0x102))/0x5)+-parseInt(_0x160b9e(0x309))/0x6+parseInt(_0x160b9e(0x16e))/0x7+-parseInt(_0x160b9e(0x1bb))/0x8*(-parseInt(_0x160b9e(0x2a3))/0x9);if(_0x3e487c===_0x2734b8)break;else _0x93b2e1['push'](_0x93b2e1['shift']());}catch(_0x483f22){_0x93b2e1['push'](_0x93b2e1['shift']());}}}(_0x550c,0x3902b));var label=_0x6967b(0x2cc),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x6967b(0x2e4)](function(_0x45f0a7){const _0x5bb389=_0x6967b;return _0x45f0a7[_0x5bb389(0x14f)]&&_0x45f0a7['description'][_0x5bb389(0x289)]('['+label+']');})[0x0];function _0x33b7(_0x34004c,_0xd4b311){const _0x550c88=_0x550c();return _0x33b7=function(_0x33b777,_0x1b7b60){_0x33b777=_0x33b777-0xb2;let _0x5e88a9=_0x550c88[_0x33b777];return _0x5e88a9;},_0x33b7(_0x34004c,_0xd4b311);}VisuMZ[label][_0x6967b(0xf5)]=VisuMZ[label][_0x6967b(0xf5)]||{},VisuMZ[_0x6967b(0x191)]=function(_0x25ae9d,_0x4cfc5b){const _0x2a4a39=_0x6967b;for(const _0x3c9e30 in _0x4cfc5b){if(_0x3c9e30[_0x2a4a39(0x27a)](/(.*):(.*)/i)){const _0x348818=String(RegExp['$1']),_0x369b76=String(RegExp['$2'])[_0x2a4a39(0x251)]()['trim']();let _0x20ed03,_0xae3c72,_0x3b1f79;switch(_0x369b76){case _0x2a4a39(0x120):_0x20ed03=_0x4cfc5b[_0x3c9e30]!==''?Number(_0x4cfc5b[_0x3c9e30]):0x0;break;case _0x2a4a39(0x2f4):_0xae3c72=_0x4cfc5b[_0x3c9e30]!==''?JSON[_0x2a4a39(0x138)](_0x4cfc5b[_0x3c9e30]):[],_0x20ed03=_0xae3c72[_0x2a4a39(0x1b7)](_0xc017fa=>Number(_0xc017fa));break;case _0x2a4a39(0x232):_0x20ed03=_0x4cfc5b[_0x3c9e30]!==''?eval(_0x4cfc5b[_0x3c9e30]):null;break;case'ARRAYEVAL':_0xae3c72=_0x4cfc5b[_0x3c9e30]!==''?JSON[_0x2a4a39(0x138)](_0x4cfc5b[_0x3c9e30]):[],_0x20ed03=_0xae3c72[_0x2a4a39(0x1b7)](_0x1c4d46=>eval(_0x1c4d46));break;case'JSON':_0x20ed03=_0x4cfc5b[_0x3c9e30]!==''?JSON[_0x2a4a39(0x138)](_0x4cfc5b[_0x3c9e30]):'';break;case'ARRAYJSON':_0xae3c72=_0x4cfc5b[_0x3c9e30]!==''?JSON[_0x2a4a39(0x138)](_0x4cfc5b[_0x3c9e30]):[],_0x20ed03=_0xae3c72['map'](_0x55c001=>JSON[_0x2a4a39(0x138)](_0x55c001));break;case'FUNC':_0x20ed03=_0x4cfc5b[_0x3c9e30]!==''?new Function(JSON[_0x2a4a39(0x138)](_0x4cfc5b[_0x3c9e30])):new Function(_0x2a4a39(0x224));break;case _0x2a4a39(0x161):_0xae3c72=_0x4cfc5b[_0x3c9e30]!==''?JSON[_0x2a4a39(0x138)](_0x4cfc5b[_0x3c9e30]):[],_0x20ed03=_0xae3c72[_0x2a4a39(0x1b7)](_0x304d42=>new Function(JSON[_0x2a4a39(0x138)](_0x304d42)));break;case _0x2a4a39(0x2e9):_0x20ed03=_0x4cfc5b[_0x3c9e30]!==''?String(_0x4cfc5b[_0x3c9e30]):'';break;case _0x2a4a39(0x117):_0xae3c72=_0x4cfc5b[_0x3c9e30]!==''?JSON[_0x2a4a39(0x138)](_0x4cfc5b[_0x3c9e30]):[],_0x20ed03=_0xae3c72[_0x2a4a39(0x1b7)](_0x1029e1=>String(_0x1029e1));break;case'STRUCT':_0x3b1f79=_0x4cfc5b[_0x3c9e30]!==''?JSON[_0x2a4a39(0x138)](_0x4cfc5b[_0x3c9e30]):{},_0x25ae9d[_0x348818]={},VisuMZ[_0x2a4a39(0x191)](_0x25ae9d[_0x348818],_0x3b1f79);continue;case _0x2a4a39(0x198):_0xae3c72=_0x4cfc5b[_0x3c9e30]!==''?JSON['parse'](_0x4cfc5b[_0x3c9e30]):[],_0x20ed03=_0xae3c72[_0x2a4a39(0x1b7)](_0x116039=>VisuMZ['ConvertParams']({},JSON[_0x2a4a39(0x138)](_0x116039)));break;default:continue;}_0x25ae9d[_0x348818]=_0x20ed03;}}return _0x25ae9d;},(_0xf1f414=>{const _0xe82afd=_0x6967b,_0x19b921=_0xf1f414[_0xe82afd(0x2f6)];for(const _0x6703f5 of dependencies){if(!Imported[_0x6703f5]){alert(_0xe82afd(0xc1)['format'](_0x19b921,_0x6703f5)),SceneManager['exit']();break;}}const _0x106575=_0xf1f414['description'];if(_0x106575['match'](/\[Version[ ](.*?)\]/i)){const _0x160dc4=Number(RegExp['$1']);_0x160dc4!==VisuMZ[label][_0xe82afd(0x175)]&&(alert(_0xe82afd(0x2a1)[_0xe82afd(0x1c9)](_0x19b921,_0x160dc4)),SceneManager[_0xe82afd(0x1bf)]());}if(_0x106575[_0xe82afd(0x27a)](/\[Tier[ ](\d+)\]/i)){const _0x275426=Number(RegExp['$1']);_0x275426<tier?(alert(_0xe82afd(0x271)[_0xe82afd(0x1c9)](_0x19b921,_0x275426,tier)),SceneManager[_0xe82afd(0x1bf)]()):tier=Math[_0xe82afd(0x118)](_0x275426,tier);}VisuMZ[_0xe82afd(0x191)](VisuMZ[label][_0xe82afd(0xf5)],_0xf1f414[_0xe82afd(0x1e2)]);})(pluginData),VisuMZ['SkillsStatesCore'][_0x6967b(0x242)]=Scene_Boot[_0x6967b(0x20d)][_0x6967b(0x300)],Scene_Boot[_0x6967b(0x20d)][_0x6967b(0x300)]=function(){const _0x1d1b75=_0x6967b;VisuMZ[_0x1d1b75(0x2cc)][_0x1d1b75(0x242)][_0x1d1b75(0x106)](this),this[_0x1d1b75(0x2ce)](),VisuMZ['SkillsStatesCore'][_0x1d1b75(0x248)]();},Scene_Boot[_0x6967b(0x20d)]['process_VisuMZ_SkillsStatesCore_Notetags']=function(){const _0x57e7da=_0x6967b;if(VisuMZ[_0x57e7da(0x155)])return;this['process_VisuMZ_SkillsStatesCore_Skill_Notetags'](),this[_0x57e7da(0x1eb)]();},Scene_Boot['prototype']['process_VisuMZ_SkillsStatesCore_Skill_Notetags']=function(){const _0x1685c4=_0x6967b;for(const _0x2dffb3 of $dataSkills){if(!_0x2dffb3)continue;VisuMZ[_0x1685c4(0x2cc)]['Parse_Notetags_Skill_Cost'](_0x2dffb3),VisuMZ['SkillsStatesCore'][_0x1685c4(0x2ef)](_0x2dffb3);}},Scene_Boot[_0x6967b(0x20d)][_0x6967b(0x1eb)]=function(){const _0x33e68a=_0x6967b;for(const _0xa726d8 of $dataStates){if(!_0xa726d8)continue;VisuMZ['SkillsStatesCore'][_0x33e68a(0x1c4)](_0xa726d8),VisuMZ[_0x33e68a(0x2cc)][_0x33e68a(0x1fb)](_0xa726d8),VisuMZ[_0x33e68a(0x2cc)]['Parse_Notetags_State_SlipEffectJS'](_0xa726d8),VisuMZ['SkillsStatesCore'][_0x33e68a(0x12a)](_0xa726d8);}},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x263)]=VisuMZ[_0x6967b(0x263)],VisuMZ['ParseSkillNotetags']=function(_0x74a0cf){const _0x3cb510=_0x6967b;VisuMZ[_0x3cb510(0x2cc)][_0x3cb510(0x263)][_0x3cb510(0x106)](this,_0x74a0cf),VisuMZ[_0x3cb510(0x2cc)][_0x3cb510(0x201)](_0x74a0cf),VisuMZ[_0x3cb510(0x2cc)][_0x3cb510(0x2ef)](_0x74a0cf);},VisuMZ[_0x6967b(0x2cc)]['ParseStateNotetags']=VisuMZ['ParseStateNotetags'],VisuMZ['ParseStateNotetags']=function(_0x1c4def){const _0x2e66ae=_0x6967b;VisuMZ['SkillsStatesCore'][_0x2e66ae(0x2b7)][_0x2e66ae(0x106)](this,_0x1c4def),VisuMZ[_0x2e66ae(0x2cc)]['Parse_Notetags_State_Category'](_0x1c4def),VisuMZ['SkillsStatesCore']['Parse_Notetags_State_PassiveJS'](_0x1c4def),VisuMZ['SkillsStatesCore']['Parse_Notetags_State_SlipEffectJS'](_0x1c4def),VisuMZ[_0x2e66ae(0x2cc)]['Parse_Notetags_State_ApplyRemoveLeaveJS'](_0x1c4def);},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x201)]=function(_0x2398b4){const _0x568064=_0x6967b,_0x81c1c2=_0x2398b4['note'];_0x81c1c2[_0x568064(0x27a)](/<MP COST:[ ](\d+)>/i)&&(_0x2398b4[_0x568064(0x130)]=Number(RegExp['$1'])),_0x81c1c2['match'](/<TP COST:[ ](\d+)>/i)&&(_0x2398b4['tpCost']=Number(RegExp['$1']));},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x143)]={},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x29c)]={},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x2ef)]=function(_0x543a2f){const _0x312978=_0x6967b,_0x41f18c=_0x543a2f[_0x312978(0x12d)];if(_0x41f18c[_0x312978(0x27a)](/<JS SKILL ENABLE>\s*([\s\S]*)\s*<\/JS SKILL ENABLE>/i)){const _0xdf678f=String(RegExp['$1']),_0x2bde6d='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20'[_0x312978(0x1c9)](_0xdf678f);VisuMZ[_0x312978(0x2cc)][_0x312978(0x143)][_0x543a2f['id']]=new Function(_0x312978(0x140),_0x2bde6d);}if(_0x41f18c[_0x312978(0x27a)](/<JS SKILL VISIBLE>\s*([\s\S]*)\s*<\/JS SKILL VISIBLE>/i)){const _0x2198af=String(RegExp['$1']),_0x18ca55=_0x312978(0x1f2)[_0x312978(0x1c9)](_0x2198af);VisuMZ['SkillsStatesCore'][_0x312978(0x29c)][_0x543a2f['id']]=new Function(_0x312978(0x140),_0x18ca55);}},VisuMZ['SkillsStatesCore']['Parse_Notetags_State_Category']=function(_0x3f41e5){const _0x252a87=_0x6967b;_0x3f41e5[_0x252a87(0x243)]=[_0x252a87(0x215),_0x252a87(0x21c)];const _0x12e997=_0x3f41e5[_0x252a87(0x12d)],_0x145bd7=_0x12e997['match'](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);if(_0x145bd7)for(const _0x215ed6 of _0x145bd7){_0x215ed6['match'](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0x2de49c=String(RegExp['$1'])[_0x252a87(0x251)]()['trim']()[_0x252a87(0x1a3)](',');for(const _0xb591a3 of _0x2de49c){_0x3f41e5[_0x252a87(0x243)]['push'](_0xb591a3[_0x252a87(0x190)]());}}if(_0x12e997[_0x252a87(0x27a)](/<(?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/(?:CATEGORY|CATEGORIES)>/i)){const _0x4291b5=RegExp['$1'][_0x252a87(0x1a3)](/[\r\n]+/);for(const _0x9c87a6 of _0x4291b5){_0x3f41e5[_0x252a87(0x243)][_0x252a87(0x2a7)](_0x9c87a6[_0x252a87(0x251)]()['trim']());}}_0x12e997[_0x252a87(0x27a)](/<POSITIVE STATE>/i)&&_0x3f41e5[_0x252a87(0x243)][_0x252a87(0x2a7)](_0x252a87(0xc0)),_0x12e997[_0x252a87(0x27a)](/<NEGATIVE STATE>/i)&&_0x3f41e5[_0x252a87(0x243)][_0x252a87(0x2a7)](_0x252a87(0x2db));},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0xce)]={},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x1fb)]=function(_0x37a04c){const _0x568755=_0x6967b,_0x5493dd=_0x37a04c[_0x568755(0x12d)];if(_0x5493dd[_0x568755(0x27a)](/<JS PASSIVE CONDITION>\s*([\s\S]*)\s*<\/JS PASSIVE CONDITION>/i)){const _0x2bd528=String(RegExp['$1']),_0x274fab='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20condition\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20condition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20'[_0x568755(0x1c9)](_0x2bd528);VisuMZ[_0x568755(0x2cc)][_0x568755(0xce)][_0x37a04c['id']]=new Function(_0x568755(0x2e6),_0x274fab);}},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x2b2)]={},VisuMZ[_0x6967b(0x2cc)]['stateHpSlipHealJS']={},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x15b)]={},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x1a5)]={},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x179)]={},VisuMZ['SkillsStatesCore']['stateTpSlipHealJS']={},VisuMZ['SkillsStatesCore']['Parse_Notetags_State_SlipEffectJS']=function(_0x294bfc){const _0x22d919=_0x6967b,_0x324ab1=_0x294bfc[_0x22d919(0x12d)],_0xca25c7=_0x22d919(0x254);if(_0x324ab1[_0x22d919(0x27a)](/<JS HP SLIP DAMAGE>\s*([\s\S]*)\s*<\/JS HP SLIP DAMAGE>/i)){const _0x1d386b=String(RegExp['$1']),_0x4eaa55=_0xca25c7[_0x22d919(0x1c9)](_0x1d386b,_0x22d919(0x2a9),-0x1,'slipHp');VisuMZ[_0x22d919(0x2cc)]['stateHpSlipDamageJS'][_0x294bfc['id']]=new Function(_0x22d919(0x1b5),_0x4eaa55);}else{if(_0x324ab1[_0x22d919(0x27a)](/<JS HP SLIP HEAL>\s*([\s\S]*)\s*<\/JS HP SLIP HEAL>/i)){const _0x3bc161=String(RegExp['$1']),_0x49f858=_0xca25c7[_0x22d919(0x1c9)](_0x3bc161,_0x22d919(0x14c),0x1,_0x22d919(0x234));VisuMZ[_0x22d919(0x2cc)][_0x22d919(0x16d)][_0x294bfc['id']]=new Function(_0x22d919(0x1b5),_0x49f858);}}if(_0x324ab1[_0x22d919(0x27a)](/<JS MP SLIP DAMAGE>\s*([\s\S]*)\s*<\/JS MP SLIP DAMAGE>/i)){const _0x119b75=String(RegExp['$1']),_0xcfabdc=_0xca25c7[_0x22d919(0x1c9)](_0x119b75,'damage',-0x1,'slipMp');VisuMZ[_0x22d919(0x2cc)]['stateMpSlipDamageJS'][_0x294bfc['id']]=new Function(_0x22d919(0x1b5),_0xcfabdc);}else{if(_0x324ab1['match'](/<JS MP SLIP HEAL>\s*([\s\S]*)\s*<\/JS MP SLIP HEAL>/i)){const _0x405680=String(RegExp['$1']),_0x4db594=_0xca25c7[_0x22d919(0x1c9)](_0x405680,'heal',0x1,'slipMp');VisuMZ[_0x22d919(0x2cc)][_0x22d919(0x1a5)][_0x294bfc['id']]=new Function(_0x22d919(0x1b5),_0x4db594);}}if(_0x324ab1[_0x22d919(0x27a)](/<JS TP SLIP DAMAGE>\s*([\s\S]*)\s*<\/JS TP SLIP DAMAGE>/i)){const _0x25db71=String(RegExp['$1']),_0x4e9c03=_0xca25c7[_0x22d919(0x1c9)](_0x25db71,_0x22d919(0x2a9),-0x1,'slipTp');VisuMZ[_0x22d919(0x2cc)][_0x22d919(0x179)][_0x294bfc['id']]=new Function(_0x22d919(0x1b5),_0x4e9c03);}else{if(_0x324ab1['match'](/<JS TP SLIP HEAL>\s*([\s\S]*)\s*<\/JS TP SLIP HEAL>/i)){const _0x25b343=String(RegExp['$1']),_0xe5bd8e=_0xca25c7[_0x22d919(0x1c9)](_0x25b343,_0x22d919(0x14c),0x1,_0x22d919(0x1b3));VisuMZ[_0x22d919(0x2cc)][_0x22d919(0x20f)][_0x294bfc['id']]=new Function('stateId',_0xe5bd8e);}}},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x1ac)]={},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0xf2)]={},VisuMZ['SkillsStatesCore']['stateExpireJS']={},VisuMZ['SkillsStatesCore'][_0x6967b(0x12a)]=function(_0x28272d){const _0x1a012a=_0x6967b,_0x5e6ed4=_0x28272d[_0x1a012a(0x12d)],_0xfb6942=_0x1a012a(0xcf);if(_0x5e6ed4[_0x1a012a(0x27a)](/<JS ON ADD STATE>\s*([\s\S]*)\s*<\/JS ON ADD STATE>/i)){const _0x580a65=String(RegExp['$1']),_0x5abb26=_0xfb6942['format'](_0x580a65);VisuMZ[_0x1a012a(0x2cc)]['stateAddJS'][_0x28272d['id']]=new Function(_0x1a012a(0x1b5),_0x5abb26);}if(_0x5e6ed4[_0x1a012a(0x27a)](/<JS ON ERASE STATE>\s*([\s\S]*)\s*<\/JS ON ERASE STATE>/i)){const _0x3aed9f=String(RegExp['$1']),_0x4b9af0=_0xfb6942[_0x1a012a(0x1c9)](_0x3aed9f);VisuMZ[_0x1a012a(0x2cc)][_0x1a012a(0xf2)][_0x28272d['id']]=new Function(_0x1a012a(0x1b5),_0x4b9af0);}if(_0x5e6ed4['match'](/<JS ON EXPIRE STATE>\s*([\s\S]*)\s*<\/JS ON EXPIRE STATE>/i)){const _0x2e0721=String(RegExp['$1']),_0x158a43=_0xfb6942[_0x1a012a(0x1c9)](_0x2e0721);VisuMZ[_0x1a012a(0x2cc)][_0x1a012a(0x2ab)][_0x28272d['id']]=new Function(_0x1a012a(0x1b5),_0x158a43);}},VisuMZ[_0x6967b(0x2cc)]['CheckIncompatibleStates']=function(){const _0x5507ba=_0x6967b;if(!VisuMZ['SkillsStatesCore']['Settings']['States'][_0x5507ba(0x105)])return;for(const _0x5b347e of $dataStates){if(!_0x5b347e)continue;_0x5b347e['restriction']===0x4&&_0x5b347e[_0x5507ba(0x149)]===0x1&&(_0x5b347e[_0x5507ba(0x149)]=0x2);}},DataManager[_0x6967b(0x268)]=function(_0x255ade){const _0x2dc92d=_0x6967b;_0x255ade=_0x255ade['toUpperCase']()[_0x2dc92d(0x190)](),this[_0x2dc92d(0x283)]=this[_0x2dc92d(0x283)]||{};if(this[_0x2dc92d(0x283)][_0x255ade])return this[_0x2dc92d(0x283)][_0x255ade];for(const _0x125172 of $dataClasses){if(!_0x125172)continue;let _0x4d62c2=_0x125172[_0x2dc92d(0x2f6)];_0x4d62c2=_0x4d62c2[_0x2dc92d(0x1e4)](/\x1I\[(\d+)\]/gi,''),_0x4d62c2=_0x4d62c2[_0x2dc92d(0x1e4)](/\\I\[(\d+)\]/gi,''),this[_0x2dc92d(0x283)][_0x4d62c2[_0x2dc92d(0x251)]()[_0x2dc92d(0x190)]()]=_0x125172['id'];}return this['_classIDs'][_0x255ade]||0x0;},DataManager['getSkillTypes']=function(_0x28c42c){const _0x133080=_0x6967b;this[_0x133080(0x23b)]=this['_stypeIDs']||{};if(this[_0x133080(0x23b)][_0x28c42c['id']])return this['_stypeIDs'][_0x28c42c['id']];this[_0x133080(0x23b)][_0x28c42c['id']]=[_0x28c42c[_0x133080(0x21f)]];if(_0x28c42c[_0x133080(0x12d)][_0x133080(0x27a)](/<SKILL[ ](?:TYPE|TYPES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1ee52d=JSON[_0x133080(0x138)]('['+RegExp['$1'][_0x133080(0x27a)](/\d+/g)+']');this[_0x133080(0x23b)][_0x28c42c['id']]=this['_stypeIDs'][_0x28c42c['id']]['concat'](_0x1ee52d);}else{if(_0x28c42c[_0x133080(0x12d)][_0x133080(0x27a)](/<SKILL[ ](?:TYPE|TYPES):[ ](.*)>/i)){const _0x1a8866=RegExp['$1'][_0x133080(0x1a3)](',');for(const _0x3c7f83 of _0x1a8866){const _0x4875a1=DataManager[_0x133080(0x278)](_0x3c7f83);if(_0x4875a1)this[_0x133080(0x23b)][_0x28c42c['id']][_0x133080(0x2a7)](_0x4875a1);}}}return this[_0x133080(0x23b)][_0x28c42c['id']];},DataManager[_0x6967b(0x278)]=function(_0x353402){const _0x74e261=_0x6967b;_0x353402=_0x353402[_0x74e261(0x251)]()[_0x74e261(0x190)](),this[_0x74e261(0x23b)]=this[_0x74e261(0x23b)]||{};if(this[_0x74e261(0x23b)][_0x353402])return this[_0x74e261(0x23b)][_0x353402];for(let _0x51e50d=0x1;_0x51e50d<0x64;_0x51e50d++){if(!$dataSystem[_0x74e261(0x128)][_0x51e50d])continue;let _0x20869c=$dataSystem['skillTypes'][_0x51e50d][_0x74e261(0x251)]()['trim']();_0x20869c=_0x20869c[_0x74e261(0x1e4)](/\x1I\[(\d+)\]/gi,''),_0x20869c=_0x20869c[_0x74e261(0x1e4)](/\\I\[(\d+)\]/gi,''),this[_0x74e261(0x23b)][_0x20869c]=_0x51e50d;}return this[_0x74e261(0x23b)][_0x353402]||0x0;},DataManager['getSkillIdWithName']=function(_0x4330e2){const _0x465825=_0x6967b;_0x4330e2=_0x4330e2['toUpperCase']()[_0x465825(0x190)](),this['_skillIDs']=this['_skillIDs']||{};if(this['_skillIDs'][_0x4330e2])return this[_0x465825(0xf0)][_0x4330e2];for(const _0x3e2fe1 of $dataSkills){if(!_0x3e2fe1)continue;this[_0x465825(0xf0)][_0x3e2fe1['name'][_0x465825(0x251)]()[_0x465825(0x190)]()]=_0x3e2fe1['id'];}return this[_0x465825(0xf0)][_0x4330e2]||0x0;},DataManager[_0x6967b(0xb7)]=function(_0x35b8c6){const _0x34506e=_0x6967b;_0x35b8c6=_0x35b8c6[_0x34506e(0x251)]()[_0x34506e(0x190)](),this['_stateIDs']=this['_stateIDs']||{};if(this[_0x34506e(0xb8)][_0x35b8c6])return this['_stateIDs'][_0x35b8c6];for(const _0x269a9e of $dataStates){if(!_0x269a9e)continue;this[_0x34506e(0xb8)][_0x269a9e[_0x34506e(0x2f6)][_0x34506e(0x251)]()['trim']()]=_0x269a9e['id'];}return this[_0x34506e(0xb8)][_0x35b8c6]||0x0;},DataManager[_0x6967b(0x235)]=function(_0x5230e8){const _0x327ebd=_0x6967b;this['_stateMaxTurns']=this['_stateMaxTurns']||{};if(this[_0x327ebd(0x27e)][_0x5230e8])return this[_0x327ebd(0x27e)][_0x5230e8];return $dataStates[_0x5230e8][_0x327ebd(0x12d)]['match'](/<MAX TURNS:[ ](\d+)>/i)?this[_0x327ebd(0x27e)][_0x5230e8]=Number(RegExp['$1']):this[_0x327ebd(0x27e)][_0x5230e8]=VisuMZ[_0x327ebd(0x2cc)][_0x327ebd(0xf5)][_0x327ebd(0x245)][_0x327ebd(0x1f7)],this['_stateMaxTurns'][_0x5230e8];},ColorManager['getColorDataFromPluginParameters']=function(_0x31c68c,_0x3fb597){const _0x28a355=_0x6967b;return _0x3fb597=String(_0x3fb597),this[_0x28a355(0xf3)]=this['_colorCache']||{},_0x3fb597[_0x28a355(0x27a)](/#(.*)/i)?this['_colorCache'][_0x31c68c]=_0x28a355(0x21d)[_0x28a355(0x1c9)](String(RegExp['$1'])):this[_0x28a355(0xf3)][_0x31c68c]=this['textColor'](Number(_0x3fb597)),this[_0x28a355(0xf3)][_0x31c68c];},ColorManager[_0x6967b(0x2b6)]=function(_0x14d0dd){const _0x1c84a2=_0x6967b;return _0x14d0dd=String(_0x14d0dd),_0x14d0dd['match'](/#(.*)/i)?_0x1c84a2(0x21d)[_0x1c84a2(0x1c9)](String(RegExp['$1'])):this[_0x1c84a2(0x223)](Number(_0x14d0dd));},ColorManager[_0x6967b(0x108)]=function(_0x5fe539){const _0x98820=_0x6967b;if(typeof _0x5fe539==='number')_0x5fe539=$dataStates[_0x5fe539];const _0x466592=_0x98820(0x25c)['format'](_0x5fe539['id']);this[_0x98820(0xf3)]=this[_0x98820(0xf3)]||{};if(this[_0x98820(0xf3)][_0x466592])return this['_colorCache'][_0x466592];const _0x3db50b=this[_0x98820(0x2d9)](_0x5fe539);return this[_0x98820(0x121)](_0x466592,_0x3db50b);},ColorManager[_0x6967b(0x2d9)]=function(_0x43dbd4){const _0x580412=_0x6967b,_0x17a2b6=_0x43dbd4[_0x580412(0x12d)];if(_0x17a2b6[_0x580412(0x27a)](/<TURN COLOR:[ ](.*)>/i))return String(RegExp['$1']);else{if(_0x17a2b6[_0x580412(0x27a)](/<POSITIVE STATE>/i))return VisuMZ['SkillsStatesCore']['Settings'][_0x580412(0x245)][_0x580412(0xba)];else return _0x17a2b6[_0x580412(0x27a)](/<NEGATIVE STATE>/i)?VisuMZ[_0x580412(0x2cc)][_0x580412(0xf5)][_0x580412(0x245)]['ColorNegative']:VisuMZ[_0x580412(0x2cc)]['Settings'][_0x580412(0x245)][_0x580412(0x2c0)];}},ColorManager[_0x6967b(0x11d)]=function(){const _0x52fb48=_0x6967b,_0x1a8c52=_0x52fb48(0x157);this['_colorCache']=this[_0x52fb48(0xf3)]||{};if(this[_0x52fb48(0xf3)][_0x1a8c52])return this['_colorCache'][_0x1a8c52];const _0x39cad5=VisuMZ['SkillsStatesCore'][_0x52fb48(0xf5)][_0x52fb48(0x1f5)]['ColorBuff'];return this[_0x52fb48(0x121)](_0x1a8c52,_0x39cad5);},ColorManager[_0x6967b(0x18f)]=function(){const _0x106ab6=_0x6967b,_0x18ce9b=_0x106ab6(0x261);this[_0x106ab6(0xf3)]=this[_0x106ab6(0xf3)]||{};if(this[_0x106ab6(0xf3)][_0x18ce9b])return this[_0x106ab6(0xf3)][_0x18ce9b];const _0x15d79b=VisuMZ[_0x106ab6(0x2cc)][_0x106ab6(0xf5)]['Buffs'][_0x106ab6(0x299)];return this['getColorDataFromPluginParameters'](_0x18ce9b,_0x15d79b);},SceneManager[_0x6967b(0x14d)]=function(){const _0x340324=_0x6967b;return this['_scene']&&this[_0x340324(0x1ca)][_0x340324(0x19f)]===Scene_Battle;},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x188)]=BattleManager[_0x6967b(0x28b)],BattleManager['endAction']=function(){const _0x497ec0=_0x6967b;this[_0x497ec0(0xfe)](),VisuMZ[_0x497ec0(0x2cc)][_0x497ec0(0x188)][_0x497ec0(0x106)](this);},BattleManager[_0x6967b(0xfe)]=function(){const _0xc5667=_0x6967b,_0x2dc6f8=VisuMZ[_0xc5667(0x2cc)][_0xc5667(0xf5)][_0xc5667(0x245)];if(!_0x2dc6f8)return;if(_0x2dc6f8[_0xc5667(0x105)]===![])return;if(!this[_0xc5667(0x1da)])return;this[_0xc5667(0x1da)][_0xc5667(0xfe)]();},Game_Battler['prototype'][_0x6967b(0xfe)]=function(){const _0x3c7f2f=_0x6967b;if(BattleManager[_0x3c7f2f(0x15c)]!==_0x3c7f2f(0x275))return;if(this[_0x3c7f2f(0x26b)]===Graphics['frameCount'])return;this[_0x3c7f2f(0x26b)]=Graphics[_0x3c7f2f(0x109)];for(const _0x1387ab of this[_0x3c7f2f(0x10e)]){const _0x3db2fb=$dataStates[_0x1387ab];if(!_0x3db2fb)continue;if(_0x3db2fb[_0x3c7f2f(0x149)]!==0x1)continue;this['_stateTurns'][_0x1387ab]>0x0&&this[_0x3c7f2f(0xf7)][_0x1387ab]--;}this[_0x3c7f2f(0x2a0)](0x1);},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x244)]=function(){const _0x3ff584=_0x6967b,_0x77fb08=VisuMZ[_0x3ff584(0x2cc)][_0x3ff584(0xf5)][_0x3ff584(0x245)];for(const _0x2402ca of this[_0x3ff584(0x10e)]){const _0x5cce31=$dataStates[_0x2402ca];if(_0x77fb08&&_0x77fb08['ActionEndUpdate']!==![]){if(_0x5cce31&&_0x5cce31[_0x3ff584(0x149)]===0x1)continue;}this['_stateTurns'][_0x2402ca]>0x0&&this['_stateTurns'][_0x2402ca]--;}},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x1ad)]=Game_Switches['prototype'][_0x6967b(0x301)],Game_Switches['prototype'][_0x6967b(0x301)]=function(){const _0x3e041b=_0x6967b;VisuMZ[_0x3e041b(0x2cc)][_0x3e041b(0x1ad)]['call'](this);const _0x1ae0ae=VisuMZ[_0x3e041b(0x2cc)][_0x3e041b(0xf5)][_0x3e041b(0x2cf)][_0x3e041b(0x306)]??!![];if(!_0x1ae0ae)return;if(SceneManager[_0x3e041b(0x14d)]())for(const _0x584779 of BattleManager[_0x3e041b(0x11e)]()){if(_0x584779)_0x584779[_0x3e041b(0x286)]();}},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x1ce)]=Game_Variables[_0x6967b(0x20d)][_0x6967b(0x301)],Game_Variables['prototype'][_0x6967b(0x301)]=function(){const _0x57967c=_0x6967b;VisuMZ[_0x57967c(0x2cc)][_0x57967c(0x1ce)]['call'](this);const _0x4beadc=VisuMZ['SkillsStatesCore'][_0x57967c(0xf5)][_0x57967c(0x2cf)][_0x57967c(0x206)]??!![];if(!_0x4beadc)return;if(SceneManager[_0x57967c(0x14d)]())for(const _0x2ca46f of BattleManager['allBattleMembers']()){if(_0x2ca46f)_0x2ca46f[_0x57967c(0x286)]();}},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x199)]=Game_Action[_0x6967b(0x20d)][_0x6967b(0x141)],Game_Action[_0x6967b(0x20d)]['applyItemUserEffect']=function(_0x3b44dc){const _0x391b96=_0x6967b;VisuMZ[_0x391b96(0x2cc)][_0x391b96(0x199)][_0x391b96(0x106)](this,_0x3b44dc),this[_0x391b96(0x18c)](_0x3b44dc);},Game_Action[_0x6967b(0x20d)]['applySkillsStatesCoreEffects']=function(_0x45a309){const _0x2ce5f6=_0x6967b;this['applyStateCategoryRemovalEffects'](_0x45a309),this[_0x2ce5f6(0x1cc)](_0x45a309),this['applyBuffTurnManipulationEffects'](_0x45a309),this[_0x2ce5f6(0x132)](_0x45a309);},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x19b)]=Game_Action['prototype'][_0x6967b(0x1e1)],Game_Action[_0x6967b(0x20d)]['testApply']=function(_0x986da){const _0x5c646d=_0x6967b;if(this[_0x5c646d(0x2cd)](_0x986da))return!![];return VisuMZ[_0x5c646d(0x2cc)][_0x5c646d(0x19b)]['call'](this,_0x986da);},Game_Action['prototype']['testSkillStatesCoreNotetags']=function(_0xafb35f){const _0x306a4a=_0x6967b,_0xfebe1d=this[_0x306a4a(0x2a5)]()['note'];if(_0xfebe1d[_0x306a4a(0x27a)](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ](.*)>/i)){const _0x559c4e=String(RegExp['$1']);if(_0xafb35f[_0x306a4a(0x1fa)](_0x559c4e))return!![];}if(_0xfebe1d['match'](/<SET STATE[ ](\d+)[ ]TURNS:[ ](.*)>/i)){const _0x3fbc40=Number(RegExp['$1']);if(_0xafb35f[_0x306a4a(0x2d3)](_0x3fbc40))return!![];}else{if(_0xfebe1d['match'](/<SET STATE[ ](.*)[ ]TURNS:[ ](.*)>/i)){const _0x1bc687=DataManager[_0x306a4a(0xb7)](RegExp['$1']);if(_0xafb35f[_0x306a4a(0x2d3)](_0x1bc687))return!![];}}return![];},Game_Action[_0x6967b(0x20d)][_0x6967b(0x29f)]=function(_0x4db4a7){const _0x54a292=_0x6967b;if(_0x4db4a7['states']()[_0x54a292(0x209)]<=0x0)return;const _0x1a1f31=this[_0x54a292(0x2a5)]()['note'];{const _0x43e6ab=_0x1a1f31[_0x54a292(0x27a)](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ]ALL>/gi);if(_0x43e6ab)for(const _0x8e4001 of _0x43e6ab){_0x8e4001[_0x54a292(0x27a)](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ]ALL>/i);const _0x2e7b02=String(RegExp['$1']);_0x4db4a7['removeStatesByCategoryAll'](_0x2e7b02);}}{const _0x1c54c7=_0x1a1f31[_0x54a292(0x27a)](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ](\d+)>/gi);if(_0x1c54c7)for(const _0x5ee242 of _0x1c54c7){_0x5ee242[_0x54a292(0x27a)](/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ](\d+)>/i);const _0x2f658c=String(RegExp['$1']),_0x1b58c1=Number(RegExp['$2']);_0x4db4a7[_0x54a292(0x265)](_0x2f658c,_0x1b58c1);}}},Game_Action['prototype'][_0x6967b(0x1cc)]=function(_0x1d2cc8){const _0x253273=_0x6967b,_0x22d9c0=this[_0x253273(0x2a5)]()[_0x253273(0x12d)],_0x14bdb5=_0x22d9c0[_0x253273(0x27a)](/<SET STATE[ ](.*)[ ]TURNS:[ ](\d+)>/gi);if(_0x14bdb5)for(const _0x335d51 of _0x14bdb5){let _0x4f044d=0x0,_0x85e561=0x0;if(_0x335d51['match'](/<SET STATE[ ](\d+)[ ]TURNS:[ ](\d+)>/i))_0x4f044d=Number(RegExp['$1']),_0x85e561=Number(RegExp['$2']);else _0x335d51['match'](/<SET STATE[ ](.*)[ ]TURNS:[ ](\d+)>/i)&&(_0x4f044d=DataManager[_0x253273(0xb7)](RegExp['$1']),_0x85e561=Number(RegExp['$2']));_0x1d2cc8[_0x253273(0x2be)](_0x4f044d,_0x85e561),this[_0x253273(0x217)](_0x1d2cc8);}const _0x55bf03=_0x22d9c0[_0x253273(0x27a)](/<STATE[ ](.*)[ ]TURNS:[ ]([\+\-]\d+)>/gi);if(_0x55bf03)for(const _0x2d7df1 of _0x55bf03){let _0x3a2cbe=0x0,_0x439ca2=0x0;if(_0x2d7df1[_0x253273(0x27a)](/<STATE[ ](\d+)[ ]TURNS:[ ]([\+\-]\d+)>/i))_0x3a2cbe=Number(RegExp['$1']),_0x439ca2=Number(RegExp['$2']);else _0x2d7df1[_0x253273(0x27a)](/<STATE[ ](.*)[ ]TURNS:[ ]([\+\-]\d+)>/i)&&(_0x3a2cbe=DataManager[_0x253273(0xb7)](RegExp['$1']),_0x439ca2=Number(RegExp['$2']));_0x1d2cc8[_0x253273(0x237)](_0x3a2cbe,_0x439ca2),this[_0x253273(0x217)](_0x1d2cc8);}},Game_Action['prototype'][_0x6967b(0x303)]=function(_0x25d047){const _0x2069ca=_0x6967b,_0x464794=[_0x2069ca(0x1d6),_0x2069ca(0xd0),'ATK',_0x2069ca(0x168),'MAT',_0x2069ca(0x227),'AGI',_0x2069ca(0xe3)],_0x3e6aaa=this[_0x2069ca(0x2a5)]()[_0x2069ca(0x12d)],_0x21d3a7=_0x3e6aaa[_0x2069ca(0x27a)](/<SET[ ](.*)[ ]BUFF TURNS:[ ](\d+)>/gi);if(_0x21d3a7)for(const _0x4dd492 of _0x21d3a7){_0x4dd492[_0x2069ca(0x27a)](/<SET[ ](.*)[ ]BUFF TURNS:[ ](\d+)>/i);const _0x1eb037=_0x464794[_0x2069ca(0x282)](String(RegExp['$1'])[_0x2069ca(0x251)]()),_0xebce4f=Number(RegExp['$2']);_0x1eb037>=0x0&&(_0x25d047[_0x2069ca(0x239)](_0x1eb037,_0xebce4f),this[_0x2069ca(0x217)](_0x25d047));}const _0x5a7d82=_0x3e6aaa[_0x2069ca(0x27a)](/<(.*)[ ]BUFF TURNS:[ ]([\+\-]\d+)>/gi);if(_0x5a7d82)for(const _0xe92860 of _0x21d3a7){_0xe92860[_0x2069ca(0x27a)](/<(.*)[ ]BUFF TURNS:[ ]([\+\-]\d+)>/i);const _0x4d8d33=_0x464794[_0x2069ca(0x282)](String(RegExp['$1'])[_0x2069ca(0x251)]()),_0x1d1a38=Number(RegExp['$2']);_0x4d8d33>=0x0&&(_0x25d047[_0x2069ca(0x22e)](_0x4d8d33,_0x1d1a38),this[_0x2069ca(0x217)](_0x25d047));}},Game_Action[_0x6967b(0x20d)][_0x6967b(0x132)]=function(_0x1e6eee){const _0x1ae582=_0x6967b,_0x98c18c=['MAXHP',_0x1ae582(0xd0),'ATK','DEF',_0x1ae582(0x186),_0x1ae582(0x227),_0x1ae582(0x1ab),_0x1ae582(0xe3)],_0x5f756b=this[_0x1ae582(0x2a5)]()['note'],_0xd7d86a=_0x5f756b[_0x1ae582(0x27a)](/<SET[ ](.*)[ ]DEBUFF TURNS:[ ](\d+)>/gi);if(_0xd7d86a)for(const _0x4dbd45 of _0xd7d86a){_0x4dbd45[_0x1ae582(0x27a)](/<SET[ ](.*)[ ]DEBUFF TURNS:[ ](\d+)>/i);const _0x5a7d0e=_0x98c18c[_0x1ae582(0x282)](String(RegExp['$1'])[_0x1ae582(0x251)]()),_0xf23c8e=Number(RegExp['$2']);_0x5a7d0e>=0x0&&(_0x1e6eee[_0x1ae582(0xdf)](_0x5a7d0e,_0xf23c8e),this[_0x1ae582(0x217)](_0x1e6eee));}const _0xd581dd=_0x5f756b[_0x1ae582(0x27a)](/<(.*)[ ]DEBUFF TURNS:[ ]([\+\-]\d+)>/gi);if(_0xd581dd)for(const _0x25a73e of _0xd7d86a){_0x25a73e[_0x1ae582(0x27a)](/<(.*)[ ]DEBUFF TURNS:[ ]([\+\-]\d+)>/i);const _0x5de4fe=_0x98c18c[_0x1ae582(0x282)](String(RegExp['$1'])[_0x1ae582(0x251)]()),_0x4fd8cf=Number(RegExp['$2']);_0x5de4fe>=0x0&&(_0x1e6eee[_0x1ae582(0x205)](_0x5de4fe,_0x4fd8cf),this[_0x1ae582(0x217)](_0x1e6eee));}},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x30a)]=Game_BattlerBase['prototype'][_0x6967b(0x26c)],Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x26c)]=function(){const _0x47059b=_0x6967b;this['_cache']={},this['initMembersSkillsStatesCore'](),VisuMZ['SkillsStatesCore'][_0x47059b(0x30a)][_0x47059b(0x106)](this);},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x1e0)]=function(){const _0x308ccb=_0x6967b;this[_0x308ccb(0x17a)]='',this[_0x308ccb(0x1b2)]={},this['_stateDisplay']={},this[_0x308ccb(0x259)]={};},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x2ea)]=function(_0x4ca2c2){const _0xf18e7e=_0x6967b;return this['_cache']=this['_cache']||{},this[_0xf18e7e(0x1db)][_0x4ca2c2]!==undefined;},VisuMZ['SkillsStatesCore'][_0x6967b(0x192)]=Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x286)],Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x286)]=function(){const _0x42f2f9=_0x6967b;this[_0x42f2f9(0x1db)]={},VisuMZ[_0x42f2f9(0x2cc)][_0x42f2f9(0x192)]['call'](this);},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0xc6)]=Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x2d0)],Game_BattlerBase['prototype'][_0x6967b(0x2d0)]=function(_0x339673){const _0x2a0e59=_0x6967b;let _0x2764c0=this[_0x2a0e59(0x2d3)](_0x339673);VisuMZ[_0x2a0e59(0x2cc)][_0x2a0e59(0xc6)][_0x2a0e59(0x106)](this,_0x339673);if(_0x2764c0&&!this[_0x2a0e59(0x2d3)](_0x339673))this[_0x2a0e59(0x114)](_0x339673);},Game_BattlerBase['prototype'][_0x6967b(0x114)]=function(_0x1a34b4){const _0x1a484e=_0x6967b;this[_0x1a484e(0x298)](_0x1a34b4),this[_0x1a484e(0x13a)](_0x1a34b4),this[_0x1a484e(0x29d)](_0x1a34b4);},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x133)]=Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x231)],Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x231)]=function(_0x1952b4){const _0x4a57d9=_0x6967b,_0x563438=$dataStates[_0x1952b4],_0x1956af=this['stateTurns'](_0x1952b4),_0x534f41=this[_0x4a57d9(0x266)](_0x563438)[_0x4a57d9(0x247)]()[_0x4a57d9(0x190)]();switch(_0x534f41){case'ignore':if(_0x1956af<=0x0)VisuMZ[_0x4a57d9(0x2cc)][_0x4a57d9(0x133)]['call'](this,_0x1952b4);break;case'reset':VisuMZ[_0x4a57d9(0x2cc)][_0x4a57d9(0x133)][_0x4a57d9(0x106)](this,_0x1952b4);break;case _0x4a57d9(0x1b0):VisuMZ[_0x4a57d9(0x2cc)]['Game_BattlerBase_resetStateCounts']['call'](this,_0x1952b4),this[_0x4a57d9(0xf7)][_0x1952b4]=Math[_0x4a57d9(0x118)](this[_0x4a57d9(0xf7)][_0x1952b4],_0x1956af);break;case _0x4a57d9(0x291):VisuMZ[_0x4a57d9(0x2cc)][_0x4a57d9(0x133)][_0x4a57d9(0x106)](this,_0x1952b4),this['_stateTurns'][_0x1952b4]+=_0x1956af;break;default:VisuMZ[_0x4a57d9(0x2cc)][_0x4a57d9(0x133)][_0x4a57d9(0x106)](this,_0x1952b4);break;}},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x266)]=function(_0x474fcf){const _0x531006=_0x6967b,_0x2c515b=_0x474fcf['note'];return _0x2c515b['match'](/<REAPPLY RULES:[ ](.*)>/i)?String(RegExp['$1']):VisuMZ[_0x531006(0x2cc)][_0x531006(0xf5)]['States'][_0x531006(0x2d6)];},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x25a)]=Game_BattlerBase[_0x6967b(0x20d)]['overwriteBuffTurns'],Game_BattlerBase[_0x6967b(0x20d)]['overwriteBuffTurns']=function(_0x55d94d,_0x3a633e){const _0x4ed85b=_0x6967b,_0x1ef6fa=VisuMZ[_0x4ed85b(0x2cc)][_0x4ed85b(0xf5)][_0x4ed85b(0x1f5)][_0x4ed85b(0x2d6)],_0x33e2df=this['buffTurns'](_0x55d94d);switch(_0x1ef6fa){case _0x4ed85b(0x196):if(_0x33e2df<=0x0)this['_buffTurns'][_0x55d94d]=_0x3a633e;break;case _0x4ed85b(0x15f):this[_0x4ed85b(0x2c5)][_0x55d94d]=_0x3a633e;break;case _0x4ed85b(0x1b0):this['_buffTurns'][_0x55d94d]=Math['max'](_0x33e2df,_0x3a633e);break;case'add':this[_0x4ed85b(0x2c5)][_0x55d94d]+=_0x3a633e;break;default:VisuMZ[_0x4ed85b(0x2cc)][_0x4ed85b(0x25a)][_0x4ed85b(0x106)](this,_0x55d94d,_0x3a633e);break;}const _0x1f8bd3=VisuMZ[_0x4ed85b(0x2cc)][_0x4ed85b(0xf5)][_0x4ed85b(0x1f5)][_0x4ed85b(0x1f7)];this['_buffTurns'][_0x55d94d]=this[_0x4ed85b(0x2c5)][_0x55d94d][_0x4ed85b(0x287)](0x0,_0x1f8bd3);},Game_BattlerBase['prototype'][_0x6967b(0x288)]=function(){const _0x1a0900=_0x6967b;if(this[_0x1a0900(0x1db)][_0x1a0900(0x21a)]!==undefined)return this['_cache'][_0x1a0900(0x21a)];this['_cache'][_0x1a0900(0x21a)]=![];const _0x35e401=this[_0x1a0900(0x1d5)]();for(const _0x197ee4 of _0x35e401){if(!_0x197ee4)continue;if(_0x197ee4[_0x1a0900(0x12d)]['match'](/<GROUP DEFEAT>/i)){this[_0x1a0900(0x1db)][_0x1a0900(0x21a)]=!![];break;}}return this[_0x1a0900(0x1db)][_0x1a0900(0x21a)];},VisuMZ[_0x6967b(0x2cc)]['Game_BattlerBase_clearStates']=Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x2bb)],Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x2bb)]=function(){const _0x5c8f59=_0x6967b;this[_0x5c8f59(0x13d)]()!==''?this[_0x5c8f59(0x210)]():(VisuMZ[_0x5c8f59(0x2cc)][_0x5c8f59(0x1af)]['call'](this),this[_0x5c8f59(0x1e0)]());},Game_Actor[_0x6967b(0x20d)]['clearStates']=function(){const _0x73ce17=_0x6967b;this['_stateSteps']=this[_0x73ce17(0xe9)]||{},Game_Battler[_0x73ce17(0x20d)][_0x73ce17(0x2bb)][_0x73ce17(0x106)](this);},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x210)]=function(){const _0x13bbdb=_0x6967b,_0x189cb5=this['states']();for(const _0x2c74b7 of _0x189cb5){if(_0x2c74b7&&this[_0x13bbdb(0xc8)](_0x2c74b7))this[_0x13bbdb(0x2d0)](_0x2c74b7['id']);}this[_0x13bbdb(0x1db)]={};},Game_BattlerBase['prototype'][_0x6967b(0xc8)]=function(_0xd86499){const _0x3eccba=_0x6967b,_0x4e9fca=this['getStateRetainType']();if(_0x4e9fca!==''){const _0x4ccd79=_0xd86499[_0x3eccba(0x12d)];if(_0x4e9fca==='death'&&_0x4ccd79[_0x3eccba(0x27a)](/<NO DEATH CLEAR>/i))return![];if(_0x4e9fca==='recover\x20all'&&_0x4ccd79['match'](/<NO RECOVER ALL CLEAR>/i))return![];}return this[_0x3eccba(0x2d3)](_0xd86499['id']);},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x13d)]=function(){return this['_stateRetainType'];},Game_BattlerBase['prototype']['setStateRetainType']=function(_0x2146dd){this['_stateRetainType']=_0x2146dd;},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x187)]=function(){this['_stateRetainType']='';},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x1c0)]=Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x152)],Game_BattlerBase['prototype'][_0x6967b(0x152)]=function(){const _0x2abf20=_0x6967b;this[_0x2abf20(0x255)](_0x2abf20(0x27f)),VisuMZ[_0x2abf20(0x2cc)]['Game_BattlerBase_die'][_0x2abf20(0x106)](this),this[_0x2abf20(0x187)]();},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0xfb)]=Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0xe5)],Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0xe5)]=function(){const _0x3bd0d9=_0x6967b;this[_0x3bd0d9(0x255)](_0x3bd0d9(0x2c6)),VisuMZ[_0x3bd0d9(0x2cc)][_0x3bd0d9(0xfb)]['call'](this),this[_0x3bd0d9(0x187)]();},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0xd8)]=function(_0x230e48){const _0x3f2dc7=_0x6967b;for(settings of VisuMZ[_0x3f2dc7(0x2cc)]['Settings']['Costs']){const _0x38f80c=settings[_0x3f2dc7(0x1b6)][_0x3f2dc7(0x106)](this,_0x230e48);if(!settings[_0x3f2dc7(0x2cb)]['call'](this,_0x230e48,_0x38f80c))return![];}return!![];},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0xcb)]=function(_0x43cd44){const _0x245759=_0x6967b;for(settings of VisuMZ['SkillsStatesCore'][_0x245759(0xf5)][_0x245759(0x2c2)]){const _0x4e3f29=settings[_0x245759(0x1b6)][_0x245759(0x106)](this,_0x43cd44);settings[_0x245759(0x218)][_0x245759(0x106)](this,_0x43cd44,_0x4e3f29);}},VisuMZ['SkillsStatesCore'][_0x6967b(0x13f)]=Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x23a)],Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x23a)]=function(_0x38e785){const _0x2299df=_0x6967b;if(!_0x38e785)return![];if(!VisuMZ[_0x2299df(0x2cc)]['Game_BattlerBase_meetsSkillConditions'][_0x2299df(0x106)](this,_0x38e785))return![];if(!this['checkSkillConditionsNotetags'](_0x38e785))return![];if(!this[_0x2299df(0x2bd)](_0x38e785))return![];if(!this[_0x2299df(0x264)](_0x38e785))return![];return!![];},Game_BattlerBase['prototype']['checkSkillConditionsNotetags']=function(_0x429619){const _0x3d26fb=_0x6967b;if(!this[_0x3d26fb(0x2f9)](_0x429619))return![];return!![];},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x2f9)]=function(_0x4ead98){const _0x3af4b0=_0x6967b,_0x30c17d=_0x4ead98[_0x3af4b0(0x12d)];if(_0x30c17d['match'](/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x12b328=JSON['parse']('['+RegExp['$1'][_0x3af4b0(0x27a)](/\d+/g)+']');for(const _0x5d8a2d of _0x12b328){if(!$gameSwitches[_0x3af4b0(0x1c2)](_0x5d8a2d))return![];}return!![];}if(_0x30c17d['match'](/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5e48b4=JSON[_0x3af4b0(0x138)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x1fdc6c of _0x5e48b4){if(!$gameSwitches[_0x3af4b0(0x1c2)](_0x1fdc6c))return![];}return!![];}if(_0x30c17d[_0x3af4b0(0x27a)](/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x474a17=JSON[_0x3af4b0(0x138)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x3c52fa of _0x474a17){if($gameSwitches['value'](_0x3c52fa))return!![];}return![];}if(_0x30c17d[_0x3af4b0(0x27a)](/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x28a336=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x3f4bbc of _0x28a336){if(!$gameSwitches[_0x3af4b0(0x1c2)](_0x3f4bbc))return!![];}return![];}if(_0x30c17d[_0x3af4b0(0x27a)](/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0xe1fa7a=JSON[_0x3af4b0(0x138)]('['+RegExp['$1'][_0x3af4b0(0x27a)](/\d+/g)+']');for(const _0x417c7d of _0xe1fa7a){if(!$gameSwitches['value'](_0x417c7d))return!![];}return![];}if(_0x30c17d[_0x3af4b0(0x27a)](/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x74f30a=JSON[_0x3af4b0(0x138)]('['+RegExp['$1'][_0x3af4b0(0x27a)](/\d+/g)+']');for(const _0x16e605 of _0x74f30a){if($gameSwitches['value'](_0x16e605))return![];}return!![];}return!![];},Game_BattlerBase['prototype']['meetsSkillConditionsEnableJS']=function(_0x4f7814){const _0x431a6d=_0x6967b,_0x16772e=_0x4f7814[_0x431a6d(0x12d)],_0x106082=VisuMZ[_0x431a6d(0x2cc)][_0x431a6d(0x143)];return _0x106082[_0x4f7814['id']]?_0x106082[_0x4f7814['id']]['call'](this,_0x4f7814):!![];},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x264)]=function(_0x4b28b7){const _0x4f418e=_0x6967b;return VisuMZ['SkillsStatesCore'][_0x4f418e(0xf5)][_0x4f418e(0x24c)]['SkillConditionJS'][_0x4f418e(0x106)](this,_0x4b28b7);},VisuMZ['SkillsStatesCore'][_0x6967b(0x15d)]=Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x294)],Game_BattlerBase[_0x6967b(0x20d)]['skillMpCost']=function(_0x56f93d){const _0x44ffef=_0x6967b;for(settings of VisuMZ[_0x44ffef(0x2cc)][_0x44ffef(0xf5)][_0x44ffef(0x2c2)]){if(settings[_0x44ffef(0x178)][_0x44ffef(0x251)]()==='MP')return settings[_0x44ffef(0x1b6)]['call'](this,_0x56f93d);}return VisuMZ[_0x44ffef(0x2cc)][_0x44ffef(0x15d)][_0x44ffef(0x106)](this,_0x56f93d);},VisuMZ['SkillsStatesCore'][_0x6967b(0xc7)]=Game_BattlerBase[_0x6967b(0x20d)]['skillTpCost'],Game_BattlerBase['prototype'][_0x6967b(0x177)]=function(_0x1928db){const _0x2d66de=_0x6967b;for(settings of VisuMZ[_0x2d66de(0x2cc)]['Settings'][_0x2d66de(0x2c2)]){if(settings[_0x2d66de(0x178)][_0x2d66de(0x251)]()==='TP')return settings[_0x2d66de(0x1b6)][_0x2d66de(0x106)](this,_0x1928db);}return VisuMZ[_0x2d66de(0x2cc)]['Game_BattlerBase_skillTpCost'][_0x2d66de(0x106)](this,_0x1928db);},Game_BattlerBase['prototype']['hasState']=function(_0x766316){const _0x17cb7e=_0x6967b;if(typeof _0x766316==='number')_0x766316=$dataStates[_0x766316];return this[_0x17cb7e(0x1d5)]()[_0x17cb7e(0x289)](_0x766316);},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x25d)]=Game_BattlerBase['prototype'][_0x6967b(0x1d5)],Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x1d5)]=function(){const _0x511d77=_0x6967b;let _0x47def1=VisuMZ[_0x511d77(0x2cc)][_0x511d77(0x25d)][_0x511d77(0x106)](this);if($gameTemp['_checkingPassiveStates'])return _0x47def1;return $gameTemp[_0x511d77(0x110)]=!![],this['addPassiveStates'](_0x47def1),$gameTemp[_0x511d77(0x110)]=undefined,_0x47def1;},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0xd9)]=function(_0x67e6da){const _0x29483c=_0x6967b,_0x2dc2ad=this['passiveStates']();for(state of _0x2dc2ad){if(!state)continue;if(!this[_0x29483c(0x1e6)](state)&&_0x67e6da[_0x29483c(0x289)](state))continue;_0x67e6da[_0x29483c(0x2a7)](state);}_0x2dc2ad[_0x29483c(0x209)]>0x0&&_0x67e6da[_0x29483c(0x2c3)]((_0x4dd1b3,_0x22440d)=>{const _0x50627d=_0x29483c,_0x377394=_0x4dd1b3[_0x50627d(0x135)],_0x783ed=_0x22440d[_0x50627d(0x135)];if(_0x377394!==_0x783ed)return _0x783ed-_0x377394;return _0x4dd1b3-_0x22440d;});},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x1e6)]=function(_0x14ccca){const _0x55139e=_0x6967b;return _0x14ccca['note'][_0x55139e(0x27a)](/<PASSIVE STACKABLE>/i);},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0xbf)]=Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0xd7)],Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0xd7)]=function(_0x4cbe28){const _0x4d670c=_0x6967b;this[_0x4d670c(0x2b8)]=!![];let _0x4a227c=VisuMZ[_0x4d670c(0x2cc)][_0x4d670c(0xbf)]['call'](this,_0x4cbe28);return this[_0x4d670c(0x2b8)]=undefined,_0x4a227c;},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0xf8)]=function(){const _0x1d24ee=_0x6967b;let _0x356840=[];this['_passiveStateResults']=this[_0x1d24ee(0x2a2)]||{};for(;;){_0x356840=[];let _0x18c492=!![];for(const _0x5792f7 of this[_0x1d24ee(0x1db)][_0x1d24ee(0x1dc)]){const _0x5e7c85=$dataStates[_0x5792f7];if(!_0x5e7c85)continue;let _0x25f9b1=this[_0x1d24ee(0x1a8)](_0x5e7c85);this['_passiveStateResults'][_0x5792f7]!==_0x25f9b1&&(_0x18c492=![],this[_0x1d24ee(0x2a2)][_0x5792f7]=_0x25f9b1);if(!_0x25f9b1)continue;_0x356840[_0x1d24ee(0x2a7)](_0x5e7c85);}if(_0x18c492)break;else{if(!this[_0x1d24ee(0x2b8)])this[_0x1d24ee(0x286)]();this[_0x1d24ee(0x17c)]();}}return _0x356840;},Game_BattlerBase['prototype'][_0x6967b(0x1a8)]=function(_0x87f6ff){const _0x4f78ad=_0x6967b;if(!this[_0x4f78ad(0x2d4)](_0x87f6ff))return![];if(!this[_0x4f78ad(0x25f)](_0x87f6ff))return![];if(!this[_0x4f78ad(0x1c8)](_0x87f6ff))return![];if(!this['meetsPassiveStateGlobalConditionJS'](_0x87f6ff))return![];return!![];},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x2d4)]=function(_0x1f5c4d){return!![];},Game_Actor[_0x6967b(0x20d)][_0x6967b(0x2d4)]=function(_0x1b0463){const _0x2bbaa4=_0x6967b,_0x3d9261=_0x1b0463['note'];if(_0x3d9261[_0x2bbaa4(0x27a)](/<PASSIVE CONDITION[ ](?:CLASS|CLASSES):[ ](.*)>/i)){const _0x210624=String(RegExp['$1'])[_0x2bbaa4(0x1a3)](',')[_0x2bbaa4(0x1b7)](_0x492719=>_0x492719['trim']()),_0x45602a=VisuMZ[_0x2bbaa4(0x2cc)][_0x2bbaa4(0x274)](_0x210624);return _0x45602a[_0x2bbaa4(0x289)](this[_0x2bbaa4(0x12e)]());}if(_0x3d9261['match'](/<PASSIVE CONDITION[ ](?:MULTICLASS|MULTICLASSES):[ ](.*)>/i)){const _0x270614=String(RegExp['$1'])[_0x2bbaa4(0x1a3)](',')[_0x2bbaa4(0x1b7)](_0x21684e=>_0x21684e[_0x2bbaa4(0x190)]()),_0x5d51a8=VisuMZ[_0x2bbaa4(0x2cc)][_0x2bbaa4(0x274)](_0x270614);let _0x19acbe=[this['currentClass']()];return Imported[_0x2bbaa4(0x145)]&&this[_0x2bbaa4(0x293)]&&(_0x19acbe=this[_0x2bbaa4(0x293)]()),_0x5d51a8[_0x2bbaa4(0x2e4)](_0x437a46=>_0x19acbe['includes'](_0x437a46))[_0x2bbaa4(0x209)]>0x0;}return Game_BattlerBase[_0x2bbaa4(0x20d)]['meetsPassiveStateConditionClasses'][_0x2bbaa4(0x106)](this,_0x1b0463);},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x274)]=function(_0x5ee80b){const _0x8d607b=_0x6967b,_0x1ca82d=[];for(let _0x170b1e of _0x5ee80b){_0x170b1e=(String(_0x170b1e)||'')[_0x8d607b(0x190)]();const _0x534cff=/^\d+$/[_0x8d607b(0x18e)](_0x170b1e);_0x534cff?_0x1ca82d['push'](Number(_0x170b1e)):_0x1ca82d[_0x8d607b(0x2a7)](DataManager[_0x8d607b(0x268)](_0x170b1e));}return _0x1ca82d[_0x8d607b(0x1b7)](_0x4b6344=>$dataClasses[Number(_0x4b6344)])[_0x8d607b(0x164)](null);},Game_BattlerBase[_0x6967b(0x20d)]['meetsPassiveStateConditionSwitches']=function(_0x1caea0){const _0xa8367d=_0x6967b,_0x12f377=_0x1caea0[_0xa8367d(0x12d)];if(_0x12f377['match'](/<PASSIVE CONDITION[ ](?:SWITCH|SWITCHES)[ ]ON:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x521cfa=JSON['parse']('['+RegExp['$1'][_0xa8367d(0x27a)](/\d+/g)+']');for(const _0x222b75 of _0x521cfa){if(!$gameSwitches[_0xa8367d(0x1c2)](_0x222b75))return![];}return!![];}if(_0x12f377['match'](/<PASSIVE CONDITION ALL[ ](?:SWITCH|SWITCHES)[ ]ON:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x13b5f9=JSON[_0xa8367d(0x138)]('['+RegExp['$1'][_0xa8367d(0x27a)](/\d+/g)+']');for(const _0x5a531a of _0x13b5f9){if(!$gameSwitches[_0xa8367d(0x1c2)](_0x5a531a))return![];}return!![];}if(_0x12f377[_0xa8367d(0x27a)](/<PASSIVE CONDITION ANY[ ](?:SWITCH|SWITCHES)[ ]ON:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4b001d=JSON[_0xa8367d(0x138)]('['+RegExp['$1'][_0xa8367d(0x27a)](/\d+/g)+']');for(const _0x38c143 of _0x4b001d){if($gameSwitches[_0xa8367d(0x1c2)](_0x38c143))return!![];}return![];}if(_0x12f377['match'](/<PASSIVE CONDITION[ ](?:SWITCH|SWITCHES)[ ]OFF:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x441214=JSON[_0xa8367d(0x138)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x2630fc of _0x441214){if(!$gameSwitches[_0xa8367d(0x1c2)](_0x2630fc))return!![];}return![];}if(_0x12f377[_0xa8367d(0x27a)](/<PASSIVE CONDITION ALL[ ](?:SWITCH|SWITCHES)[ ]OFF:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2899e1=JSON[_0xa8367d(0x138)]('['+RegExp['$1'][_0xa8367d(0x27a)](/\d+/g)+']');for(const _0xb26b75 of _0x2899e1){if(!$gameSwitches[_0xa8367d(0x1c2)](_0xb26b75))return!![];}return![];}if(_0x12f377[_0xa8367d(0x27a)](/<PASSIVE CONDITION ANY[ ](?:SWITCH|SWITCHES)[ ]OFF:[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4e5932=JSON[_0xa8367d(0x138)]('['+RegExp['$1'][_0xa8367d(0x27a)](/\d+/g)+']');for(const _0x228b10 of _0x4e5932){if($gameSwitches['value'](_0x228b10))return![];}return!![];}return!![];},Game_BattlerBase['prototype'][_0x6967b(0x1c8)]=function(_0x1d9dc5){const _0x59de3a=_0x6967b,_0x9bb73a=VisuMZ['SkillsStatesCore']['statePassiveConditionJS'];if(_0x9bb73a[_0x1d9dc5['id']]&&!_0x9bb73a[_0x1d9dc5['id']][_0x59de3a(0x106)](this,_0x1d9dc5))return![];return!![];},Game_BattlerBase['prototype'][_0x6967b(0x2da)]=function(_0x1e91f8){const _0x972c54=_0x6967b;return VisuMZ['SkillsStatesCore']['Settings'][_0x972c54(0x2cf)]['PassiveConditionJS'][_0x972c54(0x106)](this,_0x1e91f8);},Game_BattlerBase[_0x6967b(0x20d)]['passiveStates']=function(){const _0x1b874d=_0x6967b;if(this[_0x1b874d(0x2ea)](_0x1b874d(0x1dc)))return this['convertPassiveStates']();if(this[_0x1b874d(0xd4)])return[];return this[_0x1b874d(0xd4)]=!![],this['createPassiveStatesCache'](),this[_0x1b874d(0xd4)]=undefined,this[_0x1b874d(0xf8)]();},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x17c)]=function(){const _0x5c7049=_0x6967b;this[_0x5c7049(0xd4)]=!![],this[_0x5c7049(0x1db)]['passiveStates']=[],this['addPassiveStatesFromOtherPlugins'](),this['addPassiveStatesByNotetag'](),this[_0x5c7049(0x18b)](),this[_0x5c7049(0xd4)]=undefined;},Game_BattlerBase[_0x6967b(0x20d)]['addPassiveStatesFromOtherPlugins']=function(){const _0x39264c=_0x6967b;if(Imported[_0x39264c(0x2c1)])this[_0x39264c(0x292)]();},Game_BattlerBase['prototype'][_0x6967b(0x25b)]=function(){return[];},Game_BattlerBase[_0x6967b(0x20d)]['addPassiveStatesByNotetag']=function(){const _0xabcb17=_0x6967b,_0x491f98=this[_0xabcb17(0x25b)]();for(const _0x38009c of _0x491f98){if(!_0x38009c)continue;const _0x5beb75=_0x38009c[_0xabcb17(0x12d)]['match'](/<PASSIVE (?:STATE|STATES):[ ](.*)>/gi);if(_0x5beb75)for(const _0x55d852 of _0x5beb75){_0x55d852[_0xabcb17(0x27a)](/<PASSIVE (?:STATE|STATES):[ ](.*)>/i);const _0x4227cb=RegExp['$1'];if(_0x4227cb[_0xabcb17(0x27a)](/(\d+(?:\s*,\s*\d+)*)/i)){const _0xa4615d=JSON[_0xabcb17(0x138)]('['+RegExp['$1']['match'](/\d+/g)+']');this[_0xabcb17(0x1db)][_0xabcb17(0x1dc)]=this[_0xabcb17(0x1db)][_0xabcb17(0x1dc)][_0xabcb17(0x214)](_0xa4615d);}else{const _0x32407c=_0x4227cb[_0xabcb17(0x1a3)](',');for(const _0x225da5 of _0x32407c){const _0xa803b4=DataManager[_0xabcb17(0xb7)](_0x225da5);if(_0xa803b4)this[_0xabcb17(0x1db)]['passiveStates'][_0xabcb17(0x2a7)](_0xa803b4);}}}}},Game_BattlerBase['prototype']['addPassiveStatesByPluginParameters']=function(){const _0x485134=_0x6967b,_0x11b8ed=VisuMZ[_0x485134(0x2cc)]['Settings'][_0x485134(0x2cf)][_0x485134(0x1d1)];this[_0x485134(0x1db)][_0x485134(0x1dc)]=this[_0x485134(0x1db)][_0x485134(0x1dc)]['concat'](_0x11b8ed);},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x2f5)]=function(_0x460cae){const _0x34d178=_0x6967b;if(typeof _0x460cae!=='number')_0x460cae=_0x460cae['id'];return this[_0x34d178(0xf7)][_0x460cae]||0x0;},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x2be)]=function(_0x2e8d6c,_0x1c8879){const _0x261e31=_0x6967b;if(typeof _0x2e8d6c!==_0x261e31(0x11a))_0x2e8d6c=_0x2e8d6c['id'];if(this[_0x261e31(0x2d3)](_0x2e8d6c)){const _0x2bbf45=DataManager[_0x261e31(0x235)](_0x2e8d6c);this[_0x261e31(0xf7)][_0x2e8d6c]=_0x1c8879[_0x261e31(0x287)](0x0,_0x2bbf45);if(this['_stateTurns'][_0x2e8d6c]<=0x0)this[_0x261e31(0x1b8)](_0x2e8d6c);}},Game_BattlerBase['prototype'][_0x6967b(0x237)]=function(_0x2edf4a,_0x456a56){const _0x6dd516=_0x6967b;if(typeof _0x2edf4a!==_0x6dd516(0x11a))_0x2edf4a=_0x2edf4a['id'];this[_0x6dd516(0x2d3)](_0x2edf4a)&&(_0x456a56+=this[_0x6dd516(0x2f5)](_0x2edf4a),this['setStateTurns'](_0x2edf4a,_0x456a56));},VisuMZ[_0x6967b(0x2cc)]['Game_BattlerBase_eraseBuff']=Game_BattlerBase['prototype']['eraseBuff'],Game_BattlerBase[_0x6967b(0x20d)]['eraseBuff']=function(_0x59d42b){const _0x4d7b7f=_0x6967b,_0x2c28e6=this[_0x4d7b7f(0x2e8)][_0x59d42b];VisuMZ[_0x4d7b7f(0x2cc)]['Game_BattlerBase_eraseBuff'][_0x4d7b7f(0x106)](this,_0x59d42b);if(_0x2c28e6>0x0)this['onEraseBuff'](_0x59d42b);if(_0x2c28e6<0x0)this[_0x4d7b7f(0x277)](_0x59d42b);},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x14e)]=Game_BattlerBase['prototype'][_0x6967b(0x308)],Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x308)]=function(_0x3c5e6e){const _0x3340a7=_0x6967b;VisuMZ[_0x3340a7(0x2cc)][_0x3340a7(0x14e)][_0x3340a7(0x106)](this,_0x3c5e6e);if(!this[_0x3340a7(0x1a0)](_0x3c5e6e))this[_0x3340a7(0x100)](_0x3c5e6e);},VisuMZ[_0x6967b(0x2cc)]['Game_BattlerBase_decreaseBuff']=Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x15e)],Game_BattlerBase['prototype'][_0x6967b(0x15e)]=function(_0x35d3e7){const _0x1cc0f8=_0x6967b;VisuMZ['SkillsStatesCore'][_0x1cc0f8(0x2c9)][_0x1cc0f8(0x106)](this,_0x35d3e7);if(!this[_0x1cc0f8(0x1a0)](_0x35d3e7))this[_0x1cc0f8(0x100)](_0x35d3e7);},Game_BattlerBase[_0x6967b(0x20d)]['onEraseBuff']=function(_0x30b7f5){},Game_BattlerBase['prototype'][_0x6967b(0x277)]=function(_0x3c88b2){},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x2bc)]=function(_0x368ecb){const _0x484ae0=_0x6967b;return this[_0x484ae0(0x2e8)][_0x368ecb]===VisuMZ[_0x484ae0(0x2cc)]['Settings'][_0x484ae0(0x1f5)][_0x484ae0(0x15a)];},Game_BattlerBase[_0x6967b(0x20d)]['isMaxDebuffAffected']=function(_0x139cb4){const _0x5496d6=_0x6967b;return this['_buffs'][_0x139cb4]===-VisuMZ[_0x5496d6(0x2cc)][_0x5496d6(0xf5)][_0x5496d6(0x1f5)][_0x5496d6(0x2ca)];},VisuMZ[_0x6967b(0x2cc)]['Game_BattlerBase_buffIconIndex']=Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x125)],Game_BattlerBase['prototype'][_0x6967b(0x125)]=function(_0x310cb7,_0x46345b){const _0x3db24e=_0x6967b;return _0x310cb7=_0x310cb7[_0x3db24e(0x287)](-0x2,0x2),VisuMZ['SkillsStatesCore'][_0x3db24e(0x1ff)][_0x3db24e(0x106)](this,_0x310cb7,_0x46345b);},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0xea)]=function(_0x46e40f){const _0x18f37a=_0x6967b,_0x42568d=this[_0x18f37a(0x2e8)][_0x46e40f];return VisuMZ['SkillsStatesCore']['Settings']['Buffs'][_0x18f37a(0x26a)][_0x18f37a(0x106)](this,_0x46e40f,_0x42568d);},Game_BattlerBase[_0x6967b(0x20d)]['buffTurns']=function(_0x187d07){const _0x2b2aad=_0x6967b;return this[_0x2b2aad(0x2c5)][_0x187d07]||0x0;},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0xf6)]=function(_0x44d997){const _0x3db4f5=_0x6967b;return this[_0x3db4f5(0x1ec)](_0x44d997);},Game_BattlerBase['prototype'][_0x6967b(0x239)]=function(_0x24deae,_0x3f00fd){const _0x1a3916=_0x6967b;if(this[_0x1a3916(0xc5)](_0x24deae)){const _0x327c71=VisuMZ[_0x1a3916(0x2cc)][_0x1a3916(0xf5)][_0x1a3916(0x1f5)][_0x1a3916(0x1f7)];this[_0x1a3916(0x2c5)][_0x24deae]=_0x3f00fd[_0x1a3916(0x287)](0x0,_0x327c71);}},Game_BattlerBase['prototype']['addBuffTurns']=function(_0x554451,_0x36caaa){const _0x287902=_0x6967b;this[_0x287902(0xc5)](_0x554451)&&(_0x36caaa+=this[_0x287902(0x1ec)](stateId),this[_0x287902(0x2be)](_0x554451,_0x36caaa));},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0xdf)]=function(_0x5c13ca,_0x158b92){const _0x4e7ff0=_0x6967b;if(this[_0x4e7ff0(0x2ba)](_0x5c13ca)){const _0x13e1fc=VisuMZ[_0x4e7ff0(0x2cc)]['Settings'][_0x4e7ff0(0x1f5)]['MaxTurns'];this[_0x4e7ff0(0x2c5)][_0x5c13ca]=_0x158b92['clamp'](0x0,_0x13e1fc);}},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x205)]=function(_0x2ab34f,_0x19f090){const _0x2a7b78=_0x6967b;this['isDebuffAffected'](_0x2ab34f)&&(_0x19f090+=this[_0x2a7b78(0x1ec)](stateId),this['setStateTurns'](_0x2ab34f,_0x19f090));},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0xe6)]=function(_0x3d92b9){const _0x5ef3c1=_0x6967b;if(typeof _0x3d92b9!=='number')_0x3d92b9=_0x3d92b9['id'];return this[_0x5ef3c1(0x1b2)]=this[_0x5ef3c1(0x1b2)]||{},this[_0x5ef3c1(0x1b2)][_0x3d92b9]=this[_0x5ef3c1(0x1b2)][_0x3d92b9]||{},this['_stateData'][_0x3d92b9];},Game_BattlerBase[_0x6967b(0x20d)]['getStateData']=function(_0x50aca7,_0x12ff32){const _0x322224=_0x6967b;if(typeof _0x50aca7!==_0x322224(0x11a))_0x50aca7=_0x50aca7['id'];const _0x6ddc90=this[_0x322224(0xe6)](_0x50aca7);return _0x6ddc90[_0x12ff32];},Game_BattlerBase['prototype']['setStateData']=function(_0x51d6e7,_0x55bcc8,_0x252909){const _0x463de9=_0x6967b;if(typeof _0x51d6e7!==_0x463de9(0x11a))_0x51d6e7=_0x51d6e7['id'];const _0x806bad=this[_0x463de9(0xe6)](_0x51d6e7);_0x806bad[_0x55bcc8]=_0x252909;},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x298)]=function(_0x400901){const _0x5dbbf9=_0x6967b;if(typeof _0x400901!=='number')_0x400901=_0x400901['id'];this[_0x5dbbf9(0x1b2)]=this[_0x5dbbf9(0x1b2)]||{},this[_0x5dbbf9(0x1b2)][_0x400901]={};},Game_BattlerBase['prototype'][_0x6967b(0x1ea)]=function(_0x2b4cab){const _0x55cb86=_0x6967b;if(typeof _0x2b4cab!=='number')_0x2b4cab=_0x2b4cab['id'];return this[_0x55cb86(0x160)]=this['_stateDisplay']||{},this[_0x55cb86(0x160)][_0x2b4cab]===undefined&&(this[_0x55cb86(0x160)][_0x2b4cab]=''),this[_0x55cb86(0x160)][_0x2b4cab];},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x2ec)]=function(_0x5611e8,_0x2cdc2e){const _0x1c7990=_0x6967b;if(typeof _0x5611e8!==_0x1c7990(0x11a))_0x5611e8=_0x5611e8['id'];this[_0x1c7990(0x160)]=this['_stateDisplay']||{},this[_0x1c7990(0x160)][_0x5611e8]=_0x2cdc2e;},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x13a)]=function(_0x1fb7e2){const _0x190ac3=_0x6967b;if(typeof _0x1fb7e2!=='number')_0x1fb7e2=_0x1fb7e2['id'];this['_stateDisplay']=this[_0x190ac3(0x160)]||{},this[_0x190ac3(0x160)][_0x1fb7e2]='';},Game_BattlerBase[_0x6967b(0x20d)]['getStateOrigin']=function(_0x25f8a9){const _0x29f592=_0x6967b;if(typeof _0x25f8a9!==_0x29f592(0x11a))_0x25f8a9=_0x25f8a9['id'];this['_stateOrigin']=this[_0x29f592(0x259)]||{},this[_0x29f592(0x259)][_0x25f8a9]=this[_0x29f592(0x259)][_0x25f8a9]||_0x29f592(0x228);const _0x442eb4=this['_stateOrigin'][_0x25f8a9];return this[_0x29f592(0x180)](_0x442eb4);},Game_BattlerBase['prototype']['setStateOrigin']=function(_0x45f478,_0x34e85a){const _0x4aa0a8=_0x6967b;this[_0x4aa0a8(0x259)]=this[_0x4aa0a8(0x259)]||{};const _0x2f6630=_0x34e85a?this[_0x4aa0a8(0x29a)](_0x34e85a):this[_0x4aa0a8(0xe2)]();this[_0x4aa0a8(0x259)][_0x45f478]=_0x2f6630;},Game_BattlerBase['prototype'][_0x6967b(0x29d)]=function(_0x550e1b){const _0x1e0264=_0x6967b;this[_0x1e0264(0x259)]=this['_stateOrigin']||{},delete this[_0x1e0264(0x259)][_0x550e1b];},Game_BattlerBase['prototype']['getCurrentStateOriginKey']=function(){const _0x3cfc2a=_0x6967b,_0xfd2211=this['getCurrentStateActiveUser']();return this[_0x3cfc2a(0x29a)](_0xfd2211);},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x2fc)]=function(){const _0x59eb47=_0x6967b;if($gameParty[_0x59eb47(0xdb)]()){if(BattleManager[_0x59eb47(0x1da)])return BattleManager[_0x59eb47(0x1da)];else{if(BattleManager[_0x59eb47(0x131)])return BattleManager[_0x59eb47(0x131)];}}else{const _0x30b3f8=SceneManager[_0x59eb47(0x1ca)];if(![Scene_Map,Scene_Item]['includes'](_0x30b3f8['constructor']))return $gameParty[_0x59eb47(0xe7)]();}return this;},Game_BattlerBase['prototype']['convertTargetToStateOriginKey']=function(_0x346319){const _0x2cd165=_0x6967b;if(!_0x346319)return _0x2cd165(0x228);if(_0x346319['isActor']())return _0x2cd165(0x22c)[_0x2cd165(0x1c9)](_0x346319[_0x2cd165(0x113)]());else{const _0x1f1809=_0x2cd165(0x1d3)[_0x2cd165(0x1c9)](_0x346319[_0x2cd165(0xc4)]()),_0x521b8c='<member-%1>'[_0x2cd165(0x1c9)](_0x346319['index']()),_0x5039c0=_0x2cd165(0x2af)[_0x2cd165(0x1c9)]($gameTroop[_0x2cd165(0x162)]());return'%1\x20%2\x20%3'[_0x2cd165(0x1c9)](_0x1f1809,_0x521b8c,_0x5039c0);}return _0x2cd165(0x228);},Game_BattlerBase['prototype']['getStateOriginByKey']=function(_0x2b71b3){const _0x1debba=_0x6967b;if(_0x2b71b3===_0x1debba(0x228))return this;else{if(_0x2b71b3['match'](/<actor-(\d+)>/i))return $gameActors[_0x1debba(0x1f0)](Number(RegExp['$1']));else{if($gameParty[_0x1debba(0xdb)]()&&_0x2b71b3[_0x1debba(0x27a)](/<troop-(\d+)>/i)){const _0x358319=Number(RegExp['$1']);if(_0x358319===$gameTroop[_0x1debba(0x162)]()){if(_0x2b71b3[_0x1debba(0x27a)](/<member-(\d+)>/i))return $gameTroop[_0x1debba(0x302)]()[Number(RegExp['$1'])];}}if(_0x2b71b3[_0x1debba(0x27a)](/<enemy-(\d+)>/i))return new Game_Enemy(Number(RegExp['$1']),-0x1f4,-0x1f4);}}return this;},VisuMZ[_0x6967b(0x2cc)]['Game_Battler_addState']=Game_Battler[_0x6967b(0x20d)][_0x6967b(0x1c5)],Game_Battler[_0x6967b(0x20d)][_0x6967b(0x1c5)]=function(_0x251a3d){const _0x4f9b68=_0x6967b,_0x1a91e8=this[_0x4f9b68(0x276)](_0x251a3d);VisuMZ[_0x4f9b68(0x2cc)][_0x4f9b68(0x1f8)][_0x4f9b68(0x106)](this,_0x251a3d);if(_0x1a91e8&&this['hasState']($dataStates[_0x251a3d])){this[_0x4f9b68(0x2f8)](_0x251a3d);;}},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x147)]=Game_Battler['prototype']['isStateAddable'],Game_Battler[_0x6967b(0x20d)][_0x6967b(0x276)]=function(_0x12c2da){const _0x18e2f1=_0x6967b,_0x3e0274=$dataStates[_0x12c2da];if(_0x3e0274&&_0x3e0274[_0x18e2f1(0x12d)][_0x18e2f1(0x27a)](/<NO DEATH CLEAR>/i))return!this['isStateResist'](_0x12c2da)&&!this[_0x18e2f1(0x1cf)](_0x12c2da)&&!this[_0x18e2f1(0xb9)][_0x18e2f1(0x285)](_0x12c2da);return VisuMZ[_0x18e2f1(0x2cc)][_0x18e2f1(0x147)][_0x18e2f1(0x106)](this,_0x12c2da);},Game_Battler[_0x6967b(0x20d)]['onAddState']=function(_0x2d0510){const _0x459eaf=_0x6967b;this['setStateOrigin'](_0x2d0510),this[_0x459eaf(0x151)](_0x2d0510),this[_0x459eaf(0x1bd)](_0x2d0510),this[_0x459eaf(0x229)](_0x2d0510),this[_0x459eaf(0x22f)](_0x2d0510);},Game_Battler[_0x6967b(0x20d)][_0x6967b(0x114)]=function(_0x287010){const _0x19b5c5=_0x6967b;this['onEraseStateCustomJS'](_0x287010),this[_0x19b5c5(0x1e8)](_0x287010),Game_BattlerBase[_0x19b5c5(0x20d)]['onRemoveState'][_0x19b5c5(0x106)](this,_0x287010);},Game_Battler[_0x6967b(0x20d)][_0x6967b(0x2a0)]=function(_0x5c913f){const _0x14a328=_0x6967b;for(const _0x2dc997 of this['states']()){this[_0x14a328(0x20a)](_0x2dc997['id'])&&_0x2dc997[_0x14a328(0x149)]===_0x5c913f&&(this[_0x14a328(0x1b8)](_0x2dc997['id']),this[_0x14a328(0x272)](_0x2dc997['id']),this['onExpireStateGlobalJS'](_0x2dc997['id']));}},Game_Battler[_0x6967b(0x20d)][_0x6967b(0x272)]=function(_0x2147f9){this['onExpireStateCustomJS'](_0x2147f9);},Game_Battler[_0x6967b(0x20d)]['onAddStateCustomJS']=function(_0x3d28ac){const _0x54110e=_0x6967b;if(this[_0x54110e(0x1c3)]||this[_0x54110e(0x165)])return;const _0x35dcd5=VisuMZ['SkillsStatesCore'][_0x54110e(0x1ac)];if(_0x35dcd5[_0x3d28ac])_0x35dcd5[_0x3d28ac][_0x54110e(0x106)](this,_0x3d28ac);},Game_Battler['prototype'][_0x6967b(0x225)]=function(_0x180116){const _0x52c6b7=_0x6967b;if(this['_tempActor']||this[_0x52c6b7(0x165)])return;const _0x2df9eb=VisuMZ[_0x52c6b7(0x2cc)][_0x52c6b7(0xf2)];if(_0x2df9eb[_0x180116])_0x2df9eb[_0x180116][_0x52c6b7(0x106)](this,_0x180116);},Game_Battler[_0x6967b(0x20d)][_0x6967b(0x233)]=function(_0x9be5e7){const _0x5e1938=_0x6967b;if(this[_0x5e1938(0x1c3)]||this[_0x5e1938(0x165)])return;const _0x1c58bc=VisuMZ[_0x5e1938(0x2cc)]['stateExpireJS'];if(_0x1c58bc[_0x9be5e7])_0x1c58bc[_0x9be5e7]['call'](this,_0x9be5e7);},Game_Battler['prototype'][_0x6967b(0x22f)]=function(_0x2a1dc3){const _0x153cef=_0x6967b;if(this['_tempActor']||this[_0x153cef(0x165)])return;try{VisuMZ[_0x153cef(0x2cc)][_0x153cef(0xf5)][_0x153cef(0x245)][_0x153cef(0xfa)][_0x153cef(0x106)](this,_0x2a1dc3);}catch(_0x404095){if($gameTemp[_0x153cef(0x1ef)]())console[_0x153cef(0x24a)](_0x404095);}},Game_Battler[_0x6967b(0x20d)][_0x6967b(0x1e8)]=function(_0x488a8b){const _0x5ce2cb=_0x6967b;if(this[_0x5ce2cb(0x1c3)]||this[_0x5ce2cb(0x165)])return;try{VisuMZ[_0x5ce2cb(0x2cc)][_0x5ce2cb(0xf5)][_0x5ce2cb(0x245)]['onEraseStateJS']['call'](this,_0x488a8b);}catch(_0x5382eb){if($gameTemp[_0x5ce2cb(0x1ef)]())console[_0x5ce2cb(0x24a)](_0x5382eb);}},Game_Battler[_0x6967b(0x20d)][_0x6967b(0x203)]=function(_0x330586){const _0x20987e=_0x6967b;if(this[_0x20987e(0x1c3)]||this['_tempBattler'])return;try{VisuMZ[_0x20987e(0x2cc)]['Settings'][_0x20987e(0x245)][_0x20987e(0x112)]['call'](this,_0x330586);}catch(_0x14bda8){if($gameTemp['isPlaytest']())console[_0x20987e(0x24a)](_0x14bda8);}},Game_Battler[_0x6967b(0x20d)]['statesByCategory']=function(_0x1b6483){const _0x443153=_0x6967b;return _0x1b6483=_0x1b6483[_0x443153(0x251)]()['trim'](),this['states']()['filter'](_0x11bae8=>_0x11bae8[_0x443153(0x243)][_0x443153(0x289)](_0x1b6483));},Game_Battler[_0x6967b(0x20d)][_0x6967b(0x265)]=function(_0x14962b,_0x25be12){const _0xfa4e4f=_0x6967b;_0x14962b=_0x14962b['toUpperCase']()[_0xfa4e4f(0x190)](),_0x25be12=_0x25be12||0x0;const _0x4a98d5=this[_0xfa4e4f(0x18a)](_0x14962b),_0x14b36c=[];for(const _0x166fcd of _0x4a98d5){if(!_0x166fcd)continue;if(_0x25be12<=0x0)break;_0x14b36c[_0xfa4e4f(0x2a7)](_0x166fcd['id']),this[_0xfa4e4f(0xb9)][_0xfa4e4f(0x1e7)]=!![],_0x25be12--;}while(_0x14b36c[_0xfa4e4f(0x209)]>0x0){this[_0xfa4e4f(0x1b8)](_0x14b36c['shift']());}},Game_Battler[_0x6967b(0x20d)]['removeStatesByCategoryAll']=function(_0x2b4b49,_0x2c2609){const _0x230990=_0x6967b;_0x2b4b49=_0x2b4b49[_0x230990(0x251)]()[_0x230990(0x190)](),_0x2c2609=_0x2c2609||[];const _0x4ab07b=this[_0x230990(0x18a)](_0x2b4b49),_0x23444c=[];for(const _0x2e05f7 of _0x4ab07b){if(!_0x2e05f7)continue;if(_0x2c2609[_0x230990(0x289)](_0x2e05f7))continue;_0x23444c[_0x230990(0x2a7)](_0x2e05f7['id']),this[_0x230990(0xb9)]['success']=!![];}while(_0x23444c[_0x230990(0x209)]>0x0){this[_0x230990(0x1b8)](_0x23444c[_0x230990(0x154)]());}},Game_Battler[_0x6967b(0x20d)][_0x6967b(0x1fa)]=function(_0x2ae1f2){return this['totalStateCategoryAffected'](_0x2ae1f2)>0x0;},Game_Battler['prototype'][_0x6967b(0x103)]=function(_0xf841e8){return this['totalStateCategory'](_0xf841e8)>0x0;},Game_Battler[_0x6967b(0x20d)]['totalStateCategoryAffected']=function(_0x760dc9){const _0x49ee82=_0x6967b,_0x76650a=this[_0x49ee82(0x18a)](_0x760dc9)[_0x49ee82(0x2e4)](_0x158999=>this[_0x49ee82(0x2d3)](_0x158999['id']));return _0x76650a['length'];},Game_Battler[_0x6967b(0x20d)][_0x6967b(0x28a)]=function(_0x15fc0a){const _0x90f366=_0x6967b,_0x5c3223=this[_0x90f366(0x18a)](_0x15fc0a);return _0x5c3223[_0x90f366(0x209)];},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0xcd)]=Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x195)],Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x195)]=function(_0x54d1b2){const _0x2eb62e=_0x6967b,_0x1dc4cb=$dataStates[_0x54d1b2];if(_0x1dc4cb&&_0x1dc4cb['categories']['length']>0x0)for(const _0x1348bf of _0x1dc4cb[_0x2eb62e(0x243)]){if(this['isStateCategoryResisted'](_0x1348bf))return!![];}return VisuMZ[_0x2eb62e(0x2cc)][_0x2eb62e(0xcd)][_0x2eb62e(0x106)](this,_0x54d1b2);},Game_BattlerBase['prototype'][_0x6967b(0x2bf)]=function(_0x3195d1){const _0x37d58c=_0x6967b;let _0x51e101=_0x37d58c(0x19e);if(this['checkCacheKey'](_0x51e101))return this[_0x37d58c(0x1db)][_0x51e101][_0x37d58c(0x289)](_0x3195d1);return this[_0x37d58c(0x1db)][_0x51e101]=this[_0x37d58c(0x1f4)](),this[_0x37d58c(0x1db)][_0x51e101][_0x37d58c(0x289)](_0x3195d1);},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x1f4)]=function(){const _0x1c3c30=_0x6967b,_0x54a8de=/<RESIST STATE (?:CATEGORY|CATEGORIES):[ ](.*)>/gi,_0x50008e=/<RESIST STATE (?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/RESIST STATE (?:CATEGORY|CATEGORIES)>/i;let _0x13eaeb=[];for(const _0x5691b7 of this[_0x1c3c30(0x304)]()){if(!_0x5691b7)continue;const _0x386704=_0x5691b7['note'],_0x3f296b=_0x386704[_0x1c3c30(0x27a)](_0x54a8de);if(_0x3f296b)for(const _0x200e94 of _0x3f296b){_0x200e94[_0x1c3c30(0x27a)](_0x54a8de);const _0x11e045=String(RegExp['$1'])['split'](',')[_0x1c3c30(0x1b7)](_0x49b10e=>String(_0x49b10e)[_0x1c3c30(0x251)]()[_0x1c3c30(0x190)]());_0x13eaeb=_0x13eaeb[_0x1c3c30(0x214)](_0x11e045);}if(_0x386704['match'](_0x50008e)){const _0x53f9d3=String(RegExp['$1'])[_0x1c3c30(0x1a3)](/[\r\n]+/)[_0x1c3c30(0x1b7)](_0x50d6f9=>String(_0x50d6f9)[_0x1c3c30(0x251)]()['trim']());_0x13eaeb=_0x13eaeb[_0x1c3c30(0x214)](_0x53f9d3);}}return _0x13eaeb;},Game_BattlerBase['prototype'][_0x6967b(0x151)]=function(_0x261d6b){const _0x5d2e6f=_0x6967b,_0x42b380=$dataStates[_0x261d6b];if(!_0x42b380)return;const _0x472729=_0x42b380[_0x5d2e6f(0x12d)]||'',_0x5f320d=_0x472729[_0x5d2e6f(0x27a)](/<REMOVE OTHER (.*) STATES>/gi);if(_0x5f320d){const _0x5d468c=[_0x42b380];for(const _0x42a550 of _0x5f320d){_0x42a550['match'](/<REMOVE OTHER (.*) STATES>/i);const _0x1dec43=String(RegExp['$1']);this[_0x5d2e6f(0xed)](_0x1dec43,_0x5d468c);}}},VisuMZ['SkillsStatesCore'][_0x6967b(0xfc)]=Game_Battler[_0x6967b(0x20d)][_0x6967b(0x2fb)],Game_Battler[_0x6967b(0x20d)][_0x6967b(0x2fb)]=function(_0x9cd35c,_0x28ee38){const _0x391053=_0x6967b;VisuMZ[_0x391053(0x2cc)][_0x391053(0xfc)]['call'](this,_0x9cd35c,_0x28ee38),this[_0x391053(0xc5)](_0x9cd35c)&&this[_0x391053(0x23c)](_0x9cd35c,_0x28ee38);},Game_Battler[_0x6967b(0x20d)][_0x6967b(0x10a)]=function(_0x499c07){},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x2b0)]=Game_Battler[_0x6967b(0x20d)][_0x6967b(0x24b)],Game_Battler[_0x6967b(0x20d)][_0x6967b(0x24b)]=function(_0x53ca2f,_0x2e8a64){const _0x19ed3b=_0x6967b;VisuMZ[_0x19ed3b(0x2cc)]['Game_Battler_addDebuff']['call'](this,_0x53ca2f,_0x2e8a64),this[_0x19ed3b(0x2ba)](_0x53ca2f)&&this[_0x19ed3b(0xbb)](_0x53ca2f,_0x2e8a64);},Game_Battler[_0x6967b(0x20d)][_0x6967b(0x204)]=function(){const _0xd3496a=_0x6967b;for(let _0x2f6e53=0x0;_0x2f6e53<this['buffLength']();_0x2f6e53++){if(this[_0xd3496a(0x2f1)](_0x2f6e53)){const _0x518c60=this[_0xd3496a(0x2e8)][_0x2f6e53];this[_0xd3496a(0x290)](_0x2f6e53);if(_0x518c60>0x0)this[_0xd3496a(0x134)](_0x2f6e53);if(_0x518c60<0x0)this['onExpireDebuff'](_0x2f6e53);}}},Game_Battler['prototype']['onAddBuff']=function(_0x3be151,_0x23cf16){const _0x281445=_0x6967b;this[_0x281445(0xeb)](_0x3be151,_0x23cf16);},Game_Battler['prototype'][_0x6967b(0xbb)]=function(_0x50d9e9,_0x4fa3a4){const _0x178454=_0x6967b;this[_0x178454(0x236)](_0x50d9e9,_0x4fa3a4);},Game_Battler[_0x6967b(0x20d)]['onEraseBuff']=function(_0x54d30e){const _0x2cdb2b=_0x6967b;Game_BattlerBase[_0x2cdb2b(0x20d)][_0x2cdb2b(0xfd)][_0x2cdb2b(0x106)](this,_0x54d30e),this[_0x2cdb2b(0x19a)](_0x54d30e);},Game_Battler[_0x6967b(0x20d)][_0x6967b(0x277)]=function(_0x7ad281){const _0x1141dc=_0x6967b;Game_BattlerBase[_0x1141dc(0x20d)][_0x1141dc(0x277)]['call'](this,_0x7ad281),this[_0x1141dc(0x181)](_0x7ad281);},Game_Battler[_0x6967b(0x20d)]['onExpireBuff']=function(_0x131e42){const _0x2c8a46=_0x6967b;this[_0x2c8a46(0x183)](_0x131e42);},Game_Battler[_0x6967b(0x20d)][_0x6967b(0x2aa)]=function(_0x3860d0){const _0x1a2e11=_0x6967b;this[_0x1a2e11(0x1e9)](_0x3860d0);},Game_Battler[_0x6967b(0x20d)][_0x6967b(0xeb)]=function(_0x1dd492,_0x532cfd){const _0x4f05cf=_0x6967b;VisuMZ[_0x4f05cf(0x2cc)][_0x4f05cf(0xf5)][_0x4f05cf(0x1f5)][_0x4f05cf(0xef)][_0x4f05cf(0x106)](this,_0x1dd492,_0x532cfd);},Game_Battler[_0x6967b(0x20d)][_0x6967b(0x236)]=function(_0x4af354,_0x6669a){const _0xc09610=_0x6967b;VisuMZ[_0xc09610(0x2cc)][_0xc09610(0xf5)][_0xc09610(0x1f5)][_0xc09610(0x119)][_0xc09610(0x106)](this,_0x4af354,_0x6669a);},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x19a)]=function(_0x4a790f){const _0x4afa06=_0x6967b;VisuMZ[_0x4afa06(0x2cc)]['Settings'][_0x4afa06(0x1f5)][_0x4afa06(0x17f)][_0x4afa06(0x106)](this,_0x4a790f);},Game_BattlerBase[_0x6967b(0x20d)][_0x6967b(0x181)]=function(_0xa2fa14){const _0x13523a=_0x6967b;VisuMZ[_0x13523a(0x2cc)]['Settings'][_0x13523a(0x1f5)]['onEraseDebuffJS'][_0x13523a(0x106)](this,_0xa2fa14);},Game_Battler[_0x6967b(0x20d)][_0x6967b(0x183)]=function(_0x20d668){const _0x3a4101=_0x6967b;VisuMZ[_0x3a4101(0x2cc)][_0x3a4101(0xf5)][_0x3a4101(0x1f5)]['onExpireBuffJS'][_0x3a4101(0x106)](this,_0x20d668);},Game_Battler[_0x6967b(0x20d)][_0x6967b(0x1e9)]=function(_0x2afd70){const _0x181039=_0x6967b;VisuMZ[_0x181039(0x2cc)]['Settings'][_0x181039(0x1f5)][_0x181039(0x127)][_0x181039(0x106)](this,_0x2afd70);},Game_Battler[_0x6967b(0x20d)][_0x6967b(0x1bd)]=function(_0x11b300){const _0x4faa80=_0x6967b,_0x53f507=VisuMZ[_0x4faa80(0x2cc)],_0x339257=[_0x4faa80(0x2b2),_0x4faa80(0x16d),'stateMpSlipDamageJS',_0x4faa80(0x1a5),_0x4faa80(0x179),'stateTpSlipHealJS'];for(const _0x2cea69 of _0x339257){_0x53f507[_0x2cea69][_0x11b300]&&_0x53f507[_0x2cea69][_0x11b300][_0x4faa80(0x106)](this,_0x11b300);}},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x101)]=Game_Battler[_0x6967b(0x20d)][_0x6967b(0x1d9)],Game_Battler[_0x6967b(0x20d)][_0x6967b(0x1d9)]=function(){const _0x4eb3af=_0x6967b;this['recalculateSlipDamageJS'](),VisuMZ[_0x4eb3af(0x2cc)][_0x4eb3af(0x101)]['call'](this),this[_0x4eb3af(0x269)](),this['regenerateAllSkillsStatesCore']();},Game_Battler[_0x6967b(0x20d)]['setPassiveStateSlipDamageJS']=function(){const _0x356cf0=_0x6967b;for(const _0xa9862f of this[_0x356cf0(0x1dc)]()){if(!_0xa9862f)continue;this['onAddStateMakeCustomSlipValues'](_0xa9862f['id']);}},Game_Battler['prototype'][_0x6967b(0x176)]=function(){const _0x2108eb=_0x6967b;for(const _0x37e7d3 of this['states']()){if(!_0x37e7d3)continue;_0x37e7d3[_0x2108eb(0x12d)][_0x2108eb(0x27a)](/<JS SLIP REFRESH>/i)&&this[_0x2108eb(0x1bd)](_0x37e7d3['id']);}},Game_Battler['prototype'][_0x6967b(0x280)]=function(){const _0x1facfd=_0x6967b;if(!this[_0x1facfd(0x16c)]())return;const _0x1593bf=this[_0x1facfd(0x1d5)]();for(const _0x598354 of _0x1593bf){if(!_0x598354)continue;this[_0x1facfd(0xc9)](_0x598354);}},Game_Battler['prototype']['onRegenerateCustomStateDamageOverTime']=function(_0x7f1be3){const _0x2e16af=_0x6967b,_0x29c705=this['getStateData'](_0x7f1be3['id'],_0x2e16af(0x234))||0x0,_0x40818d=-this[_0x2e16af(0x10b)](),_0x166bfe=Math[_0x2e16af(0x118)](_0x29c705,_0x40818d);if(_0x166bfe!==0x0){const _0x5a33cd=this['_result'][_0x2e16af(0x238)]||0x0;this[_0x2e16af(0x26d)](_0x166bfe),this[_0x2e16af(0xb9)]['hpDamage']+=_0x5a33cd;}const _0x3df569=this[_0x2e16af(0x202)](_0x7f1be3['id'],_0x2e16af(0x10f))||0x0;if(_0x3df569!==0x0){const _0x604024=this['_result']['mpDamage']||0x0;this[_0x2e16af(0x26e)](_0x3df569),this[_0x2e16af(0xb9)]['mpDamage']+=_0x604024;}const _0x174724=this['getStateData'](_0x7f1be3['id'],_0x2e16af(0x1b3))||0x0;_0x174724!==0x0&&this[_0x2e16af(0xdc)](_0x174724);},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x1df)]=Game_Actor[_0x6967b(0x20d)][_0x6967b(0x128)],Game_Actor[_0x6967b(0x20d)][_0x6967b(0x128)]=function(){const _0x1ca8a4=_0x6967b,_0x537c28=VisuMZ['SkillsStatesCore'][_0x1ca8a4(0x1df)][_0x1ca8a4(0x106)](this),_0x49b561=VisuMZ[_0x1ca8a4(0x2cc)][_0x1ca8a4(0xf5)][_0x1ca8a4(0x24c)];let _0xf8c6ec=_0x49b561[_0x1ca8a4(0x296)];return $gameParty[_0x1ca8a4(0xdb)]()&&(_0xf8c6ec=_0xf8c6ec[_0x1ca8a4(0x214)](_0x49b561['BattleHiddenSkillTypes'])),_0x537c28['filter'](_0x3fc5b3=>!_0xf8c6ec[_0x1ca8a4(0x289)](_0x3fc5b3));},Game_Actor[_0x6967b(0x20d)][_0x6967b(0x24d)]=function(){const _0x569536=_0x6967b;return this[_0x569536(0x13e)]()['filter'](_0x83384e=>this[_0x569536(0x2de)](_0x83384e));},Game_Actor[_0x6967b(0x20d)][_0x6967b(0x2de)]=function(_0x48b79e){const _0x4f6508=_0x6967b;if(!this[_0x4f6508(0x2f3)](_0x48b79e))return![];if(!_0x48b79e)return![];if(!this[_0x4f6508(0x14b)](_0x48b79e))return![];if(this[_0x4f6508(0x1c7)](_0x48b79e))return![];return!![];},Game_Actor[_0x6967b(0x20d)]['isSkillTypeMatchForUse']=function(_0x58b0a5){const _0x19dfb0=_0x6967b,_0x2e09e0=this[_0x19dfb0(0x128)](),_0x1f9e0f=DataManager[_0x19dfb0(0x1de)](_0x58b0a5),_0x6c688f=_0x2e09e0['filter'](_0x1f69b1=>_0x1f9e0f[_0x19dfb0(0x289)](_0x1f69b1));return _0x6c688f[_0x19dfb0(0x209)]>0x0;},Game_Actor['prototype']['isSkillHidden']=function(_0x57b371){const _0x3e1377=_0x6967b;if(!VisuMZ[_0x3e1377(0x2cc)][_0x3e1377(0x2d1)](this,_0x57b371))return!![];if(!VisuMZ[_0x3e1377(0x2cc)]['CheckVisibleSwitchNotetags'](this,_0x57b371))return!![];if(!VisuMZ[_0x3e1377(0x2cc)][_0x3e1377(0xc3)](this,_0x57b371))return!![];return![];},Game_Actor[_0x6967b(0x20d)][_0x6967b(0x25b)]=function(){const _0x42ccf1=_0x6967b;let _0xdb2726=[this['actor'](),this['currentClass']()];_0xdb2726=_0xdb2726[_0x42ccf1(0x214)](this['equips']()[_0x42ccf1(0x2e4)](_0x35b386=>_0x35b386));for(const _0x50f0c0 of this[_0x42ccf1(0x21e)]){const _0x5bb6fe=$dataSkills[_0x50f0c0];if(_0x5bb6fe)_0xdb2726[_0x42ccf1(0x2a7)](_0x5bb6fe);}return _0xdb2726;},Game_Actor[_0x6967b(0x20d)][_0x6967b(0x18b)]=function(){const _0x3fa60b=_0x6967b;Game_Battler[_0x3fa60b(0x20d)]['addPassiveStatesByPluginParameters']['call'](this);const _0x19d32f=VisuMZ[_0x3fa60b(0x2cc)]['Settings'][_0x3fa60b(0x2cf)]['Actor'];this['_cache'][_0x3fa60b(0x1dc)]=this[_0x3fa60b(0x1db)]['passiveStates'][_0x3fa60b(0x214)](_0x19d32f);},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x18d)]=Game_Actor['prototype'][_0x6967b(0x2c4)],Game_Actor[_0x6967b(0x20d)]['learnSkill']=function(_0x1325dd){const _0x5b9e18=_0x6967b;VisuMZ[_0x5b9e18(0x2cc)]['Game_Actor_learnSkill'][_0x5b9e18(0x106)](this,_0x1325dd),this[_0x5b9e18(0x1db)]={};},VisuMZ[_0x6967b(0x2cc)]['Game_Actor_forgetSkill']=Game_Actor[_0x6967b(0x20d)]['forgetSkill'],Game_Actor['prototype'][_0x6967b(0x182)]=function(_0x286619){const _0x5c4aac=_0x6967b;VisuMZ[_0x5c4aac(0x2cc)][_0x5c4aac(0xb5)][_0x5c4aac(0x106)](this,_0x286619),this[_0x5c4aac(0x1db)]={};},Game_Actor[_0x6967b(0x20d)]['stepsForTurn']=function(){const _0x4820e7=_0x6967b;return VisuMZ[_0x4820e7(0x2cc)][_0x4820e7(0xf5)][_0x4820e7(0x245)]['TurnEndOnMap']??0x14;},Game_Enemy[_0x6967b(0x20d)][_0x6967b(0x25b)]=function(){const _0x20515a=_0x6967b;let _0x191c26=[this[_0x20515a(0x258)]()];return _0x191c26[_0x20515a(0x214)](this[_0x20515a(0x13e)]());},Game_Enemy[_0x6967b(0x20d)][_0x6967b(0x18b)]=function(){const _0x350f04=_0x6967b;Game_Battler[_0x350f04(0x20d)][_0x350f04(0x18b)][_0x350f04(0x106)](this);const _0x37c5e3=VisuMZ[_0x350f04(0x2cc)]['Settings'][_0x350f04(0x2cf)]['Enemy'];this[_0x350f04(0x1db)][_0x350f04(0x1dc)]=this['_cache'][_0x350f04(0x1dc)][_0x350f04(0x214)](_0x37c5e3);},Game_Enemy[_0x6967b(0x20d)][_0x6967b(0x13e)]=function(){const _0x4bff4c=_0x6967b,_0x55214f=[];for(const _0x3cd927 of this[_0x4bff4c(0x258)]()[_0x4bff4c(0x150)]){const _0x47a736=$dataSkills[_0x3cd927[_0x4bff4c(0x1fd)]];if(_0x47a736&&!_0x55214f[_0x4bff4c(0x289)](_0x47a736))_0x55214f['push'](_0x47a736);}return _0x55214f;},Game_Enemy[_0x6967b(0x20d)]['meetsStateCondition']=function(_0x1cc15e){const _0x48659c=_0x6967b;return this[_0x48659c(0x123)]($dataStates[_0x1cc15e]);},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x1f1)]=Game_Unit[_0x6967b(0x20d)]['isAllDead'],Game_Unit[_0x6967b(0x20d)]['isAllDead']=function(){const _0x5c25a6=_0x6967b;if(this[_0x5c25a6(0x2b4)]())return!![];return VisuMZ[_0x5c25a6(0x2cc)]['Game_Unit_isAllDead'][_0x5c25a6(0x106)](this);},Game_Unit[_0x6967b(0x20d)][_0x6967b(0x2b4)]=function(){const _0x1c7af8=_0x6967b,_0x4e1f97=this[_0x1c7af8(0xb4)]();for(const _0x1a8555 of _0x4e1f97){if(!_0x1a8555[_0x1c7af8(0x288)]())return![];}return!![];},VisuMZ['SkillsStatesCore'][_0x6967b(0x27d)]=Game_Troop[_0x6967b(0x20d)]['setup'],Game_Troop[_0x6967b(0x20d)][_0x6967b(0x2d2)]=function(_0x2acbad){const _0x498a5a=_0x6967b;VisuMZ[_0x498a5a(0x2cc)][_0x498a5a(0x27d)][_0x498a5a(0x106)](this,_0x2acbad),this[_0x498a5a(0x163)]();},Game_Troop['prototype'][_0x6967b(0x163)]=function(){const _0x2575ad=_0x6967b;this['_currentTroopUniqueID']=Graphics[_0x2575ad(0x109)];},Game_Troop[_0x6967b(0x20d)]['getCurrentTroopUniqueID']=function(){const _0x54e914=_0x6967b;return this['_currentTroopUniqueID']=this[_0x54e914(0x216)]||Graphics[_0x54e914(0x109)],this[_0x54e914(0x216)];},Scene_Skill['prototype'][_0x6967b(0x22a)]=function(){const _0x4475b3=_0x6967b;if(ConfigManager[_0x4475b3(0xe8)]&&ConfigManager[_0x4475b3(0x28f)]!==undefined)return ConfigManager[_0x4475b3(0x28f)];else{if(this['isUseSkillsStatesCoreUpdatedLayout']())return this[_0x4475b3(0x2fa)]()[_0x4475b3(0x27a)](/LOWER/i);else Scene_ItemBase[_0x4475b3(0x20d)]['isRightInputMode'][_0x4475b3(0x106)](this);}},Scene_Skill[_0x6967b(0x20d)][_0x6967b(0x220)]=function(){const _0xa1c593=_0x6967b;if(ConfigManager[_0xa1c593(0xe8)]&&ConfigManager[_0xa1c593(0x246)]!==undefined)return ConfigManager[_0xa1c593(0x246)];else return this[_0xa1c593(0x22d)]()?this['updatedLayoutStyle']()[_0xa1c593(0x27a)](/RIGHT/i):Scene_ItemBase[_0xa1c593(0x20d)][_0xa1c593(0x220)][_0xa1c593(0x106)](this);},Scene_Skill[_0x6967b(0x20d)][_0x6967b(0x2fa)]=function(){const _0x33dbb0=_0x6967b;return VisuMZ[_0x33dbb0(0x2cc)][_0x33dbb0(0xf5)][_0x33dbb0(0x24c)][_0x33dbb0(0x208)];},Scene_Skill[_0x6967b(0x20d)][_0x6967b(0x270)]=function(){const _0x552942=_0x6967b;return this['_categoryWindow']&&this[_0x552942(0x142)][_0x552942(0x270)]();},Scene_Skill[_0x6967b(0x20d)][_0x6967b(0x22d)]=function(){const _0x403e51=_0x6967b;return VisuMZ['SkillsStatesCore'][_0x403e51(0xf5)][_0x403e51(0x24c)][_0x403e51(0x111)];},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x1cd)]=Scene_Skill['prototype']['helpWindowRect'],Scene_Skill[_0x6967b(0x20d)][_0x6967b(0x170)]=function(){const _0x2899ca=_0x6967b;return this[_0x2899ca(0x22d)]()?this['helpWindowRectSkillsStatesCore']():VisuMZ[_0x2899ca(0x2cc)][_0x2899ca(0x1cd)][_0x2899ca(0x106)](this);},Scene_Skill[_0x6967b(0x20d)][_0x6967b(0xf4)]=function(){const _0x28f6b7=_0x6967b,_0x2e91a3=0x0,_0x516b30=this['helpAreaTop'](),_0x2c0025=Graphics[_0x28f6b7(0x30b)],_0x9dbfa8=this[_0x28f6b7(0x1bc)]();return new Rectangle(_0x2e91a3,_0x516b30,_0x2c0025,_0x9dbfa8);},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x2d5)]=Scene_Skill[_0x6967b(0x20d)]['skillTypeWindowRect'],Scene_Skill[_0x6967b(0x20d)]['skillTypeWindowRect']=function(){const _0x259a61=_0x6967b;return this['isUseSkillsStatesCoreUpdatedLayout']()?this[_0x259a61(0x17d)]():VisuMZ[_0x259a61(0x2cc)][_0x259a61(0x2d5)][_0x259a61(0x106)](this);},Scene_Skill[_0x6967b(0x20d)][_0x6967b(0x17d)]=function(){const _0x41dfa5=_0x6967b,_0x14fb2c=this[_0x41dfa5(0x2ed)](),_0x1f1a06=this[_0x41dfa5(0x167)](0x3,!![]),_0x3f788b=this[_0x41dfa5(0x220)]()?Graphics[_0x41dfa5(0x30b)]-_0x14fb2c:0x0,_0xcf563a=this[_0x41dfa5(0x207)]();return new Rectangle(_0x3f788b,_0xcf563a,_0x14fb2c,_0x1f1a06);},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0xe4)]=Scene_Skill['prototype']['statusWindowRect'],Scene_Skill['prototype'][_0x6967b(0xd6)]=function(){const _0x572d89=_0x6967b;return this[_0x572d89(0x22d)]()?this[_0x572d89(0x139)]():VisuMZ[_0x572d89(0x2cc)][_0x572d89(0xe4)][_0x572d89(0x106)](this);},Scene_Skill['prototype']['statusWindowRectSkillsStatesCore']=function(){const _0x71dbfd=_0x6967b,_0x265d2c=Graphics['boxWidth']-this['mainCommandWidth'](),_0x186d4d=this[_0x71dbfd(0x1ee)][_0x71dbfd(0x2b1)],_0x586e02=this[_0x71dbfd(0x220)]()?0x0:Graphics[_0x71dbfd(0x30b)]-_0x265d2c,_0x24a957=this[_0x71dbfd(0x207)]();return new Rectangle(_0x586e02,_0x24a957,_0x265d2c,_0x186d4d);},VisuMZ['SkillsStatesCore'][_0x6967b(0x16a)]=Scene_Skill['prototype'][_0x6967b(0x1cb)],Scene_Skill[_0x6967b(0x20d)]['createItemWindow']=function(){const _0x4edec3=_0x6967b;VisuMZ[_0x4edec3(0x2cc)]['Scene_Skill_createItemWindow']['call'](this),this[_0x4edec3(0x173)]()&&this[_0x4edec3(0xb2)]();},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x2a4)]=Scene_Skill[_0x6967b(0x20d)][_0x6967b(0x2a8)],Scene_Skill[_0x6967b(0x20d)][_0x6967b(0x2a8)]=function(){const _0x4cf071=_0x6967b;if(this[_0x4cf071(0x22d)]())return this[_0x4cf071(0xde)]();else{const _0x5815c2=VisuMZ[_0x4cf071(0x2cc)][_0x4cf071(0x2a4)][_0x4cf071(0x106)](this);return this[_0x4cf071(0x173)]()&&this[_0x4cf071(0x1b4)]()&&(_0x5815c2[_0x4cf071(0x2e7)]-=this[_0x4cf071(0x25e)]()),_0x5815c2;}},Scene_Skill['prototype'][_0x6967b(0xde)]=function(){const _0x190258=_0x6967b,_0x34edcf=Graphics[_0x190258(0x30b)]-this[_0x190258(0x25e)](),_0x36778e=this[_0x190258(0xd1)]()-this['_statusWindow'][_0x190258(0x2b1)],_0x31c013=this[_0x190258(0x220)]()?Graphics[_0x190258(0x30b)]-_0x34edcf:0x0,_0x10a88a=this[_0x190258(0x240)]['y']+this['_statusWindow'][_0x190258(0x2b1)];return new Rectangle(_0x31c013,_0x10a88a,_0x34edcf,_0x36778e);},Scene_Skill[_0x6967b(0x20d)][_0x6967b(0x173)]=function(){const _0x14a4f8=_0x6967b;if(!Imported['VisuMZ_1_ItemsEquipsCore'])return![];else return this[_0x14a4f8(0x22d)]()?!![]:VisuMZ['SkillsStatesCore'][_0x14a4f8(0xf5)][_0x14a4f8(0x24c)][_0x14a4f8(0x197)];},Scene_Skill[_0x6967b(0x20d)][_0x6967b(0x1b4)]=function(){const _0x168c02=_0x6967b;return VisuMZ['SkillsStatesCore'][_0x168c02(0xf5)][_0x168c02(0x24c)][_0x168c02(0x12f)];},Scene_Skill['prototype'][_0x6967b(0xb2)]=function(){const _0x2627f2=_0x6967b,_0x2b7d2f=this[_0x2627f2(0x1d7)]();this[_0x2627f2(0x2e3)]=new Window_ShopStatus(_0x2b7d2f),this[_0x2627f2(0x2f0)](this[_0x2627f2(0x2e3)]),this['_itemWindow']['setStatusWindow'](this[_0x2627f2(0x2e3)]);const _0x3c7e96=VisuMZ[_0x2627f2(0x2cc)]['Settings'][_0x2627f2(0x24c)]['SkillSceneStatusBgType'];this[_0x2627f2(0x2e3)][_0x2627f2(0x305)](_0x3c7e96||0x0);},Scene_Skill[_0x6967b(0x20d)][_0x6967b(0x1d7)]=function(){const _0x22bb1b=_0x6967b;return this[_0x22bb1b(0x22d)]()?this['shopStatusWindowRectSkillsStatesCore']():VisuMZ['SkillsStatesCore'][_0x22bb1b(0xf5)][_0x22bb1b(0x24c)][_0x22bb1b(0x193)][_0x22bb1b(0x106)](this);},Scene_Skill[_0x6967b(0x20d)][_0x6967b(0x1f9)]=function(){const _0x5b67c8=_0x6967b,_0x5996ef=this['shopStatusWidth'](),_0x3e6ad5=this[_0x5b67c8(0x1f6)][_0x5b67c8(0x2b1)],_0x14ec3f=this[_0x5b67c8(0x220)]()?0x0:Graphics['boxWidth']-this['shopStatusWidth'](),_0x2b238e=this['_itemWindow']['y'];return new Rectangle(_0x14ec3f,_0x2b238e,_0x5996ef,_0x3e6ad5);},Scene_Skill[_0x6967b(0x20d)][_0x6967b(0x25e)]=function(){const _0x310ecb=_0x6967b;return Imported[_0x310ecb(0x2c8)]?Scene_Shop[_0x310ecb(0x20d)][_0x310ecb(0x21b)]():0x0;},Scene_Skill['prototype']['buttonAssistText1']=function(){const _0x75aaeb=_0x6967b;return this[_0x75aaeb(0x1ee)]&&this[_0x75aaeb(0x1ee)]['active']?TextManager[_0x75aaeb(0x11f)]:'';},VisuMZ[_0x6967b(0x2cc)]['Sprite_Gauge_initMembers']=Sprite_Gauge[_0x6967b(0x20d)][_0x6967b(0x26c)],Sprite_Gauge[_0x6967b(0x20d)][_0x6967b(0x26c)]=function(){const _0x29fbac=_0x6967b;VisuMZ[_0x29fbac(0x2cc)][_0x29fbac(0x185)][_0x29fbac(0x106)](this),this[_0x29fbac(0x250)]=null;},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x2ff)]=Sprite_Gauge['prototype'][_0x6967b(0x2d2)],Sprite_Gauge['prototype'][_0x6967b(0x2d2)]=function(_0x53fce5,_0x218ea5){const _0x16604c=_0x6967b;this['setupSkillsStatesCore'](_0x53fce5,_0x218ea5),_0x218ea5=_0x218ea5[_0x16604c(0x247)](),VisuMZ[_0x16604c(0x2cc)][_0x16604c(0x2ff)][_0x16604c(0x106)](this,_0x53fce5,_0x218ea5);},Sprite_Gauge[_0x6967b(0x20d)][_0x6967b(0xd3)]=function(_0x96746d,_0x6735c5){const _0xb07968=_0x6967b,_0x1964f8=VisuMZ[_0xb07968(0x2cc)][_0xb07968(0xf5)][_0xb07968(0x2c2)][_0xb07968(0x2e4)](_0x54b640=>_0x54b640[_0xb07968(0x178)][_0xb07968(0x251)]()===_0x6735c5[_0xb07968(0x251)]());_0x1964f8[_0xb07968(0x209)]>=0x1?this['_costSettings']=_0x1964f8[0x0]:this['_costSettings']=null;},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x29e)]=Sprite_Gauge[_0x6967b(0x20d)][_0x6967b(0x23d)],Sprite_Gauge['prototype'][_0x6967b(0x23d)]=function(){const _0x1c40e4=_0x6967b;return this[_0x1c40e4(0x115)]&&this[_0x1c40e4(0x250)]?this[_0x1c40e4(0x1aa)]():VisuMZ[_0x1c40e4(0x2cc)][_0x1c40e4(0x29e)][_0x1c40e4(0x106)](this);},Sprite_Gauge[_0x6967b(0x20d)][_0x6967b(0x1aa)]=function(){const _0x52c740=_0x6967b;return this[_0x52c740(0x250)][_0x52c740(0x22b)][_0x52c740(0x106)](this[_0x52c740(0x115)]);},VisuMZ[_0x6967b(0x2cc)]['Sprite_Gauge_currentMaxValue']=Sprite_Gauge[_0x6967b(0x20d)]['currentMaxValue'],Sprite_Gauge['prototype']['currentMaxValue']=function(){const _0x54e477=_0x6967b;return this['_battler']&&this[_0x54e477(0x250)]?this[_0x54e477(0x1ae)]():VisuMZ['SkillsStatesCore'][_0x54e477(0x1c1)][_0x54e477(0x106)](this);},Sprite_Gauge[_0x6967b(0x20d)]['currentMaxValueSkillsStatesCore']=function(){const _0x1c0d5e=_0x6967b;return this[_0x1c0d5e(0x250)][_0x1c0d5e(0x2eb)][_0x1c0d5e(0x106)](this[_0x1c0d5e(0x115)]);},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x2e1)]=Sprite_Gauge[_0x6967b(0x20d)][_0x6967b(0x2a6)],Sprite_Gauge[_0x6967b(0x20d)][_0x6967b(0x2a6)]=function(){const _0x536ddb=_0x6967b,_0xe05a9a=VisuMZ[_0x536ddb(0x2cc)][_0x536ddb(0x2e1)][_0x536ddb(0x106)](this);return _0xe05a9a[_0x536ddb(0x287)](0x0,0x1);},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x156)]=Sprite_Gauge[_0x6967b(0x20d)]['redraw'],Sprite_Gauge['prototype'][_0x6967b(0x146)]=function(){const _0x3271ce=_0x6967b;this[_0x3271ce(0x115)]&&this[_0x3271ce(0x250)]?(this['bitmap']['clear'](),this['redrawSkillsStatesCore']()):VisuMZ[_0x3271ce(0x2cc)][_0x3271ce(0x156)][_0x3271ce(0x106)](this);},Sprite_Gauge[_0x6967b(0x20d)]['currentDisplayedValue']=function(){const _0x1e927c=_0x6967b;let _0x2052be=this[_0x1e927c(0x23d)]();return Imported[_0x1e927c(0x126)]&&this[_0x1e927c(0x279)]()&&(_0x2052be=VisuMZ[_0x1e927c(0x219)](_0x2052be)),_0x2052be;},Sprite_Gauge['prototype'][_0x6967b(0x148)]=function(){const _0x527991=_0x6967b;this[_0x527991(0x250)]['GaugeDrawJS']['call'](this);},Sprite_Gauge[_0x6967b(0x20d)][_0x6967b(0x159)]=function(_0x1edabd,_0x4645ac,_0x348e27,_0x31e1f4,_0x1698b4,_0x11fa88){const _0x3f9a62=_0x6967b,_0x3bea7e=this[_0x3f9a62(0x2a6)](),_0x103406=Math[_0x3f9a62(0x23f)]((_0x1698b4-0x2)*_0x3bea7e),_0x591217=_0x11fa88-0x2,_0x27f21f=this['gaugeBackColor']();this['bitmap']['fillRect'](_0x348e27,_0x31e1f4,_0x1698b4,_0x11fa88,_0x27f21f),this[_0x3f9a62(0x226)][_0x3f9a62(0x2fd)](_0x348e27+0x1,_0x31e1f4+0x1,_0x103406,_0x591217,_0x1edabd,_0x4645ac);},VisuMZ[_0x6967b(0x2cc)]['Sprite_StateIcon_loadBitmap']=Sprite_StateIcon[_0x6967b(0x20d)][_0x6967b(0x2b5)],Sprite_StateIcon[_0x6967b(0x20d)][_0x6967b(0x2b5)]=function(){const _0x4a918c=_0x6967b;VisuMZ['SkillsStatesCore'][_0x4a918c(0x1fe)][_0x4a918c(0x106)](this),this[_0x4a918c(0x158)]();},Sprite_StateIcon[_0x6967b(0x20d)][_0x6967b(0x158)]=function(){const _0x2e5fb6=_0x6967b,_0x1d8153=Window_Base['prototype'][_0x2e5fb6(0x1a2)]();this[_0x2e5fb6(0x189)]=new Sprite(),this[_0x2e5fb6(0x189)][_0x2e5fb6(0x226)]=new Bitmap(ImageManager[_0x2e5fb6(0x137)],_0x1d8153),this['_turnDisplaySprite'][_0x2e5fb6(0x1fc)]['x']=this['anchor']['x'],this['_turnDisplaySprite'][_0x2e5fb6(0x1fc)]['y']=this[_0x2e5fb6(0x1fc)]['y'],this[_0x2e5fb6(0xc2)](this['_turnDisplaySprite']),this['contents']=this['_turnDisplaySprite'][_0x2e5fb6(0x226)];},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x221)]=Sprite_StateIcon[_0x6967b(0x20d)][_0x6967b(0x257)],Sprite_StateIcon[_0x6967b(0x20d)][_0x6967b(0x257)]=function(){const _0x198a88=_0x6967b;VisuMZ[_0x198a88(0x2cc)]['Sprite_StateIcon_updateFrame'][_0x198a88(0x106)](this),this[_0x198a88(0x2ee)]();},Sprite_StateIcon['prototype'][_0x6967b(0x11c)]=function(_0x35b7bc,_0xf4e072,_0x43511b,_0x506cba,_0x18d86d){const _0x1d2398=_0x6967b;this[_0x1d2398(0x222)]['drawText'](_0x35b7bc,_0xf4e072,_0x43511b,_0x506cba,this[_0x1d2398(0x222)][_0x1d2398(0x2b1)],_0x18d86d);},Sprite_StateIcon['prototype'][_0x6967b(0x2ee)]=function(){const _0x343e4b=_0x6967b;this['resetFontSettings'](),this[_0x343e4b(0x222)][_0x343e4b(0x1d2)]();const _0x2a5ddf=this[_0x343e4b(0x115)];if(!_0x2a5ddf)return;const _0x210e31=_0x2a5ddf[_0x343e4b(0x1d5)]()[_0x343e4b(0x2e4)](_0x3e7387=>_0x3e7387[_0x343e4b(0xf1)]>0x0),_0xd81b6c=[...Array(0x8)['keys']()]['filter'](_0x4b9e27=>_0x2a5ddf['buff'](_0x4b9e27)!==0x0),_0x448688=this['_animationIndex'],_0x3fb08b=_0x210e31[_0x448688];if(_0x3fb08b)Window_Base[_0x343e4b(0x20d)][_0x343e4b(0x213)][_0x343e4b(0x106)](this,_0x2a5ddf,_0x3fb08b,0x0,0x0),Window_Base[_0x343e4b(0x20d)][_0x343e4b(0xf9)][_0x343e4b(0x106)](this,_0x2a5ddf,_0x3fb08b,0x0,0x0);else{const _0x36b9af=_0xd81b6c[_0x448688-_0x210e31[_0x343e4b(0x209)]];if(_0x36b9af===undefined)return;Window_Base['prototype'][_0x343e4b(0x136)][_0x343e4b(0x106)](this,_0x2a5ddf,_0x36b9af,0x0,0x0),Window_Base[_0x343e4b(0x20d)][_0x343e4b(0x11b)][_0x343e4b(0x106)](this,_0x2a5ddf,_0x36b9af,0x0,0x0);}},Sprite_StateIcon[_0x6967b(0x20d)][_0x6967b(0x297)]=function(){const _0xa42ad8=_0x6967b;this['contents']['fontFace']=$gameSystem[_0xa42ad8(0x2df)](),this[_0xa42ad8(0x222)]['fontSize']=$gameSystem['mainFontSize'](),this[_0xa42ad8(0x104)]();},Sprite_StateIcon['prototype'][_0x6967b(0x104)]=function(){const _0x35dff9=_0x6967b;this[_0x35dff9(0x2ac)](ColorManager[_0x35dff9(0x1d0)]()),this[_0x35dff9(0x144)](ColorManager[_0x35dff9(0x2ad)]());},Sprite_StateIcon[_0x6967b(0x20d)][_0x6967b(0x2ac)]=function(_0x12064f){const _0x1ec821=_0x6967b;this[_0x1ec821(0x222)][_0x1ec821(0x223)]=_0x12064f;},Sprite_StateIcon[_0x6967b(0x20d)][_0x6967b(0x144)]=function(_0x1f1f11){const _0x2a2725=_0x6967b;this[_0x2a2725(0x222)][_0x2a2725(0x2ad)]=_0x1f1f11;},Sprite_StateIcon[_0x6967b(0x20d)][_0x6967b(0x200)]=function(){const _0x51ebc0=_0x6967b;this[_0x51ebc0(0x27b)]=!![],this[_0x51ebc0(0x1f3)]();},Window_Base[_0x6967b(0x20d)]['drawSkillCost']=function(_0x393ac6,_0x1fd592,_0xe71077,_0x38a177,_0x29c089){const _0x3fedda=_0x6967b,_0xf83e21=this['createAllSkillCostText'](_0x393ac6,_0x1fd592),_0xd2c2ed=this[_0x3fedda(0xe1)](_0xf83e21,_0xe71077,_0x38a177,_0x29c089),_0x1071b9=_0xe71077+_0x29c089-_0xd2c2ed[_0x3fedda(0x2e7)];this[_0x3fedda(0x1e5)](_0xf83e21,_0x1071b9,_0x38a177,_0x29c089),this[_0x3fedda(0x297)]();},Window_Base[_0x6967b(0x20d)][_0x6967b(0x284)]=function(_0x57ad68,_0x5f5d6f){const _0x55e760=_0x6967b;let _0x426129='';for(settings of VisuMZ[_0x55e760(0x2cc)]['Settings']['Costs']){if(!this[_0x55e760(0x253)](_0x57ad68,_0x5f5d6f,settings))continue;if(_0x426129[_0x55e760(0x209)]>0x0)_0x426129+=this[_0x55e760(0x174)]();_0x426129+=this[_0x55e760(0x20b)](_0x57ad68,_0x5f5d6f,settings);}_0x426129=this[_0x55e760(0x27c)](_0x57ad68,_0x5f5d6f,_0x426129);if(_0x5f5d6f[_0x55e760(0x12d)][_0x55e760(0x27a)](/<CUSTOM COST TEXT>\s*([\s\S]*)\s*<\/CUSTOM COST TEXT>/i)){if(_0x426129[_0x55e760(0x209)]>0x0)_0x426129+=this[_0x55e760(0x174)]();_0x426129+=String(RegExp['$1']);}return _0x426129;},Window_Base[_0x6967b(0x20d)]['makeAdditionalSkillCostText']=function(_0x2c30de,_0x391d8a,_0x1ece3a){return _0x1ece3a;},Window_Base['prototype'][_0x6967b(0x253)]=function(_0x7cc6a1,_0x451180,_0xa0ee54){const _0x38e9d9=_0x6967b,_0x3ff5de=_0xa0ee54[_0x38e9d9(0x1b6)]['call'](_0x7cc6a1,_0x451180);return _0xa0ee54['ShowJS'][_0x38e9d9(0x106)](_0x7cc6a1,_0x451180,_0x3ff5de,_0xa0ee54);},Window_Base[_0x6967b(0x20d)]['createSkillCostText']=function(_0x3e586a,_0x2a23d7,_0x521246){const _0x150da8=_0x6967b,_0x17620e=_0x521246[_0x150da8(0x1b6)][_0x150da8(0x106)](_0x3e586a,_0x2a23d7);return _0x521246[_0x150da8(0x116)][_0x150da8(0x106)](_0x3e586a,_0x2a23d7,_0x17620e,_0x521246);},Window_Base[_0x6967b(0x20d)]['skillCostSeparator']=function(){return'\x20';},Window_Base['prototype']['drawActorIcons']=function(_0x3b71d0,_0x3a0936,_0x232174,_0x3bcc71){const _0x1284ba=_0x6967b;if(!_0x3b71d0)return;VisuMZ[_0x1284ba(0x2cc)][_0x1284ba(0x256)][_0x1284ba(0x106)](this,_0x3b71d0,_0x3a0936,_0x232174,_0x3bcc71),this[_0x1284ba(0x23e)](_0x3b71d0,_0x3a0936,_0x232174,_0x3bcc71);},Window_Base[_0x6967b(0x20d)][_0x6967b(0x23e)]=function(_0x2ebc31,_0x259e00,_0xcf4537,_0x3413af){const _0x4ca504=_0x6967b;_0x3413af=_0x3413af||0x90;const _0x11c8ea=ImageManager[_0x4ca504(0x137)],_0x435c92=_0x2ebc31[_0x4ca504(0x2f2)]()[_0x4ca504(0x20e)](0x0,Math[_0x4ca504(0x23f)](_0x3413af/_0x11c8ea)),_0x4c1ee2=_0x2ebc31[_0x4ca504(0x1d5)]()[_0x4ca504(0x2e4)](_0x413325=>_0x413325[_0x4ca504(0xf1)]>0x0),_0xa64887=[...Array(0x8)[_0x4ca504(0x12b)]()]['filter'](_0x15c825=>_0x2ebc31[_0x4ca504(0x10c)](_0x15c825)!==0x0),_0x4f5f6d=[];let _0x596673=_0x259e00;for(let _0x5e132f=0x0;_0x5e132f<_0x435c92[_0x4ca504(0x209)];_0x5e132f++){this['resetFontSettings']();const _0x4f7178=_0x4c1ee2[_0x5e132f];if(_0x4f7178)!_0x4f5f6d[_0x4ca504(0x289)](_0x4f7178)&&this['drawActorStateTurns'](_0x2ebc31,_0x4f7178,_0x596673,_0xcf4537),this[_0x4ca504(0xf9)](_0x2ebc31,_0x4f7178,_0x596673,_0xcf4537),_0x4f5f6d[_0x4ca504(0x2a7)](_0x4f7178);else{const _0x3be46a=_0xa64887[_0x5e132f-_0x4c1ee2[_0x4ca504(0x209)]];this[_0x4ca504(0x136)](_0x2ebc31,_0x3be46a,_0x596673,_0xcf4537),this[_0x4ca504(0x11b)](_0x2ebc31,_0x3be46a,_0x596673,_0xcf4537);}_0x596673+=_0x11c8ea;}},Window_Base[_0x6967b(0x20d)][_0x6967b(0x213)]=function(_0x413846,_0x56ccd5,_0x123801,_0x43cb86){const _0x10ff48=_0x6967b;if(!VisuMZ[_0x10ff48(0x2cc)][_0x10ff48(0xf5)][_0x10ff48(0x245)][_0x10ff48(0x28c)])return;if(!_0x413846[_0x10ff48(0x2d3)](_0x56ccd5['id']))return;if(_0x56ccd5[_0x10ff48(0x149)]===0x0)return;if(_0x56ccd5[_0x10ff48(0x12d)][_0x10ff48(0x27a)](/<HIDE STATE TURNS>/i))return;const _0xac665a=_0x413846[_0x10ff48(0x2f5)](_0x56ccd5['id']),_0x62ee66=ImageManager[_0x10ff48(0x137)],_0x196451=ColorManager['stateColor'](_0x56ccd5);this[_0x10ff48(0x2ac)](_0x196451),this['changeOutlineColor'](_0x10ff48(0x307)),this[_0x10ff48(0x222)][_0x10ff48(0x1a7)]=!![],this['contents'][_0x10ff48(0x20c)]=VisuMZ[_0x10ff48(0x2cc)][_0x10ff48(0xf5)]['States'][_0x10ff48(0xe0)],_0x123801+=VisuMZ[_0x10ff48(0x2cc)][_0x10ff48(0xf5)][_0x10ff48(0x245)][_0x10ff48(0xdd)],_0x43cb86+=VisuMZ[_0x10ff48(0x2cc)][_0x10ff48(0xf5)][_0x10ff48(0x245)]['TurnOffsetY'],this[_0x10ff48(0x11c)](_0xac665a,_0x123801,_0x43cb86,_0x62ee66,_0x10ff48(0x12c)),this[_0x10ff48(0x222)][_0x10ff48(0x1a7)]=![],this[_0x10ff48(0x297)]();},Window_Base[_0x6967b(0x20d)]['drawActorStateData']=function(_0x38f1dc,_0x3a097d,_0x30d90c,_0x252103){const _0x2e41b0=_0x6967b;if(!VisuMZ['SkillsStatesCore'][_0x2e41b0(0xf5)][_0x2e41b0(0x245)][_0x2e41b0(0x172)])return;const _0x203de7=ImageManager[_0x2e41b0(0x137)],_0x4d20ed=ImageManager[_0x2e41b0(0x17b)]/0x2,_0x38160f=ColorManager[_0x2e41b0(0x1d0)]();this[_0x2e41b0(0x2ac)](_0x38160f),this[_0x2e41b0(0x144)](_0x2e41b0(0x307)),this['contents'][_0x2e41b0(0x1a7)]=!![],this[_0x2e41b0(0x222)][_0x2e41b0(0x20c)]=VisuMZ[_0x2e41b0(0x2cc)][_0x2e41b0(0xf5)]['States'][_0x2e41b0(0x212)],_0x30d90c+=VisuMZ['SkillsStatesCore'][_0x2e41b0(0xf5)][_0x2e41b0(0x245)][_0x2e41b0(0x29b)],_0x252103+=VisuMZ[_0x2e41b0(0x2cc)][_0x2e41b0(0xf5)][_0x2e41b0(0x245)][_0x2e41b0(0x249)];const _0x46aaef=String(_0x38f1dc[_0x2e41b0(0x1ea)](_0x3a097d['id']));this[_0x2e41b0(0x11c)](_0x46aaef,_0x30d90c,_0x252103,_0x203de7,_0x2e41b0(0x166)),this[_0x2e41b0(0x222)][_0x2e41b0(0x1a7)]=![],this[_0x2e41b0(0x297)]();},Window_Base['prototype']['drawActorBuffTurns']=function(_0x42e39d,_0x5e580b,_0x1223f2,_0x135973){const _0x4c28c3=_0x6967b;if(!VisuMZ[_0x4c28c3(0x2cc)][_0x4c28c3(0xf5)][_0x4c28c3(0x1f5)][_0x4c28c3(0x28c)])return;const _0x4856f5=_0x42e39d[_0x4c28c3(0x10c)](_0x5e580b);if(_0x4856f5===0x0)return;const _0x41ce83=_0x42e39d[_0x4c28c3(0x1ec)](_0x5e580b),_0x257221=ImageManager[_0x4c28c3(0x137)],_0x5e9701=_0x4856f5>0x0?ColorManager[_0x4c28c3(0x11d)]():ColorManager[_0x4c28c3(0x18f)]();this['changeTextColor'](_0x5e9701),this[_0x4c28c3(0x144)](_0x4c28c3(0x307)),this[_0x4c28c3(0x222)][_0x4c28c3(0x1a7)]=!![],this[_0x4c28c3(0x222)]['fontSize']=VisuMZ[_0x4c28c3(0x2cc)]['Settings']['Buffs'][_0x4c28c3(0xe0)],_0x1223f2+=VisuMZ[_0x4c28c3(0x2cc)][_0x4c28c3(0xf5)][_0x4c28c3(0x1f5)]['TurnOffsetX'],_0x135973+=VisuMZ['SkillsStatesCore'][_0x4c28c3(0xf5)][_0x4c28c3(0x1f5)][_0x4c28c3(0x2f7)],this['drawText'](_0x41ce83,_0x1223f2,_0x135973,_0x257221,_0x4c28c3(0x12c)),this[_0x4c28c3(0x222)][_0x4c28c3(0x1a7)]=![],this[_0x4c28c3(0x297)]();},Window_Base['prototype']['drawActorBuffRates']=function(_0x5d808b,_0x234c73,_0x48929a,_0x21b30d){const _0x5cb9d2=_0x6967b;if(!VisuMZ['SkillsStatesCore'][_0x5cb9d2(0xf5)][_0x5cb9d2(0x1f5)][_0x5cb9d2(0x172)])return;const _0x5d7d74=_0x5d808b[_0x5cb9d2(0xea)](_0x234c73),_0x6cdd2c=_0x5d808b[_0x5cb9d2(0x10c)](_0x234c73),_0x4dc961=ImageManager[_0x5cb9d2(0x137)],_0xb3ae6e=ImageManager[_0x5cb9d2(0x17b)]/0x2,_0xc65c78=_0x6cdd2c>0x0?ColorManager[_0x5cb9d2(0x11d)]():ColorManager['debuffColor']();this[_0x5cb9d2(0x2ac)](_0xc65c78),this[_0x5cb9d2(0x144)](_0x5cb9d2(0x307)),this[_0x5cb9d2(0x222)][_0x5cb9d2(0x1a7)]=!![],this[_0x5cb9d2(0x222)][_0x5cb9d2(0x20c)]=VisuMZ[_0x5cb9d2(0x2cc)][_0x5cb9d2(0xf5)][_0x5cb9d2(0x1f5)]['DataFontSize'],_0x48929a+=VisuMZ[_0x5cb9d2(0x2cc)][_0x5cb9d2(0xf5)]['Buffs'][_0x5cb9d2(0x29b)],_0x21b30d+=VisuMZ[_0x5cb9d2(0x2cc)][_0x5cb9d2(0xf5)]['Buffs']['DataOffsetY'];const _0x3952c3='%1%'[_0x5cb9d2(0x1c9)](Math['round'](_0x5d7d74*0x64));this[_0x5cb9d2(0x11c)](_0x3952c3,_0x48929a,_0x21b30d,_0x4dc961,_0x5cb9d2(0x166)),this[_0x5cb9d2(0x222)]['fontBold']=![],this['resetFontSettings']();},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x1a9)]=Window_StatusBase[_0x6967b(0x20d)]['placeGauge'],Window_StatusBase['prototype'][_0x6967b(0x169)]=function(_0x5d6841,_0xf66cce,_0xd30f5a,_0x4056a2){const _0x261ca1=_0x6967b;if(_0x5d6841[_0x261ca1(0x107)]())_0xf66cce=this[_0x261ca1(0x211)](_0x5d6841,_0xf66cce);this['placeExactGauge'](_0x5d6841,_0xf66cce,_0xd30f5a,_0x4056a2);},Window_StatusBase[_0x6967b(0x20d)]['placeExactGauge']=function(_0x2ba125,_0x2fe8b3,_0x8c34ce,_0x1046c0){const _0x2e6094=_0x6967b;if([_0x2e6094(0xb6),_0x2e6094(0x241)][_0x2e6094(0x289)](_0x2fe8b3[_0x2e6094(0x247)]()))return;VisuMZ[_0x2e6094(0x2cc)][_0x2e6094(0x1a9)][_0x2e6094(0x106)](this,_0x2ba125,_0x2fe8b3,_0x8c34ce,_0x1046c0);},Window_StatusBase['prototype'][_0x6967b(0x211)]=function(_0x5871bd,_0x505768){const _0x4551cb=_0x6967b,_0x37d1ed=_0x5871bd[_0x4551cb(0x12e)]()['note'];if(_0x505768==='hp'&&_0x37d1ed[_0x4551cb(0x27a)](/<REPLACE HP GAUGE:[ ](.*)>/i))return String(RegExp['$1']);else{if(_0x505768==='mp'&&_0x37d1ed[_0x4551cb(0x27a)](/<REPLACE MP GAUGE:[ ](.*)>/i))return String(RegExp['$1']);else return _0x505768==='tp'&&_0x37d1ed['match'](/<REPLACE TP GAUGE:[ ](.*)>/i)?String(RegExp['$1']):_0x505768;}},VisuMZ[_0x6967b(0x2cc)]['Window_StatusBase_drawActorIcons']=Window_StatusBase[_0x6967b(0x20d)][_0x6967b(0x2e5)],Window_StatusBase[_0x6967b(0x20d)][_0x6967b(0x2e5)]=function(_0x477d7c,_0x4a9593,_0x44105f,_0x822c98){const _0x3e2e0e=_0x6967b;if(!_0x477d7c)return;Window_Base['prototype'][_0x3e2e0e(0x2e5)]['call'](this,_0x477d7c,_0x4a9593,_0x44105f,_0x822c98);},VisuMZ['SkillsStatesCore'][_0x6967b(0xbc)]=Window_SkillType['prototype'][_0x6967b(0x2c7)],Window_SkillType['prototype'][_0x6967b(0x2c7)]=function(_0x8233a1){const _0x4d9795=_0x6967b;VisuMZ[_0x4d9795(0x2cc)][_0x4d9795(0xbc)]['call'](this,_0x8233a1),this['createCommandNameWindow'](_0x8233a1);},Window_SkillType['prototype'][_0x6967b(0xcc)]=function(_0x147fb4){const _0x2f51d4=_0x6967b,_0x51759e=new Rectangle(0x0,0x0,_0x147fb4[_0x2f51d4(0x2e7)],_0x147fb4['height']);this[_0x2f51d4(0x1a4)]=new Window_Base(_0x51759e),this[_0x2f51d4(0x1a4)][_0x2f51d4(0x16b)]=0x0,this[_0x2f51d4(0xc2)](this[_0x2f51d4(0x1a4)]),this[_0x2f51d4(0xda)]();},Window_SkillType[_0x6967b(0x20d)][_0x6967b(0x1a1)]=function(){const _0x228d88=_0x6967b;Window_Command[_0x228d88(0x20d)][_0x228d88(0x1a1)][_0x228d88(0x106)](this);if(this['_commandNameWindow'])this[_0x228d88(0xda)]();},Window_SkillType[_0x6967b(0x20d)][_0x6967b(0xda)]=function(){const _0x11e268=_0x6967b,_0x34029f=this['_commandNameWindow'];_0x34029f[_0x11e268(0x222)][_0x11e268(0x1d2)]();const _0xa4ecaa=this[_0x11e268(0xff)](this['index']());if(_0xa4ecaa===_0x11e268(0x24f)&&this[_0x11e268(0x24e)]()>0x0){const _0x52cad4=this['itemLineRect'](this['index']());let _0x240c72=this['commandName'](this[_0x11e268(0x17e)]());_0x240c72=_0x240c72[_0x11e268(0x1e4)](/\\I\[(\d+)\]/gi,''),_0x34029f[_0x11e268(0x297)](),this[_0x11e268(0x19d)](_0x240c72,_0x52cad4),this[_0x11e268(0x184)](_0x240c72,_0x52cad4),this[_0x11e268(0x1ba)](_0x240c72,_0x52cad4);}},Window_SkillType[_0x6967b(0x20d)][_0x6967b(0x19d)]=function(_0x1785fb,_0x4d6e25){},Window_SkillType[_0x6967b(0x20d)][_0x6967b(0x184)]=function(_0xc0a307,_0x1064dc){const _0xd6a650=_0x6967b,_0x1e311a=this[_0xd6a650(0x1a4)];_0x1e311a[_0xd6a650(0x11c)](_0xc0a307,0x0,_0x1064dc['y'],_0x1e311a['innerWidth'],_0xd6a650(0x166));},Window_SkillType[_0x6967b(0x20d)][_0x6967b(0x1ba)]=function(_0x52dfbf,_0x212418){const _0x4fd891=_0x6967b,_0x404c75=this['_commandNameWindow'],_0x25234a=$gameSystem['windowPadding'](),_0x1cdae1=_0x212418['x']+Math[_0x4fd891(0x23f)](_0x212418[_0x4fd891(0x2e7)]/0x2)+_0x25234a;_0x404c75['x']=_0x404c75['width']/-0x2+_0x1cdae1,_0x404c75['y']=Math[_0x4fd891(0x23f)](_0x212418[_0x4fd891(0x2b1)]/0x2);},Window_SkillType[_0x6967b(0x20d)][_0x6967b(0x270)]=function(){const _0x27a7b1=_0x6967b;return Imported[_0x27a7b1(0x126)]&&Window_Command[_0x27a7b1(0x20d)][_0x27a7b1(0x270)][_0x27a7b1(0x106)](this);},Window_SkillType[_0x6967b(0x20d)]['makeCommandList']=function(){const _0x5cc4e6=_0x6967b;if(!this[_0x5cc4e6(0x273)])return;const _0x329c60=this[_0x5cc4e6(0x273)]['skillTypes']();for(const _0x17e44e of _0x329c60){const _0x401fd5=this[_0x5cc4e6(0xee)](_0x17e44e);this[_0x5cc4e6(0x26f)](_0x401fd5,_0x5cc4e6(0x140),!![],_0x17e44e);}},Window_SkillType[_0x6967b(0x20d)][_0x6967b(0xee)]=function(_0x56e56b){const _0x2c9312=_0x6967b;let _0x425251=$dataSystem[_0x2c9312(0x128)][_0x56e56b];if(_0x425251[_0x2c9312(0x27a)](/\\I\[(\d+)\]/i))return _0x425251;if(this['commandStyle']()===_0x2c9312(0xec))return _0x425251;const _0x5e1595=VisuMZ[_0x2c9312(0x2cc)]['Settings'][_0x2c9312(0x24c)],_0x1f31ed=$dataSystem[_0x2c9312(0x2d7)]['includes'](_0x56e56b),_0x5afe96=_0x1f31ed?_0x5e1595[_0x2c9312(0x2e2)]:_0x5e1595[_0x2c9312(0xd5)];return _0x2c9312(0x10d)['format'](_0x5afe96,_0x425251);},Window_SkillType[_0x6967b(0x20d)][_0x6967b(0x260)]=function(){const _0x597400=_0x6967b;return VisuMZ['SkillsStatesCore'][_0x597400(0xf5)][_0x597400(0x24c)][_0x597400(0x13c)];},Window_SkillType[_0x6967b(0x20d)][_0x6967b(0x1c6)]=function(_0x231b3d){const _0x10a2fd=_0x6967b,_0xe0109d=this[_0x10a2fd(0xff)](_0x231b3d);if(_0xe0109d===_0x10a2fd(0x19c))this[_0x10a2fd(0x28e)](_0x231b3d);else _0xe0109d===_0x10a2fd(0x24f)?this[_0x10a2fd(0x13b)](_0x231b3d):Window_Command[_0x10a2fd(0x20d)][_0x10a2fd(0x1c6)]['call'](this,_0x231b3d);},Window_SkillType[_0x6967b(0x20d)][_0x6967b(0x281)]=function(){const _0x1c2473=_0x6967b;return VisuMZ[_0x1c2473(0x2cc)][_0x1c2473(0xf5)][_0x1c2473(0x24c)]['CmdStyle'];},Window_SkillType[_0x6967b(0x20d)][_0x6967b(0xff)]=function(_0x2a055c){const _0x22e83b=_0x6967b;if(_0x2a055c<0x0)return _0x22e83b(0xec);const _0x135cac=this['commandStyle']();if(_0x135cac!=='auto')return _0x135cac;else{if(this['maxItems']()>0x0){const _0x25a1c7=this['commandName'](_0x2a055c);if(_0x25a1c7[_0x22e83b(0x27a)](/\\I\[(\d+)\]/i)){const _0x58c6ea=this[_0x22e83b(0x122)](_0x2a055c),_0x1eedb0=this[_0x22e83b(0xe1)](_0x25a1c7)['width'];return _0x1eedb0<=_0x58c6ea[_0x22e83b(0x2e7)]?_0x22e83b(0x19c):_0x22e83b(0x24f);}}}return _0x22e83b(0xec);},Window_SkillType[_0x6967b(0x20d)][_0x6967b(0x28e)]=function(_0x4e2f0b){const _0x4b1ce5=_0x6967b,_0x27d760=this[_0x4b1ce5(0x122)](_0x4e2f0b),_0x1ac23a=this[_0x4b1ce5(0x2b9)](_0x4e2f0b),_0x5bfd7c=this[_0x4b1ce5(0xe1)](_0x1ac23a)[_0x4b1ce5(0x2e7)];this['changePaintOpacity'](this[_0x4b1ce5(0xca)](_0x4e2f0b));const _0x18590a=this[_0x4b1ce5(0x260)]();if(_0x18590a==='right')this['drawTextEx'](_0x1ac23a,_0x27d760['x']+_0x27d760[_0x4b1ce5(0x2e7)]-_0x5bfd7c,_0x27d760['y'],_0x5bfd7c);else{if(_0x18590a==='center'){const _0x37b483=_0x27d760['x']+Math[_0x4b1ce5(0x23f)]((_0x27d760[_0x4b1ce5(0x2e7)]-_0x5bfd7c)/0x2);this[_0x4b1ce5(0x1e5)](_0x1ac23a,_0x37b483,_0x27d760['y'],_0x5bfd7c);}else this[_0x4b1ce5(0x1e5)](_0x1ac23a,_0x27d760['x'],_0x27d760['y'],_0x5bfd7c);}},Window_SkillType[_0x6967b(0x20d)][_0x6967b(0x13b)]=function(_0x8bb38){const _0x37a5aa=_0x6967b;this[_0x37a5aa(0x2b9)](_0x8bb38)['match'](/\\I\[(\d+)\]/i);const _0x155087=Number(RegExp['$1'])||0x0,_0x77d3a9=this[_0x37a5aa(0x122)](_0x8bb38),_0x2345aa=_0x77d3a9['x']+Math[_0x37a5aa(0x23f)]((_0x77d3a9[_0x37a5aa(0x2e7)]-ImageManager[_0x37a5aa(0x137)])/0x2),_0x3e1f37=_0x77d3a9['y']+(_0x77d3a9[_0x37a5aa(0x2b1)]-ImageManager[_0x37a5aa(0x17b)])/0x2;this[_0x37a5aa(0x129)](_0x155087,_0x2345aa,_0x3e1f37);},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x2ae)]=Window_SkillStatus[_0x6967b(0x20d)]['refresh'],Window_SkillStatus[_0x6967b(0x20d)]['refresh']=function(){const _0x27869b=_0x6967b;VisuMZ['SkillsStatesCore'][_0x27869b(0x2ae)][_0x27869b(0x106)](this);if(this[_0x27869b(0x273)])this[_0x27869b(0x1ed)]();},Window_SkillStatus[_0x6967b(0x20d)][_0x6967b(0x1ed)]=function(){const _0x587494=_0x6967b;if(!Imported['VisuMZ_0_CoreEngine'])return;if(!Imported[_0x587494(0xb3)])return;const _0x100746=this[_0x587494(0x2fe)]();let _0x4bb4f9=this[_0x587494(0x153)]()/0x2+0xb4+0xb4+0xb4,_0xf88009=this[_0x587494(0x2d8)]-_0x4bb4f9-0x2;if(_0xf88009>=0x12c){const _0x2756ba=VisuMZ['CoreEngine'][_0x587494(0xf5)]['Param'][_0x587494(0x1d8)],_0x365dc8=Math[_0x587494(0x23f)](_0xf88009/0x2)-0x18;let _0x4e6a89=_0x4bb4f9,_0x25968f=Math[_0x587494(0x23f)]((this['innerHeight']-Math['ceil'](_0x2756ba[_0x587494(0x209)]/0x2)*_0x100746)/0x2),_0x29efe5=0x0;for(const _0x4eea9d of _0x2756ba){this['drawExtendedParameter'](_0x4e6a89,_0x25968f,_0x365dc8,_0x4eea9d),_0x29efe5++,_0x29efe5%0x2===0x0?(_0x4e6a89=_0x4bb4f9,_0x25968f+=_0x100746):_0x4e6a89+=_0x365dc8+0x18;}}this[_0x587494(0x297)]();},Window_SkillStatus[_0x6967b(0x20d)]['drawExtendedParameter']=function(_0x375b0a,_0x222ac7,_0x1c520b,_0xb08dd){const _0x87f30c=_0x6967b,_0x262065=this[_0x87f30c(0x2fe)]();this[_0x87f30c(0x297)](),this[_0x87f30c(0x16f)](_0x375b0a,_0x222ac7,_0x1c520b,_0xb08dd,!![]),this[_0x87f30c(0x104)](),this[_0x87f30c(0x222)][_0x87f30c(0x20c)]-=0x8;const _0x58a309=this[_0x87f30c(0x273)]['paramValueByName'](_0xb08dd,!![]);this['contents'][_0x87f30c(0x11c)](_0x58a309,_0x375b0a,_0x222ac7,_0x1c520b,_0x262065,'right');},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x295)]=Window_SkillList[_0x6967b(0x20d)][_0x6967b(0x289)],Window_SkillList['prototype'][_0x6967b(0x289)]=function(_0x12916e){return this['includesSkillsStatesCore'](_0x12916e);},VisuMZ['SkillsStatesCore'][_0x6967b(0x194)]=Window_SkillList[_0x6967b(0x20d)]['maxCols'],Window_SkillList['prototype']['maxCols']=function(){const _0x569def=_0x6967b;return SceneManager['_scene'][_0x569def(0x19f)]===Scene_Battle?VisuMZ[_0x569def(0x2cc)][_0x569def(0x194)][_0x569def(0x106)](this):VisuMZ[_0x569def(0x2cc)][_0x569def(0xf5)]['Skills']['ListWindowCols'];},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0xbe)]=Window_SkillList[_0x6967b(0x20d)][_0x6967b(0x1e3)],Window_SkillList['prototype'][_0x6967b(0x1e3)]=function(_0x44628b){const _0x262276=_0x6967b,_0x140176=this[_0x262276(0x273)]!==_0x44628b;VisuMZ[_0x262276(0x2cc)][_0x262276(0xbe)][_0x262276(0x106)](this,_0x44628b),_0x140176&&(this[_0x262276(0x240)]&&this['_statusWindow'][_0x262276(0x19f)]===Window_ShopStatus&&this[_0x262276(0x240)][_0x262276(0xd2)](this[_0x262276(0x171)](0x0)));},Window_SkillList['prototype'][_0x6967b(0x2b3)]=function(_0x3a86e8){const _0x271148=_0x6967b;if(this[_0x271148(0x1be)]===_0x3a86e8)return;this[_0x271148(0x1be)]=_0x3a86e8,this[_0x271148(0x286)](),this[_0x271148(0x1dd)](0x0,0x0),this[_0x271148(0x240)]&&this[_0x271148(0x240)]['constructor']===Window_ShopStatus&&this[_0x271148(0x240)][_0x271148(0xd2)](this[_0x271148(0x171)](0x0));},Window_SkillList[_0x6967b(0x20d)]['includesSkillsStatesCore']=function(_0xb1455d){const _0x4e62d7=_0x6967b;if(!_0xb1455d)return VisuMZ[_0x4e62d7(0x2cc)][_0x4e62d7(0x295)]['call'](this,_0xb1455d);if(!this[_0x4e62d7(0xbd)](_0xb1455d))return![];if(!this['checkShowHideNotetags'](_0xb1455d))return![];if(!this[_0x4e62d7(0x1d4)](_0xb1455d))return![];return!![];},Window_SkillList[_0x6967b(0x20d)][_0x6967b(0xbd)]=function(_0x18d7ae){const _0x161835=_0x6967b;return DataManager['getSkillTypes'](_0x18d7ae)[_0x161835(0x289)](this[_0x161835(0x1be)]);},Window_SkillList[_0x6967b(0x20d)]['checkShowHideNotetags']=function(_0x261378){const _0x4bca6e=_0x6967b;if(!VisuMZ[_0x4bca6e(0x2cc)][_0x4bca6e(0x2d1)](this['_actor'],_0x261378))return![];if(!VisuMZ['SkillsStatesCore'][_0x4bca6e(0x267)](this[_0x4bca6e(0x273)],_0x261378))return![];if(!VisuMZ[_0x4bca6e(0x2cc)]['CheckVisibleSkillNotetags'](this[_0x4bca6e(0x273)],_0x261378))return![];return!![];},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x2d1)]=function(_0x5d4429,_0xfef09d){const _0x2c93ed=_0x6967b,_0x8b980d=_0xfef09d[_0x2c93ed(0x12d)];if(_0x8b980d['match'](/<HIDE IN BATTLE>/i)&&$gameParty[_0x2c93ed(0xdb)]())return![];else return _0x8b980d[_0x2c93ed(0x27a)](/<HIDE OUTSIDE BATTLE>/i)&&!$gameParty[_0x2c93ed(0xdb)]()?![]:!![];},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x267)]=function(_0x293e2b,_0x6c8bcb){const _0x1a8f05=_0x6967b,_0x15aa7a=_0x6c8bcb[_0x1a8f05(0x12d)];if(_0x15aa7a[_0x1a8f05(0x27a)](/<SHOW[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2bcd59=JSON[_0x1a8f05(0x138)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x274ccb of _0x2bcd59){if(!$gameSwitches[_0x1a8f05(0x1c2)](_0x274ccb))return![];}return!![];}if(_0x15aa7a['match'](/<SHOW ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x27b93b=JSON['parse']('['+RegExp['$1'][_0x1a8f05(0x27a)](/\d+/g)+']');for(const _0x427fa2 of _0x27b93b){if(!$gameSwitches['value'](_0x427fa2))return![];}return!![];}if(_0x15aa7a[_0x1a8f05(0x27a)](/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x207a0b=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x67c7e9 of _0x207a0b){if($gameSwitches['value'](_0x67c7e9))return!![];}return![];}if(_0x15aa7a[_0x1a8f05(0x27a)](/<HIDE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x36327a=JSON[_0x1a8f05(0x138)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x22f261 of _0x36327a){if(!$gameSwitches['value'](_0x22f261))return!![];}return![];}if(_0x15aa7a[_0x1a8f05(0x27a)](/<HIDE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1c9eed=JSON[_0x1a8f05(0x138)]('['+RegExp['$1'][_0x1a8f05(0x27a)](/\d+/g)+']');for(const _0x48046e of _0x1c9eed){if(!$gameSwitches[_0x1a8f05(0x1c2)](_0x48046e))return!![];}return![];}if(_0x15aa7a['match'](/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5c44da=JSON[_0x1a8f05(0x138)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x1cf72e of _0x5c44da){if($gameSwitches[_0x1a8f05(0x1c2)](_0x1cf72e))return![];}return!![];}return!![];},VisuMZ['SkillsStatesCore']['CheckVisibleSkillNotetags']=function(_0xd92aa5,_0x1c0eac){const _0x12524c=_0x6967b,_0x33bddb=_0x1c0eac[_0x12524c(0x12d)];if(_0x33bddb[_0x12524c(0x27a)](/<SHOW IF LEARNED[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x3bb580=JSON[_0x12524c(0x138)]('['+RegExp['$1'][_0x12524c(0x27a)](/\d+/g)+']');for(const _0x23977e of _0x3bb580){if(!_0xd92aa5[_0x12524c(0x2dd)](_0x23977e))return![];}return!![];}else{if(_0x33bddb[_0x12524c(0x27a)](/<SHOW IF LEARNED[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x168826=RegExp['$1'][_0x12524c(0x1a3)](',');for(const _0x24dec5 of _0x168826){const _0x4501a8=DataManager[_0x12524c(0x28d)](_0x24dec5);if(!_0x4501a8)continue;if(!_0xd92aa5[_0x12524c(0x2dd)](_0x4501a8))return![];}return!![];}}if(_0x33bddb['match'](/<SHOW IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x93bb3e=JSON[_0x12524c(0x138)]('['+RegExp['$1'][_0x12524c(0x27a)](/\d+/g)+']');for(const _0xff744c of _0x93bb3e){if(!_0xd92aa5[_0x12524c(0x2dd)](_0xff744c))return![];}return!![];}else{if(_0x33bddb[_0x12524c(0x27a)](/<SHOW IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x3a42c5=RegExp['$1'][_0x12524c(0x1a3)](',');for(const _0x1c1e1e of _0x3a42c5){const _0x5082da=DataManager['getSkillIdWithName'](_0x1c1e1e);if(!_0x5082da)continue;if(!_0xd92aa5[_0x12524c(0x2dd)](_0x5082da))return![];}return!![];}}if(_0x33bddb[_0x12524c(0x27a)](/<SHOW IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4cdd46=JSON['parse']('['+RegExp['$1'][_0x12524c(0x27a)](/\d+/g)+']');for(const _0x3aa573 of _0x4cdd46){if(_0xd92aa5[_0x12524c(0x2dd)](_0x3aa573))return!![];}return![];}else{if(_0x33bddb[_0x12524c(0x27a)](/<SHOW IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0xb9451a=RegExp['$1'][_0x12524c(0x1a3)](',');for(const _0x396b58 of _0xb9451a){const _0x519aba=DataManager['getSkillIdWithName'](_0x396b58);if(!_0x519aba)continue;if(_0xd92aa5[_0x12524c(0x2dd)](_0x519aba))return!![];}return![];}}if(_0x33bddb[_0x12524c(0x27a)](/<HIDE IF LEARNED[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x34f33a=JSON[_0x12524c(0x138)]('['+RegExp['$1'][_0x12524c(0x27a)](/\d+/g)+']');for(const _0x436591 of _0x34f33a){if(!_0xd92aa5[_0x12524c(0x2dd)](_0x436591))return!![];}return![];}else{if(_0x33bddb['match'](/<HIDE IF LEARNED[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x55d7ed=RegExp['$1'][_0x12524c(0x1a3)](',');for(const _0x6e30f3 of _0x55d7ed){const _0xfdbf7=DataManager[_0x12524c(0x28d)](_0x6e30f3);if(!_0xfdbf7)continue;if(!_0xd92aa5['isLearnedSkill'](_0xfdbf7))return!![];}return![];}}if(_0x33bddb[_0x12524c(0x27a)](/<HIDE IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1db415=JSON[_0x12524c(0x138)]('['+RegExp['$1'][_0x12524c(0x27a)](/\d+/g)+']');for(const _0x1c5f19 of _0x1db415){if(!_0xd92aa5['isLearnedSkill'](_0x1c5f19))return!![];}return![];}else{if(_0x33bddb[_0x12524c(0x27a)](/<HIDE IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x4137f8=RegExp['$1'][_0x12524c(0x1a3)](',');for(const _0x3c5963 of _0x4137f8){const _0x2151bd=DataManager[_0x12524c(0x28d)](_0x3c5963);if(!_0x2151bd)continue;if(!_0xd92aa5[_0x12524c(0x2dd)](_0x2151bd))return!![];}return![];}}if(_0x33bddb[_0x12524c(0x27a)](/<HIDE IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x562a41=JSON['parse']('['+RegExp['$1'][_0x12524c(0x27a)](/\d+/g)+']');for(const _0x39014b of _0x562a41){if(_0xd92aa5[_0x12524c(0x2dd)](_0x39014b))return![];}return!![];}else{if(_0x33bddb[_0x12524c(0x27a)](/<HIDE IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x548f05=RegExp['$1'][_0x12524c(0x1a3)](',');for(const _0x10d259 of _0x548f05){const _0xf53127=DataManager['getSkillIdWithName'](_0x10d259);if(!_0xf53127)continue;if(_0xd92aa5[_0x12524c(0x2dd)](_0xf53127))return![];}return!![];}}if(_0x33bddb[_0x12524c(0x27a)](/<SHOW IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5e6a7e=JSON['parse']('['+RegExp['$1'][_0x12524c(0x27a)](/\d+/g)+']');for(const _0x1b24d7 of _0x5e6a7e){if(!_0xd92aa5[_0x12524c(0x1b1)](_0x1b24d7))return![];}return!![];}else{if(_0x33bddb['match'](/<SHOW IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0xe9b345=RegExp['$1'][_0x12524c(0x1a3)](',');for(const _0x323b20 of _0xe9b345){const _0x34a601=DataManager[_0x12524c(0x28d)](_0x323b20);if(!_0x34a601)continue;if(!_0xd92aa5['hasSkill'](_0x34a601))return![];}return!![];}}if(_0x33bddb['match'](/<SHOW IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x15c49f=JSON[_0x12524c(0x138)]('['+RegExp['$1'][_0x12524c(0x27a)](/\d+/g)+']');for(const _0x3d73c7 of _0x15c49f){if(!_0xd92aa5[_0x12524c(0x1b1)](_0x3d73c7))return![];}return!![];}else{if(_0x33bddb[_0x12524c(0x27a)](/<SHOW IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x1bdc1c=RegExp['$1'][_0x12524c(0x1a3)](',');for(const _0x4230b7 of _0x1bdc1c){const _0x5c3df1=DataManager[_0x12524c(0x28d)](_0x4230b7);if(!_0x5c3df1)continue;if(!_0xd92aa5[_0x12524c(0x1b1)](_0x5c3df1))return![];}return!![];}}if(_0x33bddb[_0x12524c(0x27a)](/<SHOW IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5acf61=JSON[_0x12524c(0x138)]('['+RegExp['$1'][_0x12524c(0x27a)](/\d+/g)+']');for(const _0x1deba5 of _0x5acf61){if(_0xd92aa5[_0x12524c(0x1b1)](_0x1deba5))return!![];}return![];}else{if(_0x33bddb[_0x12524c(0x27a)](/<SHOW IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x39cf23=RegExp['$1'][_0x12524c(0x1a3)](',');for(const _0x1f0ac7 of _0x39cf23){const _0x15e2de=DataManager['getSkillIdWithName'](_0x1f0ac7);if(!_0x15e2de)continue;if(_0xd92aa5[_0x12524c(0x1b1)](_0x15e2de))return!![];}return![];}}if(_0x33bddb[_0x12524c(0x27a)](/<HIDE IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x377d64=JSON['parse']('['+RegExp['$1'][_0x12524c(0x27a)](/\d+/g)+']');for(const _0x1eb9f3 of _0x377d64){if(!_0xd92aa5['hasSkill'](_0x1eb9f3))return!![];}return![];}else{if(_0x33bddb[_0x12524c(0x27a)](/<HIDE IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x121262=RegExp['$1'][_0x12524c(0x1a3)](',');for(const _0x51eafc of _0x121262){const _0x35fa6b=DataManager['getSkillIdWithName'](_0x51eafc);if(!_0x35fa6b)continue;if(!_0xd92aa5['hasSkill'](_0x35fa6b))return!![];}return![];}}if(_0x33bddb[_0x12524c(0x27a)](/<HIDE IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x9a36dd=JSON[_0x12524c(0x138)]('['+RegExp['$1'][_0x12524c(0x27a)](/\d+/g)+']');for(const _0x2fede2 of _0x9a36dd){if(!_0xd92aa5[_0x12524c(0x1b1)](_0x2fede2))return!![];}return![];}else{if(_0x33bddb[_0x12524c(0x27a)](/<HIDE IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x262576=RegExp['$1'][_0x12524c(0x1a3)](',');for(const _0x35a3bb of _0x262576){const _0x68e660=DataManager[_0x12524c(0x28d)](_0x35a3bb);if(!_0x68e660)continue;if(!_0xd92aa5['hasSkill'](_0x68e660))return!![];}return![];}}if(_0x33bddb[_0x12524c(0x27a)](/<HIDE IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x52a78b=JSON['parse']('['+RegExp['$1'][_0x12524c(0x27a)](/\d+/g)+']');for(const _0x58a3dc of _0x52a78b){if(_0xd92aa5['hasSkill'](_0x58a3dc))return![];}return!![];}else{if(_0x33bddb['match'](/<HIDE IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)){const _0x188916=RegExp['$1'][_0x12524c(0x1a3)](',');for(const _0x3ad8f7 of _0x188916){const _0x2db963=DataManager[_0x12524c(0x28d)](_0x3ad8f7);if(!_0x2db963)continue;if(_0xd92aa5[_0x12524c(0x1b1)](_0x2db963))return![];}return!![];}}return!![];},Window_SkillList[_0x6967b(0x20d)][_0x6967b(0x1d4)]=function(_0x4315ed){const _0x3518c0=_0x6967b,_0x438a95=_0x4315ed[_0x3518c0(0x12d)],_0x15b274=VisuMZ[_0x3518c0(0x2cc)]['skillVisibleJS'];return _0x15b274[_0x4315ed['id']]?_0x15b274[_0x4315ed['id']][_0x3518c0(0x106)](this,_0x4315ed):!![];},VisuMZ[_0x6967b(0x2cc)]['Window_SkillList_drawItem']=Window_SkillList['prototype'][_0x6967b(0x1c6)],Window_SkillList[_0x6967b(0x20d)][_0x6967b(0x1c6)]=function(_0x441474){const _0xf748=_0x6967b,_0x6ded86=this[_0xf748(0x171)](_0x441474),_0x31c1b1=_0x6ded86['name'];if(_0x6ded86)this[_0xf748(0x230)](_0x6ded86);VisuMZ[_0xf748(0x2cc)]['Window_SkillList_drawItem']['call'](this,_0x441474);if(_0x6ded86)_0x6ded86[_0xf748(0x2f6)]=_0x31c1b1;},Window_SkillList['prototype'][_0x6967b(0x230)]=function(_0x24e751){const _0x315db5=_0x6967b;if(_0x24e751&&_0x24e751[_0x315db5(0x12d)][_0x315db5(0x27a)](/<LIST NAME:[ ](.*)>/i)){_0x24e751['name']=String(RegExp['$1'])[_0x315db5(0x190)]();for(;;){if(_0x24e751[_0x315db5(0x2f6)]['match'](/\\V\[(\d+)\]/gi))_0x24e751[_0x315db5(0x2f6)]=_0x24e751[_0x315db5(0x2f6)]['replace'](/\\V\[(\d+)\]/gi,(_0x6193ea,_0x1748ee)=>$gameVariables[_0x315db5(0x1c2)](parseInt(_0x1748ee)));else break;}}},Window_SkillList[_0x6967b(0x20d)][_0x6967b(0x252)]=function(_0x53249d,_0x493921,_0x4706df,_0x1ca20a){const _0x1fc823=_0x6967b;Window_Base[_0x1fc823(0x20d)][_0x1fc823(0x252)][_0x1fc823(0x106)](this,this[_0x1fc823(0x273)],_0x53249d,_0x493921,_0x4706df,_0x1ca20a);},Window_SkillList[_0x6967b(0x20d)][_0x6967b(0x2dc)]=function(_0x7ab0d8){const _0x3e14da=_0x6967b;this[_0x3e14da(0x240)]=_0x7ab0d8,this[_0x3e14da(0x1a1)]();},VisuMZ[_0x6967b(0x2cc)][_0x6967b(0x262)]=Window_SkillList['prototype'][_0x6967b(0x1a6)],Window_SkillList[_0x6967b(0x20d)][_0x6967b(0x1a6)]=function(){const _0x4bd534=_0x6967b;VisuMZ[_0x4bd534(0x2cc)][_0x4bd534(0x262)][_0x4bd534(0x106)](this),this[_0x4bd534(0x240)]&&this[_0x4bd534(0x240)][_0x4bd534(0x19f)]===Window_ShopStatus&&this[_0x4bd534(0x240)][_0x4bd534(0xd2)](this[_0x4bd534(0x2a5)]());};