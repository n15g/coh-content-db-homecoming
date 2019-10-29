import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoAtlasPark} from "../../map/echo-atlas-park";

export const Resilient: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "resilient",
    setTitleId: 2324,
    names: [{value: "Resilient"}],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `This monument was built by a local artist with materials scavenged after the first Rikti invasion. Having wrought creation from destruction, it reaches skyward to represent Paragon City's unbroken spirit.`}],
    mapKey: EchoAtlasPark.key,
    location: [-1471.4, 56.8, -564.0],
    notes: `Located 102 yards east of the marker for Hyperion Way, there's a tall, boxy, chunky piece of modern art sitting in a downstairs area.
Climb those boxes and the badge sits on the topmost box.`,
    links: [
        {title: "Echo: Atlas Park Badge Guide", href: "https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/"}
    ],
    icons: [
		{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}
	],
    vidiotMapKey: "8"
};
