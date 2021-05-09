module.exports = {
    name: "mar",
    execute(message) {
        if(message.member.roles.cache.some(role => role.name === 'TEACHER')){
        message.channel.send('<@&839029124122673153> Marathi Class Has Been Started. Kindly Join The <#840532505941639168>')
    }}
}