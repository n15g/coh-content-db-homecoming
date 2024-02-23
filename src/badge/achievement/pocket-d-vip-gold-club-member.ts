import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const PocketDVipGoldClubMember: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "pocket-d-vip-gold-club-member",
    setTitleId: 623,
    names: [
        {value: "Pocket D VIP Gold Club Member"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You are a member of Pocket D's VIP Gold Club."}
    ],
    acquisition: "Spend an hour in Pocket D",
    links: [
        {title: "Pocket D VIP Gold Club Member Badge", href: "https://homecoming.wiki/wiki/Pocket_D_VIP_Gold_Club_Member_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/pocket-d-vip-gold-club-member.png"}
    ],
};
