import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SteelCanyon} from "../../map/steel-canyon";

export const SecretAdmirer: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "secret-admirer",
    names: [{value: "Secret Admirer"}],
    alignment: ALIGNMENT_HERO,
    mapKey: SteelCanyon.key,
    location: [-3438.0, 0.0, 2536.0],
    badgeText: [{
        value: "Before becoming guardian of Croatoa, War Witch shared an apartment here with her roommate Apex."
    }],
    notes: "119 yards south of the Wentworth Consignment House.",
    links: [
        {title: "Secret Admirer Badge", href: "https://paragonwiki.com/wiki/Secret_Admirer_Badge"}
    ],
    icons: [{value: "core.exploration.hero"}],
    vidiotMapKey: "1"
};
