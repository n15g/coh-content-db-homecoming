import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {BirdWatcher} from "../exploration/bird-watcher";
import {CreyFish} from "../exploration/crey-fish";
import {CreyHavoc} from "../exploration/crey-havoc";
import {CreyWatcher} from "../exploration/crey-watcher";
import {Infiltrator} from "../defeat/infiltrator";
import {TheDoctorsAlly} from "../accomplishment/the-doctors-ally";

export const ConspiracyTheorist: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "conspiracy-theorist",
    setTitleId: 168,
    names: [
        {value: "Conspiracy Theorist"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: `You have uncovered Crey's conspiracy, one that has been choking Paragon City for years. As a souvenir you have kept a Crey pistol for your own personal use.`},
        {type: Alternate.V, value: `You uncovered one of Crey's conspiracies, and kept a Cryo Pistol as a souvenir. Unfortunately, feedback from the PTS has made it virtually useless in the Rogue Isles.`}
    ],
    notes: `Awards the Crey CBX-9 Pistol power`,
    links: [
        {title: "Conspiracy Theorist Badge", href: "https://homecoming.wiki/wiki/Conspiracy_Theorist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/conspiracy-theorist.png"}
    ],
    effect: `Crey CBX-9 Pistol`,
    partials: [
        {key: BirdWatcher.key, type: BadgePartialType.BADGE, badgeKey: BirdWatcher.key},
        {key: CreyFish.key, type: BadgePartialType.BADGE, badgeKey: CreyFish.key},
        {key: CreyHavoc.key, type: BadgePartialType.BADGE, badgeKey: CreyHavoc.key},
        {key: CreyWatcher.key, type: BadgePartialType.BADGE, badgeKey: CreyWatcher.key},
        {key: Infiltrator.key, type: BadgePartialType.BADGE, badgeKey: Infiltrator.key},
        {key: TheDoctorsAlly.key, type: BadgePartialType.BADGE, badgeKey: TheDoctorsAlly.key}
    ]
};
