import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const AvatarSmasher: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "avatar-smasher",
    names: [
        {value: "Avatar Smasher"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You faced off against the Avatars of Hamidon by yourself, showing the Hamidon that you are a " +
        "force to be reckoned with."}
    ],
    acquisition: "Defeat the three Avatars of Hamidon in the final mission from Number Six after refusing help from the Imperial Defense Force",
    links: [
        {title: "Avatar Smasher Badge", href: "https://paragonwiki.com/wiki/Avatar_Smasher_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/incarnate-challenge.png"}
    ],
};