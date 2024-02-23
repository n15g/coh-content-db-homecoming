import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const AntiVenom: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "anti-venom",
    setTitleId: 616,
    names: [
        {type: Alternate.H, value: "Anti-Venom"},
        {type: Alternate.V, value: "Spider's Kiss"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: `You've broken your ties with Ghost Widow, but you can never tell for sure. Be careful, or your former Patron may claim your spirit from afar.`},
        {type: Alternate.V, value: `In a world of treachery who can you trust but Ghost Widow?`}
    ],
    acquisition: `Complete Ghost Widow's patron story arc`,
    notes: `Completing the patron story arc 'Mystic Mayhem' from Ghost Widow in Grandville unlocks the Soul Mastery patron power pool as well as awarding this badge.`,
    links: [
        {title: "Anti-Venom Badge", href: "https://homecoming.wiki/wiki/Anti-Venom_Badge"},
        {title: "Spider's Kiss Badge", href: "https://homecoming.wiki/wiki/Spider%27s_Kiss_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/anti-venom.png"}
    ]
};
