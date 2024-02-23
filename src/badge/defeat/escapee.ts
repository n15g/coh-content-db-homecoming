import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Escapee: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "escapee",
    setTitleId: 1473,
    names: [
        {value: "Escapee"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "Despite all of their genetic modifications and cybernetics, the Failed Experiments were no " +
                "match for you. You defeated several waves of Failed Experiments to earn this badge."
        }
    ],
    acquisition: "Defeat 100 points worth of Failed Experiments",
    links: [
        {title: "Escapee Badge", href: "https://homecoming.wiki/wiki/Escapee_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/escapee.png"}
    ],
};
