import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {NervaArchipelago} from "../../map/nerva-archipelago";

export const Soother: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "soother",
    setTitleId: 1503,
    names: [{value: "Soother"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: NervaArchipelago.key,
    location: [1236.0, 81.0, 1396.0],
    badgeText: [{
        value: `The area behind this waterfall is said to be a secret spot where Scirocco goes to meditate during periods of stress.
Marks on the wall indicate a major brawl between Scirocco and Black Scorpion (most likely due to Black Scorpion making fun of Scirocco for meditating).`
    }],
    notes: `Located in [map:${NervaArchipelago.key}], in the Primeva neighborhood.

It is in a cave behind the waterfall 240 yards east of the neighborhood marker.`,
    links: [
        {title: "Soother Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Soother_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "8"
};
