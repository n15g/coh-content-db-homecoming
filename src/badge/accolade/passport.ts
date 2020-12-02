import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {PocketDVipGoldClubMember} from "../achievement/pocket-d-vip-gold-club-member";

export const Passport: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "passport",
    setTitleId: 2433,
    names: [
        {value: "Passport"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Your travels have taken you to mysterious and exotic places. You have faced many dangers, but now you have returned to the place you call home."},
    ],
    acquisition: `Acquire any zone exploration accolade by collecting all 8 exploration badges in a zone with a supergroup base portal, or earn the [badge:${PocketDVipGoldClubMember.key}] badge.`,
    notes: "Upon acquiring this badge, a character will earn the Long Range Teleporter power.",
    links: [
        {title: "Passport Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Passport_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/passport.png"}]
};
