import {IGameMapData} from "coh-content-db";
import {SewerNetwork} from "./sewer-network";
import {BoomtownRefugee} from "../badge/exploration/boomtown-refugee";
import {HadesAspirant} from "../badge/exploration/hades-aspirant";
import {SecretOfTheCity} from "../badge/exploration/secret-of-the-city";
import {SprawlSurvivor} from "../badge/exploration/sprawl-survivor";
import {TheUnderlord} from "../badge/exploration/the-underlord";
import {FromBeneathYou} from "../badge/exploration/from-beneath-you";
import {LivingDark} from "../badge/exploration/living-dark";
import {PersephoneSupplicant} from "../badge/exploration/persephone-supplicant";
import {Academic} from "../badge/history/academic";

export const AbandonedSewerNetwork: IGameMapData = {
    key: "abandoned-sewer-network",
    name: "Abandoned Sewer Network",
    links: [{title: "Abandoned Sewer Network", href: "https://paragonwiki.com/wiki/Abandoned_Sewer_Network"}],
    vidiotMaps: [
        {
            name: "Abandoned Sewer Network Vidiot Map",
            href: "https://n15g.github.io/coh-content-db-homecoming/images/vidiotmaps/abandoned-sewer-network.png",
            pointsOfInterest: [
                {x: 295, y: 365, mapKey: SewerNetwork.key},
                {x: 1113, y: 718, mapKey: SewerNetwork.key},
                {x: 68, y: 1589, mapKey: SewerNetwork.key},
                {x: 673, y: 1802, mapKey: SewerNetwork.key},
                {x: 1430, y: 1407, mapKey: SewerNetwork.key},

                {x: 736, y: 1096, notes: "Trial Door"},

                {x: 295, y: 450, badgeKey: BoomtownRefugee.key},
                {x: 687, y: 1097, badgeKey: HadesAspirant.key},
                {x: 1054, y: 717, badgeKey: SecretOfTheCity.key},
                {x: 673, y: 1776, badgeKey: SprawlSurvivor.key},
                {x: 98, y: 1589, badgeKey: TheUnderlord.key},
                {x: 1407, y: 1407, badgeKey: FromBeneathYou.key},
                {x: 563, y: 760, badgeKey: LivingDark.key},
                {x: 618, y: 1433, badgeKey: PersephoneSupplicant.key},

                {x: 583, y: 744, badgeKey: Academic.key, badgePartialKey: Academic.partials[2].key},
            ]
        }
    ]
};
