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
    acquisition: `Complete every story arc in [map:${Faultline.key}]`,
    notes: `
This badge rewards 20 reward merits for completing the following story arcs:

* Jim Temblor - Rumblings of the Past
* Penelope Yin - I Lost My Daddy!
* Doc Delilah - The Buried Past
* Agent G - A Faultline in the Sands of Time
`,
    links: [
        {title: "Aftershock Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Aftershock_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png"}
    ]
};
