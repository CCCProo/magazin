let guildname1 = document.querySelectorAll('[id*=\"guildname1"\]');
console.log(guildname1); //NodeList [a]  
for (let i = 0; i < guildname1.length; i++) {
    guildname1[i].innerHTML = '<a href="guild/guild.html">Гильдия</a>';
}

let membersguild1 = document.querySelectorAll('[id*=\"membersguild1"\]');
console.log(membersguild1); //NodeList [a]  
for (let i = 0; i < membersguild1.length; i++) {
    membersguild1[i].innerHTML = '1/10';
}

let imageguild1 = document.querySelectorAll('[src*=\"imageguild1"\]');
console.log(imageguild1); //NodeList [a]  
for (let i = 0; i < imageguild1.length; i++) {
    imageguild1[i].src = 'guild_silver.png';
}

let znackguild = document.querySelectorAll('[src*=\"znackguild"\]');
console.log(znackguild); //NodeList [a]  
for (let i = 0; i < znackguild.length; i++) {
    znackguild[i].src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Roblox_player_icon_black.svg/1200px-Roblox_player_icon_black.svg.png';
}