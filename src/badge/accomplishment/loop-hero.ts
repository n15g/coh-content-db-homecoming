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
	notes: `
 Run the Troubled Times arc from Dr. Stribbling (Level 30-34, Arc 27.08 in Ouro, Vigilante) four times, choosing one of the four fates for Marcus below until all four choices have been made.

* Let him go
* Arrest him
* Return him
* Finish him off

Once each of the above outcomes have been achieved, run the arc a 5th time. Mender Roebuck will appear during the arc, speak to him and during the dialogue, choose to say "I'll do what I believe is best, you have no say in it." Then speak to Marcus, agree to trick his father, and you will have a new mission to take down Dr. Stribbling.

This is an abridged version of the steps to complete this badge. A more detailed walkthough can be found on the HC forums at https://forums.homecomingservers.com/topic/42619-loop-hero-badge-guide/
 `,
    links: [
        {title: "Loop Hero Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Loop_Hero_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/loop-hero.png"}
    ],
};
