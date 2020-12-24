const categories = [
    {
      name:'Backlog',
      dependence: '#manualAdd'
  },
  {
      name:'Ready',
      dependence: 'Backlog'
  },
  {
      name:'In Progress',
      dependence: 'Ready'
  },
  {
      name:'Finished',
      dependence: 'In Progress'
  }
  ];


  export { categories as default };