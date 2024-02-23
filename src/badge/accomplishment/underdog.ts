import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Underdog: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "underdog",
    setTitleId: 2512,
    names: [
        {value: "Underdog"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You took advantage of the Council's election fraud scheme for your personal profit, and made a mockery of the democratic process by getting the Can Man elected to the city council.`}
    ],
    acquisition: `Complete the Noble Intentions arc from John Houston (Level 40-44, Arc 27.06 in Ouro, Rogue).`,
	notes: `In the third mission of the Noble Intentions arc from John Houston (Level 40-44, Arc 27.06 in Ouro, Rogue), at one point you will be attacked briefly by Ravenstorm and Dr. Todd, then you can then talk to them. During the dialogue, select the rogue responses to earn this badge.
 
 This is an abridged version of the steps to complete this badge. A more detailed walkthough can be found on the HC forums at https://forums.homecomingservers.com/topic/42642-noble-intentions-arc-pollster-and-underdog-badge-guide/`,
    links: [
        {title: "Underdog Badge", href: "https://homecoming.wiki/wiki/Underdog_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/underdog.png"}
    ],
};
