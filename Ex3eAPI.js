

const scriptTitle = "Ex3eAPI:";
const version = "3.7.1";
const lastUpdated = "2022-12-30";
const authors = "Mike Leavitt, Corin Maslin, Pinmissile";
const functionHeader = " #~#~#~#~#~#~#~#~#~#~#~#~#~#~#~#~#~#~#~#~#~#~#~#~#~#~#~#~";

on("ready",function(){
    checkInstall();
    doLog("exaltScript ready");
    //exaltScript.RegisterEventHandlers();
});

function checkInstall() {

doSendChat(scriptTitle, `version:  ${github} ${version}<br>lastUpdated:${lastUpdated}<br/>EX3 scripts by Corin: based on Exalted 3rd Edition Dice Roller by Mike Leavitt and exaltScript by Pinmissile<br/>For instructions, type <code>!exr help<br/></code>`);

    if( ! state.hasOwnProperty(scriptTitle) || state.exRoller.version != version) {
        state.exRoller = {
            version: version,
            setting: {
                doInitiative: true,
                doAnima: true,
                doNotifications: true,
                doWoundTracker: true,
                doStatusSwitch: true,
                doStatusExpiration: true,
                currentRound: 0,
                doDirectAnimaIncrease: true,
                debugMode: true,
                doAddMotesEndTurn: true,
                playerMotesRegen: 5,
                npcMotesRegen:5
            }
        }
        if (!state.playerMotesRegen || state.playerMotesRegen == 0) state.playerMotesRegen = 5;
        if (!state.npcMotesRegen || state.npcMotesRegen == 0) state.npcMotesRegen = 5;
       
        doDisplayOptions();
    }
}

//#region CONSTANTS
//#region PLAYER CHARACTER IDS
    const darylCharacterId = "-MBu5Fp7Dy-9R8p-vTaR";
    const peteCharacterId = "-MBu2e2s4tC_M4iwWuJA";
    // ReSharper disable once StringLiteralTypo
    const maxCharacterId = "-M6FQ6CjddAMS2MGO-Ca";
    // ReSharper disable once StringLiteralTypo
    const paulNCharacterId = "-MBu5bEBnFfbtl6uc6_p";
    // ReSharper disable once StringLiteralTypo

const playerCharacterIdsArray = [darylCharacterId, peteCharacterId, maxCharacterId, paulNCharacterId];

//#endregion

//#region COMMAND WAKE WORDS
const apiWake = "!exr";
const cmdJoinBattle = "joinBattle";
const cmdWitheringDamage = "wDamage";
const cmdSpendInit = "initSpend";
const cmdInitSet = "initSet";
const cmdAttackTarget = "attackTarget";
const cmdAttackFromCharacterSheetDex = "attackChar";
const cmdAttackFromCharacterSheetInt = "attackCharInt";
const cmdAttackToken = "attackToken";
const cmdRollDice = "roll";

const cmdResetInitiative = "initReset";
const cmdRollWitheringDamage = "rollWDamage";
const cmdRollDecisiveDamage = "rollDDamage";
const cmdRollWitheringAttack = "rollWAttack";
const cmdRollDecisiveAttack = "rollDAttack";
const cmdEssenceSpendToken = "essToken";
const cmdEssenceSpendCharacter = "essChar";
const cmdSkillCheckChar = "skillCheck";
const cmdQCRoll = "qcRoll";
const cmdQCAttack = "qcAttack";
const cmdSMChange = "sm";
const cmdSMCast = "smCast";
const cmdBGStats = "bgStats";
const cmdAddMagnitude = "bgAddMag";
const cmdResolveBGAttack = "resolveBGAttack";
const cmdGrpCheckMenu = "gmMenu";
const cmdGrpSkillCheck = "groupSkillCheck";
const cmdGrpAwareness = "grpAwareness";
const cmdGrpInvestigate = "grpInvestigate";
const cmdGrpReadIntention = "grpReadIntention";
const cmdGrpAddXp = "addXp";
const cmdGrpMaxMotes = "grpMotesMax";
const cmdGrpAddMotes = "grpAddMotes";
const cmdGrpClearAnima = "grpAnimaClear";
const cmdGrpClearOnslaught = "grpOnslaughtClear";
const cmdGrpClearTurnOrder = "grpTurnOrderClear";
const cmdGrpClearCrash = "grpCrashClear";
const cmdUI = "UI";
const cmdCombatStart = "combatStart";
const cmdCombatEnd = "combatEnd";
const cmdCharacterMenu = "characterMenu";
const cmdCharacterActions = "characterAction";
const cmdQCActions = "qcAction";
const cmdJoinBattleCharacter = "joinBattleChar";
const cmdJoinBattleCharacterStealth  ="joinBattleCharStealth";
const cmdSetBattleToken = "setBattleToken";

const cmdSetStatus = "setStatus";
const cmdStatusMarkersGetFromToken = "statusGetToken";
const cmdStatusMarkersClear = "statusClear"
const cmdStatusIncrement = "statusInc";
const cmdStatusGet = "statusGetValue";

const cmdSettings = "config";
const settingAnima = "anima";
const settingInitiative = "initiative";
const settingMigration = "migration";
const settingWoundPenalty = "woundPenalty";
const settingNotifications = "notifications";
const settingDirectAnimaIncrease = "directAnima";
const settingDebugMode = "debugMode";
const settingMotesIncrease = "motesAdd";
const settingPlayerRegen = "playerRegen";
const settingNpcRegen = "npcRegen";


const actionStealth = "stealth";
const actionSorceryShape = "sorceryShape";
const actionSorcerySetSM  = "sorcerySetSM";
const actionSorceryClear = "sorceryClear";
const actionWillpower = "willpower";
const actionLimitCheck = "limit";
const actionDodge = "dodge";
const actionAthleticsStrength = "athleticsStrength";
const actionAthleticsStamina = "athleticsStamina";
const actionAthleticsDexterity = "athleticsDexterity";
const actionSurvivalStamina = "survivalStamina";
const actionCombatJoinBattle = "joinBattle";
const actionSpendEssence = "spendEssence";
const actionCombatRush = "rush";
const actionCombatDisengage = "disengage";
const actionCombatGambit = "gambit";
const actionStaminaResistance = "resistanceStamina";
const actionAbility = "ability";

const actionCombatAim = "aim";

const cmdNaval = "naval";
const actionNavalPosition = "position";
const actionNavalBroadside = "broadside";
const actionNavalEscape = "escape";
const actionNavalRam = "ram";
const actionNavalConceal = "conceal";
const actionNavalPursuit = "pursuit";
const actionNavalDouseFlame = "douse";
const actionNavalEscortVessel = "escort";
const actionNavalSignal = "signal";
const actionNavalSubmerge = "submerge";
const actionNavalVolley = "volley";
const actionNavalBoard = "boarding";

const actionNavalAssignVessel = "assignTarget";
const actionNavalAssignPlayerVessel = "assignPlayers";
const actionNavalClearPlayerVessel = "clearPlayerVessel";

const bar1Value = "bar1_value";
const bar2Value = "bar2_value";
const bar3Value = "bar3_value";

//#endregion
//#region COMMANDS CONSTANTS
const attackTypeWithering = "Withering";
const attackTypeDecisive = "Decisive";

const essPeripheral = "Peripheral";
const essPersonal = "Personal";

//#endregion
//#region CSS  STYLES
// Define CSS...
const AddStyle = "display: inline-block; text-align: center; min-width: 1.75em; font-size: 1em; font-weight: bold; color:#040; background-color: #8C8; border: 1px solid #040; padding: -1px 2px; border-radius: 3px;";
const MinusStyle = "display: inline-block; text-align: center; min-width: 1.75em; font-size: 1em; font-weight: bold; color:#600; background-color: #FAA; border: 1px solid #600; padding: -1px 2px; border-radius: 3px;";
const bgEmphasis = "style='color:red;font-weight:bold;font-variant: small-caps;font-size: 20px;'";
var AddStyleSpan = function(message) {
    const ret = "<span style=\"" + AddStyle + "\">" + message + "</span>";
    return ret;
};
var MinusStyleSpan = function(message) {
    return "<span style=\"" + MinusStyle + "\">" + message + "</span>";
};

const notifyStyle = 'color:  papayawhip;' +
    'padding: 5px 5px;' +
    'background-color: #A40000;' +
    'font-size: 17px;' +
    'border: 1px solid black;' +
    'text-align: center;';
const chatButtonStyle = "margin: 2px; width:80%;text-align:center; font-size:1vw;";
const chatIconButtonStyle = "margin-right:2px;margin-bottom:2px;width:fit-content;text-align:center;font-size:24px;text-shadow: 2px 2px #000000";
const charMenuHeaderStyle = " style='text-align:center;margin-top:1px;margin-bottom:2px;font-family: Cinzel;font-size:0.8vw'";
const weaponIconButtonStyle = "margin:2px; width:80px;text-align:center;font-size:24px;text-shadow: 2px 2px #000000";

const bgStyle = "margin-top:0px;padding-top:0px;font-weight:bold";
const styleIndent = "margin-top:0px;padding-top:0px;padding-left:20px;margin-left:15px;font-weight:normal;";
//#endregion
//#region INTERNAL CONSTANTS
const diceRollMacro = "d10cf11cs0sd>7";
const characterIdPlaceHolder = "****";
const _playerPageId = "playerpageid";
const turnOrderString = "turnorder";
const sep = "|";
const htmlTargetTokenId = "&#64;{target|token_id}";
const htmlSelectedTokenId = "&#64;{selected|token_id}";

const poolModifierSelector = "?{Modifier|0,0|-5,-5|-4,-4|-3,-3|-2,-2|-1,-1|1,1|2,2|3,3|4,4|5,5|6,6|7,7|8,8|9,9|10,10|11,11|12,12|13,13|14,14|15,15|16,16|17,17|18,18|19,19|20,20}";

//#endregion
//#region STATUS KEYWORDS
const status_ninja = "ninja";
const status_aura = "aura";
const status_crash = "crash";

const status_earth = "152536"; // 152536: earth
const status_fire = "152537"; // 152537: Fire
const status_water = "152538"; // 152538: water
const status_wood = "152539"; // 152539: wood
const status_air = "152540"; // 152540: air

const status_electroToken = "electroToken::5717105"; //5717105: electroToken
const status_anemoToken = "anemoToken::5717106"; //5717106: anemoToken
const status_dendroToken = "dendroToken::5717107"; // 5717107: dendroToken
const status_pyroToken = "pyroToken::5717108"; //5717108: pyroToken
const status_cryoToken = "cryoToken::5717109"; //5717109: cryoToken
const status_hydroToken = "hydroToken::5717110"; //5717110: hydroToken
const status_geoToken = "geoToken::5717111"; //5717111: geoToken;

const status_earth_name = "earth"; // 152536: earth
const status_fire_name = "Fire"; // 152537: Fire
const status_water_name = "water"; // 152538: water
const status_wood_name = "wood"; // 152539: wood
const status_air_name = "air"; // 152540: air
const status_electroToken_name = "electroToken"; // 5717105: electroToken
const status_anemoToken_name = "anemoToken"; // 5717106: anemoToken
const status_dendroToken_name = "dendroToken"; // 5717107: dendroToken
const status_pyroToken_name = "pyroToken"; // 5717108: pyroToken
const status_cryoToken_name = "cryoToken"; // 5717109: cryoToken
const status_hydroToken_name = "hydroToken"; // 5717110: hydroToken
const status_geoToken_name = "geoToken"; // 5717111: geoToken

const status_onslaughtProtect = "white-tower";
const statusOnslaught = "purple";
const statusAnima = "aura";
const statusCrash = "flying-flag";
const statusAim = "archery-target";
const statusTempMiscPenalty = "yellow";
const statusFatiguePenalty = "pink";
const statusPermMiscPenalty = "blue";
const statusWoundPenalty = "red";
const statusNinjaMask = "ninja-mask";
const statusPoisoned = "drink-me";
const statusGrappled = "grab";
const statusProne = "back-pain";
const statusLegendarySize = "fist";

//#endregion
//#region ATTRIBUTE KEYWORDS (from sheet)

const attrName = "name";

const attrPerception = "Perception";
const attrDexterity = "dexterity";
const attrStrength = "Strength";
const attrStamina = "Stamina";
const attrIntelligence = "Intelligence";
const attrWits = "Wits";
const attrWillpower = "willpower";
const attrLimit = "limit";

const abiArchery = "Archery";
const abiAwareness = "Awareness";
const abiInvestigation = "Investigation";
const abiSocialize = "Socialize";
const abiStealth = "Stealth";
const abiSail = "Sail";
const abiDodge = "Dodge";
const abiAthletics = "Athletics";
const abiOccult = "Occult";
const abiSurvival = "Survival";
const abiResistance = "Resistance";
const abiWar = "War";
const attrArmourMobility = "armor-mobility";

const attrCommittedEssence = "committedesstotal";
const attrEssencePersonal = "personal-essence";
const attrEssencePeripheral = "peripheral-essence";

const attrEquationPeripheral = "peripheral-equation";
const attrEquationPersonal = "personal-equation";

const attrNavalVesselId = "navalVesselAssigned";
const attrNavalVesselName = "navalVesselAssignedName";

const attrWoundPenalty = "wound-penalty";
const attrJoinBattleBonus = "joinBattleBonus";
const battleTokenId = "battleTokenId";
const qcIsIndividual = "qc_individual";

var BarNames = ["Initiative", "essence", "wound penalty"];

const attrLastTurnMotes = "lastTurnMotes";
const attrLastTurnAnima = "lastTurnAnima";

const attrBattleGroup = 'battlegroup';
const attrBattleGroupIsSwarm = "battlegroupSwarm";

//#endregion
//#region FANCY EMOJI BUTTON LABELS
const spendEssenceLabel = "🀄Spend essence";
const witheringDamageLabel = "🔪Withering damage";
const decisiveDamageLabel = "🔪Decisive damage";
const resetInitiativeLabel = "🎬🔘Reset ";
const spendInitiativeLabel = "🎬💠Adjust ";
//#endregion

//#endregion

on('chat:message', 
    function(msg) {
        try {
            //if (msg.type !== "api") return;

            doLog("on('chat:who') ");
            doLog(msg.playerid);
            doLog("on('chat:message') " + msg.content);

            const wakeWord = msg.content.split(" ")[0];
            if (wakeWord !== apiWake) return;

            const command = msg.content.split(" ")[1];
            const originalMsg = msg.content;
            const commandLine = originalMsg;

            handleInput(command, msg, commandLine, originalMsg);

        } catch (err) {
            doLog(err);
            doSendChat(msg.who, err);
        }
    }); // on
on("change:campaign:initiativepage",
    function() {
        if (state.doInitiative == false) return;
        const turnOrder = turnOrderGet();

        if (!hasEndTurnMarker(turnOrder))
            createEndTurnMarker(turnOrder);
    });
on("change:campaign:" + turnOrderString,
    function() {
        if (state.doInitiative == false) return;

        let turnOrder = turnOrderGet();

        if (turnOrder[0] == undefined) return; //If the turn order is empty, return.
        if (turnOrder.length == 2) {
            if (turnOrder.length) { //A manual sort is still needed after everyone has rolled.
                // ReSharper disable once UseOfImplicitGlobalInFunctionScope
                turnOrder = _.sortBy(turnOrder, (t) => -parseInt(t.pr));
            }
            turnOrderSet(turnOrder);
        }

        if (turnOrder[0].id == "-1" && turnOrder[0].pr == "-99" && turnOrder[0].custom == "End Turn" && turnOrder.length > 2)
            endTurn(turnOrder, null);
        else if (turnOrder[0].id != "-1") 
            newTurn(turnOrder);
    });
on("change:campaign:playerpageid", 
    function(obj, prev){
    if(state.doStatusSwitch == true) updateStatuses(obj, prev);
});


/**
 * The core functionality of the script. Intercepts API messages meant for it, extracts the core of the command, and passes it to
 * the appropriate function for handling.
 */
function handleInput(command, msg, commandLine, originalMsg) {

    doLog("handleInput " + command + sep + commandLine + sep );
    doLog("originalMsg " + originalMsg);

    switch (command) {
        case "":
        case "help":
            var outHtml = buildHelp();
            doSendChat(scriptTitle, '/w ' + msg.who + ' ' + outHtml);
            break;
        case cmdUI:
            exDisplayOptions();
            break;
        case cmdJoinBattle:
            exJoinBattle(msg, command);
            break;

        case cmdWitheringDamage:
            exWitheringDamageScript(msg, command);
            break;

        case cmdSpendInit:
            spendInitiativeScript(msg, command);
            break;

        case cmdInitSet:
            exInitiativeSet(msg, command);
            break;

        case cmdAttackTarget:
            exWeaponAttackTargetScript(msg, command);
            break;
        case cmdAttackFromCharacterSheetDex:
            exWeaponAttackScriptCharacter(msg, command, attrDexterity);
            break;

        case cmdAttackFromCharacterSheetInt:
            exWeaponAttackScriptCharacter(msg, command, attrIntelligence);
            break;

        case cmdAttackToken:
            doSendChat(scriptTitle, '/w ' + msg.who + ' deprecated function :' + cmdAttackToken);
            break;

        case cmdRollWitheringDamage:
            exRollDamage(msg, attackTypeWithering, command);
            break;
        case cmdRollDecisiveDamage:
            exRollDamage(msg, attackTypeDecisive, command);
            break;
        case cmdRollWitheringAttack:
            exRollAttack(msg, attackTypeWithering);
            break;
        case cmdRollDecisiveAttack:
            exRollAttack(msg, attackTypeDecisive);
            break;
        case cmdResetInitiative:
            exResetInitiative(msg, command);
            break;

        case cmdEssenceSpendToken:
            exEssenceSpendToken(msg, command);
            break;
        case cmdEssenceSpendCharacter:
            exEssenceSpendCharacter(msg, command);
            break;

        case cmdSkillCheckChar:
            exSkillCheckCharSheet(msg, command);
            break;

        case cmdQCRoll:
            exQCRoll(msg, command);
            break;
        case cmdQCAttack:
            exQCAttack(msg, command);
            break;
        case cmdSMCast:
            exSMCast(msg, command);
            break;
        case cmdSMChange:
            exSMChange(msg, command);
            break;
        case cmdBGStats:
            exBGStats(msg, command);
            break;
        case cmdAddMagnitude:
            exBgAddMagnitude(msg, command);
            break;
        case cmdResolveBGAttack:
            exResolveBGAttack(msg, command);
            break;
        case cmdGrpAddXp:
            exAddXP(msg, command);
            break;
        case cmdGrpSkillCheck:
            exGroupSkillCheck(msg, command);
            break;
        case cmdGrpAwareness:
            exGroupAwareness(msg);
            break;
        case cmdGrpInvestigate:
            exGroupInvestigate(msg);
            break;
        case cmdGrpReadIntention:
            exGroupReadIntention(msg);
            break;
        case cmdGrpCheckMenu:
            exGMMenu(msg);
            break;
        case cmdGrpMaxMotes:
            exGroupMaxMotes(msg);
            break;

        case cmdGrpAddMotes:
            exGroupAddMotes(msg, command);
            break;

        case cmdGrpClearAnima:
            exGroupClearAnima(msg, command);
            break;
        case cmdGrpClearOnslaught:
            exGroupClearOnslaught(msg, command);
            break;
        case cmdGrpClearTurnOrder:
            exGroupClearTurnOrder(msg, command);
            break;
        case cmdSettings:
            exProcessSetting(msg, command);
            break;
        case cmdCombatStart:
            exCombatStart(msg, command);
            break;
        case cmdCombatEnd:
            exCombatEnd(msg, command);
            break;
        case cmdGrpClearCrash:
            exGroupClearCrash(msg, command);
            break;
        case cmdCharacterMenu:
            exCharacterMenu(msg, command);
            break;
        case cmdNaval:
            exNaval(msg, command);
            break;
        case cmdCharacterActions:
            exCharacterActions(msg, command);
            break;
        case cmdQCActions:
            exQCActions(msg, command);
            break;
        case cmdJoinBattleCharacter:
            exJoinBattleCharacter(msg, command);
            break;
        case cmdJoinBattleCharacterStealth:
            exJoinBattleCharacterStealth(msg, command);
            break;
        case cmdSetBattleToken:
            exSetBattleToken(msg, command);
            break;

    // Status Markers
        case cmdStatusMarkersGetFromToken:
            exStatusMarkersGet(msg, command);
            break;

        case cmdSetStatus:
            exSetStatus(msg, command);
            break;

        case cmdStatusMarkersClear:
            exStatusMarkersClear(msg, command);
            break;

        case cmdStatusIncrement:
            exStatusMarkerIncrement(msg, command);
            break;

        case cmdStatusGet:
            exStatusGetValue(msg, command);
            break;

    // TODO: Naval vessel assignments
        case actionNavalAssignVessel:
            exNavalVesselAssign(msg, command);
            break;
        case actionNavalAssignPlayerVessel:
            exNavalVesselAssign(msg, command);
            break;
        case actionNavalClearPlayerVessel:
            exNavalVesselAssign(msg, command);
            break;
        

        case cmdRollDice:
            var slc = commandLine.slice(commandLine.indexOf(cmdRollDice) + cmdRollDice.length);
            var rawCmd = slc.trim();
            var regExp = /^.*\#/;

            if (regExp.test(rawCmd)) {
                let parseCmd = rawCmd.replace('#', diceRollMacro);
                var rollStr = '/roll ' + parseCmd;

                var templateRoll = "&{template:exalted3e_Roll}";
                const player = getPlayerFromId(msg.playerid);
                templateRoll += " {{totalDice=" + rawCmd + "}}";
                templateRoll += " {{character-name=" + msg.who + "}}";
                templateRoll += " {{player-color=" + player.get('color') + "}}";

                performRoll(msg, rollStr, templateRoll);
            }
            break;

    default:
        doNotify('Unknown message command from ' + msg.who + ': ' + originalMsg);

    }
}

//#region PROCESS MESSAGES
function exNavalVesselAssign(msg, command) {
    // TODO naval vessel assign/clear
    doLog("exNavalVesselAssign: " + command);
    const params = getParametersFromCommand(msg, command);
    doLog("params");
    doLog(params);

    let targetTokenId;
    let targetVessel = null;
    if (params.length > 0 && params[0].length > 0) {
        targetTokenId = params[0];
        targetVessel = getCharacterFromTokenId(targetTokenId);
    }

    let selectedCharacter = null;
    if (params.length > 1  && params[1].length > 0) {
        let selectedTokenId = null;
        selectedTokenId = params[1];
        selectedCharacter = getCharacterFromTokenId(selectedTokenId);
    }

    if (targetVessel != null) {
        const isNavalVessel = parseInt(getAttribute(targetVessel.id, "navalVessel")) || 0;
        if (isNavalVessel === 0) {
            const notifyMsg = getNameFrom(targetVessel) + " is not a naval vessel";
            doNotify(notifyMsg);
            return;
        }
    }

    switch (command) {
    case actionNavalAssignVessel:
            {
                if (selectedCharacter == null || !selectedCharacter) return;
                if (targetVessel == null || !targetVessel) {
                    doLog("Attempting to assign player vessel, but assigned naval vessel not found;");
                    return;
                }
                setAttribute(attrNavalVesselId, selectedCharacter.id, targetVessel.id);
                setAttribute(attrNavalVesselName, selectedCharacter.id, getNameFrom(targetVessel));
                const notifyMsg = getNameFrom(selectedCharacter) + " assigned to naval vessel: " + getNameFrom(targetVessel);
                doNotify(notifyMsg);
            }
        break;
    case actionNavalAssignPlayerVessel:
        {
            if (targetVessel == null || !targetVessel) {
                doLog("Attempting to assign player vessel, but assigned naval vessel not found;");
                return;
            }

// ReSharper disable once UseOfImplicitGlobalInFunctionScope
            _.each(playerCharacterIdsArray,
                function(pcId) {
                    const character = getCharacterFromId(pcId);
                    setAttribute(attrNavalVesselId, pcId, targetVessel.id);
                    setAttribute(attrNavalVesselName, pcId, getNameFrom(targetVessel));
                    const notifyMsg = getNameFrom(character) + " assigned to naval vessel: " + getNameFrom(targetVessel);
                    doNotify(notifyMsg);
                });
        }
        break;
    case actionNavalClearPlayerVessel:
        {
            // ReSharper disable once UseOfImplicitGlobalInFunctionScope
            _.each(playerCharacterIdsArray,
                function(pcId) {
                    const character = getCharacterFromId(pcId);
                    setAttribute(attrNavalVesselId, pcId, "");
                    setAttribute(attrNavalVesselName, pcId, "");
                    const notifyMsg = getNameFrom(character) + " naval vessel cleared";
                    doNotify(notifyMsg);
                });
        }
        break;
    default:
        doNotify("Unknown assign vessel command: " + command);
    }
}
function exCharacterMenu (msg, command) {
    doLog("exCharacterMenu");
    doLog(msg);
    doLog(command);
    generateCharacterActionMenu(msg, command);
 }
function exCharacterActions (msg, command) {
    const params = getParametersFromCommand(msg, command);

    const abilityCommand = params[0];
    const characterId = params[1];
    const dicePoolModifier = parseInt(params[2]) || 0;

    doCharacterAction(msg, abilityCommand, characterId, dicePoolModifier, params);
}
function exDisplayOptions() {
    doDisplayOptions();
}
function exProcessSetting (msg, command) {
    const params = getParametersFromCommand(msg, command);
    doLog(params);
    const toggleParam = params[0];
    switch (toggleParam) {
    case settingAnima:
        if (state.doAnima == false) state.doAnima = true;
        else state.doAnima = false;
        doNotify("Anima Banner Tracker", state.doAnima);
        break;
    case settingInitiative:
        if (state.doInitiative == false) state.doInitiative = true;
        else state.doInitiative = false;
        doNotify("Initiative Tracker", state.doInitiative);
        break;
    case settingMigration:
        if (state.doStatusSwitch == false) state.doStatusSwitch = true;
        else state.doStatusSwitch = false;
        doNotify("Status Migration", state.doStatusSwitch);
        break;
    case settingWoundPenalty:
        if (state.doWoundtracker == false) state.doWoundtracker = true;
        else state.doWoundtracker = false;
        doNotify("Wound Tracker", state.doWoundtracker);
        break;
    case settingNotifications:
        if (state.doNotifications == false) state.doNotifications = true;
        else state.doNotifications = false;
        doNotify("Notifications", state.doNotifications);
        break;
    case settingDirectAnimaIncrease:
        if (state.doDirectAnimaIncrease == false) state.doDirectAnimaIncrease = true;
        else state.doDirectAnimaIncrease = false;
        doNotify("Direct Anima Increase", state.doDirectAnimaIncrease);
        break;
    case settingDebugMode:
        if (state.debugMode == false) state.debugMode = true;
        else state.debugMode = false;
        doNotify("Debug Mode", state.debugMode);
        break;
    case settingMotesIncrease:
            if (state.doAddMotesEndTurn == false) state.doAddMotesEndTurn = true;
            else state.doAddMotesEndTurn = false;
            doNotify("End turn motes", state.doAddMotesEndTurn);
            break;
    case settingPlayerRegen:
        var setPlayerValue = parseInt(params[1]) || 5;
        state.playerMotesRegen = setPlayerValue;
        doNotify("PlayerRegen:", state.playerMotesRegen);
        break;
    case settingNpcRegen:
        var setNpcValue = parseInt(params[1]) || 5;
        state.npcMotesRegen = setNpcValue;
        doNotify("NPC Regen:", state.npcMotesRegen);
        break;
    }
    
    doSendChat(scriptTitle, "!exr UI");
}
function exGroupClearTurnOrder () {
    turnOrderReset();
}
function exGroupClearAnima() {
    groupClearAnima();
}
function exGroupClearCrash() {
    groupClearCrash();
}
function exGroupClearOnslaught() {
    groupClearOnslaught();
}
function exGroupMaxMotes(msg) {
    groupMaxMotes();
    doNotify("motes maxed out by " + msg.who);
}
function exGroupAddMotes(msg, command) {
    const params = getParametersFromCommand(msg, command);

    const addAmount = parseInt(params[0]) || 0;
    groupAddMotes(addAmount);
    doNotify("added " + addAmount  + " motes");
};
function exGMMenu(msg) {
    const buttonTemplate = generateGMActionMenu();
    doSendChat(msg.who, "/w gm " + buttonTemplate);
    return;
}

// JOIN BATTLE -> select token -> join from token bar
function exJoinBattle(msg, command) {
    // Get and/or create variables...
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;

    const who = msg.who;
    const selectedTokenId = params[0];
    const bonusDice = parseInt(params[1]) || 0;
    const addSuccesses = parseInt(params[2]) || 0;

    if (selectedTokenId == null ) {
        doSendChat(who, 'selected token Id is empty');
        return;
    }

    const selectedToken = getTokenFromId(selectedTokenId);
    if (selectedToken == null || typeof selectedToken === 'undefined') {
        doSendChat(who, 'Target token not found');
        return;
    }
    const characterId = selectedToken.get('represents');

    doJoinBattle(msg, characterId, bonusDice, selectedToken, addSuccesses, false);
};
function exJoinBattleCharacter(msg, command) {
    // Get and/or create variables...
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;

    const who = msg.who;
    const characterId = params[0];
    const bonusDice = parseInt(params[1]) || 0;
    const addSuccesses = parseInt(params[2]) || 0;

    if (characterId == null ) {
        doSendChat(who, 'characterId is empty');
        return;
    }

    const selectedToken = getTokenFromCharacterId(characterId);
    if (selectedToken == null || typeof selectedToken === 'undefined') {
        doSendChat(who, 'Target token not found');
        return;
    }

    doJoinBattle(msg, characterId, bonusDice, selectedToken, addSuccesses, false);
}
function exJoinBattleCharacterStealth(msg, command) {
    // Get and/or create variables...
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;

    const who = msg.who;
    const characterId = params[0];
    const bonusDice = parseInt(params[1]) || 0;
    const addSuccesses = parseInt(params[2]) || 0;

    if (characterId == null ) {
        doSendChat(who, 'characterId is empty');
        return;
    }

    const selectedToken = getTokenFromCharacterId(characterId);
    if (selectedToken == null || typeof selectedToken === 'undefined') {
        doSendChat(who, 'Target token not found');
        return;
    }

    doJoinBattle(msg, characterId, bonusDice, selectedToken, addSuccesses, true);
}
function exResolveBGAttack(msg, command) {

    const params = getParametersFromCommand(msg, command);
    if (params == null) return;

    const who = msg.who;

    const selectedTokenId = params[0];
    const targetTokenId = params[1];
    const successes = parseInt(params[2]) || 0;
    const rawDamage = parseInt(params[3]) || 0;
    const attackName = params[4];

    doAttackCalculation(selectedTokenId, targetTokenId, successes, rawDamage, attackName, who);
};
function exBgAddMagnitude(msg, command) {
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;
    const who = msg.who;
    const targetToken = getTokenFromId(params[0]);
    var addMagnitude = parseInt(params[1]) || 0;

    if (targetToken == null) {
        doSendChat(who, 'Target token not found');
        return;
    }

    const isTargetBattleGroup = parseInt(getCharacterAttributeFromTokenId(targetToken.id, attrBattleGroup)) || 0;
    if (isTargetBattleGroup === 0) {
        getStats(targetToken, who);
        return;
    }

    if (addMagnitude == 0) // 5
    {
        doSendChat(who, 'Magnitude to add is zero');
        return;
    }

    var targetBattlegroupSize = parseInt(targetToken.get(bar2Value)) || 0; // 3
    var targetBattlegroupMagnitude = parseInt(targetToken.get(bar3Value)) || 0; //7
    const targetBattlegroupHealth =
        parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-health-levels')) || 0; //7

    var loopCrash = 30;

    if (addMagnitude > 0) {
        while (addMagnitude != 0 && loopCrash > 0) {
            const currentSizeLimit = (targetBattlegroupHealth + targetBattlegroupSize);
            if (targetBattlegroupMagnitude + addMagnitude > currentSizeLimit) {

                // 7+5 => 10 so magnitude = 12, 
                // deduct currentSizeLimit (10), so magnitude = 2
                targetBattlegroupMagnitude = (targetBattlegroupMagnitude + addMagnitude) - currentSizeLimit;
                targetBattlegroupSize++; //size is now 11
                // add amount = current magnitude 
                addMagnitude = targetBattlegroupMagnitude;
            } else {
                targetBattlegroupMagnitude += addMagnitude;
                addMagnitude = 0;
            }
            loopCrash--;
        }
    }

    targetToken.set(bar2Value, targetBattlegroupSize);
    targetToken.set(bar3Value, targetBattlegroupMagnitude);
    getBgStats(targetToken, who);
};



function exBGStats(msg, command) {
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;

    const who = msg.who;
    const targetToken = getTokenFromId(params[0]);
    if (targetToken == null) {
        doSendChat(who, 'Target token not found');
        return;
    }

    getStats(targetToken, who);
};
// ROLL FROM QC sheet
function exQCRoll(msg, command) {
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;
    const who = msg.who;

    const characterId = params[0];
    const character = getCharacterFromId(characterId);

    const diceModifier = parseInt(params[1]) || 0;
    const information = params[2];
    const baseDice = parseInt(params[3]) || 0;
    const details = params[4] || "";

    const player = getPlayerFromId(msg.playerid);

    if (character === null || typeof character === 'undefined') {
        doSendChat(who, 'character: ' + characterId + ' not found');
        return;
    }

    if (player == null || typeof player === 'undefined') {
        doSendChat(who, 'player: ' + msg.playerid + ' not found');
        return;
    }
    const  woundPenalty = parseInt(getTotalDicePoolModifiers(null, characterId)) || 0;
    
    const dicePoolTotal = diceModifier + baseDice + woundPenalty;

    const rollStr = '/roll ' + dicePoolTotal + diceRollMacro;

    var templateRoll = "&{template:exalted3e_Roll}";
    templateRoll += " {{character-name=" + getNameFrom(character) + "}}";
    templateRoll += " {{player-color=" + player.get('color') + "}}";
    templateRoll += " {{totalDice=" + dicePoolTotal + "}}";
    templateRoll += " {{dice-modifier=" + diceModifier + "}}";
    templateRoll += " {{details=" + details + "}}";
    templateRoll += " {{information=" + information + "}}";

    templateRoll += " {{total-penalty= " + woundPenalty + "}}";
    templateRoll += " {{wound-penalty=" + getModifiersWoundPenalty(null, characterId) + "}}";
    //templateRoll += " {{fatigue-penalty=" + getModifiersFatiguePenalty(null) + "}}";
    //templateRoll += " {{misc-penalty=" + getModifiersPermMiscPenalty(null) + "}}";
    //templateRoll += " {{miscTemp-penalty=" + getModifiersTempMiscPenalty(null) + "}}";

    performQCRoll(msg, rollStr, templateRoll, characterId, null, null, information, null, null, null);
};
function exQCAttack(msg, command) {
    doLog("exQCAttack");
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;
    const who = msg.who;

    const characterId = params[0];
    const character = getCharacterFromId(characterId);

    const diceModifier = parseInt(params[1]) || 0;
    const information = params[2] || '';
    const baseDice = parseInt(params[3]) || 0;
    var details = params[4] || "";
    const targetId = params[5] || '';
    const selectedTokenId = params[6] || "";

    var attackName = "Attack";
    const  isAttackTypeDecisive = information.startsWith(attackTypeDecisive);
    const  isAttackTypeWithering = information.startsWith(attackTypeWithering);

    if (isAttackTypeWithering == 1) attackName = attackTypeWithering;
    if (isAttackTypeDecisive == 1) attackName = attackTypeDecisive;

    const player = getPlayerFromId(msg.playerid);

    if (character === null || typeof character === 'undefined') {
        doSendChat(who, 'character: ' + characterId + ' not found');
        return;
    }

    if (player == null || typeof player === 'undefined') {
        doSendChat(who, 'player: ' + msg.playerid + ' not found');
        return;
    }
    doLog("exQCAttack A");
    const isSelectedBattleGroup = parseInt(getAttribute(characterId, attrBattleGroup)) || 0;
    const characterBattleTokenId = getAttribute(characterId, battleTokenId);
    const  woundPenalty = parseInt(getTotalDicePoolModifiers(characterBattleTokenId, characterId)) || 0;
    doLog("exQCAttack B Total Penalty");
    doLog(woundPenalty);
    // ~~~~ 
    const  selectedToken = getTokenFromId(selectedTokenId) || '';
    let bgSize =0;
    let bgMight =0;
    if (isSelectedBattleGroup && selectedToken && selectedToken != null) {
        bgSize = parseInt(selectedToken.get(bar2Value)) || 0;
    }

   // TODO: THIS BIT

    const  bgDrill = getAttribute(characterId, 'battlegroup-drill');
    var  qcParry = parseInt(getAttribute(characterId, 'qc-parry')) || 0;
    var  qcEvasion = parseInt(getAttribute(characterId, 'qc-evasion')) || 0;
    var  qcSoak = parseInt(getAttribute(characterId, 'qc-soak')) || 0;
    doLog("exQCAttack Ab");
    doLog(targetId);
    const  targetToken = getTokenFromId(targetId) || '';

    var targetName = '';
    var isTargetBattleGroup = 0;
    var targetBattleGroupSize = 0;
    var miscPenalty = 0;


    var battlegroupDrillOffense = 0;
    var battlegroupMightOffense = 0;

    doLog("exQCAttack Aba");
    if (targetToken != '') {
        targetName = getNameFrom(targetToken) || '';
        isTargetBattleGroup = parseInt(getCharacterAttributeFromTokenId(targetToken.id, attrBattleGroup)) || 0;
        targetBattleGroupSize = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-size')) || 0;
        miscPenalty = parseInt(statusGetValue(targetToken, statusTempMiscPenalty)) || 0;
    }
    doLog("exQCAttack B");
    var dicePoolTotal = diceModifier + baseDice + woundPenalty + bgSize;

    if (isSelectedBattleGroup == 0) getStats(targetToken, msg.who);

    if (isSelectedBattleGroup == 1) {
        if (bgDrill == "Elite") {
            qcSoak = qcSoak + 2;
            qcEvasion = qcEvasion + 2;
            qcParry = qcParry + 2;
        }
        if (bgDrill == "Average") {
            qcSoak = qcSoak + 1;
            qcEvasion = qcEvasion + 1;
            qcParry = qcParry + 1;
        }

        switch (bgMight) {
            case 3:
                battlegroupDrillOffense = 3;
                dicePoolTotal = dicePoolTotal + 3;
                qcSoak = qcSoak + 2;
                qcEvasion = qcEvasion + 2;
                qcParry = qcParry + 2;
                break;
            case 2:
                battlegroupDrillOffense = 2;
                dicePoolTotal = dicePoolTotal + 2;
                qcSoak = qcSoak + 1;
                qcEvasion = qcEvasion + 1;
                qcParry = qcParry + 1;
                break;
            case 1:
                battlegroupDrillOffense = 1;
                dicePoolTotal = dicePoolTotal + 1;
                qcSoak = qcSoak + 1;
                qcEvasion = qcEvasion + 1;
                qcParry = qcParry + 1;
                break;
            case 0:
                break;
            default:
        }

        qcSoak = qcSoak + bgSize;
        qcParry = qcParry + bgSize;
        qcEvasion = qcEvasion + bgSize;
        // +@{ } + @{battlegroup-might-offense}

        battlegroupDrillOffense = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-drill-offense')) || 0;
        battlegroupMightOffense = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-might-offense')) || 0;

        doLog("exQCAttack: battle group might offence bonus: " + battlegroupMightOffense);
        doLog("exQCAttack: battle group drill offence bonus: " + battlegroupDrillOffense);
        doLog("exQCAttack: battle group size offence bonus: ");

        dicePoolTotal += battlegroupMightOffense + battlegroupDrillOffense + bgSize;
    }
    doLog("exQCAttack C");
    var rawDamage = 0;
    if (details != "") {
        doLog("details");
        doLog(details);
        rawDamage = eval(details) || 0;
        var bgStyle = "style='color:red;font-weight:bold;font-variant: small-caps;font-size: 20px;'";
        details = "<span class='attr' " + bgStyle + ">Raw Damage~: [" + rawDamage + "] Dice</span><br/>";
    }

    doLog("exQCAttack D");
    var rollStr = '/roll ' + dicePoolTotal + diceRollMacro;

    var templateRoll = "&{template:exalted3e_Roll}";
    templateRoll += " {{character-name=" + getNameFrom(character) + "}}";

    if (targetName != '') {
        doLog("exQCAttack Da");
        templateRoll += " {{targetName=" + targetName + "}}";
        var onslaughtProtect = getTokenOnslaughtProtect(targetToken);
        var onslaughtStatus = parseInt(statusGetValue(targetToken, statusOnslaught)) || 0;

        var onslaughtAdd = 0;
        if (isSelectedBattleGroup == 1 && bgSize > 0)
            onslaughtAdd = bgSize;
        else if (isTargetBattleGroup == 1 && isSelectedBattleGroup == 1 && (targetBattleGroupSize < bgSize - 2))
            onslaughtAdd = bgSize - targetBattleGroupSize;
        else
            onslaughtAdd = 1;

        if (onslaughtProtect >= onslaughtAdd)
            onslaughtAdd = 0;
        else
            onslaughtAdd = onslaughtAdd - onslaughtProtect;

        onslaughtStatus = onslaughtStatus + onslaughtAdd;

        if (onslaughtAdd > 0 && (isTargetBattleGroup == 0 || (isTargetBattleGroup == 1 && isSelectedBattleGroup == 1))) {
            doNotify("Onslaught value on " + targetToken.get('name') + ' is now ' + onslaughtStatus);
            statusSetValue(targetToken, statusOnslaught, onslaughtStatus);
        }

        if (isSelectedBattleGroup == 1) getStats(targetToken, msg.who);
        doLog("exQCAttack Db");
    }
    doLog("exQCAttack E");
    templateRoll += " {{player-color=" + player.get('color') + "}}";
    templateRoll += " {{totalDice=" + dicePoolTotal + "}}";
    templateRoll += " {{dice-modifier=" + diceModifier + "}}";
    templateRoll += " {{details=" + details + "}}";
    templateRoll += " {{information=" + information + "}}";

    templateRoll += " {{total-penalty= " + woundPenalty + "}}";
    templateRoll += " {{wound-penalty=" + getModifiersWoundPenalty(selectedTokenId, characterId) + "}}";
    templateRoll += " {{fatigue-penalty=" + getModifiersFatiguePenalty(selectedTokenId) + "}}";
    templateRoll += " {{misc-penalty=" + getModifiersPermMiscPenalty(selectedTokenId) + "}}";
    templateRoll += " {{miscTemp-penalty=" + getModifiersTempMiscPenalty(selectedTokenId) + "}}";

    if (battlegroupMightOffense > 0)
        templateRoll += " {{bgMight=" + battlegroupMightOffense + "}}";

    if (battlegroupDrillOffense > 0)
        templateRoll += " {{bgDrill=" + battlegroupDrillOffense + "}}";

    if (bgSize > 0)
        templateRoll += " {{bgSize=" + bgSize + "}}";

    doLog("exQCAttack F");
    performQCRoll(msg, rollStr, templateRoll, characterId, targetToken, rawDamage, information, attackName, characterBattleTokenId, selectedTokenId);
    doLog("exQCAttack G");
}
// ROLL ability from non-qc sheet
function exSkillCheckCharSheet(msg, command) {
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;
    const who = msg.who;

    const characterId = params[0];
    const character = getCharacterFromId(characterId);

    if (character === null || typeof character === 'undefined') {
        doSendChat(who, 'character: ' + characterId + ' not found');
        return;
    }

    const whisperMode = msg.content.indexOf("/w");
    const player = getPlayerFromId(msg.playerid);

    if (player == null) {
        doSendChat(who, 'player: ' + msg.playerid + ' not found');
        return;
    }

    const abilityName = params[1];
    const attributeName = params[2];
    const diceModifier = parseInt(params[3]) || 0;
    var abilityFullName = params[4] || "";

    const mobilityPenalty = parseInt(getAttribute(characterId, attrArmourMobility)) || 0;

    if (abilityFullName == "")
        abilityFullName = abilityName;

    skillCheck(msg, player, character, characterId, attributeName, abilityName, abilityFullName, diceModifier, whisperMode, mobilityPenalty, null);
};
// W or D button on non qc weapons list on sheet
function exWeaponAttackScriptCharacter(msg, command, attributeName) {

    doLog("exWeaponAttackScriptCharacter");

    const params = getParametersFromCommand(msg, command);
    if (params == null) return;
    const who = msg.who;
    const characterId = params[0];
    const character = getCharacterFromId(characterId);

    if (character === null || typeof character === 'undefined') {
        doSendChat(who, 'character: ' + characterId + ' not found');
        return;
    }

    if (params.length != 13) {
        doSendChat(who, 'command: ' + command + ' requires 13 parameters. got: '  + params.length);
        return;
    }

    const characterName = getNameFrom(character);
    const bonusDice = parseInt(params[1]) || 0;
    const attackType = params[2];
    const weaponAbility = params[3];
    const weaponName = params[4];

    const weaponAccuracy = parseInt(params[5]) || 0;
    const weaponDamage = parseInt(params[6]) || 0;

    //const weaponParry = parseInt(params[7]) || 0;
    //const weaponEvasion = parseInt(params[8]) || 0;
    const weaponOverwhelm = parseInt(params[9]) || 0;
    const weaponTags = params[10] || '';
    const targetId = params[11] || '';

    doLog("params");
    doLog(params);

    doLog("targetId");
    doLog(targetId);

    const targetToken = getTokenFromId(targetId) || '';

    doLog("targetToken");
    doLog(targetToken);

    var targetName = '';
    var isTargetBattleGroup = 0;
    var targetBattleGroupSize = 0;
    if (targetToken != null && targetToken) {
        targetName = getNameFrom(targetToken) || '';
        isTargetBattleGroup = parseInt(getCharacterAttributeFromTokenId(targetToken.id, attrBattleGroup)) || 0;
        targetBattleGroupSize = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-size')) || 0;
    }


    const selectedDexterity = parseInt(getAttribute(characterId, attributeName)) || 0;
    const selectedStrength = parseInt(getAttribute(characterId, 'strength')) || 0;
    const selectedWeaponAbility = parseInt(getAttribute(characterId, weaponAbility)) || 0;

    let selectedTokenId;
    const selToken = getTokenFromCharacterId(characterId);
    
    if (selToken != null)
        selectedTokenId = selToken.id;
    else
        selectedTokenId = getAttribute(characterId, battleTokenId);

    const selectedDicePoolPenalty = getTotalDicePoolModifiers(selectedTokenId, characterId);

    const selectedToken = getTokenFromId(selectedTokenId);
    const currentAimLevel = getTokenAimLevel(selectedToken);
    if (currentAimLevel > 0)
        setTokenAimLevel(selectedToken, 0);

    const isSelectedBattleGroup = parseInt(getAttribute(characterId, attrBattleGroup)) || 0;
    const selectedBattleGroupSize = parseInt(getAttribute(characterId,'battlegroup-size')) || 0;
    const onslaughtProtect = getTokenOnslaughtProtect(targetToken);
    const player = getPlayerFromId(msg.playerid);

    getStats(targetToken, msg.who);

    var attackDiceTotal = 0;
    if (attackType == attackTypeWithering) {
        attackDiceTotal = selectedDexterity + selectedWeaponAbility + selectedDicePoolPenalty + bonusDice + weaponAccuracy;
    } else if (attackType == attackTypeDecisive) {
        attackDiceTotal = selectedDexterity + selectedWeaponAbility + selectedDicePoolPenalty + bonusDice;
    }
    const rollStr = '/roll ' + attackDiceTotal + diceRollMacro;

    var templateRoll = "&{template:exalted3e_Roll}";
    if (attackType == attackTypeWithering) {
        templateRoll += " {{attackRollW=1}}";
        templateRoll += " {{weapon-damage=" + weaponDamage + "}}";
        templateRoll += " {{weapon-overwhelm=" + weaponOverwhelm + "}}";
    } else if (attackType == attackTypeDecisive) {
        templateRoll += " {{attackRollD=1}}";
    }



    templateRoll += " {{character-name=" + characterName + "}}";
    if (targetName != '') {
        templateRoll += " {{targetName=" + targetName + "}}";

        var onslaughtStatus = parseInt(statusGetValue(targetToken, statusOnslaught)) || 0;

        var onslaughtAdd = 0;
        if (isSelectedBattleGroup == 1 && selectedBattleGroupSize > 0)
            onslaughtAdd = selectedBattleGroupSize;
        else if (isTargetBattleGroup == 1 && isSelectedBattleGroup == 1 && (targetBattleGroupSize < selectedBattleGroupSize - 2))
            onslaughtAdd = selectedBattleGroupSize - targetBattleGroupSize;
        else
            onslaughtAdd = 1;

        if (onslaughtProtect >= onslaughtAdd)
            onslaughtAdd = 0;
        else
            onslaughtAdd = onslaughtAdd - onslaughtProtect;

        onslaughtStatus = onslaughtStatus + onslaughtAdd;

        if (onslaughtAdd > 0 && (isTargetBattleGroup == 0 || (isTargetBattleGroup == 1 && isSelectedBattleGroup == 1))) {
            doSendChat(who, "settings onslaught value on " + targetToken.get('name') + ' to ' + onslaughtStatus);
            statusSetValue(targetToken, statusOnslaught, onslaughtStatus);
        }
    }

    


    templateRoll += " {{attribute-name=" + attributeName + "}} {{attribute-value=" + selectedDexterity + "}}";
    templateRoll += " {{skill-name=" + weaponAbility + "}} {{skill-value=" + selectedWeaponAbility + "}}";
    templateRoll += " {{dice-modifier=" + bonusDice + "}}";

    templateRoll += " {{total-penalty=" + selectedDicePoolPenalty + "}}";
    templateRoll += " {{wound-penalty=" + getModifiersWoundPenalty(selectedTokenId, characterId) + "}}";
    templateRoll += " {{fatigue-penalty=" + getModifiersFatiguePenalty(selectedTokenId) + "}}";
    templateRoll += " {{misc-penalty=" + getModifiersPermMiscPenalty(selectedTokenId) + "}}";
    templateRoll += " {{miscTemp-penalty=" + getModifiersTempMiscPenalty(selectedTokenId) + "}}";

    templateRoll += " {{weapon-accuracy=" + weaponAccuracy + "}}";
    templateRoll += " {{weapon-name=" + weaponName + "}}";
    templateRoll += " {{player-color=" + player.get('color') + "}}";
    templateRoll += " {{weapon-tags=" + weaponTags + "}}";
    templateRoll += " {{weapon-raw-damage=" + (weaponDamage + selectedStrength) + "}}";
    templateRoll += " {{totalDice=" + attackDiceTotal + "}}";
    templateRoll += " {{buttons=" + generateButtonRow(selectedToken, targetToken, characterId, attackType) + "}}";

    performRoll(msg, rollStr, templateRoll);
};
// Obsolete -> attacks a character from another character
function exWeaponAttackTargetScript(msg, command) {
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;
    const who = msg.who;

    const selectedTokenId = params[0];
    const selectedToken = getTokenFromId(selectedTokenId);

    const targetTokenId = params[1];
    const targetToken =getTokenFromId(targetTokenId);

    if (selectedToken == null || typeof selectedToken === 'undefined') {
        doSendChat(who, 'exWeaponAttackTargetScript selected token not found');
        return;
    }
    if (targetToken == null || typeof targetToken === 'undefined') {
        doSendChat(who, 'Target token not found');
        return;
    }

    const bonusDice = parseInt(params[2]) || 0;
    const attackType = params[3];
    const weaponAbility = params[4];

    if (weaponAbility == null || weaponAbility == "") {
        doSendChat(msg.who, "no weapon ability specified");
        return;
    }

    const weaponName = params[5];
    const weaponAccuracy = parseInt(params[6]) || 0;
    const weaponDamage = parseInt(params[7]) || 0;
    const weaponDefence = parseInt(params[8]) || 0;
    const weaponOverwhelm = parseInt(params[9]) || 0;
    const weaponTags = params[10] || '';

    const selectedDexterity = parseInt(getCharacterAttributeFromTokenId(selectedTokenId, 'dexterity')) || 0;
    const selectedWeaponAbility = parseInt(getCharacterAttributeFromTokenId(selectedTokenId, weaponAbility)) || 0;
    const selectedWoundPenalty = parseInt(getTotalDicePoolModifiers(selectedTokenId, null)) || 0;
    
    const selectedStrength = parseInt(getCharacterAttributeFromTokenId(selectedTokenId, 'strength')) || 0;

    const attackDiceTotal = selectedDexterity + selectedWeaponAbility + selectedWoundPenalty + bonusDice + weaponAccuracy;
    const rollStr = '/roll ' + attackDiceTotal + diceRollMacro;

    
    const targetWoundPenalty = parseInt(getTotalDicePoolModifiers(targetTokenId, null)) || 0;
    const targetDodge = parseInt(getCharacterAttributeFromTokenId(targetTokenId, 'dodge')) || 0;
    const targetDexterity = parseInt(getCharacterAttributeFromTokenId(targetTokenId, 'dexterity')) || 0;
    const targetArmourMobility = parseInt(getCharacterAttributeFromTokenId(targetTokenId, attrArmourMobility)) || 0;

    const targetParry = parseInt(getCharacterAttributeFromTokenId(targetTokenId, 'parry')) || 0;
    var targetEvasion = Math.ceil((targetDexterity + targetDodge) / 2) +
        weaponDefence -
        Math.abs(targetArmourMobility) -
        Math.abs(targetWoundPenalty);

    var defence = "";
    var defenceValue = 0;
    if (targetParry > targetEvasion) {
        defence = "parry";
        defenceValue = targetParry;
    } else {
        defence = "evasion";
        defenceValue = targetEvasion;
    }
    
    const player = getPlayerFromId(msg.playerid);
    
    //const selectedCharacterId = selectedToken.get('represents');
    const selectedCharacterName = getNameFrom(selectedToken);
//    const targetCharacterId = targetToken.get("represents");
//    const targetCharacter = getCharacterFromId(targetCharacterId);
    const targetCharacterName = getNameFrom(targetToken);

    var templateRoll = "&{template:exalted3e_Roll}";
    if (attackType == attackTypeWithering) {
        templateRoll += " {{attackRollW=1}}";
        templateRoll += " {{weapon-damage=" + weaponDamage + "}}";
        templateRoll += " {{weapon-overwhelm=" + weaponOverwhelm + "}}";
    } else if (attackType == attackTypeDecisive) {
        templateRoll += " {{attackRollD=1}}";
    }
   
    templateRoll += " {{character-name=" + selectedCharacterName + "}}";
    templateRoll += " {{attribute-name=Dex}} {{attribute-value=" + selectedDexterity + "}}";
    templateRoll += " {{skill-name=" + weaponAbility + "}} {{skill-value=" + selectedWeaponAbility + "}}";
    templateRoll += " {{dice-modifier=" + bonusDice + "}}";

    templateRoll += " {{total-penalty=" + selectedWoundPenalty + "}}";
    templateRoll += " {{wound-penalty=" + getModifiersWoundPenalty(selectedTokenId, null) + "}}";
    templateRoll += " {{fatigue-penalty=" + getModifiersFatiguePenalty(selectedTokenId) + "}}";
    templateRoll += " {{misc-penalty=" + getModifiersPermMiscPenalty(selectedTokenId) + "}}";
    templateRoll += " {{miscTemp-penalty=" + getModifiersTempMiscPenalty(selectedTokenId) + "}}";

    templateRoll += " {{weapon-accuracy=" + weaponAccuracy + "}}";
    templateRoll += " {{weapon-name=" + weaponName + "}}";
    templateRoll += " {{player-color=" + player.get('color') + "}}";
    templateRoll += " {{weapon-tags=" + weaponTags + "}}";
    templateRoll += " {{weapon-raw-damage=" + (weaponDamage + selectedStrength) + "}}";
    templateRoll += " {{totalDice=" + attackDiceTotal + "}}";

    var details = selectedCharacterName +
        " rolls " + AddStyleSpan(attackDiceTotal) + " dice for attack and needs to beat " + targetCharacterName +
        "'s " +
        defence +
        " of " +
        AddStyleSpan(defenceValue);

    performAttackRoll(msg,
        rollStr,
        selectedToken,
        targetToken,
        attackDiceTotal,
        defence,
        defenceValue,
        weaponName,
        weaponDamage,
        weaponOverwhelm,
        details,
        templateRoll,
        attackType);
}; //exWeaponAttackScript
// add or lose initiative
function spendInitiativeScript(msg, command) {
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;

    const who = msg.who;
    const selectedTokenId = params[0];
    const selectedToken = getTokenFromId(selectedTokenId);

    if (selectedToken == null) {
        doSendChat(who, 'spendInitiativeScript selected token not found');
        return;
    }

    let alterValue = parseInt(params[1]) || 0;
    if (alterValue == 0) return;
    alterValue = alterValue * -1;

    const tokenBarNumber = 1;

    const currentValueSelected = parseInt(selectedToken.get(bar1Value)) || 0;
    const setSelectedValue = currentValueSelected + alterValue;
    var details = "";
    if (currentValueSelected >= 0 && setSelectedValue < 0) {
        tokenCrashSet(selectedToken, 3);
        details = "<span style='" +
            MinusStyle +
            "'>" +
            "CRASHES</span> by spending <span style='" +
            MinusStyle +
            "'>" +
            alterValue +
            "</span> " +
            BarNames[tokenBarNumber - 1] +
            "!<br/>Does someone get to claim the " +
            AddStyleSpan("+5") +
            " bonus?";
    } else if (currentValueSelected < setSelectedValue) {
        details = " gains " +
            AddStyleSpan(alterValue) +
            " " +
            BarNames[tokenBarNumber - 1] +
            " and now has " +
            AddStyleSpan(setSelectedValue);
    } else if (currentValueSelected > setSelectedValue) {
        details = " loses <span style='" +
            MinusStyle +
            "'>" +
            alterValue +
            "</span> " +
            BarNames[tokenBarNumber - 1] +
            " and now has <span style='" +
            MinusStyle +
            "'>" +
            setSelectedValue +
            "</span>";
    }

    var templateRoll = "&{template:exalted3e_Roll}";
    templateRoll += " {{information=Initiative Change}}";
    templateRoll += " {{character-name=" + getNameFrom(selectedToken) + "}}";
    templateRoll += " {{details=" + details + "}}";
    doSendChat(who, templateRoll);

    selectedToken.set("bar" + tokenBarNumber + "_value", setSelectedValue);
    setInitiativeAndTurnOrder(selectedTokenId, setSelectedValue);
}; //exSimpleAttackScript
function exWitheringDamageScript(msg, command) {
// GET PARAMETERS
// #######
//cmdWitheringDamage
    // get [SelectedToken] param 0
    // get [TargetToken] param 1
    // get [witheringDamageDice] param 2
    // get [witheringAutomaticSuccesses] param3
    // get [diceCommand] param #

    const params = getParametersFromCommand(msg, command);
    if (params == null) return;

    const selectedTokenId = params[0];
    const selectedToken = getTokenFromId(selectedTokenId);

    const targetTokenId = params[1];
    const targetToken = getTokenFromId(targetTokenId);

    if (selectedToken == null || typeof selectedToken === 'undefined') {
        doSendChat(msg.who, 'exWitheringDamageScript selected token not found');
        return;
    }
    if (targetToken == null || typeof targetToken === 'undefined') {
        doSendChat(msg.who, 'Target token not found');
        return;
    }

    //getStats(TargetToken, msg.who);
    const witheringDamageDice = parseInt(params[2]) || 0;
    const witheringAutomaticSuccesses = parseInt(params[3]) || 0;
    const diceCommand = params[4] || '';

// GET VALUES
// #######
    // get [isSelectedBattlegroup]
    // get [isTargetBattlegroup]


    let targetName = getNameFrom(targetToken);
    let selectedName = getNameFrom(selectedToken);

    const isSelectedBattleGroup = parseInt(getCharacterAttributeFromTokenId(selectedToken.id, attrBattleGroup)) || 0;
    const isTargetBattleGroup = parseInt(getCharacterAttributeFromTokenId(targetToken.id, attrBattleGroup)) || 0;
    const isTargetBattleGroupSwarm = parseInt(getCharacterAttributeFromTokenId(targetToken.id, attrBattleGroupIsSwarm)) || 0;
    
    //details+= '<br/>is Selected BattleGroup? ' + isSelectedBattleGroup + '|';
    //details+= '<br/>is Target BattleGroup? ' + isTargetBattleGroup + '|';
    if (isSelectedBattleGroup == 1)
        selectedName += " [BG]";


    if (isTargetBattleGroup) {
        if (isTargetBattleGroupSwarm) {
            targetName += " [BG SWARM]";
        } else {
            targetName += " [BG]";
        }
        
    }


    let templateRoll = "&{template:exalted3e_Roll}";
    templateRoll += " {{character-name=" + selectedName + "}}";
    templateRoll += " {{targetName=" + targetName + "}}";
    templateRoll += " {{information=Withering Dmg}}";
    templateRoll += " {{#dice-commands=" + diceCommand + "}}";

    let details = "[+1 success added to roll]";
    details += '<br/>Withering Damage Dice [' + witheringDamageDice + ']';
    details += '<br/>Automatic Successes [' + witheringAutomaticSuccesses + ']';

    // if [isTargetBattlegroup]==1
    // get [targetBattlegroupSize]
    // get [targetBattlegroupMagnitude]
    // get [targetBattlegroupCommand]
    // get [targetBattlegroupHealth]
    // get [targetBattlegroupPerfectMorale]
    // get [targetBattlegroupMight]
    // get [targetBattlegroupDrill]
    // calculate [targetBattlegroupDrillBonus] from [targetBattlegroupDrill]
    var targetBattlegroupSize = 0;
    var targetBattlegroupMagnitude = 0;
    var targetBattlegroupHealth = 0;
    var targetBattlegroupPerfectMorale = 0;
    var targetLegendaryProtection = getTokenLegendaryProtect(targetToken);

    if (isTargetBattleGroup == 1) {
        targetBattlegroupSize = parseInt(targetToken.get(bar2Value)) || 0;
        targetBattlegroupMagnitude = parseInt(targetToken.get(bar3Value)) || 0;
//		var targetBattlegroupCommand = parseInt(getCharacterAttributeFromTokenId(TargetToken.id,'battlegroup-command')) || 0;
        targetBattlegroupHealth = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-health-levels')) || 0;
        targetBattlegroupPerfectMorale = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-perfect-morale')) || 0;

//		var targetBattlegroupMight = parseInt(getAttribute(TargetToken.id,'battlegroup-might')) || 0;
        const targetBattlegroupDrill = getAttribute(targetToken.id, 'battlegroup-drill'); // 'Poor', 'Average', 'Elite'
        var targetBattlegroupDrillBonus = 0;
        if (targetBattlegroupDrill == 'Elite') targetBattlegroupDrillBonus = 2;
        if (targetBattlegroupDrill == 'Average') targetBattlegroupDrillBonus = 0;
        if (targetBattlegroupDrill == 'Poor') targetBattlegroupDrillBonus = -2;
    }

    // if [isTargetBattlegroup]==0
    // get [targetInitiative] = [TargetToken] [bar1]

    var targetInitiative = parseInt(targetToken.get(bar1Value)) || 0;
    var selectedInitiative = parseInt(selectedToken.get(bar1Value)) || 0;

// ROLL WITHERING DAMAGE DICE
// #######
    // roll [damageResult] = [witheringDamageDice] 
    // [successes] = [damageResult] + [witheringAutomaticSuccesses] +1
    // if [successes] <= 0, return

    let rollStr = '/roll ' + witheringDamageDice + diceRollMacro;
    let initiativeBreak = 0;
    let newTargetInitiative = targetInitiative;
    let targetNeedsCommandRoll = 0;
    // ReSharper disable once UseOfImplicitGlobalInFunctionScope
    sendChat(msg.who,
        rollStr,
        function(ops) {
            if (ops[0].type == 'rollresult') {
                var result = JSON.parse(ops[0].content);

                var doubles = [];
                var strSplit = diceCommand.split('-');
                var commands = [];
                // ReSharper disable once UseOfImplicitGlobalInFunctionScope
                _.each(strSplit, parseCommands, commands);
                // ReSharper disable once UseOfImplicitGlobalInFunctionScope
                if (!_.isEmpty(commands)) {
                    doubles = processCommands(commands, result);
                } else {
                    // If there are no commands passed, the script defaults to doubling 10s, which is what this call represents.
                    doubles = doDoubles(result, true, 0);
                } // if

                // This gets the player's color, for styling the roll result HTML output in build HTML().
                const player = getPlayerFromId(msg.playerid);
                var totalSuccesses = [];
                var outHtml = buildHTML(result,
                    msg.content,
                    ops[0].origRoll,
                    player.get('color'),
                    doubles,
                    totalSuccesses);
                templateRoll += " {{dice-roll=" + outHtml + "}}";
                // Passes the final, formatted HTML as a direct message to the chat window.

                //templateRoll += outHTML;

// APPLY DAMAGE RESULT
// #######
                // [targetNeedsCommandRoll]=0
                var successes = result.total + witheringAutomaticSuccesses + 1;


                // if [isTargetBattlegroup]==1
                if (isTargetBattleGroup == 1) {
                    //details += "<br/>targetBattlegroupMagnitude:" + targetBattlegroupMagnitude;
                    // [newTargetBattlegroupMagnitude] = [targetBattlegroupMagnitude]-[successes]
                    var newTargetBattlegroupMagnitude = targetBattlegroupMagnitude - successes;

                    // if [newTargetBattlegroupMagnitude] <= 0
                    if (newTargetBattlegroupMagnitude <= 0) {
                        // [targetBattlegroupSize]--
                        targetBattlegroupSize--;
                        newTargetBattlegroupMagnitude = targetBattlegroupHealth + targetBattlegroupSize;
                        // set [TargetToken].[bar2] = [targetBattlegroupSize]
                        targetToken.set(bar2Value, targetBattlegroupSize);

                        // if [targetBattlegroupPerfectMorale]==0
                        if (targetBattlegroupPerfectMorale == 0) {
                            //targetNeedsCommandRoll=1;
                            targetNeedsCommandRoll = 1;
                        }

                        details += "<br/>Command Roll Needed? " + targetNeedsCommandRoll;
                    }

                    details += "<br/>Current Size:" + targetBattlegroupSize;
                    details += "<br/>Current Magnitude:" + newTargetBattlegroupMagnitude;
                    // set [TargetToken].[bar3] = [targetBattlegroupHealth]+[targetBattlegroupSize]
                    targetToken.set(bar3Value, newTargetBattlegroupMagnitude);
                }
                // [initiativeBreak] =0


                // if [isTargetBattlegroup]==0
                if (isTargetBattleGroup == 0) {

                    if (targetLegendaryProtection==1 && ((targetInitiative - successes) < 1)) {
                        newTargetInitiative = 1;
                    } else {
                        newTargetInitiative = targetInitiative - successes;
                    }

                    // [newTarget initiative] = [targetInitiative]-[successes]
                    
                    // set [TargetToken].[bar1] = [newTarget initiative]
                    targetToken.set(bar1Value, newTargetInitiative);
                    // if [newTarget initiative] <=0 [initiativeBreak]=5
                    if (targetInitiative > 0 && newTargetInitiative <= 0) {
                        tokenCrashSet(targetToken, 3);
                        details += "<br/>" +
                            selectedName +
                            " <span style='" +
                            MinusStyle +
                            "'>CRASHES</span> " +
                            targetName;
                        initiativeBreak = 5;
                    }
                }

                // if [isSelectedBattlegroup]==0
                if (isSelectedBattleGroup == 0) {
                    if (isTargetBattleGroupSwarm == 1) {
                        selectedInitiative = selectedInitiative + 1;
                        details += "<br/><span style='color:red;font-weight:bold;text-align:center;'>SWARM MODE</span>";
                    } else {
                        selectedInitiative = selectedInitiative + successes + initiativeBreak;
                    }
                    selectedToken.set(bar1Value, selectedInitiative);
                }
                details += "<br/>Initiative shift [" + successes;
                if (initiativeBreak > 0) details += "+5 Break";
                details += "]";
                details += "<br/>" + selectedName + " initiative is [" + selectedInitiative + "] ";
                details += "<br/>" + targetName + " initiative is [" + newTargetInitiative + "]";
                if (isTargetBattleGroup == 0 &&
                    isSelectedBattleGroup == 1 &&
                    newTargetInitiative < 0 &&
                    targetInitiative > 0) // We just went into -ves
                {
                    details += "<br/>" +
                        targetName +
                        " takes <span style='" +
                        MinusStyle +
                        "'>" +
                        Math.abs(newTargetInitiative) +
                        "</span> health levels damage";
                }
                if (isTargetBattleGroup == 0 &&
                    isSelectedBattleGroup == 1 &&
                    newTargetInitiative < 0 &&
                    targetInitiative < 0) // We whee already into -ves
                {
                    details += "<br/>" +
                        targetName +
                        " takes <span style='" +
                        MinusStyle +
                        "'>" +
                        Math.abs(successes) +
                        "</span> health levels damage";
                }
            } else {
                // Error handling.
                printError(ops[0], msg.who);
            } // if

            templateRoll += " {{details=" + details + "}}";
            // ReSharper disable once UseOfImplicitGlobalInFunctionScope
            doSendChat(msg.who, templateRoll);

            // APPLY THE RESULTS TO THE TURN ORDER
            setInitiativeAndTurnOrder(targetToken.id, newTargetInitiative);
            setInitiativeAndTurnOrder(selectedToken.id, selectedInitiative);

            if (targetNeedsCommandRoll == 1) {
                //TODO: Automatic command rolls
                doNotify("Target Battlegroup needs rout check", "none");

                //var commandDiceTotal  = targetBattlegroupCommand + targetBattlegroupDrillBonus;
                //var rollStr = '/roll ' + commandDiceTotal + diceRollMacro;
                
                // var templateRoll ="&{template:exalted3e_Roll}";
                // templateRoll += " {{information=Command Roll}}";
                // templateRoll += " {{totalDice=" + commandDiceTotal + "}}";
                // templateRoll += " {{character-name=" + targetName + "}}";

                // performRoll(msg, rollStr, templateRoll);

                // roll [targetBattlegroupCommand]+[targetBattlegroupDrillBonus]
                // resolveAttack(msg, Selected, Target, result.total+0, defence, defenceValue, weaponName, weaponDamage, weaponOverwhelm, details, template, attackType);
            }
        }); // end exWitheringDamageScript


}; //exWitheringDamageScript
function exRollDamage(msg, damageType, rollCommand) {
    // Roll for damage against a target. 
    // Look up the weapon name on the selected character's sheet
    // If Withering, adjust initiative, and apply to Selected and Target
    // If Decisive, reset to base initiative

    const params = getParametersFromCommand(msg, rollCommand);
    if (params == null) return;


    const selectedTokenId = params[0];
    const selectedToken = getTokenFromId(selectedTokenId);

    if (selectedToken == null) {
        doSendChat(msg.who, 'exRollDamage selected token not found');
        return;
    }

    const targetTokenId = params[1];
    const targetToken = getTokenFromId(targetTokenId);

    if (targetToken == null) {
        doSendChat(msg.who, 'Target token not found');
        return;
    }

    const tokenBarNumber = 1;
    const alterValue = parseInt(params[2]) || 0;
    //var damageType = params[3];


    if (damageType == attackTypeWithering) {
        doWitheringDamage(msg, selectedToken, targetToken, alterValue, tokenBarNumber, msg.who, null, null);
    } else if (damageType == attackTypeDecisive) {
        var selectedInitiative = parseInt(selectedToken.get(bar1Value)) || 0;
        selectedInitiative += alterValue;
        doDecisiveDamage(msg, selectedToken, targetToken, selectedInitiative, tokenBarNumber, msg.who, null, null);
    }
};
function exResetInitiative(msg, command) {
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;

    const who = msg.who;
    const selectedTokenId = params[0];
    const selectedToken = getTokenFromId(selectedTokenId);
    const addSuccesses = parseInt(params[1]) || 0;

    const joinBattleBonus = (parseInt(getCharacterAttributeFromTokenId(selectedTokenId, attrJoinBattleBonus)) || 0);

    if (selectedToken == null) {
        
        doSendChat(who, 'exResetInitiative selected token not found');
        return;
    }

    const alterValue = 3 + addSuccesses + joinBattleBonus;

    const tokenBarNumber = 1;
    const currentValueSelected = parseInt(selectedToken.get("bar" + tokenBarNumber + "_value")) || 0;
    const setSelectedValue = alterValue;
    var details = "Initiative is now";

    if (currentValueSelected > setSelectedValue) {
        details += "<span style='" + MinusStyle + "'>" + setSelectedValue + "</span>";
    } else {
        details += AddStyleSpan(setSelectedValue);
    }

    if (joinBattleBonus != 0) {
        details += "<p style='color:red;font-variant:small-caps'>(Join Battle Bonus: [" + joinBattleBonus + "])</p>";
    }

    var templateRoll = "&{template:exalted3e_Roll}";
    templateRoll += " {{information=Initiative Reset}}";
    templateRoll += " {{character-name=" + getNameFrom(selectedToken) + "}}";
    templateRoll += " {{details=" + details + "}}";

    
    doSendChat(who, templateRoll);

    selectedToken.set("bar" + tokenBarNumber + "_value", setSelectedValue);
    setInitiativeAndTurnOrder(selectedTokenId, setSelectedValue);
 };
function exInitiativeSet(msg, command) {
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;

    const who = msg.who;
    const selectedTokenId = params[0];
    const selectedToken = getTokenFromId(selectedTokenId);
    const setSelectedValue = parseInt(params[1]) || 0;

    const details = "Initiative set to [" + setSelectedValue + "]";

    var templateRoll = "&{template:exalted3e_Roll}";
    templateRoll += " {{information=Initiative Set Value}}";
    templateRoll += " {{character-name=" + getNameFrom(selectedToken) + "}}";
    templateRoll += " {{details=" + details + "}}";

    
    doSendChat(who, templateRoll);
    const tokenBarNumber = 1;

    selectedToken.set("bar" + tokenBarNumber + "_value", setSelectedValue);
    setInitiativeAndTurnOrder(selectedTokenId, setSelectedValue);
};

// essence
function exEssenceSpendToken(msg, command) {
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;

    const who = msg.who;
    const selectedTokenId = params[0];
    const essenceType = params[1];
    const alterValue = parseInt(params[2]) || 0;
    
    const selectedToken = getTokenFromId(selectedTokenId);
    if (selectedToken == null || typeof selectedToken === 'undefined') {
        
        doSendChat(who, 'exEssenceSpendToken selected token not found');
        return;
    }
    
    const characterId = selectedToken.get('represents');
    const character = getCharacterFromId(characterId);

    if (character === null || typeof character === 'undefined') {
        
        doSendChat(who, 'character: not found');
        return;
    }
    doSpendEssence(msg, characterId, selectedToken, essenceType, alterValue);
};
function exEssenceSpendCharacter(msg, command) {
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;

    const characterId = params[0];
    const essenceType = params[1];
    const alterValue = parseInt(params[2]) || 0;

    const character = getCharacterFromId(characterId);
    if (character === null || typeof character === 'undefined') {
        
        doSendChat(msg.who, 'character: not found');
        return;
    }

    const selectedToken = getTokenFromCharacterId(characterId);
    if (selectedToken == null || typeof selectedToken === 'undefined') {
        
        doSendChat(msg.who, 'exEssenceSpendCharacter selected token not found');
        return;
    }

    doSpendEssence(msg, characterId, selectedToken, essenceType, alterValue);
}
// sorcery
function exSMCast(msg, command) {
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;
    if (params.length < 8) {
        doSendChat(msg.who, command + " expects 8 parameters. Got: " + params.length);
        return;
    }

    doSorceryCast(msg, command, params);
}
function exSMChange(msg, command) {
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;
    const characterId = params[0];
    

    doSorcerousMotesIncrease(msg, characterId, params);

};
// ADD XP - grpAddXP from bar
function exAddXP(msg, command) {
    const who = msg.who;
    const params = getParametersFromCommand(msg, command);
    const xpType = params[0];
    const xpAmount = parseInt(params[1]) || 0;

    if (xpType.length === 0) {
        const btnRow = generateXpButtonRow();
        let buttonTemplate = "&{template:exalted3e_Roll}";
        buttonTemplate += " {{character-name=Group XP}}";
        buttonTemplate += " {{buttons=" + btnRow + "}}";
        
        doSendChat(who, "/w gm " + buttonTemplate);
        return;
    }

    for (let index = 2; index < params.length; index++) {
        const characterId = params[index];
        // var characterId = params[2];
        addCharacterXp(who, xpType, xpAmount, characterId);
    }
};
// GROUP SKILL CHECKS
function exGroupSkillCheck(msg, command) {
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;

    const who = msg.who;

    const player = getPlayerFromId(msg.playerid);

    if (player == null) {
        
        doSendChat(who, 'player: ' + msg.playerid + ' not found');
        return;
    }

    const abilityName = params[0] || '';
    const attributeName = params[1] || '';
    const abilityFullName = params[2] || '';
    const diceModifier = 0;
    const whisperMode = 10;
    
    
    doNotify("Group ability check: " + abilityFullName + " [" + attributeName + "]+[" + abilityName + "]");
    for (let index = 3; index < params.length; index++) {
        const characterId = params[index];
        
        const character = getCharacterFromId(characterId);
        if (character === null || typeof character === 'undefined') {
            
            doSendChat(who, 'character: ' + characterId + ' not found');
            return;
        }
        skillCheck(msg, player, character, characterId, attributeName, abilityName, abilityFullName, diceModifier, whisperMode, null);
    }
}
function exGroupAwareness(msg) {
    const who = msg.who;
    createGroupSkillCheckMenu(who, "Awareness", attrPerception, abiAwareness);
};
function exGroupInvestigate (msg) {
    const who = msg.who;
    createGroupSkillCheckMenu(who, "Investigation", attrPerception, abiInvestigation);
};
function exGroupReadIntention(msg) {
    const who = msg.who;
    createGroupSkillCheckMenu(who, "Read Intention", attrPerception, abiSocialize);
};
function exCombatStart(msg, command) {
    state.currentRound = 1;
    doNotify("Start of round " + state.currentRound);

    if (state.doDirectAnimaIncrease) {
        state.doDirectAnimaIncrease = false;
        doNotify("Direct Anima Increase", state.doDirectAnimaIncrease);
    }

    let order = turnOrderGet();
    if (!hasEndTurnMarker(order))
        order= createEndTurnMarker(order);

    if (order.length) {
// ReSharper disable once UseOfImplicitGlobalInFunctionScope
        order = _.sortBy(order, (t) => -parseInt(t.pr));
    }
    turnOrderSet(order);
}
function exCombatEnd(msg, command) {
    doNotify("End of combat after " + state.currentRound + " rounds");
    state.currentRound = 1;
    if (!state.doDirectAnimaIncrease) {
        state.doDirectAnimaIncrease = true;
        doNotify("Direct Anima Increase", state.doDirectAnimaIncrease);
    }
    turnOrderReset();
    groupClearCrash();
    groupClearOnslaught();
}

function exNaval(msg, command) {
    doLog("exNaval");
    const params = getParametersFromCommand(msg, command);
    doLog("params");
    doLog(params);

    const abilityCommand = params[0];
    const characterId = params[1];
    const dicePoolModifier = parseInt(params[2]) || 0;

    doNavalAction(msg, abilityCommand, characterId, dicePoolModifier, params);
}
//#endregion
// #region STATUS MARKERS
// message handlers

// !exr setStatus @{selected|token_id}|electroToken|2
function exSetStatus(msg, command) {
    doLog("exSetStatus 123" + functionHeader);
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;
    doLog(params);

    const selectedId = params[0];
    const selectedToken = getTokenFromId(selectedId);

    if (selectedToken == null) {
        doSendChat(msg.who, 'exSetStatus selected token not found');
        return;
    }
    const statusType = params[1];
    let setAmount = false;
    if (params.length > 1)
        setAmount = params[2];

    var tokenMarker = "";
    let isToggle = false;
    let foundShortcut = false;

    doLog("setAmount");
    doLog(setAmount);

    tokenMarker = getStatusMarkerName(statusType)

    doLog("tokenMarker");
    doLog(tokenMarker);

    if ((tokenMarker == statusAnima) && setAmount) {
        setTokenAnimaLevel(selectedToken, setAmount, msg);
        return;
    } else if (tokenMarker == statusAnima) {
        setAmount = getTokenAnimaLevel(selectedToken) + 1;
        setTokenAnimaLevel(selectedToken, setAmount, msg);
        return;
    } 

    if (statusType == status_ninja) isToggle = true;
    
    if (tokenMarker === "") {
        doSendChat(msg.who, 'unhandled statusType: ' + statusType);
        return;
    }

    let newStatus;
    const tokenStatus = statusGetValue(selectedToken, tokenMarker);
    if (!setAmount) {
        switch (tokenStatus) {
            case false:
                newStatus = true;
                break;
            case true:
                newStatus = 1;
                break;
            default:
                newStatus = (parseInt(tokenStatus) || 0) + 1;
                break;
        }
    } else {
        newStatus = setAmount;
    }

    if (isToggle) {
        if (tokenStatus != true) {
            newStatus = true;
        } else {
            newStatus = false;
        }
    }

    statusSetValue(selectedToken, tokenMarker, newStatus);

    doSendChat(msg.who,
        statusType +
        " status on " +
        selectedToken.get('name') +
        " increased from " +
        tokenStatus +
        " to " +
        (newStatus));
};
// !exr statusGetToken @{selected|token_id}
function exStatusMarkersGet(msg, command) {
    doLog("exStatusMarkersGet" + functionHeader);
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;
    doLog(params);

    const selectedId = params[0];
    const selectedToken = getTokenFromId(selectedId);

    if (selectedToken == null) {
        doSendChat(msg.who, 'exStatusMarkersGet selected token not found');
        return;
    }

    sendChat("Token Markers", selectedToken.get("statusmarkers"));

    const markers = statusGetTokenMarkers(msg, selectedToken);
    doLog("markers");
    doLog(markers);
};
// !exr statusClear @{selected|token_id}
function exStatusMarkersClear(msg, command) {
    doLog("exStatusMarkersClear" + functionHeader);
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;
    doLog(params);

    const selectedId = params[0];
    const selectedToken = getTokenFromId(selectedId);

    if (selectedToken == null) {
        doSendChat(msg.who, 'exStatusMarkersClear selected token not found');
        return;
    }

    selectedToken.set("statusmarkers", "");

    const currentMarkers = selectedToken.get("statusmarkers").split(',');
    doLog("currentMarkers");
    doLog(currentMarkers);
}
// !exr statusGetValue @{selected|token_id}|electroToken
function exStatusGetValue (msg, command) {
    doLog("exStatusGetValue" + functionHeader);
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;
    doLog(params);

    const selectedId = params[0];
    const selectedToken = getTokenFromId(selectedId);

    if (selectedToken == null) {
        doSendChat(msg.who, 'exStatusGetValue selected token not found');
        return;
    }
    var statusMarkerName = getStatusMarkerName(params[1]);
    if (statusMarkerName == null || !statusMarkerName || statusMarkerName == "") {
        doSendChat(msg.who, 'exStatusGetValue marker name not found');
        return;
    }
    var statusMarkerValue = statusGetValue(selectedToken, statusMarkerName);

    doSendChat(msg.who, "Status marker:" + statusMarkerName + " value is '" + statusMarkerValue + "' ");
};
// !exr statusInc @{selected|token_id}|electroToken
function exStatusMarkerIncrement (msg, command) {
    doLog("exStatusMarkerIncrement" + functionHeader);
    const params = getParametersFromCommand(msg, command);
    if (params == null) return;
    doLog(params);

    const selectedId = params[0];
    const selectedToken = getTokenFromId(selectedId);

    if (selectedToken == null) {
        doSendChat(msg.who, 'exStatusMarkerIncrement selected token not found');
        return;
    }
    var statusMarkerName = getStatusMarkerName(params[1]);
    if (statusMarkerName == null || !statusMarkerName || statusMarkerName == "") {
        doSendChat(msg.who, 'exStatusGetValue marker name not found');
        return;
    }
    var statusMarkerValue = statusIncrementValue(selectedToken, statusMarkerName);

    doSendChat(msg.who, "Status marker:" + statusMarkerName + " value is now '" + statusMarkerValue + "' ");

};

function statusIncrementValue(selectedToken, statusMarkerName) {
    doLog("statusIncrementValue" + functionHeader);

    if (selectedToken == null) {
        doSendChat(msg.who, 'statusSetValue selectedToken is null');
        return;
    }
    var setValue = null;
    const markerName = getStatusMarkerName(statusMarkerName);

    doLog("markerName");
    doLog(markerName);

    var currentValue = statusGetValue(selectedToken, markerName);
    doLog("currentValue");
    doLog(currentValue);

    if (currentValue === false) setValue = true;
    else if (currentValue === true) setValue = 0;
    else {
        setValue = parseInt(currentValue) || 0;
        setValue++;
    }

    doLog("setValue");
    doLog(setValue);

    statusSetValue(selectedToken, statusMarkerName, setValue);

    return setValue;
}
function getStatusMarkerName(statusType) {
    doLog("getStatusMarkerName" + functionHeader);
    doLog("statusType");
    doLog(statusType);

    var foundShortcut = false;
    var tokenMarker = "";

    if (statusType == status_ninja) {
        foundShortcut = true;
        tokenMarker = statusNinjaMask;
    } else if (statusType == status_aura || statusType == statusAnima || statusType == "status_aura") {
        foundShortcut = true;
        tokenMarker = statusAnima;
    } else if (statusType == status_crash) {
        tokenMarker = statusCrash;
        foundShortcut = true;
    } else if (statusType == status_onslaughtProtect) {
        tokenMarker = status_onslaughtProtect;
        foundShortcut = true;
    }
    // --------------- ELEMENT TOKENS
    else if (statusType.toLowerCase() == status_electroToken_name.toLowerCase() || statusType == status_electroToken) {
        tokenMarker = status_electroToken;
        foundShortcut = true;
    } else if (statusType.toLowerCase() == status_anemoToken_name.toLowerCase() || statusType == status_anemoToken) {
        tokenMarker = status_anemoToken;
        foundShortcut = true;
    } else if (statusType.toLowerCase() == status_cryoToken_name.toLowerCase() || statusType == status_cryoToken) {
        tokenMarker = status_cryoToken;
        foundShortcut = true;
    } else if (statusType.toLowerCase() == status_dendroToken_name.toLowerCase() || statusType == status_dendroToken) {
        tokenMarker = status_dendroToken;
        foundShortcut = true;
    } else if (statusType.toLowerCase() == status_geoToken_name.toLowerCase() || statusType == status_geoToken) {
        tokenMarker = status_geoToken;
        foundShortcut = true;
    } else if (statusType.toLowerCase() == status_hydroToken_name.toLowerCase() || statusType == status_hydroToken) {
        tokenMarker = status_hydroToken;
        foundShortcut = true;
    } else if (statusType.toLowerCase() == status_pyroToken_name.toLowerCase() || statusType == status_pyroToken) {
        tokenMarker = status_pyroToken;
        foundShortcut = true;
    } else if (statusType.toLowerCase() == status_air_name.toLowerCase() || statusType == status_air) {
        tokenMarker = status_air;
        foundShortcut = true;
    } else if (statusType.toLowerCase() == status_earth_name.toLowerCase() || statusType == status_earth) {
        tokenMarker = status_earth;
        foundShortcut = true;
    } else if (statusType.toLowerCase() == status_fire_name.toLowerCase() || statusType == status_fire) {
        tokenMarker = status_fire;
        foundShortcut = true;
    } else if (statusType.toLowerCase() == status_water_name.toLowerCase() || statusType == status_water) {
        tokenMarker = status_water;
        foundShortcut = true;
    } else if (statusType.toLowerCase() == status_wood_name.toLowerCase() || statusType == status_wood) {
        tokenMarker = status_wood;
        foundShortcut = true;
    }

    if (!foundShortcut) {
        tokenMarker = statusType;
    }

    if (tokenMarker === "") {
        doSendChat(msg.who, 'unhandled statusType: ' + statusType);
        return "";
    }

    doLog("tokenMarker");
    doLog(tokenMarker);

    return tokenMarker;
}

function statusGetValue(selectedToken, statusMarkerName) {
    doLog("statusGetValue" + functionHeader);

    if (selectedToken == null) {
        doSendChat(msg.who, 'statusSetValue selectedToken is null');
        return;
    }

    doLog("statusMarkerName");
    doLog(statusMarkerName);

    const currentMarkers = selectedToken.get("statusmarkers").split(',');

    doLog("currentMarkers");
    doLog(currentMarkers);
    var hasMarker = false;
    var foundVal = null;

    const newMarkers = [];
    _.each(currentMarkers, function (item) {
        doLog("item");
        doLog(item);

        if (item.indexOf(statusMarkerName) > -1) {
            hasMarker = true;

            if (item.indexOf("@") == -1) {
                foundVal = true;
            }
            else {
                const values = item.split("@");

                doLog("values");
                doLog(values);

                if (values[1] === NaN) {
                    foundVal = false;
                } else {
                    foundVal = parseInt(values[1]) || 0;
                }

                
            }
        }
    });

    if (!hasMarker || foundVal == null) {
        return false;
    } else if (foundVal === false) {
        return false;
    } else if (foundVal === true) {
        return true;
    } else {
        return parseInt(foundVal);
    }

    
}
function statusSetValue(selectedToken, statusMarkerName, statusValue) {
    doLog("statusSetValue" + functionHeader);

    if (selectedToken == null) {
        doSendChat(msg.who, 'statusSetValue selectedToken is null');
        return;
    }

    doLog("selectedToken.get(name)");
    doLog(getNameFrom(selectedToken));

    doLog("statusMarkerName");
    doLog(statusMarkerName);

    doLog("statusValue");
    doLog(statusValue);

    const currentMarkers = selectedToken.get("statusmarkers").split(',');

    doLog("currentMarkers");
    doLog(currentMarkers);

    const newMarkers = [];
    _.each(currentMarkers, function (item) {
        if (item.length > 0 && item.indexOf(statusMarkerName) == -1) {
            newMarkers.push(item);
        }
    });

    if (statusValue === false) {

    } else if (statusValue === true) {
        newMarkers.push(statusMarkerName);
    } else {
        newMarkers.push(statusMarkerName + "@" + statusValue);
    }
    
    doLog("newMarkers");
    doLog(newMarkers);

    selectedToken.set("statusmarkers", newMarkers.join(','));
}

function statusGetTokenMarkers(msg, selectedToken) {
    if (selectedToken == null) {
        doSendChat(msg.who, 'statusGetTokenMarkers selectedToken is null');
        return;
    }

    const markersList = [];
    const currentMarkers = selectedToken.get("statusmarkers").split(',');

    doLog("currentMarkers");
    doLog(currentMarkers);

    _.each(currentMarkers, function (item) {
        if (item && item.length > 0) {
            if (item.indexOf("@") == -1) {
                markerName = item;
                markerValue = true;
            }
            else {
                const values = item.split("@");
                markerName = item[0];
                doLog("values");
                doLog(values);

                if (values[1] === NaN) {
                    markerValue = false;
                } else {
                    markerValue = parseInt(values[1]) || 0;
                }
            }

            markersList.push({ "markerName": markerName, "markerValue": markerValue });
        }

    });

    doLog("markersList");
    doLog(markersList);

    return markersList;
}
// #endregion
//#region GET FUNCTIONS (token, character, player, attribute)
function getPlayerFromId (playerId) {
    doLog("getPlayerFromId");
    // ReSharper disable once UseOfImplicitGlobalInFunctionScope
    const player = getObj("player", playerId);
    return player;
}
function getTokenFromId (tokenId) {
    doLog("getTokenFromId");
    // ReSharper disable once UseOfImplicitGlobalInFunctionScope
    const token = findObjs({ type: 'graphic', _id: tokenId })[0];
    return token;
}
function getCharacterFromId (characterId) {
    doLog("getCharacterFromId");
    // ReSharper disable once UseOfImplicitGlobalInFunctionScope
    const character = findObjs({ _type: 'character', _id: characterId })[0];

    if (character === null || typeof character === 'undefined') {
        return null;
    }

    return character;
}
function getCharacterAttributeFromTokenId (tokenId, attr) {
    try {
        doLog("getCharacterAttributeFromTokenId: " + attr);
        doLog(tokenId);
        const token = getTokenFromId(tokenId);
        const characterId = token.get('represents');
        
        const character = getCharacterFromId(characterId);
        
        const attribute = getAttribute(character.id, attr);
        return attribute;
    }
    catch (err) {
        return null;
    }
};
function getCharacterFromTokenId(tokenId) {
    doLog("getCharacterFromTokenId");
    const token = getTokenFromId(tokenId);
    const characterId = token.get('represents');
    const character = getCharacterFromId(characterId);

    return character;
};
function getParametersFromCommand(msg, command) {
    const originalMsg = msg.content;
    const commandLine = originalMsg;

    const slc = commandLine.slice(commandLine.indexOf(command) + command.length);
    const rawCmd = slc.trim();

    const params = rawCmd.split(sep);

    return params;
};
function getMaxMotesFromCharacterId(characterId, attribute) {
    
    var motePool = getAttribute(characterId, attribute); //might look something like @{essence} * 7 + 26 OR a flat value
    if (motePool == undefined) return 0;
    if (typeof motePool == "string") {
        if (motePool.match("@{essence}") == "@{essence}") {
            
            motePool = motePool.replace("@{essence}", getAttribute(characterId, "essence"));
        }
    }
    if (motePool == undefined) motePool = 0;
    motePool = eval(motePool);
    if (motePool < 0) return 0;
    return motePool;
};
function getTokenOnslaughtProtect(token) {
    const targetOnslaughtProtectRaw = statusGetValue( token, status_onslaughtProtect);
    var targetOnslaughtProtect = 0;
    if (targetOnslaughtProtectRaw == true) {
        targetOnslaughtProtect = 1;
    } else if (parseInt(targetOnslaughtProtectRaw) > 0) {
        targetOnslaughtProtect = parseInt(targetOnslaughtProtectRaw) || 0;
    }
    return targetOnslaughtProtect;
}


function getNameFrom(object) {
    return object.get(attrName) || "";
}

function getTokenLegendaryProtect(token) {
    const targetLegendaryProtectRaw = statusGetValue(token, statusLegendarySize);
    var targetLegendaryProtect = 0;
    if (targetLegendaryProtectRaw == true) {
        targetLegendaryProtect = 1;
    } else if (parseInt(targetLegendaryProtectRaw) > 0) {
        targetLegendaryProtect = parseInt(targetLegendaryProtectRaw) || 0;
    }
    return targetLegendaryProtect;
}
function getPageTokens() {
// ReSharper disable once UseOfImplicitGlobalInFunctionScope
    const graphic = findObjs({
// ReSharper disable once UseOfImplicitGlobalInFunctionScope
        _pageid: Campaign().get(_playerPageId),
        _type: "graphic",
        layer: "objects"
    });
    return graphic;
}
function getTokenFromCharacterId(characterId) {
    const character = getCharacterFromId(characterId);

    const curPageId = findObjs({ _type: "campaign" })[0].get(_playerPageId);
    //const curPage = findObjs({_type: "page", _id: curPageId})[0];
    const tokens = findObjs({_type: "graphic", layer:"objects", _pageid: curPageId, represents: characterId, subtype: "token"});

    if (tokens.length == 0) {
        doNotify("I found nothing that could be " + getNameFrom(character) + "'s token");
        return null;
    }
    if (tokens.length == 1) {
        doNotify("I found " + getNameFrom(character) + "'s token!");
        return tokens[0];
    }
    if (tokens.length > 1) {
        doNotify("I found " + tokens.length + " tokens");
        return null;
    }

    return null;
}
function getInitiativeFromTokenId(tokenId) {
    if (tokenId == null) return 0;

    const targetToken = getTokenFromId(tokenId);
    if (targetToken == null) return 0;

    const targetInitiative = targetToken.get(bar1Value) || 0;

    return targetInitiative;
}
function getTotalDicePoolModifiers(tokenId, characterId) {
    let totalPenalty = 0;
    let woundPenalty = 0;

    if (characterId && characterId != null) {
        if (!tokenId || tokenId == null) {
            tokenId = getAttribute(characterId, battleTokenId);
        }
        woundPenalty = parseInt(getAttribute(characterId, attrWoundPenalty)) || 0;
       
    }

    if (tokenId && tokenId != null) {
        const token = getTokenFromId(tokenId);

        if (token && token != null) {
            if (woundPenalty == 0) {
                woundPenalty = parseInt(statusGetValue(token, statusWoundPenalty)) || 0;                
            }

            const tokenTempMiscPenalty = (parseInt(statusGetValue(token, statusTempMiscPenalty)) || 0);
            const tokenFatiguePenalty = (parseInt(statusGetValue(token, statusFatiguePenalty)) || 0);
            const tokenPermMiscPenalty = (parseInt(statusGetValue(token, statusPermMiscPenalty)) || 0);
            totalPenalty += tokenTempMiscPenalty + tokenFatiguePenalty + tokenPermMiscPenalty;
        }
    }

    const result = (Math.abs(totalPenalty) + Math.abs(woundPenalty)) * -1;
    return result;
}
function getModifiersWoundPenalty(tokenId, characterId) {
    let totalPenalty = 0;
    let woundPenalty = 0;

    if (characterId && characterId != null) {
        if (!tokenId || tokenId == null) {
            tokenId = getAttribute(characterId, battleTokenId);
        }
        woundPenalty = parseInt(getAttribute(characterId, attrWoundPenalty)) || 0;

    }

    if (tokenId && tokenId != null) {
        const token = getTokenFromId(tokenId);

        if (token && token != null) {
            if (woundPenalty == 0) {
                woundPenalty = parseInt(statusGetValue(token, statusWoundPenalty)) || 0;
            }
        }
    }
    if (totalPenalty + woundPenalty === 0) return "";
    return Math.abs(totalPenalty + woundPenalty) * -1;
}
function getModifiersFatiguePenalty(tokenId) {
    let totalPenalty = 0;

    if (tokenId && tokenId != null) {
        const token = getTokenFromId(tokenId);

        if (token && token != null) {
            const tokenFatiguePenalty = (parseInt(statusGetValue(token, statusFatiguePenalty)) || 0);

            totalPenalty += tokenFatiguePenalty ;
        }
    }

    if (totalPenalty === 0) return "";
    return Math.abs(totalPenalty) * -1;
}
function getModifiersTempMiscPenalty(tokenId) {
    let totalPenalty = 0;

    if (tokenId && tokenId != null) {
        const token = getTokenFromId(tokenId);

        if (token && token != null) {
            const tokenTempMiscPenalty = (parseInt(statusGetValue(token, statusTempMiscPenalty)) || 0);

            totalPenalty += tokenTempMiscPenalty;
        }
    }
    if (totalPenalty === 0) return "";
    return Math.abs(totalPenalty) * -1;
}
function getModifiersPermMiscPenalty(tokenId) {
    let totalPenalty = 0;

    if (tokenId && tokenId != null) {
        const token = getTokenFromId(tokenId);

        if (token && token != null) {
            const tokenPermMiscPenalty = (parseInt(statusGetValue(token, statusPermMiscPenalty)) || 0);

            totalPenalty += tokenPermMiscPenalty;
        }
    }
    if (totalPenalty === 0) return "";
    return Math.abs(totalPenalty) * -1;
}
//#endregion
//#region GET/SET ATTRIBUTES
function getAttribute(characterId, attributeName) {
    try {
        // ReSharper disable once UseOfImplicitGlobalInFunctionScope
        const attribute = getAttrByName(characterId, attributeName);
        return attribute;
    }
    catch (err) {
        // ReSharper disable once UseOfImplicitGlobalInFunctionScope
        createObj("attribute", {
            name: attributeName,
            current: "",
            characterid: characterId
        });
        return "";
    }
};
function getAttributeMax(characterId, attributeName) {
    try {
        // ReSharper disable once UseOfImplicitGlobalInFunctionScope
        const attribute = getAttrByName(characterId, attributeName, "max");
        return attribute;
    }
    catch (err) {
        // ReSharper disable once UseOfImplicitGlobalInFunctionScope
        createObj("attribute", {
            name: attributeName,
            current: "",
            max: "",
            characterid: characterId
        });
        return "";
    }
};
function setAttribute (attributeName, characterId, toSet) { //Generic function for setting an attribute to a value.
    doLog("setAttribute: " + attributeName);
    doLog("characterId: " + characterId);
// ReSharper disable once UseOfImplicitGlobalInFunctionScope
    const attribute = findObjs({                              
        _characterid: characterId,                              
        _type: "attribute",
        name: attributeName
    });
    doLog("found attribute");
    doLog(attribute);
    
    if (attribute[0] != undefined) {
        doLog("set attribute");
        doLog(attribute[0]);
        attribute[0].set({ current: toSet });
    } else {
        doLog("createObj");
        // ReSharper disable once UseOfImplicitGlobalInFunctionScope
        createObj("attribute", {
            name: attributeName,
            current: toSet,
            characterid: characterId
        });
    }
}
function setAttributeMax (attributeName, characterId, toSet) { //Generic function for setting an attribute to a value.
// ReSharper disable once UseOfImplicitGlobalInFunctionScope
    const attribute = findObjs({                              
        _characterid: characterId,                              
        _type: "attribute",
        name: attributeName
    });
    
    if (attribute[0] != undefined) {
        attribute[0].set({ max: toSet });
    } else {
        // ReSharper disable once UseOfImplicitGlobalInFunctionScope
        createObj("attribute", {
            name: attributeName,
            max: toSet,
            characterid: characterId
        });
    }
}
//#endregion
//#region MESSAGE / NOTIFY FUNCTIONS
function doNotify(func,toggled){               //Function for use of notifying when a setting has been toggled
//    if(state.doNotifications == false) return;

    let color = "";
    if (toggled === false){
        toggled = "Disabled";
        color =" papayawhip"; // "#FF0000";
    } 
    else if (toggled === true){
        toggled = "Enabled";
        color = " papayawhip"; // colourGreen;
    }
    else if (toggled == null || toggled === "none" || toggled===""){
        toggled = "";
        color = " papayawhip";
    }


    doSendChat(scriptTitle,'/direct '
        +'<div style=\'' + notifyStyle +'\'>' 
        +'<b>' +func 
        +' <span style="color:' +color +';">' +toggled +'</span>' 
        +"</b>"
        +'</div>'
    );
}
function doLog(message)
{
    const currDate = new Date().toLocaleString();
    if (state.debugMode == true) log(currDate + ": " + message);
}
function doSendChat(who, message) {
    // ReSharper disable once UseOfImplicitGlobalInFunctionScope
    sendChat(who, message);
}
//#endregion
//#region BATTLE / TURN ORDER FUNCTIONS
function doJoinBattle(msg, characterId, bonusDice, selectedToken, addSuccesses, useStealth) {
    const selectedTokenId = selectedToken.id;
    const isQuickCharacter = (parseInt(getAttribute(characterId, 'qc')) || 0) != 0;
    const isQcUnique = (parseInt(getAttribute(characterId, qcIsIndividual)) || 0) != 0;
    const totalPenalty = parseInt(getTotalDicePoolModifiers(selectedTokenId, characterId)) || 0;

    const joinBattleBonus = (parseInt(getAttribute(characterId, attrJoinBattleBonus)) || 0);

    let templateRoll = "&{template:exalted3e_Roll}";
    templateRoll += " {{joinBattle=1}}";

    let diceTotal = 0;
    if (isQuickCharacter) {
        const qcJoinBattle = parseInt(getAttribute(characterId, 'qc-join')) || 0;

        diceTotal += (qcJoinBattle + bonusDice) + totalPenalty;
        templateRoll += " {{qc=1}}";
        templateRoll += "{{qcJoinBattleDice=" + qcJoinBattle + "}}";
        templateRoll += " {{details=Join Battle: " + qcJoinBattle + " dice}}";
    } else {


        const objWits = parseInt(getAttribute(characterId, attrWits)) || 0;  //'wits'
        templateRoll += " {{attribute-value=" + objWits + "}}";

        if (useStealth) {
            templateRoll += " {{stealth=1}}";
            const objStealth = parseInt(getAttribute(characterId, abiStealth)) || 0;
            diceTotal += (objWits + objStealth + bonusDice) + totalPenalty;
            templateRoll += " {{skill-value=" + objStealth + "}}";
        } else {
            templateRoll += " {{fc=1}}";
            const objAwareness = parseInt(getAttribute(characterId, abiAwareness)) || 0;
            diceTotal += (objWits + objAwareness + bonusDice) + totalPenalty;
            templateRoll += " {{skill-value=" + objAwareness + "}}";
        }


    }

    const rollStr = '/roll ' + diceTotal + diceRollMacro;


    templateRoll += " {{total-penalty=" + totalPenalty + "}}";
    templateRoll += " {{wound-penalty=" + getModifiersWoundPenalty(selectedTokenId, characterId) + "}}";
    templateRoll += " {{fatigue-penalty=" + getModifiersFatiguePenalty(selectedTokenId) + "}}";
    templateRoll += " {{misc-penalty=" + getModifiersPermMiscPenalty(selectedTokenId) + "}}";
    templateRoll += " {{miscTemp-penalty=" + getModifiersTempMiscPenalty(selectedTokenId) + "}}";

    templateRoll += " {{character-name=" + selectedToken.get('name') + "}}";
    templateRoll += " {{totalDice=" + diceTotal + "}}";

    if (isQuickCharacter) {
        templateRoll += " {{information=Quick Character}}";
    }
    let details = "";

    doLog("set battleTokenId");
    doLog(isQuickCharacter);

    if (!isQuickCharacter || (isQuickCharacter && isQcUnique)) {
        if (characterId != null) {
            setAttribute(battleTokenId, characterId, selectedToken.id);

            const battleToken = getAttribute(characterId, battleTokenId);
            if (battleToken == selectedToken.id) {

                details = "Battle Token Set";
            } else {

                details = "Battle Token NOT Set";
            }

            let charCurrentMotes = parseInt(getAttribute(characterId, attrEssencePeripheral)) || 0;
            let tokenAnimaLevel = parseInt(getTokenAnimaLevel(selectedToken)) || 0;
            setAttribute(attrLastTurnMotes, characterId, charCurrentMotes);
            setAttribute(attrLastTurnAnima, characterId, tokenAnimaLevel);
            details += " [currentPeripheral=" + charCurrentMotes + "] ";
            details += " [currentAnima=" + tokenAnimaLevel + "] ";

        }
    }

    if (joinBattleBonus != 0) {
        details += "<p style='color:red;font-variant:small-caps'>(Join Battle Bonus: [" + joinBattleBonus + "])</p>";
        addSuccesses += joinBattleBonus;
    }

    templateRoll += " {{details=" + details + "}}";

    performInitiativeRoll(msg, rollStr, selectedTokenId, templateRoll, addSuccesses);
}

function exSetBattleToken(msg, command) {
    const params = getParametersFromCommand(msg, command);
    const selectedTokenId = params[0];
    const character = getCharacterFromTokenId(selectedTokenId);


    setAttribute(battleTokenId, character.id, selectedTokenId);

    const battleToken = getAttribute(character.id, battleTokenId);
    if (battleToken == selectedTokenId) {
        doLog("Battle Token Set");
    } else {

        doLog("Battle Token NOT Set");
    }

}

function turnOrderSet(turnOrder) {

// ReSharper disable once UseOfImplicitGlobalInFunctionScope
    Campaign().set('turnorder', JSON.stringify(turnOrder));
}
function turnOrderGet() {
    
    var turnOrder = Campaign().get(turnOrderString);
    if (turnOrder == "" || turnOrder == undefined)
        turnOrder = []; //NOTE: We check to make sure that the turnorder isn't just an empty string first. If it is treat it like an empty array.
    else {
        turnOrder = JSON.parse(turnOrder);
    }
    return turnOrder;
}
function setInitiativeAndTurnOrder(targetTokenId, targetInitiative) {
    if (targetTokenId == null) return;
    const turnOrder = turnOrderGet();

    const targetToken = getTokenFromId(targetTokenId);
    
    targetToken.set(bar1Value, targetInitiative);

    var doneSetInitiative = 0;

    for (let i = 0; i < turnOrder.length; i++) { // check to see if the token is in the turn order
        if (turnOrder[i].id == targetTokenId) {
            turnOrder[i].pr = targetInitiative; // set turnorder initiative
            doneSetInitiative = 1;
        }
    }

    if (doneSetInitiative == 0) {
        turnOrder.push({
            id: targetTokenId,
            pr: targetInitiative,
            _pageid: targetToken.get('pageid'),
        });
    }
    Campaign().set(turnOrderString, JSON.stringify(turnOrder)); // update  turnorder
}
function turnOrderReset() {
    Campaign().set('turnorder','[]');

    const turnOrder = turnOrderGet();

    createEndTurnMarker(turnOrder);
    doNotify("Turn order reset", "none");
}
function hasEndTurnMarker(turnOrder){
    'use strict';
    for(let i = 0; i < turnOrder.length; i++){
        if(turnOrder[i].id == "-1" && turnOrder[i].pr=="-99" && turnOrder[i].custom=="End Turn") return true;
    }
    return false;
}
function createEndTurnMarker(turnOrder){                           //Pushes an End Turn token to the turn order
    'use strict';                                 
    turnOrder.push({
        id: "-1",
        pr: "-99",
        custom: "End Turn"
    });

    Campaign().set(turnOrderString, JSON.stringify(turnOrder));
    return turnOrder;
}
function endTurn(turnOrder) {
    doLog("=========================- END TURN " + state.currentRound + "  -==========================");
    _.each(turnOrder,
        function(turnOrderItem) {
            if (turnOrderItem.id != "-1") { 
                
                const selectedToken =getTokenFromId( turnOrderItem.id);
                const characterId = selectedToken.get("represents");
                const character = getCharacterFromId(characterId);
                
                
                if (tokenCrashGet(selectedToken) > 0) {
                    if (turnOrderItem.pr > 0)
                        tokenCrashClear(selectedToken);
                    else
                        tokenCrashTickDown(selectedToken);
                }

                if (selectedToken != undefined && character != undefined) {
                    const tokenName = getNameFrom(selectedToken);
                    const isNinja = statusGetValue(selectedToken, status_ninja) != false;

                    let charCurrentMotes = parseInt(getAttribute(characterId,attrEssencePeripheral )) || 0;
                    let tokenAnimaLevel = parseInt(getTokenAnimaLevel(selectedToken )) || 0;
                    const charLastMotes = parseInt(getAttribute(characterId, attrLastTurnMotes)) || 0;
                    const charLastAnima = parseInt(getAttribute(characterId, attrLastTurnAnima)) || 0;
                    const diff = charLastMotes  - charCurrentMotes;
                    
                    const isPoisoned = statusGetValue(selectedToken, statusPoisoned) != false;
                    if (isPoisoned) {
                        doNotify(tokenName + " is poisoned!");
                    }

                    const isGrappled = statusGetValue(selectedToken, statusGrappled) != false;
                    if (isGrappled) {
                        doNotify(tokenName + " is grappled!");
                    }

                    if (!isNinja) {
                        if ((diff >= 5) && (tokenAnimaLevel == charLastAnima)) {
                            // Do increase
                            tokenAnimaLevel ++;
                            setTokenAnimaLevel(selectedToken, tokenAnimaLevel, null);
                        }
                    }

                    if (state.doAddMotesEndTurn)
                        charCurrentMotes = addMotes(state.playerMotesRegen, characterId);

                    setAttribute(attrLastTurnMotes, characterId, charCurrentMotes);
                    setAttribute(attrLastTurnAnima, characterId, tokenAnimaLevel);
                }
            }
        });

    let order = turnOrderGet();
    if (order.length) {
        order = _.sortBy(order, (t) => -parseInt(t.pr));
    }
    turnOrderSet(order);

    if (turnOrder[0].id != "-1") { //Custom token check
        const targetToken = getTokenFromId(turnOrder[0].id);
        //Remove onslaught from top initiative after sorting
        statusSetValue(targetToken, statusOnslaught, false);
        statusSetValue(targetToken, statusTempMiscPenalty, false);
        
    }
    if (isNaN(state.currentRound)) state.currentRound = 0;
    state.currentRound++;
    doNotify("Start of round " + state.currentRound);
}
function newTurn(turnOrder) {
    const targetToken = getTokenFromId(turnOrder[0].id);
    //Remove Onslaught when the turn order hits a token
    statusSetValue(targetToken, statusOnslaught, false)
    statusSetValue(targetToken, statusTempMiscPenalty, false);
}

//#endregion
//#region ESSENCE
function addMotes (motes, characterId) { //Generic algorithm for adding motes.
    const maxPeripheral = parseInt(getMaxMotesFromCharacterId(characterId, "peripheral-equation")) || 0;
    const committed = parseInt( getAttribute(characterId, "committedesstotal")) || 0;
    const maxPersonal = (parseInt(getMaxMotesFromCharacterId(characterId, "personal-equation")) || 0) - committed;
    const currentPersonal = parseInt(getAttribute(characterId, "personal-essence")) || 0;
    const currentPeripheral = parseInt(getAttribute(characterId, "peripheral-essence")) || 0;

    var remaining ;

    if ((currentPersonal + motes) >= maxPersonal) {
        const diff = maxPersonal - currentPersonal;
        remaining = motes - diff;
        setAttribute("personal-essence", characterId, maxPersonal);
    } else {
        remaining = 0;
        setAttribute("personal-essence", characterId, currentPersonal + motes);
    }
        
    if (remaining == 0) return currentPeripheral;

    if (currentPeripheral + remaining >= maxPeripheral) {
        setAttribute("peripheral-essence", characterId, maxPeripheral);
        return maxPeripheral;
    } else {
        setAttribute("peripheral-essence", characterId, currentPeripheral + remaining);
        return currentPeripheral + remaining;
    }
}
function doSpendEssence(msg, characterId, selectedToken, essenceType, alterValue) {
    if (alterValue <= 0) {
        doSendChat(msg.who, getNameFrom(selectedToken) + " cannot spend negative or zero essence");
        return;
    }
        
    alterValue = alterValue * -1;


    var currentMotes = 0;
    var setTargetValue = 0;
    var maximumMotes = 0;
    let currentPeripheral = parseInt(getAttribute(characterId, attrEssencePeripheral)) || 0;
    const maximumPeripheral = parseInt(getMaxMotesFromCharacterId(characterId, attrEquationPeripheral)) ||0;
    let currentPersonal = parseInt(getAttribute(characterId, attrEssencePersonal)) || 0;
    const committed = parseInt(getAttribute(characterId, attrCommittedEssence)) || 0;
    const maximumPersonal = (parseInt(getMaxMotesFromCharacterId(characterId, attrEquationPersonal)) || 0) - committed;
    
    const charLastMotes = parseInt(getAttribute(characterId, attrLastTurnMotes)) || 0;
    const charLastAnima = parseInt(getAttribute(characterId, attrLastTurnAnima)) || 0;

    if (maximumPeripheral == 0 && (maximumPersonal) == 0) {
        doSendChat(msg.who, getNameFrom(selectedToken) + " has no essence pool to change");
        return;
    }

    const isNinja = statusGetValue(selectedToken, status_ninja) != false;

    if (essenceType == essPeripheral) {
        // Affect bar1, @{peripheral-essence} attribute
        currentMotes = currentPeripheral;
        maximumMotes = maximumPeripheral;
        if (isNinja && alterValue < 0)
            alterValue -= 2;

        setTargetValue = currentMotes + alterValue;
    } else if (essenceType == essPersonal) {
        // Affect @{personal-essence} attribute only
        currentMotes = currentPersonal;
        maximumMotes = maximumPersonal;
        setTargetValue = currentMotes + alterValue;
    }

    var details = "";
    var templateRoll = "&{template:exalted3e_Roll}";
    templateRoll += " {{character-name=" + getNameFrom(selectedToken) + "}}";
    templateRoll += " {{essence-type=" + essenceType + "}}";
    if (alterValue < 0)
        templateRoll += " {{essence=Spend}}";
    else
        templateRoll += " {{essence=Gain}}";

    if (setTargetValue < 0) {
        details += MinusStyleSpan("CANNOT spend: " + Math.abs(alterValue) + " motes");
        details += " because they do not have enough " + MinusStyleSpan(essenceType + " essence") + " to spare";
        alterValue = 0;
        setTargetValue = currentMotes;
    }

    if (setTargetValue > maximumMotes) {
        setTargetValue = maximumMotes;
    }

    let currentBanner = getTokenAnimaLevel(selectedToken);

    let animaName = getAnimaName(currentBanner);

    if (essenceType == essPeripheral) {
        currentPeripheral = setTargetValue;
        const tokenBarNumber = 2;
        setAttribute(attrEssencePeripheral, characterId, setTargetValue);
        selectedToken.set("bar" + tokenBarNumber + "_value", setTargetValue);

        if (state.doDirectAnimaIncrease && Math.abs(alterValue) >= 5 && !isNinja) {
            currentBanner++;
            animaName = getAnimaName(currentBanner);
            setTokenAnimaLevel(selectedToken, currentBanner, msg);
        }
    } else {
        currentPersonal = setTargetValue;
        setAttribute(attrEssencePersonal, characterId, setTargetValue);
    }

    templateRoll += " {{currentPeripheral=" + currentPeripheral + "}}";
    templateRoll += " {{maximumPeripheral=" + maximumPeripheral + "}}";
    templateRoll += " {{currentPersonal=" + currentPersonal + "}}";
    templateRoll += " {{maximumPersonal=" + maximumPersonal + "}}";
    templateRoll += " {{committed=" + committed + "}}";
    templateRoll += " {{AlterValue=" + Math.abs(alterValue) + "}}";
    templateRoll += " {{anima-banner=" + animaName + "}}";

    if (maximumPeripheral != 0) {
        templateRoll += "{{lastTurnPeripheral=" + charLastMotes + "}}";
        const lastAnimaName = getAnimaName(charLastAnima);
        templateRoll += "{{lastTurnAnimaBanner=" + lastAnimaName + "}}";
    }
    if (isNinja && alterValue < 0)
        details += " (2 mote Ninja mode surcharge added)";

    templateRoll += " {{details=" + details + "}}";

    doSendChat(msg.who, templateRoll);
}

function setTokenPeripheralEssence(msg, characterId, selectedToken) {

}

function getAnimaName(animaLevel) {
    let animaName;
    switch (animaLevel) {
    case 0:
        animaName = "dim";
        break;
    case 1:
        animaName = "glowing";
        break;
    case 2:
        animaName = "burning";
        break;
    case 3:
        animaName = "bonfire/iconic";
        break;
    default:
        animaName = "none";
        break;
    }
    return animaName + " [" + animaLevel + "]";
}
function setTokenAnimaLevel(selectedToken, animaLevel, msg) {
    doLog("setTokenAnimaLevel");
    doLog(selectedToken);
    doLog(animaLevel);
    doLog("setTokenAnimaLevel -- params");
    let torchCmd;

    const storytellerPlayerId = "-Lfu4MUiu1j06WUuRZf_";

    const cmdLightOffnew =
        "!token-mod " +
            "--api-as " +  storytellerPlayerId  +
            " --set" +
            " has_bright_light_vision|on " + 
            " emits_bright_light|off" + 
            " bright_light_distance|0 " + 
            " emits_low_light|off" + 
            " low_light_distance|0 " + 
            " has_night_vision|on " + 
            " night_vision_distance|6" + 
            " night_vision_tint|9900ff" + 
            " night_vision_effect|nocturnal" + 
            " compact_bar|on" + 
            " showname|off " + 
            " bar_location|overlap_bottom" + 
            " statusmarkers|-aura" + 
            " light_multiplier|1" + 
            " --ids" +
            " " + selectedToken.id 
            ;


    const cmdLightGlowingnew =
        "!token-mod " +
            "--api-as " +  storytellerPlayerId  +
            " --set" +
            " has_bright_light_vision|on " + 
            " emits_bright_light|on" + 
            " bright_light_distance|1 " + 
            " emits_low_light|on" + 
            " low_light_distance|4 " + 
            " has_night_vision|off " + 
            " compact_bar|on" + 
            " showname|off " + 
            " bar_location|overlap_bottom" + 
            " statusmarkers|aura:1" + 
            " light_multiplier|1" + 
            " --ids" +
            " " + selectedToken.id 
            ;

    const cmdLightBurningnew =
        "!token-mod " +
            "--api-as " +  storytellerPlayerId  +
            " --set " +
            " has_bright_light_vision|on " + 
            " emits_bright_light|on" + 
            " bright_light_distance|8 " + 
            " emits_low_light|on" + 
            " low_light_distance|12 " + 
            " has_night_vision|off " + 
            " compact_bar|on" + 
            " showname|off " + 
            " bar_location|overlap_bottom" + 
            " statusmarkers|aura:2" + 
            " light_multiplier|1" + 
            " --ids" +
            " " + selectedToken.id  ;

    const cmdLightBonfirenew =
        "!token-mod " +
            "--api-as " +  storytellerPlayerId  +
            " --set " +
            " has_bright_light_vision|on " + 
            " emits_bright_light|on" + 
            " bright_light_distance|20 " + 
            " emits_low_light|on" + 
            " low_light_distance|45" + 
            " has_night_vision|off " + 
            " compact_bar|on" + 
            " showname|off " + 
            " bar_location|overlap_bottom" + 
            " statusmarkers|aura:3" + 
            " light_multiplier|1" + 
            " --ids" +
            " " + selectedToken.id  ;

    //const cmdLightOff  = "!token-mod {{" +
    //"--set " +
    //"light_radius| " + 
    //    "light_dimradius| " +
    //    "light_multiplier| " +
    //    " --on " +
    //" light_otherplayers " +
    //" light_hassight " +
    //" showplayers_bar1 " +
    //" --off showname " + 
    //" --ids " +
    //" " + selectedToken.id +
    //"}}";

    //const cmdLightGlowing  = "!token-mod {{" +
    //    "--set " +
    //    "light_radius|5 " + 
    //    "light_dimradius|-1 " +
    //    "light_multiplier| " +
    //    " --on " +
    //    " light_otherplayers " +
    //    " light_hassight " +
    //    " showplayers_bar1 " +
    //    " --off showname " + 
    //    " --ids " +
    //    " " + selectedToken.id +
    //    "}}";

    //const cmdLightIconic  = "!token-mod {{" +
    //    "--set " +
    //    "light_radius|10 " + 
    //    "light_dimradius|8 " +
    //    "light_multiplier| " +
    //    " --on " +
    //    " light_otherplayers " +
    //    " light_hassight " +
    //    " showplayers_bar1 " +
    //    " --off showname " + 
    //    " --ids " +
    //    " " + selectedToken.id +
    //    "}}";

    //const cmdLightBonfire  = "!token-mod {{" +
    //    "--set " +
    //    "light_radius|30 " + 
    //    "light_dimradius|25 " +
    //    "light_multiplier| " +
    //    " --on " +
    //    " light_otherplayers " +
    //    " light_hassight " +
    //    " showplayers_bar1 " +
    //    " --off showname " + 
    //    " --ids " +
    //    " " + selectedToken.id +
    //    "}}";
    doLog("animaLevel");
    doLog(animaLevel);

    animaLevel = parseInt(animaLevel) || 0;

    const animaName = getAnimaName(animaLevel);
    switch (animaLevel) {
        case false:
        case 0:
                statusSetValue(selectedToken, statusAnima, false);
            torchCmd = cmdLightOffnew;
            break;
        case true:
        case 1:
            statusSetValue(selectedToken, statusAnima, true);
            torchCmd = cmdLightGlowingnew;
            break;
        case 2:
            statusSetValue(selectedToken, statusAnima, 2);
            torchCmd = cmdLightBurningnew;
            break;
        case 3:
        default:
            statusSetValue(selectedToken, statusAnima, 3);
            torchCmd = cmdLightBonfirenew;
            break;
    }
    
    const characterId = selectedToken.get("represents");
    doLog("characterId");
    doLog(characterId);
    doNotify(getNameFrom(selectedToken) + " is now at " + animaName);
    sendChat("storyteller", torchCmd);
    
}
function getTokenAnimaLevel(token) {
    const auraLevel = statusGetValue(token, statusAnima);

    if (auraLevel == false) return 0;
    if (auraLevel == true) return 1;

    return parseInt(auraLevel);
}

function getTokenAimLevel(token) {
    doLog("getTokenAimLevel");
    if (!token || token == null) return 0;
    try {
        const aimLevel = statusGetValue(token, statusAim);

        if (aimLevel == false) return 0;
        if (aimLevel == true) return 1;

        return parseInt(aimLevel);
    }
    catch (err) {
        doLog("err");
        doLog(err);
        return 0;
    }
}
function setTokenAimLevel(selectedToken, aimLevel) {
    switch (aimLevel) {
    case false:
    case 0:
            statusSetValue(selectedToken, statusAim, false);
        break;
    case true:
    case 1:
            statusSetValue(selectedToken, statusAim, true);
        break;
    case 2:
            statusSetValue(selectedToken, statusAim, 2);
        break;
    case 3:
    default:
            statusSetValue(selectedToken, statusAim, 3);
        break;
    }

    doNotify(getNameFrom(selectedToken) + " is now at aim level " + aimLevel);
}
//#endregion
//#region CHARACTER ACTIONS MENU
function generateCharacterActionMenu(msg, command) {
    const params = getParametersFromCommand(msg, command);
    if (params.length == 1) {
        // params = [params[0],1,1,1,0,1,0,0,0]
        params.push(1);
        params.push(1);
        params.push(1);
        params.push(0);
        params.push(1);
        params.push(0);
    }
    const characterId = params[0];
    const showAbilities = parseInt(params[1]) || 0;
    const showCombat = parseInt(params[2]) || 0;
    const showWeapons = parseInt(params[3]) || 0;
    const showSorcery = parseInt(params[4]) || 0;
    const showMisc = parseInt(params[5]) || 0;
    const showTokenActions = parseInt(params[6]) || 0;
    let showNavalActions = 0;
    if (params.length>6)
        showNavalActions = parseInt(params[7]) || 0;

    if (characterId == "") {
        doNotify("characterId is Empty");
        return null;
    }
    doLog("characterId");
    doLog(characterId);
    const character = getCharacterFromId(characterId);
    const isQc = (parseInt(getAttribute(characterId, "qc")) != 0);
    //const isQcUnique = (parseInt(getAttribute(characterId, qcIsIndividual)) || 0) !=0;
    const isBattlegroup = (parseInt(getAttribute(characterId, "battlegroup")) || 0) !=0;
    const attributeSelector = "?{Attribute|Strength,Strength|Dexterity,Dexterity|Stamina,Stamina|Charisma,Charisma|Manipulation,Manipulation|Appearance,Appearance|Perception,Perception|Intelligence,Intelligence|Wits,Wits}";
    const abilitySelector =
// ReSharper disable StringLiteralTypo
        "?{Ability|Archery,archery|Athletics,athletics|Awareness,awareness|Brawl,brawl|Bureaucracy,bureaucracy|Craft: Armoring,craftarmoring|Craft: Artifact,craftartifact|Craft: Cooking,craftcooking|Craft: First Age Artifice,craftartifice|Craft: Gemcutting,craftgemcutting|Craft: Geomancy,craftgeomancy|Craft: Jewelry,craftjewelry|Craft: Tailoring,crafttailoring|Craft: Weapon Forging,craftforging|Dodge,dodge|Integrity,integrity|Investigation,investigation|Larceny,larceny|Linguistics,linguistics|Lore,lore|MA: Black Claw Style,maclaw|MA: Crane Style,macrane|MA: Dreaming Pearl Courtesan Style,mapearl|MA: Ebon Shadow Style,maebon|MA: Righteous Devil Style,madevil|MA: Silver-Voiced Nightingale Style,manightingale|MA: Single Point Shining Into the Void Style,mavoid|MA: Snake Style,masnake|MA: Steel Devil Style,masteel|MA: Tiger Style,matiger|MA: White Reaper Style,mareaper|MA: Immaculate Air Dragon Style,maairdragon|MA: Immaculate Fire Dragon Style,mafiredragon|MA: Immaculate Earth Dragon Style,maearthdragon|MA: Immaculate Water Dragon Style,mawaterdragon|MA: Immaculate Wood Dragon Style,mawooddragon|Medicine,medicine|Melee,melee|Occult,occult|Performance,performance|Presence,presence|Resistance,resistance|Ride,ride|Sail,sail|Socialize,socialize|Stealth,stealth|Survival,survival|Thrown,thrown|War,war}";
// ReSharper restore StringLiteralTypo
    const limitDiceRoll = "?{Limit Stress Dice|1,1|2,2|3,3}";
    const fixedParameters = sep + characterId + sep + poolModifierSelector;
    const limitParameters = sep + characterId + sep + limitDiceRoll;
    
    const essenceTypeSelector = "?{Essence Pool|Peripheral|Personal}";
    const essenceAmountSelector = "?{Essence Amount|1,1|2,2|3,3|4,4|5,5|6,6|7,7|8,8|9,9|10,10|11,11|12,12|13,13|14,14|15,15|16,16|17,17|18,18|19,19|20,20}";
    const essenceSpendCharParameters = characterId + sep + essenceTypeSelector + sep + essenceAmountSelector;
    const essenceSpendTokenParameters =  htmlTargetTokenId + sep + essenceTypeSelector + sep + essenceAmountSelector;

    doLog("make buttons: 1:"  + showAbilities + "-" + !isQc);
    const buttonItems = [];
    if (showAbilities===1 && !isQc) {
        buttonItems.push("<h3" + charMenuHeaderStyle + ">Abilities</h3>");
        buttonItems.push("<div class='chatButtonsFlexGroup' style='display:flex;flex-wrap:wrap;justify-content:space-between;'>");
        buttonItems.push(createChatIconButton("!exr " + cmdJoinBattleCharacter + " " + characterId + sep + "0" + sep + "0" , "🗡","join battle","Join Battle Roll"));
        buttonItems.push(createChatIconButton("!exr " + cmdSkillCheckChar + " " + characterId + sep + attributeSelector + sep + abilitySelector + sep + poolModifierSelector + sep + "Skill Check", "🧠", "ability", "Roll an ability + attribute combination"));
        buttonItems.push(createChatIconButton("!exr " + cmdCharacterActions + " " + actionStealth + fixedParameters, "👤", "stealth", "[Dexterity] + [Stealth]"));
        buttonItems.push(createChatIconButton("!exr " + cmdCharacterActions + " " + actionDodge + fixedParameters, "🤸🏻", "dodge", "[Dexterity] + [Dodge]"));
        buttonItems.push(createChatIconButton("!exr " + cmdCharacterActions + " " + actionAthleticsStrength + fixedParameters, "💪","athletics","[Athletics] + [Strength]"));
        buttonItems.push(createChatIconButton("!exr " + cmdCharacterActions + " " + actionAthleticsDexterity + fixedParameters, "🤾‍","athletics","[Athletics] + [Dexterity]"));
        buttonItems.push(createChatIconButton("!exr " + cmdCharacterActions + " " + actionAthleticsStamina + fixedParameters, "🧗","athletics","[Athletics] + [Stamina]"));
        buttonItems.push(createChatIconButton("!exr " + cmdCharacterActions + " " + actionSurvivalStamina + fixedParameters, "🧭","survival","[Survival] + [Stamina]"));
        buttonItems.push(createChatIconButton("!exr " + cmdCharacterActions + " " + actionStaminaResistance + fixedParameters, "❤️","resistance","[Resistance] + [Stamina]"));
        buttonItems.push("</div>");
    }

    doLog("make buttons: 2:"  + showAbilities);
    // QC ACTIONS MENU
    if (showAbilities === 1 && isQc) {
        doLog("make buttons: 2.1:");
        buttonItems.push("<h3" + charMenuHeaderStyle + ">Actions</h3>");
        doLog("make buttons: 2.2:");
        const qcActionItems = getAttribute(characterId, "qcActionScript");
        doLog("make buttons: 2.3:");
        const itemsArray = qcActionItems.split("~~~~");
        doLog("make buttons: 2.4:");
        let btn = createChatIconButton("!exr " + cmdJoinBattleCharacter + " " + characterId + sep + "0" + sep + "0" , "🔪","join battle","Join Battle Roll");
        doLog("make buttons: 2.5:" + btn);
        buttonItems.push(btn);
// ReSharper disable once UseOfImplicitGlobalInFunctionScope
// ReSharper disable once PossiblyUnassignedProperty
        _.each(itemsArray, function actionItemButtonMaker(actionItem) {
            if (actionItem == null || actionItem.length == 0) return;

            const itemValues = actionItem.split(sep);
            const commandActionItem = "!exr qcRoll " + characterId + sep + poolModifierSelector + sep + itemValues[0] + sep + itemValues[1] + sep + sep + "#" + itemValues[2];
            const commandButton = createChatButton(commandActionItem, "⚡️" + itemValues[0]);
            buttonItems.push(commandButton);
        });
    }
    doLog("make buttons: 3:"  + showCombat + "-" + !isQc);
    if (showCombat===1  && !isQc) {
        buttonItems.push("<h3" + charMenuHeaderStyle + ">Combat</h3>");
        doLog("make buttons: 3.1:" + cmdCharacterActions);
        doLog("make buttons: 3.1:" + actionCombatRush);
        doLog("make buttons: 3.1:" + fixedParameters);
        let btn = createChatIconButton("!exr " + cmdCharacterActions + " " + actionCombatRush + fixedParameters, "🤼", "rush", "Rush");
        doLog("make buttons: 3.2:");
        buttonItems.push(btn);
        doLog("make buttons: 3.3:");
        btn = createChatIconButton("!exr " + cmdCharacterActions + " " + actionCombatDisengage + fixedParameters, "👣", "disengage", "Disengage");
        doLog("make buttons: 3.4:");
        buttonItems.push(btn);
        doLog("make buttons: 3.5:");
        btn = createChatIconButton("!exr " + cmdCharacterActions + " " + actionCombatAim + fixedParameters, "🎯", "aim", "Aim Action");
        doLog("make buttons: 3.6:");
        buttonItems.push(btn);
        doLog("make buttons: 3.7:");
    }

    doLog("make buttons: 4:"  + showAbilities + "-" + isQc);
    // QC ATTACKS MENU
    if (showCombat===1  && isQc) {
        buttonItems.push("<h3" + charMenuHeaderStyle + ">Attacks (QC)</h3>");
        doLog("make buttons: 4.1:");
        const qcWeaponItems = getAttribute(characterId, "qcWeaponScript");
        const wpnItemsArray = qcWeaponItems.split("~~~~");
        doLog("make buttons: 4.2:");
        if (!isBattlegroup)
        {
            doLog("make buttons: 4.3:");
// ReSharper disable UseOfImplicitGlobalInFunctionScope
// ReSharper disable PossiblyUnassignedProperty
            _.each(wpnItemsArray, function actionItemButtonMaker(weaponItem) {
// ReSharper restore PossiblyUnassignedProperty
// ReSharper restore UseOfImplicitGlobalInFunctionScope

                if (weaponItem == null || weaponItem.length == 0) return;
                doLog("make buttons: 4.4:");
                const itemValues = weaponItem.split(sep);
                const attackName = itemValues[0];
                const attackDice = itemValues[1];
                const attackDamage = itemValues[2];
                const diceCommand = itemValues[3];
                const commandActionItem = "!exr qcAttack " + characterId + sep + poolModifierSelector + sep + attackName + sep + attackDice + sep + attackDamage + sep + htmlTargetTokenId + sep + htmlSelectedTokenId + sep + "#" + diceCommand;

                const commandButton = createChatButton(commandActionItem, "👹" + itemValues[0]);
                buttonItems.push(commandButton);
            });
        }
        else{
            doLog("make buttons: 4.5:");
// ReSharper disable UseOfImplicitGlobalInFunctionScope
// ReSharper disable PossiblyUnassignedProperty

            _.each(wpnItemsArray, function actionItemButtonMaker(weaponItem) {
                if (weaponItem == null || weaponItem.length == 0) return;
                doLog("make buttons: 4.6:");

                
                let bgSize = 0; // parseInt(getAttribute(characterId, "battlegroup-size")) || 0;
                const bgMight = parseInt(getAttribute(characterId, "battlegroup-might")) || 0;
                
           _.chain(msg.selected)
                .map(function(o){
                    return getObj('graphic',o._id);
                })
                .compact()
                .each(function(t){
                    var token = getObj('graphic',t.id);
                        bgSize = parseInt(token.get(bar2Value)) || 0;
                });
                // TODO: THIS BIT

                doLog("make buttons: 4.7:");
                doLog("weaponitem");
                doLog(weaponItem);
                const itemValues = weaponItem.split(sep);
                const attackName = itemValues[0];
                const attackDice = (parseInt(itemValues[1]) || 0)   + bgSize + bgMight;
                const attackDamage = (parseInt(itemValues[2]) || 0)   + bgSize + bgMight;
                const diceCommand = itemValues[3];
                const commandActionItem = "!exr qcAttack " + characterId + sep + poolModifierSelector + sep +"Withering " +  attackName + sep + attackDice   + sep + attackDamage + sep + "B" + sep + "#" + diceCommand;
                doLog("make buttons: 4.8:");
                //|Withering @{repqcattackname} Attack|@{repqcattackdice}+@{battlegroup-might}+@{battlegroup-size}|(@{repqcattackdamage}+@{battlegroup-might}+@{battlegroup-size})|B|#@{repqcattackdicecommand}">B</button>
                const commandButton = createChatButton(commandActionItem, "👹" + attackName);
                doLog("make buttons: 4.9:");
                buttonItems.push(commandButton);
            });
        }
    }

    doLog("make buttons: 5:"  + showAbilities + "-" + isQc);
    if (showWeapons===1 && !isQc) {
        buttonItems.push("<h3" + charMenuHeaderStyle + ">Equipped Weapons</h3>");
        const wsItems = getAttribute(characterId, "weaponScriptItems") || '';
        const wsItemsW = getAttribute(characterId, "weaponScriptW") || '';
        const wsItemsD = getAttribute(characterId, "weaponScriptD") || '';
        
        doLog("make buttons: 5.1:"  + wsItems);
        doLog("make buttons: 5.1.1:"  + wsItemsW);
        doLog("make buttons: 5.1.2:"  + wsItemsD);

        if (wsItems != null && wsItems.length > 0) {
            const wsArray = wsItems.split("~~~~");
            const weaponsArrayW = wsItemsW.split("~~~~");
            const weaponsArrayD = wsItemsD.split("~~~~");
            // value="!exr attackChar @{character_id}|?{Modifier|0}|Withering|@{repweaponability}|@{repweaponName}|@{repweaponacc}|@{repweapondam}|@{repweapondef}|@{repweaponov}|@{repweapontags}|@{target|token_id}|"

            doLog(wsArray);
            doLog("make buttons: 5.2:"  + wsArray.toString());
            doLog(weaponsArrayW);
            doLog("make buttons: 5.2.1:"  + weaponsArrayW.toString());
            doLog(weaponsArrayD);
            doLog("make buttons: 5.2.2:"  + weaponsArrayD.toString());
            let itemIndex = 0;
            _.each(wsArray,
                function(weaponItem) {
                    if (weaponItem == null || weaponItem.length == 0) return;

                    doLog("make buttons: 5.3:" + weaponItem);
                    const itemValues = weaponItem.split(sep);
                    const weaponName = itemValues[0];
                    const wpnAbility = itemValues[1];
                    let wpnIcon = "🤜";
                    if (wpnAbility == "Archery") wpnIcon = "🏹";
                    if (wpnAbility == "Melee") wpnIcon = "🤺";
                    if (wpnAbility == "Thrown") wpnIcon = "🥏";
                    if (wpnAbility == "Brawl") wpnIcon = "🥊";

                    doLog("make buttons: 5.4:" + wpnAbility);
                    const weaponScriptW = "!exr " + cmdAttackFromCharacterSheetDex + " " + characterId + sep + poolModifierSelector + sep + weaponsArrayW[itemIndex] + sep + htmlTargetTokenId + sep;
                    const weaponScriptD = "!exr " + cmdAttackFromCharacterSheetDex + " " + characterId + sep + poolModifierSelector + sep + weaponsArrayD[itemIndex] + sep + htmlTargetTokenId + sep;

                    doLog("make buttons: 5.5:" + weaponScriptW);
                    doLog("make buttons: 5.6:" + weaponScriptD);
                    const iconRow = createWeaponIconButtonRow(weaponScriptW, weaponScriptD, wpnIcon, weaponName, " attack with " + weaponName + "(" + wpnAbility + ")", wpnAbility);
                    doLog("make buttons: 5.7:" + iconRow);
                    buttonItems.push(iconRow);
                    doLog("make buttons: 5.8:");
                    itemIndex++;
                });
        } else {
            buttonItems.push("<h5" + charMenuHeaderStyle + ">No weapons equipped!</h5>");
        }
    }

    doLog("make buttons: 6:"  + showSorcery);
    if (showSorcery===1) {
        buttonItems.push("<h3" + charMenuHeaderStyle + ">Sorcery</h3>");
        doLog("make buttons: 6.1:");
        const currentValue = parseInt(getAttribute(characterId, "smTarget")) || 0;
        const targetValue = parseInt(getAttributeMax(characterId, "smTarget")) || 0;
        const currentSpell = getAttribute(characterId, "targetSpellName");
        doLog("make buttons: 6.2:");
        if (currentSpell) {
            buttonItems.push("<h5 class='sheet-darkText'>" + currentSpell + " [" + currentValue + "/" + targetValue + "]</h5>");
            buttonItems.push(createChatIconButton("!exr " + cmdCharacterActions + " " + actionSorceryShape + fixedParameters, "🧙", "shaping", "Shape sorcery"));
            buttonItems.push(createChatIconButton("!exr " + cmdCharacterActions + " " + actionSorcerySetSM + fixedParameters, "🌀", "set sm", "Set sorcerous motes"));
            buttonItems.push(createChatIconButton("!exr " + cmdCharacterActions + " " + actionSorceryClear + sep + characterId, "💫", "clear", "Clear current spell target"));
        } else {
            buttonItems.push("<h5>No shaping spell set</h5>");
        }
        doLog("make buttons: 6.3:");
        let wpnIcon = "☄️";
        let weaponName = "Occult Attack";
        doLog("make buttons: 6.4:");
        const occWpnItemW = attackTypeWithering + "|Occult|" + weaponName + "|4|7|0|0|1|Lethal, Thrown(short), Mounted";
        const occWpnItemD = attackTypeDecisive + "|Occult|" + weaponName + "|4|7|0|0|1|Lethal, Thrown(short), Mounted";
        doLog("make buttons: 6.5:");

        const occultWpnScriptW = "!exr " + cmdAttackFromCharacterSheetInt + " " + characterId + sep + poolModifierSelector + sep + occWpnItemW + sep + htmlTargetTokenId + sep;
        doLog("make buttons: 6.6:");
        const occultWpnScriptD = "!exr " + cmdAttackFromCharacterSheetInt + " " + characterId + sep + poolModifierSelector + sep + occWpnItemD + sep + htmlTargetTokenId + sep;
        const iconRow = createWeaponIconButtonRow(occultWpnScriptW, occultWpnScriptD, wpnIcon, weaponName, " attack with " + weaponName + "(" + abiOccult + ")", abiOccult);
        doLog("make buttons: 6.7:");
        buttonItems.push(iconRow);
    }

    doLog("make buttons: 7:"  + showMisc);
    // MISC ACTIONS
    if (showMisc===1)
    {
        buttonItems.push("<h3" + charMenuHeaderStyle + ">Others</h3>");
        buttonItems.push(createChatIconButton("!exr " + cmdEssenceSpendCharacter + " " +  essenceSpendCharParameters, "🀄️","essence","Spend Essence"));
        buttonItems.push(createChatIconButton("!exr " + cmdCharacterActions + " " + actionWillpower + sep + characterId, "⚜️","willpower","Willpower"));
        buttonItems.push(createChatIconButton("!exr " + cmdCharacterActions + " " + actionLimitCheck + limitParameters, "🙀","limit","Limit Stress Roll"));
    }

    doLog("make buttons: 8:"  + showTokenActions);
    // TOKEN ACTIONS (NOT USED?)
    if (showTokenActions===1) {
        buttonItems.push("<h3" + charMenuHeaderStyle + ">Token actions</h3>");
        buttonItems.push(createChatIconButton("!exr " + cmdJoinBattle + " " + targetTokenId  + sep + "0" + sep + "0", "🔪","token","Join Battle Roll"));
        buttonItems.push(createChatIconButton("!exr " + cmdEssenceSpendToken + " " + essenceSpendTokenParameters, "🀄️","token","Spend Essence"));
    }

    doLog("make buttons: 8:"  + showNavalActions);
    // NAVAL ACTIONS
    if (showNavalActions==1) {
        const rangeSelector = "?{Range|Short,0|Medium,1|Long,2}";

        buttonItems.push("<h3" + charMenuHeaderStyle + ">Naval actions</h3>"); 

        buttonItems.push(createChatIconButton("!exr " + cmdNaval + " " + actionNavalPosition + sep + characterId + sep + poolModifierSelector+ sep + rangeSelector, "⛵️","position","Positioning"));

        buttonItems.push(createChatIconButton("!exr " + cmdNaval + " " + actionNavalBroadside + sep + characterId+ sep + poolModifierSelector, "💣","broadside","Broadside (attack vessel)"));
        buttonItems.push(createChatIconButton("!exr " + cmdNaval + " " + actionNavalVolley + sep + characterId + sep + poolModifierSelector + sep + rangeSelector, "🏹","volley","Volley (attack crew)"));
        buttonItems.push(createChatIconButton("!exr " + cmdNaval + " " + actionNavalRam + sep + characterId+ sep + poolModifierSelector, "💥","ram","Ram the enemy"));
        buttonItems.push(createChatIconButton("!exr " + cmdNaval + " " + actionNavalBoard + sep + characterId+ sep + poolModifierSelector, "⚔️","boarding","Board the enemy"));

        buttonItems.push(createChatIconButton("!exr " + cmdNaval + " " + actionNavalEscape + sep + characterId + sep + poolModifierSelector, "💨","escape","Escape"));
        buttonItems.push(createChatIconButton("!exr " + cmdNaval + " " + actionNavalConceal + sep + characterId + sep + poolModifierSelector, "⛵️","conceal","Concealment"));
        buttonItems.push(createChatIconButton("!exr " + cmdNaval + " " + actionNavalPursuit + sep + characterId + sep + poolModifierSelector, "🌬","pursuit","Pursuit"));
        buttonItems.push(createChatIconButton("!exr " + cmdNaval + " " + actionNavalSubmerge + sep + characterId + sep + poolModifierSelector, "⛵️","submerge","Prepare for submerging"));

        buttonItems.push(createChatIconButton("!exr " + cmdNaval + " " + actionNavalDouseFlame + sep + characterId + sep + poolModifierSelector, "🧯","douse","Douse Flames"));
        buttonItems.push(createChatIconButton("!exr " + cmdNaval + " " + actionNavalEscortVessel + sep + characterId + sep + poolModifierSelector, "🛡","escort","Cover Escort Vessel"));
        buttonItems.push(createChatIconButton("!exr " + cmdNaval + " " + actionNavalSignal + sep + characterId + sep + poolModifierSelector, "⛵️","signal","Signal Orders to fleet"));
    }

    doLog("make buttons: 9:");
// ReSharper disable once UseOfImplicitGlobalInFunctionScope
    const btnRow = _.reduce(buttonItems, function(memo, num) { return memo + num; });
    const player = getPlayerFromId(msg.playerid);

    var selectedBattleTokenId;
    var selectedToken;
    
    if (characterId != null) {
        selectedBattleTokenId = getAttribute(characterId, battleTokenId);
        doLog("selectedBattleTokenId");
        doLog(selectedBattleTokenId);
    }

    if (selectedBattleTokenId != null) {
        try {
            selectedToken = getTokenFromId(selectedBattleTokenId);
            doLog("selectedToken");
            doLog(selectedToken);
        } catch (err) {
            doLog(err);
        }
    }

    var displayName = getNameFrom(character);

    if (selectedToken != null) {
        displayName = getNameFrom(selectedToken);
    }

    doLog("make buttons: 10:");
    let buttonTemplate = "/w " + player.get("displayname");
    buttonTemplate += " &{template:exalted3e_Roll}";
    buttonTemplate += " {{character-name=" + displayName + "}}";
    buttonTemplate += " {{buttons=" + btnRow + "}}";

    doLog("make buttons: 11:");
    doSendChat(msg.who, buttonTemplate);

    doLog("make buttons: 12:");
    return buttonTemplate;
}
function createWeaponIconButtonRow(commandTextW, commandTextD, displayIcon, displayText, tooltip, abilityName) {
    const button = 
        "<div style='text-align:center;white-space:normal;border: 1px solid #000000;border-radius: 8px;padding-bottom:3px;margin-bottom:3px;margin-right:20px'>" + displayIcon +  displayText + "[" + abilityName +  "]<br/>"
            + "<a href = '" + commandTextW + "' style='" + weaponIconButtonStyle +  "' data-toggle = '" + tooltip + "' title = '" + "Withering"+  tooltip + "' alt='" + tooltip + "'>" 
            + "<span style='font-size:0.8vw;white-space:normal;font-variant: small-caps;'>Withering </span>" 
            + "</a>" 
            + "<a href = '" + commandTextD + "' style='" + weaponIconButtonStyle +  "' data-toggle = '" + tooltip + "' title = '" + "Decisive" + tooltip + "' alt='" + tooltip + "'>" 
            + "<span style='font-size:1vw;white-space:normal;font-variant: small-caps;'>Decisive</span>" 
            + "</a>" 
            + "</div>";
    return button;
}
function doNavalAction(msg, abilityCommand, characterId, dicePoolModifier, params) {
    const character = getCharacterFromId(characterId);
    const player = getPlayerFromId(msg.playerid);

    const characterVesselId = getAttribute(characterId, attrNavalVesselId);
    if (!characterVesselId || characterVesselId.length == 0) {
        doNotify(getNameFrom(character) + " has not been assigned a naval vessel");
        return;
    }

    const characterVessel = getCharacterFromId(characterVesselId);
    if (!characterVessel) {
        doNotify(getNameFrom(character) + " assigned naval vessel not found");
        return;
    }

    doLog("doNavalAction");
    doLog(params);
    const range = (parseInt(params[3]) || 0);
    
    const fireLevel = (parseInt(getAttribute(characterVesselId, "qc-fireLevel")) || 0);
    const manoeuvre = (parseInt(getAttribute(characterVesselId, "qc-navalMan")) || 0);
    const speed = getAttribute(characterVesselId, "qc-navalSpeed");

    doLog("doNavalAction: 2");
    const costPosition = 0;
    const costBroadside = 5;
    const costEscape = 12;
    const costRam = 7;
    const costConceal = 2;
    const costPursuit = 0;
    const costDouseFlame = 0;
    const costEscortVessel = 0;
    const costSignal = 0;
    const costSubmerge = 0;
    const costVolley = (5 + range);
    const costBoard = 8;

    doLog("abilityCommand: " + abilityCommand);
    //TODO: NAVAL ACTIONS
    switch (abilityCommand) {
    case actionNavalPosition:
        navalSkillCheck(msg, player, character, characterId, characterVessel, characterVesselId, attrWits, abiSail, "Positioning", dicePoolModifier,  manoeuvre, speed, fireLevel, range, costPosition);
        break;
    case actionNavalBroadside:
        navalSkillCheck(msg, player, character, characterId, characterVessel, characterVesselId, attrWits, abiSail, "Broadside", dicePoolModifier,  manoeuvre, speed, fireLevel, range, costBroadside);
        break;
    case actionNavalVolley:
        navalSkillCheck(msg, player, character, characterId, characterVessel, characterVesselId, attrWits, abiSail, "Volley", dicePoolModifier,  manoeuvre, speed, fireLevel, range, costVolley);
        break;
    case actionNavalEscape:
        navalSkillCheck(msg, player, character, characterId, characterVessel, characterVesselId, attrWits, abiSail, "Escape", dicePoolModifier,  manoeuvre, speed, fireLevel, null, costEscape);
        break;
    case actionNavalRam:
        navalSkillCheck(msg, player, character, characterId, characterVessel, characterVesselId, attrWits, abiSail, "Ramming", dicePoolModifier,  manoeuvre, speed, fireLevel, null, costRam);
        break;
    case actionNavalConceal:
        navalSkillCheck(msg, player, character, characterId, characterVessel, characterVesselId, attrWits, abiSail, "Concealment", dicePoolModifier,  manoeuvre, speed, fireLevel, null, costConceal);
        break;
    case actionNavalPursuit:
        navalSkillCheck(msg, player, character, characterId, characterVessel, characterVesselId, attrWits, abiSail, "Pursuit", dicePoolModifier,  manoeuvre, speed, fireLevel, null, costPursuit);
        break;
    case actionNavalDouseFlame:
        navalSkillCheck(msg, player, character, characterId, characterVessel, characterVesselId, attrWits, abiSail, "Pursuit", dicePoolModifier,  manoeuvre, speed, fireLevel, null, costDouseFlame);
        break;
    case actionNavalEscortVessel:
        navalSkillCheck(msg, player, character, characterId, characterVessel, characterVesselId, attrWits, abiSail, "Escort Vessel", dicePoolModifier,  manoeuvre, speed, fireLevel, null, costEscortVessel);
        break;
    case actionNavalSignal:
        navalSkillCheck(msg, player, character, characterId, characterVessel, characterVesselId, attrIntelligence, abiWar, "Signal Orders", dicePoolModifier,  manoeuvre, speed, fireLevel, null, costSignal);
        break;
    case actionNavalSubmerge:
        navalSkillCheck(msg, player, character, characterId, characterVessel, characterVesselId, attrWits, abiSail, "Submerge", dicePoolModifier,  manoeuvre, speed, fireLevel, null, costSubmerge);
        break;
    case actionNavalBoard:
        navalSkillCheck(msg, player, character, characterId, characterVessel, characterVesselId, attrWits, abiSail, "Boarding Action", dicePoolModifier,  manoeuvre, speed, fireLevel, null, costBoard);
        break;
    default:
            doNotify(getNameFrom(player) + " - unhandled character action: " + abilityCommand);
        break;
    }
}
function navalSkillCheck(msg, player, character, characterId, vessel, vesselId, attributeName, abilityName, checkDescription, dicePoolMod, manoeuvre, speed, fireLevel, range, cost) {
    doLog("navalSkillCheck");

    const attributeValue = parseInt(getAttribute(characterId, attributeName)) || 0;
    const abilityValue = parseInt(getAttribute(characterId, abilityName)) || 0;
    const woundPenalty = parseInt(getTotalDicePoolModifiers(null, characterId)) || 0;
    
    
    const vesselWoundPenalty = parseInt(getTotalDicePoolModifiers(null, vesselId)) || 0;
    const dicePoolTotal = attributeValue + abilityValue + dicePoolMod + woundPenalty + vesselWoundPenalty;

    let initiative = (parseInt(getAttribute(vesselId, "initiative")) || 0);

    initiative = initiative - cost;

    const rollStr = '/roll ' + dicePoolTotal + diceRollMacro;
    var templateRoll = "";

    templateRoll += "&{template:exalted3e_Roll}";
    templateRoll += " {{skillRoll=1}}";
    templateRoll += " {{information=" + checkDescription + "}}";
    templateRoll += " {{character-name=" + getNameFrom(character) + "<br/>Aboard: [" + getNameFrom(vessel) + "]}}";
    templateRoll += " {{attribute-name=" + attributeName + "}} {{attribute-value=" + attributeValue + "}}";
    templateRoll += " {{skill-name=" + abilityName + "}} {{skill-value=" + abilityValue + "}}";
    templateRoll += " {{dice-modifier=" + dicePoolMod + "}}";
    templateRoll += " {{player-color=" + player.get('color') + "}}";
    templateRoll += " {{totalDice=" + dicePoolTotal + "}}";

    templateRoll += " {{total-penalty=" + woundPenalty + "}}";
    templateRoll += " {{wound-penalty=" + getModifiersWoundPenalty(null, characterId) + "}}";
    //templateRoll += " {{fatigue-penalty=" + getModifiersFatiguePenalty(null) + "}}";
    //templateRoll += " {{misc-penalty=" + getModifiersPermMiscPenalty(null) + "}}";
    //templateRoll += " {{miscTemp-penalty=" + getModifiersTempMiscPenalty(null) + "}}";

    const stringMessage = getNameFrom(vessel) + " spends initiative: " + cost + "<br/> new value is " + initiative;
    doNotify(stringMessage);
    setAttribute("initiative", vesselId, "initiative");

    doLog("navalSkillCheck 2");
    performRoll(msg, rollStr, templateRoll, "");
}
function doCharacterAction(msg, abilityCommand, characterId, dicePoolModifier, params) {
    const character = getCharacterFromId(characterId);
    const player = getPlayerFromId(msg.playerid);

    const mobilityPenalty = (parseInt(getAttribute(characterId, attrArmourMobility)) || 0) *-1;
    switch (abilityCommand) {
    case actionDodge:
        skillCheck(msg, player, character, characterId, attrDexterity, abiDodge, "Dodge", dicePoolModifier, 0, mobilityPenalty, null);
        break;
    case actionAthleticsStrength:
        skillCheck(msg, player, character, characterId, attrStrength, abiAthletics, "Athletics (strength)", dicePoolModifier, 0, mobilityPenalty, null);
        break;
    case actionAthleticsDexterity:
        skillCheck(msg, player, character, characterId, attrDexterity, abiAthletics, "Athletics (dexterity)", dicePoolModifier, 0, mobilityPenalty, null);
        break;
    case actionAthleticsStamina:
        skillCheck(msg, player, character, characterId, attrStamina, abiAthletics, "Athletics (stamina)", dicePoolModifier, 0, 0, null);
        break;
    case actionStealth:
        skillCheck(msg, player, character, characterId, attrDexterity, abiStealth, "Stealth", dicePoolModifier, 0, mobilityPenalty, null);
        break;
    case actionSorceryShape:
        {
            const currentSpell = getAttribute(characterId, "targetSpellName");
            if (currentSpell == null || currentSpell.length == 0) {
                doNotify(getNameFrom(character) + ": No current shaping spell set");
                break;
            }
            const setSmButton = createChatIconButton("!exr " + cmdCharacterActions + " " + actionSorcerySetSM + sep + characterId + sep + poolModifierSelector, "🌀", "set sm", "Set Sorcerous Motes");
            skillCheck(msg, player, character, characterId, attrIntelligence, abiOccult, "Shape Sorcery", dicePoolModifier, 0, 0, setSmButton);
        }
        break;
    case actionSorceryClear:
        doSorceryClear(msg, characterId);
        break;
    case actionSorcerySetSM:
        {
            const currentSpell = getAttribute(characterId, "targetSpellName");
            if (currentSpell == null || currentSpell.length == 0) {
                doNotify(getNameFrom(character) + ": No current shaping spell set");
                break;
            }
            doSorcerousMotesIncrease(msg, characterId, params);
        }
        break;
    case actionSurvivalStamina:
        skillCheck(msg, player, character, characterId, attrStamina, abiSurvival, "Survival", dicePoolModifier, 0, 0, null);
        break;
    case actionStaminaResistance:
        skillCheck(msg, player, character, characterId, attrStamina, abiResistance, "Resistance", dicePoolModifier, 0, 0, null);
        break;

    case actionWillpower:
        willpowerRoll(msg, character, characterId);
        break;
    case actionLimitCheck:
        limitStressCheck(msg, character, characterId, params);
        break;
    //case  actionSpendEssence:
    //    break;
    case actionCombatRush:
        skillCheck(msg, player, character, characterId, attrDexterity, abiAthletics, "Rush", dicePoolModifier, 0, mobilityPenalty, null);
        break;
    case actionCombatDisengage:
        skillCheck(msg, player, character, characterId, attrDexterity, abiDodge, "Disengage", dicePoolModifier, 0, mobilityPenalty, null);
        break;
    case actionCombatAim:
        doCombatAim(msg, player, character, characterId, attrPerception, abiArchery, "Aim", dicePoolModifier, 0, mobilityPenalty, null);
        break;
    case actionCombatGambit:
        break;
    default:
            doNotify(getNameFrom(player) + " - unhandled character action: " + abilityCommand);
    }
}
function doCombatAim(msg, player, character, characterId, attributeName, abilityName, actionDescription, dicePoolModifier, whisperMode, mobilityPenalty, extraButtons) {
    const charToken = getTokenFromCharacterId(characterId);

    if (charToken) {
        const currentAimLevel = getTokenAimLevel(charToken);

        if (currentAimLevel >= 2) {
            doNotify(getNameFrom(charToken) + " is at aim level " + currentAimLevel + " and cannot benefit any further from aiming");
            return;
        }

        setTokenAimLevel(charToken, currentAimLevel + 1);
    }
    // TODO: actionCombatAim
    skillCheck(msg, player, character, characterId, attributeName, abilityName, actionDescription, dicePoolModifier, whisperMode, mobilityPenalty, extraButtons);
}
function willpowerRoll(msg, character, characterId) {
    const willpower = parseInt(getAttribute(characterId, attrWillpower)) || 0;
    const rollStr = '/roll ' + willpower + diceRollMacro;

    let templateRoll = "";
    templateRoll += "&{template:exalted3e_Roll}";
    templateRoll += " {{information=Willpower}}";
    templateRoll += " {{character-name=" + getNameFrom(character) + "}}";
    templateRoll += " {{totalDice=" + willpower + "}}";

    performRoll(msg, rollStr, templateRoll, 0);
}
function limitStressCheck(msg, character, characterId, params) {
    const currentLimit = parseInt(getAttribute(characterId, attrLimit)) || 0;

    const limitDice = parseInt(params[2]) || 0;

    if (limitDice <= 0) {
        doNotify("No limit dice to roll");
    }

    addCharacterXp(msg.who, "sxp", limitDice, characterId);

    const strDetails = "<span class='attr'> Current Limit [" + currentLimit + "]</span>";

    const rollStr = '/roll ' + limitDice + diceRollMacro;
    let templateRoll = "";
    templateRoll += "&{template:exalted3e_Roll}";
    templateRoll += " {{information=Limit Stress Check}}";
    templateRoll += " {{details=" + strDetails + "}}";
    templateRoll += " {{character-name=" + getNameFrom(character) + "}}";
    templateRoll += " {{totalDice=" + limitDice + "}}";

    performRoll(msg, rollStr, templateRoll, 0);
}
//#endregion
//#region SORCERY 
function doSorceryCast(msg, command, params) {
    const characterId = params[0];
    const spellName = params[1];
    const keywords = params[2];
    const circle = params[3];
    const cost = params[4];
    const duration = params[5];
    const description = params[6];
    const effect = params[7];
    const smTarget = parseInt(params[8]) || 0;

    const character = getCharacterFromId(characterId);
    if (character === null || typeof character === 'undefined') {
        doSendChat(msg.who, 'character: ' + characterId + ' not found');
        return;
    }
 //setAttribute(characterId, "sorcerousMotes",0);
    setAttribute("smTarget",characterId, 0);
    setAttributeMax("smTarget",characterId, smTarget);
    setAttribute("targetSpellName",characterId,spellName);

    const templateRoll = "&{template:exalted3e_cast}" 
        + " {{spell-name=" +  spellName + "}}"
        + " {{character-name=" + getNameFrom(character)+ "}}"
        + " {{information=Sorcery}}"
        + " {{keywords=" + keywords + "}}"
        + " {{circle=" +  circle + "}}"
        + " {{cost=" +  cost + "}}"
        + " {{duration=" +  duration + "}}"
        + " {{description=" +  description + "}}"
        + " {{effect=" +  effect + "}}"
        + " {{smTarget=" +  smTarget + "}}";

    doSendChat(msg.who, templateRoll);
    doNotify(getNameFrom(character) + " begins shaping " + spellName + " [0/" +  smTarget +"]");
}
function doSorcerousMotesIncrease(msg, characterId, params) {
    const alterValue = parseInt(params[2]) || 0;

    const character = getCharacterFromId(characterId);
    if (character === null || typeof character === 'undefined') {
        doSendChat(msg.who, 'character: ' + characterId + ' not found');
        return;
    }


    if (alterValue == 0) {
        doSendChat(msg.who, "smSet: alterValue is zero");
        return;
    }

    const currentValue = parseInt(getAttribute(characterId, "smTarget")) || 0;
    const targetValue = parseInt(getAttributeMax(characterId, "smTarget")) || 0;
    const currentSpell = getAttribute(characterId, "targetSpellName");
    
    let changedValue;

    let details = "";
    //details += detailSpan(bgStyle, "Previous sorcerous motes: ", currentValue);
    details += detailSpan(bgStyle, "Shaping Target", targetValue);

    if (currentValue > 0 && alterValue + currentValue <= 0) {
        changedValue = 0;
        details += detailSpan(MinusStyle, "The spell has failed", changedValue);
    } else if (alterValue > 0) {
        changedValue = alterValue + currentValue;
        details += detailSpan(AddStyle, "Added motes", alterValue);
    } else if (alterValue < 0) {
        changedValue = alterValue + currentValue;
        details += detailSpan(MinusStyle, "Removed motes", alterValue);
    }
    else {
        changedValue = currentValue;
        details += detailSpan(styleIndent, "motes", alterValue);
    }

    details += detailSpan(bgStyle, "Current motes ", changedValue);

    var templateRoll = "&{template:exalted3e_Roll}";
    templateRoll += " {{information= Shaping: "  + currentSpell +  "}}";
    templateRoll += " {{character-name=" + getNameFrom(character) + "}}";
    templateRoll += " {{details=" + details + "}}";

    setAttribute("smTarget", characterId, changedValue);

    doSendChat(msg.who, templateRoll);
}
function doSorceryClear(msg, characterId) {
    const character = getCharacterFromId(characterId);
    setAttribute("smTarget", characterId, 0);
    setAttributeMax("smTarget", characterId, 0);
    setAttribute("targetSpellName", characterId, null);
    doNotify(getNameFrom(character) + " cleared the current shaping action");
}
//#endregion
//#region BUTTON FUNCTIONS
function getCharButton(characterCommand, character) {
    const commandText = characterCommand.replace(characterIdPlaceHolder, character.id);
    const characterName = getNameFrom(character);
    const button = createChatButton(commandText, characterName);
    return button;
}
function createChatButton(commandText, displayText) {
    const button = "<a href='" + commandText + "' style='" + chatButtonStyle +  "'>" + displayText + "</a>";
    return button;
}
function createChatIconButton(commandText, displayIcon, displayText, tooltip) {
doLog("createChatIconButton");
doLog(commandText);
doLog(chatIconButtonStyle);
doLog(tooltip);
doLog(displayIcon);
doLog(commandText);

    const button = 
        "<span style='text-align:center;white-space:normal;'>" 
            + "<a href = '" + commandText + "' style='" + chatIconButtonStyle +  "' data-toggle = '" + tooltip + "' title = '" + tooltip + "' alt='" + tooltip + "'>" 
            + displayIcon + "<br/>"
            + "<span style='font-size:0.8vw;font-variant: small-caps;line-height:0px'> " + displayText + "</span>" 
            + "</a>" 
            + "</span>";

doLog(button);
    return button;
}
//#endregion
//#region COMBAT BUTTON ROW FUNCTIONS
function generateBGButtonRow(selectedTokenId, targetToken, successes, rawDamage, attackName) {
    doLog("generateBGButtonRow");
    doLog("selectedTokenId=" + selectedTokenId);

    //if (selectedTokenId == "#") selectedTokenId = null;

    let resolveAttackCommand = "!exr " + cmdResolveBGAttack + " ";
    if (!selectedTokenId || selectedTokenId == "#") {
        resolveAttackCommand += "&#64;{selected|token_id}" + sep;
    } else {
        resolveAttackCommand += selectedTokenId + sep;
    }
    resolveAttackCommand += "&#64;{target|token_id}" + sep;
    resolveAttackCommand += successes + sep;
    resolveAttackCommand += rawDamage + sep;
    resolveAttackCommand += attackName + sep;

    const resolveAttackBtn = createChatButton(resolveAttackCommand, "Resolve BG attack vs");


    let witheringDamageSelector = "";
    witheringDamageSelector += "?{Withering Damage|";
    witheringDamageSelector += rawDamage + "," + rawDamage + sep;
    for (let i = 1; i < 50; i++) {
        witheringDamageSelector += i + "," + i + sep;
    }
    witheringDamageSelector += "}";
    

    let witheringDamageCommand = "!exr " + cmdWitheringDamage + " ";
    if (!selectedTokenId || selectedTokenId == "#")  {
        witheringDamageCommand += "&#64;{selected|token_id}" + sep;
    } else {
        witheringDamageCommand += selectedTokenId + sep;
    }

    if (!targetToken)
        witheringDamageCommand += "&#64;{target|token_id}" + sep;
    else
        witheringDamageCommand += targetToken.id + sep;

    witheringDamageCommand += witheringDamageSelector + sep  + "0";

    if (!selectedTokenId || selectedTokenId == "#")  
        witheringDamageCommand +=  sep + "&#64;{selected|token_id}'";
    else
        witheringDamageCommand +=  sep + selectedTokenId;
        
    doLog("witheringDamageButton");
    doLog("command = " + witheringDamageCommand);

    const witheringDamageButton = createChatButton(witheringDamageCommand, "Withering damage");

    doLog(witheringDamageButton);
    const selectedTokenInitiative = getInitiativeFromTokenId(selectedTokenId);

    let decisiveAttackBtn = "";
    if (selectedTokenInitiative > 0) {
        //let decisiveDamageSelector = "?{Damage Modifier|" + selectedTokenInitiative + "," + selectedTokenInitiative + sep;
        let decisiveDamageSelector = "?{Damage Modifier(ADD to initiative)|0,0" + sep;
        for (let i = -10; i < 50; i++) {
            decisiveDamageSelector += i + "," + i + sep;
        }
        decisiveDamageSelector += "}";
        const decisiveDamageCommand = "!exr " + cmdRollDecisiveDamage + " " + selectedTokenId + sep + targetToken.id + sep + decisiveDamageSelector + sep + attackTypeDecisive + sep + "#-D";
        decisiveAttackBtn = createChatButton(decisiveDamageCommand, "Decisive damage");
    }
    return resolveAttackBtn + witheringDamageButton + decisiveAttackBtn;
}
function generateButtonRow(selectedToken, targetToken, characterId, attackType) {
    doLog("generateButtonRow");
    doLog("attackType");
    doLog(attackType);

    var selectedName = "";
    var targetName = "";
    var selectedBattleTokenId = null;

    var witheringDamageButton = "";
    var decisiveDamageButton = "";
    var resetInitiativeButton = "";
    var spendInitiativeButton = "";

    if (characterId != null) {
        selectedBattleTokenId = getAttribute(characterId, battleTokenId);
        doLog("selectedBattleTokenId");
        doLog(selectedBattleTokenId);
    }

    if (selectedBattleTokenId != null) {
        try {
            selectedToken = getTokenFromId(selectedBattleTokenId);
            doLog("selectedToken");
            doLog(selectedToken);
        } catch (err) {
            doLog(err);
        }
    }

    if (selectedToken != null) {
        doLog("selectedToken.getName");
        selectedName = getNameFrom(selectedToken) || "";
    }
    if (targetToken != null) {
        doLog("targetToken.get name");
        targetName = getNameFrom(targetToken) || "";
    }

    if (selectedToken != null && targetToken != null && characterId != null) {
        doLog("show damage button:");
        //cmdWitheringDamage
        // get [SelectedToken] param 0
        // get [TargetToken] param 1
        // get [witheringDamageDice] param 2
        // get [witheringAutomaticSuccesses] param3
        // get [diceCommand] param #
        if (attackType==null || attackType === attackTypeWithering) {
            var witheringDamageSelector = "?{Withering Damage|";
            for (let i = 1; i < 50; i++) {
                witheringDamageSelector += i + "," + i + sep;
            }
            witheringDamageSelector += "}";
            witheringDamageButton = "<a href='!exr " +
                cmdWitheringDamage +
                " " +
                selectedToken.id +
                sep +
                targetToken.id +
                sep +
                witheringDamageSelector +
                "|0|' style='" + chatButtonStyle +  "'>" +
                witheringDamageLabel +
                "</a>";
        }


        if (attackType==null || attackType === attackTypeDecisive) {
            doLog("show decisive damage button:");
            var selectedInitiative = parseInt(selectedToken.get(bar1Value)) || 0;
            var decisiveDamageSelector = "?{Decisive Damage|" + selectedInitiative + "," + selectedInitiative + sep;

            for (let i = 0; i < 50; i++) {
                if (i === selectedInitiative) continue;
                decisiveDamageSelector += i + "," + i + sep;
            }chatButtonStyle
            decisiveDamageSelector += "}";
            decisiveDamageButton = "<a href='!exr " +
                cmdRollDice +
                " " +
                decisiveDamageSelector +
                "#-D' style='" + chatButtonStyle + "'>" +
                decisiveDamageLabel +
                "</a>";
            resetInitiativeButton = "<a href='!exr " +
                cmdResetInitiative +
                " " +
                selectedToken.id +
                "' style='" + chatButtonStyle + "'>" +
                "(hit: reset " + resetInitiativeLabel + ")" +
                "</a>";
            if (selectedInitiative >= 11)
                spendInitiativeButton = "<a href='!exr " +
                    cmdSpendInit +
                    " " +
                    selectedToken.id +
                    "|3' style='" + chatButtonStyle + "'>" +
                    "(miss: -3 " + spendInitiativeLabel + " )" +
                    "</a>";
            else
                spendInitiativeButton = "<a href='!exr " +
                    cmdSpendInit +
                    " " +
                    selectedToken.id +
                    "|2' style='" + chatButtonStyle + "'>" +
                    "(miss: -2 " + spendInitiativeLabel + " )" +
                    "</a>";
            }
        }


    // exEssenceSpendToken
    // targetToken [0]|
    // essenceType [1]|
    // alterValue [2]|
    var essenceTypeSelector = "?{Essence Type|" + essPeripheral + sep + essPersonal + "}";
    var numericDropDownSelector = "?{Essence Amount|";
    for (var i = 0; i < 20; i++) {
        numericDropDownSelector += i + "," + i + sep;
    }
    numericDropDownSelector += "}";


    var essenceSpendButtonTarget = "";
    if (targetToken != null) {
        // exEssenceSpendToken
        // targetToken [0]|
        // essenceType [1]|
        // alterValue [2]|
        var targetPersonalEssence = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'personal-essence')) || 0;
        var targetPeripheralEssence =
            parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'peripheral-essence')) || 0;

        if (targetPersonalEssence > 0 || targetPeripheralEssence > 0)
            essenceSpendButtonTarget = "<a href='!exr " +
                cmdEssenceSpendToken +
                " " +
                targetToken.id +
                sep +
                essenceTypeSelector +
                sep +
                numericDropDownSelector +
                "' style='" + chatButtonStyle +  "'>" +
                spendEssenceLabel +
                "(" +
                targetName +
                ")</a>";
    }

    var essenceSpendButtonSelected = "";
    if (selectedToken != null) {
        // exEssenceSpendToken
        // targetToken [0]|
        // essenceType [1]|
        // alterValue [2]|

        var selectedPersonalEssence = parseInt(getCharacterAttributeFromTokenId(selectedToken.id, 'personal-essence')) || 0;
        var selectedPeripheralEssence = parseInt(getCharacterAttributeFromTokenId(selectedToken.id, 'peripheral-essence')) || 0;

        if (selectedPersonalEssence > 0 || selectedPeripheralEssence > 0)
            essenceSpendButtonSelected = "<a href='!exr " +
                cmdEssenceSpendToken +
                " " +
                selectedToken.id +
                sep +
                essenceTypeSelector +
                sep +
                numericDropDownSelector +
                "' style='" + chatButtonStyle +  "'>" +
                spendEssenceLabel +
                "(" +
                selectedName +
                ")</a>";
    }

    return essenceSpendButtonTarget +
        essenceSpendButtonSelected +
        witheringDamageButton +
        "<br/>" +
        decisiveDamageButton +
        resetInitiativeButton +
        spendInitiativeButton;
}
//#endregion
//#region ADD XP FUNCTIONS
function generateXpButtonRow() {
    // these are the character Ids
    const daryl = getCharacterFromId(darylCharacterId);
    const pete = getCharacterFromId(peteCharacterId);
    const max = getCharacterFromId(maxCharacterId);
    const paulN = getCharacterFromId(paulNCharacterId);
    

    const characterCommand = "!exr addXp ?{type|Experience Points,xp|Solar xp,sxp|Mandate,mxp|Bonus Points,bp}|?{How many?|1}|" + characterIdPlaceHolder ;

    const darylButton = getCharButton(characterCommand, daryl);
    const peteButton = getCharButton(characterCommand, pete);
    const maxButton = getCharButton(characterCommand, max);
    const paulNButton = getCharButton(characterCommand, paulN);


    const allCharacterIds = daryl.id + sep + pete.id + sep + max.id + sep + paulN.id;

    const allCharactersCommand = characterCommand.replace(characterIdPlaceHolder, allCharacterIds);
    const allCharactersButton = createChatButton(allCharactersCommand, 'EVERYONE');


    return darylButton + peteButton + maxButton + paulNButton +  allCharactersButton;
}
function addCharacterXp(who, xpType, xpAmount, characterId) {
    if (characterId == null) {
        doNotify('Selected Character ID not valid');
        return;
    }
    const character = getCharacterFromId(characterId);

    if (character === null || typeof character === 'undefined') {
        doNotify('character: ' + characterId + ' not found');
        return;
    }

    const characterName = getNameFrom(character);
    
    var gainLoss;

    if (xpAmount === 0) {
        doNotify('No xp to add!');
        return;
    }
    if (xpAmount < 0) {
        gainLoss = "Lost " + xpAmount;
    } else {
        gainLoss = "Gained " + xpAmount;
    }

    var attrName = "";
    var friendlyInfo = gainLoss;

    if (xpType === "xp") {
        attrName = "xp";
        friendlyInfo += " experience points";
    }
    if (xpType === "sxp") {
        attrName = "sxp";
        friendlyInfo += " solar xp";
    }
    if (xpType === "mxp") {
        attrName = "mxp";
        friendlyInfo += " mandate xp";
    }
    if (xpType === "bp") {
        attrName = "bp";
        friendlyInfo += " bonus points";
    }

    if (attrName === "") {
        doNotify( 'Invalid xp  type to add! ' + xpType);
        return;
    }
    const currentValue = parseInt(getAttributeMax(characterId, xpType)) || 0;
    let newValue = currentValue + parseInt(xpAmount) || 0;

    if (newValue < 0) newValue = 0;
    setAttributeMax(xpType, characterId, newValue);

    var templateRoll = "&{template:exalted3e_Roll}";
    templateRoll += " {{character-name=" + characterName + "}}";
    templateRoll += " {{information=" + friendlyInfo + "}}";

    doSendChat(who, templateRoll);
}
//#endregion
//#region GM MENU
function createGroupSkillCheckMenu(who, actionName, attributeName, abilityName) {
    const buttonTemplate = generateGroupActionButtonRow(actionName, attributeName, abilityName);
    doSendChat(who, "/w gm " + buttonTemplate);
    return;
}
function skillCheck(msg, player, character, characterId, attributeName, abilityName, abilityFullName, diceModifier, whisperMode, mobilityPenalty, extraButtons) {

    const attributeValue = parseInt(getAttribute(characterId, attributeName)) || 0;
    const abilityValue = parseInt(getAttribute(characterId, abilityName)) || 0;
    const woundPenalty = parseInt(getTotalDicePoolModifiers(null, characterId)) || 0;
    const dicePoolTotal = attributeValue + abilityValue + diceModifier + woundPenalty + mobilityPenalty;

    const rollStr = '/roll ' + dicePoolTotal + diceRollMacro;
    var templateRoll = "";

    if (whisperMode > 0) {
        templateRoll += "/w gm ";
        //rollStr = "/gmroll "  + dicePoolTotal + diceRollMacro;
    }

    templateRoll += "&{template:exalted3e_Roll}";
    templateRoll += " {{skillRoll=1}}";
    templateRoll += " {{information=" + abilityFullName + "}}";
    templateRoll += " {{character-name=" + getNameFrom(character) + "}}";
    templateRoll += " {{attribute-name=" + attributeName + "}} {{attribute-value=" + attributeValue + "}}";
    templateRoll += " {{skill-name=" + abilityName + "}} {{skill-value=" + abilityValue + "}}";
    templateRoll += " {{dice-modifier=" + diceModifier + "}}";
    templateRoll += " {{player-color=" + player.get('color') + "}}";
    templateRoll += " {{totalDice=" + dicePoolTotal + "}}";

    templateRoll += " {{total-penalty=" + woundPenalty + "}}";
    templateRoll += " {{wound-penalty=" + getModifiersWoundPenalty(null, characterId) + "}}";
    //templateRoll += " {{fatigue-penalty=" + getModifiersFatiguePenalty(null) + "}}";
    //templateRoll += " {{misc-penalty=" + getModifiersPermMiscPenalty(null) + "}}";
    //templateRoll += " {{miscTemp-penalty=" + getModifiersTempMiscPenalty(null) + "}}";

    templateRoll += " {{mobilityPenalty=" + mobilityPenalty + "}}";

    if (extraButtons!=null)
        templateRoll += " {{buttons=" + extraButtons + "}}";
        

    performRoll(msg, rollStr, templateRoll, whisperMode);

}; //exSkillCheckCharSheet
//#endregion
//#region GM MENU
function generateGMActionMenu() {
    const buttonItems = [];
    const essenceAmountSelector = "?{Essence Amount|1,1|2,2|3,3|4,4|5,5|6,6|7,7|8,8|9,9|10,10|11,11|12,12|13,13|14,14|15,15|16,16|17,17|18,18|19,19|20,20}";
    buttonItems.push("<h3" + charMenuHeaderStyle + ">Roll</h3>");
    buttonItems.push(createChatIconButton("!exr " + cmdGrpAwareness, "👁️","awareness","Awareness"));
    buttonItems.push(createChatIconButton("!exr " + cmdGrpInvestigate, "🔍","investigate", "Investigation"));
    buttonItems.push(createChatIconButton("!exr " + cmdGrpReadIntention, "💁🏼‍", "intention", "Read Intention"));

    buttonItems.push("<h3" + charMenuHeaderStyle + ">Add</h3>");
    buttonItems.push(createChatIconButton("!exr " + cmdGrpAddXp, "🎓", "xp", "Add XP"));
    buttonItems.push(createChatIconButton("!exr " + cmdGrpAddMotes + " " + essenceAmountSelector, "🀄️", "add motes", "Add Motes"));

    buttonItems.push("<h3" + charMenuHeaderStyle + ">Clear</h3>");
    buttonItems.push(createChatIconButton("!exr " + cmdGrpClearAnima, "💡", "anima", "Anima"));
    buttonItems.push(createChatIconButton("!exr " + cmdGrpMaxMotes, "🀄️", "max motes", "Max Motes"));
    buttonItems.push(createChatIconButton("!exr " + cmdGrpClearOnslaught, "⚒", "onslaught", "Onslaught"));
    buttonItems.push(createChatIconButton("!exr " + cmdGrpClearTurnOrder, "📑", "turn order", "Turn Order"));
    buttonItems.push(createChatIconButton("!exr " + cmdCombatStart, "🔪", "start combat", "Start Combat"));
    buttonItems.push(createChatIconButton("!exr " + cmdGrpClearCrash, "📉","crash", "Crash"));

    buttonItems.push("<h3" + charMenuHeaderStyle + ">Config</h3>");
    buttonItems.push(createChatIconButton("!exr " + cmdUI, "⚙️","config", "Configuration Menu"));
    buttonItems.push(createChatIconButton("!exr " + actionNavalAssignVessel + " " + htmlTargetTokenId + sep + htmlSelectedTokenId, "⛵️","assign", "Assign [Target] Naval Vessel to [Selected]"));
    buttonItems.push(createChatIconButton("!exr " + actionNavalAssignPlayerVessel + " " + htmlTargetTokenId, "⛵️","player", "Assign [Target] Player Naval Vessel"));
    buttonItems.push(createChatIconButton("!exr " + actionNavalClearPlayerVessel, "⛵️","clear", "Clear Player Naval Vessel"));



// ReSharper disable once UseOfImplicitGlobalInFunctionScope
    const btnRow = _.reduce(buttonItems, function(memo, num) { return memo + num; });

    let buttonTemplate = "&{template:exalted3e_Roll}";
    buttonTemplate += " {{character-name=GM Menu}}";
    buttonTemplate += " {{buttons=" + btnRow + "}}";

    return buttonTemplate;
}
function doDisplayOptions() {
    const colourRed = "#FF0000";
    const colourGreen = "#6B8E23";

    const animaColor = state.doAnima ? colourGreen : colourRed;
    const initiativeColor = state.doInitiative ? colourGreen : colourRed;
    const notificationColor = state.doNotifications ? colourGreen : colourRed;
    const migrationColor = state.doStatusSwitch ? colourGreen : colourRed;
    const woundPenaltyColor = state.doWoundtracker ? colourGreen : colourRed;
    const directAnimaColor = state.doDirectAnimaIncrease ? colourGreen : colourRed;
    const debugModeColor = state.debugMode ? colourGreen : colourRed;
    const motesIncreaseColor = state.doAddMotesEndTurn ? colourGreen : colourRed;

    state.playerMotesRegen = parseInt(state.playerMotesRegen) || 5;
    state.npcMotesRegen = parseInt(state.npcMotesRegen) || 5;

    const playerRegenColor5 = (parseInt(state.playerMotesRegen) == 5) ? colourGreen : colourRed;
    const playerRegenColor2 = (parseInt(state.playerMotesRegen) == 2) ? colourGreen : colourRed;

    //if (!state.playerMotesRegen || state.playerMotesRegen == 0) state.playerMotesRegen = 5;
    //if (!state.npcMotesRegen || state.npcMotesRegen == 0) state.npcMotesRegen = 5;

    const buttonItems = [];
    buttonItems.push("<a href='!exr " + cmdSettings + " "  + settingAnima + "' style='background-color:" + animaColor + "; " + chatButtonStyle +  "'>Anima Banner Tracker</a>");
    buttonItems.push("<a href='!exr " + cmdSettings + " "  + settingInitiative + "' style='background-color:" + initiativeColor + "; " + chatButtonStyle +  "'>Initiative Tracker</a>");
    buttonItems.push("<a href='!exr " + cmdSettings + " "  + settingMigration + "' style='background-color:" + migrationColor + "; " + chatButtonStyle +  "'>Status Migration</a>");
    buttonItems.push("<a href='!exr " + cmdSettings + " "  + settingWoundPenalty + "' style='background-color:" + woundPenaltyColor + "; " + chatButtonStyle +  "'>Wound Penalty Tracker</a>");
    buttonItems.push("<a href='!exr " + cmdSettings + " "  + settingNotifications + "' style='background-color:" + notificationColor + "; " + chatButtonStyle +  "'>Notifications</a>");
    buttonItems.push("<a href='!exr " + cmdSettings + " "  + settingDirectAnimaIncrease + "' style='background-color:" + directAnimaColor + "; " + chatButtonStyle +  "'>Direct Anima Increase</a>");
    buttonItems.push("<a href='!exr " + cmdSettings + " "  + settingMotesIncrease + "' style='background-color:" + motesIncreaseColor + "; " + chatButtonStyle +  "'>End Turn Motes</a>");
    buttonItems.push("<a href='!exr " + cmdSettings + " "  + settingDebugMode + "' style='background-color:" + debugModeColor + "; " + chatButtonStyle +  "'>Debug Mode</a>");

    buttonItems.push("<a href='!exr " + cmdSettings + " "  + settingPlayerRegen + "|5' style='background-color:" + playerRegenColor5 + "; " + chatButtonStyle +  "'>Player Regen: 5</a>");
    buttonItems.push("<a href='!exr " + cmdSettings + " "  + settingPlayerRegen + "|2' style='background-color:" + playerRegenColor2 + "; " + chatButtonStyle +  "'>Player Regen: 2</a>");
    buttonItems.push("<a href='!exr " + cmdSettings + " "  + settingNpcRegen + "' style='background-color:" + debugModeColor + "; " + chatButtonStyle +  "'>NPC Regen:" + state.npcMotesRegen  + "</a>");

// ReSharper disable once UseOfImplicitGlobalInFunctionScope
    const btnRow = _.reduce(buttonItems, function(memo, num) { return memo + num; });

    let buttonTemplate = "&{template:exalted3e_Roll}";
    buttonTemplate += " {{character-name=Settings}}";
    buttonTemplate += " {{buttons=" + btnRow + "}}";

    doSendChat(scriptTitle,'/w gm '+ buttonTemplate);
}
//#endregion
//#region GROUP COMMAND FUNCTIONS
function generateGroupActionButtonRow(actionName, attributeName, abilityName) {
    const daryl = getCharacterFromId(darylCharacterId);
    const pete = getCharacterFromId(peteCharacterId);
    const max = getCharacterFromId(maxCharacterId);
    const paulN = getCharacterFromId(paulNCharacterId);
    

    const characterCommand = "!exr groupSkillCheck " + abilityName + sep + attributeName + sep + actionName + sep + characterIdPlaceHolder ;

    const darylButton = getCharButton(characterCommand, daryl);
    const peteButton = getCharButton(characterCommand, pete);
    const maxButton = getCharButton(characterCommand, max);
    const paulNButton = getCharButton(characterCommand, paulN);


    const allCharacterIds = daryl.id + sep + pete.id + sep + max.id + sep + paulN.id + sep ;

    const allCharactersCommand = characterCommand.replace(characterIdPlaceHolder, allCharacterIds);
    const allCharactersButton2 = createChatButton(allCharactersCommand, "EVERYONE");

// doLog(darylButton);
// doLog(peteButton);
// doLog(maxButton);
// doLog(paulNButton);

    const btnRow =  darylButton + peteButton + maxButton + paulNButton +  allCharactersButton2;

    let buttonTemplate = "&{template:exalted3e_Roll}";
    buttonTemplate += " {{character-name=" + actionName + "}}";
    buttonTemplate += " {{buttons=" + btnRow + "}}";

    return buttonTemplate;
}
function groupMaxMotes() {
    const pageTokens = getPageTokens();

// ReSharper disable once UseOfImplicitGlobalInFunctionScope
    _.each(pageTokens,
        function(graphic) {
// ReSharper disable once UseOfImplicitGlobalInFunctionScope
            const character = getObj("character", graphic.get("represents"));
            if (character != undefined) {
                if (getAttribute(character.id, "Initiative") == "undefined" || isNaN(getAttribute(character.id, "Initiative")) == true)
                    setAttribute("Initiative", character.id, "0");

                const committed = parseInt(getAttribute(character.id, attrCommittedEssence)) || 0;

                if (getAttribute(character.id, attrEssencePersonal) == "undefined" || isNaN(getAttribute(character.id, attrEssencePersonal)) == true)
                    setAttribute(attrEssencePersonal, character.id, "0");
                if (getAttribute(character.id, attrEssencePeripheral) == "undefined" || isNaN(getAttribute(character.id, attrEssencePeripheral)) == true)
                    setAttribute(attrEssencePeripheral, character.id, "0");

                let maxValue = getMaxMotesFromCharacterId(character.id, attrEquationPeripheral);
                setAttribute(attrEssencePeripheral, character.id, maxValue);

                maxValue = getMaxMotesFromCharacterId(character.id, attrEquationPersonal);
                maxValue -= committed;
                setAttribute(attrEssencePersonal, character.id, maxValue);
            }
        });
    doNotify("Motes maxed","none");
};

function groupAddMotes(addMotes) {
    const pageTokens = getPageTokens();

    _.each(pageTokens,
        function(graphic) {
            const characterIds = [];
            const character = getObj("character", graphic.get("represents"));
            if (character != undefined && character) {

                const characterDone = _.contains(characterIds, character.id);
                if (!characterDone) {
                    characterIds.push(character.id);

                    if (getAttribute(character.id, "Initiative") == "undefined" || isNaN(getAttribute(character.id, "Initiative")) == true)
                        setAttribute("Initiative", character.id, "0");

                    if (getAttribute(character.id, attrEssencePersonal) == "undefined" || isNaN(getAttribute(character.id, attrEssencePersonal)) == true)
                        setAttribute(attrEssencePersonal, character.id, "0");
                    if (getAttribute(character.id, attrEssencePeripheral) == "undefined" || isNaN(getAttribute(character.id, attrEssencePeripheral)) == true)
                        setAttribute(attrEssencePeripheral, character.id, "0");

                    const committed = parseInt(getAttribute(character.id, attrCommittedEssence)) || 0;
                    const maxPersonalValue = getMaxMotesFromCharacterId(character.id, attrEquationPersonal) - committed;
                    const maxPeripheralValue = getMaxMotesFromCharacterId(character.id, attrEquationPeripheral);

                    let currentPersonal = parseInt(getAttribute(character.id, attrEssencePersonal)) || 0;
                    let currentPeripheral = parseInt(getAttribute(character.id, attrEssencePeripheral)) || 0;

                    let overflow = addMotes;
                    if ((currentPersonal + overflow) >= maxPersonalValue) {
                        overflow = (currentPersonal + overflow) - maxPersonalValue;
                        currentPersonal = maxPersonalValue;
                    } else {
                        currentPersonal = currentPersonal + overflow;
                        overflow = 0;
                    }

                    if (overflow > 0) {
                        if ((currentPeripheral + overflow) >= maxPeripheralValue) {
                            currentPeripheral = maxPeripheralValue;
                        } else {
                            currentPeripheral = currentPeripheral + overflow;
                        }
                    }

                    setAttribute(attrEssencePeripheral, character.id, currentPeripheral);
                    setAttribute(attrEssencePersonal, character.id, currentPersonal);
                }
            }
        });
}

function groupClearAnima() {
    const pageTokens = getPageTokens();

    setAllTokenStatus(pageTokens, statusAnima, false);

    doNotify("Anima cleared on current page","none");
}
function groupClearOnslaught() {
    const pageTokens = getPageTokens();
    setAllTokenStatus(pageTokens, statusOnslaught, false);
    doNotify("Onslaught cleared on current page","none");
}
function groupClearCrash() {
    const pageTokens = getPageTokens();
    setAllTokenStatus(pageTokens, statusCrash, false);
    setAllTokenStatus(pageTokens, statusTempMiscPenalty, false);
    setAllTokenStatus(pageTokens, statusFatiguePenalty, false);
    setAllTokenStatus(pageTokens, statusPermMiscPenalty, false);

    doNotify("Crash and status icons cleared  on current page","none");
}
function setAllTokenStatus(pageTokens, status, value) {
    _.each(pageTokens, function (graphic) {
        statusSetValue(graphic, status, value);
    });
}
//#endregion
//#region GET STATS FUNCTIONS
function getStats(targetToken, who) {
    doLog("getStats");
    try {
        const isTargetBattleGroup = parseInt(getCharacterAttributeFromTokenId(targetToken.id, attrBattleGroup)) || 0;
        if (isTargetBattleGroup == 1) {
            doLog("target battlegroup");
            getBgStats(targetToken, who);
            return;
        }
    } catch (err) {
        // Ignore
    }

    try {
        const isTargetQc = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'qc')) || 0;
        if (isTargetQc == 1) {
            doLog("target qc");
            getQCStats(targetToken, who);
            return;
        }
    } catch (err) {
        // Ignore
    }

    try {
        doLog("target fc");
        getCharacterStats(targetToken, who);
    } catch (err) {
        // Ignore
    }
}
function getCharacterStats(targetToken, who) {
    doLog("getCharacterStats");
    const targetName = getNameFrom(targetToken) || '';
    const isTargetQc = parseInt(getCharacterAttributeFromTokenId(targetToken.id, attrBattleGroup)) || 0;
    if (isTargetQc === 1) {
        doSendChat(who, 'Target "' + targetName + '" is a quick character');
        return;
    }
    const isTargetBattleGroup = parseInt(getCharacterAttributeFromTokenId(targetToken.id, attrBattleGroup)) || 0;
    const isTargetBattleGroupSwarm = parseInt(getCharacterAttributeFromTokenId(targetToken.id, attrBattleGroupIsSwarm)) || 0;
    if (isTargetBattleGroup === 1) {
        doSendChat(who, 'Target "' + targetName + '" is a battlegroup');
        return;
    }

    const targetBattleGroupDrill = getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-drill');
    const targetBattleGroupMight = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-might')) || 0;

    const targetInitiative = parseInt(targetToken.get(bar1Value)) || 0;

    const targetArmourName = getCharacterAttributeFromTokenId(targetToken.id, 'armor-name') || '';
    const targetArmourSoak = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'armorsoak')) || 0;
    const targetArmourMobility = parseInt(getCharacterAttributeFromTokenId(targetToken.id, attrArmourMobility)) || 0;
    const targetArmourHardness = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'hardness')) || 0;
    const targetStamina = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'stamina')) || 0;
    const targetDexterity = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'dexterity')) || 0;
    const targetDodge = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'dodge')) || 0;

    const targetWoundPenalty = parseInt(targetToken.get(bar3Value)) || 0;
    const miscPenalty = parseInt(statusGetValue(targetToken, statusTempMiscPenalty)) || 0;

    const targetNaturalSoak = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'naturalsoak')) || 0;

    const targetTotalSoak = targetStamina + targetNaturalSoak + targetArmourSoak; // @{stamina}+@{naturalsoak}+@{armorsoak}
    const evasionRoot = targetDexterity + targetDodge;
//    const evasionRootS = evasionRoot + 1;
    const evasionBase = (Math.ceil(evasionRoot / 2) -
        Math.abs(targetArmourMobility) -
        Math.abs(targetWoundPenalty) -
        Math.abs(miscPenalty));
    //const evasionBaseS = (Math.ceil(evasionRootS / 2) -
    //    Math.abs(targetArmourMobility) -
    //    Math.abs(targetWoundPenalty) -
    //    Math.abs(miscPenalty));
    const evasionWithoutSpecial = (evasionBase + Math.abs(evasionBase)) / 2;

    const targetParry = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'parry')) || 0;
    //var targetParrySpecialty = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'parry-specialty')) || 0;
    const onslaughtStatus = parseInt(statusGetValue(targetToken, statusOnslaught)) || 0;
    const onslaughtProtect = getTokenOnslaughtProtect(targetToken);


    let currentParry = (targetParry - onslaughtStatus - targetWoundPenalty - Math.abs(miscPenalty));
    let currentEvasion = evasionWithoutSpecial - onslaughtStatus;

    if (isTargetBattleGroup == 1) {
        if (targetBattleGroupDrill == "Poor") {
            currentParry -= 1;
            currentEvasion -= 1;
        }
        if (targetBattleGroupDrill == "Average") {
            currentParry += targetBattlegroupSize + 1;
            currentEvasion += targetBattlegroupSize + 1;
        }
        if (targetBattleGroupDrill == "Elite") {
            currentParry += targetBattlegroupSize + 2;
            currentEvasion += targetBattlegroupSize + 2;
        }
        if (targetBattleGroupMight > 0) {
            currentParry += (targetBattleGroupMight - 1);
            currentEvasion += (targetBattleGroupMight - 1);
        }
    }


    var bgStyle = "";
    var bgInfo = "<br/>";

    var templateRoll = "&{template:exalted3e_Roll}";
    templateRoll += " {{character-name=" + targetName + "}}";
    if (isTargetBattleGroupSwarm==1) templateRoll += " {{mode=Swarm Mode}}";
    //if (isTargetBattleGroupSwarm==1) { 
    //    bgInfo = bgInfo + "<span class='attr' style='color:red;font-weight:bold;text-align:center;'>SWARM MODE</span><br/>";
    //}
    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Initiative [" + targetInitiative + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Wound Penalty [" + targetWoundPenalty + "]</span><br/>";

    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Armour [" + targetArmourName + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Armour Soak [" + targetArmourSoak + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Parry [" + targetParry + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Evasion [" + evasionWithoutSpecial + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Onslaught Inflicted [" + onslaughtStatus + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Onslaught Protection [" + onslaughtProtect + "]</span><br/>";
    
    bgInfo = bgInfo + "<span class='attr' " + bgEmphasis + ">Current Parry [" + currentParry + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgEmphasis + ">Current Evasion [" + currentEvasion + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgEmphasis + ">Total Soak [" + targetTotalSoak + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgEmphasis + ">Hardness [" + targetArmourHardness + "]</span><br/>";

    templateRoll += " {{details=" + bgInfo + "}}";
    templateRoll += " {{buttons=" + generateButtonRow(null, targetToken, null, null) + "}}";

    doSendChat(who, "/w gm " + templateRoll);
}
function getQCStats(targetToken, who) {
    doLog("getQCStats");
    var targetName = getNameFrom(targetToken) || '';
    var isTargetQc = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'qc')) || 0;
    if (isTargetQc == 0) {
        doSendChat(who, 'Target "' + targetName + '" is not a quick character');
        return;
    }
    var targetInitiative = parseInt(targetToken.get(bar1Value)) || 0;
    var qcParry = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'qc-parry')) || 0;
    var qcEvasion = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'qc-evasion')) || 0;
    var qcSoak = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'qc-soak')) || 0;
    var qcHardness = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'qc-hardness')) || 0;
    var targetWoundPenalty = parseInt(getTotalDicePoolModifiers(targetToken.id, null)) || 0;
    var qcIndividual = parseInt(getCharacterAttributeFromTokenId(targetToken.id, qcIsIndividual)) || 0;

    var characterId = null;
    if (qcIndividual == 1) {
        var character = getCharacterFromTokenId(targetToken.id);
        characterId = character.id;
    }


    var onslaughtStatus = parseInt(statusGetValue(targetToken, statusOnslaught)) || 0;
    var onslaughtProtect = getTokenOnslaughtProtect(targetToken);
    var miscPenalty = parseInt(statusGetValue(targetToken, statusTempMiscPenalty)) || 0;
    var currentParry = qcParry - onslaughtStatus - targetWoundPenalty;
    var currentEvasion = qcEvasion - onslaughtStatus - targetWoundPenalty;

    var bgStyle = "";
    var bgInfo = "<br/>";
    var templateRoll = "&{template:exalted3e_Roll}";
    templateRoll += " {{character-name=" + targetName + "}}";

    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Current Initiative [" + targetInitiative + "]</span><br/>";


    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Parry [" + qcParry + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Evasion [" + qcEvasion + "]</span><br/>";

    bgInfo = bgInfo + "<span class='attr' " + bgEmphasis + ">Onslaught Status [" + onslaughtStatus + "]</span><br/>";
    bgInfo = bgInfo +
        "<span class='attr' " +
        bgEmphasis +
        ">Onslaught Protection [" +
        onslaughtProtect +
        "]</span><br/>";

    bgInfo = bgInfo + "<span class='attr' " + bgEmphasis + ">Misc Penalty [" + miscPenalty + "]</span><br/>";

    bgInfo = bgInfo + "<span class='attr' " + bgEmphasis + ">Current Parry [" + currentParry + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgEmphasis + ">Current Evasion [" + currentEvasion + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgEmphasis + ">Soak [" + qcSoak + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgEmphasis + ">Hardness [" + qcHardness + "]</span><br/>";


    templateRoll += " {{details=" + bgInfo + "}}";
    templateRoll += " {{buttons=" + generateButtonRow(null, targetToken, characterId, null) + "}}";
    doSendChat(who, "/w gm " +  templateRoll);
}
function getBgStats(targetToken, who) {
    var targetName = getNameFrom(targetToken) || '';
    var isTargetBattleGroup = parseInt(getCharacterAttributeFromTokenId(targetToken.id, attrBattleGroup)) || 0;
    if (isTargetBattleGroup == 0) {
        doSendChat(who, 'Target "' + targetName + '" is not a battlegroup');
        return;
    }

    var targetInitiative = parseInt(targetToken.get(bar1Value)) || 0;
    var targetBattlegroupSize = parseInt(targetToken.get(bar2Value)) || 0;
    var targetBattlegroupMagnitude = parseInt(targetToken.get(bar3Value)) || 0;
    var targetBattlegroupCommand = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-command')) || 0;
    var targetBattlegroupHealth = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-health-levels')) || 0;
    var targetBattlegroupPerfectMorale = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-perfect-morale')) || 0;
    var targetBattlegroupMight = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-might')) || 0;
    var targetBattlegroupDrill = getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-drill'); // 'Poor', 'Average', 'Elite'

    const isTargetBattleGroupSwarm = parseInt(getCharacterAttributeFromTokenId(targetToken.id, attrBattleGroupIsSwarm)) || 0;

    var qcParry = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'qc-parry')) || 0;
    var qcEvasion = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'qc-evasion')) || 0;
    var qcSoak = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'qc-soak')) || 0;
    var qcHardness = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'qc-hardness')) || 0;

    var targetBattlegroupDrillBonus = 0;
    var dicePoolTotal = targetBattlegroupSize;

    if (targetBattlegroupDrill == "Elite") {
        qcSoak = qcSoak + 2;
        qcEvasion = qcEvasion + 2+ targetBattlegroupSize;
        qcParry = qcParry + 2+ targetBattlegroupSize;
        targetBattlegroupDrillBonus = 2;
    }
    if (targetBattlegroupDrill == "Average") {
        qcSoak = qcSoak + 1;
        qcEvasion = qcEvasion + 1 + targetBattlegroupSize;
        qcParry = qcParry + 1 + targetBattlegroupSize;
        targetBattlegroupDrillBonus = 0;
    }
    if (targetBattlegroupDrill == "Poor") {
        targetBattlegroupDrillBonus = -2;
    }
    dicePoolTotal = dicePoolTotal + targetBattlegroupMight;
    switch (targetBattlegroupMight) {
    case 3:
        qcSoak = qcSoak + 2;
        qcEvasion = qcEvasion + 2;
        qcParry = qcParry + 2;
        break;
    case 2:
        qcSoak = qcSoak + 1;
        qcEvasion = qcEvasion + 1;
        qcParry = qcParry + 1;
        break;
    case 1:
        qcSoak = qcSoak + 1;
        qcEvasion = qcEvasion + 1;
        qcParry = qcParry + 1;
        break;
    case 0:
        break;
    default:
        break;
    }

    var battlegroupDrillOffense = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-drill-offense')) || 0;
    var battlegroupMightOffense = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-might-offense')) || 0;

    var battlegroupDrillDefense = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-drill-Defense')) || 0;
    var battlegroupMightDefense = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-might-Defense')) || 0;

    qcSoak = qcSoak + targetBattlegroupSize;

    var onslaughtPenalty = parseInt(targetBattlegroupSize) + 1;
    var onslaughtProtect = getTokenOnslaughtProtect(targetToken);

    var bgStyle = "";
    var bgInfo = "<br/>";

    var templateRoll = "&{template:exalted3e_Roll}";
    templateRoll += " {{character-name=" + targetName + "}}";
    templateRoll += " {{information=Battlegroup}}";

    //templateRoll += " {{mode=Swarm Mode}}";
    if (isTargetBattleGroupSwarm == 1) {
        templateRoll += " {{mode=Swarm Mode}}";
        //bgInfo = bgInfo + "<span class='attr' style='color:red;font-weight:bold;text-align:center;'>SWARM MODE</span><br/>";
    }

    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Current Initiative [" + targetInitiative + "]</span><br/>";

    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Attack Bonus [" + dicePoolTotal + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Magnitude [" + targetBattlegroupMagnitude + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Size [" + targetBattlegroupSize + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Base Health [" + targetBattlegroupHealth + "]</span><br/>";

    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Might [" + targetBattlegroupMight + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Drill [" + targetBattlegroupDrill + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">DrillBonus [" + targetBattlegroupDrillBonus + "]</span><br/>";

    bgInfo = bgInfo +
        "<span class='attr' " +
        bgStyle +
        ">Perfect Morale? [" +
        targetBattlegroupPerfectMorale +
        "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Command Dice [" + targetBattlegroupCommand + "]</span><br/>";

    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Onslaught Inflicted [" + onslaughtPenalty + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Onslaught Protection [" + onslaughtProtect + "]</span><br/>";

    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Drill Offense [" + battlegroupDrillOffense + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Might Offense [" + battlegroupMightOffense + "]</span><br/>";

    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Drill Defense [" + battlegroupDrillDefense + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgStyle + ">Might Defense [" + battlegroupMightDefense + "]</span><br/>";

    bgInfo = bgInfo + "<span class='attr' " + bgEmphasis + ">Soak [" + qcSoak + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgEmphasis + ">Parry [" + qcParry + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgEmphasis + ">Evasion [" + qcEvasion + "]</span><br/>";
    bgInfo = bgInfo + "<span class='attr' " + bgEmphasis + ">Hardness [" + qcHardness + "]</span><br/>";



    

    templateRoll += " {{details=" + bgInfo + "}}";

    doSendChat(who, "/w gm " + templateRoll);
}
function updateStatuses (obj, lastPage) {
    const oldPageTokens = findObjs({
        _pageid: lastPage.playerpageid,
        _type: "graphic",
        layer: "objects"
    });

    const playerPageId = Campaign().get(_playerPageId);

    var newPageTokens = findObjs({
        _pageid: playerPageId,
        _type: "graphic",
        layer: "objects"
    });


    _.each(oldPageTokens,
        function(oldGraphic) {

            _.each(newPageTokens,
                function(newGraphic) {
                    if (oldGraphic.get("represents") == newGraphic.get("represents") &&
                        oldGraphic.get("represents") != "") {
                        const animaStatus = getTokenAnimaLevel(oldGraphic);
                        setTokenAnimaLevel(newGraphic, animaStatus);

                        const currentMarkers = oldGraphic.get("statusmarkers");
                        newGraphic.set("statusmarkers", currentMarkers);
                    }
                });
        });
}
//#endregion
//#region ATTACK AND DAMAGE FUNCTIONS
function performAttackRoll(msg,
    cmd,
    selectedToken,
    targetToken,
    attackDiceTotal,
    defence,
    defenceValue,
    weaponName,
    weaponDamage,
    weaponOverwhelm,
    details,
    template,
    attackType) {

    // ReSharper disable once UseOfImplicitGlobalInFunctionScope
    sendChat(msg.who,
        cmd,
        function(ops) {
            if (ops[0].type == 'rollresult') {
                const result = JSON.parse(ops[0].content);

                
                const strSplit = ops[0].origRoll.split('-');
                const commands = [];
                // ReSharper disable once UseOfImplicitGlobalInFunctionScope
                _.each(strSplit, parseCommands, commands);

                let doubles;
                // ReSharper disable once UseOfImplicitGlobalInFunctionScope
                if (!_.isEmpty(commands)) {
                    doubles = processCommands(commands, result);
                } else {
                    // If there are no commands passed, the script defaults to doubling 10s, which is what this call represents.
                    doubles = doDoubles(result, true, 0);
                } // if

                // This gets the player's color, for styling the roll result HTML output in build HTML().
                const player = getPlayerFromId(msg.playerid);
                const attackSuccesses = [];
                const outHtml = buildHTML(result,
                    msg.content,
                    ops[0].origRoll,
                    player.get('color'),
                    doubles,
                    attackSuccesses );

                // Passes the final, formatted HTML as a direct message to the chat window.
                details += "<br/>Attack Roll:";
                details += outHtml;

                if (targetToken != null)
                    resolveAttack(msg,
                        selectedToken,
                        targetToken,
                        result.total + 0,
                        defence,
                        defenceValue,
                        weaponName,
                        weaponDamage,
                        weaponOverwhelm,
                        details,
                        template,
                        attackType);

            } else {
                // Error handling.
                printError(ops[0], msg.who);
            } // if
        });
} // performAttackRoll
function resolveAttack(msg,
    selectedToken,
    targetToken,
    successes,
    defence,
    defenceValue,
    weaponName,
    weaponDamage,
    weaponOverwhelm,
    message,
    template,
    attackType) {
    //const tokenBarNumber = 1;

    if (successes < defenceValue) {
        message += getNameFrom(selectedToken) + " fails to defeat " + getNameFrom(targetToken) + "'s excellent " + defence + ".";
        if (attackType == attackTypeDecisive) {

            const currentValueSelected = parseInt(selectedToken.get(bar1Value)) || 0;
            var loss = 2;

            if (currentValueSelected > 11)
                loss = 3;

            message += "  They lose: " + loss + " initiative";

            selectedToken.set(bar1Value, (currentValueSelected - loss));
        }

        template += "{{details=" + message + "}}";

        doSendChat(msg.who, template);
        return;
    }

    var threshold = (successes - defenceValue);

    if (attackType == attackTypeWithering) {
        const targetStamina = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'stamina')) || 0;
        const targetNaturalSoak = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'naturalsoak')) || 0;
        const targetArmorSoak = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'armorsoak')) || 0;

        const selectedStrength = parseInt(getCharacterAttributeFromTokenId(selectedToken.id, 'strength')) || 0;

        const damage = (threshold + selectedStrength + weaponDamage);
        const soak = (targetStamina + targetNaturalSoak + targetArmorSoak);

        message += "<br/>" +
            getNameFrom(selectedToken) +
            "'s " +
            weaponName +
            " successfully pierces " +
            getNameFrom(targetToken) +
            "'s " +
            defence +
            " with " +
            AddStyleSpan(threshold) +
            " threshold successes.";

        var finalDamage = 0;
        if ((damage - soak) < weaponOverwhelm && weaponOverwhelm > 0) {
            message += "<br/>" +
                getNameFrom(selectedToken) +
                "'s final damage is " +
                AddStyleSpan(damage) +
                " vs " +
                getNameFrom(targetToken) +
                "'s total soak [" +
                AddStyleSpan(soak) +
                "] with only the raw Overwhelm damage of " +
                AddStyleSpan(weaponOverwhelm) +
                " remaining.";
            finalDamage = weaponOverwhelm;
        } else if ((damage - soak) < weaponOverwhelm && weaponOverwhelm <= 0) {
            message += "<br/>" +
                getNameFrom(selectedToken) +
                "'s final damage is " +
                AddStyleSpan(damage) +
                " vs " +
                getNameFrom(targetToken) +
                "'s total soak [" +
                AddStyleSpan(soak) +
                "] but the weapon cannot pierce the damage soak.";
            finalDamage = 0;
        } else {
            finalDamage = (damage - soak);
            message += "<br/>" +
                getNameFrom(selectedToken) +
                "'s final damage is " +
                AddStyleSpan(damage) +
                " vs " +
                getNameFrom(targetToken) +
                "'s total soak [" +
                AddStyleSpan(soak) +
                "] with a raw damage of " +
                AddStyleSpan(finalDamage) +
                " remaining.";
        }

        template += "{{details=" + message + "}}";

        doWitheringDamage(msg, selectedToken, targetToken, finalDamage + diceRollMacro, 1, msg.who, message, template);
    } else if (attackType == attackTypeDecisive) {
        message += "<br/>" +
            getNameFrom(selectedToken) +
            "'s " +
            weaponName +
            " successfully pierces " +
            getNameFrom(targetToken) +
            "'s " +
            defence +
            " with " +
            AddStyleSpan(threshold) +
            " threshold successes.";
        var currentInitiativeSelected = parseInt(selectedToken.get(bar1Value)) || 0;
        doDecisiveDamage(msg, selectedToken, targetToken, currentInitiativeSelected, tokenBarNumber, msg.who, message, template);
    }
}
function doDecisiveDamage(msg, selectedToken, targetToken, damage, tokenBarNumber, who, message, template) {
    // ReSharper disable once UseOfImplicitGlobalInFunctionScope
    sendChat(who,
        "/r " + damage + diceRollMacro,
        function(ops) {
            if (ops[0].type != 'rollresult') return;

            var templateRoll = "";
            if (template != null)
                templateRoll = template;
            else
                templateRoll = "&{template:exalted3e_Roll} ";

            var result = JSON.parse(ops[0].content);

            var strSplit = ops[0].origRoll.split('-');
            var regExp = /^.*\#/;
            if (regExp.test(msg.content)) {
                var slc = msg.content.slice(msg.content.indexOf("#") + 1);
                var rawCommands = slc.trim();
                strSplit = rawCommands.split('-');

                if (templateRoll != null && templateRoll.trim() != "")
                    templateRoll = templateRoll + " {{dice-commands=" + rawCommands + "}} ";
                else
                    templateRoll = " {{dice-commands=" + rawCommands + "}} ";
            }
            var doubles = [];
            var commands = [];
            // ReSharper disable once UseOfImplicitGlobalInFunctionScope
            _.each(strSplit, parseCommands, commands);
            // ReSharper disable once UseOfImplicitGlobalInFunctionScope
            if (!_.isEmpty(commands)) {
                doubles = processCommands(commands, result);
            } else {
                // If there are no commands passed, the script defaults to doubling 10s, which is what this call represents.
                doubles = doDoubles(result, true, 0);
            } // if

            // This gets the player's color, for styling the roll result HTML output in build HTML().
            var player = getPlayerFromId(msg.playerid);
            var totalSuccesses = [];
            var outHtml = buildHTML(result, msg.content, ops[0].origRoll, player.get('color'), doubles, totalSuccesses);


           //let damageTotal = parseInt(JSON.parse(ops[0].content).total) || 0;

            if (message == null) message = "";

            message += "<br/> Damage Roll: <br/>" + outHtml;


            templateRoll += " {{information=Decisive Damage}}";
            templateRoll += " {{character-name=" + getNameFrom(selectedToken) + "<br/>vs<br/>" + getNameFrom(targetToken) + "}}";
            templateRoll += " {{totalDice=" + damage + "}}";
            //templateRoll += " {{dice-roll=" + outHTML + "}}";

            //...And resets to base initiative.
            selectedToken.set("bar" + tokenBarNumber + "_value", (3));
            message += "<br/> resetting to base initiative";

            const joinBattleBonus = (parseInt(getCharacterAttributeFromTokenId(selectedToken.id, attrJoinBattleBonus)) || 0);

            setInitiativeAndTurnOrder(selectedToken.id, 3+ joinBattleBonus);
            //Set or increase the purple status icon for overwhelming
            const overwhelmStatus = parseInt(statusGetValue(targetToken, statusOnslaught)) || 0;

            setStatusValue(targetToken, statusOnslaught, overwhelmStatus + 1);

            if (joinBattleBonus != 0) {
                message += "<p style='color:red;font-variant:small-caps'>(Join Battle Bonus: [" + joinBattleBonus + "])</p>";
            }

            templateRoll += "{{details=" + message + "}}";

            doSendChat(msg.who, templateRoll);
        });
}
function doWitheringDamage(msg, selectedToken, targetToken, alterValue, tokenBarNumber, who, message, template) {
    var currentValueTarget = parseInt(targetToken.get(bar1Value)) || 0;
    var currentValueSelected = parseInt(selectedToken.get(bar1Value)) || 0;

    var expression = alterValue;

    // Main process...
    // ReSharper disable once UseOfImplicitGlobalInFunctionScope
    sendChat(who,
        "/r " + alterValue,
        function(ops) {
            if (ops[0].type != 'rollresult') return;

            var player = getPlayerFromId(msg.playerid);
            var result = JSON.parse(ops[0].content);
            var totalSuccesses = [];
            var outHtml = buildHTML(result, msg.content, ops[0].origRoll, player.get('color'), null, totalSuccesses);

            alterValue = parseInt(JSON.parse(ops[0].content).total) || 0;
// ReSharper disable StringLiteralTypo
            var tooltip = "Rolling " + expression + " = " + alterValue + "' class='a inlinerollresult showtip tipsy-n'";
// ReSharper restore StringLiteralTypo

            var setTargetValue = currentValueTarget - alterValue;
            var setSelectedValue = currentValueSelected + alterValue;

            var isTargetBattleGroup = parseInt(getCharacterAttributeFromTokenId(targetToken.id, attrBattleGroup)) || 0;
            var isSelectedBattleGroup = parseInt(getCharacterAttributeFromTokenId(selectedToken.id, attrBattleGroup)) || 0;
//		var battleGroupSize = parseInt(getCharacterAttributeFromTokenId(Selected.id,'battlegroup-size')) || 0;

            var templateRoll = "";
            if (template == null) {
                templateRoll = "&{template:exalted3e_Roll}";
                templateRoll += " {{information=Withering Damage}}";
                templateRoll += " {{character-name=" +
                    getNameFrom(selectedToken) +
                    "<br/>vs<br/>" +
                    getNameFrom(targetToken) +
                    "}}";
            } else
                templateRoll = template;

            var details = "";
            if (isTargetBattleGroup == 0 && currentValueTarget >= 0 && setTargetValue <= 0) {
                setSelectedValue += 5;
                tokenCrashSet(targetToken, 3);
                details = getNameFrom(selectedToken) +
                    " CRASHES " +
                    getNameFrom(targetToken) +
                    " for <span title='" +
                    tooltip +
                    "' style='" +
                    MinusStyle +
                    "'>" +
                    alterValue +
                    "+5</span> " +
                    BarNames[tokenBarNumber - 1] +
                    " with the Initiative Break!";
            } else {
                details = getNameFrom(selectedToken) +
                    " hits " +
                    getNameFrom(targetToken) +
                    " for <span title='" +
                    tooltip +
                    "' style='" +
                    AddStyle +
                    "'>" +
                    alterValue +
                    "</span> " +
                    BarNames[tokenBarNumber - 1] +
                    "!";
            }

            if (message != null)
                details = message + "<br/>Damage roll:<br/>" + outHtml + "<br/>" + details;
            else
                templateRoll += " {{dice-roll=" + outHtml + "}}";

            templateRoll += " {{details=" + details + "}}";

            doSendChat(who, templateRoll);

            if (isTargetBattleGroup == 1)
                setTargetValue = currentValueTarget;

            if (isSelectedBattleGroup == 1)
                setSelectedValue = currentValueSelected;

            targetToken.set("bar" + tokenBarNumber + "_value", setTargetValue);
            selectedToken.set("bar" + tokenBarNumber + "_value", setSelectedValue);

            if (tokenBarNumber == 1) {
                setInitiativeAndTurnOrder(targetToken.id,setTargetValue);
                setInitiativeAndTurnOrder(selectedToken.id,setSelectedValue);
            }
        });
} //exResetInitiative
function doAttackCalculation(selectedTokenId, targetTokenId, successes, rawDamage, attackName, who) {

    const selectedToken = getTokenFromId(selectedTokenId);

    if (selectedToken == null || typeof selectedToken === 'undefined') {
        doSendChat(who, 'doAttackCalculation Selected Token not found');
        return;
    }
    const character = getCharacterFromTokenId(selectedTokenId);

    if (character == null || typeof character === 'undefined') {
        doSendChat(who, 'character not found');
        return;
    }

    if (successes <= 0) {
        doSendChat(who, 'successes is zero or negative');
        return;
    }

    const targetToken = getTokenFromId(targetTokenId);
    if (targetToken == null || typeof targetToken === 'undefined') {
        doSendChat(who, 'Target token not found');
        return;
    }

    const isTargetQc = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'qc')) || 0;
    
    const isSelectedBattleGroup = parseInt(getCharacterAttributeFromTokenId(selectedToken.id, attrBattleGroup)) || 0;
    const selectedBattleGroupSize = parseInt(selectedToken.get(bar2Value)) || 0; // 3
    const isTargetBattleGroup = parseInt(getCharacterAttributeFromTokenId(targetToken.id, attrBattleGroup)) || 0;
    const targetBattlegroupSize = parseInt(targetToken.get(bar2Value)) || 0; // 3

    const selectedBattleGroupDrill = getCharacterAttributeFromTokenId(selectedToken.id, 'battlegroup-drill');
    const selectedBattleGroupMight = parseInt(getCharacterAttributeFromTokenId(selectedToken.id, 'battlegroup-might')) || 0;

    const targetBattleGroupDrill = getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-drill');
    const targetBattleGroupMight = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'battlegroup-might')) || 0;
    

    //	var targetBattlegroupMagnitude = parseInt(TargetToken.get(bar3Value)) || 0; //7
//	var targetBattlegroupHealth = parseInt(getCharacterAttributeFromTokenId(TargetToken.id,'battlegroup-health-levels')) || 0; //7
//	var targetInitiative = parseInt(TargetToken.get(bar1Value)) || 0;
//	var targetArmourName = getCharacterAttributeFromTokenId(TargetToken.id,'armor-name') || '';

    const targetArmourSoak = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'armorsoak')) || 0;
    const targetArmourMobility = parseInt(getCharacterAttributeFromTokenId(targetToken.id, attrArmourMobility)) || 0;
    //var targetArmourHardness = parseInt(getCharacterAttributeFromTokenId(TargetToken.id,'hardness')) || 0;
    const targetStamina = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'stamina')) || 0;
    const targetDexterity = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'dexterity')) || 0;
    const targetDodge = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'dodge')) || 0;

    const targetWoundPenalty = Math.abs(parseInt(getTotalDicePoolModifiers(targetToken.id, null)) || 0);
//	var targetWoundPenalty = parseInt(TargetToken.get(bar3Value)) || 0;
//	var targetWoundPenalty = parseInt(getCharacterAttributeFromTokenId(TargetToken.id,attrWoundPenalty)) || 0;

    var targetNaturalSoak = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'naturalsoak')) || 0;
    var targetTotalSoak = targetStamina + targetNaturalSoak + targetArmourSoak; // @{stamina}+@{naturalsoak}+@{armorsoak}
    var evasionRoot = targetDexterity + targetDodge;
    var evasionRootS = evasionRoot + 1;

    var evasionBase = (Math.ceil(evasionRoot / 2) - Math.abs(targetArmourMobility) - Math.abs(targetWoundPenalty));
    var evasionBaseS = (Math.ceil(evasionRootS / 2) - Math.abs(targetArmourMobility) - Math.abs(targetWoundPenalty));
    var evasionWithoutSpecial = (evasionBase + Math.abs(evasionBase)) / 2;

    var targetParry = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'parry')) || 0;
    var targetParrySpecialty = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'parry-specialty')) || 0;

    if (isTargetQc == 1) {
        targetParry = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'qc-parry')) || 0;
        targetParrySpecialty = targetParry;

        evasionBase = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'qc-evasion')) || 0;
        evasionBaseS = evasionBase;
        evasionWithoutSpecial = evasionBase;

        targetTotalSoak = parseInt(getCharacterAttributeFromTokenId(targetToken.id, 'qc-soak')) || 0;
    }

    const targetOnslaughtProtect = getTokenOnslaughtProtect(targetToken);

    var onslaughtStatus = Math.abs(parseInt(statusGetValue(targetToken, statusOnslaught)) || 0);
    var miscPenalty = Math.abs(parseInt(statusGetValue(targetToken, statusTempMiscPenalty)) || 0);

    if (isSelectedBattleGroup == 1 && isTargetBattleGroup == 0 && targetOnslaughtProtect == 0) {
        onslaughtStatus += selectedBattleGroupSize;
        statusSetValue(targetToken, statusOnslaught, onslaughtStatus);
    }
    if (isSelectedBattleGroup == 1 && isTargetBattleGroup == 0 && targetOnslaughtProtect > 0 && (selectedBattleGroupSize >= (targetOnslaughtProtect + 2))) {
        onslaughtStatus += Math.max(selectedBattleGroupSize - targetOnslaughtProtect, 0);
        statusSetValue(targetToken, statusOnslaught, onslaughtStatus);
    }
    if (isSelectedBattleGroup == 1 && isTargetBattleGroup == 1 && (selectedBattleGroupSize >= (targetBattlegroupSize + 2))) {
        onslaughtStatus += Math.max(selectedBattleGroupSize - targetBattlegroupSize, 0);
        statusSetValue(targetToken, statusOnslaught, onslaughtStatus);
    }
    
    const characterName = getNameFrom(character);
    const targetName = getNameFrom(targetToken) || '';

    // we know how many successes and raw damage from the attack roll
    let templateRoll = "&{template:exalted3e_Roll}";
    templateRoll += " {{character-name=" + characterName + "}}";
    templateRoll += " {{targetName=" + targetName + "}}";
    templateRoll += " {{information=" + attackName + "}}";

    // compare the successes to the current evasion and parry
    // output target's current parry and evasion
    // rawAttackParry = targetParry - successes
    let currentParry = (targetParry - Math.abs(onslaughtStatus) - Math.abs(targetWoundPenalty) - Math.abs(miscPenalty)) ;
    let currentEvasion = (evasionWithoutSpecial - Math.abs(onslaughtStatus) - Math.abs(miscPenalty));

    if (isTargetBattleGroup == 1) {
        if (targetBattleGroupDrill == "Poor") {
            currentParry -= 1;
            currentEvasion -= 1;
        }
        if (targetBattleGroupDrill == "Average") {
            currentParry += targetBattlegroupSize +1;
            currentEvasion += targetBattlegroupSize +1;
        }
        if (targetBattleGroupDrill == "Elite") {
            currentParry += targetBattlegroupSize +2;
            currentEvasion += targetBattlegroupSize +2;
        }
        if (targetBattleGroupMight > 0) {
            currentParry += (targetBattleGroupMight-1);
            currentEvasion += (targetBattleGroupMight-1);
        }
    }

    const rawAttackParry = successes - Math.max(currentParry, 0);
    const rawAttackEvasion = successes - Math.max(currentEvasion, 0);

    //const baseRawDamageParry = (rawAttackParry + rawDamage) - targetTotalSoak;
    //var baseRawDamageParryS = (rawAttackParryS + rawDamage) - targetTotalSoak;
    // baseRawDamageEvasion = (rawAttackEvasion + rawDamage) - targetTotalSoak;
    //const baseRawDamageEvasion = (rawAttackEvasion + rawDamage) - targetTotalSoak;
    //var baseRawDamageEvasionS = (rawAttackEvasionS + rawDamage) - targetTotalSoak;
    const rawParryHit = rawAttackParry >= 0;
    const rawEvasionHit = rawAttackEvasion >= 0; 

    let details = "";
    details +=detailSpan(bgStyle , "Attack Successes", successes);

    if (selectedBattleGroupSize > 0)
        details +=detailSpan(bgStyle , "Battlegroup size", selectedBattleGroupSize);

    if (targetOnslaughtProtect > 0)
        details +=detailSpan(bgStyle , "Onslaught Protection", targetOnslaughtProtect);

    details +=detailSpan(bgStyle , "Onslaught", "-" + onslaughtStatus);

    details += "<p class='attr' style='" + bgStyle + "'>Defence (modified by onslaught)";
    details +=detailSpan(styleIndent , " : Parry", currentParry);
    details +=detailSpan(styleIndent , " : Evasion", currentEvasion);
    details += "</p>";

    details += "<p class='attr' style='" + bgStyle + "'>Raw Threshold Successes";
    const rawParryDesc = rawParryHit ? "hit" : "miss";
    const rawEvasionDesc = rawEvasionHit ? "hit" : "miss";

    details +=detailSpan(styleIndent , " : Parry (" + rawParryDesc +")", rawAttackParry);
    details +=detailSpan(styleIndent , " : Evasion (" + rawEvasionDesc + ")", rawAttackEvasion);
    details += "</p>";

    
    details +=detailSpan(bgStyle , "Raw Damage", rawDamage);
    details +=detailSpan(bgStyle , "Soak", targetTotalSoak);
    details += "</p>";

    details += "<p class='attr' style='" + bgStyle + "'>Base Raw Damage (Threshold + Raw Damage) - Soak";
    details +=detailSpan(styleIndent , " : Parry", (rawAttackParry + rawDamage) - targetTotalSoak);
    details +=detailSpan(styleIndent , " : Evasion", (rawAttackEvasion + rawDamage) - targetTotalSoak);
    details += "</p>";

    templateRoll += " {{details=" + details + "}}";
    templateRoll += "{{buttons=" + generateBGButtonRow(selectedTokenId, targetToken, successes, rawDamage, attackName) + "}}";

    doSendChat(who, templateRoll);
}
function detailSpan(bgStyle, displayText, displayValue) {
    const details = "<p class='attr' style= '" + bgStyle + "'>" 
        + displayText + " [" + displayValue + "]" 
        + "</p>";

        return details;
}
function performQCRoll(msg, cmd, details, characterId, targetToken, rawDamage, information, attackName, characterBattleTokenId, selectedTokenId) {
    // ReSharper disable once UseOfImplicitGlobalInFunctionScope
    sendChat(msg.who,
        cmd,
        function(ops) {
            if (ops[0].type == 'rollresult') {
                const result = JSON.parse(ops[0].content);

                let strSplit = ops[0].origRoll.split('-');
                const regExp = /^.*\#/;
                if (regExp.test(msg.content)) {
                    const slc = msg.content.slice(msg.content.indexOf("#") + 1);
                    const rawCommands = slc.trim();
                    strSplit = rawCommands.split('-');

                    if (details != null && details.trim() != "")
                        details = details + " {{dice-commands=" + rawCommands + "}} ";
                    else
                        details = " {{dice-commands=" + rawCommands + "}} ";
                }
                let doubles ;
                const commands = [];
                // ReSharper disable once UseOfImplicitGlobalInFunctionScope
                _.each(strSplit, parseCommands, commands);

                // ReSharper disable once UseOfImplicitGlobalInFunctionScope
                if (!_.isEmpty(commands)) {
                    doubles = processCommands(commands, result);
                } else {
                    // If there are no commands passed, the script defaults to doubling 10s, which is what this call represents.
                    doubles = doDoubles(result, true, 0);
                } // if

                // This gets the player's color, for styling the roll result HTML output in build HTML().
                const player = getPlayerFromId(msg.playerid);

                const qcSuccesses = [];
                const outHtml = buildHTML(result,
                    msg.content,
                    ops[0].origRoll,
                    player.get('color'),
                    doubles,
                    qcSuccesses);

                if (attackName != null && attackName.length > 0 && characterBattleTokenId) {
                    details += "{{buttons=" + generateBGButtonRow(characterBattleTokenId, targetToken, result.total, rawDamage, information, attackName) + "}}";
                }

                if (attackName != null && attackName.length > 0 && !characterBattleTokenId && selectedTokenId) {
                    details += "{{buttons=" + generateBGButtonRow(selectedTokenId, targetToken, result.total, rawDamage, information, attackName) + "}}";
                }
                

                const whisperMode = msg.content.indexOf("/w");

                if (whisperMode >= 0) {
                    doSendChat(msg.who, "/w gm " + details + " {{dice-roll=" + outHtml + "}}");
                } else {
                    doSendChat(msg.who, "/direct " + details + " {{dice-roll=" + outHtml + "}}");
                }
            } else {
                // Error handling.
                printError(ops[0], msg.who);
            } // if
        });
} // performRoll
function performInitiativeRoll(msg, cmd, targetId, details, addSuccesses) {
    // ReSharper disable once UseOfImplicitGlobalInFunctionScope
    sendChat(msg.who,
        cmd,
        function(ops) {
            if (ops[0].type == 'rollresult') {
                const result = JSON.parse(ops[0].content);

                let doubles ;
                const strSplit = ops[0].origRoll.split('-');
                const commands = [];
                // ReSharper disable once UseOfImplicitGlobalInFunctionScope
                _.each(strSplit, parseCommands, commands);
                // ReSharper disable once UseOfImplicitGlobalInFunctionScope
                if (!_.isEmpty(commands)) {
                    doubles = processCommands(commands, result);
                } else {
                    // If there are no commands passed, the script defaults to doubling 10s, which is what this call represents.
                    doubles = doDoubles(result, true, 0);
                } // if

                // This gets the player's color, for styling the roll result HTML output in build HTML().
                const player = getPlayerFromId(msg.playerid);
                const totalSuccesses = [];
                const outHtml = buildHTML(result,
                    msg.content,
                    ops[0].origRoll,
                    player.get('color'),
                    doubles,
                    totalSuccesses);
                
                doSendChat(msg.who, details + " {{player-color=" + player.get('color') + "}} {{dice-roll=" + outHtml + "}}");
                // Passes the final, formatted HTML as a direct message to the chat window.
                setInitiativeAndTurnOrder(targetId, result.total + 3 + addSuccesses);
            } else {
                // Error handling.
                printError(ops[0], msg.who);
            } // if
        });
} // performInitiativeRoll

function tokenCrashTickDown(targetToken) {
    let currentCrashRound = tokenCrashGet(targetToken);

    if (currentCrashRound == 0) return;
    currentCrashRound--;

    if (currentCrashRound == 0) {
        setInitiativeAndTurnOrder(targetToken.id, 3);
        tokenCrashClear(targetToken);
        doNotify(getNameFrom(targetToken) + " is no longer crashed");
        return;
    }

    tokenCrashSet(targetToken, currentCrashRound);
}
function tokenCrashSet(targetToken, crashRounds) {
    let setValue;
    switch (crashRounds) {
    case 0:
        setValue = false;
        break;
    case 1:
        setValue = true;
        break;
    default:
        setValue = crashRounds;
    }
    statusSetValue(targetToken, statusCrash, setValue);
};
function tokenCrashClear(targetToken) {
    tokenCrashSet(targetToken, 0);
}
function tokenCrashGet(targetToken) {
    let getValue;
    getValue = statusGetValue(targetToken, statusCrash);
    switch (getValue) {
    case 0:
    case false:
        getValue = 0;
        break;
    case 1:
    case true:
        getValue = 1;
        break;
    default:
    }
    return getValue;
}
//#endregion
//#region ROLLING FUNCTIONS
/**
 * The rolling functions. Handles making the roll and passing the results to the anonymous callback function. Extracts the commands from
 * the original roll string, and sends them along to be parsed and executed by the appropriate functions in the script.
 *
 * @param Roll20 Message Object		msg		The original message object.
 * @param string					cmd		The properly parsed /roll command, to pass to the QuantumRoller.
 *
 * @return void
 */
function performRoll(msg, cmd, details, whisperMode) {
    // ReSharper disable once UseOfImplicitGlobalInFunctionScope
    sendChat(msg.who,
        cmd,
        function(ops) {
            if (ops[0].type == 'rollresult') {
                const result = JSON.parse(ops[0].content);

                let strSplit = ops[0].origRoll.split('-');
                const regExp = /^.*\#/;
                if (regExp.test(msg.content)) {
                    const slc = msg.content.slice(msg.content.indexOf("#") + 1);
                    const rawCommands = slc.trim();
                    strSplit = rawCommands.split('-');

                    if (details != null && details.trim() != "")
                        details = details + " {{dice-commands=" + rawCommands + "}} ";
                    else
                        details = " {{dice-commands=" + rawCommands + "}} ";
                }
                let doubles ;
                const commands = [];
                // ReSharper disable once UseOfImplicitGlobalInFunctionScope
                _.each(strSplit, parseCommands, commands);
                // ReSharper disable once UseOfImplicitGlobalInFunctionScope
                doLog("commands");
                doLog(commands);
                if (!_.isEmpty(commands)) {
                    doLog("has commands");
                    doubles = processCommands(commands, result);
                } else {
                    doLog("NO commands");
                    // If there are no commands passed, the script defaults to doubling 10s, which is what this call represents.
                    doubles = doDoubles(result, true, 0);
                } // if

                // This gets the player's color, for styling the roll result HTML output in build HTML().
                const player = getPlayerFromId(msg.playerid);
                const rollSuccesses = [];
                const outHtml = buildHTML(result,
                    msg.content,
                    ops[0].origRoll,
                    player.get('color'),
                    doubles,
                    rollSuccesses);

                const gmWhisperMode = (whisperMode && whisperMode > 0) || msg.content.indexOf("/w");

                if (gmWhisperMode >= 0) {
                    doSendChat(msg.who, "/w gm " + details + " {{dice-roll=" + outHtml + "}}");
                } else {
                    doSendChat(msg.who, "/direct " + details + " {{dice-roll=" + outHtml + "}}");
                }
            } else {
                // Error handling.
                printError(ops[0], msg.who);
            } // if
        });
} // performRoll
/**
 * This is the function called by _.each(), above, to parse each command string into the command and its arguments (if any). In the
 * _.each() call above, the cmds array is passed as the function's context.
 *
 * @param Array element <string>	item	Passed by the Underscore.js _.each() function; is the value of the element that corresponds to the
 *												current pointer in the collection.
 *
 * @return void.
 */
function parseCommands(item) {
    var trim;
    var cmdArr;
    var cmdObj;
    const regExp = /^[rRdD](l?\d*)?/i;
    if (regExp.test(item)) {

        trim = item.trim();
        cmdArr = trim.split(' ');

        // We end up, here, with an object that has two properties: cmd, which contains the command string, and args, which is an array of number
        // values that will be used for that command.
        // ReSharper disable once UseOfImplicitGlobalInFunctionScope
        cmdObj = {
            cmd: cmdArr[0],
            args: (!_.isUndefined(cmdArr[1])) ? cmdArr[1].split(',') : []
        };

        // That object is then pushed to the cmd array, above.
        this.push(cmdObj);
    }

    if (item == 'init') {
        trim = item.trim();
        cmdArr = trim.split(' ');
        // ReSharper disable once UseOfImplicitGlobalInFunctionScope
        cmdObj = {
            cmd: cmdArr[0] + ' &{tracker}',
            args: (!_.isUndefined(cmdArr[1])) ? cmdArr[1].split(',') : []
        };

        // That object is then pushed to the cmd array, above.
        this.push(cmdObj);
    }
} // parseCmds
/**
 * This takes the parsed cmds array and actually interprets those commands and passes them to the appropriate functions. This is sort of the heart
 * of the whole script.
 *
 * @param Array <JavaScript Object>		cmds	The array of parsed commands created with parseCmds(), above.
 * @param JavaScript Object	Reference	result	The contents of the rollresult message from the performRoll() function, including the total successes and
 *													each individual roll result.
 *
 * @return void
 */
function processCommands(commands, result) {

    // Iterating through the list twice isn't terribly efficient, but this ensures that the rerolls have been completed before the doubled successes
    // are evaluated. The result argument is passed as the context for the _.each() function here.

    // ReSharper disable once UseOfImplicitGlobalInFunctionScope
    _.each(commands,
        function(item) {
            // Defaults to pass to the doRerolls() function.
            var recReroll = false;
            var keepHigh = true;

            switch (item.cmd[0]) {
                // The only thing different about the '-R' command is that it turns on recursion, and turns off the keeping of the higher result.
            case 'R':
                recReroll = true;
                keepHigh = false;
                doRerolls(this, item.args, recReroll, keepHigh);
                break;
            case 'r':
                // ReSharper disable once UseOfImplicitGlobalInFunctionScope
                if (!_.isUndefined(item.cmd[1]) && item.cmd[1] == 'l')
                    keepHigh = false;
                doRerolls(this, item.args, recReroll, keepHigh);
                break;
            case 'init':
                recReroll = true;
                keepHigh = false;
                doRerolls(this, item.args, recReroll, keepHigh);
                break;
            default:
                break;
            } // switch
        },
        result); // _.each

    // Makes sure we do the doubles, in case someone passes a reroll command without a double command (the script is supposed to double 10s by default).
    var doneDoubles = false;
    var do10s = true;
    var doubles = [];
    // ReSharper disable once UseOfImplicitGlobalInFunctionScope
    _.each(commands,
        function(item) {
            // Again, setting defaults, which are only changed in a few cases in the switch, below.
            var limit = 0;
            doLog("item");
            doLog(item);
            doLog(item.cmd[0]);

            switch (item.cmd[0]) {
            case 'D':
                doLog("No doubles");
                do10s = false;
                break;
            case 'd':
                doLog("do doubles");
                // ReSharper disable once UseOfImplicitGlobalInFunctionScope
                if (!_.isUndefined(item.cmd[1]) && item.cmd[1] == 'l')
                // ReSharper disable once UseOfImplicitGlobalInFunctionScope
                    limit = (!_.isUndefined(item.cmd[2])) ? item.cmd[2] : 0;
                doubles = doDoubles(result, do10s, limit, item.args);
                doneDoubles = true;
                break;
            default:
                break;
            } // switch
        },
        result); // _.each

    if (!doneDoubles && do10s)
        doubles = doDoubles(result, true, 0);

    //return result.total;
    return doubles;
} // processCmds
/**
 * Handles actually performing the rerolls. Rerolls the passed values once, keeping the highest, unless told to do otherwise.
 *
 * @param JavaScript Object Reference	result		The content of the rollresult message, as above.
 * @param Array <string>				args		The array of die values to reroll.
 * @param Boolean						rec			Whether or not the rerolls are recursive.
 * @param Boolean						keepHigh	Whether or not to keep the higher result.
 *
 * @return void
 */
function doRerolls(result, args, rec, keepHigh) {

    // If we don't have values to reroll, then we don't need to waste our time.
    // ReSharper disable once UseOfImplicitGlobalInFunctionScope
    if (_.isEmpty(args))
        return result;

    // Put the values in a temporary container, so we can mess with them.
    const resultsValues = result.rolls[0].results;

    // Setting the stop condition for the loop. If rec is set to false, the loop will run once, then stop.
    var stop = !rec;
    // This is one of the few cases where I've found a do...while loop to be just about exactly what I needed. Exciting. :D
    do {

        // There's probably a better way to do this, but this made the most sense to me at the time.
        for (let i = 0; i < resultsValues.length; i++) {
            // ReSharper disable once UseOfImplicitGlobalInFunctionScope
            _.each(args,
                function(item) {
                    if (this.v == item) {
                        // ReSharper disable once UseOfImplicitGlobalInFunctionScope
                        const reroll = randomInteger(10);

                        this.v = (keepHigh && reroll < this.v) ? this.v : reroll;
                    } // if
                },
                resultsValues[i]);
        } // for

        // This bit determines if we've run out of values to recursively reroll. In the interest of not wasting time, as soon as
        // count iterates once, the whole thing breaks out and continues. If count makes it through and is still 0, stop is set to
        // true, so the while loop will finish.
        if (!stop) {

            var count = 0;
            for (let i = 0; i < resultsValues.length; i++) {

                for (var j = 0; j < args.length; j++) {

                    if (resultsValues[i].v == args[j]) {
                        count++;
                        break;
                    } // if
                } // for

                if (count > 0)
                    break;
            } // for

            if (count == 0)
                stop = true;
        } // if

    } while (!stop); // do...while

    // Recalculating successes, so we don't end up with phantom successes from before. This awards only one success to any roll above 7, because
    // this total hasn't yet been passed to the doDoubles() function.
    var newTotal = 0;
    for (let i = 0; i < resultsValues.length; i++) {

        if (resultsValues[i].v >= 7)
            newTotal++;
    }

    // Update with the new success total.
    result.total = newTotal;

    // Update the reults with the new values, so doDoubles() has the right ones.
    result.rolls[0].results = resultsValues;
    return result.total;
} //doRerolls
/**
 * This function handles doubling the values. This one is called pretty much every time the script runs, as it's one of the most common things
 * that any roll in Exalted is expected to do.
 *
 * @param JavaScript Object Reference	result		The content of the rollresult message, as above.
 * @param Boolean						do10s		Whether or not to reroll 10s by default.
 * @param integer						limit		The maximum number of doubles to count. "0" means there is no limit.
 * @param Array <string>				args		The values to double. Since this function often doubles just 10s, this can be null.
 *
 * @return void
 */
function doDoubles(result, do10S, limit, args = null) {

    // Set our count, if we have a limit.
    var count = 0;
    if (limit > 0)
        count = 0;

    // Create an empty array for our values to double.
    const doubles = [];

    // Get 10 in there, if we need it.
    if (do10S)
        doubles.push(10);

    // Also get the rest of the values. I probably don't have to parseInt() here, but I'm just being safe.
    // ReSharper disable UseOfImplicitGlobalInFunctionScope
// ReSharper disable PossiblyUnassignedProperty
    if (!_.isNull(args) && !_.isEmpty(args)) {

        
        _.each(args, function(item) { this.push(parseInt(item)); }, doubles);
    }


    // As doRerolls(), above, putting the roll results in a container.
    const resultsValues = result.rolls[0].results;

    if (typeof resultsValues == 'undefined') {
        return null;
    }

    // Initializing the number of successes we'll add.
    var addSuccesses = 0;

    // Assuming we're doubling anything, do that.
    if (!_.isEmpty(doubles)) {
        // The for loops here are so I can break out of them once our count equals our limit.
        for (let i = 0; i < resultsValues.length; i++) {
            for (let j = 0; j < doubles.length; j++) {
                if (resultsValues[i].v == doubles[j]) {
                    // Some charms allow the doubling of results that aren't normally successes. If so, this one will count them as two extra, rather than just one.
                    addSuccesses += (doubles[j] >= 7) ? 1 : 2;
                    if (!_.isUndefined(count))
                        count++;
                } // if
                if (!_.isUndefined(count) && count == limit)
                    break;
            } // for
            if (!_.isUndefined(count) && count == limit)
                break;
        } // for
    } // if
// ReSharper restore UseOfImplicitGlobalInFunctionScope
// ReSharper restore PossiblyUnassignedProperty
    // Add the extra successes to the total.
    result.total += addSuccesses;

    return doubles;
} // doDoubles
/**
 * This builds the raw HTML response for the roll message. This is designed to, as much as is possible, mimic the standard roll result, up to and including
 * adding the d10-shaped result backing in the player's color.
 *
 * @param JavaScript Object reference	result		The content of the rollresult message, as above; now in its final version, with all rolls and successes
 *														accurately calculated.
 * @param string						origCmd		The original API command. Used for debug purposes; currently not in use.
 * @param string						origRoll	The original roll executed by Roll20, for display in the result.
 * @param string						color		The hexadecimal value of the player's selected color.
 *
 * @return string						html		The completed, raw HTML, to be sent in a direct message to the chat window.
 */
function buildHTML(result, origCmd, origRoll, color, doubles, totalSuccesses) {

    // Putting everything in smaller variables that it's easier to type. ;P
    var resultsValues = result.rolls[0].results;
    totalSuccesses = result.total;

    // Roll20 doesn't let us piggyback off of most of their classes. Any script-defined HTML classes automatically have "userscript-" attached to the front
    // of them. The Roll20 CSS has some compatible styling for this already, but it's not complete, so we have to do the rest ourselves.

    // This will set the QuantumRoll icon in a container div, with a negative margin so it will appear in the right place.
    const outerStyle = "background: url('https://app.roll20.net/images/quantumrollsm.png') no-repeat bottom left; margin: 0px 5px -27px -60px;";

    // This offsets the div immediately inside the one above, so it doesn't overlap the icon.
    const innerStyle = "margin: 0 0 7px 45px; padding-bottom: 7px;";

    // The styling for the .formula class.
    var formulaStyle = "font-size:inherit;padding:4px;background:white;border-radius:3px;"; // REMOVED TO TRY TO GET THE TEMPLATE WORKING

    // The styling for the total box at the end of the message.
    var totalStyle = formulaStyle;
    totalStyle += "border:1px solid #d1d1d1;cursor:move;font-size:1.4em;font-weight:bold;line-height:1.0em;"; // TRYING TO DO SMALLER DICE


    // The rest of the .formula style.
    //formulaStyle += "border:1px solid #d1d1d1;font-size:1.1em;line-height:2.0em;word-wrap:break-word;";
    formulaStyle += "border:1px solid #d1d1d1;font-size:1.0em;line-height:2.0em;word-wrap:break-word;"; // TRYING TO DO SMALLER DICE
    // The styling for the .formattedformula class.
    const formattedFormulaStyle = ""; // REMOVED TO TRY TO GET THE TEMPLATE WORKING

    // The styling for the .ui-draggable class, though it doesn't work as it would if it were an official roll.
    const uiDraggableStyle = "cursor:move";


    // Building the output.
    var html = "";
    html += "<div style=\"" + outerStyle + "\">";
    html += "<div style=\"" + innerStyle + "\">";

// ReSharper disable StringLiteralTypo
    html += "<div class=\"formula formattedformula\" style=\"" + formulaStyle + ";" + formattedFormulaStyle + "\">";
    html += "  <div class=\"dicegrouping ui-sortable\" data-groupindex=\"0\">";
// ReSharper restore StringLiteralTypo

    if (doubles != null && doubles.length == 0) doubles = null;

    var hasBotch = 0;
    // Making a little die result for each die rolled.
    
// ReSharper disable UseOfImplicitGlobalInFunctionScope
    _.each(resultsValues,

        function(item, idx) {
            var setColour = "";
            if (item.v == 1) {
                hasBotch++;
                setColour = "red";
            }
            if (doubles != null && doubles.includes(item.v))
                setColour = "orange";
            else if (item.v >= 7) setColour = "purple";
            else if (item.v >= 2 && item.v < 7) setColour = "gray";


            html += "    <div data-origindex=\"" +
                idx +
                "\" class=\"diceroll d10" +
                ((item.v == 1) ? " critfail" : "") +
                ((item.v == 10) ? " critsuccess" : "") +
                "\" style=\"padding: 0px;\">";
            html += "      <div class=\"dicon\">";
            html += "        <div class=\"didroll\"><div style='color:" + setColour + ";'>" + item.v + "</div></div>";
            // Normally the little d10-shaped icons in the back are handled with a combination of CSS classes and in the .backing:after pseudo class.
            // We don't have access to any of that from here, so we have to fudge it. "dicefontd10" is the name of the custom icon font, and "0"
            // corresponds to the outline used in a normal rollresult.
            html += "        <div class=\"backing\"><span style=\"font-family: 'dicefontd10'; color: " +
                color +
                ";\">0</span></div>";
            html += "      </div>";
            html += (idx + 1 != resultsValues.length) ? "   " : "";
            html += "    </div>";
        });
// ReSharper restore UseOfImplicitGlobalInFunctionScope
    html += "  </div>";
    html += "</div>";
    html += "<div style=\"clear: both;\"></div>";

    if (totalSuccesses == 0 && hasBotch > 0) {
        html += "<div class=\"rolled ui-draggable\" style=\"color:red !important;" +
            totalStyle +
            ";" +
            uiDraggableStyle +
            ";\">BOTCH</div>";
        totalSuccesses.value = 0;
    } else if (totalSuccesses == 0) {
        html += "<div class=\"rolled ui-draggable\" style=\"color:black !important;" +
            totalStyle +
            ";" +
            uiDraggableStyle +
            ";\"> FAIL</div>";
        totalSuccesses.value = 0;
    } else {
        html += "<div class=\"rolled ui-draggable\" style=\"color:green !important;" +
            totalStyle +
            ";" +
            uiDraggableStyle +
            ";\">" +
            totalSuccesses +
            " Success" +
            ((totalSuccesses != 1) ? "es" : "") +
            "</div>";
        totalSuccesses.value = totalSuccesses;
    }
    html += "</div>";
    html += "</div>";

    // Sending back the complete HTML string.
    return html;
} // buildHTML
/**
 * This builds the HTML for the message that is sent when the user passes the -help command. It's all pretty standard; if you know HTML already, it should
 * be fairly self-explanatory.
 *
 * @return string		outHtml, outHtml2, outhtml3		I know I probably shouldn't have to return three separate strings, but I kept getting errors
 *															when I did it as one string earlier that I couldn't explain, and so once I got it working,
 *															I stopped touching it.
 */
function buildHelp() {

    var tableStyle = 'border-collapse: collapse;';
    var thStyle = 'text-align: center; width: 100px;';
    var tdStyle = 'padding: 5px; border: 1px solid rgb(200,200,200);';

    var divStyle =
        'border: 1px solid rgb(200,200,200); border-radius: 3px; background-color: white; padding: 5px; margin: 10px 0px;';
    var pStyle = 'margin: 5px 0px; line-height: 1.5;';

    var outHtml = '';
    outHtml += '<div style="' + divStyle + '">';

    outHtml += '<p style="' + pStyle + '"><strong>Exalted 3rd Edition Dice Roller Help</strong></p>';
    outHtml += '<p style="' + pStyle + '">The basic syntax of most rolls you will make is:</p>';
    outHtml += '<p style="' + pStyle + '"><code>!exr ' + cmdRollDice + ' [no. of dice]#</code></p>';
    outHtml += '<p style="' +
        pStyle +
        '">The <code>#</code> marks the end of the dice statement, and this syntax provides the most common type of roll in ';
    outHtml +=
        'Exalted: that many dice, with a target number of 7+, and 10s count double. In the majority of cases, this is all you need.</p>';
    outHtml += '<p style="' +
        pStyle +
        '">Charms, however, can throw a wrench in this, so I designed the script to be able to compensate. With the additional ';
    outHtml +=
        'commands and arguments, you can customize the way the roller treats your results and counts your successes, in order to match that behavior.</p>';
    outHtml += '<p style="' + pStyle + '">The full syntax of rolls is as follows:</p>';
    outHtml += '<p style="' +
        pStyle +
        '"><code>!exr ' +
        cmdRollDice +
        ' [no. of dice]# -[cmd1] [arg1],[arg2]... -[cmd2] [arg3],[arg4]...</code></p>';
    outHtml += '<p style="' +
        pStyle +
        '"><em>You can also type <code>!exr -help</code> to pull up this menu again, if necessary.</em></p>';
    outHtml += '<br />';

    outHtml += '<p style="' + pStyle + '">The following table explains the various commands.</p>';

    var outHtml2 = '<table style="' + tableStyle + '">';
    outHtml2 += '<tr><th style="' +
        tdStyle +
        ' ' +
        thStyle +
        '">Command</th><th style="' +
        tdStyle +
        ' ' +
        thStyle +
        '">Explanation</th></tr>';

    outHtml2 += '<tbody>';
    outHtml2 += '<tr>';
    outHtml2 += '<td style="' + tdStyle + '">';
    outHtml2 += '<p style="' + pStyle + ' ' + thStyle + '"><code>-d / -D [l]</code></p>';
    outHtml2 += '</td>';
    outHtml2 += '<td style="' + tdStyle + '">';
    outHtml2 += '<p style="' +
        pStyle +
        '">These commands cover doubling of successful results. <code>-d</code>, followed by a comma-delimited list of values ';
    outHtml2 +=
        'to double, automatically doubles 10s. <code>-D</code> does not (mostly useful for damage rolls). <code>-d</code> without arguments is ';
    outHtml2 +=
        'unnecessary, as the script will double 10s by default. You <em>may</em> pass <code>-D</code> by itself, to double nothing.</p>';
    outHtml2 += '<p style="' +
        pStyle +
        '">The optional <code>l</code> modifier covers cases where a charm or effect offers limited doubled results. ';
    outHtml2 +=
        'Just add <code>l</code> and the maximum number of doubles after the command, <em>e.g.,</em> <code>-dl5</code>.</p>';
    outHtml2 += '</td>';
    outHtml2 += '</tr>';

    var outHtml3 = '<tr>';
    outHtml3 += '<td style="' + tdStyle + ' ' + thStyle + '">';
    outHtml3 += '<p style="' + pStyle + ' ' + thStyle + '"><code>-r / -R [l]</code></p>';
    outHtml3 += '</td>';
    outHtml3 += '<td style="' + tdStyle + '">';
    outHtml3 += '<p style="' +
        pStyle +
        '">These cover rerolls. <code>-r</code> provides single rerolls—once the values have been rerolled once, that\'s it. ';
    outHtml3 +=
        'It also defaults to keeping the higher of the two results (if you need to keep the second roll regardless, pass the <code>l</code> modifier, ';
    outHtml3 +=
        'below). <code>-R</code> is a <em>recursive</em> reroll, and covers the cases where a charm or effect instructs you to "reroll [x]s until [x]s ';
    outHtml3 +=
        'fail to appear." It will keep rerolling the results in the comma-delimited list of arguments until those values are no longer in the pool, for ';
    outHtml3 += 'better or for worse.</p>';
    outHtml3 += '<p style="' +
        pStyle +
        '">The optional <code>l</code> modifier behaves differently than above here. As mentioned briefly before, this modifier ';
    outHtml3 +=
        'signals the script that you want to keep the rerolled value, regardless of which is higher. The syntax for such a command would look like ';
    outHtml3 += '<code>-rl 6,4</code>, for example. As -R is going to keep rolling until identical ';
    outHtml3 += 'results fail to appear, this modifier has no effect on those rolls</p>';
    outHtml3 += '</td>';
    outHtml3 += '</tr>';

    outHtml3 += '<tr>';
    outHtml3 += '<td style="' + tdStyle + ' ' + thStyle + '">';
    outHtml3 += '<p style="' + pStyle + '"><code>' + cmdJoinBattle + '</code></p>';
    outHtml3 += '</td>';
    outHtml3 += '<td style="' + tdStyle + '">';
    outHtml3 += '<p style="' + pStyle + '">Performs a Join Battle roll for the selected character</p>';
    outHtml3 += '</td>';
    outHtml3 += '</tr>';

    outHtml3 += '<tr>';
    outHtml3 += '<td style="' + tdStyle + ' ' + thStyle + '">';
    outHtml3 += '<p style="' + pStyle + '"><code>' + cmdWitheringDamage + '</code></p>';
    outHtml3 += '</td>';
    outHtml3 += '<td style="' + tdStyle + '">';
    outHtml3 += '<p style="' +
        pStyle +
        '">Inflicts Withering Damage on a targeted token. The selected character gains the initiative lost by the target, and updates the turn tracker.</p>';
    outHtml3 += '</td>';
    outHtml3 += '</tr>';

    outHtml3 += '<tr>';
    outHtml3 += '<td style="' + tdStyle + ' ' + thStyle + '">';
    outHtml3 += '<p style="' + pStyle + '"><code>' + cmdAttackTarget + '</code></p>';
    outHtml3 += '</td>';
    outHtml3 += '<td style="' + tdStyle + '">';
    outHtml3 += '<p style="' +
        pStyle +
        '">Test code with too many parameters to be useful, but shows all the necessary steps to perform an attack on a target token.</p>';
    outHtml3 += '</td>';
    outHtml3 += '</tr>';

    outHtml3 += '<tr>';
    outHtml3 += '<td style="' + tdStyle + ' ' + thStyle + '">';
    outHtml3 += '<p style="' + pStyle + '"><code>' + cmdAttackFromCharacterSheetDex + '</code></p>';
    outHtml3 += '</td>';
    outHtml3 += '<td style="' + tdStyle + '">';
    outHtml3 += '<p style="' +
        pStyle +
        '">Performs an attack roll from the character sheet, given the type of attack and a target.</p>';
    outHtml3 += '</td>';
    outHtml3 += '</tr>';

    outHtml3 += '<tr>';
    outHtml3 += '<td style="' + tdStyle + ' ' + thStyle + '">';
    outHtml3 += '<p style="' + pStyle + '"><code>' + cmdAttackToken + '</code></p>';
    outHtml3 += '</td>';
    outHtml3 += '<td style="' + tdStyle + '">';
    outHtml3 += '<p style="' + pStyle + '">Performs an attack roll from a token.</p>';
    outHtml3 += '<p style="' + pStyle + '">Requires a selected token, a target token and a weapon name.</p>';
    outHtml3 += '<p style="' +
        pStyle +
        '">Needs a character ability to somehow provide a list of weapon names on the characters repeater.</p>';
    outHtml3 += '<p style="' +
        pStyle +
        '">This should NOT resolve the attack, but SHOULD roll the character\'s attack dice and display the .</p>';
    outHtml3 += '</td>';
    outHtml3 += '</tr>';

    outHtml3 += '<tr>';
    outHtml3 += '<td style="' + tdStyle + ' ' + thStyle + '">';
    outHtml3 += '<p style="' + pStyle + '"><code>' + cmdRollWitheringDamage + '</code></p>';
    outHtml3 += '</td>';
    outHtml3 += '<td style="' + tdStyle + '">';
    outHtml3 += '<p style="' + pStyle + '">Rolls damage dice for a withering attack.</p>';
    outHtml3 += '<p style="' + pStyle + '">Requires a selected token, a target token and a weapon name.</p>';
    outHtml3 += '<p style="' +
        pStyle +
        '">Needs a character ability to somehow provide a list of weapon names on the characters repeater.</p>';
    outHtml3 += '<p style="' +
        pStyle +
        '">The Damage dice is entered, rolled and the result applied to the target and attacker .</p>';
    outHtml3 += '</td>';
    outHtml3 += '</tr>';

    outHtml3 += '<tr>';
    outHtml3 += '<td style="' + tdStyle + ' ' + thStyle + '">';
    outHtml3 += '<p style="' + pStyle + '"><code>' + cmdRollDecisiveDamage + '</code></p>';
    outHtml3 += '</td>';
    outHtml3 += '<td style="' + tdStyle + '">';
    outHtml3 += '<p style="' + pStyle + '">Rolls damage dice for a decisive attack.</p>';
    outHtml3 += '<p style="' + pStyle + '">Requires a selected token, a target token and a weapon name.</p>';
    outHtml3 += '<p style="' +
        pStyle +
        '">Needs a character ability to somehow provide a list of weapon names on the characters repeater.</p>';
    outHtml3 += '<p style="' +
        pStyle +
        '">The current initiative of the selected token is taken in dice, rolled and displayed.</p>';
    outHtml3 += '<p style="' + pStyle + '">I don\'t think it possible to apply the damage.</p>';
    outHtml3 += '</td>';
    outHtml3 += '</tr>';

    outHtml3 += '</tbody>';
    outHtml3 += '</table>';
    outHtml3 += '</div>';

    return outHtml + outHtml2 + outHtml3;
} // buildHelp
/**
 * This PMs an error message to the user in the event that it doesn't understand something.
 *
 * @param JavaScript Object Reference	result		The content of the rollresult message, as above.
 * @param string						sender		The name of the player who sent the command. Corresponds to msg.who in the original on() function call.
 *
 * @return void
 */
function printError(result, sender) {
    doLog('Error! ' + result.content);

    if (result.type == 'error') {
        doSendChat(scriptTitle,
            '/w ' + sender + ' I tried, but Roll20 had a problem with this. They said: ' + result.content);
    } else {
        doSendChat(scriptTitle, '/w ' + sender + ' Sorry, I did not understand your input. Please try again.');
    } // if
} // printError
//#endregion
