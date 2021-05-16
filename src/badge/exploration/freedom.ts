import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {AtlasPark} from "../../map/atlas-park";

export const Freedom: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "freedom",
    setTitleId: 182,
    names: [
        {type: Alternate.H, value: "Freedom"},
        {type: Alternate.V, value: "Covert Operator"},
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: AtlasPark.key,
    location: [126.1, 170.6, -652.4],
    badgeText: [{
        value: "This flag was crafted from Statesman's cape and was donated to Paragon City to replace the flag destroyed by the invading Rikti." +
            " It now flies over Paragon City Hall to honor the sacrifice made by Hero 1 and the rest of Omega Team."
    }],
    notes: "Located in the Atlas Plaza neighborhood of [map:atlas-park].\n" +
        "\n" +
        "The badge marker is located at the base of the flagpole on top of City Hall.",
    links: [
        {title: "Freedom Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Freedom_Badge"},
        {title: "Covert Operator Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Covert_Operator_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "6"
};
