import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const RoleModel: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "role-model",
    setTitleId: 245,
    names: [
        {value: "Role Model"},
        {type: Alternate.P, value: "Dean of Hard Knocks"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You are looked at as a Role Model to the newest generation of Heroes."},
        {type: Alternate.V, value: "You've spent considerable time with a lackey of your own."},
        {type: Alternate.P, value: "There's a lot of harsh lessons common to all worlds. If you can spare some new kid just one, " +
        "that's enough for you."}
    ],
    acquisition: "Sidekick another hero for 16 hours",
    links: [
        {title: "Role Model Badge", href: "https://paragonwiki.com/wiki/Role_Model_Badge"},
        {title: "Dean of Hard Knocks Badge", href: "https://paragonwiki.com/wiki/Dean_of_Hard_Knocks_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-v.png"}
    ],
};