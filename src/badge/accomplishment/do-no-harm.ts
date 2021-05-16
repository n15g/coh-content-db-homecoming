import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Brickstown} from "../../map/brickstown";

export const DoNoHarm: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "do-no-harm",
    setTitleId: 2386,
    names: [
        {value: "Do No Harm"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `You have delivered medical supplies to the Rikti.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/do_no_harm.png"}],
    acquisition: `Complete the task set 'Hippocratic Oath'.`,
    notes: `The task set 'Hippocratic Oath' begins with the 'Rescue the doctors from the Rikti' mission from level 35-39 contact Steven Sheridan in [map:${Brickstown.key}]. It is also available via Ouroboros, level 35-39, mission 0.35 'Hippocratic Oath'.`,
    links: [
        {title: "Do No Harm Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Do_No_Harm_Badge"}
    ],
};
