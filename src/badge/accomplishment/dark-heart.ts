import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const DarkHeart: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "dark-heart",
    setTitleId: 2017,
    names: [
        {value: "Dark Heart"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "Your role in this contest was irrevocably changed when you became Scirocco's spy."}
    ],
    acquisition: "Complete the Level 5-9 Ongoing Training story arc from Dr. Graves",
    links: [
        {title: "Dark Heart Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Dark_Heart_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/dark-heart.png"}
    ],
};
