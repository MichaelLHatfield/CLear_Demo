/* eslint-disable spaced-comment */
/*:
 * @pluginname LTN_StatAndSkillLevels
 * @plugindesc (v1.1.0) Gives your game a leveling system for stats and skills
 * @modulename $sl
 * @required
 * @external
 * @target MZ
 *
 * @param menuCommand
 * @text Menu Command Options
 * @desc Options for adding a menu command
 * @type struct<MenuCommand>
 * @default {"addMenuCommand":"false","commandName":"Stat Levels","commandEnable":"return true"}
 *
 *
 * @param forceDefaultParams
 * @text Force Default Params
 * @desc Force default params to use your custom stats value
 * @type struct<ForceParamToStat>[]
 * @default []
 *
 * @param battleTestIgnore
 * @text Battle Test Ignore
 * @desc Ignore forced default params during battle test
 * @type boolean
 * @default false
 *
 * @param statPointLevelFormula
 * @text Stat Points Level Formula
 * @desc The formula to use to gain stat points when levelling up
 * @type note
 * @default ""
 *
 * @param customStats
 * @text Custom Stats
 * @desc All custom stats which should be added to the game
 * @type struct<CustomStat>[]
 * @default []
 *
 * @param skillPointLevelFormula
 * @text Skill Points Level Formula
 * @desc The formula to use to gain skill points when levelling up
 * @type note
 * @default ""
 *
 * @param autoLearnCustomSkills
 * @text Auto Learn Custom Skills
 * @desc Automatically learn all custom skills for each actor.
 * @type boolean
 * @default false
 *
 * @param customSkills
 * @text Custom Skills
 * @desc All custom skills which may be affected by custom stats
 * @type struct<CustomSkill>[]
 * @default []
 *
 * @command OpenScene
 * @desc Open the stat and skill levelling scene
 *
 * @command AddStatPoint
 * @desc Adds a number of stat points to the stat point pool
 * @arg actorId
 * @text Actor ID
 * @type actor
 * @desc The actor you would like to add the points to
 * @default 1
 *
 * @arg entireParty
 * @text Entire Party
 * @desc Will add points to the entire party and ignores the Actor ID
 * @type boolean
 * @default false
 *
 * @arg amount
 * @text Amount
 * @desc Amount of stat points to add
 * @default 1
 *
 * @command AddSkillPoint
 * @desc Adds a number of skill points to the skill point pool
 * @arg actorId
 * @text Actor ID
 * @type actor
 * @desc The actor you would like to add the points to
 * @default 1
 *
 * @arg entireParty
 * @text Entire Party
 * @desc Will add points to the entire party and ignores the Actor ID
 * @type boolean
 * @default false
 *
 * @arg amount
 * @text Amount
 * @desc Amount of sill points to add
 * @default 1
 *
 * @command SkillLevel
 * @desc Adds oor removes levels to a skill for a specific actor
 *
 * @arg remove
 * @text Remove Level
 * @desc Set to remove or add skill levels
 * @type boolean
 * @default false
 * @on Remove Skill Level
 * @off Add Skill Level
 *
 * @arg actorId
 * @text Actor ID
 * @type actor
 * @desc The actor of the skill you would like to add the levels to
 * @default 1
 *
 * @arg entireParty
 * @text Entire Party
 * @desc Will add levels to the entire party and ignores the Actor ID
 * @type boolean
 * @default false
 *
 * @arg skill
 * @text Skill
 * @desc The skill you would like to add the levels to
 * @type skill
 * @default 0
 *
 * @arg amount
 * @text Amount
 * @desc Amount of levels to add to the skill
 * @default 1
 *
 * @arg asSkillPoint
 * @text Add as skill point
 * @desc This will add the amount as if you are adding a skill point. Disable to add amount directly to total instead.
 * @type boolean
 * @default true
 *
 * @command StatLevel
 * @desc Adds points to a stat for a specific actor
 *
 * @arg remove
 * @text Remove Level
 * @desc Set to remove or add stat levels
 * @type boolean
 * @default false
 * @on Remove Stat Level
 * @off Add Stat Level
 *
 * @arg actorId
 * @text Actor ID
 * @type actor
 * @desc The actor of the skill you would like to add the levels to
 * @default 1
 *
 * @arg entireParty
 * @text Entire Party
 * @desc Will add levels to the entire party and ignores the Actor ID
 * @type boolean
 * @default false
 *
 * @arg stat
 * @text Stat
 * @desc The stat you would like to add the points to
 * @type string
 * @default ""
 *
 * @arg amount
 * @text Amount
 * @desc Amount of points to add to the stat
 * @default 1
 *
 * @command Reset
 * @desc Reset all stats(or skills) and return your points
 *
 * @arg type
 * @text Type
 * @desc The type of reset (stats or skills)
 * @type select
 * @default Stats
 * @option Stats
 * @value stats
 * @option Skills
 * @value skills
 *
 * @arg actorId
 * @text Actor ID
 * @type actor
 * @desc The actor you want to reset the skills or stats for
 * @default 1
 *
 * @arg entireParty
 * @text Entire Party
 * @desc Will reset skills or stats of the entire party
 * @type boolean
 * @default false
 *
 *
 * @author LTN Games
 *
 * @url https://ltngames.xyz/
 *
 * @help
--------------------------------------------------------------------------------
 # TERMS OF USE (https://ltngames.xyz/terms-of-use.html)

 * Free to use in any of your projects, commercial or otherwise

 * Credits/Attribution must go to 'LTN Games'

  * You may edit this plugin and you may ask others to edit this plugin for free
  or for payment so long as the original header and terms of use remain intact.

  * You may NOT re-distribute this plugin alone for monetary gains
   without LTN Games direct written permission.

  * Do NOT change any information, including the original parameters or
    terms of use.
 -------------------------------------------------------------------------------
 # INFORMATION

 To get started, first set up the plugins parameters by setting up custom stats
 and custom skills for use in your game.

 -----------------------------------
 # CUSTOM STATS

 Custom stats are additional parameters like Atk, Def, M Def, etc which can be
 leveled up via stat points and in their own custom level up scene.

 -----------------------------------
 # CUSTOM SKILLS

 Custom skills are just like regular skills, they use the skills database but
 they behave slightly different due to the way you level them up via the level
 up scene.

 ------------------------------------
 # FORMULAS

 Custom stats can be used in formulas anywhere there is a formula box which
 allows the use of an actors parameters. For example a damage formula for a
 skill.

 Custom stats are accessed via the `a` variable within a formula followed by
 the short name/abbreviated name of the custom stat. For example the Attack
 skill damage formula can be changed from the default "a.atk * 4 - b.def * 2"
 to "a.atk * (a.str / 2) - b.def * 2" which means the default attack will
 be based on the actor's custom strength stat.

 Custom skills are accessed by using the `a.cs` variable within a formula and
 then followed by the skill name in all lowercase and no spaces. For example
 to use speech in a formula you would use "a.cs.speech" which will return the
 current level of the speech skill. For small guns you would use
 "a.cs.smallguns" to get the level of the small guns skill.

 There are a few extra variables when strictly entering formulas in the plugins
 parameters . You can access skills and stats using the `skill` and `stat`
 variables and this is mainly for readability purposes only.

 For example "skill.speech" or "stat.chr"  can be used over "a.cs.speech" or
 "a.chr", in the end its up to you and both ways are perfectly viable.

 ------------------------------------
 # MENU NAVIGATION

 Menu navigation is similar to all other menus with one small difference.

 When adding or removing a skill point use the left and right arrows but when
 you need to switch to the skills window and back to the stats window hold
 shift and use the left and right arrows on the keyboard.

 -------------------
 ## Add Menu Command via VisuStella Main Menu Core plugin

 To add Stat Level command to the main menu using VisuStella's Main Menu Core
 plugin you will have to add our command in the plugin's `Command Window List`
 parameter.

 Symbol: statlevels
 Icon:
 STR:Text Stat Levels
 JS:Text:
 JS:Show return true;
 JS:Enable: return this.areMainCommandsEnabled();
 JS:Ext
 JS:RunCode: SceneManager.push($sl.Scene);
 JS: Personal Code:

------------------------------------------------------------------------------
 # NOTETAGS

 Notetags can be used on all equipment types to gain or penalize a stat.

 The stat formula is rather basic
 <stat: operation amount>

 Examples
 To add 5 to agility stat, the notetag would look something like this
 <agi: add 5>

 To remove from the agility stat, the notetag would look like this
 <agi: remove 5>

 ------------------------------------------------------------------------------
 # SCRIPT CALLS

 Script calls are useful for conditional statements in your events or when you're
 developing a plugin of your own or simply need access to the JavaScript side of
 things.

 A few things to keep note of...

 actorId = The id(number) of the actor you want to access.

 statName = The short name of the stat you want to access

 skillName = The name of the skill as seen in the Skill database

 amount = the amount(number) of a specific level or skill point you want to be added

 entireParty = Whether or not to perform the action on the entire party.

 If this is set to true the actorId will be ignored. Can only be `true` or `false`

 asSkillPoint = Setting to false will add the amount of points directly to the
 total rather than it behaving as if you were in the leveling scene adding
 points to the skill directly.

 -------------------------------
 ## Add Skill or Stat Points to an Actor
 -------------------------------
 // Stat Point
 $sl.addStatPoints(actorId, amount, entireParty);

 // Skill Point
 $sl.addSkillPoints(actorId, amount, entireParty);

 -------------------------------
 ## Remove Skill or Stat Points of an Actor
 -------------------------------
 // Stat Point
 $sl.removeStatPoints(actorId, amount, entireParty);

 // Skill Point
 $sl.removeSkillPoints(actorId, amount, entireParty);

 -------------------------------
 ## Add Skill Level
 -------------------------------
 You can use the following method to ensure the formulas are used. This method will be no different than if you were in the leveling scene and pressed level up for that skill. This will ignore available skill points.

 $sl.addSkillLevel((actorId, skillName, amount, entireParty, asSkillPoint);

 -------------------------------
 ## Remove Skill Level
 -------------------------------
 You can use the following method to ensure the formulas are used. This method will be no different than if you were in the leveling scene and pressed level down for that skill.

 $sl.removeSkillLevel((actorId, skillName, amount, entireParty, asSkillPoint);

 -------------------------------
 ## Add level to a custom stat
 -------------------------------

 This will add a level to a custom stat while ignoring available stat points.

 $sl.addStatLevel(actorId, statName, amount, entireParty);

 -------------------------------
 ## Remove level of a custom stat
 -------------------------------
 This will remove a level of a custom stat while ignoring available stat points

 $sl.removeStatLevel(actorId, statName, amount, entireParty);

 -------------------------------
 ### Re-evaluate skill and stat bonuses and penalties
 -------------------------------
 When adding or removing a level on a stat be sure to re-evaluate the stat bonus for a skills initial level.
 Essentially this will ensure your skills will properly adjust their levels according to stat points new level.

 $sl.evaluateSkillStatBonus(actorId, entireParty);

 -------------------------------
 ## Reset Skills
 -------------------------------
 This will reset all skills to their initial level using the initial level formula.

 $sl.resetSkills(actorId, entireParty);

 -------------------------------
 ## Reset Stats
 -------------------------------
 This will reset all stats to their initial level keeping equipment bonuses and
 penalties intact.

 $sl.resetStats(actorId, entireParty);

 -------------------------------
 ## Access Stat and Skill Data
 -------------------------------
 This will likely not be required for general game development, it would more likely be used for plugin development.

 $gameActors.actor(actorId).customStats["str"];

 The above returns an object with the following information available to adjust

 name: "Strength";
 shortName: "str";
 description: "The strength description";
 currentLevel: 1;
 initialLevel: 1;
 maxLevel: 10;

 **For a skill you would for example do**

 $gameActors.actor(actorId).getCustomSkill("Small Guns");

 The above returns an object with the following information

 name: "Small guns"
 formulaName: "smallguns"
 description: "The small guns description"
 currentLevel: 1
 initialLevel: 1
 initialLevelFormula: 25 + (2 \* cs.chr)
 maxLevel: 100
*/

/*~struct~MenuCommand:
 *
 * @param add
 * @text Add Menu Command
 * @desc Adds the menu command to main menu for access to the stat and skill level up scene
 * @type boolean
 * @default false
 *
 * @param name
 * @text Menu Command Name
 * @desc The name of the command
 * @type text
 * @default Stat Levels
 *
 * @param enable
 * @text Enable Command?
 * @desc The code to determine if the command can be enabled or not
 * @type note
 * @default return true
 *
 */

/*~struct~ForceParamToStat:
 *
 * @param defaultParamId
 * @text Param ID
 * @desc The default param ID
 * @type select
 * @option Maximum Hit Points
 * @value 0
 * @option Maximum Magic Points
 * @value 1
 * @option Attack
 * @value 2
 * @option Defense
 * @value 3
 * @option Magic Attack
 * @value 4
 * @option Magic Defense
 * @value 5
 * @option Agility
 * @value 6
 * @option Luck
 * @value 7
 *
 * @param value
 * @text Override Stat
 * @desc The custom stat you want to override with. (Use short name of custom stat)
 * @type string
 * @default
 *
 */

/*~struct~CustomStat:
 *
 * @param name
 * @text Default Param
 * @desc The name of the custom stat
 * @type string
 * @default
 *
 * @param shortName
 * @text Short Stat Name
 * @desc The short abbreviated name of the custom stat
 * @type string
 * @default
 *
 * @param description
 * @text Stat Description
 * @desc The description of the custom stat
 * @type note
 * @default
 *
 * @param initialLevel
 * @text Initial Level
 * @desc The initial level this stat should start at.
 * @type number
 * @default 1
 * @min 0
 * @max 9999999
 *
 * @param levelPerPoint
 * @text Level Per Point Formula
 * @desc The formula used to determine the amount of levels a stat will increase per point used
 * @type note
 * @default ""
 *
 * @param maxLevel
 * @text Maximum Level
 * @desc The max level this stat can be levelled to.
 * @type number
 * @default 10
 * @min 0
 * @max 9999999
 *
 * @param maxLevelVariable
 * @text Variable Maximum Level
 * @desc Same as max level but you can use a variable instead
 * @type variable
 * @default 0
 *
 */

/*~struct~CustomSkill:
 *
 * @param skillId
 * @text Skill ID
 * @desc The skill ID of the skill you want to customize
 * @type skill
 * @default 0
 *
 * @param description
 * @text Skill Description
 * @desc The description of the custom skill (if remains empty, description in database will be used)
 * @type note
 * @default
 *
 * @param initialLevelFormula
 * @text Initial Level Formula
 * @desc The formula used to determine this skills initial level
 * @type note
 * @default ""
 *
 * @param skillPointCost
 * @text Skill Point Cost Formula
 * @desc The formula used to determine the skill point cost per skill level
 * @type note
 * @default ""
 *
 * @param levelPerPoint
 * @text Level Per Point Formula
 * @desc The formula used to determine the amount of levels a skill will increase per point used
 * @type note
 * @default ""
 *
 * @param maxLevel
 * @text Max Level
 * @desc The max level a skill can reach with skill points
 * @type number
 * @default 100
 * @min 0
 * @max 9999999
 *
 * @param maxLevelVariable
 * @text Variable Maximum Level
 * @desc Same as max level but you can use a variable instead
 * @type variable
 * @default 0
 *
 * @param note
 * @text Note
 * @desc A custom note for you (not used in game)
 * @type note
 * @default ""
 *
 */

var $sl = (function (exports) {
'use strict';

/**
 * Recursive method that will convert all string values in an object to a more
 * appropriate type.
 *
 * In MV there are a lot of objects filled with strings of different values, a lot
 * of times we need to convert each value manually, instead use this to quickly
 * deep parse each value from string to the correct type.
 *
 * @function convertParameters
 * @since 1.0.0
 * @memberof module:Utils
 *
 * @param {object} parameters - The string filled object you want converted
 *
 * @returns An object with it's string values converted
 * @example
 *
 * const myParams = { p1: '22', p2: 'true' }
 * convertParameters(myParams) // => { p1: 22, p2: true }
 *
 * const myParams = { p1: '{a: 1'1, c: '2'}', p2: '[{}, {}, {}]' }
 * convertParameters(myParams) // => { p1: {a: 1, c: 2}, p2: [{}, {}, {}] }
 *
 */
function convertParameters (parameters) {
  function parseParameters (string) {
    try {
      return JSON.parse(string, (key, value) => {
        try {
          return parseParameters(value)
        } catch (e) {
          return value
        }
      })
    } catch (e) {
      return string
    }
  }
  return parseParameters(JSON.stringify(parameters))
}

class ButtonArea extends Window_Help {
  constructor (rect) {
    super(rect);
    this.width = rect.width;
    this.height = rect.height;
    this.x = rect.x;
    this.y = rect.y;
  }
}

class Window_Title extends Window_Base {
  constructor (rect) {
    super(rect);
    this._titleText = '';
    this.largeFont = true;
  }

  setTitle (newTitle) {
    this._titleText = newTitle;
    this.refresh();
  }

  refresh () {
    this.contents.clear();
    if (this.largeFont) {
      this.makeFontBigger();
    }
    this.drawText(this._titleText, 0, 0, this.width, 'center');
  }
}

class Window_SkillBase extends Window_ItemList {
  constructor (rect) {
    super(rect);
    this._buttons = [];
    this.pressedButton = 'none';
    this._hovered = false;
    this._pressed = false;
    this.isMainActive = false;
  }

  update () {
    super.update();
  }

  makeCopy (data) {
    return JsonEx.makeDeepCopy(data)
  }

  maxCols () {
    return 1
  }

  colSpacing () {
    return 8
  }

  isCurrentItemEnabled () {
    return true
  }

  setMainActive (value = true) {
    this.isMainActive = value;
  }

  bottomIndex () {
    return this._data.length - 1
  }

  isBottomIndex () {
    return this.index() >= this._data.length - 1
  }

  isOkEnabled () {
    return this.isHandled('ok') && this.isMainActive
  }

  processCursorMove () {
    if (this.isCursorMovable() && this.isMainActive) {
      const lastIndex = this.index();
      if (Input.isRepeated('down')) {
        this.cursorDown(Input.isTriggered('down'));
      }
      if (Input.isRepeated('up')) {
        this.cursorUp(Input.isTriggered('up'));
      }
      if (Input.isPressed('shift') === false) {
        if (Input.isRepeated('right')) {
          this.cursorRight(Input.isTriggered('right'));
        }
        if (Input.isRepeated('left')) {
          this.cursorLeft(Input.isTriggered('left'));
        }
      }
      if (!this.isHandled('pagedown') && Input.isTriggered('pagedown')) {
        this.cursorPagedown();
      }
      if (!this.isHandled('pageup') && Input.isTriggered('pageup')) {
        this.cursorPageup();
      }
      if (this.index() !== lastIndex) {
        this.playCursorSound();
      }
    }
  }

  cursorRight () {
    this.pressedButton = 'up';
    this.processOk();
  }

  cursorLeft () {
    this.pressedButton = 'down';
    this.processOk();
  }

  select (index) {
    super.select(index);
    this.callHandler('select');
  }

  onTouchSelect (trigger) {
    this._doubleTouch = false;
    if (this.isCursorMovable()) {
      const lastIndex = this.index();
      const hitIndex = this.hitIndex();
      if (hitIndex >= 0) {
        if (hitIndex === this.index()) {
          this._doubleTouch = true;
        }
        this.onEnter();
        this.select(hitIndex);
      } else if (hitIndex <= -1) {
        this.onExit();
      }
      if (trigger && this.index() !== lastIndex) {
        this.playCursorSound();
      }
    }
  }

  processOk () {
    if (this.isCurrentItemEnabled()) {
      this.playOkSound();
      this.updateInputData();
      // this.deactivate()
      this.callOkHandler();
    } else {
      this.playBuzzerSound();
    }
  }

  onPress () {
    this.onClick();
  }

  onEnter () {
    this.select(0);
  }

  onExit () {
    this.select(-1);
  }

  setDefaultActor (actor) {
    this._defaultActor = JsonEx.makeDeepCopy(actor);
  }

  setActor (actor) {
    this._actor = actor;
    this.refresh();
  }

  itemRectWithPadding (index) {
    const arrowButton = new Sprite_Button('pageup');
    const rect = this.itemRect(index);
    const padding = this.itemPadding();
    rect.x += padding;
    rect.width -= padding * 2 + arrowButton.width * 2;
    return rect
  }

  numberRectWithPadding (x, y, width) {
    const boxWidth = this.textWidth('00') + 12;
    const rect = new Rectangle();
    rect.x = x + width - (this.textWidth('00') + 6);
    rect.y = y;
    rect.width = boxWidth;
    rect.height = this.lineHeight();

    return rect
  }

  createLevelButtons (item, x, y) {
    const upButton = new Sprite_Button('up');
    upButton.scale.y -= 0.40;
    upButton.scale.x -= 0.25;
    upButton.x = x - (upButton.getBounds().width * 2);
    upButton.y = y - (upButton.getBounds().height / 2);

    const downButton = new Sprite_Button('down');
    downButton.scale.y -= 0.40;
    downButton.scale.x -= 0.25;
    downButton.x = upButton.x + (upButton.getBounds().width + 4);
    downButton.y = y - (upButton.getBounds().height / 2);

    this.addInnerChild(upButton);
    this.addInnerChild(downButton);
    this._buttons.push(upButton, downButton);

    upButton.onMouseEnter = () => {
      this.pressedButton = 'up';
    };

    downButton.onMouseEnter = () => {
      this.pressedButton = 'down';
    };

    upButton.setClickHandler(() => {
      this.processOk();
    });

    downButton.setClickHandler(() => {
      this.processOk();
    });
  }

  drawItemBackground (index) {
    const rect = this.itemRect(index);
    this.drawBackgroundRect(rect);
  }

  drawItemNumber (item, x, y, width) {
    const rect = this.numberRectWithPadding(x, y, width);
    const level = item.currentLevel;
    const text = level <= 9 ? `0${level}` : level;
    this.drawBackgroundRect(rect);
    this.drawText(text, x, y, width, 'right');
  }

  drawItem (index) {
    const item = this.itemAt(index);
    if (item) {
      const mainRect = this.itemRect(item);
      const rect = this.itemLineRect(index);
      this.drawText(item.name, rect.x, rect.y, rect.width);
      this.createLevelButtons(item, mainRect.width, rect.y + (rect.height / 2));
      this.drawItemNumber(
        item,
        rect.x - 5,
        rect.y,
        rect.width - this.textWidth('00')
      );
    }
  }

  refresh () {
    this._buttons.forEach(b => this.removeChild(b));
    this._buttons = [];
    super.refresh();
  }
}

class Window_CustomStatList extends Window_SkillBase {
  makeItemList () {
    this._data = Object.values(this._actor.customStats);
  }

  isCurrentItemEnabled () {
    const stat = this.item();
    if (!stat) {
      return false
    }
    const actor = this._actor;
    const defaultStat = this._defaultActor.customStats[stat.shortName];
    const points = Math.floor(this._actor._customStatPoints);
    const currentLevel = this.item().currentLevel;
    const defaultLevel = defaultStat.currentLevel;
    const nextLevel = currentLevel + actor.evalCustomFormula(defaultStat.levelPerPoint);

    switch (this.pressedButton) {
      case 'up':
        return points > 0 && nextLevel <= stat.maxLevelValue()
      case 'down':
        return points >= 0 && currentLevel - 1 >= defaultLevel

      default:
        return false
    }
  }

  drawItemNumber (item, x, y, width) {
    const statPlus = this._actor._customStatsPlus[item.shortName];
    const rect = this.numberRectWithPadding(x, y, width);

    const level = item.currentLevel;
    const text = level <= 9 ? `0${level}` : level;
    this.drawBackgroundRect(rect);
    this.drawText(text, x, y, width, 'right');

    if (statPlus.currentLevel - level !== 0) {
      const plusLevel = statPlus.currentLevel;
      const plusText = `(${plusLevel - level})`;
      this.contents.fontSize = this.contents.fontSize - 6;
      this.drawText(plusText, rect.x + rect.width, y, this.textWidth('000'));
      this.resetFontSettings();
    }
  }
}

class Window_CustomSkillList extends Window_SkillBase {
  constructor (rect, actor) {
    super(rect);
  }

  makeItemList () {
    this._data = this._actor.customSkills();
  }

  isCurrentItemEnabled () {
    const skill = this.item();
    if (!skill) {
      return false
    }
    const actor = this._actor;
    const defaultActor = this._defaultActor;
    const currentLevel = skill.currentLevel;
    const points = Math.floor(actor._customSkillPoints);
    const value = actor.evalCustomFormula(skill.levelPerPoint);
    const downValue = actor.evalCustomFormula(`${skill.levelPerPoint}_leveldown_`);
    const pointCost = actor.evalCustomFormula(skill.skillPointCost);

    const nextLevel = skill.currentLevel + value;
    const prevLevel = currentLevel - downValue;
    const defaultLevel = defaultActor._customSkills[this.index()]
      .currentLevel;

    switch (this.pressedButton) {
      case 'up':
        return points > 0 && points >= pointCost && nextLevel <= skill.maxLevelValue()
      case 'down':
        return points >= 0 && prevLevel >= defaultLevel && prevLevel >= skill.initialLevel

      default:
        return false
    }
  }
}

class Window_SkillPoints extends Window_Base {
  constructor (rect) {
    super(rect);
    this._pointsText = '';
    this._skillPoints = 0;
  }

  setPoints (pointsText, points) {
    this._pointsText = pointsText || this._pointsText;
    this._skillPoints = Math.floor(points);
    this.refresh();
  }

  drawBackgroundRect (rect) {
    const c1 = this.itemBackColor1();
    const c2 = this.itemBackColor2();
    const x = rect.x;
    const y = rect.y;
    const w = rect.width;
    const h = rect.height;
    this.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);
    this.contentsBack.strokeRect(x, y, w, h, c1);
  }

  drawItemNumber (number, x, y, width) {
    const text = number <= 9 ? `0${number}` : number;
    const boxWidth = this.textWidth('00') + 12;

    const rect = new Rectangle();
    rect.x = x + width - (this.textWidth('00') + 6);
    rect.y = y;
    rect.width = boxWidth;
    rect.height = this.lineHeight();

    this.drawBackgroundRect(rect);
    this.drawText(text, x, y, width, 'right');
  }

  refresh () {
    this.contents.clear();
    this.contentsBack.clear();
    this.drawText(this._pointsText, 0, 0, this.width, 'left');
    this.drawItemNumber(this._skillPoints, 0, 0, this.contents.width - 18);
  }
}

class Window_Confirmation extends Window_HorzCommand {

  maxCols () {
    return 3
  }

  makeCommandList () {
    this.addCommand('Yes', 'yes');
    this.addCommand('No', 'no');
    this.addCommand('Cancel', 'cancel');
  }
}

/* globals VisuMZ Window_StatusBase */

class Window_Status extends Window_EquipStatus {
  constructor (rect) {
    super(rect);
    this.refresh();
  }

  isVisuMainMenuCore () {
    return typeof VisuMZ !== 'undefined' && VisuMZ.MainMenuCore
  }

  drawGaugeEx (x = 0, y = 0, width = 100, height = 8, rate, color1, color2) {
    const fillW = Math.floor(width * rate);
    const gaugeY = y + this.lineHeight() / 2;
    this.contents.fillRect(x, gaugeY, width, height, this.gaugeBackColor());
    this.contents.gradientFillRect(x, gaugeY, fillW, height, color1, color2);
  }

  drawCurrent (current, x, y, width, color1, color2) {
    const valueWidth = this.textWidth('0000');
    const x1 = x + width - valueWidth;
    this.changeTextColor(color1);
    this.drawText(current, x1, y, valueWidth, 'right');
  }

  drawActorHp (actor, x, y, width) {
    width = width || 100;
    const color1 = this.hpGaugeColor1();
    const color2 = this.hpGaugeColor2();
    const textWidth = this.textWidth(TextManager.hpA);
    this.drawGaugeEx(x + textWidth, y, width, 8, actor.hpRate(), color1, color2);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.hpA, x, y, 44);
    this.drawCurrent(actor.hp, x, y, width,
      this.hpColor(actor), this.normalColor());
  }

  drawActorMp (actor, x, y, width) {
    width = width || 100;
    const color1 = this.mpGaugeColor1();
    const color2 = this.mpGaugeColor2();
    const textWidth = this.textWidth(TextManager.hpA);
    this.drawGaugeEx(x + textWidth, y, width, 8, actor.mpRate(), color1, color2);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.mpA, x, y, 44);
    this.drawCurrent(actor.mp, x, y, width,
      this.mpColor(actor), this.normalColor());
  }

  refresh () {
    Window_StatusBase.prototype.refresh.call(this);
    this.contents.clear();
    if (this.isVisuMainMenuCore()) {
      super.refresh();
      return
    }
    if (this._actor) {
      const x = 0;
      let y = 0;
      this.drawBlock1(x, y);
      y = 162 + this.standardPadding();
      this.drawAllParams(x, y);
    }
  }

  drawBlock1 (x, y) {
    const infoY = y - this.standardPadding();
    const infoX = x + 148 + this.standardPadding();
    const lh = this.lineHeight() - 2;
    this.lineHeight() / 2 + 3;
    this.contents.fontSize = this.contents.fontSize - 2;
    this.drawActorName(this._actor, infoX, infoY + lh);
    this.drawActorLevel(this._actor, infoX, infoY + lh * 2);
    this.drawActorClass(this._actor, infoX, infoY + lh * 3);
    this.placeBasicGauges(this._actor, infoX, infoY + lh * 4);
    this.drawActorFace(this._actor, x + 12, y + lh);
    this.resetFontSettings();
  }

  drawAllParams (x, y) {
    for (let i = 0; i < 6; i++) {
      const lineY = this.lineHeight() * (1 + i);
      this.drawItem(0, y + lineY, 2 + i);
    }
  }

  drawRect (rect) {
    const c1 = this.itemBackColor1();
    const c2 = this.itemBackColor2();
    const x = rect.x;
    const y = rect.y;
    const w = rect.width;
    const h = rect.height;
    this.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);
    this.contentsBack.strokeRect(x, y, w, h, c1);
  }

  paramX () {
    if (this.isVisuMainMenuCore() === true) {
      super.paramX();
    } else {
      const itemPadding = this.itemPadding();
      const rightArrowWidth = this.rightArrowWidth();
      const paramWidth = this.paramWidth();
      return (this.innerWidth - 50) - itemPadding - paramWidth * 2 - rightArrowWidth
    }
  }

  drawParamName (x, y, paramId) {
    const width = this.paramX() - this.itemPadding() * 2;
    const rect = new Rectangle(x, y, width, this.lineHeight());
    this.changeTextColor(this.systemColor());
    this.drawRect(rect);
    this.drawText(TextManager.param(paramId), x, y, width / 2);
  }

  drawCurrentParam (x, y, paramId) {
    if (typeof paramId === 'string') {
      paramId = this._actor.getParamByName(paramId);
    }
    const textWidth = this.textWidth('000000');
    const rect = new Rectangle(x, y, textWidth, this.lineHeight());
    const paramWidth = this.paramWidth();
    this.resetTextColor();

    this.drawRect(rect);
    this.drawText(this._actor.param(paramId), x, y, paramWidth, 'right');
  }

  drawNewParam (x, y, paramId) {
    if (this.isVisuMainMenuCore() === false) {
      super.drawNewParam(x, y, paramId);
    }
  }
}

class Game_CustomStat {
  constructor (data) {
    this.name = data.name;
    this.shortName =
      data.shortName !== '' ? data.shortName : data.name.substring(0, 3);
    this.description = data.description;
    this.initialLevel = data.initialLevel;
    this.currentLevel = data.currentLevel || data.initialLevel;
    this.levelPerPoint = data.levelPerPoint || 1;
    // The level before any penalities or perks from notetags(items)
    this.defaultLevel = data.defaultLevel || 0;
    this.maxLevelVariable = data.maxLevelVariable;
    this.maxLevel = this.maxLevelVariable > 0
      ? $gameVariables.value(this.maxLevelVariable)
      : data.maxLevel;
  }

  maxLevelValue () {
    return this.maxLevelVariable > 0
      ? $gameVariables.value(this.maxLevelVariable)
      : this.maxLevel
  }

  addLevel (value = 1) {
    if (this.currentLevel >= this.maxLevel || this.currentLevel + value >= this.maxLevelValue()) {
      return
    }
    this.currentLevel += value;
  }

  removeLevel (value = 1) {
    if (this.currentLevel <= 0 || this.currentLevel - value <= 0) {
      return
    }
    this.currentLevel -= value;
  }

  reset () {
    this.currentLevel = this.initialLevel;
  }
}

class Game_CustomSkill {
  constructor (data) {
    this.skillId = data.skillId;
    this.name = $dataSkills[data.skillId].name;
    this.formulaName = this.name.toLowerCase().replace(' ', '');
    this.description = data.description;
    this.initialLevelFormula = data.initialLevelFormula;
    this.skillPointCost = data.skillPointCost;
    this.levelPerPoint = data.levelPerPoint || 1;
    this.bonusFormula = data.bonusFormula;
    this.initialLevel = data.initialLevel || 1;
    this.currentLevel = data.currentLevel || 1;
    this.pointsAdded = data.pointsAdded || 0;
    this.maxLevelVariable = data.maxLevelVariable;
    this.maxLevel = this.maxLevelVariable > 0
      ? $gameVariables.value(this.maxLevelVariable)
      : data.maxLevel;
  }

  maxLevelValue () {
    return this.maxLevelVariable > 0
      ? $gameVariables.value(this.maxLevelVariable)
      : this.maxLevel
  }

  initLevels (initialLevel) {
    this.initialLevel = initialLevel;
    this.currentLevel = initialLevel;
  }

  addLevel (value) {
    if (this.currentLevel >= this.maxLevel || this.currentLevel + value >= this.maxLevelValue()) {
      return
    }
    this.currentLevel += value;
  }

  removeLevel (value) {
    if (this.currentLevel <= 0 || this.currentLevel - value <= 0) {
      return
    }
    this.currentLevel -= value;
  }

  reset () {
    this.currentLevel = this.initialLevel;
  }
}

class Scene_StatLevel extends Scene_MenuBase {
  constructor () {
    super();
    super.initialize();
    if (!this._actor) {
      this._actor = $gameParty.members()[0];
    }

    this._changedActor = JsonEx.makeDeepCopy(this._actor);
    this._isConfirmActorChange = false;

    this.UIHeight = $dataSystem.advanced.uiAreaHeight - 8;
    this.UIWidth = $dataSystem.advanced.uiAreaWidth - 8;
  }


  start () {
    super.start();
    this._statusWindow.refresh();
  }

  update () {
    super.update();
    if (this._windowStatList.isMainActive) {
      if (Input.isPressed('shift') && Input.isTriggered('right')) {
        this._windowStatList.deselect();
        this._windowStatList.setMainActive(false);
        this._windowSkillList.select(0);
        this._windowSkillList.setMainActive();
      }
    }

    if (this._windowSkillList.isMainActive) {
      if (Input.isPressed('shift') && Input.isTriggered('left')) {
        this._windowSkillList.deselect();
        this._windowSkillList.setMainActive(false);
        this._windowStatList.select(0);
        this._windowStatList.setMainActive();
      }
    }
  }

  createButtonArea () {
  }

  createStatWindow () {
    const titleRect = new Rectangle(
      0,
      this.buttonAreaHeight(),
      415,
      60
    );
    const statListRect = new Rectangle(
      titleRect.x,
      titleRect.y + titleRect.height,
      titleRect.width,
      400
    );
    const titleWindow = new Window_Title(titleRect);
    titleWindow.setTitle('Stats');
    this._windowStatList = new Window_CustomStatList(statListRect);
    this._windowStatList.setDefaultActor(this._actor);
    this._windowStatList.setMainActive();
    this._windowStatList.setActor(this._actor);
    this._windowStatList.activate();
    this._windowStatList.setHandler('ok', this.onStatOk.bind(this));
    this._windowStatList.setHandler('select', this.onStatSelect.bind(this));
    this._windowStatList.setHandler('cancel', this.onSceneCancel.bind(this));
    this._windowStatList.setHandler('pagedown', this.nextActor.bind(this));
    this._windowStatList.setHandler('pageup', this.previousActor.bind(this));
    this.addWindow(titleWindow);
    this.addWindow(this._windowStatList);
  }

  createStatPointsWindow () {
    const rect = new Rectangle(
      this._windowStatList.x,
      this._windowStatList.y + this._windowStatList.height,
      this._windowStatList.width,
      60
    );
    this._statPointsWindow = new Window_SkillPoints(rect);
    this._statPointsWindow.setPoints('Stat Points', this._actor._customStatPoints);
    this.addWindow(this._statPointsWindow);
  }

  createSkillWindow () {
    const titleRect = new Rectangle(
      this._windowStatList.x + this._windowStatList.width,
      this.buttonAreaHeight(),
      415,
      60
    );
    const skillListRect = new Rectangle(
      titleRect.x,
      titleRect.y + titleRect.height,
      titleRect.width,
      400
    );
    const titleWindow = new Window_Title(titleRect);
    titleWindow.setTitle('Skills');
    this._windowSkillList = new Window_CustomSkillList(skillListRect);
    this._windowSkillList.setMainActive(false);
    this._windowSkillList.setDefaultActor(this._actor);
    this._windowSkillList.setActor(this._actor);
    this._windowSkillList.activate();
    this._windowSkillList.setHandler('ok', this.onSkillOk.bind(this));
    this._windowSkillList.setHandler('select', this.onSkillSelect.bind(this));
    this.addWindow(titleWindow);
    this.addWindow(this._windowSkillList);
  }

  createSkillPointsWindow () {
    const rect = new Rectangle(
      this._windowSkillList.x,
      this._windowSkillList.y + this._windowSkillList.height,
      this._windowSkillList.width,
      60
    );
    this._skillPointsWindow = new Window_SkillPoints(rect);
    this._skillPointsWindow.setPoints(
      'Skill Points',
      this._actor._customSkillPoints
    );
    this.addWindow(this._skillPointsWindow);
  }

  helpWindowRect () {
    const ww = this.UIWidth;
    const wh = this.UIHeight - (this.buttonAreaHeight() + this._statusWindow.height);
    const wx = 0;
    const wy = this._statPointsWindow.y + this._statPointsWindow.height;
    return new Rectangle(wx, wy, ww, wh)
  }

  statusWindowRect () {
    const wx = this._windowSkillList.x + this._windowSkillList.width;
    const wy = this.buttonAreaHeight();
    const ww = 425;
    const wh = this._windowSkillList.height + (this._skillPointsWindow.height * 2);
    return new Rectangle(wx, wy, ww, wh)
  }

  createStatusWindow () {
    this._statusWindow = new Window_Status(this.statusWindowRect());
    this._statusWindow.setActor(this._actor);
    this._statusWindow.setTempActor(this._changedActor);
    this.addWindow(this._statusWindow);
  }

  createHelpWindow () {
    const rect = this.helpWindowRect();
    this._helpWindow = new Window_Help(rect);
    this.addWindow(this._helpWindow);
  }

  createConfirmationWindow () {
    const rect = new Rectangle(
      this.UIWidth / 2,
      this.UIHeight / 2,
      this.calcWindowHeight(3, true) * 2,
      this.calcWindowHeight(1, true)
    );
    this._confirmWindow = new Window_Confirmation(rect);
    this._confirmWindow.hide();
    this._confirmWindow.x -= this._confirmWindow.width / 2;
    this._confirmWindow.y -= this._confirmWindow.height / 2;

    this._confirmWindow.setHandler('yes', this.onConfirmOk.bind(this));
    this._confirmWindow.setHandler('no', this.onConfirmNo.bind(this));
    this._confirmWindow.setHandler('cancel', this.onConfirmCancel.bind(this));

    const titleRect = new Rectangle(
      this._confirmWindow.x,
      this._confirmWindow.y - this._confirmWindow.height,
      this._confirmWindow.width,
      60
    );
    this._confirmTitle = new Window_Title(titleRect);
    this._confirmTitle.largeFont = false;
    this._confirmTitle.setTitle('Save Changes?');
    this._confirmTitle.hide();

    this.addWindow(this._confirmTitle);
    this.addWindow(this._confirmWindow);
  }

  create () {
    super.create();
    this.createButtonArea();
    this.createStatWindow();
    this.createStatPointsWindow();
    this.createSkillWindow();
    this.createSkillPointsWindow();
    this.createStatusWindow();
    this.createHelpWindow();
    this.createConfirmationWindow();
  }

  needsPageButtons () {
    return true
  }

  isChangesMade () {
    const hasStatChanges = Object.values(this._changedActor.customStats).some((s, i) => {
      const defaultStat = Object.values(this._actor.customStats)[i];
      return s.currentLevel !== defaultStat.currentLevel
    });

    const hasSkillChanges = this._changedActor.customSkills().some((s, i) => {
      const defaultSkill = this._actor.customSkills()[i];
      return s.currentLevel !== defaultSkill.currentLevel
    });

    return hasStatChanges || hasSkillChanges
  }

  updateActorStats () {
    this._actor._customStatPoints = this._changedActor._customStatPoints;

    for (const key in this._changedActor.customStats) {
      if (Object.hasOwnProperty.call(this._changedActor.customStats, key)) {
        const newStat = this._changedActor.customStats[key];
        const newStatPlus = this._changedActor._customStatsPlus[key];
        this._actor.customStats[key] = new Game_CustomStat(newStat);
        this._actor._customStatsPlus[key] = new Game_CustomStat(newStatPlus);
      }
    }
  }

  updateActorSkills () {
    this._actor._customSkillPoints = this._changedActor._customSkillPoints;

    for (const key in this._changedActor._customSkills) {
      if (Object.hasOwnProperty.call(this._changedActor._customSkills, key)) {
        const newSkill = this._changedActor._customSkills[key];
        this._actor._customSkills[key] = new Game_CustomSkill(newSkill);
      }
    }
  }

  nextActor () {
    if (this.isChangesMade()) {
      this._isConfirmActorChange = true;
      this.onConfirmOpen();
    }
    super.nextActor();
  }

  previousActor () {
    if (this.isChangesMade()) {
      this._isConfirmActorChange = true;
      this.onConfirmOpen();
    }
    super.previousActor();
  }

  updateActor () {
    if (this._confirmCancelled || this._isConfirmActorChange) {
      $gameParty.setMenuActor($gameParty.menuActor());
      return
    }

    super.updateActor();
    this._changedActor = JsonEx.makeDeepCopy(this._actor);
    this._changedActor.fixStatData();
    this._changedActor.fixSkillData();
  }

  onActorChange () {
    if (this._isConfirmActorChange || this._confirmCancelled) {
      return
    }
    super.onActorChange();
    // @TODO change to the changedActor instead of this._actor?
    // it may need to be done to reflect correct changes when making them
    this._windowSkillList.setActor(this._actor);
    this._windowStatList.setActor(this._actor);
    this._windowSkillList.setDefaultActor(this._actor);
    this._windowStatList.setDefaultActor(this._actor);
    this._skillPointsWindow.setPoints(null, this._actor._customSkillPoints);
    this._statPointsWindow.setPoints(null, this._actor._customStatPoints);
    this._statusWindow.setActor(this._actor);
    this._statusWindow.setTempActor(this._changedActor);
    this._windowSkillList.activate();
    this._windowStatList.activate();
  }

  onConfirmOpen () {
    this._confirmCancelled = false;
    this._confirmTitle.show();
    this._confirmTitle.open();
    this._confirmWindow.show();
    this._confirmWindow.open();
    this._confirmWindow.activate();
    this._windowSkillList.deactivate();
    this._windowStatList.deactivate();
  }

  onStatSelect () {
    const item = this._windowStatList.item();
    if (item) {
      this._helpWindow.setText(item.description);
    }
  }

  onSkillSelect () {
    const item = this._windowSkillList.item();
    if (item) {
      if (item.description === '') {
        const skill = $dataSkills[item.skillId];
        this._helpWindow.setText(skill.description);
        return
      }
      this._helpWindow.setText(item.description);
    }
  }

  onStatOk () {
    const actor = this._changedActor;
    const stat = actor.customStats[this._windowStatList.item().shortName];
    const statPlus = actor._customStatsPlus[this._windowStatList.item().shortName];
    const type = this._windowStatList.pressedButton;
    const value = actor.evalCustomFormula(stat.levelPerPoint);

    switch (type) {
      case 'up':
        stat.currentLevel += value;
        actor._customStatPoints--;
        break
      case 'down':
        stat.currentLevel -= value;
        actor._customStatPoints++;
        break
    }

    statPlus.currentLevel = stat.currentLevel;
    actor.refreshEquipBonus(this._windowStatList.item().shortName);
    actor.evaluateSkillStatBonus();
    this._windowStatList.setActor(actor);
    this._windowSkillList.setActor(actor);
    this._windowStatList.reselect();
    this._windowStatList.activate();
    this._statPointsWindow.setPoints(null, actor._customStatPoints);
    this._statusWindow.setTempActor(this._changedActor);
    this._statusWindow.refresh();
  }

  onSkillOk () {
    const index = this._windowSkillList.index();
    const actor = this._changedActor;
    const skill = actor._customSkills[index];
    const value = actor.evalCustomFormula(skill.levelPerPoint);
    const pointCost = actor.evalCustomFormula(skill.skillPointCost);
    const type = this._windowSkillList.pressedButton;

    switch (type) {
      case 'up':
        skill.currentLevel += value;
        skill.pointsAdded += pointCost;
        actor._customSkillPoints -= pointCost;
        break
      case 'down':
        skill.currentLevel -= value;
        // We use the eval after changing level for correct point cost
        skill.pointsAdded -= actor.evalCustomFormula(skill.skillPointCost);
        actor._customSkillPoints += actor.evalCustomFormula(skill.skillPointCost);
        break
    }

    this._windowStatList.setActor(actor);
    this._windowSkillList.setActor(actor);
    this._windowSkillList.reselect();
    this._windowSkillList.activate();
    this._skillPointsWindow.setPoints(null, actor._customSkillPoints);
    this._statusWindow.refresh();
  }

  onSceneCancel () {
    if (this.isChangesMade()) {
      this.onConfirmOpen();
      return
    }
    this.popScene();
  }

  onConfirmOk () {
    this.updateActorSkills();
    this.updateActorStats();
    if (this._isConfirmActorChange) {
      this._isConfirmActorChange = false;
      this.updateActor();
      this.onActorChange();
      this._confirmTitle.close();
      this._confirmWindow.close();
      this._windowSkillList.activate();
      this._windowStatList.activate();
      return
    }
    this.popScene();
  }

  onConfirmNo () {
    if (this._isConfirmActorChange) {
      this._isConfirmActorChange = false;
      this.updateActor();
      this.onActorChange();
      this._confirmTitle.close();
      this._confirmWindow.close();
      this._windowSkillList.activate();
      this._windowStatList.activate();
      this._windowStatList.setMainActive(true);
      return
    }
    this.popScene();
  }

  onConfirmCancel () {
    $gameParty.setMenuActor(this._actor);
    this._confirmCancelled = true;
    this._isConfirmActorChange = false;
    this._confirmWindow.close();
    this._confirmTitle.close();
    this._windowSkillList.activate();
    this._windowStatList.activate();
  }
}

const PluginName = 'LTN_StatAndSkillLevels';
const rawParams = PluginManager.parameters(PluginName);

const Params = convertParameters(rawParams);

const aliasCorrectDataErrors = DataManager.correctDataErrors;
DataManager.correctDataErrors = function () {
  aliasCorrectDataErrors.call(this);
  const members = $gameParty.members();
  for (const member of members) {
    member.fixSkillData();
    member.fixStatData();
  }
};

PluginManager.registerCommand(PluginName, 'OpenScene', () => {
  SceneManager.push(Scene_StatLevel);
});

PluginManager.registerCommand(PluginName, 'AddStatPoint', (args) => {
  const actorId = Number(args.actorId);
  const amount = Number(args.amount);
  const entireParty = JSON.parse(args.entireParty);
  addStatPoints(actorId, amount, entireParty);
});

PluginManager.registerCommand(PluginName, 'AddSkillPoint', (args) => {
  const actorId = Number(args.actorId);
  const amount = Number(args.amount);
  const entireParty = JSON.parse(args.entireParty);
  addSkillPoints(actorId, amount, entireParty);
});

PluginManager.registerCommand(PluginName, 'SkillLevel', (args) => {
  const actorId = Number(args.actorId);
  const amount = Number(args.amount);
  const remove = JSON.parse(args.remove);
  const skillName = $dataSkills[args.skill].name;
  const entireParty = JSON.parse(args.entireParty);
  const asSkillPoint = JSON.parse(args.asSkillPoint);

  if (remove) {
    removeSkillPoints(actorId, skillName, amount);
    return
  }
  addSkillLevel(actorId, args.stat, amount, entireParty, asSkillPoint);
});

PluginManager.registerCommand(PluginName, 'StatLevel', (args) => {
  const actorId = Number(args.actorId);
  const entireParty = JSON.parse(args.entireParty);
  const remove = JSON.parse(args.remove);
  const amount = Number(args.amount);

  if (remove) {
    removeStatLevel(actorId, args.stat, amount, entireParty);
    return
  }
  addStatLevel(actorId, args.stat, amount, entireParty);
});

PluginManager.registerCommand(PluginName, 'Reset', (args) => {
  const actorId = Number(args.actorId);
  const entireParty = JSON.parse(args.entireParty);
  const type = args.type;

  if (type === 'stats') {
    resetStats(actorId, entireParty);
  } else {
    resetSkills(actorId, entireParty);
  }
});


function getActor (actorId) {
  if (!actorId || actorId === 0) {
    return null
  }
  return $gameActors.actor(actorId)
}

function getSkillLevel (actorId, skillName) {
  if (typeof actorId === 'string') {
    skillName = actorId;
    actorId = 1;
  }
  const actor = getActor(actorId);
  if (actor) {
    const skill = actor.getCustomSkill(skillName);
    if (skill) {
      return skill.currentLevel
    }
  }
}

function getStatLevel (actorId, statName) {
  if (typeof actorId === 'string') {
    statName = actorId;
    actorId = 1;
  }
  const actor = getActor(actorId);
  if (actor) {
    const statLevel = actor.getCustomStatLevel(statName);
    if (statLevel) {
      return statLevel
    }
  }
}

function addSkillPoints (actorId, amount, entireParty = false) {
  const actor = getActor(actorId);
  if (entireParty) {
    $gameParty.members().forEach(member => {
      member.addSkillPoints(amount);
    });
    return
  }
  if (actor) {
    return actor.addSkillPoints(amount)
  }
}

function addStatPoints (actorId, amount, entireParty = false) {
  const actor = getActor(actorId);
  if (entireParty) {
    $gameParty.members().forEach(member => {
      member.addStatPoints(amount);
    });
    return
  }
  if (actor) {
    return actor.addStatPoints(amount)
  }
}

function removeSkillPoints (actorId, amount, entireParty = false) {
  const actor = getActor(actorId);
  if (entireParty) {
    $gameParty.members().forEach(member => {
      member.removeSkillPoints(amount);
    });
    return
  }
  if (actor) {
    return actor.removeSkillPoints(amount)
  }
}

function removeStatPoints (actorId, amount, entireParty = false) {
  const actor = getActor(actorId);
  if (entireParty) {
    $gameParty.members().forEach(member => {
      member.removeStatPoints(amount);
    });
    return
  }
  if (actor) {
    return actor.removeStatPoints(amount)
  }
}

function resetStats (actorId, entireParty) {
  const actor = getActor(actorId);

  if (entireParty) {
    $gameParty.members().forEach(member => {
      const allStatKeys = Object.keys(member.customStats);
      allStatKeys.forEach(statName => {
        const stat = member.customStats[statName];
        const statPlus = member.getCustomStatPlus(statName);
        const amount = stat.currentLevel;
        stat.reset();
        statPlus.reset();
        member.refreshEquipBonus(statName);
        member.addStatPoints(amount);
        member.evaluateSkillStatBonus();
      });
    });
    return
  }

  if (actor) {
    const allStatKeys = Object.keys(actor.customStats);
    allStatKeys.forEach(statName => {
      const stat = actor.getCustomStat(statName);
      const amount = stat.currentLevel;
      stat.reset();
      actor.addStatPoints(amount);
      actor.evaluateSkillStatBonus();
    });
  }
}

function resetSkills (actorId, entireParty) {
  const actor = getActor(actorId);

  if (entireParty) {
    $gameParty.members().forEach(member => {
      const allSkills = member.customSkills();
      allSkills.forEach(skill => {
        const amount = skill.currentLevel;
        skill.reset();
        member.addSkillPoints(amount);
      });
    });
    return
  }

  if (actor) {
    const allSkills = actor.getCustomSkills();
    allSkills.forEach(skill => {
      const amount = skill.currentLevel;
      skill.reset();
      actor.addSkillPoints(amount);
    });
  }
}

function addSkillLevel (actorId, skillName, amount = 1, entireParty = false, asSkillPoint) {
  const actor = getActor(actorId);

  if (entireParty) {
    $gameParty.members().forEach(member => {
      for (let i = 0; i < amount; i++) {
        member.addSkillLevel(skillName, asSkillPoint);
      }
    });
    return
  }

  if (!actor) { return }
  for (let i = 0; i < amount; i++) {
    actor.addSkillLevel(skillName, asSkillPoint);
  }
}

function removeSkillLevel (actorId, skillName, amount = 1, entireParty = false, asSkillPoint) {
  const actor = getActor(actorId);

  if (entireParty) {
    $gameParty.members().forEach(member => {
      for (let i = 0; i < amount; i++) {
        actor.removeSkillLevel(skillName, asSkillPoint);
      }
    });
    return
  }

  if (!actor) { return }
  for (let i = 0; i < amount; i++) {
    actor.removeSkillLevel(skillName, asSkillPoint);
  }
}

function addStatLevel (actorId, statName, amount = 1, entireParty = false) {
  const actor = getActor(actorId);

  if (entireParty) {
    $gameParty.members().forEach(member => {
      const stat = member.customStats[statName];
      stat.addLevel(amount);
    });
    return
  }

  if (!actor) { return }

  const stat = actor.customStats[statName];
  stat.addLevel(amount);
}

function removeStatLevel (actorId, statName, amount = 1, entireParty = false) {
  const actor = getActor(actorId);

  if (entireParty) {
    $gameParty.members().forEach(member => {
      if (member._customStatPoints >= amount) {
        const stat = member.customStats[statName];
        stat.removeLevel(amount);
      }
    });
    return
  }

  if (!actor) { return }

  if (actor._customStatPoints >= amount) {
    const stat = actor.customStats[statName];
    stat.removeLevel(amount);
  }
}

function isLearnedCustomSkill (actorId, skillId) {
  const actor = getActor(actorId);
  actor.isLearnedCustomSkill(skillId);
}

function evaluateSkillStatBonus (actorId, entireParty = false) {
  const actor = getActor(actorId);

  if (entireParty) {
    $gameParty.members().forEach(member => {
      member.evaluateSkillStatBonus();
    });
  }

  if (actor) {
    actor.evaluateSkillStatBonus();
  }
}

if (Params.menuCommand.add) {
  const aliasCreateCommandWindow = Scene_Menu.prototype.createCommandWindow;
  Scene_Menu.prototype.createCommandWindow = function () {
    aliasCreateCommandWindow.call(this);
    this._commandWindow.setHandler('statlevels', this.commandStatAndSkills.bind(this));
  };

  Scene_Menu.prototype.commandStatAndSkills = function () {
    SceneManager.push(Scene_StatLevel);
  };

  const aliasCommands = Window_MenuCommand.prototype.addOriginalCommands;
  Window_MenuCommand.prototype.addOriginalCommands = function () {
    aliasCommands.call(this);
    // eslint-disable-next-line no-eval
    const isEnabled = () => eval(Params.menuCommand.enable);
    this.addCommand(Params.menuCommand.name, 'statlevels', isEnabled());
  };
}

const aliasInitMembers$1 = Game_BattlerBase.prototype.initMembers;
Game_BattlerBase.prototype.initMembers = function () {
  aliasInitMembers$1.call(this);
  this.customStats = {};

  // Defaults stats with bonuses from equipment factored in
  this._customStatsPlus = {};

  Params.customStats.forEach((stat) => {
    const customStat = new Game_CustomStat(stat);
    const propName = customStat.shortName.toLowerCase();
    this.customStats[propName] = customStat;
    this._customStatsPlus[propName] = new Game_CustomStat(stat);

    // Define properties so we can use them in formulas
    const paramExists = propName in this;
    if (!paramExists) {
      Object.defineProperty(Game_BattlerBase.prototype, propName, {
        get () {
          return this.getCustomStatLevel(propName)
        },
        configurable: false
      });
    }
  });
};

Game_BattlerBase.prototype.customStatLevels = function (levelDown = false) {
  const statLevels = {};
  for (const stat of Object.keys(this.customStats)) {
    const customStat = this.customStats[stat];
    if (levelDown) {
      statLevels[customStat.shortName] = customStat.currentLevel - 1;
    } else {
      statLevels[customStat.shortName] = customStat.currentLevel;
    }
  }

  return statLevels
};

Game_BattlerBase.prototype.getCustomStatLevel = function (statName) {
  return this.customStatLevels()[statName]
};

/**
 * So we can use custom stat values rather than the default MZ values of params
 * like agility and luck.
 */
const aliasParam = Game_BattlerBase.prototype.param;
Game_BattlerBase.prototype.param = function (paramId) {
  const statOverride = Params.forceDefaultParams.find(p => p.defaultParamId === paramId);
  const isGameEnemy = this instanceof Game_Enemy;
  const ignoreBattleTest = Params.battleTestIgnore && DataManager.isBattleTest() === true;

  if (statOverride && isGameEnemy === false && ignoreBattleTest === false) {
    const customStat = this._customStatsPlus[statOverride.value];
    const value = customStat.currentLevel * this.paramRate(paramId) * this.paramBuffRate(paramId);
    const maxValue = customStat.maxLevel;
    const minValue = 0;
    return Math.round(value.clamp(minValue, maxValue))
  }

  return aliasParam.call(this, paramId)
};

Game_BattlerBase.prototype.getParamByName = function (name) {
  const params = ['mhp', 'mmp', 'atk', 'def', 'mat', 'mdf', 'agi', 'luk'];
  return params.indexOf(name.toLowerCase())
};

function forItemMeta (item, callback) {
  if (item && Object.keys(item.meta).length > 0) {
    const metaKeys = Object.keys(item.meta);
    metaKeys.forEach((key, index) => {
      const value = item.meta[key];
      callback(value, key, index);
    });
  }
}

const aliasInitMembers = Game_Actor.prototype.initMembers;
Game_Actor.prototype.initMembers = function () {
  aliasInitMembers.call(this);
  this._customSkills = [];
  this._customSkillPoints = 0;
  this._customStatPoints = 0;
  // For use in formulas
  const exists = 'cs' in this;
  if (!exists) {
    Object.defineProperty(Game_Actor.prototype, 'cs', {
      get () {
        return this.customSkillLevels()
      },

      configurable: false
    });
  }
  this._statPointLevelFormula = Params.statPointLevelFormula;
  this._skillPointLevelFormula = Params.skillPointLevelFormula;
};

const aliasSetup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function (actorId) {
  if (Params.autoLearnCustomSkills) {
    Params.customSkills.forEach(skill => {
      const customSkill = new Game_CustomSkill(skill);
      customSkill.initLevels(
        this.evalCustomFormula(customSkill.initialLevelFormula)
      );
      this._customSkills.push(customSkill);
      this._customSkills.sort((a, b) => a - b);
    });
  }
  aliasSetup.call(this, actorId);
  this._equips.forEach((equip) => {
    const item = equip.object();
    this.applyItemStatNotetag(item);
  });
  this.evaluateSkillStatBonus();
};

Game_Actor.prototype.getCustomSkill = function (name) {
  return this._customSkills.find(skill => {
    return skill.name.toLowerCase() === name.toLowerCase()
  })
};

Game_Actor.prototype.getCustomSkillLevel = function (name) {
  const skill = this.getCustomSkill(name);
  if (skill) {
    return skill.currentLevel
  }
  console.warning(`Unable to find a skill with name "${name}"`);
};

Game_Actor.prototype.getCustomStatPlus = function (shortName) {
  return this._customStatsPlus[shortName]
};

Game_Actor.prototype.addStatPoints = function (value) {
  this._customStatPoints += value;
};

Game_Actor.prototype.removeStatPoints = function (value) {
  this._customStatPoints -= value;
};

Game_Actor.prototype.addSkillPoints = function (value) {
  this._customSkillPoints += value;
};

Game_Actor.prototype.removeSkillPoints = function (value) {
  this._customSkillPoints -= value;
};

Game_Actor.prototype.addSkillLevel = function (skillName, asSkillPoint = false) {
  const skill = this.getCustomSkill(skillName);
  const pointCost = this.evalCustomFormula(skill.skillPointCost);
  const value = this.evalCustomFormula(skill.levelPerPoint);
  const nextLevel = skill.currentLevel + value;
  const points = this._customSkillPoints;

  if (!skill || points <= 0 || points <= pointCost || nextLevel >= skill.maxLevel) {
    return
  }

  if (asSkillPoint) {
    skill.addLevel(value);
    skill.pointsAdded += pointCost;
    this.removeSkillPoints(pointCost);
  } else {
    skill.currentLevel += 1;
  }
};

Game_Actor.prototype.removeSkillLevel = function (skillName, asSkillPoint = false) {
  const skill = this.getCustomSkill(skillName);
  const pointCost = this.evalCustomFormula(skill.skillPointCost);
  const value = this.evalCustomFormula(skill.levelPerPoint);
  const level = skill.currentLevel;
  const prevLevel = level - value;
  const points = this._customSkillPoints;

  if (!skill || (points <= 0 || prevLevel <= skill.initialLevel)) {
    return
  }
  if (asSkillPoint) {
    skill.removeLevel(value);
    skill.pointsAdded -= pointCost;
    this.addSkillPoints(pointCost);
  } else {
    skill.currentLevel -= 1;
  }
};

Game_Actor.prototype.evaluateSkillStatBonus = function () {
  this._customSkills.forEach(skill => {
    const initialLevel = skill.initialLevel;
    const difference = skill.currentLevel - initialLevel;
    const newInitialLevel = this.evalCustomFormula(skill.initialLevelFormula);
    const newLevel = difference + newInitialLevel;

    skill.initialLevel = newInitialLevel;
    skill.currentLevel = newLevel;
  });
};

Game_Actor.prototype.customSkillLevels = function () {
  const skillLevels = {};
  this._customSkills.forEach(skill => {
    skillLevels[skill.formulaName] = skill.currentLevel;
  });

  return skillLevels
};

Game_Actor.prototype.customDownSkillLevels = function () {
  const skillLevels = {};
  this._customSkills.forEach(skill => {
    skillLevels[skill.formulaName] = skill.currentLevel;
  });

  return skillLevels
};

Game_Actor.prototype.customSkills = function () {
  return this._customSkills
};

Game_Actor.prototype.isLearnedCustomSkill = function (skillId) {
  return this._customSkills.some((cs) => cs.skillId === skillId)
};

const aliasLearnSkill = Game_Actor.prototype.learnSkill;
Game_Actor.prototype.learnSkill = function (skillId) {
  if (!this.isLearnedCustomSkill(skillId)) {
    const customSkillData = Params.customSkills.find(
      (skill) => skillId === skill.skillId
    );

    if (customSkillData) {
      const customSkill = new Game_CustomSkill(customSkillData);
      customSkill.initLevels(
        this.evalCustomFormula(customSkill.initialLevelFormula)
      );
      this._customSkills.push(customSkill);
      this._customSkills.sort((a, b) => a - b);
      return
    }
  }
  aliasLearnSkill.call(this, skillId);
};

Game_Actor.prototype.applyItemStatNotetag = function (item, reverse) {
  forItemMeta(item, (value, key) => {
    if (this.customStats[key]) {
      const stat = this.customStats[key];
      const statPlus = this._customStatsPlus[key];
      const args = value.trim().split(' ');
      let operation = args[0];
      const amount = Number(args[1]);

      if (reverse) {
        operation = operation === 'add' ? 'remove' : 'add';
      }

      switch (operation) {
        case 'add':
          if (reverse && stat.currentLevel > 1) {
            statPlus.currentLevel = statPlus.currentLevel + amount;
          } else {
            statPlus.currentLevel += amount;
          }
          break

        case 'remove':
          statPlus.currentLevel -= amount;
          break

        default:
          console.log('Unknown argument');
          break
      }
      // this.refreshEquipBonus(statPlus.shortName)
    }
  });
};

Game_Actor.prototype.evalCustomFormula = function (formula) {
  try {
    /* eslint-disable no-unused-vars, no-eval */
    if (isNaN(formula) === false) {
      return Number(formula)
    }
    const a = this;
    const isLevelDown = formula.includes('_leveldown_');
    const stat = isLevelDown ? a.customStatLevels(true) : a.customStatLevels();
    const skill = a.cs;
    const v = $gameVariables._data;
    const newFormula = formula.replace('_leveldown_', '');
    const value = Math.max(eval(newFormula), 0);
    return isNaN(value) ? 0 : value
  } catch (e) {
    return 0
  }
};

// @todo find out why I made this function to begin with xD
Game_Actor.prototype.refreshEquipBonus = function (statShortName) {
  this._equips.forEach(equip => {
    const item = equip.object();
    forItemMeta(item, (value, key) => {
      if (key !== statShortName) {
        return
      }
      const statPlus = this._customStatsPlus[key];
      const currentLevel = statPlus.currentLevel;
      const args = value.trim().split(' ');
      const operation = args[0];
      const amount = Number(args[1]);
      statPlus.currentLevel = operation === 'add' ? currentLevel + amount : currentLevel - amount;
    });
  });
};

const aliasForceChangeEquip = Game_Actor.prototype.forceChangeEquip;
Game_Actor.prototype.forceChangeEquip = function (slotId, item) {
  const oldItem = this.equips()[slotId];
  if (oldItem) {
    this.applyItemStatNotetag(oldItem, true);
  }
  this.applyItemStatNotetag(item);
  aliasForceChangeEquip.call(this, slotId, item);
};

const aliasChangeEquip = Game_Actor.prototype.changeEquip;
Game_Actor.prototype.changeEquip = function (slotId, item) {
  const oldItem = this.equips()[slotId];
  if (oldItem) {
    this.applyItemStatNotetag(oldItem, true);
  }
  this.applyItemStatNotetag(item);
  aliasChangeEquip.call(this, slotId, item);
};

const aliasDiscardEquip = Game_Actor.prototype.discardEquip;
Game_Actor.prototype.discardEquip = function (item) {
  const slotId = this.equips().indexOf(item);
  if (slotId >= 0) {
    this.applyItemStatNotetag(item, true);
  }
  aliasDiscardEquip.call(this, item);
};

const aliasLevelUp = Game_Actor.prototype.levelUp;
Game_Actor.prototype.levelUp = function () {
  this._customSkillPoints += this.evalCustomFormula(this._skillPointLevelFormula);
  this._customStatPoints += this.evalCustomFormula(this._statPointLevelFormula);
  aliasLevelUp.call(this);
};

Game_Actor.prototype.fixSkillData = function () {
  const skills = this._customSkills;
  skills.forEach((skill, index) => {
    this._customSkills[index] = new Game_CustomSkill(skill);
  });
};

Game_Actor.prototype.fixStatData = function () {
  const statKeys = Object.keys(this.customStats);
  statKeys.forEach(key => {
    const stat = this.customStats[key];
    const statPlus = this._customStatsPlus[key];
    this.customStats[key] = new Game_CustomStat(stat);
    this._customStatsPlus[key] = new Game_CustomStat(statPlus);
  });
};

/* eslint-disable no-unreachable */
/* globals ColorManager */

Window_Base.prototype.standardPadding = function () {
  return $gameSystem.windowPadding()
};

Window_Base.prototype.itemBackColor1 = function () {
  return ColorManager.itemBackColor1()
};

Window_Base.prototype.itemBackColor2 = function () {
  return ColorManager.itemBackColor1()
};

Window_Base.prototype.systemColor;
Window_Base.prototype.systemColor = function () {
  return ColorManager.systemColor()
};

exports.Scene = Scene_StatLevel;
exports.addSkillLevel = addSkillLevel;
exports.addSkillPoints = addSkillPoints;
exports.addStatLevel = addStatLevel;
exports.addStatPoints = addStatPoints;
exports.evaluateSkillStatBonus = evaluateSkillStatBonus;
exports.getSkillLevel = getSkillLevel;
exports.getStatLevel = getStatLevel;
exports.isLearnedCustomSkill = isLearnedCustomSkill;
exports.removeSkillLevel = removeSkillLevel;
exports.removeSkillPoints = removeSkillPoints;
exports.removeStatLevel = removeStatLevel;
exports.removeStatPoints = removeStatPoints;
exports.resetSkills = resetSkills;
exports.resetStats = resetStats;

Object.defineProperty(exports, '__esModule', { value: true });

return exports;

})({});
