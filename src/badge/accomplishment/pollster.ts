import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Pollster: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "pollster",
    setTitleId: 2513,
    names: [
        {value: "Pollster"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You protected democracy by exposing the Council's election fraud scheme to put Alexander 'The Great' Pavlidis on the city council.`}
    ],
    acquisition: `Complete the Noble Intentions arc from John Houston (Level 40-44, Arc 27.06 in Ouro, Rogue).`,
	notes: `In the third mission of the Noble Intentions arc from John Houston (Level 40-44, Arc 27.06 in Ouro, Rogue), at one point you will be attacked briefly by Ravenstorm and Dr. Todd, then you can then talk to them. During the dialogue, select the hero responses to earn this badge.
 
 This is an abridged version of the steps to complete this badge. A more detailed walkthough can be found on the HC forums at https://forums.homecomingservers.com/topic/42642-noble-intentions-arc-pollster-and-underdog-badge-guide/`,
    links: [
        {title: "Pollster Badge", href: "https://homecoming.wiki/wiki/Pollster_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/pollster.png"}
    ],
};
