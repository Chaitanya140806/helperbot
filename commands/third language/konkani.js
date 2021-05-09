module.exports = {
    name: "kon",
    execute(message) {
        if(message.member.roles.cache.some(role => role.name === 'TEACHER')){
            message.channel.send('<@&839028940965281812> Konkani Class Has Been Started. Kindly Join The <#840532419798499338>')
        }else (message.reply ('Please Behave Like A Student'));
    }
}