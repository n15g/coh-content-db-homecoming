import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Loyalist} from "../accomplishment/loyalist";
import {Magistrate} from "../accomplishment/magistrate";
import {Tyrant} from "../accomplishment/tyrant";
import {ResistanceMember} from "../accomplishment/resistance-member";
import {Obliterator} from "../accomplishment/obliterator";
import {Survivor} from "../accomplishment/survivor";
import {Escapist} from "../accomplishment/escapist";

export const TemperedThroughFire: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "tempered-through-fire",
    setTitleId: 2212,
    names: [
        {value: "Tempered Through Fire"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Through fire and flame your resolve has been tempered like finely forged steel.`}
    ],
    notes: `Earn the following badges to earn this badge: [badge:loyalist], [badge:magistrate], [badge:tyrant], [badge:resistance-member], [badge:obliterator], [badge:survivor] and [badge:escapist]. [Rewards 20 Merits]`,
    links: [
        {title: "Tempered Through Fire Badge", href: "https://paragonwiki.com/wiki/Tempered_Through_Fire_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/tempered-through-fire.png"}
    ],
    partials: [
            {key: Loyalist.key, type: BadgePartialType.BADGE, badgeKey: Loyalist.key},
            {key: Magistrate.key, type: BadgePartialType.BADGE, badgeKey: Magistrate.key},
            {key: Tyrant.key, type: BadgePartialType.BADGE, badgeKey: Tyrant.key},
            {key: ResistanceMember.key, type: BadgePartialType.BADGE, badgeKey: ResistanceMember.key},
            {key: Obliterator.key, type: BadgePartialType.BADGE, badgeKey: Obliterator.key},
            {key: Survivor.key, type: BadgePartialType.BADGE, badgeKey: Survivor.key},
            {key: Escapist.key, type: BadgePartialType.BADGE, badgeKey: Escapist.key}
    ]
};