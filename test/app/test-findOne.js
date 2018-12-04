
const expect = require('chai').expect
function done() { }

var Db = require('../../src/app')
var User = new Db(
    {
        username: { type: 'String', required: true },
        password: { type: 'String', required: true },
    },
    [
        {
            username: 'anze',
            password: 'kolsek'
        },
        {
            username: 'ziga',
            password: 'sega',
        },
        {
            username: 'biba',
            password: 'cop'
        }
    ]
)

describe("Retrieve data", function () {
    it("Should retrieve data from db", function () {
        User.findOne('brandon', (err, user) => {
            if (err) {
                expect.fail('Error: record not inserted properly')
                done()
            } else {
                expect(user.password).to.eql('stark')
                done()
            }
        })
        done()
    })
})