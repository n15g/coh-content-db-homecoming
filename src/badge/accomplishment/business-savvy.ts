import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const BusinessSavvy: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "business-savvy",
    setTitleId: 2560,
    names: [
        {value: "Business Savvy"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [{value: `You bumbled, hustled and crashed through a number of people and places to help Dap-Dap establish the Freaklok as an organization worthy of being taken seriously, especially by the Freakshow.`}],
    acquisition: `Complete Dap-Dap the Deal-Maka's story arc Mergers and Acquisitions.`,
    links: [
        {title: 'Business Savvy Badge', href: 'https://homecoming.wiki/wiki/Business_Savvy_Badge'},
    ],
    icons: [
        {value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/business-savvy.png'}
    ],
};
