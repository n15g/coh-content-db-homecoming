import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {MidnighterClub} from "../../map/midnighter-club";

export const MidnighterClubMember: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "midnighter-club-member",
    names: [{value: "Midnighter Club Member"}],
    alignment: ALIGNMENT_ANY,
    mapKey: MidnighterClub.key,
    location: [105.0, 0.0, -150.0],
    badgeText: [{value: "Within these walls rests the greatest minds of mystic, occult, and arcane magics."}],
    notes: "The Midnighter Club Member Badge is located just inside the circular chamber at the North end of the Midnighter Club between the inner columns.",
    links: [
        {title: "Midnighter Club Member Badge", href: "https://paragonwiki.com/wiki/Midnighter_Club_Member_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "1"
};
