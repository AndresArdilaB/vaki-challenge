
exports.cartConfirmBuy = async (admin, { vaki_id, rewards }) => {
  const db = admin.firestore()
  const collectionRef = db.collection('rewards')
  const query = collectionRef
    .where('vaki_id', '==', vaki_id)

  const batch = db.batch()
  const update = []
  const noUpdate = []

  //This query is to validate are still available rewards
  await query.get()
    .then((snapshot) => {

      snapshot.forEach(r => {
        let reward = r.data()
        let reguardBuyed = rewards.find(f => f.reward_id === reward.key)

        if (reguardBuyed) {
          let totalClaimed = reward.claimed + reguardBuyed.quantity
          let available = reward.quantityAvailable
          let result = available - totalClaimed

          if (result < 0) {
            reguardBuyed.result = result * -1
            noUpdate.push(reguardBuyed)
          } else {
            let updateRef = collectionRef.doc(reguardBuyed.reward_id)
            update.push(reguardBuyed)
            batch.update(updateRef, {
              claimed: totalClaimed
            })
          }
        }
      })
      return null
    })
    .catch(error => console.error('Disponibility query: ', error))

  if (update.length > 0) {
    //Update rewards
    await batch.commit()

    //Here we can create or update a document whit the buyer data
  }

  return { update, noUpdate }
}