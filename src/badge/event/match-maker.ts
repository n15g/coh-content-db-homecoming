import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MatchMaker: IBadgeData = {
    type: BadgeType.EVENT,
    key: "match-maker",
    names: [
        {value: "Match Maker"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "In honor of the season of Spring, you've delivered Valentines throughout the world!"},
    ],
    acquisition: "Deliver 7 Valentines to the proper recipient.",
    notes: "To get this badge and/or the Missed Connection badge you must run the missions from Scratch for villains or Ganymede for heroes and then talk to DJ Zero." +
        "\n\nDJ Zero will ask you if you want to deliver Valentines and once you say yes the valentines will drop like tip missions.",
    links: [
        {title: "Match Maker Badge", href: "https://paragonwiki.com/wiki/Match_Maker_Badge"}
    ],
    imageKeys: [{value: "core.event.match-maker"}]
};
