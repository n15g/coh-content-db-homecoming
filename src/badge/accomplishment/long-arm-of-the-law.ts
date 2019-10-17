import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const LongArmOfTheLaw: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "long-arm-of-the-law",
    setTitleId: 2262,
    names: [
        {value: "Long Arm of the Law"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You were able to stop all of the chaos that was running rampant around the bank in Brickstown."}
    ],
    acquisition: "Properly assign the New Praetorians to handle the side missions in the first mission of the second story arc from Provost Marchand",
    links: [
        {title: "Long Arm of the Law Badge", href: "https://paragonwiki.com/wiki/Long_Arm_of_the_Law_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-challenge.png"}
    ],
};