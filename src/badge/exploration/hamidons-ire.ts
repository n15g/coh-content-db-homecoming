import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {TheAbyss} from "../../map/the-abyss";
import {Grandville} from "../../map/grandville";

export const HamidonsIre: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "hamidons-ire",
    setTitleId: 1865,
    names: [{value: "Hamidon's Ire"}],
    alignment: ALIGNMENT_ANY,
    mapKey: TheAbyss.key,
    location: [-823.0, -43.0, -1183.0],
    badgeText: [{
        value: `Apparently Hamidon hates humanity for their damage they have wrought upon the Earth's biosphere.
Every city is like a festering sore, every clear cut forest is a scar, blah blah blah. You get it.
But standing before this waste disposal site, with its ranks of waste barrels, you have to wonder what the people who ran this place were thinking.
Do they even know what kind of world they live in? Where genocidal mega-villains like Hamidon make it a point to target places like this?
The people who died here deserved what they got.`
    }],
    notes: `Located in [map:${TheAbyss.key}], 735 yards northeast of the [map:${Grandville.key}] transfer point, in a fenced pen of barrels in the northeast portion of the developed island.`,
    links: [
        {title: "Hamidon's Ire Badge", href: "https://homecoming.wiki/wiki/Hamidon%27s_Ire_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "6"
};
