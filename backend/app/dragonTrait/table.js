const pool = require('../../databasePool');
const TraitTable = require('../trait/table');

class DragonTraitTable {
    static storeDragonTtrait({ dragonId, traitType, traitValue }) {
        return new Promise((resolve, reject) => {
            TraitTable.getTraitId({ traitType, traitValue })
            .then(({ traitId }) => {

            })
            pool.query(
                `INSERT INTO dragonTrait("traitId", "dragonId") VALUES($1, $2)`,
                [traitId, dragonId],
                (error, response) => {
                    if(error) return reject(error);
                    const dragonId = response.row[0].id;

                    Promise.all(dragon.traits.map(({ traitType, traitValue }) => {
                        return DragonTraitTable.storeDragonTrait({
                            dragonId, traitType, traitValue
                        });
                    }))
                    .then(() => resolve({ dragonId }))
                    .catch(error => reject(error));
                }
            )
        });
    }
}

module.exports = DragonTraitTable;