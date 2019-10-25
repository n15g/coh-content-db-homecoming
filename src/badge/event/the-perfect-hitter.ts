import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ThePerfectHitter: IBadgeData = {
    type: BadgeType.EVENT,
    key: "the-perfect-hitter",
    setTitleId: 2247,
    names: [
        {value: "The Perfect Hitter"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You performed the role of the Hitter in the Summer Blockbuster 'Casino Heist' perfectly."},
    ],
    acquisition: "In the Summer Blockbuster, perform the role of the Hitter perfectly.",
    notes: "Awarded to all team-members.\n" +
        "# Walkthrough\n" +
        "## Phase 1\n" +
        "Click the four power generators.\n" +
        "## Phase 2\n" +
        "Teach **The Disheveled Drifter** how to count cards.",
    links: [
        {title: "The Perfect Hitter Badge", href: "https://paragonwiki.com/wiki/The_Perfect_Hitter_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/the-perfect-hitter.png"}]
};
