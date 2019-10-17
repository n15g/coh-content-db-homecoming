import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SpinDoctor: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "spin-doctor",
    names: [
        {value: "Spin Doctor"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed the Incarnate Trial: TPN Campus."}
    ],
    acquisition: "Complete the TPN Campus Trial",
    links: [
        {title: "Spin Doctor Badge", href: "https://paragonwiki.com/wiki/Spin_Doctor_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/spin-doctor.png"}
    ],
};