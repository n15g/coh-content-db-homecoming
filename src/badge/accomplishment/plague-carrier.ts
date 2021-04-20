import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const PlagueCarrier: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "plague-carrier",
    setTitleId: 332,
    names: [
        {value: "Plague Carrier"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "The radio told you to steal the Outbreak virus and bring it back to Port Oakes."}
    ],
    acquisition: "Complete the Steal Outbreak from Lost mission from The Radio",
    links: [
        {title: "Plague Carrier Badge", href: "https://paragonwiki.com/wiki/Plague_Carrier_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-2.png"}
    ],
};
