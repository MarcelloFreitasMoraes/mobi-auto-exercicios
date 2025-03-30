'use server'
import { fetchData } from "@/service/get-list";
import { baseUrl } from "@/service/http";

export const fetchCharacters = async (characterIds?: number[]) => { 
    const url = `${baseUrl}/character`;
    return fetchData(url, characterIds?.join(',') || '');
};
