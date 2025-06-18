import {ALIGNMENT_ANY, BadgeType, IBadgeData} from 'coh-content-db'
import {KallistiWharf} from "../../map/kallisti-wharf";

export const TouristTrapped: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: 'tourist-trapped',
    setTitleId: 2456,
    names: [{value: 'Tourist Trapped'}],
    alignment: ALIGNMENT_ANY,
    mapKey: KallistiWharf.key,
    location: [5339.4, 72.1, 738.7],
    badgeText: [{
        value: `Many who visit the Wharf take a paddle boat out to Turtle Rock Island as a "must see" location.
Known for its curious rock formations, incredible views of the Wharf, and the once-a-day alignment of One Statesman Tower with the rising sun, tourists end up here taking photos more than any other place in the Wharf.`
    }],
    links: [
        {title: 'Tourist Trapped Badge', href: 'https://homecoming.wiki/wiki/Tourist_Trapped_Badge'},
    ],
    icons: [{value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png'}],
    vidiotMapKey: "8"
}
