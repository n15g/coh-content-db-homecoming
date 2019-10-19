import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {DarkFiend} from "../event/dark-fiend";
import {HellHathNoFury} from "../event/hell-hath-no-fury";
import {Terror} from "../event/terror";
import {MonsterMasher} from "../event/monster-masher";
import {Monstrous} from "../event/monstrous";

export const HellAndBack: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "hell-and-back",
    setTitleId: 1372,
    names: [
        {value: "Hell and Back"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've endured the spells of witches, the might of misshapen abominations, the ghostly touch of spectral terrors and the schemes of the supernatural fiends, earning yourself this Accolade.`}
    ],
    notes: `Available during Halloween Events`,
    links: [
        {title: "Hell and Back Badge", href: "https://paragonwiki.com/wiki/Hell_and_Back_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hell-and-back.png"}
    ],
    partials: [
            {key: DarkFiend.key, type: BadgePartialType.BADGE, badgeKey: DarkFiend.key},
            {key: HellHathNoFury.key, type: BadgePartialType.BADGE, badgeKey: HellHathNoFury.key},
            {key: Terror.key, type: BadgePartialType.BADGE, badgeKey: Terror.key},
            {key: MonsterMasher.key, type: BadgePartialType.BADGE, badgeKey: MonsterMasher.key},
            {key: Monstrous.key, type: BadgePartialType.BADGE, badgeKey: Monstrous.key}
    ]
};