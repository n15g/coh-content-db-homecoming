import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const CadaverCounter: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "cadaver-counter",
    setTitleId: 2023,
    names: [
        {value: "Cadaver Counter"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You took out the mad Vahzilok doctor in the sewers beneath Paragon without killing any of the " +
                "Cadavers it was controlling."
        }
    ],
    acquisition: "Defeat the Vahzilok leader in the Death from Below Sewer Trial without killing any of the Cadavers",
    links: [
        {title: "Cadaver Counter Badge", href: "https://homecoming.wiki/wiki/Cadaver_Counter_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/sewer-trial.png"}
    ],
};
