import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const ChaosSpiel: IBadgeData = {
    type: BadgeType.EVENT,
    key: "chaos-spiel",
    setTitleId: 2551,
    names: [
        {value: "Chaos Spiel"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You think back on this moment often... Where did that chaotic impulse come from? An opportunity to test your strength? A chance to deviate from Ouroboros' timeline control? You may never find an answer for why you invoked Nemesis' name whilst time traveling.`},
    ],
    acquisition: `After earning both Best Man/Maid of Honor and Wedding Crasher, talk to Positron and choose the Nemesis option.`,
    links: [
        {title: "Chaos Spiel", href: "https://homecoming.wiki/wiki/Chaos_Spiel_Badge"},
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/chaos-spiel.png"}]
};
