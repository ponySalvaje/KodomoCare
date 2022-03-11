import AsyncStorage from "@react-native-community/async-storage"
import { storageKeys } from "../constants"

export const getTokenData = () => {
    return AsyncStorage.getItem(storageKeys.AUTH_TOKEN);
}

export const setTokenData = (token: string) => {
    return AsyncStorage.setItem(storageKeys.AUTH_TOKEN, token);
}

export const cleanTokenData = () => {
    return AsyncStorage.removeItem(storageKeys.AUTH_TOKEN);
}