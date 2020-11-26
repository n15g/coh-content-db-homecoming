import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const PatientZero: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "patient-zero",
    names: [
        {value: "Patient Zero"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    acquisition: "Complete Doc Buzzsaw's arc."
};
