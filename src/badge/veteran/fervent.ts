import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Fervent: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "fervent",
    names: [
        {value: "Fervent"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 42",
    imageKeys: [{value: "core.veteran.veteran-42"}]
};
