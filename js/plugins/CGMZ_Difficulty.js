/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/difficulty/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @orderAfter CGMZ_VehicleEncounters
 * @plugindesc Add a difficulty system to your game
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: 1.1.0
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.6.0
 * ----------------------------------------------------------------------------
 * Description: Use this plugin to add a difficulty select with many different
 * customization settings created by you. The difficulty select scene can be
 * accessed from anywhere and the difficulty setting is available via script
 * call for eventing custom difficulty differences on maps.
 * ----------------------------------------------------------------------------
 * Documentation:
 * ------------------------------Images----------------------------------------
 * Using default resolution, the image size which fits best is 446px wide.
 * Images will be automatically scaled if they are wider than the window,
 * and images will be automatically centered if they are not as wide as the
 * window.
 * ------------------------Rating Parameter------------------------------------
 * The difficulty's rating parameter is a number meant to represent the
 * difficulty in number form. It is not displayed anywhere. It is used in the
 * Get Difficulty Plugin Command, for use in eventing custom difficulty
 * differences in your game.
 * -----------------------Default Difficulty-----------------------------------
 * The default difficulty must be the name of a difficulty you have set up.
 * If you mistype the name or the difficulty name does not exist it could
 * cause issues.
 * ---------------------------Saved Games--------------------------------------
 * This plugin partially supports saved games. Difficulty settings other than
 * the difficulty name can be changed and are supported in saved games. The
 * name is saved and changes to difficulty name may behave weird in saved
 * games.
 * -------------------------Plugin Commands------------------------------------
 * This plugin supports the following plugin commands:
 * • Set Difficulty
 * Sets the difficulty of the game to the given value
 *
 * • Get Difficulty
 * Stores the difficulty rating of the current difficulty in a variable
 *
 * • Call Scene
 * Calls the difficulty select scene
 * ---------------------------JavaScript---------------------------------------
 * To call the difficulty scene with JavaScript, use the following:
 * SceneManager.push(CGMZ_Scene_Difficulty);
 * -----------------------------Filename---------------------------------------
 * The filename of this plugin's JavaScript file MUST be CGMZ_Difficulty.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * -------------------------Version History------------------------------------
 * Version 1.0.0 - Initial Release
 *
 * Version 1.0.1
 * - Bugfix for some percentages displaying incorrectly
 *
 * Version 1.1.0
 * - Add option to discover/undiscover difficulties
 * - Add option to display list window on right
 * - Add option to change the window padding
 * - Add Spanish language documentation
 * - Difficulty select scene now starts with current difficulty selected
 * - This plugin now warns instead of crashes if your plugin parameters are not
 *   set up correctly. If things are not working, please check dev tool console
 *   first before reporting bug.
 *
 * @command Set Difficulty
 * @desc Forcibly sets the difficulty
 *
 * @arg difficulty
 * @text Difficulty
 * @desc Name of the difficulty (exact capitalization required) to set
 *
 * @command Get Difficulty
 * @desc Get the difficulty rating in a variable - for use in eventing
 *
 * @arg variableId
 * @text Variable ID
 * @default 0
 * @type variable
 * @desc Variable to store the difficulty rating in
 *
 * @command Call Scene
 * @desc Calls the Difficulty scene
 *
 * @command Discover Difficulty
 * @desc Set discover status of difficulty
 *
 * @arg Difficulty
 * @desc Name of the difficulty (exact capitalization required) to change
 *
 * @arg Discover
 * @default true
 * @type boolean
 * @desc Set if it is discovered or not
 *
 * @command Reset Difficulty
 * @desc Resets the difficulty to the default
 *
 * @param Difficulty Options
 *
 * @param Difficulties
 * @parent Difficulty Options
 * @type struct<Difficulties>[]
 * @desc Set up difficulties here
 * @default []
 *
 * @param Default Difficulty
 * @parent Difficulty Options
 * @desc The name (case sensitive) of the difficulty to use at game start.
 *
 * @param Window Options
 *
 * @param Display Window Info
 * @parent Window Options
 * @type select[]
 * @option Name
 * @option Image
 * @option Enemy Stats
 * @option Enemy Gold
 * @option Enemy EXP
 * @option Encounter Rate
 * @option Escape Rate
 * @option Preemptive Rate
 * @option Surprise Rate
 * @option Description
 * @option Blank Line
 * @desc The information displayed and order it is in on display window
 * @default ["Name","Image","Enemy Stats","Enemy Gold","Enemy EXP","Encounter Rate","Escape Rate","Preemptive Rate","Surprise Rate","Description"]
 * 
 * @param Visible Commands
 * @parent Window Options
 * @type number
 * @min 1
 * @default 3
 * @desc This is the number of commands that will be visible in the difficulty select window without scrolling
 *
 * @param Transparent Windows
 * @parent Window Options
 * @type boolean
 * @desc Whether the crafting windows are transparent or not
 * @default false
 *
 * @param Background Image
 * @parent Window Options
 * @type file
 * @dir img/pictures
 * @desc Image to show in the background of the scene. Default blurry map used if none provided.
 *
 * @param Auto Close Scene On Select
 * @parent Window Options
 * @type boolean
 * @default false
 * @desc If true, the difficulty select scene will close when the player selects a difficulty.
 *
 * @param List Window Right
 * @parent Window Options
 * @type boolean
 * @default false
 * @desc If true, difficulty select window will be on the right side of screen
 *
 * @param List Window Padding
 * @parent Window Options
 * @type number
 * @min -1
 * @default -1
 * @desc Window padding on the List Window. -1 = default padding
 *
 * @param Current Difficulty Window Padding
 * @parent Window Options
 * @type number
 * @min -1
 * @default -1
 * @desc Window padding on the Current Difficulty Window. -1 = default padding
 *
 * @param Difficulty Window Padding
 * @parent Window Options
 * @type number
 * @min -1
 * @default -1
 * @desc Window padding on the Difficulty display Window. -1 = default padding
 *
 * @param Text Options
 *
 * @param Label Text Color
 * @parent Text Options
 * @type number
 * @default 1
 * @desc The color of the label text
 *
 * @param Current Difficulty
 * @parent Text Options
 * @desc Text to describe current difficulty in difficulty select scene
 * @default Current:
 *
 * @param Enemy Stats
 * @parent Text Options
 * @desc Text to describe enemy stat modifier in difficulty select scene
 * @default Enemy Stats: 
 *
 * @param Enemy Gold
 * @parent Text Options
 * @desc Text to describe enemy gold modifier in difficulty select scene
 * @default Enemy Gold: 
 *
 * @param Enemy Exp
 * @parent Text Options
 * @desc Text to describe enemy exp modifier in difficulty select scene
 * @default Enemy Exp: 
 *
 * @param Encounter Rate
 * @parent Text Options
 * @desc Text to describe encounter rate modifier in difficulty select scene
 * @default Encounter Rate: 
 *
 * @param Escape Rate
 * @parent Text Options
 * @desc Text to describe escape rate modifier in difficulty select scene
 * @default Escape Rate: 
 *
 * @param Preemptive Rate
 * @parent Text Options
 * @desc Text to describe preemptive rate modifier in difficulty select scene
 * @default Preemptive Rate: 
 *
 * @param Surprise Rate
 * @parent Text Options
 * @desc Text to describe surprise rate modifier in difficulty select scene
 * @default Surprise Rate: 
*/
/*~struct~Difficulties:
 * @param Name
 * @type text
 * @desc The name of the difficulty. Must be unique.
 *
 * @param Description
 * @type note
 * @default ""
 * @desc The description of the difficulty.
 *
 * @param Rating
 * @type number
 * @min 0
 * @default 0
 * @desc A number rating for the difficulty, used to store difficulty in game variable (see documentation)
 *
 * @param Discovered
 * @type boolean
 * @default true
 * @desc Determines if new games start with this difficulty discovered
 *
 * @param Image
 * @type file
 * @dir img
 * @desc The description of the difficulty.
 *
 * @param Enemy Stat Modifier
 * @type number
 * @default 100
 * @min 0
 * @desc The percentage change (multiplicative) of base stats the enemy has (higher = harder)
 *
 * @param Enemy Gold Modifier
 * @type number
 * @default 100
 * @min 0
 * @desc The percentage change (multiplicative) of gold the enemy awards (higher = easier)
 *
 * @param Enemy Exp Modifier
 * @type number
 * @default 100
 * @min 0
 * @desc The percentage change (multiplicative) of experience the enemy awards (higher = easier)
 *
 * @param Encounter Rate Modifier
 * @type number
 * @default 100
 * @min 0
 * @desc The percentage change (multiplicative) of encounter rate (higher = harder)
 *
 * @param Escape Ratio Modifier
 * @type number
 * @default 100
 * @min 0
 * @desc The percentage change (multiplicative) of escape success chance (higher = easier)
 *
 * @param Preemptive Modifier
 * @type number
 * @default 100
 * @min 0
 * @desc The percentage change (multiplicative) of preemptive battle chance (higher = easier)
 *
 * @param Surprise Modifier
 * @type number
 * @default 100
 * @min 0
 * @desc The percentage change (multiplicative) of surprise battle chance (higher = harder)
*/
/*:zh-CN
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/difficulty/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @orderAfter CGMZ_VehicleEncounters
 * @plugindesc 难度系统
 * @help
 * ============================================================================
 * 【使用条款】
 * 1、本插件可作商用或非商用。
 * 2、须注明插件作者"Casper Gaming"。
 * 3、须提供该插件的作者网站链接。
 * 4、最终使用条款以作者官网公告为准。https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * 【赞助支持】
 * 您可以登陆以下网站并对作者进行支持和赞助。
 * 然后获得作者和其插件的最新资讯，以及测试版插件的试用。
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * 【插件版本】V 1.1.0
 * ----------------------------------------------------------------------------
 * 【兼容性】仅测试作者所制作的插件
 * 【RM版本】RPG Maker MZ 1.6.0
 * ----------------------------------------------------------------------------
 * 【插件描述】
 *  创建多种你想要的自定义难度等级，调整敌人战斗力和战利品等参数。
 *  可以使用指令在游戏中随时切换难度。
 * ----------------------------------------------------------------------------
 * 【使用说明】
 * 一、图片
 * 设置显示难度等级的图片，建议宽度为446像素。
 * 如果图片太宽会自动缩放，如果图片宽度不够则会自动居中图片。
 *
 * 二、难度等级的相关设置。
 * 1、难度等级的参数是一个数值，用来获取插件中对应难度的设置，这个数值不会在任何地方显示。
 * 2、在部分插件指令中是使用"难度名称"来调用难度，设置和指令中使用的名称必须字符、大小写一致。
 *    如 Easy 和 EASY 因大小写不一致，会被视为不同的难度，使用没有相关设置的错误名称会使游戏出错。
 *
 * 三、支持已保存游戏：除了难度名称，支持其他所有的难度设置更改。
 *
 * 四、插件指令
 * 1. 指定难度（Set Difficulty）：将游戏直接设置为指定的难度。
 * 2. 获取难度变量（Get Difficulty）：获取当前难度等级的参数作为变量使用。
 *    如：根据难度不同，用变量作为条件，而获得不同品质的宝箱战利品。
 * 3. 打开难度界面（Call Scene）：打开难度界面，可以选择不同难度和查看难度信息。
 *    打开界面的JS命令为：SceneManager.push(CGMZ_Scene_Difficulty);
 *
 * 五、文件名注意事项：
 *     本插件文件名为CGMZ_Difficulty.js. 因为引用了其他文件的参数，
 *     所以请勿修改本插件的文件名，否则会因读取数据失败而使游戏报错。
 * ---------------------------------------------------------------------------
 *【版本更新历史】
 * Version 1.0.0 - Initial Release
 * Version 1.0.1
 * - Bugfix for some percentages displaying incorrectly
 * Version 1.1.0
 * - Add option to discover/undiscover difficulties
 * - Add option to display list window on right
 * - Add option to change the window padding
 * - Add Spanish language documentation
 * - Difficulty select scene now starts with current difficulty selected
 * - This plugin now warns instead of crashes if your plugin parameters are not
 *   set up correctly. If things are not working, please check dev tool console
 *   first before reporting bug.
 *
 * @command Set Difficulty
 * @text 设置难度
 * @desc 直接将游戏设置为指定的难度。
 *
 * @arg difficulty
 * @text 难度名称
 * @desc 输入需要设置的难度名称。难度名称要求与插件设置中名称的字符一致并区分大小写。
 *
 * @command Get Difficulty
 * @text 获取难度变量
 * @desc 获取难度等级的参数作为变量在游戏事件设置中使用。
 *
 * @arg variableId
 * @text 变量ID
 * @default 0
 * @type variable
 * @desc 指定一个变量ID，来获取难度等级的参数。
 *
 * @command Call Scene
 * @text 打开难度界面
 * @desc 打开一个可以选择难度和查看相关信息的界面。
 *
 * @command Discover Difficulty
 * @desc Set discover status of difficulty
 *
 * @arg Difficulty
 * @desc Name of the difficulty (exact capitalization required) to change
 *
 * @arg Discover
 * @default true
 * @type boolean
 * @desc Set if it is discovered or not
 *
 * @command Reset Difficulty
 * @desc Resets the difficulty to the default
 *
 * @param Difficulty Options
 * @text 难度设置
 *
 * @param Difficulties
 * @text 难度
 * @parent Difficulty Options
 * @type struct<Difficulties>[]
 * @desc 设置你想要的难度等级。
 * @default []
 *
 * @param Default Difficulty
 * @text 默认难度
 * @parent Difficulty Options
 * @desc 输入作为游戏开始时默认难度的名称。
 *
 * @param Window Options
 * @text 界面设置
 *
 * @param Display Window Info
 * @text 界面显示的信息
 * @parent Window Options
 * @type select[]
 * @option Name
 * @option Image
 * @option Enemy Stats
 * @option Enemy Gold
 * @option Enemy EXP
 * @option Encounter Rate
 * @option Escape Rate
 * @option Preemptive Rate
 * @option Surprise Rate
 * @option Description
 * @option Blank Line
 * @desc 设置难度界面内显示的难度信息的种类。
 * @default ["Name","Image","Enemy Stats","Enemy Gold","Enemy EXP","Encounter Rate","Escape Rate","Preemptive Rate","Surprise Rate","Description"]
 * 
 * @param Visible Commands
 * @text 难度选项显示数
 * @parent Window Options
 * @type number
 * @min 1
 * @default 3
 * @desc 设置在难度选项框中显示多少个选项，超过的需要按上下滚动显示和选择。
 *
 * @param Transparent Windows
 * @text 边框透明化
 * @parent Window Options
 * @type boolean
 * @desc Ture-将边框UI透明化，False-边框不透明。
 * @default false
 *
 * @param Background Image
 * @text 背景图片
 * @parent Window Options
 * @type file
 * @dir img/pictures
 * @desc 选择一张图片作为难度界面的背景图片。不设置则模糊化处理。
 *
 * @param Auto Close Scene On Select
 * @text 选择后关闭难度界面
 * @parent Window Options
 * @type boolean
 * @default false
 * @desc Ture-选择难度之后，自动关闭难度选择界面。
 *
 * @param List Window Right
 * @parent Window Options
 * @type boolean
 * @default false
 * @desc If true, difficulty select window will be on the right side of screen
 *
 * @param List Window Padding
 * @parent Window Options
 * @type number
 * @min -1
 * @default -1
 * @desc Window padding on the List Window. -1 = default padding
 *
 * @param Current Difficulty Window Padding
 * @parent Window Options
 * @type number
 * @min -1
 * @default -1
 * @desc Window padding on the Current Difficulty Window. -1 = default padding
 *
 * @param Difficulty Window Padding
 * @parent Window Options
 * @type number
 * @min -1
 * @default -1
 * @desc Window padding on the Difficulty display Window. -1 = default padding
 *
 * @param Text Options
 * @text 文本设置
 *
 * @param Label Text Color
 * @text 标签文本的颜色
 * @parent Text Options
 * @type number
 * @default 1
 * @desc 设置标签文本的颜色。如：敌人属性倍率、经验获得赔率等描述。
 *
 * @param Current Difficulty
 * @text 当前难度的描述
 * @parent Text Options
 * @desc 设置关于当前难度等级标签的描述文本。
 * @default 当前难度:
 *
 * @param Enemy Stats
 * @text 敌人属性倍率的描述
 * @parent Text Options
 * @desc 设置关于敌人属性倍率标签的描述。
 * @default 敌人属性倍率:
 *
 * @param Enemy Gold
 * @text 金币掉率的描述
 * @parent Text Options
 * @desc 设置关于击败敌人后获得的金币倍率标签的描述。
 * @default 金币掉率:
 *
 * @param Enemy Exp
 * @text 经验倍率的描述
 * @parent Text Options
 * @desc 设置关于击败敌人后获得的经验倍率标签的描述。
 * @default 经验倍率:
 *
 * @param Encounter Rate
 * @text 遇敌几率的描述
 * @parent Text Options
 * @desc 设置关于地图上遇敌几率标签的描述。
 * @default 遇敌几率: 
 *
 * @param Escape Rate
 * @text 逃跑成功率的描述
 * @parent Text Options
 * @desc 设置关于队伍在战斗中逃跑成功率标签的描述。
 * @default 逃跑成功率: 
 *
 * @param Preemptive Rate
 * @text 先发制人的描述
 * @parent Text Options
 * @desc 设置关于队伍遇敌时先发制人几率标签的描述。
 * @default 先发制人几率: 
 *
 * @param Surprise Rate
 * @text 被偷袭几率的描述
 * @parent Text Options
 * @desc 设置关于队伍遇敌时被突袭几率标签的描述。
 * @default 被偷袭几率: 
*/
/*~struct~Difficulties:zh-CN
 * @param Name
 * @text 难度名称
 * @type text
 * @desc 设置一个难度等级的名称，名称需要唯一，不能多个难度使用相同难度名称。
 *
 * @param Description
 * @text 难度描述
 * @type note
 * @default ""
 * @desc 关于这个难度等级的描述。
 *
 * @param Rating
 * @text 难度参数
 * @type number
 * @min 0
 * @default 0
 * @desc 设置一个数值作为难度参数，当使用插件命令时将获取该数值作为变量在游戏中使用。
 *
 * @param Discovered
 * @type boolean
 * @default true
 * @desc Determines if new games start with this difficulty discovered
 *
 * @param Image
 * @text 图片
 * @type file
 * @dir img
 * @desc 选择作为难度内容标题的图片。
 *
 * @param Enemy Stat Modifier
 * @text 敌人属性设置
 * @type number
 * @default 100
 * @min 0
 * @desc 设置敌人整体属性的倍率。设置数值越高，难度越大。（越高越难）
 *
 * @param Enemy Gold Modifier
 * @text 金币掉落设置
 * @type number
 * @default 100
 * @min 0
 * @desc 设置战斗胜利后获得金币的倍率。设置数值越大，获得金币越多。（越高越容易）
 *
 * @param Enemy Exp Modifier
 * @text 经验倍率设置
 * @type number
 * @default 100
 * @min 0
 * @desc 设置战斗胜利后获得经验值的赔率。设置数值越大，获得经验越多。（越高越容易）
 *
 * @param Encounter Rate Modifier
 * @text 遇敌几率设置
 * @type number
 * @default 100
 * @min 0
 * @desc 设置在地图上遇到敌人（暗雷）的几率。设置数值越高，越容易遇到敌人。（越高越难）
 *
 * @param Escape Ratio Modifier
 * @text 逃跑成功率设置
 * @type number
 * @default 100
 * @min 0
 * @desc 战斗中逃跑成功率的设置。设置数值越高，越容易逃跑成功。（越高越容易）
 *
 * @param Preemptive Modifier
 * @text 先发制人几率设置
 * @type number
 * @default 100
 * @min 0
 * @desc 遭遇敌人时先发制人几率的设置。设置数值越高，越容易先发制人。（越高越容易）
 *
 * @param Surprise Modifier
 * @text 被偷袭几率设置
 * @type number
 * @default 100
 * @min 0
 * @desc 遭遇敌人时被偷袭几率的设置。设置数值越高，越容易被偷袭。（越高越难）
*/
/*:es
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/difficulty/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @orderAfter CGMZ_VehicleEncounters
 * @plugindesc Añade un sistema de dificultad a tu juego.
 * @help
 * ============================================================================
 * Para términos y condiciones de uso de este pluging en tu juego, por favor
 * visita:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * ¡Conviértete en un Patrocinador para obtener acceso a los plugings beta y
 * alfa, ademas de otras cosas geniales!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Versión: 1.1.0
 * ----------------------------------------------------------------------------
 * Compatibilidad: solo probado con mis complementos CGMZ.
 * Hecho para RPG Maker MZ 1.6.0
 * ----------------------------------------------------------------------------
 * Descripción: Usa este plugin para agregar una selección de dificultad con 
 * muchas configuraciones de personalización diferentes creadas por ti. Se 
 * puede acceder a la escena de selección de dificultad desde cualquier lugar y 
 * la configuración de dificultad está disponible a través de una llamada de 
 * script para eventos de diferencias de dificultad personalizadas en los
 * mapas.
 * ----------------------------------------------------------------------------
 * Documentación:
 * ----------------------------Imágenes----------------------------------------
 * Usando la resolución predeterminada, el tamaño de imagen que mejor se adapta 
 * es 446px de ancho. Las imágenes se escalarán automáticamente si son más 
 * anchas que la ventana y las imágenes se centrarán automáticamente si no son 
 * tan anchas como la ventana.
 * -------------------Parámetro de calificación--------------------------------
 * El parámetro de clasificación de dificultad es un número que representa la 
 * dificultad en forma de número. No se muestra en ninguna parte. Se usa en el 
 * comando de plugin Obtener dificultad, para usar en eventos de diferencias 
 * de dificultad personalizadas en tu juego.
 * ----------------------Dificultad predeterminada-----------------------------
 * La dificultad predeterminada debe ser el nombre de una dificultad que hayas 
 * configurado. Si escribes mal el nombre o el nombre de la dificultad no 
 * existe, podría causar problemas.
 * -------------------------Juegos Guardados-----------------------------------
 * Este complemento es compatible parcialmente con los juegos guardados. Los 
 * ajustes de dificultad que no sean el nombre de la dificultad se pueden 
 * cambiar y son compatibles con los juegos guardados. El nombre se guarda y 
 * los cambios en el nombre de la dificultad pueden comportarse de manera 
 * extraña en los juegos guardados.
 * ------------------------Comandos de Plugin----------------------------------
 * Este plugin admite los siguientes comandos de complemento:
 * • Establecer dificultad
 * Esto establecerá la dificultad del juego en el valor dado
 *
 * • Obtener dificultad
 * Obtendrá la calificación de dificultad de la dificultad actual y la
 * almacenará en una variable
 *
 * • Escena de llamada
 * Esto llamará a la escena de selección de dificultad
 * ---------------------------JavaScript---------------------------------------
 * Para llamar a la escena de dificultad con JavaScript, usa lo siguiente:
 * SceneManager.push(CGMZ_Scene_Difficulty);
 * ------------------------Nombre del archivo----------------------------------
 * El nombre del archivo JavaScript de este plugin DEBE ser CGMZ_Difficulty.js
 * Esto es lo que aparece cuando se descarga. El nombre de archivo se utiliza 
 * para cargar parámetros y ejecutar comandos de plugins. Si lo cambias, las 
 * cosas comenzarán a comportarse incorrectamente y tu juego probablemente se 
 * bloquee. No cambies el nombre del archivo js.
 * ------------------------Historial de versiones------------------------------
 * Versión 1.0.0 - Versión inicial
 *
 * Versión 1.0.1
 * - Corrección de errores para algunos porcentajes que se muestran 
 *   incorrectamente
 *
 * Versión 1.1.0
 * - Add option to discover/undiscover difficulties
 * - Add option to display list window on right
 * - Add option to change the window padding
 * - Add Spanish language documentation
 * - Difficulty select scene now starts with current difficulty selected
 * - This plugin now warns instead of crashes if your plugin parameters are not
 *   set up correctly. If things are not working, please check dev tool console
 *   first before reporting bug.
 *
 * @command Set Difficulty
 * @text Establecer dificultad
 * @desc Establece la dificultad a la fuerza.
 *
 * @arg difficulty
 * @text Dificultad
 * @desc Nombre de la dificultad (se requiere mayúsculas exactas) para establecer.
 *
 * @command Get Difficulty
 * @text Obtener dificultad
 * @desc Obtenga la calificación de dificultad en una variable - para usar en eventos completos.
 *
 * @arg variableId
 * @text ID de Variable
 * @default 0
 * @type variable
 * @desc Variable en la cual almacenar la calificación de dificultad .
 *
 * @command Call Scene
 * @text Escena de llamada
 * @desc Llama a la escena de dificultad
 *
 * @command Discover Difficulty
 * @desc Set discover status of difficulty
 *
 * @arg Difficulty
 * @desc Name of the difficulty (exact capitalization required) to change
 *
 * @arg Discover
 * @default true
 * @type boolean
 * @desc Set if it is discovered or not
 *
 * @command Reset Difficulty
 * @desc Resets the difficulty to the default
 *
 * @param Difficulty Options
 * @text Opciones de Dificultad
 *
 * @param Difficulties
 * @text Dificultades
 * @parent Difficulty Options
 * @type struct<Difficulties>[]
 * @desc Establecer dificultades aquí.
 * @default []
 *
 * @param Default Difficulty
 * @text Dificultad predeterminada
 * @parent Difficulty Options
 * @desc El nombre (distingue entre mayúsculas y minúsculas) de la dificultad que se usará al inicio del juego.
 *
 * @param Window Options
 * @text Opciones de ventana
 *
 * @param Display Window Info
 * @text Información de la ventana de visualización
 * @parent Window Options
 * @type select[]
 * @option Name
 * @option Image
 * @option Enemy Stats
 * @option Enemy Gold
 * @option Enemy EXP
 * @option Encounter Rate
 * @option Escape Rate
 * @option Preemptive Rate
 * @option Surprise Rate
 * @option Description
 * @option Blank Line
 * @desc La información que se muestra y el orden en que se encuentra en la ventana de visualización.
 * @default ["Name","Image","Enemy Stats","Enemy Gold","Enemy EXP","Encounter Rate","Escape Rate","Preemptive Rate","Surprise Rate","Description"]
 * 
 * @param Visible Commands
 * @text Comandos visibles
 * @parent Window Options
 * @type number
 * @min 1
 * @default 3
 * @desc Este es el número de comandos que serán visibles en la ventana de selección de dificultad sin desplazarse.
 *
 * @param Transparent Windows
 * @text Ventanas transparentes
 * @parent Window Options
 * @type boolean
 * @desc Si las ventanas de elaboración son transparentes o no.
 * @default false
 *
 * @param Background Image
 * @text Imagen de fondo
 * @parent Window Options
 * @type file
 * @dir img/pictures
 * @desc Imagen para mostrar en el fondo de la escena. Mapa borroso predeterminado utilizado si no se proporciona ninguno.
 *
 * @param Auto Close Scene On Select
 * @text Cerrar escena automáticamente al seleccionar
 * @parent Window Options
 * @type boolean
 * @default false
 * @desc Si es cierto, la escena de selección de dificultad se cerrará cuando el jugador seleccione una dificultad.
 *
 * @param List Window Right
 * @parent Window Options
 * @type boolean
 * @default false
 * @desc If true, difficulty select window will be on the right side of screen
 *
 * @param List Window Padding
 * @parent Window Options
 * @type number
 * @min -1
 * @default -1
 * @desc Window padding on the List Window. -1 = default padding
 *
 * @param Current Difficulty Window Padding
 * @parent Window Options
 * @type number
 * @min -1
 * @default -1
 * @desc Window padding on the Current Difficulty Window. -1 = default padding
 *
 * @param Difficulty Window Padding
 * @parent Window Options
 * @type number
 * @min -1
 * @default -1
 * @desc Window padding on the Difficulty display Window. -1 = default padding
 *
 * @param Text Options
 * @text Opciones de texto 
 *
 * @param Label Text Color
 * @text Color del texto de la etiqueta
 * @parent Text Options
 * @type number
 * @default 1
 * @desc El color del texto de la etiqueta.
 *
 * @param Current Difficulty
 * @text Dificultad actual
 * @parent Text Options
 * @desc Texto para describir la dificultad actual en dificultad seleccionar escena.
 * @default Current:
 *
 * @param Enemy Stats
 * @text Estadísticas del enemigo
 * @parent Text Options
 * @desc Texto para describir el modificador de estadísticas del enemigo en la escena de selección de dificultad.
 * @default Enemy Stats: 
 *
 * @param Enemy Gold
 * @text Oro enemigo
 * @parent Text Options
 * @desc Texto para describir el modificador de oro enemigo en la escena de selección de dificultad.
 * @default Enemy Gold: 
 *
 * @param Enemy Exp
 * @text Experiencia de Enemigo
 * @parent Text Options
 * @desc Texto para describir el modificador de experiencia del enemigo en la escena de selección de dificultad.
 * @default Enemy Exp: 
 *
 * @param Encounter Rate
 * @text Tasa de Encuentro 
 * @parent Text Options
 * @desc Texto para describir el modificador de tasa de encuentro en dificultad seleccionar escena.
 * @default Encounter Rate: 
 *
 * @param Escape Rate
 * @text Tasa de Escape
 * @parent Text Options
 * @desc Texto para describir el modificador de tasa de escape en dificultad seleccionar escena.
 * @default Escape Rate: 
 *
 * @param Preemptive Rate
 * @text Tasa preferencial
 * @parent Text Options
 * @desc Texto para describir el modificador de tasa preventiva en la escena de selección de dificultad.
 * @default Preemptive Rate: 
 *
 * @param Surprise Rate
 * @text Tasa Sorpresa
 * @parent Text Options
 * @desc Texto para describir el modificador de tasa de sorpresa en la escena de selección de dificultad.
 * @default Surprise Rate: 
*/
/*~struct~Difficulties:es
 * @param Name
 * @text Nombre de Dificultad
 * @type text
 * @desc El nombre de la dificultad. Debe ser único.
 *
 * @param Description
 * @text Descripción
 * @type note
 * @default ""
 * @desc La descripción de la dificultad.
 *
 * @param Rating
 * @text Clasificación
 * @type number
 * @min 0
 * @default 0
 * @desc Una calificación numérica para la dificultad, utilizada para almacenar la dificultad en la variable del juego (ver documentación).
 *
 * @param Discovered
 * @type boolean
 * @default true
 * @desc Determines if new games start with this difficulty discovered
 *
 * @param Image
 * @text Imagen
 * @type file
 * @dir img
 * @desc Selecciona la imagen que será el título del contenido de dificultad.
 *
 * @param Enemy Stat Modifier
 * @text Modificador de estadísticas del enemigo
 * @type number
 * @default 100
 * @min 0
 * @desc El cambio porcentual (multiplicativo) de las estadísticas base que tiene el enemigo (más alto = más difícil).
 *
 * @param Enemy Gold Modifier
 * @text Modificador de oro de enemigo
 * @type number
 * @default 100
 * @min 0
 * @desc El cambio porcentual (multiplicativo) de oro que otorga el enemigo (más alto = más fácil).
 *
 * @param Enemy Exp Modifier
 * @text Modificador de experiencia del enemigo
 * @type number
 * @default 100
 * @min 0
 * @desc El cambio porcentual (multiplicativo) de experiencia que otorga el enemigo (mayor = más fácil).
 *
 * @param Encounter Rate Modifier
 * @text Modificador de tasa de encuentro
 * @type number
 * @default 100
 * @min 0
 * @desc El cambio porcentual (multiplicativo) de la tasa de encuentro (mayor = más difícil).
 *
 * @param Escape Ratio Modifier
 * @text Modificador de relación de escape
 * @type number
 * @default 100
 * @min 0
 * @desc El cambio porcentual (multiplicativo) de la probabilidad de éxito de escape (mayor = más fácil).
 *
 * @param Preemptive Modifier
 * @text Modificador preventivo
 * @type number
 * @default 100
 * @min 0
 * @desc El cambio porcentual (multiplicativo) de probabilidad de batalla preventiva (mayor = más fácil).
 *
 * @param Surprise Modifier
 * @text Modificador Sorpresa
 * @type number
 * @default 100
 * @min 0
 * @desc El cambio porcentual (multiplicativo) de la probabilidad de batalla sorpresa (mayor = más difícil).
*/
var Imported = Imported || {};
Imported.CGMZ_Difficulty = true;
var CGMZ = CGMZ || {};
CGMZ.Versions = CGMZ.Versions || {};
CGMZ.Versions["Difficulty"] = "1.1.0";
CGMZ.Difficulty = {};
CGMZ.Difficulty.parameters = PluginManager.parameters('CGMZ_Difficulty');
CGMZ.Difficulty.DefaultDifficulty = CGMZ.Difficulty.parameters["Default Difficulty"];
CGMZ.Difficulty.VisibleCommands = Number(CGMZ.Difficulty.parameters["Visible Commands"]);
CGMZ.Difficulty.LabelTextColor = Number(CGMZ.Difficulty.parameters["Label Text Color"]);
CGMZ.Difficulty.ListWindowPadding = Number(CGMZ.Difficulty.parameters["List Window Padding"]);
CGMZ.Difficulty.CurrentDifficultyWindowPadding = Number(CGMZ.Difficulty.parameters["Current Difficulty Window Padding"]);
CGMZ.Difficulty.DifficultyWindowPadding = Number(CGMZ.Difficulty.parameters["Difficulty Window Padding"]);
CGMZ.Difficulty.TransparentWindows = (CGMZ.Difficulty.parameters["Transparent Windows"] === "true");
CGMZ.Difficulty.AutoCloseSceneOnSelect = (CGMZ.Difficulty.parameters["Auto Close Scene On Select"] === "true");
CGMZ.Difficulty.ListWindowRight = (CGMZ.Difficulty.parameters["List Window Right"] === "true");
CGMZ.Difficulty.BackgroundImage = CGMZ.Difficulty.parameters["Background Image"];
CGMZ.Difficulty.CurrentDifficulty = CGMZ.Difficulty.parameters["Current Difficulty"];
CGMZ.Difficulty.EnemyStatsText = CGMZ.Difficulty.parameters["Enemy Stats"];
CGMZ.Difficulty.EnemyGoldText = CGMZ.Difficulty.parameters["Enemy Gold"];
CGMZ.Difficulty.EnemyExpText = CGMZ.Difficulty.parameters["Enemy Exp"];
CGMZ.Difficulty.EncounterRateText = CGMZ.Difficulty.parameters["Encounter Rate"];
CGMZ.Difficulty.EscapeRateText = CGMZ.Difficulty.parameters["Escape Rate"];
CGMZ.Difficulty.SurpriseRateText = CGMZ.Difficulty.parameters["Surprise Rate"];
CGMZ.Difficulty.PreemptiveRateText = CGMZ.Difficulty.parameters["Preemptive Rate"];
CGMZ.Difficulty.Difficulties = CGMZ_Utils.parseJSON(CGMZ.Difficulty.parameters["Difficulties"], [], "CGMZ Difficulty", "Could not parse difficulty parameter JSON, please configure your Difficulties");
CGMZ.Difficulty.DisplayWindowInfo = CGMZ_Utils.parseJSON(CGMZ.Difficulty.parameters["Display Window Info"], [], "CGMZ Difficulty", "Could not parse difficulty window info JSON, please configure the Difficulty Window Info parameter");
//=============================================================================
// CGMZ_Difficulty
//-----------------------------------------------------------------------------
// Data class used to store difficulty data. Not saved
//=============================================================================
function CGMZ_Difficulty() {
    this.initialize(...arguments);
}
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Difficulty.prototype.initialize = function(difficulty) {
	this._name = difficulty.Name;
	this._description = CGMZ_Utils.parseJSON(difficulty.Description, "", "CGMZ Difficulty", "Could not parse difficulty description JSON for difficulty: " + this._name);
	this._rating = Number(difficulty.Rating);
	this._image = difficulty.Image;
	this._enemyStatModifier = parseFloat(difficulty["Enemy Stat Modifier"]) / 100.0;
	this._enemyGoldModifier = parseFloat(difficulty["Enemy Gold Modifier"]) / 100.0;
	this._enemyExpModifier = parseFloat(difficulty["Enemy Exp Modifier"]) / 100.0;
	this._encounterRateModifier = parseFloat(difficulty["Encounter Rate Modifier"]) / 100.0;
	this._escapeRatioModifier = parseFloat(difficulty["Escape Ratio Modifier"]) / 100.0;
	this._preemptiveModifier = parseFloat(difficulty["Preemptive Modifier"]) / 100.0;
	this._surpriseModifier = parseFloat(difficulty["Surprise Modifier"]) / 100.0;
	const discovered = (difficulty.Discovered === 'true');
	$cgmz.discoverDifficulty(this._name, discovered);
};
//=============================================================================
// CGMZ_Core
//-----------------------------------------------------------------------------
// Save the difficulty name
//=============================================================================
//-----------------------------------------------------------------------------
// Add difficulty name to save data
//-----------------------------------------------------------------------------
const alias_CGMZ_Difficulty_CGMZ_Core_createPluginData = CGMZ_Core.prototype.createPluginData;
CGMZ_Core.prototype.createPluginData = function() {
	alias_CGMZ_Difficulty_CGMZ_Core_createPluginData.call(this);
	this._difficulty = CGMZ.Difficulty.DefaultDifficulty;
	this._discoveredDifficulties = {};
};
//-----------------------------------------------------------------------------
// Create new difficulty data after load
//-----------------------------------------------------------------------------
const alias_CGMZ_Difficulty_CGMZ_Core_createAfterLoad = CGMZ_Core.prototype.createAfterLoad;
CGMZ_Core.prototype.createAfterLoad = function() {
	alias_CGMZ_Difficulty_CGMZ_Core_createAfterLoad.call(this);
	if(!this._difficulty) {
		this._difficulty = CGMZ.Difficulty.DefaultDifficulty;
	}
	if(!this._discoveredDifficulties) {
		this._discoveredDifficulties = {};
		for(const difficultyKey of Object.keys($cgmzTemp.getDifficulties())) {
			this._discoveredDifficulties[difficultyKey] = true;
		}
	}
};
//-----------------------------------------------------------------------------
// Get difficulty
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getDifficulty = function() {
	return this._difficulty;
};
//-----------------------------------------------------------------------------
// Get discovered difficulties
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getDiscoveredDifficultyNames = function() {
	return Object.keys(this._discoveredDifficulties).filter(key => this._discoveredDifficulties[key]);
};
//-----------------------------------------------------------------------------
// Set difficulty
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.setDifficulty = function(difficulty) {
	this._difficulty = difficulty;
};
//-----------------------------------------------------------------------------
// Discover (or undiscover) difficulty
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.discoverDifficulty = function(difficulty, discoverStatus) {
	this._discoveredDifficulties[difficulty] = discoverStatus;
};
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Unsaved Difficulty Data handling
//=============================================================================
//-----------------------------------------------------------------------------
// Add difficulty data
//-----------------------------------------------------------------------------
const alias_CGMZ_Difficulty_CGMZ_Temp_createPluginData = CGMZ_Temp.prototype.createPluginData;
CGMZ_Temp.prototype.createPluginData = function() {
	alias_CGMZ_Difficulty_CGMZ_Temp_createPluginData.call(this);
	this.initializeDifficulties();
};
//-----------------------------------------------------------------------------
// Initialize Difficulties
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.initializeDifficulties = function() {
	this._difficulties = {};
	for(let i = 0; i < CGMZ.Difficulty.Difficulties.length; i++) {
		const parsedDifficulty = CGMZ_Utils.parseJSON(CGMZ.Difficulty.Difficulties[i], null, "CGMZ Difficulty", "Could not parse difficulty JSON. Please configure your Difficulties parameter");
		if(parsedDifficulty) {
			const difficulty = new CGMZ_Difficulty(parsedDifficulty);
			this._difficulties[difficulty._name] = difficulty;
		}
	}
};
//-----------------------------------------------------------------------------
// Register Difficulty Plugin Commands
//-----------------------------------------------------------------------------
const alias_CGMZ_Difficulty_CGMZ_Temp_registerPluginCommands = CGMZ_Temp.prototype.registerPluginCommands;
CGMZ_Temp.prototype.registerPluginCommands = function() {
	alias_CGMZ_Difficulty_CGMZ_Temp_registerPluginCommands.call(this);
	PluginManager.registerCommand("CGMZ_Difficulty", "Call Scene", this.pluginCommandDifficultyCallScene);
	PluginManager.registerCommand("CGMZ_Difficulty", "Set Difficulty", this.pluginCommandDifficultySetDifficulty);
	PluginManager.registerCommand("CGMZ_Difficulty", "Get Difficulty", this.pluginCommandDifficultyGetDifficulty);
	PluginManager.registerCommand("CGMZ_Difficulty", "Discover Difficulty", this.pluginCommandDifficultyDiscoverDifficulty);
	PluginManager.registerCommand("CGMZ_Difficulty", "Reset Difficulty", this.pluginCommandDifficultyResetDifficulty);
};
//-----------------------------------------------------------------------------
// Plugin Command - Call Scene
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandDifficultyCallScene = function() {
	SceneManager.push(CGMZ_Scene_Difficulty);
};
//-----------------------------------------------------------------------------
// Plugin Command - Set difficulty
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandDifficultySetDifficulty = function(args) {
	$cgmz.setDifficulty(args.difficulty);
};
//-----------------------------------------------------------------------------
// Plugin Command - Get difficulty
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandDifficultyGetDifficulty = function(args) {
	const difficulty = $cgmzTemp.getDifficulty($cgmz.getDifficulty());
	$gameVariables.setValue(Number(args.variableId), difficulty._rating);
};
//-----------------------------------------------------------------------------
// Plugin Command - Discover Difficulty
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandDifficultyDiscoverDifficulty = function(args) {
	const difficulty = $cgmzTemp.getDifficulty(args.Difficulty);
	if(difficulty) {
		$cgmz.discoverDifficulty(args.Difficulty, args.Discover === 'true');
	}
};
//-----------------------------------------------------------------------------
// Plugin Command - Reset difficulty
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandDifficultyResetDifficulty = function() {
	$cgmz.setDifficulty(CGMZ.Difficulty.DefaultDifficulty);
};
//-----------------------------------------------------------------------------
// Get a specific difficulty object by name
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getDifficulty = function(name) {
	return this._difficulties[name];
};
//-----------------------------------------------------------------------------
// Get all difficulties
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getDifficulties = function() {
	return this._difficulties;
};
//-----------------------------------------------------------------------------
// Get discovered difficulties
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.getDiscoveredDifficulties = function() {
	const discoveredNames = $cgmz.getDiscoveredDifficultyNames();
	return Object.keys(this._difficulties).filter(difficulty => discoveredNames.includes(difficulty));
};
//=============================================================================
// Game Enemy
//-----------------------------------------------------------------------------
// Change gold and exp by difficulty modifier. Also change base params
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Change the enemy exp
//-----------------------------------------------------------------------------
const alias_CGMZ_Difficulty_GameEnemy_exp = Game_Enemy.prototype.exp;
Game_Enemy.prototype.exp = function() {
	const difficulty = $cgmzTemp.getDifficulty($cgmz.getDifficulty());
    return alias_CGMZ_Difficulty_GameEnemy_exp.call(this) * difficulty._enemyExpModifier;
};
//-----------------------------------------------------------------------------
// Alias. Change the enemy gold
//-----------------------------------------------------------------------------
const alias_CGMZ_Difficulty_GameEnemy_gold = Game_Enemy.prototype.gold;
Game_Enemy.prototype.gold = function() {
	const difficulty = $cgmzTemp.getDifficulty($cgmz.getDifficulty());
    return alias_CGMZ_Difficulty_GameEnemy_gold.call(this) * difficulty._enemyGoldModifier;
};
//-----------------------------------------------------------------------------
// Alias. Change the enemy base params
//-----------------------------------------------------------------------------
const alias_CGMZ_Difficulty_GameEnemy_paramBase = Game_Enemy.prototype.paramBase;
Game_Enemy.prototype.paramBase = function(paramId) {
	const difficulty = $cgmzTemp.getDifficulty($cgmz.getDifficulty());
    return alias_CGMZ_Difficulty_GameEnemy_paramBase.call(this, paramId) * difficulty._enemyStatModifier;
};
//=============================================================================
// Game Party
//-----------------------------------------------------------------------------
// Change surprise and preemptive rates by modifiers
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Change the preemptive rate by difficulty modifier
//-----------------------------------------------------------------------------
const alias_CGMZ_Difficulty_GameParty_ratePreemptive = Game_Party.prototype.ratePreemptive;
Game_Party.prototype.ratePreemptive = function(troopAgi) {
    const difficulty = $cgmzTemp.getDifficulty($cgmz.getDifficulty());
    return alias_CGMZ_Difficulty_GameParty_ratePreemptive.call(this, troopAgi) * difficulty._preemptiveModifier;
};
//-----------------------------------------------------------------------------
// Alias. Change the surprise rate by difficulty modifier
//-----------------------------------------------------------------------------
const alias_CGMZ_Difficulty_GameParty_rateSurprise = Game_Party.prototype.rateSurprise;
Game_Party.prototype.rateSurprise = function(troopAgi) {
    const difficulty = $cgmzTemp.getDifficulty($cgmz.getDifficulty());
    return alias_CGMZ_Difficulty_GameParty_rateSurprise.call(this, troopAgi) * difficulty._surpriseModifier;
};
//=============================================================================
// BattleManager
//-----------------------------------------------------------------------------
// Change escape ratio by difficulty modifier
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Change escape ratio by difficulty modifier
//-----------------------------------------------------------------------------
const alias_CGMZ_Difficulty_BattleManager_makeEscapeRatio = BattleManager.makeEscapeRatio;
BattleManager.makeEscapeRatio = function() {
	alias_CGMZ_Difficulty_BattleManager_makeEscapeRatio.call(this);
	const difficulty = $cgmzTemp.getDifficulty($cgmz.getDifficulty());
    this._escapeRatio *= difficulty._escapeRatioModifier;
};
//=============================================================================
// Game Map
//-----------------------------------------------------------------------------
// Change encounter step by difficulty modifier
//=============================================================================
//-----------------------------------------------------------------------------
// Alias. Change encounter step by difficulty modifier
//-----------------------------------------------------------------------------
const alias_CGMZ_Difficulty_GameMap_encounterStep = Game_Map.prototype.encounterStep;
Game_Map.prototype.encounterStep = function() {
	const difficulty = $cgmzTemp.getDifficulty($cgmz.getDifficulty());
    return Number(alias_CGMZ_Difficulty_GameMap_encounterStep.call(this) * difficulty._encounterRateModifier);
};
//=============================================================================
// CGMZ_Scene_Difficulty
//-----------------------------------------------------------------------------
// Handle the difficulty select scene
//=============================================================================
function CGMZ_Scene_Difficulty() {
    this.initialize.apply(this, arguments);
}
CGMZ_Scene_Difficulty.prototype = Object.create(Scene_MenuBase.prototype);
CGMZ_Scene_Difficulty.prototype.constructor = CGMZ_Scene_Difficulty;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Scene_Difficulty.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};
//-----------------------------------------------------------------------------
// Create difficulty windows
//-----------------------------------------------------------------------------
CGMZ_Scene_Difficulty.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
	this.createCurrentDifficultyWindow();
	this.createListWindow();
	this.createDisplayWindow();
};
//-----------------------------------------------------------------------------
// Create current difficulty window
//-----------------------------------------------------------------------------
CGMZ_Scene_Difficulty.prototype.createCurrentDifficultyWindow = function() {
	const rect = this.currentDifficultyWindowRect();
    this._currentDifficultyWindow = new CGMZ_Window_Difficulty_CurrentDifficulty(rect);
	this._currentDifficultyWindow.refresh();
    this.addWindow(this._currentDifficultyWindow);
};
//-----------------------------------------------------------------------------
// Get current difficulty window rect
//-----------------------------------------------------------------------------
CGMZ_Scene_Difficulty.prototype.currentDifficultyWindowRect = function() {
	const x = CGMZ.Difficulty.ListWindowRight ? Graphics.boxWidth * 8 / 12 : Graphics.boxWidth / 12;
	const width = Graphics.boxWidth / 4;
	const height = this.calcWindowHeight(2, false);
	const y = Graphics.boxHeight / 12;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create list window
//-----------------------------------------------------------------------------
CGMZ_Scene_Difficulty.prototype.createListWindow = function() {
	const rect = this.listWindowRect();
    this._listWindow = new CGMZ_Window_Difficulty_DifficultyList(rect);
	this._listWindow.setHandler('cancel', this.popScene.bind(this));
	this._listWindow.setHandler('ok', this.onListOk.bind(this));
	this._listWindow.refresh();
	this._listWindow.activate();
    this.addWindow(this._listWindow);
};
//-----------------------------------------------------------------------------
// Get list window rect
//-----------------------------------------------------------------------------
CGMZ_Scene_Difficulty.prototype.listWindowRect = function() {
	const x = this._currentDifficultyWindow.x;
	const y = this._currentDifficultyWindow.y + this._currentDifficultyWindow.height;
	const width = this._currentDifficultyWindow.width;
	const height = this.calcWindowHeight(CGMZ.Difficulty.VisibleCommands, true);
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// Create display window
//-----------------------------------------------------------------------------
CGMZ_Scene_Difficulty.prototype.createDisplayWindow = function() {
	const rect = this.displayWindowRect()
    this._displayWindow = new CGMZ_Window_Difficulty_Display(rect);
	this._displayWindow.refresh();
	this._listWindow.setDisplayWindow(this._displayWindow);
    this.addWindow(this._displayWindow);
};
//-----------------------------------------------------------------------------
// Get display window rect
//-----------------------------------------------------------------------------
CGMZ_Scene_Difficulty.prototype.displayWindowRect = function() {
	const x = CGMZ.Difficulty.ListWindowRight ? Graphics.boxWidth / 12 : this._listWindow.x + this._listWindow.width;
	const y = this._currentDifficultyWindow.y;
	const width = Graphics.boxWidth * 7 / 12;
	const height = Graphics.boxHeight - Graphics.boxHeight / 6;
	return new Rectangle(x, y, width, height);
};
//-----------------------------------------------------------------------------
// On List Ok
//-----------------------------------------------------------------------------
CGMZ_Scene_Difficulty.prototype.onListOk = function() {
	$cgmz.setDifficulty(this._listWindow.item()._name);
	this._currentDifficultyWindow.refresh();
	this._listWindow.activate();
	if(CGMZ.Difficulty.AutoCloseSceneOnSelect) this.popScene();
};
//-----------------------------------------------------------------------------
// Add background image
//-----------------------------------------------------------------------------
CGMZ_Scene_Difficulty.prototype.createBackground = function() {
	Scene_MenuBase.prototype.createBackground.call(this);
	if(CGMZ.Difficulty.BackgroundImage) {
		this._backgroundCustomSprite = new Sprite();
		this._backgroundCustomSprite.bitmap = ImageManager.loadPicture(CGMZ.Difficulty.BackgroundImage);
		this.addChild(this._backgroundCustomSprite);
	}
};
//=============================================================================
// CGMZ_Window_Difficulty_CurrentDifficulty
//-----------------------------------------------------------------------------
// Shows current difficulty
//=============================================================================
function CGMZ_Window_Difficulty_CurrentDifficulty(rect) {
    this.initialize.apply(this, arguments);
}
CGMZ_Window_Difficulty_CurrentDifficulty.prototype = Object.create(Window_Base.prototype);
CGMZ_Window_Difficulty_CurrentDifficulty.prototype.constructor = CGMZ_Window_Difficulty_CurrentDifficulty;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_CurrentDifficulty.prototype.initialize = function(rect) {
    Window_Base.prototype.initialize.call(this, rect);
	this.setBackgroundType(2 * (CGMZ.Difficulty.TransparentWindows));
	this.refresh();
};
//-----------------------------------------------------------------------------
// Set window padding
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_CurrentDifficulty.prototype.updatePadding = function() {
    if(CGMZ.Difficulty.CurrentDifficultyWindowPadding >= 0) {
		this.padding = CGMZ.Difficulty.CurrentDifficultyWindowPadding;
	} else {
		Window_Base.prototype.updatePadding.call(this);
	}
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_CurrentDifficulty.prototype.refresh = function() {
	this.contents.clear();
	this.drawCurrentDifficulty();
};
//-----------------------------------------------------------------------------
// Draw current difficulty
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_CurrentDifficulty.prototype.drawCurrentDifficulty = function() {
	this.changeTextColor(ColorManager.textColor(CGMZ.Difficulty.LabelTextColor));
	this.drawText(CGMZ.Difficulty.CurrentDifficulty, 0, 0, this.contents.width, 'center');
	this.changeTextColor(ColorManager.normalColor());
	this.drawText($cgmz.getDifficulty(), 0, this.lineHeight(), this.contents.width, 'center');
};
//=============================================================================
// CGMZ_Window_Difficulty_DifficultyList
//-----------------------------------------------------------------------------
// Selectable window for choosing a profession in a list.
//=============================================================================
function CGMZ_Window_Difficulty_DifficultyList(rect) {
    this.initialize.apply(this, arguments);
}
CGMZ_Window_Difficulty_DifficultyList.prototype = Object.create(Window_Selectable.prototype);
CGMZ_Window_Difficulty_DifficultyList.prototype.constructor = CGMZ_Window_Difficulty_DifficultyList;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_DifficultyList.prototype.initialize = function(rect) {
    Window_Selectable.prototype.initialize.call(this, rect);
	this.setBackgroundType(2 * (CGMZ.Difficulty.TransparentWindows));
	this.select(0);
};
//-----------------------------------------------------------------------------
// Set window padding
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_DifficultyList.prototype.updatePadding = function() {
	if(CGMZ.Difficulty.ListWindowPadding >= 0) {
		this.padding = CGMZ.Difficulty.ListWindowPadding;
	} else {
		Window_Selectable.prototype.updatePadding.call(this);
	}
};
//-----------------------------------------------------------------------------
// Max items
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_DifficultyList.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};
//-----------------------------------------------------------------------------
// Current item
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_DifficultyList.prototype.item = function() {
    return this._data[this.index()];
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_DifficultyList.prototype.refresh = function() {
    this.makeItemList();
    Window_Selectable.prototype.refresh.call(this);
	this.selectCurrentDifficulty();
};
//-----------------------------------------------------------------------------
// Make item list
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_DifficultyList.prototype.makeItemList = function() {
	const discoveredDifficulties = $cgmzTemp.getDiscoveredDifficulties();
	this._data = discoveredDifficulties.map(name => $cgmzTemp.getDifficulty(name));
};
//-----------------------------------------------------------------------------
// Make item list
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_DifficultyList.prototype.selectCurrentDifficulty = function() {
	let index = this._data.length > 0 ? 0 : -1;
	const currentDifficulty = $cgmz.getDifficulty();
	for(let i = 0; i < this._data.length; i++) {
		if(this._data[i]._name === currentDifficulty) {
			index = i;
			break;
		}
	}
	this.select(index);
};
//-----------------------------------------------------------------------------
// Draw item in list
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_DifficultyList.prototype.drawItem = function(index) {
    let item = this._data[index];
    let rect = this.itemRectWithPadding(index);
    this.drawText(item._name, rect.x, rect.y, rect.width, 'left');
};
//-----------------------------------------------------------------------------
// Set display window
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_DifficultyList.prototype.setDisplayWindow = function(displayWindow) {
    this._displayWindow = displayWindow;
    this.callUpdateHelp();
};
//-----------------------------------------------------------------------------
// See if can update display window
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_DifficultyList.prototype.callUpdateHelp = function() {
    if(this.active && this._displayWindow) {
		this._displayWindow.setItem(this.item());
	}
};
//=============================================================================
// CGMZ_Window_Difficulty_Display
//-----------------------------------------------------------------------------
// Shows current difficulty modifiers
//=============================================================================
function CGMZ_Window_Difficulty_Display(rect) {
    this.initialize.apply(this, arguments);
}
CGMZ_Window_Difficulty_Display.prototype = Object.create(Window_Base.prototype);
CGMZ_Window_Difficulty_Display.prototype.constructor = CGMZ_Window_Difficulty_Display;
//-----------------------------------------------------------------------------
// Initialize
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_Display.prototype.initialize = function(rect) {
    Window_Base.prototype.initialize.call(this, rect);
	this.setBackgroundType(2 * (CGMZ.Difficulty.TransparentWindows));
	this._difficulty = null;
	this._difficultyImage = new Sprite();
	this.addInnerChild(this._difficultyImage);
	this.refresh();
};
//-----------------------------------------------------------------------------
// Set window padding
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_Display.prototype.updatePadding = function() {
	if(CGMZ.Difficulty.DifficultyWindowPadding >= 0) {
		this.padding = CGMZ.Difficulty.DifficultyWindowPadding;
	} else {
		Window_Base.prototype.updatePadding.call(this);
	}
};
//-----------------------------------------------------------------------------
// Set the currently displayed difficulty
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_Display.prototype.setItem = function(difficulty) {
	if(this._difficulty === difficulty) return;
	this._difficulty = difficulty;
	this.refresh();
};
//-----------------------------------------------------------------------------
// Refresh
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_Display.prototype.refresh = function() {
	this.contents.clear();
	if(!this._difficulty) return;
	this.loadDifficultyImage(); // calls the drawing function after image load
};
//-----------------------------------------------------------------------------
// Load the difficulty image
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_Display.prototype.loadDifficultyImage = function() {
	const imageData = $cgmzTemp.getImageData(this._difficulty._image);
	this._difficultyImage.bitmap = ImageManager.loadBitmap(imageData.folder, imageData.filename);
	this._difficultyImage.bitmap.addLoadListener(this.drawCurrentDifficulty.bind(this));
};
//-----------------------------------------------------------------------------
// Draw difficulty info
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_Display.prototype.drawCurrentDifficulty = function() {
	let y = 0;
	for(const section of CGMZ.Difficulty.DisplayWindowInfo) {
		switch(section) {
			case "Name":
				this.drawText(this._difficulty._name, 0, y, this.contents.width, 'center');
				y += this.lineHeight();
				break;
			case "Image":
				this.showImage(y);
				y += this._difficultyImage.height;
				break;
			case "Enemy Stats":
				this.drawStandardLine(CGMZ.Difficulty.EnemyStatsText, Math.round(Number(this._difficulty._enemyStatModifier*100)) + "%", y);
				y += this.lineHeight();
				break;
			case "Enemy Gold":
				this.drawStandardLine(CGMZ.Difficulty.EnemyGoldText, Math.round(Number(this._difficulty._enemyGoldModifier*100)) + "%", y);
				y += this.lineHeight();
				break;
			case "Enemy EXP":
				this.drawStandardLine(CGMZ.Difficulty.EnemyExpText, Math.round(Number(this._difficulty._enemyExpModifier*100)) + "%", y);
				y += this.lineHeight();
				break;
			case "Encounter Rate":
				this.drawStandardLine(CGMZ.Difficulty.EncounterRateText, Math.round(Number(this._difficulty._encounterRateModifier*100)) + "%", y);
				y += this.lineHeight();
				break;
			case "Escape Rate":
				this.drawStandardLine(CGMZ.Difficulty.EscapeRateText, Math.round(Number(this._difficulty._escapeRatioModifier*100)) + "%", y);
				y += this.lineHeight();
				break;
			case "Preemptive Rate":
				this.drawStandardLine(CGMZ.Difficulty.PreemptiveRateText, Math.round(Number(this._difficulty._preemptiveModifier*100)) + "%", y);
				y += this.lineHeight();
				break;
			case "Surprise Rate":
				this.drawStandardLine(CGMZ.Difficulty.SurpriseRateText, Math.round(Number(this._difficulty._surpriseModifier*100)) + "%", y);
				y += this.lineHeight();
				break;
			case "Description":
				y += this.CGMZ_drawText(this._difficulty._description, 0, 0, y, this.contents.width, 'left');
				break;
			case "Blank Line": y += this.lineHeight();
		}
	}
};
//-----------------------------------------------------------------------------
// Show difficulty image (only scale x value, don't care about y scaling here)
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_Display.prototype.showImage = function(y) {
	const scaleX = Math.min(1.0, this.contents.width/this._difficultyImage.width);
	this._difficultyImage.scale.x = scaleX;
	this._difficultyImage.x = (this.contents.width - this._difficultyImage.width * scaleX) / 2;
	this._difficultyImage.y = y;
	this._difficulty._image ? this._difficultyImage.show() : this._difficultyImage.hide();
};
//-----------------------------------------------------------------------------
// Draw standard difficulty line
//-----------------------------------------------------------------------------
CGMZ_Window_Difficulty_Display.prototype.drawStandardLine = function(label, descriptor, y) {
	const totalString = '\\c[' + CGMZ.Difficulty.LabelTextColor + ']' + label + '\\c[0]' + descriptor;
	this.CGMZ_drawTextLine(totalString, 0, y, this.contents.width, 'left');
};