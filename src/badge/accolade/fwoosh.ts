import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Fwoosh: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "fwoosh",
    setTitleId: 617,
    names: [
        {type: Alternate.H, value: "Fwoosh"},
        {type: Alternate.V, value: "The Stinger"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: `This is the sound Black Scorpion's arm cannon will make when you run into him next. Didn't you learn not to peeve the guy in powered armor?`},
        {type: Alternate.V, value: `Pretty soon, nobody's gonna be able to touch me. Stick with me and you'll go places,' Black Scorpion said approvingly.`}
    ],
    notes: `Complete Black Scorpion's patron story arc`,
    links: [
        {title: "Fwoosh Badge", href: "https://paragonwiki.com/wiki/Fwoosh_Badge"},
        {title: "The Stinger Badge", href: "https://paragonwiki.com/wiki/The_Stinger_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/fwoosh.png"}
    ]
};