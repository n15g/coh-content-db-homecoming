import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const StrikeBuster: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "strike-buster",
    setTitleId: 300,
    names: [
        {value: "Strike Buster"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "The Scrapyarders have taken to calling you the Strike Buster."}
    ],
    acquisition: "Defeat 200 Scrapyarders (Sharkhead Isle)",
    links: [
        {title: "Strike Buster Badge", href: "https://homecoming.wiki/wiki/Strike_Buster_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/scrapyarder.png"}
    ],
};
