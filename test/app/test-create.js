const expect = require('chai').expect
function done() {}

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

describe("Create new data", function(){
    it("Should write new data into Db", function(){
        User.create({
            username: 'brandon',
            password: 'stark'
        }, (err) => {
            if(err) {
               expect.fail('Error when addin a record into db')  
               done()
            } 
            else {
                User.findOne('brandon', (err, user) => {
                    if(err) {
                        expect.fail('Error: record not inserted properly')
                        done()
                    } else {
                        expect(user.password).to.eql('stark')
                        done()
                    }
                })
                done()
            }
        })
    })
    it("Should return an error with invalid data", function(){
        User.create({
            username: 1,
            password: 'stark'
        }, (err) => {
            if(err) {
               done()
            } 
            else {
                expect.fail('Error: has not caugth invalid data')  
                done()
            }
        })
    })
})