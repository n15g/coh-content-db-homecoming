import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundNova} from "../../map/underground-nova";

export const WarriorAtTheGate: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "warrior-at-the-gate",
    setTitleId: 1643,
    names: [{value: "Warrior at the Gate"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundNova.key,
    location: [-3200.0, 511.0, -48.0],
    badgeText: [{
        value: "Here lies the impregnable door that leads to one of the strongholds of the Resistance." +
            " For a member of the Resistance this barrier is a comforting symbol of their defiance of State power." +
            " For the Loyalists it is an affront and a target of repeated attacks."
    }],
    notes: "Located in [map:underground-nova] immediately in front of the door to the Resistance Hub.",
    links: [
        {title: "Warrior at the Gate Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Warrior_at_the_Gate_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "8"
};
