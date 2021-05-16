import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {TheAbyss} from "../../map/the-abyss";

export const Geneticist: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "geneticist",
    setTitleId: 746,
    names: [{value: "Geneticist"}],
    alignment: ALIGNMENT_ANY,
    mapKey: TheAbyss.key,
    location: [-577.0, -35.0, -1113.0],
    badgeText: [{
        value: `You have visited the infamous 'Site C', where genetic experiments took place before the Devouring Earth took over the Abyss.`
    }],
    notes: `Located in [map:${TheAbyss.key}], at the front door of the DE Gen building located on the eastern side of the southern landmass.`,
    links: [
        {title: "Geneticist Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Geneticist_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "2"
};
