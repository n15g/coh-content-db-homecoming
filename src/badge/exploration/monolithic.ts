import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {NightWard} from "../../map/night-ward";

export const Monolithic: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "monolithic",
    setTitleId: 2232,
    names: [{value: "Monolithic"}],
    alignment: ALIGNMENT_ANY,
    mapKey: NightWard.key,
    location: [-2605.0, 75.0, 2031.0],
    badgeText: [{
        value: `As you set foot in this peculiar stone circle you can feel ancient magics coursing through your veins.
The source of its power remains a mystery - as well it should.
Night Ward harbors many secrets too awesome, too transcendent for the mortal mind to behold.
To merely be counted among those touched by her radiance is in itself a humbling experience.`
    }],
    notes: `Located in [map:${NightWard.key}], in the The Digs neighborhood, 464 yards SSE of the map marker; near the capsized boat.`,
    links: [
        {title: "Monolithic Badge", href: "https://paragonwiki.com/wiki/Monolithic_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "7"
};
