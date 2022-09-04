import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const FlamesOfPrometheus: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "flames-of-prometheus",
    setTitleId: 2003,
    names: [
        {value: "Flames of Prometheus"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    acquisition: `Complete the Mortimer Kal Strike Force`,
    notes: `The Mortimer Kal Strike Force is available from Mortimer Kal in Sharkhead Island.
    
This badge can be redeemed for a Notice of the Well at 50.

**Once redeemed, this badge is no longer obtainable. This badge is not included in badge totals.**`,
    links: [
        {title: "Flames of Prometheus Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Flames_of_Prometheus"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/flames-of-prometheus.png"}
    ],
    ignoreInTotals: true
};
