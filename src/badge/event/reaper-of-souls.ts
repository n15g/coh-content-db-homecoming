import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ReaperOfSouls: IBadgeData = {
    type: BadgeType.EVENT,
    key: "reaper-of-souls",
    setTitleId: 2507,
    names: [
        {value: "Reaper of Souls"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You have defeated 5 hollow reapers, the highest ranking members of the Unseelie Court who invade our world when the spirit realm is at its closest.`},
    ],
    acquisition: `Defeat 5 Hollow Reapers during the Halloween event.`,
	notes: `This badge rewards 2 prismatic aether particles.`,
    links: [
        {title: "Reaper of Souls Badge", href: "https://homecoming.wiki/wiki/Reaper_of_Souls_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/reaper-of-souls.png"}]
};