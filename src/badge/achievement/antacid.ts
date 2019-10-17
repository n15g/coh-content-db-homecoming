import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Antacid: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "antacid",
    names: [
        {value: "Antacid"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You mocked the Top Dog himself by refusing to use any of the collected Molecular Acids to stop " +
        "Marauder's reinforcements during a Lambda Sector raid."}
    ],
    acquisition: "Complete the Lambda Sector Incarnate Trial having destroyed all Containment Canisters in sabotage, but using no Molecular Acids",
    links: [
        {title: "Antacid Badge", href: "https://paragonwiki.com/wiki/Antacid_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-lambda.png"}
    ],
};