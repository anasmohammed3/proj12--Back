

const fs = require("fs")
const functions = require("./functions")
const yargs = require("yargs")


//add

yargs.command ({
    command : "add",
    describe : "add item",
    builder: {
      firstName : {
         describe: "this is the first name",
         demandOption: true,
         type : "string"
      },
      lastName : {
        describe: "this is the last name",
        demandOption: true,
        type : "string"
     }
    },
    handler:(x)=> {
      functions.addRecord(x.id , x.firstName , x.lastName , x.city , x.age)
    }
})










//delete

yargs.command({
  command : "delete",
  describe : "delete item",
  handler:(x)=> {
    functions.deleteRecord(x.id)
  }

})











// read

yargs.command({
    command: "read",
    describe : "read data",
    builder : {
       id : {
         describe : "this is the id",
         demandOption : true,
         type : "string"
       }
    },
    handler: (x)=> {
      functions.readRecord(x.id)
    }
})















//list

  yargs.command ({
    command : "list",
    describe : "list data" ,
    handler : () => {
      functions.listRecords()
    }
  })


yargs.parse()


  








 