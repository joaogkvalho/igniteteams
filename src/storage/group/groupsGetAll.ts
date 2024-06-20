import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from '../storageConfig';

export async function groupsGetAll() {
    try {
        const storate = await AsyncStorage.getItem(GROUP_COLLECTION)

        const groups: string[] = storate ? JSON.parse(storate) : []

        return groups
    } catch(error: any) {
        throw error
    }
}