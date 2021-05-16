import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const MysticalSavior: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "mystical-savior",
    setTitleId: 77,
    names: [
        {type: Alternate.H, value: "Mystical Savior"},
        {type: Alternate.V, value: "Mystical Adept"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You saved a cabal of mystics from being used by the Banished Pantheon."}
    ],
    acquisition: "Complete the Track down the Pantheon and rescue the mystics mission from Laura Brunetti or Miriam Bloechl",
    links: [
        {title: "Mystical Savior Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Mystical_Savior_Badge"},
        {title: "Mystical Adept Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Mystical_Adept_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/mystical-savior.png"}
    ],
};
