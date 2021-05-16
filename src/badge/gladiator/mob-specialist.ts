import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const MobSpecialist: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "mob-specialist",
    setTitleId: 510,
    names: [
        {value: "Mob Specialist"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "Crey has authorized these men for your Arena teams."}
    ],
    acquisition: "Defeat 200 Prisoner Bosses (Prisoners)",
    links: [
        {title: "Mob Specialist Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Mob_Specialist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
