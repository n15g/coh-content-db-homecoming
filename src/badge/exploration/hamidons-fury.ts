import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {FoundersFalls} from "../../map/founders-falls";

export const HamidonsFury: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "hamidons-fury",
    setTitleId: 1561,
    names: [{value: "Hamidon's Fury"}],
    alignment: ALIGNMENT_HERO,
    mapKey: FoundersFalls.key,
    location: [26.0, 0.0, 3454.0],
    badgeText: [{
        value: "The hills in this area of Founders' Falls were created almost instantly during the Devouring Earth's initial push into the city." +
            " A laboratory once stood here, but it was destroyed by the erupting earth that sprung up beneath it." +
            " If not for the intervention of the city's heroes, the rest of Founders' would have followed."
    }],
    notes: "Located in the Blackstone Hills neighborhood of [map:founders-falls], 33 yards east of the neighborhood marker.",
    links: [
        {title: "Hamidon's Fury Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Hamidon%27s_Fury_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "6"
};
