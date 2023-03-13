export const sessionStorageStore = (keyName, data) => {
    sessionStorage.setItem(keyName, JSON.stringify(data))
}