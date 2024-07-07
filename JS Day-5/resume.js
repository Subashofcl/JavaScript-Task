let resume  = {
      Personal :{
          name :"Subash B",
          number:"987654321",
          email:"bsubashofcl@gmail.com",
          place:"Chennai"
      },
      AcademicQualification:{
        Graduate:{
            educations : "B.sc",
            university: "Alagappa University ",
            percentage : 79.2,
            year:2022

        },
        HSC:{
            board : "Poncos Higher Secondary School ",
            percentage : 65,
            year:2019
        }
    },
      skill:{
         skillSet: ["HTML","CSS","Javascript","JAVA"]
      },
  }
  console.log(resume);
  
  //for loop
  console.log()
  console.log("FOR LOOP")
  let keys = Object.keys(resume);
  for(let i=0;i<keys.length;i++){
      console.log(`${keys[i]}: ${resume[keys[i]]}`);
  }
  
  // for in loop
  console.log()
  console.log("FOR IN LOOP");
  for(let key in resume){
      console.log(resume[key]);
  }
  
  // for of loop
  console.log()
  console.log("FOR OF LOOP")
  for(let key of keys){
      console.log(`${key}: ${resume[key]}`);
  }
  
  // forEach loop
  console.log()
  console.log("FOREACH LOOP")
  keys.forEach(x => console.log(`${x}: ${resume[x]}`));
  