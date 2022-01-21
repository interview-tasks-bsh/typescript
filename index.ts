// - start the json-server
// - make a get request on http://localhost:3000
// - transform the collection object to conform to the type Payload  (see below)

type Payload = {
  data: Data[];
  // define me
};
interface Data {
  id: number;
  collection: string; // we only want to see el from the collection 'articles'
  fields: Fields;
}

type Fields = {
  technicalTitle: string | null; // value of fields.technical_title.value
  status: string; // fields.status.value
  heroVideo: string | null; // fields.heroVideo.value
};

type Errors = {
  // define me
};

// it gets the data from the api and transforms it to the following type: Payload
const collectionTransformer = () => {

};


export { collectionTransformer, Payload };

// if there are less than 10 elements
// and/or
// if a value is null
// add an error object to the payload/answer
// including a meaningful message
//
// create your payload/answer type

// if there are any errors, console.log all of them
