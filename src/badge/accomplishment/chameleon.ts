import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Chameleon: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "chameleon",
    setTitleId: 2385,
    names: [
        {value: "Chameleon"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `You infiltrated the Freakshow and recovered the stolen Chameleon Suit.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_stature_05.png"}],
    acquisition: `Complete the task set 'The Chameleon Suit' which is available via the 'Infiltrate the Freakshow and recover the stolen Chameleon Suit' mission from level 20-24 contacts Andrew Fiore, Jake Kim, Lt. Col. Hugh McDougal, or Wilma Peterson. Also available via Ouroboros, Level 20-24, mission 0.12 'The Chameleon Suit'.`,
    links: [
        {title: "Chameleon Badge", href: "https://paragonwiki.com/wiki/Chameleon_Badge"}
    ],
};
