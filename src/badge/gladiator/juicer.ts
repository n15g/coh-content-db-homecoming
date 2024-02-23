import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Juicer: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "juicer",
    setTitleId: 475,
    names: [
        {value: "Juicer"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "The Freaks celebrate you as a force of anarchy."}
    ],
    acquisition: "Earn the [badge:watcher-on-the-knoll] Badge (Freakshow)",
    links: [
        {title: "Juicer Badge", href: "https://homecoming.wiki/wiki/Juicer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
