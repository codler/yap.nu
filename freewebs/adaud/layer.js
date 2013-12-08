function mylayer2(alt,vad) {
if (document.all[vad].style.visibility == 'visible'){ document.all[vad].style.visibility = 'hidden'; }
else {
	if (alt == true ) document.all[vad].style.visibility = 'visible'; }
	if (alt == false ) document.all[vad].style.visibility = 'hidden';
}