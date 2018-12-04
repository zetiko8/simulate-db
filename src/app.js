const Model = require('validationmodel')

/**
 * Creates a new db
 * @class
 * @param {Model} model Model of data for the db
 * @param {String} primaryKey PrimaryKey by wich you find data
 * @param {Array} data Start data for the db
 */
class Db {
    constructor(model, primaryKey, data) {

        // creates model
        try {
            this.model =  new Model(model)   
        } catch (error) {
            throw error
        }
        
        // sets primary key
        this.primaryKey = primaryKey

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
        } catch (error) {
            done(error)
            return
        }
        done() 
    }

    findOne (key, done) {
        for(let d of this.data){
            if(d[this.primaryKey] === key) {
                done(null, d)
                return
            } 
        }
        done('Record not found')
    }
}

module.exports = Db