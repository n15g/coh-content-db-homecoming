import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TonightsTopStory: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "tonights-top-story",
    names: [
        {value: "Tonight's Top Story"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Maelstrom arrived during the raid on TPN Campus to send a message of his own: that he would " +
        "not allow the Incarnates to spread their 'lies'. Not only did his efforts fail, but you also " +
        "managed to defeat him handily, adding his humiliating defeats to your message to the people of " +
        "Praetoria."}
    ],
    acquisition: "Defeat Maelstrom within four minutes during each of his three encounters",
    links: [
        {title: "Tonight's Top Story Badge", href: "https://paragonwiki.com/wiki/Tonight%27s_Top_Story_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-tpn.png"}
    ],
};