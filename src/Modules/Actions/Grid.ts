export const SETDETAIL = "grid/setDetail" as const

export const setDetail = (diff : object) => ({
    type: SETDETAIL,
    payload : diff
}) 