import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TerraVolta} from "../../map/terra-volta";

export const NervousDreck: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "nervous-dreck",
    setTitleId: 133,
    names: [{value: "Nervous Dreck"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TerraVolta.key,
    location: [4456.0, 0.0, -6124.0],
    badgeText: [{
        value: `Dreck, the leader of the Freakshow, was brought to justice on this spot by Statesman. His time in jail was short, however, as he broke out just two weeks later.`
    }],
    notes: `Located in the Raysun Petroleum neighborhood of Terra Volta.

It can be found along the west war wall near a dumpster on the ground, west and slightly south of the Coroman Manufacturing marker.`,
    links: [
        {title: "Nervous Dreck Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Nervous_Dreck_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "3"
};
