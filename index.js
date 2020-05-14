const Discord = require('discord.js');
const { prefix, Token} = require('./config.json');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');


client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('Seva', {type: 'PLAYING'}).catch(console.error);
})
client.on('message', message => {


    if (message.content === '!s amrit') {


        const embed = new MessageEmbed()
        .setTitle('Amrit')
        .setColor(0xff0000)
        .setDescription('Amrit means nectar, it consists of water and sugar. It is stirred with a double edged sword (Khanda) well prayers are said during the Khanda-Ki-Pahul')
        .setThumbnail('https://www.sikhiwiki.org/images/3/3e/AmritSanskar-AW.jpg')
        message.channel.send(embed);
    
    
}
});

client.on('message', message => {


    if (message.content === '!s kirpan') {


        const embed = new MessageEmbed()
        .setTitle('Kirpan')
        .setColor(0xff0000)
        .setDescription('The Kirpan is any sword or dagger of any size and shape, it is one of the Five Ks, of the Khalsa Sikhs. The word kirpan has the meaning of weapon of defence, as apposed to talwar a weapon of offense')
        .setThumbnail('https://www.mrsikhnet.com/wp-content/uploads/2010/03/khalsakirpan.jpg')
        message.channel.send(embed);
    
    
}
});

client.login(Token);