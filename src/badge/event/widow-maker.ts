import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const WidowMaker: IBadgeData = {
    type: BadgeType.EVENT,
    key: "widow-maker",
    names: [
        {value: "Widow Maker"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You were instrumental in the resurrection of Red Widow, Lord Recluse's love from long ago. Only time will tell if this calms Recluse down or drives him to new heights of villainy."},
    ],
    acquisition: "Complete the story arc from Jessica Megan Duncan or Arbiter Hawk during the Spring Event.",
    links: [
        {title: "Widow Maker Badge", href: "https://paragonwiki.com/wiki/Widow_Maker_Badge"}
    ],
    icons: [{value: "core.event.widow-maker"}]
};
