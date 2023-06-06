import { users } from "./users";

export const POSTS = [
  {
    imageurl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    user: users[0].user,
    likes: 70000,
    caption: "No Protests Allowed At India Gate: Delhi Cops To Wrestlers",
    profile_picture: users[0].image,
    comments: [
      {
        user: "theqazman",
        comment: "i am ni",
      },
      {
        user: "gudla",
        comment: "i am nuhj",
      },
    ],
  },
  {
    imageurl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
    user: users[1].user,
    likes: 7870,
    caption:
      "Mahi Bhai Aapke Liye Toh Kuch Bhi...: Jadeja's Tweet For Dhoni After CSK's Win In IPL 2023 Final Wins Internet",
    profile_picture: users[1].image,
    comments: [
      {
        user: "theqazman",
        comment: "i am ni",
      },
    ],
  },
];
