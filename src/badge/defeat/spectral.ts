import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Spectral: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "spectral",
    setTitleId: 249,
    names: [
        {value: "Spectral"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You have trapped many Spectral Pirates and they will not forget your treachery."}
    ],
    acquisition: "Trap 100 ghosts in Fort Hades, Port Oakes",
    links: [
        {title: "Spectral Badge", href: "https://homecoming.wiki/wiki/Spectral_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/ghosts.png"}
    ],
};
