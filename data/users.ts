import { User } from "../types";

/**
 * This array simulates a database consisting of a list of users.
 * After signing up with your auth solution (e.g. GitHub, Auth0)
 * place your user info in an object, with the email address you used
 * as the id.
 * The groupIds are the names of the groups the user is part of.
 * Group info is in /data/groups.ts
 */
export const users: Omit<User, "color">[] = [
  /*
  {
    id: "[YOUR EMAIL ADDRESS]",
    name: "[YOUR DISPLAY NAME]",
    avatar: "https://liveblocks.io/avatars/avatar-0.png",
    groupIds: ["product", "engineering", "design"],
  },
  */
  // {
  //   sub: "github|115375644",
  //   nickname: "willvernon",
  //   name: "willvernon",
  //   picture: "https://avatars.githubusercontent.com/u/115375644?v=4",
  //   updated_at: "2023-04-01T17:18:43.169Z",
  // },
  {
    id: "wmvernon@proton.me",
    name: "willvernon",
    avatar: "https://liveblocks.io/avatars/avatar-0.png",
    groupIds: ["product", "engineering", "design"],
  },
  {
    id: "willvernon",
    name: "willvernon",
    avatar: "https://liveblocks.io/avatars/avatar-0.png",
    groupIds: ["product", "engineering", "design"],
  },
];
