const { MessageEmbed } = require("discord.js")

module.exports = {
    SpellEmbed: (spell) => {
        const spellEmbed = new MessageEmbed()
            .setTitle(spell.nome.toUpperCase())
            .setDescription(spell.descricao)
            .addFields(
                { name: 'Tempo de conjuração', value: spell.tempo_conjuracao },
                { name: "Alcance", value: spell.alcance },
                { name: 'Componentes', value: spell.componentes },
                { name: 'Duração', value: spell.duracao },
            )
        return spellEmbed
    }
}