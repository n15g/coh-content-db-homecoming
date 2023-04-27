import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Underdog: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "underdog",
    setTitleId: 2512,
    names: [
        {value: "Underdog"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You took advantage of the Council's election fraud scheme for your personal profit, and made a mockery of the democratic process by getting the Can Man elected to the city council.`}
    ],
    acquisition: `Complete the Noble Intentions arc from John Houston (Level 40-44, Arc 27.06 in Ouro, Rogue).`,
	notes: `Will update acquisition notes with more details once they become available.`,
    links: [
        {title: "Underdog Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Underdog_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/underdog.png"}
    ],
};