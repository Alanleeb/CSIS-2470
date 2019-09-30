var Books = [
    {
        "Author": "Orson Scott Card",
        "Title": "Ender's Game",
        "Printed": true,
        "Publisher":"Some Publisher",
        "Price":12.00,
        "Forsale":true,
        
    },
    {
        "Author": "J.R.R. Tolkien",
        "Title": "The Lord Of The Rings",
        "Printed": true,
        "Publisher":"Some Publisher",
        "Price":15.75,
        "Forsale":false,
        "Awards": [
            "Pulizer",
            "Best Seller NY Times",
            "Best SciFi"
        ]
    },
    {
        "Author": "Douglas Adams",
        "Title": "The Hitchhiker's Guide to the Galaxy",
        "Printed": true,
        "Publisher":"Some Publisher",
        "Price":5.95,
        "Forsale":true,
        "Awards": [
            "Pulizer",
            "Best Seller NY Times",
            "Best SciFi"
        ]
    },
    {
        "Author": "Jules Verne",
        "Title": "20,000 Leagues Under the Sea",
        "Printed": true,
        "Publisher":"Some Publisher",
        "Price":12.00,
        "Forsale":false,
        
    },
    {
        "Author": "Samuel R. Delaney",
        "Title": "Dhalgren",
        "Printed": true,
        "Publisher":"Some Publisher",
        "Price":12.00,
        "Forsale":true,
        "Awards": [
            "Pulizer",
            "Best Seller NY Times",
            "Best SciFi"
        ]
    },
    {
        "Author": "HG Wells",
        "Title": "War of the Worlds",
        "Printed": true,
        "Publisher":"Some Publisher",
        "Price":12.00,
        "Forsale":false,
        "Awards": [
            "Pulizer",
            "Best Seller NY Times",
            "Best SciFi"
        ]
    },
    {
        "Author": "Isaac Asimov",
        "Title": "Foundation",
        "Printed": true,
        "Publisher":"Some Publisher",
        "Price":12.00,
        "Forsale":true,
        "Awards": [
            "Pulizer",
            "Best Seller NY Times",
            "Best SciFi"
        ]
    },
    {
        "Author": "Robert Heinlein",
        "Title": "Stranger in a Strange Land",
        "Printed": true,
        "Publisher":"Some Publisher",
        "Price":12.00,
        "Forsale":true,
        
    }
    
];
 


function renderHTML(data) {
    var bookString = "<h1>List of cool Books</h1>";
    let i = 0;

while(i < Books.length){
    bookString +=  Books[i].Title + ', ' + Books[i].Author;
    if (Books[i].Forsale == true)
         { bookString += ', Price: $' + Books[i].Price };
    
    if (Books[i].Awards instanceof Array) 
            {bookString += ', Awards: '; 

         var awardcount = Books[i].Awards.length;
         var k = 0;
         while (k < awardcount) 
            {bookString += Books[i].Awards[k] + ', ';k++} ;
        } else 
            { bookString += ''; };
    bookString += `<br /><br />`;
       i++; 
}

document.getElementById("root").innerHTML = bookString;

}

renderHTML(Books);