module.exports = {
    name: "san",
    execute(message) {
        if(message.member.roles.cache.some(role => role.name === 'TEACHER')){
        message.channel.send('<@&839028342899605504> Sanskrit Class Has Been Started. Kindly Join The <#840531707504623677>')
    }
}
}