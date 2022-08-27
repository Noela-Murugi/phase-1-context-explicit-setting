const asgardianBrothers = [
    {
      firstName: "Thor",
      familyName: "Odinsson"
    },
    {
      firstName: "Loki",
      familyName: "Laufeysson-Odinsson"
    }
  ]

  function intro(person, line) {
    return `${person.firstName} ${person.familyName} says: ${line}`
  }

  const phrase = "I like this brown drink very much, bring me another!"
  intro(asgardianBrothers[0], phrase)


  intro(asgardianBrothers[0], phrase) === introWithContext.call(asgardianBrothers[0], phrase) //=> true
  intro(asgardianBrothers[0], phrase) === introWithContext.apply(asgardianBrothers[0], [phrase]) //=> true

  const complaint = "I was falling for thirty minutes!"
  intro(asgardianBrothers[1], complaint) === introWithContext.call(asgardianBrothers[1], complaint) //=> true
  intro(asgardianBrothers[1], complaint) === introWithContext.apply(asgardianBrothers[1], [complaint])

//   const asgardianBrothers = [
//     {
//       firstName: "Thor",
//       familyName: "Odinsson"
//     },
//     {
//       firstName: "Loki",
//       familyName: "Laufeysson-Odinsson"
//     }
//   ]
//   function introWithContext(line){
//     return `${this.firstName} ${this.familyName} says: ${line}`
//   }

//   const thorIntro = introWithContext.bind(asgardianBrothers[0])
//   thorIntro("Hi, Jane") //=> Thor Odinsson says: Hi, Jane
//   thorIntro("I love snakes")
