import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const SynapsesCohort: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "synapses-cohort",
    setTitleId: 62,
    names: [
        {type: Alternate.H, value: "Synapse's Cohort"},
        {type: Alternate.V, value: "Synapse's Betrayer"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "Synapse has awarded you this medal in recognition of your defeat of the Clockwork King."},
        {type: Alternate.V, value: "After you defeated the Clockwork King, Synapse honored you with this medal. What would he " +
        "think now?"}
    ],
    acquisition: "Complete the Synapse Task Force: The Fall of the Clockwork King",
    links: [
        {title: "Synapse's Cohort Badge", href: "https://paragonwiki.com/wiki/Synapse%27s_Cohort_Badge"},
        {title: "Synapse's Betrayer Badge", href: "https://paragonwiki.com/wiki/Synapse%27s_Betrayer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/synapses-cohort.png"}
    ],
};