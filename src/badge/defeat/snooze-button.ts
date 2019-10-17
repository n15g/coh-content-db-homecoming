import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SnoozeButton: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "snooze-button",
    setTitleId: 2058,
    names: [
        {value: "Snooze Button"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The rejects from the Seer program could have used more training if they wanted to stand up to " +
        "you. You defeated several Awakened to earn this badge."}
    ],
    acquisition: "Defeat 100 points worth of The Awakened",
    links: [
        {title: "Snooze Button Badge", href: "https://paragonwiki.com/wiki/Snooze_Button_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/snooze-button.png"}
    ],
};