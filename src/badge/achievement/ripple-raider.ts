import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const RippleRaider: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "ripple-raider",
    setTitleId: 2479,
    names: [
        {value: "Ripple Raider"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You've shown yourself to be incredibly adaptable by overcoming every threat found in the familiar-yet-different dimensional ripples Golden Roller tossed your team into without a single defeat being suffered by your team.`}
    ],
    acquisition: `Conquer all three challenge encounters within Golden Roller's dimensional ripples in a single attempt in Dr. Aeon's Strike Force.`,
    notes: `
This includes defeating the specifc archvillains listed below:

* Nosferatu
* Arakhn
* Maestro
* Protean
* Emperor Requiem
* Gale
* Tundra
* Slate
* Quill
* Terra, the All-Mother
* Hero 1
* Incandescent`,
    links: [
        {title: "Ripple Raider Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Ripple_Raider_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/sf-aeon.png"}
    ],
};
