import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const FalseImage: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "false-image",
    setTitleId: 614,
    names: [
        {type: Alternate.H, value: "False Image"},
        {type: Alternate.V, value: "Mirage"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: `Perhaps Scirocco is secretly envious of your break to the side of honor, but he still cannot brook your betrayal.`},
        {type: Alternate.V, value: `You have chosen Scirocco's cause. He will not forget your noble gesture.`}
    ],
    notes: `Complete Scirocco's patron story arc`,
    links: [
        {title: "False Image Badge", href: "https://paragonwiki.com/wiki/False_Image_Badge"},
        {title: "Mirage Badge", href: "https://paragonwiki.com/wiki/Mirage_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/false-image.png"}
    ]
};