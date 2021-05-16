import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Eden} from "../../map/eden";

export const CallOfNature: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "call-of-nature",
    setTitleId: 1842,
    names: [{value: "Call of Nature"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Eden.key,
    location: [-3026.0, 3.0, 3262.0],
    badgeText: [{
        value: `In the distance you can hear the ululating cry of the Devouring Earth and something about it speaks to a primal, ancient, part of you.
You can understand how some might be seduced by this call and stray into their embrace to be devoured.
There is something almost hypnotic about it; being summoned by a power greater than you, older than you, and somehow welcoming, as though the Devouring Earth offer a unity unattainable
anywhere else on this world.`
    }],
    notes: `Located in [map:${Eden.key}] 155 yards east of The Pit marker, in a grassy patch covering the road leading to the east.`,
    links: [
        {title: "Call of Nature Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Call_of_Nature_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "3"
};
