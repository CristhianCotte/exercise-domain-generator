var pronoun = ['the','our'];
  var adj = ['great', 'big' ];
  var noun = ['jogger','racoon'];

// console.log( pronoun[Math.floor(Math.random() * pronoun.length )])
  for(let i= 0; i < pronoun.length  ; i++){
    //  console.log( pronoun[Math.floor(Math.random() * pronoun.length )])
    for(let j = 0; j < adj.length  ; j++){
        // console.log(adj[j])
        for(let q = 0 ; q < noun.length ; q++){
            console.log(pronoun[i] + adj[j] + noun[q] + ".com")

        }
    }
    
  }
  