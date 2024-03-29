import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SteelCanyon} from "../../map/steel-canyon";

export const SecretAdmirer: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "secret-admirer",
    setTitleId: 106,
    names: [{value: "Secret Admirer"}],
    alignment: ALIGNMENT_HERO,
    mapKey: SteelCanyon.key,
    location: [-3438.0, 0.0, 2536.0],
    badgeText: [{
        value: "Before becoming guardian of Croatoa, War Witch shared an apartment here with her roommate Apex."
    }],
    notes: "119 yards south of the Wentworth Consignment House.",
    links: [
        {title: "Secret Admirer Badge", href: "https://homecoming.wiki/wiki/Secret_Admirer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "1"
};
