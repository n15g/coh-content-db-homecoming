import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const ProfessionalLiar: IBadgeData = {
    type: BadgeType.DAY_JOB,
    key: "professional-liar",
    setTitleId: 1054,
    names: [
        {type: Alternate.H, value: "Professional Liar"},
        {type: Alternate.V, value: "Demagogue"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [{
        type: Alternate.H,
        value: "While you're no longer interested in spreading Arachnos lies, there doesn't seem to be many opportunities in a similar vein here in Paragon City."
    }, {
        type: Alternate.V,
        value: "You spend your free time spreading Arachnos propaganda to better manipulate and placate the masses of the Rogue Isles earning you the Demagogue Day Job." +
            " Logging out in the Arachnos Building in Marconeville will earn you an Infamy bonus, upon each mission completion, for a short time."
    }],
    acquisition: "Log out at the Arachnos Building in Marconeville for 100 hours.",
    effect: "Day Job: Bonus Infamy upon mission completion",
    links: [
        {title: "Professional Liar Badge", href: "https://paragonwiki.com/wiki/Professional_Liar_Badge"},
        {title: "Demagogue Badge", href: "https://paragonwiki.com/wiki/Demagogue_Badge"},
        {title: "Day Jobs", href: "https://paragonwiki.com/wiki/Day_Jobs"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/professional-liar.png"}]
};
