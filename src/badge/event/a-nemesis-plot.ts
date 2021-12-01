import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ANemesisPlot: IBadgeData = {
    type: BadgeType.EVENT,
    key: "a-nemesis-plot",
    setTitleId: 2210,
    names: [
        {value: "A Nemesis Plot"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've tangled with Nemesis himself (at least, you think so) during the Nemesis Plot event."},
    ],
    acquisition: `Be in the zone when Nemesis is defeated during the Nemesis Plot event. This event can be triggered by completing the last mission of Signature Story Arc 2 (Pandora's Box, Part 5), available from Heldenjaeger for heroes, and from Inconspicuous Female 39757 for villains. Completing this mission will trigger a Nemesis invasion in a zone matching the arc's alignment.`,
    links: [
        {title: "A Nemesis Plot Badge", href: "https://hcwiki.cityofheroes.dev/wiki/A_Nemesis_Plot_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/a-nemesis-plot.png"}]
};
