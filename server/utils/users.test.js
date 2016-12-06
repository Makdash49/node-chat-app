const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    var users = new Users()
    var user = {
      id: '123',
      name: 'Mark',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var resUser = users.removeUser('1')

    var removedUser = {
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }

    var remainingUsers = [{
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }]

    expect(resUser).toEqual(removedUser);
    expect(users.users).toEqual(remainingUsers);
  });

  it('should not remove user', () => {
    users.removeUser('5');
    expect(users.users.length).toBe(3);
    // user id that does not exist.  Array does not change.
  });

  it('should find user', () => {
    user = users.getUser('1');
    expect(user).toEqual(users.users[0])
  });

  it('should not find user', () => {
    user = users.getUser('5');
    console.log('USER', user);
    expect(user).toNotExist();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });
});
