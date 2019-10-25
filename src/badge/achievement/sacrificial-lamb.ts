import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SacrificialLamb: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "sacrificial-lamb",
    setTitleId: 2166,
    names: [
        {value: "Sacrificial Lamb"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Though two heroes remained captured and indentured to Diabolique, you chose to ignore them " +
        "during the final battle and focused instead on Diabolique. In spite of the extra complications " +
        "that this choice brought to your battle against Diabolique, you still prevailed against her " +
        "and put an end to her mad scheme to become Death Incarnate during Dilemma Diabolique."}
    ],
    acquisition: "Defeat Diabolique without defeating the two heroes under her control during the final battle of the Dilemma Diabolique Trial",
    links: [
        {title: "Sacrificial Lamb Badge", href: "https://paragonwiki.com/wiki/Sacrificial_Lamb_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-dea.png"}
    ],
};