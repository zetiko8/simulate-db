const Model = require('validationmodel')

/**
 * Creates a new db
 * @class
 * @param {Model} model Model of data for the db
 * @param {Array} data Start data for the db
 */
class Db {
    constructor(model, data) {

        // creates model
        try {
            this.model =  new Model(model)   
        } catch (error) {
            throw error
        }
        
        // creates data
        this.data = []
        for(let d of data){
            this.create(d, (err) => {
                if(err) throw err
            })
        }

    }

    /**
     * Writes a new record into Db
     * @method
     * @param {Object} data 
     * @param {Function} done 
     */
    create (data, done) {
        try {
            this.data.push(this.model.parse(data))
            done()   
        } catch (error) {
            done(error)
        }
    }

    findOne (key) {
        
    }
}

module.exports = Db