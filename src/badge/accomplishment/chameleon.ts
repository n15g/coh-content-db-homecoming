import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {IndependencePort} from "../../map/independence-port";
import {TalosIsland} from "../../map/talos-island";

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
    acquisition: `Complete the task set 'The Chameleon Suit'`,
    notes: `The task set 'The Chameleon Suit' begins with the 'Infiltrate the Freakshow and recover the stolen Chameleon Suit' mission from any one of the level 20-24 contacts Andrew Fiore or Lt. Col. Hugh McDougal in [map:${TalosIsland.key}], or Jake Kim or Wilma Peterson in [map:${IndependencePort.key}]. It is also available via Ouroboros, level 20-24, mission 0.12 'The Chameleon Suit'.`,
    links: [
        {title: "Chameleon Badge", href: "https://paragonwiki.com/wiki/Chameleon_Badge"}
    ],
};
