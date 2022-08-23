export const loanJson = [
  {
    id: 1,
    title: 'Home Loan',
    color: '#d2691e',
    icon: 'home-floor-l',
    data: 'You do not have Home Loan Account',
  },
  {
    id: 3,
    title: 'Vehicle Loan',
    color: '#8a2be2',
    icon: 'car-2-plus',
    data: 'You do not have Vehicle Loan Account',
  },
  {
    id: 5,
    title: 'Education Loan',
    color: '#00ced1',
    icon: 'school',
    data: 'You do not have Education Loan Account',
  },
  {
    id: 7,
    title: 'Personal Loan',
    color: '#228b22',
    icon: 'cash-100',
    data: 'You do not have Personal Loan Account',
  },

  {
    id: 9,
    title: 'Other Loan',
    color: '#4b0082',
    icon: 'cash-multiple',
    data: 'You do not have any Loan Account',
  },
];

export const activeLoanJson = [
  {
    id: 1,
    title: 'Home Loan',
    color: '#d2691e',
    icon: 'home-floor-l',
    data: [
      {id: 2, account: 'XXXXX XXXXX X9802', amount: '₹ 2,30,030', type: 'Dr'},
    ],
  },
  {
    id: 7,
    title: 'Personal Loan',
    color: '#228b22',
    icon: 'cash-100',
    data: [
      {id: 2, account: 'XXXXX XXXXX X5443', amount: '₹ 5,50,220', type: 'Dr'},
    ],
  },
];

export const mudraLoanJson = [
  {
    id: 1,
    title: 'Mudra Loan (Shishu)',
    color: '#8fbc8f',
    url: require('../assets/money.png'),
    data: [{id: 2, name: 'Covering Loans', amount: '₹ 50,000/-'}],
    weblink: 'https://www.mudra.org.in/',
  },
  {
    id: 3,
    title: 'Mudra Loan (Kishore)',
    color: '#b8860b',
    url: require('../assets/money2.png'),
    data: [{id: 4, name: 'Covering Loans', amount: '₹ 50,000- ₹ 5 Lakh'}],
    weblink: 'https://www.mudra.org.in/',
  },
  {
    id: 5,
    title: 'Mudra Loan (Tarun)',
    color: '#00ced1',
    url: require('../assets/money3.png'),
    data: [{id: 6, name: 'Covering Loans', amount: '₹ 5 Lakh- ₹ 10 Lakh'}],
    weblink: 'https://www.mudra.org.in/',
  },
];

export const transectionHistory = [
  {
    id: 1,
    account: 'XXXXX XXXXX X0287',
    amount: '₹ 35,003',
    type: 'Dr',
    time: '21 Aug 22',
  },
  {
    id: 2,
    account: 'XXXXX XXXXX X9042',
    amount: '₹ 2,000',
    type: 'Cr',
    time: '13 Aug 22',
  },
  {
    id: 3,
    account: 'XXXXX XXXXX X3378',
    amount: '₹ 13,456',
    type: 'Dr',
    time: '09 July 22',
  },
  {
    id: 4,
    account: 'XXXXX XXXXX X2378',
    amount: '₹ 34,900',
    type: 'Cr',
    time: '02 July 22',
  },
  {
    id: 5,
    account: 'XXXXX XXXXX X7767',
    amount: '₹ 60,030',
    type: 'Cr',
    time: '23 June 22',
  },
  {
    id: 6,
    account: 'XXXXX XXXXX X3029',
    amount: '₹ 250',
    type: 'Dr',
    time: '12 June 22',
  },
  {
    id: 7,
    account: 'XXXXX XXXXX X0287',
    amount: '₹ 1,006',
    type: 'Dr',
    time: '09 April 22',
  },
  {
    id: 8,
    account: 'XXXXX XXXXX X2267',
    amount: '₹ 720',
    type: 'Cr',
    time: '11 April 22',
  },
  {
    id: 9,
    account: 'XXXXX XXXXX X',
    amount: '₹ 7,030',
    type: 'Cr',
    time: '24 March 21',
  },
  {
    id: 10,
    account: 'XXXXX XXXXX X9802',
    amount: '₹ 1000',
    type: 'Dr',
    time: '12 June 21',
  },
];

export const bankList = [
  {
    id: 1,
    name: 'Allahabad Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Allahabad_Bank_Logo.svg/1200px-Allahabad_Bank_Logo.svg.png',
  },
  {
    id: 2,
    name: 'Andhra Bank',
    image:
      'http://www.logotaglines.com/wp-content/uploads/2016/07/andhra-bank-logo.gif',
  },
  {
    id: 3,
    name: 'Bank of Baroda',
    image:
      'https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-icon.png',
  },
  {
    id: 4,
    name: 'Bank of India',
    image:
      'http://www.logotaglines.com/wp-content/uploads/2016/08/bank-of-india-logo-1.png',
  },

  {
    id: 5,
    name: 'Canara Bank',
    image:
      'http://www.logotaglines.com/wp-content/uploads/2016/08/wp-1470410546498.jpg',
  },
  {
    id: 6,
    name: 'Central Bank of India',
    image:
      'https://www.jobskar.com/uploads/orgimg/16ad738848909edd25f8727b00304210.png',
  },
  {
    id: 7,
    name: 'Corporation Bank',
    image:
      'https://bankingsupport.info/wp-content/uploads/2020/12/Corpbank_AboutUs_TheLogo.jpg',
  },
  {
    id: 8,
    name: 'Dena Bank',
    image:
      'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1478685127/dlxmefywim1rledzxe1o.png',
  },

  {
    id: 9,
    name: 'Axis Bank Limited',
    image:
      'https://i0.wp.com/www.logotaglines.com/wp-content/uploads/2016/08/Axis-Bank-Logo.png?resize=400%2C400',
  },
  {
    id: 10,
    name: '	Bandhan Bank Limited',
    image:
      'https://www.capitalmarket.com/IImagesNew/BandhanBankLtd_94952261769_68090.png',
  },

  {
    id: 11,
    name: 'Federal Bank Limited',
    image:
      'https://pbs.twimg.com/profile_images/1383092873520816129/bSk9I8CF_400x400.jpg',
  },
  {
    id: 12,
    name: 'HDFC Bank Limited',
    image:
      'https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-emblem.png',
  },
  {
    id: 13,
    name: 'ICICI Bank Limited',
    image:
      'http://www.logotaglines.com/wp-content/uploads/2016/08/ICICI-Logo.png',
  },
  {
    id: 14,
    name: 'IndusInd Bank Limited',
    image:
      'https://play-lh.googleusercontent.com/X5pTShEdjyqC7kcQvsMr3XkXp8Sejo5KhOvBuRGvRBToQr5XUwsP5QCBvm1kg_XXfUPb',
  },
  {
    id: 15,
    name: 'IDFC Bank Limited',
    image: 'http://assets.stickpng.com/thumbs/627ccbbf1b2e263b45696aaa.png',
  },

  {
    id: 16,
    name: 'RBL Bank Limited',
    image: 'https://s3-symbol-logo.tradingview.com/rbl-bank--600.png',
  },

  {
    id: 17,
    name: 'YES Bank Limited',
    image:
      'https://i0.wp.com/logotaglines.com/wp-content/uploads/2016/08/Yes-Bank-Logo.png?fit=180%2C180&ssl=1',
  },
];
