import { Cat } from './src/models/Cat';

export const resolvers = {
  Query: {
    hello: () => 'hello',
    cats: () => Cat.find(),
  },
  Mutation: {
    createCat: (_, { name }) => {
      const kitty = new Cat({ name });
      console.log(kitty);
      return kitty.save();
    },
  },
};

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
