import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoFaultline} from "../../map/echo-faultline";

export const Pristine: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "pristine",
    setTitleId: 2400,
    names: [{value: "Pristine"}],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `This area looks very peaceful; the perfect place for a picnic after a day of hiking around the reservoir. A nice safe spot for a bit of walking. You're not afraid of spiders... are you?`}],
    mapKey: EchoFaultline.key,
    location: [573.8, 0.0, 4438.0],
    notes: "On the grass, south of the fence around a building in the Reservoir Area.",
    links: [
        {title: "I25 Faultline badge changes", href: "https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}]
};
