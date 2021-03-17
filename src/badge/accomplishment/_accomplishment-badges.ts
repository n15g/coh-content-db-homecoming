import {IBadgeData} from "coh-content-db";
import {Gullible} from "./gullible";
import {Rescuer} from "./rescuer";
import {Accelerated} from "./accelerated";
import {AceUpTheirSleeve} from "./ace-up-their-sleeve";
import {Agent} from "./agent";
import {AgentOfDiscord} from "./agent-of-discord";
import {Agile} from "./agile";
import {AlphaStruck} from "./alpha-struck";
import {Apocalyptic} from "./apocalyptic";
import {Arbiter} from "./arbiter";
import {ArchitectWriter} from "./architect-writer";
import {Assistant} from "./assistant";
import {AvatarSmasher} from "./avatar-smasher";
import {AvidReader} from "./avid-reader";
import {Backup} from "./backup";
import {BadLuck} from "./bad-luck";
import {BaneOfAjax} from "./bane-of-ajax";
import {BehaviorAdjuster} from "./behavior-adjuster";
import {BinderOfBeasts} from "./binder-of-beasts";
import {BlackenedSoul} from "./blackened-soul";
import {Bodyguard} from "./bodyguard";
import {BoneCollector} from "./bone-collector";
import {BoundForGlory} from "./bound-for-glory";
import {BrickstownsKeeper} from "./brickstowns-keeper";
import {BrightestSun} from "./brightest-sun";
import {BurkholdersBane} from "./burkholders-bane";
import {Cabalist} from "./cabalist";
import {Chameleon} from "./chameleon";
import {Charmer} from "./charmer";
import {Chatterbox} from "./chatterbox";
import {CimeroranHero} from "./cimeroran-hero";
import {CitadelsAssistant} from "./citadels-assistant";
import {CivilizationsSavior} from "./civilizations-savior";
import {ColumnBreaker} from "./column-breaker";
import {Corrupter} from "./corrupter";
import {CouchPotato} from "./couch-potato";
import {CrystalKeeper} from "./crystal-keeper";
import {DamHero} from "./dam-hero";
import {DarkHeart} from "./dark-heart";
import {DeathDenied} from "./death-denied";
import {DenialOfService} from "./denial-of-service";
import {DestroyerOfStrength} from "./destroyer-of-strength";
import {DimensionalInvestigator} from "./dimensional-investigator";
import {DoNoHarm} from "./do-no-harm";
import {EarToTheStreet} from "./ear-to-the-street";
import {EfficiencyExpert} from "./efficiency-expert";
import {Emancipator} from "./emancipator";
import {EmbodimentOfLaw} from "./embodiment-of-law";
import {Empowered} from "./empowered";
import {EnemyOfTheState} from "./enemy-of-the-state";
import {Escapist} from "./escapist";
import {ExplosiveFinale} from "./explosive-finale";
import {Exterminator} from "./exterminator";
import {EyeOfVengeance} from "./eye-of-vengeance";
import {FaceOfEvil} from "./face-of-evil";
import {Father} from "./father";
import {FormerServantOfRecluse} from "./former-servant-of-recluse";
import {FreedomCracker} from "./freedom-cracker";
import {Frontline} from "./frontline";
import {GerminatorTerminator} from "./germinator-terminator";
import {GroupFounder} from "./group-founder";
import {HamidonsEnemy} from "./hamidons-enemy";
import {HeartOfHatred} from "./heart-of-hatred";
import {HelpingHand} from "./helping-hand";
import {HonoraryBro} from "./honorary-bro";
import {HonoraryPeacebringer} from "./honorary-peacebringer";
import {HunterOfSpecters} from "./hunter-of-specters";
import {HydraStomper} from "./hydra-stomper";
import {ImperialCitysSavior} from "./imperial-citys-savior";
import {Incarnate} from "./incarnate";
import {Initiate} from "./initiate";
import {Inquisitor} from "./inquisitor";
import {KeeperOfCoralLore} from "./keeper-of-coral-lore";
import {KeyesTechnician} from "./keyes-technician";
import {KnifeButcher} from "./knife-butcher";
import {LambdaLeader} from "./lambda-leader";
import {LandSeaAir} from "./land-sea-air";
import {Laureate} from "./laureate";
import {Leviathan} from "./leviathan";
import {Liberator} from "./liberator";
import {LongArmOfTheLaw} from "./long-arm-of-the-law";
import {LostSavior} from "./lost-savior";
import {LoyalCustomer} from "./loyal-customer";
import {Loyalist} from "./loyalist";
import {MadeAStand} from "./made-a-stand";
import {MageHunter} from "./mage-hunter";
import {Magistrate} from "./magistrate";
import {ManticoresAssociate} from "./manticores-associate";
import {MaskMaker} from "./mask-maker";
import {MayhemsCreator} from "./mayhems-creator";
import {MemberOfVanguard} from "./member-of-vanguard";
import {MentalVoyager} from "./mental-voyager";
import {Meteorologist} from "./meteorologist";
import {MidnightSquad} from "./midnight-squad";
import {MoralHighGround} from "./moral-high-ground";
import {MysticalSavior} from "./mystical-savior";
import {NaniteMan} from "./nanite-man";
import {Negotiator} from "./negotiator";
import {NuminasCompatriot} from "./numinas-compatriot";
import {Obliterator} from "./obliterator";
import {OneOfTheEight} from "./one-of-the-eight";
import {Oobatz} from "./oobatz";
import {OriginOfPower} from "./origin-of-power";
import {PainKiller} from "./pain-killer";
import {Partner} from "./partner";
import {PartyCrasher} from "./party-crasher";
import {Peerless} from "./peerless";
import {PendragonsAlly} from "./pendragons-ally";
import {PenelopeYinsFriend} from "./penelope-yins-friend";
import {PenitentOfVice} from "./penitent-of-vice";
import {PirateHunter} from "./pirate-hunter";
import {PlagueCarrier} from "./plague-carrier";
import {PlagueStopper} from "./plague-stopper";
import {PortalHopper} from "./portal-hopper";
import {PortalSmasher} from "./portal-smasher";
import {PositronsAlly} from "./positrons-ally";
import {PraetorSelfish} from "./praetor-selfish";
import {ProbationDenied} from "./probation-denied";
import {Promethean} from "./promethean";
import {ProtectorOfKindness} from "./protector-of-kindness";
import {Protester} from "./protester";
import {ProudScientist} from "./proud-scientist";
import {Pwnz} from "./pwnz";
import {Pyromaniac} from "./pyromaniac";
import {Qualified} from "./qualified";
import {Redeemer} from "./redeemer";
import {RemembersTheirFriends} from "./remembers-their-friends";
import {ResistanceMember} from "./resistance-member";
import {RiptidesComrade} from "./riptides-comrade";
import {RuleOfThree} from "./rule-of-three";
import {SavedTheWorld} from "./saved-the-world";
import {SaviorOfAtlasPark} from "./savior-of-atlas-park";
import {Seaweed} from "./seaweed";
import {ShiningStar} from "./shining-star";
import {SiblingRivalry} from "./sibling-rivalry";
import {SingularVision} from "./singular-vision";
import {SisterPsychesComrade} from "./sister-psyches-comrade";
import {SkipTracer} from "./skip-tracer";
import {SkullBuster} from "./skull-buster";
import {SlagReaper} from "./slag-reaper";
import {SlayerOfMadness} from "./slayer-of-madness";
import {SoulTaker} from "./soul-taker";
import {SpeedDemon} from "./speed-demon";
import {Speeder} from "./speeder";
import {Spelunker} from "./spelunker";
import {SpinDoctor} from "./spin-doctor";
import {SpiritWarrior} from "./spirit-warrior";
import {StoneCold} from "./stone-cold";
import {Streetwise} from "./streetwise";
import {Strikebreaker} from "./strikebreaker";
import {Supernova} from "./supernova";
import {Surefooted} from "./surefooted";
import {Survivor} from "./survivor";
import {SynapsesCohort} from "./synapses-cohort";
import {TakedownArtist} from "./takedown-artist";
import {TemporalStrife} from "./temporal-strife";
import {TenTimesTheVictor} from "./ten-times-the-victor";
import {TestedTheWater} from "./tested-the-water";
import {TheCentersNemesis} from "./the-centers-nemesis";
import {TheDeterminedMentor} from "./the-determined-mentor";
import {TheDoctorsAlly} from "./the-doctors-ally";
import {TheFairest} from "./the-fairest";
import {TheOnceAndFutureKing} from "./the-once-and-future-king";
import {TheThiefOfMidnight} from "./the-thief-of-midnight";
import {TheTimelessAdventurer} from "./the-timeless-adventurer";
import {TippedOff} from "./tipped-off";
import {Transcendent} from "./transcendent";
import {Transmogrified} from "./transmogrified";
import {TrueNemesis} from "./true-nemesis";
import {TruthTeller} from "./truth-teller";
import {Tyrant} from "./tyrant";
import {UndergroundSeeker} from "./underground-seeker";
import {VillainOfTheMonth} from "./villain-of-the-month";
import {WalkingThePath} from "./walking-the-path";
import {WarCriminal} from "./war-criminal";
import {WarWallDefender} from "./war-wall-defender";
import {WeaponMaster} from "./weapon-master";
import {WellDrinker} from "./well-drinker";
import {WellInformed} from "./well-informed";
import {YouShouldSeeTheOtherGuy} from "./you-should-see-the-other-guy";
import {ContainmentSpecialist} from "./containment-specialist";
import {PatientZero} from "./patient-zero";
import {TarnishedStar} from "./tarnished-star";
import {TheGreaterGood} from "./the-greater-good";
import {WentOffScript} from "./went-off-script";
import {UncivilWarrior} from "./uncivil-warrior";
import {PowerLiberator} from "../accolade/power-liberator";

export const AccomplishmentBadges: IBadgeData[] = [

    FormerServantOfRecluse,
    BinderOfBeasts,
    PirateHunter,
    Leviathan,
    CrystalKeeper,
    PlagueCarrier,
    MaskMaker,
    StoneCold,
    BoneCollector,
    PenitentOfVice,
    Seaweed,
    Strikebreaker,
    SlagReaper,
    AgentOfDiscord,
    SoulTaker,
    BadLuck,
    Exterminator,
    SkipTracer,
    PortalHopper,
    PartyCrasher,
    MageHunter,
    EfficiencyExpert,
    CouchPotato,
    Rescuer,
    SavedTheWorld,
    Peerless,
    MemberOfVanguard,
    Apocalyptic,
    SpeedDemon,
    Accelerated,
    Qualified,
    TheThiefOfMidnight,
    MidnightSquad,
    LostSavior,
    OriginOfPower,
    TemporalStrife,
    Speeder,
    Agile,
    Surefooted,
    BaneOfAjax,
    ExplosiveFinale,
    TheFairest,
    SingularVision,
    RuleOfThree,
    DamHero,
    Laureate,
    Protester,
    TakedownArtist,
    DenialOfService,
    MoralHighGround,
    TippedOff,
    WalkingThePath,
    EarToTheStreet,
    Streetwise,
    WellInformed,
    Inquisitor,
    TestedTheWater,
    MadeAStand,
    AvidReader,
    Loyalist,
    Magistrate,
    Tyrant,
    ResistanceMember,
    Obliterator,
    Survivor,
    Escapist,
    PainKiller,
    PowerLiberator,
    ColumnBreaker,
    Arbiter,
    WeaponMaster,
    AlphaStruck,
    HelpingHand,
    KeeperOfCoralLore,
    Initiate,
    Empowered,
    WellDrinker,
    Incarnate,
    Assistant,
    Backup,
    Partner,
    BurkholdersBane,
    PositronsAlly,
    SynapsesCohort,
    SisterPsychesComrade,
    PenelopeYinsFriend,
    CitadelsAssistant,
    ManticoresAssociate,
    NuminasCompatriot,
    Liberator,
    Transcendent,
    Charmer,
    Transmogrified,
    Negotiator,
    Spelunker,
    PlagueStopper,
    SpiritWarrior,
    Pwnz,
    Chameleon,
    Redeemer,
    MysticalSavior,
    Corrupter,
    WarWallDefender,
    TheDoctorsAlly,
    Frontline,
    DoNoHarm,
    Emancipator,
    Meteorologist,
    TrueNemesis,
    Bodyguard,
    Agent,
    LandSeaAir,
    Promethean,
    BehaviorAdjuster,
    LambdaLeader,
    KeyesTechnician,
    UndergroundSeeker,
    SaviorOfAtlasPark,
    FreedomCracker,
    ShiningStar,
    BrightestSun,
    Supernova,
    DarkHeart,
    BlackenedSoul,
    FaceOfEvil,
    HydraStomper,
    GerminatorTerminator,
    SpinDoctor,
    MentalVoyager,
    DeathDenied,
    SiblingRivalry,
    LoyalCustomer,
    EyeOfVengeance,
    TheDeterminedMentor,
    KnifeButcher,
    HunterOfSpecters,
    TheTimelessAdventurer,
    HeartOfHatred,
    ArchitectWriter,
    BoundForGlory,
    NaniteMan,
    PraetorSelfish,
    CimeroranHero,
    TruthTeller,
    TheOnceAndFutureKing,
    OneOfTheEight,
    ImperialCitysSavior,
    EmbodimentOfLaw,
    EnemyOfTheState,
    GroupFounder,
    BrickstownsKeeper,
    TheCentersNemesis,
    WarCriminal,
    VillainOfTheMonth,
    MayhemsCreator,
    CivilizationsSavior,
    LongArmOfTheLaw,
    Chatterbox,
    PendragonsAlly,
    RiptidesComrade,
    HamidonsEnemy,
    HonoraryBro,
    RemembersTheirFriends,
    Pyromaniac,
    AvatarSmasher,
    AceUpTheirSleeve,
    Father,
    ProudScientist,
    DimensionalInvestigator,
    SkullBuster,
    YouShouldSeeTheOtherGuy,
    Oobatz,
    ProbationDenied,
    Gullible,
    HonoraryPeacebringer,
    PortalSmasher,
    DestroyerOfStrength,
    ProtectorOfKindness,
    SlayerOfMadness,
    Cabalist,
    TenTimesTheVictor,
    ContainmentSpecialist,
    TheGreaterGood,
    WentOffScript,
    UncivilWarrior,
    TarnishedStar,
    PatientZero
];
