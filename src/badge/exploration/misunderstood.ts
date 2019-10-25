import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {FoundersFalls} from "../../map/founders-falls";

export const Misunderstood: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "misunderstood",
    setTitleId: 1563,
    names: [{value: "Misunderstood"}],
    alignment: ALIGNMENT_HERO,
    mapKey: FoundersFalls.key,
    location: [1126.0, -16.0, 2149.0],
    badgeText: [{
        value: "Voodoo practitioner Cadao Kestrel fled into these tunnels after being accused of murder." +
            " Agent Six tracked him here and beat him within an inch of his life before arresting him." +
            " Cadao would later be cleared of all charges, but to this day he has not gone near Agent Six, claiming she is, \"out of her mind.\""
    }],
    notes: "Located directly in front of Agent Six, the Natural store in [map:founders-falls].",
    links: [
        {title: "Misunderstood Badge", href: "https://paragonwiki.com/wiki/Misunderstood_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "8"
};
