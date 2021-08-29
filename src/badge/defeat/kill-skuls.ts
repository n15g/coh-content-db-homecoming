import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const KillSkuls: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "kill-skuls",
    setTitleId: 217,
    names: [
        {value: "Kill Skuls"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Go. Hunt. Kill Skuls."}
    ],
    acquisition: "Defeat 500 Skulls minions, lieutenants, or bosses (excluding some female Skulls)",
    links: [
        {title: "Kill Skuls Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Kill_Skuls_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/skulls.png"}
    ],
};
