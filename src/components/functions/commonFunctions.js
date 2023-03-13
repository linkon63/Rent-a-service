export const sessionStorageStore = (keyName, data) => {
    sessionStorage.setItem(keyName, JSON.stringify(data))
}
export const sessionStorageGet = (keyName) => {
    return JSON.parse(sessionStorage.getItem(keyName))
}