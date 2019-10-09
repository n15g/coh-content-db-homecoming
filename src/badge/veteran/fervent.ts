import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Fervent: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "fervent",
    names: [
        {value: "Fervent"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 42",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-42.png"}]
};
