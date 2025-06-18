import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const UncomfortableTruths: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "uncomfortable-truths",
    setTitleId: 2565,
    names: [
        {value: "Uncomfortable Truths"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [{value: `Sometimes the only thing it takes to completely rock a person's world is to learn a few uncomfortable truths.`}],
    acquisition: `Complete the bonus objectives in Dap-Dap the Deal-Maka's story arc Mergers and Acquisitions.`,
    links: [
        {title: 'Uncomfortable Truths Badge', href: 'https://homecoming.wiki/wiki/Uncomfortable_Truths_Badge'},
    ],
    icons: [
        {value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/uncomfortable-truths.png'}
    ],
};
