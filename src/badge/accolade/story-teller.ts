import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {Croatoa} from "../../map/croatoa";

export const StoryTeller: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "story-teller",
    setTitleId: 2375,
    names: [
        {value: "Story Teller"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this accolade by completing every story arc within Croatoa.`}
    ],
    acquisition: `Complete every story arc in [map:${Croatoa.key}]`,
    notes: `This badge rewards 20 reward merits.`,
    links: [
        {title: "Story Teller Badge", href: "https://homecoming.wiki/wiki/Story_Teller_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png"}
    ]
};
