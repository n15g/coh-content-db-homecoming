import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const HeatSeeker: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "heat-seeker",
    setTitleId: 570,
    names: [
        {value: "Heat Seeker"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have successfully brought down one of Lord Recluses' fliers. Lord Recluse is amused."}
    ],
    acquisition: "Defeat the Arachnos Flier during the Statesman Task Force or in Grandville",
    links: [
        {title: "Heat Seeker Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Heat_Seeker_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/heat-seeker.png"}
    ],
};
