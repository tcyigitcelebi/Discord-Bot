const Discord = require('discord.js');
const client = new Discord.Client();
const webhook = new Discord.WebhookClient('', '');
                             //WEBHOOK   İD , TOKEN
client.on('ready', () => {
  console.log(`${client.user.tag} sunucuda çevrimiçi oldu`);
});


client.on('message', msg => {
  if (msg.content === 'sa') {
   webhook.send('Aleyküm Selam');
  }
  if (msg.content === 'merhaba') {
   webhook.send(':smiley: Merhaba');
  }
  if (msg.content === 'silahlar') {
   webhook.send('AWP');
  }
  if (msg.content === 'silahlar') {
   webhook.send('Kar98');
  }
  if (msg.content === 'silahlar') {
   webhook.send('M416');
  }
  if (msg.content === 'silahlar') {
   webhook.send('AK47');
  }
  if (msg.content === 'silahlar') {
   webhook.send('Desert Eagle');
  }
  if (msg.content === 'silahlar') {
   webhook.send('Uzi');
  }
  if (msg.content === 'AWP') {
   webhook.send('https://static.wixstatic.com/media/3f2125_8aa973b3286e421cafad7bb21d848e10~mv2.png/v1/fill/w_660,h_371,al_c,q_90/3f2125_8aa973b3286e421cafad7bb21d848e10~mv2.webp');
  }
  if (msg.content === 'Kar98') {
   webhook.send('https://purepng.com/public/uploads/large/purepng.com-classic-wooden-sniper-from-sidesniperscoperifflemetalcs-go-401520868813t6awc.png');
  }
  if (msg.content === 'M416') {
   webhook.send('https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/08/28/542204/209270/weapon_gun_m416_fbx_and_texture_and_ready_scene_for_marmoset_toolbag_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2206325_o.jpg');
  }
  if (msg.content === 'AK47') {
   webhook.send('https://upload.wikimedia.org/wikipedia/commons/f/f6/AK-47_assault_rifle.jpg');
  }
  if (msg.content === 'Desert Eagle') {
   webhook.send('https://www.shopmyexchange.com/products/images/xlarge/7238902_5604.jpg');
  }
  if (msg.content === 'Uzi') {
   webhook.send('https://www.pngitem.com/pimgs/m/131-1317406_uzi-png-uzi-micro-uzi-png-gta-transparent.png');
  }
  if (msg.content === 'şarkı öner') {
   webhook.send(':white_check_mark: Bunlar hoşuna gidebilir');
  }
  if (msg.content === 'şarkı öner') {
   webhook.send('Astronomia');
  }
  if (msg.content === 'şarkı öner') {
   webhook.send('Roxanne');
  }
  if (msg.content === 'şarkı öner') {
   webhook.send('Space Jump');
  }
  if (msg.content === 'Roxanne') {
   webhook.send('https://www.youtube.com/watch?v=0-YlrjvEqoM');
  }
  if (msg.content === 'Space Jump') {
   webhook.send('https://www.youtube.com/watch?v=pDHzCJN4UJ8');
  }
  if (msg.content === 'komutlar') {
   webhook.send(':gem: silahlar');
  }
  if (msg.content === 'komutlar') {
   webhook.send(':gem: şarkı öner');
  }
  if (msg.content === 'kedi') {
   webhook.send(':smiley_cat: https://tenor.com/view/puss-in-boots-cat-cute-gif-4845429');
  }
  if (msg.content === 'köpek') {
   webhook.send(':dog: https://media.tenor.com/images/f230eefa3920fec7599047f8817b0a1b/tenor.gif');
  }
  if (msg.content === 'komutlar') {
   webhook.send(':gem: kedi');
  }
  if (msg.content === 'komutlar') {
   webhook.send(':gem: köpek');
  }
  if (msg.content === 'komutlar') {
   webhook.send(':gem: gülümse');
  }
  if (msg.content === 'gülümse') {
   webhook.send('https://media.tenor.com/images/aa0b607e7fb740b74673963f8c6e9c61/tenor.gif');
  }
});       //BOTUN
          //TOKENİ
client.login('')
