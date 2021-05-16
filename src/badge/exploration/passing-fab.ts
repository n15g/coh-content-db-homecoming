import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {Grandville} from "../../map/grandville";

export const PassingFab: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "passing-fab",
    setTitleId: 1510,
    names: [{value: "Passing Fab"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: Grandville.key,
    location: [2496.0, -848.0, -3016.0],
    badgeText: [{
        value: `These underground tunnels are the only relatively safe way to get into the Fab.
They are used as both an emergency exit from the Fab and as a method of sending in reinforcements straight from Grandville proper, should Longbow try to launch an offensive attack.`
    }],
    notes: `Located in [map:${Grandville.key}], in the Fab neighborhood.

It is at the bottom of the ramp leading into the Fab, in the entrance room to the underground tunnels. Specifically, it is just south of the Fab marker in a covered area.`,
    links: [
        {title: "Passing Fab Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Passing_Fab_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "5"
};
