import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {MonsterIsland} from "../../map/monster-island";

export const MisfitMonstrosity: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "misfit-monstrosity",
    setTitleId: 1874,
    names: [{value: "Misfit Monstrosity"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MonsterIsland.key,
    location: [2931.0, 0.0, -7405.0],
    badgeText: [{
        value: `On this distant, lonely island you find some Devouring Earth monsters who seem to have separated themselves from their brethren,
or perhaps they were relegated this isle for some reason.
What kind of rules must govern these creatures that some of their number could be found wanting? Were their rampages not destructive enough?
Their roars not bladder-emptyingly terrifying enough?
Did they fail to pay the proper obeisance to Hamidon, their lord and master?
It matters not, they seem just as interested in grinding you underfoot as any other monster here.`
    }],
    notes: `Located in [map:${MonsterIsland.key}], 249 yards northwest of the Tempest Quay marker, near the northern edge of the small island.`,
    links: [
        {title: "Misfit Monstrosity Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Misfit_Monstrosity_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "7"
};
