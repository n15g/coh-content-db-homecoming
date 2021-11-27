import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Epidemiologist: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "epidemiologist",
    setTitleId: 2461,
    names: [
        {value: "Epidemiologist"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You have made your name known to every notable Vahzilok leader (and their lackeys) you've encountered before, during, and after Dr. Vahzilok's incarceration, placing each of them in jail personally.`}
    ],
    acquisition: `Defeat Pathogen & Malady, Salamander & Newt, Cortex & Grey Matter (Abandoned Sewer Network), Dr. Vahzilok, Doc Buzzsaw, and Dr. Meinst (various missions).`,
    links: [
        {title: "Epidemiologist Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Epidemiologist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/epidemiologist.png"}
    ],
};