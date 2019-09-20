import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Gullible: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "gullible",
    canonicalName: "Gullible",
    alignment: ALIGNMENT_ANY,
    badgeText: "Your time spent as a seagull has given you better insights into the nature of reality." +
        " One insight in particular comes to mind: be careful what you wish for.",
    acquisition: "Make Null the Gull turn you into a seagull after asking to be more powerful.",
    notes: "Null the Gull can be found in Pocket D."
};
