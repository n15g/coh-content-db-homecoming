import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {AbandonedSewerNetwork} from "../../map/abandoned-sewer-network";

export const BoomtownRefugee: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "boomtown-refugee",
    setTitleId: 1821,
    names: [{value: "Boomtown Refugee"}],
    alignment: ALIGNMENT_HERO,
    mapKey: AbandonedSewerNetwork.key,
    location: [1792.0, -59.0, -2944.0],
    badgeText: [{
        value: "The destruction of Baumton was a nightmare." +
            " Out of fear and desperation hundreds of its citizens fled into the relative safety of the Sewer Network." +
            " Through the grime and muck you can catch evidence of this perilous journey: discarded food packets and clothes, scratched messages left for loved-ones who didn't make it," +
            " crude drawings etched into the brick by children desperate for a way to distract themselves from the situation." +
            " Most of Baumton's citizens who fled to the Sewer Network were eventually rescued, but the network has dangers of its own apart from the Rikti and not everyone who entered it" +
            " ever returned."
    }],
    notes: "Located in [map:abandoned-sewer-network] 111 yards south of the Sewer Network transfer point in Boomtown Sector, in the middle of the metal walkway.",
    links: [
        {title: "Boomtown Refugee Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Boomtown_Refugee_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "1"
};
