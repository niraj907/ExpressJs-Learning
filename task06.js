const getUserSync = (userId) => { // there is a getUserSync function an userId is parameter
    const users = { // users object 
      1: { name: 'John', age: 35 },
      2: { name: 'Jane', age: 28 }
    };
    return users[userId];
  }
  
  const user = getUserSync(2);// arguments 2 pass 
  console.log(user);