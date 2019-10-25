import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundNova} from "../../map/underground-nova";

export const FerrymanOfTheDamned: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "ferryman-of-the-damned",
    setTitleId: 1638,
    names: [
        {type: Alternate.M, value: "Ferryman of the Damned"},
        {type: Alternate.F, value: "Ferrywoman of the Damned"}
    ],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundNova.key,
    location: [-1407.0, 506.0, -1506.0],
    badgeText: [{
        value: "Beneath Praetoria lies the Lethe, a subterranean river that predates the founding of Emperor Cole's city." +
            " It has become the secret highway on which the State transports the truly condemned: Failed Experiments, convicted traitors, and those who have simply fallen from favor."
    }],
    notes: "Located in [map:underground-nova] approximately 271 yds SE of the Imperial Tunnel point.",
    links: [
        {title: "Ferryman of the Damned Badge", href: "https://paragonwiki.com/wiki/Ferryman_of_the_Damned_Badge"},
        {title: "Ferrywoman of the Damned Badge", href: "https://paragonwiki.com/wiki/Ferrywoman_of_the_Damned_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "3"
};
