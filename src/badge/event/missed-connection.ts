import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MissedConnection: IBadgeData = {
    type: BadgeType.EVENT,
    key: "missed-connection",
    names: [
        {value: "Missed Connection"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've spurned the season of Spring in favor of sowing discord and heartbreak throughout the world by misdelivering Valentines!"},
    ],
    acquisition: "Deliver 7 Valentines to the incorrect recipient.",
    notes: "To get this badge and/or the Missed Connection badge you must run the missions from Scratch for villains or Ganymede for heroes and then talk to DJ Zero." +
        "\n\nDJ Zero will ask you if you want to deliver Valentines and once you say yes the valentines will drop like tip missions.",
    links: [
        {title: "Missed Connection Badge", href: "https://paragonwiki.com/wiki/Missed_Connection_Badge"}
    ],
    icons: [{value: "core.event.missed-connection"}]
};
