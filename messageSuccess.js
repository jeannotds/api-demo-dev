// const developpeur = require("./developpeur.json")

exports.success = (message, data) => {
    return {
        message, data
    }
}

exports.getUniqueId = (developpeurs) => {
    const devId = developpeurs.map(dev => dev.id)
    const maxId = devId.reduce((a, b) => Math.max(a, b))
    const uniqueId = maxId + 1
    return uniqueId
}