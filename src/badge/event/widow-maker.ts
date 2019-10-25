import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const WidowMaker: IBadgeData = {
    type: BadgeType.EVENT,
    key: "widow-maker",
    names: [
        {value: "Widow Maker"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You were instrumental in the resurrection of Red Widow, Lord Recluse's love from long ago. Only time will tell if this calms Recluse down or drives him to new heights of villainy.`},
        {type: Alternate.V, value: `You were instrumental in the resurrection of Red Widow, Lord Recluse's love from long ago. Fortunatas have foreseen new heights of power achieved by Arachnos because of this act.`}
    ],
    acquisition: "Complete the story arc from Jessica Megan Duncan or Arbiter Hawk during the Spring Event.",
    links: [
        {title: "Widow Maker Badge", href: "https://paragonwiki.com/wiki/Widow_Maker_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/widow-maker.png"}]
};
