import {ALIGNMENT_VILLAIN, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {DayTrader} from "../day-job/day-trader";
import {Gunrunner} from "../day-job/gunrunner";

export const BlockadeRunner: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "blockade-runner",
    setTitleId: 1079,
    names: [
        {type: Alternate.H, value: "Blockade Runner"},
        {type: Alternate.V, value: "Profiteer"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: `Your skills at circumventing trade restrictions and finding profit are handy in Paragon City. Recently it seems many have managed to run the blockade from the Rogue Isles, turning those restrictions into a paper tiger.`},
        {
            type: Alternate.V,
            value: `Your masterful knowledge of the Black Market coupled with knowing where to get the best merchandise has made you a master of the Black Market.  While logged out near Docks or near the Black Market you will earn tokens that will grant you discount when crafting inventions.`
        }
    ],
    notes: `Earn the [badge:marketeer] and [badge:smuggler] Day Jobs`,
    links: [
        {title: "Blockade Runner Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Blockade_Runner_Badge"},
        {title: "Profiteer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Profiteer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/entrepreneur.png"}
    ],
    partials: [
        {key: DayTrader.key, type: BadgePartialType.BADGE, badgeKey: DayTrader.key},
        {key: Gunrunner.key, type: BadgePartialType.BADGE, badgeKey: Gunrunner.key}
    ]
};
