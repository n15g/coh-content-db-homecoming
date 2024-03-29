import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const AgentProvocateur: IBadgeData = {
    type: BadgeType.PVP,
    key: "agent-provocateur",
    setTitleId: 369,
    names: [
        {value: "Agent Provocateur"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "Arachnos has put you at the top of their hit list."},
        {type: Alternate.V, value: "Freedom Corps has made your capture a number one priority."}
    ],
    acquisition: "Complete a buff mission in a PvP zone (Bloody Bay, Siren's Call, or Warburg)",
    links: [
        {title: "Agent Provocateur Badge", href: "https://homecoming.wiki/wiki/Agent_Provocateur_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/cracked.png"}
    ],
};
