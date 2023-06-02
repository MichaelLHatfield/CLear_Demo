//=============================================================================
// VisuStella MZ - Elements & Status Menu Core
// VisuMZ_1_ElementStatusCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_ElementStatusCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ElementStatusCore = VisuMZ.ElementStatusCore || {};
VisuMZ.ElementStatusCore.version = 1.17;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.17] [ElementStatusCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Elements_and_Status_Menu_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Elements & Status Menu Core plugin gives you more control over in-game
 * elemental rate calculations, providing Trait Sets to streamline assigning
 * elements to actors and enemies, and updating the Status Menu to display all
 * that information properly.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Element Rate control from target side and user side.
 * * Elemental Absorption and Elemental Reflection added.
 * * Assign items and skills to have multiple elements.
 * * Elemental rates can be adjusted from additive and multiplicative notetags.
 * * Forcing Elemental Rates and nullifying Elemental properties.
 * * Trait Sets added to mass assign traits through the usage of notetags.
 * * Trait Sets used to assign Elements, SubElements, Genders, Races, Natures,
 *   Alignments, Blessings, Curses, Zodiacs, and Variants.
 * * Randomized Trait Sets with weights to make enemies more dynamic.
 * * The ability to change traits midway through the game by Plugin Commands.
 * * Updated Status Menu Layout to display all this new information.
 * * Control over the information category tabs in the Status Menu.
 * * Change up the actor's Biography midway through the game by Plugin Command.
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
 * Element Damage Calculation
 *
 * - Elemental damage was calculated in one very specific way in RPG Maker MZ:
 * getting the target's elemental resistance found across various database
 * objects and applying the damage to that rate. This plugin extends that by
 * giving more ways to extend the target's elemental damage rate as add in a
 * facet which introduces the attacker's elemental bonus damage, too.
 *
 * ---
 *
 * Multi-Elemental Calculation
 *
 * - By default in RPG Maker MZ, if there are multiple elements assigned to an
 * action, then the element with the highest rate is taken. This plugin will
 * give you, the game dev, the decision on how this is handled: the default
 * maximum rate, a minimum rate, a multiplicative product, an additive sum, or
 * an average of all the elemental rates calculated.
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
 * === Element-Related Notetags ===
 *
 * The following are element-related notetags.
 *
 * ---
 *
 * <Multi-Element: x>
 * <Multi-Element: x,x,x>
 *
 * <Multi-Element: name>
 * <Multi-Element: name, name, name>
 *
 * - Used for: Skill, Item Notetags
 * - Gives this action an additional element (alongside the Damage element)
 *   when calculating damage.
 * - Replace 'x' with the ID of the element from Database > Types.
 * - For 'name' notetag variant, replace 'name' with the element's name.
 *   Remove any \I[x] in the 'name' replacement.
 * - Insert multiples of this notetag to allow unit to assign more elements.
 *
 * ---
 *
 * <Multi-Element Rule: Maximum>
 * <Multi-Element Rule: Minimum>
 * <Multi-Element Rule: Multiply>
 * <Multi-Element Rule: Additive>
 * <Multi-Element Rule: Average>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the multi-element ruling for this action to either 'Maximum',
 *   'Minimum', 'Multiply', 'Additive', or 'Average'.
 * - If this notetag is not used, refer to the default ruling set by the
 *   Plugin Parameters.
 *
 * ---
 *
 * <Force Action Element: Null>
 *
 * <Force Action Element: x>
 * <Force Action Element: x,x,x>
 *
 * <Force Action Element: name>
 * <Force Action Element: name, name, name>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Forces any actions performed by this unit to be the specific element(s).
 * - Replace 'x' with the ID of the element from Database > Types.
 * - For 'name' notetag variant, replace 'name' with the element's name.
 *   Remove any \I[x] in the 'name' replacement.
 * - If multiples of this notetag are found across various Database objects,
 *   priority will go in the order of states, actor, enemy, class, equips.
 *
 * ---
 *
 * <Force Received Element id Rate: x%>
 * <Force Received Element id Rate: x.x>
 *
 * <Force Received Element name Rate: x%>
 * <Force Received Element name Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Forces the unit to receive elemental damage at x multiplier.
 * - Replace 'id' with the ID of the element.
 * - For 'name' notetag variant, replace 'name' with the element's name.
 *   Remove any \I[x] in the 'name' replacement.
 * - Insert multiples of this notetag to allow unit to assign more elements.
 *
 * ---
 *
 * <Received Element id Plus: +x%>
 * <Received Element id Plus: +x.x>
 *
 * <Received Element name Plus: +x%>
 * <Received Element name Plus: +x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Alters the received elemental damage additively before applying rates and
 *   flat bonuses.
 * - Replace 'id' with the ID of the element.
 * - For 'name' notetag variant, replace 'name' with the element's name.
 *   Remove any \I[x] in the 'name' replacement.
 * - Insert multiples of this notetag to allow unit to assign more elements.
 * - Formula works as follows: (base + plus) * rate + flat
 * - Formula may vary if changed up in the Plugin Parameters.
 * - This does not add on flat bonus damages after calculating elemental rates.
 *   This merely adds onto it at the end after applying rates if the formula
 *   from above is unchanged.
 *
 * ---
 *
 * <Received Element id Rate: x%>
 * <Received Element id Rate: x.x>
 *
 * <Received Element name Rate: x%>
 * <Received Element name Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Alters the received elemental damage multiplicatively after applying plus
 *   and before applying flat bonuses.
 * - Replace 'id' with the ID of the element.
 * - For 'name' notetag variant, replace 'name' with the element's name.
 *   Remove any \I[x] in the 'name' replacement.
 * - Insert multiples of this notetag to allow unit to assign more elements.
 * - Formula works as follows: (base + plus) * rate + flat
 * - Formula may vary if changed up in the Plugin Parameters.
 *
 * ---
 *
 * <Received Element id Flat: +x%>
 * <Received Element id Flat: +x.x>
 *
 * <Received Element name Flat: +x%>
 * <Received Element name Flat: +x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Alters the received elemental damage additively after applying rates and
 *   plus bonuses.
 * - Replace 'id' with the ID of the element.
 * - For 'name' notetag variant, replace 'name' with the element's name.
 *   Remove any \I[x] in the 'name' replacement.
 * - Insert multiples of this notetag to allow unit to assign more elements.
 * - Formula works as follows: (base + plus) * rate + flat
 * - Formula may vary if changed up in the Plugin Parameters.
 * - This does not add on flat bonus damages after calculating elemental rates.
 *   This merely adds onto it at the end after applying rates if the formula
 *   from above is unchanged.
 *
 * ---
 *
 * <Dealt Element id Plus: +x%>
 * <Dealt Element id Plus: +x.x>
 *
 * <Dealt Element name Plus: +x%>
 * <Dealt Element name Plus: +x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Alters the dealt elemental damage additively before applying rates and
 *   flat bonuses.
 * - Replace 'id' with the ID of the element.
 * - For 'name' notetag variant, replace 'name' with the element's name.
 *   Remove any \I[x] in the 'name' replacement.
 * - Insert multiples of this notetag to allow unit to assign more elements.
 * - Formula works as follows: (base + plus) * rate + flat
 * - Formula may vary if changed up in the Plugin Parameters.
 * - This does not add on flat bonus damages after calculating elemental rates.
 *   This merely adds onto it at the end after applying rates if the formula
 *   from above is unchanged.
 *
 * ---
 *
 * <Dealt Element id Rate: x%>
 * <Dealt Element id Rate: x.x>
 *
 * <Dealt Element name Rate: x%>
 * <Dealt Element name Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Alters the dealt elemental damage multiplicatively after applying plus and
 *   before applying flat bonuses.
 * - Replace 'id' with the ID of the element.
 * - For 'name' notetag variant, replace 'name' with the element's name.
 *   Remove any \I[x] in the 'name' replacement.
 * - Insert multiples of this notetag to allow unit to assign more elements.
 * - Formula works as follows: (base + plus) * rate + flat
 * - Formula may vary if changed up in the Plugin Parameters.
 *
 * ---
 *
 * <Dealt Element id Flat: +x%>
 * <Dealt Element id Flat: +x.x>
 *
 * <Dealt Element name Flat: +x%>
 * <Dealt Element name Flat: +x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Alters the dealt elemental damage additively after applying rates and
 *   plus bonuses.
 * - Replace 'id' with the ID of the element.
 * - For 'name' notetag variant, replace 'name' with the element's name.
 *   Remove any \I[x] in the 'name' replacement.
 * - Insert multiples of this notetag to allow unit to assign more elements.
 * - Formula works as follows: (base + plus) * rate + flat
 * - Formula may vary if changed up in the Plugin Parameters.
 * - This does not add on flat bonus damages after calculating elemental rates.
 *   This merely adds onto it at the end after applying rates if the formula
 *   from above is unchanged.
 *
 * ---
 *
 * <Element Absorb: x>
 * <Element Absorb: x,x,x>
 *
 * <Element Absorb: name>
 * <Element Absorb: name, name, name>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Gives the unit the ability to absorb damage from element.
 * - Replace 'x' with the ID of the element from Database > Types.
 * - For 'name' notetag variant, replace 'name' with the element's name.
 *   Remove any \I[x] in the 'name' replacement.
 * - Insert multiples of this notetag to allow unit to absorb more elements.
 * - Absorption is calculated after all other element rates have been made.
 *
 * ---
 *
 * <Element Reflect: x>
 * <Element Reflect: x,x,x>
 *
 * <Element Reflect: name>
 * <Element Reflect: name, name, name>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Gives the unit the ability to reflect damage from element.
 * - Replace 'x' with the ID of the element from Database > Types.
 * - For 'name' notetag variant, replace 'name' with the element's name.
 *   Remove any \I[x] in the 'name' replacement.
 * - Insert multiples of this notetag to allow unit to reflect more elements.
 * - Reflection occurs before any damage is calculated and dealt.
 * - Elemental Reflection will take priority over Magic Reflection.
 *
 * ---
 *
 * <Bypass Element Reflect>
 *
 * - Used for: Skill, Item Notetags
 * - Makes this skill/item unable to be reflected by Element Reflect effect.
 *
 * ---
 *
 * === JavaScript Notetags: Element-Related ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine dynamic element-related effects.
 *
 * ---
 *
 * <JS Force Received Element id Rate: code>
 * <JS Force Received Element name Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Forces the unit to receive elemental damage at a code-determined rate.
 * - Replace 'id' with the ID of the element.
 * - For 'name' notetag variant, replace 'name' with the element's name.
 * - Replace 'code' with JavaScript code to determine the change.
 * - Insert multiples of this notetag to allow unit to assign more elements.
 *
 * ---
 *
 * <JS Received Element id Plus: code>
 * <JS Received Element name Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Alters the received elemental damage additively before applying rates and
 *   flat bonuses.
 * - Replace 'id' with the ID of the element.
 * - For 'name' notetag variant, replace 'name' with the element's name.
 * - Replace 'code' with JavaScript code to determine the change.
 * - Insert multiples of this notetag to allow unit to assign more elements.
 *
 * ---
 *
 * <JS Received Element id Rate: code>
 * <JS Received Element name Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Alters the received elemental damage additively after applying plus and
 *   before applying flat bonuses.
 * - Replace 'id' with the ID of the element.
 * - For 'name' notetag variant, replace 'name' with the element's name.
 * - Replace 'code' with JavaScript code to determine the change.
 * - Insert multiples of this notetag to allow unit to assign more elements.
 *
 * ---
 *
 * <JS Received Element id Flat: code>
 * <JS Received Element name Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Alters the received elemental damage additively after applying rates and
 *   plus bonuses.
 * - Replace 'id' with the ID of the element.
 * - For 'name' notetag variant, replace 'name' with the element's name.
 * - Replace 'code' with JavaScript code to determine the change.
 * - Insert multiples of this notetag to allow unit to assign more elements.
 *
 * ---
 *
 * <JS Dealt Element id Plus: code>
 * <JS Dealt Element name Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Alters the dealt elemental damage additively before applying rates and
 *   flat bonuses.
 * - Replace 'id' with the ID of the element.
 * - For 'name' notetag variant, replace 'name' with the element's name.
 * - Replace 'code' with JavaScript code to determine the change.
 * - Insert multiples of this notetag to allow unit to assign more elements.
 *
 * ---
 *
 * <JS Dealt Element id Rate: code>
 * <JS Dealt Element name Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Alters the dealt elemental damage additively after applying plus and
 *   before applying flat bonuses.
 * - Replace 'id' with the ID of the element.
 * - For 'name' notetag variant, replace 'name' with the element's name.
 * - Replace 'code' with JavaScript code to determine the change.
 * - Insert multiples of this notetag to allow unit to assign more elements.
 *
 * ---
 *
 * <JS Dealt Element id Flat: code>
 * <JS Dealt Element name Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Alters the dealt elemental damage additively after applying rates and
 *   plus bonuses.
 * - Replace 'id' with the ID of the element.
 * - For 'name' notetag variant, replace 'name' with the element's name.
 * - Replace 'code' with JavaScript code to determine the change.
 * - Insert multiples of this notetag to allow unit to assign more elements.
 *
 * ---
 *
 * === Trait Set Notetags ===
 *
 * Trait Sets are used to apply various properties to actor and enemy units as
 * a whole depending on what the trait set is. Use the following notetags to
 * determine how to properly assign the desired Trait Set.
 *
 * WARNING: Trait Sets only work if they are enabled in the Plugin Parameters:
 * ElementStatusCore => General Trait Set Settings => Enable Trait Sets?
 *
 * ---
 *
 * <Element: name>
 * <SubElement: name>
 * <Gender: name>
 * <Race: name>
 * <Nature: name>
 * <Alignment: name>
 * <Blessing: name>
 * <Curse: name>
 * <Zodiac: name>
 * <Variant: name>
 *
 * - Used for: Actor, Enemy Notetags
 * - Determines the specific Trait Set(s) for the actor or enemy unit.
 * - Replace 'name' with the name of an associated Trait Set type found in the
 *   Plugin Parameters.
 * - If any of these notetags are unused, the Trait Set will default to the one
 *   determined in the Plugin Parameters.
 *
 * Examples:
 *
 * <Element: Fire>
 * <SubElement: Thunder>
 * <Gender: Male>
 * <Nature: Jolly>
 * <Alignment: Chaotic Good>
 * <Zodiac: Aries>
 *
 * ---
 *
 * <Trait Sets>
 *  Element:    name
 *  SubElement: name
 *  Gender:     name
 *  Race:       name
 *  Nature:     name
 *  Alignment:  name
 *  Blessing:   name
 *  Curse:      name
 *  Zodiac:     name
 *  Variant:    name
 * </Trait Sets>
 *
 * - Used for: Actor, Enemy Notetags
 * - Determines the Trait Set(s) for the actor or enemy unit.
 * - Replace 'name' with the name of an associated Trait Set type found in the
 *   Plugin Parameters.
 * - You may remove the Trait Set types (ie. Blessing and Curse) that you don't
 *   want to assign anything to from the list.
 * - If any of these sets are unused, the Trait Set will default to the one
 *   determined in the Plugin Parameters.
 *
 * Example:
 *
 * <Trait Sets>
 *  Element:    Fire
 *  SubElement: Thunder
 *  Gender:     Male
 *  Nature:     Jolly
 *  Alignment:  Chaotic Good
 *  Zodiac:     Aries
 * </Trait Sets>
 *
 * ---
 *
 * <Random type>
 *  name: weight
 *  name: weight
 *  name: weight
 * </Random type>
 *
 * - Used for: Actor, Enemy Notetags
 * - Assigns a random Trait Set for this Trait Set 'type'.
 * - Replace 'type' with 'Element', 'SubElement', 'Gender', 'Race', 'Nature',
 *   'Alignment', 'Blessing', 'Curse', 'Zodiac', or 'Variant' depending on
 *   which you're trying to randomize.
 * - Replace 'name' with the name of an associated Trait Set type found in the
 *   Plugin Parameters.
 * - Replace 'weight' with a number value representing how often the 'name'
 *   would come up. The higher the weight, the more often. You may omit this
 *   and the colon(:) and just type in the 'name' instead.
 * - This would bypass the innate settings determined in the Plugin Parameters.
 *
 * Examples:
 *
 * <Random Gender>
 *  Male: 75
 *  Female: 25
 * </Random Gender>
 * 
 * <Random Variant>
 *  Mighty: 10
 *  Major: 20
 *  Greater: 60
 *  Normal: 200
 *  Lesser: 10
 *  Minor
 *  Puny
 * </Random Variant>
 *
 * ---
 *
 * <No Random Trait Sets>
 *
 * - Used for: Actor, Enemy Notetags
 * - Prevents random Trait Sets from being assigned to this actor/enemy unit.
 *
 * ---
 *
 * <Trait Set Name Format>
 *  text
 * </Trait Set Name Format>
 *
 * - Used for: Enemy Notetags
 * - Enemy names can be affected by the Trait Sets they have. Replace 'text'
 *   with the format you wish to see them have.
 * - Insert [Name] into 'text' to determine where the enemy's name goes.
 * - Insert [Letter] into 'text' to determine where the enemy's letter goes.
 * - Insert [Element] into 'text' to determine where the format text goes.
 * - Insert [SubElement] into 'text' to determine where the format text goes.
 * - Insert [Gender] into 'text' to determine where the format text goes.
 * - Insert [Race] into 'text' to determine where the format text goes.
 * - Insert [Nature] into 'text' to determine where the format text goes.
 * - Insert [Alignment] into 'text' to determine where the format text goes.
 * - Insert [Blessing] into 'text' to determine where the format text goes.
 * - Insert [Curse] into 'text' to determine where the format text goes.
 * - Insert [Zodiac] into 'text' to determine where the format text goes.
 * - Insert [Variant] into 'text' to determine where the format text goes.
 * 
 * Example:
 *
 * <Trait Set Name Format>
 *  [Alignment] [Nature] [Element] [Name][Gender] [Letter]
 * </Trait Set Name Format>
 *
 * ---
 *
 * <traitname Battler Name: filename>
 *
 * <traitname Battler Names>
 *  filename: weight
 *  filename: weight
 *  filename: weight
 * </traitname Battler Names>
 *
 * - Used for: Enemy Notetags
 * - Allows certain Trait Sets to cause battlers to have a unique appearance.
 * - Replace 'traitname' with the name of the Trait Set (ie. Male, Female).
 * - Replace 'filename' with the battler graphic to associate with that
 * - Replace 'weight' with a number value representing how often the 'name'
 *   would come up. The higher the weight, the more often. You may omit this
 *   and the colon(:) and just type in the 'name' instead.
 *   Trait Set.
 *
 * Examples:
 *
 * <Male Battler Name: Spider1>
 * <Female Battler Name: Spider2>
 *
 * <Male Battler Names>
 *  Rogue: 25
 *  Fighter: 10
 *  Warrior
 * </Male Battler Names>
 *
 * ---
 *
 * <traitname Battler Hue: x>
 *
 * <traitname Battler Hues>
 *  x: weight
 *  x: weight
 *  x: weight
 * </traitname Battler Hues>
 *
 * - Used for: Enemy Notetags
 * - Allows certain Trait Sets to cause battlers to use a different hue.
 * - Replace 'traitname' with the name of the Trait Set (ie. Male, Female).
 * - Replace 'x' with a number from 0 to 360 depicting the hue to become.
 * - Replace 'weight' with a number value representing how often the 'name'
 *   would come up. The higher the weight, the more often. You may omit this
 *   and the colon(:) and just type in the 'name' instead.
 *
 * Examples:
 *
 * <Male Battler Hue: 160>
 * <Female Battler Hue: 275>
 *
 * <Female Battler Hues>
 *  275: 10
 *  325: 5
 *  345
 * </Female Battler Hues>
 *
 * ---
 * 
 * <Equip Trait Requirement: name>
 * <Equip Trait Requirement: name, name, name>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Makes this piece of equipment equippable by only actors with those traits.
 * - If there are multiple traits required, all of them have to be met.
 * - If multiple trait types share the same trait name, the listed name will
 *   count for all of them.
 * - Replace 'name' with the name of an associated Trait Set type found in the
 *   Plugin Parameters.
 * - Changing trait sets mid-game will remove unmatched traits.
 * - Usage Example: <Equip Trait Requirement: Female> makes the item only
 *   equippable by female actors as long as they are tagged as female.
 * 
 * ---
 *
 * === Actor Biography Notetag ===
 *
 * The following notetag is used for the Status Menu if the updated Status Menu
 * Layout option has been enabled from the Plugin Parameters.
 *
 * ---
 *
 * <Biography>
 *  text
 *  text
 *  text
 * </Biography>
 *
 * - Used for: Actor Notetags
 * - Determines the actor's biography shown in the Status Menu.
 * - Replace 'text' with the text intended.
 * - Text Codes are allowed.
 * - The biography can be changed mid-game through Plugin Commands.
 * - If this notetag isn't used, then the actor's profile message is displayed
 *   as the biography.
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
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Biography (Group)
 * Actor: Change Biography (Range)
 * Actor: Change Biography (JS)
 * - Changes the biography of the selected actor(s).
 * - Each version has a different means of selecting Actor ID's.
 * 
 *   Step 1: Target ID
 *   - Select which Actor ID(s) to affect.
 *
 *   Step 2: Biography
 *   - Change the biography for target actor(s) to this.
 *   - Text codes allowed. 
 *   - %1 - Actor's name.
 *
 * ---
 *
 * Actor: Change Trait Sets (Group)
 * Actor: Change Trait Sets (Range)
 * Actor: Change Trait Sets (JS)
 * - Changes the Trait Set(s) of the selected actor(s).
 * - Each version has a different means of selecting Actor ID's.
 *
 *   Step 1: Target ID
 *   - Select which Actor ID(s) to affect.
 *
 *   Step 2: Change Trait Set
 *   - Element
 *   - SubElement
 *   - Gender
 *   - Race
 *   - Nature
 *   - Alignment
 *   - Blessing
 *   - Curse
 *   - Zodiac
 *   - Variant
 *     - Change to the name of the Trait Set to switch actor(s) to.
 *     - "Unchanged" to leave alone.
 *     - "Random" to randomize.
 *       - Random will use the random pool dictated by the Plugin Parameters
 *         and the Trait Set weights determined there as well.
 *
 * ---
 * 
 * === Enemy Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Change Trait Sets (Group)
 * Enemy: Change Trait Sets (Range)
 * Enemy: Change Trait Sets (JS)
 * - Changes the Trait Set(s) of the selected enemy(ies).
 * - Each version has a different means of selecting Enemy Indexes.
 *
 *   Step 1: Target ID
 *   - Select which Enemy Index(es) to affect.
 *
 *   Step 2: Change Trait Set
 *   - Element
 *   - SubElement
 *   - Gender
 *   - Race
 *   - Nature
 *   - Alignment
 *   - Blessing
 *   - Curse
 *   - Zodiac
 *   - Variant
 *     - Change to the name of the Trait Set to switch target(s) to.
 *     - "Unchanged" to leave alone.
 *     - "Random" to randomize.
 *       - Random will use the random pool dictated by the Plugin Parameters
 *         and the Trait Set weights determined there as well.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Element Rulings
 * ============================================================================
 *
 * These Plugin Parameters control the rulings for Element-related mechanics.
 * These play an important part in determine what to do when multiple elements
 * are present, how to calculate the elemental rates, and 
 *
 * ---
 *
 * Rulings
 * 
 *   Multi-Element Ruling:
 *   - Ruling on how to calculate element rate when there are  multiple
 *     elements used for damage calculation.
 *     - Maximum (largest rate of all elements)
 *     - Minimum (smallest rate of all elements)
 *     - Multiplicative (product of all elements used)
 *     - Additive (sum of all elements used)
 *     - Average (of all the elements used)
 * 
 *   JS: Maximum Rate:
 *   - Determine how maximum element rate is calculated.
 * 
 *   JS: Minimum Rate:
 *   - Determine how minimum element rate is calculated.
 * 
 *   JS: Multiply Rate:
 *   - Determine how a multiplied element rate is calculated.
 * 
 *   JS: Additive Rate:
 *   - Determine how an additive element rate is calculated.
 * 
 *   JS: Average Rate:
 *   - Determine how an average element rate is calculated.
 *
 * ---
 *
 * Formulas
 * 
 *   JS: Received Rate:
 *   - Determine how the element rate for the receiving target is calculated.
 * 
 *   JS: Finalize Rate:
 *   - Determine how the finalized element rate before damage is calculated.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Status Menu Settings
 * ============================================================================
 *
 * The Status Menu Settings determine how the Status Menu appears and the
 * various objects that exist within it. The option to update it to a more
 * updated menu also exists, too.
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Status Menu Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 * 
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the
 *     menu scene layout?
 *     - Upper Help, Top Category
 *     - Upper Help, Bottom Category
 *     - Lower Help, Top Category
 *     - Lower Help, Bottom Category
 * 
 *   Trait Set Font Size:
 *   - The font size used for Trait Set Descriptions.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Category Window
 * 
 *   Style:
 *   - How do you wish to draw commands in the Category Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Category Window.
 *
 * ---
 *
 * Displayed Parameters
 * 
 *   Column 1:
 *   Column 2:
 *   Column 3:
 *   - A list of the parameters that will be displayed in column 1.
 *   - Basic Parameters (ie. MaxHP, ATK, LUK)
 *   - X Parameters (ie. HIT, EVA, CRI)
 *   - S Parameters (ie. PDR, MDR, EXR)
 *
 * ---
 *
 * Elements
 * 
 *   Excluded Elements:
 *   - These element ID's are excluded from the Status Menu list.
 * 
 *   IDs: Column 1:
 *   IDs: Column 2:
 *   - The list of element ID's to show in column 1/2.
 *   - If neither column has ID's, list all elements.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Biography:
 *   - Vocabulary for 'Biography'.
 * 
 *   Damage: Absorb:
 *   - Vocabulary for 'Damage: Absorb'.
 * 
 *   Damage: Received:
 *   - Vocabulary for 'Damage: Received'.
 * 
 *   Damage: Dealt:
 *   - Vocabulary for 'Damage: Dealt'.
 * 
 *   Skill Types:
 *   - Vocabulary for 'Skill Types'.
 * 
 *   Weapon Types:
 *   - Vocabulary for 'Weapon Types'.
 * 
 *   Armor Types:
 *   - Vocabulary for 'Armor Types'.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Status Menu Categories
 * ============================================================================
 *
 * These Plugin Parameters allow you, the game dev, to add new categories to
 * the Status Menu as you please, and change up how the information is found
 * and displayed within the Status Menu. This will only apply if the Updated
 * Status Menu Layout is enabled.
 *
 * ---
 *
 * Category
 * 
 *   Symbol:
 *   - Symbol used for this category.
 * 
 *   Icon:
 *   - Icon used for this category.
 *   - Use 0 for no icon.
 * 
 *   Text:
 *   - Text name used for this category.
 * 
 *   JS: Draw Data:
 *   - Code used to determine what appears in the data window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Trait Set Settings
 * ============================================================================
 *
 * Trait Sets are new properties added to RPG Maker MZ through this plugin.
 * They're used to streamline the process of applying traits to actors and
 * enemies through the database.
 *
 * Instead of having to manually adjust the elemental rate of each enemy,
 * you can now assign them to a Trait Set (through the Plugin Parameters) and
 * then assign that Trait Set to an enemy or batch of enemies instead. This
 * means that all enemies with <Element: Fire> would be weak and resistance to
 * the same elements determined by the Elemental Fire Trait Set.
 *
 * These Plugin Parameters adjust how Trait Sets are handled on a general scale
 * within your game.
 *
 * ---
 *
 * General
 * 
 *   Enable Trait Sets?:
 *   - Enable Trait Sets? This must be enabled for Trait Sets to have any kind
 *     of effect on battlers.
 * 
 *   Enemy Name Format:
 *   - Enemy name format on how Trait Sets affect how enemy names appear.
 *   - Choose from the list or customize it.
 *     - [name] [letter]
 *     - [element] [name] [letter]
 *     - [element] [subelement] [name] [letter]
 *     - [name][gender] [letter]
 *     - [race] [name][gender] [letter]
 *     - [alignment] [name][gender] [letter]
 *     - [blessing] [name][gender] [letter]
 *     - [curse] [name][gender] [letter]
 *     - [name][gender]([zodiac]) [letter]
 *     - [variant] [name][gender] [letter]
 *     - [variant] [nature] [name][gender] [letter]
 *     - [variant] [nature] [element] [name][gender] [letter]
 *     - [alignment] [variant] [nature] [element] [name][gender] [letter]
 *     - ...and more...
 *
 * ---
 *
 * Trait Columns
 *
 *   Column 1 Traits:
 *   Column 2 Traits:
 *   - List of the traits that appear in this column.
 *   - Used by default in the Properties category.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Trait Set Types
 * ============================================================================
 *
 * Trait Sets are new properties added to RPG Maker MZ through this plugin.
 * They're used to streamline the process of applying traits to actors and
 * enemies through the database.
 *
 * Instead of having to manually adjust the elemental rate of each enemy,
 * you can now assign them to a Trait Set (through the Plugin Parameters) and
 * then assign that Trait Set to an enemy or batch of enemies instead. This
 * means that all enemies with <Element: Fire> would be weak and resistance to
 * the same elements determined by the Elemental Fire Trait Set.
 *
 * There are 10 different types of Trait Set Types out there that you can
 * assign to actors and enemies and they all work the same way, just under
 * different categories.
 *
 * ---
 *
 * Element
 * SubElement
 * Gender
 * Race
 * Nature
 * Alignment
 * Blessing
 * Curse
 * Zodiac
 * Variant
 * 
 *   Name:
 *   - Name of this Trait Set. Also used as a reference key
 * 
 *   Display Text:
 *   - How the Trait Set is displayed in game when selected.
 *   - Text codes are allowed.
 * 
 *   Help Description:
 *   - Help description for this Trait Set if required.
 * 
 *   Format Text:
 *   - The text that's added onto an enemy's name if this Trait Set is used.
 * 
 *   Valid for Random?:
 *   - Is this Trait Set valid for random selection?
 * 
 *   Random Weight:
 *   - Default weight of this Trait Set if valid for random.
 * 
 *   Traits:
 * 
 *   Element Rates:
 *   - The elemental damage rates received for this Trait Set.
 *   - The modifiers are multiplicative.
 * 
 *   Basic Parameters:
 *   - The basic parameter rates altered by this Trait set.
 *   - The modifiers are multiplicative.
 * 
 *   X Parameters:
 *   - The X parameter rates altered by this Trait set.
 *   - The modifiers are additive.
 * 
 *   S Parameters:
 *   - The S parameter rates altered by this Trait set.
 *   - The modifiers are multiplicative.
 * 
 *   Passive States:
 *   - Passive states that are applied to this Trait Set.
 *   - Requires VisuMZ_1_SkillsStatesCore.
 *   - Refer to VisuMZ_1_SkillsStatesCore's documentation for more details.
 * 
 *   Equipment:
 * 
 *   Weapon Types:
 *   - Additional weapon types usable by this Trait Set.
 * 
 *   Armor Types:
 *   - Additional armor types usable by this Trait Set.
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
 * Version 1.17: April 28, 2022
 * * Bug Fixes!
 * ** Fixed a problem with certain trait affinities ignoring zero values.
 *    Fix made by Olivia.
 * 
 * Version 1.16: October 14, 2021
 * * Compatibility Update!
 * ** Those using the updated layout of the Status Menu will now have the
 *    windows inherit the background type of the previous layout's Status
 *    Window Background Type from the Core Engine settings. Update by Irina.
 * 
 * Version 1.15: July 23, 2021
 * * Bug Fixes!
 * ** Fixed trait blessing calculations for X Parameters to make more sense and
 *    not snuff out if the base value is 0%.
 *    Fix made by Arisu.
 * 
 * Version 1.14: May 28, 2021
 * * Bug Fixes!
 * ** Added fail safe to prevent passive state melding from traits to crash the
 *    game when cache fails to collect data. Fix by Irina.
 * 
 * Version 1.13: May 21, 2021
 * * Documentation Update
 * ** Added for Trait "Passive States" section:
 * *** Refer to VisuMZ_1_SkillsStatesCore's documentation for more details.
 * 
 * Version 1.12: April 30, 2021
 * * Bug Fixes!
 * ** When changing traits to a random value, load up any passive states and
 *    other effects that may have changed. Fix made by Arisu.
 * 
 * Version 1.11: February 26, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.10: January 29, 2021
 * * Bug Fixes!
 * ** <Multi-Element: x> notetags should now work properly. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Irina:
 * *** <Equip Trait Requirement: name>
 * **** Makes this piece of equipment equippable by only actors with those
 *      traits. If there are multiple traits required, all of them have to be
 *      met. If multiple trait types share the same trait name, the listed name
 *      will count for all of them.
 * **** Usage Example: <Equip Trait Requirement: Female> makes the item only
 *      equippable by female actors as long as they are tagged as female.
 * ** New Plugin Parameters added by Irina and sponsored by AndyL.
 * *** Status Menu Settings > Elements > IDs: Column 1 added
 * *** Status Menu Settings > Elements > IDs: Column 2 added
 * **** The list of element ID's to show in column 1/2.
 * **** If neither column has ID's, list all elements.
 * ***** If you do not update the drawn JS found in the Status Menu Categories
 *       Plugin Parameters, these new settings won't do anything.
 * * Feature Update!
 * ** Plugin Parameter updates made by Irina and sponsored by AndyL.
 * *** Status Menu Categories > Parameters updated
 * **** Default draw options now have a slightly thicker padding to make the
 *      parameter values easier to read.
 * *** Status Menu Categories > Elements updated
 * **** Default draw options now factor in multiple columns as applied by the
 *      new plugin parameters above.
 * *** Status Menu Categories > Access updated
 * **** Skill Types, Weapon Types, and Armor Types are now centered in the
 *      various data columns to allow for better reading.
 * ** Default settings have been added to the Plugin Parameters. If you want to
 *    acquire these settings for an already-existing project, do either of the
 *    following:
 * *** Delete the existing VisuMZ_1_ElementStatusCore.js in the Plugin Manager
 *     list and install the newest version.
 * *** Or create a new project, install VisuMZ_1_ElementStatusCore.js there,
 *     then copy over the "Status Menu Categories" parameters found in the
 *     Plugin Parameters to your current project.
 *
 * Version 1.09: January 8, 2021
 * * Bug Fixes!
 * ** Default "JS: Draw Data" code for Plugin Parameters > Status Menu
 *    Categories > Elements has been updated to account for Trait Type
 *    visibility for both Element and Sub-Element. This won't update normally
 *    as it is a part of the Plugin Parameters. You will need to either delete
 *    the reinstall the plugin into the Plugin Manager list or copy and paste
 *    the Status Menu Categories plugin parameters from a fresh install. Fix
 *    made by Irina.
 * 
 * Version 1.08: November 29, 2020
 * * Bug Fixes!
 * ** Trait Set bonuses for X Parameters and S Parameters no longer increase
 *    exponentially with each other. Fix made by Arisu.
 * 
 * Version 1.07: November 8, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 *
 * Version 1.06: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update
 * ** "Use Updated Layout" plugin parameters now have the added clause:
 *    "This will override the Core Engine windows settings." to reduce
 *    confusion. Added by Yanfly.
 *
 * Version 1.05: October 4, 2020
 * * Bug Fixes!
 * ** Main Menu Portraits are now forced to pre-load prior to entering the
 *    Status Menu scene to ensure images will properly appear.
 *    Fix made by Irina.
 * 
 * Version 1.04: September 20, 2020
 * * Bug Fixes!
 * ** The "Column 1 and 2 Traits" plugin parameters for "General Trait Set"
 *    should now work. You will need to readjust them again. Fix by Arisu.
 * ** The "Elements" Status Menu Categories tab has its "JS: Draw Data"
 *    updated to display the percentages properly for Dealt Damage bonuses.
 *    This won't update normally as it's a part of the plugin parameters. You
 *    would need to do either a fresh install, copy from the sample project,
 *    or change the code bit yourself. To change to code bit, look for this:
 *      let dealtText = '%1%'.format(dealt);
 *    and change it to:
 *      let dealtText = '%1%'.format(Math.round(dealt * 100));
 *    Fix made by Irina.
 * 
 * Version 1.03: September 6, 2020
 * * Documentation Update!
 * ** <Dealt Element id Flat: +x%> notetag gets a more indepth explanation.
 * *** This does not add on flat bonus damages after calculating elemental
 *     rates. This merely adds onto it at the end after applying rates if
 *     the formula from above is unchanged.
 * * New Features!
 * ** New Plugin Parameters added in Status Menu Settings for disabling the
 *    back rectangles and/or changing their colors.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** Trait Set bonuses for X Parameters and S Parameters now show up properly
 *    in the Status Menu. Fix made by Yanfly.
 * ** Trait Set Sideview Battler Solo Weapon and Solo Motion notetags are now
 *    fixed to register properly with Battle Core. Fix made by Shaz.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Passive states now work with Skills & States Core. Fix made by Yanfly.
 * ** Fixed S parameters not working. Fix made by Yanfly.
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
 * @command ActorChangeBiographyGroup
 * @text Actor: Change Biography (Group)
 * @desc Changes the biography of the selected actor(s).
 * Select from a group of actor ID's to change.
 *
 * @arg Step1:arraynum
 * @text Step 1: Target ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Biography:json
 * @text Step 2: Biography
 * @type note
 * @desc Change the biography for target actor(s) to this.
 * Text codes allowed. %1 - Actor's name.
 * @default "This is %1's new biography."
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeBiographyRange
 * @text Actor: Change Biography (Range)
 * @desc Changes the biography of the selected actor(s).
 * Select from a range of actor ID's to change.
 *
 * @arg Step1
 * @text Step 1: ID Range
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type actor
 * @desc Select which Actor ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type actor
 * @desc Select which Actor ID to end at.
 * @default 4
 *
 * @arg Biography:json
 * @text Step 2: Biography
 * @type note
 * @desc Change the biography for target actor(s) to this.
 * Text codes allowed. %1 - Actor's name.
 * @default "This is %1's new biography."
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeBiographyJS
 * @text Actor: Change Biography (JS)
 * @desc Changes the biography of the selected actor(s).
 * Select from a group of actor ID's using JavaScript.
 *
 * @arg Step1:arrayeval
 * @text Step 1: Target ID(s)
 * @type string[]
 * @desc Enter which Actor ID(s) to affect.
 * You may use JavaScript code.
 * @default ["$gameVariables.value(1)"]
 *
 * @arg Biography:json
 * @text Step 2: Biography
 * @type note
 * @desc Change the biography for target actor(s) to this.
 * Text codes allowed. %1 - Actor's name.
 * @default "This is %1's new biography."
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeTraitSetsGroup
 * @text Actor: Change Trait Sets (Group)
 * @desc Changes the Trait Set(s) of the selected actor(s).
 * Select from a group of actor ID's to change.
 *
 * @arg Step1:arraynum
 * @text Step 1: Target ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Step2
 * @text Step 2: Change Trait Set
 *
 * @arg Element:str
 * @text - Element
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg SubElement:str
 * @text - SubElement
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Gender:str
 * @text - Gender
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Race:str
 * @text - Race
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Nature:str
 * @text - Nature
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Alignment:str
 * @text - Alignment
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Blessing:str
 * @text - Blessing
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Curse:str
 * @text - Curse
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Zodiac:str
 * @text - Zodiac
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Variant:str
 * @text - Variant
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeTraitSetsRange
 * @text Actor: Change Trait Sets (Range)
 * @desc Changes the Trait Set(s) of the selected actor(s).
 * Select from a range of actor ID's to change.
 *
 * @arg Step1
 * @text Step 1: ID Range
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type actor
 * @desc Select which Actor ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type actor
 * @desc Select which Actor ID to end at.
 * @default 4
 *
 * @arg Step2
 * @text Step 2: Change Trait Set
 *
 * @arg Element:str
 * @text - Element
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg SubElement:str
 * @text - SubElement
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Gender:str
 * @text - Gender
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Race:str
 * @text - Race
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Nature:str
 * @text - Nature
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Alignment:str
 * @text - Alignment
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Blessing:str
 * @text - Blessing
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Curse:str
 * @text - Curse
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Zodiac:str
 * @text - Zodiac
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Variant:str
 * @text - Variant
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeTraitSetsJS
 * @text Actor: Change Trait Sets (JS)
 * @desc Changes the Trait Set(s) of the selected actor(s).
 * Select from a group of actor ID's using JavaScript.
 *
 * @arg Step1:arrayeval
 * @text Step 1: Target ID(s)
 * @type string[]
 * @desc Enter which Actor ID(s) to affect.
 * You may use JavaScript code.
 * @default ["$gameVariables.value(1)"]
 *
 * @arg Step2
 * @text Step 2: Change Trait Set
 *
 * @arg Element:str
 * @text - Element
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg SubElement:str
 * @text - SubElement
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Gender:str
 * @text - Gender
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Race:str
 * @text - Race
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Nature:str
 * @text - Nature
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Alignment:str
 * @text - Alignment
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Blessing:str
 * @text - Blessing
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Curse:str
 * @text - Curse
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Zodiac:str
 * @text - Zodiac
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Variant:str
 * @text - Variant
 * @parent Step2
 * @desc Change to the name of the Trait Set to switch actor(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyChangeTraitSetsGroup
 * @text Enemy: Change Trait Sets (Group)
 * @desc Changes the Trait Set(s) of the selected enemy(ies).
 * Select from a group of enemy indexes to change.
 *
 * @arg Step1:arraynum
 * @text Step 1: Target ID(s)
 * @type number[]
 * @desc Select which Enemy Index(es) to affect.
 * @default ["1"]
 *
 * @arg Step2
 * @text Step 2: Change Trait Set
 *
 * @arg Element:str
 * @text - Element
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg SubElement:str
 * @text - SubElement
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Gender:str
 * @text - Gender
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Race:str
 * @text - Race
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Nature:str
 * @text - Nature
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Alignment:str
 * @text - Alignment
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Blessing:str
 * @text - Blessing
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Curse:str
 * @text - Curse
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Zodiac:str
 * @text - Zodiac
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Variant:str
 * @text - Variant
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyChangeTraitSetsRange
 * @text Enemy: Change Trait Sets (Range)
 * @desc Changes the Trait Set(s) of the selected enemy(ies).
 * Select from a range of enemy indexes to change.
 *
 * @arg Step1
 * @text Step 1: ID Range
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type number
 * @desc Select which Enemy Index to start from.
 * @default 0
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type number
 * @desc Select which Index to end at.
 * @default 7
 *
 * @arg Step2
 * @text Step 2: Change Trait Set
 *
 * @arg Element:str
 * @text - Element
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg SubElement:str
 * @text - SubElement
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Gender:str
 * @text - Gender
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Race:str
 * @text - Race
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Nature:str
 * @text - Nature
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Alignment:str
 * @text - Alignment
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Blessing:str
 * @text - Blessing
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Curse:str
 * @text - Curse
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Zodiac:str
 * @text - Zodiac
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Variant:str
 * @text - Variant
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyChangeTraitSetsJS
 * @text Enemy: Change Trait Sets (JS)
 * @desc Changes the Trait Set(s) of the selected enemy(ies).
 * Select from a group of enemy indexes using JavaScript.
 *
 * @arg Step1:arrayeval
 * @text Step 1: Target ID(s)
 * @type string[]
 * @desc Enter which Enemy Indexes to affect.
 * You may use JavaScript code.
 * @default ["$gameVariables.value(1)"]
 *
 * @arg Step2
 * @text Step 2: Change Trait Set
 *
 * @arg Element:str
 * @text - Element
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg SubElement:str
 * @text - SubElement
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Gender:str
 * @text - Gender
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Race:str
 * @text - Race
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Nature:str
 * @text - Nature
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Alignment:str
 * @text - Alignment
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Blessing:str
 * @text - Blessing
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Curse:str
 * @text - Curse
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Zodiac:str
 * @text - Zodiac
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
 *
 * @arg Variant:str
 * @text - Variant
 * @parent Step2
 * @desc Change to the name of Trait Set to switch target(s) to.
 * "Unchanged" to leave alone. "Random" to randomize.
 * @default Unchanged
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
 * @param ElementStatusCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ElementRules:struct
 * @text Element Rulings
 * @type struct<ElementRules>
 * @desc The rulings for Element-related mechanics.
 * @default {"Rulings":"","MultiRule:str":"multiply","RuleMaxCalcJS:func":"\"// Declare Constants\\nconst target = arguments[0];\\nconst elements = arguments[1];\\nconst action = this;\\n\\n// Determine Return Value\\nconst absorbed = action.isRecover() ? [] : target.getAbsorbedElements();\\nlet max = 0;\\nfor (const elementId of elements) {\\n    const sign = absorbed.includes(elementId) ? -1 : 1;\\n    max = Math.max(max, target.elementRate(elementId) * sign);\\n}\\nreturn max;\"","RuleMinCalcJS:func":"\"// Declare Constants\\nconst target = arguments[0];\\nconst elements = arguments[1];\\nconst action = this;\\n\\n// Determine Return Value\\nconst absorbed = action.isRecover() ? [] : target.getAbsorbedElements();\\nlet min = 0;\\nfor (const elementId of elements) {\\n    const sign = absorbed.includes(elementId) ? -1 : 1;\\n    min = Math.min(min, target.elementRate(elementId) * sign);\\n}\\nreturn min;\"","RuleMultiplyCalcJS:func":"\"// Declare Constants\\nconst target = arguments[0];\\nconst elements = arguments[1];\\nconst action = this;\\n\\n// Determine Return Value\\nconst absorbed = action.isRecover() ? [] : target.getAbsorbedElements();\\nlet rate = 1;\\nlet sign = 1;\\nfor (const elementId of elements) {\\n    if (absorbed.includes(elementId)) sign = -1;\\n    rate *= target.elementRate(elementId);\\n}\\nreturn rate * sign;\"","RuleAdditiveCalcJS:func":"\"// Declare Constants\\nconst target = arguments[0];\\nconst elements = arguments[1];\\nconst action = this;\\n\\n// Determine Return Value\\nconst absorbed = action.isRecover() ? [] : target.getAbsorbedElements();\\nlet rate = 0;\\nfor (const elementId of elements) {\\n    const sign = absorbed.includes(elementId) ? -1 : 1;\\n    rate += target.elementRate(elementId) * sign;\\n}\\nreturn rate;\"","RuleAverageCalcJS:func":"\"// Declare Constants\\nconst target = arguments[0];\\nconst elements = arguments[1];\\nconst action = this;\\n\\n// Determine Return Value\\nconst rate = action.elementsRateSum(target, elements);\\nreturn rate / elements.length;\"","Formulas":"","ReceivedRateJS:func":"\"// Declare Constants\\nconst elementId = arguments[0];\\nconst target = this;\\nconst base = 1;\\nconst plus = target.getReceiveElementPlus(elementId);\\nconst rate = target.getReceiveElementRate(elementId);\\nconst flat = target.getReceiveElementFlat(elementId);\\n\\n// Determine Return Value\\nreturn Math.max(0, (base + plus) * rate + flat);\"","FinalizeRateJS:func":"\"// Declare Constants\\nconst target = arguments[0];\\nconst action = this;\\nconst elements = action.elements();\\nconst targetRate = action.calcTargetElementRate(target, elements);\\nconst sign = targetRate >= 0 ? 1 : -1;\\nconst base = Math.abs(targetRate);\\nconst plus = action.calcUserElementDamagePlus(target, elements);\\nconst rate = action.calcUserElementDamageRate(target, elements);\\nconst flat = action.calcUserElementDamageFlat(target, elements);\\n\\n// Determine Return Value\\nreturn sign * Math.max((base + plus) * rate + flat, 0);;\""}
 *
 * @param StatusMenu:struct
 * @text Status Menu Settings
 * @type struct<StatusMenu>
 * @desc The settings for the Status Menu Scene.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/top","TraitDescriptionFontSize:num":"18","DrawBackRect:eval":"true","BackRectColor:str":"19","Command":"","CmdStyle:str":"icon","CmdTextAlign:str":"center","Parameters":"","Col1:arraystr":"[\"MaxHP\",\"MaxMP\",\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","Col2:arraystr":"[\"HIT\",\"EVA\",\"CRI\",\"CEV\",\"MEV\",\"MRF\",\"CNT\",\"HRG\",\"MRG\",\"TRG\"]","Col3:arraystr":"[\"TGR\",\"GRD\",\"REC\",\"PHA\",\"MCR\",\"TCR\",\"PDR\",\"MDR\",\"FDR\",\"EXR\"]","Elements":"","ExcludeElements:arraynum":"[]","ElementsCol1:arraynum":"[]","ElementsCol2:arraynum":"[]","Vocabulary":"","VocabBiography:str":"Biography","VocabDmgAbsorb:str":"Absorbs %1%","VocabDmgReceive:str":"Elemental Resistance","VocabDmgDealt:str":"Bonus Damage","VocabStype:str":"Skill Types","VocabWtype:str":"Weapon Types","VocabAtype:str":"Armor Types"}
 *
 * @param StatusMenuList:arraystruct
 * @text Status Menu Categories
 * @parent StatusMenu:struct
 * @type struct<StatusCategory>[]
 * @desc This is a list of categories that appear in the 
 * Status Menu Scene.
 * @default ["{\"Symbol:str\":\"general\",\"Icon:num\":\"84\",\"Text:str\":\"General\",\"DrawJS:func\":\"\\\"// Declare Constants\\\\nconst maxExp = '-------';\\\\nconst lineHeight = this.lineHeight();\\\\nconst gaugeLineHeight = this.gaugeLineHeight();\\\\nconst basicDataHeight = lineHeight * 6.5;\\\\nconst actor = this._actor;\\\\nconst padding = this.itemPadding();\\\\nconst halfWidth = this.innerWidth / 2;\\\\nlet rect = new Rectangle(0, 0, halfWidth, this.innerHeight);\\\\nlet x = 0;\\\\nlet y = 0;\\\\n\\\\n// Draw Actor Graphic\\\\nthis.drawActorGraphic(0, this.innerWidth / 2);\\\\n\\\\n// Declare Smaller Data Area\\\\nlet sx = rect.x;\\\\nlet sy = Math.max(rect.y, rect.y + (rect.height - basicDataHeight));\\\\nlet sw = rect.width;\\\\nlet sh = rect.y + rect.height - sy;\\\\n\\\\n// Draw Actor Name\\\\nthis.drawItemDarkRect(0, sy, sw, lineHeight, 2);\\\\nthis.drawText(actor.name(), sx, sy, sw, 'center');\\\\n\\\\n// Draw Actor Level\\\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\\\nsy += lineHeight;\\\\nthis.drawItemDarkRect(0, sy, sw, lineHeight);\\\\nthis.drawActorLevel(actor, sx, sy);\\\\n\\\\n// Draw Actor Class\\\\nconst className = actor.currentClass().name;\\\\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\\\\nsy += lineHeight;\\\\nthis.drawItemDarkRect(0, sy, sw, lineHeight);\\\\nthis.drawTextEx(className, sx, sy, sw);\\\\n\\\\n// Draw Actor Icons\\\\nsx = rect.x + Math.round((rect.width - 144) / 2);\\\\nsy += lineHeight;\\\\nthis.drawItemDarkRect(0, sy, sw, lineHeight);\\\\nthis.drawActorIcons(actor, sx, sy);\\\\n\\\\n// Draw Gauges\\\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\\\nsy += lineHeight;\\\\nthis.drawItemDarkRect(0, sy, sw, this.innerHeight - sy);\\\\nthis.placeGauge(actor, \\\\\\\"hp\\\\\\\", sx, sy);\\\\nsy += gaugeLineHeight;\\\\nthis.placeGauge(actor, \\\\\\\"mp\\\\\\\", sx, sy);\\\\nsy += gaugeLineHeight;\\\\nif ($dataSystem.optDisplayTp) {\\\\n    this.placeGauge(actor, \\\\\\\"tp\\\\\\\", sx, sy);\\\\n}\\\\n\\\\n// Declare Second Half\\\\nrect = new Rectangle(halfWidth, 0, halfWidth, this.innerHeight);\\\\n\\\\n// Draw EXP\\\\nthis.changeTextColor(ColorManager.systemColor());\\\\nthis.drawItemDarkRect(rect.x, rect.y, rect.width, lineHeight, 2);\\\\nthis.drawText(TextManager.exp, rect.x, rect.y, rect.width, 'center');\\\\nconst expHeight = lineHeight * 5;\\\\nthis.drawItemDarkRect(rect.x, rect.y + lineHeight * 1, rect.width, lineHeight * 2);\\\\nthis.drawItemDarkRect(rect.x, rect.y + lineHeight * 3, rect.width, lineHeight * 2);\\\\nconst expTotal = TextManager.expTotal.format(TextManager.exp);\\\\nconst expNext = TextManager.expNext.format(TextManager.level);\\\\nthis.changeTextColor(ColorManager.systemColor());\\\\nthis.drawText(expTotal, rect.x + padding, rect.y + lineHeight * 1, rect.width - padding * 2);\\\\nthis.drawText(expNext, rect.x + padding, rect.y + lineHeight * 3, rect.width - padding * 2);\\\\nthis.resetTextColor();\\\\nconst expTotalValue = actor.currentExp();\\\\nconst expNextValue = actor.isMaxLevel() ? maxExp : actor.nextRequiredExp();\\\\nthis.drawText(expTotalValue, rect.x + padding, rect.y + lineHeight * 1, rect.width - padding * 2, 'right');\\\\nthis.drawText(expNextValue, rect.x + padding, rect.y + lineHeight * 3, rect.width - padding * 2, 'right');\\\\n\\\\n// Write Actor Biography\\\\ny = rect.y + expHeight;\\\\nthis.changeTextColor(ColorManager.systemColor());\\\\nthis.drawItemDarkRect(rect.x, y, rect.width, lineHeight, 2);\\\\nthis.drawText(TextManager.statusMenuBiography, rect.x, y, rect.width, 'center');\\\\nthis.resetTextColor();\\\\ny += lineHeight;\\\\nconst bioText = actor.getBiography();\\\\nthis.drawItemDarkRect(rect.x, y, rect.width, this.innerHeight - y);\\\\nthis.drawTextEx(bioText, rect.x + padding, y, rect.width - padding * 2);\\\"\"}","{\"Symbol:str\":\"parameters\",\"Icon:num\":\"87\",\"Text:str\":\"Parameters\",\"DrawJS:func\":\"\\\"// Declare Constants\\\\nconst lineHeight = this.lineHeight();\\\\nconst gaugeLineHeight = this.gaugeLineHeight();\\\\nconst basicDataHeight = this.basicDataHeight();\\\\nconst padding = this.itemPadding() * 2;\\\\nconst thirdWidth = Math.floor(this.innerWidth / 3);\\\\nlet x = 0;\\\\nlet y = 0;\\\\nlet paramWidth = 0;\\\\n\\\\n// Draw Actor Graphic\\\\nthis.drawActorGraphic(0, this.innerWidth / 2);\\\\n\\\\n// Declare Parameter Rect\\\\nlet rect = new Rectangle(0, 0, thirdWidth, this.innerHeight);\\\\n\\\\n// Declare Parameters\\\\nconst params1 = this.getParameterList(1);\\\\nconst params2 = this.getParameterList(2);\\\\nconst params3 = this.getParameterList(3);\\\\nconst maxLength = Math.max(params1.length, params2.length, params3.length);\\\\nconst nameWidth = rect.width - padding * 2 - this.textWidth('88888');\\\\nconst topY = Math.max((this.innerHeight - (maxLength * lineHeight)) / 2, 0);\\\\n\\\\n// Draw Parameters 1\\\\nx = rect.x + padding;\\\\ny = topY;\\\\nparamWidth = rect.width - (padding * 2);\\\\nif (y !== 0) this.drawItemDarkRect(rect.x, 0, rect.width, y);\\\\nfor (const paramId of params1) {\\\\n    this.drawItemDarkRect(rect.x, y, rect.width, lineHeight);\\\\n    this.drawParamName(paramId, x, y, nameWidth);\\\\n    this.drawParamValue(paramId, x, y, paramWidth);\\\\n    y += lineHeight;\\\\n}\\\\nthis.drawItemDarkRect(rect.x, y, rect.width, this.innerHeight - y);\\\\n\\\\n// Draw Parameters 2\\\\nrect.x += rect.width;\\\\nx = rect.x + padding;\\\\ny = topY;\\\\nparamWidth = rect.width - (padding * 2);\\\\nif (y !== 0) this.drawItemDarkRect(rect.x, 0, rect.width, y);\\\\nfor (const paramId of params2) {\\\\n    this.drawItemDarkRect(rect.x, y, rect.width, lineHeight);\\\\n    this.drawParamName(paramId, x, y, nameWidth);\\\\n    this.drawParamValue(paramId, x, y, paramWidth);\\\\n    y += lineHeight;\\\\n}\\\\nthis.drawItemDarkRect(rect.x, y, rect.width, this.innerHeight - y);\\\\n\\\\n// Draw Parameters 3\\\\nrect.x += rect.width;\\\\nrect.width = this.innerWidth - rect.x;\\\\nx = rect.x + padding;\\\\ny = topY;\\\\nparamWidth = rect.width - (padding * 2);\\\\nif (y !== 0) this.drawItemDarkRect(rect.x, 0, rect.width, y);\\\\nfor (const paramId of params3) {\\\\n    this.drawItemDarkRect(rect.x, y, rect.width, lineHeight);\\\\n    this.drawParamName(paramId, x, y, nameWidth);\\\\n    this.drawParamValue(paramId, x, y, paramWidth);\\\\n    y += lineHeight;\\\\n}\\\\nthis.drawItemDarkRect(rect.x, y, rect.width, this.innerHeight - y);\\\"\"}","{\"Symbol:str\":\"properties\",\"Icon:num\":\"83\",\"Text:str\":\"Properties\",\"DrawJS:func\":\"\\\"// Declare Constants\\\\nconst traitCol1 = Window_StatusData.traitCol1;\\\\nconst traitCol2 = Window_StatusData.traitCol2;\\\\nconst lineHeight = this.lineHeight();\\\\nconst actor = this._actor;\\\\nconst padding = this.itemPadding();\\\\nconst traitHeight = (this.innerHeight / Math.max(traitCol1.length, traitCol2.length)) - lineHeight;\\\\nconst width = this.innerWidth / 2;\\\\nlet x = 0;\\\\nlet y = 0;\\\\n\\\\n// Draw Actor Graphic\\\\nthis.drawActorGraphic(0, width);\\\\n\\\\n// Draw Trait Set 1\\\\nfor (const type of traitCol1) {\\\\n    const traitType = DataManager.traitSetType(type);\\\\n    const traitSet = actor.traitSet(type);\\\\n    this.drawItemDarkRect(0, y, width, lineHeight, 2);\\\\n    const labelText = '\\\\\\\\\\\\\\\\C[16]%1: \\\\\\\\\\\\\\\\C[0]%2'.format(traitType.Label, traitSet.Display);\\\\n    this.drawTextEx(labelText, padding, y, width - padding * 2);\\\\n    y += lineHeight;\\\\n    this.setDescriptionFontSizeToTraitSet();\\\\n    this.drawItemDarkRect(0, y, width, traitHeight);\\\\n    this.drawTextEx(traitSet.Description, padding, y, width - padding * 2);\\\\n    y += traitHeight;\\\\n    this.resetDescriptionFontSize();\\\\n}\\\\n\\\\n// Draw Filler Rect 1\\\\nif (this.innerHeight - y > 0) {\\\\n    this.drawItemDarkRect(0, y, width, this.innerHeight - y);\\\\n}\\\\n\\\\n// Draw Trait Set 2\\\\ny = 0;\\\\nfor (const type of traitCol2) {\\\\n    const traitType = DataManager.traitSetType(type);\\\\n    const traitSet = actor.traitSet(type);\\\\n    this.drawItemDarkRect(width, y, width, lineHeight, 2);\\\\n    const labelText = '\\\\\\\\\\\\\\\\C[16]%1: \\\\\\\\\\\\\\\\C[0]%2'.format(traitType.Label, traitSet.Display);\\\\n    this.drawTextEx(labelText, width + padding, y, width - padding * 2);\\\\n    y += lineHeight;\\\\n    this.setDescriptionFontSizeToTraitSet();\\\\n    this.drawItemDarkRect(width, y, width, traitHeight);\\\\n    this.drawTextEx(traitSet.Description, width + padding, y, width - padding * 2);\\\\n    y += traitHeight;\\\\n    this.resetDescriptionFontSize();\\\\n}\\\\n\\\\n// Draw Filler Rect 1\\\\nif (this.innerHeight - y > 0) {\\\\n    this.drawItemDarkRect(width, y, width, this.innerHeight - y);\\\\n}\\\"\"}","{\"Symbol:str\":\"elements\",\"Icon:num\":\"64\",\"Text:str\":\"Elements\",\"DrawJS:func\":\"\\\"// Declare Constants\\\\nconst lineHeight = this.lineHeight();\\\\nconst actor = this._actor;\\\\nconst padding = this.itemPadding();\\\\nconst labelFmt = '\\\\\\\\\\\\\\\\C[16]%1: \\\\\\\\\\\\\\\\C[0]%2';\\\\nconst traitType1 = DataManager.traitSetType('Element');\\\\nconst traitSet1 = actor.traitSet('Element');\\\\nconst traitType2 = DataManager.traitSetType('SubElement');\\\\nconst traitSet2 = actor.traitSet('SubElement');\\\\nconst traitHeight = (this.innerHeight / Math.max(Window_StatusData.traitCol1.length, Window_StatusData.traitCol2.length)) - lineHeight;\\\\nlet x = 0;\\\\nlet y = 0;\\\\nlet width = this.innerWidth / 2;\\\\n\\\\n// Draw Actor Graphic\\\\nthis.drawActorGraphic(0, width);\\\\n\\\\n// Draw Element Trait Sets\\\\nif (traitType1.Visible || traitType2.Visible) {\\\\n    this.drawItemDarkRect(x, y, width, lineHeight, 2);\\\\n    this.drawItemDarkRect(width, y, width, lineHeight, 2);\\\\n    if (traitType1.Visible) {\\\\n        this.drawTextEx(labelFmt.format(traitType1.Label, traitSet1.Display), padding, y, width - padding * 2);\\\\n    }\\\\n    if (traitType2.Visible) {\\\\n        this.drawTextEx(labelFmt.format(traitType2.Label, traitSet2.Display), width + padding, y, width - padding * 2);\\\\n    }\\\\n    y += lineHeight;\\\\n    this.setDescriptionFontSizeToTraitSet();\\\\n    this.drawItemDarkRect(x, y, width, traitHeight);\\\\n    this.drawItemDarkRect(width, y, width, traitHeight);\\\\n    if (traitType1.Visible) {\\\\n        this.drawTextEx(traitSet1.Description, padding, y, width - padding * 2);\\\\n    }\\\\n    if (traitType2.Visible) {\\\\n        this.drawTextEx(traitSet2.Description, width + padding, y, width - padding * 2);\\\\n    }\\\\n    this.resetDescriptionFontSize();\\\\n    this.resetFontSettings();\\\\n    y += traitHeight;\\\\n}\\\\nconst topY = y;\\\\n\\\\n// Prepare Elemental Data\\\\nconst elementCol1 = this.getElementIDsCol1();\\\\nconst elementCol2 = this.getElementIDsCol2();\\\\nlet columnData;\\\\nif (elementCol2.length > 0) {\\\\n    columnData = ['Resist','Resist','Bonus','Bonus'];\\\\n} else {\\\\n    columnData = ['Resist','Bonus'];\\\\n}\\\\nconst dataRows = Math.max(elementCol1.length, elementCol2.length, 1);\\\\nconst dataCols = columnData.length;\\\\n\\\\n// Draw Elemental Data\\\\nthis.drawItemDarkRect(width * 0, y, width, lineHeight, 2);\\\\nthis.drawItemDarkRect(width * 1, y, width, lineHeight, 2);\\\\nthis.changeTextColor(ColorManager.systemColor());\\\\nthis.drawText(TextManager.statusMenuDmgReceive, width * 0, y, width, 'center');\\\\nthis.drawText(TextManager.statusMenuDmgDealt, width * 1, y, width, 'center');\\\\ny += lineHeight;\\\\nthis.setDescriptionFontSizeToTraitSet();\\\\nconst smallLineHeight = this.textSizeEx(' ').height;\\\\n\\\\n// Draw Elemental Table\\\\nfor (let i = 0; i < dataRows; i++) {\\\\n    for (let j = 0; j < dataCols; j++) {\\\\n        // Draw Dark Rect\\\\n        const colWidth = this.innerWidth / dataCols;\\\\n        this.drawItemDarkRect(colWidth * j, y, colWidth, smallLineHeight);\\\\n\\\\n        // Draw Element Name\\\\n        let elementID = elementCol1[i];\\\\n        if (dataCols === 4) {\\\\n            elementID = (j % 2 === 0) ? elementCol1[i] : elementCol2[i];\\\\n        }\\\\n        if (!elementID) continue;\\\\n        const name = $dataSystem.elements[elementID];\\\\n        this.drawTextEx(name, colWidth * (j + 1/3) + padding, y, colWidth*2/3);\\\\n        const type = columnData[j];\\\\n\\\\n        // Draw Resistance Data\\\\n        this.resetFontSettings();\\\\n        let drawText = '';\\\\n        if (type === 'Resist') {\\\\n            const rate = actor.elementRate(elementID);\\\\n            const flippedRate = (rate - 1) * -1;\\\\n            this.changeTextColor(ColorManager.paramchangeTextColor(flippedRate));\\\\n            drawText = '%1%'.format(Math.round(flippedRate * 100));\\\\n            if (actor.getAbsorbedElements().includes(elementID)) {\\\\n                this.changeTextColor(ColorManager.powerUpColor());\\\\n                drawText = TextManager.statusMenuDmgAbsorb.format(Math.round(rate * 100));\\\\n            } else if (rate > 1) {\\\\n                drawText = '%1'.format(drawText);\\\\n            } else if (rate <= 1) {\\\\n                drawText = '+%1'.format(drawText);\\\\n            }\\\\n\\\\n        // Draw Bonus Damage Data\\\\n        } else if (type === 'Bonus') {\\\\n            const dealtPlus = actor.getDealtElementPlus(elementID);\\\\n            const dealtRate = actor.getDealtElementRate(elementID);\\\\n            const dealtFlat = actor.getDealtElementFlat(elementID);\\\\n            const dealt = ((1 + dealtPlus) * dealtRate + dealtFlat) - 1;\\\\n            this.changeTextColor(ColorManager.paramchangeTextColor(dealt));\\\\n            drawText = '%1%'.format(Math.round(dealt * 100));\\\\n            if (dealt >= 0) drawText = '+%1'.format(drawText);\\\\n        }\\\\n\\\\n        // Draw Value\\\\n        this.contents.drawText(drawText, colWidth * j, y, (colWidth/3) - padding, smallLineHeight, 'right');\\\\n    }\\\\n    y += smallLineHeight;\\\\n}\\\\n\\\\n// Closing the Table\\\\nfor (let j = 0; j < dataCols; j++) {\\\\n    const colWidth = this.innerWidth / dataCols;\\\\n    this.drawItemDarkRect(colWidth * j, y, colWidth, this.innerHeight - y);\\\\n}\\\"\"}","{\"Symbol:str\":\"access\",\"Icon:num\":\"137\",\"Text:str\":\"Access\",\"DrawJS:func\":\"\\\"// Declare Constants\\\\nconst lineHeight = this.lineHeight();\\\\nconst actor = this._actor;\\\\nconst thirdWidth = Math.floor(this.innerWidth / 3);\\\\nlet x = 0;\\\\nlet y = 0;\\\\n\\\\n// Draw Actor Graphic\\\\nthis.drawActorGraphic(0, this.innerWidth / 2);\\\\n\\\\n// Declare Parameter Rect\\\\nlet rect = new Rectangle(0, 0, thirdWidth, this.innerHeight);\\\\n\\\\n// Draw Skill Types\\\\nx = rect.x;\\\\ny = 0;\\\\nthis.resetFontSettings();\\\\nthis.drawItemDarkRect(x, y, rect.width, lineHeight, 2);\\\\nthis.changeTextColor(ColorManager.systemColor());\\\\nthis.drawText(TextManager.statusMenuStype, x, y, rect.width, 'center');\\\\ny += lineHeight;\\\\nfor (const stypeId of actor.skillTypes()) {\\\\n    this.drawItemDarkRect(x, y, rect.width, lineHeight);\\\\n    if (stypeId > 0) {\\\\n        const text = $dataSystem.skillTypes[stypeId];\\\\n        const padding = Math.round((rect.width - this.stypeWidth()) / 2);\\\\n        this.drawTextEx(text, x + padding, y, rect.width - padding * 2);\\\\n    }\\\\n    y += lineHeight;\\\\n}\\\\nthis.drawItemDarkRect(x, y, rect.width, this.innerHeight - y);\\\\n\\\\n// Draw Weapon Types\\\\nrect.x += rect.width;\\\\nx = rect.x;\\\\ny = 0;\\\\nthis.resetFontSettings();\\\\nthis.drawItemDarkRect(x, y, rect.width, lineHeight, 2);\\\\nthis.changeTextColor(ColorManager.systemColor());\\\\nthis.drawText(TextManager.statusMenuWtype, x, y, rect.width, 'center');\\\\ny += lineHeight;\\\\nfor (const wtypeId of actor.weaponTypes()) {\\\\n    this.drawItemDarkRect(x, y, rect.width, lineHeight);\\\\n    if (wtypeId > 0) {\\\\n        const text = $dataSystem.weaponTypes[wtypeId];\\\\n        const padding = Math.round((rect.width - this.wtypeWidth()) / 2);\\\\n        this.drawTextEx(text, x + padding, y, rect.width - padding * 2);\\\\n    }\\\\n    y += lineHeight;\\\\n}\\\\nthis.drawItemDarkRect(x, y, rect.width, this.innerHeight - y);\\\\n\\\\n// Draw Armor Types\\\\nrect.x += rect.width;\\\\nx = rect.x;\\\\ny = 0;\\\\nrect.width = this.innerWidth - rect.x;\\\\nthis.resetFontSettings();\\\\nthis.drawItemDarkRect(x, y, rect.width, lineHeight, 2);\\\\nthis.changeTextColor(ColorManager.systemColor());\\\\nthis.drawText(TextManager.statusMenuAtype, x, y, rect.width, 'center');\\\\ny += lineHeight;\\\\nfor (const atypeId of actor.armorTypes()) {\\\\n    this.drawItemDarkRect(x, y, rect.width, lineHeight);\\\\n    if (atypeId > 0) {\\\\n        const text = $dataSystem.armorTypes[atypeId];\\\\n        const padding = Math.round((rect.width - this.atypeWidth()) / 2);\\\\n        this.drawTextEx(text, x + padding, y, rect.width - padding * 2);\\\\n    }\\\\n    y += lineHeight;\\\\n}\\\\nthis.drawItemDarkRect(x, y, rect.width, this.innerHeight - y);\\\"\"}","{\"Symbol:str\":\"cancel\",\"Icon:num\":\"82\",\"Text:str\":\"Finish\",\"DrawJS:func\":\"\\\"this.drawFirstCategoryData();\\\"\"}"]
 *
 * @param TraitBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param TraitSetSettings:struct
 * @text General Trait Set Settings
 * @type struct<TraitSetSettings>
 * @desc The settings for Trait Sets as a whole.
 * @default {"General":"","Enable:eval":"true","EnemyNameFmt:str":"[variant] [name][gender] [letter]","TraitColumns":"","TraitCol1:arraystr":"[\"Gender\",\"Nature\",\"Blessing\",\"Zodiac\"]","TraitCol2:arraystr":"[\"Race\",\"Alignment\",\"Curse\",\"Variant\"]"}
 *
 * @param Element:struct
 * @text Main Element Sets
 * @parent TraitSetSettings:struct
 * @type struct<TraitSetType>
 * @desc The settings for the Main Element Trait Set Type.
 * @default {"Name:str":"Element","Label:str":"Element","Visible:eval":"true","RandomizeActor:eval":"false","RandomizeEnemy:eval":"false","Default:struct":"{\"Name:str\":\"Neutral\",\"Display:str\":\"\\\\i[160]Neutral\",\"Description:json\":\"\\\"No strengths or weaknesses.\\\"\",\"FmtText:str\":\"\",\"RandomValid:eval\":\"true\",\"RandomWeight:num\":\"8\",\"Traits\":\"\",\"ElementRate:struct\":\"{}\",\"Params:struct\":\"{}\",\"XParams:struct\":\"{}\",\"SParams:struct\":\"{}\",\"PassiveStates:arraynum\":\"[]\",\"Equipment\":\"\",\"Wtypes:arraynum\":\"[]\",\"Atypes:arraynum\":\"[]\",\"EnemyRewards\":\"\",\"EXPRate:num\":\"1.00\",\"GoldRate:num\":\"1.00\",\"DropRate:num\":\"1.00\"}","List:arraystruct":"[\"{\\\"Name:str\\\":\\\"Fire\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[64]Fire\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[64]Fire and \\\\\\\\\\\\\\\\I[65]Ice.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[67]Water.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Flame\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"0.50\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"0.50\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"2.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Ice\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[65]Ice\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[65]Ice and \\\\\\\\\\\\\\\\I[69]Wind.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[64]Fire.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Frost\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"2.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"0.50\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"0.50\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Thunder\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[66]Thunder\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[66]Thunder and \\\\\\\\\\\\\\\\I[67]Water.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[68]Earth.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Electric\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"0.50\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"0.50\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"2.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Water\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[67]Water\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[67]Water and \\\\\\\\\\\\\\\\I[64]Fire.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[66]Thunder.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Aqua\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"0.50\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"2.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"0.50\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Earth\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[68]Earth\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[68]Earth and \\\\\\\\\\\\\\\\I[66]Thunder.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[69]Wind.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Stone\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"0.50\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"0.50\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"2.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Wind\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[69]Wind\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[69]Wind and \\\\\\\\\\\\\\\\I[68]Earth.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[65]Ice.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Air\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"2.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"0.50\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"0.50\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Light\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[70]Light\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[70]Light.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[71]Darkness.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Bright\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"0.50\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"2.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Darkness\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[71]Darkness\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[71]Darkness.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[70]Light.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Shadow\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"2.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"0.50\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\"]"}
 *
 * @param SubElement:struct
 * @text Sub Element Sets
 * @parent TraitSetSettings:struct
 * @type struct<TraitSetType>
 * @desc The settings for the Main Element Trait Set Type.
 * @default {"Name:str":"Sub-Element","Label:str":"Sub-Element","Visible:eval":"true","RandomizeActor:eval":"false","RandomizeEnemy:eval":"false","Default:struct":"{\"Name:str\":\"-\",\"Display:str\":\"-\",\"Description:json\":\"\\\"\\\"\",\"FmtText:str\":\"\",\"RandomValid:eval\":\"true\",\"RandomWeight:num\":\"8\",\"Traits\":\"\",\"ElementRate:struct\":\"{}\",\"Params:struct\":\"{}\",\"XParams:struct\":\"{}\",\"SParams:struct\":\"{}\",\"PassiveStates:arraynum\":\"[]\",\"Equipment\":\"\",\"Wtypes:arraynum\":\"[]\",\"Atypes:arraynum\":\"[]\",\"EnemyRewards\":\"\",\"EXPRate:num\":\"1.00\",\"GoldRate:num\":\"1.00\",\"DropRate:num\":\"1.00\"}","List:arraystruct":"[\"{\\\"Name:str\\\":\\\"Fire\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[64]Fire\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[64]Fire and \\\\\\\\\\\\\\\\I[65]Ice.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[67]Water.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Flame\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"0.75\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"0.75\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.50\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Ice\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[65]Ice\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[65]Ice and \\\\\\\\\\\\\\\\I[69]Wind.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[64]Fire.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Frost\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.50\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"0.75\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"0.75\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Thunder\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[66]Thunder\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[66]Thunder and \\\\\\\\\\\\\\\\I[67]Water.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[68]Earth.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Electric\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"0.75\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"0.75\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.50\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Water\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[67]Water\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[67]Water and \\\\\\\\\\\\\\\\I[64]Fire.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[66]Thunder.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Aqua\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"0.75\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.50\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"0.75\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Earth\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[68]Earth\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[68]Earth and \\\\\\\\\\\\\\\\I[66]Thunder.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[69]Wind.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Stone\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"0.75\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"0.75\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.50\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Wind\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[69]Wind\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[69]Wind and \\\\\\\\\\\\\\\\I[68]Earth.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[65]Ice.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Air\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.50\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"0.75\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"0.75\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Light\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[70]Light\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[70]Light.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[71]Darkness.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Bright\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"0.75\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.50\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Darkness\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[71]Darkness\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[71]Darkness.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[70]Light.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Shadow\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.50\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"0.75\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\"]"}
 *
 * @param Gender:struct
 * @text Gender Sets
 * @parent TraitSetSettings:struct
 * @type struct<TraitSetType>
 * @desc The settings for the Main Element Trait Set Type.
 * @default {"Name:str":"Gender","Label:str":"Gender","Visible:eval":"true","RandomizeActor:eval":"false","RandomizeEnemy:eval":"false","Default:struct":"{\"Name:str\":\"Unknown\",\"Display:str\":\"\\\\I[160]Unknown\",\"Description:json\":\"\\\"Uncertain to this unit's gender.\\\"\",\"FmtText:str\":\"\",\"RandomValid:eval\":\"false\",\"RandomWeight:num\":\"1\",\"Traits\":\"\",\"ElementRate:struct\":\"{}\",\"Params:struct\":\"{}\",\"XParams:struct\":\"{}\",\"SParams:struct\":\"{}\",\"PassiveStates:arraynum\":\"[]\",\"Equipment\":\"\",\"Wtypes:arraynum\":\"[]\",\"Atypes:arraynum\":\"[]\",\"EnemyRewards\":\"\",\"EXPRate:num\":\"1.00\",\"GoldRate:num\":\"1.00\",\"DropRate:num\":\"1.00\"}","List:arraystruct":"[\"{\\\"Name:str\\\":\\\"Male\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[165]Male\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has stronger physical attributes.\\\\\\\\nThis unit has weaker magical attributes.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"♂\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"50\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.05\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"0.95\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.05\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.05\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"0.95\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"0.95\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.05\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"0.95\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Female\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[162]Female\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has stronger magical attributes.\\\\\\\\nThis unit has weaker physical attributes.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"♀\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"50\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"0.95\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.05\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"0.95\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"0.95\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.05\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.05\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"0.95\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.05\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Both\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[84]Both\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has increased attributes.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"⚥\\\",\\\"RandomValid:eval\\\":\\\"false\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.10\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\"]"}
 *
 * @param Race:struct
 * @text Race Sets
 * @parent TraitSetSettings:struct
 * @type struct<TraitSetType>
 * @desc The settings for the Main Element Trait Set Type.
 * @default {"Name:str":"Race","Label:str":"Race","Visible:eval":"true","RandomizeActor:eval":"false","RandomizeEnemy:eval":"false","Default:struct":"{\"Name:str\":\"Uncategorized\",\"Display:str\":\"\\\\I[16]Uncategorized\",\"Description:json\":\"\\\"This race's attributes have not been determined.\\\"\",\"FmtText:str\":\"\",\"RandomValid:eval\":\"true\",\"RandomWeight:num\":\"1\",\"Traits\":\"\",\"ElementRate:struct\":\"{}\",\"Params:struct\":\"{}\",\"XParams:struct\":\"{}\",\"SParams:struct\":\"{}\",\"PassiveStates:arraynum\":\"[]\",\"Equipment\":\"\",\"Wtypes:arraynum\":\"[]\",\"Atypes:arraynum\":\"[]\",\"EnemyRewards\":\"\",\"EXPRate:num\":\"1.00\",\"GoldRate:num\":\"1.00\",\"DropRate:num\":\"1.00\"}","List:arraystruct":"[\"{\\\"Name:str\\\":\\\"Human\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[82]Human\\\",\\\"Description:json\\\":\\\"\\\\\\\"This race has neutral attributes.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Human\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"High Elf\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[101]High Elf\\\",\\\"Description:json\\\":\\\"\\\\\\\"High Elves have more MaxMP and less MaxHP.\\\\\\\\nHigh Elves can equip Canes and Magic Armor.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"High Elven\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[\\\\\\\"6\\\\\\\"]\\\",\\\"Atypes:arraynum\\\":\\\"[\\\\\\\"2\\\\\\\"]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Wood Elf\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[102]Wood Elf\\\",\\\"Description:json\\\":\\\"\\\\\\\"Wood Elves have more AGI and less DEF.\\\\\\\\nWood Elves can equip Bows and Crossbows.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Wood Elven\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[\\\\\\\"7\\\\\\\",\\\\\\\"8\\\\\\\"]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Dark Elf\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[71]Dark Elf\\\",\\\"Description:json\\\":\\\"\\\\\\\"Dark Elves have more ATK and less MAT.\\\\\\\\nDark Elves can equip Daggers and Swords.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Dark Elven\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[\\\\\\\"1\\\\\\\",\\\\\\\"2\\\\\\\"]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Dwarf\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[223]Dwarf\\\",\\\"Description:json\\\":\\\"\\\\\\\"Dwarves have more MaxHP and less AGI.\\\\\\\\nDwarves can equip Flails and Heavy Armor.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Dwarvin\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[\\\\\\\"3\\\\\\\"]\\\",\\\"Atypes:arraynum\\\":\\\"[\\\\\\\"4\\\\\\\"]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Gnome\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[140]Gnome\\\",\\\"Description:json\\\":\\\"\\\\\\\"Gnomes have more AGI and less DEF.\\\\\\\\nGnomes can equip Daggers and Light Armor.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Gnomish\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[\\\\\\\"1\\\\\\\"]\\\",\\\"Atypes:arraynum\\\":\\\"[\\\\\\\"3\\\\\\\"]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Hafling\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[142]Hafling\\\",\\\"Description:json\\\":\\\"\\\\\\\"Haflings have more LUK and less MaxMP.\\\\\\\\nHaflings can equip Sword and Small Shields.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Hafling\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.10\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[\\\\\\\"2\\\\\\\"]\\\",\\\"Atypes:arraynum\\\":\\\"[\\\\\\\"5\\\\\\\"]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Wolfkin\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[105]Wolfkin\\\",\\\"Description:json\\\":\\\"\\\\\\\"Wolfkin have more ATK and less MAT.\\\\\\\\nWolfkin can equip Claws and Gloves.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Wolfkin\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[\\\\\\\"10\\\\\\\",\\\\\\\"11\\\\\\\"]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Felyne\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[100]Felyne\\\",\\\"Description:json\\\":\\\"\\\\\\\"Felyne have more MAT and less ATK.\\\\\\\\nFelyne can equip Whips and Canes.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Felyne\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[\\\\\\\"5\\\\\\\",\\\\\\\"6\\\\\\\"]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Lizardman\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[99]Lizardman\\\",\\\"Description:json\\\":\\\"\\\\\\\"Lizardmen have more DEF and less LUK.\\\\\\\\nLizardmen can equip Axes and Spears.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Lizardman\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"0.90\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[\\\\\\\"4\\\\\\\",\\\\\\\"12\\\\\\\"]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\"]"}
 *
 * @param Nature:struct
 * @text Nature Sets
 * @parent TraitSetSettings:struct
 * @type struct<TraitSetType>
 * @desc The settings for the Main Element Trait Set Type.
 * @default {"Name:str":"Nature","Label:str":"Nature","Visible:eval":"true","RandomizeActor:eval":"false","RandomizeEnemy:eval":"false","Default:struct":"{\"Name:str\":\"Chill\",\"Display:str\":\"\\\\I[84]Chill\",\"Description:json\":\"\\\"This unit has neutral parameters.\\\"\",\"FmtText:str\":\"Chill\",\"RandomValid:eval\":\"false\",\"RandomWeight:num\":\"1\",\"Traits\":\"\",\"ElementRate:struct\":\"{}\",\"Params:struct\":\"{}\",\"XParams:struct\":\"{}\",\"SParams:struct\":\"{}\",\"PassiveStates:arraynum\":\"[]\",\"Equipment\":\"\",\"Wtypes:arraynum\":\"[]\",\"Atypes:arraynum\":\"[]\",\"EnemyRewards\":\"\",\"EXPRate:num\":\"1.00\",\"GoldRate:num\":\"1.00\",\"DropRate:num\":\"1.00\"}","List:arraystruct":"[\"{\\\"Name:str\\\":\\\"Hardy\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[34]\\\\\\\\I[50]Hardy\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has neutral parameters.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Hardy\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Lonely\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[34]\\\\\\\\I[51]Lonely\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more ATK and less DEF.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Lonely\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Adamant\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[34]\\\\\\\\I[52]Adamant\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more ATK and less MAT.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Adamant\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Naughty\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[34]\\\\\\\\I[53]Naughty\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more ATK and less MDF.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Naughty\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Brave\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[34]\\\\\\\\I[54]Brave\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more ATK and less AGI.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Brave\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Bold\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[35]\\\\\\\\I[50]Bold\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more DEF and less ATK.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Bold\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Docile\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[35]\\\\\\\\I[51]Docile\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has neutral parameters.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Docile\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Impish\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[35]\\\\\\\\I[52]Impish\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more DEF and less MAT.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Impish\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Lax\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[35]\\\\\\\\I[53]Lax\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more DEF and less MDF.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Lax\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Relaxed\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[35]\\\\\\\\I[54]Relaxed\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more DEF and less AGI.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Relaxed\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Modest\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[36]\\\\\\\\I[50]Modest\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more MAT and less ATK.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Modest\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Mild\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[36]\\\\\\\\I[51]Mild\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more MAT and less DEF.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Mild\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Bashful\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[36]\\\\\\\\I[52]Bashful\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has neutral parameters.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Bashful\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Rash\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[36]\\\\\\\\I[53]Rash\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more MAT and less MDF.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Rash\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Quiet\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[36]\\\\\\\\I[54]Quiet\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more MAT and less AGI.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Quiet\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Calm\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[37]\\\\\\\\I[50]Calm\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more MDF and less ATK.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Calm\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Gentle\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[37]\\\\\\\\I[51]Gentle\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more MDF and less DEF.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Gentle\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Careful\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[37]\\\\\\\\I[52]Careful\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more MDF and less MAT.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Careful\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Quirky\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[37]\\\\\\\\I[53]Quirky\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has neutral parameters.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Quirky\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Sassy\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[37]\\\\\\\\I[54]Sassy\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more MDF and less AGI.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Sassy\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Timid\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[38]\\\\\\\\I[50]Timid\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more AGI and less ATK.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Timid\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Hasty\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[38]\\\\\\\\I[51]Hasty\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more AGI and less DEF.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Hasty\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Jolly\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[38]\\\\\\\\I[52]Jolly\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more AGI and less MAT.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Jolly\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Naive\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[38]\\\\\\\\I[53]Naive\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has more AGI and less MDF.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Naive\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Serious\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[38]\\\\\\\\I[54]Serious\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has neutral parameters.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Serious\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\"]"}
 *
 * @param Alignment:struct
 * @text Alignment Sets
 * @parent TraitSetSettings:struct
 * @type struct<TraitSetType>
 * @desc The settings for the Main Element Trait Set Type.
 * @default {"Name:str":"Alignment","Label:str":"Alignment","Visible:eval":"true","RandomizeActor:eval":"false","RandomizeEnemy:eval":"false","Default:struct":"{\"Name:str\":\"Neutral\",\"Display:str\":\"\\\\I[160]Neutral\",\"Description:json\":\"\\\"This unit's alignment is completely neutral.\\\"\",\"FmtText:str\":\"Neutral\",\"RandomValid:eval\":\"true\",\"RandomWeight:num\":\"1\",\"Traits\":\"\",\"ElementRate:struct\":\"{}\",\"Params:struct\":\"{}\",\"XParams:struct\":\"{}\",\"SParams:struct\":\"{}\",\"PassiveStates:arraynum\":\"[]\",\"Equipment\":\"\",\"Wtypes:arraynum\":\"[]\",\"Atypes:arraynum\":\"[]\",\"EnemyRewards\":\"\",\"EXPRate:num\":\"1.00\",\"GoldRate:num\":\"1.00\",\"DropRate:num\":\"1.00\"}","List:arraystruct":"[\"{\\\"Name:str\\\":\\\"Lawful Good\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[70]Lawful Good\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[70]Light.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[71]Darkness.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Good\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"0.70\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.30\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Neutral Good\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[70]Neutral Good\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[70]Light.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[71]Darkness.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Good\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"0.80\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.20\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Chaotic Good\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[70]Chaotic Good\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[70]Light.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[71]Darkness.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Good\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Lawful Neutral\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[160]Lawful Neutral\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[67]Water, \\\\\\\\\\\\\\\\I[68]Earth, \\\\\\\\\\\\\\\\I[69]Wind.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[64]Fire, \\\\\\\\\\\\\\\\I[65]Ice, \\\\\\\\\\\\\\\\I[66]Thunder.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Neutral\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Chaotic Neutral\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[160]Chaotic Neutral\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[64]Fire, \\\\\\\\\\\\\\\\I[65]Ice, \\\\\\\\\\\\\\\\I[66]Thunder.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[67]Water, \\\\\\\\\\\\\\\\I[68]Earth, \\\\\\\\\\\\\\\\I[69]Wind.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Neutral\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Lawful Evil\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[71]Lawful Evil\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[71]Darkness.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[70]Light.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Evil\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.30\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"0.70\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Neutral Evil\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[71]Neutral Evil\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[71]Darkness.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[70]Light.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Evil\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.20\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"0.80\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Chaotic Evil\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[71]Chaotic Evil\\\",\\\"Description:json\\\":\\\"\\\\\\\"Strong against \\\\\\\\\\\\\\\\I[71]Darkness.\\\\\\\\nWeak against \\\\\\\\\\\\\\\\I[70]Light.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Evil\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\"]"}
 *
 * @param Blessing:struct
 * @text Blessing Sets
 * @parent TraitSetSettings:struct
 * @type struct<TraitSetType>
 * @desc The settings for the Main Element Trait Set Type.
 * @default {"Name:str":"Blessing","Label:str":"Blessing","Visible:eval":"true","RandomizeActor:eval":"false","RandomizeEnemy:eval":"false","Default:struct":"{\"Name:str\":\"No Blessing\",\"Display:str\":\"\\\\I[160]No Blessing\",\"Description:json\":\"\\\"This unit has not received a blessing.\\\"\",\"FmtText:str\":\"\",\"RandomValid:eval\":\"true\",\"RandomWeight:num\":\"6\",\"Traits\":\"\",\"ElementRate:struct\":\"{}\",\"Params:struct\":\"{}\",\"XParams:struct\":\"{}\",\"SParams:struct\":\"{}\",\"PassiveStates:arraynum\":\"[]\",\"Equipment\":\"\",\"Wtypes:arraynum\":\"[]\",\"Atypes:arraynum\":\"[]\",\"EnemyRewards\":\"\",\"EXPRate:num\":\"1.00\",\"GoldRate:num\":\"1.00\",\"DropRate:num\":\"1.00\"}","List:arraystruct":"[\"{\\\"Name:str\\\":\\\"Dextrous\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[164]Dextrous\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has increased HIT.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Dextrous\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{\\\\\\\"XParam0:num\\\\\\\":\\\\\\\"0.20\\\\\\\",\\\\\\\"XParam1:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam2:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam3:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam4:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam5:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam6:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam7:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam8:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam9:num\\\\\\\":\\\\\\\"0.00\\\\\\\"}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Elusive\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[164]Elusive\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has increased EVA.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Elusive\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{\\\\\\\"XParam0:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam1:num\\\\\\\":\\\\\\\"0.20\\\\\\\",\\\\\\\"XParam2:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam3:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam4:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam5:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam6:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam7:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam8:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam9:num\\\\\\\":\\\\\\\"0.00\\\\\\\"}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Impact\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[164]Impact\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has increased CRI.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Impactful\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{\\\\\\\"XParam0:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam1:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam2:num\\\\\\\":\\\\\\\"0.20\\\\\\\",\\\\\\\"XParam3:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam4:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam5:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam6:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam7:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam8:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam9:num\\\\\\\":\\\\\\\"0.00\\\\\\\"}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Healthy\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[164]Healthy\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has innate HP Regeneration.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Healthy\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{\\\\\\\"XParam0:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam1:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam2:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam3:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam4:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam5:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam6:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam7:num\\\\\\\":\\\\\\\"0.05\\\\\\\",\\\\\\\"XParam8:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam9:num\\\\\\\":\\\\\\\"0.00\\\\\\\"}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Focused\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[164]Focused\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has innate MP Regeneration.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Focused\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{\\\\\\\"XParam0:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam1:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam2:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam3:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam4:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam5:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam6:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam7:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam8:num\\\\\\\":\\\\\\\"0.05\\\\\\\",\\\\\\\"XParam9:num\\\\\\\":\\\\\\\"0.00\\\\\\\"}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Energetic\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[164]Energetic\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has innate TP Regeneration.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Energetic\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{\\\\\\\"XParam0:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam1:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam2:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam3:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam4:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam5:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam6:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam7:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam8:num\\\\\\\":\\\\\\\"0.05\\\\\\\",\\\\\\\"XParam9:num\\\\\\\":\\\\\\\"0.00\\\\\\\"}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\"]"}
 *
 * @param Curse:struct
 * @text Curse Sets
 * @parent TraitSetSettings:struct
 * @type struct<TraitSetType>
 * @desc The settings for the Main Element Trait Set Type.
 * @default {"Name:str":"Curse","Label:str":"Curse","Visible:eval":"true","RandomizeActor:eval":"false","RandomizeEnemy:eval":"false","Default:struct":"{\"Name:str\":\"No Curse\",\"Display:str\":\"\\\\I[160]No Curse\",\"Description:json\":\"\\\"This unit has not been cursed.\\\"\",\"FmtText:str\":\"\",\"RandomValid:eval\":\"true\",\"RandomWeight:num\":\"6\",\"Traits\":\"\",\"ElementRate:struct\":\"{}\",\"Params:struct\":\"{}\",\"XParams:struct\":\"{}\",\"SParams:struct\":\"{}\",\"PassiveStates:arraynum\":\"[]\",\"Equipment\":\"\",\"Wtypes:arraynum\":\"[]\",\"Atypes:arraynum\":\"[]\",\"EnemyRewards\":\"\",\"EXPRate:num\":\"1.00\",\"GoldRate:num\":\"1.00\",\"DropRate:num\":\"1.00\"}","List:arraystruct":"[\"{\\\"Name:str\\\":\\\"Clumsy\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[170]Clumsy\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has less HIT.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Clumsy\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{\\\\\\\"XParam0:num\\\\\\\":\\\\\\\"-0.10\\\\\\\",\\\\\\\"XParam1:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam2:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam3:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam4:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam5:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam6:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam7:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam8:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam9:num\\\\\\\":\\\\\\\"0.00\\\\\\\"}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Dazed\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[170]Dazed\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has less EVA.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Dazed\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{\\\\\\\"XParam0:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam1:num\\\\\\\":\\\\\\\"-0.10\\\\\\\",\\\\\\\"XParam2:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam3:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam4:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam5:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam6:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam7:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam8:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam9:num\\\\\\\":\\\\\\\"0.00\\\\\\\"}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Fitful\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[170]Fitful\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has less CRI.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Fitful\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{\\\\\\\"XParam0:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam1:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam2:num\\\\\\\":\\\\\\\"-0.10\\\\\\\",\\\\\\\"XParam3:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam4:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam5:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam6:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam7:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam8:num\\\\\\\":\\\\\\\"0.00\\\\\\\",\\\\\\\"XParam9:num\\\\\\\":\\\\\\\"0.00\\\\\\\"}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Drained\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[170]Drained\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit receives less healing.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Drained\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{\\\\\\\"SParam0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam2:num\\\\\\\":\\\\\\\"0.80\\\\\\\",\\\\\\\"SParam3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam9:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Inefficient\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[170]Inefficient\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit uses more MP.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Inefficient\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{\\\\\\\"SParam0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam4:num\\\\\\\":\\\\\\\"1.20\\\\\\\",\\\\\\\"SParam5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam9:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Unmotivated\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[170]Unmotivated\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit gaines less TP.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Unmotivated\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{\\\\\\\"SParam0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam5:num\\\\\\\":\\\\\\\"0.80\\\\\\\",\\\\\\\"SParam6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"SParam9:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\"]"}
 *
 * @param Zodiac:struct
 * @text Zodiac Sets
 * @parent TraitSetSettings:struct
 * @type struct<TraitSetType>
 * @desc The settings for the Main Element Trait Set Type.
 * @default {"Name:str":"Zodiac","Label:str":"Zodiac","Visible:eval":"true","RandomizeActor:eval":"false","RandomizeEnemy:eval":"false","Default:struct":"{\"Name:str\":\"Unknown\",\"Display:str\":\"\\\\I[160]Unknown\",\"Description:json\":\"\\\"This unit's Zodiac is unknown.\\\"\",\"FmtText:str\":\"\",\"RandomValid:eval\":\"false\",\"RandomWeight:num\":\"1\",\"Traits\":\"\",\"ElementRate:struct\":\"{}\",\"Params:struct\":\"{}\",\"XParams:struct\":\"{}\",\"SParams:struct\":\"{}\",\"PassiveStates:arraynum\":\"[]\",\"Equipment\":\"\",\"Wtypes:arraynum\":\"[]\",\"Atypes:arraynum\":\"[]\",\"EnemyRewards\":\"\",\"EXPRate:num\":\"1.00\",\"GoldRate:num\":\"1.00\",\"DropRate:num\":\"1.00\"}","List:arraystruct":"[\"{\\\"Name:str\\\":\\\"Aries\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[88]Aries\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has a slight increase to ATK.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"♈\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"10\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.05\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Taurus\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[88]Taurus\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has a slight resistance to \\\\\\\\\\\\\\\\I[68]Earth.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"♋\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"10\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"0.95\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Gemini\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[88]Gemini\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has a slight increase to AGI.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"♊\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"10\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.05\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Cancer\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[88]Cancer\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has a slight increase to DEF.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"♋\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"10\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.05\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Leo\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[88]Leo\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has a slight resistance to \\\\\\\\\\\\\\\\I[64]Fire.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"♌\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"10\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"0.95\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Virgo\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[88]Virgo\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has a slight increase to MAT.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"♍\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"10\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.05\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Libra\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[88]Libra\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has a slight increase to MDF.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"♎\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"10\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.05\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Scorpio\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[88]Scorpio\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has a slight resistance to \\\\\\\\\\\\\\\\I[66]Thunder.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"♏\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"10\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"0.95\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Sagittarius\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[88]Sagittarius\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has a slight increase to LUK.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"♐\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"10\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.05\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Capricon\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[88]Capricon\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has a slight resistance to \\\\\\\\\\\\\\\\I[69]Wind.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"♑\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"10\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"0.95\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Aquarius\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[88]Aquarius\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has a slight resistance to \\\\\\\\\\\\\\\\I[67]Water.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"♒\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"10\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"0.95\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Pisces\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[88]Pisces\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has a slight resistance to \\\\\\\\\\\\\\\\I[65]Ice.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"♓\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"10\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{\\\\\\\"Element1:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element2:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element3:num\\\\\\\":\\\\\\\"0.95\\\\\\\",\\\\\\\"Element4:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element5:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element6:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element7:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element8:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element9:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element10:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element11:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element12:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element13:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element14:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element15:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element16:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element17:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element18:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element19:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element20:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element21:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element22:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element23:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element24:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element25:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element26:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element27:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element28:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element29:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element30:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element31:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element32:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element33:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element34:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element35:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element36:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element37:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element38:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element39:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element40:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element41:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element42:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element43:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element44:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element45:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element46:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element47:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element48:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element49:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element50:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element51:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element52:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element53:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element54:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element55:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element56:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element57:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element58:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element59:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element60:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element61:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element62:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element63:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element64:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element65:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element66:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element67:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element68:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element69:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element70:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element71:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element72:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element73:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element74:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element75:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element76:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element77:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element78:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element79:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element80:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element81:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element82:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element83:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element84:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element85:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element86:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element87:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element88:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element89:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element90:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element91:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element92:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element93:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element94:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element95:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element96:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element97:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element98:num\\\\\\\":\\\\\\\"1.00\\\\\\\",\\\\\\\"Element99:num\\\\\\\":\\\\\\\"1.00\\\\\\\"}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Ophiuchus\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[88]Ophiuchus\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit is the rare Ophiuchus zodiac.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"⛎\\\",\\\"RandomValid:eval\\\":\\\"false\\\",\\\"RandomWeight:num\\\":\\\"1\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.00\\\",\\\"GoldRate:num\\\":\\\"1.00\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\"]"}
 *
 * @param Variant:struct
 * @text Variant Sets
 * @parent TraitSetSettings:struct
 * @type struct<TraitSetType>
 * @desc The settings for the Main Element Trait Set Type.
 * @default {"Name:str":"Variant","Label:str":"Variant","Visible:eval":"true","RandomizeActor:eval":"false","RandomizeEnemy:eval":"false","Default:struct":"{\"Name:str\":\"Normal\",\"Display:str\":\"\\\\I[160]Normal\",\"Description:json\":\"\\\"This is your average unit.\\\"\",\"FmtText:str\":\"\",\"RandomValid:eval\":\"true\",\"RandomWeight:num\":\"100\",\"Traits\":\"\",\"ElementRate:struct\":\"{}\",\"Params:struct\":\"{}\",\"XParams:struct\":\"{}\",\"SParams:struct\":\"{}\",\"PassiveStates:arraynum\":\"[]\",\"Equipment\":\"\",\"Wtypes:arraynum\":\"[]\",\"Atypes:arraynum\":\"[]\",\"EnemyRewards\":\"\",\"EXPRate:num\":\"1.00\",\"GoldRate:num\":\"1.00\",\"DropRate:num\":\"1.00\"}","List:arraystruct":"[\"{\\\"Name:str\\\":\\\"Mighty\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[73]Mighty\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has increased attributes.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Mighty\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"5\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.30\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.30\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.30\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.30\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.30\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.30\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.30\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.30\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.30\\\",\\\"GoldRate:num\\\":\\\"1.50\\\",\\\"DropRate:num\\\":\\\"2.00\\\"}\",\"{\\\"Name:str\\\":\\\"Major\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[73]Major\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has increased attributes.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Major\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"10\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.20\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.20\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.20\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.20\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.20\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.20\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.20\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.20\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.20\\\",\\\"GoldRate:num\\\":\\\"1.25\\\",\\\"DropRate:num\\\":\\\"1.50\\\"}\",\"{\\\"Name:str\\\":\\\"Greater\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[73]Greater\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has increased attributes.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Greater\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"20\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"1.10\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"1.10\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"1.10\\\",\\\"GoldRate:num\\\":\\\"1.15\\\",\\\"DropRate:num\\\":\\\"1.25\\\"}\",\"{\\\"Name:str\\\":\\\"Lesser\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[73]Lesser\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has decreased attributes.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Lesser\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"20\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"0.90\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"0.90\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"0.90\\\",\\\"GoldRate:num\\\":\\\"0.95\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Minor\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[73]Minor\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has decreased attributes.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Minor\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"10\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"0.80\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"0.80\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"0.80\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"0.80\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"0.80\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"0.80\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"0.80\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"0.80\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"0.80\\\",\\\"GoldRate:num\\\":\\\"0.90\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\",\"{\\\"Name:str\\\":\\\"Puny\\\",\\\"Display:str\\\":\\\"\\\\\\\\I[73]Puny\\\",\\\"Description:json\\\":\\\"\\\\\\\"This unit has decreased attributes.\\\\\\\"\\\",\\\"FmtText:str\\\":\\\"Puny\\\",\\\"RandomValid:eval\\\":\\\"true\\\",\\\"RandomWeight:num\\\":\\\"5\\\",\\\"Traits\\\":\\\"\\\",\\\"ElementRate:struct\\\":\\\"{}\\\",\\\"Params:struct\\\":\\\"{\\\\\\\"Param0:num\\\\\\\":\\\\\\\"0.70\\\\\\\",\\\\\\\"Param1:num\\\\\\\":\\\\\\\"0.70\\\\\\\",\\\\\\\"Param2:num\\\\\\\":\\\\\\\"0.70\\\\\\\",\\\\\\\"Param3:num\\\\\\\":\\\\\\\"0.70\\\\\\\",\\\\\\\"Param4:num\\\\\\\":\\\\\\\"0.70\\\\\\\",\\\\\\\"Param5:num\\\\\\\":\\\\\\\"0.70\\\\\\\",\\\\\\\"Param6:num\\\\\\\":\\\\\\\"0.70\\\\\\\",\\\\\\\"Param7:num\\\\\\\":\\\\\\\"0.70\\\\\\\"}\\\",\\\"XParams:struct\\\":\\\"{}\\\",\\\"SParams:struct\\\":\\\"{}\\\",\\\"PassiveStates:arraynum\\\":\\\"[]\\\",\\\"Equipment\\\":\\\"\\\",\\\"Wtypes:arraynum\\\":\\\"[]\\\",\\\"Atypes:arraynum\\\":\\\"[]\\\",\\\"EnemyRewards\\\":\\\"\\\",\\\"EXPRate:num\\\":\\\"0.70\\\",\\\"GoldRate:num\\\":\\\"0.85\\\",\\\"DropRate:num\\\":\\\"1.00\\\"}\"]"}
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
 * Element Rulings
 * ----------------------------------------------------------------------------
 */
/*~struct~ElementRules:
 *
 * @param Rulings
 *
 * @param MultiRule:str
 * @text Multi-Element Ruling
 * @parent Rulings
 * @type select
 * @option Maximum (largest rate of all elements)
 * @value max
 * @option Minimum (smallest rate of all elements)
 * @value min
 * @option Multiplicative (product of all elements used)
 * @value multiply
 * @option Additive (sum of all elements used)
 * @value additive
 * @option Average (of all the elements used)
 * @value average
 * @desc Ruling on how to calculate element rate when there are 
 * multiple elements used for damage calculation.
 * @default multiply
 *
 * @param RuleMaxCalcJS:func
 * @text JS: Maximum Rate
 * @parent Rulings
 * @type note
 * @desc Determine how maximum element rate is calculated.
 * @default "// Declare Constants\nconst target = arguments[0];\nconst elements = arguments[1];\nconst action = this;\n\n// Determine Return Value\nconst absorbed = action.isRecover() ? [] : target.getAbsorbedElements();\nlet max = 0;\nfor (const elementId of elements) {\n    const sign = absorbed.includes(elementId) ? -1 : 1;\n    max = Math.max(max, target.elementRate(elementId) * sign);\n}\nreturn max;"
 *
 * @param RuleMinCalcJS:func
 * @text JS: Minimum Rate
 * @parent Rulings
 * @type note
 * @desc Determine how minimum element rate is calculated.
 * @default "// Declare Constants\nconst target = arguments[0];\nconst elements = arguments[1];\nconst action = this;\n\n// Determine Return Value\nconst absorbed = action.isRecover() ? [] : target.getAbsorbedElements();\nlet min = 0;\nfor (const elementId of elements) {\n    const sign = absorbed.includes(elementId) ? -1 : 1;\n    min = Math.min(min, target.elementRate(elementId) * sign);\n}\nreturn min;"
 *
 * @param RuleMultiplyCalcJS:func
 * @text JS: Multiply Rate
 * @parent Rulings
 * @type note
 * @desc Determine how a multiplied element rate is calculated.
 * @default "// Declare Constants\nconst target = arguments[0];\nconst elements = arguments[1];\nconst action = this;\n\n// Determine Return Value\nconst absorbed = action.isRecover() ? [] : target.getAbsorbedElements();\nlet rate = 1;\nlet sign = 1;\nfor (const elementId of elements) {\n    if (absorbed.includes(elementId)) sign = -1;\n    rate *= target.elementRate(elementId);\n}\nreturn rate * sign;"
 *
 * @param RuleAdditiveCalcJS:func
 * @text JS: Additive Rate
 * @parent Rulings
 * @type note
 * @desc Determine how an additive element rate is calculated.
 * @default "// Declare Constants\nconst target = arguments[0];\nconst elements = arguments[1];\nconst action = this;\n\n// Determine Return Value\nconst absorbed = action.isRecover() ? [] : target.getAbsorbedElements();\nlet rate = 0;\nfor (const elementId of elements) {\n    const sign = absorbed.includes(elementId) ? -1 : 1;\n    rate += target.elementRate(elementId) * sign;\n}\nreturn rate;"
 *
 * @param RuleAverageCalcJS:func
 * @text JS: Average Rate
 * @parent Rulings
 * @type note
 * @desc Determine how an average element rate is calculated.
 * @default "// Declare Constants\nconst target = arguments[0];\nconst elements = arguments[1];\nconst action = this;\n\n// Determine Return Value\nconst rate = action.elementsRateSum(target, elements);\nreturn rate / elements.length;"
 *
 * @param Formulas
 *
 * @param ReceivedRateJS:func
 * @text JS: Received Rate
 * @parent Formulas
 * @type note
 * @desc Determine how the element rate for the receiving target is calculated.
 * @default "// Declare Constants\nconst elementId = arguments[0];\nconst target = this;\nconst base = 1;\nconst plus = target.getReceiveElementPlus(elementId);\nconst rate = target.getReceiveElementRate(elementId);\nconst flat = target.getReceiveElementFlat(elementId);\n\n// Determine Return Value\nreturn Math.max(0, (base + plus) * rate + flat);"
 *
 * @param FinalizeRateJS:func
 * @text JS: Finalize Rate
 * @parent Formulas
 * @type note
 * @desc Determine how the finalized element rate before damage is calculated.
 * @default "// Declare Constants\nconst target = arguments[0];\nconst action = this;\nconst elements = action.elements();\nconst targetRate = action.calcTargetElementRate(target, elements);\nconst sign = targetRate >= 0 ? 1 : -1;\nconst base = Math.abs(targetRate);\nconst plus = action.calcUserElementDamagePlus(target, elements);\nconst rate = action.calcUserElementDamageRate(target, elements);\nconst flat = action.calcUserElementDamageFlat(target, elements);\n\n// Determine Return Value\nreturn sign * Math.max((base + plus) * rate + flat, 0);;"
 *
 */
/* ----------------------------------------------------------------------------
 * Status Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusMenu:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Status Menu Layout provided by this plugin?
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Top Category
 * @value upper/top
 * @option Upper Help, Bottom Category
 * @value upper/bottom
 * @option Lower Help, Top Category
 * @value lower/top
 * @option Lower Help, Bottom Category
 * @value lower/bottom
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/top
 *
 * @param TraitDescriptionFontSize:num
 * @text Trait Set Font Size
 * @parent General
 * @type number
 * @min 1
 * @desc The font size used for Trait Set Descriptions.
 * @default 18
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param Command
 * @text Category Window
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Category Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Category Window.
 * @default center
 *
 * @param Parameters
 * @text Displayed Parameters
 * 
 * @param Col1:arraystr
 * @text Column 1
 * @parent Parameters
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
 * @desc A list of the parameters that will be displayed in column 1.
 * @default ["MaxHP","MaxMP","ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param Col2:arraystr
 * @text Column 2
 * @parent Parameters
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
 * @desc A list of the parameters that will be displayed in column 2.
 * @default ["HIT","EVA","CRI","CEV","MEV","MRF","CNT","HRG","MRG","TRG"]
 *
 * @param Col3:arraystr
 * @text Column 3
 * @parent Parameters
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
 * @desc A list of the parameters that will be displayed in column 3.
 * @default ["TGR","GRD","REC","PHA","MCR","TCR","PDR","MDR","FDR","EXR"]
 *
 * @param Elements
 *
 * @param ExcludeElements:arraynum
 * @text Excluded Elements
 * @parent Elements
 * @type number[]
 * @min 1
 * @max 99
 * @desc These element ID's are excluded from the Status Menu list.
 * @default []
 *
 * @param ElementsCol1:arraynum
 * @text IDs: Column 1
 * @parent Elements
 * @type number[]
 * @min 1
 * @max 99
 * @desc The list of element ID's to show in column 1.
 * If neither column has ID's, list all elements.
 * @default []
 *
 * @param ElementsCol2:arraynum
 * @text IDs: Column 2
 * @parent Elements
 * @type number[]
 * @min 1
 * @max 99
 * @desc The list of element ID's to show in column 2.
 * If neither column has ID's, list all elements.
 * @default []
 *
 * @param Vocabulary
 *
 * @param VocabBiography:str
 * @text Biography
 * @parent Vocabulary
 * @desc Vocabulary for 'Biography'.
 * @default Biography
 *
 * @param VocabDmgAbsorb:str
 * @text Damage: Absorb
 * @parent Vocabulary
 * @desc Vocabulary for 'Damage: Absorb'.
 * @default Absorbs %1%
 *
 * @param VocabDmgReceive:str
 * @text Damage: Received
 * @parent Vocabulary
 * @desc Vocabulary for 'Damage: Received'.
 * @default Elemental Resistance
 *
 * @param VocabDmgDealt:str
 * @text Damage: Dealt
 * @parent Vocabulary
 * @desc Vocabulary for 'Damage: Dealt'.
 * @default Bonus Damage
 *
 * @param VocabStype:str
 * @text Skill Types
 * @parent Vocabulary
 * @desc Vocabulary for 'Skill Types'.
 * @default Skill Types
 *
 * @param VocabWtype:str
 * @text Weapon Types
 * @parent Vocabulary
 * @desc Vocabulary for 'Weapon Types'.
 * @default Weapon Types
 *
 * @param VocabAtype:str
 * @text Armor Types
 * @parent Vocabulary
 * @desc Vocabulary for 'Armor Types'.
 * @default Armor Types
 *
 */
/* ----------------------------------------------------------------------------
 * Status Menu Categories
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusCategory:
 *
 * @param Symbol:str
 * @text Symbol
 * @desc Symbol used for this category.
 * @default Symbol
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this category.
 * Use 0 for no icon.
 * @default 0
 *
 * @param Text:str
 * @text Text
 * @desc Text name used for this category.
 * @default Untitled
 *
 * @param DrawJS:func
 * @text JS: Draw Data
 * @type note
 * @desc Code used to determine what appears in the data window.
 * @default ""
 *
 */
/* ----------------------------------------------------------------------------
 * General Trait Set Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TraitSetSettings:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable Trait Sets?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable Trait Sets? This must be enabled for Trait Sets to
 * have any kind of effect on battlers.
 * @default false
 *
 * @param EnemyNameFmt:str
 * @text Enemy Name Format
 * @parent General
 * @type combo
 * @option [name] [letter]
 * @option [element] [name] [letter]
 * @option [element] [subelement] [name] [letter]
 * @option [name][gender] [letter]
 * @option [race] [name][gender] [letter]
 * @option [alignment] [name][gender] [letter]
 * @option [blessing] [name][gender] [letter]
 * @option [curse] [name][gender] [letter]
 * @option [name][gender]([zodiac]) [letter]
 * @option [variant] [name][gender] [letter]
 * @option [variant] [nature] [name][gender] [letter]
 * @option [variant] [nature] [element] [name][gender] [letter]
 * @option [alignment] [variant] [nature] [element] [name][gender] [letter]
 * @option [alignment] [variant] [nature] [blessing] [element] [name][gender] [letter]
 * @option [alignment] [variant] [nature] [curse] [element] [name][gender] [letter]
 * @desc Enemy name format on how Trait Sets affect how enemy names
 * appear. Choose from the list or customize it.
 * @default [variant] [name][gender] [letter]
 *
 * @param TraitColumns
 * @text Trait Columns
 *
 * @param TraitCol1:arraystr
 * @text Column 1 Traits
 * @parent TraitColumns
 * @type select[]
 * @option Main Element
 * @value Element
 * @option Sub Element
 * @value SubElement
 * @option Gender
 * @value Gender
 * @option Race
 * @value Race
 * @option Nature
 * @value Nature
 * @option Alignment
 * @value Alignment
 * @option Blessing
 * @value Blessing
 * @option Curse
 * @value Curse
 * @option Zodiac
 * @value Zodiac
 * @option Variant
 * @value Variant
 * @desc List of the traits that appear in this column.
 * Used by default in the Properties category.
 * @default ["Gender","Nature","Blessing","Zodiac"]
 *
 * @param TraitCol2:arraystr
 * @text Column 2 Traits
 * @parent TraitColumns
 * @type select[]
 * @option Main Element
 * @value Element
 * @option Sub Element
 * @value SubElement
 * @option Gender
 * @value Gender
 * @option Race
 * @value Race
 * @option Nature
 * @value Nature
 * @option Alignment
 * @value Alignment
 * @option Blessing
 * @value Blessing
 * @option Curse
 * @value Curse
 * @option Zodiac
 * @value Zodiac
 * @option Variant
 * @value Variant
 * @desc List of the traits that appear in this column.
 * Used by default in the Properties category.
 * @default ["Race","Alignment","Curse","Variant"]
 *
 */
/* ----------------------------------------------------------------------------
 * Trait Set Type Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TraitSetType:
 *
 * @param Name:str
 * @text Name
 * @desc Name of this Trait Set Type.
 * @default Untitled
 *
 * @param Label:str
 * @text Label
 * @desc How this Trait Set Type is labeled in the Status Menu.
 * Text codes are allowed.
 * @default Untitled
 *
 * @param Visible:eval
 * @text Visible
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Is this Trait Set Type visible in the Status Menu?
 * @default true
 *
 * @param RandomizeActor:eval
 * @text Randomize for Actors?
 * @type boolean
 * @on Randomize
 * @off Default
 * @desc On actor creation, obtain a random trait from this list?
 * @default false
 *
 * @param RandomizeEnemy:eval
 * @text Randomize for Enemies?
 * @type boolean
 * @on Randomize
 * @off Default
 * @desc On enemy creation, obtain a random trait from this list?
 * @default false
 *
 * @param Default:struct
 * @text Default Trait Set
 * @type struct<TraitSet>
 * @desc If no Trait Set is declared by notetags, 
 * use this Trait Set as a default.
 * @default {}
 *
 * @param List:arraystruct
 * @text Trait Set List
 * @type struct<TraitSet>[]
 * @desc A list of all the Trait Sets available to this 
 * Trait Set Type.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Trait Set Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TraitSet:
 *
 * @param Name:str
 * @text Name
 * @desc Name of this Trait Set. Also used as a reference key
 * @default Untitled
 *
 * @param Display:str
 * @text Display Text
 * @desc How the Trait Set is displayed in game when selected.
 * Text codes are allowed.
 * @default Untitled
 *
 * @param Description:json
 * @text Help Description
 * @type note
 * @desc Help description for this Trait Set if required.
 * @default ""
 *
 * @param FmtText:str
 * @text Format Text
 * @desc The text that's added onto an enemy's name if this
 * Trait Set is used.
 * @default 
 *
 * @param RandomValid:eval
 * @text Valid for Random?
 * @type boolean
 * @on Valid
 * @off Ignore
 * @desc Is this Trait Set valid for random selection?
 * @default true
 *
 * @param RandomWeight:num
 * @text Random Weight
 * @type number
 * @desc Default weight of this Trait Set if valid for random.
 * @default 1
 *
 * @param Traits
 *
 * @param ElementRate:struct
 * @text Element Rates
 * @parent Traits
 * @type struct<ElementChanges>
 * @desc The elemental damage rates received for this Trait Set.
 * The modifiers are multiplicative.
 * @default {}
 *
 * @param Params:struct
 * @text Basic Parameters
 * @parent Traits
 * @type struct<Params>
 * @desc The basic parameter rates altered by this Trait set.
 * The modifiers are multiplicative.
 * @default {}
 *
 * @param XParams:struct
 * @text X Parameters
 * @parent Traits
 * @type struct<XParams>
 * @desc The X parameter rates altered by this Trait set.
 * The modifiers are additive.
 * @default {}
 *
 * @param SParams:struct
 * @text S Parameters
 * @parent Traits
 * @type struct<SParams>
 * @desc The S parameter rates altered by this Trait set.
 * The modifiers are multiplicative.
 * @default {}
 *
 * @param PassiveStates:arraynum
 * @text Passive States
 * @parent Traits
 * @type state[]
 * @desc Passive states that are applied to this Trait Set.
 * Requires VisuMZ_1_SkillsStatesCore.
 * @default []
 *
 * @param Equipment
 *
 * @param Wtypes:arraynum
 * @text Weapon Types
 * @parent Equipment
 * @type number[]
 * @min 1
 * @max 99
 * @desc Additional weapon types usable by this Trait Set.
 * @default []
 *
 * @param Atypes:arraynum
 * @text Armor Types
 * @parent Equipment
 * @type number[]
 * @min 1
 * @max 99
 * @desc Additional armor types usable by this Trait Set.
 * @default []
 *
 * @param EnemyRewards
 * @text Enemy Rewards
 *
 * @param EXPRate:num
 * @text EXP Rate
 * @parent EnemyRewards
 * @desc EXP rate given by a defeated enemy with this Trait Set.
 * @default 1.00
 *
 * @param GoldRate:num
 * @text Gold Rate
 * @parent EnemyRewards
 * @desc Gold rate given by a defeated enemy with this Trait Set.
 * @default 1.00
 *
 * @param DropRate:num
 * @text Drop Rate
 * @parent EnemyRewards
 * @desc Drop rate given by a defeated enemy with this Trait Set.
 * @default 1.00
 *
 */
/* ----------------------------------------------------------------------------
 * Element Changes
 * ----------------------------------------------------------------------------
 */
/*~struct~ElementChanges:
 *
 * @param Element1:num
 * @text Element 1 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element2:num
 * @text Element 2 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element3:num
 * @text Element 3 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element4:num
 * @text Element 4 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element5:num
 * @text Element 5 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element6:num
 * @text Element 6 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element7:num
 * @text Element 7 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element8:num
 * @text Element 8 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element9:num
 * @text Element 9 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element10:num
 * @text Element 10 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element11:num
 * @text Element 11 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element12:num
 * @text Element 12 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element13:num
 * @text Element 13 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element14:num
 * @text Element 14 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element15:num
 * @text Element 15 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element16:num
 * @text Element 16 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element17:num
 * @text Element 17 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element18:num
 * @text Element 18 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element19:num
 * @text Element 19 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element20:num
 * @text Element 20 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element21:num
 * @text Element 21 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element22:num
 * @text Element 22 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element23:num
 * @text Element 23 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element24:num
 * @text Element 24 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element25:num
 * @text Element 25 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element26:num
 * @text Element 26 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element27:num
 * @text Element 27 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element28:num
 * @text Element 28 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element29:num
 * @text Element 29 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element30:num
 * @text Element 30 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element31:num
 * @text Element 31 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element32:num
 * @text Element 32 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element33:num
 * @text Element 33 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element34:num
 * @text Element 34 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element35:num
 * @text Element 35 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element36:num
 * @text Element 36 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element37:num
 * @text Element 37 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element38:num
 * @text Element 38 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element39:num
 * @text Element 39 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element40:num
 * @text Element 40 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element41:num
 * @text Element 41 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element42:num
 * @text Element 42 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element43:num
 * @text Element 43 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element44:num
 * @text Element 44 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element45:num
 * @text Element 45 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element46:num
 * @text Element 46 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element47:num
 * @text Element 47 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element48:num
 * @text Element 48 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element49:num
 * @text Element 49 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element50:num
 * @text Element 50 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element51:num
 * @text Element 51 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element52:num
 * @text Element 52 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element53:num
 * @text Element 53 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element54:num
 * @text Element 54 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element55:num
 * @text Element 55 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element56:num
 * @text Element 56 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element57:num
 * @text Element 57 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element58:num
 * @text Element 58 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element59:num
 * @text Element 59 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element60:num
 * @text Element 60 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element61:num
 * @text Element 61 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element62:num
 * @text Element 62 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element63:num
 * @text Element 63 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element64:num
 * @text Element 64 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element65:num
 * @text Element 65 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element66:num
 * @text Element 66 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element67:num
 * @text Element 67 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element68:num
 * @text Element 68 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element69:num
 * @text Element 69 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element70:num
 * @text Element 70 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element71:num
 * @text Element 71 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element72:num
 * @text Element 72 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element73:num
 * @text Element 73 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element74:num
 * @text Element 74 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element75:num
 * @text Element 75 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element76:num
 * @text Element 76 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element77:num
 * @text Element 77 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element78:num
 * @text Element 78 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element79:num
 * @text Element 79 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element80:num
 * @text Element 80 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element81:num
 * @text Element 81 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element82:num
 * @text Element 82 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element83:num
 * @text Element 83 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element84:num
 * @text Element 84 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element85:num
 * @text Element 85 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element86:num
 * @text Element 86 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element87:num
 * @text Element 87 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element88:num
 * @text Element 88 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element89:num
 * @text Element 89 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element90:num
 * @text Element 90 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element91:num
 * @text Element 91 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element92:num
 * @text Element 92 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element93:num
 * @text Element 93 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element94:num
 * @text Element 94 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element95:num
 * @text Element 95 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element96:num
 * @text Element 96 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element97:num
 * @text Element 97 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element98:num
 * @text Element 98 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 * @param Element99:num
 * @text Element 99 Change
 * @desc Data applied to this element in the Database > Types tab.
 * @default 1.00
 *
 */
/* ----------------------------------------------------------------------------
 * Basic Parameters
 * ----------------------------------------------------------------------------
 */
/*~struct~Params:
 *
 * @param Param0:num
 * @text MaxHP Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param Param1:num
 * @text MaxMP Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param Param2:num
 * @text ATK Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param Param3:num
 * @text DEF Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param Param4:num
 * @text MAT Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param Param5:num
 * @text MDF Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param Param6:num
 * @text AGI Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param Param7:num
 * @text LUK Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 */
/* ----------------------------------------------------------------------------
 * X Parameters
 * ----------------------------------------------------------------------------
 */
/*~struct~XParams:
 *
 * @param XParam0:num
 * @text HIT Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 * @param XParam1:num
 * @text EVA Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 * @param XParam2:num
 * @text CRI Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 * @param XParam3:num
 * @text CEV Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 * @param XParam4:num
 * @text MEV Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 * @param XParam5:num
 * @text MRF Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 * @param XParam6:num
 * @text CNT Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 * @param XParam7:num
 * @text HRG Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 * @param XParam8:num
 * @text MRG Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 * @param XParam9:num
 * @text TRG Rate
 * @desc Percentile rate modification of this parameter.
 * @default 0.00
 *
 */
/* ----------------------------------------------------------------------------
 * S Parameters
 * ----------------------------------------------------------------------------
 */
/*~struct~SParams:
 *
 * @param SParam0:num
 * @text TGR Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param SParam1:num
 * @text GRD Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param SParam2:num
 * @text REC Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param SParam3:num
 * @text PHA Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param SParam4:num
 * @text MCR Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param SParam5:num
 * @text TCR Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param SParam6:num
 * @text PDR Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param SParam7:num
 * @text MDR Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param SParam8:num
 * @text FDR Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 * @param SParam9:num
 * @text EXR Rate
 * @desc Percentile rate modification of this parameter.
 * @default 1.00
 *
 */
//=============================================================================

const _0x3076cb=_0x3904;function _0x3904(_0x4d1179,_0x2063cc){const _0x8a12dc=_0x8a12();return _0x3904=function(_0x39040b,_0x5eff57){_0x39040b=_0x39040b-0x9d;let _0x43aad9=_0x8a12dc[_0x39040b];return _0x43aad9;},_0x3904(_0x4d1179,_0x2063cc);}function _0x8a12(){const _0x2cbcd6=['drawProperties','onLoadDrawItemActorMenuImage','XpfGy','_atypeWidth','additive','statusMenuWtype','STRUCT','round','Game_Enemy_name','TRAIT_EQUIP_WTYPE','Step1End','drawParamValue','EleRecRateFlt','commandStyle','atypeWidth','MAXHP','JqYpT','<%1\x20SIDEVIEW\x20BATTLERS>\x5cs*([\x5cs\x5cS]*)\x5cs*<\x5c/%1\x20SIDEVIEW\x20BATTLERS>','drawItemStyleIconText','ARRAYFUNC','isBottomHelpMode','Game_Enemy_setup','DrawBackRect','AtypeOk','popScene','EVAL','recoverAll','_battleCoreAddedElements','Game_BattlerBase_xparamPlus','damage','weaponTypes','createCategoryWindow','getColor','updatedLayoutStyle','gaugeLineHeight','layoutSettings','SubElement','([\x5c+\x5c-]\x5cd+\x5c.?\x5cd+)','Alignment','_commandNameWindow','getRandomTraitSetFromString','innerHeight','FEfjA','inBattle','SKLVq','elements','FDR','drawActorGraphic','checkCacheKey','getReflectedElements','StatusBgType','Icon','Olmqy','koOnM','foqfV','getElementIDsCol1','textColor','MRF','setup','Blessing','elementsMinRate','10678682aunIdI','traitSet','actorId','multiply','ATK','process_VisuMZ_ElementStatusCore_TraitSets','calcElementRate','helpAreaHeight','tMXXY','RuleAverageCalcJS','936918RqlejX','createRandomTraitSet','Game_BattlerBase_canEquip','elementId','LOxxz','status','LLIMh','resetFontSettings','right','setHandler','EleRecPlusFlt','basicDataHeight','random','loadPicture','Game_Enemy_transform','RuleMultiplyCalcJS','Variant','getElementIDsColRaw','create','fillRect','sfHtw','UMIfT','getDealtElementPlus','length','createHelpWindow','setItemWindow','commandStyleCheck','HbyTC','EMgTg','JlAAQ','sum','getDealtElementFlat','Label','isPlaytest','CRI','Scene_Status_create','<%1RECEIVED\x20ELEMENT\x20%2\x20%3:[\x20]%4>','MDR','clear','gHhzb','_biography','10EKGENF','DEmKi','createCommandNameWindow','xparamRateTraitSets','meetsEquipTraitRequirements','addChild','TraitCol1','oKhIX','setBiography','onDatabaseLoaded','loadSystem','commandName','Wtypes','refresh','Atypes','addLoadListener','_plural','elementsRateSum','textWidth','match','EleRecFlatPer','EleForceFlt','Display','Game_Enemy_setPlural','EiofS','<%1\x20SIDEVIEW\x20IDLE\x20MOTIONS>\x5cs*([\x5cs\x5cS]*)\x5cs*<\x5c/%1\x20SIDEVIEW\x20IDLE\x20MOTIONS>','isRightInputMode','_addingPassiveStateTraitSets','\x5cN[%1]','Game_Action_clear','updateCommandNameWindow','bQHmY','ChRmu','elementRateRuling','%11','paramRateTraitSets','EleDmgPlusJS','DrawJS','EleDmgRateJS','NXXGu','dataWindowRect','registerCommand','getExcludedElementIDs','calcUserElementDamageRate','passiveStates','BackRectColor','isUseElementStatusCoreUpdatedLayout','drawFirstCategoryData','Per','RandomWeight','_commandList','EnemyChangeTraitSetsJS','MEV','EeRZs','wtypeWidth','kKItk','CNT','createElementStatusCore','drawIcon','#%1','drawText','getReceiveElementPlus','logTraitSets','ActorChangeTraitSetsGroup','isActorMenuImageAvailable','Description','QmkvO','constructor','getRandomTraitSetFromList','EleRecRatePer','Whigd','XacZd','name','getElementIdWithName','calcTargetElementRate','ZCXCA','traitsSet','transform','BattlerNameSolo-%1-%2','textSizeEx','Game_BattlerBase_sparam','fQGLJ','CEV','CmdTextAlign','-------','pageup','ConvertParams','EleDmgFlatJS','add','EnemyChangeTraitSetsGroup','uGeoA','drawActorIcons','rirYg','REC','aGMci','boxWidth','ihMeq','split','iconText','mainAreaHeight','goldTraitSets','index','DSSaI','LayoutStyle','SParam%1','leGde','SvWeaponMass-%1-%2','DropRate','createDataWindow','vVGAM','getParamValue','vxExl','callUpdateHelp','icon','uiMenuStyle','Game_Actor_setup','calcUserElementDamageFlat','Default','applyRandomTraitSets','(.*)','Scene_Boot_onDatabaseLoaded','isEquipAtypeOk','EleRecPlusPer','ARRAYNUM','===\x20%1\x27s\x20Trait\x20Sets\x20===','Resist','getActionObjectElements','ActorChangeTraitSetsJS','StatusMenu','uwKCO','nlist','isArray','LUK','initElementStatusCore','getElementIDsCol2','log','statusMenuDmgDealt','(\x5cd+\x5c.?\x5cd+)','highest','atypeOkTraitSets','getMenuImage','pagedown','ARRAYEVAL','BattlerHueSolo-%1-%2','yPanA','TRG','faceName','FmtText','QOSgT','Param%1','<%1\x20BATTLER\x20NAMES>\x5cs*([\x5cs\x5cS]*)\x5cs*<\x5c/%1\x20BATTLER\x20NAMES>','calcWindowHeight','AGI','traitCol1','HNJZO','MAT','makeTraitSetFromNotetags','expTraitSets','call','clearElementChanges','SvBattlerSolo-%1-%2','VisuMZ_1_MainMenuCore','floor','Settings','setBackgroundType','drawItemStyleIcon','paramValueByName','format','VocabAtype','_drawData','Params','Scene_Status_refreshActor','gold','cancel','TraitSetSettings','nextRequiredExp','param','maxCols','EleDmg','knuOb','reYPF','QahIr','activate','paintOpacity','SZHVI','toUpperCase','commandNameWindowCenter','commandNameWindowDrawText','RwDDx','battlerName','setTraitSet','map','getElementStatusCoreBackColor','ARRAYSTR','RuleMaxCalcJS','\x5cC[16]%1:\x20\x5cC[0]%2','LopUu','systemColor','includes','%10','rxtiU','makeCommandList','dsxep','Name','bind','VocabBiography','RandomizeEnemy','powerUpColor','subject','initBiography','itemTextAlign','members','previousActor','parameters','isElementNull','Step1','indexOf','clamp','statusMenuAtype','Game_BattlerBase_sparamRate','fill','update','aZcae','canEquip','setLetter','traitSetType','contents','drawParameters','RandomizeActor','stypeWidth','nextActor','calcUserElementDamagePlus','xparamPlus','dropItemRate','process_VisuMZ_ElementStatusCore_RegExp','705724EkBBAg','trim','+%1','Game_Action_itemMrf','paramchangeTextColor','exit','process_VisuMZ_ElementStatusCore_Battler_RegExp','<%1\x20BATTLER\x20HUE:\x20(\x5cd+)>','KuvnD','faceWidth','EleRec','CKeAl','getParameterList','zvxDa','EJYHz','getTraitSet','Game_Enemy_dropItemRate','HIT','gaPuY','getTraitSetKeys','jJlms','%1:\x20%2','Nature','TIamr','elementRate','EleDmgPlusFlt','4741146dVyuvB','_wtypeWidth','shift','MDF','slgYC','mainAreaBottom','refreshActor','WtypeOk','RkgnJ','_specialBattler','_letter','Flt','itemPadding','GRD','drawItemActorMenuImage','Game_BattlerBase_initMembers','statusMenuDmgAbsorb','toLowerCase','itemLineRect','Smhem','OVYcf','drawAccess','SUwWH','exp','\x5cI[%1]%2','makeMassTraitSetFromNotetags','battlerHue','eDDbs','text','getReceiveElementRate','reduce','<%1\x20SIDEVIEW\x20BATTLER:\x20(.*)>','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','statusMenuDmgReceive','nameFormat','setWordWrap','Game_BattlerBase_paramRate','currentExt','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','process_VisuMZ_ElementStatusCore_Parameters','max','sparamRate','========================','getTraitSetObject','EXR','EnemyChangeTraitSetsRange','fontSize','NUM','_actor','changePaintOpacity','initialize','Bhpze','average','push','sparamRateTraitSets','PleCy','YfStr','EleDmgFlatPer','dHXxh','remove','_categoryWindow','level','SvMotionIdleMass-%1-%2','vwsuF','updateElementStatusCoreWindowBg','Game_Enemy_exp','CrtJY','getElementIDs','1533640ddgCjA','9255016xsxHBn','drawTextEx','_battleCoreNoElement','IQvxf','PHA','contentsBack','_dataWindow','RDzkb','traitCol2','pyEOO','concat','_resetFontSize','ElementRules','skillTypes','helpWindowRectElementStatusCore','RandomValid','uiHelpPosition','Plus','IwCFl','PassiveStates','originalName','expTotal','filter','ICBNA','ActorChangeBiographyGroup','SvBattlerMass-%1-%2','sort','EnableLayout','SParams','BattlerNameMass-%1-%2','return\x200','nVANa','Game_Enemy_setLetter','drawParamName','EleDmgRatePer','setDrawData','applyTraitSetsByObjectNotetag','Enable','UgpDW','isEquipWtypeOk','_traitSets','TRAIT_EQUIP_ATYPE','statusMenuStype','Ghekk','VisuMZ_0_CoreEngine','TOFnC','vbOZl','enemy','ZaMby','<%1\x20BATTLER\x20HUES>\x5cs*([\x5cs\x5cS]*)\x5cs*<\x5c/%1\x20BATTLER\x20HUES>','changeTextColor','multiplicative','elementsMaxRate','getDealtElementRate','item','getAbsorbedElements','min','some','hue','_cache','VisuMZ_1_BattleCore','center','VisuMZ_1_MessageCore','Col%1','lineHeight','exxWp','TGR','note','Symbol','JSON','Game_BattlerBase_refresh','replace','_stypeWidth','PDR','GSpIl','description','nBbML','fontSizeRatio','EVA','getReceiveElementFlat','<%1\x20SIDEVIEW\x20IDLE\x20MOTION:\x20(.*)>','eMpxi','TraitCol2','_battleCoreForcedElements','<%1\x20BATTLER\x20NAME:\x20(.*)>','fgLsn','helpWindowRect','EleForceJS','addWindow','1111744wERzhR','drawActorLevel','paramRate','gaugeBackColor','ElementStatusCore','version','TraitDescriptionFontSize','oyAKs','zWIOW','drawItem','VocabDmgReceive','EXPRate','TCR','tCCxD','ActorChangeBiographyRange','nDRUX','drawItemDarkRect','Bonus','EleRecFlatJS','dropItemRateTraitSets','elementsAverageRate','RuleMinCalcJS','innerWidth','_elementIDs','FinalizeRateJS','SvMotionIdleSolo-%1-%2','armorTypes','lqaen','iconHeight','resetTextColor','(\x5cd+)([%％])','Zodiac','Race','DEF','width','avg','MRG','BattlerHueMass-%1-%2','sparam','iconWidth','getParamName','drawActorFaceBack','getDataSystemTypesWidth','TJYKs','FElxU','BbOru','setActor','product','%1%2%3','jIRAS','elementsRateProduct','Untitled','EleForcePer','XParams','xparam','DEFAULT','parse','blt','tFtRi','currentClass','mainAreaTop','wtypeOkTraitSets','getForcedActionElement','HRG','minimum','keys','resetDescriptionFontSize','SvWeaponSolo-%1-%2','EleDmgRateFlt','rNTMD','luWUB','Game_BattlerBase_elementRate','height','Gender','ElementRate','traitObjects','Step1Start','ElementsCol%1','List','nameElementStatusCore','Game_BattlerBase_xparam','createSpecialBattlers','profile','9bAQKAq','placeGauge','traitSetsEnabled','yvzVf','commandNameWindowDrawBackground','MAXMP','Visible','addPassiveStatesTraitSets','ceil','tflJe','expNext','getBiography','process_VisuMZ_ElementStatusCore_Compatible_RegExp','Curse','actor','onActorChange','ActorChangeTraitSetsRange','makeSingularTraitSetFromNotetags','IconSet','processRandomizedData','sfkOu','_helpWindow','pUMMe','itemMrf','EleDmgPlusPer','PsrdP','(?:%1|%2)','RegExp','nPAqj','EleRecRateJS','eAVAP','drawElements','MIbyD','%1%','resetWordWrap','Element-%1','JS\x20','attackElements','mainFontSize','_itemWindow','<%1\x20SIDEVIEW\x20WEAPONS>\x5cs*([\x5cs\x5cS]*)\x5cs*<\x5c/%1\x20SIDEVIEW\x20WEAPONS>','Scene_Status_onActorChange','hbvTp','gxbSz','ARRAYSTRUCT','STR','PAjBt','uuXGi','drawParamText','randomInt','GoldRate','VocabDmgAbsorb','Biography','setDescriptionFontSizeToTraitSet','<%1\x20SIDEVIEW\x20WEAPON:\x20(.*)>','VocabWtype','XSeAc','Element','refreshActorElementStatusCore','macNL','rcpus','DDPmh','faceHeight','gWydM','categoryWindowRect','initMembers','88888','geSuy','onActorChangeElementStatusCore','MCR','ReceivedRateJS','VocabDmgDealt','StatusMenuList','prototype'];_0x8a12=function(){return _0x2cbcd6;};return _0x8a12();}(function(_0x10a158,_0xa04d8a){const _0x14dcd8=_0x3904,_0x4dd588=_0x10a158();while(!![]){try{const _0xee8ff2=-parseInt(_0x14dcd8(0x1ec))/0x1+parseInt(_0x14dcd8(0x192))/0x2+-parseInt(_0x14dcd8(0x2d0))/0x3+-parseInt(_0x14dcd8(0x134))/0x4*(parseInt(_0x14dcd8(0x2f9))/0x5)+-parseInt(_0x14dcd8(0x14e))/0x6+parseInt(_0x14dcd8(0x2c6))/0x7+parseInt(_0x14dcd8(0x193))/0x8*(parseInt(_0x14dcd8(0x23f))/0x9);if(_0xee8ff2===_0xa04d8a)break;else _0x4dd588['push'](_0x4dd588['shift']());}catch(_0x5af7bf){_0x4dd588['push'](_0x4dd588['shift']());}}}(_0x8a12,0xd75c8));var label='ElementStatusCore',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x3076cb(0x1a9)](function(_0x3f69de){const _0x5180bb=_0x3076cb;return _0x3f69de[_0x5180bb(0x2d5)]&&_0x3f69de[_0x5180bb(0x1de)][_0x5180bb(0x10f)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label]['Settings']||{},VisuMZ[_0x3076cb(0x9f)]=function(_0x193f7e,_0x14ed5d){const _0x582d74=_0x3076cb;for(const _0x3a5850 in _0x14ed5d){if('cPeKG'!=='QYgmG'){if(_0x3a5850[_0x582d74(0x30c)](/(.*):(.*)/i)){if(_0x582d74(0x27c)===_0x582d74(0x27c)){const _0x4e1361=String(RegExp['$1']),_0x5228fc=String(RegExp['$2'])[_0x582d74(0x102)]()[_0x582d74(0x135)]();let _0xfa4015,_0x1f1044,_0x42eba8;switch(_0x5228fc){case _0x582d74(0x17d):_0xfa4015=_0x14ed5d[_0x3a5850]!==''?Number(_0x14ed5d[_0x3a5850]):0x0;break;case _0x582d74(0xc4):_0x1f1044=_0x14ed5d[_0x3a5850]!==''?JSON[_0x582d74(0x224)](_0x14ed5d[_0x3a5850]):[],_0xfa4015=_0x1f1044['map'](_0x24ef7e=>Number(_0x24ef7e));break;case _0x582d74(0x2a2):_0xfa4015=_0x14ed5d[_0x3a5850]!==''?eval(_0x14ed5d[_0x3a5850]):null;break;case _0x582d74(0xd7):_0x1f1044=_0x14ed5d[_0x3a5850]!==''?JSON[_0x582d74(0x224)](_0x14ed5d[_0x3a5850]):[],_0xfa4015=_0x1f1044[_0x582d74(0x108)](_0xc45042=>eval(_0xc45042));break;case _0x582d74(0x1d8):_0xfa4015=_0x14ed5d[_0x3a5850]!==''?JSON['parse'](_0x14ed5d[_0x3a5850]):'';break;case'ARRAYJSON':_0x1f1044=_0x14ed5d[_0x3a5850]!==''?JSON['parse'](_0x14ed5d[_0x3a5850]):[],_0xfa4015=_0x1f1044[_0x582d74(0x108)](_0x145253=>JSON['parse'](_0x145253));break;case'FUNC':_0xfa4015=_0x14ed5d[_0x3a5850]!==''?new Function(JSON[_0x582d74(0x224)](_0x14ed5d[_0x3a5850])):new Function(_0x582d74(0x1b1));break;case _0x582d74(0x29c):_0x1f1044=_0x14ed5d[_0x3a5850]!==''?JSON[_0x582d74(0x224)](_0x14ed5d[_0x3a5850]):[],_0xfa4015=_0x1f1044[_0x582d74(0x108)](_0x48bc52=>new Function(JSON[_0x582d74(0x224)](_0x48bc52)));break;case _0x582d74(0x26c):_0xfa4015=_0x14ed5d[_0x3a5850]!==''?String(_0x14ed5d[_0x3a5850]):'';break;case _0x582d74(0x10a):_0x1f1044=_0x14ed5d[_0x3a5850]!==''?JSON[_0x582d74(0x224)](_0x14ed5d[_0x3a5850]):[],_0xfa4015=_0x1f1044['map'](_0x2879a6=>String(_0x2879a6));break;case _0x582d74(0x28f):_0x42eba8=_0x14ed5d[_0x3a5850]!==''?JSON[_0x582d74(0x224)](_0x14ed5d[_0x3a5850]):{},_0x193f7e[_0x4e1361]={},VisuMZ[_0x582d74(0x9f)](_0x193f7e[_0x4e1361],_0x42eba8);continue;case _0x582d74(0x26b):_0x1f1044=_0x14ed5d[_0x3a5850]!==''?JSON['parse'](_0x14ed5d[_0x3a5850]):[],_0xfa4015=_0x1f1044['map'](_0x394fee=>VisuMZ[_0x582d74(0x9f)]({},JSON[_0x582d74(0x224)](_0x394fee)));break;default:continue;}_0x193f7e[_0x4e1361]=_0xfa4015;}else this['_cache']={},_0x32d376[_0x582d74(0x1f0)][_0x582d74(0x15d)]['call'](this);}}else _0xd6e82b=_0xa009d8%0x2===0x0?_0x1c88f2[_0x9b7fa4]:_0x571014[_0x43cbb1];}return _0x193f7e;},(_0x379b40=>{const _0x19e1be=_0x3076cb,_0x5697d3=_0x379b40[_0x19e1be(0x341)];for(const _0x543bb4 of dependencies){if(_0x19e1be(0xfc)===_0x19e1be(0x32e)){if(_0x509f88[_0x19e1be(0x2f1)]())_0x385384[_0x19e1be(0xd0)](_0x396d9b);}else{if(!Imported[_0x543bb4]){alert(_0x19e1be(0x174)[_0x19e1be(0xf0)](_0x5697d3,_0x543bb4)),SceneManager[_0x19e1be(0x139)]();break;}}}const _0x44767b=_0x379b40[_0x19e1be(0x1de)];if(_0x44767b[_0x19e1be(0x30c)](/\[Version[ ](.*?)\]/i)){if('SZHVI'!==_0x19e1be(0x101)){if(_0x4b1246[_0x19e1be(0x2e7)]<=0x0)return 0x0;return _0x3e5958[_0x19e1be(0x16c)]((_0x32c0a5,_0x207044)=>_0x32c0a5+this[_0x19e1be(0x119)]()[_0x19e1be(0x2ef)](_0x207044),0x0);}else{const _0x406a5f=Number(RegExp['$1']);if(_0x406a5f!==VisuMZ[label][_0x19e1be(0x1f1)]){if('XrwpK'!==_0x19e1be(0x218))alert(_0x19e1be(0x16e)['format'](_0x5697d3,_0x406a5f)),SceneManager[_0x19e1be(0x139)]();else{if(_0x237e12[_0x19e1be(0x2e7)]<=0x0)return 0x0;return _0x597077[_0x19e1be(0x16c)]((_0x476816,_0x57992b)=>_0x476816+this[_0x19e1be(0x119)]()['getDealtElementPlus'](_0x57992b),0x0);}}}}if(_0x44767b['match'](/\[Tier[ ](\d+)\]/i)){const _0x13e71b=Number(RegExp['$1']);if(_0x13e71b<tier){if(_0x19e1be(0x13f)!=='CKeAl'){const _0x4a80e8=_0x356f22[_0x19e1be(0x342)](_0x474ac2);if(_0x4a80e8)_0x3d99fb[_0x19e1be(0x183)](_0x4a80e8);}else alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x19e1be(0xf0)](_0x5697d3,_0x13e71b,tier)),SceneManager['exit']();}else tier=Math[_0x19e1be(0x176)](_0x13e71b,tier);}VisuMZ[_0x19e1be(0x9f)](VisuMZ[label][_0x19e1be(0xec)],_0x379b40[_0x19e1be(0x11e)]);})(pluginData),PluginManager[_0x3076cb(0x322)](pluginData['name'],_0x3076cb(0x1ab),_0x262ecb=>{const _0xa740d3=_0x3076cb;VisuMZ['ConvertParams'](_0x262ecb,_0x262ecb);const _0x16b2c1=_0x262ecb['Step1'];for(const _0x1997be of _0x16b2c1){const _0x37f26b=$gameActors[_0xa740d3(0x24d)](_0x1997be);if(!_0x37f26b)continue;_0x37f26b[_0xa740d3(0x301)](_0x262ecb[_0xa740d3(0x273)][_0xa740d3(0xf0)](_0xa740d3(0x315)[_0xa740d3(0xf0)](_0x37f26b['actorId']())));}}),PluginManager[_0x3076cb(0x322)](pluginData[_0x3076cb(0x341)],_0x3076cb(0x1fa),_0x2e0ea3=>{const _0x3b6610=_0x3076cb;VisuMZ[_0x3b6610(0x9f)](_0x2e0ea3,_0x2e0ea3);const _0x21a82e=_0x2e0ea3['Step1End']>=_0x2e0ea3['Step1Start']?_0x2e0ea3['Step1Start']:_0x2e0ea3[_0x3b6610(0x293)],_0x2c7398=_0x2e0ea3[_0x3b6610(0x293)]>=_0x2e0ea3[_0x3b6610(0x238)]?_0x2e0ea3[_0x3b6610(0x293)]:_0x2e0ea3[_0x3b6610(0x238)],_0x2b4af9=Array(_0x2c7398-_0x21a82e+0x1)[_0x3b6610(0x125)]()['map']((_0x16af14,_0x44656f)=>_0x21a82e+_0x44656f);for(const _0x663d2b of _0x2b4af9){const _0x392b09=$gameActors[_0x3b6610(0x24d)](_0x663d2b);if(!_0x392b09)continue;_0x392b09['setBiography'](_0x2e0ea3[_0x3b6610(0x273)][_0x3b6610(0xf0)](_0x3b6610(0x315)[_0x3b6610(0xf0)](_0x392b09[_0x3b6610(0x2c8)]())));}}),PluginManager['registerCommand'](pluginData[_0x3076cb(0x341)],'ActorChangeBiographyJS',_0x3d3983=>{const _0x1f0fb4=_0x3076cb;VisuMZ['ConvertParams'](_0x3d3983,_0x3d3983);const _0x231e79=_0x3d3983[_0x1f0fb4(0x120)];let _0x138384=[];while(_0x231e79['length']>0x0){const _0x45cd05=_0x231e79['shift']();if(Array[_0x1f0fb4(0xcc)](_0x45cd05))_0x138384=_0x138384[_0x1f0fb4(0x19d)](_0x45cd05);else{if(_0x1f0fb4(0x330)!==_0x1f0fb4(0x330)){const _0x421a5f=_0x50b1be[_0x1f0fb4(0xaa)](',');for(const _0x5b96cf of _0x421a5f){const _0x1a8030=_0x1276e2[_0x1f0fb4(0x342)](_0x5b96cf);if(_0x1a8030)_0x56b55b[_0x1f0fb4(0x183)](_0x1a8030);}}else _0x138384[_0x1f0fb4(0x183)](_0x45cd05);}}for(const _0x2893e3 of _0x138384){const _0x4ec54d=$gameActors[_0x1f0fb4(0x24d)](_0x2893e3);if(!_0x4ec54d)continue;_0x4ec54d[_0x1f0fb4(0x301)](_0x3d3983[_0x1f0fb4(0x273)][_0x1f0fb4(0xf0)](_0x1f0fb4(0x315)['format'](_0x4ec54d[_0x1f0fb4(0x2c8)]())));}}),PluginManager[_0x3076cb(0x322)](pluginData['name'],_0x3076cb(0x338),_0x18d474=>{const _0x3d820e=_0x3076cb;VisuMZ[_0x3d820e(0x9f)](_0x18d474,_0x18d474);const _0x1f71b0=_0x18d474[_0x3d820e(0x120)],_0x3ae31d=Game_BattlerBase[_0x3d820e(0x288)][_0x3d820e(0x147)]();for(const _0x12c055 of _0x1f71b0){const _0x30722b=$gameActors[_0x3d820e(0x24d)](_0x12c055);if(!_0x30722b)continue;for(const _0x50219c of _0x3ae31d){if(_0x3d820e(0xb8)!==_0x3d820e(0xb8))return this[_0x3d820e(0x1ce)]=this[_0x3d820e(0x1ce)]||{},this[_0x3d820e(0x1ce)][_0x4e8da6]!==_0x34e41f;else{if(!_0x18d474[_0x50219c])continue;if(_0x18d474[_0x50219c][_0x3d820e(0x30c)](/UNCHANGED/i))continue;if(_0x18d474[_0x50219c][_0x3d820e(0x30c)](/RANDOM/i)){if(_0x3d820e(0x185)!==_0x3d820e(0xa7))_0x30722b[_0x3d820e(0x2d1)](_0x50219c);else{const _0x2751cb=_0x33f7ae(_0xafaf16['$1'])[_0x3d820e(0xaa)](/[\r\n]+/)[_0x3d820e(0x189)]('');this[_0x3d820e(0x157)][_0x3d820e(0x1cd)]=_0x38f19d(_0x3291ea[_0x3d820e(0x252)](_0x2751cb))['clamp'](0x0,0x168);}}else _0x30722b['setTraitSet'](_0x50219c,_0x18d474[_0x50219c]);}}}}),PluginManager[_0x3076cb(0x322)](pluginData['name'],_0x3076cb(0x24f),_0x14e524=>{const _0x50ec65=_0x3076cb;VisuMZ[_0x50ec65(0x9f)](_0x14e524,_0x14e524);const _0x39e022=_0x14e524['Step1End']>=_0x14e524[_0x50ec65(0x238)]?_0x14e524['Step1Start']:_0x14e524[_0x50ec65(0x293)],_0x36e6fd=_0x14e524['Step1End']>=_0x14e524[_0x50ec65(0x238)]?_0x14e524[_0x50ec65(0x293)]:_0x14e524[_0x50ec65(0x238)],_0x5838fd=Array(_0x36e6fd-_0x39e022+0x1)[_0x50ec65(0x125)]()['map']((_0x216b48,_0x889008)=>_0x39e022+_0x889008),_0x38ed25=Game_BattlerBase[_0x50ec65(0x288)][_0x50ec65(0x147)]();for(const _0x274433 of _0x5838fd){if(_0x50ec65(0x161)===_0x50ec65(0x142))return this[_0x50ec65(0x1c2)]();else{const _0x38f475=$gameActors[_0x50ec65(0x24d)](_0x274433);if(!_0x38f475)continue;for(const _0xc61882 of _0x38ed25){if(!_0x14e524[_0xc61882])continue;if(_0x14e524[_0xc61882][_0x50ec65(0x30c)](/UNCHANGED/i))continue;_0x14e524[_0xc61882][_0x50ec65(0x30c)](/RANDOM/i)?_0x38f475[_0x50ec65(0x2d1)](_0xc61882):_0x38f475[_0x50ec65(0x107)](_0xc61882,_0x14e524[_0xc61882]);}}}}),PluginManager['registerCommand'](pluginData['name'],_0x3076cb(0xc8),_0x2d37fc=>{const _0x8f1695=_0x3076cb;VisuMZ[_0x8f1695(0x9f)](_0x2d37fc,_0x2d37fc);const _0x29a4a4=_0x2d37fc[_0x8f1695(0x120)];let _0x483f44=[];while(_0x29a4a4[_0x8f1695(0x2e7)]>0x0){if(_0x8f1695(0x27a)===_0x8f1695(0x27a)){const _0x1d8ea0=_0x29a4a4[_0x8f1695(0x150)]();if(Array[_0x8f1695(0xcc)](_0x1d8ea0)){if('SIEoM'!==_0x8f1695(0x19c))_0x483f44=_0x483f44[_0x8f1695(0x19d)](_0x1d8ea0);else return _0x1bdd0f['ElementStatusCore']['Game_BattlerBase_canEquip']['call'](this,_0x32db17)&&this['meetsEquipTraitRequirements'](_0x24b287);}else _0x483f44['push'](_0x1d8ea0);}else this[_0x8f1695(0x29b)](_0x4ed654);}const _0xf5d9e5=Game_BattlerBase[_0x8f1695(0x288)][_0x8f1695(0x147)]();for(const _0x4c6c8d of _0x483f44){const _0x2973d5=$gameActors['actor'](_0x4c6c8d);if(!_0x2973d5)continue;for(const _0xaf9320 of _0xf5d9e5){if(!_0x2d37fc[_0xaf9320])continue;if(_0x2d37fc[_0xaf9320]['match'](/UNCHANGED/i))continue;_0x2d37fc[_0xaf9320][_0x8f1695(0x30c)](/RANDOM/i)?_0x2973d5[_0x8f1695(0x2d1)](_0xaf9320):_0x8f1695(0xaf)===_0x8f1695(0xaf)?_0x2973d5[_0x8f1695(0x107)](_0xaf9320,_0x2d37fc[_0xaf9320]):(this[_0x8f1695(0x1ce)]={},_0x53c720[_0x8f1695(0x1f0)][_0x8f1695(0x310)]['call'](this,_0xed3c66));}}}),PluginManager[_0x3076cb(0x322)](pluginData['name'],_0x3076cb(0xa2),_0x395ee9=>{const _0x4ed7ab=_0x3076cb;if(!$gameParty[_0x4ed7ab(0x2b4)]())return;VisuMZ['ConvertParams'](_0x395ee9,_0x395ee9);const _0x2dfe7e=_0x395ee9[_0x4ed7ab(0x120)],_0x21632d=Game_BattlerBase['prototype']['getTraitSetKeys']();for(const _0x3311a7 of _0x2dfe7e){if(_0x4ed7ab(0x1e4)===_0x4ed7ab(0x105)){const _0x11ad61=_0x17cade['traitSetType'](_0x1d9621);return _0x11ad61&&_0x11ad61[_0x4ed7ab(0x245)];}else{const _0x171c09=$gameTroop[_0x4ed7ab(0x11c)]()[_0x3311a7];if(!_0x171c09)continue;for(const _0xfef56b of _0x21632d){if(!_0x395ee9[_0xfef56b])continue;if(_0x395ee9[_0xfef56b][_0x4ed7ab(0x30c)](/UNCHANGED/i))continue;_0x395ee9[_0xfef56b][_0x4ed7ab(0x30c)](/RANDOM/i)?_0x4ed7ab(0x1c1)===_0x4ed7ab(0x1c1)?_0x171c09[_0x4ed7ab(0x2d1)](_0xfef56b):this[_0x4ed7ab(0x266)]=_0x266538:_0x171c09['setTraitSet'](_0xfef56b,_0x395ee9[_0xfef56b]);}}}}),PluginManager[_0x3076cb(0x322)](pluginData['name'],_0x3076cb(0x17b),_0x41b822=>{const _0x207d88=_0x3076cb;if(!$gameParty['inBattle']())return;VisuMZ['ConvertParams'](_0x41b822,_0x41b822);const _0x26e21d=_0x41b822[_0x207d88(0x293)]>=_0x41b822[_0x207d88(0x238)]?_0x41b822[_0x207d88(0x238)]:_0x41b822[_0x207d88(0x293)],_0x156ee2=_0x41b822[_0x207d88(0x293)]>=_0x41b822[_0x207d88(0x238)]?_0x41b822['Step1End']:_0x41b822[_0x207d88(0x238)],_0x14791b=Array(_0x156ee2-_0x26e21d+0x1)[_0x207d88(0x125)]()['map']((_0xb129e5,_0x3e69de)=>_0x26e21d+_0x3e69de),_0x21e292=Game_BattlerBase[_0x207d88(0x288)][_0x207d88(0x147)]();for(const _0x38a3b4 of _0x14791b){const _0x5a8dd6=$gameTroop[_0x207d88(0x11c)]()[_0x38a3b4];if(!_0x5a8dd6)continue;for(const _0x39f42b of _0x21e292){if(_0x207d88(0x1be)===_0x207d88(0x1be)){if(!_0x41b822[_0x39f42b])continue;if(_0x41b822[_0x39f42b]['match'](/UNCHANGED/i))continue;if(_0x41b822[_0x39f42b][_0x207d88(0x30c)](/RANDOM/i)){if(_0x207d88(0x231)===_0x207d88(0x25d)){let _0x1466f3=0x5;return this[_0x207d88(0x2b2)]-this[_0x207d88(0x1d3)]()*0x5<this[_0x207d88(0x1d3)]()*0x6&&(_0x1466f3=0x4),this[_0x207d88(0x2b2)]-this[_0x207d88(0x1d3)]()*_0x1466f3;}else _0x5a8dd6[_0x207d88(0x2d1)](_0x39f42b);}else _0x5a8dd6[_0x207d88(0x107)](_0x39f42b,_0x41b822[_0x39f42b]);}else{const _0x313fb0=_0xb4774e[_0x207d88(0x224)]('['+_0x5f4f65['$1'][_0x207d88(0x30c)](/\d+/g)+']');_0x2a122a=_0x122a07[_0x207d88(0x19d)](_0x313fb0);}}}}),PluginManager[_0x3076cb(0x322)](pluginData[_0x3076cb(0x341)],_0x3076cb(0x32c),_0x257793=>{const _0x4fd5a1=_0x3076cb;if(!$gameParty[_0x4fd5a1(0x2b4)]())return;VisuMZ[_0x4fd5a1(0x9f)](_0x257793,_0x257793);const _0x58f6fb=_0x257793[_0x4fd5a1(0x120)];let _0x3a0427=[];while(_0x58f6fb[_0x4fd5a1(0x2e7)]>0x0){if('QCdbC'!==_0x4fd5a1(0x2bd)){const _0x55c192=_0x58f6fb[_0x4fd5a1(0x150)]();if(Array[_0x4fd5a1(0xcc)](_0x55c192))_0x3a0427=_0x3a0427[_0x4fd5a1(0x19d)](_0x55c192);else{if(_0x4fd5a1(0x1b9)!==_0x4fd5a1(0x1b9)){const _0x2a3181=this[_0x4fd5a1(0x143)](_0x543bec),_0x5686a5=_0x4d1d3c['traitSet'](_0x165b3d,_0x2a3181);_0x25175a=_0x27a62a[_0x4fd5a1(0x19d)](_0x5686a5[_0x4fd5a1(0x305)]);}else _0x3a0427['push'](_0x55c192);}}else _0xce06ec=_0x4fd5a1(0x136)[_0x4fd5a1(0xf0)](_0x5732cf);}const _0x489dfe=Game_BattlerBase[_0x4fd5a1(0x288)][_0x4fd5a1(0x147)]();for(const _0x507d0a of _0x3a0427){const _0xa331db=$gameTroop[_0x4fd5a1(0x11c)]()[_0x507d0a];if(!_0xa331db)continue;for(const _0x1a1131 of _0x489dfe){if(!_0x257793[_0x1a1131])continue;if(_0x257793[_0x1a1131]['match'](/UNCHANGED/i))continue;_0x257793[_0x1a1131][_0x4fd5a1(0x30c)](/RANDOM/i)?_0xa331db[_0x4fd5a1(0x2d1)](_0x1a1131):_0xa331db[_0x4fd5a1(0x107)](_0x1a1131,_0x257793[_0x1a1131]);}}}),VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0xc1)]=Scene_Boot[_0x3076cb(0x288)][_0x3076cb(0x302)],Scene_Boot[_0x3076cb(0x288)][_0x3076cb(0x302)]=function(){const _0x434836=_0x3076cb;VisuMZ[_0x434836(0x1f0)][_0x434836(0xc1)]['call'](this),this[_0x434836(0x175)](),this[_0x434836(0x2cb)](),this[_0x434836(0x133)](),this['process_VisuMZ_ElementStatusCore_Battler_RegExp'](),this[_0x434836(0x24b)]();},Scene_Boot[_0x3076cb(0x288)][_0x3076cb(0x175)]=function(){const _0x1bb92f=_0x3076cb,_0x7dc8d5=VisuMZ['ElementStatusCore'][_0x1bb92f(0xec)][_0x1bb92f(0xf7)];Window_StatusData['traitCol1']=(_0x7dc8d5[_0x1bb92f(0x2ff)]||Window_StatusData[_0x1bb92f(0xe2)])[_0x1bb92f(0x1a9)](_0x3b092d=>{const _0x402640=_0x1bb92f,_0x559161=DataManager[_0x402640(0x12a)](_0x3b092d);return _0x559161&&_0x559161[_0x402640(0x245)];}),Window_StatusData[_0x1bb92f(0x19b)]=(_0x7dc8d5[_0x1bb92f(0x1e5)]||Window_StatusData[_0x1bb92f(0x19b)])[_0x1bb92f(0x1a9)](_0x455b42=>{const _0x569991=_0x1bb92f,_0x7f353=DataManager[_0x569991(0x12a)](_0x455b42);return _0x7f353&&_0x7f353[_0x569991(0x245)];});},Scene_Boot[_0x3076cb(0x288)][_0x3076cb(0x2cb)]=function(){const _0x34027f=_0x3076cb,_0x59a4a0=VisuMZ[_0x34027f(0x1f0)][_0x34027f(0xec)],_0x573493=Game_BattlerBase[_0x34027f(0x288)]['getTraitSetKeys']();DataManager[_0x34027f(0x1bb)]={};for(const _0x4c2a84 of _0x573493){if(_0x34027f(0x2eb)===_0x34027f(0x27b)){const _0x2e07d6=this[_0x34027f(0x2b0)];_0x2e07d6[_0x34027f(0x335)](_0x2e2aad,0x0,_0x3ba12e['y'],_0x2e07d6[_0x34027f(0x202)],_0x34027f(0x1d0));}else{const _0x3e01b4=_0x4c2a84[_0x34027f(0x102)]()[_0x34027f(0x135)]();DataManager[_0x34027f(0x1bb)][_0x3e01b4]={},DataManager['_traitSets'][_0x3e01b4][_0x34027f(0x223)]=_0x59a4a0[_0x4c2a84][_0x34027f(0xbe)];const _0x24519b=_0x59a4a0[_0x4c2a84]['Default'][_0x34027f(0x114)][_0x34027f(0x102)]()['trim']();DataManager['_traitSets'][_0x3e01b4][_0x24519b]=_0x59a4a0[_0x4c2a84][_0x34027f(0xbe)];const _0x39cb2a=_0x59a4a0[_0x4c2a84][_0x34027f(0x23a)];for(const _0x3383f8 of _0x39cb2a){if(_0x34027f(0x19a)!==_0x34027f(0x1f9)){const _0x4adab9=_0x3383f8[_0x34027f(0x114)][_0x34027f(0x102)]()['trim']();DataManager[_0x34027f(0x1bb)][_0x3e01b4][_0x4adab9]=_0x3383f8;}else{const _0x1a1bc5=_0x409eb8[_0x34027f(0x20e)],_0x2d2b83=_0xfe6c63['height'],_0xc1a7d7=_0x486801['x'],_0x3e0b82=_0x578e5a['y'];this[_0x34027f(0x15c)](_0x16a960,_0xc1a7d7,_0x3e0b82,_0x1a1bc5,_0x2d2b83);}}}}},VisuMZ[_0x3076cb(0x1f0)]['RegExp']={},Scene_Boot['prototype'][_0x3076cb(0x133)]=function(){const _0x1c8c92=_0x3076cb,_0x40b656=VisuMZ[_0x1c8c92(0x1f0)][_0x1c8c92(0x25a)],_0x20edf3=$dataSystem[_0x1c8c92(0x2b6)],_0x23edc8=_0x1c8c92(0x2f4),_0x5603f2='<%1DEALT\x20ELEMENT\x20%2\x20%3:[\x20]%4>',_0x3faea9=_0x1c8c92(0x20a),_0x5e3903=_0x1c8c92(0xd2),_0x3c04a7='([\x5c+\x5c-]\x5cd+)([%％])',_0x2cb31a=_0x1c8c92(0x2ae),_0x1f8507=_0x1c8c92(0xc0),_0x4514e0=[_0x1c8c92(0x13e),_0x1c8c92(0xfb)],_0x4e7c4c=[_0x1c8c92(0x1a4),'Rate','Flat'],_0x37ac4f=[_0x1c8c92(0x329),_0x1c8c92(0x159),'JS'],_0x2234cd=[_0x3c04a7,_0x2cb31a,_0x1f8507],_0x511aca=[_0x3faea9,_0x5e3903,_0x1f8507],_0x1a9f3b='<%1FORCE\x20RECEIVED\x20ELEMENT\x20(?:%2|%3)\x20RATE:[\x20]%4>';_0x40b656[_0x1c8c92(0x220)]=[],_0x40b656[_0x1c8c92(0x30e)]=[],_0x40b656[_0x1c8c92(0x1ea)]=[];for(let _0x13ea0f=0x0;_0x13ea0f<_0x20edf3[_0x1c8c92(0x2e7)];_0x13ea0f++){let _0x2817af=_0x20edf3[_0x13ea0f][_0x1c8c92(0x102)]()[_0x1c8c92(0x135)]();_0x2817af=_0x2817af[_0x1c8c92(0x1da)](/\x1I\[(\d+)\]/gi,''),_0x2817af=_0x2817af['replace'](/\\I\[(\d+)\]/gi,'');for(const _0x4a2f72 of _0x4514e0){if('aeXJS'===_0x1c8c92(0x300)){const _0x11403c=_0x45d6e6[_0x1c8c92(0x303)](_0x1c8c92(0x251)),_0x2e0dea=_0x36c3e2[_0x1c8c92(0x213)],_0x545495=_0x466396[_0x1c8c92(0x208)],_0x4bdc3e=_0x222ab5%0x10*_0x2e0dea,_0xb5bff3=_0x5c7f67['floor'](_0x218341/0x10)*_0x545495,_0xecc091=_0x129e9d[_0x1c8c92(0x247)](_0x2e0dea*this[_0x1c8c92(0x1e0)]()),_0x10c6cf=_0x3d9456['ceil'](_0x545495*this[_0x1c8c92(0x1e0)]());this[_0x1c8c92(0x12b)][_0x1c8c92(0x225)](_0x11403c,_0x4bdc3e,_0xb5bff3,_0x2e0dea,_0x545495,_0x4b1b06,_0x4ee580,_0xecc091,_0x10c6cf);}else for(const _0xd909cc of _0x4e7c4c){for(const _0x39b779 of _0x37ac4f){const _0x2d2320=_0x1c8c92(0x21c)[_0x1c8c92(0xf0)](_0x4a2f72,_0xd909cc,_0x39b779);_0x40b656[_0x2d2320]=_0x40b656[_0x2d2320]||[];const _0x4092b6=_0x4a2f72===_0x1c8c92(0x13e)?_0x23edc8:_0x5603f2,_0x6967bc=_0x39b779[_0x1c8c92(0x30c)](/JS/i)?_0x1c8c92(0x263):'',_0x5f1bf1=_0x1c8c92(0x259)[_0x1c8c92(0xf0)](_0x2817af,_0x13ea0f),_0x3b2ce1=_0xd909cc[_0x1c8c92(0x102)](),_0x1f48ee=_0xd909cc['match'](/RATE/i)?_0x511aca:_0x2234cd,_0x1886f4=_0x1f48ee[_0x37ac4f['indexOf'](_0x39b779)];_0x40b656[_0x2d2320][_0x13ea0f]=new RegExp(_0x4092b6[_0x1c8c92(0xf0)](_0x6967bc,_0x5f1bf1,_0x3b2ce1,_0x1886f4),'i');}}}_0x40b656['EleForcePer'][_0x13ea0f]=new RegExp(_0x1a9f3b[_0x1c8c92(0xf0)]('',_0x2817af,_0x13ea0f,_0x3faea9),'i'),_0x40b656['EleForceFlt'][_0x13ea0f]=new RegExp(_0x1a9f3b[_0x1c8c92(0xf0)]('',_0x2817af,_0x13ea0f,_0x5e3903),'i'),_0x40b656[_0x1c8c92(0x1ea)][_0x13ea0f]=new RegExp(_0x1a9f3b[_0x1c8c92(0xf0)](_0x1c8c92(0x263),_0x2817af,_0x13ea0f,_0x1f8507),'i');}},Scene_Boot[_0x3076cb(0x288)][_0x3076cb(0x13a)]=function(){const _0x4a766c=_0x3076cb,_0x274b5a=Game_BattlerBase[_0x4a766c(0x288)][_0x4a766c(0x147)](),_0x104798=_0x4a766c(0x1e7),_0x48ad95=_0x4a766c(0x13b),_0x11dd76=_0x4a766c(0xdf),_0x31563d=_0x4a766c(0x1c4);for(const _0x37931d of _0x274b5a){const _0x58bf6a=_0x37931d[_0x4a766c(0x102)]()['trim']();for(const _0x50806b in DataManager[_0x4a766c(0x1bb)][_0x58bf6a]){const _0x2ed6c5=_0x4a766c(0x347)['format'](_0x58bf6a,_0x50806b);VisuMZ[_0x4a766c(0x1f0)][_0x4a766c(0x25a)][_0x2ed6c5]=new RegExp(_0x104798[_0x4a766c(0xf0)](_0x50806b),'i');const _0x392843='BattlerHueSolo-%1-%2'[_0x4a766c(0xf0)](_0x58bf6a,_0x50806b);VisuMZ[_0x4a766c(0x1f0)][_0x4a766c(0x25a)][_0x392843]=new RegExp(_0x48ad95[_0x4a766c(0xf0)](_0x50806b),'i');const _0x52ae3e=_0x4a766c(0x1b0)[_0x4a766c(0xf0)](_0x58bf6a,_0x50806b);VisuMZ[_0x4a766c(0x1f0)][_0x4a766c(0x25a)][_0x52ae3e]=new RegExp(_0x11dd76[_0x4a766c(0xf0)](_0x50806b),'i');const _0x12f754=_0x4a766c(0x211)[_0x4a766c(0xf0)](_0x58bf6a,_0x50806b);VisuMZ[_0x4a766c(0x1f0)]['RegExp'][_0x12f754]=new RegExp(_0x31563d[_0x4a766c(0xf0)](_0x50806b),'i');}}},Scene_Boot[_0x3076cb(0x288)][_0x3076cb(0x24b)]=function(){const _0x5783de=_0x3076cb,_0x5c8dfe=Game_BattlerBase['prototype'][_0x5783de(0x147)]();if(Imported[_0x5783de(0x1cf)]){const _0x62ea8b=_0x5783de(0x16d),_0x140734=_0x5783de(0x275),_0x28a103=_0x5783de(0x1e3),_0x10f42d=_0x5783de(0x29a),_0x50cb2c='<%1\x20SIDEVIEW\x20WEAPONS>\x5cs*([\x5cs\x5cS]*)\x5cs*<\x5c/%1\x20SIDEVIEW\x20WEAPONS>',_0x80ee4a=_0x5783de(0x312);for(const _0x35aff2 of _0x5c8dfe){if(_0x5783de(0x2ec)===_0x5783de(0x2ec)){const _0x4d2f6f=_0x35aff2[_0x5783de(0x102)]()['trim']();for(const _0x509da2 in DataManager[_0x5783de(0x1bb)][_0x4d2f6f]){const _0xe21be8='SvBattlerSolo-%1-%2'[_0x5783de(0xf0)](_0x4d2f6f,_0x509da2);VisuMZ['ElementStatusCore'][_0x5783de(0x25a)][_0xe21be8]=new RegExp(_0x62ea8b['format'](_0x509da2),'i');const _0x4386d6=_0x5783de(0x22f)['format'](_0x4d2f6f,_0x509da2);VisuMZ[_0x5783de(0x1f0)][_0x5783de(0x25a)][_0x4386d6]=new RegExp(_0x140734['format'](_0x509da2),'i');const _0x9c244e=_0x5783de(0x205)['format'](_0x4d2f6f,_0x509da2);VisuMZ['ElementStatusCore'][_0x5783de(0x25a)][_0x9c244e]=new RegExp(_0x28a103[_0x5783de(0xf0)](_0x509da2),'i');const _0x52e7fa=_0x5783de(0x1ac)[_0x5783de(0xf0)](_0x4d2f6f,_0x509da2);VisuMZ[_0x5783de(0x1f0)][_0x5783de(0x25a)][_0x52e7fa]=new RegExp(_0x10f42d[_0x5783de(0xf0)](_0x509da2),'i');const _0xe9ca66=_0x5783de(0xb3)[_0x5783de(0xf0)](_0x4d2f6f,_0x509da2);VisuMZ[_0x5783de(0x1f0)]['RegExp'][_0xe9ca66]=new RegExp(_0x50cb2c[_0x5783de(0xf0)](_0x509da2),'i');const _0x4c5a94=_0x5783de(0x18c)['format'](_0x4d2f6f,_0x509da2);VisuMZ[_0x5783de(0x1f0)][_0x5783de(0x25a)][_0x4c5a94]=new RegExp(_0x80ee4a[_0x5783de(0xf0)](_0x509da2),'i');}}else this[_0x5783de(0x157)][_0x5783de(0x1cd)]=_0x7e10c4(_0xb4e3d3['$1'])[_0x5783de(0x122)](0x0,0x168);}}},DataManager[_0x3076cb(0x241)]=function(){const _0x1e7a4a=_0x3076cb;return VisuMZ[_0x1e7a4a(0x1f0)][_0x1e7a4a(0xec)][_0x1e7a4a(0xf7)][_0x1e7a4a(0x1b8)];},DataManager['traitSetType']=function(_0x59d709){const _0x4cdad9=_0x3076cb;return VisuMZ[_0x4cdad9(0x1f0)]['Settings'][_0x59d709];},DataManager[_0x3076cb(0x2c7)]=function(_0x3e67ce,_0x2646e4){const _0x4fe0d0=_0x3076cb;_0x3e67ce=_0x3e67ce[_0x4fe0d0(0x102)]()[_0x4fe0d0(0x135)](),_0x2646e4=_0x2646e4[_0x4fe0d0(0x102)]()['trim']();if(this['_traitSets'][_0x3e67ce][_0x2646e4]){if(_0x4fe0d0(0xfd)!==_0x4fe0d0(0xfd)){const _0x126c87=this[_0x4fe0d0(0x179)]();_0x5d41eb[_0x4fe0d0(0xe5)](this[_0x4fe0d0(0x1bb)],_0x126c87);}else return this[_0x4fe0d0(0x1bb)][_0x3e67ce][_0x2646e4];}else return this[_0x4fe0d0(0x1bb)][_0x3e67ce]['DEFAULT'];},DataManager[_0x3076cb(0xe5)]=function(_0x26c19c,_0x497d0d){if(!_0x497d0d)return;this['makeMassTraitSetFromNotetags'](_0x26c19c,_0x497d0d),this['makeSingularTraitSetFromNotetags'](_0x26c19c,_0x497d0d),this['makeRandomSingularTraitSetFromNotetags'](_0x26c19c,_0x497d0d);},DataManager[_0x3076cb(0x2b1)]=function(_0x3c9f4a){const _0x191a0d=_0x3076cb;return data=_0x3c9f4a['split'](','),data[Math[_0x191a0d(0x270)](data[_0x191a0d(0x2e7)])][_0x191a0d(0x135)]();},DataManager[_0x3076cb(0x167)]=function(_0x139c48,_0x2e599e){const _0x783df6=_0x3076cb,_0x5eafba={'ELEMENT':_0x783df6(0x278),'SUBELEMENT':'SubElement','GENDER':_0x783df6(0x235),'RACE':_0x783df6(0x20c),'NATURE':_0x783df6(0x14a),'ALIGNMENT':_0x783df6(0x2af),'BLESSING':_0x783df6(0x2c4),'CURSE':_0x783df6(0x24c),'ZODIAC':_0x783df6(0x20b),'VARIANT':'Variant'},_0x31662d=_0x2e599e[_0x783df6(0x1d6)];if(_0x31662d['match'](/<TRAIT SETS>\s*([\s\S]*)\s*<\/TRAIT SETS>/i)){const _0x97b784=String(RegExp['$1'])[_0x783df6(0xaa)](/[\r\n]+/);for(const _0x296cbd of _0x97b784){if(_0x296cbd[_0x783df6(0x30c)](/(.*):[ ](.*)/i)){const _0x39f9df=String(RegExp['$1'])[_0x783df6(0x102)]()[_0x783df6(0x135)](),_0x145b76=String(RegExp['$2']),_0x1879d0=_0x5eafba[_0x39f9df];_0x1879d0&&(_0x783df6(0x2e4)!==_0x783df6(0x2e4)?(_0x5302ea[_0x783df6(0x288)][_0x783df6(0xce)][_0x783df6(0xe7)](this),this[_0x783df6(0x23d)]()):_0x139c48[_0x1879d0]=this[_0x783df6(0x2b1)](_0x145b76));}}}},DataManager[_0x3076cb(0x250)]=function(_0xd19a64,_0x8e9081){const _0x58e7ef=_0x3076cb,_0x2a48f6=_0x8e9081['note'],_0x445bb9={'Element':/<ELEMENT:[ ](.*)>/i,'SubElement':/<SUBELEMENT:[ ](.*)>/i,'Gender':/<GENDER:[ ](.*)>/i,'Race':/<RACE:[ ](.*)>/i,'Nature':/<NATURE:[ ](.*)>/i,'Alignment':/<ALIGNMENT:[ ](.*)>/i,'Blessing':/<BLESSING:[ ](.*)>/i,'Curse':/<CURSE:[ ](.*)>/i,'Zodiac':/<ZODIAC:[ ](.*)>/i,'Variant':/<VARIANT:[ ](.*)>/i};for(const _0xd0d3d0 in _0x445bb9){if('jKlzr'==='bjVCz')_0x15496f[_0x58e7ef(0x278)]=_0x1f20ba(_0x56e579['$1'])['trim'](),_0x15e429[_0x58e7ef(0x2ad)]=_0x50beb9(_0x4405a7['$2'])[_0x58e7ef(0x135)]();else{const _0x2c7c58=_0x445bb9[_0xd0d3d0];_0x2a48f6[_0x58e7ef(0x30c)](_0x2c7c58)&&(_0xd19a64[_0xd0d3d0]=this[_0x58e7ef(0x2b1)](RegExp['$1']));}}_0x2a48f6[_0x58e7ef(0x30c)](/<ELEMENT:[ ](.*)\/(.*)>/i)&&(_0xd19a64[_0x58e7ef(0x278)]=String(RegExp['$1'])[_0x58e7ef(0x135)](),_0xd19a64[_0x58e7ef(0x2ad)]=String(RegExp['$2'])[_0x58e7ef(0x135)]());},DataManager['makeRandomSingularTraitSetFromNotetags']=function(_0x114ac0,_0x3d5eee){const _0x42a08a=_0x3076cb,_0x413492=_0x3d5eee['note'],_0x3038b9={'Element':/<RANDOM ELEMENT>\s*([\s\S]*)\s*<\/RANDOM ELEMENT>/i,'SubElement':/<RANDOM SUBELEMENT>\s*([\s\S]*)\s*<\/RANDOM SUBELEMENT>/i,'Gender':/<RANDOM GENDER>\s*([\s\S]*)\s*<\/RANDOM GENDER>/i,'Race':/<RANDOM RACE>\s*([\s\S]*)\s*<\/RANDOM RACE>/i,'Nature':/<RANDOM NATURE>\s*([\s\S]*)\s*<\/RANDOM NATURE>/i,'Alignment':/<RANDOM ALIGNMENT>\s*([\s\S]*)\s*<\/RANDOM ALIGNMENT>/i,'Blessing':/<RANDOM BLESSING>\s*([\s\S]*)\s*<\/RANDOM BLESSING>/i,'Curse':/<RANDOM CURSE>\s*([\s\S]*)\s*<\/RANDOM CURSE>/i,'Zodiac':/<RANDOM ZODIAC>\s*([\s\S]*)\s*<\/RANDOM ZODIAC>/i,'Variant':/<RANDOM VARIANT>\s*([\s\S]*)\s*<\/RANDOM VARIANT>/i};for(const _0x5f321e in _0x3038b9){const _0x566aca=_0x3038b9[_0x5f321e];if(_0x413492[_0x42a08a(0x30c)](_0x566aca)){const _0x2460da=String(RegExp['$1'])[_0x42a08a(0xaa)](/[\r\n]+/)[_0x42a08a(0x189)]('');_0x114ac0[_0x5f321e]=this[_0x42a08a(0x252)](_0x2460da);}}},DataManager[_0x3076cb(0x252)]=function(_0x4383a5){const _0x5499b0=_0x3076cb;let _0x3f3a16=0x0;const _0x2f42c6={};for(const _0x412a30 of _0x4383a5){if(_0x412a30[_0x5499b0(0x30c)](/(.*):[ ](\d+)/i)){const _0x2d2f43=String(RegExp['$1'])[_0x5499b0(0x135)](),_0x2fe909=Number(RegExp['$2']);_0x2f42c6[_0x2d2f43]=_0x2fe909,_0x3f3a16+=_0x2fe909;}else{if(_0x412a30['match'](/(.*):[ ](\d+\.?\d+)/i)){const _0xe3fe2e=String(RegExp['$1'])[_0x5499b0(0x135)](),_0x1c8233=Number(RegExp['$2']);_0x2f42c6[_0xe3fe2e]=_0x1c8233,_0x3f3a16+=_0x1c8233;}else _0x412a30!==''&&(_0x2f42c6[_0x412a30]=0x1,_0x3f3a16++);}}if(_0x3f3a16<=0x0)return'';let _0x304962=Math[_0x5499b0(0x2dc)]()*_0x3f3a16;for(const _0x1fc316 in _0x2f42c6){if('knUMZ'!==_0x5499b0(0x1c0)){_0x304962-=_0x2f42c6[_0x1fc316];if(_0x304962<=0x0)return _0x1fc316;}else this[_0x5499b0(0x26f)](_0x98ae36+_0x1ffdc8,_0x597c58,_0x56f749,_0x42b9ab,![]);}return'';},DataManager[_0x3076cb(0x33d)]=function(_0x3031b7){const _0x43fd93=_0x3076cb;let _0x503ee6=[],_0x26022a=0x0;_0x3031b7=_0x3031b7[_0x43fd93(0x102)]()['trim']();const _0x168d25=this[_0x43fd93(0x1bb)][_0x3031b7];for(const _0x55b0a4 in _0x168d25){const _0x1c2d1a=_0x168d25[_0x55b0a4];_0x1c2d1a[_0x43fd93(0x1a2)]&&(_0x503ee6[_0x43fd93(0x183)](_0x55b0a4),_0x26022a+=_0x1c2d1a[_0x43fd93(0x32a)]);}if(_0x26022a<=0x0)return'';let _0x4b3faa=Math[_0x43fd93(0x2dc)]()*_0x26022a;for(const _0x1eb401 of _0x503ee6){if('rLgkG'==='rLgkG'){_0x4b3faa-=_0x168d25[_0x1eb401][_0x43fd93(0x32a)];if(_0x4b3faa<=0x0)return _0x1eb401;}else return _0x43fd93(0x334)[_0x43fd93(0xf0)](_0x3eb47a(_0x5da247['$1']));}return'';},DataManager[_0x3076cb(0x342)]=function(_0x51c838){const _0x57872b=_0x3076cb;_0x51c838=_0x51c838[_0x57872b(0x102)]()['trim'](),this['_elementIDs']=this[_0x57872b(0x203)]||{};if(this['_elementIDs'][_0x51c838])return this[_0x57872b(0x203)][_0x51c838];let _0x32a833=0x1;for(const _0x3d2c33 of $dataSystem[_0x57872b(0x2b6)]){if(!_0x3d2c33)continue;let _0x5d587d=_0x3d2c33[_0x57872b(0x102)]();_0x5d587d=_0x5d587d[_0x57872b(0x1da)](/\x1I\[(\d+)\]/gi,''),_0x5d587d=_0x5d587d[_0x57872b(0x1da)](/\\I\[(\d+)\]/gi,''),this[_0x57872b(0x203)][_0x5d587d]=_0x32a833,_0x32a833++;}return this[_0x57872b(0x203)][_0x51c838]||0x0;},DataManager['getActionObjectElements']=function(_0x164742){const _0x41f39d=_0x3076cb;let _0x4538a4=[];const _0x372f49=_0x164742['note'][_0x41f39d(0x30c)](/<MULTI-ELEMENT:[ ](.*)>/gi);if(_0x372f49)for(const _0x265ed6 of _0x372f49){if('nDRUX'!==_0x41f39d(0x1fb))this[_0x41f39d(0xf2)]=_0x470249,this[_0x41f39d(0x306)]();else{_0x265ed6[_0x41f39d(0x30c)](/<MULTI-ELEMENT:[ ](.*)>/gi);const _0x2f3506=String(RegExp['$1'])[_0x41f39d(0xaa)](',')[_0x41f39d(0x108)](_0x31ac53=>_0x31ac53[_0x41f39d(0x135)]());for(const _0x260f80 of _0x2f3506){const _0x2345f7=/^\d+$/['test'](_0x260f80);if(_0x2345f7)_0x4538a4[_0x41f39d(0x183)](Number(_0x260f80));else{const _0x54974a=this[_0x41f39d(0x342)](_0x260f80);if(_0x54974a)_0x4538a4[_0x41f39d(0x183)](_0x54974a);}}}}return _0x4538a4;},TextManager['statusMenuBiography']=VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0xec)][_0x3076cb(0xc9)][_0x3076cb(0x116)],TextManager[_0x3076cb(0x15e)]=VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0xec)][_0x3076cb(0xc9)][_0x3076cb(0x272)],TextManager[_0x3076cb(0x16f)]=VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0xec)]['StatusMenu'][_0x3076cb(0x1f6)],TextManager['statusMenuDmgDealt']=VisuMZ[_0x3076cb(0x1f0)]['Settings'][_0x3076cb(0xc9)][_0x3076cb(0x286)],TextManager[_0x3076cb(0x1bd)]=VisuMZ['ElementStatusCore'][_0x3076cb(0xec)]['StatusMenu']['VocabStype'],TextManager[_0x3076cb(0x28e)]=VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0xec)][_0x3076cb(0xc9)][_0x3076cb(0x276)],TextManager[_0x3076cb(0x123)]=VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0xec)][_0x3076cb(0xc9)][_0x3076cb(0xf1)],ColorManager[_0x3076cb(0x2a9)]=function(_0x2cb139){const _0x31b04e=_0x3076cb;return _0x2cb139=String(_0x2cb139),_0x2cb139[_0x31b04e(0x30c)](/#(.*)/i)?_0x31b04e(0x334)[_0x31b04e(0xf0)](String(RegExp['$1'])):this[_0x31b04e(0x2c1)](Number(_0x2cb139));},VisuMZ[_0x3076cb(0x1f0)]['Game_Action_clear']=Game_Action['prototype']['clear'],Game_Action[_0x3076cb(0x288)]['clear']=function(){const _0x3ce92c=_0x3076cb;VisuMZ[_0x3ce92c(0x1f0)]['Game_Action_clear'][_0x3ce92c(0xe7)](this),this[_0x3ce92c(0xe8)]();},Game_Action[_0x3076cb(0x288)][_0x3076cb(0xe8)]=function(){const _0x516570=_0x3076cb;this[_0x516570(0x195)]=![],this[_0x516570(0x1e6)]=[],this[_0x516570(0x2a4)]=[];},Game_Action['prototype']['elements']=function(){const _0x317e4d=_0x3076cb;if(!this[_0x317e4d(0x1c9)]())return[];if(this['subject']()['isElementNull']())return[];if(this[_0x317e4d(0x195)])return[];if(this[_0x317e4d(0x1e6)]['length']>0x0)return this['_battleCoreForcedElements'];const _0x21bc95=this[_0x317e4d(0x119)]()[_0x317e4d(0x22a)]();if(_0x21bc95[_0x317e4d(0x2e7)]>0x0)return _0x21bc95;let _0x3276db=[];const _0x4cf519=this[_0x317e4d(0x1c9)]()[_0x317e4d(0x2a6)][_0x317e4d(0x2d3)];return _0x4cf519<0x0?_0x3276db=_0x3276db[_0x317e4d(0x19d)](this[_0x317e4d(0x119)]()[_0x317e4d(0x264)]()):_0x3276db['push'](_0x4cf519),_0x3276db=_0x3276db[_0x317e4d(0x19d)](this['_battleCoreAddedElements']),_0x3276db=_0x3276db['concat'](DataManager[_0x317e4d(0xc7)](this['item']())),_0x3276db[_0x317e4d(0x1a9)]((_0x5a689a,_0x485c87,_0x5d9c17)=>_0x5d9c17[_0x317e4d(0x121)](_0x5a689a)===_0x485c87);},VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0x137)]=Game_Action[_0x3076cb(0x288)][_0x3076cb(0x256)],Game_Action[_0x3076cb(0x288)][_0x3076cb(0x256)]=function(_0x43b4c1){const _0x4d259d=_0x3076cb,_0x5a6c84=_0x43b4c1[_0x4d259d(0x2ba)]();if(this[_0x4d259d(0x2b6)]()[_0x4d259d(0x1a9)](_0xa744ad=>_0x5a6c84[_0x4d259d(0x10f)](_0xa744ad))[_0x4d259d(0x2e7)]>0x0){if('JlAAQ'!==_0x4d259d(0x2ed))this['drawTextEx'](_0x38c258,_0x325159['x']+_0x17643f[_0x4d259d(0x20e)]-_0x266340,_0x4e218b['y'],_0x4b1c04);else{if(this[_0x4d259d(0x1c9)]()[_0x4d259d(0x1d6)][_0x4d259d(0x30c)](/<BYPASS ELEMENT REFLECT>/i))return 0x0;return 0x1;}}else{if('LOxxz'!==_0x4d259d(0x2d4)){_0x1fa0c1[_0x4d259d(0x288)][_0x4d259d(0xb9)][_0x4d259d(0xe7)](this);if(this['_commandNameWindow'])this[_0x4d259d(0x317)]();}else return VisuMZ[_0x4d259d(0x1f0)]['Game_Action_itemMrf'][_0x4d259d(0xe7)](this,_0x43b4c1);}},Game_Action[_0x3076cb(0x288)][_0x3076cb(0x2cc)]=function(_0x5df9a7){const _0x2580cd=_0x3076cb;return VisuMZ[_0x2580cd(0x1f0)][_0x2580cd(0xec)][_0x2580cd(0x19f)][_0x2580cd(0x204)]['call'](this,_0x5df9a7);},Game_Action[_0x3076cb(0x288)][_0x3076cb(0x343)]=function(_0x250f18,_0x53f4af){const _0x1fa234=_0x3076cb,_0x3b87cd=this[_0x1fa234(0x31a)]();switch(_0x3b87cd){case _0x1fa234(0x1cb):return this[_0x1fa234(0x2c5)](_0x250f18,_0x53f4af);break;case _0x1fa234(0x2c9):return this['elementsRateProduct'](_0x250f18,_0x53f4af);break;case _0x1fa234(0x28d):return this[_0x1fa234(0x30a)](_0x250f18,_0x53f4af);break;case _0x1fa234(0x182):return this[_0x1fa234(0x200)](_0x250f18,_0x53f4af);break;default:return this[_0x1fa234(0x1c7)](_0x250f18,_0x53f4af);break;}},Game_Action['prototype'][_0x3076cb(0x31a)]=function(){const _0x85db97=_0x3076cb;if(this[_0x85db97(0x1c9)]()[_0x85db97(0x1d6)][_0x85db97(0x30c)](/<MULTI-ELEMENT RULE:[ ](.*)>/i)){const _0x57d702=String(RegExp['$1'])[_0x85db97(0x135)]()[_0x85db97(0x15f)]();switch(_0x57d702){case _0x85db97(0x176):case'maximum':case _0x85db97(0xd3):return _0x85db97(0x176);break;case _0x85db97(0x1cb):case _0x85db97(0x22c):case'lowest':return _0x85db97(0x1cb);break;case'multiply':case _0x85db97(0x1c6):case _0x85db97(0x21b):return _0x85db97(0x2c9);break;case _0x85db97(0x28d):case _0x85db97(0xa1):case _0x85db97(0x2ee):return'additive';break;case _0x85db97(0x182):case _0x85db97(0x20f):return _0x85db97(0x182);break;}}return VisuMZ[_0x85db97(0x1f0)]['Settings'][_0x85db97(0x19f)]['MultiRule'];},Game_Action[_0x3076cb(0x288)]['elementsMaxRate']=function(_0x14eb90,_0x4f105b){const _0x13558e=_0x3076cb;return _0x4f105b['length']>0x0?_0x13558e(0x146)!==_0x13558e(0x146)?_0x413b38[_0x13558e(0xef)](_0x2380e7,!![]):VisuMZ[_0x13558e(0x1f0)][_0x13558e(0xec)]['ElementRules']['RuleMaxCalcJS'][_0x13558e(0xe7)](this,_0x14eb90,_0x4f105b):0x1;},Game_Action['prototype'][_0x3076cb(0x2c5)]=function(_0x4b5ebe,_0x5ab490){const _0x222164=_0x3076cb;if(_0x5ab490[_0x222164(0x2e7)]>0x0)return VisuMZ[_0x222164(0x1f0)][_0x222164(0xec)]['ElementRules'][_0x222164(0x201)][_0x222164(0xe7)](this,_0x4b5ebe,_0x5ab490);else{if(_0x222164(0x1dd)===_0x222164(0x299)){_0x122901-=_0x4f3f1f[_0x27fd1a][_0x222164(0x32a)];if(_0x4ee237<=0x0)return _0x413944;}else return 0x1;}},Game_Action[_0x3076cb(0x288)][_0x3076cb(0x21e)]=function(_0x2a84e7,_0x4b499f){const _0x3585b1=_0x3076cb;if(_0x4b499f[_0x3585b1(0x2e7)]>0x0){if(_0x3585b1(0x226)!==_0x3585b1(0x188))return VisuMZ[_0x3585b1(0x1f0)]['Settings'][_0x3585b1(0x19f)][_0x3585b1(0x2df)][_0x3585b1(0xe7)](this,_0x2a84e7,_0x4b499f);else _0x7b8b2+=_0x2b974b(_0x48397a);}else{if(_0x3585b1(0x164)!==_0x3585b1(0x33f))return 0x1;else{if(_0x3105aa<=0x0)return 0x1;const _0x172916=_0x3585b1(0x262)[_0x3585b1(0xf0)](_0x46b09d);if(this[_0x3585b1(0x2b9)](_0x172916))return this['_cache'][_0x172916];const _0x15662c=this['getForceReceivedElementRate'](_0x5366ba);return _0x15662c===![]?this['_cache'][_0x172916]=_0x270228[_0x3585b1(0x1f0)]['Settings']['ElementRules'][_0x3585b1(0x285)][_0x3585b1(0xe7)](this,_0x7270ca):this[_0x3585b1(0x1ce)][_0x172916]=_0x15662c,this['_cache'][_0x172916];}}},Game_Action[_0x3076cb(0x288)][_0x3076cb(0x30a)]=function(_0x4578b5,_0x4903ed){const _0x885a60=_0x3076cb;if(_0x4903ed[_0x885a60(0x2e7)]>0x0)return VisuMZ[_0x885a60(0x1f0)]['Settings'][_0x885a60(0x19f)]['RuleAdditiveCalcJS']['call'](this,_0x4578b5,_0x4903ed);else{if(_0x885a60(0x1f4)===_0x885a60(0x1f4))return 0x1;else _0x4c3d35[_0x885a60(0x1f0)]['Scene_Status_create'][_0x885a60(0xe7)](this);}},Game_Action['prototype'][_0x3076cb(0x200)]=function(_0x1ebd81,_0x3d49fb){const _0x7b95b1=_0x3076cb;if(_0x3d49fb[_0x7b95b1(0x2e7)]>0x0){if('HCDXT'===_0x7b95b1(0x196)){const _0x3889fe=_0x1e7c63[_0x7b95b1(0x102)]()[_0x7b95b1(0x135)]();for(const _0x168014 in _0x24b0e1['_traitSets'][_0x3889fe]){const _0x31ec5d=_0x7b95b1(0xe9)['format'](_0x3889fe,_0x168014);_0x54b67c[_0x7b95b1(0x1f0)][_0x7b95b1(0x25a)][_0x31ec5d]=new _0x777fef(_0x4e15dc[_0x7b95b1(0xf0)](_0x168014),'i');const _0x4c4152=_0x7b95b1(0x22f)[_0x7b95b1(0xf0)](_0x3889fe,_0x168014);_0x4f83d1[_0x7b95b1(0x1f0)][_0x7b95b1(0x25a)][_0x4c4152]=new _0x1d88a0(_0x2fdef2[_0x7b95b1(0xf0)](_0x168014),'i');const _0x15c7b7=_0x7b95b1(0x205)[_0x7b95b1(0xf0)](_0x3889fe,_0x168014);_0xe3d1cb[_0x7b95b1(0x1f0)][_0x7b95b1(0x25a)][_0x15c7b7]=new _0x395a5c(_0x58be2f['format'](_0x168014),'i');const _0x576e88=_0x7b95b1(0x1ac)[_0x7b95b1(0xf0)](_0x3889fe,_0x168014);_0x16e50f[_0x7b95b1(0x1f0)][_0x7b95b1(0x25a)][_0x576e88]=new _0x5b774a(_0x290d4c[_0x7b95b1(0xf0)](_0x168014),'i');const _0x18af72='SvWeaponMass-%1-%2'[_0x7b95b1(0xf0)](_0x3889fe,_0x168014);_0x3f91a2[_0x7b95b1(0x1f0)][_0x7b95b1(0x25a)][_0x18af72]=new _0x4d72e7(_0x287a70[_0x7b95b1(0xf0)](_0x168014),'i');const _0x43e8f0='SvMotionIdleMass-%1-%2'['format'](_0x3889fe,_0x168014);_0x4661f6[_0x7b95b1(0x1f0)][_0x7b95b1(0x25a)][_0x43e8f0]=new _0xe5624b(_0x4cf7d3['format'](_0x168014),'i');}}else return VisuMZ[_0x7b95b1(0x1f0)][_0x7b95b1(0xec)][_0x7b95b1(0x19f)][_0x7b95b1(0x2cf)][_0x7b95b1(0xe7)](this,_0x1ebd81,_0x3d49fb);}else return 0x1;},Game_Action[_0x3076cb(0x288)][_0x3076cb(0x130)]=function(_0x28ea1c,_0x3770a8){const _0x114301=_0x3076cb;if(_0x3770a8['length']<=0x0)return 0x0;return _0x3770a8[_0x114301(0x16c)]((_0x3f6c71,_0x2d9219)=>_0x3f6c71+this[_0x114301(0x119)]()[_0x114301(0x2e6)](_0x2d9219),0x0);},Game_Action['prototype'][_0x3076cb(0x324)]=function(_0x462857,_0x30ffe4){const _0x338196=_0x3076cb;if(_0x30ffe4[_0x338196(0x2e7)]<=0x0)return 0x1;return _0x30ffe4[_0x338196(0x16c)]((_0x26b820,_0x1685b6)=>_0x26b820*this['subject']()[_0x338196(0x1c8)](_0x1685b6),0x1);},Game_Action['prototype'][_0x3076cb(0xbd)]=function(_0x2fed40,_0x1f73ac){const _0x462099=_0x3076cb;if(_0x1f73ac[_0x462099(0x2e7)]<=0x0)return 0x0;return _0x1f73ac[_0x462099(0x16c)]((_0x30d926,_0x44e321)=>_0x30d926+this[_0x462099(0x119)]()[_0x462099(0x2ef)](_0x44e321),0x0);},VisuMZ['ElementStatusCore'][_0x3076cb(0x15d)]=Game_BattlerBase['prototype'][_0x3076cb(0x280)],Game_BattlerBase['prototype']['initMembers']=function(){const _0x96abad=_0x3076cb;this[_0x96abad(0x1ce)]={},VisuMZ['ElementStatusCore'][_0x96abad(0x15d)]['call'](this);},VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0x1d9)]=Game_BattlerBase[_0x3076cb(0x288)]['refresh'],Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x306)]=function(){const _0x4137d1=_0x3076cb;this[_0x4137d1(0x1ce)]={},VisuMZ[_0x4137d1(0x1f0)]['Game_BattlerBase_refresh']['call'](this);},Game_BattlerBase['prototype'][_0x3076cb(0x2b9)]=function(_0x44e437){const _0x277c40=_0x3076cb;return this[_0x277c40(0x1ce)]=this[_0x277c40(0x1ce)]||{},this['_cache'][_0x44e437]!==undefined;},Game_BattlerBase[_0x3076cb(0x288)]['initElementStatusCore']=function(){const _0x1fed93=_0x3076cb;this['_traitSets']={};const _0x3d7fbc=this[_0x1fed93(0x147)]();for(const _0x4d1ae8 of _0x3d7fbc){'wjQND'==='wjQND'?this['_traitSets'][_0x4d1ae8]='':_0x167d8a[_0x1fed93(0x288)][_0x1fed93(0x313)]['call'](this);}this['applyRandomTraitSets'](),this[_0x1fed93(0x1b7)]();},Game_BattlerBase[_0x3076cb(0x288)]['applyRandomTraitSets']=function(){},Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x1b7)]=function(){const _0x297909=_0x3076cb,_0x7a1d1a=this[_0x297909(0x179)]();DataManager[_0x297909(0xe5)](this['_traitSets'],_0x7a1d1a);},Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x179)]=function(){return null;},Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x147)]=function(){const _0x4fd173=_0x3076cb;return[_0x4fd173(0x278),_0x4fd173(0x2ad),'Gender',_0x4fd173(0x20c),_0x4fd173(0x14a),_0x4fd173(0x2af),_0x4fd173(0x2c4),_0x4fd173(0x24c),_0x4fd173(0x20b),_0x4fd173(0x2e0)];},Game_BattlerBase[_0x3076cb(0x288)]['getTraitSet']=function(_0x5b4c38){const _0x48ac96=_0x3076cb;if(this[_0x48ac96(0x1bb)]===undefined)this[_0x48ac96(0xce)]();if(this[_0x48ac96(0x1bb)][_0x5b4c38]===undefined)this['initElementStatusCore']();return this[_0x48ac96(0x1bb)][_0x5b4c38];},Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x107)]=function(_0x3709ba,_0x5a1da4){const _0x23330d=_0x3076cb;if(this[_0x23330d(0x1bb)]===undefined)this[_0x23330d(0xce)]();if(this[_0x23330d(0x1bb)][_0x3709ba]===undefined)this[_0x23330d(0xce)]();this[_0x23330d(0x1bb)][_0x3709ba]=_0x5a1da4,this[_0x23330d(0x306)]();},Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x2c7)]=function(_0xda733f){const _0x3d248d=_0x3076cb;if(this[_0x3d248d(0x1bb)]===undefined)this['initElementStatusCore']();if(this[_0x3d248d(0x1bb)][_0xda733f]===undefined)this[_0x3d248d(0xce)]();const _0x4b3bd3=this[_0x3d248d(0x1bb)][_0xda733f];return DataManager[_0x3d248d(0x2c7)](_0xda733f,_0x4b3bd3);},Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x337)]=function(){const _0x4e3e00=_0x3076cb;if($gameTemp[_0x4e3e00(0x2f1)]()){console['log'](_0x4e3e00(0xc5)[_0x4e3e00(0xf0)](this[_0x4e3e00(0x341)]()));for(const _0x1a69e5 in this[_0x4e3e00(0x1bb)]){console[_0x4e3e00(0xd0)](_0x4e3e00(0x149)[_0x4e3e00(0xf0)](_0x1a69e5,this[_0x4e3e00(0x1bb)][_0x1a69e5]));}console[_0x4e3e00(0xd0)](_0x4e3e00(0x178));}},Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x2d1)]=function(_0x4303f7){const _0x55f7ce=_0x3076cb;this[_0x55f7ce(0x1bb)][_0x4303f7]=DataManager[_0x55f7ce(0x33d)](_0x4303f7),!this[_0x55f7ce(0x314)]&&this['refresh']();},VisuMZ['ElementStatusCore'][_0x3076cb(0x2d2)]=Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x128)],Game_BattlerBase['prototype']['canEquip']=function(_0xbe5ed4){const _0x5e1813=_0x3076cb;return VisuMZ[_0x5e1813(0x1f0)]['Game_BattlerBase_canEquip'][_0x5e1813(0xe7)](this,_0xbe5ed4)&&this[_0x5e1813(0x2fd)](_0xbe5ed4);},Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x2fd)]=function(_0x1732c5){const _0x26b874=_0x3076cb;if(!_0x1732c5)return!![];if(_0x1732c5[_0x26b874(0x1d6)][_0x26b874(0x30c)](/<EQUIP TRAIT (?:REQUIREMENT|REQUIREMENTS):[ ](.*)>/i)){if(_0x26b874(0x258)==='CkBDY')return _0x13cc29[_0x26b874(0x1f0)][_0x26b874(0xec)][_0x4ec7c5];else{const _0x3e555c=this[_0x26b874(0x147)](),_0x293015=String(RegExp['$1'])[_0x26b874(0xaa)](',')[_0x26b874(0x108)](_0x75b282=>_0x75b282[_0x26b874(0x102)]()[_0x26b874(0x135)]());for(const _0x459fb5 of _0x293015){if(_0x26b874(0x25f)===_0x26b874(0x25f)){if(_0x3e555c[_0x26b874(0x1cc)](_0xbeae23=>this[_0x26b874(0x143)](_0xbeae23)['toUpperCase']()[_0x26b874(0x135)]()===_0x459fb5))continue;return![];}else this[_0x26b874(0x2d1)](_0x7347b5);}}}return!![];},VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0x233)]=Game_BattlerBase[_0x3076cb(0x288)]['elementRate'],Game_BattlerBase[_0x3076cb(0x288)]['elementRate']=function(_0xced740){const _0x59cdaf=_0x3076cb;if(_0xced740<=0x0)return 0x1;const _0x3ab1c3=_0x59cdaf(0x262)[_0x59cdaf(0xf0)](_0xced740);if(this[_0x59cdaf(0x2b9)](_0x3ab1c3))return this[_0x59cdaf(0x1ce)][_0x3ab1c3];const _0x59ca91=this['getForceReceivedElementRate'](_0xced740);if(_0x59ca91===![])this[_0x59cdaf(0x1ce)][_0x3ab1c3]=VisuMZ[_0x59cdaf(0x1f0)][_0x59cdaf(0xec)]['ElementRules'][_0x59cdaf(0x285)][_0x59cdaf(0xe7)](this,_0xced740);else{if(_0x59cdaf(0x13c)!=='KuvnD'){const _0x5a52f1=this[_0x59cdaf(0x345)](_0x1c00d0[_0x59cdaf(0x292)])['sort']((_0x4d2592,_0x599172)=>_0x4d2592-_0x599172);return _0x5a52f1[_0x59cdaf(0x1a9)]((_0x1ba127,_0x16606f,_0x4b1946)=>_0x4b1946[_0x59cdaf(0x121)](_0x1ba127)===_0x16606f);}else this[_0x59cdaf(0x1ce)][_0x3ab1c3]=_0x59ca91;}return this['_cache'][_0x3ab1c3];},Game_BattlerBase[_0x3076cb(0x288)]['getForceReceivedElementRate']=function(_0x1b6957){const _0x20e53d=_0x3076cb,_0x14f89d=VisuMZ['ElementStatusCore'][_0x20e53d(0x25a)];for(const _0x177075 of this[_0x20e53d(0x237)]()){if(!_0x177075)continue;const _0x554605=_0x177075[_0x20e53d(0x1d6)];if(_0x554605[_0x20e53d(0x30c)](_0x14f89d[_0x20e53d(0x220)][_0x1b6957]))return Number(RegExp['$1'])/0x64;else{if(_0x554605['match'](_0x14f89d[_0x20e53d(0x30e)][_0x1b6957]))'KpaQP'!=='KpaQP'?(this['_cache']={},_0x38cd15[_0x20e53d(0x1f0)]['Game_BattlerBase_refresh'][_0x20e53d(0xe7)](this)):Number(RegExp['$1']);else{if(_0x554605['match'](_0x14f89d[_0x20e53d(0x1ea)][_0x1b6957])){if(_0x20e53d(0xb6)===_0x20e53d(0xb6)){var _0x5b348a=String(RegExp['$1']);try{return eval(_0x5b348a);}catch(_0x24b836){if('gxbSz'!==_0x20e53d(0x26a)){_0x1aaa6f-=_0xa969e0[_0x1d248b];if(_0x2b388f<=0x0)return _0x2ebd85;}else{if($gameTemp[_0x20e53d(0x2f1)]())console[_0x20e53d(0xd0)](_0x24b836);return![];}}}else{var _0x30b863=_0x478120(_0x170bd3['$1']);try{return _0x545626(_0x30b863);}catch(_0x2b4e02){if(_0x2264de['isPlaytest']())_0x291afa[_0x20e53d(0xd0)](_0x2b4e02);return![];}}}}}}return![];},Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x336)]=function(_0x28f2a4){const _0x4ca1bd=_0x3076cb,_0x30e41c=VisuMZ[_0x4ca1bd(0x1f0)][_0x4ca1bd(0x25a)],_0x26f2c5=(_0x2715e2,_0x3c6450)=>{const _0x15a8d8=_0x4ca1bd;if(!_0x3c6450)return _0x2715e2;const _0x287b31=_0x3c6450[_0x15a8d8(0x1d6)];if(_0x287b31['match'](_0x30e41c[_0x15a8d8(0xc3)][_0x28f2a4])){if('tMXXY'===_0x15a8d8(0x2ce)){var _0x387020=Number(RegExp['$1'])/0x64;_0x2715e2+=_0x387020;}else{const _0x7585b1=_0x2851ba['getDealtElementPlus'](_0x38b429),_0x30fba0=_0xa69723[_0x15a8d8(0x1c8)](_0x211cf5),_0x29c1d7=_0x2e1988[_0x15a8d8(0x2ef)](_0x9c8136),_0x247bf4=(0x1+_0x7585b1)*_0x30fba0+_0x29c1d7-0x1;this[_0x15a8d8(0x1c5)](_0x35741a[_0x15a8d8(0x138)](_0x247bf4)),_0x10826a=_0x15a8d8(0x260)[_0x15a8d8(0xf0)](_0x46f5a9[_0x15a8d8(0x290)](_0x247bf4*0x64));if(_0x247bf4>=0x0)_0x56a761=_0x15a8d8(0x136)[_0x15a8d8(0xf0)](_0x3e92a8);}}if(_0x287b31[_0x15a8d8(0x30c)](_0x30e41c[_0x15a8d8(0x2da)][_0x28f2a4])){var _0x387020=Number(RegExp['$1']);_0x2715e2+=_0x387020;}if(_0x287b31['match'](_0x30e41c['EleRecPlusJS'][_0x28f2a4])){if(_0x15a8d8(0x1e8)==='fgLsn'){var _0x3b1e5b=String(RegExp['$1']);try{_0x2715e2+=eval(_0x3b1e5b);}catch(_0x336223){if($gameTemp[_0x15a8d8(0x2f1)]())console[_0x15a8d8(0xd0)](_0x336223);}}else{const _0x1c2c96=_0x1926a9[_0x15a8d8(0x12a)](_0xa7a184);return _0x1c2c96&&_0x1c2c96[_0x15a8d8(0x245)];}}return _0x2715e2;};return this[_0x4ca1bd(0x237)]()[_0x4ca1bd(0x16c)](_0x26f2c5,0x0);},Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x16b)]=function(_0x314fb8){const _0x426ccf=_0x3076cb;let _0x9a09a7=VisuMZ[_0x426ccf(0x1f0)][_0x426ccf(0x233)]['call'](this,_0x314fb8);const _0x7aeb09=this['getTraitSetKeys'](),_0xb7ff45='Element%1'[_0x426ccf(0xf0)](_0x314fb8);for(const _0x4a7c15 of _0x7aeb09){const _0x857981=this['getTraitSet'](_0x4a7c15),_0x5cfd65=DataManager[_0x426ccf(0x2c7)](_0x4a7c15,_0x857981);_0x9a09a7*=_0x5cfd65[_0x426ccf(0x236)][_0xb7ff45]??0x1;}const _0xefea32=VisuMZ[_0x426ccf(0x1f0)][_0x426ccf(0x25a)],_0x30a1d0=(_0x2fbb10,_0x290b35)=>{const _0x5e1e72=_0x426ccf;if(!_0x290b35)return _0x2fbb10;const _0xbc575b=_0x290b35[_0x5e1e72(0x1d6)];if(_0xbc575b[_0x5e1e72(0x30c)](_0xefea32[_0x5e1e72(0x33e)][_0x314fb8])){if('fLySH'!=='udLmT'){var _0x507bf1=Number(RegExp['$1'])/0x64;_0x2fbb10*=_0x507bf1;}else return _0xa3db01[_0x5e1e72(0x1f0)]['Settings'][_0x5e1e72(0x19f)]['FinalizeRateJS'][_0x5e1e72(0xe7)](this,_0x2a6b20);}if(_0xbc575b[_0x5e1e72(0x30c)](_0xefea32[_0x5e1e72(0x295)][_0x314fb8])){var _0x507bf1=Number(RegExp['$1']);_0x2fbb10*=_0x507bf1;}if(_0xbc575b['match'](_0xefea32[_0x5e1e72(0x25c)][_0x314fb8])){if(_0x5e1e72(0x2e5)!==_0x5e1e72(0x141)){var _0x487532=String(RegExp['$1']);try{_0x2fbb10*=eval(_0x487532);}catch(_0x4b38ef){if($gameTemp[_0x5e1e72(0x2f1)]())console[_0x5e1e72(0xd0)](_0x4b38ef);}}else{const _0x1c9d86=this[_0x5e1e72(0x160)](_0x2c2ef2),_0x23016e=this[_0x5e1e72(0x348)](_0x2852a1)[_0x5e1e72(0x20e)];return _0x23016e<=_0x1c9d86['width']?'iconText':'icon';}}return _0x2fbb10;};return this[_0x426ccf(0x237)]()['reduce'](_0x30a1d0,_0x9a09a7);},Game_BattlerBase['prototype'][_0x3076cb(0x1e2)]=function(_0x21ccd4){const _0x2c6f65=_0x3076cb,_0xe5b5c4=VisuMZ[_0x2c6f65(0x1f0)][_0x2c6f65(0x25a)],_0x18737b=(_0x31b915,_0x413d59)=>{const _0x4209a4=_0x2c6f65;if('vmRDr'!=='APNSy'){if(!_0x413d59)return _0x31b915;const _0x216954=_0x413d59[_0x4209a4(0x1d6)];if(_0x216954[_0x4209a4(0x30c)](_0xe5b5c4[_0x4209a4(0x30d)][_0x21ccd4])){if(_0x4209a4(0x311)!==_0x4209a4(0xa5)){var _0x35e406=Number(RegExp['$1'])/0x64;_0x31b915+=_0x35e406;}else{if(this[_0x4209a4(0x1c9)]()[_0x4209a4(0x1d6)]['match'](/<BYPASS ELEMENT REFLECT>/i))return 0x0;return 0x1;}}if(_0x216954['match'](_0xe5b5c4['EleRecFlatFlt'][_0x21ccd4])){var _0x35e406=Number(RegExp['$1']);_0x31b915+=_0x35e406;}if(_0x216954[_0x4209a4(0x30c)](_0xe5b5c4[_0x4209a4(0x1fe)][_0x21ccd4])){if('ggVLt'!==_0x4209a4(0x255)){var _0x37524a=String(RegExp['$1']);try{'vCrYv'!=='eQfdI'?_0x31b915+=eval(_0x37524a):_0x424e3d+=_0x43e6da(_0x4dc920);}catch(_0x248816){if($gameTemp[_0x4209a4(0x2f1)]())console[_0x4209a4(0xd0)](_0x248816);}}else{if(_0x518876[_0x4209a4(0x2f1)]())_0x395892[_0x4209a4(0xd0)](_0x26df27);return![];}}return _0x31b915;}else{const _0x3eb422=_0xaa4a31[_0x4209a4(0x342)](_0x42727a);if(_0x3eb422)_0x461cd3[_0x4209a4(0x183)](_0x3eb422);}};return this[_0x2c6f65(0x237)]()[_0x2c6f65(0x16c)](_0x18737b,0x0);},Game_BattlerBase['prototype'][_0x3076cb(0x2e6)]=function(_0x243fde){const _0x55b765=_0x3076cb,_0x55c21a=VisuMZ['ElementStatusCore'][_0x55b765(0x25a)],_0x20f1e9=(_0x57f0c0,_0x2100cf)=>{const _0x53a7db=_0x55b765;if(!_0x2100cf)return _0x57f0c0;const _0xeeeddf=_0x2100cf[_0x53a7db(0x1d6)];if(_0xeeeddf[_0x53a7db(0x30c)](_0x55c21a[_0x53a7db(0x257)][_0x243fde])){var _0x6ebd0f=Number(RegExp['$1'])/0x64;_0x57f0c0+=_0x6ebd0f;}if(_0xeeeddf[_0x53a7db(0x30c)](_0x55c21a[_0x53a7db(0x14d)][_0x243fde])){if(_0x53a7db(0x269)===_0x53a7db(0x269)){var _0x6ebd0f=Number(RegExp['$1']);console[_0x53a7db(0xd0)](_0x55c21a[_0x53a7db(0x14d)][_0x243fde],_0x6ebd0f),_0x57f0c0+=_0x6ebd0f;}else _0x35446c['ElementStatusCore'][_0x53a7db(0x2a5)]=_0x341f2d[_0x53a7db(0x288)][_0x53a7db(0x131)],_0x5e35c8[_0x53a7db(0x288)][_0x53a7db(0x131)]=function(_0x4667a9){const _0x26fdc1=_0x53a7db;let _0x2761eb=_0x2b8937[_0x26fdc1(0x1f0)][_0x26fdc1(0x2a5)][_0x26fdc1(0xe7)](this,_0x4667a9);return _0x2761eb=this['xparamRateTraitSets'](_0x4667a9,_0x2761eb),_0x2761eb;},_0x272058[_0x53a7db(0x1f0)][_0x53a7db(0x124)]=_0x1ae47d[_0x53a7db(0x288)]['sparamRate'],_0x2d3659[_0x53a7db(0x288)][_0x53a7db(0x177)]=function(_0x25a65f){const _0x571830=_0x53a7db;let _0x3ad63c=_0x338b1d[_0x571830(0x1f0)][_0x571830(0x124)][_0x571830(0xe7)](this,_0x25a65f);return _0x3ad63c=this[_0x571830(0x184)](_0x25a65f,_0x3ad63c),_0x3ad63c;};}if(_0xeeeddf[_0x53a7db(0x30c)](_0x55c21a[_0x53a7db(0x31d)][_0x243fde])){var _0x17b929=String(RegExp['$1']);try{_0x57f0c0+=eval(_0x17b929);}catch(_0xb296c9){if(_0x53a7db(0xca)!==_0x53a7db(0x1f3)){if($gameTemp[_0x53a7db(0x2f1)]())console[_0x53a7db(0xd0)](_0xb296c9);}else{_0x3cedf0[_0x53a7db(0x288)]['refresh'][_0x53a7db(0xe7)](this),this[_0x53a7db(0x22e)](),this[_0x53a7db(0x2d7)](),this[_0x53a7db(0x261)]();if(this['_actor']&&this['_drawData'])this[_0x53a7db(0xf2)][_0x53a7db(0xe7)](this);}}}return _0x57f0c0;};return this['traitObjects']()[_0x55b765(0x16c)](_0x20f1e9,0x0);},Game_BattlerBase[_0x3076cb(0x288)]['getDealtElementRate']=function(_0x48201d){const _0x570345=_0x3076cb,_0x39b614=VisuMZ[_0x570345(0x1f0)][_0x570345(0x25a)],_0x3eb835=(_0x510a2e,_0xc38ba2)=>{const _0x3ec583=_0x570345;if(!_0xc38ba2)return _0x510a2e;const _0x51a4e0=_0xc38ba2[_0x3ec583(0x1d6)];if(_0x51a4e0[_0x3ec583(0x30c)](_0x39b614[_0x3ec583(0x1b5)][_0x48201d])){if(_0x3ec583(0xb2)===_0x3ec583(0x2be)){this[_0x3ec583(0x1fc)](_0x52f5d9,_0x146bd1,_0x2deb09[_0x3ec583(0x20e)],_0x5796b7);if(_0x31f7b5>0x0){const _0x119063=_0x479dc8[_0x3ec583(0x2a7)][_0x248c97],_0x2cd5e6=_0x21b20f[_0x3ec583(0x290)]((_0x44473f['width']-this[_0x3ec583(0x32f)]())/0x2);this[_0x3ec583(0x194)](_0x119063,_0x564e46+_0x2cd5e6,_0x324cc6,_0x3e978d[_0x3ec583(0x20e)]-_0x2cd5e6*0x2);}_0x7835f+=_0x3857a0;}else{var _0x166161=Number(RegExp['$1'])/0x64;_0x510a2e*=_0x166161;}}if(_0x51a4e0[_0x3ec583(0x30c)](_0x39b614[_0x3ec583(0x230)][_0x48201d])){var _0x166161=Number(RegExp['$1']);_0x510a2e*=_0x166161;}if(_0x51a4e0[_0x3ec583(0x30c)](_0x39b614[_0x3ec583(0x31f)][_0x48201d])){var _0x86bb61=String(RegExp['$1']);try{if(_0x3ec583(0x148)!==_0x3ec583(0x148))return _0x4b337e[_0x3ec583(0x2d5)]&&_0x4380ae[_0x3ec583(0x1de)][_0x3ec583(0x10f)]('['+_0x494d21+']');else _0x510a2e*=eval(_0x86bb61);}catch(_0x11100d){if('IwCFl'===_0x3ec583(0x1a5)){if($gameTemp[_0x3ec583(0x2f1)]())console['log'](_0x11100d);}else{if(this[_0x3ec583(0x1bb)]===_0x27230a)this[_0x3ec583(0xce)]();if(this['_traitSets'][_0x473029]===_0x1eda07)this[_0x3ec583(0xce)]();const _0x1b65ad=this['_traitSets'][_0x4637d5];return _0x253a67[_0x3ec583(0x2c7)](_0x133f9e,_0x1b65ad);}}}return _0x510a2e;};return this[_0x570345(0x237)]()[_0x570345(0x16c)](_0x3eb835,0x1);},Game_BattlerBase[_0x3076cb(0x288)]['getDealtElementFlat']=function(_0x394557){const _0x58dfb9=_0x3076cb,_0x303959=VisuMZ['ElementStatusCore']['RegExp'],_0x40afa2=(_0x52cd04,_0x5677f5)=>{const _0x555b3=_0x3904;if(_0x555b3(0x34a)==='TljeS'){if(!_0x32e6f3[_0x555b3(0x241)]())return _0x2acb41;const _0x1e4da8=this[_0x555b3(0x147)]();for(const _0x209ef1 of _0x1e4da8){const _0x230c53=this['getTraitSet'](_0x209ef1),_0x175722=_0x3405e6[_0x555b3(0x2c7)](_0x209ef1,_0x230c53);_0x498a9e*=_0x175722[_0x555b3(0x271)]!==_0x3f9aaf?_0x175722['GoldRate']:0x1;}return _0x32ce14['round'](_0x36bc82);}else{if(!_0x5677f5)return _0x52cd04;const _0x111932=_0x5677f5[_0x555b3(0x1d6)];if(_0x111932[_0x555b3(0x30c)](_0x303959[_0x555b3(0x187)][_0x394557])){var _0x4e990c=Number(RegExp['$1'])/0x64;_0x52cd04+=_0x4e990c;}if(_0x111932[_0x555b3(0x30c)](_0x303959['EleDmgFlatFlt'][_0x394557])){var _0x4e990c=Number(RegExp['$1']);_0x52cd04+=_0x4e990c;}if(_0x111932['match'](_0x303959[_0x555b3(0xa0)][_0x394557])){if(_0x555b3(0x1d4)==='dhIef')return null;else{var _0x386baf=String(RegExp['$1']);try{_0x52cd04+=eval(_0x386baf);}catch(_0x59b067){if(_0x555b3(0x2fa)!==_0x555b3(0xdd)){if($gameTemp[_0x555b3(0x2f1)]())console[_0x555b3(0xd0)](_0x59b067);}else return 0x1;}}}return _0x52cd04;}};return this['traitObjects']()[_0x58dfb9(0x16c)](_0x40afa2,0x0);},Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x1ca)]=function(){const _0xdee3dd=_0x3076cb;let _0x355b00=[];for(const _0x54e925 of this['traitObjects']()){if(!_0x54e925)continue;const _0x3788ac=_0x54e925[_0xdee3dd(0x1d6)][_0xdee3dd(0x30c)](/<ELEMENT ABSORB:[ ](.*)>/gi);if(_0x3788ac)for(const _0x500ff4 of _0x3788ac){_0x500ff4['match'](/<ELEMENT ABSORB:[ ](.*)>/i);const _0x2956bb=RegExp['$1'];if(_0x2956bb['match'](/(\d+(?:\s*,\s*\d+)*)/i)){if('XpfGy'!==_0xdee3dd(0x28b)){const _0x4937b1=this[_0xdee3dd(0x143)](_0x12b0cf),_0xf898e9=_0x58f66a[_0xdee3dd(0x2c7)](_0xba4a9,_0x4937b1);this[_0xdee3dd(0x1ce)][_0xdee3dd(0x325)]=this[_0xdee3dd(0x1ce)][_0xdee3dd(0x325)][_0xdee3dd(0x19d)](_0xf898e9[_0xdee3dd(0x1a6)]);}else{const _0x36de6b=JSON[_0xdee3dd(0x224)]('['+RegExp['$1']['match'](/\d+/g)+']');_0x355b00=_0x355b00[_0xdee3dd(0x19d)](_0x36de6b);}}else{if(_0xdee3dd(0x27e)!==_0xdee3dd(0x27e))_0x9be74c+=_0xb82891(_0x12db1b);else{const _0x4fde65=_0x2956bb[_0xdee3dd(0xaa)](',');for(const _0x131755 of _0x4fde65){if(_0xdee3dd(0xfe)!==_0xdee3dd(0x1df)){const _0x5c8abe=DataManager[_0xdee3dd(0x342)](_0x131755);if(_0x5c8abe)_0x355b00[_0xdee3dd(0x183)](_0x5c8abe);}else return _0x546337['ElementStatusCore'][_0xdee3dd(0xec)][_0xdee3dd(0x19f)][_0xdee3dd(0x2cf)][_0xdee3dd(0xe7)](this,_0x416539,_0x91ec2);}}}}}return _0x355b00;},Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x2ba)]=function(){const _0x18fc9c=_0x3076cb;let _0x160cb3=[];for(const _0x5985d8 of this[_0x18fc9c(0x237)]()){if(_0x18fc9c(0x190)===_0x18fc9c(0x190)){if(!_0x5985d8)continue;const _0x6ae797=_0x5985d8['note'][_0x18fc9c(0x30c)](/<ELEMENT REFLECT:[ ](.*)>/gi);if(_0x6ae797)for(const _0x23e61c of _0x6ae797){_0x23e61c['match'](/<ELEMENT REFLECT:[ ](.*)>/i);const _0x46a609=RegExp['$1'];if(_0x46a609['match'](/(\d+(?:\s*,\s*\d+)*)/i)){const _0xf8b8ec=JSON[_0x18fc9c(0x224)]('['+RegExp['$1'][_0x18fc9c(0x30c)](/\d+/g)+']');_0x160cb3=_0x160cb3['concat'](_0xf8b8ec);}else{if(_0x18fc9c(0xa9)===_0x18fc9c(0x18d)){let _0x4e9651=_0x43933f[_0x18fc9c(0x1f0)][_0x18fc9c(0x18f)][_0x18fc9c(0xe7)](this);return this[_0x18fc9c(0xe6)](_0x4e9651);}else{const _0x1ca5ea=_0x46a609[_0x18fc9c(0xaa)](',');for(const _0x2b4ff3 of _0x1ca5ea){const _0x44b26b=DataManager[_0x18fc9c(0x342)](_0x2b4ff3);if(_0x44b26b)_0x160cb3[_0x18fc9c(0x183)](_0x44b26b);}}}}}else this[_0x18fc9c(0x279)]();}return _0x160cb3;},Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x11f)]=function(){const _0x1d2998=_0x3076cb;for(const _0x48568a of this[_0x1d2998(0x237)]()){if('yquJE'!=='yquJE'){const _0x2dba82=_0x24a2a3(_0x394ec2['$1'])[_0x1d2998(0xaa)](/[\r\n]+/)[_0x1d2998(0x189)]('');this[_0x1d2998(0x157)][_0x1d2998(0x341)]=_0x3a4fb[_0x1d2998(0x252)](_0x2dba82);}else{if(!_0x48568a)continue;if(_0x48568a['note']['match'](/<FORCE ACTION ELEMENT:[ ]NULL>/i))return!![];}}return![];},Game_BattlerBase['prototype'][_0x3076cb(0x22a)]=function(){const _0x53b15c=_0x3076cb;for(const _0x319ff0 of this['traitObjects']()){if(_0x53b15c(0x1b2)!==_0x53b15c(0x1b2))return _0x4eabd6[_0x53b15c(0x2e7)]>0x0?_0x1dd8d1[_0x53b15c(0x1f0)]['Settings'][_0x53b15c(0x19f)][_0x53b15c(0x10b)]['call'](this,_0x57997c,_0x33f502):0x1;else{if(!_0x319ff0)continue;if(_0x319ff0[_0x53b15c(0x1d6)][_0x53b15c(0x30c)](/<FORCE ACTION ELEMENT:[ ](.*)>/i)){const _0x155dea=RegExp['$1'];if(_0x155dea['match'](/(\d+(?:\s*,\s*\d+)*)/i))return JSON['parse']('['+RegExp['$1'][_0x53b15c(0x30c)](/\d+/g)+']');else{const _0x4df9f7=_0x155dea[_0x53b15c(0xaa)](',');let _0x1b98af=[];for(const _0x36970e of _0x4df9f7){const _0x18c380=DataManager[_0x53b15c(0x342)](_0x36970e);if(_0x18c380)_0x1b98af[_0x53b15c(0x183)](_0x18c380);}return _0x1b98af;}}}}return[];},VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0x172)]=Game_BattlerBase['prototype'][_0x3076cb(0x1ee)],Game_BattlerBase['prototype'][_0x3076cb(0x1ee)]=function(_0x241de3){const _0x5db1c0=_0x3076cb;let _0x42eb02=VisuMZ[_0x5db1c0(0x1f0)][_0x5db1c0(0x172)][_0x5db1c0(0xe7)](this,_0x241de3);return this[_0x5db1c0(0x31c)](_0x241de3,_0x42eb02);},Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x31c)]=function(_0xcb193b,_0x4edbb6){const _0x39b639=_0x3076cb;if(!DataManager[_0x39b639(0x241)]())return _0x4edbb6;const _0x31c285=this[_0x39b639(0x147)](),_0x1cdce4=_0x39b639(0xde)['format'](_0xcb193b);for(const _0x54c0d2 of _0x31c285){const _0xa846e2=this['getTraitSet'](_0x54c0d2),_0x3352fe=DataManager[_0x39b639(0x2c7)](_0x54c0d2,_0xa846e2);_0x4edbb6*=_0x3352fe[_0x39b639(0xf3)][_0x1cdce4]??0x1;}return _0x4edbb6;},VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0x23c)]=Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x222)],Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x222)]=function(_0x418946){const _0x50abe0=_0x3076cb;let _0x19b9e9=VisuMZ[_0x50abe0(0x1f0)][_0x50abe0(0x23c)][_0x50abe0(0xe7)](this,_0x418946);if(Imported[_0x50abe0(0x1bf)])return _0x19b9e9;return this['xparamRateTraitSets'](_0x418946,_0x19b9e9);},Game_BattlerBase['prototype'][_0x3076cb(0x2fc)]=function(_0x13d33d,_0x570856){const _0x17a983=_0x3076cb;if(!DataManager['traitSetsEnabled']())return _0x570856;const _0x32a6ce=this[_0x17a983(0x147)](),_0xbdf447='XParam%1'[_0x17a983(0xf0)](_0x13d33d);for(const _0x15f63b of _0x32a6ce){const _0x202a4c=this[_0x17a983(0x143)](_0x15f63b),_0x1f167f=DataManager['traitSet'](_0x15f63b,_0x202a4c);_0x570856+=_0x1f167f[_0x17a983(0x221)][_0xbdf447]||0x0;}return _0x570856;},VisuMZ['ElementStatusCore'][_0x3076cb(0x349)]=Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x212)],Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x212)]=function(_0x1a5316){const _0xfda165=_0x3076cb;let _0xe6f20a=VisuMZ[_0xfda165(0x1f0)][_0xfda165(0x349)][_0xfda165(0xe7)](this,_0x1a5316);if(Imported[_0xfda165(0x1bf)])return _0xe6f20a;return this['sparamRateTraitSets'](_0x1a5316,_0xe6f20a);},Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x184)]=function(_0xa8b254,_0x41f895){const _0x1e9513=_0x3076cb;if(!DataManager[_0x1e9513(0x241)]())return _0x41f895;const _0x4d4c9c=this['getTraitSetKeys'](),_0x1f26a2=_0x1e9513(0xb1)[_0x1e9513(0xf0)](_0xa8b254);for(const _0x509dc9 of _0x4d4c9c){const _0xebfd20=this[_0x1e9513(0x143)](_0x509dc9),_0x4f5b21=DataManager[_0x1e9513(0x2c7)](_0x509dc9,_0xebfd20);_0x41f895*=_0x4f5b21[_0x1e9513(0x1af)][_0x1f26a2]??0x1;}return _0x41f895;};Imported[_0x3076cb(0x1bf)]&&(VisuMZ['ElementStatusCore'][_0x3076cb(0x2a5)]=Game_BattlerBase[_0x3076cb(0x288)]['xparamPlus'],Game_BattlerBase['prototype'][_0x3076cb(0x131)]=function(_0x3c5fb3){const _0x38f434=_0x3076cb;let _0x4fd7a4=VisuMZ[_0x38f434(0x1f0)][_0x38f434(0x2a5)][_0x38f434(0xe7)](this,_0x3c5fb3);return _0x4fd7a4=this[_0x38f434(0x2fc)](_0x3c5fb3,_0x4fd7a4),_0x4fd7a4;},VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0x124)]=Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x177)],Game_BattlerBase[_0x3076cb(0x288)]['sparamRate']=function(_0x34121b){const _0x1b5ad9=_0x3076cb;let _0x2045b0=VisuMZ['ElementStatusCore']['Game_BattlerBase_sparamRate']['call'](this,_0x34121b);return _0x2045b0=this[_0x1b5ad9(0x184)](_0x34121b,_0x2045b0),_0x2045b0;});;Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0x1ba)]=function(_0x4c38a1){const _0x43b694=_0x3076cb,_0xa9d3b7=_0x43b694(0x155);if(this[_0x43b694(0x2b9)](_0xa9d3b7))return this[_0x43b694(0x1ce)][_0xa9d3b7][_0x43b694(0x10f)](_0x4c38a1);return this[_0x43b694(0x1ce)][_0xa9d3b7]=this[_0x43b694(0x345)](Game_BattlerBase['TRAIT_EQUIP_WTYPE']),this['_cache'][_0xa9d3b7]=this[_0x43b694(0x1ce)][_0xa9d3b7][_0x43b694(0x19d)](this[_0x43b694(0x229)]()),this[_0x43b694(0x1ce)][_0xa9d3b7][_0x43b694(0x10f)](_0x4c38a1);},Game_BattlerBase['prototype'][_0x3076cb(0x229)]=function(){const _0x47d0b0=_0x3076cb;if(!DataManager[_0x47d0b0(0x241)]())return[];let _0x2c5d4c=[];const _0x282e78=this['getTraitSetKeys']();for(const _0x1d7a51 of _0x282e78){const _0x12d378=this[_0x47d0b0(0x143)](_0x1d7a51),_0x1b4fc7=DataManager[_0x47d0b0(0x2c7)](_0x1d7a51,_0x12d378);_0x2c5d4c=_0x2c5d4c['concat'](_0x1b4fc7[_0x47d0b0(0x305)]);}return _0x2c5d4c;},Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0xc2)]=function(_0x5f5613){const _0x5afd24=_0x3076cb,_0x65bcaf=_0x5afd24(0x2a0);if(this[_0x5afd24(0x2b9)](_0x65bcaf))return this[_0x5afd24(0x1ce)][_0x65bcaf][_0x5afd24(0x10f)](_0x5f5613);return this[_0x5afd24(0x1ce)][_0x65bcaf]=this[_0x5afd24(0x345)](Game_BattlerBase[_0x5afd24(0x1bc)]),this[_0x5afd24(0x1ce)][_0x65bcaf]=this[_0x5afd24(0x1ce)][_0x65bcaf]['concat'](this[_0x5afd24(0xd4)]()),this[_0x5afd24(0x1ce)][_0x65bcaf][_0x5afd24(0x10f)](_0x5f5613);},Game_BattlerBase[_0x3076cb(0x288)][_0x3076cb(0xd4)]=function(){const _0x1a515b=_0x3076cb;if(!DataManager[_0x1a515b(0x241)]())return[];let _0xd0ddbc=[];const _0x46f2bf=this[_0x1a515b(0x147)]();for(const _0x1c87f5 of _0x46f2bf){if('mBZXi'!=='ZacPt'){const _0x20a120=this[_0x1a515b(0x143)](_0x1c87f5),_0xc58662=DataManager[_0x1a515b(0x2c7)](_0x1c87f5,_0x20a120);_0xd0ddbc=_0xd0ddbc[_0x1a515b(0x19d)](_0xc58662[_0x1a515b(0x307)]);}else for(const _0x170607 of _0x532643){for(const _0x40ef34 of _0x69503d){const _0x514346='%1%2%3'[_0x1a515b(0xf0)](_0x331b6e,_0x170607,_0x40ef34);_0x1cb7c8[_0x514346]=_0x4ec959[_0x514346]||[];const _0x35eeb5=_0x55f461===_0x1a515b(0x13e)?_0xc92771:_0x34f82a,_0x241324=_0x40ef34[_0x1a515b(0x30c)](/JS/i)?_0x1a515b(0x263):'',_0x1d9aa9='(?:%1|%2)'[_0x1a515b(0xf0)](_0x3ca5dc,_0x4709fe),_0x417b43=_0x170607[_0x1a515b(0x102)](),_0x2667d7=_0x170607['match'](/RATE/i)?_0x430e89:_0xf01612,_0x37b0c5=_0x2667d7[_0x473352[_0x1a515b(0x121)](_0x40ef34)];_0x72b3b3[_0x514346][_0x5d39f6]=new _0x49de0c(_0x35eeb5[_0x1a515b(0xf0)](_0x241324,_0x1d9aa9,_0x417b43,_0x37b0c5),'i');}}}return _0xd0ddbc;},Game_BattlerBase['prototype'][_0x3076cb(0x246)]=function(){const _0x2da33d=_0x3076cb;if(!DataManager[_0x2da33d(0x241)]())return[];this[_0x2da33d(0x314)]=!![],this[_0x2da33d(0x1ce)][_0x2da33d(0x325)]=this[_0x2da33d(0x1ce)]['passiveStates']||[];const _0xe52f39=this[_0x2da33d(0x147)]();for(const _0x577907 of _0xe52f39){const _0x444597=this['getTraitSet'](_0x577907),_0x2d4b26=DataManager['traitSet'](_0x577907,_0x444597);this['_cache']['passiveStates']=this['_cache']['passiveStates'][_0x2da33d(0x19d)](_0x2d4b26[_0x2da33d(0x1a6)]);}this[_0x2da33d(0x314)]=undefined;},Game_Actor[_0x3076cb(0x288)][_0x3076cb(0x179)]=function(){return this['actor']();},VisuMZ['ElementStatusCore'][_0x3076cb(0xbc)]=Game_Actor[_0x3076cb(0x288)][_0x3076cb(0x2c3)],Game_Actor[_0x3076cb(0x288)][_0x3076cb(0x2c3)]=function(_0x5ea397){const _0x21843a=_0x3076cb;VisuMZ[_0x21843a(0x1f0)][_0x21843a(0xbc)]['call'](this,_0x5ea397),this[_0x21843a(0xce)](),this[_0x21843a(0x2a3)]();},Game_Actor['prototype']['initElementStatusCore']=function(){const _0x54fc90=_0x3076cb;Game_Battler['prototype'][_0x54fc90(0xce)]['call'](this),this[_0x54fc90(0x11a)]();},Game_Actor[_0x3076cb(0x288)][_0x3076cb(0xbf)]=function(){const _0x19a01c=_0x3076cb;if(this[_0x19a01c(0x24d)]()[_0x19a01c(0x1d6)]['match'](/<NO RANDOM TRAIT SETS>/i))return;const _0x36f5f0=this['getTraitSetKeys'](),_0x3a02ee=VisuMZ['ElementStatusCore']['Settings'];for(const _0x1de802 of _0x36f5f0){_0x3a02ee[_0x19a01c(0x12d)]&&this[_0x19a01c(0x2d1)](_0x1de802);}},Game_Actor[_0x3076cb(0x288)][_0x3076cb(0x11a)]=function(){const _0x36767a=_0x3076cb;this['_biography']=this[_0x36767a(0x23e)](),this[_0x36767a(0x24d)]()['note'][_0x36767a(0x30c)](/<BIOGRAPHY>\s*([\s\S]*)\s*<\/BIOGRAPHY>/i)&&(_0x36767a(0x320)!=='NXXGu'?(_0x5bbde6[_0x36767a(0x1f0)][_0x36767a(0x316)][_0x36767a(0xe7)](this),this[_0x36767a(0xe8)]()):this['setBiography'](RegExp['$1']));},Game_Actor[_0x3076cb(0x288)][_0x3076cb(0x24a)]=function(){const _0xc5eba4=_0x3076cb;if(this['_biography']===undefined)this[_0xc5eba4(0x11a)]();return this[_0xc5eba4(0x2f8)];},Game_Actor[_0x3076cb(0x288)]['setBiography']=function(_0x92235a){const _0x265235=_0x3076cb;if(this[_0x265235(0x2f8)]===undefined)this[_0x265235(0x11a)]();this[_0x265235(0x2f8)]=_0x92235a;},Game_Actor[_0x3076cb(0x288)]['weaponTypes']=function(){const _0x41cf32=_0x3076cb,_0x327aaf=this['traitsSet'](Game_BattlerBase[_0x41cf32(0x292)])[_0x41cf32(0x1ad)]((_0x13571b,_0x1000df)=>_0x13571b-_0x1000df);return _0x327aaf[_0x41cf32(0x1a9)]((_0xcb001f,_0x28d904,_0x2a3a3c)=>_0x2a3a3c[_0x41cf32(0x121)](_0xcb001f)===_0x28d904);},Game_Actor[_0x3076cb(0x288)][_0x3076cb(0x206)]=function(){const _0x2ec5db=_0x3076cb,_0x33aa3f=this[_0x2ec5db(0x345)](Game_BattlerBase[_0x2ec5db(0x1bc)])[_0x2ec5db(0x1ad)]((_0x3042f0,_0xe368b3)=>_0x3042f0-_0xe368b3);return _0x33aa3f[_0x2ec5db(0x1a9)]((_0xa1fb44,_0x247863,_0x3e6c78)=>_0x3e6c78[_0x2ec5db(0x121)](_0xa1fb44)===_0x247863);},Game_Enemy[_0x3076cb(0x288)][_0x3076cb(0x179)]=function(){const _0x4380eb=_0x3076cb;return this[_0x4380eb(0x1c2)]();},VisuMZ[_0x3076cb(0x1f0)]['Game_Enemy_setup']=Game_Enemy['prototype'][_0x3076cb(0x2c3)],Game_Enemy[_0x3076cb(0x288)]['setup']=function(_0x2749a8,_0x56b891,_0x450ac2){const _0x5a5420=_0x3076cb;VisuMZ['ElementStatusCore'][_0x5a5420(0x29e)]['call'](this,_0x2749a8,_0x56b891,_0x450ac2);if(!Imported[_0x5a5420(0x1cf)]){if('uGeoA'===_0x5a5420(0xa3))this[_0x5a5420(0xce)]();else{const _0x248ced=_0x12c951(_0x39c2cf['$1'])[_0x5a5420(0xaa)](/[\r\n]+/)['remove']('');_0x2c7ec7[_0x402473]=this[_0x5a5420(0x252)](_0x248ced);}}this[_0x5a5420(0x306)](),this[_0x5a5420(0x2a3)]();},Game_Enemy[_0x3076cb(0x288)][_0x3076cb(0xce)]=function(){const _0x22af48=_0x3076cb;Game_Battler[_0x22af48(0x288)][_0x22af48(0xce)][_0x22af48(0xe7)](this),this[_0x22af48(0x23d)]();},Game_Enemy['prototype'][_0x3076cb(0xbf)]=function(){const _0x3d115a=_0x3076cb;if(this['enemy']()[_0x3d115a(0x1d6)][_0x3d115a(0x30c)](/<NO RANDOM TRAIT SETS>/i))return;const _0x3dd921=this['getTraitSetKeys'](),_0x298109=VisuMZ['ElementStatusCore']['Settings'];for(const _0x19b3de of _0x3dd921){_0x298109[_0x19b3de][_0x3d115a(0x117)]&&this[_0x3d115a(0x2d1)](_0x19b3de);}},VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0x291)]=Game_Enemy['prototype'][_0x3076cb(0x341)],Game_Enemy['prototype']['name']=function(){const _0x238add=_0x3076cb;return DataManager[_0x238add(0x241)]()?this[_0x238add(0x23b)]():VisuMZ[_0x238add(0x1f0)][_0x238add(0x291)]['call'](this);},Game_Enemy['prototype'][_0x3076cb(0x23b)]=function(){const _0x339078=_0x3076cb,_0x4a51e5=_0x339078(0x341);if(this[_0x339078(0x2b9)](_0x4a51e5))return this[_0x339078(0x1ce)][_0x4a51e5];const _0x3db320=this[_0x339078(0x170)]();return _0x3db320[_0x339078(0xf0)](this['traitSet'](_0x339078(0x278))['FmtText']||'',this['traitSet']('SubElement')['FmtText']||'',this[_0x339078(0x2c7)]('Gender')['FmtText']||'',this['traitSet'](_0x339078(0x20c))[_0x339078(0xdc)]||'',this[_0x339078(0x2c7)](_0x339078(0x14a))['FmtText']||'',this[_0x339078(0x2c7)]('Alignment')[_0x339078(0xdc)]||'',this[_0x339078(0x2c7)](_0x339078(0x2c4))[_0x339078(0xdc)]||'',this[_0x339078(0x2c7)](_0x339078(0x24c))['FmtText']||'',this[_0x339078(0x2c7)](_0x339078(0x20b))['FmtText']||'',this[_0x339078(0x2c7)]('Variant')['FmtText']||'',this[_0x339078(0x1a7)](),this[_0x339078(0x309)]?this[_0x339078(0x158)]:'')[_0x339078(0x1da)](/[\s\n\r]+/g,'\x20')['trim']();},Game_Enemy[_0x3076cb(0x288)][_0x3076cb(0x170)]=function(){const _0x2a1a13=_0x3076cb;let _0x2bd863=VisuMZ['ElementStatusCore'][_0x2a1a13(0xec)][_0x2a1a13(0xf7)]['EnemyNameFmt'];return this[_0x2a1a13(0x1c2)]()[_0x2a1a13(0x1d6)][_0x2a1a13(0x30c)](/<TRAIT SET NAME FORMAT>\s*([\s\S]*)\s*<\/TRAIT SET NAME FORMAT>/i)&&(_0x2bd863=String(RegExp['$1'])),_0x2bd863=_0x2bd863[_0x2a1a13(0x1da)](/\[ELEMENT\]/gi,'%1'),_0x2bd863=_0x2bd863['replace'](/\[SUBELEMENT\]/gi,'%2'),_0x2bd863=_0x2bd863[_0x2a1a13(0x1da)](/\[GENDER\]/gi,'%3'),_0x2bd863=_0x2bd863[_0x2a1a13(0x1da)](/\[RACE\]/gi,'%4'),_0x2bd863=_0x2bd863[_0x2a1a13(0x1da)](/\[NATURE\]/gi,'%5'),_0x2bd863=_0x2bd863['replace'](/\[ALIGNMENT\]/gi,'%6'),_0x2bd863=_0x2bd863[_0x2a1a13(0x1da)](/\[BLESSING\]/gi,'%7'),_0x2bd863=_0x2bd863[_0x2a1a13(0x1da)](/\[CURSE\]/gi,'%8'),_0x2bd863=_0x2bd863[_0x2a1a13(0x1da)](/\[ZODIAC\]/gi,'%9'),_0x2bd863=_0x2bd863[_0x2a1a13(0x1da)](/\[VARIANT\]/gi,_0x2a1a13(0x110)),_0x2bd863=_0x2bd863['replace'](/\[NAME\]/gi,_0x2a1a13(0x31b)),_0x2bd863=_0x2bd863['replace'](/\[LETTER\]/gi,'%12'),_0x2bd863;},VisuMZ[_0x3076cb(0x1f0)]['Game_Enemy_setLetter']=Game_Enemy[_0x3076cb(0x288)][_0x3076cb(0x129)],Game_Enemy[_0x3076cb(0x288)][_0x3076cb(0x129)]=function(_0x3d2937){const _0xa8de17=_0x3076cb;this[_0xa8de17(0x1ce)]={},VisuMZ[_0xa8de17(0x1f0)][_0xa8de17(0x1b3)][_0xa8de17(0xe7)](this,_0x3d2937);},VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0x310)]=Game_Enemy[_0x3076cb(0x288)]['setPlural'],Game_Enemy[_0x3076cb(0x288)]['setPlural']=function(_0x4c0981){const _0x424467=_0x3076cb;this[_0x424467(0x1ce)]={},VisuMZ[_0x424467(0x1f0)][_0x424467(0x310)][_0x424467(0xe7)](this,_0x4c0981);},VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0x18f)]=Game_Enemy['prototype']['exp'],Game_Enemy[_0x3076cb(0x288)][_0x3076cb(0x165)]=function(){const _0x1e564b=_0x3076cb;let _0x5b8bce=VisuMZ[_0x1e564b(0x1f0)][_0x1e564b(0x18f)][_0x1e564b(0xe7)](this);return this[_0x1e564b(0xe6)](_0x5b8bce);},VisuMZ['ElementStatusCore']['Game_Enemy_gold']=Game_Enemy[_0x3076cb(0x288)][_0x3076cb(0xf5)],Game_Enemy[_0x3076cb(0x288)][_0x3076cb(0xf5)]=function(){const _0x4fa67e=_0x3076cb;let _0x107b3a=VisuMZ[_0x4fa67e(0x1f0)]['Game_Enemy_gold'][_0x4fa67e(0xe7)](this);return this[_0x4fa67e(0xad)](_0x107b3a);},VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0x144)]=Game_Enemy[_0x3076cb(0x288)][_0x3076cb(0x132)],Game_Enemy[_0x3076cb(0x288)][_0x3076cb(0x132)]=function(){const _0x45cfd3=_0x3076cb;let _0x1ebadf=VisuMZ[_0x45cfd3(0x1f0)]['Game_Enemy_dropItemRate'][_0x45cfd3(0xe7)](this);return this[_0x45cfd3(0x1ff)](_0x1ebadf);},Game_Enemy[_0x3076cb(0x288)][_0x3076cb(0xe6)]=function(_0x182e34){const _0x87f5a0=_0x3076cb;if(!DataManager[_0x87f5a0(0x241)]())return _0x182e34;const _0x3b5515=this['getTraitSetKeys']();for(const _0x412705 of _0x3b5515){const _0x5895ca=this['getTraitSet'](_0x412705),_0x2aed04=DataManager['traitSet'](_0x412705,_0x5895ca);_0x182e34*=_0x2aed04['EXPRate']!==undefined?_0x2aed04[_0x87f5a0(0x1f7)]:0x1;}return Math['round'](_0x182e34);},Game_Enemy[_0x3076cb(0x288)][_0x3076cb(0xad)]=function(_0x5a9325){const _0x58da7b=_0x3076cb;if(!DataManager[_0x58da7b(0x241)]())return _0x5a9325;const _0x11141e=this[_0x58da7b(0x147)]();for(const _0x2f9d9c of _0x11141e){if('SNiPN'!==_0x58da7b(0x277)){const _0x4717f4=this[_0x58da7b(0x143)](_0x2f9d9c),_0x5da186=DataManager[_0x58da7b(0x2c7)](_0x2f9d9c,_0x4717f4);_0x5a9325*=_0x5da186['GoldRate']!==undefined?_0x5da186[_0x58da7b(0x271)]:0x1;}else{const _0xa7e7cb=this['actor']();this['_helpWindow']['setText'](_0xa7e7cb[_0x58da7b(0x23e)]()),this[_0x58da7b(0x199)][_0x58da7b(0x21a)](_0xa7e7cb);}}return Math[_0x58da7b(0x290)](_0x5a9325);},Game_Enemy[_0x3076cb(0x288)][_0x3076cb(0x1ff)]=function(_0x176203){const _0x24e63f=_0x3076cb;if(!DataManager[_0x24e63f(0x241)]())return _0x176203;const _0x58295f=this[_0x24e63f(0x147)]();for(const _0x281feb of _0x58295f){const _0xc09551=this[_0x24e63f(0x143)](_0x281feb),_0x190c50=DataManager['traitSet'](_0x281feb,_0xc09551);_0x176203*=_0x190c50['DropRate']!==undefined?_0x190c50[_0x24e63f(0xb4)]:0x1;}return _0x176203;},Game_Enemy[_0x3076cb(0x288)][_0x3076cb(0x23d)]=function(){const _0x29b3ae=_0x3076cb;this[_0x29b3ae(0x157)]={'name':this['enemy']()[_0x29b3ae(0x106)],'hue':this[_0x29b3ae(0x1c2)]()[_0x29b3ae(0x168)]};const _0x229ba6=this[_0x29b3ae(0x1c2)]()['note'],_0x40ef30=this[_0x29b3ae(0x147)]();for(const _0x268178 of _0x40ef30){if(_0x29b3ae(0x207)===_0x29b3ae(0x232)){const _0x688187=_0x532ff1[_0x29b3ae(0x1d6)],_0x1530b5={'Element':/<RANDOM ELEMENT>\s*([\s\S]*)\s*<\/RANDOM ELEMENT>/i,'SubElement':/<RANDOM SUBELEMENT>\s*([\s\S]*)\s*<\/RANDOM SUBELEMENT>/i,'Gender':/<RANDOM GENDER>\s*([\s\S]*)\s*<\/RANDOM GENDER>/i,'Race':/<RANDOM RACE>\s*([\s\S]*)\s*<\/RANDOM RACE>/i,'Nature':/<RANDOM NATURE>\s*([\s\S]*)\s*<\/RANDOM NATURE>/i,'Alignment':/<RANDOM ALIGNMENT>\s*([\s\S]*)\s*<\/RANDOM ALIGNMENT>/i,'Blessing':/<RANDOM BLESSING>\s*([\s\S]*)\s*<\/RANDOM BLESSING>/i,'Curse':/<RANDOM CURSE>\s*([\s\S]*)\s*<\/RANDOM CURSE>/i,'Zodiac':/<RANDOM ZODIAC>\s*([\s\S]*)\s*<\/RANDOM ZODIAC>/i,'Variant':/<RANDOM VARIANT>\s*([\s\S]*)\s*<\/RANDOM VARIANT>/i};for(const _0x19cdae in _0x1530b5){const _0x26667e=_0x1530b5[_0x19cdae];if(_0x688187[_0x29b3ae(0x30c)](_0x26667e)){const _0x4d1e16=_0x52869b(_0x142cfa['$1'])[_0x29b3ae(0xaa)](/[\r\n]+/)['remove']('');_0x1d9743[_0x19cdae]=this[_0x29b3ae(0x252)](_0x4d1e16);}}}else{const _0x2aa11a=this[_0x29b3ae(0x2c7)](_0x268178)[_0x29b3ae(0x114)][_0x29b3ae(0x102)]()[_0x29b3ae(0x135)](),_0x4447ad=_0x268178['toUpperCase']()['trim']();if(_0x229ba6['match'](VisuMZ[_0x29b3ae(0x1f0)]['RegExp'][_0x29b3ae(0x347)[_0x29b3ae(0xf0)](_0x4447ad,_0x2aa11a)]))this[_0x29b3ae(0x157)][_0x29b3ae(0x341)]=String(RegExp['$1']);else{if(_0x229ba6[_0x29b3ae(0x30c)](VisuMZ[_0x29b3ae(0x1f0)][_0x29b3ae(0x25a)]['BattlerNameMass-%1-%2'[_0x29b3ae(0xf0)](_0x4447ad,_0x2aa11a)])){const _0xd59611=String(RegExp['$1'])['split'](/[\r\n]+/)[_0x29b3ae(0x189)]('');this[_0x29b3ae(0x157)][_0x29b3ae(0x341)]=DataManager['processRandomizedData'](_0xd59611);}}if(_0x229ba6[_0x29b3ae(0x30c)](VisuMZ[_0x29b3ae(0x1f0)][_0x29b3ae(0x25a)][_0x29b3ae(0xd8)[_0x29b3ae(0xf0)](_0x4447ad,_0x2aa11a)])){if('ZvWvx'!==_0x29b3ae(0x242))this[_0x29b3ae(0x157)]['hue']=Number(RegExp['$1'])[_0x29b3ae(0x122)](0x0,0x168);else{let _0x142331=[],_0x53703f=0x0;_0x126c3d=_0x4a3cc9[_0x29b3ae(0x102)]()[_0x29b3ae(0x135)]();const _0x3e8bb6=this[_0x29b3ae(0x1bb)][_0x3ff358];for(const _0x17a988 in _0x3e8bb6){const _0x2ee739=_0x3e8bb6[_0x17a988];_0x2ee739[_0x29b3ae(0x1a2)]&&(_0x142331[_0x29b3ae(0x183)](_0x17a988),_0x53703f+=_0x2ee739[_0x29b3ae(0x32a)]);}if(_0x53703f<=0x0)return'';let _0x3117c1=_0x4cc1e4[_0x29b3ae(0x2dc)]()*_0x53703f;for(const _0x431a59 of _0x142331){_0x3117c1-=_0x3e8bb6[_0x431a59][_0x29b3ae(0x32a)];if(_0x3117c1<=0x0)return _0x431a59;}return'';}}else{if(_0x229ba6['match'](VisuMZ[_0x29b3ae(0x1f0)][_0x29b3ae(0x25a)][_0x29b3ae(0x211)[_0x29b3ae(0xf0)](_0x4447ad,_0x2aa11a)])){const _0x10869e=String(RegExp['$1'])[_0x29b3ae(0xaa)](/[\r\n]+/)['remove']('');this[_0x29b3ae(0x157)]['hue']=Number(DataManager['processRandomizedData'](_0x10869e))[_0x29b3ae(0x122)](0x0,0x168);}}}}},Game_Enemy['prototype'][_0x3076cb(0x106)]=function(){const _0x397efa=_0x3076cb;if(!this[_0x397efa(0x157)])this[_0x397efa(0x23d)]();return this[_0x397efa(0x157)][_0x397efa(0x341)];},Game_Enemy[_0x3076cb(0x288)][_0x3076cb(0x168)]=function(){const _0x836836=_0x3076cb;if(!this[_0x836836(0x157)])this[_0x836836(0x23d)]();return this[_0x836836(0x157)][_0x836836(0x1cd)];},VisuMZ[_0x3076cb(0x1f0)]['Game_Enemy_transform']=Game_Enemy[_0x3076cb(0x288)][_0x3076cb(0x346)],Game_Enemy[_0x3076cb(0x288)][_0x3076cb(0x346)]=function(_0x2fe0d6){const _0x10cbc5=_0x3076cb;VisuMZ[_0x10cbc5(0x1f0)][_0x10cbc5(0x2de)]['call'](this,_0x2fe0d6),this[_0x10cbc5(0x23d)]();},Scene_Status[_0x3076cb(0x288)][_0x3076cb(0x29d)]=function(){const _0x230447=_0x3076cb;if(ConfigManager[_0x230447(0xbb)]&&ConfigManager[_0x230447(0x1a3)]!==undefined)return ConfigManager[_0x230447(0x1a3)];else{if(this['isUseElementStatusCoreUpdatedLayout']()){if(_0x230447(0x248)===_0x230447(0x1c3)){const _0x2e2361=this[_0x230447(0x143)](_0x23c072),_0x2e9790=_0x11882e[_0x230447(0x2c7)](_0x2aa6d5,_0x2e2361);_0x22a557+=_0x2e9790[_0x230447(0x221)][_0x19b695]||0x0;}else return this[_0x230447(0x2aa)]()[_0x230447(0x30c)](/LOWER/i);}else Scene_MenuBase['prototype']['isRightInputMode'][_0x230447(0xe7)](this);}},Scene_Status['prototype'][_0x3076cb(0x2aa)]=function(){const _0x142273=_0x3076cb;return VisuMZ[_0x142273(0x1f0)][_0x142273(0xec)]['StatusMenu'][_0x142273(0xb0)];},Scene_Status['prototype'][_0x3076cb(0x327)]=function(){const _0x28772b=_0x3076cb;return VisuMZ[_0x28772b(0x1f0)]['Settings']['StatusMenu'][_0x28772b(0x1ae)];},VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0x2f3)]=Scene_Status[_0x3076cb(0x288)][_0x3076cb(0x2e2)],Scene_Status[_0x3076cb(0x288)][_0x3076cb(0x2e2)]=function(){const _0x54edfd=_0x3076cb;this[_0x54edfd(0x327)]()?(this[_0x54edfd(0x332)](),this[_0x54edfd(0x18e)]()):_0x54edfd(0x181)===_0x54edfd(0x219)?_0x5c5ebe=_0x3ccbba[_0x54edfd(0x176)](_0x1bd14d,_0x4286d9):VisuMZ[_0x54edfd(0x1f0)][_0x54edfd(0x2f3)][_0x54edfd(0xe7)](this);},Scene_Status[_0x3076cb(0x288)][_0x3076cb(0x332)]=function(){const _0x2a90a5=_0x3076cb;Scene_MenuBase['prototype'][_0x2a90a5(0x2e2)][_0x2a90a5(0xe7)](this),this[_0x2a90a5(0x2e8)](),this['createCategoryWindow'](),this[_0x2a90a5(0xb5)]();},Scene_Status[_0x3076cb(0x288)][_0x3076cb(0x18e)]=function(){const _0x50b965=_0x3076cb;if(!Imported[_0x50b965(0x1bf)])return;const _0x4280d0=Scene_Status[_0x50b965(0x2ac)][_0x50b965(0x2bb)];this[_0x50b965(0x254)][_0x50b965(0xed)](_0x4280d0),this[_0x50b965(0x18a)][_0x50b965(0xed)](_0x4280d0),this['_dataWindow'][_0x50b965(0xed)](_0x4280d0);},Scene_Status[_0x3076cb(0x288)][_0x3076cb(0x2cd)]=function(){const _0x532c72=_0x3076cb;return this[_0x532c72(0x327)]()?Scene_MenuBase['prototype'][_0x532c72(0x2cd)]['call'](this):0x0;},Scene_Status[_0x3076cb(0x288)][_0x3076cb(0x1e9)]=function(){const _0x119f91=_0x3076cb;if(this[_0x119f91(0x327)]()){if(_0x119f91(0x319)!==_0x119f91(0x1aa))return this[_0x119f91(0x1a1)]();else this[_0x119f91(0x194)](_0x21a281[_0x119f91(0x33a)],_0x451372,_0x26029e,_0x1a73fc-_0x2312a7*0x2);}else{if('IdmIi'!=='IdmIi'){const _0x59b433=_0x8f48c8[_0x119f91(0x1f0)][_0x119f91(0xec)][_0x119f91(0xc9)];let _0x4a0786=_0x59b433[_0x119f91(0x326)]!==_0x1cc75a?_0x59b433[_0x119f91(0x326)]:0x13;return _0x40810c[_0x119f91(0x2a9)](_0x4a0786);}else return Scene_MenuBase[_0x119f91(0x288)][_0x119f91(0x1e9)][_0x119f91(0xe7)](this);}},Scene_Status[_0x3076cb(0x288)]['helpWindowRectElementStatusCore']=function(){const _0x5a24b7=0x0,_0xc49753=this['helpAreaTop'](),_0x253a8a=Graphics['boxWidth'],_0x252086=this['helpAreaHeight']();return new Rectangle(_0x5a24b7,_0xc49753,_0x253a8a,_0x252086);},Scene_Status['prototype'][_0x3076cb(0x2a8)]=function(){const _0xd692a9=_0x3076cb,_0x560c98=this[_0xd692a9(0x27f)]();this[_0xd692a9(0x18a)]=new Window_StatusCategory(_0x560c98),this[_0xd692a9(0x18a)][_0xd692a9(0x2d9)](_0xd692a9(0xf6),this[_0xd692a9(0x2a1)]['bind'](this)),this[_0xd692a9(0x18a)]['setHandler'](_0xd692a9(0xd6),this[_0xd692a9(0x12f)]['bind'](this)),this[_0xd692a9(0x18a)][_0xd692a9(0x2d9)](_0xd692a9(0x9e),this[_0xd692a9(0x11d)][_0xd692a9(0x115)](this)),this[_0xd692a9(0x1eb)](this[_0xd692a9(0x18a)]);},Scene_Status['prototype'][_0x3076cb(0x27f)]=function(){const _0x21df4f=_0x3076cb,_0x228ae2=Graphics['boxWidth'],_0x34f4f4=this[_0x21df4f(0xe0)](0x1,!![]),_0x5069cb=0x0;let _0x44cd25=0x0;if(this['updatedLayoutStyle']()['match'](/TOP/i)){if(_0x21df4f(0x113)!==_0x21df4f(0x113))for(const _0x10f9ca of _0x163c4a){const _0x510c75=_0x21df4f(0x21c)[_0x21df4f(0xf0)](_0x442b36,_0x5223ef,_0x10f9ca);_0x19af89[_0x510c75]=_0x3f4bca[_0x510c75]||[];const _0x497693=_0x21783e===_0x21df4f(0x13e)?_0x40a04c:_0x30ca84,_0x358d7f=_0x10f9ca[_0x21df4f(0x30c)](/JS/i)?_0x21df4f(0x263):'',_0x1116bd=_0x21df4f(0x259)['format'](_0x57c575,_0x24f1ab),_0x1fc75d=_0x1756df[_0x21df4f(0x102)](),_0x48d019=_0x255275[_0x21df4f(0x30c)](/RATE/i)?_0x5b7cf2:_0x156d52,_0xb3d384=_0x48d019[_0x8b6509[_0x21df4f(0x121)](_0x10f9ca)];_0x3898ab[_0x510c75][_0x37fbfd]=new _0x5a8000(_0x497693[_0x21df4f(0xf0)](_0x358d7f,_0x1116bd,_0x1fc75d,_0xb3d384),'i');}else _0x44cd25=this[_0x21df4f(0x228)]();}else _0x21df4f(0x2bf)===_0x21df4f(0x2bf)?_0x44cd25=this[_0x21df4f(0x153)]()-_0x34f4f4:_0x5ed4a8['push'](_0x14e04f);return new Rectangle(_0x5069cb,_0x44cd25,_0x228ae2,_0x34f4f4);},Scene_Status[_0x3076cb(0x288)][_0x3076cb(0xb5)]=function(){const _0x2a4c94=_0x3076cb,_0x351473=this[_0x2a4c94(0x321)]();this[_0x2a4c94(0x199)]=new Window_StatusData(_0x351473),this[_0x2a4c94(0x1eb)](this[_0x2a4c94(0x199)]),this[_0x2a4c94(0x18a)][_0x2a4c94(0x2e9)](this[_0x2a4c94(0x199)]);},Scene_Status[_0x3076cb(0x288)][_0x3076cb(0x321)]=function(){const _0x11fd21=_0x3076cb,_0x3b1861=Graphics[_0x11fd21(0xa8)],_0x38db57=this[_0x11fd21(0xac)]()-this[_0x11fd21(0x18a)][_0x11fd21(0x234)],_0x46b490=0x0;let _0x3ee864=0x0;return this[_0x11fd21(0x2aa)]()[_0x11fd21(0x30c)](/TOP/i)?_0x3ee864=this['_categoryWindow']['y']+this[_0x11fd21(0x18a)][_0x11fd21(0x234)]:_0x3ee864=this[_0x11fd21(0x228)](),new Rectangle(_0x46b490,_0x3ee864,_0x3b1861,_0x38db57);},VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0xf4)]=Scene_Status[_0x3076cb(0x288)][_0x3076cb(0x154)],Scene_Status[_0x3076cb(0x288)][_0x3076cb(0x154)]=function(){const _0x8503e6=_0x3076cb;if(this['isUseElementStatusCoreUpdatedLayout']())this[_0x8503e6(0x279)]();else{if('LHHKq'===_0x8503e6(0x25b)){const _0x8ad6e9=_0x4d81e7[_0x8503e6(0x288)]['getTraitSetKeys']();if(_0x4d2a53['VisuMZ_1_BattleCore']){const _0xddb967=_0x8503e6(0x16d),_0x3de034=_0x8503e6(0x275),_0xbe7c26=_0x8503e6(0x1e3),_0x1938b8='<%1\x20SIDEVIEW\x20BATTLERS>\x5cs*([\x5cs\x5cS]*)\x5cs*<\x5c/%1\x20SIDEVIEW\x20BATTLERS>',_0x3eac2b=_0x8503e6(0x267),_0x5988f7=_0x8503e6(0x312);for(const _0x1e2e0e of _0x8ad6e9){const _0x1d22f5=_0x1e2e0e[_0x8503e6(0x102)]()[_0x8503e6(0x135)]();for(const _0x172efb in _0x59a628[_0x8503e6(0x1bb)][_0x1d22f5]){const _0x3fd3f8='SvBattlerSolo-%1-%2'[_0x8503e6(0xf0)](_0x1d22f5,_0x172efb);_0xdad930[_0x8503e6(0x1f0)]['RegExp'][_0x3fd3f8]=new _0x4f6058(_0xddb967[_0x8503e6(0xf0)](_0x172efb),'i');const _0x409db8=_0x8503e6(0x22f)[_0x8503e6(0xf0)](_0x1d22f5,_0x172efb);_0x179992['ElementStatusCore'][_0x8503e6(0x25a)][_0x409db8]=new _0x423aea(_0x3de034['format'](_0x172efb),'i');const _0x310745=_0x8503e6(0x205)[_0x8503e6(0xf0)](_0x1d22f5,_0x172efb);_0x165013['ElementStatusCore']['RegExp'][_0x310745]=new _0x3fe1ac(_0xbe7c26[_0x8503e6(0xf0)](_0x172efb),'i');const _0x23a10f=_0x8503e6(0x1ac)[_0x8503e6(0xf0)](_0x1d22f5,_0x172efb);_0x43009f[_0x8503e6(0x1f0)][_0x8503e6(0x25a)][_0x23a10f]=new _0x9a9303(_0x1938b8['format'](_0x172efb),'i');const _0x542a21=_0x8503e6(0xb3)[_0x8503e6(0xf0)](_0x1d22f5,_0x172efb);_0x7cfe00[_0x8503e6(0x1f0)][_0x8503e6(0x25a)][_0x542a21]=new _0x2c9886(_0x3eac2b[_0x8503e6(0xf0)](_0x172efb),'i');const _0x2b0d95='SvMotionIdleMass-%1-%2'['format'](_0x1d22f5,_0x172efb);_0x564db5[_0x8503e6(0x1f0)]['RegExp'][_0x2b0d95]=new _0xfc34b3(_0x5988f7[_0x8503e6(0xf0)](_0x172efb),'i');}}}}else VisuMZ[_0x8503e6(0x1f0)][_0x8503e6(0xf4)]['call'](this);}},Scene_Status['prototype']['refreshActorElementStatusCore']=function(){const _0x637f3a=_0x3076cb,_0x5128b7=this[_0x637f3a(0x24d)]();this[_0x637f3a(0x254)]['setText'](_0x5128b7[_0x637f3a(0x23e)]()),this['_dataWindow'][_0x637f3a(0x21a)](_0x5128b7);},VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0x268)]=Scene_Status['prototype'][_0x3076cb(0x24e)],Scene_Status['prototype'][_0x3076cb(0x24e)]=function(){const _0x3c9e03=_0x3076cb;this[_0x3c9e03(0x327)]()?this[_0x3c9e03(0x283)]():VisuMZ[_0x3c9e03(0x1f0)]['Scene_Status_onActorChange'][_0x3c9e03(0xe7)](this);},Scene_Status[_0x3076cb(0x288)][_0x3076cb(0x283)]=function(){const _0x395873=_0x3076cb;Scene_MenuBase[_0x395873(0x288)][_0x395873(0x24e)][_0x395873(0xe7)](this),this['refreshActor'](),this[_0x395873(0x18a)][_0x395873(0xff)]();},Window_Base['prototype'][_0x3076cb(0x1fc)]=function(_0x128cd3,_0x3d8e08,_0x579792,_0x3f7be7,_0x9b856e){const _0x482cca=_0x3076cb;_0x9b856e=Math['max'](_0x9b856e||0x1,0x1);while(_0x9b856e--){if(_0x482cca(0x318)==='IDXsJ'){const _0x2ee62a=_0x30298e(_0x4ae4c3['$1'])['split'](/[\r\n]+/);for(const _0x58d401 of _0x2ee62a){if(_0x58d401[_0x482cca(0x30c)](/(.*):[ ](.*)/i)){const _0x187430=_0x57d479(_0x384833['$1'])[_0x482cca(0x102)]()[_0x482cca(0x135)](),_0x273fa5=_0x4daec8(_0x5d21db['$2']),_0x9e64c8=_0x79ec46[_0x187430];_0x9e64c8&&(_0x33f487[_0x9e64c8]=this[_0x482cca(0x2b1)](_0x273fa5));}}}else{_0x3f7be7=_0x3f7be7||this['lineHeight'](),this['contentsBack'][_0x482cca(0x100)]=0xa0;const _0x3645e7=ColorManager[_0x482cca(0x1ef)]();this[_0x482cca(0x198)][_0x482cca(0x2e3)](_0x128cd3+0x1,_0x3d8e08+0x1,_0x579792-0x2,_0x3f7be7-0x2,_0x3645e7),this[_0x482cca(0x198)][_0x482cca(0x100)]=0xff;}}};function Window_StatusCategory(){this['initialize'](...arguments);}Window_StatusCategory[_0x3076cb(0x32b)]=VisuMZ[_0x3076cb(0x1f0)][_0x3076cb(0xec)][_0x3076cb(0x287)],Window_StatusCategory[_0x3076cb(0x288)]=Object[_0x3076cb(0x2e2)](Window_HorzCommand[_0x3076cb(0x288)]),Window_StatusCategory['prototype'][_0x3076cb(0x33c)]=Window_StatusCategory,Window_StatusCategory['prototype'][_0x3076cb(0x180)]=function(_0x205256){const _0x2cb18a=_0x3076cb;Window_HorzCommand[_0x2cb18a(0x288)][_0x2cb18a(0x180)][_0x2cb18a(0xe7)](this,_0x205256),this['createCommandNameWindow'](_0x205256);},Window_StatusCategory[_0x3076cb(0x288)][_0x3076cb(0x2fb)]=function(_0x49f9da){const _0x46a119=_0x3076cb,_0x19cc6a=new Rectangle(0x0,0x0,_0x49f9da[_0x46a119(0x20e)],_0x49f9da[_0x46a119(0x234)]);this[_0x46a119(0x2b0)]=new Window_Base(_0x19cc6a),this[_0x46a119(0x2b0)]['opacity']=0x0,this[_0x46a119(0x2fe)](this['_commandNameWindow']),this[_0x46a119(0x317)]();},Window_StatusCategory['prototype'][_0x3076cb(0xb9)]=function(){const _0x3b9d06=_0x3076cb;Window_HorzCommand[_0x3b9d06(0x288)][_0x3b9d06(0xb9)][_0x3b9d06(0xe7)](this);if(this[_0x3b9d06(0x2b0)])this['updateCommandNameWindow']();},Window_StatusCategory['prototype'][_0x3076cb(0x317)]=function(){const _0x3b353b=_0x3076cb,_0x23cf9d=this[_0x3b353b(0x2b0)];_0x23cf9d['contents'][_0x3b353b(0x2f6)]();const _0x10321d=this[_0x3b353b(0x2ea)](this['index']());if(_0x10321d===_0x3b353b(0xba)){const _0x3758ac=this[_0x3b353b(0x160)](this[_0x3b353b(0xae)]());let _0xe782d8=this[_0x3b353b(0x304)](this[_0x3b353b(0xae)]());_0xe782d8=_0xe782d8[_0x3b353b(0x1da)](/\\I\[(\d+)\]/gi,''),_0x23cf9d['resetFontSettings'](),this[_0x3b353b(0x243)](_0xe782d8,_0x3758ac),this[_0x3b353b(0x104)](_0xe782d8,_0x3758ac),this['commandNameWindowCenter'](_0xe782d8,_0x3758ac);}},Window_StatusCategory[_0x3076cb(0x288)][_0x3076cb(0x243)]=function(_0x4ce3d5,_0x1974c1){},Window_StatusCategory['prototype'][_0x3076cb(0x104)]=function(_0x5b4d8c,_0x5fd06c){const _0x293a81=_0x3076cb,_0x17c4f0=this[_0x293a81(0x2b0)];_0x17c4f0['drawText'](_0x5b4d8c,0x0,_0x5fd06c['y'],_0x17c4f0['innerWidth'],_0x293a81(0x1d0));},Window_StatusCategory[_0x3076cb(0x288)][_0x3076cb(0x103)]=function(_0x5b78a9,_0xc543dc){const _0x744ffd=_0x3076cb,_0x3091a6=this[_0x744ffd(0x2b0)],_0x177d9d=$gameSystem['windowPadding'](),_0x53194b=_0xc543dc['x']+Math['floor'](_0xc543dc[_0x744ffd(0x20e)]/0x2)+_0x177d9d;_0x3091a6['x']=_0x3091a6['width']/-0x2+_0x53194b,_0x3091a6['y']=Math[_0x744ffd(0xeb)](_0xc543dc[_0x744ffd(0x234)]/0x2);},Window_StatusCategory[_0x3076cb(0x288)][_0x3076cb(0xfa)]=function(){const _0x46167d=_0x3076cb;return VisuMZ[_0x46167d(0x1f0)][_0x46167d(0xec)][_0x46167d(0x287)][_0x46167d(0x2e7)];},Window_StatusCategory[_0x3076cb(0x288)][_0x3076cb(0x126)]=function(){const _0x5b6e90=_0x3076cb;Window_HorzCommand[_0x5b6e90(0x288)]['update'][_0x5b6e90(0xe7)](this);if(this['_itemWindow']){if('QmkvO'===_0x5b6e90(0x33b))this[_0x5b6e90(0x266)]['setDrawData'](this[_0x5b6e90(0x173)]());else return _0x323b74['prototype'][_0x5b6e90(0x1e9)][_0x5b6e90(0xe7)](this);}},Window_StatusCategory[_0x3076cb(0x288)][_0x3076cb(0x2e9)]=function(_0x3dffe2){const _0x1eade7=_0x3076cb;this[_0x1eade7(0x266)]=_0x3dffe2;},Window_StatusCategory[_0x3076cb(0x288)][_0x3076cb(0x112)]=function(){const _0x1843be=_0x3076cb;for(const _0x16a004 of Window_StatusCategory[_0x1843be(0x32b)]){const _0x9d823c=_0x16a004[_0x1843be(0x1d7)],_0x513bf8=_0x16a004[_0x1843be(0x2bc)];let _0x3dcfa8=_0x16a004['Text'];if(['',_0x1843be(0x21f)][_0x1843be(0x10f)](_0x3dcfa8))continue;_0x513bf8>0x0&&this[_0x1843be(0x296)]()!==_0x1843be(0x16a)&&(_0x3dcfa8=_0x1843be(0x166)[_0x1843be(0xf0)](_0x513bf8,_0x3dcfa8));const _0x4ed7dd=_0x16a004[_0x1843be(0x31e)];this['addCommand'](_0x3dcfa8,_0x9d823c,!![],_0x4ed7dd);}},Window_StatusCategory[_0x3076cb(0x288)][_0x3076cb(0x11b)]=function(){const _0x2fea65=_0x3076cb;return VisuMZ[_0x2fea65(0x1f0)]['Settings']['StatusMenu'][_0x2fea65(0x34c)];},Window_StatusCategory[_0x3076cb(0x288)][_0x3076cb(0x1f5)]=function(_0x4c48dc){const _0x1cb900=_0x3076cb,_0x1ba5df=this[_0x1cb900(0x2ea)](_0x4c48dc);if(_0x1ba5df===_0x1cb900(0xab))_0x1cb900(0x344)!==_0x1cb900(0x21d)?this[_0x1cb900(0x29b)](_0x4c48dc):_0x1a83b9[_0x1cb900(0xd0)]('%1:\x20%2'[_0x1cb900(0xf0)](_0x43542d,this['_traitSets'][_0xf35b2d]));else{if(_0x1ba5df===_0x1cb900(0xba)){if(_0x1cb900(0x282)!=='geSuy')return _0x1cb900(0xba);else this[_0x1cb900(0xee)](_0x4c48dc);}else Window_HorzCommand[_0x1cb900(0x288)]['drawItem'][_0x1cb900(0xe7)](this,_0x4c48dc);}},Window_StatusCategory[_0x3076cb(0x288)][_0x3076cb(0x296)]=function(){const _0x28172b=_0x3076cb;return VisuMZ[_0x28172b(0x1f0)][_0x28172b(0xec)][_0x28172b(0xc9)]['CmdStyle'];},Window_StatusCategory['prototype'][_0x3076cb(0x2ea)]=function(_0x394c07){const _0x1185df=_0x3076cb;if(_0x394c07<0x0)return _0x1185df(0x16a);const _0x153b06=this[_0x1185df(0x296)]();if(_0x153b06!=='auto')return _0x153b06;else{if(this['maxItems']()>0x0){if(_0x1185df(0x169)!==_0x1185df(0x169)){var _0x382132=_0x429e67(_0x3be1df['$1']);_0x4a8f7d*=_0x382132;}else{const _0x140cb=this['commandName'](_0x394c07);if(_0x140cb[_0x1185df(0x30c)](/\\I\[(\d+)\]/i)){const _0x183ec6=this['itemLineRect'](_0x394c07),_0x3f5c55=this[_0x1185df(0x348)](_0x140cb)[_0x1185df(0x20e)];if(_0x3f5c55<=_0x183ec6['width'])return'iconText';else{if(_0x1185df(0x217)===_0x1185df(0x217))return _0x1185df(0xba);else{if(_0x1fc810[_0x1185df(0x2e7)]<=0x0)return 0x1;return _0x3e1a72['reduce']((_0x400fb4,_0x2c2e8f)=>_0x400fb4*this[_0x1185df(0x119)]()[_0x1185df(0x1c8)](_0x2c2e8f),0x1);}}}}}}return _0x1185df(0x16a);},Window_StatusCategory[_0x3076cb(0x288)][_0x3076cb(0x29b)]=function(_0x13a552){const _0x412205=_0x3076cb,_0x3552cd=this[_0x412205(0x160)](_0x13a552),_0x232f95=this[_0x412205(0x304)](_0x13a552),_0x3b94d0=this['textSizeEx'](_0x232f95)[_0x412205(0x20e)];this[_0x412205(0x17f)](this['isCommandEnabled'](_0x13a552));const _0x2a1c75=this[_0x412205(0x11b)]();if(_0x2a1c75===_0x412205(0x2d8))this[_0x412205(0x194)](_0x232f95,_0x3552cd['x']+_0x3552cd[_0x412205(0x20e)]-_0x3b94d0,_0x3552cd['y'],_0x3b94d0);else{if(_0x2a1c75===_0x412205(0x1d0)){const _0x3388a3=_0x3552cd['x']+Math[_0x412205(0xeb)]((_0x3552cd[_0x412205(0x20e)]-_0x3b94d0)/0x2);this['drawTextEx'](_0x232f95,_0x3388a3,_0x3552cd['y'],_0x3b94d0);}else this['drawTextEx'](_0x232f95,_0x3552cd['x'],_0x3552cd['y'],_0x3b94d0);}},Window_StatusCategory[_0x3076cb(0x288)][_0x3076cb(0xee)]=function(_0x5779bd){const _0x20021a=_0x3076cb;this[_0x20021a(0x304)](_0x5779bd)[_0x20021a(0x30c)](/\\I\[(\d+)\]/i);const _0x128912=Number(RegExp['$1'])||0x0,_0x85c80b=this[_0x20021a(0x160)](_0x5779bd),_0x5920f8=_0x85c80b['x']+Math['floor']((_0x85c80b['width']-ImageManager[_0x20021a(0x213)])/0x2),_0x43c5e5=_0x85c80b['y']+(_0x85c80b['height']-ImageManager[_0x20021a(0x208)])/0x2;this[_0x20021a(0x333)](_0x128912,_0x5920f8,_0x43c5e5);};function Window_StatusData(){this['initialize'](...arguments);}Window_StatusData[_0x3076cb(0x288)]=Object['create'](Window_StatusBase['prototype']),Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x33c)]=Window_MenuStatus,Window_StatusData[_0x3076cb(0xe2)]=['Gender',_0x3076cb(0x14a),_0x3076cb(0x2c4),'Zodiac'][_0x3076cb(0x1a9)](_0x43bec2=>{const _0x344e41=_0x3076cb,_0x3dc32a=DataManager[_0x344e41(0x12a)](_0x43bec2);return _0x3dc32a&&_0x3dc32a['Visible'];}),Window_StatusData[_0x3076cb(0x19b)]=['Race',_0x3076cb(0x2af),_0x3076cb(0x24c),'Variant'][_0x3076cb(0x1a9)](_0x520aed=>{const _0x535327=_0x3076cb,_0x15b7e6=DataManager[_0x535327(0x12a)](_0x520aed);return _0x15b7e6&&_0x15b7e6['Visible'];}),Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x180)]=function(_0x8c37a4){const _0x5ebec1=_0x3076cb;this[_0x5ebec1(0x19e)]=$gameSystem[_0x5ebec1(0x265)](),Window_StatusBase[_0x5ebec1(0x288)]['initialize']['call'](this,_0x8c37a4),this['_actor']=null,this[_0x5ebec1(0xf2)]=null;},Window_StatusData['prototype'][_0x3076cb(0x2d7)]=function(){const _0x12d1c2=_0x3076cb;Window_StatusBase[_0x12d1c2(0x288)][_0x12d1c2(0x2d7)][_0x12d1c2(0xe7)](this),this[_0x12d1c2(0x12b)][_0x12d1c2(0x17c)]=this[_0x12d1c2(0x19e)];},Window_StatusData['prototype'][_0x3076cb(0x1e0)]=function(){const _0x272831=_0x3076cb;return this[_0x272831(0x12b)][_0x272831(0x17c)]/$gameSystem[_0x272831(0x265)]();},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x333)]=function(_0x323dca,_0x54df1b,_0x215aee){const _0x3e937a=_0x3076cb,_0x396161=ImageManager[_0x3e937a(0x303)](_0x3e937a(0x251)),_0x2ce59c=ImageManager['iconWidth'],_0x57b4be=ImageManager[_0x3e937a(0x208)],_0x21ea48=_0x323dca%0x10*_0x2ce59c,_0x8838d6=Math['floor'](_0x323dca/0x10)*_0x57b4be,_0x49b40b=Math[_0x3e937a(0x247)](_0x2ce59c*this[_0x3e937a(0x1e0)]()),_0x557258=Math['ceil'](_0x57b4be*this[_0x3e937a(0x1e0)]());this[_0x3e937a(0x12b)][_0x3e937a(0x225)](_0x396161,_0x21ea48,_0x8838d6,_0x2ce59c,_0x57b4be,_0x54df1b,_0x215aee,_0x49b40b,_0x557258);},Window_StatusData[_0x3076cb(0x288)]['processDrawIcon']=function(_0x2cd66b,_0x2338fb){const _0x53c6ba=_0x3076cb;_0x2338fb['drawing']&&this['drawIcon'](_0x2cd66b,_0x2338fb['x'],_0x2338fb['y']+0x2);_0x2338fb['x']+=Math[_0x53c6ba(0x247)](ImageManager[_0x53c6ba(0x213)]*this[_0x53c6ba(0x1e0)]());if(this[_0x53c6ba(0x1e0)]()===0x1)_0x2338fb['x']+=0x4;},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x21a)]=function(_0x57b556){const _0x3961ca=_0x3076cb;this['_actor']!==_0x57b556&&(this[_0x3961ca(0x17e)]=_0x57b556,this[_0x3961ca(0x306)]());},Window_StatusData['prototype'][_0x3076cb(0x1b6)]=function(_0x2c2cfe){const _0x13327d=_0x3076cb;this[_0x13327d(0xf2)]!==_0x2c2cfe&&(this[_0x13327d(0xf2)]=_0x2c2cfe,this[_0x13327d(0x306)]());},Window_StatusData[_0x3076cb(0x288)]['setWordWrap']=function(_0x21eb79){const _0x57e013=_0x3076cb;if(Imported[_0x57e013(0x1d1)])Window_Base[_0x57e013(0x288)][_0x57e013(0x171)][_0x57e013(0xe7)](this,_0x21eb79);return'';},Window_StatusData['prototype'][_0x3076cb(0x261)]=function(){const _0x1d5fe3=_0x3076cb;if(Imported[_0x1d5fe3(0x1d1)])Window_StatusBase['prototype'][_0x1d5fe3(0x261)][_0x1d5fe3(0xe7)](this);},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x194)]=function(_0x3298cc,_0x4ed21d,_0x54eb17,_0x4fe88a){const _0x31c7c6=_0x3076cb,_0x1d7308=Window_StatusBase[_0x31c7c6(0x288)][_0x31c7c6(0x194)][_0x31c7c6(0xe7)](this,_0x3298cc,_0x4ed21d,_0x54eb17,_0x4fe88a);return this['resetWordWrap'](),_0x1d7308;},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x306)]=function(){const _0x1627e8=_0x3076cb;Window_StatusBase[_0x1627e8(0x288)]['refresh'][_0x1627e8(0xe7)](this),this[_0x1627e8(0x22e)](),this[_0x1627e8(0x2d7)](),this[_0x1627e8(0x261)]();if(this['_actor']&&this['_drawData'])this['_drawData'][_0x1627e8(0xe7)](this);},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x339)]=function(){const _0x38b65a=_0x3076cb;return Imported[_0x38b65a(0xea)]&&this[_0x38b65a(0x17e)][_0x38b65a(0xd5)]()!=='';},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x15c)]=function(_0x43ed5e,_0x5eb4b2,_0x1b170a,_0x18f765,_0x11f704){const _0x1efcbc=_0x3076cb,_0x3a433f=ImageManager[_0x1efcbc(0x2dd)](_0x43ed5e[_0x1efcbc(0xd5)]());_0x3a433f[_0x1efcbc(0x308)](this[_0x1efcbc(0x28a)]['bind'](this,_0x3a433f,_0x43ed5e,_0x5eb4b2,_0x1b170a,_0x18f765,_0x11f704));},Window_StatusData[_0x3076cb(0x288)]['onLoadDrawItemActorMenuImage']=function(_0x13a6c7,_0x454c3d,_0x545d1a,_0x567d29,_0x35963c,_0x1cdb50){const _0x3ffd49=_0x3076cb,_0x287a28=_0x35963c-_0x13a6c7[_0x3ffd49(0x20e)];_0x545d1a+=_0x287a28/0x2;if(_0x287a28<0x0)_0x35963c-=_0x287a28;_0x35963c=(_0x35963c||ImageManager[_0x3ffd49(0x13d)])-0x2,_0x1cdb50=(_0x1cdb50||ImageManager['faceHeight'])-0x2;const _0x2486ba=_0x13a6c7[_0x3ffd49(0x20e)],_0x335052=_0x13a6c7[_0x3ffd49(0x234)],_0x343f8d=_0x35963c,_0x320460=_0x1cdb50-0x2,_0x48bf27=_0x545d1a+Math[_0x3ffd49(0xeb)](_0x343f8d/0x2),_0x528bda=_0x567d29+Math[_0x3ffd49(0x247)]((_0x1cdb50+_0x335052)/0x2),_0x35ccc9=Math[_0x3ffd49(0x1cb)](_0x35963c,_0x2486ba),_0x4c43ad=Math[_0x3ffd49(0x1cb)](_0x1cdb50,_0x335052),_0x1a459b=_0x545d1a+0x1,_0x171a09=Math[_0x3ffd49(0x176)](_0x567d29+0x1,_0x567d29+_0x320460-_0x335052+0x3),_0x29d9b3=(_0x2486ba-_0x35ccc9)/0x2,_0x3e7768=(_0x335052-_0x4c43ad)/0x2;this[_0x3ffd49(0x198)][_0x3ffd49(0x225)](_0x13a6c7,_0x29d9b3,_0x3e7768,_0x35ccc9,_0x4c43ad,_0x1a459b,_0x171a09);},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x2db)]=function(){const _0x22106b=_0x3076cb;let _0x36f417=0x5;return this['innerHeight']-this[_0x22106b(0x1d3)]()*0x5<this['lineHeight']()*0x6&&(_0x36f417=0x4),this[_0x22106b(0x2b2)]-this[_0x22106b(0x1d3)]()*_0x36f417;},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x2b8)]=function(_0x446613,_0x19461d){const _0x3eb0a2=_0x3076cb,_0x24f063=this[_0x3eb0a2(0x17e)],_0x3dcfee=new Rectangle(_0x446613,0x0,_0x19461d,this[_0x3eb0a2(0x2b2)]),_0x43325d=this[_0x3eb0a2(0x2db)]();if(this[_0x3eb0a2(0x339)]()){const _0x574a29=_0x3dcfee[_0x3eb0a2(0x20e)],_0x2ae5b5=_0x3dcfee[_0x3eb0a2(0x234)],_0x26f17e=_0x3dcfee['x'],_0x37e55c=_0x3dcfee['y'];this[_0x3eb0a2(0x15c)](_0x24f063,_0x26f17e,_0x37e55c,_0x574a29,_0x2ae5b5);}else{if(_0x3eb0a2(0x253)!=='ViHUB'){const _0x2fd601=ImageManager[_0x3eb0a2(0x13d)],_0x46e2d3=ImageManager[_0x3eb0a2(0x27d)],_0x4c16ed=_0x3dcfee['x']+Math[_0x3eb0a2(0xeb)]((_0x3dcfee['width']-_0x2fd601)/0x2),_0x2784d7=_0x3dcfee['y']+Math[_0x3eb0a2(0xeb)]((this[_0x3eb0a2(0x2b2)]-_0x43325d-_0x46e2d3)/0x2);this[_0x3eb0a2(0x215)](_0x24f063,_0x4c16ed,_0x2784d7,_0x2fd601,_0x46e2d3);}else{var _0x3511af=_0x168b2e(_0x3866d7['$1']);_0x16c85c+=_0x3511af;}}},Window_Base[_0x3076cb(0x288)][_0x3076cb(0x215)]=function(_0x54ea49,_0x3c2528,_0x58985a,_0x2e320d,_0x42fd93){const _0x43edb6=_0x3076cb,_0x3d85d0=_0x54ea49[_0x43edb6(0xdb)](),_0x47918b=_0x54ea49['faceIndex']();_0x2e320d=_0x2e320d||ImageManager['faceWidth'],_0x42fd93=_0x42fd93||ImageManager[_0x43edb6(0x27d)];const _0x2fc9a6=ImageManager['loadFace'](_0x3d85d0),_0x266614=ImageManager[_0x43edb6(0x13d)],_0x3b0804=ImageManager[_0x43edb6(0x27d)],_0x4ffc7d=Math[_0x43edb6(0x1cb)](_0x2e320d,_0x266614),_0x1cc64a=Math['min'](_0x42fd93,_0x3b0804),_0x177e50=Math[_0x43edb6(0xeb)](_0x3c2528+Math['max'](_0x2e320d-_0x266614,0x0)/0x2),_0x4803a0=Math[_0x43edb6(0xeb)](_0x58985a+Math['max'](_0x42fd93-_0x3b0804,0x0)/0x2),_0x20835b=_0x47918b%0x4*_0x266614+(_0x266614-_0x4ffc7d)/0x2,_0x5a8c70=Math[_0x43edb6(0xeb)](_0x47918b/0x4)*_0x3b0804+(_0x3b0804-_0x1cc64a)/0x2;this[_0x43edb6(0x198)]['blt'](_0x2fc9a6,_0x20835b,_0x5a8c70,_0x4ffc7d,_0x1cc64a,_0x177e50,_0x4803a0);},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x140)]=function(_0x311a11){const _0x57bfa0=_0x3076cb,_0x3ae05a=_0x57bfa0(0x1d2)['format'](_0x311a11);return VisuMZ[_0x57bfa0(0x1f0)][_0x57bfa0(0xec)]['StatusMenu'][_0x3ae05a];},Window_StatusData[_0x3076cb(0x288)]['drawParamName']=function(_0x4d7f38,_0x3c27af,_0xa1e0a7,_0x14b78e){const _0x1da288=_0x3076cb,_0x1459b2=this[_0x1da288(0x15a)]();_0x14b78e-=_0x1459b2*0x2;if(Imported[_0x1da288(0x1bf)])_0x1da288(0x14b)!==_0x1da288(0x14b)?(_0x50b255[_0x1da288(0x1f0)]['Game_Enemy_transform'][_0x1da288(0xe7)](this,_0x49c3d3),this[_0x1da288(0x23d)]()):this[_0x1da288(0x26f)](_0x3c27af+_0x1459b2,_0xa1e0a7,_0x14b78e,_0x4d7f38,![]);else{if(_0x1da288(0x127)!==_0x1da288(0x127))_0xeb292b['createRandomTraitSet'](_0x15c288);else{const _0x31fa33=this[_0x1da288(0x214)](_0x4d7f38);this[_0x1da288(0x1c5)](ColorManager[_0x1da288(0x10e)]()),this[_0x1da288(0x335)](_0x31fa33,_0x3c27af+_0x1459b2,_0xa1e0a7,_0x14b78e);}}},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x214)]=function(_0x121388){const _0x43f57a=_0x3076cb;_0x121388=_0x121388[_0x43f57a(0x102)]()[_0x43f57a(0x135)]();const _0x3dee0e=['MAXHP',_0x43f57a(0x244),_0x43f57a(0x2ca),_0x43f57a(0x20d),_0x43f57a(0xe4),_0x43f57a(0x151),_0x43f57a(0xe1),_0x43f57a(0xcd)],_0x55e2c4=['HIT',_0x43f57a(0x1e1),_0x43f57a(0x2f2),'CEV','MEV','MRF',_0x43f57a(0x331),'HRG','MRG',_0x43f57a(0xda)],_0x3de0dc=[_0x43f57a(0x1d5),_0x43f57a(0x15b),'REC',_0x43f57a(0x197),_0x43f57a(0x284),_0x43f57a(0x1f8),'PDR',_0x43f57a(0x2f5),_0x43f57a(0x2b7),'EXR'];if(_0x3dee0e[_0x43f57a(0x10f)](_0x121388))return TextManager[_0x43f57a(0xf9)](_0x3dee0e[_0x43f57a(0x121)](_0x121388));return _0x121388;},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x294)]=function(_0x3a0653,_0x218add,_0x424077,_0x3aa996){const _0x441a88=_0x3076cb;this[_0x441a88(0x2d7)]();const _0x1f5def=this[_0x441a88(0x15a)](),_0x5b7f42=this[_0x441a88(0xb7)](_0x3a0653);this[_0x441a88(0x335)](_0x5b7f42,_0x218add+_0x1f5def,_0x424077,_0x3aa996-_0x1f5def*0x2,'right');},Window_StatusData[_0x3076cb(0x288)]['getParamValue']=function(_0x20dd87){const _0x16f58d=_0x3076cb;_0x20dd87=_0x20dd87[_0x16f58d(0x102)]()[_0x16f58d(0x135)]();const _0x2902e3=this[_0x16f58d(0x17e)];if(Imported[_0x16f58d(0x1bf)]){if(_0x16f58d(0x2d6)!=='oSHpS')return _0x2902e3[_0x16f58d(0xef)](_0x20dd87,!![]);else{const _0x52c605=_0x54170c['ElementStatusCore'][_0x16f58d(0xec)][_0x16f58d(0xf7)];_0x38f392[_0x16f58d(0xe2)]=(_0x52c605['TraitCol1']||_0x1b5db2[_0x16f58d(0xe2)])[_0x16f58d(0x1a9)](_0x5f48ca=>{const _0x1e1d51=_0x16f58d,_0x9caed1=_0x2a1405[_0x1e1d51(0x12a)](_0x5f48ca);return _0x9caed1&&_0x9caed1[_0x1e1d51(0x245)];}),_0x3e8169[_0x16f58d(0x19b)]=(_0x52c605['TraitCol2']||_0x446c55[_0x16f58d(0x19b)])[_0x16f58d(0x1a9)](_0x5f4c1b=>{const _0x1efa85=_0x16f58d,_0xdb23b1=_0x26b2bd[_0x1efa85(0x12a)](_0x5f4c1b);return _0xdb23b1&&_0xdb23b1[_0x1efa85(0x245)];});}}else{const _0xe31a00=[_0x16f58d(0x298),_0x16f58d(0x244),'ATK','DEF',_0x16f58d(0xe4),_0x16f58d(0x151),_0x16f58d(0xe1),'LUK'],_0xd2604f=[_0x16f58d(0x145),_0x16f58d(0x1e1),_0x16f58d(0x2f2),_0x16f58d(0x34b),_0x16f58d(0x32d),_0x16f58d(0x2c2),_0x16f58d(0x331),_0x16f58d(0x22b),_0x16f58d(0x210),_0x16f58d(0xda)],_0x2060ac=[_0x16f58d(0x1d5),'GRD',_0x16f58d(0xa6),_0x16f58d(0x197),_0x16f58d(0x284),_0x16f58d(0x1f8),_0x16f58d(0x1dc),_0x16f58d(0x2f5),_0x16f58d(0x2b7),_0x16f58d(0x17a)];if(_0xe31a00[_0x16f58d(0x10f)](_0x20dd87))return _0x2902e3[_0x16f58d(0xf9)](_0xe31a00[_0x16f58d(0x121)](_0x20dd87));else{if(_0xd2604f['includes'](_0x20dd87)){if(_0x16f58d(0x26d)===_0x16f58d(0xd9)){if(this['_traitSets']===_0x45c101)this[_0x16f58d(0xce)]();if(this[_0x16f58d(0x1bb)][_0x430cb1]===_0x1cbd78)this[_0x16f58d(0xce)]();return this[_0x16f58d(0x1bb)][_0x4447ac];}else{const _0x5052e1=_0x2902e3[_0x16f58d(0x222)](_0xd2604f[_0x16f58d(0x121)](_0x20dd87));return _0x16f58d(0x260)[_0x16f58d(0xf0)](Math[_0x16f58d(0x290)](_0x5052e1*0x64));}}else{if(_0x2060ac[_0x16f58d(0x10f)](_0x20dd87)){const _0x112668=_0x2902e3[_0x16f58d(0x212)](_0x2060ac['indexOf'](_0x20dd87));return'%1%'['format'](Math[_0x16f58d(0x290)](_0x112668*0x64));}}}}},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x328)]=function(){const _0xe08ff0=_0x3076cb;VisuMZ[_0xe08ff0(0x1f0)][_0xe08ff0(0xec)][_0xe08ff0(0x287)][0x0][_0xe08ff0(0x31e)]['call'](this);},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x274)]=function(){const _0x23d06a=_0x3076cb;this[_0x23d06a(0x19e)]=VisuMZ[_0x23d06a(0x1f0)][_0x23d06a(0xec)]['StatusMenu'][_0x23d06a(0x1f2)];},Window_StatusData['prototype'][_0x3076cb(0x22e)]=function(){const _0x52a147=_0x3076cb;this[_0x52a147(0x19e)]=$gameSystem[_0x52a147(0x265)]();},Window_StatusData[_0x3076cb(0x288)]['drawItemDarkRect']=function(_0x45873e,_0x562896,_0x203a67,_0x5948cd,_0x49fbe1){const _0x246b77=_0x3076cb;if(VisuMZ[_0x246b77(0x1f0)]['Settings'][_0x246b77(0xc9)][_0x246b77(0x29f)]===![])return;_0x49fbe1=Math[_0x246b77(0x176)](_0x49fbe1||0x1,0x1);while(_0x49fbe1--){_0x5948cd=_0x5948cd||this[_0x246b77(0x1d3)](),this[_0x246b77(0x12b)][_0x246b77(0x100)]=0xa0;const _0x4cd60f=ColorManager[_0x246b77(0x109)]();this[_0x246b77(0x12b)][_0x246b77(0x2e3)](_0x45873e+0x1,_0x562896+0x1,_0x203a67-0x2,_0x5948cd-0x2,_0x4cd60f),this[_0x246b77(0x12b)][_0x246b77(0x100)]=0xff;}},ColorManager[_0x3076cb(0x109)]=function(){const _0x4bef56=_0x3076cb,_0x24bad2=VisuMZ[_0x4bef56(0x1f0)]['Settings'][_0x4bef56(0xc9)];let _0x43c75f=_0x24bad2[_0x4bef56(0x326)]!==undefined?_0x24bad2[_0x4bef56(0x326)]:0x13;return ColorManager[_0x4bef56(0x2a9)](_0x43c75f);},Window_StatusData[_0x3076cb(0x288)]['drawGeneral']=function(){const _0x4b7fc0=_0x3076cb,_0x44fef4=_0x4b7fc0(0x9d),_0x18db45=this[_0x4b7fc0(0x1d3)](),_0x507784=this[_0x4b7fc0(0x2ab)](),_0x3e84fb=this[_0x4b7fc0(0x2db)](),_0x4df7c6=this['_actor'],_0x3d58d3=this[_0x4b7fc0(0x15a)](),_0x1bf460=this[_0x4b7fc0(0x202)]/0x2;let _0x4293da=new Rectangle(0x0,0x0,_0x1bf460,this[_0x4b7fc0(0x2b2)]),_0x4b7e7d=0x0,_0x10b481=0x0;this[_0x4b7fc0(0x2b8)](0x0,this[_0x4b7fc0(0x202)]/0x2);let _0x172f16=_0x4293da['x'],_0x7686c2=Math[_0x4b7fc0(0x176)](_0x4293da['y'],_0x4293da['y']+(_0x4293da[_0x4b7fc0(0x234)]-_0x3e84fb)),_0x5b3406=_0x4293da[_0x4b7fc0(0x20e)],_0x468cb6=_0x4293da['y']+_0x4293da[_0x4b7fc0(0x234)]-_0x7686c2;this[_0x4b7fc0(0x1fc)](0x0,_0x7686c2,_0x5b3406,_0x18db45,0x2),this['drawText'](_0x4df7c6[_0x4b7fc0(0x341)](),_0x172f16,_0x7686c2,_0x5b3406,_0x4b7fc0(0x1d0)),_0x172f16=_0x4293da['x']+Math[_0x4b7fc0(0x290)]((_0x4293da['width']-0x80)/0x2),_0x7686c2+=_0x18db45,this['drawItemDarkRect'](0x0,_0x7686c2,_0x5b3406,_0x18db45),this[_0x4b7fc0(0x1ed)](_0x4df7c6,_0x172f16,_0x7686c2);const _0x489961=_0x4df7c6[_0x4b7fc0(0x227)]()[_0x4b7fc0(0x341)];_0x172f16=_0x4293da['x']+Math[_0x4b7fc0(0x290)]((_0x4293da['width']-this[_0x4b7fc0(0x348)](_0x489961)[_0x4b7fc0(0x20e)])/0x2),_0x7686c2+=_0x18db45,this[_0x4b7fc0(0x1fc)](0x0,_0x7686c2,_0x5b3406,_0x18db45),this['drawTextEx'](_0x489961,_0x172f16,_0x7686c2,_0x5b3406),_0x172f16=_0x4293da['x']+Math[_0x4b7fc0(0x290)]((_0x4293da[_0x4b7fc0(0x20e)]-0x90)/0x2),_0x7686c2+=_0x18db45,this[_0x4b7fc0(0x1fc)](0x0,_0x7686c2,_0x5b3406,_0x18db45),this[_0x4b7fc0(0xa4)](_0x4df7c6,_0x172f16,_0x7686c2),_0x172f16=_0x4293da['x']+Math[_0x4b7fc0(0x290)]((_0x4293da['width']-0x80)/0x2),_0x7686c2+=_0x18db45,this['drawItemDarkRect'](0x0,_0x7686c2,_0x5b3406,this[_0x4b7fc0(0x2b2)]-_0x7686c2),this['placeGauge'](_0x4df7c6,'hp',_0x172f16,_0x7686c2),_0x7686c2+=_0x507784,this[_0x4b7fc0(0x240)](_0x4df7c6,'mp',_0x172f16,_0x7686c2),_0x7686c2+=_0x507784;$dataSystem['optDisplayTp']&&this[_0x4b7fc0(0x240)](_0x4df7c6,'tp',_0x172f16,_0x7686c2);_0x4293da=new Rectangle(_0x1bf460,0x0,_0x1bf460,this[_0x4b7fc0(0x2b2)]),this[_0x4b7fc0(0x1c5)](ColorManager[_0x4b7fc0(0x10e)]()),this[_0x4b7fc0(0x1fc)](_0x4293da['x'],_0x4293da['y'],_0x4293da[_0x4b7fc0(0x20e)],_0x18db45,0x2),this[_0x4b7fc0(0x335)](TextManager[_0x4b7fc0(0x165)],_0x4293da['x'],_0x4293da['y'],_0x4293da['width'],_0x4b7fc0(0x1d0));const _0x50986f=_0x18db45*0x5;this[_0x4b7fc0(0x1fc)](_0x4293da['x'],_0x4293da['y']+_0x18db45*0x1,_0x4293da[_0x4b7fc0(0x20e)],_0x18db45*0x2),this[_0x4b7fc0(0x1fc)](_0x4293da['x'],_0x4293da['y']+_0x18db45*0x3,_0x4293da[_0x4b7fc0(0x20e)],_0x18db45*0x2);const _0x1ff366=TextManager[_0x4b7fc0(0x1a8)][_0x4b7fc0(0xf0)](TextManager['exp']),_0xf3b442=TextManager[_0x4b7fc0(0x249)][_0x4b7fc0(0xf0)](TextManager[_0x4b7fc0(0x18b)]);this[_0x4b7fc0(0x1c5)](ColorManager[_0x4b7fc0(0x10e)]()),this[_0x4b7fc0(0x335)](_0x1ff366,_0x4293da['x']+_0x3d58d3,_0x4293da['y']+_0x18db45*0x1,_0x4293da['width']-_0x3d58d3*0x2),this['drawText'](_0xf3b442,_0x4293da['x']+_0x3d58d3,_0x4293da['y']+_0x18db45*0x3,_0x4293da[_0x4b7fc0(0x20e)]-_0x3d58d3*0x2),this[_0x4b7fc0(0x209)]();const _0x1b1cd3=_0x4df7c6['currentExp'](),_0x43bbaf=_0x4df7c6['isMaxLevel']()?_0x44fef4:_0x4df7c6[_0x4b7fc0(0xf8)]();this[_0x4b7fc0(0x335)](_0x1b1cd3,_0x4293da['x']+_0x3d58d3,_0x4293da['y']+_0x18db45*0x1,_0x4293da['width']-_0x3d58d3*0x2,_0x4b7fc0(0x2d8)),this[_0x4b7fc0(0x335)](_0x43bbaf,_0x4293da['x']+_0x3d58d3,_0x4293da['y']+_0x18db45*0x3,_0x4293da[_0x4b7fc0(0x20e)]-_0x3d58d3*0x2,'right'),_0x10b481=_0x4293da['y']+_0x50986f,this['changeTextColor'](ColorManager['systemColor']()),this[_0x4b7fc0(0x1fc)](_0x4293da['x'],_0x10b481,_0x4293da[_0x4b7fc0(0x20e)],_0x18db45,0x2),this['drawText'](TextManager['statusMenuBiography'],_0x4293da['x'],_0x10b481,_0x4293da[_0x4b7fc0(0x20e)],_0x4b7fc0(0x1d0)),this[_0x4b7fc0(0x209)](),_0x10b481+=_0x18db45;const _0xac9f28=_0x4df7c6[_0x4b7fc0(0x24a)]();this[_0x4b7fc0(0x1fc)](_0x4293da['x'],_0x10b481,_0x4293da['width'],this[_0x4b7fc0(0x2b2)]-_0x10b481),this['drawTextEx'](_0xac9f28,_0x4293da['x']+_0x3d58d3,_0x10b481,_0x4293da[_0x4b7fc0(0x20e)]-_0x3d58d3*0x2);},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x12c)]=function(){const _0x26b4ea=_0x3076cb,_0x549b31=this['lineHeight'](),_0x18d234=this[_0x26b4ea(0x2ab)](),_0x25ec99=this[_0x26b4ea(0x2db)](),_0x147d3f=this[_0x26b4ea(0x15a)]()*0x2,_0xa7c03e=Math[_0x26b4ea(0xeb)](this[_0x26b4ea(0x202)]/0x3);let _0xedd8bd=0x0,_0x420305=0x0,_0x428fa8=0x0;this[_0x26b4ea(0x2b8)](0x0,this[_0x26b4ea(0x202)]/0x2);let _0x5e7fa3=new Rectangle(0x0,0x0,_0xa7c03e,this['innerHeight']);const _0x1faa22=this['getParameterList'](0x1),_0x4e9583=this['getParameterList'](0x2),_0x5d0fd3=this[_0x26b4ea(0x140)](0x3),_0x3c9118=Math[_0x26b4ea(0x176)](_0x1faa22[_0x26b4ea(0x2e7)],_0x4e9583[_0x26b4ea(0x2e7)],_0x5d0fd3['length']),_0x2cfa4f=_0x5e7fa3[_0x26b4ea(0x20e)]-_0x147d3f*0x2-this[_0x26b4ea(0x30b)](_0x26b4ea(0x281)),_0x12c2bb=Math[_0x26b4ea(0x176)]((this['innerHeight']-_0x3c9118*_0x549b31)/0x2,0x0);_0xedd8bd=_0x5e7fa3['x']+_0x147d3f,_0x420305=_0x12c2bb,_0x428fa8=_0x5e7fa3[_0x26b4ea(0x20e)]-_0x147d3f*0x2;if(_0x420305!==0x0)this[_0x26b4ea(0x1fc)](_0x5e7fa3['x'],0x0,_0x5e7fa3['width'],_0x420305);for(const _0x2868c3 of _0x1faa22){this[_0x26b4ea(0x1fc)](_0x5e7fa3['x'],_0x420305,_0x5e7fa3[_0x26b4ea(0x20e)],_0x549b31),this['drawParamName'](_0x2868c3,_0xedd8bd,_0x420305,_0x2cfa4f),this[_0x26b4ea(0x294)](_0x2868c3,_0xedd8bd,_0x420305,_0x428fa8),_0x420305+=_0x549b31;}this[_0x26b4ea(0x1fc)](_0x5e7fa3['x'],_0x420305,_0x5e7fa3[_0x26b4ea(0x20e)],this[_0x26b4ea(0x2b2)]-_0x420305),_0x5e7fa3['x']+=_0x5e7fa3[_0x26b4ea(0x20e)],_0xedd8bd=_0x5e7fa3['x']+_0x147d3f,_0x420305=_0x12c2bb,_0x428fa8=_0x5e7fa3[_0x26b4ea(0x20e)]-_0x147d3f*0x2;if(_0x420305!==0x0)this['drawItemDarkRect'](_0x5e7fa3['x'],0x0,_0x5e7fa3['width'],_0x420305);for(const _0xc6c06d of _0x4e9583){this['drawItemDarkRect'](_0x5e7fa3['x'],_0x420305,_0x5e7fa3['width'],_0x549b31),this[_0x26b4ea(0x1b4)](_0xc6c06d,_0xedd8bd,_0x420305,_0x2cfa4f),this[_0x26b4ea(0x294)](_0xc6c06d,_0xedd8bd,_0x420305,_0x428fa8),_0x420305+=_0x549b31;}this[_0x26b4ea(0x1fc)](_0x5e7fa3['x'],_0x420305,_0x5e7fa3[_0x26b4ea(0x20e)],this['innerHeight']-_0x420305),_0x5e7fa3['x']+=_0x5e7fa3[_0x26b4ea(0x20e)],_0x5e7fa3[_0x26b4ea(0x20e)]=this[_0x26b4ea(0x202)]-_0x5e7fa3['x'],_0xedd8bd=_0x5e7fa3['x']+_0x147d3f,_0x420305=_0x12c2bb,_0x428fa8=_0x5e7fa3[_0x26b4ea(0x20e)]-_0x147d3f*0x2;if(_0x420305!==0x0)this['drawItemDarkRect'](_0x5e7fa3['x'],0x0,_0x5e7fa3['width'],_0x420305);for(const _0x4c397e of _0x5d0fd3){_0x26b4ea(0x26e)!==_0x26b4ea(0x186)?(this[_0x26b4ea(0x1fc)](_0x5e7fa3['x'],_0x420305,_0x5e7fa3[_0x26b4ea(0x20e)],_0x549b31),this[_0x26b4ea(0x1b4)](_0x4c397e,_0xedd8bd,_0x420305,_0x2cfa4f),this[_0x26b4ea(0x294)](_0x4c397e,_0xedd8bd,_0x420305,_0x428fa8),_0x420305+=_0x549b31):_0x2ce372=_0x49aa81[_0x26b4ea(0x19d)](this[_0x26b4ea(0x119)]()['attackElements']());}this[_0x26b4ea(0x1fc)](_0x5e7fa3['x'],_0x420305,_0x5e7fa3[_0x26b4ea(0x20e)],this[_0x26b4ea(0x2b2)]-_0x420305);},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x289)]=function(){const _0x4c38bd=_0x3076cb,_0x1a0e8c=Window_StatusData[_0x4c38bd(0xe2)],_0x5b2051=Window_StatusData['traitCol2'],_0x2d5a19=this[_0x4c38bd(0x1d3)](),_0x22e7e7=this[_0x4c38bd(0x17e)],_0x4dff4e=this[_0x4c38bd(0x15a)](),_0x4c6dfa=this[_0x4c38bd(0x2b2)]/Math[_0x4c38bd(0x176)](_0x1a0e8c['length'],_0x5b2051['length'])-_0x2d5a19,_0x12332c=this[_0x4c38bd(0x202)]/0x2;let _0x12cc61=0x0,_0x418ec1=0x0;this[_0x4c38bd(0x2b8)](0x0,_0x12332c);for(const _0x115dff of _0x1a0e8c){if(_0x4c38bd(0x2b3)!==_0x4c38bd(0x156)){const _0x4068bf=DataManager[_0x4c38bd(0x12a)](_0x115dff),_0x3d8a9a=_0x22e7e7['traitSet'](_0x115dff);this[_0x4c38bd(0x1fc)](0x0,_0x418ec1,_0x12332c,_0x2d5a19,0x2);const _0x4b98af=_0x4c38bd(0x10c)[_0x4c38bd(0xf0)](_0x4068bf['Label'],_0x3d8a9a[_0x4c38bd(0x30f)]);this[_0x4c38bd(0x194)](_0x4b98af,_0x4dff4e,_0x418ec1,_0x12332c-_0x4dff4e*0x2),_0x418ec1+=_0x2d5a19,this[_0x4c38bd(0x274)](),this[_0x4c38bd(0x1fc)](0x0,_0x418ec1,_0x12332c,_0x4c6dfa),this[_0x4c38bd(0x194)](_0x3d8a9a[_0x4c38bd(0x33a)],_0x4dff4e,_0x418ec1,_0x12332c-_0x4dff4e*0x2),_0x418ec1+=_0x4c6dfa,this[_0x4c38bd(0x22e)]();}else return _0x198332[_0x4c38bd(0xf9)](_0x410a23[_0x4c38bd(0x121)](_0x67cc77));}this[_0x4c38bd(0x2b2)]-_0x418ec1>0x0&&this[_0x4c38bd(0x1fc)](0x0,_0x418ec1,_0x12332c,this[_0x4c38bd(0x2b2)]-_0x418ec1);_0x418ec1=0x0;for(const _0x450666 of _0x5b2051){if(_0x4c38bd(0x340)===_0x4c38bd(0x340)){const _0x105e3f=DataManager[_0x4c38bd(0x12a)](_0x450666),_0x3ae2be=_0x22e7e7[_0x4c38bd(0x2c7)](_0x450666);this['drawItemDarkRect'](_0x12332c,_0x418ec1,_0x12332c,_0x2d5a19,0x2);const _0x5c712a=_0x4c38bd(0x10c)['format'](_0x105e3f[_0x4c38bd(0x2f0)],_0x3ae2be['Display']);this['drawTextEx'](_0x5c712a,_0x12332c+_0x4dff4e,_0x418ec1,_0x12332c-_0x4dff4e*0x2),_0x418ec1+=_0x2d5a19,this[_0x4c38bd(0x274)](),this[_0x4c38bd(0x1fc)](_0x12332c,_0x418ec1,_0x12332c,_0x4c6dfa),this['drawTextEx'](_0x3ae2be[_0x4c38bd(0x33a)],_0x12332c+_0x4dff4e,_0x418ec1,_0x12332c-_0x4dff4e*0x2),_0x418ec1+=_0x4c6dfa,this['resetDescriptionFontSize']();}else this[_0x4c38bd(0x1c5)](_0x47a129[_0x4c38bd(0x118)]()),_0x9992cf=_0x2b2695['statusMenuDmgAbsorb'][_0x4c38bd(0xf0)](_0x14f9e8['round'](_0x1665ed*0x64));}this[_0x4c38bd(0x2b2)]-_0x418ec1>0x0&&this['drawItemDarkRect'](_0x12332c,_0x418ec1,_0x12332c,this[_0x4c38bd(0x2b2)]-_0x418ec1);},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x191)]=function(){const _0x4f3100=_0x3076cb,_0x3589e3=[0x0][_0x4f3100(0x19d)](this['getExcludedElementIDs']());return[...Array($dataSystem['elements']['length'])[_0x4f3100(0x22d)]()][_0x4f3100(0x1a9)](_0x125f0f=>!_0x3589e3[_0x4f3100(0x10f)](_0x125f0f));},Window_StatusData[_0x3076cb(0x288)]['getExcludedElementIDs']=function(){const _0x534749=_0x3076cb;return[0x0][_0x534749(0x19d)](VisuMZ['ElementStatusCore'][_0x534749(0xec)][_0x534749(0xc9)]['ExcludeElements']);},Window_StatusData['prototype'][_0x3076cb(0x2c0)]=function(){const _0x19170f=_0x3076cb,_0x25e168=[0x0]['concat'](this[_0x19170f(0x323)]());let _0x2f7417=this[_0x19170f(0x2e1)](0x1);if(_0x2f7417[_0x19170f(0x2e7)]<=0x0){if(_0x19170f(0x111)!==_0x19170f(0x2f7))_0x2f7417=this[_0x19170f(0x2e1)](0x2),_0x2f7417[_0x19170f(0x2e7)]<=0x0&&(_0x2f7417=this[_0x19170f(0x191)]());else{if(_0x188f6c[_0x19170f(0x2f1)]()){_0x1db952['log'](_0x19170f(0xc5)[_0x19170f(0xf0)](this['name']()));for(const _0x298402 in this[_0x19170f(0x1bb)]){_0x447266['log'](_0x19170f(0x149)[_0x19170f(0xf0)](_0x298402,this[_0x19170f(0x1bb)][_0x298402]));}_0x27e483[_0x19170f(0xd0)](_0x19170f(0x178));}}}return _0x2f7417[_0x19170f(0x1a9)](_0x5186f7=>!_0x25e168['includes'](_0x5186f7));},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0xcf)]=function(){const _0x30c92b=_0x3076cb,_0x110b7f=[0x0][_0x30c92b(0x19d)](this['getExcludedElementIDs']());let _0x3f96bc=this['getElementIDsColRaw'](0x2);return _0x3f96bc[_0x30c92b(0x1a9)](_0x20c7b5=>!_0x110b7f[_0x30c92b(0x10f)](_0x20c7b5));},Window_StatusData['prototype'][_0x3076cb(0x2e1)]=function(_0x54c0a){const _0x5ab473=_0x3076cb,_0x3914fa=[0x0]['concat'](this[_0x5ab473(0x323)]());let _0x2f61df=VisuMZ[_0x5ab473(0x1f0)][_0x5ab473(0xec)][_0x5ab473(0xc9)][_0x5ab473(0x239)[_0x5ab473(0xf0)](_0x54c0a)]??[];return _0x2f61df['filter'](_0x2fffaa=>!_0x3914fa[_0x5ab473(0x10f)](_0x2fffaa));},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x25e)]=function(){const _0x45835e=_0x3076cb,_0x1f6e75=this['lineHeight'](),_0x1393d5=this[_0x45835e(0x17e)],_0x544d88=this[_0x45835e(0x15a)](),_0x4d80bc=_0x45835e(0x10c),_0x1dfb11=DataManager[_0x45835e(0x12a)](_0x45835e(0x278)),_0x2313cf=_0x1393d5['traitSet'](_0x45835e(0x278)),_0x5e275f=DataManager[_0x45835e(0x12a)](_0x45835e(0x2ad)),_0x4fe2de=_0x1393d5['traitSet'](_0x45835e(0x2ad)),_0x1b3d1f=this['innerHeight']/Math[_0x45835e(0x176)](Window_StatusData[_0x45835e(0xe2)]['length'],Window_StatusData[_0x45835e(0x19b)][_0x45835e(0x2e7)])-_0x1f6e75;let _0x17205f=0x0,_0x5716c6=0x0,_0x21e7f2=this[_0x45835e(0x202)]/0x2;this[_0x45835e(0x2b8)](0x0,_0x21e7f2);if(_0x1dfb11[_0x45835e(0x245)]||_0x5e275f[_0x45835e(0x245)]){if(_0x45835e(0x2b5)!==_0x45835e(0x2b5)){if(this[_0x45835e(0x14f)])return this[_0x45835e(0x14f)];return this['_wtypeWidth']=this[_0x45835e(0x216)](_0x2a9435[_0x45835e(0x2a7)]),this[_0x45835e(0x14f)];}else{this['drawItemDarkRect'](_0x17205f,_0x5716c6,_0x21e7f2,_0x1f6e75,0x2),this[_0x45835e(0x1fc)](_0x21e7f2,_0x5716c6,_0x21e7f2,_0x1f6e75,0x2);_0x1dfb11[_0x45835e(0x245)]&&this['drawTextEx'](_0x4d80bc[_0x45835e(0xf0)](_0x1dfb11['Label'],_0x2313cf[_0x45835e(0x30f)]),_0x544d88,_0x5716c6,_0x21e7f2-_0x544d88*0x2);if(_0x5e275f[_0x45835e(0x245)]){if(_0x45835e(0x152)===_0x45835e(0x152))this['drawTextEx'](_0x4d80bc[_0x45835e(0xf0)](_0x5e275f[_0x45835e(0x2f0)],_0x4fe2de[_0x45835e(0x30f)]),_0x21e7f2+_0x544d88,_0x5716c6,_0x21e7f2-_0x544d88*0x2);else{const _0x4e9959='Col%1'[_0x45835e(0xf0)](_0x22f52b);return _0x56e160[_0x45835e(0x1f0)]['Settings'][_0x45835e(0xc9)][_0x4e9959];}}_0x5716c6+=_0x1f6e75,this['setDescriptionFontSizeToTraitSet'](),this[_0x45835e(0x1fc)](_0x17205f,_0x5716c6,_0x21e7f2,_0x1b3d1f),this[_0x45835e(0x1fc)](_0x21e7f2,_0x5716c6,_0x21e7f2,_0x1b3d1f),_0x1dfb11[_0x45835e(0x245)]&&(_0x45835e(0x162)===_0x45835e(0x162)?this[_0x45835e(0x194)](_0x2313cf['Description'],_0x544d88,_0x5716c6,_0x21e7f2-_0x544d88*0x2):_0x5e6176=this['mainAreaBottom']()-_0x36a870),_0x5e275f[_0x45835e(0x245)]&&this[_0x45835e(0x194)](_0x4fe2de[_0x45835e(0x33a)],_0x21e7f2+_0x544d88,_0x5716c6,_0x21e7f2-_0x544d88*0x2),this[_0x45835e(0x22e)](),this['resetFontSettings'](),_0x5716c6+=_0x1b3d1f;}}const _0x26a102=_0x5716c6,_0x53a264=this['getElementIDsCol1'](),_0x3733d7=this[_0x45835e(0xcf)]();let _0x332bab;_0x3733d7[_0x45835e(0x2e7)]>0x0?_0x332bab=[_0x45835e(0xc6),_0x45835e(0xc6),_0x45835e(0x1fd),'Bonus']:_0x332bab=['Resist',_0x45835e(0x1fd)];const _0x13dfb6=Math['max'](_0x53a264['length'],_0x3733d7[_0x45835e(0x2e7)],0x1),_0x265767=_0x332bab[_0x45835e(0x2e7)];this[_0x45835e(0x1fc)](_0x21e7f2*0x0,_0x5716c6,_0x21e7f2,_0x1f6e75,0x2),this['drawItemDarkRect'](_0x21e7f2*0x1,_0x5716c6,_0x21e7f2,_0x1f6e75,0x2),this['changeTextColor'](ColorManager[_0x45835e(0x10e)]()),this[_0x45835e(0x335)](TextManager[_0x45835e(0x16f)],_0x21e7f2*0x0,_0x5716c6,_0x21e7f2,_0x45835e(0x1d0)),this[_0x45835e(0x335)](TextManager[_0x45835e(0xd1)],_0x21e7f2*0x1,_0x5716c6,_0x21e7f2,_0x45835e(0x1d0)),_0x5716c6+=_0x1f6e75,this[_0x45835e(0x274)]();const _0x3c542a=this[_0x45835e(0x348)]('\x20')[_0x45835e(0x234)];for(let _0x268827=0x0;_0x268827<_0x13dfb6;_0x268827++){for(let _0x37dd93=0x0;_0x37dd93<_0x265767;_0x37dd93++){const _0x416ad8=this[_0x45835e(0x202)]/_0x265767;this['drawItemDarkRect'](_0x416ad8*_0x37dd93,_0x5716c6,_0x416ad8,_0x3c542a);let _0x1a9000=_0x53a264[_0x268827];_0x265767===0x4&&(_0x1a9000=_0x37dd93%0x2===0x0?_0x53a264[_0x268827]:_0x3733d7[_0x268827]);if(!_0x1a9000)continue;const _0x3f41fb=$dataSystem[_0x45835e(0x2b6)][_0x1a9000];this[_0x45835e(0x194)](_0x3f41fb,_0x416ad8*(_0x37dd93+0x1/0x3)+_0x544d88,_0x5716c6,_0x416ad8*0x2/0x3);const _0x2c628e=_0x332bab[_0x37dd93];this[_0x45835e(0x2d7)]();let _0x2edea7='';if(_0x2c628e===_0x45835e(0xc6)){if(_0x45835e(0xcb)!==_0x45835e(0xe3)){const _0x2f06dc=_0x1393d5[_0x45835e(0x14c)](_0x1a9000),_0x5d550f=(_0x2f06dc-0x1)*-0x1;this['changeTextColor'](ColorManager[_0x45835e(0x138)](_0x5d550f)),_0x2edea7=_0x45835e(0x260)[_0x45835e(0xf0)](Math[_0x45835e(0x290)](_0x5d550f*0x64));if(_0x1393d5[_0x45835e(0x1ca)]()[_0x45835e(0x10f)](_0x1a9000))this[_0x45835e(0x1c5)](ColorManager['powerUpColor']()),_0x2edea7=TextManager[_0x45835e(0x15e)][_0x45835e(0xf0)](Math[_0x45835e(0x290)](_0x2f06dc*0x64));else{if(_0x2f06dc>0x1)_0x2edea7='%1'['format'](_0x2edea7);else _0x2f06dc<=0x1&&(_0x2edea7=_0x45835e(0x136)[_0x45835e(0xf0)](_0x2edea7));}}else this['_battleCoreNoElement']=![],this[_0x45835e(0x1e6)]=[],this[_0x45835e(0x2a4)]=[];}else{if(_0x2c628e==='Bonus'){const _0x50d321=_0x1393d5[_0x45835e(0x2e6)](_0x1a9000),_0x3edec6=_0x1393d5[_0x45835e(0x1c8)](_0x1a9000),_0x210a41=_0x1393d5[_0x45835e(0x2ef)](_0x1a9000),_0xdc968=(0x1+_0x50d321)*_0x3edec6+_0x210a41-0x1;this['changeTextColor'](ColorManager[_0x45835e(0x138)](_0xdc968)),_0x2edea7='%1%'[_0x45835e(0xf0)](Math['round'](_0xdc968*0x64));if(_0xdc968>=0x0)_0x2edea7=_0x45835e(0x136)[_0x45835e(0xf0)](_0x2edea7);}}this[_0x45835e(0x12b)][_0x45835e(0x335)](_0x2edea7,_0x416ad8*_0x37dd93,_0x5716c6,_0x416ad8/0x3-_0x544d88,_0x3c542a,_0x45835e(0x2d8));}_0x5716c6+=_0x3c542a;}for(let _0x219992=0x0;_0x219992<_0x265767;_0x219992++){if('awGJU'!==_0x45835e(0x10d)){const _0x53f356=this[_0x45835e(0x202)]/_0x265767;this['drawItemDarkRect'](_0x53f356*_0x219992,_0x5716c6,_0x53f356,this['innerHeight']-_0x5716c6);}else{const _0x44fc4c=this[_0x45835e(0x27f)]();this[_0x45835e(0x18a)]=new _0x3eb1d3(_0x44fc4c),this[_0x45835e(0x18a)][_0x45835e(0x2d9)](_0x45835e(0xf6),this[_0x45835e(0x2a1)][_0x45835e(0x115)](this)),this[_0x45835e(0x18a)][_0x45835e(0x2d9)](_0x45835e(0xd6),this[_0x45835e(0x12f)][_0x45835e(0x115)](this)),this[_0x45835e(0x18a)][_0x45835e(0x2d9)](_0x45835e(0x9e),this[_0x45835e(0x11d)][_0x45835e(0x115)](this)),this[_0x45835e(0x1eb)](this['_categoryWindow']);}}},Window_StatusData['prototype'][_0x3076cb(0x216)]=function(_0x4d532a){const _0x5f3c29=_0x3076cb;this[_0x5f3c29(0x2d7)]();let _0x37e9ac=0x0;for(const _0x310cc5 of _0x4d532a){if(!_0x310cc5)continue;if(_0x310cc5['trim']()==='')continue;if(_0x310cc5['match'](/-----/i))continue;_0x37e9ac=Math[_0x5f3c29(0x176)](_0x37e9ac,this[_0x5f3c29(0x348)](_0x310cc5[_0x5f3c29(0x135)]())[_0x5f3c29(0x20e)]);}return _0x37e9ac;},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x12e)]=function(){const _0x7878d=_0x3076cb;if(this[_0x7878d(0x1db)])return this[_0x7878d(0x1db)];return this[_0x7878d(0x1db)]=this[_0x7878d(0x216)]($dataSystem[_0x7878d(0x1a0)]),this[_0x7878d(0x1db)];},Window_StatusData['prototype'][_0x3076cb(0x32f)]=function(){const _0x33ac67=_0x3076cb;if(this[_0x33ac67(0x14f)])return this[_0x33ac67(0x14f)];return this[_0x33ac67(0x14f)]=this['getDataSystemTypesWidth']($dataSystem[_0x33ac67(0x2a7)]),this['_wtypeWidth'];},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x297)]=function(){const _0x25478e=_0x3076cb;if(this[_0x25478e(0x28c)])return this[_0x25478e(0x28c)];return this[_0x25478e(0x28c)]=this[_0x25478e(0x216)]($dataSystem[_0x25478e(0x206)]),this['_atypeWidth'];},Window_StatusData[_0x3076cb(0x288)][_0x3076cb(0x163)]=function(){const _0x42051b=_0x3076cb,_0x1c6183=this[_0x42051b(0x1d3)](),_0x53ab3a=this[_0x42051b(0x17e)],_0x4ae91e=Math[_0x42051b(0xeb)](this[_0x42051b(0x202)]/0x3);let _0x1d4df6=0x0,_0x420896=0x0;this['drawActorGraphic'](0x0,this[_0x42051b(0x202)]/0x2);let _0x404772=new Rectangle(0x0,0x0,_0x4ae91e,this[_0x42051b(0x2b2)]);_0x1d4df6=_0x404772['x'],_0x420896=0x0,this[_0x42051b(0x2d7)](),this[_0x42051b(0x1fc)](_0x1d4df6,_0x420896,_0x404772[_0x42051b(0x20e)],_0x1c6183,0x2),this['changeTextColor'](ColorManager[_0x42051b(0x10e)]()),this['drawText'](TextManager[_0x42051b(0x1bd)],_0x1d4df6,_0x420896,_0x404772[_0x42051b(0x20e)],_0x42051b(0x1d0)),_0x420896+=_0x1c6183;for(const _0x3fdd69 of _0x53ab3a[_0x42051b(0x1a0)]()){this[_0x42051b(0x1fc)](_0x1d4df6,_0x420896,_0x404772[_0x42051b(0x20e)],_0x1c6183);if(_0x3fdd69>0x0){const _0x2f2c35=$dataSystem[_0x42051b(0x1a0)][_0x3fdd69],_0x428bfb=Math[_0x42051b(0x290)]((_0x404772[_0x42051b(0x20e)]-this[_0x42051b(0x12e)]())/0x2);this[_0x42051b(0x194)](_0x2f2c35,_0x1d4df6+_0x428bfb,_0x420896,_0x404772[_0x42051b(0x20e)]-_0x428bfb*0x2);}_0x420896+=_0x1c6183;}this[_0x42051b(0x1fc)](_0x1d4df6,_0x420896,_0x404772[_0x42051b(0x20e)],this[_0x42051b(0x2b2)]-_0x420896),_0x404772['x']+=_0x404772[_0x42051b(0x20e)],_0x1d4df6=_0x404772['x'],_0x420896=0x0,this['resetFontSettings'](),this[_0x42051b(0x1fc)](_0x1d4df6,_0x420896,_0x404772[_0x42051b(0x20e)],_0x1c6183,0x2),this[_0x42051b(0x1c5)](ColorManager['systemColor']()),this[_0x42051b(0x335)](TextManager['statusMenuWtype'],_0x1d4df6,_0x420896,_0x404772[_0x42051b(0x20e)],_0x42051b(0x1d0)),_0x420896+=_0x1c6183;for(const _0xcbbed2 of _0x53ab3a[_0x42051b(0x2a7)]()){this[_0x42051b(0x1fc)](_0x1d4df6,_0x420896,_0x404772[_0x42051b(0x20e)],_0x1c6183);if(_0xcbbed2>0x0){const _0xf5a4e7=$dataSystem[_0x42051b(0x2a7)][_0xcbbed2],_0x536436=Math['round']((_0x404772[_0x42051b(0x20e)]-this[_0x42051b(0x32f)]())/0x2);this['drawTextEx'](_0xf5a4e7,_0x1d4df6+_0x536436,_0x420896,_0x404772['width']-_0x536436*0x2);}_0x420896+=_0x1c6183;}this[_0x42051b(0x1fc)](_0x1d4df6,_0x420896,_0x404772[_0x42051b(0x20e)],this[_0x42051b(0x2b2)]-_0x420896),_0x404772['x']+=_0x404772[_0x42051b(0x20e)],_0x1d4df6=_0x404772['x'],_0x420896=0x0,_0x404772[_0x42051b(0x20e)]=this['innerWidth']-_0x404772['x'],this[_0x42051b(0x2d7)](),this[_0x42051b(0x1fc)](_0x1d4df6,_0x420896,_0x404772['width'],_0x1c6183,0x2),this['changeTextColor'](ColorManager[_0x42051b(0x10e)]()),this[_0x42051b(0x335)](TextManager['statusMenuAtype'],_0x1d4df6,_0x420896,_0x404772[_0x42051b(0x20e)],_0x42051b(0x1d0)),_0x420896+=_0x1c6183;for(const _0x42d2d3 of _0x53ab3a[_0x42051b(0x206)]()){this[_0x42051b(0x1fc)](_0x1d4df6,_0x420896,_0x404772[_0x42051b(0x20e)],_0x1c6183);if(_0x42d2d3>0x0){const _0x43cbc0=$dataSystem[_0x42051b(0x206)][_0x42d2d3],_0x73331f=Math[_0x42051b(0x290)]((_0x404772[_0x42051b(0x20e)]-this[_0x42051b(0x297)]())/0x2);this[_0x42051b(0x194)](_0x43cbc0,_0x1d4df6+_0x73331f,_0x420896,_0x404772['width']-_0x73331f*0x2);}_0x420896+=_0x1c6183;}this[_0x42051b(0x1fc)](_0x1d4df6,_0x420896,_0x404772[_0x42051b(0x20e)],this[_0x42051b(0x2b2)]-_0x420896);};