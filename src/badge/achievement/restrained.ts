import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Restrained: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "restrained",
    setTitleId: 18,
    setTitleIdPraetorian: 1693,
    names: [
        {type: Alternate.H, value: "Restrained"},
        {type: Alternate.V, value: "Slacker"},
        {type: Alternate.P, value: "Waiting"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You have been under the influence of restraining powers such as sleeps and holds for an " +
        "inordinate amount of time."},
        {type: Alternate.V, value: "You've been Slept, Immobilized, or Held for over ten minutes. Quit sleeping on the job!"},
        {type: Alternate.P, value: "Wait long enough and those stuns will wear off. Any minute now..."}
    ],
    acquisition: "Be held for 10 minutes",
    links: [
        {title: "Restrained Badge", href: "https://paragonwiki.com/wiki/Restrained_Badge"},
        {title: "Slacker Badge", href: "https://paragonwiki.com/wiki/Slacker_Badge"},
        {title: "Waiting Badge", href: "https://paragonwiki.com/wiki/Waiting_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-v.png"}
    ],
};
