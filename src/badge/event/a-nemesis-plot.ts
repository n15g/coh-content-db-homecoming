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
    acquisition: "Be in the zone when Nemesis is defeated during the Nemesis Plot event.",
    links: [
        {title: "A Nemesis Plot Badge", href: "https://paragonwiki.com/wiki/A_Nemesis_Plot_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/a-nemesis-plot.png"}]
};
