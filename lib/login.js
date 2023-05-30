export const getdata = async () => {
    const url = 'http://localhost:3000/admins/api'
    const results = await fetch(url)
    const data = await results.json()
    return data

}
