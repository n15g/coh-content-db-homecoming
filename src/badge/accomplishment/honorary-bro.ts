import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const HonoraryBro: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "honorary-bro",
    setTitleId: 2267,
    names: [
        {type: Alternate.M, value: "Honorary Bro"},
        {type: Alternate.F, value: "Honorary Sis"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            value: "Dean MacArthur stood up for you when Wu Yin tried to bring you down. He was captured by the " +
                "Carnival of Shadows for this, but you rescued him. Dean MacArthur declared you an Honorary " +
                "Bro."
        }
    ],
    acquisition: "Rescue Dean MacArthur in the third mission of the second story arc from Mr. G (Primal Earth)",
    links: [
        {title: "Honorary Bro Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Honorary_Bro_Badge"},
        {title: "Honorary Sis Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Honorary_Sis_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-challenge.png"}
    ],
};
