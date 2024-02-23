import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {CreysFolly} from "../../map/creys-folly";

export const CirqueDuFreak: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "cirque-du-freak",
    setTitleId: 1796,
    names: [{value: "Cirque du'Freak"}],
    alignment: ALIGNMENT_HERO,
    mapKey: CreysFolly.key,
    location: [7330.0, 167.0, 33.0],
    badgeText: [{
        value: "From this vantage point, one can get an excellent view of Carnival Town: the Freakshow community that has grown like a fungus on Venice's rotting corpse." +
            " This is more than a stronghold or a headquarters for the Freakshow, this is their version of a \"community,\" a new world as seen through the filter of a violent and deranged mind." +
            " It has laws, customs, even holidays, but make no mistake: it is a place of violence, debasement, and depravity where the weak are quickly culled." +
            " Many see it as a cancer from which a psychological and sociological poison can spread to infect other parts of Paragon City, a breeding ground for dark memes best kept contained."
    }],
    notes: "Located in [map:creys-folly] 71 yards south of the Carnival Town marker, on top of the enclosed walkway that stretches over the street.",
    links: [
        {title: "Cirque du'Freak Badge", href: "https://homecoming.wiki/wiki/Cirque_du%27Freak_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "8"
};
