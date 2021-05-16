import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const EnemyOfTheState: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "enemy-of-the-state",
    setTitleId: 2220,
    names: [
        {value: "Enemy of the State"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed the Incarnate Trial: Magisterium."}
    ],
    acquisition: "Complete the Magisterium Trial",
    links: [
        {title: "Enemy of the State Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Enemy_of_the_State_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/enemy-of-the-state.png"}
    ],
};
