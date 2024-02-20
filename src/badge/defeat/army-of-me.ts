import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const ArmyOfMe: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "army-of-me",
    setTitleId: 1591,
    names: [
        {value: "Army of Me"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            value: `You don't understand the math behind it, but you're pretty sure you're equal to or greater than eight of yourself.`
        }
    ],
    acquisition: `Defeat eight clones of yourself in the 'Good Villains Never Die' (Level 25-29, Arc XX.XX in Ouro, Villain) story arc from Leonard`,
    notes: `During the first mission (called 'Test Out Your Clones') of the 'Good Villains Never Die' (Level 25-29, Arc XX.XX in Ouro, Villain) story arc from Leonard, speak with Dr. Higgins. From his dialogue tree, select "Send out all eight clones", verify your choice, and then defeat all eight clones.`,
    links: [
        {title: "Army of Me Badge", href: "https://homecoming.wiki/wiki/Army_of_Me_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/army-of-me.png"}
    ],
};
