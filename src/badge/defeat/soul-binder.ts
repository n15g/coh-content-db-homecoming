import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SoulBinder: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "soul-binder",
    setTitleId: 40,
    names: [
        {value: "Soul Binder"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have uncovered the secret of the Circle of Thorn mages, that they are ancient spirits who " +
        "inhabit the stolen bodies of their victims."}
    ],
    acquisition: "Defeat 100 Circle of Thorns mages",
    links: [
        {title: "Soul Binder Badge", href: "https://paragonwiki.com/wiki/Soul_Binder_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/cot.png"}
    ],
};