import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const FlamesOfPrometheus: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "flames-of-prometheus",
    setTitleId: 2003,
    names: [
        {value: "Flames of Prometheus"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    notes: `Complete the Mortimer Kal Strike Force.

Can be redeemed for a Notice of the Well at 50

**Note: once redeemed, this badge is no longer obtainable. This badge is also not included in badge totals.**`,
    links: [
        {title: "Flames of Prometheus Badge", href: "https://paragonwiki.com/wiki/Flames_of_Prometheus"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/flames-of-prometheus.png"}
    ],
    ignoreInTotals: true
};
