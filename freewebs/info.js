function bar()
{
// Made by Han Lin Yap
// Copyright Codler
var head1
var head2
var head3
var text1
var b1
var head30301 = "<span id='head330301'> </span>"
var head30702 = "<span id='head330702'> </span>"
var head30703 = "<span id='head330703'> </span>"
var head30708 = "<span id='head330708'> </span>"
b1 = location.search.indexOf("h=");

if (b1 >0 )
{
head1 = location.search.substring(b1+2,5);
head2 = location.search.substring(b1+5,8);
head3 = location.search.substring(b1+8,11);
text1 = location.search.substring(b1+11,14);
head1 = unescape(head1);
head2 = unescape(head2);
head3 = unescape(head3);
text1 = unescape(text1);
}

// HEAD 1 ////////////////////////////////////////////////////////
document.getElementById("head11").innerHTML="<div id='headcss'><a href='?h=01&01&00&01'>Home</a> | <a href='?h=01&02&00&01'>AboutMe</a> | <a href='?h=01&03&00&01'>MyWorks</a> | <a href='?h=01&04&00&01'>ContactMe</a> | <a href='?h=01&05&00&01'>GuestBook</a> | <a href='?h=01&06&00&01'>Forum</a> | <a href='?h=01&07&00&00'>Games</a></div>";

if (head1 == 01) {
document.getElementById("head11").innerHTML="<div id='headcss'><a href='?h=01&01&00&01'>Home</a> | <a href='?h=01&02&00&01'>AboutMe</a> | <a href='?h=01&03&00&01'>MyWorks</a> | <a href='?h=01&04&00&01'>ContactMe</a> | <a href='?h=01&05&00&01'>GuestBook</a> | <a href='?h=01&06&00&01'>Forum</a> | <a href='?h=01&07&00&00'>Games</a></div>";
}

// HEAD 2 ////////////////////////////////////////////////////////
document.getElementById("head22").innerHTML="<a href='?h=01&01&00&01'>News</a>";

// Home
if (head2 == 01 && head1 == 01) {
document.getElementById("head22").innerHTML="<a href='?h=01&01&00&01'>News</a>";
}

// AboutMe
if (head2 == 02 && head1 == 01) {
document.getElementById("head22").innerHTML="<a href=''>HanLinYap</a>";
}

// MyWorks
if (head2 == 03 && head1 == 01) {
document.getElementById("head22").innerHTML="<a href='?h=01&03&01&01'>Arts</a><ol><li>"+ head30301 +"</li></ol></li><li><a href='?h=01&03&00&02'>Animations</a></li><li><a href='?h=01&03&00&03'>Clips</a></li><li><a href='?h=01&03&00&04'>Webdesigns</a>";
}

// ContactMe
if (head2 == 04 && head1 == 01) {
document.getElementById("head22").innerHTML="<a href='?h=01&04&00&01'>Codler</a>";
}

// GuestBook
if (head2 == 05 && head1 == 01) {
document.getElementById("head22").innerHTML="<a href='?h=01&05&00&01'>Sign in</a>";
}

// Forum
if (head2 == 06 && head1 == 01) {
document.getElementById("head22").innerHTML="<a href='?h=01&06&00&01'>Forum</a>";
}

// Games
if (head2 == 07 && head1 == 01) {
document.getElementById("head22").innerHTML="<a href='?h=01&07&00&01'>Age of Empires</a></li><li><a href='?h=01&07&02&00'>Counter Strike</a><ol><li>"+ head30702 +"</li></ol></li><li><a href='?h=01&07&03&01'>Dark Throne</a><ol><li>"+ head30703 +"</li></ol></li><li><a href='?h=01&07&00&04'>Maple Story</a></li><li><a href='?h=01&07&00&05'>Guild Wars</a></li><li><a href='?h=01&07&00&06'>ROSE Online</a></li><li><a href='?h=01&07&00&07'>Runescape</a></li><li><a href='?h=01&07&08&01'>Tibia</a><ol><li>"+ head30708 +"</li></ol></li><li><a href='?h=01&07&00&09'>Utopia</a>";
}

// HEAD 3 ////////////////////////////////////////////////////////

// MyWorks-Arts
if (head3 == 01 && head2 == 03 && head1 == 01) {
document.getElementById("head330301").innerHTML="<div id='headcss3'><a href='?h=01&03&01&01'>Page1</a></div>";
}

// Games-Counter Strike
if (head3 == 02 && head2 == 07 && head1 == 01) {
document.getElementById("head330702").innerHTML="<div id='headcss3'><a href='?h=01&07&02&01'>Clan</a></li><li><a href='?h=01&07&02&02'>CS Server</a></li><li><a href='?h=01&07&02&03'>Ventrilo</a></li><li><a href='?h=01&07&02&04'>Other</a></div>";
}

// Games-Dark Throne
if (head3 == 03 && head2 == 07 && head1 == 01) {
document.getElementById("head330703").innerHTML="<div id='headcss3'><a href='?h=01&07&03&01'>Tools</a></li><li><a href='?h=01&07&03&02'>Other</a></div>";
}

// Games-Tibia
if (head3 == 08 && head2 == 07 && head1 == 01) {
document.getElementById("head330708").innerHTML="<div id='headcss3'><a href='?h=01&07&08&01'>Tibia</a></li><li><a href='?h=01&07&08&02'>Tibia DM</a></div>";
}

// TEXT 1 ////////////////////////////////////////////////////////
document.getElementById("text11").innerHTML="<h2>News</h2><p>Site Updated 1 July</p>";

// Home-News
if (text1 == 01 && head2 == 01 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>News</h2><p>2006-07-01<br>Once again Site Updated<br><br>2006-05-31<br>Beta site ended and The Final Site completed and opened!</p>";
}

// AboutMe-Page1
if (text1 == 01 && head2 == 02 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Han Lin Yap</h2><p>Im 16years old and live in sweden.</p><p>I like computers</p><p>I like to play games(genre: MMORPG, RTS, FPS[only cs])</p><p>and design(My design skills: Html[best at], Javascript[less better], Flash[less better - no actionscript], Php/mysql[can nothing, but im improving - in a slow time :P] -- ETC. SSI and &quot;Dreamweaver MX, Photoshop 7, Flash 5&quot;(enought how to work)</p><p>My email/msn: </p><h2><a href='?h=01&02&00&02'>Page2</a></h2>";
}

// AboutMe-Page2
if (text1 == 02 && head2 == 02 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Han Lin Yap</h2><p><a href=http://profile.xfire.com/darkluna><img src=http://miniprofile.xfire.com/bg/sf/type/0/darkluna.png width=440 height=111></a></p><p>Games i have played(This is not all):</p><p>Runescape-------2002.01.-2004.12. <br>Tibia--------------2003.08.-2004.10.<br>DarkThrone------2004.08.-2005.12. <br>Utopia------------2004.10.-2005.06. <br>NewAge-----------2004.11.-2004.11. <br>CarnageBlender-2004.12.-2005.03. <br>MapleStory-------2005.01.-________ <br>RoseOnline------2005.02.-2005.04. <br>Artifact-----------2005.02.-2005.03. <br>Torncity----------2005.03.-2005.10. <br>Battalion---------2005.03.-2005.05. <br>Knight Online----2005.07.-2005.11.<br>Counter-Strike--2005.04.-________<br>Guild Wars------2005.09.-2006.01.<br>Age of Empires III-2006.01.-2006.02.</p><h2><a href='?h=01&02&00&01'>Back</a></h2>";
}

// MyWorks
if (text1 == 01 && head2 == 03 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>My Works</h2>";
}

// MyWorks-Art-Page1
if (text1 == 01 && head3 == 01 && head2 == 03 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Arts</h2><p>Fixing it..</p>";
}

// MyWorks-Animations
if (text1 == 02 && head2 == 03 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Animations</h2><p>Comeing soon..</p>";
}

// MyWorks-Clips
if (text1 == 03 && head2 == 03 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Clips</h2><p><a href='http://www.putfile.com/media.php?n=drugmoney'>Drugmoney</a>22 Maj 2005<br><a href='http://www.putfile.com/media.php?n=drugmoney_missar'>Drugmoney Missar</a>22 Maj 2005</p>";
}

// MyWorks-Webdesigns
if (text1 == 04 && head2 == 03 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Webdesigns</h2><p><a href='adaud/first.htm'>Adaud Skateboards</a></p><p><a href='http://www.freewebs.com/codler/other/st.htm'>DarkThrone Recruiter</a>(v 0.9)</p><p><a href='yao/first.htm'>Yao</a></p><p><a href='onesoul.JPG'>OneSoul</a>*</p><p><a href='svenskasoldater.JPG'>Svenska Soldater</a>*</p><br><p>*Sadly, freewebs only accept 100files, so inorder for me to show my other arts I find this solution, to show the webdesigns as a singel picture.</p>";
}

// ContactMe
if (text1 == 01 && head2 == 04 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Contact Me</h2><p>Msn/Email: <br>Xfire: Darkluna<br>Ventrilo(2.1): codler.zapto.org<br>My CSServer: <a href='steam://connect/codler.zapto.org:27016'>codler.zapto.org:27016</a></p>";
}

// GuestBook
if (text1 == 01 && head2 == 05 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Guestbook</h2><p>In progress..</p>";
}

// Forum
if (text1 == 01 && head2 == 06 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Forum</h2><p>Comeing Soon..</p>";
}

// Games
if (text1 == 00 && head2 == 07 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Games</h2><p>Working on it..</p>";
}

// Games-AgeofEmpires
if (text1 == 01 && head2 == 07 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Age of Empires</h2>";
}

// Games-CounterStrike
if (text1 == 00 && head3 == 02 && head2 == 07 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Counter Strike</h2><a href='?h=01&07&02&01'>Clan</a><br><a href='?h=01&07&02&02'>CSServer</a><br><a href='?h=01&07&02&03'>Ventrilo</a><br><a href='?h=01&07&02&04'>Other</a>";
}

// Games-CounterStrike-Clan
if (text1 == 01 && head3 == 02 && head2 == 07 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Clan</h2><p>I am current not in a clan..</p>";
}

// Games-CounterStrike-CSServer
if (text1 == 02 && head3 == 02 && head2 == 07 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>CSServer</h2><p>This is my cs server:<a href='steam://connect/codler.zapto.org:27016'>codler.zapto.org:27016</a><br>Becomeing admin: Im looking for good admins into my server, and the requierments are: Activity, trustful, (social), nice, some skills, merits(and reference) is a plus.<br>Report abuse admin: It have happend, I know.., so if you see one <a href='?h=01&04&00&01'>contact me</a>(the headadmin) and Ill check. Be so specific as possible, It will help me alot, thanks!</p>";
}

// Games-CounterStrike-Ventrilo
if (text1 == 03 && head3 == 02 && head2 == 07 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Ventrilo</h2><p>This is the ip to my ventrilo(2.1) server: codler.zapto.org  Port: 3784</p>";
}

// Games-CounterStrike-Other
if (text1 == 04 && head3 == 02 && head2 == 07 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Other</h2><p></p>";
}

// Games-DarkThrone-Tools
if (text1 == 01 && head3 == 03 && head2 == 07 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Tools</h2><p><a href='http://www.freewebs.com/codler/other/st.htm'>DarkThrone Recruiter</a>(v 0.9)<br>It is online but no more updating..</p>";
}

// Games-DarkThrone-Other
if (text1 == 02 && head3 == 03 && head2 == 07 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Other</h2><p>Started the day before beta start and alfa ending^^</p>";
}

// Games-Maplestory
if (text1 == 04 && head3 == 00 && head2 == 07 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Maplestory</h2><p>I plas as:<br><br>Server: Bera<br>IGN: Codler<br>Class: Cleric<br>Level: 55</p>";
}

// Games-GuildWars
if (text1 == 05 && head2 == 07 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Guild Wars</h2><p>I have completed most of the things in guild wars, so I got a level 20 character :P</p>";
}

// Games-ROSEOnline
if (text1 == 06 && head2 == 07 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>ROSE Online(Rush On Seven Episodes)</h2><p>This game would maybe have been the best game I ever played. But after playing only for a week a big update came, the 2nd planet came, I was happy but was sad too becouse they reset all accounts, and thats not all, I became even more say after hearing about it was no longer free, you now had to pay =(</p>";
}

// Games-Runescape
if (text1 == 07 && head2 == 07 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Runescape</h2><p>My first MMORPG game played. I started to play 2002.01-2004.12, so 3 long years and I am 100% f2p ^^. I am very exped.<br>IGN: I_vs_king<br>Skill total: +900<br>Combat level: 81<br>Highest Skill: Mining(+70)<br>Lowest Skill: Prayer(+40)</p>";
}

// Games-Tibia-Tibia
if (text1 == 01 && head3 == 08 && head2 == 07 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Tibia</h2><p>Bad GAME!!! I NEVER GOT OVER LEVEL 20 BECOUSE OF THERE ARE TOO MANY PKs AND WHEN YOU DIE YOU CAN DEGREES YOUR LEVEL TO 0!!!</p>";
}

// Games-Tibia-TibiaDM
if (text1 == 02 && head3 == 08 && head2 == 07 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>TibiaDM(Death Match)</h2><p>I have only one thing to say: Much better the original Tibia but try Tibia first. Or other games :P</p>";
}

// Games-Utopia
if (text1 == 09 && head3 == 00 && head2 == 07 && head1 == 01) {
document.getElementById("text11").innerHTML="<h2>Utopia</h2><p>A Web-Based Games, I like RTS and this is like one and I like Utopia, you are in a Kingdom with 24 other Real Player that you got to teamwork with to get a good Kingdom or you will be crushed becouse outside of the Kingdom there are other Kingdoms with Real Players too that can attack you.<br>The bad thing with utopia if it is going great in your Part of Kingdom it will be erased someday becouse Utopia got so called AGES.</p>";
}
}