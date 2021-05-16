import {ALIGNMENT_VILLAIN, badgeReference, BadgeType, IBadgeData} from "coh-content-db";
import {ProtectorOfInnocents} from "../achievement/protector-of-innocents";

export const WolfSpiderEnforcer: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "wolf-spider-enforcer",
    setTitleId: 439,
    names: [
        {value: "Wolf Spider Enforcer"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "These soldiers will fight for you."}
    ],
    acquisition: `Earn the ${badgeReference(ProtectorOfInnocents)} Badge (Arachnos)`,
    links: [
        {title: "Wolf Spider Enforcer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Wolf_Spider_Enforcer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
