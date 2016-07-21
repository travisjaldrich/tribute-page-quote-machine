var quote = "";

function quoteGenerate() {
	var num = Math.round((Math.random() * 10) + (Math.random() * 5));
	switch (num) {
		case 0:
			quote = '"Well, everyone knows Custer died at Little Bighorn. What this book presupposes is... maybe he didn\'t?"<br>- Eli Cash, <i>The Royal Tenenbaums</i>';
			break;
		case 1:
			quote = 'Royal: "You trying to steal my woman?"<br>Henry Sherman: "I beg your pardon."<br>Royal: "You heard me, Coltrane."<br>- <i>The Royal Tenenbaums</i>';
			break;
		case 2:
			quote = 'Kumar: "Who is that man?"<br>Dignan: "What do you mean?"<br>Kumar: "Who is that man?"<br>Dignan: "That\'s Applejack! Come on!"<br>- <i>Bottle Rocket</i>';
			break;
		case 3:
			quote = '"If what I think is happening <i>is</i> happening, it better not be."<br>- Felicity Fox, <i>Fantastic Mr. Fox</i>';
			break;
		case 4:
			quote = '"I’m gonna go pray at another thing."<br>- Peter Whitman, <i>The Darjeeling Limited</i>';
			break;
		case 5:
			quote = '"You know, maybe right before whenever you\'re about to take out your tooth, you should say something like, \'Please forgive this.\'"<br>- Peter Whitman, <i>The Darjeeling Limited</i>';
			break;
		case 6:
			quote = '"You\'ve got your whole life in front of yourself. Ahead of you, I mean."<br>- Captain Sharp, <i>Moonrise Kingdom</i>';
			break;
		case 7:
			quote = '"I\'ll be out back. I\'m gonna find a tree to chop down."<br>- Mr. Bishop, <i>Moonrise Kingdom</i>';
			break;
		case 8:
			quote = 'Suzy: "Was he a good dog?"<br>Sam: "Who\'s to say? But he didn\'t deserve to die."<br>- <i>Moonrise Kingdom</i>';
			break;
		case 9:
			quote = '"You see, there are still faint glimmers of civilization left in this barbaric slaughterhouse that was once known as humanity. Indeed that\'s what we provide in our own modest, humble, insignificant... oh, fuck it."<br>- Gustave H., <i>The Grand Budapest Hotel</i>';
			break;
		case 10:
			quote = 'Gustave: "I\'ve never seen her like that before."<br>Zero: "No, sir."<br>Gustave: "She was shaking like a shitting dog."<br>Zero: "...Truly."<br>- <i>The Grand Budapest Hotel</i>';
			break;
		case 11:
			quote = '"I saved Latin. What did you ever do?"<br>- Max Fischer, <i>Rushmore</i>';
			break;
		case 12:
			quote = '"Maybe I\'m spending too much of my time starting up clubs and putting on plays. I should probably be trying harder to score chicks."<br>- Max Fischer, <i>Rushmore</i>';
			break;
		case 13:
			quote = 'Steve: "Esteban was eaten! Check the scanning monitor! Start tracking before it dives too deep!"<br>Klaus: "Esteban was bitten?"<br>Steve: "Eaten!"<br>Klaus: "Is he dead?"<br>- <i>The Life Aquatic with Steve Zissou</i>';
			break;
		case 14:
			quote = 'Hennessey: "Is this my espresso machine? How did you get my espresso machine?"<br>Ubell (Bond Company Stooge): "Well, uh... we fuckin\' stole it, man."<br>- <i>The Life Aquatic with Steve Zissou</i>';
			break;
		case 15:
			quote = '"If you\'re not against me, don\'t cross this line. If yes, do."<br>- <i>The Life Aquatic with Steve Zissou</i>';
	}
	return quote;
}

function tweetQuote() {
	var plainQuote = quote.replace(/<br>/g, " ").replace(/<i>/g,"").replace(/<\/i>/g,"");
	return "http://twitter.com/home/?status=" + plainQuote;
}