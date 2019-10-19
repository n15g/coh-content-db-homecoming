import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {MercyIsland} from "../../map/mercy-island";

export const AgentOfChaos: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "agent-of-chaos",
    setTitleId: 2344,
    names: [
        {value: "Agent of Chaos"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this accolade by completing every story arc within Mercy Island.`}
    ],
    notes: `Complete every story arc in [map:${MercyIsland.key}] to earn this badge. [Rewards 20 Merits]`,
    links: [
        {title: "Agent of Chaos Badge", href: "https://paragonwiki.com/wiki/Agent_of_Chaos_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-v.png"}
    ]
};