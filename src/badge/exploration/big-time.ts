import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {PocketD} from "../../map/pocket-d";

export const BigTime: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "big-time",
    setTitleId: 717,
    names: [{value: "Big Time"}],
    alignment: ALIGNMENT_ANY,
    mapKey: PocketD.key,
    location: [-163.0, 20.0, -1362.0],
    badgeText: [{
        value: "The 'Fambly', as Joe Young would call them, had been dipping their fingers into the RMFC for some time." +
            " As luck would have it, DJ Zero offered Joe and Cornelius a chance to expand their business venture." +
            " The Monkey Fight Club Arena and Pocket D are a one-two punch that will certainly be a knockout!"
    }],
    notes: "In Pocket D, the badge is in the top left (northwestern) corner on the top floor of the Monkey Fight Club, located in the hero alcove off the main dance floor.",
    links: [
        {title: "Big Time Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Big_Time_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "1"
};
