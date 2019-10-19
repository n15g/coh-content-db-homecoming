import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const JudgementUnlocked: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "judgement-unlocked",
    setTitleId: 1481,
    names: [
        {value: "Judgement Unlocked"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You unlocked your Judgement Incarnate slot allowing you to create powerful new abilities that can be slotted there.`}
    ],
    notes: `Unlock your Judgement Incarnate slot`,
    links: [
        {title: "Judgement Unlocked Badge", href: "https://paragonwiki.com/wiki/Judgement_Unlocked_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/judgement-unlocked.png"}
    ]
};