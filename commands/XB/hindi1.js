module.exports = {
    name: "hin2",
    execute(message) {
        if(message.member.roles.cache.some(role => role.name === 'TEACHER')){
        message.channel.send('<@&830680977226727435> Hindi Class Has Been Started. Kindly Join The <#836172021930524682>')
    }}
}