export interface User {
  userid: number;
  username: string;
  password:string;
  address: string;
  userimg: string;
}

export const USERS: User[] = [
  {
    userid: 1,
    username: 'arpita',
    password:'password1',
    address: 'pune',
    userimg: 'url1',
  },
  {
    userid: 2,
    username: 'john',
    password:'password1',
    address: 'new york',
    userimg: 'url2',
  },
  {
    userid: 3,
    username: 'admin',
    password:'password',
    address: 'london',
    userimg: 'url3',
  },
  {
    userid: 4,
    username: 'alex',
    password:'password1',
    address: 'sydney',
    userimg: 'url4',
  },
  {
    userid: 5,
    username: 'mia',
    password:'password1',
    address: 'tokyo',
    userimg: 'url5',
  },
];



export interface Feedback {
    userid: number;
    resid: number;
    rating: number;
    feedbackText: string;
  }
  
  export const FEEDBACKS: Feedback[] = [
    { userid: 1, resid: 1, rating: 4, feedbackText: "Lovely ambience and delicious food!" },
    { userid: 2, resid: 1, rating: 5, feedbackText: "Excellent service and great atmosphere." },
    { userid: 3, resid: 2, rating: 3, feedbackText: "Good food but a bit too spicy for my taste." },
    { userid: 4, resid: 2, rating: 4, feedbackText: "Friendly staff and perfectly cooked steaks." },
    { userid: 5, resid: 3, rating: 5, feedbackText: "Amazing seafood varieties and breathtaking view!" },
 
  ];