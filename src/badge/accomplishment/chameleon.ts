import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Chameleon: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "chameleon",
    setTitleId: 2385,
    names: [
        {value: "Chameleon"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You infiltrated the Freakshow and recovered the stolen Chameleon Suit.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_stature_05.png"}],
    acquisition: "Complete the task set `The Chameleon Suit`.",
    links: [
        {title: "Chameleon Badge", href: "https://paragonwiki.com/wiki/Chameleon_Badge"}
    ],
};
