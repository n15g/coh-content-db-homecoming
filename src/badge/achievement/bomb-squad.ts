import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const BombSquad: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "bomb-squad",
    setTitleId: 641,
    names: [
        {type: Alternate.H, value: "Bomb Squad"},
        {type: Alternate.V, value: "Blue Wire"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "You were right. It WAS the red wire first."},
        {
            type: Alternate.V, value: "The best way to make bombs that can't be defused is to train on the Bomb Squad. Needless to " +
                "say, on yours it's the Blue Wire."
        }
    ],
    acquisition: "Stop 5 bombing side missions in Safeguard Missions",
    links: [
        {title: "Bomb Squad Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Bomb_Squad_Badge"},
        {title: "Blue Wire Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Blue_Wire_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/bomb-squad.png"}
    ],
};
