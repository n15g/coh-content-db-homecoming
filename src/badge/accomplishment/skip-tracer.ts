import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const SkipTracer: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "skip-tracer",
    setTitleId: 342,
    names: [
        {value: "Skip Tracer"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "Nobody skips out on their debts to the Family. Not with you around."}
    ],
    acquisition: "Complete the Catch the Freakshow debtor before he skips town mission from Basse Croupier",
    links: [
        {title: "Skip Tracer Badge", href: "https://homecoming.wiki/wiki/Skip_Tracer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-7.png"}
    ],
};
