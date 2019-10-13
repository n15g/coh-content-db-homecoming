import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoFaultline} from "../../map/echo-faultline";

export const Forsaken: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "forsaken",
    names: [{value: "Forsaken"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoFaultline.key,
    location: [332.4, -90.8, 3489.0],
    notes: "On the platform between the southeast and southwest turbine towers in the dam section.",
    links: [
        {title: "I25 Faultline badge changes", href: "https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}]
};
