import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const PlagueStopper: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "plague-stopper",
    setTitleId: 73,
    names: [
        {type: Alternate.H, value: "Plague Stopper"},
        {type: Alternate.V, value: "Deadly Virus"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You were key in stopping a plague from overtaking Paragon City."}
    ],
    acquisition: "Complete the Destroy Plague Containers mission from Olivia Chung, Dr. Ann-Marie Engles, Juliana Nehring, or Pavel Garnier",
    links: [
        {title: "Plague Stopper Badge", href: "https://homecoming.wiki/wiki/Plague_Stopper_Badge"},
        {title: "Deadly Virus Badge", href: "https://homecoming.wiki/wiki/Deadly_Virus_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/plague-stopper.png"}
    ],
};
