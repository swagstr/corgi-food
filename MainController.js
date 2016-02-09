app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Dog Biscuits',
      description: 'Tangy and delicious. A treat for all.',
      price: 1.99
    },
    {
      name: "Bac'n Bits",
      description: "Who doesn't love bacon?",
      price: 2.99
    }
  ];
  
  $scope.mains = [
    {
      name: 'Pork Tenderloin',
      description: "So delicious you'll wish you ordered it.",
      price: 9.99
    },
    {
      name: 'Beef Brisket',
      description: 'Smothered in a fine gravy.',
      price: 12.99
    },
    {
      name: 'Vegan Surprise',
      description: 'We got hipster dogs covered!',
      price: 7.99
    }
   ];

    $scope.extras = [
    {
      name: 'Poop Bags',
      description: 'Ya know, just in case.',
      price: 0.25
    },
    {
      name: 'T-Shirts',
      description: "Who doesn't want a shirt with a Corgi on it?",
      price: 14.99
    }
   ];
  
}]);