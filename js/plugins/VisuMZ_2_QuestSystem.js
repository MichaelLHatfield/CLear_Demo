//=============================================================================
// VisuStella MZ - Quest Journal System
// VisuMZ_2_QuestSystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_QuestSystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.QuestSystem = VisuMZ.QuestSystem || {};
VisuMZ.QuestSystem.version = 1.13;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.13] [QuestSystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Quest_Journal_System_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * A quest journal is a very important tool provided by game developers for the
 * players. It lists various quests, missions, and objectives that the player
 * can pursue in order to progress further into the game. This can be helpful
 * in reminding the player what needs to be done in the event the player can
 * forget what things there are to do in a vast and large RPG world.
 *
 * This plugin places a quest journal system into your RPG Maker MZ game. You
 * can set up how the quest journal appears, move its windows around and/or
 * reshape them to fit your game.
 *
 * You can adjust the quest's title, display a difficulty level, remind the
 * player who the quest is from, where that quest is from, various dynamic
 * descriptions explaining the quest, a list of objectives to make, a list of
 * rewards that will be given to the player once the quest is complete, and any
 * subtext footnotes and quotes you may wish to insert into each quest.
 *
 * *NOTE*
 *
 * Keep in mind that while this plugin does enable a quest journal system into
 * your game, this plugin will NOT automate it. If you have a quest enabled, it
 * is still up to you to add the quest properly into the journal, set its many
 * objectives, when the other objectives appear, what the rewards are, and then
 * giving out the rewards yourself manually. The purpose of this plugin is to
 * simply serve as a visual record for your player to see what quests have been
 * handed down to him or her.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Unlimited quest categories.
 * * Unlimited quest slots.
 * * Full control over what appears in the quest journal system and how it
 *   appears in-game.
 * * Update quest descriptions, objectives, rewards, subtexts, etc. mid-game
 *   through the use of Plugin Commands.
 * * A dedicated quest menu that's accessible from the Main Menu or by
 *   Plugin Command call.
 * * A quest tracker that appears in the map scene to keep the player updated
 *   on how far they are progressing in their current quest.
 * * Options for the player to show/hide the quest tracker and reposition its
 *   location on the screen.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Explanation - Categories and Quests
 * ============================================================================
 *
 * The following is an explanation on the differences between Categories and
 * Quests for the usage of this plugin.
 *
 * ---
 *
 * Categories
 *
 * Quest Categories separate the quest types in your game. These can be used to
 * help players differentiate which are story-driven quests, which are optional
 * quests, recurring quests, etc. These have limited settings, but serve as
 * containers for quests that fall under its category.
 *
 * ---
 *
 * Plugin Parameters > Categories > Category Name:
 *
 * This is the category's name. It appears however you type it using text
 * codes, allowing you to color-code it if needed.
 *
 * ---
 *
 * Plugin Parameters > Categories > Quests:
 * 
 * These contain the quests that are listed under this category. Enter in as
 * many as needed/desired.
 *
 * ---
 *
 * Quests
 *
 * Each Quest Category will contain a list of quests that can appear in-game.
 * These individual quests make up the meat and bones of the Quest System and
 * will serve to relay information to the player on what he/she needs to do in
 * order to make progress in your game.
 *
 * ---
 *
 * Plugin Parameters > General > Log Window > Quest Log
 *
 * This determines how the template used by the quest logs to parse information
 * regarding the quests themselves. By default, they are formatted like such:
 *
 * ---
 *
 * \{[[Title]]\}
 * \c[4]Level:\c[0] [[Difficulty]]
 * \c[4]From:\c[0] [[From]]
 * \c[4]Location:\c[0] [[Location]]
 * 
 * \c[4]Description:\c[0]
 * [[Description]]
 * 
 * \c[4]Objectives:\c[0]
 * [[Objectives]]
 * 
 * \c[4]Rewards:\c[0]
 * [[Rewards]]
 * 
 * [[Subtext]]
 * 
 * [[Quote]]
 *
 * ---
 * 
 * Each [[Marker]] is to be replaced by the quest date related to them.
 *
 * - [[Title]] - Inserts the title of the quest.
 * 
 * - [[RawTitle]] - Inserts the title of the quest without any text codes
 *   removed. Keep in mind that icons do NOT resize based on the text size.
 *
 * - [[Difficulty]] - Inserts the quest difficulty text.
 *
 * - [[From]] - Inserts the quest origin text.
 *
 * - [[Location]] - Inserts the quest location text.
 *
 * - [[Description]] - Inserts the currently active quest description.
 *   - The quest description can change depending on which Description ID
 *     is currently active for that quest.
 *
 * - [[Objectives]] - Inserts a list of the visible quest objectives.
 *   - The quest objectives visible to the player will be determined by
 *     the quest's Visible Objectives settings and any Plugin Commands
 *     used to alter which objectives are visible and what state they are
 *     currently in (known, completed, failed).
 *
 * - [[Rewards]] - Inserts a list of visible quest rewards.
 *   - The quest rewards visible to the player will be determined by the
 *     quest's Visible Rewards settings and any Plugin Commands used to
 *     alter which rewards are visible and what state they are currently
 *     in (known, claimed, denied).
 *
 * - [[Subtext]] - Inserts the currently active quest subtext.
 *   - The quest subtext can change depending on which Subtext ID is
 *     currently active for that quest.
 *
 * - [[Quote]] - Inserts the currently active quest quote.
 *   - The quest quote can change depending on which Quote ID is
 *     currently active for that quest.
 *
 * ---
 *
 * Each of the following aspects of the quests can be changed through the usage
 * of Plugin Commands:
 *
 * - Description
 * - Objectives
 * - Rewards
 * - Subtext
 * - Quote
 *
 * The following are the Plugin Commands that can change them:
 *
 * - Quest: Description Change
 * - Quest: Objectives Change
 * - Quest: Rewards Change
 * - Quest: Subtext Change
 * - Quest: Quote Change
 *
 * ---
 *
 * More information will be explained in their respective Plugin Parameter
 * sections further down in the help file.
 *
 * ============================================================================
 * Control Variable and Conditional Branch Usage
 * ============================================================================
 * 
 * For those wanting to use Control Variable event commands and/or Conditional
 * Branch event commands with the Quest Journal System plugin, you can insert
 * the following functions into the "Script" input fields of the respective
 * event commands.
 * 
 * These are new JavaScript functions added through this plugin and will not
 * work without it.
 * 
 * ---
 * 
 * === Control Variable Script Functions ===
 * 
 * These are newly added JavaScript functions that return a numeric value.
 * The functions are best used with the Control Variable script input field.
 * 
 * ---
 * 
 * totalQuestsAvailable()
 * 
 * - Returns the total number of quests available for the player.
 * 
 * ---
 * 
 * totalQuestsCompleted()
 * 
 * - Returns the total number of quests completed by the player.
 * 
 * ---
 * 
 * totalQuestsFailed()
 * 
 * - Returns the total number of quests failed by the player.
 * 
 * ---
 * 
 * totalQuestsRevealed()
 * 
 * - Returns the total number of quests visible to the player.
 * 
 * ---
 * 
 * totalQuestsInGame()
 * 
 * - Returns the total number of quests available in-game.
 * 
 * ---
 * 
 * getQuestDescriptionIndex(questKey)
 * 
 * - Returns the select quest's current description index ID.
 * - Replace 'questKey' with the 'Quest ID Key' of the desired quest to gather
 *   data from. You can find out what the 'Quest ID Key' is in the plugin's
 *   parameters > Quest Categories > target category > Quests > selected quest
 *   > Quest ID Key.
 * - Insert quotes around the 'questKey' to ensure it works.
 * - Example: getQuestDescriptionIndex('Welcome')
 * 
 * ---
 * 
 * totalVisibleQuestObjectives(questKey)
 * 
 * - Returns the total number of visible quest objectives for selected quest.
 * - Replace 'questKey' with the 'Quest ID Key' of the desired quest to gather
 *   data from. You can find out what the 'Quest ID Key' is in the plugin's
 *   parameters > Quest Categories > target category > Quests > selected quest
 *   > Quest ID Key.
 * - Insert quotes around the 'questKey' to ensure it works.
 * - Example: totalVisibleQuestObjectives('Welcome')
 * 
 * ---
 * 
 * totalQuestObjectives(questKey)
 * 
 * - Returns the total number of quest objectives for selected quest.
 * - Replace 'questKey' with the 'Quest ID Key' of the desired quest to gather
 *   data from. You can find out what the 'Quest ID Key' is in the plugin's
 *   parameters > Quest Categories > target category > Quests > selected quest
 *   > Quest ID Key.
 * - Insert quotes around the 'questKey' to ensure it works.
 * - Example: totalQuestObjectives('Welcome')
 * 
 * ---
 * 
 * totalVisibleQuestRewards(questKey)
 * 
 * - Returns the total number of visible quest rewards for selected quest.
 * - Replace 'questKey' with the 'Quest ID Key' of the desired quest to gather
 *   data from. You can find out what the 'Quest ID Key' is in the plugin's
 *   parameters > Quest Categories > target category > Quests > selected quest
 *   > Quest ID Key.
 * - Insert quotes around the 'questKey' to ensure it works.
 * - Example: totalVisibleQuestRewards('Welcome')
 * 
 * ---
 * 
 * totalQuestRewards(questKey)
 * 
 * - Returns the total number of quest rewards for selected quest.
 * - Replace 'questKey' with the 'Quest ID Key' of the desired quest to gather
 *   data from. You can find out what the 'Quest ID Key' is in the plugin's
 *   parameters > Quest Categories > target category > Quests > selected quest
 *   > Quest ID Key.
 * - Insert quotes around the 'questKey' to ensure it works.
 * - Example: totalQuestRewards('Welcome')
 * 
 * ---
 * 
 * getQuestSubtextIndex(questKey)
 * 
 * - Returns the select quest's current subtext index ID.
 * - Replace 'questKey' with the 'Quest ID Key' of the desired quest to gather
 *   data from. You can find out what the 'Quest ID Key' is in the plugin's
 *   parameters > Quest Categories > target category > Quests > selected quest
 *   > Quest ID Key.
 * - Insert quotes around the 'questKey' to ensure it works.
 * - Example: getQuestSubtextIndex('Welcome')
 * 
 * ---
 * 
 * getQuestQuoteIndex(questKey)
 * 
 * - Returns the select quest's current subtext index ID.
 * - Replace 'questKey' with the 'Quest ID Key' of the desired quest to gather
 *   data from. You can find out what the 'Quest ID Key' is in the plugin's
 *   parameters > Quest Categories > target category > Quests > selected quest
 *   > Quest ID Key.
 * - Insert quotes around the 'questKey' to ensure it works.
 * - Example: getQuestQuoteIndex('Welcome')
 * 
 * ---
 * 
 * === Conditional Branch Script Functions ===
 * 
 * These are newly added JavaScript functions that return a true/false value.
 * The functions are best used with the Conditional Branch script input field.
 * 
 * ---
 * 
 * isQuestObjectiveCompleted(questKey, objectiveID)
 * 
 * - Returns a true/false value depending on the selected quest's objective
 *   and if it is completed.
 * - Replace 'questKey' with the 'Quest ID Key' of the desired quest to gather
 *   data from. You can find out what the 'Quest ID Key' is in the plugin's
 *   parameters > Quest Categories > target category > Quests > selected quest
 *   > Quest ID Key.
 * - Insert quotes around the 'questKey' to ensure it works.
 * - Replace 'objectiveID' with the numeric ID of the quest objective you want
 *   to check.
 * - Example: isQuestObjectiveCompleted('Welcome', 1)
 * 
 * ---
 * 
 * isQuestObjectiveFailed(questKey, objectiveID)
 * 
 * - Returns a true/false value depending on the selected quest's objective
 *   and if it is failed.
 * - Replace 'questKey' with the 'Quest ID Key' of the desired quest to gather
 *   data from. You can find out what the 'Quest ID Key' is in the plugin's
 *   parameters > Quest Categories > target category > Quests > selected quest
 *   > Quest ID Key.
 * - Insert quotes around the 'questKey' to ensure it works.
 * - Replace 'objectiveID' with the numeric ID of the quest objective you want
 *   to check.
 * - Example: isQuestObjectiveFailed('Welcome', 1)
 * 
 * ---
 * 
 * isQuestObjectiveUncleared(questKey, objectiveID)
 * 
 * - Returns a true/false value depending on the selected quest's objective
 *   and if it is uncleared.
 * - Replace 'questKey' with the 'Quest ID Key' of the desired quest to gather
 *   data from. You can find out what the 'Quest ID Key' is in the plugin's
 *   parameters > Quest Categories > target category > Quests > selected quest
 *   > Quest ID Key.
 * - Insert quotes around the 'questKey' to ensure it works.
 * - Replace 'objectiveID' with the numeric ID of the quest objective you want
 *   to check.
 * - Example: isQuestObjectiveUncleared('Welcome', 1)
 * 
 * ---
 * 
 * isQuestRewardClaimed(questKey, rewardID)
 * 
 * - Returns a true/false value depending on the selected quest's reward
 *   and if it is claimed.
 * - Replace 'questKey' with the 'Quest ID Key' of the desired quest to gather
 *   data from. You can find out what the 'Quest ID Key' is in the plugin's
 *   parameters > Quest Categories > target category > Quests > selected quest
 *   > Quest ID Key.
 * - Insert quotes around the 'questKey' to ensure it works.
 * - Replace 'objectiveID' with the numeric ID of the quest reward you want
 *   to check.
 * - Example: isQuestRewardClaimed('Welcome', 1)
 * 
 * ---
 * 
 * isQuestRewardDenied(questKey, rewardID)
 * 
 * - Returns a true/false value depending on the selected quest's reward
 *   and if it is denied.
 * - Replace 'questKey' with the 'Quest ID Key' of the desired quest to gather
 *   data from. You can find out what the 'Quest ID Key' is in the plugin's
 *   parameters > Quest Categories > target category > Quests > selected quest
 *   > Quest ID Key.
 * - Insert quotes around the 'questKey' to ensure it works.
 * - Replace 'objectiveID' with the numeric ID of the quest reward you want
 *   to check.
 * - Example: isQuestRewardDenied('Welcome', 1)
 * 
 * ---
 * 
 * isQuestRewardUnclaimed(questKey, rewardID)
 * 
 * - Returns a true/false value depending on the selected quest's reward
 *   and if it is unclaimed.
 * - Replace 'questKey' with the 'Quest ID Key' of the desired quest to gather
 *   data from. You can find out what the 'Quest ID Key' is in the plugin's
 *   parameters > Quest Categories > target category > Quests > selected quest
 *   > Quest ID Key.
 * - Insert quotes around the 'questKey' to ensure it works.
 * - Replace 'objectiveID' with the numeric ID of the quest reward you want
 *   to check.
 * - Example: isQuestRewardUnclaimed('Welcome', 1)
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
 * === Action Tracking-Related Notetags ===
 * 
 * ---
 *
 * <Variable id On Use: +x>
 * <Variable id On Use: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Whenever any actor uses this specific skill or item, increase or decrease
 *   the target variable by a certain amount.
 * - Replace 'id' with the Variable ID you wish to alter.
 * - Replace 'x' with the increase or decrease in value for the variable.
 *
 * ---
 * 
 * === Enemy Tracking-Related Notetags ===
 * 
 * ---
 *
 * <Variable id On Death: +x>
 * <Variable id On Death: -x>
 *
 * - Used for: Enemy Notetags
 * - Whenever this specific enemy dies, increase or decrease the target
 *   variable by a certain amount.
 * - Replace 'id' with the Variable ID you wish to alter.
 * - Replace 'x' with the increase or decrease in value for the variable.
 *
 * ---
 * 
 * === Item Tracking-Related Notetags ===
 * 
 * ---
 *
 * <Variable id On Gain: +x>
 * <Variable id On Gain: -x>
 *
 * - Used Item, Weapon, Armor Notetags
 * - Whenever the party gains the specific item, weapon, or armor, increase or
 *   decrease the target variable by a certai amount.
 * - Replace 'id' with the Variable ID you wish to alter.
 * - Replace 'x' with the increase or decrease in value for the variable.
 * 
 * ---
 *
 * <Variable id On Lose: +x>
 * <Variable id On Lose: -x>
 *
 * - Used Item, Weapon, Armor Notetags
 * - Whenever the party loses the specific item, weapon, or armor, increase or
 *   decrease the target variable by a certai amount.
 * - Replace 'id' with the Variable ID you wish to alter.
 * - Replace 'x' with the increase or decrease in value for the variable.
 *
 * ---
 *
 * <Track With Variable id>
 *
 * - Used Item, Weapon, Armor Notetags
 * - Whenever there is a change made to the specific item, weapon, or armor,
 *   set the value of the target variable to the number of items owned.
 * - Replace 'id' with the Variable ID you wish to alter.
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
 * === Quest Plugin Commands ===
 * 
 * ---
 *
 * Quest: Add/Complete/Fail/Remove
 * - Adds quest(s) to be known/completed/failed.
 * - Or removes them.
 *
 *   Quest Keys:
 *   - Insert the quest key(s) here.
 *   - Each quest key must be unique.
 *
 *   Status:
 *   - Change the status to this.
 *     - Add to Known
 *     - Add to Completed
 *     - Add to Failed
 *     - Remove from All
 *
 * ---
 *
 * Quest: Description Change
 * - Changes the description of the quest(s) to a ID.
 *
 *   Quest Keys:
 *   - Insert the quest key(s) here.
 *   - Each quest key must be unique.
 *
 *   Description ID:
 *   - Change the description of the quest(s) to a different ID.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Quest: Objectives Change
 * - Changes the objective(s) status of the quest(s).
 *
 *   Quest Keys:
 *   - Insert the quest key(s) here.
 *   - Each quest key must be unique.
 *
 *   Objective ID(s):
 *   - Select the objective ID(s) to change.
 *   - You may use JavaScript code.
 *
 *   Status:
 *   - Change the status of the objective(s) to this.
 *     - Show Objective(s)
 *     - Complete Objective(s)
 *     - Fail Objective(s)
 *     - Remove Objective(s)
 *
 * ---
 *
 * Quest: Quote Change
 * - Changes the quote of the quest(s) to a ID.
 *
 *   Quest Keys:
 *   - Insert the quest key(s) here.
 *   - Each quest key must be unique.
 *
 *   Subtext ID:
 *   - Change the quote of the quest(s) to a different ID.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Quest: Rewards Change
 * - Changes the reward(s) status of the quest(s).
 *
 *   Quest Keys:
 *   - Insert the quest key(s) here.
 *   - Each quest key must be unique.
 *
 *   Reward ID(s):
 *   - Select the reward ID(s) to change.
 *   - You may use JavaScript code.
 *
 *   Status:
 *   - Change the status of the reward(s) to this.
 *     - Show Reward(s)
 *     - Claim Reward(s)
 *     - Deny Reward(s)
 *     - Remove Reward(s)
 *
 * ---
 *
 * Quest: Subtext Change
 * - Changes the subtext of the quest(s) to a ID.
 *
 *   Quest Keys:
 *   - Insert the quest key(s) here.
 *   - Each quest key must be unique.
 *
 *   Subtext ID:
 *   - Change the subtext of the quest(s) to a different ID.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Tracker Plugin Commands ===
 * 
 * ---
 *
 * Tracker: Change Quest
 * - Changes the tracked quest.
 *
 *   Quest Key:
 *   - Insert the quest key here.
 *
 * ---
 *
 * Tracker: Refresh Window
 * - Refreshes the quest tracker window.
 *
 * ---
 *
 * Tracker: Show/Hide Window
 * - Can forcefully hide window.
 * - Showing will depend on the player's Options setting.
 *
 *   Show/Hide?:
 *   - Shows/hides the tracker window on the map.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Call Scene_Quest
 * - Opens Scene_Quest for the player.
 * - Does not work in battle.
 *
 * ---
 *
 * System: Enable Quests in Menu?
 * - Enables/disables quest menu inside the main menu.
 *
 *   Enable/Disable?:
 *   - Enables/disables quest menu inside the main menu.
 *
 * ---
 *
 * System: Show Quests in Menu?
 * - Shows/hides quest menu inside the main menu.
 *
 *   Show/Hide?:
 *   - Shows/hides quest menu inside the main menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * The general settings determine various aspects of the Quest System plugin
 * from the quests that appear at the start of the game to how it's displayed
 * inside menus.
 *
 * ---
 *
 * Starting Quests
 * 
 *   Known Quests:
 *   - Which quests are known at the start of the game?
 *   - Insert their keys here.
 * 
 *   Completed Quests:
 *   - Which quests are completed at the start of the game?
 *   - Insert their keys here.
 * 
 *   Failed Quests:
 *   - Which quests are failed at the start of the game?
 *   - Insert their keys here.
 * 
 *   Tracked Quest:
 *   - Which quest is tracked at the start of the game?
 *
 * ---
 *
 * Scene_Quest
 *
 * ---
 * 
 * Scene_Quest > Background Settings:
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
 * Scene_Quest > Vocab
 *
 * ---
 * 
 * Scene_Quest > Vocab > Command Window
 * 
 *   Command: Known:
 *   - Text used to display known quests.
 *
 *   Command: Completed:
 *   - Text used to display completed quests.
 * 
 *   Command: Failed:
 *   - Text used to display failed quests.
 *
 * ---
 *
 * Scene_Quest > Vocab > Label Window
 * 
 *   Empty Title:
 *   - Text displayed in the Label Window when no quest is selected.
 *
 * ---
 *
 * Scene_Quest > Vocab > List Window
 * 
 *   Open Categories:
 *   - Text format for an open category.
 *   - %1 - Category Name, %2 - Quest Amount
 * 
 *   Closed Categories:
 *   - Text format for a closed category.
 *   - %1 - Category Name, %2 - Quest Amount
 * 
 *   No Quest Listed:
 *   - Text when no quest is listed.
 * 
 *   Tracked Quest:
 *   - Text format for a tracked quest.
 *   - %1 - Tracked Quest's Name
 *
 * ---
 *
 * Scene_Quest > Vocab > Log Window
 * 
 *   Empty Message:
 *   - Text displayed when no quest is selected.
 *
 *     JS: On Load:
 *     - Runs code upon making the empty message.
 *     - Useful for setting up variables.
 * 
 *   Quest Log:
 *   - Text format for Quest Log Window.
 *   - Instructions:
 *     - Insert the [[Keyword]] marks in the text where you want certain parts
 *       of the quest to appear.
 *
 *       - [[Title]] - Inserts the title of the quest.
 *
 *       - [[Difficulty]] - Inserts the quest difficulty text.
 *
 *       - [[From]] - Inserts the quest origin text.
 *
 *       - [[Location]] - Inserts the quest location text.
 *
 *       - [[Description]] - Inserts the currently active quest description.
 *         - The quest description can change depending on which Description ID
 *           is currently active for that quest.
 *
 *       - [[Objectives]] - Inserts a list of the visible quest objectives.
 *         - The quest objectives visible to the player will be determined by
 *           the quest's Visible Objectives settings and any Plugin Commands
 *           used to alter which objectives are visible and what state they are
 *           currently in (known, completed, failed).
 *
 *       - [[Rewards]] - Inserts a list of visible quest rewards.
 *         - The quest rewards visible to the player will be determined by the
 *           quest's Visible Rewards settings and any Plugin Commands used to
 *           alter which rewards are visible and what state they are currently
 *           in (known, claimed, denied).
 *
 *       - [[Subtext]] - Inserts the currently active quest subtext.
 *         - The quest subtext can change depending on which Subtext ID is
 *           currently active for that quest.
 *
 *       - [[Quote]] - Inserts the currently active quest quote.
 *         - The quest quote can change depending on which Quote ID is
 *           currently active for that quest.
 * 
 *   Objective (Known):
 *   - Text format for known objectives.
 *   - %1 - Objective Text
 * 
 *   Objective (Done):
 *   - Text format for complete objectives.
 *   - %1 - Objective Text
 * 
 *   Objective (Failed):
 *   - Text format for failed objectives.
 *   - %1 - Objective Text
 * 
 *   Reward (Known):
 *   - Text format for normal rewards.
 *   - %1 - Reward Text
 * 
 *   Reward (Claimed):
 *   - Text format for claimed rewards.
 *   - %1 - Reward Text
 * 
 *   Reward (Denied):
 *   - Text format for denied rewards.
 *   - %1 - Reward Text
 *
 * ---
 *
 * Scene_Quest > Vocab > Button Assist Window
 * 
 *   Scroll Up/Down:
 *   - Text for Page Up/Down to scroll log window.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Tracker:
 *   - Text for tracking quests.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Expand:
 *   - Text for expanding categories.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Collapse:
 *   - Text for collapsing categories.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * Scene_Quest > Icons
 * 
 *   Icon: Known:
 *   - Icon used for this command.
 * 
 *   Icon: Completed:
 *   - Icon used for this command.
 * 
 *   Icon: Failed:
 *   - Icon used for this command.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Quest Category Settings
 * ============================================================================
 *
 * Quest Categories separate the quest types in your game. These can be used to
 * help players differentiate which are story-driven quests, which are optional
 * quests, recurring quests, etc. These have limited settings, but serve as
 * containers for quests that fall under its category.
 *
 * ---
 *
 * Category
 * 
 *   Category Name:
 *   - This category's name.
 *   - You may use text codes.
 * 
 *   Quests:
 *   - A list of quests listed under this category.
 *   - Quests will be listed in the same order as this parameter.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Quest Settings
 * ============================================================================
 *
 * Each Quest Category will contain a list of quests that can appear in-game.
 * These individual quests make up the meat and bones of the Quest System and
 * will serve to relay information to the player on what he/she needs to do in
 * order to make progress in your game.
 *
 * ---
 *
 * Quest
 * 
 *   Quest ID Key:
 *   - This quest's identification key. Quests require unique keys for the
 *     plugin to differentiate them.
 *   - It is VERY important that you keep this key unique from other quests in
 *     order for the Quest System to operate properly in your game.
 *
 * ---
 *
 * Header
 * 
 *   Title:
 *   - The title of the quest. This is what appears in-game.
 *   - You may use text codes.
 *   - In Plugin Parameters => General => Vocab => Log Window => Quest Log,
 *     this will replace the [[Title]] marker.
 * 
 *   Difficulty:
 *   - Difficulty level for this quest.
 *   - You may use text codes.
 *   - In Plugin Parameters => General => Vocab => Log Window => Quest Log,
 *     this will replace the [[Difficulty]] marker.
 * 
 *   From:
 *   - Insert the name of the one who issued this quest.
 *   - You may use text codes.
 *   - In Plugin Parameters => General => Vocab => Log Window => Quest Log,
 *     this will replace the [[From]] marker.
 * 
 *   Location:
 *   - Insert location name where this quest was issued.
 *   - You may use text codes.
 *   - In Plugin Parameters => General => Vocab => Log Window => Quest Log,
 *     this will replace the [[Location]] marker.
 * 
 *   Description:
 *   - Type out the description(s) used for this quest.
 *   - You may use text codes.
 *   - In Plugin Parameters => General => Vocab => Log Window => Quest Log,
 *     this will replace the [[Description]] marker.
 *   - The displayed description will depend on the Description ID set through
 *     Plugin Command.
 *   - If no Description ID is set through Plugin Commands, it will default to
 *     a default ID value of 1.
 *
 * ---
 *
 * Lists
 * 
 *   Objectives List:
 *   - The objectives to be completed for this quest.
 *   - You may use text codes.
 *   - In Plugin Parameters => General => Vocab => Log Window => Quest Log,
 *     this will replace the [[Objectives]] marker.
 *   - Depending on which ID's are set to visible, a list will created at the
 *     marker displaying each of the objectives.
 *    - This can be done thorugh the Visible Objectives parameter or through
 *      Plugin Commands.
 * 
 *   Visible Objectives:
 *   - The objectives that are visible from the start.
 * 
 *   Rewards List:
 *   - The reward list for this quest.
 *   - You may use text codes.
 *   - In Plugin Parameters => General => Vocab => Log Window => Quest Log,
 *     this will replace the [[Rewards]] marker.
 *   - Depending on which ID's are set to visible, a list will created at the
 *     marker displaying each of the rewards.
 *    - This can be done thorugh the Visible Rewards parameter or through
 *      Plugin Commands.
 * 
 *   Visible Rewards:
 *   - The rewards that are visible from the start.
 *
 * ---
 *
 * Footer
 * 
 *   Subtext:
 *   - Subtext to be displayed with the quest.
 *   - You may use text codes.
 *   - In Plugin Parameters => General => Vocab => Log Window => Quest Log,
 *     this will replace the [[Subtext]] marker.
 *   - The displayed description will depend on the Subtext ID set through
 *     Plugin Command.
 *   - If no Subtext ID is set through Plugin Commands, it will default to
 *     a default ID value of 1.
 * 
 *   Quotes:
 *   - Quotes to be displayed with the quest.
 *   - You may use text codes.
 *   - In Plugin Parameters => General => Vocab => Log Window => Quest Log,
 *     this will replace the [[Quote]] marker.
 *   - The displayed description will depend on the Quote ID set through
 *     Plugin Command.
 *   - If no Quote ID is set through Plugin Commands, it will default to
 *     a default ID value of 1.
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: On Load:
 *   - Runs code upon loading the quest in Scene_Quest.
 *   - Useful for setting up variables.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Quest Tracker Settings
 * ============================================================================
 *
 * The Quest Tracker Window is a window that appears on the map scene to
 * display the objectives (and other desired information) of the currently
 * tracked quest decided by the player.
 *
 * ---
 *
 * General
 *
 *   Tracker Format:
 *   - Text format for Quest Tracker Window.
 *   - Read help file for instructions.
 *
 * ---
 *
 * Options
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Add Show Tracker?:
 *   - Add the 'Show Tracker' option to the Options menu?
 * 
 *     Option Name:
 *     - Command name of the option.
 * 
 *   Add Position Tracker?:
 *   - Add the 'Position Tracker' option to the Options menu?
 * 
 *     Option Name:
 *     - Command name of the option.
 * 
 *     Option OFF:
 *     - Text displayed when the option is OFF.
 * 
 *     Option ON:
 *     - Text displayed when the option is ON.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Main Menu Settings
 * ============================================================================
 *
 * Set up the main menu defaults.
 *
 * ---
 *
 * Main Menu Settings
 * 
 *   Command Name:
 *   - Name of the 'Quest' option in the Main Menu.
 * 
 *   Show in Main Menu?:
 *   - Add the 'Quest' option to the Main Menu by default?
 * 
 *   Enable in Main Menu?:
 *   - Enable the 'Quest' option to the Main Menu by default?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_Quest.
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
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * These settings let you control the various windows that appear in the
 * Scene_Quest menu and the Quest Tracker Window that appears in Scene_Map.
 *
 * ---
 *
 * Command Window
 * 
 *   Show Failed Quests?:
 *   - Show/hide Failed Quests in the command window.
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Quest Label
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Log Window
 * 
 *   PageUp/Down Speed:
 *   - Scroll speed for PageUp/Down.
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 * 
 *   EXPERIMENTAL:
 * 
 *     Automatic Word Wrap?:
 *     - Enables/disables automatic word wrap.
 *     - Requires VisuMZ_1_MessageCore!
 *     - This feature is experimental. Word Wrap does not worth perfectly
 *       with the Log Window, although it performs well enough. This feature
 *       will be updated and completed at a later point in the future. Use it
 *       at your own discretion.
 *
 * ---
 *
 * List Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Tracker Window
 * 
 *   Window Scale:
 *   - How much do you want to scale the Tracker Window's size by?
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * ============================================================================
 * JavaScript Functions
 * ============================================================================
 *
 * These are some new JavaScript functions that you can use for the
 * 'JS: On Load' Plugin Parameter found in the Quest settings.
 *
 * Using these require you to have an adequate understanding of how JavaScript
 * works in order to successfully use it.
 *
 * ---
 *
 * $gameSystem.setQuestStatus(key, status)
 * - Changes the quest's completion status.
 * - Replace 'key' with Quest Key (include quotes).
 * - Replace 'status' with one of the following strings (include quotes):
 *   - 'known'
 *   - 'completed'
 *   - 'failed'
 *   - 'removed'
 *
 * Example: $gameSystem.setQuestStatus('exampleName', 'completed')
 *
 * ---
 *
 * $gameSystem.setQuestDescription(key, id)
 * - Changes the quest's description.
 * - Replace 'key' with Quest Key (include quotes).
 * - Replace 'id' with description ID to use.
 *
 * Example: $gameSystem.setQuestDescription('exampleName', 2)
 *
 * ---
 *
 * $gameSystem.setQuestObjectives(key, ids, status)
 * - Changes the quest's objectives.
 * - Replace 'key' with Quest Key (include quotes).
 * - Replace 'ids' with an array of ID's to use.
 * - Replace 'status' with one of the following strings (include quotes):
 *   - 'known'
 *   - 'completed'
 *   - 'failed'
 *   - 'removed'
 *
 * Example: $gameSystem.setQuestDescription('exampleName', [1, 2, 3], 'failed')
 *
 * ---
 *
 * $gameSystem.setQuestRewards(key, ids, status)
 * - Changes the quest's rewards.
 * - Replace 'key' with Quest Key (include quotes).
 * - Replace 'ids' with an array of ID's to use.
 * - Replace 'status' with one of the following strings (include quotes):
 *   - 'known'
 *   - 'claimed'
 *   - 'denied'
 *   - 'removed'
 *
 * Example: $gameSystem.setQuestRewards('exampleName', [1, 3, 5], 'claimed')
 *
 * ---
 *
 * $gameSystem.setQuestSubtext(key, id)
 * - Changes the quest's subtext.
 * - Replace 'key' with Quest Key (include quotes).
 * - Replace 'id' with subtext ID to use.
 *
 * Example: $gameSystem.questSubtext('exampleName', 3)
 *
 * ---
 *
 * $gameSystem.setQuestQuote(key, id)
 * - Changes the quest's quote.
 * - Replace 'key' with Quest Key (include quotes).
 * - Replace 'id' with quote ID to use.
 *
 * Example: $gameSystem.setQuestQuote('exampleName', 4)
 *
 * ---
 *
 * DISCLAIMER:
 *
 * Keep in mind that VisuStella is NOT responsible for your proficiency (or
 * otherwise) of JavaScript.
 *
 * If you get any errors with the custom code, it is up to YOU to fix it.
 * 
 * If you do not understand how any of this section works, do not be afraid.
 * It's not the end of the world.
 * 
 * You can still change the status of the quests and its objectives through the
 * usage of Plugin Commands.
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
 * - Yanfly
 * - Arisu
 * - Olivia
 * - Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.13: March 10, 2022
 * * Compatibility Update
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.12: July 9, 2021
 * * Feature Update!
 * ** Improved calculations for determining window size. Update made by Irina.
 * 
 * Version 1.11: January 15, 2021
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Feature!
 * ** Added new [[Marker]] to Quest Log format and Quest Tracker formats.
 * *** [[RawTitle]] - Inserts the title of the quest without any text codes
 *     removed. Keep in mind that icons do NOT resize based on the text size.
 * 
 * Version 1.10: December 11, 2020
 * * Bugs Fixed!
 * ** Quest tracking should now automatically remove itself once a quest is
 *    dubbed complete, failed, or removed. Fix made by Yanfly.
 * 
 * Version 1.09: November 29, 2020
 * * Bug Fixed!
 * ** The Button Assist Window will now properly display the text for expanding
 *    and collapsing quest categories. Fix made by Arisu.
 * 
 * Version 1.08: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: November 1, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Updates!
 * ** When multiple parallel events are occuring, they will no longer cause lag
 *    by inducing multiple refreshes at a time. Update by Olivia.
 * * New Features!
 * ** New Plugin Parameter added by Irina!
 * *** Plugin Parameters > Quest Tracker Settings > Tracker Format
 * **** Text format for Quest Tracker Window. This lets you customize the text
 *      that appears in the Quest Tracker instead of just having the title and
 *      the objectives.
 * 
 * Version 1.06: October 25, 2020
 * * Feature Update!
 * ** If Message Core is not detected, <ColorLock> and </ColorLock> notetags
 *    will be automatically removed. Added by Arisu.
 * 
 * Version 1.05: October 11, 2020
 * * Documentation Update!
 * ** "Control Variable and Conditional Branch Usage" section added for those
 *    who wish to gather data for the script input fields of the mentioned
 *    event commands.
 * 
 * Version 1.04: October 4, 2020
 * * Bug Fixes!
 * ** Quest Tracker window refreshes should no longer cause infinite loops when
 *    used with specific script calls. Fix made by Yanfly.
 * 
 * Version 1.03: September 20, 2020
 * * Documentation Update!
 * ** For all the new features!
 * * New Features!
 * ** New notetags added by Olivia!
 * ** <Variable id On Death: +x> and <Variable id On Death: -x> for enemies.
 * ** <Variable id On Gain: +x> and <Variable id On Gain: -x> for items,
 *    weapons, and armors.
 * ** <Variable id On Lose: +x> and <Variable id On Lose: -x> for items,
 *    weapons, and armors.
 * ** <Track With Variable id> for items, weapons, and armors.
 * ** <Variable id On Use: +x> and <Variable id On Use: -x> for items & skills.
 * 
 * Version 1.02: September 13, 2020
 * * Bugs Fixed!:
 * ** Quest Tracker Window should no longer flicker.
 * 
 * Version 1.01: September 6, 2020
 * * Bug Fixed!
 * ** Disabled track windows no longer appear on the screen for one frame after
 *    leaving a menu of any sort. Fix made by Yanfly.
 * ** Viewing the failed quests no longer crash the game. Fix made by Yanfly.
 * * Feature Update!
 * ** The following Plugin Commands will now automatically update the tracker
 *    if needed. Feature update by Yanfly.
 * *** Quest: Add/Complete/Fail/Remove
 * *** Quest: Description Change
 * *** Quest: Objectives Change
 * *** Quest: Quote Change
 * *** Quest: Rewards Change
 * *** Quest: Subtext Change
 *
 * Version 1.00: August 31, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QuestSet
 * @text Quest: Add/Complete/Fail/Remove
 * @desc Adds quest(s) to be known/completed/failed.
 * Or removes them.
 *
 * @arg Keys:arraystr
 * @text Quest Keys
 * @type string[]
 * @desc Insert the quest key(s) here.
 * Each quest key must be unique.
 * @default []
 *
 * @arg Status:str
 * @text Status
 * @type select
 * @option Add to Known
 * @value known
 * @option Add to Completed
 * @value completed
 * @option Add to Failed
 * @value failed
 * @option Remove from All
 * @value remove
 * @desc Change the status to this.
 * @default known
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QuestDescription
 * @text Quest: Description Change
 * @desc Changes the description of the quest(s) to a ID.
 *
 * @arg Keys:arraystr
 * @text Quest Keys
 * @type string[]
 * @desc Insert the quest key(s) here.
 * Each quest key must be unique.
 * @default []
 *
 * @arg TargetID:eval
 * @text Description ID
 * @desc Change the description of the quest(s) to a different ID.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QuestObjectives
 * @text Quest: Objectives Change
 * @desc Changes the objective(s) status of the quest(s).
 *
 * @arg Keys:arraystr
 * @text Quest Keys
 * @type string[]
 * @desc Insert the quest key(s) here.
 * Each quest key must be unique.
 * @default []
 *
 * @arg TargetIDs:arrayeval
 * @text Objective ID(s)
 * @type string[]
 * @desc Select the objective ID(s) to change.
 * You may use JavaScript code.
 * @default ["1"]
 *
 * @arg Status:str
 * @text Status
 * @type select
 * @option Show Objective(s)
 * @value show
 * @option Complete Objective(s)
 * @value complete
 * @option Fail Objective(s)
 * @value fail
 * @option Remove Objective(s)
 * @value remove
 * @desc Change the status of the objective(s) to this.
 * @default show
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QuestQuote
 * @text Quest: Quote Change
 * @desc Changes the quote of the quest(s) to a ID.
 *
 * @arg Keys:arraystr
 * @text Quest Keys
 * @type string[]
 * @desc Insert the quest key(s) here.
 * Each quest key must be unique.
 * @default []
 *
 * @arg TargetID:eval
 * @text Quote ID
 * @desc Change the quote of the quest(s) to a different ID.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QuestRewards
 * @text Quest: Rewards Change
 * @desc Changes the reward(s) status of the quest(s).
 *
 * @arg Keys:arraystr
 * @text Quest Keys
 * @type string[]
 * @desc Insert the quest key(s) here.
 * Each quest key must be unique.
 * @default []
 *
 * @arg TargetIDs:arrayeval
 * @text Reward ID(s)
 * @type string[]
 * @desc Select the reward ID(s) to change.
 * You may use JavaScript code.
 * @default ["1"]
 *
 * @arg Status:str
 * @text Status
 * @type select
 * @option Show Reward(s)
 * @value show
 * @option Claim Reward(s)
 * @value claim
 * @option Deny Reward(s)
 * @value deny
 * @option Remove Reward(s)
 * @value remove
 * @desc Change the status of the reward(s) to this.
 * @default show
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QuestSubtext
 * @text Quest: Subtext Change
 * @desc Changes the subtext of the quest(s) to a ID.
 *
 * @arg Keys:arraystr
 * @text Quest Keys
 * @type string[]
 * @desc Insert the quest key(s) here.
 * Each quest key must be unique.
 * @default []
 *
 * @arg TargetID:eval
 * @text Subtext ID
 * @desc Change the subtext of the quest(s) to a different ID.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TrackerChangeQuest
 * @text Tracker: Change Quest
 * @desc Changes the tracked quest.
 *
 * @arg Key:str
 * @text Quest Key
 * @desc Insert the quest key here.
 * @default Example
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TrackerRefreshWindow
 * @text Tracker: Refresh Window
 * @desc Refreshes the quest tracker window.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TrackerShowHide
 * @text Tracker: Show/Hide Window
 * @desc Can forcefully hide window.
 * Showing will depend on the player's Options setting.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Shows/hides the tracker window on the map.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemCallSceneQuest
 * @text System: Call Scene_Quest
 * @desc Opens Scene_Quest for the player.
 * Does not work in battle.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnableQuestMenu
 * @text System: Enable Quests in Menu?
 * @desc Enables/disables quest menu inside the main menu.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables quest menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowQuestMenu
 * @text System: Show Quests in Menu?
 * @desc Shows/hides quest menu inside the main menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides quest menu inside the main menu.
 * @default true
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
 * @param QuestSystem
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
 * @desc General settings for the Quest System.
 * @default {"StartingQuests":"","KnownQuests:arraystr":"[\"Welcome\",\"Example\",\"Plugin_Tutorial_Title\",\"Plugin_Tutorial_Difficulty\",\"Plugin_Tutorial_From\",\"Plugin_Tutorial_Description\",\"Plugin_Tutorial_Objectives\",\"Plugin_Tutorial_Rewards\",\"Plugin_Tutorial_Subtext\",\"Plugin_Tutorial_Quote\",\"Challenge_Plugin_Variables\",\"Challenge_Plugin_Switches\"]","CompletedQuests:arraystr":"[]","FailedQuests:arraystr":"[]","TrackedQuest:str":"Welcome","SceneQuest":"","Vocab":"","VocabCommandWindow":"","CommandWindow_Known_Text:str":"Available","CommandWindow_Completed_Text:str":"Completed","CommandWindow_Failed_Text:str":"Failed","VocabLabelWindow":"","EmptyTitleLabel:str":"\\i[186]Quest Journal","VocabListWindow":"","ListWindowCategoryOpenFmt:str":"- %1(%2)","ListWindowCategoryCloseFmt:str":"+ %1(%2)","NoQuestListed:str":"(No Quests Listed)","ListWindowTrackedQuest:str":"\\c[17]%1\\c[0]","VocabLogWindow":"","LogEmpty:json":"\"\\\\c[5]Main Quests\\\\c[0] are quests that must be\\ncompleted in order to progress further\\ninto the game's story.\\n\\n\\\\c[6]Side Quests\\\\c[0] are optional quests that can\\nbe completed at your discretion. Upon\\ncompleting a side quest, you can receive\\nuseful rewards that may assist you on\\nyour journey.\"","OnLoadQuestJS:func":"\"// Insert JavaScript code here.\"","LogFmt:json":"\"\\\\{[[Title]]\\\\}\\n\\\\c[4]Level:\\\\c[0] [[Difficulty]]\\n\\\\c[4]From:\\\\c[0] [[From]]\\n\\\\c[4]Location:\\\\c[0] [[Location]]\\n\\n\\\\c[4]Description:\\\\c[0]\\n[[Description]]\\n\\n\\\\c[4]Objectives:\\\\c[0]\\n[[Objectives]]\\n\\n\\\\c[4]Rewards:\\\\c[0]\\n[[Rewards]]\\n\\n[[Subtext]]\\n\\n[[Quote]]\"","Objective_Normal_Fmt:str":"◎%1","Objective_Completed_Fmt:str":"\\c[24]<ColorLock>✔%1</ColorLock>\\c[0]","Objective_Failed_Fmt:str":"\\c[25]<ColorLock>✘%1</ColorLock>\\c[0]","Reward_Normal_Fmt:str":"◎%1","Reward_Completed_Fmt:str":"\\c[24]<ColorLock>✔%1</ColorLock>\\c[0]","Reward_Failed_Fmt:str":"\\c[25]<ColorLock>✘%1</ColorLock>\\c[0]","ButtonAssistWindow":"","ButtonAssistPageUpDown:str":"Scroll Up/Down","questButtonAssistActive:str":"Track","ButtonAssistExpand:str":"Expand","ButtonAssistCollapse:str":"Collapse","CommandWindowIcons":"","CommandWindow_Known_Icon:num":"193","CommandWindow_Completed_Icon:num":"192","CommandWindow_Failed_Icon:num":"194"}
 *
 * @param Categories:arraystruct
 * @text Quest Categories
 * @type struct<Category>[]
 * @desc A list of categories and their quests.
 * @default ["{\"CategoryName:str\":\"\\\\C[5]Main Quests\",\"Quests:arraystruct\":\"[\\\"{\\\\\\\"Key:str\\\\\\\":\\\\\\\"Welcome\\\\\\\",\\\\\\\"Header\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\i[87]Welcome Quest\\\\\\\",\\\\\\\"Difficulty:str\\\\\\\":\\\\\\\"Easy\\\\\\\",\\\\\\\"From:str\\\\\\\":\\\\\\\"VisuStella\\\\\\\",\\\\\\\"Location:str\\\\\\\":\\\\\\\"RPG Maker MZ\\\\\\\",\\\\\\\"Description:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Thank you for using the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Quest System\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nplugin made by \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]VisuStella MZ\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nThis is an example quest to demonstrate\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nhow the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Quest System\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] works. It functions\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nprimarily as a log book for the various\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nadventures inside your game.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Lists\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Objectives:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Take a look at the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Quest\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] menu.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Change \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]tracked quest\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to something else.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleObjectives:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Rewards:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[186]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Quest System\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] for your game!\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[84]Helping support \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]VisuStella\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]!\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleRewards:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Footer\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Subtext:arrayjson\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Quotes:arrayjson\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"JavaScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"OnLoadQuestJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Insert JavaScript code here.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Key:str\\\\\\\":\\\\\\\"Example\\\\\\\",\\\\\\\"Header\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\i[87]Example Quest\\\\\\\",\\\\\\\"Difficulty:str\\\\\\\":\\\\\\\"Easy\\\\\\\",\\\\\\\"From:str\\\\\\\":\\\\\\\"VisuStella\\\\\\\",\\\\\\\"Location:str\\\\\\\":\\\\\\\"RPG Maker MZ\\\\\\\",\\\\\\\"Description:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"This is where the quest \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]description\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ngoes. Type in whatever text you need\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nhere in order to explain to the player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nabout the quest.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Lists\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Objectives:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Describe each of the quest \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]objectives\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nhere for the player.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"You can have multiple quest \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]objectives\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nout at once.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"If you do, make sure you have the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Visible Objectives\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] list the ID's of\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nthe objectives you want visible from\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nthe very beginning.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleObjectives:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"3\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Rewards:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Here, you can list all the rewards the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ngame will give the player upon the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ncompletion of the quest.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"You can list the rewards however you\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nlike, but do keep it concise.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"You can list multiple rewards, too.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"If you do, make sure you have the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Visible Rewards\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] list the ID's of the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nrewards you want visible from the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nvery beginning.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleRewards:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"4\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Footer\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Subtext:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"This is a \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]subtext\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]. It is used as extra\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ntext that you may want to place on your\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nquest journal that differs from the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]description\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Quotes:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"We learn by example and by direct\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nexperience because there are real limits\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nto the adequacy of verbal instruction.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n~Malcolm Gladwell\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"JavaScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"OnLoadQuestJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Insert JavaScript code here.\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"CategoryName:str\":\"\\\\c[6]Side Quests\",\"Quests:arraystruct\":\"[\\\"{\\\\\\\"Key:str\\\\\\\":\\\\\\\"Plugin_Tutorial_Title\\\\\\\",\\\\\\\"Header\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\i[193]Titles\\\\\\\",\\\\\\\"Difficulty:str\\\\\\\":\\\\\\\"Easy\\\\\\\",\\\\\\\"From:str\\\\\\\":\\\\\\\"VisuStella\\\\\\\",\\\\\\\"Location:str\\\\\\\":\\\\\\\"RPG Maker MZ\\\\\\\",\\\\\\\"Description:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"The quest's \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]title\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] is listed in three\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ndifferent places in the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Quest Scene\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n1. The top of the screen.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n2. The top of the quest log entry.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n3. The quest list on the side.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nBe sure to put some thought in deciding\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nyour titles as they are there to convey\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nwhat the quest is all about.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Lists\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Objectives:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Change the title through the quest's\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Title\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleObjectives:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Rewards:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[79]Mastery of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Title\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleRewards:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Footer\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Subtext:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"You can use icons in the quest title by\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nusing the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[x]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] text code. Keep in mind\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nthat the icon will be removed from the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nquest log entry.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Quotes:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"A good title is the title of a\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nsuccessful book.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n~Raymond Chandler\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"JavaScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"OnLoadQuestJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Insert JavaScript code here.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Key:str\\\\\\\":\\\\\\\"Plugin_Tutorial_Difficulty\\\\\\\",\\\\\\\"Header\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\i[193]Difficulty\\\\\\\",\\\\\\\"Difficulty:str\\\\\\\":\\\\\\\"Easy\\\\\\\",\\\\\\\"From:str\\\\\\\":\\\\\\\"VisuStella\\\\\\\",\\\\\\\"Location:str\\\\\\\":\\\\\\\"RPG Maker MZ\\\\\\\",\\\\\\\"Description:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"A quest's \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]difficulty\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] can be used to\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nconvey what kinds of expectations they\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nshould have regarding challenge.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nThese can range from star ratings like:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[87]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[87]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[88]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[88]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[88]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nto\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nLevel ranges like:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]Level 20+\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Lists\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Objectives:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Change the difficulty through the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nquest's \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Difficulty\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleObjectives:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Rewards:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[79]Mastery of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Difficulty\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleRewards:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Footer\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Subtext:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"A quest's difficulty is often used to\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nrelay the expected level of conflict a\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nplayer may face.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Quotes:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"A pessimist sees the difficulty in\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nevery opportunity; an optimist sees the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nopportunity in every difficulty.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n~Winston Churchill\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"JavaScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"OnLoadQuestJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Insert JavaScript code here.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Key:str\\\\\\\":\\\\\\\"Plugin_Tutorial_From\\\\\\\",\\\\\\\"Header\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\i[193]From\\\\\\\",\\\\\\\"Difficulty:str\\\\\\\":\\\\\\\"Easy\\\\\\\",\\\\\\\"From:str\\\\\\\":\\\\\\\"VisuStella\\\\\\\",\\\\\\\"Location:str\\\\\\\":\\\\\\\"RPG Maker MZ\\\\\\\",\\\\\\\"Description:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Explaining which \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]NPC\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] the quest is from\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ncan help remind the player its origin\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nand also help save the player some time\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nin trying to find that \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]NPC\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] again when\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ngoing to claim the quest \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]rewards\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Lists\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Objectives:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Change the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"from\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\" text through the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nquest's \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]From\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleObjectives:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Rewards:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[79]Mastery of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]From\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleRewards:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Footer\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Subtext:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Use the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Quest System\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] as a means to\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nstreamline your player's experience.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Quotes:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"More important than the quest for\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ncertainty is the quest for clarity.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n~Francois Gautier\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"JavaScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"OnLoadQuestJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Insert JavaScript code here.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Key:str\\\\\\\":\\\\\\\"Plugin_Tutorial_Description\\\\\\\",\\\\\\\"Header\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\i[193]Descriptions\\\\\\\",\\\\\\\"Difficulty:str\\\\\\\":\\\\\\\"Medium\\\\\\\",\\\\\\\"From:str\\\\\\\":\\\\\\\"VisuStella\\\\\\\",\\\\\\\"Location:str\\\\\\\":\\\\\\\"RPG Maker MZ\\\\\\\",\\\\\\\"Description:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Insert the quest's \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Description\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] here.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nThe displayed \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]quest description\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] will\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ndepend on the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Description ID\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] that is\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ncurrently active for the quest.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"This is the updated quest description. This\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ncan only be seen when it is Description ID #2.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Lists\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Objectives:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"You can change the Description ID by\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nusing the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Quest: Description Change\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Try changing it to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] through the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] see what it becomes.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleObjectives:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Rewards:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[79]Mastery of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Description\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[79]Mastery of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Quest: Description Change\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleRewards:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Footer\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Subtext:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Descriptions are valuable tools that can\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nbe used to help remind the player the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\npurpose of the quest.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Quotes:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Description begins in the writer's\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nimagination but should finish in the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nreader's.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n~Stephen King\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"JavaScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"OnLoadQuestJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Insert JavaScript code here.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Key:str\\\\\\\":\\\\\\\"Plugin_Tutorial_Objectives\\\\\\\",\\\\\\\"Header\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\i[193]Objectives\\\\\\\",\\\\\\\"Difficulty:str\\\\\\\":\\\\\\\"Medium-Hard\\\\\\\",\\\\\\\"From:str\\\\\\\":\\\\\\\"VisuStella\\\\\\\",\\\\\\\"Location:str\\\\\\\":\\\\\\\"RPG Maker MZ\\\\\\\",\\\\\\\"Description:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Quest \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]objectives\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] are used to streamline\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nthe goals the player needs to achieve in\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\norder to make progress.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Lists\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Objectives:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"You can change the status of each\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Quest Objective\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Known\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0], \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]Completed\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0],\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nor \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[25]Failed\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"You can also \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]remove\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] objectives from\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nbeing viewed.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"You can determine the default \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]quest\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nobjectives\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] through the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Visible\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nObjectives \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"You can reveal new \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]quest objectives\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nthrough the use of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Quest: Objectives Change\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]The following are examples:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Known Objective\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Completed Objective\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Failed Objective\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleObjectives:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"4\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"5\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"6\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"7\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Rewards:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[79]Mastery of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Objectives\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[79]Mastery of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Quest: Objectives Change\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleRewards:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Footer\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Subtext:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Treat \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]quest objectives\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] like a set of\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ninstructions or outline for the player\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nto follow in order to get the desired\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nresult both of you want.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Quotes:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"People with objectives succeed because\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nthey know where they're going.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n~Earl Nightingale\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"JavaScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"OnLoadQuestJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Insert JavaScript code here.\\\\\\\\\\\\\\\\nconst key = 'Plugin_Tutorial_Objectives';\\\\\\\\\\\\\\\\n$gameSystem.setQuestObjectives(key, [5], 'show');\\\\\\\\\\\\\\\\n$gameSystem.setQuestObjectives(key, [6], 'complete');\\\\\\\\\\\\\\\\n$gameSystem.setQuestObjectives(key, [7], 'fail');\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Key:str\\\\\\\":\\\\\\\"Plugin_Tutorial_Rewards\\\\\\\",\\\\\\\"Header\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\i[193]Rewards\\\\\\\",\\\\\\\"Difficulty:str\\\\\\\":\\\\\\\"Medium-Hard\\\\\\\",\\\\\\\"From:str\\\\\\\":\\\\\\\"VisuStella\\\\\\\",\\\\\\\"Location:str\\\\\\\":\\\\\\\"RPG Maker MZ\\\\\\\",\\\\\\\"Description:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Quest rewards\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] are the goodies that are\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\npromised to be given to the player upon\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nthe completion of the quest.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Lists\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Objectives:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"You can change the status of each\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Quest Reward\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Known\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0], \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]Claimed\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0],\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nor \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[25]Denied\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"You can also \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]remove\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] rewardsfrom\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nbeing viewed.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"You can determine the default \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]quest\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nrewards\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] through the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Visible\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nRewards \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleObjectives:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"3\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Rewards:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[79]Mastery of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Rewards\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[79]Mastery of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Quest: Rewards Change\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"You can reveal new \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]quest rewards\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nthrough the use of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Quest: Rewards Change\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]The following are examples:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Known Reward\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Claimed Reward\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Denied Reward\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleRewards:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"3\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"4\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"5\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"6\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Footer\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Subtext:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Rewards are incentives for the player to\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ncomplete them, especially quests of\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nhigher difficulty levels.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Quotes:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Reward the behavior you want repeated.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n~Larry Winget\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"JavaScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"OnLoadQuestJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Insert JavaScript code here.\\\\\\\\\\\\\\\\nconst key = 'Plugin_Tutorial_Rewards';\\\\\\\\\\\\\\\\n$gameSystem.setQuestRewards(key, [4], 'show');\\\\\\\\\\\\\\\\n$gameSystem.setQuestRewards(key, [5], 'claim');\\\\\\\\\\\\\\\\n$gameSystem.setQuestRewards(key, [6], 'deny');\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Key:str\\\\\\\":\\\\\\\"Plugin_Tutorial_Subtext\\\\\\\",\\\\\\\"Header\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\i[193]Subtexts\\\\\\\",\\\\\\\"Difficulty:str\\\\\\\":\\\\\\\"Medium\\\\\\\",\\\\\\\"From:str\\\\\\\":\\\\\\\"VisuStella\\\\\\\",\\\\\\\"Location:str\\\\\\\":\\\\\\\"RPG Maker MZ\\\\\\\",\\\\\\\"Description:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"The \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]subtext\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] section can be used in a\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nnumber of ways, from hints to summaries,\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nto warnings.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nAnd like the quest \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]description\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0], you can\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nchange the text displayed in the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]subtext\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nthrough changing the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Subtext ID\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Lists\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Objectives:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"You can change the Subtext ID by\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nusing the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Quest: Subtext Change\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Try changing it to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] through the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] see what it becomes.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleObjectives:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Rewards:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[79]Mastery of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Subtext\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[79]Mastery of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Quest: Subtext Change\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleRewards:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Footer\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Subtext:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Subtexts\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] can serve as hints, summaries,\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nwarnings, reminders, you name it.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"After all, reminding a player to do\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nsomething only means you want them to\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nsucceed at it.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Quotes:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"A discerning eye needs only a hint, and\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nunderstatement leaves the imagination\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nfree to build its own elaborations.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n~Russell Page\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"JavaScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"OnLoadQuestJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Insert JavaScript code here.\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Key:str\\\\\\\":\\\\\\\"Plugin_Tutorial_Quote\\\\\\\",\\\\\\\"Header\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\i[193]Quotes\\\\\\\",\\\\\\\"Difficulty:str\\\\\\\":\\\\\\\"Medium\\\\\\\",\\\\\\\"From:str\\\\\\\":\\\\\\\"VisuStella\\\\\\\",\\\\\\\"Location:str\\\\\\\":\\\\\\\"RPG Maker MZ\\\\\\\",\\\\\\\"Description:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Quotes\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] can be used to reference specific\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nlines of dialogue that could help the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nplayer understand what's needed to be\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ndone.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nOr they could just be \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]quotes\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] made by\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\njust about anyone.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nAnd like quest \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]descriptions and quest\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]subtexts\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0], the quest quotes can also be\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nchanged to display something else based\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\non the quest's \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Quote ID\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Lists\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Objectives:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"You can change the Quote ID by\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nusing the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Quest: Quote Change\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Try changing it to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] through the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] see what it becomes.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleObjectives:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Rewards:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[79]Mastery of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Subtext\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[79]Mastery of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Command\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]Quest: Subtext Change\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleRewards:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Footer\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Subtext:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"How you want to use them is up to you.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Quotes:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"You miss 100% of the shots you\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ndon't take.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n~Micahel Scott\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"If at first you don't succeed, then\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nskydiving definitely isn't for you.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n~Steven Wright\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"JavaScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"OnLoadQuestJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Insert JavaScript code here.\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"CategoryName:str\":\"\\\\c[2]Challenge Quests\",\"Quests:arraystruct\":\"[\\\"{\\\\\\\"Key:str\\\\\\\":\\\\\\\"Challenge_Plugin_Variables\\\\\\\",\\\\\\\"Header\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\i[5]Variables\\\\\\\",\\\\\\\"Difficulty:str\\\\\\\":\\\\\\\"Hard\\\\\\\",\\\\\\\"From:str\\\\\\\":\\\\\\\"VisuStella\\\\\\\",\\\\\\\"Location:str\\\\\\\":\\\\\\\"RPG Maker MZ\\\\\\\",\\\\\\\"Description:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Using the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]JS: On Load \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0],\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nyou can run \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]JavaScript\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] code prior to the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ncreation of the text written here.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nIn this example, game variables are set\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nup to automatically equal the number of\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nof the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]first item\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] in the inventory.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nThe \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]objective\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] will automatically set\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nitself to completed if the variable's\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nvalue is determined to be over 10.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Lists\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Objectives:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Obtain \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\v[1]/10x First Database Item!\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleObjectives:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Rewards:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[79]Knowledge for \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]JS: On Load\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleRewards:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Footer\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Subtext:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]DISCLAIMER:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nKeep in mind that \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]VisuStella\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] is NOT\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nresponsible for your proficiency (or\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\notherwise) of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]JavaScript\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nIf you get any errors with the custom\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ncode, it is up to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]you\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to fix it.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nIf you do not understand how any of this\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nsection works, do not be afraid. It's\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nnot the end of the world.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nYou can still change the status of the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]quests\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] and its \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]objectives\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] through the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nusage of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Commands\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Quotes:arrayjson\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"JavaScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"OnLoadQuestJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Insert JavaScript code here.\\\\\\\\\\\\\\\\nconst value = $gameParty.numItems($dataItems[1])\\\\\\\\\\\\\\\\nconst status = value >= 10 ? 'completed' : 'known';\\\\\\\\\\\\\\\\nconst key = 'Challenge_Plugin_Variables';\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n$gameVariables.setValue(1, value);\\\\\\\\\\\\\\\\n$gameSystem.setQuestObjectives(key, [1], status)\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Key:str\\\\\\\":\\\\\\\"Challenge_Plugin_Switches\\\\\\\",\\\\\\\"Header\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Title:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\i[5]Switches\\\\\\\",\\\\\\\"Difficulty:str\\\\\\\":\\\\\\\"Hard\\\\\\\",\\\\\\\"From:str\\\\\\\":\\\\\\\"VisuStella\\\\\\\",\\\\\\\"Location:str\\\\\\\":\\\\\\\"RPG Maker MZ\\\\\\\",\\\\\\\"Description:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Using the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]JS: On Load \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0],\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nyou can run \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]JavaScript\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] code prior to the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ncreation of the text written here.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nIn this example, game switch 1's ON/OFF\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nstatus will determine which description\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nthis quest will use.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nGame Switch 1 is now \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[25]OFF\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]!\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nDescription ID \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]1\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] is being used.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Using the \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]JS: On Load \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0],\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nyou can run \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]JavaScript\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] code prior to the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ncreation of the text written here.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nIn this example, game switch 1's ON/OFF\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nstatus will determine which description\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nthis quest will use.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nGame Switch 1 is now \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[24]ON\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]!\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nDescription ID \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] is being used.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Lists\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Objectives:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Change Switch 1's ON/OFF status.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"View this quest's \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]description\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleObjectives:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"2\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Rewards:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\i[79]Knowledge for \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[6]JS: On Load\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Parameter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"VisibleRewards:arraynum\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Footer\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Subtext:arrayjson\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[2]DISCLAIMER:\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nKeep in mind that \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]VisuStella\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] is NOT\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nresponsible for your proficiency (or\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\notherwise) of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]JavaScript\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nIf you get any errors with the custom\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ncode, it is up to \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]you\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] to fix it.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nIf you do not understand how any of this\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nsection works, do not be afraid. It's\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nnot the end of the world.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nYou can still change the status of the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]quests\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] and its \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]objectives\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0] through the\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\nusage of \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[4]Plugin Commands\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\c[0].\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Quotes:arrayjson\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"JavaScript\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"OnLoadQuestJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Insert JavaScript code here.\\\\\\\\\\\\\\\\nconst key = 'Challenge_Plugin_Switches';\\\\\\\\\\\\\\\\nconst id = $gameSwitches.value(1) ? 2 : 1;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n$gameSystem.setQuestDescription(key, id)\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}"]
 *
 * @param Tracker:struct
 * @text Quest Tracker Settings
 * @type struct<Tracker>
 * @desc Setup how all the quest tracker works.
 * @default {"General":"","TrackerFmt:json":"\"\\\\{[[Title]]\\\\}\\n[[Objectives]]\"","Options":"","AdjustRect:eval":"true","AddShowOption:eval":"true","ShowName:str":"Show Quest Tracker","AddPositionOption:eval":"true","PositionName:str":"Quest Tracker Position","PositionOff:str":"←","PositionOn:str":"→"}
 *
 * @param MainMenu:struct
 * @text Main Menu Settings
 * @type struct<MainMenu>
 * @desc Set up the main menu defaults.
 * @default {"Name:str":"Quest","ShowMainMenu:eval":"true","EnableMainMenu:eval":"true"}
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @type struct<BgSettings>
 * @desc Background settings for Scene_Quest.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Setup how all the windows appear in-game.
 * @default {"CommandWindow":"","ShowFailed:eval":"true","CmdStyle:str":"auto","CmdTextAlign:str":"center","CommandWindow_BgType:num":"0","CommandWindow_Rect:func":"\"const ww = this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(Window_QuestCommand.prototype.totalCommands(), true);\\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\\nconst wy = this.mainAreaTop();\\nreturn new Rectangle(wx, wy, ww, wh);\"","QuestLabel":"","QuestLabel_BgType:num":"0","QuestLabel_Rect:func":"\"const ww = Graphics.boxWidth - this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(1, false);\\nconst wx = this.isRightInputMode() ? 0 : Graphics.boxWidth - ww;\\nconst wy = this.mainAreaTop();\\nreturn new Rectangle(wx, wy, ww, wh);\"","LogWindow":"","LogWindow_Auto_WordWrap:eval":"false","LogWindow_ScrollSpeed:num":"0.20","LogWindow_BgType:num":"0","LogWindow_Rect:func":"\"const ww = Graphics.boxWidth - this.mainCommandWidth();\\nconst wh = this.mainAreaHeight() - this.questLabelWindowRect().height;\\nconst wx = this.isRightInputMode() ? 0 : Graphics.boxWidth - ww;\\nconst wy = this.mainAreaTop() + this.questLabelWindowRect().height;\\nreturn new Rectangle(wx, wy, ww, wh);\"","ListWindow":"","ListWindow_BgType:num":"0","ListWindow_Rect:func":"\"const ww = this.mainCommandWidth();\\nconst wh = this.mainAreaHeight() - this.commandWindowRect().height;\\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\\nconst wy = this.mainAreaTop() + this.commandWindowRect().height;\\nreturn new Rectangle(wx, wy, ww, wh);\"","TrackerWindow":"","TrackerWindow_Scale:num":"0.50","TrackerWindow_BgType:num":"0","TrackerWindow_Rect:func":"\"const ww = 560;\\nconst wh = Graphics.height / Window_QuestTracker.scale;\\nconst wx = this.questTrackerOnRight() ? Graphics.width - Math.ceil(ww * Window_QuestTracker.scale) : 0;\\nconst wy = this.buttonAreaHeight() + 8;\\nreturn new Rectangle(wx, wy, ww, wh);\""}
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
 * @param StartingQuests
 * @text Starting Quests
 *
 * @param KnownQuests:arraystr
 * @text Known Quests
 * @parent StartingQuests
 * @type string[]
 * @desc Which quests are known at the start of the game?
 * Insert their keys here.
 * @default ["Welcome","Example","Plugin_Tutorial_Title","Plugin_Tutorial_Difficulty","Plugin_Tutorial_From","Plugin_Tutorial_Description","Plugin_Tutorial_Objectives","Plugin_Tutorial_Rewards","Plugin_Tutorial_Subtext","Plugin_Tutorial_Quote","Challenge_Plugin_Variables","Challenge_Plugin_Switches"]
 *
 * @param CompletedQuests:arraystr
 * @text Completed Quests
 * @parent StartingQuests
 * @type string[]
 * @desc Which quests are completed at the start of the game?
 * Insert their keys here.
 * @default []
 *
 * @param FailedQuests:arraystr
 * @text Failed Quests
 * @parent StartingQuests
 * @type string[]
 * @desc Which quests are failed at the start of the game?
 * Insert their keys here.
 * @default []
 *
 * @param TrackedQuest:str
 * @text Tracked Quest
 * @parent StartingQuests
 * @desc Which quest is tracked at the start of the game?
 * @default Welcome
 *
 * @param SceneQuest
 * @text Scene_Quest
 *
 * @param Vocab
 * @parent SceneQuest
 *
 * @param VocabCommandWindow
 * @text Command Window
 * @parent Vocab
 *
 * @param CommandWindow_Known_Text:str
 * @text Command: Known
 * @parent VocabCommandWindow
 * @desc Text used to display known quests.
 * @default Available
 *
 * @param CommandWindow_Completed_Text:str
 * @text Command: Completed
 * @parent VocabCommandWindow
 * @desc Text used to display completed quests.
 * @default Completed
 *
 * @param CommandWindow_Failed_Text:str
 * @text Command: Failed
 * @parent VocabCommandWindow
 * @desc Text used to display failed quests.
 * @default Failed
 *
 * @param VocabLabelWindow
 * @text Label Window
 * @parent Vocab
 *
 * @param EmptyTitleLabel:str
 * @text Empty Title
 * @parent VocabLabelWindow
 * @desc Text displayed in the Label Window when no quest is selected.
 * @default \i[186]Quest Journal
 *
 * @param VocabListWindow
 * @text List Window
 * @parent Vocab
 *
 * @param ListWindowCategoryOpenFmt:str
 * @text Open Categories
 * @parent VocabListWindow
 * @desc Text format for an open category.
 * %1 - Category Name, %2 - Quest Amount
 * @default - %1(%2)
 *
 * @param ListWindowCategoryCloseFmt:str
 * @text Closed Categories
 * @parent VocabListWindow
 * @desc Text format for a closed category.
 * %1 - Category Name, %2 - Quest Amount
 * @default + %1(%2)
 *
 * @param NoQuestListed:str
 * @text No Quest Listed
 * @parent VocabListWindow
 * @desc Text when no quest is listed.
 * @default (No Quests Listed)
 *
 * @param ListWindowTrackedQuest:str
 * @text Tracked Quest
 * @parent VocabListWindow
 * @desc Text format for a tracked quest.
 * %1 - Tracked Quest's Name
 * @default \c[17]%1\c[0]
 *
 * @param VocabLogWindow
 * @text Log Window
 * @parent Vocab
 *
 * @param LogEmpty:json
 * @text Empty Message
 * @parent VocabLogWindow
 * @type note
 * @desc Text displayed when no quest is selected.
 * @default "\\c[5]Main Quests\\c[0] are quests that must be\ncompleted in order to progress further\ninto the game's story.\n\n\\c[6]Side Quests\\c[0] are optional quests that can\nbe completed at your discretion. Upon\ncompleting a side quest, you can receive\nuseful rewards that may assist you on\nyour journey."
 *
 * @param OnLoadQuestJS:func
 * @text JS: On Load
 * @parent LogEmpty:json
 * @type note
 * @desc Runs code upon making the empty message.
 * Useful for setting up variables.
 * @default "// Insert JavaScript code here."
 *
 * @param LogFmt:json
 * @text Quest Log
 * @parent VocabLogWindow
 * @type note
 * @desc Text format for Quest Log Window.
 * Read help file for instructions.
 * @default "\\{[[Title]]\\}\n\\c[4]Level:\\c[0] [[Difficulty]]\n\\c[4]From:\\c[0] [[From]]\n\\c[4]Location:\\c[0] [[Location]]\n\n\\c[4]Description:\\c[0]\n[[Description]]\n\n\\c[4]Objectives:\\c[0]\n[[Objectives]]\n\n\\c[4]Rewards:\\c[0]\n[[Rewards]]\n\n[[Subtext]]\n\n[[Quote]]"
 *
 * @param Objective_Normal_Fmt:str
 * @text Objective (Known)
 * @parent LogFmt:json
 * @desc Text format for known objectives.
 * %1 - Objective Text
 * @default ◎%1
 *
 * @param Objective_Completed_Fmt:str
 * @text Objective (Done)
 * @parent LogFmt:json
 * @desc Text format for complete objectives.
 * %1 - Objective Text
 * @default \c[24]<ColorLock>✔%1</ColorLock>\c[0]
 *
 * @param Objective_Failed_Fmt:str
 * @text Objective (Failed)
 * @parent LogFmt:json
 * @desc Text format for failed objectives.
 * %1 - Objective Text
 * @default \c[25]<ColorLock>✘%1</ColorLock>\c[0]
 *
 * @param Reward_Normal_Fmt:str
 * @text Reward (Known)
 * @parent LogFmt:json
 * @desc Text format for normal rewards.
 * %1 - Reward Text
 * @default ◎%1
 *
 * @param Reward_Completed_Fmt:str
 * @text Reward (Claimed)
 * @parent LogFmt:json
 * @desc Text format for claimed rewards.
 * %1 - Reward Text
 * @default \c[24]<ColorLock>✔%1</ColorLock>\c[0]
 *
 * @param Reward_Failed_Fmt:str
 * @text Reward (Denied)
 * @parent LogFmt:json
 * @desc Text format for denied rewards.
 * %1 - Reward Text
 * @default \c[25]<ColorLock>✘%1</ColorLock>\c[0]
 *
 * @param ButtonAssistWindow
 * @text Button Assist Window
 * @parent Vocab
 *
 * @param ButtonAssistPageUpDown:str
 * @text Scroll Up/Down
 * @parent ButtonAssistWindow
 * @desc Text for Page Up/Down to scroll log window.
 * Requires VisuMZ_0_CoreEngine!
 * @default Scroll Up/Down
 *
 * @param questButtonAssistActive:str
 * @text Tracker
 * @parent ButtonAssistWindow
 * @desc Text for tracking quests.
 * Requires VisuMZ_0_CoreEngine!
 * @default Track
 *
 * @param ButtonAssistExpand:str
 * @text Expand
 * @parent ButtonAssistWindow
 * @desc Text for expanding categories.
 * Requires VisuMZ_0_CoreEngine!
 * @default Expand
 *
 * @param ButtonAssistCollapse:str
 * @text Collapse
 * @parent ButtonAssistWindow
 * @desc Text for collapsing categories.
 * Requires VisuMZ_0_CoreEngine!
 * @default Collapse
 *
 * @param CommandWindowIcons
 * @text Icons
 * @parent SceneQuest
 *
 * @param CommandWindow_Known_Icon:num
 * @text Icon: Known
 * @parent CommandWindowIcons
 * @desc Icon used for this command.
 * @default 193
 *
 * @param CommandWindow_Completed_Icon:num
 * @text Icon: Completed
 * @parent CommandWindowIcons
 * @desc Icon used for this command.
 * @default 192
 *
 * @param CommandWindow_Failed_Icon:num
 * @text Icon: Failed
 * @parent CommandWindowIcons
 * @desc Icon used for this command.
 * @default 194
 *
 */
/* ----------------------------------------------------------------------------
 * Quest Category Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Category:
 *
 * @param CategoryName:str
 * @text Category Name
 * @desc This category's name.
 * You may use text codes.
 * @default Untitled
 *
 * @param Quests:arraystruct
 * @text Quests
 * @type struct<Quest>[]
 * @desc A list of quests listed under this category.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Individual Quest Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Quest:
 *
 * @param Key:str
 * @text Quest ID Key
 * @desc This quest's identification key. Quests require
 * unique keys for the plugin to differentiate them.
 * @default (Needs Key)
 *
 * @param Header
 *
 * @param Title:str
 * @text Title
 * @parent Header
 * @desc The title of the quest. This is what appears in-game.
 * You may use text codes.
 * @default \i[87]Untitled Quest
 *
 * @param Difficulty:str
 * @text Difficulty
 * @parent Header
 * @desc Difficulty level for this quest.
 * You may use text codes.
 * @default Easy Peasy
 *
 * @param From:str
 * @text From
 * @parent Header
 * @desc Insert the name of the one who issued this quest.
 * You may use text codes.
 * @default NPC Name
 *
 * @param Location:str
 * @text Location
 * @parent Header
 * @desc Insert location name where this quest was issued.
 * You may use text codes.
 * @default Location Name
 *
 * @param Description:arrayjson
 * @text Description
 * @parent Header
 * @type note[]
 * @desc Type out the description(s) used for this quest.
 * You may use text codes.
 * @default ["\"This is the \\\\c[4]default\\\\c[0] quest description.\"","\"This is the \\\\c[4]default\\\\c[0] quest description.\\n\\nYou can insert multiple description entries in case you\\never want to update the quest description midway while the\\nquest is in progress.\""]
 *
 * @param Lists
 *
 * @param Objectives:arrayjson
 * @text Objectives List
 * @parent Lists
 * @type note[]
 * @desc The objectives to be completed for this quest.
 * You may use text codes.
 * @default ["\"\\\\c[4]First\\\\c[0] objective to be cleared.\"","\"\\\\c[4]Second\\\\c[0] objective, but it's hidden.\"","\"To make other objectives appear,\\nenable them through the \\\\c[4]'Visible\\nObjectives'\\\\c[0] plugin parameter or by\\nusing a plugin command to make\\nthem appear\""]
 *
 * @param VisibleObjectives:arraynum
 * @text Visible Objectives
 * @parent Objectives:arrayjson
 * @type number[]
 * @min 1
 * @desc The objectives that are visible from the start.
 * @default ["1"]
 *
 * @param Rewards:arrayjson
 * @text Rewards List
 * @parent Lists
 * @type note[]
 * @desc The reward list for this quest.
 * You may use text codes.
 * @default ["\"\\\\i[176]Potion x5\"","\"\\\\i[178]Ether x3\"","\"To make other rewards appear,\\nenable them through the \\\\c[4]'Visible\\nRewards'\\\\c[0] plugin parameter or by\\nusing a plugin command to make\\nthem appear\""]
 *
 * @param VisibleRewards:arraynum
 * @text Visible Rewards
 * @parent Rewards:arrayjson
 * @type number[]
 * @min 1
 * @desc The rewards that are visible from the start.
 * @default ["1"]
 *
 * @param Footer
 *
 * @param Subtext:arrayjson
 * @text Subtext
 * @parent Footer
 * @type note[]
 * @desc Subtext to be displayed with the quest.
 * You may use text codes.
 * @default ["\"\"","\"This is a \\\\c[4]subtext\\\\c[0]. It is used as extra\\ntext that you may want to place on your\\nquest journal that differs from the\\n\\\\c[4]description\\\\c[0].\""]
 *
 * @param Quotes:arrayjson
 * @text Quotes
 * @parent Footer
 * @type note[]
 * @desc Quotes to be displayed with the quest.
 * You may use text codes.
 * @default ["\"\"","\"Insert the quotes of NPC's here.\""]
 *
 * @param JavaScript
 *
 * @param OnLoadQuestJS:func
 * @text JS: On Load
 * @parent JavaScript
 * @type note
 * @desc Runs code upon loading the quest in Scene_Quest.
 * Useful for setting up variables.
 * @default "// Insert JavaScript code here."
 *
 */
/* ----------------------------------------------------------------------------
 * Quest Tracker Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Tracker:
 *
 * @param General
 *
 * @param TrackerFmt:json
 * @text Tracker Format
 * @parent General
 * @type note
 * @desc Text format for Quest Tracker Window.
 * Read help file for instructions.
 * @default "\\{[[Title]]\\}\n[[Objectives]]"
 *
 * @param Options
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
 * @param AddShowOption:eval
 * @text Add Show Tracker?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Show Tracker' option to the Options menu?
 * @default true
 *
 * @param ShowName:str
 * @text Option Name
 * @parent AddShowOption:eval
 * @desc Command name of the option.
 * @default Show Quest Tracker
 *
 * @param AddPositionOption:eval
 * @text Add Position Tracker?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Position Tracker' option to the Options menu?
 * @default true
 *
 * @param PositionName:str
 * @text Option Name
 * @parent AddPositionOption:eval
 * @desc Command name of the option.
 * @default Quest Tracker Position
 *
 * @param PositionOff:str
 * @text Option OFF
 * @parent AddPositionOption:eval
 * @desc Text displayed when the option is OFF.
 * @default ←
 *
 * @param PositionOn:str
 * @text Option ON
 * @parent AddPositionOption:eval
 * @desc Text displayed when the option is ON.
 * @default →
 *
 */
/* ----------------------------------------------------------------------------
 * MainMenu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MainMenu:
 *
 * @param Name:str
 * @text Command Name
 * @parent Options
 * @desc Name of the 'Quest' option in the Main Menu.
 * @default Quest
 *
 * @param ShowMainMenu:eval
 * @text Show in Main Menu?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Quest' option to the Main Menu by default?
 * @default true
 *
 * @param EnableMainMenu:eval
 * @text Enable in Main Menu?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the 'Quest' option to the Main Menu by default?
 * @default true
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
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param ShowFailed:eval
 * @text Show Failed Quests?
 * @parent CommandWindow
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show/hide Failed Quests in the command window.
 * @default true
 *
 * @param CmdStyle:str
 * @text Style
 * @parent CommandWindow
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent CommandWindow
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CommandWindow_BgType:num
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
 * @param CommandWindow_Rect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = this.mainCommandWidth();\nconst wh = this.calcWindowHeight(Window_QuestCommand.prototype.totalCommands(), true);\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\nconst wy = this.mainAreaTop();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param QuestLabel
 * @text Quest Label
 *
 * @param QuestLabel_BgType:num
 * @text Background Type
 * @parent QuestLabel
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
 * @param QuestLabel_Rect:func
 * @text JS: X, Y, W, H
 * @parent QuestLabel
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth - this.mainCommandWidth();\nconst wh = this.calcWindowHeight(1, false);\nconst wx = this.isRightInputMode() ? 0 : Graphics.boxWidth - ww;\nconst wy = this.mainAreaTop();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param LogWindow
 * @text Log Window
 *
 * @param LogWindow_ScrollSpeed:num
 * @text PageUp/Down Speed
 * @parent LogWindow
 * @desc Scroll speed for PageUp/Down.
 * @default 0.20
 *
 * @param LogWindow_BgType:num
 * @text Background Type
 * @parent LogWindow
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
 * @param LogWindow_Rect:func
 * @text JS: X, Y, W, H
 * @parent LogWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth - this.mainCommandWidth();\nconst wh = this.mainAreaHeight() - this.questLabelWindowRect().height;\nconst wx = this.isRightInputMode() ? 0 : Graphics.boxWidth - ww;\nconst wy = this.mainAreaTop() + this.questLabelWindowRect().height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param LogWindowExperimental
 * @text EXPERIMENTAL
 * @parent LogWindow
 *
 * @param LogWindow_Auto_WordWrap:eval
 * @text Automatic Word Wrap?
 * @parent LogWindowExperimental
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables automatic word wrap.
 * Requires VisuMZ_1_MessageCore!
 * @default false
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListWindow_BgType:num
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
 * @param ListWindow_Rect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = this.mainCommandWidth();\nconst wh = this.mainAreaHeight() - this.commandWindowRect().height;\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\nconst wy = this.mainAreaTop() + this.commandWindowRect().height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param TrackerWindow
 * @text Tracker Window
 *
 * @param TrackerWindow_Scale:num
 * @text Window Scale
 * @parent TrackerWindow
 * @desc How much do you want to scale the Tracker Window's size by?
 * @default 0.50
 *
 * @param TrackerWindow_BgType:num
 * @text Background Type
 * @parent TrackerWindow
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
 * @param TrackerWindow_Rect:func
 * @text JS: X, Y, W, H
 * @parent TrackerWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = 560;\nconst wh = Graphics.height / Window_QuestTracker.scale;\nconst wx = this.questTrackerOnRight() ? Graphics.width - Math.ceil(ww * Window_QuestTracker.scale) : 0;\nconst wy = this.buttonAreaHeight() + 8;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
//=============================================================================

const _0x435e5d=_0x220d;(function(_0x100450,_0x2e15f7){const _0x336fce=_0x220d,_0xf68ba2=_0x100450();while(!![]){try{const _0x169c18=parseInt(_0x336fce(0x309))/0x1*(-parseInt(_0x336fce(0x2e5))/0x2)+parseInt(_0x336fce(0x19a))/0x3*(-parseInt(_0x336fce(0x2c8))/0x4)+parseInt(_0x336fce(0x199))/0x5*(parseInt(_0x336fce(0x278))/0x6)+parseInt(_0x336fce(0x14a))/0x7+-parseInt(_0x336fce(0x344))/0x8+parseInt(_0x336fce(0x241))/0x9*(-parseInt(_0x336fce(0x19d))/0xa)+parseInt(_0x336fce(0x20c))/0xb*(parseInt(_0x336fce(0x206))/0xc);if(_0x169c18===_0x2e15f7)break;else _0xf68ba2['push'](_0xf68ba2['shift']());}catch(_0x15bd40){_0xf68ba2['push'](_0xf68ba2['shift']());}}}(_0x4403,0x8a9af));var label='QuestSystem',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x435e5d(0x302)](function(_0x5e37bc){const _0x45387a=_0x435e5d;return _0x5e37bc[_0x45387a(0x271)]&&_0x5e37bc[_0x45387a(0x1cb)][_0x45387a(0x270)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label]['Settings']||{},VisuMZ[_0x435e5d(0x207)]=function(_0x156ebc,_0x1d68db){const _0x2aae7f=_0x435e5d;for(const _0x2cf46e in _0x1d68db){if(_0x2cf46e[_0x2aae7f(0x1bf)](/(.*):(.*)/i)){const _0x4a3623=String(RegExp['$1']),_0x2d2418=String(RegExp['$2'])[_0x2aae7f(0x1ef)]()[_0x2aae7f(0x16b)]();let _0x5a47cd,_0x1aac6d,_0x1eaca9;switch(_0x2d2418){case _0x2aae7f(0x146):_0x5a47cd=_0x1d68db[_0x2cf46e]!==''?Number(_0x1d68db[_0x2cf46e]):0x0;break;case'ARRAYNUM':_0x1aac6d=_0x1d68db[_0x2cf46e]!==''?JSON[_0x2aae7f(0x2a4)](_0x1d68db[_0x2cf46e]):[],_0x5a47cd=_0x1aac6d['map'](_0x57400a=>Number(_0x57400a));break;case'EVAL':_0x5a47cd=_0x1d68db[_0x2cf46e]!==''?eval(_0x1d68db[_0x2cf46e]):null;break;case'ARRAYEVAL':_0x1aac6d=_0x1d68db[_0x2cf46e]!==''?JSON['parse'](_0x1d68db[_0x2cf46e]):[],_0x5a47cd=_0x1aac6d['map'](_0x3f06ad=>eval(_0x3f06ad));break;case'JSON':_0x5a47cd=_0x1d68db[_0x2cf46e]!==''?JSON[_0x2aae7f(0x2a4)](_0x1d68db[_0x2cf46e]):'';break;case'ARRAYJSON':_0x1aac6d=_0x1d68db[_0x2cf46e]!==''?JSON[_0x2aae7f(0x2a4)](_0x1d68db[_0x2cf46e]):[],_0x5a47cd=_0x1aac6d[_0x2aae7f(0x185)](_0xf24275=>JSON[_0x2aae7f(0x2a4)](_0xf24275));break;case _0x2aae7f(0x346):_0x5a47cd=_0x1d68db[_0x2cf46e]!==''?new Function(JSON['parse'](_0x1d68db[_0x2cf46e])):new Function('return\x200');break;case _0x2aae7f(0x307):_0x1aac6d=_0x1d68db[_0x2cf46e]!==''?JSON[_0x2aae7f(0x2a4)](_0x1d68db[_0x2cf46e]):[],_0x5a47cd=_0x1aac6d[_0x2aae7f(0x185)](_0xa1eba=>new Function(JSON[_0x2aae7f(0x2a4)](_0xa1eba)));break;case'STR':_0x5a47cd=_0x1d68db[_0x2cf46e]!==''?String(_0x1d68db[_0x2cf46e]):'';break;case _0x2aae7f(0x352):_0x1aac6d=_0x1d68db[_0x2cf46e]!==''?JSON[_0x2aae7f(0x2a4)](_0x1d68db[_0x2cf46e]):[],_0x5a47cd=_0x1aac6d['map'](_0x3dda39=>String(_0x3dda39));break;case _0x2aae7f(0x1a8):_0x1eaca9=_0x1d68db[_0x2cf46e]!==''?JSON[_0x2aae7f(0x2a4)](_0x1d68db[_0x2cf46e]):{},_0x5a47cd=VisuMZ['ConvertParams']({},_0x1eaca9);break;case _0x2aae7f(0x2a1):_0x1aac6d=_0x1d68db[_0x2cf46e]!==''?JSON[_0x2aae7f(0x2a4)](_0x1d68db[_0x2cf46e]):[],_0x5a47cd=_0x1aac6d[_0x2aae7f(0x185)](_0x4ecfaa=>VisuMZ[_0x2aae7f(0x207)]({},JSON[_0x2aae7f(0x2a4)](_0x4ecfaa)));break;default:continue;}_0x156ebc[_0x4a3623]=_0x5a47cd;}}return _0x156ebc;},(_0x1428ce=>{const _0x9c252b=_0x435e5d,_0x567338=_0x1428ce[_0x9c252b(0x1ce)];for(const _0x2a5f4d of dependencies){if(_0x9c252b(0x178)!==_0x9c252b(0x17b)){if(!Imported[_0x2a5f4d]){alert(_0x9c252b(0x2b3)[_0x9c252b(0x179)](_0x567338,_0x2a5f4d)),SceneManager[_0x9c252b(0x2ff)]();break;}}else{if(this[_0x9c252b(0x161)][_0x9c252b(0x195)]())return this[_0x9c252b(0x161)][_0x9c252b(0x17e)]()?_0x3fc56d['questButtonAssistActive']:'';else return this[_0x9c252b(0x161)][_0x9c252b(0x310)]()?_0x48f2c5[_0x9c252b(0x33e)]:_0xef9d01['questButtonAssistExpand'];}}const _0x53208d=_0x1428ce[_0x9c252b(0x1cb)];if(_0x53208d[_0x9c252b(0x1bf)](/\[Version[ ](.*?)\]/i)){const _0x27b50b=Number(RegExp['$1']);_0x27b50b!==VisuMZ[label][_0x9c252b(0x324)]&&(_0x9c252b(0x253)!==_0x9c252b(0x294)?(alert(_0x9c252b(0x29b)[_0x9c252b(0x179)](_0x567338,_0x27b50b)),SceneManager['exit']()):this[_0x9c252b(0x26d)](...arguments));}if(_0x53208d[_0x9c252b(0x1bf)](/\[Tier[ ](\d+)\]/i)){if('YvHQi'!==_0x9c252b(0x1c8)){const _0x24bfb9=Number(RegExp['$1']);_0x24bfb9<tier?(alert(_0x9c252b(0x183)[_0x9c252b(0x179)](_0x567338,_0x24bfb9,tier)),SceneManager[_0x9c252b(0x2ff)]()):tier=Math[_0x9c252b(0x27a)](_0x24bfb9,tier);}else{const _0x1e1056=this[_0x9c252b(0x26a)](_0x5b0829),_0x4de8ad=this[_0x9c252b(0x1cc)](_0x2a8638),_0x1801a4=this['textSizeEx'](_0x4de8ad)[_0x9c252b(0x313)];this[_0x9c252b(0x160)](this[_0x9c252b(0x154)](_0x1215fd));const _0x30dcd4=this[_0x9c252b(0x1a3)]();if(_0x30dcd4===_0x9c252b(0x2a8))this[_0x9c252b(0x34d)](_0x4de8ad,_0x1e1056['x']+_0x1e1056[_0x9c252b(0x313)]-_0x1801a4,_0x1e1056['y'],_0x1801a4);else{if(_0x30dcd4===_0x9c252b(0x263)){const _0x17fc1a=_0x1e1056['x']+_0x9e3669[_0x9c252b(0x18a)]((_0x1e1056[_0x9c252b(0x313)]-_0x1801a4)/0x2);this[_0x9c252b(0x34d)](_0x4de8ad,_0x17fc1a,_0x1e1056['y'],_0x1801a4);}else this[_0x9c252b(0x34d)](_0x4de8ad,_0x1e1056['x'],_0x1e1056['y'],_0x1801a4);}}}VisuMZ[_0x9c252b(0x207)](VisuMZ[label][_0x9c252b(0x172)],_0x1428ce[_0x9c252b(0x285)]);})(pluginData),PluginManager['registerCommand'](pluginData['name'],'QuestSet',_0x43d7f2=>{const _0x2fba78=_0x435e5d;VisuMZ['ConvertParams'](_0x43d7f2,_0x43d7f2);const _0x3607b6=_0x43d7f2[_0x2fba78(0x277)],_0x4ec6cd=_0x43d7f2[_0x2fba78(0x288)];for(const _0x5bc023 of _0x3607b6){$gameSystem['setQuestStatus'](_0x5bc023,_0x4ec6cd);}SceneManager[_0x2fba78(0x149)]()&&SceneManager[_0x2fba78(0x304)][_0x2fba78(0x2e7)]();}),PluginManager[_0x435e5d(0x242)](pluginData[_0x435e5d(0x1ce)],_0x435e5d(0x282),_0x531e44=>{const _0x2e908e=_0x435e5d;VisuMZ[_0x2e908e(0x207)](_0x531e44,_0x531e44);const _0x2e8c2b=_0x531e44[_0x2e908e(0x277)],_0x572ccb=_0x531e44[_0x2e908e(0x157)];for(const _0x556b1e of _0x2e8c2b){if(_0x2e908e(0x31e)===_0x2e908e(0x31e))$gameSystem[_0x2e908e(0x250)](_0x556b1e,_0x572ccb);else{const _0x189af=_0x2e07f4[_0x2e908e(0x333)]['ConfigManager_makeData'][_0x2e908e(0x21a)](this);return _0x189af['questTrackerShow']=this[_0x2e908e(0x26f)],_0x189af[_0x2e908e(0x269)]=this[_0x2e908e(0x269)],_0x189af;}}SceneManager[_0x2e908e(0x149)]()&&SceneManager[_0x2e908e(0x304)]['refreshQuestTrackerWindow']();}),PluginManager['registerCommand'](pluginData[_0x435e5d(0x1ce)],_0x435e5d(0x1cd),_0x2cba1b=>{const _0x156ee6=_0x435e5d;VisuMZ['ConvertParams'](_0x2cba1b,_0x2cba1b);const _0x4b26eb=_0x2cba1b[_0x156ee6(0x277)],_0x2c11fb=_0x2cba1b[_0x156ee6(0x24d)],_0x17371e=_0x2cba1b[_0x156ee6(0x288)];for(const _0xb903df of _0x4b26eb){$gameSystem[_0x156ee6(0x21d)](_0xb903df,_0x2c11fb,_0x17371e);}SceneManager[_0x156ee6(0x149)]()&&SceneManager[_0x156ee6(0x304)][_0x156ee6(0x2e7)]();}),PluginManager[_0x435e5d(0x242)](pluginData[_0x435e5d(0x1ce)],_0x435e5d(0x1f8),_0x50728f=>{const _0x3998d0=_0x435e5d;VisuMZ[_0x3998d0(0x207)](_0x50728f,_0x50728f);const _0xfcc8bc=_0x50728f['Keys'],_0x1c5f1a=_0x50728f[_0x3998d0(0x157)];for(const _0xb65468 of _0xfcc8bc){$gameSystem[_0x3998d0(0x164)](_0xb65468,_0x1c5f1a);}SceneManager[_0x3998d0(0x149)]()&&(_0x3998d0(0x1ab)===_0x3998d0(0x29f)?this[_0x3998d0(0x34d)](_0x16c9d1,_0x11022d['x']+_0x4bf873[_0x3998d0(0x313)]-_0x5dcad2,_0x4fe6ac['y'],_0x49e1f6):SceneManager[_0x3998d0(0x304)][_0x3998d0(0x2e7)]());}),PluginManager[_0x435e5d(0x242)](pluginData['name'],'QuestRewards',_0x15dc51=>{const _0x3941ed=_0x435e5d;VisuMZ[_0x3941ed(0x207)](_0x15dc51,_0x15dc51);const _0x3ba08e=_0x15dc51[_0x3941ed(0x277)],_0x73d3a1=_0x15dc51['TargetIDs'],_0x520843=_0x15dc51[_0x3941ed(0x288)];for(const _0x3f2450 of _0x3ba08e){$gameSystem[_0x3941ed(0x267)](_0x3f2450,_0x73d3a1,_0x520843);}SceneManager['isSceneMap']()&&('egtkh'!==_0x3941ed(0x32b)?this[_0x3941ed(0x166)]+=this[_0x3941ed(0x335)]()*0x4:SceneManager[_0x3941ed(0x304)][_0x3941ed(0x2e7)]());}),PluginManager['registerCommand'](pluginData[_0x435e5d(0x1ce)],_0x435e5d(0x221),_0x54b067=>{const _0x5f0926=_0x435e5d;VisuMZ[_0x5f0926(0x207)](_0x54b067,_0x54b067);const _0x3e8b81=_0x54b067[_0x5f0926(0x277)],_0xe20c0a=_0x54b067[_0x5f0926(0x157)];for(const _0x7d5ac2 of _0x3e8b81){$gameSystem[_0x5f0926(0x251)](_0x7d5ac2,_0xe20c0a);}SceneManager[_0x5f0926(0x149)]()&&SceneManager['_scene']['refreshQuestTrackerWindow']();}),PluginManager[_0x435e5d(0x242)](pluginData[_0x435e5d(0x1ce)],_0x435e5d(0x1bc),_0x43813b=>{const _0x1cf9f3=_0x435e5d;VisuMZ[_0x1cf9f3(0x207)](_0x43813b,_0x43813b);const _0x20c8b8=_0x43813b[_0x1cf9f3(0x2dd)];$gameSystem[_0x1cf9f3(0x22d)](_0x20c8b8);if(SceneManager[_0x1cf9f3(0x149)]()){if(_0x1cf9f3(0x2c9)===_0x1cf9f3(0x254)){const _0x29b4e1=_0x5bcf52[_0x1cf9f3(0x26f)],_0x308876=_0x1cf9f3(0x26f);this[_0x1cf9f3(0x170)](_0x29b4e1,_0x308876);}else SceneManager['_scene'][_0x1cf9f3(0x2e7)]();}}),PluginManager['registerCommand'](pluginData[_0x435e5d(0x1ce)],_0x435e5d(0x274),_0x3a5422=>{const _0x1316ba=_0x435e5d;if(!SceneManager[_0x1316ba(0x149)]())return;SceneManager[_0x1316ba(0x304)][_0x1316ba(0x2e7)]();}),PluginManager[_0x435e5d(0x242)](pluginData[_0x435e5d(0x1ce)],_0x435e5d(0x349),_0x98d6f8=>{const _0x4dde50=_0x435e5d;VisuMZ[_0x4dde50(0x207)](_0x98d6f8,_0x98d6f8),$gameSystem[_0x4dde50(0x1e7)](_0x98d6f8['Show']),SceneManager[_0x4dde50(0x149)]()&&(_0x4dde50(0x33b)!==_0x4dde50(0x330)?SceneManager[_0x4dde50(0x304)][_0x4dde50(0x2e7)]():_0x79c8ea=_0x3276c8[_0x4dde50(0x232)](/[\n\r]+/g,'\x1bWrapBreak[0]'));}),PluginManager[_0x435e5d(0x242)](pluginData['name'],_0x435e5d(0x216),_0x209acb=>{const _0x217bb0=_0x435e5d;if($gameParty['inBattle']())return;SceneManager[_0x217bb0(0x32d)](Scene_Quest);}),PluginManager[_0x435e5d(0x242)](pluginData[_0x435e5d(0x1ce)],_0x435e5d(0x200),_0x3832e7=>{const _0x4da011=_0x435e5d;VisuMZ[_0x4da011(0x207)](_0x3832e7,_0x3832e7),$gameSystem[_0x4da011(0x17c)]()[_0x4da011(0x260)]=_0x3832e7['Enable'];}),PluginManager[_0x435e5d(0x242)](pluginData[_0x435e5d(0x1ce)],_0x435e5d(0x1b7),_0xb44c20=>{const _0x31215d=_0x435e5d;VisuMZ['ConvertParams'](_0xb44c20,_0xb44c20),$gameSystem[_0x31215d(0x17c)]()[_0x31215d(0x1b0)]=_0xb44c20[_0x31215d(0x233)];}),VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x2be)]=Scene_Boot[_0x435e5d(0x2ee)][_0x435e5d(0x203)],Scene_Boot[_0x435e5d(0x2ee)][_0x435e5d(0x203)]=function(){const _0xc1a2e6=_0x435e5d;VisuMZ['QuestSystem'][_0xc1a2e6(0x2be)][_0xc1a2e6(0x21a)](this),this[_0xc1a2e6(0x2d5)]();},VisuMZ['QuestSystem'][_0x435e5d(0x187)]=[],VisuMZ[_0x435e5d(0x333)]['QuestData']={},Scene_Boot['prototype'][_0x435e5d(0x2d5)]=function(){const _0x173063=_0x435e5d;for(const _0x3742ba of VisuMZ[_0x173063(0x333)]['Settings']['Categories']){if(_0x173063(0x2ec)!==_0x173063(0x189)){if(!_0x3742ba)continue;for(const _0x42e9b7 of _0x3742ba[_0x173063(0x316)]){if(!_0x42e9b7)continue;_0x42e9b7[_0x173063(0x1cf)]=_0x3742ba,_0x42e9b7[_0x173063(0x20d)][_0x173063(0x21f)](''),_0x42e9b7[_0x173063(0x34a)]['unshift'](''),_0x42e9b7[_0x173063(0x279)][_0x173063(0x21f)](''),_0x42e9b7[_0x173063(0x2d2)][_0x173063(0x21f)](''),_0x42e9b7[_0x173063(0x169)]['unshift']('');const _0x36b9a2=_0x42e9b7[_0x173063(0x2dd)][_0x173063(0x1ef)]()[_0x173063(0x16b)]();VisuMZ['QuestSystem'][_0x173063(0x187)][_0x173063(0x32d)](_0x36b9a2),VisuMZ[_0x173063(0x333)][_0x173063(0x22c)][_0x36b9a2]=_0x42e9b7;}}else _0x31f353[_0x173063(0x304)][_0x173063(0x2e7)]();}},ConfigManager[_0x435e5d(0x26f)]=!![],ConfigManager[_0x435e5d(0x269)]=!![],VisuMZ['QuestSystem'][_0x435e5d(0x1e4)]=ConfigManager[_0x435e5d(0x211)],ConfigManager[_0x435e5d(0x211)]=function(){const _0x49aea8=_0x435e5d,_0x17df69=VisuMZ[_0x49aea8(0x333)]['ConfigManager_makeData']['call'](this);return _0x17df69[_0x49aea8(0x26f)]=this[_0x49aea8(0x26f)],_0x17df69[_0x49aea8(0x269)]=this['questTrackerPosition'],_0x17df69;},VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x2b2)]=ConfigManager[_0x435e5d(0x26b)],ConfigManager[_0x435e5d(0x26b)]=function(_0x3dcfa9){const _0x1220fd=_0x435e5d;VisuMZ[_0x1220fd(0x333)][_0x1220fd(0x2b2)][_0x1220fd(0x21a)](this,_0x3dcfa9),'questTrackerShow'in _0x3dcfa9?this['questTrackerShow']=_0x3dcfa9[_0x1220fd(0x26f)]:this[_0x1220fd(0x26f)]=!![],_0x1220fd(0x269)in _0x3dcfa9?this[_0x1220fd(0x269)]=_0x3dcfa9[_0x1220fd(0x269)]:this[_0x1220fd(0x269)]=!![];},ImageManager[_0x435e5d(0x319)]=VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x172)][_0x435e5d(0x20b)][_0x435e5d(0x1e5)],ImageManager[_0x435e5d(0x1e6)]=VisuMZ['QuestSystem']['Settings'][_0x435e5d(0x20b)][_0x435e5d(0x2fb)],ImageManager['questFailedIcon']=VisuMZ['QuestSystem'][_0x435e5d(0x172)]['General']['CommandWindow_Failed_Icon'],TextManager['questCommandName']=VisuMZ['QuestSystem'][_0x435e5d(0x172)][_0x435e5d(0x301)][_0x435e5d(0x1fe)],TextManager[_0x435e5d(0x1fc)]=VisuMZ['QuestSystem'][_0x435e5d(0x172)][_0x435e5d(0x20b)][_0x435e5d(0x2ac)],TextManager[_0x435e5d(0x22a)]=VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x172)][_0x435e5d(0x20b)][_0x435e5d(0x1db)],TextManager[_0x435e5d(0x182)]=VisuMZ[_0x435e5d(0x333)]['Settings']['General'][_0x435e5d(0x348)],TextManager[_0x435e5d(0x1e9)]=VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x172)][_0x435e5d(0x20b)][_0x435e5d(0x2f5)],TextManager['questCategoryClosedFmt']=VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x172)][_0x435e5d(0x20b)][_0x435e5d(0x19b)],TextManager[_0x435e5d(0x33d)]=VisuMZ[_0x435e5d(0x333)]['Settings']['General'][_0x435e5d(0x1f4)],TextManager[_0x435e5d(0x29a)]=VisuMZ[_0x435e5d(0x333)]['Settings'][_0x435e5d(0x20b)][_0x435e5d(0x28e)],TextManager[_0x435e5d(0x1b6)]=VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x172)][_0x435e5d(0x20b)][_0x435e5d(0x215)],TextManager[_0x435e5d(0x158)]=VisuMZ['QuestSystem'][_0x435e5d(0x172)][_0x435e5d(0x20b)][_0x435e5d(0x295)],TextManager[_0x435e5d(0x34b)]=VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x172)]['General'][_0x435e5d(0x1e0)],TextManager[_0x435e5d(0x229)]=VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x172)]['General']['Objective_Completed_Fmt'],TextManager[_0x435e5d(0x2ef)]=VisuMZ['QuestSystem']['Settings'][_0x435e5d(0x20b)][_0x435e5d(0x2b5)],TextManager[_0x435e5d(0x308)]=VisuMZ['QuestSystem'][_0x435e5d(0x172)][_0x435e5d(0x20b)][_0x435e5d(0x186)],TextManager[_0x435e5d(0x25a)]=VisuMZ['QuestSystem'][_0x435e5d(0x172)][_0x435e5d(0x20b)][_0x435e5d(0x325)],TextManager[_0x435e5d(0x2f3)]=VisuMZ[_0x435e5d(0x333)]['Settings'][_0x435e5d(0x20b)][_0x435e5d(0x1de)],TextManager[_0x435e5d(0x341)]=VisuMZ['QuestSystem'][_0x435e5d(0x172)][_0x435e5d(0x20b)][_0x435e5d(0x21c)],TextManager[_0x435e5d(0x30a)]=VisuMZ['QuestSystem'][_0x435e5d(0x172)][_0x435e5d(0x20b)][_0x435e5d(0x30a)],TextManager[_0x435e5d(0x181)]=VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x172)][_0x435e5d(0x20b)][_0x435e5d(0x15d)],TextManager[_0x435e5d(0x33e)]=VisuMZ['QuestSystem']['Settings'][_0x435e5d(0x20b)][_0x435e5d(0x25b)],TextManager[_0x435e5d(0x2a9)]=_0x435e5d(0x299),TextManager[_0x435e5d(0x331)]=VisuMZ[_0x435e5d(0x333)]['Settings'][_0x435e5d(0x192)]['TrackerFmt']||TextManager[_0x435e5d(0x2a9)],TextManager[_0x435e5d(0x1f0)]=VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x172)][_0x435e5d(0x20b)]['ListWindowTrackedQuest'],TextManager[_0x435e5d(0x26f)]=VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x172)][_0x435e5d(0x192)][_0x435e5d(0x1e1)],TextManager[_0x435e5d(0x269)]=VisuMZ[_0x435e5d(0x333)]['Settings'][_0x435e5d(0x192)]['PositionName'],TextManager['questTrackerPosOff']=VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x172)][_0x435e5d(0x192)][_0x435e5d(0x198)],TextManager[_0x435e5d(0x350)]=VisuMZ['QuestSystem'][_0x435e5d(0x172)]['Tracker'][_0x435e5d(0x2d0)],SceneManager[_0x435e5d(0x149)]=function(){const _0x11720a=_0x435e5d;return this[_0x11720a(0x304)]&&this[_0x11720a(0x304)][_0x11720a(0x1c0)]===Scene_Map;},VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x2d3)]=Game_System[_0x435e5d(0x2ee)]['initialize'],Game_System[_0x435e5d(0x2ee)]['initialize']=function(){const _0x481cb0=_0x435e5d;VisuMZ[_0x481cb0(0x333)][_0x481cb0(0x2d3)][_0x481cb0(0x21a)](this),this[_0x481cb0(0x2a7)]();},Game_System[_0x435e5d(0x2ee)][_0x435e5d(0x2a7)]=function(){const _0x56271a=_0x435e5d,_0x367b6f=VisuMZ[_0x56271a(0x333)][_0x56271a(0x172)][_0x56271a(0x20b)],_0x30275c=VisuMZ[_0x56271a(0x333)][_0x56271a(0x172)][_0x56271a(0x301)];this['_quests']={'shown':_0x30275c['ShowMainMenu'],'enabled':_0x30275c[_0x56271a(0x214)],'known':[],'completed':[],'failed':[],'description':{},'objectives':{},'objectivesCompleted':{},'objectivesFailed':{},'rewards':{},'rewardsClaimed':{},'rewardsDenied':{},'subtext':{},'quotes':{},'tracked':_0x367b6f[_0x56271a(0x193)][_0x56271a(0x1ef)]()[_0x56271a(0x16b)](),'showTracker':!![]};for(const _0x4eddbf of _0x367b6f[_0x56271a(0x230)]){if(_0x56271a(0x2e2)!==_0x56271a(0x2e2)){if(![]){const _0x681da0=this[_0x56271a(0x1c6)](),_0x5ada57=this['_quest']?this[_0x56271a(0x2f1)]():this[_0x56271a(0x202)](),_0x3d9f7b=this[_0x56271a(0x1b3)](_0x5ada57['trim']());this[_0x56271a(0x166)]=_0x3d9f7b[_0x56271a(0x1c1)],this['constructor']===_0x20e30a&&(this[_0x56271a(0x166)]+=this[_0x56271a(0x335)](),_0x415ecd[_0x56271a(0x327)]&&(this[_0x56271a(0x166)]+=this[_0x56271a(0x335)]()*0x4));}const _0x28dfc8=this[_0x56271a(0x2e0)]?this[_0x56271a(0x2f1)]():this['createEmptyText']();this[_0x56271a(0x166)]=this[_0x56271a(0x1b3)](_0x28dfc8[_0x56271a(0x16b)]())[_0x56271a(0x1c1)];}else this[_0x56271a(0x342)](_0x4eddbf,_0x56271a(0x252));}for(const _0x1a2a42 of _0x367b6f[_0x56271a(0x284)]){if(_0x56271a(0x1b4)===_0x56271a(0x1b4))this['setQuestStatus'](_0x1a2a42,_0x56271a(0x1d2));else return _0x247426[_0x56271a(0x181)];}for(const _0x196a0b of _0x367b6f[_0x56271a(0x1f2)]){_0x56271a(0x281)===_0x56271a(0x281)?this[_0x56271a(0x342)](_0x196a0b,_0x56271a(0x247)):this[_0x56271a(0x1ad)]();}},Game_System[_0x435e5d(0x2ee)][_0x435e5d(0x2f4)]=function(_0x1ccc2a){const _0x549259=_0x435e5d;return _0x1ccc2a=_0x1ccc2a[_0x549259(0x1ef)]()[_0x549259(0x16b)](),VisuMZ[_0x549259(0x333)][_0x549259(0x22c)][_0x1ccc2a];},Game_System[_0x435e5d(0x2ee)][_0x435e5d(0x17c)]=function(){const _0x283683=_0x435e5d;if(this[_0x283683(0x2f7)]===undefined)this[_0x283683(0x2a7)]();return this['_quests'];},Game_System[_0x435e5d(0x2ee)][_0x435e5d(0x2c7)]=function(){const _0xc1f5fa=_0x435e5d;return this[_0xc1f5fa(0x17c)]()[_0xc1f5fa(0x1b0)];},Game_System[_0x435e5d(0x2ee)]['isquestMenuEnabled']=function(){const _0x420390=_0x435e5d;return this[_0x420390(0x17c)]()[_0x420390(0x260)];},Game_System[_0x435e5d(0x2ee)]['setQuestStatus']=function(_0x2c90ac,_0x55101d){const _0x496d44=_0x435e5d;_0x2c90ac=_0x2c90ac[_0x496d44(0x1ef)]()[_0x496d44(0x16b)]();if(!VisuMZ[_0x496d44(0x333)]['QuestData'][_0x2c90ac])return;const _0x38627f=this['questData']();_0x38627f[_0x496d44(0x252)]=_0x38627f[_0x496d44(0x252)]||[],_0x38627f[_0x496d44(0x1d2)]=_0x38627f[_0x496d44(0x1d2)]||[],_0x38627f[_0x496d44(0x247)]=_0x38627f[_0x496d44(0x247)]||[],_0x38627f[_0x496d44(0x252)][_0x496d44(0x320)](_0x2c90ac),_0x38627f['completed'][_0x496d44(0x320)](_0x2c90ac),_0x38627f['failed'][_0x496d44(0x320)](_0x2c90ac);if(_0x55101d!==_0x496d44(0x320))_0x38627f[_0x55101d][_0x496d44(0x32d)](_0x2c90ac);if(_0x2c90ac===_0x38627f[_0x496d44(0x32a)][_0x496d44(0x1ef)]()['trim']()){if(_0x496d44(0x171)==='LwZhR'){_0x564156['ConvertParams'](_0x27d314,_0x54caf9);const _0x199da9=_0x11c67b['Keys'],_0x43726f=_0x59356f[_0x496d44(0x24d)],_0x54a863=_0x26a8b1[_0x496d44(0x288)];for(const _0x13aac1 of _0x199da9){_0x434396[_0x496d44(0x267)](_0x13aac1,_0x43726f,_0x54a863);}_0x4d9310['isSceneMap']()&&_0x4b24c2[_0x496d44(0x304)][_0x496d44(0x2e7)]();}else _0x55101d!=='known'&&this[_0x496d44(0x22d)]('');}},Game_System[_0x435e5d(0x2ee)][_0x435e5d(0x2b4)]=function(){const _0x3bf0b5=_0x435e5d,_0x2236cc=this[_0x3bf0b5(0x17c)]();return _0x2236cc['known']=_0x2236cc[_0x3bf0b5(0x252)]||[],_0x2236cc[_0x3bf0b5(0x252)][_0x3bf0b5(0x185)](_0x29ef63=>this[_0x3bf0b5(0x2f4)](_0x29ef63))['remove'](null);},Game_System[_0x435e5d(0x2ee)]['isQuestKnown']=function(_0x31fd10){const _0x179433=_0x435e5d,_0x2e4741=this[_0x179433(0x17c)]();return _0x2e4741[_0x179433(0x252)]=_0x2e4741[_0x179433(0x252)]||[],_0x31fd10=_0x31fd10[_0x179433(0x1ef)]()['trim'](),_0x2e4741[_0x179433(0x252)][_0x179433(0x270)](_0x31fd10);},Game_System[_0x435e5d(0x2ee)]['questsCompleted']=function(){const _0x1be87b=_0x435e5d,_0x4f94cb=this[_0x1be87b(0x17c)]();return _0x4f94cb[_0x1be87b(0x1d2)]=_0x4f94cb[_0x1be87b(0x1d2)]||[],_0x4f94cb[_0x1be87b(0x1d2)][_0x1be87b(0x185)](_0x4bab51=>this[_0x1be87b(0x2f4)](_0x4bab51))['remove'](null);},Game_System[_0x435e5d(0x2ee)][_0x435e5d(0x1b5)]=function(_0x40e56b){const _0x453e75=_0x435e5d,_0x2f2909=this[_0x453e75(0x17c)]();return _0x2f2909[_0x453e75(0x1d2)]=_0x2f2909[_0x453e75(0x1d2)]||[],_0x40e56b=_0x40e56b[_0x453e75(0x1ef)]()[_0x453e75(0x16b)](),_0x2f2909[_0x453e75(0x1d2)]['includes'](_0x40e56b);},Game_System[_0x435e5d(0x2ee)][_0x435e5d(0x303)]=function(){const _0x3ef113=_0x435e5d,_0x3a25e7=this[_0x3ef113(0x17c)]();return _0x3a25e7[_0x3ef113(0x247)]=_0x3a25e7[_0x3ef113(0x247)]||[],_0x3a25e7[_0x3ef113(0x247)][_0x3ef113(0x185)](_0x34db09=>this[_0x3ef113(0x2f4)](_0x34db09))[_0x3ef113(0x320)](null);},Game_System[_0x435e5d(0x2ee)][_0x435e5d(0x235)]=function(_0x129bd2){const _0x1e1229=_0x435e5d,_0x50fef1=this[_0x1e1229(0x17c)]();return _0x50fef1['failed']=_0x50fef1[_0x1e1229(0x247)]||[],_0x129bd2=_0x129bd2[_0x1e1229(0x1ef)]()['trim'](),_0x50fef1[_0x1e1229(0x247)]['includes'](_0x129bd2);},Game_System[_0x435e5d(0x2ee)][_0x435e5d(0x1f9)]=function(_0x5aa945){const _0x387bd5=_0x435e5d;_0x5aa945=_0x5aa945['toUpperCase']()[_0x387bd5(0x16b)]();const _0x21607f=this[_0x387bd5(0x2f4)](_0x5aa945);if(!_0x21607f)return'';const _0x3674bd=this[_0x387bd5(0x17c)]()[_0x387bd5(0x1cb)];_0x3674bd[_0x5aa945]=_0x3674bd[_0x5aa945]||0x1;const _0x5109e9=_0x3674bd[_0x5aa945];return _0x21607f[_0x387bd5(0x20d)][_0x5109e9]||'';},Game_System[_0x435e5d(0x2ee)]['setQuestDescription']=function(_0x358be8,_0x14eac4){const _0x2900cd=_0x435e5d;_0x358be8=_0x358be8['toUpperCase']()[_0x2900cd(0x16b)]();const _0x5428f3=this[_0x2900cd(0x2f4)](_0x358be8);if(!_0x5428f3)return'';const _0x2e9ae5=this['questData']()[_0x2900cd(0x1cb)];_0x2e9ae5[_0x358be8]=_0x14eac4;},Game_System[_0x435e5d(0x2ee)][_0x435e5d(0x236)]=function(_0x1b74da){const _0x4141c1=_0x435e5d;_0x1b74da=_0x1b74da[_0x4141c1(0x1ef)]()['trim']();const _0x119f31=this['quest'](_0x1b74da);if(!_0x119f31)return'';const _0x4fffa1=this[_0x4141c1(0x17c)]();return _0x4fffa1[_0x4141c1(0x196)]=_0x4fffa1['objectives']||{},!_0x4fffa1[_0x4141c1(0x196)][_0x1b74da]&&(_0x4fffa1['objectives'][_0x1b74da]=JsonEx[_0x4141c1(0x19c)](_0x119f31[_0x4141c1(0x1d7)])),_0x4fffa1[_0x4141c1(0x196)][_0x1b74da][_0x4141c1(0x321)]((_0x300147,_0x27e066)=>_0x300147-_0x27e066);},Game_System[_0x435e5d(0x2ee)]['setQuestObjectives']=function(_0x25a3c0,_0x17bd17,_0x305896){const _0x2c28cd=_0x435e5d;_0x25a3c0=_0x25a3c0[_0x2c28cd(0x1ef)]()['trim']();const _0x2a555a=this[_0x2c28cd(0x2f4)](_0x25a3c0);if(!_0x2a555a)return'';const _0x15aa81=this[_0x2c28cd(0x17c)]();_0x15aa81[_0x2c28cd(0x196)]=_0x15aa81[_0x2c28cd(0x196)]||{};if(!_0x15aa81['objectives'][_0x25a3c0]){if('fmZNL'!==_0x2c28cd(0x283)){const _0x13c9ea=this['questData']();return _0x13c9ea['completed']=_0x13c9ea['completed']||[],_0x13e832=_0x44ada6[_0x2c28cd(0x1ef)]()['trim'](),_0x13c9ea[_0x2c28cd(0x1d2)]['includes'](_0x2de1ec);}else _0x15aa81[_0x2c28cd(0x196)][_0x25a3c0]=JsonEx[_0x2c28cd(0x19c)](_0x2a555a['VisibleObjectives']);}_0x15aa81[_0x2c28cd(0x196)][_0x25a3c0]=_0x15aa81[_0x2c28cd(0x196)][_0x25a3c0]||[],_0x15aa81[_0x2c28cd(0x174)][_0x25a3c0]=_0x15aa81['objectivesCompleted'][_0x25a3c0]||[],_0x15aa81[_0x2c28cd(0x1ed)][_0x25a3c0]=_0x15aa81['objectivesFailed'][_0x25a3c0]||[];for(const _0x32d57b of _0x17bd17){_0x15aa81[_0x2c28cd(0x196)][_0x25a3c0][_0x2c28cd(0x320)](_0x32d57b),_0x15aa81[_0x2c28cd(0x174)][_0x25a3c0][_0x2c28cd(0x320)](_0x32d57b),_0x15aa81['objectivesFailed'][_0x25a3c0]['remove'](_0x32d57b);switch(_0x305896){case _0x2c28cd(0x177):case _0x2c28cd(0x252):_0x15aa81[_0x2c28cd(0x196)][_0x25a3c0]['push'](_0x32d57b);break;case'complete':case _0x2c28cd(0x1d2):_0x15aa81[_0x2c28cd(0x174)][_0x25a3c0][_0x2c28cd(0x32d)](_0x32d57b);break;case'fail':case _0x2c28cd(0x247):_0x15aa81['objectivesFailed'][_0x25a3c0][_0x2c28cd(0x32d)](_0x32d57b);break;case _0x2c28cd(0x320):case _0x2c28cd(0x16e):break;}}},Game_System[_0x435e5d(0x2ee)]['questObjectivesCompleted']=function(_0x17e9dc){const _0x34288b=_0x435e5d;_0x17e9dc=_0x17e9dc[_0x34288b(0x1ef)]()[_0x34288b(0x16b)]();const _0x12f427=this['quest'](_0x17e9dc);if(!_0x12f427)return'';const _0x292603=this['questData']();return _0x292603[_0x34288b(0x174)]=_0x292603['objectivesCompleted']||{},_0x292603[_0x34288b(0x174)][_0x17e9dc]=_0x292603[_0x34288b(0x174)][_0x17e9dc]||[],_0x292603[_0x34288b(0x174)][_0x17e9dc][_0x34288b(0x321)]((_0x2ea20e,_0x4047f5)=>_0x2ea20e-_0x4047f5);},Game_System[_0x435e5d(0x2ee)][_0x435e5d(0x27d)]=function(_0x3567df){const _0xc86852=_0x435e5d;_0x3567df=_0x3567df['toUpperCase']()[_0xc86852(0x16b)]();const _0xc13b28=this[_0xc86852(0x2f4)](_0x3567df);if(!_0xc13b28)return'';const _0x47145b=this[_0xc86852(0x17c)]();return _0x47145b[_0xc86852(0x1ed)]=_0x47145b['objectivesFailed']||{},_0x47145b[_0xc86852(0x1ed)][_0x3567df]=_0x47145b[_0xc86852(0x1ed)][_0x3567df]||[],_0x47145b[_0xc86852(0x1ed)][_0x3567df]['sort']((_0x165fc7,_0x5d1fdd)=>_0x165fc7-_0x5d1fdd);},Game_System[_0x435e5d(0x2ee)][_0x435e5d(0x176)]=function(_0x2f713a){const _0x19dfc6=_0x435e5d;_0x2f713a=_0x2f713a[_0x19dfc6(0x1ef)]()[_0x19dfc6(0x16b)]();const _0x403841=this['quest'](_0x2f713a);if(!_0x403841)return'';const _0x2c4cde=this[_0x19dfc6(0x17c)]();_0x2c4cde['rewards']=_0x2c4cde[_0x19dfc6(0x1fb)]||{};if(!_0x2c4cde['rewards'][_0x2f713a]){if(_0x19dfc6(0x228)!==_0x19dfc6(0x175))_0x2c4cde[_0x19dfc6(0x1fb)][_0x2f713a]=JsonEx['makeDeepCopy'](_0x403841['VisibleRewards']);else{if(_0xfe1fd2!==this['deathStateId']())return;if(!this[_0x19dfc6(0x14c)]())return;if(!_0x366292)return;if(!this[_0x19dfc6(0x27b)]())return;if(this[_0x19dfc6(0x225)])return;this[_0x19dfc6(0x225)]=!![];const _0x304e80=this['enemy']()[_0x19dfc6(0x2ca)],_0x4aaebe=_0x304e80[_0x19dfc6(0x1bf)](/<VARIABLE (\d+) ON DEATH: ([\+\-]\d+)>/gi);if(_0x4aaebe)for(const _0x37edae of _0x4aaebe){_0x37edae[_0x19dfc6(0x1bf)](/<VARIABLE (\d+) ON DEATH: ([\+\-]\d+)>/i);const _0x3edcb9=_0x4e1346(_0x3597f7['$1']),_0x12c2b9=_0x28a1e8(_0x1a7e63['$2']),_0x48c786=_0x82ac13[_0x19dfc6(0x268)](_0x3edcb9);_0x3ab745['setValue'](_0x3edcb9,_0x48c786+_0x12c2b9);}}}return _0x2c4cde[_0x19dfc6(0x1fb)][_0x2f713a]['sort']((_0x489671,_0x1d800b)=>_0x489671-_0x1d800b);},Game_System['prototype']['setQuestRewards']=function(_0x1e1ae3,_0x326b12,_0x2af800){const _0x4ea7cc=_0x435e5d;_0x1e1ae3=_0x1e1ae3['toUpperCase']()[_0x4ea7cc(0x16b)]();const _0x3373cd=this[_0x4ea7cc(0x2f4)](_0x1e1ae3);if(!_0x3373cd)return'';const _0x4983b5=this['questData']();_0x4983b5[_0x4ea7cc(0x1fb)]=_0x4983b5[_0x4ea7cc(0x1fb)]||{};!_0x4983b5[_0x4ea7cc(0x1fb)][_0x1e1ae3]&&(_0x4983b5['rewards'][_0x1e1ae3]=JsonEx[_0x4ea7cc(0x19c)](_0x3373cd[_0x4ea7cc(0x245)]));_0x4983b5['rewards'][_0x1e1ae3]=_0x4983b5[_0x4ea7cc(0x1fb)][_0x1e1ae3]||[],_0x4983b5[_0x4ea7cc(0x1f1)][_0x1e1ae3]=_0x4983b5[_0x4ea7cc(0x1f1)][_0x1e1ae3]||[],_0x4983b5[_0x4ea7cc(0x275)][_0x1e1ae3]=_0x4983b5[_0x4ea7cc(0x275)][_0x1e1ae3]||[];for(const _0x2453c3 of _0x326b12){if('XCgEm'!==_0x4ea7cc(0x2f8)){_0x4983b5['rewards'][_0x1e1ae3][_0x4ea7cc(0x320)](_0x2453c3),_0x4983b5[_0x4ea7cc(0x1f1)][_0x1e1ae3][_0x4ea7cc(0x320)](_0x2453c3),_0x4983b5[_0x4ea7cc(0x275)][_0x1e1ae3][_0x4ea7cc(0x320)](_0x2453c3);switch(_0x2af800){case _0x4ea7cc(0x177):case _0x4ea7cc(0x252):_0x4983b5[_0x4ea7cc(0x1fb)][_0x1e1ae3][_0x4ea7cc(0x32d)](_0x2453c3);break;case _0x4ea7cc(0x1b2):case _0x4ea7cc(0x32e):_0x4983b5[_0x4ea7cc(0x1f1)][_0x1e1ae3][_0x4ea7cc(0x32d)](_0x2453c3);break;case _0x4ea7cc(0x2eb):case _0x4ea7cc(0x234):_0x4983b5['rewardsDenied'][_0x1e1ae3][_0x4ea7cc(0x32d)](_0x2453c3);break;case _0x4ea7cc(0x320):case _0x4ea7cc(0x16e):break;}}else _0x204c48['prototype'][_0x4ea7cc(0x1e3)]['call'](this,_0x392bb6);}},Game_System[_0x435e5d(0x2ee)][_0x435e5d(0x1ae)]=function(_0x16b4b6){const _0x199018=_0x435e5d;_0x16b4b6=_0x16b4b6['toUpperCase']()[_0x199018(0x16b)]();const _0x23552c=this['quest'](_0x16b4b6);if(!_0x23552c)return'';const _0x1955dd=this[_0x199018(0x17c)]();return _0x1955dd[_0x199018(0x1f1)]=_0x1955dd['rewardsClaimed']||{},_0x1955dd[_0x199018(0x1f1)][_0x16b4b6]=_0x1955dd[_0x199018(0x1f1)][_0x16b4b6]||[],_0x1955dd['rewardsClaimed'][_0x16b4b6][_0x199018(0x321)]((_0x380da4,_0x2d9f5d)=>_0x380da4-_0x2d9f5d);},Game_System[_0x435e5d(0x2ee)][_0x435e5d(0x1b1)]=function(_0xbc0fa5){const _0x2e1ff2=_0x435e5d;_0xbc0fa5=_0xbc0fa5['toUpperCase']()[_0x2e1ff2(0x16b)]();const _0x2d5b55=this[_0x2e1ff2(0x2f4)](_0xbc0fa5);if(!_0x2d5b55)return'';const _0x1dfe30=this['questData']();return _0x1dfe30['rewardsDenied']=_0x1dfe30[_0x2e1ff2(0x275)]||{},_0x1dfe30['rewardsDenied'][_0xbc0fa5]=_0x1dfe30[_0x2e1ff2(0x275)][_0xbc0fa5]||[],_0x1dfe30['rewardsDenied'][_0xbc0fa5]['sort']((_0x17ed45,_0x426eb4)=>_0x17ed45-_0x426eb4);},Game_System[_0x435e5d(0x2ee)][_0x435e5d(0x1f6)]=function(_0x48a319){const _0x5ab903=_0x435e5d;_0x48a319=_0x48a319['toUpperCase']()['trim']();const _0x388088=this['quest'](_0x48a319);if(!_0x388088)return'';const _0x3a3c00=this[_0x5ab903(0x17c)]()[_0x5ab903(0x1f3)];_0x3a3c00[_0x48a319]=_0x3a3c00[_0x48a319]||0x1;const _0x27c267=_0x3a3c00[_0x48a319];return _0x388088[_0x5ab903(0x2d2)][_0x27c267]||'';},Game_System[_0x435e5d(0x2ee)][_0x435e5d(0x251)]=function(_0x402353,_0x50952f){const _0xaada51=_0x435e5d;_0x402353=_0x402353['toUpperCase']()['trim']();const _0x47a8cb=this[_0xaada51(0x2f4)](_0x402353);if(!_0x47a8cb)return'';const _0x257ed9=this['questData']()[_0xaada51(0x1f3)];_0x257ed9[_0x402353]=_0x50952f;},Game_System[_0x435e5d(0x2ee)]['questQuote']=function(_0x3ec502){const _0x4849b3=_0x435e5d;_0x3ec502=_0x3ec502['toUpperCase']()[_0x4849b3(0x16b)]();const _0x2be2c=this[_0x4849b3(0x2f4)](_0x3ec502);if(!_0x2be2c)return'';const _0x30370f=this[_0x4849b3(0x17c)]()[_0x4849b3(0x2e4)];_0x30370f[_0x3ec502]=_0x30370f[_0x3ec502]||0x1;const _0x2235cb=_0x30370f[_0x3ec502];return _0x2be2c['Quotes'][_0x2235cb]||'';},Game_System[_0x435e5d(0x2ee)][_0x435e5d(0x164)]=function(_0x339066,_0x1e929c){const _0x26285e=_0x435e5d;_0x339066=_0x339066[_0x26285e(0x1ef)]()[_0x26285e(0x16b)]();const _0x238868=this[_0x26285e(0x2f4)](_0x339066);if(!_0x238868)return'';const _0x2c01d9=this[_0x26285e(0x17c)]()[_0x26285e(0x2e4)];_0x2c01d9[_0x339066]=_0x1e929c;},Game_System['prototype'][_0x435e5d(0x30c)]=function(){const _0x317b65=_0x435e5d,_0xb685e7=this['questData']();return this[_0x317b65(0x2f4)](_0xb685e7[_0x317b65(0x32a)]);},Game_System[_0x435e5d(0x2ee)]['setTrackedQuest']=function(_0x4ec320,_0x1b186c){const _0x360bc6=_0x435e5d,_0x223df6=this['questData']();if(_0x1b186c&&_0x223df6['tracked']===_0x4ec320)_0x4ec320='';_0x223df6['tracked']=_0x4ec320,SceneManager[_0x360bc6(0x149)]()&&SceneManager['_scene'][_0x360bc6(0x23a)](_0x4ec320);},Game_System[_0x435e5d(0x2ee)]['isQuestTrackerVisible']=function(){const _0x4e220b=_0x435e5d,_0x317c40=this['questData']();return _0x317c40[_0x4e220b(0x2b0)];},Game_System[_0x435e5d(0x2ee)]['setQuestTrackerVisible']=function(_0x3f3d7c){const _0x1b8dcc=_0x435e5d,_0x493e4f=this[_0x1b8dcc(0x17c)]();_0x493e4f[_0x1b8dcc(0x2b0)]=_0x3f3d7c;},VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x1a0)]=Game_BattlerBase[_0x435e5d(0x2ee)][_0x435e5d(0x23e)],Game_BattlerBase[_0x435e5d(0x2ee)][_0x435e5d(0x23e)]=function(_0x17aac9){const _0xadcac7=_0x435e5d,_0x3148d4=this[_0xadcac7(0x286)]();VisuMZ[_0xadcac7(0x333)][_0xadcac7(0x1a0)][_0xadcac7(0x21a)](this,_0x17aac9),this[_0xadcac7(0x33a)](_0x17aac9,_0x3148d4);},Game_BattlerBase[_0x435e5d(0x2ee)][_0x435e5d(0x33a)]=function(_0x57c91f,_0x4ac627){const _0x28fb34=_0x435e5d;if(_0x57c91f!==this[_0x28fb34(0x1dd)]())return;if(!this[_0x28fb34(0x14c)]())return;if(!_0x4ac627)return;if(!this['isDead']())return;if(this['_hasDiedBefore'])return;this[_0x28fb34(0x225)]=!![];const _0x2f54e1=this[_0x28fb34(0x152)]()['note'],_0x25d5a7=_0x2f54e1[_0x28fb34(0x1bf)](/<VARIABLE (\d+) ON DEATH: ([\+\-]\d+)>/gi);if(_0x25d5a7)for(const _0x29b3cc of _0x25d5a7){_0x29b3cc[_0x28fb34(0x1bf)](/<VARIABLE (\d+) ON DEATH: ([\+\-]\d+)>/i);const _0xf14c9=Number(RegExp['$1']),_0x338ed0=Number(RegExp['$2']),_0x481a6a=$gameVariables[_0x28fb34(0x268)](_0xf14c9);$gameVariables[_0x28fb34(0x17a)](_0xf14c9,_0x481a6a+_0x338ed0);}},VisuMZ['QuestSystem'][_0x435e5d(0x14f)]=Game_Battler[_0x435e5d(0x2ee)][_0x435e5d(0x2ea)],Game_Battler[_0x435e5d(0x2ee)][_0x435e5d(0x2ea)]=function(_0x208cda){const _0x190a6a=_0x435e5d;VisuMZ[_0x190a6a(0x333)][_0x190a6a(0x14f)][_0x190a6a(0x21a)](this,_0x208cda),this['questJournalSystemUseItem'](_0x208cda);},Game_Battler[_0x435e5d(0x2ee)][_0x435e5d(0x2d6)]=function(_0x104ff6){const _0x435e31=_0x435e5d;if(!_0x104ff6)return;if(!this['isActor']())return;const _0x117511=_0x104ff6[_0x435e31(0x2ca)],_0x25dbac=_0x117511[_0x435e31(0x1bf)](/<VARIABLE (\d+) ON USE: ([\+\-]\d+)>/gi);if(_0x25dbac){if(_0x435e31(0x2bd)==='oSsKj'){if(!this[_0x435e31(0x2f0)])return;_0x5a78e9=_0x310b98[_0x435e31(0x1ef)]()['trim']();const _0x40fdaf=_0x2e39b5[_0x435e31(0x2f4)](_0x456600);this[_0x435e31(0x2f0)]['setQuest'](_0x40fdaf);}else for(const _0x1a44a7 of _0x25dbac){if(_0x435e31(0x2d1)===_0x435e31(0x2e3)){_0x55ab19[_0x435e31(0x333)][_0x435e31(0x172)][_0x435e31(0x20b)][_0x435e31(0x1da)]();let _0x11910f=this['getEmptyLogFmt']();return _0x11910f=_0x11c2b0[_0x435e31(0x333)]['applyWordWrap'](_0x11910f),_0x11910f=_0x4ced07['QuestSystem'][_0x435e31(0x18b)](_0x11910f),_0x11910f;}else{_0x1a44a7[_0x435e31(0x1bf)](/<VARIABLE (\d+) ON USE: ([\+\-]\d+)>/i);const _0x572dff=Number(RegExp['$1']),_0x2f0bae=Number(RegExp['$2']),_0x54182f=$gameVariables[_0x435e31(0x268)](_0x572dff);$gameVariables[_0x435e31(0x17a)](_0x572dff,_0x54182f+_0x2f0bae);}}}},VisuMZ[_0x435e5d(0x333)]['Game_Actor_tradeItemWithParty']=Game_Actor['prototype'][_0x435e5d(0x34c)],Game_Actor[_0x435e5d(0x2ee)][_0x435e5d(0x34c)]=function(_0x37768c,_0x2e665d){const _0x3c50f6=_0x435e5d;$gameTemp[_0x3c50f6(0x2da)]=!![];const _0x180554=VisuMZ['QuestSystem'][_0x3c50f6(0x227)][_0x3c50f6(0x21a)](this,_0x37768c,_0x2e665d);return $gameTemp[_0x3c50f6(0x2da)]=undefined,_0x180554;},VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x1fd)]=Game_Party['prototype']['gainItem'],Game_Party['prototype'][_0x435e5d(0x2f9)]=function(_0x4d25d7,_0x718e6b,_0x50fe8a){const _0x1922b0=_0x435e5d;VisuMZ[_0x1922b0(0x333)]['Game_Party_gainItem']['call'](this,_0x4d25d7,_0x718e6b,_0x50fe8a),this[_0x1922b0(0x194)](_0x4d25d7,_0x718e6b);},Game_Party['prototype'][_0x435e5d(0x194)]=function(_0x4cb111,_0x143664){const _0x10f1ac=_0x435e5d;if(!_0x4cb111)return;if($gameTemp['_tradeItemWithParty'])return;const _0x18bd5a=_0x4cb111[_0x10f1ac(0x2ca)];if(_0x143664>0x0){if(_0x10f1ac(0x26c)!==_0x10f1ac(0x26c)){if(_0x23d466[_0x10f1ac(0x150)])return _0x1e24ce;return _0x12790c=_0x243981[_0x10f1ac(0x232)](/<COLORLOCK>/gi,''),_0x400128=_0x594fa6['replace'](/<\/COLORLOCK>/gi,''),_0x5a1f50;}else{const _0x31d45e=_0x18bd5a[_0x10f1ac(0x1bf)](/<VARIABLE (\d+) ON GAIN: ([\+\-]\d+)>/gi);if(_0x31d45e){if(_0x10f1ac(0x1ee)!==_0x10f1ac(0x1ee)){const _0x23d133=this[_0x10f1ac(0x17c)]();return this[_0x10f1ac(0x2f4)](_0x23d133[_0x10f1ac(0x32a)]);}else for(const _0x1260a3 of _0x31d45e){_0x1260a3[_0x10f1ac(0x1bf)](/<VARIABLE (\d+) ON GAIN: ([\+\-]\d+)>/i);const _0xa06d53=Number(RegExp['$1']),_0x3dc458=Number(RegExp['$2'])*_0x143664,_0xb6bc30=$gameVariables['value'](_0xa06d53);$gameVariables[_0x10f1ac(0x17a)](_0xa06d53,_0xb6bc30+_0x3dc458);}}}}else{if(_0x143664<0x0){const _0x127025=_0x18bd5a[_0x10f1ac(0x1bf)](/<VARIABLE (\d+) ON LOSE: ([\+\-]\d+)>/gi);if(_0x127025)for(const _0x35884a of _0x127025){_0x35884a[_0x10f1ac(0x1bf)](/<VARIABLE (\d+) ON LOSE: ([\+\-]\d+)>/i);const _0x2cceae=Number(RegExp['$1']),_0x23947a=Number(RegExp['$2'])*_0x143664,_0x372478=$gameVariables['value'](_0x2cceae);$gameVariables[_0x10f1ac(0x17a)](_0x2cceae,_0x372478+_0x23947a);}}}const _0x102d04=_0x18bd5a['match'](/<TRACK WITH VARIABLE (\d+)>/gi);if(_0x102d04){if(_0x10f1ac(0x262)!==_0x10f1ac(0x262))this[_0x10f1ac(0x34d)](_0x41590c,_0x31dd4a['x'],_0x2f6f54['y'],_0x5460f2);else for(const _0x3ce88d of _0x102d04){_0x3ce88d['match'](/<TRACK WITH VARIABLE (\d+)>/i);const _0x22ec5f=Number(RegExp['$1']),_0x188a51=$gameParty[_0x10f1ac(0x2ae)](_0x4cb111);$gameVariables['setValue'](_0x22ec5f,_0x188a51);}}},VisuMZ[_0x435e5d(0x333)]['Game_Map_requestRefresh']=Game_Map[_0x435e5d(0x2ee)]['requestRefresh'],Game_Map['prototype']['requestRefresh']=function(){const _0x3ddc55=_0x435e5d;VisuMZ['QuestSystem'][_0x3ddc55(0x1ba)][_0x3ddc55(0x21a)](this),SceneManager[_0x3ddc55(0x149)]()&&!this[_0x3ddc55(0x1bb)]&&(this[_0x3ddc55(0x1bb)]=!![]);},VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x2a3)]=Game_Map[_0x435e5d(0x2ee)][_0x435e5d(0x2c3)],Game_Map[_0x435e5d(0x2ee)]['refresh']=function(){const _0x3b1720=_0x435e5d;VisuMZ[_0x3b1720(0x333)]['Game_Map_refresh'][_0x3b1720(0x21a)](this);if(SceneManager['isSceneMap']()&&this[_0x3b1720(0x1bb)]){if('cWbfK'!==_0x3b1720(0x18d))SceneManager['_scene'][_0x3b1720(0x2e7)](),this['_isRefreshingQuestTrackerWindow']=![];else{if(!this[_0x3b1720(0x340)]())return;const _0x12ab60=_0x3b1720(0x247),_0x582a4f=_0x5390bd[_0x3b1720(0x21e)];let _0x2ae44b=_0x57b236[_0x3b1720(0x182)];_0x582a4f>0x0&&this[_0x3b1720(0x1a4)]()!==_0x3b1720(0x162)&&(_0x2ae44b=_0x3b1720(0x2b9)['format'](_0x582a4f,_0x2ae44b));const _0x487ab5=this['isFailedQuestsEnabled']();this['addCommand'](_0x2ae44b,_0x12ab60,_0x487ab5);}}},VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x240)]=Scene_Map['prototype'][_0x435e5d(0x15c)],Scene_Map[_0x435e5d(0x2ee)][_0x435e5d(0x15c)]=function(){const _0x157a0e=_0x435e5d;VisuMZ[_0x157a0e(0x333)][_0x157a0e(0x240)]['call'](this),this[_0x157a0e(0x2cc)]();},Scene_Map[_0x435e5d(0x2ee)]['createQuestTrackerWindow']=function(){const _0x3b139e=_0x435e5d;if(!SceneManager[_0x3b139e(0x149)]())return;const _0x563aff=this[_0x3b139e(0x1f5)](),_0x95f4c2=new Window_QuestTracker(_0x563aff);this[_0x3b139e(0x2d4)](_0x95f4c2),this[_0x3b139e(0x2f0)]=_0x95f4c2;},Scene_Map[_0x435e5d(0x2ee)][_0x435e5d(0x1ac)]=function(){return ConfigManager['questTrackerPosition'];},Scene_Map['prototype'][_0x435e5d(0x1f5)]=function(){const _0x50cda1=_0x435e5d;return VisuMZ[_0x50cda1(0x333)]['Settings'][_0x50cda1(0x26e)][_0x50cda1(0x2ce)][_0x50cda1(0x21a)](this);},Scene_Map[_0x435e5d(0x2ee)][_0x435e5d(0x2e7)]=function(){const _0x16bf6c=_0x435e5d;if(!this['_questTrackerWindow'])return;this['_questTrackerWindow'][_0x16bf6c(0x2c3)]();},Scene_Map[_0x435e5d(0x2ee)]['setQuestForQuestTrackerWindow']=function(_0x56550c){const _0x546282=_0x435e5d;if(!this[_0x546282(0x2f0)])return;_0x56550c=_0x56550c['toUpperCase']()[_0x546282(0x16b)]();const _0x39779c=$gameSystem['quest'](_0x56550c);this[_0x546282(0x2f0)][_0x546282(0x1fa)](_0x39779c);},VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x28d)]=Scene_Menu[_0x435e5d(0x2ee)][_0x435e5d(0x14d)],Scene_Menu[_0x435e5d(0x2ee)]['createCommandWindow']=function(){const _0x2c4e49=_0x435e5d;VisuMZ[_0x2c4e49(0x333)][_0x2c4e49(0x28d)][_0x2c4e49(0x21a)](this),this[_0x2c4e49(0x213)][_0x2c4e49(0x1d1)](_0x2c4e49(0x2f4),this[_0x2c4e49(0x2fd)][_0x2c4e49(0x258)](this));},Scene_Menu['prototype'][_0x435e5d(0x2fd)]=function(){const _0x41c694=_0x435e5d;SceneManager[_0x41c694(0x32d)](Scene_Quest);},VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x29d)]=Scene_Options[_0x435e5d(0x2ee)]['maxCommands'],Scene_Options[_0x435e5d(0x2ee)][_0x435e5d(0x32f)]=function(){const _0x3d8527=_0x435e5d;let _0x3c39f=VisuMZ[_0x3d8527(0x333)]['Scene_Options_maxCommands'][_0x3d8527(0x21a)](this);if(VisuMZ['QuestSystem'][_0x3d8527(0x172)][_0x3d8527(0x192)][_0x3d8527(0x257)]){if(VisuMZ[_0x3d8527(0x333)][_0x3d8527(0x172)][_0x3d8527(0x192)]['AddShowOption'])_0x3c39f++;if(VisuMZ['QuestSystem']['Settings'][_0x3d8527(0x192)][_0x3d8527(0x1d4)])_0x3c39f++;}return _0x3c39f;};function Scene_Quest(){this['initialize'](...arguments);}Scene_Quest[_0x435e5d(0x2ee)]=Object[_0x435e5d(0x291)](Scene_MenuBase[_0x435e5d(0x2ee)]),Scene_Quest[_0x435e5d(0x2ee)][_0x435e5d(0x1c0)]=Scene_Quest,Scene_Quest[_0x435e5d(0x2ee)][_0x435e5d(0x26d)]=function(){const _0x481c29=_0x435e5d;Scene_MenuBase[_0x481c29(0x2ee)]['initialize'][_0x481c29(0x21a)](this);},Scene_Quest[_0x435e5d(0x2ee)][_0x435e5d(0x34e)]=function(){return 0x0;},Scene_Quest[_0x435e5d(0x2ee)][_0x435e5d(0x31f)]=function(){const _0x14f588=_0x435e5d;if(ConfigManager[_0x14f588(0x30b)]&&ConfigManager[_0x14f588(0x27e)]!==undefined){if(_0x14f588(0x2f6)==='wRtny')_0x470c5a[_0x14f588(0x2ab)](_0x14f588(0x249))&&this[_0x14f588(0x272)](_0x4ee4d1['scrollSpeed']),_0x210f33[_0x14f588(0x2ab)](_0x14f588(0x34f))&&this['smoothScrollUp'](_0x3c9b66[_0x14f588(0x2de)]);else return ConfigManager[_0x14f588(0x27e)];}else{if(ConfigManager[_0x14f588(0x30b)]===![]){if(_0x14f588(0x16d)==='pQVBS'){if(this[_0x14f588(0x2e0)]===_0x3f8e10)return;this[_0x14f588(0x2e0)]=_0x5a40bb,this[_0x14f588(0x2c3)]();}else return![];}else{if(_0x14f588(0x147)===_0x14f588(0x147))return Scene_MenuBase[_0x14f588(0x2ee)]['isRightInputMode']['call'](this);else{const _0x2d85cd=this[_0x14f588(0x2df)]()||0x1,_0x5c6e0b=this[_0x14f588(0x25e)]()||0x1,_0x5a5863=this[_0x14f588(0x2e6)]-this[_0x14f588(0x2e6)]%_0x2d85cd,_0x4bc224=this[_0x14f588(0x2a5)]-this[_0x14f588(0x2a5)]%_0x5c6e0b;(_0x5a5863!==this['_scrollBaseX']||_0x4bc224!==this[_0x14f588(0x2c4)])&&(this[_0x14f588(0x22b)](_0x5a5863,_0x4bc224),this[_0x14f588(0x1d3)]()),this[_0x14f588(0x339)]['x']=this[_0x14f588(0x2e6)],this[_0x14f588(0x339)]['y']=this[_0x14f588(0x2a5)];}}}},Scene_Quest[_0x435e5d(0x2ee)][_0x435e5d(0x2c5)]=function(){const _0x47ff6c=_0x435e5d;return(Graphics[_0x47ff6c(0x261)]-0x230)[_0x47ff6c(0x287)](0xf0,Math[_0x47ff6c(0x18a)](Graphics[_0x47ff6c(0x261)]/0x2));},Scene_Quest[_0x435e5d(0x2ee)]['create']=function(){const _0x4b6bf4=_0x435e5d;Scene_MenuBase[_0x4b6bf4(0x2ee)][_0x4b6bf4(0x291)][_0x4b6bf4(0x21a)](this),this[_0x4b6bf4(0x14d)](),this[_0x4b6bf4(0x1aa)](),this[_0x4b6bf4(0x2c6)](),this[_0x4b6bf4(0x1d9)]();},Scene_Quest[_0x435e5d(0x2ee)][_0x435e5d(0x14d)]=function(){const _0x16acf6=_0x435e5d,_0x4df177=this['commandWindowRect'](),_0x52e166=new Window_QuestCommand(_0x4df177);_0x52e166['setHandler'](_0x16acf6(0x252),this[_0x16acf6(0x1ea)][_0x16acf6(0x258)](this)),_0x52e166['setHandler'](_0x16acf6(0x1d2),this[_0x16acf6(0x1ea)][_0x16acf6(0x258)](this)),_0x52e166['setHandler'](_0x16acf6(0x247),this[_0x16acf6(0x1ea)]['bind'](this)),_0x52e166['setHandler'](_0x16acf6(0x180),this[_0x16acf6(0x20f)]['bind'](this)),this[_0x16acf6(0x315)](_0x52e166),this[_0x16acf6(0x213)]=_0x52e166,_0x52e166[_0x16acf6(0x289)](VisuMZ[_0x16acf6(0x333)][_0x16acf6(0x172)][_0x16acf6(0x26e)][_0x16acf6(0x30e)]);},Scene_Quest['prototype'][_0x435e5d(0x173)]=function(){const _0x433ff3=_0x435e5d;return VisuMZ['QuestSystem'][_0x433ff3(0x172)][_0x433ff3(0x26e)]['CommandWindow_Rect']['call'](this);},Scene_Quest['prototype']['createQuestLabelWindow']=function(){const _0x1b5c59=_0x435e5d,_0x1d134b=this[_0x1b5c59(0x27f)](),_0x258174=new Window_Base(_0x1d134b);this[_0x1b5c59(0x315)](_0x258174),this[_0x1b5c59(0x343)]=_0x258174,_0x258174['setBackgroundType'](VisuMZ[_0x1b5c59(0x333)]['Settings'][_0x1b5c59(0x26e)][_0x1b5c59(0x256)]);},Scene_Quest['prototype'][_0x435e5d(0x27f)]=function(){const _0x5c0ff0=_0x435e5d;return VisuMZ['QuestSystem'][_0x5c0ff0(0x172)][_0x5c0ff0(0x26e)]['QuestLabel_Rect'][_0x5c0ff0(0x21a)](this);},Scene_Quest['prototype'][_0x435e5d(0x2c6)]=function(){const _0x375745=_0x435e5d,_0x383452=this[_0x375745(0x246)](),_0x14e71a=new Window_QuestLog(_0x383452);this[_0x375745(0x315)](_0x14e71a),this['_logWindow']=_0x14e71a,_0x14e71a[_0x375745(0x289)](VisuMZ[_0x375745(0x333)]['Settings'][_0x375745(0x26e)][_0x375745(0x190)]);},Scene_Quest[_0x435e5d(0x2ee)]['questLogWindowRect']=function(){const _0xa2ae49=_0x435e5d;return VisuMZ[_0xa2ae49(0x333)][_0xa2ae49(0x172)][_0xa2ae49(0x26e)][_0xa2ae49(0x2f2)][_0xa2ae49(0x21a)](this);},Scene_Quest[_0x435e5d(0x2ee)][_0x435e5d(0x1d9)]=function(){const _0x218b2b=_0x435e5d,_0x24d404=this['questListWindowRect'](),_0x3c20f8=new Window_QuestList(_0x24d404);_0x3c20f8[_0x218b2b(0x1d1)]('category',this[_0x218b2b(0x1d5)][_0x218b2b(0x258)](this)),_0x3c20f8['setHandler'](_0x218b2b(0x2f4),this['onListQuest']['bind'](this)),_0x3c20f8[_0x218b2b(0x1d1)]('cancel',this['onListCancel']['bind'](this)),this[_0x218b2b(0x315)](_0x3c20f8),this['_listWindow']=_0x3c20f8,_0x3c20f8['setBackgroundType'](VisuMZ['QuestSystem']['Settings'][_0x218b2b(0x26e)][_0x218b2b(0x1eb)]),this[_0x218b2b(0x213)][_0x218b2b(0x168)](this[_0x218b2b(0x161)]),this['_listWindow']['setLabelWindow'](this[_0x218b2b(0x343)]),this['_listWindow'][_0x218b2b(0x23f)](this['_logWindow']);},Scene_Quest[_0x435e5d(0x2ee)][_0x435e5d(0x148)]=function(){const _0xfd0299=_0x435e5d;return VisuMZ[_0xfd0299(0x333)]['Settings'][_0xfd0299(0x26e)][_0xfd0299(0x2d9)][_0xfd0299(0x21a)](this);},Scene_Quest[_0x435e5d(0x2ee)][_0x435e5d(0x1ea)]=function(){const _0xc9c57=_0x435e5d;this[_0xc9c57(0x161)][_0xc9c57(0x1ff)](),this[_0xc9c57(0x161)][_0xc9c57(0x2ed)](0x0);},Scene_Quest[_0x435e5d(0x2ee)]['onListCategory']=function(){const _0x479b37=_0x435e5d;this[_0x479b37(0x161)][_0x479b37(0x244)](),this[_0x479b37(0x161)][_0x479b37(0x1ff)]();},Scene_Quest[_0x435e5d(0x2ee)][_0x435e5d(0x16f)]=function(){const _0x466925=_0x435e5d,_0x4e4e38=this[_0x466925(0x161)][_0x466925(0x195)](),_0x2ef425=_0x4e4e38[_0x466925(0x2dd)][_0x466925(0x1ef)]()[_0x466925(0x16b)]();$gameSystem[_0x466925(0x22d)](_0x2ef425,!![]),this[_0x466925(0x161)]['refresh'](),this[_0x466925(0x161)][_0x466925(0x1ff)]();},Scene_Quest[_0x435e5d(0x2ee)][_0x435e5d(0x1c9)]=function(){const _0x17e568=_0x435e5d;this[_0x17e568(0x161)][_0x17e568(0x2e9)](),this[_0x17e568(0x213)]['activate']();},Scene_Quest['prototype'][_0x435e5d(0x1df)]=function(){const _0x135407=_0x435e5d;return TextManager[_0x135407(0x341)];},Scene_Quest[_0x435e5d(0x2ee)][_0x435e5d(0x33f)]=function(){const _0x43ff0c=_0x435e5d;if(this[_0x43ff0c(0x161)]&&this[_0x43ff0c(0x161)][_0x43ff0c(0x2b8)]){if(this[_0x43ff0c(0x161)][_0x43ff0c(0x195)]())return _0x43ff0c(0x1c7)!=='IYOnv'?this[_0x43ff0c(0x161)]['isOkEnabled']()?TextManager[_0x43ff0c(0x30a)]:'':_0x23ef22[_0x43ff0c(0x333)][_0x43ff0c(0x172)][_0x43ff0c(0x26e)][_0x43ff0c(0x191)][_0x43ff0c(0x21a)](this);else return this[_0x43ff0c(0x161)][_0x43ff0c(0x310)]()?TextManager[_0x43ff0c(0x33e)]:_0x43ff0c(0x231)===_0x43ff0c(0x231)?TextManager[_0x43ff0c(0x181)]:this[_0x43ff0c(0x205)]();}return Scene_MenuBase[_0x43ff0c(0x2ee)]['buttonAssistText4']['call'](this);},Scene_Quest['prototype']['createBackground']=function(){const _0x16288c=_0x435e5d;Scene_MenuBase['prototype'][_0x16288c(0x2dc)][_0x16288c(0x21a)](this),this[_0x16288c(0x23d)](this[_0x16288c(0x209)]()),this[_0x16288c(0x326)]();},Scene_Quest[_0x435e5d(0x2ee)][_0x435e5d(0x209)]=function(){const _0x239dd2=_0x435e5d;return VisuMZ[_0x239dd2(0x333)][_0x239dd2(0x172)][_0x239dd2(0x259)]['SnapshotOpacity'];},Scene_Quest[_0x435e5d(0x2ee)][_0x435e5d(0x326)]=function(){const _0x3ce1ff=_0x435e5d,_0x54cd7b={'BgFilename1':VisuMZ[_0x3ce1ff(0x333)][_0x3ce1ff(0x172)][_0x3ce1ff(0x259)][_0x3ce1ff(0x306)],'BgFilename2':VisuMZ[_0x3ce1ff(0x333)][_0x3ce1ff(0x172)][_0x3ce1ff(0x259)][_0x3ce1ff(0x223)]};_0x54cd7b&&(_0x54cd7b['BgFilename1']!==''||_0x54cd7b[_0x3ce1ff(0x223)]!=='')&&(this[_0x3ce1ff(0x292)]=new Sprite(ImageManager[_0x3ce1ff(0x1a5)](_0x54cd7b[_0x3ce1ff(0x306)])),this['_backSprite2']=new Sprite(ImageManager['loadTitle2'](_0x54cd7b['BgFilename2'])),this[_0x3ce1ff(0x2d4)](this[_0x3ce1ff(0x292)]),this[_0x3ce1ff(0x2d4)](this[_0x3ce1ff(0x208)]),this[_0x3ce1ff(0x292)][_0x3ce1ff(0x312)][_0x3ce1ff(0x218)](this['adjustSprite']['bind'](this,this[_0x3ce1ff(0x292)])),this[_0x3ce1ff(0x208)][_0x3ce1ff(0x312)][_0x3ce1ff(0x218)](this[_0x3ce1ff(0x201)][_0x3ce1ff(0x258)](this,this[_0x3ce1ff(0x208)])));},Scene_Quest[_0x435e5d(0x2ee)][_0x435e5d(0x201)]=function(_0x5b7ce1){const _0x1bfe47=_0x435e5d;this[_0x1bfe47(0x334)](_0x5b7ce1),this[_0x1bfe47(0x20a)](_0x5b7ce1);},VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x16c)]=Window_MenuCommand[_0x435e5d(0x2ee)][_0x435e5d(0x2a2)],Window_MenuCommand[_0x435e5d(0x2ee)][_0x435e5d(0x2a2)]=function(){const _0x14a370=_0x435e5d;VisuMZ['QuestSystem'][_0x14a370(0x16c)][_0x14a370(0x21a)](this),this[_0x14a370(0x1a9)]();},Window_MenuCommand[_0x435e5d(0x2ee)][_0x435e5d(0x1a9)]=function(){const _0x380399=_0x435e5d;if(!this['addQuestCommandAutomatically']())return;if(!this[_0x380399(0x27c)]())return;const _0x53ef32=TextManager['questCommandName'],_0x288c27=this[_0x380399(0x1c4)]();this[_0x380399(0x170)](_0x53ef32,'quest',_0x288c27);},Window_MenuCommand[_0x435e5d(0x2ee)][_0x435e5d(0x347)]=function(){const _0x2b16f8=_0x435e5d;return Imported[_0x2b16f8(0x2ba)]?![]:!![];},Window_MenuCommand[_0x435e5d(0x2ee)]['isQuestCommandVisible']=function(){return $gameSystem['isquestMenuShown']();},Window_MenuCommand[_0x435e5d(0x2ee)][_0x435e5d(0x1c4)]=function(){const _0x44ea0c=_0x435e5d;return $gameSystem[_0x44ea0c(0x15b)]();},VisuMZ['QuestSystem'][_0x435e5d(0x2e1)]=Window_Options[_0x435e5d(0x2ee)][_0x435e5d(0x226)],Window_Options[_0x435e5d(0x2ee)][_0x435e5d(0x226)]=function(){const _0x25a122=_0x435e5d;VisuMZ['QuestSystem'][_0x25a122(0x2e1)][_0x25a122(0x21a)](this),this['addQuestSystemCommands']();},Window_Options[_0x435e5d(0x2ee)][_0x435e5d(0x1d6)]=function(){const _0x41fdc4=_0x435e5d;VisuMZ[_0x41fdc4(0x333)]['Settings']['Tracker'][_0x41fdc4(0x265)]&&this[_0x41fdc4(0x1ad)](),VisuMZ[_0x41fdc4(0x333)][_0x41fdc4(0x172)][_0x41fdc4(0x192)][_0x41fdc4(0x1d4)]&&this['addQuestSystemquestTrackerPositionCommand']();},Window_Options[_0x435e5d(0x2ee)]['addQuestSystemquestTrackerShowCommand']=function(){const _0x5e64ef=_0x435e5d,_0x51667e=TextManager[_0x5e64ef(0x26f)],_0x2c4a1d=_0x5e64ef(0x26f);this['addCommand'](_0x51667e,_0x2c4a1d);},Window_Options[_0x435e5d(0x2ee)]['addQuestSystemquestTrackerPositionCommand']=function(){const _0x5c0680=_0x435e5d,_0x3acfb3=TextManager['questTrackerPosition'],_0x39dd25=_0x5c0680(0x269);this['addCommand'](_0x3acfb3,_0x39dd25);},VisuMZ['QuestSystem'][_0x435e5d(0x311)]=Window_Options[_0x435e5d(0x2ee)][_0x435e5d(0x1c3)],Window_Options[_0x435e5d(0x2ee)][_0x435e5d(0x1c3)]=function(_0x2b4141){const _0x560c0d=_0x435e5d,_0xc7a3c3=this['commandSymbol'](_0x2b4141);if(_0xc7a3c3===_0x560c0d(0x269)){if(_0x560c0d(0x14e)===_0x560c0d(0x24a)){const _0x25fc3e=this[_0x560c0d(0x17c)]();return _0x25fc3e[_0x560c0d(0x252)]=_0x25fc3e[_0x560c0d(0x252)]||[],_0x25fc3e[_0x560c0d(0x252)][_0x560c0d(0x185)](_0x591ba4=>this[_0x560c0d(0x2f4)](_0x591ba4))['remove'](null);}else{const _0x4d311d=this['getConfigValue'](_0xc7a3c3);return _0x4d311d?TextManager[_0x560c0d(0x350)]:TextManager[_0x560c0d(0x1e2)];}}return VisuMZ[_0x560c0d(0x333)]['Window_Options_statusText'][_0x560c0d(0x21a)](this,_0x2b4141);};function Window_QuestCommand(){const _0x448744=_0x435e5d;this[_0x448744(0x26d)](...arguments);}function _0x4403(){const _0x22f569=['addQuestCommand','createQuestLabelWindow','PZyLZ','questTrackerOnRight','addQuestSystemquestTrackerShowCommand','questRewardsClaimed','TrackerWindow_Scale','shown','questRewardsDenied','claim','textSizeEx','GjYLs','isQuestCompleted','questLogFmt','SystemShowQuestMenu','YybNd','From','Game_Map_requestRefresh','_isRefreshingQuestTrackerWindow','TrackerChangeQuest','update','totalCommands','match','constructor','height','auto','statusText','isQuestCommandEnabled','questsCompleted','baseTextRect','dchLN','nCjPb','onListCancel','categoryList','description','commandName','QuestObjectives','name','category','setLabelWindow','setHandler','completed','paint','AddPositionOption','onListCategory','addQuestSystemCommands','VisibleObjectives','commandStyleCheck','createQuestListWindow','OnLoadQuestJS','CommandWindow_Completed_Text','LogWindow_Auto_WordWrap','deathStateId','Reward_Failed_Fmt','buttonAssistText1','Objective_Normal_Fmt','ShowName','questTrackerPosOff','drawItem','ConfigManager_makeData','CommandWindow_Known_Icon','questCompletedIcon','setQuestTrackerVisible','updateLabelWindow','questCategoryOpenedFmt','onCommandOk','ListWindow_BgType','wIXXy','objectivesFailed','XkJDj','toUpperCase','questTrackedQuestFmt','rewardsClaimed','FailedQuests','subtext','EmptyTitleLabel','questTrackerWindow','questSubtext','applyWordWrap','QuestQuote','questDescription','setQuest','rewards','questKnownCmd','Game_Party_gainItem','Name','activate','SystemEnableQuestMenu','adjustSprite','createEmptyText','onDatabaseLoaded','CategoryName','contentsHeight','5556vwDjBD','ConvertParams','_backSprite2','getBackgroundOpacity','centerSprite','General','21967sFKHUK','Description','_messageWindow','popScene','CmdStyle','makeData','iconWidth','_commandWindow','EnableMainMenu','LogFmt','SystemCallSceneQuest','getQuestLogFmt','addLoadListener','resetFontSettings','call','hNJwZ','ButtonAssistPageUpDown','setQuestObjectives','questFailedIcon','unshift','ypzWc','QuestSubtext','drawAllText','BgFilename2','_questTrackerRefresh','_hasDiedBefore','addGeneralOptions','Game_Actor_tradeItemWithParty','IyUsM','questObjectiveClearedFmt','questCompletedCmd','updateScrollBase','QuestData','setTrackedQuest','concat','addNoQuestsListedCommand','KnownQuests','PvOax','replace','Show','denied','isQuestFailed','questObjectives','length','_categoryStatus','LineBreakSpace','setQuestForQuestTrackerWindow','visibilityLevel','processWheelScroll','setBackgroundOpacity','addNewState','setLogWindow','Scene_Map_createSpriteset','68337PEMImB','registerCommand','hVdXJ','openCloseCurrentCategory','VisibleRewards','questLogWindowRect','failed','_scrollBaseX','pagedown','wxUKh','MessageCore','qBaSE','TargetIDs','updateOrigin','activeBgType','setQuestDescription','setQuestSubtext','known','YZubb','PzsOK','_categoryFilter','QuestLabel_BgType','AdjustRect','bind','BgSettings','questRewardsClaimedFmt','ButtonAssistCollapse','_commandNameWindow','callUpdateHelp','scrollBlockHeight','ewgfy','enabled','boxWidth','ScPrQ','center','isCategoryOpen','AddShowOption','currentSymbol','setQuestRewards','value','questTrackerPosition','itemLineRect','applyData','wJGhv','initialize','Window','questTrackerShow','includes','status','smoothScrollDown','contents','TrackerRefreshWindow','rewardsDenied','join','Keys','834216CYbJGE','Rewards','max','isDead','isQuestCommandVisible','questObjectivesFailed','uiInputPosition','questLabelWindowRect','FLgce','jEjxA','QuestDescription','fmZNL','CompletedQuests','parameters','isAlive','clamp','Status','setBackgroundType','createQuestRewards','WQbUC','isCompletedQuestsEnabled','Scene_Menu_createCommandWindow','NoQuestListed','drawItemStyleIcon','PYZmY','create','_backSprite1','addKnownQuestsCommand','MtYFM','LogEmpty','getTotalCategoryQuests','rArcA','iconHeight','\x0a\x5c{[[Title]]\x5c}\x0a[[Objectives]]\x0a','noQuestsListed','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','<BR>','Scene_Options_maxCommands','RUTBy','iVVYo','createQuestDescription','ARRAYSTRUCT','addOriginalCommands','Game_Map_refresh','parse','_scrollY','questCategoryClosedFmt','initQuestSystem','right','defaultQuestTrackerFmt','Difficulty','isPressed','CommandWindow_Known_Text','joinQuestEntries','numItems','updateCommandNameWindow','showTracker','makeCommandList','ConfigManager_applyData','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','questsKnown','Objective_Failed_Fmt','TrackerWindow_BgType','Location','active','\x5cI[%1]%2','VisuMZ_1_MainMenuCore','noMessageCoreRemoveEscapeCodes','clear','hHXKQ','Scene_Boot_onDatabaseLoaded','updateVisibility','iconText','setCategoryFilter','createCommandNameWindow','refresh','_scrollBaseY','mainCommandWidth','createQuestLogWindow','isquestMenuShown','130028kOFTTV','eyern','note','isKnownQuestsEnabled','createQuestTrackerWindow','index','TrackerWindow_Rect','convertLineBreaksForWordWrap','PositionOn','slsEh','Subtext','Game_System_initialize','addChild','process_VisuMZ_QuestSystem_Data','questJournalSystemUseItem','itemPadding','createQuestSubtext','ListWindow_Rect','_tradeItemWithParty','isQuestTrackerVisible','createBackground','Key','scrollSpeed','scrollBlockWidth','_quest','Window_Options_addGeneralOptions','AcbZp','njcgC','quotes','1948062ClCGgg','_scrollX','refreshQuestTrackerWindow','commandNameWindowDrawBackground','deselect','useItem','deny','xReWc','smoothSelect','prototype','questObjectiveFailedFmt','_questTrackerWindow','createQuestText','LogWindow_Rect','questRewardsDeniedFmt','quest','ListWindowCategoryOpenFmt','JNVwk','_quests','EGDQr','gainItem','eAGtC','CommandWindow_Completed_Icon','_logWindow','commandQuest','WnxHt','exit','Categories','MainMenu','filter','questsFailed','_scene','drawItemStyleIconText','BgFilename1','ARRAYFUNC','questRewardsNormalFmt','1RggGrA','questButtonAssistActive','uiMenuStyle','trackedQuest','getEmptyLogFmt','CommandWindow_BgType','windowPadding','isCurrentCategoryOpen','Window_Options_statusText','bitmap','width','yGDjZ','addWindow','Quests','RIjvn','doesCategoryHaveQuestsAvailable','questKnownIcon','isQuestKnown','RPuQV','moOHY','_delayDraw','NKUSx','isRightInputMode','remove','sort','CmdTextAlign','questObjectivesCompleted','version','Reward_Completed_Fmt','createCustomBackgroundImages','wordWrapSupport','commandNameWindowDrawText','icon','tracked','egtkh','overallHeight','push','claimed','maxCommands','OKcVh','questTrackerFmt','commandNameWindowCenter','QuestSystem','scaleSprite','lineHeight','smoothScrollUp','drawIcon','calculateTextHeight','origin','questJournalSystemAddDeath','mhLzH','innerWidth','noQuestsLabel','questButtonAssistCollapse','buttonAssistText4','isFailedQuestsVisible','questButtonAssistPageUpDn','setQuestStatus','_labelWindow','376752IcJtvU','currentExt','FUNC','addQuestCommandAutomatically','CommandWindow_Failed_Text','TrackerShowHide','Objectives','questObjectiveNormalFmt','tradeItemWithParty','drawTextEx','helpAreaHeight','pageup','questTrackerPosOn','mkQqQ','ARRAYSTR','NUM','oNrqh','questListWindowRect','isSceneMap','5598362xSSvRh','NGLQH','isEnemy','createCommandWindow','nXrwI','Game_Battler_useItem','VisuMZ_1_MessageCore','addFailedQuestsCommand','enemy','opacity','isCommandEnabled','<WORDWRAP>%1','questQuote','TargetID','questEmptyText','round','addCompletedQuestsCommand','isquestMenuEnabled','createSpriteset','ButtonAssistExpand','Title','createContents','changePaintOpacity','_listWindow','text','updatePageUpDownScroll','setQuestQuote','ShowFailed','_textHeight','YXjSa','setListWindow','Quotes','scale','trim','Window_MenuCommand_addOriginalCommands','ulhMo','removed','onListQuest','addCommand','zpqiS','Settings','commandWindowRect','objectivesCompleted','naTbc','questRewards','show','OCVWc','format','setValue','EtOgN','questData','left','isOkEnabled','maxItems','cancel','questButtonAssistExpand','questFailedCmd','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','updateDelayRefresh','map','Reward_Normal_Fmt','QuestOrder','Fpdrn','uXedy','floor','finalizeWordWrapSupport','Rcddc','kZhXJ','applyWordWrapEntry','_doodadEditorMode','LogWindow_BgType','QuestLabel_Rect','Tracker','TrackedQuest','questJournalSystemGainItem','currentQuest','objectives','initCategories','PositionOff','20zgWvrp','33JCFeJK','ListWindowCategoryCloseFmt','makeDeepCopy','440FgIAgw','createQuestQuote','QeIFR','Game_BattlerBase_addNewState','drawText','deactivate','itemTextAlign','commandStyle','loadTitle1','addCategoryCommand','openness','STRUCT'];_0x4403=function(){return _0x22f569;};return _0x4403();}Window_QuestCommand[_0x435e5d(0x2ee)]=Object[_0x435e5d(0x291)](Window_Command[_0x435e5d(0x2ee)]),Window_QuestCommand[_0x435e5d(0x2ee)][_0x435e5d(0x1c0)]=Window_QuestCommand,Window_QuestCommand[_0x435e5d(0x2ee)][_0x435e5d(0x26d)]=function(_0xdf7aa3){const _0x1e8852=_0x435e5d;Window_Command[_0x1e8852(0x2ee)][_0x1e8852(0x26d)]['call'](this,_0xdf7aa3),this[_0x1e8852(0x2c2)](_0xdf7aa3);},Window_QuestCommand[_0x435e5d(0x2ee)][_0x435e5d(0x2c2)]=function(_0x3954ee){const _0x378904=_0x435e5d,_0x7a2629=new Rectangle(0x0,0x0,_0x3954ee[_0x378904(0x313)],_0x3954ee[_0x378904(0x1c1)]);this[_0x378904(0x25c)]=new Window_Base(_0x7a2629),this['_commandNameWindow'][_0x378904(0x153)]=0x0,this[_0x378904(0x2d4)](this[_0x378904(0x25c)]),this[_0x378904(0x2af)]();},Window_QuestCommand[_0x435e5d(0x2ee)][_0x435e5d(0x25d)]=function(){const _0x203e5c=_0x435e5d;Window_Command[_0x203e5c(0x2ee)]['callUpdateHelp'][_0x203e5c(0x21a)](this);if(this[_0x203e5c(0x25c)])this[_0x203e5c(0x2af)]();if(this['_listWindow'])this[_0x203e5c(0x161)]['setCategoryFilter'](this[_0x203e5c(0x266)]());},Window_QuestCommand['prototype'][_0x435e5d(0x2af)]=function(){const _0x350891=_0x435e5d,_0x291995=this['_commandNameWindow'];_0x291995[_0x350891(0x273)][_0x350891(0x2bc)]();const _0x57b5f3=this['commandStyleCheck'](this[_0x350891(0x2cd)]());if(_0x57b5f3===_0x350891(0x329)){if(_0x350891(0x31c)===_0x350891(0x31c)){const _0x282285=this[_0x350891(0x26a)](this['index']());let _0x298272=this[_0x350891(0x1cc)](this['index']());_0x298272=_0x298272[_0x350891(0x232)](/\\I\[(\d+)\]/gi,''),_0x291995[_0x350891(0x219)](),this[_0x350891(0x2e8)](_0x298272,_0x282285),this[_0x350891(0x328)](_0x298272,_0x282285),this[_0x350891(0x332)](_0x298272,_0x282285);}else{if(_0xb179d1['_questTrackerRefresh'])return;_0x4d019b[_0x350891(0x224)]=!![],_0x54f838[_0x350891(0x2ee)][_0x350891(0x2c3)][_0x350891(0x21a)](this),this['setBackgroundType'](this[_0x350891(0x2e0)]?_0x56c5ab['activeBgType']:0x2),_0x25fd21[_0x350891(0x224)]=![];}}},Window_QuestCommand[_0x435e5d(0x2ee)][_0x435e5d(0x2e8)]=function(_0x9d7aa5,_0x539003){},Window_QuestCommand[_0x435e5d(0x2ee)]['commandNameWindowDrawText']=function(_0x328b29,_0x49c9f8){const _0x36c282=_0x435e5d,_0x52c6f5=this[_0x36c282(0x25c)];_0x52c6f5[_0x36c282(0x1a1)](_0x328b29,0x0,_0x49c9f8['y'],_0x52c6f5[_0x36c282(0x33c)],_0x36c282(0x263));},Window_QuestCommand['prototype'][_0x435e5d(0x332)]=function(_0x20c348,_0x3fee54){const _0x459bb9=_0x435e5d,_0x4745f6=this[_0x459bb9(0x25c)],_0x4182c2=$gameSystem[_0x459bb9(0x30f)](),_0x1e956a=_0x3fee54['x']+Math[_0x459bb9(0x18a)](_0x3fee54[_0x459bb9(0x313)]/0x2)+_0x4182c2;_0x4745f6['x']=_0x4745f6[_0x459bb9(0x313)]/-0x2+_0x1e956a,_0x4745f6['y']=Math[_0x459bb9(0x18a)](_0x3fee54[_0x459bb9(0x1c1)]/0x2);},Window_QuestCommand['prototype']['makeCommandList']=function(){const _0x4a17f2=_0x435e5d;this['addKnownQuestsCommand'](),this[_0x4a17f2(0x15a)](),this[_0x4a17f2(0x151)]();},Window_QuestCommand[_0x435e5d(0x2ee)][_0x435e5d(0x293)]=function(){const _0x434242=_0x435e5d,_0x46c6b3=_0x434242(0x252),_0x18bfe3=ImageManager[_0x434242(0x319)];let _0x144025=TextManager[_0x434242(0x1fc)];_0x18bfe3>0x0&&this[_0x434242(0x1a4)]()!==_0x434242(0x162)&&(_0x144025=_0x434242(0x2b9)[_0x434242(0x179)](_0x18bfe3,_0x144025));const _0x22cf93=this[_0x434242(0x2cb)]();this[_0x434242(0x170)](_0x144025,_0x46c6b3,_0x22cf93);},Window_QuestCommand[_0x435e5d(0x2ee)][_0x435e5d(0x2cb)]=function(){const _0x24059b=_0x435e5d;return $gameSystem[_0x24059b(0x2b4)]()[_0x24059b(0x237)]>0x0;},Window_QuestCommand[_0x435e5d(0x2ee)][_0x435e5d(0x15a)]=function(){const _0x5b1733=_0x435e5d,_0x35a2cc=_0x5b1733(0x1d2),_0x19b965=ImageManager[_0x5b1733(0x1e6)];let _0x2dac79=TextManager[_0x5b1733(0x22a)];if(_0x19b965>0x0&&this[_0x5b1733(0x1a4)]()!==_0x5b1733(0x162)){if(_0x5b1733(0x29e)===_0x5b1733(0x317))return _0x5b1733(0x2c0);else _0x2dac79=_0x5b1733(0x2b9)[_0x5b1733(0x179)](_0x19b965,_0x2dac79);}const _0x930afc=this['isCompletedQuestsEnabled']();this['addCommand'](_0x2dac79,_0x35a2cc,_0x930afc);},Window_QuestCommand[_0x435e5d(0x2ee)][_0x435e5d(0x28c)]=function(){const _0x24e147=_0x435e5d;return $gameSystem[_0x24e147(0x1c5)]()['length']>0x0;},Window_QuestCommand['prototype'][_0x435e5d(0x151)]=function(){const _0x11f09d=_0x435e5d;if(!this[_0x11f09d(0x340)]())return;const _0x1e33b9='failed',_0xe6dcb5=ImageManager['questFailedIcon'];let _0x4d3692=TextManager[_0x11f09d(0x182)];if(_0xe6dcb5>0x0&&this[_0x11f09d(0x1a4)]()!==_0x11f09d(0x162)){if('VduTU'===_0x11f09d(0x24c)){const _0x43d001=new _0x2c5b3c(0x0,0x0,_0x3c1065[_0x11f09d(0x313)],_0x4caa15[_0x11f09d(0x1c1)]);this[_0x11f09d(0x25c)]=new _0x267314(_0x43d001),this[_0x11f09d(0x25c)]['opacity']=0x0,this[_0x11f09d(0x2d4)](this['_commandNameWindow']),this[_0x11f09d(0x2af)]();}else _0x4d3692=_0x11f09d(0x2b9)[_0x11f09d(0x179)](_0xe6dcb5,_0x4d3692);}const _0x43e3d2=this['isFailedQuestsEnabled']();this[_0x11f09d(0x170)](_0x4d3692,_0x1e33b9,_0x43e3d2);},Window_QuestCommand[_0x435e5d(0x2ee)][_0x435e5d(0x340)]=function(){const _0x33a507=_0x435e5d;return VisuMZ[_0x33a507(0x333)][_0x33a507(0x172)][_0x33a507(0x26e)][_0x33a507(0x165)];},Window_QuestCommand[_0x435e5d(0x2ee)]['isFailedQuestsEnabled']=function(){const _0x52c833=_0x435e5d;return $gameSystem[_0x52c833(0x303)]()[_0x52c833(0x237)]>0x0;},Window_QuestCommand[_0x435e5d(0x2ee)][_0x435e5d(0x1be)]=function(){const _0x14b5df=_0x435e5d;return this[_0x14b5df(0x340)]()?0x3:0x2;},Window_QuestCommand[_0x435e5d(0x2ee)][_0x435e5d(0x1a3)]=function(){const _0x4091c6=_0x435e5d;return VisuMZ['QuestSystem'][_0x4091c6(0x172)][_0x4091c6(0x26e)][_0x4091c6(0x322)];},Window_QuestCommand['prototype'][_0x435e5d(0x1e3)]=function(_0x1b5629){const _0x12ff65=_0x435e5d,_0x1cabae=this[_0x12ff65(0x1d8)](_0x1b5629);if(_0x1cabae===_0x12ff65(0x2c0))'tMTsC'==='VqMfl'?(this[_0x12ff65(0x166)]+=this[_0x12ff65(0x335)](),_0x27fbb2[_0x12ff65(0x327)]&&(this[_0x12ff65(0x166)]+=this[_0x12ff65(0x335)]()*0x4)):this[_0x12ff65(0x305)](_0x1b5629);else{if(_0x1cabae===_0x12ff65(0x329)){if(_0x12ff65(0x2fe)===_0x12ff65(0x2fe))this[_0x12ff65(0x28f)](_0x1b5629);else return _0x287aea['QuestSystem']['Settings'][_0x12ff65(0x26e)][_0x12ff65(0x210)];}else Window_HorzCommand['prototype']['drawItem']['call'](this,_0x1b5629);}},Window_QuestCommand[_0x435e5d(0x2ee)][_0x435e5d(0x1a4)]=function(){const _0xf6cd86=_0x435e5d;return VisuMZ[_0xf6cd86(0x333)][_0xf6cd86(0x172)][_0xf6cd86(0x26e)][_0xf6cd86(0x210)];},Window_QuestCommand[_0x435e5d(0x2ee)]['commandStyleCheck']=function(_0x1ec8b5){const _0x45bff4=_0x435e5d;if(_0x1ec8b5<0x0)return _0x45bff4(0x162);const _0x43d09d=this[_0x45bff4(0x1a4)]();if(_0x43d09d!==_0x45bff4(0x1c2))return _0x43d09d;else{if(this['maxItems']()>0x0){const _0x3e24bf=this[_0x45bff4(0x1cc)](_0x1ec8b5);if(_0x3e24bf[_0x45bff4(0x1bf)](/\\I\[(\d+)\]/i)){const _0x79eb90=this[_0x45bff4(0x26a)](_0x1ec8b5),_0x1cb25f=this[_0x45bff4(0x1b3)](_0x3e24bf)[_0x45bff4(0x313)];return _0x1cb25f<=_0x79eb90[_0x45bff4(0x313)]?'iconText':'kfiAW'!==_0x45bff4(0x28b)?'icon':_0x45bff4(0x2c0);}}}return'text';},Window_QuestCommand['prototype'][_0x435e5d(0x305)]=function(_0x12bb7e){const _0x4ca1e0=_0x435e5d,_0xe95c75=this[_0x4ca1e0(0x26a)](_0x12bb7e),_0x5c8a26=this['commandName'](_0x12bb7e),_0x2d7d15=this[_0x4ca1e0(0x1b3)](_0x5c8a26)['width'];this[_0x4ca1e0(0x160)](this[_0x4ca1e0(0x154)](_0x12bb7e));const _0x77cad0=this[_0x4ca1e0(0x1a3)]();if(_0x77cad0===_0x4ca1e0(0x2a8))this[_0x4ca1e0(0x34d)](_0x5c8a26,_0xe95c75['x']+_0xe95c75[_0x4ca1e0(0x313)]-_0x2d7d15,_0xe95c75['y'],_0x2d7d15);else{if(_0x77cad0===_0x4ca1e0(0x263)){if(_0x4ca1e0(0x1ec)===_0x4ca1e0(0x297))_0x238f02['ConvertParams'](_0x24f1d3,_0x1cad47),_0x3d2895['questData']()['shown']=_0x5b5c61[_0x4ca1e0(0x233)];else{const _0x16c7a7=_0xe95c75['x']+Math[_0x4ca1e0(0x18a)]((_0xe95c75[_0x4ca1e0(0x313)]-_0x2d7d15)/0x2);this[_0x4ca1e0(0x34d)](_0x5c8a26,_0x16c7a7,_0xe95c75['y'],_0x2d7d15);}}else _0x4ca1e0(0x290)===_0x4ca1e0(0x290)?this[_0x4ca1e0(0x34d)](_0x5c8a26,_0xe95c75['x'],_0xe95c75['y'],_0x2d7d15):(_0x1520ea(_0x4ca1e0(0x183)['format'](_0x24c3d0,_0x5ebc41,_0x3d8524)),_0x143261[_0x4ca1e0(0x2ff)]());}},Window_QuestCommand[_0x435e5d(0x2ee)][_0x435e5d(0x28f)]=function(_0x599193){const _0x1f31d8=_0x435e5d;this['commandName'](_0x599193)[_0x1f31d8(0x1bf)](/\\I\[(\d+)\]/i);const _0x1e8341=Number(RegExp['$1'])||0x0,_0xfa020c=this['itemLineRect'](_0x599193),_0x3b2b9a=_0xfa020c['x']+Math[_0x1f31d8(0x18a)]((_0xfa020c[_0x1f31d8(0x313)]-ImageManager[_0x1f31d8(0x212)])/0x2),_0x548553=_0xfa020c['y']+(_0xfa020c[_0x1f31d8(0x1c1)]-ImageManager[_0x1f31d8(0x298)])/0x2;this['drawIcon'](_0x1e8341,_0x3b2b9a,_0x548553);},Window_QuestCommand[_0x435e5d(0x2ee)][_0x435e5d(0x168)]=function(_0x220768){const _0x1acaf8=_0x435e5d;this[_0x1acaf8(0x161)]=_0x220768,this[_0x1acaf8(0x25d)]();};function Window_QuestList(){const _0x418025=_0x435e5d;this[_0x418025(0x26d)](...arguments);}Window_QuestList[_0x435e5d(0x1ca)]=VisuMZ[_0x435e5d(0x333)]['Settings']['Categories'],Window_QuestList['prototype']=Object[_0x435e5d(0x291)](Window_Command[_0x435e5d(0x2ee)]),Window_QuestList[_0x435e5d(0x2ee)]['constructor']=Window_QuestList,Window_QuestList[_0x435e5d(0x2ee)][_0x435e5d(0x26d)]=function(_0x1d655c){const _0x21d39b=_0x435e5d;this[_0x21d39b(0x197)](),Window_Command['prototype'][_0x21d39b(0x26d)][_0x21d39b(0x21a)](this,_0x1d655c),this[_0x21d39b(0x2c2)](_0x1d655c),this[_0x21d39b(0x1a2)](),this[_0x21d39b(0x2e9)]();},Window_QuestList[_0x435e5d(0x2ee)][_0x435e5d(0x197)]=function(){const _0x16b0fd=_0x435e5d;this[_0x16b0fd(0x238)]={};for(const _0xfc052 of VisuMZ[_0x16b0fd(0x333)][_0x16b0fd(0x172)][_0x16b0fd(0x300)]){this[_0x16b0fd(0x238)][_0xfc052['CategoryName']]=!![];}this['_categoryFilter']=_0x16b0fd(0x252);},Window_QuestList['prototype'][_0x435e5d(0x2c1)]=function(_0x47dda3){const _0xe11b82=_0x435e5d;if(this[_0xe11b82(0x255)]===_0x47dda3)return;this[_0xe11b82(0x255)]=_0x47dda3,this[_0xe11b82(0x2c3)]();},Window_QuestList['prototype']['openCloseCurrentCategory']=function(){const _0x343586=_0x435e5d,_0x3066c3=this['currentCategory']();this[_0x343586(0x238)][_0x3066c3['CategoryName']]=!this['_categoryStatus'][_0x3066c3[_0x343586(0x204)]],this[_0x343586(0x2c3)](),this[_0x343586(0x25d)]();},Window_QuestList[_0x435e5d(0x2ee)][_0x435e5d(0x310)]=function(){const _0x35e357=_0x435e5d,_0x2f1875=this['currentCategory']();return _0x2f1875&&this[_0x35e357(0x238)][_0x2f1875['CategoryName']];},Window_QuestList[_0x435e5d(0x2ee)][_0x435e5d(0x2c2)]=function(_0x3d8537){const _0x5b495c=_0x435e5d,_0x42d8fa=new Rectangle(0x0,0x0,_0x3d8537[_0x5b495c(0x313)],_0x3d8537[_0x5b495c(0x1c1)]);this[_0x5b495c(0x25c)]=new Window_Base(_0x42d8fa),this['_commandNameWindow'][_0x5b495c(0x153)]=0x0,this[_0x5b495c(0x2d4)](this[_0x5b495c(0x25c)]),this['updateCommandNameWindow']();},Window_QuestList[_0x435e5d(0x2ee)][_0x435e5d(0x25d)]=function(){const _0x3a4618=_0x435e5d;Window_Command[_0x3a4618(0x2ee)][_0x3a4618(0x25d)][_0x3a4618(0x21a)](this);if(this[_0x3a4618(0x25c)])this['updateCommandNameWindow']();if(this[_0x3a4618(0x343)])this[_0x3a4618(0x1e8)]();if(this['_logWindow'])this['updateLogWindow']();},Window_QuestList[_0x435e5d(0x2ee)]['updateCommandNameWindow']=function(){const _0x3747b7=_0x435e5d,_0x4f759f=this[_0x3747b7(0x25c)];_0x4f759f[_0x3747b7(0x273)][_0x3747b7(0x2bc)]();const _0x3fd183=this[_0x3747b7(0x1d8)](this[_0x3747b7(0x2cd)]());if(_0x3fd183==='icon'){const _0x2cda1b=this['itemLineRect'](this[_0x3747b7(0x2cd)]());let _0x4d5bf9=this[_0x3747b7(0x1cc)](this[_0x3747b7(0x2cd)]());_0x4d5bf9=_0x4d5bf9[_0x3747b7(0x232)](/\\I\[(\d+)\]/gi,''),_0x4f759f[_0x3747b7(0x219)](),this['commandNameWindowDrawBackground'](_0x4d5bf9,_0x2cda1b),this['commandNameWindowDrawText'](_0x4d5bf9,_0x2cda1b),this[_0x3747b7(0x332)](_0x4d5bf9,_0x2cda1b);}},Window_QuestList[_0x435e5d(0x2ee)]['commandNameWindowDrawBackground']=function(_0x48657a,_0x511ab1){},Window_QuestList['prototype'][_0x435e5d(0x328)]=function(_0x1bd0a8,_0x13b2dd){const _0x1d01c3=_0x435e5d,_0x29414a=this[_0x1d01c3(0x25c)];_0x29414a[_0x1d01c3(0x1a1)](_0x1bd0a8,0x0,_0x13b2dd['y'],_0x29414a[_0x1d01c3(0x33c)],'center');},Window_QuestList['prototype'][_0x435e5d(0x332)]=function(_0x5b414b,_0x230118){const _0x625191=_0x435e5d,_0x301778=this[_0x625191(0x25c)],_0x43072=$gameSystem[_0x625191(0x30f)](),_0xcea8b4=_0x230118['x']+Math[_0x625191(0x18a)](_0x230118['width']/0x2)+_0x43072;_0x301778['x']=_0x301778[_0x625191(0x313)]/-0x2+_0xcea8b4,_0x301778['y']=Math['floor'](_0x230118[_0x625191(0x1c1)]/0x2);},Window_QuestList[_0x435e5d(0x2ee)][_0x435e5d(0x2b1)]=function(){const _0x8aa35a=_0x435e5d;for(const _0x341959 of Window_QuestList[_0x8aa35a(0x1ca)]){if(!_0x341959)continue;if(!this[_0x8aa35a(0x318)](_0x341959))continue;this[_0x8aa35a(0x1a6)](_0x341959),this['makeQuestList'](_0x341959);}this['_list']['length']<=0x0&&this[_0x8aa35a(0x22f)]();},Window_QuestList[_0x435e5d(0x2ee)][_0x435e5d(0x22f)]=function(){const _0xdb0aaf=_0x435e5d;this[_0xdb0aaf(0x170)](TextManager[_0xdb0aaf(0x29a)],_0xdb0aaf(0x180),![]);},Window_QuestList['prototype'][_0x435e5d(0x318)]=function(_0x5a8d5d){const _0x37c341=_0x435e5d;for(const _0x4a8629 of _0x5a8d5d[_0x37c341(0x316)]){if(!_0x4a8629)continue;switch(this[_0x37c341(0x255)]){case _0x37c341(0x252):if($gameSystem[_0x37c341(0x31a)](_0x4a8629[_0x37c341(0x2dd)]))return!![];break;case _0x37c341(0x1d2):if($gameSystem['isQuestCompleted'](_0x4a8629['Key']))return!![];break;case _0x37c341(0x247):if($gameSystem[_0x37c341(0x235)](_0x4a8629[_0x37c341(0x2dd)]))return!![];break;}}return![];},Window_QuestList['prototype'][_0x435e5d(0x1a6)]=function(_0x52414e){const _0x64aae7=_0x435e5d,_0x234c8f=this[_0x64aae7(0x264)](_0x52414e)?TextManager[_0x64aae7(0x1e9)]:TextManager[_0x64aae7(0x2a6)],_0x615387=this[_0x64aae7(0x296)](_0x52414e)[_0x64aae7(0x237)],_0x7ded36=_0x234c8f[_0x64aae7(0x179)](_0x52414e[_0x64aae7(0x204)],_0x615387);this[_0x64aae7(0x170)](_0x7ded36,_0x64aae7(0x1cf),!![],_0x52414e);},Window_QuestList['prototype']['getTotalCategoryQuests']=function(_0x11b001){const _0x4cbe3c=_0x435e5d;switch(this[_0x4cbe3c(0x255)]){case _0x4cbe3c(0x252):return $gameSystem['questsKnown']()[_0x4cbe3c(0x302)](_0x4eabd2=>_0x4eabd2[_0x4cbe3c(0x1cf)]===_0x11b001);break;case _0x4cbe3c(0x1d2):return $gameSystem[_0x4cbe3c(0x1c5)]()['filter'](_0x25b110=>_0x25b110['category']===_0x11b001);break;case _0x4cbe3c(0x247):return $gameSystem[_0x4cbe3c(0x303)]()[_0x4cbe3c(0x302)](_0x56aba6=>_0x56aba6[_0x4cbe3c(0x1cf)]===_0x11b001);break;}return[];},Window_QuestList['prototype']['makeQuestList']=function(_0x339f0c){const _0x4d3bbc=_0x435e5d;if(!this[_0x4d3bbc(0x264)](_0x339f0c))return;for(const _0x33cd69 of _0x339f0c[_0x4d3bbc(0x316)]){if(_0x4d3bbc(0x25f)!==_0x4d3bbc(0x167)){if(!_0x33cd69)continue;switch(this[_0x4d3bbc(0x255)]){case'known':if($gameSystem['isQuestKnown'](_0x33cd69[_0x4d3bbc(0x2dd)]))this[_0x4d3bbc(0x1a9)](_0x33cd69);break;case _0x4d3bbc(0x1d2):if($gameSystem[_0x4d3bbc(0x1b5)](_0x33cd69[_0x4d3bbc(0x2dd)]))this[_0x4d3bbc(0x1a9)](_0x33cd69);break;case _0x4d3bbc(0x247):if($gameSystem[_0x4d3bbc(0x235)](_0x33cd69['Key']))this[_0x4d3bbc(0x1a9)](_0x33cd69);break;}}else this['addCommand'](_0x46f829[_0x4d3bbc(0x29a)],_0x4d3bbc(0x180),![]);}},Window_QuestList[_0x435e5d(0x2ee)]['isCategoryOpen']=function(_0x333d38){const _0x2513c2=_0x435e5d;return this[_0x2513c2(0x238)][_0x333d38[_0x2513c2(0x204)]];},Window_QuestList[_0x435e5d(0x2ee)][_0x435e5d(0x1a9)]=function(_0x5d8e3a){const _0xe83f94=_0x435e5d;let _0xe28c73=_0x5d8e3a[_0xe83f94(0x15e)];_0x5d8e3a===$gameSystem[_0xe83f94(0x30c)]()&&(_0xe28c73=TextManager[_0xe83f94(0x1f0)][_0xe83f94(0x179)](_0xe28c73)),this[_0xe83f94(0x170)](_0xe28c73,_0xe83f94(0x2f4),!![],_0x5d8e3a);},Window_QuestList[_0x435e5d(0x2ee)][_0x435e5d(0x1a3)]=function(){const _0x319385=_0x435e5d;return _0x319385(0x17d);},Window_QuestList['prototype'][_0x435e5d(0x1e3)]=function(_0x356ec4){const _0x5a91df=_0x435e5d,_0x5c94e3=this[_0x5a91df(0x1d8)](_0x356ec4);if(_0x5c94e3===_0x5a91df(0x2c0))'fSqVP'===_0x5a91df(0x21b)?(_0x28fb68[_0x5a91df(0x2ee)]['update'][_0x5a91df(0x21a)](this),this[_0x5a91df(0x184)]()):this['drawItemStyleIconText'](_0x356ec4);else{if(_0x5c94e3===_0x5a91df(0x329))this[_0x5a91df(0x28f)](_0x356ec4);else{if(_0x5a91df(0x351)!==_0x5a91df(0x14b))Window_HorzCommand[_0x5a91df(0x2ee)]['drawItem']['call'](this,_0x356ec4);else{_0x2d160e=_0x15b255[_0x5a91df(0x1ef)]()[_0x5a91df(0x16b)]();const _0x53519e=this[_0x5a91df(0x2f4)](_0x57090);if(!_0x53519e)return'';const _0x480efb=this[_0x5a91df(0x17c)]()[_0x5a91df(0x1f3)];_0x480efb[_0x55c530]=_0x18d9da;}}}},Window_QuestList[_0x435e5d(0x2ee)][_0x435e5d(0x1a4)]=function(){const _0x1ee8a5=_0x435e5d;return _0x1ee8a5(0x2c0);},Window_QuestList[_0x435e5d(0x2ee)][_0x435e5d(0x1d8)]=function(_0x2d740b){const _0xbfc71b=_0x435e5d;if(_0x2d740b<0x0)return _0xbfc71b(0x162);const _0x108fde=this[_0xbfc71b(0x1a4)]();if(_0x108fde!==_0xbfc71b(0x1c2))return _0x108fde;else{if(this[_0xbfc71b(0x17f)]()>0x0){if(_0xbfc71b(0x31b)===_0xbfc71b(0x314)){if(_0x237202[_0xbfc71b(0x333)][_0xbfc71b(0x172)][_0xbfc71b(0x192)][_0xbfc71b(0x265)])_0x5c43b4++;if(_0x502395['QuestSystem'][_0xbfc71b(0x172)][_0xbfc71b(0x192)][_0xbfc71b(0x1d4)])_0x25ae4f++;}else{const _0x3f817f=this[_0xbfc71b(0x1cc)](_0x2d740b);if(_0x3f817f[_0xbfc71b(0x1bf)](/\\I\[(\d+)\]/i)){if(_0xbfc71b(0x19f)==='QeIFR'){const _0x1f1893=this[_0xbfc71b(0x26a)](_0x2d740b),_0x26decf=this[_0xbfc71b(0x1b3)](_0x3f817f)[_0xbfc71b(0x313)];return _0x26decf<=_0x1f1893['width']?'iconText':'icon';}else return _0xbfc71b(0x329);}}}}return _0xbfc71b(0x162);},Window_QuestList[_0x435e5d(0x2ee)]['drawItemStyleIconText']=function(_0x96537){const _0x55c9da=_0x435e5d,_0x45fa61=this[_0x55c9da(0x26a)](_0x96537),_0x4b6d93=this[_0x55c9da(0x1cc)](_0x96537),_0x54bb8b=this[_0x55c9da(0x1b3)](_0x4b6d93)[_0x55c9da(0x313)];this[_0x55c9da(0x160)](this['isCommandEnabled'](_0x96537));const _0x301110=this[_0x55c9da(0x1a3)]();if(_0x301110===_0x55c9da(0x2a8))this[_0x55c9da(0x34d)](_0x4b6d93,_0x45fa61['x']+_0x45fa61[_0x55c9da(0x313)]-_0x54bb8b,_0x45fa61['y'],_0x54bb8b);else{if(_0x301110===_0x55c9da(0x263)){const _0x5557c5=_0x45fa61['x']+Math[_0x55c9da(0x18a)]((_0x45fa61[_0x55c9da(0x313)]-_0x54bb8b)/0x2);this[_0x55c9da(0x34d)](_0x4b6d93,_0x5557c5,_0x45fa61['y'],_0x54bb8b);}else this[_0x55c9da(0x34d)](_0x4b6d93,_0x45fa61['x'],_0x45fa61['y'],_0x54bb8b);}},Window_QuestList[_0x435e5d(0x2ee)][_0x435e5d(0x28f)]=function(_0x3ab6db){const _0x3b0fae=_0x435e5d;this[_0x3b0fae(0x1cc)](_0x3ab6db)[_0x3b0fae(0x1bf)](/\\I\[(\d+)\]/i);const _0x3a6491=Number(RegExp['$1'])||0x0,_0x202be9=this[_0x3b0fae(0x26a)](_0x3ab6db),_0x19a0e1=_0x202be9['x']+Math[_0x3b0fae(0x18a)]((_0x202be9[_0x3b0fae(0x313)]-ImageManager[_0x3b0fae(0x212)])/0x2),_0x3664d0=_0x202be9['y']+(_0x202be9['height']-ImageManager[_0x3b0fae(0x298)])/0x2;this[_0x3b0fae(0x337)](_0x3a6491,_0x19a0e1,_0x3664d0);},Window_QuestList[_0x435e5d(0x2ee)]['currentCategory']=function(){const _0x4bee92=_0x435e5d;return this['currentSymbol']()===_0x4bee92(0x1cf)?this['currentExt']():null;},Window_QuestList[_0x435e5d(0x2ee)][_0x435e5d(0x195)]=function(){const _0x57ee2f=_0x435e5d;return this[_0x57ee2f(0x266)]()===_0x57ee2f(0x2f4)?this[_0x57ee2f(0x345)]():null;},Window_QuestList[_0x435e5d(0x2ee)][_0x435e5d(0x1d0)]=function(_0x19820d){const _0x5980f0=_0x435e5d;this[_0x5980f0(0x343)]=_0x19820d,this['callUpdateHelp']();},Window_QuestList[_0x435e5d(0x2ee)]['updateLabelWindow']=function(){const _0x144b61=_0x435e5d,_0x36bf4e=this[_0x144b61(0x195)](),_0x1d8b5e=this['_labelWindow'];_0x1d8b5e[_0x144b61(0x273)][_0x144b61(0x2bc)]();const _0x4a35dd=_0x36bf4e?_0x36bf4e[_0x144b61(0x15e)]:TextManager[_0x144b61(0x33d)],_0x24b962=_0x1d8b5e[_0x144b61(0x1b3)](_0x4a35dd)[_0x144b61(0x313)],_0x573242=_0x1d8b5e[_0x144b61(0x2d7)]()+Math[_0x144b61(0x159)]((_0x1d8b5e[_0x144b61(0x33c)]-_0x24b962)/0x2);_0x1d8b5e['drawTextEx'](_0x4a35dd,_0x573242,0x0,_0x1d8b5e['innerWidth']);},Window_QuestList[_0x435e5d(0x2ee)][_0x435e5d(0x23f)]=function(_0x589ce5){const _0x18e4ff=_0x435e5d;this['_logWindow']=_0x589ce5,this[_0x18e4ff(0x25d)]();},Window_QuestList[_0x435e5d(0x2ee)]['updateLogWindow']=function(){const _0x4b13ff=_0x435e5d,_0x25ef55=this[_0x4b13ff(0x195)](),_0x43b336=this[_0x4b13ff(0x2fc)];_0x43b336[_0x4b13ff(0x1fa)](_0x25ef55);},Window_QuestList[_0x435e5d(0x2ee)]['cursorPagedown']=function(){},Window_QuestList[_0x435e5d(0x2ee)]['cursorPageup']=function(){},Window_QuestList[_0x435e5d(0x2ee)][_0x435e5d(0x17e)]=function(){const _0xb65673=_0x435e5d;if(this[_0xb65673(0x195)]()){if(_0xb65673(0x243)===_0xb65673(0x243))return this[_0xb65673(0x255)]===_0xb65673(0x252);else _0x11640d[_0xb65673(0x342)](_0x58f730,_0x61e9a8);}else return Window_Command[_0xb65673(0x2ee)][_0xb65673(0x17e)][_0xb65673(0x21a)](this);};function Window_QuestLog(){const _0x125339=_0x435e5d;this[_0x125339(0x26d)](...arguments);}function _0x220d(_0x2d98ac,_0x2e0662){const _0x4403f9=_0x4403();return _0x220d=function(_0x220dcb,_0x921229){_0x220dcb=_0x220dcb-0x146;let _0x135ef1=_0x4403f9[_0x220dcb];return _0x135ef1;},_0x220d(_0x2d98ac,_0x2e0662);}Window_QuestLog['wordWrapSupport']=VisuMZ['QuestSystem']['Settings'][_0x435e5d(0x26e)][_0x435e5d(0x1dc)],Window_QuestLog[_0x435e5d(0x2de)]=VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x172)]['Window']['LogWindow_ScrollSpeed'],Window_QuestLog[_0x435e5d(0x2ee)]=Object[_0x435e5d(0x291)](Window_Scrollable[_0x435e5d(0x2ee)]),Window_QuestLog[_0x435e5d(0x2ee)]['constructor']=Window_QuestLog,Window_QuestLog[_0x435e5d(0x31d)]=0x19,Window_QuestLog[_0x435e5d(0x2ee)][_0x435e5d(0x26d)]=function(_0x1ea5d5){const _0x23f5dd=_0x435e5d;this['_textHeight']=0x0,this[_0x23f5dd(0x31d)]=0x0,Window_Scrollable[_0x23f5dd(0x2ee)][_0x23f5dd(0x26d)][_0x23f5dd(0x21a)](this,_0x1ea5d5),this[_0x23f5dd(0x2e0)]=null,this[_0x23f5dd(0x2c3)]();},Window_QuestLog[_0x435e5d(0x2ee)]['contentsHeight']=function(){const _0x43562f=_0x435e5d;return Math['max'](this[_0x43562f(0x166)],0x1);},Window_QuestLog[_0x435e5d(0x2ee)][_0x435e5d(0x32c)]=function(){const _0x26354c=_0x435e5d;return this[_0x26354c(0x205)]();},Window_QuestLog['prototype'][_0x435e5d(0x1bd)]=function(){const _0x5a2d24=_0x435e5d;Window_Scrollable[_0x5a2d24(0x2ee)][_0x5a2d24(0x1bd)][_0x5a2d24(0x21a)](this),this['updateDelayRefresh']();},Window_QuestLog['prototype']['updateDelayRefresh']=function(){const _0x3894b1=_0x435e5d;if(this[_0x3894b1(0x31d)]--===0x0)this[_0x3894b1(0x2c3)]();},Window_QuestLog['prototype'][_0x435e5d(0x24e)]=function(){const _0x1ba86a=_0x435e5d,_0x369980=this[_0x1ba86a(0x2df)]()||0x1,_0x7723e2=this[_0x1ba86a(0x25e)]()||0x1,_0x1bcc2d=this['_scrollX']-this['_scrollX']%_0x369980,_0x2ff00f=this[_0x1ba86a(0x2a5)]-this[_0x1ba86a(0x2a5)]%_0x7723e2;(_0x1bcc2d!==this[_0x1ba86a(0x248)]||_0x2ff00f!==this[_0x1ba86a(0x2c4)])&&(this[_0x1ba86a(0x22b)](_0x1bcc2d,_0x2ff00f),this[_0x1ba86a(0x1d3)]()),this[_0x1ba86a(0x339)]['x']=this['_scrollX'],this[_0x1ba86a(0x339)]['y']=this['_scrollY'];},Window_QuestLog[_0x435e5d(0x2ee)][_0x435e5d(0x23c)]=function(){const _0x5bdf9b=_0x435e5d;Window_Scrollable['prototype']['processWheelScroll']['call'](this),this[_0x5bdf9b(0x163)]();},Window_QuestLog['prototype'][_0x435e5d(0x163)]=function(){const _0x498c4a=_0x435e5d;Input[_0x498c4a(0x2ab)]('pagedown')&&this['smoothScrollDown'](Window_QuestLog[_0x498c4a(0x2de)]),Input[_0x498c4a(0x2ab)]('pageup')&&(_0x498c4a(0x1b8)===_0x498c4a(0x18c)?_0x447eb0=_0x498c4a(0x2b9)['format'](_0x41ec04,_0x5481ac):this[_0x498c4a(0x336)](Window_QuestLog['scrollSpeed']));},Window_QuestLog['prototype'][_0x435e5d(0x1fa)]=function(_0x380e00){const _0x34dc7c=_0x435e5d;if(this[_0x34dc7c(0x2e0)]===_0x380e00)return;this[_0x34dc7c(0x2e0)]=_0x380e00,this[_0x34dc7c(0x31d)]=Window_QuestLog[_0x34dc7c(0x31d)];},Window_QuestLog[_0x435e5d(0x2ee)][_0x435e5d(0x2c3)]=function(){const _0x4b062c=_0x435e5d;this[_0x4b062c(0x273)][_0x4b062c(0x2bc)](),this[_0x4b062c(0x338)](),this[_0x4b062c(0x15f)](),this[_0x4b062c(0x222)]();},Window_QuestLog[_0x435e5d(0x2ee)]['calculateTextHeight']=function(){const _0x5f568d=_0x435e5d;if(![]){const _0x4406b1=this['baseTextRect'](),_0x21136c=this[_0x5f568d(0x2e0)]?this[_0x5f568d(0x2f1)]():this[_0x5f568d(0x202)](),_0x3971de=this['textSizeEx'](_0x21136c[_0x5f568d(0x16b)]());this[_0x5f568d(0x166)]=_0x3971de['height'],this[_0x5f568d(0x1c0)]===Window_QuestLog&&(this[_0x5f568d(0x166)]+=this['lineHeight'](),Window_QuestLog[_0x5f568d(0x327)]&&(this['_textHeight']+=this['lineHeight']()*0x4));}const _0x3c3f04=this['_quest']?this['createQuestText']():this[_0x5f568d(0x202)]();this[_0x5f568d(0x166)]=this[_0x5f568d(0x1b3)](_0x3c3f04['trim']())[_0x5f568d(0x1c1)];},Window_QuestLog[_0x435e5d(0x2ee)][_0x435e5d(0x222)]=function(){const _0x324f73=_0x435e5d,_0x4c4ecd=this['_quest']?this[_0x324f73(0x2f1)]():this[_0x324f73(0x202)]();this['drawTextEx'](_0x4c4ecd,0x0,0x0,this['innerWidth']),this[_0x324f73(0x2a5)]=0x0,this[_0x324f73(0x339)]['y']=0x0;},Window_QuestLog['prototype'][_0x435e5d(0x202)]=function(){const _0x9e6a91=_0x435e5d;VisuMZ[_0x9e6a91(0x333)]['Settings'][_0x9e6a91(0x20b)][_0x9e6a91(0x1da)]();let _0x17fec5=this[_0x9e6a91(0x30d)]();return _0x17fec5=VisuMZ['QuestSystem']['applyWordWrap'](_0x17fec5),_0x17fec5=VisuMZ['QuestSystem'][_0x9e6a91(0x18b)](_0x17fec5),_0x17fec5;},Window_QuestLog[_0x435e5d(0x2ee)]['getEmptyLogFmt']=function(){const _0x57f909=_0x435e5d;return TextManager[_0x57f909(0x158)];},Window_QuestLog['prototype']['createQuestText']=function(){const _0x3db867=_0x435e5d,_0x5292f5=this[_0x3db867(0x2e0)],_0x56a5d5=_0x5292f5[_0x3db867(0x2dd)]['toUpperCase']()[_0x3db867(0x16b)]();if(_0x5292f5[_0x3db867(0x1da)])_0x5292f5[_0x3db867(0x1da)]['call'](this);let _0x4f57ed=this[_0x3db867(0x217)]();return _0x4f57ed=VisuMZ['QuestSystem'][_0x3db867(0x2cf)](_0x4f57ed),_0x4f57ed=_0x4f57ed[_0x3db867(0x232)](/\[\[RAWTITLE\]\]/gi,_0x5292f5[_0x3db867(0x15e)]),_0x4f57ed=_0x4f57ed['replace'](/\[\[TITLE\]\]/gi,_0x5292f5[_0x3db867(0x15e)][_0x3db867(0x232)](/\\I\[(\d+)\]/gi,'')['trim']()),_0x4f57ed=_0x4f57ed[_0x3db867(0x232)](/\[\[DIFFICULTY\]\]/gi,_0x5292f5[_0x3db867(0x2aa)][_0x3db867(0x16b)]()),_0x4f57ed=_0x4f57ed[_0x3db867(0x232)](/\[\[FROM\]\]/gi,_0x5292f5[_0x3db867(0x1b9)]['trim']()),_0x4f57ed=_0x4f57ed['replace'](/\[\[LOCATION\]\]/gi,_0x5292f5[_0x3db867(0x2b7)][_0x3db867(0x16b)]()),_0x4f57ed=_0x4f57ed[_0x3db867(0x232)](/\[\[DESCRIPTION\]\]/gi,this['createQuestDescription'](_0x56a5d5)),_0x4f57ed=_0x4f57ed['replace'](/\[\[OBJECTIVES\]\]/gi,this['createQuestObjectives'](_0x5292f5,_0x56a5d5)),_0x4f57ed=_0x4f57ed[_0x3db867(0x232)](/\[\[REWARDS\]\]/gi,this[_0x3db867(0x28a)](_0x5292f5,_0x56a5d5)),_0x4f57ed=_0x4f57ed['replace'](/\[\[SUBTEXT\]\]/gi,this[_0x3db867(0x2d8)](_0x56a5d5)),_0x4f57ed=_0x4f57ed[_0x3db867(0x232)](/\[\[QUOTE\]\]/gi,this[_0x3db867(0x19e)](_0x56a5d5)),_0x4f57ed=VisuMZ[_0x3db867(0x333)]['finalizeWordWrapSupport'](_0x4f57ed),_0x4f57ed=VisuMZ[_0x3db867(0x333)][_0x3db867(0x2bb)](_0x4f57ed),_0x4f57ed[_0x3db867(0x16b)]();},Window_QuestLog[_0x435e5d(0x2ee)][_0x435e5d(0x217)]=function(){const _0x30b6b8=_0x435e5d;return TextManager[_0x30b6b8(0x1b6)];},Window_QuestLog['prototype'][_0x435e5d(0x2a0)]=function(_0x428fb1){const _0x221117=_0x435e5d;let _0xc2e028=$gameSystem['questDescription'](_0x428fb1);return _0xc2e028=VisuMZ['QuestSystem']['finalizeWordWrapSupport'](_0xc2e028),_0xc2e028[_0x221117(0x16b)]();},Window_QuestLog[_0x435e5d(0x2ee)]['createQuestObjectives']=function(_0x24c910,_0x42e110){const _0x412241=_0x435e5d,_0x51ece8=[],_0x1e6b41=$gameSystem[_0x412241(0x236)](_0x42e110),_0x1f29b5=$gameSystem[_0x412241(0x323)](_0x42e110),_0x2b8701=$gameSystem[_0x412241(0x27d)](_0x42e110),_0x4ff21b=_0x1e6b41[_0x412241(0x22e)](_0x1f29b5)[_0x412241(0x22e)](_0x2b8701)[_0x412241(0x321)]((_0x1f94d0,_0x43eb99)=>_0x1f94d0-_0x43eb99);for(const _0x57911c of _0x4ff21b){if(!_0x24c910[_0x412241(0x34a)][_0x57911c])continue;const _0x3ad550=_0x24c910[_0x412241(0x34a)][_0x57911c];let _0x337e14=TextManager[_0x412241(0x34b)];if(_0x1f29b5['includes'](_0x57911c))_0x337e14=TextManager[_0x412241(0x229)];if(_0x2b8701[_0x412241(0x270)](_0x57911c))_0x337e14=TextManager[_0x412241(0x2ef)];_0x51ece8[_0x412241(0x32d)](VisuMZ[_0x412241(0x333)][_0x412241(0x18e)](_0x337e14[_0x412241(0x179)](_0x3ad550)[_0x412241(0x16b)]()));}let _0x47fb57=VisuMZ[_0x412241(0x333)]['joinQuestEntries'](_0x51ece8);return _0x47fb57;},Window_QuestLog[_0x435e5d(0x2ee)]['createQuestRewards']=function(_0x3a704a,_0x358e49){const _0x134a3d=_0x435e5d,_0x37d2a2=[],_0x4ce095=$gameSystem['questRewards'](_0x358e49),_0x5a8f3c=$gameSystem[_0x134a3d(0x1ae)](_0x358e49),_0x206a5e=$gameSystem['questRewardsDenied'](_0x358e49),_0x16ddd1=_0x4ce095['concat'](_0x5a8f3c)[_0x134a3d(0x22e)](_0x206a5e)[_0x134a3d(0x321)]((_0x405e25,_0x442bb5)=>_0x405e25-_0x442bb5);for(const _0x4c93a3 of _0x16ddd1){if(!_0x3a704a[_0x134a3d(0x279)][_0x4c93a3])continue;const _0x56e4da=_0x3a704a[_0x134a3d(0x279)][_0x4c93a3];let _0x632654=TextManager[_0x134a3d(0x308)];if(_0x5a8f3c[_0x134a3d(0x270)](_0x4c93a3))_0x632654=TextManager['questRewardsClaimedFmt'];if(_0x206a5e[_0x134a3d(0x270)](_0x4c93a3))_0x632654=TextManager['questRewardsDeniedFmt'];_0x37d2a2[_0x134a3d(0x32d)](VisuMZ[_0x134a3d(0x333)][_0x134a3d(0x18e)](_0x632654[_0x134a3d(0x179)](_0x56e4da)['trim']()));}let _0x31133b=VisuMZ[_0x134a3d(0x333)][_0x134a3d(0x2ad)](_0x37d2a2);return _0x31133b;},Window_QuestLog['prototype'][_0x435e5d(0x2d8)]=function(_0x47f6d3){const _0x4c0eba=_0x435e5d;let _0x34d20d=$gameSystem['questSubtext'](_0x47f6d3);return _0x34d20d=VisuMZ['QuestSystem'][_0x4c0eba(0x18b)](_0x34d20d),_0x34d20d[_0x4c0eba(0x16b)]();},Window_QuestLog[_0x435e5d(0x2ee)][_0x435e5d(0x19e)]=function(_0x25ba17){const _0x2b2eba=_0x435e5d;let _0x57de2a=$gameSystem[_0x2b2eba(0x156)](_0x25ba17);return _0x57de2a=VisuMZ[_0x2b2eba(0x333)][_0x2b2eba(0x18b)](_0x57de2a),_0x57de2a[_0x2b2eba(0x16b)]();};function Window_QuestTracker(){const _0x18db2=_0x435e5d;this[_0x18db2(0x26d)](...arguments);}Window_QuestTracker[_0x435e5d(0x2ee)]=Object['create'](Window_QuestLog[_0x435e5d(0x2ee)]),Window_QuestTracker['prototype'][_0x435e5d(0x1c0)]=Window_QuestTracker,Window_QuestTracker[_0x435e5d(0x16a)]=VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x172)][_0x435e5d(0x26e)][_0x435e5d(0x1af)],Window_QuestTracker[_0x435e5d(0x24f)]=VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x172)][_0x435e5d(0x26e)][_0x435e5d(0x2b6)],Window_QuestTracker['prototype']['initialize']=function(_0xcf2eec){const _0x192289=_0x435e5d;Window_QuestLog[_0x192289(0x2ee)][_0x192289(0x26d)]['call'](this,_0xcf2eec),this[_0x192289(0x1fa)]($gameSystem['trackedQuest']()),this[_0x192289(0x16a)]['x']=this[_0x192289(0x16a)]['y']=Window_QuestTracker[_0x192289(0x16a)],this[_0x192289(0x2bf)]();},Window_QuestTracker['prototype'][_0x435e5d(0x205)]=function(){const _0x27fc31=_0x435e5d;return Math[_0x27fc31(0x27a)](this[_0x27fc31(0x166)],0x1);},Window_QuestTracker[_0x435e5d(0x2ee)][_0x435e5d(0x30d)]=function(){return'';},Window_QuestTracker['prototype'][_0x435e5d(0x217)]=function(){const _0x14734f=_0x435e5d;return TextManager[_0x14734f(0x331)];},Window_QuestTracker['prototype'][_0x435e5d(0x15f)]=function(){const _0x296428=_0x435e5d;this[_0x296428(0x1c1)]=this[_0x296428(0x205)]()+$gameSystem[_0x296428(0x30f)]()*0x2,Window_QuestLog[_0x296428(0x2ee)][_0x296428(0x15f)]['call'](this);},Window_QuestTracker['prototype']['setQuest']=function(_0xc5c82c){const _0x24c35f=_0x435e5d;if(this[_0x24c35f(0x2e0)]===_0xc5c82c)return;this[_0x24c35f(0x2e0)]=_0xc5c82c,this[_0x24c35f(0x2c3)]();},Window_QuestTracker['prototype'][_0x435e5d(0x2c3)]=function(){const _0x204c2f=_0x435e5d;if($gameTemp[_0x204c2f(0x224)])return;$gameTemp[_0x204c2f(0x224)]=!![],Window_QuestLog['prototype']['refresh']['call'](this),this[_0x204c2f(0x289)](this['_quest']?Window_QuestTracker[_0x204c2f(0x24f)]:0x2),$gameTemp[_0x204c2f(0x224)]=![];},Window_QuestTracker[_0x435e5d(0x2ee)][_0x435e5d(0x1bd)]=function(){const _0xeebd6c=_0x435e5d;Window_QuestLog['prototype']['update'][_0xeebd6c(0x21a)](this),this[_0xeebd6c(0x2bf)]();},Window_QuestTracker[_0x435e5d(0x2ee)][_0x435e5d(0x2bf)]=function(){const _0x4544de=_0x435e5d,_0x31084e=this['visibilityLevel']();this[_0x4544de(0x1a7)]=_0x31084e;},Window_QuestTracker['prototype'][_0x435e5d(0x23b)]=function(){const _0x1e1817=_0x435e5d;if(!ConfigManager[_0x1e1817(0x26f)])return 0x0;if($gameTemp[_0x1e1817(0x18f)])return 0x0;const _0x2a176e=SceneManager[_0x1e1817(0x304)];if(_0x2a176e&&_0x2a176e[_0x1e1817(0x20e)]){if(_0x2a176e['_messageWindow']['openness']>0x0)return 0x0;}if(!this['_quest'])return 0x0;return $gameSystem[_0x1e1817(0x2db)]()?0xff:0x0;},VisuMZ[_0x435e5d(0x333)]['finalizeWordWrapSupport']=function(_0x5b63f7){const _0x5e2590=_0x435e5d;if(!Window_QuestLog[_0x5e2590(0x327)])return _0x5b63f7;if(!Imported['VisuMZ_1_MessageCore'])return _0x5b63f7;return _0x5b63f7=_0x5e2590(0x155)[_0x5e2590(0x179)](_0x5b63f7),_0x5b63f7;},VisuMZ[_0x435e5d(0x333)]['noMessageCoreRemoveEscapeCodes']=function(_0x1fe0e0){const _0xe98d52=_0x435e5d;if(Imported[_0xe98d52(0x150)])return _0x1fe0e0;return _0x1fe0e0=_0x1fe0e0[_0xe98d52(0x232)](/<COLORLOCK>/gi,''),_0x1fe0e0=_0x1fe0e0[_0xe98d52(0x232)](/<\/COLORLOCK>/gi,''),_0x1fe0e0;},VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x1f7)]=function(_0x384d72){const _0xc21a91=_0x435e5d;if(!Window_QuestLog[_0xc21a91(0x327)]){if(_0xc21a91(0x280)===_0xc21a91(0x280))return _0x384d72[_0xc21a91(0x232)](/<(?:BR|LINEBREAK)>/gi,'');else{_0x5bf68f=_0x48a21b[_0xc21a91(0x1ef)]()[_0xc21a91(0x16b)]();const _0x7ef888=this[_0xc21a91(0x2f4)](_0x526696);if(!_0x7ef888)return'';const _0xe3a367=this[_0xc21a91(0x17c)]()[_0xc21a91(0x1cb)];_0xe3a367[_0x26e7b6]=_0x5c7958;}}if(!Imported[_0xc21a91(0x150)]){if('Fpdrn'!==_0xc21a91(0x188))this[_0xc21a91(0x26f)]=_0x3c88be[_0xc21a91(0x26f)];else return _0x384d72['replace'](/<(?:BR|LINEBREAK)>/gi,'');}return VisuMZ[_0xc21a91(0x24b)][_0xc21a91(0x172)]['WordWrap'][_0xc21a91(0x239)]?_0x384d72=_0x384d72[_0xc21a91(0x232)](/[\n\r]+/g,'\x1bWrapBreak[0]'):_0xc21a91(0x220)!==_0xc21a91(0x2fa)?_0x384d72=_0x384d72[_0xc21a91(0x232)](/[\n\r]+/g,''):(this['_textHeight']=0x0,this[_0xc21a91(0x31d)]=0x0,_0x177c44[_0xc21a91(0x2ee)]['initialize'][_0xc21a91(0x21a)](this,_0x4b9fac),this['_quest']=null,this['refresh']()),_0x384d72;},VisuMZ[_0x435e5d(0x333)]['convertLineBreaksForWordWrap']=function(_0x3d0e9e){const _0x4ec941=_0x435e5d;if(!Window_QuestLog['wordWrapSupport'])return _0x3d0e9e;if(!Imported[_0x4ec941(0x150)])return _0x3d0e9e;return _0x3d0e9e[_0x4ec941(0x16b)]()[_0x4ec941(0x232)](/[\n\r]/g,_0x4ec941(0x29c));},VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x18e)]=function(_0x19c47a){const _0x145d6a=_0x435e5d;if(!Window_QuestLog[_0x145d6a(0x327)])return _0x19c47a;if(!Imported[_0x145d6a(0x150)])return _0x19c47a;return VisuMZ['QuestSystem']['applyWordWrap'](_0x19c47a['trim']());},VisuMZ[_0x435e5d(0x333)][_0x435e5d(0x2ad)]=function(_0x44b333){const _0x43c597=_0x435e5d;if(!Window_QuestLog[_0x43c597(0x327)])return _0x44b333[_0x43c597(0x276)]('\x0a')['trim']();if(!Imported[_0x43c597(0x150)])return _0x44b333[_0x43c597(0x276)]('\x0a')[_0x43c597(0x16b)]();return _0x44b333[_0x43c597(0x276)](_0x43c597(0x29c))[_0x43c597(0x16b)]();},totalQuestsAvailable=function(){const _0x3ba5fe=_0x435e5d;return $gameSystem[_0x3ba5fe(0x17c)]()[_0x3ba5fe(0x252)][_0x3ba5fe(0x237)];},totalQuestsCompleted=function(){const _0x5566cc=_0x435e5d;return $gameSystem[_0x5566cc(0x17c)]()[_0x5566cc(0x1d2)][_0x5566cc(0x237)];},totalQuestsFailed=function(){const _0x339da4=_0x435e5d;return $gameSystem[_0x339da4(0x17c)]()['failed'][_0x339da4(0x237)];},totalQuestsRevealed=function(){return totalQuestsAvailable()+totalQuestsCompleted()+totalQuestsFailed();},totalQuestsInGame=function(){const _0xa9c126=_0x435e5d;return VisuMZ[_0xa9c126(0x333)]['QuestOrder'][_0xa9c126(0x237)];},getQuestDescriptionIndex=function(_0x33f3f5){const _0x3cc6ae=_0x435e5d;_0x33f3f5=_0x33f3f5[_0x3cc6ae(0x1ef)]()[_0x3cc6ae(0x16b)]();const _0x4b9fdf=$gameSystem['quest'](_0x33f3f5);if(!_0x4b9fdf)return-0x1;$gameSystem['questDescription'](_0x33f3f5);const _0x3801ba=$gameSystem[_0x3cc6ae(0x17c)]()[_0x3cc6ae(0x1cb)];return _0x3801ba[_0x33f3f5]||0x0;},totalVisibleQuestObjectives=function(_0x1db7f7){const _0x165905=_0x435e5d;_0x1db7f7=_0x1db7f7[_0x165905(0x1ef)]()[_0x165905(0x16b)]();const _0x26fdeb=$gameSystem[_0x165905(0x2f4)](_0x1db7f7);if(!_0x26fdeb)return-0x1;$gameSystem[_0x165905(0x236)](_0x1db7f7);const _0xcf370a=$gameSystem[_0x165905(0x17c)]()[_0x165905(0x196)]||{};if(!_0xcf370a[_0x1db7f7])return 0x0;return _0xcf370a[_0x1db7f7][_0x165905(0x237)];},totalQuestObjectives=function(_0x3365ef){const _0xe1cdf7=_0x435e5d;_0x3365ef=_0x3365ef['toUpperCase']()['trim']();const _0x1eedc0=$gameSystem[_0xe1cdf7(0x2f4)](_0x3365ef);return _0x1eedc0?_0x1eedc0[_0xe1cdf7(0x34a)][_0xe1cdf7(0x237)]-0x1:0x0;},totalVisibleQuestRewards=function(_0x38a493){const _0xdfc68b=_0x435e5d;_0x38a493=_0x38a493[_0xdfc68b(0x1ef)]()['trim']();const _0x18dcc6=$gameSystem[_0xdfc68b(0x2f4)](_0x38a493);if(!_0x18dcc6)return-0x1;$gameSystem[_0xdfc68b(0x176)](_0x38a493);const _0x5bbaa7=$gameSystem['questData']()['rewards']||{};if(!_0x5bbaa7[_0x38a493])return 0x0;return _0x5bbaa7[_0x38a493][_0xdfc68b(0x237)];},totalQuestRewards=function(_0x5235c4){const _0x1dcfe2=_0x435e5d;_0x5235c4=_0x5235c4[_0x1dcfe2(0x1ef)]()[_0x1dcfe2(0x16b)]();const _0x4a2663=$gameSystem[_0x1dcfe2(0x2f4)](_0x5235c4);return _0x4a2663?_0x4a2663[_0x1dcfe2(0x279)][_0x1dcfe2(0x237)]-0x1:0x0;},getQuestSubtextIndex=function(_0x2003e9){const _0x313850=_0x435e5d;_0x2003e9=_0x2003e9['toUpperCase']()[_0x313850(0x16b)]();const _0x890e17=$gameSystem['quest'](_0x2003e9);if(!_0x890e17)return-0x1;$gameSystem[_0x313850(0x1f6)](_0x2003e9);const _0x107c8b=$gameSystem[_0x313850(0x17c)]()['subtext'];return _0x107c8b[_0x2003e9]||0x0;},getQuestQuoteIndex=function(_0x56cd45){const _0x1a5fce=_0x435e5d;_0x56cd45=_0x56cd45[_0x1a5fce(0x1ef)]()['trim']();const _0x46fcd2=$gameSystem[_0x1a5fce(0x2f4)](_0x56cd45);if(!_0x46fcd2)return-0x1;$gameSystem[_0x1a5fce(0x156)](_0x56cd45);const _0x253bf8=$gameSystem[_0x1a5fce(0x17c)]()[_0x1a5fce(0x2e4)];return _0x253bf8[_0x56cd45]||0x0;},isQuestObjectiveCompleted=function(_0x15da16,_0x591fed){const _0x5a49dc=_0x435e5d;_0x15da16=_0x15da16[_0x5a49dc(0x1ef)]()[_0x5a49dc(0x16b)]();const _0x369b14=$gameSystem[_0x5a49dc(0x2f4)](_0x15da16);if(!_0x369b14)return![];$gameSystem[_0x5a49dc(0x236)](_0x15da16);const _0x1fd74c=$gameSystem[_0x5a49dc(0x17c)]()[_0x5a49dc(0x174)];if(!_0x1fd74c[_0x15da16])return![];return _0x1fd74c[_0x15da16][_0x5a49dc(0x270)](_0x591fed);},isQuestObjectiveFailed=function(_0x1b7f10,_0x565d49){const _0x25d55b=_0x435e5d;_0x1b7f10=_0x1b7f10[_0x25d55b(0x1ef)]()[_0x25d55b(0x16b)]();const _0x507424=$gameSystem[_0x25d55b(0x2f4)](_0x1b7f10);if(!_0x507424)return![];$gameSystem['questObjectives'](_0x1b7f10);const _0x3c56c9=$gameSystem['questData']()[_0x25d55b(0x1ed)];if(!_0x3c56c9[_0x1b7f10])return![];return _0x3c56c9[_0x1b7f10][_0x25d55b(0x270)](_0x565d49);},isQuestObjectiveUncleared=function(_0x544184,_0x1eac12){const _0x28bafe=_0x435e5d;_0x544184=_0x544184[_0x28bafe(0x1ef)]()[_0x28bafe(0x16b)]();const _0x5d3471=$gameSystem[_0x28bafe(0x2f4)](_0x544184);if(!_0x5d3471)return![];$gameSystem[_0x28bafe(0x236)](_0x544184);const _0x37e93b=$gameSystem[_0x28bafe(0x17c)]()[_0x28bafe(0x196)];if(!_0x37e93b[_0x544184])return![];return _0x37e93b[_0x544184][_0x28bafe(0x270)](_0x1eac12);},isQuestRewardClaimed=function(_0x49cfd7,_0x39d121){const _0x1d4f94=_0x435e5d;_0x49cfd7=_0x49cfd7[_0x1d4f94(0x1ef)]()[_0x1d4f94(0x16b)]();const _0x6ca6d1=$gameSystem['quest'](_0x49cfd7);if(!_0x6ca6d1)return![];$gameSystem[_0x1d4f94(0x176)](_0x49cfd7);const _0x56d661=$gameSystem[_0x1d4f94(0x17c)]()[_0x1d4f94(0x1f1)];if(!_0x56d661[_0x49cfd7])return![];return _0x56d661[_0x49cfd7][_0x1d4f94(0x270)](_0x39d121);},isQuestRewardDenied=function(_0x4c880a,_0x2ddbc8){const _0x1eaa53=_0x435e5d;_0x4c880a=_0x4c880a[_0x1eaa53(0x1ef)]()[_0x1eaa53(0x16b)]();const _0x501836=$gameSystem[_0x1eaa53(0x2f4)](_0x4c880a);if(!_0x501836)return![];$gameSystem[_0x1eaa53(0x176)](_0x4c880a);const _0x313de6=$gameSystem['questData']()[_0x1eaa53(0x275)];if(!_0x313de6[_0x4c880a])return![];return _0x313de6[_0x4c880a][_0x1eaa53(0x270)](_0x2ddbc8);},isQuestRewardUnclaimed=function(_0x2f646c,_0x1d15b4){const _0x143bc9=_0x435e5d;_0x2f646c=_0x2f646c['toUpperCase']()[_0x143bc9(0x16b)]();const _0x580457=$gameSystem[_0x143bc9(0x2f4)](_0x2f646c);if(!_0x580457)return![];$gameSystem[_0x143bc9(0x176)](_0x2f646c);const _0x28642b=$gameSystem['questData']()[_0x143bc9(0x1fb)];if(!_0x28642b[_0x2f646c])return![];return _0x28642b[_0x2f646c][_0x143bc9(0x270)](_0x1d15b4);};