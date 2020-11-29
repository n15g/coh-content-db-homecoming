import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {BloodyBay} from "../../map/bloody-bay";
import {SirensCall} from "../../map/sirens-call";
import {Warburg} from "../../map/warburg";

export const BehindEnemyLines: IBadgeData = {
    type: BadgeType.PVP,
    key: "behind-enemy-lines",
    setTitleId: 2457,
    names: [
        {value: "Behind Enemy Lines"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
	{type: Alternate.H, value: "You have slipped past Arachnos' defenses and thwarted their plans against Freedom Corps."},
	{type: Alternate.V, value: "You have slipped past Freedom Corps' defenses and disrupted their plans against Arachnos."}
    ],
    acquisition: `Complete at least one door mission in [map:${BloodyBay.key}], [map:${SirensCall.key}] and [map:${Warburg.key}].`,
    notes: "One mission per zone, patrols don't count.",
    links: [
	{title: "Behind Enemy Lines Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Behind_Enemy_Lines_Badge"}
    ],
    icons: [
	{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/cracked.png"}
    ],
};
