import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Diplomat: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "diplomat",
    setTitleId: 735,
    names: [
        {type: Alternate.H, value: "Diplomat"},
        {type: Alternate.V, value: "Breathes Easy"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "You have won a victory on foreign soil, defeating all of Lord Recluse's minions."},
        {
            type: Alternate.V, value: "Defeating all of Lord Recluse's minions before making a home in the Rogue Isles has earned you " +
                "some breathing room."
        }
    ],
    acquisition: "Defeat the villains Ghost Widow, Scirocco, Captain Mako and Black Scorpion in the Statesman Task Force",
    links: [
        {title: "Diplomat Badge", href: "https://homecoming.wiki/wiki/Diplomat_Badge"},
        {title: "Breathes Easy Badge", href: "https://homecoming.wiki/wiki/Breathes_Easy_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/defeatrecluse.png"}
    ],
};
