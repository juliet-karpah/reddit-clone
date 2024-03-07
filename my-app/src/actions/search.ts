'use server'
import { redirect } from "next/navigation"


export async function search(formData: FormData){
    const searchTerm = formData.get("term")
    if(!searchTerm || typeof searchTerm){
        redirect("/")
    }
redirect(`/search/${searchTerm}`)
}