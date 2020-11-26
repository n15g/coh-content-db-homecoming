import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {BloodyBay} from "../../map/bloody-bay";
import {SirensCall} from "../../map/sirens-call";
import {Warburg} from "../../map/warburg";

export const BehindEnemyLines: IBadgeData = {
    type: BadgeType.PVP,
    key: "behind-enemy-lines",
    names: [
        {value: "Behind Enemy Lines"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: `Complete at least one door mission in [map:${BloodyBay.key}], [map:${SirensCall.key}] and [map:${Warburg.key}].`,
    notes: "One mission per zone, patrols don't count."
};
