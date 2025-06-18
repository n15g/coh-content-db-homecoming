import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const GenerationalTrauma: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "generational-trauma",
    setTitleId: 2564,
    names: [
        {value: "Generational Trauma"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [{
        value: `You have discovered the consequences of helping Sister Valeria in the past - your encounter with Livia was actually the first time you met the host Nictus inside Arakhn, which now harbors milennia of hatred for you as a result.
The fact that Ourboros did not mend this is telling.`
    }],
    acquisition: `Complete the bonus objectives in Adelard Ziegler's story arc Hunting the Hunters.`,
    links: [
        {title: 'Generational Trauma Badge', href: 'https://homecoming.wiki/wiki/Generational_Trauma_Badge'},
    ],
    icons: [
        {value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/generational-trauma.png'}
    ],
};
