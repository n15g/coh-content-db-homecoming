import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {AtlasPark} from "../../map/atlas-park";

export const AgentOfOrder: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "agent-of-order",
    setTitleId: 2352,
    names: [
        {value: "Agent of Order"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Without heroes like you the world would fall into chaos and despair.`},
        {type: Alternate.V, value: `You leave nothing but chaos and destruction in your wake!`}
    ],
    acquisition: `Complete every story arc in [map:${AtlasPark.key}]`,
    notes: `
This badge rewards 20 reward merits for completing the following story arcs (contact in parentheses):

* What Was Lost (Matthew Habashy)
* No More Fears (Officer Fields)
* Reason to Fight (Aaron Thiery)
* Lay Down Your Burdens (Sondra Costel)
* The Shining Stars Chapters 1, 2, and 3 (Twinshot)
`,
    links: [
        {title: "Agent of Order Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Agent_of_Order_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png"}
    ]
};
