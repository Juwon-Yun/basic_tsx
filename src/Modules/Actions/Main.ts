export const SETPAGE = "main/SETPAGE"

export const setPage = (diff : string) => ({
    type: SETPAGE,
    payload : diff
})