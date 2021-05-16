import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {KingsRow} from "../../map/kings-row";

export const ManOfVengeance: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "man-of-vengeance",
    setTitleId: 1528,
    names: [
        {type: Alternate.M, value: "Man of Vengeance"},
        {type: Alternate.F, value: "Woman of Vengeance"}
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: KingsRow.key,
    location: [573.0, -42.0, 704.0],
    badgeText: [{
        value: "This is the wreckage of a warehouse owned by the Family." +
            " The man who killed Blue Steel's father was rumored to be taking shelter here." +
            " Blue Steel went to investigate, only to discover the Family had rigged the warehouse to explode." +
            " Blue Steel survived the explosion and has continued the hunt for his father's killer to this day."
    }],
    notes: "The Man of Vengeance Badge is at the entrance of the vacant/rubble lot 110 yards west of the PPD building (Detective Becktrees or Detective Freitag markers) in Kings Row.",
    links: [
        {title: "Man of Vengeance Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Man_of_Vengeance_Badge"},
        {title: "Woman of Vengeance Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Woman_of_Vengeance_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "8"
};
