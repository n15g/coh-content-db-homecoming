import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Eden} from "../../map/eden";
import {TheHive} from "../../map/the-hive";

export const HiveMind: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "hive-mind",
    setTitleId: 1846,
    names: [{value: "Hive Mind"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Eden.key,
    location: [1622.0, 130.0, 3609.0],
    badgeText: [{
        value: `The buzz of the Devouring Earth hive mind is especially powerful here.
It sets one's nerves on edge.
You can feel it as a pain behind your eyes, as though something were trying to worm its way into your consciousness.
You wonder how long you could stay here and remain unaffected.
How long you could hold out before the overpowering will of Hamidon found its way into you and made you one of them?`
    }],
    notes: `Located in [map:${Eden.key}] 340 yards east and a little bit south of [map:${TheHive.key}] marker, on the eastern slope of the mound leading away from the spire.`,
    links: [
        {title: "Hive Mind Badge", href: "https://paragonwiki.com/wiki/Hive_Mind_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "7"
};
