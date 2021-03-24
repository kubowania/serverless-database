const { createClient } = require("@astrajs/collections")

exports.handler = async function(event, context) {
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    })

    const messagesCollection = astraClient.namespace(process.env.ASTRA_DB_KEYSPACE).collection("messages")
    
      try {
        const result = await messagesCollection.find()
        return {
          statusCode: 200,
          body: JSON.stringify(result),
        }
      } catch (e) {
        console.error(e)
        return {
          statusCode: 500,
          body: JSON.stringify(e),
        }
    }
}