import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Psychologist: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "psychologist",
    setTitleId: 2042,
    names: [
        {value: "Psychologist"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{
        value: "You have spent a great deal of time in the Mother of Mercy Hospital, earning you the Psychologist Day Job." +
            " Logging out in the Mother of Mercy Hospital will bolster your defenses against psionic attacks, when you log back in, for a short time."
    }],
    acquisition: "Log out inside the Mother of Mercy Hospital in First Ward for 100 hours.",
    effect: "Day Job: +Res (Psi), +Def (Psi)",
    links: [
        {title: "Psychologist Badge", href: "https://paragonwiki.com/wiki/Psychologist_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/psychologist.png"}]
};
