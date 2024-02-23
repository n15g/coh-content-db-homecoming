import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MemberOfVanguard: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "member-of-vanguard",
    setTitleId: 832,
    names: [
        {value: "Member of Vanguard"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You are now a member of Vanguard and can earn Merits for defeating Rikti."}
    ],
    acquisition: "Complete the first mission from Levantera",
    links: [
        {title: "Member of Vanguard Badge", href: "https://homecoming.wiki/wiki/Member_of_Vanguard_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/member-of-vanguard.png"}
    ],
};
