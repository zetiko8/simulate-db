const expect = require('chai').expect

var Db = require('../../src/app')

describe("Db creation", function () {
    it("Should create new Db", function () {
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

        expect(User instanceof Object)
    })
    it("Should set primary key", function () {
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

        expect(User instanceof Object)
    })
    it("Should throw error on ivalid model new Db", function () {
        expect(
            () => new Db(
                {
                    username: { required: true },
                    password: { type: 'String', required: true },
                },
                [
                    {
                        username: 'anze',
                        password: 'kolsek'
                    },
                ]
            )
        ).to.throw()
    })
    it("Should throw error on ivalid data based on model", function () {
        expect(
            () => new Db(
                {
                    username: { type: 'String', required: true },
                    password: { type: 'String', required: true },
                },
                [
                    {
                        username: 'anze',
                        password: 3
                    },
                ]
            )
        ).to.throw()
    })
})