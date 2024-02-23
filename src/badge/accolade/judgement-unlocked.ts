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
    acquisition: `Unlock the Judgement Incarnate slot`,
    notes: `Unlock the Judgement Incarnate slot by earning Incarnate Experience through normal play.`,
    links: [
        {title: "Judgement Unlocked Badge", href: "https://homecoming.wiki/wiki/Judgement_Unlocked_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/judgement-unlocked.png"}
    ]
};
