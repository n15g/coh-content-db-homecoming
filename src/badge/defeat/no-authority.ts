import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const NoAuthority: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "no-authority",
    setTitleId: 1467,
    names: [
        {value: "No Authority"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You're a wanted criminal according to the Praetorian Police. You defeated enough Praetorian " +
                "Police Department members to earn this badge."
        }
    ],
    acquisition: "Defeat 100 points worth of Praetorian PD",
    links: [
        {title: "No Authority Badge", href: "https://homecoming.wiki/wiki/No_Authority_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/no-authority.png"}
    ],
};
