import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const LongbowSpecOps: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "longbow-spec-ops",
    setTitleId: 467,
    names: [
        {value: "Longbow Spec-Ops"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You demand obedience even from your enemies."}
    ],
    acquisition: "Earn the [badge:reformed] Badge (Longbow)",
    links: [
        {title: "Longbow Spec-Ops Badge", href: "https://paragonwiki.com/wiki/Longbow_Spec-Ops_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
