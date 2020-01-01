import {ALIGNMENT_VILLAIN, badgeReference, BadgeType, IBadgeData} from "coh-content-db";
import {Imprisoned} from "../achievement/imprisoned";

export const WailerQueen: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "wailer-queen",
    setTitleId: 458,
    names: [
        {value: "Wailer Queen"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "What does this creature see in you?"}
    ],
    acquisition: `Earn the ${badgeReference(Imprisoned)} Badge (Wailers)`,
    links: [
        {title: "Wailer Queen Badge", href: "https://paragonwiki.com/wiki/Wailer_Queen_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
