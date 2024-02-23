import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {NightWard} from "../../map/night-ward";

export const AbandonedSoul: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "abandoned-soul",
    setTitleId: 2229,
    names: [{value: "Abandoned Soul"}],
    alignment: ALIGNMENT_ANY,
    mapKey: NightWard.key,
    location: [-411.0, 48.0, -2623.0],
    badgeText: [{
        value: `You've managed to push your way through the teeming crowd of displaced souls in an effort to get a ticket out of Night Ward - only to find that there ain't no train a-comin'.
Unlike the dead, however this does little to faze you. After all, if creatures keep finding ways in there must be other ways out.`
    }],
    notes: `Located in [map:${NightWard.key}], in the Lamplight Junction neighborhood, 161 yards W of the map marker; near the entrance to the CTA terminal.`,
    links: [
        {title: "Abandoned Soul Badge", href: "https://homecoming.wiki/wiki/Abandoned_Soul_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "4"
};
