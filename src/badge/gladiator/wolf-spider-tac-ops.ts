import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const WolfSpiderTacOps: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "wolf-spider-tac-ops",
    setTitleId: 441,
    names: [
        {value: "Wolf Spider Tac Ops"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "Your leadership skills are recognized."}
    ],
    acquisition: "Earn the [badge:insider] Badge (Arachnos)",
    links: [
        {title: "Wolf Spider Tac Ops Badge", href: "https://paragonwiki.com/wiki/Wolf_Spider_Tac_Ops_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
