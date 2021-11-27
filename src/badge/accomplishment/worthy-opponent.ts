import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const WorthyOpponent: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "worthy-opponent",
    setTitleId: 2472,
    names: [
        {value: "Worthy Opponent"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You have taken advantage of the Pillar of Ice and Flame to defeat Statesman and the Freedom Phalanx at their strongest.`
        }
    ],
    acquisition: `Complete the original version Lord Recluse's Strike Force in Ouroboros (Incarnate powers disabled) to earn this badge.`,
    links: [
        {title: "Worthy Opponent Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Worthy_Opponent_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/worthy-opponent.png"}
    ],
};