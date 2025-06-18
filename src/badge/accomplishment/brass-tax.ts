import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const BrassTax: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "brass-tax",
    setTitleId: 2567,
    names: [
        {value: "Brass Tax"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [{value: `You negotiated with Nemesis, to the joyful sounds of shattering brass, on his own home turf in the Shadow Shard.`}],
    acquisition: `Complete the bonus objectives in Dap-Dap the Deal-Maka's story arc Mergers and Acquisitions.`,
    links: [
        {title: 'Brass Tax Badge', href: 'https://homecoming.wiki/wiki/Brass_Tax_Badge'},
    ],
    icons: [
        {value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brass-tax.png'}
    ],
};
