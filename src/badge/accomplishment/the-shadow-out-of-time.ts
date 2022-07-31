import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TheShadowOutOfTime: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "the-shadow-out-of-time",
    setTitleId: 2494,
    names: [
        {value: "The Shadow Out Of Time"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `This small trinket was fashioned for you in gratitude by a Cimeroran blacksmith. Within it spins a fragment of the First Cyst, purged of its evil by the Midnighters and purified by the waters of Phoebas Point. It serves as a reminder that Ouroboros are not the only ones who can fix a timeline, and you bet on that knowledge being important someday.`}
    ],
    acquisition: `Complete the story arc from Sister Valeria`,
    links: [
        {title: "The Shadow Out Of Time Badge", href: "https://homecoming.wiki/wiki/The_Shadow_Out_Of_Time_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-shadow-out-of-time.png"}
    ],
};