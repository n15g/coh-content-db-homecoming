import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const DroneProtector: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "drone-protector",
    setTitleId: 1759,
    names: [
        {value: "Drone Protector"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You managed to protect all the police drones during the Praetorian's invasion of Kings Row."},
        {
            type: Alternate.V, value: "You ensured that none of the police drones in Kings Row were were destroyed by the " +
                "Praetorians. You can think of plenty of other uses for them, especially if you could swipe one " +
                "for yourself."
        }
    ],
    acquisition: "Ensure no drones are defeated in the first mission of the Apex Task Force",
    links: [
        {title: "Drone Protector Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Drone_Protector_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tf-tinmage.png"}
    ],
};
