import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Croatoa} from "../../map/croatoa";

export const Ensorcelled: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "ensorcelled",
    setTitleId: 410,
    names: [{value: "Ensorcelled"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Croatoa.key,
    location: [1018.0, 159.0, -1090.0],
    badgeText: [{
        value: "The Cabal have developed an attachment to this old, gnarled tree. Some heroes even say they are conducting dark experiments beneath its roots."
    }],
    notes: "Located on a low branch of the large leafless tree 360 yards to the west of War Witch and 76 yards north of the Sunset Ridge marker.",
    links: [
        {title: "Ensorcelled Badge", href: "https://paragonwiki.com/wiki/Ensorcelled_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "3"
};
