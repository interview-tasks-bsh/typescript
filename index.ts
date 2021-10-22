import { Collection } from "./types/collection";

// transform the collection object to conform to the following type:

interface Data {
  id: number; // fields.uuid.id
  collection: string; // we only want to see el from the collection 'articles'
  fields: Fields;
}

type Fields = {
  technicalTitle: string | null; // value of fields.technical_title.options.placeholder
  status: string; // fields.status.default_value
  heroVideo: string | null; // fields.hero_video.default_value
};


// if there are less than 10 elements
// and/or
// if a value is null
// add an error object to the payload/answer
// including a meaningful message
//
// create your payload/answer type

// if there are any errors, log all of them
