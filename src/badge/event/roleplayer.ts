import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {ThePerfectHitter} from "./the-perfect-hitter";
import {ThePerfectHacker} from "./the-perfect-hacker";
import {ThePerfectGrifter} from "./the-perfect-grifter";
import {ThePerfectThief} from "./the-perfect-thief";

export const Roleplayer: IBadgeData = {
    type: BadgeType.EVENT,
    key: "roleplayer",
    setTitleId: 2251,
    names: [
        {value: "Roleplayer"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've obtained this Accolade by perfecting each of the roles in the Summer Blockbuster 'Casino Heist'."},
    ],
    acquisition: "Acquire all 4 Summer Blockbuster perfect role badges.",
    links: [
        {title: "Roleplayer Badge", href: "https://homecoming.wiki/wiki/Toothbreaker_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/roleplayer.png"}],
    partials: [
        {key: ThePerfectHitter.key, type: BadgePartialType.BADGE, badgeKey: ThePerfectHitter.key},
        {key: ThePerfectHacker.key, type: BadgePartialType.BADGE, badgeKey: ThePerfectHacker.key},
        {key: ThePerfectGrifter.key, type: BadgePartialType.BADGE, badgeKey: ThePerfectGrifter.key},
        {key: ThePerfectThief.key, type: BadgePartialType.BADGE, badgeKey: ThePerfectThief.key}
    ]
};
