import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {NovaPraetoria} from "../../map/nova-praetoria";

export const AgentOfPraetoria: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "agent-of-praetoria",
    setTitleId: 2350,
    names: [
        {value: "Agent of Praetoria"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You stand on the fragile tipping point between Order and Chaos. Which way will you go?`}
    ],
    notes: `Complete every story arc in [map:${NovaPraetoria.key}] to earn this badge. [Rewards 20 Merits]`,
    links: [
        {title: "Agent of Praetoria Badge", href: "https://paragonwiki.com/wiki/Agent_of_Praetoria_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-varb-v.png"}
    ]
};