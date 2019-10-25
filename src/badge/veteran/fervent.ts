import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Fervent: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "fervent",
    setTitleId: 831,
    names: [
        {value: "Fervent"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You stand up for what you believe in time and time again, you're considered 'Fervent' by your peers. You have attained forty-two Veteran levels.`},
        {type: Alternate.V, value: `You do what you want and eliminate your competition time and time again, you're considered 'Fervent' by your peers. You have attained forty-two Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 42",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-42.png"}]
};
