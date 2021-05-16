import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Inventor} from "../invention/inventor";
import {Artisan} from "../invention/artisan";
import {MasterArtisan} from "../invention/master-artisan";
import {Craftsman} from "../invention/craftsman";
import {MasterCraftsman} from "../invention/master-craftsman";
import {Declining} from "../invention/declining";
import {Decaying} from "../invention/decaying";
import {Despoiler} from "../invention/despoiler";
import {Dismantler} from "../invention/dismantler";
import {Medicator} from "../invention/medicator";
import {Mender} from "../invention/mender";
import {Rebuilder} from "../invention/rebuilder";
import {Revivifier} from "../invention/revivifier";
import {Armorer} from "../invention/armorer";
import {Guardian} from "../invention/guardian";
import {Protector} from "../invention/protector";
import {Security} from "../invention/security";
import {Blinding} from "../invention/blinding";
import {Beguiler} from "../invention/beguiler";
import {Charming} from "../invention/charming";
import {Charismatic} from "../invention/charismatic";
import {EnergyConservationist} from "../invention/energy-conservationist";
import {BatteryPowered} from "../invention/battery-powered";
import {NuclearPowered} from "../invention/nuclear-powered";
import {MysticallyPowered} from "../invention/mystically-powered";
import {TriggerMan} from "../invention/trigger-man";
import {HiredGun} from "../invention/hired-gun";
import {HitMan} from "../invention/hit-man";
import {Sniper} from "../invention/sniper";
import {Major} from "../invention/major";
import {LtColonel} from "../invention/lt-colonel";
import {Colonel} from "../invention/colonel";
import {MajorGeneral} from "../invention/major-general";
import {Munitionist} from "../invention/munitionist";
import {Weaponeer} from "../invention/weaponeer";
import {Warhead} from "../invention/warhead";
import {ArmsDealer} from "../invention/arms-dealer";
import {Pilgrim} from "../invention/pilgrim";
import {Vagabond} from "../invention/vagabond";
import {Wanderer} from "../invention/wanderer";
import {WalksTheEarth} from "../invention/walks-the-earth";

export const FieldCrafter: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "field-crafter",
    setTitleId: 805,
    names: [
        {value: "Field Crafter"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You are truly a crafting specialist, and can now summon a portable crafting station to your location for five minutes once an hour. All nearby characters can use this station.`}
    ],
    notes: `Awards the Portable Workbench power`,
    links: [
        {title: "Field Crafter Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Field_Crafter_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/field-crafter.png"}
    ],
    effect: `Portable Workbench`,
    partials: [
        {key: Inventor.key, type: BadgePartialType.BADGE, badgeKey: Inventor.key},
        {key: Artisan.key, type: BadgePartialType.BADGE, badgeKey: Artisan.key},
        {key: MasterArtisan.key, type: BadgePartialType.BADGE, badgeKey: MasterArtisan.key},
        {key: Craftsman.key, type: BadgePartialType.BADGE, badgeKey: Craftsman.key},
        {key: MasterCraftsman.key, type: BadgePartialType.BADGE, badgeKey: MasterCraftsman.key},
        {key: Declining.key, type: BadgePartialType.BADGE, badgeKey: Declining.key},
        {key: Decaying.key, type: BadgePartialType.BADGE, badgeKey: Decaying.key},
        {key: Despoiler.key, type: BadgePartialType.BADGE, badgeKey: Despoiler.key},
        {key: Dismantler.key, type: BadgePartialType.BADGE, badgeKey: Dismantler.key},
        {key: Medicator.key, type: BadgePartialType.BADGE, badgeKey: Medicator.key},
        {key: Mender.key, type: BadgePartialType.BADGE, badgeKey: Mender.key},
        {key: Rebuilder.key, type: BadgePartialType.BADGE, badgeKey: Rebuilder.key},
        {key: Revivifier.key, type: BadgePartialType.BADGE, badgeKey: Revivifier.key},
        {key: Armorer.key, type: BadgePartialType.BADGE, badgeKey: Armorer.key},
        {key: Guardian.key, type: BadgePartialType.BADGE, badgeKey: Guardian.key},
        {key: Protector.key, type: BadgePartialType.BADGE, badgeKey: Protector.key},
        {key: Security.key, type: BadgePartialType.BADGE, badgeKey: Security.key},
        {key: Blinding.key, type: BadgePartialType.BADGE, badgeKey: Blinding.key},
        {key: Beguiler.key, type: BadgePartialType.BADGE, badgeKey: Beguiler.key},
        {key: Charming.key, type: BadgePartialType.BADGE, badgeKey: Charming.key},
        {key: Charismatic.key, type: BadgePartialType.BADGE, badgeKey: Charismatic.key},
        {key: EnergyConservationist.key, type: BadgePartialType.BADGE, badgeKey: EnergyConservationist.key},
        {key: BatteryPowered.key, type: BadgePartialType.BADGE, badgeKey: BatteryPowered.key},
        {key: NuclearPowered.key, type: BadgePartialType.BADGE, badgeKey: NuclearPowered.key},
        {key: MysticallyPowered.key, type: BadgePartialType.BADGE, badgeKey: MysticallyPowered.key},
        {key: TriggerMan.key, type: BadgePartialType.BADGE, badgeKey: TriggerMan.key},
        {key: HiredGun.key, type: BadgePartialType.BADGE, badgeKey: HiredGun.key},
        {key: HitMan.key, type: BadgePartialType.BADGE, badgeKey: HitMan.key},
        {key: Sniper.key, type: BadgePartialType.BADGE, badgeKey: Sniper.key},
        {key: Major.key, type: BadgePartialType.BADGE, badgeKey: Major.key},
        {key: LtColonel.key, type: BadgePartialType.BADGE, badgeKey: LtColonel.key},
        {key: Colonel.key, type: BadgePartialType.BADGE, badgeKey: Colonel.key},
        {key: MajorGeneral.key, type: BadgePartialType.BADGE, badgeKey: MajorGeneral.key},
        {key: Munitionist.key, type: BadgePartialType.BADGE, badgeKey: Munitionist.key},
        {key: Weaponeer.key, type: BadgePartialType.BADGE, badgeKey: Weaponeer.key},
        {key: Warhead.key, type: BadgePartialType.BADGE, badgeKey: Warhead.key},
        {key: ArmsDealer.key, type: BadgePartialType.BADGE, badgeKey: ArmsDealer.key},
        {key: Pilgrim.key, type: BadgePartialType.BADGE, badgeKey: Pilgrim.key},
        {key: Vagabond.key, type: BadgePartialType.BADGE, badgeKey: Vagabond.key},
        {key: Wanderer.key, type: BadgePartialType.BADGE, badgeKey: Wanderer.key},
        {key: WalksTheEarth.key, type: BadgePartialType.BADGE, badgeKey: WalksTheEarth.key}
    ]
};
