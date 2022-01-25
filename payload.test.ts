

test('payload contains errors when some values are null', async () => {
  const payload: Payload = await collectionTransformer();

  expect(payload.errors).toBeTruthy();
});

// test('if payload has errors, the error message also contains the id of the object in question', () => {
//   expect(payload.errors[0].id === 1).toBeTruthy();
// });

// test('if there are less than 10 items expect a relevant error message', () => {
//    // fix me
// });

