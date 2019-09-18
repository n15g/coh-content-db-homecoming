import {IGameMapData} from "coh-content-db";

export enum MapKey {
    ARCHITECT_ENTERTAINMENT_BUILDINGS = "architect-entertainment-buildings",
    ATLAS_PARK = "atlas-park",
    BLOODY_BAY = "bloody-bay",
    CAP_AU_DIABLE = "cap-au-diable",
    MERCY_ISLAND = "mercy-island",
    RECLUSES_VICTORY = "recluses-victory"
}

export const Maps: IGameMapData[] = [
    {
        key: MapKey.ARCHITECT_ENTERTAINMENT_BUILDINGS,
        name: "Architect Entertainment Buildings",
        links: [{title: "Architect Entertainment Buildings", href: "https://paragonwiki.com/wiki/Architect_Entertainment_Buildings"}]
    },
    {
        key: MapKey.ATLAS_PARK,
        name: "Atlas Park",
        links: [{title: "Atlas Park", href: "https://paragonwiki.com/wiki/Atlas_Park"}]
    },
    {
        key: MapKey.BLOODY_BAY,
        name: "Bloody Bay",
        links: [{title: "Bloody Bay", href: "https://paragonwiki.com/wiki/Bloody_Bay"}]
    },
    {
        key: MapKey.CAP_AU_DIABLE,
        name: "Cap Au Diable",
        links: [{title: "Cap Au Diable", href: "https://paragonwiki.com/wiki/Cap_au_Diable"}]
    },
    {
        key: MapKey.MERCY_ISLAND,
        name: "Mercy Island",
        links: [{title: "Mercy Island", href: "https://paragonwiki.com/wiki/Mercy_Island"}]
    },
    {
        key: MapKey.RECLUSES_VICTORY,
        name: "Recluse's Victory",
        links: [{title: "Recluse's Victory", href: "https://paragonwiki.com/wiki/Recluse%27s_Victory"}]
    }
];
