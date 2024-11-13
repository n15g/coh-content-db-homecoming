import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {GerminatorTerminator} from "../accomplishment/germinator-terminator";
import {FullSpectrum} from "../defeat/full-spectrum";
import {Lawbreaker} from "../defeat/lawbreaker";
import {ShowsOver} from "../defeat/shows-over";
import {TheLastWord} from "../history/the-last-word";
import {EyeOfTheVortex} from "../exploration/eye-of-the-vortex";
import {Stargazer} from "../exploration/stargazer";
import {DeadButDreaming} from "../exploration/dead-but-dreaming";
import {Multifaceted} from "../achievement/multifaceted";

export const BetweenRealities: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "between-realities",
    setTitleId: 2539,
    names: [
        {value: "Between Realities"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've spent a significant amount of time shifting between the spatial overlaps of the First Ward and Night Ward. With experience, you've learned of a method to manipulate the magics used by the Light & Shadowed Paths to define and utilize spatial jump points of your own.`},
    ],
    notes: `Awards the Mark & Recall power`,
    links: [
        {title: "Between Realities Badge", href: "https://homecoming.wiki/wiki/Between_Realities_Badge"},
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/between-realities.png"}
    ],
    effect: `Mark & Recall`,
    partials: [
        {key: GerminatorTerminator.key, type: BadgePartialType.BADGE, badgeKey: GerminatorTerminator.key},
        {key: FullSpectrum.key, type: BadgePartialType.BADGE, badgeKey: FullSpectrum.key},
        {key: Lawbreaker.key, type: BadgePartialType.BADGE, badgeKey: Lawbreaker.key},    
        {key: ShowsOver.key, type: BadgePartialType.BADGE, badgeKey: ShowsOver.key},    
        {key: TheLastWord.key, type: BadgePartialType.BADGE, badgeKey: TheLastWord.key},
        {key: EyeOTheVortex.key, type: BadgePartialType.BADGE, badgeKey: EyeoftheVortex.key},
        {key: Stargazer.key, type: BadgePartialType.BADGE, badgeKey: Stargazer.key},
        {key: DeadButDreaming.key, type: BadgePartialType.BADGE, badgeKey: DeadButDreaming.key},
        {key: Multifaceted.key, type: BadgePartialType.BADGE, badgeKey: Multifaceted.key},
    ]
};
