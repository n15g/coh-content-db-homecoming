import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {RiktiWarZone} from "../../map/rikti-war-zone";

export const TheyAreStillAmongUs: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "they-are-still-among-us",
    setTitleId: 2331,
    names: [
        {value: "They Are Still Among Us"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge in the Rikti War Zone.`}
    ],
    notes: `Visit all exploration badges in [map:${RiktiWarZone.key}]`,
    links: [
        {title: "They Are Still Among Us Badge", href: "https://paragonwiki.com/wiki/They_Are_Still_Among_Us_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ]
};