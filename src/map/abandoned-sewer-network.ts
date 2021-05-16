import {IGameMapData} from "coh-content-db";

export const AbandonedSewerNetwork: IGameMapData = {
    key: "abandoned-sewer-network",
    name: "Abandoned Sewer Network",
    links: [{title: "Abandoned Sewer Network", href: "https://hcwiki.cityofheroes.dev/wiki/Abandoned_Sewer_Network"}],
    vidiotMaps: [
        {
            name: "Abandoned Sewer Network Vidiot Map",
            href: "https://n15g.github.io/coh-content-db-homecoming/images/vidiotmaps/abandoned-sewer-network.png",
            pointsOfInterest: [
                {x: 295, y: 365, mapKey: "sewer-network"},
                {x: 1113, y: 718, mapKey: "sewer-network"},
                {x: 68, y: 1589, mapKey: "sewer-network"},
                {x: 673, y: 1802, mapKey: "sewer-network"},
                {x: 1430, y: 1407, mapKey: "sewer-network"},

                {x: 736, y: 1096, notes: "Trial Door"},

                {x: 295, y: 450, badgeKey: "boomtown-refugee"},
                {x: 687, y: 1097, badgeKey: "hades-aspirant"},
                {x: 1054, y: 717, badgeKey: "secret-of-the-city"},
                {x: 673, y: 1776, badgeKey: "sprawl-survivor"},
                {x: 98, y: 1589, badgeKey: "the-underlord"},
                {x: 1407, y: 1407, badgeKey: "from-beneath-you"},
                {x: 563, y: 760, badgeKey: "living-dark"},
                {x: 618, y: 1433, badgeKey: "persephone-supplicant"},

                {x: 583, y: 744, badgeKey: "academic", badgePartialKey: "acad-2"},
            ]
        }
    ]
};
