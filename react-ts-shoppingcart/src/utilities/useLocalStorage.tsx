import { useEffect, useState } from "react"

// give it a generic type so the local storage either has an initial value of T or returns type T in function
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
    // get the value in local storage or the initial value passed in
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if(jsonValue != null) return JSON.parse(jsonValue)
        if(typeof initialValue === "function") {
            return initialValue as () => T
        } else {
            return initialValue
        }
    })

    // runs every time the key or value changes, store the value in localstorage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue] as [typeof value, typeof setValue]
}