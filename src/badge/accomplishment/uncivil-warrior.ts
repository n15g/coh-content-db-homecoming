import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const UncivilWarrior: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "uncivil-warrior",
    setTitleId: 2437,
    names: [
        {value: "Uncivil Warrior"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
	{value: `As the crescendo to a wild adventure that took you all over the city and into many life-threatening scenarios, you went straight to the heart of where the last Vahzilok leader was trying to navigate the complex civil war within the ranks. Cortex was able to escape you, but Dr. Pierce was left trapped in her own mess of lies and deceptions, her fate left to the authorities and the Paragon justice system.`}
    ],
    acquisition: "Complete Agent Watkins' arc, The Graveyard Shift.",
    links: [
	{title: "Uncivil Warrior Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Uncivil_Warrior_Badge"}
    ],
    icons: [
	{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/uncivil-warrior.png"}
    ],
};
