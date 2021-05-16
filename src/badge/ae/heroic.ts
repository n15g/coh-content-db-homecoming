import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Heroic: IBadgeData = {
    type: BadgeType.AE,
    key: "heroic",
    setTitleId: 1217,
    names: [
        {value: "Heroic"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: "You've earned the \"Heroic\" badge by playing an Architect mission marked as Heroic content."}],
    acquisition: "Complete one Mission Architect arc marked as Heroic content.",
    notes: "This badge is only awarded to characters of the hero or vigilante alignments." +
        " Although credit for this badge may be earned by villains or rogues, the badge will not be awarded to a character until they change alignment.",
    links: [
        {title: "Heroic Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Heroic_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/heroic.png"}]
};
