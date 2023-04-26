import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Pollster: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "pollster",
    setTitleId: 2513,
    names: [
        {value: "Pollster"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You protected democracy by exposing the Council's election fraud scheme to put Alexander 'The Great' Pavlidis on the city council.`}
    ],
    acquisition: `Complete the Noble Intentions arc from John Houston (Level 40-44, Arc 27.06 in Ouro, Rogue).`,
	notes: `Will update acquisition notes with more details once they become available.`,
    links: [
        {title: "Pollster Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Pollster_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/pollster.png"}
    ],
};