import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const DoesntLookAtExplosions: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "doesnt-look-at-explosions",
    setTitleId: 2516,
    names: [
        {value: "Doesn't Look At Explosions"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Part of the job is knowing how to look cool, and you've mastered the art. While not intentional, when fate threw you aboard a Rikti space station, you sent it nuclear and made it out in one piece.`}
    ],
    acquisition: `Successfully complete the ending sequence of Advanced Mode of the Lady Grey's Task Force.`,
    links: [
        {title: "Doesn't Look At Explosions Badge", href: "https://homecoming.wiki/wiki/Doesn%27t_Look_At_Explosions_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/doesnt-look-at-explosions.png"}
    ],
};