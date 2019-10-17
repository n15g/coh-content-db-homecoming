import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const YouShouldSeeTheOtherGuy: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "you-should-see-the-other-guy",
    setTitleId: 2317,
    names: [
        {value: "You should see the other guy."}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You played Deadlock's personal story and learned a little bit about the man who put Back Alley " +
        "Brawler in the hospital."}
    ],
    acquisition: "Complete the personal story from Deadlock",
    links: [
        {title: "You should see the other guy. Badge", href: "https://paragonwiki.com/wiki/You_should_see_the_other_guy_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-parc.png"}
    ],
};