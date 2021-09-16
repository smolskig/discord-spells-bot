const { getSpellByName } = require("../Services/getSpellByName")
const { SpellEmbed } = require('../template')

const commandController = async (msg) => {
    const command = "/spell"
    const isValidCommand = msg.content.split(' ')[0] == command
    const message = msg.content.replace(`${command} `, "").replace(" ", "-")

    if (isValidCommand) {
        const [spell, error] = await getSpellByName(message)

        if (spell) {
            msg.channel.send("", { embed: SpellEmbed(spell) })
        } else {
            msg.channel.send("Ocorreu um erro ao procurar sua magia")
        }
    }
}

module.exports = commandController