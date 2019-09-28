import {IBadgeData} from "coh-content-db";

import {Inventor} from "./inventor";
import {Artisan} from "./artisan";
import {MasterArtisan} from "./master-artisan";
import {Craftsman} from "./craftsman";
import {MasterCraftsman} from "./master-craftsman";
import {Fabricator} from "./fabricator";
import {Declining} from "./declining";
import {Decaying} from "./decaying";
import {Despoiler} from "./despoiler";
import {Dismantler} from "./dismantler";
import {Retrograde} from "./retrograde";
import {Mender} from "./mender";
import {Medicator} from "./medicator";
import {Rebuilder} from "./rebuilder";
import {Revivifier} from "./revivifier";
import {Reanimator} from "./reanimator";
import {Armorer} from "./armorer";
import {Guardian} from "./guardian";
import {Protector} from "./protector";
import {Security} from "./security";
import {Defensive} from "./defensive";
import {Blinding} from "./blinding";
import {Beguiler} from "./beguiler";
import {Charming} from "./charming";
import {Charismatic} from "./charismatic";
import {Mesmerizer} from "./mesmerizer";
import {EnergyConservationist} from "./energy-conservationist";
import {BatteryPowered} from "./battery-powered";
import {NuclearPowered} from "./nuclear-powered";
import {MysticallyPowered} from "./mystically-powered";
import {Perpetual} from "./perpetual";
import {TriggerMan} from "./trigger-man";
import {HiredGun} from "./hired-gun";
import {HitMan} from "./hit-man";
import {Sniper} from "./sniper";
import {Sharpshooter} from "./sharpshooter";
import {Major} from "./major";
import {LtColonel} from "./lt-colonel";
import {Colonel} from "./colonel";
import {MajorGeneral} from "./major-general";
import {General} from "./general";
import {Munitionist} from "./munitionist";
import {Weaponeer} from "./weaponeer";
import {Warhead} from "./warhead";
import {ArmsDealer} from "./arms-dealer";
import {LordOfWar} from "./lord-of-war";
import {Pilgrim} from "./pilgrim";
import {Vagabond} from "./vagabond";
import {Wanderer} from "./wanderer";
import {WalksTheEarth} from "./walks-the-earth";
import {Nomad} from "./nomad";


export const InventionBadges: IBadgeData[] = [
    Inventor,
    Artisan,
    MasterArtisan,
    Craftsman,
    MasterCraftsman,
    Fabricator,

    //Defense Debuff, To-hit Debuff, Taunt, Confuse
    Declining,
    Decaying,
    Despoiler,
    Dismantler,
    Retrograde,

    //Healing
    Medicator,
    Mender,
    Rebuilder,
    Revivifier,
    Reanimator,

    //Defense Buff, Resist Damage, Intangible
    Armorer,
    Guardian,
    Protector,
    Security,
    Defensive,

    //Sleep, Slow, Hold, Disorient, Immobilize, Fear
    Blinding,
    Beguiler,
    Charming,
    Charismatic,
    Mesmerizer,

    //Endurance Modification, Endurance Reduction
    EnergyConservationist,
    BatteryPowered,
    NuclearPowered,
    MysticallyPowered,
    Perpetual,

    //Recharge Reduction, Interrupt Duration
    TriggerMan,
    HiredGun,
    HitMan,
    Sniper,
    Sharpshooter,

    //Accuracy, To-Hit buff
    Major,
    LtColonel,
    Colonel,
    MajorGeneral,
    General,

    //Damage, Knockback
    Munitionist,
    Weaponeer,
    Warhead,
    ArmsDealer,
    LordOfWar,

    //Run Speed, Jump, Fly Speed, Range
    Pilgrim,
    Vagabond,
    Wanderer,
    WalksTheEarth,
    Nomad
];
