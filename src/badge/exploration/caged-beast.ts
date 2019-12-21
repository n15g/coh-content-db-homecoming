import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {TheAbyss} from "../../map/the-abyss";

export const CagedBeast: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "caged-beast",
    setTitleId: 1863,
    names: [{value: "Caged Beast"}],
    alignment: ALIGNMENT_ANY,
    mapKey: TheAbyss.key,
    location: [-43.0, -44.0, -135.0],
    badgeText: [{
        value: `The very air vibrates with the barely contained rage of the creatures that had once been penned here—relegated to servile status for the amusement of lesser beings.
You can relate, you've been subject to incarceration for violating ridiculous laws meant for equally lesser beings, and you threw off their shackles just as these monsters did.`
    }],
    notes: `Located in [map:${TheAbyss.key}], 316 yards north of the Grandville transfer point, roughly in the center of the widest part of the fenced-in area closest to the submarine.`,
    links: [
        {title: "Caged Beast Badge", href: "https://paragonwiki.com/wiki/Caged_Beast_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "4"
};
