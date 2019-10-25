import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {StMartial} from "../../map/st-martial";

export const DeucesWild: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "deuces-wild",
    setTitleId: 279,
    names: [{value: "Deuces Wild"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: StMartial.key,
    location: [-3325.0, -29.0, -436.0],
    badgeText: [{
        value: `Twos are wild, but not as wild as you!`
    }],
    notes: `Located in [map:${StMartial.key}], in the doorway of the Ice Palace casino in the Jackpot neighborhood, 150 yards east of the Jackpot neighborhood marker.`,
    links: [
        {title: "Deuces Wild Badge", href: "https://paragonwiki.com/wiki/Deuces_Wild_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "1"
};
