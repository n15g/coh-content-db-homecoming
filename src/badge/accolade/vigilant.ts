import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {RiktiWarZone} from "../../map/rikti-war-zone";

export const Vigilant: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "vigilant",
    setTitleId: 2353,
    names: [
        {value: "Vigilant"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You're always there when the people of Paragon City need you.`},
        {type: Alternate.V, value: `Your shadow looms over not only the Rogue Isles and Paragon City, but the entire world.`}
    ],
    notes: `Complete every story arc in the [map:${RiktiWarZone.key}] to earn this badge. [Rewards 20 Merits]`,
    links: [
        {title: "Vigilant Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Vigilant_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-v.png"}
    ]
};
