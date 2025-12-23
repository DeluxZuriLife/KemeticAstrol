//Make an Object
let horoscope = {
    hapiNile: "You came first and lead the way!",
    amunRa: "idea a",
    Mut: "another idea",
    Geb:"some more thoughts", 
    Osiris:" something goes here",
    Isis:" have you heard about",
    Thoth:"that one guy did that one thing",
    Horus: "coool stuff really cool stuff", 
    Anubis:"like in that show with the knight that you didnt watch", 
    Seth:"but the mentor watched",
    Bastet:"ohhhhh like in black panther",
    Sekhmet: "they messed up the story in nocturna", 
} 

//Make A function to determine Zodaic Sign based on birthday
function zodiacDetermined(month, day){
    //The following are logical operators for conditional statements that say, the month is equal to a certain number then  an operand that says the range for that day and the end of the cycle which is represented by a less than or equal to symbol.  
    if ((month == 1 && day >= 1) || (month == 1 && day <= 7))return "hapiNile"; 
    if ((month == 1 && day >= 1) || (month == 1 && day <= 7))return "hapiNile";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "amunRa";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Mut";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Geb";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Osiris";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Auset";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Thoth";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Asar";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Anubis";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Set";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Bastet";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Sekhmet";

//Function to get horoscope
