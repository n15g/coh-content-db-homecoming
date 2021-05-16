import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Assistant: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "assistant",
    setTitleId: 1966,
    names: [
        {type: Alternate.H, value: "Assistant"},
        {type: Alternate.V, value: "Accomplice"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You helped a team complete a Weekly Strike Target even though you already received the bonus " +
                "for the week."
        }
    ],
    acquisition: "Complete a Weekly Strike Target after you've already completed one for the week",
    links: [
        {title: "Assistant Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Assistant_Badge"},
        {title: "Accomplice Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Accomplice_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/assistant.png"}
    ],
};
