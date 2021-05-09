module.exports = {
    name:'geo1',
    execute(message){
        if(message.member.roles.cache.some(role => role.name === 'TEACHER')){
            message.channel.send('<@&830468667749564416> Geography Class Has Been Started. Kindly Join The <#835372186515669003>') 
}}
}