import {ALIGNMENT_VILLAIN, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {ProfessionalLiar} from "../day-job/professional-liar";
import {CannonFodder} from "../day-job/cannon-fodder";

export const AntiArachnosActivist: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "anti-arachnos-activist",
    setTitleId: 1078,
    names: [
        {type: Alternate.H, value: "Anti-Arachnos Activist"},
        {type: Alternate.V, value: "Web Weaver"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: `You've turned your skills at propaganda and rabble-rousing against Arachnos, bringing a glimmer of hope to those you once helped enslave.`},
        {
            type: Alternate.V,
            value: `Your work subjugating the masses of the Rogue Isles and promoting pro-Arachnos propaganda has earned you the Web Weaver Accolade.  While logged out in an Arachnos controlled area or in the Arachnos building in Marconeville you will earn additional charges for your Web Grenade power.`
        }
    ],
    notes: `Earn the [badge:${CannonFodder.key}] and [badge:${ProfessionalLiar.key}] Day Jobs`,
    links: [
        {title: "Anti-Arachnos Activist Badge", href: "https://homecoming.wiki/wiki/Anti-Arachnos_Activist_Badge"},
        {title: "Web Weaver Badge", href: "https://homecoming.wiki/wiki/Web_Weaver_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/anti-arachnos-activist.png"}
    ],
    partials: [
        {key: CannonFodder.key, type: BadgePartialType.BADGE, badgeKey: CannonFodder.key},
        {key: ProfessionalLiar.key, type: BadgePartialType.BADGE, badgeKey: ProfessionalLiar.key}
    ]
};
