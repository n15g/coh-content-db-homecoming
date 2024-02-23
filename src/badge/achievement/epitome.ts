import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Epitome: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "epitome",
    setTitleId: 246,
    setTitleIdPraetorian: 1709,
    names: [
        {value: "Epitome"},
        {type: Alternate.P, value: "Philosopher"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You are the Epitome of heroism, and gratefully share your knowledge with younger heroes."},
        {type: Alternate.V, value: "You've spent considerable time helping lesser villains realize their potential."},
        {
            type: Alternate.P, value: "Like some Greek Philosopher, you're approached by wannabes and questioners who want to know " +
                "the secrets of Praetoria. By fighting alongside them, in a way you're revealing those secrets. " +
                "That's philosophical enough."
        }
    ],
    acquisition: "Sidekick another hero for 20 hours",
    links: [
        {title: "Epitome Badge", href: "https://homecoming.wiki/wiki/Epitome_Badge"},
        {title: "Philosopher Badge", href: "https://homecoming.wiki/wiki/Philosopher_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-v.png"}
    ],
};
