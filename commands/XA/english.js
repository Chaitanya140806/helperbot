module.exports = {
    name:'eng1',
    execute(message){
        if(message.member.roles.cache.some(role => role.name === 'TEACHER')){
            message.channel.send('<@&830468667749564416> English Class Has Been Started. Kindly Join The <#835372186515669003>') 
}}
};