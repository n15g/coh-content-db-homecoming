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
    acquisition: `Complete Scirocco's patron story arc`,
    notes: `Completing the patron story arc 'A Wind Called Serafina' from Scirocco in Grandville unlocks the Mu Mastery patron power pool as well as awarding this badge.`,
    links: [
        {title: "False Image Badge", href: "https://homecoming.wiki/wiki/False_Image_Badge"},
        {title: "Mirage Badge", href: "https://homecoming.wiki/wiki/Mirage_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/false-image.png"}
    ]
};
