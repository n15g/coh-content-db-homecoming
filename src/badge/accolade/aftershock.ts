import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {Faultline} from "../../map/faultline";

export const Aftershock: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "aftershock",
    setTitleId: 2373,
    names: [
        {value: "Aftershock"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this accolade by completing every story arc within Faultline.`}
    ],
    notes: `Complete every story arc in [map:${Faultline.key}]. [Rewards 20 Merits]`,
    links: [
        {title: "Aftershock Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Aftershock_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png"}
    ]
};
