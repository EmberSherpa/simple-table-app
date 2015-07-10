export default function() {

  this.get('contestants', function() {
    return {
      data: [
        {
          id: 1,
          type: 'contestant',
          relationships: {
            singers: {
              data: [
                {type: "singer", id: "1"},
                {type: "singer", id: "2"},
                {type: "singer", id: "3"},
                {type: "singer", id: "4"}
              ]
            }
          }
        },
        {
          id: 2,
          type: 'contestant',
          relationships: {
            singers: {
              data: [
                {type: "singer", id: "5"},
                {type: "singer", id: "6"},
                {type: "singer", id: "7"},
                {type: "singer", id: "8"}
              ]
            }
          }
        },
        {
          id: 3,
          type: 'contestant',
          relationships: {
            singers: {
              data: [
                {type: "singer", id: "9"},
                {type: "singer", id: "10"},
                {type: "singer", id: "11"},
                {type: "singer", id: "12"}
              ]
            }
          }
        }
      ],
      included: [
        {'id': 1, type: 'singers', attributes: {'name': 'Tom', 'part': 'Tenor'}},
        {'id': 2, type: 'singers', attributes: {'name': 'Bob', 'part': 'Bass'}},
        {'id': 3, type: 'singers', attributes: {'name': 'Trevor', 'part': 'Baritone'}},
        {'id': 4, type: 'singers', attributes: {'name': 'Josh', 'part': 'Lead'}},
        {'id': 5, type: 'singers', attributes: {'name': 'Jerry', 'part': 'Tenor'}},
        {'id': 6, type: 'singers', attributes: {'name': 'Alice', 'part': 'Bass'}},
        {'id': 7, type: 'singers', attributes: {'name': 'Len', 'part': 'Baritone'}},
        {'id': 8, type: 'singers', attributes: {'name': 'Michele', 'part': 'Lead'}},
        {'id': 9, type: 'singers', attributes: {'name': 'Mike', 'part': 'Tenor'}},
        {'id': 10, type: 'singers', attributes: {'name': 'Taff', 'part': 'Bass'}},
        {'id': 11, type: 'singers', attributes: {'name': 'Tino', 'part': 'Baritone'}},
        {'id': 12, type: 'singers', attributes: {'name': 'Angie', 'part': 'Lead'}}
      ]
    }});


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
