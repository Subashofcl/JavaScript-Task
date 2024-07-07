class Person{
      constructor(name,place,designation,email,description){
                this.name=name;
                this.place=place;
                this.designation =designation ;
                this.email=email;
      }
  }
  
  const details = new Person("Subash","Chennai","Junior Developer","sample@gmail.com");
  console.log("Hi Iam:"+" "+details.name);
  console.log("Iam From:"+" "+details.place);
  console.log("Current Role:"+" "+details.designation );
  console.log("Feel Free to Reach Out to Me: "+" "+details.email);