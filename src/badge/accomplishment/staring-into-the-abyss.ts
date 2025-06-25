import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const StaringIntoTheAbyss: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "staring-into-the-abyss",
    setTitleId: 2559,
    names: [
        {value: "Staring Into The Abyss"}
    ],
    alignment: ALIGNMENT_HERO,
    acquisition: `Complete the bonus objectives in Dap-Dap the Deal-Maka's story arc Mergers and Acquisitions.`,
    links: [
        {title: 'Staring Into The Abyss Badge', href: 'https://homecoming.wiki/wiki/Staring_Into_The_Abyss_Badge'},
    ],
    icons: [
        {value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/staring-into-the-abyss.png'}
    ],
};
