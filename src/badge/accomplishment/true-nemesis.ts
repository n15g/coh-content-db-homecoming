import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {FoundersFalls} from "../../map/founders-falls";

export const TrueNemesis: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "true-nemesis",
    setTitleId: 2387,
    names: [
        {value: "True Nemesis"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `You have stopped Nemesis Rex's incursion into Primal Earth.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_stature_13.png"}],
    acquisition: `Complete the task set 'Nemesis Rex'.`,
    notes: `The task set 'Nemesis Rex' begins with the 'Stop the battle between Nemesis Army factions and make sure no innocents get hurt' mission from level 40-44 contact Maxwell Christopher in [map:${FoundersFalls.key}]. It is also available via Ouroboros, level 40-49, mission 1.07 'Nemesis Rex'.`,
    links: [
        {title: "True Nemesis Badge", href: "https://paragonwiki.com/wiki/True_Nemesis_Badge"}
    ],
};
