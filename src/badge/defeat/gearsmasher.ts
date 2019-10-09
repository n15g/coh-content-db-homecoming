import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Gearsmasher: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "gearsmasher",
    names: [
        {value: "Gearsmasher"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have learned that the smallest gear can power the greatest menace, and have taken steps to stop the Clockwork menace."}],
    acquisition: "Defeat 100 Clockwork gears that are spawned after a Clockwork prince is defeated.",
    links: [
        {title: "Gearsmasher", href: "https://paragonwiki.com/wiki/Gearsmasher_Badge"}
    ],
    icons: [{value: "core.defeat.gearsmasher"}]
};
