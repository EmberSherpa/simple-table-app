export default function() {

  this.get('/singers', function() {
    return {
      "singer": [
        {'id': 1, 'name': 'Tom', 'part': 'Tenor'},
        {'id': 2, 'name': 'Bob', 'part': 'Bass'},
        {'id': 3, 'name': 'Trevor', 'part': 'Baritone'},
        {'id': 4, 'name': 'Josh', 'part': 'Lead'},
        {'id': 5, 'name': 'Jerry', 'part': 'Tenor'},
        {'id': 6, 'name': 'Alice', 'part': 'Bass'},
        {'id': 7, 'name': 'Len', 'part': 'Baritone'},
        {'id': 8, 'name': 'Michele', 'part': 'Lead'},
        {'id': 9, 'name': 'Mike', 'part': 'Tenor'},
        {'id': 10, 'name': 'Taff', 'part': 'Bass'},
        {'id': 11, 'name': 'Tino', 'part': 'Baritone'},
        {'id': 12, 'name': 'Angie', 'part': 'Lead'}
      ]};
    });

    this.get('/singers/:id', function(db, request) {
      var id = request.params.id;
      return db.singers.find(id);
    });

    this.get('contestants', function() {
      return {
        "contestant": [
          {'id': 1, "singers": ["1", "2", "3", "4"]},
          {'id': 2, "singers": ["5", "6", "7", "8"]}
        ]};
      });


      // These comments are here to help you get started. Feel free to delete them.

      /*
      Config (with defaults).

      Note: these only affect routes defined *after* them!
      */
      // this.namespace = '';    // make this `api`, for example, if your API is namespaced
      // this.timing = 400;      // delay for each request, automatically set to 0 during testing

      /*
      Route shorthand cheatsheet
      */
      /*
      GET shorthands

      // Collections
      this.get('/contacts');
      this.get('/contacts', 'users');
      this.get('/contacts', ['contacts', 'addresses']);

      // Single objects
      this.get('/contacts/:id');
      this.get('/contacts/:id', 'user');
      this.get('/contacts/:id', ['contact', 'addresses']);
      */

      /*
      POST shorthands

      this.post('/contacts');
      this.post('/contacts', 'user'); // specify the type of resource to be created
      */

      /*
      PUT shorthands

      this.put('/contacts/:id');
      this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
      */

      /*
      DELETE shorthands

      this.del('/contacts/:id');
      this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

      // Single object + related resources. Make sure parent resource is first.
      this.del('/contacts/:id', ['contact', 'addresses']);
      */

      /*
      Function fallback. Manipulate data in the db via

      - db.{collection} // returns all the data defined in /app/mirage/fixtures/{collection}.js
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

      // Example: return a single object with related models
      this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;
      var contact = db.contacts.find(contactId);
      var addresses = db.addresses
      .filterBy('contact_id', contactId);

      return {
      contact: contact,
      addresses: addresses
    };
  });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
