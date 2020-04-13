const fs = require('fs')
const papa = require('papaparse')
// const file = fs.createReadStream('memberships_2020-02-05_16_55_18.csv')

function parseData(data, target) {
    papa.parse(data, {
        header: true,
        worker: true,
        delimiter: "",
        complete: function(result) {
            for (var index = 0; index < result.length; index++) {
                if (result.email == target) {
                    return true;
                }
            }
            return false;
        }
    });
}

export default { parseData };