import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoFaultline} from "../../map/echo-faultline";

export const SpareParts: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "spare-parts",
    setTitleId: 2402,
    names: [{value: "Spare Parts"}],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `Large groups of Vahzilok roam this area, day or night. Guided by the depraved Dr. Vahzilok, they defile the very laws of nature with their never ceasing desire for human flesh.`}],
    mapKey: EchoFaultline.key,
    location: [446.7, 0.3, 1521.3],
    notes: "Approx. 326 yrds. W from the \"Resevoir\" marker in a park above the crevice with the cement structures.",
    links: [
        {title: "I25 Faultline badge changes", href: "https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/"}
    ],
    icons: [
		{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}
	],
    vidiotMapKey: "7"
};
