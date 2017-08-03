let user = {
	name: 'franklin',
	location: 'Dallas, TX',
	occupations: ['web developer', 'student'],
	hobbies: [
    {
      name: 'coding',
      type: 'fun'
    },
    {
      name: 'ping-pong',
      type: 'exercise'
    },
    {
      name: 'gym',
      type: 'health'
    }
  ],
  family: [
    {
      name: 'Dylan',
      relation: 'peer',
      gender: 'male'
    },
    {
      name: 'Mitchell',
      relation: 'peer',
      gender: 'male'
    },{
      name: 'Erica',
      relation: 'mentor',
      gender: 'female'
    }
  ],
  restaurants: [
    {
      name: 'Irish Pub',
      type: 'pub',
      rating: 3
    },
    {
      name: 'City Tavern',
      type: 'tavern',
      rating: 5
    },
    {
      name: 'Chophouse Burger',
      type: 'restaurant',
      rating: 5
    }
  ]
};

module.exports = user;