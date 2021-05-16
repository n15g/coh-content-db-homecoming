import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Leviathan: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "leviathan",
    setTitleId: 514,
    names: [
        {value: "Leviathan"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            value: "You have fought and defeated the awakened Eye of the Leviathan in the Temple of the Waters " +
                "deep beneath Sharkhead Isle."
        }
    ],
    acquisition: "Complete the Operative Renault Strike Force: The Temple of the Waters",
    links: [
        {title: "Leviathan Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Leviathan_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/leviathan.png"}
    ],
};
