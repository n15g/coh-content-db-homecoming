import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {StrigaIsle} from "../../map/striga-isle";

export const TheWolfsMaw: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "the-wolfs-maw",
    setTitleId: 1789,
    names: [{value: "The Wolf's Maw"}],
    alignment: ALIGNMENT_HERO,
    mapKey: StrigaIsle.key,
    location: [-3840.0, 0.0, -1971.0],
    badgeText: [{
        value: "This heavily fortified gate leads into the Council base, but in truth it is a trap: a tantalizing lure devised to lure in the overconfident and unwary." +
            " It used to work well against novice heroes and the more foolhardy among the Warriors, but since the Banished Pantheon arrived to dominate the field outside the Maw," +
            " its effectiveness has been blunted. The Council has attempted to close the entryway but each time they do some mystical force prevents it." +
            " Time and again they have attempted to seal it off and each time the door has found a way to open." +
            " Since then, the Council have doubled the guard and sealed off any exits just inside the door." +
            " Council researchers believe the Banished Pantheon has employed a Hand of Glory to keep the entrance open."
    }],
    notes: "Located in [map:striga-isle] 212 yards east of the Wolf's Throat marker, in the middle of the gated entrance to the Council base.",
    links: [
        {title: "The Wolf's Maw Badge", href: "https://hcwiki.cityofheroes.dev/wiki/The_Wolf%27s_Maw_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "7"
};
