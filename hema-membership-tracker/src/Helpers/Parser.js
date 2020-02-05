const fs = require('fs')
const papa = require('papaparse')
const file = fs.createReadStream('memberships_2020-02-05_16_55_18.csv')

var count = 0

papa.parse(file, {
    worker: true,
    step: function(result) {

    },
    complete: function(results, file) {
        console.log('Parsing complete, there are ', count, ' entries.')
    }
})