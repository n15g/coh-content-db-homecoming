import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const AvoidsTheGreenStuff: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "avoids-the-green-stuff",
    setTitleId: 1993,
    names: [
        {value: "Avoids the Green Stuff"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You defeated Anti-Matter at the Keyes Island Reactor without letting a member of your league " +
        "get caught in a Obliteration Beam."}
    ],
    acquisition: "Don't let anyone be caught by an Obliteration Beam in the final battle with Anti-Matter during the Keyes Island Reactor Trial",
    links: [
        {title: "Avoids the Green Stuff Badge", href: "https://paragonwiki.com/wiki/Avoids_the_Green_Stuff_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-keyes.png"}
    ],
};