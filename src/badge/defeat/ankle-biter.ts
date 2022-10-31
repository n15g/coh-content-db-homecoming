import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const AnkleBiter: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "ankle-biter",
    setTitleId: 2440,
    names: [
        {value: "Ankle Biter"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Crey's Revenant Hero Project has turned out some formidable foes in your career as a super. But nothing was more unsettling than racking up a count on the immature clones that sometimes get deployed in extreme crises. You try not to think about the fact that Crey has child-sized suits on-hand for them.`}
    ],
    acquisition: "Defeat 100 Immature Paragon Protectors.",
    links: [
        {title: "Ankle Biter Badge", href: "https://homecoming.wiki/wiki/Ankle_Biter_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/ankle-biter.png"}
    ],
};
