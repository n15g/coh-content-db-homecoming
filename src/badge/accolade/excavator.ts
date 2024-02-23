import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {TheHollows} from "../../map/the-hollows";

export const Excavator: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "excavator",
    setTitleId: 2372,
    names: [
        {value: "Excavator"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this accolade by completing every story arc within The Hollows.`}
    ],
    acquisition: `Complete every story arc in [map:${TheHollows.key}]`,
    notes: `This badge rewards 20 reward merits.`,
    links: [
        {title: "Excavator Badge", href: "https://homecoming.wiki/wiki/Excavator_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png"}
    ]
};
