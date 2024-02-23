import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundImperial} from "../../map/underground-imperial";

export const BrokenMind: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "broken-mind",
    setTitleId: 1645,
    names: [{value: "Broken Mind"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundImperial.key,
    location: [-1439.0, 336.0, 1713.0],
    badgeText: [{
        value: "Deep beneath the Mother of Mercy Hospital, the moans of misbegotten Seers echo through these forgotten corridors." +
            " Their sorrow seeps into the minds of those who hear them, disrupting thought and disturbing the emotions." +
            " Tarry too long and your mind shall be broken as theirs."
    }],
    notes: "Located in [map:underground-imperial] in the set of hallways furthest south, just north of the middle dead end.",
    links: [
        {title: "Broken Mind Badge", href: "https://homecoming.wiki/wiki/Broken_Mind_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "1"
};
