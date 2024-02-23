import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const VillainDisruptor: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "villain-disruptor",
    setTitleId: 645,
    names: [
        {value: "Villain Disruptor"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "It doesn't matter who or where; you will stop anyone who threatens your city."},
        {
            type: Alternate.V, value: "Having a reputation for beating down villains has actually helped more than hurt you in the " +
                "Rogue Isles."
        }
    ],
    acquisition: "Defeat 25 named bank heist or jailbreak villains during Safeguard missions",
    links: [
        {title: "Villain Disruptor Badge", href: "https://homecoming.wiki/wiki/Villain_Disruptor_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/villain-disruptor.png"}
    ],
};
