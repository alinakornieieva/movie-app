const useHttp = () => {
    const request = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            return data
        } catch (e) {
            throw e
        }
    }
    return {request}
}

export default useHttp