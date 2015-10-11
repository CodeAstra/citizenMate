angular.module('starter')
  .factory('Officials', function() {
    var officials = [{
      id: 0,
      name: 'Sri K. Chandrashekar Rao',
      constituency: 'Gajwel',
      ministry: 'Chief Minister, SC, Minorities Welfare, Municipal Administration & Urban Development, Coal, GAD, All other portfolios not alloted',
      image: 'kcr.jpg'
    }, {
      id: 1,
      name: 'Sri Kadiyam Srihari',
      constituency: 'MLC',
      ministry: 'Deputy Chief Minister, Education',
      image: 'kadiyam.jpg'
    }, {
      id: 2,
      name: 'Sri Md. Mohamood Ali',
      constituency: 'MLC',
      ministry: 'Deputy Chief Minister, Revenue, Relief & Rehabilitation, ULC, Stamps & Registration.',
      image: 'ali.jpg'
    }, {
      id: 3,
      name: 'Sri Etela Rajender',
      constituency: 'Huzurabad',
      ministry: 'Finance & Planning, Small Savings, State Lotteries, Consumer Affairs, Legal Metrology, Civil Supllies.',
      image: 'rajender.jpg'
    }, {
      id: 4,
      name: 'Sri G. Jagadish Reddy',
      constituency: 'Suryapet',
      ministry: 'Energy',
      image: 'jagadish.jpg'
    }];

    return {
      all: function() {
        return officials;
      },
      get: function(officialId) {
        for (var i = 0; i < officials.length; i++) {
          if (officials[i].id === parseInt(officialId)) {
            return officials[i];
          }
        }
        return null;
      }
    };
  });
