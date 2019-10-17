import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const TheDoctorsAlly: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "the-doctors-ally",
    setTitleId: 80,
    names: [
        {value: "The Doctor's Ally"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have uncovered the fate of Doctor Friedkin."}
    ],
    acquisition: "Complete the Investigate the hacker known as The Doctor mission from Gordon Stacy",
    links: [
        {title: "The Doctor's Ally Badge", href: "https://paragonwiki.com/wiki/The_Doctor%27s_Ally_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-doctors-ally.png"}
    ],
};