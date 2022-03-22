export const PAGES = {
    MAIN: "/",
    HOME: "/home",
    BACK : "/back"
}

export const TEXTID = {
    ID : "text_id",
    PW : "text_pw",
}

export const LABELS = {
    ID: "ID",
    PW: "Password",
    RM: "Remember Me"
}

export const CN = {
    BC : "box-container"
}

export const LOCAL = {
    KEY: "test_chk",
}

export const GENIE = {
    SEGM: "정확성",
    PHON: "명료성",
    RATE: "속도",
    HOLI: "유창성",
    ACOU: "총점"
}
export const GENIE_2 = {
    PITC: "억양",
    TEXT: "음성",
    TIME: "음성시간",
    DATE: "생성일자"
}

export const TEXTOBJ = [
    {
        id: TEXTID.ID,
        label : LABELS.ID
    },
    {
        id: TEXTID.PW,
        label : LABELS.PW
    },
]

export const GENIEOBJ = [
    { 
        label: GENIE.SEGM,
        value: '',
    },
    { 
        label: GENIE.PHON,
        value: '',
    },
    { 
        label: GENIE.RATE,
        value: '',
    },
    { 
        label: GENIE.HOLI,
        value: '',
    },
    { 
        label: GENIE.ACOU,
        value: '',
    }
]
export const GENIEOBJ_2 = [
    { 
        label: GENIE_2.PITC,
        value: '',
    },
    { 
        label: GENIE_2.TEXT,
        value: '',
    },
    { 
        label: GENIE_2.TIME,
        value: '',
    },
    { 
        label: GENIE_2.DATE,
        value: '',
    },
]