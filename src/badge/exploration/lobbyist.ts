import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {BloodyBay} from "../../map/bloody-bay";

export const Lobbyist: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "lobbyist",
    setTitleId: 255,
    names: [
        {type: Alternate.H, value: "Lobbyist"},
        {type: Alternate.V, value: "Crooked Politician"}
    ],
    alignment: ALIGNMENT_ANY,
    mapKey: BloodyBay.key,
    location: [2265.0, 137.0, -832.0],
    badgeText: [{value: "Spanky Rabinowitz' cousin Charlie 'Big Buck' Rabinowitz owned Big Bucks Casino. It is said much of Spanky's campaign money came from the take here."}],
    notes: "The Crooked Politician Badge is located in Bloody Bay on top of the casino building 120 yards due east of Meteor Do.",
    links: [
        {title: "Lobbyist Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Lobbyist_Badge"},
        {title: "Crooked Politician Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Crooked_Politician_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "1"
};
