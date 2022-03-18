export const LOCAL = "chk"

export const setRemember = (diff: string) => ({
    type: LOCAL,
    payload : diff
})