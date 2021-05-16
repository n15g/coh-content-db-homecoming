import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const GrassIsMeaner: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "grass-is-meaner",
    setTitleId: 1465,
    names: [
        {type: Alternate.H, value: "Grass Is Meaner"},
        {type: Alternate.V, value: "Grass Is Greener"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            type: Alternate.H, value: "You have traveled from the relative safety of Paragon City to the rough and tumble Rogue " +
                "Isles, where it seems even the grass is meaner."
        },
        {
            type: Alternate.V, value: "You have traveled from the cutthroat Rogue Isles to the relative calm and prosperity of " +
                "Paragon City, where it definitely seems the grass is greener."
        }
    ],
    acquisition: "Travel to the Rogue Isles as a Vigilante / Travel to Paragon City as a Rogue",
    links: [
        {title: "Grass Is Meaner Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Grass_Is_Meaner_Badge"},
        {title: "Grass Is Greener Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Grass_Is_Greener_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/grass-is-meaner.png"}
    ],
};
