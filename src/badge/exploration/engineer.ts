import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundImperial} from "../../map/underground-imperial";

export const Engineer: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "engineer",
    setTitleId: 1647,
    names: [{value: "Engineer"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundImperial.key,
    location: [-2015.0, 464.0, -193.0],
    badgeText: [{
        value: "Much of the important maintenance to the city's infrastructure is secreted away underground so as to not sully the pristine cityscape of Emperor Cole's utopia." +
            " But this place is a haven for Engineers and mechanics, stick around a while and you might learn something."
    }],
    notes: "Located in [map:underground-imperial] NNW of Underground Transit. Its coordinates are (-2015, 464, -193).",
    links: [
        {title: "Engineer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Engineer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "3"
};
