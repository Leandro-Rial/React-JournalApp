import { types } from "../types/types"

export const setError = (err) => ({
    type: types.uiSetError,
    payload: err
})

export const RemoveError = () => ({
    type: types.uiRemoveError,
})

export const StartLoading = () => ({
    type: types.uiStartLoading
})

export const FinishLoading = () => ({
    type: types.uiFinishLoading
})