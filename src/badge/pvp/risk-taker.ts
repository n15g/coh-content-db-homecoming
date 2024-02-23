import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const RiskTaker: IBadgeData = {
    type: BadgeType.PVP,
    key: "risk-taker",
    setTitleId: 368,
    names: [
        {type: Alternate.H, value: "Risk Taker"},
        {type: Alternate.V, value: "Most Wanted"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You've contributed to the effort against the Villains by completing a patrol in a PvP zone."},
        {type: Alternate.V, value: "You've contributed to the effort against the Heroes by completing a patrol in a PvP zone."}
    ],
    acquisition: "Complete a patrol mission in a PvP zone (Bloody Bay, Siren's Call, or Warburg)",
    links: [
        {title: "Risk Taker Badge", href: "https://homecoming.wiki/wiki/Risk_Taker_Badge"},
        {title: "Most Wanted Badge", href: "https://homecoming.wiki/wiki/Most_Wanted_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/cracked.png"}
    ],
};
