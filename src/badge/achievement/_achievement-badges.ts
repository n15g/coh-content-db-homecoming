import {IBadgeData} from "coh-content-db";
import {Tourist} from "./tourist";
import {Collector} from "./collector";
import {Explorer} from "./explorer";
import {Pathfinder} from "./pathfinder";
import {Trailblazer} from "./trailblazer";
import {Seeker} from "./seeker";
import {Adventurer} from "./adventurer";
import {Questing} from "./questing";
import {Voyager} from "./voyager";
import {UntilTheEndOfTheWorld} from "./until-the-end-of-the-world";
import {APerfectStorm} from "./a-perfect-storm";
import {AboveTheLaw} from "./above-the-law";
import {Adamant} from "./adamant";
import {Advisor} from "./advisor";
import {AlarmRaiser} from "./alarm-raiser";
import {Aloof} from "./aloof";
import {AlreadyDead} from "./already-dead";
import {Antacid} from "./antacid";
import {AntiAntiMatter} from "./anti-anti-matter";
import {Apathetic} from "./apathetic";
import {ArmyOfNeu} from "./army-of-neu";
import {Ascended} from "./ascended";
import {AvatarAssassin} from "./avatar-assassin";
import {Avenger} from "./avenger";
import {AvoidsTheGreenStuff} from "./avoids-the-green-stuff";
import {BailoutHero} from "./bailout-hero";
import {BeyondReasonableDoubt} from "./beyond-reasonable-doubt";
import {BombSquad} from "./bomb-squad";
import {Bounty} from "./bounty";
import {BrotherlyLove} from "./brotherly-love";
import {BuddyCop} from "./buddy-cop";
import {BunkerBuster} from "./bunker-buster";
import {BurdenBearer} from "./burden-bearer";
import {CadaverCounter} from "./cadaver-counter";
import {Caged} from "./caged";
import {Cataclysmic} from "./cataclysmic";
import {Celebrity} from "./celebrity";
import {ComeFullCircle} from "./come-full-circle";
import {Confined} from "./confined";
import {Connected} from "./connected";
import {CouldntCareLess} from "./couldnt-care-less";
import {Curator} from "./curator";
import {Dastardly} from "./dastardly";
import {DaylightSaver} from "./daylight-saver";
import {DeadlyCombatant} from "./deadly-combatant";
import {Deathless} from "./deathless";
import {Decimator} from "./decimator";
import {DefenderOfPrimalEarth} from "./defender-of-primal-earth";
import {DefenderOfTruth} from "./defender-of-truth";
import {Demolitionist} from "./demolitionist";
import {Descended} from "./descended";
import {DiamondInTheRough} from "./diamond-in-the-rough";
import {DignifiedCombatant} from "./dignified-combatant";
import {Doctor} from "./doctor";
import {Dreamwalker} from "./dreamwalker";
import {DroneProtector} from "./drone-protector";
import {Eliminator} from "./eliminator";
import {Empath} from "./empath";
import {Entangled} from "./entangled";
import {Epitome} from "./epitome";
import {Eradicator} from "./eradicator";
import {Exalted} from "./exalted";
import {Executioner} from "./executioner";
import {FairBalanced} from "./fair-balanced";
import {FalseProphet} from "./false-prophet";
import {Fearsome} from "./fearsome";
import {FireMarshal} from "./fire-marshal";
import {FirebaseZuluSecurityDetail} from "./firebase-zulu-security-detail";
import {FoodCritic} from "./food-critic";
import {Frenzied} from "./frenzied";
import {Gallant} from "./gallant";
import {GiftedSpeaker} from "./gifted-speaker";
import {GottaKeepEmSeparated} from "./gotta-keep-em-separated";
import {GrandGourmet} from "./grand-gourmet";
import {GrassIsMeaner} from "./grass-is-meaner";
import {GuardianOfForever} from "./guardian-of-forever";
import {Guide} from "./guide";
import {Hacker} from "./hacker";
import {HeardTheCall} from "./heard-the-call";
import {HeroOfTheCity} from "./hero-of-the-city";
import {Immortal} from "./immortal";
import {Imprisoned} from "./imprisoned";
import {IncarnateRival} from "./incarnate-rival";
import {Indestructible} from "./indestructible";
import {Interceptor} from "./interceptor";
import {Invulnerable} from "./invulnerable";
import {IronChef} from "./iron-chef";
import {Irradiated} from "./irradiated";
import {Jailed} from "./jailed";
import {JusticeIncarnate} from "./justice-incarnate";
import {KeeperOfPeace} from "./keeper-of-peace";
import {KittysGotClaws} from "./kittys-got-claws";
import {Kleptomaniac} from "./kleptomaniac";
import {KnowsNoFear} from "./knows-no-fear";
import {LambdaLooter} from "./lambda-looter";
import {Leader} from "./leader";
import {LifeAndDeath} from "./life-and-death";
import {LoneWolf} from "./lone-wolf";
import {LostConnectionToServer} from "./lost-connection-to-server";
import {LovesAChallenge} from "./loves-a-challenge";
import {Marauder} from "./marauder";
import {MasterOfApexsTaskForce} from "./master-of-apexs-task-force";
import {MasterOfDilemmaDiabolique} from "./master-of-dilemma-diabolique";
import {MasterOfTheKeyesIslandReactor} from "./master-of-the-keyes-island-reactor";
import {MasterOfLadyGreysTaskForce} from "./master-of-lady-greys-task-force";
import {MasterOfTheLambdaSector} from "./master-of-the-lambda-sector";
import {MasterOfLordReclusesStrikeForce} from "./master-of-lord-recluses-strike-force";
import {MasterOfTheMagisterium} from "./master-of-the-magisterium";
import {MasterOfTheMindsOfMayhem} from "./master-of-the-minds-of-mayhem";
import {MasterOfMsLibertysTaskForce} from "./master-of-ms-libertys-task-force";
import {MasterOfThe5thColumnStrikeForce} from "./master-of-the-5th-column-strike-force";
import {MasterOfThe5thColumnTaskForce} from "./master-of-the-5th-column-task-force";
import {MasterOfTheBAF} from "./master-of-the-baf";
import {MasterOfTheImperiousTaskForce} from "./master-of-the-imperious-task-force";
import {MasterOfTheUnderground} from "./master-of-the-underground";
import {MasterOfTinMagesTaskForce} from "./master-of-tin-mages-task-force";
import {MasterOfTheTpnCampus} from "./master-of-the-tpn-campus";
import {Medic} from "./medic";
import {MedicalSpecialist} from "./medical-specialist";
import {MedicineMan} from "./medicine-man";
import {MidnightDodgerWhatDodgesAtMidnight} from "./midnight-dodger-what-dodges-at-midnight";
import {NewsFlash} from "./news-flash";
import {NighIndestructible} from "./nigh-indestructible";
import {NoOneLeftBehind} from "./no-one-left-behind";
import {NotOnMyWatch} from "./not-on-my-watch";
import {Packrat} from "./packrat";
import {Paradigm} from "./paradigm";
import {Paragon} from "./paragon";
import {Pedestrian} from "./pedestrian";
import {Pickpocket} from "./pickpocket";
import {PickyEater} from "./picky-eater";
import {PocketDVipGoldClubMember} from "./pocket-d-vip-gold-club-member";
import {Popular} from "./popular";
import {PPDDeputy} from "./ppd-deputy";
import {PreservationSpecialist} from "./preservation-specialist";
import {ProtectorOfInnocents} from "./protector-of-innocents";
import {ReadyToRumble} from "./ready-to-rumble";
import {ReformedFirebug} from "./reformed-firebug";
import {RegenerateThis} from "./regenerate-this";
import {Relentless} from "./relentless";
import {Restrained} from "./restrained";
import {RoleModel} from "./role-model";
import {SacrificialLamb} from "./sacrificial-lamb";
import {Scoundrel} from "./scoundrel";
import {SecurityExpert} from "./security-expert";
import {Sensation} from "./sensation";
import {SentinelSmasher} from "./sentinel-smasher";
import {ShadowMaster} from "./shadow-master";
import {SiderealResearcher} from "./sidereal-researcher";
import {SirensSong} from "./sirens-song";
import {Spinebreaker} from "./spinebreaker";
import {SteelSavior} from "./steel-savior";
import {StrongPretty} from "./strong-pretty";
import {Superstar} from "./superstar";
import {Surgeon} from "./surgeon";
import {Synchronized} from "./synchronized";
import {TelevisionAddict} from "./television-addict";
import {TheCleanser} from "./the-cleanser";
import {TheHardWay} from "./the-hard-way";
import {TheReallyHardWay} from "./the-really-hard-way";
import {TheUnbrokenSpirit} from "./the-unbroken-spirit";
import {TheUnwavering} from "./the-unwavering";
import {TheUnyielding} from "./the-unyielding";
import {TimeSaver} from "./time-saver";
import {TimeTraveler} from "./time-traveler";
import {TonightsTopStory} from "./tonights-top-story";
import {Tough} from "./tough";
import {TourGuide} from "./tour-guide";
import {Trendsetter} from "./trendsetter";
import {Trickster} from "./trickster";
import {TripleThreat} from "./triple-threat";
import {TrollTaskForceMember} from "./troll-task-force-member";
import {Unbreakable} from "./unbreakable";
import {Unconcerned} from "./unconcerned";
import {Undying} from "./undying";
import {Valet} from "./valet";
import {WarHero} from "./war-hero";
import {WebMaster} from "./web-master";
import {WellStocked} from "./well-stocked";
import {CantTouchThis} from "./cant-touch-this";
import {MasterOfDrAeonsStrikeForce} from "./master-of-dr-aeons-strike-force";
import {MasterOfTheDescentToTheHydra} from "./master-of-the-descent-to-the-hydra";
import {MasterOfTheMarketCrash} from "./master-of-the-market-crash";
import {MasterOfThePrisonersOfEden} from "./master-of-the-prisoners-of-eden";
import {PowerOverwhelming} from "./power-overwhelming";
import {RippleRaider} from "./ripple-raider";
import {UnfriendlyFire} from "./unfriendly-fire";


export const AchievementBadges: IBadgeData[] = [
    //Levels
    ProtectorOfInnocents,
    KeeperOfPeace,
    DefenderOfTruth,
    JusticeIncarnate,
    HeroOfTheCity,

    //Morality
    Gallant,
    AboveTheLaw,
    Scoundrel,
    Dastardly,
    HeardTheCall,
    Fearsome,
    Trickster,
    Frenzied,
    Ascended,
    Descended,
    ComeFullCircle,
    GrassIsMeaner,

    //Damage Taken
    Tough,
    Indestructible,
    Adamant,
    Unbreakable,
    NighIndestructible,
    Invulnerable,
    Immortal,

    //Damage Inflicted
    Marauder,
    Eliminator,
    Relentless,
    Decimator,
    Executioner,
    Eradicator,
    Cataclysmic,

    //Debt
    TheUnwavering,
    TheUnyielding,
    TheUnbrokenSpirit,
    Deathless,
    Undying,
    Exalted,

    //Healing
    Medic,
    Surgeon,
    Doctor,
    MedicalSpecialist,
    MedicineMan,
    Empath,

    //Time Held
    Restrained,
    Entangled,
    Imprisoned,
    Confined,
    Caged,
    Jailed,

    //Influence/Infamy/Information
    Celebrity,
    Sensation,
    Superstar,
    Trendsetter,
    Popular,
    Leader,

    //Side-kicking
    Advisor,
    Guide,
    Paragon,
    RoleModel,
    Epitome,
    Paradigm,

    //Inspiration Rejection
    Aloof,
    Unconcerned,
    Apathetic,
    CouldntCareLess,

    //Recipe Rejection
    PickyEater,
    FoodCritic,
    GrandGourmet,
    IronChef,

    //Mayhem
    ReformedFirebug,
    Pedestrian,

    //Safeguard
    FireMarshal,
    BombSquad,
    PPDDeputy,
    SecurityExpert,
    Interceptor,

    //Market Crash
    Valet,

    //DFB
    TheCleanser,
    CadaverCounter,

    //DIB
    BrotherlyLove,
    SiderealResearcher,

    //Missions
    NoOneLeftBehind,
    Connected,
    GiftedSpeaker,
    FalseProphet,
    SteelSavior,
    WarHero,
    GuardianOfForever,
    DeadlyCombatant,
    DignifiedCombatant,
    Avenger,
    BeyondReasonableDoubt,
    DiamondInTheRough,

    //Dark Astoria
    TimeSaver,
    KnowsNoFear,
    LoneWolf,
    BuddyCop,
    IncarnateRival,
    BailoutHero,

    //Incarnate Taskforces
    DroneProtector,
    BurdenBearer,
    AlreadyDead,
    Hacker,
    MidnightDodgerWhatDodgesAtMidnight,
    KittysGotClaws,
    ArmyOfNeu,

    //Incarnate Trials
    NotOnMyWatch,
    AlarmRaiser,
    GottaKeepEmSeparated,
    StrongPretty,
    Synchronized,
    WellStocked,
    Antacid,
    LambdaLooter,
    AntiAntiMatter,
    BunkerBuster,
    LovesAChallenge,
    AvoidsTheGreenStuff,
    RegenerateThis,
    TourGuide,
    PreservationSpecialist,
    AvatarAssassin,
    NewsFlash,
    FairBalanced,
    TelevisionAddict,
    TonightsTopStory,
    Dreamwalker,
    APerfectStorm,
    DaylightSaver,
    LostConnectionToServer,
    Spinebreaker,
    SentinelSmasher,
    SacrificialLamb,
    LifeAndDeath,
    TripleThreat,
    ReadyToRumble,
    ShadowMaster,
    TheHardWay,
    TheReallyHardWay,

    //DrAeonSF
    CantTouchThis,
    PowerOverwhelming,
    RippleRaider,
    UnfriendlyFire,
    
    //Mothership Raid
    Demolitionist,

    //Master Of...
    MasterOfTheImperiousTaskForce,
    MasterOfLadyGreysTaskForce,
    MasterOfMsLibertysTaskForce,
    MasterOfLordReclusesStrikeForce,
    MasterOfThe5thColumnTaskForce,
    MasterOfThe5thColumnStrikeForce,
    MasterOfApexsTaskForce,
    MasterOfTinMagesTaskForce,
    MasterOfTheBAF,
    MasterOfTheLambdaSector,
    MasterOfTheKeyesIslandReactor,
    MasterOfTheUnderground,
    MasterOfTheTpnCampus,
    MasterOfTheMindsOfMayhem,
    MasterOfDilemmaDiabolique,
    MasterOfTheMagisterium,
    MasterOfDrAeonsStrikeForce,
    MasterOfTheDescentToTheHydra,
    MasterOfTheMarketCrash,
    MasterOfThePrisonersOfEden,

    //Other
    DefenderOfPrimalEarth,
    PocketDVipGoldClubMember,

    //Time in Zone
    TrollTaskForceMember,
    Irradiated,
    SirensSong,
    WebMaster,
    TimeTraveler,
    FirebaseZuluSecurityDetail,

    //Souvenirs Collected
    Bounty,
    Pickpocket,
    Kleptomaniac,
    Packrat,
    Curator,


    //Badge count
    Tourist,
    Collector,
    Explorer,
    Pathfinder,
    Trailblazer,
    Seeker,
    Adventurer,
    Questing,
    Voyager,
    UntilTheEndOfTheWorld,
];
