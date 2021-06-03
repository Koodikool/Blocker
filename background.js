const fetchGET = async function (uri) {
    const request = await fetch(uri)
    const text = await request.text()
    let json
    try {
        json = JSON.parse(text)
    } catch (e) { /* ignore */ }
    return json || text
}

const fetchPOST = async function (uri, content) {
    const request = await fetch(uri, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(content)
    })
    const text = await request.text()
    let json
    try {
        json = JSON.parse(text)
    } catch (e) { /* ignore */ }
    return json || text
}

async function populate() {
    const messages = await fetchGET("https://app.koodikool.ee/sdb/blockers")
    if (!messages.length) {
        fetchPOST("https://app.koodikool.ee/sdb/blockers", { type: 'player', x: 50, y: 50, name: "Krister" })
        fetchPOST("https://app.koodikool.ee/sdb/blockers", { type: 'block', x: 80, y: 20 })
        fetchPOST("https://app.koodikool.ee/sdb/blockers", { type: 'block', x: 60, y: 25 })
    }

}
populate()
