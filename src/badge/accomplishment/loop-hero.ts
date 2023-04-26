import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const LoopHero: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "loop-hero",
    setTitleId: 2514,
    names: [
        {value: "Loop Hero"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `After much trial and tribulation, you were able to use Ouroboros to put an end to the Stribbling family drama. By your own count, you must have gone around at least 5 times... but the real number could be well into the thousands.`}
    ],
    acquisition: `Complete the Troubled Times arc from Dr. Stribbling (Level 30-34, Arc 27.08 in Ouro, Vigilante) multiple times via Ouroboros.`,
	notes: `Will update acquisition notes with more details once they become available.`,
    links: [
        {title: "Loop Hero Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Loop_Hero_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/loop-hero.png"}
    ],
};