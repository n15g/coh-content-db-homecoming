import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Annihilator: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "annihilator",
    setTitleId: 305,
    names: [
        {value: "Annihilator"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            type: Alternate.H, value: "After the beating you handed them, the Freedom Phalanx is very glad that you're on their side " +
                "now."
        },
        {type: Alternate.V, value: "Nice smackdown on the Freedom Phalanx. Lord Recluse is pleased with your performance."}
    ],
    acquisition: "Defeat the future Freedom Phalanx during Lord Recluse's Strike Force",
    links: [
        {title: "Annihilator Badge", href: "https://homecoming.wiki/wiki/Annihilator_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/annihilator.png"}
    ],
};
