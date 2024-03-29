import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MatchMaker: IBadgeData = {
    type: BadgeType.EVENT,
    key: "match-maker",
    setTitleId: 2112,
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
        {title: "Match Maker Badge", href: "https://homecoming.wiki/wiki/Match_Maker_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/match-maker.png"}]
};
