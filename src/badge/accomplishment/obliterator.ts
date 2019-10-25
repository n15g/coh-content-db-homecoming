import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Obliterator: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "obliterator",
    setTitleId: 2347,
    names: [
        {value: "Obliterator"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You joined the Praetorian Resistance in their efforts to do whatever it takes to bring down Emperor Cole.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_prae_resist.png"}],
    acquisition: "Complete every story arc in the Praetorian Crusader storyline to earn this badge.",
    links: [
        {title: "Obliterator Badge", href: "https://paragonwiki.com/wiki/Obliterator_Badge"}
    ],
};
